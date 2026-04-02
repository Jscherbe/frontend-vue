function t(e) {
  return e.every((n) => typeof n == "object");
}
function i(e, n, r, o) {
  n[r] !== void 0 && typeof process < "u" && process.env.NODE_ENV !== "production" && console.warn(`[${e}]: Prop '${r}' is deprecated and will be removed in future, Use '${o}' instead`);
}
export {
  t as isArrayOfObjects,
  i as warnDeprecatedProp
};
