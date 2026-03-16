import { createBlock as t, createCommentVNode as n, openBlock as r, resolveDynamicComponent as o, withCtx as a, createTextVNode as l, toDisplayString as c } from "vue";
const x = {
  __name: "UluConditionalText",
  props: {
    /**
     * Text to print in element
     */
    text: [String, Number, Array, Object],
    /**
     * Element type to render (ie. h1, h2, p, etc)
     */
    element: {
      type: String,
      default: "p"
    }
  },
  setup(e) {
    return (m, i) => e.text != null ? (r(), t(o(e.element), { key: 0 }, {
      default: a(() => [
        l(c(e.text), 1)
      ]),
      _: 1
    })) : n("", !0);
  }
};
export {
  x as default
};
