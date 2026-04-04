import { onMounted as T, onUnmounted as Y, watch as F, nextTick as O } from "vue";
import { getScrollParent as C } from "@ulu/utils/browser/dom.js";
function D({ sections: i, props: e, emit: h, componentElRef: I }) {
  let r = null;
  function v(t) {
    return i.value.findIndex(({ element: l }) => t === l);
  }
  function w(t = null, l = "down") {
    i.value.forEach((c) => {
      c !== t && (c.active && (c.inactiveFrom = l === "down" ? "forward" : "reverse", c.activeFrom = null), c.active = !1);
    });
  }
  function A() {
    let t = 0, l = !0;
    const c = (a) => {
      const { root: S } = r, d = S ? S.scrollTop : document.documentElement.scrollTop || window.scrollY;
      if (e.debug && (console.group("useScrollAnchors: onObserve"), console.log("Observer:", r), console.log("Last/Current Y:", `${t}/${d}`), console.log("Entries:", a.map((n) => ({ el: n.target, is: n.isIntersecting })))), l && e.firstItemActive) {
        e.debug && console.log("Initial observation, respecting `firstItemActive`."), l = !1, t = d, e.debug && console.groupEnd();
        return;
      }
      l = !1;
      const s = d > t ? "down" : "up";
      t = d, e.debug && console.log(`Scroll direction: ${s}`);
      const f = a.filter((n) => n.isIntersecting);
      if (e.debug && console.log("Intersecting entries:", f.map((n) => n.target)), f.length > 0) {
        f.sort((u, m) => v(u.target) - v(m.target));
        const n = s === "down" ? f[f.length - 1] : f[0];
        e.debug && console.log("Chosen target entry:", n.target);
        const o = i.value[v(n.target)];
        o && !o.active && (e.debug && console.log("Activating section:", o.title), O(() => {
          w(o, s), o.active = !0, o.inactiveFrom = null, o.activeFrom = s === "down" ? "forward" : "reverse", h("section-change", { section: o, sections: i.value, active: !0 });
        }));
      } else {
        e.debug && console.log("No intersecting entries. Checking edge cases.");
        const n = i.value.find((o) => o.active);
        if (n) {
          const o = a.find((u) => u.target === n.element);
          if (o && !o.isIntersecting) {
            const u = v(o.target), m = u === 0, y = u === i.value.length - 1;
            (m && s === "up" && !e.firstItemActive || y && s === "down") && (e.debug && console.log("Deactivating section at edge:", n.title), O(() => {
              w(null, s), h("section-change", { section: n, sections: i.value, active: !1 });
            }));
          }
        }
      }
      e.debug && console.groupEnd();
    };
    let g = null;
    e.observerOptions && e.observerOptions.root !== void 0 ? g = e.observerOptions.root : I.value && (g = C(I.value), g === document.scrollingElement && (g = null));
    let E = {
      rootMargin: "-25% 0px -55% 0px",
      threshold: 0
    };
    if (e.snapOffset !== !1 && e.snapOffset !== void 0) {
      const a = e.snapOffset === !0 ? 20 : Number(e.snapOffset);
      E.rootMargin = `-${a}% 0px -${99 - a}% 0px`;
    }
    const $ = {
      ...E,
      ...e.observerOptions || {},
      root: g
    };
    r = new IntersectionObserver(c, $);
  }
  function b() {
    r && (r.disconnect(), i.value.forEach(({ element: t }) => {
      t && r.observe(t);
    }));
  }
  function x() {
    r && (r.disconnect(), r = null);
  }
  T(() => {
    if (e.firstItemActive && i.value.length > 0) {
      const t = i.value[0];
      t && (t.active = !0);
    }
    A(), b();
  }), Y(() => {
    x();
  }), F(() => i.value.length, () => {
    O(() => {
      b();
    });
  }), F(
    () => [e.snapOffset, e.observerOptions],
    () => {
      x(), A(), b();
    },
    { deep: !0 }
  );
}
export {
  D as useScrollAnchors
};
