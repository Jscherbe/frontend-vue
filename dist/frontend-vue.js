import { reactive as ft, inject as ht, ref as R, computed as _, watch as fe, toRef as Un, createElementBlock as f, openBlock as u, normalizeStyle as q, unref as A, normalizeClass as m, createCommentVNode as p, createBlock as S, resolveDynamicComponent as z, normalizeProps as ie, mergeProps as Q, Fragment as U, createTextVNode as C, toDisplayString as w, Teleport as mt, createVNode as O, resolveDirective as Fs, withDirectives as Me, createElementVNode as h, renderSlot as g, withKeys as Ls, nextTick as Vs, markRaw as Ce, watchEffect as gt, defineAsyncComponent as En, toRefs as Bn, toValue as ot, resolveComponent as K, withModifiers as Rn, useSlots as Hs, renderList as E, TransitionGroup as Ns, withCtx as k, onMounted as vt, onBeforeUnmount as Ds, isRef as jn, hasInjectionContext as In, getCurrentInstance as Mn, onDeactivated as zn, onActivated as Pn, onUnmounted as Ws, guardReactiveProps as he, h as Fn, vModelText as Ln, vShow as Mt, createSlots as je } from "vue";
import { useFloating as Vn, autoUpdate as Hn, inline as Nn, offset as Dn, flip as Wn, shift as Xn, arrow as qn } from "@floating-ui/vue";
import { normalizeClasses as is } from "@ulu/utils/templating.js";
import { preventScroll as Gn, wasClickOutside as Yn, isBrowser as Kn } from "@ulu/utils/browser/dom.js";
import { Resizer as Jn } from "@ulu/frontend/js/ui/resizer.js";
import { debounce as Xt } from "@ulu/utils/performance.js";
import { useRoute as Xs, useRouter as Zn, RouterLink as Ge } from "vue-router";
import { Tab as Qn, TabGroup as eo, TabList as to, TabPanel as so, TabPanels as no } from "@headlessui/vue";
import { setPositionClasses as oo } from "@ulu/frontend/js/utils/dom.js";
import { randomInt as it } from "@ulu/utils/random.js";
import { PortableText as lo } from "@portabletext/vue";
import ro from "gsap";
import io from "fuse.js";
import { runAfterFramePaint as qs } from "@ulu/utils/browser/performance.js";
import { urlize as ao } from "@ulu/utils/string.js";
import { arrayCreate as co } from "@ulu/utils/array.js";
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
function Wf(e, s = {}) {
  const t = ft({ ...as }), { iconsByType: n, ...o } = s || {};
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
const uo = {
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
function Te(e) {
  const s = ht(e, cs);
  if (s === cs) {
    const t = uo[e] || "", n = t ? ` from the '${t}' plugin` : "", o = t ? "Please install missing plugin." : "";
    throw new Error(`Required inject: '${e}'${n} was not provided. ${o}`);
  }
  return s;
}
function Gs(e, s, t) {
  const n = R(null), o = R([]), l = _(() => t.value?.placement), {
    floatingStyles: r,
    placement: i,
    middlewareData: c,
    update: a,
    isPositioned: d
  } = Vn(e, s, {
    placement: l,
    whileElementsMounted: Hn,
    middleware: o
  });
  fe(
    [t, n],
    ([b, T]) => {
      const $ = [];
      b && (b.inline && $.push(Nn()), b.offset && $.push(Dn(b.offset)), $.push(Wn()), $.push(Xn()), b.arrow && T && $.push(qn({ element: T })), o.value = $);
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
  fe(t, (b) => {
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
const fo = ["id", "data-placement"], ho = ["innerHTML"], mo = {
  key: 1,
  class: "popover__inner"
}, go = {
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
      floatingStyles: o,
      placement: l,
      arrowStyles: r,
      contentArrow: i,
      isFixedStrategy: c
    } = Gs(Un(s, "trigger"), t, n);
    return (a, d) => (u(), f("span", {
      class: m(["popover popover--tooltip is-active", [
        {
          "popover--fixed": A(c)
        },
        n.value.class
      ]]),
      ref_key: "content",
      ref: t,
      id: A(Ys),
      "data-placement": A(l),
      style: q(A(o))
    }, [
      n.value.isHtml ? (u(), f("span", {
        key: 0,
        class: "popover__inner",
        innerHTML: n.value.content
      }, null, 8, ho)) : (u(), f("span", mo, [
        n.value.component ? (u(), S(z(n.value.component), ie(Q({ key: 0 }, n.value.componentProps)), null, 16)) : (u(), f(U, { key: 1 }, [
          C(w(n.value.content), 1)
        ], 64))
      ])),
      n.value.arrow ? (u(), f("span", {
        key: 2,
        class: "popover__arrow",
        ref_key: "contentArrow",
        ref: i,
        style: q(A(r))
      }, null, 4)) : p("", !0)
    ], 14, fo));
  }
}, vo = {
  __name: "UluTooltipDisplay",
  setup(e) {
    const s = Te(bt);
    return (t, n) => A(s)?.state.visible ? (u(), S(mt, {
      key: 0,
      to: A(s).state.config.teleportTo || "body"
    }, [
      O(go, {
        trigger: A(s).state.trigger,
        config: A(s).state.config
      }, null, 8, ["trigger", "config"])
    ], 8, ["to"])) : p("", !0);
  }
}, Ie = {
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
let po = 0;
function ze(e = "ulu-id") {
  const s = `${e}-${++po}`;
  return typeof document < "u" && document.getElementById(s) ? ze(e) : s;
}
const bo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  newId: ze,
  refToElement: yo
}, Symbol.toStringTag, { value: "Module" })), _o = ["id", "disabled", "aria-expanded", "aria-controls", "aria-label"], wo = ["aria-labelledby", "id", "data-placement"], So = { class: "popover__inner" }, ko = {
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
    const t = s, n = e, o = ze(), l = ze(), r = Te(pt), i = r ? r.popover : Ie.popover, c = _(() => ({ ...i, ...n.config })), a = R(n.startOpen || !1), d = R(null), v = R(null), {
      floatingStyles: y,
      placement: b,
      update: T,
      arrowStyles: $,
      contentArrow: B,
      isFixedStrategy: G
    } = Gs(d, v, c), te = () => {
      P(!a.value);
    }, P = (le) => {
      a.value = le;
      const we = {
        trigger: A(d),
        content: A(v),
        isOpen: A(a)
      }, Be = { isOpen: we.isOpen };
      Vs(() => {
        a.value ? (T(), window.setTimeout(() => {
          _e(), n.directFocus(we), t("toggle", Be);
        }, 0)) : (se(), n.directFocus(we), t("toggle", Be));
      });
    };
    let Z;
    const _e = () => {
      n.clickOutsideCloses && (Z && se(), Z = (le) => {
        v.value && !v.value.contains(le.target) && P(!1);
      }, document.addEventListener("click", Z));
    }, se = () => {
      Z && (document.removeEventListener("click", Z), Z = null);
    }, ae = () => P(!1);
    return (le, we) => {
      const Be = Fs("ulu-tooltip");
      return u(), f(U, null, [
        Me((u(), f("button", {
          type: "button",
          ref_key: "trigger",
          ref: d,
          onClick: te,
          id: A(l),
          disabled: e.disabled,
          class: m([
            { [e.activeClass]: a.value },
            e.classes.trigger
          ]),
          "aria-expanded": a.value ? "true" : "false",
          "aria-controls": A(o),
          "aria-label": e.triggerAlt
        }, [
          g(le.$slots, "trigger", {
            isOpen: a.value,
            close: ae
          }, () => [
            C(w(e.triggerText), 1)
          ])
        ], 10, _o)), [
          [Be, e.tooltip ? e.tooltip : null]
        ]),
        h("span", {
          class: m(["popover", [
            e.size ? `popover--${e.size}` : "",
            {
              "popover--no-padding": e.noPadding,
              "popover--fixed": A(G),
              "is-active": a.value
            },
            e.classes.content
          ]]),
          ref_key: "content",
          ref: v,
          "aria-labelledby": A(l),
          id: A(o),
          style: q(A(y)),
          "data-placement": A(b),
          onKeydown: we[0] || (we[0] = Ls((At) => P(!1), ["esc"])),
          tabindex: "-1"
        }, [
          h("span", So, [
            g(le.$slots, "default", {
              isOpen: a.value,
              toggle: te,
              close: ae
            })
          ]),
          le.$slots.footer ? (u(), f("span", ko, [
            g(le.$slots, "footer", { close: ae })
          ])) : p("", !0),
          c.value.arrow ? (u(), f("span", {
            key: 1,
            class: "popover__arrow",
            ref_key: "contentArrow",
            ref: B,
            style: q(A($)),
            "data-ulu-popover-arrow": ""
          }, null, 4)) : p("", !0)
        ], 46, wo)
      ], 64);
    };
  }
};
function Xf() {
  const e = Te(bt), s = Te(pt), t = { ...s.popover, ...s.tooltip };
  return {
    showTooltip: (o, l) => {
      const r = zt(l, t);
      r && e.show(o, r);
    },
    hideTooltip: e.hide,
    tooltipState: e.state
  };
}
function qf(e) {
  const s = Te(bt), t = Te(pt);
  e.content || console.warn("Missing content for 'useTooltipFollow' tooltip", e);
  let n;
  const o = R(0), l = R(0), r = _(() => ({
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
  })), i = t ? t.popover : Ie.popover, c = t ? t.tooltip : Ie.tooltip, d = {
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
const pt = "uluPopoverOptions", bt = "uluTooltipState", Ys = "ulu-global-tooltip", zt = (e, s) => {
  if (e === !1 || e === null) return null;
  let t = e;
  return (typeof t != "object" || Array.isArray(t)) && (t = { content: t }), t.component && (t.component = Ce(t.component)), { ...s, ...t };
};
function Gf(e, s = {}) {
  const t = {
    plugin: { ...Ie.plugin, ...s.plugin || {} },
    popover: { ...Ie.popover, ...s.popover || {} },
    tooltip: { ...Ie.tooltip, ...s.tooltip || {} }
  };
  e.provide(pt, t);
  const n = ft({
    visible: !1,
    trigger: null,
    config: {}
  }), o = (d, v) => {
    n.trigger && n.trigger !== d && n.trigger?.removeAttribute && n.trigger.removeAttribute("aria-describedby"), d?.setAttribute && d.setAttribute("aria-describedby", Ys), n.trigger = d, n.config = v, n.visible = !0;
  }, l = () => {
    n.trigger?.removeAttribute && n.trigger.removeAttribute("aria-describedby"), n.visible = !1;
  };
  e.provide(bt, {
    state: n,
    show: o,
    hide: l
  }), e.component("UluTooltipDisplay", vo), e.component("UluPopover", yt);
  const r = /* @__PURE__ */ new WeakMap(), i = t.popover, c = t.tooltip, a = { ...i, ...c };
  e.directive(t.plugin.directiveName, {
    mounted(d, v) {
      const y = zt(v.value, a);
      if (!y) return;
      let b = null;
      const T = () => {
        b || (b = setTimeout(() => {
          o(d, y);
        }, y.delay));
      }, $ = () => {
        clearTimeout(b), b = null, l();
      }, { showEvents: B, hideEvents: G } = y;
      B.forEach((te) => d.addEventListener(te, T)), G.forEach((te) => d.addEventListener(te, $)), r.set(d, { show: T, hide: $, showEvents: B, hideEvents: G });
    },
    updated(d, v) {
      const y = r.get(d);
      y && (y.showEvents.forEach((P) => d.removeEventListener(P, y.show)), y.hideEvents.forEach((P) => d.removeEventListener(P, y.hide)));
      const b = zt(v.value, a);
      if (!b) {
        n.trigger === d && l();
        return;
      }
      let T = null;
      const $ = () => {
        T || (T = setTimeout(() => {
          o(d, b);
        }, b.delay));
      }, B = () => {
        clearTimeout(T), T = null, l();
      }, { showEvents: G, hideEvents: te } = b;
      G.forEach((P) => d.addEventListener(P, $)), te.forEach((P) => d.addEventListener(P, B)), r.set(d, { show: $, hide: B, showEvents: G, hideEvents: te }), n.visible && n.trigger === d && o(d, b);
    },
    beforeUnmount(d) {
      n.visible && n.trigger === d && l();
      const v = r.get(d);
      v && (v.showEvents.forEach((y) => d.removeEventListener(y, v.show)), v.hideEvents.forEach((y) => d.removeEventListener(y, v.hide)), r.delete(d));
    }
  });
}
const j = (e, s) => {
  const t = e.__vccOpts || e;
  for (const [n, o] of s)
    t[n] = o;
  return t;
}, $o = {
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
function Co(e, s, t, n, o, l) {
  return l.currentModal ? (u(), S(z(l.currentModal.component), Q({ key: 0 }, l.currentProps, {
    modelValue: o.open,
    "onUpdate:modelValue": s[0] || (s[0] = (r) => o.open = r),
    onVnodeMounted: l.modalMounted,
    onVnodeUnmounted: l.modalUnmounted
  }), null, 16, ["modelValue", "onVnodeMounted", "onVnodeUnmounted"])) : p("", !0);
}
const To = /* @__PURE__ */ j($o, [["render", Co]]);
function Ao() {
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
    const s = ht("uluCore"), t = R(null), { getIconProps: n, getClassesFromDefinition: o } = Ao();
    let l;
    const r = e, i = _(() => s.getSetting("fontAwesomeStatic")), c = _(() => s.getSetting("iconComponent")), a = _(() => s.getSetting("iconPropResolver")), d = _(() => {
      const { icon: $ } = r;
      if (typeof $ == "string" && $.startsWith("type:"))
        try {
          const B = $.substring(5);
          return s.getIcon(B);
        } catch (B) {
          return console.warn(B), null;
        }
      return $;
    }), v = _(() => !c.value || !d.value ? null : a.value(d.value)), y = _(() => n(d.value)), b = _(() => o(d.value)), T = _(() => ({
      "flow-inline": r.spaced
    }));
    return gt(async () => {
      if (!i.value && d.value) {
        if (t.value === null)
          if (l)
            t.value = Ce(l.FontAwesomeIcon);
          else {
            const $ = En(async () => {
              const B = await import("@fortawesome/vue-fontawesome");
              return l = B, B.FontAwesomeIcon;
            });
            t.value = Ce($);
          }
      } else
        t.value = null;
    }), ($, B) => c.value ? (u(), S(z(c.value), Q({ key: 0 }, v.value, { class: T.value }), null, 16, ["class"])) : !i.value && t.value && d.value ? (u(), S(z(t.value), Q({ key: 1 }, y.value, { class: T.value }), null, 16, ["class"])) : i.value && d.value ? (u(), f("span", {
      key: 2,
      class: m([b.value, T.value]),
      "aria-hidden": "true"
    }, null, 2)) : p("", !0);
  }
};
function me({ props: e, baseClass: s, internal: t = {} }) {
  const { modifiers: n } = Bn(e);
  return { resolvedModifiers: _(() => {
    const l = ot(s), r = is(ot(n)), i = is(ot(t));
    if (!l)
      return console.warn("useModifiers: Missing 'baseClass' argument, modifiers will not be applied."), "";
    const c = /* @__PURE__ */ new Set([...i, ...r]);
    return Array.from(c).map((a) => `${l}--${a}`);
  }) };
}
let Ot = 0;
const Oo = {
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
    return ++Ot, {
      containerWidth: null,
      titleId: `ulu-modal-${Ot}-title`,
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
    })), { resolvedModifiers: r } = me({
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
        s === t && Yn(t, e) && this.close();
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
        e.newState === "open" ? this.restoreScroll = Gn({ preventShift: s }) : this.destroyPreventScroll();
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
    ++Ot, this.preventScroll && this.setupPreventScroll(), this.setupResizer();
  },
  beforeUnmount() {
    const { container: e } = this.$refs;
    e && e.open && e.close(), this.destroyPreventScroll(), this.destroyResizer();
  }
}, xo = ["aria-labelledby", "aria-describedby"], Uo = ["id"], Eo = { class: "modal__title-text" }, Bo = {
  key: 2,
  class: "modal__resizer",
  ref: "resizer",
  type: "button"
};
function Ro(e, s, t, n, o, l) {
  const r = K("UluIcon");
  return u(), S(mt, {
    to: t.teleport === !1 ? null : t.teleport,
    disabled: t.teleport === !1
  }, [
    h("dialog", {
      class: m(["modal", [n.resolvedModifiers, t.classes.container]]),
      "aria-labelledby": l.resolvedLabelledby,
      "aria-describedby": t.describedby,
      ref: "container",
      style: q({ width: o.containerWidth }),
      onCancel: s[1] || (s[1] = Rn((...i) => l.close && l.close(...i), ["prevent"])),
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
            }, null, 8, ["icon"])) : p("", !0),
            h("span", Eo, w(t.title), 1)
          ])
        ], 10, Uo),
        h("button", {
          class: "modal__close",
          "aria-label": "Close modal",
          onClick: s[0] || (s[0] = (...i) => l.close && l.close(...i)),
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
        g(e.$slots, "default", { close: l.close })
      ], 2),
      e.$slots.footer ? (u(), f("div", {
        key: 1,
        class: m(["site-modal__footer", t.classes.footer])
      }, [
        g(e.$slots, "footer", { close: l.close })
      ], 2)) : p("", !0),
      n.resizerEnabled ? (u(), f("button", Bo, [
        g(e.$slots, "resizerIcon", {}, () => [
          O(r, {
            class: "modal__resizer-icon",
            icon: t.resizerIcon || n.resizerIconType
          }, null, 8, ["icon"])
        ])
      ], 512)) : p("", !0)
    ], 46, xo)
  ], 8, ["to", "disabled"]);
}
const Ks = /* @__PURE__ */ j(Oo, [["render", Ro]]), De = [], jo = R({
  /**
   * Holds active component options (including component, and options)
   */
  active: null,
  /**
   * Populated with any props passed to open method, bound to modal component
   */
  activeProps: null
}), We = jo.value, us = {
  data: We,
  modals: De
}, Io = (e) => ({
  open(s, t = null) {
    const n = this.get(s);
    We.active = Ce(n), We.activeProps = Object.assign({}, n.props, t);
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
}), Mo = {
  modals: [],
  modalOptions: {}
};
function Yf(e, s) {
  const t = Object.assign({}, Mo, s), o = Io((l) => Object.assign({}, t.modalOptions, l));
  e.component("UluModalsDisplay", To), e.component("UluModal", Ks), t.modals.forEach((l) => {
    o.add(l);
  }), us.options = t, e.config.globalProperties.$uluModals = o, e.provide("uluModals", o), e.config.globalProperties.$uluModalsState = us;
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
}, Po = ["onClick"];
function Fo(e, s, t, n, o, l) {
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
      (u(!0), f(U, null, E(t.toast.actions, (i, c) => (u(), f("button", {
        key: c,
        class: m(["toast__action", t.classes.action]),
        onClick: (a) => l.handleAction(a, i)
      }, w(i.label), 11, Po))), 128))
    ], 2)) : p("", !0),
    h("button", {
      class: m(["toast__close", t.classes.closeButton]),
      onClick: s[0] || (s[0] = (...i) => t.toast.close && t.toast.close(...i))
    }, [
      O(r, { icon: "type:close" })
    ], 2)
  ], 2);
}
const Js = /* @__PURE__ */ j(zo, [["render", Fo]]), ds = {
  toastOptions: {
    /**
     * Component used to render the toast in the display
     */
    component: Ce(Js),
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
let Lo = 0;
const Se = ft({
  toasts: [],
  /**
   * Saveable 
   */
  pluginOptions: ds.pluginOptions,
  toastOptions: ds.toastOptions,
  setToastOptions(e) {
    return this.toastOptions = xt({}, this.toastOptions, e), this.pluginOptions;
  },
  setPluginOptions(e) {
    return this.pluginOptions = xt({}, this.pluginOptions, e), this.pluginOptions;
  },
  createToast(e) {
    const s = `toast-${++Lo}`;
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
    const s = Se.createToast(e);
    return Se.toasts.unshift(s), s.duration && setTimeout(() => {
      this.remove(s.uid);
    }, s.duration), s;
  },
  /**
   * 
   * @param {Object} toast Toast uid
   */
  remove(e) {
    const s = Se.toasts.findIndex((t) => t.uid === e);
    s > -1 && Se.toasts.splice(s, 1);
  },
  /**
   * Remove all toasts
   */
  removeAll() {
    Se.toasts = [];
  }
}, Vo = {
  name: "UluTooltipDisplay",
  data() {
    const { toasts: e, pluginOptions: s } = Se;
    return { toasts: e, pluginOptions: s };
  },
  computed: {
    classes() {
      const { position: e } = this.pluginOptions;
      return e.map((t) => `toast-container--${t}`);
    }
  }
};
function Ho(e, s, t, n, o, l) {
  return u(), S(mt, {
    to: o.pluginOptions.teleportTo
  }, [
    O(Ns, {
      class: m(["toast-container", l.classes]),
      name: "toast-animation",
      tag: "div"
    }, {
      default: k(() => [
        (u(!0), f(U, null, E(o.toasts, (r) => (u(), S(z(r.component), {
          key: r.uid,
          toast: r
        }, null, 8, ["toast"]))), 128))
      ]),
      _: 1
    }, 8, ["class"])
  ], 8, ["to"]);
}
const No = /* @__PURE__ */ j(Vo, [["render", Ho]]);
function Kf(e, s = {}) {
  Se.setPluginOptions(s?.plugin), Se.setToastOptions(s?.toast), e.component("UluToast", Js), e.component("UluToastDisplay", No), e.config.globalProperties.$uluToast = Pt, e.provide("uluToast", Pt);
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
function Wo(e) {
  const s = Object.assign({}, Do, e), t = R(null), n = R(s.initialValue), o = R(null);
  return (async () => {
    if (!Kn()) return;
    await new Promise((d) => {
      document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", () => d()) : d();
    });
    const r = await import("@ulu/frontend/js/ui/breakpoints.js"), { BreakpointManager: i } = r, c = Ce(new i(s.plugin));
    t.value = Ce(c);
    const a = () => {
      n.value = c.active, o.value = c.resizeDirection;
    };
    a(), s.onReady && s.onReady(c), c.onChange(a);
  })(), { breakpointManager: t, breakpointActive: n, breakpointDirection: o };
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
function Jf(e, s) {
  const t = R(!1), n = Object.assign({}, Xo, s), { breakpointMobile: o } = n, { onReady: l } = n.managerOptions, r = {
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
  } = Wo(i);
  e.provide("uluBreakpointActive", _(() => a.value)), e.provide("uluBreakpointDirection", _(() => d.value)), e.provide("uluBreakpointManager", _(() => c.value)), e.provide("uluIsMobile", _(() => t.value));
}
const Ft = /* @__PURE__ */ new Set(), J = /* @__PURE__ */ new WeakMap(), Ae = /* @__PURE__ */ new WeakMap(), ne = /* @__PURE__ */ new WeakMap(), Ye = /* @__PURE__ */ new WeakMap(), Ut = /* @__PURE__ */ new WeakMap(), Xe = /* @__PURE__ */ new WeakMap(), $e = /* @__PURE__ */ new WeakMap(), ke = /* @__PURE__ */ new WeakMap(), Re = /* @__PURE__ */ new WeakSet();
let ee, qt = 0, Gt = 0;
const pe = "__aa_tgt", Ke = "__aa_del", at = "__aa_new", Zs = (e) => {
  const s = Ko(e);
  s && s.forEach((t) => Jo(t));
}, qo = (e) => {
  e.forEach((s) => {
    s.target === ee && Go(), J.has(s.target) && xe(s.target);
  });
};
function Qs(e) {
  const s = e.getBoundingClientRect(), t = ee?.clientWidth || 0, n = ee?.clientHeight || 0;
  return s.bottom < 0 || s.top > n || s.right < 0 || s.left > t;
}
function Yt(e) {
  const s = Ye.get(e);
  s?.disconnect();
  let t = J.get(e), n = 0;
  const o = 5;
  t || (t = Pe(e), J.set(e, t));
  const { offsetWidth: l, offsetHeight: r } = ee, c = [
    t.top - o,
    l - (t.left + o + t.width),
    r - (t.top + o + t.height),
    t.left - o
  ].map((d) => `${-1 * Math.floor(d)}px`).join(" "), a = new IntersectionObserver(() => {
    ++n > 1 && xe(e);
  }, {
    root: ee,
    threshold: 1,
    rootMargin: c
  });
  a.observe(e), Ye.set(e, a);
}
function xe(e, s = !0) {
  clearTimeout(ke.get(e));
  const t = _t(e), n = s ? Je(t) ? 500 : t.duration : 0;
  ke.set(e, setTimeout(async () => {
    const o = ne.get(e);
    try {
      await o?.finished, J.set(e, Pe(e)), Yt(e);
    } catch {
    }
  }, n));
}
function Go() {
  clearTimeout(ke.get(ee)), ke.set(ee, setTimeout(() => {
    Ft.forEach((e) => lt(e, (s) => en(() => xe(s))));
  }, 100));
}
function Yo(e) {
  setTimeout(() => {
    Xe.set(e, setInterval(() => en(xe.bind(null, e)), 2e3));
  }, Math.round(2e3 * Math.random()));
}
function en(e) {
  typeof requestIdleCallback == "function" ? requestIdleCallback(() => e()) : requestAnimationFrame(() => e());
}
let ve;
const tn = typeof window < "u" && "ResizeObserver" in window;
tn && (ee = document.documentElement, new MutationObserver(Zs), ve = new ResizeObserver(qo), window.addEventListener("scroll", () => {
  Gt = window.scrollY, qt = window.scrollX;
}), ve.observe(ee));
function Ko(e) {
  return e.reduce((n, o) => [
    ...n,
    ...Array.from(o.addedNodes),
    ...Array.from(o.removedNodes)
  ], []).every((n) => n.nodeName === "#comment") ? !1 : e.reduce((n, o) => {
    if (n === !1)
      return !1;
    if (o.target instanceof Element) {
      if (Et(o.target), !n.has(o.target)) {
        n.add(o.target);
        for (let l = 0; l < o.target.children.length; l++) {
          const r = o.target.children.item(l);
          if (r) {
            if (Ke in r)
              return !1;
            Et(o.target, r), n.add(r);
          }
        }
      }
      if (o.removedNodes.length)
        for (let l = 0; l < o.removedNodes.length; l++) {
          const r = o.removedNodes[l];
          if (Ke in r)
            return !1;
          r instanceof Element && (n.add(r), Et(o.target, r), Ae.set(r, [
            o.previousSibling,
            o.nextSibling
          ]));
        }
    }
    return n;
  }, /* @__PURE__ */ new Set());
}
function Et(e, s) {
  !s && !(pe in e) ? Object.defineProperty(e, pe, { value: e }) : s && !(pe in s) && Object.defineProperty(s, pe, { value: e });
}
function Jo(e) {
  var s, t;
  const n = e.isConnected, o = J.has(e);
  n && Ae.has(e) && Ae.delete(e), ((s = ne.get(e)) === null || s === void 0 ? void 0 : s.playState) !== "finished" && ((t = ne.get(e)) === null || t === void 0 || t.cancel()), at in e ? fs(e) : o && n ? Qo(e) : o && !n ? el(e) : fs(e);
}
function de(e) {
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
  let n = s.width, o = s.height, l = t.width, r = t.height;
  const i = getComputedStyle(e);
  if (i.getPropertyValue("box-sizing") === "content-box") {
    const a = de(i.paddingTop) + de(i.paddingBottom) + de(i.borderTopWidth) + de(i.borderBottomWidth), d = de(i.paddingLeft) + de(i.paddingRight) + de(i.borderRightWidth) + de(i.borderLeftWidth);
    n -= d, l -= d, o -= a, r -= a;
  }
  return [n, l, o, r].map(Math.round);
}
function _t(e) {
  return pe in e && $e.has(e[pe]) ? $e.get(e[pe]) : { duration: 250, easing: "ease-in-out" };
}
function nn(e) {
  if (pe in e)
    return e[pe];
}
function Kt(e) {
  const s = nn(e);
  return s ? Re.has(s) : !1;
}
function lt(e, ...s) {
  s.forEach((t) => t(e, $e.has(e)));
  for (let t = 0; t < e.children.length; t++) {
    const n = e.children.item(t);
    n && s.forEach((o) => o(n, $e.has(n)));
  }
}
function Jt(e) {
  return Array.isArray(e) ? e : [e];
}
function Je(e) {
  return typeof e == "function";
}
function Qo(e) {
  const s = J.get(e), t = Pe(e);
  if (!Kt(e))
    return J.set(e, t);
  if (Qs(e)) {
    J.set(e, t), Yt(e);
    return;
  }
  let n;
  if (!s)
    return;
  const o = _t(e);
  if (typeof o != "function") {
    let l = s.left - t.left, r = s.top - t.top;
    const i = s.left + s.width - (t.left + t.width);
    s.top + s.height - (t.top + t.height) == 0 && (r = 0), i == 0 && (l = 0);
    const [a, d, v, y] = sn(e, s, t), b = {
      transform: `translate(${l}px, ${r}px)`
    }, T = {
      transform: "translate(0, 0)"
    };
    a !== d && (b.width = `${a}px`, T.width = `${d}px`), v !== y && (b.height = `${v}px`, T.height = `${y}px`), n = e.animate([b, T], {
      duration: o.duration,
      easing: o.easing
    });
  } else {
    const [l] = Jt(o(e, "remain", s, t));
    n = new Animation(l), n.play();
  }
  ne.set(e, n), J.set(e, t), n.addEventListener("finish", xe.bind(null, e, !1), {
    once: !0
  });
}
function fs(e) {
  at in e && delete e[at];
  const s = Pe(e);
  J.set(e, s);
  const t = _t(e);
  if (!Kt(e))
    return;
  if (Qs(e)) {
    Yt(e);
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
    const [o] = Jt(t(e, "add", s));
    n = new Animation(o), n.play();
  }
  ne.set(e, n), n.addEventListener("finish", xe.bind(null, e, !1), {
    once: !0
  });
}
function hs(e, s) {
  var t;
  e.remove(), J.delete(e), Ae.delete(e), ne.delete(e), (t = Ye.get(e)) === null || t === void 0 || t.disconnect(), setTimeout(() => {
    if (Ke in e && delete e[Ke], Object.defineProperty(e, at, { value: !0, configurable: !0 }), s && e instanceof HTMLElement)
      for (const n in s)
        e.style[n] = "";
  }, 0);
}
function el(e) {
  var s;
  if (!Ae.has(e) || !J.has(e))
    return;
  const [t, n] = Ae.get(e);
  Object.defineProperty(e, Ke, { value: !0, configurable: !0 });
  const o = window.scrollX, l = window.scrollY;
  if (n && n.parentNode && n.parentNode instanceof Element ? n.parentNode.insertBefore(e, n) : t && t.parentNode ? t.parentNode.appendChild(e) : (s = nn(e)) === null || s === void 0 || s.appendChild(e), !Kt(e))
    return hs(e);
  const [r, i, c, a] = sl(e), d = _t(e), v = J.get(e);
  (o !== qt || l !== Gt) && tl(e, o, l, d);
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
    const [T, $] = Jt(d(e, "remove", v));
    $?.styleReset !== !1 && (b = $?.styleReset || b, Object.assign(e.style, b)), y = new Animation(T), y.play();
  }
  ne.set(e, y), y.addEventListener("finish", () => hs(e, b), {
    once: !0
  });
}
function tl(e, s, t, n) {
  const o = qt - s, l = Gt - t, r = document.documentElement.style.scrollBehavior;
  if (getComputedStyle(ee).scrollBehavior === "smooth" && (document.documentElement.style.scrollBehavior = "auto"), window.scrollTo(window.scrollX + o, window.scrollY + l), !e.parentElement)
    return;
  const c = e.parentElement;
  let a = c.clientHeight, d = c.clientWidth;
  const v = performance.now();
  function y() {
    requestAnimationFrame(() => {
      if (!Je(n)) {
        const b = a - c.clientHeight, T = d - c.clientWidth;
        v + n.duration > performance.now() ? (window.scrollTo({
          left: window.scrollX - T,
          top: window.scrollY - b
        }), a = c.clientHeight, d = c.clientWidth, y()) : document.documentElement.style.scrollBehavior = r;
      }
    });
  }
  y();
}
function sl(e) {
  var s;
  const t = J.get(e), [n, , o] = sn(e, t, Pe(e));
  let l = e.parentElement;
  for (; l && (getComputedStyle(l).position === "static" || l instanceof HTMLBodyElement); )
    l = l.parentElement;
  l || (l = document.body);
  const r = getComputedStyle(l), i = !ne.has(e) || ((s = ne.get(e)) === null || s === void 0 ? void 0 : s.playState) === "finished" ? Pe(l) : J.get(l), c = Math.round(t.top - i.top) - de(r.borderTopWidth), a = Math.round(t.left - i.left) - de(r.borderLeftWidth);
  return [c, a, n, o];
}
function nl(e, s = {}) {
  if (tn && ve && !(window.matchMedia("(prefers-reduced-motion: reduce)").matches && !Je(s) && !s.disrespectUserMotionPreference)) {
    Re.add(e), getComputedStyle(e).position === "static" && Object.assign(e.style, { position: "relative" }), lt(e, xe, Yo, (r) => ve?.observe(r)), Je(s) ? $e.set(e, s) : $e.set(e, {
      duration: 250,
      easing: "ease-in-out",
      ...s
    });
    const l = new MutationObserver(Zs);
    l.observe(e, { childList: !0 }), Ut.set(e, l), Ft.add(e);
  }
  return Object.freeze({
    parent: e,
    enable: () => {
      Re.add(e);
    },
    disable: () => {
      Re.delete(e), lt(e, (n) => {
        const o = ne.get(n);
        try {
          o?.cancel();
        } catch {
        }
        ne.delete(n);
        const l = ke.get(n);
        l && clearTimeout(l), ke.delete(n);
        const r = Xe.get(n);
        r && clearInterval(r), Xe.delete(n);
      });
    },
    isEnabled: () => Re.has(e),
    destroy: () => {
      Re.delete(e), Ft.delete(e), $e.delete(e);
      const n = Ut.get(e);
      n?.disconnect(), Ut.delete(e), lt(e, (o) => {
        ve?.unobserve(o);
        const l = ne.get(o);
        try {
          l?.cancel();
        } catch {
        }
        ne.delete(o);
        const r = Ye.get(o);
        r?.disconnect(), Ye.delete(o);
        const i = Xe.get(o);
        i && clearInterval(i), Xe.delete(o);
        const c = ke.get(o);
        c && clearTimeout(c), ke.delete(o), J.delete(o), Ae.delete(o);
      });
    }
  });
}
function ol(e) {
  const s = R();
  let t;
  function n(o) {
    t && (o ? t.enable() : t.disable());
  }
  return vt(() => {
    gt((o) => {
      let l;
      s.value instanceof HTMLElement ? l = s.value : s.value && "$el" in s.value && s.value.$el instanceof HTMLElement && (l = s.value.$el), l && (t = nl(l, e || {}), o(() => {
        var r;
        (r = t?.destroy) === null || r === void 0 || r.call(t), t = void 0;
      }));
    });
  }), Ds(() => {
    var o;
    (o = t?.destroy) === null || o === void 0 || o.call(t), t = void 0;
  }), [s, n];
}
const ll = ["id", "aria-controls", "aria-expanded"], rl = ["id", "aria-hidden", "aria-labelledby"], Lt = {
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
    const t = e, n = s, o = _(() => typeof t.animate == "object" ? t.animate : {}), [l, r] = ol(o);
    vt(() => {
      r(!!t.animate);
    }), fe(() => t.animate, (T) => {
      r(!!T);
    });
    const i = _(() => t.modelValue !== void 0), c = R(t.startOpen), a = _({
      get() {
        return i.value ? t.modelValue : c.value;
      },
      set(T) {
        i.value ? n("update:modelValue", T) : c.value = T;
      }
    }), d = R(ze("ulu-collapsible-trigger")), v = R(ze("ulu-collapsible-content"));
    function y() {
      a.value = !a.value;
    }
    function b() {
      t.closeOnEscape && a.value && (a.value = !1);
    }
    return (T, $) => (u(), f("div", {
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
        onClick: y
      }, [
        g(T.$slots, "trigger", { isOpen: a.value }, () => [
          C(w(e.triggerText), 1)
        ])
      ], 10, ll),
      a.value ? (u(), f("div", {
        key: 0,
        class: m(e.classes.content),
        tabindex: "-1",
        id: v.value,
        "aria-hidden": !a.value,
        "aria-labelledby": d.value
      }, [
        g(T.$slots, "default", {
          isOpen: a.value,
          toggle: y
        })
      ], 10, rl)) : p("", !0)
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
    const t = e, { resolvedModifiers: n } = me({ props: t, baseClass: "accordion" }), o = _(() => {
      const l = { ...t.classes };
      return l.container = [l.container, n.value], l;
    });
    return (l, r) => (u(), S(Lt, {
      "model-value": e.modelValue,
      "start-open": e.startOpen,
      "trigger-text": e.triggerText,
      classes: o.value,
      animate: e.animate,
      "onUpdate:modelValue": r[0] || (r[0] = (i) => l.$emit("update:modelValue", i))
    }, {
      trigger: k(({ isOpen: i }) => [
        g(l.$slots, "trigger", { isOpen: i }, () => [
          (u(), S(z(e.triggerTextElement), null, {
            default: k(() => [
              C(w(e.triggerText), 1)
            ]),
            _: 1
          }))
        ]),
        g(l.$slots, "icon", { isOpen: i }, () => [
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
    const s = e, { resolvedModifiers: t } = me({ props: s, baseClass: "tag" });
    return (n, o) => (u(), f("span", {
      class: m(["tag", [
        {
          "tag--counter": e.counter,
          [`tag--${e.size}`]: e.size,
          [`tag--${e.type}`]: e.type
        },
        A(t)
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
}, il = {
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
function al(e, s, t, n, o, l) {
  const r = K("UluIcon"), i = K("UluTag"), c = K("UluMenu", !0), a = Fs("ulu-tooltip");
  return t.items?.length ? (u(), f("ul", {
    key: 0,
    class: m(t.classes.list)
  }, [
    (u(!0), f(U, null, E(t.items, (d, v) => (u(), f("li", {
      key: v,
      class: m([
        t.classes.item,
        d?.classes?.item,
        d.separatorBefore ? t.classes.itemSeparatorBefore : "",
        d.separatorAfter ? t.classes.itemSeparatorAfter : ""
      ])
    }, [
      Me((u(), S(z(d.to || d.path ? "router-link" : d.click ? "button" : "a"), Q({ ref_for: !0 }, {
        ...d.to || d.path ? {
          to: d.to || d.path,
          activeClass: t.classes.linkActive || null,
          exactActiveClass: t.classes.linkExactActive || null
        } : {},
        ...d.href ? { href: d.href || "#" } : {}
      }, {
        onClick: (y) => {
          l.handleItemClick(y, d);
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
const ln = /* @__PURE__ */ j(il, [["render", al]]), cl = {
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
    return (o, l) => (u(), S(z(e.containerElement), {
      class: m(["menu-stack", A(n)])
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
}, Zf = {
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
            style: q({ transform: n ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.2s" })
          }, null, 8, ["style"])
        ])
      ]),
      default: k(() => [
        O(cl, { items: e.items }, null, 8, ["items"])
      ]),
      _: 3
    }, 8, ["classes"]));
  }
}, Zt = R(!1), ct = {
  start: [],
  end: []
};
function Qt() {
  window.removeEventListener("resize", Qt), Zt.value = !0, ct.start.forEach((e) => e());
}
function ul() {
  Zt.value = !1, ct.end.forEach((e) => e()), window.addEventListener("resize", Qt);
}
window.addEventListener("resize", Qt), window.addEventListener("resize", Xt(ul, 300));
function gs(e, s) {
  return e.push(s), () => {
    const t = e.findIndex((n) => n === s);
    t > -1 && e.splice(t);
  };
}
function dl() {
  return {
    resizing: Zt,
    onResizeStart(e) {
      return gs(ct.start, e);
    },
    onResizeEnd(e) {
      return gs(ct.end, e);
    }
  };
}
function Qf(e, s) {
  const t = Xs(), n = Zn(), o = _(() => {
    const a = parseInt(t.query.page || "1", 10);
    return isNaN(a) || a < 1 ? 1 : a;
  }), l = _(() => !e.value || e.value.length === 0 ? 1 : Math.ceil(e.value.length / s));
  fe(l, (a) => {
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
    }, d = o.value, v = l.value, y = 5, b = (B) => ({ query: { ...t.query, page: B } });
    d > 1 && (a.first = { href: b(1) }, a.previous = { href: b(d - 1) }), d < v && (a.next = { href: b(d + 1) }, a.last = { href: b(v) });
    let T, $;
    if (v <= y)
      T = 1, $ = v;
    else {
      const B = Math.floor(y / 2), G = Math.ceil(y / 2) - 1;
      d <= B ? (T = 1, $ = y) : d + G >= v ? (T = v - y + 1, $ = v) : (T = d - B, $ = d + G);
    }
    for (let B = T; B <= $; B++)
      a.pages[B] = { href: b(B) };
    return a;
  }), c = _(() => {
    const a = { previous: !1, next: !1 };
    if (!i.value || !i.value.pages) return a;
    const d = Object.keys(i.value.pages).map(Number);
    if (d.length === 0) return a;
    const v = Math.min(...d), y = Math.max(...d);
    return v > 1 && (a.previous = !0), y < l.value && (a.next = !0), a;
  });
  return {
    currentPage: o,
    totalPages: l,
    paginatedItems: r,
    pagerItems: i,
    pagerEllipses: c
  };
}
function Vt(e, s, t) {
  typeof e === "function" && (!t || t !== "titleTemplate" && !(t[0] === "o" && t[1] === "n")) && (e = e());
  let o;
  if (s && (o = s(t, e)), Array.isArray(o))
    return o.map((l) => Vt(l, s));
  if (o?.constructor === Object) {
    const l = {};
    for (const r of Object.keys(o))
      l[r] = Vt(o[r], s, r);
    return l;
  }
  return o;
}
const fl = (e, s) => jn(s) ? ot(s) : s, hl = "usehead";
function ml() {
  if (In()) {
    const e = ht(hl);
    if (!e)
      throw new Error("useHead() was called without provide context, ensure you call it through the setup() function.");
    return e;
  }
  throw new Error("useHead() was called without provide context, ensure you call it through the setup() function.");
}
function gl(e, s = {}) {
  const t = s.head || ml();
  return t.ssr ? t.push(e || {}, s) : vl(t, e, s);
}
function vl(e, s, t = {}) {
  const n = R(!1);
  let o;
  return gt(() => {
    const r = n.value ? {} : Vt(s, fl);
    o ? o.patch(r) : o = e.push(r, t);
  }), Mn() && (Ds(() => {
    o.dispose();
  }), zn(() => {
    n.value = !0;
  }), Pn(() => {
    n.value = !1;
  })), o;
}
function wt(e, s) {
  let n = (e?.meta || {}).title;
  return typeof n == "function" && (n = n(s || e)), n;
}
function yl(e, s) {
  const n = Object.assign({}, {
    qualifier(r, i) {
      return i ? ts(r) : rn(r);
    },
    sort: ns,
    item: {},
    includeChildren: !1
  }, s), o = (r, i) => i ? `${i}/${r.path}` : r.path, l = (r, i = null) => r.filter((c) => n.qualifier(c, i)).map((c) => {
    const a = c.children ? es(c.children) : c, d = c.children ? c.children.filter((y) => y.path !== "") : !1, v = St(a, o(c, i), n.item);
    return n.includeChildren && d.length && (v.children = l(d, v.path)), v;
  }).sort(n.sort);
  return l(e);
}
function pl(e) {
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
function bl(e, s, t) {
  const o = Object.assign({}, {
    includeIndex: !1,
    item: {},
    sort: ns
  }, t), l = e.find((a) => a.path !== "/" && s.includes(a.path)), r = (a, d, v) => {
    if (a.children) {
      const y = a.children.find((b) => b.path.includes(s));
      if (y)
        return r(y, a, v + y.path);
    }
    return { route: d, path: v };
  }, { route: i, path: c } = r(l, l, l.path);
  return i.children ? i.children.filter(cn(o.includeIndex)).map((a) => St(a, `${c}/${a.path}`, o.item)).sort(o.sort) : (console.warn("Unable to build menu for:", s), []);
}
function es(e) {
  return e.find((s) => s.path === "");
}
function St(e, s = e.path, t) {
  const o = Object.assign({}, {
    indexMeta: !0,
    modify: null
  }, t);
  let l = Object.assign({}, e.meta);
  o.indexMeta && e.children && (l = Object.assign({}, l, es(e.children)?.meta));
  const r = { ...e, meta: l }, i = {
    path: s,
    title: wt(r, e) || "Missing Title",
    weight: l?.weight || 0,
    meta: l
  };
  return o.modify && o.modify(i, e), i;
}
function ts(e) {
  return !e.path.includes("/:");
}
function rn(e) {
  const s = e.path.match(/\//g) || [];
  return ts(e) && s.length === 1;
}
function _l(e, s) {
  const { target: t } = s, n = t.closest("a");
  if (n) {
    let o = n.getAttribute("href");
    o.startsWith("/") && (e.push(o), s.preventDefault());
  }
}
function an(e, s = ss(e)) {
  return s?.children;
}
function ss(e, s) {
  const t = e.matched.length, n = t - 2;
  return s ? t > 1 ? e.matched[0] : null : n < 0 ? null : e.matched[n];
}
function cn(e) {
  return (s) => e || s.path !== "";
}
function ns(e, s) {
  return e?.weight - s?.weight;
}
function wl(e, s) {
  const n = Object.assign({}, {
    parent: null,
    includeIndex: !1,
    item: {},
    sort: ns
  }, s), o = n.parent || ss(e);
  return (an(e, o) || []).filter(cn(n.includeIndex)).map((r) => St(r, `${o.path}/${r.path}`, n.item)).sort(n.sort);
}
function Sl(e) {
  const { matched: s, path: t } = e;
  let n;
  return s.reduce((l, r, i) => {
    if (r.meta?.breadcrumb === !1 || r.path === n)
      return l;
    const c = i === s.length - 1, a = wt(r, e) || "Missing Title";
    return l.push({
      title: a,
      to: { path: c ? t : r.path },
      current: c
    }), n = r.path, l;
  }, []);
}
const kl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  $createBreadcrumb: Sl,
  $createSectionMenu: wl,
  $getParentRoute: ss,
  $getRouteChildren: an,
  createBaseMenu: yl,
  createMenuItem: St,
  createSectionMenu: bl,
  flattenMenu: pl,
  getChildIndexRoute: es,
  getRouteTitle: wt,
  isStaticBaseRoute: rn,
  isStaticRoute: ts,
  nativeLinkRouter: _l
}, Symbol.toStringTag, { value: "Module" })), Bt = ft({});
function eh(e = {}) {
  const {
    title: s,
    titleTemplate: t = "%s",
    useRoute: n = Xs,
    useHead: o = gl
  } = e, l = n(), r = l.path;
  if (s !== void 0) {
    gt(() => {
      Bt[r] = A(s);
    }), Ws(() => {
      delete Bt[r];
    });
    return;
  }
  const i = _(() => {
    const c = Bt[l.path], a = wt(l, l), d = c || a;
    return d ? t.replace("%s", d) : "App";
  });
  o({
    title: i
  });
}
const $l = { class: "layout-flex-baseline" }, Cl = { class: "type-word-break" }, th = {
  __name: "UluOverflowPopover",
  props: {
    /**
     * Default icon for overflow popover trigger
     */
    triggerIcon: String
  },
  setup(e) {
    const { resizing: s, onResizeEnd: t } = dl(), n = R(null), o = R(!1), l = () => {
      Vs(() => {
        const i = n.value;
        o.value = i.offsetWidth < i.scrollWidth;
      });
    }, r = t(l);
    return vt(l), Ws(r), (i, c) => (u(), f("div", $l, [
      h("div", {
        class: "type-truncate",
        ref_key: "text",
        ref: n
      }, [
        g(i.$slots, "default")
      ], 512),
      o.value && !A(s) ? (u(), S(yt, {
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
          h("div", Cl, [
            g(i.$slots, "default")
          ])
        ]),
        _: 3
      })) : p("", !0)
    ]));
  }
}, sh = {
  __name: "UluTab",
  setup(e) {
    return (s, t) => (u(), S(A(Qn), null, {
      default: k((n) => [
        g(s.$slots, "default", ie(he(n)))
      ]),
      _: 3
    }));
  }
}, nh = /* @__PURE__ */ Object.assign({
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
    return (s, t) => (u(), S(A(eo), {
      defaultIndex: e.defaultIndex,
      vertical: e.vertical
    }, {
      default: k((n) => [
        h("div", {
          class: m(["tabs", {
            "tabs--vertical": e.vertical
          }])
        }, [
          g(s.$slots, "default", ie(he(n)))
        ], 2)
      ]),
      _: 3
    }, 8, ["defaultIndex", "vertical"]));
  }
}), oh = {
  __name: "UluTabList",
  setup(e) {
    return (s, t) => (u(), S(A(to), { class: "tabs__tablist" }, {
      default: k(() => [
        g(s.$slots, "default")
      ]),
      _: 3
    }));
  }
}, lh = {
  __name: "UluTabPanel",
  setup(e) {
    return (s, t) => (u(), S(A(so), null, {
      default: k((n) => [
        g(s.$slots, "default", ie(he(n)))
      ]),
      _: 3
    }));
  }
}, rh = {
  __name: "UluTabPanels",
  setup(e) {
    return (s, t) => (u(), S(A(no), null, {
      default: k((n) => [
        g(s.$slots, "default", ie(he(n)))
      ]),
      _: 3
    }));
  }
}, Tl = {
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
      const { to: e, href: s, download: t, target: n } = this, o = e ? { to: e } : s ? { href: s } : {};
      return s && (n && (o.target = n), t && (o.download = typeof t == "string" ? t : !0)), o;
    }
  }
}, Al = { key: 1 };
function Ol(e, s, t, n, o, l) {
  const r = K("UluIcon");
  return u(), S(z(l.element), Q({
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
      }, null, 8, ["icon"])) : p("", !0),
      (e.$slots.default || t.text) && !t.iconOnly ? (u(), f("span", Al, [
        g(e.$slots, "default", {}, () => [
          C(w(t.text), 1)
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
const xl = /* @__PURE__ */ j(Tl, [["render", Ol]]), Ul = {
  name: "UluAlert",
  components: {
    UluButton: xl,
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
}, El = { class: "layout-flex" }, Bl = { class: "type-small" }, Rl = {
  key: 0,
  class: "margin-left-auto align-self-center"
};
function jl(e, s, t, n, o, l) {
  const r = K("UluIcon");
  return u(), f("div", {
    class: m(["callout", n.resolvedModifiers])
  }, [
    h("div", El, [
      O(r, {
        class: m(["type-large margin-right-small", `color-${t.type}`]),
        icon: t.icon || `type:${t.type}`
      }, null, 8, ["class", "icon"]),
      h("div", Bl, [
        h("div", null, [
          g(e.$slots, "title", {}, () => [
            h("strong", null, w(t.title), 1)
          ])
        ]),
        h("div", null, [
          g(e.$slots, "description", {}, () => [
            C(w(t.description), 1)
          ])
        ])
      ]),
      e.$slots.action ? (u(), f("div", Rl, [
        g(e.$slots, "action")
      ])) : p("", !0)
    ])
  ], 2);
}
const ih = /* @__PURE__ */ j(Ul, [["render", jl]]), Il = ["aria-hidden"], Ml = {
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
      return o ? "button" : l ? Ge : r ? "a" : "span";
    });
    return (o, l) => (u(), S(z(n.value), {
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
          }, w(e.text), 9, Il)) : g(o.$slots, "default", { key: 1 }),
          e.alt ? (u(), f("span", Ml, w(e.alt), 1)) : p("", !0)
        ], 2)
      ]),
      _: 3
    }, 8, ["class", "to", "href", "onClick"]));
  }
}, Pl = { class: "badge-stack" }, ah = {
  __name: "UluBadgeStack",
  props: {
    /**
     * Array of props for each badge
     */
    items: Array
  },
  setup(e) {
    return (s, t) => (u(), f("ul", Pl, [
      (u(!0), f(U, null, E(e.items, (n, o) => (u(), f("li", {
        class: "badge-stack__item",
        key: o
      }, [
        O(zl, Q({ ref_for: !0 }, n), null, 16)
      ]))), 128))
    ]));
  }
}, Fl = {
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
      const { to: e, href: s, download: t, target: n } = this, o = e ? { to: e } : s ? { href: s } : {};
      return s && (n && (o.target = n), t && (o.download = typeof t == "string" ? t : !0)), o;
    }
  }
}, Ll = {
  key: 1,
  class: "button-verbose__body"
};
function Vl(e, s, t, n, o, l) {
  const r = K("UluIcon");
  return u(), S(z(l.element), Q({
    class: ["button-verbose", [
      {
        "button-verbose--inline": t.inline,
        "button-verbose--full-width": t.fullWidth
      },
      n.resolvedModifiers
    ]]
  }, l.attrs), {
    default: k(() => [
      e.$slots.title || t.title ? (u(), S(z(t.titleElement), {
        key: 0,
        class: "button-verbose__title"
      }, {
        default: k(() => [
          g(e.$slots, "title", {}, () => [
            C(w(t.title), 1)
          ])
        ]),
        _: 3
      })) : p("", !0),
      e.$slots.default || t.body ? (u(), f("span", Ll, [
        g(e.$slots, "default", {}, () => [
          C(w(t.body), 1)
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
const ch = /* @__PURE__ */ j(Fl, [["render", Vl]]), Hl = {
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
function Nl(e, s, t, n, o, l) {
  return u(), f("div", {
    class: m(["callout", [n.resolvedModifiers, { "full-height": t.fullHeight }]])
  }, [
    g(e.$slots, "default")
  ], 2);
}
const uh = /* @__PURE__ */ j(Hl, [["render", Nl]]), Dl = { class: "card__body" }, Wl = { class: "card__main" }, Xl = ["href", "target"], ql = {
  key: 0,
  class: "card__aside"
}, Gl = ["src", "alt"], Yl = {
  key: 1,
  class: "card__footer"
}, dh = {
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
    const l = R(null), r = R(null), { resolvedModifiers: i } = me({ props: t, baseClass: "card" }), c = R(null), a = R(!1), d = _(() => t.proxyClick && !t.to && !t.href), v = _(() => d.value && (t.titleTo || t.titleHref)), y = _(() => d.value && !v.value), b = _(() => d.value || null), T = _(() => ({
      selectorPrevent: "input, select, textarea, button, a, [tabindex='-1']",
      mousedownDurationPrevent: 250,
      ...t.proxyClickOptions
    })), $ = _(() => d.value ? "pointer" : null), B = _(() => t.to ? Ge : t.href ? "a" : t.cardElement);
    function G({ target: P, timeStamp: Z }) {
      if (!b.value) return;
      const { selectorPrevent: _e } = T.value;
      a.value = !1, P.closest(_e) || (a.value = !0, c.value = Z);
    }
    function te({ timeStamp: P }) {
      if (!b.value || !a.value) return;
      const { mousedownDurationPrevent: Z } = T.value;
      if (P - c.value < Z) {
        if (v.value)
          r.value?.click();
        else if (y.value) {
          const _e = l.value?.querySelector("[data-ulu-card-proxy-target]");
          _e ? _e.click() : n("proxy-click");
        }
      }
      a.value = !1;
    }
    return (P, Z) => (u(), S(z(B.value), {
      ref_key: "cardRoot",
      ref: l,
      class: m(["card", [
        {
          "card--horizontal": e.horizontal || e.horizontalCenter,
          "card--horizontal-center": e.horizontalCenter,
          "card--overlay": e.overlay
        },
        A(i)
      ]]),
      onMousedown: G,
      onMouseup: te,
      style: q({ cursor: $.value }),
      target: e.target,
      to: e.to,
      href: e.href,
      "data-ulu-proxy-click-init": b.value
    }, {
      default: k(() => [
        h("div", Dl, [
          h("div", Wl, [
            e.title || A(o).title ? (u(), S(z(e.titleElement), {
              key: 0,
              class: m(["card__title", e.classes.title])
            }, {
              default: k(() => [
                e.titleTo ? (u(), S(A(Ge), {
                  key: 0,
                  class: "card__title-link",
                  to: e.titleTo,
                  ref_key: "link",
                  ref: r
                }, {
                  default: k(() => [
                    g(P.$slots, "title", {}, () => [
                      C(w(e.title), 1)
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
                  g(P.$slots, "title", {}, () => [
                    C(w(e.title), 1)
                  ])
                ], 8, Xl)) : g(P.$slots, "title", { key: 2 }, () => [
                  C(w(e.title), 1)
                ])
              ]),
              _: 3
            }, 8, ["class"])) : p("", !0),
            g(P.$slots, "body")
          ]),
          A(o).aside ? (u(), f("div", ql, [
            g(P.$slots, "aside")
          ])) : p("", !0)
        ]),
        A(o).image || e.imageSrc ? (u(), f("div", {
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
            }, null, 8, Gl)
          ])
        ], 2)) : p("", !0),
        A(o).footer ? (u(), f("div", Yl, [
          g(P.$slots, "footer")
        ])) : p("", !0)
      ]),
      _: 3
    }, 40, ["class", "style", "target", "to", "href", "data-ulu-proxy-click-init"]));
  }
}, fh = {
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
    return (o, l) => (u(), f("dl", {
      class: m(["definition-list", [A(n), e.classes.list]])
    }, [
      (u(!0), f(U, null, E(e.items, (r, i) => (u(), f("div", {
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
            C(w(r.term), 1)
          ])
        ], 2),
        h("dd", {
          class: m(e.classes.description)
        }, [
          g(o.$slots, "description", {
            item: r,
            index: i
          }, () => [
            C(w(r.description), 1)
          ])
        ], 2)
      ], 2))), 128))
    ], 2));
  }
}, Kl = ["href", "target"], Jl = { class: "external-link__text" }, hh = {
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
          C(w(e.text), 1)
        ])
      ]),
      O(D, {
        class: "external-link__icon margin-left-small-x display-inline",
        icon: e.icon || "type:externalLink"
      }, null, 8, ["icon"])
    ], 8, Kl));
  }
}, mh = {
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
    return (n, o) => (u(), S(z(t.value), {
      class: m([
        {
          "list-ordered": e.ordered,
          "list-unordered": e.unordered,
          "list-lines": e.lines,
          "list-compact": e.compact
        },
        e.classes.list
      ]),
      style: q({
        listStyleType: e.listStyleType
      }),
      reversed: e.reversed,
      start: e.start
    }, {
      default: k(() => [
        (u(!0), f(U, null, E(e.items, (l, r) => (u(), f("li", {
          key: r,
          class: m(e.classes.listItem)
        }, [
          g(n.$slots, "default", {
            item: l,
            index: r
          }, () => [
            C(w(l), 1)
          ])
        ], 2))), 128))
      ]),
      _: 3
    }, 8, ["class", "style", "reversed", "start"]));
  }
}, Zl = {}, Ql = { id: "main-content" };
function er(e, s) {
  return u(), f("main", Ql, [
    g(e.$slots, "default")
  ]);
}
const gh = /* @__PURE__ */ j(Zl, [["render", er]]), tr = { class: "spoke-spinner__spinner" }, vh = {
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
      h("div", tr, [
        (u(), f(U, null, E(12, (n) => h("div", { key: n })), 64))
      ])
    ], 2));
  }
}, sr = ["role", "aria-labelledby"], nr = ["id"], or = { class: "menu-stack__list" }, lr = { class: "menu-stack__selectable" }, rr = ["type", "id", "name", "value", "checked", "onChange"], ir = ["for"], un = {
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
      "aria-labelledby": l.value
    }, [
      e.legend ? (u(), f("div", {
        key: 0,
        id: l.value,
        class: "hidden-visually"
      }, w(e.legend), 9, nr)) : p("", !0),
      h("ul", or, [
        (u(!0), f(U, null, E(e.options, (y) => (u(), f("li", {
          class: "menu-stack__item",
          key: y.uid
        }, [
          h("div", lr, [
            h("input", {
              type: e.type,
              id: i(y),
              name: o.value,
              value: y.uid,
              checked: c(y),
              onChange: (b) => a(y, b)
            }, null, 40, rr),
            h("label", {
              for: i(y)
            }, [
              g(d.$slots, "default", { option: y }, () => [
                C(w(y?.label || y?.title || y?.text), 1)
              ])
            ], 8, ir)
          ])
        ]))), 128))
      ])
    ], 10, sr));
  }
}, ar = ["href", "download"], cr = { class: "margin-left-small-x" }, yh = {
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
        O(D, {
          class: "ui-icon",
          icon: e.icon
        }, null, 8, ["icon"]),
        h("span", cr, [
          C(w(e.file.name) + " ", 1),
          e.noFileSize ? p("", !0) : (u(), S(on, {
            key: 0,
            text: n.value,
            small: "",
            outline: ""
          }, null, 8, ["text"]))
        ])
      ])
    ], 8, ar));
  }
}, ur = { class: "site-form__item site-form__item--file" }, dr = ["for"], fr = ["multiple", "id"], ph = {
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
    return (r, i) => (u(), f("div", ur, [
      h("label", {
        class: m({ "hidden-visually": e.labelHidden }),
        for: A(o)
      }, [
        g(r.$slots, "label", {}, () => [
          C(w(e.label), 1)
        ])
      ], 10, dr),
      h("input", Q({
        type: "file",
        onChange: l,
        multiple: e.multiple,
        id: A(o)
      }, e.inputAttrs), null, 16, fr)
    ]));
  }
}, bh = {
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
      e.error || e.warning ? (u(), S(D, {
        key: 0,
        icon: `type:${e.error ? "error" : "warning"}`
      }, null, 8, ["icon"])) : p("", !0),
      g(s.$slots, "default")
    ], 2));
  }
}, hr = { class: "site-form__item site-form__item--select" }, mr = ["for"], gr = ["id", "value"], vr = ["value"], _h = {
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
    return (n, o) => (u(), f("div", hr, [
      h("label", {
        class: m({ "hidden-visually": e.labelHidden }),
        for: A(t)
      }, [
        g(n.$slots, "default", {}, () => [
          C(w(e.label), 1)
        ])
      ], 10, mr),
      h("select", {
        id: A(t),
        value: e.modelValue,
        onInput: o[0] || (o[0] = (l) => n.$emit("update:modelValue", l.target.value))
      }, [
        o[1] || (o[1] = h("option", {
          disabled: "",
          value: ""
        }, "Please select one", -1)),
        (u(!0), f(U, null, E(e.options, (l, r) => (u(), f("option", {
          key: r,
          value: l.value
        }, w(l.text), 9, vr))), 128))
      ], 40, gr)
    ]));
  }
}, yr = { class: "site-form__item site-form__item--text" }, pr = ["for"], br = ["value", "id"], wh = {
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
        for: A(t)
      }, [
        g(n.$slots, "default", {}, () => [
          C(w(e.label), 1)
        ])
      ], 10, pr),
      h("input", {
        type: "text",
        value: e.modelValue,
        onInput: o[0] || (o[0] = (l) => n.$emit("update:modelValue", l.target.value)),
        id: A(t)
      }, null, 40, br)
    ]));
  }
}, _r = { class: "form-theme search-form type-small" }, wr = { class: "search-form__field" }, Sr = ["placeholder"], kr = {
  class: "search-form__submit button button--primary",
  "aria-label": "Submit Search"
}, Sh = {
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
    return (s, t) => (u(), f("div", _r, [
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
        O(D, { icon: "type:search" })
      ])
    ]));
  }
}, kh = {
  __name: "UluAdaptiveLayout",
  setup(e) {
    const s = Te("uluIsMobile");
    return (t, n) => !A(s) || !t.$slots.mobile ? g(t.$slots, "default", { key: 0 }) : g(t.$slots, "mobile", { key: 1 });
  }
}, $r = {
  name: "UluDataGrid",
  async mounted() {
    const e = () => oo(this.$el);
    e(), this.resizeHandler = Xt(e, 200, !1, this), window.addEventListener("resize", this.resizeHandler);
  },
  beforeUnmount() {
    this.resizeHandler && window.removeEventListener("resize", this.resizeHandler);
  }
};
function Cr(e, s, t, n, o, l) {
  return u(), f("div", null, [
    g(e.$slots, "default")
  ]);
}
const $h = /* @__PURE__ */ j($r, [["render", Cr]]), Tr = {
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
}, Ar = {
  key: 0,
  class: "rail__item rail__item--pull"
};
function Or(e, s, t, n, o, l) {
  const r = K("UluIcon");
  return u(), f("div", {
    class: m(["rail rail--title-rail", {
      "rail--rule": t.rule
    }])
  }, [
    h("div", {
      class: m(["rail__item rail__item--title", t.classes.itemTitle])
    }, [
      (u(), S(z(t.titleElement), {
        class: m(["layout-flex type-max-width-small no-margin", t.classes.title]),
        style: q({ alignItems: t.iconAlign })
      }, {
        default: k(() => [
          t.icon ? (u(), S(r, {
            key: 0,
            class: m(t.classes.icon),
            icon: t.icon
          }, null, 8, ["class", "icon"])) : p("", !0),
          g(e.$slots, "default", {}, () => [
            C(w(t.title), 1)
          ])
        ]),
        _: 3
      }, 8, ["class", "style"]))
    ], 2),
    e.$slots.end ? (u(), f("div", Ar, [
      g(e.$slots, "end")
    ])) : p("", !0)
  ], 2);
}
const Ch = /* @__PURE__ */ j(Tr, [["render", Or]]), xr = {
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
function Ur(e, s, t, n, o, l) {
  const r = K("router-link"), i = K("UluIcon");
  return t.items.length ? (u(), f("nav", {
    key: 0,
    class: m(t.classes.nav),
    "aria-label": "Breadcrumb"
  }, [
    h("ol", {
      class: m(t.classes.list)
    }, [
      (u(!0), f(U, null, E(t.items, (c, a) => (u(), f("li", {
        key: a,
        class: m(t.classes.item)
      }, [
        c.current ? (u(), f("span", {
          key: 1,
          class: m(c.current)
        }, [
          g(e.$slots, "default", { item: c }, () => [
            C(w(c.title), 1)
          ])
        ], 2)) : (u(), S(r, {
          key: 0,
          to: c.to,
          class: m(t.classes.link),
          "aria-current": c.current ? "page" : null
        }, {
          default: k(() => [
            g(e.$slots, "default", { item: c }, () => [
              C(w(c.title), 1)
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
const Th = /* @__PURE__ */ j(xr, [["render", Ur]]), Er = {
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
function Br(e, s, t, n, o, l) {
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
const Ah = /* @__PURE__ */ j(Er, [["render", Br]]), Rr = { class: "pager__items js-pager__items" }, jr = {
  key: 0,
  class: "pager__item pager__item--first"
}, Ir = {
  key: 1,
  class: "pager__item pager__item--previous"
}, Mr = {
  key: 2,
  class: "pager__item pager__item--ellipsis",
  role: "presentation"
}, zr = { class: "hidden-visually" }, Pr = {
  key: 3,
  class: "pager__item pager__item--ellipsis",
  role: "presentation"
}, Fr = {
  key: 4,
  class: "pager__item pager__item--next"
}, Lr = {
  key: 5,
  class: "pager__item pager__item--last"
}, Oh = {
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
      const i = K("router-link");
      return e.items ? (u(), f("nav", {
        key: 0,
        class: "pager",
        role: "navigation",
        "aria-labelledby": n
      }, [
        (u(), S(z(e.titleElement), {
          id: n,
          class: "hidden-visually"
        }, {
          default: k(() => [...r[0] || (r[0] = [
            C("Pagination", -1)
          ])]),
          _: 1
        })),
        h("ul", Rr, [
          e.items.first ? (u(), f("li", jr, [
            O(i, Q({
              to: e.items.first.href,
              title: "Go to first page"
            }, e.items.first.attributes), {
              default: k(() => [
                r[1] || (r[1] = h("span", { class: "hidden-visually" }, "First page", -1)),
                O(D, {
                  icon: "fas fa-angle-double-left",
                  "aria-hidden": "true"
                })
              ]),
              _: 1
            }, 16, ["to"])
          ])) : p("", !0),
          e.items.previous ? (u(), f("li", Ir, [
            O(i, Q({
              to: e.items.previous.href,
              title: "Go to previous page",
              rel: "prev"
            }, e.items.previous.attributes), {
              default: k(() => [
                r[2] || (r[2] = h("span", { class: "hidden-visually" }, "Previous page", -1)),
                O(D, {
                  icon: "fas fa-angle-left",
                  "aria-hidden": "true"
                })
              ]),
              _: 1
            }, 16, ["to"])
          ])) : p("", !0),
          e.ellipses.previous ? (u(), f("li", Mr, "…")) : p("", !0),
          (u(!0), f(U, null, E(e.items.pages, (c, a) => (u(), f("li", {
            key: a,
            class: m(["pager__item", { "is-active": e.current == a }])
          }, [
            O(i, Q({
              to: c.href,
              title: o(a)
            }, { ref_for: !0 }, c.attributes), {
              default: k(() => [
                h("span", zr, w(e.current == a ? "Current page" : "Page"), 1),
                C(" " + w(a), 1)
              ]),
              _: 2
            }, 1040, ["to", "title"])
          ], 2))), 128)),
          e.ellipses.next ? (u(), f("li", Pr, "…")) : p("", !0),
          e.items.next ? (u(), f("li", Fr, [
            O(i, Q({
              to: e.items.next.href,
              title: "Go to next page",
              rel: "next"
            }, e.items.next.attributes), {
              default: k(() => [
                r[3] || (r[3] = h("span", { class: "hidden-visually" }, "Next page", -1)),
                O(D, {
                  icon: "fas fa-angle-right",
                  "aria-hidden": "true"
                })
              ]),
              _: 1
            }, 16, ["to"])
          ])) : p("", !0),
          e.items.last ? (u(), f("li", Lr, [
            O(i, Q({
              to: e.items.last.href,
              title: "Go to last page"
            }, e.items.last.attributes), {
              default: k(() => [
                r[4] || (r[4] = h("span", { class: "hidden-visually" }, "Last page", -1)),
                O(D, {
                  icon: "fas fa-angle-double-right",
                  "aria-hidden": "true"
                })
              ]),
              _: 1
            }, 16, ["to"])
          ])) : p("", !0)
        ])
      ])) : p("", !0);
    };
  }
}, Vr = {}, Hr = {
  class: "site-skip-link hidden-visually-focusable",
  href: "#main-content"
};
function Nr(e, s) {
  return u(), f("a", Hr, " Skip to main content ");
}
const xh = /* @__PURE__ */ j(Vr, [["render", Nr]]), Dr = {
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
function Wr(e, s, t, n, o, l) {
  return t.text != null ? (u(), S(z(t.element), { key: 0 }, {
    default: k(() => [
      C(w(t.text), 1)
    ]),
    _: 1
  })) : p("", !0);
}
const Uh = /* @__PURE__ */ j(Dr, [["render", Wr]]), Xr = {
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
    return (s, t) => e.unwrapped ? g(s.$slots, "default", { key: 1 }) : (u(), S(z(e.is), { key: 0 }, {
      default: k(() => [
        g(s.$slots, "default")
      ]),
      _: 3
    }));
  }
}, qr = {}, Gr = { style: { display: "none" } };
function Yr(e, s) {
  return u(), f("span", Gr);
}
const Eh = /* @__PURE__ */ j(qr, [["render", Yr]]), Kr = {};
function Jr(e, s) {
  const t = K("router-view");
  return u(), S(t);
}
const Bh = /* @__PURE__ */ j(Kr, [["render", Jr]]), Zr = {
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
function ei(e, s, t, n, o, l) {
  return u(), f("img", {
    src: l.src,
    alt: t.alt
  }, null, 8, Qr);
}
const Rh = /* @__PURE__ */ j(Zr, [["render", ei]]), ti = {
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
function si(e, s, t, n, o, l) {
  return u(!0), f(U, null, E(parseInt(t.amount), (r) => (u(), S(z(t.element), { key: r }, {
    default: k(() => [...s[0] || (s[0] = [
      C(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed semper erat tincidunt tellus vestibulum dictum. Fusce vel augue commodo, egestas diam sed, accumsan leo. Maecenas congue nec nisl et ullamcorper. Maecenas tincidunt, tortor et viverra eleifend, enim leo vestibulum ipsum, quis placerat mi nisi nec ex. Vivamus a justo volutpat, scelerisque elit eget, lacinia ex. Phasellus dapibus sollicitudin tortor, vitae suscipit nunc condimentum ut. Cras suscipit feugiat nibh nec consectetur. Phasellus vitae quam blandit, cursus metus ut, placerat mi. Sed tempor lacus non est interdum imperdiet nec quis metus. Praesent vel eleifend diam. Donec tincidunt eget purus sed posuere. ", -1)
    ])]),
    _: 2
  }, 1024))), 128);
}
const jh = /* @__PURE__ */ j(ti, [["render", si]]), ni = {
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
function oi(e, s, t, n, o, l) {
  return l.title ? (u(), f("p", {
    key: 0,
    tabindex: "-1",
    class: "hidden-visually",
    ref: "el"
  }, w(l.title), 513)) : p("", !0);
}
const Ih = /* @__PURE__ */ j(ni, [["render", oi]]), Mh = {
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
    return (t, n) => e.content?.length ? (u(), S(Xr, {
      key: 0,
      class: "wysiwyg",
      unwrapped: e.noWrapper
    }, {
      default: k(() => [
        O(A(lo), {
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
      ro.to(this, {
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
function ri(e, s, t, n, o, l) {
  return u(), f("span", null, [
    g(e.$slots, "default", { currentValue: o.currentValue }, () => [
      C(w(o.currentValue), 1)
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
}, mi = { class: "progress-bar__value progress-bar__value--total" }, Ph = {
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
      e.label || r.$slots.label || r.$slots.icon || e.amountInHeader ? (u(), f("div", ii, [
        e.label ? (u(), S(z(e.labelElement), {
          key: 0,
          class: m(["progress-bar__label", [e.classes.label, { "hidden-visually": e.labelHidden }]])
        }, {
          default: k(() => [
            g(r.$slots, "label", {}, () => [
              C(w(e.label), 1)
            ])
          ]),
          _: 3
        }, 8, ["class"])) : p("", !0),
        e.amountInHeader ? (u(), f("div", ai, [
          i[0] || (i[0] = h("strong", { class: "hidden-visually" }, "Amount:", -1)),
          g(r.$slots, "valueAmount", { value: e.amount }, () => [
            C(w(e.formatValue(e.amount, "amount")), 1)
          ])
        ])) : p("", !0),
        r.$slots.icon ? (u(), f("div", ci, [
          g(r.$slots, "icon")
        ])) : p("", !0)
      ])) : p("", !0),
      h("div", ui, [
        h("div", {
          class: "progress-bar__bar",
          style: q({ width: n.value })
        }, null, 4),
        e.deficit > 0 ? (u(), f("div", {
          key: 0,
          class: "progress-bar__bar--deficit",
          style: q({ width: o.value })
        }, null, 4)) : p("", !0)
      ]),
      !e.noValues && !e.amountInHeader && !e.loader && !e.indeterminate ? (u(), f("div", di, [
        h("div", fi, [
          i[1] || (i[1] = h("strong", { class: "hidden-visually" }, "Amount:", -1)),
          g(r.$slots, "valueAmount", { value: e.amount }, () => [
            C(w(e.formatValue(e.amount, "amount")), 1)
          ])
        ]),
        e.deficit > 0 ? (u(), f("div", hi, [
          i[2] || (i[2] = h("strong", { class: "hidden-visually" }, "Deficit: ", -1)),
          g(r.$slots, "valueDeficit", { value: e.deficit }, () => [
            C("-" + w(e.formatValue(e.deficit, "deficit")), 1)
          ])
        ])) : p("", !0),
        h("div", mi, [
          i[3] || (i[3] = h("strong", { class: "hidden-visually" }, "Total:", -1)),
          g(r.$slots, "valueTotal", { value: e.total }, () => [
            C(w(e.formatValue(e.total, "total")), 1)
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
}, Fh = {
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
    fe(() => s.percentage, (c, a) => {
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
    return vt(() => {
      o();
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
            style: q({ strokeDasharray: l.value })
          }, null, 4),
          a[1] || (a[1] = h("circle", {
            class: "progress-circle__chart-mask",
            cx: "16",
            cy: "16"
          }, null, -1))
        ])),
        !r.value && !e.noValue ? (u(), f("strong", pi, [
          g(c.$slots, "value", { value: e.percentage }, () => [
            C(w(e.formatValue(e.percentage)), 1)
          ])
        ])) : p("", !0)
      ]),
      r.value && !e.noValue ? (u(), f("strong", bi, [
        g(c.$slots, "value", { value: e.percentage }, () => [
          C(w(e.formatValue(e.percentage)), 1)
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
  const s = e.sort((n, o) => n.size - o.size), t = new Set(s[0]);
  for (let n = 1; n < s.length; n++) {
    for (const o of t)
      s[n].has(o) || t.delete(o);
    if (t.size === 0) break;
  }
  return t;
}
function nt(e, s, t) {
  if (!e || e.length === 0)
    return t;
  const n = e.map((o) => {
    const l = o.children.map((r) => {
      const i = `${o.uid}:${r.uid}`;
      return s.get(i) || /* @__PURE__ */ new Set();
    });
    return o.match === "all" ? ut(l) : _i(l);
  });
  return ut(n);
}
function wi(e, s) {
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
function Lh(e, s = {}) {
  const {
    initialFacets: t,
    facetFields: n,
    initialSearchValue: o = "",
    initialSortType: l = "az",
    noDefaultSorts: r = !1,
    extraSortTypes: i = {},
    searchOptions: c = {},
    getSortValue: a = (x) => x.title || x.label || "",
    countMode: d = "none",
    // 'none', 'simple', 'intuitive'
    urlSync: v
  } = s, y = (x) => x.sort((I, X) => {
    const M = a(I), F = a(X);
    return M && F ? String(M).localeCompare(String(F)) : M ? -1 : F ? 1 : 0;
  }), b = {
    az: { text: "A-Z", sort: y },
    za: { text: "Z-A", sort: (x) => y(x).reverse() }
  };
  function T(x) {
    return (x || []).map((I) => ({
      ...I,
      open: I.open || !1,
      children: I.children.map((X) => ({
        ...X,
        selected: X.selected || !1
      })),
      selectedCount: 0
    }));
  }
  const $ = R([]), B = R(o), G = R(l), te = _(() => !n || !e.value?.length ? null : wi(e.value, n)), P = _(() => ({
    ...r ? {} : b,
    ...i
  })), Z = _(() => {
    const x = /* @__PURE__ */ new Map(), I = se.value;
    if (!I || !n) return x;
    const X = new Map(n.map((M) => {
      const F = M.getValue || ((Y) => Y[M.uid]);
      return [M.uid, F];
    }));
    for (let M = 0; M < I.length; M++) {
      const F = I[M];
      for (const Y of n) {
        const H = X.get(Y.uid)(F), W = Array.isArray(H) ? H : H ? [H] : [];
        for (const oe of W) {
          const re = `${Y.uid}:${oe}`;
          x.has(re) || x.set(re, /* @__PURE__ */ new Set()), x.get(re).add(M);
        }
      }
    }
    return x;
  }), _e = _(() => ({
    shouldSort: !0,
    keys: ["title", "label", "description", "author"],
    ...c
  })), se = _(() => B.value?.length ? new io(e.value, _e.value).search(B.value).map((I) => I.item) : e.value), ae = _(() => {
    const x = [];
    return $.value.forEach((I) => {
      const X = I.children.filter((M) => M.selected);
      X.length > 0 && x.push({ ...I, children: X });
    }), x;
  }), le = _(() => {
    if (!ae.value.length)
      return se.value;
    const x = Z.value;
    if (x.size === 0 && se.value.length > 0 && n?.length > 0)
      return [];
    const I = new Set(se.value.map((F, Y) => Y)), X = nt(ae.value, x, I), M = [];
    for (const F of X)
      M.push(se.value[F]);
    return M;
  }), we = _(() => {
    const x = P.value[G.value]?.sort;
    return typeof x != "function" ? le.value : x([...le.value]);
  });
  function Be() {
    $.value.forEach((x) => {
      x.children && x.children.forEach((I) => I.selected = !1), x.selectedCount = 0;
    });
  }
  function At({ groupUid: x, facetUid: I, selected: X }) {
    const M = $.value.find((F) => F.uid === x);
    if (M) {
      !M.multiple && X && M.children.forEach((Y) => {
        Y.uid !== I && (Y.selected = !1);
      });
      const F = M.children.find((Y) => Y.uid === I);
      F && (F.selected = X), M.selectedCount = M.children.filter((Y) => Y.selected).length;
    }
  }
  if (fe(te, (x) => {
    const I = T(t || x);
    I.forEach((X) => {
      X.selectedCount = X.children.filter((M) => M.selected).length;
    }), $.value = I;
  }, { immediate: !0 }), fe([ae, se], ([x, I], [X, M]) => {
    if (!(d === "none" || !$.value.length) && !(x === X && I === M)) {
      if (d === "simple") {
        const F = Z.value;
        if (F.size === 0 && se.value.length > 0 && n?.length > 0)
          return;
        const Y = new Set(se.value.map((L, H) => H));
        $.value.forEach((L) => {
          const H = x.filter((oe) => oe.uid !== L.uid), W = nt(H, F, Y);
          L.children.forEach((oe) => {
            const re = `${L.uid}:${oe.uid}`, ce = F.get(re) || /* @__PURE__ */ new Set(), ue = ut([W, ce]);
            oe.count = ue.size;
          });
        });
      } else if (d === "intuitive") {
        const F = Z.value;
        if (F.size === 0 && se.value.length > 0 && n?.length > 0)
          return;
        const Y = new Set(se.value.map((H, W) => W)), L = nt(x, F, Y);
        $.value.forEach((H) => {
          H.children.forEach((W) => {
            const oe = `${H.uid}:${W.uid}`, re = F.get(oe) || /* @__PURE__ */ new Set();
            if (W.selected)
              if (H.multiple) {
                const ce = ut([L, re]);
                W.count = ce.size;
              } else
                W.count = L.size;
            else {
              const ce = [];
              for (const st of x)
                ce.push({ ...st, children: [...st.children] });
              let ue = ce.find((st) => st.uid === H.uid);
              ue || (ue = { ...H, children: [] }, ce.push(ue)), H.multiple ? ue.children.push(W) : ue.children = [W];
              const xn = nt(ce, F, Y);
              W.count = xn.size;
            }
          });
        });
      }
    }
  }, { deep: !0, immediate: !0 }), v?.router && v?.route) {
    const { router: x, route: I } = v, X = () => $.value && $.value.length > 0, M = () => {
      if (!X()) return;
      const L = { ...I.query };
      delete L.sort, delete L.search, $.value.forEach((H) => delete L[H.uid]), G.value && G.value !== l && (L.sort = G.value), B.value && (L.search = B.value), ae.value.forEach((H) => {
        H.children.length > 0 && (L[H.uid] = H.children.map((W) => W.uid).join(","));
      }), JSON.stringify(L) !== JSON.stringify(I.query) && x.push({ query: L });
    }, F = () => {
      const L = I.query;
      L.sort && (G.value = L.sort), L.search && (B.value = L.search);
      const H = /* @__PURE__ */ new Map();
      $.value.forEach((W) => {
        const oe = L[W.uid] ? L[W.uid].split(",") : [];
        H.set(W.uid, new Set(oe));
      }), $.value.forEach((W) => {
        const oe = H.get(W.uid) || /* @__PURE__ */ new Set();
        W.children.forEach((re) => {
          const ce = re.selected, ue = oe.has(re.uid);
          ce !== ue && At({ groupUid: W.uid, facetUid: re.uid, selected: ue });
        });
      });
    }, Y = fe($, (L) => {
      L && L.length > 0 && (F(), Y());
    }, { deep: !0, immediate: !0 });
    fe([G, B, ae], M, { deep: !0 }), fe(() => I.query, F);
  }
  return {
    facets: $,
    searchValue: B,
    selectedSort: G,
    sortTypes: P,
    displayItems: we,
    selectedFacets: ae,
    clearFilters: Be,
    handleFacetChange: At
  };
}
const Si = ["onClick"], Vh = {
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
      (u(), S(z(e.labelElement), {
        class: m(["facets-active__label", e.classes.label])
      }, {
        default: k(() => [
          g(i.$slots, "label", {}, () => [
            c[0] || (c[0] = C(" Active Filters: ", -1))
          ])
        ]),
        _: 3
      }, 8, ["class"])),
      h("ul", {
        class: m(["facets-active__list", e.classes.list])
      }, [
        (u(!0), f(U, null, E(o.value, (a) => (u(), f("li", {
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
              C(" " + w(a.label), 1)
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
        C(w(c.label) + " ", 1),
        c.count !== void 0 ? (u(), f("span", ki, "(" + w(c.count) + ")", 1)) : p("", !0)
      ]),
      _: 1
    }, 8, ["legend", "type", "options", "compact", "model-value"]));
  }
}, $i = { class: "facets-filters" }, Hh = {
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
    return (o, l) => (u(), f("div", $i, [
      (u(!0), f(U, null, E(e.facets, (r) => (u(), S(Lt, {
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
            C(w(r.name), 1)
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
            onFacetChange: l[0] || (l[0] = (i) => t("facet-change", i))
          }, null, 8, ["children", "groupUid", "groupName", "type", "compact", "model-value"]),
          r.children.length > e.maxVisible ? (u(), S(Lt, {
            key: 0,
            class: m(["facets-filters__more-facets", e.classes.moreFacets])
          }, {
            trigger: k(({ isOpen: i }) => [
              C(w(i ? "View Less" : "Show More"), 1)
            ]),
            default: k(() => [
              O(dt, {
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
          }, 1032, ["class"])) : p("", !0)
        ]),
        _: 2
      }, 1032, ["classes", "startOpen"]))), 128))
    ]));
  }
}, Ci = { class: "facets-filters" }, Nh = {
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
    return (o, l) => (u(), f("div", Ci, [
      (u(!0), f(U, null, E(e.facets, (r) => (u(), S(ms, {
        key: r.uid,
        modifiers: e.accordionModifiers,
        startOpen: r.open
      }, {
        trigger: k(({ isOpen: i }) => [
          g(o.$slots, "groupTrigger", {
            group: r,
            isOpen: i
          }, () => [
            C(w(r.name), 1)
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
            onFacetChange: l[0] || (l[0] = (i) => t("facet-change", i))
          }, null, 8, ["children", "groupUid", "groupName", "type", "compact", "model-value"]),
          r.children.length > e.maxVisible ? (u(), S(ms, {
            key: 0,
            class: m(["facets-filters__more-facets", e.classes.moreFacets]),
            modifiers: e.accordionModifiers
          }, {
            trigger: k(({ isOpen: i }) => [
              C(w(i ? "View Less" : "Show More"), 1)
            ]),
            default: k(() => [
              O(dt, {
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
          }, 1032, ["class", "modifiers"])) : p("", !0)
        ]),
        _: 2
      }, 1032, ["modifiers", "startOpen"]))), 128))
    ]));
  }
}, Dh = {
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
      (u(!0), f(U, null, E(e.facets, (a) => (u(), f("div", {
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
              label: l(a)
            }, () => [
              h("span", null, [
                C(w(a.name) + ": ", 1),
                h("strong", null, w(l(a)), 1)
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
}, Ti = { class: "facets-dropdown-filters" }, Ai = ["for"], Oi = ["id", "onChange"], xi = { value: "" }, Ui = ["value", "selected"], Wh = {
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
    return (o, l) => (u(), f("div", Ti, [
      (u(!0), f(U, null, E(e.facets, (r) => (u(), f("div", {
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
          (u(!0), f(U, null, E(r.children, (i) => (u(), f("option", {
            key: i.uid,
            value: i.uid,
            selected: i.selected
          }, w(i.label), 9, Ui))), 128))
        ], 40, Oi)
      ]))), 128))
    ]));
  }
}, Ei = { class: "facets-header-layout" }, Bi = { class: "facets-header-layout__header" }, Ri = { class: "facets-header-layout__main" }, Xh = {
  __name: "UluFacetsHeaderLayout",
  setup(e) {
    return (s, t) => (u(), f("div", Ei, [
      h("div", Bi, [
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
    return (s, t) => (u(), f("div", ji, [
      e.items.length ? (u(), S(Ns, {
        key: 0,
        tag: e.tag,
        name: e.transitionName,
        class: m(["facets-results__list", e.classes.list])
      }, {
        default: k(() => [
          (u(!0), f(U, null, E(e.items, (n, o) => (u(), f("li", {
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
      }, 8, ["tag", "name", "class"])) : (u(), f("div", Ii, [
        g(s.$slots, "empty", {}, () => [
          t[0] || (t[0] = h("p", null, "No matching items found.", -1))
        ])
      ]))
    ]));
  }
}, Mi = { class: "facets-search" }, zi = ["placeholder"], Gh = {
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
    return (i, c) => (u(), f("div", Mi, [
      h("label", {
        class: m(e.classes.searchLabel),
        for: l
      }, [...c[1] || (c[1] = [
        h("strong", null, "Search", -1)
      ])], 2),
      Me(h("input", {
        id: l,
        class: m(e.classes.searchInput),
        "onUpdate:modelValue": c[0] || (c[0] = (a) => r.value = a),
        type: "text",
        placeholder: e.placeholder
      }, null, 10, zi), [
        [Ln, r.value]
      ])
    ]));
  }
}, Pi = { class: "facets-sidebar__header" }, Fi = { class: "facets-sidebar__mobile-controls" }, Li = { class: "facets-sidebar__body" }, Vi = { class: "facets-sidebar__main" }, Yh = {
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
    const s = R(!1), t = ht("uluIsMobile"), n = R(null), o = R(null), l = _(() => t.value ? o.value : n.value);
    return (r, i) => (u(), f("div", {
      class: m(["facets-sidebar", { "facets-sidebar--filters-hidden": A(t) }])
    }, [
      h("div", Pi, [
        g(r.$slots, "header")
      ]),
      Me(h("div", Fi, [
        h("button", {
          class: m(e.classes.mobileButton),
          onClick: i[0] || (i[0] = (c) => s.value = !0)
        }, w(e.mobileButtonText), 3)
      ], 512), [
        [Mt, A(t)]
      ]),
      h("div", Li, [
        Me(h("div", {
          class: "facets-sidebar__sidebar",
          ref_key: "desktopTarget",
          ref: n
        }, null, 512), [
          [Mt, !A(t)]
        ]),
        h("div", Vi, [
          g(r.$slots, "main")
        ])
      ]),
      A(t) ? (u(), S(Ks, {
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
      }, 8, ["modelValue"])) : p("", !0),
      l.value ? (u(), S(mt, {
        key: 1,
        to: l.value
      }, [
        g(r.$slots, "sidebar")
      ], 8, ["to"])) : p("", !0)
    ], 2));
  }
}, Hi = ["for"], Ni = ["value", "id"], Di = ["value"], Kh = {
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
      ], 10, Hi),
      h("select", {
        value: e.modelValue,
        onChange: r[0] || (r[0] = (i) => n("update:modelValue", i.target.value)),
        id: o.value,
        class: m(e.classes.sortFormSelect)
      }, [
        (u(!0), f(U, null, E(e.sortTypes, (i, c) => (u(), f("option", {
          value: c,
          key: c
        }, w(i.text), 9, Di))), 128))
      ], 42, Ni)
    ], 2));
  }
}, dn = Symbol(), fn = Symbol(), kt = Symbol(), Wi = {
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
      let o = 0;
      const l = (r) => {
        r.forEach(({ target: i, isIntersecting: c }) => {
          const a = this.getSectionIndex(i), d = i.offsetTop, v = s[a], y = a === 0 && o > d, b = a === s.length - 1 && o < d;
          v && this.$nextTick(() => {
            c ? (t(v), v.active = !0) : (y && !n || b && v.active) && t(), this.$emit("section-change", {
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
}, Xi = { class: "scroll-anchors" };
function qi(e, s, t, n, o, l) {
  return u(), f("div", Xi, [
    g(e.$slots, "default")
  ]);
}
const Jh = /* @__PURE__ */ j(Wi, [["render", qi]]), Gi = {
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
}, Yi = ["href"];
function Ki(e, s, t, n, o, l) {
  return l.sections.length ? (u(), S(z(t.element), {
    key: 0,
    class: "scroll-anchors__nav"
  }, {
    default: k(() => [
      h("ul", null, [
        (u(!0), f(U, null, E(l.sections, (r, i) => (u(), f("li", {
          key: i,
          class: m({ "is-active": r.active })
        }, [
          h("a", {
            class: m({ "is-active": r.active }),
            href: `#${r.titleId}`
          }, w(r.title), 11, Yi)
        ], 2))), 128))
      ])
    ]),
    _: 1
  })) : p("", !0);
}
const Zh = /* @__PURE__ */ j(Gi, [["render", Ki]]), Ji = {
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
      e && !this.indicatorAnimReady && qs(() => {
        this.indicatorAnimReady = !0;
      });
    }
  },
  methods: {
    addLinkRef(e, s) {
      this.linkRefs[e] = s;
    }
  }
}, Zi = { class: "scroll-anchors__rail" }, Qi = ["href"];
function ea(e, s, t, n, o, l) {
  return l.sections.length ? (u(), S(z(t.element), {
    key: 0,
    class: "scroll-anchors__nav scroll-anchors__nav--animated"
  }, {
    default: k(() => [
      h("ul", Zi, [
        (u(!0), f(U, null, E(l.sections, (r, i) => (u(), f("li", {
          key: i,
          class: m({ "is-active": r.active })
        }, [
          h("a", {
            class: m({ "is-active": r.active }),
            ref_for: !0,
            ref: (c) => l.addLinkRef(i, c),
            href: `#${r.titleId}`
          }, w(r.title), 11, Qi)
        ], 2))), 128))
      ]),
      h("div", {
        class: m(["scroll-anchors__indicator", {
          "scroll-anchors__indicator--can-transition": o.indicatorAnimReady
        }]),
        ref: "indicator",
        style: q({
          opacity: l.indicatorStyles ? "1" : "0",
          transform: `translateY(${l.indicatorStyles.y}px)`,
          height: `${l.indicatorStyles.height}px`
        })
      }, null, 6)
    ]),
    _: 1
  })) : p("", !0);
}
const Qh = /* @__PURE__ */ j(Ji, [["render", ea]]), ta = {
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
      titleId: e || `sas-title-${ao(s)}`
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
function sa(e, s, t, n, o, l) {
  return u(), f("div", {
    class: m([t.wrapperClass, { [t.activeClass]: t.activeClass && l.section?.active }]),
    ref: "element"
  }, [
    (u(), S(z(t.titleElement), {
      class: m(t.titleClass),
      id: o.titleId
    }, {
      default: k(() => [
        C(w(t.title), 1)
      ]),
      _: 1
    }, 8, ["class", "id"])),
    g(e.$slots, "default", { section: l.section })
  ], 2);
}
const em = /* @__PURE__ */ j(ta, [["render", sa]]), na = {
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
}, tm = {
  __name: "UluShowSkeleton",
  props: {
    /**
     * If true will show whatever is passed to slot, else skeleton text
     */
    when: Boolean
  },
  setup(e) {
    return (s, t) => e.when ? (u(), S(na, {
      key: 1,
      inline: ""
    })) : g(s.$slots, "default", { key: 0 });
  }
}, sm = {
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
    const s = e, t = _(() => co(s.lines, () => {
      const o = it(70, 100);
      let l = 0;
      const r = () => {
        const a = o - l, d = it(15, a);
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
      (u(!0), f(U, null, E(t.value, (l, r) => (u(), f("div", { key: r }, [
        (u(!0), f(U, null, E(l, (i) => (u(), f("span", {
          key: i,
          class: m(["skeleton skeleton--text skeleton--inline", { "skeleton--background-alt": i.alt }]),
          style: q({ width: `${i.width}%` })
        }, null, 6))), 128))
      ]))), 128))
    ]));
  }
}, oa = { class: "skeleton skeleton-block--media" }, nm = {
  __name: "UluSkeletonMedia",
  setup(e) {
    return (s, t) => (u(), f("div", oa, [
      O(D, { icon: "type:image" })
    ]));
  }
}, la = {
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
}, ra = { class: "slideshow" }, ia = {
  class: "slideshow__control-context",
  ref: "context"
}, aa = {
  class: "slideshow__track-crop",
  ref: "crop"
}, ca = {
  class: "slideshow__track",
  ref: "track"
}, ua = ["tabindex"], da = { class: "slideshow__controls" }, fa = { class: "slideshow__controls-item slideshow__controls-item--previous" }, ha = ["disabled"], ma = { class: "slideshow__controls-item slideshow__controls-item--next" }, ga = ["disabled"], va = {
  key: 0,
  class: "slideshow__nav",
  ref: "nav"
}, ya = ["onClick"], pa = { class: "hidden-visually" };
function ba(e, s, t, n, o, l) {
  const r = K("UluIcon");
  return u(), f("div", ra, [
    h("div", ia, [
      h("div", aa, [
        h("ul", ca, [
          (u(!0), f(U, null, E(o.slides, (i, c) => (u(), f("li", {
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
          ], 10, ua))), 128))
        ], 512)
      ], 512),
      h("ul", da, [
        h("li", fa, [
          h("button", {
            class: "slideshow__control-button slideshow__control-button--previous",
            "aria-label": "Scroll Right",
            onClick: s[0] || (s[0] = (...i) => l.previous && l.previous(...i)),
            disabled: !l.canScrollLeft
          }, [
            O(r, {
              class: "slideshow__control-icon",
              icon: "type:previous"
            })
          ], 8, ha)
        ]),
        h("li", ma, [
          h("button", {
            class: "slideshow__control-button slideshow__control-button--next",
            "aria-label": "Scroll Left",
            onClick: s[1] || (s[1] = (...i) => l.next && l.next(...i)),
            disabled: !l.canScrollRight
          }, [
            O(r, {
              class: "slideshow__control-icon",
              icon: "type:next"
            })
          ], 8, ga)
        ])
      ])
    ], 512),
    t.noNav ? p("", !0) : (u(), f("ul", va, [
      (u(!0), f(U, null, E(o.slides, (i, c) => (u(), f("li", {
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
            h("span", pa, "Item " + w(c + 1), 1)
          ])
        ], 10, ya)
      ], 2))), 128))
    ], 512))
  ]);
}
const _a = /* @__PURE__ */ j(la, [["render", ba]]), wa = {
  name: "ImageSlideShow",
  components: {
    UluSlideShow: _a
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
}, Sa = ["src", "alt"], ka = { class: "slideshow__image-actions" }, $a = ["src", "alt"];
function Ca(e, s, t, n, o, l) {
  const r = K("AppButton"), i = K("UluSlideShow");
  return u(), S(i, {
    class: "slideshow--images",
    items: t.images,
    onSlideChange: l.slideChange
  }, {
    slide: k(({ item: c }) => [
      h("img", {
        src: c.src,
        alt: c.alt
      }, null, 8, Sa),
      h("div", ka, [
        t.selectButton ? (u(), S(r, {
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
    nav: k(({ index: c }) => [
      h("img", {
        src: t.images[c].src,
        alt: `View image ${c}`
      }, null, 8, $a)
    ]),
    _: 1
  }, 8, ["items", "onSlideChange"]);
}
const om = /* @__PURE__ */ j(wa, [["render", Ca]]), Ta = {
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
function Aa(e, s, t, n, o, l) {
  return u(), f("li", {
    class: m(["slideshow__slide", { "is-active": t.active }])
  }, [
    g(e.$slots, "default")
  ], 2);
}
const lm = /* @__PURE__ */ j(Ta, [["render", Aa]]), Oa = {
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
}, xa = ["id"], Ua = ["innerHTML"];
function Ea(e, s, t, n, o, l) {
  return u(!0), f(U, null, E(t.rows, (r, i) => (u(), f("tr", {
    key: `br-${i}`,
    id: t.optionalAttr(t.isActual && r.id),
    class: m(t.resolveClasses(t.classes.row, { row: r.data, rowIndex: i, isActual: t.isActual, foot: t.foot })),
    style: q({
      height: r.height
    })
  }, [
    (u(!0), f(U, null, E(t.rowColumns, (c, a) => (u(), S(z(c.rowHeader ? "th" : "td"), {
      id: t.optionalAttr(t.isActual && c.rowHeader && c.getRowHeaderId(i)),
      scope: t.optionalAttr(t.isActual && c.rowHeader && "row"),
      key: `bc-${a}`,
      headers: t.optionalAttr(t.isActual && t.getCellHeaders(c, i)),
      class: m(t.resolveClasses(c.class, { column: c, index: a, isActual: t.isActual, row: r, rowIndex: i, foot: t.foot })),
      style: q({
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
        }, null, 8, Ua)) : (u(), f(U, { key: 2 }, [
          C(w(t.value({ row: r, column: c, rowIndex: i, isActual: t.isActual, foot: t.foot })), 1)
        ], 64))
      ]),
      _: 2
    }, 1032, ["id", "scope", "headers", "class", "style"]))), 128))
  ], 14, xa))), 128);
}
const Ba = /* @__PURE__ */ j(Oa, [["render", Ea]]), Ra = {
  name: "UluTableStickyTable",
  components: {
    UluTableStickyRows: Ba
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
}, ja = ["aria-hidden"], Ia = {
  key: 0,
  class: "table-sticky__caption"
}, Ma = ["id"], za = ["id", "rowspan", "colspan", "data-child-columns", "aria-sort", "scope", "headers"], Pa = ["innerHTML"], Fa = {
  class: "table-sticky__sort-icon",
  "aria-hidden": "true"
}, La = { class: "table-sticky__sort-icon-inner" }, Va = ["innerHTML"], Ha = { key: 1 }, Na = { key: 2 };
function Da(e, s, t, n, o, l) {
  const r = K("UluTableStickyRows");
  return u(), f("table", {
    class: m(t.resolveClasses(t.classes.table, { isActual: t.isActual })),
    "aria-hidden": t.isActual ? "false" : "true"
  }, [
    t.caption ? (u(), f("caption", Ia, w(t.caption), 1)) : p("", !0),
    h("thead", null, [
      (u(!0), f(U, null, E(t.headerRows, (i, c) => (u(), f("tr", {
        key: `hr-${c}`,
        id: l.optionalAttr(t.isActual && i.id),
        class: m(t.resolveClasses(t.classes.rowHeader, { row: i, rowIndex: c, isActual: t.isActual })),
        style: q({
          height: i.height
        })
      }, [
        (u(!0), f(U, null, E(i.columns, (a, d) => (u(), f("th", {
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
          style: q({
            width: a.width
          }),
          "aria-sort": a.sort ? a.sortAscending ? "ascending" : "descending" : null,
          scope: l.optionalAttr(t.isActual && (a.colspan > 1 ? "colgroup" : "col")),
          headers: l.optionalAttr(t.isActual && l.getHeaderHeaders(a, c)),
          ref_for: !0,
          ref: (v) => l.addHeaderRef(a, v)
        }, [
          a.sortable ? (u(), S(z(t.isActual ? "button" : "div"), {
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
              }, null, 8, Pa)) : (u(), f(U, { key: 2 }, [
                C(w(t.getColumnTitle({ column: a, index: d, isActual: t.isActual })), 1)
              ], 64)),
              h("span", Fa, [
                h("span", La, [
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
            }, null, 8, Va)) : (u(), f(U, { key: 2 }, [
              C(w(t.getColumnTitle({ column: a, index: d, isActual: t.isActual })), 1)
            ], 64))
          ], 64))
        ], 14, za))), 128))
      ], 14, Ma))), 128))
    ]),
    t.rows ? (u(), f("tbody", Ha, [
      O(r, {
        rows: t.rows,
        rowColumns: t.rowColumns,
        optionalAttr: l.optionalAttr,
        resolveClasses: t.resolveClasses,
        getCellHeaders: l.getCellHeaders,
        isActual: t.isActual,
        columnWidth: t.columnWidth,
        classes: t.classes,
        value: l.value
      }, je({ _: 2 }, [
        E(e.$slots, (i, c) => ({
          name: c,
          fn: k((a) => [
            g(e.$slots, c, ie(he(a)))
          ])
        }))
      ]), 1032, ["rows", "rowColumns", "optionalAttr", "resolveClasses", "getCellHeaders", "isActual", "columnWidth", "classes", "value"])
    ])) : p("", !0),
    t.footerRows ? (u(), f("tfoot", Na, [
      O(r, {
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
      }, je({ _: 2 }, [
        E(e.$slots, (i, c) => ({
          name: c,
          fn: k((a) => [
            g(e.$slots, c, ie(he(a)))
          ])
        }))
      ]), 1032, ["rows", "rowColumns", "optionalAttr", "resolveClasses", "getCellHeaders", "isActual", "columnWidth", "classes", "value"])
    ])) : p("", !0)
  ], 10, ja);
}
const Wa = /* @__PURE__ */ j(Ra, [["render", Da]]);
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
var qa = Array.prototype, Ga = qa.splice;
function Ya(e) {
  var s = this.__data__, t = $t(s, e);
  if (t < 0)
    return !1;
  var n = s.length - 1;
  return t == n ? s.pop() : Ga.call(s, t, 1), --this.size, !0;
}
function Ka(e) {
  var s = this.__data__, t = $t(s, e);
  return t < 0 ? void 0 : s[t][1];
}
function Ja(e) {
  return $t(this.__data__, e) > -1;
}
function Za(e, s) {
  var t = this.__data__, n = $t(t, e);
  return n < 0 ? (++this.size, t.push([e, s])) : t[n][1] = s, this;
}
function be(e) {
  var s = -1, t = e == null ? 0 : e.length;
  for (this.clear(); ++s < t; ) {
    var n = e[s];
    this.set(n[0], n[1]);
  }
}
be.prototype.clear = Xa;
be.prototype.delete = Ya;
be.prototype.get = Ka;
be.prototype.has = Ja;
be.prototype.set = Za;
function Qa() {
  this.__data__ = new be(), this.size = 0;
}
function ec(e) {
  var s = this.__data__, t = s.delete(e);
  return this.size = s.size, t;
}
function tc(e) {
  return this.__data__.get(e);
}
function sc(e) {
  return this.__data__.has(e);
}
var mn = typeof global == "object" && global && global.Object === Object && global, nc = typeof self == "object" && self && self.Object === Object && self, ge = mn || nc || Function("return this")(), Fe = ge.Symbol, gn = Object.prototype, oc = gn.hasOwnProperty, lc = gn.toString, Ne = Fe ? Fe.toStringTag : void 0;
function rc(e) {
  var s = oc.call(e, Ne), t = e[Ne];
  try {
    e[Ne] = void 0;
    var n = !0;
  } catch {
  }
  var o = lc.call(e);
  return n && (s ? e[Ne] = t : delete e[Ne]), o;
}
var ic = Object.prototype, ac = ic.toString;
function cc(e) {
  return ac.call(e);
}
var uc = "[object Null]", dc = "[object Undefined]", vs = Fe ? Fe.toStringTag : void 0;
function et(e) {
  return e == null ? e === void 0 ? dc : uc : vs && vs in Object(e) ? rc(e) : cc(e);
}
function Ct(e) {
  var s = typeof e;
  return e != null && (s == "object" || s == "function");
}
var fc = "[object AsyncFunction]", hc = "[object Function]", mc = "[object GeneratorFunction]", gc = "[object Proxy]";
function vn(e) {
  if (!Ct(e))
    return !1;
  var s = et(e);
  return s == hc || s == mc || s == fc || s == gc;
}
var Rt = ge["__core-js_shared__"], ys = function() {
  var e = /[^.]+$/.exec(Rt && Rt.keys && Rt.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function vc(e) {
  return !!ys && ys in e;
}
var yc = Function.prototype, pc = yc.toString;
function Ue(e) {
  if (e != null) {
    try {
      return pc.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var bc = /[\\^$.*+?()[\]{}|]/g, _c = /^\[object .+?Constructor\]$/, wc = Function.prototype, Sc = Object.prototype, kc = wc.toString, $c = Sc.hasOwnProperty, Cc = RegExp(
  "^" + kc.call($c).replace(bc, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Tc(e) {
  if (!Ct(e) || vc(e))
    return !1;
  var s = vn(e) ? Cc : _c;
  return s.test(Ue(e));
}
function Ac(e, s) {
  return e?.[s];
}
function Ee(e, s) {
  var t = Ac(e, s);
  return Tc(t) ? t : void 0;
}
var Ze = Ee(ge, "Map"), Qe = Ee(Object, "create");
function Oc() {
  this.__data__ = Qe ? Qe(null) : {}, this.size = 0;
}
function xc(e) {
  var s = this.has(e) && delete this.__data__[e];
  return this.size -= s ? 1 : 0, s;
}
var Uc = "__lodash_hash_undefined__", Ec = Object.prototype, Bc = Ec.hasOwnProperty;
function Rc(e) {
  var s = this.__data__;
  if (Qe) {
    var t = s[e];
    return t === Uc ? void 0 : t;
  }
  return Bc.call(s, e) ? s[e] : void 0;
}
var jc = Object.prototype, Ic = jc.hasOwnProperty;
function Mc(e) {
  var s = this.__data__;
  return Qe ? s[e] !== void 0 : Ic.call(s, e);
}
var zc = "__lodash_hash_undefined__";
function Pc(e, s) {
  var t = this.__data__;
  return this.size += this.has(e) ? 0 : 1, t[e] = Qe && s === void 0 ? zc : s, this;
}
function Oe(e) {
  var s = -1, t = e == null ? 0 : e.length;
  for (this.clear(); ++s < t; ) {
    var n = e[s];
    this.set(n[0], n[1]);
  }
}
Oe.prototype.clear = Oc;
Oe.prototype.delete = xc;
Oe.prototype.get = Rc;
Oe.prototype.has = Mc;
Oe.prototype.set = Pc;
function Fc() {
  this.size = 0, this.__data__ = {
    hash: new Oe(),
    map: new (Ze || be)(),
    string: new Oe()
  };
}
function Lc(e) {
  var s = typeof e;
  return s == "string" || s == "number" || s == "symbol" || s == "boolean" ? e !== "__proto__" : e === null;
}
function Tt(e, s) {
  var t = e.__data__;
  return Lc(s) ? t[typeof s == "string" ? "string" : "hash"] : t.map;
}
function Vc(e) {
  var s = Tt(this, e).delete(e);
  return this.size -= s ? 1 : 0, s;
}
function Hc(e) {
  return Tt(this, e).get(e);
}
function Nc(e) {
  return Tt(this, e).has(e);
}
function Dc(e, s) {
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
Ve.prototype.clear = Fc;
Ve.prototype.delete = Vc;
Ve.prototype.get = Hc;
Ve.prototype.has = Nc;
Ve.prototype.set = Dc;
var Wc = 200;
function Xc(e, s) {
  var t = this.__data__;
  if (t instanceof be) {
    var n = t.__data__;
    if (!Ze || n.length < Wc - 1)
      return n.push([e, s]), this.size = ++t.size, this;
    t = this.__data__ = new Ve(n);
  }
  return t.set(e, s), this.size = t.size, this;
}
function He(e) {
  var s = this.__data__ = new be(e);
  this.size = s.size;
}
He.prototype.clear = Qa;
He.prototype.delete = ec;
He.prototype.get = tc;
He.prototype.has = sc;
He.prototype.set = Xc;
function qc(e, s) {
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
function Gc(e, s, t) {
  s == "__proto__" && ps ? ps(e, s, {
    configurable: !0,
    enumerable: !0,
    value: t,
    writable: !0
  }) : e[s] = t;
}
var Yc = Object.prototype, Kc = Yc.hasOwnProperty;
function Jc(e, s, t) {
  var n = e[s];
  (!(Kc.call(e, s) && hn(n, t)) || t === void 0 && !(s in e)) && Gc(e, s, t);
}
function Zc(e, s) {
  for (var t = -1, n = Array(e); ++t < e; )
    n[t] = s(t);
  return n;
}
function tt(e) {
  return e != null && typeof e == "object";
}
var Qc = "[object Arguments]";
function bs(e) {
  return tt(e) && et(e) == Qc;
}
var yn = Object.prototype, eu = yn.hasOwnProperty, tu = yn.propertyIsEnumerable, su = bs(/* @__PURE__ */ function() {
  return arguments;
}()) ? bs : function(e) {
  return tt(e) && eu.call(e, "callee") && !tu.call(e, "callee");
}, os = Array.isArray;
function nu() {
  return !1;
}
var pn = typeof exports == "object" && exports && !exports.nodeType && exports, _s = pn && typeof module == "object" && module && !module.nodeType && module, ou = _s && _s.exports === pn, ws = ou ? ge.Buffer : void 0, lu = ws ? ws.isBuffer : void 0, bn = lu || nu, ru = 9007199254740991, iu = /^(?:0|[1-9]\d*)$/;
function au(e, s) {
  var t = typeof e;
  return s = s ?? ru, !!s && (t == "number" || t != "symbol" && iu.test(e)) && e > -1 && e % 1 == 0 && e < s;
}
var cu = 9007199254740991;
function _n(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= cu;
}
var uu = "[object Arguments]", du = "[object Array]", fu = "[object Boolean]", hu = "[object Date]", mu = "[object Error]", gu = "[object Function]", vu = "[object Map]", yu = "[object Number]", pu = "[object Object]", bu = "[object RegExp]", _u = "[object Set]", wu = "[object String]", Su = "[object WeakMap]", ku = "[object ArrayBuffer]", $u = "[object DataView]", Cu = "[object Float32Array]", Tu = "[object Float64Array]", Au = "[object Int8Array]", Ou = "[object Int16Array]", xu = "[object Int32Array]", Uu = "[object Uint8Array]", Eu = "[object Uint8ClampedArray]", Bu = "[object Uint16Array]", Ru = "[object Uint32Array]", N = {};
N[Cu] = N[Tu] = N[Au] = N[Ou] = N[xu] = N[Uu] = N[Eu] = N[Bu] = N[Ru] = !0;
N[uu] = N[du] = N[ku] = N[fu] = N[$u] = N[hu] = N[mu] = N[gu] = N[vu] = N[yu] = N[pu] = N[bu] = N[_u] = N[wu] = N[Su] = !1;
function ju(e) {
  return tt(e) && _n(e.length) && !!N[et(e)];
}
function ls(e) {
  return function(s) {
    return e(s);
  };
}
var wn = typeof exports == "object" && exports && !exports.nodeType && exports, qe = wn && typeof module == "object" && module && !module.nodeType && module, Iu = qe && qe.exports === wn, jt = Iu && mn.process, Le = function() {
  try {
    var e = qe && qe.require && qe.require("util").types;
    return e || jt && jt.binding && jt.binding("util");
  } catch {
  }
}(), Ss = Le && Le.isTypedArray, Mu = Ss ? ls(Ss) : ju, zu = Object.prototype, Pu = zu.hasOwnProperty;
function Fu(e, s) {
  var t = os(e), n = !t && su(e), o = !t && !n && bn(e), l = !t && !n && !o && Mu(e), r = t || n || o || l, i = r ? Zc(e.length, String) : [], c = i.length;
  for (var a in e)
    Pu.call(e, a) && !(r && // Safari 9 has enumerable `arguments.length` in strict mode.
    (a == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    o && (a == "offset" || a == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    l && (a == "buffer" || a == "byteLength" || a == "byteOffset") || // Skip index properties.
    au(a, c))) && i.push(a);
  return i;
}
var Lu = Object.prototype;
function Sn(e) {
  var s = e && e.constructor, t = typeof s == "function" && s.prototype || Lu;
  return e === t;
}
function kn(e, s) {
  return function(t) {
    return e(s(t));
  };
}
var Vu = kn(Object.keys, Object), Hu = Object.prototype, Nu = Hu.hasOwnProperty;
function Du(e) {
  if (!Sn(e))
    return Vu(e);
  var s = [];
  for (var t in Object(e))
    Nu.call(e, t) && t != "constructor" && s.push(t);
  return s;
}
function Wu(e) {
  return e != null && _n(e.length) && !vn(e);
}
function Xu(e) {
  return Wu(e) ? Fu(e) : Du(e);
}
var $n = typeof exports == "object" && exports && !exports.nodeType && exports, ks = $n && typeof module == "object" && module && !module.nodeType && module, qu = ks && ks.exports === $n, $s = qu ? ge.Buffer : void 0;
$s && $s.allocUnsafe;
function Gu(e, s) {
  return e.slice();
}
function Yu(e, s) {
  for (var t = -1, n = e == null ? 0 : e.length, o = 0, l = []; ++t < n; ) {
    var r = e[t];
    s(r, t, e) && (l[o++] = r);
  }
  return l;
}
function Ku() {
  return [];
}
var Ju = Object.prototype, Zu = Ju.propertyIsEnumerable, Cs = Object.getOwnPropertySymbols, Qu = Cs ? function(e) {
  return e == null ? [] : (e = Object(e), Yu(Cs(e), function(s) {
    return Zu.call(e, s);
  }));
} : Ku;
function ed(e, s) {
  for (var t = -1, n = s.length, o = e.length; ++t < n; )
    e[o + t] = s[t];
  return e;
}
var td = kn(Object.getPrototypeOf, Object);
function sd(e, s, t) {
  var n = s(e);
  return os(e) ? n : ed(n, t(e));
}
function nd(e) {
  return sd(e, Xu, Qu);
}
var Ht = Ee(ge, "DataView"), Nt = Ee(ge, "Promise"), Dt = Ee(ge, "Set"), Wt = Ee(ge, "WeakMap"), Ts = "[object Map]", od = "[object Object]", As = "[object Promise]", Os = "[object Set]", xs = "[object WeakMap]", Us = "[object DataView]", ld = Ue(Ht), rd = Ue(Ze), id = Ue(Nt), ad = Ue(Dt), cd = Ue(Wt), ye = et;
(Ht && ye(new Ht(new ArrayBuffer(1))) != Us || Ze && ye(new Ze()) != Ts || Nt && ye(Nt.resolve()) != As || Dt && ye(new Dt()) != Os || Wt && ye(new Wt()) != xs) && (ye = function(e) {
  var s = et(e), t = s == od ? e.constructor : void 0, n = t ? Ue(t) : "";
  if (n)
    switch (n) {
      case ld:
        return Us;
      case rd:
        return Ts;
      case id:
        return As;
      case ad:
        return Os;
      case cd:
        return xs;
    }
  return s;
});
var ud = Object.prototype, dd = ud.hasOwnProperty;
function fd(e) {
  var s = e.length, t = new e.constructor(s);
  return s && typeof e[0] == "string" && dd.call(e, "index") && (t.index = e.index, t.input = e.input), t;
}
var Es = ge.Uint8Array;
function rs(e) {
  var s = new e.constructor(e.byteLength);
  return new Es(s).set(new Es(e)), s;
}
function hd(e, s) {
  var t = rs(e.buffer);
  return new e.constructor(t, e.byteOffset, e.byteLength);
}
var md = /\w*$/;
function gd(e) {
  var s = new e.constructor(e.source, md.exec(e));
  return s.lastIndex = e.lastIndex, s;
}
var Bs = Fe ? Fe.prototype : void 0, Rs = Bs ? Bs.valueOf : void 0;
function vd(e) {
  return Rs ? Object(Rs.call(e)) : {};
}
function yd(e, s) {
  var t = rs(e.buffer);
  return new e.constructor(t, e.byteOffset, e.length);
}
var pd = "[object Boolean]", bd = "[object Date]", _d = "[object Map]", wd = "[object Number]", Sd = "[object RegExp]", kd = "[object Set]", $d = "[object String]", Cd = "[object Symbol]", Td = "[object ArrayBuffer]", Ad = "[object DataView]", Od = "[object Float32Array]", xd = "[object Float64Array]", Ud = "[object Int8Array]", Ed = "[object Int16Array]", Bd = "[object Int32Array]", Rd = "[object Uint8Array]", jd = "[object Uint8ClampedArray]", Id = "[object Uint16Array]", Md = "[object Uint32Array]";
function zd(e, s, t) {
  var n = e.constructor;
  switch (s) {
    case Td:
      return rs(e);
    case pd:
    case bd:
      return new n(+e);
    case Ad:
      return hd(e);
    case Od:
    case xd:
    case Ud:
    case Ed:
    case Bd:
    case Rd:
    case jd:
    case Id:
    case Md:
      return yd(e);
    case _d:
      return new n();
    case wd:
    case $d:
      return new n(e);
    case Sd:
      return gd(e);
    case kd:
      return new n();
    case Cd:
      return vd(e);
  }
}
var js = Object.create, Pd = /* @__PURE__ */ function() {
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
function Fd(e) {
  return typeof e.constructor == "function" && !Sn(e) ? Pd(td(e)) : {};
}
var Ld = "[object Map]";
function Vd(e) {
  return tt(e) && ye(e) == Ld;
}
var Is = Le && Le.isMap, Hd = Is ? ls(Is) : Vd, Nd = "[object Set]";
function Dd(e) {
  return tt(e) && ye(e) == Nd;
}
var Ms = Le && Le.isSet, Wd = Ms ? ls(Ms) : Dd, Cn = "[object Arguments]", Xd = "[object Array]", qd = "[object Boolean]", Gd = "[object Date]", Yd = "[object Error]", Tn = "[object Function]", Kd = "[object GeneratorFunction]", Jd = "[object Map]", Zd = "[object Number]", An = "[object Object]", Qd = "[object RegExp]", ef = "[object Set]", tf = "[object String]", sf = "[object Symbol]", nf = "[object WeakMap]", of = "[object ArrayBuffer]", lf = "[object DataView]", rf = "[object Float32Array]", af = "[object Float64Array]", cf = "[object Int8Array]", uf = "[object Int16Array]", df = "[object Int32Array]", ff = "[object Uint8Array]", hf = "[object Uint8ClampedArray]", mf = "[object Uint16Array]", gf = "[object Uint32Array]", V = {};
V[Cn] = V[Xd] = V[of] = V[lf] = V[qd] = V[Gd] = V[rf] = V[af] = V[cf] = V[uf] = V[df] = V[Jd] = V[Zd] = V[An] = V[Qd] = V[ef] = V[tf] = V[sf] = V[ff] = V[hf] = V[mf] = V[gf] = !0;
V[Yd] = V[Tn] = V[nf] = !1;
function rt(e, s, t, n, o, l) {
  var r;
  if (r !== void 0)
    return r;
  if (!Ct(e))
    return e;
  var i = os(e);
  if (i)
    r = fd(e);
  else {
    var c = ye(e), a = c == Tn || c == Kd;
    if (bn(e))
      return Gu(e);
    if (c == An || c == Cn || a && !o)
      r = a ? {} : Fd(e);
    else {
      if (!V[c])
        return o ? e : {};
      r = zd(e, c);
    }
  }
  l || (l = new He());
  var d = l.get(e);
  if (d)
    return d;
  l.set(e, r), Wd(e) ? e.forEach(function(b) {
    r.add(rt(b, s, t, b, e, l));
  }) : Hd(e) && e.forEach(function(b, T) {
    r.set(T, rt(b, s, t, T, e, l));
  });
  var v = nd, y = i ? void 0 : v(e);
  return qc(y || e, function(b, T) {
    y && (T = b, b = e[T]), Jc(r, T, rt(b, s, t, T, e, l));
  }), r;
}
var vf = 1, yf = 4;
function pf(e) {
  return rt(e, vf | yf);
}
const It = (e) => e.every((s) => typeof s == "object"), zs = !0, On = () => window.innerWidth;
let Ps = On();
const bf = {
  name: "UluTableSticky",
  components: {
    UluTableStickyTable: Wa
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
      required: zs
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
      required: zs
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
      resizeHandler: Xt(this.onResize.bind(this), 500, !0),
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
      const e = this.idCreator("c"), s = pf(this.columns), t = (n, o) => {
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
        this.sizesCalculated = !0, qs(() => {
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
}, _f = { class: "table-sticky__sticky-wrap table-sticky__sticky-wrap--header" }, wf = { class: "table-sticky__header-wrap" }, Sf = { class: "table-sticky__sticky-wrap table-sticky__sticky-wrap--first-column-header" }, kf = { class: "table-sticky__sticky-wrap table-sticky__sticky-wrap--controls" }, $f = {
  key: 2,
  class: "table-sticky__controls-inner"
}, Cf = ["disabled"], Tf = ["disabled"], Af = {
  ref: "display",
  class: "table-sticky__display"
};
function Of(e, s, t, n, o, l) {
  const r = K("UluTableStickyTable");
  return u(), f("div", {
    class: m(["table-sticky", {
      "table-sticky--overflown-x": o.overflownX,
      "table-sticky--can-scroll-right": o.canScrollRight,
      "table-sticky--can-scroll-left": o.canScrollLeft
    }])
  }, [
    h("div", _f, [
      h("div", wf, [
        O(r, {
          ref: "header",
          class: "table-sticky__table table-sticky__table--header",
          classes: t.classes,
          caption: t.caption,
          resolveClasses: l.resolveClasses,
          getColumnTitle: t.getColumnTitle,
          idPrefix: t.idPrefix,
          headerRows: o.headerRows,
          style: q({
            opacity: o.sizesCalculated ? "1" : "0",
            pointerEvents: o.sizesCalculated ? "auto" : "none",
            width: o.tableWidth
          }),
          onColumnSorted: l.applySort
        }, je({ _: 2 }, [
          E(e.$slots, (i, c) => ({
            name: c,
            fn: k((a) => [
              g(e.$slots, c, ie(he(a)))
            ])
          }))
        ]), 1032, ["classes", "caption", "resolveClasses", "getColumnTitle", "idPrefix", "headerRows", "style", "onColumnSorted"])
      ])
    ]),
    h("div", Sf, [
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
        style: q({
          opacity: l.headerOpacityX,
          pointerEvents: l.headerVisibleX ? "auto" : "none"
        }),
        onColumnSorted: l.applySort
      }, je({ _: 2 }, [
        E(e.$slots, (i, c) => ({
          name: c,
          fn: k((a) => [
            g(e.$slots, c, ie(he(a)))
          ])
        }))
      ]), 1032, ["classes", "caption", "resolveClasses", "getColumnTitle", "idPrefix", "headerRows", "style", "onColumnSorted"])) : p("", !0)
    ]),
    h("div", kf, [
      Me(h("div", {
        class: m(["table-sticky__controls", l.resolveClasses(t.classes.controls)]),
        ref: "controls"
      }, [
        e.$slots.controls ? g(e.$slots, "controls", {
          key: 0,
          scrollLeft: l.scrollLeft,
          scrollRight: l.scrollRight,
          canScrollLeft: o.canScrollLeft,
          canScrollRight: o.canScrollRight
        }) : t.controlsComponent ? (u(), S(z(t.controlsComponent), {
          key: 1,
          scrollLeft: l.scrollLeft,
          scrollRight: l.scrollRight,
          canScrollLeft: o.canScrollLeft,
          canScrollRight: o.canScrollRight
        }, null, 8, ["scrollLeft", "scrollRight", "canScrollLeft", "canScrollRight"])) : (u(), f("div", $f, [
          h("button", {
            class: m(["table-sticky__control table-sticky__control--left", l.resolveClasses(t.classes.controlButton)]),
            "aria-label": "Scroll Left",
            onClick: s[0] || (s[0] = (...i) => l.scrollLeft && l.scrollLeft(...i)),
            disabled: !o.canScrollLeft
          }, [
            g(e.$slots, "controlLeft", {}, () => [
              s[2] || (s[2] = C(" ← ", -1))
            ])
          ], 10, Cf),
          h("button", {
            class: m(["table-sticky__control table-sticky__control--right", l.resolveClasses(t.classes.controlButton)]),
            "aria-label": "Scroll Right",
            onClick: s[1] || (s[1] = (...i) => l.scrollRight && l.scrollRight(...i)),
            disabled: !o.canScrollRight
          }, [
            g(e.$slots, "controlRight", {}, () => [
              s[3] || (s[3] = C(" → ", -1))
            ])
          ], 10, Tf)
        ]))
      ], 2), [
        [Mt, l.controlsShown]
      ])
    ]),
    h("div", Af, [
      O(r, {
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
      }, je({ _: 2 }, [
        E(e.$slots, (i, c) => ({
          name: c,
          fn: k((a) => [
            g(e.$slots, c, ie(he(a)))
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
      style: q({
        opacity: l.headerOpacityX,
        pointerEvents: l.headerVisibleX ? "auto" : "none"
      }),
      onColumnSorted: l.applySort
    }, je({ _: 2 }, [
      E(e.$slots, (i, c) => ({
        name: c,
        fn: k((a) => [
          g(e.$slots, c, ie(he(a)))
        ])
      }))
    ]), 1032, ["classes", "resolveClasses", "caption", "headerRows", "columnWidth", "rows", "footerRows", "rowColumns", "idPrefix", "getRowValue", "getColumnTitle", "style", "onColumnSorted"])) : p("", !0)
  ], 2);
}
const rm = /* @__PURE__ */ j(bf, [["render", Of]]), im = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  dom: bo,
  router: kl
}, Symbol.toStringTag, { value: "Module" }));
export {
  ms as UluAccordion,
  kh as UluAdaptiveLayout,
  ih as UluAlert,
  zh as UluAnimateNumber,
  zl as UluBadge,
  ah as UluBadgeStack,
  Th as UluBreadcrumb,
  xl as UluButton,
  ch as UluButtonVerbose,
  uh as UluCallout,
  dh as UluCard,
  Lt as UluCollapsible,
  Uh as UluConditionalText,
  Xr as UluConditionalWrapper,
  $h as UluDataGrid,
  fh as UluDefinitionList,
  Zf as UluDropdown,
  Eh as UluEmpty,
  Bh as UluEmptyView,
  hh as UluExternalLink,
  Vh as UluFacetsActiveFilters,
  Nh as UluFacetsFilterAccordions,
  Hh as UluFacetsFilterLists,
  Dh as UluFacetsFilterPopovers,
  Wh as UluFacetsFilterSelects,
  Xh as UluFacetsHeaderLayout,
  dt as UluFacetsList,
  qh as UluFacetsResults,
  Gh as UluFacetsSearch,
  Yh as UluFacetsSidebarLayout,
  Kh as UluFacetsSort,
  yh as UluFileDisplay,
  ph as UluFormFile,
  bh as UluFormMessage,
  _h as UluFormSelect,
  wh as UluFormText,
  D as UluIcon,
  om as UluImageSlideShow,
  mh as UluList,
  gh as UluMain,
  ln as UluMenu,
  cl as UluMenuStack,
  Ks as UluModal,
  Ah as UluNavStrip,
  th as UluOverflowPopover,
  Oh as UluPager,
  Rh as UluPlaceholderImage,
  jh as UluPlaceholderText,
  Ph as UluProgressBar,
  Fh as UluProgressCircle,
  Ih as UluRouteAnnouncer,
  Mh as UluSanityRichText,
  Jh as UluScrollAnchors,
  Zh as UluScrollAnchorsNav,
  Qh as UluScrollAnchorsNavAnimated,
  em as UluScrollAnchorsSection,
  Sh as UluSearchForm,
  un as UluSelectableMenu,
  tm as UluShowSkeleton,
  sm as UluSkeletonContent,
  nm as UluSkeletonMedia,
  na as UluSkeletonText,
  xh as UluSkipLink,
  _a as UluSlideShow,
  lm as UluSlideShowSlide,
  vh as UluSpokeSpinner,
  sh as UluTab,
  nh as UluTabGroup,
  oh as UluTabList,
  lh as UluTabPanel,
  rh as UluTabPanels,
  rm as UluTableSticky,
  Ba as UluTableStickyRows,
  Wa as UluTableStickyTable,
  on as UluTag,
  Ch as UluTitleRail,
  Jf as breakpointsPlugin,
  Wf as corePlugin,
  Yf as modalsPlugin,
  Gf as popoversPlugin,
  Kf as toastPlugin,
  Wo as useBreakpointManager,
  eh as useDocumentTitle,
  Lh as useFacets,
  Ao as useIcon,
  me as useModifiers,
  Qf as usePagination,
  Te as useRequiredInject,
  Xf as useTooltip,
  qf as useTooltipFollow,
  Gs as useUluFloating,
  dl as useWindowResize,
  im as utils
};
