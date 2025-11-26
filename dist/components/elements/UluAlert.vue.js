import { resolveComponent as m, createElementBlock as i, openBlock as s, normalizeClass as r, createElementVNode as o, createVNode as u, createCommentVNode as f, renderSlot as n, toDisplayString as c, createTextVNode as p, computed as _ } from "vue";
import g from "./UluButton.vue.js";
import y from "./UluIcon.vue.js";
import { useModifiers as v } from "../../composables/useModifiers.js";
import S from "../../_virtual/_plugin-vue_export-helper.js";
const U = {
  name: "UluAlert",
  components: {
    UluButton: g,
    UluIcon: y
  },
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
    const { resolvedModifiers: l } = v({
      props: e,
      baseClass: "callout",
      internal: _(() => ({
        [e.type]: e.type,
        compact: e.compact
      }))
    });
    return { resolvedModifiers: l };
  }
}, h = { class: "layout-flex" }, $ = { class: "type-small" }, B = {
  key: 0,
  class: "margin-left-auto align-self-center"
};
function C(e, l, t, a, N, V) {
  const d = m("UluIcon");
  return s(), i("div", {
    class: r(["callout", a.resolvedModifiers])
  }, [
    o("div", h, [
      u(d, {
        class: r(["type-large margin-right-small", `color-${t.type}`]),
        icon: t.icon || `type:${t.type}`
      }, null, 8, ["class", "icon"]),
      o("div", $, [
        o("div", null, [
          n(e.$slots, "title", {}, () => [
            o("strong", null, c(t.title), 1)
          ])
        ]),
        o("div", null, [
          n(e.$slots, "description", {}, () => [
            p(c(t.description), 1)
          ])
        ])
      ]),
      e.$slots.action ? (s(), i("div", B, [
        n(e.$slots, "action")
      ])) : f("", !0)
    ])
  ], 2);
}
const b = /* @__PURE__ */ S(U, [["render", C]]);
export {
  b as default
};
