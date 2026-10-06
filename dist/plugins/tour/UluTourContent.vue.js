import { computed as c, createElementBlock as a, openBlock as o, createBlock as i, createCommentVNode as l, createVNode as u, resolveDynamicComponent as m, normalizeClass as d, withCtx as p, createTextVNode as f, toDisplayString as r } from "vue";
import C from "../../components/elements/UluRule.vue.js";
import { useTour as h } from "./useTour.js";
const v = { class: "tour-content crop-margins" }, y = { key: 1 }, M = {
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
    const { state: s } = h(), t = e, n = c(() => t.step.titleClass ? t.step.titleClass : t.isModal ? s.active?.modalTitleClass || "h3" : s.active?.popoverTitleClass || "h4");
    return (k, T) => (o(), a("div", v, [
      e.step?.title ? (o(), i(m(e.isModal ? "h2" : "strong"), {
        key: 0,
        class: d([
          "display-block no-margin",
          n.value
        ])
      }, {
        default: p(() => [
          f(r(e.step.title), 1)
        ]),
        _: 1
      }, 8, ["class"])) : l("", !0),
      u(C),
      e.step?.content ? (o(), a("p", y, r(e.step.content), 1)) : l("", !0)
    ]));
  }
};
export {
  M as default
};
