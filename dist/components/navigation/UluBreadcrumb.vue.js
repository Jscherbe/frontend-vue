import { resolveComponent as d, createElementBlock as s, createCommentVNode as o, openBlock as a, normalizeClass as t, createElementVNode as b, Fragment as k, renderList as f, createBlock as y, renderSlot as c, withCtx as p, createTextVNode as u, toDisplayString as i, createVNode as g } from "vue";
import h from "../elements/UluIcon.vue.js";
const N = {
  __name: "UluBreadcrumb",
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
  },
  setup(e) {
    return (l, B) => {
      const m = d("router-link");
      return e.items.length ? (a(), s("nav", {
        key: 0,
        class: t(e.classes.nav),
        "aria-label": "Breadcrumb"
      }, [
        b("ol", {
          class: t(e.classes.list)
        }, [
          (a(!0), s(k, null, f(e.items, (r, n) => (a(), s("li", {
            key: n,
            class: t(e.classes.item)
          }, [
            r.current ? (a(), s("span", {
              key: 1,
              class: t(r.current)
            }, [
              c(l.$slots, "default", { item: r }, () => [
                u(i(r.title), 1)
              ])
            ], 2)) : (a(), y(m, {
              key: 0,
              to: r.to,
              class: t(e.classes.link),
              "aria-current": r.current ? "page" : null
            }, {
              default: p(() => [
                c(l.$slots, "default", { item: r }, () => [
                  u(i(r.title), 1)
                ])
              ]),
              _: 2
            }, 1032, ["to", "class", "aria-current"])),
            n < e.items.length - 1 ? c(l.$slots, "separator", { key: 2 }, () => [
              g(h, {
                class: t(e.classes.separator),
                icon: e.separatorIcon || "type:pathSeparator"
              }, null, 8, ["class", "icon"])
            ]) : o("", !0)
          ], 2))), 128))
        ], 2)
      ], 2)) : o("", !0);
    };
  }
};
export {
  N as default
};
