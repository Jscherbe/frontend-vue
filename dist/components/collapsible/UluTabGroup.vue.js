import { computed as l, createBlock as i, openBlock as d, unref as s, withCtx as c, createElementVNode as u, mergeProps as m, renderSlot as f, normalizeProps as p, guardReactiveProps as v } from "vue";
import { TabGroup as b } from "@headlessui/vue";
import { useModifiers as x } from "../../composables/useModifiers.js";
const B = /* @__PURE__ */ Object.assign({
  inheritAttrs: !1
}, {
  __name: "UluTabGroup",
  props: {
    /**
     * Active tab index by default (uncontrolled)
     */
    defaultIndex: Number,
    /**
     * Actively selected tab index (controlled)
     */
    selectedIndex: Number,
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
  emits: ["change"],
  setup(e) {
    const t = e, { resolvedModifiers: o } = x({
      props: t,
      baseClass: "tabs",
      internal: l(() => ({
        vertical: t.vertical,
        sticky: t.sticky,
        transparent: t.transparent
      }))
    });
    return (r, n) => (d(), i(s(b), {
      defaultIndex: e.defaultIndex,
      selectedIndex: e.selectedIndex,
      vertical: e.vertical,
      onChange: n[0] || (n[0] = (a) => r.$emit("change", a))
    }, {
      default: c((a) => [
        u("div", m(r.$attrs, {
          class: ["tabs", s(o)]
        }), [
          f(r.$slots, "default", p(v(a)))
        ], 16)
      ]),
      _: 3
    }, 8, ["defaultIndex", "selectedIndex", "vertical"]));
  }
});
export {
  B as default
};
