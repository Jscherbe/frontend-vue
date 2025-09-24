import { reactive as ht, inject as mt, ref as E, computed as S, watch as pe, toRef as Un, createElementBlock as f, openBlock as c, normalizeStyle as X, unref as $, normalizeClass as m, createCommentVNode as p, createBlock as _, resolveDynamicComponent as F, normalizeProps as ie, mergeProps as ee, Fragment as x, createTextVNode as C, toDisplayString as b, Teleport as gt, createVNode as O, resolveDirective as zs, withDirectives as Fe, createElementVNode as h, renderSlot as g, withKeys as Ls, nextTick as Vs, markRaw as Te, watchEffect as vt, defineAsyncComponent as Bn, toRefs as Rn, toValue as lt, resolveComponent as K, withModifiers as En, useSlots as Hs, renderList as B, TransitionGroup as Ns, withCtx as k, onMounted as yt, onBeforeUnmount as Ds, isRef as jn, hasInjectionContext as In, getCurrentInstance as Mn, onDeactivated as Fn, onActivated as Pn, onUnmounted as Ws, guardReactiveProps as me, h as zn, watchPostEffect as Ln, vModelText as Vn, vShow as Mt, createSlots as Ie } from "vue";
import { useFloating as Hn, autoUpdate as Nn, inline as Dn, offset as Wn, flip as qn, shift as Xn, arrow as Gn } from "@floating-ui/vue";
import { normalizeClasses as as } from "@ulu/utils/templating.js";
import { preventScroll as Yn, wasClickOutside as Kn, isBrowser as Jn } from "@ulu/utils/browser/dom.js";
import { Resizer as Qn } from "@ulu/frontend/js/ui/resizer.js";
import { debounce as qt } from "@ulu/utils/performance.js";
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
function eh(e, s = {}) {
  const t = ht({ ...is }), { iconsByType: n, ...l } = s || {};
  l && Object.assign(t, l);
  const o = {
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
}, cs = {};
function Ae(e) {
  const s = mt(e, cs);
  if (s === cs) {
    const t = fo[e] || "", n = t ? ` from the '${t}' plugin` : "", l = t ? "Please install missing plugin." : "";
    throw new Error(`Required inject: '${e}'${n} was not provided. ${l}`);
  }
  return s;
}
function Gs(e, s, t) {
  const n = E(null), l = E([]), o = S(() => t.value?.placement), {
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
  pe(
    [t, n],
    ([w, A]) => {
      const T = [];
      w && (w.inline && T.push(Dn()), w.offset && T.push(Wn(w.offset)), T.push(qn()), T.push(Xn()), w.arrow && A && T.push(Gn({ element: A })), l.value = T);
    },
    { immediate: !0, deep: !0 }
  );
  const v = S(() => {
    const w = u.value?.arrow;
    return w ? {
      position: "absolute",
      left: w?.x != null ? `${w.x}px` : "",
      top: w?.y != null ? `${w.y}px` : ""
    } : null;
  });
  pe(t, (w) => {
    w && w.onReady && w.onReady({ update: i, isPositioned: d });
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
    const s = e, t = E(null), n = S(() => s.config), {
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
        n.value.component ? (c(), _(F(n.value.component), ie(ee({ key: 0 }, n.value.componentProps)), null, 16)) : (c(), f(x, { key: 1 }, [
          C(b(n.value.content), 1)
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
    const s = Ae(_t);
    return (t, n) => $(s)?.state.visible ? (c(), _(gt, {
      key: 0,
      to: $(s).state.config.teleportTo || "body"
    }, [
      O(vo, {
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
    const t = s, n = e, l = Q(), o = Q(), r = Ae(bt), a = r ? r.popover : Me.popover, u = S(() => ({ ...a, ...n.config })), i = E(n.startOpen || !1), d = E(null), v = E(null), {
      floatingStyles: y,
      placement: w,
      update: A,
      arrowStyles: T,
      contentArrow: R,
      isFixedStrategy: G
    } = Gs(d, v, u), se = () => {
      P(!i.value);
    }, P = (re) => {
      i.value = re;
      const Se = {
        trigger: $(d),
        content: $(v),
        isOpen: $(i)
      }, Ee = { isOpen: Se.isOpen };
      Vs(() => {
        i.value ? (A(), window.setTimeout(() => {
          we(), n.directFocus(Se), t("toggle", Ee);
        }, 0)) : (ne(), n.directFocus(Se), t("toggle", Ee));
      });
    };
    let Z;
    const we = () => {
      n.clickOutsideCloses && (Z && ne(), Z = (re) => {
        v.value && !v.value.contains(re.target) && P(!1);
      }, document.addEventListener("click", Z));
    }, ne = () => {
      Z && (document.removeEventListener("click", Z), Z = null);
    }, ue = () => P(!1);
    return (re, Se) => {
      const Ee = zs("ulu-tooltip");
      return c(), f(x, null, [
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
          g(re.$slots, "trigger", {
            isOpen: i.value,
            close: ue
          }, () => [
            C(b(e.triggerText), 1)
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
          "data-placement": $(w),
          onKeydown: Se[0] || (Se[0] = Ls((Ot) => P(!1), ["esc"])),
          tabindex: "-1"
        }, [
          h("span", ko, [
            g(re.$slots, "default", {
              isOpen: i.value,
              toggle: se,
              close: ue
            })
          ]),
          re.$slots.footer ? (c(), f("span", $o, [
            g(re.$slots, "footer", { close: ue })
          ])) : p("", !0),
          u.value.arrow ? (c(), f("span", {
            key: 1,
            class: "popover__arrow",
            ref_key: "contentArrow",
            ref: R,
            style: X($(T)),
            "data-ulu-popover-arrow": ""
          }, null, 4)) : p("", !0)
        ], 46, So)
      ], 64);
    };
  }
};
function th() {
  const e = Ae(_t), s = Ae(bt), t = { ...s.popover, ...s.tooltip };
  return {
    showTooltip: (l, o) => {
      const r = Ft(o, t);
      r && e.show(l, r);
    },
    hideTooltip: e.hide,
    tooltipState: e.state
  };
}
function sh(e) {
  const s = Ae(_t), t = Ae(bt);
  e.content || console.warn("Missing content for 'useTooltipFollow' tooltip", e);
  let n;
  const l = E(0), o = E(0), r = S(() => ({
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
  return (typeof t != "object" || Array.isArray(t)) && (t = { content: t }), t.component && (t.component = Te(t.component)), { ...s, ...t };
};
function nh(e, s = {}) {
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
      let w = null;
      const A = () => {
        w || (w = setTimeout(() => {
          l(d, y);
        }, y.delay));
      }, T = () => {
        clearTimeout(w), w = null, o();
      }, { showEvents: R, hideEvents: G } = y;
      R.forEach((se) => d.addEventListener(se, A)), G.forEach((se) => d.addEventListener(se, T)), r.set(d, { show: A, hide: T, showEvents: R, hideEvents: G });
    },
    updated(d, v) {
      const y = r.get(d);
      y && (y.showEvents.forEach((P) => d.removeEventListener(P, y.show)), y.hideEvents.forEach((P) => d.removeEventListener(P, y.hide)));
      const w = Ft(v.value, i);
      if (!w) {
        n.trigger === d && o();
        return;
      }
      let A = null;
      const T = () => {
        A || (A = setTimeout(() => {
          l(d, w);
        }, w.delay));
      }, R = () => {
        clearTimeout(A), A = null, o();
      }, { showEvents: G, hideEvents: se } = w;
      G.forEach((P) => d.addEventListener(P, T)), se.forEach((P) => d.addEventListener(P, R)), r.set(d, { show: T, hide: R, showEvents: G, hideEvents: se }), n.visible && n.trigger === d && l(d, w);
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
  return o.currentModal ? (c(), _(F(o.currentModal.component), ee({ key: 0 }, o.currentProps, {
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
    const s = mt("uluCore"), t = E(null), { getIconProps: n, getClassesFromDefinition: l } = Oo();
    let o;
    const r = e, a = S(() => s.getSetting("fontAwesomeStatic")), u = S(() => s.getSetting("iconComponent")), i = S(() => s.getSetting("iconPropResolver")), d = S(() => {
      const { icon: T } = r;
      if (typeof T == "string" && T.startsWith("type:"))
        try {
          const R = T.substring(5);
          return s.getIcon(R);
        } catch (R) {
          return console.warn(R), null;
        }
      return T;
    }), v = S(() => !u.value || !d.value ? null : i.value(d.value)), y = S(() => n(d.value)), w = S(() => l(d.value)), A = S(() => ({
      "flow-inline": r.spaced
    }));
    return vt(async () => {
      if (!a.value && d.value) {
        if (t.value === null)
          if (o)
            t.value = Te(o.FontAwesomeIcon);
          else {
            const T = Bn(async () => {
              const R = await import("@fortawesome/vue-fontawesome");
              return o = R, R.FontAwesomeIcon;
            });
            t.value = Te(T);
          }
      } else
        t.value = null;
    }), (T, R) => u.value ? (c(), _(F(u.value), ee({ key: 0 }, v.value, { class: A.value }), null, 16, ["class"])) : !a.value && t.value && d.value ? (c(), _(F(t.value), ee({ key: 1 }, y.value, { class: A.value }), null, 16, ["class"])) : a.value && d.value ? (c(), f("span", {
      key: 2,
      class: m([w.value, A.value]),
      "aria-hidden": "true"
    }, null, 2)) : p("", !0);
  }
};
function ce({ props: e, baseClass: s, internal: t = {} }) {
  const { modifiers: n } = Rn(e);
  return { resolvedModifiers: S(() => {
    const o = lt(s), r = as(lt(n)), a = as(lt(t));
    if (!o)
      return console.warn("useModifiers: Missing 'baseClass' argument, modifiers will not be applied."), "";
    const u = /* @__PURE__ */ new Set([...a, ...r]);
    return Array.from(u).map((i) => `${o}--${i}`);
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
      titleId: Q("ulu-modal-title"),
      bodyOverflowValue: null,
      bodyPaddingRightValue: null,
      isResizing: !1
    };
  },
  setup(e) {
    const s = Hs(), t = S(() => e.title || s.title), n = S(() => {
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
    })), { resolvedModifiers: r } = ce({
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
  return c(), _(gt, {
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
            t.titleIcon ? (c(), _(r, {
              key: 0,
              class: "modal__title-icon",
              icon: t.titleIcon
            }, null, 8, ["icon"])) : p("", !0),
            h("span", Ro, b(t.title), 1)
          ])
        ], 10, Bo),
        h("button", {
          class: "modal__close",
          "aria-label": "Close modal",
          onClick: s[0] || (s[0] = (...a) => o.close && o.close(...a)),
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
      e.$slots.footer ? (c(), f("div", {
        key: 1,
        class: m(["site-modal__footer", t.classes.footer])
      }, [
        g(e.$slots, "footer", { close: o.close })
      ], 2)) : p("", !0),
      n.resizerEnabled ? (c(), f("button", Eo, [
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
const Ks = /* @__PURE__ */ j(xo, [["render", jo]]), We = [], Io = E({
  /**
   * Holds active component options (including component, and options)
   */
  active: null,
  /**
   * Populated with any props passed to open method, bound to modal component
   */
  activeProps: null
}), qe = Io.value, us = {
  data: qe,
  modals: We
}, Mo = (e) => ({
  open(s, t = null) {
    const n = this.get(s);
    qe.active = Te(n), qe.activeProps = Object.assign({}, n.props, t);
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
    const t = We.find((n) => n.name === s);
    if (t)
      return t;
    throw new Error(`Unable to find modal named: ${s}`);
  },
  /**
   * Add a modal config
   */
  add(s) {
    const t = e(s);
    We.push(t);
  },
  /**
   * Removes a modal config by name
   * @return {Object} Modal that was removed
   */
  remove(s) {
    const t = We.findIndex((n) => n.name === s);
    if (t > -1)
      return We.splice(t, 1);
    warn("unable to find modal to remove");
  }
}), Fo = {
  modals: [],
  modalOptions: {}
};
function oh(e, s) {
  const t = Object.assign({}, Fo, s), l = Mo((o) => Object.assign({}, t.modalOptions, o));
  e.component("UluModalsDisplay", Ao), e.component("UluModal", Ks), t.modals.forEach((o) => {
    l.add(o);
  }), us.options = t, e.config.globalProperties.$uluModals = l, e.provide("uluModals", l), e.config.globalProperties.$uluModalsState = us;
}
const Po = {
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
        t.toast.icon ? (c(), _(r, {
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
          }, b(t.toast.title), 3),
          t.toast.date ? (c(), f("span", {
            key: 0,
            class: m(["toast__date", t.classes.date])
          }, b(t.toast.date), 3)) : p("", !0)
        ], 2)) : p("", !0),
        t.toast.description ? (c(), f("div", {
          key: 1,
          class: m(["toast__body", t.classes.body])
        }, b(t.toast.description), 3)) : p("", !0)
      ])
    ], 2),
    t.toast.actions?.length ? (c(), f("div", {
      key: 1,
      class: m(["toast__actions", t.classes.actions])
    }, [
      (c(!0), f(x, null, B(t.toast.actions, (a, u) => (c(), f("button", {
        key: u,
        class: m(["toast__action", t.classes.action]),
        onClick: (i) => o.handleAction(i, a)
      }, b(a.label), 11, zo))), 128))
    ], 2)) : p("", !0),
    h("button", {
      class: m(["toast__close", t.classes.closeButton]),
      onClick: s[0] || (s[0] = (...a) => t.toast.close && t.toast.close(...a))
    }, [
      O(r, { icon: "type:close" })
    ], 2)
  ], 2);
}
const Js = /* @__PURE__ */ j(Po, [["render", Lo]]), ds = {
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
}, { assign: xt } = Object;
let Vo = 0;
const ke = ht({
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
  return c(), _(gt, {
    to: l.pluginOptions.teleportTo
  }, [
    O(Ns, {
      class: m(["toast-container", o.classes]),
      name: "toast-animation",
      tag: "div"
    }, {
      default: k(() => [
        (c(!0), f(x, null, B(l.toasts, (r) => (c(), _(F(r.component), {
          key: r.uid,
          toast: r
        }, null, 8, ["toast"]))), 128))
      ]),
      _: 1
    }, 8, ["class"])
  ], 8, ["to"]);
}
const Do = /* @__PURE__ */ j(Ho, [["render", No]]);
function lh(e, s = {}) {
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
  const s = Object.assign({}, Wo, e), t = E(null), n = E(s.initialValue), l = E(null);
  return (async () => {
    if (!Jn()) return;
    await new Promise((d) => {
      document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", () => d()) : d();
    });
    const r = await import("@ulu/frontend/js/ui/breakpoints.js"), { BreakpointManager: a } = r, u = Te(new a(s.plugin));
    t.value = Te(u);
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
function rh(e, s) {
  const t = E(!1), n = Object.assign({}, Xo, s), { breakpointMobile: l } = n, { onReady: o } = n.managerOptions, r = {
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
const zt = /* @__PURE__ */ new Set(), J = /* @__PURE__ */ new WeakMap(), Oe = /* @__PURE__ */ new WeakMap(), oe = /* @__PURE__ */ new WeakMap(), Ke = /* @__PURE__ */ new WeakMap(), Ut = /* @__PURE__ */ new WeakMap(), Xe = /* @__PURE__ */ new WeakMap(), Ce = /* @__PURE__ */ new WeakMap(), $e = /* @__PURE__ */ new WeakMap(), je = /* @__PURE__ */ new WeakSet();
let te, Xt = 0, Gt = 0;
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
function Yt(e) {
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
      await l?.finished, J.set(e, Pe(e)), Yt(e);
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
let ve;
const tn = typeof window < "u" && "ResizeObserver" in window;
tn && (te = document.documentElement, new MutationObserver(Qs), ve = new ResizeObserver(Go), window.addEventListener("scroll", () => {
  Gt = window.scrollY, Xt = window.scrollX;
}), ve.observe(te));
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
  n && Oe.has(e) && Oe.delete(e), ((s = oe.get(e)) === null || s === void 0 ? void 0 : s.playState) !== "finished" && ((t = oe.get(e)) === null || t === void 0 || t.cancel()), ct in e ? fs(e) : l && n ? el(e) : l && !n ? tl(e) : fs(e);
}
function he(e) {
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
    const i = he(a.paddingTop) + he(a.paddingBottom) + he(a.borderTopWidth) + he(a.borderBottomWidth), d = he(a.paddingLeft) + he(a.paddingRight) + he(a.borderRightWidth) + he(a.borderLeftWidth);
    n -= d, o -= d, l -= i, r -= i;
  }
  return [n, o, l, r].map(Math.round);
}
function wt(e) {
  return be in e && Ce.has(e[be]) ? Ce.get(e[be]) : { duration: 250, easing: "ease-in-out" };
}
function nn(e) {
  if (be in e)
    return e[be];
}
function Kt(e) {
  const s = nn(e);
  return s ? je.has(s) : !1;
}
function rt(e, ...s) {
  s.forEach((t) => t(e, Ce.has(e)));
  for (let t = 0; t < e.children.length; t++) {
    const n = e.children.item(t);
    n && s.forEach((l) => l(n, Ce.has(n)));
  }
}
function Jt(e) {
  return Array.isArray(e) ? e : [e];
}
function Qe(e) {
  return typeof e == "function";
}
function el(e) {
  const s = J.get(e), t = Pe(e);
  if (!Kt(e))
    return J.set(e, t);
  if (Zs(e)) {
    J.set(e, t), Yt(e);
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
    const [i, d, v, y] = sn(e, s, t), w = {
      transform: `translate(${o}px, ${r}px)`
    }, A = {
      transform: "translate(0, 0)"
    };
    i !== d && (w.width = `${i}px`, A.width = `${d}px`), v !== y && (w.height = `${v}px`, A.height = `${y}px`), n = e.animate([w, A], {
      duration: l.duration,
      easing: l.easing
    });
  } else {
    const [o] = Jt(l(e, "remain", s, t));
    n = new Animation(o), n.play();
  }
  oe.set(e, n), J.set(e, t), n.addEventListener("finish", Ue.bind(null, e, !1), {
    once: !0
  });
}
function fs(e) {
  ct in e && delete e[ct];
  const s = Pe(e);
  J.set(e, s);
  const t = wt(e);
  if (!Kt(e))
    return;
  if (Zs(e)) {
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
    const [l] = Jt(t(e, "add", s));
    n = new Animation(l), n.play();
  }
  oe.set(e, n), n.addEventListener("finish", Ue.bind(null, e, !1), {
    once: !0
  });
}
function hs(e, s) {
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
  if (n && n.parentNode && n.parentNode instanceof Element ? n.parentNode.insertBefore(e, n) : t && t.parentNode ? t.parentNode.appendChild(e) : (s = nn(e)) === null || s === void 0 || s.appendChild(e), !Kt(e))
    return hs(e);
  const [r, a, u, i] = nl(e), d = wt(e), v = J.get(e);
  (l !== Xt || o !== Gt) && sl(e, l, o, d);
  let y, w = {
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
    Object.assign(e.style, w), y = e.animate([
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
    const [A, T] = Jt(d(e, "remove", v));
    T?.styleReset !== !1 && (w = T?.styleReset || w, Object.assign(e.style, w)), y = new Animation(A), y.play();
  }
  oe.set(e, y), y.addEventListener("finish", () => hs(e, w), {
    once: !0
  });
}
function sl(e, s, t, n) {
  const l = Xt - s, o = Gt - t, r = document.documentElement.style.scrollBehavior;
  if (getComputedStyle(te).scrollBehavior === "smooth" && (document.documentElement.style.scrollBehavior = "auto"), window.scrollTo(window.scrollX + l, window.scrollY + o), !e.parentElement)
    return;
  const u = e.parentElement;
  let i = u.clientHeight, d = u.clientWidth;
  const v = performance.now();
  function y() {
    requestAnimationFrame(() => {
      if (!Qe(n)) {
        const w = i - u.clientHeight, A = d - u.clientWidth;
        v + n.duration > performance.now() ? (window.scrollTo({
          left: window.scrollX - A,
          top: window.scrollY - w
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
  const r = getComputedStyle(o), a = !oe.has(e) || ((s = oe.get(e)) === null || s === void 0 ? void 0 : s.playState) === "finished" ? Pe(o) : J.get(o), u = Math.round(t.top - a.top) - he(r.borderTopWidth), i = Math.round(t.left - a.left) - he(r.borderLeftWidth);
  return [u, i, n, l];
}
function ol(e, s = {}) {
  if (tn && ve && !(window.matchMedia("(prefers-reduced-motion: reduce)").matches && !Qe(s) && !s.disrespectUserMotionPreference)) {
    je.add(e), getComputedStyle(e).position === "static" && Object.assign(e.style, { position: "relative" }), rt(e, Ue, Ko, (r) => ve?.observe(r)), Qe(s) ? Ce.set(e, s) : Ce.set(e, {
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
      je.delete(e), zt.delete(e), Ce.delete(e);
      const n = Ut.get(e);
      n?.disconnect(), Ut.delete(e), rt(e, (l) => {
        ve?.unobserve(l);
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
  const s = E();
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
  }), Ds(() => {
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
    }), pe(() => t.animate, (A) => {
      r(!!A);
    });
    const a = S(() => t.modelValue !== void 0), u = E(t.startOpen), i = S({
      get() {
        return a.value ? t.modelValue : u.value;
      },
      set(A) {
        a.value ? n("update:modelValue", A) : u.value = A;
      }
    }), d = E(Q("ulu-collapsible-trigger")), v = E(Q("ulu-collapsible-content"));
    function y() {
      i.value = !i.value;
    }
    function w() {
      t.closeOnEscape && i.value && (i.value = !1);
    }
    return (A, T) => (c(), f("div", {
      ref_key: "container",
      ref: o,
      onKeydown: Ls(w, ["esc"]),
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
          C(b(e.triggerText), 1)
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
    const t = e, { resolvedModifiers: n } = ce({ props: t, baseClass: "accordion" }), l = S(() => {
      const o = { ...t.classes };
      return o.container = [o.container, n.value], o;
    });
    return (o, r) => (c(), _(Lt, {
      "model-value": e.modelValue,
      "start-open": e.startOpen,
      "trigger-text": e.triggerText,
      classes: l.value,
      animate: e.animate,
      "onUpdate:modelValue": r[0] || (r[0] = (a) => o.$emit("update:modelValue", a))
    }, {
      trigger: k(({ isOpen: a }) => [
        g(o.$slots, "trigger", { isOpen: a }, () => [
          (c(), _(F(e.triggerTextElement), null, {
            default: k(() => [
              C(b(e.triggerText), 1)
            ]),
            _: 1
          }))
        ]),
        g(o.$slots, "icon", { isOpen: a }, () => [
          h("span", {
            class: m(["accordion__icon", e.classes.icon])
          }, [
            O(D, {
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
    const s = e, { resolvedModifiers: t } = ce({ props: s, baseClass: "tag" });
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
      e.icon ? (c(), _(D, {
        key: 0,
        icon: e.icon,
        spaced: ""
      }, null, 8, ["icon"])) : p("", !0),
      g(n.$slots, "default", {}, () => [
        h("span", null, b(e.text), 1)
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
function cl(e, s, t, n, l, o) {
  const r = K("UluIcon"), a = K("UluTag"), u = K("UluMenu", !0), i = zs("ulu-tooltip");
  return t.items?.length ? (c(), f("ul", {
    key: 0,
    class: m(t.classes.list)
  }, [
    (c(!0), f(x, null, B(t.items, (d, v) => (c(), f("li", {
      key: v,
      class: m([
        t.classes.item,
        d?.classes?.item,
        d.separatorBefore ? t.classes.itemSeparatorBefore : "",
        d.separatorAfter ? t.classes.itemSeparatorAfter : ""
      ])
    }, [
      Fe((c(), _(F(d.to || d.path ? "router-link" : d.click ? "button" : "a"), ee({ ref_for: !0 }, {
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
            d.icon ? (c(), _(r, {
              key: 0,
              icon: d.icon,
              class: m([t.classes.linkIcon, d?.classes?.linkIcon])
            }, null, 8, ["icon", "class"])) : p("", !0),
            h("span", {
              class: m([t.classes.linkText, d?.classes?.linkText])
            }, b(d.title), 3),
            d.tag ? (c(), _(a, ee({
              key: 1,
              ref_for: !0
            }, d.tag), null, 16)) : p("", !0)
          ])
        ]),
        _: 2
      }, 1040, ["onClick", "class", "aria-label", "id"])), [
        [i, t.iconOnly ? d.title : d.tooltip || null]
      ]),
      !t.noChildren && d?.children?.length ? (c(), _(u, {
        key: 0,
        iconOnly: t.iconOnly,
        classes: t.classes,
        items: d.children
      }, null, 8, ["iconOnly", "classes", "items"])) : p("", !0)
    ], 2))), 128))
  ], 2)) : p("", !0);
}
const ln = /* @__PURE__ */ j(il, [["render", cl]]), ul = {
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
    })), { resolvedModifiers: n } = ce({
      props: s,
      internal: t,
      baseClass: "menu-stack"
    });
    return (l, o) => (c(), _(F(e.containerElement), {
      class: m(["menu-stack", $(n)])
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
}, ah = {
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
    return (s, t) => (c(), _(pt, { classes: e.popoverClasses }, {
      trigger: k(({ isOpen: n }) => [
        g(s.$slots, "trigger", { isOpen: n }, () => [
          h("span", null, b(e.triggerText), 1),
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
}, Qt = E(!1), ut = {
  start: [],
  end: []
};
function Zt() {
  window.removeEventListener("resize", Zt), Qt.value = !0, ut.start.forEach((e) => e());
}
function dl() {
  Qt.value = !1, ut.end.forEach((e) => e()), window.addEventListener("resize", Zt);
}
window.addEventListener("resize", Zt), window.addEventListener("resize", qt(dl, 300));
function gs(e, s) {
  return e.push(s), () => {
    const t = e.findIndex((n) => n === s);
    t > -1 && e.splice(t);
  };
}
function fl() {
  return {
    resizing: Qt,
    onResizeStart(e) {
      return gs(ut.start, e);
    },
    onResizeEnd(e) {
      return gs(ut.end, e);
    }
  };
}
function ih(e, s) {
  const t = qs(), n = Zn(), l = S(() => {
    const i = parseInt(t.query.page || "1", 10);
    return isNaN(i) || i < 1 ? 1 : i;
  }), o = S(() => !e.value || e.value.length === 0 ? 1 : Math.ceil(e.value.length / s));
  pe(o, (i) => {
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
    }, d = l.value, v = o.value, y = 5, w = (R) => ({ query: { ...t.query, page: R } });
    d > 1 && (i.first = { href: w(1) }, i.previous = { href: w(d - 1) }), d < v && (i.next = { href: w(d + 1) }, i.last = { href: w(v) });
    let A, T;
    if (v <= y)
      A = 1, T = v;
    else {
      const R = Math.floor(y / 2), G = Math.ceil(y / 2) - 1;
      d <= R ? (A = 1, T = y) : d + G >= v ? (A = v - y + 1, T = v) : (A = d - R, T = d + G);
    }
    for (let R = A; R <= T; R++)
      i.pages[R] = { href: w(R) };
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
function Vt(e, s, t) {
  typeof e === "function" && (!t || t !== "titleTemplate" && !(t[0] === "o" && t[1] === "n")) && (e = e());
  let l;
  if (s && (l = s(t, e)), Array.isArray(l))
    return l.map((o) => Vt(o, s));
  if (l?.constructor === Object) {
    const o = {};
    for (const r of Object.keys(l))
      o[r] = Vt(l[r], s, r);
    return o;
  }
  return l;
}
const hl = (e, s) => jn(s) ? lt(s) : s, ml = "usehead";
function gl() {
  if (In()) {
    const e = mt(ml);
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
  const n = E(!1);
  let l;
  return vt(() => {
    const r = n.value ? {} : Vt(s, hl);
    l ? l.patch(r) : l = e.push(r, t);
  }), Mn() && (Ds(() => {
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
function pl(e, s) {
  const n = Object.assign({}, {
    qualifier(r, a) {
      return a ? ts(r) : rn(r);
    },
    sort: ns,
    item: {},
    includeChildren: !1
  }, s), l = (r, a) => a ? `${a}/${r.path}` : r.path, o = (r, a = null) => r.filter((u) => n.qualifier(u, a)).map((u) => {
    const i = u.children ? es(u.children) : u, d = u.children ? u.children.filter((y) => y.path !== "") : !1, v = kt(i, l(u, a), n.item);
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
    sort: ns
  }, t), o = e.find((i) => i.path !== "/" && s.includes(i.path)), r = (i, d, v) => {
    if (i.children) {
      const y = i.children.find((w) => w.path.includes(s));
      if (y)
        return r(y, i, v + y.path);
    }
    return { route: d, path: v };
  }, { route: a, path: u } = r(o, o, o.path);
  return a.children ? a.children.filter(cn(l.includeIndex)).map((i) => kt(i, `${u}/${i.path}`, l.item)).sort(l.sort) : (console.warn("Unable to build menu for:", s), []);
}
function es(e) {
  return e.find((s) => s.path === "");
}
function kt(e, s = e.path, t) {
  const l = Object.assign({}, {
    indexMeta: !0,
    modify: null
  }, t);
  let o = Object.assign({}, e.meta);
  l.indexMeta && e.children && (o = Object.assign({}, o, es(e.children)?.meta));
  const r = { ...e, meta: o }, a = {
    path: s,
    title: St(r, e) || "Missing Title",
    weight: o?.weight || 0,
    meta: o
  };
  return l.modify && l.modify(a, e), a;
}
function ts(e) {
  return !e.path.includes("/:");
}
function rn(e) {
  const s = e.path.match(/\//g) || [];
  return ts(e) && s.length === 1;
}
function wl(e, s) {
  const { target: t } = s, n = t.closest("a");
  if (n) {
    let l = n.getAttribute("href");
    l.startsWith("/") && (e.push(l), s.preventDefault());
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
function Sl(e, s) {
  const n = Object.assign({}, {
    parent: null,
    includeIndex: !1,
    item: {},
    sort: ns
  }, s), l = n.parent || ss(e);
  return (an(e, l) || []).filter(cn(n.includeIndex)).map((r) => kt(r, `${l.path}/${r.path}`, n.item)).sort(n.sort);
}
function kl(e) {
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
const $l = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  $createBreadcrumb: kl,
  $createSectionMenu: Sl,
  $getParentRoute: ss,
  $getRouteChildren: an,
  createBaseMenu: pl,
  createMenuItem: kt,
  createSectionMenu: _l,
  flattenMenu: bl,
  getChildIndexRoute: es,
  getRouteTitle: St,
  isStaticBaseRoute: rn,
  isStaticRoute: ts,
  nativeLinkRouter: wl
}, Symbol.toStringTag, { value: "Module" })), Rt = ht({});
function ch(e = {}) {
  const {
    title: s,
    titleTemplate: t = "%s",
    useRoute: n = qs,
    useHead: l = vl
  } = e, o = n(), r = o.path;
  if (s !== void 0) {
    vt(() => {
      Rt[r] = $(s);
    }), Ws(() => {
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
const Cl = { class: "layout-flex-baseline" }, Tl = { class: "type-word-break" }, uh = {
  __name: "UluOverflowPopover",
  props: {
    /**
     * Default icon for overflow popover trigger
     */
    triggerIcon: String
  },
  setup(e) {
    const { resizing: s, onResizeEnd: t } = fl(), n = E(null), l = E(!1), o = () => {
      Vs(() => {
        const a = n.value;
        l.value = a.offsetWidth < a.scrollWidth;
      });
    }, r = t(o);
    return yt(o), Ws(r), (a, u) => (c(), f("div", Cl, [
      h("div", {
        class: "type-truncate",
        ref_key: "text",
        ref: n
      }, [
        g(a.$slots, "default")
      ], 512),
      l.value && !$(s) ? (c(), _(pt, {
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
            g(a.$slots, "default")
          ])
        ]),
        _: 3
      })) : p("", !0)
    ]));
  }
}, dh = {
  __name: "UluTab",
  setup(e) {
    return (s, t) => (c(), _($(eo), null, {
      default: k((n) => [
        g(s.$slots, "default", ie(me(n)))
      ]),
      _: 3
    }));
  }
}, fh = /* @__PURE__ */ Object.assign({
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
    return (s, t) => (c(), _($(to), {
      defaultIndex: e.defaultIndex,
      vertical: e.vertical
    }, {
      default: k((n) => [
        h("div", {
          class: m(["tabs", {
            "tabs--vertical": e.vertical
          }])
        }, [
          g(s.$slots, "default", ie(me(n)))
        ], 2)
      ]),
      _: 3
    }, 8, ["defaultIndex", "vertical"]));
  }
}), hh = {
  __name: "UluTabList",
  setup(e) {
    return (s, t) => (c(), _($(so), { class: "tabs__tablist" }, {
      default: k(() => [
        g(s.$slots, "default")
      ]),
      _: 3
    }));
  }
}, mh = {
  __name: "UluTabPanel",
  setup(e) {
    return (s, t) => (c(), _($(no), null, {
      default: k((n) => [
        g(s.$slots, "default", ie(me(n)))
      ]),
      _: 3
    }));
  }
}, gh = {
  __name: "UluTabPanels",
  setup(e) {
    return (s, t) => (c(), _($(oo), null, {
      default: k((n) => [
        g(s.$slots, "default", ie(me(n)))
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
    const { resolvedModifiers: s } = ce({ props: e, baseClass: "button" });
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
}, Ol = { key: 1 };
function xl(e, s, t, n, l, o) {
  const r = K("UluIcon");
  return c(), _(F(o.element), ee({
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
      t.icon && (t.iconBefore || t.iconOnly) ? (c(), _(r, {
        key: 0,
        icon: t.icon,
        class: "button__icon"
      }, null, 8, ["icon"])) : p("", !0),
      (e.$slots.default || t.text) && !t.iconOnly ? (c(), f("span", Ol, [
        g(e.$slots, "default", {}, () => [
          C(b(t.text), 1)
        ])
      ])) : p("", !0),
      t.icon && !t.iconBefore && !t.iconOnly ? (c(), _(r, {
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
    const { resolvedModifiers: s } = ce({
      props: e,
      baseClass: "callout",
      internal: S(() => ({
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
function Il(e, s, t, n, l, o) {
  const r = K("UluIcon");
  return c(), f("div", {
    class: m(["callout", n.resolvedModifiers])
  }, [
    h("div", Rl, [
      O(r, {
        class: m(["type-large margin-right-small", `color-${t.type}`]),
        icon: t.icon || `type:${t.type}`
      }, null, 8, ["class", "icon"]),
      h("div", El, [
        h("div", null, [
          g(e.$slots, "title", {}, () => [
            h("strong", null, b(t.title), 1)
          ])
        ]),
        h("div", null, [
          g(e.$slots, "description", {}, () => [
            C(b(t.description), 1)
          ])
        ])
      ]),
      e.$slots.action ? (c(), f("div", jl, [
        g(e.$slots, "action")
      ])) : p("", !0)
    ])
  ], 2);
}
const vh = /* @__PURE__ */ j(Bl, [["render", Il]]), Ml = ["aria-hidden"], Fl = {
  key: 2,
  class: "hidden-visually"
}, Pl = {
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
    return (l, o) => (c(), _(F(n.value), {
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
          }, b(e.text), 9, Ml)) : g(l.$slots, "default", { key: 1 }),
          e.alt ? (c(), f("span", Fl, b(e.alt), 1)) : p("", !0)
        ], 2)
      ]),
      _: 3
    }, 8, ["class", "to", "href", "onClick"]));
  }
}, zl = { class: "badge-stack" }, yh = {
  __name: "UluBadgeStack",
  props: {
    /**
     * Array of props for each badge
     */
    items: Array
  },
  setup(e) {
    return (s, t) => (c(), f("ul", zl, [
      (c(!0), f(x, null, B(e.items, (n, l) => (c(), f("li", {
        class: "badge-stack__item",
        key: l
      }, [
        O(Pl, ee({ ref_for: !0 }, n), null, 16)
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
    const { resolvedModifiers: s } = ce({ props: e, baseClass: "button-verbose" });
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
}, Vl = {
  key: 1,
  class: "button-verbose__body"
};
function Hl(e, s, t, n, l, o) {
  const r = K("UluIcon");
  return c(), _(F(o.element), ee({
    class: ["button-verbose", [
      {
        "button-verbose--inline": t.inline,
        "button-verbose--full-width": t.fullWidth
      },
      n.resolvedModifiers
    ]]
  }, o.attrs), {
    default: k(() => [
      e.$slots.title || t.title ? (c(), _(F(t.titleElement), {
        key: 0,
        class: "button-verbose__title"
      }, {
        default: k(() => [
          g(e.$slots, "title", {}, () => [
            C(b(t.title), 1)
          ])
        ]),
        _: 3
      })) : p("", !0),
      e.$slots.default || t.body ? (c(), f("span", Vl, [
        g(e.$slots, "default", {}, () => [
          C(b(t.body), 1)
        ])
      ])) : p("", !0),
      t.icon ? (c(), _(r, {
        key: 2,
        icon: t.icon,
        class: "button-verbose__icon",
        "aria-hidden": "true"
      }, null, 8, ["icon"])) : p("", !0)
    ]),
    _: 3
  }, 16, ["class"]);
}
const ph = /* @__PURE__ */ j(Ll, [["render", Hl]]), Nl = {
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
    const { resolvedModifiers: s } = ce({ props: e, baseClass: "callout" });
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
const bh = /* @__PURE__ */ j(Nl, [["render", Dl]]), Wl = { class: "card__body" }, ql = { class: "card__main" }, Xl = ["href", "target"], Gl = {
  key: 0,
  class: "card__aside"
}, Yl = ["src", "alt"], Kl = {
  key: 1,
  class: "card__footer"
}, _h = {
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
    const o = E(null), r = E(null), { resolvedModifiers: a } = ce({ props: t, baseClass: "card" }), u = E(null), i = E(!1), d = S(() => t.proxyClick && !t.to && !t.href), v = S(() => d.value && (t.titleTo || t.titleHref)), y = S(() => d.value && !v.value), w = S(() => d.value || null), A = S(() => ({
      selectorPrevent: "input, select, textarea, button, a, [tabindex='-1']",
      mousedownDurationPrevent: 250,
      ...t.proxyClickOptions
    })), T = S(() => d.value ? "pointer" : null), R = S(() => t.to ? Ye : t.href ? "a" : t.cardElement);
    function G({ target: P, timeStamp: Z }) {
      if (!w.value) return;
      const { selectorPrevent: we } = A.value;
      i.value = !1, P.closest(we) || (i.value = !0, u.value = Z);
    }
    function se({ timeStamp: P }) {
      if (!w.value || !i.value) return;
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
    return (P, Z) => (c(), _(F(R.value), {
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
      "data-ulu-proxy-click-init": w.value
    }, {
      default: k(() => [
        h("div", Wl, [
          h("div", ql, [
            e.title || $(l).title ? (c(), _(F(e.titleElement), {
              key: 0,
              class: m(["card__title", e.classes.title])
            }, {
              default: k(() => [
                e.titleTo ? (c(), _($(Ye), {
                  key: 0,
                  class: "card__title-link",
                  to: e.titleTo,
                  ref_key: "link",
                  ref: r
                }, {
                  default: k(() => [
                    g(P.$slots, "title", {}, () => [
                      C(b(e.title), 1)
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
                    C(b(e.title), 1)
                  ])
                ], 8, Xl)) : g(P.$slots, "title", { key: 2 }, () => [
                  C(b(e.title), 1)
                ])
              ]),
              _: 3
            }, 8, ["class"])) : p("", !0),
            g(P.$slots, "body")
          ]),
          $(l).aside ? (c(), f("div", Gl, [
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
            }, null, 8, Yl)
          ])
        ], 2)) : p("", !0),
        $(l).footer ? (c(), f("div", Kl, [
          g(P.$slots, "footer")
        ])) : p("", !0)
      ]),
      _: 3
    }, 40, ["class", "style", "target", "to", "href", "data-ulu-proxy-click-init"]));
  }
}, wh = {
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
    })), { resolvedModifiers: n } = ce({
      props: s,
      internal: t,
      baseClass: "definition-list"
    });
    return (l, o) => (c(), f("dl", {
      class: m(["definition-list", [$(n), e.classes.list]])
    }, [
      (c(!0), f(x, null, B(e.items, (r, a) => (c(), f("div", {
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
            C(b(r.term), 1)
          ])
        ], 2),
        h("dd", {
          class: m(e.classes.description)
        }, [
          g(l.$slots, "description", {
            item: r,
            index: a
          }, () => [
            C(b(r.description), 1)
          ])
        ], 2)
      ], 2))), 128))
    ], 2));
  }
}, Jl = ["href", "target"], Ql = { class: "external-link__text" }, Sh = {
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
      h("span", Ql, [
        g(s.$slots, "default", {}, () => [
          C(b(e.text), 1)
        ])
      ]),
      O(D, {
        class: "external-link__icon margin-left-small-x display-inline",
        icon: e.icon || "type:externalLink"
      }, null, 8, ["icon"])
    ], 8, Jl));
  }
}, kh = {
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
    const s = e, t = S(() => s.ordered || s.forceOrdered ? "ol" : "ul");
    return (n, l) => (c(), _(F(t.value), {
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
        (c(!0), f(x, null, B(e.items, (o, r) => (c(), f("li", {
          key: r,
          class: m(e.classes.listItem)
        }, [
          g(n.$slots, "default", {
            item: o,
            index: r
          }, () => [
            C(b(o), 1)
          ])
        ], 2))), 128))
      ]),
      _: 3
    }, 8, ["class", "style", "reversed", "start"]));
  }
}, Zl = {}, er = { id: "main-content" };
function tr(e, s) {
  return c(), f("main", er, [
    g(e.$slots, "default")
  ]);
}
const $h = /* @__PURE__ */ j(Zl, [["render", tr]]), Ch = {
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
    })), { resolvedModifiers: n } = ce({
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
}, sr = { class: "spoke-spinner__spinner" }, Th = {
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
      h("div", sr, [
        (c(), f(x, null, B(12, (n) => h("div", { key: n })), 64))
      ])
    ], 2));
  }
}, nr = ["role", "aria-labelledby"], or = ["id"], lr = { class: "menu-stack__list" }, rr = { class: "menu-stack__selectable" }, ar = ["type", "id", "name", "value", "checked", "onChange"], ir = ["for"], un = {
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
        const y = [...t.modelValue], w = y.indexOf(d.uid);
        w > -1 ? y.splice(w, 1) : y.push(d.uid), n("update:modelValue", y);
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
      }, b(e.legend), 9, or)) : p("", !0),
      h("ul", lr, [
        (c(!0), f(x, null, B(e.options, (y) => (c(), f("li", {
          class: "menu-stack__item",
          key: y.uid
        }, [
          h("div", rr, [
            h("input", {
              type: e.type,
              id: a(y),
              name: l.value,
              value: y.uid,
              checked: u(y),
              onChange: (w) => i(y, w)
            }, null, 40, ar),
            h("label", {
              for: a(y)
            }, [
              g(d.$slots, "default", { option: y }, () => [
                C(b(y?.label || y?.title || y?.text), 1)
              ])
            ], 8, ir)
          ])
        ]))), 128))
      ])
    ], 10, nr));
  }
}, cr = ["href", "download"], ur = { class: "margin-left-small-x" }, Ah = {
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
        O(D, {
          class: "ui-icon",
          icon: e.icon
        }, null, 8, ["icon"]),
        h("span", ur, [
          C(b(e.file.name) + " ", 1),
          e.noFileSize ? p("", !0) : (c(), _(on, {
            key: 0,
            text: n.value,
            small: "",
            outline: ""
          }, null, 8, ["text"]))
        ])
      ])
    ], 8, cr));
  }
}, dr = { class: "form-theme__required-char" }, Ve = {
  __name: "UluFormRequiredChar",
  setup(e) {
    return (s, t) => (c(), f("span", dr, "*"));
  }
}, fr = ["for"], hr = ["multiple", "id", "required"], Oh = {
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
    return (o, r) => (c(), f(x, null, [
      h("label", {
        class: m({ "hidden-visually": e.labelHidden }),
        for: $(n)
      }, [
        g(o.$slots, "label", {}, () => [
          C(b(e.label), 1),
          e.required ? (c(), _(Ve, { key: 0 })) : p("", !0)
        ])
      ], 10, fr),
      h("input", ee({
        type: "file",
        onChange: l,
        multiple: e.multiple,
        id: $(n)
      }, e.inputAttrs, { required: e.required }), null, 16, hr)
    ], 64));
  }
}, xh = {
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
      e.error || e.warning ? (c(), _(D, {
        key: 0,
        icon: `type:${e.error ? "error" : "warning"}`
      }, null, 8, ["icon"])) : p("", !0),
      g(s.$slots, "default")
    ], 2));
  }
}, mr = ["for"], gr = ["id", "value", "required"], vr = ["value"], Uh = {
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
    return (t, n) => (c(), f(x, null, [
      h("label", {
        class: m({ "hidden-visually": e.labelHidden }),
        for: $(s)
      }, [
        g(t.$slots, "label", {}, () => [
          C(b(e.label), 1),
          e.required ? (c(), _(Ve, { key: 0 })) : p("", !0)
        ])
      ], 10, mr),
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
        (c(!0), f(x, null, B(e.options, (l, o) => (c(), f("option", {
          key: o,
          value: l.value
        }, b(l.text), 9, vr))), 128))
      ], 40, gr)
    ], 64));
  }
}, yr = ["for"], pr = ["value", "id", "required"], Bh = {
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
    return (t, n) => (c(), f(x, null, [
      h("label", {
        class: m({ "hidden-visually": e.labelHidden }),
        for: $(s)
      }, [
        g(t.$slots, "label", {}, () => [
          C(b(e.label), 1),
          e.required ? (c(), _(Ve, { key: 0 })) : p("", !0)
        ])
      ], 10, yr),
      h("input", {
        type: "text",
        value: e.modelValue,
        onInput: n[0] || (n[0] = (l) => t.$emit("update:modelValue", l.target.value)),
        id: $(s),
        required: e.required
      }, null, 40, pr)
    ], 64));
  }
}, br = { class: "form-theme search-form type-small" }, _r = { class: "search-form__field" }, wr = ["placeholder"], Sr = {
  class: "search-form__submit button button--primary",
  "aria-label": "Submit Search"
}, Rh = {
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
    return (s, t) => (c(), f("div", br, [
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
}, Eh = {
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
    return (s, t) => (c(), _(F(e.element), {
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
}, kr = { class: "form-theme__actions" }, jh = {
  __name: "UluFormActions",
  setup(e) {
    return (s, t) => (c(), f("div", kr, [
      g(s.$slots, "default")
    ]));
  }
}, $r = ["id", "checked", "required"], Cr = ["for"], Ih = {
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
    return (t, n) => (c(), f(x, null, [
      h("input", {
        type: "checkbox",
        id: $(s),
        checked: e.modelValue,
        onChange: n[0] || (n[0] = (l) => t.$emit("update:modelValue", l.target.checked)),
        required: e.required
      }, null, 40, $r),
      h("label", { for: $(s) }, [
        g(t.$slots, "default", {}, () => [
          C(b(e.label), 1),
          e.required ? (c(), _(Ve, { key: 0 })) : p("", !0)
        ])
      ], 8, Cr)
    ], 64));
  }
}, Tr = { class: "form-theme__fieldset" }, Ar = { key: 0 }, Mh = {
  __name: "UluFormFieldset",
  props: {
    /**
     * The legend for the fieldset.
     */
    legend: String
  },
  setup(e) {
    return (s, t) => (c(), f("fieldset", Tr, [
      e.legend ? (c(), f("legend", Ar, b(e.legend), 1)) : p("", !0),
      g(s.$slots, "default")
    ]));
  }
}, Fh = {
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
}, Or = { class: "form-theme__items-inline" }, Ph = {
  __name: "UluFormItemsInline",
  setup(e) {
    return (s, t) => (c(), f("div", Or, [
      g(s.$slots, "default")
    ]));
  }
}, xr = ["id", "name", "value", "checked", "required"], Ur = ["for"], zh = {
  __name: "UluFormRadio",
  props: {
    /**
     * The label for the radio button.
     */
    label: String,
    /**
     * The value of the selected radio button in the group (for v-model).
     */
    modelValue: String,
    /**
     * The value of this radio button.
     */
    value: String,
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
    return (t, n) => (c(), f(x, null, [
      h("input", {
        type: "radio",
        id: $(s),
        name: e.name,
        value: e.value,
        checked: e.modelValue === e.value,
        onChange: n[0] || (n[0] = (l) => t.$emit("update:modelValue", e.value)),
        required: e.required
      }, null, 40, xr),
      h("label", { for: $(s) }, [
        g(t.$slots, "default", {}, () => [
          C(b(e.label), 1),
          e.required ? (c(), _(Ve, { key: 0 })) : p("", !0)
        ])
      ], 8, Ur)
    ], 64));
  }
}, Br = ["for"], Rr = ["value", "id", "required"], Lh = {
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
    return (t, n) => (c(), f(x, null, [
      h("label", {
        class: m({ "hidden-visually": e.labelHidden }),
        for: $(s)
      }, [
        g(t.$slots, "label", {}, () => [
          C(b(e.label), 1),
          e.required ? (c(), _(Ve, { key: 0 })) : p("", !0)
        ])
      ], 10, Br),
      h("textarea", {
        value: e.modelValue,
        onInput: n[0] || (n[0] = (l) => t.$emit("update:modelValue", l.target.value)),
        id: $(s),
        required: e.required
      }, null, 40, Rr)
    ], 64));
  }
}, Vh = {
  __name: "UluAdaptiveLayout",
  setup(e) {
    const s = Ae("uluIsMobile");
    return (t, n) => !$(s) || !t.$slots.mobile ? g(t.$slots, "default", { key: 0 }) : g(t.$slots, "mobile", { key: 1 });
  }
}, Er = {
  name: "UluDataGrid",
  async mounted() {
    const e = () => lo(this.$el);
    e(), this.resizeHandler = qt(e, 200, !1, this), window.addEventListener("resize", this.resizeHandler);
  },
  beforeUnmount() {
    this.resizeHandler && window.removeEventListener("resize", this.resizeHandler);
  }
};
function jr(e, s, t, n, l, o) {
  return c(), f("div", null, [
    g(e.$slots, "default")
  ]);
}
const Hh = /* @__PURE__ */ j(Er, [["render", jr]]), Ir = {
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
}, Mr = {
  key: 0,
  class: "rail__item rail__item--pull"
};
function Fr(e, s, t, n, l, o) {
  const r = K("UluIcon");
  return c(), f("div", {
    class: m(["rail rail--title-rail", {
      "rail--rule": t.rule
    }])
  }, [
    h("div", {
      class: m(["rail__item rail__item--title", t.classes.itemTitle])
    }, [
      (c(), _(F(t.titleElement), {
        class: m(["layout-flex type-max-width-small no-margin", t.classes.title]),
        style: X({ alignItems: t.iconAlign })
      }, {
        default: k(() => [
          t.icon ? (c(), _(r, {
            key: 0,
            class: m(t.classes.icon),
            icon: t.icon
          }, null, 8, ["class", "icon"])) : p("", !0),
          g(e.$slots, "default", {}, () => [
            C(b(t.title), 1)
          ])
        ]),
        _: 3
      }, 8, ["class", "style"]))
    ], 2),
    e.$slots.end ? (c(), f("div", Mr, [
      g(e.$slots, "end")
    ])) : p("", !0)
  ], 2);
}
const Nh = /* @__PURE__ */ j(Ir, [["render", Fr]]), Pr = {
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
function zr(e, s, t, n, l, o) {
  const r = K("router-link"), a = K("UluIcon");
  return t.items.length ? (c(), f("nav", {
    key: 0,
    class: m(t.classes.nav),
    "aria-label": "Breadcrumb"
  }, [
    h("ol", {
      class: m(t.classes.list)
    }, [
      (c(!0), f(x, null, B(t.items, (u, i) => (c(), f("li", {
        key: i,
        class: m(t.classes.item)
      }, [
        u.current ? (c(), f("span", {
          key: 1,
          class: m(u.current)
        }, [
          g(e.$slots, "default", { item: u }, () => [
            C(b(u.title), 1)
          ])
        ], 2)) : (c(), _(r, {
          key: 0,
          to: u.to,
          class: m(t.classes.link),
          "aria-current": u.current ? "page" : null
        }, {
          default: k(() => [
            g(e.$slots, "default", { item: u }, () => [
              C(b(u.title), 1)
            ])
          ]),
          _: 2
        }, 1032, ["to", "class", "aria-current"])),
        i < t.items.length - 1 ? g(e.$slots, "separator", { key: 2 }, () => [
          O(a, {
            class: m(t.classes.separator),
            icon: t.separatorIcon || "type:pathSeparator"
          }, null, 8, ["class", "icon"])
        ]) : p("", !0)
      ], 2))), 128))
    ], 2)
  ], 2)) : p("", !0);
}
const Dh = /* @__PURE__ */ j(Pr, [["render", zr]]), Lr = {
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
function Vr(e, s, t, n, l, o) {
  const r = K("UluMenu");
  return c(), f("nav", {
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
const Wh = /* @__PURE__ */ j(Lr, [["render", Vr]]), Hr = ["aria-labelledby"], Nr = { class: "pager__items js-pager__items" }, Dr = {
  key: 0,
  class: "pager__item pager__item--first"
}, Wr = {
  key: 1,
  class: "pager__item pager__item--previous"
}, qr = {
  key: 2,
  class: "pager__item pager__item--ellipsis",
  role: "presentation"
}, Xr = { class: "hidden-visually" }, Gr = {
  key: 3,
  class: "pager__item pager__item--ellipsis",
  role: "presentation"
}, Yr = {
  key: 4,
  class: "pager__item pager__item--next"
}, Kr = {
  key: 5,
  class: "pager__item pager__item--last"
}, qh = {
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
        (c(), _(F(e.titleElement), {
          id: $(t),
          class: "hidden-visually"
        }, {
          default: k(() => [...o[0] || (o[0] = [
            C("Pagination", -1)
          ])]),
          _: 1
        }, 8, ["id"])),
        h("ul", Nr, [
          e.items.first ? (c(), f("li", Dr, [
            O(r, ee({
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
          e.items.previous ? (c(), f("li", Wr, [
            O(r, ee({
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
          e.ellipses.previous ? (c(), f("li", qr, "…")) : p("", !0),
          (c(!0), f(x, null, B(e.items.pages, (a, u) => (c(), f("li", {
            key: u,
            class: m(["pager__item", { "is-active": e.current == u }])
          }, [
            O(r, ee({
              to: a.href,
              title: n(u)
            }, { ref_for: !0 }, a.attributes), {
              default: k(() => [
                h("span", Xr, b(e.current == u ? "Current page" : "Page"), 1),
                C(" " + b(u), 1)
              ]),
              _: 2
            }, 1040, ["to", "title"])
          ], 2))), 128)),
          e.ellipses.next ? (c(), f("li", Gr, "…")) : p("", !0),
          e.items.next ? (c(), f("li", Yr, [
            O(r, ee({
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
          e.items.last ? (c(), f("li", Kr, [
            O(r, ee({
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
      ], 8, Hr)) : p("", !0);
    };
  }
}, Jr = {}, Qr = {
  class: "site-skip-link hidden-visually-focusable",
  href: "#main-content"
};
function Zr(e, s) {
  return c(), f("a", Qr, " Skip to main content ");
}
const Xh = /* @__PURE__ */ j(Jr, [["render", Zr]]), ea = {
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
function ta(e, s, t, n, l, o) {
  return t.text != null ? (c(), _(F(t.element), { key: 0 }, {
    default: k(() => [
      C(b(t.text), 1)
    ]),
    _: 1
  })) : p("", !0);
}
const Gh = /* @__PURE__ */ j(ea, [["render", ta]]), sa = {
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
    return (s, t) => e.unwrapped ? g(s.$slots, "default", { key: 1 }) : (c(), _(F(e.is), { key: 0 }, {
      default: k(() => [
        g(s.$slots, "default")
      ]),
      _: 3
    }));
  }
}, na = {}, oa = { style: { display: "none" } };
function la(e, s) {
  return c(), f("span", oa);
}
const Yh = /* @__PURE__ */ j(na, [["render", la]]), ra = {};
function aa(e, s) {
  const t = K("router-view");
  return c(), _(t);
}
const Kh = /* @__PURE__ */ j(ra, [["render", aa]]), ia = {
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
}, ca = ["src", "alt"];
function ua(e, s, t, n, l, o) {
  return c(), f("img", {
    src: o.src,
    alt: t.alt
  }, null, 8, ca);
}
const Jh = /* @__PURE__ */ j(ia, [["render", ua]]), da = {
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
function fa(e, s, t, n, l, o) {
  return c(!0), f(x, null, B(parseInt(t.amount), (r) => (c(), _(F(t.element), { key: r }, {
    default: k(() => [...s[0] || (s[0] = [
      C(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed semper erat tincidunt tellus vestibulum dictum. Fusce vel augue commodo, egestas diam sed, accumsan leo. Maecenas congue nec nisl et ullamcorper. Maecenas tincidunt, tortor et viverra eleifend, enim leo vestibulum ipsum, quis placerat mi nisi nec ex. Vivamus a justo volutpat, scelerisque elit eget, lacinia ex. Phasellus dapibus sollicitudin tortor, vitae suscipit nunc condimentum ut. Cras suscipit feugiat nibh nec consectetur. Phasellus vitae quam blandit, cursus metus ut, placerat mi. Sed tempor lacus non est interdum imperdiet nec quis metus. Praesent vel eleifend diam. Donec tincidunt eget purus sed posuere. ", -1)
    ])]),
    _: 2
  }, 1024))), 128);
}
const Qh = /* @__PURE__ */ j(da, [["render", fa]]), ha = {
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
function ma(e, s, t, n, l, o) {
  return o.title ? (c(), f("p", {
    key: 0,
    tabindex: "-1",
    class: "hidden-visually",
    ref: "el"
  }, b(o.title), 513)) : p("", !0);
}
const Zh = /* @__PURE__ */ j(ha, [["render", ma]]), em = {
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
    return (t, n) => e.content?.length ? (c(), _(sa, {
      key: 0,
      class: "wysiwyg",
      unwrapped: e.noWrapper
    }, {
      default: k(() => [
        O($(ro), {
          value: e.content,
          components: s
        }, null, 8, ["value"])
      ]),
      _: 1
    }, 8, ["unwrapped"])) : p("", !0);
  }
}, ga = {
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
function va(e, s, t, n, l, o) {
  return c(), f("span", null, [
    g(e.$slots, "default", { currentValue: l.currentValue }, () => [
      C(b(l.currentValue), 1)
    ])
  ]);
}
const tm = /* @__PURE__ */ j(ga, [["render", va]]), ya = {
  key: 0,
  class: "progress-bar__header"
}, pa = {
  key: 1,
  class: "progress-bar__value progress-bar__value--amount"
}, ba = {
  key: 2,
  class: "progress-bar__icon"
}, _a = { class: "progress-bar__track" }, wa = {
  key: 1,
  class: "progress-bar__values"
}, Sa = { class: "progress-bar__value progress-bar__value--amount" }, ka = {
  key: 0,
  class: "progress-bar__value progress-bar__value--deficit"
}, $a = { class: "progress-bar__value progress-bar__value--total" }, sm = {
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
      e.label || r.$slots.label || r.$slots.icon || e.amountInHeader ? (c(), f("div", ya, [
        e.label ? (c(), _(F(e.labelElement), {
          key: 0,
          class: m(["progress-bar__label", [e.classes.label, { "hidden-visually": e.labelHidden }]])
        }, {
          default: k(() => [
            g(r.$slots, "label", {}, () => [
              C(b(e.label), 1)
            ])
          ]),
          _: 3
        }, 8, ["class"])) : p("", !0),
        e.amountInHeader ? (c(), f("div", pa, [
          a[0] || (a[0] = h("strong", { class: "hidden-visually" }, "Amount:", -1)),
          g(r.$slots, "valueAmount", { value: e.amount }, () => [
            C(b(e.formatValue(e.amount, "amount")), 1)
          ])
        ])) : p("", !0),
        r.$slots.icon ? (c(), f("div", ba, [
          g(r.$slots, "icon")
        ])) : p("", !0)
      ])) : p("", !0),
      h("div", _a, [
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
      !e.noValues && !e.amountInHeader && !e.loader && !e.indeterminate ? (c(), f("div", wa, [
        h("div", Sa, [
          a[1] || (a[1] = h("strong", { class: "hidden-visually" }, "Amount:", -1)),
          g(r.$slots, "valueAmount", { value: e.amount }, () => [
            C(b(e.formatValue(e.amount, "amount")), 1)
          ])
        ]),
        e.deficit > 0 ? (c(), f("div", ka, [
          a[2] || (a[2] = h("strong", { class: "hidden-visually" }, "Deficit: ", -1)),
          g(r.$slots, "valueDeficit", { value: e.deficit }, () => [
            C("-" + b(e.formatValue(e.deficit, "deficit")), 1)
          ])
        ])) : p("", !0),
        h("div", $a, [
          a[3] || (a[3] = h("strong", { class: "hidden-visually" }, "Total:", -1)),
          g(r.$slots, "valueTotal", { value: e.total }, () => [
            C(b(e.formatValue(e.total, "total")), 1)
          ])
        ])
      ])) : p("", !0)
    ], 2));
  }
}, Ca = { class: "hidden-visually" }, Ta = { class: "progress-circle__chart" }, Aa = {
  class: "progress-circle__chart-svg",
  viewBox: "0 0 32 32"
}, Oa = {
  key: 0,
  class: "progress-circle__chart-value"
}, xa = {
  key: 0,
  class: "progress-circle__value type-small-x"
}, nm = {
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
    const s = e, t = E(null), n = (u) => u === 100 ? 101 : u, l = (u = 0) => {
      if (!t.value || !t.value.animate) return;
      const i = { strokeDasharray: [`${u} 100`, o.value] };
      t.value.animate(i, { duration: s.duration, easing: s.easing, fill: "forwards" });
    };
    pe(() => s.percentage, (u, i) => {
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
      h("strong", Ca, b(e.label), 1),
      h("div", Ta, [
        (c(), f("svg", Aa, [
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
        !r.value && !e.noValue ? (c(), f("strong", Oa, [
          g(u.$slots, "value", { value: e.percentage }, () => [
            C(b(e.formatValue(e.percentage)), 1)
          ])
        ])) : p("", !0)
      ]),
      r.value && !e.noValue ? (c(), f("strong", xa, [
        g(u.$slots, "value", { value: e.percentage }, () => [
          C(b(e.formatValue(e.percentage)), 1)
        ])
      ])) : p("", !0)
    ], 2));
  }
};
function Ua(e) {
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
    return l.match === "all" ? dt(o) : Ua(o);
  });
  return dt(n);
}
function Ba(e, s) {
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
function om(e, s = {}) {
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
  }), w = {
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
  const T = E([]), R = E(l), G = E(o), se = S(() => !n || !e.value?.length ? null : Ba(e.value, n)), P = S(() => ({
    ...r ? {} : w,
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
        const V = q.get(Y.uid)(z), W = Array.isArray(V) ? V : V ? [V] : [];
        for (const le of W) {
          const ae = `${Y.uid}:${le}`;
          U.has(ae) || U.set(ae, /* @__PURE__ */ new Set()), U.get(ae).add(M);
        }
      }
    }
    return U;
  }), we = S(() => ({
    shouldSort: !0,
    keys: ["title", "label", "description", "author"],
    ...u
  })), ne = S(() => R.value?.length ? new io(e.value, we.value).search(R.value).map((I) => I.item) : e.value), ue = S(() => {
    const U = [];
    return T.value.forEach((I) => {
      const q = I.children.filter((M) => M.selected);
      q.length > 0 && U.push({ ...I, children: q });
    }), U;
  }), re = S(() => {
    if (!ue.value.length)
      return ne.value;
    const U = Z.value;
    if (U.size === 0 && ne.value.length > 0 && n?.length > 0)
      return [];
    const I = new Set(ne.value.map((z, Y) => Y)), q = ot(ue.value, U, I), M = [];
    for (const z of q)
      M.push(ne.value[z]);
    return M;
  }), Se = S(() => {
    const U = P.value[G.value]?.sort;
    return typeof U != "function" ? re.value : U([...re.value]);
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
  if (pe(se, (U) => {
    const I = A(t || U);
    I.forEach((q) => {
      q.selectedCount = q.children.filter((M) => M.selected).length;
    }), T.value = I;
  }, { immediate: !0 }), pe([ue, ne], ([U, I], [q, M]) => {
    if (!(d === "none" || !T.value.length) && !(U === q && I === M)) {
      if (d === "simple") {
        const z = Z.value;
        if (z.size === 0 && ne.value.length > 0 && n?.length > 0)
          return;
        const Y = new Set(ne.value.map((N, V) => V));
        T.value.forEach((N) => {
          const V = U.filter((le) => le.uid !== N.uid), W = ot(V, z, Y);
          N.children.forEach((le) => {
            const ae = `${N.uid}:${le.uid}`, de = z.get(ae) || /* @__PURE__ */ new Set(), fe = dt([W, de]);
            le.count = fe.size;
          });
        });
      } else if (d === "intuitive") {
        const z = Z.value;
        if (z.size === 0 && ne.value.length > 0 && n?.length > 0)
          return;
        const Y = new Set(ne.value.map((V, W) => W)), N = ot(U, z, Y);
        T.value.forEach((V) => {
          V.children.forEach((W) => {
            const le = `${V.uid}:${W.uid}`, ae = z.get(le) || /* @__PURE__ */ new Set();
            if (W.selected)
              if (V.multiple) {
                const de = dt([N, ae]);
                W.count = de.size;
              } else
                W.count = N.size;
            else {
              const de = [];
              for (const nt of U)
                de.push({ ...nt, children: [...nt.children] });
              let fe = de.find((nt) => nt.uid === V.uid);
              fe || (fe = { ...V, children: [] }, de.push(fe)), V.multiple ? fe.children.push(W) : fe.children = [W];
              const xn = ot(de, z, Y);
              W.count = xn.size;
            }
          });
        });
      }
    }
  }, { deep: !0, immediate: !0 }), v?.router && v?.route) {
    const { router: U, route: I } = v, q = () => T.value && T.value.length > 0, M = () => {
      if (!q()) return;
      const N = { ...I.query };
      delete N.sort, delete N.search, T.value.forEach((V) => delete N[V.uid]), G.value && G.value !== o && (N.sort = G.value), R.value && (N.search = R.value), ue.value.forEach((V) => {
        V.children.length > 0 && (N[V.uid] = V.children.map((W) => W.uid).join(","));
      }), JSON.stringify(N) !== JSON.stringify(I.query) && U.push({ query: N });
    }, z = () => {
      const N = I.query;
      N.sort && (G.value = N.sort), N.search && (R.value = N.search);
      const V = /* @__PURE__ */ new Map();
      T.value.forEach((W) => {
        const le = N[W.uid] ? N[W.uid].split(",") : [];
        V.set(W.uid, new Set(le));
      }), T.value.forEach((W) => {
        const le = V.get(W.uid) || /* @__PURE__ */ new Set();
        W.children.forEach((ae) => {
          const de = ae.selected, fe = le.has(ae.uid);
          de !== fe && Ot({ groupUid: W.uid, facetUid: ae.uid, selected: fe });
        });
      });
    }, Y = Ln(() => {
      T.value && T.value.length > 0 && (z(), Y());
    });
    pe([G, R, ue], M, { deep: !0 }), pe(() => I.query, z);
  }
  return {
    facets: T,
    searchValue: R,
    selectedSort: G,
    sortTypes: P,
    displayItems: Se,
    selectedFacets: ue,
    clearFilters: Ee,
    handleFacetChange: Ot
  };
}
const Ra = ["onClick"], lm = {
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
      (c(), _(F(e.labelElement), {
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
        (c(!0), f(x, null, B(l.value, (i) => (c(), f("li", {
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
              C(" " + b(i.label), 1)
            ], 2),
            h("span", {
              class: m(e.classes.filterButtonIcon)
            }, [
              O(D, { icon: e.removeIcon }, null, 8, ["icon"])
            ], 2)
          ], 10, Ra)
        ], 2))), 128))
      ], 2),
      h("button", {
        onClick: r,
        class: m(e.classes.clearButton)
      }, "Clear All", 2)
    ], 2)) : p("", !0);
  }
}, Ea = { key: 0 }, ft = {
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
    return (r, a) => (c(), _(un, {
      class: "facets-list",
      legend: e.groupUid,
      type: e.type,
      options: l.value,
      compact: e.compact,
      "model-value": e.modelValue,
      "onUpdate:modelValue": o
    }, {
      default: k(({ option: u }) => [
        C(b(u.label) + " ", 1),
        u.count !== void 0 ? (c(), f("span", Ea, "(" + b(u.count) + ")", 1)) : p("", !0)
      ]),
      _: 1
    }, 8, ["legend", "type", "options", "compact", "model-value"]));
  }
}, ja = { class: "facets-filters" }, rm = {
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
    return (l, o) => (c(), f("div", ja, [
      (c(!0), f(x, null, B(e.facets, (r) => (c(), _(Lt, {
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
            C(b(r.name), 1)
          ])
        ]),
        default: k(() => [
          O(ft, {
            children: r.children.slice(0, e.maxVisible),
            groupUid: r.uid,
            groupName: r.name,
            type: r.multiple ? "checkbox" : "radio",
            compact: e.compact,
            "model-value": n(r),
            onFacetChange: o[0] || (o[0] = (a) => t("facet-change", a))
          }, null, 8, ["children", "groupUid", "groupName", "type", "compact", "model-value"]),
          r.children.length > e.maxVisible ? (c(), _(Lt, {
            key: 0,
            class: m(["facets-filters__more-facets", e.classes.moreFacets])
          }, {
            trigger: k(({ isOpen: a }) => [
              C(b(a ? "View Less" : "Show More"), 1)
            ]),
            default: k(() => [
              O(ft, {
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
}, Ia = { class: "facets-filters" }, am = {
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
    return (l, o) => (c(), f("div", Ia, [
      (c(!0), f(x, null, B(e.facets, (r) => (c(), _(ms, {
        key: r.uid,
        modifiers: e.accordionModifiers,
        startOpen: r.open
      }, {
        trigger: k(({ isOpen: a }) => [
          g(l.$slots, "groupTrigger", {
            group: r,
            isOpen: a
          }, () => [
            C(b(r.name), 1)
          ])
        ]),
        default: k(() => [
          O(ft, {
            children: r.children.slice(0, e.maxVisible),
            groupUid: r.uid,
            groupName: r.name,
            type: r.multiple ? "checkbox" : "radio",
            compact: e.compact,
            "model-value": n(r),
            onFacetChange: o[0] || (o[0] = (a) => t("facet-change", a))
          }, null, 8, ["children", "groupUid", "groupName", "type", "compact", "model-value"]),
          r.children.length > e.maxVisible ? (c(), _(ms, {
            key: 0,
            class: m(["facets-filters__more-facets", e.classes.moreFacets]),
            modifiers: e.accordionModifiers
          }, {
            trigger: k(({ isOpen: a }) => [
              C(b(a ? "View Less" : "Show More"), 1)
            ]),
            default: k(() => [
              O(ft, {
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
}, im = {
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
      (c(!0), f(x, null, B(e.facets, (i) => (c(), f("div", {
        key: i.uid,
        class: m(e.classes.group)
      }, [
        O(pt, {
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
                C(b(i.name) + ": ", 1),
                h("strong", null, b(o(i)), 1)
              ])
            ]),
            O(D, {
              class: m(e.classes.triggerIcon),
              icon: "fas fa-chevron-down"
            }, null, 8, ["class"])
          ]),
          default: k(({ close: d }) => [
            O(un, {
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
}, Ma = ["for"], Fa = ["id", "onChange"], Pa = { value: "" }, za = ["value", "selected"], cm = {
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
      (c(!0), f(x, null, B(e.facets, (a) => (c(), f("div", {
        class: m(["facets-dropdown-filters__group", e.classes.group]),
        key: a.uid
      }, [
        h("label", {
          for: `facet-dropdown-${a.uid}`,
          class: m(["facets-dropdown-filters__label", e.classes.label])
        }, [
          g(o.$slots, "label", {}, () => [
            C(b(a.name), 1)
          ])
        ], 10, Ma),
        h("select", {
          id: `facet-dropdown-${a.uid}`,
          class: m(["facets-dropdown-filters__select", e.classes.select]),
          onChange: (u) => l(a, u)
        }, [
          h("option", Pa, [
            g(o.$slots, "optionAll", { group: a }, () => [
              C(" All " + b(a.name) + "s ", 1)
            ])
          ]),
          (c(!0), f(x, null, B(a.children, (u, i) => (c(), f("option", {
            key: u.uid,
            value: u.uid,
            selected: u.selected
          }, [
            g(o.$slots, "option", {
              group: a,
              option: u,
              index: i
            }, () => [
              C(b(u.label), 1)
            ])
          ], 8, za))), 128))
        ], 42, Fa)
      ], 2))), 128))
    ], 2));
  }
}, La = { class: "facets-header-layout" }, Va = { class: "facets-header-layout__header" }, Ha = { class: "facets-header-layout__main" }, um = {
  __name: "UluFacetsHeaderLayout",
  setup(e) {
    return (s, t) => (c(), f("div", La, [
      h("div", Va, [
        g(s.$slots, "header")
      ]),
      h("div", Ha, [
        g(s.$slots, "main")
      ])
    ]));
  }
}, Na = { class: "facets-results" }, Da = {
  key: 1,
  class: "facets-results__empty"
}, dm = {
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
    return (s, t) => (c(), f("div", Na, [
      e.items.length ? (c(), _(Ns, {
        key: 0,
        tag: e.tag,
        name: e.transitionName,
        class: m(["facets-results__list", e.classes.list])
      }, {
        default: k(() => [
          (c(!0), f(x, null, B(e.items, (n, l) => (c(), f("li", {
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
}, Wa = ["for"], qa = ["id", "placeholder"], fm = {
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
      ])], 10, Wa),
      Fe(h("input", {
        id: $(l),
        class: m(e.classes.input),
        "onUpdate:modelValue": a[0] || (a[0] = (u) => o.value = u),
        type: "text",
        placeholder: e.placeholder
      }, null, 10, qa), [
        [Vn, o.value]
      ])
    ], 2));
  }
}, Xa = { class: "facets-sidebar__header" }, Ga = { class: "facets-sidebar__mobile-controls" }, Ya = { class: "facets-sidebar__body" }, Ka = { class: "facets-sidebar__main" }, hm = {
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
    const s = E(!1), t = mt("uluIsMobile"), n = E(null), l = E(null), o = S(() => t.value ? l.value : n.value);
    return (r, a) => (c(), f("div", {
      class: m(["facets-sidebar", { "facets-sidebar--filters-hidden": $(t) }])
    }, [
      h("div", Xa, [
        g(r.$slots, "header")
      ]),
      Fe(h("div", Ga, [
        h("button", {
          class: m(e.classes.mobileButton),
          onClick: a[0] || (a[0] = (u) => s.value = !0)
        }, b(e.mobileButtonText), 3)
      ], 512), [
        [Mt, $(t)]
      ]),
      h("div", Ya, [
        Fe(h("div", {
          class: "facets-sidebar__sidebar",
          ref_key: "desktopTarget",
          ref: n
        }, null, 512), [
          [Mt, !$(t)]
        ]),
        h("div", Ka, [
          g(r.$slots, "main")
        ])
      ]),
      $(t) ? (c(), _(Ks, {
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
      o.value ? (c(), _(gt, {
        key: 1,
        to: o.value
      }, [
        g(r.$slots, "sidebar")
      ], 8, ["to"])) : p("", !0)
    ], 2));
  }
}, Ja = ["for"], Qa = ["value", "id"], Za = ["value"], mm = {
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
      ], 10, Ja),
      h("select", {
        value: e.modelValue,
        onChange: o[0] || (o[0] = (r) => t("update:modelValue", r.target.value)),
        id: $(n),
        class: m(e.classes.select)
      }, [
        (c(!0), f(x, null, B(e.sortTypes, (r, a) => (c(), f("option", {
          value: a,
          key: a
        }, b(r.text), 9, Za))), 128))
      ], 42, Qa)
    ], 2));
  }
}, dn = Symbol(), fn = Symbol(), $t = Symbol(), ei = {
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
          const i = this.getSectionIndex(a), d = a.offsetTop, v = s[i], y = i === 0 && l > d, w = i === s.length - 1 && l < d;
          v && this.$nextTick(() => {
            u ? (t(v), v.active = !0) : (y && !n || w && v.active) && t(), this.$emit("section-change", {
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
}, ti = { class: "scroll-anchors" };
function si(e, s, t, n, l, o) {
  return c(), f("div", ti, [
    g(e.$slots, "default")
  ]);
}
const gm = /* @__PURE__ */ j(ei, [["render", si]]), ni = {
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
}, oi = ["href"];
function li(e, s, t, n, l, o) {
  return o.sections.length ? (c(), _(F(t.element), {
    key: 0,
    class: "scroll-anchors__nav"
  }, {
    default: k(() => [
      h("ul", null, [
        (c(!0), f(x, null, B(o.sections, (r, a) => (c(), f("li", {
          key: a,
          class: m({ "is-active": r.active })
        }, [
          h("a", {
            class: m({ "is-active": r.active }),
            href: `#${r.titleId}`
          }, b(r.title), 11, oi)
        ], 2))), 128))
      ])
    ]),
    _: 1
  })) : p("", !0);
}
const vm = /* @__PURE__ */ j(ni, [["render", li]]), ri = {
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
}, ai = { class: "scroll-anchors__rail" }, ii = ["href"];
function ci(e, s, t, n, l, o) {
  return o.sections.length ? (c(), _(F(t.element), {
    key: 0,
    class: "scroll-anchors__nav scroll-anchors__nav--animated"
  }, {
    default: k(() => [
      h("ul", ai, [
        (c(!0), f(x, null, B(o.sections, (r, a) => (c(), f("li", {
          key: a,
          class: m({ "is-active": r.active })
        }, [
          h("a", {
            class: m({ "is-active": r.active }),
            ref_for: !0,
            ref: (u) => o.addLinkRef(a, u),
            href: `#${r.titleId}`
          }, b(r.title), 11, ii)
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
const ym = /* @__PURE__ */ j(ri, [["render", ci]]), ui = {
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
function di(e, s, t, n, l, o) {
  return c(), f("div", {
    class: m([t.wrapperClass, { [t.activeClass]: t.activeClass && o.section?.active }]),
    ref: "element"
  }, [
    (c(), _(F(t.titleElement), {
      class: m(t.titleClass),
      id: l.titleId
    }, {
      default: k(() => [
        C(b(t.title), 1)
      ]),
      _: 1
    }, 8, ["class", "id"])),
    g(e.$slots, "default", { section: o.section })
  ], 2);
}
const pm = /* @__PURE__ */ j(ui, [["render", di]]), fi = {
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
}, bm = {
  __name: "UluShowSkeleton",
  props: {
    /**
     * If true will show whatever is passed to slot, else skeleton text
     */
    when: Boolean
  },
  setup(e) {
    return (s, t) => e.when ? (c(), _(fi, {
      key: 1,
      inline: ""
    })) : g(s.$slots, "default", { key: 0 });
  }
}, _m = {
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
      (c(!0), f(x, null, B(t.value, (o, r) => (c(), f("div", { key: r }, [
        (c(!0), f(x, null, B(o, (a) => (c(), f("span", {
          key: a,
          class: m(["skeleton skeleton--text skeleton--inline", { "skeleton--background-alt": a.alt }]),
          style: X({ width: `${a.width}%` })
        }, null, 6))), 128))
      ]))), 128))
    ]));
  }
}, hi = { class: "skeleton skeleton-block--media" }, wm = {
  __name: "UluSkeletonMedia",
  setup(e) {
    return (s, t) => (c(), f("div", hi, [
      O(D, { icon: "type:image" })
    ]));
  }
}, mi = {
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
}, gi = { class: "slideshow" }, vi = {
  class: "slideshow__control-context",
  ref: "context"
}, yi = {
  class: "slideshow__track-crop",
  ref: "crop"
}, pi = {
  class: "slideshow__track",
  ref: "track"
}, bi = ["tabindex"], _i = { class: "slideshow__controls" }, wi = { class: "slideshow__controls-item slideshow__controls-item--previous" }, Si = ["disabled"], ki = { class: "slideshow__controls-item slideshow__controls-item--next" }, $i = ["disabled"], Ci = {
  key: 0,
  class: "slideshow__nav",
  ref: "nav"
}, Ti = ["onClick"], Ai = { class: "hidden-visually" };
function Oi(e, s, t, n, l, o) {
  const r = K("UluIcon");
  return c(), f("div", gi, [
    h("div", vi, [
      h("div", yi, [
        h("ul", pi, [
          (c(!0), f(x, null, B(l.slides, (a, u) => (c(), f("li", {
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
          ], 10, bi))), 128))
        ], 512)
      ], 512),
      h("ul", _i, [
        h("li", wi, [
          h("button", {
            class: "slideshow__control-button slideshow__control-button--previous",
            "aria-label": "Scroll Right",
            onClick: s[0] || (s[0] = (...a) => o.previous && o.previous(...a)),
            disabled: !o.canScrollLeft
          }, [
            O(r, {
              class: "slideshow__control-icon",
              icon: "type:previous"
            })
          ], 8, Si)
        ]),
        h("li", ki, [
          h("button", {
            class: "slideshow__control-button slideshow__control-button--next",
            "aria-label": "Scroll Left",
            onClick: s[1] || (s[1] = (...a) => o.next && o.next(...a)),
            disabled: !o.canScrollRight
          }, [
            O(r, {
              class: "slideshow__control-icon",
              icon: "type:next"
            })
          ], 8, $i)
        ])
      ])
    ], 512),
    t.noNav ? p("", !0) : (c(), f("ul", Ci, [
      (c(!0), f(x, null, B(l.slides, (a, u) => (c(), f("li", {
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
            h("span", Ai, "Item " + b(u + 1), 1)
          ])
        ], 10, Ti)
      ], 2))), 128))
    ], 512))
  ]);
}
const xi = /* @__PURE__ */ j(mi, [["render", Oi]]), Ui = {
  name: "ImageSlideShow",
  components: {
    UluSlideShow: xi
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
}, Bi = ["src", "alt"], Ri = { class: "slideshow__image-actions" }, Ei = ["src", "alt"];
function ji(e, s, t, n, l, o) {
  const r = K("AppButton"), a = K("UluSlideShow");
  return c(), _(a, {
    class: "slideshow--images",
    items: t.images,
    onSlideChange: o.slideChange
  }, {
    slide: k(({ item: u }) => [
      h("img", {
        src: u.src,
        alt: u.alt
      }, null, 8, Bi),
      h("div", Ri, [
        t.selectButton ? (c(), _(r, {
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
      }, null, 8, Ei)
    ]),
    _: 1
  }, 8, ["items", "onSlideChange"]);
}
const Sm = /* @__PURE__ */ j(Ui, [["render", ji]]), Ii = {
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
function Mi(e, s, t, n, l, o) {
  return c(), f("li", {
    class: m(["slideshow__slide", { "is-active": t.active }])
  }, [
    g(e.$slots, "default")
  ], 2);
}
const km = /* @__PURE__ */ j(Ii, [["render", Mi]]), Fi = {
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
}, Pi = ["id"], zi = ["innerHTML"];
function Li(e, s, t, n, l, o) {
  return c(!0), f(x, null, B(t.rows, (r, a) => (c(), f("tr", {
    key: `br-${a}`,
    id: t.optionalAttr(t.isActual && r.id),
    class: m(t.resolveClasses(t.classes.row, { row: r.data, rowIndex: a, isActual: t.isActual, foot: t.foot })),
    style: X({
      height: r.height
    })
  }, [
    (c(!0), f(x, null, B(t.rowColumns, (u, i) => (c(), _(F(u.rowHeader ? "th" : "td"), {
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
        }, null, 8, zi)) : (c(), f(x, { key: 2 }, [
          C(b(t.value({ row: r, column: u, rowIndex: a, isActual: t.isActual, foot: t.foot })), 1)
        ], 64))
      ]),
      _: 2
    }, 1032, ["id", "scope", "headers", "class", "style"]))), 128))
  ], 14, Pi))), 128);
}
const Vi = /* @__PURE__ */ j(Fi, [["render", Li]]), Hi = {
  name: "UluTableStickyTable",
  components: {
    UluTableStickyRows: Vi
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
}, Ni = ["aria-hidden"], Di = {
  key: 0,
  class: "table-sticky__caption"
}, Wi = ["id"], qi = ["id", "rowspan", "colspan", "data-child-columns", "aria-sort", "scope", "headers"], Xi = ["innerHTML"], Gi = {
  class: "table-sticky__sort-icon",
  "aria-hidden": "true"
}, Yi = { class: "table-sticky__sort-icon-inner" }, Ki = ["innerHTML"], Ji = { key: 1 }, Qi = { key: 2 };
function Zi(e, s, t, n, l, o) {
  const r = K("UluTableStickyRows");
  return c(), f("table", {
    class: m(t.resolveClasses(t.classes.table, { isActual: t.isActual })),
    "aria-hidden": t.isActual ? "false" : "true"
  }, [
    t.caption ? (c(), f("caption", Di, b(t.caption), 1)) : p("", !0),
    h("thead", null, [
      (c(!0), f(x, null, B(t.headerRows, (a, u) => (c(), f("tr", {
        key: `hr-${u}`,
        id: o.optionalAttr(t.isActual && a.id),
        class: m(t.resolveClasses(t.classes.rowHeader, { row: a, rowIndex: u, isActual: t.isActual })),
        style: X({
          height: a.height
        })
      }, [
        (c(!0), f(x, null, B(a.columns, (i, d) => (c(), f("th", {
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
          i.sortable ? (c(), _(F(t.isActual ? "button" : "div"), {
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
              }, null, 8, Xi)) : (c(), f(x, { key: 2 }, [
                C(b(t.getColumnTitle({ column: i, index: d, isActual: t.isActual })), 1)
              ], 64)),
              h("span", Gi, [
                h("span", Yi, [
                  g(e.$slots, "sortIcon", {}, () => [
                    s[0] || (s[0] = C("▼", -1))
                  ])
                ])
              ])
            ]),
            _: 2
          }, 1064, ["class", "onClick", "onFocus", "onBlur", "aria-pressed"])) : (c(), f(x, { key: 1 }, [
            e.$slots[i.slotHeader] ? g(e.$slots, i.slotHeader, {
              key: 0,
              isActual: t.isActual,
              column: i,
              index: d
            }) : i.htmlTitle ? (c(), f("div", {
              key: 1,
              innerHTML: t.getColumnTitle({ column: i, index: d, isActual: t.isActual })
            }, null, 8, Ki)) : (c(), f(x, { key: 2 }, [
              C(b(t.getColumnTitle({ column: i, index: d, isActual: t.isActual })), 1)
            ], 64))
          ], 64))
        ], 14, qi))), 128))
      ], 14, Wi))), 128))
    ]),
    t.rows ? (c(), f("tbody", Ji, [
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
        B(e.$slots, (a, u) => ({
          name: u,
          fn: k((i) => [
            g(e.$slots, u, ie(me(i)))
          ])
        }))
      ]), 1032, ["rows", "rowColumns", "optionalAttr", "resolveClasses", "getCellHeaders", "isActual", "columnWidth", "classes", "value"])
    ])) : p("", !0),
    t.footerRows ? (c(), f("tfoot", Qi, [
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
        B(e.$slots, (a, u) => ({
          name: u,
          fn: k((i) => [
            g(e.$slots, u, ie(me(i)))
          ])
        }))
      ]), 1032, ["rows", "rowColumns", "optionalAttr", "resolveClasses", "getCellHeaders", "isActual", "columnWidth", "classes", "value"])
    ])) : p("", !0)
  ], 10, Ni);
}
const ec = /* @__PURE__ */ j(Hi, [["render", Zi]]);
function tc() {
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
var sc = Array.prototype, nc = sc.splice;
function oc(e) {
  var s = this.__data__, t = Ct(s, e);
  if (t < 0)
    return !1;
  var n = s.length - 1;
  return t == n ? s.pop() : nc.call(s, t, 1), --this.size, !0;
}
function lc(e) {
  var s = this.__data__, t = Ct(s, e);
  return t < 0 ? void 0 : s[t][1];
}
function rc(e) {
  return Ct(this.__data__, e) > -1;
}
function ac(e, s) {
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
_e.prototype.clear = tc;
_e.prototype.delete = oc;
_e.prototype.get = lc;
_e.prototype.has = rc;
_e.prototype.set = ac;
function ic() {
  this.__data__ = new _e(), this.size = 0;
}
function cc(e) {
  var s = this.__data__, t = s.delete(e);
  return this.size = s.size, t;
}
function uc(e) {
  return this.__data__.get(e);
}
function dc(e) {
  return this.__data__.has(e);
}
var mn = typeof global == "object" && global && global.Object === Object && global, fc = typeof self == "object" && self && self.Object === Object && self, ge = mn || fc || Function("return this")(), ze = ge.Symbol, gn = Object.prototype, hc = gn.hasOwnProperty, mc = gn.toString, De = ze ? ze.toStringTag : void 0;
function gc(e) {
  var s = hc.call(e, De), t = e[De];
  try {
    e[De] = void 0;
    var n = !0;
  } catch {
  }
  var l = mc.call(e);
  return n && (s ? e[De] = t : delete e[De]), l;
}
var vc = Object.prototype, yc = vc.toString;
function pc(e) {
  return yc.call(e);
}
var bc = "[object Null]", _c = "[object Undefined]", vs = ze ? ze.toStringTag : void 0;
function tt(e) {
  return e == null ? e === void 0 ? _c : bc : vs && vs in Object(e) ? gc(e) : pc(e);
}
function Tt(e) {
  var s = typeof e;
  return e != null && (s == "object" || s == "function");
}
var wc = "[object AsyncFunction]", Sc = "[object Function]", kc = "[object GeneratorFunction]", $c = "[object Proxy]";
function vn(e) {
  if (!Tt(e))
    return !1;
  var s = tt(e);
  return s == Sc || s == kc || s == wc || s == $c;
}
var Et = ge["__core-js_shared__"], ys = function() {
  var e = /[^.]+$/.exec(Et && Et.keys && Et.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function Cc(e) {
  return !!ys && ys in e;
}
var Tc = Function.prototype, Ac = Tc.toString;
function Be(e) {
  if (e != null) {
    try {
      return Ac.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var Oc = /[\\^$.*+?()[\]{}|]/g, xc = /^\[object .+?Constructor\]$/, Uc = Function.prototype, Bc = Object.prototype, Rc = Uc.toString, Ec = Bc.hasOwnProperty, jc = RegExp(
  "^" + Rc.call(Ec).replace(Oc, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Ic(e) {
  if (!Tt(e) || Cc(e))
    return !1;
  var s = vn(e) ? jc : xc;
  return s.test(Be(e));
}
function Mc(e, s) {
  return e?.[s];
}
function Re(e, s) {
  var t = Mc(e, s);
  return Ic(t) ? t : void 0;
}
var Ze = Re(ge, "Map"), et = Re(Object, "create");
function Fc() {
  this.__data__ = et ? et(null) : {}, this.size = 0;
}
function Pc(e) {
  var s = this.has(e) && delete this.__data__[e];
  return this.size -= s ? 1 : 0, s;
}
var zc = "__lodash_hash_undefined__", Lc = Object.prototype, Vc = Lc.hasOwnProperty;
function Hc(e) {
  var s = this.__data__;
  if (et) {
    var t = s[e];
    return t === zc ? void 0 : t;
  }
  return Vc.call(s, e) ? s[e] : void 0;
}
var Nc = Object.prototype, Dc = Nc.hasOwnProperty;
function Wc(e) {
  var s = this.__data__;
  return et ? s[e] !== void 0 : Dc.call(s, e);
}
var qc = "__lodash_hash_undefined__";
function Xc(e, s) {
  var t = this.__data__;
  return this.size += this.has(e) ? 0 : 1, t[e] = et && s === void 0 ? qc : s, this;
}
function xe(e) {
  var s = -1, t = e == null ? 0 : e.length;
  for (this.clear(); ++s < t; ) {
    var n = e[s];
    this.set(n[0], n[1]);
  }
}
xe.prototype.clear = Fc;
xe.prototype.delete = Pc;
xe.prototype.get = Hc;
xe.prototype.has = Wc;
xe.prototype.set = Xc;
function Gc() {
  this.size = 0, this.__data__ = {
    hash: new xe(),
    map: new (Ze || _e)(),
    string: new xe()
  };
}
function Yc(e) {
  var s = typeof e;
  return s == "string" || s == "number" || s == "symbol" || s == "boolean" ? e !== "__proto__" : e === null;
}
function At(e, s) {
  var t = e.__data__;
  return Yc(s) ? t[typeof s == "string" ? "string" : "hash"] : t.map;
}
function Kc(e) {
  var s = At(this, e).delete(e);
  return this.size -= s ? 1 : 0, s;
}
function Jc(e) {
  return At(this, e).get(e);
}
function Qc(e) {
  return At(this, e).has(e);
}
function Zc(e, s) {
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
He.prototype.clear = Gc;
He.prototype.delete = Kc;
He.prototype.get = Jc;
He.prototype.has = Qc;
He.prototype.set = Zc;
var eu = 200;
function tu(e, s) {
  var t = this.__data__;
  if (t instanceof _e) {
    var n = t.__data__;
    if (!Ze || n.length < eu - 1)
      return n.push([e, s]), this.size = ++t.size, this;
    t = this.__data__ = new He(n);
  }
  return t.set(e, s), this.size = t.size, this;
}
function Ne(e) {
  var s = this.__data__ = new _e(e);
  this.size = s.size;
}
Ne.prototype.clear = ic;
Ne.prototype.delete = cc;
Ne.prototype.get = uc;
Ne.prototype.has = dc;
Ne.prototype.set = tu;
function su(e, s) {
  for (var t = -1, n = e == null ? 0 : e.length; ++t < n && s(e[t], t, e) !== !1; )
    ;
  return e;
}
var ps = function() {
  try {
    var e = Re(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}();
function nu(e, s, t) {
  s == "__proto__" && ps ? ps(e, s, {
    configurable: !0,
    enumerable: !0,
    value: t,
    writable: !0
  }) : e[s] = t;
}
var ou = Object.prototype, lu = ou.hasOwnProperty;
function ru(e, s, t) {
  var n = e[s];
  (!(lu.call(e, s) && hn(n, t)) || t === void 0 && !(s in e)) && nu(e, s, t);
}
function au(e, s) {
  for (var t = -1, n = Array(e); ++t < e; )
    n[t] = s(t);
  return n;
}
function st(e) {
  return e != null && typeof e == "object";
}
var iu = "[object Arguments]";
function bs(e) {
  return st(e) && tt(e) == iu;
}
var yn = Object.prototype, cu = yn.hasOwnProperty, uu = yn.propertyIsEnumerable, du = bs(/* @__PURE__ */ function() {
  return arguments;
}()) ? bs : function(e) {
  return st(e) && cu.call(e, "callee") && !uu.call(e, "callee");
}, os = Array.isArray;
function fu() {
  return !1;
}
var pn = typeof exports == "object" && exports && !exports.nodeType && exports, _s = pn && typeof module == "object" && module && !module.nodeType && module, hu = _s && _s.exports === pn, ws = hu ? ge.Buffer : void 0, mu = ws ? ws.isBuffer : void 0, bn = mu || fu, gu = 9007199254740991, vu = /^(?:0|[1-9]\d*)$/;
function yu(e, s) {
  var t = typeof e;
  return s = s ?? gu, !!s && (t == "number" || t != "symbol" && vu.test(e)) && e > -1 && e % 1 == 0 && e < s;
}
var pu = 9007199254740991;
function _n(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= pu;
}
var bu = "[object Arguments]", _u = "[object Array]", wu = "[object Boolean]", Su = "[object Date]", ku = "[object Error]", $u = "[object Function]", Cu = "[object Map]", Tu = "[object Number]", Au = "[object Object]", Ou = "[object RegExp]", xu = "[object Set]", Uu = "[object String]", Bu = "[object WeakMap]", Ru = "[object ArrayBuffer]", Eu = "[object DataView]", ju = "[object Float32Array]", Iu = "[object Float64Array]", Mu = "[object Int8Array]", Fu = "[object Int16Array]", Pu = "[object Int32Array]", zu = "[object Uint8Array]", Lu = "[object Uint8ClampedArray]", Vu = "[object Uint16Array]", Hu = "[object Uint32Array]", H = {};
H[ju] = H[Iu] = H[Mu] = H[Fu] = H[Pu] = H[zu] = H[Lu] = H[Vu] = H[Hu] = !0;
H[bu] = H[_u] = H[Ru] = H[wu] = H[Eu] = H[Su] = H[ku] = H[$u] = H[Cu] = H[Tu] = H[Au] = H[Ou] = H[xu] = H[Uu] = H[Bu] = !1;
function Nu(e) {
  return st(e) && _n(e.length) && !!H[tt(e)];
}
function ls(e) {
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
}(), Ss = Le && Le.isTypedArray, Wu = Ss ? ls(Ss) : Nu, qu = Object.prototype, Xu = qu.hasOwnProperty;
function Gu(e, s) {
  var t = os(e), n = !t && du(e), l = !t && !n && bn(e), o = !t && !n && !l && Wu(e), r = t || n || l || o, a = r ? au(e.length, String) : [], u = a.length;
  for (var i in e)
    Xu.call(e, i) && !(r && // Safari 9 has enumerable `arguments.length` in strict mode.
    (i == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    l && (i == "offset" || i == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    o && (i == "buffer" || i == "byteLength" || i == "byteOffset") || // Skip index properties.
    yu(i, u))) && a.push(i);
  return a;
}
var Yu = Object.prototype;
function Sn(e) {
  var s = e && e.constructor, t = typeof s == "function" && s.prototype || Yu;
  return e === t;
}
function kn(e, s) {
  return function(t) {
    return e(s(t));
  };
}
var Ku = kn(Object.keys, Object), Ju = Object.prototype, Qu = Ju.hasOwnProperty;
function Zu(e) {
  if (!Sn(e))
    return Ku(e);
  var s = [];
  for (var t in Object(e))
    Qu.call(e, t) && t != "constructor" && s.push(t);
  return s;
}
function ed(e) {
  return e != null && _n(e.length) && !vn(e);
}
function td(e) {
  return ed(e) ? Gu(e) : Zu(e);
}
var $n = typeof exports == "object" && exports && !exports.nodeType && exports, ks = $n && typeof module == "object" && module && !module.nodeType && module, sd = ks && ks.exports === $n, $s = sd ? ge.Buffer : void 0;
$s && $s.allocUnsafe;
function nd(e, s) {
  return e.slice();
}
function od(e, s) {
  for (var t = -1, n = e == null ? 0 : e.length, l = 0, o = []; ++t < n; ) {
    var r = e[t];
    s(r, t, e) && (o[l++] = r);
  }
  return o;
}
function ld() {
  return [];
}
var rd = Object.prototype, ad = rd.propertyIsEnumerable, Cs = Object.getOwnPropertySymbols, id = Cs ? function(e) {
  return e == null ? [] : (e = Object(e), od(Cs(e), function(s) {
    return ad.call(e, s);
  }));
} : ld;
function cd(e, s) {
  for (var t = -1, n = s.length, l = e.length; ++t < n; )
    e[l + t] = s[t];
  return e;
}
var ud = kn(Object.getPrototypeOf, Object);
function dd(e, s, t) {
  var n = s(e);
  return os(e) ? n : cd(n, t(e));
}
function fd(e) {
  return dd(e, td, id);
}
var Ht = Re(ge, "DataView"), Nt = Re(ge, "Promise"), Dt = Re(ge, "Set"), Wt = Re(ge, "WeakMap"), Ts = "[object Map]", hd = "[object Object]", As = "[object Promise]", Os = "[object Set]", xs = "[object WeakMap]", Us = "[object DataView]", md = Be(Ht), gd = Be(Ze), vd = Be(Nt), yd = Be(Dt), pd = Be(Wt), ye = tt;
(Ht && ye(new Ht(new ArrayBuffer(1))) != Us || Ze && ye(new Ze()) != Ts || Nt && ye(Nt.resolve()) != As || Dt && ye(new Dt()) != Os || Wt && ye(new Wt()) != xs) && (ye = function(e) {
  var s = tt(e), t = s == hd ? e.constructor : void 0, n = t ? Be(t) : "";
  if (n)
    switch (n) {
      case md:
        return Us;
      case gd:
        return Ts;
      case vd:
        return As;
      case yd:
        return Os;
      case pd:
        return xs;
    }
  return s;
});
var bd = Object.prototype, _d = bd.hasOwnProperty;
function wd(e) {
  var s = e.length, t = new e.constructor(s);
  return s && typeof e[0] == "string" && _d.call(e, "index") && (t.index = e.index, t.input = e.input), t;
}
var Bs = ge.Uint8Array;
function rs(e) {
  var s = new e.constructor(e.byteLength);
  return new Bs(s).set(new Bs(e)), s;
}
function Sd(e, s) {
  var t = rs(e.buffer);
  return new e.constructor(t, e.byteOffset, e.byteLength);
}
var kd = /\w*$/;
function $d(e) {
  var s = new e.constructor(e.source, kd.exec(e));
  return s.lastIndex = e.lastIndex, s;
}
var Rs = ze ? ze.prototype : void 0, Es = Rs ? Rs.valueOf : void 0;
function Cd(e) {
  return Es ? Object(Es.call(e)) : {};
}
function Td(e, s) {
  var t = rs(e.buffer);
  return new e.constructor(t, e.byteOffset, e.length);
}
var Ad = "[object Boolean]", Od = "[object Date]", xd = "[object Map]", Ud = "[object Number]", Bd = "[object RegExp]", Rd = "[object Set]", Ed = "[object String]", jd = "[object Symbol]", Id = "[object ArrayBuffer]", Md = "[object DataView]", Fd = "[object Float32Array]", Pd = "[object Float64Array]", zd = "[object Int8Array]", Ld = "[object Int16Array]", Vd = "[object Int32Array]", Hd = "[object Uint8Array]", Nd = "[object Uint8ClampedArray]", Dd = "[object Uint16Array]", Wd = "[object Uint32Array]";
function qd(e, s, t) {
  var n = e.constructor;
  switch (s) {
    case Id:
      return rs(e);
    case Ad:
    case Od:
      return new n(+e);
    case Md:
      return Sd(e);
    case Fd:
    case Pd:
    case zd:
    case Ld:
    case Vd:
    case Hd:
    case Nd:
    case Dd:
    case Wd:
      return Td(e);
    case xd:
      return new n();
    case Ud:
    case Ed:
      return new n(e);
    case Bd:
      return $d(e);
    case Rd:
      return new n();
    case jd:
      return Cd(e);
  }
}
var js = Object.create, Xd = /* @__PURE__ */ function() {
  function e() {
  }
  return function(s) {
    if (!Tt(s))
      return {};
    if (js)
      return js(s);
    e.prototype = s;
    var t = new e();
    return e.prototype = void 0, t;
  };
}();
function Gd(e) {
  return typeof e.constructor == "function" && !Sn(e) ? Xd(ud(e)) : {};
}
var Yd = "[object Map]";
function Kd(e) {
  return st(e) && ye(e) == Yd;
}
var Is = Le && Le.isMap, Jd = Is ? ls(Is) : Kd, Qd = "[object Set]";
function Zd(e) {
  return st(e) && ye(e) == Qd;
}
var Ms = Le && Le.isSet, ef = Ms ? ls(Ms) : Zd, Cn = "[object Arguments]", tf = "[object Array]", sf = "[object Boolean]", nf = "[object Date]", of = "[object Error]", Tn = "[object Function]", lf = "[object GeneratorFunction]", rf = "[object Map]", af = "[object Number]", An = "[object Object]", cf = "[object RegExp]", uf = "[object Set]", df = "[object String]", ff = "[object Symbol]", hf = "[object WeakMap]", mf = "[object ArrayBuffer]", gf = "[object DataView]", vf = "[object Float32Array]", yf = "[object Float64Array]", pf = "[object Int8Array]", bf = "[object Int16Array]", _f = "[object Int32Array]", wf = "[object Uint8Array]", Sf = "[object Uint8ClampedArray]", kf = "[object Uint16Array]", $f = "[object Uint32Array]", L = {};
L[Cn] = L[tf] = L[mf] = L[gf] = L[sf] = L[nf] = L[vf] = L[yf] = L[pf] = L[bf] = L[_f] = L[rf] = L[af] = L[An] = L[cf] = L[uf] = L[df] = L[ff] = L[wf] = L[Sf] = L[kf] = L[$f] = !0;
L[of] = L[Tn] = L[hf] = !1;
function at(e, s, t, n, l, o) {
  var r;
  if (r !== void 0)
    return r;
  if (!Tt(e))
    return e;
  var a = os(e);
  if (a)
    r = wd(e);
  else {
    var u = ye(e), i = u == Tn || u == lf;
    if (bn(e))
      return nd(e);
    if (u == An || u == Cn || i && !l)
      r = i ? {} : Gd(e);
    else {
      if (!L[u])
        return l ? e : {};
      r = qd(e, u);
    }
  }
  o || (o = new Ne());
  var d = o.get(e);
  if (d)
    return d;
  o.set(e, r), ef(e) ? e.forEach(function(w) {
    r.add(at(w, s, t, w, e, o));
  }) : Jd(e) && e.forEach(function(w, A) {
    r.set(A, at(w, s, t, A, e, o));
  });
  var v = fd, y = a ? void 0 : v(e);
  return su(y || e, function(w, A) {
    y && (A = w, w = e[A]), ru(r, A, at(w, s, t, A, e, o));
  }), r;
}
var Cf = 1, Tf = 4;
function Af(e) {
  return at(e, Cf | Tf);
}
const It = (e) => e.every((s) => typeof s == "object"), Fs = !0, On = () => window.innerWidth;
let Ps = On();
const Of = {
  name: "UluTableSticky",
  components: {
    UluTableStickyTable: ec
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
      required: Fs
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
      required: Fs
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
      resizeHandler: qt(this.onResize.bind(this), 500, !0),
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
      const e = this.idCreator("c"), s = Af(this.columns), t = (n, l) => {
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
}, xf = { class: "table-sticky__sticky-wrap table-sticky__sticky-wrap--header" }, Uf = { class: "table-sticky__header-wrap" }, Bf = { class: "table-sticky__sticky-wrap table-sticky__sticky-wrap--first-column-header" }, Rf = { class: "table-sticky__sticky-wrap table-sticky__sticky-wrap--controls" }, Ef = {
  key: 2,
  class: "table-sticky__controls-inner"
}, jf = ["disabled"], If = ["disabled"], Mf = {
  ref: "display",
  class: "table-sticky__display"
};
function Ff(e, s, t, n, l, o) {
  const r = K("UluTableStickyTable");
  return c(), f("div", {
    class: m(["table-sticky", {
      "table-sticky--overflown-x": l.overflownX,
      "table-sticky--can-scroll-right": l.canScrollRight,
      "table-sticky--can-scroll-left": l.canScrollLeft
    }])
  }, [
    h("div", xf, [
      h("div", Uf, [
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
          B(e.$slots, (a, u) => ({
            name: u,
            fn: k((i) => [
              g(e.$slots, u, ie(me(i)))
            ])
          }))
        ]), 1032, ["classes", "caption", "resolveClasses", "getColumnTitle", "idPrefix", "headerRows", "style", "onColumnSorted"])
      ])
    ]),
    h("div", Bf, [
      t.firstColumnSticky ? (c(), _(r, {
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
        B(e.$slots, (a, u) => ({
          name: u,
          fn: k((i) => [
            g(e.$slots, u, ie(me(i)))
          ])
        }))
      ]), 1032, ["classes", "caption", "resolveClasses", "getColumnTitle", "idPrefix", "headerRows", "style", "onColumnSorted"])) : p("", !0)
    ]),
    h("div", Rf, [
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
        }) : t.controlsComponent ? (c(), _(F(t.controlsComponent), {
          key: 1,
          scrollLeft: o.scrollLeft,
          scrollRight: o.scrollRight,
          canScrollLeft: l.canScrollLeft,
          canScrollRight: l.canScrollRight
        }, null, 8, ["scrollLeft", "scrollRight", "canScrollLeft", "canScrollRight"])) : (c(), f("div", Ef, [
          h("button", {
            class: m(["table-sticky__control table-sticky__control--left", o.resolveClasses(t.classes.controlButton)]),
            "aria-label": "Scroll Left",
            onClick: s[0] || (s[0] = (...a) => o.scrollLeft && o.scrollLeft(...a)),
            disabled: !l.canScrollLeft
          }, [
            g(e.$slots, "controlLeft", {}, () => [
              s[2] || (s[2] = C(" ← ", -1))
            ])
          ], 10, jf),
          h("button", {
            class: m(["table-sticky__control table-sticky__control--right", o.resolveClasses(t.classes.controlButton)]),
            "aria-label": "Scroll Right",
            onClick: s[1] || (s[1] = (...a) => o.scrollRight && o.scrollRight(...a)),
            disabled: !l.canScrollRight
          }, [
            g(e.$slots, "controlRight", {}, () => [
              s[3] || (s[3] = C(" → ", -1))
            ])
          ], 10, If)
        ]))
      ], 2), [
        [Mt, o.controlsShown]
      ])
    ]),
    h("div", Mf, [
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
        B(e.$slots, (a, u) => ({
          name: u,
          fn: k((i) => [
            g(e.$slots, u, ie(me(i)))
          ])
        }))
      ]), 1032, ["classes", "resolveClasses", "headerRows", "rows", "footerRows", "rowColumns", "caption", "idPrefix", "getRowValue", "getColumnTitle", "onVnodeMounted", "onActualHeaderRemoved", "onActualHeaderAdded", "onColumnSorted"])
    ], 512),
    t.firstColumnSticky ? (c(), _(r, {
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
      B(e.$slots, (a, u) => ({
        name: u,
        fn: k((i) => [
          g(e.$slots, u, ie(me(i)))
        ])
      }))
    ]), 1032, ["classes", "resolveClasses", "caption", "headerRows", "columnWidth", "rows", "footerRows", "rowColumns", "idPrefix", "getRowValue", "getColumnTitle", "style", "onColumnSorted"])) : p("", !0)
  ], 2);
}
const $m = /* @__PURE__ */ j(Of, [["render", Ff]]), Cm = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  dom: _o,
  router: $l
}, Symbol.toStringTag, { value: "Module" }));
export {
  ms as UluAccordion,
  Vh as UluAdaptiveLayout,
  vh as UluAlert,
  tm as UluAnimateNumber,
  Pl as UluBadge,
  yh as UluBadgeStack,
  Dh as UluBreadcrumb,
  Ul as UluButton,
  ph as UluButtonVerbose,
  bh as UluCallout,
  _h as UluCard,
  Lt as UluCollapsible,
  Gh as UluConditionalText,
  sa as UluConditionalWrapper,
  Hh as UluDataGrid,
  wh as UluDefinitionList,
  ah as UluDropdown,
  Yh as UluEmpty,
  Kh as UluEmptyView,
  Sh as UluExternalLink,
  lm as UluFacetsActiveFilters,
  am as UluFacetsFilterAccordions,
  rm as UluFacetsFilterLists,
  im as UluFacetsFilterPopovers,
  cm as UluFacetsFilterSelects,
  um as UluFacetsHeaderLayout,
  ft as UluFacetsList,
  dm as UluFacetsResults,
  fm as UluFacetsSearch,
  hm as UluFacetsSidebarLayout,
  mm as UluFacetsSort,
  Ah as UluFileDisplay,
  Eh as UluForm,
  jh as UluFormActions,
  Ih as UluFormCheckbox,
  Mh as UluFormFieldset,
  Oh as UluFormFile,
  Fh as UluFormItem,
  Ph as UluFormItemsInline,
  xh as UluFormMessage,
  zh as UluFormRadio,
  Ve as UluFormRequiredChar,
  Uh as UluFormSelect,
  Bh as UluFormText,
  Lh as UluFormTextarea,
  D as UluIcon,
  Sm as UluImageSlideShow,
  kh as UluList,
  $h as UluMain,
  ln as UluMenu,
  ul as UluMenuStack,
  Ks as UluModal,
  Wh as UluNavStrip,
  uh as UluOverflowPopover,
  qh as UluPager,
  Jh as UluPlaceholderImage,
  Qh as UluPlaceholderText,
  sm as UluProgressBar,
  nm as UluProgressCircle,
  Zh as UluRouteAnnouncer,
  Ch as UluRule,
  em as UluSanityRichText,
  gm as UluScrollAnchors,
  vm as UluScrollAnchorsNav,
  ym as UluScrollAnchorsNavAnimated,
  pm as UluScrollAnchorsSection,
  Rh as UluSearchForm,
  un as UluSelectableMenu,
  bm as UluShowSkeleton,
  _m as UluSkeletonContent,
  wm as UluSkeletonMedia,
  fi as UluSkeletonText,
  Xh as UluSkipLink,
  xi as UluSlideShow,
  km as UluSlideShowSlide,
  Th as UluSpokeSpinner,
  dh as UluTab,
  fh as UluTabGroup,
  hh as UluTabList,
  mh as UluTabPanel,
  gh as UluTabPanels,
  $m as UluTableSticky,
  Vi as UluTableStickyRows,
  ec as UluTableStickyTable,
  on as UluTag,
  Nh as UluTitleRail,
  rh as breakpointsPlugin,
  eh as corePlugin,
  oh as modalsPlugin,
  nh as popoversPlugin,
  lh as toastPlugin,
  qo as useBreakpointManager,
  ch as useDocumentTitle,
  om as useFacets,
  Oo as useIcon,
  ce as useModifiers,
  ih as usePagination,
  Ae as useRequiredInject,
  th as useTooltip,
  sh as useTooltipFollow,
  Gs as useUluFloating,
  fl as useWindowResize,
  Cm as utils
};
