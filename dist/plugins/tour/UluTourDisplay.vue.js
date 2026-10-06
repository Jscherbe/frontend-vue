import { computed as s, ref as f, watch as B, nextTick as T, onMounted as b, onUnmounted as z, createBlock as r, openBlock as o, Teleport as L, createElementBlock as y, createCommentVNode as x, unref as u, Fragment as F, resolveDynamicComponent as g, mergeProps as v, createSlots as $, withCtx as d, createVNode as k, normalizeStyle as I } from "vue";
import R from "../../components/collapsible/UluModal.vue.js";
import V from "../popovers/UluPopoverBase.vue.js";
import w from "./UluTourPager.vue.js";
import _ from "./UluTourContent.vue.js";
import { useTour as D } from "./useTour.js";
const G = {
  __name: "UluTourDisplay",
  setup(M) {
    const { api: c, state: n } = D(), t = s(() => n.active?.steps[n.stepIndex]), p = f(null), m = f(null), C = s(() => ({
      placement: t.value?.placement || "bottom",
      arrow: !0,
      offset: 8
    })), P = s(() => ({
      ...n.active?.modalProps || {},
      ...t.value?.modalProps || {}
    })), S = s(() => ({
      modifiers: "large",
      ...n.active?.popoverProps || {},
      ...t.value?.popoverProps || {}
    })), a = f(null), i = () => {
      if (p.value) {
        const e = p.value.getBoundingClientRect();
        a.value = {
          top: e.top,
          left: e.left,
          width: e.width,
          height: e.height
        };
      } else
        a.value = null;
    }, E = s(() => {
      if (!a.value) return {};
      const e = a.value;
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
        const l = document.querySelector(e.target);
        l ? (p.value = l, m.value && m.value.update(), e.highlight && i()) : console.warn(`Tour target not found: ${e.target}`);
      } else
        p.value = null, a.value = null;
    }, { immediate: !0 }), b(() => {
      window.addEventListener("resize", i), window.addEventListener("scroll", i);
    }), z(() => {
      window.removeEventListener("resize", i), window.removeEventListener("scroll", i);
    }), (e, l) => (o(), r(L, { to: "body" }, [
      u(n).active ? (o(), y(F, { key: 0 }, [
        t.value?.component ? (o(), r(g(t.value.component), v({
          key: 0,
          "data-ulu-tour-ui": "true",
          step: t.value,
          tourState: u(n)
        }, t.value.componentProps), null, 16, ["step", "tourState"])) : t.value?.target ? (o(), r(V, v({
          key: 2,
          ref_key: "popoverBase",
          ref: m,
          trigger: p.value,
          config: C.value,
          style: { zIndex: 9999 },
          isOpen: !0,
          "data-ulu-tour-ui": "true",
          onClose: l[1] || (l[1] = (h) => u(c).stop())
        }, S.value), $({
          default: d(() => [
            t.value?.contentComponent ? (o(), r(g(t.value.contentComponent), v({
              key: 0,
              step: t.value,
              tourState: u(n),
              "is-modal": !1
            }, t.value.componentProps), null, 16, ["step", "tourState"])) : (o(), r(_, {
              key: 1,
              step: t.value,
              "is-modal": !1
            }, null, 8, ["step"]))
          ]),
          _: 2
        }, [
          t.value?.hideFooter ? void 0 : {
            name: "footer",
            fn: d(() => [
              k(w)
            ]),
            key: "0"
          }
        ]), 1040, ["trigger", "config"])) : (o(), r(R, v({
          key: 1,
          modelValue: !0,
          "data-ulu-tour-ui": "true"
        }, P.value, {
          onClose: l[0] || (l[0] = (h) => u(c).stop())
        }), $({
          default: d(() => [
            t.value?.contentComponent ? (o(), r(g(t.value.contentComponent), v({
              key: 0,
              step: t.value,
              tourState: u(n),
              "is-modal": !0
            }, t.value.componentProps), null, 16, ["step", "tourState"])) : (o(), r(_, {
              key: 1,
              step: t.value,
              "is-modal": !0
            }, null, 8, ["step"]))
          ]),
          _: 2
        }, [
          t.value?.hideFooter ? void 0 : {
            name: "footer",
            fn: d(() => [
              k(w)
            ]),
            key: "0"
          }
        ]), 1040)),
        t.value?.target && t.value?.highlight && a.value ? (o(), y("div", {
          key: 3,
          class: "tour-highlight-backdrop",
          style: I(E.value),
          "data-ulu-tour-ui": "true",
          onClick: l[2] || (l[2] = (h) => u(c).stop())
        }, null, 4)) : x("", !0)
      ], 64)) : x("", !0)
    ]));
  }
};
export {
  G as default
};
