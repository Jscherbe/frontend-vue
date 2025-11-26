import { store as l } from "./store.js";
import { createBlock as a, openBlock as e, Teleport as p, createVNode as c, TransitionGroup as m, normalizeClass as u, withCtx as d, createElementBlock as f, Fragment as _, renderList as g, resolveDynamicComponent as C } from "vue";
/* empty css                     */
import T from "../../_virtual/_plugin-vue_export-helper.js";
const k = {
  name: "UluTooltipDisplay",
  data() {
    const { toasts: t, pluginOptions: o } = l;
    return { toasts: t, pluginOptions: o };
  },
  computed: {
    classes() {
      const { position: t } = this.pluginOptions;
      return t.map((n) => `toast-container--${n}`);
    }
  }
};
function x(t, o, n, y, r, i) {
  return e(), a(p, {
    to: r.pluginOptions.teleportTo
  }, [
    c(m, {
      class: u(["toast-container", i.classes]),
      name: "toast-animation",
      tag: "div"
    }, {
      default: d(() => [
        (e(!0), f(_, null, g(r.toasts, (s) => (e(), a(C(s.component), {
          key: s.uid,
          toast: s
        }, null, 8, ["toast"]))), 128))
      ]),
      _: 1
    }, 8, ["class"])
  ], 8, ["to"]);
}
const v = /* @__PURE__ */ T(k, [["render", x]]);
export {
  v as default
};
