import { computed as p, ref as f, watch as S, nextTick as T, onMounted as b, onUnmounted as L, createBlock as l, openBlock as o, Teleport as F, createElementBlock as y, createCommentVNode as x, unref as v, Fragment as I, resolveDynamicComponent as g, mergeProps as s, createSlots as $, withCtx as c, normalizeProps as k, createVNode as w, normalizeStyle as R } from "vue";
import V from "../../components/collapsible/UluModal.vue.js";
import D from "../popovers/UluPopoverBase.vue.js";
import P from "./UluTourPager.vue.js";
import _ from "./UluTourContent.vue.js";
import { useTour as M } from "./useTour.js";
const H = {
  __name: "UluTourDisplay",
  setup(N) {
    const { api: d, state: u } = M(), t = p(() => u.active?.steps[u.stepIndex]), a = f(null), m = f(null), C = p(() => ({
      placement: t.value?.placement || "bottom",
      arrow: !0,
      offset: 8
    })), E = p(() => ({
      ...u.active?.modalProps || {},
      ...t.value?.modalProps || {}
    })), z = p(() => ({
      modifiers: "large",
      ...u.active?.popoverProps || {},
      ...t.value?.popoverProps || {}
    })), r = f(null), i = () => {
      if (a.value) {
        const e = a.value.getBoundingClientRect();
        r.value = {
          top: e.top,
          left: e.left,
          width: e.width,
          height: e.height
        };
      } else
        r.value = null;
    }, B = p(() => {
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
        n ? (a.value = n, m.value && m.value.update(), e.highlight && i()) : console.warn(`Tour target not found: ${e.target}`);
      } else
        a.value = null, r.value = null;
    }, { immediate: !0 }), b(() => {
      window.addEventListener("resize", i), window.addEventListener("scroll", i);
    }), L(() => {
      window.removeEventListener("resize", i), window.removeEventListener("scroll", i);
    }), (e, n) => (o(), l(F, { to: "body" }, [
      v(u).active ? (o(), y(I, { key: 0 }, [
        t.value?.component ? (o(), l(g(t.value.component), s({
          key: 0,
          "data-ulu-tour-ui": "true"
        }, t.value.componentProps), null, 16)) : t.value?.target ? (o(), l(D, s({
          key: 2,
          ref_key: "popoverBase",
          ref: m,
          trigger: a.value,
          config: C.value,
          style: { zIndex: 9999 },
          isOpen: !0,
          "data-ulu-tour-ui": "true",
          onClose: n[1] || (n[1] = (h) => v(d).stop())
        }, z.value), $({
          default: c(() => [
            t.value?.contentComponent ? (o(), l(g(t.value.contentComponent), k(s({ key: 0 }, t.value.componentProps)), null, 16)) : (o(), l(_, {
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
          modelValue: !0,
          "data-ulu-tour-ui": "true"
        }, E.value, {
          onClose: n[0] || (n[0] = (h) => v(d).stop())
        }), $({
          default: c(() => [
            t.value?.contentComponent ? (o(), l(g(t.value.contentComponent), k(s({ key: 0 }, t.value.componentProps)), null, 16)) : (o(), l(_, {
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
        t.value?.target && t.value?.highlight && r.value ? (o(), y("div", {
          key: 3,
          class: "tour-highlight-backdrop",
          style: R(B.value),
          "data-ulu-tour-ui": "true",
          onClick: n[2] || (n[2] = (h) => v(d).stop())
        }, null, 4)) : x("", !0)
      ], 64)) : x("", !0)
    ]));
  }
};
export {
  H as default
};
