import { inject as f, computed as o, createElementBlock as r, openBlock as i, normalizeClass as n, createElementVNode as y, renderSlot as d, createTextVNode as u, toDisplayString as m, Fragment as g, renderList as C } from "vue";
const k = {
  __name: "UluDefinitionListItem",
  props: {
    /**
     * The term text (renders inside dt)
     */
    term: String,
    /**
     * The description text or array of strings (renders inside dd)
     */
    description: [String, Array],
    /**
     * Optional classes object to override/append to injected parent classes { item, term, description }
     */
    classes: Object
  },
  setup(e) {
    const t = e, p = f("uluDefinitionListClasses", { value: {} }), s = o(() => p.value || {}), v = o(() => t.description ? Array.isArray(t.description) ? t.description : [t.description] : []);
    return (c, S) => (i(), r("div", {
      class: n([s.value.item, e.classes?.item])
    }, [
      y("dt", {
        class: n([s.value.term, e.classes?.term])
      }, [
        d(c.$slots, "term", {}, () => [
          u(m(e.term), 1)
        ])
      ], 2),
      (i(!0), r(g, null, C(v.value, (l, a) => (i(), r("dd", {
        key: a,
        class: n([s.value.description, e.classes?.description])
      }, [
        d(c.$slots, "description", {
          description: l,
          index: a
        }, () => [
          u(m(l), 1)
        ])
      ], 2))), 128))
    ], 2));
  }
};
export {
  k as default
};
