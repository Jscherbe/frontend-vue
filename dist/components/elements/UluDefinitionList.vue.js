import { computed as b, createElementBlock as r, createCommentVNode as g, openBlock as a, normalizeClass as n, unref as k, Fragment as d, renderList as m, createElementVNode as L, renderSlot as p, createTextVNode as u, toDisplayString as f } from "vue";
import { useModifiers as C } from "../../composables/useModifiers.js";
const N = {
  __name: "UluDefinitionList",
  props: {
    /**
     * Array of objects with term, and description (string or array of strings)
     * - Can use slots also
     */
    items: Array,
    /**
     * Classes object for different elements { list, item, term, description }
     */
    classes: {
      type: Object,
      default: () => ({})
    },
    /**
     * Class modifiers (ie. 'transparent', 'secondary', etc)
     */
    modifiers: [String, Array],
    /**
     * Displays only the definition descriptions on the same line.
     */
    inline: Boolean,
    /**
     * Displays both the definition term and its descriptions on the same line.
     */
    inlineAll: Boolean,
    /**
     * Displays the list in a two-column grid on larger screens.
     */
    table: Boolean,
    /**
     * Adds a rule between each item.
     */
    separated: Boolean,
    /**
     * Adds a rule to the top of the first item.
     */
    separatedFirst: Boolean,
    /**
     * Adds a rule to the bottom of the last item.
     */
    separatedLast: Boolean,
    /**
     * Reduces the margin between items.
     */
    compact: Boolean
  },
  setup(t) {
    const e = t, y = b(() => ({
      inline: e.inline,
      "inline-all": e.inlineAll,
      table: e.table,
      separated: e.separated,
      "separated-first": e.separatedFirst,
      "separated-last": e.separatedLast,
      compact: e.compact
    })), { resolvedModifiers: B } = C({
      props: e,
      internal: y,
      baseClass: "definition-list"
    }), A = (s) => Array.isArray(s.description) ? s.description : [s.description];
    return (s, D) => t.items?.length ? (a(), r("dl", {
      key: 0,
      class: n(["definition-list", [k(B), t.classes.list]])
    }, [
      (a(!0), r(d, null, m(t.items, (i, l) => (a(), r("div", {
        key: l,
        class: n(t.classes.item)
      }, [
        L("dt", {
          class: n(t.classes.term)
        }, [
          p(s.$slots, "term", {
            item: i,
            index: l
          }, () => [
            u(f(i.term), 1)
          ])
        ], 2),
        (a(!0), r(d, null, m(A(i), (o, c) => (a(), r("dd", {
          key: c,
          class: n(t.classes.description)
        }, [
          p(s.$slots, "description", {
            item: i,
            description: o,
            index: l,
            descriptionIndex: c
          }, () => [
            u(f(o), 1)
          ])
        ], 2))), 128))
      ], 2))), 128))
    ], 2)) : g("", !0);
  }
};
export {
  N as default
};
