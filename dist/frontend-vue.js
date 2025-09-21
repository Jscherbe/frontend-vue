import { reactive as ft, inject as ht, ref as R, computed as _, watch as pe, toRef as Un, createElementBlock as f, openBlock as u, normalizeStyle as X, unref as C, normalizeClass as m, createCommentVNode as p, createBlock as S, resolveDynamicComponent as P, normalizeProps as ae, mergeProps as Q, Fragment as U, createTextVNode as T, toDisplayString as w, Teleport as mt, createVNode as O, resolveDirective as Fs, withDirectives as Pe, createElementVNode as h, renderSlot as g, withKeys as Ls, nextTick as Vs, markRaw as Te, watchEffect as gt, defineAsyncComponent as Bn, toRefs as En, toValue as ot, resolveComponent as K, withModifiers as Rn, useSlots as Hs, renderList as B, TransitionGroup as Ns, withCtx as k, onMounted as vt, onBeforeUnmount as Ds, isRef as jn, hasInjectionContext as In, getCurrentInstance as Mn, onDeactivated as Pn, onActivated as zn, onUnmounted as Ws, guardReactiveProps as he, h as Fn, watchPostEffect as Ln, vModelText as Vn, vShow as It, createSlots as Ie } from "vue";
import { useFloating as Hn, autoUpdate as Nn, inline as Dn, offset as Wn, flip as qn, shift as Xn, arrow as Gn } from "@floating-ui/vue";
import { normalizeClasses as is } from "@ulu/utils/templating.js";
import { preventScroll as Yn, wasClickOutside as Kn, isBrowser as Jn } from "@ulu/utils/browser/dom.js";
import { Resizer as Zn } from "@ulu/frontend/js/ui/resizer.js";
import { debounce as Wt } from "@ulu/utils/performance.js";
import { useRoute as qs, useRouter as Qn, RouterLink as Ge } from "vue-router";
import { Tab as eo, TabGroup as to, TabList as so, TabPanel as no, TabPanels as oo } from "@headlessui/vue";
import { setPositionClasses as lo } from "@ulu/frontend/js/utils/dom.js";
import { randomInt as it } from "@ulu/utils/random.js";
import { PortableText as ro } from "@portabletext/vue";
import io from "gsap";
import ao from "fuse.js";
import { runAfterFramePaint as Xs } from "@ulu/utils/browser/performance.js";
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
function qf(e, s = {}) {
  const t = ft({ ...as }), { iconsByType: n, ...l } = s || {};
  l && Object.assign(t, l);
  const o = {
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
      o.setIcon(r, i);
  e.provide("uluCore", o), e.config.globalProperties.$uluCore = o;
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
function Ae(e) {
  const s = ht(e, cs);
  if (s === cs) {
    const t = fo[e] || "", n = t ? ` from the '${t}' plugin` : "", l = t ? "Please install missing plugin." : "";
    throw new Error(`Required inject: '${e}'${n} was not provided. ${l}`);
  }
  return s;
}
function Gs(e, s, t) {
  const n = R(null), l = R([]), o = _(() => t.value?.placement), {
    floatingStyles: r,
    placement: i,
    middlewareData: c,
    update: a,
    isPositioned: d
  } = Hn(e, s, {
    placement: o,
    whileElementsMounted: Nn,
    middleware: l
  });
  pe(
    [t, n],
    ([b, A]) => {
      const $ = [];
      b && (b.inline && $.push(Dn()), b.offset && $.push(Wn(b.offset)), $.push(qn()), $.push(Xn()), b.arrow && A && $.push(Gn({ element: A })), l.value = $);
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
  pe(t, (b) => {
    b && b.onReady && b.onReady({ update: a, isPositioned: d });
  });
  const y = _(() => t.value?.strategy === "fixed");
  return {
    floatingStyles: r,
    placement: i,
    middlewareData: c,
    update: a,
    isPositioned: d,
    arrowStyles: v,
    contentArrow: n,
    isFixedStrategy: y
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
    const s = e, t = R(null), n = _(() => s.config), {
      floatingStyles: l,
      placement: o,
      arrowStyles: r,
      contentArrow: i,
      isFixedStrategy: c
    } = Gs(Un(s, "trigger"), t, n);
    return (a, d) => (u(), f("span", {
      class: m(["popover popover--tooltip is-active", [
        {
          "popover--fixed": C(c)
        },
        n.value.class
      ]]),
      ref_key: "content",
      ref: t,
      id: C(Ys),
      "data-placement": C(o),
      style: X(C(l))
    }, [
      n.value.isHtml ? (u(), f("span", {
        key: 0,
        class: "popover__inner",
        innerHTML: n.value.content
      }, null, 8, mo)) : (u(), f("span", go, [
        n.value.component ? (u(), S(P(n.value.component), ae(Q({ key: 0 }, n.value.componentProps)), null, 16)) : (u(), f(U, { key: 1 }, [
          T(w(n.value.content), 1)
        ], 64))
      ])),
      n.value.arrow ? (u(), f("span", {
        key: 2,
        class: "popover__arrow",
        ref_key: "contentArrow",
        ref: i,
        style: X(C(r))
      }, null, 4)) : p("", !0)
    ], 14, ho));
  }
}, yo = {
  __name: "UluTooltipDisplay",
  setup(e) {
    const s = Ae(bt);
    return (t, n) => C(s)?.state.visible ? (u(), S(mt, {
      key: 0,
      to: C(s).state.config.teleportTo || "body"
    }, [
      O(vo, {
        trigger: C(s).state.trigger,
        config: C(s).state.config
      }, null, 8, ["trigger", "config"])
    ], 8, ["to"])) : p("", !0);
  }
}, Me = {
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
function po(e) {
  if (e) {
    if (e instanceof HTMLElement)
      return e;
    if (typeof e == "object" && "$el" in e)
      return e.$el;
  }
}
let bo = 0;
function oe(e = "ulu-id") {
  const s = `${e}-${++bo}`;
  return typeof document < "u" && document.getElementById(s) ? oe(e) : s;
}
const _o = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  newId: oe,
  refToElement: po
}, Symbol.toStringTag, { value: "Module" })), wo = ["id", "disabled", "aria-expanded", "aria-controls", "aria-label"], So = ["aria-labelledby", "id", "data-placement"], ko = { class: "popover__inner" }, $o = {
  key: 0,
  class: "popover__footer"
}, yt = {
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
    const t = s, n = e, l = oe(), o = oe(), r = Ae(pt), i = r ? r.popover : Me.popover, c = _(() => ({ ...i, ...n.config })), a = R(n.startOpen || !1), d = R(null), v = R(null), {
      floatingStyles: y,
      placement: b,
      update: A,
      arrowStyles: $,
      contentArrow: E,
      isFixedStrategy: G
    } = Gs(d, v, c), te = () => {
      z(!a.value);
    }, z = (re) => {
      a.value = re;
      const Se = {
        trigger: C(d),
        content: C(v),
        isOpen: C(a)
      }, Re = { isOpen: Se.isOpen };
      Vs(() => {
        a.value ? (A(), window.setTimeout(() => {
          we(), n.directFocus(Se), t("toggle", Re);
        }, 0)) : (se(), n.directFocus(Se), t("toggle", Re));
      });
    };
    let Z;
    const we = () => {
      n.clickOutsideCloses && (Z && se(), Z = (re) => {
        v.value && !v.value.contains(re.target) && z(!1);
      }, document.addEventListener("click", Z));
    }, se = () => {
      Z && (document.removeEventListener("click", Z), Z = null);
    }, ce = () => z(!1);
    return (re, Se) => {
      const Re = Fs("ulu-tooltip");
      return u(), f(U, null, [
        Pe((u(), f("button", {
          type: "button",
          ref_key: "trigger",
          ref: d,
          onClick: te,
          id: C(o),
          disabled: e.disabled,
          class: m([
            { [e.activeClass]: a.value },
            e.classes.trigger
          ]),
          "aria-expanded": a.value ? "true" : "false",
          "aria-controls": C(l),
          "aria-label": e.triggerAlt
        }, [
          g(re.$slots, "trigger", {
            isOpen: a.value,
            close: ce
          }, () => [
            T(w(e.triggerText), 1)
          ])
        ], 10, wo)), [
          [Re, e.tooltip ? e.tooltip : null]
        ]),
        h("span", {
          class: m(["popover", [
            e.size ? `popover--${e.size}` : "",
            {
              "popover--no-padding": e.noPadding,
              "popover--fixed": C(G),
              "is-active": a.value
            },
            e.classes.content
          ]]),
          ref_key: "content",
          ref: v,
          "aria-labelledby": C(o),
          id: C(l),
          style: X(C(y)),
          "data-placement": C(b),
          onKeydown: Se[0] || (Se[0] = Ls((At) => z(!1), ["esc"])),
          tabindex: "-1"
        }, [
          h("span", ko, [
            g(re.$slots, "default", {
              isOpen: a.value,
              toggle: te,
              close: ce
            })
          ]),
          re.$slots.footer ? (u(), f("span", $o, [
            g(re.$slots, "footer", { close: ce })
          ])) : p("", !0),
          c.value.arrow ? (u(), f("span", {
            key: 1,
            class: "popover__arrow",
            ref_key: "contentArrow",
            ref: E,
            style: X(C($)),
            "data-ulu-popover-arrow": ""
          }, null, 4)) : p("", !0)
        ], 46, So)
      ], 64);
    };
  }
};
function Xf() {
  const e = Ae(bt), s = Ae(pt), t = { ...s.popover, ...s.tooltip };
  return {
    showTooltip: (l, o) => {
      const r = Mt(o, t);
      r && e.show(l, r);
    },
    hideTooltip: e.hide,
    tooltipState: e.state
  };
}
function Gf(e) {
  const s = Ae(bt), t = Ae(pt);
  e.content || console.warn("Missing content for 'useTooltipFollow' tooltip", e);
  let n;
  const l = R(0), o = R(0), r = _(() => ({
    getBoundingClientRect() {
      return {
        width: 0,
        height: 0,
        x: l.value,
        y: o.value,
        top: o.value,
        left: l.value,
        right: l.value,
        bottom: o.value
      };
    }
  })), i = t ? t.popover : Me.popover, c = t ? t.tooltip : Me.tooltip, d = {
    ...{ ...i, ...c },
    content: e.content,
    inline: !1,
    // Following cursor is never inline
    onReady({ update: v }) {
      n = v;
    }
  };
  return {
    x: l,
    y: o,
    show() {
      s.show(r.value, d);
    },
    hide() {
      s.state.trigger === r.value && s.hide();
    },
    update(v) {
      l.value = v.x, o.value = v.y, n && n();
    }
  };
}
const pt = "uluPopoverOptions", bt = "uluTooltipState", Ys = "ulu-global-tooltip", Mt = (e, s) => {
  if (e === !1 || e === null) return null;
  let t = e;
  return (typeof t != "object" || Array.isArray(t)) && (t = { content: t }), t.component && (t.component = Te(t.component)), { ...s, ...t };
};
function Yf(e, s = {}) {
  const t = {
    plugin: { ...Me.plugin, ...s.plugin || {} },
    popover: { ...Me.popover, ...s.popover || {} },
    tooltip: { ...Me.tooltip, ...s.tooltip || {} }
  };
  e.provide(pt, t);
  const n = ft({
    visible: !1,
    trigger: null,
    config: {}
  }), l = (d, v) => {
    n.trigger && n.trigger !== d && n.trigger?.removeAttribute && n.trigger.removeAttribute("aria-describedby"), d?.setAttribute && d.setAttribute("aria-describedby", Ys), n.trigger = d, n.config = v, n.visible = !0;
  }, o = () => {
    n.trigger?.removeAttribute && n.trigger.removeAttribute("aria-describedby"), n.visible = !1;
  };
  e.provide(bt, {
    state: n,
    show: l,
    hide: o
  }), e.component("UluTooltipDisplay", yo), e.component("UluPopover", yt);
  const r = /* @__PURE__ */ new WeakMap(), i = t.popover, c = t.tooltip, a = { ...i, ...c };
  e.directive(t.plugin.directiveName, {
    mounted(d, v) {
      const y = Mt(v.value, a);
      if (!y) return;
      let b = null;
      const A = () => {
        b || (b = setTimeout(() => {
          l(d, y);
        }, y.delay));
      }, $ = () => {
        clearTimeout(b), b = null, o();
      }, { showEvents: E, hideEvents: G } = y;
      E.forEach((te) => d.addEventListener(te, A)), G.forEach((te) => d.addEventListener(te, $)), r.set(d, { show: A, hide: $, showEvents: E, hideEvents: G });
    },
    updated(d, v) {
      const y = r.get(d);
      y && (y.showEvents.forEach((z) => d.removeEventListener(z, y.show)), y.hideEvents.forEach((z) => d.removeEventListener(z, y.hide)));
      const b = Mt(v.value, a);
      if (!b) {
        n.trigger === d && o();
        return;
      }
      let A = null;
      const $ = () => {
        A || (A = setTimeout(() => {
          l(d, b);
        }, b.delay));
      }, E = () => {
        clearTimeout(A), A = null, o();
      }, { showEvents: G, hideEvents: te } = b;
      G.forEach((z) => d.addEventListener(z, $)), te.forEach((z) => d.addEventListener(z, E)), r.set(d, { show: $, hide: E, showEvents: G, hideEvents: te }), n.visible && n.trigger === d && l(d, b);
    },
    beforeUnmount(d) {
      n.visible && n.trigger === d && o();
      const v = r.get(d);
      v && (v.showEvents.forEach((y) => d.removeEventListener(y, v.show)), v.hideEvents.forEach((y) => d.removeEventListener(y, v.hide)), r.delete(d));
    }
  });
}
const j = (e, s) => {
  const t = e.__vccOpts || e;
  for (const [n, l] of s)
    t[n] = l;
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
function To(e, s, t, n, l, o) {
  return o.currentModal ? (u(), S(P(o.currentModal.component), Q({ key: 0 }, o.currentProps, {
    modelValue: l.open,
    "onUpdate:modelValue": s[0] || (s[0] = (r) => l.open = r),
    onVnodeMounted: o.modalMounted,
    onVnodeUnmounted: o.modalUnmounted
  }), null, 16, ["modelValue", "onVnodeMounted", "onVnodeUnmounted"])) : p("", !0);
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
const D = {
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
    const s = ht("uluCore"), t = R(null), { getIconProps: n, getClassesFromDefinition: l } = Oo();
    let o;
    const r = e, i = _(() => s.getSetting("fontAwesomeStatic")), c = _(() => s.getSetting("iconComponent")), a = _(() => s.getSetting("iconPropResolver")), d = _(() => {
      const { icon: $ } = r;
      if (typeof $ == "string" && $.startsWith("type:"))
        try {
          const E = $.substring(5);
          return s.getIcon(E);
        } catch (E) {
          return console.warn(E), null;
        }
      return $;
    }), v = _(() => !c.value || !d.value ? null : a.value(d.value)), y = _(() => n(d.value)), b = _(() => l(d.value)), A = _(() => ({
      "flow-inline": r.spaced
    }));
    return gt(async () => {
      if (!i.value && d.value) {
        if (t.value === null)
          if (o)
            t.value = Te(o.FontAwesomeIcon);
          else {
            const $ = Bn(async () => {
              const E = await import("@fortawesome/vue-fontawesome");
              return o = E, E.FontAwesomeIcon;
            });
            t.value = Te($);
          }
      } else
        t.value = null;
    }), ($, E) => c.value ? (u(), S(P(c.value), Q({ key: 0 }, v.value, { class: A.value }), null, 16, ["class"])) : !i.value && t.value && d.value ? (u(), S(P(t.value), Q({ key: 1 }, y.value, { class: A.value }), null, 16, ["class"])) : i.value && d.value ? (u(), f("span", {
      key: 2,
      class: m([b.value, A.value]),
      "aria-hidden": "true"
    }, null, 2)) : p("", !0);
  }
};
function me({ props: e, baseClass: s, internal: t = {} }) {
  const { modifiers: n } = En(e);
  return { resolvedModifiers: _(() => {
    const o = ot(s), r = is(ot(n)), i = is(ot(t));
    if (!o)
      return console.warn("useModifiers: Missing 'baseClass' argument, modifiers will not be applied."), "";
    const c = /* @__PURE__ */ new Set([...i, ...r]);
    return Array.from(c).map((a) => `${o}--${a}`);
  }) };
}
const xo = {
  name: "UluModal",
  components: {
    UluIcon: D
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
      titleId: oe("ulu-modal-title"),
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
    }), l = _(() => e.position === "center" ? "type:resizeBoth" : "type:resizeHorizontal"), o = _(() => ({
      [e.position]: e.position,
      resize: e.allowResize,
      "no-resize": !e.allowResize,
      "no-header": !t.value,
      "body-fills": e.bodyFills,
      "no-backdrop": e.noBackdrop,
      "no-min-height": e.noMinHeight,
      "non-modal": e.nonModal,
      "resizer-active": n.value
    })), { resolvedModifiers: r } = me({
      props: e,
      baseClass: "modal",
      internal: o
    });
    return {
      resolvedModifiers: r,
      hasHeader: t,
      resizerEnabled: n,
      resizerIconType: l
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
        const { container: t, resizer: n } = this.$refs, l = e === "center" ? { fromX: "right", fromY: "bottom", multiplier: 2 } : { fromX: e === "right" ? "left" : "right" };
        this.resizerInstance = new Zn(t, n, l), this.handleResizerStart = () => {
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
    ++modalCount, this.preventScroll && this.setupPreventScroll(), this.setupResizer();
  },
  beforeUnmount() {
    const { container: e } = this.$refs;
    e && e.open && e.close(), this.destroyPreventScroll(), this.destroyResizer();
  }
}, Uo = ["aria-labelledby", "aria-describedby"], Bo = ["id"], Eo = { class: "modal__title-text" }, Ro = {
  key: 2,
  class: "modal__resizer",
  ref: "resizer",
  type: "button"
};
function jo(e, s, t, n, l, o) {
  const r = K("UluIcon");
  return u(), S(mt, {
    to: t.teleport === !1 ? null : t.teleport,
    disabled: t.teleport === !1
  }, [
    h("dialog", {
      class: m(["modal", [n.resolvedModifiers, t.classes.container]]),
      "aria-labelledby": o.resolvedLabelledby,
      "aria-describedby": t.describedby,
      ref: "container",
      style: X({ width: l.containerWidth }),
      onCancel: s[1] || (s[1] = Rn((...i) => o.close && o.close(...i), ["prevent"])),
      onClose: s[2] || (s[2] = (...i) => o.handleDialogCloseEvent && o.handleDialogCloseEvent(...i)),
      onClick: s[3] || (s[3] = (...i) => o.handleClick && o.handleClick(...i)),
      onToggle: s[4] || (s[4] = (...i) => o.handleToggle && o.handleToggle(...i))
    }, [
      n.hasHeader ? (u(), f("header", {
        key: 0,
        class: m(["modal__header", t.classes.header])
      }, [
        h("h2", {
          class: m(["modal__title", t.classes.title]),
          id: l.titleId
        }, [
          g(e.$slots, "title", { close: o.close }, () => [
            t.titleIcon ? (u(), S(r, {
              key: 0,
              class: "modal__title-icon",
              icon: t.titleIcon
            }, null, 8, ["icon"])) : p("", !0),
            h("span", Eo, w(t.title), 1)
          ])
        ], 10, Bo),
        h("button", {
          class: "modal__close",
          "aria-label": "Close modal",
          onClick: s[0] || (s[0] = (...i) => o.close && o.close(...i)),
          autofocus: ""
        }, [
          g(e.$slots, "closeIcon", {}, () => [
            O(r, {
              class: "modal__close-icon",
              icon: t.closeIcon || "type:close"
            }, null, 8, ["icon"])
          ])
        ])
      ], 2)) : p("", !0),
      h("div", {
        class: m(["modal__body", t.classes.body])
      }, [
        g(e.$slots, "default", { close: o.close })
      ], 2),
      e.$slots.footer ? (u(), f("div", {
        key: 1,
        class: m(["site-modal__footer", t.classes.footer])
      }, [
        g(e.$slots, "footer", { close: o.close })
      ], 2)) : p("", !0),
      n.resizerEnabled ? (u(), f("button", Ro, [
        g(e.$slots, "resizerIcon", {}, () => [
          O(r, {
            class: "modal__resizer-icon",
            icon: t.resizerIcon || n.resizerIconType
          }, null, 8, ["icon"])
        ])
      ], 512)) : p("", !0)
    ], 46, Uo)
  ], 8, ["to", "disabled"]);
}
const Ks = /* @__PURE__ */ j(xo, [["render", jo]]), De = [], Io = R({
  /**
   * Holds active component options (including component, and options)
   */
  active: null,
  /**
   * Populated with any props passed to open method, bound to modal component
   */
  activeProps: null
}), We = Io.value, us = {
  data: We,
  modals: De
}, Mo = (e) => ({
  open(s, t = null) {
    const n = this.get(s);
    We.active = Te(n), We.activeProps = Object.assign({}, n.props, t);
  },
  /**
   * Close the active modal
   * @param {String|Node} focusTo The element or selector for an element to programmatically focus after modal close
   * @see https://www.deque.com/blog/accessible-routing-in-javascript-frameworks/
   */
  close() {
    We.active = null, We.activeProps = null;
  },
  /**
   * Get a modal's config object by name
   * @return {Object} Modal config object
   */
  get(s) {
    const t = De.find((n) => n.name === s);
    if (t)
      return t;
    throw new Error(`Unable to find modal named: ${s}`);
  },
  /**
   * Add a modal config
   */
  add(s) {
    const t = e(s);
    De.push(t);
  },
  /**
   * Removes a modal config by name
   * @return {Object} Modal that was removed
   */
  remove(s) {
    const t = De.findIndex((n) => n.name === s);
    if (t > -1)
      return De.splice(t, 1);
    warn("unable to find modal to remove");
  }
}), Po = {
  modals: [],
  modalOptions: {}
};
function Kf(e, s) {
  const t = Object.assign({}, Po, s), l = Mo((o) => Object.assign({}, t.modalOptions, o));
  e.component("UluModalsDisplay", Ao), e.component("UluModal", Ks), t.modals.forEach((o) => {
    l.add(o);
  }), us.options = t, e.config.globalProperties.$uluModals = l, e.provide("uluModals", l), e.config.globalProperties.$uluModalsState = us;
}
const zo = {
  name: "UluToast",
  components: {
    UluIcon: D
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
function Lo(e, s, t, n, l, o) {
  const r = K("UluIcon");
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
        }, null, 8, ["icon"])) : p("", !0)
      ])
    ], 2)) : p("", !0),
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
          }, w(t.toast.date), 3)) : p("", !0)
        ], 2)) : p("", !0),
        t.toast.description ? (u(), f("div", {
          key: 1,
          class: m(["toast__body", t.classes.body])
        }, w(t.toast.description), 3)) : p("", !0)
      ])
    ], 2),
    t.toast.actions?.length ? (u(), f("div", {
      key: 1,
      class: m(["toast__actions", t.classes.actions])
    }, [
      (u(!0), f(U, null, B(t.toast.actions, (i, c) => (u(), f("button", {
        key: c,
        class: m(["toast__action", t.classes.action]),
        onClick: (a) => o.handleAction(a, i)
      }, w(i.label), 11, Fo))), 128))
    ], 2)) : p("", !0),
    h("button", {
      class: m(["toast__close", t.classes.closeButton]),
      onClick: s[0] || (s[0] = (...i) => t.toast.close && t.toast.close(...i))
    }, [
      O(r, { icon: "type:close" })
    ], 2)
  ], 2);
}
const Js = /* @__PURE__ */ j(zo, [["render", Lo]]), ds = {
  toastOptions: {
    /**
     * Component used to render the toast in the display
     */
    component: Te(Js),
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
}, { assign: Ot } = Object;
let Vo = 0;
const ke = ft({
  toasts: [],
  /**
   * Saveable 
   */
  pluginOptions: ds.pluginOptions,
  toastOptions: ds.toastOptions,
  setToastOptions(e) {
    return this.toastOptions = Ot({}, this.toastOptions, e), this.pluginOptions;
  },
  setPluginOptions(e) {
    return this.pluginOptions = Ot({}, this.pluginOptions, e), this.pluginOptions;
  },
  createToast(e) {
    const s = `toast-${++Vo}`;
    return Ot({}, this.toastOptions, e, {
      uid: s,
      close() {
        Pt.remove(s);
      }
    });
  }
}), Pt = {
  /**
   * 
   * @param {Object} options Toast options
   * @returns Toast object (to be used to remove)
   */
  add(e) {
    const s = ke.createToast(e);
    return ke.toasts.unshift(s), s.duration && setTimeout(() => {
      this.remove(s.uid);
    }, s.duration), s;
  },
  /**
   * 
   * @param {Object} toast Toast uid
   */
  remove(e) {
    const s = ke.toasts.findIndex((t) => t.uid === e);
    s > -1 && ke.toasts.splice(s, 1);
  },
  /**
   * Remove all toasts
   */
  removeAll() {
    ke.toasts = [];
  }
}, Ho = {
  name: "UluTooltipDisplay",
  data() {
    const { toasts: e, pluginOptions: s } = ke;
    return { toasts: e, pluginOptions: s };
  },
  computed: {
    classes() {
      const { position: e } = this.pluginOptions;
      return e.map((t) => `toast-container--${t}`);
    }
  }
};
function No(e, s, t, n, l, o) {
  return u(), S(mt, {
    to: l.pluginOptions.teleportTo
  }, [
    O(Ns, {
      class: m(["toast-container", o.classes]),
      name: "toast-animation",
      tag: "div"
    }, {
      default: k(() => [
        (u(!0), f(U, null, B(l.toasts, (r) => (u(), S(P(r.component), {
          key: r.uid,
          toast: r
        }, null, 8, ["toast"]))), 128))
      ]),
      _: 1
    }, 8, ["class"])
  ], 8, ["to"]);
}
const Do = /* @__PURE__ */ j(Ho, [["render", No]]);
function Jf(e, s = {}) {
  ke.setPluginOptions(s?.plugin), ke.setToastOptions(s?.toast), e.component("UluToast", Js), e.component("UluToastDisplay", Do), e.config.globalProperties.$uluToast = Pt, e.provide("uluToast", Pt);
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
function qo(e) {
  const s = Object.assign({}, Wo, e), t = R(null), n = R(s.initialValue), l = R(null);
  return (async () => {
    if (!Jn()) return;
    await new Promise((d) => {
      document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", () => d()) : d();
    });
    const r = await import("@ulu/frontend/js/ui/breakpoints.js"), { BreakpointManager: i } = r, c = Te(new i(s.plugin));
    t.value = Te(c);
    const a = () => {
      n.value = c.active, l.value = c.resizeDirection;
    };
    a(), s.onReady && s.onReady(c), c.onChange(a);
  })(), { breakpointManager: t, breakpointActive: n, breakpointDirection: l };
}
const Xo = {
  /**
   * Breakpoint for mobile down/max
   */
  breakpointMobile: "small",
  /**
   * Options to pass to useBreakpointManager()
   */
  managerOptions: {}
};
function Zf(e, s) {
  const t = R(!1), n = Object.assign({}, Xo, s), { breakpointMobile: l } = n, { onReady: o } = n.managerOptions, r = {
    onReady(v) {
      v.at(l).max({
        on() {
          t.value = !0;
        },
        off() {
          t.value = !1;
        }
      }), o && o(v);
    }
  }, i = Object.assign({}, n.managerOptions, r), {
    breakpointManager: c,
    breakpointActive: a,
    breakpointDirection: d
  } = qo(i);
  e.provide("uluBreakpointActive", _(() => a.value)), e.provide("uluBreakpointDirection", _(() => d.value)), e.provide("uluBreakpointManager", _(() => c.value)), e.provide("uluIsMobile", _(() => t.value));
}
const zt = /* @__PURE__ */ new Set(), J = /* @__PURE__ */ new WeakMap(), Oe = /* @__PURE__ */ new WeakMap(), ne = /* @__PURE__ */ new WeakMap(), Ye = /* @__PURE__ */ new WeakMap(), xt = /* @__PURE__ */ new WeakMap(), qe = /* @__PURE__ */ new WeakMap(), Ce = /* @__PURE__ */ new WeakMap(), $e = /* @__PURE__ */ new WeakMap(), je = /* @__PURE__ */ new WeakSet();
let ee, qt = 0, Xt = 0;
const be = "__aa_tgt", Ke = "__aa_del", at = "__aa_new", Zs = (e) => {
  const s = Jo(e);
  s && s.forEach((t) => Zo(t));
}, Go = (e) => {
  e.forEach((s) => {
    s.target === ee && Yo(), J.has(s.target) && Ue(s.target);
  });
};
function Qs(e) {
  const s = e.getBoundingClientRect(), t = ee?.clientWidth || 0, n = ee?.clientHeight || 0;
  return s.bottom < 0 || s.top > n || s.right < 0 || s.left > t;
}
function Gt(e) {
  const s = Ye.get(e);
  s?.disconnect();
  let t = J.get(e), n = 0;
  const l = 5;
  t || (t = ze(e), J.set(e, t));
  const { offsetWidth: o, offsetHeight: r } = ee, c = [
    t.top - l,
    o - (t.left + l + t.width),
    r - (t.top + l + t.height),
    t.left - l
  ].map((d) => `${-1 * Math.floor(d)}px`).join(" "), a = new IntersectionObserver(() => {
    ++n > 1 && Ue(e);
  }, {
    root: ee,
    threshold: 1,
    rootMargin: c
  });
  a.observe(e), Ye.set(e, a);
}
function Ue(e, s = !0) {
  clearTimeout($e.get(e));
  const t = _t(e), n = s ? Je(t) ? 500 : t.duration : 0;
  $e.set(e, setTimeout(async () => {
    const l = ne.get(e);
    try {
      await l?.finished, J.set(e, ze(e)), Gt(e);
    } catch {
    }
  }, n));
}
function Yo() {
  clearTimeout($e.get(ee)), $e.set(ee, setTimeout(() => {
    zt.forEach((e) => lt(e, (s) => en(() => Ue(s))));
  }, 100));
}
function Ko(e) {
  setTimeout(() => {
    qe.set(e, setInterval(() => en(Ue.bind(null, e)), 2e3));
  }, Math.round(2e3 * Math.random()));
}
function en(e) {
  typeof requestIdleCallback == "function" ? requestIdleCallback(() => e()) : requestAnimationFrame(() => e());
}
let ve;
const tn = typeof window < "u" && "ResizeObserver" in window;
tn && (ee = document.documentElement, new MutationObserver(Zs), ve = new ResizeObserver(Go), window.addEventListener("scroll", () => {
  Xt = window.scrollY, qt = window.scrollX;
}), ve.observe(ee));
function Jo(e) {
  return e.reduce((n, l) => [
    ...n,
    ...Array.from(l.addedNodes),
    ...Array.from(l.removedNodes)
  ], []).every((n) => n.nodeName === "#comment") ? !1 : e.reduce((n, l) => {
    if (n === !1)
      return !1;
    if (l.target instanceof Element) {
      if (Ut(l.target), !n.has(l.target)) {
        n.add(l.target);
        for (let o = 0; o < l.target.children.length; o++) {
          const r = l.target.children.item(o);
          if (r) {
            if (Ke in r)
              return !1;
            Ut(l.target, r), n.add(r);
          }
        }
      }
      if (l.removedNodes.length)
        for (let o = 0; o < l.removedNodes.length; o++) {
          const r = l.removedNodes[o];
          if (Ke in r)
            return !1;
          r instanceof Element && (n.add(r), Ut(l.target, r), Oe.set(r, [
            l.previousSibling,
            l.nextSibling
          ]));
        }
    }
    return n;
  }, /* @__PURE__ */ new Set());
}
function Ut(e, s) {
  !s && !(be in e) ? Object.defineProperty(e, be, { value: e }) : s && !(be in s) && Object.defineProperty(s, be, { value: e });
}
function Zo(e) {
  var s, t;
  const n = e.isConnected, l = J.has(e);
  n && Oe.has(e) && Oe.delete(e), ((s = ne.get(e)) === null || s === void 0 ? void 0 : s.playState) !== "finished" && ((t = ne.get(e)) === null || t === void 0 || t.cancel()), at in e ? fs(e) : l && n ? el(e) : l && !n ? tl(e) : fs(e);
}
function fe(e) {
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
function ze(e) {
  const s = e.getBoundingClientRect(), { x: t, y: n } = Qo(e);
  return {
    top: s.top + n,
    left: s.left + t,
    width: s.width,
    height: s.height
  };
}
function sn(e, s, t) {
  let n = s.width, l = s.height, o = t.width, r = t.height;
  const i = getComputedStyle(e);
  if (i.getPropertyValue("box-sizing") === "content-box") {
    const a = fe(i.paddingTop) + fe(i.paddingBottom) + fe(i.borderTopWidth) + fe(i.borderBottomWidth), d = fe(i.paddingLeft) + fe(i.paddingRight) + fe(i.borderRightWidth) + fe(i.borderLeftWidth);
    n -= d, o -= d, l -= a, r -= a;
  }
  return [n, o, l, r].map(Math.round);
}
function _t(e) {
  return be in e && Ce.has(e[be]) ? Ce.get(e[be]) : { duration: 250, easing: "ease-in-out" };
}
function nn(e) {
  if (be in e)
    return e[be];
}
function Yt(e) {
  const s = nn(e);
  return s ? je.has(s) : !1;
}
function lt(e, ...s) {
  s.forEach((t) => t(e, Ce.has(e)));
  for (let t = 0; t < e.children.length; t++) {
    const n = e.children.item(t);
    n && s.forEach((l) => l(n, Ce.has(n)));
  }
}
function Kt(e) {
  return Array.isArray(e) ? e : [e];
}
function Je(e) {
  return typeof e == "function";
}
function el(e) {
  const s = J.get(e), t = ze(e);
  if (!Yt(e))
    return J.set(e, t);
  if (Qs(e)) {
    J.set(e, t), Gt(e);
    return;
  }
  let n;
  if (!s)
    return;
  const l = _t(e);
  if (typeof l != "function") {
    let o = s.left - t.left, r = s.top - t.top;
    const i = s.left + s.width - (t.left + t.width);
    s.top + s.height - (t.top + t.height) == 0 && (r = 0), i == 0 && (o = 0);
    const [a, d, v, y] = sn(e, s, t), b = {
      transform: `translate(${o}px, ${r}px)`
    }, A = {
      transform: "translate(0, 0)"
    };
    a !== d && (b.width = `${a}px`, A.width = `${d}px`), v !== y && (b.height = `${v}px`, A.height = `${y}px`), n = e.animate([b, A], {
      duration: l.duration,
      easing: l.easing
    });
  } else {
    const [o] = Kt(l(e, "remain", s, t));
    n = new Animation(o), n.play();
  }
  ne.set(e, n), J.set(e, t), n.addEventListener("finish", Ue.bind(null, e, !1), {
    once: !0
  });
}
function fs(e) {
  at in e && delete e[at];
  const s = ze(e);
  J.set(e, s);
  const t = _t(e);
  if (!Yt(e))
    return;
  if (Qs(e)) {
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
    const [l] = Kt(t(e, "add", s));
    n = new Animation(l), n.play();
  }
  ne.set(e, n), n.addEventListener("finish", Ue.bind(null, e, !1), {
    once: !0
  });
}
function hs(e, s) {
  var t;
  e.remove(), J.delete(e), Oe.delete(e), ne.delete(e), (t = Ye.get(e)) === null || t === void 0 || t.disconnect(), setTimeout(() => {
    if (Ke in e && delete e[Ke], Object.defineProperty(e, at, { value: !0, configurable: !0 }), s && e instanceof HTMLElement)
      for (const n in s)
        e.style[n] = "";
  }, 0);
}
function tl(e) {
  var s;
  if (!Oe.has(e) || !J.has(e))
    return;
  const [t, n] = Oe.get(e);
  Object.defineProperty(e, Ke, { value: !0, configurable: !0 });
  const l = window.scrollX, o = window.scrollY;
  if (n && n.parentNode && n.parentNode instanceof Element ? n.parentNode.insertBefore(e, n) : t && t.parentNode ? t.parentNode.appendChild(e) : (s = nn(e)) === null || s === void 0 || s.appendChild(e), !Yt(e))
    return hs(e);
  const [r, i, c, a] = nl(e), d = _t(e), v = J.get(e);
  (l !== qt || o !== Xt) && sl(e, l, o, d);
  let y, b = {
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
  if (!Je(d))
    Object.assign(e.style, b), y = e.animate([
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
    const [A, $] = Kt(d(e, "remove", v));
    $?.styleReset !== !1 && (b = $?.styleReset || b, Object.assign(e.style, b)), y = new Animation(A), y.play();
  }
  ne.set(e, y), y.addEventListener("finish", () => hs(e, b), {
    once: !0
  });
}
function sl(e, s, t, n) {
  const l = qt - s, o = Xt - t, r = document.documentElement.style.scrollBehavior;
  if (getComputedStyle(ee).scrollBehavior === "smooth" && (document.documentElement.style.scrollBehavior = "auto"), window.scrollTo(window.scrollX + l, window.scrollY + o), !e.parentElement)
    return;
  const c = e.parentElement;
  let a = c.clientHeight, d = c.clientWidth;
  const v = performance.now();
  function y() {
    requestAnimationFrame(() => {
      if (!Je(n)) {
        const b = a - c.clientHeight, A = d - c.clientWidth;
        v + n.duration > performance.now() ? (window.scrollTo({
          left: window.scrollX - A,
          top: window.scrollY - b
        }), a = c.clientHeight, d = c.clientWidth, y()) : document.documentElement.style.scrollBehavior = r;
      }
    });
  }
  y();
}
function nl(e) {
  var s;
  const t = J.get(e), [n, , l] = sn(e, t, ze(e));
  let o = e.parentElement;
  for (; o && (getComputedStyle(o).position === "static" || o instanceof HTMLBodyElement); )
    o = o.parentElement;
  o || (o = document.body);
  const r = getComputedStyle(o), i = !ne.has(e) || ((s = ne.get(e)) === null || s === void 0 ? void 0 : s.playState) === "finished" ? ze(o) : J.get(o), c = Math.round(t.top - i.top) - fe(r.borderTopWidth), a = Math.round(t.left - i.left) - fe(r.borderLeftWidth);
  return [c, a, n, l];
}
function ol(e, s = {}) {
  if (tn && ve && !(window.matchMedia("(prefers-reduced-motion: reduce)").matches && !Je(s) && !s.disrespectUserMotionPreference)) {
    je.add(e), getComputedStyle(e).position === "static" && Object.assign(e.style, { position: "relative" }), lt(e, Ue, Ko, (r) => ve?.observe(r)), Je(s) ? Ce.set(e, s) : Ce.set(e, {
      duration: 250,
      easing: "ease-in-out",
      ...s
    });
    const o = new MutationObserver(Zs);
    o.observe(e, { childList: !0 }), xt.set(e, o), zt.add(e);
  }
  return Object.freeze({
    parent: e,
    enable: () => {
      je.add(e);
    },
    disable: () => {
      je.delete(e), lt(e, (n) => {
        const l = ne.get(n);
        try {
          l?.cancel();
        } catch {
        }
        ne.delete(n);
        const o = $e.get(n);
        o && clearTimeout(o), $e.delete(n);
        const r = qe.get(n);
        r && clearInterval(r), qe.delete(n);
      });
    },
    isEnabled: () => je.has(e),
    destroy: () => {
      je.delete(e), zt.delete(e), Ce.delete(e);
      const n = xt.get(e);
      n?.disconnect(), xt.delete(e), lt(e, (l) => {
        ve?.unobserve(l);
        const o = ne.get(l);
        try {
          o?.cancel();
        } catch {
        }
        ne.delete(l);
        const r = Ye.get(l);
        r?.disconnect(), Ye.delete(l);
        const i = qe.get(l);
        i && clearInterval(i), qe.delete(l);
        const c = $e.get(l);
        c && clearTimeout(c), $e.delete(l), J.delete(l), Oe.delete(l);
      });
    }
  });
}
function ll(e) {
  const s = R();
  let t;
  function n(l) {
    t && (l ? t.enable() : t.disable());
  }
  return vt(() => {
    gt((l) => {
      let o;
      s.value instanceof HTMLElement ? o = s.value : s.value && "$el" in s.value && s.value.$el instanceof HTMLElement && (o = s.value.$el), o && (t = ol(o, e || {}), l(() => {
        var r;
        (r = t?.destroy) === null || r === void 0 || r.call(t), t = void 0;
      }));
    });
  }), Ds(() => {
    var l;
    (l = t?.destroy) === null || l === void 0 || l.call(t), t = void 0;
  }), [s, n];
}
const rl = ["id", "aria-controls", "aria-expanded"], il = ["id", "aria-hidden", "aria-labelledby"], Ft = {
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
    const t = e, n = s, l = _(() => typeof t.animate == "object" ? t.animate : {}), [o, r] = ll(l);
    vt(() => {
      r(!!t.animate);
    }), pe(() => t.animate, (A) => {
      r(!!A);
    });
    const i = _(() => t.modelValue !== void 0), c = R(t.startOpen), a = _({
      get() {
        return i.value ? t.modelValue : c.value;
      },
      set(A) {
        i.value ? n("update:modelValue", A) : c.value = A;
      }
    }), d = R(oe("ulu-collapsible-trigger")), v = R(oe("ulu-collapsible-content"));
    function y() {
      a.value = !a.value;
    }
    function b() {
      t.closeOnEscape && a.value && (a.value = !1);
    }
    return (A, $) => (u(), f("div", {
      ref_key: "container",
      ref: o,
      onKeydown: Ls(b, ["esc"]),
      class: m([e.classes.container, a.value ? e.classes.containerOpen : e.classes.containerClosed])
    }, [
      h("button", {
        class: m(e.classes.trigger),
        id: d.value,
        "aria-controls": v.value,
        "aria-expanded": a.value,
        onClick: y
      }, [
        g(A.$slots, "trigger", { isOpen: a.value }, () => [
          T(w(e.triggerText), 1)
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
        g(A.$slots, "default", {
          isOpen: a.value,
          toggle: y
        })
      ], 10, il)) : p("", !0)
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
    const t = e, { resolvedModifiers: n } = me({ props: t, baseClass: "accordion" }), l = _(() => {
      const o = { ...t.classes };
      return o.container = [o.container, n.value], o;
    });
    return (o, r) => (u(), S(Ft, {
      "model-value": e.modelValue,
      "start-open": e.startOpen,
      "trigger-text": e.triggerText,
      classes: l.value,
      animate: e.animate,
      "onUpdate:modelValue": r[0] || (r[0] = (i) => o.$emit("update:modelValue", i))
    }, {
      trigger: k(({ isOpen: i }) => [
        g(o.$slots, "trigger", { isOpen: i }, () => [
          (u(), S(P(e.triggerTextElement), null, {
            default: k(() => [
              T(w(e.triggerText), 1)
            ]),
            _: 1
          }))
        ]),
        g(o.$slots, "icon", { isOpen: i }, () => [
          h("span", {
            class: m(["accordion__icon", e.classes.icon])
          }, [
            O(D, {
              icon: i ? "type:collapse" : "type:expand",
              style: { display: "inline" }
            }, null, 8, ["icon"])
          ], 2)
        ])
      ]),
      default: k(({ isOpen: i, toggle: c }) => [
        g(o.$slots, "default", {
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
    const s = e, { resolvedModifiers: t } = me({ props: s, baseClass: "tag" });
    return (n, l) => (u(), f("span", {
      class: m(["tag", [
        {
          "tag--counter": e.counter,
          [`tag--${e.size}`]: e.size,
          [`tag--${e.type}`]: e.type
        },
        C(t)
      ]])
    }, [
      e.icon ? (u(), S(D, {
        key: 0,
        icon: e.icon,
        spaced: ""
      }, null, 8, ["icon"])) : p("", !0),
      g(n.$slots, "default", {}, () => [
        h("span", null, w(e.text), 1)
      ])
    ], 2));
  }
}, al = {
  name: "UluMenu",
  components: {
    UluIcon: D,
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
function cl(e, s, t, n, l, o) {
  const r = K("UluIcon"), i = K("UluTag"), c = K("UluMenu", !0), a = Fs("ulu-tooltip");
  return t.items?.length ? (u(), f("ul", {
    key: 0,
    class: m(t.classes.list)
  }, [
    (u(!0), f(U, null, B(t.items, (d, v) => (u(), f("li", {
      key: v,
      class: m([
        t.classes.item,
        d?.classes?.item,
        d.separatorBefore ? t.classes.itemSeparatorBefore : "",
        d.separatorAfter ? t.classes.itemSeparatorAfter : ""
      ])
    }, [
      Pe((u(), S(P(d.to || d.path ? "router-link" : d.click ? "button" : "a"), Q({ ref_for: !0 }, {
        ...d.to || d.path ? {
          to: d.to || d.path,
          activeClass: t.classes.linkActive || null,
          exactActiveClass: t.classes.linkExactActive || null
        } : {},
        ...d.href ? { href: d.href || "#" } : {}
      }, {
        onClick: (y) => {
          o.handleItemClick(y, d);
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
            }, null, 8, ["icon", "class"])) : p("", !0),
            h("span", {
              class: m([t.classes.linkText, d?.classes?.linkText])
            }, w(d.title), 3),
            d.tag ? (u(), S(i, Q({
              key: 1,
              ref_for: !0
            }, d.tag), null, 16)) : p("", !0)
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
      }, null, 8, ["iconOnly", "classes", "items"])) : p("", !0)
    ], 2))), 128))
  ], 2)) : p("", !0);
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
    })), { resolvedModifiers: n } = me({
      props: s,
      internal: t,
      baseClass: "menu-stack"
    });
    return (l, o) => (u(), S(P(e.containerElement), {
      class: m(["menu-stack", C(n)])
    }, {
      default: k(() => [
        O(ln, {
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
    return (s, t) => (u(), S(yt, { classes: e.popoverClasses }, {
      trigger: k(({ isOpen: n }) => [
        g(s.$slots, "trigger", { isOpen: n }, () => [
          h("span", null, w(e.triggerText), 1),
          O(D, {
            class: "button__icon",
            icon: "type:dropdownExpand",
            style: X({ transform: n ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.2s" })
          }, null, 8, ["style"])
        ])
      ]),
      default: k(() => [
        O(ul, { items: e.items }, null, 8, ["items"])
      ]),
      _: 3
    }, 8, ["classes"]));
  }
}, Jt = R(!1), ct = {
  start: [],
  end: []
};
function Zt() {
  window.removeEventListener("resize", Zt), Jt.value = !0, ct.start.forEach((e) => e());
}
function dl() {
  Jt.value = !1, ct.end.forEach((e) => e()), window.addEventListener("resize", Zt);
}
window.addEventListener("resize", Zt), window.addEventListener("resize", Wt(dl, 300));
function gs(e, s) {
  return e.push(s), () => {
    const t = e.findIndex((n) => n === s);
    t > -1 && e.splice(t);
  };
}
function fl() {
  return {
    resizing: Jt,
    onResizeStart(e) {
      return gs(ct.start, e);
    },
    onResizeEnd(e) {
      return gs(ct.end, e);
    }
  };
}
function eh(e, s) {
  const t = qs(), n = Qn(), l = _(() => {
    const a = parseInt(t.query.page || "1", 10);
    return isNaN(a) || a < 1 ? 1 : a;
  }), o = _(() => !e.value || e.value.length === 0 ? 1 : Math.ceil(e.value.length / s));
  pe(o, (a) => {
    l.value > a && n.push({ query: { ...t.query, page: a } });
  });
  const r = _(() => {
    const a = (l.value - 1) * s, d = a + s;
    return e.value.slice(a, d);
  }), i = _(() => {
    if (o.value <= 1)
      return null;
    const a = {
      pages: {}
    }, d = l.value, v = o.value, y = 5, b = (E) => ({ query: { ...t.query, page: E } });
    d > 1 && (a.first = { href: b(1) }, a.previous = { href: b(d - 1) }), d < v && (a.next = { href: b(d + 1) }, a.last = { href: b(v) });
    let A, $;
    if (v <= y)
      A = 1, $ = v;
    else {
      const E = Math.floor(y / 2), G = Math.ceil(y / 2) - 1;
      d <= E ? (A = 1, $ = y) : d + G >= v ? (A = v - y + 1, $ = v) : (A = d - E, $ = d + G);
    }
    for (let E = A; E <= $; E++)
      a.pages[E] = { href: b(E) };
    return a;
  }), c = _(() => {
    const a = { previous: !1, next: !1 };
    if (!i.value || !i.value.pages) return a;
    const d = Object.keys(i.value.pages).map(Number);
    if (d.length === 0) return a;
    const v = Math.min(...d), y = Math.max(...d);
    return v > 1 && (a.previous = !0), y < o.value && (a.next = !0), a;
  });
  return {
    currentPage: l,
    totalPages: o,
    paginatedItems: r,
    pagerItems: i,
    pagerEllipses: c
  };
}
function Lt(e, s, t) {
  typeof e === "function" && (!t || t !== "titleTemplate" && !(t[0] === "o" && t[1] === "n")) && (e = e());
  let l;
  if (s && (l = s(t, e)), Array.isArray(l))
    return l.map((o) => Lt(o, s));
  if (l?.constructor === Object) {
    const o = {};
    for (const r of Object.keys(l))
      o[r] = Lt(l[r], s, r);
    return o;
  }
  return l;
}
const hl = (e, s) => jn(s) ? ot(s) : s, ml = "usehead";
function gl() {
  if (In()) {
    const e = ht(ml);
    if (!e)
      throw new Error("useHead() was called without provide context, ensure you call it through the setup() function.");
    return e;
  }
  throw new Error("useHead() was called without provide context, ensure you call it through the setup() function.");
}
function vl(e, s = {}) {
  const t = s.head || gl();
  return t.ssr ? t.push(e || {}, s) : yl(t, e, s);
}
function yl(e, s, t = {}) {
  const n = R(!1);
  let l;
  return gt(() => {
    const r = n.value ? {} : Lt(s, hl);
    l ? l.patch(r) : l = e.push(r, t);
  }), Mn() && (Ds(() => {
    l.dispose();
  }), Pn(() => {
    n.value = !0;
  }), zn(() => {
    n.value = !1;
  })), l;
}
function wt(e, s) {
  let n = (e?.meta || {}).title;
  return typeof n == "function" && (n = n(s || e)), n;
}
function pl(e, s) {
  const n = Object.assign({}, {
    qualifier(r, i) {
      return i ? es(r) : rn(r);
    },
    sort: ss,
    item: {},
    includeChildren: !1
  }, s), l = (r, i) => i ? `${i}/${r.path}` : r.path, o = (r, i = null) => r.filter((c) => n.qualifier(c, i)).map((c) => {
    const a = c.children ? Qt(c.children) : c, d = c.children ? c.children.filter((y) => y.path !== "") : !1, v = St(a, l(c, i), n.item);
    return n.includeChildren && d.length && (v.children = o(d, v.path)), v;
  }).sort(n.sort);
  return o(e);
}
function bl(e) {
  function s(t) {
    const n = [];
    for (const l of t) {
      const o = { ...l };
      delete o.children, n.push(o), l.children && n.push(...s(l.children));
    }
    return n;
  }
  return s(e);
}
function _l(e, s, t) {
  const l = Object.assign({}, {
    includeIndex: !1,
    item: {},
    sort: ss
  }, t), o = e.find((a) => a.path !== "/" && s.includes(a.path)), r = (a, d, v) => {
    if (a.children) {
      const y = a.children.find((b) => b.path.includes(s));
      if (y)
        return r(y, a, v + y.path);
    }
    return { route: d, path: v };
  }, { route: i, path: c } = r(o, o, o.path);
  return i.children ? i.children.filter(cn(l.includeIndex)).map((a) => St(a, `${c}/${a.path}`, l.item)).sort(l.sort) : (console.warn("Unable to build menu for:", s), []);
}
function Qt(e) {
  return e.find((s) => s.path === "");
}
function St(e, s = e.path, t) {
  const l = Object.assign({}, {
    indexMeta: !0,
    modify: null
  }, t);
  let o = Object.assign({}, e.meta);
  l.indexMeta && e.children && (o = Object.assign({}, o, Qt(e.children)?.meta));
  const r = { ...e, meta: o }, i = {
    path: s,
    title: wt(r, e) || "Missing Title",
    weight: o?.weight || 0,
    meta: o
  };
  return l.modify && l.modify(i, e), i;
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
    let l = n.getAttribute("href");
    l.startsWith("/") && (e.push(l), s.preventDefault());
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
  }, s), l = n.parent || ts(e);
  return (an(e, l) || []).filter(cn(n.includeIndex)).map((r) => St(r, `${l.path}/${r.path}`, n.item)).sort(n.sort);
}
function kl(e) {
  const { matched: s, path: t } = e;
  let n;
  return s.reduce((o, r, i) => {
    if (r.meta?.breadcrumb === !1 || r.path === n)
      return o;
    const c = i === s.length - 1, a = wt(r, e) || "Missing Title";
    return o.push({
      title: a,
      to: { path: c ? t : r.path },
      current: c
    }), n = r.path, o;
  }, []);
}
const $l = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  $createBreadcrumb: kl,
  $createSectionMenu: Sl,
  $getParentRoute: ts,
  $getRouteChildren: an,
  createBaseMenu: pl,
  createMenuItem: St,
  createSectionMenu: _l,
  flattenMenu: bl,
  getChildIndexRoute: Qt,
  getRouteTitle: wt,
  isStaticBaseRoute: rn,
  isStaticRoute: es,
  nativeLinkRouter: wl
}, Symbol.toStringTag, { value: "Module" })), Bt = ft({});
function th(e = {}) {
  const {
    title: s,
    titleTemplate: t = "%s",
    useRoute: n = qs,
    useHead: l = vl
  } = e, o = n(), r = o.path;
  if (s !== void 0) {
    gt(() => {
      Bt[r] = C(s);
    }), Ws(() => {
      delete Bt[r];
    });
    return;
  }
  const i = _(() => {
    const c = Bt[o.path], a = wt(o, o), d = c || a;
    return d ? t.replace("%s", d) : "App";
  });
  l({
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
    const { resizing: s, onResizeEnd: t } = fl(), n = R(null), l = R(!1), o = () => {
      Vs(() => {
        const i = n.value;
        l.value = i.offsetWidth < i.scrollWidth;
      });
    }, r = t(o);
    return vt(o), Ws(r), (i, c) => (u(), f("div", Cl, [
      h("div", {
        class: "type-truncate",
        ref_key: "text",
        ref: n
      }, [
        g(i.$slots, "default")
      ], 512),
      l.value && !C(s) ? (u(), S(yt, {
        key: 0,
        triggerAlt: "Show Full Text",
        size: "large"
      }, {
        trigger: k(() => [
          O(D, {
            icon: e.triggerIcon || "type:ellipsis"
          }, null, 8, ["icon"])
        ]),
        default: k(() => [
          h("div", Tl, [
            g(i.$slots, "default")
          ])
        ]),
        _: 3
      })) : p("", !0)
    ]));
  }
}, nh = {
  __name: "UluTab",
  setup(e) {
    return (s, t) => (u(), S(C(eo), null, {
      default: k((n) => [
        g(s.$slots, "default", ae(he(n)))
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
    return (s, t) => (u(), S(C(to), {
      defaultIndex: e.defaultIndex,
      vertical: e.vertical
    }, {
      default: k((n) => [
        h("div", {
          class: m(["tabs", {
            "tabs--vertical": e.vertical
          }])
        }, [
          g(s.$slots, "default", ae(he(n)))
        ], 2)
      ]),
      _: 3
    }, 8, ["defaultIndex", "vertical"]));
  }
}), lh = {
  __name: "UluTabList",
  setup(e) {
    return (s, t) => (u(), S(C(so), { class: "tabs__tablist" }, {
      default: k(() => [
        g(s.$slots, "default")
      ]),
      _: 3
    }));
  }
}, rh = {
  __name: "UluTabPanel",
  setup(e) {
    return (s, t) => (u(), S(C(no), null, {
      default: k((n) => [
        g(s.$slots, "default", ae(he(n)))
      ]),
      _: 3
    }));
  }
}, ih = {
  __name: "UluTabPanels",
  setup(e) {
    return (s, t) => (u(), S(C(oo), null, {
      default: k((n) => [
        g(s.$slots, "default", ae(he(n)))
      ]),
      _: 3
    }));
  }
}, Al = {
  name: "UluButton",
  components: {
    UluIcon: D
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
    const { resolvedModifiers: s } = me({ props: e, baseClass: "button" });
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
      return this.to ? Ge : this.href ? "a" : "button";
    },
    attrs() {
      const { to: e, href: s, download: t, target: n } = this, l = e ? { to: e } : s ? { href: s } : {};
      return s && (n && (l.target = n), t && (l.download = typeof t == "string" ? t : !0)), l;
    }
  }
}, Ol = { key: 1 };
function xl(e, s, t, n, l, o) {
  const r = K("UluIcon");
  return u(), S(P(o.element), Q({
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
      o.classes,
      n.resolvedModifiers
    ]]
  }, o.attrs, { "aria-label": o.resolvedAriaLabel }), {
    default: k(() => [
      g(e.$slots, "before"),
      t.icon && (t.iconBefore || t.iconOnly) ? (u(), S(r, {
        key: 0,
        icon: t.icon,
        class: "button__icon"
      }, null, 8, ["icon"])) : p("", !0),
      (e.$slots.default || t.text) && !t.iconOnly ? (u(), f("span", Ol, [
        g(e.$slots, "default", {}, () => [
          T(w(t.text), 1)
        ])
      ])) : p("", !0),
      t.icon && !t.iconBefore && !t.iconOnly ? (u(), S(r, {
        key: 2,
        icon: t.icon,
        class: "button__icon"
      }, null, 8, ["icon"])) : p("", !0),
      g(e.$slots, "after")
    ]),
    _: 3
  }, 16, ["class", "aria-label"]);
}
const Ul = /* @__PURE__ */ j(Al, [["render", xl]]), Bl = {
  name: "UluAlert",
  components: {
    UluButton: Ul,
    UluIcon: D
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
    const { resolvedModifiers: s } = me({
      props: e,
      baseClass: "callout",
      internal: _(() => ({
        [e.type]: e.type,
        compact: e.compact
      }))
    });
    return { resolvedModifiers: s };
  }
}, El = { class: "layout-flex" }, Rl = { class: "type-small" }, jl = {
  key: 0,
  class: "margin-left-auto align-self-center"
};
function Il(e, s, t, n, l, o) {
  const r = K("UluIcon");
  return u(), f("div", {
    class: m(["callout", n.resolvedModifiers])
  }, [
    h("div", El, [
      O(r, {
        class: m(["type-large margin-right-small", `color-${t.type}`]),
        icon: t.icon || `type:${t.type}`
      }, null, 8, ["class", "icon"]),
      h("div", Rl, [
        h("div", null, [
          g(e.$slots, "title", {}, () => [
            h("strong", null, w(t.title), 1)
          ])
        ]),
        h("div", null, [
          g(e.$slots, "description", {}, () => [
            T(w(t.description), 1)
          ])
        ])
      ]),
      e.$slots.action ? (u(), f("div", jl, [
        g(e.$slots, "action")
      ])) : p("", !0)
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
      const { click: l, to: o, href: r } = s;
      return l ? "button" : o ? Ge : r ? "a" : "span";
    });
    return (l, o) => (u(), S(P(n.value), {
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
          }, w(e.text), 9, Ml)) : g(l.$slots, "default", { key: 1 }),
          e.alt ? (u(), f("span", Pl, w(e.alt), 1)) : p("", !0)
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
      (u(!0), f(U, null, B(e.items, (n, l) => (u(), f("li", {
        class: "badge-stack__item",
        key: l
      }, [
        O(zl, Q({ ref_for: !0 }, n), null, 16)
      ]))), 128))
    ]));
  }
}, Ll = {
  name: "UluButtonVerbose",
  components: {
    UluIcon: D
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
    const { resolvedModifiers: s } = me({ props: e, baseClass: "button-verbose" });
    return { resolvedModifiers: s };
  },
  computed: {
    element() {
      return this.to ? Ge : this.href ? "a" : "button";
    },
    attrs() {
      const { to: e, href: s, download: t, target: n } = this, l = e ? { to: e } : s ? { href: s } : {};
      return s && (n && (l.target = n), t && (l.download = typeof t == "string" ? t : !0)), l;
    }
  }
}, Vl = {
  key: 1,
  class: "button-verbose__body"
};
function Hl(e, s, t, n, l, o) {
  const r = K("UluIcon");
  return u(), S(P(o.element), Q({
    class: ["button-verbose", [
      {
        "button-verbose--inline": t.inline,
        "button-verbose--full-width": t.fullWidth
      },
      n.resolvedModifiers
    ]]
  }, o.attrs), {
    default: k(() => [
      e.$slots.title || t.title ? (u(), S(P(t.titleElement), {
        key: 0,
        class: "button-verbose__title"
      }, {
        default: k(() => [
          g(e.$slots, "title", {}, () => [
            T(w(t.title), 1)
          ])
        ]),
        _: 3
      })) : p("", !0),
      e.$slots.default || t.body ? (u(), f("span", Vl, [
        g(e.$slots, "default", {}, () => [
          T(w(t.body), 1)
        ])
      ])) : p("", !0),
      t.icon ? (u(), S(r, {
        key: 2,
        icon: t.icon,
        class: "button-verbose__icon",
        "aria-hidden": "true"
      }, null, 8, ["icon"])) : p("", !0)
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
    const { resolvedModifiers: s } = me({ props: e, baseClass: "callout" });
    return { resolvedModifiers: s };
  }
};
function Dl(e, s, t, n, l, o) {
  return u(), f("div", {
    class: m(["callout", [n.resolvedModifiers, { "full-height": t.fullHeight }]])
  }, [
    g(e.$slots, "default")
  ], 2);
}
const dh = /* @__PURE__ */ j(Nl, [["render", Dl]]), Wl = { class: "card__body" }, ql = { class: "card__main" }, Xl = ["href", "target"], Gl = {
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
    const t = e, n = s, l = Hs();
    t.proxyClick && (t.to || t.href) && console.warn("UluCard: 'proxyClick' is ignored when 'to' or 'href' are present."), (t.titleTo || t.titleHref) && (t.to || t.href) && console.warn("UluCard: 'titleTo'/'titleHref' should not be used with 'to'/'href'.");
    const o = R(null), r = R(null), { resolvedModifiers: i } = me({ props: t, baseClass: "card" }), c = R(null), a = R(!1), d = _(() => t.proxyClick && !t.to && !t.href), v = _(() => d.value && (t.titleTo || t.titleHref)), y = _(() => d.value && !v.value), b = _(() => d.value || null), A = _(() => ({
      selectorPrevent: "input, select, textarea, button, a, [tabindex='-1']",
      mousedownDurationPrevent: 250,
      ...t.proxyClickOptions
    })), $ = _(() => d.value ? "pointer" : null), E = _(() => t.to ? Ge : t.href ? "a" : t.cardElement);
    function G({ target: z, timeStamp: Z }) {
      if (!b.value) return;
      const { selectorPrevent: we } = A.value;
      a.value = !1, z.closest(we) || (a.value = !0, c.value = Z);
    }
    function te({ timeStamp: z }) {
      if (!b.value || !a.value) return;
      const { mousedownDurationPrevent: Z } = A.value;
      if (z - c.value < Z) {
        if (v.value)
          r.value?.click();
        else if (y.value) {
          const we = o.value?.querySelector("[data-ulu-card-proxy-target]");
          we ? we.click() : n("proxy-click");
        }
      }
      a.value = !1;
    }
    return (z, Z) => (u(), S(P(E.value), {
      ref_key: "cardRoot",
      ref: o,
      class: m(["card", [
        {
          "card--horizontal": e.horizontal || e.horizontalCenter,
          "card--horizontal-center": e.horizontalCenter,
          "card--overlay": e.overlay
        },
        C(i)
      ]]),
      onMousedown: G,
      onMouseup: te,
      style: X({ cursor: $.value }),
      target: e.target,
      to: e.to,
      href: e.href,
      "data-ulu-proxy-click-init": b.value
    }, {
      default: k(() => [
        h("div", Wl, [
          h("div", ql, [
            e.title || C(l).title ? (u(), S(P(e.titleElement), {
              key: 0,
              class: m(["card__title", e.classes.title])
            }, {
              default: k(() => [
                e.titleTo ? (u(), S(C(Ge), {
                  key: 0,
                  class: "card__title-link",
                  to: e.titleTo,
                  ref_key: "link",
                  ref: r
                }, {
                  default: k(() => [
                    g(z.$slots, "title", {}, () => [
                      T(w(e.title), 1)
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
                    T(w(e.title), 1)
                  ])
                ], 8, Xl)) : g(z.$slots, "title", { key: 2 }, () => [
                  T(w(e.title), 1)
                ])
              ]),
              _: 3
            }, 8, ["class"])) : p("", !0),
            g(z.$slots, "body")
          ]),
          C(l).aside ? (u(), f("div", Gl, [
            g(z.$slots, "aside")
          ])) : p("", !0)
        ]),
        C(l).image || e.imageSrc ? (u(), f("div", {
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
        ], 2)) : p("", !0),
        C(l).footer ? (u(), f("div", Kl, [
          g(z.$slots, "footer")
        ])) : p("", !0)
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
    })), { resolvedModifiers: n } = me({
      props: s,
      internal: t,
      baseClass: "definition-list"
    });
    return (l, o) => (u(), f("dl", {
      class: m(["definition-list", [C(n), e.classes.list]])
    }, [
      (u(!0), f(U, null, B(e.items, (r, i) => (u(), f("div", {
        key: i,
        class: m(e.classes.item)
      }, [
        h("dt", {
          class: m(e.classes.term)
        }, [
          g(l.$slots, "term", {
            item: r,
            index: i
          }, () => [
            T(w(r.term), 1)
          ])
        ], 2),
        h("dd", {
          class: m(e.classes.description)
        }, [
          g(l.$slots, "description", {
            item: r,
            index: i
          }, () => [
            T(w(r.description), 1)
          ])
        ], 2)
      ], 2))), 128))
    ], 2));
  }
}, Jl = ["href", "target"], Zl = { class: "external-link__text" }, mh = {
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
      h("span", Zl, [
        g(s.$slots, "default", {}, () => [
          T(w(e.text), 1)
        ])
      ]),
      O(D, {
        class: "external-link__icon margin-left-small-x display-inline",
        icon: e.icon || "type:externalLink"
      }, null, 8, ["icon"])
    ], 8, Jl));
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
    return (n, l) => (u(), S(P(t.value), {
      class: m([
        {
          "list-ordered": e.ordered,
          "list-unordered": e.unordered,
          "list-lines": e.lines,
          "list-compact": e.compact
        },
        e.classes.list
      ]),
      style: X({
        listStyleType: e.listStyleType
      }),
      reversed: e.reversed,
      start: e.start
    }, {
      default: k(() => [
        (u(!0), f(U, null, B(e.items, (o, r) => (u(), f("li", {
          key: r,
          class: m(e.classes.listItem)
        }, [
          g(n.$slots, "default", {
            item: o,
            index: r
          }, () => [
            T(w(o), 1)
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
const vh = /* @__PURE__ */ j(Ql, [["render", tr]]), sr = { class: "spoke-spinner__spinner" }, yh = {
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
    const t = e, n = s, l = _(() => t.legend ? t.legend.toLowerCase().replace(/\s+/g, "-") : `menu-${Math.random().toString(36).substring(7)}`), o = _(() => l.value ? `${l.value}-legend` : null), r = _(() => t.type === "radio" ? "radiogroup" : "group"), i = (d) => `${l.value}-${d.uid}`, c = (d) => t.type === "radio" ? t.modelValue === d.uid : Array.isArray(t.modelValue) ? t.modelValue.includes(d.uid) : t.type === "checkbox" && d.checked || !1, a = (d, v) => {
      if (t.type === "radio")
        n("update:modelValue", d.uid);
      else if (Array.isArray(t.modelValue)) {
        const y = [...t.modelValue], b = y.indexOf(d.uid);
        b > -1 ? y.splice(b, 1) : y.push(d.uid), n("update:modelValue", y);
      } else
        d.checked = v.target.checked;
    };
    return (d, v) => (u(), f("div", {
      class: m(["menu-stack form-theme", {
        "menu-stack--hide-inputs": e.hideInputs,
        "menu-stack--compact": e.compact
      }]),
      role: r.value,
      "aria-labelledby": o.value
    }, [
      e.legend ? (u(), f("div", {
        key: 0,
        id: o.value,
        class: "hidden-visually"
      }, w(e.legend), 9, or)) : p("", !0),
      h("ul", lr, [
        (u(!0), f(U, null, B(e.options, (y) => (u(), f("li", {
          class: "menu-stack__item",
          key: y.uid
        }, [
          h("div", rr, [
            h("input", {
              type: e.type,
              id: i(y),
              name: l.value,
              value: y.uid,
              checked: c(y),
              onChange: (b) => a(y, b)
            }, null, 40, ir),
            h("label", {
              for: i(y)
            }, [
              g(d.$slots, "default", { option: y }, () => [
                T(w(y?.label || y?.title || y?.text), 1)
              ])
            ], 8, ar)
          ])
        ]))), 128))
      ])
    ], 10, nr));
  }
}, cr = ["href", "download"], ur = { class: "margin-left-small-x" }, ph = {
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
      const { size: l } = s.file, o = l / 1e6, r = l / 1e3, i = (c) => parseFloat(c.toFixed(2));
      return o > 1 ? `${i(o)}Mb` : r > 1 ? `${i(r)}Kb` : `${i(l)}B`;
    });
    return (l, o) => (u(), f("a", {
      class: "layout-flex-baseline",
      href: t.value,
      download: e.file.name
    }, [
      g(l.$slots, "default", {
        fileName: e.file.name,
        fileSize: n.value
      }, () => [
        O(D, {
          class: "ui-icon",
          icon: e.icon
        }, null, 8, ["icon"]),
        h("span", ur, [
          T(w(e.file.name) + " ", 1),
          e.noFileSize ? p("", !0) : (u(), S(on, {
            key: 0,
            text: n.value,
            small: "",
            outline: ""
          }, null, 8, ["text"]))
        ])
      ])
    ], 8, cr));
  }
}, dr = { class: "form-theme__required-char" }, ns = {
  __name: "UluFormRequiredChar",
  setup(e) {
    return (s, t) => (u(), f("span", dr, "*"));
  }
}, fr = ["for"], hr = ["multiple", "id", "required"], bh = {
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
  setup(e, { emit: s }) {
    const t = s, n = oe(), l = (o) => {
      t("file-change", o.target.files);
    };
    return (o, r) => (u(), f(U, null, [
      h("label", {
        class: m({ "hidden-visually": e.labelHidden }),
        for: C(n)
      }, [
        g(o.$slots, "label", {}, () => [
          T(w(e.label), 1),
          e.required ? (u(), S(ns, { key: 0 })) : p("", !0)
        ])
      ], 10, fr),
      h("input", Q({
        type: "file",
        onChange: l,
        multiple: e.multiple,
        id: C(n)
      }, e.inputAttrs, { required: e.required }), null, 16, hr)
    ], 64));
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
      class: m(["form-theme__description", {
        "form-theme__error": e.error,
        "form-theme__warning": e.warning
      }])
    }, [
      e.error || e.warning ? (u(), S(D, {
        key: 0,
        icon: `type:${e.error ? "error" : "warning"}`
      }, null, 8, ["icon"])) : p("", !0),
      g(s.$slots, "default")
    ], 2));
  }
}, mr = ["for"], gr = ["id", "value", "required"], vr = ["value"], wh = {
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
    const s = oe();
    return (t, n) => (u(), f(U, null, [
      h("label", {
        class: m({ "hidden-visually": e.labelHidden }),
        for: C(s)
      }, [
        g(t.$slots, "label", {}, () => [
          T(w(e.label), 1),
          e.required ? (u(), S(ns, { key: 0 })) : p("", !0)
        ])
      ], 10, mr),
      h("select", {
        id: C(s),
        value: e.modelValue,
        onInput: n[0] || (n[0] = (l) => t.$emit("update:modelValue", l.target.value)),
        required: e.required
      }, [
        n[1] || (n[1] = h("option", {
          disabled: "",
          value: ""
        }, "Please select one", -1)),
        (u(!0), f(U, null, B(e.options, (l, o) => (u(), f("option", {
          key: o,
          value: l.value
        }, w(l.text), 9, vr))), 128))
      ], 40, gr)
    ], 64));
  }
}, yr = ["for"], pr = ["value", "id", "required"], Sh = {
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
    const s = oe();
    return (t, n) => (u(), f(U, null, [
      h("label", {
        class: m({ "hidden-visually": e.labelHidden }),
        for: C(s)
      }, [
        g(t.$slots, "label", {}, () => [
          T(w(e.label), 1),
          e.required ? (u(), S(ns, { key: 0 })) : p("", !0)
        ])
      ], 10, yr),
      h("input", {
        type: "text",
        value: e.modelValue,
        onInput: n[0] || (n[0] = (l) => t.$emit("update:modelValue", l.target.value)),
        id: C(s),
        required: e.required
      }, null, 40, pr)
    ], 64));
  }
}, br = { class: "form-theme search-form type-small" }, _r = { class: "search-form__field" }, wr = ["placeholder"], Sr = {
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
    return (s, t) => (u(), f("div", br, [
      h("div", _r, [
        t[0] || (t[0] = h("label", { class: "hidden-visually" }, "Search", -1)),
        h("input", {
          class: "search-form__input",
          type: "text",
          id: "example-input",
          placeholder: e.placeholder
        }, null, 8, wr)
      ]),
      h("button", Sr, [
        O(D, { icon: "type:search" })
      ])
    ]));
  }
}, $h = {
  __name: "UluAdaptiveLayout",
  setup(e) {
    const s = Ae("uluIsMobile");
    return (t, n) => !C(s) || !t.$slots.mobile ? g(t.$slots, "default", { key: 0 }) : g(t.$slots, "mobile", { key: 1 });
  }
}, kr = {
  name: "UluDataGrid",
  async mounted() {
    const e = () => lo(this.$el);
    e(), this.resizeHandler = Wt(e, 200, !1, this), window.addEventListener("resize", this.resizeHandler);
  },
  beforeUnmount() {
    this.resizeHandler && window.removeEventListener("resize", this.resizeHandler);
  }
};
function $r(e, s, t, n, l, o) {
  return u(), f("div", null, [
    g(e.$slots, "default")
  ]);
}
const Ch = /* @__PURE__ */ j(kr, [["render", $r]]), Cr = {
  name: "UluTitleRail",
  components: {
    UluIcon: D
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
}, Tr = {
  key: 0,
  class: "rail__item rail__item--pull"
};
function Ar(e, s, t, n, l, o) {
  const r = K("UluIcon");
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
        style: X({ alignItems: t.iconAlign })
      }, {
        default: k(() => [
          t.icon ? (u(), S(r, {
            key: 0,
            class: m(t.classes.icon),
            icon: t.icon
          }, null, 8, ["class", "icon"])) : p("", !0),
          g(e.$slots, "default", {}, () => [
            T(w(t.title), 1)
          ])
        ]),
        _: 3
      }, 8, ["class", "style"]))
    ], 2),
    e.$slots.end ? (u(), f("div", Tr, [
      g(e.$slots, "end")
    ])) : p("", !0)
  ], 2);
}
const Th = /* @__PURE__ */ j(Cr, [["render", Ar]]), Or = {
  name: "UluBreadcrumb",
  components: {
    UluIcon: D
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
function xr(e, s, t, n, l, o) {
  const r = K("router-link"), i = K("UluIcon");
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
            T(w(c.title), 1)
          ])
        ], 2)) : (u(), S(r, {
          key: 0,
          to: c.to,
          class: m(t.classes.link),
          "aria-current": c.current ? "page" : null
        }, {
          default: k(() => [
            g(e.$slots, "default", { item: c }, () => [
              T(w(c.title), 1)
            ])
          ]),
          _: 2
        }, 1032, ["to", "class", "aria-current"])),
        a < t.items.length - 1 ? g(e.$slots, "separator", { key: 2 }, () => [
          O(i, {
            class: m(t.classes.separator),
            icon: t.separatorIcon || "type:pathSeparator"
          }, null, 8, ["class", "icon"])
        ]) : p("", !0)
      ], 2))), 128))
    ], 2)
  ], 2)) : p("", !0);
}
const Ah = /* @__PURE__ */ j(Or, [["render", xr]]), Ur = {
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
function Br(e, s, t, n, l, o) {
  const r = K("UluMenu");
  return u(), f("nav", {
    class: m(["nav-strip", {
      "nav-strip--rule": t.rule,
      "nav-strip--center": t.center,
      "nav-strip--right": t.right
    }])
  }, [
    O(r, {
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
const Oh = /* @__PURE__ */ j(Ur, [["render", Br]]), Er = ["aria-labelledby"], Rr = { class: "pager__items js-pager__items" }, jr = {
  key: 0,
  class: "pager__item pager__item--first"
}, Ir = {
  key: 1,
  class: "pager__item pager__item--previous"
}, Mr = {
  key: 2,
  class: "pager__item pager__item--ellipsis",
  role: "presentation"
}, Pr = { class: "hidden-visually" }, zr = {
  key: 3,
  class: "pager__item pager__item--ellipsis",
  role: "presentation"
}, Fr = {
  key: 4,
  class: "pager__item pager__item--next"
}, Lr = {
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
    const s = e, t = oe("ulu-pager");
    function n(l) {
      return s.current == l ? "Current page" : `Go to page ${l}`;
    }
    return (l, o) => {
      const r = K("router-link");
      return e.items ? (u(), f("nav", {
        key: 0,
        class: "pager",
        role: "navigation",
        "aria-labelledby": C(t)
      }, [
        (u(), S(P(e.titleElement), {
          id: C(t),
          class: "hidden-visually"
        }, {
          default: k(() => [...o[0] || (o[0] = [
            T("Pagination", -1)
          ])]),
          _: 1
        }, 8, ["id"])),
        h("ul", Rr, [
          e.items.first ? (u(), f("li", jr, [
            O(r, Q({
              to: e.items.first.href,
              title: "Go to first page"
            }, e.items.first.attributes), {
              default: k(() => [
                o[1] || (o[1] = h("span", { class: "hidden-visually" }, "First page", -1)),
                O(D, {
                  icon: "fas fa-angle-double-left",
                  "aria-hidden": "true"
                })
              ]),
              _: 1
            }, 16, ["to"])
          ])) : p("", !0),
          e.items.previous ? (u(), f("li", Ir, [
            O(r, Q({
              to: e.items.previous.href,
              title: "Go to previous page",
              rel: "prev"
            }, e.items.previous.attributes), {
              default: k(() => [
                o[2] || (o[2] = h("span", { class: "hidden-visually" }, "Previous page", -1)),
                O(D, {
                  icon: "fas fa-angle-left",
                  "aria-hidden": "true"
                })
              ]),
              _: 1
            }, 16, ["to"])
          ])) : p("", !0),
          e.ellipses.previous ? (u(), f("li", Mr, "…")) : p("", !0),
          (u(!0), f(U, null, B(e.items.pages, (i, c) => (u(), f("li", {
            key: c,
            class: m(["pager__item", { "is-active": e.current == c }])
          }, [
            O(r, Q({
              to: i.href,
              title: n(c)
            }, { ref_for: !0 }, i.attributes), {
              default: k(() => [
                h("span", Pr, w(e.current == c ? "Current page" : "Page"), 1),
                T(" " + w(c), 1)
              ]),
              _: 2
            }, 1040, ["to", "title"])
          ], 2))), 128)),
          e.ellipses.next ? (u(), f("li", zr, "…")) : p("", !0),
          e.items.next ? (u(), f("li", Fr, [
            O(r, Q({
              to: e.items.next.href,
              title: "Go to next page",
              rel: "next"
            }, e.items.next.attributes), {
              default: k(() => [
                o[3] || (o[3] = h("span", { class: "hidden-visually" }, "Next page", -1)),
                O(D, {
                  icon: "fas fa-angle-right",
                  "aria-hidden": "true"
                })
              ]),
              _: 1
            }, 16, ["to"])
          ])) : p("", !0),
          e.items.last ? (u(), f("li", Lr, [
            O(r, Q({
              to: e.items.last.href,
              title: "Go to last page"
            }, e.items.last.attributes), {
              default: k(() => [
                o[4] || (o[4] = h("span", { class: "hidden-visually" }, "Last page", -1)),
                O(D, {
                  icon: "fas fa-angle-double-right",
                  "aria-hidden": "true"
                })
              ]),
              _: 1
            }, 16, ["to"])
          ])) : p("", !0)
        ])
      ], 8, Er)) : p("", !0);
    };
  }
}, Vr = {}, Hr = {
  class: "site-skip-link hidden-visually-focusable",
  href: "#main-content"
};
function Nr(e, s) {
  return u(), f("a", Hr, " Skip to main content ");
}
const Uh = /* @__PURE__ */ j(Vr, [["render", Nr]]), Dr = {
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
function Wr(e, s, t, n, l, o) {
  return t.text != null ? (u(), S(P(t.element), { key: 0 }, {
    default: k(() => [
      T(w(t.text), 1)
    ]),
    _: 1
  })) : p("", !0);
}
const Bh = /* @__PURE__ */ j(Dr, [["render", Wr]]), qr = {
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
}, Xr = {}, Gr = { style: { display: "none" } };
function Yr(e, s) {
  return u(), f("span", Gr);
}
const Eh = /* @__PURE__ */ j(Xr, [["render", Yr]]), Kr = {};
function Jr(e, s) {
  const t = K("router-view");
  return u(), S(t);
}
const Rh = /* @__PURE__ */ j(Kr, [["render", Jr]]), Zr = {
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
        width: it(500, 1e3),
        height: it(500, 1e3)
      } : { width: s, height: t };
    }
  }
}, Qr = ["src", "alt"];
function ei(e, s, t, n, l, o) {
  return u(), f("img", {
    src: o.src,
    alt: t.alt
  }, null, 8, Qr);
}
const jh = /* @__PURE__ */ j(Zr, [["render", ei]]), ti = {
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
function si(e, s, t, n, l, o) {
  return u(!0), f(U, null, B(parseInt(t.amount), (r) => (u(), S(P(t.element), { key: r }, {
    default: k(() => [...s[0] || (s[0] = [
      T(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed semper erat tincidunt tellus vestibulum dictum. Fusce vel augue commodo, egestas diam sed, accumsan leo. Maecenas congue nec nisl et ullamcorper. Maecenas tincidunt, tortor et viverra eleifend, enim leo vestibulum ipsum, quis placerat mi nisi nec ex. Vivamus a justo volutpat, scelerisque elit eget, lacinia ex. Phasellus dapibus sollicitudin tortor, vitae suscipit nunc condimentum ut. Cras suscipit feugiat nibh nec consectetur. Phasellus vitae quam blandit, cursus metus ut, placerat mi. Sed tempor lacus non est interdum imperdiet nec quis metus. Praesent vel eleifend diam. Donec tincidunt eget purus sed posuere. ", -1)
    ])]),
    _: 2
  }, 1024))), 128);
}
const Ih = /* @__PURE__ */ j(ti, [["render", si]]), ni = {
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
      const t = this.validator(e, s, this.$route), n = this.exclude.some((l) => l.endsWith("*") ? e.startsWith(l.slice(0, l.length - 1)) : e === l);
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
function oi(e, s, t, n, l, o) {
  return o.title ? (u(), f("p", {
    key: 0,
    tabindex: "-1",
    class: "hidden-visually",
    ref: "el"
  }, w(o.title), 513)) : p("", !0);
}
const Mh = /* @__PURE__ */ j(ni, [["render", oi]]), Ph = {
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
        image: ({ value: t }) => Fn("img", {
          src: `${t.imageUrl}?max-w=1100&fit=crop`,
          alt: t.imageAlt
        })
      }
    };
    return (t, n) => e.content?.length ? (u(), S(qr, {
      key: 0,
      class: "wysiwyg",
      unwrapped: e.noWrapper
    }, {
      default: k(() => [
        O(C(ro), {
          value: e.content,
          components: s
        }, null, 8, ["value"])
      ]),
      _: 1
    }, 8, ["unwrapped"])) : p("", !0);
  }
}, li = {
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
function ri(e, s, t, n, l, o) {
  return u(), f("span", null, [
    g(e.$slots, "default", { currentValue: l.currentValue }, () => [
      T(w(l.currentValue), 1)
    ])
  ]);
}
const zh = /* @__PURE__ */ j(li, [["render", ri]]), ii = {
  key: 0,
  class: "progress-bar__header"
}, ai = {
  key: 1,
  class: "progress-bar__value progress-bar__value--amount"
}, ci = {
  key: 2,
  class: "progress-bar__icon"
}, ui = { class: "progress-bar__track" }, di = {
  key: 1,
  class: "progress-bar__values"
}, fi = { class: "progress-bar__value progress-bar__value--amount" }, hi = {
  key: 0,
  class: "progress-bar__value progress-bar__value--deficit"
}, mi = { class: "progress-bar__value progress-bar__value--total" }, Fh = {
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
    const s = e, t = (r, i) => `${i === 0 ? 0 : r / i * 100}%`, n = _(() => s.indeterminate ? null : t(s.amount, s.total)), l = _(() => t(s.deficit, s.total)), o = _(() => ({
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
      class: m(o.value)
    }, [
      e.label || r.$slots.label || r.$slots.icon || e.amountInHeader ? (u(), f("div", ii, [
        e.label ? (u(), S(P(e.labelElement), {
          key: 0,
          class: m(["progress-bar__label", [e.classes.label, { "hidden-visually": e.labelHidden }]])
        }, {
          default: k(() => [
            g(r.$slots, "label", {}, () => [
              T(w(e.label), 1)
            ])
          ]),
          _: 3
        }, 8, ["class"])) : p("", !0),
        e.amountInHeader ? (u(), f("div", ai, [
          i[0] || (i[0] = h("strong", { class: "hidden-visually" }, "Amount:", -1)),
          g(r.$slots, "valueAmount", { value: e.amount }, () => [
            T(w(e.formatValue(e.amount, "amount")), 1)
          ])
        ])) : p("", !0),
        r.$slots.icon ? (u(), f("div", ci, [
          g(r.$slots, "icon")
        ])) : p("", !0)
      ])) : p("", !0),
      h("div", ui, [
        h("div", {
          class: "progress-bar__bar",
          style: X({ width: n.value })
        }, null, 4),
        e.deficit > 0 ? (u(), f("div", {
          key: 0,
          class: "progress-bar__bar--deficit",
          style: X({ width: l.value })
        }, null, 4)) : p("", !0)
      ]),
      !e.noValues && !e.amountInHeader && !e.loader && !e.indeterminate ? (u(), f("div", di, [
        h("div", fi, [
          i[1] || (i[1] = h("strong", { class: "hidden-visually" }, "Amount:", -1)),
          g(r.$slots, "valueAmount", { value: e.amount }, () => [
            T(w(e.formatValue(e.amount, "amount")), 1)
          ])
        ]),
        e.deficit > 0 ? (u(), f("div", hi, [
          i[2] || (i[2] = h("strong", { class: "hidden-visually" }, "Deficit: ", -1)),
          g(r.$slots, "valueDeficit", { value: e.deficit }, () => [
            T("-" + w(e.formatValue(e.deficit, "deficit")), 1)
          ])
        ])) : p("", !0),
        h("div", mi, [
          i[3] || (i[3] = h("strong", { class: "hidden-visually" }, "Total:", -1)),
          g(r.$slots, "valueTotal", { value: e.total }, () => [
            T(w(e.formatValue(e.total, "total")), 1)
          ])
        ])
      ])) : p("", !0)
    ], 2));
  }
}, gi = { class: "hidden-visually" }, vi = { class: "progress-circle__chart" }, yi = {
  class: "progress-circle__chart-svg",
  viewBox: "0 0 32 32"
}, pi = {
  key: 0,
  class: "progress-circle__chart-value"
}, bi = {
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
    const s = e, t = R(null), n = (c) => c === 100 ? 101 : c, l = (c = 0) => {
      if (!t.value || !t.value.animate) return;
      const a = { strokeDasharray: [`${c} 100`, o.value] };
      t.value.animate(a, { duration: s.duration, easing: s.easing, fill: "forwards" });
    };
    pe(() => s.percentage, (c, a) => {
      c !== a && l(n(a));
    });
    const o = _(() => `${n(s.percentage)} 100`), r = _(() => s.outside || s.outsideBelow || s.small), i = _(() => {
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
    return vt(() => {
      l();
    }), (c, a) => (u(), f("div", {
      class: m(i.value)
    }, [
      h("strong", gi, w(e.label), 1),
      h("div", vi, [
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
            style: X({ strokeDasharray: o.value })
          }, null, 4),
          a[1] || (a[1] = h("circle", {
            class: "progress-circle__chart-mask",
            cx: "16",
            cy: "16"
          }, null, -1))
        ])),
        !r.value && !e.noValue ? (u(), f("strong", pi, [
          g(c.$slots, "value", { value: e.percentage }, () => [
            T(w(e.formatValue(e.percentage)), 1)
          ])
        ])) : p("", !0)
      ]),
      r.value && !e.noValue ? (u(), f("strong", bi, [
        g(c.$slots, "value", { value: e.percentage }, () => [
          T(w(e.formatValue(e.percentage)), 1)
        ])
      ])) : p("", !0)
    ], 2));
  }
};
function _i(e) {
  const s = /* @__PURE__ */ new Set();
  for (const t of e)
    for (const n of t)
      s.add(n);
  return s;
}
function ut(e) {
  if (!e || e.length === 0) return /* @__PURE__ */ new Set();
  const s = e.sort((n, l) => n.size - l.size), t = new Set(s[0]);
  for (let n = 1; n < s.length; n++) {
    for (const l of t)
      s[n].has(l) || t.delete(l);
    if (t.size === 0) break;
  }
  return t;
}
function nt(e, s, t) {
  if (!e || e.length === 0)
    return t;
  const n = e.map((l) => {
    const o = l.children.map((r) => {
      const i = `${l.uid}:${r.uid}`;
      return s.get(i) || /* @__PURE__ */ new Set();
    });
    return l.match === "all" ? ut(o) : _i(o);
  });
  return ut(n);
}
function wi(e, s) {
  return !s || !Array.isArray(s) ? [] : s.map((t) => {
    const n = /* @__PURE__ */ new Set(), l = t.getValue || ((i) => i[t.uid]);
    e.forEach((i) => {
      const c = l(i);
      Array.isArray(c) ? c.forEach((a) => a && n.add(a)) : c && n.add(c);
    });
    const o = t.getLabel || ((i) => i), r = [...n].map((i) => ({
      uid: i,
      label: o(i),
      selected: !1
    }));
    return r.sort((i, c) => String(i.label).localeCompare(String(c.label))), {
      ...t,
      children: r
    };
  });
}
function Vh(e, s = {}) {
  const {
    initialFacets: t,
    facetFields: n,
    initialSearchValue: l = "",
    initialSortType: o = "az",
    noDefaultSorts: r = !1,
    extraSortTypes: i = {},
    searchOptions: c = {},
    getSortValue: a = (x) => x.title || x.label || "",
    countMode: d = "none",
    // 'none', 'simple', 'intuitive'
    urlSync: v
  } = s, y = (x) => x.sort((I, q) => {
    const M = a(I), F = a(q);
    return M && F ? String(M).localeCompare(String(F)) : M ? -1 : F ? 1 : 0;
  }), b = {
    az: { text: "A-Z", sort: y },
    za: { text: "Z-A", sort: (x) => y(x).reverse() }
  };
  function A(x) {
    return (x || []).map((I) => ({
      ...I,
      open: I.open || !1,
      children: I.children.map((q) => ({
        ...q,
        selected: q.selected || !1
      })),
      selectedCount: 0
    }));
  }
  const $ = R([]), E = R(l), G = R(o), te = _(() => !n || !e.value?.length ? null : wi(e.value, n)), z = _(() => ({
    ...r ? {} : b,
    ...i
  })), Z = _(() => {
    const x = /* @__PURE__ */ new Map(), I = se.value;
    if (!I || !n) return x;
    const q = new Map(n.map((M) => {
      const F = M.getValue || ((Y) => Y[M.uid]);
      return [M.uid, F];
    }));
    for (let M = 0; M < I.length; M++) {
      const F = I[M];
      for (const Y of n) {
        const V = q.get(Y.uid)(F), W = Array.isArray(V) ? V : V ? [V] : [];
        for (const le of W) {
          const ie = `${Y.uid}:${le}`;
          x.has(ie) || x.set(ie, /* @__PURE__ */ new Set()), x.get(ie).add(M);
        }
      }
    }
    return x;
  }), we = _(() => ({
    shouldSort: !0,
    keys: ["title", "label", "description", "author"],
    ...c
  })), se = _(() => E.value?.length ? new ao(e.value, we.value).search(E.value).map((I) => I.item) : e.value), ce = _(() => {
    const x = [];
    return $.value.forEach((I) => {
      const q = I.children.filter((M) => M.selected);
      q.length > 0 && x.push({ ...I, children: q });
    }), x;
  }), re = _(() => {
    if (!ce.value.length)
      return se.value;
    const x = Z.value;
    if (x.size === 0 && se.value.length > 0 && n?.length > 0)
      return [];
    const I = new Set(se.value.map((F, Y) => Y)), q = nt(ce.value, x, I), M = [];
    for (const F of q)
      M.push(se.value[F]);
    return M;
  }), Se = _(() => {
    const x = z.value[G.value]?.sort;
    return typeof x != "function" ? re.value : x([...re.value]);
  });
  function Re() {
    $.value.forEach((x) => {
      x.children && x.children.forEach((I) => I.selected = !1), x.selectedCount = 0;
    });
  }
  function At({ groupUid: x, facetUid: I, selected: q }) {
    const M = $.value.find((F) => F.uid === x);
    if (M) {
      !M.multiple && q && M.children.forEach((Y) => {
        Y.uid !== I && (Y.selected = !1);
      });
      const F = M.children.find((Y) => Y.uid === I);
      F && (F.selected = q), M.selectedCount = M.children.filter((Y) => Y.selected).length;
    }
  }
  if (pe(te, (x) => {
    const I = A(t || x);
    I.forEach((q) => {
      q.selectedCount = q.children.filter((M) => M.selected).length;
    }), $.value = I;
  }, { immediate: !0 }), pe([ce, se], ([x, I], [q, M]) => {
    if (!(d === "none" || !$.value.length) && !(x === q && I === M)) {
      if (d === "simple") {
        const F = Z.value;
        if (F.size === 0 && se.value.length > 0 && n?.length > 0)
          return;
        const Y = new Set(se.value.map((N, V) => V));
        $.value.forEach((N) => {
          const V = x.filter((le) => le.uid !== N.uid), W = nt(V, F, Y);
          N.children.forEach((le) => {
            const ie = `${N.uid}:${le.uid}`, ue = F.get(ie) || /* @__PURE__ */ new Set(), de = ut([W, ue]);
            le.count = de.size;
          });
        });
      } else if (d === "intuitive") {
        const F = Z.value;
        if (F.size === 0 && se.value.length > 0 && n?.length > 0)
          return;
        const Y = new Set(se.value.map((V, W) => W)), N = nt(x, F, Y);
        $.value.forEach((V) => {
          V.children.forEach((W) => {
            const le = `${V.uid}:${W.uid}`, ie = F.get(le) || /* @__PURE__ */ new Set();
            if (W.selected)
              if (V.multiple) {
                const ue = ut([N, ie]);
                W.count = ue.size;
              } else
                W.count = N.size;
            else {
              const ue = [];
              for (const st of x)
                ue.push({ ...st, children: [...st.children] });
              let de = ue.find((st) => st.uid === V.uid);
              de || (de = { ...V, children: [] }, ue.push(de)), V.multiple ? de.children.push(W) : de.children = [W];
              const xn = nt(ue, F, Y);
              W.count = xn.size;
            }
          });
        });
      }
    }
  }, { deep: !0, immediate: !0 }), v?.router && v?.route) {
    const { router: x, route: I } = v, q = () => $.value && $.value.length > 0, M = () => {
      if (!q()) return;
      const N = { ...I.query };
      delete N.sort, delete N.search, $.value.forEach((V) => delete N[V.uid]), G.value && G.value !== o && (N.sort = G.value), E.value && (N.search = E.value), ce.value.forEach((V) => {
        V.children.length > 0 && (N[V.uid] = V.children.map((W) => W.uid).join(","));
      }), JSON.stringify(N) !== JSON.stringify(I.query) && x.push({ query: N });
    }, F = () => {
      const N = I.query;
      N.sort && (G.value = N.sort), N.search && (E.value = N.search);
      const V = /* @__PURE__ */ new Map();
      $.value.forEach((W) => {
        const le = N[W.uid] ? N[W.uid].split(",") : [];
        V.set(W.uid, new Set(le));
      }), $.value.forEach((W) => {
        const le = V.get(W.uid) || /* @__PURE__ */ new Set();
        W.children.forEach((ie) => {
          const ue = ie.selected, de = le.has(ie.uid);
          ue !== de && At({ groupUid: W.uid, facetUid: ie.uid, selected: de });
        });
      });
    }, Y = Ln(() => {
      $.value && $.value.length > 0 && (F(), Y());
    });
    pe([G, E, ce], M, { deep: !0 }), pe(() => I.query, F);
  }
  return {
    facets: $,
    searchValue: E,
    selectedSort: G,
    sortTypes: z,
    displayItems: Se,
    selectedFacets: ce,
    clearFilters: Re,
    handleFacetChange: At
  };
}
const Si = ["onClick"], Hh = {
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
    const t = e, n = s, l = _(() => {
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
    function o(i) {
      n("facet-change", {
        groupUid: i.groupUid,
        facetUid: i.uid,
        selected: !1
      });
    }
    function r() {
      n("clear-filters");
    }
    return (i, c) => l.value.length ? (u(), f("div", {
      key: 0,
      class: m(["facets-active", e.classes.container])
    }, [
      (u(), S(P(e.labelElement), {
        class: m(["facets-active__label", e.classes.label])
      }, {
        default: k(() => [
          g(i.$slots, "label", {}, () => [
            c[0] || (c[0] = T(" Active Filters: ", -1))
          ])
        ]),
        _: 3
      }, 8, ["class"])),
      h("ul", {
        class: m(["facets-active__list", e.classes.list])
      }, [
        (u(!0), f(U, null, B(l.value, (a) => (u(), f("li", {
          class: m(["facets-active__item", e.classes.item]),
          key: `${a.groupUid}-${a.uid}`
        }, [
          h("button", {
            class: m(e.classes.filterButton),
            icon: "type:remove",
            onClick: (d) => o(a)
          }, [
            h("span", {
              class: m(e.classes.filterButtonText)
            }, [
              c[1] || (c[1] = h("span", { class: "hidden-visually" }, "Remove Active Filter:", -1)),
              T(" " + w(a.label), 1)
            ], 2),
            h("span", {
              class: m(e.classes.filterButtonIcon)
            }, [
              O(D, { icon: e.removeIcon }, null, 8, ["icon"])
            ], 2)
          ], 10, Si)
        ], 2))), 128))
      ], 2),
      h("button", {
        onClick: r,
        class: m(e.classes.clearButton)
      }, "Clear All", 2)
    ], 2)) : p("", !0);
  }
}, ki = { key: 0 }, dt = {
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
    const t = e, n = s, l = _(() => t.type === "radio" ? [{ label: `All ${t.groupName}s`, uid: "" }, ...t.children] : t.children);
    function o(r) {
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
      options: l.value,
      compact: e.compact,
      "model-value": e.modelValue,
      "onUpdate:modelValue": o
    }, {
      default: k(({ option: c }) => [
        T(w(c.label) + " ", 1),
        c.count !== void 0 ? (u(), f("span", ki, "(" + w(c.count) + ")", 1)) : p("", !0)
      ]),
      _: 1
    }, 8, ["legend", "type", "options", "compact", "model-value"]));
  }
}, $i = { class: "facets-filters" }, Nh = {
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
    const t = s, n = (l) => l.multiple ? l.children.filter((o) => o.selected).map((o) => o.uid) : l.children.find((o) => o.selected)?.uid || "";
    return (l, o) => (u(), f("div", $i, [
      (u(!0), f(U, null, B(e.facets, (r) => (u(), S(Ft, {
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
          g(l.$slots, "groupTrigger", {
            group: r,
            isOpen: i
          }, () => [
            T(w(r.name), 1)
          ])
        ]),
        default: k(() => [
          O(dt, {
            children: r.children.slice(0, e.maxVisible),
            groupUid: r.uid,
            groupName: r.name,
            type: r.multiple ? "checkbox" : "radio",
            compact: e.compact,
            "model-value": n(r),
            onFacetChange: o[0] || (o[0] = (i) => t("facet-change", i))
          }, null, 8, ["children", "groupUid", "groupName", "type", "compact", "model-value"]),
          r.children.length > e.maxVisible ? (u(), S(Ft, {
            key: 0,
            class: m(["facets-filters__more-facets", e.classes.moreFacets])
          }, {
            trigger: k(({ isOpen: i }) => [
              T(w(i ? "View Less" : "Show More"), 1)
            ]),
            default: k(() => [
              O(dt, {
                children: r.children.slice(e.maxVisible),
                groupUid: r.uid,
                groupName: r.name,
                type: r.multiple ? "checkbox" : "radio",
                compact: e.compact,
                "model-value": n(r),
                onFacetChange: o[1] || (o[1] = (i) => t("facet-change", i))
              }, null, 8, ["children", "groupUid", "groupName", "type", "compact", "model-value"])
            ]),
            _: 2
          }, 1032, ["class"])) : p("", !0)
        ]),
        _: 2
      }, 1032, ["classes", "startOpen"]))), 128))
    ]));
  }
}, Ci = { class: "facets-filters" }, Dh = {
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
    const t = s, n = (l) => l.multiple ? l.children.filter((o) => o.selected).map((o) => o.uid) : l.children.find((o) => o.selected)?.uid || "";
    return (l, o) => (u(), f("div", Ci, [
      (u(!0), f(U, null, B(e.facets, (r) => (u(), S(ms, {
        key: r.uid,
        modifiers: e.accordionModifiers,
        startOpen: r.open
      }, {
        trigger: k(({ isOpen: i }) => [
          g(l.$slots, "groupTrigger", {
            group: r,
            isOpen: i
          }, () => [
            T(w(r.name), 1)
          ])
        ]),
        default: k(() => [
          O(dt, {
            children: r.children.slice(0, e.maxVisible),
            groupUid: r.uid,
            groupName: r.name,
            type: r.multiple ? "checkbox" : "radio",
            compact: e.compact,
            "model-value": n(r),
            onFacetChange: o[0] || (o[0] = (i) => t("facet-change", i))
          }, null, 8, ["children", "groupUid", "groupName", "type", "compact", "model-value"]),
          r.children.length > e.maxVisible ? (u(), S(ms, {
            key: 0,
            class: m(["facets-filters__more-facets", e.classes.moreFacets]),
            modifiers: e.accordionModifiers
          }, {
            trigger: k(({ isOpen: i }) => [
              T(w(i ? "View Less" : "Show More"), 1)
            ]),
            default: k(() => [
              O(dt, {
                children: r.children.slice(e.maxVisible),
                groupUid: r.uid,
                groupName: r.name,
                type: r.multiple ? "checkbox" : "radio",
                compact: e.compact,
                "model-value": n(r),
                onFacetChange: o[1] || (o[1] = (i) => t("facet-change", i))
              }, null, 8, ["children", "groupUid", "groupName", "type", "compact", "model-value"])
            ]),
            _: 2
          }, 1032, ["class", "modifiers"])) : p("", !0)
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
    const t = s, n = (i) => i.multiple ? i.children : [{ label: `All ${i.name}s`, uid: "" }, ...i.children], l = (i) => i.multiple ? i.children.filter((c) => c.selected).map((c) => c.uid) : i.children.find((c) => c.selected)?.uid || "", o = (i) => {
      const c = i.children.filter((d) => d.selected), a = c.length;
      return a === 0 ? "All" : i.multiple ? a === 1 ? c[0].label : `${a} selected` : c[0].label;
    };
    function r(i, c, a) {
      if (i.multiple) {
        const d = new Set(c);
        i.children.forEach((v) => {
          const y = d.has(v.uid);
          v.selected !== y && t("facet-change", {
            groupUid: i.uid,
            facetUid: v.uid,
            selected: y
          });
        });
      } else {
        const d = c;
        i.children.forEach((v) => {
          const y = v.uid === d;
          v.selected !== y && t("facet-change", {
            groupUid: i.uid,
            facetUid: v.uid,
            selected: y
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
        O(yt, {
          classes: {
            trigger: e.classes.trigger,
            content: e.classes.content
          }
        }, {
          trigger: k(() => [
            g(i.$slots, "trigger", {
              group: a,
              label: o(a)
            }, () => [
              h("span", null, [
                T(w(a.name) + ": ", 1),
                h("strong", null, w(o(a)), 1)
              ])
            ]),
            O(D, {
              class: m(e.classes.triggerIcon),
              icon: "fas fa-chevron-down"
            }, null, 8, ["class"])
          ]),
          default: k(({ close: d }) => [
            O(un, {
              legend: a.name,
              type: a.multiple ? "checkbox" : "radio",
              options: n(a),
              "model-value": l(a),
              "onUpdate:modelValue": (v) => r(a, v, d),
              hideInputs: e.hideInputs
            }, null, 8, ["legend", "type", "options", "model-value", "onUpdate:modelValue", "hideInputs"])
          ]),
          _: 2
        }, 1032, ["classes"])
      ], 2))), 128))
    ], 2));
  }
}, Ti = { class: "facets-dropdown-filters" }, Ai = ["for"], Oi = ["id", "onChange"], xi = { value: "" }, Ui = ["value", "selected"], qh = {
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
    function n(l, o) {
      const r = o.target.value;
      l.children.find((c) => c.selected)?.uid !== r && l.children.forEach((c) => {
        const a = c.uid === r;
        c.selected !== a && t("facet-change", {
          groupUid: l.uid,
          facetUid: c.uid,
          selected: a
        });
      });
    }
    return (l, o) => (u(), f("div", Ti, [
      (u(!0), f(U, null, B(e.facets, (r) => (u(), f("div", {
        class: "facets-dropdown-filters__group",
        key: r.uid
      }, [
        h("label", {
          for: `facet-dropdown-${r.uid}`,
          class: "facets-dropdown-filters__label"
        }, w(r.name), 9, Ai),
        h("select", {
          id: `facet-dropdown-${r.uid}`,
          class: "facets-dropdown-filters__select",
          onChange: (i) => n(r, i)
        }, [
          h("option", xi, "All " + w(r.name) + "s", 1),
          (u(!0), f(U, null, B(r.children, (i) => (u(), f("option", {
            key: i.uid,
            value: i.uid,
            selected: i.selected
          }, w(i.label), 9, Ui))), 128))
        ], 40, Oi)
      ]))), 128))
    ]));
  }
}, Bi = { class: "facets-header-layout" }, Ei = { class: "facets-header-layout__header" }, Ri = { class: "facets-header-layout__main" }, Xh = {
  __name: "UluFacetsHeaderLayout",
  setup(e) {
    return (s, t) => (u(), f("div", Bi, [
      h("div", Ei, [
        g(s.$slots, "header")
      ]),
      h("div", Ri, [
        g(s.$slots, "main")
      ])
    ]));
  }
}, ji = { class: "facets-results" }, Ii = {
  key: 1,
  class: "facets-results__empty"
}, Gh = {
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
    return (s, t) => (u(), f("div", ji, [
      e.items.length ? (u(), S(Ns, {
        key: 0,
        tag: e.tag,
        name: e.transitionName,
        class: m(["facets-results__list", e.classes.list])
      }, {
        default: k(() => [
          (u(!0), f(U, null, B(e.items, (n, l) => (u(), f("li", {
            class: m(["facets-results__item", e.classes.item]),
            key: n.id || l
          }, [
            g(s.$slots, "item", {
              item: n,
              index: l
            })
          ], 2))), 128))
        ]),
        _: 3
      }, 8, ["tag", "name", "class"])) : (u(), f("div", Ii, [
        g(s.$slots, "empty", {}, () => [
          t[0] || (t[0] = h("p", null, "No matching items found.", -1))
        ])
      ]))
    ]));
  }
}, Mi = { class: "facets-search" }, Pi = ["for"], zi = ["id", "placeholder"], Yh = {
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
    const t = e, n = s, l = oe("facet-view-keyword"), o = _({
      get() {
        return t.modelValue;
      },
      set(r) {
        n("update:modelValue", r);
      }
    });
    return (r, i) => (u(), f("div", Mi, [
      h("label", {
        class: m(e.classes.searchLabel),
        for: C(l)
      }, [...i[1] || (i[1] = [
        h("strong", null, "Search", -1)
      ])], 10, Pi),
      Pe(h("input", {
        id: C(l),
        class: m(e.classes.searchInput),
        "onUpdate:modelValue": i[0] || (i[0] = (c) => o.value = c),
        type: "text",
        placeholder: e.placeholder
      }, null, 10, zi), [
        [Vn, o.value]
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
    const s = R(!1), t = ht("uluIsMobile"), n = R(null), l = R(null), o = _(() => t.value ? l.value : n.value);
    return (r, i) => (u(), f("div", {
      class: m(["facets-sidebar", { "facets-sidebar--filters-hidden": C(t) }])
    }, [
      h("div", Fi, [
        g(r.$slots, "header")
      ]),
      Pe(h("div", Li, [
        h("button", {
          class: m(e.classes.mobileButton),
          onClick: i[0] || (i[0] = (c) => s.value = !0)
        }, w(e.mobileButtonText), 3)
      ], 512), [
        [It, C(t)]
      ]),
      h("div", Vi, [
        Pe(h("div", {
          class: "facets-sidebar__sidebar",
          ref_key: "desktopTarget",
          ref: n
        }, null, 512), [
          [It, !C(t)]
        ]),
        h("div", Hi, [
          g(r.$slots, "main")
        ])
      ]),
      C(t) ? (u(), S(Ks, {
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
            ref: l
          }, null, 512)
        ]),
        _: 1
      }, 8, ["modelValue"])) : p("", !0),
      o.value ? (u(), S(mt, {
        key: 1,
        to: o.value
      }, [
        g(r.$slots, "sidebar")
      ], 8, ["to"])) : p("", !0)
    ], 2));
  }
}, Ni = ["for"], Di = ["value", "id"], Wi = ["value"], Jh = {
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
    const t = s, n = oe("ulu-facet-sort");
    return (l, o) => (u(), f("div", {
      class: m(["facets-sort", e.classes.sortForm])
    }, [
      h("label", {
        for: C(n),
        class: m(e.classes.sortFormLabel)
      }, [
        g(l.$slots, "default", {}, () => [
          o[1] || (o[1] = T("Sort:", -1))
        ])
      ], 10, Ni),
      h("select", {
        value: e.modelValue,
        onChange: o[0] || (o[0] = (r) => t("update:modelValue", r.target.value)),
        id: C(n),
        class: m(e.classes.sortFormSelect)
      }, [
        (u(!0), f(U, null, B(e.sortTypes, (r, i) => (u(), f("option", {
          value: i,
          key: i
        }, w(r.text), 9, Wi))), 128))
      ], 42, Di)
    ], 2));
  }
}, dn = Symbol(), fn = Symbol(), kt = Symbol(), qi = {
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
      [kt]: _(() => this.sections),
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
      let l = 0;
      const o = (r) => {
        r.forEach(({ target: i, isIntersecting: c }) => {
          const a = this.getSectionIndex(i), d = i.offsetTop, v = s[a], y = a === 0 && l > d, b = a === s.length - 1 && l < d;
          v && this.$nextTick(() => {
            c ? (t(v), v.active = !0) : (y && !n || b && v.active) && t(), this.$emit("section-change", {
              section: v,
              sections: s,
              active: c
            });
          });
        });
      };
      this.observer = new IntersectionObserver(o, e);
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
}, Xi = { class: "scroll-anchors" };
function Gi(e, s, t, n, l, o) {
  return u(), f("div", Xi, [
    g(e.$slots, "default")
  ]);
}
const Zh = /* @__PURE__ */ j(qi, [["render", Gi]]), Yi = {
  name: "ScrollAnchorsNav",
  inject: {
    sections: { from: kt }
  },
  props: {
    element: {
      type: String,
      default: "nav"
    }
  }
}, Ki = ["href"];
function Ji(e, s, t, n, l, o) {
  return o.sections.length ? (u(), S(P(t.element), {
    key: 0,
    class: "scroll-anchors__nav"
  }, {
    default: k(() => [
      h("ul", null, [
        (u(!0), f(U, null, B(o.sections, (r, i) => (u(), f("li", {
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
  })) : p("", !0);
}
const Qh = /* @__PURE__ */ j(Yi, [["render", Ji]]), Zi = {
  name: "ScrollAnchorsNavAnimated",
  inject: {
    sections: { from: kt }
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
      const l = this.linkRefs[n], { offsetTop: o, offsetHeight: r } = l;
      return {
        y: o,
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
function ta(e, s, t, n, l, o) {
  return o.sections.length ? (u(), S(P(t.element), {
    key: 0,
    class: "scroll-anchors__nav scroll-anchors__nav--animated"
  }, {
    default: k(() => [
      h("ul", Qi, [
        (u(!0), f(U, null, B(o.sections, (r, i) => (u(), f("li", {
          key: i,
          class: m({ "is-active": r.active })
        }, [
          h("a", {
            class: m({ "is-active": r.active }),
            ref_for: !0,
            ref: (c) => o.addLinkRef(i, c),
            href: `#${r.titleId}`
          }, w(r.title), 11, ea)
        ], 2))), 128))
      ]),
      h("div", {
        class: m(["scroll-anchors__indicator", {
          "scroll-anchors__indicator--can-transition": l.indicatorAnimReady
        }]),
        ref: "indicator",
        style: X({
          opacity: o.indicatorStyles ? "1" : "0",
          transform: `translateY(${o.indicatorStyles.y}px)`,
          height: `${o.indicatorStyles.height}px`
        })
      }, null, 6)
    ]),
    _: 1
  })) : p("", !0);
}
const em = /* @__PURE__ */ j(Zi, [["render", ta]]), sa = {
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
    sections: { from: kt, default: () => _(() => []) }
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
function na(e, s, t, n, l, o) {
  return u(), f("div", {
    class: m([t.wrapperClass, { [t.activeClass]: t.activeClass && o.section?.active }]),
    ref: "element"
  }, [
    (u(), S(P(t.titleElement), {
      class: m(t.titleClass),
      id: l.titleId
    }, {
      default: k(() => [
        T(w(t.title), 1)
      ]),
      _: 1
    }, 8, ["class", "id"])),
    g(e.$slots, "default", { section: o.section })
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
      const l = it(70, 100);
      let o = 0;
      const r = () => {
        const a = l - o, d = it(15, a);
        return o += d, d;
      }, i = [];
      for (; o < l - 15; )
        i.push(r());
      const c = () => i.reduce((a, d) => a + d, 0);
      for (; c() >= l && i.pop(); )
        ;
      return i.map((a) => ({ width: a, alt: Math.random() < 0.5 }));
    }));
    return (n, l) => (u(), f("div", null, [
      (u(!0), f(U, null, B(t.value, (o, r) => (u(), f("div", { key: r }, [
        (u(!0), f(U, null, B(o, (i) => (u(), f("span", {
          key: i,
          class: m(["skeleton skeleton--text skeleton--inline", { "skeleton--background-alt": i.alt }]),
          style: X({ width: `${i.width}%` })
        }, null, 6))), 128))
      ]))), 128))
    ]));
  }
}, la = { class: "skeleton skeleton-block--media" }, om = {
  __name: "UluSkeletonMedia",
  setup(e) {
    return (s, t) => (u(), f("div", la, [
      O(D, { icon: "type:image" })
    ]));
  }
}, ra = {
  name: "SlideShow",
  emits: ["slide-change"],
  components: {
    UluIcon: D
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
      const s = e === "next", { scrollAmount: t } = this, { scrollLeft: n, offsetWidth: l } = this.getScrollData();
      return typeof t == "function" ? t(e, this.$refs) : typeof t == "number" ? s ? n + t : n - t : s ? n + l : n - l;
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
        const l = () => {
          s.element.focus(this.focusOptions), t.removeEventListener("scrollend", l);
        };
        t.addEventListener("scrollend", l), this.scrollTo(n, this.scrollBehaviorNav);
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
      const { observerOptions: e } = this, { track: s, nav: t } = this.$refs, n = (l) => {
        l.forEach((o) => {
          this.$nextTick(() => {
            const r = this.getSlideByElement(o.target);
            r.active = o.isIntersecting, this.$emit("slide-change", { slide: r, track: s, nav: t });
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
}, da = ["tabindex"], fa = { class: "slideshow__controls" }, ha = { class: "slideshow__controls-item slideshow__controls-item--previous" }, ma = ["disabled"], ga = { class: "slideshow__controls-item slideshow__controls-item--next" }, va = ["disabled"], ya = {
  key: 0,
  class: "slideshow__nav",
  ref: "nav"
}, pa = ["onClick"], ba = { class: "hidden-visually" };
function _a(e, s, t, n, l, o) {
  const r = K("UluIcon");
  return u(), f("div", ia, [
    h("div", aa, [
      h("div", ca, [
        h("ul", ua, [
          (u(!0), f(U, null, B(l.slides, (i, c) => (u(), f("li", {
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
            onClick: s[0] || (s[0] = (...i) => o.previous && o.previous(...i)),
            disabled: !o.canScrollLeft
          }, [
            O(r, {
              class: "slideshow__control-icon",
              icon: "type:previous"
            })
          ], 8, ma)
        ]),
        h("li", ga, [
          h("button", {
            class: "slideshow__control-button slideshow__control-button--next",
            "aria-label": "Scroll Left",
            onClick: s[1] || (s[1] = (...i) => o.next && o.next(...i)),
            disabled: !o.canScrollRight
          }, [
            O(r, {
              class: "slideshow__control-icon",
              icon: "type:next"
            })
          ], 8, va)
        ])
      ])
    ], 512),
    t.noNav ? p("", !0) : (u(), f("ul", ya, [
      (u(!0), f(U, null, B(l.slides, (i, c) => (u(), f("li", {
        class: m(["slideshow__nav-item", { "is-active": i.active }]),
        ref_for: !0,
        ref: (a) => {
          i.navElement = a;
        },
        key: c
      }, [
        h("button", {
          class: m(["slideshow__nav-button", { "is-active": i.active }]),
          onClick: (a) => o.to(c)
        }, [
          g(e.$slots, "nav", {
            item: i.item,
            index: c,
            active: i.active
          }, () => [
            h("span", ba, "Item " + w(c + 1), 1)
          ])
        ], 10, pa)
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
      const { offsetWidth: l, scrollLeft: o } = s, { offsetLeft: r, offsetWidth: i } = n, c = o + l, a = r + i;
      let d = null;
      console.log("left/right", o, c), t && n && (a > c ? d = o + (a - c) : r < o && (d = r), d !== null && s.scrollTo({ left: d, top: 0, behavior: "smooth" }));
    }
  }
}, ka = ["src", "alt"], $a = { class: "slideshow__image-actions" }, Ca = ["src", "alt"];
function Ta(e, s, t, n, l, o) {
  const r = K("AppButton"), i = K("UluSlideShow");
  return u(), S(i, {
    class: "slideshow--images",
    items: t.images,
    onSlideChange: o.slideChange
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
            T(" Select ", -1)
          ])]),
          _: 1
        })) : p("", !0)
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
function Oa(e, s, t, n, l, o) {
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
function Ea(e, s, t, n, l, o) {
  return u(!0), f(U, null, B(t.rows, (r, i) => (u(), f("tr", {
    key: `br-${i}`,
    id: t.optionalAttr(t.isActual && r.id),
    class: m(t.resolveClasses(t.classes.row, { row: r.data, rowIndex: i, isActual: t.isActual, foot: t.foot })),
    style: X({
      height: r.height
    })
  }, [
    (u(!0), f(U, null, B(t.rowColumns, (c, a) => (u(), S(P(c.rowHeader ? "th" : "td"), {
      id: t.optionalAttr(t.isActual && c.rowHeader && c.getRowHeaderId(i)),
      scope: t.optionalAttr(t.isActual && c.rowHeader && "row"),
      key: `bc-${a}`,
      headers: t.optionalAttr(t.isActual && t.getCellHeaders(c, i)),
      class: m(t.resolveClasses(c.class, { column: c, index: a, isActual: t.isActual, row: r, rowIndex: i, foot: t.foot })),
      style: X({
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
        }, null, 8, Ba)) : (u(), f(U, { key: 2 }, [
          T(w(t.value({ row: r, column: c, rowIndex: i, isActual: t.isActual, foot: t.foot })), 1)
        ], 64))
      ]),
      _: 2
    }, 1032, ["id", "scope", "headers", "class", "style"]))), 128))
  ], 14, Ua))), 128);
}
const Ra = /* @__PURE__ */ j(xa, [["render", Ea]]), ja = {
  name: "UluTableStickyTable",
  components: {
    UluTableStickyRows: Ra
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
      const { id: l } = e, o = t[l];
      o && this.$emit("actual-header-removed", o), this.$emit("actual-header-added", s), t[l] = s;
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
      const t = e.headers.join(" "), n = e.getRowHeaders(s), l = n.length ? " " : "";
      return `${t}${l}${n}`;
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
function Wa(e, s, t, n, l, o) {
  const r = K("UluTableStickyRows");
  return u(), f("table", {
    class: m(t.resolveClasses(t.classes.table, { isActual: t.isActual })),
    "aria-hidden": t.isActual ? "false" : "true"
  }, [
    t.caption ? (u(), f("caption", Ma, w(t.caption), 1)) : p("", !0),
    h("thead", null, [
      (u(!0), f(U, null, B(t.headerRows, (i, c) => (u(), f("tr", {
        key: `hr-${c}`,
        id: o.optionalAttr(t.isActual && i.id),
        class: m(t.resolveClasses(t.classes.rowHeader, { row: i, rowIndex: c, isActual: t.isActual })),
        style: X({
          height: i.height
        })
      }, [
        (u(!0), f(U, null, B(i.columns, (a, d) => (u(), f("th", {
          key: `hc-${d}`,
          id: o.optionalAttr(t.isActual && a.id),
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
          style: X({
            width: a.width
          }),
          "aria-sort": a.sort ? a.sortAscending ? "ascending" : "descending" : null,
          scope: o.optionalAttr(t.isActual && (a.colspan > 1 ? "colgroup" : "col")),
          headers: o.optionalAttr(t.isActual && o.getHeaderHeaders(a, c)),
          ref_for: !0,
          ref: (v) => o.addHeaderRef(a, v)
        }, [
          a.sortable ? (u(), S(P(t.isActual ? "button" : "div"), {
            key: 0,
            class: m(["table-sticky__sort-button", {
              "table-sticky__sort-button--focused": a.sortFocused
            }]),
            onClick: (v) => e.$emit("column-sorted", a),
            onFocus: (v) => o.handleSortFocus(a, !0),
            onBlur: (v) => o.handleSortFocus(a, !1),
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
              }, null, 8, Fa)) : (u(), f(U, { key: 2 }, [
                T(w(t.getColumnTitle({ column: a, index: d, isActual: t.isActual })), 1)
              ], 64)),
              h("span", La, [
                h("span", Va, [
                  g(e.$slots, "sortIcon", {}, () => [
                    s[0] || (s[0] = T("▼", -1))
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
              T(w(t.getColumnTitle({ column: a, index: d, isActual: t.isActual })), 1)
            ], 64))
          ], 64))
        ], 14, za))), 128))
      ], 14, Pa))), 128))
    ]),
    t.rows ? (u(), f("tbody", Na, [
      O(r, {
        rows: t.rows,
        rowColumns: t.rowColumns,
        optionalAttr: o.optionalAttr,
        resolveClasses: t.resolveClasses,
        getCellHeaders: o.getCellHeaders,
        isActual: t.isActual,
        columnWidth: t.columnWidth,
        classes: t.classes,
        value: o.value
      }, Ie({ _: 2 }, [
        B(e.$slots, (i, c) => ({
          name: c,
          fn: k((a) => [
            g(e.$slots, c, ae(he(a)))
          ])
        }))
      ]), 1032, ["rows", "rowColumns", "optionalAttr", "resolveClasses", "getCellHeaders", "isActual", "columnWidth", "classes", "value"])
    ])) : p("", !0),
    t.footerRows ? (u(), f("tfoot", Da, [
      O(r, {
        rows: t.footerRows,
        rowColumns: t.rowColumns,
        optionalAttr: o.optionalAttr,
        resolveClasses: t.resolveClasses,
        getCellHeaders: o.getCellHeaders,
        isActual: t.isActual,
        columnWidth: t.columnWidth,
        classes: t.classes,
        value: o.value,
        foot: ""
      }, Ie({ _: 2 }, [
        B(e.$slots, (i, c) => ({
          name: c,
          fn: k((a) => [
            g(e.$slots, c, ae(he(a)))
          ])
        }))
      ]), 1032, ["rows", "rowColumns", "optionalAttr", "resolveClasses", "getCellHeaders", "isActual", "columnWidth", "classes", "value"])
    ])) : p("", !0)
  ], 10, Ia);
}
const qa = /* @__PURE__ */ j(ja, [["render", Wa]]);
function Xa() {
  this.__data__ = [], this.size = 0;
}
function hn(e, s) {
  return e === s || e !== e && s !== s;
}
function $t(e, s) {
  for (var t = e.length; t--; )
    if (hn(e[t][0], s))
      return t;
  return -1;
}
var Ga = Array.prototype, Ya = Ga.splice;
function Ka(e) {
  var s = this.__data__, t = $t(s, e);
  if (t < 0)
    return !1;
  var n = s.length - 1;
  return t == n ? s.pop() : Ya.call(s, t, 1), --this.size, !0;
}
function Ja(e) {
  var s = this.__data__, t = $t(s, e);
  return t < 0 ? void 0 : s[t][1];
}
function Za(e) {
  return $t(this.__data__, e) > -1;
}
function Qa(e, s) {
  var t = this.__data__, n = $t(t, e);
  return n < 0 ? (++this.size, t.push([e, s])) : t[n][1] = s, this;
}
function _e(e) {
  var s = -1, t = e == null ? 0 : e.length;
  for (this.clear(); ++s < t; ) {
    var n = e[s];
    this.set(n[0], n[1]);
  }
}
_e.prototype.clear = Xa;
_e.prototype.delete = Ka;
_e.prototype.get = Ja;
_e.prototype.has = Za;
_e.prototype.set = Qa;
function ec() {
  this.__data__ = new _e(), this.size = 0;
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
var mn = typeof global == "object" && global && global.Object === Object && global, oc = typeof self == "object" && self && self.Object === Object && self, ge = mn || oc || Function("return this")(), Fe = ge.Symbol, gn = Object.prototype, lc = gn.hasOwnProperty, rc = gn.toString, Ne = Fe ? Fe.toStringTag : void 0;
function ic(e) {
  var s = lc.call(e, Ne), t = e[Ne];
  try {
    e[Ne] = void 0;
    var n = !0;
  } catch {
  }
  var l = rc.call(e);
  return n && (s ? e[Ne] = t : delete e[Ne]), l;
}
var ac = Object.prototype, cc = ac.toString;
function uc(e) {
  return cc.call(e);
}
var dc = "[object Null]", fc = "[object Undefined]", vs = Fe ? Fe.toStringTag : void 0;
function et(e) {
  return e == null ? e === void 0 ? fc : dc : vs && vs in Object(e) ? ic(e) : uc(e);
}
function Ct(e) {
  var s = typeof e;
  return e != null && (s == "object" || s == "function");
}
var hc = "[object AsyncFunction]", mc = "[object Function]", gc = "[object GeneratorFunction]", vc = "[object Proxy]";
function vn(e) {
  if (!Ct(e))
    return !1;
  var s = et(e);
  return s == mc || s == gc || s == hc || s == vc;
}
var Et = ge["__core-js_shared__"], ys = function() {
  var e = /[^.]+$/.exec(Et && Et.keys && Et.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function yc(e) {
  return !!ys && ys in e;
}
var pc = Function.prototype, bc = pc.toString;
function Be(e) {
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
  if (!Ct(e) || yc(e))
    return !1;
  var s = vn(e) ? Tc : wc;
  return s.test(Be(e));
}
function Oc(e, s) {
  return e?.[s];
}
function Ee(e, s) {
  var t = Oc(e, s);
  return Ac(t) ? t : void 0;
}
var Ze = Ee(ge, "Map"), Qe = Ee(Object, "create");
function xc() {
  this.__data__ = Qe ? Qe(null) : {}, this.size = 0;
}
function Uc(e) {
  var s = this.has(e) && delete this.__data__[e];
  return this.size -= s ? 1 : 0, s;
}
var Bc = "__lodash_hash_undefined__", Ec = Object.prototype, Rc = Ec.hasOwnProperty;
function jc(e) {
  var s = this.__data__;
  if (Qe) {
    var t = s[e];
    return t === Bc ? void 0 : t;
  }
  return Rc.call(s, e) ? s[e] : void 0;
}
var Ic = Object.prototype, Mc = Ic.hasOwnProperty;
function Pc(e) {
  var s = this.__data__;
  return Qe ? s[e] !== void 0 : Mc.call(s, e);
}
var zc = "__lodash_hash_undefined__";
function Fc(e, s) {
  var t = this.__data__;
  return this.size += this.has(e) ? 0 : 1, t[e] = Qe && s === void 0 ? zc : s, this;
}
function xe(e) {
  var s = -1, t = e == null ? 0 : e.length;
  for (this.clear(); ++s < t; ) {
    var n = e[s];
    this.set(n[0], n[1]);
  }
}
xe.prototype.clear = xc;
xe.prototype.delete = Uc;
xe.prototype.get = jc;
xe.prototype.has = Pc;
xe.prototype.set = Fc;
function Lc() {
  this.size = 0, this.__data__ = {
    hash: new xe(),
    map: new (Ze || _e)(),
    string: new xe()
  };
}
function Vc(e) {
  var s = typeof e;
  return s == "string" || s == "number" || s == "symbol" || s == "boolean" ? e !== "__proto__" : e === null;
}
function Tt(e, s) {
  var t = e.__data__;
  return Vc(s) ? t[typeof s == "string" ? "string" : "hash"] : t.map;
}
function Hc(e) {
  var s = Tt(this, e).delete(e);
  return this.size -= s ? 1 : 0, s;
}
function Nc(e) {
  return Tt(this, e).get(e);
}
function Dc(e) {
  return Tt(this, e).has(e);
}
function Wc(e, s) {
  var t = Tt(this, e), n = t.size;
  return t.set(e, s), this.size += t.size == n ? 0 : 1, this;
}
function Ve(e) {
  var s = -1, t = e == null ? 0 : e.length;
  for (this.clear(); ++s < t; ) {
    var n = e[s];
    this.set(n[0], n[1]);
  }
}
Ve.prototype.clear = Lc;
Ve.prototype.delete = Hc;
Ve.prototype.get = Nc;
Ve.prototype.has = Dc;
Ve.prototype.set = Wc;
var qc = 200;
function Xc(e, s) {
  var t = this.__data__;
  if (t instanceof _e) {
    var n = t.__data__;
    if (!Ze || n.length < qc - 1)
      return n.push([e, s]), this.size = ++t.size, this;
    t = this.__data__ = new Ve(n);
  }
  return t.set(e, s), this.size = t.size, this;
}
function He(e) {
  var s = this.__data__ = new _e(e);
  this.size = s.size;
}
He.prototype.clear = ec;
He.prototype.delete = tc;
He.prototype.get = sc;
He.prototype.has = nc;
He.prototype.set = Xc;
function Gc(e, s) {
  for (var t = -1, n = e == null ? 0 : e.length; ++t < n && s(e[t], t, e) !== !1; )
    ;
  return e;
}
var ps = function() {
  try {
    var e = Ee(Object, "defineProperty");
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
var Kc = Object.prototype, Jc = Kc.hasOwnProperty;
function Zc(e, s, t) {
  var n = e[s];
  (!(Jc.call(e, s) && hn(n, t)) || t === void 0 && !(s in e)) && Yc(e, s, t);
}
function Qc(e, s) {
  for (var t = -1, n = Array(e); ++t < e; )
    n[t] = s(t);
  return n;
}
function tt(e) {
  return e != null && typeof e == "object";
}
var eu = "[object Arguments]";
function bs(e) {
  return tt(e) && et(e) == eu;
}
var yn = Object.prototype, tu = yn.hasOwnProperty, su = yn.propertyIsEnumerable, nu = bs(/* @__PURE__ */ function() {
  return arguments;
}()) ? bs : function(e) {
  return tt(e) && tu.call(e, "callee") && !su.call(e, "callee");
}, os = Array.isArray;
function ou() {
  return !1;
}
var pn = typeof exports == "object" && exports && !exports.nodeType && exports, _s = pn && typeof module == "object" && module && !module.nodeType && module, lu = _s && _s.exports === pn, ws = lu ? ge.Buffer : void 0, ru = ws ? ws.isBuffer : void 0, bn = ru || ou, iu = 9007199254740991, au = /^(?:0|[1-9]\d*)$/;
function cu(e, s) {
  var t = typeof e;
  return s = s ?? iu, !!s && (t == "number" || t != "symbol" && au.test(e)) && e > -1 && e % 1 == 0 && e < s;
}
var uu = 9007199254740991;
function _n(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= uu;
}
var du = "[object Arguments]", fu = "[object Array]", hu = "[object Boolean]", mu = "[object Date]", gu = "[object Error]", vu = "[object Function]", yu = "[object Map]", pu = "[object Number]", bu = "[object Object]", _u = "[object RegExp]", wu = "[object Set]", Su = "[object String]", ku = "[object WeakMap]", $u = "[object ArrayBuffer]", Cu = "[object DataView]", Tu = "[object Float32Array]", Au = "[object Float64Array]", Ou = "[object Int8Array]", xu = "[object Int16Array]", Uu = "[object Int32Array]", Bu = "[object Uint8Array]", Eu = "[object Uint8ClampedArray]", Ru = "[object Uint16Array]", ju = "[object Uint32Array]", H = {};
H[Tu] = H[Au] = H[Ou] = H[xu] = H[Uu] = H[Bu] = H[Eu] = H[Ru] = H[ju] = !0;
H[du] = H[fu] = H[$u] = H[hu] = H[Cu] = H[mu] = H[gu] = H[vu] = H[yu] = H[pu] = H[bu] = H[_u] = H[wu] = H[Su] = H[ku] = !1;
function Iu(e) {
  return tt(e) && _n(e.length) && !!H[et(e)];
}
function ls(e) {
  return function(s) {
    return e(s);
  };
}
var wn = typeof exports == "object" && exports && !exports.nodeType && exports, Xe = wn && typeof module == "object" && module && !module.nodeType && module, Mu = Xe && Xe.exports === wn, Rt = Mu && mn.process, Le = function() {
  try {
    var e = Xe && Xe.require && Xe.require("util").types;
    return e || Rt && Rt.binding && Rt.binding("util");
  } catch {
  }
}(), Ss = Le && Le.isTypedArray, Pu = Ss ? ls(Ss) : Iu, zu = Object.prototype, Fu = zu.hasOwnProperty;
function Lu(e, s) {
  var t = os(e), n = !t && nu(e), l = !t && !n && bn(e), o = !t && !n && !l && Pu(e), r = t || n || l || o, i = r ? Qc(e.length, String) : [], c = i.length;
  for (var a in e)
    Fu.call(e, a) && !(r && // Safari 9 has enumerable `arguments.length` in strict mode.
    (a == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    l && (a == "offset" || a == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    o && (a == "buffer" || a == "byteLength" || a == "byteOffset") || // Skip index properties.
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
function qu(e) {
  return e != null && _n(e.length) && !vn(e);
}
function Xu(e) {
  return qu(e) ? Lu(e) : Wu(e);
}
var $n = typeof exports == "object" && exports && !exports.nodeType && exports, ks = $n && typeof module == "object" && module && !module.nodeType && module, Gu = ks && ks.exports === $n, $s = Gu ? ge.Buffer : void 0;
$s && $s.allocUnsafe;
function Yu(e, s) {
  return e.slice();
}
function Ku(e, s) {
  for (var t = -1, n = e == null ? 0 : e.length, l = 0, o = []; ++t < n; ) {
    var r = e[t];
    s(r, t, e) && (o[l++] = r);
  }
  return o;
}
function Ju() {
  return [];
}
var Zu = Object.prototype, Qu = Zu.propertyIsEnumerable, Cs = Object.getOwnPropertySymbols, ed = Cs ? function(e) {
  return e == null ? [] : (e = Object(e), Ku(Cs(e), function(s) {
    return Qu.call(e, s);
  }));
} : Ju;
function td(e, s) {
  for (var t = -1, n = s.length, l = e.length; ++t < n; )
    e[l + t] = s[t];
  return e;
}
var sd = kn(Object.getPrototypeOf, Object);
function nd(e, s, t) {
  var n = s(e);
  return os(e) ? n : td(n, t(e));
}
function od(e) {
  return nd(e, Xu, ed);
}
var Vt = Ee(ge, "DataView"), Ht = Ee(ge, "Promise"), Nt = Ee(ge, "Set"), Dt = Ee(ge, "WeakMap"), Ts = "[object Map]", ld = "[object Object]", As = "[object Promise]", Os = "[object Set]", xs = "[object WeakMap]", Us = "[object DataView]", rd = Be(Vt), id = Be(Ze), ad = Be(Ht), cd = Be(Nt), ud = Be(Dt), ye = et;
(Vt && ye(new Vt(new ArrayBuffer(1))) != Us || Ze && ye(new Ze()) != Ts || Ht && ye(Ht.resolve()) != As || Nt && ye(new Nt()) != Os || Dt && ye(new Dt()) != xs) && (ye = function(e) {
  var s = et(e), t = s == ld ? e.constructor : void 0, n = t ? Be(t) : "";
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
var Bs = ge.Uint8Array;
function rs(e) {
  var s = new e.constructor(e.byteLength);
  return new Bs(s).set(new Bs(e)), s;
}
function md(e, s) {
  var t = rs(e.buffer);
  return new e.constructor(t, e.byteOffset, e.byteLength);
}
var gd = /\w*$/;
function vd(e) {
  var s = new e.constructor(e.source, gd.exec(e));
  return s.lastIndex = e.lastIndex, s;
}
var Es = Fe ? Fe.prototype : void 0, Rs = Es ? Es.valueOf : void 0;
function yd(e) {
  return Rs ? Object(Rs.call(e)) : {};
}
function pd(e, s) {
  var t = rs(e.buffer);
  return new e.constructor(t, e.byteOffset, e.length);
}
var bd = "[object Boolean]", _d = "[object Date]", wd = "[object Map]", Sd = "[object Number]", kd = "[object RegExp]", $d = "[object Set]", Cd = "[object String]", Td = "[object Symbol]", Ad = "[object ArrayBuffer]", Od = "[object DataView]", xd = "[object Float32Array]", Ud = "[object Float64Array]", Bd = "[object Int8Array]", Ed = "[object Int16Array]", Rd = "[object Int32Array]", jd = "[object Uint8Array]", Id = "[object Uint8ClampedArray]", Md = "[object Uint16Array]", Pd = "[object Uint32Array]";
function zd(e, s, t) {
  var n = e.constructor;
  switch (s) {
    case Ad:
      return rs(e);
    case bd:
    case _d:
      return new n(+e);
    case Od:
      return md(e);
    case xd:
    case Ud:
    case Bd:
    case Ed:
    case Rd:
    case jd:
    case Id:
    case Md:
    case Pd:
      return pd(e);
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
      return yd(e);
  }
}
var js = Object.create, Fd = /* @__PURE__ */ function() {
  function e() {
  }
  return function(s) {
    if (!Ct(s))
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
  return tt(e) && ye(e) == Vd;
}
var Is = Le && Le.isMap, Nd = Is ? ls(Is) : Hd, Dd = "[object Set]";
function Wd(e) {
  return tt(e) && ye(e) == Dd;
}
var Ms = Le && Le.isSet, qd = Ms ? ls(Ms) : Wd, Cn = "[object Arguments]", Xd = "[object Array]", Gd = "[object Boolean]", Yd = "[object Date]", Kd = "[object Error]", Tn = "[object Function]", Jd = "[object GeneratorFunction]", Zd = "[object Map]", Qd = "[object Number]", An = "[object Object]", ef = "[object RegExp]", tf = "[object Set]", sf = "[object String]", nf = "[object Symbol]", of = "[object WeakMap]", lf = "[object ArrayBuffer]", rf = "[object DataView]", af = "[object Float32Array]", cf = "[object Float64Array]", uf = "[object Int8Array]", df = "[object Int16Array]", ff = "[object Int32Array]", hf = "[object Uint8Array]", mf = "[object Uint8ClampedArray]", gf = "[object Uint16Array]", vf = "[object Uint32Array]", L = {};
L[Cn] = L[Xd] = L[lf] = L[rf] = L[Gd] = L[Yd] = L[af] = L[cf] = L[uf] = L[df] = L[ff] = L[Zd] = L[Qd] = L[An] = L[ef] = L[tf] = L[sf] = L[nf] = L[hf] = L[mf] = L[gf] = L[vf] = !0;
L[Kd] = L[Tn] = L[of] = !1;
function rt(e, s, t, n, l, o) {
  var r;
  if (r !== void 0)
    return r;
  if (!Ct(e))
    return e;
  var i = os(e);
  if (i)
    r = hd(e);
  else {
    var c = ye(e), a = c == Tn || c == Jd;
    if (bn(e))
      return Yu(e);
    if (c == An || c == Cn || a && !l)
      r = a ? {} : Ld(e);
    else {
      if (!L[c])
        return l ? e : {};
      r = zd(e, c);
    }
  }
  o || (o = new He());
  var d = o.get(e);
  if (d)
    return d;
  o.set(e, r), qd(e) ? e.forEach(function(b) {
    r.add(rt(b, s, t, b, e, o));
  }) : Nd(e) && e.forEach(function(b, A) {
    r.set(A, rt(b, s, t, A, e, o));
  });
  var v = od, y = i ? void 0 : v(e);
  return Gc(y || e, function(b, A) {
    y && (A = b, b = e[A]), Zc(r, A, rt(b, s, t, A, e, o));
  }), r;
}
var yf = 1, pf = 4;
function bf(e) {
  return rt(e, yf | pf);
}
const jt = (e) => e.every((s) => typeof s == "object"), Ps = !0, On = () => window.innerWidth;
let zs = On();
const _f = {
  name: "UluTableSticky",
  components: {
    UluTableStickyTable: qa
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
      validator: jt,
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
      validator: jt
      // required
    },
    /**
     * Array of rows for footer (tfoot)
     */
    footerRows: {
      type: Array,
      validator: jt
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
      const e = this.currentColumns, s = [], t = (l) => {
        l.columns ? l.columns.forEach(t) : s.push(l);
      };
      e.forEach(t);
      let n = [];
      return s.forEach((l, o) => {
        const r = n.slice();
        l.getRowHeaders = (i) => r.map((c) => c(i)).join(" "), l.rowHeader && (l.getRowHeaderId = (i) => `${this.idPrefix}-rh-${i}-${o}`, n.push(l.getRowHeaderId));
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
      const e = this.idCreator("c"), s = bf(this.columns), t = (n, l) => {
        n.id = e(), n.parent = l, n.width = "auto", n.boxWidth = null, n.sortApplied = !1, n.sortAscending = !1, n.sortFocused = !1;
        let o = [];
        l && (l.headers && l.headers.length ? o = [...l.headers] : o.push(l.id)), o.push(n.id), n.headers = o, n.columns ? n.columns.forEach((r) => t(r, n)) : !n.key && !n.value && !n.slot && console.warn("UluTableSticky: Missing 'key', 'value' or 'slot' in column configuration for", n);
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
      const s = this.idCreator("hr"), t = e.reduce(this.maxColumnChildren, 1), n = "auto", l = new Array(t).fill(null).map(() => ({
        height: n,
        boxHeight: null,
        columns: [],
        id: s()
      }));
      function o(r, i) {
        const c = i.columns;
        c && c.forEach((a) => o(1 + r, a)), i.rowspan = c ? 1 : t - r, i.colspan = c ? c.reduce((a, d) => a + d.colspan, 0) : 1, l[r].columns.push(i);
      }
      return e.forEach((r) => o(0, r)), l;
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
      const e = this.$refs.display, s = e.scrollWidth, t = e.scrollLeft, n = this.scrollControlAmount, l = t + n;
      e.scroll({
        left: l > s ? e.scrollWidth : l,
        behavior: "smooth"
      });
    },
    /**
     * Cleanup function for when component is not in use
     */
    setTableSizes() {
      const e = (n, l) => Math.ceil(n.getBoundingClientRect()[l]);
      this.tableWidth = `${e(this.$refs.table.$el, "width")}px`;
      const s = (n) => document.getElementById(n.id), t = (n) => {
        const l = s(n);
        l && (n.boxHeight = e(l, "height"), n.height = `${n.boxHeight}px`);
      };
      this.headerRows.forEach((n) => {
        t(n), n.columns.forEach((l) => {
          const o = s(l);
          o && (l.boxWidth = e(o, "width"), l.width = `${l.boxWidth}px`);
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
function xf(e, s, t, n, l, o) {
  const r = K("UluTableStickyTable");
  return u(), f("div", {
    class: m(["table-sticky", {
      "table-sticky--overflown-x": l.overflownX,
      "table-sticky--can-scroll-right": l.canScrollRight,
      "table-sticky--can-scroll-left": l.canScrollLeft
    }])
  }, [
    h("div", wf, [
      h("div", Sf, [
        O(r, {
          ref: "header",
          class: "table-sticky__table table-sticky__table--header",
          classes: t.classes,
          caption: t.caption,
          resolveClasses: o.resolveClasses,
          getColumnTitle: t.getColumnTitle,
          idPrefix: t.idPrefix,
          headerRows: l.headerRows,
          style: X({
            opacity: l.sizesCalculated ? "1" : "0",
            pointerEvents: l.sizesCalculated ? "auto" : "none",
            width: l.tableWidth
          }),
          onColumnSorted: o.applySort
        }, Ie({ _: 2 }, [
          B(e.$slots, (i, c) => ({
            name: c,
            fn: k((a) => [
              g(e.$slots, c, ae(he(a)))
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
        resolveClasses: o.resolveClasses,
        getColumnTitle: t.getColumnTitle,
        idPrefix: t.idPrefix,
        headerRows: o.headerRowsFirst,
        style: X({
          opacity: o.headerOpacityX,
          pointerEvents: o.headerVisibleX ? "auto" : "none"
        }),
        onColumnSorted: o.applySort
      }, Ie({ _: 2 }, [
        B(e.$slots, (i, c) => ({
          name: c,
          fn: k((a) => [
            g(e.$slots, c, ae(he(a)))
          ])
        }))
      ]), 1032, ["classes", "caption", "resolveClasses", "getColumnTitle", "idPrefix", "headerRows", "style", "onColumnSorted"])) : p("", !0)
    ]),
    h("div", $f, [
      Pe(h("div", {
        class: m(["table-sticky__controls", o.resolveClasses(t.classes.controls)]),
        ref: "controls"
      }, [
        e.$slots.controls ? g(e.$slots, "controls", {
          key: 0,
          scrollLeft: o.scrollLeft,
          scrollRight: o.scrollRight,
          canScrollLeft: l.canScrollLeft,
          canScrollRight: l.canScrollRight
        }) : t.controlsComponent ? (u(), S(P(t.controlsComponent), {
          key: 1,
          scrollLeft: o.scrollLeft,
          scrollRight: o.scrollRight,
          canScrollLeft: l.canScrollLeft,
          canScrollRight: l.canScrollRight
        }, null, 8, ["scrollLeft", "scrollRight", "canScrollLeft", "canScrollRight"])) : (u(), f("div", Cf, [
          h("button", {
            class: m(["table-sticky__control table-sticky__control--left", o.resolveClasses(t.classes.controlButton)]),
            "aria-label": "Scroll Left",
            onClick: s[0] || (s[0] = (...i) => o.scrollLeft && o.scrollLeft(...i)),
            disabled: !l.canScrollLeft
          }, [
            g(e.$slots, "controlLeft", {}, () => [
              s[2] || (s[2] = T(" ← ", -1))
            ])
          ], 10, Tf),
          h("button", {
            class: m(["table-sticky__control table-sticky__control--right", o.resolveClasses(t.classes.controlButton)]),
            "aria-label": "Scroll Right",
            onClick: s[1] || (s[1] = (...i) => o.scrollRight && o.scrollRight(...i)),
            disabled: !l.canScrollRight
          }, [
            g(e.$slots, "controlRight", {}, () => [
              s[3] || (s[3] = T(" → ", -1))
            ])
          ], 10, Af)
        ]))
      ], 2), [
        [It, o.controlsShown]
      ])
    ]),
    h("div", Of, [
      O(r, {
        ref: "table",
        class: "table-sticky__table table-sticky__table--actual",
        classes: t.classes,
        resolveClasses: o.resolveClasses,
        isActual: "",
        headerRows: l.headerRows,
        rows: l.currentRows,
        footerRows: l.currentFooterRows,
        rowColumns: o.rowColumns,
        caption: t.caption,
        idPrefix: t.idPrefix,
        getRowValue: t.getRowValue,
        getColumnTitle: t.getColumnTitle,
        onVnodeMounted: o.tableReady,
        onActualHeaderRemoved: o.headerRemoved,
        onActualHeaderAdded: o.headerAdded,
        onColumnSorted: o.applySort
      }, Ie({ _: 2 }, [
        B(e.$slots, (i, c) => ({
          name: c,
          fn: k((a) => [
            g(e.$slots, c, ae(he(a)))
          ])
        }))
      ]), 1032, ["classes", "resolveClasses", "headerRows", "rows", "footerRows", "rowColumns", "caption", "idPrefix", "getRowValue", "getColumnTitle", "onVnodeMounted", "onActualHeaderRemoved", "onActualHeaderAdded", "onColumnSorted"])
    ], 512),
    t.firstColumnSticky ? (u(), S(r, {
      key: 0,
      ref: "firstColumn",
      class: "table-sticky__table table-sticky__table--first-column",
      classes: t.classes,
      resolveClasses: o.resolveClasses,
      caption: t.caption,
      headerRows: o.headerRowsFirst,
      columnWidth: o.firstColumnSize.width,
      rows: l.currentRows,
      footerRows: l.currentFooterRows,
      rowColumns: o.rowColumnsFirst,
      idPrefix: t.idPrefix,
      getRowValue: t.getRowValue,
      getColumnTitle: t.getColumnTitle,
      style: X({
        opacity: o.headerOpacityX,
        pointerEvents: o.headerVisibleX ? "auto" : "none"
      }),
      onColumnSorted: o.applySort
    }, Ie({ _: 2 }, [
      B(e.$slots, (i, c) => ({
        name: c,
        fn: k((a) => [
          g(e.$slots, c, ae(he(a)))
        ])
      }))
    ]), 1032, ["classes", "resolveClasses", "caption", "headerRows", "columnWidth", "rows", "footerRows", "rowColumns", "idPrefix", "getRowValue", "getColumnTitle", "style", "onColumnSorted"])) : p("", !0)
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
  Ft as UluCollapsible,
  Bh as UluConditionalText,
  qr as UluConditionalWrapper,
  Ch as UluDataGrid,
  hh as UluDefinitionList,
  Qf as UluDropdown,
  Eh as UluEmpty,
  Rh as UluEmptyView,
  mh as UluExternalLink,
  Hh as UluFacetsActiveFilters,
  Dh as UluFacetsFilterAccordions,
  Nh as UluFacetsFilterLists,
  Wh as UluFacetsFilterPopovers,
  qh as UluFacetsFilterSelects,
  Xh as UluFacetsHeaderLayout,
  dt as UluFacetsList,
  Gh as UluFacetsResults,
  Yh as UluFacetsSearch,
  Kh as UluFacetsSidebarLayout,
  Jh as UluFacetsSort,
  ph as UluFileDisplay,
  bh as UluFormFile,
  _h as UluFormMessage,
  wh as UluFormSelect,
  Sh as UluFormText,
  D as UluIcon,
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
  Zh as UluScrollAnchors,
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
  yh as UluSpokeSpinner,
  nh as UluTab,
  oh as UluTabGroup,
  lh as UluTabList,
  rh as UluTabPanel,
  ih as UluTabPanels,
  im as UluTableSticky,
  Ra as UluTableStickyRows,
  qa as UluTableStickyTable,
  on as UluTag,
  Th as UluTitleRail,
  Zf as breakpointsPlugin,
  qf as corePlugin,
  Kf as modalsPlugin,
  Yf as popoversPlugin,
  Jf as toastPlugin,
  qo as useBreakpointManager,
  th as useDocumentTitle,
  Vh as useFacets,
  Oo as useIcon,
  me as useModifiers,
  eh as usePagination,
  Ae as useRequiredInject,
  Xf as useTooltip,
  Gf as useTooltipFollow,
  Gs as useUluFloating,
  fl as useWindowResize,
  am as utils
};
