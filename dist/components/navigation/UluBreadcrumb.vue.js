import b from "../elements/UluIcon.vue.js";
import { resolveComponent as o, createElementBlock as s, createCommentVNode as u, openBlock as a, normalizeClass as t, createElementVNode as f, Fragment as k, renderList as p, createBlock as y, renderSlot as c, withCtx as g, createTextVNode as i, toDisplayString as m, createVNode as B } from "vue";
import h from "../../_virtual/_plugin-vue_export-helper.js";
const I = {
  name: "UluBreadcrumb",
  components: {
    UluIcon: b
  },
  props: {
    /**
     * Array of breadcrumb items.
     * Each item is an object: { title: String, to: [String, Object], current: Boolean }
     */
    items: {
      type: Array,
      default: () => []
    },
    /**
     * Icon to use as a separator.
     */
    separatorIcon: String,
    /**
     * Classes object to be applied to elements.
     * Keys: nav, list, item, link, icon
     */
    classes: {
      type: Object,
      default: () => ({
        nav: "breadcrumb",
        list: "breadcrumb__list",
        item: "breadcrumb__item",
        link: "breadcrumb__link",
        current: "breadcrumb__current",
        separator: "breadcrumb__separator"
      })
    }
  }
};
function U(l, v, e, C, N, S) {
  const d = o("router-link"), _ = o("UluIcon");
  return e.items.length ? (a(), s("nav", {
    key: 0,
    class: t(e.classes.nav),
    "aria-label": "Breadcrumb"
  }, [
    f("ol", {
      class: t(e.classes.list)
    }, [
      (a(!0), s(k, null, p(e.items, (r, n) => (a(), s("li", {
        key: n,
        class: t(e.classes.item)
      }, [
        r.current ? (a(), s("span", {
          key: 1,
          class: t(r.current)
        }, [
          c(l.$slots, "default", { item: r }, () => [
            i(m(r.title), 1)
          ])
        ], 2)) : (a(), y(d, {
          key: 0,
          to: r.to,
          class: t(e.classes.link),
          "aria-current": r.current ? "page" : null
        }, {
          default: g(() => [
            c(l.$slots, "default", { item: r }, () => [
              i(m(r.title), 1)
            ])
          ]),
          _: 2
        }, 1032, ["to", "class", "aria-current"])),
        n < e.items.length - 1 ? c(l.$slots, "separator", { key: 2 }, () => [
          B(_, {
            class: t(e.classes.separator),
            icon: e.separatorIcon || "type:pathSeparator"
          }, null, 8, ["class", "icon"])
        ]) : u("", !0)
      ], 2))), 128))
    ], 2)
  ], 2)) : u("", !0);
}
const w = /* @__PURE__ */ h(I, [["render", U]]);
export {
  w as default
};
