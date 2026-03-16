import { computed as d, createElementBlock as s, openBlock as n, normalizeClass as r, unref as m, createElementVNode as t, createVNode as u, createCommentVNode as p, renderSlot as i, toDisplayString as a, createTextVNode as f } from "vue";
import g from "./UluIcon.vue.js";
import { useModifiers as y } from "../../composables/useModifiers.js";
const v = { class: "layout-flex" }, S = { class: "type-small" }, $ = {
  key: 0,
  class: "margin-left-auto align-self-center"
}, B = {
  __name: "UluAlert",
  props: {
    /**
     * Alert Title
     */
    title: String,
    /**
     * Alert description
     */
    description: String,
    /**
     * Pass specific icon definition, else it will resolve based on common types
     */
    icon: String,
    /**
     * Error, warning, info, success etc (must have these callout modifiers setup and this is used for type color [ie. color-error])
     */
    type: {
      type: String,
      default: "danger"
    },
    /**
     * Compact callout style
     */
    compact: Boolean,
    /**
     * Modifiers (to add any modifier classes based on base class [ie. 'tertiary'])
     */
    modifiers: [String, Array]
  },
  setup(e) {
    const o = e, { resolvedModifiers: c } = y({
      props: o,
      baseClass: "callout",
      internal: d(() => ({
        [o.type]: o.type,
        compact: o.compact
      }))
    });
    return (l, h) => (n(), s("div", {
      class: r(["callout", m(c)])
    }, [
      t("div", v, [
        u(g, {
          class: r(["type-large margin-right-small", `color-${e.type}`]),
          icon: e.icon || `type:${e.type}`
        }, null, 8, ["class", "icon"]),
        t("div", S, [
          t("div", null, [
            i(l.$slots, "title", {}, () => [
              t("strong", null, a(e.title), 1)
            ])
          ]),
          t("div", null, [
            i(l.$slots, "description", {}, () => [
              f(a(e.description), 1)
            ])
          ])
        ]),
        l.$slots.action ? (n(), s("div", $, [
          i(l.$slots, "action")
        ])) : p("", !0)
      ])
    ], 2));
  }
};
export {
  B as default
};
