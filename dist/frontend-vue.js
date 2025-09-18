import { reactive as ut, inject as dt, ref as E, computed as _, watch as ye, toRef as Bn, createElementBlock as f, openBlock as u, normalizeStyle as D, unref as T, normalizeClass as m, createCommentVNode as y, createBlock as S, resolveDynamicComponent as P, normalizeProps as oe, mergeProps as K, Fragment as B, createTextVNode as $, toDisplayString as w, Teleport as ft, createVNode as A, resolveDirective as Fs, withDirectives as Be, createElementVNode as h, renderSlot as g, withKeys as Ls, nextTick as Vs, markRaw as be, watchEffect as ht, defineAsyncComponent as Rn, toRefs as En, toValue as nt, resolveComponent as W, withModifiers as jn, useSlots as Hs, renderList as R, TransitionGroup as Ns, withCtx as k, onMounted as mt, onBeforeUnmount as Ds, isRef as In, hasInjectionContext as Mn, getCurrentInstance as Pn, onDeactivated as zn, onActivated as Fn, onUnmounted as Ws, guardReactiveProps as re, h as Ln, vModelText as Vn, vShow as jt, createSlots as xe } from "vue";
import { useFloating as Hn, autoUpdate as Nn, inline as Dn, offset as Wn, flip as Xn, shift as Gn, arrow as qn } from "@floating-ui/vue";
import { normalizeClasses as is } from "@ulu/utils/templating.js";
import { preventScroll as Yn, wasClickOutside as Kn, isBrowser as Zn } from "@ulu/utils/browser/dom.js";
import { Resizer as Jn } from "@ulu/frontend/js/ui/resizer.js";
import { debounce as Wt } from "@ulu/utils/performance.js";
import { useRoute as Xs, useRouter as Qn, RouterLink as Xe } from "vue-router";
import { Tab as eo, TabGroup as to, TabList as so, TabPanel as no, TabPanels as oo } from "@headlessui/vue";
import { setPositionClasses as lo } from "@ulu/frontend/js/utils/dom.js";
import { randomInt as rt } from "@ulu/utils/random.js";
import { PortableText as ro } from "@portabletext/vue";
import io from "gsap";
import ao from "fuse.js";
import { runAfterFramePaint as Gs } from "@ulu/utils/browser/performance.js";
import { urlize as co } from "@ulu/utils/string.js";
import { arrayCreate as uo } from "@ulu/utils/array.js";
const as = {
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
function Xf(e, s = {}) {
  const t = ut({ ...as }), { iconsByType: n, ...o } = s || {};
  o && Object.assign(t, o);
  const l = {
    // Methods to interact with settings
    getSettings() {
      return t;
    },
    getDefaultSettings() {
      return { ...as };
    },
    updateSettings(r) {
      return Object.assign(t, r);
    },
    getSetting(r) {
      if (!t.hasOwnProperty(r)) {
        console.warn(`Attempted to access non-existent setting: ${r}`);
        return;
      }
      return t[r];
    },
    updateSetting(r, i) {
      if (typeof r != "string")
        throw new Error("Expected key to be string");
      t[r] = i;
    },
    getIcon(r) {
      const i = t.iconsByType;
      if (!i[r])
        throw new Error(`Icon type "${r}" not found!`);
      return i[r];
    },
    setIcon(r, i) {
      t.iconsByType[r] = i;
    }
  };
  if (n)
    for (const [r, i] of Object.entries(n))
      l.setIcon(r, i);
  e.provide("uluCore", l), e.config.globalProperties.$uluCore = l;
}
const fo = {
  uluCore: "Core",
  uluIsMobile: "Breakpoints",
  uluBreakpointActive: "Breakpoints",
  uluBreakpointDirection: "Breakpoints",
  uluBreakpointManager: "Breakpoints",
  uluModals: "Modals",
  uluToast: "Toast",
  uluPopoverOptions: "Popovers",
  uluTooltipState: "Popovers"
}, cs = {};
function _e(e) {
  const s = dt(e, cs);
  if (s === cs) {
    const t = fo[e] || "", n = t ? ` from the '${t}' plugin` : "", o = t ? "Please install missing plugin." : "";
    throw new Error(`Required inject: '${e}'${n} was not provided. ${o}`);
  }
  return s;
}
function qs(e, s, t) {
  const n = E(null), o = E([]), l = _(() => t.value?.placement), {
    floatingStyles: r,
    placement: i,
    middlewareData: c,
    update: a,
    isPositioned: d
  } = Hn(e, s, {
    placement: l,
    whileElementsMounted: Nn,
    middleware: o
  });
  ye(
    [t, n],
    ([b, C]) => {
      const O = [];
      b && (b.inline && O.push(Dn()), b.offset && O.push(Wn(b.offset)), O.push(Xn()), O.push(Gn()), b.arrow && C && O.push(qn({ element: C })), o.value = O);
    },
    { immediate: !0, deep: !0 }
  );
  const v = _(() => {
    const b = c.value?.arrow;
    return b ? {
      position: "absolute",
      left: b?.x != null ? `${b.x}px` : "",
      top: b?.y != null ? `${b.y}px` : ""
    } : null;
  });
  ye(t, (b) => {
    b && b.onReady && b.onReady({ update: a, isPositioned: d });
  });
  const p = _(() => t.value?.strategy === "fixed");
  return {
    floatingStyles: r,
    placement: i,
    middlewareData: c,
    update: a,
    isPositioned: d,
    arrowStyles: v,
    contentArrow: n,
    isFixedStrategy: p
  };
}
const ho = ["id", "data-placement"], mo = ["innerHTML"], go = {
  key: 1,
  class: "popover__inner"
}, vo = {
  __name: "UluTooltipPopover",
  props: {
    config: Object,
    trigger: {
      type: Object,
      default: null
    }
  },
  setup(e) {
    const s = e, t = E(null), n = _(() => s.config), {
      floatingStyles: o,
      placement: l,
      arrowStyles: r,
      contentArrow: i,
      isFixedStrategy: c
    } = qs(Bn(s, "trigger"), t, n);
    return (a, d) => (u(), f("span", {
      class: m(["popover popover--tooltip is-active", [
        {
          "popover--fixed": T(c)
        },
        n.value.class
      ]]),
      ref_key: "content",
      ref: t,
      id: T(Ys),
      "data-placement": T(l),
      style: D(T(o))
    }, [
      n.value.isHtml ? (u(), f("span", {
        key: 0,
        class: "popover__inner",
        innerHTML: n.value.content
      }, null, 8, mo)) : (u(), f("span", go, [
        n.value.component ? (u(), S(P(n.value.component), oe(K({ key: 0 }, n.value.componentProps)), null, 16)) : (u(), f(B, { key: 1 }, [
          $(w(n.value.content), 1)
        ], 64))
      ])),
      n.value.arrow ? (u(), f("span", {
        key: 2,
        class: "popover__arrow",
        ref_key: "contentArrow",
        ref: i,
        style: D(T(r))
      }, null, 4)) : y("", !0)
    ], 14, ho));
  }
}, po = {
  __name: "UluTooltipDisplay",
  setup(e) {
    const s = _e(pt);
    return (t, n) => T(s)?.state.visible ? (u(), S(ft, {
      key: 0,
      to: T(s).state.config.teleportTo || "body"
    }, [
      A(vo, {
        trigger: T(s).state.trigger,
        config: T(s).state.config
      }, null, 8, ["trigger", "config"])
    ], 8, ["to"])) : y("", !0);
  }
}, Ue = {
  /**
   * Default Plugin Options
   * @type {Object}
   */
  plugin: {
    /**
     * The directive name to use (default 'ulu-tooltip' = <el v-ulu-tooltip="'hello world'">)
     * @type {String}
     */
    directiveName: "ulu-tooltip",
    /**
     * The element that the tooltip should be rendered within
     * - Default bottom of the body (on top of everything)
     * - Doesn't need to be inline for accessibility since tooltips are just an enhancement
     *   content displayed within them should be hidden for assistive devices, 
     *   they are not visible to assistive devices
     * @type {String}
     */
    tooltipTeleportTo: "body"
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
function yo(e) {
  if (e) {
    if (e instanceof HTMLElement)
      return e;
    if (typeof e == "object" && "$el" in e)
      return e.$el;
  }
}
let bo = 0;
function Re(e = "ulu-id") {
  const s = `${e}-${++bo}`;
  return typeof document < "u" && document.getElementById(s) ? Re(e) : s;
}
const _o = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  newId: Re,
  refToElement: yo
}, Symbol.toStringTag, { value: "Module" })), wo = ["id", "disabled", "aria-expanded", "aria-controls", "aria-label"], So = ["aria-labelledby", "id", "data-placement"], ko = { class: "popover__inner" }, $o = {
  key: 0,
  class: "popover__footer"
}, gt = {
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
      default: ({ isOpen: e, content: s }) => {
        e && s.focus({ preventScroll: !0 });
      }
    }
  },
  emits: ["toggle"],
  setup(e, { emit: s }) {
    const t = s, n = e, o = Re(), l = Re(), r = _e(vt), i = r ? r.popover : Ue.popover, c = _(() => ({ ...i, ...n.config })), a = E(n.startOpen || !1), d = E(null), v = E(null), {
      floatingStyles: p,
      placement: b,
      update: C,
      arrowStyles: O,
      contentArrow: U,
      isFixedStrategy: q
    } = qs(d, v, c), Z = () => {
      z(!a.value);
    }, z = (ee) => {
      a.value = ee;
      const ue = {
        trigger: T(d),
        content: T(v),
        isOpen: T(a)
      }, Te = { isOpen: ue.isOpen };
      Vs(() => {
        a.value ? (C(), window.setTimeout(() => {
          ce(), n.directFocus(ue), t("toggle", Te);
        }, 0)) : (et(), n.directFocus(ue), t("toggle", Te));
      });
    };
    let J;
    const ce = () => {
      n.clickOutsideCloses && (J && et(), J = (ee) => {
        v.value && !v.value.contains(ee.target) && z(!1);
      }, document.addEventListener("click", J));
    }, et = () => {
      J && (document.removeEventListener("click", J), J = null);
    }, ne = () => z(!1);
    return (ee, ue) => {
      const Te = Fs("ulu-tooltip");
      return u(), f(B, null, [
        Be((u(), f("button", {
          type: "button",
          ref_key: "trigger",
          ref: d,
          onClick: Z,
          id: T(l),
          disabled: e.disabled,
          class: m([
            { [e.activeClass]: a.value },
            e.classes.trigger
          ]),
          "aria-expanded": a.value ? "true" : "false",
          "aria-controls": T(o),
          "aria-label": e.triggerAlt
        }, [
          g(ee.$slots, "trigger", {
            isOpen: a.value,
            close: ne
          }, () => [
            $(w(e.triggerText), 1)
          ])
        ], 10, wo)), [
          [Te, e.tooltip ? e.tooltip : null]
        ]),
        h("span", {
          class: m(["popover", [
            e.size ? `popover--${e.size}` : "",
            {
              "popover--no-padding": e.noPadding,
              "popover--fixed": T(q),
              "is-active": a.value
            },
            e.classes.content
          ]]),
          ref_key: "content",
          ref: v,
          "aria-labelledby": T(l),
          id: T(o),
          style: D(T(p)),
          "data-placement": T(b),
          onKeydown: ue[0] || (ue[0] = Ls((rs) => z(!1), ["esc"])),
          tabindex: "-1"
        }, [
          h("span", ko, [
            g(ee.$slots, "default", {
              isOpen: a.value,
              toggle: Z,
              close: ne
            })
          ]),
          ee.$slots.footer ? (u(), f("span", $o, [
            g(ee.$slots, "footer", { close: ne })
          ])) : y("", !0),
          c.value.arrow ? (u(), f("span", {
            key: 1,
            class: "popover__arrow",
            ref_key: "contentArrow",
            ref: U,
            style: D(T(O)),
            "data-ulu-popover-arrow": ""
          }, null, 4)) : y("", !0)
        ], 46, So)
      ], 64);
    };
  }
};
function Gf() {
  const e = _e(pt), s = _e(vt), t = { ...s.popover, ...s.tooltip };
  return {
    showTooltip: (o, l) => {
      const r = It(l, t);
      r && e.show(o, r);
    },
    hideTooltip: e.hide,
    tooltipState: e.state
  };
}
function qf(e) {
  const s = _e(pt), t = _e(vt);
  e.content || console.warn("Missing content for 'useTooltipFollow' tooltip", e);
  let n;
  const o = E(0), l = E(0), r = _(() => ({
    getBoundingClientRect() {
      return {
        width: 0,
        height: 0,
        x: o.value,
        y: l.value,
        top: l.value,
        left: o.value,
        right: o.value,
        bottom: l.value
      };
    }
  })), i = t ? t.popover : Ue.popover, c = t ? t.tooltip : Ue.tooltip, d = {
    ...{ ...i, ...c },
    content: e.content,
    inline: !1,
    // Following cursor is never inline
    onReady({ update: v }) {
      n = v;
    }
  };
  return {
    x: o,
    y: l,
    show() {
      s.show(r.value, d);
    },
    hide() {
      s.state.trigger === r.value && s.hide();
    },
    update(v) {
      o.value = v.x, l.value = v.y, n && n();
    }
  };
}
const vt = "uluPopoverOptions", pt = "uluTooltipState", Ys = "ulu-global-tooltip", It = (e, s) => {
  if (e === !1 || e === null) return null;
  let t = e;
  return (typeof t != "object" || Array.isArray(t)) && (t = { content: t }), t.component && (t.component = be(t.component)), { ...s, ...t };
};
function Yf(e, s = {}) {
  const t = {
    plugin: { ...Ue.plugin, ...s.plugin || {} },
    popover: { ...Ue.popover, ...s.popover || {} },
    tooltip: { ...Ue.tooltip, ...s.tooltip || {} }
  };
  e.provide(vt, t);
  const n = ut({
    visible: !1,
    trigger: null,
    config: {}
  }), o = (d, v) => {
    n.trigger && n.trigger !== d && n.trigger?.removeAttribute && n.trigger.removeAttribute("aria-describedby"), d?.setAttribute && d.setAttribute("aria-describedby", Ys), n.trigger = d, n.config = v, n.visible = !0;
  }, l = () => {
    n.trigger?.removeAttribute && n.trigger.removeAttribute("aria-describedby"), n.visible = !1;
  };
  e.provide(pt, {
    state: n,
    show: o,
    hide: l
  }), e.component("UluTooltipDisplay", po), e.component("UluPopover", gt);
  const r = /* @__PURE__ */ new WeakMap(), i = t.popover, c = t.tooltip, a = { ...i, ...c };
  e.directive(t.plugin.directiveName, {
    mounted(d, v) {
      const p = It(v.value, a);
      if (!p) return;
      let b = null;
      const C = () => {
        b || (b = setTimeout(() => {
          o(d, p);
        }, p.delay));
      }, O = () => {
        clearTimeout(b), b = null, l();
      }, { showEvents: U, hideEvents: q } = p;
      U.forEach((Z) => d.addEventListener(Z, C)), q.forEach((Z) => d.addEventListener(Z, O)), r.set(d, { show: C, hide: O, showEvents: U, hideEvents: q });
    },
    updated(d, v) {
      const p = r.get(d);
      p && (p.showEvents.forEach((z) => d.removeEventListener(z, p.show)), p.hideEvents.forEach((z) => d.removeEventListener(z, p.hide)));
      const b = It(v.value, a);
      if (!b) {
        n.trigger === d && l();
        return;
      }
      let C = null;
      const O = () => {
        C || (C = setTimeout(() => {
          o(d, b);
        }, b.delay));
      }, U = () => {
        clearTimeout(C), C = null, l();
      }, { showEvents: q, hideEvents: Z } = b;
      q.forEach((z) => d.addEventListener(z, O)), Z.forEach((z) => d.addEventListener(z, U)), r.set(d, { show: O, hide: U, showEvents: q, hideEvents: Z }), n.visible && n.trigger === d && o(d, b);
    },
    beforeUnmount(d) {
      n.visible && n.trigger === d && l();
      const v = r.get(d);
      v && (v.showEvents.forEach((p) => d.removeEventListener(p, v.show)), v.hideEvents.forEach((p) => d.removeEventListener(p, v.hide)), r.delete(d));
    }
  });
}
const j = (e, s) => {
  const t = e.__vccOpts || e;
  for (const [n, o] of s)
    t[n] = o;
  return t;
}, Co = {
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
function To(e, s, t, n, o, l) {
  return l.currentModal ? (u(), S(P(l.currentModal.component), K({ key: 0 }, l.currentProps, {
    modelValue: o.open,
    "onUpdate:modelValue": s[0] || (s[0] = (r) => o.open = r),
    onVnodeMounted: l.modalMounted,
    onVnodeUnmounted: l.modalUnmounted
  }), null, 16, ["modelValue", "onVnodeMounted", "onVnodeUnmounted"])) : y("", !0);
}
const Ao = /* @__PURE__ */ j(Co, [["render", To]]);
function Oo() {
  return { getIconProps: (t) => t ? typeof t == "object" && !Array.isArray(t) ? t : { icon: t } : null, getClassesFromDefinition: (t) => {
    if (!t)
      return null;
    if (typeof t == "string")
      return t;
    if (Array.isArray(t))
      return t.length >= 2 ? `${t[0]} fa-${t[1]}` : t.join(" ");
    if (typeof t == "object" && t.icon) {
      if (typeof t.icon == "string")
        return t.icon;
      if (Array.isArray(t.icon))
        return t.icon.length >= 2 ? `${t.icon[0]} fa-${t.icon[1]}` : t.icon.join(" ");
    }
    return console.warn("useIcon: Unable to parse definition for static FontAwesome classes:", t), null;
  } };
}
const N = {
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
    const s = dt("uluCore"), t = E(null), { getIconProps: n, getClassesFromDefinition: o } = Oo();
    let l;
    const r = e, i = _(() => s.getSetting("fontAwesomeStatic")), c = _(() => s.getSetting("iconComponent")), a = _(() => s.getSetting("iconPropResolver")), d = _(() => {
      const { icon: O } = r;
      if (typeof O == "string" && O.startsWith("type:"))
        try {
          const U = O.substring(5);
          return s.getIcon(U);
        } catch (U) {
          return console.warn(U), null;
        }
      return O;
    }), v = _(() => !c.value || !d.value ? null : a.value(d.value)), p = _(() => n(d.value)), b = _(() => o(d.value)), C = _(() => ({
      "flow-inline": r.spaced
    }));
    return ht(async () => {
      if (!i.value && d.value) {
        if (t.value === null)
          if (l)
            t.value = be(l.FontAwesomeIcon);
          else {
            const O = Rn(async () => {
              const U = await import("@fortawesome/vue-fontawesome");
              return l = U, U.FontAwesomeIcon;
            });
            t.value = be(O);
          }
      } else
        t.value = null;
    }), (O, U) => c.value ? (u(), S(P(c.value), K({ key: 0 }, v.value, { class: C.value }), null, 16, ["class"])) : !i.value && t.value && d.value ? (u(), S(P(t.value), K({ key: 1 }, p.value, { class: C.value }), null, 16, ["class"])) : i.value && d.value ? (u(), f("span", {
      key: 2,
      class: m([b.value, C.value]),
      "aria-hidden": "true"
    }, null, 2)) : y("", !0);
  }
};
function ie({ props: e, baseClass: s, internal: t = {} }) {
  const { modifiers: n } = En(e);
  return { resolvedModifiers: _(() => {
    const l = nt(s), r = is(nt(n)), i = is(nt(t));
    if (!l)
      return console.warn("useModifiers: Missing 'baseClass' argument, modifiers will not be applied."), "";
    const c = /* @__PURE__ */ new Set([...i, ...r]);
    return Array.from(c).map((a) => `${l}--${a}`);
  }) };
}
let Ct = 0;
const xo = {
  name: "UluModal",
  components: {
    UluIcon: N
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
    return ++Ct, {
      containerWidth: null,
      titleId: `ulu-modal-${Ct}-title`,
      bodyOverflowValue: null,
      bodyPaddingRightValue: null,
      isResizing: !1
    };
  },
  setup(e) {
    const s = Hs(), t = _(() => e.title || s.title), n = _(() => {
      const { allowResize: i, position: c } = e;
      if (!i || !c) return;
      const a = ["left", "right", "center"];
      return a.includes(c) ? !0 : (console.warn(`Passed invalid position for resize (${c}), use ${a.join(", ")}`), !1);
    }), o = _(() => e.position === "center" ? "type:resizeBoth" : "type:resizeHorizontal"), l = _(() => ({
      [e.position]: e.position,
      resize: e.allowResize,
      "no-resize": !e.allowResize,
      "no-header": !t.value,
      "body-fills": e.bodyFills,
      "no-backdrop": e.noBackdrop,
      "no-min-height": e.noMinHeight,
      "non-modal": e.nonModal,
      "resizer-active": n.value
    })), { resolvedModifiers: r } = ie({
      props: e,
      baseClass: "modal",
      internal: l
    });
    return {
      resolvedModifiers: r,
      hasHeader: t,
      resizerEnabled: n,
      resizerIconType: o
    };
  },
  computed: {
    resolvedLabelledby() {
      const { labelledby: e, titleId: s } = this;
      return e || s;
    }
  },
  watch: {
    modelValue: {
      // So that it runs on mount (if modelValue is initially true)
      immediate: !0,
      handler(e) {
        this.$nextTick(() => {
          const { container: s } = this.$refs;
          e ? (s[this.nonModal ? "show" : "showModal"](), this.$emit("open")) : s.close();
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
    position(e, s) {
      e !== s && (this.destroyResizer(), this.$nextTick(() => {
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
        const { target: s } = e, { container: t } = this.$refs;
        s === t && Kn(t, e) && this.close();
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
        const { preventScrollShift: s } = this;
        e.newState === "open" ? this.restoreScroll = Yn({ preventShift: s }) : this.destroyPreventScroll();
      }
    },
    setupResizer() {
      const { position: e, resizerEnabled: s } = this;
      if (s) {
        const { container: t, resizer: n } = this.$refs, o = e === "center" ? { fromX: "right", fromY: "bottom", multiplier: 2 } : { fromX: e === "right" ? "left" : "right" };
        this.resizerInstance = new Jn(t, n, o), this.handleResizerStart = () => {
          this.isResizing = !0;
        }, this.handleResizerEnd = () => {
          setTimeout(() => {
            this.isResizing = !1;
          }, 0);
        }, t.addEventListener("ulu:resizer:start", this.handleResizerStart), t.addEventListener("ulu:resizer:end", this.handleResizerEnd);
      }
    },
    destroyResizer() {
      const { container: e } = this.$refs;
      this.resizerInstance && (this.resizerInstance.destroy(), this.resizerInstance = null), this.handleResizerStart && e.removeEventListener("ulu:resizer:start", this.handleResizerStart), this.handleResizerEnd && e.removeEventListener("ulu:resizer:end", this.handleResizerEnd);
    }
  },
  mounted() {
    ++Ct, this.preventScroll && this.setupPreventScroll(), this.setupResizer();
  },
  beforeUnmount() {
    const { container: e } = this.$refs;
    e && e.open && e.close(), this.destroyPreventScroll(), this.destroyResizer();
  }
}, Uo = ["aria-labelledby", "aria-describedby"], Bo = ["id"], Ro = { class: "modal__title-text" }, Eo = {
  key: 2,
  class: "modal__resizer",
  ref: "resizer",
  type: "button"
};
function jo(e, s, t, n, o, l) {
  const r = W("UluIcon");
  return u(), S(ft, {
    to: t.teleport === !1 ? null : t.teleport,
    disabled: t.teleport === !1
  }, [
    h("dialog", {
      class: m(["modal", [n.resolvedModifiers, t.classes.container]]),
      "aria-labelledby": l.resolvedLabelledby,
      "aria-describedby": t.describedby,
      ref: "container",
      style: D({ width: o.containerWidth }),
      onCancel: s[1] || (s[1] = jn((...i) => l.close && l.close(...i), ["prevent"])),
      onClose: s[2] || (s[2] = (...i) => l.handleDialogCloseEvent && l.handleDialogCloseEvent(...i)),
      onClick: s[3] || (s[3] = (...i) => l.handleClick && l.handleClick(...i)),
      onToggle: s[4] || (s[4] = (...i) => l.handleToggle && l.handleToggle(...i))
    }, [
      n.hasHeader ? (u(), f("header", {
        key: 0,
        class: m(["modal__header", t.classes.header])
      }, [
        h("h2", {
          class: m(["modal__title", t.classes.title]),
          id: o.titleId
        }, [
          g(e.$slots, "title", { close: l.close }, () => [
            t.titleIcon ? (u(), S(r, {
              key: 0,
              class: "modal__title-icon",
              icon: t.titleIcon
            }, null, 8, ["icon"])) : y("", !0),
            h("span", Ro, w(t.title), 1)
          ])
        ], 10, Bo),
        h("button", {
          class: "modal__close",
          "aria-label": "Close modal",
          onClick: s[0] || (s[0] = (...i) => l.close && l.close(...i)),
          autofocus: ""
        }, [
          g(e.$slots, "closeIcon", {}, () => [
            A(r, {
              class: "modal__close-icon",
              icon: t.closeIcon || "type:close"
            }, null, 8, ["icon"])
          ])
        ])
      ], 2)) : y("", !0),
      h("div", {
        class: m(["modal__body", t.classes.body])
      }, [
        g(e.$slots, "default", { close: l.close })
      ], 2),
      e.$slots.footer ? (u(), f("div", {
        key: 1,
        class: m(["site-modal__footer", t.classes.footer])
      }, [
        g(e.$slots, "footer", { close: l.close })
      ], 2)) : y("", !0),
      n.resizerEnabled ? (u(), f("button", Eo, [
        g(e.$slots, "resizerIcon", {}, () => [
          A(r, {
            class: "modal__resizer-icon",
            icon: t.resizerIcon || n.resizerIconType
          }, null, 8, ["icon"])
        ])
      ], 512)) : y("", !0)
    ], 46, Uo)
  ], 8, ["to", "disabled"]);
}
const Ks = /* @__PURE__ */ j(xo, [["render", jo]]), He = [], Io = E({
  /**
   * Holds active component options (including component, and options)
   */
  active: null,
  /**
   * Populated with any props passed to open method, bound to modal component
   */
  activeProps: null
}), Ne = Io.value, us = {
  data: Ne,
  modals: He
}, Mo = (e) => ({
  open(s, t = null) {
    const n = this.get(s);
    Ne.active = be(n), Ne.activeProps = Object.assign({}, n.props, t);
  },
  /**
   * Close the active modal
   * @param {String|Node} focusTo The element or selector for an element to programmatically focus after modal close
   * @see https://www.deque.com/blog/accessible-routing-in-javascript-frameworks/
   */
  close() {
    Ne.active = null, Ne.activeProps = null;
  },
  /**
   * Get a modal's config object by name
   * @return {Object} Modal config object
   */
  get(s) {
    const t = He.find((n) => n.name === s);
    if (t)
      return t;
    throw new Error(`Unable to find modal named: ${s}`);
  },
  /**
   * Add a modal config
   */
  add(s) {
    const t = e(s);
    He.push(t);
  },
  /**
   * Removes a modal config by name
   * @return {Object} Modal that was removed
   */
  remove(s) {
    const t = He.findIndex((n) => n.name === s);
    if (t > -1)
      return He.splice(t, 1);
    warn("unable to find modal to remove");
  }
}), Po = {
  modals: [],
  modalOptions: {}
};
function Kf(e, s) {
  const t = Object.assign({}, Po, s), o = Mo((l) => Object.assign({}, t.modalOptions, l));
  e.component("UluModalsDisplay", Ao), e.component("UluModal", Ks), t.modals.forEach((l) => {
    o.add(l);
  }), us.options = t, e.config.globalProperties.$uluModals = o, e.provide("uluModals", o), e.config.globalProperties.$uluModalsState = us;
}
const zo = {
  name: "UluToast",
  components: {
    UluIcon: N
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
    handleAction(e, s) {
      const { toast: t } = this;
      this.toast.close(), this.$nextTick(() => {
        s(e, t, s);
      });
    }
  }
}, Fo = ["onClick"];
function Lo(e, s, t, n, o, l) {
  const r = W("UluIcon");
  return u(), f("div", {
    class: m(["toast", [
      {
        "toast--persistent": !t.toast.duration
      },
      t.toast?.class
    ]])
  }, [
    t.toast.icon || e.$slots.icon ? (u(), f("div", {
      key: 0,
      class: m(["toast__icon", t.classes.icon])
    }, [
      g(e.$slots, "icon", { toast: t.toast }, () => [
        t.toast.icon ? (u(), S(r, {
          key: 0,
          icon: t.toast.icon
        }, null, 8, ["icon"])) : y("", !0)
      ])
    ], 2)) : y("", !0),
    h("div", {
      class: m(["toast__content", t.classes.content])
    }, [
      g(e.$slots, "content", { toast: t.toast }, () => [
        t.toast.title ? (u(), f("div", {
          key: 0,
          class: m(["toast__header", t.classes.header])
        }, [
          h("strong", {
            class: m(["toast__title", t.classes.title])
          }, w(t.toast.title), 3),
          t.toast.date ? (u(), f("span", {
            key: 0,
            class: m(["toast__date", t.classes.date])
          }, w(t.toast.date), 3)) : y("", !0)
        ], 2)) : y("", !0),
        t.toast.description ? (u(), f("div", {
          key: 1,
          class: m(["toast__body", t.classes.body])
        }, w(t.toast.description), 3)) : y("", !0)
      ])
    ], 2),
    t.toast.actions?.length ? (u(), f("div", {
      key: 1,
      class: m(["toast__actions", t.classes.actions])
    }, [
      (u(!0), f(B, null, R(t.toast.actions, (i, c) => (u(), f("button", {
        key: c,
        class: m(["toast__action", t.classes.action]),
        onClick: (a) => l.handleAction(a, i)
      }, w(i.label), 11, Fo))), 128))
    ], 2)) : y("", !0),
    h("button", {
      class: m(["toast__close", t.classes.closeButton]),
      onClick: s[0] || (s[0] = (...i) => t.toast.close && t.toast.close(...i))
    }, [
      A(r, { icon: "type:close" })
    ], 2)
  ], 2);
}
const Zs = /* @__PURE__ */ j(zo, [["render", Lo]]), ds = {
  toastOptions: {
    /**
     * Component used to render the toast in the display
     */
    component: be(Zs),
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
}, { assign: Tt } = Object;
let Vo = 0;
const ge = ut({
  toasts: [],
  /**
   * Saveable 
   */
  pluginOptions: ds.pluginOptions,
  toastOptions: ds.toastOptions,
  setToastOptions(e) {
    return this.toastOptions = Tt({}, this.toastOptions, e), this.pluginOptions;
  },
  setPluginOptions(e) {
    return this.pluginOptions = Tt({}, this.pluginOptions, e), this.pluginOptions;
  },
  createToast(e) {
    const s = `toast-${++Vo}`;
    return Tt({}, this.toastOptions, e, {
      uid: s,
      close() {
        Mt.remove(s);
      }
    });
  }
}), Mt = {
  /**
   * 
   * @param {Object} options Toast options
   * @returns Toast object (to be used to remove)
   */
  add(e) {
    const s = ge.createToast(e);
    return ge.toasts.unshift(s), s.duration && setTimeout(() => {
      this.remove(s.uid);
    }, s.duration), s;
  },
  /**
   * 
   * @param {Object} toast Toast uid
   */
  remove(e) {
    const s = ge.toasts.findIndex((t) => t.uid === e);
    s > -1 && ge.toasts.splice(s, 1);
  },
  /**
   * Remove all toasts
   */
  removeAll() {
    ge.toasts = [];
  }
}, Ho = {
  name: "UluTooltipDisplay",
  data() {
    const { toasts: e, pluginOptions: s } = ge;
    return { toasts: e, pluginOptions: s };
  },
  computed: {
    classes() {
      const { position: e } = this.pluginOptions;
      return e.map((t) => `toast-container--${t}`);
    }
  }
};
function No(e, s, t, n, o, l) {
  return u(), S(ft, {
    to: o.pluginOptions.teleportTo
  }, [
    A(Ns, {
      class: m(["toast-container", l.classes]),
      name: "toast-animation",
      tag: "div"
    }, {
      default: k(() => [
        (u(!0), f(B, null, R(o.toasts, (r) => (u(), S(P(r.component), {
          key: r.uid,
          toast: r
        }, null, 8, ["toast"]))), 128))
      ]),
      _: 1
    }, 8, ["class"])
  ], 8, ["to"]);
}
const Do = /* @__PURE__ */ j(Ho, [["render", No]]);
function Zf(e, s = {}) {
  ge.setPluginOptions(s?.plugin), ge.setToastOptions(s?.toast), e.component("UluToast", Zs), e.component("UluToastDisplay", Do), e.config.globalProperties.$uluToast = Mt, e.provide("uluToast", Mt);
}
const Wo = {
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
function Xo(e) {
  const s = Object.assign({}, Wo, e), t = E(null), n = E(s.initialValue), o = E(null);
  return (async () => {
    if (!Zn()) return;
    await new Promise((d) => {
      document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", () => d()) : d();
    });
    const r = await import("@ulu/frontend/js/ui/breakpoints.js"), { BreakpointManager: i } = r, c = be(new i(s.plugin));
    t.value = be(c);
    const a = () => {
      n.value = c.active, o.value = c.resizeDirection;
    };
    a(), s.onReady && s.onReady(c), c.onChange(a);
  })(), { breakpointManager: t, breakpointActive: n, breakpointDirection: o };
}
const Go = {
  /**
   * Breakpoint for mobile down/max
   */
  breakpointMobile: "small",
  /**
   * Options to pass to useBreakpointManager()
   */
  managerOptions: {}
};
function Jf(e, s) {
  const t = E(!1), n = Object.assign({}, Go, s), { breakpointMobile: o } = n, { onReady: l } = n.managerOptions, r = {
    onReady(v) {
      v.at(o).max({
        on() {
          t.value = !0;
        },
        off() {
          t.value = !1;
        }
      }), l && l(v);
    }
  }, i = Object.assign({}, n.managerOptions, r), {
    breakpointManager: c,
    breakpointActive: a,
    breakpointDirection: d
  } = Xo(i);
  e.provide("uluBreakpointActive", _(() => a.value)), e.provide("uluBreakpointDirection", _(() => d.value)), e.provide("uluBreakpointManager", _(() => c.value)), e.provide("uluIsMobile", _(() => t.value));
}
const Pt = /* @__PURE__ */ new Set(), Y = /* @__PURE__ */ new WeakMap(), we = /* @__PURE__ */ new WeakMap(), se = /* @__PURE__ */ new WeakMap(), Ge = /* @__PURE__ */ new WeakMap(), At = /* @__PURE__ */ new WeakMap(), De = /* @__PURE__ */ new WeakMap(), pe = /* @__PURE__ */ new WeakMap(), ve = /* @__PURE__ */ new WeakMap(), Oe = /* @__PURE__ */ new WeakSet();
let Q, Xt = 0, Gt = 0;
const he = "__aa_tgt", qe = "__aa_del", it = "__aa_new", Js = (e) => {
  const s = Zo(e);
  s && s.forEach((t) => Jo(t));
}, qo = (e) => {
  e.forEach((s) => {
    s.target === Q && Yo(), Y.has(s.target) && ke(s.target);
  });
};
function Qs(e) {
  const s = e.getBoundingClientRect(), t = Q?.clientWidth || 0, n = Q?.clientHeight || 0;
  return s.bottom < 0 || s.top > n || s.right < 0 || s.left > t;
}
function qt(e) {
  const s = Ge.get(e);
  s?.disconnect();
  let t = Y.get(e), n = 0;
  const o = 5;
  t || (t = Ee(e), Y.set(e, t));
  const { offsetWidth: l, offsetHeight: r } = Q, c = [
    t.top - o,
    l - (t.left + o + t.width),
    r - (t.top + o + t.height),
    t.left - o
  ].map((d) => `${-1 * Math.floor(d)}px`).join(" "), a = new IntersectionObserver(() => {
    ++n > 1 && ke(e);
  }, {
    root: Q,
    threshold: 1,
    rootMargin: c
  });
  a.observe(e), Ge.set(e, a);
}
function ke(e, s = !0) {
  clearTimeout(ve.get(e));
  const t = yt(e), n = s ? Ye(t) ? 500 : t.duration : 0;
  ve.set(e, setTimeout(async () => {
    const o = se.get(e);
    try {
      await o?.finished, Y.set(e, Ee(e)), qt(e);
    } catch {
    }
  }, n));
}
function Yo() {
  clearTimeout(ve.get(Q)), ve.set(Q, setTimeout(() => {
    Pt.forEach((e) => ot(e, (s) => en(() => ke(s))));
  }, 100));
}
function Ko(e) {
  setTimeout(() => {
    De.set(e, setInterval(() => en(ke.bind(null, e)), 2e3));
  }, Math.round(2e3 * Math.random()));
}
function en(e) {
  typeof requestIdleCallback == "function" ? requestIdleCallback(() => e()) : requestAnimationFrame(() => e());
}
let de;
const tn = typeof window < "u" && "ResizeObserver" in window;
tn && (Q = document.documentElement, new MutationObserver(Js), de = new ResizeObserver(qo), window.addEventListener("scroll", () => {
  Gt = window.scrollY, Xt = window.scrollX;
}), de.observe(Q));
function Zo(e) {
  return e.reduce((n, o) => [
    ...n,
    ...Array.from(o.addedNodes),
    ...Array.from(o.removedNodes)
  ], []).every((n) => n.nodeName === "#comment") ? !1 : e.reduce((n, o) => {
    if (n === !1)
      return !1;
    if (o.target instanceof Element) {
      if (Ot(o.target), !n.has(o.target)) {
        n.add(o.target);
        for (let l = 0; l < o.target.children.length; l++) {
          const r = o.target.children.item(l);
          if (r) {
            if (qe in r)
              return !1;
            Ot(o.target, r), n.add(r);
          }
        }
      }
      if (o.removedNodes.length)
        for (let l = 0; l < o.removedNodes.length; l++) {
          const r = o.removedNodes[l];
          if (qe in r)
            return !1;
          r instanceof Element && (n.add(r), Ot(o.target, r), we.set(r, [
            o.previousSibling,
            o.nextSibling
          ]));
        }
    }
    return n;
  }, /* @__PURE__ */ new Set());
}
function Ot(e, s) {
  !s && !(he in e) ? Object.defineProperty(e, he, { value: e }) : s && !(he in s) && Object.defineProperty(s, he, { value: e });
}
function Jo(e) {
  var s, t;
  const n = e.isConnected, o = Y.has(e);
  n && we.has(e) && we.delete(e), ((s = se.get(e)) === null || s === void 0 ? void 0 : s.playState) !== "finished" && ((t = se.get(e)) === null || t === void 0 || t.cancel()), it in e ? fs(e) : o && n ? el(e) : o && !n ? tl(e) : fs(e);
}
function le(e) {
  return Number(e.replace(/[^0-9.\-]/g, ""));
}
function Qo(e) {
  let s = e.parentElement;
  for (; s; ) {
    if (s.scrollLeft || s.scrollTop)
      return { x: s.scrollLeft, y: s.scrollTop };
    s = s.parentElement;
  }
  return { x: 0, y: 0 };
}
function Ee(e) {
  const s = e.getBoundingClientRect(), { x: t, y: n } = Qo(e);
  return {
    top: s.top + n,
    left: s.left + t,
    width: s.width,
    height: s.height
  };
}
function sn(e, s, t) {
  let n = s.width, o = s.height, l = t.width, r = t.height;
  const i = getComputedStyle(e);
  if (i.getPropertyValue("box-sizing") === "content-box") {
    const a = le(i.paddingTop) + le(i.paddingBottom) + le(i.borderTopWidth) + le(i.borderBottomWidth), d = le(i.paddingLeft) + le(i.paddingRight) + le(i.borderRightWidth) + le(i.borderLeftWidth);
    n -= d, l -= d, o -= a, r -= a;
  }
  return [n, l, o, r].map(Math.round);
}
function yt(e) {
  return he in e && pe.has(e[he]) ? pe.get(e[he]) : { duration: 250, easing: "ease-in-out" };
}
function nn(e) {
  if (he in e)
    return e[he];
}
function Yt(e) {
  const s = nn(e);
  return s ? Oe.has(s) : !1;
}
function ot(e, ...s) {
  s.forEach((t) => t(e, pe.has(e)));
  for (let t = 0; t < e.children.length; t++) {
    const n = e.children.item(t);
    n && s.forEach((o) => o(n, pe.has(n)));
  }
}
function Kt(e) {
  return Array.isArray(e) ? e : [e];
}
function Ye(e) {
  return typeof e == "function";
}
function el(e) {
  const s = Y.get(e), t = Ee(e);
  if (!Yt(e))
    return Y.set(e, t);
  if (Qs(e)) {
    Y.set(e, t), qt(e);
    return;
  }
  let n;
  if (!s)
    return;
  const o = yt(e);
  if (typeof o != "function") {
    let l = s.left - t.left, r = s.top - t.top;
    const i = s.left + s.width - (t.left + t.width);
    s.top + s.height - (t.top + t.height) == 0 && (r = 0), i == 0 && (l = 0);
    const [a, d, v, p] = sn(e, s, t), b = {
      transform: `translate(${l}px, ${r}px)`
    }, C = {
      transform: "translate(0, 0)"
    };
    a !== d && (b.width = `${a}px`, C.width = `${d}px`), v !== p && (b.height = `${v}px`, C.height = `${p}px`), n = e.animate([b, C], {
      duration: o.duration,
      easing: o.easing
    });
  } else {
    const [l] = Kt(o(e, "remain", s, t));
    n = new Animation(l), n.play();
  }
  se.set(e, n), Y.set(e, t), n.addEventListener("finish", ke.bind(null, e, !1), {
    once: !0
  });
}
function fs(e) {
  it in e && delete e[it];
  const s = Ee(e);
  Y.set(e, s);
  const t = yt(e);
  if (!Yt(e))
    return;
  if (Qs(e)) {
    qt(e);
    return;
  }
  let n;
  if (typeof t != "function")
    n = e.animate([
      { transform: "scale(.98)", opacity: 0 },
      { transform: "scale(0.98)", opacity: 0, offset: 0.5 },
      { transform: "scale(1)", opacity: 1 }
    ], {
      duration: t.duration * 1.5,
      easing: "ease-in"
    });
  else {
    const [o] = Kt(t(e, "add", s));
    n = new Animation(o), n.play();
  }
  se.set(e, n), n.addEventListener("finish", ke.bind(null, e, !1), {
    once: !0
  });
}
function hs(e, s) {
  var t;
  e.remove(), Y.delete(e), we.delete(e), se.delete(e), (t = Ge.get(e)) === null || t === void 0 || t.disconnect(), setTimeout(() => {
    if (qe in e && delete e[qe], Object.defineProperty(e, it, { value: !0, configurable: !0 }), s && e instanceof HTMLElement)
      for (const n in s)
        e.style[n] = "";
  }, 0);
}
function tl(e) {
  var s;
  if (!we.has(e) || !Y.has(e))
    return;
  const [t, n] = we.get(e);
  Object.defineProperty(e, qe, { value: !0, configurable: !0 });
  const o = window.scrollX, l = window.scrollY;
  if (n && n.parentNode && n.parentNode instanceof Element ? n.parentNode.insertBefore(e, n) : t && t.parentNode ? t.parentNode.appendChild(e) : (s = nn(e)) === null || s === void 0 || s.appendChild(e), !Yt(e))
    return hs(e);
  const [r, i, c, a] = nl(e), d = yt(e), v = Y.get(e);
  (o !== Xt || l !== Gt) && sl(e, o, l, d);
  let p, b = {
    position: "absolute",
    top: `${r}px`,
    left: `${i}px`,
    width: `${c}px`,
    height: `${a}px`,
    margin: "0",
    pointerEvents: "none",
    transformOrigin: "center",
    zIndex: "100"
  };
  if (!Ye(d))
    Object.assign(e.style, b), p = e.animate([
      {
        transform: "scale(1)",
        opacity: 1
      },
      {
        transform: "scale(.98)",
        opacity: 0
      }
    ], {
      duration: d.duration,
      easing: "ease-out"
    });
  else {
    const [C, O] = Kt(d(e, "remove", v));
    O?.styleReset !== !1 && (b = O?.styleReset || b, Object.assign(e.style, b)), p = new Animation(C), p.play();
  }
  se.set(e, p), p.addEventListener("finish", () => hs(e, b), {
    once: !0
  });
}
function sl(e, s, t, n) {
  const o = Xt - s, l = Gt - t, r = document.documentElement.style.scrollBehavior;
  if (getComputedStyle(Q).scrollBehavior === "smooth" && (document.documentElement.style.scrollBehavior = "auto"), window.scrollTo(window.scrollX + o, window.scrollY + l), !e.parentElement)
    return;
  const c = e.parentElement;
  let a = c.clientHeight, d = c.clientWidth;
  const v = performance.now();
  function p() {
    requestAnimationFrame(() => {
      if (!Ye(n)) {
        const b = a - c.clientHeight, C = d - c.clientWidth;
        v + n.duration > performance.now() ? (window.scrollTo({
          left: window.scrollX - C,
          top: window.scrollY - b
        }), a = c.clientHeight, d = c.clientWidth, p()) : document.documentElement.style.scrollBehavior = r;
      }
    });
  }
  p();
}
function nl(e) {
  var s;
  const t = Y.get(e), [n, , o] = sn(e, t, Ee(e));
  let l = e.parentElement;
  for (; l && (getComputedStyle(l).position === "static" || l instanceof HTMLBodyElement); )
    l = l.parentElement;
  l || (l = document.body);
  const r = getComputedStyle(l), i = !se.has(e) || ((s = se.get(e)) === null || s === void 0 ? void 0 : s.playState) === "finished" ? Ee(l) : Y.get(l), c = Math.round(t.top - i.top) - le(r.borderTopWidth), a = Math.round(t.left - i.left) - le(r.borderLeftWidth);
  return [c, a, n, o];
}
function ol(e, s = {}) {
  if (tn && de && !(window.matchMedia("(prefers-reduced-motion: reduce)").matches && !Ye(s) && !s.disrespectUserMotionPreference)) {
    Oe.add(e), getComputedStyle(e).position === "static" && Object.assign(e.style, { position: "relative" }), ot(e, ke, Ko, (r) => de?.observe(r)), Ye(s) ? pe.set(e, s) : pe.set(e, {
      duration: 250,
      easing: "ease-in-out",
      ...s
    });
    const l = new MutationObserver(Js);
    l.observe(e, { childList: !0 }), At.set(e, l), Pt.add(e);
  }
  return Object.freeze({
    parent: e,
    enable: () => {
      Oe.add(e);
    },
    disable: () => {
      Oe.delete(e), ot(e, (n) => {
        const o = se.get(n);
        try {
          o?.cancel();
        } catch {
        }
        se.delete(n);
        const l = ve.get(n);
        l && clearTimeout(l), ve.delete(n);
        const r = De.get(n);
        r && clearInterval(r), De.delete(n);
      });
    },
    isEnabled: () => Oe.has(e),
    destroy: () => {
      Oe.delete(e), Pt.delete(e), pe.delete(e);
      const n = At.get(e);
      n?.disconnect(), At.delete(e), ot(e, (o) => {
        de?.unobserve(o);
        const l = se.get(o);
        try {
          l?.cancel();
        } catch {
        }
        se.delete(o);
        const r = Ge.get(o);
        r?.disconnect(), Ge.delete(o);
        const i = De.get(o);
        i && clearInterval(i), De.delete(o);
        const c = ve.get(o);
        c && clearTimeout(c), ve.delete(o), Y.delete(o), we.delete(o);
      });
    }
  });
}
function ll(e) {
  const s = E();
  let t;
  function n(o) {
    t && (o ? t.enable() : t.disable());
  }
  return mt(() => {
    ht((o) => {
      let l;
      s.value instanceof HTMLElement ? l = s.value : s.value && "$el" in s.value && s.value.$el instanceof HTMLElement && (l = s.value.$el), l && (t = ol(l, e || {}), o(() => {
        var r;
        (r = t?.destroy) === null || r === void 0 || r.call(t), t = void 0;
      }));
    });
  }), Ds(() => {
    var o;
    (o = t?.destroy) === null || o === void 0 || o.call(t), t = void 0;
  }), [s, n];
}
const rl = ["id", "aria-controls", "aria-expanded"], il = ["id", "aria-hidden", "aria-labelledby"], zt = {
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
  setup(e, { emit: s }) {
    const t = e, n = s, o = _(() => typeof t.animate == "object" ? t.animate : {}), [l, r] = ll(o);
    mt(() => {
      r(!!t.animate);
    }), ye(() => t.animate, (C) => {
      r(!!C);
    });
    const i = _(() => t.modelValue !== void 0), c = E(t.startOpen), a = _({
      get() {
        return i.value ? t.modelValue : c.value;
      },
      set(C) {
        i.value ? n("update:modelValue", C) : c.value = C;
      }
    }), d = E(Re("ulu-collapsible-trigger")), v = E(Re("ulu-collapsible-content"));
    function p() {
      a.value = !a.value;
    }
    function b() {
      t.closeOnEscape && a.value && (a.value = !1);
    }
    return (C, O) => (u(), f("div", {
      ref_key: "container",
      ref: l,
      onKeydown: Ls(b, ["esc"]),
      class: m([e.classes.container, a.value ? e.classes.containerOpen : e.classes.containerClosed])
    }, [
      h("button", {
        class: m(e.classes.trigger),
        id: d.value,
        "aria-controls": v.value,
        "aria-expanded": a.value,
        onClick: p
      }, [
        g(C.$slots, "trigger", { isOpen: a.value }, () => [
          $(w(e.triggerText), 1)
        ])
      ], 10, rl),
      a.value ? (u(), f("div", {
        key: 0,
        class: m(e.classes.content),
        tabindex: "-1",
        id: v.value,
        "aria-hidden": !a.value,
        "aria-labelledby": d.value
      }, [
        g(C.$slots, "default", {
          isOpen: a.value,
          toggle: p
        })
      ], 10, il)) : y("", !0)
    ], 34));
  }
}, ms = {
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
  setup(e, { emit: s }) {
    const t = e, { resolvedModifiers: n } = ie({ props: t, baseClass: "accordion" }), o = _(() => {
      const l = { ...t.classes };
      return l.container = [l.container, n.value], l;
    });
    return (l, r) => (u(), S(zt, {
      "model-value": e.modelValue,
      "start-open": e.startOpen,
      "trigger-text": e.triggerText,
      classes: o.value,
      animate: e.animate,
      "onUpdate:modelValue": r[0] || (r[0] = (i) => l.$emit("update:modelValue", i))
    }, {
      trigger: k(({ isOpen: i }) => [
        g(l.$slots, "trigger", { isOpen: i }, () => [
          (u(), S(P(e.triggerTextElement), null, {
            default: k(() => [
              $(w(e.triggerText), 1)
            ]),
            _: 1
          }))
        ]),
        g(l.$slots, "icon", { isOpen: i }, () => [
          h("span", {
            class: m(["accordion__icon", e.classes.icon])
          }, [
            A(N, {
              icon: i ? "type:collapse" : "type:expand",
              style: { display: "inline" }
            }, null, 8, ["icon"])
          ], 2)
        ])
      ]),
      default: k(({ isOpen: i, toggle: c }) => [
        g(l.$slots, "default", {
          isOpen: i,
          toggle: c
        })
      ]),
      _: 3
    }, 8, ["model-value", "start-open", "trigger-text", "classes", "animate"]));
  }
}, on = {
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
    const s = e, { resolvedModifiers: t } = ie({ props: s, baseClass: "tag" });
    return (n, o) => (u(), f("span", {
      class: m(["tag", [
        {
          "tag--counter": e.counter,
          [`tag--${e.size}`]: e.size,
          [`tag--${e.type}`]: e.type
        },
        T(t)
      ]])
    }, [
      e.icon ? (u(), S(N, {
        key: 0,
        icon: e.icon,
        spaced: ""
      }, null, 8, ["icon"])) : y("", !0),
      g(n.$slots, "default", {}, () => [
        h("span", null, w(e.text), 1)
      ])
    ], 2));
  }
}, al = {
  name: "UluMenu",
  components: {
    UluIcon: N,
    UluTag: on
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
    handleItemClick(e, s) {
      s.click && s.click(e), this.$emit("item-click", { item: s, event: e });
    }
  }
};
function cl(e, s, t, n, o, l) {
  const r = W("UluIcon"), i = W("UluTag"), c = W("UluMenu", !0), a = Fs("ulu-tooltip");
  return t.items?.length ? (u(), f("ul", {
    key: 0,
    class: m(t.classes.list)
  }, [
    (u(!0), f(B, null, R(t.items, (d, v) => (u(), f("li", {
      key: v,
      class: m([
        t.classes.item,
        d?.classes?.item,
        d.separatorBefore ? t.classes.itemSeparatorBefore : "",
        d.separatorAfter ? t.classes.itemSeparatorAfter : ""
      ])
    }, [
      Be((u(), S(P(d.to || d.path ? "router-link" : d.click ? "button" : "a"), K({ ref_for: !0 }, {
        ...d.to || d.path ? {
          to: d.to || d.path,
          activeClass: t.classes.linkActive || null,
          exactActiveClass: t.classes.linkExactActive || null
        } : {},
        ...d.href ? { href: d.href || "#" } : {}
      }, {
        onClick: (p) => {
          l.handleItemClick(p, d);
        },
        class: [t.classes.link, d?.classes?.link],
        "aria-label": t.iconOnly ? d.title : null,
        id: d.id
      }), {
        default: k(() => [
          g(e.$slots, "default", {
            item: d,
            index: v
          }, () => [
            d.icon ? (u(), S(r, {
              key: 0,
              icon: d.icon,
              class: m([t.classes.linkIcon, d?.classes?.linkIcon])
            }, null, 8, ["icon", "class"])) : y("", !0),
            h("span", {
              class: m([t.classes.linkText, d?.classes?.linkText])
            }, w(d.title), 3),
            d.tag ? (u(), S(i, K({
              key: 1,
              ref_for: !0
            }, d.tag), null, 16)) : y("", !0)
          ])
        ]),
        _: 2
      }, 1040, ["onClick", "class", "aria-label", "id"])), [
        [a, t.iconOnly ? d.title : d.tooltip || null]
      ]),
      !t.noChildren && d?.children?.length ? (u(), S(c, {
        key: 0,
        iconOnly: t.iconOnly,
        classes: t.classes,
        items: d.children
      }, null, 8, ["iconOnly", "classes", "items"])) : y("", !0)
    ], 2))), 128))
  ], 2)) : y("", !0);
}
const ln = /* @__PURE__ */ j(al, [["render", cl]]), ul = {
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
    const s = e, t = _(() => ({
      hanging: s.hanging,
      compact: s.compact
    })), { resolvedModifiers: n } = ie({
      props: s,
      internal: t,
      baseClass: "menu-stack"
    });
    return (o, l) => (u(), S(P(e.containerElement), {
      class: m(["menu-stack", T(n)])
    }, {
      default: k(() => [
        A(ln, {
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
}, Qf = {
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
    return (s, t) => (u(), S(gt, { classes: e.popoverClasses }, {
      trigger: k(({ isOpen: n }) => [
        g(s.$slots, "trigger", { isOpen: n }, () => [
          h("span", null, w(e.triggerText), 1),
          A(N, {
            class: "button__icon",
            icon: "type:dropdownExpand",
            style: D({ transform: n ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.2s" })
          }, null, 8, ["style"])
        ])
      ]),
      default: k(() => [
        A(ul, { items: e.items }, null, 8, ["items"])
      ]),
      _: 3
    }, 8, ["classes"]));
  }
}, Zt = E(!1), at = {
  start: [],
  end: []
};
function Jt() {
  window.removeEventListener("resize", Jt), Zt.value = !0, at.start.forEach((e) => e());
}
function dl() {
  Zt.value = !1, at.end.forEach((e) => e()), window.addEventListener("resize", Jt);
}
window.addEventListener("resize", Jt), window.addEventListener("resize", Wt(dl, 300));
function gs(e, s) {
  return e.push(s), () => {
    const t = e.findIndex((n) => n === s);
    t > -1 && e.splice(t);
  };
}
function fl() {
  return {
    resizing: Zt,
    onResizeStart(e) {
      return gs(at.start, e);
    },
    onResizeEnd(e) {
      return gs(at.end, e);
    }
  };
}
function eh(e, s) {
  const t = Xs(), n = Qn(), o = _(() => {
    const a = parseInt(t.query.page || "1", 10);
    return isNaN(a) || a < 1 ? 1 : a;
  }), l = _(() => !e.value || e.value.length === 0 ? 1 : Math.ceil(e.value.length / s));
  ye(l, (a) => {
    o.value > a && n.push({ query: { ...t.query, page: a } });
  });
  const r = _(() => {
    const a = (o.value - 1) * s, d = a + s;
    return e.value.slice(a, d);
  }), i = _(() => {
    if (l.value <= 1)
      return null;
    const a = {
      pages: {}
    }, d = o.value, v = l.value, p = 5, b = (U) => ({ query: { ...t.query, page: U } });
    d > 1 && (a.first = { href: b(1) }, a.previous = { href: b(d - 1) }), d < v && (a.next = { href: b(d + 1) }, a.last = { href: b(v) });
    let C, O;
    if (v <= p)
      C = 1, O = v;
    else {
      const U = Math.floor(p / 2), q = Math.ceil(p / 2) - 1;
      d <= U ? (C = 1, O = p) : d + q >= v ? (C = v - p + 1, O = v) : (C = d - U, O = d + q);
    }
    for (let U = C; U <= O; U++)
      a.pages[U] = { href: b(U) };
    return a;
  }), c = _(() => {
    const a = { previous: !1, next: !1 };
    if (!i.value || !i.value.pages) return a;
    const d = Object.keys(i.value.pages).map(Number);
    if (d.length === 0) return a;
    const v = Math.min(...d), p = Math.max(...d);
    return v > 1 && (a.previous = !0), p < l.value && (a.next = !0), a;
  });
  return {
    currentPage: o,
    totalPages: l,
    paginatedItems: r,
    pagerItems: i,
    pagerEllipses: c
  };
}
function Ft(e, s, t) {
  typeof e === "function" && (!t || t !== "titleTemplate" && !(t[0] === "o" && t[1] === "n")) && (e = e());
  let o;
  if (s && (o = s(t, e)), Array.isArray(o))
    return o.map((l) => Ft(l, s));
  if (o?.constructor === Object) {
    const l = {};
    for (const r of Object.keys(o))
      l[r] = Ft(o[r], s, r);
    return l;
  }
  return o;
}
const hl = (e, s) => In(s) ? nt(s) : s, ml = "usehead";
function gl() {
  if (Mn()) {
    const e = dt(ml);
    if (!e)
      throw new Error("useHead() was called without provide context, ensure you call it through the setup() function.");
    return e;
  }
  throw new Error("useHead() was called without provide context, ensure you call it through the setup() function.");
}
function vl(e, s = {}) {
  const t = s.head || gl();
  return t.ssr ? t.push(e || {}, s) : pl(t, e, s);
}
function pl(e, s, t = {}) {
  const n = E(!1);
  let o;
  return ht(() => {
    const r = n.value ? {} : Ft(s, hl);
    o ? o.patch(r) : o = e.push(r, t);
  }), Pn() && (Ds(() => {
    o.dispose();
  }), zn(() => {
    n.value = !0;
  }), Fn(() => {
    n.value = !1;
  })), o;
}
function bt(e, s) {
  let n = (e?.meta || {}).title;
  return typeof n == "function" && (n = n(s || e)), n;
}
function yl(e, s) {
  const n = Object.assign({}, {
    qualifier(r, i) {
      return i ? es(r) : rn(r);
    },
    sort: ss,
    item: {},
    includeChildren: !1
  }, s), o = (r, i) => i ? `${i}/${r.path}` : r.path, l = (r, i = null) => r.filter((c) => n.qualifier(c, i)).map((c) => {
    const a = c.children ? Qt(c.children) : c, d = c.children ? c.children.filter((p) => p.path !== "") : !1, v = _t(a, o(c, i), n.item);
    return n.includeChildren && d.length && (v.children = l(d, v.path)), v;
  }).sort(n.sort);
  return l(e);
}
function bl(e) {
  function s(t) {
    const n = [];
    for (const o of t) {
      const l = { ...o };
      delete l.children, n.push(l), o.children && n.push(...s(o.children));
    }
    return n;
  }
  return s(e);
}
function _l(e, s, t) {
  const o = Object.assign({}, {
    includeIndex: !1,
    item: {},
    sort: ss
  }, t), l = e.find((a) => a.path !== "/" && s.includes(a.path)), r = (a, d, v) => {
    if (a.children) {
      const p = a.children.find((b) => b.path.includes(s));
      if (p)
        return r(p, a, v + p.path);
    }
    return { route: d, path: v };
  }, { route: i, path: c } = r(l, l, l.path);
  return i.children ? i.children.filter(cn(o.includeIndex)).map((a) => _t(a, `${c}/${a.path}`, o.item)).sort(o.sort) : (console.warn("Unable to build menu for:", s), []);
}
function Qt(e) {
  return e.find((s) => s.path === "");
}
function _t(e, s = e.path, t) {
  const o = Object.assign({}, {
    indexMeta: !0,
    modify: null
  }, t);
  let l = Object.assign({}, e.meta);
  o.indexMeta && e.children && (l = Object.assign({}, l, Qt(e.children)?.meta));
  const r = { ...e, meta: l }, i = {
    path: s,
    title: bt(r, e) || "Missing Title",
    weight: l?.weight || 0,
    meta: l
  };
  return o.modify && o.modify(i, e), i;
}
function es(e) {
  return !e.path.includes("/:");
}
function rn(e) {
  const s = e.path.match(/\//g) || [];
  return es(e) && s.length === 1;
}
function wl(e, s) {
  const { target: t } = s, n = t.closest("a");
  if (n) {
    let o = n.getAttribute("href");
    o.startsWith("/") && (e.push(o), s.preventDefault());
  }
}
function an(e, s = ts(e)) {
  return s?.children;
}
function ts(e, s) {
  const t = e.matched.length, n = t - 2;
  return s ? t > 1 ? e.matched[0] : null : n < 0 ? null : e.matched[n];
}
function cn(e) {
  return (s) => e || s.path !== "";
}
function ss(e, s) {
  return e?.weight - s?.weight;
}
function Sl(e, s) {
  const n = Object.assign({}, {
    parent: null,
    includeIndex: !1,
    item: {},
    sort: ss
  }, s), o = n.parent || ts(e);
  return (an(e, o) || []).filter(cn(n.includeIndex)).map((r) => _t(r, `${o.path}/${r.path}`, n.item)).sort(n.sort);
}
function kl(e) {
  const { matched: s, path: t } = e;
  let n;
  return s.reduce((l, r, i) => {
    if (r.meta?.breadcrumb === !1 || r.path === n)
      return l;
    const c = i === s.length - 1, a = bt(r, e) || "Missing Title";
    return l.push({
      title: a,
      to: { path: c ? t : r.path },
      current: c
    }), n = r.path, l;
  }, []);
}
const $l = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  $createBreadcrumb: kl,
  $createSectionMenu: Sl,
  $getParentRoute: ts,
  $getRouteChildren: an,
  createBaseMenu: yl,
  createMenuItem: _t,
  createSectionMenu: _l,
  flattenMenu: bl,
  getChildIndexRoute: Qt,
  getRouteTitle: bt,
  isStaticBaseRoute: rn,
  isStaticRoute: es,
  nativeLinkRouter: wl
}, Symbol.toStringTag, { value: "Module" })), xt = ut({});
function th(e = {}) {
  const {
    title: s,
    titleTemplate: t = "%s",
    useRoute: n = Xs,
    useHead: o = vl
  } = e, l = n(), r = l.path;
  if (s !== void 0) {
    ht(() => {
      xt[r] = T(s);
    }), Ws(() => {
      delete xt[r];
    });
    return;
  }
  const i = _(() => {
    const c = xt[l.path], a = bt(l, l), d = c || a;
    return d ? t.replace("%s", d) : "App";
  });
  o({
    title: i
  });
}
const Cl = { class: "layout-flex-baseline" }, Tl = { class: "type-word-break" }, sh = {
  __name: "UluOverflowPopover",
  props: {
    /**
     * Default icon for overflow popover trigger
     */
    triggerIcon: String
  },
  setup(e) {
    const { resizing: s, onResizeEnd: t } = fl(), n = E(null), o = E(!1), l = () => {
      Vs(() => {
        const i = n.value;
        o.value = i.offsetWidth < i.scrollWidth;
      });
    }, r = t(l);
    return mt(l), Ws(r), (i, c) => (u(), f("div", Cl, [
      h("div", {
        class: "type-truncate",
        ref_key: "text",
        ref: n
      }, [
        g(i.$slots, "default")
      ], 512),
      o.value && !T(s) ? (u(), S(gt, {
        key: 0,
        triggerAlt: "Show Full Text",
        size: "large"
      }, {
        trigger: k(() => [
          A(N, {
            icon: e.triggerIcon || "type:ellipsis"
          }, null, 8, ["icon"])
        ]),
        default: k(() => [
          h("div", Tl, [
            g(i.$slots, "default")
          ])
        ]),
        _: 3
      })) : y("", !0)
    ]));
  }
}, nh = {
  __name: "UluTab",
  setup(e) {
    return (s, t) => (u(), S(T(eo), null, {
      default: k((n) => [
        g(s.$slots, "default", oe(re(n)))
      ]),
      _: 3
    }));
  }
}, oh = /* @__PURE__ */ Object.assign({
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
    return (s, t) => (u(), S(T(to), {
      defaultIndex: e.defaultIndex,
      vertical: e.vertical
    }, {
      default: k((n) => [
        h("div", {
          class: m(["tabs", {
            "tabs--vertical": e.vertical
          }])
        }, [
          g(s.$slots, "default", oe(re(n)))
        ], 2)
      ]),
      _: 3
    }, 8, ["defaultIndex", "vertical"]));
  }
}), lh = {
  __name: "UluTabList",
  setup(e) {
    return (s, t) => (u(), S(T(so), { class: "tabs__tablist" }, {
      default: k(() => [
        g(s.$slots, "default")
      ]),
      _: 3
    }));
  }
}, rh = {
  __name: "UluTabPanel",
  setup(e) {
    return (s, t) => (u(), S(T(no), null, {
      default: k((n) => [
        g(s.$slots, "default", oe(re(n)))
      ]),
      _: 3
    }));
  }
}, ih = {
  __name: "UluTabPanels",
  setup(e) {
    return (s, t) => (u(), S(T(oo), null, {
      default: k((n) => [
        g(s.$slots, "default", oe(re(n)))
      ]),
      _: 3
    }));
  }
}, Al = {
  name: "UluButton",
  components: {
    UluIcon: N
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
    const { resolvedModifiers: s } = ie({ props: e, baseClass: "button" });
    return { resolvedModifiers: s };
  },
  computed: {
    resolvedAriaLabel() {
      const e = this.alt || this.iconOnly && this.text;
      return e || null;
    },
    classes() {
      const e = [], { size: s } = this;
      return s && e.push(`button--${s}`), e;
    },
    element() {
      return this.to ? Xe : this.href ? "a" : "button";
    },
    attrs() {
      const { to: e, href: s, download: t, target: n } = this, o = e ? { to: e } : s ? { href: s } : {};
      return s && (n && (o.target = n), t && (o.download = typeof t == "string" ? t : !0)), o;
    }
  }
}, Ol = { key: 1 };
function xl(e, s, t, n, o, l) {
  const r = W("UluIcon");
  return u(), S(P(l.element), K({
    class: ["button", [
      {
        "button--transparent": t.transparent,
        "button--primary": t.primary,
        "button--secondary": t.secondary,
        "button--outline": t.outline,
        "button--small": t.small,
        "button--large": t.large,
        "button--icon": t.iconOnly,
        "no-margin": t.noMargin
      },
      l.classes,
      n.resolvedModifiers
    ]]
  }, l.attrs, { "aria-label": l.resolvedAriaLabel }), {
    default: k(() => [
      g(e.$slots, "before"),
      t.icon && (t.iconBefore || t.iconOnly) ? (u(), S(r, {
        key: 0,
        icon: t.icon,
        class: "button__icon"
      }, null, 8, ["icon"])) : y("", !0),
      (e.$slots.default || t.text) && !t.iconOnly ? (u(), f("span", Ol, [
        g(e.$slots, "default", {}, () => [
          $(w(t.text), 1)
        ])
      ])) : y("", !0),
      t.icon && !t.iconBefore && !t.iconOnly ? (u(), S(r, {
        key: 2,
        icon: t.icon,
        class: "button__icon"
      }, null, 8, ["icon"])) : y("", !0),
      g(e.$slots, "after")
    ]),
    _: 3
  }, 16, ["class", "aria-label"]);
}
const Ul = /* @__PURE__ */ j(Al, [["render", xl]]), Bl = {
  name: "UluAlert",
  components: {
    UluButton: Ul,
    UluIcon: N
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
    const { resolvedModifiers: s } = ie({
      props: e,
      baseClass: "callout",
      internal: _(() => ({
        [e.type]: e.type,
        compact: e.compact
      }))
    });
    return { resolvedModifiers: s };
  }
}, Rl = { class: "layout-flex" }, El = { class: "type-small" }, jl = {
  key: 0,
  class: "margin-left-auto align-self-center"
};
function Il(e, s, t, n, o, l) {
  const r = W("UluIcon");
  return u(), f("div", {
    class: m(["callout", n.resolvedModifiers])
  }, [
    h("div", Rl, [
      A(r, {
        class: m(["type-large margin-right-small", `color-${t.type}`]),
        icon: t.icon || `type:${t.type}`
      }, null, 8, ["class", "icon"]),
      h("div", El, [
        h("div", null, [
          g(e.$slots, "title", {}, () => [
            h("strong", null, w(t.title), 1)
          ])
        ]),
        h("div", null, [
          g(e.$slots, "description", {}, () => [
            $(w(t.description), 1)
          ])
        ])
      ]),
      e.$slots.action ? (u(), f("div", jl, [
        g(e.$slots, "action")
      ])) : y("", !0)
    ])
  ], 2);
}
const ah = /* @__PURE__ */ j(Bl, [["render", Il]]), Ml = ["aria-hidden"], Pl = {
  key: 2,
  class: "hidden-visually"
}, zl = {
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
    const s = e, t = _(() => !!(s.to || s.click)), n = _(() => {
      const { click: o, to: l, href: r } = s;
      return o ? "button" : l ? Xe : r ? "a" : "span";
    });
    return (o, l) => (u(), S(P(n.value), {
      class: m(["badge", [
        e.size ? `badge--${e.size}` : null,
        e.type ? `badge--${e.type}` : null,
        { "badge--clickable": t.value }
      ]]),
      to: e.to,
      href: e.href,
      onClick: e.click
    }, {
      default: k(() => [
        h("span", {
          class: m(["badge__inner", { "skeleton__background-color": e.skeleton }])
        }, [
          e.text ? (u(), f("span", {
            key: 0,
            "aria-hidden": e.alt ? "true" : null
          }, w(e.text), 9, Ml)) : g(o.$slots, "default", { key: 1 }),
          e.alt ? (u(), f("span", Pl, w(e.alt), 1)) : y("", !0)
        ], 2)
      ]),
      _: 3
    }, 8, ["class", "to", "href", "onClick"]));
  }
}, Fl = { class: "badge-stack" }, ch = {
  __name: "UluBadgeStack",
  props: {
    /**
     * Array of props for each badge
     */
    items: Array
  },
  setup(e) {
    return (s, t) => (u(), f("ul", Fl, [
      (u(!0), f(B, null, R(e.items, (n, o) => (u(), f("li", {
        class: "badge-stack__item",
        key: o
      }, [
        A(zl, K({ ref_for: !0 }, n), null, 16)
      ]))), 128))
    ]));
  }
}, Ll = {
  name: "UluButtonVerbose",
  components: {
    UluIcon: N
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
    const { resolvedModifiers: s } = ie({ props: e, baseClass: "button-verbose" });
    return { resolvedModifiers: s };
  },
  computed: {
    element() {
      return this.to ? Xe : this.href ? "a" : "button";
    },
    attrs() {
      const { to: e, href: s, download: t, target: n } = this, o = e ? { to: e } : s ? { href: s } : {};
      return s && (n && (o.target = n), t && (o.download = typeof t == "string" ? t : !0)), o;
    }
  }
}, Vl = {
  key: 1,
  class: "button-verbose__body"
};
function Hl(e, s, t, n, o, l) {
  const r = W("UluIcon");
  return u(), S(P(l.element), K({
    class: ["button-verbose", [
      {
        "button-verbose--inline": t.inline,
        "button-verbose--full-width": t.fullWidth
      },
      n.resolvedModifiers
    ]]
  }, l.attrs), {
    default: k(() => [
      e.$slots.title || t.title ? (u(), S(P(t.titleElement), {
        key: 0,
        class: "button-verbose__title"
      }, {
        default: k(() => [
          g(e.$slots, "title", {}, () => [
            $(w(t.title), 1)
          ])
        ]),
        _: 3
      })) : y("", !0),
      e.$slots.default || t.body ? (u(), f("span", Vl, [
        g(e.$slots, "default", {}, () => [
          $(w(t.body), 1)
        ])
      ])) : y("", !0),
      t.icon ? (u(), S(r, {
        key: 2,
        icon: t.icon,
        class: "button-verbose__icon",
        "aria-hidden": "true"
      }, null, 8, ["icon"])) : y("", !0)
    ]),
    _: 3
  }, 16, ["class"]);
}
const uh = /* @__PURE__ */ j(Ll, [["render", Hl]]), Nl = {
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
    const { resolvedModifiers: s } = ie({ props: e, baseClass: "callout" });
    return { resolvedModifiers: s };
  }
};
function Dl(e, s, t, n, o, l) {
  return u(), f("div", {
    class: m(["callout", [n.resolvedModifiers, { "full-height": t.fullHeight }]])
  }, [
    g(e.$slots, "default")
  ], 2);
}
const dh = /* @__PURE__ */ j(Nl, [["render", Dl]]), Wl = { class: "card__body" }, Xl = { class: "card__main" }, Gl = ["href", "target"], ql = {
  key: 0,
  class: "card__aside"
}, Yl = ["src", "alt"], Kl = {
  key: 1,
  class: "card__footer"
}, fh = {
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
  setup(e, { emit: s }) {
    const t = e, n = s, o = Hs();
    t.proxyClick && (t.to || t.href) && console.warn("UluCard: 'proxyClick' is ignored when 'to' or 'href' are present."), (t.titleTo || t.titleHref) && (t.to || t.href) && console.warn("UluCard: 'titleTo'/'titleHref' should not be used with 'to'/'href'.");
    const l = E(null), r = E(null), { resolvedModifiers: i } = ie({ props: t, baseClass: "card" }), c = E(null), a = E(!1), d = _(() => t.proxyClick && !t.to && !t.href), v = _(() => d.value && (t.titleTo || t.titleHref)), p = _(() => d.value && !v.value), b = _(() => d.value || null), C = _(() => ({
      selectorPrevent: "input, select, textarea, button, a, [tabindex='-1']",
      mousedownDurationPrevent: 250,
      ...t.proxyClickOptions
    })), O = _(() => d.value ? "pointer" : null), U = _(() => t.to ? Xe : t.href ? "a" : t.cardElement);
    function q({ target: z, timeStamp: J }) {
      if (!b.value) return;
      const { selectorPrevent: ce } = C.value;
      a.value = !1, z.closest(ce) || (a.value = !0, c.value = J);
    }
    function Z({ timeStamp: z }) {
      if (!b.value || !a.value) return;
      const { mousedownDurationPrevent: J } = C.value;
      if (z - c.value < J) {
        if (v.value)
          r.value?.click();
        else if (p.value) {
          const ce = l.value?.querySelector("[data-ulu-card-proxy-target]");
          ce ? ce.click() : n("proxy-click");
        }
      }
      a.value = !1;
    }
    return (z, J) => (u(), S(P(U.value), {
      ref_key: "cardRoot",
      ref: l,
      class: m(["card", [
        {
          "card--horizontal": e.horizontal || e.horizontalCenter,
          "card--horizontal-center": e.horizontalCenter,
          "card--overlay": e.overlay
        },
        T(i)
      ]]),
      onMousedown: q,
      onMouseup: Z,
      style: D({ cursor: O.value }),
      target: e.target,
      to: e.to,
      href: e.href,
      "data-ulu-proxy-click-init": b.value
    }, {
      default: k(() => [
        h("div", Wl, [
          h("div", Xl, [
            e.title || T(o).title ? (u(), S(P(e.titleElement), {
              key: 0,
              class: m(["card__title", e.classes.title])
            }, {
              default: k(() => [
                e.titleTo ? (u(), S(T(Xe), {
                  key: 0,
                  class: "card__title-link",
                  to: e.titleTo,
                  ref_key: "link",
                  ref: r
                }, {
                  default: k(() => [
                    g(z.$slots, "title", {}, () => [
                      $(w(e.title), 1)
                    ])
                  ]),
                  _: 3
                }, 8, ["to"])) : e.titleHref ? (u(), f("a", {
                  key: 1,
                  class: "card__title-link",
                  href: e.titleHref,
                  target: e.titleTarget,
                  ref_key: "link",
                  ref: r
                }, [
                  g(z.$slots, "title", {}, () => [
                    $(w(e.title), 1)
                  ])
                ], 8, Gl)) : g(z.$slots, "title", { key: 2 }, () => [
                  $(w(e.title), 1)
                ])
              ]),
              _: 3
            }, 8, ["class"])) : y("", !0),
            g(z.$slots, "body")
          ]),
          T(o).aside ? (u(), f("div", ql, [
            g(z.$slots, "aside")
          ])) : y("", !0)
        ]),
        T(o).image || e.imageSrc ? (u(), f("div", {
          key: 0,
          class: m(["card__image", [
            { "card__image--icon": e.imageIcon },
            e.classes.image
          ]])
        }, [
          g(z.$slots, "image", {}, () => [
            h("img", {
              src: e.imageSrc,
              alt: e.imageAlt
            }, null, 8, Yl)
          ])
        ], 2)) : y("", !0),
        T(o).footer ? (u(), f("div", Kl, [
          g(z.$slots, "footer")
        ])) : y("", !0)
      ]),
      _: 3
    }, 40, ["class", "style", "target", "to", "href", "data-ulu-proxy-click-init"]));
  }
}, hh = {
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
    const s = e, t = _(() => ({
      inline: s.inline,
      "inline-all": s.inlineAll,
      table: s.table,
      separated: s.separated,
      "separated-first": s.separatedFirst,
      "separated-last": s.separatedLast,
      compact: s.compact
    })), { resolvedModifiers: n } = ie({
      props: s,
      internal: t,
      baseClass: "definition-list"
    });
    return (o, l) => (u(), f("dl", {
      class: m(["definition-list", [T(n), e.classes.list]])
    }, [
      (u(!0), f(B, null, R(e.items, (r, i) => (u(), f("div", {
        key: i,
        class: m(e.classes.item)
      }, [
        h("dt", {
          class: m(e.classes.term)
        }, [
          g(o.$slots, "term", {
            item: r,
            index: i
          }, () => [
            $(w(r.term), 1)
          ])
        ], 2),
        h("dd", {
          class: m(e.classes.description)
        }, [
          g(o.$slots, "description", {
            item: r,
            index: i
          }, () => [
            $(w(r.description), 1)
          ])
        ], 2)
      ], 2))), 128))
    ], 2));
  }
}, Zl = ["href", "target"], Jl = { class: "external-link__text" }, mh = {
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
    return (s, t) => (u(), f("a", {
      class: "external-link",
      href: e.href,
      target: e.target
    }, [
      h("span", Jl, [
        g(s.$slots, "default", {}, () => [
          $(w(e.text), 1)
        ])
      ]),
      A(N, {
        class: "external-link__icon margin-left-small-x display-inline",
        icon: e.icon || "type:externalLink"
      }, null, 8, ["icon"])
    ], 8, Zl));
  }
}, gh = {
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
    const s = e, t = _(() => s.ordered || s.forceOrdered ? "ol" : "ul");
    return (n, o) => (u(), S(P(t.value), {
      class: m([
        {
          "list-ordered": e.ordered,
          "list-unordered": e.unordered,
          "list-lines": e.lines,
          "list-compact": e.compact
        },
        e.classes.list
      ]),
      style: D({
        listStyleType: e.listStyleType
      }),
      reversed: e.reversed,
      start: e.start
    }, {
      default: k(() => [
        (u(!0), f(B, null, R(e.items, (l, r) => (u(), f("li", {
          key: r,
          class: m(e.classes.listItem)
        }, [
          g(n.$slots, "default", {
            item: l,
            index: r
          }, () => [
            $(w(l), 1)
          ])
        ], 2))), 128))
      ]),
      _: 3
    }, 8, ["class", "style", "reversed", "start"]));
  }
}, Ql = {}, er = { id: "main-content" };
function tr(e, s) {
  return u(), f("main", er, [
    g(e.$slots, "default")
  ]);
}
const vh = /* @__PURE__ */ j(Ql, [["render", tr]]), sr = { class: "spoke-spinner__spinner" }, ph = {
  __name: "UluSpokeSpinner",
  props: {
    /**
     * Type modifier for spinner (ie match scss style name)
     */
    type: String
  },
  setup(e) {
    return (s, t) => (u(), f("div", {
      class: m(["spoke-spinner", { [`spoke-spinner--${e.type}`]: e.type }])
    }, [
      h("div", sr, [
        (u(), f(B, null, R(12, (n) => h("div", { key: n })), 64))
      ])
    ], 2));
  }
}, nr = ["role", "aria-labelledby"], or = ["id"], lr = { class: "menu-stack__list" }, rr = { class: "menu-stack__selectable" }, ir = ["type", "id", "name", "value", "checked", "onChange"], ar = ["for"], un = {
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
  setup(e, { emit: s }) {
    const t = e, n = s, o = _(() => t.legend ? t.legend.toLowerCase().replace(/\s+/g, "-") : `menu-${Math.random().toString(36).substring(7)}`), l = _(() => o.value ? `${o.value}-legend` : null), r = _(() => t.type === "radio" ? "radiogroup" : "group"), i = (d) => `${o.value}-${d.uid}`, c = (d) => t.type === "radio" ? t.modelValue === d.uid : Array.isArray(t.modelValue) ? t.modelValue.includes(d.uid) : t.type === "checkbox" && d.checked || !1, a = (d, v) => {
      if (t.type === "radio")
        n("update:modelValue", d.uid);
      else if (Array.isArray(t.modelValue)) {
        const p = [...t.modelValue], b = p.indexOf(d.uid);
        b > -1 ? p.splice(b, 1) : p.push(d.uid), n("update:modelValue", p);
      } else
        d.checked = v.target.checked;
    };
    return (d, v) => (u(), f("div", {
      class: m(["menu-stack form-theme", {
        "menu-stack--hide-inputs": e.hideInputs,
        "menu-stack--compact": e.compact
      }]),
      role: r.value,
      "aria-labelledby": l.value
    }, [
      e.legend ? (u(), f("div", {
        key: 0,
        id: l.value,
        class: "hidden-visually"
      }, w(e.legend), 9, or)) : y("", !0),
      h("ul", lr, [
        (u(!0), f(B, null, R(e.options, (p) => (u(), f("li", {
          class: "menu-stack__item",
          key: p.uid
        }, [
          h("div", rr, [
            h("input", {
              type: e.type,
              id: i(p),
              name: o.value,
              value: p.uid,
              checked: c(p),
              onChange: (b) => a(p, b)
            }, null, 40, ir),
            h("label", {
              for: i(p)
            }, [
              g(d.$slots, "default", { option: p }, () => [
                $(w(p?.label || p?.title || p?.text), 1)
              ])
            ], 8, ar)
          ])
        ]))), 128))
      ])
    ], 10, nr));
  }
}, cr = ["href", "download"], ur = { class: "margin-left-small-x" }, yh = {
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
    const s = e, t = _(() => typeof window > "u" ? "" : window.URL.createObjectURL(s.file)), n = _(() => {
      const { size: o } = s.file, l = o / 1e6, r = o / 1e3, i = (c) => parseFloat(c.toFixed(2));
      return l > 1 ? `${i(l)}Mb` : r > 1 ? `${i(r)}Kb` : `${i(o)}B`;
    });
    return (o, l) => (u(), f("a", {
      class: "layout-flex-baseline",
      href: t.value,
      download: e.file.name
    }, [
      g(o.$slots, "default", {
        fileName: e.file.name,
        fileSize: n.value
      }, () => [
        A(N, {
          class: "ui-icon",
          icon: e.icon
        }, null, 8, ["icon"]),
        h("span", ur, [
          $(w(e.file.name) + " ", 1),
          e.noFileSize ? y("", !0) : (u(), S(on, {
            key: 0,
            text: n.value,
            small: "",
            outline: ""
          }, null, 8, ["text"]))
        ])
      ])
    ], 8, cr));
  }
}, dr = { class: "site-form__item site-form__item--file" }, fr = ["for"], hr = ["multiple", "id"], bh = {
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
    inputAttrs: Object
  },
  emits: ["file-change"],
  setup(e, { emit: s }) {
    const t = /* @__PURE__ */ (() => {
      let r = 0;
      return () => `file-input-id-${++r}`;
    })(), n = s, o = t(), l = (r) => {
      n("file-change", r.target.files);
    };
    return (r, i) => (u(), f("div", dr, [
      h("label", {
        class: m({ "hidden-visually": e.labelHidden }),
        for: T(o)
      }, [
        g(r.$slots, "label", {}, () => [
          $(w(e.label), 1)
        ])
      ], 10, fr),
      h("input", K({
        type: "file",
        onChange: l,
        multiple: e.multiple,
        id: T(o)
      }, e.inputAttrs), null, 16, hr)
    ]));
  }
}, _h = {
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
    return (s, t) => (u(), f("p", {
      class: m(["site-form__description", {
        "site-form__error": e.error,
        "site-form__warning": e.warning
      }])
    }, [
      e.error || e.warning ? (u(), S(N, {
        key: 0,
        icon: `type:${e.error ? "error" : "warning"}`
      }, null, 8, ["icon"])) : y("", !0),
      g(s.$slots, "default")
    ], 2));
  }
}, mr = { class: "site-form__item site-form__item--select" }, gr = ["for"], vr = ["id", "value"], pr = ["value"], wh = {
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
    labelHidden: Boolean
  },
  emits: ["update:modelValue"],
  setup(e) {
    const t = (/* @__PURE__ */ (() => {
      let n = 0;
      return () => `select-id-${++n}`;
    })())();
    return (n, o) => (u(), f("div", mr, [
      h("label", {
        class: m({ "hidden-visually": e.labelHidden }),
        for: T(t)
      }, [
        g(n.$slots, "default", {}, () => [
          $(w(e.label), 1)
        ])
      ], 10, gr),
      h("select", {
        id: T(t),
        value: e.modelValue,
        onInput: o[0] || (o[0] = (l) => n.$emit("update:modelValue", l.target.value))
      }, [
        o[1] || (o[1] = h("option", {
          disabled: "",
          value: ""
        }, "Please select one", -1)),
        (u(!0), f(B, null, R(e.options, (l, r) => (u(), f("option", {
          key: r,
          value: l.value
        }, w(l.text), 9, pr))), 128))
      ], 40, vr)
    ]));
  }
}, yr = { class: "site-form__item site-form__item--text" }, br = ["for"], _r = ["value", "id"], Sh = {
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
    labelHidden: Boolean
  },
  emits: ["update:modelValue"],
  setup(e) {
    const t = (/* @__PURE__ */ (() => {
      let n = 0;
      return () => `text-input-id-${++n}`;
    })())();
    return (n, o) => (u(), f("div", yr, [
      h("label", {
        class: m({ "hidden-visually": e.labelHidden }),
        for: T(t)
      }, [
        g(n.$slots, "default", {}, () => [
          $(w(e.label), 1)
        ])
      ], 10, br),
      h("input", {
        type: "text",
        value: e.modelValue,
        onInput: o[0] || (o[0] = (l) => n.$emit("update:modelValue", l.target.value)),
        id: T(t)
      }, null, 40, _r)
    ]));
  }
}, wr = { class: "form-theme search-form type-small" }, Sr = { class: "search-form__field" }, kr = ["placeholder"], $r = {
  class: "search-form__submit button button--primary",
  "aria-label": "Submit Search"
}, kh = {
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
    return (s, t) => (u(), f("div", wr, [
      h("div", Sr, [
        t[0] || (t[0] = h("label", { class: "hidden-visually" }, "Search", -1)),
        h("input", {
          class: "search-form__input",
          type: "text",
          id: "example-input",
          placeholder: e.placeholder
        }, null, 8, kr)
      ]),
      h("button", $r, [
        A(N, { icon: "type:search" })
      ])
    ]));
  }
}, $h = {
  __name: "UluAdaptiveLayout",
  setup(e) {
    const s = _e("uluIsMobile");
    return (t, n) => !T(s) || !t.$slots.mobile ? g(t.$slots, "default", { key: 0 }) : g(t.$slots, "mobile", { key: 1 });
  }
}, Cr = {
  name: "UluDataGrid",
  async mounted() {
    const e = () => lo(this.$el);
    e(), this.resizeHandler = Wt(e, 200, !1, this), window.addEventListener("resize", this.resizeHandler);
  },
  beforeUnmount() {
    this.resizeHandler && window.removeEventListener("resize", this.resizeHandler);
  }
};
function Tr(e, s, t, n, o, l) {
  return u(), f("div", null, [
    g(e.$slots, "default")
  ]);
}
const Ch = /* @__PURE__ */ j(Cr, [["render", Tr]]), Ar = {
  name: "UluTitleRail",
  components: {
    UluIcon: N
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
}, Or = {
  key: 0,
  class: "rail__item rail__item--pull"
};
function xr(e, s, t, n, o, l) {
  const r = W("UluIcon");
  return u(), f("div", {
    class: m(["rail rail--title-rail", {
      "rail--rule": t.rule
    }])
  }, [
    h("div", {
      class: m(["rail__item rail__item--title", t.classes.itemTitle])
    }, [
      (u(), S(P(t.titleElement), {
        class: m(["layout-flex type-max-width-small no-margin", t.classes.title]),
        style: D({ alignItems: t.iconAlign })
      }, {
        default: k(() => [
          t.icon ? (u(), S(r, {
            key: 0,
            class: m(t.classes.icon),
            icon: t.icon
          }, null, 8, ["class", "icon"])) : y("", !0),
          g(e.$slots, "default", {}, () => [
            $(w(t.title), 1)
          ])
        ]),
        _: 3
      }, 8, ["class", "style"]))
    ], 2),
    e.$slots.end ? (u(), f("div", Or, [
      g(e.$slots, "end")
    ])) : y("", !0)
  ], 2);
}
const Th = /* @__PURE__ */ j(Ar, [["render", xr]]), Ur = {
  name: "UluBreadcrumb",
  components: {
    UluIcon: N
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
function Br(e, s, t, n, o, l) {
  const r = W("router-link"), i = W("UluIcon");
  return t.items.length ? (u(), f("nav", {
    key: 0,
    class: m(t.classes.nav),
    "aria-label": "Breadcrumb"
  }, [
    h("ol", {
      class: m(t.classes.list)
    }, [
      (u(!0), f(B, null, R(t.items, (c, a) => (u(), f("li", {
        key: a,
        class: m(t.classes.item)
      }, [
        c.current ? (u(), f("span", {
          key: 1,
          class: m(c.current)
        }, [
          g(e.$slots, "default", { item: c }, () => [
            $(w(c.title), 1)
          ])
        ], 2)) : (u(), S(r, {
          key: 0,
          to: c.to,
          class: m(t.classes.link),
          "aria-current": c.current ? "page" : null
        }, {
          default: k(() => [
            g(e.$slots, "default", { item: c }, () => [
              $(w(c.title), 1)
            ])
          ]),
          _: 2
        }, 1032, ["to", "class", "aria-current"])),
        a < t.items.length - 1 ? g(e.$slots, "separator", { key: 2 }, () => [
          A(i, {
            class: m(t.classes.separator),
            icon: t.separatorIcon || "type:pathSeparator"
          }, null, 8, ["class", "icon"])
        ]) : y("", !0)
      ], 2))), 128))
    ], 2)
  ], 2)) : y("", !0);
}
const Ah = /* @__PURE__ */ j(Ur, [["render", Br]]), Rr = {
  name: "UluNavStrip",
  components: {
    UluMenu: ln
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
function Er(e, s, t, n, o, l) {
  const r = W("UluMenu");
  return u(), f("nav", {
    class: m(["nav-strip", {
      "nav-strip--rule": t.rule,
      "nav-strip--center": t.center,
      "nav-strip--right": t.right
    }])
  }, [
    A(r, {
      items: t.items,
      classes: {
        list: "nav-strip__list",
        item: "nav-strip__item",
        link: "nav-strip__link",
        linkExactActive: "is-active"
      }
    }, null, 8, ["items"])
  ], 2);
}
const Oh = /* @__PURE__ */ j(Rr, [["render", Er]]), jr = { class: "pager__items js-pager__items" }, Ir = {
  key: 0,
  class: "pager__item pager__item--first"
}, Mr = {
  key: 1,
  class: "pager__item pager__item--previous"
}, Pr = {
  key: 2,
  class: "pager__item pager__item--ellipsis",
  role: "presentation"
}, zr = { class: "hidden-visually" }, Fr = {
  key: 3,
  class: "pager__item pager__item--ellipsis",
  role: "presentation"
}, Lr = {
  key: 4,
  class: "pager__item pager__item--next"
}, Vr = {
  key: 5,
  class: "pager__item pager__item--last"
}, xh = {
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
    let s = 0;
    const t = e, n = `ulu-pager-${s++}`;
    function o(l) {
      return t.current == l ? "Current page" : `Go to page ${l}`;
    }
    return (l, r) => {
      const i = W("router-link");
      return e.items ? (u(), f("nav", {
        key: 0,
        class: "pager",
        role: "navigation",
        "aria-labelledby": n
      }, [
        (u(), S(P(e.titleElement), {
          id: n,
          class: "hidden-visually"
        }, {
          default: k(() => [...r[0] || (r[0] = [
            $("Pagination", -1)
          ])]),
          _: 1
        })),
        h("ul", jr, [
          e.items.first ? (u(), f("li", Ir, [
            A(i, K({
              to: e.items.first.href,
              title: "Go to first page"
            }, e.items.first.attributes), {
              default: k(() => [
                r[1] || (r[1] = h("span", { class: "hidden-visually" }, "First page", -1)),
                A(N, {
                  icon: "fas fa-angle-double-left",
                  "aria-hidden": "true"
                })
              ]),
              _: 1
            }, 16, ["to"])
          ])) : y("", !0),
          e.items.previous ? (u(), f("li", Mr, [
            A(i, K({
              to: e.items.previous.href,
              title: "Go to previous page",
              rel: "prev"
            }, e.items.previous.attributes), {
              default: k(() => [
                r[2] || (r[2] = h("span", { class: "hidden-visually" }, "Previous page", -1)),
                A(N, {
                  icon: "fas fa-angle-left",
                  "aria-hidden": "true"
                })
              ]),
              _: 1
            }, 16, ["to"])
          ])) : y("", !0),
          e.ellipses.previous ? (u(), f("li", Pr, "…")) : y("", !0),
          (u(!0), f(B, null, R(e.items.pages, (c, a) => (u(), f("li", {
            key: a,
            class: m(["pager__item", { "is-active": e.current == a }])
          }, [
            A(i, K({
              to: c.href,
              title: o(a)
            }, { ref_for: !0 }, c.attributes), {
              default: k(() => [
                h("span", zr, w(e.current == a ? "Current page" : "Page"), 1),
                $(" " + w(a), 1)
              ]),
              _: 2
            }, 1040, ["to", "title"])
          ], 2))), 128)),
          e.ellipses.next ? (u(), f("li", Fr, "…")) : y("", !0),
          e.items.next ? (u(), f("li", Lr, [
            A(i, K({
              to: e.items.next.href,
              title: "Go to next page",
              rel: "next"
            }, e.items.next.attributes), {
              default: k(() => [
                r[3] || (r[3] = h("span", { class: "hidden-visually" }, "Next page", -1)),
                A(N, {
                  icon: "fas fa-angle-right",
                  "aria-hidden": "true"
                })
              ]),
              _: 1
            }, 16, ["to"])
          ])) : y("", !0),
          e.items.last ? (u(), f("li", Vr, [
            A(i, K({
              to: e.items.last.href,
              title: "Go to last page"
            }, e.items.last.attributes), {
              default: k(() => [
                r[4] || (r[4] = h("span", { class: "hidden-visually" }, "Last page", -1)),
                A(N, {
                  icon: "fas fa-angle-double-right",
                  "aria-hidden": "true"
                })
              ]),
              _: 1
            }, 16, ["to"])
          ])) : y("", !0)
        ])
      ])) : y("", !0);
    };
  }
}, Hr = {}, Nr = {
  class: "site-skip-link hidden-visually-focusable",
  href: "#main-content"
};
function Dr(e, s) {
  return u(), f("a", Nr, " Skip to main content ");
}
const Uh = /* @__PURE__ */ j(Hr, [["render", Dr]]), Wr = {
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
function Xr(e, s, t, n, o, l) {
  return t.text != null ? (u(), S(P(t.element), { key: 0 }, {
    default: k(() => [
      $(w(t.text), 1)
    ]),
    _: 1
  })) : y("", !0);
}
const Bh = /* @__PURE__ */ j(Wr, [["render", Xr]]), Gr = {
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
    return (s, t) => e.unwrapped ? g(s.$slots, "default", { key: 1 }) : (u(), S(P(e.is), { key: 0 }, {
      default: k(() => [
        g(s.$slots, "default")
      ]),
      _: 3
    }));
  }
}, qr = {}, Yr = { style: { display: "none" } };
function Kr(e, s) {
  return u(), f("span", Yr);
}
const Rh = /* @__PURE__ */ j(qr, [["render", Kr]]), Zr = {};
function Jr(e, s) {
  const t = W("router-view");
  return u(), S(t);
}
const Eh = /* @__PURE__ */ j(Zr, [["render", Jr]]), Qr = {
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
      const { imageId: e } = this, { width: s, height: t } = this.size;
      return `https://picsum.photos/${e ? `id/${e}/` : ""}${s}/${t}`;
    },
    size() {
      const { random: e, width: s, height: t } = this;
      return e ? {
        width: rt(500, 1e3),
        height: rt(500, 1e3)
      } : { width: s, height: t };
    }
  }
}, ei = ["src", "alt"];
function ti(e, s, t, n, o, l) {
  return u(), f("img", {
    src: l.src,
    alt: t.alt
  }, null, 8, ei);
}
const jh = /* @__PURE__ */ j(Qr, [["render", ti]]), si = {
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
function ni(e, s, t, n, o, l) {
  return u(!0), f(B, null, R(parseInt(t.amount), (r) => (u(), S(P(t.element), { key: r }, {
    default: k(() => [...s[0] || (s[0] = [
      $(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed semper erat tincidunt tellus vestibulum dictum. Fusce vel augue commodo, egestas diam sed, accumsan leo. Maecenas congue nec nisl et ullamcorper. Maecenas tincidunt, tortor et viverra eleifend, enim leo vestibulum ipsum, quis placerat mi nisi nec ex. Vivamus a justo volutpat, scelerisque elit eget, lacinia ex. Phasellus dapibus sollicitudin tortor, vitae suscipit nunc condimentum ut. Cras suscipit feugiat nibh nec consectetur. Phasellus vitae quam blandit, cursus metus ut, placerat mi. Sed tempor lacus non est interdum imperdiet nec quis metus. Praesent vel eleifend diam. Donec tincidunt eget purus sed posuere. ", -1)
    ])]),
    _: 2
  }, 1024))), 128);
}
const Ih = /* @__PURE__ */ j(si, [["render", ni]]), oi = {
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
    "$route.path"(e, s) {
      if (this.$route.hash)
        return;
      const t = this.validator(e, s, this.$route), n = this.exclude.some((o) => o.endsWith("*") ? e.startsWith(o.slice(0, o.length - 1)) : e === o);
      t && !n && this.$refs.el.focus();
    }
  },
  computed: {
    title() {
      const e = this.getTitle(this.$route);
      return e || console.warn("RouteAnnouncer: No page title!"), e;
    }
  }
};
function li(e, s, t, n, o, l) {
  return l.title ? (u(), f("p", {
    key: 0,
    tabindex: "-1",
    class: "hidden-visually",
    ref: "el"
  }, w(l.title), 513)) : y("", !0);
}
const Mh = /* @__PURE__ */ j(oi, [["render", li]]), Ph = {
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
    const s = {
      types: {
        image: ({ value: t }) => Ln("img", {
          src: `${t.imageUrl}?max-w=1100&fit=crop`,
          alt: t.imageAlt
        })
      }
    };
    return (t, n) => e.content?.length ? (u(), S(Gr, {
      key: 0,
      class: "wysiwyg",
      unwrapped: e.noWrapper
    }, {
      default: k(() => [
        A(T(ro), {
          value: e.content,
          components: s
        }, null, 8, ["value"])
      ]),
      _: 1
    }, 8, ["unwrapped"])) : y("", !0);
  }
}, ri = {
  name: "AnimateNumber",
  props: {
    /**
     * The target number to animate to.
     */
    value: Number
  },
  watch: {
    value() {
      io.to(this, {
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
function ii(e, s, t, n, o, l) {
  return u(), f("span", null, [
    g(e.$slots, "default", { currentValue: o.currentValue }, () => [
      $(w(o.currentValue), 1)
    ])
  ]);
}
const zh = /* @__PURE__ */ j(ri, [["render", ii]]), ai = {
  key: 0,
  class: "progress-bar__header"
}, ci = {
  key: 1,
  class: "progress-bar__value progress-bar__value--amount"
}, ui = {
  key: 2,
  class: "progress-bar__icon"
}, di = { class: "progress-bar__track" }, fi = {
  key: 1,
  class: "progress-bar__values"
}, hi = { class: "progress-bar__value progress-bar__value--amount" }, mi = {
  key: 0,
  class: "progress-bar__value progress-bar__value--deficit"
}, gi = { class: "progress-bar__value progress-bar__value--total" }, Fh = {
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
      default: (e, s) => e
    },
    /**
     * Will put the amount only in header (there is a headerValue slot it you want to format)
     */
    amountInHeader: Boolean
  },
  setup(e) {
    const s = e, t = (r, i) => `${i === 0 ? 0 : r / i * 100}%`, n = _(() => s.indeterminate ? null : t(s.amount, s.total)), o = _(() => t(s.deficit, s.total)), l = _(() => ({
      "progress-bar": !0,
      "progress-bar--small": s.small,
      "progress-bar--positive": s.positive,
      "progress-bar--negative": s.negative,
      "progress-bar--loader": s.loader,
      "progress-bar--indeterminate": s.indeterminate,
      "type-small": s.small
      // From original component, seems to control font size
    }));
    return (r, i) => (u(), f("div", {
      class: m(l.value)
    }, [
      e.label || r.$slots.label || r.$slots.icon || e.amountInHeader ? (u(), f("div", ai, [
        e.label ? (u(), S(P(e.labelElement), {
          key: 0,
          class: m(["progress-bar__label", [e.classes.label, { "hidden-visually": e.labelHidden }]])
        }, {
          default: k(() => [
            g(r.$slots, "label", {}, () => [
              $(w(e.label), 1)
            ])
          ]),
          _: 3
        }, 8, ["class"])) : y("", !0),
        e.amountInHeader ? (u(), f("div", ci, [
          i[0] || (i[0] = h("strong", { class: "hidden-visually" }, "Amount:", -1)),
          g(r.$slots, "valueAmount", { value: e.amount }, () => [
            $(w(e.formatValue(e.amount, "amount")), 1)
          ])
        ])) : y("", !0),
        r.$slots.icon ? (u(), f("div", ui, [
          g(r.$slots, "icon")
        ])) : y("", !0)
      ])) : y("", !0),
      h("div", di, [
        h("div", {
          class: "progress-bar__bar",
          style: D({ width: n.value })
        }, null, 4),
        e.deficit > 0 ? (u(), f("div", {
          key: 0,
          class: "progress-bar__bar--deficit",
          style: D({ width: o.value })
        }, null, 4)) : y("", !0)
      ]),
      !e.noValues && !e.amountInHeader && !e.loader && !e.indeterminate ? (u(), f("div", fi, [
        h("div", hi, [
          i[1] || (i[1] = h("strong", { class: "hidden-visually" }, "Amount:", -1)),
          g(r.$slots, "valueAmount", { value: e.amount }, () => [
            $(w(e.formatValue(e.amount, "amount")), 1)
          ])
        ]),
        e.deficit > 0 ? (u(), f("div", mi, [
          i[2] || (i[2] = h("strong", { class: "hidden-visually" }, "Deficit: ", -1)),
          g(r.$slots, "valueDeficit", { value: e.deficit }, () => [
            $("-" + w(e.formatValue(e.deficit, "deficit")), 1)
          ])
        ])) : y("", !0),
        h("div", gi, [
          i[3] || (i[3] = h("strong", { class: "hidden-visually" }, "Total:", -1)),
          g(r.$slots, "valueTotal", { value: e.total }, () => [
            $(w(e.formatValue(e.total, "total")), 1)
          ])
        ])
      ])) : y("", !0)
    ], 2));
  }
}, vi = { class: "hidden-visually" }, pi = { class: "progress-circle__chart" }, yi = {
  class: "progress-circle__chart-svg",
  viewBox: "0 0 32 32"
}, bi = {
  key: 0,
  class: "progress-circle__chart-value"
}, _i = {
  key: 0,
  class: "progress-circle__value type-small-x"
}, Lh = {
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
    const s = e, t = E(null), n = (c) => c === 100 ? 101 : c, o = (c = 0) => {
      if (!t.value || !t.value.animate) return;
      const a = { strokeDasharray: [`${c} 100`, l.value] };
      t.value.animate(a, { duration: s.duration, easing: s.easing, fill: "forwards" });
    };
    ye(() => s.percentage, (c, a) => {
      c !== a && o(n(a));
    });
    const l = _(() => `${n(s.percentage)} 100`), r = _(() => s.outside || s.outsideBelow || s.small), i = _(() => {
      const c = {
        "progress-circle": !0,
        "progress-circle--small": s.small,
        "progress-circle--pie": s.pieStyle,
        "progress-circle--outside": r.value,
        "progress-circle--outside-below": s.outsideBelow,
        "progress-circle--no-mask": s.noMask
      };
      return s.status && (c[`progress-circle--${s.status}`] = !0), c;
    });
    return mt(() => {
      o();
    }), (c, a) => (u(), f("div", {
      class: m(i.value)
    }, [
      h("strong", vi, w(e.label), 1),
      h("div", pi, [
        (u(), f("svg", yi, [
          a[0] || (a[0] = h("circle", {
            class: "progress-circle__chart-track",
            r: "16",
            cx: "16",
            cy: "16"
          }, null, -1)),
          h("circle", {
            class: "progress-circle__chart-pie",
            ref_key: "pie",
            ref: t,
            r: "16",
            cx: "16",
            cy: "16",
            style: D({ strokeDasharray: l.value })
          }, null, 4),
          a[1] || (a[1] = h("circle", {
            class: "progress-circle__chart-mask",
            cx: "16",
            cy: "16"
          }, null, -1))
        ])),
        !r.value && !e.noValue ? (u(), f("strong", bi, [
          g(c.$slots, "value", { value: e.percentage }, () => [
            $(w(e.formatValue(e.percentage)), 1)
          ])
        ])) : y("", !0)
      ]),
      r.value && !e.noValue ? (u(), f("strong", _i, [
        g(c.$slots, "value", { value: e.percentage }, () => [
          $(w(e.formatValue(e.percentage)), 1)
        ])
      ])) : y("", !0)
    ], 2));
  }
};
function wi(e) {
  const s = /* @__PURE__ */ new Set();
  for (const t of e)
    for (const n of t)
      s.add(n);
  return s;
}
function Lt(e) {
  if (!e || e.length === 0) return /* @__PURE__ */ new Set();
  const s = e.sort((n, o) => n.size - o.size), t = new Set(s[0]);
  for (let n = 1; n < s.length; n++) {
    for (const o of t)
      s[n].has(o) || t.delete(o);
    if (t.size === 0) break;
  }
  return t;
}
function Ut(e, s, t) {
  if (!e || e.length === 0)
    return t;
  const n = e.map((o) => {
    const l = o.children.map((r) => {
      const i = `${o.uid}:${r.uid}`;
      return s.get(i) || /* @__PURE__ */ new Set();
    });
    return o.match === "all" ? Lt(l) : wi(l);
  });
  return Lt(n);
}
function Si(e, s) {
  return !s || !Array.isArray(s) ? [] : s.map((t) => {
    const n = /* @__PURE__ */ new Set(), o = t.getValue || ((i) => i[t.uid]);
    e.forEach((i) => {
      const c = o(i);
      Array.isArray(c) ? c.forEach((a) => a && n.add(a)) : c && n.add(c);
    });
    const l = t.getLabel || ((i) => i), r = [...n].map((i) => ({
      uid: i,
      label: l(i),
      selected: !1
    }));
    return r.sort((i, c) => String(i.label).localeCompare(String(c.label))), {
      ...t,
      children: r
    };
  });
}
function Vh(e, s = {}) {
  const t = (x, I) => {
    const L = x[I];
    return L === null || typeof L > "u" ? [] : Array.isArray(L) ? L : [L];
  }, {
    initialFacets: n,
    facetFields: o,
    initialSearchValue: l = "",
    initialSortType: r = "az",
    noDefaultSorts: i = !1,
    extraSortTypes: c = {},
    searchOptions: a = {},
    getItemFacet: d = t,
    getSortValue: v = (x) => x.title || x.label || "",
    countMode: p = "none"
    // 'none', 'simple', 'intuitive'
  } = s, b = (x) => x.sort((I, L) => {
    const M = v(I), H = v(L);
    return M && H ? String(M).localeCompare(String(H)) : M ? -1 : H ? 1 : 0;
  }), C = {
    az: { text: "A-Z", sort: b },
    za: { text: "Z-A", sort: (x) => b(x).reverse() }
  };
  function O(x) {
    return (x || []).map((I) => ({
      ...I,
      open: I.open || !1,
      children: I.children.map((L) => ({
        ...L,
        selected: L.selected || !1
      })),
      selectedCount: 0
    }));
  }
  const U = E([]), q = E(l), Z = E(r), z = _(() => !o || !e.value?.length ? null : Si(e.value, o)), J = _(() => ({
    ...i ? {} : C,
    ...c
  })), ce = _(() => {
    const x = /* @__PURE__ */ new Map(), I = ne.value;
    if (!I || !o) return x;
    const L = new Map(o.map((M) => {
      const H = M.getValue || ((X) => X[M.uid]);
      return [M.uid, H];
    }));
    for (let M = 0; M < I.length; M++) {
      const H = I[M];
      for (const X of o) {
        const G = L.get(X.uid)(H), te = Array.isArray(G) ? G : G ? [G] : [];
        for (const tt of te) {
          const Fe = `${X.uid}:${tt}`;
          x.has(Fe) || x.set(Fe, /* @__PURE__ */ new Set()), x.get(Fe).add(M);
        }
      }
    }
    return x;
  }), et = _(() => ({
    shouldSort: !0,
    keys: ["title", "label", "description", "author"],
    ...a
  })), ne = _(() => q.value?.length ? new ao(e.value, et.value).search(q.value).map((I) => I.item) : e.value), ee = _(() => {
    const x = [];
    return U.value.forEach((I) => {
      const L = I.children.filter((M) => M.selected);
      L.length > 0 && x.push({ ...I, children: L });
    }), x;
  }), ue = _(() => {
    if (!ee.value.length)
      return ne.value;
    const x = ce.value;
    if (x.size === 0 && ne.value.length > 0 && o?.length > 0)
      return [];
    const I = new Set(ne.value.map((H, X) => X)), L = Ut(ee.value, x, I), M = [];
    for (const H of L)
      M.push(ne.value[H]);
    return M;
  }), Te = _(() => {
    const x = J.value[Z.value]?.sort;
    return typeof x != "function" ? ue.value : x([...ue.value]);
  });
  function rs() {
    U.value.forEach((x) => {
      x.children && x.children.forEach((I) => I.selected = !1), x.selectedCount = 0;
    });
  }
  function xn({ groupUid: x, facetUid: I, selected: L }) {
    const M = U.value.find((H) => H.uid === x);
    if (M) {
      !M.multiple && L && M.children.forEach((X) => {
        X.uid !== I && (X.selected = !1);
      });
      const H = M.children.find((X) => X.uid === I);
      H && (H.selected = L), M.selectedCount = M.children.filter((X) => X.selected).length;
    }
  }
  return ye(z, (x) => {
    const I = O(n || x);
    I.forEach((L) => {
      L.selectedCount = L.children.filter((M) => M.selected).length;
    }), U.value = I;
  }, { immediate: !0 }), ye([ee, ne], ([x, I], [L, M]) => {
    if (!(p === "none" || !U.value.length) && !(x === L && I === M)) {
      if (p === "simple")
        U.value.forEach((H) => {
          const X = x.filter((G) => G.uid !== H.uid), ze = getFilteredItems(I, X);
          H.children.forEach((G) => {
            G.count = ze.filter((te) => d(te, H.uid).includes(G.uid)).length;
          });
        });
      else if (p === "intuitive") {
        const H = ce.value;
        if (H.size === 0 && ne.value.length > 0 && o?.length > 0)
          return;
        const X = new Set(ne.value.map((G, te) => te)), ze = Ut(x, H, X);
        U.value.forEach((G) => {
          G.children.forEach((te) => {
            const tt = `${G.uid}:${te.uid}`, Fe = H.get(tt) || /* @__PURE__ */ new Set();
            if (te.selected)
              if (G.multiple) {
                const Ae = Lt([ze, Fe]);
                te.count = Ae.size;
              } else
                te.count = ze.size;
            else {
              const Ae = [];
              for (const st of x)
                Ae.push({ ...st, children: [...st.children] });
              let Le = Ae.find((st) => st.uid === G.uid);
              Le || (Le = { ...G, children: [] }, Ae.push(Le)), G.multiple ? Le.children.push(te) : Le.children = [te];
              const Un = Ut(Ae, H, X);
              te.count = Un.size;
            }
          });
        });
      }
    }
  }, { deep: !0, immediate: !0 }), {
    facets: U,
    searchValue: q,
    selectedSort: Z,
    sortTypes: J,
    displayItems: Te,
    selectedFacets: ee,
    clearFilters: rs,
    handleFacetChange: xn
  };
}
const ki = ["onClick"], Hh = {
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
  setup(e, { emit: s }) {
    const t = e, n = s, o = _(() => {
      const i = [];
      return t.selectedFacets.forEach((c) => {
        c.children.forEach((a) => {
          i.push({
            ...a,
            groupUid: c.uid
          });
        });
      }), i;
    });
    function l(i) {
      n("facet-change", {
        groupUid: i.groupUid,
        facetUid: i.uid,
        selected: !1
      });
    }
    function r() {
      n("clear-filters");
    }
    return (i, c) => o.value.length ? (u(), f("div", {
      key: 0,
      class: m(["facets-active", e.classes.container])
    }, [
      (u(), S(P(e.labelElement), {
        class: m(["facets-active__label", e.classes.label])
      }, {
        default: k(() => [
          g(i.$slots, "label", {}, () => [
            c[0] || (c[0] = $(" Active Filters: ", -1))
          ])
        ]),
        _: 3
      }, 8, ["class"])),
      h("ul", {
        class: m(["facets-active__list", e.classes.list])
      }, [
        (u(!0), f(B, null, R(o.value, (a) => (u(), f("li", {
          class: m(["facets-active__item", e.classes.item]),
          key: `${a.groupUid}-${a.uid}`
        }, [
          h("button", {
            class: m(e.classes.filterButton),
            icon: "type:remove",
            onClick: (d) => l(a)
          }, [
            h("span", {
              class: m(e.classes.filterButtonText)
            }, [
              c[1] || (c[1] = h("span", { class: "hidden-visually" }, "Remove Active Filter:", -1)),
              $(" " + w(a.label), 1)
            ], 2),
            h("span", {
              class: m(e.classes.filterButtonIcon)
            }, [
              A(N, { icon: e.removeIcon }, null, 8, ["icon"])
            ], 2)
          ], 10, ki)
        ], 2))), 128))
      ], 2),
      h("button", {
        onClick: r,
        class: m(e.classes.clearButton)
      }, "Clear All", 2)
    ], 2)) : y("", !0);
  }
}, $i = { key: 0 }, ct = {
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
  setup(e, { emit: s }) {
    const t = e, n = s, o = _(() => t.type === "radio" ? [{ label: `All ${t.groupName}s`, uid: "" }, ...t.children] : t.children);
    function l(r) {
      if (t.type === "radio") {
        const i = r;
        t.children.forEach((c) => {
          const a = c.uid === i;
          c.selected !== a && n("facet-change", {
            groupUid: t.groupUid,
            facetUid: c.uid,
            selected: a
          });
        });
      } else {
        const i = new Set(r);
        t.children.forEach((c) => {
          const a = i.has(c.uid);
          c.selected !== a && n("facet-change", {
            groupUid: t.groupUid,
            facetUid: c.uid,
            selected: a
          });
        });
      }
    }
    return (r, i) => (u(), S(un, {
      class: "facets-list",
      legend: e.groupUid,
      type: e.type,
      options: o.value,
      compact: e.compact,
      "model-value": e.modelValue,
      "onUpdate:modelValue": l
    }, {
      default: k(({ option: c }) => [
        $(w(c.label) + " ", 1),
        c.count !== void 0 ? (u(), f("span", $i, "(" + w(c.count) + ")", 1)) : y("", !0)
      ]),
      _: 1
    }, 8, ["legend", "type", "options", "compact", "model-value"]));
  }
}, Ci = { class: "facets-filters" }, Nh = {
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
  setup(e, { emit: s }) {
    const t = s, n = (o) => o.multiple ? o.children.filter((l) => l.selected).map((l) => l.uid) : o.children.find((l) => l.selected)?.uid || "";
    return (o, l) => (u(), f("div", Ci, [
      (u(!0), f(B, null, R(e.facets, (r) => (u(), S(zt, {
        key: r.uid,
        classes: {
          container: ["facets-filters__group", e.classes.group],
          containerOpen: ["facets-filters__group--open", e.classes.groupOpen],
          containerClosed: ["facets-filters__group--closed", e.classes.groupClosed],
          trigger: ["facets-filters__group-trigger", e.classes.groupTrigger],
          content: ["facets-filters__group-content", e.classes.groupContent]
        },
        startOpen: r.open
      }, {
        trigger: k(({ isOpen: i }) => [
          g(o.$slots, "groupTrigger", {
            group: r,
            isOpen: i
          }, () => [
            $(w(r.name), 1)
          ])
        ]),
        default: k(() => [
          A(ct, {
            children: r.children.slice(0, e.maxVisible),
            groupUid: r.uid,
            groupName: r.name,
            type: r.multiple ? "checkbox" : "radio",
            compact: e.compact,
            "model-value": n(r),
            onFacetChange: l[0] || (l[0] = (i) => t("facet-change", i))
          }, null, 8, ["children", "groupUid", "groupName", "type", "compact", "model-value"]),
          r.children.length > e.maxVisible ? (u(), S(zt, {
            key: 0,
            class: m(["facets-filters__more-facets", e.classes.moreFacets])
          }, {
            trigger: k(({ isOpen: i }) => [
              $(w(i ? "View Less" : "Show More"), 1)
            ]),
            default: k(() => [
              A(ct, {
                children: r.children.slice(e.maxVisible),
                groupUid: r.uid,
                groupName: r.name,
                type: r.multiple ? "checkbox" : "radio",
                compact: e.compact,
                "model-value": n(r),
                onFacetChange: l[1] || (l[1] = (i) => t("facet-change", i))
              }, null, 8, ["children", "groupUid", "groupName", "type", "compact", "model-value"])
            ]),
            _: 2
          }, 1032, ["class"])) : y("", !0)
        ]),
        _: 2
      }, 1032, ["classes", "startOpen"]))), 128))
    ]));
  }
}, Ti = { class: "facets-filters" }, Dh = {
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
  setup(e, { emit: s }) {
    const t = s, n = (o) => o.multiple ? o.children.filter((l) => l.selected).map((l) => l.uid) : o.children.find((l) => l.selected)?.uid || "";
    return (o, l) => (u(), f("div", Ti, [
      (u(!0), f(B, null, R(e.facets, (r) => (u(), S(ms, {
        key: r.uid,
        modifiers: e.accordionModifiers,
        startOpen: r.open
      }, {
        trigger: k(({ isOpen: i }) => [
          g(o.$slots, "groupTrigger", {
            group: r,
            isOpen: i
          }, () => [
            $(w(r.name), 1)
          ])
        ]),
        default: k(() => [
          A(ct, {
            children: r.children.slice(0, e.maxVisible),
            groupUid: r.uid,
            groupName: r.name,
            type: r.multiple ? "checkbox" : "radio",
            compact: e.compact,
            "model-value": n(r),
            onFacetChange: l[0] || (l[0] = (i) => t("facet-change", i))
          }, null, 8, ["children", "groupUid", "groupName", "type", "compact", "model-value"]),
          r.children.length > e.maxVisible ? (u(), S(ms, {
            key: 0,
            class: m(["facets-filters__more-facets", e.classes.moreFacets]),
            modifiers: e.accordionModifiers
          }, {
            trigger: k(({ isOpen: i }) => [
              $(w(i ? "View Less" : "Show More"), 1)
            ]),
            default: k(() => [
              A(ct, {
                children: r.children.slice(e.maxVisible),
                groupUid: r.uid,
                groupName: r.name,
                type: r.multiple ? "checkbox" : "radio",
                compact: e.compact,
                "model-value": n(r),
                onFacetChange: l[1] || (l[1] = (i) => t("facet-change", i))
              }, null, 8, ["children", "groupUid", "groupName", "type", "compact", "model-value"])
            ]),
            _: 2
          }, 1032, ["class", "modifiers"])) : y("", !0)
        ]),
        _: 2
      }, 1032, ["modifiers", "startOpen"]))), 128))
    ]));
  }
}, Wh = {
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
  setup(e, { emit: s }) {
    const t = s, n = (i) => i.multiple ? i.children : [{ label: `All ${i.name}s`, uid: "" }, ...i.children], o = (i) => i.multiple ? i.children.filter((c) => c.selected).map((c) => c.uid) : i.children.find((c) => c.selected)?.uid || "", l = (i) => {
      const c = i.children.filter((d) => d.selected), a = c.length;
      return a === 0 ? "All" : i.multiple ? a === 1 ? c[0].label : `${a} selected` : c[0].label;
    };
    function r(i, c, a) {
      if (i.multiple) {
        const d = new Set(c);
        i.children.forEach((v) => {
          const p = d.has(v.uid);
          v.selected !== p && t("facet-change", {
            groupUid: i.uid,
            facetUid: v.uid,
            selected: p
          });
        });
      } else {
        const d = c;
        i.children.forEach((v) => {
          const p = v.uid === d;
          v.selected !== p && t("facet-change", {
            groupUid: i.uid,
            facetUid: v.uid,
            selected: p
          });
        }), a();
      }
    }
    return (i, c) => (u(), f("div", {
      class: m(e.classes.container)
    }, [
      (u(!0), f(B, null, R(e.facets, (a) => (u(), f("div", {
        key: a.uid,
        class: m(e.classes.group)
      }, [
        A(gt, {
          classes: {
            trigger: e.classes.trigger,
            content: e.classes.content
          }
        }, {
          trigger: k(() => [
            g(i.$slots, "trigger", {
              group: a,
              label: l(a)
            }, () => [
              h("span", null, [
                $(w(a.name) + ": ", 1),
                h("strong", null, w(l(a)), 1)
              ])
            ]),
            A(N, {
              class: m(e.classes.triggerIcon),
              icon: "fas fa-chevron-down"
            }, null, 8, ["class"])
          ]),
          default: k(({ close: d }) => [
            A(un, {
              legend: a.name,
              type: a.multiple ? "checkbox" : "radio",
              options: n(a),
              "model-value": o(a),
              "onUpdate:modelValue": (v) => r(a, v, d),
              hideInputs: e.hideInputs
            }, null, 8, ["legend", "type", "options", "model-value", "onUpdate:modelValue", "hideInputs"])
          ]),
          _: 2
        }, 1032, ["classes"])
      ], 2))), 128))
    ], 2));
  }
}, Ai = { class: "facets-dropdown-filters" }, Oi = ["for"], xi = ["id", "onChange"], Ui = { value: "" }, Bi = ["value", "selected"], Xh = {
  __name: "UluFacetsFilterSelects",
  props: {
    facets: {
      type: Array,
      default: () => []
    }
  },
  emits: ["facet-change"],
  setup(e, { emit: s }) {
    const t = s;
    function n(o, l) {
      const r = l.target.value;
      o.children.find((c) => c.selected)?.uid !== r && o.children.forEach((c) => {
        const a = c.uid === r;
        c.selected !== a && t("facet-change", {
          groupUid: o.uid,
          facetUid: c.uid,
          selected: a
        });
      });
    }
    return (o, l) => (u(), f("div", Ai, [
      (u(!0), f(B, null, R(e.facets, (r) => (u(), f("div", {
        class: "facets-dropdown-filters__group",
        key: r.uid
      }, [
        h("label", {
          for: `facet-dropdown-${r.uid}`,
          class: "facets-dropdown-filters__label"
        }, w(r.name), 9, Oi),
        h("select", {
          id: `facet-dropdown-${r.uid}`,
          class: "facets-dropdown-filters__select",
          onChange: (i) => n(r, i)
        }, [
          h("option", Ui, "All " + w(r.name) + "s", 1),
          (u(!0), f(B, null, R(r.children, (i) => (u(), f("option", {
            key: i.uid,
            value: i.uid,
            selected: i.selected
          }, w(i.label), 9, Bi))), 128))
        ], 40, xi)
      ]))), 128))
    ]));
  }
}, Ri = { class: "facets-header-layout" }, Ei = { class: "facets-header-layout__header" }, ji = { class: "facets-header-layout__main" }, Gh = {
  __name: "UluFacetsHeaderLayout",
  setup(e) {
    return (s, t) => (u(), f("div", Ri, [
      h("div", Ei, [
        g(s.$slots, "header")
      ]),
      h("div", ji, [
        g(s.$slots, "main")
      ])
    ]));
  }
}, Ii = { class: "facets-results" }, Mi = {
  key: 1,
  class: "facets-results__empty"
}, qh = {
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
    return (s, t) => (u(), f("div", Ii, [
      e.items.length ? (u(), S(Ns, {
        key: 0,
        tag: e.tag,
        name: e.transitionName,
        class: m(["facets-results__list", e.classes.list])
      }, {
        default: k(() => [
          (u(!0), f(B, null, R(e.items, (n, o) => (u(), f("li", {
            class: m(["facets-results__item", e.classes.item]),
            key: n.id || o
          }, [
            g(s.$slots, "item", {
              item: n,
              index: o
            })
          ], 2))), 128))
        ]),
        _: 3
      }, 8, ["tag", "name", "class"])) : (u(), f("div", Mi, [
        g(s.$slots, "empty", {}, () => [
          t[0] || (t[0] = h("p", null, "No matching items found.", -1))
        ])
      ]))
    ]));
  }
}, Pi = { class: "facets-search" }, zi = ["placeholder"], Yh = {
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
  setup(e, { emit: s }) {
    const t = e, n = s;
    let o = 0;
    const l = `facet-view-keyword-${++o}`, r = _({
      get() {
        return t.modelValue;
      },
      set(i) {
        n("update:modelValue", i);
      }
    });
    return (i, c) => (u(), f("div", Pi, [
      h("label", {
        class: m(e.classes.searchLabel),
        for: l
      }, [...c[1] || (c[1] = [
        h("strong", null, "Search", -1)
      ])], 2),
      Be(h("input", {
        id: l,
        class: m(e.classes.searchInput),
        "onUpdate:modelValue": c[0] || (c[0] = (a) => r.value = a),
        type: "text",
        placeholder: e.placeholder
      }, null, 10, zi), [
        [Vn, r.value]
      ])
    ]));
  }
}, Fi = { class: "facets-sidebar__header" }, Li = { class: "facets-sidebar__mobile-controls" }, Vi = { class: "facets-sidebar__body" }, Hi = { class: "facets-sidebar__main" }, Kh = {
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
    const s = E(!1), t = dt("uluIsMobile"), n = E(null), o = E(null), l = _(() => t.value ? o.value : n.value);
    return (r, i) => (u(), f("div", {
      class: m(["facets-sidebar", { "facets-sidebar--filters-hidden": T(t) }])
    }, [
      h("div", Fi, [
        g(r.$slots, "header")
      ]),
      Be(h("div", Li, [
        h("button", {
          class: m(e.classes.mobileButton),
          onClick: i[0] || (i[0] = (c) => s.value = !0)
        }, w(e.mobileButtonText), 3)
      ], 512), [
        [jt, T(t)]
      ]),
      h("div", Vi, [
        Be(h("div", {
          class: "facets-sidebar__sidebar",
          ref_key: "desktopTarget",
          ref: n
        }, null, 512), [
          [jt, !T(t)]
        ]),
        h("div", Hi, [
          g(r.$slots, "main")
        ])
      ]),
      T(t) ? (u(), S(Ks, {
        key: 0,
        modelValue: s.value,
        "onUpdate:modelValue": i[1] || (i[1] = (c) => s.value = c),
        position: "right",
        title: "Filters & Sort",
        allowResize: ""
      }, {
        default: k(() => [
          h("div", {
            class: "facets-sidebar__sidebar",
            ref_key: "mobileTarget",
            ref: o
          }, null, 512)
        ]),
        _: 1
      }, 8, ["modelValue"])) : y("", !0),
      l.value ? (u(), S(ft, {
        key: 1,
        to: l.value
      }, [
        g(r.$slots, "sidebar")
      ], 8, ["to"])) : y("", !0)
    ], 2));
  }
}, Ni = ["for"], Di = ["value", "id"], Wi = ["value"], Zh = {
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
  setup(e, { emit: s }) {
    let t = 0;
    const n = s, o = E(`ulu-facet-sort-${++t}`);
    return (l, r) => (u(), f("div", {
      class: m(["facets-sort", e.classes.sortForm])
    }, [
      h("label", {
        for: o.value,
        class: m(e.classes.sortFormLabel)
      }, [
        g(l.$slots, "default", {}, () => [
          r[1] || (r[1] = $("Sort:", -1))
        ])
      ], 10, Ni),
      h("select", {
        value: e.modelValue,
        onChange: r[0] || (r[0] = (i) => n("update:modelValue", i.target.value)),
        id: o.value,
        class: m(e.classes.sortFormSelect)
      }, [
        (u(!0), f(B, null, R(e.sortTypes, (i, c) => (u(), f("option", {
          value: c,
          key: c
        }, w(i.text), 9, Wi))), 128))
      ], 42, Di)
    ], 2));
  }
}, dn = Symbol(), fn = Symbol(), wt = Symbol(), Xi = {
  name: "ScrollAnchors",
  emits: ["section-change"],
  props: {
    firstItemActive: Boolean,
    /**
     * Observe 
     */
    observerOptions: {
      type: Object,
      default: () => ({
        root: null,
        threshhold: [0, 1],
        rootMargin: "-25% 0px -55% 0px"
        // root: null,
        // threshhold: [0,1],
        // rootMargin: "25% 0px 75% 0px"
      })
    }
  },
  data() {
    return {
      isMounted: !1,
      sections: []
      // Child components will section themselves
    };
  },
  /**
   * Interface for chil components to register themselves
   * - Uses symbols
   */
  provide() {
    return {
      [wt]: _(() => this.sections),
      [dn]: (e) => {
        const { titleId: s, title: t } = e, { element: n } = e.$refs;
        this.sections.push({
          instance: e,
          titleId: s,
          title: t,
          element: n,
          active: !1
        }), this.update();
      },
      [fn]: (e) => {
        const s = this.sections, t = s.findIndex((n) => n.instance === e);
        t > -1 && s.splice(t, 1), this.update();
      }
    };
  },
  methods: {
    update() {
      this.isMounted && this.observeItems();
    },
    getSectionIndex(e) {
      return this.sections.findIndex(({ element: s }) => e === s);
    },
    /**
     * Sets up a new observer to watch the section visibility
     */
    createObserver() {
      const { observerOptions: e, sections: s, removeActive: t, firstItemActive: n } = this;
      let o = 0;
      const l = (r) => {
        r.forEach(({ target: i, isIntersecting: c }) => {
          const a = this.getSectionIndex(i), d = i.offsetTop, v = s[a], p = a === 0 && o > d, b = a === s.length - 1 && o < d;
          v && this.$nextTick(() => {
            c ? (t(v), v.active = !0) : (p && !n || b && v.active) && t(), this.$emit("section-change", {
              section: v,
              sections: s,
              active: c
            });
          });
        });
      };
      this.observer = new IntersectionObserver(l, e);
    },
    /**
     * Add all slide elements as targets in observer
     */
    observeItems() {
      const { observer: e, sections: s } = this;
      e.disconnect(), s.forEach(({ element: t }) => {
        t && e.observe(t);
      });
    },
    removeActive(e = null) {
      this.sections.forEach((s) => {
        s !== e && (s.active = !1);
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
    const e = this.sections[0];
    this.firstItemActive && e && (e.active = !0), this.createObserver(), this.observeItems(), this.isMounted = !0;
  },
  unmounted() {
    this.destroyObserver();
  }
}, Gi = { class: "scroll-anchors" };
function qi(e, s, t, n, o, l) {
  return u(), f("div", Gi, [
    g(e.$slots, "default")
  ]);
}
const Jh = /* @__PURE__ */ j(Xi, [["render", qi]]), Yi = {
  name: "ScrollAnchorsNav",
  inject: {
    sections: { from: wt }
  },
  props: {
    element: {
      type: String,
      default: "nav"
    }
  }
}, Ki = ["href"];
function Zi(e, s, t, n, o, l) {
  return l.sections.length ? (u(), S(P(t.element), {
    key: 0,
    class: "scroll-anchors__nav"
  }, {
    default: k(() => [
      h("ul", null, [
        (u(!0), f(B, null, R(l.sections, (r, i) => (u(), f("li", {
          key: i,
          class: m({ "is-active": r.active })
        }, [
          h("a", {
            class: m({ "is-active": r.active }),
            href: `#${r.titleId}`
          }, w(r.title), 11, Ki)
        ], 2))), 128))
      ])
    ]),
    _: 1
  })) : y("", !0);
}
const Qh = /* @__PURE__ */ j(Yi, [["render", Zi]]), Ji = {
  name: "ScrollAnchorsNavAnimated",
  inject: {
    sections: { from: wt }
  },
  props: {
    /**
     * Element to use for container
     */
    element: {
      type: String,
      default: "nav"
    }
  },
  data() {
    return {
      linkRefs: {},
      indicatorAnimReady: !1
    };
  },
  computed: {
    indicatorStyles() {
      const { sections: e, linkRefs: s } = this, t = Object.keys(s).length;
      if (!e || !t)
        return !1;
      const n = e.findIndex((i) => i.active);
      if (n === -1)
        return !1;
      const o = this.linkRefs[n], { offsetTop: l, offsetHeight: r } = o;
      return {
        y: l,
        height: r,
        initial: this.inidica
      };
    }
  },
  watch: {
    indicatorStyles(e) {
      e && !this.indicatorAnimReady && Gs(() => {
        this.indicatorAnimReady = !0;
      });
    }
  },
  methods: {
    addLinkRef(e, s) {
      this.linkRefs[e] = s;
    }
  }
}, Qi = { class: "scroll-anchors__rail" }, ea = ["href"];
function ta(e, s, t, n, o, l) {
  return l.sections.length ? (u(), S(P(t.element), {
    key: 0,
    class: "scroll-anchors__nav scroll-anchors__nav--animated"
  }, {
    default: k(() => [
      h("ul", Qi, [
        (u(!0), f(B, null, R(l.sections, (r, i) => (u(), f("li", {
          key: i,
          class: m({ "is-active": r.active })
        }, [
          h("a", {
            class: m({ "is-active": r.active }),
            ref_for: !0,
            ref: (c) => l.addLinkRef(i, c),
            href: `#${r.titleId}`
          }, w(r.title), 11, ea)
        ], 2))), 128))
      ]),
      h("div", {
        class: m(["scroll-anchors__indicator", {
          "scroll-anchors__indicator--can-transition": o.indicatorAnimReady
        }]),
        ref: "indicator",
        style: D({
          opacity: l.indicatorStyles ? "1" : "0",
          transform: `translateY(${l.indicatorStyles.y}px)`,
          height: `${l.indicatorStyles.height}px`
        })
      }, null, 6)
    ]),
    _: 1
  })) : y("", !0);
}
const em = /* @__PURE__ */ j(Ji, [["render", ta]]), sa = {
  name: "ScrollAnchorsSection",
  props: {
    title: String,
    titleElement: {
      type: String,
      default: "h2"
    },
    titleClass: {
      type: String,
      default: "h2"
    },
    anchorId: String,
    wrapperClass: {
      type: String,
      default: "scroll-anchors__section"
    },
    activeClass: {
      type: String,
      default: "is-active"
    }
  },
  inject: {
    register: { from: dn },
    unregister: { from: fn },
    sections: { from: wt, default: () => _(() => []) }
  },
  data() {
    const { anchorId: e, title: s } = this;
    return {
      titleId: e || `sas-title-${co(s)}`
    };
  },
  computed: {
    section() {
      return this.sections.find((e) => e.instance === this);
    }
  },
  mounted() {
    this.register && this.register(this);
  },
  unmounted() {
    this.unregister && this.unregister(this);
  }
};
function na(e, s, t, n, o, l) {
  return u(), f("div", {
    class: m([t.wrapperClass, { [t.activeClass]: t.activeClass && l.section?.active }]),
    ref: "element"
  }, [
    (u(), S(P(t.titleElement), {
      class: m(t.titleClass),
      id: o.titleId
    }, {
      default: k(() => [
        $(w(t.title), 1)
      ]),
      _: 1
    }, 8, ["class", "id"])),
    g(e.$slots, "default", { section: l.section })
  ], 2);
}
const tm = /* @__PURE__ */ j(sa, [["render", na]]), oa = {
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
    return (s, t) => (u(), f("span", {
      class: m(["skeleton skeleton--text", {
        "skeleton--inline": e.inline,
        "skeleton--background-alt": e.alt,
        [`skeleton--width-${e.width}`]: e.width
      }])
    }, null, 2));
  }
}, sm = {
  __name: "UluShowSkeleton",
  props: {
    /**
     * If true will show whatever is passed to slot, else skeleton text
     */
    when: Boolean
  },
  setup(e) {
    return (s, t) => e.when ? (u(), S(oa, {
      key: 1,
      inline: ""
    })) : g(s.$slots, "default", { key: 0 });
  }
}, nm = {
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
    const s = e, t = _(() => uo(s.lines, () => {
      const o = rt(70, 100);
      let l = 0;
      const r = () => {
        const a = o - l, d = rt(15, a);
        return l += d, d;
      }, i = [];
      for (; l < o - 15; )
        i.push(r());
      const c = () => i.reduce((a, d) => a + d, 0);
      for (; c() >= o && i.pop(); )
        ;
      return i.map((a) => ({ width: a, alt: Math.random() < 0.5 }));
    }));
    return (n, o) => (u(), f("div", null, [
      (u(!0), f(B, null, R(t.value, (l, r) => (u(), f("div", { key: r }, [
        (u(!0), f(B, null, R(l, (i) => (u(), f("span", {
          key: i,
          class: m(["skeleton skeleton--text skeleton--inline", { "skeleton--background-alt": i.alt }]),
          style: D({ width: `${i.width}%` })
        }, null, 6))), 128))
      ]))), 128))
    ]));
  }
}, la = { class: "skeleton skeleton-block--media" }, om = {
  __name: "UluSkeletonMedia",
  setup(e) {
    return (s, t) => (u(), f("div", la, [
      A(N, { icon: "type:image" })
    ]));
  }
}, ra = {
  name: "SlideShow",
  emits: ["slide-change"],
  components: {
    UluIcon: N
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
      return this.slides.find(({ element: s }) => e === s);
    },
    /**
     * Provides scroll measurements
     */
    getScrollData() {
      const { scrollLeft: e, offsetWidth: s, scrollWidth: t } = this.$refs.track;
      return { scrollLeft: e, offsetWidth: s, scrollWidth: t };
    },
    /**
     * Determines the amount to scroll the track
     */
    resolveAmount(e) {
      const s = e === "next", { scrollAmount: t } = this, { scrollLeft: n, offsetWidth: o } = this.getScrollData();
      return typeof t == "function" ? t(e, this.$refs) : typeof t == "number" ? s ? n + t : n - t : s ? n + o : n - o;
    },
    /**
     * Scroll the track to a specified point 
     */
    scrollTo(e, s) {
      this.$refs.track.scrollTo({ left: e, top: 0, behavior: s });
    },
    /**
     * Scroll to specific index
     * @param {Number} index Slide index
     */
    to(e) {
      const s = this.slides[e], { track: t } = this.$refs;
      if (s) {
        let n = s.element.offsetLeft;
        const o = () => {
          s.element.focus(this.focusOptions), t.removeEventListener("scrollend", o);
        };
        t.addEventListener("scrollend", o), this.scrollTo(n, this.scrollBehaviorNav);
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
      const { observerOptions: e } = this, { track: s, nav: t } = this.$refs, n = (o) => {
        o.forEach((l) => {
          this.$nextTick(() => {
            const r = this.getSlideByElement(l.target);
            r.active = l.isIntersecting, this.$emit("slide-change", { slide: r, track: s, nav: t });
          });
        });
      };
      this.observer = new IntersectionObserver(n, {
        root: s,
        ...e
      });
    },
    /**
     * Add all slide elements as targets in observer
     */
    observeSlides() {
      const { observer: e, slides: s } = this;
      e.disconnect(), s.forEach(({ element: t }) => {
        t && e.observe(t);
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
}, ia = { class: "slideshow" }, aa = {
  class: "slideshow__control-context",
  ref: "context"
}, ca = {
  class: "slideshow__track-crop",
  ref: "crop"
}, ua = {
  class: "slideshow__track",
  ref: "track"
}, da = ["tabindex"], fa = { class: "slideshow__controls" }, ha = { class: "slideshow__controls-item slideshow__controls-item--previous" }, ma = ["disabled"], ga = { class: "slideshow__controls-item slideshow__controls-item--next" }, va = ["disabled"], pa = {
  key: 0,
  class: "slideshow__nav",
  ref: "nav"
}, ya = ["onClick"], ba = { class: "hidden-visually" };
function _a(e, s, t, n, o, l) {
  const r = W("UluIcon");
  return u(), f("div", ia, [
    h("div", aa, [
      h("div", ca, [
        h("ul", ua, [
          (u(!0), f(B, null, R(o.slides, (i, c) => (u(), f("li", {
            class: m(["slideshow__slide", { "is-active": i.active }]),
            key: c,
            tabindex: t.slideFocusable ? "0" : "-1",
            ref_for: !0,
            ref: (a) => {
              i.element = a;
            }
          }, [
            g(e.$slots, "slide", {
              item: i.item,
              index: c
            })
          ], 10, da))), 128))
        ], 512)
      ], 512),
      h("ul", fa, [
        h("li", ha, [
          h("button", {
            class: "slideshow__control-button slideshow__control-button--previous",
            "aria-label": "Scroll Right",
            onClick: s[0] || (s[0] = (...i) => l.previous && l.previous(...i)),
            disabled: !l.canScrollLeft
          }, [
            A(r, {
              class: "slideshow__control-icon",
              icon: "type:previous"
            })
          ], 8, ma)
        ]),
        h("li", ga, [
          h("button", {
            class: "slideshow__control-button slideshow__control-button--next",
            "aria-label": "Scroll Left",
            onClick: s[1] || (s[1] = (...i) => l.next && l.next(...i)),
            disabled: !l.canScrollRight
          }, [
            A(r, {
              class: "slideshow__control-icon",
              icon: "type:next"
            })
          ], 8, va)
        ])
      ])
    ], 512),
    t.noNav ? y("", !0) : (u(), f("ul", pa, [
      (u(!0), f(B, null, R(o.slides, (i, c) => (u(), f("li", {
        class: m(["slideshow__nav-item", { "is-active": i.active }]),
        ref_for: !0,
        ref: (a) => {
          i.navElement = a;
        },
        key: c
      }, [
        h("button", {
          class: m(["slideshow__nav-button", { "is-active": i.active }]),
          onClick: (a) => l.to(c)
        }, [
          g(e.$slots, "nav", {
            item: i.item,
            index: c,
            active: i.active
          }, () => [
            h("span", ba, "Item " + w(c + 1), 1)
          ])
        ], 10, ya)
      ], 2))), 128))
    ], 512))
  ]);
}
const wa = /* @__PURE__ */ j(ra, [["render", _a]]), Sa = {
  name: "ImageSlideShow",
  components: {
    UluSlideShow: wa
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
    slideChange({ slide: e, nav: s }) {
      const { active: t, navElement: n } = e;
      if (!n) return;
      const { offsetWidth: o, scrollLeft: l } = s, { offsetLeft: r, offsetWidth: i } = n, c = l + o, a = r + i;
      let d = null;
      console.log("left/right", l, c), t && n && (a > c ? d = l + (a - c) : r < l && (d = r), d !== null && s.scrollTo({ left: d, top: 0, behavior: "smooth" }));
    }
  }
}, ka = ["src", "alt"], $a = { class: "slideshow__image-actions" }, Ca = ["src", "alt"];
function Ta(e, s, t, n, o, l) {
  const r = W("AppButton"), i = W("UluSlideShow");
  return u(), S(i, {
    class: "slideshow--images",
    items: t.images,
    onSlideChange: l.slideChange
  }, {
    slide: k(({ item: c }) => [
      h("img", {
        src: c.src,
        alt: c.alt
      }, null, 8, ka),
      h("div", $a, [
        t.selectButton ? (u(), S(r, {
          key: 0,
          class: "type-small",
          icon: "plus",
          small: "",
          iconBefore: ""
        }, {
          default: k(() => [...s[0] || (s[0] = [
            $(" Select ", -1)
          ])]),
          _: 1
        })) : y("", !0)
      ])
    ]),
    nav: k(({ index: c }) => [
      h("img", {
        src: t.images[c].src,
        alt: `View image ${c}`
      }, null, 8, Ca)
    ]),
    _: 1
  }, 8, ["items", "onSlideChange"]);
}
const lm = /* @__PURE__ */ j(Sa, [["render", Ta]]), Aa = {
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
function Oa(e, s, t, n, o, l) {
  return u(), f("li", {
    class: m(["slideshow__slide", { "is-active": t.active }])
  }, [
    g(e.$slots, "default")
  ], 2);
}
const rm = /* @__PURE__ */ j(Aa, [["render", Oa]]), xa = {
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
}, Ua = ["id"], Ba = ["innerHTML"];
function Ra(e, s, t, n, o, l) {
  return u(!0), f(B, null, R(t.rows, (r, i) => (u(), f("tr", {
    key: `br-${i}`,
    id: t.optionalAttr(t.isActual && r.id),
    class: m(t.resolveClasses(t.classes.row, { row: r.data, rowIndex: i, isActual: t.isActual, foot: t.foot })),
    style: D({
      height: r.height
    })
  }, [
    (u(!0), f(B, null, R(t.rowColumns, (c, a) => (u(), S(P(c.rowHeader ? "th" : "td"), {
      id: t.optionalAttr(t.isActual && c.rowHeader && c.getRowHeaderId(i)),
      scope: t.optionalAttr(t.isActual && c.rowHeader && "row"),
      key: `bc-${a}`,
      headers: t.optionalAttr(t.isActual && t.getCellHeaders(c, i)),
      class: m(t.resolveClasses(c.class, { column: c, index: a, isActual: t.isActual, row: r, rowIndex: i, foot: t.foot })),
      style: D({
        width: t.columnWidth
      })
    }, {
      default: k(() => [
        e.$slots[c.slot] ? g(e.$slots, c.slot, {
          key: 0,
          row: r.data,
          column: c,
          rowIndex: i,
          index: a,
          foot: t.foot,
          isActual: t.isActual
        }) : c.html ? (u(), f("div", {
          key: 1,
          innerHTML: t.value({ row: r, column: c, rowIndex: i, isActual: t.isActual, foot: t.foot })
        }, null, 8, Ba)) : (u(), f(B, { key: 2 }, [
          $(w(t.value({ row: r, column: c, rowIndex: i, isActual: t.isActual, foot: t.foot })), 1)
        ], 64))
      ]),
      _: 2
    }, 1032, ["id", "scope", "headers", "class", "style"]))), 128))
  ], 14, Ua))), 128);
}
const Ea = /* @__PURE__ */ j(xa, [["render", Ra]]), ja = {
  name: "UluTableStickyTable",
  components: {
    UluTableStickyRows: Ea
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
      default: ({ row: e, column: s }) => e[s.key]
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
    handleSortFocus(e, s) {
      this.isActual && (e.sortFocused = s);
    },
    addHeaderRef(e, s) {
      const { headerRefs: t, isActual: n } = this;
      if (!n || !s) return;
      const { id: o } = e, l = t[o];
      l && this.$emit("actual-header-removed", l), this.$emit("actual-header-added", s), t[o] = s;
    },
    /**
     * False is no longer not printed
     */
    optionalAttr(e) {
      return e || null;
    },
    value({ row: e, column: s, rowIndex: t }) {
      const n = s.value;
      return n ? n({ row: e.data, column: s, rowIndex: t }) : this.getRowValue({ row: e.data, column: s, rowIndex: t });
    },
    getCellHeaders(e, s) {
      const t = e.headers.join(" "), n = e.getRowHeaders(s), o = n.length ? " " : "";
      return `${t}${o}${n}`;
    },
    getHeaderHeaders(e) {
      const s = e.headers.filter((t) => t !== e.id);
      if (s.length)
        return s.join(" ");
    }
  }
}, Ia = ["aria-hidden"], Ma = {
  key: 0,
  class: "table-sticky__caption"
}, Pa = ["id"], za = ["id", "rowspan", "colspan", "data-child-columns", "aria-sort", "scope", "headers"], Fa = ["innerHTML"], La = {
  class: "table-sticky__sort-icon",
  "aria-hidden": "true"
}, Va = { class: "table-sticky__sort-icon-inner" }, Ha = ["innerHTML"], Na = { key: 1 }, Da = { key: 2 };
function Wa(e, s, t, n, o, l) {
  const r = W("UluTableStickyRows");
  return u(), f("table", {
    class: m(t.resolveClasses(t.classes.table, { isActual: t.isActual })),
    "aria-hidden": t.isActual ? "false" : "true"
  }, [
    t.caption ? (u(), f("caption", Ma, w(t.caption), 1)) : y("", !0),
    h("thead", null, [
      (u(!0), f(B, null, R(t.headerRows, (i, c) => (u(), f("tr", {
        key: `hr-${c}`,
        id: l.optionalAttr(t.isActual && i.id),
        class: m(t.resolveClasses(t.classes.rowHeader, { row: i, rowIndex: c, isActual: t.isActual })),
        style: D({
          height: i.height
        })
      }, [
        (u(!0), f(B, null, R(i.columns, (a, d) => (u(), f("th", {
          key: `hc-${d}`,
          id: l.optionalAttr(t.isActual && a.id),
          rowspan: a.rowspan,
          colspan: a.colspan,
          "data-child-columns": a.columns && a.columns.length,
          class: m([
            {
              "sort-active": a.sortApplied,
              "sort-ascending": a.sortApplied && a.sortAscending,
              "sort-descending": a.sortApplied && !a.sortAscending
            },
            t.resolveClasses(a.classHeader, { column: a, index: d, isActual: t.isActual })
          ]),
          style: D({
            width: a.width
          }),
          "aria-sort": a.sort ? a.sortAscending ? "ascending" : "descending" : null,
          scope: l.optionalAttr(t.isActual && (a.colspan > 1 ? "colgroup" : "col")),
          headers: l.optionalAttr(t.isActual && l.getHeaderHeaders(a, c)),
          ref_for: !0,
          ref: (v) => l.addHeaderRef(a, v)
        }, [
          a.sortable ? (u(), S(P(t.isActual ? "button" : "div"), {
            key: 0,
            class: m(["table-sticky__sort-button", {
              "table-sticky__sort-button--focused": a.sortFocused
            }]),
            onClick: (v) => e.$emit("column-sorted", a),
            onFocus: (v) => l.handleSortFocus(a, !0),
            onBlur: (v) => l.handleSortFocus(a, !1),
            "aria-pressed": a.sortApplied ? "true" : "false"
          }, {
            default: k(() => [
              e.$slots[a.slotHeader] ? g(e.$slots, a.slotHeader, {
                key: 0,
                isActual: t.isActual,
                column: a,
                index: d
              }) : a.htmlTitle ? (u(), f("div", {
                key: 1,
                innerHTML: t.getColumnTitle({ column: a, index: d, isActual: t.isActual })
              }, null, 8, Fa)) : (u(), f(B, { key: 2 }, [
                $(w(t.getColumnTitle({ column: a, index: d, isActual: t.isActual })), 1)
              ], 64)),
              h("span", La, [
                h("span", Va, [
                  g(e.$slots, "sortIcon", {}, () => [
                    s[0] || (s[0] = $("▼", -1))
                  ])
                ])
              ])
            ]),
            _: 2
          }, 1064, ["class", "onClick", "onFocus", "onBlur", "aria-pressed"])) : (u(), f(B, { key: 1 }, [
            e.$slots[a.slotHeader] ? g(e.$slots, a.slotHeader, {
              key: 0,
              isActual: t.isActual,
              column: a,
              index: d
            }) : a.htmlTitle ? (u(), f("div", {
              key: 1,
              innerHTML: t.getColumnTitle({ column: a, index: d, isActual: t.isActual })
            }, null, 8, Ha)) : (u(), f(B, { key: 2 }, [
              $(w(t.getColumnTitle({ column: a, index: d, isActual: t.isActual })), 1)
            ], 64))
          ], 64))
        ], 14, za))), 128))
      ], 14, Pa))), 128))
    ]),
    t.rows ? (u(), f("tbody", Na, [
      A(r, {
        rows: t.rows,
        rowColumns: t.rowColumns,
        optionalAttr: l.optionalAttr,
        resolveClasses: t.resolveClasses,
        getCellHeaders: l.getCellHeaders,
        isActual: t.isActual,
        columnWidth: t.columnWidth,
        classes: t.classes,
        value: l.value
      }, xe({ _: 2 }, [
        R(e.$slots, (i, c) => ({
          name: c,
          fn: k((a) => [
            g(e.$slots, c, oe(re(a)))
          ])
        }))
      ]), 1032, ["rows", "rowColumns", "optionalAttr", "resolveClasses", "getCellHeaders", "isActual", "columnWidth", "classes", "value"])
    ])) : y("", !0),
    t.footerRows ? (u(), f("tfoot", Da, [
      A(r, {
        rows: t.footerRows,
        rowColumns: t.rowColumns,
        optionalAttr: l.optionalAttr,
        resolveClasses: t.resolveClasses,
        getCellHeaders: l.getCellHeaders,
        isActual: t.isActual,
        columnWidth: t.columnWidth,
        classes: t.classes,
        value: l.value,
        foot: ""
      }, xe({ _: 2 }, [
        R(e.$slots, (i, c) => ({
          name: c,
          fn: k((a) => [
            g(e.$slots, c, oe(re(a)))
          ])
        }))
      ]), 1032, ["rows", "rowColumns", "optionalAttr", "resolveClasses", "getCellHeaders", "isActual", "columnWidth", "classes", "value"])
    ])) : y("", !0)
  ], 10, Ia);
}
const Xa = /* @__PURE__ */ j(ja, [["render", Wa]]);
function Ga() {
  this.__data__ = [], this.size = 0;
}
function hn(e, s) {
  return e === s || e !== e && s !== s;
}
function St(e, s) {
  for (var t = e.length; t--; )
    if (hn(e[t][0], s))
      return t;
  return -1;
}
var qa = Array.prototype, Ya = qa.splice;
function Ka(e) {
  var s = this.__data__, t = St(s, e);
  if (t < 0)
    return !1;
  var n = s.length - 1;
  return t == n ? s.pop() : Ya.call(s, t, 1), --this.size, !0;
}
function Za(e) {
  var s = this.__data__, t = St(s, e);
  return t < 0 ? void 0 : s[t][1];
}
function Ja(e) {
  return St(this.__data__, e) > -1;
}
function Qa(e, s) {
  var t = this.__data__, n = St(t, e);
  return n < 0 ? (++this.size, t.push([e, s])) : t[n][1] = s, this;
}
function me(e) {
  var s = -1, t = e == null ? 0 : e.length;
  for (this.clear(); ++s < t; ) {
    var n = e[s];
    this.set(n[0], n[1]);
  }
}
me.prototype.clear = Ga;
me.prototype.delete = Ka;
me.prototype.get = Za;
me.prototype.has = Ja;
me.prototype.set = Qa;
function ec() {
  this.__data__ = new me(), this.size = 0;
}
function tc(e) {
  var s = this.__data__, t = s.delete(e);
  return this.size = s.size, t;
}
function sc(e) {
  return this.__data__.get(e);
}
function nc(e) {
  return this.__data__.has(e);
}
var mn = typeof global == "object" && global && global.Object === Object && global, oc = typeof self == "object" && self && self.Object === Object && self, ae = mn || oc || Function("return this")(), je = ae.Symbol, gn = Object.prototype, lc = gn.hasOwnProperty, rc = gn.toString, Ve = je ? je.toStringTag : void 0;
function ic(e) {
  var s = lc.call(e, Ve), t = e[Ve];
  try {
    e[Ve] = void 0;
    var n = !0;
  } catch {
  }
  var o = rc.call(e);
  return n && (s ? e[Ve] = t : delete e[Ve]), o;
}
var ac = Object.prototype, cc = ac.toString;
function uc(e) {
  return cc.call(e);
}
var dc = "[object Null]", fc = "[object Undefined]", vs = je ? je.toStringTag : void 0;
function Je(e) {
  return e == null ? e === void 0 ? fc : dc : vs && vs in Object(e) ? ic(e) : uc(e);
}
function kt(e) {
  var s = typeof e;
  return e != null && (s == "object" || s == "function");
}
var hc = "[object AsyncFunction]", mc = "[object Function]", gc = "[object GeneratorFunction]", vc = "[object Proxy]";
function vn(e) {
  if (!kt(e))
    return !1;
  var s = Je(e);
  return s == mc || s == gc || s == hc || s == vc;
}
var Bt = ae["__core-js_shared__"], ps = function() {
  var e = /[^.]+$/.exec(Bt && Bt.keys && Bt.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function pc(e) {
  return !!ps && ps in e;
}
var yc = Function.prototype, bc = yc.toString;
function $e(e) {
  if (e != null) {
    try {
      return bc.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var _c = /[\\^$.*+?()[\]{}|]/g, wc = /^\[object .+?Constructor\]$/, Sc = Function.prototype, kc = Object.prototype, $c = Sc.toString, Cc = kc.hasOwnProperty, Tc = RegExp(
  "^" + $c.call(Cc).replace(_c, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Ac(e) {
  if (!kt(e) || pc(e))
    return !1;
  var s = vn(e) ? Tc : wc;
  return s.test($e(e));
}
function Oc(e, s) {
  return e?.[s];
}
function Ce(e, s) {
  var t = Oc(e, s);
  return Ac(t) ? t : void 0;
}
var Ke = Ce(ae, "Map"), Ze = Ce(Object, "create");
function xc() {
  this.__data__ = Ze ? Ze(null) : {}, this.size = 0;
}
function Uc(e) {
  var s = this.has(e) && delete this.__data__[e];
  return this.size -= s ? 1 : 0, s;
}
var Bc = "__lodash_hash_undefined__", Rc = Object.prototype, Ec = Rc.hasOwnProperty;
function jc(e) {
  var s = this.__data__;
  if (Ze) {
    var t = s[e];
    return t === Bc ? void 0 : t;
  }
  return Ec.call(s, e) ? s[e] : void 0;
}
var Ic = Object.prototype, Mc = Ic.hasOwnProperty;
function Pc(e) {
  var s = this.__data__;
  return Ze ? s[e] !== void 0 : Mc.call(s, e);
}
var zc = "__lodash_hash_undefined__";
function Fc(e, s) {
  var t = this.__data__;
  return this.size += this.has(e) ? 0 : 1, t[e] = Ze && s === void 0 ? zc : s, this;
}
function Se(e) {
  var s = -1, t = e == null ? 0 : e.length;
  for (this.clear(); ++s < t; ) {
    var n = e[s];
    this.set(n[0], n[1]);
  }
}
Se.prototype.clear = xc;
Se.prototype.delete = Uc;
Se.prototype.get = jc;
Se.prototype.has = Pc;
Se.prototype.set = Fc;
function Lc() {
  this.size = 0, this.__data__ = {
    hash: new Se(),
    map: new (Ke || me)(),
    string: new Se()
  };
}
function Vc(e) {
  var s = typeof e;
  return s == "string" || s == "number" || s == "symbol" || s == "boolean" ? e !== "__proto__" : e === null;
}
function $t(e, s) {
  var t = e.__data__;
  return Vc(s) ? t[typeof s == "string" ? "string" : "hash"] : t.map;
}
function Hc(e) {
  var s = $t(this, e).delete(e);
  return this.size -= s ? 1 : 0, s;
}
function Nc(e) {
  return $t(this, e).get(e);
}
function Dc(e) {
  return $t(this, e).has(e);
}
function Wc(e, s) {
  var t = $t(this, e), n = t.size;
  return t.set(e, s), this.size += t.size == n ? 0 : 1, this;
}
function Me(e) {
  var s = -1, t = e == null ? 0 : e.length;
  for (this.clear(); ++s < t; ) {
    var n = e[s];
    this.set(n[0], n[1]);
  }
}
Me.prototype.clear = Lc;
Me.prototype.delete = Hc;
Me.prototype.get = Nc;
Me.prototype.has = Dc;
Me.prototype.set = Wc;
var Xc = 200;
function Gc(e, s) {
  var t = this.__data__;
  if (t instanceof me) {
    var n = t.__data__;
    if (!Ke || n.length < Xc - 1)
      return n.push([e, s]), this.size = ++t.size, this;
    t = this.__data__ = new Me(n);
  }
  return t.set(e, s), this.size = t.size, this;
}
function Pe(e) {
  var s = this.__data__ = new me(e);
  this.size = s.size;
}
Pe.prototype.clear = ec;
Pe.prototype.delete = tc;
Pe.prototype.get = sc;
Pe.prototype.has = nc;
Pe.prototype.set = Gc;
function qc(e, s) {
  for (var t = -1, n = e == null ? 0 : e.length; ++t < n && s(e[t], t, e) !== !1; )
    ;
  return e;
}
var ys = function() {
  try {
    var e = Ce(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}();
function Yc(e, s, t) {
  s == "__proto__" && ys ? ys(e, s, {
    configurable: !0,
    enumerable: !0,
    value: t,
    writable: !0
  }) : e[s] = t;
}
var Kc = Object.prototype, Zc = Kc.hasOwnProperty;
function Jc(e, s, t) {
  var n = e[s];
  (!(Zc.call(e, s) && hn(n, t)) || t === void 0 && !(s in e)) && Yc(e, s, t);
}
function Qc(e, s) {
  for (var t = -1, n = Array(e); ++t < e; )
    n[t] = s(t);
  return n;
}
function Qe(e) {
  return e != null && typeof e == "object";
}
var eu = "[object Arguments]";
function bs(e) {
  return Qe(e) && Je(e) == eu;
}
var pn = Object.prototype, tu = pn.hasOwnProperty, su = pn.propertyIsEnumerable, nu = bs(/* @__PURE__ */ function() {
  return arguments;
}()) ? bs : function(e) {
  return Qe(e) && tu.call(e, "callee") && !su.call(e, "callee");
}, ns = Array.isArray;
function ou() {
  return !1;
}
var yn = typeof exports == "object" && exports && !exports.nodeType && exports, _s = yn && typeof module == "object" && module && !module.nodeType && module, lu = _s && _s.exports === yn, ws = lu ? ae.Buffer : void 0, ru = ws ? ws.isBuffer : void 0, bn = ru || ou, iu = 9007199254740991, au = /^(?:0|[1-9]\d*)$/;
function cu(e, s) {
  var t = typeof e;
  return s = s ?? iu, !!s && (t == "number" || t != "symbol" && au.test(e)) && e > -1 && e % 1 == 0 && e < s;
}
var uu = 9007199254740991;
function _n(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= uu;
}
var du = "[object Arguments]", fu = "[object Array]", hu = "[object Boolean]", mu = "[object Date]", gu = "[object Error]", vu = "[object Function]", pu = "[object Map]", yu = "[object Number]", bu = "[object Object]", _u = "[object RegExp]", wu = "[object Set]", Su = "[object String]", ku = "[object WeakMap]", $u = "[object ArrayBuffer]", Cu = "[object DataView]", Tu = "[object Float32Array]", Au = "[object Float64Array]", Ou = "[object Int8Array]", xu = "[object Int16Array]", Uu = "[object Int32Array]", Bu = "[object Uint8Array]", Ru = "[object Uint8ClampedArray]", Eu = "[object Uint16Array]", ju = "[object Uint32Array]", V = {};
V[Tu] = V[Au] = V[Ou] = V[xu] = V[Uu] = V[Bu] = V[Ru] = V[Eu] = V[ju] = !0;
V[du] = V[fu] = V[$u] = V[hu] = V[Cu] = V[mu] = V[gu] = V[vu] = V[pu] = V[yu] = V[bu] = V[_u] = V[wu] = V[Su] = V[ku] = !1;
function Iu(e) {
  return Qe(e) && _n(e.length) && !!V[Je(e)];
}
function os(e) {
  return function(s) {
    return e(s);
  };
}
var wn = typeof exports == "object" && exports && !exports.nodeType && exports, We = wn && typeof module == "object" && module && !module.nodeType && module, Mu = We && We.exports === wn, Rt = Mu && mn.process, Ie = function() {
  try {
    var e = We && We.require && We.require("util").types;
    return e || Rt && Rt.binding && Rt.binding("util");
  } catch {
  }
}(), Ss = Ie && Ie.isTypedArray, Pu = Ss ? os(Ss) : Iu, zu = Object.prototype, Fu = zu.hasOwnProperty;
function Lu(e, s) {
  var t = ns(e), n = !t && nu(e), o = !t && !n && bn(e), l = !t && !n && !o && Pu(e), r = t || n || o || l, i = r ? Qc(e.length, String) : [], c = i.length;
  for (var a in e)
    Fu.call(e, a) && !(r && // Safari 9 has enumerable `arguments.length` in strict mode.
    (a == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    o && (a == "offset" || a == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    l && (a == "buffer" || a == "byteLength" || a == "byteOffset") || // Skip index properties.
    cu(a, c))) && i.push(a);
  return i;
}
var Vu = Object.prototype;
function Sn(e) {
  var s = e && e.constructor, t = typeof s == "function" && s.prototype || Vu;
  return e === t;
}
function kn(e, s) {
  return function(t) {
    return e(s(t));
  };
}
var Hu = kn(Object.keys, Object), Nu = Object.prototype, Du = Nu.hasOwnProperty;
function Wu(e) {
  if (!Sn(e))
    return Hu(e);
  var s = [];
  for (var t in Object(e))
    Du.call(e, t) && t != "constructor" && s.push(t);
  return s;
}
function Xu(e) {
  return e != null && _n(e.length) && !vn(e);
}
function Gu(e) {
  return Xu(e) ? Lu(e) : Wu(e);
}
var $n = typeof exports == "object" && exports && !exports.nodeType && exports, ks = $n && typeof module == "object" && module && !module.nodeType && module, qu = ks && ks.exports === $n, $s = qu ? ae.Buffer : void 0;
$s && $s.allocUnsafe;
function Yu(e, s) {
  return e.slice();
}
function Ku(e, s) {
  for (var t = -1, n = e == null ? 0 : e.length, o = 0, l = []; ++t < n; ) {
    var r = e[t];
    s(r, t, e) && (l[o++] = r);
  }
  return l;
}
function Zu() {
  return [];
}
var Ju = Object.prototype, Qu = Ju.propertyIsEnumerable, Cs = Object.getOwnPropertySymbols, ed = Cs ? function(e) {
  return e == null ? [] : (e = Object(e), Ku(Cs(e), function(s) {
    return Qu.call(e, s);
  }));
} : Zu;
function td(e, s) {
  for (var t = -1, n = s.length, o = e.length; ++t < n; )
    e[o + t] = s[t];
  return e;
}
var sd = kn(Object.getPrototypeOf, Object);
function nd(e, s, t) {
  var n = s(e);
  return ns(e) ? n : td(n, t(e));
}
function od(e) {
  return nd(e, Gu, ed);
}
var Vt = Ce(ae, "DataView"), Ht = Ce(ae, "Promise"), Nt = Ce(ae, "Set"), Dt = Ce(ae, "WeakMap"), Ts = "[object Map]", ld = "[object Object]", As = "[object Promise]", Os = "[object Set]", xs = "[object WeakMap]", Us = "[object DataView]", rd = $e(Vt), id = $e(Ke), ad = $e(Ht), cd = $e(Nt), ud = $e(Dt), fe = Je;
(Vt && fe(new Vt(new ArrayBuffer(1))) != Us || Ke && fe(new Ke()) != Ts || Ht && fe(Ht.resolve()) != As || Nt && fe(new Nt()) != Os || Dt && fe(new Dt()) != xs) && (fe = function(e) {
  var s = Je(e), t = s == ld ? e.constructor : void 0, n = t ? $e(t) : "";
  if (n)
    switch (n) {
      case rd:
        return Us;
      case id:
        return Ts;
      case ad:
        return As;
      case cd:
        return Os;
      case ud:
        return xs;
    }
  return s;
});
var dd = Object.prototype, fd = dd.hasOwnProperty;
function hd(e) {
  var s = e.length, t = new e.constructor(s);
  return s && typeof e[0] == "string" && fd.call(e, "index") && (t.index = e.index, t.input = e.input), t;
}
var Bs = ae.Uint8Array;
function ls(e) {
  var s = new e.constructor(e.byteLength);
  return new Bs(s).set(new Bs(e)), s;
}
function md(e, s) {
  var t = ls(e.buffer);
  return new e.constructor(t, e.byteOffset, e.byteLength);
}
var gd = /\w*$/;
function vd(e) {
  var s = new e.constructor(e.source, gd.exec(e));
  return s.lastIndex = e.lastIndex, s;
}
var Rs = je ? je.prototype : void 0, Es = Rs ? Rs.valueOf : void 0;
function pd(e) {
  return Es ? Object(Es.call(e)) : {};
}
function yd(e, s) {
  var t = ls(e.buffer);
  return new e.constructor(t, e.byteOffset, e.length);
}
var bd = "[object Boolean]", _d = "[object Date]", wd = "[object Map]", Sd = "[object Number]", kd = "[object RegExp]", $d = "[object Set]", Cd = "[object String]", Td = "[object Symbol]", Ad = "[object ArrayBuffer]", Od = "[object DataView]", xd = "[object Float32Array]", Ud = "[object Float64Array]", Bd = "[object Int8Array]", Rd = "[object Int16Array]", Ed = "[object Int32Array]", jd = "[object Uint8Array]", Id = "[object Uint8ClampedArray]", Md = "[object Uint16Array]", Pd = "[object Uint32Array]";
function zd(e, s, t) {
  var n = e.constructor;
  switch (s) {
    case Ad:
      return ls(e);
    case bd:
    case _d:
      return new n(+e);
    case Od:
      return md(e);
    case xd:
    case Ud:
    case Bd:
    case Rd:
    case Ed:
    case jd:
    case Id:
    case Md:
    case Pd:
      return yd(e);
    case wd:
      return new n();
    case Sd:
    case Cd:
      return new n(e);
    case kd:
      return vd(e);
    case $d:
      return new n();
    case Td:
      return pd(e);
  }
}
var js = Object.create, Fd = /* @__PURE__ */ function() {
  function e() {
  }
  return function(s) {
    if (!kt(s))
      return {};
    if (js)
      return js(s);
    e.prototype = s;
    var t = new e();
    return e.prototype = void 0, t;
  };
}();
function Ld(e) {
  return typeof e.constructor == "function" && !Sn(e) ? Fd(sd(e)) : {};
}
var Vd = "[object Map]";
function Hd(e) {
  return Qe(e) && fe(e) == Vd;
}
var Is = Ie && Ie.isMap, Nd = Is ? os(Is) : Hd, Dd = "[object Set]";
function Wd(e) {
  return Qe(e) && fe(e) == Dd;
}
var Ms = Ie && Ie.isSet, Xd = Ms ? os(Ms) : Wd, Cn = "[object Arguments]", Gd = "[object Array]", qd = "[object Boolean]", Yd = "[object Date]", Kd = "[object Error]", Tn = "[object Function]", Zd = "[object GeneratorFunction]", Jd = "[object Map]", Qd = "[object Number]", An = "[object Object]", ef = "[object RegExp]", tf = "[object Set]", sf = "[object String]", nf = "[object Symbol]", of = "[object WeakMap]", lf = "[object ArrayBuffer]", rf = "[object DataView]", af = "[object Float32Array]", cf = "[object Float64Array]", uf = "[object Int8Array]", df = "[object Int16Array]", ff = "[object Int32Array]", hf = "[object Uint8Array]", mf = "[object Uint8ClampedArray]", gf = "[object Uint16Array]", vf = "[object Uint32Array]", F = {};
F[Cn] = F[Gd] = F[lf] = F[rf] = F[qd] = F[Yd] = F[af] = F[cf] = F[uf] = F[df] = F[ff] = F[Jd] = F[Qd] = F[An] = F[ef] = F[tf] = F[sf] = F[nf] = F[hf] = F[mf] = F[gf] = F[vf] = !0;
F[Kd] = F[Tn] = F[of] = !1;
function lt(e, s, t, n, o, l) {
  var r;
  if (r !== void 0)
    return r;
  if (!kt(e))
    return e;
  var i = ns(e);
  if (i)
    r = hd(e);
  else {
    var c = fe(e), a = c == Tn || c == Zd;
    if (bn(e))
      return Yu(e);
    if (c == An || c == Cn || a && !o)
      r = a ? {} : Ld(e);
    else {
      if (!F[c])
        return o ? e : {};
      r = zd(e, c);
    }
  }
  l || (l = new Pe());
  var d = l.get(e);
  if (d)
    return d;
  l.set(e, r), Xd(e) ? e.forEach(function(b) {
    r.add(lt(b, s, t, b, e, l));
  }) : Nd(e) && e.forEach(function(b, C) {
    r.set(C, lt(b, s, t, C, e, l));
  });
  var v = od, p = i ? void 0 : v(e);
  return qc(p || e, function(b, C) {
    p && (C = b, b = e[C]), Jc(r, C, lt(b, s, t, C, e, l));
  }), r;
}
var pf = 1, yf = 4;
function bf(e) {
  return lt(e, pf | yf);
}
const Et = (e) => e.every((s) => typeof s == "object"), Ps = !0, On = () => window.innerWidth;
let zs = On();
const _f = {
  name: "UluTableSticky",
  components: {
    UluTableStickyTable: Xa
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
      required: Ps
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
      validator: Et,
      required: Ps
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
      validator: Et
      // required
    },
    /**
     * Array of rows for footer (tfoot)
     */
    footerRows: {
      type: Array,
      validator: Et
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
      resizeHandler: Wt(this.onResize.bind(this), 500, !0),
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
      const e = this.currentColumns, s = [], t = (o) => {
        o.columns ? o.columns.forEach(t) : s.push(o);
      };
      e.forEach(t);
      let n = [];
      return s.forEach((o, l) => {
        const r = n.slice();
        o.getRowHeaders = (i) => r.map((c) => c(i)).join(" "), o.rowHeader && (o.getRowHeaderId = (i) => `${this.idPrefix}-rh-${i}-${l}`, n.push(o.getRowHeaderId));
      }), s;
    },
    headerHeight() {
      return this.headerRows.reduce((e, s) => e + s.boxHeight, 0);
    },
    /**
     * Reduce the array of column header rows to the first row, first column
     */
    headerRowsFirst() {
      const e = this.headerRows[0], t = [Object.assign({}, e.columns[0], { rowspan: 1, colspan: 1 })];
      return [{
        ...e,
        columns: t,
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
      const s = (t) => {
        t.forEach((n) => {
          e.key !== n.key && (n.sortApplied = !1, n.sortAscending = !1), n.columns && s(n.columns);
        });
      };
      s(this.currentColumns);
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
    resolveClasses(e, s = null) {
      if (!(typeof e > "u"))
        return typeof e == "function" ? e(s) : e;
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
      const e = this.idCreator("c"), s = bf(this.columns), t = (n, o) => {
        n.id = e(), n.parent = o, n.width = "auto", n.boxWidth = null, n.sortApplied = !1, n.sortAscending = !1, n.sortFocused = !1;
        let l = [];
        o && (o.headers && o.headers.length ? l = [...o.headers] : l.push(o.id)), l.push(n.id), n.headers = l, n.columns ? n.columns.forEach((r) => t(r, n)) : !n.key && !n.value && !n.slot && console.warn("UluTableSticky: Missing 'key', 'value' or 'slot' in column configuration for", n);
      };
      return s.forEach((n) => t(n, null)), s;
    },
    /**
     * Conversion of the columns (which are nested hierarchy) to a flat list of columns 
     * sorted by the way they need to be displayed in rows 
     * - Used for nested headers
     * - Transform nested data into row arrays
     */
    createHeaderRows(e) {
      const s = this.idCreator("hr"), t = e.reduce(this.maxColumnChildren, 1), n = "auto", o = new Array(t).fill(null).map(() => ({
        height: n,
        boxHeight: null,
        columns: [],
        id: s()
      }));
      function l(r, i) {
        const c = i.columns;
        c && c.forEach((a) => l(1 + r, a)), i.rowspan = c ? 1 : t - r, i.colspan = c ? c.reduce((a, d) => a + d.colspan, 0) : 1, o[r].columns.push(i);
      }
      return e.forEach((r) => l(0, r)), o;
    },
    /**
     * Creates row array for internal use
     * - Avoid mutating user's prop
     */
    createRows(e) {
      const s = this.idCreator(e ? "fr" : "br"), t = e ? this.footerRows : this.rows;
      return t ? t.map((n) => ({
        height: null,
        boxHeight: null,
        data: n,
        id: s()
      })) : [];
    },
    onResize() {
      const e = On();
      zs !== e && (zs = e, this.resizing ? (this.resizing = !1, this.setTableSizes(), this.checkOverflowX(), this.syncScrollLeft()) : (this.resizing = !0, this.removeTableSizes()));
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
      let s = 0;
      return () => `${this.idPrefix}-${e}-${++s}`;
    },
    /**
     * Recursive function used as a reducer to return the deepest nested columns
     */
    maxColumnChildren(e, s) {
      const t = s.columns ? s.columns.reduce(this.maxColumnChildren) + 1 : 1;
      return e > t ? e : t;
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
      const e = (s) => {
        s.boxHeight = null, s.height = "auto";
      };
      this.tableWidth = "auto", this.headerRows.forEach((s) => {
        e(s), s.columns.forEach((t) => {
          t.boxWidth = null, t.width = "auto";
        });
      }), this.firstColumnSticky && (this.currentRows.forEach((s) => e(s)), this.currentFooterRows.forEach((s) => e(s)));
    },
    scrollLeft() {
      const e = this.$refs.display, s = e.scrollLeft, t = this.scrollControlAmount, n = s - t;
      e.scroll({
        left: n < 0 ? 0 : n,
        behavior: "smooth"
      });
    },
    scrollRight() {
      const e = this.$refs.display, s = e.scrollWidth, t = e.scrollLeft, n = this.scrollControlAmount, o = t + n;
      e.scroll({
        left: o > s ? e.scrollWidth : o,
        behavior: "smooth"
      });
    },
    /**
     * Cleanup function for when component is not in use
     */
    setTableSizes() {
      const e = (n, o) => Math.ceil(n.getBoundingClientRect()[o]);
      this.tableWidth = `${e(this.$refs.table.$el, "width")}px`;
      const s = (n) => document.getElementById(n.id), t = (n) => {
        const o = s(n);
        o && (n.boxHeight = e(o, "height"), n.height = `${n.boxHeight}px`);
      };
      this.headerRows.forEach((n) => {
        t(n), n.columns.forEach((o) => {
          const l = s(o);
          l && (o.boxWidth = e(l, "width"), o.width = `${o.boxWidth}px`);
        });
      }), this.firstColumnSticky && (this.currentRows.forEach((n) => t(n)), this.currentFooterRows.forEach((n) => t(n))), this.$nextTick(() => {
        this.sizesCalculated = !0, Gs(() => {
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
}, wf = { class: "table-sticky__sticky-wrap table-sticky__sticky-wrap--header" }, Sf = { class: "table-sticky__header-wrap" }, kf = { class: "table-sticky__sticky-wrap table-sticky__sticky-wrap--first-column-header" }, $f = { class: "table-sticky__sticky-wrap table-sticky__sticky-wrap--controls" }, Cf = {
  key: 2,
  class: "table-sticky__controls-inner"
}, Tf = ["disabled"], Af = ["disabled"], Of = {
  ref: "display",
  class: "table-sticky__display"
};
function xf(e, s, t, n, o, l) {
  const r = W("UluTableStickyTable");
  return u(), f("div", {
    class: m(["table-sticky", {
      "table-sticky--overflown-x": o.overflownX,
      "table-sticky--can-scroll-right": o.canScrollRight,
      "table-sticky--can-scroll-left": o.canScrollLeft
    }])
  }, [
    h("div", wf, [
      h("div", Sf, [
        A(r, {
          ref: "header",
          class: "table-sticky__table table-sticky__table--header",
          classes: t.classes,
          caption: t.caption,
          resolveClasses: l.resolveClasses,
          getColumnTitle: t.getColumnTitle,
          idPrefix: t.idPrefix,
          headerRows: o.headerRows,
          style: D({
            opacity: o.sizesCalculated ? "1" : "0",
            pointerEvents: o.sizesCalculated ? "auto" : "none",
            width: o.tableWidth
          }),
          onColumnSorted: l.applySort
        }, xe({ _: 2 }, [
          R(e.$slots, (i, c) => ({
            name: c,
            fn: k((a) => [
              g(e.$slots, c, oe(re(a)))
            ])
          }))
        ]), 1032, ["classes", "caption", "resolveClasses", "getColumnTitle", "idPrefix", "headerRows", "style", "onColumnSorted"])
      ])
    ]),
    h("div", kf, [
      t.firstColumnSticky ? (u(), S(r, {
        key: 0,
        ref: "firstColumnHeader",
        class: "table-sticky__table table-sticky__table--first-column-header",
        classes: t.classes,
        caption: t.caption,
        resolveClasses: l.resolveClasses,
        getColumnTitle: t.getColumnTitle,
        idPrefix: t.idPrefix,
        headerRows: l.headerRowsFirst,
        style: D({
          opacity: l.headerOpacityX,
          pointerEvents: l.headerVisibleX ? "auto" : "none"
        }),
        onColumnSorted: l.applySort
      }, xe({ _: 2 }, [
        R(e.$slots, (i, c) => ({
          name: c,
          fn: k((a) => [
            g(e.$slots, c, oe(re(a)))
          ])
        }))
      ]), 1032, ["classes", "caption", "resolveClasses", "getColumnTitle", "idPrefix", "headerRows", "style", "onColumnSorted"])) : y("", !0)
    ]),
    h("div", $f, [
      Be(h("div", {
        class: m(["table-sticky__controls", l.resolveClasses(t.classes.controls)]),
        ref: "controls"
      }, [
        e.$slots.controls ? g(e.$slots, "controls", {
          key: 0,
          scrollLeft: l.scrollLeft,
          scrollRight: l.scrollRight,
          canScrollLeft: o.canScrollLeft,
          canScrollRight: o.canScrollRight
        }) : t.controlsComponent ? (u(), S(P(t.controlsComponent), {
          key: 1,
          scrollLeft: l.scrollLeft,
          scrollRight: l.scrollRight,
          canScrollLeft: o.canScrollLeft,
          canScrollRight: o.canScrollRight
        }, null, 8, ["scrollLeft", "scrollRight", "canScrollLeft", "canScrollRight"])) : (u(), f("div", Cf, [
          h("button", {
            class: m(["table-sticky__control table-sticky__control--left", l.resolveClasses(t.classes.controlButton)]),
            "aria-label": "Scroll Left",
            onClick: s[0] || (s[0] = (...i) => l.scrollLeft && l.scrollLeft(...i)),
            disabled: !o.canScrollLeft
          }, [
            g(e.$slots, "controlLeft", {}, () => [
              s[2] || (s[2] = $(" ← ", -1))
            ])
          ], 10, Tf),
          h("button", {
            class: m(["table-sticky__control table-sticky__control--right", l.resolveClasses(t.classes.controlButton)]),
            "aria-label": "Scroll Right",
            onClick: s[1] || (s[1] = (...i) => l.scrollRight && l.scrollRight(...i)),
            disabled: !o.canScrollRight
          }, [
            g(e.$slots, "controlRight", {}, () => [
              s[3] || (s[3] = $(" → ", -1))
            ])
          ], 10, Af)
        ]))
      ], 2), [
        [jt, l.controlsShown]
      ])
    ]),
    h("div", Of, [
      A(r, {
        ref: "table",
        class: "table-sticky__table table-sticky__table--actual",
        classes: t.classes,
        resolveClasses: l.resolveClasses,
        isActual: "",
        headerRows: o.headerRows,
        rows: o.currentRows,
        footerRows: o.currentFooterRows,
        rowColumns: l.rowColumns,
        caption: t.caption,
        idPrefix: t.idPrefix,
        getRowValue: t.getRowValue,
        getColumnTitle: t.getColumnTitle,
        onVnodeMounted: l.tableReady,
        onActualHeaderRemoved: l.headerRemoved,
        onActualHeaderAdded: l.headerAdded,
        onColumnSorted: l.applySort
      }, xe({ _: 2 }, [
        R(e.$slots, (i, c) => ({
          name: c,
          fn: k((a) => [
            g(e.$slots, c, oe(re(a)))
          ])
        }))
      ]), 1032, ["classes", "resolveClasses", "headerRows", "rows", "footerRows", "rowColumns", "caption", "idPrefix", "getRowValue", "getColumnTitle", "onVnodeMounted", "onActualHeaderRemoved", "onActualHeaderAdded", "onColumnSorted"])
    ], 512),
    t.firstColumnSticky ? (u(), S(r, {
      key: 0,
      ref: "firstColumn",
      class: "table-sticky__table table-sticky__table--first-column",
      classes: t.classes,
      resolveClasses: l.resolveClasses,
      caption: t.caption,
      headerRows: l.headerRowsFirst,
      columnWidth: l.firstColumnSize.width,
      rows: o.currentRows,
      footerRows: o.currentFooterRows,
      rowColumns: l.rowColumnsFirst,
      idPrefix: t.idPrefix,
      getRowValue: t.getRowValue,
      getColumnTitle: t.getColumnTitle,
      style: D({
        opacity: l.headerOpacityX,
        pointerEvents: l.headerVisibleX ? "auto" : "none"
      }),
      onColumnSorted: l.applySort
    }, xe({ _: 2 }, [
      R(e.$slots, (i, c) => ({
        name: c,
        fn: k((a) => [
          g(e.$slots, c, oe(re(a)))
        ])
      }))
    ]), 1032, ["classes", "resolveClasses", "caption", "headerRows", "columnWidth", "rows", "footerRows", "rowColumns", "idPrefix", "getRowValue", "getColumnTitle", "style", "onColumnSorted"])) : y("", !0)
  ], 2);
}
const im = /* @__PURE__ */ j(_f, [["render", xf]]), am = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  dom: _o,
  router: $l
}, Symbol.toStringTag, { value: "Module" }));
export {
  ms as UluAccordion,
  $h as UluAdaptiveLayout,
  ah as UluAlert,
  zh as UluAnimateNumber,
  zl as UluBadge,
  ch as UluBadgeStack,
  Ah as UluBreadcrumb,
  Ul as UluButton,
  uh as UluButtonVerbose,
  dh as UluCallout,
  fh as UluCard,
  zt as UluCollapsible,
  Bh as UluConditionalText,
  Gr as UluConditionalWrapper,
  Ch as UluDataGrid,
  hh as UluDefinitionList,
  Qf as UluDropdown,
  Rh as UluEmpty,
  Eh as UluEmptyView,
  mh as UluExternalLink,
  Hh as UluFacetsActiveFilters,
  Dh as UluFacetsFilterAccordions,
  Nh as UluFacetsFilterLists,
  Wh as UluFacetsFilterPopovers,
  Xh as UluFacetsFilterSelects,
  Gh as UluFacetsHeaderLayout,
  ct as UluFacetsList,
  qh as UluFacetsResults,
  Yh as UluFacetsSearch,
  Kh as UluFacetsSidebarLayout,
  Zh as UluFacetsSort,
  yh as UluFileDisplay,
  bh as UluFormFile,
  _h as UluFormMessage,
  wh as UluFormSelect,
  Sh as UluFormText,
  N as UluIcon,
  lm as UluImageSlideShow,
  gh as UluList,
  vh as UluMain,
  ln as UluMenu,
  ul as UluMenuStack,
  Ks as UluModal,
  Oh as UluNavStrip,
  sh as UluOverflowPopover,
  xh as UluPager,
  jh as UluPlaceholderImage,
  Ih as UluPlaceholderText,
  Fh as UluProgressBar,
  Lh as UluProgressCircle,
  Mh as UluRouteAnnouncer,
  Ph as UluSanityRichText,
  Jh as UluScrollAnchors,
  Qh as UluScrollAnchorsNav,
  em as UluScrollAnchorsNavAnimated,
  tm as UluScrollAnchorsSection,
  kh as UluSearchForm,
  un as UluSelectableMenu,
  sm as UluShowSkeleton,
  nm as UluSkeletonContent,
  om as UluSkeletonMedia,
  oa as UluSkeletonText,
  Uh as UluSkipLink,
  wa as UluSlideShow,
  rm as UluSlideShowSlide,
  ph as UluSpokeSpinner,
  nh as UluTab,
  oh as UluTabGroup,
  lh as UluTabList,
  rh as UluTabPanel,
  ih as UluTabPanels,
  im as UluTableSticky,
  Ea as UluTableStickyRows,
  Xa as UluTableStickyTable,
  on as UluTag,
  Th as UluTitleRail,
  Jf as breakpointsPlugin,
  Xf as corePlugin,
  Kf as modalsPlugin,
  Yf as popoversPlugin,
  Zf as toastPlugin,
  Xo as useBreakpointManager,
  th as useDocumentTitle,
  Vh as useFacets,
  Oo as useIcon,
  ie as useModifiers,
  eh as usePagination,
  _e as useRequiredInject,
  Gf as useTooltip,
  qf as useTooltipFollow,
  qs as useUluFloating,
  fl as useWindowResize,
  am as utils
};
