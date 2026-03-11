import { createBlock as l, openBlock as m, withCtx as s, createVNode as a, createSlots as c, renderList as p, renderSlot as n, normalizeProps as g, guardReactiveProps as d, createElementVNode as f, toDisplayString as u, normalizeStyle as _ } from "vue";
import y from "../../plugins/popovers/UluPopover.vue.js";
import $ from "../navigation/UluMenuStack.vue.js";
import S from "../elements/UluIcon.vue.js";
const h = {
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
  setup(e) {
    return (t, b) => (m(), l(y, { classes: e.popoverClasses }, {
      trigger: s(({ isOpen: r }) => [
        n(t.$slots, "trigger", { isOpen: r }, () => [
          f("span", null, u(e.triggerText), 1),
          a(S, {
            class: "button__icon",
            icon: "type:dropdownExpand",
            style: _({ transform: r ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.2s" })
          }, null, 8, ["style"])
        ])
      ]),
      default: s(() => [
        a($, { items: e.items }, c({ _: 2 }, [
          p(t.$slots, (r, o) => ({
            name: o,
            fn: s((i) => [
              n(t.$slots, o, g(d(i)))
            ])
          }))
        ]), 1032, ["items"])
      ]),
      _: 3
    }, 8, ["classes"]));
  }
};
export {
  h as default
};
