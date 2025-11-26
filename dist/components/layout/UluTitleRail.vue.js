import r from "../elements/UluIcon.vue.js";
import { resolveComponent as m, createElementBlock as n, openBlock as t, normalizeClass as l, createElementVNode as u, createCommentVNode as a, createBlock as o, resolveDynamicComponent as d, normalizeStyle as _, withCtx as f, renderSlot as s, createTextVNode as y, toDisplayString as g } from "vue";
import h from "../../_virtual/_plugin-vue_export-helper.js";
const S = {
  name: "UluTitleRail",
  components: {
    UluIcon: r
  },
  props: {
    /**
     * Icon to display next to the title.
     */
    icon: String,
    /**
     * The alignment of the icon with the title.
     */
    iconAlign: {
      type: String,
      default: "baseline"
    },
    /**
     * Classes for the different elements in the component.
     */
    classes: {
      type: Object,
      default: () => ({
        title: "h2",
        icon: "margin-right-small"
      })
    },
    /**
     * The title to display.
     */
    title: String,
    /**
     * The HTML element to use for the title.
     */
    titleElement: {
      type: String,
      default: "h2"
    },
    /**
     * If true, a rule will be displayed under the title.
     */
    rule: Boolean
  }
}, k = {
  key: 0,
  class: "rail__item rail__item--pull"
};
function v(i, C, e, U, p, x) {
  const c = m("UluIcon");
  return t(), n("div", {
    class: l(["rail rail--title-rail", {
      "rail--rule": e.rule
    }])
  }, [
    u("div", {
      class: l(["rail__item rail__item--title", e.classes.itemTitle])
    }, [
      (t(), o(d(e.titleElement), {
        class: l(["layout-flex type-max-width-small no-margin", e.classes.title]),
        style: _({ alignItems: e.iconAlign })
      }, {
        default: f(() => [
          e.icon ? (t(), o(c, {
            key: 0,
            class: l(e.classes.icon),
            icon: e.icon
          }, null, 8, ["class", "icon"])) : a("", !0),
          s(i.$slots, "default", {}, () => [
            y(g(e.title), 1)
          ])
        ]),
        _: 3
      }, 8, ["class", "style"]))
    ], 2),
    i.$slots.end ? (t(), n("div", k, [
      s(i.$slots, "end")
    ])) : a("", !0)
  ], 2);
}
const T = /* @__PURE__ */ h(S, [["render", v]]);
export {
  T as default
};
