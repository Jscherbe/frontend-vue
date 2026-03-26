import { provide as m, computed as r, createBlock as y, createCommentVNode as f, openBlock as a, resolveDynamicComponent as v, normalizeStyle as B, normalizeClass as o, withCtx as S, createElementBlock as i, renderSlot as c, Fragment as k, renderList as g, createTextVNode as C, toDisplayString as O } from "vue";
const L = {
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
    const t = e;
    m("uluListClasses", r(() => t.classes));
    const n = r(() => t.ordered || t.forceOrdered), u = r(() => n.value ? "ol" : "ul");
    return (l, T) => (e.items !== void 0 ? e.items.length : l.$slots.default) ? (a(), y(v(u.value), {
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
      reversed: n.value ? e.reversed : null,
      start: e.start
    }, {
      default: S(() => [
        e.items !== void 0 ? (a(!0), i(k, { key: 0 }, g(e.items, (s, d) => (a(), i("li", {
          key: d,
          class: o([
            e.classes.item,
            s?.classes?.item
          ])
        }, [
          c(l.$slots, "default", {
            item: s,
            index: d
          }, () => [
            C(O(s), 1)
          ])
        ], 2))), 128)) : c(l.$slots, "default", { key: 1 })
      ]),
      _: 3
    }, 8, ["class", "style", "reversed", "start"])) : f("", !0);
  }
};
export {
  L as default
};
