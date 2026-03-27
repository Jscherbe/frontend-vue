import { provide as f, computed as r, createBlock as i, createCommentVNode as v, openBlock as n, resolveDynamicComponent as o, normalizeStyle as S, normalizeClass as c, withCtx as m, createElementBlock as B, renderSlot as u, Fragment as g, renderList as k, createTextVNode as E, toDisplayString as C } from "vue";
const h = {
  __name: "UluList",
  props: {
    /**
     * Array of list items, output as is or use slot to template the item
     * - Note item can add classes by defining { classes: { item } }
     */
    items: Array,
    /**
     * Classes object (keys are { list, item } to be applied to list and item elements)
     * - Any valid class binding for each
     */
    classes: {
      type: Object,
      default: () => ({})
    },
    /**
     * Use list-ordered class, and sets element to <ol>
     */
    ordered: Boolean,
    /**
     * Use list-unordered class
     */
    unordered: Boolean,
    /**
     * Use list-lines class
     */
    lines: Boolean,
    /**
     * Use list-compact class
     */
    compact: Boolean,
    /**
     * If setting up custom ordered list this will ensure the correct element type
     * - Note: 'ordered' prop sets the ordered list class, this does not
     */
    forceOrdered: Boolean,
    /**
     * Define the start value for <ol>
     */
    start: String,
    /**
     * Reverse ordered list
     */
    reversed: Boolean,
    /**
     * Define list style type (ie. disc, decimal, etc)
     */
    listStyleType: String,
    /**
     * Element to render the list as (overrides ul/ol)
     */
    element: String,
    /**
     * Element to render items as when using items array
     */
    itemElement: {
      type: String,
      default: "li"
    }
  },
  setup(e) {
    const t = e;
    f("uluListContext", r(() => ({
      classes: t.classes,
      itemElement: t.itemElement
    })));
    const a = r(() => t.ordered || t.forceOrdered), y = r(() => t.element || (a.value ? "ol" : "ul"));
    return (l, O) => (e.items !== void 0 ? e.items.length : l.$slots.default) ? (n(), i(o(y.value), {
      key: 0,
      class: c([
        {
          "list-ordered": e.ordered,
          "list-unordered": e.unordered,
          "list-lines": e.lines,
          "list-compact": e.compact
        },
        e.classes.list
      ]),
      style: S({
        listStyleType: e.listStyleType
      }),
      reversed: a.value ? e.reversed : null,
      start: e.start
    }, {
      default: m(() => [
        e.items !== void 0 ? (n(!0), B(g, { key: 0 }, k(e.items, (s, d) => (n(), i(o(e.itemElement), {
          key: d,
          class: c([
            e.classes.item,
            s?.classes?.item
          ])
        }, {
          default: m(() => [
            u(l.$slots, "default", {
              item: s,
              index: d
            }, () => [
              E(C(s), 1)
            ])
          ]),
          _: 2
        }, 1032, ["class"]))), 128)) : u(l.$slots, "default", { key: 1 })
      ]),
      _: 3
    }, 8, ["class", "style", "reversed", "start"])) : v("", !0);
  }
};
export {
  h as default
};
