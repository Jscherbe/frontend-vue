import { createBlock as t, openBlock as a, unref as o, withCtx as l, renderSlot as s, normalizeProps as n, guardReactiveProps as p } from "vue";
import { TabPanels as u } from "@headlessui/vue";
const i = {
  __name: "UluTabPanels",
  setup(c) {
    return (e, m) => (a(), t(o(u), { as: "template" }, {
      default: l((r) => [
        s(e.$slots, "default", n(p(r)))
      ]),
      _: 3
    }));
  }
};
export {
  i as default
};
