import { reactive as Qt, ref as M, computed as k, resolveDirective as es, createElementBlock as d, openBlock as l, Fragment as O, withDirectives as me, createElementVNode as f, unref as E, normalizeClass as h, renderSlot as g, withKeys as ts, normalizeStyle as B, createCommentVNode as _, nextTick as ss, toRef as Fs, toDisplayString as p, createBlock as y, Teleport as nt, resolveDynamicComponent as z, mergeProps as G, inject as ns, watchEffect as Ls, defineAsyncComponent as Hs, markRaw as de, normalizeProps as N, toRefs as Ds, toValue as Ne, resolveComponent as A, withModifiers as Vs, createVNode as R, useSlots as Ns, renderList as T, TransitionGroup as os, withCtx as b, createTextVNode as S, vShow as is, watch as rs, onMounted as Ws, onUnmounted as Xs, guardReactiveProps as q, vModelCheckbox as qs, vModelText as Ys, createSlots as ue } from "vue";
import { inline as as, offset as ls, flip as cs, shift as us, arrow as ds, useFloating as fs, autoUpdate as hs } from "@floating-ui/vue";
import { Disclosure as Ks, DisclosureButton as Gs, DisclosurePanel as Zs, Tab as Js, TabGroup as Qs, TabList as en, TabPanel as tn, TabPanels as sn } from "@headlessui/vue";
import { useRoute as nn, useRouter as on, RouterLink as Be } from "vue-router";
import rn from "gsap";
import an from "fuse.js";
const vt = {
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
    pathSeparator: "fas fa-chevron-right",
    image: "fas fa-image"
  }
};
function cf(e, s = {}) {
  const t = Qt({ ...vt }), { iconsByType: n, ...i } = s || {};
  i && Object.assign(t, i);
  const o = {
    // Methods to interact with settings
    getSettings() {
      return t;
    },
    getDefaultSettings() {
      return { ...vt };
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
const Ue = {
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
  plugin: { ...Ue.plugin },
  popover: { ...Ue.popover },
  tooltip: { ...Ue.tooltip, ...Ue.popover }
}, ot = M(!1), it = M(null);
function ln(e = {}) {
  return Object.assign(oe.popover, e.popover), Object.assign(oe.tooltip, e.tooltip), Object.assign(oe.plugin, e.plugin), oe;
}
function cn(e) {
  return Object.assign({}, oe.tooltip, e);
}
function un(e) {
  ot.value = !0, it.value = e;
}
function dn() {
  ot.value = !1, it.value = null;
}
const je = /* @__PURE__ */ new WeakMap(), fn = {
  mounted(e, s) {
    bt(e, s);
  },
  beforeUpdate(e) {
    wt(e);
  },
  updated(e, s) {
    bt(e, s);
  },
  umounted(e) {
    wt(e);
  }
};
function bt(e, s) {
  const t = hn(e, s);
  if (!t) return;
  let n = null;
  const i = () => {
    n || (n = setTimeout(() => {
      un(t), clearTimeout(n);
    }, t.delay));
  }, o = () => {
    n && (clearTimeout(n), n = null), dn();
  };
  t.showEvents.forEach((r) => {
    e.addEventListener(r, i);
  }), t.hideEvents.forEach((r) => {
    e.addEventListener(r, o);
  }), je.set(e, { onShow: i, onHide: o, config: t });
}
function wt(e) {
  if (!je.has(e))
    return;
  const { config: s, onShow: t, onHide: n } = je.get(e);
  s.showEvents.forEach((i) => {
    e.removeEventListener(i, t);
  }), s.hideEvents.forEach((i) => {
    e.removeEventListener(i, n);
  }), je.delete(e);
}
function hn(e, s) {
  const { value: t } = s;
  let n;
  if (!(t === !1 || t === null))
    return typeof t == "object" ? n = t : n = { content: t }, cn(Object.assign({}, { trigger: e }, n));
}
let mn = 0;
function gn() {
  return `ulu-popovers-uid-${++mn}`;
}
const _n = ["disabled", "aria-expanded", "aria-controls", "aria-label"], yn = ["aria-hidden", "id", "data-placement"], pn = { class: "popover__inner" }, vn = {
  key: 0,
  class: "popover__footer"
}, rt = {
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
    const t = s, n = e, i = gn(), o = Object.assign({}, oe.popover, n.config), r = M(n.startOpen || !1), a = M(null), c = M(null), u = M(null), m = [
      ...o.inline ? [as()] : [],
      ...o.offset ? [ls(o.offset)] : [],
      cs(),
      us(),
      ...o.arrow ? [ds({ element: u })] : []
    ], w = {
      placement: o.placement,
      whileElementsMounted: hs,
      middleware: m
    }, {
      floatingStyles: C,
      placement: I,
      middlewareData: x,
      update: P,
      isPositioned: H
    } = fs(a, c, w), J = k(() => {
      const D = x.value?.arrow;
      return D ? {
        position: "absolute",
        left: D?.x != null ? `${D.x}px` : "",
        top: D?.y != null ? `${D.y}px` : ""
      } : null;
    });
    o.onReady && o.onReady({ update: P, isPositioned: H });
    const Re = () => {
      ne(!r.value);
    }, ne = (D) => {
      r.value = D;
      const ee = {
        trigger: E(a),
        content: E(c),
        isOpen: E(r)
      }, le = { isOpen: ee.isOpen };
      ss(() => {
        r.value ? (P(), window.setTimeout(() => {
          ye(), n.directFocus(ee), t("toggle", le);
        }, 0)) : (pe(), n.directFocus(ee), t("toggle", le));
      });
    };
    let Q;
    const ye = () => {
      n.clickOutsideCloses && (Q && pe(), Q = (D) => {
        c.value.contains(D.target) || ne(!1);
      }, document.addEventListener("click", Q));
    }, pe = () => {
      Q && (document.removeEventListener("click", Q), Q = null);
    }, ve = () => ne(!1);
    return (D, ee) => {
      const le = es("ulu-tooltip");
      return l(), d(O, null, [
        me((l(), d("button", {
          type: "button",
          ref_key: "trigger",
          ref: a,
          onClick: Re,
          disabled: e.disabled,
          class: h([
            { [e.activeClass]: r.value },
            e.classes.trigger
          ]),
          "aria-expanded": r.value ? "true" : "false",
          "aria-controls": E(i),
          "aria-label": e.triggerAlt
        }, [
          g(D.$slots, "trigger", { isOpen: r.value })
        ], 10, _n)), [
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
          style: B(E(C)),
          "data-placement": E(I),
          onKeydown: ee[0] || (ee[0] = ts(($) => ne(!1), ["esc"])),
          tabindex: "-1"
        }, [
          f("span", pn, [
            g(D.$slots, "content", { close: ve })
          ]),
          D.$slots.footer ? (l(), d("span", vn, [
            g(D.$slots, "footer", { close: ve })
          ])) : _("", !0),
          E(o).arrow ? (l(), d("span", {
            key: 1,
            class: "popover__arrow",
            ref_key: "contentArrow",
            ref: u,
            style: B(J.value),
            "data-ulu-popover-arrow": ""
          }, null, 4)) : _("", !0)
        ], 46, yn)
      ], 64);
    };
  }
}, bn = ["data-placement"], wn = ["innerHTML"], Sn = {
  key: 1,
  class: "popover__inner"
}, kn = {
  __name: "UluTooltipPopover",
  props: {
    config: Object
  },
  setup(e) {
    const s = Fs(e.config.trigger), t = M(null), n = M(null), i = [
      ...e.config.inline ? [as()] : [],
      ...e.config.offset ? [ls(e.config.offset)] : [],
      cs(),
      us(),
      ...e.config.arrow ? [ds({ element: n })] : []
    ], o = {
      placement: e.config.placement,
      whileElementsMounted: hs,
      middleware: i
    }, {
      floatingStyles: r,
      placement: a,
      middlewareData: c,
      update: u,
      isPositioned: m
    } = fs(s, t, o), w = k(() => {
      const C = c.value?.arrow;
      return C ? {
        position: "absolute",
        left: C?.x != null ? `${C.x}px` : "",
        top: C?.y != null ? `${C.y}px` : ""
      } : null;
    });
    return e.config.onReady && e.config.onReady({ update: u, isPositioned: m }), (C, I) => (l(), d("span", {
      class: h(["popover popover--tooltip is-active", e.config.class]),
      ref_key: "content",
      ref: t,
      "aria-hidden": "true",
      "data-placement": E(a),
      style: B(E(r))
    }, [
      e.config.isHtml ? (l(), d("span", {
        key: 0,
        class: "popover__inner",
        innerHTML: e.config.content
      }, null, 8, wn)) : (l(), d("span", Sn, p(e.config.content), 1)),
      e.config.arrow ? (l(), d("span", {
        key: 2,
        class: "popover__arrow",
        ref_key: "contentArrow",
        ref: n,
        style: B(w.value)
      }, null, 4)) : _("", !0)
    ], 14, bn));
  }
}, Cn = {
  __name: "UluTooltipDisplay",
  setup(e) {
    return (s, t) => (l(), y(nt, {
      to: E(oe).plugin.tooltipTeleportTo
    }, [
      E(ot) ? (l(), y(kn, {
        key: 0,
        config: E(it)
      }, null, 8, ["config"])) : _("", !0)
    ], 8, ["to"]));
  }
};
function uf(e, s = {}) {
  const t = ln(s);
  t.plugin.global && (e.directive(t.plugin.directiveName, fn), e.component("UluTooltipDisplay", Cn), e.component("UluPopover", rt));
}
const v = (e, s) => {
  const t = e.__vccOpts || e;
  for (const [n, i] of s)
    t[n] = i;
  return t;
}, Tn = {
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
function An(e, s, t, n, i, o) {
  return o.currentModal ? (l(), y(z(o.currentModal.component), G({ key: 0 }, o.currentProps, {
    modelValue: i.open,
    "onUpdate:modelValue": s[0] || (s[0] = (r) => i.open = r),
    onVnodeMounted: o.modalMounted,
    onVnodeUnmounted: o.modalUnmounted
  }), null, 16, ["modelValue", "onVnodeMounted", "onVnodeUnmounted"])) : _("", !0);
}
const $n = /* @__PURE__ */ v(Tn, [["render", An]]);
function On() {
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
const V = {
  __name: "UluIcon",
  props: {
    /**
     * Icon definition can be string (fa classes), or array or object (any prop format FaIcon accepts)
     * - This will override the 'type' prop if both are provided
     */
    icon: [String, Array, Object, Boolean]
  },
  setup(e) {
    const s = ns("uluCore"), t = M(null), { getIconProps: n, getClassesFromDefinition: i } = On();
    let o;
    const r = e, a = k(() => s.getSetting("fontAwesomeStatic")), c = k(() => s.getSetting("iconComponent")), u = k(() => s.getSetting("iconPropResolver")), m = k(() => {
      const { icon: x } = r;
      if (typeof x == "string" && x.startsWith("type:"))
        try {
          const P = x.substring(5);
          return s.getIcon(P);
        } catch (P) {
          return console.warn(P), null;
        }
      return x;
    }), w = k(() => !c.value || !m.value ? null : u.value(m.value)), C = k(() => n(m.value)), I = k(() => i(m.value));
    return Ls(async () => {
      if (!a.value && m.value) {
        if (t.value === null)
          if (o)
            t.value = de(o.FontAwesomeIcon);
          else {
            const x = Hs(async () => {
              const P = await import("./index.es-HlG3u0J5.js");
              return o = P, P.FontAwesomeIcon;
            });
            t.value = de(x);
          }
      } else
        t.value = null;
    }), (x, P) => c.value ? (l(), y(z(c.value), N(G({ key: 0 }, w.value)), null, 16)) : !a.value && t.value && m.value ? (l(), y(z(t.value), N(G({ key: 1 }, C.value)), null, 16)) : a.value && m.value ? (l(), d("span", {
      key: 2,
      class: h(I.value),
      "aria-hidden": "true"
    }, null, 2)) : _("", !0);
  }
};
function Ge(e) {
  const s = /* @__PURE__ */ new Set();
  if (!e)
    return s;
  if (typeof e == "string")
    e.split(" ").forEach((t) => {
      t && s.add(t);
    });
  else if (Array.isArray(e))
    e.forEach((t) => {
      Ge(t).forEach((n) => s.add(n));
    });
  else if (typeof e == "object")
    for (const t in e)
      Object.prototype.hasOwnProperty.call(e, t) && e[t] && t && s.add(t);
  return s;
}
function se({ props: e, baseClass: s, internal: t = {} }) {
  const { modifiers: n } = Ds(e);
  return { resolvedModifiers: k(() => {
    const o = Ne(s), r = Ge(Ne(n)), a = Ge(Ne(t));
    if (!o)
      return console.warn("useModifiers: Missing 'baseClass' argument, modifiers will not be applied."), "";
    const c = /* @__PURE__ */ new Set([...a, ...r]);
    return Array.from(c).map((u) => `${o}--${u}`);
  }) };
}
function ms() {
  return typeof window < "u" && typeof window.document < "u";
}
function Rn(e, s) {
  const t = e.getBoundingClientRect();
  return s.clientY < t.top || // above
  s.clientY > t.top + t.height || // below
  s.clientX < t.left || // left side
  s.clientX > t.left + t.width;
}
function xn(e = document.body, s = window) {
  return s.innerWidth - e.clientWidth;
}
function Un({ preventShift: e = !1, container: s = document.body }) {
  const t = s.style.overflow, n = s.style.paddingRight;
  if (s.style.overflow = "hidden", e) {
    const i = xn();
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
ms() && (jn(), En());
const St = {
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
function Ze(e, s) {
  St[e] ? St[e](s) : console.warn(`Unable to dispatch site event: ${e} in context:`, s);
}
function In(e) {
  return "ulu:" + e;
}
function we(e, s = null, t = { bubbles: !0 }) {
  return new CustomEvent(In(e), { detail: s, ...t });
}
function jn() {
  window.addEventListener("resize", Pe(() => Ze("pageResized", document), 250));
}
function En() {
  window.addEventListener("beforeprint", () => {
    Ze("beforePrint", document);
  }), window.addEventListener("afterprint", () => {
    Ze("afterPrint", document);
  });
}
function zn(e) {
  return typeof e == "object" && e?.constructor?.name;
}
function Mn(e, s, t) {
  const n = zn(s) || "Logger";
  console[e](n, ...t);
}
function ce(e, ...s) {
}
function Ie(e, ...s) {
  Mn("error", e, s);
}
class at {
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
      Ie(this, "Missing required elements: control, container");
      return;
    }
    const i = Object.assign({}, at.defaults, n);
    this.options = i, this.container = s, this.control = t, this.debug = i.debug;
    const o = ["left", "right"], r = ["top", "bottom"], { fromX: a, fromY: c } = i;
    if (!o.includes(a) && a !== null) {
      Ie(this, `Invalid fromX: ${a} (left|right|null)`);
      return;
    }
    if (!r.includes(c) && c !== null) {
      Ie(this, `Invalid fromY: ${c} (top|bottom|null)`);
      return;
    }
    if (!a && !c) {
      Ie(this, "Invalid fromX/fromY, failed to setup resizer (at least one of fromX or fromY must be set)");
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
let We = 0;
const Bn = {
  name: "UluModal",
  components: {
    UluIcon: V
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
    return ++We, {
      containerWidth: null,
      titleId: `ulu-modal-${We}-title`,
      bodyOverflowValue: null,
      bodyPaddingRightValue: null,
      isResizing: !1
    };
  },
  setup(e) {
    const s = Ns(), t = k(() => e.title || s.title), n = k(() => {
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
        s === t && Rn(t, e) && this.close();
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
        e.newState === "open" ? this.restoreScroll = Un({ preventShift: s }) : this.destroyPreventScroll();
      }
    },
    setupResizer() {
      const { position: e, resizerEnabled: s } = this;
      if (s) {
        const { container: t, resizer: n } = this.$refs, i = e === "center" ? { fromX: "right", fromY: "bottom", multiplier: 2 } : { fromX: e === "right" ? "left" : "right" };
        this.resizerInstance = new at(t, n, i), this.handleResizerStart = () => {
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
    ++We, this.preventScroll && this.setupPreventScroll(), this.setupResizer();
  },
  beforeUnmount() {
    const { container: e } = this.$refs;
    e && e.open && e.close(), this.destroyPreventScroll(), this.destroyResizer();
  }
}, Pn = ["aria-labelledby", "aria-describedby"], Fn = ["id"], Ln = { class: "modal__title-text" }, Hn = {
  key: 2,
  class: "modal__resizer",
  ref: "resizer",
  type: "button"
};
function Dn(e, s, t, n, i, o) {
  const r = A("UluIcon");
  return l(), y(nt, {
    to: t.teleport === !1 ? null : t.teleport,
    disabled: t.teleport === !1
  }, [
    f("dialog", {
      class: h(["modal", [n.resolvedModifiers, t.classes.container]]),
      "aria-labelledby": o.resolvedLabelledby,
      "aria-describedby": t.describedby,
      ref: "container",
      style: B({ width: i.containerWidth }),
      onCancel: s[1] || (s[1] = Vs((...a) => o.close && o.close(...a), ["prevent"])),
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
          g(e.$slots, "title", { close: o.close }, () => [
            t.titleIcon ? (l(), y(r, {
              key: 0,
              class: "modal__title-icon",
              icon: t.titleIcon
            }, null, 8, ["icon"])) : _("", !0),
            f("span", Ln, p(t.title), 1)
          ])
        ], 10, Fn),
        f("button", {
          class: "modal__close",
          "aria-label": "Close modal",
          onClick: s[0] || (s[0] = (...a) => o.close && o.close(...a)),
          autofocus: ""
        }, [
          g(e.$slots, "closeIcon", {}, () => [
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
        g(e.$slots, "default", { close: o.close })
      ], 2),
      e.$slots.footer ? (l(), d("div", {
        key: 1,
        class: h(["site-modal__footer", t.classes.footer])
      }, [
        g(e.$slots, "footer", { close: o.close })
      ], 2)) : _("", !0),
      n.resizerEnabled ? (l(), d("button", Hn, [
        g(e.$slots, "resizerIcon", {}, () => [
          R(r, {
            class: "modal__resizer-icon",
            icon: t.resizerIcon || n.resizerIconType
          }, null, 8, ["icon"])
        ])
      ], 512)) : _("", !0)
    ], 46, Pn)
  ], 8, ["to", "disabled"]);
}
const Vn = /* @__PURE__ */ v(Bn, [["render", Dn]]), Se = [], Nn = M({
  /**
   * Holds active component options (including component, and options)
   */
  active: null,
  /**
   * Populated with any props passed to open method, bound to modal component
   */
  activeProps: null
}), ke = Nn.value, kt = {
  data: ke,
  modals: Se
}, Wn = (e) => ({
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
}), Xn = {
  componentNameDisplay: "UluModalsDisplay",
  componentNameModal: "UluModal",
  modals: [],
  modalOptions: {}
};
function df(e, s) {
  const t = Object.assign({}, Xn, s), i = Wn((o) => Object.assign({}, t.modalOptions, o));
  e.component(t.componentNameDisplay, $n), e.component(t.componentNameModal, Vn), t.modals.forEach((o) => {
    i.add(o);
  }), kt.options = t, e.config.globalProperties.$uluModals = i, e.provide("uluModals", i), e.config.globalProperties.$uluModalsState = kt;
}
const qn = {
  name: "UluToast",
  components: {
    UluIcon: V
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
}, Yn = ["onClick"];
function Kn(e, s, t, n, i, o) {
  const r = A("FaIcon"), a = A("UluIcon");
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
      g(e.$slots, "icon", { toast: t.toast }, () => [
        t.toast.icon ? (l(), y(r, {
          key: 0,
          icon: t.toast.icon
        }, null, 8, ["icon"])) : _("", !0)
      ])
    ], 2)) : _("", !0),
    f("div", {
      class: h(["toast__content", t.classes.content])
    }, [
      g(e.$slots, "content", { toast: t.toast }, () => [
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
      (l(!0), d(O, null, T(t.toast.actions, (c, u) => (l(), d("button", {
        key: u,
        class: h(["toast__action", t.classes.action]),
        onClick: (m) => o.handleAction(m, c)
      }, p(c.label), 11, Yn))), 128))
    ], 2)) : _("", !0),
    f("button", {
      class: h(["toast__close", t.classes.closeButton]),
      onClick: s[0] || (s[0] = (...c) => t.toast.close && t.toast.close(...c))
    }, [
      R(a, { icon: "type:close" })
    ], 2)
  ], 2);
}
const gs = /* @__PURE__ */ v(qn, [["render", Kn]]), Ct = {
  toastOptions: {
    /**
     * Component used to render the toast in the display
     */
    component: de(gs),
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
}, { assign: Xe } = Object;
let Gn = 0;
const te = Qt({
  toasts: [],
  /**
   * Saveable 
   */
  pluginOptions: Ct.pluginOptions,
  toastOptions: Ct.toastOptions,
  setToastOptions(e) {
    return this.toastOptions = Xe({}, this.toastOptions, e), this.pluginOptions;
  },
  setPluginOptions(e) {
    return this.pluginOptions = Xe({}, this.pluginOptions, e), this.pluginOptions;
  },
  createToast(e) {
    const s = `toast-${++Gn}`;
    return Xe({}, this.toastOptions, e, {
      uid: s,
      close() {
        Je.remove(s);
      }
    });
  }
}), Je = {
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
}, Zn = {
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
function Jn(e, s, t, n, i, o) {
  return l(), y(nt, {
    to: i.pluginOptions.teleportTo
  }, [
    R(os, {
      class: h(["toast-container", o.classes]),
      name: "toast",
      tag: "div"
    }, {
      default: b(() => [
        (l(!0), d(O, null, T(i.toasts, (r) => (l(), y(z(r.component), {
          key: r.uid,
          toast: r
        }, null, 8, ["toast"]))), 128))
      ]),
      _: 1
    }, 8, ["class"])
  ], 8, ["to"]);
}
const Qn = /* @__PURE__ */ v(Zn, [["render", Jn]]);
function ff(e, s = {}) {
  const t = te.setPluginOptions(s?.plugin);
  te.setToastOptions(s?.toast), e.component(t.componentName, gs), e.component(t.componentNameDisplay, Qn), e.config.globalProperties.$uluToast = Je, e.provide("uluToast", Je);
}
const eo = {
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
function to(e) {
  const s = Object.assign({}, eo, e), t = M(null), n = M(s.initialValue), i = M(null);
  return (async () => {
    if (!ms()) return;
    await new Promise((m) => {
      document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", () => m()) : m();
    });
    const r = await import("./breakpoints-Cuct6LCy.js"), { BreakpointManager: a } = r, c = de(new a(s.plugin));
    t.value = de(c);
    const u = () => {
      n.value = c.active, i.value = c.resizeDirection;
    };
    u(), s.onReady && s.onReady(c), c.onChange(u);
  })(), { breakpointManager: t, breakpointActive: n, breakpointDirection: i };
}
const so = {
  /**
   * Breakpoint for mobile down/max
   */
  breakpointMobile: "small",
  /**
   * Options to pass to useBreakpointManager()
   */
  managerOptions: {}
};
function hf(e, s) {
  const t = M(!1), n = Object.assign({}, so, s), { breakpointMobile: i } = n, { onReady: o } = n.managerOptions, r = {
    onReady(w) {
      w.at(i).max({
        on() {
          t.value = !0;
        },
        off() {
          t.value = !1;
        }
      }), o && o(w);
    }
  }, a = Object.assign({}, n.managerOptions, r), {
    breakpointManager: c,
    breakpointActive: u,
    breakpointDirection: m
  } = to(a);
  e.provide("uluBreakpointActive", k(() => u.value)), e.provide("uluBreakpointDirection", k(() => m.value)), e.provide("uluBreakpointManager", k(() => c.value)), e.provide("uluIsMobile", k(() => t.value));
}
const mf = {
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
    return (n, i) => (l(), y(E(Ks), { defaultOpen: e.defaultOpen }, {
      default: b(({ open: o }) => [
        f("div", {
          class: h(["accordion", [
            { [e.activeClass]: o },
            e.classes.container,
            E(t)
          ]])
        }, [
          R(E(Gs), {
            class: h(["accordion__summary", [
              { [e.activeClass]: o },
              e.classes.summary
            ]])
          }, {
            default: b(() => [
              g(n.$slots, "summary", { open: o }, () => [
                (l(), y(z(e.summaryTextElement), null, {
                  default: b(() => [
                    S(p(e.summaryText), 1)
                  ]),
                  _: 1
                }))
              ]),
              g(n.$slots, "icon", { open: o }, () => [
                f("span", {
                  class: h(["accordion__icon", e.classes.icon])
                }, [
                  R(V, {
                    icon: o ? "type:collapse" : "type:expand",
                    style: { display: "inline" }
                  }, null, 8, ["icon"])
                ], 2)
              ])
            ]),
            _: 2
          }, 1032, ["class"]),
          R(E(Zs), {
            class: h(["accordion__content", e.classes.content])
          }, {
            default: b(() => [
              g(n.$slots, "default", { open: o })
            ]),
            _: 2
          }, 1032, ["class"])
        ], 2)
      ]),
      _: 3
    }, 8, ["defaultOpen"]));
  }
};
let no = 0;
const oo = {
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
      const e = `Ulu-C-${++no}`;
      return document.getElementById(e) ? this.getUid() : e;
    }
  }
}, io = ["id", "aria-controls", "aria-expanded"], ro = ["id", "aria-hidden", "aria-labelledby"], ao = { class: "CollapsibleRegion__content-inner" };
function lo(e, s, t, n, i, o) {
  return l(), d("div", {
    class: h(["CollapsibleRegion", {
      "CollapsibleRegion--open": i.isOpen,
      "CollapsibleRegion--closed": !i.isOpen,
      "CollapsibleRegion--transitioning": i.isTransitioning
    }]),
    onKeydown: s[1] || (s[1] = ts((...r) => o.handleEscape && o.handleEscape(...r), ["esc"]))
  }, [
    f("button", {
      class: "CollapsibleRegion__toggle",
      id: i.toggleId,
      "aria-controls": i.contentId,
      "aria-expanded": i.isOpen,
      onClick: s[0] || (s[0] = (...r) => o.toggle && o.toggle(...r))
    }, [
      g(e.$slots, "toggle", { isOpen: i.isOpen }, () => [
        S(p(t.title), 1)
      ])
    ], 8, io),
    me(f("div", {
      class: "CollapsibleRegion__content",
      tabindex: "-1",
      ref: "content",
      id: i.contentId,
      "aria-hidden": !i.isOpen,
      "aria-labelledby": i.toggleId,
      style: B(o.contentStyles)
    }, [
      f("div", ao, [
        g(e.$slots, "default")
      ])
    ], 12, ro), [
      [is, !i.isHidden]
    ])
  ], 34);
}
const Tt = /* @__PURE__ */ v(oo, [["render", lo]]), co = {
  name: "UluTag",
  components: {
    UluIcon: V
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
function uo(e, s, t, n, i, o) {
  const r = A("UluIcon");
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
    g(e.$slots, "default", {}, () => [
      S(p(t.text), 1)
    ])
  ], 2);
}
const fo = /* @__PURE__ */ v(co, [["render", uo]]), ho = {
  name: "UluMenu",
  components: {
    UluIcon: V,
    UluTag: fo
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
function mo(e, s, t, n, i, o) {
  const r = A("UluIcon"), a = A("UluTag"), c = A("UluMenu", !0), u = es("ulu-tooltip");
  return t.items?.length ? (l(), d("ul", {
    key: 0,
    class: h(t.classes.list)
  }, [
    (l(!0), d(O, null, T(t.items, (m, w) => (l(), d("li", {
      key: w,
      class: h([t.classes.item, m?.classes?.item])
    }, [
      me((l(), y(z(m.to || m.path ? "router-link" : m.click ? "button" : "a"), G({ ref_for: !0 }, {
        ...m.to || m.path ? { to: m.to || m.path } : {},
        ...m.href ? { href: m.href || "#" } : {}
      }, {
        onClick: (C) => {
          o.handleItemClick(C, m);
        },
        class: [t.classes.link, m?.classes?.link],
        activeClass: t.classes.linkActive,
        exactActiveClass: t.classes.linkExactActive,
        "aria-label": t.iconOnly ? m.title : null,
        id: m.id
      }), {
        default: b(() => [
          g(e.$slots, "default", {
            item: m,
            index: w
          }, () => [
            m.icon ? (l(), y(r, {
              key: 0,
              icon: m.icon,
              class: h([t.classes.linkIcon, m?.classes?.linkIcon])
            }, null, 8, ["icon", "class"])) : _("", !0),
            f("span", {
              class: h([t.classes.linkText, m?.classes?.linkText])
            }, p(m.title), 3),
            m.tag ? (l(), y(a, G({
              key: 1,
              ref_for: !0
            }, m.tag), null, 16)) : _("", !0)
          ])
        ]),
        _: 2
      }, 1040, ["onClick", "class", "activeClass", "exactActiveClass", "aria-label", "id"])), [
        [u, t.iconOnly ? m.title : m.tooltip || null]
      ]),
      !t.noChildren && m?.children?.length ? (l(), y(c, {
        key: 0,
        iconOnly: t.iconOnly,
        classes: t.classes,
        items: m.children
      }, null, 8, ["iconOnly", "classes", "items"])) : _("", !0)
    ], 2))), 128))
  ], 2)) : _("", !0);
}
const _s = /* @__PURE__ */ v(ho, [["render", mo]]), go = {
  name: "UluMenuStack",
  components: {
    UluMenu: _s
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
function _o(e, s, t, n, i, o) {
  const r = A("UluMenu");
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
const yo = /* @__PURE__ */ v(go, [["render", _o]]), po = {
  name: "UluDropdown",
  components: {
    UluPopover: rt,
    UluMenuStack: yo
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
function vo(e, s, t, n, i, o) {
  const r = A("UluMenuStack"), a = A("UluPopover");
  return l(), y(a, { classes: t.popoverClasses }, {
    trigger: b(({ isOpen: c }) => [
      g(e.$slots, "default", { isOpen: c })
    ]),
    content: b(() => [
      R(r, { items: t.items }, null, 8, ["items"])
    ]),
    _: 3
  }, 8, ["classes"]);
}
const gf = /* @__PURE__ */ v(po, [["render", vo]]), lt = M(!1), ze = {
  start: [],
  end: []
};
function ct() {
  window.removeEventListener("resize", ct), lt.value = !0, ze.start.forEach((e) => e());
}
function bo() {
  lt.value = !1, ze.end.forEach((e) => e()), window.addEventListener("resize", ct);
}
window.addEventListener("resize", ct), window.addEventListener("resize", Pe(bo, 300));
function At(e, s) {
  return e.push(s), () => {
    const t = e.findIndex((n) => n === s);
    t > -1 && e.splice(t);
  };
}
function wo() {
  return {
    resizing: lt,
    onResizeStart(e) {
      return At(ze.start, e);
    },
    onResizeEnd(e) {
      return At(ze.end, e);
    }
  };
}
const So = {
  uluCore: "Core",
  uluIsMobile: "Breakpoints",
  uluBreakpointActive: "Breakpoints",
  uluBreakpointDirection: "Breakpoints",
  uluBreakpointManager: "Breakpoints",
  uluModals: "Modals",
  uluToast: "Toast"
}, $t = {};
function ko(e) {
  const s = ns(e, $t);
  if (s === $t) {
    const t = So[e] || "", n = t ? ` from the '${t}' plugin` : "", i = t ? "Please install missing plugin." : "";
    throw new Error(`Required inject: '${e}'${n} was not provided. ${i}`);
  }
  return s;
}
function _f(e, s) {
  const t = nn(), n = on(), i = k(() => {
    const u = parseInt(t.query.page || "1", 10);
    return isNaN(u) || u < 1 ? 1 : u;
  }), o = k(() => !e.value || e.value.length === 0 ? 1 : Math.ceil(e.value.length / s));
  rs(o, (u) => {
    i.value > u && n.push({ query: { ...t.query, page: u } });
  });
  const r = k(() => {
    const u = (i.value - 1) * s, m = u + s;
    return e.value.slice(u, m);
  }), a = k(() => {
    if (o.value <= 1)
      return null;
    const u = {
      pages: {}
    }, m = i.value, w = o.value, C = 5, I = (H) => ({ query: { ...t.query, page: H } });
    m > 1 && (u.first = { href: I(1) }, u.previous = { href: I(m - 1) }), m < w && (u.next = { href: I(m + 1) }, u.last = { href: I(w) });
    let x, P;
    if (w <= C)
      x = 1, P = w;
    else {
      const H = Math.floor(C / 2), J = Math.ceil(C / 2) - 1;
      m <= H ? (x = 1, P = C) : m + J >= w ? (x = w - C + 1, P = w) : (x = m - H, P = m + J);
    }
    for (let H = x; H <= P; H++)
      u.pages[H] = { href: I(H) };
    return u;
  }), c = k(() => {
    const u = { previous: !1, next: !1 };
    if (!a.value || !a.value.pages) return u;
    const m = Object.keys(a.value.pages).map(Number);
    if (m.length === 0) return u;
    const w = Math.min(...m), C = Math.max(...m);
    return w > 1 && (u.previous = !0), C < o.value && (u.next = !0), u;
  });
  return {
    currentPage: i,
    totalPages: o,
    paginatedItems: r,
    pagerItems: a,
    pagerEllipses: c
  };
}
const Co = { class: "layout-flex-baseline" }, To = { class: "type-word-break" }, yf = {
  __name: "UluOverflowPopover",
  props: {
    /**
     * Default icon for overflow popover trigger
     */
    triggerIcon: String
  },
  setup(e) {
    const { resizing: s, onResizeEnd: t } = wo(), n = M(null), i = M(!1), o = () => {
      ss(() => {
        const a = n.value;
        i.value = a.offsetWidth < a.scrollWidth;
      });
    }, r = t(o);
    return Ws(o), Xs(r), (a, c) => (l(), d("div", Co, [
      f("div", {
        class: "type-truncate",
        ref_key: "text",
        ref: n
      }, [
        g(a.$slots, "default")
      ], 512),
      i.value && !E(s) ? (l(), y(rt, {
        key: 0,
        triggerAlt: "Show Full Text",
        size: "large"
      }, {
        trigger: b(() => [
          R(V, {
            icon: e.triggerIcon || "type:ellipsis"
          }, null, 8, ["icon"])
        ]),
        content: b(() => [
          f("div", To, [
            g(a.$slots, "default")
          ])
        ]),
        _: 3
      })) : _("", !0)
    ]));
  }
}, pf = {
  __name: "UluTab",
  setup(e) {
    return (s, t) => (l(), y(E(Js), null, {
      default: b((n) => [
        g(s.$slots, "default", N(q(n)))
      ]),
      _: 3
    }));
  }
}, vf = /* @__PURE__ */ Object.assign({
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
    return (s, t) => (l(), y(E(Qs), {
      defaultIndex: e.defaultIndex,
      vertical: e.vertical
    }, {
      default: b((n) => [
        f("div", {
          class: h(["tabs", {
            "tabs--vertical": e.vertical
          }])
        }, [
          g(s.$slots, "default", N(q(n)))
        ], 2)
      ]),
      _: 3
    }, 8, ["defaultIndex", "vertical"]));
  }
}), bf = {
  __name: "UluTabList",
  setup(e) {
    return (s, t) => (l(), y(E(en), { class: "tabs__tablist" }, {
      default: b(() => [
        g(s.$slots, "default")
      ]),
      _: 3
    }));
  }
}, wf = {
  __name: "UluTabPanel",
  setup(e) {
    return (s, t) => (l(), y(E(tn), null, {
      default: b((n) => [
        g(s.$slots, "default", N(q(n)))
      ]),
      _: 3
    }));
  }
}, Sf = {
  __name: "UluTabPanels",
  setup(e) {
    return (s, t) => (l(), y(E(sn), null, {
      default: b((n) => [
        g(s.$slots, "default", N(q(n)))
      ]),
      _: 3
    }));
  }
}, Ao = {
  name: "UluButton",
  components: {
    UluIcon: V
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
      return this.to ? Be : this.href ? "a" : "button";
    },
    attrs() {
      const { to: e, href: s, download: t, target: n } = this, i = e ? { to: e } : s ? { href: s } : {};
      return s && (n && (i.target = n), t && (i.download = typeof t == "string" ? t : !0)), i;
    }
  }
}, $o = { key: 1 };
function Oo(e, s, t, n, i, o) {
  const r = A("UluIcon");
  return l(), y(z(o.element), G({
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
      g(e.$slots, "before"),
      t.icon && (t.iconBefore || t.iconOnly) ? (l(), y(r, {
        key: 0,
        icon: t.icon,
        class: "button__icon"
      }, null, 8, ["icon"])) : _("", !0),
      (e.$slots.default || t.text) && !t.iconOnly ? (l(), d("span", $o, [
        g(e.$slots, "default", {}, () => [
          S(p(t.text), 1)
        ])
      ])) : _("", !0),
      t.icon && !t.iconBefore && !t.iconOnly ? (l(), y(r, {
        key: 2,
        icon: t.icon,
        class: "button__icon"
      }, null, 8, ["icon"])) : _("", !0),
      g(e.$slots, "after")
    ]),
    _: 3
  }, 16, ["class", "aria-label"]);
}
const Ro = /* @__PURE__ */ v(Ao, [["render", Oo]]), xo = {
  name: "UluAlert",
  components: {
    UluButton: Ro,
    UluIcon: V
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
}, Uo = { class: "layout-flex" }, Io = { class: "type-small" }, jo = {
  key: 0,
  class: "margin-left-auto align-self-center"
};
function Eo(e, s, t, n, i, o) {
  const r = A("UluIcon");
  return l(), d("div", {
    class: h(["callout", n.resolvedModifiers])
  }, [
    f("div", Uo, [
      R(r, {
        class: h(["type-large margin-right-small", `color-${t.type}`]),
        icon: t.icon || `type:${t.type}`
      }, null, 8, ["class", "icon"]),
      f("div", Io, [
        f("div", null, [
          g(e.$slots, "title", {}, () => [
            f("strong", null, p(t.title), 1)
          ])
        ]),
        f("div", null, [
          g(e.$slots, "description", {}, () => [
            S(p(t.description), 1)
          ])
        ])
      ]),
      e.$slots.action ? (l(), d("div", jo, [
        g(e.$slots, "action")
      ])) : _("", !0)
    ])
  ], 2);
}
const kf = /* @__PURE__ */ v(xo, [["render", Eo]]), zo = {
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
      return e ? "button" : s ? Be : t ? "a" : "span";
    }
  }
}, Mo = ["aria-hidden"], Bo = {
  key: 2,
  class: "hidden-visually"
};
function Po(e, s, t, n, i, o) {
  return l(), y(z(o.element), {
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
        }, p(t.text), 9, Mo)) : g(e.$slots, "default", { key: 1 }),
        t.alt ? (l(), d("span", Bo, p(t.alt), 1)) : _("", !0)
      ], 2)
    ]),
    _: 3
  }, 8, ["class", "to", "href", "onClick"]);
}
const Fo = /* @__PURE__ */ v(zo, [["render", Po]]), Lo = {
  name: "UluBadgeStack",
  components: {
    UluBadge: Fo
  },
  props: {
    /**
     * Array of props for each badge
     */
    items: Array
  }
}, Ho = { class: "badge-stack" };
function Do(e, s, t, n, i, o) {
  const r = A("UluBadge");
  return l(), d("ul", Ho, [
    (l(!0), d(O, null, T(t.items, (a, c) => (l(), d("li", {
      class: "badge-stack__item",
      key: c
    }, [
      R(r, G({ ref_for: !0 }, a), null, 16)
    ]))), 128))
  ]);
}
const Cf = /* @__PURE__ */ v(Lo, [["render", Do]]), Vo = {
  name: "UluButtonVerbose",
  components: {
    UluIcon: V
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
      return this.to ? Be : this.href ? "a" : "button";
    },
    attrs() {
      const { to: e, href: s, download: t, target: n } = this, i = e ? { to: e } : s ? { href: s } : {};
      return s && (n && (i.target = n), t && (i.download = typeof t == "string" ? t : !0)), i;
    }
  }
}, No = {
  key: 1,
  class: "button-verbose__body"
};
function Wo(e, s, t, n, i, o) {
  const r = A("UluIcon");
  return l(), y(z(o.element), G({
    class: ["button-verbose", [
      {
        "button-verbose--inline": t.inline,
        "button-verbose--full-width": t.fullWidth
      },
      n.resolvedModifiers
    ]]
  }, o.attrs), {
    default: b(() => [
      e.$slots.title || t.title ? (l(), y(z(t.titleElement), {
        key: 0,
        class: "button-verbose__title"
      }, {
        default: b(() => [
          g(e.$slots, "title", {}, () => [
            S(p(t.title), 1)
          ])
        ]),
        _: 3
      })) : _("", !0),
      e.$slots.default || t.body ? (l(), d("span", No, [
        g(e.$slots, "default", {}, () => [
          S(p(t.body), 1)
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
const Tf = /* @__PURE__ */ v(Vo, [["render", Wo]]), Xo = {
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
function qo(e, s, t, n, i, o) {
  return l(), d("div", {
    class: h(["callout", [n.resolvedModifiers, { "full-height": t.fullHeight }]])
  }, [
    g(e.$slots, "default")
  ], 2);
}
const Af = /* @__PURE__ */ v(Xo, [["render", qo]]), Ot = (e, s) => {
  const t = !(s.to || s.href);
  return t || console.warn("'titleHref' and 'titleTo' can't be used with to or href (nesting links)"), t;
}, Yo = {
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
      validator: Ot
    },
    /**
     * Will make title a link to href
     */
    titleHref: {
      type: String,
      validator: Ot
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
      return s ? Be : t ? "a" : e;
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
}, Ko = { class: "card__body" }, Go = { class: "card__main" }, Zo = ["href", "target"], Jo = {
  key: 0,
  class: "card__aside"
}, Qo = ["src", "alt"], ei = {
  key: 1,
  class: "card__footer"
};
function ti(e, s, t, n, i, o) {
  const r = A("router-link");
  return l(), y(z(o.resolvedElement), {
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
    style: B({ cursor: i.cursorStyle }),
    target: t.target,
    to: t.to,
    href: t.href,
    "data-ulu-proxy-click-init": i.proxyClickEnabled
  }, {
    default: b(() => [
      f("div", Ko, [
        f("div", Go, [
          (l(), y(z(t.titleElement), {
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
                  g(e.$slots, "title", {}, () => [
                    S(p(t.title), 1)
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
                g(e.$slots, "title", {}, () => [
                  S(p(t.title), 1)
                ])
              ], 8, Zo)) : g(e.$slots, "title", { key: 2 }, () => [
                S(p(t.title), 1)
              ])
            ]),
            _: 3
          }, 8, ["class"])),
          g(e.$slots, "body")
        ]),
        e.$slots.aside ? (l(), d("div", Jo, [
          g(e.$slots, "aside")
        ])) : _("", !0)
      ]),
      e.$slots.image || t.imageSrc ? (l(), d("div", {
        key: 0,
        class: h(["card__image", [
          { "card__image--icon": t.imageIcon },
          t.classes.image
        ]])
      }, [
        g(e.$slots, "image", {}, () => [
          f("img", {
            src: t.imageSrc,
            alt: t.imageAlt
          }, null, 8, Qo)
        ])
      ], 2)) : _("", !0),
      e.$slots.footer ? (l(), d("div", ei, [
        g(e.$slots, "footer")
      ])) : _("", !0)
    ]),
    _: 3
  }, 40, ["onMousedown", "onMouseup", "class", "style", "target", "to", "href", "data-ulu-proxy-click-init"]);
}
const $f = /* @__PURE__ */ v(Yo, [["render", ti]]), si = {
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
function ni(e, s, t, n, i, o) {
  return l(), d("dl", {
    class: h(t.classes.list)
  }, [
    (l(!0), d(O, null, T(t.items, (r, a) => (l(), d("div", {
      key: a,
      class: h(t.classes.item)
    }, [
      f("dt", {
        class: h(t.classes.term)
      }, [
        g(e.$slots, "term", {
          item: r,
          index: a
        }, () => [
          S(p(r.term), 1)
        ])
      ], 2),
      f("dd", {
        class: h(t.classes.description)
      }, [
        g(e.$slots, "description", {
          item: r,
          index: a
        }, () => [
          S(p(r.description), 1)
        ])
      ], 2)
    ], 2))), 128))
  ], 2);
}
const Of = /* @__PURE__ */ v(si, [["render", ni]]), oi = {
  name: "UluExternalLink",
  components: {
    UluIcon: V
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
}, ii = ["href", "target"], ri = { class: "external-link__text" };
function ai(e, s, t, n, i, o) {
  const r = A("UluIcon");
  return l(), d("a", {
    class: "external-link",
    href: t.href,
    target: t.target
  }, [
    f("span", ri, [
      g(e.$slots, "default", {}, () => [
        S(p(t.text), 1)
      ])
    ]),
    R(r, {
      class: "external-link__icon margin-left-small-x display-inline",
      icon: t.icon || "type:externalLink"
    }, null, 8, ["icon"])
  ], 8, ii);
}
const Rf = /* @__PURE__ */ v(oi, [["render", ai]]), li = {
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
function ci(e, s, t, n, i, o) {
  return l(), y(z(o.listElement), {
    class: h([
      {
        "list-ordered": t.ordered,
        "list-unordered": t.unordered,
        "list-lines": t.lines,
        "list-compact": t.compact
      },
      t.classes.list
    ]),
    style: B({
      listStyleType: t.listStyleType
    }),
    reversed: t.reversed,
    start: t.start
  }, {
    default: b(() => [
      (l(!0), d(O, null, T(t.items, (r, a) => (l(), d("li", {
        key: a,
        class: h(t.classes.listItem)
      }, [
        g(e.$slots, "default", {
          item: r,
          index: a
        }, () => [
          S(p(r), 1)
        ])
      ], 2))), 128))
    ]),
    _: 3
  }, 8, ["class", "style", "reversed", "start"]);
}
const xf = /* @__PURE__ */ v(li, [["render", ci]]), ui = {}, di = { id: "main-content" };
function fi(e, s) {
  return l(), d("main", di, [
    g(e.$slots, "default")
  ]);
}
const Uf = /* @__PURE__ */ v(ui, [["render", fi]]), hi = {
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
function mi(e, s, t, n, i, o) {
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
const If = /* @__PURE__ */ v(hi, [["render", mi]]), gi = {
  name: "UluCheckboxMenu",
  props: {
    options: Array
  },
  methods: {
    getId(e) {
      return `checkbox-menu-opt-${e}`;
    }
  }
}, _i = { class: "site-menu site-form" }, yi = { class: "site-menu__checkbox" }, pi = ["id", "onUpdate:modelValue"], vi = ["for"];
function bi(e, s, t, n, i, o) {
  return l(), d("ul", _i, [
    (l(!0), d(O, null, T(t.options, (r, a) => (l(), d("li", {
      class: "site-menu__item",
      key: a
    }, [
      f("div", yi, [
        me(f("input", {
          type: "checkbox",
          id: o.getId(a),
          "onUpdate:modelValue": (c) => r.checked = c
        }, null, 8, pi), [
          [qs, r.checked]
        ]),
        f("label", {
          for: o.getId(a)
        }, [
          g(e.$slots, "default", {}, () => [
            S(p(r?.title || r?.text), 1)
          ])
        ], 8, vi)
      ])
    ]))), 128))
  ]);
}
const jf = /* @__PURE__ */ v(gi, [["render", bi]]), wi = {
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
}, Si = ["href", "download"], ki = { class: "margin-left-small-x" }, Ci = { class: "tag tag--small tag--outline type-small-x" };
function Ti(e, s, t, n, i, o) {
  const r = A("FaIcon");
  return l(), d("a", {
    class: "layout-flex-baseline",
    href: o.fileUrl,
    download: t.file.name
  }, [
    R(r, {
      class: "ui-icon",
      icon: ["far", e.$site.getIcon("file")]
    }, null, 8, ["icon"]),
    f("span", ki, [
      S(p(t.file.name) + " ", 1),
      f("span", Ci, p(o.fileSize), 1)
    ])
  ], 8, Si);
}
const Ef = /* @__PURE__ */ v(wi, [["render", Ti]]);
let Ai = 0;
const $i = {
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
      id: `file-input-id-${++Ai}`
    };
  },
  methods: {
    onChangeFile(e) {
      this.$emit("filesChange", e.target.files);
    }
  }
}, Oi = { class: "site-form__item site-form__item--file" }, Ri = ["for"], xi = ["multiple", "id"];
function Ui(e, s, t, n, i, o) {
  return l(), d("div", Oi, [
    f("label", {
      class: h({ "hidden-visually": t.labelHidden }),
      for: i.id
    }, [
      g(e.$slots, "label", {}, () => [
        S(p(t.label), 1)
      ])
    ], 10, Ri),
    f("input", G({
      type: "file",
      onChange: s[0] || (s[0] = (...r) => o.onChangeFile && o.onChangeFile(...r)),
      multiple: t.multiple,
      id: i.id
    }, t.inputAttrs), null, 16, xi)
  ]);
}
const zf = /* @__PURE__ */ v($i, [["render", Ui]]), Ii = {
  name: "FormMessage",
  props: {
    warning: Boolean,
    error: Boolean
  }
};
function ji(e, s, t, n, i, o) {
  const r = A("FaIcon");
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
    g(e.$slots, "default")
  ], 2);
}
const Mf = /* @__PURE__ */ v(Ii, [["render", ji]]);
let Ei = 0;
const zi = {
  name: "FormSelect",
  props: {
    label: String,
    modelValue: String,
    options: Array,
    labelHidden: Boolean
  },
  data() {
    return {
      id: `select-id-${++Ei}`
    };
  }
}, Mi = { class: "site-form__item site-form__item--select" }, Bi = ["for"], Pi = ["id", "value"], Fi = ["value"];
function Li(e, s, t, n, i, o) {
  return l(), d("div", Mi, [
    f("label", {
      class: h({ "hidden-visually": t.labelHidden }),
      for: i.id
    }, [
      g(e.$slots, "default", {}, () => [
        S(p(t.label), 1)
      ])
    ], 10, Bi),
    f("select", {
      id: i.id,
      value: t.modelValue,
      onInput: s[0] || (s[0] = (r) => e.$emit("update:modelValue", r.target.value))
    }, [
      s[1] || (s[1] = f("option", {
        disabled: "",
        value: ""
      }, "Please select one", -1)),
      (l(!0), d(O, null, T(t.options, (r, a) => (l(), d("option", {
        key: a,
        value: r.value
      }, p(r.text), 9, Fi))), 128))
    ], 40, Pi)
  ]);
}
const Bf = /* @__PURE__ */ v(zi, [["render", Li]]);
let Hi = 0;
const Di = {
  name: "FormText",
  props: {
    label: String,
    modelValue: String,
    labelHidden: Boolean
  },
  data() {
    return {
      id: `text-input-id-${++Hi}`
    };
  }
}, Vi = { class: "site-form__item site-form__item--text" }, Ni = ["for"], Wi = ["value", "id"];
function Xi(e, s, t, n, i, o) {
  return l(), d("div", Vi, [
    f("label", {
      class: h({ "hidden-visually": t.labelHidden }),
      for: i.id
    }, [
      g(e.$slots, "default", {}, () => [
        S(p(t.label), 1)
      ])
    ], 10, Ni),
    f("input", {
      type: "text",
      value: t.modelValue,
      onInput: s[0] || (s[0] = (r) => e.$emit("update:modelValue", r.target.value)),
      id: i.id
    }, null, 40, Wi)
  ]);
}
const Pf = /* @__PURE__ */ v(Di, [["render", Xi]]), qi = {
  name: "SearchForm",
  props: {
    placeholder: {
      type: String,
      default: "Titles, keyword…"
    }
  }
}, Yi = { class: "form-theme search-form type-small" }, Ki = { class: "search-form__field" }, Gi = ["placeholder"], Zi = {
  class: "search-form__submit button button--primary",
  "aria-label": "Submit Search"
};
function Ji(e, s, t, n, i, o) {
  const r = A("FaIcon");
  return l(), d("div", Yi, [
    f("div", Ki, [
      s[0] || (s[0] = f("label", { class: "hidden-visually" }, "Search", -1)),
      f("input", {
        class: "search-form__input",
        type: "text",
        id: "example-input",
        placeholder: t.placeholder
      }, null, 8, Gi)
    ]),
    f("button", Zi, [
      R(r, {
        icon: e.$site.getIcon("search")
      }, null, 8, ["icon"])
    ])
  ]);
}
const Ff = /* @__PURE__ */ v(qi, [["render", Ji]]), Lf = {
  __name: "UluAdaptiveLayout",
  setup(e) {
    const s = ko("uluIsMobile");
    return (t, n) => !E(s) || !t.$slots.mobile ? g(t.$slots, "default", { key: 0 }) : g(t.$slots, "mobile", { key: 1 });
  }
};
function Qi(e) {
  var s;
  return e = e.replace(/^[^-_a-zA-Z]+/, "").replace(/^-(?:[-0-9]+)/, "-"), s = e && e.replace(/[^-_a-zA-Z0-9]+/g, "-"), s.toLowerCase();
}
function er(e, s = {
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
const tr = {
  name: "UluDataGrid",
  async mounted() {
    const e = () => er(this.$el);
    e(), this.resizeHandler = Pe(e, 200, !1, this), window.addEventListener("resize", this.resizeHandler);
  },
  beforeUnmount() {
    this.resizeHandler && window.removeEventListener("resize", this.resizeHandler);
  }
};
function sr(e, s, t, n, i, o) {
  return l(), d("div", null, [
    g(e.$slots, "default")
  ]);
}
const Hf = /* @__PURE__ */ v(tr, [["render", sr]]), nr = {
  name: "UluTitleRail",
  components: {
    UluIcon: V
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
}, or = {
  key: 0,
  class: "rail__item rail__item--pull"
};
function ir(e, s, t, n, i, o) {
  const r = A("UluIcon");
  return l(), d("div", {
    class: h(["rail rail--title-rail", {
      "rail--rule": t.rule
    }])
  }, [
    f("div", {
      class: h(["rail__item rail__item--title", t.classes.itemTitle])
    }, [
      (l(), y(z(t.titleElement), {
        class: h(["layout-flex type-max-width-small no-margin", t.classes.title]),
        style: B({ alignItems: t.iconAlign })
      }, {
        default: b(() => [
          t.icon ? (l(), y(r, {
            key: 0,
            class: h(t.classes.icon),
            icon: t.icon
          }, null, 8, ["class", "icon"])) : _("", !0),
          g(e.$slots, "default", {}, () => [
            S(p(t.title), 1)
          ])
        ]),
        _: 3
      }, 8, ["class", "style"]))
    ], 2),
    e.$slots.end ? (l(), d("div", or, [
      g(e.$slots, "end")
    ])) : _("", !0)
  ], 2);
}
const Df = /* @__PURE__ */ v(nr, [["render", ir]]), rr = {
  name: "UluBreadcrumb",
  components: {
    UluIcon: V
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
function ar(e, s, t, n, i, o) {
  const r = A("router-link"), a = A("UluIcon");
  return t.items.length ? (l(), d("nav", {
    key: 0,
    class: h(t.classes.nav),
    "aria-label": "Breadcrumb"
  }, [
    f("ul", {
      class: h(t.classes.list)
    }, [
      (l(!0), d(O, null, T(t.items, (c, u) => (l(), d("li", {
        key: u,
        class: h(t.classes.item)
      }, [
        R(r, {
          to: c.to,
          class: h(t.classes.link),
          "aria-current": c.current ? "page" : null
        }, {
          default: b(() => [
            g(e.$slots, "default", { item: c }, () => [
              S(p(c.title), 1)
            ])
          ]),
          _: 2
        }, 1032, ["to", "class", "aria-current"]),
        u < t.items.length - 1 ? g(e.$slots, "separator", { key: 0 }, () => [
          R(a, {
            class: h(t.classes.separator),
            icon: t.separatorIcon || "type:pathSeparator"
          }, null, 8, ["class", "icon"])
        ]) : _("", !0)
      ], 2))), 128))
    ], 2)
  ], 2)) : _("", !0);
}
const Vf = /* @__PURE__ */ v(rr, [["render", ar]]), lr = {
  name: "UluNavStrip",
  components: {
    UluMenu: _s
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
function cr(e, s, t, n, i, o) {
  const r = A("UluMenu");
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
const Nf = /* @__PURE__ */ v(lr, [["render", cr]]), ur = {}, dr = {
  class: "site-skip-link hidden-visually-focusable",
  href: "#main-content"
};
function fr(e, s) {
  return l(), d("a", dr, " Skip to main content ");
}
const Wf = /* @__PURE__ */ v(ur, [["render", fr]]), hr = {
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
function mr(e, s, t, n, i, o) {
  return t.text != null ? (l(), y(z(t.element), { key: 0 }, {
    default: b(() => [
      S(p(t.text), 1)
    ]),
    _: 1
  })) : _("", !0);
}
const Xf = /* @__PURE__ */ v(hr, [["render", mr]]), gr = {}, _r = { style: { display: "none" } };
function yr(e, s) {
  return l(), d("span", _r);
}
const qf = /* @__PURE__ */ v(gr, [["render", yr]]), pr = {};
function vr(e, s) {
  const t = A("router-view");
  return l(), y(t);
}
const Yf = /* @__PURE__ */ v(pr, [["render", vr]]);
function Me(e = 0, s = 100) {
  return e = Math.ceil(e), s = Math.floor(s), Math.floor(Math.random() * (s - e) + e);
}
const br = {
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
        width: Me(500, 1e3),
        height: Me(500, 1e3)
      } : { width: s, height: t };
    }
  }
}, wr = ["src", "alt"];
function Sr(e, s, t, n, i, o) {
  return l(), d("img", {
    src: o.src,
    alt: t.alt
  }, null, 8, wr);
}
const Kf = /* @__PURE__ */ v(br, [["render", Sr]]), kr = {
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
function Cr(e, s, t, n, i, o) {
  return l(!0), d(O, null, T(parseInt(t.amount), (r) => (l(), y(z(t.element), { key: r }, {
    default: b(() => s[0] || (s[0] = [
      S(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed semper erat tincidunt tellus vestibulum dictum. Fusce vel augue commodo, egestas diam sed, accumsan leo. Maecenas congue nec nisl et ullamcorper. Maecenas tincidunt, tortor et viverra eleifend, enim leo vestibulum ipsum, quis placerat mi nisi nec ex. Vivamus a justo volutpat, scelerisque elit eget, lacinia ex. Phasellus dapibus sollicitudin tortor, vitae suscipit nunc condimentum ut. Cras suscipit feugiat nibh nec consectetur. Phasellus vitae quam blandit, cursus metus ut, placerat mi. Sed tempor lacus non est interdum imperdiet nec quis metus. Praesent vel eleifend diam. Donec tincidunt eget purus sed posuere. ")
    ])),
    _: 2,
    __: [0]
  }, 1024))), 128);
}
const Gf = /* @__PURE__ */ v(kr, [["render", Cr]]), Tr = {
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
function Ar(e, s, t, n, i, o) {
  return o.title ? (l(), d("p", {
    key: 0,
    tabindex: "-1",
    class: "hidden-visually",
    ref: "el"
  }, p(o.title), 513)) : _("", !0);
}
const Zf = /* @__PURE__ */ v(Tr, [["render", Ar]]), $r = {
  name: "AnimateNumber",
  props: {
    /**
     * Number to animate as it changes
     */
    value: Number
  },
  watch: {
    value() {
      rn.to(this, {
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
function Or(e, s, t, n, i, o) {
  return l(), d("span", null, [
    g(e.$slots, "default", { currentValue: i.currentValue }, () => [
      S(p(i.currentValue), 1)
    ])
  ]);
}
const Jf = /* @__PURE__ */ v($r, [["render", Or]]), Rr = {
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
}, xr = { class: "progress-bar__header" }, Ur = {
  key: 0,
  class: "progress-bar__icon"
}, Ir = { class: "hidden-visually" }, jr = { class: "progress-bar__track" }, Er = { class: "progress-bar__values" }, zr = { class: "progress-bar__value progress-bar__value--amount" }, Mr = {
  key: 0,
  class: "progress-bar__value progress-bar__value--deficit color-status is-danger"
}, Br = { class: "progress-bar__value progress-bar__value--total" };
function Pr(e, s, t, n, i, o) {
  const r = A("StatusIcon");
  return l(), d("div", {
    class: h(["progress-bar", {
      "progress-bar--small": t.small,
      "progress-bar--icon-left": t.iconOnLeft,
      "type-small": t.small
    }])
  }, [
    f("div", xr, [
      f("strong", {
        class: h(["progress-bar__label", {
          "type-normal": t.small,
          "hidden-visually": t.labelHidden
        }])
      }, p(t.label), 3),
      o.status ? (l(), d("div", Ur, [
        R(r, {
          type: o.status.type
        }, null, 8, ["type"]),
        f("span", Ir, p(o.status.message), 1)
      ])) : _("", !0)
    ]),
    f("div", jr, [
      f("div", {
        class: "progress-bar__bar",
        style: B(`width: ${o.percentage}%`)
      }, null, 4),
      t.deficit ? (l(), d("div", {
        key: 0,
        class: "progress-bar__bar--deficit",
        style: B(`width: ${o.defPercentage}%`)
      }, null, 4)) : _("", !0)
    ]),
    f("div", Er, [
      f("div", zr, [
        s[0] || (s[0] = f("strong", { class: "hidden-visually" }, "Amount:", -1)),
        S(" " + p(t.amount), 1)
      ]),
      t.deficit > 0 ? (l(), d("div", Mr, [
        s[1] || (s[1] = f("strong", { class: "hidden-visually" }, "Deficit: ", -1)),
        S(" -" + p(t.deficit), 1)
      ])) : _("", !0),
      f("div", Br, [
        s[2] || (s[2] = f("strong", { class: "hidden-visually" }, "Total:", -1)),
        S(" " + p(t.total), 1)
      ])
    ])
  ], 2);
}
const Qf = /* @__PURE__ */ v(Rr, [["render", Pr]]);
let Fr = 0;
const Lr = {
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
      uid: `progress-donut-${++Fr}`
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
}, Hr = { class: "progress-donut__chart" }, Dr = {
  class: "progress-donut__chart-svg",
  viewBox: "0 0 32 32"
}, Vr = ["r"], Nr = {
  key: 0,
  class: "progress-donut__chart-value"
}, Wr = {
  key: 0,
  class: "progress-donut__value type-small-x"
};
function Xr(e, s, t, n, i, o) {
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
    f("div", Hr, [
      (l(), d("svg", Dr, [
        f("circle", {
          class: "progress-donut__chart-pie",
          ref: "pie",
          r: "16",
          cx: "16",
          cy: "16",
          style: B({ strokeDasharray: o.endDasharray })
        }, null, 4),
        f("circle", {
          class: "progress-donut__chart-mask",
          r: t.small ? 7 : 11,
          cx: "16",
          cy: "16"
        }, null, 8, Vr)
      ])),
      t.small ? _("", !0) : (l(), d("strong", Nr, p(t.percentage) + "% ", 1))
    ]),
    t.small ? (l(), d("strong", Wr, p(t.percentage) + "% ", 1)) : _("", !0)
  ], 2);
}
const eh = /* @__PURE__ */ v(Lr, [["render", Xr]]);
function qr(e, s) {
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
function th(e, s = {}) {
  const t = ($, F) => {
    const L = $[F];
    return L === null || typeof L > "u" ? [] : Array.isArray(L) ? L : [L];
  }, {
    initialFacets: n,
    facetFields: i,
    initialSearchValue: o = "",
    initialSortType: r = "az",
    noDefaultSorts: a = !1,
    extraSortTypes: c = {},
    searchOptions: u = {},
    getItemFacet: m = t,
    getSortValue: w = ($) => $.title || $.label || ""
  } = s, C = ($) => $.sort((F, L) => {
    const X = w(F), W = w(L);
    return X && W ? String(X).localeCompare(String(W)) : X ? -1 : W ? 1 : 0;
  }), I = {
    az: { text: "A-Z", sort: C },
    za: { text: "Z-A", sort: ($) => C($).reverse() }
  };
  function x($) {
    return ($ || []).map((F) => ({
      ...F,
      open: F.open || !1,
      children: F.children.map((L) => ({
        ...L,
        selected: L.selected || !1
      })),
      selectedCount: 0
    }));
  }
  const P = k(() => !i || !e.value?.length ? null : qr(e.value, i)), H = M(x(n || P.value)), J = M(o), Re = M(r);
  i && !n && rs(P, ($) => {
    H.value = x($);
  });
  const ne = k(() => ({
    ...a ? {} : I,
    ...c
  })), Q = k(() => ({
    shouldSort: !0,
    keys: ["title", "label", "description", "author"],
    ...u
  })), ye = k(() => {
    const $ = [];
    return H.value.forEach((F) => {
      const { name: L, uid: X, children: W } = F;
      let xe = 0, yt = !1;
      W && W.forEach((pt) => {
        pt.selected && (++xe, yt || ($.push({ uid: X, name: L, children: [] }), yt = !0), $[$.length - 1].children.push(pt));
      }), F.selectedCount = xe;
    }), $;
  }), pe = k(() => ye.value.length ? e.value.filter(($) => ye.value.every((F) => {
    const L = m($, F.uid);
    return L && L.length ? F.children.some((X) => L.includes(X.uid)) : !1;
  })) : e.value), ve = k(() => J.value?.length ? new an(pe.value, Q.value).search(J.value).map((F) => F.item) : pe.value), D = k(() => {
    const $ = ne.value[Re.value]?.sort;
    return typeof $ != "function" ? ve.value : $([...ve.value]);
  });
  function ee() {
    H.value.forEach(($) => {
      $.children && $.children.forEach((F) => F.selected = !1);
    });
  }
  function le({ groupUid: $, facetUid: F, selected: L }) {
    const X = H.value.find((W) => W.uid === $);
    if (X) {
      const W = X.children.find((xe) => xe.uid === F);
      W && (W.selected = L);
    }
  }
  return {
    // State
    facets: H,
    searchValue: J,
    selectedSort: Re,
    sortTypes: ne,
    // Computed
    displayItems: D,
    selectedFacets: ye,
    // Methods
    clearFilters: ee,
    handleFacetChange: le
  };
}
const Yr = { class: "UluFacets__facet-list" }, Kr = ["id", "checked", "onChange"], Gr = ["for"], Rt = {
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
    return (o, r) => (l(), d("ul", Yr, [
      (l(!0), d(O, null, T(e.children, (a) => (l(), d("li", {
        class: h(["UluFacets__facet", e.classFacet]),
        key: a.uid
      }, [
        f("input", {
          class: "UluFacets__facet-checkbox",
          id: i(a),
          type: "checkbox",
          checked: a.selected,
          onChange: (c) => n("facet-change", { groupUid: e.groupUid, facetUid: a.uid, selected: c.target.checked })
        }, null, 40, Kr),
        f("label", {
          class: "UluFacets__facet-label",
          for: i(a)
        }, p(a.label), 9, Gr)
      ], 2))), 128))
    ]));
  }
}, Zr = { class: "UluFacetsFilters" }, sh = {
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
    return (n, i) => (l(), d("div", Zr, [
      (l(!0), d(O, null, T(e.facets, (o) => (l(), y(Tt, {
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
          g(n.$slots, "groupToggle", {
            group: o,
            isOpen: r
          }, () => [
            S(p(o.name), 1)
          ])
        ]),
        default: b(() => [
          R(Rt, {
            children: o.children.slice(0, e.maxVisible),
            groupUid: o.uid,
            classFacet: e.classes.facet,
            onFacetChange: i[0] || (i[0] = (r) => t("facet-change", r))
          }, null, 8, ["children", "groupUid", "classFacet"]),
          o.children.length > e.maxVisible ? (l(), y(Tt, {
            key: 0,
            class: h(["UluFacets__more-facets", e.classes.moreFacets]),
            clickOutsideCloses: !1,
            closeOnEscape: !1,
            transitionHeight: !0
          }, {
            toggle: b(({ isOpen: r }) => [
              S(p(r ? "- Less" : "+ More"), 1)
            ]),
            default: b(() => [
              R(Rt, {
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
}, Jr = { class: "UluFacetsResults" }, Qr = {
  key: 1,
  class: "UluFacetsResults__empty"
}, nh = {
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
    return (s, t) => (l(), d("div", Jr, [
      e.items.length ? (l(), y(os, {
        key: 0,
        tag: e.tag,
        name: e.transitionName,
        class: "UluFacetsResults__list"
      }, {
        default: b(() => [
          (l(!0), d(O, null, T(e.items, (n, i) => (l(), d("li", {
            class: "UluFacetsResults__item",
            key: n.id || i
          }, [
            g(s.$slots, "item", {
              item: n,
              index: i
            })
          ]))), 128))
        ]),
        _: 3
      }, 8, ["tag", "name"])) : (l(), d("div", Qr, [
        g(s.$slots, "empty", {}, () => [
          t[0] || (t[0] = f("p", null, "No matching items found.", -1))
        ])
      ]))
    ]));
  }
}, ea = { class: "UluFacets__keyword-search" }, ta = ["placeholder"], oh = {
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
    return (a, c) => (l(), d("div", ea, [
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
      }, null, 10, ta), [
        [Ys, r.value]
      ])
    ]));
  }
}, sa = { class: "UluFacetsSidebarLayout" }, na = { class: "UluFacetsSidebarLayout__header" }, oa = { class: "UluFacetsSidebarLayout__body" }, ia = { class: "UluFacetsSidebarLayout__sidebar" }, ra = { class: "UluFacetsSidebarLayout__main" }, ih = {
  __name: "UluFacetsSidebarLayout",
  setup(e) {
    return (s, t) => (l(), d("div", sa, [
      f("div", na, [
        g(s.$slots, "header")
      ]),
      f("div", oa, [
        f("div", ia, [
          g(s.$slots, "sidebar")
        ]),
        f("div", ra, [
          g(s.$slots, "main")
        ])
      ])
    ]));
  }
}, aa = ["for"], la = ["value", "id"], ca = ["value"], rh = {
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
        g(o.$slots, "default", {}, () => [
          r[1] || (r[1] = S("Sort:"))
        ])
      ], 10, aa),
      f("select", {
        value: e.modelValue,
        onChange: r[0] || (r[0] = (a) => n("update:modelValue", a.target.value)),
        id: i.value,
        class: h(e.classes.sortFormSelect)
      }, [
        (l(!0), d(O, null, T(e.sortTypes, (a, c) => (l(), d("option", {
          value: c,
          key: c
        }, p(a.text), 9, ca))), 128))
      ], 42, la)
    ], 2));
  }
}, ys = Symbol(), ps = Symbol(), Fe = Symbol(), ua = {
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
      [Fe]: k(() => this.sections),
      [ys]: (e) => {
        const { titleId: s, title: t } = e, { element: n } = e.$refs;
        this.sections.push({
          instance: e,
          titleId: s,
          title: t,
          element: n,
          active: !1
        }), this.update();
      },
      [ps]: (e) => {
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
          const u = this.getSectionIndex(a), m = a.offsetTop, w = s[u], C = u === 0 && i > m, I = u === s.length - 1 && i < m;
          w && this.$nextTick(() => {
            c ? (t(w), w.active = !0) : (C && !n || I && w.active) && t(), this.$emit("sectionChange", {
              section: w,
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
}, da = { class: "scroll-anchors" };
function fa(e, s, t, n, i, o) {
  return l(), d("div", da, [
    g(e.$slots, "default")
  ]);
}
const ah = /* @__PURE__ */ v(ua, [["render", fa]]), ha = {
  name: "ScrollAnchorsNav",
  inject: {
    sections: { from: Fe }
  },
  props: {
    element: {
      type: String,
      default: "nav"
    }
  }
}, ma = ["href"];
function ga(e, s, t, n, i, o) {
  return o.sections.length ? (l(), y(z(t.element), {
    key: 0,
    class: "scroll-anchors__nav"
  }, {
    default: b(() => [
      f("ul", null, [
        (l(!0), d(O, null, T(o.sections, (r, a) => (l(), d("li", {
          key: a,
          class: h({ "is-active": r.active })
        }, [
          f("a", {
            class: h({ "is-active": r.active }),
            href: `#${r.titleId}`
          }, p(r.title), 11, ma)
        ], 2))), 128))
      ])
    ]),
    _: 1
  })) : _("", !0);
}
const lh = /* @__PURE__ */ v(ha, [["render", ga]]);
function vs(e) {
  requestAnimationFrame(() => {
    const s = new MessageChannel();
    s.port1.onmessage = e, s.port2.postMessage(void 0);
  });
}
const _a = {
  name: "ScrollAnchorsNavAnimated",
  inject: {
    sections: { from: Fe }
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
      e && !this.indicatorAnimReady && vs(() => {
        this.indicatorAnimReady = !0;
      });
    }
  },
  methods: {
    addLinkRef(e, s) {
      this.linkRefs[e] = s;
    }
  }
}, ya = { class: "scroll-anchors__rail" }, pa = ["href"];
function va(e, s, t, n, i, o) {
  return o.sections.length ? (l(), y(z(t.element), {
    key: 0,
    class: "scroll-anchors__nav scroll-anchors__nav--animated"
  }, {
    default: b(() => [
      f("ul", ya, [
        (l(!0), d(O, null, T(o.sections, (r, a) => (l(), d("li", {
          key: a,
          class: h({ "is-active": r.active })
        }, [
          f("a", {
            class: h({ "is-active": r.active }),
            ref_for: !0,
            ref: (c) => o.addLinkRef(a, c),
            href: `#${r.titleId}`
          }, p(r.title), 11, pa)
        ], 2))), 128))
      ]),
      f("div", {
        class: h(["scroll-anchors__indicator", {
          "scroll-anchors__indicator--can-transition": i.indicatorAnimReady
        }]),
        ref: "indicator",
        style: B({
          opacity: o.indicatorStyles ? "1" : "0",
          transform: `translateY(${o.indicatorStyles.y}px)`,
          height: `${o.indicatorStyles.height}px`
        })
      }, null, 6)
    ]),
    _: 1
  })) : _("", !0);
}
const ch = /* @__PURE__ */ v(_a, [["render", va]]), ba = {
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
    register: { from: ys },
    unregister: { from: ps },
    sections: { from: Fe, default: () => k(() => []) }
  },
  data() {
    const { anchorId: e, title: s } = this;
    return {
      titleId: e || `sas-title-${Qi(s)}`
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
function wa(e, s, t, n, i, o) {
  return l(), d("div", {
    class: h([t.wrapperClass, { [t.activeClass]: t.activeClass && o.section?.active }]),
    ref: "element"
  }, [
    (l(), y(z(t.titleElement), {
      class: h(t.titleClass),
      id: i.titleId
    }, {
      default: b(() => [
        S(p(t.title), 1)
      ]),
      _: 1
    }, 8, ["class", "id"])),
    g(e.$slots, "default", { section: o.section })
  ], 2);
}
const uh = /* @__PURE__ */ v(ba, [["render", wa]]), Sa = {
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
    return (s, t) => (l(), d("span", {
      class: h(["skeleton skeleton--text", {
        "skeleton--inline": e.inline,
        "skeleton--background-alt": e.alt,
        [`skeleton--width-${e.width}`]: e.width
      }])
    }, null, 2));
  }
}, dh = {
  __name: "UluShowSkeleton",
  props: {
    /**
     * If true will show whatever is passed to slot, else skeleton text
     */
    when: Boolean
  },
  setup(e) {
    return (s, t) => e.when ? (l(), y(Sa, {
      key: 1,
      inline: ""
    })) : g(s.$slots, "default", { key: 0 });
  }
};
function ka(e, s) {
  return [...Array(e)].map((t, n) => s(n));
}
function fh(e, s) {
  var t = e.indexOf(s);
  t > -1 && e.splice(t, 1);
}
const hh = {
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
    const s = e, t = k(() => ka(s.lines, () => {
      const i = Me(70, 100);
      let o = 0;
      const r = () => {
        const u = i - o, m = Me(15, u);
        return o += m, m;
      }, a = [];
      for (; o < i - 15; )
        a.push(r());
      const c = () => a.reduce((u, m) => u + m, 0);
      for (; c() >= i && a.pop(); )
        ;
      return a.map((u) => ({ width: u, alt: Math.random() < 0.5 }));
    }));
    return (n, i) => (l(), d("div", null, [
      (l(!0), d(O, null, T(t.value, (o, r) => (l(), d("div", { key: r }, [
        (l(!0), d(O, null, T(o, (a) => (l(), d("span", {
          key: a,
          class: h(["skeleton skeleton--text skeleton--inline", { "skeleton--background-alt": a.alt }]),
          style: B({ width: `${a.width}%` })
        }, null, 6))), 128))
      ]))), 128))
    ]));
  }
}, Ca = { class: "skeleton skeleton-block--media" }, mh = {
  __name: "UluSkeletonMedia",
  setup(e) {
    return (s, t) => (l(), d("div", Ca, [
      R(V, { icon: "type:image" })
    ]));
  }
}, Ta = {
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
}, Aa = { class: "slideshow" }, $a = {
  class: "slideshow__control-context",
  ref: "context"
}, Oa = {
  class: "slideshow__track-crop",
  ref: "crop"
}, Ra = {
  class: "slideshow__track",
  ref: "track"
}, xa = ["tabindex"], Ua = { class: "slideshow__controls" }, Ia = { class: "slideshow__controls-item slideshow__controls-item--previous" }, ja = ["disabled"], Ea = { class: "slideshow__controls-item slideshow__controls-item--next" }, za = ["disabled"], Ma = {
  key: 0,
  class: "slideshow__nav",
  ref: "nav"
}, Ba = ["onClick"], Pa = { class: "hidden-visually" };
function Fa(e, s, t, n, i, o) {
  const r = A("FaIcon");
  return l(), d("div", Aa, [
    f("div", $a, [
      f("div", Oa, [
        f("ul", Ra, [
          (l(!0), d(O, null, T(i.slides, (a, c) => (l(), d("li", {
            class: h(["slideshow__slide", { "is-active": a.active }]),
            key: c,
            tabindex: t.slideFocusable ? "0" : "-1",
            ref_for: !0,
            ref: (u) => {
              a.element = u;
            }
          }, [
            g(e.$slots, "slide", {
              item: a.item,
              index: c
            })
          ], 10, xa))), 128))
        ], 512)
      ], 512),
      f("ul", Ua, [
        f("li", Ia, [
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
          ], 8, ja)
        ]),
        f("li", Ea, [
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
          ], 8, za)
        ])
      ])
    ], 512),
    t.noNav ? _("", !0) : (l(), d("ul", Ma, [
      (l(!0), d(O, null, T(i.slides, (a, c) => (l(), d("li", {
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
          g(e.$slots, "nav", {
            item: a.item,
            index: c,
            active: a.active
          }, () => [
            f("span", Pa, "Item " + p(c + 1), 1)
          ])
        ], 10, Ba)
      ], 2))), 128))
    ], 512))
  ]);
}
const La = /* @__PURE__ */ v(Ta, [["render", Fa]]), Ha = {
  name: "ImageSlideShow",
  components: {
    UluSlideShow: La
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
      let m = null;
      console.log("left/right", o, c), t && n && (u > c ? m = o + (u - c) : r < o && (m = r), m !== null && s.scrollTo({ left: m, top: 0, behavior: "smooth" }));
    }
  }
}, Da = ["src", "alt"], Va = { class: "slideshow__image-actions" }, Na = ["src", "alt"];
function Wa(e, s, t, n, i, o) {
  const r = A("AppButton"), a = A("UluSlideShow");
  return l(), y(a, {
    class: "slideshow--images",
    items: t.images,
    onSlideChange: o.slideChange
  }, {
    slide: b(({ item: c }) => [
      f("img", {
        src: c.src,
        alt: c.alt
      }, null, 8, Da),
      f("div", Va, [
        t.selectButton ? (l(), y(r, {
          key: 0,
          class: "type-small",
          icon: "plus",
          small: "",
          iconBefore: ""
        }, {
          default: b(() => s[0] || (s[0] = [
            S(" Select ")
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
      }, null, 8, Na)
    ]),
    _: 1
  }, 8, ["items", "onSlideChange"]);
}
const gh = /* @__PURE__ */ v(Ha, [["render", Wa]]), Xa = {
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
    g(e.$slots, "default")
  ], 2);
}
const _h = /* @__PURE__ */ v(Xa, [["render", qa]]), Ya = {
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
}, Ka = ["id"], Ga = ["innerHTML"];
function Za(e, s, t, n, i, o) {
  return l(!0), d(O, null, T(t.rows, (r, a) => (l(), d("tr", {
    key: `br-${a}`,
    id: t.optionalAttr(t.isActual && r.id),
    class: h(t.resolveClasses(t.classes.row, { row: r.data, rowIndex: a, isActual: t.isActual, foot: t.foot })),
    style: B({
      height: r.height
    })
  }, [
    (l(!0), d(O, null, T(t.rowColumns, (c, u) => (l(), y(z(c.rowHeader ? "th" : "td"), {
      id: t.optionalAttr(t.isActual && c.rowHeader && c.getRowHeaderId(a)),
      scope: t.optionalAttr(t.isActual && c.rowHeader && "row"),
      key: `bc-${u}`,
      headers: t.optionalAttr(t.isActual && t.getCellHeaders(c, a)),
      class: h(t.resolveClasses(c.class, { column: c, index: u, isActual: t.isActual, row: r, rowIndex: a, foot: t.foot })),
      style: B({
        width: t.columnWidth
      })
    }, {
      default: b(() => [
        e.$slots[c.slot] ? g(e.$slots, c.slot, {
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
        }, null, 8, Ga)) : (l(), d(O, { key: 2 }, [
          S(p(t.value({ row: r, column: c, rowIndex: a, isActual: t.isActual, foot: t.foot })), 1)
        ], 64))
      ]),
      _: 2
    }, 1032, ["id", "scope", "headers", "class", "style"]))), 128))
  ], 14, Ka))), 128);
}
const Ja = /* @__PURE__ */ v(Ya, [["render", Za]]), Qa = {
  name: "UluTableStickyTable",
  components: {
    UluTableStickyRows: Ja
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
}, el = ["aria-hidden"], tl = {
  key: 0,
  class: "table-sticky__caption"
}, sl = ["id"], nl = ["id", "rowspan", "colspan", "data-child-columns", "aria-sort", "scope", "headers"], ol = ["innerHTML"], il = {
  class: "table-sticky__sort-icon",
  "aria-hidden": "true"
}, rl = { class: "table-sticky__sort-icon-inner" }, al = ["innerHTML"], ll = { key: 1 }, cl = { key: 2 };
function ul(e, s, t, n, i, o) {
  const r = A("UluTableStickyRows");
  return l(), d("table", {
    class: h(t.resolveClasses(t.classes.table, { isActual: t.isActual })),
    "aria-hidden": t.isActual ? "false" : "true"
  }, [
    t.caption ? (l(), d("caption", tl, p(t.caption), 1)) : _("", !0),
    f("thead", null, [
      (l(!0), d(O, null, T(t.headerRows, (a, c) => (l(), d("tr", {
        key: `hr-${c}`,
        id: o.optionalAttr(t.isActual && a.id),
        class: h(t.resolveClasses(t.classes.rowHeader, { row: a, rowIndex: c, isActual: t.isActual })),
        style: B({
          height: a.height
        })
      }, [
        (l(!0), d(O, null, T(a.columns, (u, m) => (l(), d("th", {
          key: `hc-${m}`,
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
            t.resolveClasses(u.classHeader, { column: u, index: m, isActual: t.isActual })
          ]),
          style: B({
            width: u.width
          }),
          "aria-sort": u.sort ? u.sortAscending ? "ascending" : "descending" : null,
          scope: o.optionalAttr(t.isActual && (u.colspan > 1 ? "colgroup" : "col")),
          headers: o.optionalAttr(t.isActual && o.getHeaderHeaders(u, c)),
          ref_for: !0,
          ref: (w) => o.addHeaderRef(u, w)
        }, [
          u.sortable ? (l(), y(z(t.isActual ? "button" : "div"), {
            key: 0,
            class: h(["table-sticky__sort-button", {
              "table-sticky__sort-button--focused": u.sortFocused
            }]),
            onClick: (w) => e.$emit("columnSorted", u),
            onFocus: (w) => o.handleSortFocus(u, !0),
            onBlur: (w) => o.handleSortFocus(u, !1),
            "aria-pressed": u.sortApplied ? "true" : "false"
          }, {
            default: b(() => [
              e.$slots[u.slotHeader] ? g(e.$slots, u.slotHeader, {
                key: 0,
                isActual: t.isActual,
                column: u,
                index: m
              }) : u.htmlTitle ? (l(), d("div", {
                key: 1,
                innerHTML: t.getColumnTitle({ column: u, index: m, isActual: t.isActual })
              }, null, 8, ol)) : (l(), d(O, { key: 2 }, [
                S(p(t.getColumnTitle({ column: u, index: m, isActual: t.isActual })), 1)
              ], 64)),
              f("span", il, [
                f("span", rl, [
                  g(e.$slots, "sortIcon", {}, () => [
                    s[0] || (s[0] = S("▼"))
                  ])
                ])
              ])
            ]),
            _: 2
          }, 1064, ["class", "onClick", "onFocus", "onBlur", "aria-pressed"])) : (l(), d(O, { key: 1 }, [
            e.$slots[u.slotHeader] ? g(e.$slots, u.slotHeader, {
              key: 0,
              isActual: t.isActual,
              column: u,
              index: m
            }) : u.htmlTitle ? (l(), d("div", {
              key: 1,
              innerHTML: t.getColumnTitle({ column: u, index: m, isActual: t.isActual })
            }, null, 8, al)) : (l(), d(O, { key: 2 }, [
              S(p(t.getColumnTitle({ column: u, index: m, isActual: t.isActual })), 1)
            ], 64))
          ], 64))
        ], 14, nl))), 128))
      ], 14, sl))), 128))
    ]),
    t.rows ? (l(), d("tbody", ll, [
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
            g(e.$slots, c, N(q(u)))
          ])
        }))
      ]), 1032, ["rows", "rowColumns", "optionalAttr", "resolveClasses", "getCellHeaders", "isActual", "columnWidth", "classes", "value"])
    ])) : _("", !0),
    t.footerRows ? (l(), d("tfoot", cl, [
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
            g(e.$slots, c, N(q(u)))
          ])
        }))
      ]), 1032, ["rows", "rowColumns", "optionalAttr", "resolveClasses", "getCellHeaders", "isActual", "columnWidth", "classes", "value"])
    ])) : _("", !0)
  ], 10, el);
}
const dl = /* @__PURE__ */ v(Qa, [["render", ul]]);
function fl() {
  this.__data__ = [], this.size = 0;
}
function bs(e, s) {
  return e === s || e !== e && s !== s;
}
function Le(e, s) {
  for (var t = e.length; t--; )
    if (bs(e[t][0], s))
      return t;
  return -1;
}
var hl = Array.prototype, ml = hl.splice;
function gl(e) {
  var s = this.__data__, t = Le(s, e);
  if (t < 0)
    return !1;
  var n = s.length - 1;
  return t == n ? s.pop() : ml.call(s, t, 1), --this.size, !0;
}
function _l(e) {
  var s = this.__data__, t = Le(s, e);
  return t < 0 ? void 0 : s[t][1];
}
function yl(e) {
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
Z.prototype.clear = fl;
Z.prototype.delete = gl;
Z.prototype.get = _l;
Z.prototype.has = yl;
Z.prototype.set = pl;
function vl() {
  this.__data__ = new Z(), this.size = 0;
}
function bl(e) {
  var s = this.__data__, t = s.delete(e);
  return this.size = s.size, t;
}
function wl(e) {
  return this.__data__.get(e);
}
function Sl(e) {
  return this.__data__.has(e);
}
var ws = typeof global == "object" && global && global.Object === Object && global, kl = typeof self == "object" && self && self.Object === Object && self, Y = ws || kl || Function("return this")(), fe = Y.Symbol, Ss = Object.prototype, Cl = Ss.hasOwnProperty, Tl = Ss.toString, be = fe ? fe.toStringTag : void 0;
function Al(e) {
  var s = Cl.call(e, be), t = e[be];
  try {
    e[be] = void 0;
    var n = !0;
  } catch {
  }
  var i = Tl.call(e);
  return n && (s ? e[be] = t : delete e[be]), i;
}
var $l = Object.prototype, Ol = $l.toString;
function Rl(e) {
  return Ol.call(e);
}
var xl = "[object Null]", Ul = "[object Undefined]", xt = fe ? fe.toStringTag : void 0;
function $e(e) {
  return e == null ? e === void 0 ? Ul : xl : xt && xt in Object(e) ? Al(e) : Rl(e);
}
function He(e) {
  var s = typeof e;
  return e != null && (s == "object" || s == "function");
}
var Il = "[object AsyncFunction]", jl = "[object Function]", El = "[object GeneratorFunction]", zl = "[object Proxy]";
function ks(e) {
  if (!He(e))
    return !1;
  var s = $e(e);
  return s == jl || s == El || s == Il || s == zl;
}
var qe = Y["__core-js_shared__"], Ut = function() {
  var e = /[^.]+$/.exec(qe && qe.keys && qe.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function Ml(e) {
  return !!Ut && Ut in e;
}
var Bl = Function.prototype, Pl = Bl.toString;
function re(e) {
  if (e != null) {
    try {
      return Pl.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var Fl = /[\\^$.*+?()[\]{}|]/g, Ll = /^\[object .+?Constructor\]$/, Hl = Function.prototype, Dl = Object.prototype, Vl = Hl.toString, Nl = Dl.hasOwnProperty, Wl = RegExp(
  "^" + Vl.call(Nl).replace(Fl, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Xl(e) {
  if (!He(e) || Ml(e))
    return !1;
  var s = ks(e) ? Wl : Ll;
  return s.test(re(e));
}
function ql(e, s) {
  return e?.[s];
}
function ae(e, s) {
  var t = ql(e, s);
  return Xl(t) ? t : void 0;
}
var Te = ae(Y, "Map"), Ae = ae(Object, "create");
function Yl() {
  this.__data__ = Ae ? Ae(null) : {}, this.size = 0;
}
function Kl(e) {
  var s = this.has(e) && delete this.__data__[e];
  return this.size -= s ? 1 : 0, s;
}
var Gl = "__lodash_hash_undefined__", Zl = Object.prototype, Jl = Zl.hasOwnProperty;
function Ql(e) {
  var s = this.__data__;
  if (Ae) {
    var t = s[e];
    return t === Gl ? void 0 : t;
  }
  return Jl.call(s, e) ? s[e] : void 0;
}
var ec = Object.prototype, tc = ec.hasOwnProperty;
function sc(e) {
  var s = this.__data__;
  return Ae ? s[e] !== void 0 : tc.call(s, e);
}
var nc = "__lodash_hash_undefined__";
function oc(e, s) {
  var t = this.__data__;
  return this.size += this.has(e) ? 0 : 1, t[e] = Ae && s === void 0 ? nc : s, this;
}
function ie(e) {
  var s = -1, t = e == null ? 0 : e.length;
  for (this.clear(); ++s < t; ) {
    var n = e[s];
    this.set(n[0], n[1]);
  }
}
ie.prototype.clear = Yl;
ie.prototype.delete = Kl;
ie.prototype.get = Ql;
ie.prototype.has = sc;
ie.prototype.set = oc;
function ic() {
  this.size = 0, this.__data__ = {
    hash: new ie(),
    map: new (Te || Z)(),
    string: new ie()
  };
}
function rc(e) {
  var s = typeof e;
  return s == "string" || s == "number" || s == "symbol" || s == "boolean" ? e !== "__proto__" : e === null;
}
function De(e, s) {
  var t = e.__data__;
  return rc(s) ? t[typeof s == "string" ? "string" : "hash"] : t.map;
}
function ac(e) {
  var s = De(this, e).delete(e);
  return this.size -= s ? 1 : 0, s;
}
function lc(e) {
  return De(this, e).get(e);
}
function cc(e) {
  return De(this, e).has(e);
}
function uc(e, s) {
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
ge.prototype.clear = ic;
ge.prototype.delete = ac;
ge.prototype.get = lc;
ge.prototype.has = cc;
ge.prototype.set = uc;
var dc = 200;
function fc(e, s) {
  var t = this.__data__;
  if (t instanceof Z) {
    var n = t.__data__;
    if (!Te || n.length < dc - 1)
      return n.push([e, s]), this.size = ++t.size, this;
    t = this.__data__ = new ge(n);
  }
  return t.set(e, s), this.size = t.size, this;
}
function _e(e) {
  var s = this.__data__ = new Z(e);
  this.size = s.size;
}
_e.prototype.clear = vl;
_e.prototype.delete = bl;
_e.prototype.get = wl;
_e.prototype.has = Sl;
_e.prototype.set = fc;
function hc(e, s) {
  for (var t = -1, n = e == null ? 0 : e.length; ++t < n && s(e[t], t, e) !== !1; )
    ;
  return e;
}
var It = function() {
  try {
    var e = ae(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}();
function mc(e, s, t) {
  s == "__proto__" && It ? It(e, s, {
    configurable: !0,
    enumerable: !0,
    value: t,
    writable: !0
  }) : e[s] = t;
}
var gc = Object.prototype, _c = gc.hasOwnProperty;
function yc(e, s, t) {
  var n = e[s];
  (!(_c.call(e, s) && bs(n, t)) || t === void 0 && !(s in e)) && mc(e, s, t);
}
function pc(e, s) {
  for (var t = -1, n = Array(e); ++t < e; )
    n[t] = s(t);
  return n;
}
function Oe(e) {
  return e != null && typeof e == "object";
}
var vc = "[object Arguments]";
function jt(e) {
  return Oe(e) && $e(e) == vc;
}
var Cs = Object.prototype, bc = Cs.hasOwnProperty, wc = Cs.propertyIsEnumerable, Sc = jt(/* @__PURE__ */ function() {
  return arguments;
}()) ? jt : function(e) {
  return Oe(e) && bc.call(e, "callee") && !wc.call(e, "callee");
}, ut = Array.isArray;
function kc() {
  return !1;
}
var Ts = typeof exports == "object" && exports && !exports.nodeType && exports, Et = Ts && typeof module == "object" && module && !module.nodeType && module, Cc = Et && Et.exports === Ts, zt = Cc ? Y.Buffer : void 0, Tc = zt ? zt.isBuffer : void 0, As = Tc || kc, Ac = 9007199254740991, $c = /^(?:0|[1-9]\d*)$/;
function Oc(e, s) {
  var t = typeof e;
  return s = s ?? Ac, !!s && (t == "number" || t != "symbol" && $c.test(e)) && e > -1 && e % 1 == 0 && e < s;
}
var Rc = 9007199254740991;
function $s(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Rc;
}
var xc = "[object Arguments]", Uc = "[object Array]", Ic = "[object Boolean]", jc = "[object Date]", Ec = "[object Error]", zc = "[object Function]", Mc = "[object Map]", Bc = "[object Number]", Pc = "[object Object]", Fc = "[object RegExp]", Lc = "[object Set]", Hc = "[object String]", Dc = "[object WeakMap]", Vc = "[object ArrayBuffer]", Nc = "[object DataView]", Wc = "[object Float32Array]", Xc = "[object Float64Array]", qc = "[object Int8Array]", Yc = "[object Int16Array]", Kc = "[object Int32Array]", Gc = "[object Uint8Array]", Zc = "[object Uint8ClampedArray]", Jc = "[object Uint16Array]", Qc = "[object Uint32Array]", j = {};
j[Wc] = j[Xc] = j[qc] = j[Yc] = j[Kc] = j[Gc] = j[Zc] = j[Jc] = j[Qc] = !0;
j[xc] = j[Uc] = j[Vc] = j[Ic] = j[Nc] = j[jc] = j[Ec] = j[zc] = j[Mc] = j[Bc] = j[Pc] = j[Fc] = j[Lc] = j[Hc] = j[Dc] = !1;
function eu(e) {
  return Oe(e) && $s(e.length) && !!j[$e(e)];
}
function dt(e) {
  return function(s) {
    return e(s);
  };
}
var Os = typeof exports == "object" && exports && !exports.nodeType && exports, Ce = Os && typeof module == "object" && module && !module.nodeType && module, tu = Ce && Ce.exports === Os, Ye = tu && ws.process, he = function() {
  try {
    var e = Ce && Ce.require && Ce.require("util").types;
    return e || Ye && Ye.binding && Ye.binding("util");
  } catch {
  }
}(), Mt = he && he.isTypedArray, su = Mt ? dt(Mt) : eu, nu = Object.prototype, ou = nu.hasOwnProperty;
function iu(e, s) {
  var t = ut(e), n = !t && Sc(e), i = !t && !n && As(e), o = !t && !n && !i && su(e), r = t || n || i || o, a = r ? pc(e.length, String) : [], c = a.length;
  for (var u in e)
    ou.call(e, u) && !(r && // Safari 9 has enumerable `arguments.length` in strict mode.
    (u == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    i && (u == "offset" || u == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    o && (u == "buffer" || u == "byteLength" || u == "byteOffset") || // Skip index properties.
    Oc(u, c))) && a.push(u);
  return a;
}
var ru = Object.prototype;
function Rs(e) {
  var s = e && e.constructor, t = typeof s == "function" && s.prototype || ru;
  return e === t;
}
function xs(e, s) {
  return function(t) {
    return e(s(t));
  };
}
var au = xs(Object.keys, Object), lu = Object.prototype, cu = lu.hasOwnProperty;
function uu(e) {
  if (!Rs(e))
    return au(e);
  var s = [];
  for (var t in Object(e))
    cu.call(e, t) && t != "constructor" && s.push(t);
  return s;
}
function du(e) {
  return e != null && $s(e.length) && !ks(e);
}
function fu(e) {
  return du(e) ? iu(e) : uu(e);
}
var Us = typeof exports == "object" && exports && !exports.nodeType && exports, Bt = Us && typeof module == "object" && module && !module.nodeType && module, hu = Bt && Bt.exports === Us, Pt = hu ? Y.Buffer : void 0;
Pt && Pt.allocUnsafe;
function mu(e, s) {
  return e.slice();
}
function gu(e, s) {
  for (var t = -1, n = e == null ? 0 : e.length, i = 0, o = []; ++t < n; ) {
    var r = e[t];
    s(r, t, e) && (o[i++] = r);
  }
  return o;
}
function _u() {
  return [];
}
var yu = Object.prototype, pu = yu.propertyIsEnumerable, Ft = Object.getOwnPropertySymbols, vu = Ft ? function(e) {
  return e == null ? [] : (e = Object(e), gu(Ft(e), function(s) {
    return pu.call(e, s);
  }));
} : _u;
function bu(e, s) {
  for (var t = -1, n = s.length, i = e.length; ++t < n; )
    e[i + t] = s[t];
  return e;
}
var wu = xs(Object.getPrototypeOf, Object);
function Su(e, s, t) {
  var n = s(e);
  return ut(e) ? n : bu(n, t(e));
}
function ku(e) {
  return Su(e, fu, vu);
}
var Qe = ae(Y, "DataView"), et = ae(Y, "Promise"), tt = ae(Y, "Set"), st = ae(Y, "WeakMap"), Lt = "[object Map]", Cu = "[object Object]", Ht = "[object Promise]", Dt = "[object Set]", Vt = "[object WeakMap]", Nt = "[object DataView]", Tu = re(Qe), Au = re(Te), $u = re(et), Ou = re(tt), Ru = re(st), K = $e;
(Qe && K(new Qe(new ArrayBuffer(1))) != Nt || Te && K(new Te()) != Lt || et && K(et.resolve()) != Ht || tt && K(new tt()) != Dt || st && K(new st()) != Vt) && (K = function(e) {
  var s = $e(e), t = s == Cu ? e.constructor : void 0, n = t ? re(t) : "";
  if (n)
    switch (n) {
      case Tu:
        return Nt;
      case Au:
        return Lt;
      case $u:
        return Ht;
      case Ou:
        return Dt;
      case Ru:
        return Vt;
    }
  return s;
});
var xu = Object.prototype, Uu = xu.hasOwnProperty;
function Iu(e) {
  var s = e.length, t = new e.constructor(s);
  return s && typeof e[0] == "string" && Uu.call(e, "index") && (t.index = e.index, t.input = e.input), t;
}
var Wt = Y.Uint8Array;
function ft(e) {
  var s = new e.constructor(e.byteLength);
  return new Wt(s).set(new Wt(e)), s;
}
function ju(e, s) {
  var t = ft(e.buffer);
  return new e.constructor(t, e.byteOffset, e.byteLength);
}
var Eu = /\w*$/;
function zu(e) {
  var s = new e.constructor(e.source, Eu.exec(e));
  return s.lastIndex = e.lastIndex, s;
}
var Xt = fe ? fe.prototype : void 0, qt = Xt ? Xt.valueOf : void 0;
function Mu(e) {
  return qt ? Object(qt.call(e)) : {};
}
function Bu(e, s) {
  var t = ft(e.buffer);
  return new e.constructor(t, e.byteOffset, e.length);
}
var Pu = "[object Boolean]", Fu = "[object Date]", Lu = "[object Map]", Hu = "[object Number]", Du = "[object RegExp]", Vu = "[object Set]", Nu = "[object String]", Wu = "[object Symbol]", Xu = "[object ArrayBuffer]", qu = "[object DataView]", Yu = "[object Float32Array]", Ku = "[object Float64Array]", Gu = "[object Int8Array]", Zu = "[object Int16Array]", Ju = "[object Int32Array]", Qu = "[object Uint8Array]", ed = "[object Uint8ClampedArray]", td = "[object Uint16Array]", sd = "[object Uint32Array]";
function nd(e, s, t) {
  var n = e.constructor;
  switch (s) {
    case Xu:
      return ft(e);
    case Pu:
    case Fu:
      return new n(+e);
    case qu:
      return ju(e);
    case Yu:
    case Ku:
    case Gu:
    case Zu:
    case Ju:
    case Qu:
    case ed:
    case td:
    case sd:
      return Bu(e);
    case Lu:
      return new n();
    case Hu:
    case Nu:
      return new n(e);
    case Du:
      return zu(e);
    case Vu:
      return new n();
    case Wu:
      return Mu(e);
  }
}
var Yt = Object.create, od = /* @__PURE__ */ function() {
  function e() {
  }
  return function(s) {
    if (!He(s))
      return {};
    if (Yt)
      return Yt(s);
    e.prototype = s;
    var t = new e();
    return e.prototype = void 0, t;
  };
}();
function id(e) {
  return typeof e.constructor == "function" && !Rs(e) ? od(wu(e)) : {};
}
var rd = "[object Map]";
function ad(e) {
  return Oe(e) && K(e) == rd;
}
var Kt = he && he.isMap, ld = Kt ? dt(Kt) : ad, cd = "[object Set]";
function ud(e) {
  return Oe(e) && K(e) == cd;
}
var Gt = he && he.isSet, dd = Gt ? dt(Gt) : ud, Is = "[object Arguments]", fd = "[object Array]", hd = "[object Boolean]", md = "[object Date]", gd = "[object Error]", js = "[object Function]", _d = "[object GeneratorFunction]", yd = "[object Map]", pd = "[object Number]", Es = "[object Object]", vd = "[object RegExp]", bd = "[object Set]", wd = "[object String]", Sd = "[object Symbol]", kd = "[object WeakMap]", Cd = "[object ArrayBuffer]", Td = "[object DataView]", Ad = "[object Float32Array]", $d = "[object Float64Array]", Od = "[object Int8Array]", Rd = "[object Int16Array]", xd = "[object Int32Array]", Ud = "[object Uint8Array]", Id = "[object Uint8ClampedArray]", jd = "[object Uint16Array]", Ed = "[object Uint32Array]", U = {};
U[Is] = U[fd] = U[Cd] = U[Td] = U[hd] = U[md] = U[Ad] = U[$d] = U[Od] = U[Rd] = U[xd] = U[yd] = U[pd] = U[Es] = U[vd] = U[bd] = U[wd] = U[Sd] = U[Ud] = U[Id] = U[jd] = U[Ed] = !0;
U[gd] = U[js] = U[kd] = !1;
function Ee(e, s, t, n, i, o) {
  var r;
  if (r !== void 0)
    return r;
  if (!He(e))
    return e;
  var a = ut(e);
  if (a)
    r = Iu(e);
  else {
    var c = K(e), u = c == js || c == _d;
    if (As(e))
      return mu(e);
    if (c == Es || c == Is || u && !i)
      r = u ? {} : id(e);
    else {
      if (!U[c])
        return i ? e : {};
      r = nd(e, c);
    }
  }
  o || (o = new _e());
  var m = o.get(e);
  if (m)
    return m;
  o.set(e, r), dd(e) ? e.forEach(function(I) {
    r.add(Ee(I, s, t, I, e, o));
  }) : ld(e) && e.forEach(function(I, x) {
    r.set(x, Ee(I, s, t, x, e, o));
  });
  var w = ku, C = a ? void 0 : w(e);
  return hc(C || e, function(I, x) {
    C && (x = I, I = e[x]), yc(r, x, Ee(I, s, t, x, e, o));
  }), r;
}
var zd = 1, Md = 4;
function Bd(e) {
  return Ee(e, zd | Md);
}
const Ke = (e) => e.every((s) => typeof s == "object"), Zt = !0, zs = () => window.innerWidth;
let Jt = zs();
const Pd = {
  name: "UluTableSticky",
  components: {
    UluTableStickyTable: dl
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
      required: Zt
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
      validator: Ke,
      required: Zt
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
      validator: Ke
      // required
    },
    /**
     * Array of rows for footer (tfoot)
     */
    footerRows: {
      type: Array,
      validator: Ke
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
      const e = this.idCreator("c"), s = Bd(this.columns), t = (n, i) => {
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
        c && c.forEach((u) => o(1 + r, u)), a.rowspan = c ? 1 : t - r, a.colspan = c ? c.reduce((u, m) => u + m.colspan, 0) : 1, i[r].columns.push(a);
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
      const e = zs();
      Jt !== e && (Jt = e, this.resizing ? (this.resizing = !1, this.setTableSizes(), this.checkOverflowX(), this.syncScrollLeft()) : (this.resizing = !0, this.removeTableSizes()));
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
        this.sizesCalculated = !0, vs(() => {
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
}, Fd = { class: "table-sticky__sticky-wrap table-sticky__sticky-wrap--header" }, Ld = { class: "table-sticky__header-wrap" }, Hd = { class: "table-sticky__sticky-wrap table-sticky__sticky-wrap--first-column-header" }, Dd = { class: "table-sticky__sticky-wrap table-sticky__sticky-wrap--controls" }, Vd = {
  key: 2,
  class: "table-sticky__controls-inner"
}, Nd = ["disabled"], Wd = ["disabled"], Xd = {
  ref: "display",
  class: "table-sticky__display"
};
function qd(e, s, t, n, i, o) {
  const r = A("UluTableStickyTable");
  return l(), d("div", {
    class: h(["table-sticky", {
      "table-sticky--overflown-x": i.overflownX,
      "table-sticky--can-scroll-right": i.canScrollRight,
      "table-sticky--can-scroll-left": i.canScrollLeft
    }])
  }, [
    f("div", Fd, [
      f("div", Ld, [
        R(r, {
          ref: "header",
          class: "table-sticky__table table-sticky__table--header",
          classes: t.classes,
          caption: t.caption,
          resolveClasses: o.resolveClasses,
          getColumnTitle: t.getColumnTitle,
          idPrefix: t.idPrefix,
          headerRows: i.headerRows,
          style: B({
            opacity: i.sizesCalculated ? "1" : "0",
            pointerEvents: i.sizesCalculated ? "auto" : "none",
            width: i.tableWidth
          }),
          onColumnSorted: o.applySort
        }, ue({ _: 2 }, [
          T(e.$slots, (a, c) => ({
            name: c,
            fn: b((u) => [
              g(e.$slots, c, N(q(u)))
            ])
          }))
        ]), 1032, ["classes", "caption", "resolveClasses", "getColumnTitle", "idPrefix", "headerRows", "style", "onColumnSorted"])
      ])
    ]),
    f("div", Hd, [
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
        style: B({
          opacity: o.headerOpacityX,
          pointerEvents: o.headerVisibleX ? "auto" : "none"
        }),
        onColumnSorted: o.applySort
      }, ue({ _: 2 }, [
        T(e.$slots, (a, c) => ({
          name: c,
          fn: b((u) => [
            g(e.$slots, c, N(q(u)))
          ])
        }))
      ]), 1032, ["classes", "caption", "resolveClasses", "getColumnTitle", "idPrefix", "headerRows", "style", "onColumnSorted"])) : _("", !0)
    ]),
    f("div", Dd, [
      me(f("div", {
        class: h(["table-sticky__controls", o.resolveClasses(t.classes.controls)]),
        ref: "controls"
      }, [
        e.$slots.controls ? g(e.$slots, "controls", {
          key: 0,
          scrollLeft: o.scrollLeft,
          scrollRight: o.scrollRight,
          canScrollLeft: i.canScrollLeft,
          canScrollRight: i.canScrollRight
        }) : t.controlsComponent ? (l(), y(z(t.controlsComponent), {
          key: 1,
          scrollLeft: o.scrollLeft,
          scrollRight: o.scrollRight,
          canScrollLeft: i.canScrollLeft,
          canScrollRight: i.canScrollRight
        }, null, 8, ["scrollLeft", "scrollRight", "canScrollLeft", "canScrollRight"])) : (l(), d("div", Vd, [
          f("button", {
            class: h(["table-sticky__control table-sticky__control--left", o.resolveClasses(t.classes.controlButton)]),
            "aria-label": "Scroll Left",
            onClick: s[0] || (s[0] = (...a) => o.scrollLeft && o.scrollLeft(...a)),
            disabled: !i.canScrollLeft
          }, [
            g(e.$slots, "controlLeft", {}, () => [
              s[2] || (s[2] = S(" ← "))
            ])
          ], 10, Nd),
          f("button", {
            class: h(["table-sticky__control table-sticky__control--right", o.resolveClasses(t.classes.controlButton)]),
            "aria-label": "Scroll Right",
            onClick: s[1] || (s[1] = (...a) => o.scrollRight && o.scrollRight(...a)),
            disabled: !i.canScrollRight
          }, [
            g(e.$slots, "controlRight", {}, () => [
              s[3] || (s[3] = S(" → "))
            ])
          ], 10, Wd)
        ]))
      ], 2), [
        [is, o.controlsShown]
      ])
    ]),
    f("div", Xd, [
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
            g(e.$slots, c, N(q(u)))
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
      style: B({
        opacity: o.headerOpacityX,
        pointerEvents: o.headerVisibleX ? "auto" : "none"
      }),
      onColumnSorted: o.applySort
    }, ue({ _: 2 }, [
      T(e.$slots, (a, c) => ({
        name: c,
        fn: b((u) => [
          g(e.$slots, c, N(q(u)))
        ])
      }))
    ]), 1032, ["classes", "resolveClasses", "caption", "headerRows", "columnWidth", "rows", "footerRows", "rowColumns", "idPrefix", "getRowValue", "getColumnTitle", "style", "onColumnSorted"])) : _("", !0)
  ], 2);
}
const yh = /* @__PURE__ */ v(Pd, [["render", qd]]);
function Yd(e) {
  if (e) {
    if (e instanceof HTMLElement)
      return e;
    if (typeof e == "object" && "$el" in e)
      return e.$el;
  }
}
const Kd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  refToElement: Yd
}, Symbol.toStringTag, { value: "Module" }));
function Gd(e, s) {
  const n = Object.assign({}, {
    qualifier(r, a) {
      return a ? mt(r) : Ms(r);
    },
    sort: _t,
    item: {},
    includeChildren: !1
  }, s), i = (r, a) => a ? `${a}/${r.path}` : r.path, o = (r, a = null) => r.filter((c) => n.qualifier(c, a)).map((c) => {
    const u = c.children ? ht(c.children) : c, m = c.children ? c.children.filter((C) => C.path !== "") : !1, w = Ve(u, i(c, a), n.item);
    return n.includeChildren && m.length && (w.children = o(m, w.path)), w;
  }).sort(n.sort);
  return o(e);
}
function Zd(e) {
  function s(t) {
    const n = [];
    for (const i of t) {
      const o = { ...i };
      delete o.children, n.push(o), i.children && n.push(...s(i.children));
    }
    return n;
  }
  return s(e);
}
function Jd(e, s, t) {
  const i = Object.assign({}, {
    includeIndex: !1,
    item: {},
    sort: _t
  }, t), o = e.find((u) => u.path !== "/" && s.includes(u.path)), r = (u, m, w) => {
    if (u.children) {
      const C = u.children.find((I) => I.path.includes(s));
      if (C)
        return r(C, u, w + C.path);
    }
    return { route: m, path: w };
  }, { route: a, path: c } = r(o, o, o.path);
  return a.children ? a.children.filter(Ps(i.includeIndex)).map((u) => Ve(u, `${c}/${u.path}`, i.item)).sort(i.sort) : (console.warn("Unable to build menu for:", s), []);
}
function ht(e) {
  return e.find((s) => s.path === "");
}
function Ve(e, s = e.path, t) {
  const i = Object.assign({}, {
    indexMeta: !0,
    modify: null
  }, t);
  let o = Object.assign({}, e.meta);
  i.indexMeta && e.children && (o = Object.assign({}, o, ht(e.children)?.meta));
  const r = {
    path: s,
    title: o?.title || "Missing Title",
    weight: o?.weight || 0,
    meta: o
  };
  return i.modify && i.modify(r, e), r;
}
function mt(e) {
  return !e.path.includes("/:");
}
function Ms(e) {
  const s = e.path.match(/\//) || [];
  return mt(e) && s.length === 1;
}
function Qd(e, s) {
  const { target: t } = s, n = t.closest("a");
  if (n) {
    let i = n.getAttribute("href");
    i.startsWith("/") && (e.push(i), s.preventDefault());
  }
}
function Bs(e, s = gt(e)) {
  return s?.children;
}
function gt(e, s) {
  const t = e.matched.length, n = t - 2;
  return s ? t > 1 ? e.matched[0] : null : n < 0 ? null : e.matched[n];
}
function Ps(e) {
  return (s) => e || s.path !== "";
}
function _t(e, s) {
  return e?.weight - s?.weight;
}
function ef(e, s) {
  const n = Object.assign({}, {
    parent: null,
    includeIndex: !1,
    item: {},
    sort: _t
  }, s), i = n.parent || gt(e);
  return (Bs(e, i) || []).filter(Ps(n.includeIndex)).map((r) => Ve(r, `${i.path}/${r.path}`, n.item)).sort(n.sort);
}
const tf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  $createSectionMenu: ef,
  $getParentRoute: gt,
  $getRouteChildren: Bs,
  createBaseMenu: Gd,
  createMenuItem: Ve,
  createSectionMenu: Jd,
  flattenMenu: Zd,
  getChildIndexRoute: ht,
  isStaticBaseRoute: Ms,
  isStaticRoute: mt,
  nativeLinkRouter: Qd
}, Symbol.toStringTag, { value: "Module" })), ph = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  dom: Kd,
  router: tf
}, Symbol.toStringTag, { value: "Module" }));
export {
  Gf as $,
  Rf as A,
  V as B,
  xf as C,
  Uf as D,
  If as E,
  fo as F,
  jf as G,
  Ef as H,
  zf as I,
  Mf as J,
  Bf as K,
  Pf as L,
  Ff as M,
  Lf as N,
  Hf as O,
  Df as P,
  Vf as Q,
  _s as R,
  yo as S,
  Nf as T,
  Tt as U,
  Wf as V,
  Xf as W,
  qf as X,
  Yf as Y,
  Kf as Z,
  mf as _,
  Ie as a,
  Zf as a0,
  Jf as a1,
  Qf as a2,
  eh as a3,
  th as a4,
  sh as a5,
  nh as a6,
  oh as a7,
  ih as a8,
  rh as a9,
  Rt as aa,
  ah as ab,
  lh as ac,
  ch as ad,
  uh as ae,
  dh as af,
  hh as ag,
  mh as ah,
  Sa as ai,
  gh as aj,
  La as ak,
  _h as al,
  yh as am,
  Ja as an,
  dl as ao,
  On as ap,
  se as aq,
  wo as ar,
  ko as as,
  to as at,
  _f as au,
  cf as b,
  uf as c,
  df as d,
  ff as e,
  hf as f,
  In as g,
  gf as h,
  ph as i,
  Vn as j,
  yf as k,
  ce as l,
  pf as m,
  vf as n,
  bf as o,
  wf as p,
  Sf as q,
  fh as r,
  kf as s,
  Fo as t,
  Cf as u,
  Ro as v,
  Tf as w,
  Af as x,
  $f as y,
  Of as z
};
