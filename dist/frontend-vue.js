import { reactive as kn, inject as Ot, ref as J, computed as F, watch as _e, toRef as xu, createElementBlock as O, openBlock as b, normalizeStyle as ve, unref as z, normalizeClass as $, createCommentVNode as U, createBlock as N, resolveDynamicComponent as le, normalizeProps as He, mergeProps as $e, Fragment as ee, createTextVNode as K, toDisplayString as H, Teleport as os, createVNode as te, resolveDirective as _a, withDirectives as Kt, createElementVNode as M, renderSlot as P, withKeys as Sa, nextTick as bn, markRaw as Tt, watchEffect as is, defineAsyncComponent as wu, toRefs as _u, toValue as zn, resolveComponent as ye, withModifiers as Su, useSlots as Ca, renderList as se, TransitionGroup as Ea, withCtx as D, onMounted as $t, onBeforeUnmount as as, createSlots as Ct, isRef as Cu, hasInjectionContext as Eu, getCurrentInstance as Ou, onDeactivated as Tu, onActivated as Au, onUnmounted as ls, guardReactiveProps as Ze, h as ku, watchPostEffect as Mu, vModelText as $u, vShow as Hs, provide as Ms } from "vue";
import { useFloating as Pu, autoUpdate as Iu, inline as Lu, offset as ju, flip as Ru, shift as Bu, arrow as Uu } from "@floating-ui/vue";
import { normalizeClasses as Pi } from "@ulu/utils/templating.js";
import { preventScroll as Fu, wasClickOutside as Nu, isBrowser as zu, getScrollParent as Hu } from "@ulu/utils/browser/dom.js";
import { debounce as ni } from "@ulu/utils/performance.js";
import { useRoute as Oa, useRouter as Du, RouterLink as _n } from "vue-router";
import { Tab as Vu, TabGroup as Wu, TabList as qu, TabPanel as Ku, TabPanels as Gu } from "@headlessui/vue";
import { randomInt as Gn } from "@ulu/utils/random.js";
import { PortableText as Xu } from "@portabletext/vue";
import Yu from "gsap";
import Zu from "fuse.js";
import { urlize as Ju } from "@ulu/utils/string.js";
import { runAfterFramePaint as Ta } from "@ulu/utils/browser/performance.js";
import { arrayCreate as Qu } from "@ulu/utils/array.js";
const Ii = {
  fontAwesomeStatic: !1,
  iconComponent: null,
  iconPropResolver: (e) => ({ icon: e }),
  iconsByType: {
    danger: "fas fa-triangle-exclamation",
    warning: "fas fa-circle-exclamation",
    info: "fas fa-circle-info",
    success: "fas fa-circle-check",
    externalLink: "fas fa-arrow-up-right-from-square",
    close: "fas fa-xmark",
    remove: "fas fa-xmark",
    expand: "fas fa-plus",
    collapse: "fas fa-minus",
    resizeHorizontal: "fas fa-grip-lines-vertical",
    resizeVertical: "fas fa-grip-lines",
    resizeBoth: "fas fa-grip",
    ellipsis: "fas fa-ellipsis",
    pathSeparator: "fas fa-chevron-right",
    image: "fas fa-image",
    file: "fas fa-file",
    previous: "fas fa-chevron-left",
    next: "fas fa-chevron-right",
    dropdownExpand: "fas fa-caret-down"
  }
};
function Dw(e, t = {}) {
  const n = kn({ ...Ii }), { iconsByType: s, ...o } = t || {};
  o && Object.assign(n, o);
  const r = {
    // Methods to interact with settings
    getSettings() {
      return n;
    },
    getDefaultSettings() {
      return { ...Ii };
    },
    updateSettings(i) {
      return Object.assign(n, i);
    },
    getSetting(i) {
      if (!n.hasOwnProperty(i)) {
        console.warn(`Attempted to access non-existent setting: ${i}`);
        return;
      }
      return n[i];
    },
    updateSetting(i, a) {
      if (typeof i != "string")
        throw new Error("Expected key to be string");
      n[i] = a;
    },
    getIcon(i) {
      const a = n.iconsByType;
      if (!a[i])
        throw new Error(`Icon type "${i}" not found!`);
      return a[i];
    },
    setIcon(i, a) {
      n.iconsByType[i] = a;
    }
  };
  if (s)
    for (const [i, a] of Object.entries(s))
      r.setIcon(i, a);
  e.provide("uluCore", r), e.config.globalProperties.$uluCore = r;
}
const ec = {
  uluCore: "Core",
  uluIsMobile: "Breakpoints",
  uluBreakpointActive: "Breakpoints",
  uluBreakpointDirection: "Breakpoints",
  uluBreakpointManager: "Breakpoints",
  uluModals: "Modals",
  uluToast: "Toast",
  uluPopoverOptions: "Popovers",
  uluTooltipState: "Popovers"
}, Li = {};
function gt(e) {
  const t = Ot(e, Li);
  if (t === Li) {
    const n = ec[e] || "", s = n ? ` from the '${n}' plugin` : "", o = n ? "Please install missing plugin." : "";
    throw new Error(`Required inject: '${e}'${s} was not provided. ${o}`);
  }
  return t;
}
function Aa(e, t, n) {
  const s = J(null), o = J([]), r = F(() => n.value?.placement), {
    floatingStyles: i,
    placement: a,
    middlewareData: l,
    update: u,
    isPositioned: c
  } = Pu(e, t, {
    placement: r,
    whileElementsMounted: Iu,
    middleware: o
  });
  _e(
    [n, s],
    ([h, m]) => {
      const p = [];
      h && (h.inline && p.push(Lu()), h.offset && p.push(ju(h.offset)), p.push(Ru()), p.push(Bu()), h.arrow && m && p.push(Uu({ element: m })), o.value = p);
    },
    { immediate: !0, deep: !0 }
  );
  const d = F(() => {
    const h = l.value?.arrow;
    return h ? {
      position: "absolute",
      left: h?.x != null ? `${h.x}px` : "",
      top: h?.y != null ? `${h.y}px` : ""
    } : null;
  });
  _e(n, (h) => {
    h && h.onReady && h.onReady({ update: u, isPositioned: c });
  });
  const f = F(() => n.value?.strategy === "fixed");
  return {
    floatingStyles: i,
    placement: a,
    middlewareData: l,
    update: u,
    isPositioned: c,
    arrowStyles: d,
    contentArrow: s,
    isFixedStrategy: f
  };
}
const tc = ["id", "data-placement"], nc = ["innerHTML"], sc = {
  key: 1,
  class: "popover__inner"
}, rc = {
  __name: "UluTooltipPopover",
  props: {
    config: Object,
    trigger: {
      type: Object,
      default: null
    }
  },
  setup(e) {
    const t = e, n = J(null), s = F(() => t.config), {
      floatingStyles: o,
      placement: r,
      arrowStyles: i,
      contentArrow: a,
      isFixedStrategy: l
    } = Aa(xu(t, "trigger"), n, s);
    return (u, c) => (b(), O("span", {
      class: $(["popover popover--tooltip is-active", [
        {
          "popover--fixed": z(l)
        },
        s.value.class
      ]]),
      ref_key: "content",
      ref: n,
      id: z(Ma),
      "data-placement": z(r),
      style: ve(z(o))
    }, [
      s.value.isHtml ? (b(), O("span", {
        key: 0,
        class: "popover__inner",
        innerHTML: s.value.content
      }, null, 8, nc)) : (b(), O("span", sc, [
        s.value.component ? (b(), N(le(s.value.component), He($e({ key: 0 }, s.value.componentProps)), null, 16)) : (b(), O(ee, { key: 1 }, [
          K(H(s.value.content), 1)
        ], 64))
      ])),
      s.value.arrow ? (b(), O("span", {
        key: 2,
        class: "popover__arrow",
        ref_key: "contentArrow",
        ref: a,
        style: ve(z(i))
      }, null, 4)) : U("", !0)
    ], 14, tc));
  }
}, oc = {
  __name: "UluTooltipDisplay",
  setup(e) {
    const t = gt(ds);
    return (n, s) => z(t)?.state.visible ? (b(), N(os, {
      key: 0,
      to: z(t).state.config.teleportTo || "body"
    }, [
      te(rc, {
        trigger: z(t).state.trigger,
        config: z(t).state.config
      }, null, 8, ["trigger", "config"])
    ], 8, ["to"])) : U("", !0);
  }
}, Wt = {
  /**
   * Default Plugin Options
   * @type {Object}
   */
  plugin: {
    /**
     * The directive name to use (default 'ulu-tooltip' = <el v-ulu-tooltip="'hello world'">)
     * @type {String}
     */
    directiveName: "ulu-tooltip"
  },
  /**
   * Default Popover Options
   */
  popover: {
    /**
    * Include the floating-ui inline middleware (for inline elements that wrap)
    * @type {Boolean}
    */
    inline: !0,
    /**
    * Delay when using the directive
    * @type {Number}
    */
    delay: 500,
    /**
    * Placement for floating-ui)
    * @type {String}
    */
    placement: "bottom",
    /**
    * Strategy for floating-ui (strategy)
    * @type {String}
    */
    strategy: "absolute",
    /**
    * Include the floating-ui offset middleware, 
    * @type {Number}
    */
    offset: 16,
    /**
    * Include the floating-ui arrow middleware
    * @type {Boolean}
    */
    arrow: !0
  },
  /**
   * Default Tooltip Options
   * @type {Object}
   */
  tooltip: {
    /**
     * The element that the tooltip should be rendered within
     * - Default bottom of the body if this is unset
     * - Doesn't need to be inline for accessibility since tooltips are just an enhancement
     *   content displayed within them should be hidden for assistive devices, 
     *   they are not visible to assistive devices
     * @type {String}
     */
    teleportTo: null,
    /**
     * Optional class binding for tooltip element
     * @type {String|Object|Array}
     */
    class: null,
    /**
     * Events to show tooltip on
     * @type {Array.<String>}
     */
    showEvents: ["pointerenter", "focus"],
    /**
     * Events to hide tooltip on
     * @type {Array.<String>}
     */
    hideEvents: ["pointerleave", "blur"],
    /**
     * Content should be output as plain HTML (ie v-html)
     * - Note don't include interactive elements in tooltips!
     * @type {Boolean}
     */
    isHtml: !1,
    /**
     * Element for floating ui to use as reference (can be virtual) or vue ref to element
     * @type {Node|Object}
     */
    trigger: null,
    /**
     * The content of the tooltip (String, Reactive ref or HTML [see isHtml option])
     * @type {String|Object}
     */
    content: null,
    /**
     * Delay when using the directive
     * @type {Number}
     */
    delay: 500,
    /**
     * Callback that is passed { update, isPositioned } for manual things
     */
    onReady: null,
    /**
     * Use a specific component inside tooltip
     */
    component: null,
    /**
     * Props to be passed to component (ie. v-bind="componentProps")
     */
    componentProps: {}
  }
};
function ka(e) {
  if (e) {
    if (e instanceof HTMLElement)
      return e;
    if (typeof e == "object" && "$el" in e)
      return e.$el;
  }
}
let ic = 0;
function ke(e = "ulu-id") {
  const t = `${e}-${++ic}`;
  return typeof document < "u" && document.getElementById(t) ? ke(e) : t;
}
const ac = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  newId: ke,
  refToElement: ka
}, Symbol.toStringTag, { value: "Module" })), lc = ["id", "disabled", "aria-expanded", "aria-controls", "aria-label"], uc = ["aria-labelledby", "id", "data-placement"], cc = { class: "popover__inner" }, dc = {
  key: 0,
  class: "popover__footer"
}, us = {
  __name: "UluPopover",
  props: {
    triggerText: String,
    triggerAlt: String,
    disabled: Boolean,
    tooltip: String,
    size: String,
    noPadding: Boolean,
    config: {
      type: Object,
      default: () => ({})
    },
    startOpen: Boolean,
    activeClass: {
      type: String,
      default: "is-active"
    },
    classes: {
      type: Object,
      default: () => ({})
    },
    clickOutsideCloses: {
      type: Boolean,
      default: !0
    },
    directFocus: {
      type: Function,
      default: ({ isOpen: e, content: t }) => {
        e && t.focus({ preventScroll: !0 });
      }
    }
  },
  emits: ["toggle"],
  setup(e, { emit: t }) {
    const n = t, s = e, o = ke(), r = ke(), i = gt(cs), a = i ? i.popover : Wt.popover, l = F(() => ({ ...a, ...s.config })), u = J(s.startOpen || !1), c = J(null), d = J(null), {
      floatingStyles: f,
      placement: h,
      update: m,
      arrowStyles: p,
      contentArrow: g,
      isFixedStrategy: _
    } = Aa(c, d, l), x = () => {
      y(!u.value);
    }, y = (k) => {
      u.value = k;
      const C = {
        trigger: z(c),
        content: z(d),
        isOpen: z(u)
      }, v = { isOpen: C.isOpen };
      bn(() => {
        u.value ? (m(), window.setTimeout(() => {
          T(), s.directFocus(C), n("toggle", v);
        }, 0)) : (L(), s.directFocus(C), n("toggle", v));
      });
    };
    let w;
    const T = () => {
      s.clickOutsideCloses && (w && L(), w = (k) => {
        d.value && !d.value.contains(k.target) && y(!1);
      }, document.addEventListener("click", w));
    }, L = () => {
      w && (document.removeEventListener("click", w), w = null);
    }, B = () => y(!1);
    return (k, C) => {
      const v = _a("ulu-tooltip");
      return b(), O(ee, null, [
        Kt((b(), O("button", {
          type: "button",
          ref_key: "trigger",
          ref: c,
          onClick: x,
          id: z(r),
          disabled: e.disabled,
          class: $([
            { [e.activeClass]: u.value },
            e.classes.trigger
          ]),
          "aria-expanded": u.value ? "true" : "false",
          "aria-controls": z(o),
          "aria-label": e.triggerAlt
        }, [
          P(k.$slots, "trigger", {
            isOpen: u.value,
            close: B
          }, () => [
            K(H(e.triggerText), 1)
          ])
        ], 10, lc)), [
          [v, e.tooltip ? e.tooltip : null]
        ]),
        M("span", {
          class: $(["popover", [
            e.size ? `popover--${e.size}` : "",
            {
              "popover--no-padding": e.noPadding,
              "popover--fixed": z(_),
              "is-active": u.value
            },
            e.classes.content
          ]]),
          ref_key: "content",
          ref: d,
          "aria-labelledby": z(r),
          id: z(o),
          style: ve(z(f)),
          "data-placement": z(h),
          onKeydown: C[0] || (C[0] = Sa((S) => y(!1), ["esc"])),
          tabindex: "-1"
        }, [
          M("span", cc, [
            P(k.$slots, "default", {
              isOpen: u.value,
              toggle: x,
              close: B
            })
          ]),
          k.$slots.footer ? (b(), O("span", dc, [
            P(k.$slots, "footer", { close: B })
          ])) : U("", !0),
          l.value.arrow ? (b(), O("span", {
            key: 1,
            class: "popover__arrow",
            ref_key: "contentArrow",
            ref: g,
            style: ve(z(p)),
            "data-ulu-popover-arrow": ""
          }, null, 4)) : U("", !0)
        ], 46, uc)
      ], 64);
    };
  }
};
function Vw() {
  const e = gt(ds), t = gt(cs), n = { ...t.popover, ...t.tooltip };
  return {
    showTooltip: (o, r) => {
      const i = Ds(r, n);
      i && e.show(o, i);
    },
    hideTooltip: e.hide,
    tooltipState: e.state
  };
}
function Ww(e) {
  const t = gt(ds), n = gt(cs);
  e.content || console.warn("Missing content for 'useTooltipFollow' tooltip", e);
  let s;
  const o = J(0), r = J(0), i = F(() => ({
    getBoundingClientRect() {
      return {
        width: 0,
        height: 0,
        x: o.value,
        y: r.value,
        top: r.value,
        left: o.value,
        right: o.value,
        bottom: r.value
      };
    }
  })), a = n ? n.popover : Wt.popover, l = n ? n.tooltip : Wt.tooltip, c = {
    ...{ ...a, ...l },
    content: e.content,
    inline: !1,
    // Following cursor is never inline
    onReady({ update: d }) {
      s = d;
    }
  };
  return {
    x: o,
    y: r,
    show() {
      t.show(i.value, c);
    },
    hide() {
      t.state.trigger === i.value && t.hide();
    },
    update(d) {
      o.value = d.x, r.value = d.y, s && s();
    }
  };
}
const cs = "uluPopoverOptions", ds = "uluTooltipState", Ma = "ulu-global-tooltip", Ds = (e, t) => {
  if (e === !1 || e === null) return null;
  let n = e;
  return (typeof n != "object" || Array.isArray(n)) && (n = { content: n }), n.component && (n.component = Tt(n.component)), { ...t, ...n };
};
function qw(e, t = {}) {
  const n = {
    plugin: { ...Wt.plugin, ...t.plugin || {} },
    popover: { ...Wt.popover, ...t.popover || {} },
    tooltip: { ...Wt.tooltip, ...t.tooltip || {} }
  };
  e.provide(cs, n);
  const s = kn({
    visible: !1,
    trigger: null,
    config: {}
  }), o = (c, d) => {
    if (c && !d.teleportTo) {
      const f = c.closest("dialog");
      f && (d.teleportTo = f);
    }
    s.trigger && s.trigger !== c && s.trigger?.removeAttribute && s.trigger.removeAttribute("aria-describedby"), c?.setAttribute && c.setAttribute("aria-describedby", Ma), s.trigger = c, s.config = d, s.visible = !0;
  }, r = () => {
    s.trigger?.removeAttribute && s.trigger.removeAttribute("aria-describedby"), s.visible = !1;
  };
  e.provide(ds, {
    state: s,
    show: o,
    hide: r
  }), e.component("UluTooltipDisplay", oc), e.component("UluPopover", us);
  const i = /* @__PURE__ */ new WeakMap(), a = n.popover, l = n.tooltip, u = { ...a, ...l };
  e.directive(n.plugin.directiveName, {
    mounted(c, d) {
      const f = Ds(d.value, u);
      if (!f) return;
      let h = null;
      const m = () => {
        h || (h = setTimeout(() => {
          o(c, f);
        }, f.delay));
      }, p = () => {
        clearTimeout(h), h = null, r();
      }, { showEvents: g, hideEvents: _ } = f;
      g.forEach((x) => c.addEventListener(x, m)), _.forEach((x) => c.addEventListener(x, p)), i.set(c, { show: m, hide: p, showEvents: g, hideEvents: _ });
    },
    updated(c, d) {
      const f = i.get(c);
      f && (f.showEvents.forEach((y) => c.removeEventListener(y, f.show)), f.hideEvents.forEach((y) => c.removeEventListener(y, f.hide)));
      const h = Ds(d.value, u);
      if (!h) {
        s.trigger === c && r();
        return;
      }
      let m = null;
      const p = () => {
        m || (m = setTimeout(() => {
          o(c, h);
        }, h.delay));
      }, g = () => {
        clearTimeout(m), m = null, r();
      }, { showEvents: _, hideEvents: x } = h;
      _.forEach((y) => c.addEventListener(y, p)), x.forEach((y) => c.addEventListener(y, g)), i.set(c, { show: p, hide: g, showEvents: _, hideEvents: x }), s.visible && s.trigger === c && o(c, h);
    },
    beforeUnmount(c) {
      s.visible && s.trigger === c && r();
      const d = i.get(c);
      d && (d.showEvents.forEach((f) => c.removeEventListener(f, d.show)), d.hideEvents.forEach((f) => c.removeEventListener(f, d.hide)), i.delete(c));
    }
  });
}
const ce = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [s, o] of t)
    n[s] = o;
  return n;
}, fc = {
  name: "UluModalsDisplay",
  emits: [
    "modal-unmount",
    "modal-mount"
  ],
  data() {
    return {
      open: !1
    };
  },
  computed: {
    currentModal() {
      return this.$uluModalsState.data?.active;
    },
    currentProps() {
      return this.$uluModalsState.data?.activeProps;
    }
  },
  watch: {
    // Watch for changes in the global state (e.g., when $uluModals.open() is called)
    currentModal(e) {
      e ? this.open = !0 : this.open = !1;
    },
    // Watch for changes in the local state (e.g., when the modal emits 'update:modelValue')
    open(e) {
      !e && this.currentModal && this.$uluModals.close();
    }
  },
  methods: {
    modalMounted() {
      this.$emit("modal-mount", { modal: this.currentModal });
    },
    modalUnmounted() {
      this.$nextTick(() => {
        this.$emit("modal-unmount");
      });
    }
  }
};
function hc(e, t, n, s, o, r) {
  return r.currentModal ? (b(), N(le(r.currentModal.component), $e({ key: 0 }, r.currentProps, {
    modelValue: o.open,
    "onUpdate:modelValue": t[0] || (t[0] = (i) => o.open = i),
    onVnodeMounted: r.modalMounted,
    onVnodeUnmounted: r.modalUnmounted
  }), null, 16, ["modelValue", "onVnodeMounted", "onVnodeUnmounted"])) : U("", !0);
}
const mc = /* @__PURE__ */ ce(fc, [["render", hc]]);
function pc() {
  return { getIconProps: (n) => n ? typeof n == "object" && !Array.isArray(n) ? n : { icon: n } : null, getClassesFromDefinition: (n) => {
    if (!n)
      return null;
    if (typeof n == "string")
      return n;
    if (Array.isArray(n))
      return n.length >= 2 ? `${n[0]} fa-${n[1]}` : n.join(" ");
    if (typeof n == "object" && n.icon) {
      if (typeof n.icon == "string")
        return n.icon;
      if (Array.isArray(n.icon))
        return n.icon.length >= 2 ? `${n.icon[0]} fa-${n.icon[1]}` : n.icon.join(" ");
    }
    return console.warn("useIcon: Unable to parse definition for static FontAwesome classes:", n), null;
  } };
}
const pe = {
  __name: "UluIcon",
  props: {
    /**
     * Icon definition can be string (fa classes), or array or object (any prop format FaIcon accepts)
     * - This will override the 'type' prop if both are provided
     */
    icon: [String, Array, Object, Boolean],
    /**
     * Whether the icon should use flow inline
     */
    spaced: Boolean
  },
  setup(e) {
    const t = Ot("uluCore"), n = J(null), { getIconProps: s, getClassesFromDefinition: o } = pc();
    let r;
    const i = e, a = F(() => t.getSetting("fontAwesomeStatic")), l = F(() => t.getSetting("iconComponent")), u = F(() => t.getSetting("iconPropResolver")), c = F(() => {
      const { icon: p } = i;
      if (typeof p == "string" && p.startsWith("type:"))
        try {
          const g = p.substring(5);
          return t.getIcon(g);
        } catch (g) {
          return console.warn(g), null;
        }
      return p;
    }), d = F(() => !l.value || !c.value ? null : u.value(c.value)), f = F(() => s(c.value)), h = F(() => o(c.value)), m = F(() => ({
      "flow-inline": i.spaced
    }));
    return is(async () => {
      if (!a.value && c.value) {
        if (n.value === null)
          if (r)
            n.value = Tt(r.FontAwesomeIcon);
          else {
            const p = wu(async () => {
              const g = await import("@fortawesome/vue-fontawesome");
              return r = g, g.FontAwesomeIcon;
            });
            n.value = Tt(p);
          }
      } else
        n.value = null;
    }), (p, g) => l.value ? (b(), N(le(l.value), $e({ key: 0 }, d.value, { class: m.value }), null, 16, ["class"])) : !a.value && n.value && c.value ? (b(), N(le(n.value), $e({ key: 1 }, f.value, { class: m.value }), null, 16, ["class"])) : a.value && c.value ? (b(), O("span", {
      key: 2,
      class: $([h.value, m.value]),
      "aria-hidden": "true"
    }, null, 2)) : U("", !0);
  }
};
function We({ props: e, baseClass: t, internal: n = {} }) {
  const { modifiers: s } = _u(e);
  return { resolvedModifiers: F(() => {
    const r = zn(t), i = Pi(zn(s)), a = Pi(zn(n));
    if (!r)
      return console.warn("useModifiers: Missing 'baseClass' argument, modifiers will not be applied."), "";
    const l = /* @__PURE__ */ new Set([...a, ...i]);
    return Array.from(l).map((u) => `${r}--${u}`);
  }) };
}
const dt = Math.min, Je = Math.max, Xn = Math.round, Fn = Math.floor, Qe = (e) => ({
  x: e,
  y: e
}), vc = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, gc = {
  start: "end",
  end: "start"
};
function Vs(e, t, n) {
  return Je(e, dt(t, n));
}
function en(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function ft(e) {
  return e.split("-")[0];
}
function Mn(e) {
  return e.split("-")[1];
}
function $a(e) {
  return e === "x" ? "y" : "x";
}
function si(e) {
  return e === "y" ? "height" : "width";
}
const bc = /* @__PURE__ */ new Set(["top", "bottom"]);
function ut(e) {
  return bc.has(ft(e)) ? "y" : "x";
}
function ri(e) {
  return $a(ut(e));
}
function yc(e, t, n) {
  n === void 0 && (n = !1);
  const s = Mn(e), o = ri(e), r = si(o);
  let i = o === "x" ? s === (n ? "end" : "start") ? "right" : "left" : s === "start" ? "bottom" : "top";
  return t.reference[r] > t.floating[r] && (i = Yn(i)), [i, Yn(i)];
}
function xc(e) {
  const t = Yn(e);
  return [Ws(e), t, Ws(t)];
}
function Ws(e) {
  return e.replace(/start|end/g, (t) => gc[t]);
}
const ji = ["left", "right"], Ri = ["right", "left"], wc = ["top", "bottom"], _c = ["bottom", "top"];
function Sc(e, t, n) {
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? Ri : ji : t ? ji : Ri;
    case "left":
    case "right":
      return t ? wc : _c;
    default:
      return [];
  }
}
function Cc(e, t, n, s) {
  const o = Mn(e);
  let r = Sc(ft(e), n === "start", s);
  return o && (r = r.map((i) => i + "-" + o), t && (r = r.concat(r.map(Ws)))), r;
}
function Yn(e) {
  return e.replace(/left|right|bottom|top/g, (t) => vc[t]);
}
function Ec(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function oi(e) {
  return typeof e != "number" ? Ec(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function Gt(e) {
  const {
    x: t,
    y: n,
    width: s,
    height: o
  } = e;
  return {
    width: s,
    height: o,
    top: n,
    left: t,
    right: t + s,
    bottom: n + o,
    x: t,
    y: n
  };
}
function Bi(e, t, n) {
  let {
    reference: s,
    floating: o
  } = e;
  const r = ut(t), i = ri(t), a = si(i), l = ft(t), u = r === "y", c = s.x + s.width / 2 - o.width / 2, d = s.y + s.height / 2 - o.height / 2, f = s[a] / 2 - o[a] / 2;
  let h;
  switch (l) {
    case "top":
      h = {
        x: c,
        y: s.y - o.height
      };
      break;
    case "bottom":
      h = {
        x: c,
        y: s.y + s.height
      };
      break;
    case "right":
      h = {
        x: s.x + s.width,
        y: d
      };
      break;
    case "left":
      h = {
        x: s.x - o.width,
        y: d
      };
      break;
    default:
      h = {
        x: s.x,
        y: s.y
      };
  }
  switch (Mn(t)) {
    case "start":
      h[i] -= f * (n && u ? -1 : 1);
      break;
    case "end":
      h[i] += f * (n && u ? -1 : 1);
      break;
  }
  return h;
}
const Oc = async (e, t, n) => {
  const {
    placement: s = "bottom",
    strategy: o = "absolute",
    middleware: r = [],
    platform: i
  } = n, a = r.filter(Boolean), l = await (i.isRTL == null ? void 0 : i.isRTL(t));
  let u = await i.getElementRects({
    reference: e,
    floating: t,
    strategy: o
  }), {
    x: c,
    y: d
  } = Bi(u, s, l), f = s, h = {}, m = 0;
  for (let p = 0; p < a.length; p++) {
    const {
      name: g,
      fn: _
    } = a[p], {
      x,
      y,
      data: w,
      reset: T
    } = await _({
      x: c,
      y: d,
      initialPlacement: s,
      placement: f,
      strategy: o,
      middlewareData: h,
      rects: u,
      platform: i,
      elements: {
        reference: e,
        floating: t
      }
    });
    c = x ?? c, d = y ?? d, h = {
      ...h,
      [g]: {
        ...h[g],
        ...w
      }
    }, T && m <= 50 && (m++, typeof T == "object" && (T.placement && (f = T.placement), T.rects && (u = T.rects === !0 ? await i.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : T.rects), {
      x: c,
      y: d
    } = Bi(u, f, l)), p = -1);
  }
  return {
    x: c,
    y: d,
    placement: f,
    strategy: o,
    middlewareData: h
  };
};
async function Pa(e, t) {
  var n;
  t === void 0 && (t = {});
  const {
    x: s,
    y: o,
    platform: r,
    rects: i,
    elements: a,
    strategy: l
  } = e, {
    boundary: u = "clippingAncestors",
    rootBoundary: c = "viewport",
    elementContext: d = "floating",
    altBoundary: f = !1,
    padding: h = 0
  } = en(t, e), m = oi(h), g = a[f ? d === "floating" ? "reference" : "floating" : d], _ = Gt(await r.getClippingRect({
    element: (n = await (r.isElement == null ? void 0 : r.isElement(g))) == null || n ? g : g.contextElement || await (r.getDocumentElement == null ? void 0 : r.getDocumentElement(a.floating)),
    boundary: u,
    rootBoundary: c,
    strategy: l
  })), x = d === "floating" ? {
    x: s,
    y: o,
    width: i.floating.width,
    height: i.floating.height
  } : i.reference, y = await (r.getOffsetParent == null ? void 0 : r.getOffsetParent(a.floating)), w = await (r.isElement == null ? void 0 : r.isElement(y)) ? await (r.getScale == null ? void 0 : r.getScale(y)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, T = Gt(r.convertOffsetParentRelativeRectToViewportRelativeRect ? await r.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: a,
    rect: x,
    offsetParent: y,
    strategy: l
  }) : x);
  return {
    top: (_.top - T.top + m.top) / w.y,
    bottom: (T.bottom - _.bottom + m.bottom) / w.y,
    left: (_.left - T.left + m.left) / w.x,
    right: (T.right - _.right + m.right) / w.x
  };
}
const Tc = (e) => ({
  name: "arrow",
  options: e,
  async fn(t) {
    const {
      x: n,
      y: s,
      placement: o,
      rects: r,
      platform: i,
      elements: a,
      middlewareData: l
    } = t, {
      element: u,
      padding: c = 0
    } = en(e, t) || {};
    if (u == null)
      return {};
    const d = oi(c), f = {
      x: n,
      y: s
    }, h = ri(o), m = si(h), p = await i.getDimensions(u), g = h === "y", _ = g ? "top" : "left", x = g ? "bottom" : "right", y = g ? "clientHeight" : "clientWidth", w = r.reference[m] + r.reference[h] - f[h] - r.floating[m], T = f[h] - r.reference[h], L = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(u));
    let B = L ? L[y] : 0;
    (!B || !await (i.isElement == null ? void 0 : i.isElement(L))) && (B = a.floating[y] || r.floating[m]);
    const k = w / 2 - T / 2, C = B / 2 - p[m] / 2 - 1, v = dt(d[_], C), S = dt(d[x], C), E = v, I = B - p[m] - S, R = B / 2 - p[m] / 2 + k, j = Vs(E, R, I), q = !l.arrow && Mn(o) != null && R !== j && r.reference[m] / 2 - (R < E ? v : S) - p[m] / 2 < 0, Y = q ? R < E ? R - E : R - I : 0;
    return {
      [h]: f[h] + Y,
      data: {
        [h]: j,
        centerOffset: R - j - Y,
        ...q && {
          alignmentOffset: Y
        }
      },
      reset: q
    };
  }
}), Ac = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var n, s;
      const {
        placement: o,
        middlewareData: r,
        rects: i,
        initialPlacement: a,
        platform: l,
        elements: u
      } = t, {
        mainAxis: c = !0,
        crossAxis: d = !0,
        fallbackPlacements: f,
        fallbackStrategy: h = "bestFit",
        fallbackAxisSideDirection: m = "none",
        flipAlignment: p = !0,
        ...g
      } = en(e, t);
      if ((n = r.arrow) != null && n.alignmentOffset)
        return {};
      const _ = ft(o), x = ut(a), y = ft(a) === a, w = await (l.isRTL == null ? void 0 : l.isRTL(u.floating)), T = f || (y || !p ? [Yn(a)] : xc(a)), L = m !== "none";
      !f && L && T.push(...Cc(a, p, m, w));
      const B = [a, ...T], k = await Pa(t, g), C = [];
      let v = ((s = r.flip) == null ? void 0 : s.overflows) || [];
      if (c && C.push(k[_]), d) {
        const R = yc(o, i, w);
        C.push(k[R[0]], k[R[1]]);
      }
      if (v = [...v, {
        placement: o,
        overflows: C
      }], !C.every((R) => R <= 0)) {
        var S, E;
        const R = (((S = r.flip) == null ? void 0 : S.index) || 0) + 1, j = B[R];
        if (j && (!(d === "alignment" ? x !== ut(j) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        v.every((X) => ut(X.placement) === x ? X.overflows[0] > 0 : !0)))
          return {
            data: {
              index: R,
              overflows: v
            },
            reset: {
              placement: j
            }
          };
        let q = (E = v.filter((Y) => Y.overflows[0] <= 0).sort((Y, X) => Y.overflows[1] - X.overflows[1])[0]) == null ? void 0 : E.placement;
        if (!q)
          switch (h) {
            case "bestFit": {
              var I;
              const Y = (I = v.filter((X) => {
                if (L) {
                  const G = ut(X.placement);
                  return G === x || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  G === "y";
                }
                return !0;
              }).map((X) => [X.placement, X.overflows.filter((G) => G > 0).reduce((G, Q) => G + Q, 0)]).sort((X, G) => X[1] - G[1])[0]) == null ? void 0 : I[0];
              Y && (q = Y);
              break;
            }
            case "initialPlacement":
              q = a;
              break;
          }
        if (o !== q)
          return {
            reset: {
              placement: q
            }
          };
      }
      return {};
    }
  };
};
function Ia(e) {
  const t = dt(...e.map((r) => r.left)), n = dt(...e.map((r) => r.top)), s = Je(...e.map((r) => r.right)), o = Je(...e.map((r) => r.bottom));
  return {
    x: t,
    y: n,
    width: s - t,
    height: o - n
  };
}
function kc(e) {
  const t = e.slice().sort((o, r) => o.y - r.y), n = [];
  let s = null;
  for (let o = 0; o < t.length; o++) {
    const r = t[o];
    !s || r.y - s.y > s.height / 2 ? n.push([r]) : n[n.length - 1].push(r), s = r;
  }
  return n.map((o) => Gt(Ia(o)));
}
const Mc = function(e) {
  return e === void 0 && (e = {}), {
    name: "inline",
    options: e,
    async fn(t) {
      const {
        placement: n,
        elements: s,
        rects: o,
        platform: r,
        strategy: i
      } = t, {
        padding: a = 2,
        x: l,
        y: u
      } = en(e, t), c = Array.from(await (r.getClientRects == null ? void 0 : r.getClientRects(s.reference)) || []), d = kc(c), f = Gt(Ia(c)), h = oi(a);
      function m() {
        if (d.length === 2 && d[0].left > d[1].right && l != null && u != null)
          return d.find((g) => l > g.left - h.left && l < g.right + h.right && u > g.top - h.top && u < g.bottom + h.bottom) || f;
        if (d.length >= 2) {
          if (ut(n) === "y") {
            const v = d[0], S = d[d.length - 1], E = ft(n) === "top", I = v.top, R = S.bottom, j = E ? v.left : S.left, q = E ? v.right : S.right, Y = q - j, X = R - I;
            return {
              top: I,
              bottom: R,
              left: j,
              right: q,
              width: Y,
              height: X,
              x: j,
              y: I
            };
          }
          const g = ft(n) === "left", _ = Je(...d.map((v) => v.right)), x = dt(...d.map((v) => v.left)), y = d.filter((v) => g ? v.left === x : v.right === _), w = y[0].top, T = y[y.length - 1].bottom, L = x, B = _, k = B - L, C = T - w;
          return {
            top: w,
            bottom: T,
            left: L,
            right: B,
            width: k,
            height: C,
            x: L,
            y: w
          };
        }
        return f;
      }
      const p = await r.getElementRects({
        reference: {
          getBoundingClientRect: m
        },
        floating: s.floating,
        strategy: i
      });
      return o.reference.x !== p.reference.x || o.reference.y !== p.reference.y || o.reference.width !== p.reference.width || o.reference.height !== p.reference.height ? {
        reset: {
          rects: p
        }
      } : {};
    }
  };
}, $c = /* @__PURE__ */ new Set(["left", "top"]);
async function Pc(e, t) {
  const {
    placement: n,
    platform: s,
    elements: o
  } = e, r = await (s.isRTL == null ? void 0 : s.isRTL(o.floating)), i = ft(n), a = Mn(n), l = ut(n) === "y", u = $c.has(i) ? -1 : 1, c = r && l ? -1 : 1, d = en(t, e);
  let {
    mainAxis: f,
    crossAxis: h,
    alignmentAxis: m
  } = typeof d == "number" ? {
    mainAxis: d,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: d.mainAxis || 0,
    crossAxis: d.crossAxis || 0,
    alignmentAxis: d.alignmentAxis
  };
  return a && typeof m == "number" && (h = a === "end" ? m * -1 : m), l ? {
    x: h * c,
    y: f * u
  } : {
    x: f * u,
    y: h * c
  };
}
const Ic = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      var n, s;
      const {
        x: o,
        y: r,
        placement: i,
        middlewareData: a
      } = t, l = await Pc(t, e);
      return i === ((n = a.offset) == null ? void 0 : n.placement) && (s = a.arrow) != null && s.alignmentOffset ? {} : {
        x: o + l.x,
        y: r + l.y,
        data: {
          ...l,
          placement: i
        }
      };
    }
  };
}, Lc = function(e) {
  return e === void 0 && (e = {}), {
    name: "shift",
    options: e,
    async fn(t) {
      const {
        x: n,
        y: s,
        placement: o
      } = t, {
        mainAxis: r = !0,
        crossAxis: i = !1,
        limiter: a = {
          fn: (g) => {
            let {
              x: _,
              y: x
            } = g;
            return {
              x: _,
              y: x
            };
          }
        },
        ...l
      } = en(e, t), u = {
        x: n,
        y: s
      }, c = await Pa(t, l), d = ut(ft(o)), f = $a(d);
      let h = u[f], m = u[d];
      if (r) {
        const g = f === "y" ? "top" : "left", _ = f === "y" ? "bottom" : "right", x = h + c[g], y = h - c[_];
        h = Vs(x, h, y);
      }
      if (i) {
        const g = d === "y" ? "top" : "left", _ = d === "y" ? "bottom" : "right", x = m + c[g], y = m - c[_];
        m = Vs(x, m, y);
      }
      const p = a.fn({
        ...t,
        [f]: h,
        [d]: m
      });
      return {
        ...p,
        data: {
          x: p.x - n,
          y: p.y - s,
          enabled: {
            [f]: r,
            [d]: i
          }
        }
      };
    }
  };
};
function fs() {
  return typeof window < "u";
}
function tn(e) {
  return La(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Be(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function tt(e) {
  var t;
  return (t = (La(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function La(e) {
  return fs() ? e instanceof Node || e instanceof Be(e).Node : !1;
}
function De(e) {
  return fs() ? e instanceof Element || e instanceof Be(e).Element : !1;
}
function et(e) {
  return fs() ? e instanceof HTMLElement || e instanceof Be(e).HTMLElement : !1;
}
function Ui(e) {
  return !fs() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Be(e).ShadowRoot;
}
const jc = /* @__PURE__ */ new Set(["inline", "contents"]);
function $n(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: s,
    display: o
  } = Ve(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + s + n) && !jc.has(o);
}
const Rc = /* @__PURE__ */ new Set(["table", "td", "th"]);
function Bc(e) {
  return Rc.has(tn(e));
}
const Uc = [":popover-open", ":modal"];
function hs(e) {
  return Uc.some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
const Fc = ["transform", "translate", "scale", "rotate", "perspective"], Nc = ["transform", "translate", "scale", "rotate", "perspective", "filter"], zc = ["paint", "layout", "strict", "content"];
function ii(e) {
  const t = ai(), n = De(e) ? Ve(e) : e;
  return Fc.some((s) => n[s] ? n[s] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || Nc.some((s) => (n.willChange || "").includes(s)) || zc.some((s) => (n.contain || "").includes(s));
}
function Hc(e) {
  let t = bt(e);
  for (; et(t) && !Xt(t); ) {
    if (ii(t))
      return t;
    if (hs(t))
      return null;
    t = bt(t);
  }
  return null;
}
function ai() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
const Dc = /* @__PURE__ */ new Set(["html", "body", "#document"]);
function Xt(e) {
  return Dc.has(tn(e));
}
function Ve(e) {
  return Be(e).getComputedStyle(e);
}
function ms(e) {
  return De(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function bt(e) {
  if (tn(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    Ui(e) && e.host || // Fallback.
    tt(e)
  );
  return Ui(t) ? t.host : t;
}
function ja(e) {
  const t = bt(e);
  return Xt(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : et(t) && $n(t) ? t : ja(t);
}
function Sn(e, t, n) {
  var s;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const o = ja(e), r = o === ((s = e.ownerDocument) == null ? void 0 : s.body), i = Be(o);
  if (r) {
    const a = qs(i);
    return t.concat(i, i.visualViewport || [], $n(o) ? o : [], a && n ? Sn(a) : []);
  }
  return t.concat(o, Sn(o, [], n));
}
function qs(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function Ra(e) {
  const t = Ve(e);
  let n = parseFloat(t.width) || 0, s = parseFloat(t.height) || 0;
  const o = et(e), r = o ? e.offsetWidth : n, i = o ? e.offsetHeight : s, a = Xn(n) !== r || Xn(s) !== i;
  return a && (n = r, s = i), {
    width: n,
    height: s,
    $: a
  };
}
function li(e) {
  return De(e) ? e : e.contextElement;
}
function qt(e) {
  const t = li(e);
  if (!et(t))
    return Qe(1);
  const n = t.getBoundingClientRect(), {
    width: s,
    height: o,
    $: r
  } = Ra(t);
  let i = (r ? Xn(n.width) : n.width) / s, a = (r ? Xn(n.height) : n.height) / o;
  return (!i || !Number.isFinite(i)) && (i = 1), (!a || !Number.isFinite(a)) && (a = 1), {
    x: i,
    y: a
  };
}
const Vc = /* @__PURE__ */ Qe(0);
function Ba(e) {
  const t = Be(e);
  return !ai() || !t.visualViewport ? Vc : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function Wc(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== Be(e) ? !1 : t;
}
function At(e, t, n, s) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), r = li(e);
  let i = Qe(1);
  t && (s ? De(s) && (i = qt(s)) : i = qt(e));
  const a = Wc(r, n, s) ? Ba(r) : Qe(0);
  let l = (o.left + a.x) / i.x, u = (o.top + a.y) / i.y, c = o.width / i.x, d = o.height / i.y;
  if (r) {
    const f = Be(r), h = s && De(s) ? Be(s) : s;
    let m = f, p = qs(m);
    for (; p && s && h !== m; ) {
      const g = qt(p), _ = p.getBoundingClientRect(), x = Ve(p), y = _.left + (p.clientLeft + parseFloat(x.paddingLeft)) * g.x, w = _.top + (p.clientTop + parseFloat(x.paddingTop)) * g.y;
      l *= g.x, u *= g.y, c *= g.x, d *= g.y, l += y, u += w, m = Be(p), p = qs(m);
    }
  }
  return Gt({
    width: c,
    height: d,
    x: l,
    y: u
  });
}
function ui(e, t) {
  const n = ms(e).scrollLeft;
  return t ? t.left + n : At(tt(e)).left + n;
}
function Ua(e, t, n) {
  n === void 0 && (n = !1);
  const s = e.getBoundingClientRect(), o = s.left + t.scrollLeft - (n ? 0 : (
    // RTL <body> scrollbar.
    ui(e, s)
  )), r = s.top + t.scrollTop;
  return {
    x: o,
    y: r
  };
}
function qc(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: s,
    strategy: o
  } = e;
  const r = o === "fixed", i = tt(s), a = t ? hs(t.floating) : !1;
  if (s === i || a && r)
    return n;
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  }, u = Qe(1);
  const c = Qe(0), d = et(s);
  if ((d || !d && !r) && ((tn(s) !== "body" || $n(i)) && (l = ms(s)), et(s))) {
    const h = At(s);
    u = qt(s), c.x = h.x + s.clientLeft, c.y = h.y + s.clientTop;
  }
  const f = i && !d && !r ? Ua(i, l, !0) : Qe(0);
  return {
    width: n.width * u.x,
    height: n.height * u.y,
    x: n.x * u.x - l.scrollLeft * u.x + c.x + f.x,
    y: n.y * u.y - l.scrollTop * u.y + c.y + f.y
  };
}
function Kc(e) {
  return Array.from(e.getClientRects());
}
function Gc(e) {
  const t = tt(e), n = ms(e), s = e.ownerDocument.body, o = Je(t.scrollWidth, t.clientWidth, s.scrollWidth, s.clientWidth), r = Je(t.scrollHeight, t.clientHeight, s.scrollHeight, s.clientHeight);
  let i = -n.scrollLeft + ui(e);
  const a = -n.scrollTop;
  return Ve(s).direction === "rtl" && (i += Je(t.clientWidth, s.clientWidth) - o), {
    width: o,
    height: r,
    x: i,
    y: a
  };
}
function Xc(e, t) {
  const n = Be(e), s = tt(e), o = n.visualViewport;
  let r = s.clientWidth, i = s.clientHeight, a = 0, l = 0;
  if (o) {
    r = o.width, i = o.height;
    const u = ai();
    (!u || u && t === "fixed") && (a = o.offsetLeft, l = o.offsetTop);
  }
  return {
    width: r,
    height: i,
    x: a,
    y: l
  };
}
const Yc = /* @__PURE__ */ new Set(["absolute", "fixed"]);
function Zc(e, t) {
  const n = At(e, !0, t === "fixed"), s = n.top + e.clientTop, o = n.left + e.clientLeft, r = et(e) ? qt(e) : Qe(1), i = e.clientWidth * r.x, a = e.clientHeight * r.y, l = o * r.x, u = s * r.y;
  return {
    width: i,
    height: a,
    x: l,
    y: u
  };
}
function Fi(e, t, n) {
  let s;
  if (t === "viewport")
    s = Xc(e, n);
  else if (t === "document")
    s = Gc(tt(e));
  else if (De(t))
    s = Zc(t, n);
  else {
    const o = Ba(e);
    s = {
      x: t.x - o.x,
      y: t.y - o.y,
      width: t.width,
      height: t.height
    };
  }
  return Gt(s);
}
function Fa(e, t) {
  const n = bt(e);
  return n === t || !De(n) || Xt(n) ? !1 : Ve(n).position === "fixed" || Fa(n, t);
}
function Jc(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let s = Sn(e, [], !1).filter((a) => De(a) && tn(a) !== "body"), o = null;
  const r = Ve(e).position === "fixed";
  let i = r ? bt(e) : e;
  for (; De(i) && !Xt(i); ) {
    const a = Ve(i), l = ii(i);
    !l && a.position === "fixed" && (o = null), (r ? !l && !o : !l && a.position === "static" && !!o && Yc.has(o.position) || $n(i) && !l && Fa(e, i)) ? s = s.filter((c) => c !== i) : o = a, i = bt(i);
  }
  return t.set(e, s), s;
}
function Qc(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: s,
    strategy: o
  } = e;
  const i = [...n === "clippingAncestors" ? hs(t) ? [] : Jc(t, this._c) : [].concat(n), s], a = i[0], l = i.reduce((u, c) => {
    const d = Fi(t, c, o);
    return u.top = Je(d.top, u.top), u.right = dt(d.right, u.right), u.bottom = dt(d.bottom, u.bottom), u.left = Je(d.left, u.left), u;
  }, Fi(t, a, o));
  return {
    width: l.right - l.left,
    height: l.bottom - l.top,
    x: l.left,
    y: l.top
  };
}
function ed(e) {
  const {
    width: t,
    height: n
  } = Ra(e);
  return {
    width: t,
    height: n
  };
}
function td(e, t, n) {
  const s = et(t), o = tt(t), r = n === "fixed", i = At(e, !0, r, t);
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = Qe(0);
  function u() {
    l.x = ui(o);
  }
  if (s || !s && !r)
    if ((tn(t) !== "body" || $n(o)) && (a = ms(t)), s) {
      const h = At(t, !0, r, t);
      l.x = h.x + t.clientLeft, l.y = h.y + t.clientTop;
    } else o && u();
  r && !s && o && u();
  const c = o && !s && !r ? Ua(o, a) : Qe(0), d = i.left + a.scrollLeft - l.x - c.x, f = i.top + a.scrollTop - l.y - c.y;
  return {
    x: d,
    y: f,
    width: i.width,
    height: i.height
  };
}
function $s(e) {
  return Ve(e).position === "static";
}
function Ni(e, t) {
  if (!et(e) || Ve(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return tt(e) === n && (n = n.ownerDocument.body), n;
}
function Na(e, t) {
  const n = Be(e);
  if (hs(e))
    return n;
  if (!et(e)) {
    let o = bt(e);
    for (; o && !Xt(o); ) {
      if (De(o) && !$s(o))
        return o;
      o = bt(o);
    }
    return n;
  }
  let s = Ni(e, t);
  for (; s && Bc(s) && $s(s); )
    s = Ni(s, t);
  return s && Xt(s) && $s(s) && !ii(s) ? n : s || Hc(e) || n;
}
const nd = async function(e) {
  const t = this.getOffsetParent || Na, n = this.getDimensions, s = await n(e.floating);
  return {
    reference: td(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: s.width,
      height: s.height
    }
  };
};
function sd(e) {
  return Ve(e).direction === "rtl";
}
const rd = {
  convertOffsetParentRelativeRectToViewportRelativeRect: qc,
  getDocumentElement: tt,
  getClippingRect: Qc,
  getOffsetParent: Na,
  getElementRects: nd,
  getClientRects: Kc,
  getDimensions: ed,
  getScale: qt,
  isElement: De,
  isRTL: sd
};
function za(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function od(e, t) {
  let n = null, s;
  const o = tt(e);
  function r() {
    var a;
    clearTimeout(s), (a = n) == null || a.disconnect(), n = null;
  }
  function i(a, l) {
    a === void 0 && (a = !1), l === void 0 && (l = 1), r();
    const u = e.getBoundingClientRect(), {
      left: c,
      top: d,
      width: f,
      height: h
    } = u;
    if (a || t(), !f || !h)
      return;
    const m = Fn(d), p = Fn(o.clientWidth - (c + f)), g = Fn(o.clientHeight - (d + h)), _ = Fn(c), y = {
      rootMargin: -m + "px " + -p + "px " + -g + "px " + -_ + "px",
      threshold: Je(0, dt(1, l)) || 1
    };
    let w = !0;
    function T(L) {
      const B = L[0].intersectionRatio;
      if (B !== l) {
        if (!w)
          return i();
        B ? i(!1, B) : s = setTimeout(() => {
          i(!1, 1e-7);
        }, 1e3);
      }
      B === 1 && !za(u, e.getBoundingClientRect()) && i(), w = !1;
    }
    try {
      n = new IntersectionObserver(T, {
        ...y,
        // Handle <iframe>s
        root: o.ownerDocument
      });
    } catch {
      n = new IntersectionObserver(T, y);
    }
    n.observe(e);
  }
  return i(!0), r;
}
function id(e, t, n, s) {
  s === void 0 && (s = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: r = !0,
    elementResize: i = typeof ResizeObserver == "function",
    layoutShift: a = typeof IntersectionObserver == "function",
    animationFrame: l = !1
  } = s, u = li(e), c = o || r ? [...u ? Sn(u) : [], ...Sn(t)] : [];
  c.forEach((_) => {
    o && _.addEventListener("scroll", n, {
      passive: !0
    }), r && _.addEventListener("resize", n);
  });
  const d = u && a ? od(u, n) : null;
  let f = -1, h = null;
  i && (h = new ResizeObserver((_) => {
    let [x] = _;
    x && x.target === u && h && (h.unobserve(t), cancelAnimationFrame(f), f = requestAnimationFrame(() => {
      var y;
      (y = h) == null || y.observe(t);
    })), n();
  }), u && !l && h.observe(u), h.observe(t));
  let m, p = l ? At(e) : null;
  l && g();
  function g() {
    const _ = At(e);
    p && !za(p, _) && n(), p = _, m = requestAnimationFrame(g);
  }
  return n(), () => {
    var _;
    c.forEach((x) => {
      o && x.removeEventListener("scroll", n), r && x.removeEventListener("resize", n);
    }), d?.(), (_ = h) == null || _.disconnect(), h = null, l && cancelAnimationFrame(m);
  };
}
const ad = Ic, ld = Lc, ud = Ac, cd = Tc, dd = Mc, fd = (e, t, n) => {
  const s = /* @__PURE__ */ new Map(), o = {
    platform: rd,
    ...n
  }, r = {
    ...o.platform,
    _c: s
  };
  return Oc(e, t, {
    ...o,
    platform: r
  });
};
function hd(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Ps = { exports: {} }, zi;
function md() {
  return zi || (zi = 1, function(e) {
    var t = Object.assign || function(s) {
      for (var o, r = 1; r < arguments.length; r++) for (var i in o = arguments[r], o) Object.prototype.hasOwnProperty.call(o, i) && (s[i] = o[i]);
      return s;
    }, n = function(s, o) {
      if (s) {
        typeof window < "u" && function() {
          function m(p, g) {
            g = g || { bubbles: !1, cancelable: !1, detail: void 0 };
            var _ = document.createEvent("CustomEvent");
            return _.initCustomEvent(p, g.bubbles, g.cancelable, g.detail), _;
          }
          return typeof window.CustomEvent != "function" && (m.prototype = window.Event.prototype, void (window.CustomEvent = m));
        }(), o || (o = {}), o = t({}, { minHorizontal: 10, minVertical: 10, deltaHorizontal: 3, deltaVertical: 5, preventScroll: !1, lockAxis: !0, touch: !0, mouse: !0 }, o);
        var r = [], i = !1, a = function() {
          i = !0;
        }, l = function(m) {
          i = !1, c(m);
        }, u = function(m) {
          i && (m.changedTouches = [{ clientX: m.clientX, clientY: m.clientY }], d(m));
        };
        o.mouse && (s.addEventListener("mousedown", a), s.addEventListener("mouseup", l), s.addEventListener("mousemove", u));
        var c = function(m) {
          var p = Math.abs, g = Math.max, _ = Math.min;
          if (r.length) {
            for (var x = typeof TouchEvent == "function" && m instanceof TouchEvent, y = [], w = [], T = { top: !1, right: !1, bottom: !1, left: !1 }, L = 0; L < r.length; L++) y.push(r[L].x), w.push(r[L].y);
            var B = y[0], k = y[y.length - 1], C = w[0], v = w[w.length - 1], S = { x: [B, k], y: [C, v] };
            if (1 < r.length) {
              var E = { detail: t({ touch: x, target: m.target }, S) }, I = new CustomEvent("swiperelease", E);
              s.dispatchEvent(I);
            }
            var R = y[0] - y[y.length - 1], j = "none";
            j = 0 < R ? "left" : "right";
            var q, Y = _.apply(Math, y), X = g.apply(Math, y);
            if (p(R) >= o.minHorizontal && (j == "left" ? (q = p(Y - y[y.length - 1]), q <= o.deltaHorizontal && (T.left = !0)) : j == "right" && (q = p(X - y[y.length - 1]), q <= o.deltaHorizontal && (T.right = !0))), R = w[0] - w[w.length - 1], j = "none", j = 0 < R ? "top" : "bottom", Y = _.apply(Math, w), X = g.apply(Math, w), p(R) >= o.minVertical && (j == "top" ? (q = p(Y - w[w.length - 1]), q <= o.deltaVertical && (T.top = !0)) : j == "bottom" && (q = p(X - w[w.length - 1]), q <= o.deltaVertical && (T.bottom = !0))), r = [], T.top || T.right || T.bottom || T.left) {
              o.lockAxis && ((T.left || T.right) && p(B - k) > p(C - v) ? T.top = T.bottom = !1 : (T.top || T.bottom) && p(B - k) < p(C - v) && (T.left = T.right = !1));
              var G = { detail: t({ directions: T, touch: x, target: m.target }, S) }, Q = new CustomEvent("swipe", G);
              s.dispatchEvent(Q);
            } else {
              var ge = new CustomEvent("swipecancel", { detail: t({ touch: x, target: m.target }, S) });
              s.dispatchEvent(ge);
            }
          }
        }, d = function(m) {
          var p = m.changedTouches[0];
          if (r.push({ x: p.clientX, y: p.clientY }), 1 < r.length) {
            var g = r[0].x, _ = r[r.length - 1].x, x = r[0].y, y = r[r.length - 1].y, w = { detail: { x: [g, _], y: [x, y], touch: typeof TouchEvent == "function" && m instanceof TouchEvent, target: m.target } }, T = new CustomEvent("swiping", w), L = o.preventScroll === !0 || typeof o.preventScroll == "function" && o.preventScroll(T);
            L && m.preventDefault(), s.dispatchEvent(T);
          }
        }, f = !1;
        try {
          var h = Object.defineProperty({}, "passive", { get: function() {
            f = { passive: !o.preventScroll };
          } });
          window.addEventListener("testPassive", null, h), window.removeEventListener("testPassive", null, h);
        } catch {
        }
        return o.touch && (s.addEventListener("touchmove", d, f), s.addEventListener("touchend", c)), { off: function() {
          s.removeEventListener("touchmove", d, f), s.removeEventListener("touchend", c), s.removeEventListener("mousedown", a), s.removeEventListener("mouseup", l), s.removeEventListener("mousemove", u);
        } };
      }
    };
    e.exports = n, e.exports.default = n;
  }(Ps)), Ps.exports;
}
var pd = md();
const vd = /* @__PURE__ */ hd(pd);
var Is = { exports: {} }, Hi;
function gd() {
  return Hi || (Hi = 1, function(e, t) {
    (function(n, s) {
      e.exports = s();
    })(window, function() {
      return function(n) {
        var s = {};
        function o(r) {
          if (s[r]) return s[r].exports;
          var i = s[r] = { i: r, l: !1, exports: {} };
          return n[r].call(i.exports, i, i.exports, o), i.l = !0, i.exports;
        }
        return o.m = n, o.c = s, o.d = function(r, i, a) {
          o.o(r, i) || Object.defineProperty(r, i, { enumerable: !0, get: a });
        }, o.r = function(r) {
          typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(r, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(r, "__esModule", { value: !0 });
        }, o.t = function(r, i) {
          if (1 & i && (r = o(r)), 8 & i || 4 & i && typeof r == "object" && r && r.__esModule) return r;
          var a = /* @__PURE__ */ Object.create(null);
          if (o.r(a), Object.defineProperty(a, "default", { enumerable: !0, value: r }), 2 & i && typeof r != "string") for (var l in r) o.d(a, l, (function(u) {
            return r[u];
          }).bind(null, l));
          return a;
        }, o.n = function(r) {
          var i = r && r.__esModule ? function() {
            return r.default;
          } : function() {
            return r;
          };
          return o.d(i, "a", i), i;
        }, o.o = function(r, i) {
          return Object.prototype.hasOwnProperty.call(r, i);
        }, o.p = "", o(o.s = 0);
      }([function(n, s, o) {
        o.r(s), o.d(s, "AriaTablist", function() {
          return B;
        });
        var r = 35, i = 36, a = 37, l = 38, u = 39, c = 40, d = 46, f = 13, h = 32, m = { 37: -1, 38: -1, 39: 1, 40: 1 }, p = function() {
          function k(C) {
            this.tabs = C.tabs, this.panels = C.panels, this.options = C.options, this.open = this.open.bind(C), this.close = this.close.bind(C), this.delete = this.delete.bind(C), this.destroy = this.destroy.bind(C), C.tablist.ariaTablist = this;
          }
          return k.prototype.open = function(C, v) {
            this.checkMultiple(), this.activateTabWithTimer.apply(this, [C, v, !0]);
          }, k.prototype.close = function(C, v) {
            this.checkMultiple(), this.deactivateTab.apply(this, [C, v, !0]), this.makeFocusable();
          }, k.prototype.delete = function(C) {
            this.determineDeletable.call(this, C);
          }, k.prototype.destroy = function() {
            this.destroy.call(this);
          }, k;
        }(), g = function(k) {
          for (var C in k === void 0 && (k = {}), this.delay = 0, this.deletable = !1, this.focusableTabs = !1, this.focusablePanels = !0, this.arrowActivation = !1, this.allArrows = !1, this.tabSelector = '[role="tab"]', this.tabindex = 0, k) k.hasOwnProperty(C) && k[C] !== void 0 && (this[C] = k[C]);
        };
        function _(k) {
          k && typeof k.preventDefault == "function" && k.preventDefault();
        }
        function x(k, C) {
          return k.getAttribute && k.getAttribute(C) || "";
        }
        function y(k, C, v) {
          k && x(k, C) !== v && k.setAttribute && k.setAttribute(C, v);
        }
        function w(k, C) {
          k && C && k.removeAttribute && C.split(" ").forEach(function(v) {
            return v && k.removeAttribute(v);
          });
        }
        var T = 0, L = function() {
          function k(C, v) {
            if (this.tabs = [], this.panels = [], C && C.nodeType === 1) {
              var S = C.ariaTablist;
              S && typeof S.destroy == "function" && S.destroy(), T += 1, this.tablist = C, this.options = new g(v), this.api = new p(this), this.init();
            }
          }
          return k.prototype.checkMultiple = function() {
            this.multiple = x(this.tablist, "aria-multiselectable") === "true";
          }, k.prototype.triggerOptionCallback = function(C, v) {
            if (v === void 0 && (v = []), this.options && typeof this.options[C] == "function") return this.options[C].apply(this.api, v);
          }, k.prototype.makeFocusable = function() {
            for (var C = "" + (this.options.tabindex || 0), v = 0, S = this.tabs.length; v < S; v += 1) if (x(this.tabs[v], "tabindex") === C) return;
            y(this.tabs[0], "tabindex", C);
          }, k.prototype.setCoreAttributes = function(C, v, S) {
            var E = this.options.tabindex || "0";
            this.options.focusableTabs && y(C, "tabindex", E), this.options.focusablePanels && y(v, "tabindex", E), C.id || y(C, "id", "aria-tablist-" + T + "-tab-" + S), v.id || y(v, "id", "aria-tablist-" + T + "-panel-" + S), y(C, "role", "tab"), y(v, "role", "tabpanel"), y(C, "aria-controls", v.id), y(v, "aria-labelledby", C.id);
          }, k.prototype.getTabPanel = function(C) {
            var v = typeof C == "number" ? this.tabs[C] : C;
            if (!v || v.nodeType !== 1) return null;
            var S = typeof C == "number" ? this.panels[C] : null;
            if (S) return S;
            var E = x(v, "aria-controls");
            return E || (E = x(v, "data-controls")), E && (S = document.getElementById(E)), S || (E && w(v, "aria-controls"), v.id && (S = document.querySelector('[aria-labelledby="' + v.id + '"]')), S || (S = document.querySelector('[data-labelledby="' + v.id + '"]'))), S;
          }, k.prototype.generateArrays = function(C) {
            this.tabs.splice(0), this.panels.splice(0);
            var v = this.tablist.querySelectorAll(this.options.tabSelector);
            C && !v.length && (v = this.tablist.childNodes);
            for (var S = 0, E = v.length; S < E; S += 1) {
              var I = v[S];
              if (I && I.nodeType === 1 && !(this.panels.indexOf(I) > -1)) {
                var R = this.getTabPanel(I);
                R ? (this.tabs.push(I), this.panels.push(R), this.setCoreAttributes(I, R, S), I._ariaTablistTabIndex = this.tabs.length - 1) : x(I, "role") === "tab" && w(I, "role");
              }
            }
          }, k.prototype.elementIsTab = function(C) {
            return !!(C && this.tabs.indexOf(C) > -1);
          }, k.prototype.addListenersToTab = function(C) {
            var v = this.tabs[C];
            v.addEventListener("keydown", this.tabKeydownEvent), v.addEventListener("keyup", this.tabKeyupEvent), v.addEventListener("click", this.tabClickEvent);
          }, k.prototype.tabClickEvent = function(C) {
            var v = C.target;
            do {
              if (this.elementIsTab(v)) return this.checkMultiple(), _(C), this.activateTabWithTimer(v, !1);
              v = v.parentElement || v.parentNode;
            } while (v !== null && v.nodeType === 1);
          }, k.prototype.tabKeydownEvent = function(C) {
            if (this.elementIsTab(C.target)) switch (C.keyCode) {
              case r:
                _(C), this.focusLastTab();
                break;
              case i:
                _(C), this.focusFirstTab();
                break;
              case l:
              case c:
              case a:
              case u:
                this.processArrowPress(C);
                break;
              case h:
              case f:
                _(C);
            }
          }, k.prototype.tabKeyupEvent = function(C) {
            var v = C.target;
            if (this.elementIsTab(v)) switch (C.keyCode) {
              case d:
                this.determineDeletable(v);
                break;
              case f:
              case h:
                this.checkMultiple(), _(C), this.activateTabWithTimer(v);
            }
          }, k.prototype.processArrowPress = function(C) {
            var v = C.keyCode;
            (this.options.allArrows || (x(this.tablist, "aria-orientation") === "vertical" ? v === l || v === c : v === a || v === u)) && this.switchTabOnArrowPress(C);
          }, k.prototype.switchTabOnArrowPress = function(C) {
            var v = C.keyCode, S = m[v], E = C.target._ariaTablistTabIndex;
            if (S && typeof E == "number") {
              _(C);
              var I = (v === a || v === u) && (document.dir === "rtl" || this.tablist.dir === "rtl");
              I && this.tablist.dir !== "ltr" && (S *= -1);
              var R = E + S;
              this.tabs[R] ? this.focusTab(R) : v === a || v === l ? I ? this.focusFirstTab() : this.focusLastTab() : v !== u && v != c || (I ? this.focusLastTab() : this.focusFirstTab());
            }
          }, k.prototype.getTab = function(C) {
            return typeof C == "number" && this.elementIsTab(this.tabs[C]) ? this.tabs[C] : this.elementIsTab(C) ? C : null;
          }, k.prototype.activateTabWithTimer = function(C, v, S) {
            var E = this;
            this.tabTimer && clearTimeout(this.tabTimer);
            var I = typeof this.options.delay == "number" ? this.options.delay : 0;
            this.tabTimer = setTimeout(function() {
              E.activateTab(C, v, S);
            }, I);
          }, k.prototype.activateTab = function(C, v, S) {
            v === void 0 && (v = !0), S === void 0 && (S = !1);
            var E = this.getTab(C);
            if (E && v && E.focus(), E && (S || x(E, "aria-disabled") !== "true")) {
              var I = x(E, "aria-selected") === "true";
              if (this.multiple && I && !S) return this.deactivateTab(E), void this.makeFocusable();
              this.multiple || this.deactivateTabs([E]);
              var R = this.options.tabindex || "0";
              y(E, "tabindex", R), y(E, "aria-selected", "true");
              var j = this.getTabPanel(C);
              if (j) {
                var q = x(j, "hidden") === "hidden";
                w(j, "hidden aria-hidden"), this.multiple && (y(j, "aria-expanded", "true"), y(E, "aria-expanded", "true")), this.options.focusablePanels && y(j, "tabindex", R), q && this.triggerOptionCallback("onOpen", [j, E]);
              }
            }
          }, k.prototype.deactivateTab = function(C, v, S) {
            v === void 0 && (v = !1), S === void 0 && (S = !1);
            var E = this.getTab(C);
            if (E && (v && E.focus(), y(E, "tabindex", this.options.focusableTabs ? this.options.tabindex || "0" : "-1"), S || x(E, "aria-disabled") !== "true")) {
              y(E, "aria-selected", "false");
              var I = this.getTabPanel(C);
              if (I) {
                var R = x(I, "hidden") === "hidden";
                w(I, "tabindex"), y(I, "hidden", "hidden"), y(I, "aria-hidden", "true"), this.multiple ? (y(E, "aria-expanded", "false"), y(I, "aria-expanded", "false")) : (w(I, "aria-expanded"), w(E, "aria-expanded")), R || this.triggerOptionCallback("onClose", [I, E]);
              }
            }
          }, k.prototype.deactivateTabs = function(C) {
            var v = this;
            C === void 0 && (C = []);
            var S = Array.isArray(C);
            this.tabs.forEach(function(E) {
              S && C.indexOf(E) !== -1 || v.deactivateTab(E, !1, !0);
            });
          }, k.prototype.focusTab = function(C) {
            var v = this.getTab(C), S = this.options.arrowActivation;
            if (v) {
              if (S && x(v, "aria-selected") !== "true") return void this.activateTabWithTimer(v);
              v.focus();
            }
          }, k.prototype.focusFirstTab = function() {
            this.focusTab(0);
          }, k.prototype.focusLastTab = function() {
            this.focusTab(this.tabs.length - 1);
          }, k.prototype.determineDeletable = function(C) {
            if (this.options.deletable) {
              var v = this.getTab(C);
              if (v && x(v, "data-deletable") !== "false") {
                this.checkMultiple(), this.deleteTab(v), this.generateArrays();
                var S = v._ariaTablistTabIndex, E = S - 1 > -1 ? S - 1 : 0;
                this.multiple || x(v, "aria-selected") !== "true" ? this.tabs[E] && this.tabs[E].focus() : this.activateTab(E), this.makeFocusable(), this.triggerOptionCallback("onDelete", [v]);
              }
            }
          }, k.prototype.deleteTab = function(C) {
            var v = this.getTabPanel(C);
            C.parentElement.removeChild(C), v && v.parentElement.removeChild(v);
          }, k.prototype.destroy = function() {
            var C = this, v = "aria-expanded aria-hidden hidden role tabindex";
            this.tabs.forEach(function(S, E) {
              S.removeEventListener("keydown", C.tabKeydownEvent), S.removeEventListener("keyup", C.tabKeyupEvent), S.removeEventListener("click", C.tabClickEvent), w(C.panels[E], v), w(S, v), delete S._ariaTablistTabIndex;
            }), this.tablist && (delete this.tablist.ariaTablist, w(this.tablist, "role")), this.panels.splice(0), this.tabs.splice(0), this.tablist = null;
          }, k.prototype.init = function() {
            var C = this;
            this.checkMultiple(), this.generateArrays(!0), this.tabKeydownEvent = this.tabKeydownEvent.bind(this), this.tabClickEvent = this.tabClickEvent.bind(this), this.tabKeyupEvent = this.tabKeyupEvent.bind(this);
            var v = [];
            this.tabs.forEach(function(S, E) {
              C.addListenersToTab(E), !(x(S, "aria-selected") === "true" || x(S, "data-selected") === "true") || !C.multiple && v.length || v.push(S);
            }), y(this.tablist, "role", "tablist"), this.tabs.length && (this.multiple || v.length || v.push(this.tabs[0]), this.deactivateTabs(v), v.forEach(function(S) {
              return C.activateTab(S, !1, !0);
            }), this.makeFocusable()), this.triggerOptionCallback("onReady", [this.tablist]);
          }, k;
        }();
        function B(k, C) {
          return new L(k, C).api;
        }
        s.default = B;
      }]);
    });
  }(Is)), Is.exports;
}
gd();
var bd = Object.defineProperty, Ha = (e) => {
  throw TypeError(e);
}, yd = (e, t, n) => t in e ? bd(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Se = (e, t, n) => yd(e, typeof t != "symbol" ? t + "" : t, n), ci = (e, t, n) => t.has(e) || Ha("Cannot " + n), ue = (e, t, n) => (ci(e, t, "read from private field"), n ? n.call(e) : t.get(e)), Ge = (e, t, n) => t.has(e) ? Ha("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), Oe = (e, t, n, s) => (ci(e, t, "write to private field"), t.set(e, n), n), it = (e, t, n) => (ci(e, t, "access private method"), n);
function Da(e, t, n, s) {
  let o;
  const r = function() {
    const i = this, a = arguments, l = function() {
      o = null, e.apply(i, a);
    };
    clearTimeout(o), o = setTimeout(l, t);
  };
  return r.cancel = function() {
    clearTimeout(o), o = null;
  }, r;
}
const xd = /(\r\n|\n|\r)/gm, wd = /\s+/g, _d = /^[{\[][\s\S]*[}\]]$/;
function Sd(e, t = {}, n = null) {
  try {
    return JSON.parse(e);
  } catch (s) {
    return typeof n == "function" ? n(s, e) : console.warn("safeParse: Failed to parse JSON string:", e, "Error:", s), t;
  }
}
function Va() {
  return typeof window < "u" && typeof window.document < "u";
}
function Cd(e) {
  return new DOMParser().parseFromString(e, "text/html").body.firstElementChild;
}
function Ed(e, t, n = {}) {
  const s = e.dataset[t];
  return Sd(s, n, (o) => {
    console.error(`Error getting JSON from dataset (${t}) -- "${s}"
`, e, o);
  });
}
function Od(e, t) {
  const n = e.dataset[t];
  return n && _d.test(n.trim()) ? Ed(e, t) : n;
}
function Td(e, t = document) {
  return typeof e == "string" ? t.querySelector(e) : e instanceof Element ? e : (console.warn("getElement: Invalid target type (expected String/Node)", e), null);
}
Va() && (kd(), Md());
const Ks = {
  pageModified(e) {
    e.dispatchEvent(Ht("pageModified"));
  },
  pageResized(e) {
    e.dispatchEvent(Ht("pageResized"));
  },
  beforePrint(e) {
    e.dispatchEvent(Ht("beforePrint"));
  },
  afterPrint(e) {
    e.dispatchEvent(Ht("afterPrint"));
  }
}, Ad = Object.keys(Ks);
function Zn(e, t) {
  Ks[e] ? Ks[e](t) : console.warn(`Unable to dispatch non-core event: ${e}`);
}
function Pn(e) {
  return "ulu:" + e;
}
function di(e) {
  return Ad.includes(e) ? Pn(e) : (console.warn(`'${e}' is not a valid core event type.`), null);
}
function Ht(e, t = null, n = { bubbles: !0 }) {
  return new CustomEvent(Pn(e), { detail: t, ...n });
}
function kd() {
  window.addEventListener("resize", Da(() => Zn("pageResized", document), 250));
}
function Md() {
  window.addEventListener("beforeprint", () => {
    Zn("beforePrint", document);
  }), window.addEventListener("afterprint", () => {
    Zn("afterPrint", document);
  });
}
const $d = {
  iconClassClose: "css-icon css-icon--close",
  iconClassDragX: "css-icon css-icon--drag-x",
  iconClassDragBoth: "css-icon css-icon--drag-both",
  iconClassPrevious: "css-icon  css-icon--angle-left",
  iconClassNext: "css-icon  css-icon--angle-right",
  cssvarPrefix: ""
};
let Di = { ...$d };
function Wa(e) {
  if (!Di.hasOwnProperty(e)) {
    console.warn(`Attempted to access non-existent setting: ${e}`);
    return;
  }
  return Di[e];
}
function Yt(e, t) {
  return {
    toString() {
      const n = Wa(e);
      return t ? t(n) : n;
    }
  };
}
function fi(e) {
  return (t) => e.every((n) => Object.prototype.hasOwnProperty.call(t, n));
}
function Hn(e) {
  return e.replace(xd, "").replace(wd, " ").trim();
}
function Pd(e) {
  return e.replace(/-([a-z])/g, (t, n) => n.toUpperCase());
}
function qa(e) {
  return Pd(e.replace(/^data-/, ""));
}
function Ka(e, t = {
  columnFirst: "position-column-first",
  columnLast: "position-column-last",
  rowFirst: "position-row-first",
  rowLast: "position-row-last"
}) {
  const n = [...e.children], s = [];
  let o;
  n.forEach((r) => {
    const i = r.getBoundingClientRect().y;
    o !== i && s.push([]), s[s.length - 1].push(r), o = i, r.classList.remove(...Object.values(t));
  }), s.forEach((r, i) => {
    i === 0 && r.forEach((a) => a.classList.add(t.rowFirst)), i == s.length - 1 && r.forEach((a) => a.classList.add(t.rowLast)), r.forEach((a, l) => {
      l === 0 && a.classList.add(t.columnFirst), l == r.length - 1 && a.classList.add(t.columnLast);
    });
  });
}
const fn = class Dn {
  /**
   * Create a new instance of ComponentInitializer
   * @param {Object} options Options for configuring the component initializer.
   * @param {String} options.type Type of component (used for logs).
   * @param {String} options.baseAttribute Prefix and base attribute name (used for base attribute and further element attribute names).
   */
  constructor(t) {
    if (!Dn.hasRequiredOptions(t))
      throw new Error(
        `Missing a required options: ${Dn.requiredOptions.join(", ")}`
      );
    this.options = Object.assign({}, Dn.defaults, t), this.logTitle = `ULU: ${this.options.type}:
`;
  }
  /**
   * Initializes the component based on the provided configuration.
   * @param {Object} config The initialization configuration.
   * @param {Function} config.setup The setup function to call for each element.
   * @param {String} config.key [null] The optional key to use with attribute selector.
   * @param {Boolean} config.withData [null] Whether to retrieve element data.
   * @param {Array} config.coreEvents [null] An array of core event names (e.g., 'pageModified') that should trigger a re-initialization.
   * @param {HTMLElement} config.context [document] The context to query within.
   */
  init(t) {
    var n;
    this.setupElements(t), (n = t.coreEvents) != null && n.length && t.coreEvents.forEach((s) => {
      const o = di(s);
      o && document.addEventListener(o, () => this.setupElements(t));
    });
  }
  /**
   * Processes the elements based on the provided configuration.
   * @param {object} config The initialization configuration.
   * @param {function} config.setup The setup function to call for each element.
   * @param {string} config.key The optional key to use with attribute selector.
   * @param {boolean} config.withData [false] Whether to retrieve element data.
   * @param {HTMLElement} config.context [document] The context to query within.
   */
  setupElements(t) {
    const { setup: n, key: s, withData: o, context: r } = t;
    this.queryAllInitial(s, o, r).forEach((i) => n(i, this));
  }
  /**
   * Get an attribute name
   * @param {String} key Optional key, if no key will return baseAttribute if key will return key added to base
   * @returns {String} String like data-ulu-dialog or data-ulu-dialog-element
   */
  getAttribute(t) {
    const { baseAttribute: n } = this.options;
    return t ? `${n}-${t}` : `${n}`;
  }
  /**
   * Create an attribute selector
   * @param {String} key Optional key (see getAttribute)
   */
  attributeSelector(t) {
    return `[${this.getAttribute(t)}]`;
  }
  /**
   * Create an attribute selector for initial
   * @return {String}
   */
  attributeSelectorInitial(t) {
    return `${this.attributeSelector(t)}:not([${this.getAttribute("init")}])`;
  }
  /**
   * Queries all main elements of a component that have not been initialized and extracts their data attributes.
   * @param {HTMLElement} context The context to query within.
   * @param {Boolean} withData Include dataset from element (as optional JSON)
   * @param {Node} context Element to query elements from
   * @returns {Array<{element: HTMLElement, data: object, initialize: Function}>} An array of objects containing the elements, their data, and convenience function initialize() which when called will set the init attribute on the element
   */
  queryAllInitial(t, n, s = document) {
    return [...s.querySelectorAll(this.attributeSelectorInitial(t))].map((o) => ({
      element: o,
      data: n ? this.getData(o, t) : null,
      initialize: () => this.initializeElement(o)
    }));
  }
  /**
   * Sets the init attribute on an element, marking it as initialized.
   * @param {HTMLElement} element The element to initialize.
   */
  initializeElement(t) {
    t.setAttribute(this.getAttribute("init"), "");
  }
  /**
   * Get an elements dataset value as JSON or other value
   * @return {*} The value of the dataset, if JSON will return object else will return string value or undefined
   */
  getData(t, n) {
    const s = qa(this.getAttribute(n));
    return Od(t, s);
  }
  /**
   * Will output namespaced console logs for the given initializer
   */
  log(...t) {
    console.log(this.logTitle, ...t);
  }
  /**
   * Will output namespaced console warnings for the given initializer
   */
  warn(...t) {
    console.warn(this.logTitle, ...t);
  }
  /**
   * Will output namespaced console error for the given initializer
   */
  logError(...t) {
    console.error(this.logTitle, ...t);
  }
};
Se(fn, "defaults", {
  type: null,
  baseAttribute: null
}), Se(fn, "requiredOptions", [
  "type",
  "baseAttribute"
]), Se(fn, "hasRequiredOptions", fi(
  fn.requiredOptions
));
let Pe = fn;
function Gs(e, t) {
  var n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}
function Id(e, t) {
  return `--${e}-${t}`;
}
function Ld(e) {
  var t;
  return typeof e == "object" && ((t = e?.constructor) == null ? void 0 : t.name);
}
function Ga(e, t, n) {
  const s = Ld(t) || "Logger";
  console[e](s, ...n);
}
function Ue(e, ...t) {
}
function Xs(e, ...t) {
  Ga("warn", e, t);
}
function Te(e, ...t) {
  Ga("error", e, t);
}
const jd = (e) => Id(e, "breakpoint");
Va() && Bd();
const Ys = class Zs {
  /**
   * @param {Object} config Configuration object
   * @param {Array} config.order Array of strings that correspond to the breakpoints setup in the styles, Breakpoints from smallest to largest, defaults to [small, medium, large]
   * @param {Array} config.customProperty Property to grab breakpoint from (default is --breakpoint)
   * @param {Array} config.valueFromPseudo Use the legacy method of grabbing breakpoint from pseudo element, default uses custom property
   * @param {Node} config.element The element to retrieve active breakpoint from stylesheet. (default is html) For using the old pseudo method, adjust this to document.body
   * @param {String} config.pseudoSelector Change pseudo selector used to get the breakpoint from the pseudo's content property
   */
  constructor(t) {
    Object.assign(this, Zs.defaults, t), this.active = null, this.previous = null, this.activeIndex = null, this.resizeDirection = null, this.previousIndex = null, this.breakpoints = {}, this.onChangeCallbacks = [], this.order.forEach((n) => this.breakpoints[n] = new Rd(n, this)), Ue(this, this), this.update(), Zs.instances.push(this);
  }
  /**
   * Add a callback for every time a breakpoint changes
   * - Not recommended, possibly use to watch for changes, etc
   * - For more control use instance.at(name) with breakpoint methods
   * @param {Function} callback Function to call, passed one argument current instance which can be used to get information about breakpoints
   */
  onChange(t) {
    this.onChangeCallbacks.push(t);
  }
  /**
   * Remove change callback
   * @param {Function} callback Function to remove
   */
  removeOnChange(t) {
    Gs(this.onChangeCallbacks, t);
  }
  /**
   * Get breakpoint from a pseudo element
   */
  getBreakpointInPseudo() {
    return window.getComputedStyle(this.element, this.pseudoSelector).content.replace(/^"|"$/g, "");
  }
  /**
   * Get breakpoint from a custom property
   */
  getBreakpointInProperty() {
    return getComputedStyle(this.element).getPropertyValue(this.customProperty).trim();
  }
  /**
   * Get breakpoint from element (design note: user could override prototype)
   */
  getBreakpoint() {
    return this.valueFromPseudo ? this.getBreakpointInPseudo() : this.getBreakpointInProperty();
  }
  /**
   * Updates the active breakpoint by checking the element and executes handlers on change
   */
  update() {
    const t = this.getBreakpoint();
    if (!t) {
      Te(this, "Unable to get current breakpoint, maybe order is incorrect? Breakpoint check skipped!");
      return;
    }
    if (t === this.active) return;
    this.previous = this.active, this.previousIndex = this.activeIndex;
    const n = this.order.indexOf(t);
    this.active = t, this.activeIndex = n, this.order.forEach((s, o) => {
      const r = this.breakpoints[s], i = this.activeIndex;
      r._setDirection("min", o <= i), r._setDirection("max", o > i), r._setDirection("only", o === i);
    }), this.previousIndex !== null && (this.resizeDirection = this.previousIndex < n ? "up" : "down"), this.onChangeCallbacks.forEach((s) => s(this));
  }
  /**
   * Get a breakpoint by key
   * @param {String} name The name of the breakpoint to get
   * @return {Breakpoint} Breakpoint to act on (see Breakpoint class)
   */
  at(t) {
    const n = this.breakpoints[t];
    return t || Te(this, "Unable to find breakpoint for:", n), n;
  }
};
Se(Ys, "instances", []), Se(Ys, "defaults", {
  element: document?.documentElement,
  valueFromPseudo: !1,
  customProperty: "--breakpoint",
  customProperty: Yt("cssvarPrefix", jd),
  pseudoSelector: ":before",
  order: ["none", "small", "medium", "large"],
  debug: !1
});
let Xa = Ys;
class Ls {
  constructor(t, n) {
    this.direction = t, this.active = !1, this.on = [], this.off = [], this.breakpoint = n;
  }
  /**
   * Change the state of the direction
   */
  change(t) {
    this.active !== t && (t ? this._call(!0) : this.active && this._call(!1), this.active = t);
  }
  /**
   * Calls all functions in handlers or
   */
  _call(t) {
    (t ? this.on : this.off).forEach((n) => n()), Ue(this.breakpoint._manager, `Handlers called (${t ? "on" : "off"}): ${this.direction}`);
  }
  /**
   * Returns handlers in normalized object format on/off
   */
  getHandlers(t) {
    return typeof t != "object" ? { on: t } : t;
  }
  /**
   * Adds a handler for the direction, optionally use object to add off state handler
   * @param {Function|Object} handler Function to be executed when direction is active, read object description for on/off
   * @param {Function|Object} handler.on Function to be executed when direction is active
   * @param {Function|Object} handler.off Function to be executed when direction was active and is now changed to inactive
   */
  add(t) {
    const n = this.getHandlers(t);
    n.on && this.on.push(n.on), n.off && this.off.push(n.off), this.active && n.on && (n.on(), Ue(this.breakpoint._manager, `Handler called immediately: ${this.direction}`, n.on));
  }
  /**
   * Removes a handler
   */
  remove(t) {
    const n = this.getHandlers(t);
    n.on && Gs(this.on, n.on), n.off && Gs(this.off, n.off);
  }
}
class Rd {
  constructor(t, n) {
    this.directions = {
      max: new Ls("max", this),
      min: new Ls("min", this),
      only: new Ls("only", this)
    }, this._manager = n, this.name = t;
  }
  /**
   * Private method used inrternally for managing direction activation
   * - Each direction manages it's own state and handlers
   * @param {String} direction The directional key
   * @param {Boolean} active State of that direction to set
   */
  _setDirection(t, n) {
    this.directions[t].change(n);
  }
  /**
   * Attach handler to be executed from the breakpoint and to all breakpoints below (inclusive).
   * This corresponds to a `max-width` media query in SCSS.
   * @param {Function} handler Handler to be executed
   */
  max(t) {
    this.directions.max.add(t);
  }
  /**
   * Attach handler to be executed from the breakpoint and to all breakpoints above (inclusive).
   * This corresponds to a `min-width` media query in SCSS.
   * @param {Function} handler Handler to be executed
   */
  min(t) {
    this.directions.min.add(t);
  }
  /**
   * Attach a handler to fire when the breakpoint is within the key
   * @param {Function} handler Handler to be executed
   */
  only(t) {
    this.directions.only.add(t);
  }
  /**
   * Remove handler
   * @param {Function} handler Handler to be removed, extended on/off object style can be used
   * @param {String} direction Remove handler only from specified direction, else search all directions
   */
  remove(t, n) {
    (n ? [n] : ["max", "min", "only"]).forEach((s) => {
      this.directions[s] && this.directions[s].remove(t);
    });
  }
  log(...t) {
    t.unshift(`Breakpoint (${this.name}):`), this._manager.log.apply(this._manager, t);
  }
}
function Bd() {
  window.addEventListener(di("pageResized"), () => {
    Xa.instances.forEach((e) => e.update());
  });
}
let Ud = 0;
function hi() {
  return `ulu-uid-${++Ud}`;
}
function Jn(e) {
  e.id || (e.id = hi());
}
const Fd = class Ya {
  /**
   * @param {Object} elements Elements object 
   * @param {Node} elements.trigger Trigger button/element that opens/closes collapsible
   * @param {Node} elements.content The content element that the trigger reveals
   * @param {Object} config Configuration options (see defaults)
   * @returns {Object} Collapsible instance
   */
  constructor(t, n) {
    const { trigger: s, content: o } = t;
    if (!s || !o) {
      Te(this, "missing required elements (trigger or content)");
      return;
    }
    const r = Object.assign({}, Ya.defaults, n);
    this.elements = t, this.options = r, this.isOpen = !1, this.handlers = {}, Jn(s), Jn(o), this.debugLog(this, this), r.selfManaged || this.attachHandlers(), this.setup();
  }
  attachHandlers() {
    const { trigger: t, content: n } = this.elements, { focusoutCloses: s } = this.options;
    this.clickHandler = (o) => {
      this.onClick(o);
    }, this.focusoutHandler = (o) => {
      s && document.addEventListener("focusin", () => {
        n.contains(document.activeElement) || this.close(o);
      }, { once: !0 });
    }, t.addEventListener("click", this.clickHandler), n.addEventListener("focusout", this.focusoutHandler);
  }
  removeHandlers() {
    const { trigger: t, content: n } = this.elements;
    t.removeEventListener("click", this.clickHandler), n.removeEventListener("focusout", this.focusoutHandler);
  }
  onClick(t) {
    this.toggle(t);
  }
  destroy() {
    this.removeHandlers(), this.destroyTemporaryHandlers();
  }
  debugLog(...t) {
    this.options.debug && Ue(this, ...t);
  }
  setup() {
    const { trigger: t, content: n } = this.elements, { startOpen: s } = this.options;
    t.setAttribute("role", "button"), t.setAttribute("aria-controls", n.id), n.setAttribute("aria-labelledby", t.id), this.setState(s);
  }
  createEvent(t, n) {
    return new CustomEvent(Pn("collapsible:" + t), { detail: n });
  }
  setState(t, n) {
    const s = {
      collapsible: this,
      isOpen: t,
      event: n
    };
    this.debugLog(this, "Set state", s);
    const { trigger: o, content: r } = this.elements, { openClass: i } = this.options, a = (l) => l.classList[t ? "add" : "remove"](i);
    o.setAttribute("aria-expanded", t ? "true" : "false"), a(o), a(r), this.isOpen = t, this.options.onChange(s), o.dispatchEvent(this.createEvent("change", s)), t ? this.setupTemporaryHandlers() : this.destroyTemporaryHandlers();
  }
  /**
   * Setup handlers needed for closing once open
   */
  setupTemporaryHandlers() {
    const { content: t, trigger: n } = this.elements, { clickOutsideCloses: s, escapeCloses: o } = this.options, r = (a) => {
      const { target: l } = a, u = n.contains(l), c = t.contains(l);
      s && !u && !c && this.close(a);
    }, i = (a) => {
      o && a.key === "Escape" && this.close(a);
    };
    document.addEventListener("click", r), document.addEventListener("keydown", i), this.handlers.onDocumentClick = r, this.handlers.onDocumentKeydown = i;
  }
  /**
   * Destroy handlers attached for closing once open
   */
  destroyTemporaryHandlers() {
    const { onDocumentClick: t, onDocumentKeydown: n } = this.handlers;
    t && document.removeEventListener("click", t), t && document.removeEventListener("keydown", n);
  }
  open(t) {
    this.setState(!0, t);
  }
  close(t) {
    this.setState(!1, t);
  }
  toggle(t) {
    this.setState(!this.isOpen, t);
  }
  // This is removed because I think it's not useful, users should keep references
  // Static Methods for managing instances of this class
  // static instances = [];
  // /**
  //  * Get collapsible instance by trigger element
  //  * @param {Node|String} trigger Trigger node or trigger ID
  //  */
  // static getInstance(trigger) {
  //   return Collapsible.instances.find(c => typeof trigger === "string" ? 
  //     c.elements.trigger.id === trigger : 
  //     c.elements.trigger === trigger
  //   );
  // }
  // static removeInstance(instance) {
  //   const index = Collapsible.instances.findIndex(c => c === instance);
  //   if (index > -1) {
  //     Collapsible.instances.splice(index, 1);
  //   }
  // }
};
Se(Fd, "defaults", {
  clickOutsideCloses: !1,
  // oneOpenPerContext: false, // This should be another module that manages instances within a context (accordions)
  // clickWithinCloses: false, // Not sure how this was used but seems like it should be separate
  focusoutCloses: !1,
  escapeCloses: !1,
  /**
   * The module won't attach the handlers (you need to do it yourself)
   */
  selfManaged: !1,
  /**
   * This collapsible starts in open state
   */
  startOpen: !1,
  /**
   * Open/active state class
   */
  openClass: "is-active",
  /**
   * Output debug info
   */
  debug: !0,
  onChange(e) {
  }
});
const Za = new Pe({
  type: "details-group",
  baseAttribute: "data-ulu-details-group"
});
Za.getAttribute("child-init");
const Ja = "data-ulu-dialog", Qa = new Pe({ type: "dialog", baseAttribute: Ja });
Qa.getAttribute("close");
new Pe({
  type: "flipcard",
  baseAttribute: "data-ulu-flipcard"
});
const Vi = class Vn {
  constructor(t, n, s, o) {
    s || Te(this, "Missing an element (container, front, back)"), this.options = Object.assign({}, Vn.defaults, o);
    const { namespace: r } = this.options;
    Vn.instances.push(this), this.elements = { container: t, front: n, back: s }, this.isOpen = !1, this.uid = `${r}-id-${Vn.instances.length}`, this.stateAttr = `data-${r}-state`.toLowerCase(), this.setup(), this.setVisibility(!1), Ue(this, this);
  }
  toggle() {
    this.setVisibility(!this.isOpen);
  }
  setup() {
    const { uid: t } = this, { namespace: n, proxyClick: s } = this.options, { container: o, front: r, back: i } = this.elements, a = this.elements.control = document.createElement("button");
    a.classList.add(this.getClass("control-button")), a.setAttribute("type", "button"), a.innerHTML = this.createControlContent(), a.style.gridArea = n, a.style.zIndex = "-1", a.addEventListener("focusin", () => {
      a.style.zIndex = "20";
    }), a.addEventListener("focusout", () => {
      a.style.zIndex = "-1";
    }), a.addEventListener("click", this.toggle.bind(this)), i.parentNode.insertBefore(a, i), o.classList.add(this.options.namespace), o.setAttribute("style", Hn(this.containerCss())), s && o.addEventListener("click", this.onProxyClick.bind(this)), r.style.gridArea = n, i.style.gridArea = n, a.id = `${t}-control`, a.setAttribute("aria-controls", i.id), a.setAttribute("aria-expanded", "false"), i.id = `${t}-back`, i.setAttribute("aria-labelledby", a.id), i.setAttribute("aria-hidden", "true");
  }
  /**
   * Click handler on everything on container
   * - Determines if click was something that should be ignored (link, etc)
   */
  onProxyClick({ target: t }) {
    const { exclude: n, allowSelection: s, selectionMin: o } = this.options.proxyClick, r = window.getSelection();
    n && !t.matches(n) && (!s || r.toString().length < o) && this.toggle();
  }
  getClass(t) {
    const { namespace: n } = this.options;
    return t ? `${n}__${t}` : n;
  }
  createControlContent() {
    return `
      <span class="hidden-visually">Show More Information</span>
    `;
  }
  setVisibility(t) {
    const { back: n, container: s, control: o } = this.elements, r = t ? "open" : "closed";
    n.style.zIndex = t ? "10" : "1", n.style.visibility = t ? "visible" : "hidden", s.setAttribute(this.stateAttr, r), n.setAttribute("aria-hidden", t ? "false" : "true"), o.setAttribute("aria-expanded", t ? "true" : "false"), this.isOpen = t;
  }
  containerCss() {
    return `
      display: -ms-grid;
      display: grid;
      position: relative; 
      -ms-grid-columns: 1fr; 
      grid-template-columns: 1fr;
      justify-items: stretch;
      grid-template-areas: "${this.options.namespace}";
      cursor: pointer;
    `;
  }
  panelCss(t = 1) {
    return `
      grid-area: ${this.options.namespace};
      z-index: ${t}
    `;
  }
};
Se(Vi, "instances", []), /**
* Default options for Flipcard
*/
Se(Vi, "defaults", {
  namespace: "Flipcard",
  proxyClick: {
    allowSelection: !0,
    // Don't proxy click if the user has more than the minmimum selected
    selectionMin: 10,
    // Minimum length that qualifies as a selection
    exclude: "a, input, textarea, button"
    // Selectors to avoid closing a flipcard onProxyclick 
  }
});
new Pe({
  type: "grid",
  baseAttribute: "data-grid"
});
var hn, mn, Xe, je, Dt, Vt, St, yn, xn, ze, Qn, Js, Qs, er;
const el = class tl {
  /**
   * @param {Node} container Container to be resized
   * @param {HTMLElement} control Resize handle element (should be focusable like a button)
   * @param {Object} config Options to configure the resizer.
   * @param {Boolean} [config.debug=false] Enable non-essential debugging logs.
   * @param {Boolean} [config.multiplier=1] Amount to increase size by (ie. pointer movement * multiplier).
   * @param {Boolean} [config.overrideMaxDimensions=false] When script is activated by handle, remove the element's max-width/max-height and allow the resize to exceed them.
   * @param {"left"|"right"|null} [config.fromX=null] Horizontal resizing direction.
   * @param {"top"|"bottom"|null} [config.fromY=null] Vertical resizing direction.
   * @param {number} [config.keyboardStep=10] The step in pixels for keyboard resizing.
   * @param {number} [config.keyboardDebounceTime=200] Debounce time for keyboard resize end.
   * @param {boolean} [config.manageEvents=true] If true, the Resizer will automatically bind its own events.
   * @param {boolean} [config.manageAriaLabel=false] If true, the Resizer will manage the control's aria-label.
   * @param {boolean} [config.enablePointerResizing=true] If true, pointer events will enable resizing.
   * @param {boolean} [config.enableKeyboardResizing=true] If true, keyboard events will enable resizing.
   */
  constructor(t, n, s) {
    if (Ge(this, ze), Ge(this, hn), Ge(this, mn), Ge(this, Xe), Ge(this, je), Ge(this, Dt), Ge(this, Vt), Ge(this, St), Ge(this, yn), Ge(this, xn), !n || !t) {
      Te(this, "Missing required elements: control, container");
      return;
    }
    const o = Object.assign({}, tl.defaults, s);
    this.options = o, this.container = t, this.control = n, this.debug = o.debug;
    const r = ["left", "right"], i = ["top", "bottom"], { fromX: a, fromY: l } = o;
    if (!r.includes(a) && a !== null) {
      Te(this, `Invalid fromX: ${a} (left|right|null)`);
      return;
    }
    if (!i.includes(l) && l !== null) {
      Te(this, `Invalid fromY: ${l} (top|bottom|null)`);
      return;
    }
    if (!a && !l) {
      Te(this, "Invalid fromX/fromY, failed to setup resizer (at least one of fromX or fromY must be set)");
      return;
    }
    this.resizeHorizontal = o.fromX !== null, this.resizeVertical = o.fromY !== null, o.manageEvents && (Oe(this, hn, this.onPointerdown.bind(this)), Oe(this, mn, this.onKeydown.bind(this)), o.enablePointerResizing && n.addEventListener("pointerdown", ue(this, hn)), o.enableKeyboardResizing && n.addEventListener("keydown", ue(this, mn))), it(this, ze, Qn).call(this), o.manageAriaLabel && n.setAttribute("aria-label", this.getAriaLabel());
  }
  /**
   * Cleans up event listeners and internal state to prevent memory leaks.
   */
  destroy() {
    const { control: t, options: n } = this;
    n.manageEvents && (n.enablePointerResizing && t.removeEventListener("pointerdown", ue(this, hn)), n.enableKeyboardResizing && t.removeEventListener("keydown", ue(this, mn))), ue(this, Xe) && clearTimeout(ue(this, Xe)), it(this, ze, Qn).call(this), n.manageAriaLabel && t.removeAttribute("aria-label"), Ue(this, "Resizer destroyed.");
  }
  /**
   * Public handler for pointerdown events. Call this method from your own event listeners
   * if `manageEvents` is false. Its logic will only execute if `enablePointerResizing` is true.
   * @param {PointerEvent} e The pointerdown event.
   */
  onPointerdown(t) {
    if (!this.options.enablePointerResizing) {
      Ue(this, "Pointer resizing disabled. Ignoring pointerdown event.");
      return;
    }
    t.preventDefault();
    const n = document.documentElement;
    Oe(this, yn, t.clientX), Oe(this, xn, t.clientY), it(this, ze, Js).call(this, {
      inputType: "pointer",
      startX: t.clientX,
      startY: t.clientY,
      pointerId: t.pointerId
    }), this.control.setPointerCapture(t.pointerId);
    const s = (r) => {
      const i = r.clientX - ue(this, yn), a = r.clientY - ue(this, xn);
      it(this, ze, er).call(this, i, a, r);
    }, o = (r) => {
      n.removeEventListener("pointermove", s, !1), n.removeEventListener("pointerup", o, { capture: !0, once: !0 }), this.control.hasPointerCapture(r.pointerId) && this.control.releasePointerCapture(r.pointerId), it(this, ze, Qs).call(this);
    };
    n.addEventListener("pointermove", s, !1), n.addEventListener("pointerup", o, { capture: !0, once: !0 });
  }
  /**
   * Public handler for keydown events. Call this method from your own event listeners
   * if `manageEvents` is false. Its logic will only execute if `enableKeyboardResizing` is true.
   * @param {KeyboardEvent} e The keydown event.
   */
  onKeydown(t) {
    if (!this.options.enableKeyboardResizing) {
      Ue(this, "Keyboard resizing disabled. Ignoring keydown event.");
      return;
    }
    const { key: n } = t, { keyboardStep: s, keyboardDebounceTime: o } = this.options;
    let r = 0, i = 0, a = !1;
    this.resizeHorizontal && (n === "ArrowLeft" ? (r = -s, a = !0) : n === "ArrowRight" && (r = s, a = !0)), this.resizeVertical && (n === "ArrowUp" ? (i = -s, a = !0) : n === "ArrowDown" && (i = s, a = !0)), a && (t.preventDefault(), t.stopPropagation(), (!ue(this, St) || ue(this, Xe) === null) && it(this, ze, Js).call(this, { inputType: "keyboard", keyboardKey: n }), Oe(this, Dt, ue(this, Dt) + r), Oe(this, Vt, ue(this, Vt) + i), it(this, ze, er).call(this, ue(this, Dt), ue(this, Vt), t), ue(this, Xe) && clearTimeout(ue(this, Xe)), Oe(this, Xe, setTimeout(() => {
      it(this, ze, Qs).call(this), Oe(this, Xe, null);
    }, o)));
  }
  /**
   * Generates an accessible label for the resize control based on its configuration.
   * This is a convenience function that can be used by the consumer if `manageAriaLabel` is false.
   * @returns {string} The suggested aria-label for the control.
   */
  getAriaLabel() {
    const { fromY: t, fromX: n } = this.options, s = [t, n].filter((o) => o);
    return s.length === 0 ? "Resize control" : `Resize from ${s.join(" ")} edge`;
  }
  /**
   * Dispatches a custom event on the container element.
   * @param {string} type The event type (e.g., "resizer:start", "resizer:update", "resizer:end").
   * @param {Object} [data={}] Optional data to attach to the event's detail property.
   */
  dispatchEvent(t, n = {}) {
    this.container.dispatchEvent(Ht(t, n));
  }
};
hn = /* @__PURE__ */ new WeakMap(), mn = /* @__PURE__ */ new WeakMap(), Xe = /* @__PURE__ */ new WeakMap(), je = /* @__PURE__ */ new WeakMap(), Dt = /* @__PURE__ */ new WeakMap(), Vt = /* @__PURE__ */ new WeakMap(), St = /* @__PURE__ */ new WeakMap(), yn = /* @__PURE__ */ new WeakMap(), xn = /* @__PURE__ */ new WeakMap(), ze = /* @__PURE__ */ new WeakSet(), /**
* Resets all internal state properties to their default/inactive values.
* This centralizes state cleanup and initial setup.
* @private
*/
Qn = function() {
  Oe(this, Xe, null), Oe(this, je, { width: 0, height: 0 }), Oe(this, Dt, 0), Oe(this, Vt, 0), Oe(this, St, !1), Oe(this, yn, 0), Oe(this, xn, 0);
}, /**
* Initiates a resize operation.
* This sets initial dimensions and dispatches the 'resizer:start' event.
* @param {Object} eventDetails Additional details about the initiating event.
* @private
*/
Js = function(e) {
  const { container: t, options: n } = this;
  if (ue(this, St)) {
    n.overrideMaxDimensions && (this.resizeHorizontal && (t.style.maxWidth = "none"), this.resizeVertical && (t.style.maxHeight = "none"));
    return;
  }
  const s = document.defaultView.getComputedStyle(t);
  ue(this, je).width = parseInt(s.width, 10), ue(this, je).height = parseInt(s.height, 10), n.overrideMaxDimensions && (this.resizeHorizontal && (t.style.maxWidth = "none"), this.resizeVertical && (t.style.maxHeight = "none")), Oe(this, St, !0), this.dispatchEvent("resizer:start", e), Ue(this, "Resize started.", {
    initialWidth: ue(this, je).width,
    initialHeight: ue(this, je).height,
    ...e
  });
}, /**
* Ends a resize operation.
* Dispatches 'resizer:end' event and resets internal state.
* @private
*/
Qs = function() {
  ue(this, St) && (this.dispatchEvent("resizer:end"), it(this, ze, Qn).call(this), Ue(this, "Resize ended."));
}, /**
* Core logic for calculating and applying the new size of the container.
* This method is called by both pointer and keyboard event handlers.
*
* @param {number} totalDeltaX The total horizontal displacement from the start of the resize.
* @param {number} totalDeltaY The total vertical displacement from the start of the resize.
* @param {Event} originalEvent The original DOM event (PointerEvent or KeyboardEvent) that triggered the update.
* @private
*/
er = function(e, t, n) {
  let s = ue(this, je).width, o = ue(this, je).height;
  const { fromX: r, fromY: i, multiplier: a } = this.options;
  this.resizeHorizontal && (r === "right" ? s = ue(this, je).width + e * a : r === "left" && (s = ue(this, je).width - e * a), this.container.style.width = `${Math.max(0, s)}px`), this.resizeVertical && (i === "bottom" ? o = ue(this, je).height + t * a : i === "top" && (o = ue(this, je).height - t * a), this.container.style.height = `${Math.max(0, o)}px`);
  const l = {
    newWidth: s,
    newHeight: o,
    totalDeltaX: e,
    totalDeltaY: t,
    event: n
  };
  this.dispatchEvent("resizer:update", l), Ue(this, "Resizing update.", l);
}, Se(el, "defaults", {
  debug: !1,
  /**
   * Amount to increase size by (ie. pointer movement * multiplier)
   */
  multiplier: 1,
  /**
   * Remove max-width, max-height
   */
  overrideMaxDimensions: !1,
  /**
   * @type {"left"|"right"|null}
   * Specifies the horizontal edge from which resizing occurs.
   * `null` means no horizontal resizing.
   * - Default null
   */
  fromX: null,
  /**
   * @type {"top"|"bottom"|null}
   * Specifies the vertical edge from which resizing occurs.
   * - `null` means no vertical resizing.
   * - Default null
   */
  fromY: null,
  /**
   * The step in pixels for keyboard resizing with arrow keys.
   */
  keyboardStep: 10,
  /**
   * Debounce time in milliseconds for ending a keyboard resize.
   */
  keyboardDebounceTime: 200,
  /**
   * If true, the Resizer instance will automatically bind its own DOM event listeners
   * (pointerdown, keydown) to the control element. If `false`, the user is
   * responsible for calling `resizerInstance.onPointerdown(event)` and
   * `resizerInstance.onKeydown(event)` from their own listeners.
   * Default: true
   */
  manageEvents: !0,
  /**
   * If true, the Resizer instance will automatically manage the `aria-label`
   * attribute of the control element. If `false`, the user is responsible
   * for setting this attribute.
   * Default: false
   */
  manageAriaLabel: !1,
  /**
   * If true, pointer events (mouse/touch) will enable resizing.
   * Default: true
   */
  enablePointerResizing: !0,
  /**
   * If true, keyboard events (arrow keys) will enable resizing.
   * Default: true
   */
  enableKeyboardResizing: !0
});
let nl = el;
new Pe({
  type: "modal-builder",
  baseAttribute: "data-ulu-modal-builder"
});
const Nd = [
  "track",
  "controls"
], Wi = class sl {
  constructor(t, n) {
    this.options = Object.assign({}, sl.defaults, n), fi(Nd) || Te(this, "Missing a required Element"), this.elements = {
      ...t,
      ...this.createControls(t.controls)
    }, this.nextEnabled = !0, this.previousEnabled = !0, this.scrollHandler = (s) => this.onScroll(s), this.elements.track.addEventListener("scroll", this.scrollHandler, { passive: !0 }), this.checkOverflow(), this.onScroll();
  }
  checkOverflow() {
    const { track: t } = this.elements;
    this.hasOverflow = t.scrollWidth > t.clientWidth;
  }
  createControls(t) {
    const n = document.createElement("ul"), s = document.createElement("li"), o = document.createElement("li"), r = this.createControlButton("previous"), i = this.createControlButton("next"), a = this.getClass("controls-item");
    return o.classList.add(a), o.classList.add(a + "--next"), s.classList.add(a), s.classList.add(a + "--previous"), n.classList.add(this.getClass("controls")), s.appendChild(r), o.appendChild(i), n.appendChild(s), n.appendChild(o), r.addEventListener("click", this.previous.bind(this)), i.addEventListener("click", this.next.bind(this)), t.appendChild(n), {
      controls: n,
      previousItem: s,
      nextItem: o,
      previous: r,
      next: i
    };
  }
  createControlButton(t) {
    const n = document.createElement("button");
    return n.classList.add(this.getClass("control-button")), n.classList.add(this.getClass(`control-button--${t}`)), n.classList.add(...this.options.buttonClasses), n.setAttribute("type", "button"), n.innerHTML = this.getControlContent(t), n;
  }
  getControlContent(t) {
    const n = this.options[t === "next" ? "iconClassNext" : "iconClassPrevious"];
    return `
      <span class="hidden-visually">${t}</span>
      <span class="${n}" aria-hidden="true"></span>
    `;
  }
  onScroll(t) {
    this.hasOverflow && this.onScrollHorizontal();
  }
  onScrollHorizontal() {
    const { nextEnabled: t, previousEnabled: n } = this, { track: s } = this.elements, { offsetStart: o, offsetEnd: r } = this.options, { scrollWidth: i, clientWidth: a, scrollLeft: l } = s, u = l <= o, c = i - l - r <= a;
    u && n ? this.setControlState("previous", !1) : !u && !n && this.setControlState("previous", !0), c && t ? this.setControlState("next", !1) : !c && !t && this.setControlState("next", !0);
  }
  setControlState(t, n) {
    const s = t === "next", { next: o, nextItem: r, previous: i, previousItem: a } = this.elements, l = s ? r : a, u = s ? o : i, c = n ? "remove" : "add";
    l.classList[c](this.getClass("controls-item--disabled")), u.classList[n ? "remove" : "add"](this.getClass("control--disabled")), n ? u.removeAttribute("disabled") : u.setAttribute("disabled", ""), this[s ? "nextEnabled" : "previousEnabled"] = n;
  }
  resolveAmount(t) {
    const n = t === "next", { amount: s } = this.options, { scrollLeft: o, offsetWidth: r } = this.elements.track;
    return s === "auto" ? n ? o + r : o - r : typeof s == "function" ? s(this, t) : typeof s == "number" ? n ? o + s : o - s : (Te("Unable to resolve amount for scroll"), 500);
  }
  next() {
    this.elements.track.scrollTo({
      top: 0,
      left: this.resolveAmount("next"),
      behavior: "smooth"
    });
  }
  previous() {
    this.elements.track.scrollTo({
      top: 0,
      left: this.resolveAmount("previous"),
      behavior: "smooth"
    });
  }
  getClass(t) {
    const { namespace: n } = this.options;
    return `${n}__${t}`;
  }
};
Se(Wi, "instances", []), Se(Wi, "defaults", {
  namespace: "OverflowScroller",
  events: {},
  horizontal: !0,
  offsetStart: 100,
  offsetEnd: 100,
  amount: "auto",
  buttonClasses: ["button", "button--icon"],
  iconClassPrevious: Yt("iconClassPrevious"),
  iconClassNext: Yt("iconClassNext")
});
const rl = {
  strategy: "absolute",
  placement: "bottom",
  inline: !1,
  offset: {
    mainAxis: 16
  },
  shift: !0,
  flip: !0,
  arrow: !0
  // Options for arrow (not element)
};
function ol(e, t) {
  const n = Object.assign({}, rl, t), { placement: s, strategy: o } = n, { trigger: r, content: i, contentArrow: a } = e;
  return id(r, i, () => {
    fd(r, i, {
      placement: s,
      strategy: o,
      middleware: [
        ...cn(dd, n.inline),
        ...cn(ad, n.offset),
        ...cn(ud, n.flip),
        ...cn(ld, n.shift),
        ...cn(cd, a && n.arrow, { element: a })
      ]
    }).then((l) => {
      const { x: u, y: c, middlewareData: d, placement: f } = l, h = d.arrow;
      Object.assign(i.style, {
        left: `${u}px`,
        top: `${c}px`
      }), i.setAttribute("data-placement", f), h && Object.assign(a.style, {
        // position: "absolute",
        left: h?.x != null ? `${h.x}px` : "",
        top: h?.y != null ? `${h.y}px` : ""
      });
    });
  });
}
function cn(e, t, n = {}) {
  return t ? typeof t == "object" ? [e({ ...t, ...n })] : [e(n)] : [];
}
const In = new Pe({
  type: "popover",
  baseAttribute: "data-ulu-popover"
});
In.attributeSelector("trigger-anchor");
In.attributeSelector("arrow");
In.getAttribute("content");
In.attributeSelector("content");
new Pe({
  type: "print",
  baseAttribute: "data-ulu-print"
});
new Pe({
  type: "proxy-click",
  baseAttribute: "data-ulu-proxy-click"
});
const mi = new Pe({
  type: "scroll-slider",
  baseAttribute: "data-ulu-scroll-slider"
});
mi.attributeSelector("track");
mi.attributeSelector("control-context");
const tr = new Pe({
  type: "scrollpoint",
  baseAttribute: "data-ulu-scrollpoint"
}), zd = class il {
  /**
   * Setup a new scrollpoint
   * @param {Node} element The element to create the scrollpoint for
   * @param {Object} config Options to configure the scrollpoint see Scrollpoint.defaults for more information on settings
   */
  constructor(t, n) {
    const s = Object.assign({}, il.defaults, n);
    if (!t) {
      Te(this, "Missing required element");
      return;
    }
    s.rootSelector && (s.root = document.querySelector(s.rootSelector), delete s.rootSelector), this.options = s, this.observer = null, this.lastPosition = null, this.isActive = !1, this.element = t, this.syncedElements = [
      t,
      ...s.syncElements.map((o) => Td(o))
    ], this.classes = {
      enter: this.getClassname("enter"),
      enterForward: this.getClassname("enter--from-forward"),
      enterReverse: this.getClassname("enter--from-reverse"),
      exit: this.getClassname("exit"),
      exitForward: this.getClassname("exit--from-forward"),
      exitReverse: this.getClassname("exit--from-reverse")
    }, this.setupObserver(), s.debug && tr.log(this);
  }
  getClassname(t) {
    return this.options.classPrefix + "-" + t;
  }
  getObserverOptions() {
    const { root: t, marginStart: n, marginEnd: s, threshold: o, horizontal: r } = this.options, i = r ? `0px ${n} 0px ${s}` : `${n} 0px ${s} 0px`;
    return { root: t, rootMargin: i, threshold: o };
  }
  /**
   * IntersectionObserver Callback
   * - Should set the state
   */
  onObserve(t) {
    const n = this.getScrollY(), { lastPosition: s, isActive: o, options: r } = this, i = s === null ? null : s < n;
    t.forEach((a) => {
      const { isIntersecting: l } = a;
      l && !o ? this.setState(!0, i) : !l && o && r.exit && (i && r.exitForward || !i && r.exitReverse) && this.setState(!1, i);
    }), this.lastPosition = n;
  }
  setupObserver() {
    const t = (s) => {
      this.onObserve(s);
    }, n = this.getObserverOptions();
    this.options.debug && tr.log("IntersectionObserver (options)", n), this.observer = new IntersectionObserver(t, n), this.observer.observe(this.element);
  }
  getScrollY() {
    const { root: t } = this.options;
    return t === null || t === document ? window.scrollY : t.scrollTop;
  }
  setState(t, n) {
    const { element: s } = this, o = { isActive: t, isForward: n, element: s, instance: this }, { setClasses: r, setAttribute: i, onChange: a } = this.options;
    r && this.updateClasses(t, n), i && this.updateStateAttribute(t, n), a && a(o), this.isActive = t;
  }
  getAllClasses() {
    return Object.values(this.classes);
  }
  updateClasses(t, n) {
    const { classes: s } = this, o = this.getAllClasses(), r = [
      s.enter,
      n ? s.enterForward : s.enterReverse
    ], i = [
      s.exit,
      n ? s.exitForward : s.exitReverse
    ];
    this.syncedElements.forEach((a) => {
      a.classList.remove(...o), t ? a.classList.add(...r) : a.classList.add(...i);
    });
  }
  updateStateAttribute(t, n) {
    const s = t ? "enter" : "exit", o = n ? "forward" : "reverse";
    this.syncedElements.forEach((r) => {
      r.setAttribute(this.options.attributeName, `${s}-${o}`);
    });
  }
  destroy() {
    this.observer.disconnect(), this.observer = null, this.options.setClasses && this.element.classList.remove(...this.getAllClasses()), this.options.setAttribute && this.element.removeAttribute(this.options.attributeName);
  }
};
Se(zd, "defaults", {
  /**
   * Default observer root element
   */
  root: null,
  /**
   * Use a selector to select the observer root element
   */
  rootSelector: null,
  /**
   * Log debug info to console
   */
  debug: !1,
  /**
   * Change scroll orientation to horizontal
   */
  horizontal: !1,
  /**
   * Margin for observer top or left (depending on orientation)
   */
  marginStart: "-25%",
  /**
   * Margin for observer bottom or right (depending on orientation)
   */
  marginEnd: "-55%",
  /**
   * Threshold for observer
   */
  threshold: [0, 1],
  /**
   * The point can exited (else persists)
   */
  exit: !0,
  /**
   * The point can exit from the end
   */
  exitForward: !0,
  /**
   * The point can exit from the start
   */
  exitReverse: !0,
  /**
   * Set state classes
   */
  setClasses: !1,
  /**
   * Prefix for classes
   */
  classPrefix: "scrollpoint",
  /**
   * Set attribute for state (less verbose same info as classes)
   */
  setAttribute: !0,
  /**
   * Attribute name to set state info in
   */
  attributeName: "data-ulu-scrollpoint-state",
  /**
   * Group multiple points, one active at a time (scroll menus)
   */
  // groupName: null,
  /**
   * Elements that should also get active state info (classes or attributes)
   */
  syncElements: [],
  /**
   * Callback called when state changes
   */
  onChange(e) {
  }
});
var Wn = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Hd(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var nr = { exports: {} }, sr = { exports: {} }, rr = { exports: {} };
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = function(n) {
    if (!n)
      return [];
    if (Array.isArray(n))
      return n;
    if (n.nodeType !== void 0)
      return [n];
    if (typeof n == "string" && (n = document.querySelectorAll(n)), n.length !== void 0)
      return [].slice.call(n, 0);
    throw new TypeError("unexpected input " + String(n));
  }, e.exports = t.default;
})(rr, rr.exports);
var yt = rr.exports, or = { exports: {} }, ir = { exports: {} };
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = function(r) {
    var i = r.context, a = r.label, l = a === void 0 ? "context-to-element" : a, u = r.resolveDocument, c = r.defaultToDocument, d = (0, s.default)(i)[0];
    if (u && d && d.nodeType === Node.DOCUMENT_NODE && (d = d.documentElement), !d && c)
      return document.documentElement;
    if (!d)
      throw new TypeError(l + " requires valid options.context");
    if (d.nodeType !== Node.ELEMENT_NODE && d.nodeType !== Node.DOCUMENT_FRAGMENT_NODE)
      throw new TypeError(l + " requires options.context to be an Element");
    return d;
  };
  var n = yt, s = o(n);
  function o(r) {
    return r && r.__esModule ? r : { default: r };
  }
  e.exports = t.default;
})(ir, ir.exports);
var Ce = ir.exports, ar = { exports: {} }, lr = { exports: {} }, ur = { exports: {} }, cr = { exports: {} };
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = function() {
    for (var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, i = r.context, a = [], l = (0, s.default)({
      label: "get/parents",
      context: i
    }); l; )
      a.push(l), l = l.parentNode, l && l.nodeType !== Node.ELEMENT_NODE && (l = null);
    return a;
  };
  var n = Ce, s = o(n);
  function o(r) {
    return r && r.__esModule ? r : { default: r };
  }
  e.exports = t.default;
})(cr, cr.exports);
var Ln = cr.exports, dr = { exports: {} };
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = r;
  var n = ["matches", "webkitMatchesSelector", "mozMatchesSelector", "msMatchesSelector"], s = null;
  function o(i) {
    n.some(function(a) {
      return i[a] ? (s = a, !0) : !1;
    });
  }
  function r(i, a) {
    return s || o(i), i[s](a);
  }
  e.exports = t.default;
})(dr, dr.exports);
var al = dr.exports, fr = { exports: {} }, hr = { exports: {} }, mr = { exports: {} }, pr = { exports: {} }, vr = { exports: {} }, es = { exports: {} };
/*!
 * Platform.js <https://mths.be/platform>
 * Copyright 2014-2016 Benjamin Tan <https://demoneaux.github.io/>
 * Copyright 2011-2013 John-David Dalton <http://allyoucanleet.com/>
 * Available under MIT license <https://mths.be/mit>
 */
es.exports;
(function(e, t) {
  (function() {
    var n = {
      function: !0,
      object: !0
    }, s = n[typeof window] && window || this, o = s, r = t, i = e && !e.nodeType && e, a = r && i && typeof Wn == "object" && Wn;
    a && (a.global === a || a.window === a || a.self === a) && (s = a);
    var l = Math.pow(2, 53) - 1, u = /\bOpera/, c = this, d = Object.prototype, f = d.hasOwnProperty, h = d.toString;
    function m(v) {
      return v = String(v), v.charAt(0).toUpperCase() + v.slice(1);
    }
    function p(v, S, E) {
      var I = {
        "10.0": "10",
        "6.4": "10 Technical Preview",
        "6.3": "8.1",
        "6.2": "8",
        "6.1": "Server 2008 R2 / 7",
        "6.0": "Server 2008 / Vista",
        "5.2": "Server 2003 / XP 64-bit",
        "5.1": "XP",
        "5.01": "2000 SP1",
        "5.0": "2000",
        "4.0": "NT",
        "4.90": "ME"
      };
      return S && E && /^Win/i.test(v) && !/^Windows Phone /i.test(v) && (I = I[/[\d.]+$/.exec(v)]) && (v = "Windows " + I), v = String(v), S && E && (v = v.replace(RegExp(S, "i"), E)), v = _(
        v.replace(/ ce$/i, " CE").replace(/\bhpw/i, "web").replace(/\bMacintosh\b/, "Mac OS").replace(/_PowerPC\b/i, " OS").replace(/\b(OS X) [^ \d]+/i, "$1").replace(/\bMac (OS X)\b/, "$1").replace(/\/(\d)/, " $1").replace(/_/g, ".").replace(/(?: BePC|[ .]*fc[ \d.]+)$/i, "").replace(/\bx86\.64\b/gi, "x86_64").replace(/\b(Windows Phone) OS\b/, "$1").replace(/\b(Chrome OS \w+) [\d.]+\b/, "$1").split(" on ")[0]
      ), v;
    }
    function g(v, S) {
      var E = -1, I = v ? v.length : 0;
      if (typeof I == "number" && I > -1 && I <= l)
        for (; ++E < I; )
          S(v[E], E, v);
      else
        x(v, S);
    }
    function _(v) {
      return v = B(v), /^(?:webOS|i(?:OS|P))/.test(v) ? v : m(v);
    }
    function x(v, S) {
      for (var E in v)
        f.call(v, E) && S(v[E], E, v);
    }
    function y(v) {
      return v == null ? m(v) : h.call(v).slice(8, -1);
    }
    function w(v, S) {
      var E = v != null ? typeof v[S] : "number";
      return !/^(?:boolean|number|string|undefined)$/.test(E) && (E == "object" ? !!v[S] : !0);
    }
    function T(v) {
      return String(v).replace(/([ -])(?!$)/g, "$1?");
    }
    function L(v, S) {
      var E = null;
      return g(v, function(I, R) {
        E = S(E, I, R, v);
      }), E;
    }
    function B(v) {
      return String(v).replace(/^ +| +$/g, "");
    }
    function k(v) {
      var S = s, E = v && typeof v == "object" && y(v) != "String";
      E && (S = v, v = null);
      var I = S.navigator || {}, R = I.userAgent || "";
      v || (v = R);
      var j = E || c == o, q = E ? !!I.likeChrome : /\bChrome\b/.test(v) && !/internal|\n/i.test(h.toString()), Y = "Object", X = E ? Y : "ScriptBridgingProxyObject", G = E ? Y : "Environment", Q = E && S.java ? "JavaPackage" : y(S.java), ge = E ? Y : "RuntimeObject", me = /\bJava/.test(Q) && S.java, be = me && y(S.environment) == G, xe = me ? "a" : "α", wt = me ? "b" : "β", Ne = S.document || {}, Le = S.operamini || S.opera, ot = u.test(ot = E && Le ? Le["[[Class]]"] : y(Le)) ? ot : Le = null, A, mt = v, ie = [], Ft = null, Ke = v == R, Z = Ke && Le && typeof Le.version == "function" && Le.version(), ln, ae = Cs([
        { label: "EdgeHTML", pattern: "Edge" },
        "Trident",
        { label: "WebKit", pattern: "AppleWebKit" },
        "iCab",
        "Presto",
        "NetFront",
        "Tasman",
        "KHTML",
        "Gecko"
      ]), V = Os([
        "Adobe AIR",
        "Arora",
        "Avant Browser",
        "Breach",
        "Camino",
        "Epiphany",
        "Fennec",
        "Flock",
        "Galeon",
        "GreenBrowser",
        "iCab",
        "Iceweasel",
        "K-Meleon",
        "Konqueror",
        "Lunascape",
        "Maxthon",
        { label: "Microsoft Edge", pattern: "Edge" },
        "Midori",
        "Nook Browser",
        "PaleMoon",
        "PhantomJS",
        "Raven",
        "Rekonq",
        "RockMelt",
        "SeaMonkey",
        { label: "Silk", pattern: "(?:Cloud9|Silk-Accelerated)" },
        "Sleipnir",
        "SlimBrowser",
        { label: "SRWare Iron", pattern: "Iron" },
        "Sunrise",
        "Swiftfox",
        "WebPositive",
        "Opera Mini",
        { label: "Opera Mini", pattern: "OPiOS" },
        "Opera",
        { label: "Opera", pattern: "OPR" },
        "Chrome",
        { label: "Chrome Mobile", pattern: "(?:CriOS|CrMo)" },
        { label: "Firefox", pattern: "(?:Firefox|Minefield)" },
        { label: "Firefox for iOS", pattern: "FxiOS" },
        { label: "IE", pattern: "IEMobile" },
        { label: "IE", pattern: "MSIE" },
        "Safari"
      ]), re = Un([
        { label: "BlackBerry", pattern: "BB10" },
        "BlackBerry",
        { label: "Galaxy S", pattern: "GT-I9000" },
        { label: "Galaxy S2", pattern: "GT-I9100" },
        { label: "Galaxy S3", pattern: "GT-I9300" },
        { label: "Galaxy S4", pattern: "GT-I9500" },
        "Google TV",
        "Lumia",
        "iPad",
        "iPod",
        "iPhone",
        "Kindle",
        { label: "Kindle Fire", pattern: "(?:Cloud9|Silk-Accelerated)" },
        "Nexus",
        "Nook",
        "PlayBook",
        "PlayStation 3",
        "PlayStation 4",
        "PlayStation Vita",
        "TouchPad",
        "Transformer",
        { label: "Wii U", pattern: "WiiU" },
        "Wii",
        "Xbox One",
        { label: "Xbox 360", pattern: "Xbox" },
        "Xoom"
      ]), Me = Es({
        Apple: { iPad: 1, iPhone: 1, iPod: 1 },
        Archos: {},
        Amazon: { Kindle: 1, "Kindle Fire": 1 },
        Asus: { Transformer: 1 },
        "Barnes & Noble": { Nook: 1 },
        BlackBerry: { PlayBook: 1 },
        Google: { "Google TV": 1, Nexus: 1 },
        HP: { TouchPad: 1 },
        HTC: {},
        LG: {},
        Microsoft: { Xbox: 1, "Xbox One": 1 },
        Motorola: { Xoom: 1 },
        Nintendo: { "Wii U": 1, Wii: 1 },
        Nokia: { Lumia: 1 },
        Samsung: { "Galaxy S": 1, "Galaxy S2": 1, "Galaxy S3": 1, "Galaxy S4": 1 },
        Sony: { "PlayStation 4": 1, "PlayStation 3": 1, "PlayStation Vita": 1 }
      }), W = Ts([
        "Windows Phone",
        "Android",
        "CentOS",
        { label: "Chrome OS", pattern: "CrOS" },
        "Debian",
        "Fedora",
        "FreeBSD",
        "Gentoo",
        "Haiku",
        "Kubuntu",
        "Linux Mint",
        "OpenBSD",
        "Red Hat",
        "SuSE",
        "Ubuntu",
        "Xubuntu",
        "Cygwin",
        "Symbian OS",
        "hpwOS",
        "webOS ",
        "webOS",
        "Tablet OS",
        "Linux",
        "Mac OS X",
        "Macintosh",
        "Mac",
        "Windows 98;",
        "Windows "
      ]);
      function Cs(Ee) {
        return L(Ee, function(de, oe) {
          return de || RegExp("\\b" + (oe.pattern || T(oe)) + "\\b", "i").exec(v) && (oe.label || oe);
        });
      }
      function Es(Ee) {
        return L(Ee, function(de, oe, Fe) {
          return de || (oe[re] || oe[/^[a-z]+(?: +[a-z]+\b)*/i.exec(re)] || RegExp("\\b" + T(Fe) + "(?:\\b|\\w*\\d)", "i").exec(v)) && Fe;
        });
      }
      function Os(Ee) {
        return L(Ee, function(de, oe) {
          return de || RegExp("\\b" + (oe.pattern || T(oe)) + "\\b", "i").exec(v) && (oe.label || oe);
        });
      }
      function Ts(Ee) {
        return L(Ee, function(de, oe) {
          var Fe = oe.pattern || T(oe);
          return !de && (de = RegExp("\\b" + Fe + "(?:/[\\d.]+|[ \\w.]*)", "i").exec(v)) && (de = p(de, Fe, oe.label || oe)), de;
        });
      }
      function Un(Ee) {
        return L(Ee, function(de, oe) {
          var Fe = oe.pattern || T(oe);
          return !de && (de = RegExp("\\b" + Fe + " *\\d+[.\\w_]*", "i").exec(v) || RegExp("\\b" + Fe + "(?:; *(?:[a-z]+[_-])?[a-z]+\\d+|[^ ();-]*)", "i").exec(v)) && ((de = String(oe.label && !RegExp(Fe, "i").test(oe.label) ? oe.label : de).split("/"))[1] && !/[\d.]+/.test(de[0]) && (de[0] += " " + de[1]), oe = oe.label || oe, de = _(de[0].replace(RegExp(Fe, "i"), oe).replace(RegExp("; *(?:" + oe + "[_-])?", "i"), " ").replace(RegExp("(" + oe + ")[-_.]?(\\w)", "i"), "$1 $2"))), de;
        });
      }
      function As(Ee) {
        return L(Ee, function(de, oe) {
          return de || (RegExp(oe + "(?:-[\\d.]+/|(?: for [\\w-]+)?[ /-])([\\d.]+[^ ();/_-]*)", "i").exec(v) || 0)[1] || null;
        });
      }
      function ks() {
        return this.description || "";
      }
      if (ae && (ae = [ae]), Me && !re && (re = Un([Me])), (A = /\bGoogle TV\b/.exec(re)) && (re = A[0]), /\bSimulator\b/i.test(v) && (re = (re ? re + " " : "") + "Simulator"), V == "Opera Mini" && /\bOPiOS\b/.test(v) && ie.push("running in Turbo/Uncompressed mode"), V == "IE" && /\blike iPhone OS\b/.test(v) ? (A = k(v.replace(/like iPhone OS/, "")), Me = A.manufacturer, re = A.product) : /^iP/.test(re) ? (V || (V = "Safari"), W = "iOS" + ((A = / OS ([\d_]+)/i.exec(v)) ? " " + A[1].replace(/_/g, ".") : "")) : V == "Konqueror" && !/buntu/i.test(W) ? W = "Kubuntu" : Me && Me != "Google" && (/Chrome/.test(V) && !/\bMobile Safari\b/i.test(v) || /\bVita\b/.test(re)) || /\bAndroid\b/.test(W) && /^Chrome/.test(V) && /\bVersion\//i.test(v) ? (V = "Android Browser", W = /\bAndroid\b/.test(W) ? W : "Android") : V == "Silk" ? (/\bMobi/i.test(v) || (W = "Android", ie.unshift("desktop mode")), /Accelerated *= *true/i.test(v) && ie.unshift("accelerated")) : V == "PaleMoon" && (A = /\bFirefox\/([\d.]+)\b/.exec(v)) ? ie.push("identifying as Firefox " + A[1]) : V == "Firefox" && (A = /\b(Mobile|Tablet|TV)\b/i.exec(v)) ? (W || (W = "Firefox OS"), re || (re = A[1])) : (!V || (A = !/\bMinefield\b/i.test(v) && /\b(?:Firefox|Safari)\b/.exec(V))) && (V && !re && /[\/,]|^[^(]+?\)/.test(v.slice(v.indexOf(A + "/") + 8)) && (V = null), (A = re || Me || W) && (re || Me || /\b(?:Android|Symbian OS|Tablet OS|webOS)\b/.test(W)) && (V = /[a-z]+(?: Hat)?/i.exec(/\bAndroid\b/.test(W) ? W : A) + " Browser")), Z || (Z = As([
        "(?:Cloud9|CriOS|CrMo|Edge|FxiOS|IEMobile|Iron|Opera ?Mini|OPiOS|OPR|Raven|Silk(?!/[\\d.]+$))",
        "Version",
        T(V),
        "(?:Firefox|Minefield|NetFront)"
      ])), (A = ae == "iCab" && parseFloat(Z) > 3 && "WebKit" || /\bOpera\b/.test(V) && (/\bOPR\b/.test(v) ? "Blink" : "Presto") || /\b(?:Midori|Nook|Safari)\b/i.test(v) && !/^(?:Trident|EdgeHTML)$/.test(ae) && "WebKit" || !ae && /\bMSIE\b/i.test(v) && (W == "Mac OS" ? "Tasman" : "Trident") || ae == "WebKit" && /\bPlayStation\b(?! Vita\b)/i.test(V) && "NetFront") && (ae = [A]), V == "IE" && (A = (/; *(?:XBLWP|ZuneWP)(\d+)/i.exec(v) || 0)[1]) ? (V += " Mobile", W = "Windows Phone " + (/\+$/.test(A) ? A : A + ".x"), ie.unshift("desktop mode")) : /\bWPDesktop\b/i.test(v) ? (V = "IE Mobile", W = "Windows Phone 8.x", ie.unshift("desktop mode"), Z || (Z = (/\brv:([\d.]+)/.exec(v) || 0)[1])) : V != "IE" && ae == "Trident" && (A = /\brv:([\d.]+)/.exec(v)) && (V && ie.push("identifying as " + V + (Z ? " " + Z : "")), V = "IE", Z = A[1]), Ke) {
        if (w(S, "global"))
          if (me && (A = me.lang.System, mt = A.getProperty("os.arch"), W = W || A.getProperty("os.name") + " " + A.getProperty("os.version")), j && w(S, "system") && (A = [S.system])[0]) {
            W || (W = A[0].os || null);
            try {
              A[1] = S.require("ringo/engine").version, Z = A[1].join("."), V = "RingoJS";
            } catch {
              A[0].global.system == S.system && (V = "Narwhal");
            }
          } else typeof S.process == "object" && !S.process.browser && (A = S.process) ? (V = "Node.js", mt = A.arch, W = A.platform, Z = /[\d.]+/.exec(A.version)[0]) : be && (V = "Rhino");
        else y(A = S.runtime) == X ? (V = "Adobe AIR", W = A.flash.system.Capabilities.os) : y(A = S.phantom) == ge ? (V = "PhantomJS", Z = (A = A.version || null) && A.major + "." + A.minor + "." + A.patch) : typeof Ne.documentMode == "number" && (A = /\bTrident\/(\d+)/i.exec(v)) && (Z = [Z, Ne.documentMode], (A = +A[1] + 4) != Z[1] && (ie.push("IE " + Z[1] + " mode"), ae && (ae[1] = ""), Z[1] = A), Z = V == "IE" ? String(Z[1].toFixed(1)) : Z[0]);
        W = W && _(W);
      }
      Z && (A = /(?:[ab]|dp|pre|[ab]\d+pre)(?:\d+\+?)?$/i.exec(Z) || /(?:alpha|beta)(?: ?\d)?/i.exec(v + ";" + (Ke && I.appMinorVersion)) || /\bMinefield\b/i.test(v) && "a") && (Ft = /b/i.test(A) ? "beta" : "alpha", Z = Z.replace(RegExp(A + "\\+?$"), "") + (Ft == "beta" ? wt : xe) + (/\d+\+?/.exec(A) || "")), V == "Fennec" || V == "Firefox" && /\b(?:Android|Firefox OS)\b/.test(W) ? V = "Firefox Mobile" : V == "Maxthon" && Z ? Z = Z.replace(/\.[\d.]+/, ".x") : /\bXbox\b/i.test(re) ? (W = null, re == "Xbox 360" && /\bIEMobile\b/.test(v) && ie.unshift("mobile mode")) : (/^(?:Chrome|IE|Opera)$/.test(V) || V && !re && !/Browser|Mobi/.test(V)) && (W == "Windows CE" || /Mobi/i.test(v)) ? V += " Mobile" : V == "IE" && Ke && S.external === null ? ie.unshift("platform preview") : (/\bBlackBerry\b/.test(re) || /\bBB10\b/.test(v)) && (A = (RegExp(re.replace(/ +/g, " *") + "/([.\\d]+)", "i").exec(v) || 0)[1] || Z) ? (A = [A, /BB10/.test(v)], W = (A[1] ? (re = null, Me = "BlackBerry") : "Device Software") + " " + A[0], Z = null) : this != x && re != "Wii" && (Ke && Le || /Opera/.test(V) && /\b(?:MSIE|Firefox)\b/i.test(v) || V == "Firefox" && /\bOS X (?:\d+\.){2,}/.test(W) || V == "IE" && (W && !/^Win/.test(W) && Z > 5.5 || /\bWindows XP\b/.test(W) && Z > 8 || Z == 8 && !/\bTrident\b/.test(v))) && !u.test(A = k.call(x, v.replace(u, "") + ";")) && A.name && (A = "ing as " + A.name + ((A = A.version) ? " " + A : ""), u.test(V) ? (/\bIE\b/.test(A) && W == "Mac OS" && (W = null), A = "identify" + A) : (A = "mask" + A, ot ? V = _(ot.replace(/([a-z])([A-Z])/g, "$1 $2")) : V = "Opera", /\bIE\b/.test(A) && (W = null), Ke || (Z = null)), ae = ["Presto"], ie.push(A)), (A = (/\bAppleWebKit\/([\d.]+\+?)/i.exec(v) || 0)[1]) && (A = [parseFloat(A.replace(/\.(\d)$/, ".0$1")), A], V == "Safari" && A[1].slice(-1) == "+" ? (V = "WebKit Nightly", Ft = "alpha", Z = A[1].slice(0, -1)) : (Z == A[1] || Z == (A[2] = (/\bSafari\/([\d.]+\+?)/i.exec(v) || 0)[1])) && (Z = null), A[1] = (/\bChrome\/([\d.]+)/i.exec(v) || 0)[1], A[0] == 537.36 && A[2] == 537.36 && parseFloat(A[1]) >= 28 && ae == "WebKit" && (ae = ["Blink"]), !Ke || !q && !A[1] ? (ae && (ae[1] = "like Safari"), A = (A = A[0], A < 400 ? 1 : A < 500 ? 2 : A < 526 ? 3 : A < 533 ? 4 : A < 534 ? "4+" : A < 535 ? 5 : A < 537 ? 6 : A < 538 ? 7 : A < 601 ? 8 : "8")) : (ae && (ae[1] = "like Chrome"), A = A[1] || (A = A[0], A < 530 ? 1 : A < 532 ? 2 : A < 532.05 ? 3 : A < 533 ? 4 : A < 534.03 ? 5 : A < 534.07 ? 6 : A < 534.1 ? 7 : A < 534.13 ? 8 : A < 534.16 ? 9 : A < 534.24 ? 10 : A < 534.3 ? 11 : A < 535.01 ? 12 : A < 535.02 ? "13+" : A < 535.07 ? 15 : A < 535.11 ? 16 : A < 535.19 ? 17 : A < 536.05 ? 18 : A < 536.1 ? 19 : A < 537.01 ? 20 : A < 537.11 ? "21+" : A < 537.13 ? 23 : A < 537.18 ? 24 : A < 537.24 ? 25 : A < 537.36 ? 26 : ae != "Blink" ? "27" : "28")), ae && (ae[1] += " " + (A += typeof A == "number" ? ".x" : /[.+]/.test(A) ? "" : "+")), V == "Safari" && (!Z || parseInt(Z) > 45) && (Z = A)), V == "Opera" && (A = /\bzbov|zvav$/.exec(W)) ? (V += " ", ie.unshift("desktop mode"), A == "zvav" ? (V += "Mini", Z = null) : V += "Mobile", W = W.replace(RegExp(" *" + A + "$"), "")) : V == "Safari" && /\bChrome\b/.exec(ae && ae[1]) && (ie.unshift("desktop mode"), V = "Chrome Mobile", Z = null, /\bOS X\b/.test(W) ? (Me = "Apple", W = "iOS 4.3+") : W = null), Z && Z.indexOf(A = /[\d.]+$/.exec(W)) == 0 && v.indexOf("/" + A + "-") > -1 && (W = B(W.replace(A, ""))), ae && !/\b(?:Avant|Nook)\b/.test(V) && (/Browser|Lunascape|Maxthon/.test(V) || V != "Safari" && /^iOS/.test(W) && /\bSafari\b/.test(ae[1]) || /^(?:Adobe|Arora|Breach|Midori|Opera|Phantom|Rekonq|Rock|Sleipnir|Web)/.test(V) && ae[1]) && (A = ae[ae.length - 1]) && ie.push(A), ie.length && (ie = ["(" + ie.join("; ") + ")"]), Me && re && re.indexOf(Me) < 0 && ie.push("on " + Me), re && ie.push((/^on /.test(ie[ie.length - 1]) ? "" : "on ") + re), W && (A = / ([\d.+]+)$/.exec(W), ln = A && W.charAt(W.length - A[0].length - 1) == "/", W = {
        architecture: 32,
        family: A && !ln ? W.replace(A[0], "") : W,
        version: A ? A[1] : null,
        toString: function() {
          var Ee = this.version;
          return this.family + (Ee && !ln ? " " + Ee : "") + (this.architecture == 64 ? " 64-bit" : "");
        }
      }), (A = /\b(?:AMD|IA|Win|WOW|x86_|x)64\b/i.exec(mt)) && !/\bi686\b/i.test(mt) ? (W && (W.architecture = 64, W.family = W.family.replace(RegExp(" *" + A), "")), V && (/\bWOW64\b/i.test(v) || Ke && /\w(?:86|32)$/.test(I.cpuClass || I.platform) && !/\bWin64; x64\b/i.test(v)) && ie.unshift("32-bit")) : W && /^OS X/.test(W.family) && V == "Chrome" && parseFloat(Z) >= 39 && (W.architecture = 64), v || (v = null);
      var we = {};
      return we.description = v, we.layout = ae && ae[0], we.manufacturer = Me, we.name = V, we.prerelease = Ft, we.product = re, we.ua = v, we.version = V && Z, we.os = W || {
        /**
         * The CPU architecture the OS is built for.
         *
         * @memberOf platform.os
         * @type number|null
         */
        architecture: null,
        /**
         * The family of the OS.
         *
         * Common values include:
         * "Windows", "Windows Server 2008 R2 / 7", "Windows Server 2008 / Vista",
         * "Windows XP", "OS X", "Ubuntu", "Debian", "Fedora", "Red Hat", "SuSE",
         * "Android", "iOS" and "Windows Phone"
         *
         * @memberOf platform.os
         * @type string|null
         */
        family: null,
        /**
         * The version of the OS.
         *
         * @memberOf platform.os
         * @type string|null
         */
        version: null,
        /**
         * Returns the OS string.
         *
         * @memberOf platform.os
         * @returns {string} The OS string.
         */
        toString: function() {
          return "null";
        }
      }, we.parse = k, we.toString = ks, we.version && ie.unshift(Z), we.name && ie.unshift(V), W && V && !(W == String(W).split(" ")[0] && (W == V.split(" ")[0] || re)) && ie.push(re ? "(" + W + ")" : "on " + W), ie.length && (we.description = ie.join(" ")), we;
    }
    var C = k();
    r && i ? x(C, function(v, S) {
      r[S] = v;
    }) : s.platform = C;
  }).call(Wn);
})(es, es.exports);
var Dd = es.exports;
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var n = Dd, s = o(n);
  function o(x) {
    return x && x.__esModule ? x : { default: x };
  }
  var r = JSON.parse(JSON.stringify(s.default)), i = r.os.family || "", a = i === "Android", l = i.slice(0, 7) === "Windows", u = i === "OS X", c = i === "iOS", d = r.layout === "Blink", f = r.layout === "Gecko", h = r.layout === "Trident", m = r.layout === "EdgeHTML", p = r.layout === "WebKit", g = parseFloat(r.version), _ = Math.floor(g);
  r.majorVersion = _, r.is = {
    // operating system
    ANDROID: a,
    WINDOWS: l,
    OSX: u,
    IOS: c,
    // layout
    BLINK: d,
    // "Chrome", "Chrome Mobile", "Opera"
    GECKO: f,
    // "Firefox"
    TRIDENT: h,
    // "Internet Explorer"
    EDGE: m,
    // "Microsoft Edge"
    WEBKIT: p,
    // "Safari"
    // INTERNET EXPLORERS
    IE9: h && _ === 9,
    IE10: h && _ === 10,
    IE11: h && _ === 11
  }, t.default = r, e.exports = t.default;
})(vr, vr.exports);
var qe = vr.exports;
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = function(l) {
    var u = r(), c = {};
    return Object.keys(l).map(function(d) {
      c[d] = i(u, l[d]);
    }), a(u), c;
  };
  var n = qe, s = o(n);
  function o(l) {
    return l && l.__esModule ? l : { default: l };
  }
  function r() {
    var l = {
      // remember what had focus to restore after test
      activeElement: document.activeElement,
      // remember scroll positions to restore after test
      windowScrollTop: window.scrollTop,
      windowScrollLeft: window.scrollLeft,
      bodyScrollTop: document.body.scrollTop,
      bodyScrollLeft: document.body.scrollLeft
    }, u = document.createElement("iframe");
    u.setAttribute("style", "position:absolute; position:fixed; top:0; left:-2px; width:1px; height:1px; overflow:hidden;"), u.setAttribute("aria-live", "off"), u.setAttribute("aria-busy", "true"), u.setAttribute("aria-hidden", "true"), document.body.appendChild(u);
    var c = u.contentWindow, d = c.document;
    d.open(), d.close();
    var f = d.createElement("div");
    return d.body.appendChild(f), l.iframe = u, l.wrapper = f, l.window = c, l.document = d, l;
  }
  function i(l, u) {
    l.wrapper.innerHTML = "";
    var c = typeof u.element == "string" ? l.document.createElement(u.element) : u.element(l.wrapper, l.document), d = u.mutate && u.mutate(c, l.wrapper, l.document);
    return !d && d !== !1 && (d = c), !c.parentNode && l.wrapper.appendChild(c), d && d.focus && d.focus(), u.validate ? u.validate(c, d, l.document) : l.document.activeElement === d;
  }
  function a(l) {
    l.activeElement === document.body ? (document.activeElement && document.activeElement.blur && document.activeElement.blur(), s.default.is.IE10 && document.body.focus()) : l.activeElement && l.activeElement.focus && l.activeElement.focus(), document.body.removeChild(l.iframe), window.scrollTop = l.windowScrollTop, window.scrollLeft = l.windowScrollLeft, document.body.scrollTop = l.bodyScrollTop, document.body.scrollLeft = l.bodyScrollLeft;
  }
  e.exports = t.default;
})(pr, pr.exports);
var Vd = pr.exports, gr = { exports: {} }, br = { exports: {} };
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var n = "1.4.1";
  t.default = n, e.exports = t.default;
})(br, br.exports);
var Wd = br.exports;
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var n = Wd, s = o(n);
  function o(c) {
    return c && c.__esModule ? c : { default: c };
  }
  function r(c) {
    var d = void 0;
    try {
      d = window.localStorage && window.localStorage.getItem(c), d = d ? JSON.parse(d) : {};
    } catch {
      d = {};
    }
    return d;
  }
  function i(c, d) {
    if (!document.hasFocus()) {
      try {
        window.localStorage && window.localStorage.removeItem(c);
      } catch {
      }
      return;
    }
    try {
      window.localStorage && window.localStorage.setItem(c, JSON.stringify(d));
    } catch {
    }
  }
  var a = typeof window < "u" && window.navigator.userAgent || "", l = "ally-supports-cache", u = r(l);
  (u.userAgent !== a || u.version !== s.default) && (u = {}), u.userAgent = a, u.version = s.default, t.default = {
    get: function() {
      return u;
    },
    set: function(c) {
      Object.keys(c).forEach(function(d) {
        u[d] = c[d];
      }), u.time = (/* @__PURE__ */ new Date()).toISOString(), i(l, u);
    }
  }, e.exports = t.default;
})(gr, gr.exports);
var qd = gr.exports, yr = { exports: {} };
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = function() {
    var n = void 0;
    try {
      document.querySelector("html >>> :first-child"), n = ">>>";
    } catch {
      try {
        document.querySelector("html /deep/ :first-child"), n = "/deep/";
      } catch {
        n = "";
      }
    }
    return n;
  }, e.exports = t.default;
})(yr, yr.exports);
var ll = yr.exports, xr = { exports: {} }, wr = { exports: {} };
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7", e.exports = t.default;
})(wr, wr.exports);
var xt = wr.exports;
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var n = xt, s = o(n);
  function o(r) {
    return r && r.__esModule ? r : { default: r };
  }
  t.default = {
    element: "div",
    mutate: function(r) {
      return r.innerHTML = '<map name="image-map-tabindex-test"><area shape="rect" coords="63,19,144,45"></map><img usemap="#image-map-tabindex-test" tabindex="-1" alt="" src="' + s.default + '">', r.querySelector("area");
    }
  }, e.exports = t.default;
})(xr, xr.exports);
var Kd = xr.exports, _r = { exports: {} };
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var n = xt, s = i(n), o = qe, r = i(o);
  function i(a) {
    return a && a.__esModule ? a : { default: a };
  }
  t.default = {
    element: "div",
    mutate: function(a) {
      return a.innerHTML = '<map name="image-map-tabindex-test"><area href="#void" tabindex="-1" shape="rect" coords="63,19,144,45"></map><img usemap="#image-map-tabindex-test" alt="" src="' + s.default + '">', !1;
    },
    validate: function(a, l, u) {
      if (r.default.is.GECKO)
        return !0;
      var c = a.querySelector("area");
      return c.focus(), u.activeElement === c;
    }
  }, e.exports = t.default;
})(_r, _r.exports);
var Gd = _r.exports, Sr = { exports: {} };
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var n = xt, s = i(n), o = qe, r = i(o);
  function i(a) {
    return a && a.__esModule ? a : { default: a };
  }
  t.default = {
    element: "div",
    mutate: function(a) {
      return a.innerHTML = '<map name="image-map-area-href-test"><area shape="rect" coords="63,19,144,45"></map><img usemap="#image-map-area-href-test" alt="" src="' + s.default + '">', a.querySelector("area");
    },
    validate: function(a, l, u) {
      return r.default.is.GECKO ? !0 : u.activeElement === l;
    }
  }, e.exports = t.default;
})(Sr, Sr.exports);
var Xd = Sr.exports, Cr = { exports: {} }, Er = { exports: {} };
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var n = xt, s = o(n);
  function o(r) {
    return r && r.__esModule ? r : { default: r };
  }
  t.default = s.default, e.exports = t.default;
})(Er, Er.exports);
var Yd = Er.exports;
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var n = Yd, s = o(n);
  function o(r) {
    return r && r.__esModule ? r : { default: r };
  }
  t.default = {
    name: "can-focus-audio-without-controls",
    element: "audio",
    mutate: function(r) {
      try {
        r.setAttribute("src", s.default);
      } catch {
      }
    }
  }, e.exports = t.default;
})(Cr, Cr.exports);
var Zd = Cr.exports, Or = { exports: {} }, Tr = { exports: {} };
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZ", e.exports = t.default;
})(Tr, Tr.exports);
var Jd = Tr.exports;
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var n = Jd, s = o(n);
  function o(r) {
    return r && r.__esModule ? r : { default: r };
  }
  t.default = {
    element: "div",
    mutate: function(r) {
      return r.innerHTML = '<map name="broken-image-map-test"><area href="#void" shape="rect" coords="63,19,144,45"></map><img usemap="#broken-image-map-test" alt="" src="' + s.default + '">', r.querySelector("area");
    }
  }, e.exports = t.default;
})(Or, Or.exports);
var Qd = Or.exports, Ar = { exports: {} };
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = {
    element: "div",
    mutate: function(n) {
      return n.setAttribute("tabindex", "-1"), n.setAttribute("style", "display: -webkit-flex; display: -ms-flexbox; display: flex;"), n.innerHTML = '<span style="display: block;">hello</span>', n.querySelector("span");
    }
  }, e.exports = t.default;
})(Ar, Ar.exports);
var ef = Ar.exports, kr = { exports: {} };
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = {
    element: "fieldset",
    mutate: function(n) {
      n.setAttribute("tabindex", 0), n.setAttribute("disabled", "disabled");
    }
  }, e.exports = t.default;
})(kr, kr.exports);
var tf = kr.exports, Mr = { exports: {} };
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = {
    element: "fieldset",
    mutate: function(n) {
      n.innerHTML = "<legend>legend</legend><p>content</p>";
    }
  }, e.exports = t.default;
})(Mr, Mr.exports);
var nf = Mr.exports, $r = { exports: {} };
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = {
    element: "span",
    mutate: function(n) {
      n.setAttribute("style", "display: -webkit-flex; display: -ms-flexbox; display: flex;"), n.innerHTML = '<span style="display: block;">hello</span>';
    }
  }, e.exports = t.default;
})($r, $r.exports);
var sf = $r.exports, Pr = { exports: {} };
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = {
    element: "form",
    mutate: function(n) {
      n.setAttribute("tabindex", 0), n.setAttribute("disabled", "disabled");
    }
  }, e.exports = t.default;
})(Pr, Pr.exports);
var rf = Pr.exports, Ir = { exports: {} };
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var n = xt, s = o(n);
  function o(r) {
    return r && r.__esModule ? r : { default: r };
  }
  t.default = {
    element: "a",
    mutate: function(r) {
      return r.href = "#void", r.innerHTML = '<img ismap src="' + s.default + '" alt="">', r.querySelector("img");
    }
  }, e.exports = t.default;
})(Ir, Ir.exports);
var of = Ir.exports, Lr = { exports: {} };
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var n = xt, s = o(n);
  function o(r) {
    return r && r.__esModule ? r : { default: r };
  }
  t.default = {
    element: "div",
    mutate: function(r) {
      return r.innerHTML = '<map name="image-map-tabindex-test"><area href="#void" shape="rect" coords="63,19,144,45"></map><img usemap="#image-map-tabindex-test" tabindex="-1" alt="" src="' + s.default + '">', r.querySelector("img");
    }
  }, e.exports = t.default;
})(Lr, Lr.exports);
var af = Lr.exports, jr = { exports: {} };
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = {
    element: function(n, s) {
      var o = s.createElement("iframe");
      n.appendChild(o);
      var r = o.contentWindow.document;
      return r.open(), r.close(), o;
    },
    mutate: function(n) {
      n.style.visibility = "hidden";
      var s = n.contentWindow.document, o = s.createElement("input");
      return s.body.appendChild(o), o;
    },
    validate: function(n) {
      var s = n.contentWindow.document, o = s.querySelector("input");
      return s.activeElement === o;
    }
  }, e.exports = t.default;
})(jr, jr.exports);
var lf = jr.exports, Rr = { exports: {} };
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = function() {
    return r;
  };
  var n = qe, s = o(n);
  function o(i) {
    return i && i.__esModule ? i : { default: i };
  }
  var r = !s.default.is.WEBKIT;
  e.exports = t.default;
})(Rr, Rr.exports);
var uf = Rr.exports, Br = { exports: {} };
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = {
    element: "div",
    mutate: function(n) {
      n.setAttribute("tabindex", "invalid-value");
    }
  }, e.exports = t.default;
})(Br, Br.exports);
var cf = Br.exports, Ur = { exports: {} };
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = {
    element: "label",
    mutate: function(n) {
      n.setAttribute("tabindex", "-1");
    },
    validate: function(n, s, o) {
      return n.offsetHeight, n.focus(), o.activeElement === n;
    }
  }, e.exports = t.default;
})(Ur, Ur.exports);
var df = Ur.exports, Fr = { exports: {} }, Nr = { exports: {} };
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBpZD0ic3ZnIj48dGV4dCB4PSIxMCIgeT0iMjAiIGlkPSJzdmctbGluay10ZXh0Ij50ZXh0PC90ZXh0Pjwvc3ZnPg==", e.exports = t.default;
})(Nr, Nr.exports);
var ul = Nr.exports;
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var n = ul, s = o(n);
  function o(r) {
    return r && r.__esModule ? r : { default: r };
  }
  t.default = {
    element: "object",
    mutate: function(r) {
      r.setAttribute("type", "image/svg+xml"), r.setAttribute("data", s.default), r.setAttribute("width", "200"), r.setAttribute("height", "50"), r.style.visibility = "hidden";
    }
  }, e.exports = t.default;
})(Fr, Fr.exports);
var ff = Fr.exports, zr = { exports: {} };
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var n = ul, s = i(n), o = qe, r = i(o);
  function i(a) {
    return a && a.__esModule ? a : { default: a };
  }
  t.default = {
    name: "can-focus-object-svg",
    element: "object",
    mutate: function(a) {
      a.setAttribute("type", "image/svg+xml"), a.setAttribute("data", s.default), a.setAttribute("width", "200"), a.setAttribute("height", "50");
    },
    validate: function(a, l, u) {
      return r.default.is.GECKO ? !0 : u.activeElement === a;
    }
  }, e.exports = t.default;
})(zr, zr.exports);
var hf = zr.exports, Hr = { exports: {} };
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = function() {
    return r;
  };
  var n = qe, s = o(n);
  function o(i) {
    return i && i.__esModule ? i : { default: i };
  }
  var r = !s.default.is.IE9;
  e.exports = t.default;
})(Hr, Hr.exports);
var mf = Hr.exports, Dr = { exports: {} };
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var n = xt, s = o(n);
  function o(r) {
    return r && r.__esModule ? r : { default: r };
  }
  t.default = {
    element: "div",
    mutate: function(r) {
      return r.innerHTML = '<map name="focus-redirect-img-usemap"><area href="#void" shape="rect" coords="63,19,144,45"></map><img usemap="#focus-redirect-img-usemap" alt="" src="' + s.default + '">', r.querySelector("img");
    },
    validate: function(r, i, a) {
      var l = r.querySelector("area");
      return a.activeElement === l;
    }
  }, e.exports = t.default;
})(Dr, Dr.exports);
var pf = Dr.exports, Vr = { exports: {} };
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = {
    element: "fieldset",
    mutate: function(n) {
      return n.innerHTML = '<legend>legend</legend><input tabindex="-1"><input tabindex="0">', !1;
    },
    validate: function(n, s, o) {
      var r = n.querySelector('input[tabindex="-1"]'), i = n.querySelector('input[tabindex="0"]');
      return n.focus(), n.querySelector("legend").focus(), o.activeElement === r && "focusable" || o.activeElement === i && "tabbable" || "";
    }
  }, e.exports = t.default;
})(Vr, Vr.exports);
var vf = Vr.exports, Wr = { exports: {} };
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = {
    element: "div",
    mutate: function(n) {
      return n.setAttribute("style", "width: 100px; height: 50px; overflow: auto;"), n.innerHTML = '<div style="width: 500px; height: 40px;">scrollable content</div>', n.querySelector("div");
    }
  }, e.exports = t.default;
})(Wr, Wr.exports);
var gf = Wr.exports, qr = { exports: {} };
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = {
    element: "div",
    mutate: function(n) {
      n.setAttribute("style", "width: 100px; height: 50px;"), n.innerHTML = '<div style="width: 500px; height: 40px;">scrollable content</div>';
    }
  }, e.exports = t.default;
})(qr, qr.exports);
var bf = qr.exports, Kr = { exports: {} };
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = {
    element: "div",
    mutate: function(n) {
      n.setAttribute("style", "width: 100px; height: 50px; overflow: auto;"), n.innerHTML = '<div style="width: 500px; height: 40px;">scrollable content</div>';
    }
  }, e.exports = t.default;
})(Kr, Kr.exports);
var yf = Kr.exports, Gr = { exports: {} };
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = {
    element: "details",
    mutate: function(n) {
      return n.innerHTML = "<summary>foo</summary><p>content</p>", n.firstElementChild;
    }
  }, e.exports = t.default;
})(Gr, Gr.exports);
var xf = Gr.exports, Xr = { exports: {} }, nt = {}, Yr = { exports: {} };
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = function(s) {
    var o = s.ownerSVGElement || s.nodeName.toLowerCase() === "svg";
    if (!o)
      return !1;
    var r = n();
    s.appendChild(r);
    var i = r.querySelector("input");
    return i.focus(), i.disabled = !0, s.removeChild(r), !0;
  };
  function n() {
    var s = document.createElement("div");
    return s.innerHTML = `<svg><foreignObject width="30" height="30">
      <input type="text"/>
  </foreignObject></svg>`, s.firstChild.firstChild;
  }
  e.exports = t.default;
})(Yr, Yr.exports);
var wf = Yr.exports;
Object.defineProperty(nt, "__esModule", {
  value: !0
});
nt.generate = Ef;
nt.focus = cl;
nt.validate = Of;
var _f = wf, Sf = Cf(_f);
function Cf(e) {
  return e && e.__esModule ? e : { default: e };
}
function Ef(e) {
  return '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">' + e + "</svg>";
}
function cl(e) {
  if (!e.focus)
    try {
      HTMLElement.prototype.focus.call(e);
    } catch {
      (0, Sf.default)(e);
    }
}
function Of(e, t, n) {
  return cl(t), n.activeElement === t;
}
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var n = nt;
  t.default = {
    element: "div",
    mutate: function(s) {
      return s.innerHTML = (0, n.generate)('<text focusable="true">a</text>'), s.querySelector("text");
    },
    validate: n.validate
  }, e.exports = t.default;
})(Xr, Xr.exports);
var Tf = Xr.exports, Zr = { exports: {} };
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var n = nt;
  t.default = {
    element: "div",
    mutate: function(s) {
      return s.innerHTML = (0, n.generate)('<text tabindex="0">a</text>'), s.querySelector("text");
    },
    validate: n.validate
  }, e.exports = t.default;
})(Zr, Zr.exports);
var Af = Zr.exports, Jr = { exports: {} };
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var n = nt;
  t.default = {
    element: "div",
    mutate: function(s) {
      return s.innerHTML = (0, n.generate)('<text tabindex="-1">a</text>'), s.querySelector("text");
    },
    validate: n.validate
  }, e.exports = t.default;
})(Jr, Jr.exports);
var kf = Jr.exports, Qr = { exports: {} };
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var n = nt;
  t.default = {
    element: "div",
    mutate: function(s) {
      return s.innerHTML = (0, n.generate)(['<g id="ally-test-target"><a xlink:href="#void"><text>link</text></a></g>', '<use xlink:href="#ally-test-target" x="0" y="0" tabindex="-1" />'].join("")), s.querySelector("use");
    },
    validate: n.validate
  }, e.exports = t.default;
})(Qr, Qr.exports);
var Mf = Qr.exports, eo = { exports: {} };
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var n = nt;
  t.default = {
    element: "div",
    mutate: function(s) {
      return s.innerHTML = (0, n.generate)('<foreignObject tabindex="-1"><input type="text" /></foreignObject>'), s.querySelector("foreignObject") || s.getElementsByTagName("foreignObject")[0];
    },
    validate: n.validate
  }, e.exports = t.default;
})(eo, eo.exports);
var $f = eo.exports, to = { exports: {} };
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = function() {
    return r;
  };
  var n = qe, s = o(n);
  function o(i) {
    return i && i.__esModule ? i : { default: i };
  }
  var r = !!(s.default.is.GECKO && typeof SVGElement < "u" && SVGElement.prototype.focus);
  e.exports = t.default;
})(to, to.exports);
var Pf = to.exports, no = { exports: {} };
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var n = nt;
  t.default = {
    element: "div",
    mutate: function(s) {
      return s.innerHTML = (0, n.generate)(""), s.firstChild;
    },
    validate: n.validate
  }, e.exports = t.default;
})(no, no.exports);
var If = no.exports, so = { exports: {} };
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = {
    element: "div",
    mutate: function(n) {
      n.setAttribute("tabindex", "3x");
    }
  }, e.exports = t.default;
})(so, so.exports);
var Lf = so.exports, ro = { exports: {} };
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = {
    element: "table",
    mutate: function(n, s, o) {
      var r = o.createDocumentFragment();
      r.innerHTML = "<tr><td>cell</td></tr>", n.appendChild(r);
    }
  }, e.exports = t.default;
})(ro, ro.exports);
var jf = ro.exports, oo = { exports: {} }, io = { exports: {} };
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var n = xt, s = o(n);
  function o(r) {
    return r && r.__esModule ? r : { default: r };
  }
  t.default = s.default, e.exports = t.default;
})(io, io.exports);
var Rf = io.exports;
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var n = Rf, s = o(n);
  function o(r) {
    return r && r.__esModule ? r : { default: r };
  }
  t.default = {
    element: "video",
    mutate: function(r) {
      try {
        r.setAttribute("src", s.default);
      } catch {
      }
    }
  }, e.exports = t.default;
})(oo, oo.exports);
var Bf = oo.exports, ao = { exports: {} };
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = function() {
    return r;
  };
  var n = qe, s = o(n);
  function o(i) {
    return i && i.__esModule ? i : { default: i };
  }
  var r = s.default.is.GECKO || s.default.is.TRIDENT || s.default.is.EDGE;
  e.exports = t.default;
})(ao, ao.exports);
var Uf = ao.exports;
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = function() {
    return un || (un = r.default.get(), un.time || (r.default.set(yu()), un = r.default.get()), un);
  };
  var n = Vd, s = ne(n), o = qd, r = ne(o), i = ll, a = ne(i), l = Kd, u = ne(l), c = Gd, d = ne(c), f = Xd, h = ne(f), m = Zd, p = ne(m), g = Qd, _ = ne(g), x = ef, y = ne(x), w = tf, T = ne(w), L = nf, B = ne(L), k = sf, C = ne(k), v = rf, S = ne(v), E = of, I = ne(E), R = af, j = ne(R), q = lf, Y = ne(q), X = uf, G = ne(X), Q = cf, ge = ne(Q), me = df, be = ne(me), xe = ff, wt = ne(xe), Ne = hf, Le = ne(Ne), ot = mf, A = ne(ot), mt = pf, ie = ne(mt), Ft = vf, Ke = ne(Ft), Z = gf, ln = ne(Z), ae = bf, V = ne(ae), re = yf, Me = ne(re), W = xf, Cs = ne(W), Es = Tf, Os = ne(Es), Ts = Af, Un = ne(Ts), As = kf, ks = ne(As), we = Mf, Ee = ne(we), de = $f, oe = ne(de), Fe = Pf, au = ne(Fe), lu = If, uu = ne(lu), cu = Lf, du = ne(cu), fu = jf, hu = ne(fu), mu = Bf, pu = ne(mu), vu = Uf, gu = ne(vu);
  function ne(_t) {
    return _t && _t.__esModule ? _t : { default: _t };
  }
  var Mi = {
    cssShadowPiercingDeepCombinator: a.default,
    focusInZeroDimensionObject: G.default,
    focusObjectSwf: A.default,
    focusSvgInIframe: au.default,
    tabsequenceAreaAtImgPosition: gu.default
  }, bu = {
    focusAreaImgTabindex: u.default,
    focusAreaTabindex: d.default,
    focusAreaWithoutHref: h.default,
    focusAudioWithoutControls: p.default,
    focusBrokenImageMap: _.default,
    focusChildrenOfFocusableFlexbox: y.default,
    focusFieldsetDisabled: T.default,
    focusFieldset: B.default,
    focusFlexboxContainer: C.default,
    focusFormDisabled: S.default,
    focusImgIsmap: I.default,
    focusImgUsemapTabindex: j.default,
    focusInHiddenIframe: Y.default,
    focusInvalidTabindex: ge.default,
    focusLabelTabindex: be.default,
    focusObjectSvg: Le.default,
    focusObjectSvgHidden: wt.default,
    focusRedirectImgUsemap: ie.default,
    focusRedirectLegend: Ke.default,
    focusScrollBody: ln.default,
    focusScrollContainerWithoutOverflow: V.default,
    focusScrollContainer: Me.default,
    focusSummary: Cs.default,
    focusSvgFocusableAttribute: Os.default,
    focusSvgTabindexAttribute: Un.default,
    focusSvgNegativeTabindexAttribute: ks.default,
    focusSvgUseTabindex: Ee.default,
    focusSvgForeignobjectTabindex: oe.default,
    focusSvg: uu.default,
    focusTabindexTrailingCharacters: du.default,
    focusTable: hu.default,
    focusVideoWithoutControls: pu.default
  };
  function yu() {
    var _t = (0, s.default)(bu);
    return Object.keys(Mi).forEach(function($i) {
      _t[$i] = Mi[$i]();
    }), _t;
  }
  var un = null;
  e.exports = t.default;
})(mr, mr.exports);
var st = mr.exports;
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = function(c) {
    a || (a = (0, r.default)());
    var d = a.focusTabindexTrailingCharacters ? u : l, f = (0, s.default)({
      label: "is/valid-tabindex",
      resolveDocument: !0,
      context: c
    }), h = f.hasAttribute("tabindex"), m = f.hasAttribute("tabIndex");
    if (!h && !m)
      return !1;
    var p = f.ownerSVGElement || f.nodeName.toLowerCase() === "svg";
    if (p && !a.focusSvgTabindexAttribute)
      return !1;
    if (a.focusInvalidTabindex)
      return !0;
    var g = f.getAttribute(h ? "tabindex" : "tabIndex");
    return g === "-32768" ? !1 : !!(g && d.test(g));
  };
  var n = Ce, s = i(n), o = st, r = i(o);
  function i(c) {
    return c && c.__esModule ? c : { default: c };
  }
  var a = void 0, l = /^\s*(-|\+)?[0-9]+\s*$/, u = /^\s*(-|\+)?[0-9]+.*$/;
  e.exports = t.default;
})(hr, hr.exports);
var dl = hr.exports;
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = function(r) {
    if (!(0, s.default)(r))
      return null;
    var i = r.hasAttribute("tabindex"), a = i ? "tabindex" : "tabIndex", l = parseInt(r.getAttribute(a), 10);
    return isNaN(l) ? -1 : l;
  };
  var n = dl, s = o(n);
  function o(r) {
    return r && r.__esModule ? r : { default: r };
  }
  e.exports = t.default;
})(fr, fr.exports);
var Pt = fr.exports, It = {};
Object.defineProperty(It, "__esModule", {
  value: !0
});
It.isUserModifyWritable = Ff;
It.hasCssOverflowScroll = fl;
It.hasCssDisplayFlex = Nf;
It.isScrollableContainer = zf;
function Ff(e) {
  var t = e.webkitUserModify || "";
  return !!(t && t.indexOf("write") !== -1);
}
function fl(e) {
  return [e.getPropertyValue("overflow"), e.getPropertyValue("overflow-x"), e.getPropertyValue("overflow-y")].some(function(t) {
    return t === "auto" || t === "scroll";
  });
}
function Nf(e) {
  return e.display.indexOf("flex") > -1;
}
function zf(e, t, n, s) {
  return t !== "div" && t !== "span" || n && n !== "div" && n !== "span" && !fl(s) ? !1 : e.offsetHeight < e.scrollHeight || e.offsetWidth < e.scrollWidth;
}
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var n = Ln, s = p(n), o = Ce, r = p(o), i = al, a = p(i), l = Pt, u = p(l), c = dl, d = p(c), f = It, h = st, m = p(h);
  function p(y) {
    return y && y.__esModule ? y : { default: y };
  }
  var g = void 0;
  function _() {
    var y = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, w = y.context, T = y.except, L = T === void 0 ? {
      flexbox: !1,
      scrollable: !1,
      shadow: !1
    } : T;
    g || (g = (0, m.default)());
    var B = (0, r.default)({
      label: "is/focus-relevant",
      resolveDocument: !0,
      context: w
    });
    if (!L.shadow && B.shadowRoot)
      return !0;
    var k = B.nodeName.toLowerCase();
    if (k === "input" && B.type === "hidden")
      return !1;
    if (k === "input" || k === "select" || k === "button" || k === "textarea" || k === "legend" && g.focusRedirectLegend || k === "label" || k === "area" || k === "a" && B.hasAttribute("href"))
      return !0;
    if (k === "object" && B.hasAttribute("usemap"))
      return !1;
    if (k === "object") {
      var C = B.getAttribute("type");
      if (!g.focusObjectSvg && C === "image/svg+xml" || !g.focusObjectSwf && C === "application/x-shockwave-flash")
        return !1;
    }
    if (k === "iframe" || k === "object" || k === "embed" || k === "keygen" || B.hasAttribute("contenteditable") || k === "audio" && (g.focusAudioWithoutControls || B.hasAttribute("controls")) || k === "video" && (g.focusVideoWithoutControls || B.hasAttribute("controls")) || g.focusSummary && k === "summary")
      return !0;
    var v = (0, d.default)(B);
    if (k === "img" && B.hasAttribute("usemap"))
      return v && g.focusImgUsemapTabindex || g.focusRedirectImgUsemap;
    if (g.focusTable && (k === "table" || k === "td") || g.focusFieldset && k === "fieldset")
      return !0;
    var S = k === "svg", E = B.ownerSVGElement, I = B.getAttribute("focusable"), R = (0, u.default)(B);
    if (k === "use" && R !== null && !g.focusSvgUseTabindex)
      return !1;
    if (k === "foreignobject")
      return R !== null && g.focusSvgForeignobjectTabindex;
    if ((0, a.default)(B, "svg a") && B.hasAttribute("xlink:href"))
      return !0;
    if ((S || E) && B.focus && !g.focusSvgNegativeTabindexAttribute && R < 0)
      return !1;
    if (S)
      return v || g.focusSvg || g.focusSvgInIframe || !!(g.focusSvgFocusableAttribute && I && I === "true");
    if (E) {
      if (g.focusSvgTabindexAttribute && v)
        return !0;
      if (g.focusSvgFocusableAttribute)
        return I === "true";
    }
    if (v)
      return !0;
    var j = window.getComputedStyle(B, null);
    if ((0, f.isUserModifyWritable)(j))
      return !0;
    if (g.focusImgIsmap && k === "img" && B.hasAttribute("ismap")) {
      var q = (0, s.default)({ context: B }).some(function(Q) {
        return Q.nodeName.toLowerCase() === "a" && Q.hasAttribute("href");
      });
      if (q)
        return !0;
    }
    if (!L.scrollable && g.focusScrollContainer) {
      if (g.focusScrollContainerWithoutOverflow) {
        if ((0, f.isScrollableContainer)(B, k))
          return !0;
      } else if ((0, f.hasCssOverflowScroll)(j))
        return !0;
    }
    if (!L.flexbox && g.focusFlexboxContainer && (0, f.hasCssDisplayFlex)(j))
      return !0;
    var Y = B.parentElement;
    if (!L.scrollable && Y) {
      var X = Y.nodeName.toLowerCase(), G = window.getComputedStyle(Y, null);
      if (g.focusScrollBody && (0, f.isScrollableContainer)(Y, k, X, G) || g.focusChildrenOfFocusableFlexbox && (0, f.hasCssDisplayFlex)(G))
        return !0;
    }
    return !1;
  }
  _.except = function() {
    var y = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, w = function(T) {
      return _({
        context: T,
        except: y
      });
    };
    return w.rules = _, w;
  };
  var x = _.except({});
  t.default = x, e.exports = t.default;
})(ur, ur.exports);
var pi = ur.exports, lo = { exports: {} }, uo = { exports: {} }, co = { exports: {} };
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = n;
  function n(s, o) {
    if (s.findIndex)
      return s.findIndex(o);
    var r = s.length;
    if (r === 0)
      return -1;
    for (var i = 0; i < r; i++)
      if (o(s[i], i, s))
        return i;
    return -1;
  }
  e.exports = t.default;
})(co, co.exports);
var hl = co.exports, fo = { exports: {} }, ho = { exports: {} };
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = function(n) {
    try {
      return n.contentDocument || n.contentWindow && n.contentWindow.document || n.getSVGDocument && n.getSVGDocument() || null;
    } catch {
      return null;
    }
  }, e.exports = t.default;
})(ho, ho.exports);
var Hf = ho.exports, mo = { exports: {} }, po = { exports: {} };
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = function(n) {
    return n ? n.nodeType === Node.DOCUMENT_NODE ? n : n.ownerDocument || document : document;
  }, e.exports = t.default;
})(po, po.exports);
var Lt = po.exports;
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = function(r) {
    var i = (0, s.default)(r);
    return i.defaultView || window;
  };
  var n = Lt, s = o(n);
  function o(r) {
    return r && r.__esModule ? r : { default: r };
  }
  e.exports = t.default;
})(mo, mo.exports);
var Df = mo.exports, vo = { exports: {} };
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = function(i) {
    if (typeof r != "string") {
      var a = (0, s.default)();
      a && (r = ", html " + a + " ");
    }
    return r ? i + r + i.replace(/\s*,\s*/g, ",").split(",").join(r) : i;
  };
  var n = ll, s = o(n);
  function o(i) {
    return i && i.__esModule ? i : { default: i };
  }
  var r = void 0;
  e.exports = t.default;
})(vo, vo.exports);
var ml = vo.exports;
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = d;
  var n = Hf, s = l(n), o = Df, r = l(o), i = ml, a = l(i);
  function l(f) {
    return f && f.__esModule ? f : { default: f };
  }
  var u = void 0;
  function c(f) {
    if (u || (u = (0, a.default)("object, iframe")), f._frameElement !== void 0)
      return f._frameElement;
    f._frameElement = null;
    var h = f.parent.document.querySelectorAll(u);
    return [].some.call(h, function(m) {
      var p = (0, s.default)(m);
      return p !== f.document ? !1 : (f._frameElement = m, !0);
    }), f._frameElement;
  }
  function d(f) {
    var h = (0, r.default)(f);
    if (!h.parent || h.parent === h)
      return null;
    try {
      return h.frameElement || c(h);
    } catch {
      return null;
    }
  }
  e.exports = t.default;
})(fo, fo.exports);
var ps = fo.exports;
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var n = hl, s = c(n), o = Ln, r = c(o), i = Ce, a = c(i), l = ps, u = c(l);
  function c(x) {
    return x && x.__esModule ? x : { default: x };
  }
  var d = /^(area)$/;
  function f(x, y) {
    return window.getComputedStyle(x, null).getPropertyValue(y);
  }
  function h(x) {
    return x.some(function(y) {
      return f(y, "display") === "none";
    });
  }
  function m(x) {
    var y = (0, s.default)(x, function(T) {
      var L = f(T, "visibility");
      return L === "hidden" || L === "collapse";
    });
    if (y === -1)
      return !1;
    var w = (0, s.default)(x, function(T) {
      return f(T, "visibility") === "visible";
    });
    return w === -1 || y < w;
  }
  function p(x) {
    var y = 1;
    return x[0].nodeName.toLowerCase() === "summary" && (y = 2), x.slice(y).some(function(w) {
      return w.nodeName.toLowerCase() === "details" && w.open === !1;
    });
  }
  function g() {
    var x = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, y = x.context, w = x.except, T = w === void 0 ? {
      notRendered: !1,
      cssDisplay: !1,
      cssVisibility: !1,
      detailsElement: !1,
      browsingContext: !1
    } : w, L = (0, a.default)({
      label: "is/visible",
      resolveDocument: !0,
      context: y
    }), B = L.nodeName.toLowerCase();
    if (!T.notRendered && d.test(B))
      return !0;
    var k = (0, r.default)({ context: L }), C = B === "audio" && !L.hasAttribute("controls");
    if (!T.cssDisplay && h(C ? k.slice(1) : k) || !T.cssVisibility && m(k) || !T.detailsElement && p(k))
      return !1;
    if (!T.browsingContext) {
      var v = (0, u.default)(L), S = g.except(T);
      if (v && !S(v))
        return !1;
    }
    return !0;
  }
  g.except = function() {
    var x = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, y = function(w) {
      return g({
        context: w,
        except: x
      });
    };
    return y.rules = g, y;
  };
  var _ = g.except({});
  t.default = _, e.exports = t.default;
})(uo, uo.exports);
var vs = uo.exports, jt = {}, pl = { exports: {} };
/*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
(function(e, t) {
  (function(n, s) {
    e.exports = s(n);
  })(Wn, function(n) {
    if (n.CSS && n.CSS.escape)
      return n.CSS.escape;
    var s = function(o) {
      if (arguments.length == 0)
        throw new TypeError("`CSS.escape` requires an argument.");
      for (var r = String(o), i = r.length, a = -1, l, u = "", c = r.charCodeAt(0); ++a < i; ) {
        if (l = r.charCodeAt(a), l == 0) {
          u += "�";
          continue;
        }
        if (
          // If the character is in the range [\1-\1F] (U+0001 to U+001F) or is
          // U+007F, […]
          l >= 1 && l <= 31 || l == 127 || // If the character is the first character and is in the range [0-9]
          // (U+0030 to U+0039), […]
          a == 0 && l >= 48 && l <= 57 || // If the character is the second character and is in the range [0-9]
          // (U+0030 to U+0039) and the first character is a `-` (U+002D), […]
          a == 1 && l >= 48 && l <= 57 && c == 45
        ) {
          u += "\\" + l.toString(16) + " ";
          continue;
        }
        if (
          // If the character is the first character and is a `-` (U+002D), and
          // there is no second character, […]
          a == 0 && i == 1 && l == 45
        ) {
          u += "\\" + r.charAt(a);
          continue;
        }
        if (l >= 128 || l == 45 || l == 95 || l >= 48 && l <= 57 || l >= 65 && l <= 90 || l >= 97 && l <= 122) {
          u += r.charAt(a);
          continue;
        }
        u += "\\" + r.charAt(a);
      }
      return u;
    };
    return n.CSS || (n.CSS = {}), n.CSS.escape = s, s;
  });
})(pl);
var Vf = pl.exports;
Object.defineProperty(jt, "__esModule", {
  value: !0
});
jt.getMapByName = yl;
jt.getMapOfImage = Kf;
jt.getImageOfArea = Gf;
var Wf = Vf, vl = bl(Wf), qf = Lt, gl = bl(qf);
function bl(e) {
  return e && e.__esModule ? e : { default: e };
}
function yl(e, t) {
  var n = t.querySelector('map[name="' + (0, vl.default)(e) + '"]');
  return n || null;
}
function Kf(e) {
  var t = e.getAttribute("usemap");
  if (!t)
    return null;
  var n = (0, gl.default)(e);
  return yl(t.slice(1), n);
}
function Gf(e) {
  var t = e.parentElement;
  if (!t.name || t.nodeName.toLowerCase() !== "map")
    return null;
  var n = (0, gl.default)(e);
  return n.querySelector('img[usemap="#' + (0, vl.default)(t.name) + '"]') || null;
}
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = function(h) {
    f || (f = (0, c.default)());
    var m = (0, s.default)({
      label: "is/valid-area",
      context: h
    }), p = m.nodeName.toLowerCase();
    if (p !== "area")
      return !1;
    var g = m.hasAttribute("tabindex");
    if (!f.focusAreaTabindex && g)
      return !1;
    var _ = (0, l.getImageOfArea)(m);
    if (!_ || !(0, r.default)(_) || !f.focusBrokenImageMap && (!_.complete || !_.naturalHeight || _.offsetWidth <= 0 || _.offsetHeight <= 0))
      return !1;
    if (!f.focusAreaWithoutHref && !m.href)
      return f.focusAreaTabindex && g || f.focusAreaImgTabindex && _.hasAttribute("tabindex");
    var x = (0, a.default)({ context: _ }).slice(1).some(function(y) {
      var w = y.nodeName.toLowerCase();
      return w === "button" || w === "a";
    });
    return !x;
  };
  var n = Ce, s = d(n), o = vs, r = d(o), i = Ln, a = d(i), l = jt, u = st, c = d(u);
  function d(h) {
    return h && h.__esModule ? h : { default: h };
  }
  var f = void 0;
  e.exports = t.default;
})(lo, lo.exports);
var Xf = lo.exports, go = { exports: {} }, bo = { exports: {} };
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = function(c) {
    a || (a = (0, r.default)(), a.focusFieldsetDisabled && delete u.fieldset, a.focusFormDisabled && delete u.form, l = new RegExp("^(" + Object.keys(u).join("|") + ")$"));
    var d = (0, s.default)({
      label: "is/native-disabled-supported",
      context: c
    }), f = d.nodeName.toLowerCase();
    return !!l.test(f);
  };
  var n = Ce, s = i(n), o = st, r = i(o);
  function i(c) {
    return c && c.__esModule ? c : { default: c };
  }
  var a = void 0, l = void 0, u = {
    input: !0,
    select: !0,
    textarea: !0,
    button: !0,
    fieldset: !0,
    form: !0
  };
  e.exports = t.default;
})(bo, bo.exports);
var xl = bo.exports;
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = function(m) {
    d || (d = (0, u.default)());
    var p = (0, s.default)({
      label: "is/disabled",
      context: m
    });
    if (p.hasAttribute("data-ally-disabled"))
      return !0;
    if (!(0, a.default)(p))
      return !1;
    if (p.disabled)
      return !0;
    var g = (0, r.default)({ context: p });
    return !!(g.some(f) || !d.focusFormDisabled && g.some(h));
  };
  var n = Ce, s = c(n), o = Ln, r = c(o), i = xl, a = c(i), l = st, u = c(l);
  function c(m) {
    return m && m.__esModule ? m : { default: m };
  }
  var d = void 0;
  function f(m) {
    var p = m.nodeName.toLowerCase();
    return p === "fieldset" && m.disabled;
  }
  function h(m) {
    var p = m.nodeName.toLowerCase();
    return p === "form" && m.disabled;
  }
  e.exports = t.default;
})(go, go.exports);
var Yf = go.exports, yo = { exports: {} };
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var n = vs, s = f(n), o = Ce, r = f(o), i = ps, a = f(i), l = Pt, u = f(l), c = qe, d = f(c);
  function f(p) {
    return p && p.__esModule ? p : { default: p };
  }
  function h() {
    var p = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, g = p.context, _ = p.except, x = _ === void 0 ? {
      onlyFocusableBrowsingContext: !1,
      visible: !1
    } : _, y = (0, r.default)({
      label: "is/only-tabbable",
      resolveDocument: !0,
      context: g
    });
    if (!x.visible && !(0, s.default)(y))
      return !1;
    if (!x.onlyFocusableBrowsingContext && (d.default.is.GECKO || d.default.is.TRIDENT || d.default.is.EDGE)) {
      var w = (0, a.default)(y);
      if (w && (0, u.default)(w) < 0)
        return !1;
    }
    var T = y.nodeName.toLowerCase(), L = (0, u.default)(y);
    return T === "label" && d.default.is.GECKO ? L !== null && L >= 0 : !!(d.default.is.GECKO && y.ownerSVGElement && !y.focus && T === "a" && y.hasAttribute("xlink:href") && d.default.is.GECKO);
  }
  h.except = function() {
    var p = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, g = function(_) {
      return h({
        context: _,
        except: p
      });
    };
    return g.rules = h, g;
  };
  var m = h.except({});
  t.default = m, e.exports = t.default;
})(yo, yo.exports);
var Zf = yo.exports;
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var n = pi, s = w(n), o = Xf, r = w(o), i = vs, a = w(i), l = Yf, u = w(l), c = Zf, d = w(c), f = Ce, h = w(f), m = ps, p = w(m), g = Pt, _ = w(g), x = st, y = w(x);
  function w(C) {
    return C && C.__esModule ? C : { default: C };
  }
  var T = void 0;
  function L(C) {
    var v = C.nodeName.toLowerCase();
    if (v === "embed" || v === "keygen")
      return !0;
    var S = (0, _.default)(C);
    if (C.shadowRoot && S === null)
      return !0;
    if (v === "label")
      return !T.focusLabelTabindex || S === null;
    if (v === "legend")
      return S === null;
    if (T.focusSvgFocusableAttribute && (C.ownerSVGElement || v === "svg")) {
      var E = C.getAttribute("focusable");
      return E && E === "false";
    }
    return v === "img" && C.hasAttribute("usemap") ? S === null || !T.focusImgUsemapTabindex : v === "area" ? !(0, r.default)(C) : !1;
  }
  function B() {
    var C = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, v = C.context, S = C.except, E = S === void 0 ? {
      disabled: !1,
      visible: !1,
      onlyTabbable: !1
    } : S;
    T || (T = (0, y.default)());
    var I = d.default.rules.except({
      onlyFocusableBrowsingContext: !0,
      visible: E.visible
    }), R = (0, h.default)({
      label: "is/focusable",
      resolveDocument: !0,
      context: v
    }), j = s.default.rules({
      context: R,
      except: E
    });
    if (!j || L(R) || !E.disabled && (0, u.default)(R) || !E.onlyTabbable && I(R))
      return !1;
    if (!E.visible) {
      var q = {
        context: R,
        except: {}
      };
      if (T.focusInHiddenIframe && (q.except.browsingContext = !0), T.focusObjectSvgHidden) {
        var Y = R.nodeName.toLowerCase();
        Y === "object" && (q.except.cssVisibility = !0);
      }
      if (!a.default.rules(q))
        return !1;
    }
    var X = (0, p.default)(R);
    if (X) {
      var G = X.nodeName.toLowerCase();
      if (G === "object" && !T.focusInZeroDimensionObject && (!X.offsetWidth || !X.offsetHeight))
        return !1;
    }
    var Q = R.nodeName.toLowerCase();
    return !(Q === "svg" && T.focusSvgInIframe && !X && R.getAttribute("tabindex") === null);
  }
  B.except = function() {
    var C = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, v = function(S) {
      return B({
        context: S,
        except: C
      });
    };
    return v.rules = B, v;
  };
  var k = B.except({});
  t.default = k, e.exports = t.default;
})(lr, lr.exports);
var wl = lr.exports;
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = d;
  var n = wl, s = l(n), o = pi, r = l(o), i = Lt, a = l(i);
  function l(f) {
    return f && f.__esModule ? f : { default: f };
  }
  function u(f) {
    var h = function(m) {
      return m.shadowRoot || f(m) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    };
    return h.acceptNode = h, h;
  }
  var c = u(r.default);
  function d() {
    var f = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, h = f.context, m = f.includeContext, p = f.includeOnlyTabbable, g = f.strategy;
    h || (h = document.documentElement);
    for (var _ = s.default.rules.except({
      onlyTabbable: p
    }), x = (0, a.default)(h), y = x.createTreeWalker(
      // root element to start search in
      h,
      // element type filter
      NodeFilter.SHOW_ELEMENT,
      // custom NodeFilter filter
      g === "all" ? c : u(_),
      // deprecated, but IE requires it
      !1
    ), w = []; y.nextNode(); )
      y.currentNode.shadowRoot ? (_(y.currentNode) && w.push(y.currentNode), w = w.concat(d({
        context: y.currentNode.shadowRoot,
        includeOnlyTabbable: p,
        strategy: g
      }))) : w.push(y.currentNode);
    return m && (g === "all" ? (0, r.default)(h) && w.unshift(h) : _(h) && w.unshift(h)), w;
  }
  e.exports = t.default;
})(ar, ar.exports);
var Jf = ar.exports, xo = { exports: {} }, wo = { exports: {} };
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = function() {
    return a || (a = (0, r.default)()), typeof l == "string" || (l = (a.focusTable ? "table, td," : "") + (a.focusFieldset ? "fieldset," : "") + "svg a,a[href],area[href],input, select, textarea, button,iframe, object, embed,keygen," + (a.focusAudioWithoutControls ? "audio," : "audio[controls],") + (a.focusVideoWithoutControls ? "video," : "video[controls],") + (a.focusSummary ? "summary," : "") + "[tabindex],[contenteditable]", l = (0, s.default)(l)), l;
  };
  var n = ml, s = i(n), o = st, r = i(o);
  function i(u) {
    return u && u.__esModule ? u : { default: u };
  }
  var a = void 0, l = void 0;
  e.exports = t.default;
})(wo, wo.exports);
var Qf = wo.exports;
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = a;
  var n = Qf, s = i(n), o = wl, r = i(o);
  function i(l) {
    return l && l.__esModule ? l : { default: l };
  }
  function a() {
    var l = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, u = l.context, c = l.includeContext, d = l.includeOnlyTabbable, f = (0, s.default)(), h = u.querySelectorAll(f), m = r.default.rules.except({
      onlyTabbable: d
    }), p = [].filter.call(h, m);
    return c && m(u) && p.unshift(u), p;
  }
  e.exports = t.default;
})(xo, xo.exports);
var eh = xo.exports;
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = function() {
    var u = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, c = u.context, d = u.includeContext, f = u.includeOnlyTabbable, h = u.strategy, m = h === void 0 ? "quick" : h, p = (0, s.default)({
      label: "query/focusable",
      resolveDocument: !0,
      defaultToDocument: !0,
      context: c
    }), g = {
      context: p,
      includeContext: d,
      includeOnlyTabbable: f,
      strategy: m
    };
    if (m === "quick")
      return (0, a.default)(g);
    if (m === "strict" || m === "all")
      return (0, r.default)(g);
    throw new TypeError('query/focusable requires option.strategy to be one of ["quick", "strict", "all"]');
  };
  var n = Ce, s = l(n), o = Jf, r = l(o), i = eh, a = l(i);
  function l(u) {
    return u && u.__esModule ? u : { default: u };
  }
  e.exports = t.default;
})(or, or.exports);
var _l = or.exports, _o = { exports: {} }, So = { exports: {} };
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = function(n) {
    var s = n.element, o = n.attribute, r = "data-cached-" + o, i = s.getAttribute(r);
    if (i === null) {
      var a = s.getAttribute(o);
      if (a === null)
        return;
      s.setAttribute(r, a || ""), s.removeAttribute(o);
    } else {
      var l = s.getAttribute(r);
      s.removeAttribute(r), s.setAttribute(o, l);
    }
  }, e.exports = t.default;
})(So, So.exports);
var th = So.exports, Co = { exports: {} };
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = function(n) {
    var s = n.element, o = n.attribute, r = n.temporaryValue, i = n.saveValue, a = "data-cached-" + o;
    if (r !== void 0) {
      var l = i || s.getAttribute(o);
      s.setAttribute(a, l || ""), s.setAttribute(o, r);
    } else {
      var u = s.getAttribute(a);
      s.removeAttribute(a), u === "" ? s.removeAttribute(o) : s.setAttribute(o, u);
    }
  }, e.exports = t.default;
})(Co, Co.exports);
var Sl = Co.exports, Eo = { exports: {} };
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var n = function() {
  }, s = {
    log: n,
    debug: n,
    info: n,
    warn: n,
    error: n
  };
  t.default = typeof console < "u" ? console : s, e.exports = t.default;
})(Eo, Eo.exports);
var nh = Eo.exports;
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = function(S, E) {
    _ || (_ = (0, p.default)());
    var I = (0, s.default)({
      label: "element/disabled",
      context: S
    });
    E = !!E;
    var R = I.hasAttribute("data-ally-disabled"), j = arguments.length === 1;
    return (0, a.default)(I) ? j ? I.disabled : (I.disabled = E, I) : j ? R : (R === E || v(I, E), I);
  };
  var n = Ce, s = g(n), o = Pt, r = g(o), i = xl, a = g(i), l = th, u = g(l), c = Sl, d = g(c), f = nh, h = g(f), m = st, p = g(m);
  function g(S) {
    return S && S.__esModule ? S : { default: S };
  }
  var _ = void 0;
  function x() {
    h.default.warn("trying to focus inert element", this);
  }
  function y(S, E) {
    if (E) {
      var I = (0, r.default)(S);
      (0, d.default)({
        element: S,
        attribute: "tabindex",
        temporaryValue: "-1",
        saveValue: I !== null ? I : ""
      });
    } else
      (0, d.default)({
        element: S,
        attribute: "tabindex"
      });
  }
  function w(S, E) {
    (0, u.default)({
      element: S,
      attribute: "controls",
      remove: E
    });
  }
  function T(S, E) {
    (0, d.default)({
      element: S,
      attribute: "focusable",
      temporaryValue: E ? "false" : void 0
    });
  }
  function L(S, E) {
    (0, u.default)({
      element: S,
      attribute: "xlink:href",
      remove: E
    });
  }
  function B(S, E) {
    (0, d.default)({
      element: S,
      attribute: "aria-disabled",
      temporaryValue: E ? "true" : void 0
    });
  }
  function k(S, E) {
    E ? S.focus = x : delete S.focus;
  }
  function C(S, E) {
    if (E) {
      var I = S.style.pointerEvents || "";
      S.setAttribute("data-inert-pointer-events", I), S.style.pointerEvents = "none";
    } else {
      var R = S.getAttribute("data-inert-pointer-events");
      S.removeAttribute("data-inert-pointer-events"), S.style.pointerEvents = R;
    }
  }
  function v(S, E) {
    B(S, E), y(S, E), k(S, E), C(S, E);
    var I = S.nodeName.toLowerCase();
    (I === "video" || I === "audio") && w(S, E), (I === "svg" || S.ownerSVGElement) && (_.focusSvgFocusableAttribute ? T(S, E) : !_.focusSvgTabindexAttribute && I === "a" && L(S, E)), E ? S.setAttribute("data-ally-disabled", "true") : S.removeAttribute("data-ally-disabled");
  }
  e.exports = t.default;
})(_o, _o.exports);
var sh = _o.exports, Oo = { exports: {} }, To = { exports: {} };
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = l;
  var n = Ce, s = i(n), o = Lt, r = i(o);
  function i(u) {
    return u && u.__esModule ? u : { default: u };
  }
  var a = function(u) {
    return u.shadowRoot ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
  };
  a.acceptNode = a;
  function l() {
    var u = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, c = u.context, d = (0, s.default)({
      label: "query/shadow-hosts",
      resolveDocument: !0,
      defaultToDocument: !0,
      context: c
    }), f = (0, r.default)(c), h = f.createTreeWalker(
      // root element to start search in
      d,
      // element type filter
      NodeFilter.SHOW_ELEMENT,
      // custom NodeFilter filter
      a,
      // deprecated, but IE requires it
      !1
    ), m = [];
    for (d.shadowRoot && (m.push(d), m = m.concat(l({
      context: d.shadowRoot
    }))); h.nextNode(); )
      m.push(h.currentNode), m = m.concat(l({
        context: h.currentNode.shadowRoot
      }));
    return m;
  }
  e.exports = t.default;
})(To, To.exports);
var rh = To.exports;
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var n = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(m) {
    return typeof m;
  } : function(m) {
    return m && typeof Symbol == "function" && m.constructor === Symbol && m !== Symbol.prototype ? "symbol" : typeof m;
  }, s = /* @__PURE__ */ function() {
    function m(p, g) {
      for (var _ = 0; _ < g.length; _++) {
        var x = g[_];
        x.enumerable = x.enumerable || !1, x.configurable = !0, "value" in x && (x.writable = !0), Object.defineProperty(p, x.key, x);
      }
    }
    return function(p, g, _) {
      return g && m(p.prototype, g), _ && m(p, _), p;
    };
  }();
  t.default = function() {
    var m = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, p = m.context, g = m.callback, _ = m.config;
    if (typeof g != "function")
      throw new TypeError("observe/shadow-mutations requires options.callback to be a function");
    if ((typeof _ > "u" ? "undefined" : n(_)) !== "object")
      throw new TypeError("observe/shadow-mutations requires options.config to be an object");
    if (!window.MutationObserver)
      return {
        disengage: function() {
        }
      };
    var x = (0, u.default)({
      label: "observe/shadow-mutations",
      resolveDocument: !0,
      defaultToDocument: !0,
      context: p
    }), y = new h({
      context: x,
      callback: g,
      config: _
    });
    return {
      disengage: y.disengage
    };
  };
  var o = yt, r = c(o), i = rh, a = c(i), l = Ce, u = c(l);
  function c(m) {
    return m && m.__esModule ? m : { default: m };
  }
  function d(m, p) {
    if (!(m instanceof p))
      throw new TypeError("Cannot call a class as a function");
  }
  var f = {
    childList: !0,
    subtree: !0
  }, h = function() {
    function m() {
      var p = this, g = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, _ = g.context, x = g.callback, y = g.config;
      d(this, m), this.config = y, this.disengage = this.disengage.bind(this), this.clientObserver = new MutationObserver(x), this.hostObserver = new MutationObserver(function(w) {
        return w.forEach(p.handleHostMutation, p);
      }), this.observeContext(_), this.observeShadowHosts(_);
    }
    return s(m, [{
      key: "disengage",
      value: function() {
        this.clientObserver && this.clientObserver.disconnect(), this.clientObserver = null, this.hostObserver && this.hostObserver.disconnect(), this.hostObserver = null;
      }
    }, {
      key: "observeShadowHosts",
      value: function(p) {
        var g = this, _ = (0, a.default)({
          context: p
        });
        _.forEach(function(x) {
          return g.observeContext(x.shadowRoot);
        });
      }
    }, {
      key: "observeContext",
      value: function(p) {
        this.clientObserver.observe(p, this.config), this.hostObserver.observe(p, f);
      }
    }, {
      key: "handleHostMutation",
      value: function(p) {
        if (p.type === "childList") {
          var g = (0, r.default)(p.addedNodes).filter(function(_) {
            return _.nodeType === Node.ELEMENT_NODE;
          });
          g.forEach(this.observeShadowHosts, this);
        }
      }
    }]), m;
  }();
  e.exports = t.default;
})(Oo, Oo.exports);
var oh = Oo.exports, nn = {};
Object.defineProperty(nn, "__esModule", {
  value: !0
});
nn.getParentComparator = ih;
function ih() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = e.parent, n = e.element, s = e.includeSelf;
  if (t)
    return function(o) {
      return !!(s && o === t || t.compareDocumentPosition(o) & Node.DOCUMENT_POSITION_CONTAINED_BY);
    };
  if (n)
    return function(o) {
      return !!(s && n === o || o.compareDocumentPosition(n) & Node.DOCUMENT_POSITION_CONTAINED_BY);
    };
  throw new TypeError("util/compare-position#getParentComparator required either options.parent or options.element");
}
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var n = /* @__PURE__ */ function() {
    function x(y, w) {
      for (var T = 0; T < w.length; T++) {
        var L = w[T];
        L.enumerable = L.enumerable || !1, L.configurable = !0, "value" in L && (L.writable = !0), Object.defineProperty(y, L.key, L);
      }
    }
    return function(y, w, T) {
      return w && x(y.prototype, w), T && x(y, T), y;
    };
  }();
  t.default = function() {
    var x = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, y = x.context, w = x.filter, T = new _({ context: y, filter: w });
    return { disengage: T.disengage };
  };
  var s = yt, o = f(s), r = _l, i = f(r), a = sh, l = f(a), u = oh, c = f(u), d = nn;
  function f(x) {
    return x && x.__esModule ? x : { default: x };
  }
  function h(x, y) {
    if (!(x instanceof y))
      throw new TypeError("Cannot call a class as a function");
  }
  function m(x) {
    return (0, l.default)(x, !0);
  }
  function p(x) {
    return (0, l.default)(x, !1);
  }
  var g = {
    attributes: !0,
    childList: !0,
    subtree: !0,
    attributeFilter: ["tabindex", "disabled", "data-ally-disabled"]
  }, _ = function() {
    function x() {
      var y = this, w = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, T = w.context, L = w.filter;
      h(this, x), this._context = (0, o.default)(T || document.documentElement)[0], this._filter = (0, o.default)(L), this._inertElementCache = [], this.disengage = this.disengage.bind(this), this.handleMutation = this.handleMutation.bind(this), this.renderInert = this.renderInert.bind(this), this.filterElements = this.filterElements.bind(this), this.filterParentElements = this.filterParentElements.bind(this);
      var B = (0, i.default)({
        context: this._context,
        includeContext: !0,
        strategy: "all"
      });
      this.renderInert(B), this.shadowObserver = (0, c.default)({
        context: this._context,
        config: g,
        callback: function(k) {
          return k.forEach(y.handleMutation);
        }
      });
    }
    return n(x, [{
      key: "disengage",
      value: function() {
        this._context && (p(this._context), this._inertElementCache.forEach(function(y) {
          return p(y);
        }), this._inertElementCache = null, this._filter = null, this._context = null, this.shadowObserver && this.shadowObserver.disengage(), this.shadowObserver = null);
      }
    }, {
      key: "listQueryFocusable",
      value: function(y) {
        return y.map(function(w) {
          return (0, i.default)({ context: w, includeContext: !0, strategy: "all" });
        }).reduce(function(w, T) {
          return w.concat(T);
        }, []);
      }
    }, {
      key: "renderInert",
      value: function(y) {
        var w = this, T = function(L) {
          w._inertElementCache.push(L), m(L);
        };
        y.filter(this.filterElements).filter(this.filterParentElements).filter(function(L) {
          return !(0, l.default)(L);
        }).forEach(T);
      }
    }, {
      key: "filterElements",
      value: function(y) {
        var w = (0, d.getParentComparator)({ element: y, includeSelf: !0 });
        return !this._filter.some(w);
      }
    }, {
      key: "filterParentElements",
      value: function(y) {
        var w = (0, d.getParentComparator)({ parent: y });
        return !this._filter.some(w);
      }
    }, {
      key: "handleMutation",
      value: function(y) {
        if (y.type === "childList") {
          var w = (0, o.default)(y.addedNodes).filter(function(L) {
            return L.nodeType === Node.ELEMENT_NODE;
          });
          if (!w.length)
            return;
          var T = this.listQueryFocusable(w);
          this.renderInert(T);
        } else y.type === "attributes" && this.renderInert([y.target]);
      }
    }]), x;
  }();
  e.exports = t.default;
})(sr, sr.exports);
var ah = sr.exports, Ao = { exports: {} }, ko = { exports: {} };
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = function() {
    var d = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, f = d.context, h = d.filter;
    if (f = (0, s.default)({
      label: "get/insignificant-branches",
      defaultToDocument: !0,
      context: f
    }), h = (0, r.default)(h), !h.length)
      throw new TypeError("get/insignificant-branches requires valid options.filter");
    return c({
      context: f,
      filter: h
    });
  };
  var n = Ce, s = u(n), o = yt, r = u(o), i = nn, a = Lt, l = u(a);
  function u(d) {
    return d && d.__esModule ? d : { default: d };
  }
  function c(d) {
    var f = d.context, h = d.filter, m = function(y) {
      var w = (0, i.getParentComparator)({ parent: y });
      return h.some(w);
    }, p = [], g = function(y) {
      return h.some(function(w) {
        return y === w;
      }) ? NodeFilter.FILTER_REJECT : m(y) ? NodeFilter.FILTER_ACCEPT : (p.push(y), NodeFilter.FILTER_REJECT);
    };
    g.acceptNode = g;
    for (var _ = (0, l.default)(f), x = _.createTreeWalker(
      // root element to start search in
      f,
      // element type filter
      NodeFilter.SHOW_ELEMENT,
      // custom NodeFilter filter
      g,
      // deprecated, but IE requires it
      !1
    ); x.nextNode(); )
      ;
    return p;
  }
  e.exports = t.default;
})(ko, ko.exports);
var lh = ko.exports;
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var n = /* @__PURE__ */ function() {
    function x(y, w) {
      for (var T = 0; T < w.length; T++) {
        var L = w[T];
        L.enumerable = L.enumerable || !1, L.configurable = !0, "value" in L && (L.writable = !0), Object.defineProperty(y, L.key, L);
      }
    }
    return function(y, w, T) {
      return w && x(y.prototype, w), T && x(y, T), y;
    };
  }();
  t.default = function() {
    var x = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, y = x.context, w = x.filter, T = new _({ context: y, filter: w });
    return { disengage: T.disengage };
  };
  var s = yt, o = f(s), r = lh, i = f(r), a = Ln, l = f(a), u = Sl, c = f(u), d = nn;
  function f(x) {
    return x && x.__esModule ? x : { default: x };
  }
  function h(x, y) {
    if (!(x instanceof y))
      throw new TypeError("Cannot call a class as a function");
  }
  function m(x) {
    (0, c.default)({
      element: x,
      attribute: "aria-hidden",
      temporaryValue: "true"
    });
  }
  function p(x) {
    (0, c.default)({
      element: x,
      attribute: "aria-hidden"
    });
  }
  var g = {
    attributes: !1,
    childList: !0,
    subtree: !0
  }, _ = function() {
    function x() {
      var y = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, w = y.context, T = y.filter;
      h(this, x), this._context = (0, o.default)(w || document.documentElement)[0], this._filter = (0, o.default)(T), this.disengage = this.disengage.bind(this), this.handleMutation = this.handleMutation.bind(this), this.isInsignificantBranch = this.isInsignificantBranch.bind(this);
      var L = (0, i.default)({ context: this._context, filter: this._filter });
      L.forEach(m), this.startObserver();
    }
    return n(x, [{
      key: "disengage",
      value: function() {
        this._context && ([].forEach.call(this._context.querySelectorAll("[data-cached-aria-hidden]"), p), this._context = null, this._filter = null, this._observer && this._observer.disconnect(), this._observer = null);
      }
    }, {
      key: "startObserver",
      value: function() {
        var y = this;
        window.MutationObserver && (this._observer = new MutationObserver(function(w) {
          return w.forEach(y.handleMutation);
        }), this._observer.observe(this._context, g));
      }
    }, {
      key: "handleMutation",
      value: function(y) {
        y.type === "childList" && (0, o.default)(y.addedNodes).filter(function(w) {
          return w.nodeType === Node.ELEMENT_NODE;
        }).filter(this.isInsignificantBranch).forEach(m);
      }
    }, {
      key: "isInsignificantBranch",
      value: function(y) {
        var w = (0, l.default)({ context: y });
        if (w.some(function(L) {
          return L.getAttribute("aria-hidden") === "true";
        }))
          return !1;
        var T = (0, d.getParentComparator)({ element: y });
        return !this._filter.some(T);
      }
    }]), x;
  }();
  e.exports = t.default;
})(Ao, Ao.exports);
var uh = Ao.exports, Mo = { exports: {} }, $o = { exports: {} }, Po = { exports: {} };
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = function() {
    for (var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, i = r.context, a = (0, s.default)({
      label: "get/shadow-host",
      context: i
    }), l = null; a; )
      l = a, a = a.parentNode;
    return l.nodeType === l.DOCUMENT_FRAGMENT_NODE && l.host ? l.host : null;
  };
  var n = Ce, s = o(n);
  function o(r) {
    return r && r.__esModule ? r : { default: r };
  }
  e.exports = t.default;
})(Po, Po.exports);
var Cl = Po.exports;
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = function(u) {
    var c = (0, s.default)({
      label: "is/active-element",
      resolveDocument: !0,
      context: u
    }), d = (0, a.default)(c);
    if (d.activeElement === c)
      return !0;
    var f = (0, r.default)({ context: c });
    return !!(f && f.shadowRoot.activeElement === c);
  };
  var n = Ce, s = l(n), o = Cl, r = l(o), i = Lt, a = l(i);
  function l(u) {
    return u && u.__esModule ? u : { default: u };
  }
  e.exports = t.default;
})($o, $o.exports);
var ch = $o.exports, Io = { exports: {} }, Lo = { exports: {} }, jo = { exports: {} };
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var n = vs, s = w(n), o = Ce, r = w(o), i = al, a = w(i), l = Pt, u = w(l), c = pi, d = w(c), f = ps, h = w(f), m = qe, p = w(m), g = jt, _ = It, x = st, y = w(x);
  function w(S) {
    return S && S.__esModule ? S : { default: S };
  }
  var T = void 0, L = /^(fieldset|table|td|body)$/;
  function B() {
    var S = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, E = S.context, I = S.except, R = I === void 0 ? {
      flexbox: !1,
      scrollable: !1,
      visible: !1,
      onlyTabbable: !1
    } : I;
    T || (T = (0, y.default)());
    var j = (0, r.default)({
      label: "is/tabbable",
      resolveDocument: !0,
      context: E
    });
    if (p.default.is.BLINK && p.default.is.ANDROID && p.default.majorVersion > 42)
      return !1;
    var q = (0, h.default)(j);
    if (q) {
      if (p.default.is.WEBKIT && p.default.is.IOS || (0, u.default)(q) < 0 || !R.visible && (p.default.is.BLINK || p.default.is.WEBKIT) && !(0, s.default)(q))
        return !1;
      var Y = q.nodeName.toLowerCase();
      if (Y === "object") {
        var X = p.default.name === "Chrome" && p.default.majorVersion >= 54 || p.default.name === "Opera" && p.default.majorVersion >= 41;
        if (p.default.is.WEBKIT || p.default.is.BLINK && !X)
          return !1;
      }
    }
    var G = j.nodeName.toLowerCase(), Q = (0, u.default)(j), ge = Q === null ? null : Q >= 0;
    if (p.default.is.EDGE && p.default.majorVersion >= 14 && q && j.ownerSVGElement && Q < 0)
      return !0;
    var me = ge !== !1, be = Q !== null && Q >= 0;
    if (j.hasAttribute("contenteditable"))
      return me;
    if (L.test(G) && ge !== !0)
      return !1;
    if (p.default.is.WEBKIT && p.default.is.IOS) {
      var xe = G === "input" && j.type === "text" || j.type === "password" || G === "select" || G === "textarea" || j.hasAttribute("contenteditable");
      if (!xe) {
        var wt = window.getComputedStyle(j, null);
        xe = (0, _.isUserModifyWritable)(wt);
      }
      if (!xe)
        return !1;
    }
    if (G === "use" && Q !== null && (p.default.is.BLINK || p.default.is.WEBKIT && p.default.majorVersion === 9) || (0, a.default)(j, "svg a") && j.hasAttribute("xlink:href") && (me || j.focus && !T.focusSvgNegativeTabindexAttribute) || G === "svg" && T.focusSvgInIframe && me)
      return !0;
    if (p.default.is.TRIDENT || p.default.is.EDGE) {
      if (G === "svg")
        return T.focusSvg ? !0 : j.hasAttribute("focusable") || be;
      if (j.ownerSVGElement)
        return T.focusSvgTabindexAttribute && be ? !0 : j.hasAttribute("focusable");
    }
    if (j.tabIndex === void 0)
      return !!R.onlyTabbable;
    if (G === "audio")
      if (j.hasAttribute("controls")) {
        if (p.default.is.BLINK)
          return !0;
      } else return !1;
    if (G === "video") {
      if (j.hasAttribute("controls")) {
        if (p.default.is.BLINK || p.default.is.GECKO)
          return !0;
      } else if (p.default.is.TRIDENT || p.default.is.EDGE)
        return !1;
    }
    if (G === "object" && (p.default.is.BLINK || p.default.is.WEBKIT) || G === "iframe")
      return !1;
    if (!R.scrollable && p.default.is.GECKO) {
      var Ne = window.getComputedStyle(j, null);
      if ((0, _.hasCssOverflowScroll)(Ne))
        return me;
    }
    if (p.default.is.TRIDENT || p.default.is.EDGE) {
      if (G === "area") {
        var Le = (0, g.getImageOfArea)(j);
        if (Le && (0, u.default)(Le) < 0)
          return !1;
      }
      var ot = window.getComputedStyle(j, null);
      if ((0, _.isUserModifyWritable)(ot))
        return j.tabIndex >= 0;
      if (!R.flexbox && (0, _.hasCssDisplayFlex)(ot))
        return Q !== null ? be : k(j) && C(j);
      if ((0, _.isScrollableContainer)(j, G))
        return !1;
      var A = j.parentElement;
      if (A) {
        var mt = A.nodeName.toLowerCase(), ie = window.getComputedStyle(A, null);
        if ((0, _.isScrollableContainer)(A, G, mt, ie))
          return !1;
        if ((0, _.hasCssDisplayFlex)(ie))
          return be;
      }
    }
    return j.tabIndex >= 0;
  }
  B.except = function() {
    var S = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, E = function(I) {
      return B({
        context: I,
        except: S
      });
    };
    return E.rules = B, E;
  };
  var k = d.default.rules.except({ flexbox: !0 }), C = B.except({ flexbox: !0 }), v = B.except({});
  t.default = v, e.exports = t.default;
})(jo, jo.exports);
var dh = jo.exports;
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = function() {
    var a = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, l = a.context, u = a.includeContext, c = a.includeOnlyTabbable, d = a.strategy, f = r.default.rules.except({
      onlyTabbable: c
    });
    return (0, s.default)({
      context: l,
      includeContext: u,
      includeOnlyTabbable: c,
      strategy: d
    }).filter(f);
  };
  var n = _l, s = i(n), o = dh, r = i(o);
  function i(a) {
    return a && a.__esModule ? a : { default: a };
  }
  e.exports = t.default;
})(Lo, Lo.exports);
var El = Lo.exports, Ro = { exports: {} }, Bo = { exports: {} }, Uo = { exports: {} };
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = function(s) {
    return s.sort(n);
  };
  function n(s, o) {
    return s.compareDocumentPosition(o) & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1;
  }
  e.exports = t.default;
})(Uo, Uo.exports);
var fh = Uo.exports;
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = function() {
    var f = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, h = f.list, m = f.elements, p = f.resolveElement, g = h.slice(0), _ = (0, r.default)(m).slice(0);
    (0, a.default)(_);
    var x = c(g, _, p);
    return d(g, x), g;
  };
  var n = hl, s = l(n), o = yt, r = l(o), i = fh, a = l(i);
  function l(f) {
    return f && f.__esModule ? f : { default: f };
  }
  function u(f, h) {
    return (0, s.default)(f, function(m) {
      return h.compareDocumentPosition(m) & Node.DOCUMENT_POSITION_FOLLOWING;
    });
  }
  function c(f, h, m) {
    var p = [];
    return h.forEach(function(g) {
      var _ = !0, x = f.indexOf(g);
      x === -1 && (x = u(f, g), _ = !1), x === -1 && (x = f.length);
      var y = (0, r.default)(m ? m(g) : g);
      y.length && p.push({
        offset: x,
        replace: _,
        elements: y
      });
    }), p;
  }
  function d(f, h) {
    var m = 0;
    h.sort(function(p, g) {
      return p.offset - g.offset;
    }), h.forEach(function(p) {
      var g = p.replace ? 1 : 0, _ = [p.offset + m, g].concat(p.elements);
      f.splice.apply(f, _), m += p.elements.length - g;
    });
  }
  e.exports = t.default;
})(Bo, Bo.exports);
var Ol = Bo.exports;
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var n = /* @__PURE__ */ function() {
    function h(m, p) {
      for (var g = 0; g < p.length; g++) {
        var _ = p[g];
        _.enumerable = _.enumerable || !1, _.configurable = !0, "value" in _ && (_.writable = !0), Object.defineProperty(m, _.key, _);
      }
    }
    return function(m, p, g) {
      return p && h(m.prototype, p), g && h(m, g), m;
    };
  }();
  t.default = function(h, m) {
    var p = m.querySelectorAll("img[usemap]"), g = new f(m), _ = g.extractAreasFromList(h);
    return p.length ? (0, i.default)({
      list: _,
      elements: p,
      resolveElement: function(x) {
        var y = x.getAttribute("usemap").slice(1);
        return g.getAreasFor(y);
      }
    }) : _;
  };
  var s = El, o = c(s), r = Ol, i = c(r), a = Lt, l = c(a), u = jt;
  function c(h) {
    return h && h.__esModule ? h : { default: h };
  }
  function d(h, m) {
    if (!(h instanceof m))
      throw new TypeError("Cannot call a class as a function");
  }
  var f = function() {
    function h(m) {
      d(this, h), this._document = (0, l.default)(m), this.maps = {};
    }
    return n(h, [{
      key: "getAreasFor",
      value: function(m) {
        return this.maps[m] || this.addMapByName(m), this.maps[m];
      }
    }, {
      key: "addMapByName",
      value: function(m) {
        var p = (0, u.getMapByName)(m, this._document);
        p && (this.maps[p.name] = (0, o.default)({ context: p }));
      }
    }, {
      key: "extractAreasFromList",
      value: function(m) {
        return m.filter(function(p) {
          var g = p.nodeName.toLowerCase();
          if (g !== "area")
            return !0;
          var _ = p.parentNode;
          return this.maps[_.name] || (this.maps[_.name] = []), this.maps[_.name].push(p), !1;
        }, this);
      }
    }]), h;
  }();
  e.exports = t.default;
})(Ro, Ro.exports);
var hh = Ro.exports, Fo = { exports: {} };
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var n = /* @__PURE__ */ function() {
    function f(h, m) {
      for (var p = 0; p < m.length; p++) {
        var g = m[p];
        g.enumerable = g.enumerable || !1, g.configurable = !0, "value" in g && (g.writable = !0), Object.defineProperty(h, g.key, g);
      }
    }
    return function(h, m, p) {
      return m && f(h.prototype, m), p && f(h, p), h;
    };
  }();
  t.default = function(f, h, m) {
    var p = new d(h, m), g = p.extractElements(f);
    return g.length === f.length ? m(f) : p.sort(g);
  };
  var s = Cl, o = u(s), r = Ol, i = u(r), a = Pt, l = u(a);
  function u(f) {
    return f && f.__esModule ? f : { default: f };
  }
  function c(f, h) {
    if (!(f instanceof h))
      throw new TypeError("Cannot call a class as a function");
  }
  var d = function() {
    function f(h, m) {
      c(this, f), this.context = h, this.sortElements = m, this.hostCounter = 1, this.inHost = {}, this.inDocument = [], this.hosts = {}, this.elements = {};
    }
    return n(f, [{
      key: "_registerHost",
      value: function(h) {
        if (!h._sortingId) {
          h._sortingId = "shadow-" + this.hostCounter++, this.hosts[h._sortingId] = h;
          var m = (0, o.default)({ context: h });
          m ? (this._registerHost(m), this._registerHostParent(h, m)) : this.inDocument.push(h);
        }
      }
      // remember which host is the child of which other host
    }, {
      key: "_registerHostParent",
      value: function(h, m) {
        this.inHost[m._sortingId] || (this.inHost[m._sortingId] = []), this.inHost[m._sortingId].push(h);
      }
      // remember which elements a host contains
    }, {
      key: "_registerElement",
      value: function(h, m) {
        this.elements[m._sortingId] || (this.elements[m._sortingId] = []), this.elements[m._sortingId].push(h);
      }
      // remove shadowed elements from the sequence and register
      // the ShadowHosts they belong to so we know what to sort
      // later on
    }, {
      key: "extractElements",
      value: function(h) {
        return h.filter(function(m) {
          var p = (0, o.default)({ context: m });
          return p ? (this._registerHost(p), this._registerElement(m, p), !1) : !0;
        }, this);
      }
      // inject hosts into the sequence, sort everything,
      // and recoursively replace hosts by its descendants
    }, {
      key: "sort",
      value: function(h) {
        var m = this._injectHosts(h);
        return m = this._replaceHosts(m), this._cleanup(), m;
      }
      // merge ShadowHosts into the element lists of other ShadowHosts
      // or the document, then sort the individual lists
    }, {
      key: "_injectHosts",
      value: function(h) {
        return Object.keys(this.hosts).forEach(function(m) {
          var p = this.elements[m], g = this.inHost[m], _ = this.hosts[m].shadowRoot;
          this.elements[m] = this._merge(p, g, _);
        }, this), this._merge(h, this.inDocument, this.context);
      }
    }, {
      key: "_merge",
      value: function(h, m, p) {
        var g = (0, i.default)({
          list: h,
          elements: m
        });
        return this.sortElements(g, p);
      }
    }, {
      key: "_replaceHosts",
      value: function(h) {
        return (0, i.default)({
          list: h,
          elements: this.inDocument,
          resolveElement: this._resolveHostElement.bind(this)
        });
      }
    }, {
      key: "_resolveHostElement",
      value: function(h) {
        var m = (0, i.default)({
          list: this.elements[h._sortingId],
          elements: this.inHost[h._sortingId],
          resolveElement: this._resolveHostElement.bind(this)
        }), p = (0, l.default)(h);
        return p !== null && p > -1 ? [h].concat(m) : m;
      }
    }, {
      key: "_cleanup",
      value: function() {
        Object.keys(this.hosts).forEach(function(h) {
          delete this.hosts[h]._sortingId;
        }, this);
      }
    }]), f;
  }();
  e.exports = t.default;
})(Fo, Fo.exports);
var mh = Fo.exports, No = { exports: {} };
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = function(r) {
    var i = {}, a = [], l = r.filter(function(c) {
      var d = c.tabIndex;
      return d === void 0 && (d = (0, s.default)(c)), d <= 0 || d === null || d === void 0 ? !0 : (i[d] || (i[d] = [], a.push(d)), i[d].push(c), !1);
    }), u = a.sort().map(function(c) {
      return i[c];
    }).reduceRight(function(c, d) {
      return d.concat(c);
    }, l);
    return u;
  };
  var n = Pt, s = o(n);
  function o(r) {
    return r && r.__esModule ? r : { default: r };
  }
  e.exports = t.default;
})(No, No.exports);
var ph = No.exports;
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = function() {
    var w = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, T = w.context, L = w.includeContext, B = w.includeOnlyTabbable, k = w.strategy;
    _ || (_ = (0, p.default)());
    var C = (0, r.default)(T)[0] || document.documentElement, v = (0, s.default)({
      context: C,
      includeContext: L,
      includeOnlyTabbable: B,
      strategy: k
    });
    return document.body.createShadowRoot && a.default.is.BLINK ? v = (0, d.default)(v, C, y) : v = y(v, C), L && (v = x(v, C)), v;
  };
  var n = El, s = g(n), o = yt, r = g(o), i = qe, a = g(i), l = hh, u = g(l), c = mh, d = g(c), f = ph, h = g(f), m = st, p = g(m);
  function g(w) {
    return w && w.__esModule ? w : { default: w };
  }
  var _ = void 0;
  function x(w, T) {
    var L = w.indexOf(T);
    if (L > 0) {
      var B = w.splice(L, 1);
      return B.concat(w);
    }
    return w;
  }
  function y(w, T) {
    return _.tabsequenceAreaAtImgPosition && (w = (0, u.default)(w, T)), w = (0, h.default)(w), w;
  }
  e.exports = t.default;
})(Io, Io.exports);
var vh = Io.exports, zo = { exports: {} }, Ho = { exports: {} }, Do = { exports: {} };
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  for (var n = {
    // Element Focus
    tab: 9,
    // Navigation
    left: 37,
    up: 38,
    right: 39,
    down: 40,
    pageUp: 33,
    "page-up": 33,
    pageDown: 34,
    "page-down": 34,
    end: 35,
    home: 36,
    // Action
    enter: 13,
    escape: 27,
    space: 32,
    // Modifier
    shift: 16,
    capsLock: 20,
    "caps-lock": 20,
    ctrl: 17,
    alt: 18,
    meta: 91,
    // in firefox: 224
    // on mac (chrome): meta-left=91, meta-right=93
    // on win (IE11): meta-left=91, meta-right=92
    pause: 19,
    // Content Manipulation
    insert: 45,
    delete: 46,
    backspace: 8,
    // the same logical key may be identified through different keyCodes
    _alias: {
      91: [92, 93, 224]
    }
  }, s = 1; s < 26; s++)
    n["f" + s] = s + 111;
  for (var o = 0; o < 10; o++) {
    var r = o + 48, i = o + 96;
    n[o] = r, n["num-" + o] = i, n._alias[r] = [i];
  }
  for (var a = 0; a < 26; a++) {
    var l = a + 65, u = String.fromCharCode(l).toLowerCase();
    n[u] = l;
  }
  t.default = n, e.exports = t.default;
})(Do, Do.exports);
var gh = Do.exports;
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = function(d) {
    return d.split(/\s+/).map(function(f) {
      var h = f.split("+"), m = l(h.slice(0, -1)), p = u(h.slice(-1));
      return {
        keyCodes: p,
        modifiers: m,
        matchModifiers: c.bind(null, m)
      };
    });
  };
  var n = gh, s = o(n);
  function o(d) {
    return d && d.__esModule ? d : { default: d };
  }
  var r = {
    alt: "altKey",
    ctrl: "ctrlKey",
    meta: "metaKey",
    shift: "shiftKey"
  }, i = Object.keys(r).map(function(d) {
    return r[d];
  });
  function a(d) {
    var f = d ? null : !1;
    return {
      altKey: f,
      ctrlKey: f,
      metaKey: f,
      shiftKey: f
    };
  }
  function l(d) {
    var f = d.indexOf("*") !== -1, h = a(f);
    return d.forEach(function(m) {
      if (m !== "*") {
        var p = !0, g = m.slice(0, 1);
        g === "?" ? p = null : g === "!" && (p = !1), p !== !0 && (m = m.slice(1));
        var _ = r[m];
        if (!_)
          throw new TypeError('Unknown modifier "' + m + '"');
        h[_] = p;
      }
    }), h;
  }
  function u(d) {
    var f = s.default[d] || parseInt(d, 10);
    if (!f || typeof f != "number" || isNaN(f))
      throw new TypeError('Unknown key "' + d + '"');
    return [f].concat(s.default._alias[f] || []);
  }
  function c(d, f) {
    return !i.some(function(h) {
      return typeof d[h] == "boolean" && !!f[h] !== d[h];
    });
  }
  e.exports = t.default;
})(Ho, Ho.exports);
var bh = Ho.exports;
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = function() {
    var l = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, u = {}, c = (0, r.default)(l.context)[0] || document.documentElement;
    delete l.context;
    var d = (0, r.default)(l.filter);
    delete l.filter;
    var f = Object.keys(l);
    if (!f.length)
      throw new TypeError("when/key requires at least one option key");
    var h = function(g) {
      g.keyCodes.forEach(function(_) {
        u[_] || (u[_] = []), u[_].push(g);
      });
    };
    f.forEach(function(g) {
      if (typeof l[g] != "function")
        throw new TypeError('when/key requires option["' + g + '"] to be a function');
      var _ = function(x) {
        return x.callback = l[g], x;
      };
      (0, s.default)(g).map(_).forEach(h);
    });
    var m = function(g) {
      if (!g.defaultPrevented) {
        if (d.length) {
          var _ = (0, i.getParentComparator)({ element: g.target, includeSelf: !0 });
          if (d.some(_))
            return;
        }
        var x = g.keyCode || g.which;
        u[x] && u[x].forEach(function(y) {
          y.matchModifiers(g) && y.callback.call(c, g, p);
        });
      }
    };
    c.addEventListener("keydown", m, !1);
    var p = function() {
      c.removeEventListener("keydown", m, !1);
    };
    return { disengage: p };
  };
  var n = bh, s = a(n), o = yt, r = a(o), i = nn;
  function a(l) {
    return l && l.__esModule ? l : { default: l };
  }
  e.exports = t.default;
})(zo, zo.exports);
var yh = zo.exports;
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = function() {
    var u = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, c = u.context;
    return c || (c = document.documentElement), (0, r.default)(), (0, a.default)({
      // Safari on OSX may require ALT+TAB to reach links,
      // see https://github.com/medialize/ally.js/issues/146
      "?alt+?shift+tab": function(d) {
        d.preventDefault();
        var f = (0, r.default)({
          context: c
        }), h = d.shiftKey, m = f[0], p = f[f.length - 1], g = h ? m : p, _ = h ? p : m;
        if ((0, s.default)(g)) {
          _.focus();
          return;
        }
        var x = void 0, y = f.some(function(T, L) {
          return (0, s.default)(T) ? (x = L, !0) : !1;
        });
        if (!y) {
          m.focus();
          return;
        }
        var w = h ? -1 : 1;
        f[x + w].focus();
      }
    });
  };
  var n = ch, s = l(n), o = vh, r = l(o), i = yh, a = l(i);
  function l(u) {
    return u && u.__esModule ? u : { default: u };
  }
  e.exports = t.default;
})(Mo, Mo.exports);
var xh = Mo.exports;
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var n = ah, s = l(n), o = uh, r = l(o), i = xh, a = l(i);
  function l(u) {
    return u && u.__esModule ? u : { default: u };
  }
  t.default = {
    disabled: s.default,
    hidden: r.default,
    tabFocus: a.default
  }, e.exports = t.default;
})(nr, nr.exports);
var wh = nr.exports;
const _h = /* @__PURE__ */ Hd(wh), jn = new Pe({
  type: "slider",
  baseAttribute: "data-ulu-slider"
});
jn.attributeSelector("track");
jn.attributeSelector("track-container");
jn.attributeSelector("control-context");
jn.attributeSelector("slide");
const Sh = matchMedia("(prefers-reduced-motion: reduce)").matches, Nt = { once: !0 }, qi = (e) => `${e}ms`;
addEventListener("load", () => {
  addEventListener("resize", Da(() => {
    Tl.instances.forEach((e) => e.handleResize());
  }, 250));
});
const Ch = [
  "container",
  "trackContainer",
  "track",
  "slides"
], Vo = class Wo {
  constructor(t, n) {
    const s = Object.assign({}, Wo.defaults, n);
    this.options = s, this.slide = null, this.index = null, this.swipeInstance = null, this.swipeListener = null, this.swipeImageListener = null, this.transitioning = !1, fi(Ch) || Te(this, "Missing a required Element"), t.slides.length || Te(this, "Missing slides"), this.slides = [...t.slides].map((o, r) => ({
      element: o,
      index: r,
      number: r + 1
    })), this.elements = {
      ...t,
      ...this.createControls(t.controlContext || t.container),
      ...this.createNav(t.navContext || t.container)
    }, this.transition = s.transition ? s.transitionFade || Sh ? this.fadeTransition : this.slideTransition : this.noTransition, this.setup(), this.goto(0, null, "init"), Ue(this, "Slider Instance Created", this), Wo.instances.push(this);
  }
  /**
   * Sliding mechanism needs translate updated on resize
   */
  handleResize() {
    const { slide: t, transition: n, slideTransition: s } = this;
    n === s && t && this.translateTo(t.element.offsetLeft, 0);
  }
  /**
   * Goto to the previous slide
   */
  previous(t) {
    const { index: n, slides: s } = this, o = s.length - 1, r = n - 1, i = r < 0 ? o : r;
    this.emit("previous", [t, i]), this.goto(i, t, "previous");
  }
  /**
   * Goto to the next slide
   */
  next(t) {
    const { index: n, slides: s } = this, o = n + 1, r = o > s.length - 1 ? 0 : o;
    this.emit("next", [t, r]), this.goto(r, t, "next");
  }
  /**
   *  Makes sure that no matter what the callback is called if transition event
   * doesn't start or fails to finish/cancel
   * @param {number} element
   * @param {number} duration Duration to wait for complete 
   * @param {Function} beginTransition Css changes to begin/start transtion 
   */
  ensureTransitionEnds(t, n, s) {
    return new Promise((o) => {
      const r = {}, i = () => {
        clearTimeout(r.start), r.end = setTimeout(a, n + 500);
      }, a = () => {
        clearTimeout(r.start), clearTimeout(r.end), t.removeEventListener("transitionrun", i, Nt), t.removeEventListener("transitionend", a, Nt), t.removeEventListener("transitioncancel", a, Nt), o();
      };
      t.addEventListener("transitionrun", i, Nt), t.addEventListener("transitionend", a, Nt), t.addEventListener("transitioncancel", a, Nt), r.start = setTimeout(a, n + 500), t.style.transitionDuration = qi(n), s(), n || a();
    });
  }
  /**
   * Translate the track to X
   */
  translateTo(t, n) {
    const { track: s } = this.elements, o = () => s.style.transform = `translateX(-${t}px)`;
    return s.style.willChange = "transform", this.ensureTransitionEnds(s, n, o).then(() => {
      s.style.willChange = "auto";
    });
  }
  /**
   * Show's a specifc slide and hides others, except when passing true to show all
   * then all slides will visible
   */
  setVisibility(t, n) {
    n || (t.element.style.visibility = "visible"), this.slides.forEach((s) => {
      s !== t && (s.element.style.visibility = n ? "visible" : "hidden");
    });
  }
  /**
   * Perform a fade on a single slide
   */
  fadeSlide(t, n) {
    const { options: s } = this, { element: o } = t, r = n ? s.transitionDuration : s.transitionDurationExit;
    return this.ensureTransitionEnds(o, r, () => {
      o.style.opacity = n ? "1" : "0";
    });
  }
  /**
   * Handler for the entire slide transtion
   */
  async slideTransition({ slide: t, index: n, old: s, oldIndex: o, triggerType: r }) {
    const i = this.slides.length, a = r === "previous", l = i - 1, u = n === 0 && o === l, c = n === l && o === 0;
    let d, f = this.options.transitionDuration;
    o && !u && !c && (f = f * Math.abs(o - n)), i < 3 ? u && !a ? d = s : c && (d = a ? t : s) : u ? d = s : c && (d = t), this.setVisibility(null, !0), d && (d.element.style.order = "-1", await this.translateTo(u ? 0 : s.element.offsetLeft, 0)), await this.translateTo(t.element.offsetLeft, f), d && (d.element.style.order = "0", await this.translateTo(t.element.offsetLeft, 0)), this.setVisibility(t, !1);
  }
  /**
   * Handler for the entire fade transtion
   */
  async fadeTransition({ slide: t, old: n }) {
    this.setVisibility(null, !0), n && (await this.fadeSlide(n, !1), n.element.style.order = "0"), t.element.style.order = "-1", await this.fadeSlide(t, !0), this.setVisibility(t, !1);
  }
  /**
   * Handler for the entire NO transtion
   */
  noTransition({ slide: t, old: n }) {
    return this.setVisibility(t, !1), n && (n.element.style.order = "0"), t.element.style.order = "-1", Promise.resolve();
  }
  goto(t, n, s) {
    const {
      slide: o,
      index: r,
      slides: i,
      elements: a
    } = this, l = s === "init", u = i[t], c = this.getClass("nav-button--active"), d = this.getClass("transition", !0), f = { slide: u, index: t, old: o, oldIndex: r, triggerType: s };
    if (t === r) {
      Xs(this, "Could not goto slide, still performing transition");
      return;
    }
    if (this.transitioning) {
      Xs(this, "Cancel goto(), same slide index as current slide");
      return;
    }
    const h = _h.disabled({ context: this.elements.track });
    this.transitioning = !0, o && o.navButton.classList.remove(c), u.navButton.classList.add(c), a.container.classList.add(d), this.transition(f).then(() => {
      this.index = t, this.slide = u, this.transitioning = !1, a.container.classList.remove(d), h.disengage(), l || (u.element.focus(), this.emit("goto", [n, t, u]));
    });
  }
  setup() {
    const { container: t, track: n, trackContainer: s } = this.elements, o = Hn(this.trackCss()), r = Hn(this.trackContainerStyles()), i = Hn(this.slideCss());
    n.setAttribute("style", o), s.setAttribute("style", r), this.slides.forEach((a) => {
      a.element.setAttribute("style", i), a.element.setAttribute("tabindex", "-1");
    }), t.classList.add(this.getClass()), this.options.swipeEnabled && this.setupSwipe();
  }
  setupSwipe() {
    const t = this.elements.track.querySelectorAll("img");
    this.swipeListener = (n) => {
      this.onSwipe(n);
    }, this.swipeImageListener = (n) => {
      n.preventDefault();
    }, this.slides.forEach((n) => {
      const { element: s } = n;
      n.swipeInstance = vd(s, this.options.swipeOptions), s.addEventListener("swipe", this.swipeListener);
    }), t.forEach((n) => {
      n.addEventListener("dragstart", this.swipeImageListener);
    });
  }
  onSwipe(t) {
    const { directions: n } = t.detail, s = n.left ? "next" : n.right ? "previous" : null;
    s && this[s](t);
  }
  trackContainerStyles() {
    return `
      overflow: hidden;
    `;
  }
  transitionCss(t) {
    const { transitionTimingFunction: n, transitionDuration: s } = this.options;
    return `
      transition-property: ${t};
      transition-duration: ${qi(s)};
      transition-timing-function: ${n};
    `;
  }
  trackCss() {
    return `
      display: flex;
      position: relative;
      list-style: none;
      ${this.transition === this.slideTransition ? this.transitionCss("transform") : ""}
    `;
  }
  slideCss() {
    const t = this.transition === this.fadeTransition;
    return `
      width: 100%;
      flex: 0 0 100%;
      ${t ? this.transitionCss("opacity") : ""}
      opacity: ${t ? "0" : "1"}
    `;
  }
  getClass(t, n) {
    const { namespace: s } = this.options;
    return n ? `${s}--${t}` : t ? `${s}__${t}` : s;
  }
  createControlButton(t) {
    const n = document.createElement("button");
    return n.classList.add(this.getClass("control-button")), n.classList.add(this.getClass(`control-button--${t}`)), n.classList.add(...this.options.buttonClasses), n.setAttribute("data-slider-control", t), n.setAttribute("type", "button"), n.innerHTML = this.getControlContent(t), n;
  }
  createControls(t) {
    const n = document.createElement("ul"), s = document.createElement("li"), o = document.createElement("li"), r = this.createControlButton("previous"), i = this.createControlButton("next");
    return n.classList.add(this.getClass("controls")), s.appendChild(r), o.appendChild(i), n.appendChild(s), n.appendChild(o), r.addEventListener("click", this.previous.bind(this)), i.addEventListener("click", this.next.bind(this)), t.appendChild(n), {
      controls: n,
      previousItem: s,
      nextItem: o,
      previous: r,
      next: i
    };
  }
  createNav(t) {
    const n = document.createElement("ul"), s = this.slides.map(this.createNavButton.bind(this)), o = s.map((r) => {
      const i = document.createElement("li");
      return i.appendChild(r), n.appendChild(i), i;
    });
    return n.classList.add(this.getClass("nav")), t.appendChild(n), {
      nav: n,
      navButtons: s,
      navItems: o
    };
  }
  createNavButton(t, n) {
    const s = document.createElement("button");
    return s.classList.add(this.getClass("nav-button")), s.setAttribute("type", "button"), s.innerHTML = this.getNavContent(t), t.navButton = s, s.addEventListener("click", this.goto.bind(this, n)), s;
  }
  getControlContent(t) {
    const n = this.options[t === "next" ? "iconClassNext" : "iconClassPrevious"];
    return `
      <span class="${this.options.classAccessiblyHidden}">${t}</span>
      <span class="${this.getClass("control-icon")} ${n}" aria-hidden="true"></span>
    `;
  }
  getNavContent(t) {
    return `<span class="${this.options.classAccessiblyHidden}">Item ${t.number}</span>`;
  }
  emit(t, n) {
    this.options.events[t] && this.options.events[t].apply(this, n);
  }
};
Se(Vo, "instances", []), /**
* Default options for slider
*/
Se(Vo, "defaults", {
  classAccessiblyHidden: "hidden-visually",
  namespace: "Slider",
  events: {},
  transition: !0,
  transitionFade: !1,
  transitionDuration: 700,
  transitionDurationExit: 400,
  transitionTimingFunction: "ease-in-out",
  buttonClasses: ["button", "button--icon"],
  iconClassPrevious: Yt("iconClassPrevious"),
  iconClassNext: Yt("iconClassNext"),
  swipeEnabled: !0,
  swipeOptions: {
    preventScroll: !0
  }
});
let Tl = Vo;
new Pe({
  type: "tabs",
  baseAttribute: "data-ulu-tablist"
});
const sn = new Pe({
  type: "theme-toggle",
  baseAttribute: "data-ulu-theme-toggle"
});
sn.attributeSelector("label");
sn.attributeSelector("icon");
sn.getAttribute("remote");
sn.getAttribute("init");
sn.getAttribute("state");
const gs = new Pe({
  type: "tooltip",
  baseAttribute: "data-ulu-tooltip"
}), Eh = gs.getAttribute("body"), Oh = gs.attributeSelector("body"), Th = gs.attributeSelector("arrow"), Ki = class qo {
  constructor(t, n, s) {
    const { trigger: o } = t;
    if (!o) {
      Te(this, "missing required trigger");
      return;
    }
    this.options = Object.assign({}, qo.defaults, n), this.floatingOptions = Object.assign({}, qo.defaultFloatingOptions, s), this.elements = { ...t }, this.handlers = {}, this.isOpen = !1, Jn(o), this.setup();
  }
  setup() {
    this.createContentElement(), this.attachHandlers(), this.setupAccessibility();
  }
  setupAccessibility() {
    const { trigger: t, content: n } = this.elements, { accessible: s } = this.options;
    s && t.setAttribute("aria-describedby", n.id);
  }
  destroy() {
    this.destroyHandlers(), this.destroyDisplay();
  }
  getInnerContent() {
    const { fromElement: t, content: n, isHtml: s, fromAnchor: o } = this.options;
    if (n)
      return n;
    if (t || o) {
      const r = o ? this.getAnchorElement() : document.querySelector(t);
      return r ? s ? r.innerHTML : r.innerText : "";
    } else
      Te(this, "Could not resolve inner content");
  }
  getAnchorElement() {
    const { trigger: t } = this.elements, { href: n } = t, s = n ? n.split("#")[1] : null, o = s ? document.getElementById(s) : null;
    return o || console.error("Unable to get 'fromAnchor' element", t), o;
  }
  createContentElement() {
    const { options: t } = this, n = Cd(t.template(t)), s = n.querySelector(Oh), o = this.getInnerContent();
    t.isHtml ? s.innerHTML = o : s.textContent = o, n.id = hi(), t.contentClass && n.classList.add(t.contentClass), this.elements.content = n, this.elements.contentArrow = n.querySelector(Th), document.body.appendChild(n);
  }
  attachHandlers() {
    const { trigger: t } = this.elements, { showEvents: n, hideEvents: s, delay: o } = this.options;
    let r = null;
    const i = (u) => {
      r || (r = setTimeout(() => {
        this.show(u), clearTimeout(r);
      }, o));
    }, a = (u) => {
      r && (clearTimeout(r), r = null), this.hide(u);
    }, l = (u) => {
      u.key === "Escape" && this.hide(u);
    };
    n.forEach((u) => {
      t.addEventListener(u, i);
    }), s.forEach((u) => {
      t.addEventListener(u, a);
    }), document.addEventListener("keydown", l), this.handlers = { onShow: i, onHide: a, onDocumentKeydown: l };
  }
  destroyHandlers() {
    const { trigger: t } = this, { onShow: n, onHide: s, onDocumentKeydown: o } = this.handlers, { showEvents: r, hideEvents: i } = this.options;
    n && r.forEach((a) => {
      t.removeEventListener(a, n);
    }), s && i.forEach((a) => {
      t.removeEventListener(a, s);
    }), o && document.removeEventListener("keydown", o);
  }
  setState(t, n) {
    const s = {
      instance: this,
      isOpen: t,
      event: n
    }, { trigger: o, content: r } = this.elements, { openClass: i } = this.options, a = (l) => l.classList[t ? "add" : "remove"](i);
    a(o), a(r), this.isOpen = t, this.options.onChange(s), o.dispatchEvent(this.createEvent("change", s)), this.destroyFloatingInstance(), t && this.createFloatingInstance();
  }
  createEvent(t, n) {
    return new CustomEvent(Pn("tooltip:" + t), { detail: n });
  }
  createFloatingInstance() {
    this.floatingCleanup = ol(this.elements, this.floatingOptions);
  }
  destroyFloatingInstance() {
    this.floatingCleanup && (this.floatingCleanup(), this.floatingCleanup = null);
  }
  show(t) {
    this.setState(!0, t);
  }
  hide(t) {
    this.setState(!1, t);
  }
};
Se(Ki, "defaults", {
  /**
   * Should the tooltip and content be linked accessibly
   * - Note tooltips can only apply to interactive elements! (ie button, input, role="...", etc)
   * @type {Boolean}
   */
  accessible: !0,
  /**
   * String/markup to insert into tooltip display
   * @type {String}
   */
  content: null,
  openClass: "is-active",
  contentClass: "",
  isHtml: !1,
  /**
   * Pull content from pre-existing content on page 
   * @type {String|Node}
   */
  fromElement: null,
  /**
   * If used on a link that is an anchor link it will display the content of the anchor like fromElement
   */
  fromAnchor: !1,
  /**
   * Move the content to the bottom of the document
   * @type {Boolean}
   */
  endOfDocument: !0,
  /**
   * Events to show tooltip on
   * @type {Array.<String>}
   */
  showEvents: ["pointerenter", "focus"],
  /**
   * Events to hide tooltip on
   * @type {Array.<String>}
   */
  hideEvents: ["pointerleave", "blur"],
  /**
   * Delay when using the directive
   * @type {Number}
   */
  delay: 500,
  /**
   * Template for the content display
   */
  template(e) {
    return `
        <div class="popover popover--tooltip">
          <div class="popover__inner" ${Eh}>
          </div>
          <span class="popover__arrow" data-ulu-tooltip-arrow></span>
        </div>
      `;
  },
  /**
   * Callback when tooltip is shown or hidden
   * @type {Function}
   */
  onChange(e) {
  }
}), Se(Ki, "defaultFloatingOptions", {
  // strategy: "fixed"
});
const Ah = class Al {
  /**
   * @param {*} data Data to put in blob file
   * @param {FileSaveOptions} options Options for file, see defaults (ie. type, filename)
   */
  constructor(t, n) {
    this.options = Object.assign({}, Al.defaults, n), this.data = t, this.blob = new Blob([t], { type: this.options.type }), this.url = URL.createObjectURL(this.blob);
  }
  /**
   * Remove the blob url 
   */
  destroy() {
    return URL.revokeObjectURL(this.url);
  }
  /**
   * Get the blob url
   */
  getUrl() {
    return this.url;
  }
  /**
   * Create link element with blob as href
   * @param {String} text The text to put in the link
   */
  createLink(t) {
    const n = document.createElement("a"), s = document.createTextNode(t);
    return n.setAttribute("download", this.options.filename), n.setAttribute("href", this.url), n.appendChild(s), n;
  }
  /**
   * Check for Compatibility (optional, implement on user side)
   */
  static isBrowserSupported() {
    return "FileReader" in window;
  }
};
Se(Ah, "defaults", {
  filename: "filesave-file.txt",
  type: "text/plain;charset=utf-8"
});
const kh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  BreakpointManager: Xa,
  ComponentInitializer: Pe,
  Resizer: nl,
  Slider: Tl,
  classLoggerLog: Ue,
  classLoggerLogError: Te,
  classLoggerLogWarning: Xs,
  createFloatingUi: ol,
  createUluEvent: Ht,
  dataAttributeToDatasetKey: qa,
  detailsGroupInitializer: Za,
  dialogBaseAttribute: Ja,
  dialogInitializer: Qa,
  dispatchCoreEvent: Zn,
  ensureId: Jn,
  floatingUiDefaults: rl,
  getCoreEventName: di,
  getSetting: Wa,
  getUluEventName: Pn,
  newId: hi,
  popoverInitializer: In,
  scrollSliderInitializer: mi,
  scrollpointInitializer: tr,
  setPositionClasses: Ka,
  sliderInitializer: jn,
  themeToggleInitializer: sn,
  tooltipInitializer: gs,
  wrapSettingString: Yt
}, Symbol.toStringTag, { value: "Module" })), Mh = {
  name: "UluModal",
  components: {
    UluIcon: pe
  },
  emits: ["update:modelValue", "close", "open"],
  props: {
    /**
     * Controls the visibility of the modal (for v-model).
     */
    modelValue: Boolean,
    /**
     * Target for Vue's Teleport. Defaults to 'body'.
     * Set to `false` to disable teleporting (modal renders inline).
     * Set to `null` or `undefined` for `body` fallback with disabled as false.
     */
    teleport: {
      type: [String, Boolean, Object],
      // Allow string for target selector, or false to disable, or object (Dome node)
      default: "body"
    },
    /**
     * When open and not non-modal, the body is prevented from scrolling (defaults to true).
     */
    preventScroll: {
      type: Boolean,
      default: !0
    },
    /**
     * Compensate for layout shift when preventing scroll. Which adds padding equal to scrollbars 
     * width while dialog is open
     */
    preventScrollShift: {
      type: Boolean,
      default: !0
    },
    /**
     * Use non-modal interface for dialog
     */
    nonModal: Boolean,
    /**
     * Close modal on click outside
     */
    clickOutsideCloses: {
      type: Boolean,
      default: !0
    },
    /**
     * Enable resizer
     */
    allowResize: Boolean,
    /**
     * Position (any position that modal.scss supports)
     */
    position: {
      type: String,
      default: "center"
    },
    /**
     * If `true`, the modal body will fill the available space. 
     */
    bodyFills: Boolean,
    /**
     * If `true`, no backdrop will be displayed behind the modal
     */
    noBackdrop: Boolean,
    /**
     * If `true`, the modal will not have a minimum height
     */
    noMinHeight: Boolean,
    /**
     * Set aria-labelledby by element id (to add accessible label)
     * - Use this if you are not using the default modal title (custom titles)
     */
    labelledby: String,
    /**
     * Set aria-describedby by element id (to add accessible description)
     * - This is usually content you passed into the modal body (paragraph/etc)
     */
    describedby: String,
    /**
     * Text for modal title in header (can use title slot as well for complex markup), if not passed the header will be omitted
     */
    title: String,
    /**
     * Optional icon for before title (uses UluIcon interface)
     */
    titleIcon: String,
    /**
     * Default icon for resizer
     */
    resizerIcon: String,
    /**
     * Default icon for close button (uses UluIcon interface)
     */
    closeIcon: String,
    /**
     * Classes for elements ({ container, header, title, body, footer })
     * - Any valid class binding value per element
     */
    classes: {
      type: Object,
      default: () => ({})
    },
    /**
     * Modifiers (to add any modifier classes based on base class [ie. 'tertiary'])
     */
    modifiers: [String, Array]
  },
  data() {
    return {
      containerWidth: null,
      titleId: ke("ulu-modal-title"),
      bodyOverflowValue: null,
      bodyPaddingRightValue: null,
      isResizing: !1
    };
  },
  setup(e) {
    const t = Ca(), n = F(() => e.title || t.title), s = F(() => {
      const { allowResize: a, position: l } = e;
      if (!a || !l) return;
      const u = ["left", "right", "center"];
      return u.includes(l) ? !0 : (console.warn(`Passed invalid position for resize (${l}), use ${u.join(", ")}`), !1);
    }), o = F(() => e.position === "center" ? "type:resizeBoth" : "type:resizeHorizontal"), r = F(() => ({
      [e.position]: e.position,
      resize: e.allowResize,
      "no-resize": !e.allowResize,
      "no-header": !n.value,
      "body-fills": e.bodyFills,
      "no-backdrop": e.noBackdrop,
      "no-min-height": e.noMinHeight,
      "non-modal": e.nonModal,
      "resizer-active": s.value
    })), { resolvedModifiers: i } = We({
      props: e,
      baseClass: "modal",
      internal: r
    });
    return {
      resolvedModifiers: i,
      hasHeader: n,
      resizerEnabled: s,
      resizerIconType: o
    };
  },
  computed: {
    resolvedLabelledby() {
      const { labelledby: e, titleId: t } = this;
      return e || t;
    }
  },
  watch: {
    modelValue: {
      // So that it runs on mount (if modelValue is initially true)
      immediate: !0,
      handler(e) {
        this.$nextTick(() => {
          const { container: t } = this.$refs;
          e ? (t[this.nonModal ? "show" : "showModal"](), this.$emit("open")) : t.close();
        });
      }
    },
    resizerEnabled: {
      immediate: !1,
      // Don't run on initial mount, as setupResizer is called in mounted
      handler(e) {
        e ? this.$nextTick(() => {
          this.setupResizer();
        }) : this.destroyResizer();
      }
    },
    position(e, t) {
      e !== t && (this.destroyResizer(), this.$nextTick(() => {
        this.setupResizer();
      }));
    }
  },
  methods: {
    close() {
      this.$emit("update:modelValue", !1), this.$emit("close");
    },
    handleDialogCloseEvent() {
      this.modelValue && (this.$emit("update:modelValue", !1), this.$emit("close"));
    },
    handleClick(e) {
      if (this.clickOutsideCloses && !this.isResizing) {
        const { target: t } = e, { container: n } = this.$refs;
        t === n && Nu(n, e) && this.close();
      }
    },
    setupPreventScroll() {
      const { body: e } = document;
      this.bodyOverflowValue = e.style.overflow, this.bodyPaddingRightValue = e.style.paddingRight;
    },
    destroyPreventScroll() {
      this.restoreScroll && this.restoreScroll();
    },
    handleToggle(e) {
      if (!this.nonModal && this.preventScroll) {
        const { preventScrollShift: t } = this;
        e.newState === "open" ? this.restoreScroll = Fu({ preventShift: t }) : this.destroyPreventScroll();
      }
    },
    setupResizer() {
      const { position: e, resizerEnabled: t } = this;
      if (t) {
        const { container: n, resizer: s } = this.$refs, o = e === "center" ? { fromX: "right", fromY: "bottom", multiplier: 2 } : { fromX: e === "right" ? "left" : "right" };
        this.resizerInstance = new nl(n, s, o), this.handleResizerStart = () => {
          this.isResizing = !0;
        }, this.handleResizerEnd = () => {
          setTimeout(() => {
            this.isResizing = !1;
          }, 0);
        }, n.addEventListener("ulu:resizer:start", this.handleResizerStart), n.addEventListener("ulu:resizer:end", this.handleResizerEnd);
      }
    },
    destroyResizer() {
      const { container: e } = this.$refs;
      this.resizerInstance && (this.resizerInstance.destroy(), this.resizerInstance = null), this.handleResizerStart && e.removeEventListener("ulu:resizer:start", this.handleResizerStart), this.handleResizerEnd && e.removeEventListener("ulu:resizer:end", this.handleResizerEnd);
    }
  },
  mounted() {
    this.preventScroll && this.setupPreventScroll(), this.setupResizer();
  },
  beforeUnmount() {
    const { container: e } = this.$refs;
    e && e.open && e.close(), this.destroyPreventScroll(), this.destroyResizer();
  }
}, $h = ["aria-labelledby", "aria-describedby"], Ph = ["id"], Ih = { class: "modal__title-text" }, Lh = {
  key: 2,
  class: "modal__resizer",
  ref: "resizer",
  type: "button"
};
function jh(e, t, n, s, o, r) {
  const i = ye("UluIcon");
  return b(), N(os, {
    to: n.teleport === !1 ? null : n.teleport,
    disabled: n.teleport === !1
  }, [
    M("dialog", {
      class: $(["modal", [s.resolvedModifiers, n.classes.container]]),
      "aria-labelledby": r.resolvedLabelledby,
      "aria-describedby": n.describedby,
      ref: "container",
      style: ve({ width: o.containerWidth }),
      onCancel: t[1] || (t[1] = Su((...a) => r.close && r.close(...a), ["prevent"])),
      onClose: t[2] || (t[2] = (...a) => r.handleDialogCloseEvent && r.handleDialogCloseEvent(...a)),
      onClick: t[3] || (t[3] = (...a) => r.handleClick && r.handleClick(...a)),
      onToggle: t[4] || (t[4] = (...a) => r.handleToggle && r.handleToggle(...a))
    }, [
      s.hasHeader ? (b(), O("header", {
        key: 0,
        class: $(["modal__header", n.classes.header])
      }, [
        M("h2", {
          class: $(["modal__title", n.classes.title]),
          id: o.titleId
        }, [
          P(e.$slots, "title", { close: r.close }, () => [
            n.titleIcon ? (b(), N(i, {
              key: 0,
              class: "modal__title-icon",
              icon: n.titleIcon
            }, null, 8, ["icon"])) : U("", !0),
            M("span", Ih, H(n.title), 1)
          ])
        ], 10, Ph),
        M("button", {
          class: "modal__close",
          "aria-label": "Close modal",
          onClick: t[0] || (t[0] = (...a) => r.close && r.close(...a)),
          autofocus: ""
        }, [
          P(e.$slots, "closeIcon", {}, () => [
            te(i, {
              class: "modal__close-icon",
              icon: n.closeIcon || "type:close"
            }, null, 8, ["icon"])
          ])
        ])
      ], 2)) : U("", !0),
      M("div", {
        class: $(["modal__body", n.classes.body])
      }, [
        P(e.$slots, "default", { close: r.close })
      ], 2),
      e.$slots.footer ? (b(), O("div", {
        key: 1,
        class: $(["site-modal__footer", n.classes.footer])
      }, [
        P(e.$slots, "footer", { close: r.close })
      ], 2)) : U("", !0),
      s.resizerEnabled ? (b(), O("button", Lh, [
        P(e.$slots, "resizerIcon", {}, () => [
          te(i, {
            class: "modal__resizer-icon",
            icon: n.resizerIcon || s.resizerIconType
          }, null, 8, ["icon"])
        ])
      ], 512)) : U("", !0)
    ], 46, $h)
  ], 8, ["to", "disabled"]);
}
const kl = /* @__PURE__ */ ce(Mh, [["render", jh]]), pn = [], Rh = J({
  /**
   * Holds active component options (including component, and options)
   */
  active: null,
  /**
   * Populated with any props passed to open method, bound to modal component
   */
  activeProps: null
}), vn = Rh.value, Gi = {
  data: vn,
  modals: pn
}, Bh = (e) => ({
  open(t, n = null) {
    const s = this.get(t);
    vn.active = Tt(s), vn.activeProps = Object.assign({}, s.props, n);
  },
  /**
   * Close the active modal
   * @param {String|Node} focusTo The element or selector for an element to programmatically focus after modal close
   * @see https://www.deque.com/blog/accessible-routing-in-javascript-frameworks/
   */
  close() {
    vn.active = null, vn.activeProps = null;
  },
  /**
   * Get a modal's config object by name
   * @return {Object} Modal config object
   */
  get(t) {
    const n = pn.find((s) => s.name === t);
    if (n)
      return n;
    throw new Error(`Unable to find modal named: ${t}`);
  },
  /**
   * Add a modal config
   */
  add(t) {
    const n = e(t);
    pn.push(n);
  },
  /**
   * Removes a modal config by name
   * @return {Object} Modal that was removed
   */
  remove(t) {
    const n = pn.findIndex((s) => s.name === t);
    if (n > -1)
      return pn.splice(n, 1);
    warn("unable to find modal to remove");
  }
}), Uh = {
  modals: [],
  modalOptions: {}
};
function Kw(e, t) {
  const n = Object.assign({}, Uh, t), o = Bh((r) => Object.assign({}, n.modalOptions, r));
  e.component("UluModalsDisplay", mc), e.component("UluModal", kl), n.modals.forEach((r) => {
    o.add(r);
  }), Gi.options = n, e.config.globalProperties.$uluModals = o, e.provide("uluModals", o), e.config.globalProperties.$uluModalsState = Gi;
}
const Fh = {
  name: "UluToast",
  components: {
    UluIcon: pe
  },
  props: {
    /**
     * Toast configuration
     */
    toast: Object,
    /**
     * Icons for each element { icon, header, content, date, actions, action, closeButton, title, body, closeButton }
     */
    classes: {
      type: Object,
      default: () => ({
        content: "type-small",
        date: "type-small-x",
        actions: "type-small-x",
        action: "button button--small button--outline",
        closeButton: "button button--icon button--transparent"
      })
    }
  },
  methods: {
    handleAction(e, t) {
      const { toast: n } = this;
      this.toast.close(), this.$nextTick(() => {
        t(e, n, t);
      });
    }
  }
}, Nh = ["onClick"];
function zh(e, t, n, s, o, r) {
  const i = ye("UluIcon");
  return b(), O("div", {
    class: $(["toast", [
      {
        "toast--persistent": !n.toast.duration
      },
      n.toast?.class
    ]])
  }, [
    n.toast.icon || e.$slots.icon ? (b(), O("div", {
      key: 0,
      class: $(["toast__icon", n.classes.icon])
    }, [
      P(e.$slots, "icon", { toast: n.toast }, () => [
        n.toast.icon ? (b(), N(i, {
          key: 0,
          icon: n.toast.icon
        }, null, 8, ["icon"])) : U("", !0)
      ])
    ], 2)) : U("", !0),
    M("div", {
      class: $(["toast__content", n.classes.content])
    }, [
      P(e.$slots, "content", { toast: n.toast }, () => [
        n.toast.title ? (b(), O("div", {
          key: 0,
          class: $(["toast__header", n.classes.header])
        }, [
          M("strong", {
            class: $(["toast__title", n.classes.title])
          }, H(n.toast.title), 3),
          n.toast.date ? (b(), O("span", {
            key: 0,
            class: $(["toast__date", n.classes.date])
          }, H(n.toast.date), 3)) : U("", !0)
        ], 2)) : U("", !0),
        n.toast.description ? (b(), O("div", {
          key: 1,
          class: $(["toast__body", n.classes.body])
        }, H(n.toast.description), 3)) : U("", !0)
      ])
    ], 2),
    n.toast.actions?.length ? (b(), O("div", {
      key: 1,
      class: $(["toast__actions", n.classes.actions])
    }, [
      (b(!0), O(ee, null, se(n.toast.actions, (a, l) => (b(), O("button", {
        key: l,
        class: $(["toast__action", n.classes.action]),
        onClick: (u) => r.handleAction(u, a)
      }, H(a.label), 11, Nh))), 128))
    ], 2)) : U("", !0),
    M("button", {
      class: $(["toast__close", n.classes.closeButton]),
      onClick: t[0] || (t[0] = (...a) => n.toast.close && n.toast.close(...a))
    }, [
      te(i, { icon: "type:close" })
    ], 2)
  ], 2);
}
const Ml = /* @__PURE__ */ ce(Fh, [["render", zh]]), Xi = {
  toastOptions: {
    /**
     * Component used to render the toast in the display
     */
    component: Tt(Ml),
    /**
     * Duration of toast
     */
    duration: 6e3,
    // 8.5s
    /**
     * Array of actions { label, click }
     */
    actions: []
  },
  pluginOptions: {
    teleportTo: "body",
    /**
     * Position of the toast container (holds toasts)
     */
    position: ["top", "right"]
  }
}, { assign: js } = Object;
let Hh = 0;
const pt = kn({
  toasts: [],
  /**
   * Saveable 
   */
  pluginOptions: Xi.pluginOptions,
  toastOptions: Xi.toastOptions,
  setToastOptions(e) {
    return this.toastOptions = js({}, this.toastOptions, e), this.pluginOptions;
  },
  setPluginOptions(e) {
    return this.pluginOptions = js({}, this.pluginOptions, e), this.pluginOptions;
  },
  createToast(e) {
    const t = `toast-${++Hh}`;
    return js({}, this.toastOptions, e, {
      uid: t,
      close() {
        Ko.remove(t);
      }
    });
  }
}), Ko = {
  /**
   * 
   * @param {Object} options Toast options
   * @returns Toast object (to be used to remove)
   */
  add(e) {
    const t = pt.createToast(e);
    return pt.toasts.unshift(t), t.duration && setTimeout(() => {
      this.remove(t.uid);
    }, t.duration), t;
  },
  /**
   * 
   * @param {Object} toast Toast uid
   */
  remove(e) {
    const t = pt.toasts.findIndex((n) => n.uid === e);
    t > -1 && pt.toasts.splice(t, 1);
  },
  /**
   * Remove all toasts
   */
  removeAll() {
    pt.toasts = [];
  }
}, Dh = {
  name: "UluTooltipDisplay",
  data() {
    const { toasts: e, pluginOptions: t } = pt;
    return { toasts: e, pluginOptions: t };
  },
  computed: {
    classes() {
      const { position: e } = this.pluginOptions;
      return e.map((n) => `toast-container--${n}`);
    }
  }
};
function Vh(e, t, n, s, o, r) {
  return b(), N(os, {
    to: o.pluginOptions.teleportTo
  }, [
    te(Ea, {
      class: $(["toast-container", r.classes]),
      name: "toast-animation",
      tag: "div"
    }, {
      default: D(() => [
        (b(!0), O(ee, null, se(o.toasts, (i) => (b(), N(le(i.component), {
          key: i.uid,
          toast: i
        }, null, 8, ["toast"]))), 128))
      ]),
      _: 1
    }, 8, ["class"])
  ], 8, ["to"]);
}
const Wh = /* @__PURE__ */ ce(Dh, [["render", Vh]]);
function Gw(e, t = {}) {
  pt.setPluginOptions(t?.plugin), pt.setToastOptions(t?.toast), e.component("UluToast", Ml), e.component("UluToastDisplay", Wh), e.config.globalProperties.$uluToast = Ko, e.provide("uluToast", Ko);
}
const qh = {
  /**
   * Set an initial value (value in mounted, SSR)
   */
  initialValue: null,
  /**
   * Function called after init (passed manager)
   */
  onReady: null,
  /**
   * Options sent to CssBreakpoints library
   */
  plugin: {
    customProperty: "--breakpoint"
  }
};
function Kh(e) {
  const t = Object.assign({}, qh, e), n = J(null), s = J(t.initialValue), o = J(null);
  return (async () => {
    if (!zu()) return;
    await new Promise((c) => {
      document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", () => c()) : c();
    });
    const i = await Promise.resolve().then(() => kh), { BreakpointManager: a } = i, l = Tt(new a(t.plugin));
    n.value = Tt(l);
    const u = () => {
      s.value = l.active, o.value = l.resizeDirection;
    };
    u(), t.onReady && t.onReady(l), l.onChange(u);
  })(), { breakpointManager: n, breakpointActive: s, breakpointDirection: o };
}
const Gh = {
  /**
   * Breakpoint for mobile down/max
   */
  breakpointMobile: "small",
  /**
   * Options to pass to useBreakpointManager()
   */
  managerOptions: {}
};
function Xw(e, t) {
  const n = J(!1), s = Object.assign({}, Gh, t), { breakpointMobile: o } = s, { onReady: r } = s.managerOptions, i = {
    onReady(d) {
      d.at(o).max({
        on() {
          n.value = !0;
        },
        off() {
          n.value = !1;
        }
      }), r && r(d);
    }
  }, a = Object.assign({}, s.managerOptions, i), {
    breakpointManager: l,
    breakpointActive: u,
    breakpointDirection: c
  } = Kh(a);
  e.provide("uluBreakpointActive", F(() => u.value)), e.provide("uluBreakpointDirection", F(() => c.value)), e.provide("uluBreakpointManager", F(() => l.value)), e.provide("uluIsMobile", F(() => n.value));
}
const Go = /* @__PURE__ */ new Set(), Ae = /* @__PURE__ */ new WeakMap(), kt = /* @__PURE__ */ new WeakMap(), Re = /* @__PURE__ */ new WeakMap(), Cn = /* @__PURE__ */ new WeakMap(), Rs = /* @__PURE__ */ new WeakMap(), gn = /* @__PURE__ */ new WeakMap(), Et = /* @__PURE__ */ new WeakMap(), vt = /* @__PURE__ */ new WeakMap(), zt = /* @__PURE__ */ new WeakSet();
let Ie, vi = 0, gi = 0;
const ct = "__aa_tgt", En = "__aa_del", ts = "__aa_new", $l = (e) => {
  const t = Jh(e);
  t && t.forEach((n) => Qh(n));
}, Xh = (e) => {
  e.forEach((t) => {
    t.target === Ie && Yh(), Ae.has(t.target) && Rt(t.target);
  });
};
function Pl(e) {
  const t = e.getBoundingClientRect(), n = Ie?.clientWidth || 0, s = Ie?.clientHeight || 0;
  return t.bottom < 0 || t.top > s || t.right < 0 || t.left > n;
}
function bi(e) {
  const t = Cn.get(e);
  t?.disconnect();
  let n = Ae.get(e), s = 0;
  const o = 5;
  n || (n = Zt(e), Ae.set(e, n));
  const { offsetWidth: r, offsetHeight: i } = Ie, l = [
    n.top - o,
    r - (n.left + o + n.width),
    i - (n.top + o + n.height),
    n.left - o
  ].map((c) => `${-1 * Math.floor(c)}px`).join(" "), u = new IntersectionObserver(() => {
    ++s > 1 && Rt(e);
  }, {
    root: Ie,
    threshold: 1,
    rootMargin: l
  });
  u.observe(e), Cn.set(e, u);
}
function Rt(e, t = !0) {
  clearTimeout(vt.get(e));
  const n = bs(e), s = t ? On(n) ? 500 : n.duration : 0;
  vt.set(e, setTimeout(async () => {
    const o = Re.get(e);
    try {
      await o?.finished, Ae.set(e, Zt(e)), bi(e);
    } catch {
    }
  }, s));
}
function Yh() {
  clearTimeout(vt.get(Ie)), vt.set(Ie, setTimeout(() => {
    Go.forEach((e) => qn(e, (t) => Il(() => Rt(t))));
  }, 100));
}
function Zh(e) {
  setTimeout(() => {
    gn.set(e, setInterval(() => Il(Rt.bind(null, e)), 2e3));
  }, Math.round(2e3 * Math.random()));
}
function Il(e) {
  typeof requestIdleCallback == "function" ? requestIdleCallback(() => e()) : requestAnimationFrame(() => e());
}
let at;
const Ll = typeof window < "u" && "ResizeObserver" in window;
Ll && (Ie = document.documentElement, new MutationObserver($l), at = new ResizeObserver(Xh), window.addEventListener("scroll", () => {
  gi = window.scrollY, vi = window.scrollX;
}), at.observe(Ie));
function Jh(e) {
  return e.reduce((s, o) => [
    ...s,
    ...Array.from(o.addedNodes),
    ...Array.from(o.removedNodes)
  ], []).every((s) => s.nodeName === "#comment") ? !1 : e.reduce((s, o) => {
    if (s === !1)
      return !1;
    if (o.target instanceof Element) {
      if (Bs(o.target), !s.has(o.target)) {
        s.add(o.target);
        for (let r = 0; r < o.target.children.length; r++) {
          const i = o.target.children.item(r);
          if (i) {
            if (En in i)
              return !1;
            Bs(o.target, i), s.add(i);
          }
        }
      }
      if (o.removedNodes.length)
        for (let r = 0; r < o.removedNodes.length; r++) {
          const i = o.removedNodes[r];
          if (En in i)
            return !1;
          i instanceof Element && (s.add(i), Bs(o.target, i), kt.set(i, [
            o.previousSibling,
            o.nextSibling
          ]));
        }
    }
    return s;
  }, /* @__PURE__ */ new Set());
}
function Bs(e, t) {
  !t && !(ct in e) ? Object.defineProperty(e, ct, { value: e }) : t && !(ct in t) && Object.defineProperty(t, ct, { value: e });
}
function Qh(e) {
  var t, n;
  const s = e.isConnected, o = Ae.has(e);
  s && kt.has(e) && kt.delete(e), ((t = Re.get(e)) === null || t === void 0 ? void 0 : t.playState) !== "finished" && ((n = Re.get(e)) === null || n === void 0 || n.cancel()), ts in e ? Yi(e) : o && s ? tm(e) : o && !s ? nm(e) : Yi(e);
}
function Ye(e) {
  return Number(e.replace(/[^0-9.\-]/g, ""));
}
function em(e) {
  let t = e.parentElement;
  for (; t; ) {
    if (t.scrollLeft || t.scrollTop)
      return { x: t.scrollLeft, y: t.scrollTop };
    t = t.parentElement;
  }
  return { x: 0, y: 0 };
}
function Zt(e) {
  const t = e.getBoundingClientRect(), { x: n, y: s } = em(e);
  return {
    top: t.top + s,
    left: t.left + n,
    width: t.width,
    height: t.height
  };
}
function jl(e, t, n) {
  let s = t.width, o = t.height, r = n.width, i = n.height;
  const a = getComputedStyle(e);
  if (a.getPropertyValue("box-sizing") === "content-box") {
    const u = Ye(a.paddingTop) + Ye(a.paddingBottom) + Ye(a.borderTopWidth) + Ye(a.borderBottomWidth), c = Ye(a.paddingLeft) + Ye(a.paddingRight) + Ye(a.borderRightWidth) + Ye(a.borderLeftWidth);
    s -= c, r -= c, o -= u, i -= u;
  }
  return [s, r, o, i].map(Math.round);
}
function bs(e) {
  return ct in e && Et.has(e[ct]) ? Et.get(e[ct]) : { duration: 250, easing: "ease-in-out" };
}
function Rl(e) {
  if (ct in e)
    return e[ct];
}
function yi(e) {
  const t = Rl(e);
  return t ? zt.has(t) : !1;
}
function qn(e, ...t) {
  t.forEach((n) => n(e, Et.has(e)));
  for (let n = 0; n < e.children.length; n++) {
    const s = e.children.item(n);
    s && t.forEach((o) => o(s, Et.has(s)));
  }
}
function xi(e) {
  return Array.isArray(e) ? e : [e];
}
function On(e) {
  return typeof e == "function";
}
function tm(e) {
  const t = Ae.get(e), n = Zt(e);
  if (!yi(e))
    return Ae.set(e, n);
  if (Pl(e)) {
    Ae.set(e, n), bi(e);
    return;
  }
  let s;
  if (!t)
    return;
  const o = bs(e);
  if (typeof o != "function") {
    let r = t.left - n.left, i = t.top - n.top;
    const a = t.left + t.width - (n.left + n.width);
    t.top + t.height - (n.top + n.height) == 0 && (i = 0), a == 0 && (r = 0);
    const [u, c, d, f] = jl(e, t, n), h = {
      transform: `translate(${r}px, ${i}px)`
    }, m = {
      transform: "translate(0, 0)"
    };
    u !== c && (h.width = `${u}px`, m.width = `${c}px`), d !== f && (h.height = `${d}px`, m.height = `${f}px`), s = e.animate([h, m], {
      duration: o.duration,
      easing: o.easing
    });
  } else {
    const [r] = xi(o(e, "remain", t, n));
    s = new Animation(r), s.play();
  }
  Re.set(e, s), Ae.set(e, n), s.addEventListener("finish", Rt.bind(null, e, !1), {
    once: !0
  });
}
function Yi(e) {
  ts in e && delete e[ts];
  const t = Zt(e);
  Ae.set(e, t);
  const n = bs(e);
  if (!yi(e))
    return;
  if (Pl(e)) {
    bi(e);
    return;
  }
  let s;
  if (typeof n != "function")
    s = e.animate([
      { transform: "scale(.98)", opacity: 0 },
      { transform: "scale(0.98)", opacity: 0, offset: 0.5 },
      { transform: "scale(1)", opacity: 1 }
    ], {
      duration: n.duration * 1.5,
      easing: "ease-in"
    });
  else {
    const [o] = xi(n(e, "add", t));
    s = new Animation(o), s.play();
  }
  Re.set(e, s), s.addEventListener("finish", Rt.bind(null, e, !1), {
    once: !0
  });
}
function Zi(e, t) {
  var n;
  e.remove(), Ae.delete(e), kt.delete(e), Re.delete(e), (n = Cn.get(e)) === null || n === void 0 || n.disconnect(), setTimeout(() => {
    if (En in e && delete e[En], Object.defineProperty(e, ts, { value: !0, configurable: !0 }), t && e instanceof HTMLElement)
      for (const s in t)
        e.style[s] = "";
  }, 0);
}
function nm(e) {
  var t;
  if (!kt.has(e) || !Ae.has(e))
    return;
  const [n, s] = kt.get(e);
  Object.defineProperty(e, En, { value: !0, configurable: !0 });
  const o = window.scrollX, r = window.scrollY;
  if (s && s.parentNode && s.parentNode instanceof Element ? s.parentNode.insertBefore(e, s) : n && n.parentNode ? n.parentNode.appendChild(e) : (t = Rl(e)) === null || t === void 0 || t.appendChild(e), !yi(e))
    return Zi(e);
  const [i, a, l, u] = rm(e), c = bs(e), d = Ae.get(e);
  (o !== vi || r !== gi) && sm(e, o, r, c);
  let f, h = {
    position: "absolute",
    top: `${i}px`,
    left: `${a}px`,
    width: `${l}px`,
    height: `${u}px`,
    margin: "0",
    pointerEvents: "none",
    transformOrigin: "center",
    zIndex: "100"
  };
  if (!On(c))
    Object.assign(e.style, h), f = e.animate([
      {
        transform: "scale(1)",
        opacity: 1
      },
      {
        transform: "scale(.98)",
        opacity: 0
      }
    ], {
      duration: c.duration,
      easing: "ease-out"
    });
  else {
    const [m, p] = xi(c(e, "remove", d));
    p?.styleReset !== !1 && (h = p?.styleReset || h, Object.assign(e.style, h)), f = new Animation(m), f.play();
  }
  Re.set(e, f), f.addEventListener("finish", () => Zi(e, h), {
    once: !0
  });
}
function sm(e, t, n, s) {
  const o = vi - t, r = gi - n, i = document.documentElement.style.scrollBehavior;
  if (getComputedStyle(Ie).scrollBehavior === "smooth" && (document.documentElement.style.scrollBehavior = "auto"), window.scrollTo(window.scrollX + o, window.scrollY + r), !e.parentElement)
    return;
  const l = e.parentElement;
  let u = l.clientHeight, c = l.clientWidth;
  const d = performance.now();
  function f() {
    requestAnimationFrame(() => {
      if (!On(s)) {
        const h = u - l.clientHeight, m = c - l.clientWidth;
        d + s.duration > performance.now() ? (window.scrollTo({
          left: window.scrollX - m,
          top: window.scrollY - h
        }), u = l.clientHeight, c = l.clientWidth, f()) : document.documentElement.style.scrollBehavior = i;
      }
    });
  }
  f();
}
function rm(e) {
  var t;
  const n = Ae.get(e), [s, , o] = jl(e, n, Zt(e));
  let r = e.parentElement;
  for (; r && (getComputedStyle(r).position === "static" || r instanceof HTMLBodyElement); )
    r = r.parentElement;
  r || (r = document.body);
  const i = getComputedStyle(r), a = !Re.has(e) || ((t = Re.get(e)) === null || t === void 0 ? void 0 : t.playState) === "finished" ? Zt(r) : Ae.get(r), l = Math.round(n.top - a.top) - Ye(i.borderTopWidth), u = Math.round(n.left - a.left) - Ye(i.borderLeftWidth);
  return [l, u, s, o];
}
function om(e, t = {}) {
  if (Ll && at && !(window.matchMedia("(prefers-reduced-motion: reduce)").matches && !On(t) && !t.disrespectUserMotionPreference)) {
    zt.add(e), getComputedStyle(e).position === "static" && Object.assign(e.style, { position: "relative" }), qn(e, Rt, Zh, (i) => at?.observe(i)), On(t) ? Et.set(e, t) : Et.set(e, {
      duration: 250,
      easing: "ease-in-out",
      ...t
    });
    const r = new MutationObserver($l);
    r.observe(e, { childList: !0 }), Rs.set(e, r), Go.add(e);
  }
  return Object.freeze({
    parent: e,
    enable: () => {
      zt.add(e);
    },
    disable: () => {
      zt.delete(e), qn(e, (s) => {
        const o = Re.get(s);
        try {
          o?.cancel();
        } catch {
        }
        Re.delete(s);
        const r = vt.get(s);
        r && clearTimeout(r), vt.delete(s);
        const i = gn.get(s);
        i && clearInterval(i), gn.delete(s);
      });
    },
    isEnabled: () => zt.has(e),
    destroy: () => {
      zt.delete(e), Go.delete(e), Et.delete(e);
      const s = Rs.get(e);
      s?.disconnect(), Rs.delete(e), qn(e, (o) => {
        at?.unobserve(o);
        const r = Re.get(o);
        try {
          r?.cancel();
        } catch {
        }
        Re.delete(o);
        const i = Cn.get(o);
        i?.disconnect(), Cn.delete(o);
        const a = gn.get(o);
        a && clearInterval(a), gn.delete(o);
        const l = vt.get(o);
        l && clearTimeout(l), vt.delete(o), Ae.delete(o), kt.delete(o);
      });
    }
  });
}
function im(e) {
  const t = J();
  let n;
  function s(o) {
    n && (o ? n.enable() : n.disable());
  }
  return $t(() => {
    is((o) => {
      let r;
      t.value instanceof HTMLElement ? r = t.value : t.value && "$el" in t.value && t.value.$el instanceof HTMLElement && (r = t.value.$el), r && (n = om(r, e || {}), o(() => {
        var i;
        (i = n?.destroy) === null || i === void 0 || i.call(n), n = void 0;
      }));
    });
  }), as(() => {
    var o;
    (o = n?.destroy) === null || o === void 0 || o.call(n), n = void 0;
  }), [t, s];
}
const am = ["id", "aria-controls", "aria-expanded"], lm = ["id", "aria-hidden", "aria-labelledby"], Xo = {
  __name: "UluCollapsible",
  props: {
    /**
     * v-model for controlling open state
     */
    modelValue: {
      type: Boolean,
      default: void 0
    },
    /**
     * Set text for trigger (instead of using slot)
     */
    triggerText: String,
    /**
     * Closes with escape key
     */
    closeOnEscape: Boolean,
    /**
     * When the component is shown it should start visible or hidden
     */
    startOpen: Boolean,
    /**
     * Enable or configure animations.
     * - `true` to enable animations with default settings (default)
     * - `false` (disable)
     * - An object to provide custom options to auto-animate (e.g., { duration: 100, easing: 'linear' }).
     */
    animate: {
      type: [Boolean, Object],
      default: !0
    },
    /**
     * Classes for elements ({ container, trigger, content })
     * - Any valid class binding value per element
     */
    classes: {
      type: Object,
      default: () => ({
        container: "ulu-collapsible",
        trigger: "ulu-collapsible__trigger",
        content: "ulu-collapsible__content",
        containerOpen: "ulu-collapsible--open",
        containerClosed: "ulu-collapsible--closed"
      })
    }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, s = t, o = F(() => typeof n.animate == "object" ? n.animate : {}), [r, i] = im(o);
    $t(() => {
      i(!!n.animate);
    }), _e(() => n.animate, (m) => {
      i(!!m);
    });
    const a = F(() => n.modelValue !== void 0), l = J(n.startOpen), u = F({
      get() {
        return a.value ? n.modelValue : l.value;
      },
      set(m) {
        a.value ? s("update:modelValue", m) : l.value = m;
      }
    }), c = J(ke("ulu-collapsible-trigger")), d = J(ke("ulu-collapsible-content"));
    function f() {
      u.value = !u.value;
    }
    function h() {
      n.closeOnEscape && u.value && (u.value = !1);
    }
    return (m, p) => (b(), O("div", {
      ref_key: "container",
      ref: r,
      onKeydown: Sa(h, ["esc"]),
      class: $([e.classes.container, u.value ? e.classes.containerOpen : e.classes.containerClosed])
    }, [
      M("button", {
        class: $(e.classes.trigger),
        id: c.value,
        "aria-controls": d.value,
        "aria-expanded": u.value,
        onClick: f
      }, [
        P(m.$slots, "trigger", { isOpen: u.value }, () => [
          K(H(e.triggerText), 1)
        ])
      ], 10, am),
      u.value ? (b(), O("div", {
        key: 0,
        class: $(e.classes.content),
        tabindex: "-1",
        id: d.value,
        "aria-hidden": !u.value,
        "aria-labelledby": c.value
      }, [
        P(m.$slots, "default", {
          isOpen: u.value,
          toggle: f
        })
      ], 10, lm)) : U("", !0)
    ], 34));
  }
}, Yo = {
  __name: "UluAccordion",
  props: {
    /**
     * v-model for controlling open state  (optional)
     */
    modelValue: {
      type: Boolean,
      default: void 0
    },
    /**
     * Whether the accordion is open by default
     */
    startOpen: Boolean,
    /**
     * Enable or configure animations.
     * - `false` (default) to disable all animations.
     * - `true` to enable animations with default settings.
     * - An object to provide custom options to auto-animate (e.g., { duration: 100, easing: 'linear' }).
     */
    animate: {
      type: [Boolean, Object],
      default: !0
    },
    /**
     * Text to use for accordion, alternatively use #trigger slot
     */
    triggerText: String,
    /**
     * If using summary text sets the inner element the text is wrapped in, usually a headline or strong
     */
    triggerTextElement: {
      type: String,
      default: "strong"
    },
    /**
     * Classes for elements. See UluCollapsible for all available class keys (trigger, content, etc).
     * The 'icon' key is also available for the icon span.
     * - Any valid class binding value per element
     */
    classes: {
      type: Object,
      default: () => ({
        container: "accordion",
        trigger: "accordion__summary",
        content: "accordion__content",
        containerOpen: "is-active"
      })
    },
    /**
     * Class modifiers (ie. 'transparent', 'secondary', etc)
     */
    modifiers: [String, Array]
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, { resolvedModifiers: s } = We({ props: n, baseClass: "accordion" }), o = F(() => {
      const r = { ...n.classes };
      return r.container = [r.container, s.value], r;
    });
    return (r, i) => (b(), N(Xo, {
      "model-value": e.modelValue,
      "start-open": e.startOpen,
      "trigger-text": e.triggerText,
      classes: o.value,
      animate: e.animate,
      "onUpdate:modelValue": i[0] || (i[0] = (a) => r.$emit("update:modelValue", a))
    }, {
      trigger: D(({ isOpen: a }) => [
        P(r.$slots, "trigger", { isOpen: a }, () => [
          (b(), N(le(e.triggerTextElement), null, {
            default: D(() => [
              K(H(e.triggerText), 1)
            ]),
            _: 1
          }))
        ]),
        P(r.$slots, "icon", { isOpen: a }, () => [
          M("span", {
            class: $(["accordion__icon", e.classes.icon])
          }, [
            te(pe, {
              icon: a ? "type:collapse" : "type:expand",
              style: { display: "inline" }
            }, null, 8, ["icon"])
          ], 2)
        ])
      ]),
      default: D(({ isOpen: a, toggle: l }) => [
        P(r.$slots, "default", {
          isOpen: a,
          toggle: l
        })
      ]),
      _: 3
    }, 8, ["model-value", "start-open", "trigger-text", "classes", "animate"]));
  }
}, um = { class: "accordion-group" }, Yw = {
  __name: "UluAccordionGroup",
  props: {
    /**
     * Array of items to render as accordions.
     * Each item can have: title, content, isOpen, classes
     */
    items: {
      type: Array,
      default: () => []
    },
    /**
     * If using summary text sets the inner element the text is wrapped in, usually a headline or strong
     */
    triggerTextElement: {
      type: String,
      default: "strong"
    },
    /**
     * Class modifiers (ie. 'transparent', 'secondary', etc)
     */
    modifiers: [String, Array],
    /**
     * Enable or configure animations.
     * - `false` (default) to disable all animations.
     * - `true` to enable animations with default settings.
     * - An object to provide custom options to auto-animate (e.g., { duration: 100, easing: 'linear' }).
     */
    animate: {
      type: [Boolean, Object],
      default: !0
    }
  },
  setup(e) {
    const t = e, n = J([]);
    _e(() => t.items, (o) => {
      n.value = o.map((r) => ({
        ...r,
        isOpen: r.isOpen || !1
      }));
    }, { immediate: !0, deep: !0 });
    function s(o, r) {
      r ? n.value.forEach((i, a) => {
        i.isOpen = a === o;
      }) : n.value[o].isOpen = !1;
    }
    return (o, r) => (b(), O("div", um, [
      (b(!0), O(ee, null, se(n.value, (i, a) => (b(), N(Yo, {
        key: a,
        "model-value": i.isOpen,
        "onUpdate:modelValue": (l) => s(a, l),
        "trigger-text": i.title,
        classes: i.classes,
        "trigger-text-element": e.triggerTextElement,
        modifiers: e.modifiers,
        animate: e.animate
      }, Ct({
        default: D(({ isOpen: l, toggle: u }) => [
          P(o.$slots, "item", {
            item: i,
            index: a,
            isOpen: l,
            toggle: u
          }, () => [
            K(H(i.content), 1)
          ])
        ]),
        _: 2
      }, [
        o.$slots.trigger ? {
          name: "trigger",
          fn: D(({ isOpen: l }) => [
            P(o.$slots, "trigger", {
              item: i,
              index: a,
              isOpen: l
            })
          ]),
          key: "0"
        } : void 0,
        o.$slots.icon ? {
          name: "icon",
          fn: D(({ isOpen: l }) => [
            P(o.$slots, "icon", {
              item: i,
              index: a,
              isOpen: l
            })
          ]),
          key: "1"
        } : void 0
      ]), 1032, ["model-value", "onUpdate:modelValue", "trigger-text", "classes", "trigger-text-element", "modifiers", "animate"]))), 128))
    ]));
  }
}, Bl = {
  __name: "UluTag",
  props: {
    /**
     * Type (corresponds with styles setup for tag in scss module)
     */
    type: [String],
    /**
     * Size (corresponds with sizes setup for tag in scss module)
     */
    size: String,
    /**
     * Use counter style (for numbers, etc)
     */
    counter: Boolean,
    /**
     * Text for tag, or use slot
     */
    text: [String, Number],
    /**
     * Icon prop, if used will set the icon for the button, will use UluIcon (which uses font-awesome icons conditionally)
     * - If using custom icons use slot instead
     */
    icon: [String, Array],
    /**
     * Modifiers for tag class
     */
    modifiers: [String, Array]
  },
  setup(e) {
    const t = e, { resolvedModifiers: n } = We({ props: t, baseClass: "tag" });
    return (s, o) => (b(), O("span", {
      class: $(["tag", [
        {
          "tag--counter": e.counter,
          [`tag--${e.size}`]: e.size,
          [`tag--${e.type}`]: e.type
        },
        z(n)
      ]])
    }, [
      e.icon ? (b(), N(pe, {
        key: 0,
        icon: e.icon,
        spaced: ""
      }, null, 8, ["icon"])) : U("", !0),
      P(s.$slots, "default", {}, () => [
        M("span", null, H(e.text), 1)
      ])
    ], 2));
  }
}, cm = {
  name: "UluMenu",
  components: {
    UluIcon: pe,
    UluTag: Bl
  },
  emits: [
    /**
     * Fired anytime a item is clicked
     */
    "item-click"
  ],
  props: {
    /**
     * Items Array of Objects for each link
     * [{
     *   title: String (title of link)
     *   icon: Icon definition passed to UluIcon
     *   tag: Tag appearing after link text (count/etc), pass props you want bound to tag
     *   tooltip: Add tooltip to menu item (pass options for tooltip), unless iconOnly than the title is presented in the tooltip
     *   href: Will result in <a>
     *   click: Will be called on click and result in <button>
     *   to: Will result in <a> and use vue-router router-link component
     * }]
     */
    items: Array,
    /**
     * Classes object to add class bindings to the different elements
     * - { list, item, link, linkActive, linkExactActive, linkIcon, linkText }
     */
    classes: {
      type: Object,
      default: () => ({})
    },
    /**
     * Use icon only version of menu
     */
    iconOnly: Boolean,
    /**
     * Do not print menu items children recursively
     */
    noChildren: Boolean
  },
  methods: {
    handleItemClick(e, t) {
      t.click && t.click(e), this.$emit("item-click", { item: t, event: e });
    }
  }
};
function dm(e, t, n, s, o, r) {
  const i = ye("UluIcon"), a = ye("UluTag"), l = ye("UluMenu", !0), u = _a("ulu-tooltip");
  return n.items?.length ? (b(), O("ul", {
    key: 0,
    class: $(n.classes.list)
  }, [
    (b(!0), O(ee, null, se(n.items, (c, d) => (b(), O("li", {
      key: d,
      class: $([
        n.classes.item,
        c?.classes?.item,
        c.separatorBefore ? n.classes.itemSeparatorBefore : "",
        c.separatorAfter ? n.classes.itemSeparatorAfter : ""
      ])
    }, [
      Kt((b(), N(le(c.to || c.path ? "router-link" : c.click ? "button" : "a"), $e({ ref_for: !0 }, {
        ...c.to || c.path ? {
          to: c.to || c.path,
          activeClass: n.classes.linkActive || null,
          exactActiveClass: n.classes.linkExactActive || null
        } : {},
        ...c.href ? { href: c.href || "#" } : {}
      }, {
        onClick: (f) => {
          r.handleItemClick(f, c);
        },
        class: [n.classes.link, c?.classes?.link],
        "aria-label": n.iconOnly ? c.title : null,
        id: c.id
      }), {
        default: D(() => [
          P(e.$slots, "default", {
            item: c,
            index: d
          }, () => [
            c.icon ? (b(), N(i, {
              key: 0,
              icon: c.icon,
              class: $([n.classes.linkIcon, c?.classes?.linkIcon])
            }, null, 8, ["icon", "class"])) : U("", !0),
            M("span", {
              class: $([n.classes.linkText, c?.classes?.linkText])
            }, H(c.title), 3),
            c.tag ? (b(), N(a, $e({
              key: 1,
              ref_for: !0
            }, c.tag), null, 16)) : U("", !0)
          ])
        ]),
        _: 2
      }, 1040, ["onClick", "class", "aria-label", "id"])), [
        [u, n.iconOnly ? c.title : c.tooltip || null]
      ]),
      !n.noChildren && c?.children?.length ? (b(), N(l, {
        key: 0,
        iconOnly: n.iconOnly,
        classes: n.classes,
        items: c.children
      }, null, 8, ["iconOnly", "classes", "items"])) : U("", !0)
    ], 2))), 128))
  ], 2)) : U("", !0);
}
const Ul = /* @__PURE__ */ ce(cm, [["render", dm]]), fm = {
  __name: "UluMenuStack",
  props: {
    /**
     * Menu item (see UluMenu)
     */
    items: Array,
    /**
    * The HTML element to use as the container (e.g., 'nav', 'div', 'aside').
     */
    containerElement: {
      type: String,
      default: "nav"
    },
    /**
     * Hanging style menu
     */
    hanging: Boolean,
    /**
     * Compact style menu
     */
    compact: Boolean,
    /**
     * Don't include children of menu
     */
    noChildren: Boolean,
    /**
     * Class modifiers (ie. 'transparent', 'secondary', etc)
     */
    modifiers: [String, Array]
  },
  setup(e) {
    const t = e, n = F(() => ({
      hanging: t.hanging,
      compact: t.compact
    })), { resolvedModifiers: s } = We({
      props: t,
      internal: n,
      baseClass: "menu-stack"
    });
    return (o, r) => (b(), N(le(e.containerElement), {
      class: $(["menu-stack", z(s)])
    }, {
      default: D(() => [
        te(Ul, {
          items: e.items,
          classes: {
            list: "menu-stack__list",
            item: "menu-stack__item",
            link: "menu-stack__link",
            linkText: "menu-stack__link-text",
            linkIcon: "menu-stack__link-icon",
            itemSeparatorBefore: "menu-stack__item--separator-before",
            itemSeparatorAfter: "menu-stack__item--separator-after"
          },
          noChildren: e.noChildren
        }, null, 8, ["items", "noChildren"])
      ]),
      _: 1
    }, 8, ["class"]));
  }
}, Zw = {
  __name: "UluDropdown",
  props: {
    /**
     * Dropdown menu items (to be passed to UluMenu)
     */
    items: Array,
    /**
     * Optional text if not using slot
     */
    triggerText: String,
    /**
     * Pass classes object to UluPopover classes prop
     */
    popoverClasses: {
      type: Object,
      default: () => ({
        trigger: "button"
      })
    }
  },
  setup(e) {
    return (t, n) => (b(), N(us, { classes: e.popoverClasses }, {
      trigger: D(({ isOpen: s }) => [
        P(t.$slots, "trigger", { isOpen: s }, () => [
          M("span", null, H(e.triggerText), 1),
          te(pe, {
            class: "button__icon",
            icon: "type:dropdownExpand",
            style: ve({ transform: s ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.2s" })
          }, null, 8, ["style"])
        ])
      ]),
      default: D(() => [
        te(fm, { items: e.items }, null, 8, ["items"])
      ]),
      _: 3
    }, 8, ["classes"]));
  }
}, wi = J(!1), ns = {
  start: [],
  end: []
};
function _i() {
  window.removeEventListener("resize", _i), wi.value = !0, ns.start.forEach((e) => e());
}
function hm() {
  wi.value = !1, ns.end.forEach((e) => e()), window.addEventListener("resize", _i);
}
window.addEventListener("resize", _i), window.addEventListener("resize", ni(hm, 300));
function Ji(e, t) {
  return e.push(t), () => {
    const n = e.findIndex((s) => s === t);
    n > -1 && e.splice(n);
  };
}
function mm() {
  return {
    resizing: wi,
    onResizeStart(e) {
      return Ji(ns.start, e);
    },
    onResizeEnd(e) {
      return Ji(ns.end, e);
    }
  };
}
function Jw(e, t) {
  const n = Oa(), s = Du(), o = F(() => {
    const u = parseInt(n.query.page || "1", 10);
    return isNaN(u) || u < 1 ? 1 : u;
  }), r = F(() => !e.value || e.value.length === 0 ? 1 : Math.ceil(e.value.length / t));
  _e(r, (u) => {
    o.value > u && s.push({ query: { ...n.query, page: u } });
  });
  const i = F(() => {
    const u = (o.value - 1) * t, c = u + t;
    return e.value.slice(u, c);
  }), a = F(() => {
    if (r.value <= 1)
      return null;
    const u = {
      pages: {}
    }, c = o.value, d = r.value, f = 5, h = (g) => ({ query: { ...n.query, page: g } });
    c > 1 && (u.first = { href: h(1) }, u.previous = { href: h(c - 1) }), c < d && (u.next = { href: h(c + 1) }, u.last = { href: h(d) });
    let m, p;
    if (d <= f)
      m = 1, p = d;
    else {
      const g = Math.floor(f / 2), _ = Math.ceil(f / 2) - 1;
      c <= g ? (m = 1, p = f) : c + _ >= d ? (m = d - f + 1, p = d) : (m = c - g, p = c + _);
    }
    for (let g = m; g <= p; g++)
      u.pages[g] = { href: h(g) };
    return u;
  }), l = F(() => {
    const u = { previous: !1, next: !1 };
    if (!a.value || !a.value.pages) return u;
    const c = Object.keys(a.value.pages).map(Number);
    if (c.length === 0) return u;
    const d = Math.min(...c), f = Math.max(...c);
    return d > 1 && (u.previous = !0), f < r.value && (u.next = !0), u;
  });
  return {
    currentPage: o,
    totalPages: r,
    paginatedItems: i,
    pagerItems: a,
    pagerEllipses: l
  };
}
function Zo(e, t, n) {
  typeof e === "function" && (!n || n !== "titleTemplate" && !(n[0] === "o" && n[1] === "n")) && (e = e());
  let o;
  if (t && (o = t(n, e)), Array.isArray(o))
    return o.map((r) => Zo(r, t));
  if (o?.constructor === Object) {
    const r = {};
    for (const i of Object.keys(o))
      r[i] = Zo(o[i], t, i);
    return r;
  }
  return o;
}
const pm = (e, t) => Cu(t) ? zn(t) : t, vm = "usehead";
function gm() {
  if (Eu()) {
    const e = Ot(vm);
    if (!e)
      throw new Error("useHead() was called without provide context, ensure you call it through the setup() function.");
    return e;
  }
  throw new Error("useHead() was called without provide context, ensure you call it through the setup() function.");
}
function bm(e, t = {}) {
  const n = t.head || gm();
  return n.ssr ? n.push(e || {}, t) : ym(n, e, t);
}
function ym(e, t, n = {}) {
  const s = J(!1);
  let o;
  return is(() => {
    const i = s.value ? {} : Zo(t, pm);
    o ? o.patch(i) : o = e.push(i, n);
  }), Ou() && (as(() => {
    o.dispose();
  }), Tu(() => {
    s.value = !0;
  }), Au(() => {
    s.value = !1;
  })), o;
}
function ys(e, t) {
  let s = (e?.meta || {}).title;
  return typeof s == "function" && (s = s(t || e)), s;
}
function xm(e, t) {
  const s = Object.assign({}, {
    qualifier(i, a) {
      return a ? Ci(i) : Fl(i);
    },
    sort: Oi,
    item: {},
    includeChildren: !1
  }, t), o = (i, a) => a ? `${a}/${i.path}` : i.path, r = (i, a = null) => i.filter((l) => s.qualifier(l, a)).map((l) => {
    const u = l.children ? Si(l.children) : l, c = l.children ? l.children.filter((f) => f.path !== "") : !1, d = xs(u, o(l, a), s.item);
    return s.includeChildren && c.length && (d.children = r(c, d.path)), d;
  }).sort(s.sort);
  return r(e);
}
function wm(e) {
  function t(n) {
    const s = [];
    for (const o of n) {
      const r = { ...o };
      delete r.children, s.push(r), o.children && s.push(...t(o.children));
    }
    return s;
  }
  return t(e);
}
function _m(e, t, n) {
  const o = Object.assign({}, {
    includeIndex: !1,
    item: {},
    sort: Oi
  }, n), r = e.find((u) => u.path !== "/" && t.includes(u.path)), i = (u, c, d) => {
    if (u.children) {
      const f = u.children.find((h) => h.path.includes(t));
      if (f)
        return i(f, u, d + f.path);
    }
    return { route: c, path: d };
  }, { route: a, path: l } = i(r, r, r.path);
  return a.children ? a.children.filter(zl(o.includeIndex)).map((u) => xs(u, `${l}/${u.path}`, o.item)).sort(o.sort) : (console.warn("Unable to build menu for:", t), []);
}
function Si(e) {
  return e.find((t) => t.path === "");
}
function xs(e, t = e.path, n) {
  const o = Object.assign({}, {
    indexMeta: !0,
    modify: null
  }, n);
  let r = Object.assign({}, e.meta);
  o.indexMeta && e.children && (r = Object.assign({}, r, Si(e.children)?.meta));
  const i = { ...e, meta: r }, a = {
    path: t,
    title: ys(i, e) || "Missing Title",
    weight: r?.weight || 0,
    meta: r
  };
  return o.modify && o.modify(a, e), a;
}
function Ci(e) {
  return !e.path.includes("/:");
}
function Fl(e) {
  const t = e.path.match(/\//g) || [];
  return Ci(e) && t.length === 1;
}
function Sm(e, t) {
  const { target: n } = t, s = n.closest("a");
  if (s) {
    let o = s.getAttribute("href");
    o.startsWith("/") && (e.push(o), t.preventDefault());
  }
}
function Nl(e, t = Ei(e)) {
  return t?.children;
}
function Ei(e, t) {
  const n = e.matched.length, s = n - 2;
  return t ? n > 1 ? e.matched[0] : null : s < 0 ? null : e.matched[s];
}
function zl(e) {
  return (t) => e || t.path !== "";
}
function Oi(e, t) {
  return e?.weight - t?.weight;
}
function Cm(e, t) {
  const s = Object.assign({}, {
    parent: null,
    includeIndex: !1,
    item: {},
    sort: Oi
  }, t), o = s.parent || Ei(e);
  return (Nl(e, o) || []).filter(zl(s.includeIndex)).map((i) => xs(i, `${o.path}/${i.path}`, s.item)).sort(s.sort);
}
function Em(e) {
  const { matched: t, path: n } = e;
  let s;
  return t.reduce((r, i, a) => {
    if (i.meta?.breadcrumb === !1 || i.path === s)
      return r;
    const l = a === t.length - 1, u = ys(i, e) || "Missing Title";
    return r.push({
      title: u,
      to: { path: l ? n : i.path },
      current: l
    }), s = i.path, r;
  }, []);
}
const Om = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  $createBreadcrumb: Em,
  $createSectionMenu: Cm,
  $getParentRoute: Ei,
  $getRouteChildren: Nl,
  createBaseMenu: xm,
  createMenuItem: xs,
  createSectionMenu: _m,
  flattenMenu: wm,
  getChildIndexRoute: Si,
  getRouteTitle: ys,
  isStaticBaseRoute: Fl,
  isStaticRoute: Ci,
  nativeLinkRouter: Sm
}, Symbol.toStringTag, { value: "Module" })), Us = kn({});
function Qw(e = {}) {
  const {
    title: t,
    titleTemplate: n = "%s",
    useRoute: s = Oa,
    useHead: o = bm
  } = e, r = s(), i = r.path;
  if (t !== void 0) {
    is(() => {
      Us[i] = z(t);
    }), ls(() => {
      delete Us[i];
    });
    return;
  }
  const a = F(() => {
    const l = Us[r.path], u = ys(r, r), c = l || u;
    return c ? n.replace("%s", c) : "App";
  });
  o({
    title: a
  });
}
const Tm = { class: "layout-flex-baseline" }, Am = { class: "type-word-break" }, e_ = {
  __name: "UluOverflowPopover",
  props: {
    /**
     * Default icon for overflow popover trigger
     */
    triggerIcon: String
  },
  setup(e) {
    const { resizing: t, onResizeEnd: n } = mm(), s = J(null), o = J(!1), r = () => {
      bn(() => {
        const a = s.value;
        o.value = a.offsetWidth < a.scrollWidth;
      });
    }, i = n(r);
    return $t(r), ls(i), (a, l) => (b(), O("div", Tm, [
      M("div", {
        class: "type-truncate",
        ref_key: "text",
        ref: s
      }, [
        P(a.$slots, "default")
      ], 512),
      o.value && !z(t) ? (b(), N(us, {
        key: 0,
        triggerAlt: "Show Full Text",
        size: "large"
      }, {
        trigger: D(() => [
          te(pe, {
            icon: e.triggerIcon || "type:ellipsis"
          }, null, 8, ["icon"])
        ]),
        default: D(() => [
          M("div", Am, [
            P(a.$slots, "default")
          ])
        ]),
        _: 3
      })) : U("", !0)
    ]));
  }
}, t_ = {
  __name: "UluTab",
  setup(e) {
    return (t, n) => (b(), N(z(Vu), null, {
      default: D((s) => [
        P(t.$slots, "default", He(Ze(s)))
      ]),
      _: 3
    }));
  }
}, n_ = /* @__PURE__ */ Object.assign({
  inheritAttrs: !1
}, {
  __name: "UluTabGroup",
  props: {
    /**
     * Active tab index by default
     */
    defaultIndex: Number,
    /**
     * Whether or not to use vertical layout
     */
    vertical: Boolean
  },
  setup(e) {
    return (t, n) => (b(), N(z(Wu), {
      defaultIndex: e.defaultIndex,
      vertical: e.vertical
    }, {
      default: D((s) => [
        M("div", {
          class: $(["tabs", {
            "tabs--vertical": e.vertical
          }])
        }, [
          P(t.$slots, "default", He(Ze(s)))
        ], 2)
      ]),
      _: 3
    }, 8, ["defaultIndex", "vertical"]));
  }
}), s_ = {
  __name: "UluTabList",
  setup(e) {
    return (t, n) => (b(), N(z(qu), { class: "tabs__tablist" }, {
      default: D(() => [
        P(t.$slots, "default")
      ]),
      _: 3
    }));
  }
}, r_ = {
  __name: "UluTabPanel",
  setup(e) {
    return (t, n) => (b(), N(z(Ku), null, {
      default: D((s) => [
        P(t.$slots, "default", He(Ze(s)))
      ]),
      _: 3
    }));
  }
}, o_ = {
  __name: "UluTabPanels",
  setup(e) {
    return (t, n) => (b(), N(z(Gu), null, {
      default: D((s) => [
        P(t.$slots, "default", He(Ze(s)))
      ]),
      _: 3
    }));
  }
}, km = {
  name: "UluButton",
  components: {
    UluIcon: pe
  },
  props: {
    /**
     * Icon prop, if used will set the icon for the button, will use UluIcon (which uses font-awesome icons conditionally)
     * - If using custom icons don't use this prop, use before or after slots with correct classes (ie .button__icon)
     */
    icon: [String, Array],
    /**
     * If passing an icon (and not using iconOnly) this determines if the icon is before or after (default) the text
     */
    iconBefore: Boolean,
    /**
     * Button style for only icon
     */
    iconOnly: Boolean,
    /**
     * If set will use router-link for button component and pass to prop
     */
    to: [String, Object],
    /**
     * Sets the button to a link with this href
     */
    href: String,
    /**
     * Set a value for target attribute when button is a link
     */
    target: String,
    /**
     * Sets the download attribute on the link (passing string [filename] will populate the download attribute, true will just include it as boolean attribute)
     */
    download: [Boolean, String],
    /**
     * For icon only buttons or buttons that need an explicit label
     */
    alt: String,
    /**
     * If not using slot this sets the buttons text via prop
     */
    text: String,
    /**
     * Pass any sizes setup for button (ie. small, large, etc)
     */
    size: String,
    /**
     * Preset to set primary style (needs to be a button style in ulu scss)
     */
    primary: Boolean,
    /**
     * Preset to set secondary style (needs to be a button style in ulu scss)
     */
    secondary: Boolean,
    /**
     * Preset to set small size (use "size" for any sizes)
     */
    small: Boolean,
    /**
     * Preset to set large size (use "size" for any sizes)
     */
    large: Boolean,
    /**
     * Preset to set outline style button (needs to be a button style in ulu scss)
     */
    outline: Boolean,
    /**
     * Preset to set transparent style button (needs to be a button style in ulu scss)
     */
    transparent: Boolean,
    /**
     * Add no-margin utility
     */
    noMargin: Boolean,
    /**
     * Modifiers (to add any modifier classes based on base class [ie. 'tertiary'])
     */
    modifiers: [String, Array]
  },
  setup(e) {
    const { resolvedModifiers: t } = We({ props: e, baseClass: "button" });
    return { resolvedModifiers: t };
  },
  computed: {
    resolvedAriaLabel() {
      const e = this.alt || this.iconOnly && this.text;
      return e || null;
    },
    classes() {
      const e = [], { size: t } = this;
      return t && e.push(`button--${t}`), e;
    },
    element() {
      return this.to ? _n : this.href ? "a" : "button";
    },
    attrs() {
      const { to: e, href: t, download: n, target: s } = this, o = e ? { to: e } : t ? { href: t } : {};
      return t && (s && (o.target = s), n && (o.download = typeof n == "string" ? n : !0)), o;
    }
  }
}, Mm = { key: 1 };
function $m(e, t, n, s, o, r) {
  const i = ye("UluIcon");
  return b(), N(le(r.element), $e({
    class: ["button", [
      {
        "button--transparent": n.transparent,
        "button--primary": n.primary,
        "button--secondary": n.secondary,
        "button--outline": n.outline,
        "button--small": n.small,
        "button--large": n.large,
        "button--icon": n.iconOnly,
        "no-margin": n.noMargin
      },
      r.classes,
      s.resolvedModifiers
    ]]
  }, r.attrs, { "aria-label": r.resolvedAriaLabel }), {
    default: D(() => [
      P(e.$slots, "before"),
      n.icon && (n.iconBefore || n.iconOnly) ? (b(), N(i, {
        key: 0,
        icon: n.icon,
        class: "button__icon"
      }, null, 8, ["icon"])) : U("", !0),
      (e.$slots.default || n.text) && !n.iconOnly ? (b(), O("span", Mm, [
        P(e.$slots, "default", {}, () => [
          K(H(n.text), 1)
        ])
      ])) : U("", !0),
      n.icon && !n.iconBefore && !n.iconOnly ? (b(), N(i, {
        key: 2,
        icon: n.icon,
        class: "button__icon"
      }, null, 8, ["icon"])) : U("", !0),
      P(e.$slots, "after")
    ]),
    _: 3
  }, 16, ["class", "aria-label"]);
}
const Pm = /* @__PURE__ */ ce(km, [["render", $m]]), Im = {
  name: "UluAlert",
  components: {
    UluButton: Pm,
    UluIcon: pe
  },
  props: {
    /**
     * Alert Title
     */
    title: String,
    /**
     * Alert description
     */
    description: String,
    /**
     * Pass specific icon definition, else it will resolve based on common types
     */
    icon: String,
    /**
     * Error, warning, info, success etc (must have these callout modifiers setup and this is used for type color [ie. color-error])
     */
    type: {
      type: String,
      default: "danger"
    },
    /**
     * Compact callout style
     */
    compact: Boolean,
    /**
     * Modifiers (to add any modifier classes based on base class [ie. 'tertiary'])
     */
    modifiers: [String, Array]
  },
  setup(e) {
    const { resolvedModifiers: t } = We({
      props: e,
      baseClass: "callout",
      internal: F(() => ({
        [e.type]: e.type,
        compact: e.compact
      }))
    });
    return { resolvedModifiers: t };
  }
}, Lm = { class: "layout-flex" }, jm = { class: "type-small" }, Rm = {
  key: 0,
  class: "margin-left-auto align-self-center"
};
function Bm(e, t, n, s, o, r) {
  const i = ye("UluIcon");
  return b(), O("div", {
    class: $(["callout", s.resolvedModifiers])
  }, [
    M("div", Lm, [
      te(i, {
        class: $(["type-large margin-right-small", `color-${n.type}`]),
        icon: n.icon || `type:${n.type}`
      }, null, 8, ["class", "icon"]),
      M("div", jm, [
        M("div", null, [
          P(e.$slots, "title", {}, () => [
            M("strong", null, H(n.title), 1)
          ])
        ]),
        M("div", null, [
          P(e.$slots, "description", {}, () => [
            K(H(n.description), 1)
          ])
        ])
      ]),
      e.$slots.action ? (b(), O("div", Rm, [
        P(e.$slots, "action")
      ])) : U("", !0)
    ])
  ], 2);
}
const i_ = /* @__PURE__ */ ce(Im, [["render", Bm]]), Um = ["aria-hidden"], Fm = {
  key: 2,
  class: "hidden-visually"
}, Nm = {
  __name: "UluBadge",
  props: {
    /**
     * Whether to display a skeleton loading state.
     */
    skeleton: Boolean,
    /**
     * The size of the badge (e.g., 'small', 'large').
     */
    size: String,
    /**
     * The text content of the badge.
     */
    text: String,
    /**
     * Alt text for the badge, for accessibility.
     */
    alt: String,
    /**
     * The type or style of the badge (e.g., 'primary', 'secondary').
     */
    type: String,
    /**
     * A function to call when the badge is clicked. Renders as a <button>.
     */
    click: Function,
    /**
     * A Vue Router link location. Renders as a <router-link>.
     */
    to: [Object, String],
    /**
     * A URL. Renders as a standard <a> tag.
     */
    href: String
  },
  setup(e) {
    const t = e, n = F(() => !!(t.to || t.click)), s = F(() => {
      const { click: o, to: r, href: i } = t;
      return o ? "button" : r ? _n : i ? "a" : "span";
    });
    return (o, r) => (b(), N(le(s.value), {
      class: $(["badge", [
        e.size ? `badge--${e.size}` : null,
        e.type ? `badge--${e.type}` : null,
        { "badge--clickable": n.value }
      ]]),
      to: e.to,
      href: e.href,
      onClick: e.click
    }, {
      default: D(() => [
        M("span", {
          class: $(["badge__inner", { "skeleton__background-color": e.skeleton }])
        }, [
          e.text ? (b(), O("span", {
            key: 0,
            "aria-hidden": e.alt ? "true" : null
          }, H(e.text), 9, Um)) : P(o.$slots, "default", { key: 1 }),
          e.alt ? (b(), O("span", Fm, H(e.alt), 1)) : U("", !0)
        ], 2)
      ]),
      _: 3
    }, 8, ["class", "to", "href", "onClick"]));
  }
}, zm = { class: "badge-stack" }, a_ = {
  __name: "UluBadgeStack",
  props: {
    /**
     * Array of props for each badge
     */
    items: Array
  },
  setup(e) {
    return (t, n) => (b(), O("ul", zm, [
      (b(!0), O(ee, null, se(e.items, (s, o) => (b(), O("li", {
        class: "badge-stack__item",
        key: o
      }, [
        te(Nm, $e({ ref_for: !0 }, s), null, 16)
      ]))), 128))
    ]));
  }
}, Hm = {
  name: "UluButtonVerbose",
  components: {
    UluIcon: pe
  },
  props: {
    /**
     * The title of the button. Can also be passed via slot.
     */
    title: String,
    /**
     * Optional element to use for title
     */
    titleElement: {
      type: String,
      default: "strong"
    },
    /**
     * The body text of the button. Can also be passed via slot.
     */
    body: String,
    /**
     * Icon prop, if used will set the icon for the button, will use UluIcon (which uses font-awesome icons conditionally)
     */
    icon: [String, Array],
    /**
     * If set will use router-link for button component and pass to prop
     */
    to: [String, Object],
    /**
     * Sets the button to a link with this href
     */
    href: String,
    /**
     * Set a value for target attribute when button is a link
     */
    target: String,
    /**
     * Sets the download attribute on the link (passing string [filename] will populate the download attribute, true will just include it as boolean attribute)
     */
    download: [Boolean, String],
    /**
     * Preset to set inline style
     */
    inline: Boolean,
    /**
     * Preset to set full-width style
     */
    fullWidth: Boolean,
    /**
     * Modifiers (to add any modifier classes based on base class [ie. 'tertiary'])
     */
    modifiers: [String, Array]
  },
  setup(e) {
    const { resolvedModifiers: t } = We({ props: e, baseClass: "button-verbose" });
    return { resolvedModifiers: t };
  },
  computed: {
    element() {
      return this.to ? _n : this.href ? "a" : "button";
    },
    attrs() {
      const { to: e, href: t, download: n, target: s } = this, o = e ? { to: e } : t ? { href: t } : {};
      return t && (s && (o.target = s), n && (o.download = typeof n == "string" ? n : !0)), o;
    }
  }
}, Dm = {
  key: 1,
  class: "button-verbose__body"
};
function Vm(e, t, n, s, o, r) {
  const i = ye("UluIcon");
  return b(), N(le(r.element), $e({
    class: ["button-verbose", [
      {
        "button-verbose--inline": n.inline,
        "button-verbose--full-width": n.fullWidth
      },
      s.resolvedModifiers
    ]]
  }, r.attrs), {
    default: D(() => [
      e.$slots.title || n.title ? (b(), N(le(n.titleElement), {
        key: 0,
        class: "button-verbose__title"
      }, {
        default: D(() => [
          P(e.$slots, "title", {}, () => [
            K(H(n.title), 1)
          ])
        ]),
        _: 3
      })) : U("", !0),
      e.$slots.default || n.body ? (b(), O("span", Dm, [
        P(e.$slots, "default", {}, () => [
          K(H(n.body), 1)
        ])
      ])) : U("", !0),
      n.icon ? (b(), N(i, {
        key: 2,
        icon: n.icon,
        class: "button-verbose__icon",
        "aria-hidden": "true"
      }, null, 8, ["icon"])) : U("", !0)
    ]),
    _: 3
  }, 16, ["class"]);
}
const l_ = /* @__PURE__ */ ce(Hm, [["render", Vm]]), Wm = {
  name: "UluCallout",
  props: {
    /**
     * Add full height utility class
     */
    fullHeight: Boolean,
    /**
     * Class modifiers (ie. 'transparent', 'secondary', etc)
     * - Can be String or Array of Strings
     */
    modifiers: [String, Array]
  },
  setup(e) {
    const { resolvedModifiers: t } = We({ props: e, baseClass: "callout" });
    return { resolvedModifiers: t };
  }
};
function qm(e, t, n, s, o, r) {
  return b(), O("div", {
    class: $(["callout", [s.resolvedModifiers, { "full-height": n.fullHeight }]])
  }, [
    P(e.$slots, "default")
  ], 2);
}
const u_ = /* @__PURE__ */ ce(Wm, [["render", qm]]), Km = { class: "card__body" }, Gm = { class: "card__main" }, Xm = ["href", "target"], Ym = {
  key: 0,
  class: "card__aside"
}, Zm = ["src", "alt"], Jm = {
  key: 1,
  class: "card__footer"
}, c_ = {
  __name: "UluCard",
  props: {
    /**
     * Specify card element, unless to or href are used which will use 'a' or 'router-link'
     * - Other than changing to more appropriate element (ie 'li' if in list for example), this can 
     *   be used to set the card to a button to attach your own click handlers to
     */
    cardElement: {
      type: String,
      default: "article"
    },
    /**
     * Text for title if not using slot
     */
    title: String,
    /**
     * Element to use for title
     */
    titleElement: {
      type: String,
      default: "h3"
    },
    /**
     * Title will be router link
     */
    titleTo: [String, Object],
    /**
     * Will make title a link to href
     */
    titleHref: String,
    /**
     * When using href this will set title link's target attribute
     */
    titleTarget: String,
    /**
     * If set the entire card will be router link
     * - Do not us in combination with titleTo or titleHref
     */
    to: [String, Object],
    /**
     * If set the entire card will be a link to href
     * - Do not us in combination with titleTo or titleHref
     */
    href: String,
    /**
     * When using href this will set link's target attribute
     */
    target: String,
    /**
     * Classes with class bindings for different elements including ({ title, image })
     */
    classes: {
      type: Object,
      default: () => ({})
    },
    /**
     * Whether to proxy clicks of non-interactive elements (making whole card clickable).
     * This is for accessibility, allowing a non-link card to have a primary action.
     * The proxy action is determined in the following order:
     * 1. If the title has a link (`titleTo` or `titleHref`), it will proxy the click to the title's link.
     * 2. If not, it will look for an element with the `data-ulu-card-proxy-target` attribute within the card's slots and click it.
     * 3. If no proxy target is found, it will emit a `proxy-click` event.
     * Note: This should not be used with the `to` or `href` props.
     */
    proxyClick: Boolean,
    /**
     * Options to be merged for proxy click settings ({ preventSelector, preventSelectionDuration })
     */
    proxyClickOptions: {
      type: Object,
      default: () => ({})
    },
    /**
     * Source of image
     */
    imageSrc: String,
    /**
     * Alt text for image
     */
    imageAlt: String,
    /**
     * If true image will use icon modifier (displays for image adjusts for icon vs full image)
     */
    imageIcon: Boolean,
    /**
     * Horizontal card layout
     */
    horizontal: Boolean,
    /**
     * Horizontal centered card layout
     */
    horizontalCenter: Boolean,
    /**
     * Overlay card layout
     */
    overlay: Boolean,
    /**
     * Class modifiers (ie. 'transparent', 'secondary', etc)
     * - Can be String or Array of Strings
     */
    modifiers: [Array, String]
  },
  emits: ["proxy-click"],
  setup(e, { emit: t }) {
    const n = e, s = t, o = Ca();
    n.proxyClick && (n.to || n.href) && console.warn("UluCard: 'proxyClick' is ignored when 'to' or 'href' are present."), (n.titleTo || n.titleHref) && (n.to || n.href) && console.warn("UluCard: 'titleTo'/'titleHref' should not be used with 'to'/'href'.");
    const r = J(null), i = J(null), { resolvedModifiers: a } = We({ props: n, baseClass: "card" }), l = J(null), u = J(!1), c = F(() => n.proxyClick && !n.to && !n.href), d = F(() => c.value && (n.titleTo || n.titleHref)), f = F(() => c.value && !d.value), h = F(() => c.value || null), m = F(() => ({
      selectorPrevent: "input, select, textarea, button, a, [tabindex='-1']",
      mousedownDurationPrevent: 250,
      ...n.proxyClickOptions
    })), p = F(() => c.value ? "pointer" : null), g = F(() => n.to ? _n : n.href ? "a" : n.cardElement);
    function _({ target: y, timeStamp: w }) {
      if (!h.value) return;
      const { selectorPrevent: T } = m.value;
      u.value = !1, y.closest(T) || (u.value = !0, l.value = w);
    }
    function x({ timeStamp: y }) {
      if (!h.value || !u.value) return;
      const { mousedownDurationPrevent: w } = m.value;
      if (y - l.value < w) {
        if (d.value) {
          const T = ka(i.value);
          T ? T.click() : console.warn("Unable to resolve title link ref");
        } else if (f.value) {
          const T = r.value?.querySelector("[data-ulu-card-proxy-target]");
          T ? T.click() : s("proxy-click");
        }
      }
      u.value = !1;
    }
    return (y, w) => (b(), N(le(g.value), {
      ref_key: "cardRoot",
      ref: r,
      class: $(["card", [
        {
          "card--horizontal": e.horizontal || e.horizontalCenter,
          "card--horizontal-center": e.horizontalCenter,
          "card--overlay": e.overlay
        },
        z(a)
      ]]),
      onMousedown: _,
      onMouseup: x,
      style: ve({ cursor: p.value }),
      target: e.target,
      to: e.to,
      href: e.href,
      "data-ulu-proxy-click-init": h.value
    }, {
      default: D(() => [
        M("div", Km, [
          M("div", Gm, [
            e.title || z(o).title ? (b(), N(le(e.titleElement), {
              key: 0,
              class: $(["card__title", e.classes.title])
            }, {
              default: D(() => [
                e.titleTo ? (b(), N(z(_n), {
                  key: 0,
                  class: "card__title-link",
                  to: e.titleTo,
                  ref_key: "link",
                  ref: i
                }, {
                  default: D(() => [
                    P(y.$slots, "title", {}, () => [
                      K(H(e.title), 1)
                    ])
                  ]),
                  _: 3
                }, 8, ["to"])) : e.titleHref ? (b(), O("a", {
                  key: 1,
                  class: "card__title-link",
                  href: e.titleHref,
                  target: e.titleTarget,
                  ref_key: "link",
                  ref: i
                }, [
                  P(y.$slots, "title", {}, () => [
                    K(H(e.title), 1)
                  ])
                ], 8, Xm)) : P(y.$slots, "title", { key: 2 }, () => [
                  K(H(e.title), 1)
                ])
              ]),
              _: 3
            }, 8, ["class"])) : U("", !0),
            P(y.$slots, "body")
          ]),
          z(o).aside ? (b(), O("div", Ym, [
            P(y.$slots, "aside")
          ])) : U("", !0)
        ]),
        z(o).image || e.imageSrc ? (b(), O("div", {
          key: 0,
          class: $(["card__image", [
            { "card__image--icon": e.imageIcon },
            e.classes.image
          ]])
        }, [
          P(y.$slots, "image", {}, () => [
            M("img", {
              src: e.imageSrc,
              alt: e.imageAlt
            }, null, 8, Zm)
          ])
        ], 2)) : U("", !0),
        z(o).footer ? (b(), O("div", Jm, [
          P(y.$slots, "footer")
        ])) : U("", !0)
      ]),
      _: 3
    }, 40, ["class", "style", "target", "to", "href", "data-ulu-proxy-click-init"]));
  }
}, d_ = {
  __name: "UluDefinitionList",
  props: {
    /**
     * Array of term, and description (props in object)
     * - Can use slots also
     */
    items: Array,
    /**
     * Classes object for different elements { list, item, term, description }
     */
    classes: {
      type: Object,
      default: () => ({})
    },
    /**
     * Class modifiers (ie. 'transparent', 'secondary', etc)
     */
    modifiers: [String, Array],
    /**
     * Displays only the definition descriptions on the same line.
     */
    inline: Boolean,
    /**
     * Displays both the definition term and its descriptions on the same line.
     */
    inlineAll: Boolean,
    /**
     * Displays the list in a two-column grid on larger screens.
     */
    table: Boolean,
    /**
     * Adds a rule between each item.
     */
    separated: Boolean,
    /**
     * Adds a rule to the top of the first item.
     */
    separatedFirst: Boolean,
    /**
     * Adds a rule to the bottom of the last item.
     */
    separatedLast: Boolean,
    /**
     * Reduces the margin between items.
     */
    compact: Boolean
  },
  setup(e) {
    const t = e, n = F(() => ({
      inline: t.inline,
      "inline-all": t.inlineAll,
      table: t.table,
      separated: t.separated,
      "separated-first": t.separatedFirst,
      "separated-last": t.separatedLast,
      compact: t.compact
    })), { resolvedModifiers: s } = We({
      props: t,
      internal: n,
      baseClass: "definition-list"
    });
    return (o, r) => (b(), O("dl", {
      class: $(["definition-list", [z(s), e.classes.list]])
    }, [
      (b(!0), O(ee, null, se(e.items, (i, a) => (b(), O("div", {
        key: a,
        class: $(e.classes.item)
      }, [
        M("dt", {
          class: $(e.classes.term)
        }, [
          P(o.$slots, "term", {
            item: i,
            index: a
          }, () => [
            K(H(i.term), 1)
          ])
        ], 2),
        M("dd", {
          class: $(e.classes.description)
        }, [
          P(o.$slots, "description", {
            item: i,
            index: a
          }, () => [
            K(H(i.description), 1)
          ])
        ], 2)
      ], 2))), 128))
    ], 2));
  }
}, Qm = ["href", "target"], ep = { class: "external-link__text" }, f_ = {
  __name: "UluExternalLink",
  props: {
    /**
     * Text for link or use slot
     */
    text: String,
    /**
     * Link href
     */
    href: String,
    /**
     * Link target
     */
    target: {
      type: String,
      default: "_blank"
    },
    /**
     * Override default icon
     */
    icon: String
  },
  setup(e) {
    return (t, n) => (b(), O("a", {
      class: "external-link",
      href: e.href,
      target: e.target
    }, [
      M("span", ep, [
        P(t.$slots, "default", {}, () => [
          K(H(e.text), 1)
        ])
      ]),
      te(pe, {
        class: "external-link__icon margin-left-small-x display-inline",
        icon: e.icon || "type:externalLink"
      }, null, 8, ["icon"])
    ], 8, Qm));
  }
}, h_ = {
  __name: "UluList",
  props: {
    /**
     * Array of list items, output as is or use slot to template the item
     */
    items: Array,
    /**
     * Classes object (keys are list and listItem to be applied to <ul> and <li>)
     * - Any valid class binding for each
     */
    classes: {
      type: Object,
      default: () => ({})
    },
    /**
     * Use list-ordered class, and sets element to <ol>
     */
    ordered: Boolean,
    /**
     * Use list-unordered class
     */
    unordered: Boolean,
    /**
     * Use list-lines class
     */
    lines: Boolean,
    /**
     * Use list-compact class
     */
    compact: Boolean,
    /**
     * If setting up custom ordered list this will ensure the correct element type
     * - Note: 'ordered' prop sets the ordered list class, this does not
     */
    forceOrdered: Boolean,
    /**
     * Define the start value for <ol>
     */
    start: String,
    /**
     * Reverse ordered list
     */
    reversed: Boolean,
    /**
     * Define list style type (ie. disc, decimal, etc)
     */
    listStyleType: String
  },
  setup(e) {
    const t = e, n = F(() => t.ordered || t.forceOrdered), s = F(() => n.value ? "ol" : "ul");
    return (o, r) => (b(), N(le(s.value), {
      class: $([
        {
          "list-ordered": e.ordered,
          "list-unordered": e.unordered,
          "list-lines": e.lines,
          "list-compact": e.compact
        },
        e.classes.list
      ]),
      style: ve({
        listStyleType: e.listStyleType
      }),
      reversed: n.value ? e.reversed : null,
      start: e.start
    }, {
      default: D(() => [
        (b(!0), O(ee, null, se(e.items, (i, a) => (b(), O("li", {
          key: a,
          class: $(e.classes.listItem)
        }, [
          P(o.$slots, "default", {
            item: i,
            index: a
          }, () => [
            K(H(i), 1)
          ])
        ], 2))), 128))
      ]),
      _: 3
    }, 8, ["class", "style", "reversed", "start"]));
  }
}, tp = {}, np = { id: "main-content" };
function sp(e, t) {
  return b(), O("main", np, [
    P(e.$slots, "default")
  ]);
}
const m_ = /* @__PURE__ */ ce(tp, [["render", sp]]), p_ = {
  __name: "UluRule",
  props: {
    /**
     * Whether to use the actual <hr> vs superficial <div></div> for rule element
     */
    semantic: Boolean,
    /**
     * Use short modifier
     */
    short: Boolean,
    /**
     * Optional margin (keyword from your rule margins config in frontend)
     */
    margin: String,
    /**
     * Add light modifier (if set, usually exists, this is for convenience, use modifiers prop if you have custom naming)
     */
    light: Boolean,
    /**
     * Add large modifier (if set, usually exists, this is for convenience, use modifiers prop if you have custom naming)
     */
    large: Boolean,
    /**
     * Modifiers (to add any modifier classes based on base class [ie. 'tertiary'])
     */
    modifiers: [String, Array]
  },
  setup(e) {
    const t = e, n = F(() => ({
      short: t.short,
      light: t.light,
      large: t.large,
      [`margin-${t.margin}`]: t.margin
    })), { resolvedModifiers: s } = We({
      props: t,
      baseClass: "rule",
      internal: n
    });
    return (o, r) => e.semantic ? (b(), O("hr", {
      key: 0,
      class: $(["rule", z(s)])
    }, null, 2)) : (b(), O("div", {
      key: 1,
      class: $(["rule", z(s)])
    }, null, 2));
  }
}, rp = { class: "spoke-spinner__spinner" }, v_ = {
  __name: "UluSpokeSpinner",
  props: {
    /**
     * Type modifier for spinner (ie match scss style name)
     */
    type: String
  },
  setup(e) {
    return (t, n) => (b(), O("div", {
      class: $(["spoke-spinner", { [`spoke-spinner--${e.type}`]: e.type }])
    }, [
      M("div", rp, [
        (b(), O(ee, null, se(12, (s) => M("div", { key: s })), 64))
      ])
    ], 2));
  }
}, op = ["role", "aria-labelledby"], ip = ["id"], ap = { class: "menu-stack__list" }, lp = { class: "menu-stack__selectable" }, up = ["type", "id", "name", "value", "checked", "onChange"], cp = ["for"], Hl = {
  __name: "UluSelectableMenu",
  props: {
    /**
     * The legend for the menu.
     */
    legend: String,
    /**
     * An array of options for the menu.
     */
    options: Array,
    /**
     * Use compact modifier on menu stack
     */
    compact: Boolean,
    /**
     * The type of input to use ('checkbox' or 'radio').
     */
    type: {
      type: String,
      default: "checkbox"
    },
    /**
     * The value of the menu (for v-model).
     */
    modelValue: [String, Array],
    /**
     * If true, the input elements will be visually hidden.
     */
    hideInputs: Boolean
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, s = t, o = F(() => n.legend ? n.legend.toLowerCase().replace(/\s+/g, "-") : `menu-${Math.random().toString(36).substring(7)}`), r = F(() => o.value ? `${o.value}-legend` : null), i = F(() => n.type === "radio" ? "radiogroup" : "group"), a = (c) => `${o.value}-${c.uid}`, l = (c) => n.type === "radio" ? n.modelValue === c.uid : Array.isArray(n.modelValue) ? n.modelValue.includes(c.uid) : n.type === "checkbox" && c.checked || !1, u = (c, d) => {
      if (n.type === "radio")
        s("update:modelValue", c.uid);
      else if (Array.isArray(n.modelValue)) {
        const f = [...n.modelValue], h = f.indexOf(c.uid);
        h > -1 ? f.splice(h, 1) : f.push(c.uid), s("update:modelValue", f);
      } else
        c.checked = d.target.checked;
    };
    return (c, d) => (b(), O("div", {
      class: $(["menu-stack form-theme", {
        "menu-stack--hide-inputs": e.hideInputs,
        "menu-stack--compact": e.compact
      }]),
      role: i.value,
      "aria-labelledby": r.value
    }, [
      e.legend ? (b(), O("div", {
        key: 0,
        id: r.value,
        class: "hidden-visually"
      }, H(e.legend), 9, ip)) : U("", !0),
      M("ul", ap, [
        (b(!0), O(ee, null, se(e.options, (f) => (b(), O("li", {
          class: "menu-stack__item",
          key: f.uid
        }, [
          M("div", lp, [
            M("input", {
              type: e.type,
              id: a(f),
              name: o.value,
              value: f.uid,
              checked: l(f),
              onChange: (h) => u(f, h)
            }, null, 40, up),
            M("label", {
              for: a(f)
            }, [
              P(c.$slots, "default", { option: f }, () => [
                K(H(f?.label || f?.title || f?.text), 1)
              ])
            ], 8, cp)
          ])
        ]))), 128))
      ])
    ], 10, op));
  }
}, dp = ["href", "download"], fp = { class: "margin-left-small-x" }, g_ = {
  __name: "UluFileDisplay",
  props: {
    /**
     * The File object to be displayed.
     */
    file: {
      required: !0,
      type: Object
    },
    /**
     * The icon to display next to the file name.
     */
    icon: {
      type: String,
      default: "type:file"
    },
    /**
     * If true, the file size will not be displayed.
     */
    noFileSize: Boolean
  },
  setup(e) {
    const t = e, n = F(() => typeof window > "u" ? "" : window.URL.createObjectURL(t.file)), s = F(() => {
      const { size: o } = t.file, r = o / 1e6, i = o / 1e3, a = (l) => parseFloat(l.toFixed(2));
      return r > 1 ? `${a(r)}Mb` : i > 1 ? `${a(i)}Kb` : `${a(o)}B`;
    });
    return (o, r) => (b(), O("a", {
      class: "layout-flex-baseline",
      href: n.value,
      download: e.file.name
    }, [
      P(o.$slots, "default", {
        fileName: e.file.name,
        fileSize: s.value
      }, () => [
        te(pe, {
          class: "ui-icon",
          icon: e.icon
        }, null, 8, ["icon"]),
        M("span", fp, [
          K(H(e.file.name) + " ", 1),
          e.noFileSize ? U("", !0) : (b(), N(Bl, {
            key: 0,
            text: s.value,
            small: "",
            outline: ""
          }, null, 8, ["text"]))
        ])
      ])
    ], 8, dp));
  }
}, hp = { class: "form-theme__required-char" }, rn = {
  __name: "UluFormRequiredChar",
  setup(e) {
    return (t, n) => (b(), O("span", hp, "*"));
  }
}, mp = ["for"], pp = ["multiple", "id", "required"], b_ = {
  __name: "UluFormFile",
  props: {
    /**
     * The label for the file input.
     */
    label: {
      type: String,
      default: "Select File"
    },
    /**
     * If true, the label will be visually hidden.
     */
    labelHidden: Boolean,
    /**
     * If true, default classes will not be applied.
     */
    noClasses: Boolean,
    /**
     * If true, allows multiple file selection.
     */
    multiple: Boolean,
    /**
     * Additional attributes to bind to the input element.
     */
    inputAttrs: Object,
    /**
     * If true, the field will be required.
     */
    required: Boolean
  },
  emits: ["file-change"],
  setup(e, { emit: t }) {
    const n = t, s = ke(), o = (r) => {
      n("file-change", r.target.files);
    };
    return (r, i) => (b(), O(ee, null, [
      M("label", {
        class: $({ "hidden-visually": e.labelHidden }),
        for: z(s)
      }, [
        P(r.$slots, "label", {}, () => [
          K(H(e.label), 1),
          e.required ? (b(), N(rn, { key: 0 })) : U("", !0)
        ])
      ], 10, mp),
      M("input", $e({
        type: "file",
        onChange: o,
        multiple: e.multiple,
        id: z(s)
      }, e.inputAttrs, { required: e.required }), null, 16, pp)
    ], 64));
  }
}, y_ = {
  __name: "UluFormMessage",
  props: {
    /**
     * If true, the message will be styled as a warning.
     */
    warning: Boolean,
    /**
     * If true, the message will be styled as an error.
     */
    error: Boolean
  },
  setup(e) {
    return (t, n) => (b(), O("p", {
      class: $(["form-theme__description", {
        "form-theme__error": e.error,
        "form-theme__warning": e.warning
      }])
    }, [
      e.error || e.warning ? (b(), N(pe, {
        key: 0,
        icon: `type:${e.error ? "error" : "warning"}`
      }, null, 8, ["icon"])) : U("", !0),
      P(t.$slots, "default")
    ], 2));
  }
}, vp = ["for"], gp = ["id", "value", "required"], bp = ["value"], x_ = {
  __name: "UluFormSelect",
  props: {
    /**
     * The label for the select input.
     */
    label: String,
    /**
     * The value of the select input (for v-model).
     */
    modelValue: String,
    /**
     * An array of options for the select input. Each option should be an object with `value` and `text` properties.
     */
    options: Array,
    /**
     * If true, the label will be visually hidden.
     */
    labelHidden: Boolean,
    /**
     * If true, the field will be required.
     */
    required: Boolean
  },
  emits: ["update:modelValue"],
  setup(e) {
    const t = ke();
    return (n, s) => (b(), O(ee, null, [
      M("label", {
        class: $({ "hidden-visually": e.labelHidden }),
        for: z(t)
      }, [
        P(n.$slots, "label", {}, () => [
          K(H(e.label), 1),
          e.required ? (b(), N(rn, { key: 0 })) : U("", !0)
        ])
      ], 10, vp),
      M("select", {
        id: z(t),
        value: e.modelValue,
        onInput: s[0] || (s[0] = (o) => n.$emit("update:modelValue", o.target.value)),
        required: e.required
      }, [
        s[1] || (s[1] = M("option", {
          disabled: "",
          value: ""
        }, "Please select one", -1)),
        (b(!0), O(ee, null, se(e.options, (o, r) => (b(), O("option", {
          key: r,
          value: o.value
        }, H(o.text), 9, bp))), 128))
      ], 40, gp)
    ], 64));
  }
}, yp = ["for"], xp = ["value", "id", "required"], w_ = {
  __name: "UluFormText",
  props: {
    /**
     * The label for the text input.
     */
    label: String,
    /**
     * The value of the text input (for v-model).
     */
    modelValue: String,
    /**
     * If true, the label will be visually hidden.
     */
    labelHidden: Boolean,
    /**
     * If true, the field will be required.
     */
    required: Boolean
  },
  emits: ["update:modelValue"],
  setup(e) {
    const t = ke();
    return (n, s) => (b(), O(ee, null, [
      M("label", {
        class: $({ "hidden-visually": e.labelHidden }),
        for: z(t)
      }, [
        P(n.$slots, "label", {}, () => [
          K(H(e.label), 1),
          e.required ? (b(), N(rn, { key: 0 })) : U("", !0)
        ])
      ], 10, yp),
      M("input", {
        type: "text",
        value: e.modelValue,
        onInput: s[0] || (s[0] = (o) => n.$emit("update:modelValue", o.target.value)),
        id: z(t),
        required: e.required
      }, null, 40, xp)
    ], 64));
  }
}, wp = { class: "form-theme search-form type-small" }, _p = { class: "search-form__field" }, Sp = ["placeholder"], Cp = {
  class: "search-form__submit button button--primary",
  "aria-label": "Submit Search"
}, __ = {
  __name: "UluSearchForm",
  props: {
    /**
     * The placeholder text for the search input.
     */
    placeholder: {
      type: String,
      default: "Titles, keyword…"
    }
  },
  setup(e) {
    return (t, n) => (b(), O("div", wp, [
      M("div", _p, [
        n[0] || (n[0] = M("label", { class: "hidden-visually" }, "Search", -1)),
        M("input", {
          class: "search-form__input",
          type: "text",
          id: "example-input",
          placeholder: e.placeholder
        }, null, 8, Sp)
      ]),
      M("button", Cp, [
        te(pe, { icon: "type:search" })
      ])
    ]));
  }
}, S_ = {
  __name: "UluForm",
  props: {
    /**
     * The HTML element to use for the form.
     */
    element: {
      type: String,
      default: "form"
    },
    /**
     * If true, applies the full-width styles to text inputs.
     */
    fullWidth: Boolean,
    /**
     * If true, applies the full-width styles to select inputs.
     */
    fullWidthSelect: Boolean,
    /**
     * If true, hides all labels in the form.
     */
    hideLabels: Boolean,
    /**
     * If true, right-aligns the form actions.
     */
    actionsRight: Boolean
  },
  setup(e) {
    return (t, n) => (b(), N(le(e.element), {
      class: $(["form-theme", [{
        "form-theme--full-width": e.fullWidth,
        "form-theme--full-width-select": e.fullWidthSelect,
        "form-theme--hide-labels": e.hideLabels,
        "form-theme--actions-right": e.actionsRight
      }]])
    }, {
      default: D(() => [
        P(t.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}, Ep = { class: "form-theme__actions" }, C_ = {
  __name: "UluFormActions",
  setup(e) {
    return (t, n) => (b(), O("div", Ep, [
      P(t.$slots, "default")
    ]));
  }
}, Op = ["id", "checked", "required"], Tp = ["for"], E_ = {
  __name: "UluFormCheckbox",
  props: {
    /**
     * The label for the checkbox.
     */
    label: String,
    /**
     * The value of the checkbox (for v-model).
     */
    modelValue: Boolean,
    /**
     * If true, the field will be required.
     */
    required: Boolean
  },
  emits: ["update:modelValue"],
  setup(e) {
    const t = ke();
    return (n, s) => (b(), O(ee, null, [
      M("input", {
        type: "checkbox",
        id: z(t),
        checked: e.modelValue,
        onChange: s[0] || (s[0] = (o) => n.$emit("update:modelValue", o.target.checked)),
        required: e.required
      }, null, 40, Op),
      M("label", { for: z(t) }, [
        P(n.$slots, "default", {}, () => [
          K(H(e.label), 1),
          e.required ? (b(), N(rn, { key: 0 })) : U("", !0)
        ])
      ], 8, Tp)
    ], 64));
  }
}, Ap = { class: "form-theme__fieldset" }, kp = { key: 0 }, O_ = {
  __name: "UluFormFieldset",
  props: {
    /**
     * The legend for the fieldset.
     */
    legend: String
  },
  setup(e) {
    return (t, n) => (b(), O("fieldset", Ap, [
      e.legend ? (b(), O("legend", kp, H(e.legend), 1)) : U("", !0),
      P(t.$slots, "default")
    ]));
  }
}, T_ = {
  __name: "UluFormItem",
  props: {
    /**
     * If true, applies the error state styles.
     */
    error: Boolean,
    /**
     * If true, applies the warning state styles.
     */
    warning: Boolean,
    /**
     * If true, aligns the item to the top.
     */
    alignTop: Boolean,
    /**
     * If true, applies the text item styles.
     */
    text: Boolean,
    /**
     * If true, applies the file item styles.
     */
    file: Boolean,
    /**
     * If true, applies the select item styles.
     */
    select: Boolean,
    /**
     * If true, applies the textarea item styles.
     */
    textarea: Boolean
  },
  setup(e) {
    return (t, n) => (b(), O("div", {
      class: $(["form-theme__item", [{
        "is-danger": e.error,
        "is-warning": e.warning,
        "form-theme__item--align-top": e.alignTop,
        "form-theme__item--text": e.text,
        "form-theme__item--file": e.file,
        "form-theme__item--select": e.select,
        "form-theme__item--textarea": e.textarea
      }]])
    }, [
      P(t.$slots, "default")
    ], 2));
  }
}, Mp = { class: "form-theme__items-inline" }, A_ = {
  __name: "UluFormItemsInline",
  setup(e) {
    return (t, n) => (b(), O("div", Mp, [
      P(t.$slots, "default")
    ]));
  }
}, $p = ["id", "name", "value", "checked", "required"], Pp = ["for"], k_ = {
  __name: "UluFormRadio",
  props: {
    /**
     * The label for the radio button.
     */
    label: String,
    /**
     * The value of the selected radio button in the group (for v-model).
     */
    modelValue: [String, Number],
    /**
     * The value of this radio button.
     */
    value: [String, Number],
    /**
     * The name of the radio button group.
     */
    name: String,
    /**
     * If true, the field will be required.
     */
    required: Boolean
  },
  emits: ["update:modelValue"],
  setup(e) {
    const t = ke();
    return (n, s) => (b(), O(ee, null, [
      M("input", {
        type: "radio",
        id: z(t),
        name: e.name,
        value: e.value,
        checked: e.modelValue === e.value,
        onChange: s[0] || (s[0] = (o) => n.$emit("update:modelValue", e.value)),
        required: e.required
      }, null, 40, $p),
      M("label", { for: z(t) }, [
        P(n.$slots, "default", {}, () => [
          K(H(e.label), 1),
          e.required ? (b(), N(rn, { key: 0 })) : U("", !0)
        ])
      ], 8, Pp)
    ], 64));
  }
}, Ip = ["for"], Lp = ["value", "id", "required"], M_ = {
  __name: "UluFormTextarea",
  props: {
    /**
     * The label for the textarea.
     */
    label: String,
    /**
     * The value of the textarea (for v-model).
     */
    modelValue: String,
    /**
     * If true, the label will be visually hidden.
     */
    labelHidden: Boolean,
    /**
     * If true, the field will be required.
     */
    required: Boolean
  },
  emits: ["update:modelValue"],
  setup(e) {
    const t = ke();
    return (n, s) => (b(), O(ee, null, [
      M("label", {
        class: $({ "hidden-visually": e.labelHidden }),
        for: z(t)
      }, [
        P(n.$slots, "label", {}, () => [
          K(H(e.label), 1),
          e.required ? (b(), N(rn, { key: 0 })) : U("", !0)
        ])
      ], 10, Ip),
      M("textarea", {
        value: e.modelValue,
        onInput: s[0] || (s[0] = (o) => n.$emit("update:modelValue", o.target.value)),
        id: z(t),
        required: e.required
      }, null, 40, Lp)
    ], 64));
  }
}, $_ = {
  __name: "UluAdaptiveLayout",
  setup(e) {
    const t = gt("uluIsMobile");
    return (n, s) => !z(t) || !n.$slots.mobile ? P(n.$slots, "default", { key: 0 }) : P(n.$slots, "mobile", { key: 1 });
  }
}, P_ = {
  __name: "UluDataGrid",
  props: {
    /**
     * The element to use on data-grid container
     */
    element: {
      type: String,
      default: "div"
    },
    /**
     * Tell the component when this grid is actually in a hidden container 
     * - When value changes the component will properly update position classes
     */
    hidden: Boolean
    // New prop from SSR version
  },
  setup(e) {
    const t = e, n = J(null), s = J(null);
    let o = null, r = null;
    return $t(async () => {
      o = () => {
        n.value && Ka(n.value);
      }, o(), s.value = !0, r = ni(o, 200, !1), window.addEventListener("resize", r);
    }), as(() => {
      r && (r.cancel(), window.removeEventListener("resize", r), r = null, o = null);
    }), _e(() => t.hidden, (i, a) => {
      a && !i && o && o();
    }), (i, a) => (b(), N(le(e.element), {
      "data-grid-init": s.value,
      ref_key: "rootElement",
      ref: n
    }, {
      default: D(() => [
        P(i.$slots, "default")
      ]),
      _: 3
    }, 8, ["data-grid-init"]));
  }
}, jp = {
  name: "UluTitleRail",
  components: {
    UluIcon: pe
  },
  props: {
    /**
     * Icon to display next to the title.
     */
    icon: String,
    /**
     * The alignment of the icon with the title.
     */
    iconAlign: {
      type: String,
      default: "baseline"
    },
    /**
     * Classes for the different elements in the component.
     */
    classes: {
      type: Object,
      default: () => ({
        title: "h2",
        icon: "margin-right-small"
      })
    },
    /**
     * The title to display.
     */
    title: String,
    /**
     * The HTML element to use for the title.
     */
    titleElement: {
      type: String,
      default: "h2"
    },
    /**
     * If true, a rule will be displayed under the title.
     */
    rule: Boolean
  }
}, Rp = {
  key: 0,
  class: "rail__item rail__item--pull"
};
function Bp(e, t, n, s, o, r) {
  const i = ye("UluIcon");
  return b(), O("div", {
    class: $(["rail rail--title-rail", {
      "rail--rule": n.rule
    }])
  }, [
    M("div", {
      class: $(["rail__item rail__item--title", n.classes.itemTitle])
    }, [
      (b(), N(le(n.titleElement), {
        class: $(["layout-flex type-max-width-small no-margin", n.classes.title]),
        style: ve({ alignItems: n.iconAlign })
      }, {
        default: D(() => [
          n.icon ? (b(), N(i, {
            key: 0,
            class: $(n.classes.icon),
            icon: n.icon
          }, null, 8, ["class", "icon"])) : U("", !0),
          P(e.$slots, "default", {}, () => [
            K(H(n.title), 1)
          ])
        ]),
        _: 3
      }, 8, ["class", "style"]))
    ], 2),
    e.$slots.end ? (b(), O("div", Rp, [
      P(e.$slots, "end")
    ])) : U("", !0)
  ], 2);
}
const I_ = /* @__PURE__ */ ce(jp, [["render", Bp]]), L_ = {
  __name: "UluWhenBreakpoint",
  props: {
    /**
     * The maximum breakpoint to show the content at.
     */
    max: String,
    /**
     * The minimum breakpoint to show the content at.
     */
    min: String,
    /**
     * Only show the content at this breakpoint.
     */
    only: String
  },
  setup(e) {
    const t = e, n = gt("uluBreakpointManager"), s = J({}), o = J([]), r = J(!1), i = F(() => !r.value || ["max", "min", "only"].filter((c) => t[c]).length === 0 ? !1 : Object.values(s.value).every((c) => c)), a = (u) => {
      const c = (d) => {
        const f = t[d];
        if (f) {
          s.value[d] = !1;
          const h = {
            on: () => {
              s.value[d] = !0;
            },
            off: () => {
              s.value[d] = !1;
            }
          };
          u.at(f)[d](h), o.value.push({ name: f, direction: d, handler: h });
        }
      };
      c("max"), c("min"), c("only"), r.value = !0;
    }, l = () => {
      n.value && o.value.forEach(({ name: u, direction: c, handler: d }) => {
        const f = n.value.at(u);
        if (f)
          try {
            f.remove(d, c);
          } catch (h) {
            console.error(h);
          }
      }), o.value = [], s.value = {}, r.value = !1;
    };
    return _e(n, (u) => {
      u && !r.value && a(u);
    }, { immediate: !0 }), _e([() => t.max, () => t.min, () => t.only], () => {
      n.value && r.value && (l(), a(n.value));
    }), as(() => {
      l();
    }), (u, c) => i.value ? P(u.$slots, "default", { key: 0 }) : U("", !0);
  }
}, Up = {
  name: "UluBreadcrumb",
  components: {
    UluIcon: pe
  },
  props: {
    /**
     * Array of breadcrumb items.
     * Each item is an object: { title: String, to: [String, Object], current: Boolean }
     */
    items: {
      type: Array,
      default: () => []
    },
    /**
     * Icon to use as a separator.
     */
    separatorIcon: String,
    /**
     * Classes object to be applied to elements.
     * Keys: nav, list, item, link, icon
     */
    classes: {
      type: Object,
      default: () => ({
        nav: "breadcrumb",
        list: "breadcrumb__list",
        item: "breadcrumb__item",
        link: "breadcrumb__link",
        current: "breadcrumb__current",
        separator: "breadcrumb__separator"
      })
    }
  }
};
function Fp(e, t, n, s, o, r) {
  const i = ye("router-link"), a = ye("UluIcon");
  return n.items.length ? (b(), O("nav", {
    key: 0,
    class: $(n.classes.nav),
    "aria-label": "Breadcrumb"
  }, [
    M("ol", {
      class: $(n.classes.list)
    }, [
      (b(!0), O(ee, null, se(n.items, (l, u) => (b(), O("li", {
        key: u,
        class: $(n.classes.item)
      }, [
        l.current ? (b(), O("span", {
          key: 1,
          class: $(l.current)
        }, [
          P(e.$slots, "default", { item: l }, () => [
            K(H(l.title), 1)
          ])
        ], 2)) : (b(), N(i, {
          key: 0,
          to: l.to,
          class: $(n.classes.link),
          "aria-current": l.current ? "page" : null
        }, {
          default: D(() => [
            P(e.$slots, "default", { item: l }, () => [
              K(H(l.title), 1)
            ])
          ]),
          _: 2
        }, 1032, ["to", "class", "aria-current"])),
        u < n.items.length - 1 ? P(e.$slots, "separator", { key: 2 }, () => [
          te(a, {
            class: $(n.classes.separator),
            icon: n.separatorIcon || "type:pathSeparator"
          }, null, 8, ["class", "icon"])
        ]) : U("", !0)
      ], 2))), 128))
    ], 2)
  ], 2)) : U("", !0);
}
const j_ = /* @__PURE__ */ ce(Up, [["render", Fp]]), Np = {
  name: "UluNavStrip",
  components: {
    UluMenu: Ul
  },
  props: {
    /**
     * Array of items for list (uses UluMenu, see structure there)
     */
    items: Array,
    /**
     * Center aligned
     */
    center: Boolean,
    /**
     * Right aligned
     */
    right: Boolean,
    /**
     * Rule nav strip style
     */
    rule: Boolean
  }
};
function zp(e, t, n, s, o, r) {
  const i = ye("UluMenu");
  return b(), O("nav", {
    class: $(["nav-strip", {
      "nav-strip--rule": n.rule,
      "nav-strip--center": n.center,
      "nav-strip--right": n.right
    }])
  }, [
    te(i, {
      items: n.items,
      classes: {
        list: "nav-strip__list",
        item: "nav-strip__item",
        link: "nav-strip__link",
        linkExactActive: "is-active"
      }
    }, null, 8, ["items"])
  ], 2);
}
const R_ = /* @__PURE__ */ ce(Np, [["render", zp]]), Hp = ["aria-labelledby"], Dp = { class: "pager__items js-pager__items" }, Vp = {
  key: 0,
  class: "pager__item pager__item--first"
}, Wp = {
  key: 1,
  class: "pager__item pager__item--previous"
}, qp = {
  key: 2,
  class: "pager__item pager__item--ellipsis",
  role: "presentation"
}, Kp = { class: "hidden-visually" }, Gp = {
  key: 3,
  class: "pager__item pager__item--ellipsis",
  role: "presentation"
}, Xp = {
  key: 4,
  class: "pager__item pager__item--next"
}, Yp = {
  key: 5,
  class: "pager__item pager__item--last"
}, B_ = {
  __name: "UluPager",
  props: {
    /**
     * The HTML element to use for the visually hidden title.
     */
    titleElement: {
      type: String,
      default: "h4"
    },
    /**
     * List of pager items.
     */
    items: {
      type: Object,
      default: () => ({})
    },
    /**
     * The page number of the current page.
     */
    current: {
      type: Number,
      default: 1
    },
    /**
     * Ellipses configuration.
     */
    ellipses: {
      type: Object,
      default: () => ({})
    }
  },
  setup(e) {
    const t = e, n = ke("ulu-pager");
    function s(o) {
      return t.current == o ? "Current page" : `Go to page ${o}`;
    }
    return (o, r) => {
      const i = ye("router-link");
      return e.items ? (b(), O("nav", {
        key: 0,
        class: "pager",
        role: "navigation",
        "aria-labelledby": z(n)
      }, [
        (b(), N(le(e.titleElement), {
          id: z(n),
          class: "hidden-visually"
        }, {
          default: D(() => [...r[0] || (r[0] = [
            K("Pagination", -1)
          ])]),
          _: 1
        }, 8, ["id"])),
        M("ul", Dp, [
          e.items.first ? (b(), O("li", Vp, [
            te(i, $e({
              to: e.items.first.href,
              title: "Go to first page"
            }, e.items.first.attributes), {
              default: D(() => [
                r[1] || (r[1] = M("span", { class: "hidden-visually" }, "First page", -1)),
                te(pe, {
                  icon: "fas fa-angle-double-left",
                  "aria-hidden": "true"
                })
              ]),
              _: 1
            }, 16, ["to"])
          ])) : U("", !0),
          e.items.previous ? (b(), O("li", Wp, [
            te(i, $e({
              to: e.items.previous.href,
              title: "Go to previous page",
              rel: "prev"
            }, e.items.previous.attributes), {
              default: D(() => [
                r[2] || (r[2] = M("span", { class: "hidden-visually" }, "Previous page", -1)),
                te(pe, {
                  icon: "fas fa-angle-left",
                  "aria-hidden": "true"
                })
              ]),
              _: 1
            }, 16, ["to"])
          ])) : U("", !0),
          e.ellipses.previous ? (b(), O("li", qp, "…")) : U("", !0),
          (b(!0), O(ee, null, se(e.items.pages, (a, l) => (b(), O("li", {
            key: l,
            class: $(["pager__item", { "is-active": e.current == l }])
          }, [
            te(i, $e({
              to: a.href,
              title: s(l)
            }, { ref_for: !0 }, a.attributes), {
              default: D(() => [
                M("span", Kp, H(e.current == l ? "Current page" : "Page"), 1),
                K(" " + H(l), 1)
              ]),
              _: 2
            }, 1040, ["to", "title"])
          ], 2))), 128)),
          e.ellipses.next ? (b(), O("li", Gp, "…")) : U("", !0),
          e.items.next ? (b(), O("li", Xp, [
            te(i, $e({
              to: e.items.next.href,
              title: "Go to next page",
              rel: "next"
            }, e.items.next.attributes), {
              default: D(() => [
                r[3] || (r[3] = M("span", { class: "hidden-visually" }, "Next page", -1)),
                te(pe, {
                  icon: "fas fa-angle-right",
                  "aria-hidden": "true"
                })
              ]),
              _: 1
            }, 16, ["to"])
          ])) : U("", !0),
          e.items.last ? (b(), O("li", Yp, [
            te(i, $e({
              to: e.items.last.href,
              title: "Go to last page"
            }, e.items.last.attributes), {
              default: D(() => [
                r[4] || (r[4] = M("span", { class: "hidden-visually" }, "Last page", -1)),
                te(pe, {
                  icon: "fas fa-angle-double-right",
                  "aria-hidden": "true"
                })
              ]),
              _: 1
            }, 16, ["to"])
          ])) : U("", !0)
        ])
      ], 8, Hp)) : U("", !0);
    };
  }
}, Zp = {}, Jp = {
  class: "skip-link hidden-visually-focusable",
  href: "#main-content"
};
function Qp(e, t) {
  return b(), O("a", Jp, " Skip to main content ");
}
const U_ = /* @__PURE__ */ ce(Zp, [["render", Qp]]), ev = {
  name: "UluConditionalText",
  props: {
    /**
     * Text to print in element
     */
    text: [String, Number, Array, Object],
    /**
     * Element type to render (ie. h1, h2, p, etc)
     */
    element: {
      type: String,
      default: "p"
    }
  }
};
function tv(e, t, n, s, o, r) {
  return n.text != null ? (b(), N(le(n.element), { key: 0 }, {
    default: D(() => [
      K(H(n.text), 1)
    ]),
    _: 1
  })) : U("", !0);
}
const F_ = /* @__PURE__ */ ce(ev, [["render", tv]]), nv = {
  __name: "UluConditionalWrapper",
  props: {
    /**
     * The underlying component or HTML tag to render.
     * Can be a string like 'div' or an imported component object.
     */
    is: {
      type: [String, Object, Function],
      // Can be a string or a component definition
      default: "div"
      // A sensible default for a wrapper
    },
    /**
     * If true, the wrapper will not be rendered and the content
     * will be output directly.
     */
    unwrapped: {
      type: Boolean,
      default: !1
    }
  },
  setup(e) {
    return (t, n) => e.unwrapped ? P(t.$slots, "default", { key: 1 }) : (b(), N(le(e.is), { key: 0 }, {
      default: D(() => [
        P(t.$slots, "default")
      ]),
      _: 3
    }));
  }
}, sv = {}, rv = { style: { display: "none" } };
function ov(e, t) {
  return b(), O("span", rv);
}
const N_ = /* @__PURE__ */ ce(sv, [["render", ov]]), iv = {};
function av(e, t) {
  const n = ye("router-view");
  return b(), N(n);
}
const z_ = /* @__PURE__ */ ce(iv, [["render", av]]), lv = {
  name: "UluPlaceholderImage",
  props: {
    imageId: String,
    /**
     * Width of the image
     */
    width: {
      type: [String, Number],
      default: "300"
    },
    /**
     * Height of the image
     */
    height: {
      type: [String, Number],
      default: "400"
    },
    /**
     * Alt text for placeholder image
     */
    alt: String,
    /**
     * Random size
     */
    random: Boolean
  },
  computed: {
    src() {
      const { imageId: e } = this, { width: t, height: n } = this.size;
      return `https://picsum.photos/${e ? `id/${e}/` : ""}${t}/${n}`;
    },
    size() {
      const { random: e, width: t, height: n } = this;
      return e ? {
        width: Gn(500, 1e3),
        height: Gn(500, 1e3)
      } : { width: t, height: n };
    }
  }
}, uv = ["src", "alt"];
function cv(e, t, n, s, o, r) {
  return b(), O("img", {
    src: r.src,
    alt: n.alt
  }, null, 8, uv);
}
const H_ = /* @__PURE__ */ ce(lv, [["render", cv]]), dv = {
  name: "PlaceholderText",
  props: {
    amount: {
      type: Number,
      default: 1
    },
    element: {
      type: String,
      default: "p"
    }
  }
};
function fv(e, t, n, s, o, r) {
  return b(!0), O(ee, null, se(parseInt(n.amount), (i) => (b(), N(le(n.element), { key: i }, {
    default: D(() => [...t[0] || (t[0] = [
      K(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed semper erat tincidunt tellus vestibulum dictum. Fusce vel augue commodo, egestas diam sed, accumsan leo. Maecenas congue nec nisl et ullamcorper. Maecenas tincidunt, tortor et viverra eleifend, enim leo vestibulum ipsum, quis placerat mi nisi nec ex. Vivamus a justo volutpat, scelerisque elit eget, lacinia ex. Phasellus dapibus sollicitudin tortor, vitae suscipit nunc condimentum ut. Cras suscipit feugiat nibh nec consectetur. Phasellus vitae quam blandit, cursus metus ut, placerat mi. Sed tempor lacus non est interdum imperdiet nec quis metus. Praesent vel eleifend diam. Donec tincidunt eget purus sed posuere. ", -1)
    ])]),
    _: 2
  }, 1024))), 128);
}
const D_ = /* @__PURE__ */ ce(dv, [["render", fv]]), hv = {
  name: "RouteAnnouncer",
  props: {
    /**
     * Allow user to bypass this functionality
     * - Function should return true if the page should be announced
     * - Function is passed  (to, from, $route) => {}
     *   - to/from are path strings
     */
    validator: {
      type: Function,
      default: () => !0
    },
    /**
     * Array of paths to exclude
     * - Can be exact path "/about" 
     * - Or can be path with wildcard "/about/*" (match all paths under about)
     */
    exclude: {
      type: Array,
      default: () => []
    },
    /**
     * Function to retrieve routes title
     */
    getTitle: {
      type: Function,
      default: (e) => e.meta?.title
    }
  },
  watch: {
    "$route.path"(e, t) {
      if (this.$route.hash)
        return;
      const n = this.validator(e, t, this.$route), s = this.exclude.some((o) => o.endsWith("*") ? e.startsWith(o.slice(0, o.length - 1)) : e === o);
      n && !s && this.$refs.el.focus();
    }
  },
  computed: {
    title() {
      const e = this.getTitle(this.$route);
      return e || console.warn("RouteAnnouncer: No page title!"), e;
    }
  }
};
function mv(e, t, n, s, o, r) {
  return r.title ? (b(), O("p", {
    key: 0,
    tabindex: "-1",
    class: "hidden-visually",
    ref: "el"
  }, H(r.title), 513)) : U("", !0);
}
const V_ = /* @__PURE__ */ ce(hv, [["render", mv]]), W_ = {
  __name: "UluSanityRichText",
  props: {
    /**
     * The array of Portable Text blocks to render.
     */
    content: Array,
    /**
     * If true, the output will not be wrapped in a div with the 'wysiwyg' class.
     */
    noWrapper: {
      type: Boolean,
      default: !1
    }
  },
  setup(e) {
    const t = {
      types: {
        image: ({ value: n }) => ku("img", {
          src: `${n.imageUrl}?max-w=1100&fit=crop`,
          alt: n.imageAlt
        })
      }
    };
    return (n, s) => e.content?.length ? (b(), N(nv, {
      key: 0,
      class: "wysiwyg",
      unwrapped: e.noWrapper
    }, {
      default: D(() => [
        te(z(Xu), {
          value: e.content,
          components: t
        }, null, 8, ["value"])
      ]),
      _: 1
    }, 8, ["unwrapped"])) : U("", !0);
  }
}, pv = {
  name: "AnimateNumber",
  props: {
    /**
     * The target number to animate to.
     */
    value: Number
  },
  watch: {
    value() {
      Yu.to(this, {
        tweenValue: this.value,
        onUpdate: () => {
          this.currentValue = Math.ceil(this.tweenValue);
        }
      });
    }
  },
  data() {
    return {
      currentValue: this.value,
      tweenValue: this.value
    };
  }
};
function vv(e, t, n, s, o, r) {
  return b(), O("span", null, [
    P(e.$slots, "default", { currentValue: o.currentValue }, () => [
      K(H(o.currentValue), 1)
    ])
  ]);
}
const q_ = /* @__PURE__ */ ce(pv, [["render", vv]]), gv = {
  key: 0,
  class: "progress-bar__header"
}, bv = {
  key: 1,
  class: "progress-bar__value progress-bar__value--amount"
}, yv = {
  key: 2,
  class: "progress-bar__icon"
}, xv = { class: "progress-bar__track" }, wv = {
  key: 1,
  class: "progress-bar__values"
}, _v = { class: "progress-bar__value progress-bar__value--amount" }, Sv = {
  key: 0,
  class: "progress-bar__value progress-bar__value--deficit"
}, Cv = { class: "progress-bar__value progress-bar__value--total" }, K_ = {
  __name: "UluProgressBar",
  props: {
    /**
     * The label to display above the progress bar. (or use label slot)
     */
    label: String,
    /**
     * Hides the label visually, but keeps it for screen readers.
     */
    labelHidden: Boolean,
    /**
     * Optional classes object (currently only allowing { label } class)
     */
    classes: {
      type: Object,
      default: () => ({})
    },
    /**
     * Element to use for label
     */
    labelElement: {
      type: String,
      default: "strong"
    },
    /**
     * The current amount of progress.
     */
    amount: {
      type: Number,
      default: 0
    },
    /**
     * The total amount that represents 100% progress.
     */
    total: {
      type: Number,
      default: 100
    },
    /**
     * The amount of deficit to display on the bar.
     */
    deficit: {
      type: Number,
      default: 0
    },
    /**
     * Renders a smaller version of the progress bar.
     */
    small: Boolean,
    /**
     * Applies the 'positive' style (e.g., green).
     */
    positive: Boolean,
    /**
     * Applies the 'negative' style (e.g., red).
     */
    negative: Boolean,
    /**
     * Applies styles for use as a thin loader.
     */
    loader: Boolean,
    /**
     * Applies an indeterminate animation for unknown progress.
     */
    indeterminate: Boolean,
    /**
     * Omit values from output (the numbers below the progress bar)
     */
    noValues: Boolean,
    /**
     * A function to format the numerical values (amount, deficit, total).
     * Takes the value and type ('amount', 'deficit', 'total') as input and should return a string.
     */
    formatValue: {
      type: Function,
      default: (e, t) => e
    },
    /**
     * Will put the amount only in header (there is a headerValue slot it you want to format)
     */
    amountInHeader: Boolean
  },
  setup(e) {
    const t = e, n = (i, a) => `${a === 0 ? 0 : i / a * 100}%`, s = F(() => t.indeterminate ? null : n(t.amount, t.total)), o = F(() => n(t.deficit, t.total)), r = F(() => ({
      "progress-bar": !0,
      "progress-bar--small": t.small,
      "progress-bar--positive": t.positive,
      "progress-bar--negative": t.negative,
      "progress-bar--loader": t.loader,
      "progress-bar--indeterminate": t.indeterminate,
      "type-small": t.small
      // From original component, seems to control font size
    }));
    return (i, a) => (b(), O("div", {
      class: $(r.value)
    }, [
      e.label || i.$slots.label || i.$slots.icon || e.amountInHeader ? (b(), O("div", gv, [
        e.label ? (b(), N(le(e.labelElement), {
          key: 0,
          class: $(["progress-bar__label", [e.classes.label, { "hidden-visually": e.labelHidden }]])
        }, {
          default: D(() => [
            P(i.$slots, "label", {}, () => [
              K(H(e.label), 1)
            ])
          ]),
          _: 3
        }, 8, ["class"])) : U("", !0),
        e.amountInHeader ? (b(), O("div", bv, [
          a[0] || (a[0] = M("strong", { class: "hidden-visually" }, "Amount:", -1)),
          P(i.$slots, "valueAmount", { value: e.amount }, () => [
            K(H(e.formatValue(e.amount, "amount")), 1)
          ])
        ])) : U("", !0),
        i.$slots.icon ? (b(), O("div", yv, [
          P(i.$slots, "icon")
        ])) : U("", !0)
      ])) : U("", !0),
      M("div", xv, [
        M("div", {
          class: "progress-bar__bar",
          style: ve({ width: s.value })
        }, null, 4),
        e.deficit > 0 ? (b(), O("div", {
          key: 0,
          class: "progress-bar__bar--deficit",
          style: ve({ width: o.value })
        }, null, 4)) : U("", !0)
      ]),
      !e.noValues && !e.amountInHeader && !e.loader && !e.indeterminate ? (b(), O("div", wv, [
        M("div", _v, [
          a[1] || (a[1] = M("strong", { class: "hidden-visually" }, "Amount:", -1)),
          P(i.$slots, "valueAmount", { value: e.amount }, () => [
            K(H(e.formatValue(e.amount, "amount")), 1)
          ])
        ]),
        e.deficit > 0 ? (b(), O("div", Sv, [
          a[2] || (a[2] = M("strong", { class: "hidden-visually" }, "Deficit: ", -1)),
          P(i.$slots, "valueDeficit", { value: e.deficit }, () => [
            K("-" + H(e.formatValue(e.deficit, "deficit")), 1)
          ])
        ])) : U("", !0),
        M("div", Cv, [
          a[3] || (a[3] = M("strong", { class: "hidden-visually" }, "Total:", -1)),
          P(i.$slots, "valueTotal", { value: e.total }, () => [
            K(H(e.formatValue(e.total, "total")), 1)
          ])
        ])
      ])) : U("", !0)
    ], 2));
  }
}, Ev = { class: "hidden-visually" }, Ov = { class: "progress-circle__chart" }, Tv = {
  class: "progress-circle__chart-svg",
  viewBox: "0 0 32 32"
}, Av = {
  key: 0,
  class: "progress-circle__chart-value"
}, kv = {
  key: 0,
  class: "progress-circle__value type-small-x"
}, G_ = {
  __name: "UluProgressCircle",
  props: {
    /**
     * The label for accessibility (visually hidden).
     */
    label: {
      type: String,
      default: "Progress"
    },
    /**
     * The progress percentage (0-100).
     */
    percentage: {
      type: Number,
      default: 0
    },
    /**
     * A function to format the percentage value.
     * Takes the number as input and should return a string.
     */
    formatValue: {
      type: Function,
      default: (e) => `${e}%`
    },
    /**
     * Hides the percentage value display.
     */
    noValue: Boolean,
    /**
     * Renders a smaller version of the component.
     */
    small: Boolean,
    /**
     * Displays the percentage value outside (to the side) of the circle.
     */
    outside: Boolean,
    /**
     * Displays the percentage value below the circle.
     */
    outsideBelow: Boolean,
    /**
     * Sets the status color of the progress circle (e.g., 'low', 'incomplete', 'complete').
     */
    status: {
      type: String,
      default: ""
    },
    /**
     * Renders the component as a solid pie chart instead of a donut.
     */
    pieStyle: Boolean,
    /**
     * Removes the center mask, filling the entire circle.
     */
    noMask: Boolean,
    /**
     * The duration of the animation in milliseconds.
     */
    duration: {
      type: Number,
      default: 1e3
      // Matches SCSS animation-duration
    },
    /**
     * The easing function for the animation.
     */
    easing: {
      type: String,
      default: "ease-in"
      // Matches SCSS animation-timing
    }
  },
  setup(e) {
    const t = e, n = J(null), s = (l) => l === 100 ? 101 : l, o = (l = 0) => {
      if (!n.value || !n.value.animate) return;
      const u = { strokeDasharray: [`${l} 100`, r.value] };
      n.value.animate(u, { duration: t.duration, easing: t.easing, fill: "forwards" });
    };
    _e(() => t.percentage, (l, u) => {
      l !== u && o(s(u));
    });
    const r = F(() => `${s(t.percentage)} 100`), i = F(() => t.outside || t.outsideBelow || t.small), a = F(() => {
      const l = {
        "progress-circle": !0,
        "progress-circle--small": t.small,
        "progress-circle--pie": t.pieStyle,
        "progress-circle--outside": i.value,
        "progress-circle--outside-below": t.outsideBelow,
        "progress-circle--no-mask": t.noMask
      };
      return t.status && (l[`progress-circle--${t.status}`] = !0), l;
    });
    return $t(() => {
      o();
    }), (l, u) => (b(), O("div", {
      class: $(a.value)
    }, [
      M("strong", Ev, H(e.label), 1),
      M("div", Ov, [
        (b(), O("svg", Tv, [
          u[0] || (u[0] = M("circle", {
            class: "progress-circle__chart-track",
            r: "16",
            cx: "16",
            cy: "16"
          }, null, -1)),
          M("circle", {
            class: "progress-circle__chart-pie",
            ref_key: "pie",
            ref: n,
            r: "16",
            cx: "16",
            cy: "16",
            style: ve({ strokeDasharray: r.value })
          }, null, 4),
          u[1] || (u[1] = M("circle", {
            class: "progress-circle__chart-mask",
            cx: "16",
            cy: "16"
          }, null, -1))
        ])),
        !i.value && !e.noValue ? (b(), O("strong", Av, [
          P(l.$slots, "value", { value: e.percentage }, () => [
            K(H(e.formatValue(e.percentage)), 1)
          ])
        ])) : U("", !0)
      ]),
      i.value && !e.noValue ? (b(), O("strong", kv, [
        P(l.$slots, "value", { value: e.percentage }, () => [
          K(H(e.formatValue(e.percentage)), 1)
        ])
      ])) : U("", !0)
    ], 2));
  }
};
function Mv(e) {
  const t = /* @__PURE__ */ new Set();
  for (const n of e)
    for (const s of n)
      t.add(s);
  return t;
}
function ss(e) {
  if (!e || e.length === 0) return /* @__PURE__ */ new Set();
  const t = e.sort((s, o) => s.size - o.size), n = new Set(t[0]);
  for (let s = 1; s < t.length; s++) {
    for (const o of n)
      t[s].has(o) || n.delete(o);
    if (n.size === 0) break;
  }
  return n;
}
function Nn(e, t, n) {
  if (!e || e.length === 0)
    return n;
  const s = e.map((o) => {
    const r = o.children.map((i) => {
      const a = `${o.uid}:${i.uid}`;
      return t.get(a) || /* @__PURE__ */ new Set();
    });
    return o.match === "all" ? ss(r) : Mv(r);
  });
  return ss(s);
}
function $v(e, t) {
  return !t || !Array.isArray(t) ? [] : t.map((n) => {
    const s = /* @__PURE__ */ new Set(), o = n.getValue || ((a) => a[n.uid]);
    e.forEach((a) => {
      const l = o(a);
      Array.isArray(l) ? l.forEach((u) => u && s.add(u)) : l && s.add(l);
    });
    const r = n.getLabel || ((a) => a), i = [...s].map((a) => ({
      uid: a,
      label: r(a),
      selected: !1
    }));
    return i.sort((a, l) => String(a.label).localeCompare(String(l.label))), {
      ...n,
      children: i
    };
  });
}
function X_(e, t = {}) {
  const {
    initialFacets: n,
    facetFields: s,
    initialSearchValue: o = "",
    initialSortType: r = "az",
    noDefaultSorts: i = !1,
    extraSortTypes: a = {},
    searchOptions: l = {},
    getSortValue: u = (E) => E.title || E.label || "",
    countMode: c = "none",
    // 'none', 'simple', 'intuitive'
    urlSync: d
  } = t, f = (E) => E.sort((I, R) => {
    const j = u(I), q = u(R);
    return j && q ? String(j).localeCompare(String(q)) : j ? -1 : q ? 1 : 0;
  }), h = {
    az: { text: "A-Z", sort: f },
    za: { text: "Z-A", sort: (E) => f(E).reverse() }
  };
  function m(E) {
    return (E || []).map((I) => ({
      ...I,
      open: I.open || !1,
      children: I.children.map((R) => ({
        ...R,
        selected: R.selected || !1
      })),
      selectedCount: 0
    }));
  }
  const p = J([]), g = J(o), _ = J(r), x = F(() => !s || !e.value?.length ? null : $v(e.value, s)), y = F(() => ({
    ...i ? {} : h,
    ...a
  })), w = F(() => {
    const E = /* @__PURE__ */ new Map(), I = L.value;
    if (!I || !s) return E;
    const R = new Map(s.map((j) => {
      const q = j.getValue || ((Y) => Y[j.uid]);
      return [j.uid, q];
    }));
    for (let j = 0; j < I.length; j++) {
      const q = I[j];
      for (const Y of s) {
        const G = R.get(Y.uid)(q), Q = Array.isArray(G) ? G : G ? [G] : [];
        for (const ge of Q) {
          const me = `${Y.uid}:${ge}`;
          E.has(me) || E.set(me, /* @__PURE__ */ new Set()), E.get(me).add(j);
        }
      }
    }
    return E;
  }), T = F(() => ({
    shouldSort: !0,
    keys: ["title", "label", "description", "author"],
    ...l
  })), L = F(() => g.value?.length ? new Zu(e.value, T.value).search(g.value).map((I) => I.item) : e.value), B = F(() => {
    const E = [];
    return p.value.forEach((I) => {
      const R = I.children.filter((j) => j.selected);
      R.length > 0 && E.push({ ...I, children: R });
    }), E;
  }), k = F(() => {
    if (!B.value.length)
      return L.value;
    const E = w.value;
    if (E.size === 0 && L.value.length > 0 && s?.length > 0)
      return [];
    const I = new Set(L.value.map((q, Y) => Y)), R = Nn(B.value, E, I), j = [];
    for (const q of R)
      j.push(L.value[q]);
    return j;
  }), C = F(() => {
    const E = y.value[_.value]?.sort;
    return typeof E != "function" ? k.value : E([...k.value]);
  });
  function v() {
    p.value.forEach((E) => {
      E.children && E.children.forEach((I) => I.selected = !1), E.selectedCount = 0;
    });
  }
  function S({ groupUid: E, facetUid: I, selected: R }) {
    const j = p.value.find((q) => q.uid === E);
    if (j) {
      !j.multiple && R && j.children.forEach((Y) => {
        Y.uid !== I && (Y.selected = !1);
      });
      const q = j.children.find((Y) => Y.uid === I);
      q && (q.selected = R), j.selectedCount = j.children.filter((Y) => Y.selected).length;
    }
  }
  if (_e(x, (E) => {
    const I = m(n || E);
    I.forEach((R) => {
      R.selectedCount = R.children.filter((j) => j.selected).length;
    }), p.value = I;
  }, { immediate: !0 }), _e([B, L], ([E, I], [R, j]) => {
    if (!(c === "none" || !p.value.length) && !(E === R && I === j)) {
      if (c === "simple") {
        const q = w.value;
        if (q.size === 0 && L.value.length > 0 && s?.length > 0)
          return;
        const Y = new Set(L.value.map((X, G) => G));
        p.value.forEach((X) => {
          const G = E.filter((ge) => ge.uid !== X.uid), Q = Nn(G, q, Y);
          X.children.forEach((ge) => {
            const me = `${X.uid}:${ge.uid}`, be = q.get(me) || /* @__PURE__ */ new Set(), xe = ss([Q, be]);
            ge.count = xe.size;
          });
        });
      } else if (c === "intuitive") {
        const q = w.value;
        if (q.size === 0 && L.value.length > 0 && s?.length > 0)
          return;
        const Y = new Set(L.value.map((G, Q) => Q)), X = Nn(E, q, Y);
        p.value.forEach((G) => {
          G.children.forEach((Q) => {
            const ge = `${G.uid}:${Q.uid}`, me = q.get(ge) || /* @__PURE__ */ new Set();
            if (Q.selected)
              if (G.multiple) {
                const be = ss([X, me]);
                Q.count = be.size;
              } else
                Q.count = X.size;
            else {
              const be = [];
              for (const Ne of E)
                be.push({ ...Ne, children: [...Ne.children] });
              let xe = be.find((Ne) => Ne.uid === G.uid);
              xe || (xe = { ...G, children: [] }, be.push(xe)), G.multiple ? xe.children.push(Q) : xe.children = [Q];
              const wt = Nn(be, q, Y);
              Q.count = wt.size;
            }
          });
        });
      }
    }
  }, { deep: !0, immediate: !0 }), d?.router && d?.route) {
    const { router: E, route: I } = d, R = () => p.value && p.value.length > 0, j = () => {
      if (!R()) return;
      const X = { ...I.query };
      delete X.sort, delete X.search, p.value.forEach((G) => delete X[G.uid]), _.value && _.value !== r && (X.sort = _.value), g.value && (X.search = g.value), B.value.forEach((G) => {
        G.children.length > 0 && (X[G.uid] = G.children.map((Q) => Q.uid).join(","));
      }), JSON.stringify(X) !== JSON.stringify(I.query) && E.push({ query: X });
    }, q = () => {
      const X = I.query;
      X.sort && (_.value = X.sort), X.search && (g.value = X.search);
      const G = /* @__PURE__ */ new Map();
      p.value.forEach((Q) => {
        const ge = X[Q.uid] ? X[Q.uid].split(",") : [];
        G.set(Q.uid, new Set(ge));
      }), p.value.forEach((Q) => {
        const ge = G.get(Q.uid) || /* @__PURE__ */ new Set();
        Q.children.forEach((me) => {
          const be = me.selected, xe = ge.has(me.uid);
          be !== xe && S({ groupUid: Q.uid, facetUid: me.uid, selected: xe });
        });
      });
    }, Y = Mu(() => {
      p.value && p.value.length > 0 && (q(), Y());
    });
    _e([_, g, B], j, { deep: !0 }), _e(() => I.query, q);
  }
  return {
    facets: p,
    searchValue: g,
    selectedSort: _,
    sortTypes: y,
    displayItems: C,
    selectedFacets: B,
    clearFilters: v,
    handleFacetChange: S
  };
}
const Pv = ["onClick"], Y_ = {
  __name: "UluFacetsActiveFilters",
  props: {
    /**
     * The selectedFacets array from the useFacets composable.
     */
    selectedFacets: {
      type: Array,
      default: () => []
    },
    /**
     * Element to use for label
     */
    labelElement: {
      type: String,
      default: "strong"
    },
    /**
     * Icon to use for remove (in button)
     */
    removeIcon: {
      type: String,
      default: "type:close"
    },
    /**
     * Classes for different element { label, list, item, filterButton, filterButtonText, filterButtonIcon, clearButton }
     */
    classes: {
      type: Object,
      default: () => ({
        container: "layout-flex flex-wrap",
        label: "hidden-visually",
        list: "layout-flex flex-wrap",
        item: "margin-right-small-x",
        filterButton: "button button--small button--outline no-min-width",
        filterButtonText: null,
        filterButtonIcon: "button__icon",
        clearButton: "button button--small"
      })
    }
  },
  emits: ["facet-change", "clear-filters"],
  setup(e, { emit: t }) {
    const n = e, s = t, o = F(() => {
      const a = [];
      return n.selectedFacets.forEach((l) => {
        l.children.forEach((u) => {
          a.push({
            ...u,
            groupUid: l.uid
          });
        });
      }), a;
    });
    function r(a) {
      s("facet-change", {
        groupUid: a.groupUid,
        facetUid: a.uid,
        selected: !1
      });
    }
    function i() {
      s("clear-filters");
    }
    return (a, l) => o.value.length ? (b(), O("div", {
      key: 0,
      class: $(["facets-active", e.classes.container])
    }, [
      (b(), N(le(e.labelElement), {
        class: $(["facets-active__label", e.classes.label])
      }, {
        default: D(() => [
          P(a.$slots, "label", {}, () => [
            l[0] || (l[0] = K(" Active Filters: ", -1))
          ])
        ]),
        _: 3
      }, 8, ["class"])),
      M("ul", {
        class: $(["facets-active__list", e.classes.list])
      }, [
        (b(!0), O(ee, null, se(o.value, (u) => (b(), O("li", {
          class: $(["facets-active__item", e.classes.item]),
          key: `${u.groupUid}-${u.uid}`
        }, [
          M("button", {
            class: $(e.classes.filterButton),
            icon: "type:remove",
            onClick: (c) => r(u)
          }, [
            M("span", {
              class: $(e.classes.filterButtonText)
            }, [
              l[1] || (l[1] = M("span", { class: "hidden-visually" }, "Remove Active Filter:", -1)),
              K(" " + H(u.label), 1)
            ], 2),
            M("span", {
              class: $(e.classes.filterButtonIcon)
            }, [
              te(pe, { icon: e.removeIcon }, null, 8, ["icon"])
            ], 2)
          ], 10, Pv)
        ], 2))), 128))
      ], 2),
      M("button", {
        onClick: i,
        class: $(e.classes.clearButton)
      }, "Clear All", 2)
    ], 2)) : U("", !0);
  }
}, Iv = { key: 0 }, rs = {
  __name: "UluFacetsList",
  props: {
    groupUid: String,
    groupName: String,
    children: Array,
    type: {
      type: String,
      default: "checkbox"
    },
    compact: Boolean,
    modelValue: [String, Array]
  },
  emits: ["facet-change"],
  setup(e, { emit: t }) {
    const n = e, s = t, o = F(() => n.type === "radio" ? [{ label: `All ${n.groupName}s`, uid: "" }, ...n.children] : n.children);
    function r(i) {
      if (n.type === "radio") {
        const a = i;
        n.children.forEach((l) => {
          const u = l.uid === a;
          l.selected !== u && s("facet-change", {
            groupUid: n.groupUid,
            facetUid: l.uid,
            selected: u
          });
        });
      } else {
        const a = new Set(i);
        n.children.forEach((l) => {
          const u = a.has(l.uid);
          l.selected !== u && s("facet-change", {
            groupUid: n.groupUid,
            facetUid: l.uid,
            selected: u
          });
        });
      }
    }
    return (i, a) => (b(), N(Hl, {
      class: "facets-list",
      legend: e.groupUid,
      type: e.type,
      options: o.value,
      compact: e.compact,
      "model-value": e.modelValue,
      "onUpdate:modelValue": r
    }, {
      default: D(({ option: l }) => [
        K(H(l.label) + " ", 1),
        l.count !== void 0 ? (b(), O("span", Iv, "(" + H(l.count) + ")", 1)) : U("", !0)
      ]),
      _: 1
    }, 8, ["legend", "type", "options", "compact", "model-value"]));
  }
}, Lv = { class: "facets-filters" }, Z_ = {
  __name: "UluFacetsFilterLists",
  props: {
    /**
     * An object of classes to apply to the component.
     */
    classes: {
      type: Object,
      default: () => ({})
    },
    /**
     * The maximum number of facets to show before showing the "More" button.
     */
    maxVisible: {
      type: Number,
      default: 5
    },
    /**
     * An array of facet groups to display.
     */
    facets: {
      type: Array,
      default: () => []
    },
    /**
     * Whether to use compact modifier on selectable menu
     */
    compact: Boolean
  },
  emits: ["facet-change"],
  setup(e, { emit: t }) {
    const n = t, s = (o) => o.multiple ? o.children.filter((r) => r.selected).map((r) => r.uid) : o.children.find((r) => r.selected)?.uid || "";
    return (o, r) => (b(), O("div", Lv, [
      (b(!0), O(ee, null, se(e.facets, (i) => (b(), N(Xo, {
        key: i.uid,
        classes: {
          container: ["facets-filters__group", e.classes.group],
          containerOpen: ["facets-filters__group--open", e.classes.groupOpen],
          containerClosed: ["facets-filters__group--closed", e.classes.groupClosed],
          trigger: ["facets-filters__group-trigger", e.classes.groupTrigger],
          content: ["facets-filters__group-content", e.classes.groupContent]
        },
        startOpen: i.open
      }, {
        trigger: D(({ isOpen: a }) => [
          P(o.$slots, "groupTrigger", {
            group: i,
            isOpen: a
          }, () => [
            K(H(i.name), 1)
          ])
        ]),
        default: D(() => [
          te(rs, {
            children: i.children.slice(0, e.maxVisible),
            groupUid: i.uid,
            groupName: i.name,
            type: i.multiple ? "checkbox" : "radio",
            compact: e.compact,
            "model-value": s(i),
            onFacetChange: r[0] || (r[0] = (a) => n("facet-change", a))
          }, null, 8, ["children", "groupUid", "groupName", "type", "compact", "model-value"]),
          i.children.length > e.maxVisible ? (b(), N(Xo, {
            key: 0,
            class: $(["facets-filters__more-facets", e.classes.moreFacets])
          }, {
            trigger: D(({ isOpen: a }) => [
              K(H(a ? "View Less" : "Show More"), 1)
            ]),
            default: D(() => [
              te(rs, {
                children: i.children.slice(e.maxVisible),
                groupUid: i.uid,
                groupName: i.name,
                type: i.multiple ? "checkbox" : "radio",
                compact: e.compact,
                "model-value": s(i),
                onFacetChange: r[1] || (r[1] = (a) => n("facet-change", a))
              }, null, 8, ["children", "groupUid", "groupName", "type", "compact", "model-value"])
            ]),
            _: 2
          }, 1032, ["class"])) : U("", !0)
        ]),
        _: 2
      }, 1032, ["classes", "startOpen"]))), 128))
    ]));
  }
}, jv = { class: "facets-filters" }, J_ = {
  __name: "UluFacetsFilterAccordions",
  props: {
    /**
     * An object of classes to apply to the component.
     */
    classes: {
      type: Object,
      default: () => ({})
    },
    /**
     * The maximum number of facets to show before showing the "More" button.
     */
    maxVisible: {
      type: Number,
      default: 5
    },
    /**
     * An array of facet groups to display.
     */
    facets: {
      type: Array,
      default: () => []
    },
    /**
     * Whether to use compact modifier on selectable menu
     */
    compact: Boolean,
    /**
     * Class modifiers for accordion (ie. 'transparent', 'secondary', etc)
     */
    accordionModifiers: [String, Array]
  },
  emits: ["facet-change"],
  setup(e, { emit: t }) {
    const n = t, s = (o) => o.multiple ? o.children.filter((r) => r.selected).map((r) => r.uid) : o.children.find((r) => r.selected)?.uid || "";
    return (o, r) => (b(), O("div", jv, [
      (b(!0), O(ee, null, se(e.facets, (i) => (b(), N(Yo, {
        key: i.uid,
        modifiers: e.accordionModifiers,
        startOpen: i.open
      }, {
        trigger: D(({ isOpen: a }) => [
          P(o.$slots, "groupTrigger", {
            group: i,
            isOpen: a
          }, () => [
            K(H(i.name), 1)
          ])
        ]),
        default: D(() => [
          te(rs, {
            children: i.children.slice(0, e.maxVisible),
            groupUid: i.uid,
            groupName: i.name,
            type: i.multiple ? "checkbox" : "radio",
            compact: e.compact,
            "model-value": s(i),
            onFacetChange: r[0] || (r[0] = (a) => n("facet-change", a))
          }, null, 8, ["children", "groupUid", "groupName", "type", "compact", "model-value"]),
          i.children.length > e.maxVisible ? (b(), N(Yo, {
            key: 0,
            class: $(["facets-filters__more-facets", e.classes.moreFacets]),
            modifiers: e.accordionModifiers
          }, {
            trigger: D(({ isOpen: a }) => [
              K(H(a ? "View Less" : "Show More"), 1)
            ]),
            default: D(() => [
              te(rs, {
                children: i.children.slice(e.maxVisible),
                groupUid: i.uid,
                groupName: i.name,
                type: i.multiple ? "checkbox" : "radio",
                compact: e.compact,
                "model-value": s(i),
                onFacetChange: r[1] || (r[1] = (a) => n("facet-change", a))
              }, null, 8, ["children", "groupUid", "groupName", "type", "compact", "model-value"])
            ]),
            _: 2
          }, 1032, ["class", "modifiers"])) : U("", !0)
        ]),
        _: 2
      }, 1032, ["modifiers", "startOpen"]))), 128))
    ]));
  }
}, Q_ = {
  __name: "UluFacetsFilterPopovers",
  props: {
    /**
     * An array of facet groups to display.
     */
    facets: {
      type: Array,
      default: () => []
    },
    /**
     * An object of classes to apply to the component.
     */
    classes: {
      type: Object,
      default: () => ({
        trigger: "button",
        triggerIcon: "button__icon"
        // content: null,
        // container: null,
        // group: null
      })
    },
    /**
     * If true, the input elements will be visually hidden.
     */
    hideInputs: Boolean
  },
  emits: ["facet-change"],
  setup(e, { emit: t }) {
    const n = t, s = (a) => a.multiple ? a.children : [{ label: `All ${a.name}s`, uid: "" }, ...a.children], o = (a) => a.multiple ? a.children.filter((l) => l.selected).map((l) => l.uid) : a.children.find((l) => l.selected)?.uid || "", r = (a) => {
      const l = a.children.filter((c) => c.selected), u = l.length;
      return u === 0 ? "All" : a.multiple ? u === 1 ? l[0].label : `${u} selected` : l[0].label;
    };
    function i(a, l, u) {
      if (a.multiple) {
        const c = new Set(l);
        a.children.forEach((d) => {
          const f = c.has(d.uid);
          d.selected !== f && n("facet-change", {
            groupUid: a.uid,
            facetUid: d.uid,
            selected: f
          });
        });
      } else {
        const c = l;
        a.children.forEach((d) => {
          const f = d.uid === c;
          d.selected !== f && n("facet-change", {
            groupUid: a.uid,
            facetUid: d.uid,
            selected: f
          });
        }), u();
      }
    }
    return (a, l) => (b(), O("div", {
      class: $(e.classes.container)
    }, [
      (b(!0), O(ee, null, se(e.facets, (u) => (b(), O("div", {
        key: u.uid,
        class: $(e.classes.group)
      }, [
        te(us, {
          classes: {
            trigger: e.classes.trigger,
            content: e.classes.content
          }
        }, {
          trigger: D(() => [
            P(a.$slots, "trigger", {
              group: u,
              label: r(u)
            }, () => [
              M("span", null, [
                K(H(u.name) + ": ", 1),
                M("strong", null, H(r(u)), 1)
              ])
            ]),
            te(pe, {
              class: $(e.classes.triggerIcon),
              icon: "fas fa-chevron-down"
            }, null, 8, ["class"])
          ]),
          default: D(({ close: c }) => [
            te(Hl, {
              legend: u.name,
              type: u.multiple ? "checkbox" : "radio",
              options: s(u),
              "model-value": o(u),
              "onUpdate:modelValue": (d) => i(u, d, c),
              hideInputs: e.hideInputs
            }, null, 8, ["legend", "type", "options", "model-value", "onUpdate:modelValue", "hideInputs"])
          ]),
          _: 2
        }, 1032, ["classes"])
      ], 2))), 128))
    ], 2));
  }
}, Rv = ["for"], Bv = ["id", "onChange"], Uv = { value: "" }, Fv = ["value", "selected"], e0 = {
  __name: "UluFacetsFilterSelects",
  props: {
    /**
     * Facets Array
     */
    facets: {
      type: Array,
      default: () => []
    },
    /**
     * Optional classes bindings for all elements { container, group, label, select }
     */
    classes: {
      type: Object,
      default: () => ({})
    }
  },
  emits: ["facet-change"],
  setup(e, { emit: t }) {
    console.log(e);
    const s = t;
    function o(r, i) {
      const a = i.target.value;
      r.children.find((u) => u.selected)?.uid !== a && r.children.forEach((u) => {
        const c = u.uid === a;
        u.selected !== c && s("facet-change", {
          groupUid: r.uid,
          facetUid: u.uid,
          selected: c
        });
      });
    }
    return (r, i) => (b(), O("div", {
      class: $(["facets-dropdown-filters", e.classes.container])
    }, [
      (b(!0), O(ee, null, se(e.facets, (a) => (b(), O("div", {
        class: $(["facets-dropdown-filters__group", e.classes.group]),
        key: a.uid
      }, [
        M("label", {
          for: `facet-dropdown-${a.uid}`,
          class: $(["facets-dropdown-filters__label", e.classes.label])
        }, [
          P(r.$slots, "label", {}, () => [
            K(H(a.name), 1)
          ])
        ], 10, Rv),
        M("select", {
          id: `facet-dropdown-${a.uid}`,
          class: $(["facets-dropdown-filters__select", e.classes.select]),
          onChange: (l) => o(a, l)
        }, [
          M("option", Uv, [
            P(r.$slots, "optionAll", { group: a }, () => [
              K(" All " + H(a.name) + "s ", 1)
            ])
          ]),
          (b(!0), O(ee, null, se(a.children, (l, u) => (b(), O("option", {
            key: l.uid,
            value: l.uid,
            selected: l.selected
          }, [
            P(r.$slots, "option", {
              group: a,
              option: l,
              index: u
            }, () => [
              K(H(l.label), 1)
            ])
          ], 8, Fv))), 128))
        ], 42, Bv)
      ], 2))), 128))
    ], 2));
  }
}, Nv = { class: "facets-header-layout" }, zv = { class: "facets-header-layout__header" }, Hv = { class: "facets-header-layout__main" }, t0 = {
  __name: "UluFacetsHeaderLayout",
  setup(e) {
    return (t, n) => (b(), O("div", Nv, [
      M("div", zv, [
        P(t.$slots, "header")
      ]),
      M("div", Hv, [
        P(t.$slots, "main")
      ])
    ]));
  }
}, Dv = { class: "facets-results" }, Vv = {
  key: 1,
  class: "facets-results__empty"
}, n0 = {
  __name: "UluFacetsResults",
  props: {
    items: {
      type: Array,
      required: !0
    },
    tag: {
      type: String,
      default: "ul"
    },
    transitionName: {
      type: String,
      default: "facets-fade"
    },
    classes: {
      type: Object,
      default: () => ({})
    }
  },
  setup(e) {
    return (t, n) => (b(), O("div", Dv, [
      e.items.length ? (b(), N(Ea, {
        key: 0,
        tag: e.tag,
        name: e.transitionName,
        class: $(["facets-results__list", e.classes.list])
      }, {
        default: D(() => [
          (b(!0), O(ee, null, se(e.items, (s, o) => (b(), O("li", {
            class: $(["facets-results__item", e.classes.item]),
            key: s.id || o
          }, [
            P(t.$slots, "item", {
              item: s,
              index: o
            })
          ], 2))), 128))
        ]),
        _: 3
      }, 8, ["tag", "name", "class"])) : (b(), O("div", Vv, [
        P(t.$slots, "empty", {}, () => [
          n[0] || (n[0] = M("p", null, "No matching items found.", -1))
        ])
      ]))
    ]));
  }
}, Wv = ["for"], qv = ["id", "placeholder"], s0 = {
  __name: "UluFacetsSearch",
  props: {
    classes: {
      type: Object,
      default: () => ({})
    },
    modelValue: String,
    placeholder: {
      type: String,
      default: "Keywords…"
    }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, s = t, o = ke("facet-view-keyword"), r = F({
      get() {
        return n.modelValue;
      },
      set(i) {
        s("update:modelValue", i);
      }
    });
    return (i, a) => (b(), O("div", {
      class: $(["facets-search", e.classes.container])
    }, [
      M("label", {
        class: $(e.classes.label),
        for: z(o)
      }, [...a[1] || (a[1] = [
        M("strong", null, "Search", -1)
      ])], 10, Wv),
      Kt(M("input", {
        id: z(o),
        class: $(e.classes.input),
        "onUpdate:modelValue": a[0] || (a[0] = (l) => r.value = l),
        type: "text",
        placeholder: e.placeholder
      }, null, 10, qv), [
        [$u, r.value]
      ])
    ], 2));
  }
}, Kv = { class: "facets-sidebar__header" }, Gv = { class: "facets-sidebar__mobile-controls" }, Xv = { class: "facets-sidebar__body" }, Yv = { class: "facets-sidebar__main" }, r0 = {
  __name: "UluFacetsSidebarLayout",
  props: {
    mobileButtonText: {
      type: String,
      default: "Filters & Sort"
    },
    /**
     * Classes for elements. See UluCollapsible for all available class keys (trigger, content, etc).
     * The 'icon' key is also available for the icon span.
     * - Any valid class binding value per element
     */
    classes: {
      type: Object,
      default: () => ({
        mobileButton: "button"
      })
    }
  },
  setup(e) {
    const t = J(!1), n = Ot("uluIsMobile"), s = J(null), o = J(null), r = F(() => n.value ? o.value : s.value);
    return (i, a) => (b(), O("div", {
      class: $(["facets-sidebar", { "facets-sidebar--filters-hidden": z(n) }])
    }, [
      M("div", Kv, [
        P(i.$slots, "header")
      ]),
      Kt(M("div", Gv, [
        M("button", {
          class: $(e.classes.mobileButton),
          onClick: a[0] || (a[0] = (l) => t.value = !0)
        }, H(e.mobileButtonText), 3)
      ], 512), [
        [Hs, z(n)]
      ]),
      M("div", Xv, [
        Kt(M("div", {
          class: "facets-sidebar__sidebar",
          ref_key: "desktopTarget",
          ref: s
        }, null, 512), [
          [Hs, !z(n)]
        ]),
        M("div", Yv, [
          P(i.$slots, "main")
        ])
      ]),
      z(n) ? (b(), N(kl, {
        key: 0,
        modelValue: t.value,
        "onUpdate:modelValue": a[1] || (a[1] = (l) => t.value = l),
        position: "right",
        title: "Filters & Sort",
        allowResize: ""
      }, {
        default: D(() => [
          M("div", {
            class: "facets-sidebar__sidebar",
            ref_key: "mobileTarget",
            ref: o
          }, null, 512)
        ]),
        _: 1
      }, 8, ["modelValue"])) : U("", !0),
      r.value ? (b(), N(os, {
        key: 1,
        to: r.value
      }, [
        P(i.$slots, "sidebar")
      ], 8, ["to"])) : U("", !0)
    ], 2));
  }
}, Zv = ["for"], Jv = ["value", "id"], Qv = ["value"], o0 = {
  __name: "UluFacetsSort",
  props: {
    classes: {
      type: Object,
      default: () => ({})
    },
    sortTypes: {
      type: Object,
      default: () => ({})
    },
    modelValue: {
      type: String,
      default: ""
    }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = t, s = ke("ulu-facet-sort");
    return (o, r) => (b(), O("div", {
      class: $(["facets-sort", e.classes.container])
    }, [
      M("label", {
        for: z(s),
        class: $(e.classes.label)
      }, [
        P(o.$slots, "default", {}, () => [
          r[1] || (r[1] = K("Sort:", -1))
        ])
      ], 10, Zv),
      M("select", {
        value: e.modelValue,
        onChange: r[0] || (r[0] = (i) => n("update:modelValue", i.target.value)),
        id: z(s),
        class: $(e.classes.select)
      }, [
        (b(!0), O(ee, null, se(e.sortTypes, (i, a) => (b(), O("option", {
          value: a,
          key: a
        }, H(i.text), 9, Qv))), 128))
      ], 42, Jv)
    ], 2));
  }
};
function eg({ sections: e, props: t, emit: n, componentElRef: s }) {
  let o = null;
  function r(c) {
    return e.value.findIndex(({ element: d }) => c === d);
  }
  function i(c = null, d = "down") {
    e.value.forEach((f) => {
      f !== c && (f.active && (f.inactiveFrom = d === "down" ? "forward" : "reverse", f.activeFrom = null), f.active = !1);
    });
  }
  function a() {
    let c = 0, d = !0;
    const f = (p) => {
      const { root: g } = o, _ = g ? g.scrollTop : document.documentElement.scrollTop || window.scrollY;
      if (t.debug && (console.group("useScrollAnchors: onObserve"), console.log("Observer:", o), console.log("Last/Current Y:", `${c}/${_}`), console.log("Entries:", p.map((w) => ({ el: w.target, is: w.isIntersecting })))), d && t.firstItemActive) {
        t.debug && console.log("Initial observation, respecting `firstItemActive`."), d = !1, c = _, t.debug && console.groupEnd();
        return;
      }
      d = !1;
      const x = _ > c ? "down" : "up";
      c = _, t.debug && console.log(`Scroll direction: ${x}`);
      const y = p.filter((w) => w.isIntersecting);
      if (t.debug && console.log("Intersecting entries:", y.map((w) => w.target)), y.length > 0) {
        y.sort((L, B) => r(L.target) - r(B.target));
        const w = x === "down" ? y[y.length - 1] : y[0];
        t.debug && console.log("Chosen target entry:", w.target);
        const T = e.value[r(w.target)];
        T && !T.active && (t.debug && console.log("Activating section:", T.title), bn(() => {
          i(T, x), T.active = !0, T.inactiveFrom = null, T.activeFrom = x === "down" ? "forward" : "reverse", n("section-change", { section: T, sections: e.value, active: !0 });
        }));
      } else {
        t.debug && console.log("No intersecting entries. Checking edge cases.");
        const w = e.value.find((T) => T.active);
        if (w) {
          const T = p.find((L) => L.target === w.element);
          if (T && !T.isIntersecting) {
            const L = r(T.target), B = L === 0, k = L === e.value.length - 1;
            (B && x === "up" && !t.firstItemActive || k && x === "down") && (t.debug && console.log("Deactivating section at edge:", w.title), bn(() => {
              i(null, x), n("section-change", { section: w, sections: e.value, active: !1 });
            }));
          }
        }
      }
      t.debug && console.groupEnd();
    };
    let h = null;
    t.observerOptions && t.observerOptions.root ? h = t.observerOptions.root : s.value && (h = Hu(s.value), h === document.scrollingElement && (h = null));
    const m = {
      ...t.observerOptions,
      root: h
    };
    o = new IntersectionObserver(f, m);
  }
  function l() {
    o && (o.disconnect(), e.value.forEach(({ element: c }) => {
      c && o.observe(c);
    }));
  }
  function u() {
    o && (o.disconnect(), o = null);
  }
  $t(() => {
    if (t.firstItemActive && e.value.length > 0) {
      const c = e.value[0];
      c && (c.active = !0);
    }
    a(), l();
  }), ls(() => {
    u();
  }), _e(() => e.value.length, () => {
    bn(() => {
      l();
    });
  });
}
function Dl(e) {
  const t = J(null), n = Ot("uluScrollAnchorsRegister"), s = Ot("uluScrollAnchorsUnregister"), o = (a) => `ulu-sa-${Ju(a)}`, r = F(() => e.customTitleId || o(e.title)), i = kn({
    id: Symbol("section-id"),
    title: e.title,
    titleId: r.value,
    element: null,
    // will be set on mount
    active: !1,
    inactiveFrom: null,
    activeFrom: null
  });
  return _e(() => e.title, (a) => {
    i.title = a, i.titleId = e.customTitleId || o(a);
  }), _e(() => e.customTitleId, (a) => {
    i.titleId = a || o(e.title);
  }), $t(() => {
    n && t.value && (i.element = t.value, n(i));
  }), ls(() => {
    s && s(i.id);
  }), {
    sectionRef: t,
    // the ref for the user to attach
    titleId: r,
    isActive: F(() => i.active),
    inactiveFrom: F(() => i.inactiveFrom),
    activeFrom: F(() => i.activeFrom),
    section: i
  };
}
function Vl() {
  const e = Ot("uluScrollAnchorsSections");
  return e || console.warn("useScrollAnchorSections() must be used within an UluScrollAnchors component provider."), e;
}
const i0 = {
  __name: "UluScrollAnchors",
  props: {
    /**
     * Make the first item active by default on load
     */
    firstItemActive: Boolean,
    /**
     * IntersectionObserver options
     * - Defaults: { root: null, threshold: 0, rootMargin: "-25% 0px -55% 0px" }
     * See: https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/IntersectionObserver
     */
    observerOptions: {
      type: Object,
      default: () => ({
        root: null,
        threshold: 0,
        rootMargin: "-25% 0px -55% 0px"
      })
    },
    /**
     * Enable debug logging for the IntersectionObserver
     */
    debug: Boolean
  },
  emits: ["section-change"],
  setup(e, { emit: t }) {
    const n = e, s = t, o = J([]), r = J(null);
    return eg({ sections: o, props: n, emit: s, componentElRef: r }), Ms("uluScrollAnchorsSections", F(() => o.value)), Ms("uluScrollAnchorsRegister", (i) => {
      o.value.push(i);
    }), Ms("uluScrollAnchorsUnregister", (i) => {
      const a = o.value.findIndex((l) => l.id === i);
      a > -1 && o.value.splice(a, 1);
    }), (i, a) => (b(), O("div", {
      class: "scroll-anchors",
      ref_key: "componentEl",
      ref: r
    }, [
      P(i.$slots, "default")
    ], 512));
  }
}, tg = ["href"], a0 = {
  __name: "UluScrollAnchorsNav",
  props: {
    /**
     * The HTML element to use for the navigation root
     */
    element: {
      type: String,
      default: "nav"
    }
  },
  setup(e) {
    const t = Vl();
    return (n, s) => z(t) && z(t).length ? (b(), N(le(e.element), {
      key: 0,
      class: "scroll-anchors__nav"
    }, {
      default: D(() => [
        M("ul", null, [
          (b(!0), O(ee, null, se(z(t), (o, r) => (b(), O("li", {
            key: r,
            class: $({ "is-active": o.active })
          }, [
            M("a", {
              class: $({ "is-active": o.active }),
              href: `#${o.titleId}`
            }, [
              P(n.$slots, "default", {
                item: o,
                index: r
              }, () => [
                K(H(o.title), 1)
              ])
            ], 10, tg)
          ], 2))), 128))
        ])
      ]),
      _: 3
    })) : U("", !0);
  }
}, ng = { class: "scroll-anchors-nav-animated__rail" }, sg = ["href"], l0 = {
  __name: "UluScrollAnchorsNavAnimated",
  props: {
    /**
     * The HTML element to use for the navigation root
     */
    element: {
      type: String,
      default: "nav"
    },
    /**
     * The width of the navigation rail
     */
    railWidth: {
      type: Number,
      default: 3
    },
    /**
     * The width of the indicator, defaults to railWidth
     */
    indicatorWidth: {
      type: Number,
      default: null
    },
    /**
     * If set, creates a static height, centered indicator
     */
    indicatorHeight: {
      type: Number,
      default: null
    },
    /**
     * Vertical alignment of the indicator relative to the link
     */
    indicatorAlignment: {
      type: String,
      default: "center"
      // options: center, top
    },
    /**
     * Pixel offset for the indicator's vertical alignment
     */
    indicatorAlignmentOffset: {
      type: Number,
      default: 0
    }
  },
  setup(e) {
    const t = e, n = Vl(), s = J({}), o = J(!1), r = J(null), i = F(() => {
      if (!n || !n.value || !n.value.length)
        return !1;
      const l = n.value.findIndex((g) => g.active);
      if (l === -1)
        return !1;
      const u = s.value[l];
      if (!u) return !1;
      const { offsetTop: c, offsetHeight: d } = u, f = t.indicatorHeight != null, h = t.indicatorWidth ?? t.railWidth, m = f ? t.indicatorHeight : d;
      let p = c;
      return t.indicatorAlignment === "center" && (p = c + d / 2 - m / 2), p += t.indicatorAlignmentOffset, { y: p, height: m, width: h };
    });
    _e(i, (l) => {
      l && !o.value && Ta(() => {
        o.value = !0;
      });
    });
    function a(l, u) {
      u && (s.value[l] = u);
    }
    return (l, u) => z(n) && z(n).length ? (b(), N(le(e.element), {
      key: 0,
      class: "scroll-anchors__nav scroll-anchors__nav--animated scroll-anchors-nav-animated",
      style: ve({ "--ulu-sa-nav-rail-width": `${e.railWidth}px` })
    }, {
      default: D(() => [
        M("ul", ng, [
          (b(!0), O(ee, null, se(z(n), (c, d) => (b(), O("li", {
            key: d,
            class: $({ "is-active": c.active })
          }, [
            M("a", {
              class: $({ "is-active": c.active }),
              ref_for: !0,
              ref: (f) => a(d, f),
              href: `#${c.titleId}`
            }, [
              P(l.$slots, "default", {
                item: c,
                index: d
              }, () => [
                K(H(c.title), 1)
              ])
            ], 10, sg)
          ], 2))), 128))
        ]),
        M("div", {
          class: $(["scroll-anchors-nav-animated__indicator", {
            "scroll-anchors-nav-animated__indicator--can-transition": o.value
          }]),
          ref_key: "indicator",
          ref: r,
          style: ve({
            opacity: i.value ? "1" : "0",
            transform: `translateY(${i.value ? i.value.y : 0}px)`,
            height: `${i.value ? i.value.height : 0}px`,
            width: `${i.value ? i.value.width : 0}px`
          })
        }, null, 6)
      ]),
      _: 3
    }, 8, ["style"])) : U("", !0);
  }
}, u0 = {
  __name: "UluScrollAnchorsSection",
  props: {
    /**
     * The title of the section, used for navigation and generating a default ID
     */
    title: String,
    /**
     * The HTML element to use for the title
     */
    titleElement: {
      type: String,
      default: "h2"
    },
    /**
     * The class to apply to the title element
     */
    titleClass: {
      type: String,
      default: "h2"
    },
    /**
     * A custom ID to use for the section anchor, overriding the auto-generated one
     */
    customTitleId: String,
    /**
     * The class to apply to the section's wrapper div
     */
    wrapperClass: {
      type: String,
      default: "scroll-anchors__section"
    },
    /**
     * The class to apply to the wrapper div when the section is active
     */
    activeClass: {
      type: String,
      default: "is-active"
    },
    /**
     * The HTML element to use for the section root
     */
    element: {
      type: String,
      default: "section"
    }
  },
  setup(e) {
    const t = e, { sectionRef: n, titleId: s, isActive: o, inactiveFrom: r, activeFrom: i, section: a } = Dl(t), l = F(() => {
      if (o.value) {
        if (i.value) return `enter-${i.value}`;
      } else if (r.value) return `exit-${r.value}`;
      return null;
    });
    return (u, c) => (b(), N(le(e.element), {
      class: $([e.wrapperClass, { [e.activeClass]: e.activeClass && z(o) }]),
      "data-scrollpoint-state": l.value,
      ref_key: "sectionRef",
      ref: n
    }, {
      default: D(() => [
        (b(), N(le(e.titleElement), {
          class: $(e.titleClass),
          id: z(s)
        }, {
          default: D(() => [
            P(u.$slots, "title", {}, () => [
              K(H(e.title), 1)
            ])
          ]),
          _: 3
        }, 8, ["class", "id"])),
        P(u.$slots, "default", { section: z(a) })
      ]),
      _: 3
    }, 8, ["class", "data-scrollpoint-state"]));
  }
}, c0 = {
  __name: "UluScrollAnchorsHeadlessSection",
  props: {
    /**
     * The title of the section, used for navigation and generating a default ID
     */
    title: {
      type: String,
      required: !0
    },
    /**
     * A custom ID to use for the section anchor, overriding the auto-generated one
     */
    customTitleId: String,
    /**
     * Element to use
     */
    element: {
      type: String,
      default: "div"
    }
  },
  setup(e) {
    const t = e, { sectionRef: n, titleId: s, isActive: o, inactiveFrom: r, activeFrom: i, section: a } = Dl(t), l = F(() => {
      if (o.value) {
        if (i.value) return `enter-${i.value}`;
      } else if (r.value) return `exit-${r.value}`;
      return null;
    });
    return (u, c) => (b(), N(le(e.element), {
      class: $([
        "scroll-anchors__section",
        { "is-active": z(o) }
      ]),
      "data-scrollpoint-state": l.value,
      ref_key: "sectionRef",
      ref: n
    }, {
      default: D(() => [
        P(u.$slots, "default", {
          isActive: z(o),
          titleId: z(s),
          section: z(a),
          inactiveFrom: z(r),
          activeFrom: z(i),
          sectionState: l.value
        })
      ]),
      _: 3
    }, 8, ["class", "data-scrollpoint-state"]));
  }
}, rg = {
  __name: "UluSkeletonText",
  props: {
    /**
     * Inline modifier
     */
    inline: Boolean,
    /**
     * Use alternate background color
     */
    alt: Boolean,
    /**
     * Optional size (width) - should correspond with width setup in scss component
     */
    width: String
  },
  setup(e) {
    return (t, n) => (b(), O("span", {
      class: $(["skeleton skeleton--text", {
        "skeleton--inline": e.inline,
        "skeleton--background-alt": e.alt,
        [`skeleton--width-${e.width}`]: e.width
      }])
    }, null, 2));
  }
}, d0 = {
  __name: "UluShowSkeleton",
  props: {
    /**
     * If true will show whatever is passed to slot, else skeleton text
     */
    when: Boolean
  },
  setup(e) {
    return (t, n) => e.when ? (b(), N(rg, {
      key: 1,
      inline: ""
    })) : P(t.$slots, "default", { key: 0 });
  }
}, f0 = {
  __name: "UluSkeletonContent",
  props: {
    /**
     * Amount of lines to generate
     */
    lines: {
      type: Number,
      default: 6
    }
  },
  setup(e) {
    const t = e, n = F(() => Qu(t.lines, () => {
      const o = Gn(70, 100);
      let r = 0;
      const i = () => {
        const u = o - r, c = Gn(15, u);
        return r += c, c;
      }, a = [];
      for (; r < o - 15; )
        a.push(i());
      const l = () => a.reduce((u, c) => u + c, 0);
      for (; l() >= o && a.pop(); )
        ;
      return a.map((u) => ({ width: u, alt: Math.random() < 0.5 }));
    }));
    return (s, o) => (b(), O("div", null, [
      (b(!0), O(ee, null, se(n.value, (r, i) => (b(), O("div", { key: i }, [
        (b(!0), O(ee, null, se(r, (a) => (b(), O("span", {
          key: a,
          class: $(["skeleton skeleton--text skeleton--inline", { "skeleton--background-alt": a.alt }]),
          style: ve({ width: `${a.width}%` })
        }, null, 6))), 128))
      ]))), 128))
    ]));
  }
}, og = { class: "skeleton skeleton-block--media" }, h0 = {
  __name: "UluSkeletonMedia",
  setup(e) {
    return (t, n) => (b(), O("div", og, [
      te(pe, { icon: "type:image" })
    ]));
  }
}, ig = {
  name: "SlideShow",
  emits: ["slide-change"],
  components: {
    UluIcon: pe
  },
  props: {
    /**
     * Should slides be focusable by tab key
     */
    slideFocusable: Boolean,
    /**
     * Setting for element.focus() when navigating to() a specific slide
     */
    focusOptions: {
      type: Object,
      default: () => ({
        preventScroll: !0,
        focusVisible: !1
      })
    },
    /**
     * Array of slide items (data)
     * - Use slot (#slide) to template
     */
    items: Array,
    /**
     * Slideshow without a nav
     */
    noNav: Boolean,
    /**
     * Allow user to change the scroll behavior when a slide is navigated to()
     */
    scrollBehaviorNav: {
      type: String,
      default: "instant"
    },
    /**
     * Allow user to change the scroll behavior when a slide is navigated via next/prev
     */
    scrollBehaviorControl: {
      type: String,
      default: "smooth"
    },
    /**
     * Observe 
     */
    observerOptions: {
      type: Object,
      default: () => ({
        threshhold: 0,
        rootMargin: "-50% 0px"
      })
    },
    /**
     * The intial slide index to use for active slide (zero based)
     */
    initialActive: {
      type: Number,
      default: 0
    },
    /**
     * Allow user to control scroll amount (element.scrollTo) for prev/next controls
     * - For future scroll implementations (like ulu scroll-slider for cards, etc)
     * - Function is passed (direction, DomRefs)
     * - Number is passed directly
     */
    scrollAmount: [Number, Function]
  },
  data() {
    return {
      slides: this.createSlides()
    };
  },
  computed: {
    canScrollRight() {
      const { slides: e } = this;
      return !e[e.length - 1].active;
    },
    canScrollLeft() {
      const { slides: e } = this;
      return !e[0].active;
    }
  },
  watch: {
    "items.length"() {
      this.slides = this.createSlides(), this.$nextTick(() => {
        this.observeSlides();
      });
    }
  },
  methods: {
    /**
     * Creates the internal array of slides based on user's passed items
     */
    createSlides() {
      return this.items.map((e) => ({
        element: null,
        active: !1,
        item: e
      }));
    },
    /**
     * Find the corresponding slide data by slide element
     */
    getSlideByElement(e) {
      return this.slides.find(({ element: t }) => e === t);
    },
    /**
     * Provides scroll measurements
     */
    getScrollData() {
      const { scrollLeft: e, offsetWidth: t, scrollWidth: n } = this.$refs.track;
      return { scrollLeft: e, offsetWidth: t, scrollWidth: n };
    },
    /**
     * Determines the amount to scroll the track
     */
    resolveAmount(e) {
      const t = e === "next", { scrollAmount: n } = this, { scrollLeft: s, offsetWidth: o } = this.getScrollData();
      return typeof n == "function" ? n(e, this.$refs) : typeof n == "number" ? t ? s + n : s - n : t ? s + o : s - o;
    },
    /**
     * Scroll the track to a specified point 
     */
    scrollTo(e, t) {
      this.$refs.track.scrollTo({ left: e, top: 0, behavior: t });
    },
    /**
     * Scroll to specific index
     * @param {Number} index Slide index
     */
    to(e) {
      const t = this.slides[e], { track: n } = this.$refs;
      if (t) {
        let s = t.element.offsetLeft;
        const o = () => {
          t.element.focus(this.focusOptions), n.removeEventListener("scrollend", o);
        };
        n.addEventListener("scrollend", o), this.scrollTo(s, this.scrollBehaviorNav);
      }
    },
    /**
     * Goto to next slide
     */
    next() {
      const e = this.resolveAmount("next");
      this.scrollTo(e, this.scrollBehaviorControl);
    },
    /**
     * Goto to previous slide
     */
    previous() {
      const e = this.resolveAmount("previous");
      this.scrollTo(e, this.scrollBehaviorControl);
    },
    /**
     * Sets up a new observer to watch the slides visibility (within track)
     */
    createObserver() {
      const { observerOptions: e } = this, { track: t, nav: n } = this.$refs, s = (o) => {
        o.forEach((r) => {
          this.$nextTick(() => {
            const i = this.getSlideByElement(r.target);
            i.active = r.isIntersecting, this.$emit("slide-change", { slide: i, track: t, nav: n });
          });
        });
      };
      this.observer = new IntersectionObserver(s, {
        root: t,
        ...e
      });
    },
    /**
     * Add all slide elements as targets in observer
     */
    observeSlides() {
      const { observer: e, slides: t } = this;
      e.disconnect(), t.forEach(({ element: n }) => {
        n && e.observe(n);
      });
    },
    /**
     * Remove observer and it's internal DOM references (GC)
     */
    destroyObserver() {
      this.observer.disconnect(), this.observer = null;
    }
  },
  mounted() {
    this.createObserver(), this.observeSlides();
  },
  beforeUnmount() {
    this.destroyObserver();
  }
}, ag = { class: "slideshow" }, lg = {
  class: "slideshow__control-context",
  ref: "context"
}, ug = {
  class: "slideshow__track-crop",
  ref: "crop"
}, cg = {
  class: "slideshow__track",
  ref: "track"
}, dg = ["tabindex"], fg = { class: "slideshow__controls" }, hg = { class: "slideshow__controls-item slideshow__controls-item--previous" }, mg = ["disabled"], pg = { class: "slideshow__controls-item slideshow__controls-item--next" }, vg = ["disabled"], gg = {
  key: 0,
  class: "slideshow__nav",
  ref: "nav"
}, bg = ["onClick"], yg = { class: "hidden-visually" };
function xg(e, t, n, s, o, r) {
  const i = ye("UluIcon");
  return b(), O("div", ag, [
    M("div", lg, [
      M("div", ug, [
        M("ul", cg, [
          (b(!0), O(ee, null, se(o.slides, (a, l) => (b(), O("li", {
            class: $(["slideshow__slide", { "is-active": a.active }]),
            key: l,
            tabindex: n.slideFocusable ? "0" : "-1",
            ref_for: !0,
            ref: (u) => {
              a.element = u;
            }
          }, [
            P(e.$slots, "slide", {
              item: a.item,
              index: l
            })
          ], 10, dg))), 128))
        ], 512)
      ], 512),
      M("ul", fg, [
        M("li", hg, [
          M("button", {
            class: "slideshow__control-button slideshow__control-button--previous",
            "aria-label": "Scroll Right",
            onClick: t[0] || (t[0] = (...a) => r.previous && r.previous(...a)),
            disabled: !r.canScrollLeft
          }, [
            te(i, {
              class: "slideshow__control-icon",
              icon: "type:previous"
            })
          ], 8, mg)
        ]),
        M("li", pg, [
          M("button", {
            class: "slideshow__control-button slideshow__control-button--next",
            "aria-label": "Scroll Left",
            onClick: t[1] || (t[1] = (...a) => r.next && r.next(...a)),
            disabled: !r.canScrollRight
          }, [
            te(i, {
              class: "slideshow__control-icon",
              icon: "type:next"
            })
          ], 8, vg)
        ])
      ])
    ], 512),
    n.noNav ? U("", !0) : (b(), O("ul", gg, [
      (b(!0), O(ee, null, se(o.slides, (a, l) => (b(), O("li", {
        class: $(["slideshow__nav-item", { "is-active": a.active }]),
        ref_for: !0,
        ref: (u) => {
          a.navElement = u;
        },
        key: l
      }, [
        M("button", {
          class: $(["slideshow__nav-button", { "is-active": a.active }]),
          onClick: (u) => r.to(l)
        }, [
          P(e.$slots, "nav", {
            item: a.item,
            index: l,
            active: a.active
          }, () => [
            M("span", yg, "Item " + H(l + 1), 1)
          ])
        ], 10, bg)
      ], 2))), 128))
    ], 512))
  ]);
}
const wg = /* @__PURE__ */ ce(ig, [["render", xg]]), _g = {
  name: "ImageSlideShow",
  components: {
    UluSlideShow: wg
  },
  props: {
    images: Array,
    selectButton: Boolean
  },
  watch: {
    images() {
      console.log("watch image from outer");
    }
  },
  methods: {
    /**
     * Test to see if the active slide's nav button (thumbnail) is in view
     * if not, scroll the nav to ensure it is visible. This function will take 
     * into account which side of the overflow nav the item is hidden in and will 
     * scroll either to fit it to the flush end (if overflow to the right) or flush start
     */
    slideChange({ slide: e, nav: t }) {
      const { active: n, navElement: s } = e;
      if (!s) return;
      const { offsetWidth: o, scrollLeft: r } = t, { offsetLeft: i, offsetWidth: a } = s, l = r + o, u = i + a;
      let c = null;
      console.log("left/right", r, l), n && s && (u > l ? c = r + (u - l) : i < r && (c = i), c !== null && t.scrollTo({ left: c, top: 0, behavior: "smooth" }));
    }
  }
}, Sg = ["src", "alt"], Cg = { class: "slideshow__image-actions" }, Eg = ["src", "alt"];
function Og(e, t, n, s, o, r) {
  const i = ye("AppButton"), a = ye("UluSlideShow");
  return b(), N(a, {
    class: "slideshow--images",
    items: n.images,
    onSlideChange: r.slideChange
  }, {
    slide: D(({ item: l }) => [
      M("img", {
        src: l.src,
        alt: l.alt
      }, null, 8, Sg),
      M("div", Cg, [
        n.selectButton ? (b(), N(i, {
          key: 0,
          class: "type-small",
          icon: "plus",
          small: "",
          iconBefore: ""
        }, {
          default: D(() => [...t[0] || (t[0] = [
            K(" Select ", -1)
          ])]),
          _: 1
        })) : U("", !0)
      ])
    ]),
    nav: D(({ index: l }) => [
      M("img", {
        src: n.images[l].src,
        alt: `View image ${l}`
      }, null, 8, Eg)
    ]),
    _: 1
  }, 8, ["items", "onSlideChange"]);
}
const m0 = /* @__PURE__ */ ce(_g, [["render", Og]]), Tg = {
  name: "SlideShowSlide",
  props: {
    /**
     * Provided by grandparent, not user
     */
    active: Boolean,
    someClassTest: String
  },
  mounted() {
    console.log("slide mounted");
  }
};
function Ag(e, t, n, s, o, r) {
  return b(), O("li", {
    class: $(["slideshow__slide", { "is-active": n.active }])
  }, [
    P(e.$slots, "default")
  ], 2);
}
const p0 = /* @__PURE__ */ ce(Tg, [["render", Ag]]), kg = {
  name: "UluTableStickyRows",
  props: {
    rows: Array,
    rowColumns: Array,
    columnWidth: String,
    optionalAttr: Function,
    resolveClasses: Function,
    getCellHeaders: Function,
    value: Function,
    isActual: Boolean,
    classes: Object,
    foot: {
      type: Boolean,
      default: !1
    }
  }
}, Mg = ["id"], $g = ["innerHTML"];
function Pg(e, t, n, s, o, r) {
  return b(!0), O(ee, null, se(n.rows, (i, a) => (b(), O("tr", {
    key: `br-${a}`,
    id: n.optionalAttr(n.isActual && i.id),
    class: $(n.resolveClasses(n.classes.row, { row: i.data, rowIndex: a, isActual: n.isActual, foot: n.foot })),
    style: ve({
      height: i.height
    })
  }, [
    (b(!0), O(ee, null, se(n.rowColumns, (l, u) => (b(), N(le(l.rowHeader ? "th" : "td"), {
      id: n.optionalAttr(n.isActual && l.rowHeader && l.getRowHeaderId(a)),
      scope: n.optionalAttr(n.isActual && l.rowHeader && "row"),
      key: `bc-${u}`,
      headers: n.optionalAttr(n.isActual && n.getCellHeaders(l, a)),
      class: $(n.resolveClasses(l.class, { column: l, index: u, isActual: n.isActual, row: i, rowIndex: a, foot: n.foot })),
      style: ve({
        width: n.columnWidth
      })
    }, {
      default: D(() => [
        e.$slots[l.slot] ? P(e.$slots, l.slot, {
          key: 0,
          row: i.data,
          column: l,
          rowIndex: a,
          index: u,
          foot: n.foot,
          isActual: n.isActual
        }) : l.html ? (b(), O("div", {
          key: 1,
          innerHTML: n.value({ row: i, column: l, rowIndex: a, isActual: n.isActual, foot: n.foot })
        }, null, 8, $g)) : (b(), O(ee, { key: 2 }, [
          K(H(n.value({ row: i, column: l, rowIndex: a, isActual: n.isActual, foot: n.foot })), 1)
        ], 64))
      ]),
      _: 2
    }, 1032, ["id", "scope", "headers", "class", "style"]))), 128))
  ], 14, Mg))), 128);
}
const Ig = /* @__PURE__ */ ce(kg, [["render", Pg]]), Lg = {
  name: "UluTableStickyTable",
  components: {
    UluTableStickyRows: Ig
  },
  props: {
    resolveClasses: Function,
    classes: {
      type: Object,
      default: () => ({})
    },
    caption: String,
    idPrefix: String,
    headerRows: {
      type: Array,
      required: !0
    },
    rows: Array,
    footerRows: Array,
    rowColumns: Array,
    /**
     * Is the actual table not a clone for sticky headers
     */
    isActual: {
      type: Boolean
    },
    columnWidth: {
      type: String
    },
    /**
     * Optional user overridden value getter (for rows)
     * @param {Object} row The current row
     * @param {Object} column The current column in the row
     */
    getRowValue: {
      type: Function,
      default: ({ row: e, column: t }) => e[t.key]
    },
    /**
     * Optional user overridden value getter (for rows)
     * @param {Object} row The current row
     * @param {Object} column The current column in the row
     */
    getColumnTitle: {
      type: Function,
      default: ({ column: e }) => e.title
    }
  },
  data() {
    return {
      headerRefs: {}
    };
  },
  methods: {
    handleSortFocus(e, t) {
      this.isActual && (e.sortFocused = t);
    },
    addHeaderRef(e, t) {
      const { headerRefs: n, isActual: s } = this;
      if (!s || !t) return;
      const { id: o } = e, r = n[o];
      r && this.$emit("actual-header-removed", r), this.$emit("actual-header-added", t), n[o] = t;
    },
    /**
     * False is no longer not printed
     */
    optionalAttr(e) {
      return e || null;
    },
    value({ row: e, column: t, rowIndex: n }) {
      const s = t.value;
      return s ? s({ row: e.data, column: t, rowIndex: n }) : this.getRowValue({ row: e.data, column: t, rowIndex: n });
    },
    getCellHeaders(e, t) {
      const n = e.headers.join(" "), s = e.getRowHeaders(t), o = s.length ? " " : "";
      return `${n}${o}${s}`;
    },
    getHeaderHeaders(e) {
      const t = e.headers.filter((n) => n !== e.id);
      if (t.length)
        return t.join(" ");
    }
  }
}, jg = ["aria-hidden"], Rg = {
  key: 0,
  class: "table-sticky__caption"
}, Bg = ["id"], Ug = ["id", "rowspan", "colspan", "data-child-columns", "aria-sort", "scope", "headers"], Fg = ["innerHTML"], Ng = {
  class: "table-sticky__sort-icon",
  "aria-hidden": "true"
}, zg = { class: "table-sticky__sort-icon-inner" }, Hg = ["innerHTML"], Dg = { key: 1 }, Vg = { key: 2 };
function Wg(e, t, n, s, o, r) {
  const i = ye("UluTableStickyRows");
  return b(), O("table", {
    class: $(n.resolveClasses(n.classes.table, { isActual: n.isActual })),
    "aria-hidden": n.isActual ? "false" : "true"
  }, [
    n.caption ? (b(), O("caption", Rg, H(n.caption), 1)) : U("", !0),
    M("thead", null, [
      (b(!0), O(ee, null, se(n.headerRows, (a, l) => (b(), O("tr", {
        key: `hr-${l}`,
        id: r.optionalAttr(n.isActual && a.id),
        class: $(n.resolveClasses(n.classes.rowHeader, { row: a, rowIndex: l, isActual: n.isActual })),
        style: ve({
          height: a.height
        })
      }, [
        (b(!0), O(ee, null, se(a.columns, (u, c) => (b(), O("th", {
          key: `hc-${c}`,
          id: r.optionalAttr(n.isActual && u.id),
          rowspan: u.rowspan,
          colspan: u.colspan,
          "data-child-columns": u.columns && u.columns.length,
          class: $([
            {
              "sort-active": u.sortApplied,
              "sort-ascending": u.sortApplied && u.sortAscending,
              "sort-descending": u.sortApplied && !u.sortAscending
            },
            n.resolveClasses(u.classHeader, { column: u, index: c, isActual: n.isActual })
          ]),
          style: ve({
            width: u.width
          }),
          "aria-sort": u.sort ? u.sortAscending ? "ascending" : "descending" : null,
          scope: r.optionalAttr(n.isActual && (u.colspan > 1 ? "colgroup" : "col")),
          headers: r.optionalAttr(n.isActual && r.getHeaderHeaders(u, l)),
          ref_for: !0,
          ref: (d) => r.addHeaderRef(u, d)
        }, [
          u.sortable ? (b(), N(le(n.isActual ? "button" : "div"), {
            key: 0,
            class: $(["table-sticky__sort-button", {
              "table-sticky__sort-button--focused": u.sortFocused
            }]),
            onClick: (d) => e.$emit("column-sorted", u),
            onFocus: (d) => r.handleSortFocus(u, !0),
            onBlur: (d) => r.handleSortFocus(u, !1),
            "aria-pressed": u.sortApplied ? "true" : "false"
          }, {
            default: D(() => [
              e.$slots[u.slotHeader] ? P(e.$slots, u.slotHeader, {
                key: 0,
                isActual: n.isActual,
                column: u,
                index: c
              }) : u.htmlTitle ? (b(), O("div", {
                key: 1,
                innerHTML: n.getColumnTitle({ column: u, index: c, isActual: n.isActual })
              }, null, 8, Fg)) : (b(), O(ee, { key: 2 }, [
                K(H(n.getColumnTitle({ column: u, index: c, isActual: n.isActual })), 1)
              ], 64)),
              M("span", Ng, [
                M("span", zg, [
                  P(e.$slots, "sortIcon", {}, () => [
                    t[0] || (t[0] = K("▼", -1))
                  ])
                ])
              ])
            ]),
            _: 2
          }, 1064, ["class", "onClick", "onFocus", "onBlur", "aria-pressed"])) : (b(), O(ee, { key: 1 }, [
            e.$slots[u.slotHeader] ? P(e.$slots, u.slotHeader, {
              key: 0,
              isActual: n.isActual,
              column: u,
              index: c
            }) : u.htmlTitle ? (b(), O("div", {
              key: 1,
              innerHTML: n.getColumnTitle({ column: u, index: c, isActual: n.isActual })
            }, null, 8, Hg)) : (b(), O(ee, { key: 2 }, [
              K(H(n.getColumnTitle({ column: u, index: c, isActual: n.isActual })), 1)
            ], 64))
          ], 64))
        ], 14, Ug))), 128))
      ], 14, Bg))), 128))
    ]),
    n.rows ? (b(), O("tbody", Dg, [
      te(i, {
        rows: n.rows,
        rowColumns: n.rowColumns,
        optionalAttr: r.optionalAttr,
        resolveClasses: n.resolveClasses,
        getCellHeaders: r.getCellHeaders,
        isActual: n.isActual,
        columnWidth: n.columnWidth,
        classes: n.classes,
        value: r.value
      }, Ct({ _: 2 }, [
        se(e.$slots, (a, l) => ({
          name: l,
          fn: D((u) => [
            P(e.$slots, l, He(Ze(u)))
          ])
        }))
      ]), 1032, ["rows", "rowColumns", "optionalAttr", "resolveClasses", "getCellHeaders", "isActual", "columnWidth", "classes", "value"])
    ])) : U("", !0),
    n.footerRows ? (b(), O("tfoot", Vg, [
      te(i, {
        rows: n.footerRows,
        rowColumns: n.rowColumns,
        optionalAttr: r.optionalAttr,
        resolveClasses: n.resolveClasses,
        getCellHeaders: r.getCellHeaders,
        isActual: n.isActual,
        columnWidth: n.columnWidth,
        classes: n.classes,
        value: r.value,
        foot: ""
      }, Ct({ _: 2 }, [
        se(e.$slots, (a, l) => ({
          name: l,
          fn: D((u) => [
            P(e.$slots, l, He(Ze(u)))
          ])
        }))
      ]), 1032, ["rows", "rowColumns", "optionalAttr", "resolveClasses", "getCellHeaders", "isActual", "columnWidth", "classes", "value"])
    ])) : U("", !0)
  ], 10, jg);
}
const qg = /* @__PURE__ */ ce(Lg, [["render", Wg]]);
function Kg() {
  this.__data__ = [], this.size = 0;
}
function Wl(e, t) {
  return e === t || e !== e && t !== t;
}
function ws(e, t) {
  for (var n = e.length; n--; )
    if (Wl(e[n][0], t))
      return n;
  return -1;
}
var Gg = Array.prototype, Xg = Gg.splice;
function Yg(e) {
  var t = this.__data__, n = ws(t, e);
  if (n < 0)
    return !1;
  var s = t.length - 1;
  return n == s ? t.pop() : Xg.call(t, n, 1), --this.size, !0;
}
function Zg(e) {
  var t = this.__data__, n = ws(t, e);
  return n < 0 ? void 0 : t[n][1];
}
function Jg(e) {
  return ws(this.__data__, e) > -1;
}
function Qg(e, t) {
  var n = this.__data__, s = ws(n, e);
  return s < 0 ? (++this.size, n.push([e, t])) : n[s][1] = t, this;
}
function ht(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var s = e[t];
    this.set(s[0], s[1]);
  }
}
ht.prototype.clear = Kg;
ht.prototype.delete = Yg;
ht.prototype.get = Zg;
ht.prototype.has = Jg;
ht.prototype.set = Qg;
function eb() {
  this.__data__ = new ht(), this.size = 0;
}
function tb(e) {
  var t = this.__data__, n = t.delete(e);
  return this.size = t.size, n;
}
function nb(e) {
  return this.__data__.get(e);
}
function sb(e) {
  return this.__data__.has(e);
}
var ql = typeof global == "object" && global && global.Object === Object && global, rb = typeof self == "object" && self && self.Object === Object && self, rt = ql || rb || Function("return this")(), Jt = rt.Symbol, Kl = Object.prototype, ob = Kl.hasOwnProperty, ib = Kl.toString, dn = Jt ? Jt.toStringTag : void 0;
function ab(e) {
  var t = ob.call(e, dn), n = e[dn];
  try {
    e[dn] = void 0;
    var s = !0;
  } catch {
  }
  var o = ib.call(e);
  return s && (t ? e[dn] = n : delete e[dn]), o;
}
var lb = Object.prototype, ub = lb.toString;
function cb(e) {
  return ub.call(e);
}
var db = "[object Null]", fb = "[object Undefined]", Qi = Jt ? Jt.toStringTag : void 0;
function Rn(e) {
  return e == null ? e === void 0 ? fb : db : Qi && Qi in Object(e) ? ab(e) : cb(e);
}
function _s(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var hb = "[object AsyncFunction]", mb = "[object Function]", pb = "[object GeneratorFunction]", vb = "[object Proxy]";
function Gl(e) {
  if (!_s(e))
    return !1;
  var t = Rn(e);
  return t == mb || t == pb || t == hb || t == vb;
}
var Fs = rt["__core-js_shared__"], ea = function() {
  var e = /[^.]+$/.exec(Fs && Fs.keys && Fs.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function gb(e) {
  return !!ea && ea in e;
}
var bb = Function.prototype, yb = bb.toString;
function Bt(e) {
  if (e != null) {
    try {
      return yb.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var xb = /[\\^$.*+?()[\]{}|]/g, wb = /^\[object .+?Constructor\]$/, _b = Function.prototype, Sb = Object.prototype, Cb = _b.toString, Eb = Sb.hasOwnProperty, Ob = RegExp(
  "^" + Cb.call(Eb).replace(xb, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Tb(e) {
  if (!_s(e) || gb(e))
    return !1;
  var t = Gl(e) ? Ob : wb;
  return t.test(Bt(e));
}
function Ab(e, t) {
  return e?.[t];
}
function Ut(e, t) {
  var n = Ab(e, t);
  return Tb(n) ? n : void 0;
}
var Tn = Ut(rt, "Map"), An = Ut(Object, "create");
function kb() {
  this.__data__ = An ? An(null) : {}, this.size = 0;
}
function Mb(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var $b = "__lodash_hash_undefined__", Pb = Object.prototype, Ib = Pb.hasOwnProperty;
function Lb(e) {
  var t = this.__data__;
  if (An) {
    var n = t[e];
    return n === $b ? void 0 : n;
  }
  return Ib.call(t, e) ? t[e] : void 0;
}
var jb = Object.prototype, Rb = jb.hasOwnProperty;
function Bb(e) {
  var t = this.__data__;
  return An ? t[e] !== void 0 : Rb.call(t, e);
}
var Ub = "__lodash_hash_undefined__";
function Fb(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = An && t === void 0 ? Ub : t, this;
}
function Mt(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var s = e[t];
    this.set(s[0], s[1]);
  }
}
Mt.prototype.clear = kb;
Mt.prototype.delete = Mb;
Mt.prototype.get = Lb;
Mt.prototype.has = Bb;
Mt.prototype.set = Fb;
function Nb() {
  this.size = 0, this.__data__ = {
    hash: new Mt(),
    map: new (Tn || ht)(),
    string: new Mt()
  };
}
function zb(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function Ss(e, t) {
  var n = e.__data__;
  return zb(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
function Hb(e) {
  var t = Ss(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function Db(e) {
  return Ss(this, e).get(e);
}
function Vb(e) {
  return Ss(this, e).has(e);
}
function Wb(e, t) {
  var n = Ss(this, e), s = n.size;
  return n.set(e, t), this.size += n.size == s ? 0 : 1, this;
}
function on(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var s = e[t];
    this.set(s[0], s[1]);
  }
}
on.prototype.clear = Nb;
on.prototype.delete = Hb;
on.prototype.get = Db;
on.prototype.has = Vb;
on.prototype.set = Wb;
var qb = 200;
function Kb(e, t) {
  var n = this.__data__;
  if (n instanceof ht) {
    var s = n.__data__;
    if (!Tn || s.length < qb - 1)
      return s.push([e, t]), this.size = ++n.size, this;
    n = this.__data__ = new on(s);
  }
  return n.set(e, t), this.size = n.size, this;
}
function an(e) {
  var t = this.__data__ = new ht(e);
  this.size = t.size;
}
an.prototype.clear = eb;
an.prototype.delete = tb;
an.prototype.get = nb;
an.prototype.has = sb;
an.prototype.set = Kb;
function Gb(e, t) {
  for (var n = -1, s = e == null ? 0 : e.length; ++n < s && t(e[n], n, e) !== !1; )
    ;
  return e;
}
var ta = function() {
  try {
    var e = Ut(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}();
function Xb(e, t, n) {
  t == "__proto__" && ta ? ta(e, t, {
    configurable: !0,
    enumerable: !0,
    value: n,
    writable: !0
  }) : e[t] = n;
}
var Yb = Object.prototype, Zb = Yb.hasOwnProperty;
function Jb(e, t, n) {
  var s = e[t];
  (!(Zb.call(e, t) && Wl(s, n)) || n === void 0 && !(t in e)) && Xb(e, t, n);
}
function Qb(e, t) {
  for (var n = -1, s = Array(e); ++n < e; )
    s[n] = t(n);
  return s;
}
function Bn(e) {
  return e != null && typeof e == "object";
}
var ey = "[object Arguments]";
function na(e) {
  return Bn(e) && Rn(e) == ey;
}
var Xl = Object.prototype, ty = Xl.hasOwnProperty, ny = Xl.propertyIsEnumerable, sy = na(/* @__PURE__ */ function() {
  return arguments;
}()) ? na : function(e) {
  return Bn(e) && ty.call(e, "callee") && !ny.call(e, "callee");
}, Ti = Array.isArray;
function ry() {
  return !1;
}
var Yl = typeof exports == "object" && exports && !exports.nodeType && exports, sa = Yl && typeof module == "object" && module && !module.nodeType && module, oy = sa && sa.exports === Yl, ra = oy ? rt.Buffer : void 0, iy = ra ? ra.isBuffer : void 0, Zl = iy || ry, ay = 9007199254740991, ly = /^(?:0|[1-9]\d*)$/;
function uy(e, t) {
  var n = typeof e;
  return t = t ?? ay, !!t && (n == "number" || n != "symbol" && ly.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
var cy = 9007199254740991;
function Jl(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= cy;
}
var dy = "[object Arguments]", fy = "[object Array]", hy = "[object Boolean]", my = "[object Date]", py = "[object Error]", vy = "[object Function]", gy = "[object Map]", by = "[object Number]", yy = "[object Object]", xy = "[object RegExp]", wy = "[object Set]", _y = "[object String]", Sy = "[object WeakMap]", Cy = "[object ArrayBuffer]", Ey = "[object DataView]", Oy = "[object Float32Array]", Ty = "[object Float64Array]", Ay = "[object Int8Array]", ky = "[object Int16Array]", My = "[object Int32Array]", $y = "[object Uint8Array]", Py = "[object Uint8ClampedArray]", Iy = "[object Uint16Array]", Ly = "[object Uint32Array]", he = {};
he[Oy] = he[Ty] = he[Ay] = he[ky] = he[My] = he[$y] = he[Py] = he[Iy] = he[Ly] = !0;
he[dy] = he[fy] = he[Cy] = he[hy] = he[Ey] = he[my] = he[py] = he[vy] = he[gy] = he[by] = he[yy] = he[xy] = he[wy] = he[_y] = he[Sy] = !1;
function jy(e) {
  return Bn(e) && Jl(e.length) && !!he[Rn(e)];
}
function Ai(e) {
  return function(t) {
    return e(t);
  };
}
var Ql = typeof exports == "object" && exports && !exports.nodeType && exports, wn = Ql && typeof module == "object" && module && !module.nodeType && module, Ry = wn && wn.exports === Ql, Ns = Ry && ql.process, Qt = function() {
  try {
    var e = wn && wn.require && wn.require("util").types;
    return e || Ns && Ns.binding && Ns.binding("util");
  } catch {
  }
}(), oa = Qt && Qt.isTypedArray, By = oa ? Ai(oa) : jy, Uy = Object.prototype, Fy = Uy.hasOwnProperty;
function Ny(e, t) {
  var n = Ti(e), s = !n && sy(e), o = !n && !s && Zl(e), r = !n && !s && !o && By(e), i = n || s || o || r, a = i ? Qb(e.length, String) : [], l = a.length;
  for (var u in e)
    Fy.call(e, u) && !(i && // Safari 9 has enumerable `arguments.length` in strict mode.
    (u == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    o && (u == "offset" || u == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    r && (u == "buffer" || u == "byteLength" || u == "byteOffset") || // Skip index properties.
    uy(u, l))) && a.push(u);
  return a;
}
var zy = Object.prototype;
function eu(e) {
  var t = e && e.constructor, n = typeof t == "function" && t.prototype || zy;
  return e === n;
}
function tu(e, t) {
  return function(n) {
    return e(t(n));
  };
}
var Hy = tu(Object.keys, Object), Dy = Object.prototype, Vy = Dy.hasOwnProperty;
function Wy(e) {
  if (!eu(e))
    return Hy(e);
  var t = [];
  for (var n in Object(e))
    Vy.call(e, n) && n != "constructor" && t.push(n);
  return t;
}
function qy(e) {
  return e != null && Jl(e.length) && !Gl(e);
}
function Ky(e) {
  return qy(e) ? Ny(e) : Wy(e);
}
var nu = typeof exports == "object" && exports && !exports.nodeType && exports, ia = nu && typeof module == "object" && module && !module.nodeType && module, Gy = ia && ia.exports === nu, aa = Gy ? rt.Buffer : void 0;
aa && aa.allocUnsafe;
function Xy(e, t) {
  return e.slice();
}
function Yy(e, t) {
  for (var n = -1, s = e == null ? 0 : e.length, o = 0, r = []; ++n < s; ) {
    var i = e[n];
    t(i, n, e) && (r[o++] = i);
  }
  return r;
}
function Zy() {
  return [];
}
var Jy = Object.prototype, Qy = Jy.propertyIsEnumerable, la = Object.getOwnPropertySymbols, ex = la ? function(e) {
  return e == null ? [] : (e = Object(e), Yy(la(e), function(t) {
    return Qy.call(e, t);
  }));
} : Zy;
function tx(e, t) {
  for (var n = -1, s = t.length, o = e.length; ++n < s; )
    e[o + n] = t[n];
  return e;
}
var nx = tu(Object.getPrototypeOf, Object);
function sx(e, t, n) {
  var s = t(e);
  return Ti(e) ? s : tx(s, n(e));
}
function rx(e) {
  return sx(e, Ky, ex);
}
var Jo = Ut(rt, "DataView"), Qo = Ut(rt, "Promise"), ei = Ut(rt, "Set"), ti = Ut(rt, "WeakMap"), ua = "[object Map]", ox = "[object Object]", ca = "[object Promise]", da = "[object Set]", fa = "[object WeakMap]", ha = "[object DataView]", ix = Bt(Jo), ax = Bt(Tn), lx = Bt(Qo), ux = Bt(ei), cx = Bt(ti), lt = Rn;
(Jo && lt(new Jo(new ArrayBuffer(1))) != ha || Tn && lt(new Tn()) != ua || Qo && lt(Qo.resolve()) != ca || ei && lt(new ei()) != da || ti && lt(new ti()) != fa) && (lt = function(e) {
  var t = Rn(e), n = t == ox ? e.constructor : void 0, s = n ? Bt(n) : "";
  if (s)
    switch (s) {
      case ix:
        return ha;
      case ax:
        return ua;
      case lx:
        return ca;
      case ux:
        return da;
      case cx:
        return fa;
    }
  return t;
});
var dx = Object.prototype, fx = dx.hasOwnProperty;
function hx(e) {
  var t = e.length, n = new e.constructor(t);
  return t && typeof e[0] == "string" && fx.call(e, "index") && (n.index = e.index, n.input = e.input), n;
}
var ma = rt.Uint8Array;
function ki(e) {
  var t = new e.constructor(e.byteLength);
  return new ma(t).set(new ma(e)), t;
}
function mx(e, t) {
  var n = ki(e.buffer);
  return new e.constructor(n, e.byteOffset, e.byteLength);
}
var px = /\w*$/;
function vx(e) {
  var t = new e.constructor(e.source, px.exec(e));
  return t.lastIndex = e.lastIndex, t;
}
var pa = Jt ? Jt.prototype : void 0, va = pa ? pa.valueOf : void 0;
function gx(e) {
  return va ? Object(va.call(e)) : {};
}
function bx(e, t) {
  var n = ki(e.buffer);
  return new e.constructor(n, e.byteOffset, e.length);
}
var yx = "[object Boolean]", xx = "[object Date]", wx = "[object Map]", _x = "[object Number]", Sx = "[object RegExp]", Cx = "[object Set]", Ex = "[object String]", Ox = "[object Symbol]", Tx = "[object ArrayBuffer]", Ax = "[object DataView]", kx = "[object Float32Array]", Mx = "[object Float64Array]", $x = "[object Int8Array]", Px = "[object Int16Array]", Ix = "[object Int32Array]", Lx = "[object Uint8Array]", jx = "[object Uint8ClampedArray]", Rx = "[object Uint16Array]", Bx = "[object Uint32Array]";
function Ux(e, t, n) {
  var s = e.constructor;
  switch (t) {
    case Tx:
      return ki(e);
    case yx:
    case xx:
      return new s(+e);
    case Ax:
      return mx(e);
    case kx:
    case Mx:
    case $x:
    case Px:
    case Ix:
    case Lx:
    case jx:
    case Rx:
    case Bx:
      return bx(e);
    case wx:
      return new s();
    case _x:
    case Ex:
      return new s(e);
    case Sx:
      return vx(e);
    case Cx:
      return new s();
    case Ox:
      return gx(e);
  }
}
var ga = Object.create, Fx = /* @__PURE__ */ function() {
  function e() {
  }
  return function(t) {
    if (!_s(t))
      return {};
    if (ga)
      return ga(t);
    e.prototype = t;
    var n = new e();
    return e.prototype = void 0, n;
  };
}();
function Nx(e) {
  return typeof e.constructor == "function" && !eu(e) ? Fx(nx(e)) : {};
}
var zx = "[object Map]";
function Hx(e) {
  return Bn(e) && lt(e) == zx;
}
var ba = Qt && Qt.isMap, Dx = ba ? Ai(ba) : Hx, Vx = "[object Set]";
function Wx(e) {
  return Bn(e) && lt(e) == Vx;
}
var ya = Qt && Qt.isSet, qx = ya ? Ai(ya) : Wx, su = "[object Arguments]", Kx = "[object Array]", Gx = "[object Boolean]", Xx = "[object Date]", Yx = "[object Error]", ru = "[object Function]", Zx = "[object GeneratorFunction]", Jx = "[object Map]", Qx = "[object Number]", ou = "[object Object]", ew = "[object RegExp]", tw = "[object Set]", nw = "[object String]", sw = "[object Symbol]", rw = "[object WeakMap]", ow = "[object ArrayBuffer]", iw = "[object DataView]", aw = "[object Float32Array]", lw = "[object Float64Array]", uw = "[object Int8Array]", cw = "[object Int16Array]", dw = "[object Int32Array]", fw = "[object Uint8Array]", hw = "[object Uint8ClampedArray]", mw = "[object Uint16Array]", pw = "[object Uint32Array]", fe = {};
fe[su] = fe[Kx] = fe[ow] = fe[iw] = fe[Gx] = fe[Xx] = fe[aw] = fe[lw] = fe[uw] = fe[cw] = fe[dw] = fe[Jx] = fe[Qx] = fe[ou] = fe[ew] = fe[tw] = fe[nw] = fe[sw] = fe[fw] = fe[hw] = fe[mw] = fe[pw] = !0;
fe[Yx] = fe[ru] = fe[rw] = !1;
function Kn(e, t, n, s, o, r) {
  var i;
  if (i !== void 0)
    return i;
  if (!_s(e))
    return e;
  var a = Ti(e);
  if (a)
    i = hx(e);
  else {
    var l = lt(e), u = l == ru || l == Zx;
    if (Zl(e))
      return Xy(e);
    if (l == ou || l == su || u && !o)
      i = u ? {} : Nx(e);
    else {
      if (!fe[l])
        return o ? e : {};
      i = Ux(e, l);
    }
  }
  r || (r = new an());
  var c = r.get(e);
  if (c)
    return c;
  r.set(e, i), qx(e) ? e.forEach(function(h) {
    i.add(Kn(h, t, n, h, e, r));
  }) : Dx(e) && e.forEach(function(h, m) {
    i.set(m, Kn(h, t, n, m, e, r));
  });
  var d = rx, f = a ? void 0 : d(e);
  return Gb(f || e, function(h, m) {
    f && (m = h, h = e[m]), Jb(i, m, Kn(h, t, n, m, e, r));
  }), i;
}
var vw = 1, gw = 4;
function bw(e) {
  return Kn(e, vw | gw);
}
const zs = (e) => e.every((t) => typeof t == "object"), xa = !0, iu = () => window.innerWidth;
let wa = iu();
const yw = {
  name: "UluTableSticky",
  components: {
    UluTableStickyTable: qg
  },
  props: {
    /**
     * By default you cannot have interactive items in the cloned sticky header and first column (if set)
     * this disables that feature. It was set up that way for accessibility
     */
    allowClickClones: Boolean,
    /**
     * Allows user to pass classes object to add custom classes to parts of the component
     */
    classes: {
      type: Object,
      default: () => ({})
    },
    /**
     * Allow user to pass components
     * - Passed the same values as if using a slot
     * - 
     */
    controlsComponent: Object,
    /**
     * Allows user to pass callback to get the row's value
     */
    getRowValue: Function,
    getColumnTitle: Function,
    /**
     * Hidden caption for accessibility
     */
    caption: {
      type: String,
      required: xa
    },
    /**
     * Array of column configurations to convert to list output
     * 
     * @property {Object} column A column config
     * @property {String|Boolean} column.title The title to output for the column if set to a falsey value nothing will print
     * @property {Array} column.columns Array of child columns
     * @property {String} column.key The key that should be usec to grab column's value from rows
     * @property {Function} column.value A function that returns the column's value used instead of key passed (row, column)
     * @property {String} column.slot Register custom slot name to use as a template for this column. Passing a slot with this name will link them. The slot are passed the ({row, column}). Note this will disable output of the column's value
     * @property {String} column.component Pass a component to use for this columns values (<td>)
     * @property {String} column.componentHeader Pass a component to use for this columns header (<th>)
     * @property {String} column.slotHeader Register custom slot name to use in the header
     * @property {String} column.classHeader Custom class(s) to be set to column <th>
     * @property {String} column.class Custom class(s) to be set to column's value <td>       
     * @property {String} column.html Use v-html output for value      
     * @property {String} column.rowHeader When this column is printed in the <tbody> it should be a header for the row. Note supports multiple row headers from left to right only. No rowspan support for rowHeaders. 
     */
    columns: {
      type: Array,
      validator: zs,
      required: xa
    },
    /**
     * Whether the first column of the table should be sticky
     * - Requires that the table's first column header is nested
     */
    firstColumnSticky: Boolean,
    /**
     * Prefixed used for id generation
     */
    idPrefix: {
      type: String,
      default: "DT"
    },
    /**
     * Array of tables rows (tbody)
     * - Each row is an object who's value will matched to columns
     */
    rows: {
      type: Array,
      validator: zs
      // required
    },
    /**
     * Array of rows for footer (tfoot)
     */
    footerRows: {
      type: Array,
      validator: zs
    },
    /**
     * Enables the visibility of the scroll controls
     * - Scroll controls shift the tables x-axis when the table has overflow-x
     * - Can be templated manually using slot named "controlsButtons", slot needs to create layout and call methods 
     *   + scope = { scrollLeft, scrollRight, canScrollLeft, canScrollRight }
     * - Scroll controls are transformed with the header (move down as the user scrolls)
     */
    scrollControls: Boolean,
    /**
     * Scrollable context DOM Element, if the sticky element is within another
     * scrolling parent use this to change the scroll activation handler to use a custom
     * scrollable parent element
     * 
     */
    scrollContext: {
      default: () => window
    },
    /**
     * Amount to scroll when user uses scroll controls (pixels)
     */
    scrollControlAmount: {
      type: Number,
      default: 100
    }
  },
  data() {
    const e = this.createColumns();
    return {
      currentColumns: e,
      currentRows: this.createRows(),
      currentFooterRows: this.createRows(!0),
      headerRows: this.createHeaderRows(e),
      sizesCalculated: !1,
      tableWidth: "auto",
      resizeHandler: ni(this.onResize.bind(this), 500, !0),
      resizing: !1,
      overflownX: !1,
      canScrollLeft: !1,
      canScrollRight: !1,
      displayY: null,
      sizesPainted: !1,
      columnResizeObserver: new ResizeObserver(() => this.onColumnResize())
    };
  },
  watch: {
    columns: {
      handler() {
        this.currentColumns = this.createColumns(), this.headerRows = this.createHeaderRows(this.currentColumns), this.refresh();
      },
      deep: !0
    },
    rows: {
      handler() {
        this.currentRows = this.createRows(), this.refresh();
      },
      deep: !0
    },
    footerRows: {
      handler() {
        this.currentFooterRows = this.createRows(!0), this.refresh();
      },
      deep: !0
    }
  },
  computed: {
    controlsShown() {
      return this.scrollControls && this.overflownX;
    },
    headerVisibleX() {
      return this.sizesCalculated && this.overflownX;
    },
    headerOpacityX() {
      return this.headerVisibleX ? "1" : "0";
    },
    /**
     * Used to output the body rows. This is an array of only the deepest child columns
     * parent column information can be accessed by reference
     */
    rowColumns() {
      const e = this.currentColumns, t = [], n = (o) => {
        o.columns ? o.columns.forEach(n) : t.push(o);
      };
      e.forEach(n);
      let s = [];
      return t.forEach((o, r) => {
        const i = s.slice();
        o.getRowHeaders = (a) => i.map((l) => l(a)).join(" "), o.rowHeader && (o.getRowHeaderId = (a) => `${this.idPrefix}-rh-${a}-${r}`, s.push(o.getRowHeaderId));
      }), t;
    },
    headerHeight() {
      return this.headerRows.reduce((e, t) => e + t.boxHeight, 0);
    },
    /**
     * Reduce the array of column header rows to the first row, first column
     */
    headerRowsFirst() {
      const e = this.headerRows[0], n = [Object.assign({}, e.columns[0], { rowspan: 1, colspan: 1 })];
      return [{
        ...e,
        columns: n,
        boxHeight: this.headerHeight,
        height: `${this.headerHeight}px`
      }];
    },
    /**
     * Reduce the rowColumn array to only the first column
     */
    rowColumnsFirst() {
      return [this.rowColumns[0]];
    },
    firstColumnSize() {
      const e = this.headerRowsFirst[0].height;
      return { width: this.headerRows[0].columns[0].width, height: e };
    }
  },
  methods: {
    resetSorts(e) {
      const t = (n) => {
        n.forEach((s) => {
          e.key !== s.key && (s.sortApplied = !1, s.sortAscending = !1), s.columns && t(s.columns);
        });
      };
      t(this.currentColumns);
    },
    applySort(e) {
      this.resetSorts(e), e.sortApplied ? e.sortAscending = !e.sortAscending : e.sortApplied = !0, this.$emit("column-sort", e);
    },
    onColumnResize() {
      this.sizesPainted && this.refresh();
    },
    headerAdded(e) {
      this.columnResizeObserver.observe(e);
    },
    headerRemoved(e) {
      this.columnResizeObserver.unobserve(e);
    },
    /**
     * Allow classes options to be strings or functions
     */
    resolveClasses(e, t = null) {
      if (!(typeof e > "u"))
        return typeof e == "function" ? e(t) : e;
    },
    /**
     * Handles horizontal scroll
     * - Shifts the first column as the user scrolls
     */
    syncScrollLeft() {
      const e = this.$refs.display.scrollLeft;
      this.$refs.header.$el.style.transform = `translateX(-${e}px)`;
    },
    /**
     * Checks and sets state if the table is overflow horizontally
     */
    checkOverflowX() {
      this.overflownX = this.$refs.display.scrollWidth > this.$refs.display.clientWidth;
    },
    /**
     * Checks whether if the tables scroll position is at the start or end and updates state
     */
    checkScrollability() {
      if (!this.overflownX) return;
      const e = this.$refs.display;
      this.canScrollLeft = e.scrollLeft > 0, this.canScrollRight = e.clientWidth + e.scrollLeft < e.scrollWidth;
    },
    /**
     * Creates column array for internal use
     * - Avoid mutating user's prop 
     * - Current columns being used in the display
     * - This internal copy has internal properties/structural info (like ID)
     * - This is the copy of the users columns to avoid mutating their object
     * - Can be used in the future for adding/removing or enabling/disabling
     */
    createColumns() {
      const e = this.idCreator("c"), t = bw(this.columns), n = (s, o) => {
        s.id = e(), s.parent = o, s.width = "auto", s.boxWidth = null, s.sortApplied = !1, s.sortAscending = !1, s.sortFocused = !1;
        let r = [];
        o && (o.headers && o.headers.length ? r = [...o.headers] : r.push(o.id)), r.push(s.id), s.headers = r, s.columns ? s.columns.forEach((i) => n(i, s)) : !s.key && !s.value && !s.slot && console.warn("UluTableSticky: Missing 'key', 'value' or 'slot' in column configuration for", s);
      };
      return t.forEach((s) => n(s, null)), t;
    },
    /**
     * Conversion of the columns (which are nested hierarchy) to a flat list of columns 
     * sorted by the way they need to be displayed in rows 
     * - Used for nested headers
     * - Transform nested data into row arrays
     */
    createHeaderRows(e) {
      const t = this.idCreator("hr"), n = e.reduce(this.maxColumnChildren, 1), s = "auto", o = new Array(n).fill(null).map(() => ({
        height: s,
        boxHeight: null,
        columns: [],
        id: t()
      }));
      function r(i, a) {
        const l = a.columns;
        l && l.forEach((u) => r(1 + i, u)), a.rowspan = l ? 1 : n - i, a.colspan = l ? l.reduce((u, c) => u + c.colspan, 0) : 1, o[i].columns.push(a);
      }
      return e.forEach((i) => r(0, i)), o;
    },
    /**
     * Creates row array for internal use
     * - Avoid mutating user's prop
     */
    createRows(e) {
      const t = this.idCreator(e ? "fr" : "br"), n = e ? this.footerRows : this.rows;
      return n ? n.map((s) => ({
        height: null,
        boxHeight: null,
        data: s,
        id: t()
      })) : [];
    },
    onResize() {
      const e = iu();
      wa !== e && (wa = e, this.resizing ? (this.resizing = !1, this.setTableSizes(), this.checkOverflowX(), this.syncScrollLeft()) : (this.resizing = !0, this.removeTableSizes()));
    },
    /**
     * Method to update the table (sizes, etc) when data has changed
     */
    refresh() {
      this.removeTableSizes(), this.$nextTick(() => {
        this.setTableSizes(), this.checkOverflowX(), this.checkScrollability(), this.syncScrollLeft();
      });
    },
    onScrollX() {
      this.checkScrollability(), this.syncScrollLeft();
    },
    idCreator(e) {
      let t = 0;
      return () => `${this.idPrefix}-${e}-${++t}`;
    },
    /**
     * Recursive function used as a reducer to return the deepest nested columns
     */
    maxColumnChildren(e, t) {
      const n = t.columns ? t.columns.reduce(this.maxColumnChildren) + 1 : 1;
      return e > n ? e : n;
    },
    /**
     * Method to attach handlers needed after creation
     */
    attachHandlers() {
      this.handlerScrollX = this.onScrollX, this.$refs.display.addEventListener("scroll", this.handlerScrollX), this.scrollContext.addEventListener("touchmove", this.handlerScrollY), window.addEventListener("resize", this.resizeHandler);
    },
    removeHandlers() {
      this.$refs.display.removeEventListener("scroll", this.handlerScrollX), this.scrollContext.removeEventListener("scroll", this.handlerScrollY), this.scrollContext.addEventListener("touchmove", this.handlerScrollY), window.removeEventListener("resize", this.resizeHandler);
    },
    removeTableSizes() {
      this.sizesPainted = !1, this.sizesCalculated = !1;
      const e = (t) => {
        t.boxHeight = null, t.height = "auto";
      };
      this.tableWidth = "auto", this.headerRows.forEach((t) => {
        e(t), t.columns.forEach((n) => {
          n.boxWidth = null, n.width = "auto";
        });
      }), this.firstColumnSticky && (this.currentRows.forEach((t) => e(t)), this.currentFooterRows.forEach((t) => e(t)));
    },
    scrollLeft() {
      const e = this.$refs.display, t = e.scrollLeft, n = this.scrollControlAmount, s = t - n;
      e.scroll({
        left: s < 0 ? 0 : s,
        behavior: "smooth"
      });
    },
    scrollRight() {
      const e = this.$refs.display, t = e.scrollWidth, n = e.scrollLeft, s = this.scrollControlAmount, o = n + s;
      e.scroll({
        left: o > t ? e.scrollWidth : o,
        behavior: "smooth"
      });
    },
    /**
     * Cleanup function for when component is not in use
     */
    setTableSizes() {
      const e = (s, o) => Math.ceil(s.getBoundingClientRect()[o]);
      this.tableWidth = `${e(this.$refs.table.$el, "width")}px`;
      const t = (s) => document.getElementById(s.id), n = (s) => {
        const o = t(s);
        o && (s.boxHeight = e(o, "height"), s.height = `${s.boxHeight}px`);
      };
      this.headerRows.forEach((s) => {
        n(s), s.columns.forEach((o) => {
          const r = t(o);
          r && (o.boxWidth = e(r, "width"), o.width = `${o.boxWidth}px`);
        });
      }), this.firstColumnSticky && (this.currentRows.forEach((s) => n(s)), this.currentFooterRows.forEach((s) => n(s))), this.$nextTick(() => {
        this.sizesCalculated = !0, Ta(() => {
          this.sizesPainted = !0;
        });
      });
    },
    tableReady() {
      this.setTableSizes();
    }
    /**
     * Creates a new throttled scroll handler
     */
    // throttleScroll(handler) {
    //   let id = null;
    //   // Old Fired after frame
    //   return (event) => {
    //     if (id) window.cancelAnimationFrame(id);
    //     id = window.requestAnimationFrame(() => handler(event));
    //   };
    // },
  },
  mounted() {
    this.attachHandlers(), this.checkOverflowX(), this.checkScrollability();
  },
  beforeUnmount() {
    this.removeHandlers();
  },
  unmounted() {
    this.columnResizeObserver.disconnect(), this.columnResizeObserver = null;
  }
}, xw = { class: "table-sticky__sticky-wrap table-sticky__sticky-wrap--header" }, ww = { class: "table-sticky__header-wrap" }, _w = { class: "table-sticky__sticky-wrap table-sticky__sticky-wrap--first-column-header" }, Sw = { class: "table-sticky__sticky-wrap table-sticky__sticky-wrap--controls" }, Cw = {
  key: 2,
  class: "table-sticky__controls-inner"
}, Ew = ["disabled"], Ow = ["disabled"], Tw = {
  ref: "display",
  class: "table-sticky__display"
};
function Aw(e, t, n, s, o, r) {
  const i = ye("UluTableStickyTable");
  return b(), O("div", {
    class: $(["table-sticky", {
      "table-sticky--overflown-x": o.overflownX,
      "table-sticky--can-scroll-right": o.canScrollRight,
      "table-sticky--can-scroll-left": o.canScrollLeft
    }])
  }, [
    M("div", xw, [
      M("div", ww, [
        te(i, {
          ref: "header",
          class: "table-sticky__table table-sticky__table--header",
          classes: n.classes,
          caption: n.caption,
          resolveClasses: r.resolveClasses,
          getColumnTitle: n.getColumnTitle,
          idPrefix: n.idPrefix,
          headerRows: o.headerRows,
          style: ve({
            opacity: o.sizesCalculated ? "1" : "0",
            pointerEvents: o.sizesCalculated ? "auto" : "none",
            width: o.tableWidth
          }),
          onColumnSorted: r.applySort
        }, Ct({ _: 2 }, [
          se(e.$slots, (a, l) => ({
            name: l,
            fn: D((u) => [
              P(e.$slots, l, He(Ze(u)))
            ])
          }))
        ]), 1032, ["classes", "caption", "resolveClasses", "getColumnTitle", "idPrefix", "headerRows", "style", "onColumnSorted"])
      ])
    ]),
    M("div", _w, [
      n.firstColumnSticky ? (b(), N(i, {
        key: 0,
        ref: "firstColumnHeader",
        class: "table-sticky__table table-sticky__table--first-column-header",
        classes: n.classes,
        caption: n.caption,
        resolveClasses: r.resolveClasses,
        getColumnTitle: n.getColumnTitle,
        idPrefix: n.idPrefix,
        headerRows: r.headerRowsFirst,
        style: ve({
          opacity: r.headerOpacityX,
          pointerEvents: r.headerVisibleX ? "auto" : "none"
        }),
        onColumnSorted: r.applySort
      }, Ct({ _: 2 }, [
        se(e.$slots, (a, l) => ({
          name: l,
          fn: D((u) => [
            P(e.$slots, l, He(Ze(u)))
          ])
        }))
      ]), 1032, ["classes", "caption", "resolveClasses", "getColumnTitle", "idPrefix", "headerRows", "style", "onColumnSorted"])) : U("", !0)
    ]),
    M("div", Sw, [
      Kt(M("div", {
        class: $(["table-sticky__controls", r.resolveClasses(n.classes.controls)]),
        ref: "controls"
      }, [
        e.$slots.controls ? P(e.$slots, "controls", {
          key: 0,
          scrollLeft: r.scrollLeft,
          scrollRight: r.scrollRight,
          canScrollLeft: o.canScrollLeft,
          canScrollRight: o.canScrollRight
        }) : n.controlsComponent ? (b(), N(le(n.controlsComponent), {
          key: 1,
          scrollLeft: r.scrollLeft,
          scrollRight: r.scrollRight,
          canScrollLeft: o.canScrollLeft,
          canScrollRight: o.canScrollRight
        }, null, 8, ["scrollLeft", "scrollRight", "canScrollLeft", "canScrollRight"])) : (b(), O("div", Cw, [
          M("button", {
            class: $(["table-sticky__control table-sticky__control--left", r.resolveClasses(n.classes.controlButton)]),
            "aria-label": "Scroll Left",
            onClick: t[0] || (t[0] = (...a) => r.scrollLeft && r.scrollLeft(...a)),
            disabled: !o.canScrollLeft
          }, [
            P(e.$slots, "controlLeft", {}, () => [
              t[2] || (t[2] = K(" ← ", -1))
            ])
          ], 10, Ew),
          M("button", {
            class: $(["table-sticky__control table-sticky__control--right", r.resolveClasses(n.classes.controlButton)]),
            "aria-label": "Scroll Right",
            onClick: t[1] || (t[1] = (...a) => r.scrollRight && r.scrollRight(...a)),
            disabled: !o.canScrollRight
          }, [
            P(e.$slots, "controlRight", {}, () => [
              t[3] || (t[3] = K(" → ", -1))
            ])
          ], 10, Ow)
        ]))
      ], 2), [
        [Hs, r.controlsShown]
      ])
    ]),
    M("div", Tw, [
      te(i, {
        ref: "table",
        class: "table-sticky__table table-sticky__table--actual",
        classes: n.classes,
        resolveClasses: r.resolveClasses,
        isActual: "",
        headerRows: o.headerRows,
        rows: o.currentRows,
        footerRows: o.currentFooterRows,
        rowColumns: r.rowColumns,
        caption: n.caption,
        idPrefix: n.idPrefix,
        getRowValue: n.getRowValue,
        getColumnTitle: n.getColumnTitle,
        onVnodeMounted: r.tableReady,
        onActualHeaderRemoved: r.headerRemoved,
        onActualHeaderAdded: r.headerAdded,
        onColumnSorted: r.applySort
      }, Ct({ _: 2 }, [
        se(e.$slots, (a, l) => ({
          name: l,
          fn: D((u) => [
            P(e.$slots, l, He(Ze(u)))
          ])
        }))
      ]), 1032, ["classes", "resolveClasses", "headerRows", "rows", "footerRows", "rowColumns", "caption", "idPrefix", "getRowValue", "getColumnTitle", "onVnodeMounted", "onActualHeaderRemoved", "onActualHeaderAdded", "onColumnSorted"])
    ], 512),
    n.firstColumnSticky ? (b(), N(i, {
      key: 0,
      ref: "firstColumn",
      class: "table-sticky__table table-sticky__table--first-column",
      classes: n.classes,
      resolveClasses: r.resolveClasses,
      caption: n.caption,
      headerRows: r.headerRowsFirst,
      columnWidth: r.firstColumnSize.width,
      rows: o.currentRows,
      footerRows: o.currentFooterRows,
      rowColumns: r.rowColumnsFirst,
      idPrefix: n.idPrefix,
      getRowValue: n.getRowValue,
      getColumnTitle: n.getColumnTitle,
      style: ve({
        opacity: r.headerOpacityX,
        pointerEvents: r.headerVisibleX ? "auto" : "none"
      }),
      onColumnSorted: r.applySort
    }, Ct({ _: 2 }, [
      se(e.$slots, (a, l) => ({
        name: l,
        fn: D((u) => [
          P(e.$slots, l, He(Ze(u)))
        ])
      }))
    ]), 1032, ["classes", "resolveClasses", "caption", "headerRows", "columnWidth", "rows", "footerRows", "rowColumns", "idPrefix", "getRowValue", "getColumnTitle", "style", "onColumnSorted"])) : U("", !0)
  ], 2);
}
const v0 = /* @__PURE__ */ ce(yw, [["render", Aw]]), g0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  dom: ac,
  router: Om
}, Symbol.toStringTag, { value: "Module" }));
export {
  Yo as UluAccordion,
  Yw as UluAccordionGroup,
  $_ as UluAdaptiveLayout,
  i_ as UluAlert,
  q_ as UluAnimateNumber,
  Nm as UluBadge,
  a_ as UluBadgeStack,
  j_ as UluBreadcrumb,
  Pm as UluButton,
  l_ as UluButtonVerbose,
  u_ as UluCallout,
  c_ as UluCard,
  Xo as UluCollapsible,
  F_ as UluConditionalText,
  nv as UluConditionalWrapper,
  P_ as UluDataGrid,
  d_ as UluDefinitionList,
  Zw as UluDropdown,
  N_ as UluEmpty,
  z_ as UluEmptyView,
  f_ as UluExternalLink,
  Y_ as UluFacetsActiveFilters,
  J_ as UluFacetsFilterAccordions,
  Z_ as UluFacetsFilterLists,
  Q_ as UluFacetsFilterPopovers,
  e0 as UluFacetsFilterSelects,
  t0 as UluFacetsHeaderLayout,
  rs as UluFacetsList,
  n0 as UluFacetsResults,
  s0 as UluFacetsSearch,
  r0 as UluFacetsSidebarLayout,
  o0 as UluFacetsSort,
  g_ as UluFileDisplay,
  S_ as UluForm,
  C_ as UluFormActions,
  E_ as UluFormCheckbox,
  O_ as UluFormFieldset,
  b_ as UluFormFile,
  T_ as UluFormItem,
  A_ as UluFormItemsInline,
  y_ as UluFormMessage,
  k_ as UluFormRadio,
  rn as UluFormRequiredChar,
  x_ as UluFormSelect,
  w_ as UluFormText,
  M_ as UluFormTextarea,
  pe as UluIcon,
  m0 as UluImageSlideShow,
  h_ as UluList,
  m_ as UluMain,
  Ul as UluMenu,
  fm as UluMenuStack,
  kl as UluModal,
  R_ as UluNavStrip,
  e_ as UluOverflowPopover,
  B_ as UluPager,
  H_ as UluPlaceholderImage,
  D_ as UluPlaceholderText,
  K_ as UluProgressBar,
  G_ as UluProgressCircle,
  V_ as UluRouteAnnouncer,
  p_ as UluRule,
  W_ as UluSanityRichText,
  i0 as UluScrollAnchors,
  c0 as UluScrollAnchorsHeadlessSection,
  a0 as UluScrollAnchorsNav,
  l0 as UluScrollAnchorsNavAnimated,
  u0 as UluScrollAnchorsSection,
  __ as UluSearchForm,
  Hl as UluSelectableMenu,
  d0 as UluShowSkeleton,
  f0 as UluSkeletonContent,
  h0 as UluSkeletonMedia,
  rg as UluSkeletonText,
  U_ as UluSkipLink,
  wg as UluSlideShow,
  p0 as UluSlideShowSlide,
  v_ as UluSpokeSpinner,
  t_ as UluTab,
  n_ as UluTabGroup,
  s_ as UluTabList,
  r_ as UluTabPanel,
  o_ as UluTabPanels,
  v0 as UluTableSticky,
  Ig as UluTableStickyRows,
  qg as UluTableStickyTable,
  Bl as UluTag,
  I_ as UluTitleRail,
  L_ as UluWhenBreakpoint,
  Xw as breakpointsPlugin,
  Dw as corePlugin,
  Kw as modalsPlugin,
  qw as popoversPlugin,
  Gw as toastPlugin,
  Kh as useBreakpointManager,
  Qw as useDocumentTitle,
  X_ as useFacets,
  pc as useIcon,
  We as useModifiers,
  Jw as usePagination,
  gt as useRequiredInject,
  Dl as useScrollAnchorSection,
  Vl as useScrollAnchorSections,
  eg as useScrollAnchors,
  Vw as useTooltip,
  Ww as useTooltipFollow,
  Aa as useUluFloating,
  mm as useWindowResize,
  g0 as utils
};
