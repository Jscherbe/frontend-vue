import { computed as m, createBlock as c, createCommentVNode as l, openBlock as u, resolveDynamicComponent as k, normalizeClass as d, unref as f, withCtx as r, createVNode as _, createSlots as p, renderList as g, renderSlot as h, normalizeProps as C, guardReactiveProps as S } from "vue";
import B from "./UluMenu.vue.js";
import { useModifiers as y } from "../../composables/useModifiers.js";
const b = {
  __name: "UluMenuStack",
  props: {
    /**
     * Menu item (see UluMenu)
     */
    items: Array,
    /**
    * The HTML element to use as the container (e.g., 'nav', 'div', 'aside').
     */
    containerElement: {
      type: String,
      default: "nav"
    },
    /**
     * Hanging style menu
     */
    hanging: Boolean,
    /**
     * Compact style menu
     */
    compact: Boolean,
    /**
     * Don't include children of menu
     */
    noChildren: Boolean,
    /**
     * Class modifiers (ie. 'transparent', 'secondary', etc)
     */
    modifiers: [String, Array]
  },
  setup(e) {
    const t = e, o = m(() => ({
      hanging: t.hanging,
      compact: t.compact
    })), { resolvedModifiers: i } = y({
      props: t,
      internal: o,
      baseClass: "menu-stack"
    });
    return (n, v) => e.items?.length ? (u(), c(k(e.containerElement), {
      key: 0,
      class: d(["menu-stack", f(i)])
    }, {
      default: r(() => [
        _(B, {
          items: e.items,
          classes: {
            list: "menu-stack__list",
            item: "menu-stack__item",
            link: "menu-stack__link",
            linkText: "menu-stack__link-text",
            linkIcon: "menu-stack__link-icon",
            itemSeparatorBefore: "menu-stack__item--separator-before",
            itemSeparatorAfter: "menu-stack__item--separator-after"
          },
          noChildren: e.noChildren
        }, p({ _: 2 }, [
          g(n.$slots, (M, a) => ({
            name: a,
            fn: r((s) => [
              h(n.$slots, a, C(S(s)))
            ])
          }))
        ]), 1032, ["items", "noChildren"])
      ]),
      _: 3
    }, 8, ["class"])) : l("", !0);
  }
};
export {
  b as default
};
