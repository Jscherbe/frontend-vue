import { computed as i, createBlock as o, createCommentVNode as r, openBlock as s, resolveDynamicComponent as m, normalizeClass as c, unref as l, withCtx as u, createVNode as k } from "vue";
import f from "./UluMenu.vue.js";
import { useModifiers as d } from "../../composables/useModifiers.js";
const B = {
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
    const t = e, n = i(() => ({
      hanging: t.hanging,
      compact: t.compact
    })), { resolvedModifiers: a } = d({
      props: t,
      internal: n,
      baseClass: "menu-stack"
    });
    return (_, p) => e.items?.length ? (s(), o(m(e.containerElement), {
      key: 0,
      class: c(["menu-stack", l(a)])
    }, {
      default: u(() => [
        k(f, {
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
        }, null, 8, ["items", "noChildren"])
      ]),
      _: 1
    }, 8, ["class"])) : r("", !0);
  }
};
export {
  B as default
};
