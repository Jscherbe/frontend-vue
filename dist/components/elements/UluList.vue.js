import { computed as n, createBlock as m, createCommentVNode as u, openBlock as l, resolveDynamicComponent as y, normalizeStyle as B, normalizeClass as o, withCtx as f, createElementBlock as d, Fragment as v, renderList as S, renderSlot as g, createTextVNode as k, toDisplayString as C } from "vue";
const h = {
  __name: "UluList",
  props: {
    /**
     * Array of list items, output as is or use slot to template the item
     * - Note item can add classes by defining { classes: { item } }
     */
    items: Array,
    /**
     * Classes object (keys are { list, item } to be applied to <ul> and <li>)
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
    const r = e, s = n(() => r.ordered || r.forceOrdered), c = n(() => s.value ? "ol" : "ul");
    return (i, O) => e.items?.length ? (l(), m(y(c.value), {
      key: 0,
      class: o([
        {
          "list-ordered": e.ordered,
          "list-unordered": e.unordered,
          "list-lines": e.lines,
          "list-compact": e.compact
        },
        e.classes.list
      ]),
      style: B({
        listStyleType: e.listStyleType
      }),
      reversed: s.value ? e.reversed : null,
      start: e.start
    }, {
      default: f(() => [
        (l(!0), d(v, null, S(e.items, (t, a) => (l(), d("li", {
          key: a,
          class: o([
            e.classes.item,
            t?.classes?.item
          ])
        }, [
          g(i.$slots, "default", {
            item: t,
            index: a
          }, () => [
            k(C(t), 1)
          ])
        ], 2))), 128))
      ]),
      _: 3
    }, 8, ["class", "style", "reversed", "start"])) : u("", !0);
  }
};
export {
  h as default
};
