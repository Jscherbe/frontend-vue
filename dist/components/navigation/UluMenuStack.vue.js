import { computed as i, createBlock as o, openBlock as r, resolveDynamicComponent as s, normalizeClass as c, unref as m, withCtx as l, createVNode as u } from "vue";
import k from "./UluMenu.vue.js";
import { useModifiers as f } from "../../composables/useModifiers.js";
const C = {
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
    const n = e, t = i(() => ({
      hanging: n.hanging,
      compact: n.compact
    })), { resolvedModifiers: a } = f({
      props: n,
      internal: t,
      baseClass: "menu-stack"
    });
    return (_, d) => (r(), o(s(e.containerElement), {
      class: c(["menu-stack", m(a)])
    }, {
      default: l(() => [
        u(k, {
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
    }, 8, ["class"]));
  }
};
export {
  C as default
};
