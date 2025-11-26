import { createBlock as n, renderSlot as a, openBlock as o, resolveDynamicComponent as l, withCtx as r } from "vue";
const s = {
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
  setup(e) {
    return (t, p) => e.unwrapped ? a(t.$slots, "default", { key: 1 }) : (o(), n(l(e.is), { key: 0 }, {
      default: r(() => [
        a(t.$slots, "default")
      ]),
      _: 3
    }));
  }
};
export {
  s as default
};
