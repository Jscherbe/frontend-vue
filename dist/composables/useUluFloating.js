import { ref as u, computed as n, watch as d } from "vue";
import { useFloating as v, autoUpdate as F, inline as S, offset as R, flip as U, shift as $, arrow as b } from "@floating-ui/vue";
function D(m, f, r) {
  const s = u(null), o = u([]), w = n(() => r.value?.placement), {
    floatingStyles: h,
    placement: y,
    middlewareData: i,
    update: l,
    isPositioned: p
  } = v(m, f, {
    placement: w,
    whileElementsMounted: F,
    middleware: o
  });
  d(
    [r, s],
    ([t, a]) => {
      const e = [];
      t && (t.inline && e.push(S(t.inline)), t.offset && e.push(R(t.offset)), e.push(U(t.flip)), e.push($(t.shift)), t.arrow && a && e.push(b({ element: a })), o.value = e);
    },
    { immediate: !0, deep: !0 }
  );
  const x = n(() => {
    const t = i.value?.arrow;
    return t ? {
      position: "absolute",
      left: t?.x != null ? `${t.x}px` : "",
      top: t?.y != null ? `${t.y}px` : ""
    } : null;
  });
  d(r, (t) => {
    t && t.onReady && t.onReady({ update: l, isPositioned: p });
  });
  const c = n(() => r.value?.strategy === "fixed");
  return {
    floatingStyles: h,
    placement: y,
    middlewareData: i,
    update: l,
    isPositioned: p,
    arrowStyles: x,
    contentArrow: s,
    isFixedStrategy: c
  };
}
export {
  D as useUluFloating
};
