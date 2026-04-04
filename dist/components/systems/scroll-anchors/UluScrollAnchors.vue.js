import { ref as s, provide as n, computed as p, createElementBlock as f, openBlock as m, renderSlot as d } from "vue";
import { useScrollAnchors as h } from "./useScrollAnchors.js";
const A = {
  __name: "UluScrollAnchors",
  props: {
    /**
     * Make the first item active by default on load
     */
    firstItemActive: Boolean,
    /**
     * Custom IntersectionObserver options to completely override internal defaults.
     * Defaults: { root: null, threshold: 0, rootMargin: "-25% 0px -55% 0px" }
     * See: https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/IntersectionObserver
     * @type {Object|null}
     */
    observerOptions: {
      type: Object,
      default: null
    },
    /**
     * Creates a strict 1% horizontal observation line to trigger active states.
     * - Accepts a number representing the percentage down from the top of the screen (e.g., 20 for 20%).
     * - If you pass true it will default to 20%
     * - Optional not enabled by default
     * - You can control this yourself with observerOptions
     * @type {Number|Boolean}
     * @default false
     */
    snapOffset: {
      type: [Number, Boolean],
      default: !1
    },
    /**
     * Enable debug logging for the IntersectionObserver
     */
    debug: Boolean
  },
  emits: ["section-change"],
  setup(r, { emit: c }) {
    const u = r, a = c, e = s([]), t = s(null);
    return h({ sections: e, props: u, emit: a, componentElRef: t }), n("uluScrollAnchorsSections", p(() => e.value)), n("uluScrollAnchorsRegister", (o) => {
      e.value.push(o);
    }), n("uluScrollAnchorsUnregister", (o) => {
      const l = e.value.findIndex((i) => i.id === o);
      l > -1 && e.value.splice(l, 1);
    }), (o, l) => (m(), f("div", {
      class: "scroll-anchors",
      ref_key: "componentEl",
      ref: t
    }, [
      d(o.$slots, "default")
    ], 512));
  }
};
export {
  A as default
};
