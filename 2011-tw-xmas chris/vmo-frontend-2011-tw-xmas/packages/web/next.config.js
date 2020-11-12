const withTypescript = require('@zeit/next-typescript');

module.exports = withTypescript({
  assetPrefix: './',
  pageExtensions: ['tsx', 'mdx'],

  webpack(config, options) {
    config.resolve.mainFields = ['module', 'main', 'browser'];

    config.module.rules.push(
      {
        test: /\.md$/,
        use: 'raw-loader',
      },
      {
        test: /\.tsx?$/,
        include: undefined,
        use: [options.defaultLoaders.babel],
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
    );

    return config;
  },
});
