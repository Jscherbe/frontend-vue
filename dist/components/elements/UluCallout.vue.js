import { useModifiers as t } from "../../composables/useModifiers.js";
import { createElementBlock as s, openBlock as a, normalizeClass as i, renderSlot as n } from "vue";
import f from "../../_virtual/_plugin-vue_export-helper.js";
const u = {
  name: "UluCallout",
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
    const { resolvedModifiers: o } = t({ props: e, baseClass: "callout" });
    return { resolvedModifiers: o };
  }
};
function c(e, o, l, r, d, m) {
  return a(), s("div", {
    class: i(["callout", [r.resolvedModifiers, { "full-height": l.fullHeight }]])
  }, [
    n(e.$slots, "default")
  ], 2);
}
const g = /* @__PURE__ */ f(u, [["render", c]]);
export {
  g as default
};
