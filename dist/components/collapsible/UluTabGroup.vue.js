import { createBlock as l, openBlock as i, unref as t, withCtx as n, createElementVNode as d, mergeProps as c, renderSlot as u, normalizeProps as f, guardReactiveProps as m } from "vue";
import { TabGroup as p } from "@headlessui/vue";
import { useModifiers as v } from "../../composables/useModifiers.js";
const h = /* @__PURE__ */ Object.assign({
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
    vertical: Boolean,
    /**
     * Class modifiers (ie. 'transparent', 'secondary', etc)
     */
    modifiers: [String, Array]
  },
  setup(e) {
    const a = e, { resolvedModifiers: s } = v({ props: a, baseClass: "tabs" });
    return (r, b) => (i(), l(t(p), {
      defaultIndex: e.defaultIndex,
      vertical: e.vertical
    }, {
      default: n((o) => [
        d("div", c(r.$attrs, {
          class: ["tabs", [
            t(s),
            {
              "tabs--vertical": e.vertical
            }
          ]]
        }), [
          u(r.$slots, "default", f(m(o)))
        ], 16)
      ]),
      _: 3
    }, 8, ["defaultIndex", "vertical"]));
  }
});
export {
  h as default
};
