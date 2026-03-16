import { createElementBlock as t, openBlock as s, normalizeClass as a, unref as i, renderSlot as n } from "vue";
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
     * - Can be String or Array of Strings
     */
    modifiers: [String, Array]
  },
  setup(e) {
    const l = e, { resolvedModifiers: o } = u({ props: l, baseClass: "callout" });
    return (r, c) => (s(), t("div", {
      class: a(["callout", [i(o), { "full-height": e.fullHeight }]])
    }, [
      n(r.$slots, "default")
    ], 2));
  }
};
export {
  d as default
};
