import { computed as i, createBlock as a, openBlock as e, Teleport as p, unref as s, createVNode as m, TransitionGroup as u, normalizeClass as _, withCtx as d, createElementBlock as f, Fragment as k, renderList as T, resolveDynamicComponent as g } from "vue";
import { store as v } from "./store.js";
/* empty css                     */
const h = {
  __name: "UluToastDisplay",
  setup(x) {
    const { toasts: c, pluginOptions: o } = v, l = i(() => {
      const { position: n } = o;
      return n.map((r) => `toast-container--${r}`);
    });
    return (n, r) => (e(), a(p, {
      to: s(o).teleportTo
    }, [
      m(u, {
        class: _(["toast-container", l.value]),
        name: "toast-animation",
        tag: "div"
      }, {
        default: d(() => [
          (e(!0), f(k, null, T(s(c), (t) => (e(), a(g(t.component), {
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
  h as default
};
