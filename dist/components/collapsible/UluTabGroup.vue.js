import { createBlock as r, openBlock as l, unref as o, withCtx as n, createElementVNode as c, normalizeClass as i, renderSlot as s, normalizeProps as u, guardReactiveProps as d } from "vue";
import { TabGroup as f } from "@headlessui/vue";
const b = /* @__PURE__ */ Object.assign({
  inheritAttrs: !1
}, {
  __name: "UluTabGroup",
  props: {
    /**
     * Active tab index by default
     */
    defaultIndex: Number,
    /**
     * Whether or not to use vertical layout
     */
    vertical: Boolean
  },
  setup(e) {
    return (t, m) => (l(), r(o(f), {
      defaultIndex: e.defaultIndex,
      vertical: e.vertical
    }, {
      default: n((a) => [
        c("div", {
          class: i(["tabs", {
            "tabs--vertical": e.vertical
          }])
        }, [
          s(t.$slots, "default", u(d(a)))
        ], 2)
      ]),
      _: 3
    }, 8, ["defaultIndex", "vertical"]));
  }
});
export {
  b as default
};
