import { createBlock as r, openBlock as t, unref as o, withCtx as l, renderSlot as n, normalizeProps as s, guardReactiveProps as p } from "vue";
import { TabPanel as _ } from "@headlessui/vue";
const i = {
  __name: "UluTabPanel",
  setup(c) {
    return (e, u) => (t(), r(o(_), { class: "tabs__tabpanel" }, {
      default: l((a) => [
        n(e.$slots, "default", s(p(a)))
      ]),
      _: 3
    }));
  }
};
export {
  i as default
};
