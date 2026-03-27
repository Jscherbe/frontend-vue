import { computed as l, createBlock as r, openBlock as o, normalizeClass as m, unref as c, createSlots as u, withCtx as f, renderSlot as d, normalizeProps as p, guardReactiveProps as y } from "vue";
import { useModifiers as b } from "../../composables/useModifiers.js";
import h from "./UluList.vue.js";
const B = {
  __name: "UluCounterList",
  props: {
    /**
     * Array of list items, output as is or use slot to template the item
     * - Note item can add classes by defining { classes: { item } }
     */
    items: Array,
    /**
     * HTML element for the list
     */
    element: {
      type: String,
      default: "ol"
    },
    /**
     * HTML element for the list items (when using items array)
     */
    itemElement: {
      type: String,
      default: "li"
    },
    /**
     * Classes object (keys are { list, item } to be applied to list and item elements)
     */
    classes: {
      type: Object,
      default: () => ({})
    },
    /**
     * Use alphabetical counter
     */
    alphabetical: Boolean,
    /**
     * Remove counter reset
     */
    noReset: Boolean,
    /**
     * Modifiers (to add any modifier classes based on base class [ie. 'alphabetical'])
     */
    modifiers: [String, Array]
  },
  setup(t) {
    const e = t, { resolvedModifiers: a } = b({
      props: e,
      baseClass: "counter-list",
      internal: l(() => ({
        alphabetical: e.alphabetical,
        "no-reset": e.noReset
      }))
    }), i = l(() => ({
      list: e.classes.list,
      item: ["counter-list__item", e.classes.item]
    }));
    return (s, C) => (o(), r(h, {
      class: m(["counter-list", c(a)]),
      items: t.items,
      element: t.element,
      itemElement: t.itemElement,
      classes: i.value
    }, u({ _: 2 }, [
      s.$slots.default ? {
        name: "default",
        fn: f((n) => [
          d(s.$slots, "default", p(y(n)))
        ]),
        key: "0"
      } : void 0
    ]), 1032, ["class", "items", "element", "itemElement", "classes"]));
  }
};
export {
  B as default
};
