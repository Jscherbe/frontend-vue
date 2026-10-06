import { computed as v, ref as f, watch as B, nextTick as T, onMounted as b, onUnmounted as z, createBlock as a, openBlock as o, Teleport as L, createElementBlock as y, createCommentVNode as x, unref as l, Fragment as F, resolveDynamicComponent as g, mergeProps as d, createSlots as $, withCtx as c, createVNode as k, normalizeStyle as I } from "vue";
import R from "../../components/collapsible/UluModal.vue.js";
import V from "../popovers/UluPopoverBase.vue.js";
import w from "./UluTourPager.vue.js";
import _ from "./UluTourContent.vue.js";
import { useTour as D } from "./useTour.js";
const G = {
  __name: "UluTourDisplay",
  setup(M) {
    const { api: u, state: r } = D(), t = v(() => r.active?.steps[r.stepIndex]), i = f(null), m = f(null), C = v(() => ({
      placement: t.value?.placement || "bottom",
      arrow: !0,
      offset: 8
    })), P = v(() => ({
      ...r.active?.modalProps || {},
      ...t.value?.modalProps || {}
    })), S = v(() => ({
      modifiers: "large",
      ...r.active?.popoverProps || {},
      ...t.value?.popoverProps || {}
    })), p = f(null), s = () => {
      if (i.value) {
        const e = i.value.getBoundingClientRect();
        p.value = {
          top: e.top,
          left: e.left,
          width: e.width,
          height: e.height
        };
      } else
        p.value = null;
    }, E = v(() => {
      if (!p.value) return {};
      const e = p.value;
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
    return B(t, async (e) => {
      if (e?.target) {
        await T();
        const n = document.querySelector(e.target);
        n ? (i.value = n, m.value && m.value.update(), e.highlight && s()) : console.warn(`Tour target not found: ${e.target}`);
      } else
        i.value = null, p.value = null;
    }, { immediate: !0 }), b(() => {
      window.addEventListener("resize", s), window.addEventListener("scroll", s);
    }), z(() => {
      window.removeEventListener("resize", s), window.removeEventListener("scroll", s);
    }), (e, n) => (o(), a(L, { to: "body" }, [
      l(r).active ? (o(), y(F, { key: 0 }, [
        t.value?.component ? (o(), a(g(t.value.component), d({
          key: 0,
          "data-ulu-tour-ui": "true",
          step: t.value,
          tourState: l(r),
          api: l(u)
        }, t.value.componentProps), null, 16, ["step", "tourState", "api"])) : t.value?.target ? (o(), a(V, d({
          key: 2,
          ref_key: "popoverBase",
          ref: m,
          trigger: i.value,
          config: C.value,
          style: { zIndex: 9999 },
          isOpen: !0,
          "data-ulu-tour-ui": "true",
          onClose: n[1] || (n[1] = (h) => l(u).stop())
        }, S.value), $({
          default: c(() => [
            t.value?.contentComponent ? (o(), a(g(t.value.contentComponent), d({
              key: 0,
              step: t.value,
              tourState: l(r),
              api: l(u),
              "is-modal": !1
            }, t.value.componentProps), null, 16, ["step", "tourState", "api"])) : (o(), a(_, {
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
              k(w)
            ]),
            key: "0"
          }
        ]), 1040, ["trigger", "config"])) : (o(), a(R, d({
          key: 1,
          modelValue: !0,
          "data-ulu-tour-ui": "true"
        }, P.value, {
          onClose: n[0] || (n[0] = (h) => l(u).stop())
        }), $({
          default: c(() => [
            t.value?.contentComponent ? (o(), a(g(t.value.contentComponent), d({
              key: 0,
              step: t.value,
              tourState: l(r),
              api: l(u),
              "is-modal": !0
            }, t.value.componentProps), null, 16, ["step", "tourState", "api"])) : (o(), a(_, {
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
              k(w)
            ]),
            key: "0"
          }
        ]), 1040)),
        t.value?.target && t.value?.highlight && p.value ? (o(), y("div", {
          key: 3,
          class: "tour-highlight-backdrop",
          style: I(E.value),
          "data-ulu-tour-ui": "true",
          onClick: n[2] || (n[2] = (h) => l(u).stop())
        }, null, 4)) : x("", !0)
      ], 64)) : x("", !0)
    ]));
  }
};
export {
  G as default
};
