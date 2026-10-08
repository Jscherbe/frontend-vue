import { computed as r, createElementBlock as a, openBlock as o, createBlock as f, createCommentVNode as l, createVNode as h, resolveDynamicComponent as C, normalizeClass as c, withCtx as _, createElementVNode as u, toDisplayString as n } from "vue";
import y from "../../components/elements/UluRule.vue.js";
import { useTour as P } from "./useTour.js";
const k = { class: "tour-content crop-margins" }, x = { class: "tour-content__title-text" }, T = {
  key: 1,
  class: "tour-content__body"
}, V = {
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
  setup(t) {
    const { state: e } = P(), s = t, d = r(() => s.step.titleClass ? s.step.titleClass : s.isModal ? e.active?.modalTitleClass || ["h3", "no-margin"] : e.active?.popoverTitleClass || ["h4", "display-block", "no-margin"]), p = r(() => s.step.progressClass || e.active?.progressClass || "headline-label"), m = r(() => e.stepIndex + 1), g = r(() => e.active?.steps?.length || 0), v = r(() => s.step.hideProgress !== void 0 ? !s.step.hideProgress : e.active?.hideProgress !== void 0 ? !e.active.hideProgress : !0);
    return (b, i) => (o(), a("div", k, [
      t.step?.title ? (o(), f(C(t.isModal ? "h2" : "strong"), {
        key: 0,
        class: c(["tour-content__title", d.value])
      }, {
        default: _(() => [
          v.value ? (o(), a("span", {
            key: 0,
            class: c(["tour-content__title-progress", p.value])
          }, " Part " + n(m.value) + " / " + n(g.value), 3)) : l("", !0),
          i[0] || (i[0] = u("span", { class: "hidden-visually" }, ":", -1)),
          u("span", x, n(t.step.title), 1)
        ]),
        _: 1
      }, 8, ["class"])) : l("", !0),
      h(y),
      t.step?.content ? (o(), a("p", T, n(t.step.content), 1)) : l("", !0)
    ]));
  }
};
export {
  V as default
};
