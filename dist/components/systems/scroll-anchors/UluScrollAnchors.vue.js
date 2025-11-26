import { ref as n, provide as r, computed as a, createElementBlock as m, openBlock as d, renderSlot as f } from "vue";
import { useScrollAnchors as h } from "./useScrollAnchors.js";
const A = {
  __name: "UluScrollAnchors",
  props: {
    /**
     * Make the first item active by default on load
     */
    firstItemActive: Boolean,
    /**
     * IntersectionObserver options
     * - Defaults: { root: null, threshold: 0, rootMargin: "-25% 0px -55% 0px" }
     * See: https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/IntersectionObserver
     */
    observerOptions: {
      type: Object,
      default: () => ({
        root: null,
        threshold: 0,
        rootMargin: "-25% 0px -55% 0px"
      })
    },
    /**
     * Enable debug logging for the IntersectionObserver
     */
    debug: Boolean
  },
  emits: ["section-change"],
  setup(c, { emit: s }) {
    const u = c, i = s, e = n([]), t = n(null);
    return h({ sections: e, props: u, emit: i, componentElRef: t }), r("uluScrollAnchorsSections", a(() => e.value)), r("uluScrollAnchorsRegister", (o) => {
      e.value.push(o);
    }), r("uluScrollAnchorsUnregister", (o) => {
      const l = e.value.findIndex((p) => p.id === o);
      l > -1 && e.value.splice(l, 1);
    }), (o, l) => (d(), m("div", {
      class: "scroll-anchors",
      ref_key: "componentEl",
      ref: t
    }, [
      f(o.$slots, "default")
    ], 512));
  }
};
export {
  A as default
};
