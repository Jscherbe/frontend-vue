import { ref as p, computed as r, watch as d } from "vue";
import { useFloating as v, autoUpdate as F, inline as S, offset as R, flip as U, shift as $, arrow as b } from "@floating-ui/vue";
function D(m, f, n) {
  const o = p(null), s = p([]), w = r(() => n.value?.placement), {
    floatingStyles: h,
    placement: y,
    middlewareData: l,
    update: i,
    isPositioned: a
  } = v(m, f, {
    placement: w,
    whileElementsMounted: F,
    middleware: s
  });
  d(
    [n, o],
    ([e, u]) => {
      const t = [];
      e && (e.inline && t.push(S()), e.offset && t.push(R(e.offset)), t.push(U()), t.push($()), e.arrow && u && t.push(b({ element: u })), s.value = t);
    },
    { immediate: !0, deep: !0 }
  );
  const c = r(() => {
    const e = l.value?.arrow;
    return e ? {
      position: "absolute",
      left: e?.x != null ? `${e.x}px` : "",
      top: e?.y != null ? `${e.y}px` : ""
    } : null;
  });
  d(n, (e) => {
    e && e.onReady && e.onReady({ update: i, isPositioned: a });
  });
  const x = r(() => n.value?.strategy === "fixed");
  return {
    floatingStyles: h,
    placement: y,
    middlewareData: l,
    update: i,
    isPositioned: a,
    arrowStyles: c,
    contentArrow: o,
    isFixedStrategy: x
  };
}
export {
  D as useUluFloating
};
