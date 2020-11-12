import fs from 'fs';
import path from 'path';
import child from 'child_process';

const staPrefix = '10262-';
const prodPrefix = '10198-';

const outDir = path.join(__dirname, '../out');

const isProd = process.argv.includes('--prod');

const stat = (p: string): Promise<fs.Stats> =>
  new Promise((resolve, reject) => {
    fs.stat(p, (err, st) => {
      if (err) reject(err);

      resolve(st);
    });
  });

const spawn = (cmd: string): Promise<void> =>
  new Promise((resolve, reject) => {
    const sp = child
      .spawn(cmd, {
        stdio: 'inherit',
        shell: true,
        cwd: path.join(__dirname, '../'),
      })
      .on('exit', code => {
        if (code) reject(code);
        resolve();
      })
      .on('error', reject);
  });

const bucket = (...folder: string[]) => {
  const domain = isProd ? 'vmo.17.media' : 'sta-vmo.17.media';

  return `gs://${path.join(domain, ...folder)}`;
};

const projectNameFunc = (project: string) =>
  isProd ? `10198-${project}` : `${staPrefix}${project}`;

(async () => {
  await spawn(`
    yarn
    yarn build
  `);
  const list = fs.readdirSync(outDir);

  const listStat = await Promise.all(list.map(l => stat(path.join(outDir, l))));

  list
    .filter(
      (l, i) => listStat[i].isDirectory() && l !== '_next' && l !== 'static',
    )
    .forEach(l => {
      const projectName = projectNameFunc(l);
      const bkt = bucket(`${projectName}`);
      spawn(`
        cp -r out/_next out/${l}
        cp -r out/static out/${l}
        touch out/${l}/$(git rev-parse HEAD) "out/${l}/$(git config --get user.name)"
        gsutil -m -h "Cache-Control:private, max-age=0, no-transform" rsync -r out/${l} ${bkt}
        echo "$(du -sh out/${l}) -> ${bkt}"
      `);
    });
})();

process.on('unhandledRejection', err => {
  console.error(`Error: ${err}`);
});
