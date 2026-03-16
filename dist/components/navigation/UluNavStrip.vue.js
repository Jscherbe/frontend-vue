import { computed as o, createElementBlock as a, createCommentVNode as l, openBlock as m, normalizeClass as c, unref as p, createVNode as u, createSlots as d, renderList as f, withCtx as v, renderSlot as _, normalizeProps as g, guardReactiveProps as h } from "vue";
import k from "./UluMenu.vue.js";
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
    const e = t, { resolvedModifiers: i } = B({
      props: e,
      baseClass: "nav-strip",
      internal: o(() => ({
        center: e.center,
        right: e.right,
        rule: e.rule
      }))
    });
    return (r, C) => t.items?.length ? (m(), a("nav", {
      key: 0,
      class: c(["nav-strip", p(i)])
    }, [
      u(k, {
        items: t.items,
        classes: {
          list: "nav-strip__list",
          item: "nav-strip__item",
          link: "nav-strip__link",
          linkExactActive: "is-active"
        }
      }, d({ _: 2 }, [
        f(r.$slots, (S, s) => ({
          name: s,
          fn: v((n) => [
            _(r.$slots, s, g(h(n)))
          ])
        }))
      ]), 1032, ["items"])
    ], 2)) : l("", !0);
  }
};
export {
  $ as default
};
