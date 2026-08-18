function t(f) {
  return f.every((r) => typeof r == "object");
}
function c(f, r, o) {
  r.forEach((e) => {
    f[e] !== void 0 && o(e);
  });
}
function n(f, ...r) {
  let o = { ...f };
  for (const e of r)
    e === !1 ? o = {} : typeof e == "function" ? o = e(o, f) : typeof e == "object" && e !== null && (o = { ...o, ...e });
  return o;
}
export {
  c as checkDeprecatedProps,
  t as isArrayOfObjects,
  n as mergeClassLookups
};
