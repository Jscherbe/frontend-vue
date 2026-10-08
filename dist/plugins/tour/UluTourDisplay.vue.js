import { computed as r, ref as h, unref as n, watch as M, nextTick as $, onMounted as R, onUnmounted as q, createBlock as a, openBlock as u, Teleport as U, createElementBlock as P, createCommentVNode as S, Fragment as V, resolveDynamicComponent as i, mergeProps as d, createSlots as _, withCtx as y, normalizeStyle as H } from "vue";
import N from "../../components/collapsible/UluModal.vue.js";
import O from "../popovers/UluPopoverBase.vue.js";
import j from "./UluTourPager.vue.js";
import E from "./UluTourContent.vue.js";
import { useTour as A } from "./useTour.js";
const Z = {
  __name: "UluTourDisplay",
  setup(G) {
    const { api: s, state: l } = A(), t = r(() => l.active?.steps[l.stepIndex]), w = r(() => t.value?.component || l.active?.component), f = r(() => t.value?.contentComponent || l.active?.contentComponent), x = r(() => t.value?.pagerComponent || l.active?.pagerComponent || j), T = r(() => t.value?.modalComponent || l.active?.modalComponent || N), B = r(() => t.value?.popoverComponent || l.active?.popoverComponent || O), v = h(null), g = h(null), C = h(null), k = r(() => {
      const e = n(t.value?.target);
      return typeof e == "function" ? n(e()) : e;
    }), b = r(() => {
      const e = n(t.value?.highlightElement);
      return typeof e == "function" ? n(e()) : e;
    }), z = r(() => ({
      placement: t.value?.placement || "bottom",
      arrow: !0,
      offset: 8
    })), L = r(() => ({
      ...l.active?.modalProps || {},
      ...t.value?.modalProps || {}
    })), F = r(() => ({
      modifiers: "large",
      ...l.active?.popoverProps || {},
      ...t.value?.popoverProps || {}
    })), m = h(null), c = () => {
      const e = g.value || v.value;
      if (e) {
        const o = e.getBoundingClientRect();
        m.value = {
          top: o.top,
          left: o.left,
          width: o.width,
          height: o.height
        };
      } else
        m.value = null;
    }, I = r(() => {
      if (!m.value) return {};
      const e = m.value;
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
    return M([k, b], async ([e, o]) => {
      if (e) {
        await $();
        const p = typeof e == "string" ? document.querySelector(e) : n(e);
        p ? (v.value = p, C.value && C.value.update()) : (console.warn("Tour target not found:", e), v.value = null);
      } else
        v.value = null;
      if (o) {
        await $();
        const p = typeof o == "string" ? document.querySelector(o) : n(o);
        p ? g.value = p : (console.warn("Tour highlight element not found:", o), g.value = null);
      } else
        g.value = null;
      t.value?.highlight && c();
    }, { immediate: !0 }), R(() => {
      window.addEventListener("resize", c), window.addEventListener("scroll", c);
    }), q(() => {
      window.removeEventListener("resize", c), window.removeEventListener("scroll", c);
    }), (e, o) => (u(), a(U, { to: "body" }, [
      n(l).active ? (u(), P(V, { key: 0 }, [
        w.value ? (u(), a(i(w.value), d({
          key: 0,
          "data-ulu-tour-ui": "true",
          step: t.value,
          tourState: n(l),
          api: n(s)
        }, t.value.componentProps), null, 16, ["step", "tourState", "api"])) : k.value ? (u(), a(i(B.value), d({
          key: 2,
          ref_key: "popoverBase",
          ref: C,
          trigger: v.value,
          config: z.value,
          style: { zIndex: 9999 },
          isOpen: !0,
          "data-ulu-tour-ui": "true",
          onClose: o[1] || (o[1] = (p) => n(s).stop())
        }, F.value), _({
          default: y(() => [
            f.value ? (u(), a(i(f.value), d({
              key: 0,
              step: t.value,
              tourState: n(l),
              api: n(s),
              "is-modal": !1
            }, t.value.componentProps), null, 16, ["step", "tourState", "api"])) : (u(), a(E, {
              key: 1,
              step: t.value,
              "is-modal": !1
            }, null, 8, ["step"]))
          ]),
          _: 2
        }, [
          t.value?.hideFooter ? void 0 : {
            name: "footer",
            fn: y(() => [
              (u(), a(i(x.value)))
            ]),
            key: "0"
          }
        ]), 1040, ["trigger", "config"])) : (u(), a(i(T.value), d({
          key: 1,
          modelValue: !0,
          "data-ulu-tour-ui": "true"
        }, L.value, {
          onClose: o[0] || (o[0] = (p) => n(s).stop())
        }), _({
          default: y(() => [
            f.value ? (u(), a(i(f.value), d({
              key: 0,
              step: t.value,
              tourState: n(l),
              api: n(s),
              "is-modal": !0
            }, t.value.componentProps), null, 16, ["step", "tourState", "api"])) : (u(), a(E, {
              key: 1,
              step: t.value,
              "is-modal": !0
            }, null, 8, ["step"]))
          ]),
          _: 2
        }, [
          t.value?.hideFooter ? void 0 : {
            name: "footer",
            fn: y(() => [
              (u(), a(i(x.value)))
            ]),
            key: "0"
          }
        ]), 1040)),
        t.value?.target && t.value?.highlight && m.value ? (u(), P("div", {
          key: 3,
          class: "tour-highlight-backdrop",
          style: H(I.value),
          "data-ulu-tour-ui": "true",
          onClick: o[2] || (o[2] = (p) => n(s).stop())
        }, null, 4)) : S("", !0)
      ], 64)) : S("", !0)
    ]));
  }
};
export {
  Z as default
};
