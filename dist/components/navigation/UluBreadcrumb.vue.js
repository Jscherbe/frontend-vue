import { resolveComponent as d, createElementBlock as s, createCommentVNode as o, openBlock as t, normalizeClass as r, createElementVNode as b, Fragment as k, renderList as f, createBlock as y, renderSlot as c, withCtx as g, createTextVNode as u, toDisplayString as i, createVNode as p } from "vue";
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
     * Keys: nav, list, item, link, current, separator
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
  setup(a) {
    return (l, B) => {
      const m = d("router-link");
      return a.items.length ? (t(), s("nav", {
        key: 0,
        class: r(a.classes.nav),
        "aria-label": "Breadcrumb"
      }, [
        b("ol", {
          class: r(a.classes.list)
        }, [
          (t(!0), s(k, null, f(a.items, (e, n) => (t(), s("li", {
            key: n,
            class: r([a.classes.item, e?.classes?.item])
          }, [
            e.current ? (t(), s("span", {
              key: 1,
              class: r([a.classes.current, e?.classes?.current])
            }, [
              c(l.$slots, "default", { item: e }, () => [
                u(i(e.title), 1)
              ])
            ], 2)) : (t(), y(m, {
              key: 0,
              to: e.to,
              class: r([a.classes.link, e?.classes?.link]),
              "aria-current": e.current ? "page" : null
            }, {
              default: g(() => [
                c(l.$slots, "default", { item: e }, () => [
                  u(i(e.title), 1)
                ])
              ]),
              _: 2
            }, 1032, ["to", "class", "aria-current"])),
            n < a.items.length - 1 ? c(l.$slots, "separator", { key: 2 }, () => [
              p(h, {
                class: r([a.classes.separator, e?.classes?.separator]),
                icon: a.separatorIcon || "type:pathSeparator"
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
