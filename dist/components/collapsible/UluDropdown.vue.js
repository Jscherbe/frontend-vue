import { createBlock as n, openBlock as a, withCtx as r, createVNode as o, renderSlot as i, createElementVNode as l, toDisplayString as m, normalizeStyle as c } from "vue";
import p from "../../plugins/popovers/UluPopover.vue.js";
import g from "../navigation/UluMenuStack.vue.js";
import f from "../elements/UluIcon.vue.js";
const S = {
  __name: "UluDropdown",
  props: {
    /**
     * Dropdown menu items (to be passed to UluMenu)
     */
    items: Array,
    /**
     * Optional text if not using slot
     */
    triggerText: String,
    /**
     * Pass classes object to UluPopover classes prop
     */
    popoverClasses: {
      type: Object,
      default: () => ({
        trigger: "button"
      })
    }
  },
  setup(t) {
    return (s, d) => (a(), n(p, { classes: t.popoverClasses }, {
      trigger: r(({ isOpen: e }) => [
        i(s.$slots, "trigger", { isOpen: e }, () => [
          l("span", null, m(t.triggerText), 1),
          o(f, {
            class: "button__icon",
            icon: "type:dropdownExpand",
            style: c({ transform: e ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.2s" })
          }, null, 8, ["style"])
        ])
      ]),
      default: r(() => [
        o(g, { items: t.items }, null, 8, ["items"])
      ]),
      _: 3
    }, 8, ["classes"]));
  }
};
export {
  S as default
};
