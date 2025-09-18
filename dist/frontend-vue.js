import { reactive as ct, inject as ut, ref as R, computed as b, watch as ye, toRef as Bn, createElementBlock as f, openBlock as u, normalizeStyle as D, unref as T, normalizeClass as m, createCommentVNode as y, createBlock as w, resolveDynamicComponent as z, normalizeProps as ne, mergeProps as J, Fragment as U, createTextVNode as C, toDisplayString as _, Teleport as dt, createVNode as A, resolveDirective as zs, withDirectives as Ue, createElementVNode as h, renderSlot as g, withKeys as Fs, nextTick as Ls, markRaw as be, watchEffect as ft, defineAsyncComponent as Rn, toRefs as En, toValue as st, resolveComponent as W, withModifiers as jn, useSlots as Vs, renderList as B, TransitionGroup as Hs, withCtx as S, onMounted as ht, onBeforeUnmount as Ns, isRef as In, hasInjectionContext as Mn, getCurrentInstance as Pn, onDeactivated as zn, onActivated as Fn, onUnmounted as Ds, guardReactiveProps as re, h as Ln, vModelText as Vn, vShow as Et, createSlots as Oe } from "vue";
import { useFloating as Hn, autoUpdate as Nn, inline as Dn, offset as Wn, flip as Xn, shift as Gn, arrow as qn } from "@floating-ui/vue";
import { normalizeClasses as rs } from "@ulu/utils/templating.js";
import { preventScroll as Yn, wasClickOutside as Kn, isBrowser as Zn } from "@ulu/utils/browser/dom.js";
import { Resizer as Jn } from "@ulu/frontend/js/ui/resizer.js";
import { debounce as Dt } from "@ulu/utils/performance.js";
import { useRoute as Ws, useRouter as Qn, RouterLink as Xe } from "vue-router";
import { Tab as eo, TabGroup as to, TabList as so, TabPanel as no, TabPanels as oo } from "@headlessui/vue";
import { setPositionClasses as lo } from "@ulu/frontend/js/utils/dom.js";
import { randomInt as lt } from "@ulu/utils/random.js";
import { PortableText as ro } from "@portabletext/vue";
import io from "gsap";
import ao from "fuse.js";
import { runAfterFramePaint as Xs } from "@ulu/utils/browser/performance.js";
import { urlize as co } from "@ulu/utils/string.js";
import { arrayCreate as uo } from "@ulu/utils/array.js";
const is = {
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
  const t = ct({ ...is }), { iconsByType: n, ...o } = s || {};
  o && Object.assign(t, o);
  const l = {
    // Methods to interact with settings
    getSettings() {
      return t;
    },
    getDefaultSettings() {
      return { ...is };
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
}, as = {};
function _e(e) {
  const s = ut(e, as);
  if (s === as) {
    const t = fo[e] || "", n = t ? ` from the '${t}' plugin` : "", o = t ? "Please install missing plugin." : "";
    throw new Error(`Required inject: '${e}'${n} was not provided. ${o}`);
  }
  return s;
}
function Gs(e, s, t) {
  const n = R(null), o = R([]), l = b(() => t.value?.placement), {
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
    ([v, k]) => {
      const $ = [];
      v && (v.inline && $.push(Dn()), v.offset && $.push(Wn(v.offset)), $.push(Xn()), $.push(Gn()), v.arrow && k && $.push(qn({ element: k })), o.value = $);
    },
    { immediate: !0, deep: !0 }
  );
  const p = b(() => {
    const v = c.value?.arrow;
    return v ? {
      position: "absolute",
      left: v?.x != null ? `${v.x}px` : "",
      top: v?.y != null ? `${v.y}px` : ""
    } : null;
  });
  return ye(t, (v) => {
    v && v.onReady && v.onReady({ update: a, isPositioned: d });
  }), {
    floatingStyles: r,
    placement: i,
    middlewareData: c,
    update: a,
    isPositioned: d,
    arrowStyles: p,
    contentArrow: n
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
    const s = e, t = R(null), n = b(() => s.config), {
      floatingStyles: o,
      placement: l,
      arrowStyles: r,
      contentArrow: i
    } = Gs(Bn(s, "trigger"), t, n);
    return (c, a) => (u(), f("span", {
      class: m(["popover popover--tooltip is-active", n.value.class]),
      ref_key: "content",
      ref: t,
      id: T(qs),
      "data-placement": T(l),
      style: D(T(o))
    }, [
      n.value.isHtml ? (u(), f("span", {
        key: 0,
        class: "popover__inner",
        innerHTML: n.value.content
      }, null, 8, mo)) : (u(), f("span", go, [
        n.value.component ? (u(), w(z(n.value.component), ne(J({ key: 0 }, n.value.componentProps)), null, 16)) : (u(), f(U, { key: 1 }, [
          C(_(n.value.content), 1)
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
    const s = _e(vt);
    return (t, n) => T(s)?.state.visible ? (u(), w(dt, {
      key: 0,
      to: T(s).state.config.teleportTo || "body"
    }, [
      A(vo, {
        trigger: T(s).state.trigger,
        config: T(s).state.config
      }, null, 8, ["trigger", "config"])
    ], 8, ["to"])) : y("", !0);
  }
}, xe = {
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
function Be(e = "ulu-id") {
  const s = `${e}-${++bo}`;
  return typeof document < "u" && document.getElementById(s) ? Be(e) : s;
}
const _o = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  newId: Be,
  refToElement: yo
}, Symbol.toStringTag, { value: "Module" })), wo = ["id", "disabled", "aria-expanded", "aria-controls", "aria-label"], So = ["aria-labelledby", "id", "data-placement"], ko = { class: "popover__inner" }, $o = {
  key: 0,
  class: "popover__footer"
}, mt = {
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
    const t = s, n = e, o = Be(), l = Be(), r = _e(gt), i = r ? r.popover : xe.popover, c = b(() => ({ ...i, ...n.config })), a = R(n.startOpen || !1), d = R(null), p = R(null), {
      floatingStyles: v,
      placement: k,
      update: $,
      arrowStyles: E,
      contentArrow: x
    } = Gs(d, p, c), G = () => {
      K(!a.value);
    }, K = (q) => {
      a.value = q;
      const se = {
        trigger: T(d),
        content: T(p),
        isOpen: T(a)
      }, ve = { isOpen: se.isOpen };
      Ls(() => {
        a.value ? ($(), window.setTimeout(() => {
          ce(), n.directFocus(se), t("toggle", ve);
        }, 0)) : (oe(), n.directFocus(se), t("toggle", ve));
      });
    };
    let M;
    const ce = () => {
      n.clickOutsideCloses && (M && oe(), M = (q) => {
        p.value && !p.value.contains(q.target) && K(!1);
      }, document.addEventListener("click", M));
    }, oe = () => {
      M && (document.removeEventListener("click", M), M = null);
    }, Pe = () => K(!1);
    return (q, se) => {
      const ve = zs("ulu-tooltip");
      return u(), f(U, null, [
        Ue((u(), f("button", {
          type: "button",
          ref_key: "trigger",
          ref: d,
          onClick: G,
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
          g(q.$slots, "trigger", {
            isOpen: a.value,
            close: Pe
          }, () => [
            C(_(e.triggerText), 1)
          ])
        ], 10, wo)), [
          [ve, e.tooltip ? e.tooltip : null]
        ]),
        h("span", {
          class: m(["popover", [
            e.size ? `popover--${e.size}` : "",
            {
              "popover--no-padding": e.noPadding,
              "is-active": a.value
            },
            e.classes.content
          ]]),
          ref_key: "content",
          ref: p,
          "aria-labelledby": T(l),
          id: T(o),
          style: D(T(v)),
          "data-placement": T(k),
          onKeydown: se[0] || (se[0] = Fs((ls) => K(!1), ["esc"])),
          tabindex: "-1"
        }, [
          h("span", ko, [
            g(q.$slots, "default", {
              isOpen: a.value,
              toggle: G,
              close: Pe
            })
          ]),
          q.$slots.footer ? (u(), f("span", $o, [
            g(q.$slots, "footer", { close: Pe })
          ])) : y("", !0),
          c.value.arrow ? (u(), f("span", {
            key: 1,
            class: "popover__arrow",
            ref_key: "contentArrow",
            ref: x,
            style: D(T(E)),
            "data-ulu-popover-arrow": ""
          }, null, 4)) : y("", !0)
        ], 46, So)
      ], 64);
    };
  }
};
function Gf() {
  const e = _e(vt), s = _e(gt), t = { ...s.popover, ...s.tooltip };
  return {
    showTooltip: (o, l) => {
      const r = jt(l, t);
      r && e.show(o, r);
    },
    hideTooltip: e.hide,
    tooltipState: e.state
  };
}
function qf(e) {
  const s = _e(vt), t = _e(gt);
  e.content || console.warn("Missing content for 'useTooltipFollow' tooltip", e);
  let n;
  const o = R(0), l = R(0), r = b(() => ({
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
  })), i = t ? t.popover : xe.popover, c = t ? t.tooltip : xe.tooltip, d = {
    ...{ ...i, ...c },
    content: e.content,
    inline: !1,
    // Following cursor is never inline
    onReady({ update: p }) {
      n = p;
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
    update(p) {
      o.value = p.x, l.value = p.y, n && n();
    }
  };
}
const gt = "uluPopoverOptions", vt = "uluTooltipState", qs = "ulu-global-tooltip", jt = (e, s) => {
  if (e === !1 || e === null) return null;
  let t = e;
  return (typeof t != "object" || Array.isArray(t)) && (t = { content: t }), t.component && (t.component = be(t.component)), { ...s, ...t };
};
function Yf(e, s = {}) {
  const t = {
    plugin: { ...xe.plugin, ...s.plugin || {} },
    popover: { ...xe.popover, ...s.popover || {} },
    tooltip: { ...xe.tooltip, ...s.tooltip || {} }
  };
  e.provide(gt, t);
  const n = ct({
    visible: !1,
    trigger: null,
    config: {}
  }), o = (d, p) => {
    n.trigger && n.trigger !== d && n.trigger?.removeAttribute && n.trigger.removeAttribute("aria-describedby"), d?.setAttribute && d.setAttribute("aria-describedby", qs), n.trigger = d, n.config = p, n.visible = !0;
  }, l = () => {
    n.trigger?.removeAttribute && n.trigger.removeAttribute("aria-describedby"), n.visible = !1;
  };
  e.provide(vt, {
    state: n,
    show: o,
    hide: l
  }), e.component("UluTooltipDisplay", po), e.component("UluPopover", mt);
  const r = /* @__PURE__ */ new WeakMap(), i = t.popover, c = t.tooltip, a = { ...i, ...c };
  e.directive(t.plugin.directiveName, {
    mounted(d, p) {
      const v = jt(p.value, a);
      if (!v) return;
      let k = null;
      const $ = () => {
        k || (k = setTimeout(() => {
          o(d, v);
        }, v.delay));
      }, E = () => {
        clearTimeout(k), k = null, l();
      }, { showEvents: x, hideEvents: G } = v;
      x.forEach((K) => d.addEventListener(K, $)), G.forEach((K) => d.addEventListener(K, E)), r.set(d, { show: $, hide: E, showEvents: x, hideEvents: G });
    },
    updated(d, p) {
      const v = r.get(d);
      v && (v.showEvents.forEach((M) => d.removeEventListener(M, v.show)), v.hideEvents.forEach((M) => d.removeEventListener(M, v.hide)));
      const k = jt(p.value, a);
      if (!k) {
        n.trigger === d && l();
        return;
      }
      let $ = null;
      const E = () => {
        $ || ($ = setTimeout(() => {
          o(d, k);
        }, k.delay));
      }, x = () => {
        clearTimeout($), $ = null, l();
      }, { showEvents: G, hideEvents: K } = k;
      G.forEach((M) => d.addEventListener(M, E)), K.forEach((M) => d.addEventListener(M, x)), r.set(d, { show: E, hide: x, showEvents: G, hideEvents: K }), n.visible && n.trigger === d && o(d, k);
    },
    beforeUnmount(d) {
      n.visible && n.trigger === d && l();
      const p = r.get(d);
      p && (p.showEvents.forEach((v) => d.removeEventListener(v, p.show)), p.hideEvents.forEach((v) => d.removeEventListener(v, p.hide)), r.delete(d));
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
  return l.currentModal ? (u(), w(z(l.currentModal.component), J({ key: 0 }, l.currentProps, {
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
    const s = ut("uluCore"), t = R(null), { getIconProps: n, getClassesFromDefinition: o } = Oo();
    let l;
    const r = e, i = b(() => s.getSetting("fontAwesomeStatic")), c = b(() => s.getSetting("iconComponent")), a = b(() => s.getSetting("iconPropResolver")), d = b(() => {
      const { icon: E } = r;
      if (typeof E == "string" && E.startsWith("type:"))
        try {
          const x = E.substring(5);
          return s.getIcon(x);
        } catch (x) {
          return console.warn(x), null;
        }
      return E;
    }), p = b(() => !c.value || !d.value ? null : a.value(d.value)), v = b(() => n(d.value)), k = b(() => o(d.value)), $ = b(() => ({
      "flow-inline": r.spaced
    }));
    return ft(async () => {
      if (!i.value && d.value) {
        if (t.value === null)
          if (l)
            t.value = be(l.FontAwesomeIcon);
          else {
            const E = Rn(async () => {
              const x = await import("@fortawesome/vue-fontawesome");
              return l = x, x.FontAwesomeIcon;
            });
            t.value = be(E);
          }
      } else
        t.value = null;
    }), (E, x) => c.value ? (u(), w(z(c.value), J({ key: 0 }, p.value, { class: $.value }), null, 16, ["class"])) : !i.value && t.value && d.value ? (u(), w(z(t.value), J({ key: 1 }, v.value, { class: $.value }), null, 16, ["class"])) : i.value && d.value ? (u(), f("span", {
      key: 2,
      class: m([k.value, $.value]),
      "aria-hidden": "true"
    }, null, 2)) : y("", !0);
  }
};
function ie({ props: e, baseClass: s, internal: t = {} }) {
  const { modifiers: n } = En(e);
  return { resolvedModifiers: b(() => {
    const l = st(s), r = rs(st(n)), i = rs(st(t));
    if (!l)
      return console.warn("useModifiers: Missing 'baseClass' argument, modifiers will not be applied."), "";
    const c = /* @__PURE__ */ new Set([...i, ...r]);
    return Array.from(c).map((a) => `${l}--${a}`);
  }) };
}
let $t = 0;
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
    return ++$t, {
      containerWidth: null,
      titleId: `ulu-modal-${$t}-title`,
      bodyOverflowValue: null,
      bodyPaddingRightValue: null,
      isResizing: !1
    };
  },
  setup(e) {
    const s = Vs(), t = b(() => e.title || s.title), n = b(() => {
      const { allowResize: i, position: c } = e;
      if (!i || !c) return;
      const a = ["left", "right", "center"];
      return a.includes(c) ? !0 : (console.warn(`Passed invalid position for resize (${c}), use ${a.join(", ")}`), !1);
    }), o = b(() => e.position === "center" ? "type:resizeBoth" : "type:resizeHorizontal"), l = b(() => ({
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
    ++$t, this.preventScroll && this.setupPreventScroll(), this.setupResizer();
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
  return u(), w(dt, {
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
            t.titleIcon ? (u(), w(r, {
              key: 0,
              class: "modal__title-icon",
              icon: t.titleIcon
            }, null, 8, ["icon"])) : y("", !0),
            h("span", Ro, _(t.title), 1)
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
const Ys = /* @__PURE__ */ j(xo, [["render", jo]]), He = [], Io = R({
  /**
   * Holds active component options (including component, and options)
   */
  active: null,
  /**
   * Populated with any props passed to open method, bound to modal component
   */
  activeProps: null
}), Ne = Io.value, cs = {
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
  e.component("UluModalsDisplay", Ao), e.component("UluModal", Ys), t.modals.forEach((l) => {
    o.add(l);
  }), cs.options = t, e.config.globalProperties.$uluModals = o, e.provide("uluModals", o), e.config.globalProperties.$uluModalsState = cs;
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
        t.toast.icon ? (u(), w(r, {
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
          }, _(t.toast.title), 3),
          t.toast.date ? (u(), f("span", {
            key: 0,
            class: m(["toast__date", t.classes.date])
          }, _(t.toast.date), 3)) : y("", !0)
        ], 2)) : y("", !0),
        t.toast.description ? (u(), f("div", {
          key: 1,
          class: m(["toast__body", t.classes.body])
        }, _(t.toast.description), 3)) : y("", !0)
      ])
    ], 2),
    t.toast.actions?.length ? (u(), f("div", {
      key: 1,
      class: m(["toast__actions", t.classes.actions])
    }, [
      (u(!0), f(U, null, B(t.toast.actions, (i, c) => (u(), f("button", {
        key: c,
        class: m(["toast__action", t.classes.action]),
        onClick: (a) => l.handleAction(a, i)
      }, _(i.label), 11, Fo))), 128))
    ], 2)) : y("", !0),
    h("button", {
      class: m(["toast__close", t.classes.closeButton]),
      onClick: s[0] || (s[0] = (...i) => t.toast.close && t.toast.close(...i))
    }, [
      A(r, { icon: "type:close" })
    ], 2)
  ], 2);
}
const Ks = /* @__PURE__ */ j(zo, [["render", Lo]]), us = {
  toastOptions: {
    /**
     * Component used to render the toast in the display
     */
    component: be(Ks),
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
}, { assign: Ct } = Object;
let Vo = 0;
const me = ct({
  toasts: [],
  /**
   * Saveable 
   */
  pluginOptions: us.pluginOptions,
  toastOptions: us.toastOptions,
  setToastOptions(e) {
    return this.toastOptions = Ct({}, this.toastOptions, e), this.pluginOptions;
  },
  setPluginOptions(e) {
    return this.pluginOptions = Ct({}, this.pluginOptions, e), this.pluginOptions;
  },
  createToast(e) {
    const s = `toast-${++Vo}`;
    return Ct({}, this.toastOptions, e, {
      uid: s,
      close() {
        It.remove(s);
      }
    });
  }
}), It = {
  /**
   * 
   * @param {Object} options Toast options
   * @returns Toast object (to be used to remove)
   */
  add(e) {
    const s = me.createToast(e);
    return me.toasts.unshift(s), s.duration && setTimeout(() => {
      this.remove(s.uid);
    }, s.duration), s;
  },
  /**
   * 
   * @param {Object} toast Toast uid
   */
  remove(e) {
    const s = me.toasts.findIndex((t) => t.uid === e);
    s > -1 && me.toasts.splice(s, 1);
  },
  /**
   * Remove all toasts
   */
  removeAll() {
    me.toasts = [];
  }
}, Ho = {
  name: "UluTooltipDisplay",
  data() {
    const { toasts: e, pluginOptions: s } = me;
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
  return u(), w(dt, {
    to: o.pluginOptions.teleportTo
  }, [
    A(Hs, {
      class: m(["toast-container", l.classes]),
      name: "toast-animation",
      tag: "div"
    }, {
      default: S(() => [
        (u(!0), f(U, null, B(o.toasts, (r) => (u(), w(z(r.component), {
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
  me.setPluginOptions(s?.plugin), me.setToastOptions(s?.toast), e.component("UluToast", Ks), e.component("UluToastDisplay", Do), e.config.globalProperties.$uluToast = It, e.provide("uluToast", It);
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
  const s = Object.assign({}, Wo, e), t = R(null), n = R(s.initialValue), o = R(null);
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
  const t = R(!1), n = Object.assign({}, Go, s), { breakpointMobile: o } = n, { onReady: l } = n.managerOptions, r = {
    onReady(p) {
      p.at(o).max({
        on() {
          t.value = !0;
        },
        off() {
          t.value = !1;
        }
      }), l && l(p);
    }
  }, i = Object.assign({}, n.managerOptions, r), {
    breakpointManager: c,
    breakpointActive: a,
    breakpointDirection: d
  } = Xo(i);
  e.provide("uluBreakpointActive", b(() => a.value)), e.provide("uluBreakpointDirection", b(() => d.value)), e.provide("uluBreakpointManager", b(() => c.value)), e.provide("uluIsMobile", b(() => t.value));
}
const Mt = /* @__PURE__ */ new Set(), Z = /* @__PURE__ */ new WeakMap(), we = /* @__PURE__ */ new WeakMap(), te = /* @__PURE__ */ new WeakMap(), Ge = /* @__PURE__ */ new WeakMap(), Tt = /* @__PURE__ */ new WeakMap(), De = /* @__PURE__ */ new WeakMap(), pe = /* @__PURE__ */ new WeakMap(), ge = /* @__PURE__ */ new WeakMap(), Ae = /* @__PURE__ */ new WeakSet();
let Q, Wt = 0, Xt = 0;
const fe = "__aa_tgt", qe = "__aa_del", rt = "__aa_new", Zs = (e) => {
  const s = Zo(e);
  s && s.forEach((t) => Jo(t));
}, qo = (e) => {
  e.forEach((s) => {
    s.target === Q && Yo(), Z.has(s.target) && ke(s.target);
  });
};
function Js(e) {
  const s = e.getBoundingClientRect(), t = Q?.clientWidth || 0, n = Q?.clientHeight || 0;
  return s.bottom < 0 || s.top > n || s.right < 0 || s.left > t;
}
function Gt(e) {
  const s = Ge.get(e);
  s?.disconnect();
  let t = Z.get(e), n = 0;
  const o = 5;
  t || (t = Re(e), Z.set(e, t));
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
  clearTimeout(ge.get(e));
  const t = pt(e), n = s ? Ye(t) ? 500 : t.duration : 0;
  ge.set(e, setTimeout(async () => {
    const o = te.get(e);
    try {
      await o?.finished, Z.set(e, Re(e)), Gt(e);
    } catch {
    }
  }, n));
}
function Yo() {
  clearTimeout(ge.get(Q)), ge.set(Q, setTimeout(() => {
    Mt.forEach((e) => nt(e, (s) => Qs(() => ke(s))));
  }, 100));
}
function Ko(e) {
  setTimeout(() => {
    De.set(e, setInterval(() => Qs(ke.bind(null, e)), 2e3));
  }, Math.round(2e3 * Math.random()));
}
function Qs(e) {
  typeof requestIdleCallback == "function" ? requestIdleCallback(() => e()) : requestAnimationFrame(() => e());
}
let ue;
const en = typeof window < "u" && "ResizeObserver" in window;
en && (Q = document.documentElement, new MutationObserver(Zs), ue = new ResizeObserver(qo), window.addEventListener("scroll", () => {
  Xt = window.scrollY, Wt = window.scrollX;
}), ue.observe(Q));
function Zo(e) {
  return e.reduce((n, o) => [
    ...n,
    ...Array.from(o.addedNodes),
    ...Array.from(o.removedNodes)
  ], []).every((n) => n.nodeName === "#comment") ? !1 : e.reduce((n, o) => {
    if (n === !1)
      return !1;
    if (o.target instanceof Element) {
      if (At(o.target), !n.has(o.target)) {
        n.add(o.target);
        for (let l = 0; l < o.target.children.length; l++) {
          const r = o.target.children.item(l);
          if (r) {
            if (qe in r)
              return !1;
            At(o.target, r), n.add(r);
          }
        }
      }
      if (o.removedNodes.length)
        for (let l = 0; l < o.removedNodes.length; l++) {
          const r = o.removedNodes[l];
          if (qe in r)
            return !1;
          r instanceof Element && (n.add(r), At(o.target, r), we.set(r, [
            o.previousSibling,
            o.nextSibling
          ]));
        }
    }
    return n;
  }, /* @__PURE__ */ new Set());
}
function At(e, s) {
  !s && !(fe in e) ? Object.defineProperty(e, fe, { value: e }) : s && !(fe in s) && Object.defineProperty(s, fe, { value: e });
}
function Jo(e) {
  var s, t;
  const n = e.isConnected, o = Z.has(e);
  n && we.has(e) && we.delete(e), ((s = te.get(e)) === null || s === void 0 ? void 0 : s.playState) !== "finished" && ((t = te.get(e)) === null || t === void 0 || t.cancel()), rt in e ? ds(e) : o && n ? el(e) : o && !n ? tl(e) : ds(e);
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
function Re(e) {
  const s = e.getBoundingClientRect(), { x: t, y: n } = Qo(e);
  return {
    top: s.top + n,
    left: s.left + t,
    width: s.width,
    height: s.height
  };
}
function tn(e, s, t) {
  let n = s.width, o = s.height, l = t.width, r = t.height;
  const i = getComputedStyle(e);
  if (i.getPropertyValue("box-sizing") === "content-box") {
    const a = le(i.paddingTop) + le(i.paddingBottom) + le(i.borderTopWidth) + le(i.borderBottomWidth), d = le(i.paddingLeft) + le(i.paddingRight) + le(i.borderRightWidth) + le(i.borderLeftWidth);
    n -= d, l -= d, o -= a, r -= a;
  }
  return [n, l, o, r].map(Math.round);
}
function pt(e) {
  return fe in e && pe.has(e[fe]) ? pe.get(e[fe]) : { duration: 250, easing: "ease-in-out" };
}
function sn(e) {
  if (fe in e)
    return e[fe];
}
function qt(e) {
  const s = sn(e);
  return s ? Ae.has(s) : !1;
}
function nt(e, ...s) {
  s.forEach((t) => t(e, pe.has(e)));
  for (let t = 0; t < e.children.length; t++) {
    const n = e.children.item(t);
    n && s.forEach((o) => o(n, pe.has(n)));
  }
}
function Yt(e) {
  return Array.isArray(e) ? e : [e];
}
function Ye(e) {
  return typeof e == "function";
}
function el(e) {
  const s = Z.get(e), t = Re(e);
  if (!qt(e))
    return Z.set(e, t);
  if (Js(e)) {
    Z.set(e, t), Gt(e);
    return;
  }
  let n;
  if (!s)
    return;
  const o = pt(e);
  if (typeof o != "function") {
    let l = s.left - t.left, r = s.top - t.top;
    const i = s.left + s.width - (t.left + t.width);
    s.top + s.height - (t.top + t.height) == 0 && (r = 0), i == 0 && (l = 0);
    const [a, d, p, v] = tn(e, s, t), k = {
      transform: `translate(${l}px, ${r}px)`
    }, $ = {
      transform: "translate(0, 0)"
    };
    a !== d && (k.width = `${a}px`, $.width = `${d}px`), p !== v && (k.height = `${p}px`, $.height = `${v}px`), n = e.animate([k, $], {
      duration: o.duration,
      easing: o.easing
    });
  } else {
    const [l] = Yt(o(e, "remain", s, t));
    n = new Animation(l), n.play();
  }
  te.set(e, n), Z.set(e, t), n.addEventListener("finish", ke.bind(null, e, !1), {
    once: !0
  });
}
function ds(e) {
  rt in e && delete e[rt];
  const s = Re(e);
  Z.set(e, s);
  const t = pt(e);
  if (!qt(e))
    return;
  if (Js(e)) {
    Gt(e);
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
    const [o] = Yt(t(e, "add", s));
    n = new Animation(o), n.play();
  }
  te.set(e, n), n.addEventListener("finish", ke.bind(null, e, !1), {
    once: !0
  });
}
function fs(e, s) {
  var t;
  e.remove(), Z.delete(e), we.delete(e), te.delete(e), (t = Ge.get(e)) === null || t === void 0 || t.disconnect(), setTimeout(() => {
    if (qe in e && delete e[qe], Object.defineProperty(e, rt, { value: !0, configurable: !0 }), s && e instanceof HTMLElement)
      for (const n in s)
        e.style[n] = "";
  }, 0);
}
function tl(e) {
  var s;
  if (!we.has(e) || !Z.has(e))
    return;
  const [t, n] = we.get(e);
  Object.defineProperty(e, qe, { value: !0, configurable: !0 });
  const o = window.scrollX, l = window.scrollY;
  if (n && n.parentNode && n.parentNode instanceof Element ? n.parentNode.insertBefore(e, n) : t && t.parentNode ? t.parentNode.appendChild(e) : (s = sn(e)) === null || s === void 0 || s.appendChild(e), !qt(e))
    return fs(e);
  const [r, i, c, a] = nl(e), d = pt(e), p = Z.get(e);
  (o !== Wt || l !== Xt) && sl(e, o, l, d);
  let v, k = {
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
    Object.assign(e.style, k), v = e.animate([
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
    const [$, E] = Yt(d(e, "remove", p));
    E?.styleReset !== !1 && (k = E?.styleReset || k, Object.assign(e.style, k)), v = new Animation($), v.play();
  }
  te.set(e, v), v.addEventListener("finish", () => fs(e, k), {
    once: !0
  });
}
function sl(e, s, t, n) {
  const o = Wt - s, l = Xt - t, r = document.documentElement.style.scrollBehavior;
  if (getComputedStyle(Q).scrollBehavior === "smooth" && (document.documentElement.style.scrollBehavior = "auto"), window.scrollTo(window.scrollX + o, window.scrollY + l), !e.parentElement)
    return;
  const c = e.parentElement;
  let a = c.clientHeight, d = c.clientWidth;
  const p = performance.now();
  function v() {
    requestAnimationFrame(() => {
      if (!Ye(n)) {
        const k = a - c.clientHeight, $ = d - c.clientWidth;
        p + n.duration > performance.now() ? (window.scrollTo({
          left: window.scrollX - $,
          top: window.scrollY - k
        }), a = c.clientHeight, d = c.clientWidth, v()) : document.documentElement.style.scrollBehavior = r;
      }
    });
  }
  v();
}
function nl(e) {
  var s;
  const t = Z.get(e), [n, , o] = tn(e, t, Re(e));
  let l = e.parentElement;
  for (; l && (getComputedStyle(l).position === "static" || l instanceof HTMLBodyElement); )
    l = l.parentElement;
  l || (l = document.body);
  const r = getComputedStyle(l), i = !te.has(e) || ((s = te.get(e)) === null || s === void 0 ? void 0 : s.playState) === "finished" ? Re(l) : Z.get(l), c = Math.round(t.top - i.top) - le(r.borderTopWidth), a = Math.round(t.left - i.left) - le(r.borderLeftWidth);
  return [c, a, n, o];
}
function ol(e, s = {}) {
  if (en && ue && !(window.matchMedia("(prefers-reduced-motion: reduce)").matches && !Ye(s) && !s.disrespectUserMotionPreference)) {
    Ae.add(e), getComputedStyle(e).position === "static" && Object.assign(e.style, { position: "relative" }), nt(e, ke, Ko, (r) => ue?.observe(r)), Ye(s) ? pe.set(e, s) : pe.set(e, {
      duration: 250,
      easing: "ease-in-out",
      ...s
    });
    const l = new MutationObserver(Zs);
    l.observe(e, { childList: !0 }), Tt.set(e, l), Mt.add(e);
  }
  return Object.freeze({
    parent: e,
    enable: () => {
      Ae.add(e);
    },
    disable: () => {
      Ae.delete(e), nt(e, (n) => {
        const o = te.get(n);
        try {
          o?.cancel();
        } catch {
        }
        te.delete(n);
        const l = ge.get(n);
        l && clearTimeout(l), ge.delete(n);
        const r = De.get(n);
        r && clearInterval(r), De.delete(n);
      });
    },
    isEnabled: () => Ae.has(e),
    destroy: () => {
      Ae.delete(e), Mt.delete(e), pe.delete(e);
      const n = Tt.get(e);
      n?.disconnect(), Tt.delete(e), nt(e, (o) => {
        ue?.unobserve(o);
        const l = te.get(o);
        try {
          l?.cancel();
        } catch {
        }
        te.delete(o);
        const r = Ge.get(o);
        r?.disconnect(), Ge.delete(o);
        const i = De.get(o);
        i && clearInterval(i), De.delete(o);
        const c = ge.get(o);
        c && clearTimeout(c), ge.delete(o), Z.delete(o), we.delete(o);
      });
    }
  });
}
function ll(e) {
  const s = R();
  let t;
  function n(o) {
    t && (o ? t.enable() : t.disable());
  }
  return ht(() => {
    ft((o) => {
      let l;
      s.value instanceof HTMLElement ? l = s.value : s.value && "$el" in s.value && s.value.$el instanceof HTMLElement && (l = s.value.$el), l && (t = ol(l, e || {}), o(() => {
        var r;
        (r = t?.destroy) === null || r === void 0 || r.call(t), t = void 0;
      }));
    });
  }), Ns(() => {
    var o;
    (o = t?.destroy) === null || o === void 0 || o.call(t), t = void 0;
  }), [s, n];
}
const rl = ["id", "aria-controls", "aria-expanded"], il = ["id", "aria-hidden", "aria-labelledby"], Pt = {
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
    const t = e, n = s, o = b(() => typeof t.animate == "object" ? t.animate : {}), [l, r] = ll(o);
    ht(() => {
      r(!!t.animate);
    }), ye(() => t.animate, ($) => {
      r(!!$);
    });
    const i = b(() => t.modelValue !== void 0), c = R(t.startOpen), a = b({
      get() {
        return i.value ? t.modelValue : c.value;
      },
      set($) {
        i.value ? n("update:modelValue", $) : c.value = $;
      }
    }), d = R(Be("ulu-collapsible-trigger")), p = R(Be("ulu-collapsible-content"));
    function v() {
      a.value = !a.value;
    }
    function k() {
      t.closeOnEscape && a.value && (a.value = !1);
    }
    return ($, E) => (u(), f("div", {
      ref_key: "container",
      ref: l,
      onKeydown: Fs(k, ["esc"]),
      class: m([e.classes.container, a.value ? e.classes.containerOpen : e.classes.containerClosed])
    }, [
      h("button", {
        class: m(e.classes.trigger),
        id: d.value,
        "aria-controls": p.value,
        "aria-expanded": a.value,
        onClick: v
      }, [
        g($.$slots, "trigger", { isOpen: a.value }, () => [
          C(_(e.triggerText), 1)
        ])
      ], 10, rl),
      a.value ? (u(), f("div", {
        key: 0,
        class: m(e.classes.content),
        tabindex: "-1",
        id: p.value,
        "aria-hidden": !a.value,
        "aria-labelledby": d.value
      }, [
        g($.$slots, "default", {
          isOpen: a.value,
          toggle: v
        })
      ], 10, il)) : y("", !0)
    ], 34));
  }
}, hs = {
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
    const t = e, { resolvedModifiers: n } = ie({ props: t, baseClass: "accordion" }), o = b(() => {
      const l = { ...t.classes };
      return l.container = [l.container, n.value], l;
    });
    return (l, r) => (u(), w(Pt, {
      "model-value": e.modelValue,
      "start-open": e.startOpen,
      "trigger-text": e.triggerText,
      classes: o.value,
      animate: e.animate,
      "onUpdate:modelValue": r[0] || (r[0] = (i) => l.$emit("update:modelValue", i))
    }, {
      trigger: S(({ isOpen: i }) => [
        g(l.$slots, "trigger", { isOpen: i }, () => [
          (u(), w(z(e.triggerTextElement), null, {
            default: S(() => [
              C(_(e.triggerText), 1)
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
      default: S(({ isOpen: i, toggle: c }) => [
        g(l.$slots, "default", {
          isOpen: i,
          toggle: c
        })
      ]),
      _: 3
    }, 8, ["model-value", "start-open", "trigger-text", "classes", "animate"]));
  }
}, nn = {
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
      e.icon ? (u(), w(N, {
        key: 0,
        icon: e.icon,
        spaced: ""
      }, null, 8, ["icon"])) : y("", !0),
      g(n.$slots, "default", {}, () => [
        h("span", null, _(e.text), 1)
      ])
    ], 2));
  }
}, al = {
  name: "UluMenu",
  components: {
    UluIcon: N,
    UluTag: nn
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
  const r = W("UluIcon"), i = W("UluTag"), c = W("UluMenu", !0), a = zs("ulu-tooltip");
  return t.items?.length ? (u(), f("ul", {
    key: 0,
    class: m(t.classes.list)
  }, [
    (u(!0), f(U, null, B(t.items, (d, p) => (u(), f("li", {
      key: p,
      class: m([
        t.classes.item,
        d?.classes?.item,
        d.separatorBefore ? t.classes.itemSeparatorBefore : "",
        d.separatorAfter ? t.classes.itemSeparatorAfter : ""
      ])
    }, [
      Ue((u(), w(z(d.to || d.path ? "router-link" : d.click ? "button" : "a"), J({ ref_for: !0 }, {
        ...d.to || d.path ? {
          to: d.to || d.path,
          activeClass: t.classes.linkActive || null,
          exactActiveClass: t.classes.linkExactActive || null
        } : {},
        ...d.href ? { href: d.href || "#" } : {}
      }, {
        onClick: (v) => {
          l.handleItemClick(v, d);
        },
        class: [t.classes.link, d?.classes?.link],
        "aria-label": t.iconOnly ? d.title : null,
        id: d.id
      }), {
        default: S(() => [
          g(e.$slots, "default", {
            item: d,
            index: p
          }, () => [
            d.icon ? (u(), w(r, {
              key: 0,
              icon: d.icon,
              class: m([t.classes.linkIcon, d?.classes?.linkIcon])
            }, null, 8, ["icon", "class"])) : y("", !0),
            h("span", {
              class: m([t.classes.linkText, d?.classes?.linkText])
            }, _(d.title), 3),
            d.tag ? (u(), w(i, J({
              key: 1,
              ref_for: !0
            }, d.tag), null, 16)) : y("", !0)
          ])
        ]),
        _: 2
      }, 1040, ["onClick", "class", "aria-label", "id"])), [
        [a, t.iconOnly ? d.title : d.tooltip || null]
      ]),
      !t.noChildren && d?.children?.length ? (u(), w(c, {
        key: 0,
        iconOnly: t.iconOnly,
        classes: t.classes,
        items: d.children
      }, null, 8, ["iconOnly", "classes", "items"])) : y("", !0)
    ], 2))), 128))
  ], 2)) : y("", !0);
}
const on = /* @__PURE__ */ j(al, [["render", cl]]), ul = {
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
    const s = e, t = b(() => ({
      hanging: s.hanging,
      compact: s.compact
    })), { resolvedModifiers: n } = ie({
      props: s,
      internal: t,
      baseClass: "menu-stack"
    });
    return (o, l) => (u(), w(z(e.containerElement), {
      class: m(["menu-stack", T(n)])
    }, {
      default: S(() => [
        A(on, {
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
    return (s, t) => (u(), w(mt, { classes: e.popoverClasses }, {
      trigger: S(({ isOpen: n }) => [
        g(s.$slots, "trigger", { isOpen: n }, () => [
          h("span", null, _(e.triggerText), 1),
          A(N, {
            class: "button__icon",
            icon: "type:dropdownExpand",
            style: D({ transform: n ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.2s" })
          }, null, 8, ["style"])
        ])
      ]),
      default: S(() => [
        A(ul, { items: e.items }, null, 8, ["items"])
      ]),
      _: 3
    }, 8, ["classes"]));
  }
}, Kt = R(!1), it = {
  start: [],
  end: []
};
function Zt() {
  window.removeEventListener("resize", Zt), Kt.value = !0, it.start.forEach((e) => e());
}
function dl() {
  Kt.value = !1, it.end.forEach((e) => e()), window.addEventListener("resize", Zt);
}
window.addEventListener("resize", Zt), window.addEventListener("resize", Dt(dl, 300));
function ms(e, s) {
  return e.push(s), () => {
    const t = e.findIndex((n) => n === s);
    t > -1 && e.splice(t);
  };
}
function fl() {
  return {
    resizing: Kt,
    onResizeStart(e) {
      return ms(it.start, e);
    },
    onResizeEnd(e) {
      return ms(it.end, e);
    }
  };
}
function eh(e, s) {
  const t = Ws(), n = Qn(), o = b(() => {
    const a = parseInt(t.query.page || "1", 10);
    return isNaN(a) || a < 1 ? 1 : a;
  }), l = b(() => !e.value || e.value.length === 0 ? 1 : Math.ceil(e.value.length / s));
  ye(l, (a) => {
    o.value > a && n.push({ query: { ...t.query, page: a } });
  });
  const r = b(() => {
    const a = (o.value - 1) * s, d = a + s;
    return e.value.slice(a, d);
  }), i = b(() => {
    if (l.value <= 1)
      return null;
    const a = {
      pages: {}
    }, d = o.value, p = l.value, v = 5, k = (x) => ({ query: { ...t.query, page: x } });
    d > 1 && (a.first = { href: k(1) }, a.previous = { href: k(d - 1) }), d < p && (a.next = { href: k(d + 1) }, a.last = { href: k(p) });
    let $, E;
    if (p <= v)
      $ = 1, E = p;
    else {
      const x = Math.floor(v / 2), G = Math.ceil(v / 2) - 1;
      d <= x ? ($ = 1, E = v) : d + G >= p ? ($ = p - v + 1, E = p) : ($ = d - x, E = d + G);
    }
    for (let x = $; x <= E; x++)
      a.pages[x] = { href: k(x) };
    return a;
  }), c = b(() => {
    const a = { previous: !1, next: !1 };
    if (!i.value || !i.value.pages) return a;
    const d = Object.keys(i.value.pages).map(Number);
    if (d.length === 0) return a;
    const p = Math.min(...d), v = Math.max(...d);
    return p > 1 && (a.previous = !0), v < l.value && (a.next = !0), a;
  });
  return {
    currentPage: o,
    totalPages: l,
    paginatedItems: r,
    pagerItems: i,
    pagerEllipses: c
  };
}
function zt(e, s, t) {
  typeof e === "function" && (!t || t !== "titleTemplate" && !(t[0] === "o" && t[1] === "n")) && (e = e());
  let o;
  if (s && (o = s(t, e)), Array.isArray(o))
    return o.map((l) => zt(l, s));
  if (o?.constructor === Object) {
    const l = {};
    for (const r of Object.keys(o))
      l[r] = zt(o[r], s, r);
    return l;
  }
  return o;
}
const hl = (e, s) => In(s) ? st(s) : s, ml = "usehead";
function gl() {
  if (Mn()) {
    const e = ut(ml);
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
  const n = R(!1);
  let o;
  return ft(() => {
    const r = n.value ? {} : zt(s, hl);
    o ? o.patch(r) : o = e.push(r, t);
  }), Pn() && (Ns(() => {
    o.dispose();
  }), zn(() => {
    n.value = !0;
  }), Fn(() => {
    n.value = !1;
  })), o;
}
function yt(e, s) {
  let n = (e?.meta || {}).title;
  return typeof n == "function" && (n = n(s || e)), n;
}
function yl(e, s) {
  const n = Object.assign({}, {
    qualifier(r, i) {
      return i ? Qt(r) : ln(r);
    },
    sort: ts,
    item: {},
    includeChildren: !1
  }, s), o = (r, i) => i ? `${i}/${r.path}` : r.path, l = (r, i = null) => r.filter((c) => n.qualifier(c, i)).map((c) => {
    const a = c.children ? Jt(c.children) : c, d = c.children ? c.children.filter((v) => v.path !== "") : !1, p = bt(a, o(c, i), n.item);
    return n.includeChildren && d.length && (p.children = l(d, p.path)), p;
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
    sort: ts
  }, t), l = e.find((a) => a.path !== "/" && s.includes(a.path)), r = (a, d, p) => {
    if (a.children) {
      const v = a.children.find((k) => k.path.includes(s));
      if (v)
        return r(v, a, p + v.path);
    }
    return { route: d, path: p };
  }, { route: i, path: c } = r(l, l, l.path);
  return i.children ? i.children.filter(an(o.includeIndex)).map((a) => bt(a, `${c}/${a.path}`, o.item)).sort(o.sort) : (console.warn("Unable to build menu for:", s), []);
}
function Jt(e) {
  return e.find((s) => s.path === "");
}
function bt(e, s = e.path, t) {
  const o = Object.assign({}, {
    indexMeta: !0,
    modify: null
  }, t);
  let l = Object.assign({}, e.meta);
  o.indexMeta && e.children && (l = Object.assign({}, l, Jt(e.children)?.meta));
  const r = { ...e, meta: l }, i = {
    path: s,
    title: yt(r, e) || "Missing Title",
    weight: l?.weight || 0,
    meta: l
  };
  return o.modify && o.modify(i, e), i;
}
function Qt(e) {
  return !e.path.includes("/:");
}
function ln(e) {
  const s = e.path.match(/\//g) || [];
  return Qt(e) && s.length === 1;
}
function wl(e, s) {
  const { target: t } = s, n = t.closest("a");
  if (n) {
    let o = n.getAttribute("href");
    o.startsWith("/") && (e.push(o), s.preventDefault());
  }
}
function rn(e, s = es(e)) {
  return s?.children;
}
function es(e, s) {
  const t = e.matched.length, n = t - 2;
  return s ? t > 1 ? e.matched[0] : null : n < 0 ? null : e.matched[n];
}
function an(e) {
  return (s) => e || s.path !== "";
}
function ts(e, s) {
  return e?.weight - s?.weight;
}
function Sl(e, s) {
  const n = Object.assign({}, {
    parent: null,
    includeIndex: !1,
    item: {},
    sort: ts
  }, s), o = n.parent || es(e);
  return (rn(e, o) || []).filter(an(n.includeIndex)).map((r) => bt(r, `${o.path}/${r.path}`, n.item)).sort(n.sort);
}
function kl(e) {
  const { matched: s, path: t } = e;
  let n;
  return s.reduce((l, r, i) => {
    if (r.meta?.breadcrumb === !1 || r.path === n)
      return l;
    const c = i === s.length - 1, a = yt(r, e) || "Missing Title";
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
  $getParentRoute: es,
  $getRouteChildren: rn,
  createBaseMenu: yl,
  createMenuItem: bt,
  createSectionMenu: _l,
  flattenMenu: bl,
  getChildIndexRoute: Jt,
  getRouteTitle: yt,
  isStaticBaseRoute: ln,
  isStaticRoute: Qt,
  nativeLinkRouter: wl
}, Symbol.toStringTag, { value: "Module" })), Ot = ct({});
function th(e = {}) {
  const {
    title: s,
    titleTemplate: t = "%s",
    useRoute: n = Ws,
    useHead: o = vl
  } = e, l = n(), r = l.path;
  if (s !== void 0) {
    ft(() => {
      Ot[r] = T(s);
    }), Ds(() => {
      delete Ot[r];
    });
    return;
  }
  const i = b(() => {
    const c = Ot[l.path], a = yt(l, l), d = c || a;
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
    const { resizing: s, onResizeEnd: t } = fl(), n = R(null), o = R(!1), l = () => {
      Ls(() => {
        const i = n.value;
        o.value = i.offsetWidth < i.scrollWidth;
      });
    }, r = t(l);
    return ht(l), Ds(r), (i, c) => (u(), f("div", Cl, [
      h("div", {
        class: "type-truncate",
        ref_key: "text",
        ref: n
      }, [
        g(i.$slots, "default")
      ], 512),
      o.value && !T(s) ? (u(), w(mt, {
        key: 0,
        triggerAlt: "Show Full Text",
        size: "large"
      }, {
        trigger: S(() => [
          A(N, {
            icon: e.triggerIcon || "type:ellipsis"
          }, null, 8, ["icon"])
        ]),
        default: S(() => [
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
    return (s, t) => (u(), w(T(eo), null, {
      default: S((n) => [
        g(s.$slots, "default", ne(re(n)))
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
    return (s, t) => (u(), w(T(to), {
      defaultIndex: e.defaultIndex,
      vertical: e.vertical
    }, {
      default: S((n) => [
        h("div", {
          class: m(["tabs", {
            "tabs--vertical": e.vertical
          }])
        }, [
          g(s.$slots, "default", ne(re(n)))
        ], 2)
      ]),
      _: 3
    }, 8, ["defaultIndex", "vertical"]));
  }
}), lh = {
  __name: "UluTabList",
  setup(e) {
    return (s, t) => (u(), w(T(so), { class: "tabs__tablist" }, {
      default: S(() => [
        g(s.$slots, "default")
      ]),
      _: 3
    }));
  }
}, rh = {
  __name: "UluTabPanel",
  setup(e) {
    return (s, t) => (u(), w(T(no), null, {
      default: S((n) => [
        g(s.$slots, "default", ne(re(n)))
      ]),
      _: 3
    }));
  }
}, ih = {
  __name: "UluTabPanels",
  setup(e) {
    return (s, t) => (u(), w(T(oo), null, {
      default: S((n) => [
        g(s.$slots, "default", ne(re(n)))
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
  return u(), w(z(l.element), J({
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
    default: S(() => [
      g(e.$slots, "before"),
      t.icon && (t.iconBefore || t.iconOnly) ? (u(), w(r, {
        key: 0,
        icon: t.icon,
        class: "button__icon"
      }, null, 8, ["icon"])) : y("", !0),
      (e.$slots.default || t.text) && !t.iconOnly ? (u(), f("span", Ol, [
        g(e.$slots, "default", {}, () => [
          C(_(t.text), 1)
        ])
      ])) : y("", !0),
      t.icon && !t.iconBefore && !t.iconOnly ? (u(), w(r, {
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
      internal: b(() => ({
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
            h("strong", null, _(t.title), 1)
          ])
        ]),
        h("div", null, [
          g(e.$slots, "description", {}, () => [
            C(_(t.description), 1)
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
    const s = e, t = b(() => !!(s.to || s.click)), n = b(() => {
      const { click: o, to: l, href: r } = s;
      return o ? "button" : l ? Xe : r ? "a" : "span";
    });
    return (o, l) => (u(), w(z(n.value), {
      class: m(["badge", [
        e.size ? `badge--${e.size}` : null,
        e.type ? `badge--${e.type}` : null,
        { "badge--clickable": t.value }
      ]]),
      to: e.to,
      href: e.href,
      onClick: e.click
    }, {
      default: S(() => [
        h("span", {
          class: m(["badge__inner", { "skeleton__background-color": e.skeleton }])
        }, [
          e.text ? (u(), f("span", {
            key: 0,
            "aria-hidden": e.alt ? "true" : null
          }, _(e.text), 9, Ml)) : g(o.$slots, "default", { key: 1 }),
          e.alt ? (u(), f("span", Pl, _(e.alt), 1)) : y("", !0)
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
      (u(!0), f(U, null, B(e.items, (n, o) => (u(), f("li", {
        class: "badge-stack__item",
        key: o
      }, [
        A(zl, J({ ref_for: !0 }, n), null, 16)
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
  return u(), w(z(l.element), J({
    class: ["button-verbose", [
      {
        "button-verbose--inline": t.inline,
        "button-verbose--full-width": t.fullWidth
      },
      n.resolvedModifiers
    ]]
  }, l.attrs), {
    default: S(() => [
      e.$slots.title || t.title ? (u(), w(z(t.titleElement), {
        key: 0,
        class: "button-verbose__title"
      }, {
        default: S(() => [
          g(e.$slots, "title", {}, () => [
            C(_(t.title), 1)
          ])
        ]),
        _: 3
      })) : y("", !0),
      e.$slots.default || t.body ? (u(), f("span", Vl, [
        g(e.$slots, "default", {}, () => [
          C(_(t.body), 1)
        ])
      ])) : y("", !0),
      t.icon ? (u(), w(r, {
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
    const t = e, n = s, o = Vs();
    t.proxyClick && (t.to || t.href) && console.warn("UluCard: 'proxyClick' is ignored when 'to' or 'href' are present."), (t.titleTo || t.titleHref) && (t.to || t.href) && console.warn("UluCard: 'titleTo'/'titleHref' should not be used with 'to'/'href'.");
    const l = R(null), r = R(null), { resolvedModifiers: i } = ie({ props: t, baseClass: "card" }), c = R(null), a = R(!1), d = b(() => t.proxyClick && !t.to && !t.href), p = b(() => d.value && (t.titleTo || t.titleHref)), v = b(() => d.value && !p.value), k = b(() => d.value || null), $ = b(() => ({
      selectorPrevent: "input, select, textarea, button, a, [tabindex='-1']",
      mousedownDurationPrevent: 250,
      ...t.proxyClickOptions
    })), E = b(() => d.value ? "pointer" : null), x = b(() => t.to ? Xe : t.href ? "a" : t.cardElement);
    function G({ target: M, timeStamp: ce }) {
      if (!k.value) return;
      const { selectorPrevent: oe } = $.value;
      a.value = !1, M.closest(oe) || (a.value = !0, c.value = ce);
    }
    function K({ timeStamp: M }) {
      if (!k.value || !a.value) return;
      const { mousedownDurationPrevent: ce } = $.value;
      if (M - c.value < ce) {
        if (p.value)
          r.value?.click();
        else if (v.value) {
          const oe = l.value?.querySelector("[data-ulu-card-proxy-target]");
          oe ? oe.click() : n("proxy-click");
        }
      }
      a.value = !1;
    }
    return (M, ce) => (u(), w(z(x.value), {
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
      onMousedown: G,
      onMouseup: K,
      style: D({ cursor: E.value }),
      target: e.target,
      to: e.to,
      href: e.href,
      "data-ulu-proxy-click-init": k.value
    }, {
      default: S(() => [
        h("div", Wl, [
          h("div", Xl, [
            e.title || T(o).title ? (u(), w(z(e.titleElement), {
              key: 0,
              class: m(["card__title", e.classes.title])
            }, {
              default: S(() => [
                e.titleTo ? (u(), w(T(Xe), {
                  key: 0,
                  class: "card__title-link",
                  to: e.titleTo,
                  ref_key: "link",
                  ref: r
                }, {
                  default: S(() => [
                    g(M.$slots, "title", {}, () => [
                      C(_(e.title), 1)
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
                  g(M.$slots, "title", {}, () => [
                    C(_(e.title), 1)
                  ])
                ], 8, Gl)) : g(M.$slots, "title", { key: 2 }, () => [
                  C(_(e.title), 1)
                ])
              ]),
              _: 3
            }, 8, ["class"])) : y("", !0),
            g(M.$slots, "body")
          ]),
          T(o).aside ? (u(), f("div", ql, [
            g(M.$slots, "aside")
          ])) : y("", !0)
        ]),
        T(o).image || e.imageSrc ? (u(), f("div", {
          key: 0,
          class: m(["card__image", [
            { "card__image--icon": e.imageIcon },
            e.classes.image
          ]])
        }, [
          g(M.$slots, "image", {}, () => [
            h("img", {
              src: e.imageSrc,
              alt: e.imageAlt
            }, null, 8, Yl)
          ])
        ], 2)) : y("", !0),
        T(o).footer ? (u(), f("div", Kl, [
          g(M.$slots, "footer")
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
    const s = e, t = b(() => ({
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
      (u(!0), f(U, null, B(e.items, (r, i) => (u(), f("div", {
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
            C(_(r.term), 1)
          ])
        ], 2),
        h("dd", {
          class: m(e.classes.description)
        }, [
          g(o.$slots, "description", {
            item: r,
            index: i
          }, () => [
            C(_(r.description), 1)
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
          C(_(e.text), 1)
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
    const s = e, t = b(() => s.ordered || s.forceOrdered ? "ol" : "ul");
    return (n, o) => (u(), w(z(t.value), {
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
      default: S(() => [
        (u(!0), f(U, null, B(e.items, (l, r) => (u(), f("li", {
          key: r,
          class: m(e.classes.listItem)
        }, [
          g(n.$slots, "default", {
            item: l,
            index: r
          }, () => [
            C(_(l), 1)
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
        (u(), f(U, null, B(12, (n) => h("div", { key: n })), 64))
      ])
    ], 2));
  }
}, nr = ["role", "aria-labelledby"], or = ["id"], lr = { class: "menu-stack__list" }, rr = { class: "menu-stack__selectable" }, ir = ["type", "id", "name", "value", "checked", "onChange"], ar = ["for"], cn = {
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
    const t = e, n = s, o = b(() => t.legend ? t.legend.toLowerCase().replace(/\s+/g, "-") : `menu-${Math.random().toString(36).substring(7)}`), l = b(() => o.value ? `${o.value}-legend` : null), r = b(() => t.type === "radio" ? "radiogroup" : "group"), i = (d) => `${o.value}-${d.uid}`, c = (d) => t.type === "radio" ? t.modelValue === d.uid : Array.isArray(t.modelValue) ? t.modelValue.includes(d.uid) : t.type === "checkbox" && d.checked || !1, a = (d, p) => {
      if (t.type === "radio")
        n("update:modelValue", d.uid);
      else if (Array.isArray(t.modelValue)) {
        const v = [...t.modelValue], k = v.indexOf(d.uid);
        k > -1 ? v.splice(k, 1) : v.push(d.uid), n("update:modelValue", v);
      } else
        d.checked = p.target.checked;
    };
    return (d, p) => (u(), f("div", {
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
      }, _(e.legend), 9, or)) : y("", !0),
      h("ul", lr, [
        (u(!0), f(U, null, B(e.options, (v) => (u(), f("li", {
          class: "menu-stack__item",
          key: v.uid
        }, [
          h("div", rr, [
            h("input", {
              type: e.type,
              id: i(v),
              name: o.value,
              value: v.uid,
              checked: c(v),
              onChange: (k) => a(v, k)
            }, null, 40, ir),
            h("label", {
              for: i(v)
            }, [
              g(d.$slots, "default", { option: v }, () => [
                C(_(v?.label || v?.title || v?.text), 1)
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
    const s = e, t = b(() => typeof window > "u" ? "" : window.URL.createObjectURL(s.file)), n = b(() => {
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
          C(_(e.file.name) + " ", 1),
          e.noFileSize ? y("", !0) : (u(), w(nn, {
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
          C(_(e.label), 1)
        ])
      ], 10, fr),
      h("input", J({
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
      e.error || e.warning ? (u(), w(N, {
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
          C(_(e.label), 1)
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
        (u(!0), f(U, null, B(e.options, (l, r) => (u(), f("option", {
          key: r,
          value: l.value
        }, _(l.text), 9, pr))), 128))
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
          C(_(e.label), 1)
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
    e(), this.resizeHandler = Dt(e, 200, !1, this), window.addEventListener("resize", this.resizeHandler);
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
      (u(), w(z(t.titleElement), {
        class: m(["layout-flex type-max-width-small no-margin", t.classes.title]),
        style: D({ alignItems: t.iconAlign })
      }, {
        default: S(() => [
          t.icon ? (u(), w(r, {
            key: 0,
            class: m(t.classes.icon),
            icon: t.icon
          }, null, 8, ["class", "icon"])) : y("", !0),
          g(e.$slots, "default", {}, () => [
            C(_(t.title), 1)
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
      (u(!0), f(U, null, B(t.items, (c, a) => (u(), f("li", {
        key: a,
        class: m(t.classes.item)
      }, [
        c.current ? (u(), f("span", {
          key: 1,
          class: m(c.current)
        }, [
          g(e.$slots, "default", { item: c }, () => [
            C(_(c.title), 1)
          ])
        ], 2)) : (u(), w(r, {
          key: 0,
          to: c.to,
          class: m(t.classes.link),
          "aria-current": c.current ? "page" : null
        }, {
          default: S(() => [
            g(e.$slots, "default", { item: c }, () => [
              C(_(c.title), 1)
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
    UluMenu: on
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
        (u(), w(z(e.titleElement), {
          id: n,
          class: "hidden-visually"
        }, {
          default: S(() => [...r[0] || (r[0] = [
            C("Pagination", -1)
          ])]),
          _: 1
        })),
        h("ul", jr, [
          e.items.first ? (u(), f("li", Ir, [
            A(i, J({
              to: e.items.first.href,
              title: "Go to first page"
            }, e.items.first.attributes), {
              default: S(() => [
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
            A(i, J({
              to: e.items.previous.href,
              title: "Go to previous page",
              rel: "prev"
            }, e.items.previous.attributes), {
              default: S(() => [
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
          (u(!0), f(U, null, B(e.items.pages, (c, a) => (u(), f("li", {
            key: a,
            class: m(["pager__item", { "is-active": e.current == a }])
          }, [
            A(i, J({
              to: c.href,
              title: o(a)
            }, { ref_for: !0 }, c.attributes), {
              default: S(() => [
                h("span", zr, _(e.current == a ? "Current page" : "Page"), 1),
                C(" " + _(a), 1)
              ]),
              _: 2
            }, 1040, ["to", "title"])
          ], 2))), 128)),
          e.ellipses.next ? (u(), f("li", Fr, "…")) : y("", !0),
          e.items.next ? (u(), f("li", Lr, [
            A(i, J({
              to: e.items.next.href,
              title: "Go to next page",
              rel: "next"
            }, e.items.next.attributes), {
              default: S(() => [
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
            A(i, J({
              to: e.items.last.href,
              title: "Go to last page"
            }, e.items.last.attributes), {
              default: S(() => [
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
  return t.text != null ? (u(), w(z(t.element), { key: 0 }, {
    default: S(() => [
      C(_(t.text), 1)
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
    return (s, t) => e.unwrapped ? g(s.$slots, "default", { key: 1 }) : (u(), w(z(e.is), { key: 0 }, {
      default: S(() => [
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
  return u(), w(t);
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
        width: lt(500, 1e3),
        height: lt(500, 1e3)
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
  return u(!0), f(U, null, B(parseInt(t.amount), (r) => (u(), w(z(t.element), { key: r }, {
    default: S(() => [...s[0] || (s[0] = [
      C(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed semper erat tincidunt tellus vestibulum dictum. Fusce vel augue commodo, egestas diam sed, accumsan leo. Maecenas congue nec nisl et ullamcorper. Maecenas tincidunt, tortor et viverra eleifend, enim leo vestibulum ipsum, quis placerat mi nisi nec ex. Vivamus a justo volutpat, scelerisque elit eget, lacinia ex. Phasellus dapibus sollicitudin tortor, vitae suscipit nunc condimentum ut. Cras suscipit feugiat nibh nec consectetur. Phasellus vitae quam blandit, cursus metus ut, placerat mi. Sed tempor lacus non est interdum imperdiet nec quis metus. Praesent vel eleifend diam. Donec tincidunt eget purus sed posuere. ", -1)
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
  }, _(l.title), 513)) : y("", !0);
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
    return (t, n) => e.content?.length ? (u(), w(Gr, {
      key: 0,
      class: "wysiwyg",
      unwrapped: e.noWrapper
    }, {
      default: S(() => [
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
      C(_(o.currentValue), 1)
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
    const s = e, t = (r, i) => `${i === 0 ? 0 : r / i * 100}%`, n = b(() => s.indeterminate ? null : t(s.amount, s.total)), o = b(() => t(s.deficit, s.total)), l = b(() => ({
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
        e.label ? (u(), w(z(e.labelElement), {
          key: 0,
          class: m(["progress-bar__label", [e.classes.label, { "hidden-visually": e.labelHidden }]])
        }, {
          default: S(() => [
            g(r.$slots, "label", {}, () => [
              C(_(e.label), 1)
            ])
          ]),
          _: 3
        }, 8, ["class"])) : y("", !0),
        e.amountInHeader ? (u(), f("div", ci, [
          i[0] || (i[0] = h("strong", { class: "hidden-visually" }, "Amount:", -1)),
          g(r.$slots, "valueAmount", { value: e.amount }, () => [
            C(_(e.formatValue(e.amount, "amount")), 1)
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
            C(_(e.formatValue(e.amount, "amount")), 1)
          ])
        ]),
        e.deficit > 0 ? (u(), f("div", mi, [
          i[2] || (i[2] = h("strong", { class: "hidden-visually" }, "Deficit: ", -1)),
          g(r.$slots, "valueDeficit", { value: e.deficit }, () => [
            C("-" + _(e.formatValue(e.deficit, "deficit")), 1)
          ])
        ])) : y("", !0),
        h("div", gi, [
          i[3] || (i[3] = h("strong", { class: "hidden-visually" }, "Total:", -1)),
          g(r.$slots, "valueTotal", { value: e.total }, () => [
            C(_(e.formatValue(e.total, "total")), 1)
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
    const s = e, t = R(null), n = (c) => c === 100 ? 101 : c, o = (c = 0) => {
      if (!t.value || !t.value.animate) return;
      const a = { strokeDasharray: [`${c} 100`, l.value] };
      t.value.animate(a, { duration: s.duration, easing: s.easing, fill: "forwards" });
    };
    ye(() => s.percentage, (c, a) => {
      c !== a && o(n(a));
    });
    const l = b(() => `${n(s.percentage)} 100`), r = b(() => s.outside || s.outsideBelow || s.small), i = b(() => {
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
    return ht(() => {
      o();
    }), (c, a) => (u(), f("div", {
      class: m(i.value)
    }, [
      h("strong", vi, _(e.label), 1),
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
            C(_(e.formatValue(e.percentage)), 1)
          ])
        ])) : y("", !0)
      ]),
      r.value && !e.noValue ? (u(), f("strong", _i, [
        g(c.$slots, "value", { value: e.percentage }, () => [
          C(_(e.formatValue(e.percentage)), 1)
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
function Ft(e) {
  if (!e || e.length === 0) return /* @__PURE__ */ new Set();
  const s = e.sort((n, o) => n.size - o.size), t = new Set(s[0]);
  for (let n = 1; n < s.length; n++) {
    for (const o of t)
      s[n].has(o) || t.delete(o);
    if (t.size === 0) break;
  }
  return t;
}
function xt(e, s, t) {
  if (!e || e.length === 0)
    return t;
  const n = e.map((o) => {
    const l = o.children.map((r) => {
      const i = `${o.uid}:${r.uid}`;
      return s.get(i) || /* @__PURE__ */ new Set();
    });
    return o.match === "all" ? Ft(l) : wi(l);
  });
  return Ft(n);
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
  const t = (O, I) => {
    const L = O[I];
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
    getSortValue: p = (O) => O.title || O.label || "",
    countMode: v = "none"
    // 'none', 'simple', 'intuitive'
  } = s, k = (O) => O.sort((I, L) => {
    const P = p(I), H = p(L);
    return P && H ? String(P).localeCompare(String(H)) : P ? -1 : H ? 1 : 0;
  }), $ = {
    az: { text: "A-Z", sort: k },
    za: { text: "Z-A", sort: (O) => k(O).reverse() }
  };
  function E(O) {
    return (O || []).map((I) => ({
      ...I,
      open: I.open || !1,
      children: I.children.map((L) => ({
        ...L,
        selected: L.selected || !1
      })),
      selectedCount: 0
    }));
  }
  const x = R([]), G = R(l), K = R(r), M = b(() => !o || !e.value?.length ? null : Si(e.value, o)), ce = b(() => ({
    ...i ? {} : $,
    ...c
  })), oe = b(() => {
    const O = /* @__PURE__ */ new Map(), I = q.value;
    if (!I || !o) return O;
    const L = new Map(o.map((P) => {
      const H = P.getValue || ((X) => X[P.uid]);
      return [P.uid, H];
    }));
    for (let P = 0; P < I.length; P++) {
      const H = I[P];
      for (const X of o) {
        const Y = L.get(X.uid)(H), ee = Array.isArray(Y) ? Y : Y ? [Y] : [];
        for (const et of ee) {
          const Fe = `${X.uid}:${et}`;
          O.has(Fe) || O.set(Fe, /* @__PURE__ */ new Set()), O.get(Fe).add(P);
        }
      }
    }
    return O;
  }), Pe = b(() => ({
    shouldSort: !0,
    keys: ["title", "label", "description", "author"],
    ...a
  })), q = b(() => G.value?.length ? new ao(e.value, Pe.value).search(G.value).map((I) => I.item) : e.value), se = b(() => {
    const O = [];
    return x.value.forEach((I) => {
      const L = I.children.filter((P) => P.selected);
      L.length > 0 && O.push({ ...I, children: L });
    }), O;
  }), ve = b(() => {
    if (!se.value.length)
      return q.value;
    const O = oe.value;
    if (O.size === 0 && q.value.length > 0 && o?.length > 0)
      return [];
    const I = new Set(q.value.map((H, X) => X)), L = xt(se.value, O, I), P = [];
    for (const H of L)
      P.push(q.value[H]);
    return P;
  }), ls = b(() => {
    const O = ce.value[K.value]?.sort;
    return typeof O != "function" ? ve.value : O([...ve.value]);
  });
  function On() {
    x.value.forEach((O) => {
      O.children && O.children.forEach((I) => I.selected = !1), O.selectedCount = 0;
    });
  }
  function xn({ groupUid: O, facetUid: I, selected: L }) {
    const P = x.value.find((H) => H.uid === O);
    if (P) {
      !P.multiple && L && P.children.forEach((X) => {
        X.uid !== I && (X.selected = !1);
      });
      const H = P.children.find((X) => X.uid === I);
      H && (H.selected = L), P.selectedCount = P.children.filter((X) => X.selected).length;
    }
  }
  return ye(M, (O) => {
    const I = E(n || O);
    I.forEach((L) => {
      L.selectedCount = L.children.filter((P) => P.selected).length;
    }), x.value = I;
  }, { immediate: !0 }), ye([se, q], ([O, I], [L, P]) => {
    if (!(v === "none" || !x.value.length) && !(O === L && I === P)) {
      if (v === "simple")
        x.value.forEach((H) => {
          const X = O.filter((Y) => Y.uid !== H.uid), ze = getFilteredItems(I, X);
          H.children.forEach((Y) => {
            Y.count = ze.filter((ee) => d(ee, H.uid).includes(Y.uid)).length;
          });
        });
      else if (v === "intuitive") {
        const H = oe.value;
        if (H.size === 0 && q.value.length > 0 && o?.length > 0)
          return;
        const X = new Set(q.value.map((Y, ee) => ee)), ze = xt(O, H, X);
        x.value.forEach((Y) => {
          Y.children.forEach((ee) => {
            const et = `${Y.uid}:${ee.uid}`, Fe = H.get(et) || /* @__PURE__ */ new Set();
            if (ee.selected)
              if (Y.multiple) {
                const Te = Ft([ze, Fe]);
                ee.count = Te.size;
              } else
                ee.count = ze.size;
            else {
              const Te = [];
              for (const tt of O)
                Te.push({ ...tt, children: [...tt.children] });
              let Le = Te.find((tt) => tt.uid === Y.uid);
              Le || (Le = { ...Y, children: [] }, Te.push(Le)), Y.multiple ? Le.children.push(ee) : Le.children = [ee];
              const Un = xt(Te, H, X);
              ee.count = Un.size;
            }
          });
        });
      }
    }
  }, { deep: !0, immediate: !0 }), {
    facets: x,
    searchValue: G,
    selectedSort: K,
    sortTypes: ce,
    displayItems: ls,
    selectedFacets: se,
    clearFilters: On,
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
    const t = e, n = s, o = b(() => {
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
      (u(), w(z(e.labelElement), {
        class: m(["facets-active__label", e.classes.label])
      }, {
        default: S(() => [
          g(i.$slots, "label", {}, () => [
            c[0] || (c[0] = C(" Active Filters: ", -1))
          ])
        ]),
        _: 3
      }, 8, ["class"])),
      h("ul", {
        class: m(["facets-active__list", e.classes.list])
      }, [
        (u(!0), f(U, null, B(o.value, (a) => (u(), f("li", {
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
              C(" " + _(a.label), 1)
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
}, $i = { key: 0 }, at = {
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
    const t = e, n = s, o = b(() => t.type === "radio" ? [{ label: `All ${t.groupName}s`, uid: "" }, ...t.children] : t.children);
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
    return (r, i) => (u(), w(cn, {
      class: "facets-list",
      legend: e.groupUid,
      type: e.type,
      options: o.value,
      compact: e.compact,
      "model-value": e.modelValue,
      "onUpdate:modelValue": l
    }, {
      default: S(({ option: c }) => [
        C(_(c.label) + " ", 1),
        c.count !== void 0 ? (u(), f("span", $i, "(" + _(c.count) + ")", 1)) : y("", !0)
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
      (u(!0), f(U, null, B(e.facets, (r) => (u(), w(Pt, {
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
        trigger: S(({ isOpen: i }) => [
          g(o.$slots, "groupTrigger", {
            group: r,
            isOpen: i
          }, () => [
            C(_(r.name), 1)
          ])
        ]),
        default: S(() => [
          A(at, {
            children: r.children.slice(0, e.maxVisible),
            groupUid: r.uid,
            groupName: r.name,
            type: r.multiple ? "checkbox" : "radio",
            compact: e.compact,
            "model-value": n(r),
            onFacetChange: l[0] || (l[0] = (i) => t("facet-change", i))
          }, null, 8, ["children", "groupUid", "groupName", "type", "compact", "model-value"]),
          r.children.length > e.maxVisible ? (u(), w(Pt, {
            key: 0,
            class: m(["facets-filters__more-facets", e.classes.moreFacets])
          }, {
            trigger: S(({ isOpen: i }) => [
              C(_(i ? "View Less" : "Show More"), 1)
            ]),
            default: S(() => [
              A(at, {
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
      (u(!0), f(U, null, B(e.facets, (r) => (u(), w(hs, {
        key: r.uid,
        modifiers: e.accordionModifiers,
        startOpen: r.open
      }, {
        trigger: S(({ isOpen: i }) => [
          g(o.$slots, "groupTrigger", {
            group: r,
            isOpen: i
          }, () => [
            C(_(r.name), 1)
          ])
        ]),
        default: S(() => [
          A(at, {
            children: r.children.slice(0, e.maxVisible),
            groupUid: r.uid,
            groupName: r.name,
            type: r.multiple ? "checkbox" : "radio",
            compact: e.compact,
            "model-value": n(r),
            onFacetChange: l[0] || (l[0] = (i) => t("facet-change", i))
          }, null, 8, ["children", "groupUid", "groupName", "type", "compact", "model-value"]),
          r.children.length > e.maxVisible ? (u(), w(hs, {
            key: 0,
            class: m(["facets-filters__more-facets", e.classes.moreFacets]),
            modifiers: e.accordionModifiers
          }, {
            trigger: S(({ isOpen: i }) => [
              C(_(i ? "View Less" : "Show More"), 1)
            ]),
            default: S(() => [
              A(at, {
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
        i.children.forEach((p) => {
          const v = d.has(p.uid);
          p.selected !== v && t("facet-change", {
            groupUid: i.uid,
            facetUid: p.uid,
            selected: v
          });
        });
      } else {
        const d = c;
        i.children.forEach((p) => {
          const v = p.uid === d;
          p.selected !== v && t("facet-change", {
            groupUid: i.uid,
            facetUid: p.uid,
            selected: v
          });
        }), a();
      }
    }
    return (i, c) => (u(), f("div", {
      class: m(e.classes.container)
    }, [
      (u(!0), f(U, null, B(e.facets, (a) => (u(), f("div", {
        key: a.uid,
        class: m(e.classes.group)
      }, [
        A(mt, {
          classes: {
            trigger: e.classes.trigger,
            content: e.classes.content
          }
        }, {
          trigger: S(() => [
            g(i.$slots, "trigger", {
              group: a,
              label: l(a)
            }, () => [
              h("span", null, [
                C(_(a.name) + ": ", 1),
                h("strong", null, _(l(a)), 1)
              ])
            ]),
            A(N, {
              class: m(e.classes.triggerIcon),
              icon: "fas fa-chevron-down"
            }, null, 8, ["class"])
          ]),
          default: S(({ close: d }) => [
            A(cn, {
              legend: a.name,
              type: a.multiple ? "checkbox" : "radio",
              options: n(a),
              "model-value": o(a),
              "onUpdate:modelValue": (p) => r(a, p, d),
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
      (u(!0), f(U, null, B(e.facets, (r) => (u(), f("div", {
        class: "facets-dropdown-filters__group",
        key: r.uid
      }, [
        h("label", {
          for: `facet-dropdown-${r.uid}`,
          class: "facets-dropdown-filters__label"
        }, _(r.name), 9, Oi),
        h("select", {
          id: `facet-dropdown-${r.uid}`,
          class: "facets-dropdown-filters__select",
          onChange: (i) => n(r, i)
        }, [
          h("option", Ui, "All " + _(r.name) + "s", 1),
          (u(!0), f(U, null, B(r.children, (i) => (u(), f("option", {
            key: i.uid,
            value: i.uid,
            selected: i.selected
          }, _(i.label), 9, Bi))), 128))
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
      e.items.length ? (u(), w(Hs, {
        key: 0,
        tag: e.tag,
        name: e.transitionName,
        class: m(["facets-results__list", e.classes.list])
      }, {
        default: S(() => [
          (u(!0), f(U, null, B(e.items, (n, o) => (u(), f("li", {
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
    const l = `facet-view-keyword-${++o}`, r = b({
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
      Ue(h("input", {
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
    const s = R(!1), t = ut("uluIsMobile"), n = R(null), o = R(null), l = b(() => t.value ? o.value : n.value);
    return (r, i) => (u(), f("div", {
      class: m(["facets-sidebar", { "facets-sidebar--filters-hidden": T(t) }])
    }, [
      h("div", Fi, [
        g(r.$slots, "header")
      ]),
      Ue(h("div", Li, [
        h("button", {
          class: m(e.classes.mobileButton),
          onClick: i[0] || (i[0] = (c) => s.value = !0)
        }, _(e.mobileButtonText), 3)
      ], 512), [
        [Et, T(t)]
      ]),
      h("div", Vi, [
        Ue(h("div", {
          class: "facets-sidebar__sidebar",
          ref_key: "desktopTarget",
          ref: n
        }, null, 512), [
          [Et, !T(t)]
        ]),
        h("div", Hi, [
          g(r.$slots, "main")
        ])
      ]),
      T(t) ? (u(), w(Ys, {
        key: 0,
        modelValue: s.value,
        "onUpdate:modelValue": i[1] || (i[1] = (c) => s.value = c),
        position: "right",
        title: "Filters & Sort",
        allowResize: ""
      }, {
        default: S(() => [
          h("div", {
            class: "facets-sidebar__sidebar",
            ref_key: "mobileTarget",
            ref: o
          }, null, 512)
        ]),
        _: 1
      }, 8, ["modelValue"])) : y("", !0),
      l.value ? (u(), w(dt, {
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
    const n = s, o = R(`ulu-facet-sort-${++t}`);
    return (l, r) => (u(), f("div", {
      class: m(["facets-sort", e.classes.sortForm])
    }, [
      h("label", {
        for: o.value,
        class: m(e.classes.sortFormLabel)
      }, [
        g(l.$slots, "default", {}, () => [
          r[1] || (r[1] = C("Sort:", -1))
        ])
      ], 10, Ni),
      h("select", {
        value: e.modelValue,
        onChange: r[0] || (r[0] = (i) => n("update:modelValue", i.target.value)),
        id: o.value,
        class: m(e.classes.sortFormSelect)
      }, [
        (u(!0), f(U, null, B(e.sortTypes, (i, c) => (u(), f("option", {
          value: c,
          key: c
        }, _(i.text), 9, Wi))), 128))
      ], 42, Di)
    ], 2));
  }
}, un = Symbol(), dn = Symbol(), _t = Symbol(), Xi = {
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
      [_t]: b(() => this.sections),
      [un]: (e) => {
        const { titleId: s, title: t } = e, { element: n } = e.$refs;
        this.sections.push({
          instance: e,
          titleId: s,
          title: t,
          element: n,
          active: !1
        }), this.update();
      },
      [dn]: (e) => {
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
          const a = this.getSectionIndex(i), d = i.offsetTop, p = s[a], v = a === 0 && o > d, k = a === s.length - 1 && o < d;
          p && this.$nextTick(() => {
            c ? (t(p), p.active = !0) : (v && !n || k && p.active) && t(), this.$emit("section-change", {
              section: p,
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
    sections: { from: _t }
  },
  props: {
    element: {
      type: String,
      default: "nav"
    }
  }
}, Ki = ["href"];
function Zi(e, s, t, n, o, l) {
  return l.sections.length ? (u(), w(z(t.element), {
    key: 0,
    class: "scroll-anchors__nav"
  }, {
    default: S(() => [
      h("ul", null, [
        (u(!0), f(U, null, B(l.sections, (r, i) => (u(), f("li", {
          key: i,
          class: m({ "is-active": r.active })
        }, [
          h("a", {
            class: m({ "is-active": r.active }),
            href: `#${r.titleId}`
          }, _(r.title), 11, Ki)
        ], 2))), 128))
      ])
    ]),
    _: 1
  })) : y("", !0);
}
const Qh = /* @__PURE__ */ j(Yi, [["render", Zi]]), Ji = {
  name: "ScrollAnchorsNavAnimated",
  inject: {
    sections: { from: _t }
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
      e && !this.indicatorAnimReady && Xs(() => {
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
  return l.sections.length ? (u(), w(z(t.element), {
    key: 0,
    class: "scroll-anchors__nav scroll-anchors__nav--animated"
  }, {
    default: S(() => [
      h("ul", Qi, [
        (u(!0), f(U, null, B(l.sections, (r, i) => (u(), f("li", {
          key: i,
          class: m({ "is-active": r.active })
        }, [
          h("a", {
            class: m({ "is-active": r.active }),
            ref_for: !0,
            ref: (c) => l.addLinkRef(i, c),
            href: `#${r.titleId}`
          }, _(r.title), 11, ea)
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
    register: { from: un },
    unregister: { from: dn },
    sections: { from: _t, default: () => b(() => []) }
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
    (u(), w(z(t.titleElement), {
      class: m(t.titleClass),
      id: o.titleId
    }, {
      default: S(() => [
        C(_(t.title), 1)
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
    return (s, t) => e.when ? (u(), w(oa, {
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
    const s = e, t = b(() => uo(s.lines, () => {
      const o = lt(70, 100);
      let l = 0;
      const r = () => {
        const a = o - l, d = lt(15, a);
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
      (u(!0), f(U, null, B(t.value, (l, r) => (u(), f("div", { key: r }, [
        (u(!0), f(U, null, B(l, (i) => (u(), f("span", {
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
          (u(!0), f(U, null, B(o.slides, (i, c) => (u(), f("li", {
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
      (u(!0), f(U, null, B(o.slides, (i, c) => (u(), f("li", {
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
            h("span", ba, "Item " + _(c + 1), 1)
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
  return u(), w(i, {
    class: "slideshow--images",
    items: t.images,
    onSlideChange: l.slideChange
  }, {
    slide: S(({ item: c }) => [
      h("img", {
        src: c.src,
        alt: c.alt
      }, null, 8, ka),
      h("div", $a, [
        t.selectButton ? (u(), w(r, {
          key: 0,
          class: "type-small",
          icon: "plus",
          small: "",
          iconBefore: ""
        }, {
          default: S(() => [...s[0] || (s[0] = [
            C(" Select ", -1)
          ])]),
          _: 1
        })) : y("", !0)
      ])
    ]),
    nav: S(({ index: c }) => [
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
  return u(!0), f(U, null, B(t.rows, (r, i) => (u(), f("tr", {
    key: `br-${i}`,
    id: t.optionalAttr(t.isActual && r.id),
    class: m(t.resolveClasses(t.classes.row, { row: r.data, rowIndex: i, isActual: t.isActual, foot: t.foot })),
    style: D({
      height: r.height
    })
  }, [
    (u(!0), f(U, null, B(t.rowColumns, (c, a) => (u(), w(z(c.rowHeader ? "th" : "td"), {
      id: t.optionalAttr(t.isActual && c.rowHeader && c.getRowHeaderId(i)),
      scope: t.optionalAttr(t.isActual && c.rowHeader && "row"),
      key: `bc-${a}`,
      headers: t.optionalAttr(t.isActual && t.getCellHeaders(c, i)),
      class: m(t.resolveClasses(c.class, { column: c, index: a, isActual: t.isActual, row: r, rowIndex: i, foot: t.foot })),
      style: D({
        width: t.columnWidth
      })
    }, {
      default: S(() => [
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
        }, null, 8, Ba)) : (u(), f(U, { key: 2 }, [
          C(_(t.value({ row: r, column: c, rowIndex: i, isActual: t.isActual, foot: t.foot })), 1)
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
    t.caption ? (u(), f("caption", Ma, _(t.caption), 1)) : y("", !0),
    h("thead", null, [
      (u(!0), f(U, null, B(t.headerRows, (i, c) => (u(), f("tr", {
        key: `hr-${c}`,
        id: l.optionalAttr(t.isActual && i.id),
        class: m(t.resolveClasses(t.classes.rowHeader, { row: i, rowIndex: c, isActual: t.isActual })),
        style: D({
          height: i.height
        })
      }, [
        (u(!0), f(U, null, B(i.columns, (a, d) => (u(), f("th", {
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
          ref: (p) => l.addHeaderRef(a, p)
        }, [
          a.sortable ? (u(), w(z(t.isActual ? "button" : "div"), {
            key: 0,
            class: m(["table-sticky__sort-button", {
              "table-sticky__sort-button--focused": a.sortFocused
            }]),
            onClick: (p) => e.$emit("column-sorted", a),
            onFocus: (p) => l.handleSortFocus(a, !0),
            onBlur: (p) => l.handleSortFocus(a, !1),
            "aria-pressed": a.sortApplied ? "true" : "false"
          }, {
            default: S(() => [
              e.$slots[a.slotHeader] ? g(e.$slots, a.slotHeader, {
                key: 0,
                isActual: t.isActual,
                column: a,
                index: d
              }) : a.htmlTitle ? (u(), f("div", {
                key: 1,
                innerHTML: t.getColumnTitle({ column: a, index: d, isActual: t.isActual })
              }, null, 8, Fa)) : (u(), f(U, { key: 2 }, [
                C(_(t.getColumnTitle({ column: a, index: d, isActual: t.isActual })), 1)
              ], 64)),
              h("span", La, [
                h("span", Va, [
                  g(e.$slots, "sortIcon", {}, () => [
                    s[0] || (s[0] = C("▼", -1))
                  ])
                ])
              ])
            ]),
            _: 2
          }, 1064, ["class", "onClick", "onFocus", "onBlur", "aria-pressed"])) : (u(), f(U, { key: 1 }, [
            e.$slots[a.slotHeader] ? g(e.$slots, a.slotHeader, {
              key: 0,
              isActual: t.isActual,
              column: a,
              index: d
            }) : a.htmlTitle ? (u(), f("div", {
              key: 1,
              innerHTML: t.getColumnTitle({ column: a, index: d, isActual: t.isActual })
            }, null, 8, Ha)) : (u(), f(U, { key: 2 }, [
              C(_(t.getColumnTitle({ column: a, index: d, isActual: t.isActual })), 1)
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
      }, Oe({ _: 2 }, [
        B(e.$slots, (i, c) => ({
          name: c,
          fn: S((a) => [
            g(e.$slots, c, ne(re(a)))
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
      }, Oe({ _: 2 }, [
        B(e.$slots, (i, c) => ({
          name: c,
          fn: S((a) => [
            g(e.$slots, c, ne(re(a)))
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
function fn(e, s) {
  return e === s || e !== e && s !== s;
}
function wt(e, s) {
  for (var t = e.length; t--; )
    if (fn(e[t][0], s))
      return t;
  return -1;
}
var qa = Array.prototype, Ya = qa.splice;
function Ka(e) {
  var s = this.__data__, t = wt(s, e);
  if (t < 0)
    return !1;
  var n = s.length - 1;
  return t == n ? s.pop() : Ya.call(s, t, 1), --this.size, !0;
}
function Za(e) {
  var s = this.__data__, t = wt(s, e);
  return t < 0 ? void 0 : s[t][1];
}
function Ja(e) {
  return wt(this.__data__, e) > -1;
}
function Qa(e, s) {
  var t = this.__data__, n = wt(t, e);
  return n < 0 ? (++this.size, t.push([e, s])) : t[n][1] = s, this;
}
function he(e) {
  var s = -1, t = e == null ? 0 : e.length;
  for (this.clear(); ++s < t; ) {
    var n = e[s];
    this.set(n[0], n[1]);
  }
}
he.prototype.clear = Ga;
he.prototype.delete = Ka;
he.prototype.get = Za;
he.prototype.has = Ja;
he.prototype.set = Qa;
function ec() {
  this.__data__ = new he(), this.size = 0;
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
var hn = typeof global == "object" && global && global.Object === Object && global, oc = typeof self == "object" && self && self.Object === Object && self, ae = hn || oc || Function("return this")(), Ee = ae.Symbol, mn = Object.prototype, lc = mn.hasOwnProperty, rc = mn.toString, Ve = Ee ? Ee.toStringTag : void 0;
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
var dc = "[object Null]", fc = "[object Undefined]", gs = Ee ? Ee.toStringTag : void 0;
function Je(e) {
  return e == null ? e === void 0 ? fc : dc : gs && gs in Object(e) ? ic(e) : uc(e);
}
function St(e) {
  var s = typeof e;
  return e != null && (s == "object" || s == "function");
}
var hc = "[object AsyncFunction]", mc = "[object Function]", gc = "[object GeneratorFunction]", vc = "[object Proxy]";
function gn(e) {
  if (!St(e))
    return !1;
  var s = Je(e);
  return s == mc || s == gc || s == hc || s == vc;
}
var Ut = ae["__core-js_shared__"], vs = function() {
  var e = /[^.]+$/.exec(Ut && Ut.keys && Ut.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function pc(e) {
  return !!vs && vs in e;
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
  if (!St(e) || pc(e))
    return !1;
  var s = gn(e) ? Tc : wc;
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
    map: new (Ke || he)(),
    string: new Se()
  };
}
function Vc(e) {
  var s = typeof e;
  return s == "string" || s == "number" || s == "symbol" || s == "boolean" ? e !== "__proto__" : e === null;
}
function kt(e, s) {
  var t = e.__data__;
  return Vc(s) ? t[typeof s == "string" ? "string" : "hash"] : t.map;
}
function Hc(e) {
  var s = kt(this, e).delete(e);
  return this.size -= s ? 1 : 0, s;
}
function Nc(e) {
  return kt(this, e).get(e);
}
function Dc(e) {
  return kt(this, e).has(e);
}
function Wc(e, s) {
  var t = kt(this, e), n = t.size;
  return t.set(e, s), this.size += t.size == n ? 0 : 1, this;
}
function Ie(e) {
  var s = -1, t = e == null ? 0 : e.length;
  for (this.clear(); ++s < t; ) {
    var n = e[s];
    this.set(n[0], n[1]);
  }
}
Ie.prototype.clear = Lc;
Ie.prototype.delete = Hc;
Ie.prototype.get = Nc;
Ie.prototype.has = Dc;
Ie.prototype.set = Wc;
var Xc = 200;
function Gc(e, s) {
  var t = this.__data__;
  if (t instanceof he) {
    var n = t.__data__;
    if (!Ke || n.length < Xc - 1)
      return n.push([e, s]), this.size = ++t.size, this;
    t = this.__data__ = new Ie(n);
  }
  return t.set(e, s), this.size = t.size, this;
}
function Me(e) {
  var s = this.__data__ = new he(e);
  this.size = s.size;
}
Me.prototype.clear = ec;
Me.prototype.delete = tc;
Me.prototype.get = sc;
Me.prototype.has = nc;
Me.prototype.set = Gc;
function qc(e, s) {
  for (var t = -1, n = e == null ? 0 : e.length; ++t < n && s(e[t], t, e) !== !1; )
    ;
  return e;
}
var ps = function() {
  try {
    var e = Ce(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}();
function Yc(e, s, t) {
  s == "__proto__" && ps ? ps(e, s, {
    configurable: !0,
    enumerable: !0,
    value: t,
    writable: !0
  }) : e[s] = t;
}
var Kc = Object.prototype, Zc = Kc.hasOwnProperty;
function Jc(e, s, t) {
  var n = e[s];
  (!(Zc.call(e, s) && fn(n, t)) || t === void 0 && !(s in e)) && Yc(e, s, t);
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
function ys(e) {
  return Qe(e) && Je(e) == eu;
}
var vn = Object.prototype, tu = vn.hasOwnProperty, su = vn.propertyIsEnumerable, nu = ys(/* @__PURE__ */ function() {
  return arguments;
}()) ? ys : function(e) {
  return Qe(e) && tu.call(e, "callee") && !su.call(e, "callee");
}, ss = Array.isArray;
function ou() {
  return !1;
}
var pn = typeof exports == "object" && exports && !exports.nodeType && exports, bs = pn && typeof module == "object" && module && !module.nodeType && module, lu = bs && bs.exports === pn, _s = lu ? ae.Buffer : void 0, ru = _s ? _s.isBuffer : void 0, yn = ru || ou, iu = 9007199254740991, au = /^(?:0|[1-9]\d*)$/;
function cu(e, s) {
  var t = typeof e;
  return s = s ?? iu, !!s && (t == "number" || t != "symbol" && au.test(e)) && e > -1 && e % 1 == 0 && e < s;
}
var uu = 9007199254740991;
function bn(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= uu;
}
var du = "[object Arguments]", fu = "[object Array]", hu = "[object Boolean]", mu = "[object Date]", gu = "[object Error]", vu = "[object Function]", pu = "[object Map]", yu = "[object Number]", bu = "[object Object]", _u = "[object RegExp]", wu = "[object Set]", Su = "[object String]", ku = "[object WeakMap]", $u = "[object ArrayBuffer]", Cu = "[object DataView]", Tu = "[object Float32Array]", Au = "[object Float64Array]", Ou = "[object Int8Array]", xu = "[object Int16Array]", Uu = "[object Int32Array]", Bu = "[object Uint8Array]", Ru = "[object Uint8ClampedArray]", Eu = "[object Uint16Array]", ju = "[object Uint32Array]", V = {};
V[Tu] = V[Au] = V[Ou] = V[xu] = V[Uu] = V[Bu] = V[Ru] = V[Eu] = V[ju] = !0;
V[du] = V[fu] = V[$u] = V[hu] = V[Cu] = V[mu] = V[gu] = V[vu] = V[pu] = V[yu] = V[bu] = V[_u] = V[wu] = V[Su] = V[ku] = !1;
function Iu(e) {
  return Qe(e) && bn(e.length) && !!V[Je(e)];
}
function ns(e) {
  return function(s) {
    return e(s);
  };
}
var _n = typeof exports == "object" && exports && !exports.nodeType && exports, We = _n && typeof module == "object" && module && !module.nodeType && module, Mu = We && We.exports === _n, Bt = Mu && hn.process, je = function() {
  try {
    var e = We && We.require && We.require("util").types;
    return e || Bt && Bt.binding && Bt.binding("util");
  } catch {
  }
}(), ws = je && je.isTypedArray, Pu = ws ? ns(ws) : Iu, zu = Object.prototype, Fu = zu.hasOwnProperty;
function Lu(e, s) {
  var t = ss(e), n = !t && nu(e), o = !t && !n && yn(e), l = !t && !n && !o && Pu(e), r = t || n || o || l, i = r ? Qc(e.length, String) : [], c = i.length;
  for (var a in e)
    Fu.call(e, a) && !(r && // Safari 9 has enumerable `arguments.length` in strict mode.
    (a == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    o && (a == "offset" || a == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    l && (a == "buffer" || a == "byteLength" || a == "byteOffset") || // Skip index properties.
    cu(a, c))) && i.push(a);
  return i;
}
var Vu = Object.prototype;
function wn(e) {
  var s = e && e.constructor, t = typeof s == "function" && s.prototype || Vu;
  return e === t;
}
function Sn(e, s) {
  return function(t) {
    return e(s(t));
  };
}
var Hu = Sn(Object.keys, Object), Nu = Object.prototype, Du = Nu.hasOwnProperty;
function Wu(e) {
  if (!wn(e))
    return Hu(e);
  var s = [];
  for (var t in Object(e))
    Du.call(e, t) && t != "constructor" && s.push(t);
  return s;
}
function Xu(e) {
  return e != null && bn(e.length) && !gn(e);
}
function Gu(e) {
  return Xu(e) ? Lu(e) : Wu(e);
}
var kn = typeof exports == "object" && exports && !exports.nodeType && exports, Ss = kn && typeof module == "object" && module && !module.nodeType && module, qu = Ss && Ss.exports === kn, ks = qu ? ae.Buffer : void 0;
ks && ks.allocUnsafe;
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
var Ju = Object.prototype, Qu = Ju.propertyIsEnumerable, $s = Object.getOwnPropertySymbols, ed = $s ? function(e) {
  return e == null ? [] : (e = Object(e), Ku($s(e), function(s) {
    return Qu.call(e, s);
  }));
} : Zu;
function td(e, s) {
  for (var t = -1, n = s.length, o = e.length; ++t < n; )
    e[o + t] = s[t];
  return e;
}
var sd = Sn(Object.getPrototypeOf, Object);
function nd(e, s, t) {
  var n = s(e);
  return ss(e) ? n : td(n, t(e));
}
function od(e) {
  return nd(e, Gu, ed);
}
var Lt = Ce(ae, "DataView"), Vt = Ce(ae, "Promise"), Ht = Ce(ae, "Set"), Nt = Ce(ae, "WeakMap"), Cs = "[object Map]", ld = "[object Object]", Ts = "[object Promise]", As = "[object Set]", Os = "[object WeakMap]", xs = "[object DataView]", rd = $e(Lt), id = $e(Ke), ad = $e(Vt), cd = $e(Ht), ud = $e(Nt), de = Je;
(Lt && de(new Lt(new ArrayBuffer(1))) != xs || Ke && de(new Ke()) != Cs || Vt && de(Vt.resolve()) != Ts || Ht && de(new Ht()) != As || Nt && de(new Nt()) != Os) && (de = function(e) {
  var s = Je(e), t = s == ld ? e.constructor : void 0, n = t ? $e(t) : "";
  if (n)
    switch (n) {
      case rd:
        return xs;
      case id:
        return Cs;
      case ad:
        return Ts;
      case cd:
        return As;
      case ud:
        return Os;
    }
  return s;
});
var dd = Object.prototype, fd = dd.hasOwnProperty;
function hd(e) {
  var s = e.length, t = new e.constructor(s);
  return s && typeof e[0] == "string" && fd.call(e, "index") && (t.index = e.index, t.input = e.input), t;
}
var Us = ae.Uint8Array;
function os(e) {
  var s = new e.constructor(e.byteLength);
  return new Us(s).set(new Us(e)), s;
}
function md(e, s) {
  var t = os(e.buffer);
  return new e.constructor(t, e.byteOffset, e.byteLength);
}
var gd = /\w*$/;
function vd(e) {
  var s = new e.constructor(e.source, gd.exec(e));
  return s.lastIndex = e.lastIndex, s;
}
var Bs = Ee ? Ee.prototype : void 0, Rs = Bs ? Bs.valueOf : void 0;
function pd(e) {
  return Rs ? Object(Rs.call(e)) : {};
}
function yd(e, s) {
  var t = os(e.buffer);
  return new e.constructor(t, e.byteOffset, e.length);
}
var bd = "[object Boolean]", _d = "[object Date]", wd = "[object Map]", Sd = "[object Number]", kd = "[object RegExp]", $d = "[object Set]", Cd = "[object String]", Td = "[object Symbol]", Ad = "[object ArrayBuffer]", Od = "[object DataView]", xd = "[object Float32Array]", Ud = "[object Float64Array]", Bd = "[object Int8Array]", Rd = "[object Int16Array]", Ed = "[object Int32Array]", jd = "[object Uint8Array]", Id = "[object Uint8ClampedArray]", Md = "[object Uint16Array]", Pd = "[object Uint32Array]";
function zd(e, s, t) {
  var n = e.constructor;
  switch (s) {
    case Ad:
      return os(e);
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
var Es = Object.create, Fd = /* @__PURE__ */ function() {
  function e() {
  }
  return function(s) {
    if (!St(s))
      return {};
    if (Es)
      return Es(s);
    e.prototype = s;
    var t = new e();
    return e.prototype = void 0, t;
  };
}();
function Ld(e) {
  return typeof e.constructor == "function" && !wn(e) ? Fd(sd(e)) : {};
}
var Vd = "[object Map]";
function Hd(e) {
  return Qe(e) && de(e) == Vd;
}
var js = je && je.isMap, Nd = js ? ns(js) : Hd, Dd = "[object Set]";
function Wd(e) {
  return Qe(e) && de(e) == Dd;
}
var Is = je && je.isSet, Xd = Is ? ns(Is) : Wd, $n = "[object Arguments]", Gd = "[object Array]", qd = "[object Boolean]", Yd = "[object Date]", Kd = "[object Error]", Cn = "[object Function]", Zd = "[object GeneratorFunction]", Jd = "[object Map]", Qd = "[object Number]", Tn = "[object Object]", ef = "[object RegExp]", tf = "[object Set]", sf = "[object String]", nf = "[object Symbol]", of = "[object WeakMap]", lf = "[object ArrayBuffer]", rf = "[object DataView]", af = "[object Float32Array]", cf = "[object Float64Array]", uf = "[object Int8Array]", df = "[object Int16Array]", ff = "[object Int32Array]", hf = "[object Uint8Array]", mf = "[object Uint8ClampedArray]", gf = "[object Uint16Array]", vf = "[object Uint32Array]", F = {};
F[$n] = F[Gd] = F[lf] = F[rf] = F[qd] = F[Yd] = F[af] = F[cf] = F[uf] = F[df] = F[ff] = F[Jd] = F[Qd] = F[Tn] = F[ef] = F[tf] = F[sf] = F[nf] = F[hf] = F[mf] = F[gf] = F[vf] = !0;
F[Kd] = F[Cn] = F[of] = !1;
function ot(e, s, t, n, o, l) {
  var r;
  if (r !== void 0)
    return r;
  if (!St(e))
    return e;
  var i = ss(e);
  if (i)
    r = hd(e);
  else {
    var c = de(e), a = c == Cn || c == Zd;
    if (yn(e))
      return Yu(e);
    if (c == Tn || c == $n || a && !o)
      r = a ? {} : Ld(e);
    else {
      if (!F[c])
        return o ? e : {};
      r = zd(e, c);
    }
  }
  l || (l = new Me());
  var d = l.get(e);
  if (d)
    return d;
  l.set(e, r), Xd(e) ? e.forEach(function(k) {
    r.add(ot(k, s, t, k, e, l));
  }) : Nd(e) && e.forEach(function(k, $) {
    r.set($, ot(k, s, t, $, e, l));
  });
  var p = od, v = i ? void 0 : p(e);
  return qc(v || e, function(k, $) {
    v && ($ = k, k = e[$]), Jc(r, $, ot(k, s, t, $, e, l));
  }), r;
}
var pf = 1, yf = 4;
function bf(e) {
  return ot(e, pf | yf);
}
const Rt = (e) => e.every((s) => typeof s == "object"), Ms = !0, An = () => window.innerWidth;
let Ps = An();
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
      required: Ms
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
      validator: Rt,
      required: Ms
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
      validator: Rt
      // required
    },
    /**
     * Array of rows for footer (tfoot)
     */
    footerRows: {
      type: Array,
      validator: Rt
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
      resizeHandler: Dt(this.onResize.bind(this), 500, !0),
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
      const e = An();
      Ps !== e && (Ps = e, this.resizing ? (this.resizing = !1, this.setTableSizes(), this.checkOverflowX(), this.syncScrollLeft()) : (this.resizing = !0, this.removeTableSizes()));
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
        this.sizesCalculated = !0, Xs(() => {
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
        }, Oe({ _: 2 }, [
          B(e.$slots, (i, c) => ({
            name: c,
            fn: S((a) => [
              g(e.$slots, c, ne(re(a)))
            ])
          }))
        ]), 1032, ["classes", "caption", "resolveClasses", "getColumnTitle", "idPrefix", "headerRows", "style", "onColumnSorted"])
      ])
    ]),
    h("div", kf, [
      t.firstColumnSticky ? (u(), w(r, {
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
      }, Oe({ _: 2 }, [
        B(e.$slots, (i, c) => ({
          name: c,
          fn: S((a) => [
            g(e.$slots, c, ne(re(a)))
          ])
        }))
      ]), 1032, ["classes", "caption", "resolveClasses", "getColumnTitle", "idPrefix", "headerRows", "style", "onColumnSorted"])) : y("", !0)
    ]),
    h("div", $f, [
      Ue(h("div", {
        class: m(["table-sticky__controls", l.resolveClasses(t.classes.controls)]),
        ref: "controls"
      }, [
        e.$slots.controls ? g(e.$slots, "controls", {
          key: 0,
          scrollLeft: l.scrollLeft,
          scrollRight: l.scrollRight,
          canScrollLeft: o.canScrollLeft,
          canScrollRight: o.canScrollRight
        }) : t.controlsComponent ? (u(), w(z(t.controlsComponent), {
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
              s[2] || (s[2] = C(" ← ", -1))
            ])
          ], 10, Tf),
          h("button", {
            class: m(["table-sticky__control table-sticky__control--right", l.resolveClasses(t.classes.controlButton)]),
            "aria-label": "Scroll Right",
            onClick: s[1] || (s[1] = (...i) => l.scrollRight && l.scrollRight(...i)),
            disabled: !o.canScrollRight
          }, [
            g(e.$slots, "controlRight", {}, () => [
              s[3] || (s[3] = C(" → ", -1))
            ])
          ], 10, Af)
        ]))
      ], 2), [
        [Et, l.controlsShown]
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
      }, Oe({ _: 2 }, [
        B(e.$slots, (i, c) => ({
          name: c,
          fn: S((a) => [
            g(e.$slots, c, ne(re(a)))
          ])
        }))
      ]), 1032, ["classes", "resolveClasses", "headerRows", "rows", "footerRows", "rowColumns", "caption", "idPrefix", "getRowValue", "getColumnTitle", "onVnodeMounted", "onActualHeaderRemoved", "onActualHeaderAdded", "onColumnSorted"])
    ], 512),
    t.firstColumnSticky ? (u(), w(r, {
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
    }, Oe({ _: 2 }, [
      B(e.$slots, (i, c) => ({
        name: c,
        fn: S((a) => [
          g(e.$slots, c, ne(re(a)))
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
  hs as UluAccordion,
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
  Pt as UluCollapsible,
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
  at as UluFacetsList,
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
  on as UluMenu,
  ul as UluMenuStack,
  Ys as UluModal,
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
  cn as UluSelectableMenu,
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
  nn as UluTag,
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
  Gs as useUluFloating,
  fl as useWindowResize,
  am as utils
};
