import { computed as i, ref as f, watch as S, nextTick as T, onMounted as b, onUnmounted as L, createBlock as l, openBlock as o, Teleport as F, createElementBlock as x, createCommentVNode as $, unref as v, Fragment as I, resolveDynamicComponent as g, normalizeProps as h, mergeProps as s, createSlots as k, withCtx as c, createVNode as w, normalizeStyle as R } from "vue";
import V from "../../components/collapsible/UluModal.vue.js";
import D from "../popovers/UluPopoverBase.vue.js";
import P from "./UluTourPager.vue.js";
import _ from "./UluTourContent.vue.js";
import { useTour as M } from "./useTour.js";
const H = {
  __name: "UluTourDisplay",
  setup(N) {
    const { api: m, state: a } = M(), t = i(() => a.active?.steps[a.stepIndex]), u = f(null), d = f(null), C = i(() => ({
      placement: t.value?.placement || "bottom",
      arrow: !0,
      offset: 8
    })), E = i(() => ({
      ...a.active?.modalProps || {},
      ...t.value?.modalProps || {}
    })), z = i(() => ({
      modifiers: "large",
      ...a.active?.popoverProps || {},
      ...t.value?.popoverProps || {}
    })), r = f(null), p = () => {
      if (u.value) {
        const e = u.value.getBoundingClientRect();
        r.value = {
          top: e.top,
          left: e.left,
          width: e.width,
          height: e.height
        };
      } else
        r.value = null;
    }, B = i(() => {
      if (!r.value) return {};
      const e = r.value;
      return {
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        pointerEvents: "auto",
        zIndex: 9998,
        background: "rgba(0,0,0,0.5)",
        clipPath: `polygon(
        0% 0%, 
        100% 0%, 
        100% 100%, 
        0% 100%, 
        0% ${e.top}px, 
        ${e.left}px ${e.top}px, 
        ${e.left}px ${e.top + e.height}px, 
        ${e.left + e.width}px ${e.top + e.height}px, 
        ${e.left + e.width}px ${e.top}px, 
        ${e.left}px ${e.top}px, 
        0% ${e.top}px
      )`
      };
    });
    return S(t, async (e) => {
      if (e?.target) {
        await T();
        const n = document.querySelector(e.target);
        n ? (u.value = n, d.value && d.value.update(), e.highlight && p()) : console.warn(`Tour target not found: ${e.target}`);
      } else
        u.value = null, r.value = null;
    }, { immediate: !0 }), b(() => {
      window.addEventListener("resize", p), window.addEventListener("scroll", p);
    }), L(() => {
      window.removeEventListener("resize", p), window.removeEventListener("scroll", p);
    }), (e, n) => (o(), l(F, { to: "body" }, [
      v(a).active ? (o(), x(I, { key: 0 }, [
        t.value?.component ? (o(), l(g(t.value.component), h(s({ key: 0 }, t.value.componentProps)), null, 16)) : t.value?.target ? (o(), l(D, s({
          key: 2,
          ref_key: "popoverBase",
          ref: d,
          trigger: u.value,
          config: C.value,
          style: { zIndex: 9999 },
          isOpen: !0,
          onClose: n[1] || (n[1] = (y) => v(m).stop())
        }, z.value), k({
          default: c(() => [
            t.value?.contentComponent ? (o(), l(g(t.value.contentComponent), h(s({ key: 0 }, t.value.componentProps)), null, 16)) : (o(), l(_, {
              key: 1,
              step: t.value,
              "is-modal": !1
            }, null, 8, ["step"]))
          ]),
          _: 2
        }, [
          t.value?.hideFooter ? void 0 : {
            name: "footer",
            fn: c(() => [
              w(P)
            ]),
            key: "0"
          }
        ]), 1040, ["trigger", "config"])) : (o(), l(V, s({
          key: 1,
          modelValue: !0
        }, E.value, {
          onClose: n[0] || (n[0] = (y) => v(m).stop())
        }), k({
          default: c(() => [
            t.value?.contentComponent ? (o(), l(g(t.value.contentComponent), h(s({ key: 0 }, t.value.componentProps)), null, 16)) : (o(), l(_, {
              key: 1,
              step: t.value,
              "is-modal": !0
            }, null, 8, ["step"]))
          ]),
          _: 2
        }, [
          t.value?.hideFooter ? void 0 : {
            name: "footer",
            fn: c(() => [
              w(P)
            ]),
            key: "0"
          }
        ]), 1040)),
        t.value?.target && t.value?.highlight && r.value ? (o(), x("div", {
          key: 3,
          class: "tour-highlight-backdrop",
          style: R(B.value),
          onClick: n[2] || (n[2] = (y) => v(m).stop())
        }, null, 4)) : $("", !0)
      ], 64)) : $("", !0)
    ]));
  }
};
export {
  H as default
};
