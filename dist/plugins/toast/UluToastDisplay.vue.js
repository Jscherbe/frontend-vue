import { computed as l, createBlock as r, openBlock as e, Teleport as p, unref as s, createVNode as u, TransitionGroup as m, normalizeClass as _, withCtx as d, createElementBlock as f, Fragment as k, renderList as y, resolveDynamicComponent as T } from "vue";
import { store as g } from "./store.js";
const C = {
  __name: "UluToastDisplay",
  setup(v) {
    const { toasts: c, pluginOptions: o } = g, i = l(() => {
      const { position: n } = o;
      return n.map((a) => `toast-container--${a}`);
    });
    return (n, a) => (e(), r(p, {
      to: s(o).teleportTo
    }, [
      u(m, {
        class: _(["toast-container", i.value]),
        name: "toast-animation",
        tag: "div",
        type: "transition"
      }, {
        default: d(() => [
          (e(!0), f(k, null, y(s(c), (t) => (e(), r(T(t.component), {
            key: t.uid,
            toast: t
          }, null, 8, ["toast"]))), 128))
        ]),
        _: 1
      }, 8, ["class"])
    ], 8, ["to"]));
  }
};
export {
  C as default
};
