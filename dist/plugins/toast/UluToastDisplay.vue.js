import { computed as i, createBlock as r, openBlock as e, Teleport as p, unref as s, createVNode as u, TransitionGroup as m, normalizeClass as _, withCtx as d, createElementBlock as f, Fragment as k, renderList as T, resolveDynamicComponent as g } from "vue";
import { store as v } from "./store.js";
const C = {
  __name: "UluToastDisplay",
  setup(x) {
    const { toasts: c, pluginOptions: o } = v, l = i(() => {
      const { position: n } = o;
      return n.map((a) => `toast-container--${a}`);
    });
    return (n, a) => (e(), r(p, {
      to: s(o).teleportTo
    }, [
      u(m, {
        class: _(["toast-container", l.value]),
        name: "toast-animation",
        tag: "div"
      }, {
        default: d(() => [
          (e(!0), f(k, null, T(s(c), (t) => (e(), r(g(t.component), {
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
