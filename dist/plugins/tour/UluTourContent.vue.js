import { createElementBlock as o, openBlock as t, createBlock as s, createCommentVNode as n, createVNode as c, resolveDynamicComponent as l, normalizeClass as r, withCtx as i, createTextVNode as m, toDisplayString as a } from "vue";
import d from "../../components/elements/UluRule.vue.js";
const u = { class: "tour-content crop-margins" }, p = { key: 1 }, C = {
  __name: "UluTourContent",
  props: {
    /**
     * The tour step configuration object
     */
    step: {
      type: Object,
      required: !0
    },
    /**
     * Adjusts the typography to match a modal context rather than a popover context
     */
    isModal: {
      type: Boolean,
      default: !1
    }
  },
  setup(e) {
    return (f, h) => (t(), o("div", u, [
      e.step?.title ? (t(), s(l(e.isModal ? "h2" : "strong"), {
        key: 0,
        class: r([e.isModal ? "h3" : "h4", "display-block no-margin"])
      }, {
        default: i(() => [
          m(a(e.step.title), 1)
        ]),
        _: 1
      }, 8, ["class"])) : n("", !0),
      c(d),
      e.step?.content ? (t(), o("p", p, a(e.step.content), 1)) : n("", !0)
    ]));
  }
};
export {
  C as default
};
