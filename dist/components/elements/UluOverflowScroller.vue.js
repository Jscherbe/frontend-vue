import { ref as d, onMounted as g, nextTick as k, onBeforeUnmount as B, createBlock as N, openBlock as v, resolveDynamicComponent as x, withCtx as w, renderSlot as f, createElementBlock as L, createCommentVNode as R, normalizeClass as o, createElementVNode as s, createVNode as b } from "vue";
import y from "./UluIcon.vue.js";
const E = ["aria-controls", "disabled"], A = ["aria-controls", "disabled"], P = {
  __name: "UluOverflowScroller",
  props: {
    /**
     * The HTML element to use as the root wrapper.
     */
    element: { type: String, default: "div" },
    /**
     * Show previous/next controls.
     */
    controls: { type: Boolean, default: !0 },
    /**
     * The ID of the track element, used for aria-controls.
     */
    trackId: { type: String, default: null },
    /**
     * Scroll amount (in pixels) for the next/prev buttons.
     * If 'auto', it scrolls by the visible width of the track.
     */
    scrollAmount: { type: [Number, String], default: "auto" },
    /**
     * Scroll behavior ('smooth' or 'auto').
     */
    scrollBehavior: { type: String, default: "smooth" },
    /**
     * CSS class namespace for controls.
     */
    namespace: { type: String, default: "OverflowScroller" },
    /**
     * Additional class to apply to the controls container.
     */
    controlsClass: { type: String, default: "" },
    /**
     * Button classes to apply.
     */
    buttonClasses: { type: Array, default: () => ["button", "button--icon"] },
    /**
     * Icon definition for previous button.
     */
    iconClassPrevious: { type: String, default: "type:previous" },
    /**
     * Icon definition for next button.
     */
    iconClassNext: { type: String, default: "type:next" },
    /**
     * Offset threshold to consider "at start" (disables previous button).
     */
    offsetStart: { type: Number, default: 10 },
    /**
     * Offset threshold to consider "at end" (disables next button).
     */
    offsetEnd: { type: Number, default: 10 }
  },
  setup(e) {
    const c = e, n = d(null), r = d(!1), i = d(!1), S = (t) => {
      n.value = t;
    }, u = () => {
      if (!n.value) return;
      const { scrollLeft: t, scrollWidth: l, clientWidth: a } = n.value;
      r.value = t > c.offsetStart, i.value = Math.ceil(t + a) < l - c.offsetEnd;
    }, h = () => {
      u();
    }, m = (t) => {
      if (!n.value) return;
      const { clientWidth: l } = n.value;
      let a = c.scrollAmount;
      a === "auto" && (a = l), n.value.scrollBy({
        left: t === "right" ? a : -a,
        behavior: c.scrollBehavior
      });
    }, $ = () => m("left"), C = () => m("right");
    return g(() => {
      k(() => {
        u();
      }), window.addEventListener("resize", u);
    }), B(() => {
      window.removeEventListener("resize", u);
    }), (t, l) => (v(), N(x(e.element), null, {
      default: w(() => [
        f(t.$slots, "default", {
          setTrackRef: S,
          onScroll: h,
          canScrollLeft: r.value,
          canScrollRight: i.value
        }),
        e.controls ? (v(), L("ul", {
          key: 0,
          class: o([`${e.namespace}__controls`, e.controlsClass])
        }, [
          s("li", {
            class: o([`${e.namespace}__controls-item`, `${e.namespace}__controls-item--previous`, { [`${e.namespace}__controls-item--disabled`]: !r.value }])
          }, [
            s("button", {
              class: o([`${e.namespace}__control-button`, `${e.namespace}__control-button--previous`, ...e.buttonClasses]),
              "aria-label": "Scroll Left",
              "aria-controls": e.trackId,
              onClick: $,
              disabled: !r.value
            }, [
              f(t.$slots, "previous", {}, () => [
                l[0] || (l[0] = s("span", { class: "hidden-visually" }, "Previous", -1)),
                b(y, {
                  icon: e.iconClassPrevious,
                  class: o(`${e.namespace}__control-icon`)
                }, null, 8, ["icon", "class"])
              ])
            ], 10, E)
          ], 2),
          s("li", {
            class: o([`${e.namespace}__controls-item`, `${e.namespace}__controls-item--next`, { [`${e.namespace}__controls-item--disabled`]: !i.value }])
          }, [
            s("button", {
              class: o([`${e.namespace}__control-button`, `${e.namespace}__control-button--next`, ...e.buttonClasses]),
              "aria-label": "Scroll Right",
              "aria-controls": e.trackId,
              onClick: C,
              disabled: !i.value
            }, [
              f(t.$slots, "next", {}, () => [
                l[1] || (l[1] = s("span", { class: "hidden-visually" }, "Next", -1)),
                b(y, {
                  icon: e.iconClassNext,
                  class: o(`${e.namespace}__control-icon`)
                }, null, 8, ["icon", "class"])
              ])
            ], 10, A)
          ], 2)
        ], 2)) : R("", !0)
      ]),
      _: 3
    }));
  }
};
export {
  P as default
};
