import { inject as c, computed as s, createBlock as r, openBlock as i, resolveDynamicComponent as m, normalizeClass as u, withCtx as p, renderSlot as d } from "vue";
const f = {
  __name: "UluListItem",
  props: {
    /**
     * Optional class binding to append to the injected parent classes
     */
    classes: [String, Array, Object],
    /**
     * The HTML element to render the item as
     */
    element: String
  },
  setup(e) {
    const l = e, t = c("uluListContext", { value: {} }), n = s(() => t.value?.classes || {}), a = s(() => l.element || t.value?.itemElement || "li");
    return (o, v) => (i(), r(m(a.value), {
      class: u([n.value.item, e.classes])
    }, {
      default: p(() => [
        d(o.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
};
export {
  f as default
};
