import { reactive as ut, ref as E, computed as S, resolveDirective as ls, createElementBlock as d, openBlock as a, Fragment as O, withDirectives as ie, createElementVNode as h, unref as C, normalizeClass as m, renderSlot as g, withKeys as as, normalizeStyle as L, createCommentVNode as v, nextTick as cs, toRef as Ks, toDisplayString as y, createBlock as p, Teleport as Le, resolveDynamicComponent as B, mergeProps as Z, inject as He, watchEffect as dt, defineAsyncComponent as Gs, markRaw as fe, toRefs as Zs, toValue as Ie, resolveComponent as z, withModifiers as Js, createVNode as R, useSlots as Qs, renderList as A, TransitionGroup as us, withCtx as w, createTextVNode as k, vShow as Me, watch as ds, isRef as en, hasInjectionContext as tn, getCurrentInstance as sn, onBeforeUnmount as nn, onDeactivated as on, onActivated as rn, onUnmounted as fs, onMounted as ln, normalizeProps as q, guardReactiveProps as Y, vModelText as an, createSlots as de } from "vue";
import { inline as hs, offset as ms, flip as gs, shift as ys, arrow as ps, useFloating as vs, autoUpdate as _s } from "@floating-ui/vue";
import { Disclosure as cn, DisclosureButton as un, DisclosurePanel as dn, Tab as fn, TabGroup as hn, TabList as mn, TabPanel as gn, TabPanels as yn } from "@headlessui/vue";
import { useRoute as bs, useRouter as pn, RouterLink as Fe } from "vue-router";
import vn from "gsap";
import _n from "fuse.js";
const $t = {
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
function Jd(e, s = {}) {
  const t = ut({ ...$t }), { iconsByType: n, ...i } = s || {};
  i && Object.assign(t, i);
  const o = {
    // Methods to interact with settings
    getSettings() {
      return t;
    },
    getDefaultSettings() {
      return { ...$t };
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
    updateSetting(r, l) {
      if (typeof r != "string")
        throw new Error("Expected key to be string");
      t[r] = l;
    },
    getIcon(r) {
      const l = t.iconsByType;
      if (!l[r])
        throw new Error(`Icon type "${r}" not found!`);
      return l[r];
    },
    setIcon(r, l) {
      t.iconsByType[r] = l;
    }
  };
  if (n)
    for (const [r, l] of Object.entries(n))
      o.setIcon(r, l);
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
}, ft = E(!1), ht = E(null);
function bn(e = {}) {
  return Object.assign(oe.popover, e.popover), Object.assign(oe.tooltip, e.tooltip), Object.assign(oe.plugin, e.plugin), oe;
}
function wn(e) {
  return Object.assign({}, oe.tooltip, e);
}
function Sn(e) {
  ft.value = !0, ht.value = e;
}
function kn() {
  ft.value = !1, ht.value = null;
}
const Ee = /* @__PURE__ */ new WeakMap(), Cn = {
  mounted(e, s) {
    At(e, s);
  },
  beforeUpdate(e) {
    Ot(e);
  },
  updated(e, s) {
    At(e, s);
  },
  umounted(e) {
    Ot(e);
  }
};
function At(e, s) {
  const t = Tn(e, s);
  if (!t) return;
  let n = null;
  const i = () => {
    n || (n = setTimeout(() => {
      Sn(t), clearTimeout(n);
    }, t.delay));
  }, o = () => {
    n && (clearTimeout(n), n = null), kn();
  };
  t.showEvents.forEach((r) => {
    e.addEventListener(r, i);
  }), t.hideEvents.forEach((r) => {
    e.addEventListener(r, o);
  }), Ee.set(e, { onShow: i, onHide: o, config: t });
}
function Ot(e) {
  if (!Ee.has(e))
    return;
  const { config: s, onShow: t, onHide: n } = Ee.get(e);
  s.showEvents.forEach((i) => {
    e.removeEventListener(i, t);
  }), s.hideEvents.forEach((i) => {
    e.removeEventListener(i, n);
  }), Ee.delete(e);
}
function Tn(e, s) {
  const { value: t } = s;
  let n;
  if (!(t === !1 || t === null))
    return typeof t == "object" ? n = t : n = { content: t }, wn(Object.assign({}, { trigger: e }, n));
}
let $n = 0;
function xt() {
  return `ulu-popovers-uid-${++$n}`;
}
const An = ["id", "disabled", "aria-expanded", "aria-controls", "aria-label"], On = ["aria-labelledby", "id", "data-placement"], xn = { class: "popover__inner" }, Rn = {
  key: 0,
  class: "popover__footer"
}, Ve = {
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
    const t = s, n = e, i = xt(), o = xt(), r = Object.assign({}, oe.popover, n.config), l = E(n.startOpen || !1), c = E(null), u = E(null), f = E(null), _ = [
      ...r.inline ? [hs()] : [],
      ...r.offset ? [ms(r.offset)] : [],
      gs(),
      ys(),
      ...r.arrow ? [ps({ element: f })] : []
    ], b = {
      placement: r.placement,
      whileElementsMounted: _s,
      middleware: _
    }, {
      floatingStyles: x,
      placement: M,
      middlewareData: F,
      update: U,
      isPositioned: Q
    } = vs(c, u, b), Ae = S(() => {
      const D = F.value?.arrow;
      return D ? {
        position: "absolute",
        left: D?.x != null ? `${D.x}px` : "",
        top: D?.y != null ? `${D.y}px` : ""
      } : null;
    });
    r.onReady && r.onReady({ update: U, isPositioned: Q });
    const Oe = () => {
      ce(!l.value);
    }, ce = (D) => {
      l.value = D;
      const ee = {
        trigger: C(c),
        content: C(u),
        isOpen: C(l)
      }, $ = { isOpen: ee.isOpen };
      cs(() => {
        l.value ? (U(), window.setTimeout(() => {
          xe(), n.directFocus(ee), t("toggle", $);
        }, 0)) : (pe(), n.directFocus(ee), t("toggle", $));
      });
    };
    let X;
    const xe = () => {
      n.clickOutsideCloses && (X && pe(), X = (D) => {
        u.value.contains(D.target) || ce(!1);
      }, document.addEventListener("click", X));
    }, pe = () => {
      X && (document.removeEventListener("click", X), X = null);
    }, Re = () => ce(!1);
    return (D, ee) => {
      const $ = ls("ulu-tooltip");
      return a(), d(O, null, [
        ie((a(), d("button", {
          type: "button",
          ref_key: "trigger",
          ref: c,
          onClick: Oe,
          id: C(o),
          disabled: e.disabled,
          class: m([
            { [e.activeClass]: l.value },
            e.classes.trigger
          ]),
          "aria-expanded": l.value ? "true" : "false",
          "aria-controls": C(i),
          "aria-label": e.triggerAlt
        }, [
          g(D.$slots, "trigger", { isOpen: l.value })
        ], 10, An)), [
          [$, e.tooltip ? e.tooltip : null]
        ]),
        h("span", {
          class: m(["popover", [
            e.size ? `popover--${e.size}` : "",
            {
              "popover--no-padding": e.noPadding,
              "is-active": l.value
            },
            e.classes.content
          ]]),
          ref_key: "content",
          ref: u,
          "aria-labelledby": C(o),
          id: C(i),
          style: L(C(x)),
          "data-placement": C(M),
          onKeydown: ee[0] || (ee[0] = as((P) => ce(!1), ["esc"])),
          tabindex: "-1"
        }, [
          h("span", xn, [
            g(D.$slots, "content", { close: Re })
          ]),
          D.$slots.footer ? (a(), d("span", Rn, [
            g(D.$slots, "footer", { close: Re })
          ])) : v("", !0),
          C(r).arrow ? (a(), d("span", {
            key: 1,
            class: "popover__arrow",
            ref_key: "contentArrow",
            ref: f,
            style: L(Ae.value),
            "data-ulu-popover-arrow": ""
          }, null, 4)) : v("", !0)
        ], 46, On)
      ], 64);
    };
  }
}, Un = ["data-placement"], jn = ["innerHTML"], In = {
  key: 1,
  class: "popover__inner"
}, En = {
  __name: "UluTooltipPopover",
  props: {
    config: Object
  },
  setup(e) {
    const s = Ks(e.config.trigger), t = E(null), n = E(null), i = [
      ...e.config.inline ? [hs()] : [],
      ...e.config.offset ? [ms(e.config.offset)] : [],
      gs(),
      ys(),
      ...e.config.arrow ? [ps({ element: n })] : []
    ], o = {
      placement: e.config.placement,
      whileElementsMounted: _s,
      middleware: i
    }, {
      floatingStyles: r,
      placement: l,
      middlewareData: c,
      update: u,
      isPositioned: f
    } = vs(s, t, o), _ = S(() => {
      const b = c.value?.arrow;
      return b ? {
        position: "absolute",
        left: b?.x != null ? `${b.x}px` : "",
        top: b?.y != null ? `${b.y}px` : ""
      } : null;
    });
    return e.config.onReady && e.config.onReady({ update: u, isPositioned: f }), (b, x) => (a(), d("span", {
      class: m(["popover popover--tooltip is-active", e.config.class]),
      ref_key: "content",
      ref: t,
      "aria-hidden": "true",
      "data-placement": C(l),
      style: L(C(r))
    }, [
      e.config.isHtml ? (a(), d("span", {
        key: 0,
        class: "popover__inner",
        innerHTML: e.config.content
      }, null, 8, jn)) : (a(), d("span", In, y(e.config.content), 1)),
      e.config.arrow ? (a(), d("span", {
        key: 2,
        class: "popover__arrow",
        ref_key: "contentArrow",
        ref: n,
        style: L(_.value)
      }, null, 4)) : v("", !0)
    ], 14, Un));
  }
}, zn = {
  __name: "UluTooltipDisplay",
  setup(e) {
    return (s, t) => (a(), p(Le, {
      to: C(oe).plugin.tooltipTeleportTo
    }, [
      C(ft) ? (a(), p(En, {
        key: 0,
        config: C(ht)
      }, null, 8, ["config"])) : v("", !0)
    ], 8, ["to"]));
  }
};
function Qd(e, s = {}) {
  const t = bn(s);
  t.plugin.global && (e.directive(t.plugin.directiveName, Cn), e.component("UluTooltipDisplay", zn), e.component("UluPopover", Ve));
}
const T = (e, s) => {
  const t = e.__vccOpts || e;
  for (const [n, i] of s)
    t[n] = i;
  return t;
}, Mn = {
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
function Bn(e, s, t, n, i, o) {
  return o.currentModal ? (a(), p(B(o.currentModal.component), Z({ key: 0 }, o.currentProps, {
    modelValue: i.open,
    "onUpdate:modelValue": s[0] || (s[0] = (r) => i.open = r),
    onVnodeMounted: o.modalMounted,
    onVnodeUnmounted: o.modalUnmounted
  }), null, 16, ["modelValue", "onVnodeMounted", "onVnodeUnmounted"])) : v("", !0);
}
const Pn = /* @__PURE__ */ T(Mn, [["render", Bn]]);
function Ln() {
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
    icon: [String, Array, Object, Boolean],
    /**
     * Whether the icon should use flow inline
     */
    spaced: Boolean
  },
  setup(e) {
    const s = He("uluCore"), t = E(null), { getIconProps: n, getClassesFromDefinition: i } = Ln();
    let o;
    const r = e, l = S(() => s.getSetting("fontAwesomeStatic")), c = S(() => s.getSetting("iconComponent")), u = S(() => s.getSetting("iconPropResolver")), f = S(() => {
      const { icon: F } = r;
      if (typeof F == "string" && F.startsWith("type:"))
        try {
          const U = F.substring(5);
          return s.getIcon(U);
        } catch (U) {
          return console.warn(U), null;
        }
      return F;
    }), _ = S(() => !c.value || !f.value ? null : u.value(f.value)), b = S(() => n(f.value)), x = S(() => i(f.value)), M = S(() => ({
      "flow-inline": r.spaced
    }));
    return dt(async () => {
      if (!l.value && f.value) {
        if (t.value === null)
          if (o)
            t.value = fe(o.FontAwesomeIcon);
          else {
            const F = Gs(async () => {
              const U = await import("./index.es-HlG3u0J5.js");
              return o = U, U.FontAwesomeIcon;
            });
            t.value = fe(F);
          }
      } else
        t.value = null;
    }), (F, U) => c.value ? (a(), p(B(c.value), Z({ key: 0 }, _.value, { class: M.value }), null, 16, ["class"])) : !l.value && t.value && f.value ? (a(), p(B(t.value), Z({ key: 1 }, b.value, { class: M.value }), null, 16, ["class"])) : l.value && f.value ? (a(), d("span", {
      key: 2,
      class: m([x.value, M.value]),
      "aria-hidden": "true"
    }, null, 2)) : v("", !0);
  }
};
function st(e) {
  const s = /* @__PURE__ */ new Set();
  if (!e)
    return s;
  if (typeof e == "string")
    e.split(" ").forEach((t) => {
      t && s.add(t);
    });
  else if (Array.isArray(e))
    e.forEach((t) => {
      st(t).forEach((n) => s.add(n));
    });
  else if (typeof e == "object")
    for (const t in e)
      Object.prototype.hasOwnProperty.call(e, t) && e[t] && t && s.add(t);
  return s;
}
function se({ props: e, baseClass: s, internal: t = {} }) {
  const { modifiers: n } = Zs(e);
  return { resolvedModifiers: S(() => {
    const o = Ie(s), r = st(Ie(n)), l = st(Ie(t));
    if (!o)
      return console.warn("useModifiers: Missing 'baseClass' argument, modifiers will not be applied."), "";
    const c = /* @__PURE__ */ new Set([...l, ...r]);
    return Array.from(c).map((u) => `${o}--${u}`);
  }) };
}
function ws() {
  return typeof window < "u" && typeof window.document < "u";
}
function Hn(e, s) {
  const t = e.getBoundingClientRect();
  return s.clientY < t.top || // above
  s.clientY > t.top + t.height || // below
  s.clientX < t.left || // left side
  s.clientX > t.left + t.width;
}
function Fn(e = document.body, s = window) {
  return s.innerWidth - e.clientWidth;
}
function Vn({ preventShift: e = !1, container: s = document.body }) {
  const t = s.style.overflow, n = s.style.paddingRight;
  if (s.style.overflow = "hidden", e) {
    const i = Fn();
    if (i > 0) {
      const o = parseInt(n || "0px", 10);
      s.style.paddingRight = `${o + i}px`;
    }
  }
  return () => {
    s.style.overflow = t, s.style.paddingRight = n;
  };
}
function De(e, s, t, n) {
  var i;
  return function() {
    var r = n || this, l = arguments, c = function() {
      i = null, t || e.apply(r, l);
    }, u = t && !i;
    clearTimeout(i), i = setTimeout(c, s), u && e.apply(r, l);
  };
}
ws() && (Nn(), Wn());
const Rt = {
  /**
   * Event is dispatched when DOM in the page has changed, triggers updates from
   * all modules listening for the change (init instances, etc)
   * - Is triggered by modules that were responsible for modifying the page
   */
  pageModified(e) {
    e.dispatchEvent(_e("pageModified"));
  },
  /**
   * Event called when page is resized
   */
  pageResized(e) {
    e.dispatchEvent(_e("pageResized"));
  },
  /**
   * Event dispatched before page print begins (teardown/restructure/hide things)
   */
  beforePrint(e) {
    e.dispatchEvent(_e("beforePrint"));
  },
  /**
   * Event dispatched after page print (cleanup)
   */
  afterPrint(e) {
    e.dispatchEvent(_e("afterPrint"));
  }
};
function nt(e, s) {
  Rt[e] ? Rt[e](s) : console.warn(`Unable to dispatch site event: ${e} in context:`, s);
}
function Dn(e) {
  return "ulu:" + e;
}
function _e(e, s = null, t = { bubbles: !0 }) {
  return new CustomEvent(Dn(e), { detail: s, ...t });
}
function Nn() {
  window.addEventListener("resize", De(() => nt("pageResized", document), 250));
}
function Wn() {
  window.addEventListener("beforeprint", () => {
    nt("beforePrint", document);
  }), window.addEventListener("afterprint", () => {
    nt("afterPrint", document);
  });
}
function Xn(e) {
  return typeof e == "object" && e?.constructor?.name;
}
function qn(e, s, t) {
  const n = Xn(s) || "Logger";
  console[e](n, ...t);
}
function ue(e, ...s) {
}
function je(e, ...s) {
  qn("error", e, s);
}
class mt {
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
  #l;
  #a;
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
    const i = Object.assign({}, mt.defaults, n);
    this.options = i, this.container = s, this.control = t, this.debug = i.debug;
    const o = ["left", "right"], r = ["top", "bottom"], { fromX: l, fromY: c } = i;
    if (!o.includes(l) && l !== null) {
      je(this, `Invalid fromX: ${l} (left|right|null)`);
      return;
    }
    if (!r.includes(c) && c !== null) {
      je(this, `Invalid fromY: ${c} (top|bottom|null)`);
      return;
    }
    if (!l && !c) {
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
    this.#t = null, this.#e = { width: 0, height: 0 }, this.#i = 0, this.#r = 0, this.#s = !1, this.#l = 0, this.#a = 0;
  }
  /**
   * Cleans up event listeners and internal state to prevent memory leaks.
   */
  destroy() {
    const { control: s, options: t } = this;
    t.manageEvents && (t.enablePointerResizing && s.removeEventListener("pointerdown", this.#n), t.enableKeyboardResizing && s.removeEventListener("keydown", this.#o)), this.#t && clearTimeout(this.#t), this.#c(), t.manageAriaLabel && s.removeAttribute("aria-label"), ue(this, "Resizer destroyed.");
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
    this.#e.width = parseInt(o.width, 10), this.#e.height = parseInt(o.height, 10), n.overrideMaxDimensions && (this.resizeHorizontal && (t.style.maxWidth = "none"), this.resizeVertical && (t.style.maxHeight = "none")), this.#s = !0, this.dispatchEvent("resizer:start", s), ue(this, "Resize started.", {
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
    this.#s && (this.dispatchEvent("resizer:end"), this.#c(), ue(this, "Resize ended."));
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
    const { fromX: r, fromY: l, multiplier: c } = this.options;
    this.resizeHorizontal && (r === "right" ? i = this.#e.width + s * c : r === "left" && (i = this.#e.width - s * c), this.container.style.width = `${Math.max(0, i)}px`), this.resizeVertical && (l === "bottom" ? o = this.#e.height + t * c : l === "top" && (o = this.#e.height - t * c), this.container.style.height = `${Math.max(0, o)}px`);
    const u = {
      newWidth: i,
      newHeight: o,
      totalDeltaX: s,
      totalDeltaY: t,
      event: n
    };
    this.dispatchEvent("resizer:update", u), ue(this, "Resizing update.", u);
  }
  /**
   * Public handler for pointerdown events. Call this method from your own event listeners
   * if `manageEvents` is false. Its logic will only execute if `enablePointerResizing` is true.
   * @param {PointerEvent} e The pointerdown event.
   */
  onPointerdown(s) {
    if (!this.options.enablePointerResizing) {
      ue(this, "Pointer resizing disabled. Ignoring pointerdown event.");
      return;
    }
    s.preventDefault();
    const t = document.documentElement;
    this.#l = s.clientX, this.#a = s.clientY, this.#u({
      inputType: "pointer",
      startX: s.clientX,
      startY: s.clientY,
      pointerId: s.pointerId
    }), this.control.setPointerCapture(s.pointerId);
    const n = (o) => {
      const r = o.clientX - this.#l, l = o.clientY - this.#a;
      this.#f(r, l, o);
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
      ue(this, "Keyboard resizing disabled. Ignoring keydown event.");
      return;
    }
    const { key: t } = s, { keyboardStep: n, keyboardDebounceTime: i } = this.options;
    let o = 0, r = 0, l = !1;
    this.resizeHorizontal && (t === "ArrowLeft" ? (o = -n, l = !0) : t === "ArrowRight" && (o = n, l = !0)), this.resizeVertical && (t === "ArrowUp" ? (r = -n, l = !0) : t === "ArrowDown" && (r = n, l = !0)), l && (s.preventDefault(), s.stopPropagation(), (!this.#s || this.#t === null) && this.#u({ inputType: "keyboard", keyboardKey: t }), this.#i += o, this.#r += r, this.#f(this.#i, this.#r, s), this.#t && clearTimeout(this.#t), this.#t = setTimeout(() => {
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
    this.container.dispatchEvent(_e(s, t));
  }
}
let Ge = 0;
const Yn = {
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
    return ++Ge, {
      containerWidth: null,
      titleId: `ulu-modal-${Ge}-title`,
      bodyOverflowValue: null,
      bodyPaddingRightValue: null,
      isResizing: !1
    };
  },
  setup(e) {
    const s = Qs(), t = S(() => e.title || s.title), n = S(() => {
      const { allowResize: l, position: c } = e;
      if (!l || !c) return;
      const u = ["left", "right", "center"];
      return u.includes(c) ? !0 : (console.warn(`Passed invalid position for resize (${c}), use ${u.join(", ")}`), !1);
    }), i = S(() => e.position === "center" ? "type:resizeBoth" : "type:resizeHorizontal"), o = S(() => ({
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
        s === t && Hn(t, e) && this.close();
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
        e.newState === "open" ? this.restoreScroll = Vn({ preventShift: s }) : this.destroyPreventScroll();
      }
    },
    setupResizer() {
      const { position: e, resizerEnabled: s } = this;
      if (s) {
        const { container: t, resizer: n } = this.$refs, i = e === "center" ? { fromX: "right", fromY: "bottom", multiplier: 2 } : { fromX: e === "right" ? "left" : "right" };
        this.resizerInstance = new mt(t, n, i), this.handleResizerStart = () => {
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
    ++Ge, this.preventScroll && this.setupPreventScroll(), this.setupResizer();
  },
  beforeUnmount() {
    const { container: e } = this.$refs;
    e && e.open && e.close(), this.destroyPreventScroll(), this.destroyResizer();
  }
}, Kn = ["aria-labelledby", "aria-describedby"], Gn = ["id"], Zn = { class: "modal__title-text" }, Jn = {
  key: 2,
  class: "modal__resizer",
  ref: "resizer",
  type: "button"
};
function Qn(e, s, t, n, i, o) {
  const r = z("UluIcon");
  return a(), p(Le, {
    to: t.teleport === !1 ? null : t.teleport,
    disabled: t.teleport === !1
  }, [
    h("dialog", {
      class: m(["modal", [n.resolvedModifiers, t.classes.container]]),
      "aria-labelledby": o.resolvedLabelledby,
      "aria-describedby": t.describedby,
      ref: "container",
      style: L({ width: i.containerWidth }),
      onCancel: s[1] || (s[1] = Js((...l) => o.close && o.close(...l), ["prevent"])),
      onClose: s[2] || (s[2] = (...l) => o.handleDialogCloseEvent && o.handleDialogCloseEvent(...l)),
      onClick: s[3] || (s[3] = (...l) => o.handleClick && o.handleClick(...l)),
      onToggle: s[4] || (s[4] = (...l) => o.handleToggle && o.handleToggle(...l))
    }, [
      n.hasHeader ? (a(), d("header", {
        key: 0,
        class: m(["modal__header", t.classes.header])
      }, [
        h("h2", {
          class: m(["modal__title", t.classes.title]),
          id: i.titleId
        }, [
          g(e.$slots, "title", { close: o.close }, () => [
            t.titleIcon ? (a(), p(r, {
              key: 0,
              class: "modal__title-icon",
              icon: t.titleIcon
            }, null, 8, ["icon"])) : v("", !0),
            h("span", Zn, y(t.title), 1)
          ])
        ], 10, Gn),
        h("button", {
          class: "modal__close",
          "aria-label": "Close modal",
          onClick: s[0] || (s[0] = (...l) => o.close && o.close(...l)),
          autofocus: ""
        }, [
          g(e.$slots, "closeIcon", {}, () => [
            R(r, {
              class: "modal__close-icon",
              icon: t.closeIcon || "type:close"
            }, null, 8, ["icon"])
          ])
        ])
      ], 2)) : v("", !0),
      h("div", {
        class: m(["modal__body", t.classes.body])
      }, [
        g(e.$slots, "default", { close: o.close })
      ], 2),
      e.$slots.footer ? (a(), d("div", {
        key: 1,
        class: m(["site-modal__footer", t.classes.footer])
      }, [
        g(e.$slots, "footer", { close: o.close })
      ], 2)) : v("", !0),
      n.resizerEnabled ? (a(), d("button", Jn, [
        g(e.$slots, "resizerIcon", {}, () => [
          R(r, {
            class: "modal__resizer-icon",
            icon: t.resizerIcon || n.resizerIconType
          }, null, 8, ["icon"])
        ])
      ], 512)) : v("", !0)
    ], 46, Kn)
  ], 8, ["to", "disabled"]);
}
const Ss = /* @__PURE__ */ T(Yn, [["render", Qn]]), be = [], eo = E({
  /**
   * Holds active component options (including component, and options)
   */
  active: null,
  /**
   * Populated with any props passed to open method, bound to modal component
   */
  activeProps: null
}), we = eo.value, Ut = {
  data: we,
  modals: be
}, to = (e) => ({
  open(s, t = null) {
    const n = this.get(s);
    we.active = fe(n), we.activeProps = Object.assign({}, n.props, t);
  },
  /**
   * Close the active modal
   * @param {String|Node} focusTo The element or selector for an element to programmatically focus after modal close
   * @see https://www.deque.com/blog/accessible-routing-in-javascript-frameworks/
   */
  close() {
    we.active = null, we.activeProps = null;
  },
  /**
   * Get a modal's config object by name
   * @return {Object} Modal config object
   */
  get(s) {
    const t = be.find((n) => n.name === s);
    if (t)
      return t;
    throw new Error(`Unable to find modal named: ${s}`);
  },
  /**
   * Add a modal config
   */
  add(s) {
    const t = e(s);
    be.push(t);
  },
  /**
   * Removes a modal config by name
   * @return {Object} Modal that was removed
   */
  remove(s) {
    const t = be.findIndex((n) => n.name === s);
    if (t > -1)
      return be.splice(t, 1);
    warn("unable to find modal to remove");
  }
}), so = {
  componentNameDisplay: "UluModalsDisplay",
  componentNameModal: "UluModal",
  modals: [],
  modalOptions: {}
};
function ef(e, s) {
  const t = Object.assign({}, so, s), i = to((o) => Object.assign({}, t.modalOptions, o));
  e.component(t.componentNameDisplay, Pn), e.component(t.componentNameModal, Ss), t.modals.forEach((o) => {
    i.add(o);
  }), Ut.options = t, e.config.globalProperties.$uluModals = i, e.provide("uluModals", i), e.config.globalProperties.$uluModalsState = Ut;
}
const no = {
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
}, oo = ["onClick"];
function io(e, s, t, n, i, o) {
  const r = z("UluIcon");
  return a(), d("div", {
    class: m(["toast", [
      {
        "toast--persistent": !t.toast.duration
      },
      t.toast?.class
    ]])
  }, [
    t.toast.icon || e.$slots.icon ? (a(), d("div", {
      key: 0,
      class: m(["toast__icon", t.classes.icon])
    }, [
      g(e.$slots, "icon", { toast: t.toast }, () => [
        t.toast.icon ? (a(), p(r, {
          key: 0,
          icon: t.toast.icon
        }, null, 8, ["icon"])) : v("", !0)
      ])
    ], 2)) : v("", !0),
    h("div", {
      class: m(["toast__content", t.classes.content])
    }, [
      g(e.$slots, "content", { toast: t.toast }, () => [
        t.toast.title ? (a(), d("div", {
          key: 0,
          class: m(["toast__header", t.classes.header])
        }, [
          h("strong", {
            class: m(["toast__title", t.classes.title])
          }, y(t.toast.title), 3),
          t.toast.date ? (a(), d("span", {
            key: 0,
            class: m(["toast__date", t.classes.date])
          }, y(t.toast.date), 3)) : v("", !0)
        ], 2)) : v("", !0),
        t.toast.description ? (a(), d("div", {
          key: 1,
          class: m(["toast__body", t.classes.body])
        }, y(t.toast.description), 3)) : v("", !0)
      ])
    ], 2),
    t.toast.actions?.length ? (a(), d("div", {
      key: 1,
      class: m(["toast__actions", t.classes.actions])
    }, [
      (a(!0), d(O, null, A(t.toast.actions, (l, c) => (a(), d("button", {
        key: c,
        class: m(["toast__action", t.classes.action]),
        onClick: (u) => o.handleAction(u, l)
      }, y(l.label), 11, oo))), 128))
    ], 2)) : v("", !0),
    h("button", {
      class: m(["toast__close", t.classes.closeButton]),
      onClick: s[0] || (s[0] = (...l) => t.toast.close && t.toast.close(...l))
    }, [
      R(r, { icon: "type:close" })
    ], 2)
  ], 2);
}
const ks = /* @__PURE__ */ T(no, [["render", io]]), jt = {
  toastOptions: {
    /**
     * Component used to render the toast in the display
     */
    component: fe(ks),
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
}, { assign: Ze } = Object;
let ro = 0;
const te = ut({
  toasts: [],
  /**
   * Saveable 
   */
  pluginOptions: jt.pluginOptions,
  toastOptions: jt.toastOptions,
  setToastOptions(e) {
    return this.toastOptions = Ze({}, this.toastOptions, e), this.pluginOptions;
  },
  setPluginOptions(e) {
    return this.pluginOptions = Ze({}, this.pluginOptions, e), this.pluginOptions;
  },
  createToast(e) {
    const s = `toast-${++ro}`;
    return Ze({}, this.toastOptions, e, {
      uid: s,
      close() {
        ot.remove(s);
      }
    });
  }
}), ot = {
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
}, lo = {
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
function ao(e, s, t, n, i, o) {
  return a(), p(Le, {
    to: i.pluginOptions.teleportTo
  }, [
    R(us, {
      class: m(["toast-container", o.classes]),
      name: "toast",
      tag: "div"
    }, {
      default: w(() => [
        (a(!0), d(O, null, A(i.toasts, (r) => (a(), p(B(r.component), {
          key: r.uid,
          toast: r
        }, null, 8, ["toast"]))), 128))
      ]),
      _: 1
    }, 8, ["class"])
  ], 8, ["to"]);
}
const co = /* @__PURE__ */ T(lo, [["render", ao]]);
function tf(e, s = {}) {
  const t = te.setPluginOptions(s?.plugin);
  te.setToastOptions(s?.toast), e.component(t.componentName, ks), e.component(t.componentNameDisplay, co), e.config.globalProperties.$uluToast = ot, e.provide("uluToast", ot);
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
  const s = Object.assign({}, uo, e), t = E(null), n = E(s.initialValue), i = E(null);
  return (async () => {
    if (!ws()) return;
    await new Promise((f) => {
      document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", () => f()) : f();
    });
    const r = await import("./breakpoints-B-Iw5aP7.js"), { BreakpointManager: l } = r, c = fe(new l(s.plugin));
    t.value = fe(c);
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
function sf(e, s) {
  const t = E(!1), n = Object.assign({}, ho, s), { breakpointMobile: i } = n, { onReady: o } = n.managerOptions, r = {
    onReady(_) {
      _.at(i).max({
        on() {
          t.value = !0;
        },
        off() {
          t.value = !1;
        }
      }), o && o(_);
    }
  }, l = Object.assign({}, n.managerOptions, r), {
    breakpointManager: c,
    breakpointActive: u,
    breakpointDirection: f
  } = fo(l);
  e.provide("uluBreakpointActive", S(() => u.value)), e.provide("uluBreakpointDirection", S(() => f.value)), e.provide("uluBreakpointManager", S(() => c.value)), e.provide("uluIsMobile", S(() => t.value));
}
const nf = {
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
    return (n, i) => (a(), p(C(cn), { defaultOpen: e.defaultOpen }, {
      default: w(({ open: o }) => [
        h("div", {
          class: m(["accordion", [
            { [e.activeClass]: o },
            e.classes.container,
            C(t)
          ]])
        }, [
          R(C(un), {
            class: m(["accordion__summary", [
              { [e.activeClass]: o },
              e.classes.summary
            ]])
          }, {
            default: w(() => [
              g(n.$slots, "summary", { open: o }, () => [
                (a(), p(B(e.summaryTextElement), null, {
                  default: w(() => [
                    k(y(e.summaryText), 1)
                  ]),
                  _: 1
                }))
              ]),
              g(n.$slots, "icon", { open: o }, () => [
                h("span", {
                  class: m(["accordion__icon", e.classes.icon])
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
          R(C(dn), {
            class: m(["accordion__content", e.classes.content])
          }, {
            default: w(() => [
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
      }, l = () => {
        o(), r();
      };
      this.onCleanupTransition = () => {
        clearTimeout(e), s.removeEventListener("transitionend", r);
      }, this.transitionsDisabled = !0, this.isTransitioning = !0, this.$emit("collapsible-closing"), this.$nextTick(() => {
        requestAnimationFrame(n), e = setTimeout(l, this.transitionTimeout);
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
}, yo = ["id", "aria-controls", "aria-expanded"], po = ["id", "aria-hidden", "aria-labelledby"], vo = { class: "collapsible-region__content-inner" };
function _o(e, s, t, n, i, o) {
  return a(), d("div", {
    class: m(["collapsible-region", {
      "collapsible-region--open": i.isOpen,
      "collapsible-region--closed": !i.isOpen,
      "collapsible-region--transitioning": i.isTransitioning
    }]),
    onKeydown: s[1] || (s[1] = as((...r) => o.handleEscape && o.handleEscape(...r), ["esc"]))
  }, [
    h("button", {
      class: "collapsible-region__toggle",
      id: i.toggleId,
      "aria-controls": i.contentId,
      "aria-expanded": i.isOpen,
      onClick: s[0] || (s[0] = (...r) => o.toggle && o.toggle(...r))
    }, [
      g(e.$slots, "toggle", { isOpen: i.isOpen }, () => [
        k(y(t.title), 1)
      ])
    ], 8, yo),
    ie(h("div", {
      class: "collapsible-region__content",
      tabindex: "-1",
      ref: "content",
      id: i.contentId,
      "aria-hidden": !i.isOpen,
      "aria-labelledby": i.toggleId,
      style: L(o.contentStyles)
    }, [
      h("div", vo, [
        g(e.$slots, "default")
      ])
    ], 12, po), [
      [Me, !i.isHidden]
    ])
  ], 34);
}
const It = /* @__PURE__ */ T(go, [["render", _o]]), Cs = {
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
    return (n, i) => (a(), d("span", {
      class: m(["tag", [
        {
          "tag--counter": e.counter,
          [`tag--${e.size}`]: e.size,
          [`tag--${e.type}`]: e.type
        },
        C(t)
      ]])
    }, [
      e.icon ? (a(), p(V, {
        key: 0,
        icon: e.icon,
        spaced: ""
      }, null, 8, ["icon"])) : v("", !0),
      g(n.$slots, "default", {}, () => [
        h("span", null, y(e.text), 1)
      ])
    ], 2));
  }
}, bo = {
  name: "UluMenu",
  components: {
    UluIcon: V,
    UluTag: Cs
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
  const r = z("UluIcon"), l = z("UluTag"), c = z("UluMenu", !0), u = ls("ulu-tooltip");
  return t.items?.length ? (a(), d("ul", {
    key: 0,
    class: m(t.classes.list)
  }, [
    (a(!0), d(O, null, A(t.items, (f, _) => (a(), d("li", {
      key: _,
      class: m([t.classes.item, f?.classes?.item])
    }, [
      ie((a(), p(B(f.to || f.path ? "router-link" : f.click ? "button" : "a"), Z({ ref_for: !0 }, {
        ...f.to || f.path ? { to: f.to || f.path } : {},
        ...f.href ? { href: f.href || "#" } : {}
      }, {
        onClick: (b) => {
          o.handleItemClick(b, f);
        },
        class: [t.classes.link, f?.classes?.link],
        activeClass: t.classes.linkActive,
        exactActiveClass: t.classes.linkExactActive,
        "aria-label": t.iconOnly ? f.title : null,
        id: f.id
      }), {
        default: w(() => [
          g(e.$slots, "default", {
            item: f,
            index: _
          }, () => [
            f.icon ? (a(), p(r, {
              key: 0,
              icon: f.icon,
              class: m([t.classes.linkIcon, f?.classes?.linkIcon])
            }, null, 8, ["icon", "class"])) : v("", !0),
            h("span", {
              class: m([t.classes.linkText, f?.classes?.linkText])
            }, y(f.title), 3),
            f.tag ? (a(), p(l, Z({
              key: 1,
              ref_for: !0
            }, f.tag), null, 16)) : v("", !0)
          ])
        ]),
        _: 2
      }, 1040, ["onClick", "class", "activeClass", "exactActiveClass", "aria-label", "id"])), [
        [u, t.iconOnly ? f.title : f.tooltip || null]
      ]),
      !t.noChildren && f?.children?.length ? (a(), p(c, {
        key: 0,
        iconOnly: t.iconOnly,
        classes: t.classes,
        items: f.children
      }, null, 8, ["iconOnly", "classes", "items"])) : v("", !0)
    ], 2))), 128))
  ], 2)) : v("", !0);
}
const Ts = /* @__PURE__ */ T(bo, [["render", wo]]), So = {
  name: "UluMenuStack",
  components: {
    UluMenu: Ts
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
  const r = z("UluMenu");
  return a(), d("nav", {
    class: m(["menu-stack", {
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
const Co = /* @__PURE__ */ T(So, [["render", ko]]), To = {
  name: "UluDropdown",
  components: {
    UluPopover: Ve,
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
  const r = z("UluMenuStack"), l = z("UluPopover");
  return a(), p(l, { classes: t.popoverClasses }, {
    trigger: w(({ isOpen: c }) => [
      g(e.$slots, "default", { isOpen: c })
    ]),
    content: w(() => [
      R(r, { items: t.items }, null, 8, ["items"])
    ]),
    _: 3
  }, 8, ["classes"]);
}
const of = /* @__PURE__ */ T(To, [["render", $o]]), gt = E(!1), Be = {
  start: [],
  end: []
};
function yt() {
  window.removeEventListener("resize", yt), gt.value = !0, Be.start.forEach((e) => e());
}
function Ao() {
  gt.value = !1, Be.end.forEach((e) => e()), window.addEventListener("resize", yt);
}
window.addEventListener("resize", yt), window.addEventListener("resize", De(Ao, 300));
function Et(e, s) {
  return e.push(s), () => {
    const t = e.findIndex((n) => n === s);
    t > -1 && e.splice(t);
  };
}
function Oo() {
  return {
    resizing: gt,
    onResizeStart(e) {
      return Et(Be.start, e);
    },
    onResizeEnd(e) {
      return Et(Be.end, e);
    }
  };
}
const xo = {
  uluCore: "Core",
  uluIsMobile: "Breakpoints",
  uluBreakpointActive: "Breakpoints",
  uluBreakpointDirection: "Breakpoints",
  uluBreakpointManager: "Breakpoints",
  uluModals: "Modals",
  uluToast: "Toast"
}, zt = {};
function Ro(e) {
  const s = He(e, zt);
  if (s === zt) {
    const t = xo[e] || "", n = t ? ` from the '${t}' plugin` : "", i = t ? "Please install missing plugin." : "";
    throw new Error(`Required inject: '${e}'${n} was not provided. ${i}`);
  }
  return s;
}
function rf(e, s) {
  const t = bs(), n = pn(), i = S(() => {
    const u = parseInt(t.query.page || "1", 10);
    return isNaN(u) || u < 1 ? 1 : u;
  }), o = S(() => !e.value || e.value.length === 0 ? 1 : Math.ceil(e.value.length / s));
  ds(o, (u) => {
    i.value > u && n.push({ query: { ...t.query, page: u } });
  });
  const r = S(() => {
    const u = (i.value - 1) * s, f = u + s;
    return e.value.slice(u, f);
  }), l = S(() => {
    if (o.value <= 1)
      return null;
    const u = {
      pages: {}
    }, f = i.value, _ = o.value, b = 5, x = (U) => ({ query: { ...t.query, page: U } });
    f > 1 && (u.first = { href: x(1) }, u.previous = { href: x(f - 1) }), f < _ && (u.next = { href: x(f + 1) }, u.last = { href: x(_) });
    let M, F;
    if (_ <= b)
      M = 1, F = _;
    else {
      const U = Math.floor(b / 2), Q = Math.ceil(b / 2) - 1;
      f <= U ? (M = 1, F = b) : f + Q >= _ ? (M = _ - b + 1, F = _) : (M = f - U, F = f + Q);
    }
    for (let U = M; U <= F; U++)
      u.pages[U] = { href: x(U) };
    return u;
  }), c = S(() => {
    const u = { previous: !1, next: !1 };
    if (!l.value || !l.value.pages) return u;
    const f = Object.keys(l.value.pages).map(Number);
    if (f.length === 0) return u;
    const _ = Math.min(...f), b = Math.max(...f);
    return _ > 1 && (u.previous = !0), b < o.value && (u.next = !0), u;
  });
  return {
    currentPage: i,
    totalPages: o,
    paginatedItems: r,
    pagerItems: l,
    pagerEllipses: c
  };
}
function it(e, s, t) {
  typeof e === "function" && (!t || t !== "titleTemplate" && !(t[0] === "o" && t[1] === "n")) && (e = e());
  let i;
  if (s && (i = s(t, e)), Array.isArray(i))
    return i.map((o) => it(o, s));
  if (i?.constructor === Object) {
    const o = {};
    for (const r of Object.keys(i))
      o[r] = it(i[r], s, r);
    return o;
  }
  return i;
}
const Uo = (e, s) => en(s) ? Ie(s) : s, jo = "usehead";
function Io() {
  if (tn()) {
    const e = He(jo);
    if (!e)
      throw new Error("useHead() was called without provide context, ensure you call it through the setup() function.");
    return e;
  }
  throw new Error("useHead() was called without provide context, ensure you call it through the setup() function.");
}
function Eo(e, s = {}) {
  const t = s.head || Io();
  return t.ssr ? t.push(e || {}, s) : zo(t, e, s);
}
function zo(e, s, t = {}) {
  const n = E(!1);
  let i;
  return dt(() => {
    const r = n.value ? {} : it(s, Uo);
    i ? i.patch(r) : i = e.push(r, t);
  }), sn() && (nn(() => {
    i.dispose();
  }), on(() => {
    n.value = !0;
  }), rn(() => {
    n.value = !1;
  })), i;
}
function Ne(e, s) {
  let n = (e?.meta || {}).title;
  return typeof n == "function" && (n = n(s || e)), n;
}
function Mo(e, s) {
  const n = Object.assign({}, {
    qualifier(r, l) {
      return l ? vt(r) : $s(r);
    },
    sort: bt,
    item: {},
    includeChildren: !1
  }, s), i = (r, l) => l ? `${l}/${r.path}` : r.path, o = (r, l = null) => r.filter((c) => n.qualifier(c, l)).map((c) => {
    const u = c.children ? pt(c.children) : c, f = c.children ? c.children.filter((b) => b.path !== "") : !1, _ = We(u, i(c, l), n.item);
    return n.includeChildren && f.length && (_.children = o(f, _.path)), _;
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
    sort: bt
  }, t), o = e.find((u) => u.path !== "/" && s.includes(u.path)), r = (u, f, _) => {
    if (u.children) {
      const b = u.children.find((x) => x.path.includes(s));
      if (b)
        return r(b, u, _ + b.path);
    }
    return { route: f, path: _ };
  }, { route: l, path: c } = r(o, o, o.path);
  return l.children ? l.children.filter(Os(i.includeIndex)).map((u) => We(u, `${c}/${u.path}`, i.item)).sort(i.sort) : (console.warn("Unable to build menu for:", s), []);
}
function pt(e) {
  return e.find((s) => s.path === "");
}
function We(e, s = e.path, t) {
  const i = Object.assign({}, {
    indexMeta: !0,
    modify: null
  }, t);
  let o = Object.assign({}, e.meta);
  i.indexMeta && e.children && (o = Object.assign({}, o, pt(e.children)?.meta));
  const r = { ...e, meta: o }, l = {
    path: s,
    title: Ne(r, e) || "Missing Title",
    weight: o?.weight || 0,
    meta: o
  };
  return i.modify && i.modify(l, e), l;
}
function vt(e) {
  return !e.path.includes("/:");
}
function $s(e) {
  const s = e.path.match(/\//g) || [];
  return vt(e) && s.length === 1;
}
function Lo(e, s) {
  const { target: t } = s, n = t.closest("a");
  if (n) {
    let i = n.getAttribute("href");
    i.startsWith("/") && (e.push(i), s.preventDefault());
  }
}
function As(e, s = _t(e)) {
  return s?.children;
}
function _t(e, s) {
  const t = e.matched.length, n = t - 2;
  return s ? t > 1 ? e.matched[0] : null : n < 0 ? null : e.matched[n];
}
function Os(e) {
  return (s) => e || s.path !== "";
}
function bt(e, s) {
  return e?.weight - s?.weight;
}
function Ho(e, s) {
  const n = Object.assign({}, {
    parent: null,
    includeIndex: !1,
    item: {},
    sort: bt
  }, s), i = n.parent || _t(e);
  return (As(e, i) || []).filter(Os(n.includeIndex)).map((r) => We(r, `${i.path}/${r.path}`, n.item)).sort(n.sort);
}
function Fo(e) {
  const { matched: s, path: t } = e;
  let n;
  return s.reduce((o, r, l) => {
    if (r.meta?.breadcrumb === !1 || r.path === n)
      return o;
    const c = l === s.length - 1, u = Ne(r, e) || "Missing Title";
    return o.push({
      title: u,
      to: { path: c ? t : r.path },
      current: c
    }), n = r.path, o;
  }, []);
}
const Vo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  $createBreadcrumb: Fo,
  $createSectionMenu: Ho,
  $getParentRoute: _t,
  $getRouteChildren: As,
  createBaseMenu: Mo,
  createMenuItem: We,
  createSectionMenu: Po,
  flattenMenu: Bo,
  getChildIndexRoute: pt,
  getRouteTitle: Ne,
  isStaticBaseRoute: $s,
  isStaticRoute: vt,
  nativeLinkRouter: Lo
}, Symbol.toStringTag, { value: "Module" })), Je = ut({});
function lf(e = {}) {
  const {
    title: s,
    titleTemplate: t = "%s",
    useRoute: n = bs,
    useHead: i = Eo
  } = e, o = n(), r = o.path;
  if (s !== void 0) {
    dt(() => {
      Je[r] = C(s);
    }), fs(() => {
      delete Je[r];
    });
    return;
  }
  const l = S(() => {
    const c = Je[o.path], u = Ne(o, o), f = c || u;
    return f ? t.replace("%s", f) : "App";
  });
  i({
    title: l
  });
}
const Do = { class: "layout-flex-baseline" }, No = { class: "type-word-break" }, af = {
  __name: "UluOverflowPopover",
  props: {
    /**
     * Default icon for overflow popover trigger
     */
    triggerIcon: String
  },
  setup(e) {
    const { resizing: s, onResizeEnd: t } = Oo(), n = E(null), i = E(!1), o = () => {
      cs(() => {
        const l = n.value;
        i.value = l.offsetWidth < l.scrollWidth;
      });
    }, r = t(o);
    return ln(o), fs(r), (l, c) => (a(), d("div", Do, [
      h("div", {
        class: "type-truncate",
        ref_key: "text",
        ref: n
      }, [
        g(l.$slots, "default")
      ], 512),
      i.value && !C(s) ? (a(), p(Ve, {
        key: 0,
        triggerAlt: "Show Full Text",
        size: "large"
      }, {
        trigger: w(() => [
          R(V, {
            icon: e.triggerIcon || "type:ellipsis"
          }, null, 8, ["icon"])
        ]),
        content: w(() => [
          h("div", No, [
            g(l.$slots, "default")
          ])
        ]),
        _: 3
      })) : v("", !0)
    ]));
  }
}, cf = {
  __name: "UluTab",
  setup(e) {
    return (s, t) => (a(), p(C(fn), null, {
      default: w((n) => [
        g(s.$slots, "default", q(Y(n)))
      ]),
      _: 3
    }));
  }
}, uf = /* @__PURE__ */ Object.assign({
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
    return (s, t) => (a(), p(C(hn), {
      defaultIndex: e.defaultIndex,
      vertical: e.vertical
    }, {
      default: w((n) => [
        h("div", {
          class: m(["tabs", {
            "tabs--vertical": e.vertical
          }])
        }, [
          g(s.$slots, "default", q(Y(n)))
        ], 2)
      ]),
      _: 3
    }, 8, ["defaultIndex", "vertical"]));
  }
}), df = {
  __name: "UluTabList",
  setup(e) {
    return (s, t) => (a(), p(C(mn), { class: "tabs__tablist" }, {
      default: w(() => [
        g(s.$slots, "default")
      ]),
      _: 3
    }));
  }
}, ff = {
  __name: "UluTabPanel",
  setup(e) {
    return (s, t) => (a(), p(C(gn), null, {
      default: w((n) => [
        g(s.$slots, "default", q(Y(n)))
      ]),
      _: 3
    }));
  }
}, hf = {
  __name: "UluTabPanels",
  setup(e) {
    return (s, t) => (a(), p(C(yn), null, {
      default: w((n) => [
        g(s.$slots, "default", q(Y(n)))
      ]),
      _: 3
    }));
  }
}, Wo = {
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
      return this.to ? Fe : this.href ? "a" : "button";
    },
    attrs() {
      const { to: e, href: s, download: t, target: n } = this, i = e ? { to: e } : s ? { href: s } : {};
      return s && (n && (i.target = n), t && (i.download = typeof t == "string" ? t : !0)), i;
    }
  }
}, Xo = { key: 1 };
function qo(e, s, t, n, i, o) {
  const r = z("UluIcon");
  return a(), p(B(o.element), Z({
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
    default: w(() => [
      g(e.$slots, "before"),
      t.icon && (t.iconBefore || t.iconOnly) ? (a(), p(r, {
        key: 0,
        icon: t.icon,
        class: "button__icon"
      }, null, 8, ["icon"])) : v("", !0),
      (e.$slots.default || t.text) && !t.iconOnly ? (a(), d("span", Xo, [
        g(e.$slots, "default", {}, () => [
          k(y(t.text), 1)
        ])
      ])) : v("", !0),
      t.icon && !t.iconBefore && !t.iconOnly ? (a(), p(r, {
        key: 2,
        icon: t.icon,
        class: "button__icon"
      }, null, 8, ["icon"])) : v("", !0),
      g(e.$slots, "after")
    ]),
    _: 3
  }, 16, ["class", "aria-label"]);
}
const Yo = /* @__PURE__ */ T(Wo, [["render", qo]]), Ko = {
  name: "UluAlert",
  components: {
    UluButton: Yo,
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
      internal: S(() => ({
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
  const r = z("UluIcon");
  return a(), d("div", {
    class: m(["callout", n.resolvedModifiers])
  }, [
    h("div", Go, [
      R(r, {
        class: m(["type-large margin-right-small", `color-${t.type}`]),
        icon: t.icon || `type:${t.type}`
      }, null, 8, ["class", "icon"]),
      h("div", Zo, [
        h("div", null, [
          g(e.$slots, "title", {}, () => [
            h("strong", null, y(t.title), 1)
          ])
        ]),
        h("div", null, [
          g(e.$slots, "description", {}, () => [
            k(y(t.description), 1)
          ])
        ])
      ]),
      e.$slots.action ? (a(), d("div", Jo, [
        g(e.$slots, "action")
      ])) : v("", !0)
    ])
  ], 2);
}
const mf = /* @__PURE__ */ T(Ko, [["render", Qo]]), ei = ["aria-hidden"], ti = {
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
    const s = e, t = S(() => !!(s.to || s.click)), n = S(() => {
      const { click: i, to: o, href: r } = s;
      return i ? "button" : o ? Fe : r ? "a" : "span";
    });
    return (i, o) => (a(), p(B(n.value), {
      class: m(["badge", [
        e.size ? `badge--${e.size}` : null,
        e.type ? `badge--${e.type}` : null,
        { "badge--clickable": t.value }
      ]]),
      to: e.to,
      href: e.href,
      onClick: e.click
    }, {
      default: w(() => [
        h("span", {
          class: m(["badge__inner", { "skeleton__background-color": e.skeleton }])
        }, [
          e.text ? (a(), d("span", {
            key: 0,
            "aria-hidden": e.alt ? "true" : null
          }, y(e.text), 9, ei)) : g(i.$slots, "default", { key: 1 }),
          e.alt ? (a(), d("span", ti, y(e.alt), 1)) : v("", !0)
        ], 2)
      ]),
      _: 3
    }, 8, ["class", "to", "href", "onClick"]));
  }
}, ni = { class: "badge-stack" }, gf = {
  __name: "UluBadgeStack",
  props: {
    /**
     * Array of props for each badge
     */
    items: Array
  },
  setup(e) {
    return (s, t) => (a(), d("ul", ni, [
      (a(!0), d(O, null, A(e.items, (n, i) => (a(), d("li", {
        class: "badge-stack__item",
        key: i
      }, [
        R(si, Z({ ref_for: !0 }, n), null, 16)
      ]))), 128))
    ]));
  }
}, oi = {
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
      return this.to ? Fe : this.href ? "a" : "button";
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
  const r = z("UluIcon");
  return a(), p(B(o.element), Z({
    class: ["button-verbose", [
      {
        "button-verbose--inline": t.inline,
        "button-verbose--full-width": t.fullWidth
      },
      n.resolvedModifiers
    ]]
  }, o.attrs), {
    default: w(() => [
      e.$slots.title || t.title ? (a(), p(B(t.titleElement), {
        key: 0,
        class: "button-verbose__title"
      }, {
        default: w(() => [
          g(e.$slots, "title", {}, () => [
            k(y(t.title), 1)
          ])
        ]),
        _: 3
      })) : v("", !0),
      e.$slots.default || t.body ? (a(), d("span", ii, [
        g(e.$slots, "default", {}, () => [
          k(y(t.body), 1)
        ])
      ])) : v("", !0),
      t.icon ? (a(), p(r, {
        key: 2,
        icon: t.icon,
        class: "button-verbose__icon",
        "aria-hidden": "true"
      }, null, 8, ["icon"])) : v("", !0)
    ]),
    _: 3
  }, 16, ["class"]);
}
const yf = /* @__PURE__ */ T(oi, [["render", ri]]), li = {
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
function ai(e, s, t, n, i, o) {
  return a(), d("div", {
    class: m(["callout", [n.resolvedModifiers, { "full-height": t.fullHeight }]])
  }, [
    g(e.$slots, "default")
  ], 2);
}
const pf = /* @__PURE__ */ T(li, [["render", ai]]), Mt = (e, s) => {
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
      validator: Mt
    },
    /**
     * Will make title a link to href
     */
    titleHref: {
      type: String,
      validator: Mt
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
}, ui = { class: "card__body" }, di = { class: "card__main" }, fi = ["href", "target"], hi = {
  key: 0,
  class: "card__aside"
}, mi = ["src", "alt"], gi = {
  key: 1,
  class: "card__footer"
};
function yi(e, s, t, n, i, o) {
  const r = z("router-link");
  return a(), p(B(o.resolvedElement), {
    class: m(["card", [
      {
        "card--horizontal": t.horizontal || t.horizontalCenter,
        "card--horizontal-center": t.horizontalCenter,
        "card--overlay": t.overlay
      },
      n.resolvedModifiers
    ]]),
    onMousedown: o.onMousedown,
    onMouseup: o.onMouseup,
    style: L({ cursor: i.cursorStyle }),
    target: t.target,
    to: t.to,
    href: t.href,
    "data-ulu-proxy-click-init": i.proxyClickEnabled
  }, {
    default: w(() => [
      h("div", ui, [
        h("div", di, [
          (a(), p(B(t.titleElement), {
            class: m(["card__title", t.classes.title])
          }, {
            default: w(() => [
              t.titleTo ? (a(), p(r, {
                key: 0,
                class: "card__title-link",
                to: t.titleTo,
                ref: "link"
              }, {
                default: w(() => [
                  g(e.$slots, "title", {}, () => [
                    k(y(t.title), 1)
                  ])
                ]),
                _: 3
              }, 8, ["to"])) : t.titleHref ? (a(), d("a", {
                key: 1,
                class: "card__title-link",
                href: t.titleHref,
                target: t.titleTarget,
                ref: "link"
              }, [
                g(e.$slots, "title", {}, () => [
                  k(y(t.title), 1)
                ])
              ], 8, fi)) : g(e.$slots, "title", { key: 2 }, () => [
                k(y(t.title), 1)
              ])
            ]),
            _: 3
          }, 8, ["class"])),
          g(e.$slots, "body")
        ]),
        e.$slots.aside ? (a(), d("div", hi, [
          g(e.$slots, "aside")
        ])) : v("", !0)
      ]),
      e.$slots.image || t.imageSrc ? (a(), d("div", {
        key: 0,
        class: m(["card__image", [
          { "card__image--icon": t.imageIcon },
          t.classes.image
        ]])
      }, [
        g(e.$slots, "image", {}, () => [
          h("img", {
            src: t.imageSrc,
            alt: t.imageAlt
          }, null, 8, mi)
        ])
      ], 2)) : v("", !0),
      e.$slots.footer ? (a(), d("div", gi, [
        g(e.$slots, "footer")
      ])) : v("", !0)
    ]),
    _: 3
  }, 40, ["onMousedown", "onMouseup", "class", "style", "target", "to", "href", "data-ulu-proxy-click-init"]);
}
const vf = /* @__PURE__ */ T(ci, [["render", yi]]), _f = {
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
    return (s, t) => (a(), d("dl", {
      class: m(e.classes.list)
    }, [
      (a(!0), d(O, null, A(e.items, (n, i) => (a(), d("div", {
        key: i,
        class: m(e.classes.item)
      }, [
        h("dt", {
          class: m(e.classes.term)
        }, [
          g(s.$slots, "term", {
            item: n,
            index: i
          }, () => [
            k(y(n.term), 1)
          ])
        ], 2),
        h("dd", {
          class: m(e.classes.description)
        }, [
          g(s.$slots, "description", {
            item: n,
            index: i
          }, () => [
            k(y(n.description), 1)
          ])
        ], 2)
      ], 2))), 128))
    ], 2));
  }
}, pi = ["href", "target"], vi = { class: "external-link__text" }, bf = {
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
    return (s, t) => (a(), d("a", {
      class: "external-link",
      href: e.href,
      target: e.target
    }, [
      h("span", vi, [
        g(s.$slots, "default", {}, () => [
          k(y(e.text), 1)
        ])
      ]),
      R(V, {
        class: "external-link__icon margin-left-small-x display-inline",
        icon: e.icon || "type:externalLink"
      }, null, 8, ["icon"])
    ], 8, pi));
  }
}, wf = {
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
    return (n, i) => (a(), p(B(t.value), {
      class: m([
        {
          "list-ordered": e.ordered,
          "list-unordered": e.unordered,
          "list-lines": e.lines,
          "list-compact": e.compact
        },
        e.classes.list
      ]),
      style: L({
        listStyleType: e.listStyleType
      }),
      reversed: e.reversed,
      start: e.start
    }, {
      default: w(() => [
        (a(!0), d(O, null, A(e.items, (o, r) => (a(), d("li", {
          key: r,
          class: m(e.classes.listItem)
        }, [
          g(n.$slots, "default", {
            item: o,
            index: r
          }, () => [
            k(y(o), 1)
          ])
        ], 2))), 128))
      ]),
      _: 3
    }, 8, ["class", "style", "reversed", "start"]));
  }
}, _i = {}, bi = { id: "main-content" };
function wi(e, s) {
  return a(), d("main", bi, [
    g(e.$slots, "default")
  ]);
}
const Sf = /* @__PURE__ */ T(_i, [["render", wi]]), Si = { class: "spoke-spinner__spinner" }, kf = {
  __name: "UluSpokeSpinner",
  props: {
    /**
     * Type modifier for spinner (ie match scss style name)
     */
    type: String
  },
  setup(e) {
    return (s, t) => (a(), d("div", {
      class: m(["spoke-spinner", { [`spoke-spinner--${e.type}`]: e.type }])
    }, [
      h("div", Si, [
        (a(), d(O, null, A(12, (n) => h("div", { key: n })), 64))
      ])
    ], 2));
  }
}, ki = ["role", "aria-labelledby"], Ci = ["id"], Ti = { class: "menu-stack__list" }, $i = { class: "menu-stack__selectable" }, Ai = ["type", "id", "name", "value", "checked", "onChange"], Oi = ["for"], xs = {
  __name: "UluSelectableMenu",
  props: {
    legend: String,
    options: Array,
    type: {
      type: String,
      default: "checkbox"
    },
    modelValue: [String, Array],
    hideInputs: Boolean
  },
  emits: ["update:modelValue"],
  setup(e, { emit: s }) {
    const t = e, n = s, i = S(() => t.legend ? t.legend.toLowerCase().replace(/\s+/g, "-") : `menu-${Math.random().toString(36).substring(7)}`), o = S(() => i.value ? `${i.value}-legend` : null), r = S(() => t.type === "radio" ? "radiogroup" : "group"), l = (f) => `${i.value}-${f.uid}`, c = (f) => t.type === "radio" ? t.modelValue === f.uid : Array.isArray(t.modelValue) ? t.modelValue.includes(f.uid) : t.type === "checkbox" && f.checked || !1, u = (f, _) => {
      if (t.type === "radio")
        n("update:modelValue", f.uid);
      else if (Array.isArray(t.modelValue)) {
        const b = [...t.modelValue], x = b.indexOf(f.uid);
        x > -1 ? b.splice(x, 1) : b.push(f.uid), n("update:modelValue", b);
      } else
        f.checked = _.target.checked;
    };
    return (f, _) => (a(), d("div", {
      class: m(["menu-stack form-theme", { "menu-stack--hide-inputs": e.hideInputs }]),
      role: r.value,
      "aria-labelledby": o.value
    }, [
      e.legend ? (a(), d("div", {
        key: 0,
        id: o.value,
        class: "hidden-visually"
      }, y(e.legend), 9, Ci)) : v("", !0),
      h("ul", Ti, [
        (a(!0), d(O, null, A(e.options, (b) => (a(), d("li", {
          class: "menu-stack__item",
          key: b.uid
        }, [
          h("div", $i, [
            h("input", {
              type: e.type,
              id: l(b),
              name: i.value,
              value: b.uid,
              checked: c(b),
              onChange: (x) => u(b, x)
            }, null, 40, Ai),
            h("label", {
              for: l(b)
            }, [
              g(f.$slots, "default", { option: b }, () => [
                k(y(b?.label || b?.title || b?.text), 1)
              ])
            ], 8, Oi)
          ])
        ]))), 128))
      ])
    ], 10, ki));
  }
}, xi = ["href", "download"], Ri = { class: "margin-left-small-x" }, Cf = {
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
    const s = e, t = S(() => typeof window > "u" ? "" : window.URL.createObjectURL(s.file)), n = S(() => {
      const { size: i } = s.file, o = i / 1e6, r = i / 1e3, l = (c) => parseFloat(c.toFixed(2));
      return o > 1 ? `${l(o)}Mb` : r > 1 ? `${l(r)}Kb` : `${l(i)}B`;
    });
    return (i, o) => (a(), d("a", {
      class: "layout-flex-baseline",
      href: t.value,
      download: e.file.name
    }, [
      g(i.$slots, "default", {
        fileName: e.file.name,
        fileSize: n.value
      }, () => [
        R(V, {
          class: "ui-icon",
          icon: e.icon
        }, null, 8, ["icon"]),
        h("span", Ri, [
          k(y(e.file.name) + " ", 1),
          e.noFileSize ? v("", !0) : (a(), p(Cs, {
            key: 0,
            text: n.value,
            small: "",
            outline: ""
          }, null, 8, ["text"]))
        ])
      ])
    ], 8, xi));
  }
}, Ui = { class: "site-form__item site-form__item--file" }, ji = ["for"], Ii = ["multiple", "id"], Tf = {
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
    return (r, l) => (a(), d("div", Ui, [
      h("label", {
        class: m({ "hidden-visually": e.labelHidden }),
        for: C(i)
      }, [
        g(r.$slots, "label", {}, () => [
          k(y(e.label), 1)
        ])
      ], 10, ji),
      h("input", Z({
        type: "file",
        onChange: o,
        multiple: e.multiple,
        id: C(i)
      }, e.inputAttrs), null, 16, Ii)
    ]));
  }
}, $f = {
  __name: "UluFormMessage",
  props: {
    warning: Boolean,
    error: Boolean
  },
  setup(e) {
    return (s, t) => (a(), d("p", {
      class: m(["site-form__description", {
        "site-form__error": e.error,
        "site-form__warning": e.warning
      }])
    }, [
      e.error || e.warning ? (a(), p(V, {
        key: 0,
        icon: `type:${e.error ? "error" : "warning"}`
      }, null, 8, ["icon"])) : v("", !0),
      g(s.$slots, "default")
    ], 2));
  }
}, Ei = { class: "site-form__item site-form__item--select" }, zi = ["for"], Mi = ["id", "value"], Bi = ["value"], Af = {
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
    return (n, i) => (a(), d("div", Ei, [
      h("label", {
        class: m({ "hidden-visually": e.labelHidden }),
        for: C(t)
      }, [
        g(n.$slots, "default", {}, () => [
          k(y(e.label), 1)
        ])
      ], 10, zi),
      h("select", {
        id: C(t),
        value: e.modelValue,
        onInput: i[0] || (i[0] = (o) => n.$emit("update:modelValue", o.target.value))
      }, [
        i[1] || (i[1] = h("option", {
          disabled: "",
          value: ""
        }, "Please select one", -1)),
        (a(!0), d(O, null, A(e.options, (o, r) => (a(), d("option", {
          key: r,
          value: o.value
        }, y(o.text), 9, Bi))), 128))
      ], 40, Mi)
    ]));
  }
}, Pi = { class: "site-form__item site-form__item--text" }, Li = ["for"], Hi = ["value", "id"], Of = {
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
    return (n, i) => (a(), d("div", Pi, [
      h("label", {
        class: m({ "hidden-visually": e.labelHidden }),
        for: C(t)
      }, [
        g(n.$slots, "default", {}, () => [
          k(y(e.label), 1)
        ])
      ], 10, Li),
      h("input", {
        type: "text",
        value: e.modelValue,
        onInput: i[0] || (i[0] = (o) => n.$emit("update:modelValue", o.target.value)),
        id: C(t)
      }, null, 40, Hi)
    ]));
  }
}, Fi = { class: "form-theme search-form type-small" }, Vi = { class: "search-form__field" }, Di = ["placeholder"], Ni = {
  class: "search-form__submit button button--primary",
  "aria-label": "Submit Search"
}, xf = {
  __name: "UluSearchForm",
  props: {
    placeholder: {
      type: String,
      default: "Titles, keyword…"
    }
  },
  setup(e) {
    return (s, t) => (a(), d("div", Fi, [
      h("div", Vi, [
        t[0] || (t[0] = h("label", { class: "hidden-visually" }, "Search", -1)),
        h("input", {
          class: "search-form__input",
          type: "text",
          id: "example-input",
          placeholder: e.placeholder
        }, null, 8, Di)
      ]),
      h("button", Ni, [
        R(V, { icon: "type:search" })
      ])
    ]));
  }
}, Rf = {
  __name: "UluAdaptiveLayout",
  setup(e) {
    const s = Ro("uluIsMobile");
    return (t, n) => !C(s) || !t.$slots.mobile ? g(t.$slots, "default", { key: 0 }) : g(t.$slots, "mobile", { key: 1 });
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
    r === 0 && o.forEach((l) => l.classList.add(s.rowFirst)), r == n.length - 1 && o.forEach((l) => l.classList.add(s.rowLast)), o.forEach((l, c) => {
      c === 0 && l.classList.add(s.columnFirst), c == o.length - 1 && l.classList.add(s.columnLast);
    });
  });
}
const qi = {
  name: "UluDataGrid",
  async mounted() {
    const e = () => Xi(this.$el);
    e(), this.resizeHandler = De(e, 200, !1, this), window.addEventListener("resize", this.resizeHandler);
  },
  beforeUnmount() {
    this.resizeHandler && window.removeEventListener("resize", this.resizeHandler);
  }
};
function Yi(e, s, t, n, i, o) {
  return a(), d("div", null, [
    g(e.$slots, "default")
  ]);
}
const Uf = /* @__PURE__ */ T(qi, [["render", Yi]]), Ki = {
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
}, Gi = {
  key: 0,
  class: "rail__item rail__item--pull"
};
function Zi(e, s, t, n, i, o) {
  const r = z("UluIcon");
  return a(), d("div", {
    class: m(["rail rail--title-rail", {
      "rail--rule": t.rule
    }])
  }, [
    h("div", {
      class: m(["rail__item rail__item--title", t.classes.itemTitle])
    }, [
      (a(), p(B(t.titleElement), {
        class: m(["layout-flex type-max-width-small no-margin", t.classes.title]),
        style: L({ alignItems: t.iconAlign })
      }, {
        default: w(() => [
          t.icon ? (a(), p(r, {
            key: 0,
            class: m(t.classes.icon),
            icon: t.icon
          }, null, 8, ["class", "icon"])) : v("", !0),
          g(e.$slots, "default", {}, () => [
            k(y(t.title), 1)
          ])
        ]),
        _: 3
      }, 8, ["class", "style"]))
    ], 2),
    e.$slots.end ? (a(), d("div", Gi, [
      g(e.$slots, "end")
    ])) : v("", !0)
  ], 2);
}
const jf = /* @__PURE__ */ T(Ki, [["render", Zi]]), Ji = {
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
        current: "breadcrumb__current",
        separator: "breadcrumb__separator"
      })
    }
  }
};
function Qi(e, s, t, n, i, o) {
  const r = z("router-link"), l = z("UluIcon");
  return t.items.length ? (a(), d("nav", {
    key: 0,
    class: m(t.classes.nav),
    "aria-label": "Breadcrumb"
  }, [
    h("ol", {
      class: m(t.classes.list)
    }, [
      (a(!0), d(O, null, A(t.items, (c, u) => (a(), d("li", {
        key: u,
        class: m(t.classes.item)
      }, [
        c.current ? (a(), d("span", {
          key: 1,
          class: m(c.current)
        }, [
          g(e.$slots, "default", { item: c }, () => [
            k(y(c.title), 1)
          ])
        ], 2)) : (a(), p(r, {
          key: 0,
          to: c.to,
          class: m(t.classes.link),
          "aria-current": c.current ? "page" : null
        }, {
          default: w(() => [
            g(e.$slots, "default", { item: c }, () => [
              k(y(c.title), 1)
            ])
          ]),
          _: 2
        }, 1032, ["to", "class", "aria-current"])),
        u < t.items.length - 1 ? g(e.$slots, "separator", { key: 2 }, () => [
          R(l, {
            class: m(t.classes.separator),
            icon: t.separatorIcon || "type:pathSeparator"
          }, null, 8, ["class", "icon"])
        ]) : v("", !0)
      ], 2))), 128))
    ], 2)
  ], 2)) : v("", !0);
}
const If = /* @__PURE__ */ T(Ji, [["render", Qi]]), er = {
  name: "UluNavStrip",
  components: {
    UluMenu: Ts
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
  const r = z("UluMenu");
  return a(), d("nav", {
    class: m(["nav-strip", {
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
const Ef = /* @__PURE__ */ T(er, [["render", tr]]), sr = {}, nr = {
  class: "site-skip-link hidden-visually-focusable",
  href: "#main-content"
};
function or(e, s) {
  return a(), d("a", nr, " Skip to main content ");
}
const zf = /* @__PURE__ */ T(sr, [["render", or]]), ir = {
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
  return t.text != null ? (a(), p(B(t.element), { key: 0 }, {
    default: w(() => [
      k(y(t.text), 1)
    ]),
    _: 1
  })) : v("", !0);
}
const Mf = /* @__PURE__ */ T(ir, [["render", rr]]), lr = {}, ar = { style: { display: "none" } };
function cr(e, s) {
  return a(), d("span", ar);
}
const Bf = /* @__PURE__ */ T(lr, [["render", cr]]), ur = {};
function dr(e, s) {
  const t = z("router-view");
  return a(), p(t);
}
const Pf = /* @__PURE__ */ T(ur, [["render", dr]]);
function Pe(e = 0, s = 100) {
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
        width: Pe(500, 1e3),
        height: Pe(500, 1e3)
      } : { width: s, height: t };
    }
  }
}, hr = ["src", "alt"];
function mr(e, s, t, n, i, o) {
  return a(), d("img", {
    src: o.src,
    alt: t.alt
  }, null, 8, hr);
}
const Lf = /* @__PURE__ */ T(fr, [["render", mr]]), gr = {
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
function yr(e, s, t, n, i, o) {
  return a(!0), d(O, null, A(parseInt(t.amount), (r) => (a(), p(B(t.element), { key: r }, {
    default: w(() => [...s[0] || (s[0] = [
      k(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed semper erat tincidunt tellus vestibulum dictum. Fusce vel augue commodo, egestas diam sed, accumsan leo. Maecenas congue nec nisl et ullamcorper. Maecenas tincidunt, tortor et viverra eleifend, enim leo vestibulum ipsum, quis placerat mi nisi nec ex. Vivamus a justo volutpat, scelerisque elit eget, lacinia ex. Phasellus dapibus sollicitudin tortor, vitae suscipit nunc condimentum ut. Cras suscipit feugiat nibh nec consectetur. Phasellus vitae quam blandit, cursus metus ut, placerat mi. Sed tempor lacus non est interdum imperdiet nec quis metus. Praesent vel eleifend diam. Donec tincidunt eget purus sed posuere. ", -1)
    ])]),
    _: 2
  }, 1024))), 128);
}
const Hf = /* @__PURE__ */ T(gr, [["render", yr]]), pr = {
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
  return o.title ? (a(), d("p", {
    key: 0,
    tabindex: "-1",
    class: "hidden-visually",
    ref: "el"
  }, y(o.title), 513)) : v("", !0);
}
const Ff = /* @__PURE__ */ T(pr, [["render", vr]]), _r = {
  name: "AnimateNumber",
  props: {
    /**
     * Number to animate as it changes
     */
    value: Number
  },
  watch: {
    value() {
      vn.to(this, {
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
  return a(), d("span", null, [
    g(e.$slots, "default", { currentValue: i.currentValue }, () => [
      k(y(i.currentValue), 1)
    ])
  ]);
}
const Vf = /* @__PURE__ */ T(_r, [["render", br]]), wr = {
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
}, xr = { class: "progress-bar__value progress-bar__value--total" };
function Rr(e, s, t, n, i, o) {
  const r = z("StatusIcon");
  return a(), d("div", {
    class: m(["progress-bar", {
      "progress-bar--small": t.small,
      "progress-bar--icon-left": t.iconOnLeft,
      "type-small": t.small
    }])
  }, [
    h("div", Sr, [
      h("strong", {
        class: m(["progress-bar__label", {
          "type-normal": t.small,
          "hidden-visually": t.labelHidden
        }])
      }, y(t.label), 3),
      o.status ? (a(), d("div", kr, [
        R(r, {
          type: o.status.type
        }, null, 8, ["type"]),
        h("span", Cr, y(o.status.message), 1)
      ])) : v("", !0)
    ]),
    h("div", Tr, [
      h("div", {
        class: "progress-bar__bar",
        style: L(`width: ${o.percentage}%`)
      }, null, 4),
      t.deficit ? (a(), d("div", {
        key: 0,
        class: "progress-bar__bar--deficit",
        style: L(`width: ${o.defPercentage}%`)
      }, null, 4)) : v("", !0)
    ]),
    h("div", $r, [
      h("div", Ar, [
        s[0] || (s[0] = h("strong", { class: "hidden-visually" }, "Amount:", -1)),
        k(" " + y(t.amount), 1)
      ]),
      t.deficit > 0 ? (a(), d("div", Or, [
        s[1] || (s[1] = h("strong", { class: "hidden-visually" }, "Deficit: ", -1)),
        k(" -" + y(t.deficit), 1)
      ])) : v("", !0),
      h("div", xr, [
        s[2] || (s[2] = h("strong", { class: "hidden-visually" }, "Total:", -1)),
        k(" " + y(t.total), 1)
      ])
    ])
  ], 2);
}
const Df = /* @__PURE__ */ T(wr, [["render", Rr]]);
let Ur = 0;
const jr = {
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
}, Ir = { class: "progress-donut__chart" }, Er = {
  class: "progress-donut__chart-svg",
  viewBox: "0 0 32 32"
}, zr = ["r"], Mr = {
  key: 0,
  class: "progress-donut__chart-value"
}, Br = {
  key: 0,
  class: "progress-donut__value type-small-x"
};
function Pr(e, s, t, n, i, o) {
  return a(), d("div", {
    class: m(["progress-donut", {
      "progress-donut--small": t.small,
      "progress-donut--small-below": t.smallBelow,
      "progress-donut--status-low": !t.neutral && t.percentage < 30,
      "progress-donut--status-incomplete": !t.neutral && t.percentage >= 30 && t.percentage < 100,
      "progress-donut--status-complete": !t.neutral && t.percentage >= 100
    }])
  }, [
    s[0] || (s[0] = h("strong", { class: "hidden-visually" }, "Course Progress", -1)),
    h("div", Ir, [
      (a(), d("svg", Er, [
        h("circle", {
          class: "progress-donut__chart-pie",
          ref: "pie",
          r: "16",
          cx: "16",
          cy: "16",
          style: L({ strokeDasharray: o.endDasharray })
        }, null, 4),
        h("circle", {
          class: "progress-donut__chart-mask",
          r: t.small ? 7 : 11,
          cx: "16",
          cy: "16"
        }, null, 8, zr)
      ])),
      t.small ? v("", !0) : (a(), d("strong", Mr, y(t.percentage) + "% ", 1))
    ]),
    t.small ? (a(), d("strong", Br, y(t.percentage) + "% ", 1)) : v("", !0)
  ], 2);
}
const Nf = /* @__PURE__ */ T(jr, [["render", Pr]]);
function Lr(e, s) {
  return !s || !Array.isArray(s) ? [] : s.map((t) => {
    const n = /* @__PURE__ */ new Set(), i = t.getValue || ((l) => l[t.uid]);
    e.forEach((l) => {
      const c = i(l);
      Array.isArray(c) ? c.forEach((u) => u && n.add(u)) : c && n.add(c);
    });
    const o = t.getLabel || ((l) => l), r = [...n].map((l) => ({
      uid: l,
      label: o(l),
      selected: !1
    }));
    return r.sort((l, c) => String(l.label).localeCompare(String(c.label))), {
      ...t,
      children: r
    };
  });
}
function Wf(e, s = {}) {
  const t = ($, P) => {
    const H = $[P];
    return H === null || typeof H > "u" ? [] : Array.isArray(H) ? H : [H];
  }, {
    initialFacets: n,
    facetFields: i,
    initialSearchValue: o = "",
    initialSortType: r = "az",
    noDefaultSorts: l = !1,
    extraSortTypes: c = {},
    searchOptions: u = {},
    getItemFacet: f = t,
    getSortValue: _ = ($) => $.title || $.label || ""
  } = s, b = ($) => $.sort((P, H) => {
    const N = _(P), W = _(H);
    return N && W ? String(N).localeCompare(String(W)) : N ? -1 : W ? 1 : 0;
  }), x = {
    az: { text: "A-Z", sort: b },
    za: { text: "Z-A", sort: ($) => b($).reverse() }
  };
  function M($) {
    return ($ || []).map((P) => ({
      ...P,
      open: P.open || !1,
      children: P.children.map((H) => ({
        ...H,
        selected: H.selected || !1
      })),
      selectedCount: 0
    }));
  }
  const F = S(() => !i || !e.value?.length ? null : Lr(e.value, i)), U = E(M(n || F.value)), Q = E(o), Ae = E(r);
  i && !n && ds(F, ($) => {
    U.value = M($);
  });
  const Oe = S(() => ({
    ...l ? {} : x,
    ...c
  })), ce = S(() => ({
    shouldSort: !0,
    keys: ["title", "label", "description", "author"],
    ...u
  })), X = S(() => {
    const $ = [];
    return U.value.forEach((P) => {
      const { name: H, uid: N, children: W } = P;
      let ne = 0, Ct = !1;
      W && W.forEach((Tt) => {
        Tt.selected && (++ne, Ct || ($.push({ uid: N, name: H, children: [] }), Ct = !0), $[$.length - 1].children.push(Tt));
      }), P.selectedCount = ne;
    }), $;
  }), xe = S(() => X.value.length ? e.value.filter(($) => X.value.every((P) => {
    const H = f($, P.uid);
    return H && H.length ? P.children.some((N) => H.includes(N.uid)) : !1;
  })) : e.value), pe = S(() => Q.value?.length ? new _n(xe.value, ce.value).search(Q.value).map((P) => P.item) : xe.value), Re = S(() => {
    const $ = Oe.value[Ae.value]?.sort;
    return typeof $ != "function" ? pe.value : $([...pe.value]);
  });
  function D() {
    U.value.forEach(($) => {
      $.children && $.children.forEach((P) => P.selected = !1);
    });
  }
  function ee({ groupUid: $, facetUid: P, selected: H }) {
    const N = U.value.find((W) => W.uid === $);
    if (N) {
      !N.multiple && H && N.children.forEach((ne) => {
        ne.uid !== P && (ne.selected = !1);
      });
      const W = N.children.find((ne) => ne.uid === P);
      W && (W.selected = H);
    }
  }
  return {
    // State
    facets: U,
    searchValue: Q,
    selectedSort: Ae,
    sortTypes: Oe,
    // Computed
    displayItems: Re,
    selectedFacets: X,
    // Methods
    clearFilters: D,
    handleFacetChange: ee
  };
}
const Bt = {
  __name: "UluFacetsList",
  props: {
    groupUid: String,
    groupName: String,
    children: Array,
    type: {
      type: String,
      default: "checkbox"
    },
    modelValue: [String, Array]
  },
  emits: ["facet-change"],
  setup(e, { emit: s }) {
    const t = e, n = s, i = S(() => t.type === "radio" ? [{ label: `All ${t.groupName}s`, uid: "" }, ...t.children] : t.children);
    function o(r) {
      if (t.type === "radio") {
        const l = r;
        t.children.forEach((c) => {
          const u = c.uid === l;
          c.selected !== u && n("facet-change", {
            groupUid: t.groupUid,
            facetUid: c.uid,
            selected: u
          });
        });
      } else {
        const l = new Set(r);
        t.children.forEach((c) => {
          const u = l.has(c.uid);
          c.selected !== u && n("facet-change", {
            groupUid: t.groupUid,
            facetUid: c.uid,
            selected: u
          });
        });
      }
    }
    return (r, l) => (a(), p(xs, {
      class: "ulu-facets__facet-list",
      legend: e.groupUid,
      type: e.type,
      options: i.value,
      "model-value": e.modelValue,
      "onUpdate:modelValue": o
    }, {
      default: w(({ option: c }) => [
        k(y(c.label), 1)
      ]),
      _: 1
    }, 8, ["legend", "type", "options", "model-value"]));
  }
}, Hr = { class: "UluFacetsFilters" }, Xf = {
  __name: "UluFacetsFilterLists",
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
    const t = s, n = (i) => i.multiple ? i.children.filter((o) => o.selected).map((o) => o.uid) : i.children.find((o) => o.selected)?.uid || "";
    return (i, o) => (a(), d("div", Hr, [
      (a(!0), d(O, null, A(e.facets, (r) => (a(), p(It, {
        class: m(["ulu-facets__group", e.classes.group]),
        classToggle: ["ulu-facets__group-toggle", e.classes.groupToggle],
        classContent: ["ulu-facets__group-content", e.classes.groupContent],
        key: r.uid,
        group: r,
        startOpen: r.open,
        clickOutsideCloses: !1,
        closeOnEscape: !1,
        transitionHeight: !0
      }, {
        toggle: w(({ isOpen: l }) => [
          g(i.$slots, "groupToggle", {
            group: r,
            isOpen: l
          }, () => [
            k(y(r.name), 1)
          ])
        ]),
        default: w(() => [
          R(Bt, {
            children: r.children.slice(0, e.maxVisible),
            groupUid: r.uid,
            groupName: r.name,
            type: r.multiple ? "checkbox" : "radio",
            "model-value": n(r),
            onFacetChange: o[0] || (o[0] = (l) => t("facet-change", l))
          }, null, 8, ["children", "groupUid", "groupName", "type", "model-value"]),
          r.children.length > e.maxVisible ? (a(), p(It, {
            key: 0,
            class: m(["ulu-facets__more-facets", e.classes.moreFacets]),
            clickOutsideCloses: !1,
            closeOnEscape: !1,
            transitionHeight: !0
          }, {
            toggle: w(({ isOpen: l }) => [
              k(y(l ? "- Less" : "+ More"), 1)
            ]),
            default: w(() => [
              R(Bt, {
                children: r.children.slice(e.maxVisible),
                groupUid: r.uid,
                groupName: r.name,
                type: r.multiple ? "checkbox" : "radio",
                "model-value": n(r),
                onFacetChange: o[1] || (o[1] = (l) => t("facet-change", l))
              }, null, 8, ["children", "groupUid", "groupName", "type", "model-value"])
            ]),
            _: 2
          }, 1032, ["class"])) : v("", !0)
        ]),
        _: 2
      }, 1032, ["class", "classToggle", "classContent", "group", "startOpen"]))), 128))
    ]));
  }
}, qf = {
  __name: "UluFacetsFilterPopovers",
  props: {
    facets: {
      type: Array,
      default: () => []
    },
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
    hideInputs: Boolean
  },
  emits: ["facet-change"],
  setup(e, { emit: s }) {
    const t = s, n = (l) => l.multiple ? l.children : [{ label: `All ${l.name}s`, uid: "" }, ...l.children], i = (l) => l.multiple ? l.children.filter((c) => c.selected).map((c) => c.uid) : l.children.find((c) => c.selected)?.uid || "", o = (l) => {
      const c = l.children.filter((f) => f.selected), u = c.length;
      return u === 0 ? "All" : l.multiple ? u === 1 ? c[0].label : `${u} selected` : c[0].label;
    };
    function r(l, c, u) {
      if (l.multiple) {
        const f = new Set(c);
        l.children.forEach((_) => {
          const b = f.has(_.uid);
          _.selected !== b && t("facet-change", {
            groupUid: l.uid,
            facetUid: _.uid,
            selected: b
          });
        });
      } else {
        const f = c;
        l.children.forEach((_) => {
          const b = _.uid === f;
          _.selected !== b && t("facet-change", {
            groupUid: l.uid,
            facetUid: _.uid,
            selected: b
          });
        }), u();
      }
    }
    return (l, c) => (a(), d("div", {
      class: m(e.classes.container)
    }, [
      (a(!0), d(O, null, A(e.facets, (u) => (a(), d("div", {
        key: u.uid,
        class: m(e.classes.group)
      }, [
        R(Ve, {
          classes: {
            trigger: e.classes.trigger,
            content: e.classes.content
          }
        }, {
          trigger: w(() => [
            g(l.$slots, "trigger", {
              group: u,
              label: o(u)
            }, () => [
              h("span", null, [
                k(y(u.name) + ": ", 1),
                h("strong", null, y(o(u)), 1)
              ])
            ]),
            R(V, {
              class: m(e.classes.triggerIcon),
              icon: "fas fa-chevron-down"
            }, null, 8, ["class"])
          ]),
          content: w(({ close: f }) => [
            R(xs, {
              legend: u.name,
              type: u.multiple ? "checkbox" : "radio",
              options: n(u),
              "model-value": i(u),
              "onUpdate:modelValue": (_) => r(u, _, f),
              hideInputs: e.hideInputs
            }, null, 8, ["legend", "type", "options", "model-value", "onUpdate:modelValue", "hideInputs"])
          ]),
          _: 2
        }, 1032, ["classes"])
      ], 2))), 128))
    ], 2));
  }
}, Fr = { class: "facets-dropdown-filters" }, Vr = ["for"], Dr = ["id", "onChange"], Nr = { value: "" }, Wr = ["value", "selected"], Yf = {
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
    function n(i, o) {
      const r = o.target.value;
      i.children.find((c) => c.selected)?.uid !== r && i.children.forEach((c) => {
        const u = c.uid === r;
        c.selected !== u && t("facet-change", {
          groupUid: i.uid,
          facetUid: c.uid,
          selected: u
        });
      });
    }
    return (i, o) => (a(), d("div", Fr, [
      (a(!0), d(O, null, A(e.facets, (r) => (a(), d("div", {
        class: "facets-dropdown-filters__group",
        key: r.uid
      }, [
        h("label", {
          for: `facet-dropdown-${r.uid}`,
          class: "facets-dropdown-filters__label"
        }, y(r.name), 9, Vr),
        h("select", {
          id: `facet-dropdown-${r.uid}`,
          class: "facets-dropdown-filters__select",
          onChange: (l) => n(r, l)
        }, [
          h("option", Nr, "All " + y(r.name) + "s", 1),
          (a(!0), d(O, null, A(r.children, (l) => (a(), d("option", {
            key: l.uid,
            value: l.uid,
            selected: l.selected
          }, y(l.label), 9, Wr))), 128))
        ], 40, Dr)
      ]))), 128))
    ]));
  }
}, Xr = { class: "facets-header-layout" }, qr = { class: "facets-header-layout__header" }, Yr = { class: "facets-header-layout__main" }, Kf = {
  __name: "UluFacetsHeaderLayout",
  setup(e) {
    return (s, t) => (a(), d("div", Xr, [
      h("div", qr, [
        g(s.$slots, "header")
      ]),
      h("div", Yr, [
        g(s.$slots, "main")
      ])
    ]));
  }
}, Kr = { class: "facets-results" }, Gr = {
  key: 1,
  class: "facets-results__empty"
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
      default: "facets-fade"
    },
    classes: {
      type: Object,
      default: () => ({})
    }
  },
  setup(e) {
    return (s, t) => (a(), d("div", Kr, [
      e.items.length ? (a(), p(us, {
        key: 0,
        tag: e.tag,
        name: e.transitionName,
        class: m(["facets-results__list", e.classes.list])
      }, {
        default: w(() => [
          (a(!0), d(O, null, A(e.items, (n, i) => (a(), d("li", {
            class: m(["facets-results__item", e.classes.item]),
            key: n.id || i
          }, [
            g(s.$slots, "item", {
              item: n,
              index: i
            })
          ], 2))), 128))
        ]),
        _: 3
      }, 8, ["tag", "name", "class"])) : (a(), d("div", Gr, [
        g(s.$slots, "empty", {}, () => [
          t[0] || (t[0] = h("p", null, "No matching items found.", -1))
        ])
      ]))
    ]));
  }
}, Zr = { class: "ulu-facets__keyword-search" }, Jr = ["placeholder"], Zf = {
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
    const o = `facet-view-keyword-${++i}`, r = S({
      get() {
        return t.modelValue;
      },
      set(l) {
        n("update:modelValue", l);
      }
    });
    return (l, c) => (a(), d("div", Zr, [
      h("label", {
        class: m(e.classes.searchLabel),
        for: o
      }, [...c[1] || (c[1] = [
        h("strong", null, "Search", -1)
      ])], 2),
      ie(h("input", {
        id: o,
        class: m(e.classes.searchInput),
        "onUpdate:modelValue": c[0] || (c[0] = (u) => r.value = u),
        type: "text",
        placeholder: e.placeholder
      }, null, 10, Jr), [
        [an, r.value]
      ])
    ]));
  }
}, Qr = { class: "facets-sidebar-layout__header" }, el = { class: "facets-sidebar-layout__mobile-controls" }, tl = { class: "facets-sidebar-layout__body" }, sl = { class: "facets-sidebar-layout__main" }, Jf = {
  __name: "UluFacetsSidebarLayout",
  setup(e) {
    const s = E(!1), t = He("uluIsMobile"), n = E(null), i = E(null), o = S(() => t.value ? i.value : n.value);
    return (r, l) => (a(), d("div", {
      class: m(["facets-sidebar-layout", { "facets-sidebar-layout--filters-hidden": C(t) }])
    }, [
      h("div", Qr, [
        g(r.$slots, "header")
      ]),
      ie(h("div", el, [
        h("button", {
          class: "button",
          onClick: l[0] || (l[0] = (c) => s.value = !0)
        }, "Filters & Sort")
      ], 512), [
        [Me, C(t)]
      ]),
      h("div", tl, [
        ie(h("div", {
          class: "facets-sidebar-layout__sidebar",
          ref_key: "desktopTarget",
          ref: n
        }, null, 512), [
          [Me, !C(t)]
        ]),
        h("div", sl, [
          g(r.$slots, "main")
        ])
      ]),
      C(t) ? (a(), p(Ss, {
        key: 0,
        modelValue: s.value,
        "onUpdate:modelValue": l[1] || (l[1] = (c) => s.value = c),
        position: "right",
        title: "Filters & Sort",
        allowResize: ""
      }, {
        default: w(() => [
          h("div", {
            class: "facets-sidebar-layout__sidebar",
            ref_key: "mobileTarget",
            ref: i
          }, null, 512)
        ]),
        _: 1
      }, 8, ["modelValue"])) : v("", !0),
      o.value ? (a(), p(Le, {
        key: 1,
        to: o.value
      }, [
        g(r.$slots, "sidebar")
      ], 8, ["to"])) : v("", !0)
    ], 2));
  }
}, nl = ["for"], ol = ["value", "id"], il = ["value"], Qf = {
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
    const n = s, i = E(`ulu-facet-sort-${++t}`);
    return (o, r) => (a(), d("div", {
      class: m(["facets-sort", e.classes.sortForm])
    }, [
      h("label", {
        for: i.value,
        class: m(e.classes.sortFormLabel)
      }, [
        g(o.$slots, "default", {}, () => [
          r[1] || (r[1] = k("Sort:", -1))
        ])
      ], 10, nl),
      h("select", {
        value: e.modelValue,
        onChange: r[0] || (r[0] = (l) => n("update:modelValue", l.target.value)),
        id: i.value,
        class: m(e.classes.sortFormSelect)
      }, [
        (a(!0), d(O, null, A(e.sortTypes, (l, c) => (a(), d("option", {
          value: c,
          key: c
        }, y(l.text), 9, il))), 128))
      ], 42, ol)
    ], 2));
  }
}, Rs = Symbol(), Us = Symbol(), Xe = Symbol(), rl = {
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
      [Xe]: S(() => this.sections),
      [Rs]: (e) => {
        const { titleId: s, title: t } = e, { element: n } = e.$refs;
        this.sections.push({
          instance: e,
          titleId: s,
          title: t,
          element: n,
          active: !1
        }), this.update();
      },
      [Us]: (e) => {
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
        r.forEach(({ target: l, isIntersecting: c }) => {
          const u = this.getSectionIndex(l), f = l.offsetTop, _ = s[u], b = u === 0 && i > f, x = u === s.length - 1 && i < f;
          _ && this.$nextTick(() => {
            c ? (t(_), _.active = !0) : (b && !n || x && _.active) && t(), this.$emit("section-change", {
              section: _,
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
}, ll = { class: "scroll-anchors" };
function al(e, s, t, n, i, o) {
  return a(), d("div", ll, [
    g(e.$slots, "default")
  ]);
}
const eh = /* @__PURE__ */ T(rl, [["render", al]]), cl = {
  name: "ScrollAnchorsNav",
  inject: {
    sections: { from: Xe }
  },
  props: {
    element: {
      type: String,
      default: "nav"
    }
  }
}, ul = ["href"];
function dl(e, s, t, n, i, o) {
  return o.sections.length ? (a(), p(B(t.element), {
    key: 0,
    class: "scroll-anchors__nav"
  }, {
    default: w(() => [
      h("ul", null, [
        (a(!0), d(O, null, A(o.sections, (r, l) => (a(), d("li", {
          key: l,
          class: m({ "is-active": r.active })
        }, [
          h("a", {
            class: m({ "is-active": r.active }),
            href: `#${r.titleId}`
          }, y(r.title), 11, ul)
        ], 2))), 128))
      ])
    ]),
    _: 1
  })) : v("", !0);
}
const th = /* @__PURE__ */ T(cl, [["render", dl]]);
function js(e) {
  requestAnimationFrame(() => {
    const s = new MessageChannel();
    s.port1.onmessage = e, s.port2.postMessage(void 0);
  });
}
const fl = {
  name: "ScrollAnchorsNavAnimated",
  inject: {
    sections: { from: Xe }
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
      const n = e.findIndex((l) => l.active);
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
      e && !this.indicatorAnimReady && js(() => {
        this.indicatorAnimReady = !0;
      });
    }
  },
  methods: {
    addLinkRef(e, s) {
      this.linkRefs[e] = s;
    }
  }
}, hl = { class: "scroll-anchors__rail" }, ml = ["href"];
function gl(e, s, t, n, i, o) {
  return o.sections.length ? (a(), p(B(t.element), {
    key: 0,
    class: "scroll-anchors__nav scroll-anchors__nav--animated"
  }, {
    default: w(() => [
      h("ul", hl, [
        (a(!0), d(O, null, A(o.sections, (r, l) => (a(), d("li", {
          key: l,
          class: m({ "is-active": r.active })
        }, [
          h("a", {
            class: m({ "is-active": r.active }),
            ref_for: !0,
            ref: (c) => o.addLinkRef(l, c),
            href: `#${r.titleId}`
          }, y(r.title), 11, ml)
        ], 2))), 128))
      ]),
      h("div", {
        class: m(["scroll-anchors__indicator", {
          "scroll-anchors__indicator--can-transition": i.indicatorAnimReady
        }]),
        ref: "indicator",
        style: L({
          opacity: o.indicatorStyles ? "1" : "0",
          transform: `translateY(${o.indicatorStyles.y}px)`,
          height: `${o.indicatorStyles.height}px`
        })
      }, null, 6)
    ]),
    _: 1
  })) : v("", !0);
}
const sh = /* @__PURE__ */ T(fl, [["render", gl]]), yl = {
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
    register: { from: Rs },
    unregister: { from: Us },
    sections: { from: Xe, default: () => S(() => []) }
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
function pl(e, s, t, n, i, o) {
  return a(), d("div", {
    class: m([t.wrapperClass, { [t.activeClass]: t.activeClass && o.section?.active }]),
    ref: "element"
  }, [
    (a(), p(B(t.titleElement), {
      class: m(t.titleClass),
      id: i.titleId
    }, {
      default: w(() => [
        k(y(t.title), 1)
      ]),
      _: 1
    }, 8, ["class", "id"])),
    g(e.$slots, "default", { section: o.section })
  ], 2);
}
const nh = /* @__PURE__ */ T(yl, [["render", pl]]), vl = {
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
    return (s, t) => (a(), d("span", {
      class: m(["skeleton skeleton--text", {
        "skeleton--inline": e.inline,
        "skeleton--background-alt": e.alt,
        [`skeleton--width-${e.width}`]: e.width
      }])
    }, null, 2));
  }
}, oh = {
  __name: "UluShowSkeleton",
  props: {
    /**
     * If true will show whatever is passed to slot, else skeleton text
     */
    when: Boolean
  },
  setup(e) {
    return (s, t) => e.when ? (a(), p(vl, {
      key: 1,
      inline: ""
    })) : g(s.$slots, "default", { key: 0 });
  }
};
function _l(e, s) {
  return [...Array(e)].map((t, n) => s(n));
}
function ih(e, s) {
  var t = e.indexOf(s);
  t > -1 && e.splice(t, 1);
}
const rh = {
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
    const s = e, t = S(() => _l(s.lines, () => {
      const i = Pe(70, 100);
      let o = 0;
      const r = () => {
        const u = i - o, f = Pe(15, u);
        return o += f, f;
      }, l = [];
      for (; o < i - 15; )
        l.push(r());
      const c = () => l.reduce((u, f) => u + f, 0);
      for (; c() >= i && l.pop(); )
        ;
      return l.map((u) => ({ width: u, alt: Math.random() < 0.5 }));
    }));
    return (n, i) => (a(), d("div", null, [
      (a(!0), d(O, null, A(t.value, (o, r) => (a(), d("div", { key: r }, [
        (a(!0), d(O, null, A(o, (l) => (a(), d("span", {
          key: l,
          class: m(["skeleton skeleton--text skeleton--inline", { "skeleton--background-alt": l.alt }]),
          style: L({ width: `${l.width}%` })
        }, null, 6))), 128))
      ]))), 128))
    ]));
  }
}, bl = { class: "skeleton skeleton-block--media" }, lh = {
  __name: "UluSkeletonMedia",
  setup(e) {
    return (s, t) => (a(), d("div", bl, [
      R(V, { icon: "type:image" })
    ]));
  }
}, wl = {
  name: "SlideShow",
  emits: ["slide-change"],
  components: {
    UluIcon: V
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
}, Sl = { class: "slideshow" }, kl = {
  class: "slideshow__control-context",
  ref: "context"
}, Cl = {
  class: "slideshow__track-crop",
  ref: "crop"
}, Tl = {
  class: "slideshow__track",
  ref: "track"
}, $l = ["tabindex"], Al = { class: "slideshow__controls" }, Ol = { class: "slideshow__controls-item slideshow__controls-item--previous" }, xl = ["disabled"], Rl = { class: "slideshow__controls-item slideshow__controls-item--next" }, Ul = ["disabled"], jl = {
  key: 0,
  class: "slideshow__nav",
  ref: "nav"
}, Il = ["onClick"], El = { class: "hidden-visually" };
function zl(e, s, t, n, i, o) {
  const r = z("UluIcon");
  return a(), d("div", Sl, [
    h("div", kl, [
      h("div", Cl, [
        h("ul", Tl, [
          (a(!0), d(O, null, A(i.slides, (l, c) => (a(), d("li", {
            class: m(["slideshow__slide", { "is-active": l.active }]),
            key: c,
            tabindex: t.slideFocusable ? "0" : "-1",
            ref_for: !0,
            ref: (u) => {
              l.element = u;
            }
          }, [
            g(e.$slots, "slide", {
              item: l.item,
              index: c
            })
          ], 10, $l))), 128))
        ], 512)
      ], 512),
      h("ul", Al, [
        h("li", Ol, [
          h("button", {
            class: "slideshow__control-button slideshow__control-button--previous",
            "aria-label": "Scroll Right",
            onClick: s[0] || (s[0] = (...l) => o.previous && o.previous(...l)),
            disabled: !o.canScrollLeft
          }, [
            R(r, {
              class: "slideshow__control-icon",
              icon: "type:next"
            })
          ], 8, xl)
        ]),
        h("li", Rl, [
          h("button", {
            class: "slideshow__control-button slideshow__control-button--next",
            "aria-label": "Scroll Left",
            onClick: s[1] || (s[1] = (...l) => o.next && o.next(...l)),
            disabled: !o.canScrollRight
          }, [
            R(r, {
              class: "slideshow__control-icon",
              icon: "type:previous"
            })
          ], 8, Ul)
        ])
      ])
    ], 512),
    t.noNav ? v("", !0) : (a(), d("ul", jl, [
      (a(!0), d(O, null, A(i.slides, (l, c) => (a(), d("li", {
        class: m(["slideshow__nav-item", { "is-active": l.active }]),
        ref_for: !0,
        ref: (u) => {
          l.navElement = u;
        },
        key: c
      }, [
        h("button", {
          class: m(["slideshow__nav-button", { "is-active": l.active }]),
          onClick: (u) => o.to(c)
        }, [
          g(e.$slots, "nav", {
            item: l.item,
            index: c,
            active: l.active
          }, () => [
            h("span", El, "Item " + y(c + 1), 1)
          ])
        ], 10, Il)
      ], 2))), 128))
    ], 512))
  ]);
}
const Ml = /* @__PURE__ */ T(wl, [["render", zl]]), Bl = {
  name: "ImageSlideShow",
  components: {
    UluSlideShow: Ml
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
      const { offsetWidth: i, scrollLeft: o } = s, { offsetLeft: r, offsetWidth: l } = n, c = o + i, u = r + l;
      let f = null;
      console.log("left/right", o, c), t && n && (u > c ? f = o + (u - c) : r < o && (f = r), f !== null && s.scrollTo({ left: f, top: 0, behavior: "smooth" }));
    }
  }
}, Pl = ["src", "alt"], Ll = { class: "slideshow__image-actions" }, Hl = ["src", "alt"];
function Fl(e, s, t, n, i, o) {
  const r = z("AppButton"), l = z("UluSlideShow");
  return a(), p(l, {
    class: "slideshow--images",
    items: t.images,
    onSlideChange: o.slideChange
  }, {
    slide: w(({ item: c }) => [
      h("img", {
        src: c.src,
        alt: c.alt
      }, null, 8, Pl),
      h("div", Ll, [
        t.selectButton ? (a(), p(r, {
          key: 0,
          class: "type-small",
          icon: "plus",
          small: "",
          iconBefore: ""
        }, {
          default: w(() => [...s[0] || (s[0] = [
            k(" Select ", -1)
          ])]),
          _: 1
        })) : v("", !0)
      ])
    ]),
    nav: w(({ index: c }) => [
      h("img", {
        src: t.images[c].src,
        alt: `View image ${c}`
      }, null, 8, Hl)
    ]),
    _: 1
  }, 8, ["items", "onSlideChange"]);
}
const ah = /* @__PURE__ */ T(Bl, [["render", Fl]]), Vl = {
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
function Dl(e, s, t, n, i, o) {
  return a(), d("li", {
    class: m(["slideshow__slide", { "is-active": t.active }])
  }, [
    g(e.$slots, "default")
  ], 2);
}
const ch = /* @__PURE__ */ T(Vl, [["render", Dl]]), Nl = {
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
}, Wl = ["id"], Xl = ["innerHTML"];
function ql(e, s, t, n, i, o) {
  return a(!0), d(O, null, A(t.rows, (r, l) => (a(), d("tr", {
    key: `br-${l}`,
    id: t.optionalAttr(t.isActual && r.id),
    class: m(t.resolveClasses(t.classes.row, { row: r.data, rowIndex: l, isActual: t.isActual, foot: t.foot })),
    style: L({
      height: r.height
    })
  }, [
    (a(!0), d(O, null, A(t.rowColumns, (c, u) => (a(), p(B(c.rowHeader ? "th" : "td"), {
      id: t.optionalAttr(t.isActual && c.rowHeader && c.getRowHeaderId(l)),
      scope: t.optionalAttr(t.isActual && c.rowHeader && "row"),
      key: `bc-${u}`,
      headers: t.optionalAttr(t.isActual && t.getCellHeaders(c, l)),
      class: m(t.resolveClasses(c.class, { column: c, index: u, isActual: t.isActual, row: r, rowIndex: l, foot: t.foot })),
      style: L({
        width: t.columnWidth
      })
    }, {
      default: w(() => [
        e.$slots[c.slot] ? g(e.$slots, c.slot, {
          key: 0,
          row: r.data,
          column: c,
          rowIndex: l,
          index: u,
          foot: t.foot,
          isActual: t.isActual
        }) : c.html ? (a(), d("div", {
          key: 1,
          innerHTML: t.value({ row: r, column: c, rowIndex: l, isActual: t.isActual, foot: t.foot })
        }, null, 8, Xl)) : (a(), d(O, { key: 2 }, [
          k(y(t.value({ row: r, column: c, rowIndex: l, isActual: t.isActual, foot: t.foot })), 1)
        ], 64))
      ]),
      _: 2
    }, 1032, ["id", "scope", "headers", "class", "style"]))), 128))
  ], 14, Wl))), 128);
}
const Yl = /* @__PURE__ */ T(Nl, [["render", ql]]), Kl = {
  name: "UluTableStickyTable",
  components: {
    UluTableStickyRows: Yl
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
}, Gl = ["aria-hidden"], Zl = {
  key: 0,
  class: "table-sticky__caption"
}, Jl = ["id"], Ql = ["id", "rowspan", "colspan", "data-child-columns", "aria-sort", "scope", "headers"], ea = ["innerHTML"], ta = {
  class: "table-sticky__sort-icon",
  "aria-hidden": "true"
}, sa = { class: "table-sticky__sort-icon-inner" }, na = ["innerHTML"], oa = { key: 1 }, ia = { key: 2 };
function ra(e, s, t, n, i, o) {
  const r = z("UluTableStickyRows");
  return a(), d("table", {
    class: m(t.resolveClasses(t.classes.table, { isActual: t.isActual })),
    "aria-hidden": t.isActual ? "false" : "true"
  }, [
    t.caption ? (a(), d("caption", Zl, y(t.caption), 1)) : v("", !0),
    h("thead", null, [
      (a(!0), d(O, null, A(t.headerRows, (l, c) => (a(), d("tr", {
        key: `hr-${c}`,
        id: o.optionalAttr(t.isActual && l.id),
        class: m(t.resolveClasses(t.classes.rowHeader, { row: l, rowIndex: c, isActual: t.isActual })),
        style: L({
          height: l.height
        })
      }, [
        (a(!0), d(O, null, A(l.columns, (u, f) => (a(), d("th", {
          key: `hc-${f}`,
          id: o.optionalAttr(t.isActual && u.id),
          rowspan: u.rowspan,
          colspan: u.colspan,
          "data-child-columns": u.columns && u.columns.length,
          class: m([
            {
              "sort-active": u.sortApplied,
              "sort-ascending": u.sortApplied && u.sortAscending,
              "sort-descending": u.sortApplied && !u.sortAscending
            },
            t.resolveClasses(u.classHeader, { column: u, index: f, isActual: t.isActual })
          ]),
          style: L({
            width: u.width
          }),
          "aria-sort": u.sort ? u.sortAscending ? "ascending" : "descending" : null,
          scope: o.optionalAttr(t.isActual && (u.colspan > 1 ? "colgroup" : "col")),
          headers: o.optionalAttr(t.isActual && o.getHeaderHeaders(u, c)),
          ref_for: !0,
          ref: (_) => o.addHeaderRef(u, _)
        }, [
          u.sortable ? (a(), p(B(t.isActual ? "button" : "div"), {
            key: 0,
            class: m(["table-sticky__sort-button", {
              "table-sticky__sort-button--focused": u.sortFocused
            }]),
            onClick: (_) => e.$emit("column-sorted", u),
            onFocus: (_) => o.handleSortFocus(u, !0),
            onBlur: (_) => o.handleSortFocus(u, !1),
            "aria-pressed": u.sortApplied ? "true" : "false"
          }, {
            default: w(() => [
              e.$slots[u.slotHeader] ? g(e.$slots, u.slotHeader, {
                key: 0,
                isActual: t.isActual,
                column: u,
                index: f
              }) : u.htmlTitle ? (a(), d("div", {
                key: 1,
                innerHTML: t.getColumnTitle({ column: u, index: f, isActual: t.isActual })
              }, null, 8, ea)) : (a(), d(O, { key: 2 }, [
                k(y(t.getColumnTitle({ column: u, index: f, isActual: t.isActual })), 1)
              ], 64)),
              h("span", ta, [
                h("span", sa, [
                  g(e.$slots, "sortIcon", {}, () => [
                    s[0] || (s[0] = k("▼", -1))
                  ])
                ])
              ])
            ]),
            _: 2
          }, 1064, ["class", "onClick", "onFocus", "onBlur", "aria-pressed"])) : (a(), d(O, { key: 1 }, [
            e.$slots[u.slotHeader] ? g(e.$slots, u.slotHeader, {
              key: 0,
              isActual: t.isActual,
              column: u,
              index: f
            }) : u.htmlTitle ? (a(), d("div", {
              key: 1,
              innerHTML: t.getColumnTitle({ column: u, index: f, isActual: t.isActual })
            }, null, 8, na)) : (a(), d(O, { key: 2 }, [
              k(y(t.getColumnTitle({ column: u, index: f, isActual: t.isActual })), 1)
            ], 64))
          ], 64))
        ], 14, Ql))), 128))
      ], 14, Jl))), 128))
    ]),
    t.rows ? (a(), d("tbody", oa, [
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
      }, de({ _: 2 }, [
        A(e.$slots, (l, c) => ({
          name: c,
          fn: w((u) => [
            g(e.$slots, c, q(Y(u)))
          ])
        }))
      ]), 1032, ["rows", "rowColumns", "optionalAttr", "resolveClasses", "getCellHeaders", "isActual", "columnWidth", "classes", "value"])
    ])) : v("", !0),
    t.footerRows ? (a(), d("tfoot", ia, [
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
      }, de({ _: 2 }, [
        A(e.$slots, (l, c) => ({
          name: c,
          fn: w((u) => [
            g(e.$slots, c, q(Y(u)))
          ])
        }))
      ]), 1032, ["rows", "rowColumns", "optionalAttr", "resolveClasses", "getCellHeaders", "isActual", "columnWidth", "classes", "value"])
    ])) : v("", !0)
  ], 10, Gl);
}
const la = /* @__PURE__ */ T(Kl, [["render", ra]]);
function aa() {
  this.__data__ = [], this.size = 0;
}
function Is(e, s) {
  return e === s || e !== e && s !== s;
}
function qe(e, s) {
  for (var t = e.length; t--; )
    if (Is(e[t][0], s))
      return t;
  return -1;
}
var ca = Array.prototype, ua = ca.splice;
function da(e) {
  var s = this.__data__, t = qe(s, e);
  if (t < 0)
    return !1;
  var n = s.length - 1;
  return t == n ? s.pop() : ua.call(s, t, 1), --this.size, !0;
}
function fa(e) {
  var s = this.__data__, t = qe(s, e);
  return t < 0 ? void 0 : s[t][1];
}
function ha(e) {
  return qe(this.__data__, e) > -1;
}
function ma(e, s) {
  var t = this.__data__, n = qe(t, e);
  return n < 0 ? (++this.size, t.push([e, s])) : t[n][1] = s, this;
}
function J(e) {
  var s = -1, t = e == null ? 0 : e.length;
  for (this.clear(); ++s < t; ) {
    var n = e[s];
    this.set(n[0], n[1]);
  }
}
J.prototype.clear = aa;
J.prototype.delete = da;
J.prototype.get = fa;
J.prototype.has = ha;
J.prototype.set = ma;
function ga() {
  this.__data__ = new J(), this.size = 0;
}
function ya(e) {
  var s = this.__data__, t = s.delete(e);
  return this.size = s.size, t;
}
function pa(e) {
  return this.__data__.get(e);
}
function va(e) {
  return this.__data__.has(e);
}
var Es = typeof global == "object" && global && global.Object === Object && global, _a = typeof self == "object" && self && self.Object === Object && self, K = Es || _a || Function("return this")(), he = K.Symbol, zs = Object.prototype, ba = zs.hasOwnProperty, wa = zs.toString, ve = he ? he.toStringTag : void 0;
function Sa(e) {
  var s = ba.call(e, ve), t = e[ve];
  try {
    e[ve] = void 0;
    var n = !0;
  } catch {
  }
  var i = wa.call(e);
  return n && (s ? e[ve] = t : delete e[ve]), i;
}
var ka = Object.prototype, Ca = ka.toString;
function Ta(e) {
  return Ca.call(e);
}
var $a = "[object Null]", Aa = "[object Undefined]", Pt = he ? he.toStringTag : void 0;
function Te(e) {
  return e == null ? e === void 0 ? Aa : $a : Pt && Pt in Object(e) ? Sa(e) : Ta(e);
}
function Ye(e) {
  var s = typeof e;
  return e != null && (s == "object" || s == "function");
}
var Oa = "[object AsyncFunction]", xa = "[object Function]", Ra = "[object GeneratorFunction]", Ua = "[object Proxy]";
function Ms(e) {
  if (!Ye(e))
    return !1;
  var s = Te(e);
  return s == xa || s == Ra || s == Oa || s == Ua;
}
var Qe = K["__core-js_shared__"], Lt = function() {
  var e = /[^.]+$/.exec(Qe && Qe.keys && Qe.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function ja(e) {
  return !!Lt && Lt in e;
}
var Ia = Function.prototype, Ea = Ia.toString;
function le(e) {
  if (e != null) {
    try {
      return Ea.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var za = /[\\^$.*+?()[\]{}|]/g, Ma = /^\[object .+?Constructor\]$/, Ba = Function.prototype, Pa = Object.prototype, La = Ba.toString, Ha = Pa.hasOwnProperty, Fa = RegExp(
  "^" + La.call(Ha).replace(za, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Va(e) {
  if (!Ye(e) || ja(e))
    return !1;
  var s = Ms(e) ? Fa : Ma;
  return s.test(le(e));
}
function Da(e, s) {
  return e?.[s];
}
function ae(e, s) {
  var t = Da(e, s);
  return Va(t) ? t : void 0;
}
var ke = ae(K, "Map"), Ce = ae(Object, "create");
function Na() {
  this.__data__ = Ce ? Ce(null) : {}, this.size = 0;
}
function Wa(e) {
  var s = this.has(e) && delete this.__data__[e];
  return this.size -= s ? 1 : 0, s;
}
var Xa = "__lodash_hash_undefined__", qa = Object.prototype, Ya = qa.hasOwnProperty;
function Ka(e) {
  var s = this.__data__;
  if (Ce) {
    var t = s[e];
    return t === Xa ? void 0 : t;
  }
  return Ya.call(s, e) ? s[e] : void 0;
}
var Ga = Object.prototype, Za = Ga.hasOwnProperty;
function Ja(e) {
  var s = this.__data__;
  return Ce ? s[e] !== void 0 : Za.call(s, e);
}
var Qa = "__lodash_hash_undefined__";
function ec(e, s) {
  var t = this.__data__;
  return this.size += this.has(e) ? 0 : 1, t[e] = Ce && s === void 0 ? Qa : s, this;
}
function re(e) {
  var s = -1, t = e == null ? 0 : e.length;
  for (this.clear(); ++s < t; ) {
    var n = e[s];
    this.set(n[0], n[1]);
  }
}
re.prototype.clear = Na;
re.prototype.delete = Wa;
re.prototype.get = Ka;
re.prototype.has = Ja;
re.prototype.set = ec;
function tc() {
  this.size = 0, this.__data__ = {
    hash: new re(),
    map: new (ke || J)(),
    string: new re()
  };
}
function sc(e) {
  var s = typeof e;
  return s == "string" || s == "number" || s == "symbol" || s == "boolean" ? e !== "__proto__" : e === null;
}
function Ke(e, s) {
  var t = e.__data__;
  return sc(s) ? t[typeof s == "string" ? "string" : "hash"] : t.map;
}
function nc(e) {
  var s = Ke(this, e).delete(e);
  return this.size -= s ? 1 : 0, s;
}
function oc(e) {
  return Ke(this, e).get(e);
}
function ic(e) {
  return Ke(this, e).has(e);
}
function rc(e, s) {
  var t = Ke(this, e), n = t.size;
  return t.set(e, s), this.size += t.size == n ? 0 : 1, this;
}
function ge(e) {
  var s = -1, t = e == null ? 0 : e.length;
  for (this.clear(); ++s < t; ) {
    var n = e[s];
    this.set(n[0], n[1]);
  }
}
ge.prototype.clear = tc;
ge.prototype.delete = nc;
ge.prototype.get = oc;
ge.prototype.has = ic;
ge.prototype.set = rc;
var lc = 200;
function ac(e, s) {
  var t = this.__data__;
  if (t instanceof J) {
    var n = t.__data__;
    if (!ke || n.length < lc - 1)
      return n.push([e, s]), this.size = ++t.size, this;
    t = this.__data__ = new ge(n);
  }
  return t.set(e, s), this.size = t.size, this;
}
function ye(e) {
  var s = this.__data__ = new J(e);
  this.size = s.size;
}
ye.prototype.clear = ga;
ye.prototype.delete = ya;
ye.prototype.get = pa;
ye.prototype.has = va;
ye.prototype.set = ac;
function cc(e, s) {
  for (var t = -1, n = e == null ? 0 : e.length; ++t < n && s(e[t], t, e) !== !1; )
    ;
  return e;
}
var Ht = function() {
  try {
    var e = ae(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}();
function uc(e, s, t) {
  s == "__proto__" && Ht ? Ht(e, s, {
    configurable: !0,
    enumerable: !0,
    value: t,
    writable: !0
  }) : e[s] = t;
}
var dc = Object.prototype, fc = dc.hasOwnProperty;
function hc(e, s, t) {
  var n = e[s];
  (!(fc.call(e, s) && Is(n, t)) || t === void 0 && !(s in e)) && uc(e, s, t);
}
function mc(e, s) {
  for (var t = -1, n = Array(e); ++t < e; )
    n[t] = s(t);
  return n;
}
function $e(e) {
  return e != null && typeof e == "object";
}
var gc = "[object Arguments]";
function Ft(e) {
  return $e(e) && Te(e) == gc;
}
var Bs = Object.prototype, yc = Bs.hasOwnProperty, pc = Bs.propertyIsEnumerable, vc = Ft(/* @__PURE__ */ function() {
  return arguments;
}()) ? Ft : function(e) {
  return $e(e) && yc.call(e, "callee") && !pc.call(e, "callee");
}, wt = Array.isArray;
function _c() {
  return !1;
}
var Ps = typeof exports == "object" && exports && !exports.nodeType && exports, Vt = Ps && typeof module == "object" && module && !module.nodeType && module, bc = Vt && Vt.exports === Ps, Dt = bc ? K.Buffer : void 0, wc = Dt ? Dt.isBuffer : void 0, Ls = wc || _c, Sc = 9007199254740991, kc = /^(?:0|[1-9]\d*)$/;
function Cc(e, s) {
  var t = typeof e;
  return s = s ?? Sc, !!s && (t == "number" || t != "symbol" && kc.test(e)) && e > -1 && e % 1 == 0 && e < s;
}
var Tc = 9007199254740991;
function Hs(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Tc;
}
var $c = "[object Arguments]", Ac = "[object Array]", Oc = "[object Boolean]", xc = "[object Date]", Rc = "[object Error]", Uc = "[object Function]", jc = "[object Map]", Ic = "[object Number]", Ec = "[object Object]", zc = "[object RegExp]", Mc = "[object Set]", Bc = "[object String]", Pc = "[object WeakMap]", Lc = "[object ArrayBuffer]", Hc = "[object DataView]", Fc = "[object Float32Array]", Vc = "[object Float64Array]", Dc = "[object Int8Array]", Nc = "[object Int16Array]", Wc = "[object Int32Array]", Xc = "[object Uint8Array]", qc = "[object Uint8ClampedArray]", Yc = "[object Uint16Array]", Kc = "[object Uint32Array]", I = {};
I[Fc] = I[Vc] = I[Dc] = I[Nc] = I[Wc] = I[Xc] = I[qc] = I[Yc] = I[Kc] = !0;
I[$c] = I[Ac] = I[Lc] = I[Oc] = I[Hc] = I[xc] = I[Rc] = I[Uc] = I[jc] = I[Ic] = I[Ec] = I[zc] = I[Mc] = I[Bc] = I[Pc] = !1;
function Gc(e) {
  return $e(e) && Hs(e.length) && !!I[Te(e)];
}
function St(e) {
  return function(s) {
    return e(s);
  };
}
var Fs = typeof exports == "object" && exports && !exports.nodeType && exports, Se = Fs && typeof module == "object" && module && !module.nodeType && module, Zc = Se && Se.exports === Fs, et = Zc && Es.process, me = function() {
  try {
    var e = Se && Se.require && Se.require("util").types;
    return e || et && et.binding && et.binding("util");
  } catch {
  }
}(), Nt = me && me.isTypedArray, Jc = Nt ? St(Nt) : Gc, Qc = Object.prototype, eu = Qc.hasOwnProperty;
function tu(e, s) {
  var t = wt(e), n = !t && vc(e), i = !t && !n && Ls(e), o = !t && !n && !i && Jc(e), r = t || n || i || o, l = r ? mc(e.length, String) : [], c = l.length;
  for (var u in e)
    eu.call(e, u) && !(r && // Safari 9 has enumerable `arguments.length` in strict mode.
    (u == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    i && (u == "offset" || u == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    o && (u == "buffer" || u == "byteLength" || u == "byteOffset") || // Skip index properties.
    Cc(u, c))) && l.push(u);
  return l;
}
var su = Object.prototype;
function Vs(e) {
  var s = e && e.constructor, t = typeof s == "function" && s.prototype || su;
  return e === t;
}
function Ds(e, s) {
  return function(t) {
    return e(s(t));
  };
}
var nu = Ds(Object.keys, Object), ou = Object.prototype, iu = ou.hasOwnProperty;
function ru(e) {
  if (!Vs(e))
    return nu(e);
  var s = [];
  for (var t in Object(e))
    iu.call(e, t) && t != "constructor" && s.push(t);
  return s;
}
function lu(e) {
  return e != null && Hs(e.length) && !Ms(e);
}
function au(e) {
  return lu(e) ? tu(e) : ru(e);
}
var Ns = typeof exports == "object" && exports && !exports.nodeType && exports, Wt = Ns && typeof module == "object" && module && !module.nodeType && module, cu = Wt && Wt.exports === Ns, Xt = cu ? K.Buffer : void 0;
Xt && Xt.allocUnsafe;
function uu(e, s) {
  return e.slice();
}
function du(e, s) {
  for (var t = -1, n = e == null ? 0 : e.length, i = 0, o = []; ++t < n; ) {
    var r = e[t];
    s(r, t, e) && (o[i++] = r);
  }
  return o;
}
function fu() {
  return [];
}
var hu = Object.prototype, mu = hu.propertyIsEnumerable, qt = Object.getOwnPropertySymbols, gu = qt ? function(e) {
  return e == null ? [] : (e = Object(e), du(qt(e), function(s) {
    return mu.call(e, s);
  }));
} : fu;
function yu(e, s) {
  for (var t = -1, n = s.length, i = e.length; ++t < n; )
    e[i + t] = s[t];
  return e;
}
var pu = Ds(Object.getPrototypeOf, Object);
function vu(e, s, t) {
  var n = s(e);
  return wt(e) ? n : yu(n, t(e));
}
function _u(e) {
  return vu(e, au, gu);
}
var rt = ae(K, "DataView"), lt = ae(K, "Promise"), at = ae(K, "Set"), ct = ae(K, "WeakMap"), Yt = "[object Map]", bu = "[object Object]", Kt = "[object Promise]", Gt = "[object Set]", Zt = "[object WeakMap]", Jt = "[object DataView]", wu = le(rt), Su = le(ke), ku = le(lt), Cu = le(at), Tu = le(ct), G = Te;
(rt && G(new rt(new ArrayBuffer(1))) != Jt || ke && G(new ke()) != Yt || lt && G(lt.resolve()) != Kt || at && G(new at()) != Gt || ct && G(new ct()) != Zt) && (G = function(e) {
  var s = Te(e), t = s == bu ? e.constructor : void 0, n = t ? le(t) : "";
  if (n)
    switch (n) {
      case wu:
        return Jt;
      case Su:
        return Yt;
      case ku:
        return Kt;
      case Cu:
        return Gt;
      case Tu:
        return Zt;
    }
  return s;
});
var $u = Object.prototype, Au = $u.hasOwnProperty;
function Ou(e) {
  var s = e.length, t = new e.constructor(s);
  return s && typeof e[0] == "string" && Au.call(e, "index") && (t.index = e.index, t.input = e.input), t;
}
var Qt = K.Uint8Array;
function kt(e) {
  var s = new e.constructor(e.byteLength);
  return new Qt(s).set(new Qt(e)), s;
}
function xu(e, s) {
  var t = kt(e.buffer);
  return new e.constructor(t, e.byteOffset, e.byteLength);
}
var Ru = /\w*$/;
function Uu(e) {
  var s = new e.constructor(e.source, Ru.exec(e));
  return s.lastIndex = e.lastIndex, s;
}
var es = he ? he.prototype : void 0, ts = es ? es.valueOf : void 0;
function ju(e) {
  return ts ? Object(ts.call(e)) : {};
}
function Iu(e, s) {
  var t = kt(e.buffer);
  return new e.constructor(t, e.byteOffset, e.length);
}
var Eu = "[object Boolean]", zu = "[object Date]", Mu = "[object Map]", Bu = "[object Number]", Pu = "[object RegExp]", Lu = "[object Set]", Hu = "[object String]", Fu = "[object Symbol]", Vu = "[object ArrayBuffer]", Du = "[object DataView]", Nu = "[object Float32Array]", Wu = "[object Float64Array]", Xu = "[object Int8Array]", qu = "[object Int16Array]", Yu = "[object Int32Array]", Ku = "[object Uint8Array]", Gu = "[object Uint8ClampedArray]", Zu = "[object Uint16Array]", Ju = "[object Uint32Array]";
function Qu(e, s, t) {
  var n = e.constructor;
  switch (s) {
    case Vu:
      return kt(e);
    case Eu:
    case zu:
      return new n(+e);
    case Du:
      return xu(e);
    case Nu:
    case Wu:
    case Xu:
    case qu:
    case Yu:
    case Ku:
    case Gu:
    case Zu:
    case Ju:
      return Iu(e);
    case Mu:
      return new n();
    case Bu:
    case Hu:
      return new n(e);
    case Pu:
      return Uu(e);
    case Lu:
      return new n();
    case Fu:
      return ju(e);
  }
}
var ss = Object.create, ed = /* @__PURE__ */ function() {
  function e() {
  }
  return function(s) {
    if (!Ye(s))
      return {};
    if (ss)
      return ss(s);
    e.prototype = s;
    var t = new e();
    return e.prototype = void 0, t;
  };
}();
function td(e) {
  return typeof e.constructor == "function" && !Vs(e) ? ed(pu(e)) : {};
}
var sd = "[object Map]";
function nd(e) {
  return $e(e) && G(e) == sd;
}
var ns = me && me.isMap, od = ns ? St(ns) : nd, id = "[object Set]";
function rd(e) {
  return $e(e) && G(e) == id;
}
var os = me && me.isSet, ld = os ? St(os) : rd, Ws = "[object Arguments]", ad = "[object Array]", cd = "[object Boolean]", ud = "[object Date]", dd = "[object Error]", Xs = "[object Function]", fd = "[object GeneratorFunction]", hd = "[object Map]", md = "[object Number]", qs = "[object Object]", gd = "[object RegExp]", yd = "[object Set]", pd = "[object String]", vd = "[object Symbol]", _d = "[object WeakMap]", bd = "[object ArrayBuffer]", wd = "[object DataView]", Sd = "[object Float32Array]", kd = "[object Float64Array]", Cd = "[object Int8Array]", Td = "[object Int16Array]", $d = "[object Int32Array]", Ad = "[object Uint8Array]", Od = "[object Uint8ClampedArray]", xd = "[object Uint16Array]", Rd = "[object Uint32Array]", j = {};
j[Ws] = j[ad] = j[bd] = j[wd] = j[cd] = j[ud] = j[Sd] = j[kd] = j[Cd] = j[Td] = j[$d] = j[hd] = j[md] = j[qs] = j[gd] = j[yd] = j[pd] = j[vd] = j[Ad] = j[Od] = j[xd] = j[Rd] = !0;
j[dd] = j[Xs] = j[_d] = !1;
function ze(e, s, t, n, i, o) {
  var r;
  if (r !== void 0)
    return r;
  if (!Ye(e))
    return e;
  var l = wt(e);
  if (l)
    r = Ou(e);
  else {
    var c = G(e), u = c == Xs || c == fd;
    if (Ls(e))
      return uu(e);
    if (c == qs || c == Ws || u && !i)
      r = u ? {} : td(e);
    else {
      if (!j[c])
        return i ? e : {};
      r = Qu(e, c);
    }
  }
  o || (o = new ye());
  var f = o.get(e);
  if (f)
    return f;
  o.set(e, r), ld(e) ? e.forEach(function(x) {
    r.add(ze(x, s, t, x, e, o));
  }) : od(e) && e.forEach(function(x, M) {
    r.set(M, ze(x, s, t, M, e, o));
  });
  var _ = _u, b = l ? void 0 : _(e);
  return cc(b || e, function(x, M) {
    b && (M = x, x = e[M]), hc(r, M, ze(x, s, t, M, e, o));
  }), r;
}
var Ud = 1, jd = 4;
function Id(e) {
  return ze(e, Ud | jd);
}
const tt = (e) => e.every((s) => typeof s == "object"), is = !0, Ys = () => window.innerWidth;
let rs = Ys();
const Ed = {
  name: "UluTableSticky",
  components: {
    UluTableStickyTable: la
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
      required: is
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
      validator: tt,
      required: is
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
      validator: tt
      // required
    },
    /**
     * Array of rows for footer (tfoot)
     */
    footerRows: {
      type: Array,
      validator: tt
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
      resizeHandler: De(this.onResize.bind(this), 500, !0),
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
        i.getRowHeaders = (l) => r.map((c) => c(l)).join(" "), i.rowHeader && (i.getRowHeaderId = (l) => `${this.idPrefix}-rh-${l}-${o}`, n.push(i.getRowHeaderId));
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
      const e = this.idCreator("c"), s = Id(this.columns), t = (n, i) => {
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
      function o(r, l) {
        const c = l.columns;
        c && c.forEach((u) => o(1 + r, u)), l.rowspan = c ? 1 : t - r, l.colspan = c ? c.reduce((u, f) => u + f.colspan, 0) : 1, i[r].columns.push(l);
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
      const e = Ys();
      rs !== e && (rs = e, this.resizing ? (this.resizing = !1, this.setTableSizes(), this.checkOverflowX(), this.syncScrollLeft()) : (this.resizing = !0, this.removeTableSizes()));
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
        this.sizesCalculated = !0, js(() => {
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
}, zd = { class: "table-sticky__sticky-wrap table-sticky__sticky-wrap--header" }, Md = { class: "table-sticky__header-wrap" }, Bd = { class: "table-sticky__sticky-wrap table-sticky__sticky-wrap--first-column-header" }, Pd = { class: "table-sticky__sticky-wrap table-sticky__sticky-wrap--controls" }, Ld = {
  key: 2,
  class: "table-sticky__controls-inner"
}, Hd = ["disabled"], Fd = ["disabled"], Vd = {
  ref: "display",
  class: "table-sticky__display"
};
function Dd(e, s, t, n, i, o) {
  const r = z("UluTableStickyTable");
  return a(), d("div", {
    class: m(["table-sticky", {
      "table-sticky--overflown-x": i.overflownX,
      "table-sticky--can-scroll-right": i.canScrollRight,
      "table-sticky--can-scroll-left": i.canScrollLeft
    }])
  }, [
    h("div", zd, [
      h("div", Md, [
        R(r, {
          ref: "header",
          class: "table-sticky__table table-sticky__table--header",
          classes: t.classes,
          caption: t.caption,
          resolveClasses: o.resolveClasses,
          getColumnTitle: t.getColumnTitle,
          idPrefix: t.idPrefix,
          headerRows: i.headerRows,
          style: L({
            opacity: i.sizesCalculated ? "1" : "0",
            pointerEvents: i.sizesCalculated ? "auto" : "none",
            width: i.tableWidth
          }),
          onColumnSorted: o.applySort
        }, de({ _: 2 }, [
          A(e.$slots, (l, c) => ({
            name: c,
            fn: w((u) => [
              g(e.$slots, c, q(Y(u)))
            ])
          }))
        ]), 1032, ["classes", "caption", "resolveClasses", "getColumnTitle", "idPrefix", "headerRows", "style", "onColumnSorted"])
      ])
    ]),
    h("div", Bd, [
      t.firstColumnSticky ? (a(), p(r, {
        key: 0,
        ref: "firstColumnHeader",
        class: "table-sticky__table table-sticky__table--first-column-header",
        classes: t.classes,
        caption: t.caption,
        resolveClasses: o.resolveClasses,
        getColumnTitle: t.getColumnTitle,
        idPrefix: t.idPrefix,
        headerRows: o.headerRowsFirst,
        style: L({
          opacity: o.headerOpacityX,
          pointerEvents: o.headerVisibleX ? "auto" : "none"
        }),
        onColumnSorted: o.applySort
      }, de({ _: 2 }, [
        A(e.$slots, (l, c) => ({
          name: c,
          fn: w((u) => [
            g(e.$slots, c, q(Y(u)))
          ])
        }))
      ]), 1032, ["classes", "caption", "resolveClasses", "getColumnTitle", "idPrefix", "headerRows", "style", "onColumnSorted"])) : v("", !0)
    ]),
    h("div", Pd, [
      ie(h("div", {
        class: m(["table-sticky__controls", o.resolveClasses(t.classes.controls)]),
        ref: "controls"
      }, [
        e.$slots.controls ? g(e.$slots, "controls", {
          key: 0,
          scrollLeft: o.scrollLeft,
          scrollRight: o.scrollRight,
          canScrollLeft: i.canScrollLeft,
          canScrollRight: i.canScrollRight
        }) : t.controlsComponent ? (a(), p(B(t.controlsComponent), {
          key: 1,
          scrollLeft: o.scrollLeft,
          scrollRight: o.scrollRight,
          canScrollLeft: i.canScrollLeft,
          canScrollRight: i.canScrollRight
        }, null, 8, ["scrollLeft", "scrollRight", "canScrollLeft", "canScrollRight"])) : (a(), d("div", Ld, [
          h("button", {
            class: m(["table-sticky__control table-sticky__control--left", o.resolveClasses(t.classes.controlButton)]),
            "aria-label": "Scroll Left",
            onClick: s[0] || (s[0] = (...l) => o.scrollLeft && o.scrollLeft(...l)),
            disabled: !i.canScrollLeft
          }, [
            g(e.$slots, "controlLeft", {}, () => [
              s[2] || (s[2] = k(" ← ", -1))
            ])
          ], 10, Hd),
          h("button", {
            class: m(["table-sticky__control table-sticky__control--right", o.resolveClasses(t.classes.controlButton)]),
            "aria-label": "Scroll Right",
            onClick: s[1] || (s[1] = (...l) => o.scrollRight && o.scrollRight(...l)),
            disabled: !i.canScrollRight
          }, [
            g(e.$slots, "controlRight", {}, () => [
              s[3] || (s[3] = k(" → ", -1))
            ])
          ], 10, Fd)
        ]))
      ], 2), [
        [Me, o.controlsShown]
      ])
    ]),
    h("div", Vd, [
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
      }, de({ _: 2 }, [
        A(e.$slots, (l, c) => ({
          name: c,
          fn: w((u) => [
            g(e.$slots, c, q(Y(u)))
          ])
        }))
      ]), 1032, ["classes", "resolveClasses", "headerRows", "rows", "footerRows", "rowColumns", "caption", "idPrefix", "getRowValue", "getColumnTitle", "onVnodeMounted", "onActualHeaderRemoved", "onActualHeaderAdded", "onColumnSorted"])
    ], 512),
    t.firstColumnSticky ? (a(), p(r, {
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
      style: L({
        opacity: o.headerOpacityX,
        pointerEvents: o.headerVisibleX ? "auto" : "none"
      }),
      onColumnSorted: o.applySort
    }, de({ _: 2 }, [
      A(e.$slots, (l, c) => ({
        name: c,
        fn: w((u) => [
          g(e.$slots, c, q(Y(u)))
        ])
      }))
    ]), 1032, ["classes", "resolveClasses", "caption", "headerRows", "columnWidth", "rows", "footerRows", "rowColumns", "idPrefix", "getRowValue", "getColumnTitle", "style", "onColumnSorted"])) : v("", !0)
  ], 2);
}
const uh = /* @__PURE__ */ T(Ed, [["render", Dd]]);
function Nd(e) {
  if (e) {
    if (e instanceof HTMLElement)
      return e;
    if (typeof e == "object" && "$el" in e)
      return e.$el;
  }
}
const Wd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  refToElement: Nd
}, Symbol.toStringTag, { value: "Module" })), dh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  dom: Wd,
  router: Vo
}, Symbol.toStringTag, { value: "Module" }));
export {
  Hf as $,
  bf as A,
  V as B,
  wf as C,
  Sf as D,
  kf as E,
  Cs as F,
  xs as G,
  Cf as H,
  Tf as I,
  $f as J,
  Af as K,
  Of as L,
  xf as M,
  Rf as N,
  Uf as O,
  jf as P,
  If as Q,
  Ts as R,
  Co as S,
  Ef as T,
  It as U,
  zf as V,
  Mf as W,
  Bf as X,
  Pf as Y,
  Lf as Z,
  nf as _,
  je as a,
  Ff as a0,
  Vf as a1,
  Df as a2,
  Nf as a3,
  Wf as a4,
  Xf as a5,
  qf as a6,
  Yf as a7,
  Kf as a8,
  Gf as a9,
  Zf as aa,
  Jf as ab,
  Qf as ac,
  Bt as ad,
  eh as ae,
  th as af,
  sh as ag,
  nh as ah,
  oh as ai,
  rh as aj,
  lh as ak,
  vl as al,
  ah as am,
  Ml as an,
  ch as ao,
  uh as ap,
  Yl as aq,
  la as ar,
  Ln as as,
  se as at,
  Oo as au,
  Ro as av,
  fo as aw,
  rf as ax,
  lf as ay,
  Jd as b,
  Qd as c,
  ef as d,
  tf as e,
  sf as f,
  Dn as g,
  of as h,
  dh as i,
  Ss as j,
  af as k,
  ue as l,
  cf as m,
  uf as n,
  df as o,
  ff as p,
  hf as q,
  ih as r,
  mf as s,
  si as t,
  gf as u,
  Yo as v,
  yf as w,
  pf as x,
  vf as y,
  _f as z
};
