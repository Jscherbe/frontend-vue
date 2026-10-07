import { computed as l, ref as h, watch as z, nextTick as L, onMounted as F, onUnmounted as I, createBlock as a, openBlock as n, Teleport as M, createElementBlock as $, createCommentVNode as k, unref as r, Fragment as R, resolveDynamicComponent as p, mergeProps as d, createSlots as w, withCtx as f, normalizeStyle as D } from "vue";
import U from "../../components/collapsible/UluModal.vue.js";
import V from "../popovers/UluPopoverBase.vue.js";
import q from "./UluTourPager.vue.js";
import P from "./UluTourContent.vue.js";
import { useTour as N } from "./useTour.js";
const Q = {
  __name: "UluTourDisplay",
  setup(O) {
    const { api: i, state: o } = N(), t = l(() => o.active?.steps[o.stepIndex]), y = l(() => t.value?.component || o.active?.component), c = l(() => t.value?.contentComponent || o.active?.contentComponent), C = l(() => t.value?.pagerComponent || o.active?.pagerComponent || q), _ = l(() => t.value?.modalComponent || o.active?.modalComponent || U), S = l(() => t.value?.popoverComponent || o.active?.popoverComponent || V), v = h(null), g = h(null), E = l(() => ({
      placement: t.value?.placement || "bottom",
      arrow: !0,
      offset: 8
    })), B = l(() => ({
      ...o.active?.modalProps || {},
      ...t.value?.modalProps || {}
    })), T = l(() => ({
      modifiers: "large",
      ...o.active?.popoverProps || {},
      ...t.value?.popoverProps || {}
    })), s = h(null), m = () => {
      if (v.value) {
        const e = v.value.getBoundingClientRect();
        s.value = {
          top: e.top,
          left: e.left,
          width: e.width,
          height: e.height
        };
      } else
        s.value = null;
    }, b = l(() => {
      if (!s.value) return {};
      const e = s.value;
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
    return z(t, async (e) => {
      if (e?.target) {
        await L();
        const u = document.querySelector(e.target);
        u ? (v.value = u, g.value && g.value.update(), e.highlight && m()) : console.warn(`Tour target not found: ${e.target}`);
      } else
        v.value = null, s.value = null;
    }, { immediate: !0 }), F(() => {
      window.addEventListener("resize", m), window.addEventListener("scroll", m);
    }), I(() => {
      window.removeEventListener("resize", m), window.removeEventListener("scroll", m);
    }), (e, u) => (n(), a(M, { to: "body" }, [
      r(o).active ? (n(), $(R, { key: 0 }, [
        y.value ? (n(), a(p(y.value), d({
          key: 0,
          "data-ulu-tour-ui": "true",
          step: t.value,
          tourState: r(o),
          api: r(i)
        }, t.value.componentProps), null, 16, ["step", "tourState", "api"])) : t.value?.target ? (n(), a(p(S.value), d({
          key: 2,
          ref_key: "popoverBase",
          ref: g,
          trigger: v.value,
          config: E.value,
          style: { zIndex: 9999 },
          isOpen: !0,
          "data-ulu-tour-ui": "true",
          onClose: u[1] || (u[1] = (x) => r(i).stop())
        }, T.value), w({
          default: f(() => [
            c.value ? (n(), a(p(c.value), d({
              key: 0,
              step: t.value,
              tourState: r(o),
              api: r(i),
              "is-modal": !1
            }, t.value.componentProps), null, 16, ["step", "tourState", "api"])) : (n(), a(P, {
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
        ]), 1040, ["trigger", "config"])) : (n(), a(p(_.value), d({
          key: 1,
          modelValue: !0,
          "data-ulu-tour-ui": "true"
        }, B.value, {
          onClose: u[0] || (u[0] = (x) => r(i).stop())
        }), w({
          default: f(() => [
            c.value ? (n(), a(p(c.value), d({
              key: 0,
              step: t.value,
              tourState: r(o),
              api: r(i),
              "is-modal": !0
            }, t.value.componentProps), null, 16, ["step", "tourState", "api"])) : (n(), a(P, {
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
        t.value?.target && t.value?.highlight && s.value ? (n(), $("div", {
          key: 3,
          class: "tour-highlight-backdrop",
          style: D(b.value),
          "data-ulu-tour-ui": "true",
          onClick: u[2] || (u[2] = (x) => r(i).stop())
        }, null, 4)) : k("", !0)
      ], 64)) : k("", !0)
    ]));
  }
};
export {
  Q as default
};
