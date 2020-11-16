const hashCode = str => {
  let h = 0;
  if (str) {
    const len = str.length;
    const t = 2147483648;
    for (let i = 0; i < len; i += 1) {
      h = 31 * h + str.charCodeAt(i);
      if (h > 2147483647) h %= t;
    }
  }
  return h;
};

export { hashCode };
