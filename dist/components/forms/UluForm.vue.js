import { createBlock as l, openBlock as o, resolveDynamicComponent as a, normalizeClass as i, withCtx as m, renderSlot as n } from "vue";
const r = {
  __name: "UluForm",
  props: {
    /**
     * The HTML element to use for the form.
     */
    element: {
      type: String,
      default: "form"
    },
    /**
     * If true, applies the full-width styles to text inputs.
     */
    fullWidth: Boolean,
    /**
     * If true, applies the full-width styles to select inputs.
     */
    fullWidthSelect: Boolean,
    /**
     * If true, hides all labels in the form.
     */
    hideLabels: Boolean,
    /**
     * If true, right-aligns the form actions.
     */
    actionsRight: Boolean
  },
  setup(e) {
    return (t, h) => (o(), l(a(e.element), {
      class: i(["form-theme", [{
        "form-theme--full-width": e.fullWidth,
        "form-theme--full-width-select": e.fullWidthSelect,
        "form-theme--hide-labels": e.hideLabels,
        "form-theme--actions-right": e.actionsRight
      }]])
    }, {
      default: m(() => [
        n(t.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
};
export {
  r as default
};
