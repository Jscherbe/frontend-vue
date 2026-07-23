import { computed as n, createBlock as i, openBlock as l, unref as a, withCtx as c, createElementVNode as d, mergeProps as u, renderSlot as f, normalizeProps as p, guardReactiveProps as m } from "vue";
import { TabGroup as v } from "@headlessui/vue";
import { useModifiers as b } from "../../composables/useModifiers.js";
const y = /* @__PURE__ */ Object.assign({
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
     * Whether or not to use sticky modifier (tablist)
     */
    sticky: Boolean,
    /**
     * Whether or not to use transparent modifier (tab panels)
     */
    transparent: Boolean,
    /**
     * Class modifiers (ie. 'transparent', 'secondary', etc)
     */
    modifiers: [String, Array]
  },
  setup(t) {
    const e = t, { resolvedModifiers: s } = b({
      props: e,
      baseClass: "tabs",
      internal: n(() => ({
        vertical: e.vertical,
        sticky: e.sticky,
        transparent: e.transparent
      }))
    });
    return (r, k) => (l(), i(a(v), {
      defaultIndex: t.defaultIndex,
      vertical: t.vertical
    }, {
      default: c((o) => [
        d("div", u(r.$attrs, {
          class: ["tabs", a(s)]
        }), [
          f(r.$slots, "default", p(m(o)))
        ], 16)
      ]),
      _: 3
    }, 8, ["defaultIndex", "vertical"]));
  }
});
export {
  y as default
};
