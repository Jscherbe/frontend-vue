import { reactive as lt, inject as Ae, ref as O, computed as w, watch as te, toRef as xs, createElementBlock as f, openBlock as u, normalizeStyle as G, unref as k, normalizeClass as m, createCommentVNode as p, createBlock as _, resolveDynamicComponent as j, normalizeProps as de, mergeProps as le, Fragment as U, createTextVNode as T, toDisplayString as S, Teleport as yt, createVNode as x, resolveDirective as Nn, withDirectives as ze, createElementVNode as h, renderSlot as g, withKeys as Wn, nextTick as Ke, markRaw as Oe, watchEffect as pt, defineAsyncComponent as Bs, toRefs as Es, toValue as ct, resolveComponent as Z, withModifiers as Rs, useSlots as Dn, renderList as R, TransitionGroup as qn, withCtx as $, onMounted as Be, onBeforeUnmount as bt, isRef as Is, hasInjectionContext as js, getCurrentInstance as Ms, onDeactivated as Fs, onActivated as Ps, onUnmounted as _t, guardReactiveProps as ve, h as zs, watchPostEffect as Ls, vModelText as Vs, vShow as zt, provide as Bt, createSlots as Fe } from "vue";
import { useFloating as Hs, autoUpdate as Ns, inline as Ws, offset as Ds, flip as qs, shift as Xs, arrow as Gs } from "@floating-ui/vue";
import { normalizeClasses as fn } from "@ulu/utils/templating.js";
import { preventScroll as Ys, wasClickOutside as Ks, isBrowser as Js, getScrollParent as Qs } from "@ulu/utils/browser/dom.js";
import { Resizer as Zs } from "@ulu/frontend/js/ui/resizer.js";
import { debounce as Kt } from "@ulu/utils/performance.js";
import { useRoute as Xn, useRouter as el, RouterLink as Qe } from "vue-router";
import { Tab as tl, TabGroup as nl, TabList as sl, TabPanel as ll, TabPanels as ol } from "@headlessui/vue";
import { setPositionClasses as al } from "@ulu/frontend/js/utils/dom.js";
import { randomInt as ft } from "@ulu/utils/random.js";
import { PortableText as rl } from "@portabletext/vue";
import il from "gsap";
import cl from "fuse.js";
import { urlize as ul } from "@ulu/utils/string.js";
import { runAfterFramePaint as Gn } from "@ulu/utils/browser/performance.js";
import { arrayCreate as dl } from "@ulu/utils/array.js";
const hn = {
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
function qf(e, n = {}) {
  const t = lt({ ...hn }), { iconsByType: s, ...l } = n || {};
  l && Object.assign(t, l);
  const o = {
    // Methods to interact with settings
    getSettings() {
      return t;
    },
    getDefaultSettings() {
      return { ...hn };
    },
    updateSettings(a) {
      return Object.assign(t, a);
    },
    getSetting(a) {
      if (!t.hasOwnProperty(a)) {
        console.warn(`Attempted to access non-existent setting: ${a}`);
        return;
      }
      return t[a];
    },
    updateSetting(a, r) {
      if (typeof a != "string")
        throw new Error("Expected key to be string");
      t[a] = r;
    },
    getIcon(a) {
      const r = t.iconsByType;
      if (!r[a])
        throw new Error(`Icon type "${a}" not found!`);
      return r[a];
    },
    setIcon(a, r) {
      t.iconsByType[a] = r;
    }
  };
  if (s)
    for (const [a, r] of Object.entries(s))
      o.setIcon(a, r);
  e.provide("uluCore", o), e.config.globalProperties.$uluCore = o;
}
const fl = {
  uluCore: "Core",
  uluIsMobile: "Breakpoints",
  uluBreakpointActive: "Breakpoints",
  uluBreakpointDirection: "Breakpoints",
  uluBreakpointManager: "Breakpoints",
  uluModals: "Modals",
  uluToast: "Toast",
  uluPopoverOptions: "Popovers",
  uluTooltipState: "Popovers"
}, mn = {};
function Ce(e) {
  const n = Ae(e, mn);
  if (n === mn) {
    const t = fl[e] || "", s = t ? ` from the '${t}' plugin` : "", l = t ? "Please install missing plugin." : "";
    throw new Error(`Required inject: '${e}'${s} was not provided. ${l}`);
  }
  return n;
}
function Yn(e, n, t) {
  const s = O(null), l = O([]), o = w(() => t.value?.placement), {
    floatingStyles: a,
    placement: r,
    middlewareData: c,
    update: i,
    isPositioned: d
  } = Hs(e, n, {
    placement: o,
    whileElementsMounted: Ns,
    middleware: l
  });
  te(
    [t, s],
    ([b, A]) => {
      const C = [];
      b && (b.inline && C.push(Ws()), b.offset && C.push(Ds(b.offset)), C.push(qs()), C.push(Xs()), b.arrow && A && C.push(Gs({ element: A })), l.value = C);
    },
    { immediate: !0, deep: !0 }
  );
  const v = w(() => {
    const b = c.value?.arrow;
    return b ? {
      position: "absolute",
      left: b?.x != null ? `${b.x}px` : "",
      top: b?.y != null ? `${b.y}px` : ""
    } : null;
  });
  te(t, (b) => {
    b && b.onReady && b.onReady({ update: i, isPositioned: d });
  });
  const y = w(() => t.value?.strategy === "fixed");
  return {
    floatingStyles: a,
    placement: r,
    middlewareData: c,
    update: i,
    isPositioned: d,
    arrowStyles: v,
    contentArrow: s,
    isFixedStrategy: y
  };
}
const hl = ["id", "data-placement"], ml = ["innerHTML"], gl = {
  key: 1,
  class: "popover__inner"
}, vl = {
  __name: "UluTooltipPopover",
  props: {
    config: Object,
    trigger: {
      type: Object,
      default: null
    }
  },
  setup(e) {
    const n = e, t = O(null), s = w(() => n.config), {
      floatingStyles: l,
      placement: o,
      arrowStyles: a,
      contentArrow: r,
      isFixedStrategy: c
    } = Yn(xs(n, "trigger"), t, s);
    return (i, d) => (u(), f("span", {
      class: m(["popover popover--tooltip is-active", [
        {
          "popover--fixed": k(c)
        },
        s.value.class
      ]]),
      ref_key: "content",
      ref: t,
      id: k(Kn),
      "data-placement": k(o),
      style: G(k(l))
    }, [
      s.value.isHtml ? (u(), f("span", {
        key: 0,
        class: "popover__inner",
        innerHTML: s.value.content
      }, null, 8, ml)) : (u(), f("span", gl, [
        s.value.component ? (u(), _(j(s.value.component), de(le({ key: 0 }, s.value.componentProps)), null, 16)) : (u(), f(U, { key: 1 }, [
          T(S(s.value.content), 1)
        ], 64))
      ])),
      s.value.arrow ? (u(), f("span", {
        key: 2,
        class: "popover__arrow",
        ref_key: "contentArrow",
        ref: r,
        style: G(k(a))
      }, null, 4)) : p("", !0)
    ], 14, hl));
  }
}, yl = {
  __name: "UluTooltipDisplay",
  setup(e) {
    const n = Ce(kt);
    return (t, s) => k(n)?.state.visible ? (u(), _(yt, {
      key: 0,
      to: k(n).state.config.teleportTo || "body"
    }, [
      x(vl, {
        trigger: k(n).state.trigger,
        config: k(n).state.config
      }, null, 8, ["trigger", "config"])
    ], 8, ["to"])) : p("", !0);
  }
}, Pe = {
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
function pl(e) {
  if (e) {
    if (e instanceof HTMLElement)
      return e;
    if (typeof e == "object" && "$el" in e)
      return e.$el;
  }
}
let bl = 0;
function se(e = "ulu-id") {
  const n = `${e}-${++bl}`;
  return typeof document < "u" && document.getElementById(n) ? se(e) : n;
}
const _l = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  newId: se,
  refToElement: pl
}, Symbol.toStringTag, { value: "Module" })), wl = ["id", "disabled", "aria-expanded", "aria-controls", "aria-label"], Sl = ["aria-labelledby", "id", "data-placement"], kl = { class: "popover__inner" }, $l = {
  key: 0,
  class: "popover__footer"
}, wt = {
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
      default: ({ isOpen: e, content: n }) => {
        e && n.focus({ preventScroll: !0 });
      }
    }
  },
  emits: ["toggle"],
  setup(e, { emit: n }) {
    const t = n, s = e, l = se(), o = se(), a = Ce(St), r = a ? a.popover : Pe.popover, c = w(() => ({ ...r, ...s.config })), i = O(s.startOpen || !1), d = O(null), v = O(null), {
      floatingStyles: y,
      placement: b,
      update: A,
      arrowStyles: C,
      contentArrow: B,
      isFixedStrategy: H
    } = Yn(d, v, c), ee = () => {
      I(!i.value);
    }, I = (re) => {
      i.value = re;
      const Se = {
        trigger: k(d),
        content: k(v),
        isOpen: k(i)
      }, je = { isOpen: Se.isOpen };
      Ke(() => {
        i.value ? (A(), window.setTimeout(() => {
          Y(), s.directFocus(Se), t("toggle", je);
        }, 0)) : (J(), s.directFocus(Se), t("toggle", je));
      });
    };
    let F;
    const Y = () => {
      s.clickOutsideCloses && (F && J(), F = (re) => {
        v.value && !v.value.contains(re.target) && I(!1);
      }, document.addEventListener("click", F));
    }, J = () => {
      F && (document.removeEventListener("click", F), F = null);
    }, oe = () => I(!1);
    return (re, Se) => {
      const je = Nn("ulu-tooltip");
      return u(), f(U, null, [
        ze((u(), f("button", {
          type: "button",
          ref_key: "trigger",
          ref: d,
          onClick: ee,
          id: k(o),
          disabled: e.disabled,
          class: m([
            { [e.activeClass]: i.value },
            e.classes.trigger
          ]),
          "aria-expanded": i.value ? "true" : "false",
          "aria-controls": k(l),
          "aria-label": e.triggerAlt
        }, [
          g(re.$slots, "trigger", {
            isOpen: i.value,
            close: oe
          }, () => [
            T(S(e.triggerText), 1)
          ])
        ], 10, wl)), [
          [je, e.tooltip ? e.tooltip : null]
        ]),
        h("span", {
          class: m(["popover", [
            e.size ? `popover--${e.size}` : "",
            {
              "popover--no-padding": e.noPadding,
              "popover--fixed": k(H),
              "is-active": i.value
            },
            e.classes.content
          ]]),
          ref_key: "content",
          ref: v,
          "aria-labelledby": k(o),
          id: k(l),
          style: G(k(y)),
          "data-placement": k(b),
          onKeydown: Se[0] || (Se[0] = Wn((xt) => I(!1), ["esc"])),
          tabindex: "-1"
        }, [
          h("span", kl, [
            g(re.$slots, "default", {
              isOpen: i.value,
              toggle: ee,
              close: oe
            })
          ]),
          re.$slots.footer ? (u(), f("span", $l, [
            g(re.$slots, "footer", { close: oe })
          ])) : p("", !0),
          c.value.arrow ? (u(), f("span", {
            key: 1,
            class: "popover__arrow",
            ref_key: "contentArrow",
            ref: B,
            style: G(k(C)),
            "data-ulu-popover-arrow": ""
          }, null, 4)) : p("", !0)
        ], 46, Sl)
      ], 64);
    };
  }
};
function Xf() {
  const e = Ce(kt), n = Ce(St), t = { ...n.popover, ...n.tooltip };
  return {
    showTooltip: (l, o) => {
      const a = Lt(o, t);
      a && e.show(l, a);
    },
    hideTooltip: e.hide,
    tooltipState: e.state
  };
}
function Gf(e) {
  const n = Ce(kt), t = Ce(St);
  e.content || console.warn("Missing content for 'useTooltipFollow' tooltip", e);
  let s;
  const l = O(0), o = O(0), a = w(() => ({
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
  })), r = t ? t.popover : Pe.popover, c = t ? t.tooltip : Pe.tooltip, d = {
    ...{ ...r, ...c },
    content: e.content,
    inline: !1,
    // Following cursor is never inline
    onReady({ update: v }) {
      s = v;
    }
  };
  return {
    x: l,
    y: o,
    show() {
      n.show(a.value, d);
    },
    hide() {
      n.state.trigger === a.value && n.hide();
    },
    update(v) {
      l.value = v.x, o.value = v.y, s && s();
    }
  };
}
const St = "uluPopoverOptions", kt = "uluTooltipState", Kn = "ulu-global-tooltip", Lt = (e, n) => {
  if (e === !1 || e === null) return null;
  let t = e;
  return (typeof t != "object" || Array.isArray(t)) && (t = { content: t }), t.component && (t.component = Oe(t.component)), { ...n, ...t };
};
function Yf(e, n = {}) {
  const t = {
    plugin: { ...Pe.plugin, ...n.plugin || {} },
    popover: { ...Pe.popover, ...n.popover || {} },
    tooltip: { ...Pe.tooltip, ...n.tooltip || {} }
  };
  e.provide(St, t);
  const s = lt({
    visible: !1,
    trigger: null,
    config: {}
  }), l = (d, v) => {
    if (d && !v.teleportTo) {
      const y = d.closest("dialog");
      y && (v.teleportTo = y);
    }
    s.trigger && s.trigger !== d && s.trigger?.removeAttribute && s.trigger.removeAttribute("aria-describedby"), d?.setAttribute && d.setAttribute("aria-describedby", Kn), s.trigger = d, s.config = v, s.visible = !0;
  }, o = () => {
    s.trigger?.removeAttribute && s.trigger.removeAttribute("aria-describedby"), s.visible = !1;
  };
  e.provide(kt, {
    state: s,
    show: l,
    hide: o
  }), e.component("UluTooltipDisplay", yl), e.component("UluPopover", wt);
  const a = /* @__PURE__ */ new WeakMap(), r = t.popover, c = t.tooltip, i = { ...r, ...c };
  e.directive(t.plugin.directiveName, {
    mounted(d, v) {
      const y = Lt(v.value, i);
      if (!y) return;
      let b = null;
      const A = () => {
        b || (b = setTimeout(() => {
          l(d, y);
        }, y.delay));
      }, C = () => {
        clearTimeout(b), b = null, o();
      }, { showEvents: B, hideEvents: H } = y;
      B.forEach((ee) => d.addEventListener(ee, A)), H.forEach((ee) => d.addEventListener(ee, C)), a.set(d, { show: A, hide: C, showEvents: B, hideEvents: H });
    },
    updated(d, v) {
      const y = a.get(d);
      y && (y.showEvents.forEach((I) => d.removeEventListener(I, y.show)), y.hideEvents.forEach((I) => d.removeEventListener(I, y.hide)));
      const b = Lt(v.value, i);
      if (!b) {
        s.trigger === d && o();
        return;
      }
      let A = null;
      const C = () => {
        A || (A = setTimeout(() => {
          l(d, b);
        }, b.delay));
      }, B = () => {
        clearTimeout(A), A = null, o();
      }, { showEvents: H, hideEvents: ee } = b;
      H.forEach((I) => d.addEventListener(I, C)), ee.forEach((I) => d.addEventListener(I, B)), a.set(d, { show: C, hide: B, showEvents: H, hideEvents: ee }), s.visible && s.trigger === d && l(d, b);
    },
    beforeUnmount(d) {
      s.visible && s.trigger === d && o();
      const v = a.get(d);
      v && (v.showEvents.forEach((y) => d.removeEventListener(y, v.show)), v.hideEvents.forEach((y) => d.removeEventListener(y, v.hide)), a.delete(d));
    }
  });
}
const L = (e, n) => {
  const t = e.__vccOpts || e;
  for (const [s, l] of n)
    t[s] = l;
  return t;
}, Cl = {
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
function Tl(e, n, t, s, l, o) {
  return o.currentModal ? (u(), _(j(o.currentModal.component), le({ key: 0 }, o.currentProps, {
    modelValue: l.open,
    "onUpdate:modelValue": n[0] || (n[0] = (a) => l.open = a),
    onVnodeMounted: o.modalMounted,
    onVnodeUnmounted: o.modalUnmounted
  }), null, 16, ["modelValue", "onVnodeMounted", "onVnodeUnmounted"])) : p("", !0);
}
const Al = /* @__PURE__ */ L(Cl, [["render", Tl]]);
function Ol() {
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
const q = {
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
    const n = Ae("uluCore"), t = O(null), { getIconProps: s, getClassesFromDefinition: l } = Ol();
    let o;
    const a = e, r = w(() => n.getSetting("fontAwesomeStatic")), c = w(() => n.getSetting("iconComponent")), i = w(() => n.getSetting("iconPropResolver")), d = w(() => {
      const { icon: C } = a;
      if (typeof C == "string" && C.startsWith("type:"))
        try {
          const B = C.substring(5);
          return n.getIcon(B);
        } catch (B) {
          return console.warn(B), null;
        }
      return C;
    }), v = w(() => !c.value || !d.value ? null : i.value(d.value)), y = w(() => s(d.value)), b = w(() => l(d.value)), A = w(() => ({
      "flow-inline": a.spaced
    }));
    return pt(async () => {
      if (!r.value && d.value) {
        if (t.value === null)
          if (o)
            t.value = Oe(o.FontAwesomeIcon);
          else {
            const C = Bs(async () => {
              const B = await import("@fortawesome/vue-fontawesome");
              return o = B, B.FontAwesomeIcon;
            });
            t.value = Oe(C);
          }
      } else
        t.value = null;
    }), (C, B) => c.value ? (u(), _(j(c.value), le({ key: 0 }, v.value, { class: A.value }), null, 16, ["class"])) : !r.value && t.value && d.value ? (u(), _(j(t.value), le({ key: 1 }, y.value, { class: A.value }), null, 16, ["class"])) : r.value && d.value ? (u(), f("span", {
      key: 2,
      class: m([b.value, A.value]),
      "aria-hidden": "true"
    }, null, 2)) : p("", !0);
  }
};
function fe({ props: e, baseClass: n, internal: t = {} }) {
  const { modifiers: s } = Es(e);
  return { resolvedModifiers: w(() => {
    const o = ct(n), a = fn(ct(s)), r = fn(ct(t));
    if (!o)
      return console.warn("useModifiers: Missing 'baseClass' argument, modifiers will not be applied."), "";
    const c = /* @__PURE__ */ new Set([...r, ...a]);
    return Array.from(c).map((i) => `${o}--${i}`);
  }) };
}
const Ul = {
  name: "UluModal",
  components: {
    UluIcon: q
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
      titleId: se("ulu-modal-title"),
      bodyOverflowValue: null,
      bodyPaddingRightValue: null,
      isResizing: !1
    };
  },
  setup(e) {
    const n = Dn(), t = w(() => e.title || n.title), s = w(() => {
      const { allowResize: r, position: c } = e;
      if (!r || !c) return;
      const i = ["left", "right", "center"];
      return i.includes(c) ? !0 : (console.warn(`Passed invalid position for resize (${c}), use ${i.join(", ")}`), !1);
    }), l = w(() => e.position === "center" ? "type:resizeBoth" : "type:resizeHorizontal"), o = w(() => ({
      [e.position]: e.position,
      resize: e.allowResize,
      "no-resize": !e.allowResize,
      "no-header": !t.value,
      "body-fills": e.bodyFills,
      "no-backdrop": e.noBackdrop,
      "no-min-height": e.noMinHeight,
      "non-modal": e.nonModal,
      "resizer-active": s.value
    })), { resolvedModifiers: a } = fe({
      props: e,
      baseClass: "modal",
      internal: o
    });
    return {
      resolvedModifiers: a,
      hasHeader: t,
      resizerEnabled: s,
      resizerIconType: l
    };
  },
  computed: {
    resolvedLabelledby() {
      const { labelledby: e, titleId: n } = this;
      return e || n;
    }
  },
  watch: {
    modelValue: {
      // So that it runs on mount (if modelValue is initially true)
      immediate: !0,
      handler(e) {
        this.$nextTick(() => {
          const { container: n } = this.$refs;
          e ? (n[this.nonModal ? "show" : "showModal"](), this.$emit("open")) : n.close();
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
    position(e, n) {
      e !== n && (this.destroyResizer(), this.$nextTick(() => {
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
        const { target: n } = e, { container: t } = this.$refs;
        n === t && Ks(t, e) && this.close();
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
        const { preventScrollShift: n } = this;
        e.newState === "open" ? this.restoreScroll = Ys({ preventShift: n }) : this.destroyPreventScroll();
      }
    },
    setupResizer() {
      const { position: e, resizerEnabled: n } = this;
      if (n) {
        const { container: t, resizer: s } = this.$refs, l = e === "center" ? { fromX: "right", fromY: "bottom", multiplier: 2 } : { fromX: e === "right" ? "left" : "right" };
        this.resizerInstance = new Zs(t, s, l), this.handleResizerStart = () => {
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
}, xl = ["aria-labelledby", "aria-describedby"], Bl = ["id"], El = { class: "modal__title-text" }, Rl = {
  key: 2,
  class: "modal__resizer",
  ref: "resizer",
  type: "button"
};
function Il(e, n, t, s, l, o) {
  const a = Z("UluIcon");
  return u(), _(yt, {
    to: t.teleport === !1 ? null : t.teleport,
    disabled: t.teleport === !1
  }, [
    h("dialog", {
      class: m(["modal", [s.resolvedModifiers, t.classes.container]]),
      "aria-labelledby": o.resolvedLabelledby,
      "aria-describedby": t.describedby,
      ref: "container",
      style: G({ width: l.containerWidth }),
      onCancel: n[1] || (n[1] = Rs((...r) => o.close && o.close(...r), ["prevent"])),
      onClose: n[2] || (n[2] = (...r) => o.handleDialogCloseEvent && o.handleDialogCloseEvent(...r)),
      onClick: n[3] || (n[3] = (...r) => o.handleClick && o.handleClick(...r)),
      onToggle: n[4] || (n[4] = (...r) => o.handleToggle && o.handleToggle(...r))
    }, [
      s.hasHeader ? (u(), f("header", {
        key: 0,
        class: m(["modal__header", t.classes.header])
      }, [
        h("h2", {
          class: m(["modal__title", t.classes.title]),
          id: l.titleId
        }, [
          g(e.$slots, "title", { close: o.close }, () => [
            t.titleIcon ? (u(), _(a, {
              key: 0,
              class: "modal__title-icon",
              icon: t.titleIcon
            }, null, 8, ["icon"])) : p("", !0),
            h("span", El, S(t.title), 1)
          ])
        ], 10, Bl),
        h("button", {
          class: "modal__close",
          "aria-label": "Close modal",
          onClick: n[0] || (n[0] = (...r) => o.close && o.close(...r)),
          autofocus: ""
        }, [
          g(e.$slots, "closeIcon", {}, () => [
            x(a, {
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
      s.resizerEnabled ? (u(), f("button", Rl, [
        g(e.$slots, "resizerIcon", {}, () => [
          x(a, {
            class: "modal__resizer-icon",
            icon: t.resizerIcon || s.resizerIconType
          }, null, 8, ["icon"])
        ])
      ], 512)) : p("", !0)
    ], 46, xl)
  ], 8, ["to", "disabled"]);
}
const Jn = /* @__PURE__ */ L(Ul, [["render", Il]]), Xe = [], jl = O({
  /**
   * Holds active component options (including component, and options)
   */
  active: null,
  /**
   * Populated with any props passed to open method, bound to modal component
   */
  activeProps: null
}), Ge = jl.value, gn = {
  data: Ge,
  modals: Xe
}, Ml = (e) => ({
  open(n, t = null) {
    const s = this.get(n);
    Ge.active = Oe(s), Ge.activeProps = Object.assign({}, s.props, t);
  },
  /**
   * Close the active modal
   * @param {String|Node} focusTo The element or selector for an element to programmatically focus after modal close
   * @see https://www.deque.com/blog/accessible-routing-in-javascript-frameworks/
   */
  close() {
    Ge.active = null, Ge.activeProps = null;
  },
  /**
   * Get a modal's config object by name
   * @return {Object} Modal config object
   */
  get(n) {
    const t = Xe.find((s) => s.name === n);
    if (t)
      return t;
    throw new Error(`Unable to find modal named: ${n}`);
  },
  /**
   * Add a modal config
   */
  add(n) {
    const t = e(n);
    Xe.push(t);
  },
  /**
   * Removes a modal config by name
   * @return {Object} Modal that was removed
   */
  remove(n) {
    const t = Xe.findIndex((s) => s.name === n);
    if (t > -1)
      return Xe.splice(t, 1);
    warn("unable to find modal to remove");
  }
}), Fl = {
  modals: [],
  modalOptions: {}
};
function Kf(e, n) {
  const t = Object.assign({}, Fl, n), l = Ml((o) => Object.assign({}, t.modalOptions, o));
  e.component("UluModalsDisplay", Al), e.component("UluModal", Jn), t.modals.forEach((o) => {
    l.add(o);
  }), gn.options = t, e.config.globalProperties.$uluModals = l, e.provide("uluModals", l), e.config.globalProperties.$uluModalsState = gn;
}
const Pl = {
  name: "UluToast",
  components: {
    UluIcon: q
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
    handleAction(e, n) {
      const { toast: t } = this;
      this.toast.close(), this.$nextTick(() => {
        n(e, t, n);
      });
    }
  }
}, zl = ["onClick"];
function Ll(e, n, t, s, l, o) {
  const a = Z("UluIcon");
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
        t.toast.icon ? (u(), _(a, {
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
          }, S(t.toast.title), 3),
          t.toast.date ? (u(), f("span", {
            key: 0,
            class: m(["toast__date", t.classes.date])
          }, S(t.toast.date), 3)) : p("", !0)
        ], 2)) : p("", !0),
        t.toast.description ? (u(), f("div", {
          key: 1,
          class: m(["toast__body", t.classes.body])
        }, S(t.toast.description), 3)) : p("", !0)
      ])
    ], 2),
    t.toast.actions?.length ? (u(), f("div", {
      key: 1,
      class: m(["toast__actions", t.classes.actions])
    }, [
      (u(!0), f(U, null, R(t.toast.actions, (r, c) => (u(), f("button", {
        key: c,
        class: m(["toast__action", t.classes.action]),
        onClick: (i) => o.handleAction(i, r)
      }, S(r.label), 11, zl))), 128))
    ], 2)) : p("", !0),
    h("button", {
      class: m(["toast__close", t.classes.closeButton]),
      onClick: n[0] || (n[0] = (...r) => t.toast.close && t.toast.close(...r))
    }, [
      x(a, { icon: "type:close" })
    ], 2)
  ], 2);
}
const Qn = /* @__PURE__ */ L(Pl, [["render", Ll]]), vn = {
  toastOptions: {
    /**
     * Component used to render the toast in the display
     */
    component: Oe(Qn),
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
}, { assign: Et } = Object;
let Vl = 0;
const ke = lt({
  toasts: [],
  /**
   * Saveable 
   */
  pluginOptions: vn.pluginOptions,
  toastOptions: vn.toastOptions,
  setToastOptions(e) {
    return this.toastOptions = Et({}, this.toastOptions, e), this.pluginOptions;
  },
  setPluginOptions(e) {
    return this.pluginOptions = Et({}, this.pluginOptions, e), this.pluginOptions;
  },
  createToast(e) {
    const n = `toast-${++Vl}`;
    return Et({}, this.toastOptions, e, {
      uid: n,
      close() {
        Vt.remove(n);
      }
    });
  }
}), Vt = {
  /**
   * 
   * @param {Object} options Toast options
   * @returns Toast object (to be used to remove)
   */
  add(e) {
    const n = ke.createToast(e);
    return ke.toasts.unshift(n), n.duration && setTimeout(() => {
      this.remove(n.uid);
    }, n.duration), n;
  },
  /**
   * 
   * @param {Object} toast Toast uid
   */
  remove(e) {
    const n = ke.toasts.findIndex((t) => t.uid === e);
    n > -1 && ke.toasts.splice(n, 1);
  },
  /**
   * Remove all toasts
   */
  removeAll() {
    ke.toasts = [];
  }
}, Hl = {
  name: "UluTooltipDisplay",
  data() {
    const { toasts: e, pluginOptions: n } = ke;
    return { toasts: e, pluginOptions: n };
  },
  computed: {
    classes() {
      const { position: e } = this.pluginOptions;
      return e.map((t) => `toast-container--${t}`);
    }
  }
};
function Nl(e, n, t, s, l, o) {
  return u(), _(yt, {
    to: l.pluginOptions.teleportTo
  }, [
    x(qn, {
      class: m(["toast-container", o.classes]),
      name: "toast-animation",
      tag: "div"
    }, {
      default: $(() => [
        (u(!0), f(U, null, R(l.toasts, (a) => (u(), _(j(a.component), {
          key: a.uid,
          toast: a
        }, null, 8, ["toast"]))), 128))
      ]),
      _: 1
    }, 8, ["class"])
  ], 8, ["to"]);
}
const Wl = /* @__PURE__ */ L(Hl, [["render", Nl]]);
function Jf(e, n = {}) {
  ke.setPluginOptions(n?.plugin), ke.setToastOptions(n?.toast), e.component("UluToast", Qn), e.component("UluToastDisplay", Wl), e.config.globalProperties.$uluToast = Vt, e.provide("uluToast", Vt);
}
const Dl = {
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
function ql(e) {
  const n = Object.assign({}, Dl, e), t = O(null), s = O(n.initialValue), l = O(null);
  return (async () => {
    if (!Js()) return;
    await new Promise((d) => {
      document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", () => d()) : d();
    });
    const a = await import("@ulu/frontend/js/ui/breakpoints.js"), { BreakpointManager: r } = a, c = Oe(new r(n.plugin));
    t.value = Oe(c);
    const i = () => {
      s.value = c.active, l.value = c.resizeDirection;
    };
    i(), n.onReady && n.onReady(c), c.onChange(i);
  })(), { breakpointManager: t, breakpointActive: s, breakpointDirection: l };
}
const Xl = {
  /**
   * Breakpoint for mobile down/max
   */
  breakpointMobile: "small",
  /**
   * Options to pass to useBreakpointManager()
   */
  managerOptions: {}
};
function Qf(e, n) {
  const t = O(!1), s = Object.assign({}, Xl, n), { breakpointMobile: l } = s, { onReady: o } = s.managerOptions, a = {
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
  }, r = Object.assign({}, s.managerOptions, a), {
    breakpointManager: c,
    breakpointActive: i,
    breakpointDirection: d
  } = ql(r);
  e.provide("uluBreakpointActive", w(() => i.value)), e.provide("uluBreakpointDirection", w(() => d.value)), e.provide("uluBreakpointManager", w(() => c.value)), e.provide("uluIsMobile", w(() => t.value));
}
const Ht = /* @__PURE__ */ new Set(), ne = /* @__PURE__ */ new WeakMap(), Ue = /* @__PURE__ */ new WeakMap(), ie = /* @__PURE__ */ new WeakMap(), Ze = /* @__PURE__ */ new WeakMap(), Rt = /* @__PURE__ */ new WeakMap(), Ye = /* @__PURE__ */ new WeakMap(), Te = /* @__PURE__ */ new WeakMap(), $e = /* @__PURE__ */ new WeakMap(), Me = /* @__PURE__ */ new WeakSet();
let ae, Jt = 0, Qt = 0;
const _e = "__aa_tgt", et = "__aa_del", ht = "__aa_new", Zn = (e) => {
  const n = Jl(e);
  n && n.forEach((t) => Ql(t));
}, Gl = (e) => {
  e.forEach((n) => {
    n.target === ae && Yl(), ne.has(n.target) && Ee(n.target);
  });
};
function es(e) {
  const n = e.getBoundingClientRect(), t = ae?.clientWidth || 0, s = ae?.clientHeight || 0;
  return n.bottom < 0 || n.top > s || n.right < 0 || n.left > t;
}
function Zt(e) {
  const n = Ze.get(e);
  n?.disconnect();
  let t = ne.get(e), s = 0;
  const l = 5;
  t || (t = Le(e), ne.set(e, t));
  const { offsetWidth: o, offsetHeight: a } = ae, c = [
    t.top - l,
    o - (t.left + l + t.width),
    a - (t.top + l + t.height),
    t.left - l
  ].map((d) => `${-1 * Math.floor(d)}px`).join(" "), i = new IntersectionObserver(() => {
    ++s > 1 && Ee(e);
  }, {
    root: ae,
    threshold: 1,
    rootMargin: c
  });
  i.observe(e), Ze.set(e, i);
}
function Ee(e, n = !0) {
  clearTimeout($e.get(e));
  const t = $t(e), s = n ? tt(t) ? 500 : t.duration : 0;
  $e.set(e, setTimeout(async () => {
    const l = ie.get(e);
    try {
      await l?.finished, ne.set(e, Le(e)), Zt(e);
    } catch {
    }
  }, s));
}
function Yl() {
  clearTimeout($e.get(ae)), $e.set(ae, setTimeout(() => {
    Ht.forEach((e) => ut(e, (n) => ts(() => Ee(n))));
  }, 100));
}
function Kl(e) {
  setTimeout(() => {
    Ye.set(e, setInterval(() => ts(Ee.bind(null, e)), 2e3));
  }, Math.round(2e3 * Math.random()));
}
function ts(e) {
  typeof requestIdleCallback == "function" ? requestIdleCallback(() => e()) : requestAnimationFrame(() => e());
}
let pe;
const ns = typeof window < "u" && "ResizeObserver" in window;
ns && (ae = document.documentElement, new MutationObserver(Zn), pe = new ResizeObserver(Gl), window.addEventListener("scroll", () => {
  Qt = window.scrollY, Jt = window.scrollX;
}), pe.observe(ae));
function Jl(e) {
  return e.reduce((s, l) => [
    ...s,
    ...Array.from(l.addedNodes),
    ...Array.from(l.removedNodes)
  ], []).every((s) => s.nodeName === "#comment") ? !1 : e.reduce((s, l) => {
    if (s === !1)
      return !1;
    if (l.target instanceof Element) {
      if (It(l.target), !s.has(l.target)) {
        s.add(l.target);
        for (let o = 0; o < l.target.children.length; o++) {
          const a = l.target.children.item(o);
          if (a) {
            if (et in a)
              return !1;
            It(l.target, a), s.add(a);
          }
        }
      }
      if (l.removedNodes.length)
        for (let o = 0; o < l.removedNodes.length; o++) {
          const a = l.removedNodes[o];
          if (et in a)
            return !1;
          a instanceof Element && (s.add(a), It(l.target, a), Ue.set(a, [
            l.previousSibling,
            l.nextSibling
          ]));
        }
    }
    return s;
  }, /* @__PURE__ */ new Set());
}
function It(e, n) {
  !n && !(_e in e) ? Object.defineProperty(e, _e, { value: e }) : n && !(_e in n) && Object.defineProperty(n, _e, { value: e });
}
function Ql(e) {
  var n, t;
  const s = e.isConnected, l = ne.has(e);
  s && Ue.has(e) && Ue.delete(e), ((n = ie.get(e)) === null || n === void 0 ? void 0 : n.playState) !== "finished" && ((t = ie.get(e)) === null || t === void 0 || t.cancel()), ht in e ? yn(e) : l && s ? eo(e) : l && !s ? to(e) : yn(e);
}
function ge(e) {
  return Number(e.replace(/[^0-9.\-]/g, ""));
}
function Zl(e) {
  let n = e.parentElement;
  for (; n; ) {
    if (n.scrollLeft || n.scrollTop)
      return { x: n.scrollLeft, y: n.scrollTop };
    n = n.parentElement;
  }
  return { x: 0, y: 0 };
}
function Le(e) {
  const n = e.getBoundingClientRect(), { x: t, y: s } = Zl(e);
  return {
    top: n.top + s,
    left: n.left + t,
    width: n.width,
    height: n.height
  };
}
function ss(e, n, t) {
  let s = n.width, l = n.height, o = t.width, a = t.height;
  const r = getComputedStyle(e);
  if (r.getPropertyValue("box-sizing") === "content-box") {
    const i = ge(r.paddingTop) + ge(r.paddingBottom) + ge(r.borderTopWidth) + ge(r.borderBottomWidth), d = ge(r.paddingLeft) + ge(r.paddingRight) + ge(r.borderRightWidth) + ge(r.borderLeftWidth);
    s -= d, o -= d, l -= i, a -= i;
  }
  return [s, o, l, a].map(Math.round);
}
function $t(e) {
  return _e in e && Te.has(e[_e]) ? Te.get(e[_e]) : { duration: 250, easing: "ease-in-out" };
}
function ls(e) {
  if (_e in e)
    return e[_e];
}
function en(e) {
  const n = ls(e);
  return n ? Me.has(n) : !1;
}
function ut(e, ...n) {
  n.forEach((t) => t(e, Te.has(e)));
  for (let t = 0; t < e.children.length; t++) {
    const s = e.children.item(t);
    s && n.forEach((l) => l(s, Te.has(s)));
  }
}
function tn(e) {
  return Array.isArray(e) ? e : [e];
}
function tt(e) {
  return typeof e == "function";
}
function eo(e) {
  const n = ne.get(e), t = Le(e);
  if (!en(e))
    return ne.set(e, t);
  if (es(e)) {
    ne.set(e, t), Zt(e);
    return;
  }
  let s;
  if (!n)
    return;
  const l = $t(e);
  if (typeof l != "function") {
    let o = n.left - t.left, a = n.top - t.top;
    const r = n.left + n.width - (t.left + t.width);
    n.top + n.height - (t.top + t.height) == 0 && (a = 0), r == 0 && (o = 0);
    const [i, d, v, y] = ss(e, n, t), b = {
      transform: `translate(${o}px, ${a}px)`
    }, A = {
      transform: "translate(0, 0)"
    };
    i !== d && (b.width = `${i}px`, A.width = `${d}px`), v !== y && (b.height = `${v}px`, A.height = `${y}px`), s = e.animate([b, A], {
      duration: l.duration,
      easing: l.easing
    });
  } else {
    const [o] = tn(l(e, "remain", n, t));
    s = new Animation(o), s.play();
  }
  ie.set(e, s), ne.set(e, t), s.addEventListener("finish", Ee.bind(null, e, !1), {
    once: !0
  });
}
function yn(e) {
  ht in e && delete e[ht];
  const n = Le(e);
  ne.set(e, n);
  const t = $t(e);
  if (!en(e))
    return;
  if (es(e)) {
    Zt(e);
    return;
  }
  let s;
  if (typeof t != "function")
    s = e.animate([
      { transform: "scale(.98)", opacity: 0 },
      { transform: "scale(0.98)", opacity: 0, offset: 0.5 },
      { transform: "scale(1)", opacity: 1 }
    ], {
      duration: t.duration * 1.5,
      easing: "ease-in"
    });
  else {
    const [l] = tn(t(e, "add", n));
    s = new Animation(l), s.play();
  }
  ie.set(e, s), s.addEventListener("finish", Ee.bind(null, e, !1), {
    once: !0
  });
}
function pn(e, n) {
  var t;
  e.remove(), ne.delete(e), Ue.delete(e), ie.delete(e), (t = Ze.get(e)) === null || t === void 0 || t.disconnect(), setTimeout(() => {
    if (et in e && delete e[et], Object.defineProperty(e, ht, { value: !0, configurable: !0 }), n && e instanceof HTMLElement)
      for (const s in n)
        e.style[s] = "";
  }, 0);
}
function to(e) {
  var n;
  if (!Ue.has(e) || !ne.has(e))
    return;
  const [t, s] = Ue.get(e);
  Object.defineProperty(e, et, { value: !0, configurable: !0 });
  const l = window.scrollX, o = window.scrollY;
  if (s && s.parentNode && s.parentNode instanceof Element ? s.parentNode.insertBefore(e, s) : t && t.parentNode ? t.parentNode.appendChild(e) : (n = ls(e)) === null || n === void 0 || n.appendChild(e), !en(e))
    return pn(e);
  const [a, r, c, i] = so(e), d = $t(e), v = ne.get(e);
  (l !== Jt || o !== Qt) && no(e, l, o, d);
  let y, b = {
    position: "absolute",
    top: `${a}px`,
    left: `${r}px`,
    width: `${c}px`,
    height: `${i}px`,
    margin: "0",
    pointerEvents: "none",
    transformOrigin: "center",
    zIndex: "100"
  };
  if (!tt(d))
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
    const [A, C] = tn(d(e, "remove", v));
    C?.styleReset !== !1 && (b = C?.styleReset || b, Object.assign(e.style, b)), y = new Animation(A), y.play();
  }
  ie.set(e, y), y.addEventListener("finish", () => pn(e, b), {
    once: !0
  });
}
function no(e, n, t, s) {
  const l = Jt - n, o = Qt - t, a = document.documentElement.style.scrollBehavior;
  if (getComputedStyle(ae).scrollBehavior === "smooth" && (document.documentElement.style.scrollBehavior = "auto"), window.scrollTo(window.scrollX + l, window.scrollY + o), !e.parentElement)
    return;
  const c = e.parentElement;
  let i = c.clientHeight, d = c.clientWidth;
  const v = performance.now();
  function y() {
    requestAnimationFrame(() => {
      if (!tt(s)) {
        const b = i - c.clientHeight, A = d - c.clientWidth;
        v + s.duration > performance.now() ? (window.scrollTo({
          left: window.scrollX - A,
          top: window.scrollY - b
        }), i = c.clientHeight, d = c.clientWidth, y()) : document.documentElement.style.scrollBehavior = a;
      }
    });
  }
  y();
}
function so(e) {
  var n;
  const t = ne.get(e), [s, , l] = ss(e, t, Le(e));
  let o = e.parentElement;
  for (; o && (getComputedStyle(o).position === "static" || o instanceof HTMLBodyElement); )
    o = o.parentElement;
  o || (o = document.body);
  const a = getComputedStyle(o), r = !ie.has(e) || ((n = ie.get(e)) === null || n === void 0 ? void 0 : n.playState) === "finished" ? Le(o) : ne.get(o), c = Math.round(t.top - r.top) - ge(a.borderTopWidth), i = Math.round(t.left - r.left) - ge(a.borderLeftWidth);
  return [c, i, s, l];
}
function lo(e, n = {}) {
  if (ns && pe && !(window.matchMedia("(prefers-reduced-motion: reduce)").matches && !tt(n) && !n.disrespectUserMotionPreference)) {
    Me.add(e), getComputedStyle(e).position === "static" && Object.assign(e.style, { position: "relative" }), ut(e, Ee, Kl, (a) => pe?.observe(a)), tt(n) ? Te.set(e, n) : Te.set(e, {
      duration: 250,
      easing: "ease-in-out",
      ...n
    });
    const o = new MutationObserver(Zn);
    o.observe(e, { childList: !0 }), Rt.set(e, o), Ht.add(e);
  }
  return Object.freeze({
    parent: e,
    enable: () => {
      Me.add(e);
    },
    disable: () => {
      Me.delete(e), ut(e, (s) => {
        const l = ie.get(s);
        try {
          l?.cancel();
        } catch {
        }
        ie.delete(s);
        const o = $e.get(s);
        o && clearTimeout(o), $e.delete(s);
        const a = Ye.get(s);
        a && clearInterval(a), Ye.delete(s);
      });
    },
    isEnabled: () => Me.has(e),
    destroy: () => {
      Me.delete(e), Ht.delete(e), Te.delete(e);
      const s = Rt.get(e);
      s?.disconnect(), Rt.delete(e), ut(e, (l) => {
        pe?.unobserve(l);
        const o = ie.get(l);
        try {
          o?.cancel();
        } catch {
        }
        ie.delete(l);
        const a = Ze.get(l);
        a?.disconnect(), Ze.delete(l);
        const r = Ye.get(l);
        r && clearInterval(r), Ye.delete(l);
        const c = $e.get(l);
        c && clearTimeout(c), $e.delete(l), ne.delete(l), Ue.delete(l);
      });
    }
  });
}
function oo(e) {
  const n = O();
  let t;
  function s(l) {
    t && (l ? t.enable() : t.disable());
  }
  return Be(() => {
    pt((l) => {
      let o;
      n.value instanceof HTMLElement ? o = n.value : n.value && "$el" in n.value && n.value.$el instanceof HTMLElement && (o = n.value.$el), o && (t = lo(o, e || {}), l(() => {
        var a;
        (a = t?.destroy) === null || a === void 0 || a.call(t), t = void 0;
      }));
    });
  }), bt(() => {
    var l;
    (l = t?.destroy) === null || l === void 0 || l.call(t), t = void 0;
  }), [n, s];
}
const ao = ["id", "aria-controls", "aria-expanded"], ro = ["id", "aria-hidden", "aria-labelledby"], Nt = {
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
  setup(e, { emit: n }) {
    const t = e, s = n, l = w(() => typeof t.animate == "object" ? t.animate : {}), [o, a] = oo(l);
    Be(() => {
      a(!!t.animate);
    }), te(() => t.animate, (A) => {
      a(!!A);
    });
    const r = w(() => t.modelValue !== void 0), c = O(t.startOpen), i = w({
      get() {
        return r.value ? t.modelValue : c.value;
      },
      set(A) {
        r.value ? s("update:modelValue", A) : c.value = A;
      }
    }), d = O(se("ulu-collapsible-trigger")), v = O(se("ulu-collapsible-content"));
    function y() {
      i.value = !i.value;
    }
    function b() {
      t.closeOnEscape && i.value && (i.value = !1);
    }
    return (A, C) => (u(), f("div", {
      ref_key: "container",
      ref: o,
      onKeydown: Wn(b, ["esc"]),
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
          T(S(e.triggerText), 1)
        ])
      ], 10, ao),
      i.value ? (u(), f("div", {
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
      ], 10, ro)) : p("", !0)
    ], 34));
  }
}, Wt = {
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
  setup(e, { emit: n }) {
    const t = e, { resolvedModifiers: s } = fe({ props: t, baseClass: "accordion" }), l = w(() => {
      const o = { ...t.classes };
      return o.container = [o.container, s.value], o;
    });
    return (o, a) => (u(), _(Nt, {
      "model-value": e.modelValue,
      "start-open": e.startOpen,
      "trigger-text": e.triggerText,
      classes: l.value,
      animate: e.animate,
      "onUpdate:modelValue": a[0] || (a[0] = (r) => o.$emit("update:modelValue", r))
    }, {
      trigger: $(({ isOpen: r }) => [
        g(o.$slots, "trigger", { isOpen: r }, () => [
          (u(), _(j(e.triggerTextElement), null, {
            default: $(() => [
              T(S(e.triggerText), 1)
            ]),
            _: 1
          }))
        ]),
        g(o.$slots, "icon", { isOpen: r }, () => [
          h("span", {
            class: m(["accordion__icon", e.classes.icon])
          }, [
            x(q, {
              icon: r ? "type:collapse" : "type:expand",
              style: { display: "inline" }
            }, null, 8, ["icon"])
          ], 2)
        ])
      ]),
      default: $(({ isOpen: r, toggle: c }) => [
        g(o.$slots, "default", {
          isOpen: r,
          toggle: c
        })
      ]),
      _: 3
    }, 8, ["model-value", "start-open", "trigger-text", "classes", "animate"]));
  }
}, io = { class: "accordion-group" }, Zf = {
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
    const n = e, t = O([]);
    te(() => n.items, (l) => {
      t.value = l.map((o) => ({
        ...o,
        isOpen: o.isOpen || !1
      }));
    }, { immediate: !0, deep: !0 });
    function s(l, o) {
      o ? t.value.forEach((a, r) => {
        a.isOpen = r === l;
      }) : t.value[l].isOpen = !1;
    }
    return (l, o) => (u(), f("div", io, [
      (u(!0), f(U, null, R(t.value, (a, r) => (u(), _(Wt, {
        key: r,
        "model-value": a.isOpen,
        "onUpdate:modelValue": (c) => s(r, c),
        "trigger-text": a.title,
        classes: a.classes
      }, {
        default: $(() => [
          g(l.$slots, "item", {
            item: a,
            index: r
          }, () => [
            T(S(a.content), 1)
          ])
        ]),
        _: 2
      }, 1032, ["model-value", "onUpdate:modelValue", "trigger-text", "classes"]))), 128))
    ]));
  }
}, os = {
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
    const n = e, { resolvedModifiers: t } = fe({ props: n, baseClass: "tag" });
    return (s, l) => (u(), f("span", {
      class: m(["tag", [
        {
          "tag--counter": e.counter,
          [`tag--${e.size}`]: e.size,
          [`tag--${e.type}`]: e.type
        },
        k(t)
      ]])
    }, [
      e.icon ? (u(), _(q, {
        key: 0,
        icon: e.icon,
        spaced: ""
      }, null, 8, ["icon"])) : p("", !0),
      g(s.$slots, "default", {}, () => [
        h("span", null, S(e.text), 1)
      ])
    ], 2));
  }
}, co = {
  name: "UluMenu",
  components: {
    UluIcon: q,
    UluTag: os
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
    handleItemClick(e, n) {
      n.click && n.click(e), this.$emit("item-click", { item: n, event: e });
    }
  }
};
function uo(e, n, t, s, l, o) {
  const a = Z("UluIcon"), r = Z("UluTag"), c = Z("UluMenu", !0), i = Nn("ulu-tooltip");
  return t.items?.length ? (u(), f("ul", {
    key: 0,
    class: m(t.classes.list)
  }, [
    (u(!0), f(U, null, R(t.items, (d, v) => (u(), f("li", {
      key: v,
      class: m([
        t.classes.item,
        d?.classes?.item,
        d.separatorBefore ? t.classes.itemSeparatorBefore : "",
        d.separatorAfter ? t.classes.itemSeparatorAfter : ""
      ])
    }, [
      ze((u(), _(j(d.to || d.path ? "router-link" : d.click ? "button" : "a"), le({ ref_for: !0 }, {
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
        default: $(() => [
          g(e.$slots, "default", {
            item: d,
            index: v
          }, () => [
            d.icon ? (u(), _(a, {
              key: 0,
              icon: d.icon,
              class: m([t.classes.linkIcon, d?.classes?.linkIcon])
            }, null, 8, ["icon", "class"])) : p("", !0),
            h("span", {
              class: m([t.classes.linkText, d?.classes?.linkText])
            }, S(d.title), 3),
            d.tag ? (u(), _(r, le({
              key: 1,
              ref_for: !0
            }, d.tag), null, 16)) : p("", !0)
          ])
        ]),
        _: 2
      }, 1040, ["onClick", "class", "aria-label", "id"])), [
        [i, t.iconOnly ? d.title : d.tooltip || null]
      ]),
      !t.noChildren && d?.children?.length ? (u(), _(c, {
        key: 0,
        iconOnly: t.iconOnly,
        classes: t.classes,
        items: d.children
      }, null, 8, ["iconOnly", "classes", "items"])) : p("", !0)
    ], 2))), 128))
  ], 2)) : p("", !0);
}
const as = /* @__PURE__ */ L(co, [["render", uo]]), fo = {
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
    const n = e, t = w(() => ({
      hanging: n.hanging,
      compact: n.compact
    })), { resolvedModifiers: s } = fe({
      props: n,
      internal: t,
      baseClass: "menu-stack"
    });
    return (l, o) => (u(), _(j(e.containerElement), {
      class: m(["menu-stack", k(s)])
    }, {
      default: $(() => [
        x(as, {
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
}, eh = {
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
    return (n, t) => (u(), _(wt, { classes: e.popoverClasses }, {
      trigger: $(({ isOpen: s }) => [
        g(n.$slots, "trigger", { isOpen: s }, () => [
          h("span", null, S(e.triggerText), 1),
          x(q, {
            class: "button__icon",
            icon: "type:dropdownExpand",
            style: G({ transform: s ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.2s" })
          }, null, 8, ["style"])
        ])
      ]),
      default: $(() => [
        x(fo, { items: e.items }, null, 8, ["items"])
      ]),
      _: 3
    }, 8, ["classes"]));
  }
}, nn = O(!1), mt = {
  start: [],
  end: []
};
function sn() {
  window.removeEventListener("resize", sn), nn.value = !0, mt.start.forEach((e) => e());
}
function ho() {
  nn.value = !1, mt.end.forEach((e) => e()), window.addEventListener("resize", sn);
}
window.addEventListener("resize", sn), window.addEventListener("resize", Kt(ho, 300));
function bn(e, n) {
  return e.push(n), () => {
    const t = e.findIndex((s) => s === n);
    t > -1 && e.splice(t);
  };
}
function mo() {
  return {
    resizing: nn,
    onResizeStart(e) {
      return bn(mt.start, e);
    },
    onResizeEnd(e) {
      return bn(mt.end, e);
    }
  };
}
function th(e, n) {
  const t = Xn(), s = el(), l = w(() => {
    const i = parseInt(t.query.page || "1", 10);
    return isNaN(i) || i < 1 ? 1 : i;
  }), o = w(() => !e.value || e.value.length === 0 ? 1 : Math.ceil(e.value.length / n));
  te(o, (i) => {
    l.value > i && s.push({ query: { ...t.query, page: i } });
  });
  const a = w(() => {
    const i = (l.value - 1) * n, d = i + n;
    return e.value.slice(i, d);
  }), r = w(() => {
    if (o.value <= 1)
      return null;
    const i = {
      pages: {}
    }, d = l.value, v = o.value, y = 5, b = (B) => ({ query: { ...t.query, page: B } });
    d > 1 && (i.first = { href: b(1) }, i.previous = { href: b(d - 1) }), d < v && (i.next = { href: b(d + 1) }, i.last = { href: b(v) });
    let A, C;
    if (v <= y)
      A = 1, C = v;
    else {
      const B = Math.floor(y / 2), H = Math.ceil(y / 2) - 1;
      d <= B ? (A = 1, C = y) : d + H >= v ? (A = v - y + 1, C = v) : (A = d - B, C = d + H);
    }
    for (let B = A; B <= C; B++)
      i.pages[B] = { href: b(B) };
    return i;
  }), c = w(() => {
    const i = { previous: !1, next: !1 };
    if (!r.value || !r.value.pages) return i;
    const d = Object.keys(r.value.pages).map(Number);
    if (d.length === 0) return i;
    const v = Math.min(...d), y = Math.max(...d);
    return v > 1 && (i.previous = !0), y < o.value && (i.next = !0), i;
  });
  return {
    currentPage: l,
    totalPages: o,
    paginatedItems: a,
    pagerItems: r,
    pagerEllipses: c
  };
}
function Dt(e, n, t) {
  typeof e === "function" && (!t || t !== "titleTemplate" && !(t[0] === "o" && t[1] === "n")) && (e = e());
  let l;
  if (n && (l = n(t, e)), Array.isArray(l))
    return l.map((o) => Dt(o, n));
  if (l?.constructor === Object) {
    const o = {};
    for (const a of Object.keys(l))
      o[a] = Dt(l[a], n, a);
    return o;
  }
  return l;
}
const go = (e, n) => Is(n) ? ct(n) : n, vo = "usehead";
function yo() {
  if (js()) {
    const e = Ae(vo);
    if (!e)
      throw new Error("useHead() was called without provide context, ensure you call it through the setup() function.");
    return e;
  }
  throw new Error("useHead() was called without provide context, ensure you call it through the setup() function.");
}
function po(e, n = {}) {
  const t = n.head || yo();
  return t.ssr ? t.push(e || {}, n) : bo(t, e, n);
}
function bo(e, n, t = {}) {
  const s = O(!1);
  let l;
  return pt(() => {
    const a = s.value ? {} : Dt(n, go);
    l ? l.patch(a) : l = e.push(a, t);
  }), Ms() && (bt(() => {
    l.dispose();
  }), Fs(() => {
    s.value = !0;
  }), Ps(() => {
    s.value = !1;
  })), l;
}
function Ct(e, n) {
  let s = (e?.meta || {}).title;
  return typeof s == "function" && (s = s(n || e)), s;
}
function _o(e, n) {
  const s = Object.assign({}, {
    qualifier(a, r) {
      return r ? on(a) : rs(a);
    },
    sort: rn,
    item: {},
    includeChildren: !1
  }, n), l = (a, r) => r ? `${r}/${a.path}` : a.path, o = (a, r = null) => a.filter((c) => s.qualifier(c, r)).map((c) => {
    const i = c.children ? ln(c.children) : c, d = c.children ? c.children.filter((y) => y.path !== "") : !1, v = Tt(i, l(c, r), s.item);
    return s.includeChildren && d.length && (v.children = o(d, v.path)), v;
  }).sort(s.sort);
  return o(e);
}
function wo(e) {
  function n(t) {
    const s = [];
    for (const l of t) {
      const o = { ...l };
      delete o.children, s.push(o), l.children && s.push(...n(l.children));
    }
    return s;
  }
  return n(e);
}
function So(e, n, t) {
  const l = Object.assign({}, {
    includeIndex: !1,
    item: {},
    sort: rn
  }, t), o = e.find((i) => i.path !== "/" && n.includes(i.path)), a = (i, d, v) => {
    if (i.children) {
      const y = i.children.find((b) => b.path.includes(n));
      if (y)
        return a(y, i, v + y.path);
    }
    return { route: d, path: v };
  }, { route: r, path: c } = a(o, o, o.path);
  return r.children ? r.children.filter(cs(l.includeIndex)).map((i) => Tt(i, `${c}/${i.path}`, l.item)).sort(l.sort) : (console.warn("Unable to build menu for:", n), []);
}
function ln(e) {
  return e.find((n) => n.path === "");
}
function Tt(e, n = e.path, t) {
  const l = Object.assign({}, {
    indexMeta: !0,
    modify: null
  }, t);
  let o = Object.assign({}, e.meta);
  l.indexMeta && e.children && (o = Object.assign({}, o, ln(e.children)?.meta));
  const a = { ...e, meta: o }, r = {
    path: n,
    title: Ct(a, e) || "Missing Title",
    weight: o?.weight || 0,
    meta: o
  };
  return l.modify && l.modify(r, e), r;
}
function on(e) {
  return !e.path.includes("/:");
}
function rs(e) {
  const n = e.path.match(/\//g) || [];
  return on(e) && n.length === 1;
}
function ko(e, n) {
  const { target: t } = n, s = t.closest("a");
  if (s) {
    let l = s.getAttribute("href");
    l.startsWith("/") && (e.push(l), n.preventDefault());
  }
}
function is(e, n = an(e)) {
  return n?.children;
}
function an(e, n) {
  const t = e.matched.length, s = t - 2;
  return n ? t > 1 ? e.matched[0] : null : s < 0 ? null : e.matched[s];
}
function cs(e) {
  return (n) => e || n.path !== "";
}
function rn(e, n) {
  return e?.weight - n?.weight;
}
function $o(e, n) {
  const s = Object.assign({}, {
    parent: null,
    includeIndex: !1,
    item: {},
    sort: rn
  }, n), l = s.parent || an(e);
  return (is(e, l) || []).filter(cs(s.includeIndex)).map((a) => Tt(a, `${l.path}/${a.path}`, s.item)).sort(s.sort);
}
function Co(e) {
  const { matched: n, path: t } = e;
  let s;
  return n.reduce((o, a, r) => {
    if (a.meta?.breadcrumb === !1 || a.path === s)
      return o;
    const c = r === n.length - 1, i = Ct(a, e) || "Missing Title";
    return o.push({
      title: i,
      to: { path: c ? t : a.path },
      current: c
    }), s = a.path, o;
  }, []);
}
const To = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  $createBreadcrumb: Co,
  $createSectionMenu: $o,
  $getParentRoute: an,
  $getRouteChildren: is,
  createBaseMenu: _o,
  createMenuItem: Tt,
  createSectionMenu: So,
  flattenMenu: wo,
  getChildIndexRoute: ln,
  getRouteTitle: Ct,
  isStaticBaseRoute: rs,
  isStaticRoute: on,
  nativeLinkRouter: ko
}, Symbol.toStringTag, { value: "Module" })), jt = lt({});
function nh(e = {}) {
  const {
    title: n,
    titleTemplate: t = "%s",
    useRoute: s = Xn,
    useHead: l = po
  } = e, o = s(), a = o.path;
  if (n !== void 0) {
    pt(() => {
      jt[a] = k(n);
    }), _t(() => {
      delete jt[a];
    });
    return;
  }
  const r = w(() => {
    const c = jt[o.path], i = Ct(o, o), d = c || i;
    return d ? t.replace("%s", d) : "App";
  });
  l({
    title: r
  });
}
const Ao = { class: "layout-flex-baseline" }, Oo = { class: "type-word-break" }, sh = {
  __name: "UluOverflowPopover",
  props: {
    /**
     * Default icon for overflow popover trigger
     */
    triggerIcon: String
  },
  setup(e) {
    const { resizing: n, onResizeEnd: t } = mo(), s = O(null), l = O(!1), o = () => {
      Ke(() => {
        const r = s.value;
        l.value = r.offsetWidth < r.scrollWidth;
      });
    }, a = t(o);
    return Be(o), _t(a), (r, c) => (u(), f("div", Ao, [
      h("div", {
        class: "type-truncate",
        ref_key: "text",
        ref: s
      }, [
        g(r.$slots, "default")
      ], 512),
      l.value && !k(n) ? (u(), _(wt, {
        key: 0,
        triggerAlt: "Show Full Text",
        size: "large"
      }, {
        trigger: $(() => [
          x(q, {
            icon: e.triggerIcon || "type:ellipsis"
          }, null, 8, ["icon"])
        ]),
        default: $(() => [
          h("div", Oo, [
            g(r.$slots, "default")
          ])
        ]),
        _: 3
      })) : p("", !0)
    ]));
  }
}, lh = {
  __name: "UluTab",
  setup(e) {
    return (n, t) => (u(), _(k(tl), null, {
      default: $((s) => [
        g(n.$slots, "default", de(ve(s)))
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
    return (n, t) => (u(), _(k(nl), {
      defaultIndex: e.defaultIndex,
      vertical: e.vertical
    }, {
      default: $((s) => [
        h("div", {
          class: m(["tabs", {
            "tabs--vertical": e.vertical
          }])
        }, [
          g(n.$slots, "default", de(ve(s)))
        ], 2)
      ]),
      _: 3
    }, 8, ["defaultIndex", "vertical"]));
  }
}), ah = {
  __name: "UluTabList",
  setup(e) {
    return (n, t) => (u(), _(k(sl), { class: "tabs__tablist" }, {
      default: $(() => [
        g(n.$slots, "default")
      ]),
      _: 3
    }));
  }
}, rh = {
  __name: "UluTabPanel",
  setup(e) {
    return (n, t) => (u(), _(k(ll), null, {
      default: $((s) => [
        g(n.$slots, "default", de(ve(s)))
      ]),
      _: 3
    }));
  }
}, ih = {
  __name: "UluTabPanels",
  setup(e) {
    return (n, t) => (u(), _(k(ol), null, {
      default: $((s) => [
        g(n.$slots, "default", de(ve(s)))
      ]),
      _: 3
    }));
  }
}, Uo = {
  name: "UluButton",
  components: {
    UluIcon: q
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
    const { resolvedModifiers: n } = fe({ props: e, baseClass: "button" });
    return { resolvedModifiers: n };
  },
  computed: {
    resolvedAriaLabel() {
      const e = this.alt || this.iconOnly && this.text;
      return e || null;
    },
    classes() {
      const e = [], { size: n } = this;
      return n && e.push(`button--${n}`), e;
    },
    element() {
      return this.to ? Qe : this.href ? "a" : "button";
    },
    attrs() {
      const { to: e, href: n, download: t, target: s } = this, l = e ? { to: e } : n ? { href: n } : {};
      return n && (s && (l.target = s), t && (l.download = typeof t == "string" ? t : !0)), l;
    }
  }
}, xo = { key: 1 };
function Bo(e, n, t, s, l, o) {
  const a = Z("UluIcon");
  return u(), _(j(o.element), le({
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
      s.resolvedModifiers
    ]]
  }, o.attrs, { "aria-label": o.resolvedAriaLabel }), {
    default: $(() => [
      g(e.$slots, "before"),
      t.icon && (t.iconBefore || t.iconOnly) ? (u(), _(a, {
        key: 0,
        icon: t.icon,
        class: "button__icon"
      }, null, 8, ["icon"])) : p("", !0),
      (e.$slots.default || t.text) && !t.iconOnly ? (u(), f("span", xo, [
        g(e.$slots, "default", {}, () => [
          T(S(t.text), 1)
        ])
      ])) : p("", !0),
      t.icon && !t.iconBefore && !t.iconOnly ? (u(), _(a, {
        key: 2,
        icon: t.icon,
        class: "button__icon"
      }, null, 8, ["icon"])) : p("", !0),
      g(e.$slots, "after")
    ]),
    _: 3
  }, 16, ["class", "aria-label"]);
}
const Eo = /* @__PURE__ */ L(Uo, [["render", Bo]]), Ro = {
  name: "UluAlert",
  components: {
    UluButton: Eo,
    UluIcon: q
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
    const { resolvedModifiers: n } = fe({
      props: e,
      baseClass: "callout",
      internal: w(() => ({
        [e.type]: e.type,
        compact: e.compact
      }))
    });
    return { resolvedModifiers: n };
  }
}, Io = { class: "layout-flex" }, jo = { class: "type-small" }, Mo = {
  key: 0,
  class: "margin-left-auto align-self-center"
};
function Fo(e, n, t, s, l, o) {
  const a = Z("UluIcon");
  return u(), f("div", {
    class: m(["callout", s.resolvedModifiers])
  }, [
    h("div", Io, [
      x(a, {
        class: m(["type-large margin-right-small", `color-${t.type}`]),
        icon: t.icon || `type:${t.type}`
      }, null, 8, ["class", "icon"]),
      h("div", jo, [
        h("div", null, [
          g(e.$slots, "title", {}, () => [
            h("strong", null, S(t.title), 1)
          ])
        ]),
        h("div", null, [
          g(e.$slots, "description", {}, () => [
            T(S(t.description), 1)
          ])
        ])
      ]),
      e.$slots.action ? (u(), f("div", Mo, [
        g(e.$slots, "action")
      ])) : p("", !0)
    ])
  ], 2);
}
const ch = /* @__PURE__ */ L(Ro, [["render", Fo]]), Po = ["aria-hidden"], zo = {
  key: 2,
  class: "hidden-visually"
}, Lo = {
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
    const n = e, t = w(() => !!(n.to || n.click)), s = w(() => {
      const { click: l, to: o, href: a } = n;
      return l ? "button" : o ? Qe : a ? "a" : "span";
    });
    return (l, o) => (u(), _(j(s.value), {
      class: m(["badge", [
        e.size ? `badge--${e.size}` : null,
        e.type ? `badge--${e.type}` : null,
        { "badge--clickable": t.value }
      ]]),
      to: e.to,
      href: e.href,
      onClick: e.click
    }, {
      default: $(() => [
        h("span", {
          class: m(["badge__inner", { "skeleton__background-color": e.skeleton }])
        }, [
          e.text ? (u(), f("span", {
            key: 0,
            "aria-hidden": e.alt ? "true" : null
          }, S(e.text), 9, Po)) : g(l.$slots, "default", { key: 1 }),
          e.alt ? (u(), f("span", zo, S(e.alt), 1)) : p("", !0)
        ], 2)
      ]),
      _: 3
    }, 8, ["class", "to", "href", "onClick"]));
  }
}, Vo = { class: "badge-stack" }, uh = {
  __name: "UluBadgeStack",
  props: {
    /**
     * Array of props for each badge
     */
    items: Array
  },
  setup(e) {
    return (n, t) => (u(), f("ul", Vo, [
      (u(!0), f(U, null, R(e.items, (s, l) => (u(), f("li", {
        class: "badge-stack__item",
        key: l
      }, [
        x(Lo, le({ ref_for: !0 }, s), null, 16)
      ]))), 128))
    ]));
  }
}, Ho = {
  name: "UluButtonVerbose",
  components: {
    UluIcon: q
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
    const { resolvedModifiers: n } = fe({ props: e, baseClass: "button-verbose" });
    return { resolvedModifiers: n };
  },
  computed: {
    element() {
      return this.to ? Qe : this.href ? "a" : "button";
    },
    attrs() {
      const { to: e, href: n, download: t, target: s } = this, l = e ? { to: e } : n ? { href: n } : {};
      return n && (s && (l.target = s), t && (l.download = typeof t == "string" ? t : !0)), l;
    }
  }
}, No = {
  key: 1,
  class: "button-verbose__body"
};
function Wo(e, n, t, s, l, o) {
  const a = Z("UluIcon");
  return u(), _(j(o.element), le({
    class: ["button-verbose", [
      {
        "button-verbose--inline": t.inline,
        "button-verbose--full-width": t.fullWidth
      },
      s.resolvedModifiers
    ]]
  }, o.attrs), {
    default: $(() => [
      e.$slots.title || t.title ? (u(), _(j(t.titleElement), {
        key: 0,
        class: "button-verbose__title"
      }, {
        default: $(() => [
          g(e.$slots, "title", {}, () => [
            T(S(t.title), 1)
          ])
        ]),
        _: 3
      })) : p("", !0),
      e.$slots.default || t.body ? (u(), f("span", No, [
        g(e.$slots, "default", {}, () => [
          T(S(t.body), 1)
        ])
      ])) : p("", !0),
      t.icon ? (u(), _(a, {
        key: 2,
        icon: t.icon,
        class: "button-verbose__icon",
        "aria-hidden": "true"
      }, null, 8, ["icon"])) : p("", !0)
    ]),
    _: 3
  }, 16, ["class"]);
}
const dh = /* @__PURE__ */ L(Ho, [["render", Wo]]), Do = {
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
    const { resolvedModifiers: n } = fe({ props: e, baseClass: "callout" });
    return { resolvedModifiers: n };
  }
};
function qo(e, n, t, s, l, o) {
  return u(), f("div", {
    class: m(["callout", [s.resolvedModifiers, { "full-height": t.fullHeight }]])
  }, [
    g(e.$slots, "default")
  ], 2);
}
const fh = /* @__PURE__ */ L(Do, [["render", qo]]), Xo = { class: "card__body" }, Go = { class: "card__main" }, Yo = ["href", "target"], Ko = {
  key: 0,
  class: "card__aside"
}, Jo = ["src", "alt"], Qo = {
  key: 1,
  class: "card__footer"
}, hh = {
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
  setup(e, { emit: n }) {
    const t = e, s = n, l = Dn();
    t.proxyClick && (t.to || t.href) && console.warn("UluCard: 'proxyClick' is ignored when 'to' or 'href' are present."), (t.titleTo || t.titleHref) && (t.to || t.href) && console.warn("UluCard: 'titleTo'/'titleHref' should not be used with 'to'/'href'.");
    const o = O(null), a = O(null), { resolvedModifiers: r } = fe({ props: t, baseClass: "card" }), c = O(null), i = O(!1), d = w(() => t.proxyClick && !t.to && !t.href), v = w(() => d.value && (t.titleTo || t.titleHref)), y = w(() => d.value && !v.value), b = w(() => d.value || null), A = w(() => ({
      selectorPrevent: "input, select, textarea, button, a, [tabindex='-1']",
      mousedownDurationPrevent: 250,
      ...t.proxyClickOptions
    })), C = w(() => d.value ? "pointer" : null), B = w(() => t.to ? Qe : t.href ? "a" : t.cardElement);
    function H({ target: I, timeStamp: F }) {
      if (!b.value) return;
      const { selectorPrevent: Y } = A.value;
      i.value = !1, I.closest(Y) || (i.value = !0, c.value = F);
    }
    function ee({ timeStamp: I }) {
      if (!b.value || !i.value) return;
      const { mousedownDurationPrevent: F } = A.value;
      if (I - c.value < F) {
        if (v.value)
          a.value?.click();
        else if (y.value) {
          const Y = o.value?.querySelector("[data-ulu-card-proxy-target]");
          Y ? Y.click() : s("proxy-click");
        }
      }
      i.value = !1;
    }
    return (I, F) => (u(), _(j(B.value), {
      ref_key: "cardRoot",
      ref: o,
      class: m(["card", [
        {
          "card--horizontal": e.horizontal || e.horizontalCenter,
          "card--horizontal-center": e.horizontalCenter,
          "card--overlay": e.overlay
        },
        k(r)
      ]]),
      onMousedown: H,
      onMouseup: ee,
      style: G({ cursor: C.value }),
      target: e.target,
      to: e.to,
      href: e.href,
      "data-ulu-proxy-click-init": b.value
    }, {
      default: $(() => [
        h("div", Xo, [
          h("div", Go, [
            e.title || k(l).title ? (u(), _(j(e.titleElement), {
              key: 0,
              class: m(["card__title", e.classes.title])
            }, {
              default: $(() => [
                e.titleTo ? (u(), _(k(Qe), {
                  key: 0,
                  class: "card__title-link",
                  to: e.titleTo,
                  ref_key: "link",
                  ref: a
                }, {
                  default: $(() => [
                    g(I.$slots, "title", {}, () => [
                      T(S(e.title), 1)
                    ])
                  ]),
                  _: 3
                }, 8, ["to"])) : e.titleHref ? (u(), f("a", {
                  key: 1,
                  class: "card__title-link",
                  href: e.titleHref,
                  target: e.titleTarget,
                  ref_key: "link",
                  ref: a
                }, [
                  g(I.$slots, "title", {}, () => [
                    T(S(e.title), 1)
                  ])
                ], 8, Yo)) : g(I.$slots, "title", { key: 2 }, () => [
                  T(S(e.title), 1)
                ])
              ]),
              _: 3
            }, 8, ["class"])) : p("", !0),
            g(I.$slots, "body")
          ]),
          k(l).aside ? (u(), f("div", Ko, [
            g(I.$slots, "aside")
          ])) : p("", !0)
        ]),
        k(l).image || e.imageSrc ? (u(), f("div", {
          key: 0,
          class: m(["card__image", [
            { "card__image--icon": e.imageIcon },
            e.classes.image
          ]])
        }, [
          g(I.$slots, "image", {}, () => [
            h("img", {
              src: e.imageSrc,
              alt: e.imageAlt
            }, null, 8, Jo)
          ])
        ], 2)) : p("", !0),
        k(l).footer ? (u(), f("div", Qo, [
          g(I.$slots, "footer")
        ])) : p("", !0)
      ]),
      _: 3
    }, 40, ["class", "style", "target", "to", "href", "data-ulu-proxy-click-init"]));
  }
}, mh = {
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
    const n = e, t = w(() => ({
      inline: n.inline,
      "inline-all": n.inlineAll,
      table: n.table,
      separated: n.separated,
      "separated-first": n.separatedFirst,
      "separated-last": n.separatedLast,
      compact: n.compact
    })), { resolvedModifiers: s } = fe({
      props: n,
      internal: t,
      baseClass: "definition-list"
    });
    return (l, o) => (u(), f("dl", {
      class: m(["definition-list", [k(s), e.classes.list]])
    }, [
      (u(!0), f(U, null, R(e.items, (a, r) => (u(), f("div", {
        key: r,
        class: m(e.classes.item)
      }, [
        h("dt", {
          class: m(e.classes.term)
        }, [
          g(l.$slots, "term", {
            item: a,
            index: r
          }, () => [
            T(S(a.term), 1)
          ])
        ], 2),
        h("dd", {
          class: m(e.classes.description)
        }, [
          g(l.$slots, "description", {
            item: a,
            index: r
          }, () => [
            T(S(a.description), 1)
          ])
        ], 2)
      ], 2))), 128))
    ], 2));
  }
}, Zo = ["href", "target"], ea = { class: "external-link__text" }, gh = {
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
    return (n, t) => (u(), f("a", {
      class: "external-link",
      href: e.href,
      target: e.target
    }, [
      h("span", ea, [
        g(n.$slots, "default", {}, () => [
          T(S(e.text), 1)
        ])
      ]),
      x(q, {
        class: "external-link__icon margin-left-small-x display-inline",
        icon: e.icon || "type:externalLink"
      }, null, 8, ["icon"])
    ], 8, Zo));
  }
}, vh = {
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
    const n = e, t = w(() => n.ordered || n.forceOrdered), s = w(() => t.value ? "ol" : "ul");
    return (l, o) => (u(), _(j(s.value), {
      class: m([
        {
          "list-ordered": e.ordered,
          "list-unordered": e.unordered,
          "list-lines": e.lines,
          "list-compact": e.compact
        },
        e.classes.list
      ]),
      style: G({
        listStyleType: e.listStyleType
      }),
      reversed: t.value ? e.reversed : null,
      start: e.start
    }, {
      default: $(() => [
        (u(!0), f(U, null, R(e.items, (a, r) => (u(), f("li", {
          key: r,
          class: m(e.classes.listItem)
        }, [
          g(l.$slots, "default", {
            item: a,
            index: r
          }, () => [
            T(S(a), 1)
          ])
        ], 2))), 128))
      ]),
      _: 3
    }, 8, ["class", "style", "reversed", "start"]));
  }
}, ta = {}, na = { id: "main-content" };
function sa(e, n) {
  return u(), f("main", na, [
    g(e.$slots, "default")
  ]);
}
const yh = /* @__PURE__ */ L(ta, [["render", sa]]), ph = {
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
    const n = e, t = w(() => ({
      short: n.short,
      light: n.light,
      large: n.large,
      [`margin-${n.margin}`]: n.margin
    })), { resolvedModifiers: s } = fe({
      props: n,
      baseClass: "rule",
      internal: t
    });
    return (l, o) => e.semantic ? (u(), f("hr", {
      key: 0,
      class: m(["rule", k(s)])
    }, null, 2)) : (u(), f("div", {
      key: 1,
      class: m(["rule", k(s)])
    }, null, 2));
  }
}, la = { class: "spoke-spinner__spinner" }, bh = {
  __name: "UluSpokeSpinner",
  props: {
    /**
     * Type modifier for spinner (ie match scss style name)
     */
    type: String
  },
  setup(e) {
    return (n, t) => (u(), f("div", {
      class: m(["spoke-spinner", { [`spoke-spinner--${e.type}`]: e.type }])
    }, [
      h("div", la, [
        (u(), f(U, null, R(12, (s) => h("div", { key: s })), 64))
      ])
    ], 2));
  }
}, oa = ["role", "aria-labelledby"], aa = ["id"], ra = { class: "menu-stack__list" }, ia = { class: "menu-stack__selectable" }, ca = ["type", "id", "name", "value", "checked", "onChange"], ua = ["for"], us = {
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
  setup(e, { emit: n }) {
    const t = e, s = n, l = w(() => t.legend ? t.legend.toLowerCase().replace(/\s+/g, "-") : `menu-${Math.random().toString(36).substring(7)}`), o = w(() => l.value ? `${l.value}-legend` : null), a = w(() => t.type === "radio" ? "radiogroup" : "group"), r = (d) => `${l.value}-${d.uid}`, c = (d) => t.type === "radio" ? t.modelValue === d.uid : Array.isArray(t.modelValue) ? t.modelValue.includes(d.uid) : t.type === "checkbox" && d.checked || !1, i = (d, v) => {
      if (t.type === "radio")
        s("update:modelValue", d.uid);
      else if (Array.isArray(t.modelValue)) {
        const y = [...t.modelValue], b = y.indexOf(d.uid);
        b > -1 ? y.splice(b, 1) : y.push(d.uid), s("update:modelValue", y);
      } else
        d.checked = v.target.checked;
    };
    return (d, v) => (u(), f("div", {
      class: m(["menu-stack form-theme", {
        "menu-stack--hide-inputs": e.hideInputs,
        "menu-stack--compact": e.compact
      }]),
      role: a.value,
      "aria-labelledby": o.value
    }, [
      e.legend ? (u(), f("div", {
        key: 0,
        id: o.value,
        class: "hidden-visually"
      }, S(e.legend), 9, aa)) : p("", !0),
      h("ul", ra, [
        (u(!0), f(U, null, R(e.options, (y) => (u(), f("li", {
          class: "menu-stack__item",
          key: y.uid
        }, [
          h("div", ia, [
            h("input", {
              type: e.type,
              id: r(y),
              name: l.value,
              value: y.uid,
              checked: c(y),
              onChange: (b) => i(y, b)
            }, null, 40, ca),
            h("label", {
              for: r(y)
            }, [
              g(d.$slots, "default", { option: y }, () => [
                T(S(y?.label || y?.title || y?.text), 1)
              ])
            ], 8, ua)
          ])
        ]))), 128))
      ])
    ], 10, oa));
  }
}, da = ["href", "download"], fa = { class: "margin-left-small-x" }, _h = {
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
    const n = e, t = w(() => typeof window > "u" ? "" : window.URL.createObjectURL(n.file)), s = w(() => {
      const { size: l } = n.file, o = l / 1e6, a = l / 1e3, r = (c) => parseFloat(c.toFixed(2));
      return o > 1 ? `${r(o)}Mb` : a > 1 ? `${r(a)}Kb` : `${r(l)}B`;
    });
    return (l, o) => (u(), f("a", {
      class: "layout-flex-baseline",
      href: t.value,
      download: e.file.name
    }, [
      g(l.$slots, "default", {
        fileName: e.file.name,
        fileSize: s.value
      }, () => [
        x(q, {
          class: "ui-icon",
          icon: e.icon
        }, null, 8, ["icon"]),
        h("span", fa, [
          T(S(e.file.name) + " ", 1),
          e.noFileSize ? p("", !0) : (u(), _(os, {
            key: 0,
            text: s.value,
            small: "",
            outline: ""
          }, null, 8, ["text"]))
        ])
      ])
    ], 8, da));
  }
}, ha = { class: "form-theme__required-char" }, Ne = {
  __name: "UluFormRequiredChar",
  setup(e) {
    return (n, t) => (u(), f("span", ha, "*"));
  }
}, ma = ["for"], ga = ["multiple", "id", "required"], wh = {
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
  setup(e, { emit: n }) {
    const t = n, s = se(), l = (o) => {
      t("file-change", o.target.files);
    };
    return (o, a) => (u(), f(U, null, [
      h("label", {
        class: m({ "hidden-visually": e.labelHidden }),
        for: k(s)
      }, [
        g(o.$slots, "label", {}, () => [
          T(S(e.label), 1),
          e.required ? (u(), _(Ne, { key: 0 })) : p("", !0)
        ])
      ], 10, ma),
      h("input", le({
        type: "file",
        onChange: l,
        multiple: e.multiple,
        id: k(s)
      }, e.inputAttrs, { required: e.required }), null, 16, ga)
    ], 64));
  }
}, Sh = {
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
    return (n, t) => (u(), f("p", {
      class: m(["form-theme__description", {
        "form-theme__error": e.error,
        "form-theme__warning": e.warning
      }])
    }, [
      e.error || e.warning ? (u(), _(q, {
        key: 0,
        icon: `type:${e.error ? "error" : "warning"}`
      }, null, 8, ["icon"])) : p("", !0),
      g(n.$slots, "default")
    ], 2));
  }
}, va = ["for"], ya = ["id", "value", "required"], pa = ["value"], kh = {
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
    const n = se();
    return (t, s) => (u(), f(U, null, [
      h("label", {
        class: m({ "hidden-visually": e.labelHidden }),
        for: k(n)
      }, [
        g(t.$slots, "label", {}, () => [
          T(S(e.label), 1),
          e.required ? (u(), _(Ne, { key: 0 })) : p("", !0)
        ])
      ], 10, va),
      h("select", {
        id: k(n),
        value: e.modelValue,
        onInput: s[0] || (s[0] = (l) => t.$emit("update:modelValue", l.target.value)),
        required: e.required
      }, [
        s[1] || (s[1] = h("option", {
          disabled: "",
          value: ""
        }, "Please select one", -1)),
        (u(!0), f(U, null, R(e.options, (l, o) => (u(), f("option", {
          key: o,
          value: l.value
        }, S(l.text), 9, pa))), 128))
      ], 40, ya)
    ], 64));
  }
}, ba = ["for"], _a = ["value", "id", "required"], $h = {
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
    const n = se();
    return (t, s) => (u(), f(U, null, [
      h("label", {
        class: m({ "hidden-visually": e.labelHidden }),
        for: k(n)
      }, [
        g(t.$slots, "label", {}, () => [
          T(S(e.label), 1),
          e.required ? (u(), _(Ne, { key: 0 })) : p("", !0)
        ])
      ], 10, ba),
      h("input", {
        type: "text",
        value: e.modelValue,
        onInput: s[0] || (s[0] = (l) => t.$emit("update:modelValue", l.target.value)),
        id: k(n),
        required: e.required
      }, null, 40, _a)
    ], 64));
  }
}, wa = { class: "form-theme search-form type-small" }, Sa = { class: "search-form__field" }, ka = ["placeholder"], $a = {
  class: "search-form__submit button button--primary",
  "aria-label": "Submit Search"
}, Ch = {
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
    return (n, t) => (u(), f("div", wa, [
      h("div", Sa, [
        t[0] || (t[0] = h("label", { class: "hidden-visually" }, "Search", -1)),
        h("input", {
          class: "search-form__input",
          type: "text",
          id: "example-input",
          placeholder: e.placeholder
        }, null, 8, ka)
      ]),
      h("button", $a, [
        x(q, { icon: "type:search" })
      ])
    ]));
  }
}, Th = {
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
    return (n, t) => (u(), _(j(e.element), {
      class: m(["form-theme", [{
        "form-theme--full-width": e.fullWidth,
        "form-theme--full-width-select": e.fullWidthSelect,
        "form-theme--hide-labels": e.hideLabels,
        "form-theme--actions-right": e.actionsRight
      }]])
    }, {
      default: $(() => [
        g(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}, Ca = { class: "form-theme__actions" }, Ah = {
  __name: "UluFormActions",
  setup(e) {
    return (n, t) => (u(), f("div", Ca, [
      g(n.$slots, "default")
    ]));
  }
}, Ta = ["id", "checked", "required"], Aa = ["for"], Oh = {
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
    const n = se();
    return (t, s) => (u(), f(U, null, [
      h("input", {
        type: "checkbox",
        id: k(n),
        checked: e.modelValue,
        onChange: s[0] || (s[0] = (l) => t.$emit("update:modelValue", l.target.checked)),
        required: e.required
      }, null, 40, Ta),
      h("label", { for: k(n) }, [
        g(t.$slots, "default", {}, () => [
          T(S(e.label), 1),
          e.required ? (u(), _(Ne, { key: 0 })) : p("", !0)
        ])
      ], 8, Aa)
    ], 64));
  }
}, Oa = { class: "form-theme__fieldset" }, Ua = { key: 0 }, Uh = {
  __name: "UluFormFieldset",
  props: {
    /**
     * The legend for the fieldset.
     */
    legend: String
  },
  setup(e) {
    return (n, t) => (u(), f("fieldset", Oa, [
      e.legend ? (u(), f("legend", Ua, S(e.legend), 1)) : p("", !0),
      g(n.$slots, "default")
    ]));
  }
}, xh = {
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
    return (n, t) => (u(), f("div", {
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
      g(n.$slots, "default")
    ], 2));
  }
}, xa = { class: "form-theme__items-inline" }, Bh = {
  __name: "UluFormItemsInline",
  setup(e) {
    return (n, t) => (u(), f("div", xa, [
      g(n.$slots, "default")
    ]));
  }
}, Ba = ["id", "name", "value", "checked", "required"], Ea = ["for"], Eh = {
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
    const n = se();
    return (t, s) => (u(), f(U, null, [
      h("input", {
        type: "radio",
        id: k(n),
        name: e.name,
        value: e.value,
        checked: e.modelValue === e.value,
        onChange: s[0] || (s[0] = (l) => t.$emit("update:modelValue", e.value)),
        required: e.required
      }, null, 40, Ba),
      h("label", { for: k(n) }, [
        g(t.$slots, "default", {}, () => [
          T(S(e.label), 1),
          e.required ? (u(), _(Ne, { key: 0 })) : p("", !0)
        ])
      ], 8, Ea)
    ], 64));
  }
}, Ra = ["for"], Ia = ["value", "id", "required"], Rh = {
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
    const n = se();
    return (t, s) => (u(), f(U, null, [
      h("label", {
        class: m({ "hidden-visually": e.labelHidden }),
        for: k(n)
      }, [
        g(t.$slots, "label", {}, () => [
          T(S(e.label), 1),
          e.required ? (u(), _(Ne, { key: 0 })) : p("", !0)
        ])
      ], 10, Ra),
      h("textarea", {
        value: e.modelValue,
        onInput: s[0] || (s[0] = (l) => t.$emit("update:modelValue", l.target.value)),
        id: k(n),
        required: e.required
      }, null, 40, Ia)
    ], 64));
  }
}, Ih = {
  __name: "UluAdaptiveLayout",
  setup(e) {
    const n = Ce("uluIsMobile");
    return (t, s) => !k(n) || !t.$slots.mobile ? g(t.$slots, "default", { key: 0 }) : g(t.$slots, "mobile", { key: 1 });
  }
}, jh = {
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
    const n = e, t = O(null), s = O(null);
    let l = null, o = null;
    return Be(async () => {
      l = () => al(t.value), l(), s.value = !0, o = Kt(l, 200, !1), window.addEventListener("resize", o);
    }), bt(() => {
      o && (window.removeEventListener("resize", o), o = null, l = null);
    }), te(() => n.hidden, (a, r) => {
      r && !a && l && l();
    }), (a, r) => (u(), _(j(e.element), {
      "data-grid-init": s.value,
      ref_key: "rootElement",
      ref: t
    }, {
      default: $(() => [
        g(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["data-grid-init"]));
  }
}, ja = {
  name: "UluTitleRail",
  components: {
    UluIcon: q
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
}, Ma = {
  key: 0,
  class: "rail__item rail__item--pull"
};
function Fa(e, n, t, s, l, o) {
  const a = Z("UluIcon");
  return u(), f("div", {
    class: m(["rail rail--title-rail", {
      "rail--rule": t.rule
    }])
  }, [
    h("div", {
      class: m(["rail__item rail__item--title", t.classes.itemTitle])
    }, [
      (u(), _(j(t.titleElement), {
        class: m(["layout-flex type-max-width-small no-margin", t.classes.title]),
        style: G({ alignItems: t.iconAlign })
      }, {
        default: $(() => [
          t.icon ? (u(), _(a, {
            key: 0,
            class: m(t.classes.icon),
            icon: t.icon
          }, null, 8, ["class", "icon"])) : p("", !0),
          g(e.$slots, "default", {}, () => [
            T(S(t.title), 1)
          ])
        ]),
        _: 3
      }, 8, ["class", "style"]))
    ], 2),
    e.$slots.end ? (u(), f("div", Ma, [
      g(e.$slots, "end")
    ])) : p("", !0)
  ], 2);
}
const Mh = /* @__PURE__ */ L(ja, [["render", Fa]]), Fh = {
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
    const n = e, t = Ce("uluBreakpointManager"), s = O({}), l = O([]), o = O(!1), a = w(() => !o.value || ["max", "min", "only"].filter((d) => n[d]).length === 0 ? !1 : Object.values(s.value).every((d) => d)), r = (i) => {
      const d = (v) => {
        const y = n[v];
        if (y) {
          s.value[v] = !1;
          const b = {
            on: () => {
              s.value[v] = !0;
            },
            off: () => {
              s.value[v] = !1;
            }
          };
          i.at(y)[v](b), l.value.push({ name: y, direction: v, handler: b });
        }
      };
      d("max"), d("min"), d("only"), o.value = !0;
    }, c = () => {
      t && l.value.forEach(({ name: i, direction: d, handler: v }) => {
        t.at(i).remove(v, d);
      }), l.value = [], s.value = {}, o.value = !1;
    };
    return te(t, (i) => {
      i && !o.value && r(i);
    }, { immediate: !0 }), te([() => n.max, () => n.min, () => n.only], () => {
      t && o.value && (c(), r(t));
    }), bt(() => {
      c();
    }), (i, d) => a.value ? g(i.$slots, "default", { key: 0 }) : p("", !0);
  }
}, Pa = {
  name: "UluBreadcrumb",
  components: {
    UluIcon: q
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
function za(e, n, t, s, l, o) {
  const a = Z("router-link"), r = Z("UluIcon");
  return t.items.length ? (u(), f("nav", {
    key: 0,
    class: m(t.classes.nav),
    "aria-label": "Breadcrumb"
  }, [
    h("ol", {
      class: m(t.classes.list)
    }, [
      (u(!0), f(U, null, R(t.items, (c, i) => (u(), f("li", {
        key: i,
        class: m(t.classes.item)
      }, [
        c.current ? (u(), f("span", {
          key: 1,
          class: m(c.current)
        }, [
          g(e.$slots, "default", { item: c }, () => [
            T(S(c.title), 1)
          ])
        ], 2)) : (u(), _(a, {
          key: 0,
          to: c.to,
          class: m(t.classes.link),
          "aria-current": c.current ? "page" : null
        }, {
          default: $(() => [
            g(e.$slots, "default", { item: c }, () => [
              T(S(c.title), 1)
            ])
          ]),
          _: 2
        }, 1032, ["to", "class", "aria-current"])),
        i < t.items.length - 1 ? g(e.$slots, "separator", { key: 2 }, () => [
          x(r, {
            class: m(t.classes.separator),
            icon: t.separatorIcon || "type:pathSeparator"
          }, null, 8, ["class", "icon"])
        ]) : p("", !0)
      ], 2))), 128))
    ], 2)
  ], 2)) : p("", !0);
}
const Ph = /* @__PURE__ */ L(Pa, [["render", za]]), La = {
  name: "UluNavStrip",
  components: {
    UluMenu: as
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
function Va(e, n, t, s, l, o) {
  const a = Z("UluMenu");
  return u(), f("nav", {
    class: m(["nav-strip", {
      "nav-strip--rule": t.rule,
      "nav-strip--center": t.center,
      "nav-strip--right": t.right
    }])
  }, [
    x(a, {
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
const zh = /* @__PURE__ */ L(La, [["render", Va]]), Ha = ["aria-labelledby"], Na = { class: "pager__items js-pager__items" }, Wa = {
  key: 0,
  class: "pager__item pager__item--first"
}, Da = {
  key: 1,
  class: "pager__item pager__item--previous"
}, qa = {
  key: 2,
  class: "pager__item pager__item--ellipsis",
  role: "presentation"
}, Xa = { class: "hidden-visually" }, Ga = {
  key: 3,
  class: "pager__item pager__item--ellipsis",
  role: "presentation"
}, Ya = {
  key: 4,
  class: "pager__item pager__item--next"
}, Ka = {
  key: 5,
  class: "pager__item pager__item--last"
}, Lh = {
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
    const n = e, t = se("ulu-pager");
    function s(l) {
      return n.current == l ? "Current page" : `Go to page ${l}`;
    }
    return (l, o) => {
      const a = Z("router-link");
      return e.items ? (u(), f("nav", {
        key: 0,
        class: "pager",
        role: "navigation",
        "aria-labelledby": k(t)
      }, [
        (u(), _(j(e.titleElement), {
          id: k(t),
          class: "hidden-visually"
        }, {
          default: $(() => [...o[0] || (o[0] = [
            T("Pagination", -1)
          ])]),
          _: 1
        }, 8, ["id"])),
        h("ul", Na, [
          e.items.first ? (u(), f("li", Wa, [
            x(a, le({
              to: e.items.first.href,
              title: "Go to first page"
            }, e.items.first.attributes), {
              default: $(() => [
                o[1] || (o[1] = h("span", { class: "hidden-visually" }, "First page", -1)),
                x(q, {
                  icon: "fas fa-angle-double-left",
                  "aria-hidden": "true"
                })
              ]),
              _: 1
            }, 16, ["to"])
          ])) : p("", !0),
          e.items.previous ? (u(), f("li", Da, [
            x(a, le({
              to: e.items.previous.href,
              title: "Go to previous page",
              rel: "prev"
            }, e.items.previous.attributes), {
              default: $(() => [
                o[2] || (o[2] = h("span", { class: "hidden-visually" }, "Previous page", -1)),
                x(q, {
                  icon: "fas fa-angle-left",
                  "aria-hidden": "true"
                })
              ]),
              _: 1
            }, 16, ["to"])
          ])) : p("", !0),
          e.ellipses.previous ? (u(), f("li", qa, "…")) : p("", !0),
          (u(!0), f(U, null, R(e.items.pages, (r, c) => (u(), f("li", {
            key: c,
            class: m(["pager__item", { "is-active": e.current == c }])
          }, [
            x(a, le({
              to: r.href,
              title: s(c)
            }, { ref_for: !0 }, r.attributes), {
              default: $(() => [
                h("span", Xa, S(e.current == c ? "Current page" : "Page"), 1),
                T(" " + S(c), 1)
              ]),
              _: 2
            }, 1040, ["to", "title"])
          ], 2))), 128)),
          e.ellipses.next ? (u(), f("li", Ga, "…")) : p("", !0),
          e.items.next ? (u(), f("li", Ya, [
            x(a, le({
              to: e.items.next.href,
              title: "Go to next page",
              rel: "next"
            }, e.items.next.attributes), {
              default: $(() => [
                o[3] || (o[3] = h("span", { class: "hidden-visually" }, "Next page", -1)),
                x(q, {
                  icon: "fas fa-angle-right",
                  "aria-hidden": "true"
                })
              ]),
              _: 1
            }, 16, ["to"])
          ])) : p("", !0),
          e.items.last ? (u(), f("li", Ka, [
            x(a, le({
              to: e.items.last.href,
              title: "Go to last page"
            }, e.items.last.attributes), {
              default: $(() => [
                o[4] || (o[4] = h("span", { class: "hidden-visually" }, "Last page", -1)),
                x(q, {
                  icon: "fas fa-angle-double-right",
                  "aria-hidden": "true"
                })
              ]),
              _: 1
            }, 16, ["to"])
          ])) : p("", !0)
        ])
      ], 8, Ha)) : p("", !0);
    };
  }
}, Ja = {}, Qa = {
  class: "site-skip-link hidden-visually-focusable",
  href: "#main-content"
};
function Za(e, n) {
  return u(), f("a", Qa, " Skip to main content ");
}
const Vh = /* @__PURE__ */ L(Ja, [["render", Za]]), er = {
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
function tr(e, n, t, s, l, o) {
  return t.text != null ? (u(), _(j(t.element), { key: 0 }, {
    default: $(() => [
      T(S(t.text), 1)
    ]),
    _: 1
  })) : p("", !0);
}
const Hh = /* @__PURE__ */ L(er, [["render", tr]]), nr = {
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
    return (n, t) => e.unwrapped ? g(n.$slots, "default", { key: 1 }) : (u(), _(j(e.is), { key: 0 }, {
      default: $(() => [
        g(n.$slots, "default")
      ]),
      _: 3
    }));
  }
}, sr = {}, lr = { style: { display: "none" } };
function or(e, n) {
  return u(), f("span", lr);
}
const Nh = /* @__PURE__ */ L(sr, [["render", or]]), ar = {};
function rr(e, n) {
  const t = Z("router-view");
  return u(), _(t);
}
const Wh = /* @__PURE__ */ L(ar, [["render", rr]]), ir = {
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
      const { imageId: e } = this, { width: n, height: t } = this.size;
      return `https://picsum.photos/${e ? `id/${e}/` : ""}${n}/${t}`;
    },
    size() {
      const { random: e, width: n, height: t } = this;
      return e ? {
        width: ft(500, 1e3),
        height: ft(500, 1e3)
      } : { width: n, height: t };
    }
  }
}, cr = ["src", "alt"];
function ur(e, n, t, s, l, o) {
  return u(), f("img", {
    src: o.src,
    alt: t.alt
  }, null, 8, cr);
}
const Dh = /* @__PURE__ */ L(ir, [["render", ur]]), dr = {
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
function fr(e, n, t, s, l, o) {
  return u(!0), f(U, null, R(parseInt(t.amount), (a) => (u(), _(j(t.element), { key: a }, {
    default: $(() => [...n[0] || (n[0] = [
      T(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed semper erat tincidunt tellus vestibulum dictum. Fusce vel augue commodo, egestas diam sed, accumsan leo. Maecenas congue nec nisl et ullamcorper. Maecenas tincidunt, tortor et viverra eleifend, enim leo vestibulum ipsum, quis placerat mi nisi nec ex. Vivamus a justo volutpat, scelerisque elit eget, lacinia ex. Phasellus dapibus sollicitudin tortor, vitae suscipit nunc condimentum ut. Cras suscipit feugiat nibh nec consectetur. Phasellus vitae quam blandit, cursus metus ut, placerat mi. Sed tempor lacus non est interdum imperdiet nec quis metus. Praesent vel eleifend diam. Donec tincidunt eget purus sed posuere. ", -1)
    ])]),
    _: 2
  }, 1024))), 128);
}
const qh = /* @__PURE__ */ L(dr, [["render", fr]]), hr = {
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
    "$route.path"(e, n) {
      if (this.$route.hash)
        return;
      const t = this.validator(e, n, this.$route), s = this.exclude.some((l) => l.endsWith("*") ? e.startsWith(l.slice(0, l.length - 1)) : e === l);
      t && !s && this.$refs.el.focus();
    }
  },
  computed: {
    title() {
      const e = this.getTitle(this.$route);
      return e || console.warn("RouteAnnouncer: No page title!"), e;
    }
  }
};
function mr(e, n, t, s, l, o) {
  return o.title ? (u(), f("p", {
    key: 0,
    tabindex: "-1",
    class: "hidden-visually",
    ref: "el"
  }, S(o.title), 513)) : p("", !0);
}
const Xh = /* @__PURE__ */ L(hr, [["render", mr]]), Gh = {
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
    const n = {
      types: {
        image: ({ value: t }) => zs("img", {
          src: `${t.imageUrl}?max-w=1100&fit=crop`,
          alt: t.imageAlt
        })
      }
    };
    return (t, s) => e.content?.length ? (u(), _(nr, {
      key: 0,
      class: "wysiwyg",
      unwrapped: e.noWrapper
    }, {
      default: $(() => [
        x(k(rl), {
          value: e.content,
          components: n
        }, null, 8, ["value"])
      ]),
      _: 1
    }, 8, ["unwrapped"])) : p("", !0);
  }
}, gr = {
  name: "AnimateNumber",
  props: {
    /**
     * The target number to animate to.
     */
    value: Number
  },
  watch: {
    value() {
      il.to(this, {
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
function vr(e, n, t, s, l, o) {
  return u(), f("span", null, [
    g(e.$slots, "default", { currentValue: l.currentValue }, () => [
      T(S(l.currentValue), 1)
    ])
  ]);
}
const Yh = /* @__PURE__ */ L(gr, [["render", vr]]), yr = {
  key: 0,
  class: "progress-bar__header"
}, pr = {
  key: 1,
  class: "progress-bar__value progress-bar__value--amount"
}, br = {
  key: 2,
  class: "progress-bar__icon"
}, _r = { class: "progress-bar__track" }, wr = {
  key: 1,
  class: "progress-bar__values"
}, Sr = { class: "progress-bar__value progress-bar__value--amount" }, kr = {
  key: 0,
  class: "progress-bar__value progress-bar__value--deficit"
}, $r = { class: "progress-bar__value progress-bar__value--total" }, Kh = {
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
      default: (e, n) => e
    },
    /**
     * Will put the amount only in header (there is a headerValue slot it you want to format)
     */
    amountInHeader: Boolean
  },
  setup(e) {
    const n = e, t = (a, r) => `${r === 0 ? 0 : a / r * 100}%`, s = w(() => n.indeterminate ? null : t(n.amount, n.total)), l = w(() => t(n.deficit, n.total)), o = w(() => ({
      "progress-bar": !0,
      "progress-bar--small": n.small,
      "progress-bar--positive": n.positive,
      "progress-bar--negative": n.negative,
      "progress-bar--loader": n.loader,
      "progress-bar--indeterminate": n.indeterminate,
      "type-small": n.small
      // From original component, seems to control font size
    }));
    return (a, r) => (u(), f("div", {
      class: m(o.value)
    }, [
      e.label || a.$slots.label || a.$slots.icon || e.amountInHeader ? (u(), f("div", yr, [
        e.label ? (u(), _(j(e.labelElement), {
          key: 0,
          class: m(["progress-bar__label", [e.classes.label, { "hidden-visually": e.labelHidden }]])
        }, {
          default: $(() => [
            g(a.$slots, "label", {}, () => [
              T(S(e.label), 1)
            ])
          ]),
          _: 3
        }, 8, ["class"])) : p("", !0),
        e.amountInHeader ? (u(), f("div", pr, [
          r[0] || (r[0] = h("strong", { class: "hidden-visually" }, "Amount:", -1)),
          g(a.$slots, "valueAmount", { value: e.amount }, () => [
            T(S(e.formatValue(e.amount, "amount")), 1)
          ])
        ])) : p("", !0),
        a.$slots.icon ? (u(), f("div", br, [
          g(a.$slots, "icon")
        ])) : p("", !0)
      ])) : p("", !0),
      h("div", _r, [
        h("div", {
          class: "progress-bar__bar",
          style: G({ width: s.value })
        }, null, 4),
        e.deficit > 0 ? (u(), f("div", {
          key: 0,
          class: "progress-bar__bar--deficit",
          style: G({ width: l.value })
        }, null, 4)) : p("", !0)
      ]),
      !e.noValues && !e.amountInHeader && !e.loader && !e.indeterminate ? (u(), f("div", wr, [
        h("div", Sr, [
          r[1] || (r[1] = h("strong", { class: "hidden-visually" }, "Amount:", -1)),
          g(a.$slots, "valueAmount", { value: e.amount }, () => [
            T(S(e.formatValue(e.amount, "amount")), 1)
          ])
        ]),
        e.deficit > 0 ? (u(), f("div", kr, [
          r[2] || (r[2] = h("strong", { class: "hidden-visually" }, "Deficit: ", -1)),
          g(a.$slots, "valueDeficit", { value: e.deficit }, () => [
            T("-" + S(e.formatValue(e.deficit, "deficit")), 1)
          ])
        ])) : p("", !0),
        h("div", $r, [
          r[3] || (r[3] = h("strong", { class: "hidden-visually" }, "Total:", -1)),
          g(a.$slots, "valueTotal", { value: e.total }, () => [
            T(S(e.formatValue(e.total, "total")), 1)
          ])
        ])
      ])) : p("", !0)
    ], 2));
  }
}, Cr = { class: "hidden-visually" }, Tr = { class: "progress-circle__chart" }, Ar = {
  class: "progress-circle__chart-svg",
  viewBox: "0 0 32 32"
}, Or = {
  key: 0,
  class: "progress-circle__chart-value"
}, Ur = {
  key: 0,
  class: "progress-circle__value type-small-x"
}, Jh = {
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
    const n = e, t = O(null), s = (c) => c === 100 ? 101 : c, l = (c = 0) => {
      if (!t.value || !t.value.animate) return;
      const i = { strokeDasharray: [`${c} 100`, o.value] };
      t.value.animate(i, { duration: n.duration, easing: n.easing, fill: "forwards" });
    };
    te(() => n.percentage, (c, i) => {
      c !== i && l(s(i));
    });
    const o = w(() => `${s(n.percentage)} 100`), a = w(() => n.outside || n.outsideBelow || n.small), r = w(() => {
      const c = {
        "progress-circle": !0,
        "progress-circle--small": n.small,
        "progress-circle--pie": n.pieStyle,
        "progress-circle--outside": a.value,
        "progress-circle--outside-below": n.outsideBelow,
        "progress-circle--no-mask": n.noMask
      };
      return n.status && (c[`progress-circle--${n.status}`] = !0), c;
    });
    return Be(() => {
      l();
    }), (c, i) => (u(), f("div", {
      class: m(r.value)
    }, [
      h("strong", Cr, S(e.label), 1),
      h("div", Tr, [
        (u(), f("svg", Ar, [
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
            style: G({ strokeDasharray: o.value })
          }, null, 4),
          i[1] || (i[1] = h("circle", {
            class: "progress-circle__chart-mask",
            cx: "16",
            cy: "16"
          }, null, -1))
        ])),
        !a.value && !e.noValue ? (u(), f("strong", Or, [
          g(c.$slots, "value", { value: e.percentage }, () => [
            T(S(e.formatValue(e.percentage)), 1)
          ])
        ])) : p("", !0)
      ]),
      a.value && !e.noValue ? (u(), f("strong", Ur, [
        g(c.$slots, "value", { value: e.percentage }, () => [
          T(S(e.formatValue(e.percentage)), 1)
        ])
      ])) : p("", !0)
    ], 2));
  }
};
function xr(e) {
  const n = /* @__PURE__ */ new Set();
  for (const t of e)
    for (const s of t)
      n.add(s);
  return n;
}
function gt(e) {
  if (!e || e.length === 0) return /* @__PURE__ */ new Set();
  const n = e.sort((s, l) => s.size - l.size), t = new Set(n[0]);
  for (let s = 1; s < n.length; s++) {
    for (const l of t)
      n[s].has(l) || t.delete(l);
    if (t.size === 0) break;
  }
  return t;
}
function it(e, n, t) {
  if (!e || e.length === 0)
    return t;
  const s = e.map((l) => {
    const o = l.children.map((a) => {
      const r = `${l.uid}:${a.uid}`;
      return n.get(r) || /* @__PURE__ */ new Set();
    });
    return l.match === "all" ? gt(o) : xr(o);
  });
  return gt(s);
}
function Br(e, n) {
  return !n || !Array.isArray(n) ? [] : n.map((t) => {
    const s = /* @__PURE__ */ new Set(), l = t.getValue || ((r) => r[t.uid]);
    e.forEach((r) => {
      const c = l(r);
      Array.isArray(c) ? c.forEach((i) => i && s.add(i)) : c && s.add(c);
    });
    const o = t.getLabel || ((r) => r), a = [...s].map((r) => ({
      uid: r,
      label: o(r),
      selected: !1
    }));
    return a.sort((r, c) => String(r.label).localeCompare(String(c.label))), {
      ...t,
      children: a
    };
  });
}
function Qh(e, n = {}) {
  const {
    initialFacets: t,
    facetFields: s,
    initialSearchValue: l = "",
    initialSortType: o = "az",
    noDefaultSorts: a = !1,
    extraSortTypes: r = {},
    searchOptions: c = {},
    getSortValue: i = (E) => E.title || E.label || "",
    countMode: d = "none",
    // 'none', 'simple', 'intuitive'
    urlSync: v
  } = n, y = (E) => E.sort((M, K) => {
    const P = i(M), z = i(K);
    return P && z ? String(P).localeCompare(String(z)) : P ? -1 : z ? 1 : 0;
  }), b = {
    az: { text: "A-Z", sort: y },
    za: { text: "Z-A", sort: (E) => y(E).reverse() }
  };
  function A(E) {
    return (E || []).map((M) => ({
      ...M,
      open: M.open || !1,
      children: M.children.map((K) => ({
        ...K,
        selected: K.selected || !1
      })),
      selectedCount: 0
    }));
  }
  const C = O([]), B = O(l), H = O(o), ee = w(() => !s || !e.value?.length ? null : Br(e.value, s)), I = w(() => ({
    ...a ? {} : b,
    ...r
  })), F = w(() => {
    const E = /* @__PURE__ */ new Map(), M = J.value;
    if (!M || !s) return E;
    const K = new Map(s.map((P) => {
      const z = P.getValue || ((Q) => Q[P.uid]);
      return [P.uid, z];
    }));
    for (let P = 0; P < M.length; P++) {
      const z = M[P];
      for (const Q of s) {
        const N = K.get(Q.uid)(z), X = Array.isArray(N) ? N : N ? [N] : [];
        for (const ce of X) {
          const ue = `${Q.uid}:${ce}`;
          E.has(ue) || E.set(ue, /* @__PURE__ */ new Set()), E.get(ue).add(P);
        }
      }
    }
    return E;
  }), Y = w(() => ({
    shouldSort: !0,
    keys: ["title", "label", "description", "author"],
    ...c
  })), J = w(() => B.value?.length ? new cl(e.value, Y.value).search(B.value).map((M) => M.item) : e.value), oe = w(() => {
    const E = [];
    return C.value.forEach((M) => {
      const K = M.children.filter((P) => P.selected);
      K.length > 0 && E.push({ ...M, children: K });
    }), E;
  }), re = w(() => {
    if (!oe.value.length)
      return J.value;
    const E = F.value;
    if (E.size === 0 && J.value.length > 0 && s?.length > 0)
      return [];
    const M = new Set(J.value.map((z, Q) => Q)), K = it(oe.value, E, M), P = [];
    for (const z of K)
      P.push(J.value[z]);
    return P;
  }), Se = w(() => {
    const E = I.value[H.value]?.sort;
    return typeof E != "function" ? re.value : E([...re.value]);
  });
  function je() {
    C.value.forEach((E) => {
      E.children && E.children.forEach((M) => M.selected = !1), E.selectedCount = 0;
    });
  }
  function xt({ groupUid: E, facetUid: M, selected: K }) {
    const P = C.value.find((z) => z.uid === E);
    if (P) {
      !P.multiple && K && P.children.forEach((Q) => {
        Q.uid !== M && (Q.selected = !1);
      });
      const z = P.children.find((Q) => Q.uid === M);
      z && (z.selected = K), P.selectedCount = P.children.filter((Q) => Q.selected).length;
    }
  }
  if (te(ee, (E) => {
    const M = A(t || E);
    M.forEach((K) => {
      K.selectedCount = K.children.filter((P) => P.selected).length;
    }), C.value = M;
  }, { immediate: !0 }), te([oe, J], ([E, M], [K, P]) => {
    if (!(d === "none" || !C.value.length) && !(E === K && M === P)) {
      if (d === "simple") {
        const z = F.value;
        if (z.size === 0 && J.value.length > 0 && s?.length > 0)
          return;
        const Q = new Set(J.value.map((D, N) => N));
        C.value.forEach((D) => {
          const N = E.filter((ce) => ce.uid !== D.uid), X = it(N, z, Q);
          D.children.forEach((ce) => {
            const ue = `${D.uid}:${ce.uid}`, he = z.get(ue) || /* @__PURE__ */ new Set(), me = gt([X, he]);
            ce.count = me.size;
          });
        });
      } else if (d === "intuitive") {
        const z = F.value;
        if (z.size === 0 && J.value.length > 0 && s?.length > 0)
          return;
        const Q = new Set(J.value.map((N, X) => X)), D = it(E, z, Q);
        C.value.forEach((N) => {
          N.children.forEach((X) => {
            const ce = `${N.uid}:${X.uid}`, ue = z.get(ce) || /* @__PURE__ */ new Set();
            if (X.selected)
              if (N.multiple) {
                const he = gt([D, ue]);
                X.count = he.size;
              } else
                X.count = D.size;
            else {
              const he = [];
              for (const rt of E)
                he.push({ ...rt, children: [...rt.children] });
              let me = he.find((rt) => rt.uid === N.uid);
              me || (me = { ...N, children: [] }, he.push(me)), N.multiple ? me.children.push(X) : me.children = [X];
              const Us = it(he, z, Q);
              X.count = Us.size;
            }
          });
        });
      }
    }
  }, { deep: !0, immediate: !0 }), v?.router && v?.route) {
    const { router: E, route: M } = v, K = () => C.value && C.value.length > 0, P = () => {
      if (!K()) return;
      const D = { ...M.query };
      delete D.sort, delete D.search, C.value.forEach((N) => delete D[N.uid]), H.value && H.value !== o && (D.sort = H.value), B.value && (D.search = B.value), oe.value.forEach((N) => {
        N.children.length > 0 && (D[N.uid] = N.children.map((X) => X.uid).join(","));
      }), JSON.stringify(D) !== JSON.stringify(M.query) && E.push({ query: D });
    }, z = () => {
      const D = M.query;
      D.sort && (H.value = D.sort), D.search && (B.value = D.search);
      const N = /* @__PURE__ */ new Map();
      C.value.forEach((X) => {
        const ce = D[X.uid] ? D[X.uid].split(",") : [];
        N.set(X.uid, new Set(ce));
      }), C.value.forEach((X) => {
        const ce = N.get(X.uid) || /* @__PURE__ */ new Set();
        X.children.forEach((ue) => {
          const he = ue.selected, me = ce.has(ue.uid);
          he !== me && xt({ groupUid: X.uid, facetUid: ue.uid, selected: me });
        });
      });
    }, Q = Ls(() => {
      C.value && C.value.length > 0 && (z(), Q());
    });
    te([H, B, oe], P, { deep: !0 }), te(() => M.query, z);
  }
  return {
    facets: C,
    searchValue: B,
    selectedSort: H,
    sortTypes: I,
    displayItems: Se,
    selectedFacets: oe,
    clearFilters: je,
    handleFacetChange: xt
  };
}
const Er = ["onClick"], Zh = {
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
  setup(e, { emit: n }) {
    const t = e, s = n, l = w(() => {
      const r = [];
      return t.selectedFacets.forEach((c) => {
        c.children.forEach((i) => {
          r.push({
            ...i,
            groupUid: c.uid
          });
        });
      }), r;
    });
    function o(r) {
      s("facet-change", {
        groupUid: r.groupUid,
        facetUid: r.uid,
        selected: !1
      });
    }
    function a() {
      s("clear-filters");
    }
    return (r, c) => l.value.length ? (u(), f("div", {
      key: 0,
      class: m(["facets-active", e.classes.container])
    }, [
      (u(), _(j(e.labelElement), {
        class: m(["facets-active__label", e.classes.label])
      }, {
        default: $(() => [
          g(r.$slots, "label", {}, () => [
            c[0] || (c[0] = T(" Active Filters: ", -1))
          ])
        ]),
        _: 3
      }, 8, ["class"])),
      h("ul", {
        class: m(["facets-active__list", e.classes.list])
      }, [
        (u(!0), f(U, null, R(l.value, (i) => (u(), f("li", {
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
              c[1] || (c[1] = h("span", { class: "hidden-visually" }, "Remove Active Filter:", -1)),
              T(" " + S(i.label), 1)
            ], 2),
            h("span", {
              class: m(e.classes.filterButtonIcon)
            }, [
              x(q, { icon: e.removeIcon }, null, 8, ["icon"])
            ], 2)
          ], 10, Er)
        ], 2))), 128))
      ], 2),
      h("button", {
        onClick: a,
        class: m(e.classes.clearButton)
      }, "Clear All", 2)
    ], 2)) : p("", !0);
  }
}, Rr = { key: 0 }, vt = {
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
  setup(e, { emit: n }) {
    const t = e, s = n, l = w(() => t.type === "radio" ? [{ label: `All ${t.groupName}s`, uid: "" }, ...t.children] : t.children);
    function o(a) {
      if (t.type === "radio") {
        const r = a;
        t.children.forEach((c) => {
          const i = c.uid === r;
          c.selected !== i && s("facet-change", {
            groupUid: t.groupUid,
            facetUid: c.uid,
            selected: i
          });
        });
      } else {
        const r = new Set(a);
        t.children.forEach((c) => {
          const i = r.has(c.uid);
          c.selected !== i && s("facet-change", {
            groupUid: t.groupUid,
            facetUid: c.uid,
            selected: i
          });
        });
      }
    }
    return (a, r) => (u(), _(us, {
      class: "facets-list",
      legend: e.groupUid,
      type: e.type,
      options: l.value,
      compact: e.compact,
      "model-value": e.modelValue,
      "onUpdate:modelValue": o
    }, {
      default: $(({ option: c }) => [
        T(S(c.label) + " ", 1),
        c.count !== void 0 ? (u(), f("span", Rr, "(" + S(c.count) + ")", 1)) : p("", !0)
      ]),
      _: 1
    }, 8, ["legend", "type", "options", "compact", "model-value"]));
  }
}, Ir = { class: "facets-filters" }, em = {
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
  setup(e, { emit: n }) {
    const t = n, s = (l) => l.multiple ? l.children.filter((o) => o.selected).map((o) => o.uid) : l.children.find((o) => o.selected)?.uid || "";
    return (l, o) => (u(), f("div", Ir, [
      (u(!0), f(U, null, R(e.facets, (a) => (u(), _(Nt, {
        key: a.uid,
        classes: {
          container: ["facets-filters__group", e.classes.group],
          containerOpen: ["facets-filters__group--open", e.classes.groupOpen],
          containerClosed: ["facets-filters__group--closed", e.classes.groupClosed],
          trigger: ["facets-filters__group-trigger", e.classes.groupTrigger],
          content: ["facets-filters__group-content", e.classes.groupContent]
        },
        startOpen: a.open
      }, {
        trigger: $(({ isOpen: r }) => [
          g(l.$slots, "groupTrigger", {
            group: a,
            isOpen: r
          }, () => [
            T(S(a.name), 1)
          ])
        ]),
        default: $(() => [
          x(vt, {
            children: a.children.slice(0, e.maxVisible),
            groupUid: a.uid,
            groupName: a.name,
            type: a.multiple ? "checkbox" : "radio",
            compact: e.compact,
            "model-value": s(a),
            onFacetChange: o[0] || (o[0] = (r) => t("facet-change", r))
          }, null, 8, ["children", "groupUid", "groupName", "type", "compact", "model-value"]),
          a.children.length > e.maxVisible ? (u(), _(Nt, {
            key: 0,
            class: m(["facets-filters__more-facets", e.classes.moreFacets])
          }, {
            trigger: $(({ isOpen: r }) => [
              T(S(r ? "View Less" : "Show More"), 1)
            ]),
            default: $(() => [
              x(vt, {
                children: a.children.slice(e.maxVisible),
                groupUid: a.uid,
                groupName: a.name,
                type: a.multiple ? "checkbox" : "radio",
                compact: e.compact,
                "model-value": s(a),
                onFacetChange: o[1] || (o[1] = (r) => t("facet-change", r))
              }, null, 8, ["children", "groupUid", "groupName", "type", "compact", "model-value"])
            ]),
            _: 2
          }, 1032, ["class"])) : p("", !0)
        ]),
        _: 2
      }, 1032, ["classes", "startOpen"]))), 128))
    ]));
  }
}, jr = { class: "facets-filters" }, tm = {
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
  setup(e, { emit: n }) {
    const t = n, s = (l) => l.multiple ? l.children.filter((o) => o.selected).map((o) => o.uid) : l.children.find((o) => o.selected)?.uid || "";
    return (l, o) => (u(), f("div", jr, [
      (u(!0), f(U, null, R(e.facets, (a) => (u(), _(Wt, {
        key: a.uid,
        modifiers: e.accordionModifiers,
        startOpen: a.open
      }, {
        trigger: $(({ isOpen: r }) => [
          g(l.$slots, "groupTrigger", {
            group: a,
            isOpen: r
          }, () => [
            T(S(a.name), 1)
          ])
        ]),
        default: $(() => [
          x(vt, {
            children: a.children.slice(0, e.maxVisible),
            groupUid: a.uid,
            groupName: a.name,
            type: a.multiple ? "checkbox" : "radio",
            compact: e.compact,
            "model-value": s(a),
            onFacetChange: o[0] || (o[0] = (r) => t("facet-change", r))
          }, null, 8, ["children", "groupUid", "groupName", "type", "compact", "model-value"]),
          a.children.length > e.maxVisible ? (u(), _(Wt, {
            key: 0,
            class: m(["facets-filters__more-facets", e.classes.moreFacets]),
            modifiers: e.accordionModifiers
          }, {
            trigger: $(({ isOpen: r }) => [
              T(S(r ? "View Less" : "Show More"), 1)
            ]),
            default: $(() => [
              x(vt, {
                children: a.children.slice(e.maxVisible),
                groupUid: a.uid,
                groupName: a.name,
                type: a.multiple ? "checkbox" : "radio",
                compact: e.compact,
                "model-value": s(a),
                onFacetChange: o[1] || (o[1] = (r) => t("facet-change", r))
              }, null, 8, ["children", "groupUid", "groupName", "type", "compact", "model-value"])
            ]),
            _: 2
          }, 1032, ["class", "modifiers"])) : p("", !0)
        ]),
        _: 2
      }, 1032, ["modifiers", "startOpen"]))), 128))
    ]));
  }
}, nm = {
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
  setup(e, { emit: n }) {
    const t = n, s = (r) => r.multiple ? r.children : [{ label: `All ${r.name}s`, uid: "" }, ...r.children], l = (r) => r.multiple ? r.children.filter((c) => c.selected).map((c) => c.uid) : r.children.find((c) => c.selected)?.uid || "", o = (r) => {
      const c = r.children.filter((d) => d.selected), i = c.length;
      return i === 0 ? "All" : r.multiple ? i === 1 ? c[0].label : `${i} selected` : c[0].label;
    };
    function a(r, c, i) {
      if (r.multiple) {
        const d = new Set(c);
        r.children.forEach((v) => {
          const y = d.has(v.uid);
          v.selected !== y && t("facet-change", {
            groupUid: r.uid,
            facetUid: v.uid,
            selected: y
          });
        });
      } else {
        const d = c;
        r.children.forEach((v) => {
          const y = v.uid === d;
          v.selected !== y && t("facet-change", {
            groupUid: r.uid,
            facetUid: v.uid,
            selected: y
          });
        }), i();
      }
    }
    return (r, c) => (u(), f("div", {
      class: m(e.classes.container)
    }, [
      (u(!0), f(U, null, R(e.facets, (i) => (u(), f("div", {
        key: i.uid,
        class: m(e.classes.group)
      }, [
        x(wt, {
          classes: {
            trigger: e.classes.trigger,
            content: e.classes.content
          }
        }, {
          trigger: $(() => [
            g(r.$slots, "trigger", {
              group: i,
              label: o(i)
            }, () => [
              h("span", null, [
                T(S(i.name) + ": ", 1),
                h("strong", null, S(o(i)), 1)
              ])
            ]),
            x(q, {
              class: m(e.classes.triggerIcon),
              icon: "fas fa-chevron-down"
            }, null, 8, ["class"])
          ]),
          default: $(({ close: d }) => [
            x(us, {
              legend: i.name,
              type: i.multiple ? "checkbox" : "radio",
              options: s(i),
              "model-value": l(i),
              "onUpdate:modelValue": (v) => a(i, v, d),
              hideInputs: e.hideInputs
            }, null, 8, ["legend", "type", "options", "model-value", "onUpdate:modelValue", "hideInputs"])
          ]),
          _: 2
        }, 1032, ["classes"])
      ], 2))), 128))
    ], 2));
  }
}, Mr = ["for"], Fr = ["id", "onChange"], Pr = { value: "" }, zr = ["value", "selected"], sm = {
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
  setup(e, { emit: n }) {
    console.log(e);
    const s = n;
    function l(o, a) {
      const r = a.target.value;
      o.children.find((i) => i.selected)?.uid !== r && o.children.forEach((i) => {
        const d = i.uid === r;
        i.selected !== d && s("facet-change", {
          groupUid: o.uid,
          facetUid: i.uid,
          selected: d
        });
      });
    }
    return (o, a) => (u(), f("div", {
      class: m(["facets-dropdown-filters", e.classes.container])
    }, [
      (u(!0), f(U, null, R(e.facets, (r) => (u(), f("div", {
        class: m(["facets-dropdown-filters__group", e.classes.group]),
        key: r.uid
      }, [
        h("label", {
          for: `facet-dropdown-${r.uid}`,
          class: m(["facets-dropdown-filters__label", e.classes.label])
        }, [
          g(o.$slots, "label", {}, () => [
            T(S(r.name), 1)
          ])
        ], 10, Mr),
        h("select", {
          id: `facet-dropdown-${r.uid}`,
          class: m(["facets-dropdown-filters__select", e.classes.select]),
          onChange: (c) => l(r, c)
        }, [
          h("option", Pr, [
            g(o.$slots, "optionAll", { group: r }, () => [
              T(" All " + S(r.name) + "s ", 1)
            ])
          ]),
          (u(!0), f(U, null, R(r.children, (c, i) => (u(), f("option", {
            key: c.uid,
            value: c.uid,
            selected: c.selected
          }, [
            g(o.$slots, "option", {
              group: r,
              option: c,
              index: i
            }, () => [
              T(S(c.label), 1)
            ])
          ], 8, zr))), 128))
        ], 42, Fr)
      ], 2))), 128))
    ], 2));
  }
}, Lr = { class: "facets-header-layout" }, Vr = { class: "facets-header-layout__header" }, Hr = { class: "facets-header-layout__main" }, lm = {
  __name: "UluFacetsHeaderLayout",
  setup(e) {
    return (n, t) => (u(), f("div", Lr, [
      h("div", Vr, [
        g(n.$slots, "header")
      ]),
      h("div", Hr, [
        g(n.$slots, "main")
      ])
    ]));
  }
}, Nr = { class: "facets-results" }, Wr = {
  key: 1,
  class: "facets-results__empty"
}, om = {
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
    return (n, t) => (u(), f("div", Nr, [
      e.items.length ? (u(), _(qn, {
        key: 0,
        tag: e.tag,
        name: e.transitionName,
        class: m(["facets-results__list", e.classes.list])
      }, {
        default: $(() => [
          (u(!0), f(U, null, R(e.items, (s, l) => (u(), f("li", {
            class: m(["facets-results__item", e.classes.item]),
            key: s.id || l
          }, [
            g(n.$slots, "item", {
              item: s,
              index: l
            })
          ], 2))), 128))
        ]),
        _: 3
      }, 8, ["tag", "name", "class"])) : (u(), f("div", Wr, [
        g(n.$slots, "empty", {}, () => [
          t[0] || (t[0] = h("p", null, "No matching items found.", -1))
        ])
      ]))
    ]));
  }
}, Dr = ["for"], qr = ["id", "placeholder"], am = {
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
  setup(e, { emit: n }) {
    const t = e, s = n, l = se("facet-view-keyword"), o = w({
      get() {
        return t.modelValue;
      },
      set(a) {
        s("update:modelValue", a);
      }
    });
    return (a, r) => (u(), f("div", {
      class: m(["facets-search", e.classes.container])
    }, [
      h("label", {
        class: m(e.classes.label),
        for: k(l)
      }, [...r[1] || (r[1] = [
        h("strong", null, "Search", -1)
      ])], 10, Dr),
      ze(h("input", {
        id: k(l),
        class: m(e.classes.input),
        "onUpdate:modelValue": r[0] || (r[0] = (c) => o.value = c),
        type: "text",
        placeholder: e.placeholder
      }, null, 10, qr), [
        [Vs, o.value]
      ])
    ], 2));
  }
}, Xr = { class: "facets-sidebar__header" }, Gr = { class: "facets-sidebar__mobile-controls" }, Yr = { class: "facets-sidebar__body" }, Kr = { class: "facets-sidebar__main" }, rm = {
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
    const n = O(!1), t = Ae("uluIsMobile"), s = O(null), l = O(null), o = w(() => t.value ? l.value : s.value);
    return (a, r) => (u(), f("div", {
      class: m(["facets-sidebar", { "facets-sidebar--filters-hidden": k(t) }])
    }, [
      h("div", Xr, [
        g(a.$slots, "header")
      ]),
      ze(h("div", Gr, [
        h("button", {
          class: m(e.classes.mobileButton),
          onClick: r[0] || (r[0] = (c) => n.value = !0)
        }, S(e.mobileButtonText), 3)
      ], 512), [
        [zt, k(t)]
      ]),
      h("div", Yr, [
        ze(h("div", {
          class: "facets-sidebar__sidebar",
          ref_key: "desktopTarget",
          ref: s
        }, null, 512), [
          [zt, !k(t)]
        ]),
        h("div", Kr, [
          g(a.$slots, "main")
        ])
      ]),
      k(t) ? (u(), _(Jn, {
        key: 0,
        modelValue: n.value,
        "onUpdate:modelValue": r[1] || (r[1] = (c) => n.value = c),
        position: "right",
        title: "Filters & Sort",
        allowResize: ""
      }, {
        default: $(() => [
          h("div", {
            class: "facets-sidebar__sidebar",
            ref_key: "mobileTarget",
            ref: l
          }, null, 512)
        ]),
        _: 1
      }, 8, ["modelValue"])) : p("", !0),
      o.value ? (u(), _(yt, {
        key: 1,
        to: o.value
      }, [
        g(a.$slots, "sidebar")
      ], 8, ["to"])) : p("", !0)
    ], 2));
  }
}, Jr = ["for"], Qr = ["value", "id"], Zr = ["value"], im = {
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
  setup(e, { emit: n }) {
    const t = n, s = se("ulu-facet-sort");
    return (l, o) => (u(), f("div", {
      class: m(["facets-sort", e.classes.container])
    }, [
      h("label", {
        for: k(s),
        class: m(e.classes.label)
      }, [
        g(l.$slots, "default", {}, () => [
          o[1] || (o[1] = T("Sort:", -1))
        ])
      ], 10, Jr),
      h("select", {
        value: e.modelValue,
        onChange: o[0] || (o[0] = (a) => t("update:modelValue", a.target.value)),
        id: k(s),
        class: m(e.classes.select)
      }, [
        (u(!0), f(U, null, R(e.sortTypes, (a, r) => (u(), f("option", {
          value: r,
          key: r
        }, S(a.text), 9, Zr))), 128))
      ], 42, Qr)
    ], 2));
  }
};
function ei({ sections: e, props: n, emit: t, componentElRef: s }) {
  let l = null;
  function o(d) {
    return e.value.findIndex(({ element: v }) => d === v);
  }
  function a(d = null) {
    e.value.forEach((v) => {
      v !== d && (v.active = !1);
    });
  }
  function r() {
    let d = 0, v = !0;
    const y = (C) => {
      const { root: B } = l, H = B ? B.scrollTop : document.documentElement.scrollTop || window.scrollY;
      if (n.debug && (console.group("useScrollAnchors: onObserve"), console.log("Observer:", l), console.log("Last/Current Y:", `${d}/${H}`), console.log("Entries:", C.map((F) => ({ el: F.target, is: F.isIntersecting })))), v && n.firstItemActive) {
        n.debug && console.log("Initial observation, respecting `firstItemActive`."), v = !1, d = H, n.debug && console.groupEnd();
        return;
      }
      v = !1;
      const ee = H > d ? "down" : "up";
      d = H, n.debug && console.log(`Scroll direction: ${ee}`);
      const I = C.filter((F) => F.isIntersecting);
      if (n.debug && console.log("Intersecting entries:", I.map((F) => F.target)), I.length > 0) {
        I.sort((J, oe) => o(J.target) - o(oe.target));
        const F = ee === "down" ? I[I.length - 1] : I[0];
        n.debug && console.log("Chosen target entry:", F.target);
        const Y = e.value[o(F.target)];
        Y && !Y.active && (n.debug && console.log("Activating section:", Y.title), Ke(() => {
          a(Y), Y.active = !0, t("section-change", { section: Y, sections: e.value, active: !0 });
        }));
      } else {
        n.debug && console.log("No intersecting entries. Checking edge cases.");
        const F = e.value.find((Y) => Y.active);
        if (F) {
          const Y = C.find((J) => J.target === F.element);
          if (Y && !Y.isIntersecting) {
            const J = o(Y.target), oe = J === 0, re = J === e.value.length - 1;
            (oe && ee === "up" && !n.firstItemActive || re && ee === "down") && (n.debug && console.log("Deactivating section at edge:", F.title), Ke(() => {
              a(), t("section-change", { section: F, sections: e.value, active: !1 });
            }));
          }
        }
      }
      n.debug && console.groupEnd();
    };
    let b = null;
    n.observerOptions && n.observerOptions.root ? b = n.observerOptions.root : s.value && (b = Qs(s.value), b === document.scrollingElement && (b = null));
    const A = {
      ...n.observerOptions,
      root: b
    };
    l = new IntersectionObserver(y, A);
  }
  function c() {
    l && (l.disconnect(), e.value.forEach(({ element: d }) => {
      d && l.observe(d);
    }));
  }
  function i() {
    l && (l.disconnect(), l = null);
  }
  Be(() => {
    if (n.firstItemActive && e.value.length > 0) {
      const d = e.value[0];
      d && (d.active = !0);
    }
    r(), c();
  }), _t(() => {
    i();
  }), te(() => e.value.length, () => {
    Ke(() => {
      c();
    });
  });
}
function ds(e) {
  const n = O(null), t = Ae("uluScrollAnchorsRegister"), s = Ae("uluScrollAnchorsUnregister"), l = (r) => `ulu-sa-${ul(r)}`, o = w(() => e.customTitleId || l(e.title)), a = lt({
    id: Symbol("section-id"),
    title: e.title,
    titleId: o.value,
    element: null,
    // will be set on mount
    active: !1
  });
  return te(() => e.title, (r) => {
    a.title = r, a.titleId = e.customTitleId || l(r);
  }), te(() => e.customTitleId, (r) => {
    a.titleId = r || l(e.title);
  }), Be(() => {
    t && n.value && (a.element = n.value, t(a));
  }), _t(() => {
    s && s(a.id);
  }), {
    sectionRef: n,
    // the ref for the user to attach
    titleId: o,
    isActive: w(() => a.active),
    section: a
  };
}
function fs() {
  const e = Ae("uluScrollAnchorsSections");
  return e || console.warn("useScrollAnchorSections() must be used within an UluScrollAnchors component provider."), e;
}
const cm = {
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
  setup(e, { emit: n }) {
    const t = e, s = n, l = O([]), o = O(null);
    return ei({ sections: l, props: t, emit: s, componentElRef: o }), Bt("uluScrollAnchorsSections", w(() => l.value)), Bt("uluScrollAnchorsRegister", (a) => {
      l.value.push(a);
    }), Bt("uluScrollAnchorsUnregister", (a) => {
      const r = l.value.findIndex((c) => c.id === a);
      r > -1 && l.value.splice(r, 1);
    }), (a, r) => (u(), f("div", {
      class: "scroll-anchors",
      ref_key: "componentEl",
      ref: o
    }, [
      g(a.$slots, "default")
    ], 512));
  }
}, ti = ["href"], um = {
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
    const n = fs();
    return (t, s) => k(n) && k(n).length ? (u(), _(j(e.element), {
      key: 0,
      class: "scroll-anchors__nav"
    }, {
      default: $(() => [
        h("ul", null, [
          (u(!0), f(U, null, R(k(n), (l, o) => (u(), f("li", {
            key: o,
            class: m({ "is-active": l.active })
          }, [
            h("a", {
              class: m({ "is-active": l.active }),
              href: `#${l.titleId}`
            }, [
              g(t.$slots, "default", {
                item: l,
                index: o
              }, () => [
                T(S(l.title), 1)
              ])
            ], 10, ti)
          ], 2))), 128))
        ])
      ]),
      _: 3
    })) : p("", !0);
  }
}, ni = { class: "scroll-anchors-nav-animated__rail" }, si = ["href"], dm = {
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
    const n = e, t = fs(), s = O({}), l = O(!1), o = O(null), a = w(() => {
      if (!t || !t.value || !t.value.length)
        return !1;
      const c = t.value.findIndex((B) => B.active);
      if (c === -1)
        return !1;
      const i = s.value[c];
      if (!i) return !1;
      const { offsetTop: d, offsetHeight: v } = i, y = n.indicatorHeight != null, b = n.indicatorWidth ?? n.railWidth, A = y ? n.indicatorHeight : v;
      let C = d;
      return n.indicatorAlignment === "center" && (C = d + v / 2 - A / 2), C += n.indicatorAlignmentOffset, { y: C, height: A, width: b };
    });
    te(a, (c) => {
      c && !l.value && Gn(() => {
        l.value = !0;
      });
    });
    function r(c, i) {
      i && (s.value[c] = i);
    }
    return (c, i) => k(t) && k(t).length ? (u(), _(j(e.element), {
      key: 0,
      class: "scroll-anchors__nav scroll-anchors__nav--animated scroll-anchors-nav-animated",
      style: G({ "--ulu-sa-nav-rail-width": `${e.railWidth}px` })
    }, {
      default: $(() => [
        h("ul", ni, [
          (u(!0), f(U, null, R(k(t), (d, v) => (u(), f("li", {
            key: v,
            class: m({ "is-active": d.active })
          }, [
            h("a", {
              class: m({ "is-active": d.active }),
              ref_for: !0,
              ref: (y) => r(v, y),
              href: `#${d.titleId}`
            }, [
              g(c.$slots, "default", {
                item: d,
                index: v
              }, () => [
                T(S(d.title), 1)
              ])
            ], 10, si)
          ], 2))), 128))
        ]),
        h("div", {
          class: m(["scroll-anchors-nav-animated__indicator", {
            "scroll-anchors-nav-animated__indicator--can-transition": l.value
          }]),
          ref_key: "indicator",
          ref: o,
          style: G({
            opacity: a.value ? "1" : "0",
            transform: `translateY(${a.value ? a.value.y : 0}px)`,
            height: `${a.value ? a.value.height : 0}px`,
            width: `${a.value ? a.value.width : 0}px`
          })
        }, null, 6)
      ]),
      _: 3
    }, 8, ["style"])) : p("", !0);
  }
}, fm = {
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
    const n = e, { sectionRef: t, titleId: s, isActive: l, section: o } = ds(n);
    return (a, r) => (u(), _(j(e.element), {
      class: m([e.wrapperClass, { [e.activeClass]: e.activeClass && k(l) }]),
      ref_key: "sectionRef",
      ref: t
    }, {
      default: $(() => [
        (u(), _(j(e.titleElement), {
          class: m(e.titleClass),
          id: k(s)
        }, {
          default: $(() => [
            g(a.$slots, "title", {}, () => [
              T(S(e.title), 1)
            ])
          ]),
          _: 3
        }, 8, ["class", "id"])),
        g(a.$slots, "default", { section: k(o) })
      ]),
      _: 3
    }, 8, ["class"]));
  }
}, hm = {
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
    const n = e, { sectionRef: t, titleId: s, isActive: l, section: o } = ds(n);
    return (a, r) => (u(), _(j(e.element), {
      class: m(["scroll-anchors__section", { "is-active": k(l) }]),
      ref_key: "sectionRef",
      ref: t
    }, {
      default: $(() => [
        g(a.$slots, "default", {
          isActive: k(l),
          titleId: k(s),
          section: k(o)
        })
      ]),
      _: 3
    }, 8, ["class"]));
  }
}, li = {
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
    return (n, t) => (u(), f("span", {
      class: m(["skeleton skeleton--text", {
        "skeleton--inline": e.inline,
        "skeleton--background-alt": e.alt,
        [`skeleton--width-${e.width}`]: e.width
      }])
    }, null, 2));
  }
}, mm = {
  __name: "UluShowSkeleton",
  props: {
    /**
     * If true will show whatever is passed to slot, else skeleton text
     */
    when: Boolean
  },
  setup(e) {
    return (n, t) => e.when ? (u(), _(li, {
      key: 1,
      inline: ""
    })) : g(n.$slots, "default", { key: 0 });
  }
}, gm = {
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
    const n = e, t = w(() => dl(n.lines, () => {
      const l = ft(70, 100);
      let o = 0;
      const a = () => {
        const i = l - o, d = ft(15, i);
        return o += d, d;
      }, r = [];
      for (; o < l - 15; )
        r.push(a());
      const c = () => r.reduce((i, d) => i + d, 0);
      for (; c() >= l && r.pop(); )
        ;
      return r.map((i) => ({ width: i, alt: Math.random() < 0.5 }));
    }));
    return (s, l) => (u(), f("div", null, [
      (u(!0), f(U, null, R(t.value, (o, a) => (u(), f("div", { key: a }, [
        (u(!0), f(U, null, R(o, (r) => (u(), f("span", {
          key: r,
          class: m(["skeleton skeleton--text skeleton--inline", { "skeleton--background-alt": r.alt }]),
          style: G({ width: `${r.width}%` })
        }, null, 6))), 128))
      ]))), 128))
    ]));
  }
}, oi = { class: "skeleton skeleton-block--media" }, vm = {
  __name: "UluSkeletonMedia",
  setup(e) {
    return (n, t) => (u(), f("div", oi, [
      x(q, { icon: "type:image" })
    ]));
  }
}, ai = {
  name: "SlideShow",
  emits: ["slide-change"],
  components: {
    UluIcon: q
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
      return this.slides.find(({ element: n }) => e === n);
    },
    /**
     * Provides scroll measurements
     */
    getScrollData() {
      const { scrollLeft: e, offsetWidth: n, scrollWidth: t } = this.$refs.track;
      return { scrollLeft: e, offsetWidth: n, scrollWidth: t };
    },
    /**
     * Determines the amount to scroll the track
     */
    resolveAmount(e) {
      const n = e === "next", { scrollAmount: t } = this, { scrollLeft: s, offsetWidth: l } = this.getScrollData();
      return typeof t == "function" ? t(e, this.$refs) : typeof t == "number" ? n ? s + t : s - t : n ? s + l : s - l;
    },
    /**
     * Scroll the track to a specified point 
     */
    scrollTo(e, n) {
      this.$refs.track.scrollTo({ left: e, top: 0, behavior: n });
    },
    /**
     * Scroll to specific index
     * @param {Number} index Slide index
     */
    to(e) {
      const n = this.slides[e], { track: t } = this.$refs;
      if (n) {
        let s = n.element.offsetLeft;
        const l = () => {
          n.element.focus(this.focusOptions), t.removeEventListener("scrollend", l);
        };
        t.addEventListener("scrollend", l), this.scrollTo(s, this.scrollBehaviorNav);
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
      const { observerOptions: e } = this, { track: n, nav: t } = this.$refs, s = (l) => {
        l.forEach((o) => {
          this.$nextTick(() => {
            const a = this.getSlideByElement(o.target);
            a.active = o.isIntersecting, this.$emit("slide-change", { slide: a, track: n, nav: t });
          });
        });
      };
      this.observer = new IntersectionObserver(s, {
        root: n,
        ...e
      });
    },
    /**
     * Add all slide elements as targets in observer
     */
    observeSlides() {
      const { observer: e, slides: n } = this;
      e.disconnect(), n.forEach(({ element: t }) => {
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
}, ri = { class: "slideshow" }, ii = {
  class: "slideshow__control-context",
  ref: "context"
}, ci = {
  class: "slideshow__track-crop",
  ref: "crop"
}, ui = {
  class: "slideshow__track",
  ref: "track"
}, di = ["tabindex"], fi = { class: "slideshow__controls" }, hi = { class: "slideshow__controls-item slideshow__controls-item--previous" }, mi = ["disabled"], gi = { class: "slideshow__controls-item slideshow__controls-item--next" }, vi = ["disabled"], yi = {
  key: 0,
  class: "slideshow__nav",
  ref: "nav"
}, pi = ["onClick"], bi = { class: "hidden-visually" };
function _i(e, n, t, s, l, o) {
  const a = Z("UluIcon");
  return u(), f("div", ri, [
    h("div", ii, [
      h("div", ci, [
        h("ul", ui, [
          (u(!0), f(U, null, R(l.slides, (r, c) => (u(), f("li", {
            class: m(["slideshow__slide", { "is-active": r.active }]),
            key: c,
            tabindex: t.slideFocusable ? "0" : "-1",
            ref_for: !0,
            ref: (i) => {
              r.element = i;
            }
          }, [
            g(e.$slots, "slide", {
              item: r.item,
              index: c
            })
          ], 10, di))), 128))
        ], 512)
      ], 512),
      h("ul", fi, [
        h("li", hi, [
          h("button", {
            class: "slideshow__control-button slideshow__control-button--previous",
            "aria-label": "Scroll Right",
            onClick: n[0] || (n[0] = (...r) => o.previous && o.previous(...r)),
            disabled: !o.canScrollLeft
          }, [
            x(a, {
              class: "slideshow__control-icon",
              icon: "type:previous"
            })
          ], 8, mi)
        ]),
        h("li", gi, [
          h("button", {
            class: "slideshow__control-button slideshow__control-button--next",
            "aria-label": "Scroll Left",
            onClick: n[1] || (n[1] = (...r) => o.next && o.next(...r)),
            disabled: !o.canScrollRight
          }, [
            x(a, {
              class: "slideshow__control-icon",
              icon: "type:next"
            })
          ], 8, vi)
        ])
      ])
    ], 512),
    t.noNav ? p("", !0) : (u(), f("ul", yi, [
      (u(!0), f(U, null, R(l.slides, (r, c) => (u(), f("li", {
        class: m(["slideshow__nav-item", { "is-active": r.active }]),
        ref_for: !0,
        ref: (i) => {
          r.navElement = i;
        },
        key: c
      }, [
        h("button", {
          class: m(["slideshow__nav-button", { "is-active": r.active }]),
          onClick: (i) => o.to(c)
        }, [
          g(e.$slots, "nav", {
            item: r.item,
            index: c,
            active: r.active
          }, () => [
            h("span", bi, "Item " + S(c + 1), 1)
          ])
        ], 10, pi)
      ], 2))), 128))
    ], 512))
  ]);
}
const wi = /* @__PURE__ */ L(ai, [["render", _i]]), Si = {
  name: "ImageSlideShow",
  components: {
    UluSlideShow: wi
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
    slideChange({ slide: e, nav: n }) {
      const { active: t, navElement: s } = e;
      if (!s) return;
      const { offsetWidth: l, scrollLeft: o } = n, { offsetLeft: a, offsetWidth: r } = s, c = o + l, i = a + r;
      let d = null;
      console.log("left/right", o, c), t && s && (i > c ? d = o + (i - c) : a < o && (d = a), d !== null && n.scrollTo({ left: d, top: 0, behavior: "smooth" }));
    }
  }
}, ki = ["src", "alt"], $i = { class: "slideshow__image-actions" }, Ci = ["src", "alt"];
function Ti(e, n, t, s, l, o) {
  const a = Z("AppButton"), r = Z("UluSlideShow");
  return u(), _(r, {
    class: "slideshow--images",
    items: t.images,
    onSlideChange: o.slideChange
  }, {
    slide: $(({ item: c }) => [
      h("img", {
        src: c.src,
        alt: c.alt
      }, null, 8, ki),
      h("div", $i, [
        t.selectButton ? (u(), _(a, {
          key: 0,
          class: "type-small",
          icon: "plus",
          small: "",
          iconBefore: ""
        }, {
          default: $(() => [...n[0] || (n[0] = [
            T(" Select ", -1)
          ])]),
          _: 1
        })) : p("", !0)
      ])
    ]),
    nav: $(({ index: c }) => [
      h("img", {
        src: t.images[c].src,
        alt: `View image ${c}`
      }, null, 8, Ci)
    ]),
    _: 1
  }, 8, ["items", "onSlideChange"]);
}
const ym = /* @__PURE__ */ L(Si, [["render", Ti]]), Ai = {
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
function Oi(e, n, t, s, l, o) {
  return u(), f("li", {
    class: m(["slideshow__slide", { "is-active": t.active }])
  }, [
    g(e.$slots, "default")
  ], 2);
}
const pm = /* @__PURE__ */ L(Ai, [["render", Oi]]), Ui = {
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
}, xi = ["id"], Bi = ["innerHTML"];
function Ei(e, n, t, s, l, o) {
  return u(!0), f(U, null, R(t.rows, (a, r) => (u(), f("tr", {
    key: `br-${r}`,
    id: t.optionalAttr(t.isActual && a.id),
    class: m(t.resolveClasses(t.classes.row, { row: a.data, rowIndex: r, isActual: t.isActual, foot: t.foot })),
    style: G({
      height: a.height
    })
  }, [
    (u(!0), f(U, null, R(t.rowColumns, (c, i) => (u(), _(j(c.rowHeader ? "th" : "td"), {
      id: t.optionalAttr(t.isActual && c.rowHeader && c.getRowHeaderId(r)),
      scope: t.optionalAttr(t.isActual && c.rowHeader && "row"),
      key: `bc-${i}`,
      headers: t.optionalAttr(t.isActual && t.getCellHeaders(c, r)),
      class: m(t.resolveClasses(c.class, { column: c, index: i, isActual: t.isActual, row: a, rowIndex: r, foot: t.foot })),
      style: G({
        width: t.columnWidth
      })
    }, {
      default: $(() => [
        e.$slots[c.slot] ? g(e.$slots, c.slot, {
          key: 0,
          row: a.data,
          column: c,
          rowIndex: r,
          index: i,
          foot: t.foot,
          isActual: t.isActual
        }) : c.html ? (u(), f("div", {
          key: 1,
          innerHTML: t.value({ row: a, column: c, rowIndex: r, isActual: t.isActual, foot: t.foot })
        }, null, 8, Bi)) : (u(), f(U, { key: 2 }, [
          T(S(t.value({ row: a, column: c, rowIndex: r, isActual: t.isActual, foot: t.foot })), 1)
        ], 64))
      ]),
      _: 2
    }, 1032, ["id", "scope", "headers", "class", "style"]))), 128))
  ], 14, xi))), 128);
}
const Ri = /* @__PURE__ */ L(Ui, [["render", Ei]]), Ii = {
  name: "UluTableStickyTable",
  components: {
    UluTableStickyRows: Ri
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
      default: ({ row: e, column: n }) => e[n.key]
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
    handleSortFocus(e, n) {
      this.isActual && (e.sortFocused = n);
    },
    addHeaderRef(e, n) {
      const { headerRefs: t, isActual: s } = this;
      if (!s || !n) return;
      const { id: l } = e, o = t[l];
      o && this.$emit("actual-header-removed", o), this.$emit("actual-header-added", n), t[l] = n;
    },
    /**
     * False is no longer not printed
     */
    optionalAttr(e) {
      return e || null;
    },
    value({ row: e, column: n, rowIndex: t }) {
      const s = n.value;
      return s ? s({ row: e.data, column: n, rowIndex: t }) : this.getRowValue({ row: e.data, column: n, rowIndex: t });
    },
    getCellHeaders(e, n) {
      const t = e.headers.join(" "), s = e.getRowHeaders(n), l = s.length ? " " : "";
      return `${t}${l}${s}`;
    },
    getHeaderHeaders(e) {
      const n = e.headers.filter((t) => t !== e.id);
      if (n.length)
        return n.join(" ");
    }
  }
}, ji = ["aria-hidden"], Mi = {
  key: 0,
  class: "table-sticky__caption"
}, Fi = ["id"], Pi = ["id", "rowspan", "colspan", "data-child-columns", "aria-sort", "scope", "headers"], zi = ["innerHTML"], Li = {
  class: "table-sticky__sort-icon",
  "aria-hidden": "true"
}, Vi = { class: "table-sticky__sort-icon-inner" }, Hi = ["innerHTML"], Ni = { key: 1 }, Wi = { key: 2 };
function Di(e, n, t, s, l, o) {
  const a = Z("UluTableStickyRows");
  return u(), f("table", {
    class: m(t.resolveClasses(t.classes.table, { isActual: t.isActual })),
    "aria-hidden": t.isActual ? "false" : "true"
  }, [
    t.caption ? (u(), f("caption", Mi, S(t.caption), 1)) : p("", !0),
    h("thead", null, [
      (u(!0), f(U, null, R(t.headerRows, (r, c) => (u(), f("tr", {
        key: `hr-${c}`,
        id: o.optionalAttr(t.isActual && r.id),
        class: m(t.resolveClasses(t.classes.rowHeader, { row: r, rowIndex: c, isActual: t.isActual })),
        style: G({
          height: r.height
        })
      }, [
        (u(!0), f(U, null, R(r.columns, (i, d) => (u(), f("th", {
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
          style: G({
            width: i.width
          }),
          "aria-sort": i.sort ? i.sortAscending ? "ascending" : "descending" : null,
          scope: o.optionalAttr(t.isActual && (i.colspan > 1 ? "colgroup" : "col")),
          headers: o.optionalAttr(t.isActual && o.getHeaderHeaders(i, c)),
          ref_for: !0,
          ref: (v) => o.addHeaderRef(i, v)
        }, [
          i.sortable ? (u(), _(j(t.isActual ? "button" : "div"), {
            key: 0,
            class: m(["table-sticky__sort-button", {
              "table-sticky__sort-button--focused": i.sortFocused
            }]),
            onClick: (v) => e.$emit("column-sorted", i),
            onFocus: (v) => o.handleSortFocus(i, !0),
            onBlur: (v) => o.handleSortFocus(i, !1),
            "aria-pressed": i.sortApplied ? "true" : "false"
          }, {
            default: $(() => [
              e.$slots[i.slotHeader] ? g(e.$slots, i.slotHeader, {
                key: 0,
                isActual: t.isActual,
                column: i,
                index: d
              }) : i.htmlTitle ? (u(), f("div", {
                key: 1,
                innerHTML: t.getColumnTitle({ column: i, index: d, isActual: t.isActual })
              }, null, 8, zi)) : (u(), f(U, { key: 2 }, [
                T(S(t.getColumnTitle({ column: i, index: d, isActual: t.isActual })), 1)
              ], 64)),
              h("span", Li, [
                h("span", Vi, [
                  g(e.$slots, "sortIcon", {}, () => [
                    n[0] || (n[0] = T("▼", -1))
                  ])
                ])
              ])
            ]),
            _: 2
          }, 1064, ["class", "onClick", "onFocus", "onBlur", "aria-pressed"])) : (u(), f(U, { key: 1 }, [
            e.$slots[i.slotHeader] ? g(e.$slots, i.slotHeader, {
              key: 0,
              isActual: t.isActual,
              column: i,
              index: d
            }) : i.htmlTitle ? (u(), f("div", {
              key: 1,
              innerHTML: t.getColumnTitle({ column: i, index: d, isActual: t.isActual })
            }, null, 8, Hi)) : (u(), f(U, { key: 2 }, [
              T(S(t.getColumnTitle({ column: i, index: d, isActual: t.isActual })), 1)
            ], 64))
          ], 64))
        ], 14, Pi))), 128))
      ], 14, Fi))), 128))
    ]),
    t.rows ? (u(), f("tbody", Ni, [
      x(a, {
        rows: t.rows,
        rowColumns: t.rowColumns,
        optionalAttr: o.optionalAttr,
        resolveClasses: t.resolveClasses,
        getCellHeaders: o.getCellHeaders,
        isActual: t.isActual,
        columnWidth: t.columnWidth,
        classes: t.classes,
        value: o.value
      }, Fe({ _: 2 }, [
        R(e.$slots, (r, c) => ({
          name: c,
          fn: $((i) => [
            g(e.$slots, c, de(ve(i)))
          ])
        }))
      ]), 1032, ["rows", "rowColumns", "optionalAttr", "resolveClasses", "getCellHeaders", "isActual", "columnWidth", "classes", "value"])
    ])) : p("", !0),
    t.footerRows ? (u(), f("tfoot", Wi, [
      x(a, {
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
      }, Fe({ _: 2 }, [
        R(e.$slots, (r, c) => ({
          name: c,
          fn: $((i) => [
            g(e.$slots, c, de(ve(i)))
          ])
        }))
      ]), 1032, ["rows", "rowColumns", "optionalAttr", "resolveClasses", "getCellHeaders", "isActual", "columnWidth", "classes", "value"])
    ])) : p("", !0)
  ], 10, ji);
}
const qi = /* @__PURE__ */ L(Ii, [["render", Di]]);
function Xi() {
  this.__data__ = [], this.size = 0;
}
function hs(e, n) {
  return e === n || e !== e && n !== n;
}
function At(e, n) {
  for (var t = e.length; t--; )
    if (hs(e[t][0], n))
      return t;
  return -1;
}
var Gi = Array.prototype, Yi = Gi.splice;
function Ki(e) {
  var n = this.__data__, t = At(n, e);
  if (t < 0)
    return !1;
  var s = n.length - 1;
  return t == s ? n.pop() : Yi.call(n, t, 1), --this.size, !0;
}
function Ji(e) {
  var n = this.__data__, t = At(n, e);
  return t < 0 ? void 0 : n[t][1];
}
function Qi(e) {
  return At(this.__data__, e) > -1;
}
function Zi(e, n) {
  var t = this.__data__, s = At(t, e);
  return s < 0 ? (++this.size, t.push([e, n])) : t[s][1] = n, this;
}
function we(e) {
  var n = -1, t = e == null ? 0 : e.length;
  for (this.clear(); ++n < t; ) {
    var s = e[n];
    this.set(s[0], s[1]);
  }
}
we.prototype.clear = Xi;
we.prototype.delete = Ki;
we.prototype.get = Ji;
we.prototype.has = Qi;
we.prototype.set = Zi;
function ec() {
  this.__data__ = new we(), this.size = 0;
}
function tc(e) {
  var n = this.__data__, t = n.delete(e);
  return this.size = n.size, t;
}
function nc(e) {
  return this.__data__.get(e);
}
function sc(e) {
  return this.__data__.has(e);
}
var ms = typeof global == "object" && global && global.Object === Object && global, lc = typeof self == "object" && self && self.Object === Object && self, ye = ms || lc || Function("return this")(), Ve = ye.Symbol, gs = Object.prototype, oc = gs.hasOwnProperty, ac = gs.toString, qe = Ve ? Ve.toStringTag : void 0;
function rc(e) {
  var n = oc.call(e, qe), t = e[qe];
  try {
    e[qe] = void 0;
    var s = !0;
  } catch {
  }
  var l = ac.call(e);
  return s && (n ? e[qe] = t : delete e[qe]), l;
}
var ic = Object.prototype, cc = ic.toString;
function uc(e) {
  return cc.call(e);
}
var dc = "[object Null]", fc = "[object Undefined]", _n = Ve ? Ve.toStringTag : void 0;
function ot(e) {
  return e == null ? e === void 0 ? fc : dc : _n && _n in Object(e) ? rc(e) : uc(e);
}
function Ot(e) {
  var n = typeof e;
  return e != null && (n == "object" || n == "function");
}
var hc = "[object AsyncFunction]", mc = "[object Function]", gc = "[object GeneratorFunction]", vc = "[object Proxy]";
function vs(e) {
  if (!Ot(e))
    return !1;
  var n = ot(e);
  return n == mc || n == gc || n == hc || n == vc;
}
var Mt = ye["__core-js_shared__"], wn = function() {
  var e = /[^.]+$/.exec(Mt && Mt.keys && Mt.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function yc(e) {
  return !!wn && wn in e;
}
var pc = Function.prototype, bc = pc.toString;
function Re(e) {
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
  if (!Ot(e) || yc(e))
    return !1;
  var n = vs(e) ? Tc : wc;
  return n.test(Re(e));
}
function Oc(e, n) {
  return e?.[n];
}
function Ie(e, n) {
  var t = Oc(e, n);
  return Ac(t) ? t : void 0;
}
var nt = Ie(ye, "Map"), st = Ie(Object, "create");
function Uc() {
  this.__data__ = st ? st(null) : {}, this.size = 0;
}
function xc(e) {
  var n = this.has(e) && delete this.__data__[e];
  return this.size -= n ? 1 : 0, n;
}
var Bc = "__lodash_hash_undefined__", Ec = Object.prototype, Rc = Ec.hasOwnProperty;
function Ic(e) {
  var n = this.__data__;
  if (st) {
    var t = n[e];
    return t === Bc ? void 0 : t;
  }
  return Rc.call(n, e) ? n[e] : void 0;
}
var jc = Object.prototype, Mc = jc.hasOwnProperty;
function Fc(e) {
  var n = this.__data__;
  return st ? n[e] !== void 0 : Mc.call(n, e);
}
var Pc = "__lodash_hash_undefined__";
function zc(e, n) {
  var t = this.__data__;
  return this.size += this.has(e) ? 0 : 1, t[e] = st && n === void 0 ? Pc : n, this;
}
function xe(e) {
  var n = -1, t = e == null ? 0 : e.length;
  for (this.clear(); ++n < t; ) {
    var s = e[n];
    this.set(s[0], s[1]);
  }
}
xe.prototype.clear = Uc;
xe.prototype.delete = xc;
xe.prototype.get = Ic;
xe.prototype.has = Fc;
xe.prototype.set = zc;
function Lc() {
  this.size = 0, this.__data__ = {
    hash: new xe(),
    map: new (nt || we)(),
    string: new xe()
  };
}
function Vc(e) {
  var n = typeof e;
  return n == "string" || n == "number" || n == "symbol" || n == "boolean" ? e !== "__proto__" : e === null;
}
function Ut(e, n) {
  var t = e.__data__;
  return Vc(n) ? t[typeof n == "string" ? "string" : "hash"] : t.map;
}
function Hc(e) {
  var n = Ut(this, e).delete(e);
  return this.size -= n ? 1 : 0, n;
}
function Nc(e) {
  return Ut(this, e).get(e);
}
function Wc(e) {
  return Ut(this, e).has(e);
}
function Dc(e, n) {
  var t = Ut(this, e), s = t.size;
  return t.set(e, n), this.size += t.size == s ? 0 : 1, this;
}
function We(e) {
  var n = -1, t = e == null ? 0 : e.length;
  for (this.clear(); ++n < t; ) {
    var s = e[n];
    this.set(s[0], s[1]);
  }
}
We.prototype.clear = Lc;
We.prototype.delete = Hc;
We.prototype.get = Nc;
We.prototype.has = Wc;
We.prototype.set = Dc;
var qc = 200;
function Xc(e, n) {
  var t = this.__data__;
  if (t instanceof we) {
    var s = t.__data__;
    if (!nt || s.length < qc - 1)
      return s.push([e, n]), this.size = ++t.size, this;
    t = this.__data__ = new We(s);
  }
  return t.set(e, n), this.size = t.size, this;
}
function De(e) {
  var n = this.__data__ = new we(e);
  this.size = n.size;
}
De.prototype.clear = ec;
De.prototype.delete = tc;
De.prototype.get = nc;
De.prototype.has = sc;
De.prototype.set = Xc;
function Gc(e, n) {
  for (var t = -1, s = e == null ? 0 : e.length; ++t < s && n(e[t], t, e) !== !1; )
    ;
  return e;
}
var Sn = function() {
  try {
    var e = Ie(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}();
function Yc(e, n, t) {
  n == "__proto__" && Sn ? Sn(e, n, {
    configurable: !0,
    enumerable: !0,
    value: t,
    writable: !0
  }) : e[n] = t;
}
var Kc = Object.prototype, Jc = Kc.hasOwnProperty;
function Qc(e, n, t) {
  var s = e[n];
  (!(Jc.call(e, n) && hs(s, t)) || t === void 0 && !(n in e)) && Yc(e, n, t);
}
function Zc(e, n) {
  for (var t = -1, s = Array(e); ++t < e; )
    s[t] = n(t);
  return s;
}
function at(e) {
  return e != null && typeof e == "object";
}
var eu = "[object Arguments]";
function kn(e) {
  return at(e) && ot(e) == eu;
}
var ys = Object.prototype, tu = ys.hasOwnProperty, nu = ys.propertyIsEnumerable, su = kn(/* @__PURE__ */ function() {
  return arguments;
}()) ? kn : function(e) {
  return at(e) && tu.call(e, "callee") && !nu.call(e, "callee");
}, cn = Array.isArray;
function lu() {
  return !1;
}
var ps = typeof exports == "object" && exports && !exports.nodeType && exports, $n = ps && typeof module == "object" && module && !module.nodeType && module, ou = $n && $n.exports === ps, Cn = ou ? ye.Buffer : void 0, au = Cn ? Cn.isBuffer : void 0, bs = au || lu, ru = 9007199254740991, iu = /^(?:0|[1-9]\d*)$/;
function cu(e, n) {
  var t = typeof e;
  return n = n ?? ru, !!n && (t == "number" || t != "symbol" && iu.test(e)) && e > -1 && e % 1 == 0 && e < n;
}
var uu = 9007199254740991;
function _s(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= uu;
}
var du = "[object Arguments]", fu = "[object Array]", hu = "[object Boolean]", mu = "[object Date]", gu = "[object Error]", vu = "[object Function]", yu = "[object Map]", pu = "[object Number]", bu = "[object Object]", _u = "[object RegExp]", wu = "[object Set]", Su = "[object String]", ku = "[object WeakMap]", $u = "[object ArrayBuffer]", Cu = "[object DataView]", Tu = "[object Float32Array]", Au = "[object Float64Array]", Ou = "[object Int8Array]", Uu = "[object Int16Array]", xu = "[object Int32Array]", Bu = "[object Uint8Array]", Eu = "[object Uint8ClampedArray]", Ru = "[object Uint16Array]", Iu = "[object Uint32Array]", W = {};
W[Tu] = W[Au] = W[Ou] = W[Uu] = W[xu] = W[Bu] = W[Eu] = W[Ru] = W[Iu] = !0;
W[du] = W[fu] = W[$u] = W[hu] = W[Cu] = W[mu] = W[gu] = W[vu] = W[yu] = W[pu] = W[bu] = W[_u] = W[wu] = W[Su] = W[ku] = !1;
function ju(e) {
  return at(e) && _s(e.length) && !!W[ot(e)];
}
function un(e) {
  return function(n) {
    return e(n);
  };
}
var ws = typeof exports == "object" && exports && !exports.nodeType && exports, Je = ws && typeof module == "object" && module && !module.nodeType && module, Mu = Je && Je.exports === ws, Ft = Mu && ms.process, He = function() {
  try {
    var e = Je && Je.require && Je.require("util").types;
    return e || Ft && Ft.binding && Ft.binding("util");
  } catch {
  }
}(), Tn = He && He.isTypedArray, Fu = Tn ? un(Tn) : ju, Pu = Object.prototype, zu = Pu.hasOwnProperty;
function Lu(e, n) {
  var t = cn(e), s = !t && su(e), l = !t && !s && bs(e), o = !t && !s && !l && Fu(e), a = t || s || l || o, r = a ? Zc(e.length, String) : [], c = r.length;
  for (var i in e)
    zu.call(e, i) && !(a && // Safari 9 has enumerable `arguments.length` in strict mode.
    (i == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    l && (i == "offset" || i == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    o && (i == "buffer" || i == "byteLength" || i == "byteOffset") || // Skip index properties.
    cu(i, c))) && r.push(i);
  return r;
}
var Vu = Object.prototype;
function Ss(e) {
  var n = e && e.constructor, t = typeof n == "function" && n.prototype || Vu;
  return e === t;
}
function ks(e, n) {
  return function(t) {
    return e(n(t));
  };
}
var Hu = ks(Object.keys, Object), Nu = Object.prototype, Wu = Nu.hasOwnProperty;
function Du(e) {
  if (!Ss(e))
    return Hu(e);
  var n = [];
  for (var t in Object(e))
    Wu.call(e, t) && t != "constructor" && n.push(t);
  return n;
}
function qu(e) {
  return e != null && _s(e.length) && !vs(e);
}
function Xu(e) {
  return qu(e) ? Lu(e) : Du(e);
}
var $s = typeof exports == "object" && exports && !exports.nodeType && exports, An = $s && typeof module == "object" && module && !module.nodeType && module, Gu = An && An.exports === $s, On = Gu ? ye.Buffer : void 0;
On && On.allocUnsafe;
function Yu(e, n) {
  return e.slice();
}
function Ku(e, n) {
  for (var t = -1, s = e == null ? 0 : e.length, l = 0, o = []; ++t < s; ) {
    var a = e[t];
    n(a, t, e) && (o[l++] = a);
  }
  return o;
}
function Ju() {
  return [];
}
var Qu = Object.prototype, Zu = Qu.propertyIsEnumerable, Un = Object.getOwnPropertySymbols, ed = Un ? function(e) {
  return e == null ? [] : (e = Object(e), Ku(Un(e), function(n) {
    return Zu.call(e, n);
  }));
} : Ju;
function td(e, n) {
  for (var t = -1, s = n.length, l = e.length; ++t < s; )
    e[l + t] = n[t];
  return e;
}
var nd = ks(Object.getPrototypeOf, Object);
function sd(e, n, t) {
  var s = n(e);
  return cn(e) ? s : td(s, t(e));
}
function ld(e) {
  return sd(e, Xu, ed);
}
var qt = Ie(ye, "DataView"), Xt = Ie(ye, "Promise"), Gt = Ie(ye, "Set"), Yt = Ie(ye, "WeakMap"), xn = "[object Map]", od = "[object Object]", Bn = "[object Promise]", En = "[object Set]", Rn = "[object WeakMap]", In = "[object DataView]", ad = Re(qt), rd = Re(nt), id = Re(Xt), cd = Re(Gt), ud = Re(Yt), be = ot;
(qt && be(new qt(new ArrayBuffer(1))) != In || nt && be(new nt()) != xn || Xt && be(Xt.resolve()) != Bn || Gt && be(new Gt()) != En || Yt && be(new Yt()) != Rn) && (be = function(e) {
  var n = ot(e), t = n == od ? e.constructor : void 0, s = t ? Re(t) : "";
  if (s)
    switch (s) {
      case ad:
        return In;
      case rd:
        return xn;
      case id:
        return Bn;
      case cd:
        return En;
      case ud:
        return Rn;
    }
  return n;
});
var dd = Object.prototype, fd = dd.hasOwnProperty;
function hd(e) {
  var n = e.length, t = new e.constructor(n);
  return n && typeof e[0] == "string" && fd.call(e, "index") && (t.index = e.index, t.input = e.input), t;
}
var jn = ye.Uint8Array;
function dn(e) {
  var n = new e.constructor(e.byteLength);
  return new jn(n).set(new jn(e)), n;
}
function md(e, n) {
  var t = dn(e.buffer);
  return new e.constructor(t, e.byteOffset, e.byteLength);
}
var gd = /\w*$/;
function vd(e) {
  var n = new e.constructor(e.source, gd.exec(e));
  return n.lastIndex = e.lastIndex, n;
}
var Mn = Ve ? Ve.prototype : void 0, Fn = Mn ? Mn.valueOf : void 0;
function yd(e) {
  return Fn ? Object(Fn.call(e)) : {};
}
function pd(e, n) {
  var t = dn(e.buffer);
  return new e.constructor(t, e.byteOffset, e.length);
}
var bd = "[object Boolean]", _d = "[object Date]", wd = "[object Map]", Sd = "[object Number]", kd = "[object RegExp]", $d = "[object Set]", Cd = "[object String]", Td = "[object Symbol]", Ad = "[object ArrayBuffer]", Od = "[object DataView]", Ud = "[object Float32Array]", xd = "[object Float64Array]", Bd = "[object Int8Array]", Ed = "[object Int16Array]", Rd = "[object Int32Array]", Id = "[object Uint8Array]", jd = "[object Uint8ClampedArray]", Md = "[object Uint16Array]", Fd = "[object Uint32Array]";
function Pd(e, n, t) {
  var s = e.constructor;
  switch (n) {
    case Ad:
      return dn(e);
    case bd:
    case _d:
      return new s(+e);
    case Od:
      return md(e);
    case Ud:
    case xd:
    case Bd:
    case Ed:
    case Rd:
    case Id:
    case jd:
    case Md:
    case Fd:
      return pd(e);
    case wd:
      return new s();
    case Sd:
    case Cd:
      return new s(e);
    case kd:
      return vd(e);
    case $d:
      return new s();
    case Td:
      return yd(e);
  }
}
var Pn = Object.create, zd = /* @__PURE__ */ function() {
  function e() {
  }
  return function(n) {
    if (!Ot(n))
      return {};
    if (Pn)
      return Pn(n);
    e.prototype = n;
    var t = new e();
    return e.prototype = void 0, t;
  };
}();
function Ld(e) {
  return typeof e.constructor == "function" && !Ss(e) ? zd(nd(e)) : {};
}
var Vd = "[object Map]";
function Hd(e) {
  return at(e) && be(e) == Vd;
}
var zn = He && He.isMap, Nd = zn ? un(zn) : Hd, Wd = "[object Set]";
function Dd(e) {
  return at(e) && be(e) == Wd;
}
var Ln = He && He.isSet, qd = Ln ? un(Ln) : Dd, Cs = "[object Arguments]", Xd = "[object Array]", Gd = "[object Boolean]", Yd = "[object Date]", Kd = "[object Error]", Ts = "[object Function]", Jd = "[object GeneratorFunction]", Qd = "[object Map]", Zd = "[object Number]", As = "[object Object]", ef = "[object RegExp]", tf = "[object Set]", nf = "[object String]", sf = "[object Symbol]", lf = "[object WeakMap]", of = "[object ArrayBuffer]", af = "[object DataView]", rf = "[object Float32Array]", cf = "[object Float64Array]", uf = "[object Int8Array]", df = "[object Int16Array]", ff = "[object Int32Array]", hf = "[object Uint8Array]", mf = "[object Uint8ClampedArray]", gf = "[object Uint16Array]", vf = "[object Uint32Array]", V = {};
V[Cs] = V[Xd] = V[of] = V[af] = V[Gd] = V[Yd] = V[rf] = V[cf] = V[uf] = V[df] = V[ff] = V[Qd] = V[Zd] = V[As] = V[ef] = V[tf] = V[nf] = V[sf] = V[hf] = V[mf] = V[gf] = V[vf] = !0;
V[Kd] = V[Ts] = V[lf] = !1;
function dt(e, n, t, s, l, o) {
  var a;
  if (a !== void 0)
    return a;
  if (!Ot(e))
    return e;
  var r = cn(e);
  if (r)
    a = hd(e);
  else {
    var c = be(e), i = c == Ts || c == Jd;
    if (bs(e))
      return Yu(e);
    if (c == As || c == Cs || i && !l)
      a = i ? {} : Ld(e);
    else {
      if (!V[c])
        return l ? e : {};
      a = Pd(e, c);
    }
  }
  o || (o = new De());
  var d = o.get(e);
  if (d)
    return d;
  o.set(e, a), qd(e) ? e.forEach(function(b) {
    a.add(dt(b, n, t, b, e, o));
  }) : Nd(e) && e.forEach(function(b, A) {
    a.set(A, dt(b, n, t, A, e, o));
  });
  var v = ld, y = r ? void 0 : v(e);
  return Gc(y || e, function(b, A) {
    y && (A = b, b = e[A]), Qc(a, A, dt(b, n, t, A, e, o));
  }), a;
}
var yf = 1, pf = 4;
function bf(e) {
  return dt(e, yf | pf);
}
const Pt = (e) => e.every((n) => typeof n == "object"), Vn = !0, Os = () => window.innerWidth;
let Hn = Os();
const _f = {
  name: "UluTableSticky",
  components: {
    UluTableStickyTable: qi
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
      required: Vn
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
      validator: Pt,
      required: Vn
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
      validator: Pt
      // required
    },
    /**
     * Array of rows for footer (tfoot)
     */
    footerRows: {
      type: Array,
      validator: Pt
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
      resizeHandler: Kt(this.onResize.bind(this), 500, !0),
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
      const e = this.currentColumns, n = [], t = (l) => {
        l.columns ? l.columns.forEach(t) : n.push(l);
      };
      e.forEach(t);
      let s = [];
      return n.forEach((l, o) => {
        const a = s.slice();
        l.getRowHeaders = (r) => a.map((c) => c(r)).join(" "), l.rowHeader && (l.getRowHeaderId = (r) => `${this.idPrefix}-rh-${r}-${o}`, s.push(l.getRowHeaderId));
      }), n;
    },
    headerHeight() {
      return this.headerRows.reduce((e, n) => e + n.boxHeight, 0);
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
      const n = (t) => {
        t.forEach((s) => {
          e.key !== s.key && (s.sortApplied = !1, s.sortAscending = !1), s.columns && n(s.columns);
        });
      };
      n(this.currentColumns);
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
    resolveClasses(e, n = null) {
      if (!(typeof e > "u"))
        return typeof e == "function" ? e(n) : e;
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
      const e = this.idCreator("c"), n = bf(this.columns), t = (s, l) => {
        s.id = e(), s.parent = l, s.width = "auto", s.boxWidth = null, s.sortApplied = !1, s.sortAscending = !1, s.sortFocused = !1;
        let o = [];
        l && (l.headers && l.headers.length ? o = [...l.headers] : o.push(l.id)), o.push(s.id), s.headers = o, s.columns ? s.columns.forEach((a) => t(a, s)) : !s.key && !s.value && !s.slot && console.warn("UluTableSticky: Missing 'key', 'value' or 'slot' in column configuration for", s);
      };
      return n.forEach((s) => t(s, null)), n;
    },
    /**
     * Conversion of the columns (which are nested hierarchy) to a flat list of columns 
     * sorted by the way they need to be displayed in rows 
     * - Used for nested headers
     * - Transform nested data into row arrays
     */
    createHeaderRows(e) {
      const n = this.idCreator("hr"), t = e.reduce(this.maxColumnChildren, 1), s = "auto", l = new Array(t).fill(null).map(() => ({
        height: s,
        boxHeight: null,
        columns: [],
        id: n()
      }));
      function o(a, r) {
        const c = r.columns;
        c && c.forEach((i) => o(1 + a, i)), r.rowspan = c ? 1 : t - a, r.colspan = c ? c.reduce((i, d) => i + d.colspan, 0) : 1, l[a].columns.push(r);
      }
      return e.forEach((a) => o(0, a)), l;
    },
    /**
     * Creates row array for internal use
     * - Avoid mutating user's prop
     */
    createRows(e) {
      const n = this.idCreator(e ? "fr" : "br"), t = e ? this.footerRows : this.rows;
      return t ? t.map((s) => ({
        height: null,
        boxHeight: null,
        data: s,
        id: n()
      })) : [];
    },
    onResize() {
      const e = Os();
      Hn !== e && (Hn = e, this.resizing ? (this.resizing = !1, this.setTableSizes(), this.checkOverflowX(), this.syncScrollLeft()) : (this.resizing = !0, this.removeTableSizes()));
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
      let n = 0;
      return () => `${this.idPrefix}-${e}-${++n}`;
    },
    /**
     * Recursive function used as a reducer to return the deepest nested columns
     */
    maxColumnChildren(e, n) {
      const t = n.columns ? n.columns.reduce(this.maxColumnChildren) + 1 : 1;
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
      const e = (n) => {
        n.boxHeight = null, n.height = "auto";
      };
      this.tableWidth = "auto", this.headerRows.forEach((n) => {
        e(n), n.columns.forEach((t) => {
          t.boxWidth = null, t.width = "auto";
        });
      }), this.firstColumnSticky && (this.currentRows.forEach((n) => e(n)), this.currentFooterRows.forEach((n) => e(n)));
    },
    scrollLeft() {
      const e = this.$refs.display, n = e.scrollLeft, t = this.scrollControlAmount, s = n - t;
      e.scroll({
        left: s < 0 ? 0 : s,
        behavior: "smooth"
      });
    },
    scrollRight() {
      const e = this.$refs.display, n = e.scrollWidth, t = e.scrollLeft, s = this.scrollControlAmount, l = t + s;
      e.scroll({
        left: l > n ? e.scrollWidth : l,
        behavior: "smooth"
      });
    },
    /**
     * Cleanup function for when component is not in use
     */
    setTableSizes() {
      const e = (s, l) => Math.ceil(s.getBoundingClientRect()[l]);
      this.tableWidth = `${e(this.$refs.table.$el, "width")}px`;
      const n = (s) => document.getElementById(s.id), t = (s) => {
        const l = n(s);
        l && (s.boxHeight = e(l, "height"), s.height = `${s.boxHeight}px`);
      };
      this.headerRows.forEach((s) => {
        t(s), s.columns.forEach((l) => {
          const o = n(l);
          o && (l.boxWidth = e(o, "width"), l.width = `${l.boxWidth}px`);
        });
      }), this.firstColumnSticky && (this.currentRows.forEach((s) => t(s)), this.currentFooterRows.forEach((s) => t(s))), this.$nextTick(() => {
        this.sizesCalculated = !0, Gn(() => {
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
function Uf(e, n, t, s, l, o) {
  const a = Z("UluTableStickyTable");
  return u(), f("div", {
    class: m(["table-sticky", {
      "table-sticky--overflown-x": l.overflownX,
      "table-sticky--can-scroll-right": l.canScrollRight,
      "table-sticky--can-scroll-left": l.canScrollLeft
    }])
  }, [
    h("div", wf, [
      h("div", Sf, [
        x(a, {
          ref: "header",
          class: "table-sticky__table table-sticky__table--header",
          classes: t.classes,
          caption: t.caption,
          resolveClasses: o.resolveClasses,
          getColumnTitle: t.getColumnTitle,
          idPrefix: t.idPrefix,
          headerRows: l.headerRows,
          style: G({
            opacity: l.sizesCalculated ? "1" : "0",
            pointerEvents: l.sizesCalculated ? "auto" : "none",
            width: l.tableWidth
          }),
          onColumnSorted: o.applySort
        }, Fe({ _: 2 }, [
          R(e.$slots, (r, c) => ({
            name: c,
            fn: $((i) => [
              g(e.$slots, c, de(ve(i)))
            ])
          }))
        ]), 1032, ["classes", "caption", "resolveClasses", "getColumnTitle", "idPrefix", "headerRows", "style", "onColumnSorted"])
      ])
    ]),
    h("div", kf, [
      t.firstColumnSticky ? (u(), _(a, {
        key: 0,
        ref: "firstColumnHeader",
        class: "table-sticky__table table-sticky__table--first-column-header",
        classes: t.classes,
        caption: t.caption,
        resolveClasses: o.resolveClasses,
        getColumnTitle: t.getColumnTitle,
        idPrefix: t.idPrefix,
        headerRows: o.headerRowsFirst,
        style: G({
          opacity: o.headerOpacityX,
          pointerEvents: o.headerVisibleX ? "auto" : "none"
        }),
        onColumnSorted: o.applySort
      }, Fe({ _: 2 }, [
        R(e.$slots, (r, c) => ({
          name: c,
          fn: $((i) => [
            g(e.$slots, c, de(ve(i)))
          ])
        }))
      ]), 1032, ["classes", "caption", "resolveClasses", "getColumnTitle", "idPrefix", "headerRows", "style", "onColumnSorted"])) : p("", !0)
    ]),
    h("div", $f, [
      ze(h("div", {
        class: m(["table-sticky__controls", o.resolveClasses(t.classes.controls)]),
        ref: "controls"
      }, [
        e.$slots.controls ? g(e.$slots, "controls", {
          key: 0,
          scrollLeft: o.scrollLeft,
          scrollRight: o.scrollRight,
          canScrollLeft: l.canScrollLeft,
          canScrollRight: l.canScrollRight
        }) : t.controlsComponent ? (u(), _(j(t.controlsComponent), {
          key: 1,
          scrollLeft: o.scrollLeft,
          scrollRight: o.scrollRight,
          canScrollLeft: l.canScrollLeft,
          canScrollRight: l.canScrollRight
        }, null, 8, ["scrollLeft", "scrollRight", "canScrollLeft", "canScrollRight"])) : (u(), f("div", Cf, [
          h("button", {
            class: m(["table-sticky__control table-sticky__control--left", o.resolveClasses(t.classes.controlButton)]),
            "aria-label": "Scroll Left",
            onClick: n[0] || (n[0] = (...r) => o.scrollLeft && o.scrollLeft(...r)),
            disabled: !l.canScrollLeft
          }, [
            g(e.$slots, "controlLeft", {}, () => [
              n[2] || (n[2] = T(" ← ", -1))
            ])
          ], 10, Tf),
          h("button", {
            class: m(["table-sticky__control table-sticky__control--right", o.resolveClasses(t.classes.controlButton)]),
            "aria-label": "Scroll Right",
            onClick: n[1] || (n[1] = (...r) => o.scrollRight && o.scrollRight(...r)),
            disabled: !l.canScrollRight
          }, [
            g(e.$slots, "controlRight", {}, () => [
              n[3] || (n[3] = T(" → ", -1))
            ])
          ], 10, Af)
        ]))
      ], 2), [
        [zt, o.controlsShown]
      ])
    ]),
    h("div", Of, [
      x(a, {
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
      }, Fe({ _: 2 }, [
        R(e.$slots, (r, c) => ({
          name: c,
          fn: $((i) => [
            g(e.$slots, c, de(ve(i)))
          ])
        }))
      ]), 1032, ["classes", "resolveClasses", "headerRows", "rows", "footerRows", "rowColumns", "caption", "idPrefix", "getRowValue", "getColumnTitle", "onVnodeMounted", "onActualHeaderRemoved", "onActualHeaderAdded", "onColumnSorted"])
    ], 512),
    t.firstColumnSticky ? (u(), _(a, {
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
      style: G({
        opacity: o.headerOpacityX,
        pointerEvents: o.headerVisibleX ? "auto" : "none"
      }),
      onColumnSorted: o.applySort
    }, Fe({ _: 2 }, [
      R(e.$slots, (r, c) => ({
        name: c,
        fn: $((i) => [
          g(e.$slots, c, de(ve(i)))
        ])
      }))
    ]), 1032, ["classes", "resolveClasses", "caption", "headerRows", "columnWidth", "rows", "footerRows", "rowColumns", "idPrefix", "getRowValue", "getColumnTitle", "style", "onColumnSorted"])) : p("", !0)
  ], 2);
}
const bm = /* @__PURE__ */ L(_f, [["render", Uf]]), _m = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  dom: _l,
  router: To
}, Symbol.toStringTag, { value: "Module" }));
export {
  Wt as UluAccordion,
  Zf as UluAccordionGroup,
  Ih as UluAdaptiveLayout,
  ch as UluAlert,
  Yh as UluAnimateNumber,
  Lo as UluBadge,
  uh as UluBadgeStack,
  Ph as UluBreadcrumb,
  Eo as UluButton,
  dh as UluButtonVerbose,
  fh as UluCallout,
  hh as UluCard,
  Nt as UluCollapsible,
  Hh as UluConditionalText,
  nr as UluConditionalWrapper,
  jh as UluDataGrid,
  mh as UluDefinitionList,
  eh as UluDropdown,
  Nh as UluEmpty,
  Wh as UluEmptyView,
  gh as UluExternalLink,
  Zh as UluFacetsActiveFilters,
  tm as UluFacetsFilterAccordions,
  em as UluFacetsFilterLists,
  nm as UluFacetsFilterPopovers,
  sm as UluFacetsFilterSelects,
  lm as UluFacetsHeaderLayout,
  vt as UluFacetsList,
  om as UluFacetsResults,
  am as UluFacetsSearch,
  rm as UluFacetsSidebarLayout,
  im as UluFacetsSort,
  _h as UluFileDisplay,
  Th as UluForm,
  Ah as UluFormActions,
  Oh as UluFormCheckbox,
  Uh as UluFormFieldset,
  wh as UluFormFile,
  xh as UluFormItem,
  Bh as UluFormItemsInline,
  Sh as UluFormMessage,
  Eh as UluFormRadio,
  Ne as UluFormRequiredChar,
  kh as UluFormSelect,
  $h as UluFormText,
  Rh as UluFormTextarea,
  q as UluIcon,
  ym as UluImageSlideShow,
  vh as UluList,
  yh as UluMain,
  as as UluMenu,
  fo as UluMenuStack,
  Jn as UluModal,
  zh as UluNavStrip,
  sh as UluOverflowPopover,
  Lh as UluPager,
  Dh as UluPlaceholderImage,
  qh as UluPlaceholderText,
  Kh as UluProgressBar,
  Jh as UluProgressCircle,
  Xh as UluRouteAnnouncer,
  ph as UluRule,
  Gh as UluSanityRichText,
  cm as UluScrollAnchors,
  hm as UluScrollAnchorsHeadlessSection,
  um as UluScrollAnchorsNav,
  dm as UluScrollAnchorsNavAnimated,
  fm as UluScrollAnchorsSection,
  Ch as UluSearchForm,
  us as UluSelectableMenu,
  mm as UluShowSkeleton,
  gm as UluSkeletonContent,
  vm as UluSkeletonMedia,
  li as UluSkeletonText,
  Vh as UluSkipLink,
  wi as UluSlideShow,
  pm as UluSlideShowSlide,
  bh as UluSpokeSpinner,
  lh as UluTab,
  oh as UluTabGroup,
  ah as UluTabList,
  rh as UluTabPanel,
  ih as UluTabPanels,
  bm as UluTableSticky,
  Ri as UluTableStickyRows,
  qi as UluTableStickyTable,
  os as UluTag,
  Mh as UluTitleRail,
  Fh as UluWhenBreakpoint,
  Qf as breakpointsPlugin,
  qf as corePlugin,
  Kf as modalsPlugin,
  Yf as popoversPlugin,
  Jf as toastPlugin,
  ql as useBreakpointManager,
  nh as useDocumentTitle,
  Qh as useFacets,
  Ol as useIcon,
  fe as useModifiers,
  th as usePagination,
  Ce as useRequiredInject,
  ds as useScrollAnchorSection,
  fs as useScrollAnchorSections,
  ei as useScrollAnchors,
  Xf as useTooltip,
  Gf as useTooltipFollow,
  Yn as useUluFloating,
  mo as useWindowResize,
  _m as utils
};
