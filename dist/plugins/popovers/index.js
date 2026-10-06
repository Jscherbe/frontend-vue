import { reactive as _, markRaw as y } from "vue";
import L from "./UluTooltipDisplay.vue.js";
import P from "./UluPopover.vue.js";
import D from "./UluPopoverBase.vue.js";
import E from "./defaults.js";
const O = "uluPopoverOptions", U = "uluTooltipState", A = "ulu-global-tooltip", T = (s, f) => {
  if (s === !1 || s === null) return null;
  let i = s;
  return (typeof i != "object" || Array.isArray(i)) && (i = { content: i }), i.component && (i.component = y(i.component)), { ...f, ...i };
};
function M(s, f = {}) {
  const i = {
    plugin: { ...E.plugin, ...f.plugin || {} },
    popover: { ...E.popover, ...f.popover || {} },
    tooltip: { ...E.tooltip, ...f.tooltip || {} }
  };
  s.provide(O, i);
  const o = _({
    visible: !1,
    trigger: null,
    config: {}
  }), h = (e, n) => {
    const t = e instanceof Element;
    if (t && !n.teleportTo) {
      const r = e.closest("dialog");
      r && (n.teleportTo = r);
    }
    o.trigger && o.trigger !== e && o.trigger instanceof Element && o.trigger.removeAttribute("aria-describedby"), t && e.setAttribute("aria-describedby", A), o.trigger = e, o.config = n, o.visible = !0;
  }, u = () => {
    o.trigger instanceof Element && o.trigger.removeAttribute("aria-describedby"), o.visible = !1;
  };
  s.provide(U, {
    state: o,
    show: h,
    hide: u
  }), s.component("UluTooltipDisplay", L), s.component("UluPopover", P), s.component("UluPopoverBase", D);
  const v = /* @__PURE__ */ new WeakMap(), b = i.popover, w = i.tooltip, g = { ...b, ...w };
  s.directive(i.plugin.directiveName, {
    mounted(e, n) {
      const t = T(n.value, g);
      if (!t) return;
      let r = null;
      const l = () => {
        r || (r = setTimeout(() => {
          h(e, t);
        }, t.delay));
      }, d = () => {
        clearTimeout(r), r = null, u();
      }, { showEvents: p, hideEvents: m } = t;
      p.forEach((c) => e.addEventListener(c, l)), m.forEach((c) => e.addEventListener(c, d)), v.set(e, { show: l, hide: d, showEvents: p, hideEvents: m });
    },
    updated(e, n) {
      const t = v.get(e);
      t && (t.showEvents.forEach((a) => e.removeEventListener(a, t.show)), t.hideEvents.forEach((a) => e.removeEventListener(a, t.hide)));
      const r = T(n.value, g);
      if (!r) {
        o.trigger === e && u();
        return;
      }
      let l = null;
      const d = () => {
        l || (l = setTimeout(() => {
          h(e, r);
        }, r.delay));
      }, p = () => {
        clearTimeout(l), l = null, u();
      }, { showEvents: m, hideEvents: c } = r;
      m.forEach((a) => e.addEventListener(a, d)), c.forEach((a) => e.addEventListener(a, p)), v.set(e, { show: d, hide: p, showEvents: m, hideEvents: c }), o.visible && o.trigger === e && h(e, r);
    },
    beforeUnmount(e) {
      o.visible && o.trigger === e && u();
      const n = v.get(e);
      n && (n.showEvents.forEach((t) => e.removeEventListener(t, n.show)), n.hideEvents.forEach((t) => e.removeEventListener(t, n.hide)), v.delete(e));
    }
  });
}
export {
  O as POPOVER_OPTIONS_KEY,
  A as TOOLTIP_ID,
  U as TOOLTIP_STATE_KEY,
  P as UluPopover,
  D as UluPopoverBase,
  L as UluTooltipDisplay,
  M as default,
  T as resolveTooltipConfig
};
