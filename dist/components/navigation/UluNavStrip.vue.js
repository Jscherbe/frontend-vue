import { computed as a, createElementBlock as o, createCommentVNode as l, openBlock as c, normalizeClass as m, unref as p, createVNode as u, createSlots as v, renderList as d, withCtx as f, renderSlot as _, normalizeProps as k, guardReactiveProps as g } from "vue";
import h from "./UluMenu.vue.js";
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
      internal: a(() => ({
        center: e.center,
        right: e.right,
        rule: e.rule
      }))
    });
    return (r, A) => t.items?.length ? (c(), o("nav", {
      key: 0,
      class: m(["nav-strip", p(s)])
    }, [
      u(h, {
        items: t.items,
        classes: {
          list: "nav-strip__list",
          item: "nav-strip__item",
          link: "nav-strip__link",
          linkExactActive: "is-active",
          linkActive: "is-active"
        }
      }, v({ _: 2 }, [
        d(r.$slots, (C, i) => ({
          name: i,
          fn: f((n) => [
            _(r.$slots, i, k(g(n)))
          ])
        }))
      ]), 1032, ["items"])
    ], 2)) : l("", !0);
  }
};
export {
  $ as default
};
