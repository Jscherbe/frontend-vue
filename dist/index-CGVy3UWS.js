import { ref as j, computed as R, resolveDirective as Mt, createElementBlock as d, openBlock as l, Fragment as T, withDirectives as V, createElementVNode as f, unref as O, normalizeClass as h, renderSlot as m, withKeys as Bt, normalizeStyle as U, createCommentVNode as y, nextTick as Lt, toRef as ks, toDisplayString as p, createBlock as v, Teleport as Ne, resolveDynamicComponent as z, mergeProps as N, reactive as Ht, watchEffect as Cs, defineAsyncComponent as Ts, markRaw as se, normalizeProps as M, toRefs as As, toValue as Re, resolveComponent as S, withModifiers as $s, createVNode as k, useSlots as Os, renderList as C, TransitionGroup as xs, withCtx as b, createTextVNode as w, vShow as We, onMounted as Rs, onUnmounted as Us, guardReactiveProps as B, vModelCheckbox as Dt, vModelText as Is, vModelSelect as zs, Transition as it, createSlots as te } from "vue";
import { inline as Vt, offset as Nt, flip as Wt, shift as Xt, arrow as Yt, useFloating as Kt, autoUpdate as Gt } from "@floating-ui/vue";
import { Disclosure as Es, DisclosureButton as js, DisclosurePanel as Fs, Tab as Ps, TabGroup as Ms, TabList as Bs, TabPanel as Ls, TabPanels as Hs } from "@headlessui/vue";
import { RouterLink as Xe } from "vue-router";
import { useDropzone as Ds } from "vue3-dropzone";
import Vs from "gsap";
import Ns from "fuse.js";
const be = {
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
}, Y = {
  plugin: { ...be.plugin },
  popover: { ...be.popover },
  tooltip: { ...be.tooltip, ...be.popover }
}, Ye = j(!1), Ke = j(null);
function Ws(e = {}) {
  return Object.assign(Y.popover, e.popover), Object.assign(Y.tooltip, e.tooltip), Object.assign(Y.plugin, e.plugin), Y;
}
function Xs(e) {
  return Object.assign({}, Y.tooltip, e);
}
function Ys(e) {
  Ye.value = !0, Ke.value = e;
}
function Ks() {
  Ye.value = !1, Ke.value = null;
}
const Se = /* @__PURE__ */ new WeakMap(), Gs = {
  mounted(e, s) {
    rt(e, s);
  },
  beforeUpdate(e) {
    lt(e);
  },
  updated(e, s) {
    rt(e, s);
  },
  umounted(e) {
    lt(e);
  }
};
function rt(e, s) {
  const t = qs(e, s);
  if (!t) return;
  let n = null;
  const i = () => {
    n || (n = setTimeout(() => {
      Ys(t), clearTimeout(n);
    }, t.delay));
  }, o = () => {
    n && (clearTimeout(n), n = null), Ks();
  };
  t.showEvents.forEach((r) => {
    e.addEventListener(r, i);
  }), t.hideEvents.forEach((r) => {
    e.addEventListener(r, o);
  }), Se.set(e, { onShow: i, onHide: o, config: t });
}
function lt(e) {
  if (!Se.has(e))
    return;
  const { config: s, onShow: t, onHide: n } = Se.get(e);
  s.showEvents.forEach((i) => {
    e.removeEventListener(i, t);
  }), s.hideEvents.forEach((i) => {
    e.removeEventListener(i, n);
  }), Se.delete(e);
}
function qs(e, s) {
  const { value: t } = s;
  let n;
  if (!(t === !1 || t === null))
    return typeof t == "object" ? n = t : n = { content: t }, Xs(Object.assign({}, { trigger: e }, n));
}
let Zs = 0;
function Js() {
  return `ulu-popovers-uid-${++Zs}`;
}
const Qs = ["disabled", "aria-expanded", "aria-controls", "aria-label"], en = ["aria-hidden", "id", "data-placement"], tn = { class: "popover__inner" }, sn = {
  key: 0,
  class: "popover__footer"
}, Ge = {
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
    const t = s, n = e, i = Js(), o = Object.assign({}, Y.popover, n.config), r = j(n.startOpen || !1), a = j(null), u = j(null), c = j(null), g = [
      ...o.inline ? [Vt()] : [],
      ...o.offset ? [Nt(o.offset)] : [],
      Wt(),
      Xt(),
      ...o.arrow ? [Yt({ element: c })] : []
    ], A = {
      placement: o.placement,
      whileElementsMounted: Gt,
      middleware: g
    }, {
      floatingStyles: E,
      placement: I,
      middlewareData: P,
      update: st,
      isPositioned: vs
    } = Kt(a, u, A), bs = R(() => {
      const F = P.value?.arrow;
      return F ? {
        position: "absolute",
        left: F?.x != null ? `${F.x}px` : "",
        top: F?.y != null ? `${F.y}px` : ""
      } : null;
    });
    o.onReady && o.onReady({ update: st, isPositioned: vs });
    const ws = () => {
      pe(!r.value);
    }, pe = (F) => {
      r.value = F;
      const Q = {
        trigger: O(a),
        content: O(u),
        isOpen: O(r)
      }, ve = { isOpen: Q.isOpen };
      Lt(() => {
        r.value ? (st(), window.setTimeout(() => {
          Ss(), n.directFocus(Q), t("toggle", ve);
        }, 0)) : (nt(), n.directFocus(Q), t("toggle", ve));
      });
    };
    let J;
    const Ss = () => {
      n.clickOutsideCloses && (J && nt(), J = (F) => {
        u.value.contains(F.target) || pe(!1);
      }, document.addEventListener("click", J));
    }, nt = () => {
      J && (document.removeEventListener("click", J), J = null);
    }, ot = () => pe(!1);
    return (F, Q) => {
      const ve = Mt("ulu-tooltip");
      return l(), d(T, null, [
        V((l(), d("button", {
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
          "aria-controls": O(i),
          "aria-label": e.triggerAlt
        }, [
          m(F.$slots, "trigger", { isOpen: r.value })
        ], 10, Qs)), [
          [ve, e.tooltip ? e.tooltip : null]
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
          ref: u,
          "aria-hidden": r.value ? "false" : "true",
          id: O(i),
          style: U(O(E)),
          "data-placement": O(I),
          onKeydown: Q[0] || (Q[0] = Bt((Zd) => pe(!1), ["esc"])),
          tabindex: "-1"
        }, [
          f("span", tn, [
            m(F.$slots, "content", { close: ot })
          ]),
          F.$slots.footer ? (l(), d("span", sn, [
            m(F.$slots, "footer", { close: ot })
          ])) : y("", !0),
          O(o).arrow ? (l(), d("span", {
            key: 1,
            class: "popover__arrow",
            ref_key: "contentArrow",
            ref: c,
            style: U(bs.value),
            "data-ulu-popover-arrow": ""
          }, null, 4)) : y("", !0)
        ], 46, en)
      ], 64);
    };
  }
}, nn = ["data-placement"], on = ["innerHTML"], rn = {
  key: 1,
  class: "popover__inner"
}, ln = {
  __name: "UluTooltipPopover",
  props: {
    config: Object
  },
  setup(e) {
    const s = ks(e.config.trigger), t = j(null), n = j(null), i = [
      ...e.config.inline ? [Vt()] : [],
      ...e.config.offset ? [Nt(e.config.offset)] : [],
      Wt(),
      Xt(),
      ...e.config.arrow ? [Yt({ element: n })] : []
    ], o = {
      placement: e.config.placement,
      whileElementsMounted: Gt,
      middleware: i
    }, {
      floatingStyles: r,
      placement: a,
      middlewareData: u,
      update: c,
      isPositioned: g
    } = Kt(s, t, o), A = R(() => {
      const E = u.value?.arrow;
      return E ? {
        position: "absolute",
        left: E?.x != null ? `${E.x}px` : "",
        top: E?.y != null ? `${E.y}px` : ""
      } : null;
    });
    return e.config.onReady && e.config.onReady({ update: c, isPositioned: g }), (E, I) => (l(), d("span", {
      class: h(["popover popover--tooltip is-active", e.config.class]),
      ref_key: "content",
      ref: t,
      "aria-hidden": "true",
      "data-placement": O(a),
      style: U(O(r))
    }, [
      e.config.isHtml ? (l(), d("span", {
        key: 0,
        class: "popover__inner",
        innerHTML: e.config.content
      }, null, 8, on)) : (l(), d("span", rn, p(e.config.content), 1)),
      e.config.arrow ? (l(), d("span", {
        key: 2,
        class: "popover__arrow",
        ref_key: "contentArrow",
        ref: n,
        style: U(A.value)
      }, null, 4)) : y("", !0)
    ], 14, nn));
  }
}, an = {
  __name: "UluTooltipDisplay",
  setup(e) {
    return (s, t) => (l(), v(Ne, {
      to: O(Y).plugin.tooltipTeleportTo
    }, [
      O(Ye) ? (l(), v(ln, {
        key: 0,
        config: O(Ke)
      }, null, 8, ["config"])) : y("", !0)
    ], 8, ["to"]));
  }
};
function rf(e, s = {}) {
  const t = Ws(s);
  t.plugin.global && (e.directive(t.plugin.directiveName, Gs), e.component("UluTooltipDisplay", an), e.component("UluPopover", Ge));
}
const _ = (e, s) => {
  const t = e.__vccOpts || e;
  for (const [n, i] of s)
    t[n] = i;
  return t;
}, cn = {
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
function un(e, s, t, n, i, o) {
  return o.currentModal ? (l(), v(z(o.currentModal.component), N({ key: 0 }, o.currentProps, {
    modelValue: i.open,
    "onUpdate:modelValue": s[0] || (s[0] = (r) => i.open = r),
    onVnodeMounted: o.modalMounted,
    onVnodeUnmounted: o.modalUnmounted
  }), null, 16, ["modelValue", "onVnodeMounted", "onVnodeUnmounted"])) : y("", !0);
}
const dn = /* @__PURE__ */ _(cn, [["render", un]]);
function fn() {
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
const qt = {
  /**
   * If set UluIcon will use global css classes instead of Font Awesome vue component
   */
  fontAwesomeStatic: !1,
  /**
   * Use a different icon component (if using a library other than Font Awesome)
   * - Need to have this component map (iconsByType) to it's implementation
   * - All components internally use type, so only user defined components change definitions
   *   - So you should only need to create definitions for the default types to replace this for the library
   */
  iconComponent: null,
  /**
   * Which prop in iconComponent should receive the resolved definition
   */
  iconPropResolver: (e) => ({ icon: e }),
  /**
   * Default icons by type
   */
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
let ne = Ht({ ...qt });
function lf() {
  return { ...qt };
}
function af(e) {
  Object.assign(ne, e);
}
function cf() {
  return ne;
}
function Ue(e) {
  if (!ne.hasOwnProperty(e)) {
    console.warn(`Attempted to access non-existent setting: ${e}`);
    return;
  }
  return ne[e];
}
function uf(e, s) {
  if (typeof e != "string")
    throw new Error("Expected key to be string");
  ne[e] = s;
}
function hn(e) {
  const s = ne.iconsByType;
  if (!s[e])
    throw new Error(`Icon type "${e}" not found!`);
  return s[e];
}
const L = {
  __name: "UluIcon",
  props: {
    /**
     * Semantic type of icon to use, will be resolved from settings
     */
    type: String,
    /**
     * Icon definition can be string (fa classes), or array or object (any prop format FaIcon accepts)
     * - This will override the 'type' prop if both are provided
     */
    definition: [String, Array, Object, Boolean]
  },
  setup(e) {
    const s = j(null), { getIconProps: t, getClassesFromDefinition: n } = fn();
    let i;
    const o = e, r = R(() => Ue("fontAwesomeStatic")), a = R(() => Ue("iconComponent")), u = R(() => Ue("iconPropResolver")), c = R(() => {
      if (o.definition)
        return o.definition;
      if (o.type)
        try {
          return hn(o.type);
        } catch (I) {
          return console.warn(I), null;
        }
      return null;
    }), g = R(() => !a.value || !c.value ? null : u.value(c.value)), A = R(() => t(c.value)), E = R(() => n(c.value));
    return Cs(async () => {
      if (!r.value && c.value) {
        if (s.value === null)
          if (i)
            s.value = se(i.FontAwesomeIcon);
          else {
            const I = Ts(async () => {
              const P = await import("./index.es-HlG3u0J5.js");
              return i = P, P.FontAwesomeIcon;
            });
            s.value = se(I);
          }
      } else
        s.value = null;
    }), (I, P) => a.value ? (l(), v(z(a.value), M(N({ key: 0 }, g.value)), null, 16)) : !r.value && s.value && c.value ? (l(), v(z(s.value), M(N({ key: 1 }, A.value)), null, 16)) : r.value && c.value ? (l(), d("span", {
      key: 2,
      class: h(E.value),
      "aria-hidden": "true"
    }, null, 2)) : y("", !0);
  }
};
function Pe(e) {
  const s = /* @__PURE__ */ new Set();
  if (!e)
    return s;
  if (typeof e == "string")
    e.split(" ").forEach((t) => {
      t && s.add(t);
    });
  else if (Array.isArray(e))
    e.forEach((t) => {
      Pe(t).forEach((n) => s.add(n));
    });
  else if (typeof e == "object")
    for (const t in e)
      Object.prototype.hasOwnProperty.call(e, t) && e[t] && t && s.add(t);
  return s;
}
function G({ props: e, baseClass: s, internal: t = {} }) {
  const { modifiers: n } = As(e);
  return { resolvedModifiers: R(() => {
    const o = Re(s), r = Pe(Re(n)), a = Pe(Re(t));
    if (!o)
      return console.warn("useModifiers: Missing 'baseClass' argument, modifiers will not be applied."), "";
    const u = /* @__PURE__ */ new Set([...a, ...r]);
    return Array.from(u).map((c) => `${o}--${c}`);
  }) };
}
function Zt() {
  return typeof window < "u" && typeof window.document < "u";
}
function mn(e, s) {
  const t = e.getBoundingClientRect();
  return s.clientY < t.top || // above
  s.clientY > t.top + t.height || // below
  s.clientX < t.left || // left side
  s.clientX > t.left + t.width;
}
function gn(e = document.body, s = window) {
  return s.innerWidth - e.clientWidth;
}
function _n({ preventShift: e = !1, container: s = document.body }) {
  const t = s.style.overflow, n = s.style.paddingRight;
  if (s.style.overflow = "hidden", e) {
    const i = gn();
    if (i > 0) {
      const o = parseInt(n || "0px", 10);
      s.style.paddingRight = `${o + i}px`;
    }
  }
  return () => {
    s.style.overflow = t, s.style.paddingRight = n;
  };
}
function Te(e, s, t, n) {
  var i;
  return function() {
    var r = n || this, a = arguments, u = function() {
      i = null, t || e.apply(r, a);
    }, c = t && !i;
    clearTimeout(i), i = setTimeout(u, s), c && e.apply(r, a);
  };
}
Zt() && (pn(), vn());
const at = {
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
  at[e] ? at[e](s) : console.warn(`Unable to dispatch site event: ${e} in context:`, s);
}
function yn(e) {
  return "ulu:" + e;
}
function ce(e, s = null, t = { bubbles: !0 }) {
  return new CustomEvent(yn(e), { detail: s, ...t });
}
function pn() {
  window.addEventListener("resize", Te(() => Me("pageResized", document), 250));
}
function vn() {
  window.addEventListener("beforeprint", () => {
    Me("beforePrint", document);
  }), window.addEventListener("afterprint", () => {
    Me("afterPrint", document);
  });
}
function bn(e) {
  return typeof e == "object" && e?.constructor?.name;
}
function wn(e, s, t) {
  const n = bn(s) || "Logger";
  console[e](n, ...t);
}
function ee(e, ...s) {
}
function we(e, ...s) {
  wn("error", e, s);
}
class qe {
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
    const i = Object.assign({}, qe.defaults, n);
    this.options = i, this.container = s, this.control = t, this.debug = i.debug;
    const o = ["left", "right"], r = ["top", "bottom"], { fromX: a, fromY: u } = i;
    if (!o.includes(a) && a !== null) {
      we(this, `Invalid fromX: ${a} (left|right|null)`);
      return;
    }
    if (!r.includes(u) && u !== null) {
      we(this, `Invalid fromY: ${u} (top|bottom|null)`);
      return;
    }
    if (!a && !u) {
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
    t.manageEvents && (t.enablePointerResizing && s.removeEventListener("pointerdown", this.#n), t.enableKeyboardResizing && s.removeEventListener("keydown", this.#o)), this.#t && clearTimeout(this.#t), this.#c(), t.manageAriaLabel && s.removeAttribute("aria-label"), ee(this, "Resizer destroyed.");
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
    this.#e.width = parseInt(o.width, 10), this.#e.height = parseInt(o.height, 10), n.overrideMaxDimensions && (this.resizeHorizontal && (t.style.maxWidth = "none"), this.resizeVertical && (t.style.maxHeight = "none")), this.#s = !0, this.dispatchEvent("resizer:start", s), ee(this, "Resize started.", {
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
    this.#s && (this.dispatchEvent("resizer:end"), this.#c(), ee(this, "Resize ended."));
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
    const { fromX: r, fromY: a, multiplier: u } = this.options;
    this.resizeHorizontal && (r === "right" ? i = this.#e.width + s * u : r === "left" && (i = this.#e.width - s * u), this.container.style.width = `${Math.max(0, i)}px`), this.resizeVertical && (a === "bottom" ? o = this.#e.height + t * u : a === "top" && (o = this.#e.height - t * u), this.container.style.height = `${Math.max(0, o)}px`);
    const c = {
      newWidth: i,
      newHeight: o,
      totalDeltaX: s,
      totalDeltaY: t,
      event: n
    };
    this.dispatchEvent("resizer:update", c), ee(this, "Resizing update.", c);
  }
  /**
   * Public handler for pointerdown events. Call this method from your own event listeners
   * if `manageEvents` is false. Its logic will only execute if `enablePointerResizing` is true.
   * @param {PointerEvent} e The pointerdown event.
   */
  onPointerdown(s) {
    if (!this.options.enablePointerResizing) {
      ee(this, "Pointer resizing disabled. Ignoring pointerdown event.");
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
      ee(this, "Keyboard resizing disabled. Ignoring keydown event.");
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
const Sn = {
  name: "UluModal",
  components: {
    UluIcon: L
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
    const s = Os(), t = R(() => e.title || s.title), n = R(() => {
      const { allowResize: a, position: u } = e;
      if (!a || !u) return;
      const c = ["left", "right", "center"];
      return c.includes(u) ? !0 : (console.warn(`Passed invalid position for resize (${u}), use ${c.join(", ")}`), !1);
    }), i = R(() => e.position === "center" ? "resizeBoth" : "resizeHorizontal"), o = R(() => ({
      [e.position]: e.position,
      resize: e.allowResize,
      "no-resize": !e.allowResize,
      "no-header": !t.value,
      "body-fills": e.bodyFills,
      "no-backdrop": e.noBackdrop,
      "no-min-height": e.noMinHeight,
      "non-modal": e.nonModal,
      "resizer-active": n.value
    })), { resolvedModifiers: r } = G({
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
        s === t && mn(t, e) && this.close();
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
        e.newState === "open" ? this.restoreScroll = _n({ preventShift: s }) : this.destroyPreventScroll();
      }
    },
    setupResizer() {
      const { position: e, resizerEnabled: s } = this;
      if (s) {
        const { container: t, resizer: n } = this.$refs, i = e === "center" ? { fromX: "right", fromY: "bottom", multiplier: 2 } : { fromX: e === "right" ? "left" : "right" };
        this.resizerInstance = new qe(t, n, i), this.handleResizerStart = () => {
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
}, kn = ["aria-labelledby", "aria-describedby"], Cn = ["id"], Tn = { class: "modal__title-text" }, An = {
  key: 2,
  class: "modal__resizer",
  ref: "resizer",
  type: "button"
};
function $n(e, s, t, n, i, o) {
  const r = S("UluIcon");
  return l(), v(Ne, {
    to: t.teleport === !1 ? null : t.teleport,
    disabled: t.teleport === !1
  }, [
    f("dialog", {
      class: h(["modal", [n.resolvedModifiers, t.classes.container]]),
      "aria-labelledby": o.resolvedLabelledby,
      "aria-describedby": t.describedby,
      ref: "container",
      style: U({ width: i.containerWidth }),
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
            t.titleIcon ? (l(), v(r, {
              key: 0,
              class: "modal__title-icon",
              definition: t.titleIcon
            }, null, 8, ["definition"])) : y("", !0),
            f("span", Tn, p(t.title), 1)
          ])
        ], 10, Cn),
        f("button", {
          class: "modal__close",
          "aria-label": "Close modal",
          onClick: s[0] || (s[0] = (...a) => o.close && o.close(...a)),
          autofocus: ""
        }, [
          m(e.$slots, "closeIcon", {}, () => [
            k(r, {
              class: "modal__close-icon",
              type: "close",
              definition: t.closeIcon
            }, null, 8, ["definition"])
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
      n.resizerEnabled ? (l(), d("button", An, [
        m(e.$slots, "resizerIcon", {}, () => [
          k(r, {
            class: "modal__resizer-icon",
            type: n.resizerIconType,
            definition: t.resizerIcon
          }, null, 8, ["type", "definition"])
        ])
      ], 512)) : y("", !0)
    ], 46, kn)
  ], 8, ["to", "disabled"]);
}
const On = /* @__PURE__ */ _(Sn, [["render", $n]]), ue = [], xn = j({
  /**
   * Holds active component options (including component, and options)
   */
  active: null,
  /**
   * Populated with any props passed to open method, bound to modal component
   */
  activeProps: null
}), de = xn.value, ct = {
  data: de,
  modals: ue
}, Rn = (e) => ({
  open(s, t = null) {
    const n = this.get(s);
    de.active = se(n), de.activeProps = Object.assign({}, n.props, t);
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
function df(e, s) {
  const t = Object.assign({}, Un, s), i = Rn((o) => Object.assign({}, t.modalOptions, o));
  e.component(t.componentNameDisplay, dn), e.component(t.componentNameModal, On), t.modals.forEach((o) => {
    i.add(o);
  }), ct.options = t, e.config.globalProperties.$uluModals = i, e.provide("uluModals", i), e.config.globalProperties.$uluModalsState = ct;
}
const In = {
  name: "UluToast",
  components: {
    UluIcon: L
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
}, zn = ["onClick"];
function En(e, s, t, n, i, o) {
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
        t.toast.icon ? (l(), v(r, {
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
          }, p(t.toast.title), 3),
          t.toast.date ? (l(), d("span", {
            key: 0,
            class: h(["toast__date", t.classes.date])
          }, p(t.toast.date), 3)) : y("", !0)
        ], 2)) : y("", !0),
        t.toast.description ? (l(), d("div", {
          key: 1,
          class: h(["toast__body", t.classes.body])
        }, p(t.toast.description), 3)) : y("", !0)
      ])
    ], 2),
    t.toast.actions?.length ? (l(), d("div", {
      key: 1,
      class: h(["toast__actions", t.classes.actions])
    }, [
      (l(!0), d(T, null, C(t.toast.actions, (u, c) => (l(), d("button", {
        key: c,
        class: h(["toast__action", t.classes.action]),
        onClick: (g) => o.handleAction(g, u)
      }, p(u.label), 11, zn))), 128))
    ], 2)) : y("", !0),
    f("button", {
      class: h(["toast__close", t.classes.closeButton]),
      onClick: s[0] || (s[0] = (...u) => t.toast.close && t.toast.close(...u))
    }, [
      k(a, { type: "close" })
    ], 2)
  ], 2);
}
const Jt = /* @__PURE__ */ _(In, [["render", En]]), ut = {
  toastOptions: {
    /**
     * Component used to render the toast in the display
     */
    component: se(Jt),
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
let jn = 0;
const X = Ht({
  toasts: [],
  /**
   * Saveable 
   */
  pluginOptions: ut.pluginOptions,
  toastOptions: ut.toastOptions,
  setToastOptions(e) {
    return this.toastOptions = ze({}, this.toastOptions, e), this.pluginOptions;
  },
  setPluginOptions(e) {
    return this.pluginOptions = ze({}, this.pluginOptions, e), this.pluginOptions;
  },
  createToast(e) {
    const s = `toast-${++jn}`;
    return ze({}, this.toastOptions, e, {
      uid: s,
      close() {
        Be.remove(s);
      }
    });
  }
}), Be = {
  /**
   * 
   * @param {Object} options Toast options
   * @returns Toast object (to be used to remove)
   */
  add(e) {
    const s = X.createToast(e);
    return X.toasts.unshift(s), s.duration && setTimeout(() => {
      this.remove(s.uid);
    }, s.duration), s;
  },
  /**
   * 
   * @param {Object} toast Toast uid
   */
  remove(e) {
    const s = X.toasts.findIndex((t) => t.uid === e);
    s > -1 && X.toasts.splice(s, 1);
  },
  /**
   * Remove all toasts
   */
  removeAll() {
    X.toasts = [];
  }
}, Fn = {
  name: "UluTooltipDisplay",
  data() {
    const { toasts: e, pluginOptions: s } = X;
    return { toasts: e, pluginOptions: s };
  },
  computed: {
    classes() {
      const { position: e } = this.pluginOptions;
      return e.map((t) => `toast-container--${t}`);
    }
  }
};
function Pn(e, s, t, n, i, o) {
  return l(), v(Ne, {
    to: i.pluginOptions.teleportTo
  }, [
    k(xs, {
      class: h(["toast-container", o.classes]),
      name: "toast",
      tag: "div"
    }, {
      default: b(() => [
        (l(!0), d(T, null, C(i.toasts, (r) => (l(), v(z(r.component), {
          key: r.uid,
          toast: r
        }, null, 8, ["toast"]))), 128))
      ]),
      _: 1
    }, 8, ["class"])
  ], 8, ["to"]);
}
const Mn = /* @__PURE__ */ _(Fn, [["render", Pn]]);
function ff(e, s = {}) {
  const t = X.setPluginOptions(s?.plugin);
  X.setToastOptions(s?.toast), e.component(t.componentName, Jt), e.component(t.componentNameDisplay, Mn), e.config.globalProperties.$uluToast = Be, e.provide("uluToast", Be);
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
function Ln(e) {
  const s = Object.assign({}, Bn, e), t = j(null), n = j(s.initialValue), i = j(null);
  return (async () => {
    if (!Zt()) return;
    await new Promise((g) => {
      document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", () => g()) : g();
    });
    const r = await import("./breakpoints-BegXzJ94.js"), { BreakpointManager: a } = r, u = se(new a(s.plugin));
    t.value = se(u);
    const c = () => {
      n.value = u.active, i.value = u.resizeDirection;
    };
    c(), s.onReady && s.onReady(u), u.onChange(c);
  })(), { breakpointManager: t, breakpointActive: n, breakpointDirection: i };
}
const Hn = {
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
  const t = j(!1), n = Object.assign({}, Hn, s), { breakpointMobile: i } = n, { onReady: o } = n.managerOptions, r = {
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
    breakpointManager: u,
    breakpointActive: c,
    breakpointDirection: g
  } = Ln(a);
  e.provide("uluBreakpointActive", R(() => c.value)), e.provide("uluBreakpointDirection", R(() => g.value)), e.provide("uluBreakpointManager", R(() => u.value)), e.provide("uluIsMobile", R(() => t.value));
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
    const s = e, { resolvedModifiers: t } = G({ props: s, baseClass: "button" });
    return (n, i) => (l(), v(O(Es), { defaultOpen: e.defaultOpen }, {
      default: b(({ open: o }) => [
        f("div", {
          class: h(["accordion", [
            { [e.activeClass]: o },
            e.classes.container,
            O(t)
          ]])
        }, [
          k(O(js), {
            class: h(["accordion__summary", [
              { [e.activeClass]: o },
              e.classes.summary
            ]])
          }, {
            default: b(() => [
              m(n.$slots, "summary", { open: o }, () => [
                (l(), v(z(e.summaryTextElement), null, {
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
                  k(L, {
                    type: o ? "collapse" : "expand",
                    style: { display: "inline" }
                  }, null, 8, ["type"])
                ], 2)
              ])
            ]),
            _: 2
          }, 1032, ["class"]),
          k(O(Fs), {
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
let Dn = 0;
const Vn = {
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
      const e = `Ulu-C-${++Dn}`;
      return document.getElementById(e) ? this.getUid() : e;
    }
  }
}, Nn = ["id", "aria-controls", "aria-expanded"], Wn = ["id", "aria-hidden", "aria-labelledby"], Xn = { class: "CollapsibleRegion__content-inner" };
function Yn(e, s, t, n, i, o) {
  return l(), d("div", {
    class: h(["CollapsibleRegion", {
      "CollapsibleRegion--open": i.isOpen,
      "CollapsibleRegion--closed": !i.isOpen,
      "CollapsibleRegion--transitioning": i.isTransitioning
    }]),
    onKeydown: s[1] || (s[1] = Bt((...r) => o.handleEscape && o.handleEscape(...r), ["esc"]))
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
    ], 8, Nn),
    V(f("div", {
      class: "CollapsibleRegion__content",
      tabindex: "-1",
      ref: "content",
      id: i.contentId,
      "aria-hidden": !i.isOpen,
      "aria-labelledby": i.toggleId,
      style: U(o.contentStyles)
    }, [
      f("div", Xn, [
        m(e.$slots, "default")
      ])
    ], 12, Wn), [
      [We, !i.isHidden]
    ])
  ], 34);
}
const Kn = /* @__PURE__ */ _(Vn, [["render", Yn]]), Gn = {
  name: "UluTag",
  components: {
    UluIcon: L
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
    const { resolvedModifiers: s } = G({ props: e, baseClass: "tag" });
    return { resolvedModifiers: s };
  }
};
function qn(e, s, t, n, i, o) {
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
    t.icon ? (l(), v(r, {
      key: 0,
      definition: t.icon
    }, null, 8, ["definition"])) : y("", !0),
    m(e.$slots, "default", {}, () => [
      w(p(t.text), 1)
    ])
  ], 2);
}
const Zn = /* @__PURE__ */ _(Gn, [["render", qn]]), Jn = {
  name: "UluMenu",
  components: {
    UluIcon: L,
    UluTag: Zn
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
function Qn(e, s, t, n, i, o) {
  const r = S("UluIcon"), a = S("UluTag"), u = S("UluMenu", !0), c = Mt("ulu-tooltip");
  return t.items?.length ? (l(), d("ul", {
    key: 0,
    class: h(t.classes.list)
  }, [
    (l(!0), d(T, null, C(t.items, (g, A) => (l(), d("li", {
      key: A,
      class: h([t.classes.item, g?.classes?.item])
    }, [
      V((l(), v(z(g.to || g.path ? "router-link" : g.click ? "button" : "a"), N({ ref_for: !0 }, {
        ...g.to || g.path ? { to: g.to || g.path } : {},
        ...g.href ? { href: g.href || "#" } : {}
      }, {
        onClick: (E) => {
          o.handleItemClick(E, g);
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
            index: A
          }, () => [
            g.icon ? (l(), v(r, {
              key: 0,
              definition: g.icon,
              class: h([t.classes.linkIcon, g?.classes?.linkIcon])
            }, null, 8, ["definition", "class"])) : y("", !0),
            f("span", {
              class: h([t.classes.linkText, g?.classes?.linkText])
            }, p(g.title), 3),
            g.tag ? (l(), v(a, N({
              key: 1,
              ref_for: !0
            }, g.tag), null, 16)) : y("", !0)
          ])
        ]),
        _: 2
      }, 1040, ["onClick", "class", "activeClass", "exactActiveClass", "aria-label", "id"])), [
        [c, t.iconOnly ? g.title : g.tooltip || null]
      ]),
      !t.noChildren && g?.children?.length ? (l(), v(u, {
        key: 0,
        iconOnly: t.iconOnly,
        classes: t.classes,
        items: g.children
      }, null, 8, ["iconOnly", "classes", "items"])) : y("", !0)
    ], 2))), 128))
  ], 2)) : y("", !0);
}
const Qt = /* @__PURE__ */ _(Jn, [["render", Qn]]), eo = {
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
function to(e, s, t, n, i, o) {
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
const so = /* @__PURE__ */ _(eo, [["render", to]]), no = {
  name: "UluDropdown",
  components: {
    UluPopover: Ge,
    UluMenuStack: so
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
function oo(e, s, t, n, i, o) {
  const r = S("UluMenuStack"), a = S("UluPopover");
  return l(), v(a, { classes: t.popoverClasses }, {
    trigger: b(({ isOpen: u }) => [
      m(e.$slots, "default", { isOpen: u })
    ]),
    content: b(() => [
      k(r, { items: t.items }, null, 8, ["items"])
    ]),
    _: 3
  }, 8, ["classes"]);
}
const gf = /* @__PURE__ */ _(no, [["render", oo]]), Ze = j(!1), Ce = {
  start: [],
  end: []
};
function Je() {
  window.removeEventListener("resize", Je), Ze.value = !0, Ce.start.forEach((e) => e());
}
function io() {
  Ze.value = !1, Ce.end.forEach((e) => e()), window.addEventListener("resize", Je);
}
window.addEventListener("resize", Je), window.addEventListener("resize", Te(io, 300));
function dt(e, s) {
  return e.push(s), () => {
    const t = e.findIndex((n) => n === s);
    t > -1 && e.splice(t);
  };
}
function ro() {
  return {
    resizing: Ze,
    onResizeStart(e) {
      return dt(Ce.start, e);
    },
    onResizeEnd(e) {
      return dt(Ce.end, e);
    }
  };
}
const lo = { class: "layout-flex-baseline" }, ao = { class: "type-word-break" }, _f = {
  __name: "UluOverflowPopover",
  props: {
    /**
     * Default icon for overflow popover trigger
     */
    triggerIcon: String
  },
  setup(e) {
    const { resizing: s, onResizeEnd: t } = ro(), n = j(null), i = j(!1), o = () => {
      Lt(() => {
        const a = n.value;
        i.value = a.offsetWidth < a.scrollWidth;
      });
    }, r = t(o);
    return Rs(o), Us(r), (a, u) => (l(), d("div", lo, [
      f("div", {
        class: "type-truncate",
        ref_key: "text",
        ref: n
      }, [
        m(a.$slots, "default")
      ], 512),
      i.value && !O(s) ? (l(), v(Ge, {
        key: 0,
        triggerAlt: "Show Full Text",
        size: "large"
      }, {
        trigger: b(() => [
          k(L, {
            type: "ellipsis",
            definition: e.triggerIcon
          }, null, 8, ["definition"])
        ]),
        content: b(() => [
          f("div", ao, [
            m(a.$slots, "default")
          ])
        ]),
        _: 3
      })) : y("", !0)
    ]));
  }
}, yf = {
  __name: "UluTab",
  setup(e) {
    return (s, t) => (l(), v(O(Ps), null, {
      default: b((n) => [
        m(s.$slots, "default", M(B(n)))
      ]),
      _: 3
    }));
  }
}, pf = /* @__PURE__ */ Object.assign({
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
    return (s, t) => (l(), v(O(Ms), {
      defaultIndex: e.defaultIndex,
      vertical: e.vertical
    }, {
      default: b((n) => [
        f("div", {
          class: h(["tabs", {
            "tabs--vertical": e.vertical
          }])
        }, [
          m(s.$slots, "default", M(B(n)))
        ], 2)
      ]),
      _: 3
    }, 8, ["defaultIndex", "vertical"]));
  }
}), vf = {
  __name: "UluTabList",
  setup(e) {
    return (s, t) => (l(), v(O(Bs), { class: "tabs__tablist" }, {
      default: b(() => [
        m(s.$slots, "default")
      ]),
      _: 3
    }));
  }
}, bf = {
  __name: "UluTabPanel",
  setup(e) {
    return (s, t) => (l(), v(O(Ls), null, {
      default: b((n) => [
        m(s.$slots, "default", M(B(n)))
      ]),
      _: 3
    }));
  }
}, wf = {
  __name: "UluTabPanels",
  setup(e) {
    return (s, t) => (l(), v(O(Hs), null, {
      default: b((n) => [
        m(s.$slots, "default", M(B(n)))
      ]),
      _: 3
    }));
  }
}, co = {
  name: "UluButton",
  components: {
    UluIcon: L
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
    const { resolvedModifiers: s } = G({ props: e, baseClass: "button" });
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
      return this.to ? Xe : this.href ? "a" : "button";
    },
    attrs() {
      const { to: e, href: s, download: t, target: n } = this, i = e ? { to: e } : s ? { href: s } : {};
      return s && (n && (i.target = n), t && (i.download = typeof t == "string" ? t : !0)), i;
    }
  }
}, uo = { key: 1 };
function fo(e, s, t, n, i, o) {
  const r = S("UluIcon");
  return l(), v(z(o.element), N({
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
      t.icon && (t.iconBefore || t.iconOnly) ? (l(), v(r, {
        key: 0,
        definition: t.icon,
        class: "button__icon"
      }, null, 8, ["definition"])) : y("", !0),
      (e.$slots.default || t.text) && !t.iconOnly ? (l(), d("span", uo, [
        m(e.$slots, "default", {}, () => [
          w(p(t.text), 1)
        ])
      ])) : y("", !0),
      t.icon && !t.iconBefore && !t.iconOnly ? (l(), v(r, {
        key: 2,
        definition: t.icon,
        class: "button__icon"
      }, null, 8, ["definition"])) : y("", !0),
      m(e.$slots, "after")
    ]),
    _: 3
  }, 16, ["class", "aria-label"]);
}
const ho = /* @__PURE__ */ _(co, [["render", fo]]), mo = {
  name: "UluAlert",
  components: {
    UluButton: ho,
    UluIcon: L
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
    const { resolvedModifiers: s } = G({
      props: e,
      baseClass: "callout",
      internal: R(() => ({
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
function po(e, s, t, n, i, o) {
  const r = S("UluIcon");
  return l(), d("div", {
    class: h(["callout", n.resolvedModifiers])
  }, [
    f("div", go, [
      k(r, {
        class: h(["type-large margin-right-small", `color-${t.type}`]),
        type: t.type,
        definition: t.icon
      }, null, 8, ["class", "type", "definition"]),
      f("div", _o, [
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
      e.$slots.action ? (l(), d("div", yo, [
        m(e.$slots, "action")
      ])) : y("", !0)
    ])
  ], 2);
}
const Sf = /* @__PURE__ */ _(mo, [["render", po]]), vo = {
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
      return e ? "button" : s ? Xe : t ? "a" : "span";
    }
  }
}, bo = ["aria-hidden"], wo = {
  key: 2,
  class: "hidden-visually"
};
function So(e, s, t, n, i, o) {
  return l(), v(z(o.element), {
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
        }, p(t.text), 9, bo)) : m(e.$slots, "default", { key: 1 }),
        t.alt ? (l(), d("span", wo, p(t.alt), 1)) : y("", !0)
      ], 2)
    ]),
    _: 3
  }, 8, ["class", "to", "href", "onClick"]);
}
const ko = /* @__PURE__ */ _(vo, [["render", So]]), Co = {
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
    (l(!0), d(T, null, C(t.items, (a, u) => (l(), d("li", {
      class: "badge-stack__item",
      key: u
    }, [
      k(r, N({ ref_for: !0 }, a), null, 16)
    ]))), 128))
  ]);
}
const kf = /* @__PURE__ */ _(Co, [["render", Ao]]), $o = {
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
    const { resolvedModifiers: s } = G({ props: e, baseClass: "callout" });
    return { resolvedModifiers: s };
  }
};
function Oo(e, s, t, n, i, o) {
  return l(), d("div", {
    class: h(["callout", [n.resolvedModifiers, { "full-height": t.fullHeight }]])
  }, [
    m(e.$slots, "default")
  ], 2);
}
const Cf = /* @__PURE__ */ _($o, [["render", Oo]]), ft = (e, s) => {
  const t = !(s.to || s.href);
  return t || console.warn("'titleHref' and 'titleTo' can't be used with to or href (nesting links)"), t;
}, xo = {
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
    const { resolvedModifiers: s } = G({ props: e, baseClass: "card" });
    return { resolvedModifiers: s };
  },
  computed: {
    resolvedElement() {
      const { cardElement: e, to: s, href: t } = this;
      return s ? Xe : t ? "a" : e;
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
}, Ro = { class: "card__body" }, Uo = { class: "card__main" }, Io = ["href", "target"], zo = {
  key: 0,
  class: "card__aside"
}, Eo = ["src", "alt"], jo = {
  key: 1,
  class: "card__footer"
};
function Fo(e, s, t, n, i, o) {
  const r = S("router-link");
  return l(), v(z(o.resolvedElement), {
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
    style: U({ cursor: i.cursorStyle }),
    target: t.target,
    to: t.to,
    href: t.href,
    "data-ulu-proxy-click-init": i.proxyClickEnabled
  }, {
    default: b(() => [
      f("div", Ro, [
        f("div", Uo, [
          (l(), v(z(t.titleElement), {
            class: h(["card__title", t.classes.title])
          }, {
            default: b(() => [
              t.titleTo ? (l(), v(r, {
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
              ], 8, Io)) : m(e.$slots, "title", { key: 2 }, () => [
                w(p(t.title), 1)
              ])
            ]),
            _: 3
          }, 8, ["class"])),
          m(e.$slots, "body")
        ]),
        e.$slots.body ? (l(), d("div", zo, [
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
          }, null, 8, Eo)
        ])
      ], 2)) : y("", !0),
      e.$slots.footer ? (l(), d("div", jo, [
        m(e.$slots, "footer")
      ])) : y("", !0)
    ]),
    _: 3
  }, 40, ["onMousedown", "onMouseup", "class", "style", "target", "to", "href", "data-ulu-proxy-click-init"]);
}
const Tf = /* @__PURE__ */ _(xo, [["render", Fo]]), Po = {
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
function Mo(e, s, t, n, i, o) {
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
const Af = /* @__PURE__ */ _(Po, [["render", Mo]]), Bo = {
  name: "UluExternalLink",
  components: {
    UluIcon: L
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
}, Lo = ["href", "target"], Ho = { class: "external-link__text" };
function Do(e, s, t, n, i, o) {
  const r = S("UluIcon");
  return l(), d("a", {
    class: "external-link",
    href: t.href,
    target: t.target
  }, [
    f("span", Ho, [
      m(e.$slots, "default", {}, () => [
        w(p(t.text), 1)
      ])
    ]),
    k(r, {
      class: "external-link__icon margin-left-small-x display-inline",
      type: "externalLink",
      definition: t.icon
    }, null, 8, ["definition"])
  ], 8, Lo);
}
const $f = /* @__PURE__ */ _(Bo, [["render", Do]]), Vo = {
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
function No(e, s, t, n, i, o) {
  return l(), v(z(o.listElement), {
    class: h([
      {
        "list-ordered": t.ordered,
        "list-unordered": t.unordered,
        "list-lines": t.lines,
        "list-compact": t.compact
      },
      t.classes.list
    ]),
    style: U({
      listStyleType: t.listStyleType
    }),
    reversed: t.reversed,
    start: t.start
  }, {
    default: b(() => [
      (l(!0), d(T, null, C(t.items, (r, a) => (l(), d("li", {
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
const Of = /* @__PURE__ */ _(Vo, [["render", No]]), Wo = {}, Xo = { id: "main-content" };
function Yo(e, s) {
  return l(), d("main", Xo, [
    m(e.$slots, "default")
  ]);
}
const xf = /* @__PURE__ */ _(Wo, [["render", Yo]]), Ko = {
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
function Go(e, s, t, n, i, o) {
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
const Rf = /* @__PURE__ */ _(Ko, [["render", Go]]), qo = {
  name: "UluCheckboxMenu",
  props: {
    options: Array
  },
  methods: {
    getId(e) {
      return `checkbox-menu-opt-${e}`;
    }
  }
}, Zo = { class: "site-menu site-form" }, Jo = { class: "site-menu__checkbox" }, Qo = ["id", "onUpdate:modelValue"], ei = ["for"];
function ti(e, s, t, n, i, o) {
  return l(), d("ul", Zo, [
    (l(!0), d(T, null, C(t.options, (r, a) => (l(), d("li", {
      class: "site-menu__item",
      key: a
    }, [
      f("div", Jo, [
        V(f("input", {
          type: "checkbox",
          id: o.getId(a),
          "onUpdate:modelValue": (u) => r.checked = u
        }, null, 8, Qo), [
          [Dt, r.checked]
        ]),
        f("label", {
          for: o.getId(a)
        }, [
          m(e.$slots, "default", {}, () => [
            w(p(r?.title || r?.text), 1)
          ])
        ], 8, ei)
      ])
    ]))), 128))
  ]);
}
const Uf = /* @__PURE__ */ _(qo, [["render", ti]]), si = {
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
}, ni = ["href", "download"], oi = { class: "margin-left-small-x" }, ii = { class: "tag tag--small tag--outline type-small-x" };
function ri(e, s, t, n, i, o) {
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
    f("span", oi, [
      w(p(t.file.name) + " ", 1),
      f("span", ii, p(o.fileSize), 1)
    ])
  ], 8, ni);
}
const If = /* @__PURE__ */ _(si, [["render", ri]]), li = {
  key: 0,
  class: "site-dropzone__errors site-form__description site-form__error"
}, ai = { class: "list-unordered" }, ci = {
  key: 1,
  class: "site-dropzone__display margin-top"
}, zf = {
  __name: "UluFormDropzone",
  emits: ["filesChange"],
  setup(e, { emit: s }) {
    const t = j([]), n = j([]), i = s, { getRootProps: o, getInputProps: r, isDragActive: a } = Ds({
      onDrop: (u, c) => {
        c ? n.value = c.map((g) => g) : n.value = [], u.length && (t.value = u.map((g) => g), i("filesChange", t.value));
      },
      accept: [".png", ".jpg", ".jpeg"]
    });
    return (u, c) => {
      const g = S("FilesDisplay");
      return l(), d("div", {
        class: h(["site-dropzone site-form__item site-form__item--file", { "is-danger": n.value.length }])
      }, [
        f("div", N({
          class: ["site-dropzone__target", {
            "site-dropzone__target--dropping": O(a)
          }]
        }, O(o)()), [
          f("input", M(B(O(r)())), null, 16),
          c[0] || (c[0] = f("div", { class: "site-dropzone__instructions" }, [
            f("strong", { class: "type-normal" }, " Drag 'n' drop files here, or click to select ")
          ], -1))
        ], 16),
        c[3] || (c[3] = f("p", { class: "site-form__description" }, [
          f("em", null, "Only images allowed (.jpg, .png)")
        ], -1)),
        n.value.length ? (l(), d("div", li, [
          f("ul", ai, [
            (l(!0), d(T, null, C(n.value, (A, E) => (l(), d("li", { key: E }, [
              f("strong", null, p(A.file.name), 1),
              c[1] || (c[1] = w(": ")),
              f("span", null, p(A.errors.map((I) => I.message).join()), 1)
            ]))), 128))
          ])
        ])) : y("", !0),
        t.value.length ? (l(), d("div", ci, [
          c[2] || (c[2] = f("strong", null, "Files", -1)),
          k(g, {
            class: "site-dropzone__list",
            files: t.value
          }, null, 8, ["files"])
        ])) : y("", !0)
      ], 2);
    };
  }
};
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
        w(p(t.label), 1)
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
const Ef = /* @__PURE__ */ _(di, [["render", gi]]), _i = {
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
    t.error ? (l(), v(r, {
      key: 0,
      icon: e.$site.getIcon("error")
    }, null, 8, ["icon"])) : y("", !0),
    t.warning ? (l(), v(r, {
      key: 1,
      icon: e.$site.getIcon("warning")
    }, null, 8, ["icon"])) : y("", !0),
    m(e.$slots, "default")
  ], 2);
}
const jf = /* @__PURE__ */ _(_i, [["render", yi]]);
let pi = 0;
const vi = {
  name: "FormSelect",
  props: {
    label: String,
    modelValue: String,
    options: Array,
    labelHidden: Boolean
  },
  data() {
    return {
      id: `select-id-${++pi}`
    };
  }
}, bi = { class: "site-form__item site-form__item--select" }, wi = ["for"], Si = ["id", "value"], ki = ["value"];
function Ci(e, s, t, n, i, o) {
  return l(), d("div", bi, [
    f("label", {
      class: h({ "hidden-visually": t.labelHidden }),
      for: i.id
    }, [
      m(e.$slots, "default", {}, () => [
        w(p(t.label), 1)
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
      }, p(r.text), 9, ki))), 128))
    ], 40, Si)
  ]);
}
const Ff = /* @__PURE__ */ _(vi, [["render", Ci]]);
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
}, $i = { class: "site-form__item site-form__item--text" }, Oi = ["for"], xi = ["value", "id"];
function Ri(e, s, t, n, i, o) {
  return l(), d("div", $i, [
    f("label", {
      class: h({ "hidden-visually": t.labelHidden }),
      for: i.id
    }, [
      m(e.$slots, "default", {}, () => [
        w(p(t.label), 1)
      ])
    ], 10, Oi),
    f("input", {
      type: "text",
      value: t.modelValue,
      onInput: s[0] || (s[0] = (r) => e.$emit("update:modelValue", r.target.value)),
      id: i.id
    }, null, 40, xi)
  ]);
}
const Pf = /* @__PURE__ */ _(Ai, [["render", Ri]]), Ui = {
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
const Mf = /* @__PURE__ */ _(Ui, [["render", Fi]]), Pi = {
  name: "AdaptiveLayout",
  inject: ["uluIsMobile"]
};
function Mi(e, s, t, n, i, o) {
  return !o.uluIsMobile || !e.$slots.mobile ? m(e.$slots, "default", { key: 0 }) : m(e.$slots, "mobile", { key: 1 });
}
const Bf = /* @__PURE__ */ _(Pi, [["render", Mi]]);
function Bi(e) {
  var s;
  return e = e.replace(/^[^-_a-zA-Z]+/, "").replace(/^-(?:[-0-9]+)/, "-"), s = e && e.replace(/[^-_a-zA-Z0-9]+/g, "-"), s.toLowerCase();
}
function Li(e, s = {
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
    r === 0 && o.forEach((a) => a.classList.add(s.rowFirst)), r == n.length - 1 && o.forEach((a) => a.classList.add(s.rowLast)), o.forEach((a, u) => {
      u === 0 && a.classList.add(s.columnFirst), u == o.length - 1 && a.classList.add(s.columnLast);
    });
  });
}
const Hi = {
  name: "UluDataGrid",
  async mounted() {
    const e = () => Li(this.$el);
    e(), this.resizeHandler = Te(e, 200, !1, this), window.addEventListener("resize", this.resizeHandler);
  },
  beforeUnmount() {
    this.resizeHandler && window.removeEventListener("resize", this.resizeHandler);
  }
};
function Di(e, s, t, n, i, o) {
  return l(), d("div", null, [
    m(e.$slots, "default")
  ]);
}
const Lf = /* @__PURE__ */ _(Hi, [["render", Di]]), Vi = {
  name: "UluTitleRail",
  components: {
    UluIcon: L
  },
  props: {
    icon: String,
    iconAlign: {
      type: String,
      default: "baseline"
    },
    iconType: String,
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
    }
  }
}, Ni = { class: "rail rail--title-rail" }, Wi = {
  key: 0,
  class: "rail__item rail__item--pull"
};
function Xi(e, s, t, n, i, o) {
  const r = S("UluIcon");
  return l(), d("div", Ni, [
    f("div", {
      class: h(["rail__item rail__item--title", t.classes.itemTitle])
    }, [
      (l(), v(z(t.titleElement), {
        class: h(["layout-flex type-max-width-small no-margin", t.classes.title]),
        style: U({ alignItems: t.iconAlign })
      }, {
        default: b(() => [
          t.icon || t.iconType ? (l(), v(r, {
            key: 0,
            class: h(t.classes.icon),
            type: t.iconType,
            definition: t.icon
          }, null, 8, ["class", "type", "definition"])) : y("", !0),
          m(e.$slots, "default", {}, () => [
            w(p(t.title), 1)
          ])
        ]),
        _: 3
      }, 8, ["class", "style"]))
    ], 2),
    e.$slots.end ? (l(), d("div", Wi, [
      m(e.$slots, "end")
    ])) : y("", !0)
  ]);
}
const Hf = /* @__PURE__ */ _(Vi, [["render", Xi]]), Yi = {
  name: "UluBreadcrumb",
  components: {
    UluIcon: L
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
function Ki(e, s, t, n, i, o) {
  const r = S("router-link"), a = S("UluIcon");
  return t.items.length ? (l(), d("nav", {
    key: 0,
    class: h(t.classes.nav),
    "aria-label": "Breadcrumb"
  }, [
    f("ul", {
      class: h(t.classes.list)
    }, [
      (l(!0), d(T, null, C(t.items, (u, c) => (l(), d("li", {
        key: c,
        class: h(t.classes.item)
      }, [
        k(r, {
          to: u.to,
          class: h(t.classes.link),
          "aria-current": u.current ? "page" : null
        }, {
          default: b(() => [
            m(e.$slots, "default", { item: u }, () => [
              w(p(u.title), 1)
            ])
          ]),
          _: 2
        }, 1032, ["to", "class", "aria-current"]),
        c < t.items.length - 1 ? m(e.$slots, "separator", { key: 0 }, () => [
          k(a, {
            class: h(t.classes.separator),
            type: "pathSeparator",
            definition: t.separatorIcon
          }, null, 8, ["class", "definition"])
        ]) : y("", !0)
      ], 2))), 128))
    ], 2)
  ], 2)) : y("", !0);
}
const Df = /* @__PURE__ */ _(Yi, [["render", Ki]]), Gi = {
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
function qi(e, s, t, n, i, o) {
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
const Vf = /* @__PURE__ */ _(Gi, [["render", qi]]), Zi = {}, Ji = {
  class: "site-skip-link hidden-visually-focusable",
  href: "#main-content"
};
function Qi(e, s) {
  return l(), d("a", Ji, " Skip to main content ");
}
const Nf = /* @__PURE__ */ _(Zi, [["render", Qi]]), er = {
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
function tr(e, s, t, n, i, o) {
  return t.text != null ? (l(), v(z(t.element), { key: 0 }, {
    default: b(() => [
      w(p(t.text), 1)
    ]),
    _: 1
  })) : y("", !0);
}
const Wf = /* @__PURE__ */ _(er, [["render", tr]]), sr = {}, nr = { style: { display: "none" } };
function or(e, s) {
  return l(), d("span", nr);
}
const Xf = /* @__PURE__ */ _(sr, [["render", or]]), ir = {};
function rr(e, s) {
  const t = S("router-view");
  return l(), v(t);
}
const Yf = /* @__PURE__ */ _(ir, [["render", rr]]);
function fe(e = 0, s = 100) {
  return e = Math.ceil(e), s = Math.floor(s), Math.floor(Math.random() * (s - e) + e);
}
const lr = {
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
}, ar = ["src", "alt"];
function cr(e, s, t, n, i, o) {
  return l(), d("img", {
    src: o.src,
    alt: t.alt
  }, null, 8, ar);
}
const Kf = /* @__PURE__ */ _(lr, [["render", cr]]), ur = {
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
function dr(e, s, t, n, i, o) {
  return l(!0), d(T, null, C(parseInt(t.amount), (r) => (l(), v(z(t.element), { key: r }, {
    default: b(() => s[0] || (s[0] = [
      w(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed semper erat tincidunt tellus vestibulum dictum. Fusce vel augue commodo, egestas diam sed, accumsan leo. Maecenas congue nec nisl et ullamcorper. Maecenas tincidunt, tortor et viverra eleifend, enim leo vestibulum ipsum, quis placerat mi nisi nec ex. Vivamus a justo volutpat, scelerisque elit eget, lacinia ex. Phasellus dapibus sollicitudin tortor, vitae suscipit nunc condimentum ut. Cras suscipit feugiat nibh nec consectetur. Phasellus vitae quam blandit, cursus metus ut, placerat mi. Sed tempor lacus non est interdum imperdiet nec quis metus. Praesent vel eleifend diam. Donec tincidunt eget purus sed posuere. ")
    ])),
    _: 2,
    __: [0]
  }, 1024))), 128);
}
const Gf = /* @__PURE__ */ _(ur, [["render", dr]]), fr = {
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
function hr(e, s, t, n, i, o) {
  return o.title ? (l(), d("p", {
    key: 0,
    tabindex: "-1",
    class: "hidden-visually",
    ref: "el"
  }, p(o.title), 513)) : y("", !0);
}
const qf = /* @__PURE__ */ _(fr, [["render", hr]]), mr = {
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
function gr(e, s, t, n, i, o) {
  return l(), d("span", null, [
    m(e.$slots, "default", { currentValue: i.currentValue }, () => [
      w(p(i.currentValue), 1)
    ])
  ]);
}
const Zf = /* @__PURE__ */ _(mr, [["render", gr]]), _r = {
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
}, yr = { class: "progress-bar__header" }, pr = {
  key: 0,
  class: "progress-bar__icon"
}, vr = { class: "hidden-visually" }, br = { class: "progress-bar__track" }, wr = { class: "progress-bar__values" }, Sr = { class: "progress-bar__value progress-bar__value--amount" }, kr = {
  key: 0,
  class: "progress-bar__value progress-bar__value--deficit color-status is-danger"
}, Cr = { class: "progress-bar__value progress-bar__value--total" };
function Tr(e, s, t, n, i, o) {
  const r = S("StatusIcon");
  return l(), d("div", {
    class: h(["progress-bar", {
      "progress-bar--small": t.small,
      "progress-bar--icon-left": t.iconOnLeft,
      "type-small": t.small
    }])
  }, [
    f("div", yr, [
      f("strong", {
        class: h(["progress-bar__label", {
          "type-normal": t.small,
          "hidden-visually": t.labelHidden
        }])
      }, p(t.label), 3),
      o.status ? (l(), d("div", pr, [
        k(r, {
          type: o.status.type
        }, null, 8, ["type"]),
        f("span", vr, p(o.status.message), 1)
      ])) : y("", !0)
    ]),
    f("div", br, [
      f("div", {
        class: "progress-bar__bar",
        style: U(`width: ${o.percentage}%`)
      }, null, 4),
      t.deficit ? (l(), d("div", {
        key: 0,
        class: "progress-bar__bar--deficit",
        style: U(`width: ${o.defPercentage}%`)
      }, null, 4)) : y("", !0)
    ]),
    f("div", wr, [
      f("div", Sr, [
        s[0] || (s[0] = f("strong", { class: "hidden-visually" }, "Amount:", -1)),
        w(" " + p(t.amount), 1)
      ]),
      t.deficit > 0 ? (l(), d("div", kr, [
        s[1] || (s[1] = f("strong", { class: "hidden-visually" }, "Deficit: ", -1)),
        w(" -" + p(t.deficit), 1)
      ])) : y("", !0),
      f("div", Cr, [
        s[2] || (s[2] = f("strong", { class: "hidden-visually" }, "Total:", -1)),
        w(" " + p(t.total), 1)
      ])
    ])
  ], 2);
}
const Jf = /* @__PURE__ */ _(_r, [["render", Tr]]);
let Ar = 0;
const $r = {
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
      uid: `progress-donut-${++Ar}`
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
}, Or = { class: "progress-donut__chart" }, xr = {
  class: "progress-donut__chart-svg",
  viewBox: "0 0 32 32"
}, Rr = ["r"], Ur = {
  key: 0,
  class: "progress-donut__chart-value"
}, Ir = {
  key: 0,
  class: "progress-donut__value type-small-x"
};
function zr(e, s, t, n, i, o) {
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
    f("div", Or, [
      (l(), d("svg", xr, [
        f("circle", {
          class: "progress-donut__chart-pie",
          ref: "pie",
          r: "16",
          cx: "16",
          cy: "16",
          style: U({ strokeDasharray: o.endDasharray })
        }, null, 4),
        f("circle", {
          class: "progress-donut__chart-mask",
          r: t.small ? 7 : 11,
          cx: "16",
          cy: "16"
        }, null, 8, Rr)
      ])),
      t.small ? y("", !0) : (l(), d("strong", Ur, p(t.percentage) + "% ", 1))
    ]),
    t.small ? (l(), d("strong", Ir, p(t.percentage) + "% ", 1)) : y("", !0)
  ], 2);
}
const Qf = /* @__PURE__ */ _($r, [["render", zr]]), Er = {
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
}, jr = { class: "UluFacets__facet-list" }, Fr = ["id", "onUpdate:modelValue"], Pr = ["for"];
function Mr(e, s, t, n, i, o) {
  return l(), d("ul", jr, [
    (l(!0), d(T, null, C(t.children, (r) => (l(), d("li", {
      class: h(["UluFacets__facet", t.classFacet]),
      key: r.uid
    }, [
      V(f("input", {
        class: "UluFacets__facet-checkbox",
        id: o.facetCheckboxId(r),
        type: "checkbox",
        "onUpdate:modelValue": (a) => r.selected = a
      }, null, 8, Fr), [
        [Dt, r.selected]
      ]),
      f("label", {
        class: "UluFacets__facet-label",
        for: o.facetCheckboxId(r)
      }, p(r.label), 9, Pr)
    ], 2))), 128))
  ]);
}
const Br = /* @__PURE__ */ _(Er, [["render", Mr]]);
let Lr = 0;
const Hr = {
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
      id: `facet-view-keyword-${++Lr}`
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
}, Dr = { class: "UluFacets__keyword-search" }, Vr = ["for"], Nr = ["id", "placeholder"];
function Wr(e, s, t, n, i, o) {
  return l(), d("div", Dr, [
    f("label", {
      class: h(t.classes.searchLabel),
      for: i.id
    }, s[1] || (s[1] = [
      f("strong", null, "Search", -1)
    ]), 10, Vr),
    V(f("input", {
      id: i.id,
      class: h(t.classes.searchInput),
      "onUpdate:modelValue": s[0] || (s[0] = (r) => o.localValue = r),
      type: "text",
      placeholder: t.placeholder
    }, null, 10, Nr), [
      [Is, o.localValue]
    ])
  ]);
}
const Xr = /* @__PURE__ */ _(Hr, [["render", Wr]]);
let ht = 0;
const mt = (e) => {
  const s = (t) => t.title || t.label || "";
  return e.sort((t, n) => s(t).localeCompare(s(n)));
}, Yr = {
  az: { text: "A-Z", sort: mt },
  za: { text: "Z-A", sort: (e) => mt(e).reverse() }
}, Kr = {
  name: "UluFacets",
  components: {
    UluCollapsibleRegion: Kn,
    UluFacetsList: Br,
    UluFacetsSearch: Xr
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
        ...t ? {} : Yr,
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
      const { getItemFacet: e, selectedFacets: s, sortTypes: t, selectedSort: n } = this, i = t[n].sort, o = this.items.filter((a) => s.length ? s.some((u) => {
        let c;
        const g = e(a, u.uid);
        return g && g.length && (c = u.children.some((A) => g.includes(A.uid))), c;
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
      return s?.length ? new Ns(e, t).search(s).map((o) => o.item) : e;
    },
    toggleFilterVisibility() {
      this.filtersHidden = !this.filtersHidden;
    }
  }
}, Gr = { class: "UluFacets" }, qr = ["aria-controls", "aria-expanded"], Zr = ["for"], Jr = ["id"], Qr = ["value"], el = { class: "UluFacets__body" }, tl = ["id"], sl = {
  key: 1,
  class: "UluFacets__empty"
};
function nl(e, s, t, n, i, o) {
  const r = S("UluFacetsSearch"), a = S("UluFacetsList"), u = S("UluCollapsibleRegion");
  return l(), d("div", Gr, [
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
          onClick: s[0] || (s[0] = (...c) => o.toggleFilterVisibility && o.toggleFilterVisibility(...c)),
          class: h(t.classes.buttonFilterToggle),
          "aria-controls": i.filterId,
          "aria-expanded": i.filtersHidden ? "false" : "true",
          type: "button"
        }, [
          m(e.$slots, "buttonFilterToggle", { hidden: i.filtersHidden }, () => [
            w(p(i.filtersHidden ? "Show" : "Hide") + " Filters ", 1)
          ])
        ], 10, qr),
        o.selectedFacets.length ? (l(), d("button", {
          key: 0,
          onClick: s[1] || (s[1] = (...c) => o.clearFilters && o.clearFilters(...c)),
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
          }, "Sort:", 10, Zr),
          V(f("select", {
            "onUpdate:modelValue": s[2] || (s[2] = (c) => i.selectedSort = c),
            id: i.sortId,
            class: h(t.classes.sortFormSelect)
          }, [
            (l(!0), d(T, null, C(i.sortTypes, (c, g) => (l(), d("option", {
              value: g,
              key: g
            }, p(c.text), 9, Qr))), 128))
          ], 10, Jr), [
            [zs, i.selectedSort]
          ])
        ], 2)
      ], 2)
    ], 2),
    f("div", el, [
      k(it, {
        name: "UluFacetsFade",
        mode: "out-in"
      }, {
        default: b(() => [
          V(f("div", {
            class: h(["UluFacets__filters", { "UluFacets__filters--hidden": i.filtersHidden }]),
            id: i.filterId
          }, [
            k(r, {
              classes: t.classes,
              initialValue: t.initialSearchValue,
              placeholder: t.searchPlaceholder,
              modelValue: i.searchValue,
              "onUpdate:modelValue": s[3] || (s[3] = (c) => i.searchValue = c)
            }, null, 8, ["classes", "initialValue", "placeholder", "modelValue"]),
            (l(!0), d(T, null, C(i.facets, (c) => (l(), v(u, {
              class: h(["UluFacets__group", t.classes.group]),
              classToggle: ["UluFacets__group-toggle", t.classes.groupToggle],
              classContent: ["UluFacets__group-content", t.classes.groupContent],
              key: c.uid,
              group: c,
              startOpen: c.open,
              clickOutsideCloses: !1,
              closeOnEscape: !1,
              transitionHeight: !0
            }, {
              toggle: b(({ isOpen: g }) => [
                m(e.$slots, "groupToggle", {
                  group: c,
                  isOpen: g
                }, () => [
                  w(p(c.name), 1)
                ])
              ]),
              default: b(() => [
                k(a, {
                  children: c.children.slice(0, t.maxVisible),
                  groupUid: c.uid,
                  classFacet: t.classes.facet
                }, null, 8, ["children", "groupUid", "classFacet"]),
                c.children.length > t.maxVisible ? (l(), v(u, {
                  key: 0,
                  class: h(["UluFacets__more-facets", t.classes.moreFacets]),
                  clickOutsideCloses: !1,
                  closeOnEscape: !1,
                  transitionHeight: !0
                }, {
                  toggle: b(({ isOpen: g }) => [
                    w(p(g ? "- Less" : "+ More"), 1)
                  ]),
                  default: b(() => [
                    k(a, {
                      children: c.children.slice(t.maxVisible),
                      groupUid: c.uid,
                      classFacet: t.classes.facet
                    }, null, 8, ["children", "groupUid", "classFacet"])
                  ]),
                  _: 2
                }, 1032, ["class"])) : y("", !0)
              ]),
              _: 2
            }, 1032, ["class", "classToggle", "classContent", "group", "startOpen"]))), 128))
          ], 10, tl), [
            [We, !i.filtersHidden]
          ])
        ]),
        _: 3
      }),
      k(it, {
        name: "UluFacetsFade",
        mode: "out-in"
      }, {
        default: b(() => [
          i.resultsVisible && o.filteredItems.length ? (l(), d("ul", {
            class: h(["UluFacets__results", t.classes.results]),
            key: i.filterIteration
          }, [
            (l(!0), d(T, null, C(o.filteredItems, (c, g) => (l(), d("li", {
              class: h(["UluFacets__results-item", t.classes.resultsItem]),
              key: g
            }, [
              m(e.$slots, "item", {
                item: c,
                index: g
              })
            ], 2))), 128))
          ], 2)) : (l(), d("div", sl, [
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
const eh = /* @__PURE__ */ _(Kr, [["render", nl]]), es = Symbol(), ts = Symbol(), Ae = Symbol(), ol = {
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
      [Ae]: R(() => this.sections),
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
        r.forEach(({ target: a, isIntersecting: u }) => {
          const c = this.getSectionIndex(a), g = a.offsetTop, A = s[c], E = c === 0 && i > g, I = c === s.length - 1 && i < g;
          A && this.$nextTick(() => {
            u ? (t(A), A.active = !0) : (E && !n || I && A.active) && t(), this.$emit("sectionChange", {
              section: A,
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
}, il = { class: "scroll-anchors" };
function rl(e, s, t, n, i, o) {
  return l(), d("div", il, [
    m(e.$slots, "default")
  ]);
}
const th = /* @__PURE__ */ _(ol, [["render", rl]]), ll = {
  name: "ScrollAnchorsNav",
  inject: {
    sections: { from: Ae }
  },
  props: {
    element: {
      type: String,
      default: "nav"
    }
  }
}, al = ["href"];
function cl(e, s, t, n, i, o) {
  return o.sections.length ? (l(), v(z(t.element), {
    key: 0,
    class: "scroll-anchors__nav"
  }, {
    default: b(() => [
      f("ul", null, [
        (l(!0), d(T, null, C(o.sections, (r, a) => (l(), d("li", {
          key: a,
          class: h({ "is-active": r.active })
        }, [
          f("a", {
            class: h({ "is-active": r.active }),
            href: `#${r.titleId}`
          }, p(r.title), 11, al)
        ], 2))), 128))
      ])
    ]),
    _: 1
  })) : y("", !0);
}
const sh = /* @__PURE__ */ _(ll, [["render", cl]]);
function ss(e) {
  requestAnimationFrame(() => {
    const s = new MessageChannel();
    s.port1.onmessage = e, s.port2.postMessage(void 0);
  });
}
const ul = {
  name: "ScrollAnchorsNavAnimated",
  inject: {
    sections: { from: Ae }
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
}, dl = { class: "scroll-anchors__rail" }, fl = ["href"];
function hl(e, s, t, n, i, o) {
  return o.sections.length ? (l(), v(z(t.element), {
    key: 0,
    class: "scroll-anchors__nav scroll-anchors__nav--animated"
  }, {
    default: b(() => [
      f("ul", dl, [
        (l(!0), d(T, null, C(o.sections, (r, a) => (l(), d("li", {
          key: a,
          class: h({ "is-active": r.active })
        }, [
          f("a", {
            class: h({ "is-active": r.active }),
            ref_for: !0,
            ref: (u) => o.addLinkRef(a, u),
            href: `#${r.titleId}`
          }, p(r.title), 11, fl)
        ], 2))), 128))
      ]),
      f("div", {
        class: h(["scroll-anchors__indicator", {
          "scroll-anchors__indicator--can-transition": i.indicatorAnimReady
        }]),
        ref: "indicator",
        style: U({
          opacity: o.indicatorStyles ? "1" : "0",
          transform: `translateY(${o.indicatorStyles.y}px)`,
          height: `${o.indicatorStyles.height}px`
        })
      }, null, 6)
    ]),
    _: 1
  })) : y("", !0);
}
const nh = /* @__PURE__ */ _(ul, [["render", hl]]), ml = {
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
    sections: { from: Ae, default: () => R(() => []) }
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
function gl(e, s, t, n, i, o) {
  return l(), d("div", {
    class: h([t.wrapperClass, { [t.activeClass]: t.activeClass && o.section?.active }]),
    ref: "element"
  }, [
    (l(), v(z(t.titleElement), {
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
const oh = /* @__PURE__ */ _(ml, [["render", gl]]), _l = {
  name: "ShowSkeleton",
  props: {
    when: Boolean
  }
};
function yl(e, s, t, n, i, o) {
  const r = S("SkeletonTextInline");
  return t.when ? (l(), v(r, {
    key: 1,
    class: "skeleton"
  })) : m(e.$slots, "default", { key: 0 });
}
const ih = /* @__PURE__ */ _(_l, [["render", yl]]);
function pl(e, s) {
  return [...Array(e)].map((t, n) => s(n));
}
function rh(e, s) {
  var t = e.indexOf(s);
  t > -1 && e.splice(t, 1);
}
const vl = {
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
      return pl(this.lines, () => {
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
}, bl = { class: "skeleton" };
function wl(e, s, t, n, i, o) {
  return l(), d("div", bl, [
    (l(!0), d(T, null, C(o.linesWithSegments, (r, a) => (l(), d("div", { key: a }, [
      (l(!0), d(T, null, C(r, (u) => (l(), d("span", {
        key: u,
        class: h(["skeleton__text skeleton__text--inline", { skeleton__alt: u.alt }]),
        style: U({ width: `${u.width}%` })
      }, null, 6))), 128))
    ]))), 128))
  ]);
}
const lh = /* @__PURE__ */ _(vl, [["render", wl]]), Sl = {
  name: "SkeletonMedia"
}, kl = { class: "skeleton__block skeleton__block--media layout-flex-center-all" };
function Cl(e, s, t, n, i, o) {
  const r = S("FaIcon");
  return l(), d("div", kl, [
    k(r, {
      style: { "font-size": "2rem" },
      icon: "image"
    })
  ]);
}
const ah = /* @__PURE__ */ _(Sl, [["render", Cl]]), Tl = {
  name: "SkeletonTextInline"
}, Al = { class: "skeleton__text skeleton__text--inline" };
function $l(e, s, t, n, i, o) {
  return l(), d("span", Al);
}
const ch = /* @__PURE__ */ _(Tl, [["render", $l]]), Ol = {
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
}, xl = { class: "slideshow" }, Rl = {
  class: "slideshow__control-context",
  ref: "context"
}, Ul = {
  class: "slideshow__track-crop",
  ref: "crop"
}, Il = {
  class: "slideshow__track",
  ref: "track"
}, zl = ["tabindex"], El = { class: "slideshow__controls" }, jl = { class: "slideshow__controls-item slideshow__controls-item--previous" }, Fl = ["disabled"], Pl = { class: "slideshow__controls-item slideshow__controls-item--next" }, Ml = ["disabled"], Bl = {
  key: 0,
  class: "slideshow__nav",
  ref: "nav"
}, Ll = ["onClick"], Hl = { class: "hidden-visually" };
function Dl(e, s, t, n, i, o) {
  const r = S("FaIcon");
  return l(), d("div", xl, [
    f("div", Rl, [
      f("div", Ul, [
        f("ul", Il, [
          (l(!0), d(T, null, C(i.slides, (a, u) => (l(), d("li", {
            class: h(["slideshow__slide", { "is-active": a.active }]),
            key: u,
            tabindex: t.slideFocusable ? "0" : "-1",
            ref_for: !0,
            ref: (c) => {
              a.element = c;
            }
          }, [
            m(e.$slots, "slide", {
              item: a.item,
              index: u
            })
          ], 10, zl))), 128))
        ], 512)
      ], 512),
      f("ul", El, [
        f("li", jl, [
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
          ], 8, Fl)
        ]),
        f("li", Pl, [
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
          ], 8, Ml)
        ])
      ])
    ], 512),
    t.noNav ? y("", !0) : (l(), d("ul", Bl, [
      (l(!0), d(T, null, C(i.slides, (a, u) => (l(), d("li", {
        class: h(["slideshow__nav-item", { "is-active": a.active }]),
        ref_for: !0,
        ref: (c) => {
          a.navElement = c;
        },
        key: u
      }, [
        f("button", {
          class: h(["slideshow__nav-button", { "is-active": a.active }]),
          onClick: (c) => o.to(u)
        }, [
          m(e.$slots, "nav", {
            item: a.item,
            index: u,
            active: a.active
          }, () => [
            f("span", Hl, "Item " + p(u + 1), 1)
          ])
        ], 10, Ll)
      ], 2))), 128))
    ], 512))
  ]);
}
const Vl = /* @__PURE__ */ _(Ol, [["render", Dl]]), Nl = {
  name: "ImageSlideShow",
  components: {
    UluSlideShow: Vl
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
      const { offsetWidth: i, scrollLeft: o } = s, { offsetLeft: r, offsetWidth: a } = n, u = o + i, c = r + a;
      let g = null;
      console.log("left/right", o, u), t && n && (c > u ? g = o + (c - u) : r < o && (g = r), g !== null && s.scrollTo({ left: g, top: 0, behavior: "smooth" }));
    }
  }
}, Wl = ["src", "alt"], Xl = { class: "slideshow__image-actions" }, Yl = ["src", "alt"];
function Kl(e, s, t, n, i, o) {
  const r = S("AppButton"), a = S("UluSlideShow");
  return l(), v(a, {
    class: "slideshow--images",
    items: t.images,
    onSlideChange: o.slideChange
  }, {
    slide: b(({ item: u }) => [
      f("img", {
        src: u.src,
        alt: u.alt
      }, null, 8, Wl),
      f("div", Xl, [
        t.selectButton ? (l(), v(r, {
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
        })) : y("", !0)
      ])
    ]),
    nav: b(({ index: u }) => [
      f("img", {
        src: t.images[u].src,
        alt: `View image ${u}`
      }, null, 8, Yl)
    ]),
    _: 1
  }, 8, ["items", "onSlideChange"]);
}
const uh = /* @__PURE__ */ _(Nl, [["render", Kl]]), Gl = {
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
function ql(e, s, t, n, i, o) {
  return l(), d("li", {
    class: h(["slideshow__slide", { "is-active": t.active }])
  }, [
    m(e.$slots, "default")
  ], 2);
}
const dh = /* @__PURE__ */ _(Gl, [["render", ql]]), Zl = {
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
}, Jl = ["id"], Ql = ["innerHTML"];
function ea(e, s, t, n, i, o) {
  return l(!0), d(T, null, C(t.rows, (r, a) => (l(), d("tr", {
    key: `br-${a}`,
    id: t.optionalAttr(t.isActual && r.id),
    class: h(t.resolveClasses(t.classes.row, { row: r.data, rowIndex: a, isActual: t.isActual, foot: t.foot })),
    style: U({
      height: r.height
    })
  }, [
    (l(!0), d(T, null, C(t.rowColumns, (u, c) => (l(), v(z(u.rowHeader ? "th" : "td"), {
      id: t.optionalAttr(t.isActual && u.rowHeader && u.getRowHeaderId(a)),
      scope: t.optionalAttr(t.isActual && u.rowHeader && "row"),
      key: `bc-${c}`,
      headers: t.optionalAttr(t.isActual && t.getCellHeaders(u, a)),
      class: h(t.resolveClasses(u.class, { column: u, index: c, isActual: t.isActual, row: r, rowIndex: a, foot: t.foot })),
      style: U({
        width: t.columnWidth
      })
    }, {
      default: b(() => [
        e.$slots[u.slot] ? m(e.$slots, u.slot, {
          key: 0,
          row: r.data,
          column: u,
          rowIndex: a,
          index: c,
          foot: t.foot,
          isActual: t.isActual
        }) : u.html ? (l(), d("div", {
          key: 1,
          innerHTML: t.value({ row: r, column: u, rowIndex: a, isActual: t.isActual, foot: t.foot })
        }, null, 8, Ql)) : (l(), d(T, { key: 2 }, [
          w(p(t.value({ row: r, column: u, rowIndex: a, isActual: t.isActual, foot: t.foot })), 1)
        ], 64))
      ]),
      _: 2
    }, 1032, ["id", "scope", "headers", "class", "style"]))), 128))
  ], 14, Jl))), 128);
}
const ta = /* @__PURE__ */ _(Zl, [["render", ea]]), sa = {
  name: "UluTableStickyTable",
  components: {
    UluTableStickyRows: ta
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
}, na = ["aria-hidden"], oa = {
  key: 0,
  class: "table-sticky__caption"
}, ia = ["id"], ra = ["id", "rowspan", "colspan", "data-child-columns", "aria-sort", "scope", "headers"], la = ["innerHTML"], aa = {
  class: "table-sticky__sort-icon",
  "aria-hidden": "true"
}, ca = { class: "table-sticky__sort-icon-inner" }, ua = ["innerHTML"], da = { key: 1 }, fa = { key: 2 };
function ha(e, s, t, n, i, o) {
  const r = S("UluTableStickyRows");
  return l(), d("table", {
    class: h(t.resolveClasses(t.classes.table, { isActual: t.isActual })),
    "aria-hidden": t.isActual ? "false" : "true"
  }, [
    t.caption ? (l(), d("caption", oa, p(t.caption), 1)) : y("", !0),
    f("thead", null, [
      (l(!0), d(T, null, C(t.headerRows, (a, u) => (l(), d("tr", {
        key: `hr-${u}`,
        id: o.optionalAttr(t.isActual && a.id),
        class: h(t.resolveClasses(t.classes.rowHeader, { row: a, rowIndex: u, isActual: t.isActual })),
        style: U({
          height: a.height
        })
      }, [
        (l(!0), d(T, null, C(a.columns, (c, g) => (l(), d("th", {
          key: `hc-${g}`,
          id: o.optionalAttr(t.isActual && c.id),
          rowspan: c.rowspan,
          colspan: c.colspan,
          "data-child-columns": c.columns && c.columns.length,
          class: h([
            {
              "sort-active": c.sortApplied,
              "sort-ascending": c.sortApplied && c.sortAscending,
              "sort-descending": c.sortApplied && !c.sortAscending
            },
            t.resolveClasses(c.classHeader, { column: c, index: g, isActual: t.isActual })
          ]),
          style: U({
            width: c.width
          }),
          "aria-sort": c.sort ? c.sortAscending ? "ascending" : "descending" : null,
          scope: o.optionalAttr(t.isActual && (c.colspan > 1 ? "colgroup" : "col")),
          headers: o.optionalAttr(t.isActual && o.getHeaderHeaders(c, u)),
          ref_for: !0,
          ref: (A) => o.addHeaderRef(c, A)
        }, [
          c.sortable ? (l(), v(z(t.isActual ? "button" : "div"), {
            key: 0,
            class: h(["table-sticky__sort-button", {
              "table-sticky__sort-button--focused": c.sortFocused
            }]),
            onClick: (A) => e.$emit("columnSorted", c),
            onFocus: (A) => o.handleSortFocus(c, !0),
            onBlur: (A) => o.handleSortFocus(c, !1),
            "aria-pressed": c.sortApplied ? "true" : "false"
          }, {
            default: b(() => [
              e.$slots[c.slotHeader] ? m(e.$slots, c.slotHeader, {
                key: 0,
                isActual: t.isActual,
                column: c,
                index: g
              }) : c.htmlTitle ? (l(), d("div", {
                key: 1,
                innerHTML: t.getColumnTitle({ column: c, index: g, isActual: t.isActual })
              }, null, 8, la)) : (l(), d(T, { key: 2 }, [
                w(p(t.getColumnTitle({ column: c, index: g, isActual: t.isActual })), 1)
              ], 64)),
              f("span", aa, [
                f("span", ca, [
                  m(e.$slots, "sortIcon", {}, () => [
                    s[0] || (s[0] = w("▼"))
                  ])
                ])
              ])
            ]),
            _: 2
          }, 1064, ["class", "onClick", "onFocus", "onBlur", "aria-pressed"])) : (l(), d(T, { key: 1 }, [
            e.$slots[c.slotHeader] ? m(e.$slots, c.slotHeader, {
              key: 0,
              isActual: t.isActual,
              column: c,
              index: g
            }) : c.htmlTitle ? (l(), d("div", {
              key: 1,
              innerHTML: t.getColumnTitle({ column: c, index: g, isActual: t.isActual })
            }, null, 8, ua)) : (l(), d(T, { key: 2 }, [
              w(p(t.getColumnTitle({ column: c, index: g, isActual: t.isActual })), 1)
            ], 64))
          ], 64))
        ], 14, ra))), 128))
      ], 14, ia))), 128))
    ]),
    t.rows ? (l(), d("tbody", da, [
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
      }, te({ _: 2 }, [
        C(e.$slots, (a, u) => ({
          name: u,
          fn: b((c) => [
            m(e.$slots, u, M(B(c)))
          ])
        }))
      ]), 1032, ["rows", "rowColumns", "optionalAttr", "resolveClasses", "getCellHeaders", "isActual", "columnWidth", "classes", "value"])
    ])) : y("", !0),
    t.footerRows ? (l(), d("tfoot", fa, [
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
      }, te({ _: 2 }, [
        C(e.$slots, (a, u) => ({
          name: u,
          fn: b((c) => [
            m(e.$slots, u, M(B(c)))
          ])
        }))
      ]), 1032, ["rows", "rowColumns", "optionalAttr", "resolveClasses", "getCellHeaders", "isActual", "columnWidth", "classes", "value"])
    ])) : y("", !0)
  ], 10, na);
}
const ma = /* @__PURE__ */ _(sa, [["render", ha]]);
function ga() {
  this.__data__ = [], this.size = 0;
}
function ns(e, s) {
  return e === s || e !== e && s !== s;
}
function $e(e, s) {
  for (var t = e.length; t--; )
    if (ns(e[t][0], s))
      return t;
  return -1;
}
var _a = Array.prototype, ya = _a.splice;
function pa(e) {
  var s = this.__data__, t = $e(s, e);
  if (t < 0)
    return !1;
  var n = s.length - 1;
  return t == n ? s.pop() : ya.call(s, t, 1), --this.size, !0;
}
function va(e) {
  var s = this.__data__, t = $e(s, e);
  return t < 0 ? void 0 : s[t][1];
}
function ba(e) {
  return $e(this.__data__, e) > -1;
}
function wa(e, s) {
  var t = this.__data__, n = $e(t, e);
  return n < 0 ? (++this.size, t.push([e, s])) : t[n][1] = s, this;
}
function W(e) {
  var s = -1, t = e == null ? 0 : e.length;
  for (this.clear(); ++s < t; ) {
    var n = e[s];
    this.set(n[0], n[1]);
  }
}
W.prototype.clear = ga;
W.prototype.delete = pa;
W.prototype.get = va;
W.prototype.has = ba;
W.prototype.set = wa;
function Sa() {
  this.__data__ = new W(), this.size = 0;
}
function ka(e) {
  var s = this.__data__, t = s.delete(e);
  return this.size = s.size, t;
}
function Ca(e) {
  return this.__data__.get(e);
}
function Ta(e) {
  return this.__data__.has(e);
}
var os = typeof global == "object" && global && global.Object === Object && global, Aa = typeof self == "object" && self && self.Object === Object && self, H = os || Aa || Function("return this")(), oe = H.Symbol, is = Object.prototype, $a = is.hasOwnProperty, Oa = is.toString, ae = oe ? oe.toStringTag : void 0;
function xa(e) {
  var s = $a.call(e, ae), t = e[ae];
  try {
    e[ae] = void 0;
    var n = !0;
  } catch {
  }
  var i = Oa.call(e);
  return n && (s ? e[ae] = t : delete e[ae]), i;
}
var Ra = Object.prototype, Ua = Ra.toString;
function Ia(e) {
  return Ua.call(e);
}
var za = "[object Null]", Ea = "[object Undefined]", gt = oe ? oe.toStringTag : void 0;
function _e(e) {
  return e == null ? e === void 0 ? Ea : za : gt && gt in Object(e) ? xa(e) : Ia(e);
}
function Oe(e) {
  var s = typeof e;
  return e != null && (s == "object" || s == "function");
}
var ja = "[object AsyncFunction]", Fa = "[object Function]", Pa = "[object GeneratorFunction]", Ma = "[object Proxy]";
function rs(e) {
  if (!Oe(e))
    return !1;
  var s = _e(e);
  return s == Fa || s == Pa || s == ja || s == Ma;
}
var Ee = H["__core-js_shared__"], _t = function() {
  var e = /[^.]+$/.exec(Ee && Ee.keys && Ee.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function Ba(e) {
  return !!_t && _t in e;
}
var La = Function.prototype, Ha = La.toString;
function q(e) {
  if (e != null) {
    try {
      return Ha.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var Da = /[\\^$.*+?()[\]{}|]/g, Va = /^\[object .+?Constructor\]$/, Na = Function.prototype, Wa = Object.prototype, Xa = Na.toString, Ya = Wa.hasOwnProperty, Ka = RegExp(
  "^" + Xa.call(Ya).replace(Da, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Ga(e) {
  if (!Oe(e) || Ba(e))
    return !1;
  var s = rs(e) ? Ka : Va;
  return s.test(q(e));
}
function qa(e, s) {
  return e?.[s];
}
function Z(e, s) {
  var t = qa(e, s);
  return Ga(t) ? t : void 0;
}
var me = Z(H, "Map"), ge = Z(Object, "create");
function Za() {
  this.__data__ = ge ? ge(null) : {}, this.size = 0;
}
function Ja(e) {
  var s = this.has(e) && delete this.__data__[e];
  return this.size -= s ? 1 : 0, s;
}
var Qa = "__lodash_hash_undefined__", ec = Object.prototype, tc = ec.hasOwnProperty;
function sc(e) {
  var s = this.__data__;
  if (ge) {
    var t = s[e];
    return t === Qa ? void 0 : t;
  }
  return tc.call(s, e) ? s[e] : void 0;
}
var nc = Object.prototype, oc = nc.hasOwnProperty;
function ic(e) {
  var s = this.__data__;
  return ge ? s[e] !== void 0 : oc.call(s, e);
}
var rc = "__lodash_hash_undefined__";
function lc(e, s) {
  var t = this.__data__;
  return this.size += this.has(e) ? 0 : 1, t[e] = ge && s === void 0 ? rc : s, this;
}
function K(e) {
  var s = -1, t = e == null ? 0 : e.length;
  for (this.clear(); ++s < t; ) {
    var n = e[s];
    this.set(n[0], n[1]);
  }
}
K.prototype.clear = Za;
K.prototype.delete = Ja;
K.prototype.get = sc;
K.prototype.has = ic;
K.prototype.set = lc;
function ac() {
  this.size = 0, this.__data__ = {
    hash: new K(),
    map: new (me || W)(),
    string: new K()
  };
}
function cc(e) {
  var s = typeof e;
  return s == "string" || s == "number" || s == "symbol" || s == "boolean" ? e !== "__proto__" : e === null;
}
function xe(e, s) {
  var t = e.__data__;
  return cc(s) ? t[typeof s == "string" ? "string" : "hash"] : t.map;
}
function uc(e) {
  var s = xe(this, e).delete(e);
  return this.size -= s ? 1 : 0, s;
}
function dc(e) {
  return xe(this, e).get(e);
}
function fc(e) {
  return xe(this, e).has(e);
}
function hc(e, s) {
  var t = xe(this, e), n = t.size;
  return t.set(e, s), this.size += t.size == n ? 0 : 1, this;
}
function re(e) {
  var s = -1, t = e == null ? 0 : e.length;
  for (this.clear(); ++s < t; ) {
    var n = e[s];
    this.set(n[0], n[1]);
  }
}
re.prototype.clear = ac;
re.prototype.delete = uc;
re.prototype.get = dc;
re.prototype.has = fc;
re.prototype.set = hc;
var mc = 200;
function gc(e, s) {
  var t = this.__data__;
  if (t instanceof W) {
    var n = t.__data__;
    if (!me || n.length < mc - 1)
      return n.push([e, s]), this.size = ++t.size, this;
    t = this.__data__ = new re(n);
  }
  return t.set(e, s), this.size = t.size, this;
}
function le(e) {
  var s = this.__data__ = new W(e);
  this.size = s.size;
}
le.prototype.clear = Sa;
le.prototype.delete = ka;
le.prototype.get = Ca;
le.prototype.has = Ta;
le.prototype.set = gc;
function _c(e, s) {
  for (var t = -1, n = e == null ? 0 : e.length; ++t < n && s(e[t], t, e) !== !1; )
    ;
  return e;
}
var yt = function() {
  try {
    var e = Z(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}();
function yc(e, s, t) {
  s == "__proto__" && yt ? yt(e, s, {
    configurable: !0,
    enumerable: !0,
    value: t,
    writable: !0
  }) : e[s] = t;
}
var pc = Object.prototype, vc = pc.hasOwnProperty;
function bc(e, s, t) {
  var n = e[s];
  (!(vc.call(e, s) && ns(n, t)) || t === void 0 && !(s in e)) && yc(e, s, t);
}
function wc(e, s) {
  for (var t = -1, n = Array(e); ++t < e; )
    n[t] = s(t);
  return n;
}
function ye(e) {
  return e != null && typeof e == "object";
}
var Sc = "[object Arguments]";
function pt(e) {
  return ye(e) && _e(e) == Sc;
}
var ls = Object.prototype, kc = ls.hasOwnProperty, Cc = ls.propertyIsEnumerable, Tc = pt(/* @__PURE__ */ function() {
  return arguments;
}()) ? pt : function(e) {
  return ye(e) && kc.call(e, "callee") && !Cc.call(e, "callee");
}, Qe = Array.isArray;
function Ac() {
  return !1;
}
var as = typeof exports == "object" && exports && !exports.nodeType && exports, vt = as && typeof module == "object" && module && !module.nodeType && module, $c = vt && vt.exports === as, bt = $c ? H.Buffer : void 0, Oc = bt ? bt.isBuffer : void 0, cs = Oc || Ac, xc = 9007199254740991, Rc = /^(?:0|[1-9]\d*)$/;
function Uc(e, s) {
  var t = typeof e;
  return s = s ?? xc, !!s && (t == "number" || t != "symbol" && Rc.test(e)) && e > -1 && e % 1 == 0 && e < s;
}
var Ic = 9007199254740991;
function us(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Ic;
}
var zc = "[object Arguments]", Ec = "[object Array]", jc = "[object Boolean]", Fc = "[object Date]", Pc = "[object Error]", Mc = "[object Function]", Bc = "[object Map]", Lc = "[object Number]", Hc = "[object Object]", Dc = "[object RegExp]", Vc = "[object Set]", Nc = "[object String]", Wc = "[object WeakMap]", Xc = "[object ArrayBuffer]", Yc = "[object DataView]", Kc = "[object Float32Array]", Gc = "[object Float64Array]", qc = "[object Int8Array]", Zc = "[object Int16Array]", Jc = "[object Int32Array]", Qc = "[object Uint8Array]", eu = "[object Uint8ClampedArray]", tu = "[object Uint16Array]", su = "[object Uint32Array]", x = {};
x[Kc] = x[Gc] = x[qc] = x[Zc] = x[Jc] = x[Qc] = x[eu] = x[tu] = x[su] = !0;
x[zc] = x[Ec] = x[Xc] = x[jc] = x[Yc] = x[Fc] = x[Pc] = x[Mc] = x[Bc] = x[Lc] = x[Hc] = x[Dc] = x[Vc] = x[Nc] = x[Wc] = !1;
function nu(e) {
  return ye(e) && us(e.length) && !!x[_e(e)];
}
function et(e) {
  return function(s) {
    return e(s);
  };
}
var ds = typeof exports == "object" && exports && !exports.nodeType && exports, he = ds && typeof module == "object" && module && !module.nodeType && module, ou = he && he.exports === ds, je = ou && os.process, ie = function() {
  try {
    var e = he && he.require && he.require("util").types;
    return e || je && je.binding && je.binding("util");
  } catch {
  }
}(), wt = ie && ie.isTypedArray, iu = wt ? et(wt) : nu, ru = Object.prototype, lu = ru.hasOwnProperty;
function au(e, s) {
  var t = Qe(e), n = !t && Tc(e), i = !t && !n && cs(e), o = !t && !n && !i && iu(e), r = t || n || i || o, a = r ? wc(e.length, String) : [], u = a.length;
  for (var c in e)
    lu.call(e, c) && !(r && // Safari 9 has enumerable `arguments.length` in strict mode.
    (c == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    i && (c == "offset" || c == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    o && (c == "buffer" || c == "byteLength" || c == "byteOffset") || // Skip index properties.
    Uc(c, u))) && a.push(c);
  return a;
}
var cu = Object.prototype;
function fs(e) {
  var s = e && e.constructor, t = typeof s == "function" && s.prototype || cu;
  return e === t;
}
function hs(e, s) {
  return function(t) {
    return e(s(t));
  };
}
var uu = hs(Object.keys, Object), du = Object.prototype, fu = du.hasOwnProperty;
function hu(e) {
  if (!fs(e))
    return uu(e);
  var s = [];
  for (var t in Object(e))
    fu.call(e, t) && t != "constructor" && s.push(t);
  return s;
}
function mu(e) {
  return e != null && us(e.length) && !rs(e);
}
function gu(e) {
  return mu(e) ? au(e) : hu(e);
}
var ms = typeof exports == "object" && exports && !exports.nodeType && exports, St = ms && typeof module == "object" && module && !module.nodeType && module, _u = St && St.exports === ms, kt = _u ? H.Buffer : void 0;
kt && kt.allocUnsafe;
function yu(e, s) {
  return e.slice();
}
function pu(e, s) {
  for (var t = -1, n = e == null ? 0 : e.length, i = 0, o = []; ++t < n; ) {
    var r = e[t];
    s(r, t, e) && (o[i++] = r);
  }
  return o;
}
function vu() {
  return [];
}
var bu = Object.prototype, wu = bu.propertyIsEnumerable, Ct = Object.getOwnPropertySymbols, Su = Ct ? function(e) {
  return e == null ? [] : (e = Object(e), pu(Ct(e), function(s) {
    return wu.call(e, s);
  }));
} : vu;
function ku(e, s) {
  for (var t = -1, n = s.length, i = e.length; ++t < n; )
    e[i + t] = s[t];
  return e;
}
var Cu = hs(Object.getPrototypeOf, Object);
function Tu(e, s, t) {
  var n = s(e);
  return Qe(e) ? n : ku(n, t(e));
}
function Au(e) {
  return Tu(e, gu, Su);
}
var Le = Z(H, "DataView"), He = Z(H, "Promise"), De = Z(H, "Set"), Ve = Z(H, "WeakMap"), Tt = "[object Map]", $u = "[object Object]", At = "[object Promise]", $t = "[object Set]", Ot = "[object WeakMap]", xt = "[object DataView]", Ou = q(Le), xu = q(me), Ru = q(He), Uu = q(De), Iu = q(Ve), D = _e;
(Le && D(new Le(new ArrayBuffer(1))) != xt || me && D(new me()) != Tt || He && D(He.resolve()) != At || De && D(new De()) != $t || Ve && D(new Ve()) != Ot) && (D = function(e) {
  var s = _e(e), t = s == $u ? e.constructor : void 0, n = t ? q(t) : "";
  if (n)
    switch (n) {
      case Ou:
        return xt;
      case xu:
        return Tt;
      case Ru:
        return At;
      case Uu:
        return $t;
      case Iu:
        return Ot;
    }
  return s;
});
var zu = Object.prototype, Eu = zu.hasOwnProperty;
function ju(e) {
  var s = e.length, t = new e.constructor(s);
  return s && typeof e[0] == "string" && Eu.call(e, "index") && (t.index = e.index, t.input = e.input), t;
}
var Rt = H.Uint8Array;
function tt(e) {
  var s = new e.constructor(e.byteLength);
  return new Rt(s).set(new Rt(e)), s;
}
function Fu(e, s) {
  var t = tt(e.buffer);
  return new e.constructor(t, e.byteOffset, e.byteLength);
}
var Pu = /\w*$/;
function Mu(e) {
  var s = new e.constructor(e.source, Pu.exec(e));
  return s.lastIndex = e.lastIndex, s;
}
var Ut = oe ? oe.prototype : void 0, It = Ut ? Ut.valueOf : void 0;
function Bu(e) {
  return It ? Object(It.call(e)) : {};
}
function Lu(e, s) {
  var t = tt(e.buffer);
  return new e.constructor(t, e.byteOffset, e.length);
}
var Hu = "[object Boolean]", Du = "[object Date]", Vu = "[object Map]", Nu = "[object Number]", Wu = "[object RegExp]", Xu = "[object Set]", Yu = "[object String]", Ku = "[object Symbol]", Gu = "[object ArrayBuffer]", qu = "[object DataView]", Zu = "[object Float32Array]", Ju = "[object Float64Array]", Qu = "[object Int8Array]", ed = "[object Int16Array]", td = "[object Int32Array]", sd = "[object Uint8Array]", nd = "[object Uint8ClampedArray]", od = "[object Uint16Array]", id = "[object Uint32Array]";
function rd(e, s, t) {
  var n = e.constructor;
  switch (s) {
    case Gu:
      return tt(e);
    case Hu:
    case Du:
      return new n(+e);
    case qu:
      return Fu(e);
    case Zu:
    case Ju:
    case Qu:
    case ed:
    case td:
    case sd:
    case nd:
    case od:
    case id:
      return Lu(e);
    case Vu:
      return new n();
    case Nu:
    case Yu:
      return new n(e);
    case Wu:
      return Mu(e);
    case Xu:
      return new n();
    case Ku:
      return Bu(e);
  }
}
var zt = Object.create, ld = /* @__PURE__ */ function() {
  function e() {
  }
  return function(s) {
    if (!Oe(s))
      return {};
    if (zt)
      return zt(s);
    e.prototype = s;
    var t = new e();
    return e.prototype = void 0, t;
  };
}();
function ad(e) {
  return typeof e.constructor == "function" && !fs(e) ? ld(Cu(e)) : {};
}
var cd = "[object Map]";
function ud(e) {
  return ye(e) && D(e) == cd;
}
var Et = ie && ie.isMap, dd = Et ? et(Et) : ud, fd = "[object Set]";
function hd(e) {
  return ye(e) && D(e) == fd;
}
var jt = ie && ie.isSet, md = jt ? et(jt) : hd, gs = "[object Arguments]", gd = "[object Array]", _d = "[object Boolean]", yd = "[object Date]", pd = "[object Error]", _s = "[object Function]", vd = "[object GeneratorFunction]", bd = "[object Map]", wd = "[object Number]", ys = "[object Object]", Sd = "[object RegExp]", kd = "[object Set]", Cd = "[object String]", Td = "[object Symbol]", Ad = "[object WeakMap]", $d = "[object ArrayBuffer]", Od = "[object DataView]", xd = "[object Float32Array]", Rd = "[object Float64Array]", Ud = "[object Int8Array]", Id = "[object Int16Array]", zd = "[object Int32Array]", Ed = "[object Uint8Array]", jd = "[object Uint8ClampedArray]", Fd = "[object Uint16Array]", Pd = "[object Uint32Array]", $ = {};
$[gs] = $[gd] = $[$d] = $[Od] = $[_d] = $[yd] = $[xd] = $[Rd] = $[Ud] = $[Id] = $[zd] = $[bd] = $[wd] = $[ys] = $[Sd] = $[kd] = $[Cd] = $[Td] = $[Ed] = $[jd] = $[Fd] = $[Pd] = !0;
$[pd] = $[_s] = $[Ad] = !1;
function ke(e, s, t, n, i, o) {
  var r;
  if (r !== void 0)
    return r;
  if (!Oe(e))
    return e;
  var a = Qe(e);
  if (a)
    r = ju(e);
  else {
    var u = D(e), c = u == _s || u == vd;
    if (cs(e))
      return yu(e);
    if (u == ys || u == gs || c && !i)
      r = c ? {} : ad(e);
    else {
      if (!$[u])
        return i ? e : {};
      r = rd(e, u);
    }
  }
  o || (o = new le());
  var g = o.get(e);
  if (g)
    return g;
  o.set(e, r), md(e) ? e.forEach(function(I) {
    r.add(ke(I, s, t, I, e, o));
  }) : dd(e) && e.forEach(function(I, P) {
    r.set(P, ke(I, s, t, P, e, o));
  });
  var A = Au, E = a ? void 0 : A(e);
  return _c(E || e, function(I, P) {
    E && (P = I, I = e[P]), bc(r, P, ke(I, s, t, P, e, o));
  }), r;
}
var Md = 1, Bd = 4;
function Ld(e) {
  return ke(e, Md | Bd);
}
const Fe = (e) => e.every((s) => typeof s == "object"), Ft = !0, ps = () => window.innerWidth;
let Pt = ps();
const Hd = {
  name: "UluTableSticky",
  components: {
    UluTableStickyTable: ma
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
      resizeHandler: Te(this.onResize.bind(this), 500, !0),
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
        i.getRowHeaders = (a) => r.map((u) => u(a)).join(" "), i.rowHeader && (i.getRowHeaderId = (a) => `${this.idPrefix}-rh-${a}-${o}`, n.push(i.getRowHeaderId));
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
      const e = this.idCreator("c"), s = Ld(this.columns), t = (n, i) => {
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
        const u = a.columns;
        u && u.forEach((c) => o(1 + r, c)), a.rowspan = u ? 1 : t - r, a.colspan = u ? u.reduce((c, g) => c + g.colspan, 0) : 1, i[r].columns.push(a);
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
      const e = ps();
      Pt !== e && (Pt = e, this.resizing ? (this.resizing = !1, this.setTableSizes(), this.checkOverflowX(), this.syncScrollLeft()) : (this.resizing = !0, this.removeTableSizes()));
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
}, Dd = { class: "table-sticky__sticky-wrap table-sticky__sticky-wrap--header" }, Vd = { class: "table-sticky__header-wrap" }, Nd = { class: "table-sticky__sticky-wrap table-sticky__sticky-wrap--first-column-header" }, Wd = { class: "table-sticky__sticky-wrap table-sticky__sticky-wrap--controls" }, Xd = {
  key: 2,
  class: "table-sticky__controls-inner"
}, Yd = ["disabled"], Kd = ["disabled"], Gd = {
  ref: "display",
  class: "table-sticky__display"
};
function qd(e, s, t, n, i, o) {
  const r = S("UluTableStickyTable");
  return l(), d("div", {
    class: h(["table-sticky", {
      "table-sticky--overflown-x": i.overflownX,
      "table-sticky--can-scroll-right": i.canScrollRight,
      "table-sticky--can-scroll-left": i.canScrollLeft
    }])
  }, [
    f("div", Dd, [
      f("div", Vd, [
        k(r, {
          ref: "header",
          class: "table-sticky__table table-sticky__table--header",
          classes: t.classes,
          caption: t.caption,
          resolveClasses: o.resolveClasses,
          getColumnTitle: t.getColumnTitle,
          idPrefix: t.idPrefix,
          headerRows: i.headerRows,
          style: U({
            opacity: i.sizesCalculated ? "1" : "0",
            pointerEvents: i.sizesCalculated ? "auto" : "none",
            width: i.tableWidth
          }),
          onColumnSorted: o.applySort
        }, te({ _: 2 }, [
          C(e.$slots, (a, u) => ({
            name: u,
            fn: b((c) => [
              m(e.$slots, u, M(B(c)))
            ])
          }))
        ]), 1032, ["classes", "caption", "resolveClasses", "getColumnTitle", "idPrefix", "headerRows", "style", "onColumnSorted"])
      ])
    ]),
    f("div", Nd, [
      t.firstColumnSticky ? (l(), v(r, {
        key: 0,
        ref: "firstColumnHeader",
        class: "table-sticky__table table-sticky__table--first-column-header",
        classes: t.classes,
        caption: t.caption,
        resolveClasses: o.resolveClasses,
        getColumnTitle: t.getColumnTitle,
        idPrefix: t.idPrefix,
        headerRows: o.headerRowsFirst,
        style: U({
          opacity: o.headerOpacityX,
          pointerEvents: o.headerVisibleX ? "auto" : "none"
        }),
        onColumnSorted: o.applySort
      }, te({ _: 2 }, [
        C(e.$slots, (a, u) => ({
          name: u,
          fn: b((c) => [
            m(e.$slots, u, M(B(c)))
          ])
        }))
      ]), 1032, ["classes", "caption", "resolveClasses", "getColumnTitle", "idPrefix", "headerRows", "style", "onColumnSorted"])) : y("", !0)
    ]),
    f("div", Wd, [
      V(f("div", {
        class: h(["table-sticky__controls", o.resolveClasses(t.classes.controls)]),
        ref: "controls"
      }, [
        e.$slots.controls ? m(e.$slots, "controls", {
          key: 0,
          scrollLeft: o.scrollLeft,
          scrollRight: o.scrollRight,
          canScrollLeft: i.canScrollLeft,
          canScrollRight: i.canScrollRight
        }) : t.controlsComponent ? (l(), v(z(t.controlsComponent), {
          key: 1,
          scrollLeft: o.scrollLeft,
          scrollRight: o.scrollRight,
          canScrollLeft: i.canScrollLeft,
          canScrollRight: i.canScrollRight
        }, null, 8, ["scrollLeft", "scrollRight", "canScrollLeft", "canScrollRight"])) : (l(), d("div", Xd, [
          f("button", {
            class: h(["table-sticky__control table-sticky__control--left", o.resolveClasses(t.classes.controlButton)]),
            "aria-label": "Scroll Left",
            onClick: s[0] || (s[0] = (...a) => o.scrollLeft && o.scrollLeft(...a)),
            disabled: !i.canScrollLeft
          }, [
            m(e.$slots, "controlLeft", {}, () => [
              s[2] || (s[2] = w(" ← "))
            ])
          ], 10, Yd),
          f("button", {
            class: h(["table-sticky__control table-sticky__control--right", o.resolveClasses(t.classes.controlButton)]),
            "aria-label": "Scroll Right",
            onClick: s[1] || (s[1] = (...a) => o.scrollRight && o.scrollRight(...a)),
            disabled: !i.canScrollRight
          }, [
            m(e.$slots, "controlRight", {}, () => [
              s[3] || (s[3] = w(" → "))
            ])
          ], 10, Kd)
        ]))
      ], 2), [
        [We, o.controlsShown]
      ])
    ]),
    f("div", Gd, [
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
      }, te({ _: 2 }, [
        C(e.$slots, (a, u) => ({
          name: u,
          fn: b((c) => [
            m(e.$slots, u, M(B(c)))
          ])
        }))
      ]), 1032, ["classes", "resolveClasses", "headerRows", "rows", "footerRows", "rowColumns", "caption", "idPrefix", "getRowValue", "getColumnTitle", "onVnodeMounted", "onActualHeaderRemoved", "onActualHeaderAdded", "onColumnSorted"])
    ], 512),
    t.firstColumnSticky ? (l(), v(r, {
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
      style: U({
        opacity: o.headerOpacityX,
        pointerEvents: o.headerVisibleX ? "auto" : "none"
      }),
      onColumnSorted: o.applySort
    }, te({ _: 2 }, [
      C(e.$slots, (a, u) => ({
        name: u,
        fn: b((c) => [
          m(e.$slots, u, M(B(c)))
        ])
      }))
    ]), 1032, ["classes", "resolveClasses", "caption", "headerRows", "columnWidth", "rows", "footerRows", "rowColumns", "idPrefix", "getRowValue", "getColumnTitle", "style", "onColumnSorted"])) : y("", !0)
  ], 2);
}
const fh = /* @__PURE__ */ _(Hd, [["render", qd]]);
export {
  Zf as $,
  xf as A,
  Rf as B,
  Zn as C,
  Uf as D,
  If as E,
  zf as F,
  Ef as G,
  jf as H,
  Ff as I,
  Pf as J,
  Mf as K,
  Bf as L,
  Lf as M,
  Hf as N,
  Df as O,
  Qt as P,
  so as Q,
  Vf as R,
  Nf as S,
  Wf as T,
  Kn as U,
  Xf as V,
  Yf as W,
  Kf as X,
  Gf as Y,
  qf as Z,
  mf as _,
  we as a,
  Jf as a0,
  Qf as a1,
  eh as a2,
  Xr as a3,
  Br as a4,
  th as a5,
  sh as a6,
  nh as a7,
  oh as a8,
  ih as a9,
  lh as aa,
  ah as ab,
  ch as ac,
  uh as ad,
  Vl as ae,
  dh as af,
  fh as ag,
  ta as ah,
  ma as ai,
  fn as aj,
  G as ak,
  ro as al,
  Ln as am,
  lf as an,
  af as ao,
  cf as ap,
  Ue as aq,
  uf as ar,
  hn as as,
  df as b,
  ff as c,
  hf as d,
  gf as e,
  On as f,
  yn as g,
  _f as h,
  rf as i,
  yf as j,
  pf as k,
  ee as l,
  vf as m,
  bf as n,
  wf as o,
  Sf as p,
  ko as q,
  rh as r,
  kf as s,
  ho as t,
  Cf as u,
  Tf as v,
  Af as w,
  $f as x,
  L as y,
  Of as z
};
