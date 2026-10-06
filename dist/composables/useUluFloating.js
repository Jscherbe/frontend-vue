import { ref as u, computed as r, watch as d } from "vue";
import { useFloating as F, autoUpdate as S, inline as b, offset as C, flip as R, shift as U, arrow as $ } from "@floating-ui/vue";
function M(m, f, s) {
  const n = u(null), o = u([]), y = r(() => s.value?.placement), w = r(() => s.value?.strategy || "absolute"), {
    floatingStyles: h,
    placement: x,
    middlewareData: l,
    update: a,
    isPositioned: i
  } = F(m, f, {
    placement: y,
    strategy: w,
    whileElementsMounted: S,
    middleware: o
  });
  d(
    [s, n],
    ([t, p]) => {
      const e = [];
      t && (t.inline && e.push(b(t.inline)), t.offset && e.push(C(t.offset)), e.push(R(t.flip)), e.push(U(t.shift)), t.arrow && p && e.push($({ element: p })), o.value = e);
    },
    { immediate: !0, deep: !0 }
  );
  const v = r(() => {
    const t = l.value?.arrow;
    return t ? {
      position: "absolute",
      left: t?.x != null ? `${t.x}px` : "",
      top: t?.y != null ? `${t.y}px` : ""
    } : null;
  });
  d(s, (t) => {
    t && t.onReady && t.onReady({ update: a, isPositioned: i });
  });
  const c = r(() => s.value?.strategy === "fixed");
  return {
    floatingStyles: h,
    placement: x,
    middlewareData: l,
    update: a,
    isPositioned: i,
    arrowStyles: v,
    contentArrow: n,
    isFixedStrategy: c
  };
}
export {
  M as useUluFloating
};
