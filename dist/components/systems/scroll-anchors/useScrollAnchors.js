import { onMounted as P, onUnmounted as U, watch as Y, nextTick as L } from "vue";
import { getScrollParent as M } from "@ulu/utils/browser/dom.js";
import { debounce as j } from "@ulu/utils/performance.js";
function J({ sections: r, props: t, emit: T, componentElRef: m }) {
  let a = null, O = 0, k = "down", d = null, x = !0;
  function g(e) {
    return r.value.findIndex(({ element: n }) => e === n);
  }
  function B(e, n, s = "down") {
    if (!e) return;
    const v = s === "down" ? "forward" : "reverse";
    n ? (e.active = !0, e.inactiveFrom = null, e.activeFrom = v) : (e.active && (e.inactiveFrom = v, e.activeFrom = null), e.active = !1);
  }
  function $(e = null, n = "down") {
    r.value.forEach((s) => {
      s !== e && B(s, !1, n);
    });
  }
  function h(e, n) {
    e && !e.active && (t.debug && console.log("Activate:", e.title), L(() => {
      $(e, n), B(e, !0, n), T("section-change", { section: e, sections: r.value, active: !0 });
    }));
  }
  function I(e, n) {
    const s = r.value.find((v) => v.active);
    s && (t.debug && n && console.log(n, s.title), L(() => {
      $(null, e), T("section-change", { section: s, sections: r.value, active: !1 });
    }));
  }
  function y() {
    let e = null;
    return t.observerOptions && t.observerOptions.root !== void 0 ? e = t.observerOptions.root : m.value && (e = M(m.value), e === document.scrollingElement && (e = null)), e || window;
  }
  const A = j(() => {
    t.debug && console.log("New Observer (debounced/check)"), a && (a.disconnect(), a = null), E(), w();
  }, 100);
  function C() {
    D(), d = y(), d && d.addEventListener("scroll", A, { passive: !0 });
  }
  function D() {
    d && (d.removeEventListener("scroll", A), d = null);
  }
  function E() {
    x = !0;
    const e = (u) => {
      const { root: R } = a, S = R ? R.scrollTop : document.documentElement.scrollTop || window.scrollY;
      let i = k;
      S > O ? i = "down" : S < O && (i = "up"), t.debug && (console.groupCollapsed(`Scroll: ${O} -> ${S} (${i})`), console.table(u.map((o) => ({
        el: o.target.id || o.target.tagName,
        int: o.isIntersecting,
        ratio: o.intersectionRatio.toFixed(2)
      })))), O = S, k = i;
      const b = u.filter((o) => o.isIntersecting);
      if (b.length > 0) {
        b.sort((c, f) => g(c.target) - g(f.target));
        const o = i === "down" ? b[b.length - 1] : b[0];
        t.debug && console.log("Target:", o.target.id || o.target.tagName);
        const l = r.value[g(o.target)];
        h(l, i);
      } else if (x) {
        t.debug && console.log("Fallback: bounds");
        let o = -1;
        if (u.forEach((l) => {
          const c = l.rootBounds ? l.rootBounds.top : 0;
          if (l.boundingClientRect.top <= c + 1) {
            const f = g(l.target);
            f > o && (o = f);
          }
        }), o > -1) {
          const l = o === r.value.length - 1, c = r.value[o];
          if (l && t.deactivateLastItem) {
            const f = u.find((H) => H.target === c.element), F = f.rootBounds ? f.rootBounds.bottom : window.innerHeight;
            f && f.boundingClientRect.bottom < F ? I(i, "Deactivate (last):") : h(c, i);
          } else
            h(c, i);
        } else if (t.debug && console.log("Fallback: top"), !t.firstItemActive)
          I(i, "Deactivate (top):");
        else {
          const l = r.value[0];
          h(l, i);
        }
      } else {
        t.debug && console.log("Check edges");
        const o = r.value.find((l) => l.active);
        if (o) {
          const l = u.find((c) => c.target === o.element);
          if (l && !l.isIntersecting) {
            const c = g(l.target), f = c === 0, F = c === r.value.length - 1;
            (f && i === "up" && !t.firstItemActive || F && i === "down" && t.deactivateLastItem) && I(i, "Deactivate (edge):");
          }
        }
      }
      x = !1, t.debug && console.groupEnd();
    };
    let n = null;
    t.observerOptions && t.observerOptions.root !== void 0 ? n = t.observerOptions.root : m.value && (n = M(m.value), n === document.scrollingElement && (n = null));
    let s = {
      rootMargin: "-25% 0px -55% 0px",
      threshold: 0
    };
    if (t.snapOffset !== !1 && t.snapOffset !== void 0) {
      const u = t.snapOffset === !0 ? 20 : Number(t.snapOffset);
      s.rootMargin = `-${u}% 0px -${99 - u}% 0px`;
    }
    const v = {
      ...s,
      ...t.observerOptions || {},
      root: n
    };
    a = new IntersectionObserver(e, v);
  }
  function w() {
    a && (a.disconnect(), r.value.forEach(({ element: e }) => {
      e && a.observe(e);
    }));
  }
  function N() {
    a && (a.disconnect(), a = null);
  }
  P(() => {
    E(), w(), C();
  }), U(() => {
    N(), D(), A.cancel();
  }), Y(() => r.value.length, () => {
    L(() => {
      w();
    });
  }), Y(
    () => [t.snapOffset, t.observerOptions],
    () => {
      N(), E(), w(), C();
    },
    { deep: !0 }
  );
}
export {
  J as useScrollAnchors
};
