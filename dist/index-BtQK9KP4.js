import { reactive as rt, ref as M, computed as w, resolveDirective as is, createElementBlock as d, openBlock as l, Fragment as A, withDirectives as me, createElementVNode as f, unref as T, normalizeClass as h, renderSlot as g, withKeys as rs, normalizeStyle as P, createCommentVNode as p, nextTick as as, toRef as Xs, toDisplayString as _, createBlock as y, Teleport as at, resolveDynamicComponent as B, mergeProps as G, inject as lt, watchEffect as ct, defineAsyncComponent as qs, markRaw as de, toRefs as Ys, toValue as ze, resolveComponent as E, withModifiers as Ks, createVNode as R, useSlots as Gs, renderList as $, TransitionGroup as ls, withCtx as v, createTextVNode as S, vShow as cs, watch as us, isRef as Zs, hasInjectionContext as Js, getCurrentInstance as Qs, onBeforeUnmount as en, onDeactivated as tn, onActivated as sn, onUnmounted as ds, onMounted as nn, normalizeProps as X, guardReactiveProps as q, vModelCheckbox as on, vModelText as rn, createSlots as ue } from "vue";
import { inline as fs, offset as hs, flip as ms, shift as gs, arrow as ys, useFloating as ps, autoUpdate as _s } from "@floating-ui/vue";
import { Disclosure as an, DisclosureButton as ln, DisclosurePanel as cn, Tab as un, TabGroup as dn, TabList as fn, TabPanel as hn, TabPanels as mn } from "@headlessui/vue";
import { useRoute as vs, useRouter as gn, RouterLink as Pe } from "vue-router";
import yn from "gsap";
import pn from "fuse.js";
const Tt = {
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
    image: "fas fa-image",
    file: "fas fa-file",
    next: "fas fa-chevron-left",
    previous: "fas fa-chevron-right"
  }
};
function qd(e, s = {}) {
  const t = rt({ ...Tt }), { iconsByType: n, ...i } = s || {};
  i && Object.assign(t, i);
  const o = {
    // Methods to interact with settings
    getSettings() {
      return t;
    },
    getDefaultSettings() {
      return { ...Tt };
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
}, ut = M(!1), dt = M(null);
function _n(e = {}) {
  return Object.assign(oe.popover, e.popover), Object.assign(oe.tooltip, e.tooltip), Object.assign(oe.plugin, e.plugin), oe;
}
function vn(e) {
  return Object.assign({}, oe.tooltip, e);
}
function bn(e) {
  ut.value = !0, dt.value = e;
}
function wn() {
  ut.value = !1, dt.value = null;
}
const Ee = /* @__PURE__ */ new WeakMap(), Sn = {
  mounted(e, s) {
    $t(e, s);
  },
  beforeUpdate(e) {
    At(e);
  },
  updated(e, s) {
    $t(e, s);
  },
  umounted(e) {
    At(e);
  }
};
function $t(e, s) {
  const t = kn(e, s);
  if (!t) return;
  let n = null;
  const i = () => {
    n || (n = setTimeout(() => {
      bn(t), clearTimeout(n);
    }, t.delay));
  }, o = () => {
    n && (clearTimeout(n), n = null), wn();
  };
  t.showEvents.forEach((r) => {
    e.addEventListener(r, i);
  }), t.hideEvents.forEach((r) => {
    e.addEventListener(r, o);
  }), Ee.set(e, { onShow: i, onHide: o, config: t });
}
function At(e) {
  if (!Ee.has(e))
    return;
  const { config: s, onShow: t, onHide: n } = Ee.get(e);
  s.showEvents.forEach((i) => {
    e.removeEventListener(i, t);
  }), s.hideEvents.forEach((i) => {
    e.removeEventListener(i, n);
  }), Ee.delete(e);
}
function kn(e, s) {
  const { value: t } = s;
  let n;
  if (!(t === !1 || t === null))
    return typeof t == "object" ? n = t : n = { content: t }, vn(Object.assign({}, { trigger: e }, n));
}
let Cn = 0;
function Tn() {
  return `ulu-popovers-uid-${++Cn}`;
}
const $n = ["disabled", "aria-expanded", "aria-controls", "aria-label"], An = ["aria-hidden", "id", "data-placement"], On = { class: "popover__inner" }, Rn = {
  key: 0,
  class: "popover__footer"
}, ft = {
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
    const t = s, n = e, i = Tn(), o = Object.assign({}, oe.popover, n.config), r = M(n.startOpen || !1), a = M(null), c = M(null), u = M(null), m = [
      ...o.inline ? [fs()] : [],
      ...o.offset ? [hs(o.offset)] : [],
      ms(),
      gs(),
      ...o.arrow ? [ys({ element: u })] : []
    ], b = {
      placement: o.placement,
      whileElementsMounted: _s,
      middleware: m
    }, {
      floatingStyles: C,
      placement: U,
      middlewareData: I,
      update: F,
      isPositioned: j
    } = ps(a, c, b), J = w(() => {
      const V = I.value?.arrow;
      return V ? {
        position: "absolute",
        left: V?.x != null ? `${V.x}px` : "",
        top: V?.y != null ? `${V.y}px` : ""
      } : null;
    });
    o.onReady && o.onReady({ update: F, isPositioned: j });
    const Re = () => {
      ne(!r.value);
    }, ne = (V) => {
      r.value = V;
      const ee = {
        trigger: T(a),
        content: T(c),
        isOpen: T(r)
      }, le = { isOpen: ee.isOpen };
      as(() => {
        r.value ? (F(), window.setTimeout(() => {
          pe(), n.directFocus(ee), t("toggle", le);
        }, 0)) : (_e(), n.directFocus(ee), t("toggle", le));
      });
    };
    let Q;
    const pe = () => {
      n.clickOutsideCloses && (Q && _e(), Q = (V) => {
        c.value.contains(V.target) || ne(!1);
      }, document.addEventListener("click", Q));
    }, _e = () => {
      Q && (document.removeEventListener("click", Q), Q = null);
    }, ve = () => ne(!1);
    return (V, ee) => {
      const le = is("ulu-tooltip");
      return l(), d(A, null, [
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
          "aria-controls": T(i),
          "aria-label": e.triggerAlt
        }, [
          g(V.$slots, "trigger", { isOpen: r.value })
        ], 10, $n)), [
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
          id: T(i),
          style: P(T(C)),
          "data-placement": T(U),
          onKeydown: ee[0] || (ee[0] = rs((O) => ne(!1), ["esc"])),
          tabindex: "-1"
        }, [
          f("span", On, [
            g(V.$slots, "content", { close: ve })
          ]),
          V.$slots.footer ? (l(), d("span", Rn, [
            g(V.$slots, "footer", { close: ve })
          ])) : p("", !0),
          T(o).arrow ? (l(), d("span", {
            key: 1,
            class: "popover__arrow",
            ref_key: "contentArrow",
            ref: u,
            style: P(J.value),
            "data-ulu-popover-arrow": ""
          }, null, 4)) : p("", !0)
        ], 46, An)
      ], 64);
    };
  }
}, xn = ["data-placement"], Un = ["innerHTML"], jn = {
  key: 1,
  class: "popover__inner"
}, zn = {
  __name: "UluTooltipPopover",
  props: {
    config: Object
  },
  setup(e) {
    const s = Xs(e.config.trigger), t = M(null), n = M(null), i = [
      ...e.config.inline ? [fs()] : [],
      ...e.config.offset ? [hs(e.config.offset)] : [],
      ms(),
      gs(),
      ...e.config.arrow ? [ys({ element: n })] : []
    ], o = {
      placement: e.config.placement,
      whileElementsMounted: _s,
      middleware: i
    }, {
      floatingStyles: r,
      placement: a,
      middlewareData: c,
      update: u,
      isPositioned: m
    } = ps(s, t, o), b = w(() => {
      const C = c.value?.arrow;
      return C ? {
        position: "absolute",
        left: C?.x != null ? `${C.x}px` : "",
        top: C?.y != null ? `${C.y}px` : ""
      } : null;
    });
    return e.config.onReady && e.config.onReady({ update: u, isPositioned: m }), (C, U) => (l(), d("span", {
      class: h(["popover popover--tooltip is-active", e.config.class]),
      ref_key: "content",
      ref: t,
      "aria-hidden": "true",
      "data-placement": T(a),
      style: P(T(r))
    }, [
      e.config.isHtml ? (l(), d("span", {
        key: 0,
        class: "popover__inner",
        innerHTML: e.config.content
      }, null, 8, Un)) : (l(), d("span", jn, _(e.config.content), 1)),
      e.config.arrow ? (l(), d("span", {
        key: 2,
        class: "popover__arrow",
        ref_key: "contentArrow",
        ref: n,
        style: P(b.value)
      }, null, 4)) : p("", !0)
    ], 14, xn));
  }
}, En = {
  __name: "UluTooltipDisplay",
  setup(e) {
    return (s, t) => (l(), y(at, {
      to: T(oe).plugin.tooltipTeleportTo
    }, [
      T(ut) ? (l(), y(zn, {
        key: 0,
        config: T(dt)
      }, null, 8, ["config"])) : p("", !0)
    ], 8, ["to"]));
  }
};
function Yd(e, s = {}) {
  const t = _n(s);
  t.plugin.global && (e.directive(t.plugin.directiveName, Sn), e.component("UluTooltipDisplay", En), e.component("UluPopover", ft));
}
const k = (e, s) => {
  const t = e.__vccOpts || e;
  for (const [n, i] of s)
    t[n] = i;
  return t;
}, In = {
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
function Mn(e, s, t, n, i, o) {
  return o.currentModal ? (l(), y(B(o.currentModal.component), G({ key: 0 }, o.currentProps, {
    modelValue: i.open,
    "onUpdate:modelValue": s[0] || (s[0] = (r) => i.open = r),
    onVnodeMounted: o.modalMounted,
    onVnodeUnmounted: o.modalUnmounted
  }), null, 16, ["modelValue", "onVnodeMounted", "onVnodeUnmounted"])) : p("", !0);
}
const Bn = /* @__PURE__ */ k(In, [["render", Mn]]);
function Pn() {
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
    const s = lt("uluCore"), t = M(null), { getIconProps: n, getClassesFromDefinition: i } = Pn();
    let o;
    const r = e, a = w(() => s.getSetting("fontAwesomeStatic")), c = w(() => s.getSetting("iconComponent")), u = w(() => s.getSetting("iconPropResolver")), m = w(() => {
      const { icon: F } = r;
      if (typeof F == "string" && F.startsWith("type:"))
        try {
          const j = F.substring(5);
          return s.getIcon(j);
        } catch (j) {
          return console.warn(j), null;
        }
      return F;
    }), b = w(() => !c.value || !m.value ? null : u.value(m.value)), C = w(() => n(m.value)), U = w(() => i(m.value)), I = w(() => ({
      "flow-inline": r.spaced
    }));
    return ct(async () => {
      if (!a.value && m.value) {
        if (t.value === null)
          if (o)
            t.value = de(o.FontAwesomeIcon);
          else {
            const F = qs(async () => {
              const j = await import("./index.es-HlG3u0J5.js");
              return o = j, j.FontAwesomeIcon;
            });
            t.value = de(F);
          }
      } else
        t.value = null;
    }), (F, j) => c.value ? (l(), y(B(c.value), G({ key: 0 }, b.value, { class: I.value }), null, 16, ["class"])) : !a.value && t.value && m.value ? (l(), y(B(t.value), G({ key: 1 }, C.value, { class: I.value }), null, 16, ["class"])) : a.value && m.value ? (l(), d("span", {
      key: 2,
      class: h([U.value, I.value]),
      "aria-hidden": "true"
    }, null, 2)) : p("", !0);
  }
};
function Je(e) {
  const s = /* @__PURE__ */ new Set();
  if (!e)
    return s;
  if (typeof e == "string")
    e.split(" ").forEach((t) => {
      t && s.add(t);
    });
  else if (Array.isArray(e))
    e.forEach((t) => {
      Je(t).forEach((n) => s.add(n));
    });
  else if (typeof e == "object")
    for (const t in e)
      Object.prototype.hasOwnProperty.call(e, t) && e[t] && t && s.add(t);
  return s;
}
function se({ props: e, baseClass: s, internal: t = {} }) {
  const { modifiers: n } = Ys(e);
  return { resolvedModifiers: w(() => {
    const o = ze(s), r = Je(ze(n)), a = Je(ze(t));
    if (!o)
      return console.warn("useModifiers: Missing 'baseClass' argument, modifiers will not be applied."), "";
    const c = /* @__PURE__ */ new Set([...a, ...r]);
    return Array.from(c).map((u) => `${o}--${u}`);
  }) };
}
function bs() {
  return typeof window < "u" && typeof window.document < "u";
}
function Fn(e, s) {
  const t = e.getBoundingClientRect();
  return s.clientY < t.top || // above
  s.clientY > t.top + t.height || // below
  s.clientX < t.left || // left side
  s.clientX > t.left + t.width;
}
function Ln(e = document.body, s = window) {
  return s.innerWidth - e.clientWidth;
}
function Hn({ preventShift: e = !1, container: s = document.body }) {
  const t = s.style.overflow, n = s.style.paddingRight;
  if (s.style.overflow = "hidden", e) {
    const i = Ln();
    if (i > 0) {
      const o = parseInt(n || "0px", 10);
      s.style.paddingRight = `${o + i}px`;
    }
  }
  return () => {
    s.style.overflow = t, s.style.paddingRight = n;
  };
}
function Fe(e, s, t, n) {
  var i;
  return function() {
    var r = n || this, a = arguments, c = function() {
      i = null, t || e.apply(r, a);
    }, u = t && !i;
    clearTimeout(i), i = setTimeout(c, s), u && e.apply(r, a);
  };
}
bs() && (Vn(), Nn());
const Ot = {
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
function Qe(e, s) {
  Ot[e] ? Ot[e](s) : console.warn(`Unable to dispatch site event: ${e} in context:`, s);
}
function Dn(e) {
  return "ulu:" + e;
}
function we(e, s = null, t = { bubbles: !0 }) {
  return new CustomEvent(Dn(e), { detail: s, ...t });
}
function Vn() {
  window.addEventListener("resize", Fe(() => Qe("pageResized", document), 250));
}
function Nn() {
  window.addEventListener("beforeprint", () => {
    Qe("beforePrint", document);
  }), window.addEventListener("afterprint", () => {
    Qe("afterPrint", document);
  });
}
function Wn(e) {
  return typeof e == "object" && e?.constructor?.name;
}
function Xn(e, s, t) {
  const n = Wn(s) || "Logger";
  console[e](n, ...t);
}
function ce(e, ...s) {
}
function je(e, ...s) {
  Xn("error", e, s);
}
class ht {
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
      je(this, "Missing required elements: control, container");
      return;
    }
    const i = Object.assign({}, ht.defaults, n);
    this.options = i, this.container = s, this.control = t, this.debug = i.debug;
    const o = ["left", "right"], r = ["top", "bottom"], { fromX: a, fromY: c } = i;
    if (!o.includes(a) && a !== null) {
      je(this, `Invalid fromX: ${a} (left|right|null)`);
      return;
    }
    if (!r.includes(c) && c !== null) {
      je(this, `Invalid fromY: ${c} (top|bottom|null)`);
      return;
    }
    if (!a && !c) {
      je(this, "Invalid fromX/fromY, failed to setup resizer (at least one of fromX or fromY must be set)");
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
let Xe = 0;
const qn = {
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
    return ++Xe, {
      containerWidth: null,
      titleId: `ulu-modal-${Xe}-title`,
      bodyOverflowValue: null,
      bodyPaddingRightValue: null,
      isResizing: !1
    };
  },
  setup(e) {
    const s = Gs(), t = w(() => e.title || s.title), n = w(() => {
      const { allowResize: a, position: c } = e;
      if (!a || !c) return;
      const u = ["left", "right", "center"];
      return u.includes(c) ? !0 : (console.warn(`Passed invalid position for resize (${c}), use ${u.join(", ")}`), !1);
    }), i = w(() => e.position === "center" ? "type:resizeBoth" : "type:resizeHorizontal"), o = w(() => ({
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
        s === t && Fn(t, e) && this.close();
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
        e.newState === "open" ? this.restoreScroll = Hn({ preventShift: s }) : this.destroyPreventScroll();
      }
    },
    setupResizer() {
      const { position: e, resizerEnabled: s } = this;
      if (s) {
        const { container: t, resizer: n } = this.$refs, i = e === "center" ? { fromX: "right", fromY: "bottom", multiplier: 2 } : { fromX: e === "right" ? "left" : "right" };
        this.resizerInstance = new ht(t, n, i), this.handleResizerStart = () => {
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
    ++Xe, this.preventScroll && this.setupPreventScroll(), this.setupResizer();
  },
  beforeUnmount() {
    const { container: e } = this.$refs;
    e && e.open && e.close(), this.destroyPreventScroll(), this.destroyResizer();
  }
}, Yn = ["aria-labelledby", "aria-describedby"], Kn = ["id"], Gn = { class: "modal__title-text" }, Zn = {
  key: 2,
  class: "modal__resizer",
  ref: "resizer",
  type: "button"
};
function Jn(e, s, t, n, i, o) {
  const r = E("UluIcon");
  return l(), y(at, {
    to: t.teleport === !1 ? null : t.teleport,
    disabled: t.teleport === !1
  }, [
    f("dialog", {
      class: h(["modal", [n.resolvedModifiers, t.classes.container]]),
      "aria-labelledby": o.resolvedLabelledby,
      "aria-describedby": t.describedby,
      ref: "container",
      style: P({ width: i.containerWidth }),
      onCancel: s[1] || (s[1] = Ks((...a) => o.close && o.close(...a), ["prevent"])),
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
            }, null, 8, ["icon"])) : p("", !0),
            f("span", Gn, _(t.title), 1)
          ])
        ], 10, Kn),
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
      ], 2)) : p("", !0),
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
      ], 2)) : p("", !0),
      n.resizerEnabled ? (l(), d("button", Zn, [
        g(e.$slots, "resizerIcon", {}, () => [
          R(r, {
            class: "modal__resizer-icon",
            icon: t.resizerIcon || n.resizerIconType
          }, null, 8, ["icon"])
        ])
      ], 512)) : p("", !0)
    ], 46, Yn)
  ], 8, ["to", "disabled"]);
}
const Qn = /* @__PURE__ */ k(qn, [["render", Jn]]), Se = [], eo = M({
  /**
   * Holds active component options (including component, and options)
   */
  active: null,
  /**
   * Populated with any props passed to open method, bound to modal component
   */
  activeProps: null
}), ke = eo.value, Rt = {
  data: ke,
  modals: Se
}, to = (e) => ({
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
}), so = {
  componentNameDisplay: "UluModalsDisplay",
  componentNameModal: "UluModal",
  modals: [],
  modalOptions: {}
};
function Kd(e, s) {
  const t = Object.assign({}, so, s), i = to((o) => Object.assign({}, t.modalOptions, o));
  e.component(t.componentNameDisplay, Bn), e.component(t.componentNameModal, Qn), t.modals.forEach((o) => {
    i.add(o);
  }), Rt.options = t, e.config.globalProperties.$uluModals = i, e.provide("uluModals", i), e.config.globalProperties.$uluModalsState = Rt;
}
const no = {
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
}, oo = ["onClick"];
function io(e, s, t, n, i, o) {
  const r = E("UluIcon");
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
        }, null, 8, ["icon"])) : p("", !0)
      ])
    ], 2)) : p("", !0),
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
          }, _(t.toast.title), 3),
          t.toast.date ? (l(), d("span", {
            key: 0,
            class: h(["toast__date", t.classes.date])
          }, _(t.toast.date), 3)) : p("", !0)
        ], 2)) : p("", !0),
        t.toast.description ? (l(), d("div", {
          key: 1,
          class: h(["toast__body", t.classes.body])
        }, _(t.toast.description), 3)) : p("", !0)
      ])
    ], 2),
    t.toast.actions?.length ? (l(), d("div", {
      key: 1,
      class: h(["toast__actions", t.classes.actions])
    }, [
      (l(!0), d(A, null, $(t.toast.actions, (a, c) => (l(), d("button", {
        key: c,
        class: h(["toast__action", t.classes.action]),
        onClick: (u) => o.handleAction(u, a)
      }, _(a.label), 11, oo))), 128))
    ], 2)) : p("", !0),
    f("button", {
      class: h(["toast__close", t.classes.closeButton]),
      onClick: s[0] || (s[0] = (...a) => t.toast.close && t.toast.close(...a))
    }, [
      R(r, { icon: "type:close" })
    ], 2)
  ], 2);
}
const ws = /* @__PURE__ */ k(no, [["render", io]]), xt = {
  toastOptions: {
    /**
     * Component used to render the toast in the display
     */
    component: de(ws),
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
}, { assign: qe } = Object;
let ro = 0;
const te = rt({
  toasts: [],
  /**
   * Saveable 
   */
  pluginOptions: xt.pluginOptions,
  toastOptions: xt.toastOptions,
  setToastOptions(e) {
    return this.toastOptions = qe({}, this.toastOptions, e), this.pluginOptions;
  },
  setPluginOptions(e) {
    return this.pluginOptions = qe({}, this.pluginOptions, e), this.pluginOptions;
  },
  createToast(e) {
    const s = `toast-${++ro}`;
    return qe({}, this.toastOptions, e, {
      uid: s,
      close() {
        et.remove(s);
      }
    });
  }
}), et = {
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
}, ao = {
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
function lo(e, s, t, n, i, o) {
  return l(), y(at, {
    to: i.pluginOptions.teleportTo
  }, [
    R(ls, {
      class: h(["toast-container", o.classes]),
      name: "toast",
      tag: "div"
    }, {
      default: v(() => [
        (l(!0), d(A, null, $(i.toasts, (r) => (l(), y(B(r.component), {
          key: r.uid,
          toast: r
        }, null, 8, ["toast"]))), 128))
      ]),
      _: 1
    }, 8, ["class"])
  ], 8, ["to"]);
}
const co = /* @__PURE__ */ k(ao, [["render", lo]]);
function Gd(e, s = {}) {
  const t = te.setPluginOptions(s?.plugin);
  te.setToastOptions(s?.toast), e.component(t.componentName, ws), e.component(t.componentNameDisplay, co), e.config.globalProperties.$uluToast = et, e.provide("uluToast", et);
}
const uo = {
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
function fo(e) {
  const s = Object.assign({}, uo, e), t = M(null), n = M(s.initialValue), i = M(null);
  return (async () => {
    if (!bs()) return;
    await new Promise((m) => {
      document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", () => m()) : m();
    });
    const r = await import("./breakpoints-DBkQN4AD.js"), { BreakpointManager: a } = r, c = de(new a(s.plugin));
    t.value = de(c);
    const u = () => {
      n.value = c.active, i.value = c.resizeDirection;
    };
    u(), s.onReady && s.onReady(c), c.onChange(u);
  })(), { breakpointManager: t, breakpointActive: n, breakpointDirection: i };
}
const ho = {
  /**
   * Breakpoint for mobile down/max
   */
  breakpointMobile: "small",
  /**
   * Options to pass to useBreakpointManager()
   */
  managerOptions: {}
};
function Zd(e, s) {
  const t = M(!1), n = Object.assign({}, ho, s), { breakpointMobile: i } = n, { onReady: o } = n.managerOptions, r = {
    onReady(b) {
      b.at(i).max({
        on() {
          t.value = !0;
        },
        off() {
          t.value = !1;
        }
      }), o && o(b);
    }
  }, a = Object.assign({}, n.managerOptions, r), {
    breakpointManager: c,
    breakpointActive: u,
    breakpointDirection: m
  } = fo(a);
  e.provide("uluBreakpointActive", w(() => u.value)), e.provide("uluBreakpointDirection", w(() => m.value)), e.provide("uluBreakpointManager", w(() => c.value)), e.provide("uluIsMobile", w(() => t.value));
}
const Jd = {
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
    return (n, i) => (l(), y(T(an), { defaultOpen: e.defaultOpen }, {
      default: v(({ open: o }) => [
        f("div", {
          class: h(["accordion", [
            { [e.activeClass]: o },
            e.classes.container,
            T(t)
          ]])
        }, [
          R(T(ln), {
            class: h(["accordion__summary", [
              { [e.activeClass]: o },
              e.classes.summary
            ]])
          }, {
            default: v(() => [
              g(n.$slots, "summary", { open: o }, () => [
                (l(), y(B(e.summaryTextElement), null, {
                  default: v(() => [
                    S(_(e.summaryText), 1)
                  ]),
                  _: 1
                }))
              ]),
              g(n.$slots, "icon", { open: o }, () => [
                f("span", {
                  class: h(["accordion__icon", e.classes.icon])
                }, [
                  R(D, {
                    icon: o ? "type:collapse" : "type:expand",
                    style: { display: "inline" }
                  }, null, 8, ["icon"])
                ], 2)
              ])
            ]),
            _: 2
          }, 1032, ["class"]),
          R(T(cn), {
            class: h(["accordion__content", e.classes.content])
          }, {
            default: v(() => [
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
let mo = 0;
const go = {
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
      const e = `Ulu-C-${++mo}`;
      return document.getElementById(e) ? this.getUid() : e;
    }
  }
}, yo = ["id", "aria-controls", "aria-expanded"], po = ["id", "aria-hidden", "aria-labelledby"], _o = { class: "CollapsibleRegion__content-inner" };
function vo(e, s, t, n, i, o) {
  return l(), d("div", {
    class: h(["CollapsibleRegion", {
      "CollapsibleRegion--open": i.isOpen,
      "CollapsibleRegion--closed": !i.isOpen,
      "CollapsibleRegion--transitioning": i.isTransitioning
    }]),
    onKeydown: s[1] || (s[1] = rs((...r) => o.handleEscape && o.handleEscape(...r), ["esc"]))
  }, [
    f("button", {
      class: "CollapsibleRegion__toggle",
      id: i.toggleId,
      "aria-controls": i.contentId,
      "aria-expanded": i.isOpen,
      onClick: s[0] || (s[0] = (...r) => o.toggle && o.toggle(...r))
    }, [
      g(e.$slots, "toggle", { isOpen: i.isOpen }, () => [
        S(_(t.title), 1)
      ])
    ], 8, yo),
    me(f("div", {
      class: "CollapsibleRegion__content",
      tabindex: "-1",
      ref: "content",
      id: i.contentId,
      "aria-hidden": !i.isOpen,
      "aria-labelledby": i.toggleId,
      style: P(o.contentStyles)
    }, [
      f("div", _o, [
        g(e.$slots, "default")
      ])
    ], 12, po), [
      [cs, !i.isHidden]
    ])
  ], 34);
}
const Ut = /* @__PURE__ */ k(go, [["render", vo]]), Ss = {
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
    const s = e, { resolvedModifiers: t } = se({ props: s, baseClass: "tag" });
    return (n, i) => (l(), d("span", {
      class: h(["tag", [
        {
          "tag--counter": e.counter,
          [`tag--${e.size}`]: e.size,
          [`tag--${e.type}`]: e.type
        },
        T(t)
      ]])
    }, [
      e.icon ? (l(), y(D, {
        key: 0,
        icon: e.icon,
        spaced: ""
      }, null, 8, ["icon"])) : p("", !0),
      g(n.$slots, "default", {}, () => [
        f("span", null, _(e.text), 1)
      ])
    ], 2));
  }
}, bo = {
  name: "UluMenu",
  components: {
    UluIcon: D,
    UluTag: Ss
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
function wo(e, s, t, n, i, o) {
  const r = E("UluIcon"), a = E("UluTag"), c = E("UluMenu", !0), u = is("ulu-tooltip");
  return t.items?.length ? (l(), d("ul", {
    key: 0,
    class: h(t.classes.list)
  }, [
    (l(!0), d(A, null, $(t.items, (m, b) => (l(), d("li", {
      key: b,
      class: h([t.classes.item, m?.classes?.item])
    }, [
      me((l(), y(B(m.to || m.path ? "router-link" : m.click ? "button" : "a"), G({ ref_for: !0 }, {
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
        default: v(() => [
          g(e.$slots, "default", {
            item: m,
            index: b
          }, () => [
            m.icon ? (l(), y(r, {
              key: 0,
              icon: m.icon,
              class: h([t.classes.linkIcon, m?.classes?.linkIcon])
            }, null, 8, ["icon", "class"])) : p("", !0),
            f("span", {
              class: h([t.classes.linkText, m?.classes?.linkText])
            }, _(m.title), 3),
            m.tag ? (l(), y(a, G({
              key: 1,
              ref_for: !0
            }, m.tag), null, 16)) : p("", !0)
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
      }, null, 8, ["iconOnly", "classes", "items"])) : p("", !0)
    ], 2))), 128))
  ], 2)) : p("", !0);
}
const ks = /* @__PURE__ */ k(bo, [["render", wo]]), So = {
  name: "UluMenuStack",
  components: {
    UluMenu: ks
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
function ko(e, s, t, n, i, o) {
  const r = E("UluMenu");
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
const Co = /* @__PURE__ */ k(So, [["render", ko]]), To = {
  name: "UluDropdown",
  components: {
    UluPopover: ft,
    UluMenuStack: Co
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
function $o(e, s, t, n, i, o) {
  const r = E("UluMenuStack"), a = E("UluPopover");
  return l(), y(a, { classes: t.popoverClasses }, {
    trigger: v(({ isOpen: c }) => [
      g(e.$slots, "default", { isOpen: c })
    ]),
    content: v(() => [
      R(r, { items: t.items }, null, 8, ["items"])
    ]),
    _: 3
  }, 8, ["classes"]);
}
const Qd = /* @__PURE__ */ k(To, [["render", $o]]), mt = M(!1), Me = {
  start: [],
  end: []
};
function gt() {
  window.removeEventListener("resize", gt), mt.value = !0, Me.start.forEach((e) => e());
}
function Ao() {
  mt.value = !1, Me.end.forEach((e) => e()), window.addEventListener("resize", gt);
}
window.addEventListener("resize", gt), window.addEventListener("resize", Fe(Ao, 300));
function jt(e, s) {
  return e.push(s), () => {
    const t = e.findIndex((n) => n === s);
    t > -1 && e.splice(t);
  };
}
function Oo() {
  return {
    resizing: mt,
    onResizeStart(e) {
      return jt(Me.start, e);
    },
    onResizeEnd(e) {
      return jt(Me.end, e);
    }
  };
}
const Ro = {
  uluCore: "Core",
  uluIsMobile: "Breakpoints",
  uluBreakpointActive: "Breakpoints",
  uluBreakpointDirection: "Breakpoints",
  uluBreakpointManager: "Breakpoints",
  uluModals: "Modals",
  uluToast: "Toast"
}, zt = {};
function xo(e) {
  const s = lt(e, zt);
  if (s === zt) {
    const t = Ro[e] || "", n = t ? ` from the '${t}' plugin` : "", i = t ? "Please install missing plugin." : "";
    throw new Error(`Required inject: '${e}'${n} was not provided. ${i}`);
  }
  return s;
}
function ef(e, s) {
  const t = vs(), n = gn(), i = w(() => {
    const u = parseInt(t.query.page || "1", 10);
    return isNaN(u) || u < 1 ? 1 : u;
  }), o = w(() => !e.value || e.value.length === 0 ? 1 : Math.ceil(e.value.length / s));
  us(o, (u) => {
    i.value > u && n.push({ query: { ...t.query, page: u } });
  });
  const r = w(() => {
    const u = (i.value - 1) * s, m = u + s;
    return e.value.slice(u, m);
  }), a = w(() => {
    if (o.value <= 1)
      return null;
    const u = {
      pages: {}
    }, m = i.value, b = o.value, C = 5, U = (j) => ({ query: { ...t.query, page: j } });
    m > 1 && (u.first = { href: U(1) }, u.previous = { href: U(m - 1) }), m < b && (u.next = { href: U(m + 1) }, u.last = { href: U(b) });
    let I, F;
    if (b <= C)
      I = 1, F = b;
    else {
      const j = Math.floor(C / 2), J = Math.ceil(C / 2) - 1;
      m <= j ? (I = 1, F = C) : m + J >= b ? (I = b - C + 1, F = b) : (I = m - j, F = m + J);
    }
    for (let j = I; j <= F; j++)
      u.pages[j] = { href: U(j) };
    return u;
  }), c = w(() => {
    const u = { previous: !1, next: !1 };
    if (!a.value || !a.value.pages) return u;
    const m = Object.keys(a.value.pages).map(Number);
    if (m.length === 0) return u;
    const b = Math.min(...m), C = Math.max(...m);
    return b > 1 && (u.previous = !0), C < o.value && (u.next = !0), u;
  });
  return {
    currentPage: i,
    totalPages: o,
    paginatedItems: r,
    pagerItems: a,
    pagerEllipses: c
  };
}
function tt(e, s, t) {
  typeof e === "function" && (!t || t !== "titleTemplate" && !(t[0] === "o" && t[1] === "n")) && (e = e());
  let i;
  if (s && (i = s(t, e)), Array.isArray(i))
    return i.map((o) => tt(o, s));
  if (i?.constructor === Object) {
    const o = {};
    for (const r of Object.keys(i))
      o[r] = tt(i[r], s, r);
    return o;
  }
  return i;
}
const Uo = (e, s) => Zs(s) ? ze(s) : s, jo = "usehead";
function zo() {
  if (Js()) {
    const e = lt(jo);
    if (!e)
      throw new Error("useHead() was called without provide context, ensure you call it through the setup() function.");
    return e;
  }
  throw new Error("useHead() was called without provide context, ensure you call it through the setup() function.");
}
function Eo(e, s = {}) {
  const t = s.head || zo();
  return t.ssr ? t.push(e || {}, s) : Io(t, e, s);
}
function Io(e, s, t = {}) {
  const n = M(!1);
  let i;
  return ct(() => {
    const r = n.value ? {} : tt(s, Uo);
    i ? i.patch(r) : i = e.push(r, t);
  }), Qs() && (en(() => {
    i.dispose();
  }), tn(() => {
    n.value = !0;
  }), sn(() => {
    n.value = !1;
  })), i;
}
function Le(e, s) {
  let n = (e?.meta || {}).title;
  return typeof n == "function" && (n = n(s || e)), n;
}
function Mo(e, s) {
  const n = Object.assign({}, {
    qualifier(r, a) {
      return a ? pt(r) : Cs(r);
    },
    sort: vt,
    item: {},
    includeChildren: !1
  }, s), i = (r, a) => a ? `${a}/${r.path}` : r.path, o = (r, a = null) => r.filter((c) => n.qualifier(c, a)).map((c) => {
    const u = c.children ? yt(c.children) : c, m = c.children ? c.children.filter((C) => C.path !== "") : !1, b = He(u, i(c, a), n.item);
    return n.includeChildren && m.length && (b.children = o(m, b.path)), b;
  }).sort(n.sort);
  return o(e);
}
function Bo(e) {
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
function Po(e, s, t) {
  const i = Object.assign({}, {
    includeIndex: !1,
    item: {},
    sort: vt
  }, t), o = e.find((u) => u.path !== "/" && s.includes(u.path)), r = (u, m, b) => {
    if (u.children) {
      const C = u.children.find((U) => U.path.includes(s));
      if (C)
        return r(C, u, b + C.path);
    }
    return { route: m, path: b };
  }, { route: a, path: c } = r(o, o, o.path);
  return a.children ? a.children.filter($s(i.includeIndex)).map((u) => He(u, `${c}/${u.path}`, i.item)).sort(i.sort) : (console.warn("Unable to build menu for:", s), []);
}
function yt(e) {
  return e.find((s) => s.path === "");
}
function He(e, s = e.path, t) {
  const i = Object.assign({}, {
    indexMeta: !0,
    modify: null
  }, t);
  let o = Object.assign({}, e.meta);
  i.indexMeta && e.children && (o = Object.assign({}, o, yt(e.children)?.meta));
  const r = { ...e, meta: o }, a = {
    path: s,
    title: Le(r, e) || "Missing Title",
    weight: o?.weight || 0,
    meta: o
  };
  return i.modify && i.modify(a, e), a;
}
function pt(e) {
  return !e.path.includes("/:");
}
function Cs(e) {
  const s = e.path.match(/\//g) || [];
  return pt(e) && s.length === 1;
}
function Fo(e, s) {
  const { target: t } = s, n = t.closest("a");
  if (n) {
    let i = n.getAttribute("href");
    i.startsWith("/") && (e.push(i), s.preventDefault());
  }
}
function Ts(e, s = _t(e)) {
  return s?.children;
}
function _t(e, s) {
  const t = e.matched.length, n = t - 2;
  return s ? t > 1 ? e.matched[0] : null : n < 0 ? null : e.matched[n];
}
function $s(e) {
  return (s) => e || s.path !== "";
}
function vt(e, s) {
  return e?.weight - s?.weight;
}
function Lo(e, s) {
  const n = Object.assign({}, {
    parent: null,
    includeIndex: !1,
    item: {},
    sort: vt
  }, s), i = n.parent || _t(e);
  return (Ts(e, i) || []).filter($s(n.includeIndex)).map((r) => He(r, `${i.path}/${r.path}`, n.item)).sort(n.sort);
}
function Ho(e) {
  const { matched: s, path: t } = e;
  let n;
  return s.reduce((o, r, a) => {
    if (r.meta?.breadcrumb === !1 || r.path === n)
      return o;
    const c = a === s.length - 1, u = Le(r, e) || "Missing Title";
    return o.push({
      title: u,
      to: { path: c ? t : r.path },
      current: c
    }), n = r.path, o;
  }, []);
}
const Do = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  $createBreadcrumb: Ho,
  $createSectionMenu: Lo,
  $getParentRoute: _t,
  $getRouteChildren: Ts,
  createBaseMenu: Mo,
  createMenuItem: He,
  createSectionMenu: Po,
  flattenMenu: Bo,
  getChildIndexRoute: yt,
  getRouteTitle: Le,
  isStaticBaseRoute: Cs,
  isStaticRoute: pt,
  nativeLinkRouter: Fo
}, Symbol.toStringTag, { value: "Module" })), Ye = rt({});
function tf(e = {}) {
  const {
    title: s,
    titleTemplate: t = "%s",
    useRoute: n = vs,
    useHead: i = Eo
  } = e, o = n(), r = o.path;
  if (s !== void 0) {
    ct(() => {
      Ye[r] = T(s);
    }), ds(() => {
      delete Ye[r];
    });
    return;
  }
  const a = w(() => {
    const c = Ye[o.path], u = Le(o, o), m = c || u;
    return m ? t.replace("%s", m) : "App";
  });
  i({
    title: a
  });
}
const Vo = { class: "layout-flex-baseline" }, No = { class: "type-word-break" }, sf = {
  __name: "UluOverflowPopover",
  props: {
    /**
     * Default icon for overflow popover trigger
     */
    triggerIcon: String
  },
  setup(e) {
    const { resizing: s, onResizeEnd: t } = Oo(), n = M(null), i = M(!1), o = () => {
      as(() => {
        const a = n.value;
        i.value = a.offsetWidth < a.scrollWidth;
      });
    }, r = t(o);
    return nn(o), ds(r), (a, c) => (l(), d("div", Vo, [
      f("div", {
        class: "type-truncate",
        ref_key: "text",
        ref: n
      }, [
        g(a.$slots, "default")
      ], 512),
      i.value && !T(s) ? (l(), y(ft, {
        key: 0,
        triggerAlt: "Show Full Text",
        size: "large"
      }, {
        trigger: v(() => [
          R(D, {
            icon: e.triggerIcon || "type:ellipsis"
          }, null, 8, ["icon"])
        ]),
        content: v(() => [
          f("div", No, [
            g(a.$slots, "default")
          ])
        ]),
        _: 3
      })) : p("", !0)
    ]));
  }
}, nf = {
  __name: "UluTab",
  setup(e) {
    return (s, t) => (l(), y(T(un), null, {
      default: v((n) => [
        g(s.$slots, "default", X(q(n)))
      ]),
      _: 3
    }));
  }
}, of = /* @__PURE__ */ Object.assign({
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
    return (s, t) => (l(), y(T(dn), {
      defaultIndex: e.defaultIndex,
      vertical: e.vertical
    }, {
      default: v((n) => [
        f("div", {
          class: h(["tabs", {
            "tabs--vertical": e.vertical
          }])
        }, [
          g(s.$slots, "default", X(q(n)))
        ], 2)
      ]),
      _: 3
    }, 8, ["defaultIndex", "vertical"]));
  }
}), rf = {
  __name: "UluTabList",
  setup(e) {
    return (s, t) => (l(), y(T(fn), { class: "tabs__tablist" }, {
      default: v(() => [
        g(s.$slots, "default")
      ]),
      _: 3
    }));
  }
}, af = {
  __name: "UluTabPanel",
  setup(e) {
    return (s, t) => (l(), y(T(hn), null, {
      default: v((n) => [
        g(s.$slots, "default", X(q(n)))
      ]),
      _: 3
    }));
  }
}, lf = {
  __name: "UluTabPanels",
  setup(e) {
    return (s, t) => (l(), y(T(mn), null, {
      default: v((n) => [
        g(s.$slots, "default", X(q(n)))
      ]),
      _: 3
    }));
  }
}, Wo = {
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
      return this.to ? Pe : this.href ? "a" : "button";
    },
    attrs() {
      const { to: e, href: s, download: t, target: n } = this, i = e ? { to: e } : s ? { href: s } : {};
      return s && (n && (i.target = n), t && (i.download = typeof t == "string" ? t : !0)), i;
    }
  }
}, Xo = { key: 1 };
function qo(e, s, t, n, i, o) {
  const r = E("UluIcon");
  return l(), y(B(o.element), G({
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
    default: v(() => [
      g(e.$slots, "before"),
      t.icon && (t.iconBefore || t.iconOnly) ? (l(), y(r, {
        key: 0,
        icon: t.icon,
        class: "button__icon"
      }, null, 8, ["icon"])) : p("", !0),
      (e.$slots.default || t.text) && !t.iconOnly ? (l(), d("span", Xo, [
        g(e.$slots, "default", {}, () => [
          S(_(t.text), 1)
        ])
      ])) : p("", !0),
      t.icon && !t.iconBefore && !t.iconOnly ? (l(), y(r, {
        key: 2,
        icon: t.icon,
        class: "button__icon"
      }, null, 8, ["icon"])) : p("", !0),
      g(e.$slots, "after")
    ]),
    _: 3
  }, 16, ["class", "aria-label"]);
}
const Yo = /* @__PURE__ */ k(Wo, [["render", qo]]), Ko = {
  name: "UluAlert",
  components: {
    UluButton: Yo,
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
    const { resolvedModifiers: s } = se({
      props: e,
      baseClass: "callout",
      internal: w(() => ({
        [e.type]: e.type,
        compact: e.compact
      }))
    });
    return { resolvedModifiers: s };
  }
}, Go = { class: "layout-flex" }, Zo = { class: "type-small" }, Jo = {
  key: 0,
  class: "margin-left-auto align-self-center"
};
function Qo(e, s, t, n, i, o) {
  const r = E("UluIcon");
  return l(), d("div", {
    class: h(["callout", n.resolvedModifiers])
  }, [
    f("div", Go, [
      R(r, {
        class: h(["type-large margin-right-small", `color-${t.type}`]),
        icon: t.icon || `type:${t.type}`
      }, null, 8, ["class", "icon"]),
      f("div", Zo, [
        f("div", null, [
          g(e.$slots, "title", {}, () => [
            f("strong", null, _(t.title), 1)
          ])
        ]),
        f("div", null, [
          g(e.$slots, "description", {}, () => [
            S(_(t.description), 1)
          ])
        ])
      ]),
      e.$slots.action ? (l(), d("div", Jo, [
        g(e.$slots, "action")
      ])) : p("", !0)
    ])
  ], 2);
}
const cf = /* @__PURE__ */ k(Ko, [["render", Qo]]), ei = ["aria-hidden"], ti = {
  key: 2,
  class: "hidden-visually"
}, si = {
  __name: "UluBadge",
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
  setup(e) {
    const s = e, t = w(() => !!(s.to || s.click)), n = w(() => {
      const { click: i, to: o, href: r } = s;
      return i ? "button" : o ? Pe : r ? "a" : "span";
    });
    return (i, o) => (l(), y(B(n.value), {
      class: h(["badge", [
        e.size ? `badge--${e.size}` : null,
        e.type ? `badge--${e.type}` : null,
        { "badge--clickable": t.value }
      ]]),
      to: e.to,
      href: e.href,
      onClick: e.click
    }, {
      default: v(() => [
        f("span", {
          class: h(["badge__inner", { "skeleton__background-color": e.skeleton }])
        }, [
          e.text ? (l(), d("span", {
            key: 0,
            "aria-hidden": e.alt ? "true" : null
          }, _(e.text), 9, ei)) : g(i.$slots, "default", { key: 1 }),
          e.alt ? (l(), d("span", ti, _(e.alt), 1)) : p("", !0)
        ], 2)
      ]),
      _: 3
    }, 8, ["class", "to", "href", "onClick"]));
  }
}, ni = { class: "badge-stack" }, uf = {
  __name: "UluBadgeStack",
  props: {
    /**
     * Array of props for each badge
     */
    items: Array
  },
  setup(e) {
    return (s, t) => (l(), d("ul", ni, [
      (l(!0), d(A, null, $(e.items, (n, i) => (l(), d("li", {
        class: "badge-stack__item",
        key: i
      }, [
        R(si, G({ ref_for: !0 }, n), null, 16)
      ]))), 128))
    ]));
  }
}, oi = {
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
    const { resolvedModifiers: s } = se({ props: e, baseClass: "button-verbose" });
    return { resolvedModifiers: s };
  },
  computed: {
    element() {
      return this.to ? Pe : this.href ? "a" : "button";
    },
    attrs() {
      const { to: e, href: s, download: t, target: n } = this, i = e ? { to: e } : s ? { href: s } : {};
      return s && (n && (i.target = n), t && (i.download = typeof t == "string" ? t : !0)), i;
    }
  }
}, ii = {
  key: 1,
  class: "button-verbose__body"
};
function ri(e, s, t, n, i, o) {
  const r = E("UluIcon");
  return l(), y(B(o.element), G({
    class: ["button-verbose", [
      {
        "button-verbose--inline": t.inline,
        "button-verbose--full-width": t.fullWidth
      },
      n.resolvedModifiers
    ]]
  }, o.attrs), {
    default: v(() => [
      e.$slots.title || t.title ? (l(), y(B(t.titleElement), {
        key: 0,
        class: "button-verbose__title"
      }, {
        default: v(() => [
          g(e.$slots, "title", {}, () => [
            S(_(t.title), 1)
          ])
        ]),
        _: 3
      })) : p("", !0),
      e.$slots.default || t.body ? (l(), d("span", ii, [
        g(e.$slots, "default", {}, () => [
          S(_(t.body), 1)
        ])
      ])) : p("", !0),
      t.icon ? (l(), y(r, {
        key: 2,
        icon: t.icon,
        class: "button-verbose__icon",
        "aria-hidden": "true"
      }, null, 8, ["icon"])) : p("", !0)
    ]),
    _: 3
  }, 16, ["class"]);
}
const df = /* @__PURE__ */ k(oi, [["render", ri]]), ai = {
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
function li(e, s, t, n, i, o) {
  return l(), d("div", {
    class: h(["callout", [n.resolvedModifiers, { "full-height": t.fullHeight }]])
  }, [
    g(e.$slots, "default")
  ], 2);
}
const ff = /* @__PURE__ */ k(ai, [["render", li]]), Et = (e, s) => {
  const t = !(s.to || s.href);
  return t || console.warn("'titleHref' and 'titleTo' can't be used with to or href (nesting links)"), t;
}, ci = {
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
      validator: Et
    },
    /**
     * Will make title a link to href
     */
    titleHref: {
      type: String,
      validator: Et
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
      return s ? Pe : t ? "a" : e;
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
}, ui = { class: "card__body" }, di = { class: "card__main" }, fi = ["href", "target"], hi = {
  key: 0,
  class: "card__aside"
}, mi = ["src", "alt"], gi = {
  key: 1,
  class: "card__footer"
};
function yi(e, s, t, n, i, o) {
  const r = E("router-link");
  return l(), y(B(o.resolvedElement), {
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
    style: P({ cursor: i.cursorStyle }),
    target: t.target,
    to: t.to,
    href: t.href,
    "data-ulu-proxy-click-init": i.proxyClickEnabled
  }, {
    default: v(() => [
      f("div", ui, [
        f("div", di, [
          (l(), y(B(t.titleElement), {
            class: h(["card__title", t.classes.title])
          }, {
            default: v(() => [
              t.titleTo ? (l(), y(r, {
                key: 0,
                class: "card__title-link",
                to: t.titleTo,
                ref: "link"
              }, {
                default: v(() => [
                  g(e.$slots, "title", {}, () => [
                    S(_(t.title), 1)
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
                  S(_(t.title), 1)
                ])
              ], 8, fi)) : g(e.$slots, "title", { key: 2 }, () => [
                S(_(t.title), 1)
              ])
            ]),
            _: 3
          }, 8, ["class"])),
          g(e.$slots, "body")
        ]),
        e.$slots.aside ? (l(), d("div", hi, [
          g(e.$slots, "aside")
        ])) : p("", !0)
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
          }, null, 8, mi)
        ])
      ], 2)) : p("", !0),
      e.$slots.footer ? (l(), d("div", gi, [
        g(e.$slots, "footer")
      ])) : p("", !0)
    ]),
    _: 3
  }, 40, ["onMousedown", "onMouseup", "class", "style", "target", "to", "href", "data-ulu-proxy-click-init"]);
}
const hf = /* @__PURE__ */ k(ci, [["render", yi]]), mf = {
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
    }
  },
  setup(e) {
    return (s, t) => (l(), d("dl", {
      class: h(e.classes.list)
    }, [
      (l(!0), d(A, null, $(e.items, (n, i) => (l(), d("div", {
        key: i,
        class: h(e.classes.item)
      }, [
        f("dt", {
          class: h(e.classes.term)
        }, [
          g(s.$slots, "term", {
            item: n,
            index: i
          }, () => [
            S(_(n.term), 1)
          ])
        ], 2),
        f("dd", {
          class: h(e.classes.description)
        }, [
          g(s.$slots, "description", {
            item: n,
            index: i
          }, () => [
            S(_(n.description), 1)
          ])
        ], 2)
      ], 2))), 128))
    ], 2));
  }
}, pi = ["href", "target"], _i = { class: "external-link__text" }, gf = {
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
    return (s, t) => (l(), d("a", {
      class: "external-link",
      href: e.href,
      target: e.target
    }, [
      f("span", _i, [
        g(s.$slots, "default", {}, () => [
          S(_(e.text), 1)
        ])
      ]),
      R(D, {
        class: "external-link__icon margin-left-small-x display-inline",
        icon: e.icon || "type:externalLink"
      }, null, 8, ["icon"])
    ], 8, pi));
  }
}, yf = {
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
    const s = e, t = w(() => s.ordered || s.forceOrdered ? "ol" : "ul");
    return (n, i) => (l(), y(B(t.value), {
      class: h([
        {
          "list-ordered": e.ordered,
          "list-unordered": e.unordered,
          "list-lines": e.lines,
          "list-compact": e.compact
        },
        e.classes.list
      ]),
      style: P({
        listStyleType: e.listStyleType
      }),
      reversed: e.reversed,
      start: e.start
    }, {
      default: v(() => [
        (l(!0), d(A, null, $(e.items, (o, r) => (l(), d("li", {
          key: r,
          class: h(e.classes.listItem)
        }, [
          g(n.$slots, "default", {
            item: o,
            index: r
          }, () => [
            S(_(o), 1)
          ])
        ], 2))), 128))
      ]),
      _: 3
    }, 8, ["class", "style", "reversed", "start"]));
  }
}, vi = {}, bi = { id: "main-content" };
function wi(e, s) {
  return l(), d("main", bi, [
    g(e.$slots, "default")
  ]);
}
const pf = /* @__PURE__ */ k(vi, [["render", wi]]), Si = { class: "spoke-spinner__spinner" }, _f = {
  __name: "UluSpokeSpinner",
  props: {
    /**
     * Type modifier for spinner (ie match scss style name)
     */
    type: String
  },
  setup(e) {
    return (s, t) => (l(), d("div", {
      class: h(["spoke-spinner", { [`spoke-spinner--${e.type}`]: e.type }])
    }, [
      f("div", Si, [
        (l(), d(A, null, $(12, (n) => f("div", { key: n })), 64))
      ])
    ], 2));
  }
}, ki = { class: "menu-stack form-theme" }, Ci = { class: "menu-stack__list" }, Ti = { class: "menu-stack__selectable" }, $i = ["id", "onUpdate:modelValue"], Ai = ["for"], vf = {
  __name: "UluCheckboxMenu",
  props: {
    /**
     * Checkbox items in [{ title|text, checked }, ...]
     */
    options: Array
  },
  setup(e) {
    const s = (t) => `checkbox-menu-opt-${t}`;
    return (t, n) => (l(), d("div", ki, [
      f("ul", Ci, [
        (l(!0), d(A, null, $(e.options, (i, o) => (l(), d("li", {
          class: "menu-stack__item",
          key: o
        }, [
          f("div", Ti, [
            me(f("input", {
              type: "checkbox",
              id: s(o),
              "onUpdate:modelValue": (r) => i.checked = r
            }, null, 8, $i), [
              [on, i.checked]
            ]),
            f("label", {
              for: s(o)
            }, [
              g(t.$slots, "default", {}, () => [
                S(_(i?.title || i?.text), 1)
              ])
            ], 8, Ai)
          ])
        ]))), 128))
      ])
    ]));
  }
}, Oi = ["href", "download"], Ri = { class: "margin-left-small-x" }, bf = {
  __name: "UluFileDisplay",
  props: {
    file: {
      required: !0,
      type: Object
    },
    icon: {
      type: String,
      default: "type:file"
    },
    noFileSize: Boolean
  },
  setup(e) {
    const s = e, t = w(() => typeof window > "u" ? "" : window.URL.createObjectURL(s.file)), n = w(() => {
      const { size: i } = s.file, o = i / 1e6, r = i / 1e3, a = (c) => parseFloat(c.toFixed(2));
      return o > 1 ? `${a(o)}Mb` : r > 1 ? `${a(r)}Kb` : `${a(i)}B`;
    });
    return (i, o) => (l(), d("a", {
      class: "layout-flex-baseline",
      href: t.value,
      download: e.file.name
    }, [
      g(i.$slots, "default", {
        fileName: e.file.name,
        fileSize: n.value
      }, () => [
        R(D, {
          class: "ui-icon",
          icon: e.icon
        }, null, 8, ["icon"]),
        f("span", Ri, [
          S(_(e.file.name) + " ", 1),
          e.noFileSize ? p("", !0) : (l(), y(Ss, {
            key: 0,
            text: n.value,
            small: "",
            outline: ""
          }, null, 8, ["text"]))
        ])
      ])
    ], 8, Oi));
  }
}, xi = { class: "site-form__item site-form__item--file" }, Ui = ["for"], ji = ["multiple", "id"], wf = {
  __name: "UluFormFile",
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
  emits: ["file-change"],
  setup(e, { emit: s }) {
    const t = /* @__PURE__ */ (() => {
      let r = 0;
      return () => `file-input-id-${++r}`;
    })(), n = s, i = t(), o = (r) => {
      n("file-change", r.target.files);
    };
    return (r, a) => (l(), d("div", xi, [
      f("label", {
        class: h({ "hidden-visually": e.labelHidden }),
        for: T(i)
      }, [
        g(r.$slots, "label", {}, () => [
          S(_(e.label), 1)
        ])
      ], 10, Ui),
      f("input", G({
        type: "file",
        onChange: o,
        multiple: e.multiple,
        id: T(i)
      }, e.inputAttrs), null, 16, ji)
    ]));
  }
}, Sf = {
  __name: "UluFormMessage",
  props: {
    warning: Boolean,
    error: Boolean
  },
  setup(e) {
    return (s, t) => (l(), d("p", {
      class: h(["site-form__description", {
        "site-form__error": e.error,
        "site-form__warning": e.warning
      }])
    }, [
      e.error || e.warning ? (l(), y(D, {
        key: 0,
        icon: `type:${e.error ? "error" : "warning"}`
      }, null, 8, ["icon"])) : p("", !0),
      g(s.$slots, "default")
    ], 2));
  }
}, zi = { class: "site-form__item site-form__item--select" }, Ei = ["for"], Ii = ["id", "value"], Mi = ["value"], kf = {
  __name: "UluFormSelect",
  props: {
    label: String,
    modelValue: String,
    options: Array,
    labelHidden: Boolean
  },
  emits: ["update:modelValue"],
  setup(e) {
    const t = (/* @__PURE__ */ (() => {
      let n = 0;
      return () => `select-id-${++n}`;
    })())();
    return (n, i) => (l(), d("div", zi, [
      f("label", {
        class: h({ "hidden-visually": e.labelHidden }),
        for: T(t)
      }, [
        g(n.$slots, "default", {}, () => [
          S(_(e.label), 1)
        ])
      ], 10, Ei),
      f("select", {
        id: T(t),
        value: e.modelValue,
        onInput: i[0] || (i[0] = (o) => n.$emit("update:modelValue", o.target.value))
      }, [
        i[1] || (i[1] = f("option", {
          disabled: "",
          value: ""
        }, "Please select one", -1)),
        (l(!0), d(A, null, $(e.options, (o, r) => (l(), d("option", {
          key: r,
          value: o.value
        }, _(o.text), 9, Mi))), 128))
      ], 40, Ii)
    ]));
  }
}, Bi = { class: "site-form__item site-form__item--text" }, Pi = ["for"], Fi = ["value", "id"], Cf = {
  __name: "UluFormText",
  props: {
    label: String,
    modelValue: String,
    labelHidden: Boolean
  },
  emits: ["update:modelValue"],
  setup(e) {
    const t = (/* @__PURE__ */ (() => {
      let n = 0;
      return () => `text-input-id-${++n}`;
    })())();
    return (n, i) => (l(), d("div", Bi, [
      f("label", {
        class: h({ "hidden-visually": e.labelHidden }),
        for: T(t)
      }, [
        g(n.$slots, "default", {}, () => [
          S(_(e.label), 1)
        ])
      ], 10, Pi),
      f("input", {
        type: "text",
        value: e.modelValue,
        onInput: i[0] || (i[0] = (o) => n.$emit("update:modelValue", o.target.value)),
        id: T(t)
      }, null, 40, Fi)
    ]));
  }
}, Li = { class: "form-theme search-form type-small" }, Hi = { class: "search-form__field" }, Di = ["placeholder"], Vi = {
  class: "search-form__submit button button--primary",
  "aria-label": "Submit Search"
}, Tf = {
  __name: "UluSearchForm",
  props: {
    placeholder: {
      type: String,
      default: "Titles, keyword…"
    }
  },
  setup(e) {
    return (s, t) => (l(), d("div", Li, [
      f("div", Hi, [
        t[0] || (t[0] = f("label", { class: "hidden-visually" }, "Search", -1)),
        f("input", {
          class: "search-form__input",
          type: "text",
          id: "example-input",
          placeholder: e.placeholder
        }, null, 8, Di)
      ]),
      f("button", Vi, [
        R(D, { icon: "type:search" })
      ])
    ]));
  }
}, $f = {
  __name: "UluAdaptiveLayout",
  setup(e) {
    const s = xo("uluIsMobile");
    return (t, n) => !T(s) || !t.$slots.mobile ? g(t.$slots, "default", { key: 0 }) : g(t.$slots, "mobile", { key: 1 });
  }
};
function Ni(e) {
  var s;
  return e = e.replace(/^[^-_a-zA-Z]+/, "").replace(/^-(?:[-0-9]+)/, "-"), s = e && e.replace(/[^-_a-zA-Z0-9]+/g, "-"), s.toLowerCase();
}
function Wi(e, s = {
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
const Xi = {
  name: "UluDataGrid",
  async mounted() {
    const e = () => Wi(this.$el);
    e(), this.resizeHandler = Fe(e, 200, !1, this), window.addEventListener("resize", this.resizeHandler);
  },
  beforeUnmount() {
    this.resizeHandler && window.removeEventListener("resize", this.resizeHandler);
  }
};
function qi(e, s, t, n, i, o) {
  return l(), d("div", null, [
    g(e.$slots, "default")
  ]);
}
const Af = /* @__PURE__ */ k(Xi, [["render", qi]]), Yi = {
  name: "UluTitleRail",
  components: {
    UluIcon: D
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
}, Ki = {
  key: 0,
  class: "rail__item rail__item--pull"
};
function Gi(e, s, t, n, i, o) {
  const r = E("UluIcon");
  return l(), d("div", {
    class: h(["rail rail--title-rail", {
      "rail--rule": t.rule
    }])
  }, [
    f("div", {
      class: h(["rail__item rail__item--title", t.classes.itemTitle])
    }, [
      (l(), y(B(t.titleElement), {
        class: h(["layout-flex type-max-width-small no-margin", t.classes.title]),
        style: P({ alignItems: t.iconAlign })
      }, {
        default: v(() => [
          t.icon ? (l(), y(r, {
            key: 0,
            class: h(t.classes.icon),
            icon: t.icon
          }, null, 8, ["class", "icon"])) : p("", !0),
          g(e.$slots, "default", {}, () => [
            S(_(t.title), 1)
          ])
        ]),
        _: 3
      }, 8, ["class", "style"]))
    ], 2),
    e.$slots.end ? (l(), d("div", Ki, [
      g(e.$slots, "end")
    ])) : p("", !0)
  ], 2);
}
const Of = /* @__PURE__ */ k(Yi, [["render", Gi]]), Zi = {
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
function Ji(e, s, t, n, i, o) {
  const r = E("router-link"), a = E("UluIcon");
  return t.items.length ? (l(), d("nav", {
    key: 0,
    class: h(t.classes.nav),
    "aria-label": "Breadcrumb"
  }, [
    f("ol", {
      class: h(t.classes.list)
    }, [
      (l(!0), d(A, null, $(t.items, (c, u) => (l(), d("li", {
        key: u,
        class: h(t.classes.item)
      }, [
        c.current ? (l(), d("span", {
          key: 1,
          class: h(c.current)
        }, [
          g(e.$slots, "default", { item: c }, () => [
            S(_(c.title), 1)
          ])
        ], 2)) : (l(), y(r, {
          key: 0,
          to: c.to,
          class: h(t.classes.link),
          "aria-current": c.current ? "page" : null
        }, {
          default: v(() => [
            g(e.$slots, "default", { item: c }, () => [
              S(_(c.title), 1)
            ])
          ]),
          _: 2
        }, 1032, ["to", "class", "aria-current"])),
        u < t.items.length - 1 ? g(e.$slots, "separator", { key: 2 }, () => [
          R(a, {
            class: h(t.classes.separator),
            icon: t.separatorIcon || "type:pathSeparator"
          }, null, 8, ["class", "icon"])
        ]) : p("", !0)
      ], 2))), 128))
    ], 2)
  ], 2)) : p("", !0);
}
const Rf = /* @__PURE__ */ k(Zi, [["render", Ji]]), Qi = {
  name: "UluNavStrip",
  components: {
    UluMenu: ks
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
function er(e, s, t, n, i, o) {
  const r = E("UluMenu");
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
const xf = /* @__PURE__ */ k(Qi, [["render", er]]), tr = {}, sr = {
  class: "site-skip-link hidden-visually-focusable",
  href: "#main-content"
};
function nr(e, s) {
  return l(), d("a", sr, " Skip to main content ");
}
const Uf = /* @__PURE__ */ k(tr, [["render", nr]]), or = {
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
function ir(e, s, t, n, i, o) {
  return t.text != null ? (l(), y(B(t.element), { key: 0 }, {
    default: v(() => [
      S(_(t.text), 1)
    ]),
    _: 1
  })) : p("", !0);
}
const jf = /* @__PURE__ */ k(or, [["render", ir]]), rr = {}, ar = { style: { display: "none" } };
function lr(e, s) {
  return l(), d("span", ar);
}
const zf = /* @__PURE__ */ k(rr, [["render", lr]]), cr = {};
function ur(e, s) {
  const t = E("router-view");
  return l(), y(t);
}
const Ef = /* @__PURE__ */ k(cr, [["render", ur]]);
function Be(e = 0, s = 100) {
  return e = Math.ceil(e), s = Math.floor(s), Math.floor(Math.random() * (s - e) + e);
}
const dr = {
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
        width: Be(500, 1e3),
        height: Be(500, 1e3)
      } : { width: s, height: t };
    }
  }
}, fr = ["src", "alt"];
function hr(e, s, t, n, i, o) {
  return l(), d("img", {
    src: o.src,
    alt: t.alt
  }, null, 8, fr);
}
const If = /* @__PURE__ */ k(dr, [["render", hr]]), mr = {
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
function gr(e, s, t, n, i, o) {
  return l(!0), d(A, null, $(parseInt(t.amount), (r) => (l(), y(B(t.element), { key: r }, {
    default: v(() => [...s[0] || (s[0] = [
      S(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed semper erat tincidunt tellus vestibulum dictum. Fusce vel augue commodo, egestas diam sed, accumsan leo. Maecenas congue nec nisl et ullamcorper. Maecenas tincidunt, tortor et viverra eleifend, enim leo vestibulum ipsum, quis placerat mi nisi nec ex. Vivamus a justo volutpat, scelerisque elit eget, lacinia ex. Phasellus dapibus sollicitudin tortor, vitae suscipit nunc condimentum ut. Cras suscipit feugiat nibh nec consectetur. Phasellus vitae quam blandit, cursus metus ut, placerat mi. Sed tempor lacus non est interdum imperdiet nec quis metus. Praesent vel eleifend diam. Donec tincidunt eget purus sed posuere. ", -1)
    ])]),
    _: 2
  }, 1024))), 128);
}
const Mf = /* @__PURE__ */ k(mr, [["render", gr]]), yr = {
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
function pr(e, s, t, n, i, o) {
  return o.title ? (l(), d("p", {
    key: 0,
    tabindex: "-1",
    class: "hidden-visually",
    ref: "el"
  }, _(o.title), 513)) : p("", !0);
}
const Bf = /* @__PURE__ */ k(yr, [["render", pr]]), _r = {
  name: "AnimateNumber",
  props: {
    /**
     * Number to animate as it changes
     */
    value: Number
  },
  watch: {
    value() {
      yn.to(this, {
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
function vr(e, s, t, n, i, o) {
  return l(), d("span", null, [
    g(e.$slots, "default", { currentValue: i.currentValue }, () => [
      S(_(i.currentValue), 1)
    ])
  ]);
}
const Pf = /* @__PURE__ */ k(_r, [["render", vr]]), br = {
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
}, wr = { class: "progress-bar__header" }, Sr = {
  key: 0,
  class: "progress-bar__icon"
}, kr = { class: "hidden-visually" }, Cr = { class: "progress-bar__track" }, Tr = { class: "progress-bar__values" }, $r = { class: "progress-bar__value progress-bar__value--amount" }, Ar = {
  key: 0,
  class: "progress-bar__value progress-bar__value--deficit color-status is-danger"
}, Or = { class: "progress-bar__value progress-bar__value--total" };
function Rr(e, s, t, n, i, o) {
  const r = E("StatusIcon");
  return l(), d("div", {
    class: h(["progress-bar", {
      "progress-bar--small": t.small,
      "progress-bar--icon-left": t.iconOnLeft,
      "type-small": t.small
    }])
  }, [
    f("div", wr, [
      f("strong", {
        class: h(["progress-bar__label", {
          "type-normal": t.small,
          "hidden-visually": t.labelHidden
        }])
      }, _(t.label), 3),
      o.status ? (l(), d("div", Sr, [
        R(r, {
          type: o.status.type
        }, null, 8, ["type"]),
        f("span", kr, _(o.status.message), 1)
      ])) : p("", !0)
    ]),
    f("div", Cr, [
      f("div", {
        class: "progress-bar__bar",
        style: P(`width: ${o.percentage}%`)
      }, null, 4),
      t.deficit ? (l(), d("div", {
        key: 0,
        class: "progress-bar__bar--deficit",
        style: P(`width: ${o.defPercentage}%`)
      }, null, 4)) : p("", !0)
    ]),
    f("div", Tr, [
      f("div", $r, [
        s[0] || (s[0] = f("strong", { class: "hidden-visually" }, "Amount:", -1)),
        S(" " + _(t.amount), 1)
      ]),
      t.deficit > 0 ? (l(), d("div", Ar, [
        s[1] || (s[1] = f("strong", { class: "hidden-visually" }, "Deficit: ", -1)),
        S(" -" + _(t.deficit), 1)
      ])) : p("", !0),
      f("div", Or, [
        s[2] || (s[2] = f("strong", { class: "hidden-visually" }, "Total:", -1)),
        S(" " + _(t.total), 1)
      ])
    ])
  ], 2);
}
const Ff = /* @__PURE__ */ k(br, [["render", Rr]]);
let xr = 0;
const Ur = {
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
      uid: `progress-donut-${++xr}`
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
}, jr = { class: "progress-donut__chart" }, zr = {
  class: "progress-donut__chart-svg",
  viewBox: "0 0 32 32"
}, Er = ["r"], Ir = {
  key: 0,
  class: "progress-donut__chart-value"
}, Mr = {
  key: 0,
  class: "progress-donut__value type-small-x"
};
function Br(e, s, t, n, i, o) {
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
    f("div", jr, [
      (l(), d("svg", zr, [
        f("circle", {
          class: "progress-donut__chart-pie",
          ref: "pie",
          r: "16",
          cx: "16",
          cy: "16",
          style: P({ strokeDasharray: o.endDasharray })
        }, null, 4),
        f("circle", {
          class: "progress-donut__chart-mask",
          r: t.small ? 7 : 11,
          cx: "16",
          cy: "16"
        }, null, 8, Er)
      ])),
      t.small ? p("", !0) : (l(), d("strong", Ir, _(t.percentage) + "% ", 1))
    ]),
    t.small ? (l(), d("strong", Mr, _(t.percentage) + "% ", 1)) : p("", !0)
  ], 2);
}
const Lf = /* @__PURE__ */ k(Ur, [["render", Br]]);
function Pr(e, s) {
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
function Hf(e, s = {}) {
  const t = (O, L) => {
    const H = O[L];
    return H === null || typeof H > "u" ? [] : Array.isArray(H) ? H : [H];
  }, {
    initialFacets: n,
    facetFields: i,
    initialSearchValue: o = "",
    initialSortType: r = "az",
    noDefaultSorts: a = !1,
    extraSortTypes: c = {},
    searchOptions: u = {},
    getItemFacet: m = t,
    getSortValue: b = (O) => O.title || O.label || ""
  } = s, C = (O) => O.sort((L, H) => {
    const W = b(L), N = b(H);
    return W && N ? String(W).localeCompare(String(N)) : W ? -1 : N ? 1 : 0;
  }), U = {
    az: { text: "A-Z", sort: C },
    za: { text: "Z-A", sort: (O) => C(O).reverse() }
  };
  function I(O) {
    return (O || []).map((L) => ({
      ...L,
      open: L.open || !1,
      children: L.children.map((H) => ({
        ...H,
        selected: H.selected || !1
      })),
      selectedCount: 0
    }));
  }
  const F = w(() => !i || !e.value?.length ? null : Pr(e.value, i)), j = M(I(n || F.value)), J = M(o), Re = M(r);
  i && !n && us(F, (O) => {
    j.value = I(O);
  });
  const ne = w(() => ({
    ...a ? {} : U,
    ...c
  })), Q = w(() => ({
    shouldSort: !0,
    keys: ["title", "label", "description", "author"],
    ...u
  })), pe = w(() => {
    const O = [];
    return j.value.forEach((L) => {
      const { name: H, uid: W, children: N } = L;
      let xe = 0, kt = !1;
      N && N.forEach((Ct) => {
        Ct.selected && (++xe, kt || (O.push({ uid: W, name: H, children: [] }), kt = !0), O[O.length - 1].children.push(Ct));
      }), L.selectedCount = xe;
    }), O;
  }), _e = w(() => pe.value.length ? e.value.filter((O) => pe.value.every((L) => {
    const H = m(O, L.uid);
    return H && H.length ? L.children.some((W) => H.includes(W.uid)) : !1;
  })) : e.value), ve = w(() => J.value?.length ? new pn(_e.value, Q.value).search(J.value).map((L) => L.item) : _e.value), V = w(() => {
    const O = ne.value[Re.value]?.sort;
    return typeof O != "function" ? ve.value : O([...ve.value]);
  });
  function ee() {
    j.value.forEach((O) => {
      O.children && O.children.forEach((L) => L.selected = !1);
    });
  }
  function le({ groupUid: O, facetUid: L, selected: H }) {
    const W = j.value.find((N) => N.uid === O);
    if (W) {
      const N = W.children.find((xe) => xe.uid === L);
      N && (N.selected = H);
    }
  }
  return {
    // State
    facets: j,
    searchValue: J,
    selectedSort: Re,
    sortTypes: ne,
    // Computed
    displayItems: V,
    selectedFacets: pe,
    // Methods
    clearFilters: ee,
    handleFacetChange: le
  };
}
const Fr = { class: "UluFacets__facet-list" }, Lr = ["id", "checked", "onChange"], Hr = ["for"], It = {
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
    return (o, r) => (l(), d("ul", Fr, [
      (l(!0), d(A, null, $(e.children, (a) => (l(), d("li", {
        class: h(["UluFacets__facet", e.classFacet]),
        key: a.uid
      }, [
        f("input", {
          class: "UluFacets__facet-checkbox",
          id: i(a),
          type: "checkbox",
          checked: a.selected,
          onChange: (c) => n("facet-change", { groupUid: e.groupUid, facetUid: a.uid, selected: c.target.checked })
        }, null, 40, Lr),
        f("label", {
          class: "UluFacets__facet-label",
          for: i(a)
        }, _(a.label), 9, Hr)
      ], 2))), 128))
    ]));
  }
}, Dr = { class: "UluFacetsFilters" }, Df = {
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
    return (n, i) => (l(), d("div", Dr, [
      (l(!0), d(A, null, $(e.facets, (o) => (l(), y(Ut, {
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
        toggle: v(({ isOpen: r }) => [
          g(n.$slots, "groupToggle", {
            group: o,
            isOpen: r
          }, () => [
            S(_(o.name), 1)
          ])
        ]),
        default: v(() => [
          R(It, {
            children: o.children.slice(0, e.maxVisible),
            groupUid: o.uid,
            classFacet: e.classes.facet,
            onFacetChange: i[0] || (i[0] = (r) => t("facet-change", r))
          }, null, 8, ["children", "groupUid", "classFacet"]),
          o.children.length > e.maxVisible ? (l(), y(Ut, {
            key: 0,
            class: h(["UluFacets__more-facets", e.classes.moreFacets]),
            clickOutsideCloses: !1,
            closeOnEscape: !1,
            transitionHeight: !0
          }, {
            toggle: v(({ isOpen: r }) => [
              S(_(r ? "- Less" : "+ More"), 1)
            ]),
            default: v(() => [
              R(It, {
                children: o.children.slice(e.maxVisible),
                groupUid: o.uid,
                classFacet: e.classes.facet,
                onFacetChange: i[1] || (i[1] = (r) => t("facet-change", r))
              }, null, 8, ["children", "groupUid", "classFacet"])
            ]),
            _: 2
          }, 1032, ["class"])) : p("", !0)
        ]),
        _: 2
      }, 1032, ["class", "classToggle", "classContent", "group", "startOpen"]))), 128))
    ]));
  }
}, Vr = { class: "UluFacetsResults" }, Nr = {
  key: 1,
  class: "UluFacetsResults__empty"
}, Vf = {
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
    return (s, t) => (l(), d("div", Vr, [
      e.items.length ? (l(), y(ls, {
        key: 0,
        tag: e.tag,
        name: e.transitionName,
        class: "UluFacetsResults__list"
      }, {
        default: v(() => [
          (l(!0), d(A, null, $(e.items, (n, i) => (l(), d("li", {
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
      }, 8, ["tag", "name"])) : (l(), d("div", Nr, [
        g(s.$slots, "empty", {}, () => [
          t[0] || (t[0] = f("p", null, "No matching items found.", -1))
        ])
      ]))
    ]));
  }
}, Wr = { class: "UluFacets__keyword-search" }, Xr = ["placeholder"], Nf = {
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
    const o = `facet-view-keyword-${++i}`, r = w({
      get() {
        return t.modelValue;
      },
      set(a) {
        n("update:modelValue", a);
      }
    });
    return (a, c) => (l(), d("div", Wr, [
      f("label", {
        class: h(e.classes.searchLabel),
        for: o
      }, [...c[1] || (c[1] = [
        f("strong", null, "Search", -1)
      ])], 2),
      me(f("input", {
        id: o,
        class: h(e.classes.searchInput),
        "onUpdate:modelValue": c[0] || (c[0] = (u) => r.value = u),
        type: "text",
        placeholder: e.placeholder
      }, null, 10, Xr), [
        [rn, r.value]
      ])
    ]));
  }
}, qr = { class: "UluFacetsSidebarLayout" }, Yr = { class: "UluFacetsSidebarLayout__header" }, Kr = { class: "UluFacetsSidebarLayout__body" }, Gr = { class: "UluFacetsSidebarLayout__sidebar" }, Zr = { class: "UluFacetsSidebarLayout__main" }, Wf = {
  __name: "UluFacetsSidebarLayout",
  setup(e) {
    return (s, t) => (l(), d("div", qr, [
      f("div", Yr, [
        g(s.$slots, "header")
      ]),
      f("div", Kr, [
        f("div", Gr, [
          g(s.$slots, "sidebar")
        ]),
        f("div", Zr, [
          g(s.$slots, "main")
        ])
      ])
    ]));
  }
}, Jr = ["for"], Qr = ["value", "id"], ea = ["value"], Xf = {
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
          r[1] || (r[1] = S("Sort:", -1))
        ])
      ], 10, Jr),
      f("select", {
        value: e.modelValue,
        onChange: r[0] || (r[0] = (a) => n("update:modelValue", a.target.value)),
        id: i.value,
        class: h(e.classes.sortFormSelect)
      }, [
        (l(!0), d(A, null, $(e.sortTypes, (a, c) => (l(), d("option", {
          value: c,
          key: c
        }, _(a.text), 9, ea))), 128))
      ], 42, Qr)
    ], 2));
  }
}, As = Symbol(), Os = Symbol(), De = Symbol(), ta = {
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
      [De]: w(() => this.sections),
      [As]: (e) => {
        const { titleId: s, title: t } = e, { element: n } = e.$refs;
        this.sections.push({
          instance: e,
          titleId: s,
          title: t,
          element: n,
          active: !1
        }), this.update();
      },
      [Os]: (e) => {
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
          const u = this.getSectionIndex(a), m = a.offsetTop, b = s[u], C = u === 0 && i > m, U = u === s.length - 1 && i < m;
          b && this.$nextTick(() => {
            c ? (t(b), b.active = !0) : (C && !n || U && b.active) && t(), this.$emit("section-change", {
              section: b,
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
}, sa = { class: "scroll-anchors" };
function na(e, s, t, n, i, o) {
  return l(), d("div", sa, [
    g(e.$slots, "default")
  ]);
}
const qf = /* @__PURE__ */ k(ta, [["render", na]]), oa = {
  name: "ScrollAnchorsNav",
  inject: {
    sections: { from: De }
  },
  props: {
    element: {
      type: String,
      default: "nav"
    }
  }
}, ia = ["href"];
function ra(e, s, t, n, i, o) {
  return o.sections.length ? (l(), y(B(t.element), {
    key: 0,
    class: "scroll-anchors__nav"
  }, {
    default: v(() => [
      f("ul", null, [
        (l(!0), d(A, null, $(o.sections, (r, a) => (l(), d("li", {
          key: a,
          class: h({ "is-active": r.active })
        }, [
          f("a", {
            class: h({ "is-active": r.active }),
            href: `#${r.titleId}`
          }, _(r.title), 11, ia)
        ], 2))), 128))
      ])
    ]),
    _: 1
  })) : p("", !0);
}
const Yf = /* @__PURE__ */ k(oa, [["render", ra]]);
function Rs(e) {
  requestAnimationFrame(() => {
    const s = new MessageChannel();
    s.port1.onmessage = e, s.port2.postMessage(void 0);
  });
}
const aa = {
  name: "ScrollAnchorsNavAnimated",
  inject: {
    sections: { from: De }
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
      e && !this.indicatorAnimReady && Rs(() => {
        this.indicatorAnimReady = !0;
      });
    }
  },
  methods: {
    addLinkRef(e, s) {
      this.linkRefs[e] = s;
    }
  }
}, la = { class: "scroll-anchors__rail" }, ca = ["href"];
function ua(e, s, t, n, i, o) {
  return o.sections.length ? (l(), y(B(t.element), {
    key: 0,
    class: "scroll-anchors__nav scroll-anchors__nav--animated"
  }, {
    default: v(() => [
      f("ul", la, [
        (l(!0), d(A, null, $(o.sections, (r, a) => (l(), d("li", {
          key: a,
          class: h({ "is-active": r.active })
        }, [
          f("a", {
            class: h({ "is-active": r.active }),
            ref_for: !0,
            ref: (c) => o.addLinkRef(a, c),
            href: `#${r.titleId}`
          }, _(r.title), 11, ca)
        ], 2))), 128))
      ]),
      f("div", {
        class: h(["scroll-anchors__indicator", {
          "scroll-anchors__indicator--can-transition": i.indicatorAnimReady
        }]),
        ref: "indicator",
        style: P({
          opacity: o.indicatorStyles ? "1" : "0",
          transform: `translateY(${o.indicatorStyles.y}px)`,
          height: `${o.indicatorStyles.height}px`
        })
      }, null, 6)
    ]),
    _: 1
  })) : p("", !0);
}
const Kf = /* @__PURE__ */ k(aa, [["render", ua]]), da = {
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
    register: { from: As },
    unregister: { from: Os },
    sections: { from: De, default: () => w(() => []) }
  },
  data() {
    const { anchorId: e, title: s } = this;
    return {
      titleId: e || `sas-title-${Ni(s)}`
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
function fa(e, s, t, n, i, o) {
  return l(), d("div", {
    class: h([t.wrapperClass, { [t.activeClass]: t.activeClass && o.section?.active }]),
    ref: "element"
  }, [
    (l(), y(B(t.titleElement), {
      class: h(t.titleClass),
      id: i.titleId
    }, {
      default: v(() => [
        S(_(t.title), 1)
      ]),
      _: 1
    }, 8, ["class", "id"])),
    g(e.$slots, "default", { section: o.section })
  ], 2);
}
const Gf = /* @__PURE__ */ k(da, [["render", fa]]), ha = {
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
}, Zf = {
  __name: "UluShowSkeleton",
  props: {
    /**
     * If true will show whatever is passed to slot, else skeleton text
     */
    when: Boolean
  },
  setup(e) {
    return (s, t) => e.when ? (l(), y(ha, {
      key: 1,
      inline: ""
    })) : g(s.$slots, "default", { key: 0 });
  }
};
function ma(e, s) {
  return [...Array(e)].map((t, n) => s(n));
}
function Jf(e, s) {
  var t = e.indexOf(s);
  t > -1 && e.splice(t, 1);
}
const Qf = {
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
    const s = e, t = w(() => ma(s.lines, () => {
      const i = Be(70, 100);
      let o = 0;
      const r = () => {
        const u = i - o, m = Be(15, u);
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
      (l(!0), d(A, null, $(t.value, (o, r) => (l(), d("div", { key: r }, [
        (l(!0), d(A, null, $(o, (a) => (l(), d("span", {
          key: a,
          class: h(["skeleton skeleton--text skeleton--inline", { "skeleton--background-alt": a.alt }]),
          style: P({ width: `${a.width}%` })
        }, null, 6))), 128))
      ]))), 128))
    ]));
  }
}, ga = { class: "skeleton skeleton-block--media" }, eh = {
  __name: "UluSkeletonMedia",
  setup(e) {
    return (s, t) => (l(), d("div", ga, [
      R(D, { icon: "type:image" })
    ]));
  }
}, ya = {
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
}, pa = { class: "slideshow" }, _a = {
  class: "slideshow__control-context",
  ref: "context"
}, va = {
  class: "slideshow__track-crop",
  ref: "crop"
}, ba = {
  class: "slideshow__track",
  ref: "track"
}, wa = ["tabindex"], Sa = { class: "slideshow__controls" }, ka = { class: "slideshow__controls-item slideshow__controls-item--previous" }, Ca = ["disabled"], Ta = { class: "slideshow__controls-item slideshow__controls-item--next" }, $a = ["disabled"], Aa = {
  key: 0,
  class: "slideshow__nav",
  ref: "nav"
}, Oa = ["onClick"], Ra = { class: "hidden-visually" };
function xa(e, s, t, n, i, o) {
  const r = E("UluIcon");
  return l(), d("div", pa, [
    f("div", _a, [
      f("div", va, [
        f("ul", ba, [
          (l(!0), d(A, null, $(i.slides, (a, c) => (l(), d("li", {
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
          ], 10, wa))), 128))
        ], 512)
      ], 512),
      f("ul", Sa, [
        f("li", ka, [
          f("button", {
            class: "slideshow__control-button slideshow__control-button--previous",
            "aria-label": "Scroll Right",
            onClick: s[0] || (s[0] = (...a) => o.previous && o.previous(...a)),
            disabled: !o.canScrollLeft
          }, [
            R(r, {
              class: "slideshow__control-icon",
              icon: "type:next"
            })
          ], 8, Ca)
        ]),
        f("li", Ta, [
          f("button", {
            class: "slideshow__control-button slideshow__control-button--next",
            "aria-label": "Scroll Left",
            onClick: s[1] || (s[1] = (...a) => o.next && o.next(...a)),
            disabled: !o.canScrollRight
          }, [
            R(r, {
              class: "slideshow__control-icon",
              icon: "type:previous"
            })
          ], 8, $a)
        ])
      ])
    ], 512),
    t.noNav ? p("", !0) : (l(), d("ul", Aa, [
      (l(!0), d(A, null, $(i.slides, (a, c) => (l(), d("li", {
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
            f("span", Ra, "Item " + _(c + 1), 1)
          ])
        ], 10, Oa)
      ], 2))), 128))
    ], 512))
  ]);
}
const Ua = /* @__PURE__ */ k(ya, [["render", xa]]), ja = {
  name: "ImageSlideShow",
  components: {
    UluSlideShow: Ua
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
}, za = ["src", "alt"], Ea = { class: "slideshow__image-actions" }, Ia = ["src", "alt"];
function Ma(e, s, t, n, i, o) {
  const r = E("AppButton"), a = E("UluSlideShow");
  return l(), y(a, {
    class: "slideshow--images",
    items: t.images,
    onSlideChange: o.slideChange
  }, {
    slide: v(({ item: c }) => [
      f("img", {
        src: c.src,
        alt: c.alt
      }, null, 8, za),
      f("div", Ea, [
        t.selectButton ? (l(), y(r, {
          key: 0,
          class: "type-small",
          icon: "plus",
          small: "",
          iconBefore: ""
        }, {
          default: v(() => [...s[0] || (s[0] = [
            S(" Select ", -1)
          ])]),
          _: 1
        })) : p("", !0)
      ])
    ]),
    nav: v(({ index: c }) => [
      f("img", {
        src: t.images[c].src,
        alt: `View image ${c}`
      }, null, 8, Ia)
    ]),
    _: 1
  }, 8, ["items", "onSlideChange"]);
}
const th = /* @__PURE__ */ k(ja, [["render", Ma]]), Ba = {
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
function Pa(e, s, t, n, i, o) {
  return l(), d("li", {
    class: h(["slideshow__slide", { "is-active": t.active }])
  }, [
    g(e.$slots, "default")
  ], 2);
}
const sh = /* @__PURE__ */ k(Ba, [["render", Pa]]), Fa = {
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
}, La = ["id"], Ha = ["innerHTML"];
function Da(e, s, t, n, i, o) {
  return l(!0), d(A, null, $(t.rows, (r, a) => (l(), d("tr", {
    key: `br-${a}`,
    id: t.optionalAttr(t.isActual && r.id),
    class: h(t.resolveClasses(t.classes.row, { row: r.data, rowIndex: a, isActual: t.isActual, foot: t.foot })),
    style: P({
      height: r.height
    })
  }, [
    (l(!0), d(A, null, $(t.rowColumns, (c, u) => (l(), y(B(c.rowHeader ? "th" : "td"), {
      id: t.optionalAttr(t.isActual && c.rowHeader && c.getRowHeaderId(a)),
      scope: t.optionalAttr(t.isActual && c.rowHeader && "row"),
      key: `bc-${u}`,
      headers: t.optionalAttr(t.isActual && t.getCellHeaders(c, a)),
      class: h(t.resolveClasses(c.class, { column: c, index: u, isActual: t.isActual, row: r, rowIndex: a, foot: t.foot })),
      style: P({
        width: t.columnWidth
      })
    }, {
      default: v(() => [
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
        }, null, 8, Ha)) : (l(), d(A, { key: 2 }, [
          S(_(t.value({ row: r, column: c, rowIndex: a, isActual: t.isActual, foot: t.foot })), 1)
        ], 64))
      ]),
      _: 2
    }, 1032, ["id", "scope", "headers", "class", "style"]))), 128))
  ], 14, La))), 128);
}
const Va = /* @__PURE__ */ k(Fa, [["render", Da]]), Na = {
  name: "UluTableStickyTable",
  components: {
    UluTableStickyRows: Va
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
      o && this.$emit("actual-header-removed", o), this.$emit("actual-header-added", s), t[i] = s;
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
}, Wa = ["aria-hidden"], Xa = {
  key: 0,
  class: "table-sticky__caption"
}, qa = ["id"], Ya = ["id", "rowspan", "colspan", "data-child-columns", "aria-sort", "scope", "headers"], Ka = ["innerHTML"], Ga = {
  class: "table-sticky__sort-icon",
  "aria-hidden": "true"
}, Za = { class: "table-sticky__sort-icon-inner" }, Ja = ["innerHTML"], Qa = { key: 1 }, el = { key: 2 };
function tl(e, s, t, n, i, o) {
  const r = E("UluTableStickyRows");
  return l(), d("table", {
    class: h(t.resolveClasses(t.classes.table, { isActual: t.isActual })),
    "aria-hidden": t.isActual ? "false" : "true"
  }, [
    t.caption ? (l(), d("caption", Xa, _(t.caption), 1)) : p("", !0),
    f("thead", null, [
      (l(!0), d(A, null, $(t.headerRows, (a, c) => (l(), d("tr", {
        key: `hr-${c}`,
        id: o.optionalAttr(t.isActual && a.id),
        class: h(t.resolveClasses(t.classes.rowHeader, { row: a, rowIndex: c, isActual: t.isActual })),
        style: P({
          height: a.height
        })
      }, [
        (l(!0), d(A, null, $(a.columns, (u, m) => (l(), d("th", {
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
          style: P({
            width: u.width
          }),
          "aria-sort": u.sort ? u.sortAscending ? "ascending" : "descending" : null,
          scope: o.optionalAttr(t.isActual && (u.colspan > 1 ? "colgroup" : "col")),
          headers: o.optionalAttr(t.isActual && o.getHeaderHeaders(u, c)),
          ref_for: !0,
          ref: (b) => o.addHeaderRef(u, b)
        }, [
          u.sortable ? (l(), y(B(t.isActual ? "button" : "div"), {
            key: 0,
            class: h(["table-sticky__sort-button", {
              "table-sticky__sort-button--focused": u.sortFocused
            }]),
            onClick: (b) => e.$emit("column-sorted", u),
            onFocus: (b) => o.handleSortFocus(u, !0),
            onBlur: (b) => o.handleSortFocus(u, !1),
            "aria-pressed": u.sortApplied ? "true" : "false"
          }, {
            default: v(() => [
              e.$slots[u.slotHeader] ? g(e.$slots, u.slotHeader, {
                key: 0,
                isActual: t.isActual,
                column: u,
                index: m
              }) : u.htmlTitle ? (l(), d("div", {
                key: 1,
                innerHTML: t.getColumnTitle({ column: u, index: m, isActual: t.isActual })
              }, null, 8, Ka)) : (l(), d(A, { key: 2 }, [
                S(_(t.getColumnTitle({ column: u, index: m, isActual: t.isActual })), 1)
              ], 64)),
              f("span", Ga, [
                f("span", Za, [
                  g(e.$slots, "sortIcon", {}, () => [
                    s[0] || (s[0] = S("▼", -1))
                  ])
                ])
              ])
            ]),
            _: 2
          }, 1064, ["class", "onClick", "onFocus", "onBlur", "aria-pressed"])) : (l(), d(A, { key: 1 }, [
            e.$slots[u.slotHeader] ? g(e.$slots, u.slotHeader, {
              key: 0,
              isActual: t.isActual,
              column: u,
              index: m
            }) : u.htmlTitle ? (l(), d("div", {
              key: 1,
              innerHTML: t.getColumnTitle({ column: u, index: m, isActual: t.isActual })
            }, null, 8, Ja)) : (l(), d(A, { key: 2 }, [
              S(_(t.getColumnTitle({ column: u, index: m, isActual: t.isActual })), 1)
            ], 64))
          ], 64))
        ], 14, Ya))), 128))
      ], 14, qa))), 128))
    ]),
    t.rows ? (l(), d("tbody", Qa, [
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
        $(e.$slots, (a, c) => ({
          name: c,
          fn: v((u) => [
            g(e.$slots, c, X(q(u)))
          ])
        }))
      ]), 1032, ["rows", "rowColumns", "optionalAttr", "resolveClasses", "getCellHeaders", "isActual", "columnWidth", "classes", "value"])
    ])) : p("", !0),
    t.footerRows ? (l(), d("tfoot", el, [
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
        $(e.$slots, (a, c) => ({
          name: c,
          fn: v((u) => [
            g(e.$slots, c, X(q(u)))
          ])
        }))
      ]), 1032, ["rows", "rowColumns", "optionalAttr", "resolveClasses", "getCellHeaders", "isActual", "columnWidth", "classes", "value"])
    ])) : p("", !0)
  ], 10, Wa);
}
const sl = /* @__PURE__ */ k(Na, [["render", tl]]);
function nl() {
  this.__data__ = [], this.size = 0;
}
function xs(e, s) {
  return e === s || e !== e && s !== s;
}
function Ve(e, s) {
  for (var t = e.length; t--; )
    if (xs(e[t][0], s))
      return t;
  return -1;
}
var ol = Array.prototype, il = ol.splice;
function rl(e) {
  var s = this.__data__, t = Ve(s, e);
  if (t < 0)
    return !1;
  var n = s.length - 1;
  return t == n ? s.pop() : il.call(s, t, 1), --this.size, !0;
}
function al(e) {
  var s = this.__data__, t = Ve(s, e);
  return t < 0 ? void 0 : s[t][1];
}
function ll(e) {
  return Ve(this.__data__, e) > -1;
}
function cl(e, s) {
  var t = this.__data__, n = Ve(t, e);
  return n < 0 ? (++this.size, t.push([e, s])) : t[n][1] = s, this;
}
function Z(e) {
  var s = -1, t = e == null ? 0 : e.length;
  for (this.clear(); ++s < t; ) {
    var n = e[s];
    this.set(n[0], n[1]);
  }
}
Z.prototype.clear = nl;
Z.prototype.delete = rl;
Z.prototype.get = al;
Z.prototype.has = ll;
Z.prototype.set = cl;
function ul() {
  this.__data__ = new Z(), this.size = 0;
}
function dl(e) {
  var s = this.__data__, t = s.delete(e);
  return this.size = s.size, t;
}
function fl(e) {
  return this.__data__.get(e);
}
function hl(e) {
  return this.__data__.has(e);
}
var Us = typeof global == "object" && global && global.Object === Object && global, ml = typeof self == "object" && self && self.Object === Object && self, Y = Us || ml || Function("return this")(), fe = Y.Symbol, js = Object.prototype, gl = js.hasOwnProperty, yl = js.toString, be = fe ? fe.toStringTag : void 0;
function pl(e) {
  var s = gl.call(e, be), t = e[be];
  try {
    e[be] = void 0;
    var n = !0;
  } catch {
  }
  var i = yl.call(e);
  return n && (s ? e[be] = t : delete e[be]), i;
}
var _l = Object.prototype, vl = _l.toString;
function bl(e) {
  return vl.call(e);
}
var wl = "[object Null]", Sl = "[object Undefined]", Mt = fe ? fe.toStringTag : void 0;
function Ae(e) {
  return e == null ? e === void 0 ? Sl : wl : Mt && Mt in Object(e) ? pl(e) : bl(e);
}
function Ne(e) {
  var s = typeof e;
  return e != null && (s == "object" || s == "function");
}
var kl = "[object AsyncFunction]", Cl = "[object Function]", Tl = "[object GeneratorFunction]", $l = "[object Proxy]";
function zs(e) {
  if (!Ne(e))
    return !1;
  var s = Ae(e);
  return s == Cl || s == Tl || s == kl || s == $l;
}
var Ke = Y["__core-js_shared__"], Bt = function() {
  var e = /[^.]+$/.exec(Ke && Ke.keys && Ke.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function Al(e) {
  return !!Bt && Bt in e;
}
var Ol = Function.prototype, Rl = Ol.toString;
function re(e) {
  if (e != null) {
    try {
      return Rl.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var xl = /[\\^$.*+?()[\]{}|]/g, Ul = /^\[object .+?Constructor\]$/, jl = Function.prototype, zl = Object.prototype, El = jl.toString, Il = zl.hasOwnProperty, Ml = RegExp(
  "^" + El.call(Il).replace(xl, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Bl(e) {
  if (!Ne(e) || Al(e))
    return !1;
  var s = zs(e) ? Ml : Ul;
  return s.test(re(e));
}
function Pl(e, s) {
  return e?.[s];
}
function ae(e, s) {
  var t = Pl(e, s);
  return Bl(t) ? t : void 0;
}
var Te = ae(Y, "Map"), $e = ae(Object, "create");
function Fl() {
  this.__data__ = $e ? $e(null) : {}, this.size = 0;
}
function Ll(e) {
  var s = this.has(e) && delete this.__data__[e];
  return this.size -= s ? 1 : 0, s;
}
var Hl = "__lodash_hash_undefined__", Dl = Object.prototype, Vl = Dl.hasOwnProperty;
function Nl(e) {
  var s = this.__data__;
  if ($e) {
    var t = s[e];
    return t === Hl ? void 0 : t;
  }
  return Vl.call(s, e) ? s[e] : void 0;
}
var Wl = Object.prototype, Xl = Wl.hasOwnProperty;
function ql(e) {
  var s = this.__data__;
  return $e ? s[e] !== void 0 : Xl.call(s, e);
}
var Yl = "__lodash_hash_undefined__";
function Kl(e, s) {
  var t = this.__data__;
  return this.size += this.has(e) ? 0 : 1, t[e] = $e && s === void 0 ? Yl : s, this;
}
function ie(e) {
  var s = -1, t = e == null ? 0 : e.length;
  for (this.clear(); ++s < t; ) {
    var n = e[s];
    this.set(n[0], n[1]);
  }
}
ie.prototype.clear = Fl;
ie.prototype.delete = Ll;
ie.prototype.get = Nl;
ie.prototype.has = ql;
ie.prototype.set = Kl;
function Gl() {
  this.size = 0, this.__data__ = {
    hash: new ie(),
    map: new (Te || Z)(),
    string: new ie()
  };
}
function Zl(e) {
  var s = typeof e;
  return s == "string" || s == "number" || s == "symbol" || s == "boolean" ? e !== "__proto__" : e === null;
}
function We(e, s) {
  var t = e.__data__;
  return Zl(s) ? t[typeof s == "string" ? "string" : "hash"] : t.map;
}
function Jl(e) {
  var s = We(this, e).delete(e);
  return this.size -= s ? 1 : 0, s;
}
function Ql(e) {
  return We(this, e).get(e);
}
function ec(e) {
  return We(this, e).has(e);
}
function tc(e, s) {
  var t = We(this, e), n = t.size;
  return t.set(e, s), this.size += t.size == n ? 0 : 1, this;
}
function ge(e) {
  var s = -1, t = e == null ? 0 : e.length;
  for (this.clear(); ++s < t; ) {
    var n = e[s];
    this.set(n[0], n[1]);
  }
}
ge.prototype.clear = Gl;
ge.prototype.delete = Jl;
ge.prototype.get = Ql;
ge.prototype.has = ec;
ge.prototype.set = tc;
var sc = 200;
function nc(e, s) {
  var t = this.__data__;
  if (t instanceof Z) {
    var n = t.__data__;
    if (!Te || n.length < sc - 1)
      return n.push([e, s]), this.size = ++t.size, this;
    t = this.__data__ = new ge(n);
  }
  return t.set(e, s), this.size = t.size, this;
}
function ye(e) {
  var s = this.__data__ = new Z(e);
  this.size = s.size;
}
ye.prototype.clear = ul;
ye.prototype.delete = dl;
ye.prototype.get = fl;
ye.prototype.has = hl;
ye.prototype.set = nc;
function oc(e, s) {
  for (var t = -1, n = e == null ? 0 : e.length; ++t < n && s(e[t], t, e) !== !1; )
    ;
  return e;
}
var Pt = function() {
  try {
    var e = ae(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}();
function ic(e, s, t) {
  s == "__proto__" && Pt ? Pt(e, s, {
    configurable: !0,
    enumerable: !0,
    value: t,
    writable: !0
  }) : e[s] = t;
}
var rc = Object.prototype, ac = rc.hasOwnProperty;
function lc(e, s, t) {
  var n = e[s];
  (!(ac.call(e, s) && xs(n, t)) || t === void 0 && !(s in e)) && ic(e, s, t);
}
function cc(e, s) {
  for (var t = -1, n = Array(e); ++t < e; )
    n[t] = s(t);
  return n;
}
function Oe(e) {
  return e != null && typeof e == "object";
}
var uc = "[object Arguments]";
function Ft(e) {
  return Oe(e) && Ae(e) == uc;
}
var Es = Object.prototype, dc = Es.hasOwnProperty, fc = Es.propertyIsEnumerable, hc = Ft(/* @__PURE__ */ function() {
  return arguments;
}()) ? Ft : function(e) {
  return Oe(e) && dc.call(e, "callee") && !fc.call(e, "callee");
}, bt = Array.isArray;
function mc() {
  return !1;
}
var Is = typeof exports == "object" && exports && !exports.nodeType && exports, Lt = Is && typeof module == "object" && module && !module.nodeType && module, gc = Lt && Lt.exports === Is, Ht = gc ? Y.Buffer : void 0, yc = Ht ? Ht.isBuffer : void 0, Ms = yc || mc, pc = 9007199254740991, _c = /^(?:0|[1-9]\d*)$/;
function vc(e, s) {
  var t = typeof e;
  return s = s ?? pc, !!s && (t == "number" || t != "symbol" && _c.test(e)) && e > -1 && e % 1 == 0 && e < s;
}
var bc = 9007199254740991;
function Bs(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= bc;
}
var wc = "[object Arguments]", Sc = "[object Array]", kc = "[object Boolean]", Cc = "[object Date]", Tc = "[object Error]", $c = "[object Function]", Ac = "[object Map]", Oc = "[object Number]", Rc = "[object Object]", xc = "[object RegExp]", Uc = "[object Set]", jc = "[object String]", zc = "[object WeakMap]", Ec = "[object ArrayBuffer]", Ic = "[object DataView]", Mc = "[object Float32Array]", Bc = "[object Float64Array]", Pc = "[object Int8Array]", Fc = "[object Int16Array]", Lc = "[object Int32Array]", Hc = "[object Uint8Array]", Dc = "[object Uint8ClampedArray]", Vc = "[object Uint16Array]", Nc = "[object Uint32Array]", z = {};
z[Mc] = z[Bc] = z[Pc] = z[Fc] = z[Lc] = z[Hc] = z[Dc] = z[Vc] = z[Nc] = !0;
z[wc] = z[Sc] = z[Ec] = z[kc] = z[Ic] = z[Cc] = z[Tc] = z[$c] = z[Ac] = z[Oc] = z[Rc] = z[xc] = z[Uc] = z[jc] = z[zc] = !1;
function Wc(e) {
  return Oe(e) && Bs(e.length) && !!z[Ae(e)];
}
function wt(e) {
  return function(s) {
    return e(s);
  };
}
var Ps = typeof exports == "object" && exports && !exports.nodeType && exports, Ce = Ps && typeof module == "object" && module && !module.nodeType && module, Xc = Ce && Ce.exports === Ps, Ge = Xc && Us.process, he = function() {
  try {
    var e = Ce && Ce.require && Ce.require("util").types;
    return e || Ge && Ge.binding && Ge.binding("util");
  } catch {
  }
}(), Dt = he && he.isTypedArray, qc = Dt ? wt(Dt) : Wc, Yc = Object.prototype, Kc = Yc.hasOwnProperty;
function Gc(e, s) {
  var t = bt(e), n = !t && hc(e), i = !t && !n && Ms(e), o = !t && !n && !i && qc(e), r = t || n || i || o, a = r ? cc(e.length, String) : [], c = a.length;
  for (var u in e)
    Kc.call(e, u) && !(r && // Safari 9 has enumerable `arguments.length` in strict mode.
    (u == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    i && (u == "offset" || u == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    o && (u == "buffer" || u == "byteLength" || u == "byteOffset") || // Skip index properties.
    vc(u, c))) && a.push(u);
  return a;
}
var Zc = Object.prototype;
function Fs(e) {
  var s = e && e.constructor, t = typeof s == "function" && s.prototype || Zc;
  return e === t;
}
function Ls(e, s) {
  return function(t) {
    return e(s(t));
  };
}
var Jc = Ls(Object.keys, Object), Qc = Object.prototype, eu = Qc.hasOwnProperty;
function tu(e) {
  if (!Fs(e))
    return Jc(e);
  var s = [];
  for (var t in Object(e))
    eu.call(e, t) && t != "constructor" && s.push(t);
  return s;
}
function su(e) {
  return e != null && Bs(e.length) && !zs(e);
}
function nu(e) {
  return su(e) ? Gc(e) : tu(e);
}
var Hs = typeof exports == "object" && exports && !exports.nodeType && exports, Vt = Hs && typeof module == "object" && module && !module.nodeType && module, ou = Vt && Vt.exports === Hs, Nt = ou ? Y.Buffer : void 0;
Nt && Nt.allocUnsafe;
function iu(e, s) {
  return e.slice();
}
function ru(e, s) {
  for (var t = -1, n = e == null ? 0 : e.length, i = 0, o = []; ++t < n; ) {
    var r = e[t];
    s(r, t, e) && (o[i++] = r);
  }
  return o;
}
function au() {
  return [];
}
var lu = Object.prototype, cu = lu.propertyIsEnumerable, Wt = Object.getOwnPropertySymbols, uu = Wt ? function(e) {
  return e == null ? [] : (e = Object(e), ru(Wt(e), function(s) {
    return cu.call(e, s);
  }));
} : au;
function du(e, s) {
  for (var t = -1, n = s.length, i = e.length; ++t < n; )
    e[i + t] = s[t];
  return e;
}
var fu = Ls(Object.getPrototypeOf, Object);
function hu(e, s, t) {
  var n = s(e);
  return bt(e) ? n : du(n, t(e));
}
function mu(e) {
  return hu(e, nu, uu);
}
var st = ae(Y, "DataView"), nt = ae(Y, "Promise"), ot = ae(Y, "Set"), it = ae(Y, "WeakMap"), Xt = "[object Map]", gu = "[object Object]", qt = "[object Promise]", Yt = "[object Set]", Kt = "[object WeakMap]", Gt = "[object DataView]", yu = re(st), pu = re(Te), _u = re(nt), vu = re(ot), bu = re(it), K = Ae;
(st && K(new st(new ArrayBuffer(1))) != Gt || Te && K(new Te()) != Xt || nt && K(nt.resolve()) != qt || ot && K(new ot()) != Yt || it && K(new it()) != Kt) && (K = function(e) {
  var s = Ae(e), t = s == gu ? e.constructor : void 0, n = t ? re(t) : "";
  if (n)
    switch (n) {
      case yu:
        return Gt;
      case pu:
        return Xt;
      case _u:
        return qt;
      case vu:
        return Yt;
      case bu:
        return Kt;
    }
  return s;
});
var wu = Object.prototype, Su = wu.hasOwnProperty;
function ku(e) {
  var s = e.length, t = new e.constructor(s);
  return s && typeof e[0] == "string" && Su.call(e, "index") && (t.index = e.index, t.input = e.input), t;
}
var Zt = Y.Uint8Array;
function St(e) {
  var s = new e.constructor(e.byteLength);
  return new Zt(s).set(new Zt(e)), s;
}
function Cu(e, s) {
  var t = St(e.buffer);
  return new e.constructor(t, e.byteOffset, e.byteLength);
}
var Tu = /\w*$/;
function $u(e) {
  var s = new e.constructor(e.source, Tu.exec(e));
  return s.lastIndex = e.lastIndex, s;
}
var Jt = fe ? fe.prototype : void 0, Qt = Jt ? Jt.valueOf : void 0;
function Au(e) {
  return Qt ? Object(Qt.call(e)) : {};
}
function Ou(e, s) {
  var t = St(e.buffer);
  return new e.constructor(t, e.byteOffset, e.length);
}
var Ru = "[object Boolean]", xu = "[object Date]", Uu = "[object Map]", ju = "[object Number]", zu = "[object RegExp]", Eu = "[object Set]", Iu = "[object String]", Mu = "[object Symbol]", Bu = "[object ArrayBuffer]", Pu = "[object DataView]", Fu = "[object Float32Array]", Lu = "[object Float64Array]", Hu = "[object Int8Array]", Du = "[object Int16Array]", Vu = "[object Int32Array]", Nu = "[object Uint8Array]", Wu = "[object Uint8ClampedArray]", Xu = "[object Uint16Array]", qu = "[object Uint32Array]";
function Yu(e, s, t) {
  var n = e.constructor;
  switch (s) {
    case Bu:
      return St(e);
    case Ru:
    case xu:
      return new n(+e);
    case Pu:
      return Cu(e);
    case Fu:
    case Lu:
    case Hu:
    case Du:
    case Vu:
    case Nu:
    case Wu:
    case Xu:
    case qu:
      return Ou(e);
    case Uu:
      return new n();
    case ju:
    case Iu:
      return new n(e);
    case zu:
      return $u(e);
    case Eu:
      return new n();
    case Mu:
      return Au(e);
  }
}
var es = Object.create, Ku = /* @__PURE__ */ function() {
  function e() {
  }
  return function(s) {
    if (!Ne(s))
      return {};
    if (es)
      return es(s);
    e.prototype = s;
    var t = new e();
    return e.prototype = void 0, t;
  };
}();
function Gu(e) {
  return typeof e.constructor == "function" && !Fs(e) ? Ku(fu(e)) : {};
}
var Zu = "[object Map]";
function Ju(e) {
  return Oe(e) && K(e) == Zu;
}
var ts = he && he.isMap, Qu = ts ? wt(ts) : Ju, ed = "[object Set]";
function td(e) {
  return Oe(e) && K(e) == ed;
}
var ss = he && he.isSet, sd = ss ? wt(ss) : td, Ds = "[object Arguments]", nd = "[object Array]", od = "[object Boolean]", id = "[object Date]", rd = "[object Error]", Vs = "[object Function]", ad = "[object GeneratorFunction]", ld = "[object Map]", cd = "[object Number]", Ns = "[object Object]", ud = "[object RegExp]", dd = "[object Set]", fd = "[object String]", hd = "[object Symbol]", md = "[object WeakMap]", gd = "[object ArrayBuffer]", yd = "[object DataView]", pd = "[object Float32Array]", _d = "[object Float64Array]", vd = "[object Int8Array]", bd = "[object Int16Array]", wd = "[object Int32Array]", Sd = "[object Uint8Array]", kd = "[object Uint8ClampedArray]", Cd = "[object Uint16Array]", Td = "[object Uint32Array]", x = {};
x[Ds] = x[nd] = x[gd] = x[yd] = x[od] = x[id] = x[pd] = x[_d] = x[vd] = x[bd] = x[wd] = x[ld] = x[cd] = x[Ns] = x[ud] = x[dd] = x[fd] = x[hd] = x[Sd] = x[kd] = x[Cd] = x[Td] = !0;
x[rd] = x[Vs] = x[md] = !1;
function Ie(e, s, t, n, i, o) {
  var r;
  if (r !== void 0)
    return r;
  if (!Ne(e))
    return e;
  var a = bt(e);
  if (a)
    r = ku(e);
  else {
    var c = K(e), u = c == Vs || c == ad;
    if (Ms(e))
      return iu(e);
    if (c == Ns || c == Ds || u && !i)
      r = u ? {} : Gu(e);
    else {
      if (!x[c])
        return i ? e : {};
      r = Yu(e, c);
    }
  }
  o || (o = new ye());
  var m = o.get(e);
  if (m)
    return m;
  o.set(e, r), sd(e) ? e.forEach(function(U) {
    r.add(Ie(U, s, t, U, e, o));
  }) : Qu(e) && e.forEach(function(U, I) {
    r.set(I, Ie(U, s, t, I, e, o));
  });
  var b = mu, C = a ? void 0 : b(e);
  return oc(C || e, function(U, I) {
    C && (I = U, U = e[I]), lc(r, I, Ie(U, s, t, I, e, o));
  }), r;
}
var $d = 1, Ad = 4;
function Od(e) {
  return Ie(e, $d | Ad);
}
const Ze = (e) => e.every((s) => typeof s == "object"), ns = !0, Ws = () => window.innerWidth;
let os = Ws();
const Rd = {
  name: "UluTableSticky",
  components: {
    UluTableStickyTable: sl
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
      required: ns
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
      validator: Ze,
      required: ns
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
      validator: Ze
      // required
    },
    /**
     * Array of rows for footer (tfoot)
     */
    footerRows: {
      type: Array,
      validator: Ze
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
      resizeHandler: Fe(this.onResize.bind(this), 500, !0),
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
      const e = this.idCreator("c"), s = Od(this.columns), t = (n, i) => {
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
      const e = Ws();
      os !== e && (os = e, this.resizing ? (this.resizing = !1, this.setTableSizes(), this.checkOverflowX(), this.syncScrollLeft()) : (this.resizing = !0, this.removeTableSizes()));
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
        this.sizesCalculated = !0, Rs(() => {
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
}, xd = { class: "table-sticky__sticky-wrap table-sticky__sticky-wrap--header" }, Ud = { class: "table-sticky__header-wrap" }, jd = { class: "table-sticky__sticky-wrap table-sticky__sticky-wrap--first-column-header" }, zd = { class: "table-sticky__sticky-wrap table-sticky__sticky-wrap--controls" }, Ed = {
  key: 2,
  class: "table-sticky__controls-inner"
}, Id = ["disabled"], Md = ["disabled"], Bd = {
  ref: "display",
  class: "table-sticky__display"
};
function Pd(e, s, t, n, i, o) {
  const r = E("UluTableStickyTable");
  return l(), d("div", {
    class: h(["table-sticky", {
      "table-sticky--overflown-x": i.overflownX,
      "table-sticky--can-scroll-right": i.canScrollRight,
      "table-sticky--can-scroll-left": i.canScrollLeft
    }])
  }, [
    f("div", xd, [
      f("div", Ud, [
        R(r, {
          ref: "header",
          class: "table-sticky__table table-sticky__table--header",
          classes: t.classes,
          caption: t.caption,
          resolveClasses: o.resolveClasses,
          getColumnTitle: t.getColumnTitle,
          idPrefix: t.idPrefix,
          headerRows: i.headerRows,
          style: P({
            opacity: i.sizesCalculated ? "1" : "0",
            pointerEvents: i.sizesCalculated ? "auto" : "none",
            width: i.tableWidth
          }),
          onColumnSorted: o.applySort
        }, ue({ _: 2 }, [
          $(e.$slots, (a, c) => ({
            name: c,
            fn: v((u) => [
              g(e.$slots, c, X(q(u)))
            ])
          }))
        ]), 1032, ["classes", "caption", "resolveClasses", "getColumnTitle", "idPrefix", "headerRows", "style", "onColumnSorted"])
      ])
    ]),
    f("div", jd, [
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
        style: P({
          opacity: o.headerOpacityX,
          pointerEvents: o.headerVisibleX ? "auto" : "none"
        }),
        onColumnSorted: o.applySort
      }, ue({ _: 2 }, [
        $(e.$slots, (a, c) => ({
          name: c,
          fn: v((u) => [
            g(e.$slots, c, X(q(u)))
          ])
        }))
      ]), 1032, ["classes", "caption", "resolveClasses", "getColumnTitle", "idPrefix", "headerRows", "style", "onColumnSorted"])) : p("", !0)
    ]),
    f("div", zd, [
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
        }) : t.controlsComponent ? (l(), y(B(t.controlsComponent), {
          key: 1,
          scrollLeft: o.scrollLeft,
          scrollRight: o.scrollRight,
          canScrollLeft: i.canScrollLeft,
          canScrollRight: i.canScrollRight
        }, null, 8, ["scrollLeft", "scrollRight", "canScrollLeft", "canScrollRight"])) : (l(), d("div", Ed, [
          f("button", {
            class: h(["table-sticky__control table-sticky__control--left", o.resolveClasses(t.classes.controlButton)]),
            "aria-label": "Scroll Left",
            onClick: s[0] || (s[0] = (...a) => o.scrollLeft && o.scrollLeft(...a)),
            disabled: !i.canScrollLeft
          }, [
            g(e.$slots, "controlLeft", {}, () => [
              s[2] || (s[2] = S(" ← ", -1))
            ])
          ], 10, Id),
          f("button", {
            class: h(["table-sticky__control table-sticky__control--right", o.resolveClasses(t.classes.controlButton)]),
            "aria-label": "Scroll Right",
            onClick: s[1] || (s[1] = (...a) => o.scrollRight && o.scrollRight(...a)),
            disabled: !i.canScrollRight
          }, [
            g(e.$slots, "controlRight", {}, () => [
              s[3] || (s[3] = S(" → ", -1))
            ])
          ], 10, Md)
        ]))
      ], 2), [
        [cs, o.controlsShown]
      ])
    ]),
    f("div", Bd, [
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
        $(e.$slots, (a, c) => ({
          name: c,
          fn: v((u) => [
            g(e.$slots, c, X(q(u)))
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
      style: P({
        opacity: o.headerOpacityX,
        pointerEvents: o.headerVisibleX ? "auto" : "none"
      }),
      onColumnSorted: o.applySort
    }, ue({ _: 2 }, [
      $(e.$slots, (a, c) => ({
        name: c,
        fn: v((u) => [
          g(e.$slots, c, X(q(u)))
        ])
      }))
    ]), 1032, ["classes", "resolveClasses", "caption", "headerRows", "columnWidth", "rows", "footerRows", "rowColumns", "idPrefix", "getRowValue", "getColumnTitle", "style", "onColumnSorted"])) : p("", !0)
  ], 2);
}
const nh = /* @__PURE__ */ k(Rd, [["render", Pd]]);
function Fd(e) {
  if (e) {
    if (e instanceof HTMLElement)
      return e;
    if (typeof e == "object" && "$el" in e)
      return e.$el;
  }
}
const Ld = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  refToElement: Fd
}, Symbol.toStringTag, { value: "Module" })), oh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  dom: Ld,
  router: Do
}, Symbol.toStringTag, { value: "Module" }));
export {
  Mf as $,
  gf as A,
  D as B,
  yf as C,
  pf as D,
  _f as E,
  Ss as F,
  vf as G,
  bf as H,
  wf as I,
  Sf as J,
  kf as K,
  Cf as L,
  Tf as M,
  $f as N,
  Af as O,
  Of as P,
  Rf as Q,
  ks as R,
  Co as S,
  xf as T,
  Ut as U,
  Uf as V,
  jf as W,
  zf as X,
  Ef as Y,
  If as Z,
  Jd as _,
  je as a,
  Bf as a0,
  Pf as a1,
  Ff as a2,
  Lf as a3,
  Hf as a4,
  Df as a5,
  Vf as a6,
  Nf as a7,
  Wf as a8,
  Xf as a9,
  It as aa,
  qf as ab,
  Yf as ac,
  Kf as ad,
  Gf as ae,
  Zf as af,
  Qf as ag,
  eh as ah,
  ha as ai,
  th as aj,
  Ua as ak,
  sh as al,
  nh as am,
  Va as an,
  sl as ao,
  Pn as ap,
  se as aq,
  Oo as ar,
  xo as as,
  fo as at,
  ef as au,
  tf as av,
  qd as b,
  Yd as c,
  Kd as d,
  Gd as e,
  Zd as f,
  Dn as g,
  Qd as h,
  oh as i,
  Qn as j,
  sf as k,
  ce as l,
  nf as m,
  of as n,
  rf as o,
  af as p,
  lf as q,
  Jf as r,
  cf as s,
  si as t,
  uf as u,
  Yo as v,
  df as w,
  ff as x,
  hf as y,
  mf as z
};
