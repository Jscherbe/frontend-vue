import { createBlock as a, renderSlot as r, openBlock as n, resolveDynamicComponent as o, normalizeProps as s, mergeProps as l, withCtx as i } from "vue";
const d = /* @__PURE__ */ Object.assign({
  inheritAttrs: !1
}, {
  __name: "UluConditionalWrapper",
  props: {
    /**
     * The underlying component or HTML tag to render.
     * Can be a string like 'div' or an imported component object.
     */
    is: {
      type: [String, Object, Function],
      // Can be a string or a component definition
      default: "div"
      // A sensible default for a wrapper
    },
    /**
     * If true, the wrapper will not be rendered and the content
     * will be output directly.
     */
    unwrapped: {
      type: Boolean,
      default: !1
    }
  },
  setup(t) {
    return (e, p) => t.unwrapped ? r(e.$slots, "default", { key: 1 }) : (n(), a(o(t.is), s(l({ key: 0 }, e.$attrs)), {
      default: i(() => [
        r(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
export {
  d as default
};
