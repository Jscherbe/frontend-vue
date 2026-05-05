function f(e) {
  return e.every((r) => typeof r == "object");
}
function o(e, r, t) {
  r.forEach((c) => {
    e[c] !== void 0 && t(c);
  });
}
export {
  o as checkDeprecatedProps,
  f as isArrayOfObjects
};
