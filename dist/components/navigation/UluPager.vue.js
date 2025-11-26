import { resolveComponent as b, createElementBlock as a, createCommentVNode as l, openBlock as i, unref as p, createBlock as x, createElementVNode as r, resolveDynamicComponent as k, withCtx as n, createTextVNode as h, createVNode as s, mergeProps as d, Fragment as C, renderList as N, normalizeClass as P, toDisplayString as v } from "vue";
import m from "../elements/UluIcon.vue.js";
import { newId as G } from "../../utils/dom.js";
const E = ["aria-labelledby"], V = { class: "pager__items js-pager__items" }, j = {
  key: 0,
  class: "pager__item pager__item--first"
}, B = {
  key: 1,
  class: "pager__item pager__item--previous"
}, w = {
  key: 2,
  class: "pager__item pager__item--ellipsis",
  role: "presentation"
}, D = { class: "hidden-visually" }, F = {
  key: 3,
  class: "pager__item pager__item--ellipsis",
  role: "presentation"
}, I = {
  key: 4,
  class: "pager__item pager__item--next"
}, L = {
  key: 5,
  class: "pager__item pager__item--last"
}, $ = {
  __name: "UluPager",
  props: {
    /**
     * The HTML element to use for the visually hidden title.
     */
    titleElement: {
      type: String,
      default: "h4"
    },
    /**
     * List of pager items.
     */
    items: {
      type: Object,
      default: () => ({})
    },
    /**
     * The page number of the current page.
     */
    current: {
      type: Number,
      default: 1
    },
    /**
     * Ellipses configuration.
     */
    ellipses: {
      type: Object,
      default: () => ({})
    }
  },
  setup(e) {
    const _ = e, f = G("ulu-pager");
    function y(g) {
      return _.current == g ? "Current page" : `Go to page ${g}`;
    }
    return (g, t) => {
      const o = b("router-link");
      return e.items ? (i(), a("nav", {
        key: 0,
        class: "pager",
        role: "navigation",
        "aria-labelledby": p(f)
      }, [
        (i(), x(k(e.titleElement), {
          id: p(f),
          class: "hidden-visually"
        }, {
          default: n(() => [...t[0] || (t[0] = [
            h("Pagination", -1)
          ])]),
          _: 1
        }, 8, ["id"])),
        r("ul", V, [
          e.items.first ? (i(), a("li", j, [
            s(o, d({
              to: e.items.first.href,
              title: "Go to first page"
            }, e.items.first.attributes), {
              default: n(() => [
                t[1] || (t[1] = r("span", { class: "hidden-visually" }, "First page", -1)),
                s(m, {
                  icon: "fas fa-angle-double-left",
                  "aria-hidden": "true"
                })
              ]),
              _: 1
            }, 16, ["to"])
          ])) : l("", !0),
          e.items.previous ? (i(), a("li", B, [
            s(o, d({
              to: e.items.previous.href,
              title: "Go to previous page",
              rel: "prev"
            }, e.items.previous.attributes), {
              default: n(() => [
                t[2] || (t[2] = r("span", { class: "hidden-visually" }, "Previous page", -1)),
                s(m, {
                  icon: "fas fa-angle-left",
                  "aria-hidden": "true"
                })
              ]),
              _: 1
            }, 16, ["to"])
          ])) : l("", !0),
          e.ellipses.previous ? (i(), a("li", w, "…")) : l("", !0),
          (i(!0), a(C, null, N(e.items.pages, (c, u) => (i(), a("li", {
            key: u,
            class: P(["pager__item", { "is-active": e.current == u }])
          }, [
            s(o, d({
              to: c.href,
              title: y(u)
            }, { ref_for: !0 }, c.attributes), {
              default: n(() => [
                r("span", D, v(e.current == u ? "Current page" : "Page"), 1),
                h(" " + v(u), 1)
              ]),
              _: 2
            }, 1040, ["to", "title"])
          ], 2))), 128)),
          e.ellipses.next ? (i(), a("li", F, "…")) : l("", !0),
          e.items.next ? (i(), a("li", I, [
            s(o, d({
              to: e.items.next.href,
              title: "Go to next page",
              rel: "next"
            }, e.items.next.attributes), {
              default: n(() => [
                t[3] || (t[3] = r("span", { class: "hidden-visually" }, "Next page", -1)),
                s(m, {
                  icon: "fas fa-angle-right",
                  "aria-hidden": "true"
                })
              ]),
              _: 1
            }, 16, ["to"])
          ])) : l("", !0),
          e.items.last ? (i(), a("li", L, [
            s(o, d({
              to: e.items.last.href,
              title: "Go to last page"
            }, e.items.last.attributes), {
              default: n(() => [
                t[4] || (t[4] = r("span", { class: "hidden-visually" }, "Last page", -1)),
                s(m, {
                  icon: "fas fa-angle-double-right",
                  "aria-hidden": "true"
                })
              ]),
              _: 1
            }, 16, ["to"])
          ])) : l("", !0)
        ])
      ], 8, E)) : l("", !0);
    };
  }
};
export {
  $ as default
};
