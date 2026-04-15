import { ref as s, provide as l, computed as p, createElementBlock as f, openBlock as m, renderSlot as d } from "vue";
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
    debug: Boolean,
    /**
     * If true, the last section will deactivate when scrolling past its bounding box.
     * By default, the last section remains active until the user scrolls back up.
     */
    deactivateLastItem: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["section-change"],
  setup(c, { emit: r }) {
    const a = c, u = r, e = s([]), n = s(null);
    return h({ sections: e, props: a, emit: u, componentElRef: n }), l("uluScrollAnchorsSections", p(() => e.value)), l("uluScrollAnchorsRegister", (o) => {
      e.value.push(o);
    }), l("uluScrollAnchorsUnregister", (o) => {
      const t = e.value.findIndex((i) => i.id === o);
      t > -1 && e.value.splice(t, 1);
    }), (o, t) => (m(), f("div", {
      class: "scroll-anchors",
      ref_key: "componentEl",
      ref: n
    }, [
      d(o.$slots, "default")
    ], 512));
  }
};
export {
  A as default
};
