import { reactive as Mt, ref as j, computed as x, resolveDirective as Pt, createElementBlock as d, openBlock as l, Fragment as T, withDirectives as W, createElementVNode as f, unref as U, normalizeClass as h, renderSlot as m, withKeys as Ht, normalizeStyle as I, createCommentVNode as y, nextTick as Lt, toRef as ks, toDisplayString as b, createBlock as p, Teleport as We, resolveDynamicComponent as R, mergeProps as N, inject as Vt, watchEffect as Cs, defineAsyncComponent as Ts, markRaw as ne, normalizeProps as M, toRefs as As, toValue as xe, resolveComponent as S, withModifiers as $s, createVNode as k, useSlots as Os, renderList as C, TransitionGroup as Us, withCtx as v, createTextVNode as w, vShow as Ne, onMounted as Rs, onUnmounted as xs, guardReactiveProps as L, vModelCheckbox as Dt, vModelText as Is, vModelSelect as zs, Transition as nt, createSlots as se } from "vue";
import { inline as Wt, offset as Nt, flip as Xt, shift as Yt, arrow as Kt, useFloating as Gt, autoUpdate as qt } from "@floating-ui/vue";
import { Disclosure as Es, DisclosureButton as js, DisclosurePanel as Fs, Tab as Bs, TabGroup as Ms, TabList as Ps, TabPanel as Hs, TabPanels as Ls } from "@headlessui/vue";
import { RouterLink as Te } from "vue-router";
import Vs from "gsap";
import Ds from "fuse.js";
const ot = {
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
  const t = Mt({ ...ot }), { iconsByType: n, ...i } = s || {};
  i && Object.assign(t, i);
  const o = {
    // Methods to interact with settings
    getSettings() {
      return t;
    },
    getDefaultSettings() {
      return { ...ot };
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
const ve = {
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
}, G = {
  plugin: { ...ve.plugin },
  popover: { ...ve.popover },
  tooltip: { ...ve.tooltip, ...ve.popover }
}, Xe = j(!1), Ye = j(null);
function Ws(e = {}) {
  return Object.assign(G.popover, e.popover), Object.assign(G.tooltip, e.tooltip), Object.assign(G.plugin, e.plugin), G;
}
function Ns(e) {
  return Object.assign({}, G.tooltip, e);
}
function Xs(e) {
  Xe.value = !0, Ye.value = e;
}
function Ys() {
  Xe.value = !1, Ye.value = null;
}
const Se = /* @__PURE__ */ new WeakMap(), Ks = {
  mounted(e, s) {
    it(e, s);
  },
  beforeUpdate(e) {
    rt(e);
  },
  updated(e, s) {
    it(e, s);
  },
  umounted(e) {
    rt(e);
  }
};
function it(e, s) {
  const t = Gs(e, s);
  if (!t) return;
  let n = null;
  const i = () => {
    n || (n = setTimeout(() => {
      Xs(t), clearTimeout(n);
    }, t.delay));
  }, o = () => {
    n && (clearTimeout(n), n = null), Ys();
  };
  t.showEvents.forEach((r) => {
    e.addEventListener(r, i);
  }), t.hideEvents.forEach((r) => {
    e.addEventListener(r, o);
  }), Se.set(e, { onShow: i, onHide: o, config: t });
}
function rt(e) {
  if (!Se.has(e))
    return;
  const { config: s, onShow: t, onHide: n } = Se.get(e);
  s.showEvents.forEach((i) => {
    e.removeEventListener(i, t);
  }), s.hideEvents.forEach((i) => {
    e.removeEventListener(i, n);
  }), Se.delete(e);
}
function Gs(e, s) {
  const { value: t } = s;
  let n;
  if (!(t === !1 || t === null))
    return typeof t == "object" ? n = t : n = { content: t }, Ns(Object.assign({}, { trigger: e }, n));
}
let qs = 0;
function Zs() {
  return `ulu-popovers-uid-${++qs}`;
}
const Js = ["disabled", "aria-expanded", "aria-controls", "aria-label"], Qs = ["aria-hidden", "id", "data-placement"], en = { class: "popover__inner" }, tn = {
  key: 0,
  class: "popover__footer"
}, Ke = {
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
    const t = s, n = e, i = Zs(), o = Object.assign({}, G.popover, n.config), r = j(n.startOpen || !1), a = j(null), c = j(null), u = j(null), g = [
      ...o.inline ? [Wt()] : [],
      ...o.offset ? [Nt(o.offset)] : [],
      Xt(),
      Yt(),
      ...o.arrow ? [Kt({ element: u })] : []
    ], A = {
      placement: o.placement,
      whileElementsMounted: qt,
      middleware: g
    }, {
      floatingStyles: z,
      placement: F,
      middlewareData: E,
      update: H,
      isPositioned: ps
    } = Gt(a, c, A), vs = x(() => {
      const B = E.value?.arrow;
      return B ? {
        position: "absolute",
        left: B?.x != null ? `${B.x}px` : "",
        top: B?.y != null ? `${B.y}px` : ""
      } : null;
    });
    o.onReady && o.onReady({ update: H, isPositioned: ps });
    const ws = () => {
      be(!r.value);
    }, be = (B) => {
      r.value = B;
      const ee = {
        trigger: U(a),
        content: U(c),
        isOpen: U(r)
      }, pe = { isOpen: ee.isOpen };
      Lt(() => {
        r.value ? (H(), window.setTimeout(() => {
          Ss(), n.directFocus(ee), t("toggle", pe);
        }, 0)) : (tt(), n.directFocus(ee), t("toggle", pe));
      });
    };
    let Q;
    const Ss = () => {
      n.clickOutsideCloses && (Q && tt(), Q = (B) => {
        c.value.contains(B.target) || be(!1);
      }, document.addEventListener("click", Q));
    }, tt = () => {
      Q && (document.removeEventListener("click", Q), Q = null);
    }, st = () => be(!1);
    return (B, ee) => {
      const pe = Pt("ulu-tooltip");
      return l(), d(T, null, [
        W((l(), d("button", {
          type: "button",
          ref_key: "trigger",
          ref: a,
          onClick: ws,
          disabled: e.disabled,
          class: h([
            { [e.activeClass]: r.value },
            e.classes.trigger
          ]),
          "aria-expanded": r.value ? "true" : "false",
          "aria-controls": U(i),
          "aria-label": e.triggerAlt
        }, [
          m(B.$slots, "trigger", { isOpen: r.value })
        ], 10, Js)), [
          [pe, e.tooltip ? e.tooltip : null]
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
          id: U(i),
          style: I(U(z)),
          "data-placement": U(F),
          onKeydown: ee[0] || (ee[0] = Ht((Kd) => be(!1), ["esc"])),
          tabindex: "-1"
        }, [
          f("span", en, [
            m(B.$slots, "content", { close: st })
          ]),
          B.$slots.footer ? (l(), d("span", tn, [
            m(B.$slots, "footer", { close: st })
          ])) : y("", !0),
          U(o).arrow ? (l(), d("span", {
            key: 1,
            class: "popover__arrow",
            ref_key: "contentArrow",
            ref: u,
            style: I(vs.value),
            "data-ulu-popover-arrow": ""
          }, null, 4)) : y("", !0)
        ], 46, Qs)
      ], 64);
    };
  }
}, sn = ["data-placement"], nn = ["innerHTML"], on = {
  key: 1,
  class: "popover__inner"
}, rn = {
  __name: "UluTooltipPopover",
  props: {
    config: Object
  },
  setup(e) {
    const s = ks(e.config.trigger), t = j(null), n = j(null), i = [
      ...e.config.inline ? [Wt()] : [],
      ...e.config.offset ? [Nt(e.config.offset)] : [],
      Xt(),
      Yt(),
      ...e.config.arrow ? [Kt({ element: n })] : []
    ], o = {
      placement: e.config.placement,
      whileElementsMounted: qt,
      middleware: i
    }, {
      floatingStyles: r,
      placement: a,
      middlewareData: c,
      update: u,
      isPositioned: g
    } = Gt(s, t, o), A = x(() => {
      const z = c.value?.arrow;
      return z ? {
        position: "absolute",
        left: z?.x != null ? `${z.x}px` : "",
        top: z?.y != null ? `${z.y}px` : ""
      } : null;
    });
    return e.config.onReady && e.config.onReady({ update: u, isPositioned: g }), (z, F) => (l(), d("span", {
      class: h(["popover popover--tooltip is-active", e.config.class]),
      ref_key: "content",
      ref: t,
      "aria-hidden": "true",
      "data-placement": U(a),
      style: I(U(r))
    }, [
      e.config.isHtml ? (l(), d("span", {
        key: 0,
        class: "popover__inner",
        innerHTML: e.config.content
      }, null, 8, nn)) : (l(), d("span", on, b(e.config.content), 1)),
      e.config.arrow ? (l(), d("span", {
        key: 2,
        class: "popover__arrow",
        ref_key: "contentArrow",
        ref: n,
        style: I(A.value)
      }, null, 4)) : y("", !0)
    ], 14, sn));
  }
}, ln = {
  __name: "UluTooltipDisplay",
  setup(e) {
    return (s, t) => (l(), p(We, {
      to: U(G).plugin.tooltipTeleportTo
    }, [
      U(Xe) ? (l(), p(rn, {
        key: 0,
        config: U(Ye)
      }, null, 8, ["config"])) : y("", !0)
    ], 8, ["to"]));
  }
};
function sf(e, s = {}) {
  const t = Ws(s);
  t.plugin.global && (e.directive(t.plugin.directiveName, Ks), e.component("UluTooltipDisplay", ln), e.component("UluPopover", Ke));
}
const _ = (e, s) => {
  const t = e.__vccOpts || e;
  for (const [n, i] of s)
    t[n] = i;
  return t;
}, an = {
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
function cn(e, s, t, n, i, o) {
  return o.currentModal ? (l(), p(R(o.currentModal.component), N({ key: 0 }, o.currentProps, {
    modelValue: i.open,
    "onUpdate:modelValue": s[0] || (s[0] = (r) => i.open = r),
    onVnodeMounted: o.modalMounted,
    onVnodeUnmounted: o.modalUnmounted
  }), null, 16, ["modelValue", "onVnodeMounted", "onVnodeUnmounted"])) : y("", !0);
}
const un = /* @__PURE__ */ _(an, [["render", cn]]);
function dn() {
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
const P = {
  __name: "UluIcon",
  props: {
    /**
     * Icon definition can be string (fa classes), or array or object (any prop format FaIcon accepts)
     * - This will override the 'type' prop if both are provided
     */
    icon: [String, Array, Object, Boolean]
  },
  setup(e) {
    const s = Vt("uluCore"), t = j(null), { getIconProps: n, getClassesFromDefinition: i } = dn();
    let o;
    const r = e, a = x(() => s.getSetting("fontAwesomeStatic")), c = x(() => s.getSetting("iconComponent")), u = x(() => s.getSetting("iconPropResolver")), g = x(() => {
      const { icon: E } = r;
      if (typeof E == "string" && E.startsWith("type:"))
        try {
          const H = E.substring(5);
          return s.getIcon(H);
        } catch (H) {
          return console.warn(H), null;
        }
      return E;
    }), A = x(() => !c.value || !g.value ? null : u.value(g.value)), z = x(() => n(g.value)), F = x(() => i(g.value));
    return Cs(async () => {
      if (!a.value && g.value) {
        if (t.value === null)
          if (o)
            t.value = ne(o.FontAwesomeIcon);
          else {
            const E = Ts(async () => {
              const H = await import("./index.es-HlG3u0J5.js");
              return o = H, H.FontAwesomeIcon;
            });
            t.value = ne(E);
          }
      } else
        t.value = null;
    }), (E, H) => c.value ? (l(), p(R(c.value), M(N({ key: 0 }, A.value)), null, 16)) : !a.value && t.value && g.value ? (l(), p(R(t.value), M(N({ key: 1 }, z.value)), null, 16)) : a.value && g.value ? (l(), d("span", {
      key: 2,
      class: h(F.value),
      "aria-hidden": "true"
    }, null, 2)) : y("", !0);
  }
};
function Be(e) {
  const s = /* @__PURE__ */ new Set();
  if (!e)
    return s;
  if (typeof e == "string")
    e.split(" ").forEach((t) => {
      t && s.add(t);
    });
  else if (Array.isArray(e))
    e.forEach((t) => {
      Be(t).forEach((n) => s.add(n));
    });
  else if (typeof e == "object")
    for (const t in e)
      Object.prototype.hasOwnProperty.call(e, t) && e[t] && t && s.add(t);
  return s;
}
function K({ props: e, baseClass: s, internal: t = {} }) {
  const { modifiers: n } = As(e);
  return { resolvedModifiers: x(() => {
    const o = xe(s), r = Be(xe(n)), a = Be(xe(t));
    if (!o)
      return console.warn("useModifiers: Missing 'baseClass' argument, modifiers will not be applied."), "";
    const c = /* @__PURE__ */ new Set([...a, ...r]);
    return Array.from(c).map((u) => `${o}--${u}`);
  }) };
}
function Zt() {
  return typeof window < "u" && typeof window.document < "u";
}
function fn(e, s) {
  const t = e.getBoundingClientRect();
  return s.clientY < t.top || // above
  s.clientY > t.top + t.height || // below
  s.clientX < t.left || // left side
  s.clientX > t.left + t.width;
}
function hn(e = document.body, s = window) {
  return s.innerWidth - e.clientWidth;
}
function mn({ preventShift: e = !1, container: s = document.body }) {
  const t = s.style.overflow, n = s.style.paddingRight;
  if (s.style.overflow = "hidden", e) {
    const i = hn();
    if (i > 0) {
      const o = parseInt(n || "0px", 10);
      s.style.paddingRight = `${o + i}px`;
    }
  }
  return () => {
    s.style.overflow = t, s.style.paddingRight = n;
  };
}
function Ae(e, s, t, n) {
  var i;
  return function() {
    var r = n || this, a = arguments, c = function() {
      i = null, t || e.apply(r, a);
    }, u = t && !i;
    clearTimeout(i), i = setTimeout(c, s), u && e.apply(r, a);
  };
}
Zt() && (_n(), yn());
const lt = {
  /**
   * Event is dispatched when DOM in the page has changed, triggers updates from
   * all modules listening for the change (init instances, etc)
   * - Is triggered by modules that were responsible for modifying the page
   */
  pageModified(e) {
    e.dispatchEvent(ce("pageModified"));
  },
  /**
   * Event called when page is resized
   */
  pageResized(e) {
    e.dispatchEvent(ce("pageResized"));
  },
  /**
   * Event dispatched before page print begins (teardown/restructure/hide things)
   */
  beforePrint(e) {
    e.dispatchEvent(ce("beforePrint"));
  },
  /**
   * Event dispatched after page print (cleanup)
   */
  afterPrint(e) {
    e.dispatchEvent(ce("afterPrint"));
  }
};
function Me(e, s) {
  lt[e] ? lt[e](s) : console.warn(`Unable to dispatch site event: ${e} in context:`, s);
}
function gn(e) {
  return "ulu:" + e;
}
function ce(e, s = null, t = { bubbles: !0 }) {
  return new CustomEvent(gn(e), { detail: s, ...t });
}
function _n() {
  window.addEventListener("resize", Ae(() => Me("pageResized", document), 250));
}
function yn() {
  window.addEventListener("beforeprint", () => {
    Me("beforePrint", document);
  }), window.addEventListener("afterprint", () => {
    Me("afterPrint", document);
  });
}
function bn(e) {
  return typeof e == "object" && e?.constructor?.name;
}
function pn(e, s, t) {
  const n = bn(s) || "Logger";
  console[e](n, ...t);
}
function te(e, ...s) {
}
function we(e, ...s) {
  pn("error", e, s);
}
class Ge {
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
      we(this, "Missing required elements: control, container");
      return;
    }
    const i = Object.assign({}, Ge.defaults, n);
    this.options = i, this.container = s, this.control = t, this.debug = i.debug;
    const o = ["left", "right"], r = ["top", "bottom"], { fromX: a, fromY: c } = i;
    if (!o.includes(a) && a !== null) {
      we(this, `Invalid fromX: ${a} (left|right|null)`);
      return;
    }
    if (!r.includes(c) && c !== null) {
      we(this, `Invalid fromY: ${c} (top|bottom|null)`);
      return;
    }
    if (!a && !c) {
      we(this, "Invalid fromX/fromY, failed to setup resizer (at least one of fromX or fromY must be set)");
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
    t.manageEvents && (t.enablePointerResizing && s.removeEventListener("pointerdown", this.#n), t.enableKeyboardResizing && s.removeEventListener("keydown", this.#o)), this.#t && clearTimeout(this.#t), this.#c(), t.manageAriaLabel && s.removeAttribute("aria-label"), te(this, "Resizer destroyed.");
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
    this.#e.width = parseInt(o.width, 10), this.#e.height = parseInt(o.height, 10), n.overrideMaxDimensions && (this.resizeHorizontal && (t.style.maxWidth = "none"), this.resizeVertical && (t.style.maxHeight = "none")), this.#s = !0, this.dispatchEvent("resizer:start", s), te(this, "Resize started.", {
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
    this.#s && (this.dispatchEvent("resizer:end"), this.#c(), te(this, "Resize ended."));
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
    this.dispatchEvent("resizer:update", u), te(this, "Resizing update.", u);
  }
  /**
   * Public handler for pointerdown events. Call this method from your own event listeners
   * if `manageEvents` is false. Its logic will only execute if `enablePointerResizing` is true.
   * @param {PointerEvent} e The pointerdown event.
   */
  onPointerdown(s) {
    if (!this.options.enablePointerResizing) {
      te(this, "Pointer resizing disabled. Ignoring pointerdown event.");
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
      const r = o.clientX - this.#l, a = o.clientY - this.#a;
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
      te(this, "Keyboard resizing disabled. Ignoring keydown event.");
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
    this.container.dispatchEvent(ce(s, t));
  }
}
let Ie = 0;
const vn = {
  name: "UluModal",
  components: {
    UluIcon: P
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
    return ++Ie, {
      containerWidth: null,
      titleId: `ulu-modal-${Ie}-title`,
      bodyOverflowValue: null,
      bodyPaddingRightValue: null,
      isResizing: !1
    };
  },
  setup(e) {
    const s = Os(), t = x(() => e.title || s.title), n = x(() => {
      const { allowResize: a, position: c } = e;
      if (!a || !c) return;
      const u = ["left", "right", "center"];
      return u.includes(c) ? !0 : (console.warn(`Passed invalid position for resize (${c}), use ${u.join(", ")}`), !1);
    }), i = x(() => e.position === "center" ? "type:resizeBoth" : "type:resizeHorizontal"), o = x(() => ({
      [e.position]: e.position,
      resize: e.allowResize,
      "no-resize": !e.allowResize,
      "no-header": !t.value,
      "body-fills": e.bodyFills,
      "no-backdrop": e.noBackdrop,
      "no-min-height": e.noMinHeight,
      "non-modal": e.nonModal,
      "resizer-active": n.value
    })), { resolvedModifiers: r } = K({
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
        s === t && fn(t, e) && this.close();
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
        e.newState === "open" ? this.restoreScroll = mn({ preventShift: s }) : this.destroyPreventScroll();
      }
    },
    setupResizer() {
      const { position: e, resizerEnabled: s } = this;
      if (s) {
        const { container: t, resizer: n } = this.$refs, i = e === "center" ? { fromX: "right", fromY: "bottom", multiplier: 2 } : { fromX: e === "right" ? "left" : "right" };
        this.resizerInstance = new Ge(t, n, i), this.handleResizerStart = () => {
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
    ++Ie, this.preventScroll && this.setupPreventScroll(), this.setupResizer();
  },
  beforeUnmount() {
    const { container: e } = this.$refs;
    e && e.open && e.close(), this.destroyPreventScroll(), this.destroyResizer();
  }
}, wn = ["aria-labelledby", "aria-describedby"], Sn = ["id"], kn = { class: "modal__title-text" }, Cn = {
  key: 2,
  class: "modal__resizer",
  ref: "resizer",
  type: "button"
};
function Tn(e, s, t, n, i, o) {
  const r = S("UluIcon");
  return l(), p(We, {
    to: t.teleport === !1 ? null : t.teleport,
    disabled: t.teleport === !1
  }, [
    f("dialog", {
      class: h(["modal", [n.resolvedModifiers, t.classes.container]]),
      "aria-labelledby": o.resolvedLabelledby,
      "aria-describedby": t.describedby,
      ref: "container",
      style: I({ width: i.containerWidth }),
      onCancel: s[1] || (s[1] = $s((...a) => o.close && o.close(...a), ["prevent"])),
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
            t.titleIcon ? (l(), p(r, {
              key: 0,
              class: "modal__title-icon",
              icon: t.titleIcon
            }, null, 8, ["icon"])) : y("", !0),
            f("span", kn, b(t.title), 1)
          ])
        ], 10, Sn),
        f("button", {
          class: "modal__close",
          "aria-label": "Close modal",
          onClick: s[0] || (s[0] = (...a) => o.close && o.close(...a)),
          autofocus: ""
        }, [
          m(e.$slots, "closeIcon", {}, () => [
            k(r, {
              class: "modal__close-icon",
              icon: t.closeIcon || "type:close"
            }, null, 8, ["icon"])
          ])
        ])
      ], 2)) : y("", !0),
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
      ], 2)) : y("", !0),
      n.resizerEnabled ? (l(), d("button", Cn, [
        m(e.$slots, "resizerIcon", {}, () => [
          k(r, {
            class: "modal__resizer-icon",
            icon: t.resizerIcon || n.resizerIconType
          }, null, 8, ["icon"])
        ])
      ], 512)) : y("", !0)
    ], 46, wn)
  ], 8, ["to", "disabled"]);
}
const An = /* @__PURE__ */ _(vn, [["render", Tn]]), ue = [], $n = j({
  /**
   * Holds active component options (including component, and options)
   */
  active: null,
  /**
   * Populated with any props passed to open method, bound to modal component
   */
  activeProps: null
}), de = $n.value, at = {
  data: de,
  modals: ue
}, On = (e) => ({
  open(s, t = null) {
    const n = this.get(s);
    de.active = ne(n), de.activeProps = Object.assign({}, n.props, t);
  },
  /**
   * Close the active modal
   * @param {String|Node} focusTo The element or selector for an element to programmatically focus after modal close
   * @see https://www.deque.com/blog/accessible-routing-in-javascript-frameworks/
   */
  close() {
    de.active = null, de.activeProps = null;
  },
  /**
   * Get a modal's config object by name
   * @return {Object} Modal config object
   */
  get(s) {
    const t = ue.find((n) => n.name === s);
    if (t)
      return t;
    throw new Error(`Unable to find modal named: ${s}`);
  },
  /**
   * Add a modal config
   */
  add(s) {
    const t = e(s);
    ue.push(t);
  },
  /**
   * Removes a modal config by name
   * @return {Object} Modal that was removed
   */
  remove(s) {
    const t = ue.findIndex((n) => n.name === s);
    if (t > -1)
      return ue.splice(t, 1);
    warn("unable to find modal to remove");
  }
}), Un = {
  componentNameDisplay: "UluModalsDisplay",
  componentNameModal: "UluModal",
  modals: [],
  modalOptions: {}
};
function nf(e, s) {
  const t = Object.assign({}, Un, s), i = On((o) => Object.assign({}, t.modalOptions, o));
  e.component(t.componentNameDisplay, un), e.component(t.componentNameModal, An), t.modals.forEach((o) => {
    i.add(o);
  }), at.options = t, e.config.globalProperties.$uluModals = i, e.provide("uluModals", i), e.config.globalProperties.$uluModalsState = at;
}
const Rn = {
  name: "UluToast",
  components: {
    UluIcon: P
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
}, xn = ["onClick"];
function In(e, s, t, n, i, o) {
  const r = S("FaIcon"), a = S("UluIcon");
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
        t.toast.icon ? (l(), p(r, {
          key: 0,
          icon: t.toast.icon
        }, null, 8, ["icon"])) : y("", !0)
      ])
    ], 2)) : y("", !0),
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
          }, b(t.toast.title), 3),
          t.toast.date ? (l(), d("span", {
            key: 0,
            class: h(["toast__date", t.classes.date])
          }, b(t.toast.date), 3)) : y("", !0)
        ], 2)) : y("", !0),
        t.toast.description ? (l(), d("div", {
          key: 1,
          class: h(["toast__body", t.classes.body])
        }, b(t.toast.description), 3)) : y("", !0)
      ])
    ], 2),
    t.toast.actions?.length ? (l(), d("div", {
      key: 1,
      class: h(["toast__actions", t.classes.actions])
    }, [
      (l(!0), d(T, null, C(t.toast.actions, (c, u) => (l(), d("button", {
        key: u,
        class: h(["toast__action", t.classes.action]),
        onClick: (g) => o.handleAction(g, c)
      }, b(c.label), 11, xn))), 128))
    ], 2)) : y("", !0),
    f("button", {
      class: h(["toast__close", t.classes.closeButton]),
      onClick: s[0] || (s[0] = (...c) => t.toast.close && t.toast.close(...c))
    }, [
      k(a, { icon: "type:close" })
    ], 2)
  ], 2);
}
const Jt = /* @__PURE__ */ _(Rn, [["render", In]]), ct = {
  toastOptions: {
    /**
     * Component used to render the toast in the display
     */
    component: ne(Jt),
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
}, { assign: ze } = Object;
let zn = 0;
const Y = Mt({
  toasts: [],
  /**
   * Saveable 
   */
  pluginOptions: ct.pluginOptions,
  toastOptions: ct.toastOptions,
  setToastOptions(e) {
    return this.toastOptions = ze({}, this.toastOptions, e), this.pluginOptions;
  },
  setPluginOptions(e) {
    return this.pluginOptions = ze({}, this.pluginOptions, e), this.pluginOptions;
  },
  createToast(e) {
    const s = `toast-${++zn}`;
    return ze({}, this.toastOptions, e, {
      uid: s,
      close() {
        Pe.remove(s);
      }
    });
  }
}), Pe = {
  /**
   * 
   * @param {Object} options Toast options
   * @returns Toast object (to be used to remove)
   */
  add(e) {
    const s = Y.createToast(e);
    return Y.toasts.unshift(s), s.duration && setTimeout(() => {
      this.remove(s.uid);
    }, s.duration), s;
  },
  /**
   * 
   * @param {Object} toast Toast uid
   */
  remove(e) {
    const s = Y.toasts.findIndex((t) => t.uid === e);
    s > -1 && Y.toasts.splice(s, 1);
  },
  /**
   * Remove all toasts
   */
  removeAll() {
    Y.toasts = [];
  }
}, En = {
  name: "UluTooltipDisplay",
  data() {
    const { toasts: e, pluginOptions: s } = Y;
    return { toasts: e, pluginOptions: s };
  },
  computed: {
    classes() {
      const { position: e } = this.pluginOptions;
      return e.map((t) => `toast-container--${t}`);
    }
  }
};
function jn(e, s, t, n, i, o) {
  return l(), p(We, {
    to: i.pluginOptions.teleportTo
  }, [
    k(Us, {
      class: h(["toast-container", o.classes]),
      name: "toast",
      tag: "div"
    }, {
      default: v(() => [
        (l(!0), d(T, null, C(i.toasts, (r) => (l(), p(R(r.component), {
          key: r.uid,
          toast: r
        }, null, 8, ["toast"]))), 128))
      ]),
      _: 1
    }, 8, ["class"])
  ], 8, ["to"]);
}
const Fn = /* @__PURE__ */ _(En, [["render", jn]]);
function of(e, s = {}) {
  const t = Y.setPluginOptions(s?.plugin);
  Y.setToastOptions(s?.toast), e.component(t.componentName, Jt), e.component(t.componentNameDisplay, Fn), e.config.globalProperties.$uluToast = Pe, e.provide("uluToast", Pe);
}
const Bn = {
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
function Mn(e) {
  const s = Object.assign({}, Bn, e), t = j(null), n = j(s.initialValue), i = j(null);
  return (async () => {
    if (!Zt()) return;
    await new Promise((g) => {
      document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", () => g()) : g();
    });
    const r = await import("./breakpoints-DS8rH5b6.js"), { BreakpointManager: a } = r, c = ne(new a(s.plugin));
    t.value = ne(c);
    const u = () => {
      n.value = c.active, i.value = c.resizeDirection;
    };
    u(), s.onReady && s.onReady(c), c.onChange(u);
  })(), { breakpointManager: t, breakpointActive: n, breakpointDirection: i };
}
const Pn = {
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
  const t = j(!1), n = Object.assign({}, Pn, s), { breakpointMobile: i } = n, { onReady: o } = n.managerOptions, r = {
    onReady(A) {
      A.at(i).max({
        on() {
          t.value = !0;
        },
        off() {
          t.value = !1;
        }
      }), o && o(A);
    }
  }, a = Object.assign({}, n.managerOptions, r), {
    breakpointManager: c,
    breakpointActive: u,
    breakpointDirection: g
  } = Mn(a);
  e.provide("uluBreakpointActive", x(() => u.value)), e.provide("uluBreakpointDirection", x(() => g.value)), e.provide("uluBreakpointManager", x(() => c.value)), e.provide("uluIsMobile", x(() => t.value));
}
const lf = {
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
    const s = e, { resolvedModifiers: t } = K({ props: s, baseClass: "button" });
    return (n, i) => (l(), p(U(Es), { defaultOpen: e.defaultOpen }, {
      default: v(({ open: o }) => [
        f("div", {
          class: h(["accordion", [
            { [e.activeClass]: o },
            e.classes.container,
            U(t)
          ]])
        }, [
          k(U(js), {
            class: h(["accordion__summary", [
              { [e.activeClass]: o },
              e.classes.summary
            ]])
          }, {
            default: v(() => [
              m(n.$slots, "summary", { open: o }, () => [
                (l(), p(R(e.summaryTextElement), null, {
                  default: v(() => [
                    w(b(e.summaryText), 1)
                  ]),
                  _: 1
                }))
              ]),
              m(n.$slots, "icon", { open: o }, () => [
                f("span", {
                  class: h(["accordion__icon", e.classes.icon])
                }, [
                  k(P, {
                    icon: o ? "type:collapse" : "type:expand",
                    style: { display: "inline" }
                  }, null, 8, ["icon"])
                ], 2)
              ])
            ]),
            _: 2
          }, 1032, ["class"]),
          k(U(Fs), {
            class: h(["accordion__content", e.classes.content])
          }, {
            default: v(() => [
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
let Hn = 0;
const Ln = {
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
      const e = `Ulu-C-${++Hn}`;
      return document.getElementById(e) ? this.getUid() : e;
    }
  }
}, Vn = ["id", "aria-controls", "aria-expanded"], Dn = ["id", "aria-hidden", "aria-labelledby"], Wn = { class: "CollapsibleRegion__content-inner" };
function Nn(e, s, t, n, i, o) {
  return l(), d("div", {
    class: h(["CollapsibleRegion", {
      "CollapsibleRegion--open": i.isOpen,
      "CollapsibleRegion--closed": !i.isOpen,
      "CollapsibleRegion--transitioning": i.isTransitioning
    }]),
    onKeydown: s[1] || (s[1] = Ht((...r) => o.handleEscape && o.handleEscape(...r), ["esc"]))
  }, [
    f("button", {
      class: "CollapsibleRegion__toggle",
      id: i.toggleId,
      "aria-controls": i.contentId,
      "aria-expanded": i.isOpen,
      onClick: s[0] || (s[0] = (...r) => o.toggle && o.toggle(...r))
    }, [
      m(e.$slots, "toggle", { isOpen: i.isOpen }, () => [
        w(b(t.title), 1)
      ])
    ], 8, Vn),
    W(f("div", {
      class: "CollapsibleRegion__content",
      tabindex: "-1",
      ref: "content",
      id: i.contentId,
      "aria-hidden": !i.isOpen,
      "aria-labelledby": i.toggleId,
      style: I(o.contentStyles)
    }, [
      f("div", Wn, [
        m(e.$slots, "default")
      ])
    ], 12, Dn), [
      [Ne, !i.isHidden]
    ])
  ], 34);
}
const Xn = /* @__PURE__ */ _(Ln, [["render", Nn]]), Yn = {
  name: "UluTag",
  components: {
    UluIcon: P
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
    const { resolvedModifiers: s } = K({ props: e, baseClass: "tag" });
    return { resolvedModifiers: s };
  }
};
function Kn(e, s, t, n, i, o) {
  const r = S("UluIcon");
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
    t.icon ? (l(), p(r, {
      key: 0,
      icon: t.icon
    }, null, 8, ["icon"])) : y("", !0),
    m(e.$slots, "default", {}, () => [
      w(b(t.text), 1)
    ])
  ], 2);
}
const Gn = /* @__PURE__ */ _(Yn, [["render", Kn]]), qn = {
  name: "UluMenu",
  components: {
    UluIcon: P,
    UluTag: Gn
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
function Zn(e, s, t, n, i, o) {
  const r = S("UluIcon"), a = S("UluTag"), c = S("UluMenu", !0), u = Pt("ulu-tooltip");
  return t.items?.length ? (l(), d("ul", {
    key: 0,
    class: h(t.classes.list)
  }, [
    (l(!0), d(T, null, C(t.items, (g, A) => (l(), d("li", {
      key: A,
      class: h([t.classes.item, g?.classes?.item])
    }, [
      W((l(), p(R(g.to || g.path ? "router-link" : g.click ? "button" : "a"), N({ ref_for: !0 }, {
        ...g.to || g.path ? { to: g.to || g.path } : {},
        ...g.href ? { href: g.href || "#" } : {}
      }, {
        onClick: (z) => {
          o.handleItemClick(z, g);
        },
        class: [t.classes.link, g?.classes?.link],
        activeClass: t.classes.linkActive,
        exactActiveClass: t.classes.linkExactActive,
        "aria-label": t.iconOnly ? g.title : null,
        id: g.id
      }), {
        default: v(() => [
          m(e.$slots, "default", {
            item: g,
            index: A
          }, () => [
            g.icon ? (l(), p(r, {
              key: 0,
              icon: g.icon,
              class: h([t.classes.linkIcon, g?.classes?.linkIcon])
            }, null, 8, ["icon", "class"])) : y("", !0),
            f("span", {
              class: h([t.classes.linkText, g?.classes?.linkText])
            }, b(g.title), 3),
            g.tag ? (l(), p(a, N({
              key: 1,
              ref_for: !0
            }, g.tag), null, 16)) : y("", !0)
          ])
        ]),
        _: 2
      }, 1040, ["onClick", "class", "activeClass", "exactActiveClass", "aria-label", "id"])), [
        [u, t.iconOnly ? g.title : g.tooltip || null]
      ]),
      !t.noChildren && g?.children?.length ? (l(), p(c, {
        key: 0,
        iconOnly: t.iconOnly,
        classes: t.classes,
        items: g.children
      }, null, 8, ["iconOnly", "classes", "items"])) : y("", !0)
    ], 2))), 128))
  ], 2)) : y("", !0);
}
const Qt = /* @__PURE__ */ _(qn, [["render", Zn]]), Jn = {
  name: "UluMenuStack",
  components: {
    UluMenu: Qt
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
function Qn(e, s, t, n, i, o) {
  const r = S("UluMenu");
  return l(), d("nav", {
    class: h(["menu-stack", {
      "menu-stack--hanging": t.hanging,
      "menu-stack--compact": t.compact
    }])
  }, [
    k(r, {
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
const eo = /* @__PURE__ */ _(Jn, [["render", Qn]]), to = {
  name: "UluDropdown",
  components: {
    UluPopover: Ke,
    UluMenuStack: eo
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
function so(e, s, t, n, i, o) {
  const r = S("UluMenuStack"), a = S("UluPopover");
  return l(), p(a, { classes: t.popoverClasses }, {
    trigger: v(({ isOpen: c }) => [
      m(e.$slots, "default", { isOpen: c })
    ]),
    content: v(() => [
      k(r, { items: t.items }, null, 8, ["items"])
    ]),
    _: 3
  }, 8, ["classes"]);
}
const af = /* @__PURE__ */ _(to, [["render", so]]), qe = j(!1), Ce = {
  start: [],
  end: []
};
function Ze() {
  window.removeEventListener("resize", Ze), qe.value = !0, Ce.start.forEach((e) => e());
}
function no() {
  qe.value = !1, Ce.end.forEach((e) => e()), window.addEventListener("resize", Ze);
}
window.addEventListener("resize", Ze), window.addEventListener("resize", Ae(no, 300));
function ut(e, s) {
  return e.push(s), () => {
    const t = e.findIndex((n) => n === s);
    t > -1 && e.splice(t);
  };
}
function oo() {
  return {
    resizing: qe,
    onResizeStart(e) {
      return ut(Ce.start, e);
    },
    onResizeEnd(e) {
      return ut(Ce.end, e);
    }
  };
}
const io = {
  uluCore: "Core",
  uluIsMobile: "Breakpoints",
  uluBreakpointActive: "Breakpoints",
  uluBreakpointDirection: "Breakpoints",
  uluBreakpointManager: "Breakpoints",
  uluModals: "Modals",
  uluToast: "Toast"
}, dt = {};
function ro(e) {
  const s = Vt(e, dt);
  if (s === dt) {
    const t = io[e] || "", n = t ? ` from the '${t}' plugin` : "", i = t ? "Please install missing plugin." : "";
    throw new Error(`Required inject: '${e}'${n} was not provided. ${i}`);
  }
  return s;
}
const lo = { class: "layout-flex-baseline" }, ao = { class: "type-word-break" }, cf = {
  __name: "UluOverflowPopover",
  props: {
    /**
     * Default icon for overflow popover trigger
     */
    triggerIcon: String
  },
  setup(e) {
    const { resizing: s, onResizeEnd: t } = oo(), n = j(null), i = j(!1), o = () => {
      Lt(() => {
        const a = n.value;
        i.value = a.offsetWidth < a.scrollWidth;
      });
    }, r = t(o);
    return Rs(o), xs(r), (a, c) => (l(), d("div", lo, [
      f("div", {
        class: "type-truncate",
        ref_key: "text",
        ref: n
      }, [
        m(a.$slots, "default")
      ], 512),
      i.value && !U(s) ? (l(), p(Ke, {
        key: 0,
        triggerAlt: "Show Full Text",
        size: "large"
      }, {
        trigger: v(() => [
          k(P, {
            icon: e.triggerIcon || "type:ellipsis"
          }, null, 8, ["icon"])
        ]),
        content: v(() => [
          f("div", ao, [
            m(a.$slots, "default")
          ])
        ]),
        _: 3
      })) : y("", !0)
    ]));
  }
}, uf = {
  __name: "UluTab",
  setup(e) {
    return (s, t) => (l(), p(U(Bs), null, {
      default: v((n) => [
        m(s.$slots, "default", M(L(n)))
      ]),
      _: 3
    }));
  }
}, df = /* @__PURE__ */ Object.assign({
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
    return (s, t) => (l(), p(U(Ms), {
      defaultIndex: e.defaultIndex,
      vertical: e.vertical
    }, {
      default: v((n) => [
        f("div", {
          class: h(["tabs", {
            "tabs--vertical": e.vertical
          }])
        }, [
          m(s.$slots, "default", M(L(n)))
        ], 2)
      ]),
      _: 3
    }, 8, ["defaultIndex", "vertical"]));
  }
}), ff = {
  __name: "UluTabList",
  setup(e) {
    return (s, t) => (l(), p(U(Ps), { class: "tabs__tablist" }, {
      default: v(() => [
        m(s.$slots, "default")
      ]),
      _: 3
    }));
  }
}, hf = {
  __name: "UluTabPanel",
  setup(e) {
    return (s, t) => (l(), p(U(Hs), null, {
      default: v((n) => [
        m(s.$slots, "default", M(L(n)))
      ]),
      _: 3
    }));
  }
}, mf = {
  __name: "UluTabPanels",
  setup(e) {
    return (s, t) => (l(), p(U(Ls), null, {
      default: v((n) => [
        m(s.$slots, "default", M(L(n)))
      ]),
      _: 3
    }));
  }
}, co = {
  name: "UluButton",
  components: {
    UluIcon: P
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
    const { resolvedModifiers: s } = K({ props: e, baseClass: "button" });
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
      return this.to ? Te : this.href ? "a" : "button";
    },
    attrs() {
      const { to: e, href: s, download: t, target: n } = this, i = e ? { to: e } : s ? { href: s } : {};
      return s && (n && (i.target = n), t && (i.download = typeof t == "string" ? t : !0)), i;
    }
  }
}, uo = { key: 1 };
function fo(e, s, t, n, i, o) {
  const r = S("UluIcon");
  return l(), p(R(o.element), N({
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
      m(e.$slots, "before"),
      t.icon && (t.iconBefore || t.iconOnly) ? (l(), p(r, {
        key: 0,
        icon: t.icon,
        class: "button__icon"
      }, null, 8, ["icon"])) : y("", !0),
      (e.$slots.default || t.text) && !t.iconOnly ? (l(), d("span", uo, [
        m(e.$slots, "default", {}, () => [
          w(b(t.text), 1)
        ])
      ])) : y("", !0),
      t.icon && !t.iconBefore && !t.iconOnly ? (l(), p(r, {
        key: 2,
        icon: t.icon,
        class: "button__icon"
      }, null, 8, ["icon"])) : y("", !0),
      m(e.$slots, "after")
    ]),
    _: 3
  }, 16, ["class", "aria-label"]);
}
const ho = /* @__PURE__ */ _(co, [["render", fo]]), mo = {
  name: "UluAlert",
  components: {
    UluButton: ho,
    UluIcon: P
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
    const { resolvedModifiers: s } = K({
      props: e,
      baseClass: "callout",
      internal: x(() => ({
        [e.type]: e.type,
        compact: e.compact
      }))
    });
    return { resolvedModifiers: s };
  }
}, go = { class: "layout-flex" }, _o = { class: "type-small" }, yo = {
  key: 0,
  class: "margin-left-auto align-self-center"
};
function bo(e, s, t, n, i, o) {
  const r = S("UluIcon");
  return l(), d("div", {
    class: h(["callout", n.resolvedModifiers])
  }, [
    f("div", go, [
      k(r, {
        class: h(["type-large margin-right-small", `color-${t.type}`]),
        icon: t.icon || `type:${t.type}`
      }, null, 8, ["class", "icon"]),
      f("div", _o, [
        f("div", null, [
          m(e.$slots, "title", {}, () => [
            f("strong", null, b(t.title), 1)
          ])
        ]),
        f("div", null, [
          m(e.$slots, "description", {}, () => [
            w(b(t.description), 1)
          ])
        ])
      ]),
      e.$slots.action ? (l(), d("div", yo, [
        m(e.$slots, "action")
      ])) : y("", !0)
    ])
  ], 2);
}
const gf = /* @__PURE__ */ _(mo, [["render", bo]]), po = {
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
      return e ? "button" : s ? Te : t ? "a" : "span";
    }
  }
}, vo = ["aria-hidden"], wo = {
  key: 2,
  class: "hidden-visually"
};
function So(e, s, t, n, i, o) {
  return l(), p(R(o.element), {
    class: h(["badge", [
      t.size ? `badge--${t.size}` : null,
      t.type ? `badge--${t.type}` : null,
      { "badge--clickable": o.isInteractive }
    ]]),
    to: t.to,
    href: t.href,
    onClick: t.click
  }, {
    default: v(() => [
      f("span", {
        class: h(["badge__inner", { "skeleton__background-color": t.skeleton }])
      }, [
        t.text ? (l(), d("span", {
          key: 0,
          "aria-hidden": t.alt ? "true" : null
        }, b(t.text), 9, vo)) : m(e.$slots, "default", { key: 1 }),
        t.alt ? (l(), d("span", wo, b(t.alt), 1)) : y("", !0)
      ], 2)
    ]),
    _: 3
  }, 8, ["class", "to", "href", "onClick"]);
}
const ko = /* @__PURE__ */ _(po, [["render", So]]), Co = {
  name: "UluBadgeStack",
  components: {
    UluBadge: ko
  },
  props: {
    /**
     * Array of props for each badge
     */
    items: Array
  }
}, To = { class: "badge-stack" };
function Ao(e, s, t, n, i, o) {
  const r = S("UluBadge");
  return l(), d("ul", To, [
    (l(!0), d(T, null, C(t.items, (a, c) => (l(), d("li", {
      class: "badge-stack__item",
      key: c
    }, [
      k(r, N({ ref_for: !0 }, a), null, 16)
    ]))), 128))
  ]);
}
const _f = /* @__PURE__ */ _(Co, [["render", Ao]]), $o = {
  name: "UluButtonVerbose",
  components: {
    UluIcon: P
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
    const { resolvedModifiers: s } = K({ props: e, baseClass: "button-verbose" });
    return { resolvedModifiers: s };
  },
  computed: {
    element() {
      return this.to ? Te : this.href ? "a" : "button";
    },
    attrs() {
      const { to: e, href: s, download: t, target: n } = this, i = e ? { to: e } : s ? { href: s } : {};
      return s && (n && (i.target = n), t && (i.download = typeof t == "string" ? t : !0)), i;
    }
  }
}, Oo = {
  key: 1,
  class: "button-verbose__body"
};
function Uo(e, s, t, n, i, o) {
  const r = S("UluIcon");
  return l(), p(R(o.element), N({
    class: ["button-verbose", [
      {
        "button-verbose--inline": t.inline,
        "button-verbose--full-width": t.fullWidth
      },
      n.resolvedModifiers
    ]]
  }, o.attrs), {
    default: v(() => [
      e.$slots.title || t.title ? (l(), p(R(t.titleElement), {
        key: 0,
        class: "button-verbose__title"
      }, {
        default: v(() => [
          m(e.$slots, "title", {}, () => [
            w(b(t.title), 1)
          ])
        ]),
        _: 3
      })) : y("", !0),
      e.$slots.default || t.body ? (l(), d("span", Oo, [
        m(e.$slots, "default", {}, () => [
          w(b(t.body), 1)
        ])
      ])) : y("", !0),
      t.icon ? (l(), p(r, {
        key: 2,
        icon: t.icon,
        class: "button-verbose__icon",
        "aria-hidden": "true"
      }, null, 8, ["icon"])) : y("", !0)
    ]),
    _: 3
  }, 16, ["class"]);
}
const yf = /* @__PURE__ */ _($o, [["render", Uo]]), Ro = {
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
    const { resolvedModifiers: s } = K({ props: e, baseClass: "callout" });
    return { resolvedModifiers: s };
  }
};
function xo(e, s, t, n, i, o) {
  return l(), d("div", {
    class: h(["callout", [n.resolvedModifiers, { "full-height": t.fullHeight }]])
  }, [
    m(e.$slots, "default")
  ], 2);
}
const bf = /* @__PURE__ */ _(Ro, [["render", xo]]), ft = (e, s) => {
  const t = !(s.to || s.href);
  return t || console.warn("'titleHref' and 'titleTo' can't be used with to or href (nesting links)"), t;
}, Io = {
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
      validator: ft
    },
    /**
     * Will make title a link to href
     */
    titleHref: {
      type: String,
      validator: ft
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
    const { resolvedModifiers: s } = K({ props: e, baseClass: "card" });
    return { resolvedModifiers: s };
  },
  computed: {
    resolvedElement() {
      const { cardElement: e, to: s, href: t } = this;
      return s ? Te : t ? "a" : e;
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
}, zo = { class: "card__body" }, Eo = { class: "card__main" }, jo = ["href", "target"], Fo = {
  key: 0,
  class: "card__aside"
}, Bo = ["src", "alt"], Mo = {
  key: 1,
  class: "card__footer"
};
function Po(e, s, t, n, i, o) {
  const r = S("router-link");
  return l(), p(R(o.resolvedElement), {
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
    style: I({ cursor: i.cursorStyle }),
    target: t.target,
    to: t.to,
    href: t.href,
    "data-ulu-proxy-click-init": i.proxyClickEnabled
  }, {
    default: v(() => [
      f("div", zo, [
        f("div", Eo, [
          (l(), p(R(t.titleElement), {
            class: h(["card__title", t.classes.title])
          }, {
            default: v(() => [
              t.titleTo ? (l(), p(r, {
                key: 0,
                class: "card__title-link",
                to: t.titleTo,
                ref: "link"
              }, {
                default: v(() => [
                  m(e.$slots, "title", {}, () => [
                    w(b(t.title), 1)
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
                  w(b(t.title), 1)
                ])
              ], 8, jo)) : m(e.$slots, "title", { key: 2 }, () => [
                w(b(t.title), 1)
              ])
            ]),
            _: 3
          }, 8, ["class"])),
          m(e.$slots, "body")
        ]),
        e.$slots.body ? (l(), d("div", Fo, [
          m(e.$slots, "aside")
        ])) : y("", !0)
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
          }, null, 8, Bo)
        ])
      ], 2)) : y("", !0),
      e.$slots.footer ? (l(), d("div", Mo, [
        m(e.$slots, "footer")
      ])) : y("", !0)
    ]),
    _: 3
  }, 40, ["onMousedown", "onMouseup", "class", "style", "target", "to", "href", "data-ulu-proxy-click-init"]);
}
const pf = /* @__PURE__ */ _(Io, [["render", Po]]), Ho = {
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
function Lo(e, s, t, n, i, o) {
  return l(), d("dl", {
    class: h(t.classes.list)
  }, [
    (l(!0), d(T, null, C(t.items, (r, a) => (l(), d("div", {
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
          w(b(r.term), 1)
        ])
      ], 2),
      f("dd", {
        class: h(t.classes.description)
      }, [
        m(e.$slots, "description", {
          item: r,
          index: a
        }, () => [
          w(b(r.description), 1)
        ])
      ], 2)
    ], 2))), 128))
  ], 2);
}
const vf = /* @__PURE__ */ _(Ho, [["render", Lo]]), Vo = {
  name: "UluExternalLink",
  components: {
    UluIcon: P
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
}, Do = ["href", "target"], Wo = { class: "external-link__text" };
function No(e, s, t, n, i, o) {
  const r = S("UluIcon");
  return l(), d("a", {
    class: "external-link",
    href: t.href,
    target: t.target
  }, [
    f("span", Wo, [
      m(e.$slots, "default", {}, () => [
        w(b(t.text), 1)
      ])
    ]),
    k(r, {
      class: "external-link__icon margin-left-small-x display-inline",
      icon: t.icon || "type:externalLink"
    }, null, 8, ["icon"])
  ], 8, Do);
}
const wf = /* @__PURE__ */ _(Vo, [["render", No]]), Xo = {
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
function Yo(e, s, t, n, i, o) {
  return l(), p(R(o.listElement), {
    class: h([
      {
        "list-ordered": t.ordered,
        "list-unordered": t.unordered,
        "list-lines": t.lines,
        "list-compact": t.compact
      },
      t.classes.list
    ]),
    style: I({
      listStyleType: t.listStyleType
    }),
    reversed: t.reversed,
    start: t.start
  }, {
    default: v(() => [
      (l(!0), d(T, null, C(t.items, (r, a) => (l(), d("li", {
        key: a,
        class: h(t.classes.listItem)
      }, [
        m(e.$slots, "default", {
          item: r,
          index: a
        }, () => [
          w(b(r), 1)
        ])
      ], 2))), 128))
    ]),
    _: 3
  }, 8, ["class", "style", "reversed", "start"]);
}
const Sf = /* @__PURE__ */ _(Xo, [["render", Yo]]), Ko = {}, Go = { id: "main-content" };
function qo(e, s) {
  return l(), d("main", Go, [
    m(e.$slots, "default")
  ]);
}
const kf = /* @__PURE__ */ _(Ko, [["render", qo]]), Zo = {
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
function Jo(e, s, t, n, i, o) {
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
const Cf = /* @__PURE__ */ _(Zo, [["render", Jo]]), Qo = {
  name: "UluCheckboxMenu",
  props: {
    options: Array
  },
  methods: {
    getId(e) {
      return `checkbox-menu-opt-${e}`;
    }
  }
}, ei = { class: "site-menu site-form" }, ti = { class: "site-menu__checkbox" }, si = ["id", "onUpdate:modelValue"], ni = ["for"];
function oi(e, s, t, n, i, o) {
  return l(), d("ul", ei, [
    (l(!0), d(T, null, C(t.options, (r, a) => (l(), d("li", {
      class: "site-menu__item",
      key: a
    }, [
      f("div", ti, [
        W(f("input", {
          type: "checkbox",
          id: o.getId(a),
          "onUpdate:modelValue": (c) => r.checked = c
        }, null, 8, si), [
          [Dt, r.checked]
        ]),
        f("label", {
          for: o.getId(a)
        }, [
          m(e.$slots, "default", {}, () => [
            w(b(r?.title || r?.text), 1)
          ])
        ], 8, ni)
      ])
    ]))), 128))
  ]);
}
const Tf = /* @__PURE__ */ _(Qo, [["render", oi]]), ii = {
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
}, ri = ["href", "download"], li = { class: "margin-left-small-x" }, ai = { class: "tag tag--small tag--outline type-small-x" };
function ci(e, s, t, n, i, o) {
  const r = S("FaIcon");
  return l(), d("a", {
    class: "layout-flex-baseline",
    href: o.fileUrl,
    download: t.file.name
  }, [
    k(r, {
      class: "ui-icon",
      icon: ["far", e.$site.getIcon("file")]
    }, null, 8, ["icon"]),
    f("span", li, [
      w(b(t.file.name) + " ", 1),
      f("span", ai, b(o.fileSize), 1)
    ])
  ], 8, ri);
}
const Af = /* @__PURE__ */ _(ii, [["render", ci]]);
let ui = 0;
const di = {
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
      id: `file-input-id-${++ui}`
    };
  },
  methods: {
    onChangeFile(e) {
      this.$emit("filesChange", e.target.files);
    }
  }
}, fi = { class: "site-form__item site-form__item--file" }, hi = ["for"], mi = ["multiple", "id"];
function gi(e, s, t, n, i, o) {
  return l(), d("div", fi, [
    f("label", {
      class: h({ "hidden-visually": t.labelHidden }),
      for: i.id
    }, [
      m(e.$slots, "label", {}, () => [
        w(b(t.label), 1)
      ])
    ], 10, hi),
    f("input", N({
      type: "file",
      onChange: s[0] || (s[0] = (...r) => o.onChangeFile && o.onChangeFile(...r)),
      multiple: t.multiple,
      id: i.id
    }, t.inputAttrs), null, 16, mi)
  ]);
}
const $f = /* @__PURE__ */ _(di, [["render", gi]]), _i = {
  name: "FormMessage",
  props: {
    warning: Boolean,
    error: Boolean
  }
};
function yi(e, s, t, n, i, o) {
  const r = S("FaIcon");
  return l(), d("p", {
    class: h(["site-form__description", {
      "site-form__error": t.error,
      "site-form__warning": t.warning
    }])
  }, [
    t.error ? (l(), p(r, {
      key: 0,
      icon: e.$site.getIcon("error")
    }, null, 8, ["icon"])) : y("", !0),
    t.warning ? (l(), p(r, {
      key: 1,
      icon: e.$site.getIcon("warning")
    }, null, 8, ["icon"])) : y("", !0),
    m(e.$slots, "default")
  ], 2);
}
const Of = /* @__PURE__ */ _(_i, [["render", yi]]);
let bi = 0;
const pi = {
  name: "FormSelect",
  props: {
    label: String,
    modelValue: String,
    options: Array,
    labelHidden: Boolean
  },
  data() {
    return {
      id: `select-id-${++bi}`
    };
  }
}, vi = { class: "site-form__item site-form__item--select" }, wi = ["for"], Si = ["id", "value"], ki = ["value"];
function Ci(e, s, t, n, i, o) {
  return l(), d("div", vi, [
    f("label", {
      class: h({ "hidden-visually": t.labelHidden }),
      for: i.id
    }, [
      m(e.$slots, "default", {}, () => [
        w(b(t.label), 1)
      ])
    ], 10, wi),
    f("select", {
      id: i.id,
      value: t.modelValue,
      onInput: s[0] || (s[0] = (r) => e.$emit("update:modelValue", r.target.value))
    }, [
      s[1] || (s[1] = f("option", {
        disabled: "",
        value: ""
      }, "Please select one", -1)),
      (l(!0), d(T, null, C(t.options, (r, a) => (l(), d("option", {
        key: a,
        value: r.value
      }, b(r.text), 9, ki))), 128))
    ], 40, Si)
  ]);
}
const Uf = /* @__PURE__ */ _(pi, [["render", Ci]]);
let Ti = 0;
const Ai = {
  name: "FormText",
  props: {
    label: String,
    modelValue: String,
    labelHidden: Boolean
  },
  data() {
    return {
      id: `text-input-id-${++Ti}`
    };
  }
}, $i = { class: "site-form__item site-form__item--text" }, Oi = ["for"], Ui = ["value", "id"];
function Ri(e, s, t, n, i, o) {
  return l(), d("div", $i, [
    f("label", {
      class: h({ "hidden-visually": t.labelHidden }),
      for: i.id
    }, [
      m(e.$slots, "default", {}, () => [
        w(b(t.label), 1)
      ])
    ], 10, Oi),
    f("input", {
      type: "text",
      value: t.modelValue,
      onInput: s[0] || (s[0] = (r) => e.$emit("update:modelValue", r.target.value)),
      id: i.id
    }, null, 40, Ui)
  ]);
}
const Rf = /* @__PURE__ */ _(Ai, [["render", Ri]]), xi = {
  name: "SearchForm",
  props: {
    placeholder: {
      type: String,
      default: "Titles, keyword…"
    }
  }
}, Ii = { class: "form-theme search-form type-small" }, zi = { class: "search-form__field" }, Ei = ["placeholder"], ji = {
  class: "search-form__submit button button--primary",
  "aria-label": "Submit Search"
};
function Fi(e, s, t, n, i, o) {
  const r = S("FaIcon");
  return l(), d("div", Ii, [
    f("div", zi, [
      s[0] || (s[0] = f("label", { class: "hidden-visually" }, "Search", -1)),
      f("input", {
        class: "search-form__input",
        type: "text",
        id: "example-input",
        placeholder: t.placeholder
      }, null, 8, Ei)
    ]),
    f("button", ji, [
      k(r, {
        icon: e.$site.getIcon("search")
      }, null, 8, ["icon"])
    ])
  ]);
}
const xf = /* @__PURE__ */ _(xi, [["render", Fi]]), If = {
  __name: "UluAdaptiveLayout",
  setup(e) {
    const s = ro("uluIsMobile");
    return (t, n) => !U(s) || !t.$slots.mobile ? m(t.$slots, "default", { key: 0 }) : m(t.$slots, "mobile", { key: 1 });
  }
};
function Bi(e) {
  var s;
  return e = e.replace(/^[^-_a-zA-Z]+/, "").replace(/^-(?:[-0-9]+)/, "-"), s = e && e.replace(/[^-_a-zA-Z0-9]+/g, "-"), s.toLowerCase();
}
function Mi(e, s = {
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
const Pi = {
  name: "UluDataGrid",
  async mounted() {
    const e = () => Mi(this.$el);
    e(), this.resizeHandler = Ae(e, 200, !1, this), window.addEventListener("resize", this.resizeHandler);
  },
  beforeUnmount() {
    this.resizeHandler && window.removeEventListener("resize", this.resizeHandler);
  }
};
function Hi(e, s, t, n, i, o) {
  return l(), d("div", null, [
    m(e.$slots, "default")
  ]);
}
const zf = /* @__PURE__ */ _(Pi, [["render", Hi]]), Li = {
  name: "UluTitleRail",
  components: {
    UluIcon: P
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
}, Vi = {
  key: 0,
  class: "rail__item rail__item--pull"
};
function Di(e, s, t, n, i, o) {
  const r = S("UluIcon");
  return l(), d("div", {
    class: h(["rail rail--title-rail", {
      "rail--rule": t.rule
    }])
  }, [
    f("div", {
      class: h(["rail__item rail__item--title", t.classes.itemTitle])
    }, [
      (l(), p(R(t.titleElement), {
        class: h(["layout-flex type-max-width-small no-margin", t.classes.title]),
        style: I({ alignItems: t.iconAlign })
      }, {
        default: v(() => [
          t.icon ? (l(), p(r, {
            key: 0,
            class: h(t.classes.icon),
            icon: t.icon
          }, null, 8, ["class", "icon"])) : y("", !0),
          m(e.$slots, "default", {}, () => [
            w(b(t.title), 1)
          ])
        ]),
        _: 3
      }, 8, ["class", "style"]))
    ], 2),
    e.$slots.end ? (l(), d("div", Vi, [
      m(e.$slots, "end")
    ])) : y("", !0)
  ], 2);
}
const Ef = /* @__PURE__ */ _(Li, [["render", Di]]), Wi = {
  name: "UluBreadcrumb",
  components: {
    UluIcon: P
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
function Ni(e, s, t, n, i, o) {
  const r = S("router-link"), a = S("UluIcon");
  return t.items.length ? (l(), d("nav", {
    key: 0,
    class: h(t.classes.nav),
    "aria-label": "Breadcrumb"
  }, [
    f("ul", {
      class: h(t.classes.list)
    }, [
      (l(!0), d(T, null, C(t.items, (c, u) => (l(), d("li", {
        key: u,
        class: h(t.classes.item)
      }, [
        k(r, {
          to: c.to,
          class: h(t.classes.link),
          "aria-current": c.current ? "page" : null
        }, {
          default: v(() => [
            m(e.$slots, "default", { item: c }, () => [
              w(b(c.title), 1)
            ])
          ]),
          _: 2
        }, 1032, ["to", "class", "aria-current"]),
        u < t.items.length - 1 ? m(e.$slots, "separator", { key: 0 }, () => [
          k(a, {
            class: h(t.classes.separator),
            icon: t.separatorIcon || "type:pathSeparator"
          }, null, 8, ["class", "icon"])
        ]) : y("", !0)
      ], 2))), 128))
    ], 2)
  ], 2)) : y("", !0);
}
const jf = /* @__PURE__ */ _(Wi, [["render", Ni]]), Xi = {
  name: "UluNavStrip",
  components: {
    UluMenu: Qt
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
function Yi(e, s, t, n, i, o) {
  const r = S("UluMenu");
  return l(), d("nav", {
    class: h(["nav-strip", {
      "nav-strip--rule": t.rule,
      "nav-strip--center": t.center,
      "nav-strip--right": t.right
    }])
  }, [
    k(r, {
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
const Ff = /* @__PURE__ */ _(Xi, [["render", Yi]]), Ki = {}, Gi = {
  class: "site-skip-link hidden-visually-focusable",
  href: "#main-content"
};
function qi(e, s) {
  return l(), d("a", Gi, " Skip to main content ");
}
const Bf = /* @__PURE__ */ _(Ki, [["render", qi]]), Zi = {
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
function Ji(e, s, t, n, i, o) {
  return t.text != null ? (l(), p(R(t.element), { key: 0 }, {
    default: v(() => [
      w(b(t.text), 1)
    ]),
    _: 1
  })) : y("", !0);
}
const Mf = /* @__PURE__ */ _(Zi, [["render", Ji]]), Qi = {}, er = { style: { display: "none" } };
function tr(e, s) {
  return l(), d("span", er);
}
const Pf = /* @__PURE__ */ _(Qi, [["render", tr]]), sr = {};
function nr(e, s) {
  const t = S("router-view");
  return l(), p(t);
}
const Hf = /* @__PURE__ */ _(sr, [["render", nr]]);
function fe(e = 0, s = 100) {
  return e = Math.ceil(e), s = Math.floor(s), Math.floor(Math.random() * (s - e) + e);
}
const or = {
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
        width: fe(500, 1e3),
        height: fe(500, 1e3)
      } : { width: s, height: t };
    }
  }
}, ir = ["src", "alt"];
function rr(e, s, t, n, i, o) {
  return l(), d("img", {
    src: o.src,
    alt: t.alt
  }, null, 8, ir);
}
const Lf = /* @__PURE__ */ _(or, [["render", rr]]), lr = {
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
function ar(e, s, t, n, i, o) {
  return l(!0), d(T, null, C(parseInt(t.amount), (r) => (l(), p(R(t.element), { key: r }, {
    default: v(() => s[0] || (s[0] = [
      w(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed semper erat tincidunt tellus vestibulum dictum. Fusce vel augue commodo, egestas diam sed, accumsan leo. Maecenas congue nec nisl et ullamcorper. Maecenas tincidunt, tortor et viverra eleifend, enim leo vestibulum ipsum, quis placerat mi nisi nec ex. Vivamus a justo volutpat, scelerisque elit eget, lacinia ex. Phasellus dapibus sollicitudin tortor, vitae suscipit nunc condimentum ut. Cras suscipit feugiat nibh nec consectetur. Phasellus vitae quam blandit, cursus metus ut, placerat mi. Sed tempor lacus non est interdum imperdiet nec quis metus. Praesent vel eleifend diam. Donec tincidunt eget purus sed posuere. ")
    ])),
    _: 2,
    __: [0]
  }, 1024))), 128);
}
const Vf = /* @__PURE__ */ _(lr, [["render", ar]]), cr = {
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
function ur(e, s, t, n, i, o) {
  return o.title ? (l(), d("p", {
    key: 0,
    tabindex: "-1",
    class: "hidden-visually",
    ref: "el"
  }, b(o.title), 513)) : y("", !0);
}
const Df = /* @__PURE__ */ _(cr, [["render", ur]]), dr = {
  name: "AnimateNumber",
  props: {
    /**
     * Number to animate as it changes
     */
    value: Number
  },
  watch: {
    value() {
      Vs.to(this, {
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
function fr(e, s, t, n, i, o) {
  return l(), d("span", null, [
    m(e.$slots, "default", { currentValue: i.currentValue }, () => [
      w(b(i.currentValue), 1)
    ])
  ]);
}
const Wf = /* @__PURE__ */ _(dr, [["render", fr]]), hr = {
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
}, mr = { class: "progress-bar__header" }, gr = {
  key: 0,
  class: "progress-bar__icon"
}, _r = { class: "hidden-visually" }, yr = { class: "progress-bar__track" }, br = { class: "progress-bar__values" }, pr = { class: "progress-bar__value progress-bar__value--amount" }, vr = {
  key: 0,
  class: "progress-bar__value progress-bar__value--deficit color-status is-danger"
}, wr = { class: "progress-bar__value progress-bar__value--total" };
function Sr(e, s, t, n, i, o) {
  const r = S("StatusIcon");
  return l(), d("div", {
    class: h(["progress-bar", {
      "progress-bar--small": t.small,
      "progress-bar--icon-left": t.iconOnLeft,
      "type-small": t.small
    }])
  }, [
    f("div", mr, [
      f("strong", {
        class: h(["progress-bar__label", {
          "type-normal": t.small,
          "hidden-visually": t.labelHidden
        }])
      }, b(t.label), 3),
      o.status ? (l(), d("div", gr, [
        k(r, {
          type: o.status.type
        }, null, 8, ["type"]),
        f("span", _r, b(o.status.message), 1)
      ])) : y("", !0)
    ]),
    f("div", yr, [
      f("div", {
        class: "progress-bar__bar",
        style: I(`width: ${o.percentage}%`)
      }, null, 4),
      t.deficit ? (l(), d("div", {
        key: 0,
        class: "progress-bar__bar--deficit",
        style: I(`width: ${o.defPercentage}%`)
      }, null, 4)) : y("", !0)
    ]),
    f("div", br, [
      f("div", pr, [
        s[0] || (s[0] = f("strong", { class: "hidden-visually" }, "Amount:", -1)),
        w(" " + b(t.amount), 1)
      ]),
      t.deficit > 0 ? (l(), d("div", vr, [
        s[1] || (s[1] = f("strong", { class: "hidden-visually" }, "Deficit: ", -1)),
        w(" -" + b(t.deficit), 1)
      ])) : y("", !0),
      f("div", wr, [
        s[2] || (s[2] = f("strong", { class: "hidden-visually" }, "Total:", -1)),
        w(" " + b(t.total), 1)
      ])
    ])
  ], 2);
}
const Nf = /* @__PURE__ */ _(hr, [["render", Sr]]);
let kr = 0;
const Cr = {
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
      uid: `progress-donut-${++kr}`
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
}, Tr = { class: "progress-donut__chart" }, Ar = {
  class: "progress-donut__chart-svg",
  viewBox: "0 0 32 32"
}, $r = ["r"], Or = {
  key: 0,
  class: "progress-donut__chart-value"
}, Ur = {
  key: 0,
  class: "progress-donut__value type-small-x"
};
function Rr(e, s, t, n, i, o) {
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
    f("div", Tr, [
      (l(), d("svg", Ar, [
        f("circle", {
          class: "progress-donut__chart-pie",
          ref: "pie",
          r: "16",
          cx: "16",
          cy: "16",
          style: I({ strokeDasharray: o.endDasharray })
        }, null, 4),
        f("circle", {
          class: "progress-donut__chart-mask",
          r: t.small ? 7 : 11,
          cx: "16",
          cy: "16"
        }, null, 8, $r)
      ])),
      t.small ? y("", !0) : (l(), d("strong", Or, b(t.percentage) + "% ", 1))
    ]),
    t.small ? (l(), d("strong", Ur, b(t.percentage) + "% ", 1)) : y("", !0)
  ], 2);
}
const Xf = /* @__PURE__ */ _(Cr, [["render", Rr]]), xr = {
  name: "UluFacetsList",
  props: {
    groupUid: String,
    children: Array,
    classFacet: String
  },
  methods: {
    facetCheckboxId(e) {
      return `facet-${this.groupUid}-${e.uid}`;
    }
  }
}, Ir = { class: "UluFacets__facet-list" }, zr = ["id", "onUpdate:modelValue"], Er = ["for"];
function jr(e, s, t, n, i, o) {
  return l(), d("ul", Ir, [
    (l(!0), d(T, null, C(t.children, (r) => (l(), d("li", {
      class: h(["UluFacets__facet", t.classFacet]),
      key: r.uid
    }, [
      W(f("input", {
        class: "UluFacets__facet-checkbox",
        id: o.facetCheckboxId(r),
        type: "checkbox",
        "onUpdate:modelValue": (a) => r.selected = a
      }, null, 8, zr), [
        [Dt, r.selected]
      ]),
      f("label", {
        class: "UluFacets__facet-label",
        for: o.facetCheckboxId(r)
      }, b(r.label), 9, Er)
    ], 2))), 128))
  ]);
}
const Fr = /* @__PURE__ */ _(xr, [["render", jr]]);
let Br = 0;
const Mr = {
  name: "UluFacetsSearch",
  props: {
    classes: Object,
    modelValue: String,
    placeholder: {
      type: String,
      default: "Keywords…"
    }
  },
  data() {
    return {
      id: `facet-view-keyword-${++Br}`
    };
  },
  computed: {
    localValue: {
      get() {
        return this.modelValue;
      },
      set(e) {
        this.$emit("update:modelValue", e);
      }
    }
  },
  methods: {
    clear() {
    }
  }
}, Pr = { class: "UluFacets__keyword-search" }, Hr = ["for"], Lr = ["id", "placeholder"];
function Vr(e, s, t, n, i, o) {
  return l(), d("div", Pr, [
    f("label", {
      class: h(t.classes.searchLabel),
      for: i.id
    }, s[1] || (s[1] = [
      f("strong", null, "Search", -1)
    ]), 10, Hr),
    W(f("input", {
      id: i.id,
      class: h(t.classes.searchInput),
      "onUpdate:modelValue": s[0] || (s[0] = (r) => o.localValue = r),
      type: "text",
      placeholder: t.placeholder
    }, null, 10, Lr), [
      [Is, o.localValue]
    ])
  ]);
}
const Dr = /* @__PURE__ */ _(Mr, [["render", Vr]]);
let ht = 0;
const mt = (e) => {
  const s = (t) => t.title || t.label || "";
  return e.sort((t, n) => s(t).localeCompare(s(n)));
}, Wr = {
  az: { text: "A-Z", sort: mt },
  za: { text: "Z-A", sort: (e) => mt(e).reverse() }
}, Nr = {
  name: "UluFacets",
  components: {
    UluCollapsibleRegion: Xn,
    UluFacetsList: Fr,
    UluFacetsSearch: Dr
  },
  props: {
    /**
     * Options passed to fuse js for search feature
     */
    searchOptions: {
      type: Object,
      default: () => ({
        // isCaseSensitive: false,
        // includeScore: false,
        shouldSort: !0,
        // includeMatches: false,
        // findAllMatches: false,
        // minMatchCharLength: 1,
        // location: 0,
        // threshold: 0.6,
        // distance: 100,
        // useExtendedSearch: false,
        // ignoreLocation: false,
        // ignoreFieldNorm: false,
        // fieldNormWeight: 1,
        keys: [
          "title",
          "label",
          "description",
          "author"
        ]
      })
    },
    initialFiltersHidden: Boolean,
    searchPlaceholder: String,
    /**
     * Array of facet configurations
     */
    initialFacets: {
      required: !0,
      type: Array
    },
    initialSearchValue: String,
    classes: {
      type: Object,
      required: !1,
      default: () => ({})
    },
    /**
     * Maximum facets shown per group before truncating
     */
    maxVisible: {
      type: Number,
      default: 5
    },
    /**
     * Array of objects of the items to display
     */
    items: {
      required: !0,
      type: Array
    },
    /**
     * Provides a way to find categories for each facet
     * @param {Object} item An item to lookup the facet/category info for
     * @param {String} uid The facet's uid (the categories uid) to return a value, value should be an array of facet (child) keys
     */
    getItemFacet: {
      type: Function,
      default: (e, s) => e[s]
    },
    /**
     * Return the value for an item to use for sorting alphabetically
     */
    getItemSortAlpha: {
      type: Function,
      default: (e) => e.title || e.label || ""
    },
    initialSortType: {
      type: String,
      default: "az"
    },
    noDefaultSorts: Boolean,
    extraSortTypes: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    const {
      initialFiltersHidden: e,
      initialSearchValue: s,
      noDefaultSorts: t,
      initialSortType: n,
      extraSortTypes: i
    } = this;
    return {
      filterId: `ulu-facet-filters-${++ht}`,
      sortId: `ulu-facet-sort-${++ht}`,
      selectedSort: n,
      sortTypes: {
        ...t ? {} : Wr,
        ...i
      },
      facets: this.createFacets(),
      // Copy of users facet configs
      filtersHidden: e || !1,
      searchValue: s || null,
      resultsVisible: !0,
      filterIteration: 0
    };
  },
  computed: {
    /**
     * Returns an array of groups with children that are active
     */
    selectedFacets() {
      const e = [];
      return this.facets.forEach((s) => {
        const { name: t, uid: n, children: i } = s;
        let o = 0, r = !1;
        i && i.forEach((a) => {
          a.selected && (++o, r || (e.push({ uid: n, name: t, children: [] }), r = !0), e[e.length - 1].children.push(a));
        }), s.selectedCount = o;
      }), e;
    },
    filteredItems() {
      this.resultsVisible = !1;
      const { getItemFacet: e, selectedFacets: s, sortTypes: t, selectedSort: n } = this, i = t[n].sort, o = this.items.filter((a) => s.length ? s.some((c) => {
        let u;
        const g = e(a, c.uid);
        return g && g.length && (u = c.children.some((A) => g.includes(A.uid))), u;
      }) : !0), r = i(this.search(o));
      return this.$nextTick(() => {
        this.resultsVisible = !0, this.filterIteration = this.filterIteration + 1;
      }), r;
    }
  },
  methods: {
    /**
     * Resets all active filters to user's initial
     */
    clearFilters() {
      this.facets = this.createFacets();
    },
    /**
     * Maps users initial facets to the local facet array used in this component
     */
    createFacets() {
      return this.initialFacets.map((e) => {
        const s = e.children.map((t) => ({
          ...t,
          selected: t.selected || !1
        }));
        return {
          ...e,
          open: e.open || !1,
          children: s,
          selectedCount: 0
        };
      });
    },
    /**
     * Search applied to an already filtered batch of items
     */
    search(e) {
      const { searchValue: s, searchOptions: t } = this;
      return s?.length ? new Ds(e, t).search(s).map((o) => o.item) : e;
    },
    toggleFilterVisibility() {
      this.filtersHidden = !this.filtersHidden;
    }
  }
}, Xr = { class: "UluFacets" }, Yr = ["aria-controls", "aria-expanded"], Kr = ["for"], Gr = ["id"], qr = ["value"], Zr = { class: "UluFacets__body" }, Jr = ["id"], Qr = {
  key: 1,
  class: "UluFacets__empty"
};
function el(e, s, t, n, i, o) {
  const r = S("UluFacetsSearch"), a = S("UluFacetsList"), c = S("UluCollapsibleRegion");
  return l(), d("div", Xr, [
    f("div", {
      class: h(["UluFacets__header", t.classes.header])
    }, [
      m(e.$slots, "header", {
        count: o.filteredItems.length
      }),
      f("div", {
        class: h(["UluFacets__header-actions", t.classes.headerActions])
      }, [
        f("button", {
          onClick: s[0] || (s[0] = (...u) => o.toggleFilterVisibility && o.toggleFilterVisibility(...u)),
          class: h(t.classes.buttonFilterToggle),
          "aria-controls": i.filterId,
          "aria-expanded": i.filtersHidden ? "false" : "true",
          type: "button"
        }, [
          m(e.$slots, "buttonFilterToggle", { hidden: i.filtersHidden }, () => [
            w(b(i.filtersHidden ? "Show" : "Hide") + " Filters ", 1)
          ])
        ], 10, Yr),
        o.selectedFacets.length ? (l(), d("button", {
          key: 0,
          onClick: s[1] || (s[1] = (...u) => o.clearFilters && o.clearFilters(...u)),
          class: h(t.classes.buttonClearFilters),
          type: "button"
        }, [
          m(e.$slots, "buttonClearFilters", {}, () => [
            s[4] || (s[4] = w(" Clear Filters "))
          ])
        ], 2)) : y("", !0),
        f("div", {
          class: h(t.classes.sortForm)
        }, [
          f("label", {
            for: i.sortId,
            class: h(t.classes.sortFormLabel)
          }, "Sort:", 10, Kr),
          W(f("select", {
            "onUpdate:modelValue": s[2] || (s[2] = (u) => i.selectedSort = u),
            id: i.sortId,
            class: h(t.classes.sortFormSelect)
          }, [
            (l(!0), d(T, null, C(i.sortTypes, (u, g) => (l(), d("option", {
              value: g,
              key: g
            }, b(u.text), 9, qr))), 128))
          ], 10, Gr), [
            [zs, i.selectedSort]
          ])
        ], 2)
      ], 2)
    ], 2),
    f("div", Zr, [
      k(nt, {
        name: "UluFacetsFade",
        mode: "out-in"
      }, {
        default: v(() => [
          W(f("div", {
            class: h(["UluFacets__filters", { "UluFacets__filters--hidden": i.filtersHidden }]),
            id: i.filterId
          }, [
            k(r, {
              classes: t.classes,
              initialValue: t.initialSearchValue,
              placeholder: t.searchPlaceholder,
              modelValue: i.searchValue,
              "onUpdate:modelValue": s[3] || (s[3] = (u) => i.searchValue = u)
            }, null, 8, ["classes", "initialValue", "placeholder", "modelValue"]),
            (l(!0), d(T, null, C(i.facets, (u) => (l(), p(c, {
              class: h(["UluFacets__group", t.classes.group]),
              classToggle: ["UluFacets__group-toggle", t.classes.groupToggle],
              classContent: ["UluFacets__group-content", t.classes.groupContent],
              key: u.uid,
              group: u,
              startOpen: u.open,
              clickOutsideCloses: !1,
              closeOnEscape: !1,
              transitionHeight: !0
            }, {
              toggle: v(({ isOpen: g }) => [
                m(e.$slots, "groupToggle", {
                  group: u,
                  isOpen: g
                }, () => [
                  w(b(u.name), 1)
                ])
              ]),
              default: v(() => [
                k(a, {
                  children: u.children.slice(0, t.maxVisible),
                  groupUid: u.uid,
                  classFacet: t.classes.facet
                }, null, 8, ["children", "groupUid", "classFacet"]),
                u.children.length > t.maxVisible ? (l(), p(c, {
                  key: 0,
                  class: h(["UluFacets__more-facets", t.classes.moreFacets]),
                  clickOutsideCloses: !1,
                  closeOnEscape: !1,
                  transitionHeight: !0
                }, {
                  toggle: v(({ isOpen: g }) => [
                    w(b(g ? "- Less" : "+ More"), 1)
                  ]),
                  default: v(() => [
                    k(a, {
                      children: u.children.slice(t.maxVisible),
                      groupUid: u.uid,
                      classFacet: t.classes.facet
                    }, null, 8, ["children", "groupUid", "classFacet"])
                  ]),
                  _: 2
                }, 1032, ["class"])) : y("", !0)
              ]),
              _: 2
            }, 1032, ["class", "classToggle", "classContent", "group", "startOpen"]))), 128))
          ], 10, Jr), [
            [Ne, !i.filtersHidden]
          ])
        ]),
        _: 3
      }),
      k(nt, {
        name: "UluFacetsFade",
        mode: "out-in"
      }, {
        default: v(() => [
          i.resultsVisible && o.filteredItems.length ? (l(), d("ul", {
            class: h(["UluFacets__results", t.classes.results]),
            key: i.filterIteration
          }, [
            (l(!0), d(T, null, C(o.filteredItems, (u, g) => (l(), d("li", {
              class: h(["UluFacets__results-item", t.classes.resultsItem]),
              key: g
            }, [
              m(e.$slots, "item", {
                item: u,
                index: g
              })
            ], 2))), 128))
          ], 2)) : (l(), d("div", Qr, [
            m(e.$slots, "empty", {}, () => [
              s[5] || (s[5] = w(" No Results Found "))
            ])
          ]))
        ]),
        _: 3
      })
    ])
  ]);
}
const Yf = /* @__PURE__ */ _(Nr, [["render", el]]), es = Symbol(), ts = Symbol(), $e = Symbol(), tl = {
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
      [$e]: x(() => this.sections),
      [es]: (e) => {
        const { titleId: s, title: t } = e, { element: n } = e.$refs;
        this.sections.push({
          instance: e,
          titleId: s,
          title: t,
          element: n,
          active: !1
        }), this.update();
      },
      [ts]: (e) => {
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
          const u = this.getSectionIndex(a), g = a.offsetTop, A = s[u], z = u === 0 && i > g, F = u === s.length - 1 && i < g;
          A && this.$nextTick(() => {
            c ? (t(A), A.active = !0) : (z && !n || F && A.active) && t(), this.$emit("sectionChange", {
              section: A,
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
}, sl = { class: "scroll-anchors" };
function nl(e, s, t, n, i, o) {
  return l(), d("div", sl, [
    m(e.$slots, "default")
  ]);
}
const Kf = /* @__PURE__ */ _(tl, [["render", nl]]), ol = {
  name: "ScrollAnchorsNav",
  inject: {
    sections: { from: $e }
  },
  props: {
    element: {
      type: String,
      default: "nav"
    }
  }
}, il = ["href"];
function rl(e, s, t, n, i, o) {
  return o.sections.length ? (l(), p(R(t.element), {
    key: 0,
    class: "scroll-anchors__nav"
  }, {
    default: v(() => [
      f("ul", null, [
        (l(!0), d(T, null, C(o.sections, (r, a) => (l(), d("li", {
          key: a,
          class: h({ "is-active": r.active })
        }, [
          f("a", {
            class: h({ "is-active": r.active }),
            href: `#${r.titleId}`
          }, b(r.title), 11, il)
        ], 2))), 128))
      ])
    ]),
    _: 1
  })) : y("", !0);
}
const Gf = /* @__PURE__ */ _(ol, [["render", rl]]);
function ss(e) {
  requestAnimationFrame(() => {
    const s = new MessageChannel();
    s.port1.onmessage = e, s.port2.postMessage(void 0);
  });
}
const ll = {
  name: "ScrollAnchorsNavAnimated",
  inject: {
    sections: { from: $e }
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
      e && !this.indicatorAnimReady && ss(() => {
        this.indicatorAnimReady = !0;
      });
    }
  },
  methods: {
    addLinkRef(e, s) {
      this.linkRefs[e] = s;
    }
  }
}, al = { class: "scroll-anchors__rail" }, cl = ["href"];
function ul(e, s, t, n, i, o) {
  return o.sections.length ? (l(), p(R(t.element), {
    key: 0,
    class: "scroll-anchors__nav scroll-anchors__nav--animated"
  }, {
    default: v(() => [
      f("ul", al, [
        (l(!0), d(T, null, C(o.sections, (r, a) => (l(), d("li", {
          key: a,
          class: h({ "is-active": r.active })
        }, [
          f("a", {
            class: h({ "is-active": r.active }),
            ref_for: !0,
            ref: (c) => o.addLinkRef(a, c),
            href: `#${r.titleId}`
          }, b(r.title), 11, cl)
        ], 2))), 128))
      ]),
      f("div", {
        class: h(["scroll-anchors__indicator", {
          "scroll-anchors__indicator--can-transition": i.indicatorAnimReady
        }]),
        ref: "indicator",
        style: I({
          opacity: o.indicatorStyles ? "1" : "0",
          transform: `translateY(${o.indicatorStyles.y}px)`,
          height: `${o.indicatorStyles.height}px`
        })
      }, null, 6)
    ]),
    _: 1
  })) : y("", !0);
}
const qf = /* @__PURE__ */ _(ll, [["render", ul]]), dl = {
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
    register: { from: es },
    unregister: { from: ts },
    sections: { from: $e, default: () => x(() => []) }
  },
  data() {
    const { anchorId: e, title: s } = this;
    return {
      titleId: e || `sas-title-${Bi(s)}`
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
function fl(e, s, t, n, i, o) {
  return l(), d("div", {
    class: h([t.wrapperClass, { [t.activeClass]: t.activeClass && o.section?.active }]),
    ref: "element"
  }, [
    (l(), p(R(t.titleElement), {
      class: h(t.titleClass),
      id: i.titleId
    }, {
      default: v(() => [
        w(b(t.title), 1)
      ]),
      _: 1
    }, 8, ["class", "id"])),
    m(e.$slots, "default", { section: o.section })
  ], 2);
}
const Zf = /* @__PURE__ */ _(dl, [["render", fl]]), hl = {
  name: "ShowSkeleton",
  props: {
    when: Boolean
  }
};
function ml(e, s, t, n, i, o) {
  const r = S("SkeletonTextInline");
  return t.when ? (l(), p(r, {
    key: 1,
    class: "skeleton"
  })) : m(e.$slots, "default", { key: 0 });
}
const Jf = /* @__PURE__ */ _(hl, [["render", ml]]);
function gl(e, s) {
  return [...Array(e)].map((t, n) => s(n));
}
function Qf(e, s) {
  var t = e.indexOf(s);
  t > -1 && e.splice(t, 1);
}
const _l = {
  name: "SkeletonContent",
  props: {
    lines: {
      type: Number,
      default: 6
    }
  },
  methods: {
    randomInt: fe
  },
  computed: {
    /**
     * Creates the segments (like words) for the given line count
     * - Uses random number of segments and makes sure to fill the line between 70% - 100%
     */
    linesWithSegments() {
      return gl(this.lines, () => {
        const s = fe(70, 100);
        let t = 0;
        const n = () => {
          const r = s - t, a = fe(15, r);
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
}, yl = { class: "skeleton" };
function bl(e, s, t, n, i, o) {
  return l(), d("div", yl, [
    (l(!0), d(T, null, C(o.linesWithSegments, (r, a) => (l(), d("div", { key: a }, [
      (l(!0), d(T, null, C(r, (c) => (l(), d("span", {
        key: c,
        class: h(["skeleton__text skeleton__text--inline", { skeleton__alt: c.alt }]),
        style: I({ width: `${c.width}%` })
      }, null, 6))), 128))
    ]))), 128))
  ]);
}
const eh = /* @__PURE__ */ _(_l, [["render", bl]]), pl = {
  name: "SkeletonMedia"
}, vl = { class: "skeleton__block skeleton__block--media layout-flex-center-all" };
function wl(e, s, t, n, i, o) {
  const r = S("FaIcon");
  return l(), d("div", vl, [
    k(r, {
      style: { "font-size": "2rem" },
      icon: "image"
    })
  ]);
}
const th = /* @__PURE__ */ _(pl, [["render", wl]]), Sl = {
  name: "SkeletonTextInline"
}, kl = { class: "skeleton__text skeleton__text--inline" };
function Cl(e, s, t, n, i, o) {
  return l(), d("span", kl);
}
const sh = /* @__PURE__ */ _(Sl, [["render", Cl]]), Tl = {
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
}, Al = { class: "slideshow" }, $l = {
  class: "slideshow__control-context",
  ref: "context"
}, Ol = {
  class: "slideshow__track-crop",
  ref: "crop"
}, Ul = {
  class: "slideshow__track",
  ref: "track"
}, Rl = ["tabindex"], xl = { class: "slideshow__controls" }, Il = { class: "slideshow__controls-item slideshow__controls-item--previous" }, zl = ["disabled"], El = { class: "slideshow__controls-item slideshow__controls-item--next" }, jl = ["disabled"], Fl = {
  key: 0,
  class: "slideshow__nav",
  ref: "nav"
}, Bl = ["onClick"], Ml = { class: "hidden-visually" };
function Pl(e, s, t, n, i, o) {
  const r = S("FaIcon");
  return l(), d("div", Al, [
    f("div", $l, [
      f("div", Ol, [
        f("ul", Ul, [
          (l(!0), d(T, null, C(i.slides, (a, c) => (l(), d("li", {
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
          ], 10, Rl))), 128))
        ], 512)
      ], 512),
      f("ul", xl, [
        f("li", Il, [
          f("button", {
            class: "slideshow__control-button slideshow__control-button--previous",
            "aria-label": "Scroll Right",
            onClick: s[0] || (s[0] = (...a) => o.previous && o.previous(...a)),
            disabled: !o.canScrollLeft
          }, [
            k(r, {
              class: "slideshow__control-icon",
              icon: "fas fa-chevron-left"
            })
          ], 8, zl)
        ]),
        f("li", El, [
          f("button", {
            class: "slideshow__control-button slideshow__control-button--next",
            "aria-label": "Scroll Left",
            onClick: s[1] || (s[1] = (...a) => o.next && o.next(...a)),
            disabled: !o.canScrollRight
          }, [
            k(r, {
              class: "slideshow__control-icon",
              icon: "fas fa-chevron-right"
            })
          ], 8, jl)
        ])
      ])
    ], 512),
    t.noNav ? y("", !0) : (l(), d("ul", Fl, [
      (l(!0), d(T, null, C(i.slides, (a, c) => (l(), d("li", {
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
            f("span", Ml, "Item " + b(c + 1), 1)
          ])
        ], 10, Bl)
      ], 2))), 128))
    ], 512))
  ]);
}
const Hl = /* @__PURE__ */ _(Tl, [["render", Pl]]), Ll = {
  name: "ImageSlideShow",
  components: {
    UluSlideShow: Hl
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
}, Vl = ["src", "alt"], Dl = { class: "slideshow__image-actions" }, Wl = ["src", "alt"];
function Nl(e, s, t, n, i, o) {
  const r = S("AppButton"), a = S("UluSlideShow");
  return l(), p(a, {
    class: "slideshow--images",
    items: t.images,
    onSlideChange: o.slideChange
  }, {
    slide: v(({ item: c }) => [
      f("img", {
        src: c.src,
        alt: c.alt
      }, null, 8, Vl),
      f("div", Dl, [
        t.selectButton ? (l(), p(r, {
          key: 0,
          class: "type-small",
          icon: "plus",
          small: "",
          iconBefore: ""
        }, {
          default: v(() => s[0] || (s[0] = [
            w(" Select ")
          ])),
          _: 1,
          __: [0]
        })) : y("", !0)
      ])
    ]),
    nav: v(({ index: c }) => [
      f("img", {
        src: t.images[c].src,
        alt: `View image ${c}`
      }, null, 8, Wl)
    ]),
    _: 1
  }, 8, ["items", "onSlideChange"]);
}
const nh = /* @__PURE__ */ _(Ll, [["render", Nl]]), Xl = {
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
function Yl(e, s, t, n, i, o) {
  return l(), d("li", {
    class: h(["slideshow__slide", { "is-active": t.active }])
  }, [
    m(e.$slots, "default")
  ], 2);
}
const oh = /* @__PURE__ */ _(Xl, [["render", Yl]]), Kl = {
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
}, Gl = ["id"], ql = ["innerHTML"];
function Zl(e, s, t, n, i, o) {
  return l(!0), d(T, null, C(t.rows, (r, a) => (l(), d("tr", {
    key: `br-${a}`,
    id: t.optionalAttr(t.isActual && r.id),
    class: h(t.resolveClasses(t.classes.row, { row: r.data, rowIndex: a, isActual: t.isActual, foot: t.foot })),
    style: I({
      height: r.height
    })
  }, [
    (l(!0), d(T, null, C(t.rowColumns, (c, u) => (l(), p(R(c.rowHeader ? "th" : "td"), {
      id: t.optionalAttr(t.isActual && c.rowHeader && c.getRowHeaderId(a)),
      scope: t.optionalAttr(t.isActual && c.rowHeader && "row"),
      key: `bc-${u}`,
      headers: t.optionalAttr(t.isActual && t.getCellHeaders(c, a)),
      class: h(t.resolveClasses(c.class, { column: c, index: u, isActual: t.isActual, row: r, rowIndex: a, foot: t.foot })),
      style: I({
        width: t.columnWidth
      })
    }, {
      default: v(() => [
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
        }, null, 8, ql)) : (l(), d(T, { key: 2 }, [
          w(b(t.value({ row: r, column: c, rowIndex: a, isActual: t.isActual, foot: t.foot })), 1)
        ], 64))
      ]),
      _: 2
    }, 1032, ["id", "scope", "headers", "class", "style"]))), 128))
  ], 14, Gl))), 128);
}
const Jl = /* @__PURE__ */ _(Kl, [["render", Zl]]), Ql = {
  name: "UluTableStickyTable",
  components: {
    UluTableStickyRows: Jl
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
}, ea = ["aria-hidden"], ta = {
  key: 0,
  class: "table-sticky__caption"
}, sa = ["id"], na = ["id", "rowspan", "colspan", "data-child-columns", "aria-sort", "scope", "headers"], oa = ["innerHTML"], ia = {
  class: "table-sticky__sort-icon",
  "aria-hidden": "true"
}, ra = { class: "table-sticky__sort-icon-inner" }, la = ["innerHTML"], aa = { key: 1 }, ca = { key: 2 };
function ua(e, s, t, n, i, o) {
  const r = S("UluTableStickyRows");
  return l(), d("table", {
    class: h(t.resolveClasses(t.classes.table, { isActual: t.isActual })),
    "aria-hidden": t.isActual ? "false" : "true"
  }, [
    t.caption ? (l(), d("caption", ta, b(t.caption), 1)) : y("", !0),
    f("thead", null, [
      (l(!0), d(T, null, C(t.headerRows, (a, c) => (l(), d("tr", {
        key: `hr-${c}`,
        id: o.optionalAttr(t.isActual && a.id),
        class: h(t.resolveClasses(t.classes.rowHeader, { row: a, rowIndex: c, isActual: t.isActual })),
        style: I({
          height: a.height
        })
      }, [
        (l(!0), d(T, null, C(a.columns, (u, g) => (l(), d("th", {
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
          style: I({
            width: u.width
          }),
          "aria-sort": u.sort ? u.sortAscending ? "ascending" : "descending" : null,
          scope: o.optionalAttr(t.isActual && (u.colspan > 1 ? "colgroup" : "col")),
          headers: o.optionalAttr(t.isActual && o.getHeaderHeaders(u, c)),
          ref_for: !0,
          ref: (A) => o.addHeaderRef(u, A)
        }, [
          u.sortable ? (l(), p(R(t.isActual ? "button" : "div"), {
            key: 0,
            class: h(["table-sticky__sort-button", {
              "table-sticky__sort-button--focused": u.sortFocused
            }]),
            onClick: (A) => e.$emit("columnSorted", u),
            onFocus: (A) => o.handleSortFocus(u, !0),
            onBlur: (A) => o.handleSortFocus(u, !1),
            "aria-pressed": u.sortApplied ? "true" : "false"
          }, {
            default: v(() => [
              e.$slots[u.slotHeader] ? m(e.$slots, u.slotHeader, {
                key: 0,
                isActual: t.isActual,
                column: u,
                index: g
              }) : u.htmlTitle ? (l(), d("div", {
                key: 1,
                innerHTML: t.getColumnTitle({ column: u, index: g, isActual: t.isActual })
              }, null, 8, oa)) : (l(), d(T, { key: 2 }, [
                w(b(t.getColumnTitle({ column: u, index: g, isActual: t.isActual })), 1)
              ], 64)),
              f("span", ia, [
                f("span", ra, [
                  m(e.$slots, "sortIcon", {}, () => [
                    s[0] || (s[0] = w("▼"))
                  ])
                ])
              ])
            ]),
            _: 2
          }, 1064, ["class", "onClick", "onFocus", "onBlur", "aria-pressed"])) : (l(), d(T, { key: 1 }, [
            e.$slots[u.slotHeader] ? m(e.$slots, u.slotHeader, {
              key: 0,
              isActual: t.isActual,
              column: u,
              index: g
            }) : u.htmlTitle ? (l(), d("div", {
              key: 1,
              innerHTML: t.getColumnTitle({ column: u, index: g, isActual: t.isActual })
            }, null, 8, la)) : (l(), d(T, { key: 2 }, [
              w(b(t.getColumnTitle({ column: u, index: g, isActual: t.isActual })), 1)
            ], 64))
          ], 64))
        ], 14, na))), 128))
      ], 14, sa))), 128))
    ]),
    t.rows ? (l(), d("tbody", aa, [
      k(r, {
        rows: t.rows,
        rowColumns: t.rowColumns,
        optionalAttr: o.optionalAttr,
        resolveClasses: t.resolveClasses,
        getCellHeaders: o.getCellHeaders,
        isActual: t.isActual,
        columnWidth: t.columnWidth,
        classes: t.classes,
        value: o.value
      }, se({ _: 2 }, [
        C(e.$slots, (a, c) => ({
          name: c,
          fn: v((u) => [
            m(e.$slots, c, M(L(u)))
          ])
        }))
      ]), 1032, ["rows", "rowColumns", "optionalAttr", "resolveClasses", "getCellHeaders", "isActual", "columnWidth", "classes", "value"])
    ])) : y("", !0),
    t.footerRows ? (l(), d("tfoot", ca, [
      k(r, {
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
      }, se({ _: 2 }, [
        C(e.$slots, (a, c) => ({
          name: c,
          fn: v((u) => [
            m(e.$slots, c, M(L(u)))
          ])
        }))
      ]), 1032, ["rows", "rowColumns", "optionalAttr", "resolveClasses", "getCellHeaders", "isActual", "columnWidth", "classes", "value"])
    ])) : y("", !0)
  ], 10, ea);
}
const da = /* @__PURE__ */ _(Ql, [["render", ua]]);
function fa() {
  this.__data__ = [], this.size = 0;
}
function ns(e, s) {
  return e === s || e !== e && s !== s;
}
function Oe(e, s) {
  for (var t = e.length; t--; )
    if (ns(e[t][0], s))
      return t;
  return -1;
}
var ha = Array.prototype, ma = ha.splice;
function ga(e) {
  var s = this.__data__, t = Oe(s, e);
  if (t < 0)
    return !1;
  var n = s.length - 1;
  return t == n ? s.pop() : ma.call(s, t, 1), --this.size, !0;
}
function _a(e) {
  var s = this.__data__, t = Oe(s, e);
  return t < 0 ? void 0 : s[t][1];
}
function ya(e) {
  return Oe(this.__data__, e) > -1;
}
function ba(e, s) {
  var t = this.__data__, n = Oe(t, e);
  return n < 0 ? (++this.size, t.push([e, s])) : t[n][1] = s, this;
}
function X(e) {
  var s = -1, t = e == null ? 0 : e.length;
  for (this.clear(); ++s < t; ) {
    var n = e[s];
    this.set(n[0], n[1]);
  }
}
X.prototype.clear = fa;
X.prototype.delete = ga;
X.prototype.get = _a;
X.prototype.has = ya;
X.prototype.set = ba;
function pa() {
  this.__data__ = new X(), this.size = 0;
}
function va(e) {
  var s = this.__data__, t = s.delete(e);
  return this.size = s.size, t;
}
function wa(e) {
  return this.__data__.get(e);
}
function Sa(e) {
  return this.__data__.has(e);
}
var os = typeof global == "object" && global && global.Object === Object && global, ka = typeof self == "object" && self && self.Object === Object && self, V = os || ka || Function("return this")(), oe = V.Symbol, is = Object.prototype, Ca = is.hasOwnProperty, Ta = is.toString, ae = oe ? oe.toStringTag : void 0;
function Aa(e) {
  var s = Ca.call(e, ae), t = e[ae];
  try {
    e[ae] = void 0;
    var n = !0;
  } catch {
  }
  var i = Ta.call(e);
  return n && (s ? e[ae] = t : delete e[ae]), i;
}
var $a = Object.prototype, Oa = $a.toString;
function Ua(e) {
  return Oa.call(e);
}
var Ra = "[object Null]", xa = "[object Undefined]", gt = oe ? oe.toStringTag : void 0;
function _e(e) {
  return e == null ? e === void 0 ? xa : Ra : gt && gt in Object(e) ? Aa(e) : Ua(e);
}
function Ue(e) {
  var s = typeof e;
  return e != null && (s == "object" || s == "function");
}
var Ia = "[object AsyncFunction]", za = "[object Function]", Ea = "[object GeneratorFunction]", ja = "[object Proxy]";
function rs(e) {
  if (!Ue(e))
    return !1;
  var s = _e(e);
  return s == za || s == Ea || s == Ia || s == ja;
}
var Ee = V["__core-js_shared__"], _t = function() {
  var e = /[^.]+$/.exec(Ee && Ee.keys && Ee.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function Fa(e) {
  return !!_t && _t in e;
}
var Ba = Function.prototype, Ma = Ba.toString;
function Z(e) {
  if (e != null) {
    try {
      return Ma.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var Pa = /[\\^$.*+?()[\]{}|]/g, Ha = /^\[object .+?Constructor\]$/, La = Function.prototype, Va = Object.prototype, Da = La.toString, Wa = Va.hasOwnProperty, Na = RegExp(
  "^" + Da.call(Wa).replace(Pa, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Xa(e) {
  if (!Ue(e) || Fa(e))
    return !1;
  var s = rs(e) ? Na : Ha;
  return s.test(Z(e));
}
function Ya(e, s) {
  return e?.[s];
}
function J(e, s) {
  var t = Ya(e, s);
  return Xa(t) ? t : void 0;
}
var me = J(V, "Map"), ge = J(Object, "create");
function Ka() {
  this.__data__ = ge ? ge(null) : {}, this.size = 0;
}
function Ga(e) {
  var s = this.has(e) && delete this.__data__[e];
  return this.size -= s ? 1 : 0, s;
}
var qa = "__lodash_hash_undefined__", Za = Object.prototype, Ja = Za.hasOwnProperty;
function Qa(e) {
  var s = this.__data__;
  if (ge) {
    var t = s[e];
    return t === qa ? void 0 : t;
  }
  return Ja.call(s, e) ? s[e] : void 0;
}
var ec = Object.prototype, tc = ec.hasOwnProperty;
function sc(e) {
  var s = this.__data__;
  return ge ? s[e] !== void 0 : tc.call(s, e);
}
var nc = "__lodash_hash_undefined__";
function oc(e, s) {
  var t = this.__data__;
  return this.size += this.has(e) ? 0 : 1, t[e] = ge && s === void 0 ? nc : s, this;
}
function q(e) {
  var s = -1, t = e == null ? 0 : e.length;
  for (this.clear(); ++s < t; ) {
    var n = e[s];
    this.set(n[0], n[1]);
  }
}
q.prototype.clear = Ka;
q.prototype.delete = Ga;
q.prototype.get = Qa;
q.prototype.has = sc;
q.prototype.set = oc;
function ic() {
  this.size = 0, this.__data__ = {
    hash: new q(),
    map: new (me || X)(),
    string: new q()
  };
}
function rc(e) {
  var s = typeof e;
  return s == "string" || s == "number" || s == "symbol" || s == "boolean" ? e !== "__proto__" : e === null;
}
function Re(e, s) {
  var t = e.__data__;
  return rc(s) ? t[typeof s == "string" ? "string" : "hash"] : t.map;
}
function lc(e) {
  var s = Re(this, e).delete(e);
  return this.size -= s ? 1 : 0, s;
}
function ac(e) {
  return Re(this, e).get(e);
}
function cc(e) {
  return Re(this, e).has(e);
}
function uc(e, s) {
  var t = Re(this, e), n = t.size;
  return t.set(e, s), this.size += t.size == n ? 0 : 1, this;
}
function re(e) {
  var s = -1, t = e == null ? 0 : e.length;
  for (this.clear(); ++s < t; ) {
    var n = e[s];
    this.set(n[0], n[1]);
  }
}
re.prototype.clear = ic;
re.prototype.delete = lc;
re.prototype.get = ac;
re.prototype.has = cc;
re.prototype.set = uc;
var dc = 200;
function fc(e, s) {
  var t = this.__data__;
  if (t instanceof X) {
    var n = t.__data__;
    if (!me || n.length < dc - 1)
      return n.push([e, s]), this.size = ++t.size, this;
    t = this.__data__ = new re(n);
  }
  return t.set(e, s), this.size = t.size, this;
}
function le(e) {
  var s = this.__data__ = new X(e);
  this.size = s.size;
}
le.prototype.clear = pa;
le.prototype.delete = va;
le.prototype.get = wa;
le.prototype.has = Sa;
le.prototype.set = fc;
function hc(e, s) {
  for (var t = -1, n = e == null ? 0 : e.length; ++t < n && s(e[t], t, e) !== !1; )
    ;
  return e;
}
var yt = function() {
  try {
    var e = J(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}();
function mc(e, s, t) {
  s == "__proto__" && yt ? yt(e, s, {
    configurable: !0,
    enumerable: !0,
    value: t,
    writable: !0
  }) : e[s] = t;
}
var gc = Object.prototype, _c = gc.hasOwnProperty;
function yc(e, s, t) {
  var n = e[s];
  (!(_c.call(e, s) && ns(n, t)) || t === void 0 && !(s in e)) && mc(e, s, t);
}
function bc(e, s) {
  for (var t = -1, n = Array(e); ++t < e; )
    n[t] = s(t);
  return n;
}
function ye(e) {
  return e != null && typeof e == "object";
}
var pc = "[object Arguments]";
function bt(e) {
  return ye(e) && _e(e) == pc;
}
var ls = Object.prototype, vc = ls.hasOwnProperty, wc = ls.propertyIsEnumerable, Sc = bt(/* @__PURE__ */ function() {
  return arguments;
}()) ? bt : function(e) {
  return ye(e) && vc.call(e, "callee") && !wc.call(e, "callee");
}, Je = Array.isArray;
function kc() {
  return !1;
}
var as = typeof exports == "object" && exports && !exports.nodeType && exports, pt = as && typeof module == "object" && module && !module.nodeType && module, Cc = pt && pt.exports === as, vt = Cc ? V.Buffer : void 0, Tc = vt ? vt.isBuffer : void 0, cs = Tc || kc, Ac = 9007199254740991, $c = /^(?:0|[1-9]\d*)$/;
function Oc(e, s) {
  var t = typeof e;
  return s = s ?? Ac, !!s && (t == "number" || t != "symbol" && $c.test(e)) && e > -1 && e % 1 == 0 && e < s;
}
var Uc = 9007199254740991;
function us(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Uc;
}
var Rc = "[object Arguments]", xc = "[object Array]", Ic = "[object Boolean]", zc = "[object Date]", Ec = "[object Error]", jc = "[object Function]", Fc = "[object Map]", Bc = "[object Number]", Mc = "[object Object]", Pc = "[object RegExp]", Hc = "[object Set]", Lc = "[object String]", Vc = "[object WeakMap]", Dc = "[object ArrayBuffer]", Wc = "[object DataView]", Nc = "[object Float32Array]", Xc = "[object Float64Array]", Yc = "[object Int8Array]", Kc = "[object Int16Array]", Gc = "[object Int32Array]", qc = "[object Uint8Array]", Zc = "[object Uint8ClampedArray]", Jc = "[object Uint16Array]", Qc = "[object Uint32Array]", O = {};
O[Nc] = O[Xc] = O[Yc] = O[Kc] = O[Gc] = O[qc] = O[Zc] = O[Jc] = O[Qc] = !0;
O[Rc] = O[xc] = O[Dc] = O[Ic] = O[Wc] = O[zc] = O[Ec] = O[jc] = O[Fc] = O[Bc] = O[Mc] = O[Pc] = O[Hc] = O[Lc] = O[Vc] = !1;
function eu(e) {
  return ye(e) && us(e.length) && !!O[_e(e)];
}
function Qe(e) {
  return function(s) {
    return e(s);
  };
}
var ds = typeof exports == "object" && exports && !exports.nodeType && exports, he = ds && typeof module == "object" && module && !module.nodeType && module, tu = he && he.exports === ds, je = tu && os.process, ie = function() {
  try {
    var e = he && he.require && he.require("util").types;
    return e || je && je.binding && je.binding("util");
  } catch {
  }
}(), wt = ie && ie.isTypedArray, su = wt ? Qe(wt) : eu, nu = Object.prototype, ou = nu.hasOwnProperty;
function iu(e, s) {
  var t = Je(e), n = !t && Sc(e), i = !t && !n && cs(e), o = !t && !n && !i && su(e), r = t || n || i || o, a = r ? bc(e.length, String) : [], c = a.length;
  for (var u in e)
    ou.call(e, u) && !(r && // Safari 9 has enumerable `arguments.length` in strict mode.
    (u == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    i && (u == "offset" || u == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    o && (u == "buffer" || u == "byteLength" || u == "byteOffset") || // Skip index properties.
    Oc(u, c))) && a.push(u);
  return a;
}
var ru = Object.prototype;
function fs(e) {
  var s = e && e.constructor, t = typeof s == "function" && s.prototype || ru;
  return e === t;
}
function hs(e, s) {
  return function(t) {
    return e(s(t));
  };
}
var lu = hs(Object.keys, Object), au = Object.prototype, cu = au.hasOwnProperty;
function uu(e) {
  if (!fs(e))
    return lu(e);
  var s = [];
  for (var t in Object(e))
    cu.call(e, t) && t != "constructor" && s.push(t);
  return s;
}
function du(e) {
  return e != null && us(e.length) && !rs(e);
}
function fu(e) {
  return du(e) ? iu(e) : uu(e);
}
var ms = typeof exports == "object" && exports && !exports.nodeType && exports, St = ms && typeof module == "object" && module && !module.nodeType && module, hu = St && St.exports === ms, kt = hu ? V.Buffer : void 0;
kt && kt.allocUnsafe;
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
var yu = Object.prototype, bu = yu.propertyIsEnumerable, Ct = Object.getOwnPropertySymbols, pu = Ct ? function(e) {
  return e == null ? [] : (e = Object(e), gu(Ct(e), function(s) {
    return bu.call(e, s);
  }));
} : _u;
function vu(e, s) {
  for (var t = -1, n = s.length, i = e.length; ++t < n; )
    e[i + t] = s[t];
  return e;
}
var wu = hs(Object.getPrototypeOf, Object);
function Su(e, s, t) {
  var n = s(e);
  return Je(e) ? n : vu(n, t(e));
}
function ku(e) {
  return Su(e, fu, pu);
}
var He = J(V, "DataView"), Le = J(V, "Promise"), Ve = J(V, "Set"), De = J(V, "WeakMap"), Tt = "[object Map]", Cu = "[object Object]", At = "[object Promise]", $t = "[object Set]", Ot = "[object WeakMap]", Ut = "[object DataView]", Tu = Z(He), Au = Z(me), $u = Z(Le), Ou = Z(Ve), Uu = Z(De), D = _e;
(He && D(new He(new ArrayBuffer(1))) != Ut || me && D(new me()) != Tt || Le && D(Le.resolve()) != At || Ve && D(new Ve()) != $t || De && D(new De()) != Ot) && (D = function(e) {
  var s = _e(e), t = s == Cu ? e.constructor : void 0, n = t ? Z(t) : "";
  if (n)
    switch (n) {
      case Tu:
        return Ut;
      case Au:
        return Tt;
      case $u:
        return At;
      case Ou:
        return $t;
      case Uu:
        return Ot;
    }
  return s;
});
var Ru = Object.prototype, xu = Ru.hasOwnProperty;
function Iu(e) {
  var s = e.length, t = new e.constructor(s);
  return s && typeof e[0] == "string" && xu.call(e, "index") && (t.index = e.index, t.input = e.input), t;
}
var Rt = V.Uint8Array;
function et(e) {
  var s = new e.constructor(e.byteLength);
  return new Rt(s).set(new Rt(e)), s;
}
function zu(e, s) {
  var t = et(e.buffer);
  return new e.constructor(t, e.byteOffset, e.byteLength);
}
var Eu = /\w*$/;
function ju(e) {
  var s = new e.constructor(e.source, Eu.exec(e));
  return s.lastIndex = e.lastIndex, s;
}
var xt = oe ? oe.prototype : void 0, It = xt ? xt.valueOf : void 0;
function Fu(e) {
  return It ? Object(It.call(e)) : {};
}
function Bu(e, s) {
  var t = et(e.buffer);
  return new e.constructor(t, e.byteOffset, e.length);
}
var Mu = "[object Boolean]", Pu = "[object Date]", Hu = "[object Map]", Lu = "[object Number]", Vu = "[object RegExp]", Du = "[object Set]", Wu = "[object String]", Nu = "[object Symbol]", Xu = "[object ArrayBuffer]", Yu = "[object DataView]", Ku = "[object Float32Array]", Gu = "[object Float64Array]", qu = "[object Int8Array]", Zu = "[object Int16Array]", Ju = "[object Int32Array]", Qu = "[object Uint8Array]", ed = "[object Uint8ClampedArray]", td = "[object Uint16Array]", sd = "[object Uint32Array]";
function nd(e, s, t) {
  var n = e.constructor;
  switch (s) {
    case Xu:
      return et(e);
    case Mu:
    case Pu:
      return new n(+e);
    case Yu:
      return zu(e);
    case Ku:
    case Gu:
    case qu:
    case Zu:
    case Ju:
    case Qu:
    case ed:
    case td:
    case sd:
      return Bu(e);
    case Hu:
      return new n();
    case Lu:
    case Wu:
      return new n(e);
    case Vu:
      return ju(e);
    case Du:
      return new n();
    case Nu:
      return Fu(e);
  }
}
var zt = Object.create, od = /* @__PURE__ */ function() {
  function e() {
  }
  return function(s) {
    if (!Ue(s))
      return {};
    if (zt)
      return zt(s);
    e.prototype = s;
    var t = new e();
    return e.prototype = void 0, t;
  };
}();
function id(e) {
  return typeof e.constructor == "function" && !fs(e) ? od(wu(e)) : {};
}
var rd = "[object Map]";
function ld(e) {
  return ye(e) && D(e) == rd;
}
var Et = ie && ie.isMap, ad = Et ? Qe(Et) : ld, cd = "[object Set]";
function ud(e) {
  return ye(e) && D(e) == cd;
}
var jt = ie && ie.isSet, dd = jt ? Qe(jt) : ud, gs = "[object Arguments]", fd = "[object Array]", hd = "[object Boolean]", md = "[object Date]", gd = "[object Error]", _s = "[object Function]", _d = "[object GeneratorFunction]", yd = "[object Map]", bd = "[object Number]", ys = "[object Object]", pd = "[object RegExp]", vd = "[object Set]", wd = "[object String]", Sd = "[object Symbol]", kd = "[object WeakMap]", Cd = "[object ArrayBuffer]", Td = "[object DataView]", Ad = "[object Float32Array]", $d = "[object Float64Array]", Od = "[object Int8Array]", Ud = "[object Int16Array]", Rd = "[object Int32Array]", xd = "[object Uint8Array]", Id = "[object Uint8ClampedArray]", zd = "[object Uint16Array]", Ed = "[object Uint32Array]", $ = {};
$[gs] = $[fd] = $[Cd] = $[Td] = $[hd] = $[md] = $[Ad] = $[$d] = $[Od] = $[Ud] = $[Rd] = $[yd] = $[bd] = $[ys] = $[pd] = $[vd] = $[wd] = $[Sd] = $[xd] = $[Id] = $[zd] = $[Ed] = !0;
$[gd] = $[_s] = $[kd] = !1;
function ke(e, s, t, n, i, o) {
  var r;
  if (r !== void 0)
    return r;
  if (!Ue(e))
    return e;
  var a = Je(e);
  if (a)
    r = Iu(e);
  else {
    var c = D(e), u = c == _s || c == _d;
    if (cs(e))
      return mu(e);
    if (c == ys || c == gs || u && !i)
      r = u ? {} : id(e);
    else {
      if (!$[c])
        return i ? e : {};
      r = nd(e, c);
    }
  }
  o || (o = new le());
  var g = o.get(e);
  if (g)
    return g;
  o.set(e, r), dd(e) ? e.forEach(function(F) {
    r.add(ke(F, s, t, F, e, o));
  }) : ad(e) && e.forEach(function(F, E) {
    r.set(E, ke(F, s, t, E, e, o));
  });
  var A = ku, z = a ? void 0 : A(e);
  return hc(z || e, function(F, E) {
    z && (E = F, F = e[E]), yc(r, E, ke(F, s, t, E, e, o));
  }), r;
}
var jd = 1, Fd = 4;
function Bd(e) {
  return ke(e, jd | Fd);
}
const Fe = (e) => e.every((s) => typeof s == "object"), Ft = !0, bs = () => window.innerWidth;
let Bt = bs();
const Md = {
  name: "UluTableSticky",
  components: {
    UluTableStickyTable: da
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
      required: Ft
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
      validator: Fe,
      required: Ft
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
      validator: Fe
      // required
    },
    /**
     * Array of rows for footer (tfoot)
     */
    footerRows: {
      type: Array,
      validator: Fe
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
      resizeHandler: Ae(this.onResize.bind(this), 500, !0),
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
      const e = bs();
      Bt !== e && (Bt = e, this.resizing ? (this.resizing = !1, this.setTableSizes(), this.checkOverflowX(), this.syncScrollLeft()) : (this.resizing = !0, this.removeTableSizes()));
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
        this.sizesCalculated = !0, ss(() => {
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
}, Pd = { class: "table-sticky__sticky-wrap table-sticky__sticky-wrap--header" }, Hd = { class: "table-sticky__header-wrap" }, Ld = { class: "table-sticky__sticky-wrap table-sticky__sticky-wrap--first-column-header" }, Vd = { class: "table-sticky__sticky-wrap table-sticky__sticky-wrap--controls" }, Dd = {
  key: 2,
  class: "table-sticky__controls-inner"
}, Wd = ["disabled"], Nd = ["disabled"], Xd = {
  ref: "display",
  class: "table-sticky__display"
};
function Yd(e, s, t, n, i, o) {
  const r = S("UluTableStickyTable");
  return l(), d("div", {
    class: h(["table-sticky", {
      "table-sticky--overflown-x": i.overflownX,
      "table-sticky--can-scroll-right": i.canScrollRight,
      "table-sticky--can-scroll-left": i.canScrollLeft
    }])
  }, [
    f("div", Pd, [
      f("div", Hd, [
        k(r, {
          ref: "header",
          class: "table-sticky__table table-sticky__table--header",
          classes: t.classes,
          caption: t.caption,
          resolveClasses: o.resolveClasses,
          getColumnTitle: t.getColumnTitle,
          idPrefix: t.idPrefix,
          headerRows: i.headerRows,
          style: I({
            opacity: i.sizesCalculated ? "1" : "0",
            pointerEvents: i.sizesCalculated ? "auto" : "none",
            width: i.tableWidth
          }),
          onColumnSorted: o.applySort
        }, se({ _: 2 }, [
          C(e.$slots, (a, c) => ({
            name: c,
            fn: v((u) => [
              m(e.$slots, c, M(L(u)))
            ])
          }))
        ]), 1032, ["classes", "caption", "resolveClasses", "getColumnTitle", "idPrefix", "headerRows", "style", "onColumnSorted"])
      ])
    ]),
    f("div", Ld, [
      t.firstColumnSticky ? (l(), p(r, {
        key: 0,
        ref: "firstColumnHeader",
        class: "table-sticky__table table-sticky__table--first-column-header",
        classes: t.classes,
        caption: t.caption,
        resolveClasses: o.resolveClasses,
        getColumnTitle: t.getColumnTitle,
        idPrefix: t.idPrefix,
        headerRows: o.headerRowsFirst,
        style: I({
          opacity: o.headerOpacityX,
          pointerEvents: o.headerVisibleX ? "auto" : "none"
        }),
        onColumnSorted: o.applySort
      }, se({ _: 2 }, [
        C(e.$slots, (a, c) => ({
          name: c,
          fn: v((u) => [
            m(e.$slots, c, M(L(u)))
          ])
        }))
      ]), 1032, ["classes", "caption", "resolveClasses", "getColumnTitle", "idPrefix", "headerRows", "style", "onColumnSorted"])) : y("", !0)
    ]),
    f("div", Vd, [
      W(f("div", {
        class: h(["table-sticky__controls", o.resolveClasses(t.classes.controls)]),
        ref: "controls"
      }, [
        e.$slots.controls ? m(e.$slots, "controls", {
          key: 0,
          scrollLeft: o.scrollLeft,
          scrollRight: o.scrollRight,
          canScrollLeft: i.canScrollLeft,
          canScrollRight: i.canScrollRight
        }) : t.controlsComponent ? (l(), p(R(t.controlsComponent), {
          key: 1,
          scrollLeft: o.scrollLeft,
          scrollRight: o.scrollRight,
          canScrollLeft: i.canScrollLeft,
          canScrollRight: i.canScrollRight
        }, null, 8, ["scrollLeft", "scrollRight", "canScrollLeft", "canScrollRight"])) : (l(), d("div", Dd, [
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
          ], 10, Nd)
        ]))
      ], 2), [
        [Ne, o.controlsShown]
      ])
    ]),
    f("div", Xd, [
      k(r, {
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
      }, se({ _: 2 }, [
        C(e.$slots, (a, c) => ({
          name: c,
          fn: v((u) => [
            m(e.$slots, c, M(L(u)))
          ])
        }))
      ]), 1032, ["classes", "resolveClasses", "headerRows", "rows", "footerRows", "rowColumns", "caption", "idPrefix", "getRowValue", "getColumnTitle", "onVnodeMounted", "onActualHeaderRemoved", "onActualHeaderAdded", "onColumnSorted"])
    ], 512),
    t.firstColumnSticky ? (l(), p(r, {
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
      style: I({
        opacity: o.headerOpacityX,
        pointerEvents: o.headerVisibleX ? "auto" : "none"
      }),
      onColumnSorted: o.applySort
    }, se({ _: 2 }, [
      C(e.$slots, (a, c) => ({
        name: c,
        fn: v((u) => [
          m(e.$slots, c, M(L(u)))
        ])
      }))
    ]), 1032, ["classes", "resolveClasses", "caption", "headerRows", "columnWidth", "rows", "footerRows", "rowColumns", "idPrefix", "getRowValue", "getColumnTitle", "style", "onColumnSorted"])) : y("", !0)
  ], 2);
}
const ih = /* @__PURE__ */ _(Md, [["render", Yd]]);
export {
  Df as $,
  P as A,
  Sf as B,
  kf as C,
  Cf as D,
  Gn as E,
  Tf as F,
  Af as G,
  $f as H,
  Of as I,
  Uf as J,
  Rf as K,
  xf as L,
  If as M,
  zf as N,
  Ef as O,
  jf as P,
  Qt as Q,
  eo as R,
  Ff as S,
  Bf as T,
  Xn as U,
  Mf as V,
  Pf as W,
  Hf as X,
  Lf as Y,
  Vf as Z,
  lf as _,
  we as a,
  Wf as a0,
  Nf as a1,
  Xf as a2,
  Yf as a3,
  Dr as a4,
  Fr as a5,
  Kf as a6,
  Gf as a7,
  qf as a8,
  Zf as a9,
  Jf as aa,
  eh as ab,
  th as ac,
  sh as ad,
  nh as ae,
  Hl as af,
  oh as ag,
  ih as ah,
  Jl as ai,
  da as aj,
  dn as ak,
  K as al,
  oo as am,
  ro as an,
  Mn as ao,
  sf as b,
  nf as c,
  of as d,
  rf as e,
  af as f,
  gn as g,
  An as h,
  tf as i,
  cf as j,
  uf as k,
  te as l,
  df as m,
  ff as n,
  hf as o,
  mf as p,
  gf as q,
  Qf as r,
  ko as s,
  _f as t,
  ho as u,
  yf as v,
  bf as w,
  pf as x,
  vf as y,
  wf as z
};
