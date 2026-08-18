function o(f) {
  return f.every((e) => typeof e == "object");
}
function r(f, e, n) {
  e.forEach((t) => {
    f[t] !== void 0 && n(t);
  });
}
function c(f, ...e) {
  let n = { ...f };
  for (const t of e)
    t === !1 ? n = {} : typeof t == "function" ? n = t(n, f) : typeof t == "object" && t !== null && (n = { ...n, ...t });
  return n;
}
function u(f, e) {
  return e ? e === !1 ? "" : typeof e == "function" ? e(f) : [f, e] : f;
}
export {
  r as checkDeprecatedProps,
  o as isArrayOfObjects,
  c as mergeClassLookups,
  u as resolveClassOverride
};
