import { computed as o, createElementBlock as a, createCommentVNode as l, openBlock as c, normalizeClass as m, unref as p, createVNode as u, createSlots as v, renderList as d, withCtx as f, renderSlot as _, normalizeProps as h, guardReactiveProps as k } from "vue";
import g from "./UluMenu.vue.js";
import { useModifiers as B } from "../../composables/useModifiers.js";
const $ = {
  __name: "UluNavStrip",
  props: {
    /**
     * Array of items for list (uses UluMenu, see structure there)
     */
    items: Array,
    /**
     * Center aligned
     */
    center: Boolean,
    /**
     * Right aligned
     */
    right: Boolean,
    /**
     * Rule nav strip style
     */
    rule: Boolean,
    /**
     * Modifiers (to add any modifier classes based on base class)
     */
    modifiers: [String, Array]
  },
  setup(t) {
    const e = t, { resolvedModifiers: s } = B({
      props: e,
      baseClass: "nav-strip",
      internal: o(() => ({
        center: e.center,
        right: e.right,
        rule: e.rule
      }))
    });
    return (r, C) => t.items?.length ? (c(), a("nav", {
      key: 0,
      class: m(["nav-strip", p(s)])
    }, [
      u(g, {
        items: t.items,
        classes: {
          list: "nav-strip__list",
          item: "nav-strip__item",
          link: "nav-strip__link",
          linkExactActive: "is-active",
          linkActive: "is-active"
        },
        noChildren: ""
      }, v({ _: 2 }, [
        d(r.$slots, (A, i) => ({
          name: i,
          fn: f((n) => [
            _(r.$slots, i, h(k(n)))
          ])
        }))
      ]), 1032, ["items"])
    ], 2)) : l("", !0);
  }
};
export {
  $ as default
};
