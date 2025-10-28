import { reactive as ht, inject as mt, ref as B, computed as S, watch as re, toRef as Un, createElementBlock as f, openBlock as c, normalizeStyle as X, unref as $, normalizeClass as m, createCommentVNode as p, createBlock as w, resolveDynamicComponent as F, normalizeProps as ce, mergeProps as ee, Fragment as O, createTextVNode as C, toDisplayString as _, Teleport as gt, createVNode as x, resolveDirective as Ls, withDirectives as Fe, createElementVNode as h, renderSlot as g, withKeys as Vs, nextTick as Hs, markRaw as Ae, watchEffect as vt, defineAsyncComponent as Bn, toRefs as Rn, toValue as lt, resolveComponent as K, withModifiers as En, useSlots as Ns, renderList as R, TransitionGroup as Ws, withCtx as k, onMounted as yt, onBeforeUnmount as Xt, isRef as jn, hasInjectionContext as In, getCurrentInstance as Mn, onDeactivated as Fn, onActivated as Pn, onUnmounted as Ds, guardReactiveProps as ge, h as zn, watchPostEffect as Ln, vModelText as Vn, vShow as Mt, createSlots as Ie } from "vue";
import { useFloating as Hn, autoUpdate as Nn, inline as Wn, offset as Dn, flip as qn, shift as Xn, arrow as Gn } from "@floating-ui/vue";
import { normalizeClasses as cs } from "@ulu/utils/templating.js";
import { preventScroll as Yn, wasClickOutside as Kn, isBrowser as Jn } from "@ulu/utils/browser/dom.js";
import { Resizer as Qn } from "@ulu/frontend/js/ui/resizer.js";
import { debounce as Gt } from "@ulu/utils/performance.js";
import { useRoute as qs, useRouter as Zn, RouterLink as Ye } from "vue-router";
import { Tab as eo, TabGroup as to, TabList as so, TabPanel as no, TabPanels as oo } from "@headlessui/vue";
import { setPositionClasses as lo } from "@ulu/frontend/js/utils/dom.js";
import { randomInt as it } from "@ulu/utils/random.js";
import { PortableText as ro } from "@portabletext/vue";
import ao from "gsap";
import io from "fuse.js";
import { runAfterFramePaint as Xs } from "@ulu/utils/browser/performance.js";
import { urlize as co } from "@ulu/utils/string.js";
import { arrayCreate as uo } from "@ulu/utils/array.js";
const us = {
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
function th(e, s = {}) {
  const t = ht({ ...us }), { iconsByType: n, ...l } = s || {};
  l && Object.assign(t, l);
  const o = {
    // Methods to interact with settings
    getSettings() {
      return t;
    },
    getDefaultSettings() {
      return { ...us };
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
    updateSetting(r, a) {
      if (typeof r != "string")
        throw new Error("Expected key to be string");
      t[r] = a;
    },
    getIcon(r) {
      const a = t.iconsByType;
      if (!a[r])
        throw new Error(`Icon type "${r}" not found!`);
      return a[r];
    },
    setIcon(r, a) {
      t.iconsByType[r] = a;
    }
  };
  if (n)
    for (const [r, a] of Object.entries(n))
      o.setIcon(r, a);
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
}, ds = {};
function Ce(e) {
  const s = mt(e, ds);
  if (s === ds) {
    const t = fo[e] || "", n = t ? ` from the '${t}' plugin` : "", l = t ? "Please install missing plugin." : "";
    throw new Error(`Required inject: '${e}'${n} was not provided. ${l}`);
  }
  return s;
}
function Gs(e, s, t) {
  const n = B(null), l = B([]), o = S(() => t.value?.placement), {
    floatingStyles: r,
    placement: a,
    middlewareData: u,
    update: i,
    isPositioned: d
  } = Hn(e, s, {
    placement: o,
    whileElementsMounted: Nn,
    middleware: l
  });
  re(
    [t, n],
    ([b, A]) => {
      const T = [];
      b && (b.inline && T.push(Wn()), b.offset && T.push(Dn(b.offset)), T.push(qn()), T.push(Xn()), b.arrow && A && T.push(Gn({ element: A })), l.value = T);
    },
    { immediate: !0, deep: !0 }
  );
  const v = S(() => {
    const b = u.value?.arrow;
    return b ? {
      position: "absolute",
      left: b?.x != null ? `${b.x}px` : "",
      top: b?.y != null ? `${b.y}px` : ""
    } : null;
  });
  re(t, (b) => {
    b && b.onReady && b.onReady({ update: i, isPositioned: d });
  });
  const y = S(() => t.value?.strategy === "fixed");
  return {
    floatingStyles: r,
    placement: a,
    middlewareData: u,
    update: i,
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
    const s = e, t = B(null), n = S(() => s.config), {
      floatingStyles: l,
      placement: o,
      arrowStyles: r,
      contentArrow: a,
      isFixedStrategy: u
    } = Gs(Un(s, "trigger"), t, n);
    return (i, d) => (c(), f("span", {
      class: m(["popover popover--tooltip is-active", [
        {
          "popover--fixed": $(u)
        },
        n.value.class
      ]]),
      ref_key: "content",
      ref: t,
      id: $(Ys),
      "data-placement": $(o),
      style: X($(l))
    }, [
      n.value.isHtml ? (c(), f("span", {
        key: 0,
        class: "popover__inner",
        innerHTML: n.value.content
      }, null, 8, mo)) : (c(), f("span", go, [
        n.value.component ? (c(), w(F(n.value.component), ce(ee({ key: 0 }, n.value.componentProps)), null, 16)) : (c(), f(O, { key: 1 }, [
          C(_(n.value.content), 1)
        ], 64))
      ])),
      n.value.arrow ? (c(), f("span", {
        key: 2,
        class: "popover__arrow",
        ref_key: "contentArrow",
        ref: a,
        style: X($(r))
      }, null, 4)) : p("", !0)
    ], 14, ho));
  }
}, yo = {
  __name: "UluTooltipDisplay",
  setup(e) {
    const s = Ce(_t);
    return (t, n) => $(s)?.state.visible ? (c(), w(gt, {
      key: 0,
      to: $(s).state.config.teleportTo || "body"
    }, [
      x(vo, {
        trigger: $(s).state.trigger,
        config: $(s).state.config
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
function po(e) {
  if (e) {
    if (e instanceof HTMLElement)
      return e;
    if (typeof e == "object" && "$el" in e)
      return e.$el;
  }
}
let bo = 0;
function Q(e = "ulu-id") {
  const s = `${e}-${++bo}`;
  return typeof document < "u" && document.getElementById(s) ? Q(e) : s;
}
const _o = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  newId: Q,
  refToElement: po
}, Symbol.toStringTag, { value: "Module" })), wo = ["id", "disabled", "aria-expanded", "aria-controls", "aria-label"], So = ["aria-labelledby", "id", "data-placement"], ko = { class: "popover__inner" }, $o = {
  key: 0,
  class: "popover__footer"
}, pt = {
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
    const t = s, n = e, l = Q(), o = Q(), r = Ce(bt), a = r ? r.popover : Me.popover, u = S(() => ({ ...a, ...n.config })), i = B(n.startOpen || !1), d = B(null), v = B(null), {
      floatingStyles: y,
      placement: b,
      update: A,
      arrowStyles: T,
      contentArrow: E,
      isFixedStrategy: G
    } = Gs(d, v, u), se = () => {
      P(!i.value);
    }, P = (ae) => {
      i.value = ae;
      const Se = {
        trigger: $(d),
        content: $(v),
        isOpen: $(i)
      }, Ee = { isOpen: Se.isOpen };
      Hs(() => {
        i.value ? (A(), window.setTimeout(() => {
          we(), n.directFocus(Se), t("toggle", Ee);
        }, 0)) : (ne(), n.directFocus(Se), t("toggle", Ee));
      });
    };
    let Z;
    const we = () => {
      n.clickOutsideCloses && (Z && ne(), Z = (ae) => {
        v.value && !v.value.contains(ae.target) && P(!1);
      }, document.addEventListener("click", Z));
    }, ne = () => {
      Z && (document.removeEventListener("click", Z), Z = null);
    }, de = () => P(!1);
    return (ae, Se) => {
      const Ee = Ls("ulu-tooltip");
      return c(), f(O, null, [
        Fe((c(), f("button", {
          type: "button",
          ref_key: "trigger",
          ref: d,
          onClick: se,
          id: $(o),
          disabled: e.disabled,
          class: m([
            { [e.activeClass]: i.value },
            e.classes.trigger
          ]),
          "aria-expanded": i.value ? "true" : "false",
          "aria-controls": $(l),
          "aria-label": e.triggerAlt
        }, [
          g(ae.$slots, "trigger", {
            isOpen: i.value,
            close: de
          }, () => [
            C(_(e.triggerText), 1)
          ])
        ], 10, wo)), [
          [Ee, e.tooltip ? e.tooltip : null]
        ]),
        h("span", {
          class: m(["popover", [
            e.size ? `popover--${e.size}` : "",
            {
              "popover--no-padding": e.noPadding,
              "popover--fixed": $(G),
              "is-active": i.value
            },
            e.classes.content
          ]]),
          ref_key: "content",
          ref: v,
          "aria-labelledby": $(o),
          id: $(l),
          style: X($(y)),
          "data-placement": $(b),
          onKeydown: Se[0] || (Se[0] = Vs((Ot) => P(!1), ["esc"])),
          tabindex: "-1"
        }, [
          h("span", ko, [
            g(ae.$slots, "default", {
              isOpen: i.value,
              toggle: se,
              close: de
            })
          ]),
          ae.$slots.footer ? (c(), f("span", $o, [
            g(ae.$slots, "footer", { close: de })
          ])) : p("", !0),
          u.value.arrow ? (c(), f("span", {
            key: 1,
            class: "popover__arrow",
            ref_key: "contentArrow",
            ref: E,
            style: X($(T)),
            "data-ulu-popover-arrow": ""
          }, null, 4)) : p("", !0)
        ], 46, So)
      ], 64);
    };
  }
};
function sh() {
  const e = Ce(_t), s = Ce(bt), t = { ...s.popover, ...s.tooltip };
  return {
    showTooltip: (l, o) => {
      const r = Ft(o, t);
      r && e.show(l, r);
    },
    hideTooltip: e.hide,
    tooltipState: e.state
  };
}
function nh(e) {
  const s = Ce(_t), t = Ce(bt);
  e.content || console.warn("Missing content for 'useTooltipFollow' tooltip", e);
  let n;
  const l = B(0), o = B(0), r = S(() => ({
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
  })), a = t ? t.popover : Me.popover, u = t ? t.tooltip : Me.tooltip, d = {
    ...{ ...a, ...u },
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
const bt = "uluPopoverOptions", _t = "uluTooltipState", Ys = "ulu-global-tooltip", Ft = (e, s) => {
  if (e === !1 || e === null) return null;
  let t = e;
  return (typeof t != "object" || Array.isArray(t)) && (t = { content: t }), t.component && (t.component = Ae(t.component)), { ...s, ...t };
};
function oh(e, s = {}) {
  const t = {
    plugin: { ...Me.plugin, ...s.plugin || {} },
    popover: { ...Me.popover, ...s.popover || {} },
    tooltip: { ...Me.tooltip, ...s.tooltip || {} }
  };
  e.provide(bt, t);
  const n = ht({
    visible: !1,
    trigger: null,
    config: {}
  }), l = (d, v) => {
    if (d && !v.teleportTo) {
      const y = d.closest("dialog");
      y && (v.teleportTo = y);
    }
    n.trigger && n.trigger !== d && n.trigger?.removeAttribute && n.trigger.removeAttribute("aria-describedby"), d?.setAttribute && d.setAttribute("aria-describedby", Ys), n.trigger = d, n.config = v, n.visible = !0;
  }, o = () => {
    n.trigger?.removeAttribute && n.trigger.removeAttribute("aria-describedby"), n.visible = !1;
  };
  e.provide(_t, {
    state: n,
    show: l,
    hide: o
  }), e.component("UluTooltipDisplay", yo), e.component("UluPopover", pt);
  const r = /* @__PURE__ */ new WeakMap(), a = t.popover, u = t.tooltip, i = { ...a, ...u };
  e.directive(t.plugin.directiveName, {
    mounted(d, v) {
      const y = Ft(v.value, i);
      if (!y) return;
      let b = null;
      const A = () => {
        b || (b = setTimeout(() => {
          l(d, y);
        }, y.delay));
      }, T = () => {
        clearTimeout(b), b = null, o();
      }, { showEvents: E, hideEvents: G } = y;
      E.forEach((se) => d.addEventListener(se, A)), G.forEach((se) => d.addEventListener(se, T)), r.set(d, { show: A, hide: T, showEvents: E, hideEvents: G });
    },
    updated(d, v) {
      const y = r.get(d);
      y && (y.showEvents.forEach((P) => d.removeEventListener(P, y.show)), y.hideEvents.forEach((P) => d.removeEventListener(P, y.hide)));
      const b = Ft(v.value, i);
      if (!b) {
        n.trigger === d && o();
        return;
      }
      let A = null;
      const T = () => {
        A || (A = setTimeout(() => {
          l(d, b);
        }, b.delay));
      }, E = () => {
        clearTimeout(A), A = null, o();
      }, { showEvents: G, hideEvents: se } = b;
      G.forEach((P) => d.addEventListener(P, T)), se.forEach((P) => d.addEventListener(P, E)), r.set(d, { show: T, hide: E, showEvents: G, hideEvents: se }), n.visible && n.trigger === d && l(d, b);
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
  return o.currentModal ? (c(), w(F(o.currentModal.component), ee({ key: 0 }, o.currentProps, {
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
const W = {
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
    const s = mt("uluCore"), t = B(null), { getIconProps: n, getClassesFromDefinition: l } = Oo();
    let o;
    const r = e, a = S(() => s.getSetting("fontAwesomeStatic")), u = S(() => s.getSetting("iconComponent")), i = S(() => s.getSetting("iconPropResolver")), d = S(() => {
      const { icon: T } = r;
      if (typeof T == "string" && T.startsWith("type:"))
        try {
          const E = T.substring(5);
          return s.getIcon(E);
        } catch (E) {
          return console.warn(E), null;
        }
      return T;
    }), v = S(() => !u.value || !d.value ? null : i.value(d.value)), y = S(() => n(d.value)), b = S(() => l(d.value)), A = S(() => ({
      "flow-inline": r.spaced
    }));
    return vt(async () => {
      if (!a.value && d.value) {
        if (t.value === null)
          if (o)
            t.value = Ae(o.FontAwesomeIcon);
          else {
            const T = Bn(async () => {
              const E = await import("@fortawesome/vue-fontawesome");
              return o = E, E.FontAwesomeIcon;
            });
            t.value = Ae(T);
          }
      } else
        t.value = null;
    }), (T, E) => u.value ? (c(), w(F(u.value), ee({ key: 0 }, v.value, { class: A.value }), null, 16, ["class"])) : !a.value && t.value && d.value ? (c(), w(F(t.value), ee({ key: 1 }, y.value, { class: A.value }), null, 16, ["class"])) : a.value && d.value ? (c(), f("span", {
      key: 2,
      class: m([b.value, A.value]),
      "aria-hidden": "true"
    }, null, 2)) : p("", !0);
  }
};
function ue({ props: e, baseClass: s, internal: t = {} }) {
  const { modifiers: n } = Rn(e);
  return { resolvedModifiers: S(() => {
    const o = lt(s), r = cs(lt(n)), a = cs(lt(t));
    if (!o)
      return console.warn("useModifiers: Missing 'baseClass' argument, modifiers will not be applied."), "";
    const u = /* @__PURE__ */ new Set([...a, ...r]);
    return Array.from(u).map((i) => `${o}--${i}`);
  }) };
}
const xo = {
  name: "UluModal",
  components: {
    UluIcon: W
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
      titleId: Q("ulu-modal-title"),
      bodyOverflowValue: null,
      bodyPaddingRightValue: null,
      isResizing: !1
    };
  },
  setup(e) {
    const s = Ns(), t = S(() => e.title || s.title), n = S(() => {
      const { allowResize: a, position: u } = e;
      if (!a || !u) return;
      const i = ["left", "right", "center"];
      return i.includes(u) ? !0 : (console.warn(`Passed invalid position for resize (${u}), use ${i.join(", ")}`), !1);
    }), l = S(() => e.position === "center" ? "type:resizeBoth" : "type:resizeHorizontal"), o = S(() => ({
      [e.position]: e.position,
      resize: e.allowResize,
      "no-resize": !e.allowResize,
      "no-header": !t.value,
      "body-fills": e.bodyFills,
      "no-backdrop": e.noBackdrop,
      "no-min-height": e.noMinHeight,
      "non-modal": e.nonModal,
      "resizer-active": n.value
    })), { resolvedModifiers: r } = ue({
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
        this.resizerInstance = new Qn(t, n, l), this.handleResizerStart = () => {
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
    this.preventScroll && this.setupPreventScroll(), this.setupResizer();
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
function jo(e, s, t, n, l, o) {
  const r = K("UluIcon");
  return c(), w(gt, {
    to: t.teleport === !1 ? null : t.teleport,
    disabled: t.teleport === !1
  }, [
    h("dialog", {
      class: m(["modal", [n.resolvedModifiers, t.classes.container]]),
      "aria-labelledby": o.resolvedLabelledby,
      "aria-describedby": t.describedby,
      ref: "container",
      style: X({ width: l.containerWidth }),
      onCancel: s[1] || (s[1] = En((...a) => o.close && o.close(...a), ["prevent"])),
      onClose: s[2] || (s[2] = (...a) => o.handleDialogCloseEvent && o.handleDialogCloseEvent(...a)),
      onClick: s[3] || (s[3] = (...a) => o.handleClick && o.handleClick(...a)),
      onToggle: s[4] || (s[4] = (...a) => o.handleToggle && o.handleToggle(...a))
    }, [
      n.hasHeader ? (c(), f("header", {
        key: 0,
        class: m(["modal__header", t.classes.header])
      }, [
        h("h2", {
          class: m(["modal__title", t.classes.title]),
          id: l.titleId
        }, [
          g(e.$slots, "title", { close: o.close }, () => [
            t.titleIcon ? (c(), w(r, {
              key: 0,
              class: "modal__title-icon",
              icon: t.titleIcon
            }, null, 8, ["icon"])) : p("", !0),
            h("span", Ro, _(t.title), 1)
          ])
        ], 10, Bo),
        h("button", {
          class: "modal__close",
          "aria-label": "Close modal",
          onClick: s[0] || (s[0] = (...a) => o.close && o.close(...a)),
          autofocus: ""
        }, [
          g(e.$slots, "closeIcon", {}, () => [
            x(r, {
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
      e.$slots.footer ? (c(), f("div", {
        key: 1,
        class: m(["site-modal__footer", t.classes.footer])
      }, [
        g(e.$slots, "footer", { close: o.close })
      ], 2)) : p("", !0),
      n.resizerEnabled ? (c(), f("button", Eo, [
        g(e.$slots, "resizerIcon", {}, () => [
          x(r, {
            class: "modal__resizer-icon",
            icon: t.resizerIcon || n.resizerIconType
          }, null, 8, ["icon"])
        ])
      ], 512)) : p("", !0)
    ], 46, Uo)
  ], 8, ["to", "disabled"]);
}
const Ks = /* @__PURE__ */ j(xo, [["render", jo]]), De = [], Io = B({
  /**
   * Holds active component options (including component, and options)
   */
  active: null,
  /**
   * Populated with any props passed to open method, bound to modal component
   */
  activeProps: null
}), qe = Io.value, fs = {
  data: qe,
  modals: De
}, Mo = (e) => ({
  open(s, t = null) {
    const n = this.get(s);
    qe.active = Ae(n), qe.activeProps = Object.assign({}, n.props, t);
  },
  /**
   * Close the active modal
   * @param {String|Node} focusTo The element or selector for an element to programmatically focus after modal close
   * @see https://www.deque.com/blog/accessible-routing-in-javascript-frameworks/
   */
  close() {
    qe.active = null, qe.activeProps = null;
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
}), Fo = {
  modals: [],
  modalOptions: {}
};
function lh(e, s) {
  const t = Object.assign({}, Fo, s), l = Mo((o) => Object.assign({}, t.modalOptions, o));
  e.component("UluModalsDisplay", Ao), e.component("UluModal", Ks), t.modals.forEach((o) => {
    l.add(o);
  }), fs.options = t, e.config.globalProperties.$uluModals = l, e.provide("uluModals", l), e.config.globalProperties.$uluModalsState = fs;
}
const Po = {
  name: "UluToast",
  components: {
    UluIcon: W
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
}, zo = ["onClick"];
function Lo(e, s, t, n, l, o) {
  const r = K("UluIcon");
  return c(), f("div", {
    class: m(["toast", [
      {
        "toast--persistent": !t.toast.duration
      },
      t.toast?.class
    ]])
  }, [
    t.toast.icon || e.$slots.icon ? (c(), f("div", {
      key: 0,
      class: m(["toast__icon", t.classes.icon])
    }, [
      g(e.$slots, "icon", { toast: t.toast }, () => [
        t.toast.icon ? (c(), w(r, {
          key: 0,
          icon: t.toast.icon
        }, null, 8, ["icon"])) : p("", !0)
      ])
    ], 2)) : p("", !0),
    h("div", {
      class: m(["toast__content", t.classes.content])
    }, [
      g(e.$slots, "content", { toast: t.toast }, () => [
        t.toast.title ? (c(), f("div", {
          key: 0,
          class: m(["toast__header", t.classes.header])
        }, [
          h("strong", {
            class: m(["toast__title", t.classes.title])
          }, _(t.toast.title), 3),
          t.toast.date ? (c(), f("span", {
            key: 0,
            class: m(["toast__date", t.classes.date])
          }, _(t.toast.date), 3)) : p("", !0)
        ], 2)) : p("", !0),
        t.toast.description ? (c(), f("div", {
          key: 1,
          class: m(["toast__body", t.classes.body])
        }, _(t.toast.description), 3)) : p("", !0)
      ])
    ], 2),
    t.toast.actions?.length ? (c(), f("div", {
      key: 1,
      class: m(["toast__actions", t.classes.actions])
    }, [
      (c(!0), f(O, null, R(t.toast.actions, (a, u) => (c(), f("button", {
        key: u,
        class: m(["toast__action", t.classes.action]),
        onClick: (i) => o.handleAction(i, a)
      }, _(a.label), 11, zo))), 128))
    ], 2)) : p("", !0),
    h("button", {
      class: m(["toast__close", t.classes.closeButton]),
      onClick: s[0] || (s[0] = (...a) => t.toast.close && t.toast.close(...a))
    }, [
      x(r, { icon: "type:close" })
    ], 2)
  ], 2);
}
const Js = /* @__PURE__ */ j(Po, [["render", Lo]]), hs = {
  toastOptions: {
    /**
     * Component used to render the toast in the display
     */
    component: Ae(Js),
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
}, { assign: xt } = Object;
let Vo = 0;
const ke = ht({
  toasts: [],
  /**
   * Saveable 
   */
  pluginOptions: hs.pluginOptions,
  toastOptions: hs.toastOptions,
  setToastOptions(e) {
    return this.toastOptions = xt({}, this.toastOptions, e), this.pluginOptions;
  },
  setPluginOptions(e) {
    return this.pluginOptions = xt({}, this.pluginOptions, e), this.pluginOptions;
  },
  createToast(e) {
    const s = `toast-${++Vo}`;
    return xt({}, this.toastOptions, e, {
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
  return c(), w(gt, {
    to: l.pluginOptions.teleportTo
  }, [
    x(Ws, {
      class: m(["toast-container", o.classes]),
      name: "toast-animation",
      tag: "div"
    }, {
      default: k(() => [
        (c(!0), f(O, null, R(l.toasts, (r) => (c(), w(F(r.component), {
          key: r.uid,
          toast: r
        }, null, 8, ["toast"]))), 128))
      ]),
      _: 1
    }, 8, ["class"])
  ], 8, ["to"]);
}
const Wo = /* @__PURE__ */ j(Ho, [["render", No]]);
function rh(e, s = {}) {
  ke.setPluginOptions(s?.plugin), ke.setToastOptions(s?.toast), e.component("UluToast", Js), e.component("UluToastDisplay", Wo), e.config.globalProperties.$uluToast = Pt, e.provide("uluToast", Pt);
}
const Do = {
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
  const s = Object.assign({}, Do, e), t = B(null), n = B(s.initialValue), l = B(null);
  return (async () => {
    if (!Jn()) return;
    await new Promise((d) => {
      document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", () => d()) : d();
    });
    const r = await import("@ulu/frontend/js/ui/breakpoints.js"), { BreakpointManager: a } = r, u = Ae(new a(s.plugin));
    t.value = Ae(u);
    const i = () => {
      n.value = u.active, l.value = u.resizeDirection;
    };
    i(), s.onReady && s.onReady(u), u.onChange(i);
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
function ah(e, s) {
  const t = B(!1), n = Object.assign({}, Xo, s), { breakpointMobile: l } = n, { onReady: o } = n.managerOptions, r = {
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
  }, a = Object.assign({}, n.managerOptions, r), {
    breakpointManager: u,
    breakpointActive: i,
    breakpointDirection: d
  } = qo(a);
  e.provide("uluBreakpointActive", S(() => i.value)), e.provide("uluBreakpointDirection", S(() => d.value)), e.provide("uluBreakpointManager", S(() => u.value)), e.provide("uluIsMobile", S(() => t.value));
}
const zt = /* @__PURE__ */ new Set(), J = /* @__PURE__ */ new WeakMap(), Oe = /* @__PURE__ */ new WeakMap(), oe = /* @__PURE__ */ new WeakMap(), Ke = /* @__PURE__ */ new WeakMap(), Ut = /* @__PURE__ */ new WeakMap(), Xe = /* @__PURE__ */ new WeakMap(), Te = /* @__PURE__ */ new WeakMap(), $e = /* @__PURE__ */ new WeakMap(), je = /* @__PURE__ */ new WeakSet();
let te, Yt = 0, Kt = 0;
const be = "__aa_tgt", Je = "__aa_del", ct = "__aa_new", Qs = (e) => {
  const s = Jo(e);
  s && s.forEach((t) => Qo(t));
}, Go = (e) => {
  e.forEach((s) => {
    s.target === te && Yo(), J.has(s.target) && Ue(s.target);
  });
};
function Zs(e) {
  const s = e.getBoundingClientRect(), t = te?.clientWidth || 0, n = te?.clientHeight || 0;
  return s.bottom < 0 || s.top > n || s.right < 0 || s.left > t;
}
function Jt(e) {
  const s = Ke.get(e);
  s?.disconnect();
  let t = J.get(e), n = 0;
  const l = 5;
  t || (t = Pe(e), J.set(e, t));
  const { offsetWidth: o, offsetHeight: r } = te, u = [
    t.top - l,
    o - (t.left + l + t.width),
    r - (t.top + l + t.height),
    t.left - l
  ].map((d) => `${-1 * Math.floor(d)}px`).join(" "), i = new IntersectionObserver(() => {
    ++n > 1 && Ue(e);
  }, {
    root: te,
    threshold: 1,
    rootMargin: u
  });
  i.observe(e), Ke.set(e, i);
}
function Ue(e, s = !0) {
  clearTimeout($e.get(e));
  const t = wt(e), n = s ? Qe(t) ? 500 : t.duration : 0;
  $e.set(e, setTimeout(async () => {
    const l = oe.get(e);
    try {
      await l?.finished, J.set(e, Pe(e)), Jt(e);
    } catch {
    }
  }, n));
}
function Yo() {
  clearTimeout($e.get(te)), $e.set(te, setTimeout(() => {
    zt.forEach((e) => rt(e, (s) => en(() => Ue(s))));
  }, 100));
}
function Ko(e) {
  setTimeout(() => {
    Xe.set(e, setInterval(() => en(Ue.bind(null, e)), 2e3));
  }, Math.round(2e3 * Math.random()));
}
function en(e) {
  typeof requestIdleCallback == "function" ? requestIdleCallback(() => e()) : requestAnimationFrame(() => e());
}
let ye;
const tn = typeof window < "u" && "ResizeObserver" in window;
tn && (te = document.documentElement, new MutationObserver(Qs), ye = new ResizeObserver(Go), window.addEventListener("scroll", () => {
  Kt = window.scrollY, Yt = window.scrollX;
}), ye.observe(te));
function Jo(e) {
  return e.reduce((n, l) => [
    ...n,
    ...Array.from(l.addedNodes),
    ...Array.from(l.removedNodes)
  ], []).every((n) => n.nodeName === "#comment") ? !1 : e.reduce((n, l) => {
    if (n === !1)
      return !1;
    if (l.target instanceof Element) {
      if (Bt(l.target), !n.has(l.target)) {
        n.add(l.target);
        for (let o = 0; o < l.target.children.length; o++) {
          const r = l.target.children.item(o);
          if (r) {
            if (Je in r)
              return !1;
            Bt(l.target, r), n.add(r);
          }
        }
      }
      if (l.removedNodes.length)
        for (let o = 0; o < l.removedNodes.length; o++) {
          const r = l.removedNodes[o];
          if (Je in r)
            return !1;
          r instanceof Element && (n.add(r), Bt(l.target, r), Oe.set(r, [
            l.previousSibling,
            l.nextSibling
          ]));
        }
    }
    return n;
  }, /* @__PURE__ */ new Set());
}
function Bt(e, s) {
  !s && !(be in e) ? Object.defineProperty(e, be, { value: e }) : s && !(be in s) && Object.defineProperty(s, be, { value: e });
}
function Qo(e) {
  var s, t;
  const n = e.isConnected, l = J.has(e);
  n && Oe.has(e) && Oe.delete(e), ((s = oe.get(e)) === null || s === void 0 ? void 0 : s.playState) !== "finished" && ((t = oe.get(e)) === null || t === void 0 || t.cancel()), ct in e ? ms(e) : l && n ? el(e) : l && !n ? tl(e) : ms(e);
}
function me(e) {
  return Number(e.replace(/[^0-9.\-]/g, ""));
}
function Zo(e) {
  let s = e.parentElement;
  for (; s; ) {
    if (s.scrollLeft || s.scrollTop)
      return { x: s.scrollLeft, y: s.scrollTop };
    s = s.parentElement;
  }
  return { x: 0, y: 0 };
}
function Pe(e) {
  const s = e.getBoundingClientRect(), { x: t, y: n } = Zo(e);
  return {
    top: s.top + n,
    left: s.left + t,
    width: s.width,
    height: s.height
  };
}
function sn(e, s, t) {
  let n = s.width, l = s.height, o = t.width, r = t.height;
  const a = getComputedStyle(e);
  if (a.getPropertyValue("box-sizing") === "content-box") {
    const i = me(a.paddingTop) + me(a.paddingBottom) + me(a.borderTopWidth) + me(a.borderBottomWidth), d = me(a.paddingLeft) + me(a.paddingRight) + me(a.borderRightWidth) + me(a.borderLeftWidth);
    n -= d, o -= d, l -= i, r -= i;
  }
  return [n, o, l, r].map(Math.round);
}
function wt(e) {
  return be in e && Te.has(e[be]) ? Te.get(e[be]) : { duration: 250, easing: "ease-in-out" };
}
function nn(e) {
  if (be in e)
    return e[be];
}
function Qt(e) {
  const s = nn(e);
  return s ? je.has(s) : !1;
}
function rt(e, ...s) {
  s.forEach((t) => t(e, Te.has(e)));
  for (let t = 0; t < e.children.length; t++) {
    const n = e.children.item(t);
    n && s.forEach((l) => l(n, Te.has(n)));
  }
}
function Zt(e) {
  return Array.isArray(e) ? e : [e];
}
function Qe(e) {
  return typeof e == "function";
}
function el(e) {
  const s = J.get(e), t = Pe(e);
  if (!Qt(e))
    return J.set(e, t);
  if (Zs(e)) {
    J.set(e, t), Jt(e);
    return;
  }
  let n;
  if (!s)
    return;
  const l = wt(e);
  if (typeof l != "function") {
    let o = s.left - t.left, r = s.top - t.top;
    const a = s.left + s.width - (t.left + t.width);
    s.top + s.height - (t.top + t.height) == 0 && (r = 0), a == 0 && (o = 0);
    const [i, d, v, y] = sn(e, s, t), b = {
      transform: `translate(${o}px, ${r}px)`
    }, A = {
      transform: "translate(0, 0)"
    };
    i !== d && (b.width = `${i}px`, A.width = `${d}px`), v !== y && (b.height = `${v}px`, A.height = `${y}px`), n = e.animate([b, A], {
      duration: l.duration,
      easing: l.easing
    });
  } else {
    const [o] = Zt(l(e, "remain", s, t));
    n = new Animation(o), n.play();
  }
  oe.set(e, n), J.set(e, t), n.addEventListener("finish", Ue.bind(null, e, !1), {
    once: !0
  });
}
function ms(e) {
  ct in e && delete e[ct];
  const s = Pe(e);
  J.set(e, s);
  const t = wt(e);
  if (!Qt(e))
    return;
  if (Zs(e)) {
    Jt(e);
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
    const [l] = Zt(t(e, "add", s));
    n = new Animation(l), n.play();
  }
  oe.set(e, n), n.addEventListener("finish", Ue.bind(null, e, !1), {
    once: !0
  });
}
function gs(e, s) {
  var t;
  e.remove(), J.delete(e), Oe.delete(e), oe.delete(e), (t = Ke.get(e)) === null || t === void 0 || t.disconnect(), setTimeout(() => {
    if (Je in e && delete e[Je], Object.defineProperty(e, ct, { value: !0, configurable: !0 }), s && e instanceof HTMLElement)
      for (const n in s)
        e.style[n] = "";
  }, 0);
}
function tl(e) {
  var s;
  if (!Oe.has(e) || !J.has(e))
    return;
  const [t, n] = Oe.get(e);
  Object.defineProperty(e, Je, { value: !0, configurable: !0 });
  const l = window.scrollX, o = window.scrollY;
  if (n && n.parentNode && n.parentNode instanceof Element ? n.parentNode.insertBefore(e, n) : t && t.parentNode ? t.parentNode.appendChild(e) : (s = nn(e)) === null || s === void 0 || s.appendChild(e), !Qt(e))
    return gs(e);
  const [r, a, u, i] = nl(e), d = wt(e), v = J.get(e);
  (l !== Yt || o !== Kt) && sl(e, l, o, d);
  let y, b = {
    position: "absolute",
    top: `${r}px`,
    left: `${a}px`,
    width: `${u}px`,
    height: `${i}px`,
    margin: "0",
    pointerEvents: "none",
    transformOrigin: "center",
    zIndex: "100"
  };
  if (!Qe(d))
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
    const [A, T] = Zt(d(e, "remove", v));
    T?.styleReset !== !1 && (b = T?.styleReset || b, Object.assign(e.style, b)), y = new Animation(A), y.play();
  }
  oe.set(e, y), y.addEventListener("finish", () => gs(e, b), {
    once: !0
  });
}
function sl(e, s, t, n) {
  const l = Yt - s, o = Kt - t, r = document.documentElement.style.scrollBehavior;
  if (getComputedStyle(te).scrollBehavior === "smooth" && (document.documentElement.style.scrollBehavior = "auto"), window.scrollTo(window.scrollX + l, window.scrollY + o), !e.parentElement)
    return;
  const u = e.parentElement;
  let i = u.clientHeight, d = u.clientWidth;
  const v = performance.now();
  function y() {
    requestAnimationFrame(() => {
      if (!Qe(n)) {
        const b = i - u.clientHeight, A = d - u.clientWidth;
        v + n.duration > performance.now() ? (window.scrollTo({
          left: window.scrollX - A,
          top: window.scrollY - b
        }), i = u.clientHeight, d = u.clientWidth, y()) : document.documentElement.style.scrollBehavior = r;
      }
    });
  }
  y();
}
function nl(e) {
  var s;
  const t = J.get(e), [n, , l] = sn(e, t, Pe(e));
  let o = e.parentElement;
  for (; o && (getComputedStyle(o).position === "static" || o instanceof HTMLBodyElement); )
    o = o.parentElement;
  o || (o = document.body);
  const r = getComputedStyle(o), a = !oe.has(e) || ((s = oe.get(e)) === null || s === void 0 ? void 0 : s.playState) === "finished" ? Pe(o) : J.get(o), u = Math.round(t.top - a.top) - me(r.borderTopWidth), i = Math.round(t.left - a.left) - me(r.borderLeftWidth);
  return [u, i, n, l];
}
function ol(e, s = {}) {
  if (tn && ye && !(window.matchMedia("(prefers-reduced-motion: reduce)").matches && !Qe(s) && !s.disrespectUserMotionPreference)) {
    je.add(e), getComputedStyle(e).position === "static" && Object.assign(e.style, { position: "relative" }), rt(e, Ue, Ko, (r) => ye?.observe(r)), Qe(s) ? Te.set(e, s) : Te.set(e, {
      duration: 250,
      easing: "ease-in-out",
      ...s
    });
    const o = new MutationObserver(Qs);
    o.observe(e, { childList: !0 }), Ut.set(e, o), zt.add(e);
  }
  return Object.freeze({
    parent: e,
    enable: () => {
      je.add(e);
    },
    disable: () => {
      je.delete(e), rt(e, (n) => {
        const l = oe.get(n);
        try {
          l?.cancel();
        } catch {
        }
        oe.delete(n);
        const o = $e.get(n);
        o && clearTimeout(o), $e.delete(n);
        const r = Xe.get(n);
        r && clearInterval(r), Xe.delete(n);
      });
    },
    isEnabled: () => je.has(e),
    destroy: () => {
      je.delete(e), zt.delete(e), Te.delete(e);
      const n = Ut.get(e);
      n?.disconnect(), Ut.delete(e), rt(e, (l) => {
        ye?.unobserve(l);
        const o = oe.get(l);
        try {
          o?.cancel();
        } catch {
        }
        oe.delete(l);
        const r = Ke.get(l);
        r?.disconnect(), Ke.delete(l);
        const a = Xe.get(l);
        a && clearInterval(a), Xe.delete(l);
        const u = $e.get(l);
        u && clearTimeout(u), $e.delete(l), J.delete(l), Oe.delete(l);
      });
    }
  });
}
function ll(e) {
  const s = B();
  let t;
  function n(l) {
    t && (l ? t.enable() : t.disable());
  }
  return yt(() => {
    vt((l) => {
      let o;
      s.value instanceof HTMLElement ? o = s.value : s.value && "$el" in s.value && s.value.$el instanceof HTMLElement && (o = s.value.$el), o && (t = ol(o, e || {}), l(() => {
        var r;
        (r = t?.destroy) === null || r === void 0 || r.call(t), t = void 0;
      }));
    });
  }), Xt(() => {
    var l;
    (l = t?.destroy) === null || l === void 0 || l.call(t), t = void 0;
  }), [s, n];
}
const rl = ["id", "aria-controls", "aria-expanded"], al = ["id", "aria-hidden", "aria-labelledby"], Lt = {
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
    const t = e, n = s, l = S(() => typeof t.animate == "object" ? t.animate : {}), [o, r] = ll(l);
    yt(() => {
      r(!!t.animate);
    }), re(() => t.animate, (A) => {
      r(!!A);
    });
    const a = S(() => t.modelValue !== void 0), u = B(t.startOpen), i = S({
      get() {
        return a.value ? t.modelValue : u.value;
      },
      set(A) {
        a.value ? n("update:modelValue", A) : u.value = A;
      }
    }), d = B(Q("ulu-collapsible-trigger")), v = B(Q("ulu-collapsible-content"));
    function y() {
      i.value = !i.value;
    }
    function b() {
      t.closeOnEscape && i.value && (i.value = !1);
    }
    return (A, T) => (c(), f("div", {
      ref_key: "container",
      ref: o,
      onKeydown: Vs(b, ["esc"]),
      class: m([e.classes.container, i.value ? e.classes.containerOpen : e.classes.containerClosed])
    }, [
      h("button", {
        class: m(e.classes.trigger),
        id: d.value,
        "aria-controls": v.value,
        "aria-expanded": i.value,
        onClick: y
      }, [
        g(A.$slots, "trigger", { isOpen: i.value }, () => [
          C(_(e.triggerText), 1)
        ])
      ], 10, rl),
      i.value ? (c(), f("div", {
        key: 0,
        class: m(e.classes.content),
        tabindex: "-1",
        id: v.value,
        "aria-hidden": !i.value,
        "aria-labelledby": d.value
      }, [
        g(A.$slots, "default", {
          isOpen: i.value,
          toggle: y
        })
      ], 10, al)) : p("", !0)
    ], 34));
  }
}, Vt = {
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
    const t = e, { resolvedModifiers: n } = ue({ props: t, baseClass: "accordion" }), l = S(() => {
      const o = { ...t.classes };
      return o.container = [o.container, n.value], o;
    });
    return (o, r) => (c(), w(Lt, {
      "model-value": e.modelValue,
      "start-open": e.startOpen,
      "trigger-text": e.triggerText,
      classes: l.value,
      animate: e.animate,
      "onUpdate:modelValue": r[0] || (r[0] = (a) => o.$emit("update:modelValue", a))
    }, {
      trigger: k(({ isOpen: a }) => [
        g(o.$slots, "trigger", { isOpen: a }, () => [
          (c(), w(F(e.triggerTextElement), null, {
            default: k(() => [
              C(_(e.triggerText), 1)
            ]),
            _: 1
          }))
        ]),
        g(o.$slots, "icon", { isOpen: a }, () => [
          h("span", {
            class: m(["accordion__icon", e.classes.icon])
          }, [
            x(W, {
              icon: a ? "type:collapse" : "type:expand",
              style: { display: "inline" }
            }, null, 8, ["icon"])
          ], 2)
        ])
      ]),
      default: k(({ isOpen: a, toggle: u }) => [
        g(o.$slots, "default", {
          isOpen: a,
          toggle: u
        })
      ]),
      _: 3
    }, 8, ["model-value", "start-open", "trigger-text", "classes", "animate"]));
  }
}, il = { class: "accordion-group" }, ih = {
  __name: "UluAccordionGroup",
  props: {
    /**
     * Array of items to render as accordions.
     * Each item can have: title, content, isOpen, classes
     */
    items: {
      type: Array,
      default: () => []
    }
  },
  setup(e) {
    const s = e, t = B([]);
    re(() => s.items, (l) => {
      t.value = l.map((o) => ({
        ...o,
        isOpen: o.isOpen || !1
      }));
    }, { immediate: !0, deep: !0 });
    function n(l, o) {
      o ? t.value.forEach((r, a) => {
        r.isOpen = a === l;
      }) : t.value[l].isOpen = !1;
    }
    return (l, o) => (c(), f("div", il, [
      (c(!0), f(O, null, R(t.value, (r, a) => (c(), w(Vt, {
        key: a,
        "model-value": r.isOpen,
        "onUpdate:modelValue": (u) => n(a, u),
        "trigger-text": r.title,
        classes: r.classes
      }, {
        default: k(() => [
          g(l.$slots, "item", {
            item: r,
            index: a
          }, () => [
            C(_(r.content), 1)
          ])
        ]),
        _: 2
      }, 1032, ["model-value", "onUpdate:modelValue", "trigger-text", "classes"]))), 128))
    ]));
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
    const s = e, { resolvedModifiers: t } = ue({ props: s, baseClass: "tag" });
    return (n, l) => (c(), f("span", {
      class: m(["tag", [
        {
          "tag--counter": e.counter,
          [`tag--${e.size}`]: e.size,
          [`tag--${e.type}`]: e.type
        },
        $(t)
      ]])
    }, [
      e.icon ? (c(), w(W, {
        key: 0,
        icon: e.icon,
        spaced: ""
      }, null, 8, ["icon"])) : p("", !0),
      g(n.$slots, "default", {}, () => [
        h("span", null, _(e.text), 1)
      ])
    ], 2));
  }
}, cl = {
  name: "UluMenu",
  components: {
    UluIcon: W,
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
function ul(e, s, t, n, l, o) {
  const r = K("UluIcon"), a = K("UluTag"), u = K("UluMenu", !0), i = Ls("ulu-tooltip");
  return t.items?.length ? (c(), f("ul", {
    key: 0,
    class: m(t.classes.list)
  }, [
    (c(!0), f(O, null, R(t.items, (d, v) => (c(), f("li", {
      key: v,
      class: m([
        t.classes.item,
        d?.classes?.item,
        d.separatorBefore ? t.classes.itemSeparatorBefore : "",
        d.separatorAfter ? t.classes.itemSeparatorAfter : ""
      ])
    }, [
      Fe((c(), w(F(d.to || d.path ? "router-link" : d.click ? "button" : "a"), ee({ ref_for: !0 }, {
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
            d.icon ? (c(), w(r, {
              key: 0,
              icon: d.icon,
              class: m([t.classes.linkIcon, d?.classes?.linkIcon])
            }, null, 8, ["icon", "class"])) : p("", !0),
            h("span", {
              class: m([t.classes.linkText, d?.classes?.linkText])
            }, _(d.title), 3),
            d.tag ? (c(), w(a, ee({
              key: 1,
              ref_for: !0
            }, d.tag), null, 16)) : p("", !0)
          ])
        ]),
        _: 2
      }, 1040, ["onClick", "class", "aria-label", "id"])), [
        [i, t.iconOnly ? d.title : d.tooltip || null]
      ]),
      !t.noChildren && d?.children?.length ? (c(), w(u, {
        key: 0,
        iconOnly: t.iconOnly,
        classes: t.classes,
        items: d.children
      }, null, 8, ["iconOnly", "classes", "items"])) : p("", !0)
    ], 2))), 128))
  ], 2)) : p("", !0);
}
const ln = /* @__PURE__ */ j(cl, [["render", ul]]), dl = {
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
    const s = e, t = S(() => ({
      hanging: s.hanging,
      compact: s.compact
    })), { resolvedModifiers: n } = ue({
      props: s,
      internal: t,
      baseClass: "menu-stack"
    });
    return (l, o) => (c(), w(F(e.containerElement), {
      class: m(["menu-stack", $(n)])
    }, {
      default: k(() => [
        x(ln, {
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
}, ch = {
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
    return (s, t) => (c(), w(pt, { classes: e.popoverClasses }, {
      trigger: k(({ isOpen: n }) => [
        g(s.$slots, "trigger", { isOpen: n }, () => [
          h("span", null, _(e.triggerText), 1),
          x(W, {
            class: "button__icon",
            icon: "type:dropdownExpand",
            style: X({ transform: n ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.2s" })
          }, null, 8, ["style"])
        ])
      ]),
      default: k(() => [
        x(dl, { items: e.items }, null, 8, ["items"])
      ]),
      _: 3
    }, 8, ["classes"]));
  }
}, es = B(!1), ut = {
  start: [],
  end: []
};
function ts() {
  window.removeEventListener("resize", ts), es.value = !0, ut.start.forEach((e) => e());
}
function fl() {
  es.value = !1, ut.end.forEach((e) => e()), window.addEventListener("resize", ts);
}
window.addEventListener("resize", ts), window.addEventListener("resize", Gt(fl, 300));
function vs(e, s) {
  return e.push(s), () => {
    const t = e.findIndex((n) => n === s);
    t > -1 && e.splice(t);
  };
}
function hl() {
  return {
    resizing: es,
    onResizeStart(e) {
      return vs(ut.start, e);
    },
    onResizeEnd(e) {
      return vs(ut.end, e);
    }
  };
}
function uh(e, s) {
  const t = qs(), n = Zn(), l = S(() => {
    const i = parseInt(t.query.page || "1", 10);
    return isNaN(i) || i < 1 ? 1 : i;
  }), o = S(() => !e.value || e.value.length === 0 ? 1 : Math.ceil(e.value.length / s));
  re(o, (i) => {
    l.value > i && n.push({ query: { ...t.query, page: i } });
  });
  const r = S(() => {
    const i = (l.value - 1) * s, d = i + s;
    return e.value.slice(i, d);
  }), a = S(() => {
    if (o.value <= 1)
      return null;
    const i = {
      pages: {}
    }, d = l.value, v = o.value, y = 5, b = (E) => ({ query: { ...t.query, page: E } });
    d > 1 && (i.first = { href: b(1) }, i.previous = { href: b(d - 1) }), d < v && (i.next = { href: b(d + 1) }, i.last = { href: b(v) });
    let A, T;
    if (v <= y)
      A = 1, T = v;
    else {
      const E = Math.floor(y / 2), G = Math.ceil(y / 2) - 1;
      d <= E ? (A = 1, T = y) : d + G >= v ? (A = v - y + 1, T = v) : (A = d - E, T = d + G);
    }
    for (let E = A; E <= T; E++)
      i.pages[E] = { href: b(E) };
    return i;
  }), u = S(() => {
    const i = { previous: !1, next: !1 };
    if (!a.value || !a.value.pages) return i;
    const d = Object.keys(a.value.pages).map(Number);
    if (d.length === 0) return i;
    const v = Math.min(...d), y = Math.max(...d);
    return v > 1 && (i.previous = !0), y < o.value && (i.next = !0), i;
  });
  return {
    currentPage: l,
    totalPages: o,
    paginatedItems: r,
    pagerItems: a,
    pagerEllipses: u
  };
}
function Ht(e, s, t) {
  typeof e === "function" && (!t || t !== "titleTemplate" && !(t[0] === "o" && t[1] === "n")) && (e = e());
  let l;
  if (s && (l = s(t, e)), Array.isArray(l))
    return l.map((o) => Ht(o, s));
  if (l?.constructor === Object) {
    const o = {};
    for (const r of Object.keys(l))
      o[r] = Ht(l[r], s, r);
    return o;
  }
  return l;
}
const ml = (e, s) => jn(s) ? lt(s) : s, gl = "usehead";
function vl() {
  if (In()) {
    const e = mt(gl);
    if (!e)
      throw new Error("useHead() was called without provide context, ensure you call it through the setup() function.");
    return e;
  }
  throw new Error("useHead() was called without provide context, ensure you call it through the setup() function.");
}
function yl(e, s = {}) {
  const t = s.head || vl();
  return t.ssr ? t.push(e || {}, s) : pl(t, e, s);
}
function pl(e, s, t = {}) {
  const n = B(!1);
  let l;
  return vt(() => {
    const r = n.value ? {} : Ht(s, ml);
    l ? l.patch(r) : l = e.push(r, t);
  }), Mn() && (Xt(() => {
    l.dispose();
  }), Fn(() => {
    n.value = !0;
  }), Pn(() => {
    n.value = !1;
  })), l;
}
function St(e, s) {
  let n = (e?.meta || {}).title;
  return typeof n == "function" && (n = n(s || e)), n;
}
function bl(e, s) {
  const n = Object.assign({}, {
    qualifier(r, a) {
      return a ? ns(r) : rn(r);
    },
    sort: ls,
    item: {},
    includeChildren: !1
  }, s), l = (r, a) => a ? `${a}/${r.path}` : r.path, o = (r, a = null) => r.filter((u) => n.qualifier(u, a)).map((u) => {
    const i = u.children ? ss(u.children) : u, d = u.children ? u.children.filter((y) => y.path !== "") : !1, v = kt(i, l(u, a), n.item);
    return n.includeChildren && d.length && (v.children = o(d, v.path)), v;
  }).sort(n.sort);
  return o(e);
}
function _l(e) {
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
function wl(e, s, t) {
  const l = Object.assign({}, {
    includeIndex: !1,
    item: {},
    sort: ls
  }, t), o = e.find((i) => i.path !== "/" && s.includes(i.path)), r = (i, d, v) => {
    if (i.children) {
      const y = i.children.find((b) => b.path.includes(s));
      if (y)
        return r(y, i, v + y.path);
    }
    return { route: d, path: v };
  }, { route: a, path: u } = r(o, o, o.path);
  return a.children ? a.children.filter(cn(l.includeIndex)).map((i) => kt(i, `${u}/${i.path}`, l.item)).sort(l.sort) : (console.warn("Unable to build menu for:", s), []);
}
function ss(e) {
  return e.find((s) => s.path === "");
}
function kt(e, s = e.path, t) {
  const l = Object.assign({}, {
    indexMeta: !0,
    modify: null
  }, t);
  let o = Object.assign({}, e.meta);
  l.indexMeta && e.children && (o = Object.assign({}, o, ss(e.children)?.meta));
  const r = { ...e, meta: o }, a = {
    path: s,
    title: St(r, e) || "Missing Title",
    weight: o?.weight || 0,
    meta: o
  };
  return l.modify && l.modify(a, e), a;
}
function ns(e) {
  return !e.path.includes("/:");
}
function rn(e) {
  const s = e.path.match(/\//g) || [];
  return ns(e) && s.length === 1;
}
function Sl(e, s) {
  const { target: t } = s, n = t.closest("a");
  if (n) {
    let l = n.getAttribute("href");
    l.startsWith("/") && (e.push(l), s.preventDefault());
  }
}
function an(e, s = os(e)) {
  return s?.children;
}
function os(e, s) {
  const t = e.matched.length, n = t - 2;
  return s ? t > 1 ? e.matched[0] : null : n < 0 ? null : e.matched[n];
}
function cn(e) {
  return (s) => e || s.path !== "";
}
function ls(e, s) {
  return e?.weight - s?.weight;
}
function kl(e, s) {
  const n = Object.assign({}, {
    parent: null,
    includeIndex: !1,
    item: {},
    sort: ls
  }, s), l = n.parent || os(e);
  return (an(e, l) || []).filter(cn(n.includeIndex)).map((r) => kt(r, `${l.path}/${r.path}`, n.item)).sort(n.sort);
}
function $l(e) {
  const { matched: s, path: t } = e;
  let n;
  return s.reduce((o, r, a) => {
    if (r.meta?.breadcrumb === !1 || r.path === n)
      return o;
    const u = a === s.length - 1, i = St(r, e) || "Missing Title";
    return o.push({
      title: i,
      to: { path: u ? t : r.path },
      current: u
    }), n = r.path, o;
  }, []);
}
const Cl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  $createBreadcrumb: $l,
  $createSectionMenu: kl,
  $getParentRoute: os,
  $getRouteChildren: an,
  createBaseMenu: bl,
  createMenuItem: kt,
  createSectionMenu: wl,
  flattenMenu: _l,
  getChildIndexRoute: ss,
  getRouteTitle: St,
  isStaticBaseRoute: rn,
  isStaticRoute: ns,
  nativeLinkRouter: Sl
}, Symbol.toStringTag, { value: "Module" })), Rt = ht({});
function dh(e = {}) {
  const {
    title: s,
    titleTemplate: t = "%s",
    useRoute: n = qs,
    useHead: l = yl
  } = e, o = n(), r = o.path;
  if (s !== void 0) {
    vt(() => {
      Rt[r] = $(s);
    }), Ds(() => {
      delete Rt[r];
    });
    return;
  }
  const a = S(() => {
    const u = Rt[o.path], i = St(o, o), d = u || i;
    return d ? t.replace("%s", d) : "App";
  });
  l({
    title: a
  });
}
const Tl = { class: "layout-flex-baseline" }, Al = { class: "type-word-break" }, fh = {
  __name: "UluOverflowPopover",
  props: {
    /**
     * Default icon for overflow popover trigger
     */
    triggerIcon: String
  },
  setup(e) {
    const { resizing: s, onResizeEnd: t } = hl(), n = B(null), l = B(!1), o = () => {
      Hs(() => {
        const a = n.value;
        l.value = a.offsetWidth < a.scrollWidth;
      });
    }, r = t(o);
    return yt(o), Ds(r), (a, u) => (c(), f("div", Tl, [
      h("div", {
        class: "type-truncate",
        ref_key: "text",
        ref: n
      }, [
        g(a.$slots, "default")
      ], 512),
      l.value && !$(s) ? (c(), w(pt, {
        key: 0,
        triggerAlt: "Show Full Text",
        size: "large"
      }, {
        trigger: k(() => [
          x(W, {
            icon: e.triggerIcon || "type:ellipsis"
          }, null, 8, ["icon"])
        ]),
        default: k(() => [
          h("div", Al, [
            g(a.$slots, "default")
          ])
        ]),
        _: 3
      })) : p("", !0)
    ]));
  }
}, hh = {
  __name: "UluTab",
  setup(e) {
    return (s, t) => (c(), w($(eo), null, {
      default: k((n) => [
        g(s.$slots, "default", ce(ge(n)))
      ]),
      _: 3
    }));
  }
}, mh = /* @__PURE__ */ Object.assign({
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
    return (s, t) => (c(), w($(to), {
      defaultIndex: e.defaultIndex,
      vertical: e.vertical
    }, {
      default: k((n) => [
        h("div", {
          class: m(["tabs", {
            "tabs--vertical": e.vertical
          }])
        }, [
          g(s.$slots, "default", ce(ge(n)))
        ], 2)
      ]),
      _: 3
    }, 8, ["defaultIndex", "vertical"]));
  }
}), gh = {
  __name: "UluTabList",
  setup(e) {
    return (s, t) => (c(), w($(so), { class: "tabs__tablist" }, {
      default: k(() => [
        g(s.$slots, "default")
      ]),
      _: 3
    }));
  }
}, vh = {
  __name: "UluTabPanel",
  setup(e) {
    return (s, t) => (c(), w($(no), null, {
      default: k((n) => [
        g(s.$slots, "default", ce(ge(n)))
      ]),
      _: 3
    }));
  }
}, yh = {
  __name: "UluTabPanels",
  setup(e) {
    return (s, t) => (c(), w($(oo), null, {
      default: k((n) => [
        g(s.$slots, "default", ce(ge(n)))
      ]),
      _: 3
    }));
  }
}, Ol = {
  name: "UluButton",
  components: {
    UluIcon: W
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
    const { resolvedModifiers: s } = ue({ props: e, baseClass: "button" });
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
      return this.to ? Ye : this.href ? "a" : "button";
    },
    attrs() {
      const { to: e, href: s, download: t, target: n } = this, l = e ? { to: e } : s ? { href: s } : {};
      return s && (n && (l.target = n), t && (l.download = typeof t == "string" ? t : !0)), l;
    }
  }
}, xl = { key: 1 };
function Ul(e, s, t, n, l, o) {
  const r = K("UluIcon");
  return c(), w(F(o.element), ee({
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
      t.icon && (t.iconBefore || t.iconOnly) ? (c(), w(r, {
        key: 0,
        icon: t.icon,
        class: "button__icon"
      }, null, 8, ["icon"])) : p("", !0),
      (e.$slots.default || t.text) && !t.iconOnly ? (c(), f("span", xl, [
        g(e.$slots, "default", {}, () => [
          C(_(t.text), 1)
        ])
      ])) : p("", !0),
      t.icon && !t.iconBefore && !t.iconOnly ? (c(), w(r, {
        key: 2,
        icon: t.icon,
        class: "button__icon"
      }, null, 8, ["icon"])) : p("", !0),
      g(e.$slots, "after")
    ]),
    _: 3
  }, 16, ["class", "aria-label"]);
}
const Bl = /* @__PURE__ */ j(Ol, [["render", Ul]]), Rl = {
  name: "UluAlert",
  components: {
    UluButton: Bl,
    UluIcon: W
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
    const { resolvedModifiers: s } = ue({
      props: e,
      baseClass: "callout",
      internal: S(() => ({
        [e.type]: e.type,
        compact: e.compact
      }))
    });
    return { resolvedModifiers: s };
  }
}, El = { class: "layout-flex" }, jl = { class: "type-small" }, Il = {
  key: 0,
  class: "margin-left-auto align-self-center"
};
function Ml(e, s, t, n, l, o) {
  const r = K("UluIcon");
  return c(), f("div", {
    class: m(["callout", n.resolvedModifiers])
  }, [
    h("div", El, [
      x(r, {
        class: m(["type-large margin-right-small", `color-${t.type}`]),
        icon: t.icon || `type:${t.type}`
      }, null, 8, ["class", "icon"]),
      h("div", jl, [
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
      e.$slots.action ? (c(), f("div", Il, [
        g(e.$slots, "action")
      ])) : p("", !0)
    ])
  ], 2);
}
const ph = /* @__PURE__ */ j(Rl, [["render", Ml]]), Fl = ["aria-hidden"], Pl = {
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
    const s = e, t = S(() => !!(s.to || s.click)), n = S(() => {
      const { click: l, to: o, href: r } = s;
      return l ? "button" : o ? Ye : r ? "a" : "span";
    });
    return (l, o) => (c(), w(F(n.value), {
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
          e.text ? (c(), f("span", {
            key: 0,
            "aria-hidden": e.alt ? "true" : null
          }, _(e.text), 9, Fl)) : g(l.$slots, "default", { key: 1 }),
          e.alt ? (c(), f("span", Pl, _(e.alt), 1)) : p("", !0)
        ], 2)
      ]),
      _: 3
    }, 8, ["class", "to", "href", "onClick"]));
  }
}, Ll = { class: "badge-stack" }, bh = {
  __name: "UluBadgeStack",
  props: {
    /**
     * Array of props for each badge
     */
    items: Array
  },
  setup(e) {
    return (s, t) => (c(), f("ul", Ll, [
      (c(!0), f(O, null, R(e.items, (n, l) => (c(), f("li", {
        class: "badge-stack__item",
        key: l
      }, [
        x(zl, ee({ ref_for: !0 }, n), null, 16)
      ]))), 128))
    ]));
  }
}, Vl = {
  name: "UluButtonVerbose",
  components: {
    UluIcon: W
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
    const { resolvedModifiers: s } = ue({ props: e, baseClass: "button-verbose" });
    return { resolvedModifiers: s };
  },
  computed: {
    element() {
      return this.to ? Ye : this.href ? "a" : "button";
    },
    attrs() {
      const { to: e, href: s, download: t, target: n } = this, l = e ? { to: e } : s ? { href: s } : {};
      return s && (n && (l.target = n), t && (l.download = typeof t == "string" ? t : !0)), l;
    }
  }
}, Hl = {
  key: 1,
  class: "button-verbose__body"
};
function Nl(e, s, t, n, l, o) {
  const r = K("UluIcon");
  return c(), w(F(o.element), ee({
    class: ["button-verbose", [
      {
        "button-verbose--inline": t.inline,
        "button-verbose--full-width": t.fullWidth
      },
      n.resolvedModifiers
    ]]
  }, o.attrs), {
    default: k(() => [
      e.$slots.title || t.title ? (c(), w(F(t.titleElement), {
        key: 0,
        class: "button-verbose__title"
      }, {
        default: k(() => [
          g(e.$slots, "title", {}, () => [
            C(_(t.title), 1)
          ])
        ]),
        _: 3
      })) : p("", !0),
      e.$slots.default || t.body ? (c(), f("span", Hl, [
        g(e.$slots, "default", {}, () => [
          C(_(t.body), 1)
        ])
      ])) : p("", !0),
      t.icon ? (c(), w(r, {
        key: 2,
        icon: t.icon,
        class: "button-verbose__icon",
        "aria-hidden": "true"
      }, null, 8, ["icon"])) : p("", !0)
    ]),
    _: 3
  }, 16, ["class"]);
}
const _h = /* @__PURE__ */ j(Vl, [["render", Nl]]), Wl = {
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
    const { resolvedModifiers: s } = ue({ props: e, baseClass: "callout" });
    return { resolvedModifiers: s };
  }
};
function Dl(e, s, t, n, l, o) {
  return c(), f("div", {
    class: m(["callout", [n.resolvedModifiers, { "full-height": t.fullHeight }]])
  }, [
    g(e.$slots, "default")
  ], 2);
}
const wh = /* @__PURE__ */ j(Wl, [["render", Dl]]), ql = { class: "card__body" }, Xl = { class: "card__main" }, Gl = ["href", "target"], Yl = {
  key: 0,
  class: "card__aside"
}, Kl = ["src", "alt"], Jl = {
  key: 1,
  class: "card__footer"
}, Sh = {
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
    const t = e, n = s, l = Ns();
    t.proxyClick && (t.to || t.href) && console.warn("UluCard: 'proxyClick' is ignored when 'to' or 'href' are present."), (t.titleTo || t.titleHref) && (t.to || t.href) && console.warn("UluCard: 'titleTo'/'titleHref' should not be used with 'to'/'href'.");
    const o = B(null), r = B(null), { resolvedModifiers: a } = ue({ props: t, baseClass: "card" }), u = B(null), i = B(!1), d = S(() => t.proxyClick && !t.to && !t.href), v = S(() => d.value && (t.titleTo || t.titleHref)), y = S(() => d.value && !v.value), b = S(() => d.value || null), A = S(() => ({
      selectorPrevent: "input, select, textarea, button, a, [tabindex='-1']",
      mousedownDurationPrevent: 250,
      ...t.proxyClickOptions
    })), T = S(() => d.value ? "pointer" : null), E = S(() => t.to ? Ye : t.href ? "a" : t.cardElement);
    function G({ target: P, timeStamp: Z }) {
      if (!b.value) return;
      const { selectorPrevent: we } = A.value;
      i.value = !1, P.closest(we) || (i.value = !0, u.value = Z);
    }
    function se({ timeStamp: P }) {
      if (!b.value || !i.value) return;
      const { mousedownDurationPrevent: Z } = A.value;
      if (P - u.value < Z) {
        if (v.value)
          r.value?.click();
        else if (y.value) {
          const we = o.value?.querySelector("[data-ulu-card-proxy-target]");
          we ? we.click() : n("proxy-click");
        }
      }
      i.value = !1;
    }
    return (P, Z) => (c(), w(F(E.value), {
      ref_key: "cardRoot",
      ref: o,
      class: m(["card", [
        {
          "card--horizontal": e.horizontal || e.horizontalCenter,
          "card--horizontal-center": e.horizontalCenter,
          "card--overlay": e.overlay
        },
        $(a)
      ]]),
      onMousedown: G,
      onMouseup: se,
      style: X({ cursor: T.value }),
      target: e.target,
      to: e.to,
      href: e.href,
      "data-ulu-proxy-click-init": b.value
    }, {
      default: k(() => [
        h("div", ql, [
          h("div", Xl, [
            e.title || $(l).title ? (c(), w(F(e.titleElement), {
              key: 0,
              class: m(["card__title", e.classes.title])
            }, {
              default: k(() => [
                e.titleTo ? (c(), w($(Ye), {
                  key: 0,
                  class: "card__title-link",
                  to: e.titleTo,
                  ref_key: "link",
                  ref: r
                }, {
                  default: k(() => [
                    g(P.$slots, "title", {}, () => [
                      C(_(e.title), 1)
                    ])
                  ]),
                  _: 3
                }, 8, ["to"])) : e.titleHref ? (c(), f("a", {
                  key: 1,
                  class: "card__title-link",
                  href: e.titleHref,
                  target: e.titleTarget,
                  ref_key: "link",
                  ref: r
                }, [
                  g(P.$slots, "title", {}, () => [
                    C(_(e.title), 1)
                  ])
                ], 8, Gl)) : g(P.$slots, "title", { key: 2 }, () => [
                  C(_(e.title), 1)
                ])
              ]),
              _: 3
            }, 8, ["class"])) : p("", !0),
            g(P.$slots, "body")
          ]),
          $(l).aside ? (c(), f("div", Yl, [
            g(P.$slots, "aside")
          ])) : p("", !0)
        ]),
        $(l).image || e.imageSrc ? (c(), f("div", {
          key: 0,
          class: m(["card__image", [
            { "card__image--icon": e.imageIcon },
            e.classes.image
          ]])
        }, [
          g(P.$slots, "image", {}, () => [
            h("img", {
              src: e.imageSrc,
              alt: e.imageAlt
            }, null, 8, Kl)
          ])
        ], 2)) : p("", !0),
        $(l).footer ? (c(), f("div", Jl, [
          g(P.$slots, "footer")
        ])) : p("", !0)
      ]),
      _: 3
    }, 40, ["class", "style", "target", "to", "href", "data-ulu-proxy-click-init"]));
  }
}, kh = {
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
    const s = e, t = S(() => ({
      inline: s.inline,
      "inline-all": s.inlineAll,
      table: s.table,
      separated: s.separated,
      "separated-first": s.separatedFirst,
      "separated-last": s.separatedLast,
      compact: s.compact
    })), { resolvedModifiers: n } = ue({
      props: s,
      internal: t,
      baseClass: "definition-list"
    });
    return (l, o) => (c(), f("dl", {
      class: m(["definition-list", [$(n), e.classes.list]])
    }, [
      (c(!0), f(O, null, R(e.items, (r, a) => (c(), f("div", {
        key: a,
        class: m(e.classes.item)
      }, [
        h("dt", {
          class: m(e.classes.term)
        }, [
          g(l.$slots, "term", {
            item: r,
            index: a
          }, () => [
            C(_(r.term), 1)
          ])
        ], 2),
        h("dd", {
          class: m(e.classes.description)
        }, [
          g(l.$slots, "description", {
            item: r,
            index: a
          }, () => [
            C(_(r.description), 1)
          ])
        ], 2)
      ], 2))), 128))
    ], 2));
  }
}, Ql = ["href", "target"], Zl = { class: "external-link__text" }, $h = {
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
    return (s, t) => (c(), f("a", {
      class: "external-link",
      href: e.href,
      target: e.target
    }, [
      h("span", Zl, [
        g(s.$slots, "default", {}, () => [
          C(_(e.text), 1)
        ])
      ]),
      x(W, {
        class: "external-link__icon margin-left-small-x display-inline",
        icon: e.icon || "type:externalLink"
      }, null, 8, ["icon"])
    ], 8, Ql));
  }
}, Ch = {
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
    const s = e, t = S(() => s.ordered || s.forceOrdered), n = S(() => t.value ? "ol" : "ul");
    return (l, o) => (c(), w(F(n.value), {
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
      reversed: t.value ? e.reversed : null,
      start: e.start
    }, {
      default: k(() => [
        (c(!0), f(O, null, R(e.items, (r, a) => (c(), f("li", {
          key: a,
          class: m(e.classes.listItem)
        }, [
          g(l.$slots, "default", {
            item: r,
            index: a
          }, () => [
            C(_(r), 1)
          ])
        ], 2))), 128))
      ]),
      _: 3
    }, 8, ["class", "style", "reversed", "start"]));
  }
}, er = {}, tr = { id: "main-content" };
function sr(e, s) {
  return c(), f("main", tr, [
    g(e.$slots, "default")
  ]);
}
const Th = /* @__PURE__ */ j(er, [["render", sr]]), Ah = {
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
    const s = e, t = S(() => ({
      short: s.short,
      light: s.light,
      large: s.large,
      [`margin-${s.margin}`]: s.margin
    })), { resolvedModifiers: n } = ue({
      props: s,
      baseClass: "rule",
      internal: t
    });
    return (l, o) => e.semantic ? (c(), f("hr", {
      key: 0,
      class: m(["rule", $(n)])
    }, null, 2)) : (c(), f("div", {
      key: 1,
      class: m(["rule", $(n)])
    }, null, 2));
  }
}, nr = { class: "spoke-spinner__spinner" }, Oh = {
  __name: "UluSpokeSpinner",
  props: {
    /**
     * Type modifier for spinner (ie match scss style name)
     */
    type: String
  },
  setup(e) {
    return (s, t) => (c(), f("div", {
      class: m(["spoke-spinner", { [`spoke-spinner--${e.type}`]: e.type }])
    }, [
      h("div", nr, [
        (c(), f(O, null, R(12, (n) => h("div", { key: n })), 64))
      ])
    ], 2));
  }
}, or = ["role", "aria-labelledby"], lr = ["id"], rr = { class: "menu-stack__list" }, ar = { class: "menu-stack__selectable" }, ir = ["type", "id", "name", "value", "checked", "onChange"], cr = ["for"], un = {
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
    const t = e, n = s, l = S(() => t.legend ? t.legend.toLowerCase().replace(/\s+/g, "-") : `menu-${Math.random().toString(36).substring(7)}`), o = S(() => l.value ? `${l.value}-legend` : null), r = S(() => t.type === "radio" ? "radiogroup" : "group"), a = (d) => `${l.value}-${d.uid}`, u = (d) => t.type === "radio" ? t.modelValue === d.uid : Array.isArray(t.modelValue) ? t.modelValue.includes(d.uid) : t.type === "checkbox" && d.checked || !1, i = (d, v) => {
      if (t.type === "radio")
        n("update:modelValue", d.uid);
      else if (Array.isArray(t.modelValue)) {
        const y = [...t.modelValue], b = y.indexOf(d.uid);
        b > -1 ? y.splice(b, 1) : y.push(d.uid), n("update:modelValue", y);
      } else
        d.checked = v.target.checked;
    };
    return (d, v) => (c(), f("div", {
      class: m(["menu-stack form-theme", {
        "menu-stack--hide-inputs": e.hideInputs,
        "menu-stack--compact": e.compact
      }]),
      role: r.value,
      "aria-labelledby": o.value
    }, [
      e.legend ? (c(), f("div", {
        key: 0,
        id: o.value,
        class: "hidden-visually"
      }, _(e.legend), 9, lr)) : p("", !0),
      h("ul", rr, [
        (c(!0), f(O, null, R(e.options, (y) => (c(), f("li", {
          class: "menu-stack__item",
          key: y.uid
        }, [
          h("div", ar, [
            h("input", {
              type: e.type,
              id: a(y),
              name: l.value,
              value: y.uid,
              checked: u(y),
              onChange: (b) => i(y, b)
            }, null, 40, ir),
            h("label", {
              for: a(y)
            }, [
              g(d.$slots, "default", { option: y }, () => [
                C(_(y?.label || y?.title || y?.text), 1)
              ])
            ], 8, cr)
          ])
        ]))), 128))
      ])
    ], 10, or));
  }
}, ur = ["href", "download"], dr = { class: "margin-left-small-x" }, xh = {
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
    const s = e, t = S(() => typeof window > "u" ? "" : window.URL.createObjectURL(s.file)), n = S(() => {
      const { size: l } = s.file, o = l / 1e6, r = l / 1e3, a = (u) => parseFloat(u.toFixed(2));
      return o > 1 ? `${a(o)}Mb` : r > 1 ? `${a(r)}Kb` : `${a(l)}B`;
    });
    return (l, o) => (c(), f("a", {
      class: "layout-flex-baseline",
      href: t.value,
      download: e.file.name
    }, [
      g(l.$slots, "default", {
        fileName: e.file.name,
        fileSize: n.value
      }, () => [
        x(W, {
          class: "ui-icon",
          icon: e.icon
        }, null, 8, ["icon"]),
        h("span", dr, [
          C(_(e.file.name) + " ", 1),
          e.noFileSize ? p("", !0) : (c(), w(on, {
            key: 0,
            text: n.value,
            small: "",
            outline: ""
          }, null, 8, ["text"]))
        ])
      ])
    ], 8, ur));
  }
}, fr = { class: "form-theme__required-char" }, Ve = {
  __name: "UluFormRequiredChar",
  setup(e) {
    return (s, t) => (c(), f("span", fr, "*"));
  }
}, hr = ["for"], mr = ["multiple", "id", "required"], Uh = {
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
    const t = s, n = Q(), l = (o) => {
      t("file-change", o.target.files);
    };
    return (o, r) => (c(), f(O, null, [
      h("label", {
        class: m({ "hidden-visually": e.labelHidden }),
        for: $(n)
      }, [
        g(o.$slots, "label", {}, () => [
          C(_(e.label), 1),
          e.required ? (c(), w(Ve, { key: 0 })) : p("", !0)
        ])
      ], 10, hr),
      h("input", ee({
        type: "file",
        onChange: l,
        multiple: e.multiple,
        id: $(n)
      }, e.inputAttrs, { required: e.required }), null, 16, mr)
    ], 64));
  }
}, Bh = {
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
    return (s, t) => (c(), f("p", {
      class: m(["form-theme__description", {
        "form-theme__error": e.error,
        "form-theme__warning": e.warning
      }])
    }, [
      e.error || e.warning ? (c(), w(W, {
        key: 0,
        icon: `type:${e.error ? "error" : "warning"}`
      }, null, 8, ["icon"])) : p("", !0),
      g(s.$slots, "default")
    ], 2));
  }
}, gr = ["for"], vr = ["id", "value", "required"], yr = ["value"], Rh = {
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
    const s = Q();
    return (t, n) => (c(), f(O, null, [
      h("label", {
        class: m({ "hidden-visually": e.labelHidden }),
        for: $(s)
      }, [
        g(t.$slots, "label", {}, () => [
          C(_(e.label), 1),
          e.required ? (c(), w(Ve, { key: 0 })) : p("", !0)
        ])
      ], 10, gr),
      h("select", {
        id: $(s),
        value: e.modelValue,
        onInput: n[0] || (n[0] = (l) => t.$emit("update:modelValue", l.target.value)),
        required: e.required
      }, [
        n[1] || (n[1] = h("option", {
          disabled: "",
          value: ""
        }, "Please select one", -1)),
        (c(!0), f(O, null, R(e.options, (l, o) => (c(), f("option", {
          key: o,
          value: l.value
        }, _(l.text), 9, yr))), 128))
      ], 40, vr)
    ], 64));
  }
}, pr = ["for"], br = ["value", "id", "required"], Eh = {
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
    const s = Q();
    return (t, n) => (c(), f(O, null, [
      h("label", {
        class: m({ "hidden-visually": e.labelHidden }),
        for: $(s)
      }, [
        g(t.$slots, "label", {}, () => [
          C(_(e.label), 1),
          e.required ? (c(), w(Ve, { key: 0 })) : p("", !0)
        ])
      ], 10, pr),
      h("input", {
        type: "text",
        value: e.modelValue,
        onInput: n[0] || (n[0] = (l) => t.$emit("update:modelValue", l.target.value)),
        id: $(s),
        required: e.required
      }, null, 40, br)
    ], 64));
  }
}, _r = { class: "form-theme search-form type-small" }, wr = { class: "search-form__field" }, Sr = ["placeholder"], kr = {
  class: "search-form__submit button button--primary",
  "aria-label": "Submit Search"
}, jh = {
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
    return (s, t) => (c(), f("div", _r, [
      h("div", wr, [
        t[0] || (t[0] = h("label", { class: "hidden-visually" }, "Search", -1)),
        h("input", {
          class: "search-form__input",
          type: "text",
          id: "example-input",
          placeholder: e.placeholder
        }, null, 8, Sr)
      ]),
      h("button", kr, [
        x(W, { icon: "type:search" })
      ])
    ]));
  }
}, Ih = {
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
    return (s, t) => (c(), w(F(e.element), {
      class: m(["form-theme", [{
        "form-theme--full-width": e.fullWidth,
        "form-theme--full-width-select": e.fullWidthSelect,
        "form-theme--hide-labels": e.hideLabels,
        "form-theme--actions-right": e.actionsRight
      }]])
    }, {
      default: k(() => [
        g(s.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}, $r = { class: "form-theme__actions" }, Mh = {
  __name: "UluFormActions",
  setup(e) {
    return (s, t) => (c(), f("div", $r, [
      g(s.$slots, "default")
    ]));
  }
}, Cr = ["id", "checked", "required"], Tr = ["for"], Fh = {
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
    const s = Q();
    return (t, n) => (c(), f(O, null, [
      h("input", {
        type: "checkbox",
        id: $(s),
        checked: e.modelValue,
        onChange: n[0] || (n[0] = (l) => t.$emit("update:modelValue", l.target.checked)),
        required: e.required
      }, null, 40, Cr),
      h("label", { for: $(s) }, [
        g(t.$slots, "default", {}, () => [
          C(_(e.label), 1),
          e.required ? (c(), w(Ve, { key: 0 })) : p("", !0)
        ])
      ], 8, Tr)
    ], 64));
  }
}, Ar = { class: "form-theme__fieldset" }, Or = { key: 0 }, Ph = {
  __name: "UluFormFieldset",
  props: {
    /**
     * The legend for the fieldset.
     */
    legend: String
  },
  setup(e) {
    return (s, t) => (c(), f("fieldset", Ar, [
      e.legend ? (c(), f("legend", Or, _(e.legend), 1)) : p("", !0),
      g(s.$slots, "default")
    ]));
  }
}, zh = {
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
    return (s, t) => (c(), f("div", {
      class: m(["form-theme__item", [{
        "is-danger": e.error,
        "is-warning": e.warning,
        "form-theme__item--align-top": e.alignTop,
        "form-theme__item--text": e.text,
        "form-theme__item--file": e.file,
        "form-theme__item--select": e.select,
        "form-theme__item--textarea": e.textarea
      }]])
    }, [
      g(s.$slots, "default")
    ], 2));
  }
}, xr = { class: "form-theme__items-inline" }, Lh = {
  __name: "UluFormItemsInline",
  setup(e) {
    return (s, t) => (c(), f("div", xr, [
      g(s.$slots, "default")
    ]));
  }
}, Ur = ["id", "name", "value", "checked", "required"], Br = ["for"], Vh = {
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
    const s = Q();
    return (t, n) => (c(), f(O, null, [
      h("input", {
        type: "radio",
        id: $(s),
        name: e.name,
        value: e.value,
        checked: e.modelValue === e.value,
        onChange: n[0] || (n[0] = (l) => t.$emit("update:modelValue", e.value)),
        required: e.required
      }, null, 40, Ur),
      h("label", { for: $(s) }, [
        g(t.$slots, "default", {}, () => [
          C(_(e.label), 1),
          e.required ? (c(), w(Ve, { key: 0 })) : p("", !0)
        ])
      ], 8, Br)
    ], 64));
  }
}, Rr = ["for"], Er = ["value", "id", "required"], Hh = {
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
    const s = Q();
    return (t, n) => (c(), f(O, null, [
      h("label", {
        class: m({ "hidden-visually": e.labelHidden }),
        for: $(s)
      }, [
        g(t.$slots, "label", {}, () => [
          C(_(e.label), 1),
          e.required ? (c(), w(Ve, { key: 0 })) : p("", !0)
        ])
      ], 10, Rr),
      h("textarea", {
        value: e.modelValue,
        onInput: n[0] || (n[0] = (l) => t.$emit("update:modelValue", l.target.value)),
        id: $(s),
        required: e.required
      }, null, 40, Er)
    ], 64));
  }
}, Nh = {
  __name: "UluAdaptiveLayout",
  setup(e) {
    const s = Ce("uluIsMobile");
    return (t, n) => !$(s) || !t.$slots.mobile ? g(t.$slots, "default", { key: 0 }) : g(t.$slots, "mobile", { key: 1 });
  }
}, jr = {
  name: "UluDataGrid",
  async mounted() {
    const e = () => lo(this.$el);
    e(), this.resizeHandler = Gt(e, 200, !1, this), window.addEventListener("resize", this.resizeHandler);
  },
  beforeUnmount() {
    this.resizeHandler && window.removeEventListener("resize", this.resizeHandler);
  }
};
function Ir(e, s, t, n, l, o) {
  return c(), f("div", null, [
    g(e.$slots, "default")
  ]);
}
const Wh = /* @__PURE__ */ j(jr, [["render", Ir]]), Mr = {
  name: "UluTitleRail",
  components: {
    UluIcon: W
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
}, Fr = {
  key: 0,
  class: "rail__item rail__item--pull"
};
function Pr(e, s, t, n, l, o) {
  const r = K("UluIcon");
  return c(), f("div", {
    class: m(["rail rail--title-rail", {
      "rail--rule": t.rule
    }])
  }, [
    h("div", {
      class: m(["rail__item rail__item--title", t.classes.itemTitle])
    }, [
      (c(), w(F(t.titleElement), {
        class: m(["layout-flex type-max-width-small no-margin", t.classes.title]),
        style: X({ alignItems: t.iconAlign })
      }, {
        default: k(() => [
          t.icon ? (c(), w(r, {
            key: 0,
            class: m(t.classes.icon),
            icon: t.icon
          }, null, 8, ["class", "icon"])) : p("", !0),
          g(e.$slots, "default", {}, () => [
            C(_(t.title), 1)
          ])
        ]),
        _: 3
      }, 8, ["class", "style"]))
    ], 2),
    e.$slots.end ? (c(), f("div", Fr, [
      g(e.$slots, "end")
    ])) : p("", !0)
  ], 2);
}
const Dh = /* @__PURE__ */ j(Mr, [["render", Pr]]), qh = {
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
    const s = e, t = Ce("uluBreakpointManager"), n = B({}), l = B([]), o = B(!1), r = S(() => !o.value || ["max", "min", "only"].filter((d) => s[d]).length === 0 ? !1 : Object.values(n.value).every((d) => d)), a = (i) => {
      const d = (v) => {
        const y = s[v];
        if (y) {
          n.value[v] = !1;
          const b = {
            on: () => {
              n.value[v] = !0;
            },
            off: () => {
              n.value[v] = !1;
            }
          };
          i.at(y)[v](b), l.value.push({ name: y, direction: v, handler: b });
        }
      };
      d("max"), d("min"), d("only"), o.value = !0;
    }, u = () => {
      t && l.value.forEach(({ name: i, direction: d, handler: v }) => {
        t.at(i).remove(v, d);
      }), l.value = [], n.value = {}, o.value = !1;
    };
    return re(t, (i) => {
      i && !o.value && a(i);
    }, { immediate: !0 }), re([() => s.max, () => s.min, () => s.only], () => {
      t && o.value && (u(), a(t));
    }), Xt(() => {
      u();
    }), (i, d) => r.value ? g(i.$slots, "default", { key: 0 }) : p("", !0);
  }
}, zr = {
  name: "UluBreadcrumb",
  components: {
    UluIcon: W
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
function Lr(e, s, t, n, l, o) {
  const r = K("router-link"), a = K("UluIcon");
  return t.items.length ? (c(), f("nav", {
    key: 0,
    class: m(t.classes.nav),
    "aria-label": "Breadcrumb"
  }, [
    h("ol", {
      class: m(t.classes.list)
    }, [
      (c(!0), f(O, null, R(t.items, (u, i) => (c(), f("li", {
        key: i,
        class: m(t.classes.item)
      }, [
        u.current ? (c(), f("span", {
          key: 1,
          class: m(u.current)
        }, [
          g(e.$slots, "default", { item: u }, () => [
            C(_(u.title), 1)
          ])
        ], 2)) : (c(), w(r, {
          key: 0,
          to: u.to,
          class: m(t.classes.link),
          "aria-current": u.current ? "page" : null
        }, {
          default: k(() => [
            g(e.$slots, "default", { item: u }, () => [
              C(_(u.title), 1)
            ])
          ]),
          _: 2
        }, 1032, ["to", "class", "aria-current"])),
        i < t.items.length - 1 ? g(e.$slots, "separator", { key: 2 }, () => [
          x(a, {
            class: m(t.classes.separator),
            icon: t.separatorIcon || "type:pathSeparator"
          }, null, 8, ["class", "icon"])
        ]) : p("", !0)
      ], 2))), 128))
    ], 2)
  ], 2)) : p("", !0);
}
const Xh = /* @__PURE__ */ j(zr, [["render", Lr]]), Vr = {
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
function Hr(e, s, t, n, l, o) {
  const r = K("UluMenu");
  return c(), f("nav", {
    class: m(["nav-strip", {
      "nav-strip--rule": t.rule,
      "nav-strip--center": t.center,
      "nav-strip--right": t.right
    }])
  }, [
    x(r, {
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
const Gh = /* @__PURE__ */ j(Vr, [["render", Hr]]), Nr = ["aria-labelledby"], Wr = { class: "pager__items js-pager__items" }, Dr = {
  key: 0,
  class: "pager__item pager__item--first"
}, qr = {
  key: 1,
  class: "pager__item pager__item--previous"
}, Xr = {
  key: 2,
  class: "pager__item pager__item--ellipsis",
  role: "presentation"
}, Gr = { class: "hidden-visually" }, Yr = {
  key: 3,
  class: "pager__item pager__item--ellipsis",
  role: "presentation"
}, Kr = {
  key: 4,
  class: "pager__item pager__item--next"
}, Jr = {
  key: 5,
  class: "pager__item pager__item--last"
}, Yh = {
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
    const s = e, t = Q("ulu-pager");
    function n(l) {
      return s.current == l ? "Current page" : `Go to page ${l}`;
    }
    return (l, o) => {
      const r = K("router-link");
      return e.items ? (c(), f("nav", {
        key: 0,
        class: "pager",
        role: "navigation",
        "aria-labelledby": $(t)
      }, [
        (c(), w(F(e.titleElement), {
          id: $(t),
          class: "hidden-visually"
        }, {
          default: k(() => [...o[0] || (o[0] = [
            C("Pagination", -1)
          ])]),
          _: 1
        }, 8, ["id"])),
        h("ul", Wr, [
          e.items.first ? (c(), f("li", Dr, [
            x(r, ee({
              to: e.items.first.href,
              title: "Go to first page"
            }, e.items.first.attributes), {
              default: k(() => [
                o[1] || (o[1] = h("span", { class: "hidden-visually" }, "First page", -1)),
                x(W, {
                  icon: "fas fa-angle-double-left",
                  "aria-hidden": "true"
                })
              ]),
              _: 1
            }, 16, ["to"])
          ])) : p("", !0),
          e.items.previous ? (c(), f("li", qr, [
            x(r, ee({
              to: e.items.previous.href,
              title: "Go to previous page",
              rel: "prev"
            }, e.items.previous.attributes), {
              default: k(() => [
                o[2] || (o[2] = h("span", { class: "hidden-visually" }, "Previous page", -1)),
                x(W, {
                  icon: "fas fa-angle-left",
                  "aria-hidden": "true"
                })
              ]),
              _: 1
            }, 16, ["to"])
          ])) : p("", !0),
          e.ellipses.previous ? (c(), f("li", Xr, "…")) : p("", !0),
          (c(!0), f(O, null, R(e.items.pages, (a, u) => (c(), f("li", {
            key: u,
            class: m(["pager__item", { "is-active": e.current == u }])
          }, [
            x(r, ee({
              to: a.href,
              title: n(u)
            }, { ref_for: !0 }, a.attributes), {
              default: k(() => [
                h("span", Gr, _(e.current == u ? "Current page" : "Page"), 1),
                C(" " + _(u), 1)
              ]),
              _: 2
            }, 1040, ["to", "title"])
          ], 2))), 128)),
          e.ellipses.next ? (c(), f("li", Yr, "…")) : p("", !0),
          e.items.next ? (c(), f("li", Kr, [
            x(r, ee({
              to: e.items.next.href,
              title: "Go to next page",
              rel: "next"
            }, e.items.next.attributes), {
              default: k(() => [
                o[3] || (o[3] = h("span", { class: "hidden-visually" }, "Next page", -1)),
                x(W, {
                  icon: "fas fa-angle-right",
                  "aria-hidden": "true"
                })
              ]),
              _: 1
            }, 16, ["to"])
          ])) : p("", !0),
          e.items.last ? (c(), f("li", Jr, [
            x(r, ee({
              to: e.items.last.href,
              title: "Go to last page"
            }, e.items.last.attributes), {
              default: k(() => [
                o[4] || (o[4] = h("span", { class: "hidden-visually" }, "Last page", -1)),
                x(W, {
                  icon: "fas fa-angle-double-right",
                  "aria-hidden": "true"
                })
              ]),
              _: 1
            }, 16, ["to"])
          ])) : p("", !0)
        ])
      ], 8, Nr)) : p("", !0);
    };
  }
}, Qr = {}, Zr = {
  class: "site-skip-link hidden-visually-focusable",
  href: "#main-content"
};
function ea(e, s) {
  return c(), f("a", Zr, " Skip to main content ");
}
const Kh = /* @__PURE__ */ j(Qr, [["render", ea]]), ta = {
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
function sa(e, s, t, n, l, o) {
  return t.text != null ? (c(), w(F(t.element), { key: 0 }, {
    default: k(() => [
      C(_(t.text), 1)
    ]),
    _: 1
  })) : p("", !0);
}
const Jh = /* @__PURE__ */ j(ta, [["render", sa]]), na = {
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
    return (s, t) => e.unwrapped ? g(s.$slots, "default", { key: 1 }) : (c(), w(F(e.is), { key: 0 }, {
      default: k(() => [
        g(s.$slots, "default")
      ]),
      _: 3
    }));
  }
}, oa = {}, la = { style: { display: "none" } };
function ra(e, s) {
  return c(), f("span", la);
}
const Qh = /* @__PURE__ */ j(oa, [["render", ra]]), aa = {};
function ia(e, s) {
  const t = K("router-view");
  return c(), w(t);
}
const Zh = /* @__PURE__ */ j(aa, [["render", ia]]), ca = {
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
}, ua = ["src", "alt"];
function da(e, s, t, n, l, o) {
  return c(), f("img", {
    src: o.src,
    alt: t.alt
  }, null, 8, ua);
}
const em = /* @__PURE__ */ j(ca, [["render", da]]), fa = {
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
function ha(e, s, t, n, l, o) {
  return c(!0), f(O, null, R(parseInt(t.amount), (r) => (c(), w(F(t.element), { key: r }, {
    default: k(() => [...s[0] || (s[0] = [
      C(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed semper erat tincidunt tellus vestibulum dictum. Fusce vel augue commodo, egestas diam sed, accumsan leo. Maecenas congue nec nisl et ullamcorper. Maecenas tincidunt, tortor et viverra eleifend, enim leo vestibulum ipsum, quis placerat mi nisi nec ex. Vivamus a justo volutpat, scelerisque elit eget, lacinia ex. Phasellus dapibus sollicitudin tortor, vitae suscipit nunc condimentum ut. Cras suscipit feugiat nibh nec consectetur. Phasellus vitae quam blandit, cursus metus ut, placerat mi. Sed tempor lacus non est interdum imperdiet nec quis metus. Praesent vel eleifend diam. Donec tincidunt eget purus sed posuere. ", -1)
    ])]),
    _: 2
  }, 1024))), 128);
}
const tm = /* @__PURE__ */ j(fa, [["render", ha]]), ma = {
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
function ga(e, s, t, n, l, o) {
  return o.title ? (c(), f("p", {
    key: 0,
    tabindex: "-1",
    class: "hidden-visually",
    ref: "el"
  }, _(o.title), 513)) : p("", !0);
}
const sm = /* @__PURE__ */ j(ma, [["render", ga]]), nm = {
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
        image: ({ value: t }) => zn("img", {
          src: `${t.imageUrl}?max-w=1100&fit=crop`,
          alt: t.imageAlt
        })
      }
    };
    return (t, n) => e.content?.length ? (c(), w(na, {
      key: 0,
      class: "wysiwyg",
      unwrapped: e.noWrapper
    }, {
      default: k(() => [
        x($(ro), {
          value: e.content,
          components: s
        }, null, 8, ["value"])
      ]),
      _: 1
    }, 8, ["unwrapped"])) : p("", !0);
  }
}, va = {
  name: "AnimateNumber",
  props: {
    /**
     * The target number to animate to.
     */
    value: Number
  },
  watch: {
    value() {
      ao.to(this, {
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
function ya(e, s, t, n, l, o) {
  return c(), f("span", null, [
    g(e.$slots, "default", { currentValue: l.currentValue }, () => [
      C(_(l.currentValue), 1)
    ])
  ]);
}
const om = /* @__PURE__ */ j(va, [["render", ya]]), pa = {
  key: 0,
  class: "progress-bar__header"
}, ba = {
  key: 1,
  class: "progress-bar__value progress-bar__value--amount"
}, _a = {
  key: 2,
  class: "progress-bar__icon"
}, wa = { class: "progress-bar__track" }, Sa = {
  key: 1,
  class: "progress-bar__values"
}, ka = { class: "progress-bar__value progress-bar__value--amount" }, $a = {
  key: 0,
  class: "progress-bar__value progress-bar__value--deficit"
}, Ca = { class: "progress-bar__value progress-bar__value--total" }, lm = {
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
    const s = e, t = (r, a) => `${a === 0 ? 0 : r / a * 100}%`, n = S(() => s.indeterminate ? null : t(s.amount, s.total)), l = S(() => t(s.deficit, s.total)), o = S(() => ({
      "progress-bar": !0,
      "progress-bar--small": s.small,
      "progress-bar--positive": s.positive,
      "progress-bar--negative": s.negative,
      "progress-bar--loader": s.loader,
      "progress-bar--indeterminate": s.indeterminate,
      "type-small": s.small
      // From original component, seems to control font size
    }));
    return (r, a) => (c(), f("div", {
      class: m(o.value)
    }, [
      e.label || r.$slots.label || r.$slots.icon || e.amountInHeader ? (c(), f("div", pa, [
        e.label ? (c(), w(F(e.labelElement), {
          key: 0,
          class: m(["progress-bar__label", [e.classes.label, { "hidden-visually": e.labelHidden }]])
        }, {
          default: k(() => [
            g(r.$slots, "label", {}, () => [
              C(_(e.label), 1)
            ])
          ]),
          _: 3
        }, 8, ["class"])) : p("", !0),
        e.amountInHeader ? (c(), f("div", ba, [
          a[0] || (a[0] = h("strong", { class: "hidden-visually" }, "Amount:", -1)),
          g(r.$slots, "valueAmount", { value: e.amount }, () => [
            C(_(e.formatValue(e.amount, "amount")), 1)
          ])
        ])) : p("", !0),
        r.$slots.icon ? (c(), f("div", _a, [
          g(r.$slots, "icon")
        ])) : p("", !0)
      ])) : p("", !0),
      h("div", wa, [
        h("div", {
          class: "progress-bar__bar",
          style: X({ width: n.value })
        }, null, 4),
        e.deficit > 0 ? (c(), f("div", {
          key: 0,
          class: "progress-bar__bar--deficit",
          style: X({ width: l.value })
        }, null, 4)) : p("", !0)
      ]),
      !e.noValues && !e.amountInHeader && !e.loader && !e.indeterminate ? (c(), f("div", Sa, [
        h("div", ka, [
          a[1] || (a[1] = h("strong", { class: "hidden-visually" }, "Amount:", -1)),
          g(r.$slots, "valueAmount", { value: e.amount }, () => [
            C(_(e.formatValue(e.amount, "amount")), 1)
          ])
        ]),
        e.deficit > 0 ? (c(), f("div", $a, [
          a[2] || (a[2] = h("strong", { class: "hidden-visually" }, "Deficit: ", -1)),
          g(r.$slots, "valueDeficit", { value: e.deficit }, () => [
            C("-" + _(e.formatValue(e.deficit, "deficit")), 1)
          ])
        ])) : p("", !0),
        h("div", Ca, [
          a[3] || (a[3] = h("strong", { class: "hidden-visually" }, "Total:", -1)),
          g(r.$slots, "valueTotal", { value: e.total }, () => [
            C(_(e.formatValue(e.total, "total")), 1)
          ])
        ])
      ])) : p("", !0)
    ], 2));
  }
}, Ta = { class: "hidden-visually" }, Aa = { class: "progress-circle__chart" }, Oa = {
  class: "progress-circle__chart-svg",
  viewBox: "0 0 32 32"
}, xa = {
  key: 0,
  class: "progress-circle__chart-value"
}, Ua = {
  key: 0,
  class: "progress-circle__value type-small-x"
}, rm = {
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
    const s = e, t = B(null), n = (u) => u === 100 ? 101 : u, l = (u = 0) => {
      if (!t.value || !t.value.animate) return;
      const i = { strokeDasharray: [`${u} 100`, o.value] };
      t.value.animate(i, { duration: s.duration, easing: s.easing, fill: "forwards" });
    };
    re(() => s.percentage, (u, i) => {
      u !== i && l(n(i));
    });
    const o = S(() => `${n(s.percentage)} 100`), r = S(() => s.outside || s.outsideBelow || s.small), a = S(() => {
      const u = {
        "progress-circle": !0,
        "progress-circle--small": s.small,
        "progress-circle--pie": s.pieStyle,
        "progress-circle--outside": r.value,
        "progress-circle--outside-below": s.outsideBelow,
        "progress-circle--no-mask": s.noMask
      };
      return s.status && (u[`progress-circle--${s.status}`] = !0), u;
    });
    return yt(() => {
      l();
    }), (u, i) => (c(), f("div", {
      class: m(a.value)
    }, [
      h("strong", Ta, _(e.label), 1),
      h("div", Aa, [
        (c(), f("svg", Oa, [
          i[0] || (i[0] = h("circle", {
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
          i[1] || (i[1] = h("circle", {
            class: "progress-circle__chart-mask",
            cx: "16",
            cy: "16"
          }, null, -1))
        ])),
        !r.value && !e.noValue ? (c(), f("strong", xa, [
          g(u.$slots, "value", { value: e.percentage }, () => [
            C(_(e.formatValue(e.percentage)), 1)
          ])
        ])) : p("", !0)
      ]),
      r.value && !e.noValue ? (c(), f("strong", Ua, [
        g(u.$slots, "value", { value: e.percentage }, () => [
          C(_(e.formatValue(e.percentage)), 1)
        ])
      ])) : p("", !0)
    ], 2));
  }
};
function Ba(e) {
  const s = /* @__PURE__ */ new Set();
  for (const t of e)
    for (const n of t)
      s.add(n);
  return s;
}
function dt(e) {
  if (!e || e.length === 0) return /* @__PURE__ */ new Set();
  const s = e.sort((n, l) => n.size - l.size), t = new Set(s[0]);
  for (let n = 1; n < s.length; n++) {
    for (const l of t)
      s[n].has(l) || t.delete(l);
    if (t.size === 0) break;
  }
  return t;
}
function ot(e, s, t) {
  if (!e || e.length === 0)
    return t;
  const n = e.map((l) => {
    const o = l.children.map((r) => {
      const a = `${l.uid}:${r.uid}`;
      return s.get(a) || /* @__PURE__ */ new Set();
    });
    return l.match === "all" ? dt(o) : Ba(o);
  });
  return dt(n);
}
function Ra(e, s) {
  return !s || !Array.isArray(s) ? [] : s.map((t) => {
    const n = /* @__PURE__ */ new Set(), l = t.getValue || ((a) => a[t.uid]);
    e.forEach((a) => {
      const u = l(a);
      Array.isArray(u) ? u.forEach((i) => i && n.add(i)) : u && n.add(u);
    });
    const o = t.getLabel || ((a) => a), r = [...n].map((a) => ({
      uid: a,
      label: o(a),
      selected: !1
    }));
    return r.sort((a, u) => String(a.label).localeCompare(String(u.label))), {
      ...t,
      children: r
    };
  });
}
function am(e, s = {}) {
  const {
    initialFacets: t,
    facetFields: n,
    initialSearchValue: l = "",
    initialSortType: o = "az",
    noDefaultSorts: r = !1,
    extraSortTypes: a = {},
    searchOptions: u = {},
    getSortValue: i = (U) => U.title || U.label || "",
    countMode: d = "none",
    // 'none', 'simple', 'intuitive'
    urlSync: v
  } = s, y = (U) => U.sort((I, q) => {
    const M = i(I), z = i(q);
    return M && z ? String(M).localeCompare(String(z)) : M ? -1 : z ? 1 : 0;
  }), b = {
    az: { text: "A-Z", sort: y },
    za: { text: "Z-A", sort: (U) => y(U).reverse() }
  };
  function A(U) {
    return (U || []).map((I) => ({
      ...I,
      open: I.open || !1,
      children: I.children.map((q) => ({
        ...q,
        selected: q.selected || !1
      })),
      selectedCount: 0
    }));
  }
  const T = B([]), E = B(l), G = B(o), se = S(() => !n || !e.value?.length ? null : Ra(e.value, n)), P = S(() => ({
    ...r ? {} : b,
    ...a
  })), Z = S(() => {
    const U = /* @__PURE__ */ new Map(), I = ne.value;
    if (!I || !n) return U;
    const q = new Map(n.map((M) => {
      const z = M.getValue || ((Y) => Y[M.uid]);
      return [M.uid, z];
    }));
    for (let M = 0; M < I.length; M++) {
      const z = I[M];
      for (const Y of n) {
        const V = q.get(Y.uid)(z), D = Array.isArray(V) ? V : V ? [V] : [];
        for (const le of D) {
          const ie = `${Y.uid}:${le}`;
          U.has(ie) || U.set(ie, /* @__PURE__ */ new Set()), U.get(ie).add(M);
        }
      }
    }
    return U;
  }), we = S(() => ({
    shouldSort: !0,
    keys: ["title", "label", "description", "author"],
    ...u
  })), ne = S(() => E.value?.length ? new io(e.value, we.value).search(E.value).map((I) => I.item) : e.value), de = S(() => {
    const U = [];
    return T.value.forEach((I) => {
      const q = I.children.filter((M) => M.selected);
      q.length > 0 && U.push({ ...I, children: q });
    }), U;
  }), ae = S(() => {
    if (!de.value.length)
      return ne.value;
    const U = Z.value;
    if (U.size === 0 && ne.value.length > 0 && n?.length > 0)
      return [];
    const I = new Set(ne.value.map((z, Y) => Y)), q = ot(de.value, U, I), M = [];
    for (const z of q)
      M.push(ne.value[z]);
    return M;
  }), Se = S(() => {
    const U = P.value[G.value]?.sort;
    return typeof U != "function" ? ae.value : U([...ae.value]);
  });
  function Ee() {
    T.value.forEach((U) => {
      U.children && U.children.forEach((I) => I.selected = !1), U.selectedCount = 0;
    });
  }
  function Ot({ groupUid: U, facetUid: I, selected: q }) {
    const M = T.value.find((z) => z.uid === U);
    if (M) {
      !M.multiple && q && M.children.forEach((Y) => {
        Y.uid !== I && (Y.selected = !1);
      });
      const z = M.children.find((Y) => Y.uid === I);
      z && (z.selected = q), M.selectedCount = M.children.filter((Y) => Y.selected).length;
    }
  }
  if (re(se, (U) => {
    const I = A(t || U);
    I.forEach((q) => {
      q.selectedCount = q.children.filter((M) => M.selected).length;
    }), T.value = I;
  }, { immediate: !0 }), re([de, ne], ([U, I], [q, M]) => {
    if (!(d === "none" || !T.value.length) && !(U === q && I === M)) {
      if (d === "simple") {
        const z = Z.value;
        if (z.size === 0 && ne.value.length > 0 && n?.length > 0)
          return;
        const Y = new Set(ne.value.map((N, V) => V));
        T.value.forEach((N) => {
          const V = U.filter((le) => le.uid !== N.uid), D = ot(V, z, Y);
          N.children.forEach((le) => {
            const ie = `${N.uid}:${le.uid}`, fe = z.get(ie) || /* @__PURE__ */ new Set(), he = dt([D, fe]);
            le.count = he.size;
          });
        });
      } else if (d === "intuitive") {
        const z = Z.value;
        if (z.size === 0 && ne.value.length > 0 && n?.length > 0)
          return;
        const Y = new Set(ne.value.map((V, D) => D)), N = ot(U, z, Y);
        T.value.forEach((V) => {
          V.children.forEach((D) => {
            const le = `${V.uid}:${D.uid}`, ie = z.get(le) || /* @__PURE__ */ new Set();
            if (D.selected)
              if (V.multiple) {
                const fe = dt([N, ie]);
                D.count = fe.size;
              } else
                D.count = N.size;
            else {
              const fe = [];
              for (const nt of U)
                fe.push({ ...nt, children: [...nt.children] });
              let he = fe.find((nt) => nt.uid === V.uid);
              he || (he = { ...V, children: [] }, fe.push(he)), V.multiple ? he.children.push(D) : he.children = [D];
              const xn = ot(fe, z, Y);
              D.count = xn.size;
            }
          });
        });
      }
    }
  }, { deep: !0, immediate: !0 }), v?.router && v?.route) {
    const { router: U, route: I } = v, q = () => T.value && T.value.length > 0, M = () => {
      if (!q()) return;
      const N = { ...I.query };
      delete N.sort, delete N.search, T.value.forEach((V) => delete N[V.uid]), G.value && G.value !== o && (N.sort = G.value), E.value && (N.search = E.value), de.value.forEach((V) => {
        V.children.length > 0 && (N[V.uid] = V.children.map((D) => D.uid).join(","));
      }), JSON.stringify(N) !== JSON.stringify(I.query) && U.push({ query: N });
    }, z = () => {
      const N = I.query;
      N.sort && (G.value = N.sort), N.search && (E.value = N.search);
      const V = /* @__PURE__ */ new Map();
      T.value.forEach((D) => {
        const le = N[D.uid] ? N[D.uid].split(",") : [];
        V.set(D.uid, new Set(le));
      }), T.value.forEach((D) => {
        const le = V.get(D.uid) || /* @__PURE__ */ new Set();
        D.children.forEach((ie) => {
          const fe = ie.selected, he = le.has(ie.uid);
          fe !== he && Ot({ groupUid: D.uid, facetUid: ie.uid, selected: he });
        });
      });
    }, Y = Ln(() => {
      T.value && T.value.length > 0 && (z(), Y());
    });
    re([G, E, de], M, { deep: !0 }), re(() => I.query, z);
  }
  return {
    facets: T,
    searchValue: E,
    selectedSort: G,
    sortTypes: P,
    displayItems: Se,
    selectedFacets: de,
    clearFilters: Ee,
    handleFacetChange: Ot
  };
}
const Ea = ["onClick"], im = {
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
    const t = e, n = s, l = S(() => {
      const a = [];
      return t.selectedFacets.forEach((u) => {
        u.children.forEach((i) => {
          a.push({
            ...i,
            groupUid: u.uid
          });
        });
      }), a;
    });
    function o(a) {
      n("facet-change", {
        groupUid: a.groupUid,
        facetUid: a.uid,
        selected: !1
      });
    }
    function r() {
      n("clear-filters");
    }
    return (a, u) => l.value.length ? (c(), f("div", {
      key: 0,
      class: m(["facets-active", e.classes.container])
    }, [
      (c(), w(F(e.labelElement), {
        class: m(["facets-active__label", e.classes.label])
      }, {
        default: k(() => [
          g(a.$slots, "label", {}, () => [
            u[0] || (u[0] = C(" Active Filters: ", -1))
          ])
        ]),
        _: 3
      }, 8, ["class"])),
      h("ul", {
        class: m(["facets-active__list", e.classes.list])
      }, [
        (c(!0), f(O, null, R(l.value, (i) => (c(), f("li", {
          class: m(["facets-active__item", e.classes.item]),
          key: `${i.groupUid}-${i.uid}`
        }, [
          h("button", {
            class: m(e.classes.filterButton),
            icon: "type:remove",
            onClick: (d) => o(i)
          }, [
            h("span", {
              class: m(e.classes.filterButtonText)
            }, [
              u[1] || (u[1] = h("span", { class: "hidden-visually" }, "Remove Active Filter:", -1)),
              C(" " + _(i.label), 1)
            ], 2),
            h("span", {
              class: m(e.classes.filterButtonIcon)
            }, [
              x(W, { icon: e.removeIcon }, null, 8, ["icon"])
            ], 2)
          ], 10, Ea)
        ], 2))), 128))
      ], 2),
      h("button", {
        onClick: r,
        class: m(e.classes.clearButton)
      }, "Clear All", 2)
    ], 2)) : p("", !0);
  }
}, ja = { key: 0 }, ft = {
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
    const t = e, n = s, l = S(() => t.type === "radio" ? [{ label: `All ${t.groupName}s`, uid: "" }, ...t.children] : t.children);
    function o(r) {
      if (t.type === "radio") {
        const a = r;
        t.children.forEach((u) => {
          const i = u.uid === a;
          u.selected !== i && n("facet-change", {
            groupUid: t.groupUid,
            facetUid: u.uid,
            selected: i
          });
        });
      } else {
        const a = new Set(r);
        t.children.forEach((u) => {
          const i = a.has(u.uid);
          u.selected !== i && n("facet-change", {
            groupUid: t.groupUid,
            facetUid: u.uid,
            selected: i
          });
        });
      }
    }
    return (r, a) => (c(), w(un, {
      class: "facets-list",
      legend: e.groupUid,
      type: e.type,
      options: l.value,
      compact: e.compact,
      "model-value": e.modelValue,
      "onUpdate:modelValue": o
    }, {
      default: k(({ option: u }) => [
        C(_(u.label) + " ", 1),
        u.count !== void 0 ? (c(), f("span", ja, "(" + _(u.count) + ")", 1)) : p("", !0)
      ]),
      _: 1
    }, 8, ["legend", "type", "options", "compact", "model-value"]));
  }
}, Ia = { class: "facets-filters" }, cm = {
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
    return (l, o) => (c(), f("div", Ia, [
      (c(!0), f(O, null, R(e.facets, (r) => (c(), w(Lt, {
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
        trigger: k(({ isOpen: a }) => [
          g(l.$slots, "groupTrigger", {
            group: r,
            isOpen: a
          }, () => [
            C(_(r.name), 1)
          ])
        ]),
        default: k(() => [
          x(ft, {
            children: r.children.slice(0, e.maxVisible),
            groupUid: r.uid,
            groupName: r.name,
            type: r.multiple ? "checkbox" : "radio",
            compact: e.compact,
            "model-value": n(r),
            onFacetChange: o[0] || (o[0] = (a) => t("facet-change", a))
          }, null, 8, ["children", "groupUid", "groupName", "type", "compact", "model-value"]),
          r.children.length > e.maxVisible ? (c(), w(Lt, {
            key: 0,
            class: m(["facets-filters__more-facets", e.classes.moreFacets])
          }, {
            trigger: k(({ isOpen: a }) => [
              C(_(a ? "View Less" : "Show More"), 1)
            ]),
            default: k(() => [
              x(ft, {
                children: r.children.slice(e.maxVisible),
                groupUid: r.uid,
                groupName: r.name,
                type: r.multiple ? "checkbox" : "radio",
                compact: e.compact,
                "model-value": n(r),
                onFacetChange: o[1] || (o[1] = (a) => t("facet-change", a))
              }, null, 8, ["children", "groupUid", "groupName", "type", "compact", "model-value"])
            ]),
            _: 2
          }, 1032, ["class"])) : p("", !0)
        ]),
        _: 2
      }, 1032, ["classes", "startOpen"]))), 128))
    ]));
  }
}, Ma = { class: "facets-filters" }, um = {
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
    return (l, o) => (c(), f("div", Ma, [
      (c(!0), f(O, null, R(e.facets, (r) => (c(), w(Vt, {
        key: r.uid,
        modifiers: e.accordionModifiers,
        startOpen: r.open
      }, {
        trigger: k(({ isOpen: a }) => [
          g(l.$slots, "groupTrigger", {
            group: r,
            isOpen: a
          }, () => [
            C(_(r.name), 1)
          ])
        ]),
        default: k(() => [
          x(ft, {
            children: r.children.slice(0, e.maxVisible),
            groupUid: r.uid,
            groupName: r.name,
            type: r.multiple ? "checkbox" : "radio",
            compact: e.compact,
            "model-value": n(r),
            onFacetChange: o[0] || (o[0] = (a) => t("facet-change", a))
          }, null, 8, ["children", "groupUid", "groupName", "type", "compact", "model-value"]),
          r.children.length > e.maxVisible ? (c(), w(Vt, {
            key: 0,
            class: m(["facets-filters__more-facets", e.classes.moreFacets]),
            modifiers: e.accordionModifiers
          }, {
            trigger: k(({ isOpen: a }) => [
              C(_(a ? "View Less" : "Show More"), 1)
            ]),
            default: k(() => [
              x(ft, {
                children: r.children.slice(e.maxVisible),
                groupUid: r.uid,
                groupName: r.name,
                type: r.multiple ? "checkbox" : "radio",
                compact: e.compact,
                "model-value": n(r),
                onFacetChange: o[1] || (o[1] = (a) => t("facet-change", a))
              }, null, 8, ["children", "groupUid", "groupName", "type", "compact", "model-value"])
            ]),
            _: 2
          }, 1032, ["class", "modifiers"])) : p("", !0)
        ]),
        _: 2
      }, 1032, ["modifiers", "startOpen"]))), 128))
    ]));
  }
}, dm = {
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
    const t = s, n = (a) => a.multiple ? a.children : [{ label: `All ${a.name}s`, uid: "" }, ...a.children], l = (a) => a.multiple ? a.children.filter((u) => u.selected).map((u) => u.uid) : a.children.find((u) => u.selected)?.uid || "", o = (a) => {
      const u = a.children.filter((d) => d.selected), i = u.length;
      return i === 0 ? "All" : a.multiple ? i === 1 ? u[0].label : `${i} selected` : u[0].label;
    };
    function r(a, u, i) {
      if (a.multiple) {
        const d = new Set(u);
        a.children.forEach((v) => {
          const y = d.has(v.uid);
          v.selected !== y && t("facet-change", {
            groupUid: a.uid,
            facetUid: v.uid,
            selected: y
          });
        });
      } else {
        const d = u;
        a.children.forEach((v) => {
          const y = v.uid === d;
          v.selected !== y && t("facet-change", {
            groupUid: a.uid,
            facetUid: v.uid,
            selected: y
          });
        }), i();
      }
    }
    return (a, u) => (c(), f("div", {
      class: m(e.classes.container)
    }, [
      (c(!0), f(O, null, R(e.facets, (i) => (c(), f("div", {
        key: i.uid,
        class: m(e.classes.group)
      }, [
        x(pt, {
          classes: {
            trigger: e.classes.trigger,
            content: e.classes.content
          }
        }, {
          trigger: k(() => [
            g(a.$slots, "trigger", {
              group: i,
              label: o(i)
            }, () => [
              h("span", null, [
                C(_(i.name) + ": ", 1),
                h("strong", null, _(o(i)), 1)
              ])
            ]),
            x(W, {
              class: m(e.classes.triggerIcon),
              icon: "fas fa-chevron-down"
            }, null, 8, ["class"])
          ]),
          default: k(({ close: d }) => [
            x(un, {
              legend: i.name,
              type: i.multiple ? "checkbox" : "radio",
              options: n(i),
              "model-value": l(i),
              "onUpdate:modelValue": (v) => r(i, v, d),
              hideInputs: e.hideInputs
            }, null, 8, ["legend", "type", "options", "model-value", "onUpdate:modelValue", "hideInputs"])
          ]),
          _: 2
        }, 1032, ["classes"])
      ], 2))), 128))
    ], 2));
  }
}, Fa = ["for"], Pa = ["id", "onChange"], za = { value: "" }, La = ["value", "selected"], fm = {
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
  setup(e, { emit: s }) {
    console.log(e);
    const n = s;
    function l(o, r) {
      const a = r.target.value;
      o.children.find((i) => i.selected)?.uid !== a && o.children.forEach((i) => {
        const d = i.uid === a;
        i.selected !== d && n("facet-change", {
          groupUid: o.uid,
          facetUid: i.uid,
          selected: d
        });
      });
    }
    return (o, r) => (c(), f("div", {
      class: m(["facets-dropdown-filters", e.classes.container])
    }, [
      (c(!0), f(O, null, R(e.facets, (a) => (c(), f("div", {
        class: m(["facets-dropdown-filters__group", e.classes.group]),
        key: a.uid
      }, [
        h("label", {
          for: `facet-dropdown-${a.uid}`,
          class: m(["facets-dropdown-filters__label", e.classes.label])
        }, [
          g(o.$slots, "label", {}, () => [
            C(_(a.name), 1)
          ])
        ], 10, Fa),
        h("select", {
          id: `facet-dropdown-${a.uid}`,
          class: m(["facets-dropdown-filters__select", e.classes.select]),
          onChange: (u) => l(a, u)
        }, [
          h("option", za, [
            g(o.$slots, "optionAll", { group: a }, () => [
              C(" All " + _(a.name) + "s ", 1)
            ])
          ]),
          (c(!0), f(O, null, R(a.children, (u, i) => (c(), f("option", {
            key: u.uid,
            value: u.uid,
            selected: u.selected
          }, [
            g(o.$slots, "option", {
              group: a,
              option: u,
              index: i
            }, () => [
              C(_(u.label), 1)
            ])
          ], 8, La))), 128))
        ], 42, Pa)
      ], 2))), 128))
    ], 2));
  }
}, Va = { class: "facets-header-layout" }, Ha = { class: "facets-header-layout__header" }, Na = { class: "facets-header-layout__main" }, hm = {
  __name: "UluFacetsHeaderLayout",
  setup(e) {
    return (s, t) => (c(), f("div", Va, [
      h("div", Ha, [
        g(s.$slots, "header")
      ]),
      h("div", Na, [
        g(s.$slots, "main")
      ])
    ]));
  }
}, Wa = { class: "facets-results" }, Da = {
  key: 1,
  class: "facets-results__empty"
}, mm = {
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
    return (s, t) => (c(), f("div", Wa, [
      e.items.length ? (c(), w(Ws, {
        key: 0,
        tag: e.tag,
        name: e.transitionName,
        class: m(["facets-results__list", e.classes.list])
      }, {
        default: k(() => [
          (c(!0), f(O, null, R(e.items, (n, l) => (c(), f("li", {
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
      }, 8, ["tag", "name", "class"])) : (c(), f("div", Da, [
        g(s.$slots, "empty", {}, () => [
          t[0] || (t[0] = h("p", null, "No matching items found.", -1))
        ])
      ]))
    ]));
  }
}, qa = ["for"], Xa = ["id", "placeholder"], gm = {
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
    const t = e, n = s, l = Q("facet-view-keyword"), o = S({
      get() {
        return t.modelValue;
      },
      set(r) {
        n("update:modelValue", r);
      }
    });
    return (r, a) => (c(), f("div", {
      class: m(["facets-search", e.classes.container])
    }, [
      h("label", {
        class: m(e.classes.label),
        for: $(l)
      }, [...a[1] || (a[1] = [
        h("strong", null, "Search", -1)
      ])], 10, qa),
      Fe(h("input", {
        id: $(l),
        class: m(e.classes.input),
        "onUpdate:modelValue": a[0] || (a[0] = (u) => o.value = u),
        type: "text",
        placeholder: e.placeholder
      }, null, 10, Xa), [
        [Vn, o.value]
      ])
    ], 2));
  }
}, Ga = { class: "facets-sidebar__header" }, Ya = { class: "facets-sidebar__mobile-controls" }, Ka = { class: "facets-sidebar__body" }, Ja = { class: "facets-sidebar__main" }, vm = {
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
    const s = B(!1), t = mt("uluIsMobile"), n = B(null), l = B(null), o = S(() => t.value ? l.value : n.value);
    return (r, a) => (c(), f("div", {
      class: m(["facets-sidebar", { "facets-sidebar--filters-hidden": $(t) }])
    }, [
      h("div", Ga, [
        g(r.$slots, "header")
      ]),
      Fe(h("div", Ya, [
        h("button", {
          class: m(e.classes.mobileButton),
          onClick: a[0] || (a[0] = (u) => s.value = !0)
        }, _(e.mobileButtonText), 3)
      ], 512), [
        [Mt, $(t)]
      ]),
      h("div", Ka, [
        Fe(h("div", {
          class: "facets-sidebar__sidebar",
          ref_key: "desktopTarget",
          ref: n
        }, null, 512), [
          [Mt, !$(t)]
        ]),
        h("div", Ja, [
          g(r.$slots, "main")
        ])
      ]),
      $(t) ? (c(), w(Ks, {
        key: 0,
        modelValue: s.value,
        "onUpdate:modelValue": a[1] || (a[1] = (u) => s.value = u),
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
      o.value ? (c(), w(gt, {
        key: 1,
        to: o.value
      }, [
        g(r.$slots, "sidebar")
      ], 8, ["to"])) : p("", !0)
    ], 2));
  }
}, Qa = ["for"], Za = ["value", "id"], ei = ["value"], ym = {
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
    const t = s, n = Q("ulu-facet-sort");
    return (l, o) => (c(), f("div", {
      class: m(["facets-sort", e.classes.container])
    }, [
      h("label", {
        for: $(n),
        class: m(e.classes.label)
      }, [
        g(l.$slots, "default", {}, () => [
          o[1] || (o[1] = C("Sort:", -1))
        ])
      ], 10, Qa),
      h("select", {
        value: e.modelValue,
        onChange: o[0] || (o[0] = (r) => t("update:modelValue", r.target.value)),
        id: $(n),
        class: m(e.classes.select)
      }, [
        (c(!0), f(O, null, R(e.sortTypes, (r, a) => (c(), f("option", {
          value: a,
          key: a
        }, _(r.text), 9, ei))), 128))
      ], 42, Za)
    ], 2));
  }
}, dn = Symbol(), fn = Symbol(), $t = Symbol(), ti = {
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
      [$t]: S(() => this.sections),
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
        r.forEach(({ target: a, isIntersecting: u }) => {
          const i = this.getSectionIndex(a), d = a.offsetTop, v = s[i], y = i === 0 && l > d, b = i === s.length - 1 && l < d;
          v && this.$nextTick(() => {
            u ? (t(v), v.active = !0) : (y && !n || b && v.active) && t(), this.$emit("section-change", {
              section: v,
              sections: s,
              active: u
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
}, si = { class: "scroll-anchors" };
function ni(e, s, t, n, l, o) {
  return c(), f("div", si, [
    g(e.$slots, "default")
  ]);
}
const pm = /* @__PURE__ */ j(ti, [["render", ni]]), oi = {
  name: "ScrollAnchorsNav",
  inject: {
    sections: { from: $t }
  },
  props: {
    element: {
      type: String,
      default: "nav"
    }
  }
}, li = ["href"];
function ri(e, s, t, n, l, o) {
  return o.sections.length ? (c(), w(F(t.element), {
    key: 0,
    class: "scroll-anchors__nav"
  }, {
    default: k(() => [
      h("ul", null, [
        (c(!0), f(O, null, R(o.sections, (r, a) => (c(), f("li", {
          key: a,
          class: m({ "is-active": r.active })
        }, [
          h("a", {
            class: m({ "is-active": r.active }),
            href: `#${r.titleId}`
          }, _(r.title), 11, li)
        ], 2))), 128))
      ])
    ]),
    _: 1
  })) : p("", !0);
}
const bm = /* @__PURE__ */ j(oi, [["render", ri]]), ai = {
  name: "ScrollAnchorsNavAnimated",
  inject: {
    sections: { from: $t }
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
      const n = e.findIndex((a) => a.active);
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
}, ii = { class: "scroll-anchors__rail" }, ci = ["href"];
function ui(e, s, t, n, l, o) {
  return o.sections.length ? (c(), w(F(t.element), {
    key: 0,
    class: "scroll-anchors__nav scroll-anchors__nav--animated"
  }, {
    default: k(() => [
      h("ul", ii, [
        (c(!0), f(O, null, R(o.sections, (r, a) => (c(), f("li", {
          key: a,
          class: m({ "is-active": r.active })
        }, [
          h("a", {
            class: m({ "is-active": r.active }),
            ref_for: !0,
            ref: (u) => o.addLinkRef(a, u),
            href: `#${r.titleId}`
          }, _(r.title), 11, ci)
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
const _m = /* @__PURE__ */ j(ai, [["render", ui]]), di = {
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
    sections: { from: $t, default: () => S(() => []) }
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
function fi(e, s, t, n, l, o) {
  return c(), f("div", {
    class: m([t.wrapperClass, { [t.activeClass]: t.activeClass && o.section?.active }]),
    ref: "element"
  }, [
    (c(), w(F(t.titleElement), {
      class: m(t.titleClass),
      id: l.titleId
    }, {
      default: k(() => [
        C(_(t.title), 1)
      ]),
      _: 1
    }, 8, ["class", "id"])),
    g(e.$slots, "default", { section: o.section })
  ], 2);
}
const wm = /* @__PURE__ */ j(di, [["render", fi]]), hi = {
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
    return (s, t) => (c(), f("span", {
      class: m(["skeleton skeleton--text", {
        "skeleton--inline": e.inline,
        "skeleton--background-alt": e.alt,
        [`skeleton--width-${e.width}`]: e.width
      }])
    }, null, 2));
  }
}, Sm = {
  __name: "UluShowSkeleton",
  props: {
    /**
     * If true will show whatever is passed to slot, else skeleton text
     */
    when: Boolean
  },
  setup(e) {
    return (s, t) => e.when ? (c(), w(hi, {
      key: 1,
      inline: ""
    })) : g(s.$slots, "default", { key: 0 });
  }
}, km = {
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
    const s = e, t = S(() => uo(s.lines, () => {
      const l = it(70, 100);
      let o = 0;
      const r = () => {
        const i = l - o, d = it(15, i);
        return o += d, d;
      }, a = [];
      for (; o < l - 15; )
        a.push(r());
      const u = () => a.reduce((i, d) => i + d, 0);
      for (; u() >= l && a.pop(); )
        ;
      return a.map((i) => ({ width: i, alt: Math.random() < 0.5 }));
    }));
    return (n, l) => (c(), f("div", null, [
      (c(!0), f(O, null, R(t.value, (o, r) => (c(), f("div", { key: r }, [
        (c(!0), f(O, null, R(o, (a) => (c(), f("span", {
          key: a,
          class: m(["skeleton skeleton--text skeleton--inline", { "skeleton--background-alt": a.alt }]),
          style: X({ width: `${a.width}%` })
        }, null, 6))), 128))
      ]))), 128))
    ]));
  }
}, mi = { class: "skeleton skeleton-block--media" }, $m = {
  __name: "UluSkeletonMedia",
  setup(e) {
    return (s, t) => (c(), f("div", mi, [
      x(W, { icon: "type:image" })
    ]));
  }
}, gi = {
  name: "SlideShow",
  emits: ["slide-change"],
  components: {
    UluIcon: W
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
}, vi = { class: "slideshow" }, yi = {
  class: "slideshow__control-context",
  ref: "context"
}, pi = {
  class: "slideshow__track-crop",
  ref: "crop"
}, bi = {
  class: "slideshow__track",
  ref: "track"
}, _i = ["tabindex"], wi = { class: "slideshow__controls" }, Si = { class: "slideshow__controls-item slideshow__controls-item--previous" }, ki = ["disabled"], $i = { class: "slideshow__controls-item slideshow__controls-item--next" }, Ci = ["disabled"], Ti = {
  key: 0,
  class: "slideshow__nav",
  ref: "nav"
}, Ai = ["onClick"], Oi = { class: "hidden-visually" };
function xi(e, s, t, n, l, o) {
  const r = K("UluIcon");
  return c(), f("div", vi, [
    h("div", yi, [
      h("div", pi, [
        h("ul", bi, [
          (c(!0), f(O, null, R(l.slides, (a, u) => (c(), f("li", {
            class: m(["slideshow__slide", { "is-active": a.active }]),
            key: u,
            tabindex: t.slideFocusable ? "0" : "-1",
            ref_for: !0,
            ref: (i) => {
              a.element = i;
            }
          }, [
            g(e.$slots, "slide", {
              item: a.item,
              index: u
            })
          ], 10, _i))), 128))
        ], 512)
      ], 512),
      h("ul", wi, [
        h("li", Si, [
          h("button", {
            class: "slideshow__control-button slideshow__control-button--previous",
            "aria-label": "Scroll Right",
            onClick: s[0] || (s[0] = (...a) => o.previous && o.previous(...a)),
            disabled: !o.canScrollLeft
          }, [
            x(r, {
              class: "slideshow__control-icon",
              icon: "type:previous"
            })
          ], 8, ki)
        ]),
        h("li", $i, [
          h("button", {
            class: "slideshow__control-button slideshow__control-button--next",
            "aria-label": "Scroll Left",
            onClick: s[1] || (s[1] = (...a) => o.next && o.next(...a)),
            disabled: !o.canScrollRight
          }, [
            x(r, {
              class: "slideshow__control-icon",
              icon: "type:next"
            })
          ], 8, Ci)
        ])
      ])
    ], 512),
    t.noNav ? p("", !0) : (c(), f("ul", Ti, [
      (c(!0), f(O, null, R(l.slides, (a, u) => (c(), f("li", {
        class: m(["slideshow__nav-item", { "is-active": a.active }]),
        ref_for: !0,
        ref: (i) => {
          a.navElement = i;
        },
        key: u
      }, [
        h("button", {
          class: m(["slideshow__nav-button", { "is-active": a.active }]),
          onClick: (i) => o.to(u)
        }, [
          g(e.$slots, "nav", {
            item: a.item,
            index: u,
            active: a.active
          }, () => [
            h("span", Oi, "Item " + _(u + 1), 1)
          ])
        ], 10, Ai)
      ], 2))), 128))
    ], 512))
  ]);
}
const Ui = /* @__PURE__ */ j(gi, [["render", xi]]), Bi = {
  name: "ImageSlideShow",
  components: {
    UluSlideShow: Ui
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
      const { offsetWidth: l, scrollLeft: o } = s, { offsetLeft: r, offsetWidth: a } = n, u = o + l, i = r + a;
      let d = null;
      console.log("left/right", o, u), t && n && (i > u ? d = o + (i - u) : r < o && (d = r), d !== null && s.scrollTo({ left: d, top: 0, behavior: "smooth" }));
    }
  }
}, Ri = ["src", "alt"], Ei = { class: "slideshow__image-actions" }, ji = ["src", "alt"];
function Ii(e, s, t, n, l, o) {
  const r = K("AppButton"), a = K("UluSlideShow");
  return c(), w(a, {
    class: "slideshow--images",
    items: t.images,
    onSlideChange: o.slideChange
  }, {
    slide: k(({ item: u }) => [
      h("img", {
        src: u.src,
        alt: u.alt
      }, null, 8, Ri),
      h("div", Ei, [
        t.selectButton ? (c(), w(r, {
          key: 0,
          class: "type-small",
          icon: "plus",
          small: "",
          iconBefore: ""
        }, {
          default: k(() => [...s[0] || (s[0] = [
            C(" Select ", -1)
          ])]),
          _: 1
        })) : p("", !0)
      ])
    ]),
    nav: k(({ index: u }) => [
      h("img", {
        src: t.images[u].src,
        alt: `View image ${u}`
      }, null, 8, ji)
    ]),
    _: 1
  }, 8, ["items", "onSlideChange"]);
}
const Cm = /* @__PURE__ */ j(Bi, [["render", Ii]]), Mi = {
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
function Fi(e, s, t, n, l, o) {
  return c(), f("li", {
    class: m(["slideshow__slide", { "is-active": t.active }])
  }, [
    g(e.$slots, "default")
  ], 2);
}
const Tm = /* @__PURE__ */ j(Mi, [["render", Fi]]), Pi = {
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
}, zi = ["id"], Li = ["innerHTML"];
function Vi(e, s, t, n, l, o) {
  return c(!0), f(O, null, R(t.rows, (r, a) => (c(), f("tr", {
    key: `br-${a}`,
    id: t.optionalAttr(t.isActual && r.id),
    class: m(t.resolveClasses(t.classes.row, { row: r.data, rowIndex: a, isActual: t.isActual, foot: t.foot })),
    style: X({
      height: r.height
    })
  }, [
    (c(!0), f(O, null, R(t.rowColumns, (u, i) => (c(), w(F(u.rowHeader ? "th" : "td"), {
      id: t.optionalAttr(t.isActual && u.rowHeader && u.getRowHeaderId(a)),
      scope: t.optionalAttr(t.isActual && u.rowHeader && "row"),
      key: `bc-${i}`,
      headers: t.optionalAttr(t.isActual && t.getCellHeaders(u, a)),
      class: m(t.resolveClasses(u.class, { column: u, index: i, isActual: t.isActual, row: r, rowIndex: a, foot: t.foot })),
      style: X({
        width: t.columnWidth
      })
    }, {
      default: k(() => [
        e.$slots[u.slot] ? g(e.$slots, u.slot, {
          key: 0,
          row: r.data,
          column: u,
          rowIndex: a,
          index: i,
          foot: t.foot,
          isActual: t.isActual
        }) : u.html ? (c(), f("div", {
          key: 1,
          innerHTML: t.value({ row: r, column: u, rowIndex: a, isActual: t.isActual, foot: t.foot })
        }, null, 8, Li)) : (c(), f(O, { key: 2 }, [
          C(_(t.value({ row: r, column: u, rowIndex: a, isActual: t.isActual, foot: t.foot })), 1)
        ], 64))
      ]),
      _: 2
    }, 1032, ["id", "scope", "headers", "class", "style"]))), 128))
  ], 14, zi))), 128);
}
const Hi = /* @__PURE__ */ j(Pi, [["render", Vi]]), Ni = {
  name: "UluTableStickyTable",
  components: {
    UluTableStickyRows: Hi
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
}, Wi = ["aria-hidden"], Di = {
  key: 0,
  class: "table-sticky__caption"
}, qi = ["id"], Xi = ["id", "rowspan", "colspan", "data-child-columns", "aria-sort", "scope", "headers"], Gi = ["innerHTML"], Yi = {
  class: "table-sticky__sort-icon",
  "aria-hidden": "true"
}, Ki = { class: "table-sticky__sort-icon-inner" }, Ji = ["innerHTML"], Qi = { key: 1 }, Zi = { key: 2 };
function ec(e, s, t, n, l, o) {
  const r = K("UluTableStickyRows");
  return c(), f("table", {
    class: m(t.resolveClasses(t.classes.table, { isActual: t.isActual })),
    "aria-hidden": t.isActual ? "false" : "true"
  }, [
    t.caption ? (c(), f("caption", Di, _(t.caption), 1)) : p("", !0),
    h("thead", null, [
      (c(!0), f(O, null, R(t.headerRows, (a, u) => (c(), f("tr", {
        key: `hr-${u}`,
        id: o.optionalAttr(t.isActual && a.id),
        class: m(t.resolveClasses(t.classes.rowHeader, { row: a, rowIndex: u, isActual: t.isActual })),
        style: X({
          height: a.height
        })
      }, [
        (c(!0), f(O, null, R(a.columns, (i, d) => (c(), f("th", {
          key: `hc-${d}`,
          id: o.optionalAttr(t.isActual && i.id),
          rowspan: i.rowspan,
          colspan: i.colspan,
          "data-child-columns": i.columns && i.columns.length,
          class: m([
            {
              "sort-active": i.sortApplied,
              "sort-ascending": i.sortApplied && i.sortAscending,
              "sort-descending": i.sortApplied && !i.sortAscending
            },
            t.resolveClasses(i.classHeader, { column: i, index: d, isActual: t.isActual })
          ]),
          style: X({
            width: i.width
          }),
          "aria-sort": i.sort ? i.sortAscending ? "ascending" : "descending" : null,
          scope: o.optionalAttr(t.isActual && (i.colspan > 1 ? "colgroup" : "col")),
          headers: o.optionalAttr(t.isActual && o.getHeaderHeaders(i, u)),
          ref_for: !0,
          ref: (v) => o.addHeaderRef(i, v)
        }, [
          i.sortable ? (c(), w(F(t.isActual ? "button" : "div"), {
            key: 0,
            class: m(["table-sticky__sort-button", {
              "table-sticky__sort-button--focused": i.sortFocused
            }]),
            onClick: (v) => e.$emit("column-sorted", i),
            onFocus: (v) => o.handleSortFocus(i, !0),
            onBlur: (v) => o.handleSortFocus(i, !1),
            "aria-pressed": i.sortApplied ? "true" : "false"
          }, {
            default: k(() => [
              e.$slots[i.slotHeader] ? g(e.$slots, i.slotHeader, {
                key: 0,
                isActual: t.isActual,
                column: i,
                index: d
              }) : i.htmlTitle ? (c(), f("div", {
                key: 1,
                innerHTML: t.getColumnTitle({ column: i, index: d, isActual: t.isActual })
              }, null, 8, Gi)) : (c(), f(O, { key: 2 }, [
                C(_(t.getColumnTitle({ column: i, index: d, isActual: t.isActual })), 1)
              ], 64)),
              h("span", Yi, [
                h("span", Ki, [
                  g(e.$slots, "sortIcon", {}, () => [
                    s[0] || (s[0] = C("▼", -1))
                  ])
                ])
              ])
            ]),
            _: 2
          }, 1064, ["class", "onClick", "onFocus", "onBlur", "aria-pressed"])) : (c(), f(O, { key: 1 }, [
            e.$slots[i.slotHeader] ? g(e.$slots, i.slotHeader, {
              key: 0,
              isActual: t.isActual,
              column: i,
              index: d
            }) : i.htmlTitle ? (c(), f("div", {
              key: 1,
              innerHTML: t.getColumnTitle({ column: i, index: d, isActual: t.isActual })
            }, null, 8, Ji)) : (c(), f(O, { key: 2 }, [
              C(_(t.getColumnTitle({ column: i, index: d, isActual: t.isActual })), 1)
            ], 64))
          ], 64))
        ], 14, Xi))), 128))
      ], 14, qi))), 128))
    ]),
    t.rows ? (c(), f("tbody", Qi, [
      x(r, {
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
        R(e.$slots, (a, u) => ({
          name: u,
          fn: k((i) => [
            g(e.$slots, u, ce(ge(i)))
          ])
        }))
      ]), 1032, ["rows", "rowColumns", "optionalAttr", "resolveClasses", "getCellHeaders", "isActual", "columnWidth", "classes", "value"])
    ])) : p("", !0),
    t.footerRows ? (c(), f("tfoot", Zi, [
      x(r, {
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
        R(e.$slots, (a, u) => ({
          name: u,
          fn: k((i) => [
            g(e.$slots, u, ce(ge(i)))
          ])
        }))
      ]), 1032, ["rows", "rowColumns", "optionalAttr", "resolveClasses", "getCellHeaders", "isActual", "columnWidth", "classes", "value"])
    ])) : p("", !0)
  ], 10, Wi);
}
const tc = /* @__PURE__ */ j(Ni, [["render", ec]]);
function sc() {
  this.__data__ = [], this.size = 0;
}
function hn(e, s) {
  return e === s || e !== e && s !== s;
}
function Ct(e, s) {
  for (var t = e.length; t--; )
    if (hn(e[t][0], s))
      return t;
  return -1;
}
var nc = Array.prototype, oc = nc.splice;
function lc(e) {
  var s = this.__data__, t = Ct(s, e);
  if (t < 0)
    return !1;
  var n = s.length - 1;
  return t == n ? s.pop() : oc.call(s, t, 1), --this.size, !0;
}
function rc(e) {
  var s = this.__data__, t = Ct(s, e);
  return t < 0 ? void 0 : s[t][1];
}
function ac(e) {
  return Ct(this.__data__, e) > -1;
}
function ic(e, s) {
  var t = this.__data__, n = Ct(t, e);
  return n < 0 ? (++this.size, t.push([e, s])) : t[n][1] = s, this;
}
function _e(e) {
  var s = -1, t = e == null ? 0 : e.length;
  for (this.clear(); ++s < t; ) {
    var n = e[s];
    this.set(n[0], n[1]);
  }
}
_e.prototype.clear = sc;
_e.prototype.delete = lc;
_e.prototype.get = rc;
_e.prototype.has = ac;
_e.prototype.set = ic;
function cc() {
  this.__data__ = new _e(), this.size = 0;
}
function uc(e) {
  var s = this.__data__, t = s.delete(e);
  return this.size = s.size, t;
}
function dc(e) {
  return this.__data__.get(e);
}
function fc(e) {
  return this.__data__.has(e);
}
var mn = typeof global == "object" && global && global.Object === Object && global, hc = typeof self == "object" && self && self.Object === Object && self, ve = mn || hc || Function("return this")(), ze = ve.Symbol, gn = Object.prototype, mc = gn.hasOwnProperty, gc = gn.toString, We = ze ? ze.toStringTag : void 0;
function vc(e) {
  var s = mc.call(e, We), t = e[We];
  try {
    e[We] = void 0;
    var n = !0;
  } catch {
  }
  var l = gc.call(e);
  return n && (s ? e[We] = t : delete e[We]), l;
}
var yc = Object.prototype, pc = yc.toString;
function bc(e) {
  return pc.call(e);
}
var _c = "[object Null]", wc = "[object Undefined]", ys = ze ? ze.toStringTag : void 0;
function tt(e) {
  return e == null ? e === void 0 ? wc : _c : ys && ys in Object(e) ? vc(e) : bc(e);
}
function Tt(e) {
  var s = typeof e;
  return e != null && (s == "object" || s == "function");
}
var Sc = "[object AsyncFunction]", kc = "[object Function]", $c = "[object GeneratorFunction]", Cc = "[object Proxy]";
function vn(e) {
  if (!Tt(e))
    return !1;
  var s = tt(e);
  return s == kc || s == $c || s == Sc || s == Cc;
}
var Et = ve["__core-js_shared__"], ps = function() {
  var e = /[^.]+$/.exec(Et && Et.keys && Et.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function Tc(e) {
  return !!ps && ps in e;
}
var Ac = Function.prototype, Oc = Ac.toString;
function Be(e) {
  if (e != null) {
    try {
      return Oc.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var xc = /[\\^$.*+?()[\]{}|]/g, Uc = /^\[object .+?Constructor\]$/, Bc = Function.prototype, Rc = Object.prototype, Ec = Bc.toString, jc = Rc.hasOwnProperty, Ic = RegExp(
  "^" + Ec.call(jc).replace(xc, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Mc(e) {
  if (!Tt(e) || Tc(e))
    return !1;
  var s = vn(e) ? Ic : Uc;
  return s.test(Be(e));
}
function Fc(e, s) {
  return e?.[s];
}
function Re(e, s) {
  var t = Fc(e, s);
  return Mc(t) ? t : void 0;
}
var Ze = Re(ve, "Map"), et = Re(Object, "create");
function Pc() {
  this.__data__ = et ? et(null) : {}, this.size = 0;
}
function zc(e) {
  var s = this.has(e) && delete this.__data__[e];
  return this.size -= s ? 1 : 0, s;
}
var Lc = "__lodash_hash_undefined__", Vc = Object.prototype, Hc = Vc.hasOwnProperty;
function Nc(e) {
  var s = this.__data__;
  if (et) {
    var t = s[e];
    return t === Lc ? void 0 : t;
  }
  return Hc.call(s, e) ? s[e] : void 0;
}
var Wc = Object.prototype, Dc = Wc.hasOwnProperty;
function qc(e) {
  var s = this.__data__;
  return et ? s[e] !== void 0 : Dc.call(s, e);
}
var Xc = "__lodash_hash_undefined__";
function Gc(e, s) {
  var t = this.__data__;
  return this.size += this.has(e) ? 0 : 1, t[e] = et && s === void 0 ? Xc : s, this;
}
function xe(e) {
  var s = -1, t = e == null ? 0 : e.length;
  for (this.clear(); ++s < t; ) {
    var n = e[s];
    this.set(n[0], n[1]);
  }
}
xe.prototype.clear = Pc;
xe.prototype.delete = zc;
xe.prototype.get = Nc;
xe.prototype.has = qc;
xe.prototype.set = Gc;
function Yc() {
  this.size = 0, this.__data__ = {
    hash: new xe(),
    map: new (Ze || _e)(),
    string: new xe()
  };
}
function Kc(e) {
  var s = typeof e;
  return s == "string" || s == "number" || s == "symbol" || s == "boolean" ? e !== "__proto__" : e === null;
}
function At(e, s) {
  var t = e.__data__;
  return Kc(s) ? t[typeof s == "string" ? "string" : "hash"] : t.map;
}
function Jc(e) {
  var s = At(this, e).delete(e);
  return this.size -= s ? 1 : 0, s;
}
function Qc(e) {
  return At(this, e).get(e);
}
function Zc(e) {
  return At(this, e).has(e);
}
function eu(e, s) {
  var t = At(this, e), n = t.size;
  return t.set(e, s), this.size += t.size == n ? 0 : 1, this;
}
function He(e) {
  var s = -1, t = e == null ? 0 : e.length;
  for (this.clear(); ++s < t; ) {
    var n = e[s];
    this.set(n[0], n[1]);
  }
}
He.prototype.clear = Yc;
He.prototype.delete = Jc;
He.prototype.get = Qc;
He.prototype.has = Zc;
He.prototype.set = eu;
var tu = 200;
function su(e, s) {
  var t = this.__data__;
  if (t instanceof _e) {
    var n = t.__data__;
    if (!Ze || n.length < tu - 1)
      return n.push([e, s]), this.size = ++t.size, this;
    t = this.__data__ = new He(n);
  }
  return t.set(e, s), this.size = t.size, this;
}
function Ne(e) {
  var s = this.__data__ = new _e(e);
  this.size = s.size;
}
Ne.prototype.clear = cc;
Ne.prototype.delete = uc;
Ne.prototype.get = dc;
Ne.prototype.has = fc;
Ne.prototype.set = su;
function nu(e, s) {
  for (var t = -1, n = e == null ? 0 : e.length; ++t < n && s(e[t], t, e) !== !1; )
    ;
  return e;
}
var bs = function() {
  try {
    var e = Re(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}();
function ou(e, s, t) {
  s == "__proto__" && bs ? bs(e, s, {
    configurable: !0,
    enumerable: !0,
    value: t,
    writable: !0
  }) : e[s] = t;
}
var lu = Object.prototype, ru = lu.hasOwnProperty;
function au(e, s, t) {
  var n = e[s];
  (!(ru.call(e, s) && hn(n, t)) || t === void 0 && !(s in e)) && ou(e, s, t);
}
function iu(e, s) {
  for (var t = -1, n = Array(e); ++t < e; )
    n[t] = s(t);
  return n;
}
function st(e) {
  return e != null && typeof e == "object";
}
var cu = "[object Arguments]";
function _s(e) {
  return st(e) && tt(e) == cu;
}
var yn = Object.prototype, uu = yn.hasOwnProperty, du = yn.propertyIsEnumerable, fu = _s(/* @__PURE__ */ function() {
  return arguments;
}()) ? _s : function(e) {
  return st(e) && uu.call(e, "callee") && !du.call(e, "callee");
}, rs = Array.isArray;
function hu() {
  return !1;
}
var pn = typeof exports == "object" && exports && !exports.nodeType && exports, ws = pn && typeof module == "object" && module && !module.nodeType && module, mu = ws && ws.exports === pn, Ss = mu ? ve.Buffer : void 0, gu = Ss ? Ss.isBuffer : void 0, bn = gu || hu, vu = 9007199254740991, yu = /^(?:0|[1-9]\d*)$/;
function pu(e, s) {
  var t = typeof e;
  return s = s ?? vu, !!s && (t == "number" || t != "symbol" && yu.test(e)) && e > -1 && e % 1 == 0 && e < s;
}
var bu = 9007199254740991;
function _n(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= bu;
}
var _u = "[object Arguments]", wu = "[object Array]", Su = "[object Boolean]", ku = "[object Date]", $u = "[object Error]", Cu = "[object Function]", Tu = "[object Map]", Au = "[object Number]", Ou = "[object Object]", xu = "[object RegExp]", Uu = "[object Set]", Bu = "[object String]", Ru = "[object WeakMap]", Eu = "[object ArrayBuffer]", ju = "[object DataView]", Iu = "[object Float32Array]", Mu = "[object Float64Array]", Fu = "[object Int8Array]", Pu = "[object Int16Array]", zu = "[object Int32Array]", Lu = "[object Uint8Array]", Vu = "[object Uint8ClampedArray]", Hu = "[object Uint16Array]", Nu = "[object Uint32Array]", H = {};
H[Iu] = H[Mu] = H[Fu] = H[Pu] = H[zu] = H[Lu] = H[Vu] = H[Hu] = H[Nu] = !0;
H[_u] = H[wu] = H[Eu] = H[Su] = H[ju] = H[ku] = H[$u] = H[Cu] = H[Tu] = H[Au] = H[Ou] = H[xu] = H[Uu] = H[Bu] = H[Ru] = !1;
function Wu(e) {
  return st(e) && _n(e.length) && !!H[tt(e)];
}
function as(e) {
  return function(s) {
    return e(s);
  };
}
var wn = typeof exports == "object" && exports && !exports.nodeType && exports, Ge = wn && typeof module == "object" && module && !module.nodeType && module, Du = Ge && Ge.exports === wn, jt = Du && mn.process, Le = function() {
  try {
    var e = Ge && Ge.require && Ge.require("util").types;
    return e || jt && jt.binding && jt.binding("util");
  } catch {
  }
}(), ks = Le && Le.isTypedArray, qu = ks ? as(ks) : Wu, Xu = Object.prototype, Gu = Xu.hasOwnProperty;
function Yu(e, s) {
  var t = rs(e), n = !t && fu(e), l = !t && !n && bn(e), o = !t && !n && !l && qu(e), r = t || n || l || o, a = r ? iu(e.length, String) : [], u = a.length;
  for (var i in e)
    Gu.call(e, i) && !(r && // Safari 9 has enumerable `arguments.length` in strict mode.
    (i == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    l && (i == "offset" || i == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    o && (i == "buffer" || i == "byteLength" || i == "byteOffset") || // Skip index properties.
    pu(i, u))) && a.push(i);
  return a;
}
var Ku = Object.prototype;
function Sn(e) {
  var s = e && e.constructor, t = typeof s == "function" && s.prototype || Ku;
  return e === t;
}
function kn(e, s) {
  return function(t) {
    return e(s(t));
  };
}
var Ju = kn(Object.keys, Object), Qu = Object.prototype, Zu = Qu.hasOwnProperty;
function ed(e) {
  if (!Sn(e))
    return Ju(e);
  var s = [];
  for (var t in Object(e))
    Zu.call(e, t) && t != "constructor" && s.push(t);
  return s;
}
function td(e) {
  return e != null && _n(e.length) && !vn(e);
}
function sd(e) {
  return td(e) ? Yu(e) : ed(e);
}
var $n = typeof exports == "object" && exports && !exports.nodeType && exports, $s = $n && typeof module == "object" && module && !module.nodeType && module, nd = $s && $s.exports === $n, Cs = nd ? ve.Buffer : void 0;
Cs && Cs.allocUnsafe;
function od(e, s) {
  return e.slice();
}
function ld(e, s) {
  for (var t = -1, n = e == null ? 0 : e.length, l = 0, o = []; ++t < n; ) {
    var r = e[t];
    s(r, t, e) && (o[l++] = r);
  }
  return o;
}
function rd() {
  return [];
}
var ad = Object.prototype, id = ad.propertyIsEnumerable, Ts = Object.getOwnPropertySymbols, cd = Ts ? function(e) {
  return e == null ? [] : (e = Object(e), ld(Ts(e), function(s) {
    return id.call(e, s);
  }));
} : rd;
function ud(e, s) {
  for (var t = -1, n = s.length, l = e.length; ++t < n; )
    e[l + t] = s[t];
  return e;
}
var dd = kn(Object.getPrototypeOf, Object);
function fd(e, s, t) {
  var n = s(e);
  return rs(e) ? n : ud(n, t(e));
}
function hd(e) {
  return fd(e, sd, cd);
}
var Nt = Re(ve, "DataView"), Wt = Re(ve, "Promise"), Dt = Re(ve, "Set"), qt = Re(ve, "WeakMap"), As = "[object Map]", md = "[object Object]", Os = "[object Promise]", xs = "[object Set]", Us = "[object WeakMap]", Bs = "[object DataView]", gd = Be(Nt), vd = Be(Ze), yd = Be(Wt), pd = Be(Dt), bd = Be(qt), pe = tt;
(Nt && pe(new Nt(new ArrayBuffer(1))) != Bs || Ze && pe(new Ze()) != As || Wt && pe(Wt.resolve()) != Os || Dt && pe(new Dt()) != xs || qt && pe(new qt()) != Us) && (pe = function(e) {
  var s = tt(e), t = s == md ? e.constructor : void 0, n = t ? Be(t) : "";
  if (n)
    switch (n) {
      case gd:
        return Bs;
      case vd:
        return As;
      case yd:
        return Os;
      case pd:
        return xs;
      case bd:
        return Us;
    }
  return s;
});
var _d = Object.prototype, wd = _d.hasOwnProperty;
function Sd(e) {
  var s = e.length, t = new e.constructor(s);
  return s && typeof e[0] == "string" && wd.call(e, "index") && (t.index = e.index, t.input = e.input), t;
}
var Rs = ve.Uint8Array;
function is(e) {
  var s = new e.constructor(e.byteLength);
  return new Rs(s).set(new Rs(e)), s;
}
function kd(e, s) {
  var t = is(e.buffer);
  return new e.constructor(t, e.byteOffset, e.byteLength);
}
var $d = /\w*$/;
function Cd(e) {
  var s = new e.constructor(e.source, $d.exec(e));
  return s.lastIndex = e.lastIndex, s;
}
var Es = ze ? ze.prototype : void 0, js = Es ? Es.valueOf : void 0;
function Td(e) {
  return js ? Object(js.call(e)) : {};
}
function Ad(e, s) {
  var t = is(e.buffer);
  return new e.constructor(t, e.byteOffset, e.length);
}
var Od = "[object Boolean]", xd = "[object Date]", Ud = "[object Map]", Bd = "[object Number]", Rd = "[object RegExp]", Ed = "[object Set]", jd = "[object String]", Id = "[object Symbol]", Md = "[object ArrayBuffer]", Fd = "[object DataView]", Pd = "[object Float32Array]", zd = "[object Float64Array]", Ld = "[object Int8Array]", Vd = "[object Int16Array]", Hd = "[object Int32Array]", Nd = "[object Uint8Array]", Wd = "[object Uint8ClampedArray]", Dd = "[object Uint16Array]", qd = "[object Uint32Array]";
function Xd(e, s, t) {
  var n = e.constructor;
  switch (s) {
    case Md:
      return is(e);
    case Od:
    case xd:
      return new n(+e);
    case Fd:
      return kd(e);
    case Pd:
    case zd:
    case Ld:
    case Vd:
    case Hd:
    case Nd:
    case Wd:
    case Dd:
    case qd:
      return Ad(e);
    case Ud:
      return new n();
    case Bd:
    case jd:
      return new n(e);
    case Rd:
      return Cd(e);
    case Ed:
      return new n();
    case Id:
      return Td(e);
  }
}
var Is = Object.create, Gd = /* @__PURE__ */ function() {
  function e() {
  }
  return function(s) {
    if (!Tt(s))
      return {};
    if (Is)
      return Is(s);
    e.prototype = s;
    var t = new e();
    return e.prototype = void 0, t;
  };
}();
function Yd(e) {
  return typeof e.constructor == "function" && !Sn(e) ? Gd(dd(e)) : {};
}
var Kd = "[object Map]";
function Jd(e) {
  return st(e) && pe(e) == Kd;
}
var Ms = Le && Le.isMap, Qd = Ms ? as(Ms) : Jd, Zd = "[object Set]";
function ef(e) {
  return st(e) && pe(e) == Zd;
}
var Fs = Le && Le.isSet, tf = Fs ? as(Fs) : ef, Cn = "[object Arguments]", sf = "[object Array]", nf = "[object Boolean]", of = "[object Date]", lf = "[object Error]", Tn = "[object Function]", rf = "[object GeneratorFunction]", af = "[object Map]", cf = "[object Number]", An = "[object Object]", uf = "[object RegExp]", df = "[object Set]", ff = "[object String]", hf = "[object Symbol]", mf = "[object WeakMap]", gf = "[object ArrayBuffer]", vf = "[object DataView]", yf = "[object Float32Array]", pf = "[object Float64Array]", bf = "[object Int8Array]", _f = "[object Int16Array]", wf = "[object Int32Array]", Sf = "[object Uint8Array]", kf = "[object Uint8ClampedArray]", $f = "[object Uint16Array]", Cf = "[object Uint32Array]", L = {};
L[Cn] = L[sf] = L[gf] = L[vf] = L[nf] = L[of] = L[yf] = L[pf] = L[bf] = L[_f] = L[wf] = L[af] = L[cf] = L[An] = L[uf] = L[df] = L[ff] = L[hf] = L[Sf] = L[kf] = L[$f] = L[Cf] = !0;
L[lf] = L[Tn] = L[mf] = !1;
function at(e, s, t, n, l, o) {
  var r;
  if (r !== void 0)
    return r;
  if (!Tt(e))
    return e;
  var a = rs(e);
  if (a)
    r = Sd(e);
  else {
    var u = pe(e), i = u == Tn || u == rf;
    if (bn(e))
      return od(e);
    if (u == An || u == Cn || i && !l)
      r = i ? {} : Yd(e);
    else {
      if (!L[u])
        return l ? e : {};
      r = Xd(e, u);
    }
  }
  o || (o = new Ne());
  var d = o.get(e);
  if (d)
    return d;
  o.set(e, r), tf(e) ? e.forEach(function(b) {
    r.add(at(b, s, t, b, e, o));
  }) : Qd(e) && e.forEach(function(b, A) {
    r.set(A, at(b, s, t, A, e, o));
  });
  var v = hd, y = a ? void 0 : v(e);
  return nu(y || e, function(b, A) {
    y && (A = b, b = e[A]), au(r, A, at(b, s, t, A, e, o));
  }), r;
}
var Tf = 1, Af = 4;
function Of(e) {
  return at(e, Tf | Af);
}
const It = (e) => e.every((s) => typeof s == "object"), Ps = !0, On = () => window.innerWidth;
let zs = On();
const xf = {
  name: "UluTableSticky",
  components: {
    UluTableStickyTable: tc
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
      validator: It,
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
      validator: It
      // required
    },
    /**
     * Array of rows for footer (tfoot)
     */
    footerRows: {
      type: Array,
      validator: It
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
      resizeHandler: Gt(this.onResize.bind(this), 500, !0),
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
        l.getRowHeaders = (a) => r.map((u) => u(a)).join(" "), l.rowHeader && (l.getRowHeaderId = (a) => `${this.idPrefix}-rh-${a}-${o}`, n.push(l.getRowHeaderId));
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
      const e = this.idCreator("c"), s = Of(this.columns), t = (n, l) => {
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
      function o(r, a) {
        const u = a.columns;
        u && u.forEach((i) => o(1 + r, i)), a.rowspan = u ? 1 : t - r, a.colspan = u ? u.reduce((i, d) => i + d.colspan, 0) : 1, l[r].columns.push(a);
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
}, Uf = { class: "table-sticky__sticky-wrap table-sticky__sticky-wrap--header" }, Bf = { class: "table-sticky__header-wrap" }, Rf = { class: "table-sticky__sticky-wrap table-sticky__sticky-wrap--first-column-header" }, Ef = { class: "table-sticky__sticky-wrap table-sticky__sticky-wrap--controls" }, jf = {
  key: 2,
  class: "table-sticky__controls-inner"
}, If = ["disabled"], Mf = ["disabled"], Ff = {
  ref: "display",
  class: "table-sticky__display"
};
function Pf(e, s, t, n, l, o) {
  const r = K("UluTableStickyTable");
  return c(), f("div", {
    class: m(["table-sticky", {
      "table-sticky--overflown-x": l.overflownX,
      "table-sticky--can-scroll-right": l.canScrollRight,
      "table-sticky--can-scroll-left": l.canScrollLeft
    }])
  }, [
    h("div", Uf, [
      h("div", Bf, [
        x(r, {
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
          R(e.$slots, (a, u) => ({
            name: u,
            fn: k((i) => [
              g(e.$slots, u, ce(ge(i)))
            ])
          }))
        ]), 1032, ["classes", "caption", "resolveClasses", "getColumnTitle", "idPrefix", "headerRows", "style", "onColumnSorted"])
      ])
    ]),
    h("div", Rf, [
      t.firstColumnSticky ? (c(), w(r, {
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
        R(e.$slots, (a, u) => ({
          name: u,
          fn: k((i) => [
            g(e.$slots, u, ce(ge(i)))
          ])
        }))
      ]), 1032, ["classes", "caption", "resolveClasses", "getColumnTitle", "idPrefix", "headerRows", "style", "onColumnSorted"])) : p("", !0)
    ]),
    h("div", Ef, [
      Fe(h("div", {
        class: m(["table-sticky__controls", o.resolveClasses(t.classes.controls)]),
        ref: "controls"
      }, [
        e.$slots.controls ? g(e.$slots, "controls", {
          key: 0,
          scrollLeft: o.scrollLeft,
          scrollRight: o.scrollRight,
          canScrollLeft: l.canScrollLeft,
          canScrollRight: l.canScrollRight
        }) : t.controlsComponent ? (c(), w(F(t.controlsComponent), {
          key: 1,
          scrollLeft: o.scrollLeft,
          scrollRight: o.scrollRight,
          canScrollLeft: l.canScrollLeft,
          canScrollRight: l.canScrollRight
        }, null, 8, ["scrollLeft", "scrollRight", "canScrollLeft", "canScrollRight"])) : (c(), f("div", jf, [
          h("button", {
            class: m(["table-sticky__control table-sticky__control--left", o.resolveClasses(t.classes.controlButton)]),
            "aria-label": "Scroll Left",
            onClick: s[0] || (s[0] = (...a) => o.scrollLeft && o.scrollLeft(...a)),
            disabled: !l.canScrollLeft
          }, [
            g(e.$slots, "controlLeft", {}, () => [
              s[2] || (s[2] = C(" ← ", -1))
            ])
          ], 10, If),
          h("button", {
            class: m(["table-sticky__control table-sticky__control--right", o.resolveClasses(t.classes.controlButton)]),
            "aria-label": "Scroll Right",
            onClick: s[1] || (s[1] = (...a) => o.scrollRight && o.scrollRight(...a)),
            disabled: !l.canScrollRight
          }, [
            g(e.$slots, "controlRight", {}, () => [
              s[3] || (s[3] = C(" → ", -1))
            ])
          ], 10, Mf)
        ]))
      ], 2), [
        [Mt, o.controlsShown]
      ])
    ]),
    h("div", Ff, [
      x(r, {
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
        R(e.$slots, (a, u) => ({
          name: u,
          fn: k((i) => [
            g(e.$slots, u, ce(ge(i)))
          ])
        }))
      ]), 1032, ["classes", "resolveClasses", "headerRows", "rows", "footerRows", "rowColumns", "caption", "idPrefix", "getRowValue", "getColumnTitle", "onVnodeMounted", "onActualHeaderRemoved", "onActualHeaderAdded", "onColumnSorted"])
    ], 512),
    t.firstColumnSticky ? (c(), w(r, {
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
      R(e.$slots, (a, u) => ({
        name: u,
        fn: k((i) => [
          g(e.$slots, u, ce(ge(i)))
        ])
      }))
    ]), 1032, ["classes", "resolveClasses", "caption", "headerRows", "columnWidth", "rows", "footerRows", "rowColumns", "idPrefix", "getRowValue", "getColumnTitle", "style", "onColumnSorted"])) : p("", !0)
  ], 2);
}
const Am = /* @__PURE__ */ j(xf, [["render", Pf]]), Om = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  dom: _o,
  router: Cl
}, Symbol.toStringTag, { value: "Module" }));
export {
  Vt as UluAccordion,
  ih as UluAccordionGroup,
  Nh as UluAdaptiveLayout,
  ph as UluAlert,
  om as UluAnimateNumber,
  zl as UluBadge,
  bh as UluBadgeStack,
  Xh as UluBreadcrumb,
  Bl as UluButton,
  _h as UluButtonVerbose,
  wh as UluCallout,
  Sh as UluCard,
  Lt as UluCollapsible,
  Jh as UluConditionalText,
  na as UluConditionalWrapper,
  Wh as UluDataGrid,
  kh as UluDefinitionList,
  ch as UluDropdown,
  Qh as UluEmpty,
  Zh as UluEmptyView,
  $h as UluExternalLink,
  im as UluFacetsActiveFilters,
  um as UluFacetsFilterAccordions,
  cm as UluFacetsFilterLists,
  dm as UluFacetsFilterPopovers,
  fm as UluFacetsFilterSelects,
  hm as UluFacetsHeaderLayout,
  ft as UluFacetsList,
  mm as UluFacetsResults,
  gm as UluFacetsSearch,
  vm as UluFacetsSidebarLayout,
  ym as UluFacetsSort,
  xh as UluFileDisplay,
  Ih as UluForm,
  Mh as UluFormActions,
  Fh as UluFormCheckbox,
  Ph as UluFormFieldset,
  Uh as UluFormFile,
  zh as UluFormItem,
  Lh as UluFormItemsInline,
  Bh as UluFormMessage,
  Vh as UluFormRadio,
  Ve as UluFormRequiredChar,
  Rh as UluFormSelect,
  Eh as UluFormText,
  Hh as UluFormTextarea,
  W as UluIcon,
  Cm as UluImageSlideShow,
  Ch as UluList,
  Th as UluMain,
  ln as UluMenu,
  dl as UluMenuStack,
  Ks as UluModal,
  Gh as UluNavStrip,
  fh as UluOverflowPopover,
  Yh as UluPager,
  em as UluPlaceholderImage,
  tm as UluPlaceholderText,
  lm as UluProgressBar,
  rm as UluProgressCircle,
  sm as UluRouteAnnouncer,
  Ah as UluRule,
  nm as UluSanityRichText,
  pm as UluScrollAnchors,
  bm as UluScrollAnchorsNav,
  _m as UluScrollAnchorsNavAnimated,
  wm as UluScrollAnchorsSection,
  jh as UluSearchForm,
  un as UluSelectableMenu,
  Sm as UluShowSkeleton,
  km as UluSkeletonContent,
  $m as UluSkeletonMedia,
  hi as UluSkeletonText,
  Kh as UluSkipLink,
  Ui as UluSlideShow,
  Tm as UluSlideShowSlide,
  Oh as UluSpokeSpinner,
  hh as UluTab,
  mh as UluTabGroup,
  gh as UluTabList,
  vh as UluTabPanel,
  yh as UluTabPanels,
  Am as UluTableSticky,
  Hi as UluTableStickyRows,
  tc as UluTableStickyTable,
  on as UluTag,
  Dh as UluTitleRail,
  qh as UluWhenBreakpoint,
  ah as breakpointsPlugin,
  th as corePlugin,
  lh as modalsPlugin,
  oh as popoversPlugin,
  rh as toastPlugin,
  qo as useBreakpointManager,
  dh as useDocumentTitle,
  am as useFacets,
  Oo as useIcon,
  ue as useModifiers,
  uh as usePagination,
  Ce as useRequiredInject,
  sh as useTooltip,
  nh as useTooltipFollow,
  Gs as useUluFloating,
  hl as useWindowResize,
  Om as utils
};
