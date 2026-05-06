import { createElementBlock as d, openBlock as n, normalizeClass as a, Fragment as m, renderList as _, createElementVNode as i, renderSlot as r, createTextVNode as o, toDisplayString as u } from "vue";
/* empty css                            */
const w = ["for"], S = ["id", "onChange"], $ = { value: "" }, k = ["value", "selected"], F = {
  __name: "UluFacetsFilterSelects",
  props: {
    /**
     * Facets Array
     */
    facets: {
      type: Array,
      default: () => []
    },
    /**
     * Optional classes bindings for all elements { container, group, label, select }
     */
    classes: {
      type: Object,
      default: () => ({})
    }
  },
  emits: ["facet-change"],
  setup(c, { emit: y }) {
    const b = y;
    function v(l, f) {
      const e = f.target.value;
      l.children.find((s) => s.selected)?.uid !== e && l.children.forEach((s) => {
        const h = s.uid === e;
        s.selected !== h && b("facet-change", {
          groupUid: l.uid,
          facetUid: s.uid,
          selected: h
        });
      });
    }
    return (l, f) => (n(), d("div", {
      class: a(["facets-dropdown-filters", c.classes.container])
    }, [
      (n(!0), d(m, null, _(c.facets, (e) => (n(), d("div", {
        class: a(["facets-dropdown-filters__group", c.classes.group]),
        key: e.uid
      }, [
        i("label", {
          for: `facet-dropdown-${e.uid}`,
          class: a(["facets-dropdown-filters__label", c.classes.label])
        }, [
          r(l.$slots, "label", {}, () => [
            o(u(e.name), 1)
          ])
        ], 10, w),
        i("select", {
          id: `facet-dropdown-${e.uid}`,
          class: a(["facets-dropdown-filters__select", c.classes.select]),
          onChange: (t) => v(e, t)
        }, [
          i("option", $, [
            r(l.$slots, "optionAll", { group: e }, () => [
              o(" All " + u(e.name) + "s ", 1)
            ])
          ]),
          (n(!0), d(m, null, _(e.children, (t, s) => (n(), d("option", {
            key: t.uid,
            value: t.uid,
            selected: t.selected
          }, [
            r(l.$slots, "option", {
              group: e,
              option: t,
              index: s
            }, () => [
              o(u(t.label), 1)
            ])
          ], 8, k))), 128))
        ], 42, S)
      ], 2))), 128))
    ], 2));
  }
};
export {
  F as default
};
