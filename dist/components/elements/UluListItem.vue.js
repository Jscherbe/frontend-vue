import { inject as a, computed as c, createElementBlock as r, openBlock as n, normalizeClass as o, renderSlot as u } from "vue";
const p = {
  __name: "UluListItem",
  props: {
    /**
     * Optional class binding to append to the injected parent classes
     */
    classes: [String, Array, Object]
  },
  setup(e) {
    const s = a("uluListClasses", { value: {} }), t = c(() => s.value || {});
    return (l, i) => (n(), r("li", {
      class: o([t.value.item, e.classes])
    }, [
      u(l.$slots, "default")
    ], 2));
  }
};
export {
  p as default
};
