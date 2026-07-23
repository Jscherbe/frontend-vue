import { createBlock as t, openBlock as a, unref as o, withCtx as s, renderSlot as l, normalizeProps as _, guardReactiveProps as c } from "vue";
import { Tab as n } from "@headlessui/vue";
const i = {
  __name: "UluTab",
  setup(p) {
    return (e, u) => (a(), t(o(n), { class: "tabs__tab" }, {
      default: s((r) => [
        l(e.$slots, "default", _(c(r)))
      ]),
      _: 3
    }));
  }
};
export {
  i as default
};
