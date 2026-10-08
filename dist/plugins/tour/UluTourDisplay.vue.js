import { computed as r, ref as y, unref as n, watch as M, nextTick as $, onMounted as R, onUnmounted as q, createBlock as u, openBlock as a, Teleport as U, createElementBlock as P, createCommentVNode as S, Fragment as V, resolveDynamicComponent as s, mergeProps as c, createSlots as _, withCtx as C, normalizeStyle as H } from "vue";
import N from "../../components/collapsible/UluModal.vue.js";
import O from "../popovers/UluPopoverBase.vue.js";
import j from "./UluTourPager.vue.js";
import E from "./UluTourContent.vue.js";
import { useTour as A } from "./useTour.js";
const Z = {
  __name: "UluTourDisplay",
  setup(G) {
    const { api: i, state: l } = A(), t = r(() => l.active?.steps[l.stepIndex]), h = r(() => t.value?.component || l.active?.component), f = r(() => t.value?.contentComponent || l.active?.contentComponent), x = r(() => t.value?.pagerComponent || l.active?.pagerComponent || j), T = r(() => t.value?.modalComponent || l.active?.modalComponent || N), b = r(() => t.value?.popoverComponent || l.active?.popoverComponent || O), v = y(null), g = y(null), w = y(null), k = r(() => {
      const e = n(t.value?.target);
      return typeof e == "function" ? n(e()) : e;
    }), B = r(() => {
      const e = n(t.value?.highlight);
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
    })), d = y(null), m = () => {
      const e = g.value || v.value;
      if (e) {
        const o = e.getBoundingClientRect();
        d.value = {
          top: o.top,
          left: o.left,
          width: o.width,
          height: o.height
        };
      } else
        d.value = null;
    }, I = r(() => {
      if (!d.value) return {};
      const e = d.value;
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
    return M([k, B], async ([e, o]) => {
      if (e) {
        await $();
        const p = typeof e == "string" ? document.querySelector(e) : n(e);
        p ? (v.value = p, w.value && w.value.update()) : (console.warn("Tour target not found:", e), v.value = null);
      } else
        v.value = null;
      if (o && typeof o != "boolean") {
        await $();
        const p = typeof o == "string" ? document.querySelector(o) : n(o);
        p ? g.value = p : (console.warn("Tour highlight element not found:", o), g.value = null);
      } else
        g.value = null;
      o && m();
    }, { immediate: !0 }), R(() => {
      window.addEventListener("resize", m), window.addEventListener("scroll", m);
    }), q(() => {
      window.removeEventListener("resize", m), window.removeEventListener("scroll", m);
    }), (e, o) => (a(), u(U, { to: "body" }, [
      n(l).active ? (a(), P(V, { key: 0 }, [
        h.value ? (a(), u(s(h.value), c({
          key: 0,
          "data-ulu-tour-ui": "true",
          step: t.value,
          tourState: n(l),
          api: n(i)
        }, t.value.componentProps), null, 16, ["step", "tourState", "api"])) : k.value ? (a(), u(s(b.value), c({
          key: 2,
          ref_key: "popoverBase",
          ref: w,
          trigger: v.value,
          config: z.value,
          style: { zIndex: 9999 },
          isOpen: !0,
          "data-ulu-tour-ui": "true",
          onClose: o[1] || (o[1] = (p) => n(i).stop())
        }, F.value), _({
          default: C(() => [
            f.value ? (a(), u(s(f.value), c({
              key: 0,
              step: t.value,
              tourState: n(l),
              api: n(i),
              "is-modal": !1
            }, t.value.componentProps), null, 16, ["step", "tourState", "api"])) : (a(), u(E, {
              key: 1,
              step: t.value,
              "is-modal": !1
            }, null, 8, ["step"]))
          ]),
          _: 2
        }, [
          t.value?.hideFooter ? void 0 : {
            name: "footer",
            fn: C(() => [
              (a(), u(s(x.value)))
            ]),
            key: "0"
          }
        ]), 1040, ["trigger", "config"])) : (a(), u(s(T.value), c({
          key: 1,
          modelValue: !0,
          "data-ulu-tour-ui": "true"
        }, L.value, {
          onClose: o[0] || (o[0] = (p) => n(i).stop())
        }), _({
          default: C(() => [
            f.value ? (a(), u(s(f.value), c({
              key: 0,
              step: t.value,
              tourState: n(l),
              api: n(i),
              "is-modal": !0
            }, t.value.componentProps), null, 16, ["step", "tourState", "api"])) : (a(), u(E, {
              key: 1,
              step: t.value,
              "is-modal": !0
            }, null, 8, ["step"]))
          ]),
          _: 2
        }, [
          t.value?.hideFooter ? void 0 : {
            name: "footer",
            fn: C(() => [
              (a(), u(s(x.value)))
            ]),
            key: "0"
          }
        ]), 1040)),
        t.value?.target && t.value?.highlight && d.value ? (a(), P("div", {
          key: 3,
          class: "tour-highlight-backdrop",
          style: H(I.value),
          "data-ulu-tour-ui": "true",
          onClick: o[2] || (o[2] = (p) => n(i).stop())
        }, null, 4)) : S("", !0)
      ], 64)) : S("", !0)
    ]));
  }
};
export {
  Z as default
};
