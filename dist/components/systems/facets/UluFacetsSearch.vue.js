import { computed as m, createElementBlock as p, openBlock as f, normalizeClass as l, createElementVNode as a, withDirectives as h, unref as r, vModelText as V } from "vue";
import { newId as v } from "../../../utils/dom.js";
const w = ["for"], y = ["id", "placeholder"], S = {
  __name: "UluFacetsSearch",
  props: {
    classes: {
      type: Object,
      default: () => ({})
    },
    modelValue: String,
    placeholder: {
      type: String,
      default: "Keywords…"
    }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: n }) {
    const d = e, u = n, s = v("facet-view-keyword"), o = m({
      get() {
        return d.modelValue;
      },
      set(c) {
        u("update:modelValue", c);
      }
    });
    return (c, t) => (f(), p("div", {
      class: l(["facets-search", e.classes.container])
    }, [
      a("label", {
        class: l(e.classes.label),
        for: r(s)
      }, [...t[1] || (t[1] = [
        a("strong", null, "Search", -1)
      ])], 10, w),
      h(a("input", {
        id: r(s),
        class: l(e.classes.input),
        "onUpdate:modelValue": t[0] || (t[0] = (i) => o.value = i),
        type: "text",
        placeholder: e.placeholder
      }, null, 10, y), [
        [V, o.value]
      ])
    ], 2));
  }
};
export {
  S as default
};
