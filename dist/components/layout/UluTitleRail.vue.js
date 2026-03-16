import { computed as m, createElementBlock as s, openBlock as t, normalizeClass as l, unref as d, createElementVNode as u, createCommentVNode as n, createBlock as r, resolveDynamicComponent as f, normalizeStyle as y, withCtx as g, renderSlot as o, createTextVNode as S, toDisplayString as h } from "vue";
import k from "../elements/UluIcon.vue.js";
import { useModifiers as v } from "../../composables/useModifiers.js";
const C = {
  key: 0,
  class: "rail__item rail__item--pull"
}, x = {
  __name: "UluTitleRail",
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
    rule: Boolean,
    /**
     * Modifiers (to add any modifier classes based on base class)
     */
    modifiers: [String, Array]
  },
  setup(e) {
    const a = e, { resolvedModifiers: c } = v({
      props: a,
      baseClass: "rail",
      internal: m(() => ({
        "title-rail": !0,
        rule: a.rule
      }))
    });
    return (i, B) => (t(), s("div", {
      class: l(["rail", d(c)])
    }, [
      u("div", {
        class: l(["rail__item rail__item--title", e.classes.itemTitle])
      }, [
        (t(), r(f(e.titleElement), {
          class: l(["layout-flex type-max-width-small no-margin", e.classes.title]),
          style: y({ alignItems: e.iconAlign })
        }, {
          default: g(() => [
            e.icon ? (t(), r(k, {
              key: 0,
              class: l(e.classes.icon),
              icon: e.icon
            }, null, 8, ["class", "icon"])) : n("", !0),
            o(i.$slots, "default", {}, () => [
              S(h(e.title), 1)
            ])
          ]),
          _: 3
        }, 8, ["class", "style"]))
      ], 2),
      i.$slots.end ? (t(), s("div", C, [
        o(i.$slots, "end")
      ])) : n("", !0)
    ], 2));
  }
};
export {
  x as default
};
