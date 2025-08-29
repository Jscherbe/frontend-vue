import { reactive as qt, ref as M, computed as k, resolveDirective as Kt, createElementBlock as d, openBlock as l, Fragment as A, withDirectives as me, createElementVNode as f, unref as E, normalizeClass as h, renderSlot as m, withKeys as Gt, normalizeStyle as F, createCommentVNode as _, nextTick as Zt, toRef as Us, toDisplayString as p, createBlock as y, Teleport as st, resolveDynamicComponent as j, mergeProps as G, inject as Jt, watchEffect as Is, defineAsyncComponent as Es, markRaw as de, normalizeProps as V, toRefs as zs, toValue as Ve, resolveComponent as C, withModifiers as js, createVNode as R, useSlots as Ms, renderList as T, TransitionGroup as Qt, withCtx as b, createTextVNode as w, vShow as es, watch as ts, onMounted as Fs, onUnmounted as Ps, guardReactiveProps as Y, vModelCheckbox as Bs, vModelText as Ls, createSlots as ue } from "vue";
import { inline as ss, offset as ns, flip as os, shift as is, arrow as rs, useFloating as as, autoUpdate as ls } from "@floating-ui/vue";
import { Disclosure as Hs, DisclosureButton as Ds, DisclosurePanel as Vs, Tab as Ns, TabGroup as Ws, TabList as Xs, TabPanel as Ys, TabPanels as qs } from "@headlessui/vue";
import { useRoute as Ks, useRouter as Gs, RouterLink as Fe } from "vue-router";
import Zs from "gsap";
import Js from "fuse.js";
const mt = {
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
    expand: "fas fa-plus",
    collapse: "fas fa-minus",
    resizeHorizontal: "fas fa-grip-lines-vertical",
    resizeVertical: "fas fa-grip-lines",
    resizeBoth: "fas fa-grip",
    ellipsis: "fas fa-ellipsis",
    pathSeparator: "fas fa-chevron-right"
  }
};
function tf(e, s = {}) {
  const t = qt({ ...mt }), { iconsByType: n, ...i } = s || {};
  i && Object.assign(t, i);
  const o = {
    // Methods to interact with settings
    getSettings() {
      return t;
    },
    getDefaultSettings() {
      return { ...mt };
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
const Ie = {
  /**
   * Default Plugin Options
   * @type {Object}
   */
  plugin: {
    /**
     * Whether to install all components globally in Vue and add the directive for
     * tooltips globally in Vue
     */
    global: !0,
    /**
     * The directive name to use (default 'tooltip' = <el v-ulu-tooltip="'hello world'">)
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
    onReady: null
  }
}, oe = {
  plugin: { ...Ie.plugin },
  popover: { ...Ie.popover },
  tooltip: { ...Ie.tooltip, ...Ie.popover }
}, nt = M(!1), ot = M(null);
function Qs(e = {}) {
  return Object.assign(oe.popover, e.popover), Object.assign(oe.tooltip, e.tooltip), Object.assign(oe.plugin, e.plugin), oe;
}
function en(e) {
  return Object.assign({}, oe.tooltip, e);
}
function tn(e) {
  nt.value = !0, ot.value = e;
}
function sn() {
  nt.value = !1, ot.value = null;
}
const ze = /* @__PURE__ */ new WeakMap(), nn = {
  mounted(e, s) {
    gt(e, s);
  },
  beforeUpdate(e) {
    _t(e);
  },
  updated(e, s) {
    gt(e, s);
  },
  umounted(e) {
    _t(e);
  }
};
function gt(e, s) {
  const t = on(e, s);
  if (!t) return;
  let n = null;
  const i = () => {
    n || (n = setTimeout(() => {
      tn(t), clearTimeout(n);
    }, t.delay));
  }, o = () => {
    n && (clearTimeout(n), n = null), sn();
  };
  t.showEvents.forEach((r) => {
    e.addEventListener(r, i);
  }), t.hideEvents.forEach((r) => {
    e.addEventListener(r, o);
  }), ze.set(e, { onShow: i, onHide: o, config: t });
}
function _t(e) {
  if (!ze.has(e))
    return;
  const { config: s, onShow: t, onHide: n } = ze.get(e);
  s.showEvents.forEach((i) => {
    e.removeEventListener(i, t);
  }), s.hideEvents.forEach((i) => {
    e.removeEventListener(i, n);
  }), ze.delete(e);
}
function on(e, s) {
  const { value: t } = s;
  let n;
  if (!(t === !1 || t === null))
    return typeof t == "object" ? n = t : n = { content: t }, en(Object.assign({}, { trigger: e }, n));
}
let rn = 0;
function an() {
  return `ulu-popovers-uid-${++rn}`;
}
const ln = ["disabled", "aria-expanded", "aria-controls", "aria-label"], cn = ["aria-hidden", "id", "data-placement"], un = { class: "popover__inner" }, dn = {
  key: 0,
  class: "popover__footer"
}, it = {
  __name: "UluPopover",
  props: {
    triggerAlt: String,
    disabled: Boolean,
    tooltip: String,
    size: String,
    noPadding: Boolean,
    config: Object,
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
    const t = s, n = e, i = an(), o = Object.assign({}, oe.popover, n.config), r = M(n.startOpen || !1), a = M(null), c = M(null), u = M(null), g = [
      ...o.inline ? [ss()] : [],
      ...o.offset ? [ns(o.offset)] : [],
      os(),
      is(),
      ...o.arrow ? [rs({ element: u })] : []
    ], S = {
      placement: o.placement,
      whileElementsMounted: ls,
      middleware: g
    }, {
      floatingStyles: O,
      placement: z,
      middlewareData: x,
      update: P,
      isPositioned: H
    } = as(a, c, S), J = k(() => {
      const D = x.value?.arrow;
      return D ? {
        position: "absolute",
        left: D?.x != null ? `${D.x}px` : "",
        top: D?.y != null ? `${D.y}px` : ""
      } : null;
    });
    o.onReady && o.onReady({ update: P, isPositioned: H });
    const xe = () => {
      ne(!r.value);
    }, ne = (D) => {
      r.value = D;
      const ee = {
        trigger: E(a),
        content: E(c),
        isOpen: E(r)
      }, le = { isOpen: ee.isOpen };
      Zt(() => {
        r.value ? (P(), window.setTimeout(() => {
          ye(), n.directFocus(ee), t("toggle", le);
        }, 0)) : (ve(), n.directFocus(ee), t("toggle", le));
      });
    };
    let Q;
    const ye = () => {
      n.clickOutsideCloses && (Q && ve(), Q = (D) => {
        c.value.contains(D.target) || ne(!1);
      }, document.addEventListener("click", Q));
    }, ve = () => {
      Q && (document.removeEventListener("click", Q), Q = null);
    }, pe = () => ne(!1);
    return (D, ee) => {
      const le = Kt("ulu-tooltip");
      return l(), d(A, null, [
        me((l(), d("button", {
          type: "button",
          ref_key: "trigger",
          ref: a,
          onClick: xe,
          disabled: e.disabled,
          class: h([
            { [e.activeClass]: r.value },
            e.classes.trigger
          ]),
          "aria-expanded": r.value ? "true" : "false",
          "aria-controls": E(i),
          "aria-label": e.triggerAlt
        }, [
          m(D.$slots, "trigger", { isOpen: r.value })
        ], 10, ln)), [
          [le, e.tooltip ? e.tooltip : null]
        ]),
        f("span", {
          class: h(["popover", [
            e.size ? `popover--${e.size}` : "",
            {
              "popover--no-padding": e.noPadding,
              "is-active": r.value
            },
            e.classes.content
          ]]),
          ref_key: "content",
          ref: c,
          "aria-hidden": r.value ? "false" : "true",
          id: E(i),
          style: F(E(O)),
          "data-placement": E(z),
          onKeydown: ee[0] || (ee[0] = Gt(($) => ne(!1), ["esc"])),
          tabindex: "-1"
        }, [
          f("span", un, [
            m(D.$slots, "content", { close: pe })
          ]),
          D.$slots.footer ? (l(), d("span", dn, [
            m(D.$slots, "footer", { close: pe })
          ])) : _("", !0),
          E(o).arrow ? (l(), d("span", {
            key: 1,
            class: "popover__arrow",
            ref_key: "contentArrow",
            ref: u,
            style: F(J.value),
            "data-ulu-popover-arrow": ""
          }, null, 4)) : _("", !0)
        ], 46, cn)
      ], 64);
    };
  }
}, fn = ["data-placement"], hn = ["innerHTML"], mn = {
  key: 1,
  class: "popover__inner"
}, gn = {
  __name: "UluTooltipPopover",
  props: {
    config: Object
  },
  setup(e) {
    const s = Us(e.config.trigger), t = M(null), n = M(null), i = [
      ...e.config.inline ? [ss()] : [],
      ...e.config.offset ? [ns(e.config.offset)] : [],
      os(),
      is(),
      ...e.config.arrow ? [rs({ element: n })] : []
    ], o = {
      placement: e.config.placement,
      whileElementsMounted: ls,
      middleware: i
    }, {
      floatingStyles: r,
      placement: a,
      middlewareData: c,
      update: u,
      isPositioned: g
    } = as(s, t, o), S = k(() => {
      const O = c.value?.arrow;
      return O ? {
        position: "absolute",
        left: O?.x != null ? `${O.x}px` : "",
        top: O?.y != null ? `${O.y}px` : ""
      } : null;
    });
    return e.config.onReady && e.config.onReady({ update: u, isPositioned: g }), (O, z) => (l(), d("span", {
      class: h(["popover popover--tooltip is-active", e.config.class]),
      ref_key: "content",
      ref: t,
      "aria-hidden": "true",
      "data-placement": E(a),
      style: F(E(r))
    }, [
      e.config.isHtml ? (l(), d("span", {
        key: 0,
        class: "popover__inner",
        innerHTML: e.config.content
      }, null, 8, hn)) : (l(), d("span", mn, p(e.config.content), 1)),
      e.config.arrow ? (l(), d("span", {
        key: 2,
        class: "popover__arrow",
        ref_key: "contentArrow",
        ref: n,
        style: F(S.value)
      }, null, 4)) : _("", !0)
    ], 14, fn));
  }
}, _n = {
  __name: "UluTooltipDisplay",
  setup(e) {
    return (s, t) => (l(), y(st, {
      to: E(oe).plugin.tooltipTeleportTo
    }, [
      E(nt) ? (l(), y(gn, {
        key: 0,
        config: E(ot)
      }, null, 8, ["config"])) : _("", !0)
    ], 8, ["to"]));
  }
};
function sf(e, s = {}) {
  const t = Qs(s);
  t.plugin.global && (e.directive(t.plugin.directiveName, nn), e.component("UluTooltipDisplay", _n), e.component("UluPopover", it));
}
const v = (e, s) => {
  const t = e.__vccOpts || e;
  for (const [n, i] of s)
    t[n] = i;
  return t;
}, yn = {
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
function vn(e, s, t, n, i, o) {
  return o.currentModal ? (l(), y(j(o.currentModal.component), G({ key: 0 }, o.currentProps, {
    modelValue: i.open,
    "onUpdate:modelValue": s[0] || (s[0] = (r) => i.open = r),
    onVnodeMounted: o.modalMounted,
    onVnodeUnmounted: o.modalUnmounted
  }), null, 16, ["modelValue", "onVnodeMounted", "onVnodeUnmounted"])) : _("", !0);
}
const pn = /* @__PURE__ */ v(yn, [["render", vn]]);
function bn() {
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
    icon: [String, Array, Object, Boolean]
  },
  setup(e) {
    const s = Jt("uluCore"), t = M(null), { getIconProps: n, getClassesFromDefinition: i } = bn();
    let o;
    const r = e, a = k(() => s.getSetting("fontAwesomeStatic")), c = k(() => s.getSetting("iconComponent")), u = k(() => s.getSetting("iconPropResolver")), g = k(() => {
      const { icon: x } = r;
      if (typeof x == "string" && x.startsWith("type:"))
        try {
          const P = x.substring(5);
          return s.getIcon(P);
        } catch (P) {
          return console.warn(P), null;
        }
      return x;
    }), S = k(() => !c.value || !g.value ? null : u.value(g.value)), O = k(() => n(g.value)), z = k(() => i(g.value));
    return Is(async () => {
      if (!a.value && g.value) {
        if (t.value === null)
          if (o)
            t.value = de(o.FontAwesomeIcon);
          else {
            const x = Es(async () => {
              const P = await import("./index.es-HlG3u0J5.js");
              return o = P, P.FontAwesomeIcon;
            });
            t.value = de(x);
          }
      } else
        t.value = null;
    }), (x, P) => c.value ? (l(), y(j(c.value), V(G({ key: 0 }, S.value)), null, 16)) : !a.value && t.value && g.value ? (l(), y(j(t.value), V(G({ key: 1 }, O.value)), null, 16)) : a.value && g.value ? (l(), d("span", {
      key: 2,
      class: h(z.value),
      "aria-hidden": "true"
    }, null, 2)) : _("", !0);
  }
};
function Ke(e) {
  const s = /* @__PURE__ */ new Set();
  if (!e)
    return s;
  if (typeof e == "string")
    e.split(" ").forEach((t) => {
      t && s.add(t);
    });
  else if (Array.isArray(e))
    e.forEach((t) => {
      Ke(t).forEach((n) => s.add(n));
    });
  else if (typeof e == "object")
    for (const t in e)
      Object.prototype.hasOwnProperty.call(e, t) && e[t] && t && s.add(t);
  return s;
}
function se({ props: e, baseClass: s, internal: t = {} }) {
  const { modifiers: n } = zs(e);
  return { resolvedModifiers: k(() => {
    const o = Ve(s), r = Ke(Ve(n)), a = Ke(Ve(t));
    if (!o)
      return console.warn("useModifiers: Missing 'baseClass' argument, modifiers will not be applied."), "";
    const c = /* @__PURE__ */ new Set([...a, ...r]);
    return Array.from(c).map((u) => `${o}--${u}`);
  }) };
}
function cs() {
  return typeof window < "u" && typeof window.document < "u";
}
function wn(e, s) {
  const t = e.getBoundingClientRect();
  return s.clientY < t.top || // above
  s.clientY > t.top + t.height || // below
  s.clientX < t.left || // left side
  s.clientX > t.left + t.width;
}
function Sn(e = document.body, s = window) {
  return s.innerWidth - e.clientWidth;
}
function kn({ preventShift: e = !1, container: s = document.body }) {
  const t = s.style.overflow, n = s.style.paddingRight;
  if (s.style.overflow = "hidden", e) {
    const i = Sn();
    if (i > 0) {
      const o = parseInt(n || "0px", 10);
      s.style.paddingRight = `${o + i}px`;
    }
  }
  return () => {
    s.style.overflow = t, s.style.paddingRight = n;
  };
}
function Pe(e, s, t, n) {
  var i;
  return function() {
    var r = n || this, a = arguments, c = function() {
      i = null, t || e.apply(r, a);
    }, u = t && !i;
    clearTimeout(i), i = setTimeout(c, s), u && e.apply(r, a);
  };
}
cs() && (Tn(), $n());
const yt = {
  /**
   * Event is dispatched when DOM in the page has changed, triggers updates from
   * all modules listening for the change (init instances, etc)
   * - Is triggered by modules that were responsible for modifying the page
   */
  pageModified(e) {
    e.dispatchEvent(we("pageModified"));
  },
  /**
   * Event called when page is resized
   */
  pageResized(e) {
    e.dispatchEvent(we("pageResized"));
  },
  /**
   * Event dispatched before page print begins (teardown/restructure/hide things)
   */
  beforePrint(e) {
    e.dispatchEvent(we("beforePrint"));
  },
  /**
   * Event dispatched after page print (cleanup)
   */
  afterPrint(e) {
    e.dispatchEvent(we("afterPrint"));
  }
};
function Ge(e, s) {
  yt[e] ? yt[e](s) : console.warn(`Unable to dispatch site event: ${e} in context:`, s);
}
function Cn(e) {
  return "ulu:" + e;
}
function we(e, s = null, t = { bubbles: !0 }) {
  return new CustomEvent(Cn(e), { detail: s, ...t });
}
function Tn() {
  window.addEventListener("resize", Pe(() => Ge("pageResized", document), 250));
}
function $n() {
  window.addEventListener("beforeprint", () => {
    Ge("beforePrint", document);
  }), window.addEventListener("afterprint", () => {
    Ge("afterPrint", document);
  });
}
function An(e) {
  return typeof e == "object" && e?.constructor?.name;
}
function On(e, s, t) {
  const n = An(s) || "Logger";
  console[e](n, ...t);
}
function ce(e, ...s) {
}
function Ee(e, ...s) {
  On("error", e, s);
}
class rt {
  static defaults = {
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
  };
  // Declare private fields without initial assignments
  #n;
  #o;
  #t;
  #e;
  #i;
  #r;
  #s;
  #a;
  #l;
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
  constructor(s, t, n) {
    if (!t || !s) {
      Ee(this, "Missing required elements: control, container");
      return;
    }
    const i = Object.assign({}, rt.defaults, n);
    this.options = i, this.container = s, this.control = t, this.debug = i.debug;
    const o = ["left", "right"], r = ["top", "bottom"], { fromX: a, fromY: c } = i;
    if (!o.includes(a) && a !== null) {
      Ee(this, `Invalid fromX: ${a} (left|right|null)`);
      return;
    }
    if (!r.includes(c) && c !== null) {
      Ee(this, `Invalid fromY: ${c} (top|bottom|null)`);
      return;
    }
    if (!a && !c) {
      Ee(this, "Invalid fromX/fromY, failed to setup resizer (at least one of fromX or fromY must be set)");
      return;
    }
    this.resizeHorizontal = i.fromX !== null, this.resizeVertical = i.fromY !== null, i.manageEvents && (this.#n = this.onPointerdown.bind(this), this.#o = this.onKeydown.bind(this), i.enablePointerResizing && t.addEventListener("pointerdown", this.#n), i.enableKeyboardResizing && t.addEventListener("keydown", this.#o)), this.#c(), i.manageAriaLabel && t.setAttribute("aria-label", this.getAriaLabel());
  }
  /**
   * Resets all internal state properties to their default/inactive values.
   * This centralizes state cleanup and initial setup.
   * @private
   */
  #c() {
    this.#t = null, this.#e = { width: 0, height: 0 }, this.#i = 0, this.#r = 0, this.#s = !1, this.#a = 0, this.#l = 0;
  }
  /**
   * Cleans up event listeners and internal state to prevent memory leaks.
   */
  destroy() {
    const { control: s, options: t } = this;
    t.manageEvents && (t.enablePointerResizing && s.removeEventListener("pointerdown", this.#n), t.enableKeyboardResizing && s.removeEventListener("keydown", this.#o)), this.#t && clearTimeout(this.#t), this.#c(), t.manageAriaLabel && s.removeAttribute("aria-label"), ce(this, "Resizer destroyed.");
  }
  /**
   * Initiates a resize operation.
   * This sets initial dimensions and dispatches the 'resizer:start' event.
   * @param {Object} eventDetails Additional details about the initiating event.
   * @private
   */
  #u(s) {
    const { container: t, options: n } = this;
    if (this.#s) {
      n.overrideMaxDimensions && (this.resizeHorizontal && (t.style.maxWidth = "none"), this.resizeVertical && (t.style.maxHeight = "none"));
      return;
    }
    const o = document.defaultView.getComputedStyle(t);
    this.#e.width = parseInt(o.width, 10), this.#e.height = parseInt(o.height, 10), n.overrideMaxDimensions && (this.resizeHorizontal && (t.style.maxWidth = "none"), this.resizeVertical && (t.style.maxHeight = "none")), this.#s = !0, this.dispatchEvent("resizer:start", s), ce(this, "Resize started.", {
      initialWidth: this.#e.width,
      initialHeight: this.#e.height,
      ...s
    });
  }
  /**
   * Ends a resize operation.
   * Dispatches 'resizer:end' event and resets internal state.
   * @private
   */
  #d() {
    this.#s && (this.dispatchEvent("resizer:end"), this.#c(), ce(this, "Resize ended."));
  }
  /**
   * Core logic for calculating and applying the new size of the container.
   * This method is called by both pointer and keyboard event handlers.
   *
   * @param {number} totalDeltaX The total horizontal displacement from the start of the resize.
   * @param {number} totalDeltaY The total vertical displacement from the start of the resize.
   * @param {Event} originalEvent The original DOM event (PointerEvent or KeyboardEvent) that triggered the update.
   * @private
   */
  #f(s, t, n) {
    let i = this.#e.width, o = this.#e.height;
    const { fromX: r, fromY: a, multiplier: c } = this.options;
    this.resizeHorizontal && (r === "right" ? i = this.#e.width + s * c : r === "left" && (i = this.#e.width - s * c), this.container.style.width = `${Math.max(0, i)}px`), this.resizeVertical && (a === "bottom" ? o = this.#e.height + t * c : a === "top" && (o = this.#e.height - t * c), this.container.style.height = `${Math.max(0, o)}px`);
    const u = {
      newWidth: i,
      newHeight: o,
      totalDeltaX: s,
      totalDeltaY: t,
      event: n
    };
    this.dispatchEvent("resizer:update", u), ce(this, "Resizing update.", u);
  }
  /**
   * Public handler for pointerdown events. Call this method from your own event listeners
   * if `manageEvents` is false. Its logic will only execute if `enablePointerResizing` is true.
   * @param {PointerEvent} e The pointerdown event.
   */
  onPointerdown(s) {
    if (!this.options.enablePointerResizing) {
      ce(this, "Pointer resizing disabled. Ignoring pointerdown event.");
      return;
    }
    s.preventDefault();
    const t = document.documentElement;
    this.#a = s.clientX, this.#l = s.clientY, this.#u({
      inputType: "pointer",
      startX: s.clientX,
      startY: s.clientY,
      pointerId: s.pointerId
    }), this.control.setPointerCapture(s.pointerId);
    const n = (o) => {
      const r = o.clientX - this.#a, a = o.clientY - this.#l;
      this.#f(r, a, o);
    }, i = (o) => {
      t.removeEventListener("pointermove", n, !1), t.removeEventListener("pointerup", i, { capture: !0, once: !0 }), this.control.hasPointerCapture(o.pointerId) && this.control.releasePointerCapture(o.pointerId), this.#d();
    };
    t.addEventListener("pointermove", n, !1), t.addEventListener("pointerup", i, { capture: !0, once: !0 });
  }
  /**
   * Public handler for keydown events. Call this method from your own event listeners
   * if `manageEvents` is false. Its logic will only execute if `enableKeyboardResizing` is true.
   * @param {KeyboardEvent} e The keydown event.
   */
  onKeydown(s) {
    if (!this.options.enableKeyboardResizing) {
      ce(this, "Keyboard resizing disabled. Ignoring keydown event.");
      return;
    }
    const { key: t } = s, { keyboardStep: n, keyboardDebounceTime: i } = this.options;
    let o = 0, r = 0, a = !1;
    this.resizeHorizontal && (t === "ArrowLeft" ? (o = -n, a = !0) : t === "ArrowRight" && (o = n, a = !0)), this.resizeVertical && (t === "ArrowUp" ? (r = -n, a = !0) : t === "ArrowDown" && (r = n, a = !0)), a && (s.preventDefault(), s.stopPropagation(), (!this.#s || this.#t === null) && this.#u({ inputType: "keyboard", keyboardKey: t }), this.#i += o, this.#r += r, this.#f(this.#i, this.#r, s), this.#t && clearTimeout(this.#t), this.#t = setTimeout(() => {
      this.#d(), this.#t = null;
    }, i));
  }
  /**
   * Generates an accessible label for the resize control based on its configuration.
   * This is a convenience function that can be used by the consumer if `manageAriaLabel` is false.
   * @returns {string} The suggested aria-label for the control.
   */
  getAriaLabel() {
    const { fromY: s, fromX: t } = this.options, n = [s, t].filter((i) => i);
    return n.length === 0 ? "Resize control" : `Resize from ${n.join(" ")} edge`;
  }
  /**
   * Dispatches a custom event on the container element.
   * @param {string} type The event type (e.g., "resizer:start", "resizer:update", "resizer:end").
   * @param {Object} [data={}] Optional data to attach to the event's detail property.
   */
  dispatchEvent(s, t = {}) {
    this.container.dispatchEvent(we(s, t));
  }
}
let Ne = 0;
const Rn = {
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
    return ++Ne, {
      containerWidth: null,
      titleId: `ulu-modal-${Ne}-title`,
      bodyOverflowValue: null,
      bodyPaddingRightValue: null,
      isResizing: !1
    };
  },
  setup(e) {
    const s = Ms(), t = k(() => e.title || s.title), n = k(() => {
      const { allowResize: a, position: c } = e;
      if (!a || !c) return;
      const u = ["left", "right", "center"];
      return u.includes(c) ? !0 : (console.warn(`Passed invalid position for resize (${c}), use ${u.join(", ")}`), !1);
    }), i = k(() => e.position === "center" ? "type:resizeBoth" : "type:resizeHorizontal"), o = k(() => ({
      [e.position]: e.position,
      resize: e.allowResize,
      "no-resize": !e.allowResize,
      "no-header": !t.value,
      "body-fills": e.bodyFills,
      "no-backdrop": e.noBackdrop,
      "no-min-height": e.noMinHeight,
      "non-modal": e.nonModal,
      "resizer-active": n.value
    })), { resolvedModifiers: r } = se({
      props: e,
      baseClass: "modal",
      internal: o
    });
    return {
      resolvedModifiers: r,
      hasHeader: t,
      resizerEnabled: n,
      resizerIconType: i
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
        s === t && wn(t, e) && this.close();
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
        e.newState === "open" ? this.restoreScroll = kn({ preventShift: s }) : this.destroyPreventScroll();
      }
    },
    setupResizer() {
      const { position: e, resizerEnabled: s } = this;
      if (s) {
        const { container: t, resizer: n } = this.$refs, i = e === "center" ? { fromX: "right", fromY: "bottom", multiplier: 2 } : { fromX: e === "right" ? "left" : "right" };
        this.resizerInstance = new rt(t, n, i), this.handleResizerStart = () => {
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
    ++Ne, this.preventScroll && this.setupPreventScroll(), this.setupResizer();
  },
  beforeUnmount() {
    const { container: e } = this.$refs;
    e && e.open && e.close(), this.destroyPreventScroll(), this.destroyResizer();
  }
}, xn = ["aria-labelledby", "aria-describedby"], Un = ["id"], In = { class: "modal__title-text" }, En = {
  key: 2,
  class: "modal__resizer",
  ref: "resizer",
  type: "button"
};
function zn(e, s, t, n, i, o) {
  const r = C("UluIcon");
  return l(), y(st, {
    to: t.teleport === !1 ? null : t.teleport,
    disabled: t.teleport === !1
  }, [
    f("dialog", {
      class: h(["modal", [n.resolvedModifiers, t.classes.container]]),
      "aria-labelledby": o.resolvedLabelledby,
      "aria-describedby": t.describedby,
      ref: "container",
      style: F({ width: i.containerWidth }),
      onCancel: s[1] || (s[1] = js((...a) => o.close && o.close(...a), ["prevent"])),
      onClose: s[2] || (s[2] = (...a) => o.handleDialogCloseEvent && o.handleDialogCloseEvent(...a)),
      onClick: s[3] || (s[3] = (...a) => o.handleClick && o.handleClick(...a)),
      onToggle: s[4] || (s[4] = (...a) => o.handleToggle && o.handleToggle(...a))
    }, [
      n.hasHeader ? (l(), d("header", {
        key: 0,
        class: h(["modal__header", t.classes.header])
      }, [
        f("h2", {
          class: h(["modal__title", t.classes.title]),
          id: i.titleId
        }, [
          m(e.$slots, "title", { close: o.close }, () => [
            t.titleIcon ? (l(), y(r, {
              key: 0,
              class: "modal__title-icon",
              icon: t.titleIcon
            }, null, 8, ["icon"])) : _("", !0),
            f("span", In, p(t.title), 1)
          ])
        ], 10, Un),
        f("button", {
          class: "modal__close",
          "aria-label": "Close modal",
          onClick: s[0] || (s[0] = (...a) => o.close && o.close(...a)),
          autofocus: ""
        }, [
          m(e.$slots, "closeIcon", {}, () => [
            R(r, {
              class: "modal__close-icon",
              icon: t.closeIcon || "type:close"
            }, null, 8, ["icon"])
          ])
        ])
      ], 2)) : _("", !0),
      f("div", {
        class: h(["modal__body", t.classes.body])
      }, [
        m(e.$slots, "default", { close: o.close })
      ], 2),
      e.$slots.footer ? (l(), d("div", {
        key: 1,
        class: h(["site-modal__footer", t.classes.footer])
      }, [
        m(e.$slots, "footer", { close: o.close })
      ], 2)) : _("", !0),
      n.resizerEnabled ? (l(), d("button", En, [
        m(e.$slots, "resizerIcon", {}, () => [
          R(r, {
            class: "modal__resizer-icon",
            icon: t.resizerIcon || n.resizerIconType
          }, null, 8, ["icon"])
        ])
      ], 512)) : _("", !0)
    ], 46, xn)
  ], 8, ["to", "disabled"]);
}
const jn = /* @__PURE__ */ v(Rn, [["render", zn]]), Se = [], Mn = M({
  /**
   * Holds active component options (including component, and options)
   */
  active: null,
  /**
   * Populated with any props passed to open method, bound to modal component
   */
  activeProps: null
}), ke = Mn.value, vt = {
  data: ke,
  modals: Se
}, Fn = (e) => ({
  open(s, t = null) {
    const n = this.get(s);
    ke.active = de(n), ke.activeProps = Object.assign({}, n.props, t);
  },
  /**
   * Close the active modal
   * @param {String|Node} focusTo The element or selector for an element to programmatically focus after modal close
   * @see https://www.deque.com/blog/accessible-routing-in-javascript-frameworks/
   */
  close() {
    ke.active = null, ke.activeProps = null;
  },
  /**
   * Get a modal's config object by name
   * @return {Object} Modal config object
   */
  get(s) {
    const t = Se.find((n) => n.name === s);
    if (t)
      return t;
    throw new Error(`Unable to find modal named: ${s}`);
  },
  /**
   * Add a modal config
   */
  add(s) {
    const t = e(s);
    Se.push(t);
  },
  /**
   * Removes a modal config by name
   * @return {Object} Modal that was removed
   */
  remove(s) {
    const t = Se.findIndex((n) => n.name === s);
    if (t > -1)
      return Se.splice(t, 1);
    warn("unable to find modal to remove");
  }
}), Pn = {
  componentNameDisplay: "UluModalsDisplay",
  componentNameModal: "UluModal",
  modals: [],
  modalOptions: {}
};
function nf(e, s) {
  const t = Object.assign({}, Pn, s), i = Fn((o) => Object.assign({}, t.modalOptions, o));
  e.component(t.componentNameDisplay, pn), e.component(t.componentNameModal, jn), t.modals.forEach((o) => {
    i.add(o);
  }), vt.options = t, e.config.globalProperties.$uluModals = i, e.provide("uluModals", i), e.config.globalProperties.$uluModalsState = vt;
}
const Bn = {
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
}, Ln = ["onClick"];
function Hn(e, s, t, n, i, o) {
  const r = C("FaIcon"), a = C("UluIcon");
  return l(), d("div", {
    class: h(["toast", [
      {
        "toast--persistent": !t.toast.duration
      },
      t.toast?.class
    ]])
  }, [
    t.toast.icon || e.$slots.icon ? (l(), d("div", {
      key: 0,
      class: h(["toast__icon", t.classes.icon])
    }, [
      m(e.$slots, "icon", { toast: t.toast }, () => [
        t.toast.icon ? (l(), y(r, {
          key: 0,
          icon: t.toast.icon
        }, null, 8, ["icon"])) : _("", !0)
      ])
    ], 2)) : _("", !0),
    f("div", {
      class: h(["toast__content", t.classes.content])
    }, [
      m(e.$slots, "content", { toast: t.toast }, () => [
        t.toast.title ? (l(), d("div", {
          key: 0,
          class: h(["toast__header", t.classes.header])
        }, [
          f("strong", {
            class: h(["toast__title", t.classes.title])
          }, p(t.toast.title), 3),
          t.toast.date ? (l(), d("span", {
            key: 0,
            class: h(["toast__date", t.classes.date])
          }, p(t.toast.date), 3)) : _("", !0)
        ], 2)) : _("", !0),
        t.toast.description ? (l(), d("div", {
          key: 1,
          class: h(["toast__body", t.classes.body])
        }, p(t.toast.description), 3)) : _("", !0)
      ])
    ], 2),
    t.toast.actions?.length ? (l(), d("div", {
      key: 1,
      class: h(["toast__actions", t.classes.actions])
    }, [
      (l(!0), d(A, null, T(t.toast.actions, (c, u) => (l(), d("button", {
        key: u,
        class: h(["toast__action", t.classes.action]),
        onClick: (g) => o.handleAction(g, c)
      }, p(c.label), 11, Ln))), 128))
    ], 2)) : _("", !0),
    f("button", {
      class: h(["toast__close", t.classes.closeButton]),
      onClick: s[0] || (s[0] = (...c) => t.toast.close && t.toast.close(...c))
    }, [
      R(a, { icon: "type:close" })
    ], 2)
  ], 2);
}
const us = /* @__PURE__ */ v(Bn, [["render", Hn]]), pt = {
  toastOptions: {
    /**
     * Component used to render the toast in the display
     */
    component: de(us),
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
    componentName: "UluToast",
    componentNameDisplay: "UluToastDisplay",
    teleportTo: "body",
    /**
     * Position of the toast container (holds toasts)
     */
    position: ["top", "right"]
  }
}, { assign: We } = Object;
let Dn = 0;
const te = qt({
  toasts: [],
  /**
   * Saveable 
   */
  pluginOptions: pt.pluginOptions,
  toastOptions: pt.toastOptions,
  setToastOptions(e) {
    return this.toastOptions = We({}, this.toastOptions, e), this.pluginOptions;
  },
  setPluginOptions(e) {
    return this.pluginOptions = We({}, this.pluginOptions, e), this.pluginOptions;
  },
  createToast(e) {
    const s = `toast-${++Dn}`;
    return We({}, this.toastOptions, e, {
      uid: s,
      close() {
        Ze.remove(s);
      }
    });
  }
}), Ze = {
  /**
   * 
   * @param {Object} options Toast options
   * @returns Toast object (to be used to remove)
   */
  add(e) {
    const s = te.createToast(e);
    return te.toasts.unshift(s), s.duration && setTimeout(() => {
      this.remove(s.uid);
    }, s.duration), s;
  },
  /**
   * 
   * @param {Object} toast Toast uid
   */
  remove(e) {
    const s = te.toasts.findIndex((t) => t.uid === e);
    s > -1 && te.toasts.splice(s, 1);
  },
  /**
   * Remove all toasts
   */
  removeAll() {
    te.toasts = [];
  }
}, Vn = {
  name: "UluTooltipDisplay",
  data() {
    const { toasts: e, pluginOptions: s } = te;
    return { toasts: e, pluginOptions: s };
  },
  computed: {
    classes() {
      const { position: e } = this.pluginOptions;
      return e.map((t) => `toast-container--${t}`);
    }
  }
};
function Nn(e, s, t, n, i, o) {
  return l(), y(st, {
    to: i.pluginOptions.teleportTo
  }, [
    R(Qt, {
      class: h(["toast-container", o.classes]),
      name: "toast",
      tag: "div"
    }, {
      default: b(() => [
        (l(!0), d(A, null, T(i.toasts, (r) => (l(), y(j(r.component), {
          key: r.uid,
          toast: r
        }, null, 8, ["toast"]))), 128))
      ]),
      _: 1
    }, 8, ["class"])
  ], 8, ["to"]);
}
const Wn = /* @__PURE__ */ v(Vn, [["render", Nn]]);
function of(e, s = {}) {
  const t = te.setPluginOptions(s?.plugin);
  te.setToastOptions(s?.toast), e.component(t.componentName, us), e.component(t.componentNameDisplay, Wn), e.config.globalProperties.$uluToast = Ze, e.provide("uluToast", Ze);
}
const Xn = {
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
function Yn(e) {
  const s = Object.assign({}, Xn, e), t = M(null), n = M(s.initialValue), i = M(null);
  return (async () => {
    if (!cs()) return;
    await new Promise((g) => {
      document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", () => g()) : g();
    });
    const r = await import("./breakpoints-BRe-TsJk.js"), { BreakpointManager: a } = r, c = de(new a(s.plugin));
    t.value = de(c);
    const u = () => {
      n.value = c.active, i.value = c.resizeDirection;
    };
    u(), s.onReady && s.onReady(c), c.onChange(u);
  })(), { breakpointManager: t, breakpointActive: n, breakpointDirection: i };
}
const qn = {
  /**
   * Breakpoint for mobile down/max
   */
  breakpointMobile: "small",
  /**
   * Options to pass to useBreakpointManager()
   */
  managerOptions: {}
};
function rf(e, s) {
  const t = M(!1), n = Object.assign({}, qn, s), { breakpointMobile: i } = n, { onReady: o } = n.managerOptions, r = {
    onReady(S) {
      S.at(i).max({
        on() {
          t.value = !0;
        },
        off() {
          t.value = !1;
        }
      }), o && o(S);
    }
  }, a = Object.assign({}, n.managerOptions, r), {
    breakpointManager: c,
    breakpointActive: u,
    breakpointDirection: g
  } = Yn(a);
  e.provide("uluBreakpointActive", k(() => u.value)), e.provide("uluBreakpointDirection", k(() => g.value)), e.provide("uluBreakpointManager", k(() => c.value)), e.provide("uluIsMobile", k(() => t.value));
}
const af = {
  __name: "UluAccordion",
  props: {
    /**
     * Whether the accordion is open by default
     */
    defaultOpen: Boolean,
    /**
     * Test to use for accordion, alternatively use #toggle slot
     */
    summaryText: String,
    /**
     * If using summary text sets the inner element the text is wrapped in, usually a headline or strong
     */
    summaryTextElement: {
      type: String,
      default: "strong"
    },
    /**
     * Classes for elements ({ container, summary, icon, content })
     * - Any valid class binding value per element
     */
    classes: {
      type: Object,
      default: () => ({})
    },
    /**
     * Active class output on container and toggle elements
     */
    activeClass: {
      type: String,
      default: "is-active"
    },
    /**
     * Modifiers for tag class
     */
    modifiers: [String, Array]
  },
  setup(e) {
    const s = e, { resolvedModifiers: t } = se({ props: s, baseClass: "button" });
    return (n, i) => (l(), y(E(Hs), { defaultOpen: e.defaultOpen }, {
      default: b(({ open: o }) => [
        f("div", {
          class: h(["accordion", [
            { [e.activeClass]: o },
            e.classes.container,
            E(t)
          ]])
        }, [
          R(E(Ds), {
            class: h(["accordion__summary", [
              { [e.activeClass]: o },
              e.classes.summary
            ]])
          }, {
            default: b(() => [
              m(n.$slots, "summary", { open: o }, () => [
                (l(), y(j(e.summaryTextElement), null, {
                  default: b(() => [
                    w(p(e.summaryText), 1)
                  ]),
                  _: 1
                }))
              ]),
              m(n.$slots, "icon", { open: o }, () => [
                f("span", {
                  class: h(["accordion__icon", e.classes.icon])
                }, [
                  R(N, {
                    icon: o ? "type:collapse" : "type:expand",
                    style: { display: "inline" }
                  }, null, 8, ["icon"])
                ], 2)
              ])
            ]),
            _: 2
          }, 1032, ["class"]),
          R(E(Vs), {
            class: h(["accordion__content", e.classes.content])
          }, {
            default: b(() => [
              m(n.$slots, "default", { open: o })
            ]),
            _: 2
          }, 1032, ["class"])
        ], 2)
      ]),
      _: 3
    }, 8, ["defaultOpen"]));
  }
};
let Kn = 0;
const Gn = {
  name: "UluCollapsibleRegion",
  props: {
    /**
     * Set title for toggle (instead of using slot)
     */
    title: String,
    /**
     * Closes with escape key
     */
    closeOnEscape: Boolean,
    /**
     * When the component is shown it should start visible or hidden
     */
    startOpen: Boolean,
    /**
     * Whether or not to transition the show and hide
     */
    transitionHeight: Boolean,
    /**
     * Transition should fade as it expands
     */
    transitionFades: Boolean,
    /**
     * Transition Timing Function
     */
    transitionTiming: {
      type: String,
      default: "ease-out"
    },
    /**
     * Transition Duration (css duration string), use comma seperation if different for opacity (fade).
     * Note: This is used to calculate a fallback timer if transitions fail
     */
    transitionDuration: {
      type: String,
      default: "400ms",
      validator(e) {
        return e.includes("s");
      }
    }
  },
  data() {
    const e = this.startOpen;
    return {
      isOpen: e,
      toggleId: this.getUid(),
      contentId: this.getUid(),
      contentHeight: e ? "auto" : "0px",
      contentOpacity: this.transitionFades && !e ? 0 : 1,
      transitionsDisabled: !1,
      transitionTimeout: Math.ceil(this.getUnitlessDuration(this.transitionDuration) + 500),
      isTransitioning: !1,
      isHidden: !e,
      onCleanupTransition: null
      // Transitions add function here used if needing to cancel 
    };
  },
  computed: {
    contentStyles() {
      return this.transitionHeight ? {
        overflow: "hidden",
        height: this.contentHeight,
        transitionDuration: this.transitionDuration,
        transitionTiming: this.transitionTiming,
        opacity: this.contentOpacity,
        transitionProperty: this.transitionsDisabled ? "none" : `height${this.transitionFades ? ",opacity" : ""}`
      } : {};
    }
  },
  methods: {
    /**
     * Function used to toggle the collapsible 
     */
    toggle() {
      this.isOpen && !this.isTransitioning ? this.close() : this.open();
    },
    handleEscape() {
      this.closeOnEscape && this.isOpen && this.close();
    },
    removeTransition(e) {
      this.onCleanupTransition && this.onCleanupTransition(), this.isTransitioning = !1, this.onCleanupTransition = null;
    },
    /**
     * Function that will handle setting the styles in a way that allows for
     * transitioning from display: none to height: auto. With optional fade.
     */
    open() {
      if (!this.transitionHeight) {
        this.isOpen = !0, this.isHidden = !1;
        return;
      }
      this.removeTransition(!0);
      let e;
      const s = this.$refs.content, t = () => {
        this.contentHeight = "auto", this.isOpen = !0, this.removeTransition(), this.$emit("collapsible-opened");
      };
      this.onCleanupTransition = () => {
        clearTimeout(e), s.removeEventListener("transitionend", t);
      }, s.addEventListener("transitionend", t), this.isHidden = !1, this.isTransitioning = !0, this.$emit("collapsible-opening"), this.$nextTick(() => {
        this.contentHeight = s.scrollHeight + "px", this.transitionFades && (this.contentOpacity = 1), e = setTimeout(t, this.transitionTimeout);
      });
    },
    /**
     * Function that will handle setting the styles in a way that allows for
     * transitioning from height: auto to display: none
     */
    close() {
      if (!this.transitionHeight) {
        this.isOpen = !1, this.isHidden = !0;
        return;
      }
      this.removeTransition(!0);
      let e;
      const s = this.$refs.content, t = s.scrollHeight, n = () => {
        s.addEventListener("transitionend", r), this.contentHeight = t + "px", this.$nextTick(i);
      }, i = () => {
        this.transitionsDisabled = !1, this.$nextTick(() => {
          requestAnimationFrame(o);
        });
      }, o = () => {
        this.contentHeight = "0px", this.transitionFades && (this.contentOpacity = 0);
      }, r = () => {
        this.isOpen = !1, this.isHidden = !0, this.removeTransition(), this.$emit("collapsible-closed");
      }, a = () => {
        o(), r();
      };
      this.onCleanupTransition = () => {
        clearTimeout(e), s.removeEventListener("transitionend", r);
      }, this.transitionsDisabled = !0, this.isTransitioning = !0, this.$emit("collapsible-closing"), this.$nextTick(() => {
        requestAnimationFrame(n), e = setTimeout(a, this.transitionTimeout);
      });
    },
    /**
     * Returns unitless duration
     * @param {String} duration - Css duration string
     */
    getUnitlessDuration(e) {
      let s = parseFloat(e.split(",")[0]);
      return e.includes("ms") ? s : s * 1e3;
    },
    /**
     * Recursive function to generate and test id uniqueness
     */
    getUid() {
      const e = `Ulu-C-${++Kn}`;
      return document.getElementById(e) ? this.getUid() : e;
    }
  }
}, Zn = ["id", "aria-controls", "aria-expanded"], Jn = ["id", "aria-hidden", "aria-labelledby"], Qn = { class: "CollapsibleRegion__content-inner" };
function eo(e, s, t, n, i, o) {
  return l(), d("div", {
    class: h(["CollapsibleRegion", {
      "CollapsibleRegion--open": i.isOpen,
      "CollapsibleRegion--closed": !i.isOpen,
      "CollapsibleRegion--transitioning": i.isTransitioning
    }]),
    onKeydown: s[1] || (s[1] = Gt((...r) => o.handleEscape && o.handleEscape(...r), ["esc"]))
  }, [
    f("button", {
      class: "CollapsibleRegion__toggle",
      id: i.toggleId,
      "aria-controls": i.contentId,
      "aria-expanded": i.isOpen,
      onClick: s[0] || (s[0] = (...r) => o.toggle && o.toggle(...r))
    }, [
      m(e.$slots, "toggle", { isOpen: i.isOpen }, () => [
        w(p(t.title), 1)
      ])
    ], 8, Zn),
    me(f("div", {
      class: "CollapsibleRegion__content",
      tabindex: "-1",
      ref: "content",
      id: i.contentId,
      "aria-hidden": !i.isOpen,
      "aria-labelledby": i.toggleId,
      style: F(o.contentStyles)
    }, [
      f("div", Qn, [
        m(e.$slots, "default")
      ])
    ], 12, Jn), [
      [es, !i.isHidden]
    ])
  ], 34);
}
const bt = /* @__PURE__ */ v(Gn, [["render", eo]]), to = {
  name: "UluTag",
  components: {
    UluIcon: N
  },
  props: {
    type: [String],
    /**
     * Preset to set small modifier and small type size
     */
    small: Boolean,
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
    const { resolvedModifiers: s } = se({ props: e, baseClass: "tag" });
    return { resolvedModifiers: s };
  }
};
function so(e, s, t, n, i, o) {
  const r = C("UluIcon");
  return l(), d("span", {
    class: h(["tag", [
      {
        "tag--small": t.small,
        "type-small": t.small,
        [`tag--${t.type}`]: t.type
      },
      n.resolvedModifiers
    ]])
  }, [
    t.icon ? (l(), y(r, {
      key: 0,
      icon: t.icon
    }, null, 8, ["icon"])) : _("", !0),
    m(e.$slots, "default", {}, () => [
      w(p(t.text), 1)
    ])
  ], 2);
}
const no = /* @__PURE__ */ v(to, [["render", so]]), oo = {
  name: "UluMenu",
  components: {
    UluIcon: N,
    UluTag: no
  },
  emits: [
    /**
     * Fired anytime a item is clicked
     */
    "itemClick"
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
      s.click && s.click(e), this.$emit("itemClick", { item: s, event: e });
    }
  }
};
function io(e, s, t, n, i, o) {
  const r = C("UluIcon"), a = C("UluTag"), c = C("UluMenu", !0), u = Kt("ulu-tooltip");
  return t.items?.length ? (l(), d("ul", {
    key: 0,
    class: h(t.classes.list)
  }, [
    (l(!0), d(A, null, T(t.items, (g, S) => (l(), d("li", {
      key: S,
      class: h([t.classes.item, g?.classes?.item])
    }, [
      me((l(), y(j(g.to || g.path ? "router-link" : g.click ? "button" : "a"), G({ ref_for: !0 }, {
        ...g.to || g.path ? { to: g.to || g.path } : {},
        ...g.href ? { href: g.href || "#" } : {}
      }, {
        onClick: (O) => {
          o.handleItemClick(O, g);
        },
        class: [t.classes.link, g?.classes?.link],
        activeClass: t.classes.linkActive,
        exactActiveClass: t.classes.linkExactActive,
        "aria-label": t.iconOnly ? g.title : null,
        id: g.id
      }), {
        default: b(() => [
          m(e.$slots, "default", {
            item: g,
            index: S
          }, () => [
            g.icon ? (l(), y(r, {
              key: 0,
              icon: g.icon,
              class: h([t.classes.linkIcon, g?.classes?.linkIcon])
            }, null, 8, ["icon", "class"])) : _("", !0),
            f("span", {
              class: h([t.classes.linkText, g?.classes?.linkText])
            }, p(g.title), 3),
            g.tag ? (l(), y(a, G({
              key: 1,
              ref_for: !0
            }, g.tag), null, 16)) : _("", !0)
          ])
        ]),
        _: 2
      }, 1040, ["onClick", "class", "activeClass", "exactActiveClass", "aria-label", "id"])), [
        [u, t.iconOnly ? g.title : g.tooltip || null]
      ]),
      !t.noChildren && g?.children?.length ? (l(), y(c, {
        key: 0,
        iconOnly: t.iconOnly,
        classes: t.classes,
        items: g.children
      }, null, 8, ["iconOnly", "classes", "items"])) : _("", !0)
    ], 2))), 128))
  ], 2)) : _("", !0);
}
const ds = /* @__PURE__ */ v(oo, [["render", io]]), ro = {
  name: "UluMenuStack",
  components: {
    UluMenu: ds
  },
  props: {
    /**
     * Menu item (see UluMenu)
     */
    items: Array,
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
    noChildren: Boolean
  }
};
function ao(e, s, t, n, i, o) {
  const r = C("UluMenu");
  return l(), d("nav", {
    class: h(["menu-stack", {
      "menu-stack--hanging": t.hanging,
      "menu-stack--compact": t.compact
    }])
  }, [
    R(r, {
      items: t.items,
      classes: {
        list: "menu-stack__list",
        item: "menu-stack__item",
        link: "menu-stack__link",
        linkText: "menu-stack__link-text",
        linkIcon: "menu-stack__link-icon"
      },
      noChildren: t.noChildren
    }, null, 8, ["items", "noChildren"])
  ], 2);
}
const lo = /* @__PURE__ */ v(ro, [["render", ao]]), co = {
  name: "UluDropdown",
  components: {
    UluPopover: it,
    UluMenuStack: lo
  },
  props: {
    /**
     * Dropdown menu items (to be passed to UluMenu)
     */
    items: Array,
    /**
     * Class to use on trigger
     */
    triggerClass: {
      type: [String, Object, Array],
      default: "button"
    },
    /**
     * Pass classes object to UluPopover classes prop
     */
    popoverClasses: {
      type: Object,
      default: () => ({})
    }
  }
};
function uo(e, s, t, n, i, o) {
  const r = C("UluMenuStack"), a = C("UluPopover");
  return l(), y(a, { classes: t.popoverClasses }, {
    trigger: b(({ isOpen: c }) => [
      m(e.$slots, "default", { isOpen: c })
    ]),
    content: b(() => [
      R(r, { items: t.items }, null, 8, ["items"])
    ]),
    _: 3
  }, 8, ["classes"]);
}
const lf = /* @__PURE__ */ v(co, [["render", uo]]), at = M(!1), Me = {
  start: [],
  end: []
};
function lt() {
  window.removeEventListener("resize", lt), at.value = !0, Me.start.forEach((e) => e());
}
function fo() {
  at.value = !1, Me.end.forEach((e) => e()), window.addEventListener("resize", lt);
}
window.addEventListener("resize", lt), window.addEventListener("resize", Pe(fo, 300));
function wt(e, s) {
  return e.push(s), () => {
    const t = e.findIndex((n) => n === s);
    t > -1 && e.splice(t);
  };
}
function ho() {
  return {
    resizing: at,
    onResizeStart(e) {
      return wt(Me.start, e);
    },
    onResizeEnd(e) {
      return wt(Me.end, e);
    }
  };
}
const mo = {
  uluCore: "Core",
  uluIsMobile: "Breakpoints",
  uluBreakpointActive: "Breakpoints",
  uluBreakpointDirection: "Breakpoints",
  uluBreakpointManager: "Breakpoints",
  uluModals: "Modals",
  uluToast: "Toast"
}, St = {};
function go(e) {
  const s = Jt(e, St);
  if (s === St) {
    const t = mo[e] || "", n = t ? ` from the '${t}' plugin` : "", i = t ? "Please install missing plugin." : "";
    throw new Error(`Required inject: '${e}'${n} was not provided. ${i}`);
  }
  return s;
}
function cf(e, s) {
  const t = Ks(), n = Gs(), i = k(() => {
    const u = parseInt(t.query.page || "1", 10);
    return isNaN(u) || u < 1 ? 1 : u;
  }), o = k(() => !e.value || e.value.length === 0 ? 1 : Math.ceil(e.value.length / s));
  ts(o, (u) => {
    i.value > u && n.push({ query: { ...t.query, page: u } });
  });
  const r = k(() => {
    const u = (i.value - 1) * s, g = u + s;
    return e.value.slice(u, g);
  }), a = k(() => {
    if (o.value <= 1)
      return null;
    const u = {
      pages: {}
    }, g = i.value, S = o.value, O = 5, z = (H) => ({ query: { ...t.query, page: H } });
    g > 1 && (u.first = { href: z(1) }, u.previous = { href: z(g - 1) }), g < S && (u.next = { href: z(g + 1) }, u.last = { href: z(S) });
    let x, P;
    if (S <= O)
      x = 1, P = S;
    else {
      const H = Math.floor(O / 2), J = Math.ceil(O / 2) - 1;
      g <= H ? (x = 1, P = O) : g + J >= S ? (x = S - O + 1, P = S) : (x = g - H, P = g + J);
    }
    for (let H = x; H <= P; H++)
      u.pages[H] = { href: z(H) };
    return u;
  }), c = k(() => {
    const u = { previous: !1, next: !1 };
    if (!a.value || !a.value.pages) return u;
    const g = Object.keys(a.value.pages).map(Number);
    if (g.length === 0) return u;
    const S = Math.min(...g), O = Math.max(...g);
    return S > 1 && (u.previous = !0), O < o.value && (u.next = !0), u;
  });
  return {
    currentPage: i,
    totalPages: o,
    paginatedItems: r,
    pagerItems: a,
    pagerEllipses: c
  };
}
const _o = { class: "layout-flex-baseline" }, yo = { class: "type-word-break" }, uf = {
  __name: "UluOverflowPopover",
  props: {
    /**
     * Default icon for overflow popover trigger
     */
    triggerIcon: String
  },
  setup(e) {
    const { resizing: s, onResizeEnd: t } = ho(), n = M(null), i = M(!1), o = () => {
      Zt(() => {
        const a = n.value;
        i.value = a.offsetWidth < a.scrollWidth;
      });
    }, r = t(o);
    return Fs(o), Ps(r), (a, c) => (l(), d("div", _o, [
      f("div", {
        class: "type-truncate",
        ref_key: "text",
        ref: n
      }, [
        m(a.$slots, "default")
      ], 512),
      i.value && !E(s) ? (l(), y(it, {
        key: 0,
        triggerAlt: "Show Full Text",
        size: "large"
      }, {
        trigger: b(() => [
          R(N, {
            icon: e.triggerIcon || "type:ellipsis"
          }, null, 8, ["icon"])
        ]),
        content: b(() => [
          f("div", yo, [
            m(a.$slots, "default")
          ])
        ]),
        _: 3
      })) : _("", !0)
    ]));
  }
}, df = {
  __name: "UluTab",
  setup(e) {
    return (s, t) => (l(), y(E(Ns), null, {
      default: b((n) => [
        m(s.$slots, "default", V(Y(n)))
      ]),
      _: 3
    }));
  }
}, ff = /* @__PURE__ */ Object.assign({
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
    return (s, t) => (l(), y(E(Ws), {
      defaultIndex: e.defaultIndex,
      vertical: e.vertical
    }, {
      default: b((n) => [
        f("div", {
          class: h(["tabs", {
            "tabs--vertical": e.vertical
          }])
        }, [
          m(s.$slots, "default", V(Y(n)))
        ], 2)
      ]),
      _: 3
    }, 8, ["defaultIndex", "vertical"]));
  }
}), hf = {
  __name: "UluTabList",
  setup(e) {
    return (s, t) => (l(), y(E(Xs), { class: "tabs__tablist" }, {
      default: b(() => [
        m(s.$slots, "default")
      ]),
      _: 3
    }));
  }
}, mf = {
  __name: "UluTabPanel",
  setup(e) {
    return (s, t) => (l(), y(E(Ys), null, {
      default: b((n) => [
        m(s.$slots, "default", V(Y(n)))
      ]),
      _: 3
    }));
  }
}, gf = {
  __name: "UluTabPanels",
  setup(e) {
    return (s, t) => (l(), y(E(qs), null, {
      default: b((n) => [
        m(s.$slots, "default", V(Y(n)))
      ]),
      _: 3
    }));
  }
}, vo = {
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
    const { resolvedModifiers: s } = se({ props: e, baseClass: "button" });
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
      return this.to ? Fe : this.href ? "a" : "button";
    },
    attrs() {
      const { to: e, href: s, download: t, target: n } = this, i = e ? { to: e } : s ? { href: s } : {};
      return s && (n && (i.target = n), t && (i.download = typeof t == "string" ? t : !0)), i;
    }
  }
}, po = { key: 1 };
function bo(e, s, t, n, i, o) {
  const r = C("UluIcon");
  return l(), y(j(o.element), G({
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
    default: b(() => [
      m(e.$slots, "before"),
      t.icon && (t.iconBefore || t.iconOnly) ? (l(), y(r, {
        key: 0,
        icon: t.icon,
        class: "button__icon"
      }, null, 8, ["icon"])) : _("", !0),
      (e.$slots.default || t.text) && !t.iconOnly ? (l(), d("span", po, [
        m(e.$slots, "default", {}, () => [
          w(p(t.text), 1)
        ])
      ])) : _("", !0),
      t.icon && !t.iconBefore && !t.iconOnly ? (l(), y(r, {
        key: 2,
        icon: t.icon,
        class: "button__icon"
      }, null, 8, ["icon"])) : _("", !0),
      m(e.$slots, "after")
    ]),
    _: 3
  }, 16, ["class", "aria-label"]);
}
const wo = /* @__PURE__ */ v(vo, [["render", bo]]), So = {
  name: "UluAlert",
  components: {
    UluButton: wo,
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
    const { resolvedModifiers: s } = se({
      props: e,
      baseClass: "callout",
      internal: k(() => ({
        [e.type]: e.type,
        compact: e.compact
      }))
    });
    return { resolvedModifiers: s };
  }
}, ko = { class: "layout-flex" }, Co = { class: "type-small" }, To = {
  key: 0,
  class: "margin-left-auto align-self-center"
};
function $o(e, s, t, n, i, o) {
  const r = C("UluIcon");
  return l(), d("div", {
    class: h(["callout", n.resolvedModifiers])
  }, [
    f("div", ko, [
      R(r, {
        class: h(["type-large margin-right-small", `color-${t.type}`]),
        icon: t.icon || `type:${t.type}`
      }, null, 8, ["class", "icon"]),
      f("div", Co, [
        f("div", null, [
          m(e.$slots, "title", {}, () => [
            f("strong", null, p(t.title), 1)
          ])
        ]),
        f("div", null, [
          m(e.$slots, "description", {}, () => [
            w(p(t.description), 1)
          ])
        ])
      ]),
      e.$slots.action ? (l(), d("div", To, [
        m(e.$slots, "action")
      ])) : _("", !0)
    ])
  ], 2);
}
const _f = /* @__PURE__ */ v(So, [["render", $o]]), Ao = {
  name: "UluBadge",
  props: {
    skeleton: Boolean,
    size: String,
    text: String,
    alt: String,
    type: String,
    click: Function,
    to: [Object, String],
    href: String
  },
  computed: {
    isInteractive() {
      return !!(this.to || this.click);
    },
    element() {
      const { click: e, to: s, href: t } = this;
      return e ? "button" : s ? Fe : t ? "a" : "span";
    }
  }
}, Oo = ["aria-hidden"], Ro = {
  key: 2,
  class: "hidden-visually"
};
function xo(e, s, t, n, i, o) {
  return l(), y(j(o.element), {
    class: h(["badge", [
      t.size ? `badge--${t.size}` : null,
      t.type ? `badge--${t.type}` : null,
      { "badge--clickable": o.isInteractive }
    ]]),
    to: t.to,
    href: t.href,
    onClick: t.click
  }, {
    default: b(() => [
      f("span", {
        class: h(["badge__inner", { "skeleton__background-color": t.skeleton }])
      }, [
        t.text ? (l(), d("span", {
          key: 0,
          "aria-hidden": t.alt ? "true" : null
        }, p(t.text), 9, Oo)) : m(e.$slots, "default", { key: 1 }),
        t.alt ? (l(), d("span", Ro, p(t.alt), 1)) : _("", !0)
      ], 2)
    ]),
    _: 3
  }, 8, ["class", "to", "href", "onClick"]);
}
const Uo = /* @__PURE__ */ v(Ao, [["render", xo]]), Io = {
  name: "UluBadgeStack",
  components: {
    UluBadge: Uo
  },
  props: {
    /**
     * Array of props for each badge
     */
    items: Array
  }
}, Eo = { class: "badge-stack" };
function zo(e, s, t, n, i, o) {
  const r = C("UluBadge");
  return l(), d("ul", Eo, [
    (l(!0), d(A, null, T(t.items, (a, c) => (l(), d("li", {
      class: "badge-stack__item",
      key: c
    }, [
      R(r, G({ ref_for: !0 }, a), null, 16)
    ]))), 128))
  ]);
}
const yf = /* @__PURE__ */ v(Io, [["render", zo]]), jo = {
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
    const { resolvedModifiers: s } = se({ props: e, baseClass: "button-verbose" });
    return { resolvedModifiers: s };
  },
  computed: {
    element() {
      return this.to ? Fe : this.href ? "a" : "button";
    },
    attrs() {
      const { to: e, href: s, download: t, target: n } = this, i = e ? { to: e } : s ? { href: s } : {};
      return s && (n && (i.target = n), t && (i.download = typeof t == "string" ? t : !0)), i;
    }
  }
}, Mo = {
  key: 1,
  class: "button-verbose__body"
};
function Fo(e, s, t, n, i, o) {
  const r = C("UluIcon");
  return l(), y(j(o.element), G({
    class: ["button-verbose", [
      {
        "button-verbose--inline": t.inline,
        "button-verbose--full-width": t.fullWidth
      },
      n.resolvedModifiers
    ]]
  }, o.attrs), {
    default: b(() => [
      e.$slots.title || t.title ? (l(), y(j(t.titleElement), {
        key: 0,
        class: "button-verbose__title"
      }, {
        default: b(() => [
          m(e.$slots, "title", {}, () => [
            w(p(t.title), 1)
          ])
        ]),
        _: 3
      })) : _("", !0),
      e.$slots.default || t.body ? (l(), d("span", Mo, [
        m(e.$slots, "default", {}, () => [
          w(p(t.body), 1)
        ])
      ])) : _("", !0),
      t.icon ? (l(), y(r, {
        key: 2,
        icon: t.icon,
        class: "button-verbose__icon",
        "aria-hidden": "true"
      }, null, 8, ["icon"])) : _("", !0)
    ]),
    _: 3
  }, 16, ["class"]);
}
const vf = /* @__PURE__ */ v(jo, [["render", Fo]]), Po = {
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
    const { resolvedModifiers: s } = se({ props: e, baseClass: "callout" });
    return { resolvedModifiers: s };
  }
};
function Bo(e, s, t, n, i, o) {
  return l(), d("div", {
    class: h(["callout", [n.resolvedModifiers, { "full-height": t.fullHeight }]])
  }, [
    m(e.$slots, "default")
  ], 2);
}
const pf = /* @__PURE__ */ v(Po, [["render", Bo]]), kt = (e, s) => {
  const t = !(s.to || s.href);
  return t || console.warn("'titleHref' and 'titleTo' can't be used with to or href (nesting links)"), t;
}, Lo = {
  name: "UluCard",
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
    titleTo: {
      type: [String, Object],
      validator: kt
    },
    /**
     * Will make title a link to href
     */
    titleHref: {
      type: String,
      validator: kt
    },
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
    href: {
      type: String
    },
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
     * Whether to proxy clicks of non-interactive elements (making whole card clickable)
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
  data() {
    const { proxyClickOptions: e, proxyClick: s, titleHref: t, titleTo: n } = this;
    return {
      proxyClickEnabled: s && (t || n) || null,
      resolvedProxyOptions: {
        selectorPrevent: "input, select, textarea, button, a, [tabindex='-1']",
        mousedownDurationPrevent: 250,
        ...e
      },
      cursorStyle: null,
      proxyStart: null,
      shouldProxy: !1
    };
  },
  setup(e) {
    const { resolvedModifiers: s } = se({ props: e, baseClass: "card" });
    return { resolvedModifiers: s };
  },
  computed: {
    resolvedElement() {
      const { cardElement: e, to: s, href: t } = this;
      return s ? Fe : t ? "a" : e;
    }
  },
  methods: {
    onMousedown({ target: e, timeStamp: s }) {
      if (!this.proxyClickEnabled) return;
      const { resolvedProxyOptions: t } = this, { selectorPrevent: n } = t;
      this.shouldProxy = !1, e.matches(n) || (this.shouldProxy = !0, this.proxyStart = s);
    },
    onMouseup({ timeStamp: e }) {
      if (!this.proxyClickEnabled) return;
      const { link: s } = this.$refs, { resolvedProxyOptions: t } = this, { mousedownDurationPrevent: n } = t;
      this.shouldProxy && e - this.proxyStart < n && s.click();
    }
  }
}, Ho = { class: "card__body" }, Do = { class: "card__main" }, Vo = ["href", "target"], No = {
  key: 0,
  class: "card__aside"
}, Wo = ["src", "alt"], Xo = {
  key: 1,
  class: "card__footer"
};
function Yo(e, s, t, n, i, o) {
  const r = C("router-link");
  return l(), y(j(o.resolvedElement), {
    class: h(["card", [
      {
        "card--horizontal": t.horizontal || t.horizontalCenter,
        "card--horizontal-center": t.horizontalCenter,
        "card--overlay": t.overlay
      },
      n.resolvedModifiers
    ]]),
    onMousedown: o.onMousedown,
    onMouseup: o.onMouseup,
    style: F({ cursor: i.cursorStyle }),
    target: t.target,
    to: t.to,
    href: t.href,
    "data-ulu-proxy-click-init": i.proxyClickEnabled
  }, {
    default: b(() => [
      f("div", Ho, [
        f("div", Do, [
          (l(), y(j(t.titleElement), {
            class: h(["card__title", t.classes.title])
          }, {
            default: b(() => [
              t.titleTo ? (l(), y(r, {
                key: 0,
                class: "card__title-link",
                to: t.titleTo,
                ref: "link"
              }, {
                default: b(() => [
                  m(e.$slots, "title", {}, () => [
                    w(p(t.title), 1)
                  ])
                ]),
                _: 3
              }, 8, ["to"])) : t.titleHref ? (l(), d("a", {
                key: 1,
                class: "card__title-link",
                href: t.titleHref,
                target: t.titleTarget,
                ref: "link"
              }, [
                m(e.$slots, "title", {}, () => [
                  w(p(t.title), 1)
                ])
              ], 8, Vo)) : m(e.$slots, "title", { key: 2 }, () => [
                w(p(t.title), 1)
              ])
            ]),
            _: 3
          }, 8, ["class"])),
          m(e.$slots, "body")
        ]),
        e.$slots.body ? (l(), d("div", No, [
          m(e.$slots, "aside")
        ])) : _("", !0)
      ]),
      e.$slots.image || t.imageSrc ? (l(), d("div", {
        key: 0,
        class: h(["card__image", [
          { "card__image--icon": t.imageIcon },
          t.classes.image
        ]])
      }, [
        m(e.$slots, "image", {}, () => [
          f("img", {
            src: t.imageSrc,
            alt: t.imageAlt
          }, null, 8, Wo)
        ])
      ], 2)) : _("", !0),
      e.$slots.footer ? (l(), d("div", Xo, [
        m(e.$slots, "footer")
      ])) : _("", !0)
    ]),
    _: 3
  }, 40, ["onMousedown", "onMouseup", "class", "style", "target", "to", "href", "data-ulu-proxy-click-init"]);
}
const bf = /* @__PURE__ */ v(Lo, [["render", Yo]]), qo = {
  name: "UluDefinitionList",
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
    }
  }
};
function Ko(e, s, t, n, i, o) {
  return l(), d("dl", {
    class: h(t.classes.list)
  }, [
    (l(!0), d(A, null, T(t.items, (r, a) => (l(), d("div", {
      key: a,
      class: h(t.classes.item)
    }, [
      f("dt", {
        class: h(t.classes.term)
      }, [
        m(e.$slots, "term", {
          item: r,
          index: a
        }, () => [
          w(p(r.term), 1)
        ])
      ], 2),
      f("dd", {
        class: h(t.classes.description)
      }, [
        m(e.$slots, "description", {
          item: r,
          index: a
        }, () => [
          w(p(r.description), 1)
        ])
      ], 2)
    ], 2))), 128))
  ], 2);
}
const wf = /* @__PURE__ */ v(qo, [["render", Ko]]), Go = {
  name: "UluExternalLink",
  components: {
    UluIcon: N
  },
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
  }
}, Zo = ["href", "target"], Jo = { class: "external-link__text" };
function Qo(e, s, t, n, i, o) {
  const r = C("UluIcon");
  return l(), d("a", {
    class: "external-link",
    href: t.href,
    target: t.target
  }, [
    f("span", Jo, [
      m(e.$slots, "default", {}, () => [
        w(p(t.text), 1)
      ])
    ]),
    R(r, {
      class: "external-link__icon margin-left-small-x display-inline",
      icon: t.icon || "type:externalLink"
    }, null, 8, ["icon"])
  ], 8, Zo);
}
const Sf = /* @__PURE__ */ v(Go, [["render", Qo]]), ei = {
  name: "UluList",
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
  computed: {
    listElement() {
      return this.ordered || this.forceOrdered ? "ol" : "ul";
    }
  }
};
function ti(e, s, t, n, i, o) {
  return l(), y(j(o.listElement), {
    class: h([
      {
        "list-ordered": t.ordered,
        "list-unordered": t.unordered,
        "list-lines": t.lines,
        "list-compact": t.compact
      },
      t.classes.list
    ]),
    style: F({
      listStyleType: t.listStyleType
    }),
    reversed: t.reversed,
    start: t.start
  }, {
    default: b(() => [
      (l(!0), d(A, null, T(t.items, (r, a) => (l(), d("li", {
        key: a,
        class: h(t.classes.listItem)
      }, [
        m(e.$slots, "default", {
          item: r,
          index: a
        }, () => [
          w(p(r), 1)
        ])
      ], 2))), 128))
    ]),
    _: 3
  }, 8, ["class", "style", "reversed", "start"]);
}
const kf = /* @__PURE__ */ v(ei, [["render", ti]]), si = {}, ni = { id: "main-content" };
function oi(e, s) {
  return l(), d("main", ni, [
    m(e.$slots, "default")
  ]);
}
const Cf = /* @__PURE__ */ v(si, [["render", oi]]), ii = {
  name: "UluSpokeSpinner",
  props: {
    /**
     * Type modifier for spinner (ie match scss style name)
     */
    type: String
  },
  computed: {
    modifierClass() {
      const { type: e } = this;
      return e ? `spoke-spinner--${e}` : null;
    }
  }
};
function ri(e, s, t, n, i, o) {
  return l(), d("div", {
    class: h(["spoke-spinner", o.modifierClass])
  }, s[0] || (s[0] = [
    f("div", { class: "spoke-spinner__spinner" }, [
      f("div"),
      f("div"),
      f("div"),
      f("div"),
      f("div"),
      f("div"),
      f("div"),
      f("div"),
      f("div"),
      f("div"),
      f("div"),
      f("div")
    ], -1)
  ]), 2);
}
const Tf = /* @__PURE__ */ v(ii, [["render", ri]]), ai = {
  name: "UluCheckboxMenu",
  props: {
    options: Array
  },
  methods: {
    getId(e) {
      return `checkbox-menu-opt-${e}`;
    }
  }
}, li = { class: "site-menu site-form" }, ci = { class: "site-menu__checkbox" }, ui = ["id", "onUpdate:modelValue"], di = ["for"];
function fi(e, s, t, n, i, o) {
  return l(), d("ul", li, [
    (l(!0), d(A, null, T(t.options, (r, a) => (l(), d("li", {
      class: "site-menu__item",
      key: a
    }, [
      f("div", ci, [
        me(f("input", {
          type: "checkbox",
          id: o.getId(a),
          "onUpdate:modelValue": (c) => r.checked = c
        }, null, 8, ui), [
          [Bs, r.checked]
        ]),
        f("label", {
          for: o.getId(a)
        }, [
          m(e.$slots, "default", {}, () => [
            w(p(r?.title || r?.text), 1)
          ])
        ], 8, di)
      ])
    ]))), 128))
  ]);
}
const $f = /* @__PURE__ */ v(ai, [["render", fi]]), hi = {
  name: "FileDisplay",
  props: {
    file: {
      required: !0,
      type: Object
    }
  },
  computed: {
    fileUrl() {
      return window.URL.createObjectURL(this.file);
    },
    fileSize() {
      const { size: e } = this.file, s = e / 1e6, t = e / 1e3, n = (i) => parseFloat(i.toFixed(2));
      return s > 1 ? `${n(s)}Mb` : t > 1 ? `${n(t)}Kb` : `${n(e)}B`;
    }
  }
}, mi = ["href", "download"], gi = { class: "margin-left-small-x" }, _i = { class: "tag tag--small tag--outline type-small-x" };
function yi(e, s, t, n, i, o) {
  const r = C("FaIcon");
  return l(), d("a", {
    class: "layout-flex-baseline",
    href: o.fileUrl,
    download: t.file.name
  }, [
    R(r, {
      class: "ui-icon",
      icon: ["far", e.$site.getIcon("file")]
    }, null, 8, ["icon"]),
    f("span", gi, [
      w(p(t.file.name) + " ", 1),
      f("span", _i, p(o.fileSize), 1)
    ])
  ], 8, mi);
}
const Af = /* @__PURE__ */ v(hi, [["render", yi]]);
let vi = 0;
const pi = {
  name: "FormFile",
  props: {
    label: {
      type: String,
      default: "Select File"
    },
    labelHidden: Boolean,
    noClasses: Boolean,
    multiple: Boolean,
    inputAttrs: Object
  },
  emits: ["filesChange"],
  data() {
    return {
      id: `file-input-id-${++vi}`
    };
  },
  methods: {
    onChangeFile(e) {
      this.$emit("filesChange", e.target.files);
    }
  }
}, bi = { class: "site-form__item site-form__item--file" }, wi = ["for"], Si = ["multiple", "id"];
function ki(e, s, t, n, i, o) {
  return l(), d("div", bi, [
    f("label", {
      class: h({ "hidden-visually": t.labelHidden }),
      for: i.id
    }, [
      m(e.$slots, "label", {}, () => [
        w(p(t.label), 1)
      ])
    ], 10, wi),
    f("input", G({
      type: "file",
      onChange: s[0] || (s[0] = (...r) => o.onChangeFile && o.onChangeFile(...r)),
      multiple: t.multiple,
      id: i.id
    }, t.inputAttrs), null, 16, Si)
  ]);
}
const Of = /* @__PURE__ */ v(pi, [["render", ki]]), Ci = {
  name: "FormMessage",
  props: {
    warning: Boolean,
    error: Boolean
  }
};
function Ti(e, s, t, n, i, o) {
  const r = C("FaIcon");
  return l(), d("p", {
    class: h(["site-form__description", {
      "site-form__error": t.error,
      "site-form__warning": t.warning
    }])
  }, [
    t.error ? (l(), y(r, {
      key: 0,
      icon: e.$site.getIcon("error")
    }, null, 8, ["icon"])) : _("", !0),
    t.warning ? (l(), y(r, {
      key: 1,
      icon: e.$site.getIcon("warning")
    }, null, 8, ["icon"])) : _("", !0),
    m(e.$slots, "default")
  ], 2);
}
const Rf = /* @__PURE__ */ v(Ci, [["render", Ti]]);
let $i = 0;
const Ai = {
  name: "FormSelect",
  props: {
    label: String,
    modelValue: String,
    options: Array,
    labelHidden: Boolean
  },
  data() {
    return {
      id: `select-id-${++$i}`
    };
  }
}, Oi = { class: "site-form__item site-form__item--select" }, Ri = ["for"], xi = ["id", "value"], Ui = ["value"];
function Ii(e, s, t, n, i, o) {
  return l(), d("div", Oi, [
    f("label", {
      class: h({ "hidden-visually": t.labelHidden }),
      for: i.id
    }, [
      m(e.$slots, "default", {}, () => [
        w(p(t.label), 1)
      ])
    ], 10, Ri),
    f("select", {
      id: i.id,
      value: t.modelValue,
      onInput: s[0] || (s[0] = (r) => e.$emit("update:modelValue", r.target.value))
    }, [
      s[1] || (s[1] = f("option", {
        disabled: "",
        value: ""
      }, "Please select one", -1)),
      (l(!0), d(A, null, T(t.options, (r, a) => (l(), d("option", {
        key: a,
        value: r.value
      }, p(r.text), 9, Ui))), 128))
    ], 40, xi)
  ]);
}
const xf = /* @__PURE__ */ v(Ai, [["render", Ii]]);
let Ei = 0;
const zi = {
  name: "FormText",
  props: {
    label: String,
    modelValue: String,
    labelHidden: Boolean
  },
  data() {
    return {
      id: `text-input-id-${++Ei}`
    };
  }
}, ji = { class: "site-form__item site-form__item--text" }, Mi = ["for"], Fi = ["value", "id"];
function Pi(e, s, t, n, i, o) {
  return l(), d("div", ji, [
    f("label", {
      class: h({ "hidden-visually": t.labelHidden }),
      for: i.id
    }, [
      m(e.$slots, "default", {}, () => [
        w(p(t.label), 1)
      ])
    ], 10, Mi),
    f("input", {
      type: "text",
      value: t.modelValue,
      onInput: s[0] || (s[0] = (r) => e.$emit("update:modelValue", r.target.value)),
      id: i.id
    }, null, 40, Fi)
  ]);
}
const Uf = /* @__PURE__ */ v(zi, [["render", Pi]]), Bi = {
  name: "SearchForm",
  props: {
    placeholder: {
      type: String,
      default: "Titles, keyword…"
    }
  }
}, Li = { class: "form-theme search-form type-small" }, Hi = { class: "search-form__field" }, Di = ["placeholder"], Vi = {
  class: "search-form__submit button button--primary",
  "aria-label": "Submit Search"
};
function Ni(e, s, t, n, i, o) {
  const r = C("FaIcon");
  return l(), d("div", Li, [
    f("div", Hi, [
      s[0] || (s[0] = f("label", { class: "hidden-visually" }, "Search", -1)),
      f("input", {
        class: "search-form__input",
        type: "text",
        id: "example-input",
        placeholder: t.placeholder
      }, null, 8, Di)
    ]),
    f("button", Vi, [
      R(r, {
        icon: e.$site.getIcon("search")
      }, null, 8, ["icon"])
    ])
  ]);
}
const If = /* @__PURE__ */ v(Bi, [["render", Ni]]), Ef = {
  __name: "UluAdaptiveLayout",
  setup(e) {
    const s = go("uluIsMobile");
    return (t, n) => !E(s) || !t.$slots.mobile ? m(t.$slots, "default", { key: 0 }) : m(t.$slots, "mobile", { key: 1 });
  }
};
function Wi(e) {
  var s;
  return e = e.replace(/^[^-_a-zA-Z]+/, "").replace(/^-(?:[-0-9]+)/, "-"), s = e && e.replace(/[^-_a-zA-Z0-9]+/g, "-"), s.toLowerCase();
}
function Xi(e, s = {
  columnFirst: "position-column-first",
  columnLast: "position-column-last",
  rowFirst: "position-row-first",
  rowLast: "position-row-last"
}) {
  const t = [...e.children], n = [];
  let i;
  t.forEach((o) => {
    const r = o.getBoundingClientRect().y;
    i !== r && n.push([]), n[n.length - 1].push(o), i = r, o.classList.remove(...Object.values(s));
  }), n.forEach((o, r) => {
    r === 0 && o.forEach((a) => a.classList.add(s.rowFirst)), r == n.length - 1 && o.forEach((a) => a.classList.add(s.rowLast)), o.forEach((a, c) => {
      c === 0 && a.classList.add(s.columnFirst), c == o.length - 1 && a.classList.add(s.columnLast);
    });
  });
}
const Yi = {
  name: "UluDataGrid",
  async mounted() {
    const e = () => Xi(this.$el);
    e(), this.resizeHandler = Pe(e, 200, !1, this), window.addEventListener("resize", this.resizeHandler);
  },
  beforeUnmount() {
    this.resizeHandler && window.removeEventListener("resize", this.resizeHandler);
  }
};
function qi(e, s, t, n, i, o) {
  return l(), d("div", null, [
    m(e.$slots, "default")
  ]);
}
const zf = /* @__PURE__ */ v(Yi, [["render", qi]]), Ki = {
  name: "UluTitleRail",
  components: {
    UluIcon: N
  },
  props: {
    icon: String,
    iconAlign: {
      type: String,
      default: "baseline"
    },
    classes: {
      type: Object,
      default: () => ({
        title: "h2",
        icon: "margin-right-small"
      })
    },
    title: String,
    titleElement: {
      type: String,
      default: "h2"
    },
    rule: Boolean
  }
}, Gi = {
  key: 0,
  class: "rail__item rail__item--pull"
};
function Zi(e, s, t, n, i, o) {
  const r = C("UluIcon");
  return l(), d("div", {
    class: h(["rail rail--title-rail", {
      "rail--rule": t.rule
    }])
  }, [
    f("div", {
      class: h(["rail__item rail__item--title", t.classes.itemTitle])
    }, [
      (l(), y(j(t.titleElement), {
        class: h(["layout-flex type-max-width-small no-margin", t.classes.title]),
        style: F({ alignItems: t.iconAlign })
      }, {
        default: b(() => [
          t.icon ? (l(), y(r, {
            key: 0,
            class: h(t.classes.icon),
            icon: t.icon
          }, null, 8, ["class", "icon"])) : _("", !0),
          m(e.$slots, "default", {}, () => [
            w(p(t.title), 1)
          ])
        ]),
        _: 3
      }, 8, ["class", "style"]))
    ], 2),
    e.$slots.end ? (l(), d("div", Gi, [
      m(e.$slots, "end")
    ])) : _("", !0)
  ], 2);
}
const jf = /* @__PURE__ */ v(Ki, [["render", Zi]]), Ji = {
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
        separator: "breadcrumb__separator"
      })
    }
  }
};
function Qi(e, s, t, n, i, o) {
  const r = C("router-link"), a = C("UluIcon");
  return t.items.length ? (l(), d("nav", {
    key: 0,
    class: h(t.classes.nav),
    "aria-label": "Breadcrumb"
  }, [
    f("ul", {
      class: h(t.classes.list)
    }, [
      (l(!0), d(A, null, T(t.items, (c, u) => (l(), d("li", {
        key: u,
        class: h(t.classes.item)
      }, [
        R(r, {
          to: c.to,
          class: h(t.classes.link),
          "aria-current": c.current ? "page" : null
        }, {
          default: b(() => [
            m(e.$slots, "default", { item: c }, () => [
              w(p(c.title), 1)
            ])
          ]),
          _: 2
        }, 1032, ["to", "class", "aria-current"]),
        u < t.items.length - 1 ? m(e.$slots, "separator", { key: 0 }, () => [
          R(a, {
            class: h(t.classes.separator),
            icon: t.separatorIcon || "type:pathSeparator"
          }, null, 8, ["class", "icon"])
        ]) : _("", !0)
      ], 2))), 128))
    ], 2)
  ], 2)) : _("", !0);
}
const Mf = /* @__PURE__ */ v(Ji, [["render", Qi]]), er = {
  name: "UluNavStrip",
  components: {
    UluMenu: ds
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
function tr(e, s, t, n, i, o) {
  const r = C("UluMenu");
  return l(), d("nav", {
    class: h(["nav-strip", {
      "nav-strip--rule": t.rule,
      "nav-strip--center": t.center,
      "nav-strip--right": t.right
    }])
  }, [
    R(r, {
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
const Ff = /* @__PURE__ */ v(er, [["render", tr]]), sr = {}, nr = {
  class: "site-skip-link hidden-visually-focusable",
  href: "#main-content"
};
function or(e, s) {
  return l(), d("a", nr, " Skip to main content ");
}
const Pf = /* @__PURE__ */ v(sr, [["render", or]]), ir = {
  name: "UluCondText",
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
function rr(e, s, t, n, i, o) {
  return t.text != null ? (l(), y(j(t.element), { key: 0 }, {
    default: b(() => [
      w(p(t.text), 1)
    ]),
    _: 1
  })) : _("", !0);
}
const Bf = /* @__PURE__ */ v(ir, [["render", rr]]), ar = {}, lr = { style: { display: "none" } };
function cr(e, s) {
  return l(), d("span", lr);
}
const Lf = /* @__PURE__ */ v(ar, [["render", cr]]), ur = {};
function dr(e, s) {
  const t = C("router-view");
  return l(), y(t);
}
const Hf = /* @__PURE__ */ v(ur, [["render", dr]]);
function Ce(e = 0, s = 100) {
  return e = Math.ceil(e), s = Math.floor(s), Math.floor(Math.random() * (s - e) + e);
}
const fr = {
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
        width: Ce(500, 1e3),
        height: Ce(500, 1e3)
      } : { width: s, height: t };
    }
  }
}, hr = ["src", "alt"];
function mr(e, s, t, n, i, o) {
  return l(), d("img", {
    src: o.src,
    alt: t.alt
  }, null, 8, hr);
}
const Df = /* @__PURE__ */ v(fr, [["render", mr]]), gr = {
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
function _r(e, s, t, n, i, o) {
  return l(!0), d(A, null, T(parseInt(t.amount), (r) => (l(), y(j(t.element), { key: r }, {
    default: b(() => s[0] || (s[0] = [
      w(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed semper erat tincidunt tellus vestibulum dictum. Fusce vel augue commodo, egestas diam sed, accumsan leo. Maecenas congue nec nisl et ullamcorper. Maecenas tincidunt, tortor et viverra eleifend, enim leo vestibulum ipsum, quis placerat mi nisi nec ex. Vivamus a justo volutpat, scelerisque elit eget, lacinia ex. Phasellus dapibus sollicitudin tortor, vitae suscipit nunc condimentum ut. Cras suscipit feugiat nibh nec consectetur. Phasellus vitae quam blandit, cursus metus ut, placerat mi. Sed tempor lacus non est interdum imperdiet nec quis metus. Praesent vel eleifend diam. Donec tincidunt eget purus sed posuere. ")
    ])),
    _: 2,
    __: [0]
  }, 1024))), 128);
}
const Vf = /* @__PURE__ */ v(gr, [["render", _r]]), yr = {
  name: "RouteAnnouncer",
  props: {
    /**
     * Allow user to bypass this functionality
     * - Function should return true if the page should be annouced
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
      const t = this.validator(e, s, this.$route), n = this.exclude.some((i) => i.endsWith("*") ? e.startsWith(i.slice(0, i.length - 1)) : e === i);
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
function vr(e, s, t, n, i, o) {
  return o.title ? (l(), d("p", {
    key: 0,
    tabindex: "-1",
    class: "hidden-visually",
    ref: "el"
  }, p(o.title), 513)) : _("", !0);
}
const Nf = /* @__PURE__ */ v(yr, [["render", vr]]), pr = {
  name: "AnimateNumber",
  props: {
    /**
     * Number to animate as it changes
     */
    value: Number
  },
  watch: {
    value() {
      Zs.to(this, {
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
function br(e, s, t, n, i, o) {
  return l(), d("span", null, [
    m(e.$slots, "default", { currentValue: i.currentValue }, () => [
      w(p(i.currentValue), 1)
    ])
  ]);
}
const Wf = /* @__PURE__ */ v(pr, [["render", br]]), wr = {
  name: "ProgressBar",
  props: {
    small: Boolean,
    label: {
      type: String,
      default: "Progress"
    },
    labelHidden: Boolean,
    total: Number,
    deficit: Number,
    amount: Number,
    iconOnLeft: Boolean
  },
  computed: {
    percentage() {
      const { amount: e, total: s } = this;
      return e / s * 100;
    },
    defPercentage() {
      const { deficit: e, total: s } = this;
      return e ? e / s * 100 : 0;
    },
    isComplete() {
      return this.amount >= this.total;
    },
    status() {
      return this.isComplete ? {
        type: "success",
        message: "Item Completed"
      } : this.deficit ? {
        type: "danger",
        message: "Item Has Deficit"
      } : null;
    }
  }
}, Sr = { class: "progress-bar__header" }, kr = {
  key: 0,
  class: "progress-bar__icon"
}, Cr = { class: "hidden-visually" }, Tr = { class: "progress-bar__track" }, $r = { class: "progress-bar__values" }, Ar = { class: "progress-bar__value progress-bar__value--amount" }, Or = {
  key: 0,
  class: "progress-bar__value progress-bar__value--deficit color-status is-danger"
}, Rr = { class: "progress-bar__value progress-bar__value--total" };
function xr(e, s, t, n, i, o) {
  const r = C("StatusIcon");
  return l(), d("div", {
    class: h(["progress-bar", {
      "progress-bar--small": t.small,
      "progress-bar--icon-left": t.iconOnLeft,
      "type-small": t.small
    }])
  }, [
    f("div", Sr, [
      f("strong", {
        class: h(["progress-bar__label", {
          "type-normal": t.small,
          "hidden-visually": t.labelHidden
        }])
      }, p(t.label), 3),
      o.status ? (l(), d("div", kr, [
        R(r, {
          type: o.status.type
        }, null, 8, ["type"]),
        f("span", Cr, p(o.status.message), 1)
      ])) : _("", !0)
    ]),
    f("div", Tr, [
      f("div", {
        class: "progress-bar__bar",
        style: F(`width: ${o.percentage}%`)
      }, null, 4),
      t.deficit ? (l(), d("div", {
        key: 0,
        class: "progress-bar__bar--deficit",
        style: F(`width: ${o.defPercentage}%`)
      }, null, 4)) : _("", !0)
    ]),
    f("div", $r, [
      f("div", Ar, [
        s[0] || (s[0] = f("strong", { class: "hidden-visually" }, "Amount:", -1)),
        w(" " + p(t.amount), 1)
      ]),
      t.deficit > 0 ? (l(), d("div", Or, [
        s[1] || (s[1] = f("strong", { class: "hidden-visually" }, "Deficit: ", -1)),
        w(" -" + p(t.deficit), 1)
      ])) : _("", !0),
      f("div", Rr, [
        s[2] || (s[2] = f("strong", { class: "hidden-visually" }, "Total:", -1)),
        w(" " + p(t.total), 1)
      ])
    ])
  ], 2);
}
const Xf = /* @__PURE__ */ v(wr, [["render", xr]]);
let Ur = 0;
const Ir = {
  name: "ProgressDonut",
  props: {
    percentage: {
      type: Number,
      default: 0
    },
    small: Boolean,
    smallBelow: Boolean,
    neutral: Boolean,
    duration: {
      type: Number,
      default: 500
    },
    easing: {
      type: String,
      default: "ease-in"
    }
  },
  data() {
    return {
      uid: `progress-donut-${++Ur}`
    };
  },
  watch: {
    // Need to reanimate if value changes
    percentage(e, s) {
      e !== s && this.animate(this.normalize(s));
    }
  },
  computed: {
    endDasharray() {
      return `${this.normalize(this.percentage)} 100`;
    }
  },
  methods: {
    normalize(e) {
      return e === 100 ? 101 : e;
    },
    animate(e = 0) {
      const { pie: s } = this.$refs;
      if (!s.animate) return;
      const { duration: t, easing: n, endDasharray: i } = this, o = { strokeDasharray: [`${e} 100`, i] };
      s.animate(o, { duration: t, easing: n, fill: "forwards" });
    }
  },
  mounted() {
    this.animate();
  }
}, Er = { class: "progress-donut__chart" }, zr = {
  class: "progress-donut__chart-svg",
  viewBox: "0 0 32 32"
}, jr = ["r"], Mr = {
  key: 0,
  class: "progress-donut__chart-value"
}, Fr = {
  key: 0,
  class: "progress-donut__value type-small-x"
};
function Pr(e, s, t, n, i, o) {
  return l(), d("div", {
    class: h(["progress-donut", {
      "progress-donut--small": t.small,
      "progress-donut--small-below": t.smallBelow,
      "progress-donut--status-low": !t.neutral && t.percentage < 30,
      "progress-donut--status-incomplete": !t.neutral && t.percentage >= 30 && t.percentage < 100,
      "progress-donut--status-complete": !t.neutral && t.percentage >= 100
    }])
  }, [
    s[0] || (s[0] = f("strong", { class: "hidden-visually" }, "Course Progress", -1)),
    f("div", Er, [
      (l(), d("svg", zr, [
        f("circle", {
          class: "progress-donut__chart-pie",
          ref: "pie",
          r: "16",
          cx: "16",
          cy: "16",
          style: F({ strokeDasharray: o.endDasharray })
        }, null, 4),
        f("circle", {
          class: "progress-donut__chart-mask",
          r: t.small ? 7 : 11,
          cx: "16",
          cy: "16"
        }, null, 8, jr)
      ])),
      t.small ? _("", !0) : (l(), d("strong", Mr, p(t.percentage) + "% ", 1))
    ]),
    t.small ? (l(), d("strong", Fr, p(t.percentage) + "% ", 1)) : _("", !0)
  ], 2);
}
const Yf = /* @__PURE__ */ v(Ir, [["render", Pr]]);
function Br(e, s) {
  return !s || !Array.isArray(s) ? [] : s.map((t) => {
    const n = /* @__PURE__ */ new Set(), i = t.getValue || ((r) => r[t.uid]);
    e.forEach((r) => {
      const a = i(r);
      Array.isArray(a) ? a.forEach((c) => c && n.add(c)) : a && n.add(a);
    });
    const o = t.getLabel || ((r) => r);
    return {
      ...t,
      children: [...n].sort().map((r) => ({
        uid: r,
        label: o(r),
        selected: !1
      }))
    };
  });
}
function qf(e, s = {}) {
  const t = ($, B) => {
    const L = $[B];
    return L === null || typeof L > "u" ? [] : Array.isArray(L) ? L : [L];
  }, {
    initialFacets: n,
    facetFields: i,
    initialSearchValue: o = "",
    initialSortType: r = "az",
    noDefaultSorts: a = !1,
    extraSortTypes: c = {},
    searchOptions: u = {},
    getItemFacet: g = t,
    getSortValue: S = ($) => $.title || $.label || ""
  } = s, O = ($) => $.sort((B, L) => {
    const X = S(B), W = S(L);
    return X && W ? String(X).localeCompare(String(W)) : X ? -1 : W ? 1 : 0;
  }), z = {
    az: { text: "A-Z", sort: O },
    za: { text: "Z-A", sort: ($) => O($).reverse() }
  };
  function x($) {
    return ($ || []).map((B) => ({
      ...B,
      open: B.open || !1,
      children: B.children.map((L) => ({
        ...L,
        selected: L.selected || !1
      })),
      selectedCount: 0
    }));
  }
  const P = k(() => !i || !e.value?.length ? null : Br(e.value, i)), H = M(x(n || P.value)), J = M(o), xe = M(r);
  i && !n && ts(P, ($) => {
    H.value = x($);
  });
  const ne = k(() => ({
    ...a ? {} : z,
    ...c
  })), Q = k(() => ({
    shouldSort: !0,
    keys: ["title", "label", "description", "author"],
    ...u
  })), ye = k(() => {
    const $ = [];
    return H.value.forEach((B) => {
      const { name: L, uid: X, children: W } = B;
      let Ue = 0, ft = !1;
      W && W.forEach((ht) => {
        ht.selected && (++Ue, ft || ($.push({ uid: X, name: L, children: [] }), ft = !0), $[$.length - 1].children.push(ht));
      }), B.selectedCount = Ue;
    }), $;
  }), ve = k(() => ye.value.length ? e.value.filter(($) => ye.value.every((B) => {
    const L = g($, B.uid);
    return L && L.length ? B.children.some((X) => L.includes(X.uid)) : !1;
  })) : e.value), pe = k(() => J.value?.length ? new Js(ve.value, Q.value).search(J.value).map((B) => B.item) : ve.value), D = k(() => {
    const $ = ne.value[xe.value]?.sort;
    return typeof $ != "function" ? pe.value : $([...pe.value]);
  });
  function ee() {
    H.value.forEach(($) => {
      $.children && $.children.forEach((B) => B.selected = !1);
    });
  }
  function le({ groupUid: $, facetUid: B, selected: L }) {
    const X = H.value.find((W) => W.uid === $);
    if (X) {
      const W = X.children.find((Ue) => Ue.uid === B);
      W && (W.selected = L);
    }
  }
  return {
    // State
    facets: H,
    searchValue: J,
    selectedSort: xe,
    sortTypes: ne,
    // Computed
    displayItems: D,
    selectedFacets: ye,
    // Methods
    clearFilters: ee,
    handleFacetChange: le
  };
}
const Lr = { class: "UluFacets__facet-list" }, Hr = ["id", "checked", "onChange"], Dr = ["for"], Ct = {
  __name: "UluFacetsList",
  props: {
    groupUid: String,
    children: Array,
    classFacet: String
  },
  emits: ["facet-change"],
  setup(e, { emit: s }) {
    const t = e, n = s;
    function i(o) {
      return `facet-${t.groupUid}-${o.uid}`;
    }
    return (o, r) => (l(), d("ul", Lr, [
      (l(!0), d(A, null, T(e.children, (a) => (l(), d("li", {
        class: h(["UluFacets__facet", e.classFacet]),
        key: a.uid
      }, [
        f("input", {
          class: "UluFacets__facet-checkbox",
          id: i(a),
          type: "checkbox",
          checked: a.selected,
          onChange: (c) => n("facet-change", { groupUid: e.groupUid, facetUid: a.uid, selected: c.target.checked })
        }, null, 40, Hr),
        f("label", {
          class: "UluFacets__facet-label",
          for: i(a)
        }, p(a.label), 9, Dr)
      ], 2))), 128))
    ]));
  }
}, Vr = { class: "UluFacetsFilters" }, Kf = {
  __name: "UluFacetsFilters",
  props: {
    classes: {
      type: Object,
      default: () => ({})
    },
    maxVisible: {
      type: Number,
      default: 5
    },
    facets: {
      type: Array,
      default: () => []
    }
  },
  emits: ["facet-change"],
  setup(e, { emit: s }) {
    const t = s;
    return (n, i) => (l(), d("div", Vr, [
      (l(!0), d(A, null, T(e.facets, (o) => (l(), y(bt, {
        class: h(["UluFacets__group", e.classes.group]),
        classToggle: ["UluFacets__group-toggle", e.classes.groupToggle],
        classContent: ["UluFacets__group-content", e.classes.groupContent],
        key: o.uid,
        group: o,
        startOpen: o.open,
        clickOutsideCloses: !1,
        closeOnEscape: !1,
        transitionHeight: !0
      }, {
        toggle: b(({ isOpen: r }) => [
          m(n.$slots, "groupToggle", {
            group: o,
            isOpen: r
          }, () => [
            w(p(o.name), 1)
          ])
        ]),
        default: b(() => [
          R(Ct, {
            children: o.children.slice(0, e.maxVisible),
            groupUid: o.uid,
            classFacet: e.classes.facet,
            onFacetChange: i[0] || (i[0] = (r) => t("facet-change", r))
          }, null, 8, ["children", "groupUid", "classFacet"]),
          o.children.length > e.maxVisible ? (l(), y(bt, {
            key: 0,
            class: h(["UluFacets__more-facets", e.classes.moreFacets]),
            clickOutsideCloses: !1,
            closeOnEscape: !1,
            transitionHeight: !0
          }, {
            toggle: b(({ isOpen: r }) => [
              w(p(r ? "- Less" : "+ More"), 1)
            ]),
            default: b(() => [
              R(Ct, {
                children: o.children.slice(e.maxVisible),
                groupUid: o.uid,
                classFacet: e.classes.facet,
                onFacetChange: i[1] || (i[1] = (r) => t("facet-change", r))
              }, null, 8, ["children", "groupUid", "classFacet"])
            ]),
            _: 2
          }, 1032, ["class"])) : _("", !0)
        ]),
        _: 2
      }, 1032, ["class", "classToggle", "classContent", "group", "startOpen"]))), 128))
    ]));
  }
}, Nr = { class: "UluFacetsResults" }, Wr = {
  key: 1,
  class: "UluFacetsResults__empty"
}, Gf = {
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
      default: "UluFacetsFade"
    }
  },
  setup(e) {
    return (s, t) => (l(), d("div", Nr, [
      e.items.length ? (l(), y(Qt, {
        key: 0,
        tag: e.tag,
        name: e.transitionName,
        class: "UluFacetsResults__list"
      }, {
        default: b(() => [
          (l(!0), d(A, null, T(e.items, (n, i) => (l(), d("li", {
            class: "UluFacetsResults__item",
            key: n.id || i
          }, [
            m(s.$slots, "item", {
              item: n,
              index: i
            })
          ]))), 128))
        ]),
        _: 3
      }, 8, ["tag", "name"])) : (l(), d("div", Wr, [
        m(s.$slots, "empty", {}, () => [
          t[0] || (t[0] = f("p", null, "No matching items found.", -1))
        ])
      ]))
    ]));
  }
}, Xr = { class: "UluFacets__keyword-search" }, Yr = ["placeholder"], Zf = {
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
    let i = 0;
    const o = `facet-view-keyword-${++i}`, r = k({
      get() {
        return t.modelValue;
      },
      set(a) {
        n("update:modelValue", a);
      }
    });
    return (a, c) => (l(), d("div", Xr, [
      f("label", {
        class: h(e.classes.searchLabel),
        for: o
      }, c[1] || (c[1] = [
        f("strong", null, "Search", -1)
      ]), 2),
      me(f("input", {
        id: o,
        class: h(e.classes.searchInput),
        "onUpdate:modelValue": c[0] || (c[0] = (u) => r.value = u),
        type: "text",
        placeholder: e.placeholder
      }, null, 10, Yr), [
        [Ls, r.value]
      ])
    ]));
  }
}, qr = { class: "UluFacetsSidebarLayout" }, Kr = { class: "UluFacetsSidebarLayout__header" }, Gr = { class: "UluFacetsSidebarLayout__body" }, Zr = { class: "UluFacetsSidebarLayout__sidebar" }, Jr = { class: "UluFacetsSidebarLayout__main" }, Jf = {
  __name: "UluFacetsSidebarLayout",
  setup(e) {
    return (s, t) => (l(), d("div", qr, [
      f("div", Kr, [
        m(s.$slots, "header")
      ]),
      f("div", Gr, [
        f("div", Zr, [
          m(s.$slots, "sidebar")
        ]),
        f("div", Jr, [
          m(s.$slots, "main")
        ])
      ])
    ]));
  }
}, Qr = ["for"], ea = ["value", "id"], ta = ["value"], Qf = {
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
    const n = s, i = M(`ulu-facet-sort-${++t}`);
    return (o, r) => (l(), d("div", {
      class: h(["UluFacetsSort", e.classes.sortForm])
    }, [
      f("label", {
        for: i.value,
        class: h(e.classes.sortFormLabel)
      }, [
        m(o.$slots, "default", {}, () => [
          r[1] || (r[1] = w("Sort:"))
        ])
      ], 10, Qr),
      f("select", {
        value: e.modelValue,
        onChange: r[0] || (r[0] = (a) => n("update:modelValue", a.target.value)),
        id: i.value,
        class: h(e.classes.sortFormSelect)
      }, [
        (l(!0), d(A, null, T(e.sortTypes, (a, c) => (l(), d("option", {
          value: c,
          key: c
        }, p(a.text), 9, ta))), 128))
      ], 42, ea)
    ], 2));
  }
}, fs = Symbol(), hs = Symbol(), Be = Symbol(), sa = {
  name: "ScrollAnchors",
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
      [Be]: k(() => this.sections),
      [fs]: (e) => {
        const { titleId: s, title: t } = e, { element: n } = e.$refs;
        this.sections.push({
          instance: e,
          titleId: s,
          title: t,
          element: n,
          active: !1
        }), this.update();
      },
      [hs]: (e) => {
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
      let i = 0;
      const o = (r) => {
        r.forEach(({ target: a, isIntersecting: c }) => {
          const u = this.getSectionIndex(a), g = a.offsetTop, S = s[u], O = u === 0 && i > g, z = u === s.length - 1 && i < g;
          S && this.$nextTick(() => {
            c ? (t(S), S.active = !0) : (O && !n || z && S.active) && t(), this.$emit("sectionChange", {
              section: S,
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
}, na = { class: "scroll-anchors" };
function oa(e, s, t, n, i, o) {
  return l(), d("div", na, [
    m(e.$slots, "default")
  ]);
}
const eh = /* @__PURE__ */ v(sa, [["render", oa]]), ia = {
  name: "ScrollAnchorsNav",
  inject: {
    sections: { from: Be }
  },
  props: {
    element: {
      type: String,
      default: "nav"
    }
  }
}, ra = ["href"];
function aa(e, s, t, n, i, o) {
  return o.sections.length ? (l(), y(j(t.element), {
    key: 0,
    class: "scroll-anchors__nav"
  }, {
    default: b(() => [
      f("ul", null, [
        (l(!0), d(A, null, T(o.sections, (r, a) => (l(), d("li", {
          key: a,
          class: h({ "is-active": r.active })
        }, [
          f("a", {
            class: h({ "is-active": r.active }),
            href: `#${r.titleId}`
          }, p(r.title), 11, ra)
        ], 2))), 128))
      ])
    ]),
    _: 1
  })) : _("", !0);
}
const th = /* @__PURE__ */ v(ia, [["render", aa]]);
function ms(e) {
  requestAnimationFrame(() => {
    const s = new MessageChannel();
    s.port1.onmessage = e, s.port2.postMessage(void 0);
  });
}
const la = {
  name: "ScrollAnchorsNavAnimated",
  inject: {
    sections: { from: Be }
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
      const i = this.linkRefs[n], { offsetTop: o, offsetHeight: r } = i;
      return {
        y: o,
        height: r,
        initial: this.inidica
      };
    }
  },
  watch: {
    indicatorStyles(e) {
      e && !this.indicatorAnimReady && ms(() => {
        this.indicatorAnimReady = !0;
      });
    }
  },
  methods: {
    addLinkRef(e, s) {
      this.linkRefs[e] = s;
    }
  }
}, ca = { class: "scroll-anchors__rail" }, ua = ["href"];
function da(e, s, t, n, i, o) {
  return o.sections.length ? (l(), y(j(t.element), {
    key: 0,
    class: "scroll-anchors__nav scroll-anchors__nav--animated"
  }, {
    default: b(() => [
      f("ul", ca, [
        (l(!0), d(A, null, T(o.sections, (r, a) => (l(), d("li", {
          key: a,
          class: h({ "is-active": r.active })
        }, [
          f("a", {
            class: h({ "is-active": r.active }),
            ref_for: !0,
            ref: (c) => o.addLinkRef(a, c),
            href: `#${r.titleId}`
          }, p(r.title), 11, ua)
        ], 2))), 128))
      ]),
      f("div", {
        class: h(["scroll-anchors__indicator", {
          "scroll-anchors__indicator--can-transition": i.indicatorAnimReady
        }]),
        ref: "indicator",
        style: F({
          opacity: o.indicatorStyles ? "1" : "0",
          transform: `translateY(${o.indicatorStyles.y}px)`,
          height: `${o.indicatorStyles.height}px`
        })
      }, null, 6)
    ]),
    _: 1
  })) : _("", !0);
}
const sh = /* @__PURE__ */ v(la, [["render", da]]), fa = {
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
    register: { from: fs },
    unregister: { from: hs },
    sections: { from: Be, default: () => k(() => []) }
  },
  data() {
    const { anchorId: e, title: s } = this;
    return {
      titleId: e || `sas-title-${Wi(s)}`
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
function ha(e, s, t, n, i, o) {
  return l(), d("div", {
    class: h([t.wrapperClass, { [t.activeClass]: t.activeClass && o.section?.active }]),
    ref: "element"
  }, [
    (l(), y(j(t.titleElement), {
      class: h(t.titleClass),
      id: i.titleId
    }, {
      default: b(() => [
        w(p(t.title), 1)
      ]),
      _: 1
    }, 8, ["class", "id"])),
    m(e.$slots, "default", { section: o.section })
  ], 2);
}
const nh = /* @__PURE__ */ v(fa, [["render", ha]]), ma = {
  name: "ShowSkeleton",
  props: {
    when: Boolean
  }
};
function ga(e, s, t, n, i, o) {
  const r = C("SkeletonTextInline");
  return t.when ? (l(), y(r, {
    key: 1,
    class: "skeleton"
  })) : m(e.$slots, "default", { key: 0 });
}
const oh = /* @__PURE__ */ v(ma, [["render", ga]]);
function _a(e, s) {
  return [...Array(e)].map((t, n) => s(n));
}
function ih(e, s) {
  var t = e.indexOf(s);
  t > -1 && e.splice(t, 1);
}
const ya = {
  name: "SkeletonContent",
  props: {
    lines: {
      type: Number,
      default: 6
    }
  },
  methods: {
    randomInt: Ce
  },
  computed: {
    /**
     * Creates the segments (like words) for the given line count
     * - Uses random number of segments and makes sure to fill the line between 70% - 100%
     */
    linesWithSegments() {
      return _a(this.lines, () => {
        const s = Ce(70, 100);
        let t = 0;
        const n = () => {
          const r = s - t, a = Ce(15, r);
          return t += a, a;
        }, i = [];
        for (; t < s - 15; )
          i.push(n());
        const o = () => i.reduce((r, a) => r + a, 0);
        for (; o() >= s && i.pop(); )
          ;
        return i.map((r) => ({ width: r, alt: Math.random() < 0.5 }));
      });
    }
  }
}, va = { class: "skeleton" };
function pa(e, s, t, n, i, o) {
  return l(), d("div", va, [
    (l(!0), d(A, null, T(o.linesWithSegments, (r, a) => (l(), d("div", { key: a }, [
      (l(!0), d(A, null, T(r, (c) => (l(), d("span", {
        key: c,
        class: h(["skeleton__text skeleton__text--inline", { skeleton__alt: c.alt }]),
        style: F({ width: `${c.width}%` })
      }, null, 6))), 128))
    ]))), 128))
  ]);
}
const rh = /* @__PURE__ */ v(ya, [["render", pa]]), ba = {
  name: "SkeletonMedia"
}, wa = { class: "skeleton__block skeleton__block--media layout-flex-center-all" };
function Sa(e, s, t, n, i, o) {
  const r = C("FaIcon");
  return l(), d("div", wa, [
    R(r, {
      style: { "font-size": "2rem" },
      icon: "image"
    })
  ]);
}
const ah = /* @__PURE__ */ v(ba, [["render", Sa]]), ka = {
  name: "SkeletonTextInline"
}, Ca = { class: "skeleton__text skeleton__text--inline" };
function Ta(e, s, t, n, i, o) {
  return l(), d("span", Ca);
}
const lh = /* @__PURE__ */ v(ka, [["render", Ta]]), $a = {
  name: "SlideShow",
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
      const s = e === "next", { scrollAmount: t } = this, { scrollLeft: n, offsetWidth: i } = this.getScrollData();
      return typeof t == "function" ? t(e, this.$refs) : typeof t == "number" ? s ? n + t : n - t : s ? n + i : n - i;
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
        const i = () => {
          s.element.focus(this.focusOptions), t.removeEventListener("scrollend", i);
        };
        t.addEventListener("scrollend", i), this.scrollTo(n, this.scrollBehaviorNav);
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
      const { observerOptions: e } = this, { track: s, nav: t } = this.$refs, n = (i) => {
        i.forEach((o) => {
          this.$nextTick(() => {
            const r = this.getSlideByElement(o.target);
            r.active = o.isIntersecting, this.$emit("slideChange", { slide: r, track: s, nav: t });
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
}, Aa = { class: "slideshow" }, Oa = {
  class: "slideshow__control-context",
  ref: "context"
}, Ra = {
  class: "slideshow__track-crop",
  ref: "crop"
}, xa = {
  class: "slideshow__track",
  ref: "track"
}, Ua = ["tabindex"], Ia = { class: "slideshow__controls" }, Ea = { class: "slideshow__controls-item slideshow__controls-item--previous" }, za = ["disabled"], ja = { class: "slideshow__controls-item slideshow__controls-item--next" }, Ma = ["disabled"], Fa = {
  key: 0,
  class: "slideshow__nav",
  ref: "nav"
}, Pa = ["onClick"], Ba = { class: "hidden-visually" };
function La(e, s, t, n, i, o) {
  const r = C("FaIcon");
  return l(), d("div", Aa, [
    f("div", Oa, [
      f("div", Ra, [
        f("ul", xa, [
          (l(!0), d(A, null, T(i.slides, (a, c) => (l(), d("li", {
            class: h(["slideshow__slide", { "is-active": a.active }]),
            key: c,
            tabindex: t.slideFocusable ? "0" : "-1",
            ref_for: !0,
            ref: (u) => {
              a.element = u;
            }
          }, [
            m(e.$slots, "slide", {
              item: a.item,
              index: c
            })
          ], 10, Ua))), 128))
        ], 512)
      ], 512),
      f("ul", Ia, [
        f("li", Ea, [
          f("button", {
            class: "slideshow__control-button slideshow__control-button--previous",
            "aria-label": "Scroll Right",
            onClick: s[0] || (s[0] = (...a) => o.previous && o.previous(...a)),
            disabled: !o.canScrollLeft
          }, [
            R(r, {
              class: "slideshow__control-icon",
              icon: "fas fa-chevron-left"
            })
          ], 8, za)
        ]),
        f("li", ja, [
          f("button", {
            class: "slideshow__control-button slideshow__control-button--next",
            "aria-label": "Scroll Left",
            onClick: s[1] || (s[1] = (...a) => o.next && o.next(...a)),
            disabled: !o.canScrollRight
          }, [
            R(r, {
              class: "slideshow__control-icon",
              icon: "fas fa-chevron-right"
            })
          ], 8, Ma)
        ])
      ])
    ], 512),
    t.noNav ? _("", !0) : (l(), d("ul", Fa, [
      (l(!0), d(A, null, T(i.slides, (a, c) => (l(), d("li", {
        class: h(["slideshow__nav-item", { "is-active": a.active }]),
        ref_for: !0,
        ref: (u) => {
          a.navElement = u;
        },
        key: c
      }, [
        f("button", {
          class: h(["slideshow__nav-button", { "is-active": a.active }]),
          onClick: (u) => o.to(c)
        }, [
          m(e.$slots, "nav", {
            item: a.item,
            index: c,
            active: a.active
          }, () => [
            f("span", Ba, "Item " + p(c + 1), 1)
          ])
        ], 10, Pa)
      ], 2))), 128))
    ], 512))
  ]);
}
const Ha = /* @__PURE__ */ v($a, [["render", La]]), Da = {
  name: "ImageSlideShow",
  components: {
    UluSlideShow: Ha
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
      const { offsetWidth: i, scrollLeft: o } = s, { offsetLeft: r, offsetWidth: a } = n, c = o + i, u = r + a;
      let g = null;
      console.log("left/right", o, c), t && n && (u > c ? g = o + (u - c) : r < o && (g = r), g !== null && s.scrollTo({ left: g, top: 0, behavior: "smooth" }));
    }
  }
}, Va = ["src", "alt"], Na = { class: "slideshow__image-actions" }, Wa = ["src", "alt"];
function Xa(e, s, t, n, i, o) {
  const r = C("AppButton"), a = C("UluSlideShow");
  return l(), y(a, {
    class: "slideshow--images",
    items: t.images,
    onSlideChange: o.slideChange
  }, {
    slide: b(({ item: c }) => [
      f("img", {
        src: c.src,
        alt: c.alt
      }, null, 8, Va),
      f("div", Na, [
        t.selectButton ? (l(), y(r, {
          key: 0,
          class: "type-small",
          icon: "plus",
          small: "",
          iconBefore: ""
        }, {
          default: b(() => s[0] || (s[0] = [
            w(" Select ")
          ])),
          _: 1,
          __: [0]
        })) : _("", !0)
      ])
    ]),
    nav: b(({ index: c }) => [
      f("img", {
        src: t.images[c].src,
        alt: `View image ${c}`
      }, null, 8, Wa)
    ]),
    _: 1
  }, 8, ["items", "onSlideChange"]);
}
const ch = /* @__PURE__ */ v(Da, [["render", Xa]]), Ya = {
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
function qa(e, s, t, n, i, o) {
  return l(), d("li", {
    class: h(["slideshow__slide", { "is-active": t.active }])
  }, [
    m(e.$slots, "default")
  ], 2);
}
const uh = /* @__PURE__ */ v(Ya, [["render", qa]]), Ka = {
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
}, Ga = ["id"], Za = ["innerHTML"];
function Ja(e, s, t, n, i, o) {
  return l(!0), d(A, null, T(t.rows, (r, a) => (l(), d("tr", {
    key: `br-${a}`,
    id: t.optionalAttr(t.isActual && r.id),
    class: h(t.resolveClasses(t.classes.row, { row: r.data, rowIndex: a, isActual: t.isActual, foot: t.foot })),
    style: F({
      height: r.height
    })
  }, [
    (l(!0), d(A, null, T(t.rowColumns, (c, u) => (l(), y(j(c.rowHeader ? "th" : "td"), {
      id: t.optionalAttr(t.isActual && c.rowHeader && c.getRowHeaderId(a)),
      scope: t.optionalAttr(t.isActual && c.rowHeader && "row"),
      key: `bc-${u}`,
      headers: t.optionalAttr(t.isActual && t.getCellHeaders(c, a)),
      class: h(t.resolveClasses(c.class, { column: c, index: u, isActual: t.isActual, row: r, rowIndex: a, foot: t.foot })),
      style: F({
        width: t.columnWidth
      })
    }, {
      default: b(() => [
        e.$slots[c.slot] ? m(e.$slots, c.slot, {
          key: 0,
          row: r.data,
          column: c,
          rowIndex: a,
          index: u,
          foot: t.foot,
          isActual: t.isActual
        }) : c.html ? (l(), d("div", {
          key: 1,
          innerHTML: t.value({ row: r, column: c, rowIndex: a, isActual: t.isActual, foot: t.foot })
        }, null, 8, Za)) : (l(), d(A, { key: 2 }, [
          w(p(t.value({ row: r, column: c, rowIndex: a, isActual: t.isActual, foot: t.foot })), 1)
        ], 64))
      ]),
      _: 2
    }, 1032, ["id", "scope", "headers", "class", "style"]))), 128))
  ], 14, Ga))), 128);
}
const Qa = /* @__PURE__ */ v(Ka, [["render", Ja]]), el = {
  name: "UluTableStickyTable",
  components: {
    UluTableStickyRows: Qa
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
      const { id: i } = e, o = t[i];
      o && this.$emit("actualHeaderRemoved", o), this.$emit("actualHeaderAdded", s), t[i] = s;
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
      const t = e.headers.join(" "), n = e.getRowHeaders(s), i = n.length ? " " : "";
      return `${t}${i}${n}`;
    },
    getHeaderHeaders(e) {
      const s = e.headers.filter((t) => t !== e.id);
      if (s.length)
        return s.join(" ");
    }
  }
}, tl = ["aria-hidden"], sl = {
  key: 0,
  class: "table-sticky__caption"
}, nl = ["id"], ol = ["id", "rowspan", "colspan", "data-child-columns", "aria-sort", "scope", "headers"], il = ["innerHTML"], rl = {
  class: "table-sticky__sort-icon",
  "aria-hidden": "true"
}, al = { class: "table-sticky__sort-icon-inner" }, ll = ["innerHTML"], cl = { key: 1 }, ul = { key: 2 };
function dl(e, s, t, n, i, o) {
  const r = C("UluTableStickyRows");
  return l(), d("table", {
    class: h(t.resolveClasses(t.classes.table, { isActual: t.isActual })),
    "aria-hidden": t.isActual ? "false" : "true"
  }, [
    t.caption ? (l(), d("caption", sl, p(t.caption), 1)) : _("", !0),
    f("thead", null, [
      (l(!0), d(A, null, T(t.headerRows, (a, c) => (l(), d("tr", {
        key: `hr-${c}`,
        id: o.optionalAttr(t.isActual && a.id),
        class: h(t.resolveClasses(t.classes.rowHeader, { row: a, rowIndex: c, isActual: t.isActual })),
        style: F({
          height: a.height
        })
      }, [
        (l(!0), d(A, null, T(a.columns, (u, g) => (l(), d("th", {
          key: `hc-${g}`,
          id: o.optionalAttr(t.isActual && u.id),
          rowspan: u.rowspan,
          colspan: u.colspan,
          "data-child-columns": u.columns && u.columns.length,
          class: h([
            {
              "sort-active": u.sortApplied,
              "sort-ascending": u.sortApplied && u.sortAscending,
              "sort-descending": u.sortApplied && !u.sortAscending
            },
            t.resolveClasses(u.classHeader, { column: u, index: g, isActual: t.isActual })
          ]),
          style: F({
            width: u.width
          }),
          "aria-sort": u.sort ? u.sortAscending ? "ascending" : "descending" : null,
          scope: o.optionalAttr(t.isActual && (u.colspan > 1 ? "colgroup" : "col")),
          headers: o.optionalAttr(t.isActual && o.getHeaderHeaders(u, c)),
          ref_for: !0,
          ref: (S) => o.addHeaderRef(u, S)
        }, [
          u.sortable ? (l(), y(j(t.isActual ? "button" : "div"), {
            key: 0,
            class: h(["table-sticky__sort-button", {
              "table-sticky__sort-button--focused": u.sortFocused
            }]),
            onClick: (S) => e.$emit("columnSorted", u),
            onFocus: (S) => o.handleSortFocus(u, !0),
            onBlur: (S) => o.handleSortFocus(u, !1),
            "aria-pressed": u.sortApplied ? "true" : "false"
          }, {
            default: b(() => [
              e.$slots[u.slotHeader] ? m(e.$slots, u.slotHeader, {
                key: 0,
                isActual: t.isActual,
                column: u,
                index: g
              }) : u.htmlTitle ? (l(), d("div", {
                key: 1,
                innerHTML: t.getColumnTitle({ column: u, index: g, isActual: t.isActual })
              }, null, 8, il)) : (l(), d(A, { key: 2 }, [
                w(p(t.getColumnTitle({ column: u, index: g, isActual: t.isActual })), 1)
              ], 64)),
              f("span", rl, [
                f("span", al, [
                  m(e.$slots, "sortIcon", {}, () => [
                    s[0] || (s[0] = w("▼"))
                  ])
                ])
              ])
            ]),
            _: 2
          }, 1064, ["class", "onClick", "onFocus", "onBlur", "aria-pressed"])) : (l(), d(A, { key: 1 }, [
            e.$slots[u.slotHeader] ? m(e.$slots, u.slotHeader, {
              key: 0,
              isActual: t.isActual,
              column: u,
              index: g
            }) : u.htmlTitle ? (l(), d("div", {
              key: 1,
              innerHTML: t.getColumnTitle({ column: u, index: g, isActual: t.isActual })
            }, null, 8, ll)) : (l(), d(A, { key: 2 }, [
              w(p(t.getColumnTitle({ column: u, index: g, isActual: t.isActual })), 1)
            ], 64))
          ], 64))
        ], 14, ol))), 128))
      ], 14, nl))), 128))
    ]),
    t.rows ? (l(), d("tbody", cl, [
      R(r, {
        rows: t.rows,
        rowColumns: t.rowColumns,
        optionalAttr: o.optionalAttr,
        resolveClasses: t.resolveClasses,
        getCellHeaders: o.getCellHeaders,
        isActual: t.isActual,
        columnWidth: t.columnWidth,
        classes: t.classes,
        value: o.value
      }, ue({ _: 2 }, [
        T(e.$slots, (a, c) => ({
          name: c,
          fn: b((u) => [
            m(e.$slots, c, V(Y(u)))
          ])
        }))
      ]), 1032, ["rows", "rowColumns", "optionalAttr", "resolveClasses", "getCellHeaders", "isActual", "columnWidth", "classes", "value"])
    ])) : _("", !0),
    t.footerRows ? (l(), d("tfoot", ul, [
      R(r, {
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
      }, ue({ _: 2 }, [
        T(e.$slots, (a, c) => ({
          name: c,
          fn: b((u) => [
            m(e.$slots, c, V(Y(u)))
          ])
        }))
      ]), 1032, ["rows", "rowColumns", "optionalAttr", "resolveClasses", "getCellHeaders", "isActual", "columnWidth", "classes", "value"])
    ])) : _("", !0)
  ], 10, tl);
}
const fl = /* @__PURE__ */ v(el, [["render", dl]]);
function hl() {
  this.__data__ = [], this.size = 0;
}
function gs(e, s) {
  return e === s || e !== e && s !== s;
}
function Le(e, s) {
  for (var t = e.length; t--; )
    if (gs(e[t][0], s))
      return t;
  return -1;
}
var ml = Array.prototype, gl = ml.splice;
function _l(e) {
  var s = this.__data__, t = Le(s, e);
  if (t < 0)
    return !1;
  var n = s.length - 1;
  return t == n ? s.pop() : gl.call(s, t, 1), --this.size, !0;
}
function yl(e) {
  var s = this.__data__, t = Le(s, e);
  return t < 0 ? void 0 : s[t][1];
}
function vl(e) {
  return Le(this.__data__, e) > -1;
}
function pl(e, s) {
  var t = this.__data__, n = Le(t, e);
  return n < 0 ? (++this.size, t.push([e, s])) : t[n][1] = s, this;
}
function Z(e) {
  var s = -1, t = e == null ? 0 : e.length;
  for (this.clear(); ++s < t; ) {
    var n = e[s];
    this.set(n[0], n[1]);
  }
}
Z.prototype.clear = hl;
Z.prototype.delete = _l;
Z.prototype.get = yl;
Z.prototype.has = vl;
Z.prototype.set = pl;
function bl() {
  this.__data__ = new Z(), this.size = 0;
}
function wl(e) {
  var s = this.__data__, t = s.delete(e);
  return this.size = s.size, t;
}
function Sl(e) {
  return this.__data__.get(e);
}
function kl(e) {
  return this.__data__.has(e);
}
var _s = typeof global == "object" && global && global.Object === Object && global, Cl = typeof self == "object" && self && self.Object === Object && self, q = _s || Cl || Function("return this")(), fe = q.Symbol, ys = Object.prototype, Tl = ys.hasOwnProperty, $l = ys.toString, be = fe ? fe.toStringTag : void 0;
function Al(e) {
  var s = Tl.call(e, be), t = e[be];
  try {
    e[be] = void 0;
    var n = !0;
  } catch {
  }
  var i = $l.call(e);
  return n && (s ? e[be] = t : delete e[be]), i;
}
var Ol = Object.prototype, Rl = Ol.toString;
function xl(e) {
  return Rl.call(e);
}
var Ul = "[object Null]", Il = "[object Undefined]", Tt = fe ? fe.toStringTag : void 0;
function Oe(e) {
  return e == null ? e === void 0 ? Il : Ul : Tt && Tt in Object(e) ? Al(e) : xl(e);
}
function He(e) {
  var s = typeof e;
  return e != null && (s == "object" || s == "function");
}
var El = "[object AsyncFunction]", zl = "[object Function]", jl = "[object GeneratorFunction]", Ml = "[object Proxy]";
function vs(e) {
  if (!He(e))
    return !1;
  var s = Oe(e);
  return s == zl || s == jl || s == El || s == Ml;
}
var Xe = q["__core-js_shared__"], $t = function() {
  var e = /[^.]+$/.exec(Xe && Xe.keys && Xe.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function Fl(e) {
  return !!$t && $t in e;
}
var Pl = Function.prototype, Bl = Pl.toString;
function re(e) {
  if (e != null) {
    try {
      return Bl.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var Ll = /[\\^$.*+?()[\]{}|]/g, Hl = /^\[object .+?Constructor\]$/, Dl = Function.prototype, Vl = Object.prototype, Nl = Dl.toString, Wl = Vl.hasOwnProperty, Xl = RegExp(
  "^" + Nl.call(Wl).replace(Ll, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Yl(e) {
  if (!He(e) || Fl(e))
    return !1;
  var s = vs(e) ? Xl : Hl;
  return s.test(re(e));
}
function ql(e, s) {
  return e?.[s];
}
function ae(e, s) {
  var t = ql(e, s);
  return Yl(t) ? t : void 0;
}
var $e = ae(q, "Map"), Ae = ae(Object, "create");
function Kl() {
  this.__data__ = Ae ? Ae(null) : {}, this.size = 0;
}
function Gl(e) {
  var s = this.has(e) && delete this.__data__[e];
  return this.size -= s ? 1 : 0, s;
}
var Zl = "__lodash_hash_undefined__", Jl = Object.prototype, Ql = Jl.hasOwnProperty;
function ec(e) {
  var s = this.__data__;
  if (Ae) {
    var t = s[e];
    return t === Zl ? void 0 : t;
  }
  return Ql.call(s, e) ? s[e] : void 0;
}
var tc = Object.prototype, sc = tc.hasOwnProperty;
function nc(e) {
  var s = this.__data__;
  return Ae ? s[e] !== void 0 : sc.call(s, e);
}
var oc = "__lodash_hash_undefined__";
function ic(e, s) {
  var t = this.__data__;
  return this.size += this.has(e) ? 0 : 1, t[e] = Ae && s === void 0 ? oc : s, this;
}
function ie(e) {
  var s = -1, t = e == null ? 0 : e.length;
  for (this.clear(); ++s < t; ) {
    var n = e[s];
    this.set(n[0], n[1]);
  }
}
ie.prototype.clear = Kl;
ie.prototype.delete = Gl;
ie.prototype.get = ec;
ie.prototype.has = nc;
ie.prototype.set = ic;
function rc() {
  this.size = 0, this.__data__ = {
    hash: new ie(),
    map: new ($e || Z)(),
    string: new ie()
  };
}
function ac(e) {
  var s = typeof e;
  return s == "string" || s == "number" || s == "symbol" || s == "boolean" ? e !== "__proto__" : e === null;
}
function De(e, s) {
  var t = e.__data__;
  return ac(s) ? t[typeof s == "string" ? "string" : "hash"] : t.map;
}
function lc(e) {
  var s = De(this, e).delete(e);
  return this.size -= s ? 1 : 0, s;
}
function cc(e) {
  return De(this, e).get(e);
}
function uc(e) {
  return De(this, e).has(e);
}
function dc(e, s) {
  var t = De(this, e), n = t.size;
  return t.set(e, s), this.size += t.size == n ? 0 : 1, this;
}
function ge(e) {
  var s = -1, t = e == null ? 0 : e.length;
  for (this.clear(); ++s < t; ) {
    var n = e[s];
    this.set(n[0], n[1]);
  }
}
ge.prototype.clear = rc;
ge.prototype.delete = lc;
ge.prototype.get = cc;
ge.prototype.has = uc;
ge.prototype.set = dc;
var fc = 200;
function hc(e, s) {
  var t = this.__data__;
  if (t instanceof Z) {
    var n = t.__data__;
    if (!$e || n.length < fc - 1)
      return n.push([e, s]), this.size = ++t.size, this;
    t = this.__data__ = new ge(n);
  }
  return t.set(e, s), this.size = t.size, this;
}
function _e(e) {
  var s = this.__data__ = new Z(e);
  this.size = s.size;
}
_e.prototype.clear = bl;
_e.prototype.delete = wl;
_e.prototype.get = Sl;
_e.prototype.has = kl;
_e.prototype.set = hc;
function mc(e, s) {
  for (var t = -1, n = e == null ? 0 : e.length; ++t < n && s(e[t], t, e) !== !1; )
    ;
  return e;
}
var At = function() {
  try {
    var e = ae(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}();
function gc(e, s, t) {
  s == "__proto__" && At ? At(e, s, {
    configurable: !0,
    enumerable: !0,
    value: t,
    writable: !0
  }) : e[s] = t;
}
var _c = Object.prototype, yc = _c.hasOwnProperty;
function vc(e, s, t) {
  var n = e[s];
  (!(yc.call(e, s) && gs(n, t)) || t === void 0 && !(s in e)) && gc(e, s, t);
}
function pc(e, s) {
  for (var t = -1, n = Array(e); ++t < e; )
    n[t] = s(t);
  return n;
}
function Re(e) {
  return e != null && typeof e == "object";
}
var bc = "[object Arguments]";
function Ot(e) {
  return Re(e) && Oe(e) == bc;
}
var ps = Object.prototype, wc = ps.hasOwnProperty, Sc = ps.propertyIsEnumerable, kc = Ot(/* @__PURE__ */ function() {
  return arguments;
}()) ? Ot : function(e) {
  return Re(e) && wc.call(e, "callee") && !Sc.call(e, "callee");
}, ct = Array.isArray;
function Cc() {
  return !1;
}
var bs = typeof exports == "object" && exports && !exports.nodeType && exports, Rt = bs && typeof module == "object" && module && !module.nodeType && module, Tc = Rt && Rt.exports === bs, xt = Tc ? q.Buffer : void 0, $c = xt ? xt.isBuffer : void 0, ws = $c || Cc, Ac = 9007199254740991, Oc = /^(?:0|[1-9]\d*)$/;
function Rc(e, s) {
  var t = typeof e;
  return s = s ?? Ac, !!s && (t == "number" || t != "symbol" && Oc.test(e)) && e > -1 && e % 1 == 0 && e < s;
}
var xc = 9007199254740991;
function Ss(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= xc;
}
var Uc = "[object Arguments]", Ic = "[object Array]", Ec = "[object Boolean]", zc = "[object Date]", jc = "[object Error]", Mc = "[object Function]", Fc = "[object Map]", Pc = "[object Number]", Bc = "[object Object]", Lc = "[object RegExp]", Hc = "[object Set]", Dc = "[object String]", Vc = "[object WeakMap]", Nc = "[object ArrayBuffer]", Wc = "[object DataView]", Xc = "[object Float32Array]", Yc = "[object Float64Array]", qc = "[object Int8Array]", Kc = "[object Int16Array]", Gc = "[object Int32Array]", Zc = "[object Uint8Array]", Jc = "[object Uint8ClampedArray]", Qc = "[object Uint16Array]", eu = "[object Uint32Array]", I = {};
I[Xc] = I[Yc] = I[qc] = I[Kc] = I[Gc] = I[Zc] = I[Jc] = I[Qc] = I[eu] = !0;
I[Uc] = I[Ic] = I[Nc] = I[Ec] = I[Wc] = I[zc] = I[jc] = I[Mc] = I[Fc] = I[Pc] = I[Bc] = I[Lc] = I[Hc] = I[Dc] = I[Vc] = !1;
function tu(e) {
  return Re(e) && Ss(e.length) && !!I[Oe(e)];
}
function ut(e) {
  return function(s) {
    return e(s);
  };
}
var ks = typeof exports == "object" && exports && !exports.nodeType && exports, Te = ks && typeof module == "object" && module && !module.nodeType && module, su = Te && Te.exports === ks, Ye = su && _s.process, he = function() {
  try {
    var e = Te && Te.require && Te.require("util").types;
    return e || Ye && Ye.binding && Ye.binding("util");
  } catch {
  }
}(), Ut = he && he.isTypedArray, nu = Ut ? ut(Ut) : tu, ou = Object.prototype, iu = ou.hasOwnProperty;
function ru(e, s) {
  var t = ct(e), n = !t && kc(e), i = !t && !n && ws(e), o = !t && !n && !i && nu(e), r = t || n || i || o, a = r ? pc(e.length, String) : [], c = a.length;
  for (var u in e)
    iu.call(e, u) && !(r && // Safari 9 has enumerable `arguments.length` in strict mode.
    (u == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    i && (u == "offset" || u == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    o && (u == "buffer" || u == "byteLength" || u == "byteOffset") || // Skip index properties.
    Rc(u, c))) && a.push(u);
  return a;
}
var au = Object.prototype;
function Cs(e) {
  var s = e && e.constructor, t = typeof s == "function" && s.prototype || au;
  return e === t;
}
function Ts(e, s) {
  return function(t) {
    return e(s(t));
  };
}
var lu = Ts(Object.keys, Object), cu = Object.prototype, uu = cu.hasOwnProperty;
function du(e) {
  if (!Cs(e))
    return lu(e);
  var s = [];
  for (var t in Object(e))
    uu.call(e, t) && t != "constructor" && s.push(t);
  return s;
}
function fu(e) {
  return e != null && Ss(e.length) && !vs(e);
}
function hu(e) {
  return fu(e) ? ru(e) : du(e);
}
var $s = typeof exports == "object" && exports && !exports.nodeType && exports, It = $s && typeof module == "object" && module && !module.nodeType && module, mu = It && It.exports === $s, Et = mu ? q.Buffer : void 0;
Et && Et.allocUnsafe;
function gu(e, s) {
  return e.slice();
}
function _u(e, s) {
  for (var t = -1, n = e == null ? 0 : e.length, i = 0, o = []; ++t < n; ) {
    var r = e[t];
    s(r, t, e) && (o[i++] = r);
  }
  return o;
}
function yu() {
  return [];
}
var vu = Object.prototype, pu = vu.propertyIsEnumerable, zt = Object.getOwnPropertySymbols, bu = zt ? function(e) {
  return e == null ? [] : (e = Object(e), _u(zt(e), function(s) {
    return pu.call(e, s);
  }));
} : yu;
function wu(e, s) {
  for (var t = -1, n = s.length, i = e.length; ++t < n; )
    e[i + t] = s[t];
  return e;
}
var Su = Ts(Object.getPrototypeOf, Object);
function ku(e, s, t) {
  var n = s(e);
  return ct(e) ? n : wu(n, t(e));
}
function Cu(e) {
  return ku(e, hu, bu);
}
var Je = ae(q, "DataView"), Qe = ae(q, "Promise"), et = ae(q, "Set"), tt = ae(q, "WeakMap"), jt = "[object Map]", Tu = "[object Object]", Mt = "[object Promise]", Ft = "[object Set]", Pt = "[object WeakMap]", Bt = "[object DataView]", $u = re(Je), Au = re($e), Ou = re(Qe), Ru = re(et), xu = re(tt), K = Oe;
(Je && K(new Je(new ArrayBuffer(1))) != Bt || $e && K(new $e()) != jt || Qe && K(Qe.resolve()) != Mt || et && K(new et()) != Ft || tt && K(new tt()) != Pt) && (K = function(e) {
  var s = Oe(e), t = s == Tu ? e.constructor : void 0, n = t ? re(t) : "";
  if (n)
    switch (n) {
      case $u:
        return Bt;
      case Au:
        return jt;
      case Ou:
        return Mt;
      case Ru:
        return Ft;
      case xu:
        return Pt;
    }
  return s;
});
var Uu = Object.prototype, Iu = Uu.hasOwnProperty;
function Eu(e) {
  var s = e.length, t = new e.constructor(s);
  return s && typeof e[0] == "string" && Iu.call(e, "index") && (t.index = e.index, t.input = e.input), t;
}
var Lt = q.Uint8Array;
function dt(e) {
  var s = new e.constructor(e.byteLength);
  return new Lt(s).set(new Lt(e)), s;
}
function zu(e, s) {
  var t = dt(e.buffer);
  return new e.constructor(t, e.byteOffset, e.byteLength);
}
var ju = /\w*$/;
function Mu(e) {
  var s = new e.constructor(e.source, ju.exec(e));
  return s.lastIndex = e.lastIndex, s;
}
var Ht = fe ? fe.prototype : void 0, Dt = Ht ? Ht.valueOf : void 0;
function Fu(e) {
  return Dt ? Object(Dt.call(e)) : {};
}
function Pu(e, s) {
  var t = dt(e.buffer);
  return new e.constructor(t, e.byteOffset, e.length);
}
var Bu = "[object Boolean]", Lu = "[object Date]", Hu = "[object Map]", Du = "[object Number]", Vu = "[object RegExp]", Nu = "[object Set]", Wu = "[object String]", Xu = "[object Symbol]", Yu = "[object ArrayBuffer]", qu = "[object DataView]", Ku = "[object Float32Array]", Gu = "[object Float64Array]", Zu = "[object Int8Array]", Ju = "[object Int16Array]", Qu = "[object Int32Array]", ed = "[object Uint8Array]", td = "[object Uint8ClampedArray]", sd = "[object Uint16Array]", nd = "[object Uint32Array]";
function od(e, s, t) {
  var n = e.constructor;
  switch (s) {
    case Yu:
      return dt(e);
    case Bu:
    case Lu:
      return new n(+e);
    case qu:
      return zu(e);
    case Ku:
    case Gu:
    case Zu:
    case Ju:
    case Qu:
    case ed:
    case td:
    case sd:
    case nd:
      return Pu(e);
    case Hu:
      return new n();
    case Du:
    case Wu:
      return new n(e);
    case Vu:
      return Mu(e);
    case Nu:
      return new n();
    case Xu:
      return Fu(e);
  }
}
var Vt = Object.create, id = /* @__PURE__ */ function() {
  function e() {
  }
  return function(s) {
    if (!He(s))
      return {};
    if (Vt)
      return Vt(s);
    e.prototype = s;
    var t = new e();
    return e.prototype = void 0, t;
  };
}();
function rd(e) {
  return typeof e.constructor == "function" && !Cs(e) ? id(Su(e)) : {};
}
var ad = "[object Map]";
function ld(e) {
  return Re(e) && K(e) == ad;
}
var Nt = he && he.isMap, cd = Nt ? ut(Nt) : ld, ud = "[object Set]";
function dd(e) {
  return Re(e) && K(e) == ud;
}
var Wt = he && he.isSet, fd = Wt ? ut(Wt) : dd, As = "[object Arguments]", hd = "[object Array]", md = "[object Boolean]", gd = "[object Date]", _d = "[object Error]", Os = "[object Function]", yd = "[object GeneratorFunction]", vd = "[object Map]", pd = "[object Number]", Rs = "[object Object]", bd = "[object RegExp]", wd = "[object Set]", Sd = "[object String]", kd = "[object Symbol]", Cd = "[object WeakMap]", Td = "[object ArrayBuffer]", $d = "[object DataView]", Ad = "[object Float32Array]", Od = "[object Float64Array]", Rd = "[object Int8Array]", xd = "[object Int16Array]", Ud = "[object Int32Array]", Id = "[object Uint8Array]", Ed = "[object Uint8ClampedArray]", zd = "[object Uint16Array]", jd = "[object Uint32Array]", U = {};
U[As] = U[hd] = U[Td] = U[$d] = U[md] = U[gd] = U[Ad] = U[Od] = U[Rd] = U[xd] = U[Ud] = U[vd] = U[pd] = U[Rs] = U[bd] = U[wd] = U[Sd] = U[kd] = U[Id] = U[Ed] = U[zd] = U[jd] = !0;
U[_d] = U[Os] = U[Cd] = !1;
function je(e, s, t, n, i, o) {
  var r;
  if (r !== void 0)
    return r;
  if (!He(e))
    return e;
  var a = ct(e);
  if (a)
    r = Eu(e);
  else {
    var c = K(e), u = c == Os || c == yd;
    if (ws(e))
      return gu(e);
    if (c == Rs || c == As || u && !i)
      r = u ? {} : rd(e);
    else {
      if (!U[c])
        return i ? e : {};
      r = od(e, c);
    }
  }
  o || (o = new _e());
  var g = o.get(e);
  if (g)
    return g;
  o.set(e, r), fd(e) ? e.forEach(function(z) {
    r.add(je(z, s, t, z, e, o));
  }) : cd(e) && e.forEach(function(z, x) {
    r.set(x, je(z, s, t, x, e, o));
  });
  var S = Cu, O = a ? void 0 : S(e);
  return mc(O || e, function(z, x) {
    O && (x = z, z = e[x]), vc(r, x, je(z, s, t, x, e, o));
  }), r;
}
var Md = 1, Fd = 4;
function Pd(e) {
  return je(e, Md | Fd);
}
const qe = (e) => e.every((s) => typeof s == "object"), Xt = !0, xs = () => window.innerWidth;
let Yt = xs();
const Bd = {
  name: "UluTableSticky",
  components: {
    UluTableStickyTable: fl
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
      required: Xt
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
      validator: qe,
      required: Xt
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
      validator: qe
      // required
    },
    /**
     * Array of rows for footer (tfoot)
     */
    footerRows: {
      type: Array,
      validator: qe
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
      resizeHandler: Pe(this.onResize.bind(this), 500, !0),
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
      const e = this.currentColumns, s = [], t = (i) => {
        i.columns ? i.columns.forEach(t) : s.push(i);
      };
      e.forEach(t);
      let n = [];
      return s.forEach((i, o) => {
        const r = n.slice();
        i.getRowHeaders = (a) => r.map((c) => c(a)).join(" "), i.rowHeader && (i.getRowHeaderId = (a) => `${this.idPrefix}-rh-${a}-${o}`, n.push(i.getRowHeaderId));
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
      this.resetSorts(e), e.sortApplied ? e.sortAscending = !e.sortAscending : e.sortApplied = !0, this.$emit("columnSort", e);
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
      const e = this.idCreator("c"), s = Pd(this.columns), t = (n, i) => {
        n.id = e(), n.parent = i, n.width = "auto", n.boxWidth = null, n.sortApplied = !1, n.sortAscending = !1, n.sortFocused = !1;
        let o = [];
        i && (i.headers && i.headers.length ? o = [...i.headers] : o.push(i.id)), o.push(n.id), n.headers = o, n.columns ? n.columns.forEach((r) => t(r, n)) : !n.key && !n.value && !n.slot && console.warn("UluTableSticky: Missing 'key', 'value' or 'slot' in column configuration for", n);
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
      const s = this.idCreator("hr"), t = e.reduce(this.maxColumnChildren, 1), n = "auto", i = new Array(t).fill(null).map(() => ({
        height: n,
        boxHeight: null,
        columns: [],
        id: s()
      }));
      function o(r, a) {
        const c = a.columns;
        c && c.forEach((u) => o(1 + r, u)), a.rowspan = c ? 1 : t - r, a.colspan = c ? c.reduce((u, g) => u + g.colspan, 0) : 1, i[r].columns.push(a);
      }
      return e.forEach((r) => o(0, r)), i;
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
      const e = xs();
      Yt !== e && (Yt = e, this.resizing ? (this.resizing = !1, this.setTableSizes(), this.checkOverflowX(), this.syncScrollLeft()) : (this.resizing = !0, this.removeTableSizes()));
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
      const e = this.$refs.display, s = e.scrollWidth, t = e.scrollLeft, n = this.scrollControlAmount, i = t + n;
      e.scroll({
        left: i > s ? e.scrollWidth : i,
        behavior: "smooth"
      });
    },
    /**
     * Cleanup function for when component is not in use
     */
    setTableSizes() {
      const e = (n, i) => Math.ceil(n.getBoundingClientRect()[i]);
      this.tableWidth = `${e(this.$refs.table.$el, "width")}px`;
      const s = (n) => document.getElementById(n.id), t = (n) => {
        const i = s(n);
        i && (n.boxHeight = e(i, "height"), n.height = `${n.boxHeight}px`);
      };
      this.headerRows.forEach((n) => {
        t(n), n.columns.forEach((i) => {
          const o = s(i);
          o && (i.boxWidth = e(o, "width"), i.width = `${i.boxWidth}px`);
        });
      }), this.firstColumnSticky && (this.currentRows.forEach((n) => t(n)), this.currentFooterRows.forEach((n) => t(n))), this.$nextTick(() => {
        this.sizesCalculated = !0, ms(() => {
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
}, Ld = { class: "table-sticky__sticky-wrap table-sticky__sticky-wrap--header" }, Hd = { class: "table-sticky__header-wrap" }, Dd = { class: "table-sticky__sticky-wrap table-sticky__sticky-wrap--first-column-header" }, Vd = { class: "table-sticky__sticky-wrap table-sticky__sticky-wrap--controls" }, Nd = {
  key: 2,
  class: "table-sticky__controls-inner"
}, Wd = ["disabled"], Xd = ["disabled"], Yd = {
  ref: "display",
  class: "table-sticky__display"
};
function qd(e, s, t, n, i, o) {
  const r = C("UluTableStickyTable");
  return l(), d("div", {
    class: h(["table-sticky", {
      "table-sticky--overflown-x": i.overflownX,
      "table-sticky--can-scroll-right": i.canScrollRight,
      "table-sticky--can-scroll-left": i.canScrollLeft
    }])
  }, [
    f("div", Ld, [
      f("div", Hd, [
        R(r, {
          ref: "header",
          class: "table-sticky__table table-sticky__table--header",
          classes: t.classes,
          caption: t.caption,
          resolveClasses: o.resolveClasses,
          getColumnTitle: t.getColumnTitle,
          idPrefix: t.idPrefix,
          headerRows: i.headerRows,
          style: F({
            opacity: i.sizesCalculated ? "1" : "0",
            pointerEvents: i.sizesCalculated ? "auto" : "none",
            width: i.tableWidth
          }),
          onColumnSorted: o.applySort
        }, ue({ _: 2 }, [
          T(e.$slots, (a, c) => ({
            name: c,
            fn: b((u) => [
              m(e.$slots, c, V(Y(u)))
            ])
          }))
        ]), 1032, ["classes", "caption", "resolveClasses", "getColumnTitle", "idPrefix", "headerRows", "style", "onColumnSorted"])
      ])
    ]),
    f("div", Dd, [
      t.firstColumnSticky ? (l(), y(r, {
        key: 0,
        ref: "firstColumnHeader",
        class: "table-sticky__table table-sticky__table--first-column-header",
        classes: t.classes,
        caption: t.caption,
        resolveClasses: o.resolveClasses,
        getColumnTitle: t.getColumnTitle,
        idPrefix: t.idPrefix,
        headerRows: o.headerRowsFirst,
        style: F({
          opacity: o.headerOpacityX,
          pointerEvents: o.headerVisibleX ? "auto" : "none"
        }),
        onColumnSorted: o.applySort
      }, ue({ _: 2 }, [
        T(e.$slots, (a, c) => ({
          name: c,
          fn: b((u) => [
            m(e.$slots, c, V(Y(u)))
          ])
        }))
      ]), 1032, ["classes", "caption", "resolveClasses", "getColumnTitle", "idPrefix", "headerRows", "style", "onColumnSorted"])) : _("", !0)
    ]),
    f("div", Vd, [
      me(f("div", {
        class: h(["table-sticky__controls", o.resolveClasses(t.classes.controls)]),
        ref: "controls"
      }, [
        e.$slots.controls ? m(e.$slots, "controls", {
          key: 0,
          scrollLeft: o.scrollLeft,
          scrollRight: o.scrollRight,
          canScrollLeft: i.canScrollLeft,
          canScrollRight: i.canScrollRight
        }) : t.controlsComponent ? (l(), y(j(t.controlsComponent), {
          key: 1,
          scrollLeft: o.scrollLeft,
          scrollRight: o.scrollRight,
          canScrollLeft: i.canScrollLeft,
          canScrollRight: i.canScrollRight
        }, null, 8, ["scrollLeft", "scrollRight", "canScrollLeft", "canScrollRight"])) : (l(), d("div", Nd, [
          f("button", {
            class: h(["table-sticky__control table-sticky__control--left", o.resolveClasses(t.classes.controlButton)]),
            "aria-label": "Scroll Left",
            onClick: s[0] || (s[0] = (...a) => o.scrollLeft && o.scrollLeft(...a)),
            disabled: !i.canScrollLeft
          }, [
            m(e.$slots, "controlLeft", {}, () => [
              s[2] || (s[2] = w(" ← "))
            ])
          ], 10, Wd),
          f("button", {
            class: h(["table-sticky__control table-sticky__control--right", o.resolveClasses(t.classes.controlButton)]),
            "aria-label": "Scroll Right",
            onClick: s[1] || (s[1] = (...a) => o.scrollRight && o.scrollRight(...a)),
            disabled: !i.canScrollRight
          }, [
            m(e.$slots, "controlRight", {}, () => [
              s[3] || (s[3] = w(" → "))
            ])
          ], 10, Xd)
        ]))
      ], 2), [
        [es, o.controlsShown]
      ])
    ]),
    f("div", Yd, [
      R(r, {
        ref: "table",
        class: "table-sticky__table table-sticky__table--actual",
        classes: t.classes,
        resolveClasses: o.resolveClasses,
        isActual: "",
        headerRows: i.headerRows,
        rows: i.currentRows,
        footerRows: i.currentFooterRows,
        rowColumns: o.rowColumns,
        caption: t.caption,
        idPrefix: t.idPrefix,
        getRowValue: t.getRowValue,
        getColumnTitle: t.getColumnTitle,
        onVnodeMounted: o.tableReady,
        onActualHeaderRemoved: o.headerRemoved,
        onActualHeaderAdded: o.headerAdded,
        onColumnSorted: o.applySort
      }, ue({ _: 2 }, [
        T(e.$slots, (a, c) => ({
          name: c,
          fn: b((u) => [
            m(e.$slots, c, V(Y(u)))
          ])
        }))
      ]), 1032, ["classes", "resolveClasses", "headerRows", "rows", "footerRows", "rowColumns", "caption", "idPrefix", "getRowValue", "getColumnTitle", "onVnodeMounted", "onActualHeaderRemoved", "onActualHeaderAdded", "onColumnSorted"])
    ], 512),
    t.firstColumnSticky ? (l(), y(r, {
      key: 0,
      ref: "firstColumn",
      class: "table-sticky__table table-sticky__table--first-column",
      classes: t.classes,
      resolveClasses: o.resolveClasses,
      caption: t.caption,
      headerRows: o.headerRowsFirst,
      columnWidth: o.firstColumnSize.width,
      rows: i.currentRows,
      footerRows: i.currentFooterRows,
      rowColumns: o.rowColumnsFirst,
      idPrefix: t.idPrefix,
      getRowValue: t.getRowValue,
      getColumnTitle: t.getColumnTitle,
      style: F({
        opacity: o.headerOpacityX,
        pointerEvents: o.headerVisibleX ? "auto" : "none"
      }),
      onColumnSorted: o.applySort
    }, ue({ _: 2 }, [
      T(e.$slots, (a, c) => ({
        name: c,
        fn: b((u) => [
          m(e.$slots, c, V(Y(u)))
        ])
      }))
    ]), 1032, ["classes", "resolveClasses", "caption", "headerRows", "columnWidth", "rows", "footerRows", "rowColumns", "idPrefix", "getRowValue", "getColumnTitle", "style", "onColumnSorted"])) : _("", !0)
  ], 2);
}
const dh = /* @__PURE__ */ v(Bd, [["render", qd]]);
export {
  Nf as $,
  N as A,
  kf as B,
  Cf as C,
  Tf as D,
  no as E,
  $f as F,
  Af as G,
  Of as H,
  Rf as I,
  xf as J,
  Uf as K,
  If as L,
  Ef as M,
  zf as N,
  jf as O,
  Mf as P,
  ds as Q,
  lo as R,
  Ff as S,
  Pf as T,
  bt as U,
  Bf as V,
  Lf as W,
  Hf as X,
  Df as Y,
  Vf as Z,
  af as _,
  Ee as a,
  Wf as a0,
  Xf as a1,
  Yf as a2,
  qf as a3,
  Kf as a4,
  Gf as a5,
  Zf as a6,
  Jf as a7,
  Qf as a8,
  Ct as a9,
  eh as aa,
  th as ab,
  sh as ac,
  nh as ad,
  oh as ae,
  rh as af,
  ah as ag,
  lh as ah,
  ch as ai,
  Ha as aj,
  uh as ak,
  dh as al,
  Qa as am,
  fl as an,
  bn as ao,
  se as ap,
  ho as aq,
  go as ar,
  Yn as as,
  cf as at,
  sf as b,
  nf as c,
  of as d,
  rf as e,
  lf as f,
  Cn as g,
  jn as h,
  tf as i,
  uf as j,
  df as k,
  ce as l,
  ff as m,
  hf as n,
  mf as o,
  gf as p,
  _f as q,
  ih as r,
  Uo as s,
  yf as t,
  wo as u,
  vf as v,
  pf as w,
  bf as x,
  wf as y,
  Sf as z
};
