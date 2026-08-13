import { createElementBlock as r, openBlock as s, normalizeClass as a, unref as i, renderSlot as n } from "vue";
import { useModifiers as u } from "../../composables/useModifiers.js";
const d = {
  __name: "UluCallout",
  props: {
    /**
     * Add full height utility class
     */
    fullHeight: Boolean,
    /**
     * Class modifiers (ie. 'transparent', 'secondary', etc)
     * - Can be String, Array, or Object
     */
    modifiers: [String, Array, Object]
  },
  setup(e) {
    const l = e, { resolvedModifiers: o } = u({ props: l, baseClass: "callout" });
    return (t, c) => (s(), r("div", {
      class: a(["callout", [i(o), { "full-height": e.fullHeight }]])
    }, [
      n(t.$slots, "default")
    ], 2));
  }
};
export {
  d as default
};
