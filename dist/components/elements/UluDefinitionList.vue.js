import { computed as u, createElementBlock as l, createCommentVNode as B, openBlock as n, normalizeClass as a, unref as y, Fragment as b, renderList as g, createElementVNode as o, renderSlot as c, createTextVNode as d, toDisplayString as m } from "vue";
import { useModifiers as k } from "../../composables/useModifiers.js";
const F = {
  __name: "UluDefinitionList",
  props: {
    /**
     * Array of term, and description (props in object)
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
    const e = t, p = u(() => ({
      inline: e.inline,
      "inline-all": e.inlineAll,
      table: e.table,
      separated: e.separated,
      "separated-first": e.separatedFirst,
      "separated-last": e.separatedLast,
      compact: e.compact
    })), { resolvedModifiers: f } = k({
      props: e,
      internal: p,
      baseClass: "definition-list"
    });
    return (r, A) => t.items?.length ? (n(), l("dl", {
      key: 0,
      class: a(["definition-list", [y(f), t.classes.list]])
    }, [
      (n(!0), l(b, null, g(t.items, (s, i) => (n(), l("div", {
        key: i,
        class: a(t.classes.item)
      }, [
        o("dt", {
          class: a(t.classes.term)
        }, [
          c(r.$slots, "term", {
            item: s,
            index: i
          }, () => [
            d(m(s.term), 1)
          ])
        ], 2),
        o("dd", {
          class: a(t.classes.description)
        }, [
          c(r.$slots, "description", {
            item: s,
            index: i
          }, () => [
            d(m(s.description), 1)
          ])
        ], 2)
      ], 2))), 128))
    ], 2)) : B("", !0);
  }
};
export {
  F as default
};
