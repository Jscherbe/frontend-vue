import { reactive as Kt, ref as E, computed as T, resolveDirective as Gt, createElementBlock as u, openBlock as a, Fragment as $, withDirectives as he, createElementVNode as d, unref as x, normalizeClass as h, renderSlot as m, withKeys as qt, normalizeStyle as z, createCommentVNode as _, nextTick as Zt, toRef as Us, toDisplayString as p, createBlock as y, Teleport as st, resolveDynamicComponent as I, mergeProps as G, inject as Jt, watchEffect as xs, defineAsyncComponent as Is, markRaw as ue, normalizeProps as D, toRefs as Es, toValue as Ve, resolveComponent as S, withModifiers as zs, createVNode as A, useSlots as js, renderList as k, TransitionGroup as Qt, withCtx as b, createTextVNode as w, vShow as es, onMounted as Fs, onUnmounted as Ms, guardReactiveProps as X, vModelCheckbox as Bs, watch as Ps, vModelText as Ls, createSlots as ce } from "vue";
import { inline as ts, offset as ss, flip as ns, shift as os, arrow as is, useFloating as rs, autoUpdate as as } from "@floating-ui/vue";
import { Disclosure as Hs, DisclosureButton as Ds, DisclosurePanel as Vs, Tab as Ns, TabGroup as Ws, TabList as Xs, TabPanel as Ys, TabPanels as Ks } from "@headlessui/vue";
import { RouterLink as Me } from "vue-router";
import Gs from "gsap";
import qs from "fuse.js";
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
function Qd(e, s = {}) {
  const t = Kt({ ...mt }), { iconsByType: n, ...i } = s || {};
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
}, ne = {
  plugin: { ...Ie.plugin },
  popover: { ...Ie.popover },
  tooltip: { ...Ie.tooltip, ...Ie.popover }
}, nt = E(!1), ot = E(null);
function Zs(e = {}) {
  return Object.assign(ne.popover, e.popover), Object.assign(ne.tooltip, e.tooltip), Object.assign(ne.plugin, e.plugin), ne;
}
function Js(e) {
  return Object.assign({}, ne.tooltip, e);
}
function Qs(e) {
  nt.value = !0, ot.value = e;
}
function en() {
  nt.value = !1, ot.value = null;
}
const ze = /* @__PURE__ */ new WeakMap(), tn = {
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
  const t = sn(e, s);
  if (!t) return;
  let n = null;
  const i = () => {
    n || (n = setTimeout(() => {
      Qs(t), clearTimeout(n);
    }, t.delay));
  }, o = () => {
    n && (clearTimeout(n), n = null), en();
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
function sn(e, s) {
  const { value: t } = s;
  let n;
  if (!(t === !1 || t === null))
    return typeof t == "object" ? n = t : n = { content: t }, Js(Object.assign({}, { trigger: e }, n));
}
let nn = 0;
function on() {
  return `ulu-popovers-uid-${++nn}`;
}
const rn = ["disabled", "aria-expanded", "aria-controls", "aria-label"], an = ["aria-hidden", "id", "data-placement"], ln = { class: "popover__inner" }, cn = {
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
    const t = s, n = e, i = on(), o = Object.assign({}, ne.popover, n.config), r = E(n.startOpen || !1), l = E(null), c = E(null), f = E(null), g = [
      ...o.inline ? [ts()] : [],
      ...o.offset ? [ss(o.offset)] : [],
      ns(),
      os(),
      ...o.arrow ? [is({ element: f })] : []
    ], O = {
      placement: o.placement,
      whileElementsMounted: as,
      middleware: g
    }, {
      floatingStyles: j,
      placement: P,
      middlewareData: F,
      update: H,
      isPositioned: te
    } = rs(l, c, O), _e = T(() => {
      const L = F.value?.arrow;
      return L ? {
        position: "absolute",
        left: L?.x != null ? `${L.x}px` : "",
        top: L?.y != null ? `${L.y}px` : ""
      } : null;
    });
    o.onReady && o.onReady({ update: H, isPositioned: te });
    const Ue = () => {
      se(!r.value);
    }, se = (L) => {
      r.value = L;
      const J = {
        trigger: x(l),
        content: x(c),
        isOpen: x(r)
      }, ae = { isOpen: J.isOpen };
      Zt(() => {
        r.value ? (H(), window.setTimeout(() => {
          ye(), n.directFocus(J), t("toggle", ae);
        }, 0)) : (ve(), n.directFocus(J), t("toggle", ae));
      });
    };
    let Z;
    const ye = () => {
      n.clickOutsideCloses && (Z && ve(), Z = (L) => {
        c.value.contains(L.target) || se(!1);
      }, document.addEventListener("click", Z));
    }, ve = () => {
      Z && (document.removeEventListener("click", Z), Z = null);
    }, pe = () => se(!1);
    return (L, J) => {
      const ae = Gt("ulu-tooltip");
      return a(), u($, null, [
        he((a(), u("button", {
          type: "button",
          ref_key: "trigger",
          ref: l,
          onClick: Ue,
          disabled: e.disabled,
          class: h([
            { [e.activeClass]: r.value },
            e.classes.trigger
          ]),
          "aria-expanded": r.value ? "true" : "false",
          "aria-controls": x(i),
          "aria-label": e.triggerAlt
        }, [
          m(L.$slots, "trigger", { isOpen: r.value })
        ], 10, rn)), [
          [ae, e.tooltip ? e.tooltip : null]
        ]),
        d("span", {
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
          id: x(i),
          style: z(x(j)),
          "data-placement": x(P),
          onKeydown: J[0] || (J[0] = qt((C) => se(!1), ["esc"])),
          tabindex: "-1"
        }, [
          d("span", ln, [
            m(L.$slots, "content", { close: pe })
          ]),
          L.$slots.footer ? (a(), u("span", cn, [
            m(L.$slots, "footer", { close: pe })
          ])) : _("", !0),
          x(o).arrow ? (a(), u("span", {
            key: 1,
            class: "popover__arrow",
            ref_key: "contentArrow",
            ref: f,
            style: z(_e.value),
            "data-ulu-popover-arrow": ""
          }, null, 4)) : _("", !0)
        ], 46, an)
      ], 64);
    };
  }
}, un = ["data-placement"], dn = ["innerHTML"], fn = {
  key: 1,
  class: "popover__inner"
}, hn = {
  __name: "UluTooltipPopover",
  props: {
    config: Object
  },
  setup(e) {
    const s = Us(e.config.trigger), t = E(null), n = E(null), i = [
      ...e.config.inline ? [ts()] : [],
      ...e.config.offset ? [ss(e.config.offset)] : [],
      ns(),
      os(),
      ...e.config.arrow ? [is({ element: n })] : []
    ], o = {
      placement: e.config.placement,
      whileElementsMounted: as,
      middleware: i
    }, {
      floatingStyles: r,
      placement: l,
      middlewareData: c,
      update: f,
      isPositioned: g
    } = rs(s, t, o), O = T(() => {
      const j = c.value?.arrow;
      return j ? {
        position: "absolute",
        left: j?.x != null ? `${j.x}px` : "",
        top: j?.y != null ? `${j.y}px` : ""
      } : null;
    });
    return e.config.onReady && e.config.onReady({ update: f, isPositioned: g }), (j, P) => (a(), u("span", {
      class: h(["popover popover--tooltip is-active", e.config.class]),
      ref_key: "content",
      ref: t,
      "aria-hidden": "true",
      "data-placement": x(l),
      style: z(x(r))
    }, [
      e.config.isHtml ? (a(), u("span", {
        key: 0,
        class: "popover__inner",
        innerHTML: e.config.content
      }, null, 8, dn)) : (a(), u("span", fn, p(e.config.content), 1)),
      e.config.arrow ? (a(), u("span", {
        key: 2,
        class: "popover__arrow",
        ref_key: "contentArrow",
        ref: n,
        style: z(O.value)
      }, null, 4)) : _("", !0)
    ], 14, un));
  }
}, mn = {
  __name: "UluTooltipDisplay",
  setup(e) {
    return (s, t) => (a(), y(st, {
      to: x(ne).plugin.tooltipTeleportTo
    }, [
      x(nt) ? (a(), y(hn, {
        key: 0,
        config: x(ot)
      }, null, 8, ["config"])) : _("", !0)
    ], 8, ["to"]));
  }
};
function ef(e, s = {}) {
  const t = Zs(s);
  t.plugin.global && (e.directive(t.plugin.directiveName, tn), e.component("UluTooltipDisplay", mn), e.component("UluPopover", it));
}
const v = (e, s) => {
  const t = e.__vccOpts || e;
  for (const [n, i] of s)
    t[n] = i;
  return t;
}, gn = {
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
function _n(e, s, t, n, i, o) {
  return o.currentModal ? (a(), y(I(o.currentModal.component), G({ key: 0 }, o.currentProps, {
    modelValue: i.open,
    "onUpdate:modelValue": s[0] || (s[0] = (r) => i.open = r),
    onVnodeMounted: o.modalMounted,
    onVnodeUnmounted: o.modalUnmounted
  }), null, 16, ["modelValue", "onVnodeMounted", "onVnodeUnmounted"])) : _("", !0);
}
const yn = /* @__PURE__ */ v(gn, [["render", _n]]);
function vn() {
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
    const s = Jt("uluCore"), t = E(null), { getIconProps: n, getClassesFromDefinition: i } = vn();
    let o;
    const r = e, l = T(() => s.getSetting("fontAwesomeStatic")), c = T(() => s.getSetting("iconComponent")), f = T(() => s.getSetting("iconPropResolver")), g = T(() => {
      const { icon: F } = r;
      if (typeof F == "string" && F.startsWith("type:"))
        try {
          const H = F.substring(5);
          return s.getIcon(H);
        } catch (H) {
          return console.warn(H), null;
        }
      return F;
    }), O = T(() => !c.value || !g.value ? null : f.value(g.value)), j = T(() => n(g.value)), P = T(() => i(g.value));
    return xs(async () => {
      if (!l.value && g.value) {
        if (t.value === null)
          if (o)
            t.value = ue(o.FontAwesomeIcon);
          else {
            const F = Is(async () => {
              const H = await import("./index.es-HlG3u0J5.js");
              return o = H, H.FontAwesomeIcon;
            });
            t.value = ue(F);
          }
      } else
        t.value = null;
    }), (F, H) => c.value ? (a(), y(I(c.value), D(G({ key: 0 }, O.value)), null, 16)) : !l.value && t.value && g.value ? (a(), y(I(t.value), D(G({ key: 1 }, j.value)), null, 16)) : l.value && g.value ? (a(), u("span", {
      key: 2,
      class: h(P.value),
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
function ee({ props: e, baseClass: s, internal: t = {} }) {
  const { modifiers: n } = Es(e);
  return { resolvedModifiers: T(() => {
    const o = Ve(s), r = Ge(Ve(n)), l = Ge(Ve(t));
    if (!o)
      return console.warn("useModifiers: Missing 'baseClass' argument, modifiers will not be applied."), "";
    const c = /* @__PURE__ */ new Set([...l, ...r]);
    return Array.from(c).map((f) => `${o}--${f}`);
  }) };
}
function ls() {
  return typeof window < "u" && typeof window.document < "u";
}
function pn(e, s) {
  const t = e.getBoundingClientRect();
  return s.clientY < t.top || // above
  s.clientY > t.top + t.height || // below
  s.clientX < t.left || // left side
  s.clientX > t.left + t.width;
}
function bn(e = document.body, s = window) {
  return s.innerWidth - e.clientWidth;
}
function wn({ preventShift: e = !1, container: s = document.body }) {
  const t = s.style.overflow, n = s.style.paddingRight;
  if (s.style.overflow = "hidden", e) {
    const i = bn();
    if (i > 0) {
      const o = parseInt(n || "0px", 10);
      s.style.paddingRight = `${o + i}px`;
    }
  }
  return () => {
    s.style.overflow = t, s.style.paddingRight = n;
  };
}
function Be(e, s, t, n) {
  var i;
  return function() {
    var r = n || this, l = arguments, c = function() {
      i = null, t || e.apply(r, l);
    }, f = t && !i;
    clearTimeout(i), i = setTimeout(c, s), f && e.apply(r, l);
  };
}
ls() && (kn(), Cn());
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
function qe(e, s) {
  yt[e] ? yt[e](s) : console.warn(`Unable to dispatch site event: ${e} in context:`, s);
}
function Sn(e) {
  return "ulu:" + e;
}
function we(e, s = null, t = { bubbles: !0 }) {
  return new CustomEvent(Sn(e), { detail: s, ...t });
}
function kn() {
  window.addEventListener("resize", Be(() => qe("pageResized", document), 250));
}
function Cn() {
  window.addEventListener("beforeprint", () => {
    qe("beforePrint", document);
  }), window.addEventListener("afterprint", () => {
    qe("afterPrint", document);
  });
}
function Tn(e) {
  return typeof e == "object" && e?.constructor?.name;
}
function $n(e, s, t) {
  const n = Tn(s) || "Logger";
  console[e](n, ...t);
}
function le(e, ...s) {
}
function Ee(e, ...s) {
  $n("error", e, s);
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
    const o = ["left", "right"], r = ["top", "bottom"], { fromX: l, fromY: c } = i;
    if (!o.includes(l) && l !== null) {
      Ee(this, `Invalid fromX: ${l} (left|right|null)`);
      return;
    }
    if (!r.includes(c) && c !== null) {
      Ee(this, `Invalid fromY: ${c} (top|bottom|null)`);
      return;
    }
    if (!l && !c) {
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
    t.manageEvents && (t.enablePointerResizing && s.removeEventListener("pointerdown", this.#n), t.enableKeyboardResizing && s.removeEventListener("keydown", this.#o)), this.#t && clearTimeout(this.#t), this.#c(), t.manageAriaLabel && s.removeAttribute("aria-label"), le(this, "Resizer destroyed.");
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
    this.#e.width = parseInt(o.width, 10), this.#e.height = parseInt(o.height, 10), n.overrideMaxDimensions && (this.resizeHorizontal && (t.style.maxWidth = "none"), this.resizeVertical && (t.style.maxHeight = "none")), this.#s = !0, this.dispatchEvent("resizer:start", s), le(this, "Resize started.", {
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
    this.#s && (this.dispatchEvent("resizer:end"), this.#c(), le(this, "Resize ended."));
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
    const f = {
      newWidth: i,
      newHeight: o,
      totalDeltaX: s,
      totalDeltaY: t,
      event: n
    };
    this.dispatchEvent("resizer:update", f), le(this, "Resizing update.", f);
  }
  /**
   * Public handler for pointerdown events. Call this method from your own event listeners
   * if `manageEvents` is false. Its logic will only execute if `enablePointerResizing` is true.
   * @param {PointerEvent} e The pointerdown event.
   */
  onPointerdown(s) {
    if (!this.options.enablePointerResizing) {
      le(this, "Pointer resizing disabled. Ignoring pointerdown event.");
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
      const r = o.clientX - this.#a, l = o.clientY - this.#l;
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
      le(this, "Keyboard resizing disabled. Ignoring keydown event.");
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
    this.container.dispatchEvent(we(s, t));
  }
}
let Ne = 0;
const An = {
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
    return ++Ne, {
      containerWidth: null,
      titleId: `ulu-modal-${Ne}-title`,
      bodyOverflowValue: null,
      bodyPaddingRightValue: null,
      isResizing: !1
    };
  },
  setup(e) {
    const s = js(), t = T(() => e.title || s.title), n = T(() => {
      const { allowResize: l, position: c } = e;
      if (!l || !c) return;
      const f = ["left", "right", "center"];
      return f.includes(c) ? !0 : (console.warn(`Passed invalid position for resize (${c}), use ${f.join(", ")}`), !1);
    }), i = T(() => e.position === "center" ? "type:resizeBoth" : "type:resizeHorizontal"), o = T(() => ({
      [e.position]: e.position,
      resize: e.allowResize,
      "no-resize": !e.allowResize,
      "no-header": !t.value,
      "body-fills": e.bodyFills,
      "no-backdrop": e.noBackdrop,
      "no-min-height": e.noMinHeight,
      "non-modal": e.nonModal,
      "resizer-active": n.value
    })), { resolvedModifiers: r } = ee({
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
        s === t && pn(t, e) && this.close();
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
        e.newState === "open" ? this.restoreScroll = wn({ preventShift: s }) : this.destroyPreventScroll();
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
}, On = ["aria-labelledby", "aria-describedby"], Rn = ["id"], Un = { class: "modal__title-text" }, xn = {
  key: 2,
  class: "modal__resizer",
  ref: "resizer",
  type: "button"
};
function In(e, s, t, n, i, o) {
  const r = S("UluIcon");
  return a(), y(st, {
    to: t.teleport === !1 ? null : t.teleport,
    disabled: t.teleport === !1
  }, [
    d("dialog", {
      class: h(["modal", [n.resolvedModifiers, t.classes.container]]),
      "aria-labelledby": o.resolvedLabelledby,
      "aria-describedby": t.describedby,
      ref: "container",
      style: z({ width: i.containerWidth }),
      onCancel: s[1] || (s[1] = zs((...l) => o.close && o.close(...l), ["prevent"])),
      onClose: s[2] || (s[2] = (...l) => o.handleDialogCloseEvent && o.handleDialogCloseEvent(...l)),
      onClick: s[3] || (s[3] = (...l) => o.handleClick && o.handleClick(...l)),
      onToggle: s[4] || (s[4] = (...l) => o.handleToggle && o.handleToggle(...l))
    }, [
      n.hasHeader ? (a(), u("header", {
        key: 0,
        class: h(["modal__header", t.classes.header])
      }, [
        d("h2", {
          class: h(["modal__title", t.classes.title]),
          id: i.titleId
        }, [
          m(e.$slots, "title", { close: o.close }, () => [
            t.titleIcon ? (a(), y(r, {
              key: 0,
              class: "modal__title-icon",
              icon: t.titleIcon
            }, null, 8, ["icon"])) : _("", !0),
            d("span", Un, p(t.title), 1)
          ])
        ], 10, Rn),
        d("button", {
          class: "modal__close",
          "aria-label": "Close modal",
          onClick: s[0] || (s[0] = (...l) => o.close && o.close(...l)),
          autofocus: ""
        }, [
          m(e.$slots, "closeIcon", {}, () => [
            A(r, {
              class: "modal__close-icon",
              icon: t.closeIcon || "type:close"
            }, null, 8, ["icon"])
          ])
        ])
      ], 2)) : _("", !0),
      d("div", {
        class: h(["modal__body", t.classes.body])
      }, [
        m(e.$slots, "default", { close: o.close })
      ], 2),
      e.$slots.footer ? (a(), u("div", {
        key: 1,
        class: h(["site-modal__footer", t.classes.footer])
      }, [
        m(e.$slots, "footer", { close: o.close })
      ], 2)) : _("", !0),
      n.resizerEnabled ? (a(), u("button", xn, [
        m(e.$slots, "resizerIcon", {}, () => [
          A(r, {
            class: "modal__resizer-icon",
            icon: t.resizerIcon || n.resizerIconType
          }, null, 8, ["icon"])
        ])
      ], 512)) : _("", !0)
    ], 46, On)
  ], 8, ["to", "disabled"]);
}
const En = /* @__PURE__ */ v(An, [["render", In]]), Se = [], zn = E({
  /**
   * Holds active component options (including component, and options)
   */
  active: null,
  /**
   * Populated with any props passed to open method, bound to modal component
   */
  activeProps: null
}), ke = zn.value, vt = {
  data: ke,
  modals: Se
}, jn = (e) => ({
  open(s, t = null) {
    const n = this.get(s);
    ke.active = ue(n), ke.activeProps = Object.assign({}, n.props, t);
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
}), Fn = {
  componentNameDisplay: "UluModalsDisplay",
  componentNameModal: "UluModal",
  modals: [],
  modalOptions: {}
};
function tf(e, s) {
  const t = Object.assign({}, Fn, s), i = jn((o) => Object.assign({}, t.modalOptions, o));
  e.component(t.componentNameDisplay, yn), e.component(t.componentNameModal, En), t.modals.forEach((o) => {
    i.add(o);
  }), vt.options = t, e.config.globalProperties.$uluModals = i, e.provide("uluModals", i), e.config.globalProperties.$uluModalsState = vt;
}
const Mn = {
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
}, Bn = ["onClick"];
function Pn(e, s, t, n, i, o) {
  const r = S("FaIcon"), l = S("UluIcon");
  return a(), u("div", {
    class: h(["toast", [
      {
        "toast--persistent": !t.toast.duration
      },
      t.toast?.class
    ]])
  }, [
    t.toast.icon || e.$slots.icon ? (a(), u("div", {
      key: 0,
      class: h(["toast__icon", t.classes.icon])
    }, [
      m(e.$slots, "icon", { toast: t.toast }, () => [
        t.toast.icon ? (a(), y(r, {
          key: 0,
          icon: t.toast.icon
        }, null, 8, ["icon"])) : _("", !0)
      ])
    ], 2)) : _("", !0),
    d("div", {
      class: h(["toast__content", t.classes.content])
    }, [
      m(e.$slots, "content", { toast: t.toast }, () => [
        t.toast.title ? (a(), u("div", {
          key: 0,
          class: h(["toast__header", t.classes.header])
        }, [
          d("strong", {
            class: h(["toast__title", t.classes.title])
          }, p(t.toast.title), 3),
          t.toast.date ? (a(), u("span", {
            key: 0,
            class: h(["toast__date", t.classes.date])
          }, p(t.toast.date), 3)) : _("", !0)
        ], 2)) : _("", !0),
        t.toast.description ? (a(), u("div", {
          key: 1,
          class: h(["toast__body", t.classes.body])
        }, p(t.toast.description), 3)) : _("", !0)
      ])
    ], 2),
    t.toast.actions?.length ? (a(), u("div", {
      key: 1,
      class: h(["toast__actions", t.classes.actions])
    }, [
      (a(!0), u($, null, k(t.toast.actions, (c, f) => (a(), u("button", {
        key: f,
        class: h(["toast__action", t.classes.action]),
        onClick: (g) => o.handleAction(g, c)
      }, p(c.label), 11, Bn))), 128))
    ], 2)) : _("", !0),
    d("button", {
      class: h(["toast__close", t.classes.closeButton]),
      onClick: s[0] || (s[0] = (...c) => t.toast.close && t.toast.close(...c))
    }, [
      A(l, { icon: "type:close" })
    ], 2)
  ], 2);
}
const cs = /* @__PURE__ */ v(Mn, [["render", Pn]]), pt = {
  toastOptions: {
    /**
     * Component used to render the toast in the display
     */
    component: ue(cs),
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
let Ln = 0;
const Q = Kt({
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
    const s = `toast-${++Ln}`;
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
    const s = Q.createToast(e);
    return Q.toasts.unshift(s), s.duration && setTimeout(() => {
      this.remove(s.uid);
    }, s.duration), s;
  },
  /**
   * 
   * @param {Object} toast Toast uid
   */
  remove(e) {
    const s = Q.toasts.findIndex((t) => t.uid === e);
    s > -1 && Q.toasts.splice(s, 1);
  },
  /**
   * Remove all toasts
   */
  removeAll() {
    Q.toasts = [];
  }
}, Hn = {
  name: "UluTooltipDisplay",
  data() {
    const { toasts: e, pluginOptions: s } = Q;
    return { toasts: e, pluginOptions: s };
  },
  computed: {
    classes() {
      const { position: e } = this.pluginOptions;
      return e.map((t) => `toast-container--${t}`);
    }
  }
};
function Dn(e, s, t, n, i, o) {
  return a(), y(st, {
    to: i.pluginOptions.teleportTo
  }, [
    A(Qt, {
      class: h(["toast-container", o.classes]),
      name: "toast",
      tag: "div"
    }, {
      default: b(() => [
        (a(!0), u($, null, k(i.toasts, (r) => (a(), y(I(r.component), {
          key: r.uid,
          toast: r
        }, null, 8, ["toast"]))), 128))
      ]),
      _: 1
    }, 8, ["class"])
  ], 8, ["to"]);
}
const Vn = /* @__PURE__ */ v(Hn, [["render", Dn]]);
function sf(e, s = {}) {
  const t = Q.setPluginOptions(s?.plugin);
  Q.setToastOptions(s?.toast), e.component(t.componentName, cs), e.component(t.componentNameDisplay, Vn), e.config.globalProperties.$uluToast = Ze, e.provide("uluToast", Ze);
}
const Nn = {
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
function Wn(e) {
  const s = Object.assign({}, Nn, e), t = E(null), n = E(s.initialValue), i = E(null);
  return (async () => {
    if (!ls()) return;
    await new Promise((g) => {
      document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", () => g()) : g();
    });
    const r = await import("./breakpoints-t2PT-Tjo.js"), { BreakpointManager: l } = r, c = ue(new l(s.plugin));
    t.value = ue(c);
    const f = () => {
      n.value = c.active, i.value = c.resizeDirection;
    };
    f(), s.onReady && s.onReady(c), c.onChange(f);
  })(), { breakpointManager: t, breakpointActive: n, breakpointDirection: i };
}
const Xn = {
  /**
   * Breakpoint for mobile down/max
   */
  breakpointMobile: "small",
  /**
   * Options to pass to useBreakpointManager()
   */
  managerOptions: {}
};
function nf(e, s) {
  const t = E(!1), n = Object.assign({}, Xn, s), { breakpointMobile: i } = n, { onReady: o } = n.managerOptions, r = {
    onReady(O) {
      O.at(i).max({
        on() {
          t.value = !0;
        },
        off() {
          t.value = !1;
        }
      }), o && o(O);
    }
  }, l = Object.assign({}, n.managerOptions, r), {
    breakpointManager: c,
    breakpointActive: f,
    breakpointDirection: g
  } = Wn(l);
  e.provide("uluBreakpointActive", T(() => f.value)), e.provide("uluBreakpointDirection", T(() => g.value)), e.provide("uluBreakpointManager", T(() => c.value)), e.provide("uluIsMobile", T(() => t.value));
}
const of = {
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
    const s = e, { resolvedModifiers: t } = ee({ props: s, baseClass: "button" });
    return (n, i) => (a(), y(x(Hs), { defaultOpen: e.defaultOpen }, {
      default: b(({ open: o }) => [
        d("div", {
          class: h(["accordion", [
            { [e.activeClass]: o },
            e.classes.container,
            x(t)
          ]])
        }, [
          A(x(Ds), {
            class: h(["accordion__summary", [
              { [e.activeClass]: o },
              e.classes.summary
            ]])
          }, {
            default: b(() => [
              m(n.$slots, "summary", { open: o }, () => [
                (a(), y(I(e.summaryTextElement), null, {
                  default: b(() => [
                    w(p(e.summaryText), 1)
                  ]),
                  _: 1
                }))
              ]),
              m(n.$slots, "icon", { open: o }, () => [
                d("span", {
                  class: h(["accordion__icon", e.classes.icon])
                }, [
                  A(V, {
                    icon: o ? "type:collapse" : "type:expand",
                    style: { display: "inline" }
                  }, null, 8, ["icon"])
                ], 2)
              ])
            ]),
            _: 2
          }, 1032, ["class"]),
          A(x(Vs), {
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
let Yn = 0;
const Kn = {
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
      const e = `Ulu-C-${++Yn}`;
      return document.getElementById(e) ? this.getUid() : e;
    }
  }
}, Gn = ["id", "aria-controls", "aria-expanded"], qn = ["id", "aria-hidden", "aria-labelledby"], Zn = { class: "CollapsibleRegion__content-inner" };
function Jn(e, s, t, n, i, o) {
  return a(), u("div", {
    class: h(["CollapsibleRegion", {
      "CollapsibleRegion--open": i.isOpen,
      "CollapsibleRegion--closed": !i.isOpen,
      "CollapsibleRegion--transitioning": i.isTransitioning
    }]),
    onKeydown: s[1] || (s[1] = qt((...r) => o.handleEscape && o.handleEscape(...r), ["esc"]))
  }, [
    d("button", {
      class: "CollapsibleRegion__toggle",
      id: i.toggleId,
      "aria-controls": i.contentId,
      "aria-expanded": i.isOpen,
      onClick: s[0] || (s[0] = (...r) => o.toggle && o.toggle(...r))
    }, [
      m(e.$slots, "toggle", { isOpen: i.isOpen }, () => [
        w(p(t.title), 1)
      ])
    ], 8, Gn),
    he(d("div", {
      class: "CollapsibleRegion__content",
      tabindex: "-1",
      ref: "content",
      id: i.contentId,
      "aria-hidden": !i.isOpen,
      "aria-labelledby": i.toggleId,
      style: z(o.contentStyles)
    }, [
      d("div", Zn, [
        m(e.$slots, "default")
      ])
    ], 12, qn), [
      [es, !i.isHidden]
    ])
  ], 34);
}
const bt = /* @__PURE__ */ v(Kn, [["render", Jn]]), Qn = {
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
    const { resolvedModifiers: s } = ee({ props: e, baseClass: "tag" });
    return { resolvedModifiers: s };
  }
};
function eo(e, s, t, n, i, o) {
  const r = S("UluIcon");
  return a(), u("span", {
    class: h(["tag", [
      {
        "tag--small": t.small,
        "type-small": t.small,
        [`tag--${t.type}`]: t.type
      },
      n.resolvedModifiers
    ]])
  }, [
    t.icon ? (a(), y(r, {
      key: 0,
      icon: t.icon
    }, null, 8, ["icon"])) : _("", !0),
    m(e.$slots, "default", {}, () => [
      w(p(t.text), 1)
    ])
  ], 2);
}
const to = /* @__PURE__ */ v(Qn, [["render", eo]]), so = {
  name: "UluMenu",
  components: {
    UluIcon: V,
    UluTag: to
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
function no(e, s, t, n, i, o) {
  const r = S("UluIcon"), l = S("UluTag"), c = S("UluMenu", !0), f = Gt("ulu-tooltip");
  return t.items?.length ? (a(), u("ul", {
    key: 0,
    class: h(t.classes.list)
  }, [
    (a(!0), u($, null, k(t.items, (g, O) => (a(), u("li", {
      key: O,
      class: h([t.classes.item, g?.classes?.item])
    }, [
      he((a(), y(I(g.to || g.path ? "router-link" : g.click ? "button" : "a"), G({ ref_for: !0 }, {
        ...g.to || g.path ? { to: g.to || g.path } : {},
        ...g.href ? { href: g.href || "#" } : {}
      }, {
        onClick: (j) => {
          o.handleItemClick(j, g);
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
            index: O
          }, () => [
            g.icon ? (a(), y(r, {
              key: 0,
              icon: g.icon,
              class: h([t.classes.linkIcon, g?.classes?.linkIcon])
            }, null, 8, ["icon", "class"])) : _("", !0),
            d("span", {
              class: h([t.classes.linkText, g?.classes?.linkText])
            }, p(g.title), 3),
            g.tag ? (a(), y(l, G({
              key: 1,
              ref_for: !0
            }, g.tag), null, 16)) : _("", !0)
          ])
        ]),
        _: 2
      }, 1040, ["onClick", "class", "activeClass", "exactActiveClass", "aria-label", "id"])), [
        [f, t.iconOnly ? g.title : g.tooltip || null]
      ]),
      !t.noChildren && g?.children?.length ? (a(), y(c, {
        key: 0,
        iconOnly: t.iconOnly,
        classes: t.classes,
        items: g.children
      }, null, 8, ["iconOnly", "classes", "items"])) : _("", !0)
    ], 2))), 128))
  ], 2)) : _("", !0);
}
const us = /* @__PURE__ */ v(so, [["render", no]]), oo = {
  name: "UluMenuStack",
  components: {
    UluMenu: us
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
function io(e, s, t, n, i, o) {
  const r = S("UluMenu");
  return a(), u("nav", {
    class: h(["menu-stack", {
      "menu-stack--hanging": t.hanging,
      "menu-stack--compact": t.compact
    }])
  }, [
    A(r, {
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
const ro = /* @__PURE__ */ v(oo, [["render", io]]), ao = {
  name: "UluDropdown",
  components: {
    UluPopover: it,
    UluMenuStack: ro
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
function lo(e, s, t, n, i, o) {
  const r = S("UluMenuStack"), l = S("UluPopover");
  return a(), y(l, { classes: t.popoverClasses }, {
    trigger: b(({ isOpen: c }) => [
      m(e.$slots, "default", { isOpen: c })
    ]),
    content: b(() => [
      A(r, { items: t.items }, null, 8, ["items"])
    ]),
    _: 3
  }, 8, ["classes"]);
}
const rf = /* @__PURE__ */ v(ao, [["render", lo]]), at = E(!1), Fe = {
  start: [],
  end: []
};
function lt() {
  window.removeEventListener("resize", lt), at.value = !0, Fe.start.forEach((e) => e());
}
function co() {
  at.value = !1, Fe.end.forEach((e) => e()), window.addEventListener("resize", lt);
}
window.addEventListener("resize", lt), window.addEventListener("resize", Be(co, 300));
function wt(e, s) {
  return e.push(s), () => {
    const t = e.findIndex((n) => n === s);
    t > -1 && e.splice(t);
  };
}
function uo() {
  return {
    resizing: at,
    onResizeStart(e) {
      return wt(Fe.start, e);
    },
    onResizeEnd(e) {
      return wt(Fe.end, e);
    }
  };
}
const fo = {
  uluCore: "Core",
  uluIsMobile: "Breakpoints",
  uluBreakpointActive: "Breakpoints",
  uluBreakpointDirection: "Breakpoints",
  uluBreakpointManager: "Breakpoints",
  uluModals: "Modals",
  uluToast: "Toast"
}, St = {};
function ho(e) {
  const s = Jt(e, St);
  if (s === St) {
    const t = fo[e] || "", n = t ? ` from the '${t}' plugin` : "", i = t ? "Please install missing plugin." : "";
    throw new Error(`Required inject: '${e}'${n} was not provided. ${i}`);
  }
  return s;
}
const mo = { class: "layout-flex-baseline" }, go = { class: "type-word-break" }, af = {
  __name: "UluOverflowPopover",
  props: {
    /**
     * Default icon for overflow popover trigger
     */
    triggerIcon: String
  },
  setup(e) {
    const { resizing: s, onResizeEnd: t } = uo(), n = E(null), i = E(!1), o = () => {
      Zt(() => {
        const l = n.value;
        i.value = l.offsetWidth < l.scrollWidth;
      });
    }, r = t(o);
    return Fs(o), Ms(r), (l, c) => (a(), u("div", mo, [
      d("div", {
        class: "type-truncate",
        ref_key: "text",
        ref: n
      }, [
        m(l.$slots, "default")
      ], 512),
      i.value && !x(s) ? (a(), y(it, {
        key: 0,
        triggerAlt: "Show Full Text",
        size: "large"
      }, {
        trigger: b(() => [
          A(V, {
            icon: e.triggerIcon || "type:ellipsis"
          }, null, 8, ["icon"])
        ]),
        content: b(() => [
          d("div", go, [
            m(l.$slots, "default")
          ])
        ]),
        _: 3
      })) : _("", !0)
    ]));
  }
}, lf = {
  __name: "UluTab",
  setup(e) {
    return (s, t) => (a(), y(x(Ns), null, {
      default: b((n) => [
        m(s.$slots, "default", D(X(n)))
      ]),
      _: 3
    }));
  }
}, cf = /* @__PURE__ */ Object.assign({
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
    return (s, t) => (a(), y(x(Ws), {
      defaultIndex: e.defaultIndex,
      vertical: e.vertical
    }, {
      default: b((n) => [
        d("div", {
          class: h(["tabs", {
            "tabs--vertical": e.vertical
          }])
        }, [
          m(s.$slots, "default", D(X(n)))
        ], 2)
      ]),
      _: 3
    }, 8, ["defaultIndex", "vertical"]));
  }
}), uf = {
  __name: "UluTabList",
  setup(e) {
    return (s, t) => (a(), y(x(Xs), { class: "tabs__tablist" }, {
      default: b(() => [
        m(s.$slots, "default")
      ]),
      _: 3
    }));
  }
}, df = {
  __name: "UluTabPanel",
  setup(e) {
    return (s, t) => (a(), y(x(Ys), null, {
      default: b((n) => [
        m(s.$slots, "default", D(X(n)))
      ]),
      _: 3
    }));
  }
}, ff = {
  __name: "UluTabPanels",
  setup(e) {
    return (s, t) => (a(), y(x(Ks), null, {
      default: b((n) => [
        m(s.$slots, "default", D(X(n)))
      ]),
      _: 3
    }));
  }
}, _o = {
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
    const { resolvedModifiers: s } = ee({ props: e, baseClass: "button" });
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
      return this.to ? Me : this.href ? "a" : "button";
    },
    attrs() {
      const { to: e, href: s, download: t, target: n } = this, i = e ? { to: e } : s ? { href: s } : {};
      return s && (n && (i.target = n), t && (i.download = typeof t == "string" ? t : !0)), i;
    }
  }
}, yo = { key: 1 };
function vo(e, s, t, n, i, o) {
  const r = S("UluIcon");
  return a(), y(I(o.element), G({
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
      t.icon && (t.iconBefore || t.iconOnly) ? (a(), y(r, {
        key: 0,
        icon: t.icon,
        class: "button__icon"
      }, null, 8, ["icon"])) : _("", !0),
      (e.$slots.default || t.text) && !t.iconOnly ? (a(), u("span", yo, [
        m(e.$slots, "default", {}, () => [
          w(p(t.text), 1)
        ])
      ])) : _("", !0),
      t.icon && !t.iconBefore && !t.iconOnly ? (a(), y(r, {
        key: 2,
        icon: t.icon,
        class: "button__icon"
      }, null, 8, ["icon"])) : _("", !0),
      m(e.$slots, "after")
    ]),
    _: 3
  }, 16, ["class", "aria-label"]);
}
const po = /* @__PURE__ */ v(_o, [["render", vo]]), bo = {
  name: "UluAlert",
  components: {
    UluButton: po,
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
    const { resolvedModifiers: s } = ee({
      props: e,
      baseClass: "callout",
      internal: T(() => ({
        [e.type]: e.type,
        compact: e.compact
      }))
    });
    return { resolvedModifiers: s };
  }
}, wo = { class: "layout-flex" }, So = { class: "type-small" }, ko = {
  key: 0,
  class: "margin-left-auto align-self-center"
};
function Co(e, s, t, n, i, o) {
  const r = S("UluIcon");
  return a(), u("div", {
    class: h(["callout", n.resolvedModifiers])
  }, [
    d("div", wo, [
      A(r, {
        class: h(["type-large margin-right-small", `color-${t.type}`]),
        icon: t.icon || `type:${t.type}`
      }, null, 8, ["class", "icon"]),
      d("div", So, [
        d("div", null, [
          m(e.$slots, "title", {}, () => [
            d("strong", null, p(t.title), 1)
          ])
        ]),
        d("div", null, [
          m(e.$slots, "description", {}, () => [
            w(p(t.description), 1)
          ])
        ])
      ]),
      e.$slots.action ? (a(), u("div", ko, [
        m(e.$slots, "action")
      ])) : _("", !0)
    ])
  ], 2);
}
const hf = /* @__PURE__ */ v(bo, [["render", Co]]), To = {
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
      return e ? "button" : s ? Me : t ? "a" : "span";
    }
  }
}, $o = ["aria-hidden"], Ao = {
  key: 2,
  class: "hidden-visually"
};
function Oo(e, s, t, n, i, o) {
  return a(), y(I(o.element), {
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
      d("span", {
        class: h(["badge__inner", { "skeleton__background-color": t.skeleton }])
      }, [
        t.text ? (a(), u("span", {
          key: 0,
          "aria-hidden": t.alt ? "true" : null
        }, p(t.text), 9, $o)) : m(e.$slots, "default", { key: 1 }),
        t.alt ? (a(), u("span", Ao, p(t.alt), 1)) : _("", !0)
      ], 2)
    ]),
    _: 3
  }, 8, ["class", "to", "href", "onClick"]);
}
const Ro = /* @__PURE__ */ v(To, [["render", Oo]]), Uo = {
  name: "UluBadgeStack",
  components: {
    UluBadge: Ro
  },
  props: {
    /**
     * Array of props for each badge
     */
    items: Array
  }
}, xo = { class: "badge-stack" };
function Io(e, s, t, n, i, o) {
  const r = S("UluBadge");
  return a(), u("ul", xo, [
    (a(!0), u($, null, k(t.items, (l, c) => (a(), u("li", {
      class: "badge-stack__item",
      key: c
    }, [
      A(r, G({ ref_for: !0 }, l), null, 16)
    ]))), 128))
  ]);
}
const mf = /* @__PURE__ */ v(Uo, [["render", Io]]), Eo = {
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
    const { resolvedModifiers: s } = ee({ props: e, baseClass: "button-verbose" });
    return { resolvedModifiers: s };
  },
  computed: {
    element() {
      return this.to ? Me : this.href ? "a" : "button";
    },
    attrs() {
      const { to: e, href: s, download: t, target: n } = this, i = e ? { to: e } : s ? { href: s } : {};
      return s && (n && (i.target = n), t && (i.download = typeof t == "string" ? t : !0)), i;
    }
  }
}, zo = {
  key: 1,
  class: "button-verbose__body"
};
function jo(e, s, t, n, i, o) {
  const r = S("UluIcon");
  return a(), y(I(o.element), G({
    class: ["button-verbose", [
      {
        "button-verbose--inline": t.inline,
        "button-verbose--full-width": t.fullWidth
      },
      n.resolvedModifiers
    ]]
  }, o.attrs), {
    default: b(() => [
      e.$slots.title || t.title ? (a(), y(I(t.titleElement), {
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
      e.$slots.default || t.body ? (a(), u("span", zo, [
        m(e.$slots, "default", {}, () => [
          w(p(t.body), 1)
        ])
      ])) : _("", !0),
      t.icon ? (a(), y(r, {
        key: 2,
        icon: t.icon,
        class: "button-verbose__icon",
        "aria-hidden": "true"
      }, null, 8, ["icon"])) : _("", !0)
    ]),
    _: 3
  }, 16, ["class"]);
}
const gf = /* @__PURE__ */ v(Eo, [["render", jo]]), Fo = {
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
    const { resolvedModifiers: s } = ee({ props: e, baseClass: "callout" });
    return { resolvedModifiers: s };
  }
};
function Mo(e, s, t, n, i, o) {
  return a(), u("div", {
    class: h(["callout", [n.resolvedModifiers, { "full-height": t.fullHeight }]])
  }, [
    m(e.$slots, "default")
  ], 2);
}
const _f = /* @__PURE__ */ v(Fo, [["render", Mo]]), kt = (e, s) => {
  const t = !(s.to || s.href);
  return t || console.warn("'titleHref' and 'titleTo' can't be used with to or href (nesting links)"), t;
}, Bo = {
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
    const { resolvedModifiers: s } = ee({ props: e, baseClass: "card" });
    return { resolvedModifiers: s };
  },
  computed: {
    resolvedElement() {
      const { cardElement: e, to: s, href: t } = this;
      return s ? Me : t ? "a" : e;
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
}, Po = { class: "card__body" }, Lo = { class: "card__main" }, Ho = ["href", "target"], Do = {
  key: 0,
  class: "card__aside"
}, Vo = ["src", "alt"], No = {
  key: 1,
  class: "card__footer"
};
function Wo(e, s, t, n, i, o) {
  const r = S("router-link");
  return a(), y(I(o.resolvedElement), {
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
    style: z({ cursor: i.cursorStyle }),
    target: t.target,
    to: t.to,
    href: t.href,
    "data-ulu-proxy-click-init": i.proxyClickEnabled
  }, {
    default: b(() => [
      d("div", Po, [
        d("div", Lo, [
          (a(), y(I(t.titleElement), {
            class: h(["card__title", t.classes.title])
          }, {
            default: b(() => [
              t.titleTo ? (a(), y(r, {
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
              }, 8, ["to"])) : t.titleHref ? (a(), u("a", {
                key: 1,
                class: "card__title-link",
                href: t.titleHref,
                target: t.titleTarget,
                ref: "link"
              }, [
                m(e.$slots, "title", {}, () => [
                  w(p(t.title), 1)
                ])
              ], 8, Ho)) : m(e.$slots, "title", { key: 2 }, () => [
                w(p(t.title), 1)
              ])
            ]),
            _: 3
          }, 8, ["class"])),
          m(e.$slots, "body")
        ]),
        e.$slots.body ? (a(), u("div", Do, [
          m(e.$slots, "aside")
        ])) : _("", !0)
      ]),
      e.$slots.image || t.imageSrc ? (a(), u("div", {
        key: 0,
        class: h(["card__image", [
          { "card__image--icon": t.imageIcon },
          t.classes.image
        ]])
      }, [
        m(e.$slots, "image", {}, () => [
          d("img", {
            src: t.imageSrc,
            alt: t.imageAlt
          }, null, 8, Vo)
        ])
      ], 2)) : _("", !0),
      e.$slots.footer ? (a(), u("div", No, [
        m(e.$slots, "footer")
      ])) : _("", !0)
    ]),
    _: 3
  }, 40, ["onMousedown", "onMouseup", "class", "style", "target", "to", "href", "data-ulu-proxy-click-init"]);
}
const yf = /* @__PURE__ */ v(Bo, [["render", Wo]]), Xo = {
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
function Yo(e, s, t, n, i, o) {
  return a(), u("dl", {
    class: h(t.classes.list)
  }, [
    (a(!0), u($, null, k(t.items, (r, l) => (a(), u("div", {
      key: l,
      class: h(t.classes.item)
    }, [
      d("dt", {
        class: h(t.classes.term)
      }, [
        m(e.$slots, "term", {
          item: r,
          index: l
        }, () => [
          w(p(r.term), 1)
        ])
      ], 2),
      d("dd", {
        class: h(t.classes.description)
      }, [
        m(e.$slots, "description", {
          item: r,
          index: l
        }, () => [
          w(p(r.description), 1)
        ])
      ], 2)
    ], 2))), 128))
  ], 2);
}
const vf = /* @__PURE__ */ v(Xo, [["render", Yo]]), Ko = {
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
}, Go = ["href", "target"], qo = { class: "external-link__text" };
function Zo(e, s, t, n, i, o) {
  const r = S("UluIcon");
  return a(), u("a", {
    class: "external-link",
    href: t.href,
    target: t.target
  }, [
    d("span", qo, [
      m(e.$slots, "default", {}, () => [
        w(p(t.text), 1)
      ])
    ]),
    A(r, {
      class: "external-link__icon margin-left-small-x display-inline",
      icon: t.icon || "type:externalLink"
    }, null, 8, ["icon"])
  ], 8, Go);
}
const pf = /* @__PURE__ */ v(Ko, [["render", Zo]]), Jo = {
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
function Qo(e, s, t, n, i, o) {
  return a(), y(I(o.listElement), {
    class: h([
      {
        "list-ordered": t.ordered,
        "list-unordered": t.unordered,
        "list-lines": t.lines,
        "list-compact": t.compact
      },
      t.classes.list
    ]),
    style: z({
      listStyleType: t.listStyleType
    }),
    reversed: t.reversed,
    start: t.start
  }, {
    default: b(() => [
      (a(!0), u($, null, k(t.items, (r, l) => (a(), u("li", {
        key: l,
        class: h(t.classes.listItem)
      }, [
        m(e.$slots, "default", {
          item: r,
          index: l
        }, () => [
          w(p(r), 1)
        ])
      ], 2))), 128))
    ]),
    _: 3
  }, 8, ["class", "style", "reversed", "start"]);
}
const bf = /* @__PURE__ */ v(Jo, [["render", Qo]]), ei = {}, ti = { id: "main-content" };
function si(e, s) {
  return a(), u("main", ti, [
    m(e.$slots, "default")
  ]);
}
const wf = /* @__PURE__ */ v(ei, [["render", si]]), ni = {
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
function oi(e, s, t, n, i, o) {
  return a(), u("div", {
    class: h(["spoke-spinner", o.modifierClass])
  }, s[0] || (s[0] = [
    d("div", { class: "spoke-spinner__spinner" }, [
      d("div"),
      d("div"),
      d("div"),
      d("div"),
      d("div"),
      d("div"),
      d("div"),
      d("div"),
      d("div"),
      d("div"),
      d("div"),
      d("div")
    ], -1)
  ]), 2);
}
const Sf = /* @__PURE__ */ v(ni, [["render", oi]]), ii = {
  name: "UluCheckboxMenu",
  props: {
    options: Array
  },
  methods: {
    getId(e) {
      return `checkbox-menu-opt-${e}`;
    }
  }
}, ri = { class: "site-menu site-form" }, ai = { class: "site-menu__checkbox" }, li = ["id", "onUpdate:modelValue"], ci = ["for"];
function ui(e, s, t, n, i, o) {
  return a(), u("ul", ri, [
    (a(!0), u($, null, k(t.options, (r, l) => (a(), u("li", {
      class: "site-menu__item",
      key: l
    }, [
      d("div", ai, [
        he(d("input", {
          type: "checkbox",
          id: o.getId(l),
          "onUpdate:modelValue": (c) => r.checked = c
        }, null, 8, li), [
          [Bs, r.checked]
        ]),
        d("label", {
          for: o.getId(l)
        }, [
          m(e.$slots, "default", {}, () => [
            w(p(r?.title || r?.text), 1)
          ])
        ], 8, ci)
      ])
    ]))), 128))
  ]);
}
const kf = /* @__PURE__ */ v(ii, [["render", ui]]), di = {
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
}, fi = ["href", "download"], hi = { class: "margin-left-small-x" }, mi = { class: "tag tag--small tag--outline type-small-x" };
function gi(e, s, t, n, i, o) {
  const r = S("FaIcon");
  return a(), u("a", {
    class: "layout-flex-baseline",
    href: o.fileUrl,
    download: t.file.name
  }, [
    A(r, {
      class: "ui-icon",
      icon: ["far", e.$site.getIcon("file")]
    }, null, 8, ["icon"]),
    d("span", hi, [
      w(p(t.file.name) + " ", 1),
      d("span", mi, p(o.fileSize), 1)
    ])
  ], 8, fi);
}
const Cf = /* @__PURE__ */ v(di, [["render", gi]]);
let _i = 0;
const yi = {
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
      id: `file-input-id-${++_i}`
    };
  },
  methods: {
    onChangeFile(e) {
      this.$emit("filesChange", e.target.files);
    }
  }
}, vi = { class: "site-form__item site-form__item--file" }, pi = ["for"], bi = ["multiple", "id"];
function wi(e, s, t, n, i, o) {
  return a(), u("div", vi, [
    d("label", {
      class: h({ "hidden-visually": t.labelHidden }),
      for: i.id
    }, [
      m(e.$slots, "label", {}, () => [
        w(p(t.label), 1)
      ])
    ], 10, pi),
    d("input", G({
      type: "file",
      onChange: s[0] || (s[0] = (...r) => o.onChangeFile && o.onChangeFile(...r)),
      multiple: t.multiple,
      id: i.id
    }, t.inputAttrs), null, 16, bi)
  ]);
}
const Tf = /* @__PURE__ */ v(yi, [["render", wi]]), Si = {
  name: "FormMessage",
  props: {
    warning: Boolean,
    error: Boolean
  }
};
function ki(e, s, t, n, i, o) {
  const r = S("FaIcon");
  return a(), u("p", {
    class: h(["site-form__description", {
      "site-form__error": t.error,
      "site-form__warning": t.warning
    }])
  }, [
    t.error ? (a(), y(r, {
      key: 0,
      icon: e.$site.getIcon("error")
    }, null, 8, ["icon"])) : _("", !0),
    t.warning ? (a(), y(r, {
      key: 1,
      icon: e.$site.getIcon("warning")
    }, null, 8, ["icon"])) : _("", !0),
    m(e.$slots, "default")
  ], 2);
}
const $f = /* @__PURE__ */ v(Si, [["render", ki]]);
let Ci = 0;
const Ti = {
  name: "FormSelect",
  props: {
    label: String,
    modelValue: String,
    options: Array,
    labelHidden: Boolean
  },
  data() {
    return {
      id: `select-id-${++Ci}`
    };
  }
}, $i = { class: "site-form__item site-form__item--select" }, Ai = ["for"], Oi = ["id", "value"], Ri = ["value"];
function Ui(e, s, t, n, i, o) {
  return a(), u("div", $i, [
    d("label", {
      class: h({ "hidden-visually": t.labelHidden }),
      for: i.id
    }, [
      m(e.$slots, "default", {}, () => [
        w(p(t.label), 1)
      ])
    ], 10, Ai),
    d("select", {
      id: i.id,
      value: t.modelValue,
      onInput: s[0] || (s[0] = (r) => e.$emit("update:modelValue", r.target.value))
    }, [
      s[1] || (s[1] = d("option", {
        disabled: "",
        value: ""
      }, "Please select one", -1)),
      (a(!0), u($, null, k(t.options, (r, l) => (a(), u("option", {
        key: l,
        value: r.value
      }, p(r.text), 9, Ri))), 128))
    ], 40, Oi)
  ]);
}
const Af = /* @__PURE__ */ v(Ti, [["render", Ui]]);
let xi = 0;
const Ii = {
  name: "FormText",
  props: {
    label: String,
    modelValue: String,
    labelHidden: Boolean
  },
  data() {
    return {
      id: `text-input-id-${++xi}`
    };
  }
}, Ei = { class: "site-form__item site-form__item--text" }, zi = ["for"], ji = ["value", "id"];
function Fi(e, s, t, n, i, o) {
  return a(), u("div", Ei, [
    d("label", {
      class: h({ "hidden-visually": t.labelHidden }),
      for: i.id
    }, [
      m(e.$slots, "default", {}, () => [
        w(p(t.label), 1)
      ])
    ], 10, zi),
    d("input", {
      type: "text",
      value: t.modelValue,
      onInput: s[0] || (s[0] = (r) => e.$emit("update:modelValue", r.target.value)),
      id: i.id
    }, null, 40, ji)
  ]);
}
const Of = /* @__PURE__ */ v(Ii, [["render", Fi]]), Mi = {
  name: "SearchForm",
  props: {
    placeholder: {
      type: String,
      default: "Titles, keyword…"
    }
  }
}, Bi = { class: "form-theme search-form type-small" }, Pi = { class: "search-form__field" }, Li = ["placeholder"], Hi = {
  class: "search-form__submit button button--primary",
  "aria-label": "Submit Search"
};
function Di(e, s, t, n, i, o) {
  const r = S("FaIcon");
  return a(), u("div", Bi, [
    d("div", Pi, [
      s[0] || (s[0] = d("label", { class: "hidden-visually" }, "Search", -1)),
      d("input", {
        class: "search-form__input",
        type: "text",
        id: "example-input",
        placeholder: t.placeholder
      }, null, 8, Li)
    ]),
    d("button", Hi, [
      A(r, {
        icon: e.$site.getIcon("search")
      }, null, 8, ["icon"])
    ])
  ]);
}
const Rf = /* @__PURE__ */ v(Mi, [["render", Di]]), Uf = {
  __name: "UluAdaptiveLayout",
  setup(e) {
    const s = ho("uluIsMobile");
    return (t, n) => !x(s) || !t.$slots.mobile ? m(t.$slots, "default", { key: 0 }) : m(t.$slots, "mobile", { key: 1 });
  }
};
function Vi(e) {
  var s;
  return e = e.replace(/^[^-_a-zA-Z]+/, "").replace(/^-(?:[-0-9]+)/, "-"), s = e && e.replace(/[^-_a-zA-Z0-9]+/g, "-"), s.toLowerCase();
}
function Ni(e, s = {
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
const Wi = {
  name: "UluDataGrid",
  async mounted() {
    const e = () => Ni(this.$el);
    e(), this.resizeHandler = Be(e, 200, !1, this), window.addEventListener("resize", this.resizeHandler);
  },
  beforeUnmount() {
    this.resizeHandler && window.removeEventListener("resize", this.resizeHandler);
  }
};
function Xi(e, s, t, n, i, o) {
  return a(), u("div", null, [
    m(e.$slots, "default")
  ]);
}
const xf = /* @__PURE__ */ v(Wi, [["render", Xi]]), Yi = {
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
}, Ki = {
  key: 0,
  class: "rail__item rail__item--pull"
};
function Gi(e, s, t, n, i, o) {
  const r = S("UluIcon");
  return a(), u("div", {
    class: h(["rail rail--title-rail", {
      "rail--rule": t.rule
    }])
  }, [
    d("div", {
      class: h(["rail__item rail__item--title", t.classes.itemTitle])
    }, [
      (a(), y(I(t.titleElement), {
        class: h(["layout-flex type-max-width-small no-margin", t.classes.title]),
        style: z({ alignItems: t.iconAlign })
      }, {
        default: b(() => [
          t.icon ? (a(), y(r, {
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
    e.$slots.end ? (a(), u("div", Ki, [
      m(e.$slots, "end")
    ])) : _("", !0)
  ], 2);
}
const If = /* @__PURE__ */ v(Yi, [["render", Gi]]), qi = {
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
function Zi(e, s, t, n, i, o) {
  const r = S("router-link"), l = S("UluIcon");
  return t.items.length ? (a(), u("nav", {
    key: 0,
    class: h(t.classes.nav),
    "aria-label": "Breadcrumb"
  }, [
    d("ul", {
      class: h(t.classes.list)
    }, [
      (a(!0), u($, null, k(t.items, (c, f) => (a(), u("li", {
        key: f,
        class: h(t.classes.item)
      }, [
        A(r, {
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
        f < t.items.length - 1 ? m(e.$slots, "separator", { key: 0 }, () => [
          A(l, {
            class: h(t.classes.separator),
            icon: t.separatorIcon || "type:pathSeparator"
          }, null, 8, ["class", "icon"])
        ]) : _("", !0)
      ], 2))), 128))
    ], 2)
  ], 2)) : _("", !0);
}
const Ef = /* @__PURE__ */ v(qi, [["render", Zi]]), Ji = {
  name: "UluNavStrip",
  components: {
    UluMenu: us
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
function Qi(e, s, t, n, i, o) {
  const r = S("UluMenu");
  return a(), u("nav", {
    class: h(["nav-strip", {
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
const zf = /* @__PURE__ */ v(Ji, [["render", Qi]]), er = {}, tr = {
  class: "site-skip-link hidden-visually-focusable",
  href: "#main-content"
};
function sr(e, s) {
  return a(), u("a", tr, " Skip to main content ");
}
const jf = /* @__PURE__ */ v(er, [["render", sr]]), nr = {
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
function or(e, s, t, n, i, o) {
  return t.text != null ? (a(), y(I(t.element), { key: 0 }, {
    default: b(() => [
      w(p(t.text), 1)
    ]),
    _: 1
  })) : _("", !0);
}
const Ff = /* @__PURE__ */ v(nr, [["render", or]]), ir = {}, rr = { style: { display: "none" } };
function ar(e, s) {
  return a(), u("span", rr);
}
const Mf = /* @__PURE__ */ v(ir, [["render", ar]]), lr = {};
function cr(e, s) {
  const t = S("router-view");
  return a(), y(t);
}
const Bf = /* @__PURE__ */ v(lr, [["render", cr]]);
function Ce(e = 0, s = 100) {
  return e = Math.ceil(e), s = Math.floor(s), Math.floor(Math.random() * (s - e) + e);
}
const ur = {
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
}, dr = ["src", "alt"];
function fr(e, s, t, n, i, o) {
  return a(), u("img", {
    src: o.src,
    alt: t.alt
  }, null, 8, dr);
}
const Pf = /* @__PURE__ */ v(ur, [["render", fr]]), hr = {
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
function mr(e, s, t, n, i, o) {
  return a(!0), u($, null, k(parseInt(t.amount), (r) => (a(), y(I(t.element), { key: r }, {
    default: b(() => s[0] || (s[0] = [
      w(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed semper erat tincidunt tellus vestibulum dictum. Fusce vel augue commodo, egestas diam sed, accumsan leo. Maecenas congue nec nisl et ullamcorper. Maecenas tincidunt, tortor et viverra eleifend, enim leo vestibulum ipsum, quis placerat mi nisi nec ex. Vivamus a justo volutpat, scelerisque elit eget, lacinia ex. Phasellus dapibus sollicitudin tortor, vitae suscipit nunc condimentum ut. Cras suscipit feugiat nibh nec consectetur. Phasellus vitae quam blandit, cursus metus ut, placerat mi. Sed tempor lacus non est interdum imperdiet nec quis metus. Praesent vel eleifend diam. Donec tincidunt eget purus sed posuere. ")
    ])),
    _: 2,
    __: [0]
  }, 1024))), 128);
}
const Lf = /* @__PURE__ */ v(hr, [["render", mr]]), gr = {
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
function _r(e, s, t, n, i, o) {
  return o.title ? (a(), u("p", {
    key: 0,
    tabindex: "-1",
    class: "hidden-visually",
    ref: "el"
  }, p(o.title), 513)) : _("", !0);
}
const Hf = /* @__PURE__ */ v(gr, [["render", _r]]), yr = {
  name: "AnimateNumber",
  props: {
    /**
     * Number to animate as it changes
     */
    value: Number
  },
  watch: {
    value() {
      Gs.to(this, {
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
  return a(), u("span", null, [
    m(e.$slots, "default", { currentValue: i.currentValue }, () => [
      w(p(i.currentValue), 1)
    ])
  ]);
}
const Df = /* @__PURE__ */ v(yr, [["render", vr]]), pr = {
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
}, br = { class: "progress-bar__header" }, wr = {
  key: 0,
  class: "progress-bar__icon"
}, Sr = { class: "hidden-visually" }, kr = { class: "progress-bar__track" }, Cr = { class: "progress-bar__values" }, Tr = { class: "progress-bar__value progress-bar__value--amount" }, $r = {
  key: 0,
  class: "progress-bar__value progress-bar__value--deficit color-status is-danger"
}, Ar = { class: "progress-bar__value progress-bar__value--total" };
function Or(e, s, t, n, i, o) {
  const r = S("StatusIcon");
  return a(), u("div", {
    class: h(["progress-bar", {
      "progress-bar--small": t.small,
      "progress-bar--icon-left": t.iconOnLeft,
      "type-small": t.small
    }])
  }, [
    d("div", br, [
      d("strong", {
        class: h(["progress-bar__label", {
          "type-normal": t.small,
          "hidden-visually": t.labelHidden
        }])
      }, p(t.label), 3),
      o.status ? (a(), u("div", wr, [
        A(r, {
          type: o.status.type
        }, null, 8, ["type"]),
        d("span", Sr, p(o.status.message), 1)
      ])) : _("", !0)
    ]),
    d("div", kr, [
      d("div", {
        class: "progress-bar__bar",
        style: z(`width: ${o.percentage}%`)
      }, null, 4),
      t.deficit ? (a(), u("div", {
        key: 0,
        class: "progress-bar__bar--deficit",
        style: z(`width: ${o.defPercentage}%`)
      }, null, 4)) : _("", !0)
    ]),
    d("div", Cr, [
      d("div", Tr, [
        s[0] || (s[0] = d("strong", { class: "hidden-visually" }, "Amount:", -1)),
        w(" " + p(t.amount), 1)
      ]),
      t.deficit > 0 ? (a(), u("div", $r, [
        s[1] || (s[1] = d("strong", { class: "hidden-visually" }, "Deficit: ", -1)),
        w(" -" + p(t.deficit), 1)
      ])) : _("", !0),
      d("div", Ar, [
        s[2] || (s[2] = d("strong", { class: "hidden-visually" }, "Total:", -1)),
        w(" " + p(t.total), 1)
      ])
    ])
  ], 2);
}
const Vf = /* @__PURE__ */ v(pr, [["render", Or]]);
let Rr = 0;
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
      uid: `progress-donut-${++Rr}`
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
}, xr = { class: "progress-donut__chart" }, Ir = {
  class: "progress-donut__chart-svg",
  viewBox: "0 0 32 32"
}, Er = ["r"], zr = {
  key: 0,
  class: "progress-donut__chart-value"
}, jr = {
  key: 0,
  class: "progress-donut__value type-small-x"
};
function Fr(e, s, t, n, i, o) {
  return a(), u("div", {
    class: h(["progress-donut", {
      "progress-donut--small": t.small,
      "progress-donut--small-below": t.smallBelow,
      "progress-donut--status-low": !t.neutral && t.percentage < 30,
      "progress-donut--status-incomplete": !t.neutral && t.percentage >= 30 && t.percentage < 100,
      "progress-donut--status-complete": !t.neutral && t.percentage >= 100
    }])
  }, [
    s[0] || (s[0] = d("strong", { class: "hidden-visually" }, "Course Progress", -1)),
    d("div", xr, [
      (a(), u("svg", Ir, [
        d("circle", {
          class: "progress-donut__chart-pie",
          ref: "pie",
          r: "16",
          cx: "16",
          cy: "16",
          style: z({ strokeDasharray: o.endDasharray })
        }, null, 4),
        d("circle", {
          class: "progress-donut__chart-mask",
          r: t.small ? 7 : 11,
          cx: "16",
          cy: "16"
        }, null, 8, Er)
      ])),
      t.small ? _("", !0) : (a(), u("strong", zr, p(t.percentage) + "% ", 1))
    ]),
    t.small ? (a(), u("strong", jr, p(t.percentage) + "% ", 1)) : _("", !0)
  ], 2);
}
const Nf = /* @__PURE__ */ v(Ur, [["render", Fr]]);
function Mr(e, s) {
  return !s || !Array.isArray(s) ? [] : s.map((t) => {
    const n = /* @__PURE__ */ new Set(), i = t.getValue || ((r) => r[t.uid]);
    e.forEach((r) => {
      const l = i(r);
      Array.isArray(l) ? l.forEach((c) => c && n.add(c)) : l && n.add(l);
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
function Wf(e, s = {}) {
  const t = (C, M) => {
    const B = C[M];
    return B === null || typeof B > "u" ? [] : Array.isArray(B) ? B : [B];
  }, {
    initialFacets: n,
    facetFields: i,
    initialSearchValue: o = "",
    initialSortType: r = "az",
    noDefaultSorts: l = !1,
    extraSortTypes: c = {},
    searchOptions: f = {},
    getItemFacet: g = t,
    getSortValue: O = (C) => C.title || C.label || ""
  } = s, j = (C) => C.sort((M, B) => {
    const W = O(M), N = O(B);
    return W && N ? String(W).localeCompare(String(N)) : W ? -1 : N ? 1 : 0;
  }), P = {
    az: { text: "A-Z", sort: j },
    za: { text: "Z-A", sort: (C) => j(C).reverse() }
  };
  function F(C) {
    return (C || []).map((M) => ({
      ...M,
      open: M.open || !1,
      children: M.children.map((B) => ({
        ...B,
        selected: B.selected || !1
      })),
      selectedCount: 0
    }));
  }
  const H = T(() => !i || !e.value?.length ? null : Mr(e.value, i)), te = E(F(n || H.value)), _e = E(o), Ue = E(r);
  i && !n && Ps(H, (C) => {
    te.value = F(C);
  });
  const se = T(() => ({
    ...l ? {} : P,
    ...c
  })), Z = T(() => ({
    shouldSort: !0,
    keys: ["title", "label", "description", "author"],
    ...f
  })), ye = T(() => {
    const C = [];
    return te.value.forEach((M) => {
      const { name: B, uid: W, children: N } = M;
      let xe = 0, ft = !1;
      N && N.forEach((ht) => {
        ht.selected && (++xe, ft || (C.push({ uid: W, name: B, children: [] }), ft = !0), C[C.length - 1].children.push(ht));
      }), M.selectedCount = xe;
    }), C;
  }), ve = T(() => ye.value.length ? e.value.filter((C) => ye.value.every((M) => {
    const B = g(C, M.uid);
    return B && B.length ? M.children.some((W) => B.includes(W.uid)) : !1;
  })) : e.value), pe = T(() => _e.value?.length ? new qs(ve.value, Z.value).search(_e.value).map((M) => M.item) : ve.value), L = T(() => {
    const C = se.value[Ue.value]?.sort;
    return typeof C != "function" ? pe.value : C([...pe.value]);
  });
  function J() {
    te.value.forEach((C) => {
      C.children && C.children.forEach((M) => M.selected = !1);
    });
  }
  function ae({ groupUid: C, facetUid: M, selected: B }) {
    const W = te.value.find((N) => N.uid === C);
    if (W) {
      const N = W.children.find((xe) => xe.uid === M);
      N && (N.selected = B);
    }
  }
  return {
    // State
    facets: te,
    searchValue: _e,
    selectedSort: Ue,
    sortTypes: se,
    // Computed
    displayItems: L,
    selectedFacets: ye,
    // Methods
    clearFilters: J,
    handleFacetChange: ae
  };
}
const Br = { class: "UluFacets__facet-list" }, Pr = ["id", "checked", "onChange"], Lr = ["for"], Ct = {
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
    return (o, r) => (a(), u("ul", Br, [
      (a(!0), u($, null, k(e.children, (l) => (a(), u("li", {
        class: h(["UluFacets__facet", e.classFacet]),
        key: l.uid
      }, [
        d("input", {
          class: "UluFacets__facet-checkbox",
          id: i(l),
          type: "checkbox",
          checked: l.selected,
          onChange: (c) => n("facet-change", { groupUid: e.groupUid, facetUid: l.uid, selected: c.target.checked })
        }, null, 40, Pr),
        d("label", {
          class: "UluFacets__facet-label",
          for: i(l)
        }, p(l.label), 9, Lr)
      ], 2))), 128))
    ]));
  }
}, Hr = { class: "UluFacetsFilters" }, Xf = {
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
    return (n, i) => (a(), u("div", Hr, [
      (a(!0), u($, null, k(e.facets, (o) => (a(), y(bt, {
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
          A(Ct, {
            children: o.children.slice(0, e.maxVisible),
            groupUid: o.uid,
            classFacet: e.classes.facet,
            onFacetChange: i[0] || (i[0] = (r) => t("facet-change", r))
          }, null, 8, ["children", "groupUid", "classFacet"]),
          o.children.length > e.maxVisible ? (a(), y(bt, {
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
              A(Ct, {
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
}, Dr = { class: "UluFacetsResults" }, Vr = {
  key: 1,
  class: "UluFacetsResults__empty"
}, Yf = {
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
    return (s, t) => (a(), u("div", Dr, [
      e.items.length ? (a(), y(Qt, {
        key: 0,
        tag: e.tag,
        name: e.transitionName,
        class: "UluFacetsResults__list"
      }, {
        default: b(() => [
          (a(!0), u($, null, k(e.items, (n, i) => (a(), u("li", {
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
      }, 8, ["tag", "name"])) : (a(), u("div", Vr, [
        m(s.$slots, "empty", {}, () => [
          t[0] || (t[0] = d("p", null, "No matching items found.", -1))
        ])
      ]))
    ]));
  }
}, Nr = { class: "UluFacets__keyword-search" }, Wr = ["placeholder"], Kf = {
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
    const o = `facet-view-keyword-${++i}`, r = T({
      get() {
        return t.modelValue;
      },
      set(l) {
        n("update:modelValue", l);
      }
    });
    return (l, c) => (a(), u("div", Nr, [
      d("label", {
        class: h(e.classes.searchLabel),
        for: o
      }, c[1] || (c[1] = [
        d("strong", null, "Search", -1)
      ]), 2),
      he(d("input", {
        id: o,
        class: h(e.classes.searchInput),
        "onUpdate:modelValue": c[0] || (c[0] = (f) => r.value = f),
        type: "text",
        placeholder: e.placeholder
      }, null, 10, Wr), [
        [Ls, r.value]
      ])
    ]));
  }
}, Xr = { class: "UluFacetsSidebarLayout" }, Yr = { class: "UluFacetsSidebarLayout__header" }, Kr = { class: "UluFacetsSidebarLayout__body" }, Gr = { class: "UluFacetsSidebarLayout__sidebar" }, qr = { class: "UluFacetsSidebarLayout__main" }, Gf = {
  __name: "UluFacetsSidebarLayout",
  setup(e) {
    return (s, t) => (a(), u("div", Xr, [
      d("div", Yr, [
        m(s.$slots, "header")
      ]),
      d("div", Kr, [
        d("div", Gr, [
          m(s.$slots, "sidebar")
        ]),
        d("div", qr, [
          m(s.$slots, "main")
        ])
      ])
    ]));
  }
}, Zr = ["for"], Jr = ["value", "id"], Qr = ["value"], qf = {
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
    return (o, r) => (a(), u("div", {
      class: h(["UluFacetsSort", e.classes.sortForm])
    }, [
      d("label", {
        for: i.value,
        class: h(e.classes.sortFormLabel)
      }, [
        m(o.$slots, "default", {}, () => [
          r[1] || (r[1] = w("Sort:"))
        ])
      ], 10, Zr),
      d("select", {
        value: e.modelValue,
        onChange: r[0] || (r[0] = (l) => n("update:modelValue", l.target.value)),
        id: i.value,
        class: h(e.classes.sortFormSelect)
      }, [
        (a(!0), u($, null, k(e.sortTypes, (l, c) => (a(), u("option", {
          value: c,
          key: c
        }, p(l.text), 9, Qr))), 128))
      ], 42, Jr)
    ], 2));
  }
}, ds = Symbol(), fs = Symbol(), Pe = Symbol(), ea = {
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
      [Pe]: T(() => this.sections),
      [ds]: (e) => {
        const { titleId: s, title: t } = e, { element: n } = e.$refs;
        this.sections.push({
          instance: e,
          titleId: s,
          title: t,
          element: n,
          active: !1
        }), this.update();
      },
      [fs]: (e) => {
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
          const f = this.getSectionIndex(l), g = l.offsetTop, O = s[f], j = f === 0 && i > g, P = f === s.length - 1 && i < g;
          O && this.$nextTick(() => {
            c ? (t(O), O.active = !0) : (j && !n || P && O.active) && t(), this.$emit("sectionChange", {
              section: O,
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
}, ta = { class: "scroll-anchors" };
function sa(e, s, t, n, i, o) {
  return a(), u("div", ta, [
    m(e.$slots, "default")
  ]);
}
const Zf = /* @__PURE__ */ v(ea, [["render", sa]]), na = {
  name: "ScrollAnchorsNav",
  inject: {
    sections: { from: Pe }
  },
  props: {
    element: {
      type: String,
      default: "nav"
    }
  }
}, oa = ["href"];
function ia(e, s, t, n, i, o) {
  return o.sections.length ? (a(), y(I(t.element), {
    key: 0,
    class: "scroll-anchors__nav"
  }, {
    default: b(() => [
      d("ul", null, [
        (a(!0), u($, null, k(o.sections, (r, l) => (a(), u("li", {
          key: l,
          class: h({ "is-active": r.active })
        }, [
          d("a", {
            class: h({ "is-active": r.active }),
            href: `#${r.titleId}`
          }, p(r.title), 11, oa)
        ], 2))), 128))
      ])
    ]),
    _: 1
  })) : _("", !0);
}
const Jf = /* @__PURE__ */ v(na, [["render", ia]]);
function hs(e) {
  requestAnimationFrame(() => {
    const s = new MessageChannel();
    s.port1.onmessage = e, s.port2.postMessage(void 0);
  });
}
const ra = {
  name: "ScrollAnchorsNavAnimated",
  inject: {
    sections: { from: Pe }
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
      e && !this.indicatorAnimReady && hs(() => {
        this.indicatorAnimReady = !0;
      });
    }
  },
  methods: {
    addLinkRef(e, s) {
      this.linkRefs[e] = s;
    }
  }
}, aa = { class: "scroll-anchors__rail" }, la = ["href"];
function ca(e, s, t, n, i, o) {
  return o.sections.length ? (a(), y(I(t.element), {
    key: 0,
    class: "scroll-anchors__nav scroll-anchors__nav--animated"
  }, {
    default: b(() => [
      d("ul", aa, [
        (a(!0), u($, null, k(o.sections, (r, l) => (a(), u("li", {
          key: l,
          class: h({ "is-active": r.active })
        }, [
          d("a", {
            class: h({ "is-active": r.active }),
            ref_for: !0,
            ref: (c) => o.addLinkRef(l, c),
            href: `#${r.titleId}`
          }, p(r.title), 11, la)
        ], 2))), 128))
      ]),
      d("div", {
        class: h(["scroll-anchors__indicator", {
          "scroll-anchors__indicator--can-transition": i.indicatorAnimReady
        }]),
        ref: "indicator",
        style: z({
          opacity: o.indicatorStyles ? "1" : "0",
          transform: `translateY(${o.indicatorStyles.y}px)`,
          height: `${o.indicatorStyles.height}px`
        })
      }, null, 6)
    ]),
    _: 1
  })) : _("", !0);
}
const Qf = /* @__PURE__ */ v(ra, [["render", ca]]), ua = {
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
    register: { from: ds },
    unregister: { from: fs },
    sections: { from: Pe, default: () => T(() => []) }
  },
  data() {
    const { anchorId: e, title: s } = this;
    return {
      titleId: e || `sas-title-${Vi(s)}`
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
function da(e, s, t, n, i, o) {
  return a(), u("div", {
    class: h([t.wrapperClass, { [t.activeClass]: t.activeClass && o.section?.active }]),
    ref: "element"
  }, [
    (a(), y(I(t.titleElement), {
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
const eh = /* @__PURE__ */ v(ua, [["render", da]]), fa = {
  name: "ShowSkeleton",
  props: {
    when: Boolean
  }
};
function ha(e, s, t, n, i, o) {
  const r = S("SkeletonTextInline");
  return t.when ? (a(), y(r, {
    key: 1,
    class: "skeleton"
  })) : m(e.$slots, "default", { key: 0 });
}
const th = /* @__PURE__ */ v(fa, [["render", ha]]);
function ma(e, s) {
  return [...Array(e)].map((t, n) => s(n));
}
function sh(e, s) {
  var t = e.indexOf(s);
  t > -1 && e.splice(t, 1);
}
const ga = {
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
      return ma(this.lines, () => {
        const s = Ce(70, 100);
        let t = 0;
        const n = () => {
          const r = s - t, l = Ce(15, r);
          return t += l, l;
        }, i = [];
        for (; t < s - 15; )
          i.push(n());
        const o = () => i.reduce((r, l) => r + l, 0);
        for (; o() >= s && i.pop(); )
          ;
        return i.map((r) => ({ width: r, alt: Math.random() < 0.5 }));
      });
    }
  }
}, _a = { class: "skeleton" };
function ya(e, s, t, n, i, o) {
  return a(), u("div", _a, [
    (a(!0), u($, null, k(o.linesWithSegments, (r, l) => (a(), u("div", { key: l }, [
      (a(!0), u($, null, k(r, (c) => (a(), u("span", {
        key: c,
        class: h(["skeleton__text skeleton__text--inline", { skeleton__alt: c.alt }]),
        style: z({ width: `${c.width}%` })
      }, null, 6))), 128))
    ]))), 128))
  ]);
}
const nh = /* @__PURE__ */ v(ga, [["render", ya]]), va = {
  name: "SkeletonMedia"
}, pa = { class: "skeleton__block skeleton__block--media layout-flex-center-all" };
function ba(e, s, t, n, i, o) {
  const r = S("FaIcon");
  return a(), u("div", pa, [
    A(r, {
      style: { "font-size": "2rem" },
      icon: "image"
    })
  ]);
}
const oh = /* @__PURE__ */ v(va, [["render", ba]]), wa = {
  name: "SkeletonTextInline"
}, Sa = { class: "skeleton__text skeleton__text--inline" };
function ka(e, s, t, n, i, o) {
  return a(), u("span", Sa);
}
const ih = /* @__PURE__ */ v(wa, [["render", ka]]), Ca = {
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
}, Ta = { class: "slideshow" }, $a = {
  class: "slideshow__control-context",
  ref: "context"
}, Aa = {
  class: "slideshow__track-crop",
  ref: "crop"
}, Oa = {
  class: "slideshow__track",
  ref: "track"
}, Ra = ["tabindex"], Ua = { class: "slideshow__controls" }, xa = { class: "slideshow__controls-item slideshow__controls-item--previous" }, Ia = ["disabled"], Ea = { class: "slideshow__controls-item slideshow__controls-item--next" }, za = ["disabled"], ja = {
  key: 0,
  class: "slideshow__nav",
  ref: "nav"
}, Fa = ["onClick"], Ma = { class: "hidden-visually" };
function Ba(e, s, t, n, i, o) {
  const r = S("FaIcon");
  return a(), u("div", Ta, [
    d("div", $a, [
      d("div", Aa, [
        d("ul", Oa, [
          (a(!0), u($, null, k(i.slides, (l, c) => (a(), u("li", {
            class: h(["slideshow__slide", { "is-active": l.active }]),
            key: c,
            tabindex: t.slideFocusable ? "0" : "-1",
            ref_for: !0,
            ref: (f) => {
              l.element = f;
            }
          }, [
            m(e.$slots, "slide", {
              item: l.item,
              index: c
            })
          ], 10, Ra))), 128))
        ], 512)
      ], 512),
      d("ul", Ua, [
        d("li", xa, [
          d("button", {
            class: "slideshow__control-button slideshow__control-button--previous",
            "aria-label": "Scroll Right",
            onClick: s[0] || (s[0] = (...l) => o.previous && o.previous(...l)),
            disabled: !o.canScrollLeft
          }, [
            A(r, {
              class: "slideshow__control-icon",
              icon: "fas fa-chevron-left"
            })
          ], 8, Ia)
        ]),
        d("li", Ea, [
          d("button", {
            class: "slideshow__control-button slideshow__control-button--next",
            "aria-label": "Scroll Left",
            onClick: s[1] || (s[1] = (...l) => o.next && o.next(...l)),
            disabled: !o.canScrollRight
          }, [
            A(r, {
              class: "slideshow__control-icon",
              icon: "fas fa-chevron-right"
            })
          ], 8, za)
        ])
      ])
    ], 512),
    t.noNav ? _("", !0) : (a(), u("ul", ja, [
      (a(!0), u($, null, k(i.slides, (l, c) => (a(), u("li", {
        class: h(["slideshow__nav-item", { "is-active": l.active }]),
        ref_for: !0,
        ref: (f) => {
          l.navElement = f;
        },
        key: c
      }, [
        d("button", {
          class: h(["slideshow__nav-button", { "is-active": l.active }]),
          onClick: (f) => o.to(c)
        }, [
          m(e.$slots, "nav", {
            item: l.item,
            index: c,
            active: l.active
          }, () => [
            d("span", Ma, "Item " + p(c + 1), 1)
          ])
        ], 10, Fa)
      ], 2))), 128))
    ], 512))
  ]);
}
const Pa = /* @__PURE__ */ v(Ca, [["render", Ba]]), La = {
  name: "ImageSlideShow",
  components: {
    UluSlideShow: Pa
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
      const { offsetWidth: i, scrollLeft: o } = s, { offsetLeft: r, offsetWidth: l } = n, c = o + i, f = r + l;
      let g = null;
      console.log("left/right", o, c), t && n && (f > c ? g = o + (f - c) : r < o && (g = r), g !== null && s.scrollTo({ left: g, top: 0, behavior: "smooth" }));
    }
  }
}, Ha = ["src", "alt"], Da = { class: "slideshow__image-actions" }, Va = ["src", "alt"];
function Na(e, s, t, n, i, o) {
  const r = S("AppButton"), l = S("UluSlideShow");
  return a(), y(l, {
    class: "slideshow--images",
    items: t.images,
    onSlideChange: o.slideChange
  }, {
    slide: b(({ item: c }) => [
      d("img", {
        src: c.src,
        alt: c.alt
      }, null, 8, Ha),
      d("div", Da, [
        t.selectButton ? (a(), y(r, {
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
      d("img", {
        src: t.images[c].src,
        alt: `View image ${c}`
      }, null, 8, Va)
    ]),
    _: 1
  }, 8, ["items", "onSlideChange"]);
}
const rh = /* @__PURE__ */ v(La, [["render", Na]]), Wa = {
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
function Xa(e, s, t, n, i, o) {
  return a(), u("li", {
    class: h(["slideshow__slide", { "is-active": t.active }])
  }, [
    m(e.$slots, "default")
  ], 2);
}
const ah = /* @__PURE__ */ v(Wa, [["render", Xa]]), Ya = {
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
function qa(e, s, t, n, i, o) {
  return a(!0), u($, null, k(t.rows, (r, l) => (a(), u("tr", {
    key: `br-${l}`,
    id: t.optionalAttr(t.isActual && r.id),
    class: h(t.resolveClasses(t.classes.row, { row: r.data, rowIndex: l, isActual: t.isActual, foot: t.foot })),
    style: z({
      height: r.height
    })
  }, [
    (a(!0), u($, null, k(t.rowColumns, (c, f) => (a(), y(I(c.rowHeader ? "th" : "td"), {
      id: t.optionalAttr(t.isActual && c.rowHeader && c.getRowHeaderId(l)),
      scope: t.optionalAttr(t.isActual && c.rowHeader && "row"),
      key: `bc-${f}`,
      headers: t.optionalAttr(t.isActual && t.getCellHeaders(c, l)),
      class: h(t.resolveClasses(c.class, { column: c, index: f, isActual: t.isActual, row: r, rowIndex: l, foot: t.foot })),
      style: z({
        width: t.columnWidth
      })
    }, {
      default: b(() => [
        e.$slots[c.slot] ? m(e.$slots, c.slot, {
          key: 0,
          row: r.data,
          column: c,
          rowIndex: l,
          index: f,
          foot: t.foot,
          isActual: t.isActual
        }) : c.html ? (a(), u("div", {
          key: 1,
          innerHTML: t.value({ row: r, column: c, rowIndex: l, isActual: t.isActual, foot: t.foot })
        }, null, 8, Ga)) : (a(), u($, { key: 2 }, [
          w(p(t.value({ row: r, column: c, rowIndex: l, isActual: t.isActual, foot: t.foot })), 1)
        ], 64))
      ]),
      _: 2
    }, 1032, ["id", "scope", "headers", "class", "style"]))), 128))
  ], 14, Ka))), 128);
}
const Za = /* @__PURE__ */ v(Ya, [["render", qa]]), Ja = {
  name: "UluTableStickyTable",
  components: {
    UluTableStickyRows: Za
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
}, Qa = ["aria-hidden"], el = {
  key: 0,
  class: "table-sticky__caption"
}, tl = ["id"], sl = ["id", "rowspan", "colspan", "data-child-columns", "aria-sort", "scope", "headers"], nl = ["innerHTML"], ol = {
  class: "table-sticky__sort-icon",
  "aria-hidden": "true"
}, il = { class: "table-sticky__sort-icon-inner" }, rl = ["innerHTML"], al = { key: 1 }, ll = { key: 2 };
function cl(e, s, t, n, i, o) {
  const r = S("UluTableStickyRows");
  return a(), u("table", {
    class: h(t.resolveClasses(t.classes.table, { isActual: t.isActual })),
    "aria-hidden": t.isActual ? "false" : "true"
  }, [
    t.caption ? (a(), u("caption", el, p(t.caption), 1)) : _("", !0),
    d("thead", null, [
      (a(!0), u($, null, k(t.headerRows, (l, c) => (a(), u("tr", {
        key: `hr-${c}`,
        id: o.optionalAttr(t.isActual && l.id),
        class: h(t.resolveClasses(t.classes.rowHeader, { row: l, rowIndex: c, isActual: t.isActual })),
        style: z({
          height: l.height
        })
      }, [
        (a(!0), u($, null, k(l.columns, (f, g) => (a(), u("th", {
          key: `hc-${g}`,
          id: o.optionalAttr(t.isActual && f.id),
          rowspan: f.rowspan,
          colspan: f.colspan,
          "data-child-columns": f.columns && f.columns.length,
          class: h([
            {
              "sort-active": f.sortApplied,
              "sort-ascending": f.sortApplied && f.sortAscending,
              "sort-descending": f.sortApplied && !f.sortAscending
            },
            t.resolveClasses(f.classHeader, { column: f, index: g, isActual: t.isActual })
          ]),
          style: z({
            width: f.width
          }),
          "aria-sort": f.sort ? f.sortAscending ? "ascending" : "descending" : null,
          scope: o.optionalAttr(t.isActual && (f.colspan > 1 ? "colgroup" : "col")),
          headers: o.optionalAttr(t.isActual && o.getHeaderHeaders(f, c)),
          ref_for: !0,
          ref: (O) => o.addHeaderRef(f, O)
        }, [
          f.sortable ? (a(), y(I(t.isActual ? "button" : "div"), {
            key: 0,
            class: h(["table-sticky__sort-button", {
              "table-sticky__sort-button--focused": f.sortFocused
            }]),
            onClick: (O) => e.$emit("columnSorted", f),
            onFocus: (O) => o.handleSortFocus(f, !0),
            onBlur: (O) => o.handleSortFocus(f, !1),
            "aria-pressed": f.sortApplied ? "true" : "false"
          }, {
            default: b(() => [
              e.$slots[f.slotHeader] ? m(e.$slots, f.slotHeader, {
                key: 0,
                isActual: t.isActual,
                column: f,
                index: g
              }) : f.htmlTitle ? (a(), u("div", {
                key: 1,
                innerHTML: t.getColumnTitle({ column: f, index: g, isActual: t.isActual })
              }, null, 8, nl)) : (a(), u($, { key: 2 }, [
                w(p(t.getColumnTitle({ column: f, index: g, isActual: t.isActual })), 1)
              ], 64)),
              d("span", ol, [
                d("span", il, [
                  m(e.$slots, "sortIcon", {}, () => [
                    s[0] || (s[0] = w("▼"))
                  ])
                ])
              ])
            ]),
            _: 2
          }, 1064, ["class", "onClick", "onFocus", "onBlur", "aria-pressed"])) : (a(), u($, { key: 1 }, [
            e.$slots[f.slotHeader] ? m(e.$slots, f.slotHeader, {
              key: 0,
              isActual: t.isActual,
              column: f,
              index: g
            }) : f.htmlTitle ? (a(), u("div", {
              key: 1,
              innerHTML: t.getColumnTitle({ column: f, index: g, isActual: t.isActual })
            }, null, 8, rl)) : (a(), u($, { key: 2 }, [
              w(p(t.getColumnTitle({ column: f, index: g, isActual: t.isActual })), 1)
            ], 64))
          ], 64))
        ], 14, sl))), 128))
      ], 14, tl))), 128))
    ]),
    t.rows ? (a(), u("tbody", al, [
      A(r, {
        rows: t.rows,
        rowColumns: t.rowColumns,
        optionalAttr: o.optionalAttr,
        resolveClasses: t.resolveClasses,
        getCellHeaders: o.getCellHeaders,
        isActual: t.isActual,
        columnWidth: t.columnWidth,
        classes: t.classes,
        value: o.value
      }, ce({ _: 2 }, [
        k(e.$slots, (l, c) => ({
          name: c,
          fn: b((f) => [
            m(e.$slots, c, D(X(f)))
          ])
        }))
      ]), 1032, ["rows", "rowColumns", "optionalAttr", "resolveClasses", "getCellHeaders", "isActual", "columnWidth", "classes", "value"])
    ])) : _("", !0),
    t.footerRows ? (a(), u("tfoot", ll, [
      A(r, {
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
      }, ce({ _: 2 }, [
        k(e.$slots, (l, c) => ({
          name: c,
          fn: b((f) => [
            m(e.$slots, c, D(X(f)))
          ])
        }))
      ]), 1032, ["rows", "rowColumns", "optionalAttr", "resolveClasses", "getCellHeaders", "isActual", "columnWidth", "classes", "value"])
    ])) : _("", !0)
  ], 10, Qa);
}
const ul = /* @__PURE__ */ v(Ja, [["render", cl]]);
function dl() {
  this.__data__ = [], this.size = 0;
}
function ms(e, s) {
  return e === s || e !== e && s !== s;
}
function Le(e, s) {
  for (var t = e.length; t--; )
    if (ms(e[t][0], s))
      return t;
  return -1;
}
var fl = Array.prototype, hl = fl.splice;
function ml(e) {
  var s = this.__data__, t = Le(s, e);
  if (t < 0)
    return !1;
  var n = s.length - 1;
  return t == n ? s.pop() : hl.call(s, t, 1), --this.size, !0;
}
function gl(e) {
  var s = this.__data__, t = Le(s, e);
  return t < 0 ? void 0 : s[t][1];
}
function _l(e) {
  return Le(this.__data__, e) > -1;
}
function yl(e, s) {
  var t = this.__data__, n = Le(t, e);
  return n < 0 ? (++this.size, t.push([e, s])) : t[n][1] = s, this;
}
function q(e) {
  var s = -1, t = e == null ? 0 : e.length;
  for (this.clear(); ++s < t; ) {
    var n = e[s];
    this.set(n[0], n[1]);
  }
}
q.prototype.clear = dl;
q.prototype.delete = ml;
q.prototype.get = gl;
q.prototype.has = _l;
q.prototype.set = yl;
function vl() {
  this.__data__ = new q(), this.size = 0;
}
function pl(e) {
  var s = this.__data__, t = s.delete(e);
  return this.size = s.size, t;
}
function bl(e) {
  return this.__data__.get(e);
}
function wl(e) {
  return this.__data__.has(e);
}
var gs = typeof global == "object" && global && global.Object === Object && global, Sl = typeof self == "object" && self && self.Object === Object && self, Y = gs || Sl || Function("return this")(), de = Y.Symbol, _s = Object.prototype, kl = _s.hasOwnProperty, Cl = _s.toString, be = de ? de.toStringTag : void 0;
function Tl(e) {
  var s = kl.call(e, be), t = e[be];
  try {
    e[be] = void 0;
    var n = !0;
  } catch {
  }
  var i = Cl.call(e);
  return n && (s ? e[be] = t : delete e[be]), i;
}
var $l = Object.prototype, Al = $l.toString;
function Ol(e) {
  return Al.call(e);
}
var Rl = "[object Null]", Ul = "[object Undefined]", Tt = de ? de.toStringTag : void 0;
function Oe(e) {
  return e == null ? e === void 0 ? Ul : Rl : Tt && Tt in Object(e) ? Tl(e) : Ol(e);
}
function He(e) {
  var s = typeof e;
  return e != null && (s == "object" || s == "function");
}
var xl = "[object AsyncFunction]", Il = "[object Function]", El = "[object GeneratorFunction]", zl = "[object Proxy]";
function ys(e) {
  if (!He(e))
    return !1;
  var s = Oe(e);
  return s == Il || s == El || s == xl || s == zl;
}
var Xe = Y["__core-js_shared__"], $t = function() {
  var e = /[^.]+$/.exec(Xe && Xe.keys && Xe.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function jl(e) {
  return !!$t && $t in e;
}
var Fl = Function.prototype, Ml = Fl.toString;
function ie(e) {
  if (e != null) {
    try {
      return Ml.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var Bl = /[\\^$.*+?()[\]{}|]/g, Pl = /^\[object .+?Constructor\]$/, Ll = Function.prototype, Hl = Object.prototype, Dl = Ll.toString, Vl = Hl.hasOwnProperty, Nl = RegExp(
  "^" + Dl.call(Vl).replace(Bl, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Wl(e) {
  if (!He(e) || jl(e))
    return !1;
  var s = ys(e) ? Nl : Pl;
  return s.test(ie(e));
}
function Xl(e, s) {
  return e?.[s];
}
function re(e, s) {
  var t = Xl(e, s);
  return Wl(t) ? t : void 0;
}
var $e = re(Y, "Map"), Ae = re(Object, "create");
function Yl() {
  this.__data__ = Ae ? Ae(null) : {}, this.size = 0;
}
function Kl(e) {
  var s = this.has(e) && delete this.__data__[e];
  return this.size -= s ? 1 : 0, s;
}
var Gl = "__lodash_hash_undefined__", ql = Object.prototype, Zl = ql.hasOwnProperty;
function Jl(e) {
  var s = this.__data__;
  if (Ae) {
    var t = s[e];
    return t === Gl ? void 0 : t;
  }
  return Zl.call(s, e) ? s[e] : void 0;
}
var Ql = Object.prototype, ec = Ql.hasOwnProperty;
function tc(e) {
  var s = this.__data__;
  return Ae ? s[e] !== void 0 : ec.call(s, e);
}
var sc = "__lodash_hash_undefined__";
function nc(e, s) {
  var t = this.__data__;
  return this.size += this.has(e) ? 0 : 1, t[e] = Ae && s === void 0 ? sc : s, this;
}
function oe(e) {
  var s = -1, t = e == null ? 0 : e.length;
  for (this.clear(); ++s < t; ) {
    var n = e[s];
    this.set(n[0], n[1]);
  }
}
oe.prototype.clear = Yl;
oe.prototype.delete = Kl;
oe.prototype.get = Jl;
oe.prototype.has = tc;
oe.prototype.set = nc;
function oc() {
  this.size = 0, this.__data__ = {
    hash: new oe(),
    map: new ($e || q)(),
    string: new oe()
  };
}
function ic(e) {
  var s = typeof e;
  return s == "string" || s == "number" || s == "symbol" || s == "boolean" ? e !== "__proto__" : e === null;
}
function De(e, s) {
  var t = e.__data__;
  return ic(s) ? t[typeof s == "string" ? "string" : "hash"] : t.map;
}
function rc(e) {
  var s = De(this, e).delete(e);
  return this.size -= s ? 1 : 0, s;
}
function ac(e) {
  return De(this, e).get(e);
}
function lc(e) {
  return De(this, e).has(e);
}
function cc(e, s) {
  var t = De(this, e), n = t.size;
  return t.set(e, s), this.size += t.size == n ? 0 : 1, this;
}
function me(e) {
  var s = -1, t = e == null ? 0 : e.length;
  for (this.clear(); ++s < t; ) {
    var n = e[s];
    this.set(n[0], n[1]);
  }
}
me.prototype.clear = oc;
me.prototype.delete = rc;
me.prototype.get = ac;
me.prototype.has = lc;
me.prototype.set = cc;
var uc = 200;
function dc(e, s) {
  var t = this.__data__;
  if (t instanceof q) {
    var n = t.__data__;
    if (!$e || n.length < uc - 1)
      return n.push([e, s]), this.size = ++t.size, this;
    t = this.__data__ = new me(n);
  }
  return t.set(e, s), this.size = t.size, this;
}
function ge(e) {
  var s = this.__data__ = new q(e);
  this.size = s.size;
}
ge.prototype.clear = vl;
ge.prototype.delete = pl;
ge.prototype.get = bl;
ge.prototype.has = wl;
ge.prototype.set = dc;
function fc(e, s) {
  for (var t = -1, n = e == null ? 0 : e.length; ++t < n && s(e[t], t, e) !== !1; )
    ;
  return e;
}
var At = function() {
  try {
    var e = re(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}();
function hc(e, s, t) {
  s == "__proto__" && At ? At(e, s, {
    configurable: !0,
    enumerable: !0,
    value: t,
    writable: !0
  }) : e[s] = t;
}
var mc = Object.prototype, gc = mc.hasOwnProperty;
function _c(e, s, t) {
  var n = e[s];
  (!(gc.call(e, s) && ms(n, t)) || t === void 0 && !(s in e)) && hc(e, s, t);
}
function yc(e, s) {
  for (var t = -1, n = Array(e); ++t < e; )
    n[t] = s(t);
  return n;
}
function Re(e) {
  return e != null && typeof e == "object";
}
var vc = "[object Arguments]";
function Ot(e) {
  return Re(e) && Oe(e) == vc;
}
var vs = Object.prototype, pc = vs.hasOwnProperty, bc = vs.propertyIsEnumerable, wc = Ot(/* @__PURE__ */ function() {
  return arguments;
}()) ? Ot : function(e) {
  return Re(e) && pc.call(e, "callee") && !bc.call(e, "callee");
}, ct = Array.isArray;
function Sc() {
  return !1;
}
var ps = typeof exports == "object" && exports && !exports.nodeType && exports, Rt = ps && typeof module == "object" && module && !module.nodeType && module, kc = Rt && Rt.exports === ps, Ut = kc ? Y.Buffer : void 0, Cc = Ut ? Ut.isBuffer : void 0, bs = Cc || Sc, Tc = 9007199254740991, $c = /^(?:0|[1-9]\d*)$/;
function Ac(e, s) {
  var t = typeof e;
  return s = s ?? Tc, !!s && (t == "number" || t != "symbol" && $c.test(e)) && e > -1 && e % 1 == 0 && e < s;
}
var Oc = 9007199254740991;
function ws(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Oc;
}
var Rc = "[object Arguments]", Uc = "[object Array]", xc = "[object Boolean]", Ic = "[object Date]", Ec = "[object Error]", zc = "[object Function]", jc = "[object Map]", Fc = "[object Number]", Mc = "[object Object]", Bc = "[object RegExp]", Pc = "[object Set]", Lc = "[object String]", Hc = "[object WeakMap]", Dc = "[object ArrayBuffer]", Vc = "[object DataView]", Nc = "[object Float32Array]", Wc = "[object Float64Array]", Xc = "[object Int8Array]", Yc = "[object Int16Array]", Kc = "[object Int32Array]", Gc = "[object Uint8Array]", qc = "[object Uint8ClampedArray]", Zc = "[object Uint16Array]", Jc = "[object Uint32Array]", U = {};
U[Nc] = U[Wc] = U[Xc] = U[Yc] = U[Kc] = U[Gc] = U[qc] = U[Zc] = U[Jc] = !0;
U[Rc] = U[Uc] = U[Dc] = U[xc] = U[Vc] = U[Ic] = U[Ec] = U[zc] = U[jc] = U[Fc] = U[Mc] = U[Bc] = U[Pc] = U[Lc] = U[Hc] = !1;
function Qc(e) {
  return Re(e) && ws(e.length) && !!U[Oe(e)];
}
function ut(e) {
  return function(s) {
    return e(s);
  };
}
var Ss = typeof exports == "object" && exports && !exports.nodeType && exports, Te = Ss && typeof module == "object" && module && !module.nodeType && module, eu = Te && Te.exports === Ss, Ye = eu && gs.process, fe = function() {
  try {
    var e = Te && Te.require && Te.require("util").types;
    return e || Ye && Ye.binding && Ye.binding("util");
  } catch {
  }
}(), xt = fe && fe.isTypedArray, tu = xt ? ut(xt) : Qc, su = Object.prototype, nu = su.hasOwnProperty;
function ou(e, s) {
  var t = ct(e), n = !t && wc(e), i = !t && !n && bs(e), o = !t && !n && !i && tu(e), r = t || n || i || o, l = r ? yc(e.length, String) : [], c = l.length;
  for (var f in e)
    nu.call(e, f) && !(r && // Safari 9 has enumerable `arguments.length` in strict mode.
    (f == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    i && (f == "offset" || f == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    o && (f == "buffer" || f == "byteLength" || f == "byteOffset") || // Skip index properties.
    Ac(f, c))) && l.push(f);
  return l;
}
var iu = Object.prototype;
function ks(e) {
  var s = e && e.constructor, t = typeof s == "function" && s.prototype || iu;
  return e === t;
}
function Cs(e, s) {
  return function(t) {
    return e(s(t));
  };
}
var ru = Cs(Object.keys, Object), au = Object.prototype, lu = au.hasOwnProperty;
function cu(e) {
  if (!ks(e))
    return ru(e);
  var s = [];
  for (var t in Object(e))
    lu.call(e, t) && t != "constructor" && s.push(t);
  return s;
}
function uu(e) {
  return e != null && ws(e.length) && !ys(e);
}
function du(e) {
  return uu(e) ? ou(e) : cu(e);
}
var Ts = typeof exports == "object" && exports && !exports.nodeType && exports, It = Ts && typeof module == "object" && module && !module.nodeType && module, fu = It && It.exports === Ts, Et = fu ? Y.Buffer : void 0;
Et && Et.allocUnsafe;
function hu(e, s) {
  return e.slice();
}
function mu(e, s) {
  for (var t = -1, n = e == null ? 0 : e.length, i = 0, o = []; ++t < n; ) {
    var r = e[t];
    s(r, t, e) && (o[i++] = r);
  }
  return o;
}
function gu() {
  return [];
}
var _u = Object.prototype, yu = _u.propertyIsEnumerable, zt = Object.getOwnPropertySymbols, vu = zt ? function(e) {
  return e == null ? [] : (e = Object(e), mu(zt(e), function(s) {
    return yu.call(e, s);
  }));
} : gu;
function pu(e, s) {
  for (var t = -1, n = s.length, i = e.length; ++t < n; )
    e[i + t] = s[t];
  return e;
}
var bu = Cs(Object.getPrototypeOf, Object);
function wu(e, s, t) {
  var n = s(e);
  return ct(e) ? n : pu(n, t(e));
}
function Su(e) {
  return wu(e, du, vu);
}
var Je = re(Y, "DataView"), Qe = re(Y, "Promise"), et = re(Y, "Set"), tt = re(Y, "WeakMap"), jt = "[object Map]", ku = "[object Object]", Ft = "[object Promise]", Mt = "[object Set]", Bt = "[object WeakMap]", Pt = "[object DataView]", Cu = ie(Je), Tu = ie($e), $u = ie(Qe), Au = ie(et), Ou = ie(tt), K = Oe;
(Je && K(new Je(new ArrayBuffer(1))) != Pt || $e && K(new $e()) != jt || Qe && K(Qe.resolve()) != Ft || et && K(new et()) != Mt || tt && K(new tt()) != Bt) && (K = function(e) {
  var s = Oe(e), t = s == ku ? e.constructor : void 0, n = t ? ie(t) : "";
  if (n)
    switch (n) {
      case Cu:
        return Pt;
      case Tu:
        return jt;
      case $u:
        return Ft;
      case Au:
        return Mt;
      case Ou:
        return Bt;
    }
  return s;
});
var Ru = Object.prototype, Uu = Ru.hasOwnProperty;
function xu(e) {
  var s = e.length, t = new e.constructor(s);
  return s && typeof e[0] == "string" && Uu.call(e, "index") && (t.index = e.index, t.input = e.input), t;
}
var Lt = Y.Uint8Array;
function dt(e) {
  var s = new e.constructor(e.byteLength);
  return new Lt(s).set(new Lt(e)), s;
}
function Iu(e, s) {
  var t = dt(e.buffer);
  return new e.constructor(t, e.byteOffset, e.byteLength);
}
var Eu = /\w*$/;
function zu(e) {
  var s = new e.constructor(e.source, Eu.exec(e));
  return s.lastIndex = e.lastIndex, s;
}
var Ht = de ? de.prototype : void 0, Dt = Ht ? Ht.valueOf : void 0;
function ju(e) {
  return Dt ? Object(Dt.call(e)) : {};
}
function Fu(e, s) {
  var t = dt(e.buffer);
  return new e.constructor(t, e.byteOffset, e.length);
}
var Mu = "[object Boolean]", Bu = "[object Date]", Pu = "[object Map]", Lu = "[object Number]", Hu = "[object RegExp]", Du = "[object Set]", Vu = "[object String]", Nu = "[object Symbol]", Wu = "[object ArrayBuffer]", Xu = "[object DataView]", Yu = "[object Float32Array]", Ku = "[object Float64Array]", Gu = "[object Int8Array]", qu = "[object Int16Array]", Zu = "[object Int32Array]", Ju = "[object Uint8Array]", Qu = "[object Uint8ClampedArray]", ed = "[object Uint16Array]", td = "[object Uint32Array]";
function sd(e, s, t) {
  var n = e.constructor;
  switch (s) {
    case Wu:
      return dt(e);
    case Mu:
    case Bu:
      return new n(+e);
    case Xu:
      return Iu(e);
    case Yu:
    case Ku:
    case Gu:
    case qu:
    case Zu:
    case Ju:
    case Qu:
    case ed:
    case td:
      return Fu(e);
    case Pu:
      return new n();
    case Lu:
    case Vu:
      return new n(e);
    case Hu:
      return zu(e);
    case Du:
      return new n();
    case Nu:
      return ju(e);
  }
}
var Vt = Object.create, nd = /* @__PURE__ */ function() {
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
function od(e) {
  return typeof e.constructor == "function" && !ks(e) ? nd(bu(e)) : {};
}
var id = "[object Map]";
function rd(e) {
  return Re(e) && K(e) == id;
}
var Nt = fe && fe.isMap, ad = Nt ? ut(Nt) : rd, ld = "[object Set]";
function cd(e) {
  return Re(e) && K(e) == ld;
}
var Wt = fe && fe.isSet, ud = Wt ? ut(Wt) : cd, $s = "[object Arguments]", dd = "[object Array]", fd = "[object Boolean]", hd = "[object Date]", md = "[object Error]", As = "[object Function]", gd = "[object GeneratorFunction]", _d = "[object Map]", yd = "[object Number]", Os = "[object Object]", vd = "[object RegExp]", pd = "[object Set]", bd = "[object String]", wd = "[object Symbol]", Sd = "[object WeakMap]", kd = "[object ArrayBuffer]", Cd = "[object DataView]", Td = "[object Float32Array]", $d = "[object Float64Array]", Ad = "[object Int8Array]", Od = "[object Int16Array]", Rd = "[object Int32Array]", Ud = "[object Uint8Array]", xd = "[object Uint8ClampedArray]", Id = "[object Uint16Array]", Ed = "[object Uint32Array]", R = {};
R[$s] = R[dd] = R[kd] = R[Cd] = R[fd] = R[hd] = R[Td] = R[$d] = R[Ad] = R[Od] = R[Rd] = R[_d] = R[yd] = R[Os] = R[vd] = R[pd] = R[bd] = R[wd] = R[Ud] = R[xd] = R[Id] = R[Ed] = !0;
R[md] = R[As] = R[Sd] = !1;
function je(e, s, t, n, i, o) {
  var r;
  if (r !== void 0)
    return r;
  if (!He(e))
    return e;
  var l = ct(e);
  if (l)
    r = xu(e);
  else {
    var c = K(e), f = c == As || c == gd;
    if (bs(e))
      return hu(e);
    if (c == Os || c == $s || f && !i)
      r = f ? {} : od(e);
    else {
      if (!R[c])
        return i ? e : {};
      r = sd(e, c);
    }
  }
  o || (o = new ge());
  var g = o.get(e);
  if (g)
    return g;
  o.set(e, r), ud(e) ? e.forEach(function(P) {
    r.add(je(P, s, t, P, e, o));
  }) : ad(e) && e.forEach(function(P, F) {
    r.set(F, je(P, s, t, F, e, o));
  });
  var O = Su, j = l ? void 0 : O(e);
  return fc(j || e, function(P, F) {
    j && (F = P, P = e[F]), _c(r, F, je(P, s, t, F, e, o));
  }), r;
}
var zd = 1, jd = 4;
function Fd(e) {
  return je(e, zd | jd);
}
const Ke = (e) => e.every((s) => typeof s == "object"), Xt = !0, Rs = () => window.innerWidth;
let Yt = Rs();
const Md = {
  name: "UluTableSticky",
  components: {
    UluTableStickyTable: ul
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
      validator: Ke,
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
      resizeHandler: Be(this.onResize.bind(this), 500, !0),
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
      const e = this.idCreator("c"), s = Fd(this.columns), t = (n, i) => {
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
        c && c.forEach((f) => o(1 + r, f)), l.rowspan = c ? 1 : t - r, l.colspan = c ? c.reduce((f, g) => f + g.colspan, 0) : 1, i[r].columns.push(l);
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
      const e = Rs();
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
        this.sizesCalculated = !0, hs(() => {
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
}, Bd = { class: "table-sticky__sticky-wrap table-sticky__sticky-wrap--header" }, Pd = { class: "table-sticky__header-wrap" }, Ld = { class: "table-sticky__sticky-wrap table-sticky__sticky-wrap--first-column-header" }, Hd = { class: "table-sticky__sticky-wrap table-sticky__sticky-wrap--controls" }, Dd = {
  key: 2,
  class: "table-sticky__controls-inner"
}, Vd = ["disabled"], Nd = ["disabled"], Wd = {
  ref: "display",
  class: "table-sticky__display"
};
function Xd(e, s, t, n, i, o) {
  const r = S("UluTableStickyTable");
  return a(), u("div", {
    class: h(["table-sticky", {
      "table-sticky--overflown-x": i.overflownX,
      "table-sticky--can-scroll-right": i.canScrollRight,
      "table-sticky--can-scroll-left": i.canScrollLeft
    }])
  }, [
    d("div", Bd, [
      d("div", Pd, [
        A(r, {
          ref: "header",
          class: "table-sticky__table table-sticky__table--header",
          classes: t.classes,
          caption: t.caption,
          resolveClasses: o.resolveClasses,
          getColumnTitle: t.getColumnTitle,
          idPrefix: t.idPrefix,
          headerRows: i.headerRows,
          style: z({
            opacity: i.sizesCalculated ? "1" : "0",
            pointerEvents: i.sizesCalculated ? "auto" : "none",
            width: i.tableWidth
          }),
          onColumnSorted: o.applySort
        }, ce({ _: 2 }, [
          k(e.$slots, (l, c) => ({
            name: c,
            fn: b((f) => [
              m(e.$slots, c, D(X(f)))
            ])
          }))
        ]), 1032, ["classes", "caption", "resolveClasses", "getColumnTitle", "idPrefix", "headerRows", "style", "onColumnSorted"])
      ])
    ]),
    d("div", Ld, [
      t.firstColumnSticky ? (a(), y(r, {
        key: 0,
        ref: "firstColumnHeader",
        class: "table-sticky__table table-sticky__table--first-column-header",
        classes: t.classes,
        caption: t.caption,
        resolveClasses: o.resolveClasses,
        getColumnTitle: t.getColumnTitle,
        idPrefix: t.idPrefix,
        headerRows: o.headerRowsFirst,
        style: z({
          opacity: o.headerOpacityX,
          pointerEvents: o.headerVisibleX ? "auto" : "none"
        }),
        onColumnSorted: o.applySort
      }, ce({ _: 2 }, [
        k(e.$slots, (l, c) => ({
          name: c,
          fn: b((f) => [
            m(e.$slots, c, D(X(f)))
          ])
        }))
      ]), 1032, ["classes", "caption", "resolveClasses", "getColumnTitle", "idPrefix", "headerRows", "style", "onColumnSorted"])) : _("", !0)
    ]),
    d("div", Hd, [
      he(d("div", {
        class: h(["table-sticky__controls", o.resolveClasses(t.classes.controls)]),
        ref: "controls"
      }, [
        e.$slots.controls ? m(e.$slots, "controls", {
          key: 0,
          scrollLeft: o.scrollLeft,
          scrollRight: o.scrollRight,
          canScrollLeft: i.canScrollLeft,
          canScrollRight: i.canScrollRight
        }) : t.controlsComponent ? (a(), y(I(t.controlsComponent), {
          key: 1,
          scrollLeft: o.scrollLeft,
          scrollRight: o.scrollRight,
          canScrollLeft: i.canScrollLeft,
          canScrollRight: i.canScrollRight
        }, null, 8, ["scrollLeft", "scrollRight", "canScrollLeft", "canScrollRight"])) : (a(), u("div", Dd, [
          d("button", {
            class: h(["table-sticky__control table-sticky__control--left", o.resolveClasses(t.classes.controlButton)]),
            "aria-label": "Scroll Left",
            onClick: s[0] || (s[0] = (...l) => o.scrollLeft && o.scrollLeft(...l)),
            disabled: !i.canScrollLeft
          }, [
            m(e.$slots, "controlLeft", {}, () => [
              s[2] || (s[2] = w(" ← "))
            ])
          ], 10, Vd),
          d("button", {
            class: h(["table-sticky__control table-sticky__control--right", o.resolveClasses(t.classes.controlButton)]),
            "aria-label": "Scroll Right",
            onClick: s[1] || (s[1] = (...l) => o.scrollRight && o.scrollRight(...l)),
            disabled: !i.canScrollRight
          }, [
            m(e.$slots, "controlRight", {}, () => [
              s[3] || (s[3] = w(" → "))
            ])
          ], 10, Nd)
        ]))
      ], 2), [
        [es, o.controlsShown]
      ])
    ]),
    d("div", Wd, [
      A(r, {
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
      }, ce({ _: 2 }, [
        k(e.$slots, (l, c) => ({
          name: c,
          fn: b((f) => [
            m(e.$slots, c, D(X(f)))
          ])
        }))
      ]), 1032, ["classes", "resolveClasses", "headerRows", "rows", "footerRows", "rowColumns", "caption", "idPrefix", "getRowValue", "getColumnTitle", "onVnodeMounted", "onActualHeaderRemoved", "onActualHeaderAdded", "onColumnSorted"])
    ], 512),
    t.firstColumnSticky ? (a(), y(r, {
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
      style: z({
        opacity: o.headerOpacityX,
        pointerEvents: o.headerVisibleX ? "auto" : "none"
      }),
      onColumnSorted: o.applySort
    }, ce({ _: 2 }, [
      k(e.$slots, (l, c) => ({
        name: c,
        fn: b((f) => [
          m(e.$slots, c, D(X(f)))
        ])
      }))
    ]), 1032, ["classes", "resolveClasses", "caption", "headerRows", "columnWidth", "rows", "footerRows", "rowColumns", "idPrefix", "getRowValue", "getColumnTitle", "style", "onColumnSorted"])) : _("", !0)
  ], 2);
}
const lh = /* @__PURE__ */ v(Md, [["render", Xd]]);
export {
  Hf as $,
  V as A,
  bf as B,
  wf as C,
  Sf as D,
  to as E,
  kf as F,
  Cf as G,
  Tf as H,
  $f as I,
  Af as J,
  Of as K,
  Rf as L,
  Uf as M,
  xf as N,
  If as O,
  Ef as P,
  us as Q,
  ro as R,
  zf as S,
  jf as T,
  bt as U,
  Ff as V,
  Mf as W,
  Bf as X,
  Pf as Y,
  Lf as Z,
  of as _,
  Ee as a,
  Df as a0,
  Vf as a1,
  Nf as a2,
  Wf as a3,
  Xf as a4,
  Yf as a5,
  Kf as a6,
  Gf as a7,
  qf as a8,
  Ct as a9,
  Zf as aa,
  Jf as ab,
  Qf as ac,
  eh as ad,
  th as ae,
  nh as af,
  oh as ag,
  ih as ah,
  rh as ai,
  Pa as aj,
  ah as ak,
  lh as al,
  Za as am,
  ul as an,
  vn as ao,
  ee as ap,
  uo as aq,
  ho as ar,
  Wn as as,
  ef as b,
  tf as c,
  sf as d,
  nf as e,
  rf as f,
  Sn as g,
  En as h,
  Qd as i,
  af as j,
  lf as k,
  le as l,
  cf as m,
  uf as n,
  df as o,
  ff as p,
  hf as q,
  sh as r,
  Ro as s,
  mf as t,
  po as u,
  gf as v,
  _f as w,
  yf as x,
  vf as y,
  pf as z
};
