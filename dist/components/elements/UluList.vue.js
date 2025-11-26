import { computed as o, createBlock as u, openBlock as t, resolveDynamicComponent as m, normalizeStyle as y, normalizeClass as n, withCtx as B, createElementBlock as d, Fragment as f, renderList as v, renderSlot as S, createTextVNode as g, toDisplayString as k } from "vue";
const x = {
  __name: "UluList",
  props: {
    /**
     * Array of list items, output as is or use slot to template the item
     */
    items: Array,
    /**
     * Classes object (keys are list and listItem to be applied to <ul> and <li>)
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
    listStyleType: String
  },
  setup(e) {
    const l = e, r = o(() => l.ordered || l.forceOrdered), c = o(() => r.value ? "ol" : "ul");
    return (i, O) => (t(), u(m(c.value), {
      class: n([
        {
          "list-ordered": e.ordered,
          "list-unordered": e.unordered,
          "list-lines": e.lines,
          "list-compact": e.compact
        },
        e.classes.list
      ]),
      style: y({
        listStyleType: e.listStyleType
      }),
      reversed: r.value ? e.reversed : null,
      start: e.start
    }, {
      default: B(() => [
        (t(!0), d(f, null, v(e.items, (s, a) => (t(), d("li", {
          key: a,
          class: n(e.classes.listItem)
        }, [
          S(i.$slots, "default", {
            item: s,
            index: a
          }, () => [
            g(k(s), 1)
          ])
        ], 2))), 128))
      ]),
      _: 3
    }, 8, ["class", "style", "reversed", "start"]));
  }
};
export {
  x as default
};
