import { computed as l, ref as h, watch as L, nextTick as D, onMounted as F, onUnmounted as I, createBlock as a, openBlock as n, Teleport as M, createElementBlock as w, createCommentVNode as $, unref as r, Fragment as R, resolveDynamicComponent as p, mergeProps as c, createSlots as P, withCtx as f, normalizeStyle as U } from "vue";
import V from "../../components/collapsible/UluModal.vue.js";
import q from "../popovers/UluPopoverBase.vue.js";
import N from "./UluTourPager.vue.js";
import _ from "./UluTourContent.vue.js";
import { useTour as O } from "./useTour.js";
const W = {
  __name: "UluTourDisplay",
  setup(j) {
    const { api: s, state: o } = O(), t = l(() => o.active?.steps[o.stepIndex]), y = l(() => t.value?.component || o.active?.component), d = l(() => t.value?.contentComponent || o.active?.contentComponent), C = l(() => t.value?.pagerComponent || o.active?.pagerComponent || N), S = l(() => t.value?.modalComponent || o.active?.modalComponent || V), E = l(() => t.value?.popoverComponent || o.active?.popoverComponent || q), i = h(null), g = h(null), x = l(() => {
      const e = t.value?.target;
      return typeof e == "function" ? e() : e;
    }), T = l(() => ({
      placement: t.value?.placement || "bottom",
      arrow: !0,
      offset: 8
    })), B = l(() => ({
      ...o.active?.modalProps || {},
      ...t.value?.modalProps || {}
    })), b = l(() => ({
      modifiers: "large",
      ...o.active?.popoverProps || {},
      ...t.value?.popoverProps || {}
    })), v = h(null), m = () => {
      if (i.value) {
        const e = i.value.getBoundingClientRect();
        v.value = {
          top: e.top,
          left: e.left,
          width: e.width,
          height: e.height
        };
      } else
        v.value = null;
    }, z = l(() => {
      if (!v.value) return {};
      const e = v.value;
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
    return L(x, async (e) => {
      if (e) {
        await D();
        const u = typeof e == "string" ? document.querySelector(e) : e;
        u ? (i.value = u, g.value && g.value.update(), t.value?.highlight && m()) : (console.warn("Tour target not found:", e), i.value = null);
      } else
        i.value = null, v.value = null;
    }, { immediate: !0 }), F(() => {
      window.addEventListener("resize", m), window.addEventListener("scroll", m);
    }), I(() => {
      window.removeEventListener("resize", m), window.removeEventListener("scroll", m);
    }), (e, u) => (n(), a(M, { to: "body" }, [
      r(o).active ? (n(), w(R, { key: 0 }, [
        y.value ? (n(), a(p(y.value), c({
          key: 0,
          "data-ulu-tour-ui": "true",
          step: t.value,
          tourState: r(o),
          api: r(s)
        }, t.value.componentProps), null, 16, ["step", "tourState", "api"])) : x.value ? (n(), a(p(E.value), c({
          key: 2,
          ref_key: "popoverBase",
          ref: g,
          trigger: i.value,
          config: T.value,
          style: { zIndex: 9999 },
          isOpen: !0,
          "data-ulu-tour-ui": "true",
          onClose: u[1] || (u[1] = (k) => r(s).stop())
        }, b.value), P({
          default: f(() => [
            d.value ? (n(), a(p(d.value), c({
              key: 0,
              step: t.value,
              tourState: r(o),
              api: r(s),
              "is-modal": !1
            }, t.value.componentProps), null, 16, ["step", "tourState", "api"])) : (n(), a(_, {
              key: 1,
              step: t.value,
              "is-modal": !1
            }, null, 8, ["step"]))
          ]),
          _: 2
        }, [
          t.value?.hideFooter ? void 0 : {
            name: "footer",
            fn: f(() => [
              (n(), a(p(C.value)))
            ]),
            key: "0"
          }
        ]), 1040, ["trigger", "config"])) : (n(), a(p(S.value), c({
          key: 1,
          modelValue: !0,
          "data-ulu-tour-ui": "true"
        }, B.value, {
          onClose: u[0] || (u[0] = (k) => r(s).stop())
        }), P({
          default: f(() => [
            d.value ? (n(), a(p(d.value), c({
              key: 0,
              step: t.value,
              tourState: r(o),
              api: r(s),
              "is-modal": !0
            }, t.value.componentProps), null, 16, ["step", "tourState", "api"])) : (n(), a(_, {
              key: 1,
              step: t.value,
              "is-modal": !0
            }, null, 8, ["step"]))
          ]),
          _: 2
        }, [
          t.value?.hideFooter ? void 0 : {
            name: "footer",
            fn: f(() => [
              (n(), a(p(C.value)))
            ]),
            key: "0"
          }
        ]), 1040)),
        t.value?.target && t.value?.highlight && v.value ? (n(), w("div", {
          key: 3,
          class: "tour-highlight-backdrop",
          style: U(z.value),
          "data-ulu-tour-ui": "true",
          onClick: u[2] || (u[2] = (k) => r(s).stop())
        }, null, 4)) : $("", !0)
      ], 64)) : $("", !0)
    ]));
  }
};
export {
  W as default
};
