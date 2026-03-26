import { provide as b, computed as m, createElementBlock as i, createCommentVNode as g, openBlock as a, normalizeClass as r, unref as L, renderSlot as o, Fragment as u, renderList as f, createElementVNode as C, createTextVNode as p, toDisplayString as y } from "vue";
import { useModifiers as D } from "../../composables/useModifiers.js";
const M = {
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
  setup(e) {
    const t = e;
    b("uluDefinitionListClasses", m(() => t.classes));
    const B = m(() => ({
      inline: t.inline,
      "inline-all": t.inlineAll,
      table: t.table,
      separated: t.separated,
      "separated-first": t.separatedFirst,
      "separated-last": t.separatedLast,
      compact: t.compact
    })), { resolvedModifiers: k } = D({
      props: t,
      internal: B,
      baseClass: "definition-list"
    }), A = (s) => Array.isArray(s.description) ? s.description : [s.description];
    return (s, $) => (e.items !== void 0 ? e.items.length : s.$slots.default) ? (a(), i("dl", {
      key: 0,
      class: r(["definition-list", [L(k), e.classes.list]])
    }, [
      e.items !== void 0 ? (a(!0), i(u, { key: 0 }, f(e.items, (n, l) => (a(), i("div", {
        key: l,
        class: r(e.classes.item)
      }, [
        C("dt", {
          class: r(e.classes.term)
        }, [
          o(s.$slots, "term", {
            item: n,
            index: l
          }, () => [
            p(y(n.term), 1)
          ])
        ], 2),
        (a(!0), i(u, null, f(A(n), (d, c) => (a(), i("dd", {
          key: c,
          class: r(e.classes.description)
        }, [
          o(s.$slots, "description", {
            item: n,
            description: d,
            index: l,
            descriptionIndex: c
          }, () => [
            p(y(d), 1)
          ])
        ], 2))), 128))
      ], 2))), 128)) : o(s.$slots, "default", { key: 1 })
    ], 2)) : g("", !0);
  }
};
export {
  M as default
};
