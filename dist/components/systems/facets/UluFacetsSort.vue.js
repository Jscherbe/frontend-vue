import { createElementBlock as l, openBlock as a, normalizeClass as o, createElementVNode as u, unref as d, renderSlot as f, createTextVNode as p, Fragment as v, renderList as y, toDisplayString as V } from "vue";
import { newId as g } from "../../../utils/dom.js";
const S = ["for"], b = ["value", "id"], x = ["value"], k = {
  __name: "UluFacetsSort",
  props: {
    classes: {
      type: Object,
      default: () => ({})
    },
    sortTypes: {
      type: Object,
      default: () => ({})
    },
    modelValue: {
      type: String,
      default: ""
    }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: c }) {
    const i = c, r = g("ulu-facet-sort");
    return (m, t) => (a(), l("div", {
      class: o(["facets-sort", e.classes.container])
    }, [
      u("label", {
        for: d(r),
        class: o(e.classes.label)
      }, [
        f(m.$slots, "default", {}, () => [
          t[1] || (t[1] = p("Sort:", -1))
        ])
      ], 10, S),
      u("select", {
        value: e.modelValue,
        onChange: t[0] || (t[0] = (s) => i("update:modelValue", s.target.value)),
        id: d(r),
        class: o(e.classes.select)
      }, [
        (a(!0), l(v, null, y(e.sortTypes, (s, n) => (a(), l("option", {
          value: n,
          key: n
        }, V(s.text), 9, x))), 128))
      ], 42, b)
    ], 2));
  }
};
export {
  k as default
};
