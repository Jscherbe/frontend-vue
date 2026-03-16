import { inject as v, ref as f, computed as l, watch as u, createBlock as M, createCommentVNode as V, openBlock as _, resolveDynamicComponent as k, mergeProps as U, nextTick as x } from "vue";
import { modalsState as m } from "./api.js";
const C = {
  __name: "UluModalsDisplay",
  emits: [
    "modal-unmount",
    "modal-mount"
  ],
  setup(y, { emit: r }) {
    const n = r, d = v("uluModals"), e = f(!1), o = l(() => m.data?.active), s = l(() => m.data?.activeProps);
    u(o, (t) => {
      t ? e.value = !0 : e.value = !1;
    }), u(e, (t) => {
      !t && o.value && d?.close();
    });
    const c = () => {
      n("modal-mount", { modal: o.value });
    }, p = () => {
      x(() => {
        n("modal-unmount");
      });
    };
    return (t, a) => o.value ? (_(), M(k(o.value.component), U({ key: 0 }, s.value, {
      modelValue: e.value,
      "onUpdate:modelValue": a[0] || (a[0] = (i) => e.value = i),
      onVnodeMounted: c,
      onVnodeUnmounted: p
    }), null, 16, ["modelValue"])) : V("", !0);
  }
};
export {
  C as default
};
