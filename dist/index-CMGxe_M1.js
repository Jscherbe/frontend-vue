import { ref as B, computed as $, resolveDirective as rs, createElementBlock as h, openBlock as a, Fragment as x, withDirectives as J, createElementVNode as m, unref as z, normalizeClass as g, renderSlot as y, withKeys as as, normalizeStyle as F, createCommentVNode as w, nextTick as cs, toRef as Jn, toDisplayString as S, createBlock as k, Teleport as ut, resolveDynamicComponent as M, mergeProps as Q, reactive as us, watchEffect as Qn, defineAsyncComponent as ei, markRaw as ye, normalizeProps as D, toRefs as ti, toValue as st, resolveComponent as T, withModifiers as si, createVNode as R, useSlots as ni, renderList as O, TransitionGroup as ii, withCtx as C, createTextVNode as A, vShow as dt, onMounted as oi, onUnmounted as li, guardReactiveProps as W, vModelCheckbox as ds, vModelText as ri, vModelSelect as ai, Transition as Kt, createSlots as ge } from "vue";
import { inline as fs, offset as hs, flip as ms, shift as _s, arrow as gs, useFloating as ys, autoUpdate as vs } from "@floating-ui/vue";
import { Disclosure as ci, DisclosureButton as ui, DisclosurePanel as di, Tab as fi, TabGroup as hi, TabList as mi, TabPanel as _i, TabPanels as gi } from "@headlessui/vue";
import { RouterLink as ft } from "vue-router";
import { useDropzone as yi } from "vue3-dropzone";
import vi from "gsap";
import pi from "fuse.js";
const Be = {
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
}, ae = {
  plugin: { ...Be.plugin },
  popover: { ...Be.popover },
  tooltip: { ...Be.tooltip, ...Be.popover }
}, ht = B(!1), mt = B(null);
function bi(t = {}) {
  return Object.assign(ae.popover, t.popover), Object.assign(ae.tooltip, t.tooltip), Object.assign(ae.plugin, t.plugin), ae;
}
function wi(t) {
  return Object.assign({}, ae.tooltip, t);
}
function Si(t) {
  ht.value = !0, mt.value = t;
}
function ki() {
  ht.value = !1, mt.value = null;
}
const Pe = /* @__PURE__ */ new WeakMap(), Ci = {
  mounted(t, s) {
    qt(t, s);
  },
  beforeUpdate(t) {
    Gt(t);
  },
  updated(t, s) {
    qt(t, s);
  },
  umounted(t) {
    Gt(t);
  }
};
function qt(t, s) {
  const e = Ai(t, s);
  if (!e) return;
  let o = null;
  const l = () => {
    o || (o = setTimeout(() => {
      Si(e), clearTimeout(o);
    }, e.delay));
  }, n = () => {
    o && (clearTimeout(o), o = null), ki();
  };
  e.showEvents.forEach((r) => {
    t.addEventListener(r, l);
  }), e.hideEvents.forEach((r) => {
    t.addEventListener(r, n);
  }), Pe.set(t, { onShow: l, onHide: n, config: e });
}
function Gt(t) {
  if (!Pe.has(t))
    return;
  const { config: s, onShow: e, onHide: o } = Pe.get(t);
  s.showEvents.forEach((l) => {
    t.removeEventListener(l, e);
  }), s.hideEvents.forEach((l) => {
    t.removeEventListener(l, o);
  }), Pe.delete(t);
}
function Ai(t, s) {
  const { value: e } = s;
  let o;
  if (!(e === !1 || e === null))
    return typeof e == "object" ? o = e : o = { content: e }, wi(Object.assign({}, { trigger: t }, o));
}
let Ti = 0;
function Ri() {
  return `ulu-popovers-uid-${++Ti}`;
}
const Oi = ["disabled", "aria-expanded", "aria-controls", "aria-label"], Ui = ["aria-hidden", "id", "data-placement"], xi = { class: "popover__inner" }, Ii = {
  key: 0,
  class: "popover__footer"
}, _t = {
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
      default: ({ isOpen: t, content: s }) => {
        t && s.focus({ preventScroll: !0 });
      }
    }
  },
  emits: ["toggle"],
  setup(t, { emit: s }) {
    const e = s, o = t, l = Ri(), n = Object.assign({}, ae.popover, o.config), r = B(o.startOpen || !1), c = B(null), f = B(null), d = B(null), v = [
      ...n.inline ? [fs()] : [],
      ...n.offset ? [hs(n.offset)] : [],
      ms(),
      _s(),
      ...n.arrow ? [gs({ element: d })] : []
    ], U = {
      placement: n.placement,
      whileElementsMounted: vs,
      middleware: v
    }, {
      floatingStyles: E,
      placement: P,
      middlewareData: Y,
      update: pe,
      isPositioned: Oe
    } = ys(c, f, U), ue = $(() => {
      const H = Y.value?.arrow;
      return H ? {
        position: "absolute",
        left: H?.x != null ? `${H.x}px` : "",
        top: H?.y != null ? `${H.y}px` : ""
      } : null;
    });
    n.onReady && n.onReady({ update: pe, isPositioned: Oe });
    const Ue = () => {
      se(!r.value);
    }, se = (H) => {
      r.value = H;
      const K = {
        trigger: z(c),
        content: z(f),
        isOpen: z(r)
      }, ie = { isOpen: K.isOpen };
      cs(() => {
        r.value ? (pe(), window.setTimeout(() => {
          xe(), o.directFocus(K), e("toggle", ie);
        }, 0)) : (ne(), o.directFocus(K), e("toggle", ie));
      });
    };
    let X;
    const xe = () => {
      o.clickOutsideCloses && (X && ne(), X = (H) => {
        f.value.contains(H.target) || se(!1);
      }, document.addEventListener("click", X));
    }, ne = () => {
      X && (document.removeEventListener("click", X), X = null);
    }, be = () => se(!1);
    return (H, K) => {
      const ie = rs("ulu-tooltip");
      return a(), h(x, null, [
        J((a(), h("button", {
          type: "button",
          ref_key: "trigger",
          ref: c,
          onClick: Ue,
          disabled: t.disabled,
          class: g([
            { [t.activeClass]: r.value },
            t.classes.trigger
          ]),
          "aria-expanded": r.value ? "true" : "false",
          "aria-controls": z(l),
          "aria-label": t.triggerAlt
        }, [
          y(H.$slots, "trigger", { isOpen: r.value })
        ], 10, Oi)), [
          [ie, t.tooltip ? t.tooltip : null]
        ]),
        m("span", {
          class: g(["popover", [
            t.size ? `popover--${t.size}` : "",
            {
              "popover--no-padding": t.noPadding,
              "is-active": r.value
            },
            t.classes.content
          ]]),
          ref_key: "content",
          ref: f,
          "aria-hidden": r.value ? "false" : "true",
          id: z(l),
          style: F(z(E)),
          "data-placement": z(P),
          onKeydown: K[0] || (K[0] = as((We) => se(!1), ["esc"])),
          tabindex: "-1"
        }, [
          m("span", xi, [
            y(H.$slots, "content", { close: be })
          ]),
          H.$slots.footer ? (a(), h("span", Ii, [
            y(H.$slots, "footer", { close: be })
          ])) : w("", !0),
          z(n).arrow ? (a(), h("span", {
            key: 1,
            class: "popover__arrow",
            ref_key: "contentArrow",
            ref: d,
            style: F(ue.value),
            "data-ulu-popover-arrow": ""
          }, null, 4)) : w("", !0)
        ], 46, Ui)
      ], 64);
    };
  }
}, zi = ["data-placement"], Ei = ["innerHTML"], $i = {
  key: 1,
  class: "popover__inner"
}, Fi = {
  __name: "UluTooltipPopover",
  props: {
    config: Object
  },
  setup(t) {
    const s = Jn(t.config.trigger), e = B(null), o = B(null), l = [
      ...t.config.inline ? [fs()] : [],
      ...t.config.offset ? [hs(t.config.offset)] : [],
      ms(),
      _s(),
      ...t.config.arrow ? [gs({ element: o })] : []
    ], n = {
      placement: t.config.placement,
      whileElementsMounted: vs,
      middleware: l
    }, {
      floatingStyles: r,
      placement: c,
      middlewareData: f,
      update: d,
      isPositioned: v
    } = ys(s, e, n), U = $(() => {
      const E = f.value?.arrow;
      return E ? {
        position: "absolute",
        left: E?.x != null ? `${E.x}px` : "",
        top: E?.y != null ? `${E.y}px` : ""
      } : null;
    });
    return t.config.onReady && t.config.onReady({ update: d, isPositioned: v }), (E, P) => (a(), h("span", {
      class: g(["popover popover--tooltip is-active", t.config.class]),
      ref_key: "content",
      ref: e,
      "aria-hidden": "true",
      "data-placement": z(c),
      style: F(z(r))
    }, [
      t.config.isHtml ? (a(), h("span", {
        key: 0,
        class: "popover__inner",
        innerHTML: t.config.content
      }, null, 8, Ei)) : (a(), h("span", $i, S(t.config.content), 1)),
      t.config.arrow ? (a(), h("span", {
        key: 2,
        class: "popover__arrow",
        ref_key: "contentArrow",
        ref: o,
        style: F(U.value)
      }, null, 4)) : w("", !0)
    ], 14, zi));
  }
}, Mi = {
  __name: "UluTooltipDisplay",
  setup(t) {
    return (s, e) => (a(), k(ut, {
      to: z(ae).plugin.tooltipTeleportTo
    }, [
      z(ht) ? (a(), k(Fi, {
        key: 0,
        config: z(mt)
      }, null, 8, ["config"])) : w("", !0)
    ], 8, ["to"]));
  }
};
function uu(t, s = {}) {
  const e = bi(s);
  e.plugin.global && (t.directive(e.plugin.directiveName, Ci), t.component("UluTooltipDisplay", Mi), t.component("UluPopover", _t));
}
const p = (t, s) => {
  const e = t.__vccOpts || t;
  for (const [o, l] of s)
    e[o] = l;
  return e;
}, Bi = {
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
    currentModal(t) {
      t ? this.open = !0 : this.open = !1;
    },
    // Watch for changes in the local state (e.g., when the modal emits 'update:modelValue')
    open(t) {
      !t && this.currentModal && this.$uluModals.close();
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
function Hi(t, s, e, o, l, n) {
  return n.currentModal ? (a(), k(M(n.currentModal.component), Q({ key: 0 }, n.currentProps, {
    modelValue: l.open,
    "onUpdate:modelValue": s[0] || (s[0] = (r) => l.open = r),
    onVnodeMounted: n.modalMounted,
    onVnodeUnmounted: n.modalUnmounted
  }), null, 16, ["modelValue", "onVnodeMounted", "onVnodeUnmounted"])) : w("", !0);
}
const Li = /* @__PURE__ */ p(Bi, [["render", Hi]]);
function Pi() {
  return { getIconProps: (e) => e ? typeof e == "object" && !Array.isArray(e) ? e : { icon: e } : null, getClassesFromDefinition: (e) => {
    if (!e)
      return null;
    if (typeof e == "string")
      return e;
    if (Array.isArray(e))
      return e.length >= 2 ? `${e[0]} fa-${e[1]}` : e.join(" ");
    if (typeof e == "object" && e.icon) {
      if (typeof e.icon == "string")
        return e.icon;
      if (Array.isArray(e.icon))
        return e.icon.length >= 2 ? `${e.icon[0]} fa-${e.icon[1]}` : e.icon.join(" ");
    }
    return console.warn("useIcon: Unable to parse definition for static FontAwesome classes:", e), null;
  } };
}
const ps = {
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
  iconPropResolver: (t) => ({ icon: t }),
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
let ve = us({ ...ps });
function du() {
  return { ...ps };
}
function fu(t) {
  Object.assign(ve, t);
}
function hu() {
  return ve;
}
function nt(t) {
  if (!ve.hasOwnProperty(t)) {
    console.warn(`Attempted to access non-existent setting: ${t}`);
    return;
  }
  return ve[t];
}
function mu(t, s) {
  if (typeof t != "string")
    throw new Error("Expected key to be string");
  ve[t] = s;
}
function ji(t) {
  const s = ve.iconsByType;
  if (!s[t])
    throw new Error(`Icon type "${t}" not found!`);
  return s[t];
}
const N = {
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
  setup(t) {
    const s = B(null), { getIconProps: e, getClassesFromDefinition: o } = Pi();
    let l;
    const n = t, r = $(() => nt("fontAwesomeStatic")), c = $(() => nt("iconComponent")), f = $(() => nt("iconPropResolver")), d = $(() => {
      if (n.definition)
        return n.definition;
      if (n.type)
        try {
          return ji(n.type);
        } catch (P) {
          return console.warn(P), null;
        }
      return null;
    }), v = $(() => !c.value || !d.value ? null : f.value(d.value)), U = $(() => e(d.value)), E = $(() => o(d.value));
    return Qn(async () => {
      if (!r.value && d.value) {
        if (s.value === null)
          if (l)
            s.value = ye(l.FontAwesomeIcon);
          else {
            const P = ei(async () => {
              const Y = await import("./index.es-HlG3u0J5.js");
              return l = Y, Y.FontAwesomeIcon;
            });
            s.value = ye(P);
          }
      } else
        s.value = null;
    }), (P, Y) => c.value ? (a(), k(M(c.value), D(Q({ key: 0 }, v.value)), null, 16)) : !r.value && s.value && d.value ? (a(), k(M(s.value), D(Q({ key: 1 }, U.value)), null, 16)) : r.value && d.value ? (a(), h("span", {
      key: 2,
      class: g(E.value),
      "aria-hidden": "true"
    }, null, 2)) : w("", !0);
  }
};
function rt(t) {
  const s = /* @__PURE__ */ new Set();
  if (!t)
    return s;
  if (typeof t == "string")
    t.split(" ").forEach((e) => {
      e && s.add(e);
    });
  else if (Array.isArray(t))
    t.forEach((e) => {
      rt(e).forEach((o) => s.add(o));
    });
  else if (typeof t == "object")
    for (const e in t)
      Object.prototype.hasOwnProperty.call(t, e) && t[e] && e && s.add(e);
  return s;
}
function ce({ props: t, baseClass: s, internal: e = {} }) {
  const { modifiers: o } = ti(t);
  return { resolvedModifiers: $(() => {
    const n = st(s), r = rt(st(o)), c = rt(st(e));
    if (!n)
      return console.warn("useModifiers: Missing 'baseClass' argument, modifiers will not be applied."), "";
    const f = /* @__PURE__ */ new Set([...c, ...r]);
    return Array.from(f).map((d) => `${n}--${d}`);
  }) };
}
function bs() {
  return typeof window < "u" && typeof window.document < "u";
}
function Vi(t, s) {
  const e = t.getBoundingClientRect();
  return s.clientY < e.top || // above
  s.clientY > e.top + e.height || // below
  s.clientX < e.left || // left side
  s.clientX > e.left + e.width;
}
function Di(t = document.body, s = window) {
  return s.innerWidth - t.clientWidth;
}
function Wi({ preventShift: t = !1, container: s = document.body }) {
  const e = s.style.overflow, o = s.style.paddingRight;
  if (s.style.overflow = "hidden", t) {
    const l = Di();
    if (l > 0) {
      const n = parseInt(o || "0px", 10);
      s.style.paddingRight = `${n + l}px`;
    }
  }
  return () => {
    s.style.overflow = e, s.style.paddingRight = o;
  };
}
function Ve(t, s, e, o) {
  var l;
  return function() {
    var r = o || this, c = arguments, f = function() {
      l = null, e || t.apply(r, c);
    }, d = e && !l;
    clearTimeout(l), l = setTimeout(f, s), d && t.apply(r, c);
  };
}
bs() && (Xi(), Yi());
const Zt = {
  /**
   * Event is dispatched when DOM in the page has changed, triggers updates from
   * all modules listening for the change (init instances, etc)
   * - Is triggered by modules that were responsible for modifying the page
   */
  pageModified(t) {
    t.dispatchEvent(ke("pageModified"));
  },
  /**
   * Event called when page is resized
   */
  pageResized(t) {
    t.dispatchEvent(ke("pageResized"));
  },
  /**
   * Event dispatched before page print begins (teardown/restructure/hide things)
   */
  beforePrint(t) {
    t.dispatchEvent(ke("beforePrint"));
  },
  /**
   * Event dispatched after page print (cleanup)
   */
  afterPrint(t) {
    t.dispatchEvent(ke("afterPrint"));
  }
};
function at(t, s) {
  Zt[t] ? Zt[t](s) : console.warn(`Unable to dispatch site event: ${t} in context:`, s);
}
function Ni(t) {
  return "ulu:" + t;
}
function ke(t, s = null, e = { bubbles: !0 }) {
  return new CustomEvent(Ni(t), { detail: s, ...e });
}
function Xi() {
  window.addEventListener("resize", Ve(() => at("pageResized", document), 250));
}
function Yi() {
  window.addEventListener("beforeprint", () => {
    at("beforePrint", document);
  }), window.addEventListener("afterprint", () => {
    at("afterPrint", document);
  });
}
function Ki(t) {
  return typeof t == "object" && t?.constructor?.name;
}
function qi(t, s, e) {
  const o = Ki(s) || "Logger";
  console[t](o, ...e);
}
function _e(t, ...s) {
}
function He(t, ...s) {
  qi("error", t, s);
}
class gt {
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
  #i;
  #t;
  #e;
  #o;
  #l;
  #s;
  #r;
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
  constructor(s, e, o) {
    if (!e || !s) {
      He(this, "Missing required elements: control, container");
      return;
    }
    const l = Object.assign({}, gt.defaults, o);
    this.options = l, this.container = s, this.control = e, this.debug = l.debug;
    const n = ["left", "right"], r = ["top", "bottom"], { fromX: c, fromY: f } = l;
    if (!n.includes(c) && c !== null) {
      He(this, `Invalid fromX: ${c} (left|right|null)`);
      return;
    }
    if (!r.includes(f) && f !== null) {
      He(this, `Invalid fromY: ${f} (top|bottom|null)`);
      return;
    }
    if (!c && !f) {
      He(this, "Invalid fromX/fromY, failed to setup resizer (at least one of fromX or fromY must be set)");
      return;
    }
    this.resizeHorizontal = l.fromX !== null, this.resizeVertical = l.fromY !== null, l.manageEvents && (this.#n = this.onPointerdown.bind(this), this.#i = this.onKeydown.bind(this), l.enablePointerResizing && e.addEventListener("pointerdown", this.#n), l.enableKeyboardResizing && e.addEventListener("keydown", this.#i)), this.#c(), l.manageAriaLabel && e.setAttribute("aria-label", this.getAriaLabel());
  }
  /**
   * Resets all internal state properties to their default/inactive values.
   * This centralizes state cleanup and initial setup.
   * @private
   */
  #c() {
    this.#t = null, this.#e = { width: 0, height: 0 }, this.#o = 0, this.#l = 0, this.#s = !1, this.#r = 0, this.#a = 0;
  }
  /**
   * Cleans up event listeners and internal state to prevent memory leaks.
   */
  destroy() {
    const { control: s, options: e } = this;
    e.manageEvents && (e.enablePointerResizing && s.removeEventListener("pointerdown", this.#n), e.enableKeyboardResizing && s.removeEventListener("keydown", this.#i)), this.#t && clearTimeout(this.#t), this.#c(), e.manageAriaLabel && s.removeAttribute("aria-label"), _e(this, "Resizer destroyed.");
  }
  /**
   * Initiates a resize operation.
   * This sets initial dimensions and dispatches the 'resizer:start' event.
   * @param {Object} eventDetails Additional details about the initiating event.
   * @private
   */
  #u(s) {
    const { container: e, options: o } = this;
    if (this.#s) {
      o.overrideMaxDimensions && (this.resizeHorizontal && (e.style.maxWidth = "none"), this.resizeVertical && (e.style.maxHeight = "none"));
      return;
    }
    const n = document.defaultView.getComputedStyle(e);
    this.#e.width = parseInt(n.width, 10), this.#e.height = parseInt(n.height, 10), o.overrideMaxDimensions && (this.resizeHorizontal && (e.style.maxWidth = "none"), this.resizeVertical && (e.style.maxHeight = "none")), this.#s = !0, this.dispatchEvent("resizer:start", s), _e(this, "Resize started.", {
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
    this.#s && (this.dispatchEvent("resizer:end"), this.#c(), _e(this, "Resize ended."));
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
  #f(s, e, o) {
    let l = this.#e.width, n = this.#e.height;
    const { fromX: r, fromY: c, multiplier: f } = this.options;
    this.resizeHorizontal && (r === "right" ? l = this.#e.width + s * f : r === "left" && (l = this.#e.width - s * f), this.container.style.width = `${Math.max(0, l)}px`), this.resizeVertical && (c === "bottom" ? n = this.#e.height + e * f : c === "top" && (n = this.#e.height - e * f), this.container.style.height = `${Math.max(0, n)}px`);
    const d = {
      newWidth: l,
      newHeight: n,
      totalDeltaX: s,
      totalDeltaY: e,
      event: o
    };
    this.dispatchEvent("resizer:update", d), _e(this, "Resizing update.", d);
  }
  /**
   * Public handler for pointerdown events. Call this method from your own event listeners
   * if `manageEvents` is false. Its logic will only execute if `enablePointerResizing` is true.
   * @param {PointerEvent} e The pointerdown event.
   */
  onPointerdown(s) {
    if (!this.options.enablePointerResizing) {
      _e(this, "Pointer resizing disabled. Ignoring pointerdown event.");
      return;
    }
    s.preventDefault();
    const e = document.documentElement;
    this.#r = s.clientX, this.#a = s.clientY, this.#u({
      inputType: "pointer",
      startX: s.clientX,
      startY: s.clientY,
      pointerId: s.pointerId
    }), this.control.setPointerCapture(s.pointerId);
    const o = (n) => {
      const r = n.clientX - this.#r, c = n.clientY - this.#a;
      this.#f(r, c, n);
    }, l = (n) => {
      e.removeEventListener("pointermove", o, !1), e.removeEventListener("pointerup", l, { capture: !0, once: !0 }), this.control.hasPointerCapture(n.pointerId) && this.control.releasePointerCapture(n.pointerId), this.#d();
    };
    e.addEventListener("pointermove", o, !1), e.addEventListener("pointerup", l, { capture: !0, once: !0 });
  }
  /**
   * Public handler for keydown events. Call this method from your own event listeners
   * if `manageEvents` is false. Its logic will only execute if `enableKeyboardResizing` is true.
   * @param {KeyboardEvent} e The keydown event.
   */
  onKeydown(s) {
    if (!this.options.enableKeyboardResizing) {
      _e(this, "Keyboard resizing disabled. Ignoring keydown event.");
      return;
    }
    const { key: e } = s, { keyboardStep: o, keyboardDebounceTime: l } = this.options;
    let n = 0, r = 0, c = !1;
    this.resizeHorizontal && (e === "ArrowLeft" ? (n = -o, c = !0) : e === "ArrowRight" && (n = o, c = !0)), this.resizeVertical && (e === "ArrowUp" ? (r = -o, c = !0) : e === "ArrowDown" && (r = o, c = !0)), c && (s.preventDefault(), s.stopPropagation(), (!this.#s || this.#t === null) && this.#u({ inputType: "keyboard", keyboardKey: e }), this.#o += n, this.#l += r, this.#f(this.#o, this.#l, s), this.#t && clearTimeout(this.#t), this.#t = setTimeout(() => {
      this.#d(), this.#t = null;
    }, l));
  }
  /**
   * Generates an accessible label for the resize control based on its configuration.
   * This is a convenience function that can be used by the consumer if `manageAriaLabel` is false.
   * @returns {string} The suggested aria-label for the control.
   */
  getAriaLabel() {
    const { fromY: s, fromX: e } = this.options, o = [s, e].filter((l) => l);
    return o.length === 0 ? "Resize control" : `Resize from ${o.join(" ")} edge`;
  }
  /**
   * Dispatches a custom event on the container element.
   * @param {string} type The event type (e.g., "resizer:start", "resizer:update", "resizer:end").
   * @param {Object} [data={}] Optional data to attach to the event's detail property.
   */
  dispatchEvent(s, e = {}) {
    this.container.dispatchEvent(ke(s, e));
  }
}
let it = 0;
const Gi = {
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
    return ++it, {
      containerWidth: null,
      titleId: `ulu-modal-${it}-title`,
      bodyOverflowValue: null,
      bodyPaddingRightValue: null,
      isResizing: !1
    };
  },
  setup(t) {
    const s = ni(), e = $(() => t.title || s.title), o = $(() => {
      const { allowResize: c, position: f } = t;
      if (!c || !f) return;
      const d = ["left", "right", "center"];
      return d.includes(f) ? !0 : (console.warn(`Passed invalid position for resize (${f}), use ${d.join(", ")}`), !1);
    }), l = $(() => t.position === "center" ? "resizeBoth" : "resizeHorizontal"), n = $(() => ({
      [t.position]: t.position,
      resize: t.allowResize,
      "no-resize": !t.allowResize,
      "no-header": !e.value,
      "body-fills": t.bodyFills,
      "no-backdrop": t.noBackdrop,
      "no-min-height": t.noMinHeight,
      "non-modal": t.nonModal,
      "resizer-active": o.value
    })), { resolvedModifiers: r } = ce({
      props: t,
      baseClass: "modal",
      internal: n
    });
    return {
      resolvedModifiers: r,
      hasHeader: e,
      resizerEnabled: o,
      resizerIconType: l
    };
  },
  computed: {
    resolvedLabelledby() {
      const { labelledby: t, titleId: s } = this;
      return t || s;
    }
  },
  watch: {
    modelValue: {
      // So that it runs on mount (if modelValue is initially true)
      immediate: !0,
      handler(t) {
        this.$nextTick(() => {
          const { container: s } = this.$refs;
          t ? (s[this.nonModal ? "show" : "showModal"](), this.$emit("open")) : s.close();
        });
      }
    },
    resizerEnabled: {
      immediate: !1,
      // Don't run on initial mount, as setupResizer is called in mounted
      handler(t) {
        t ? this.$nextTick(() => {
          this.setupResizer();
        }) : this.destroyResizer();
      }
    },
    position(t, s) {
      t !== s && (this.destroyResizer(), this.$nextTick(() => {
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
    handleClick(t) {
      if (this.clickOutsideCloses && !this.isResizing) {
        const { target: s } = t, { container: e } = this.$refs;
        s === e && Vi(e, t) && this.close();
      }
    },
    setupPreventScroll() {
      const { body: t } = document;
      this.bodyOverflowValue = t.style.overflow, this.bodyPaddingRightValue = t.style.paddingRight;
    },
    destroyPreventScroll() {
      this.restoreScroll && this.restoreScroll();
    },
    handleToggle(t) {
      if (!this.nonModal && this.preventScroll) {
        const { preventScrollShift: s } = this;
        t.newState === "open" ? this.restoreScroll = Wi({ preventShift: s }) : this.destroyPreventScroll();
      }
    },
    setupResizer() {
      const { position: t, resizerEnabled: s } = this;
      if (s) {
        const { container: e, resizer: o } = this.$refs, l = t === "center" ? { fromX: "right", fromY: "bottom", multiplier: 2 } : { fromX: t === "right" ? "left" : "right" };
        this.resizerInstance = new gt(e, o, l), this.handleResizerStart = () => {
          this.isResizing = !0;
        }, this.handleResizerEnd = () => {
          setTimeout(() => {
            this.isResizing = !1;
          }, 0);
        }, e.addEventListener("ulu:resizer:start", this.handleResizerStart), e.addEventListener("ulu:resizer:end", this.handleResizerEnd);
      }
    },
    destroyResizer() {
      const { container: t } = this.$refs;
      this.resizerInstance && (this.resizerInstance.destroy(), this.resizerInstance = null), this.handleResizerStart && t.removeEventListener("ulu:resizer:start", this.handleResizerStart), this.handleResizerEnd && t.removeEventListener("ulu:resizer:end", this.handleResizerEnd);
    }
  },
  mounted() {
    ++it, this.preventScroll && this.setupPreventScroll(), this.setupResizer();
  },
  beforeUnmount() {
    const { container: t } = this.$refs;
    t && t.open && t.close(), this.destroyPreventScroll(), this.destroyResizer();
  }
}, Zi = ["aria-labelledby", "aria-describedby"], Ji = ["id"], Qi = { class: "modal__title-text" }, eo = {
  key: 2,
  class: "modal__resizer",
  ref: "resizer",
  type: "button"
};
function to(t, s, e, o, l, n) {
  const r = T("UluIcon");
  return a(), k(ut, {
    to: e.teleport === !1 ? null : e.teleport,
    disabled: e.teleport === !1
  }, [
    m("dialog", {
      class: g(["modal", [o.resolvedModifiers, e.classes.container]]),
      "aria-labelledby": n.resolvedLabelledby,
      "aria-describedby": e.describedby,
      ref: "container",
      style: F({ width: l.containerWidth }),
      onCancel: s[1] || (s[1] = si((...c) => n.close && n.close(...c), ["prevent"])),
      onClose: s[2] || (s[2] = (...c) => n.handleDialogCloseEvent && n.handleDialogCloseEvent(...c)),
      onClick: s[3] || (s[3] = (...c) => n.handleClick && n.handleClick(...c)),
      onToggle: s[4] || (s[4] = (...c) => n.handleToggle && n.handleToggle(...c))
    }, [
      o.hasHeader ? (a(), h("header", {
        key: 0,
        class: g(["modal__header", e.classes.header])
      }, [
        m("h2", {
          class: g(["modal__title", e.classes.title]),
          id: l.titleId
        }, [
          y(t.$slots, "title", { close: n.close }, () => [
            e.titleIcon ? (a(), k(r, {
              key: 0,
              class: "modal__title-icon",
              definition: e.titleIcon
            }, null, 8, ["definition"])) : w("", !0),
            m("span", Qi, S(e.title), 1)
          ])
        ], 10, Ji),
        m("button", {
          class: "modal__close",
          "aria-label": "Close modal",
          onClick: s[0] || (s[0] = (...c) => n.close && n.close(...c)),
          autofocus: ""
        }, [
          y(t.$slots, "closeIcon", {}, () => [
            R(r, {
              class: "modal__close-icon",
              type: "close",
              definition: e.closeIcon
            }, null, 8, ["definition"])
          ])
        ])
      ], 2)) : w("", !0),
      m("div", {
        class: g(["modal__body", e.classes.body])
      }, [
        y(t.$slots, "default", { close: n.close })
      ], 2),
      t.$slots.footer ? (a(), h("div", {
        key: 1,
        class: g(["site-modal__footer", e.classes.footer])
      }, [
        y(t.$slots, "footer", { close: n.close })
      ], 2)) : w("", !0),
      o.resizerEnabled ? (a(), h("button", eo, [
        y(t.$slots, "resizerIcon", {}, () => [
          R(r, {
            class: "modal__resizer-icon",
            type: o.resizerIconType,
            definition: e.resizerIcon
          }, null, 8, ["type", "definition"])
        ])
      ], 512)) : w("", !0)
    ], 46, Zi)
  ], 8, ["to", "disabled"]);
}
const so = /* @__PURE__ */ p(Gi, [["render", to]]), Ce = [], no = B({
  /**
   * Holds active component options (including component, and options)
   */
  active: null,
  /**
   * Populated with any props passed to open method, bound to modal component
   */
  activeProps: null
}), Ae = no.value, Jt = {
  data: Ae,
  modals: Ce
}, io = (t) => ({
  open(s, e = null) {
    const o = this.get(s);
    Ae.active = ye(o), Ae.activeProps = Object.assign({}, o.props, e);
  },
  /**
   * Close the active modal
   * @param {String|Node} focusTo The element or selector for an element to programmatically focus after modal close
   * @see https://www.deque.com/blog/accessible-routing-in-javascript-frameworks/
   */
  close() {
    Ae.active = null, Ae.activeProps = null;
  },
  /**
   * Get a modal's config object by name
   * @return {Object} Modal config object
   */
  get(s) {
    const e = Ce.find((o) => o.name === s);
    if (e)
      return e;
    throw new Error(`Unable to find modal named: ${s}`);
  },
  /**
   * Add a modal config
   */
  add(s) {
    const e = t(s);
    Ce.push(e);
  },
  /**
   * Removes a modal config by name
   * @return {Object} Modal that was removed
   */
  remove(s) {
    const e = Ce.findIndex((o) => o.name === s);
    if (e > -1)
      return Ce.splice(e, 1);
    warn("unable to find modal to remove");
  }
}), oo = {
  componentNameDisplay: "UluModalsDisplay",
  componentNameModal: "UluModal",
  modals: [],
  modalOptions: {}
};
function _u(t, s) {
  const e = Object.assign({}, oo, s), l = io((n) => Object.assign({}, e.modalOptions, n));
  t.component(e.componentNameDisplay, Li), t.component(e.componentNameModal, so), e.modals.forEach((n) => {
    l.add(n);
  }), Jt.options = e, t.config.globalProperties.$uluModals = l, t.provide("uluModals", l), t.config.globalProperties.$uluModalsState = Jt;
}
const lo = {
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
    handleAction(t, s) {
      const { toast: e } = this;
      this.toast.close(), this.$nextTick(() => {
        s(t, e, s);
      });
    }
  }
}, ro = ["onClick"];
function ao(t, s, e, o, l, n) {
  const r = T("FaIcon"), c = T("UluIcon");
  return a(), h("div", {
    class: g(["toast", [
      {
        "toast--persistent": !e.toast.duration
      },
      e.toast?.class
    ]])
  }, [
    e.toast.icon || t.$slots.icon ? (a(), h("div", {
      key: 0,
      class: g(["toast__icon", e.classes.icon])
    }, [
      y(t.$slots, "icon", { toast: e.toast }, () => [
        e.toast.icon ? (a(), k(r, {
          key: 0,
          icon: e.toast.icon
        }, null, 8, ["icon"])) : w("", !0)
      ])
    ], 2)) : w("", !0),
    m("div", {
      class: g(["toast__content", e.classes.content])
    }, [
      y(t.$slots, "content", { toast: e.toast }, () => [
        e.toast.title ? (a(), h("div", {
          key: 0,
          class: g(["toast__header", e.classes.header])
        }, [
          m("strong", {
            class: g(["toast__title", e.classes.title])
          }, S(e.toast.title), 3),
          e.toast.date ? (a(), h("span", {
            key: 0,
            class: g(["toast__date", e.classes.date])
          }, S(e.toast.date), 3)) : w("", !0)
        ], 2)) : w("", !0),
        e.toast.description ? (a(), h("div", {
          key: 1,
          class: g(["toast__body", e.classes.body])
        }, S(e.toast.description), 3)) : w("", !0)
      ])
    ], 2),
    e.toast.actions?.length ? (a(), h("div", {
      key: 1,
      class: g(["toast__actions", e.classes.actions])
    }, [
      (a(!0), h(x, null, O(e.toast.actions, (f, d) => (a(), h("button", {
        key: d,
        class: g(["toast__action", e.classes.action]),
        onClick: (v) => n.handleAction(v, f)
      }, S(f.label), 11, ro))), 128))
    ], 2)) : w("", !0),
    m("button", {
      class: g(["toast__close", e.classes.closeButton]),
      onClick: s[0] || (s[0] = (...f) => e.toast.close && e.toast.close(...f))
    }, [
      R(c, { type: "close" })
    ], 2)
  ], 2);
}
const ws = /* @__PURE__ */ p(lo, [["render", ao]]), Qt = {
  toastOptions: {
    /**
     * Component used to render the toast in the display
     */
    component: ye(ws),
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
}, { assign: ot } = Object;
let co = 0;
const te = us({
  toasts: [],
  /**
   * Saveable 
   */
  pluginOptions: Qt.pluginOptions,
  toastOptions: Qt.toastOptions,
  setToastOptions(t) {
    return this.toastOptions = ot({}, this.toastOptions, t), this.pluginOptions;
  },
  setPluginOptions(t) {
    return this.pluginOptions = ot({}, this.pluginOptions, t), this.pluginOptions;
  },
  createToast(t) {
    const s = `toast-${++co}`;
    return ot({}, this.toastOptions, t, {
      uid: s,
      close() {
        ct.remove(s);
      }
    });
  }
}), ct = {
  /**
   * 
   * @param {Object} options Toast options
   * @returns Toast object (to be used to remove)
   */
  add(t) {
    const s = te.createToast(t);
    return te.toasts.unshift(s), s.duration && setTimeout(() => {
      this.remove(s.uid);
    }, s.duration), s;
  },
  /**
   * 
   * @param {Object} toast Toast uid
   */
  remove(t) {
    const s = te.toasts.findIndex((e) => e.uid === t);
    s > -1 && te.toasts.splice(s, 1);
  },
  /**
   * Remove all toasts
   */
  removeAll() {
    te.toasts = [];
  }
}, uo = {
  name: "UluTooltipDisplay",
  data() {
    const { toasts: t, pluginOptions: s } = te;
    return { toasts: t, pluginOptions: s };
  },
  computed: {
    classes() {
      const { position: t } = this.pluginOptions;
      return t.map((e) => `toast-container--${e}`);
    }
  }
};
function fo(t, s, e, o, l, n) {
  return a(), k(ut, {
    to: l.pluginOptions.teleportTo
  }, [
    R(ii, {
      class: g(["toast-container", n.classes]),
      name: "toast",
      tag: "div"
    }, {
      default: C(() => [
        (a(!0), h(x, null, O(l.toasts, (r) => (a(), k(M(r.component), {
          key: r.uid,
          toast: r
        }, null, 8, ["toast"]))), 128))
      ]),
      _: 1
    }, 8, ["class"])
  ], 8, ["to"]);
}
const ho = /* @__PURE__ */ p(uo, [["render", fo]]);
function gu(t, s = {}) {
  const e = te.setPluginOptions(s?.plugin);
  te.setToastOptions(s?.toast), t.component(e.componentName, ws), t.component(e.componentNameDisplay, ho), t.config.globalProperties.$uluToast = ct, t.provide("uluToast", ct);
}
const mo = {
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
function _o(t) {
  const s = Object.assign({}, mo, t), e = B(null), o = B(s.initialValue), l = B(null);
  return (async () => {
    if (!bs()) return;
    await new Promise((v) => {
      document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", () => v()) : v();
    });
    const r = await import("./breakpoints-Cq2oSdYS.js"), { BreakpointManager: c } = r, f = ye(new c(s.plugin));
    e.value = ye(f);
    const d = () => {
      o.value = f.active, l.value = f.resizeDirection;
    };
    d(), s.onReady && s.onReady(f), f.onChange(d);
  })(), { breakpointManager: e, breakpointActive: o, breakpointDirection: l };
}
const go = {
  /**
   * Breakpoint for mobile down/max
   */
  breakpointMobile: "small",
  /**
   * Options to pass to useBreakpointManager()
   */
  managerOptions: {}
};
function yu(t, s) {
  const e = B(!1), o = Object.assign({}, go, s), { breakpointMobile: l } = o, { onReady: n } = o.managerOptions, r = {
    onReady(U) {
      U.at(l).max({
        on() {
          e.value = !0;
        },
        off() {
          e.value = !1;
        }
      }), n && n(U);
    }
  }, c = Object.assign({}, o.managerOptions, r), {
    breakpointManager: f,
    breakpointActive: d,
    breakpointDirection: v
  } = _o(c);
  t.provide("uluBreakpointActive", $(() => d.value)), t.provide("uluBreakpointDirection", $(() => v.value)), t.provide("uluBreakpointManager", $(() => f.value)), t.provide("uluIsMobile", $(() => e.value));
}
const vu = {
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
  setup(t) {
    const s = t, { resolvedModifiers: e } = ce({ props: s, baseClass: "button" });
    return (o, l) => (a(), k(z(ci), { defaultOpen: t.defaultOpen }, {
      default: C(({ open: n }) => [
        m("div", {
          class: g(["accordion", [
            { [t.activeClass]: n },
            t.classes.container,
            z(e)
          ]])
        }, [
          R(z(ui), {
            class: g(["accordion__summary", [
              { [t.activeClass]: n },
              t.classes.summary
            ]])
          }, {
            default: C(() => [
              y(o.$slots, "summary", { open: n }, () => [
                (a(), k(M(t.summaryTextElement), null, {
                  default: C(() => [
                    A(S(t.summaryText), 1)
                  ]),
                  _: 1
                }))
              ]),
              y(o.$slots, "icon", { open: n }, () => [
                m("span", {
                  class: g(["accordion__icon", t.classes.icon])
                }, [
                  R(N, {
                    type: n ? "collapse" : "expand",
                    style: { display: "inline" }
                  }, null, 8, ["type"])
                ], 2)
              ])
            ]),
            _: 2
          }, 1032, ["class"]),
          R(z(di), {
            class: g(["accordion__content", t.classes.content])
          }, {
            default: C(() => [
              y(o.$slots, "default", { open: n })
            ]),
            _: 2
          }, 1032, ["class"])
        ], 2)
      ]),
      _: 3
    }, 8, ["defaultOpen"]));
  }
};
let yo = 0;
const vo = {
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
      validator(t) {
        return t.includes("s");
      }
    }
  },
  data() {
    const t = this.startOpen;
    return {
      isOpen: t,
      toggleId: this.getUid(),
      contentId: this.getUid(),
      contentHeight: t ? "auto" : "0px",
      contentOpacity: this.transitionFades && !t ? 0 : 1,
      transitionsDisabled: !1,
      transitionTimeout: Math.ceil(this.getUnitlessDuration(this.transitionDuration) + 500),
      isTransitioning: !1,
      isHidden: !t,
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
    removeTransition(t) {
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
      let t;
      const s = this.$refs.content, e = () => {
        this.contentHeight = "auto", this.isOpen = !0, this.removeTransition(), this.$emit("collapsible-opened");
      };
      this.onCleanupTransition = () => {
        clearTimeout(t), s.removeEventListener("transitionend", e);
      }, s.addEventListener("transitionend", e), this.isHidden = !1, this.isTransitioning = !0, this.$emit("collapsible-opening"), this.$nextTick(() => {
        this.contentHeight = s.scrollHeight + "px", this.transitionFades && (this.contentOpacity = 1), t = setTimeout(e, this.transitionTimeout);
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
      let t;
      const s = this.$refs.content, e = s.scrollHeight, o = () => {
        s.addEventListener("transitionend", r), this.contentHeight = e + "px", this.$nextTick(l);
      }, l = () => {
        this.transitionsDisabled = !1, this.$nextTick(() => {
          requestAnimationFrame(n);
        });
      }, n = () => {
        this.contentHeight = "0px", this.transitionFades && (this.contentOpacity = 0);
      }, r = () => {
        this.isOpen = !1, this.isHidden = !0, this.removeTransition(), this.$emit("collapsible-closed");
      }, c = () => {
        n(), r();
      };
      this.onCleanupTransition = () => {
        clearTimeout(t), s.removeEventListener("transitionend", r);
      }, this.transitionsDisabled = !0, this.isTransitioning = !0, this.$emit("collapsible-closing"), this.$nextTick(() => {
        requestAnimationFrame(o), t = setTimeout(c, this.transitionTimeout);
      });
    },
    /**
     * Returns unitless duration
     * @param {String} duration - Css duration string
     */
    getUnitlessDuration(t) {
      let s = parseFloat(t.split(",")[0]);
      return t.includes("ms") ? s : s * 1e3;
    },
    /**
     * Recursive function to generate and test id uniqueness
     */
    getUid() {
      const t = `Ulu-C-${++yo}`;
      return document.getElementById(t) ? this.getUid() : t;
    }
  }
}, po = ["id", "aria-controls", "aria-expanded"], bo = ["id", "aria-hidden", "aria-labelledby"], wo = { class: "CollapsibleRegion__content-inner" };
function So(t, s, e, o, l, n) {
  return a(), h("div", {
    class: g(["CollapsibleRegion", {
      "CollapsibleRegion--open": l.isOpen,
      "CollapsibleRegion--closed": !l.isOpen,
      "CollapsibleRegion--transitioning": l.isTransitioning
    }]),
    onKeydown: s[1] || (s[1] = as((...r) => n.handleEscape && n.handleEscape(...r), ["esc"]))
  }, [
    m("button", {
      class: "CollapsibleRegion__toggle",
      id: l.toggleId,
      "aria-controls": l.contentId,
      "aria-expanded": l.isOpen,
      onClick: s[0] || (s[0] = (...r) => n.toggle && n.toggle(...r))
    }, [
      y(t.$slots, "toggle", { isOpen: l.isOpen }, () => [
        A(S(e.title), 1)
      ])
    ], 8, po),
    J(m("div", {
      class: "CollapsibleRegion__content",
      tabindex: "-1",
      ref: "content",
      id: l.contentId,
      "aria-hidden": !l.isOpen,
      "aria-labelledby": l.toggleId,
      style: F(n.contentStyles)
    }, [
      m("div", wo, [
        y(t.$slots, "default")
      ])
    ], 12, bo), [
      [dt, !l.isHidden]
    ])
  ], 34);
}
const ko = /* @__PURE__ */ p(vo, [["render", So]]), Co = {
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
  setup(t) {
    const { resolvedModifiers: s } = ce({ props: t, baseClass: "tag" });
    return { resolvedModifiers: s };
  }
};
function Ao(t, s, e, o, l, n) {
  const r = T("UluIcon");
  return a(), h("span", {
    class: g(["tag", [
      {
        "tag--small": e.small,
        "type-small": e.small,
        [`tag--${e.type}`]: e.type
      },
      o.resolvedModifiers
    ]])
  }, [
    e.icon ? (a(), k(r, {
      key: 0,
      definition: e.icon
    }, null, 8, ["definition"])) : w("", !0),
    y(t.$slots, "default", {}, () => [
      A(S(e.text), 1)
    ])
  ], 2);
}
const To = /* @__PURE__ */ p(Co, [["render", Ao]]), Ro = {
  name: "UluMenu",
  components: {
    UluIcon: N,
    UluTag: To
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
    handleItemClick(t, s) {
      s.click && s.click(t), this.$emit("itemClick", { item: s, event: t });
    }
  }
};
function Oo(t, s, e, o, l, n) {
  const r = T("UluIcon"), c = T("UluTag"), f = T("UluMenu", !0), d = rs("ulu-tooltip");
  return e.items?.length ? (a(), h("ul", {
    key: 0,
    class: g(e.classes.list)
  }, [
    (a(!0), h(x, null, O(e.items, (v, U) => (a(), h("li", {
      key: U,
      class: g([e.classes.item, v?.classes?.item])
    }, [
      J((a(), k(M(v.to || v.path ? "router-link" : v.click ? "button" : "a"), Q({ ref_for: !0 }, {
        ...v.to || v.path ? { to: v.to || v.path } : {},
        ...v.href ? { href: v.href || "#" } : {}
      }, {
        onClick: (E) => {
          n.handleItemClick(E, v);
        },
        class: [e.classes.link, v?.classes?.link],
        activeClass: e.classes.linkActive,
        exactActiveClass: e.classes.linkExactActive,
        "aria-label": e.iconOnly ? v.title : null,
        id: v.id
      }), {
        default: C(() => [
          y(t.$slots, "default", {
            item: v,
            index: U
          }, () => [
            v.icon ? (a(), k(r, {
              key: 0,
              definition: v.icon,
              class: g([e.classes.linkIcon, v?.classes?.linkIcon])
            }, null, 8, ["definition", "class"])) : w("", !0),
            m("span", {
              class: g([e.classes.linkText, v?.classes?.linkText])
            }, S(v.title), 3),
            v.tag ? (a(), k(c, Q({
              key: 1,
              ref_for: !0
            }, v.tag), null, 16)) : w("", !0)
          ])
        ]),
        _: 2
      }, 1040, ["onClick", "class", "activeClass", "exactActiveClass", "aria-label", "id"])), [
        [d, e.iconOnly ? v.title : v.tooltip || null]
      ]),
      !e.noChildren && v?.children?.length ? (a(), k(f, {
        key: 0,
        iconOnly: e.iconOnly,
        classes: e.classes,
        items: v.children
      }, null, 8, ["iconOnly", "classes", "items"])) : w("", !0)
    ], 2))), 128))
  ], 2)) : w("", !0);
}
const Ss = /* @__PURE__ */ p(Ro, [["render", Oo]]), Uo = {
  name: "UluMenuStack",
  components: {
    UluMenu: Ss
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
function xo(t, s, e, o, l, n) {
  const r = T("UluMenu");
  return a(), h("nav", {
    class: g(["menu-stack", {
      "menu-stack--hanging": e.hanging,
      "menu-stack--compact": e.compact
    }])
  }, [
    R(r, {
      items: e.items,
      classes: {
        list: "menu-stack__list",
        item: "menu-stack__item",
        link: "menu-stack__link",
        linkText: "menu-stack__link-text",
        linkIcon: "menu-stack__link-icon"
      },
      noChildren: e.noChildren
    }, null, 8, ["items", "noChildren"])
  ], 2);
}
const Io = /* @__PURE__ */ p(Uo, [["render", xo]]), zo = {
  name: "UluDropdown",
  components: {
    UluPopover: _t,
    UluMenuStack: Io
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
function Eo(t, s, e, o, l, n) {
  const r = T("UluMenuStack"), c = T("UluPopover");
  return a(), k(c, { classes: e.popoverClasses }, {
    trigger: C(({ isOpen: f }) => [
      y(t.$slots, "default", { isOpen: f })
    ]),
    content: C(() => [
      R(r, { items: e.items }, null, 8, ["items"])
    ]),
    _: 3
  }, 8, ["classes"]);
}
const pu = /* @__PURE__ */ p(zo, [["render", Eo]]), yt = B(!1), je = {
  start: [],
  end: []
};
function vt() {
  window.removeEventListener("resize", vt), yt.value = !0, je.start.forEach((t) => t());
}
function $o() {
  yt.value = !1, je.end.forEach((t) => t()), window.addEventListener("resize", vt);
}
window.addEventListener("resize", vt), window.addEventListener("resize", Ve($o, 300));
function es(t, s) {
  return t.push(s), () => {
    const e = t.findIndex((o) => o === s);
    e > -1 && t.splice(e);
  };
}
function Fo() {
  return {
    resizing: yt,
    onResizeStart(t) {
      return es(je.start, t);
    },
    onResizeEnd(t) {
      return es(je.end, t);
    }
  };
}
const Mo = { class: "layout-flex-baseline" }, Bo = { class: "type-word-break" }, bu = {
  __name: "UluOverflowPopover",
  props: {
    /**
     * Default icon for overflow popover trigger
     */
    triggerIcon: String
  },
  setup(t) {
    const { resizing: s, onResizeEnd: e } = Fo(), o = B(null), l = B(!1), n = () => {
      cs(() => {
        const c = o.value;
        l.value = c.offsetWidth < c.scrollWidth;
      });
    }, r = e(n);
    return oi(n), li(r), (c, f) => (a(), h("div", Mo, [
      m("div", {
        class: "type-truncate",
        ref_key: "text",
        ref: o
      }, [
        y(c.$slots, "default")
      ], 512),
      l.value && !z(s) ? (a(), k(_t, {
        key: 0,
        triggerAlt: "Show Full Text",
        size: "large"
      }, {
        trigger: C(() => [
          R(N, {
            type: "ellipsis",
            definition: t.triggerIcon
          }, null, 8, ["definition"])
        ]),
        content: C(() => [
          m("div", Bo, [
            y(c.$slots, "default")
          ])
        ]),
        _: 3
      })) : w("", !0)
    ]));
  }
}, wu = {
  __name: "UluTab",
  setup(t) {
    return (s, e) => (a(), k(z(fi), null, {
      default: C((o) => [
        y(s.$slots, "default", D(W(o)))
      ]),
      _: 3
    }));
  }
}, Su = /* @__PURE__ */ Object.assign({
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
  setup(t) {
    return (s, e) => (a(), k(z(hi), {
      defaultIndex: t.defaultIndex,
      vertical: t.vertical
    }, {
      default: C((o) => [
        m("div", {
          class: g(["tabs", {
            "tabs--vertical": t.vertical
          }])
        }, [
          y(s.$slots, "default", D(W(o)))
        ], 2)
      ]),
      _: 3
    }, 8, ["defaultIndex", "vertical"]));
  }
}), ku = {
  __name: "UluTabList",
  setup(t) {
    return (s, e) => (a(), k(z(mi), { class: "tabs__tablist" }, {
      default: C(() => [
        y(s.$slots, "default")
      ]),
      _: 3
    }));
  }
}, Cu = {
  __name: "UluTabPanel",
  setup(t) {
    return (s, e) => (a(), k(z(_i), null, {
      default: C((o) => [
        y(s.$slots, "default", D(W(o)))
      ]),
      _: 3
    }));
  }
}, Au = {
  __name: "UluTabPanels",
  setup(t) {
    return (s, e) => (a(), k(z(gi), null, {
      default: C((o) => [
        y(s.$slots, "default", D(W(o)))
      ]),
      _: 3
    }));
  }
}, Ho = {
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
  setup(t) {
    const { resolvedModifiers: s } = ce({ props: t, baseClass: "button" });
    return { resolvedModifiers: s };
  },
  computed: {
    resolvedAriaLabel() {
      const t = this.alt || this.iconOnly && this.text;
      return t || null;
    },
    classes() {
      const t = [], { size: s } = this;
      return s && t.push(`button--${s}`), t;
    },
    element() {
      return this.to ? ft : this.href ? "a" : "button";
    },
    attrs() {
      const { to: t, href: s, download: e, target: o } = this, l = t ? { to: t } : s ? { href: s } : {};
      return s && (o && (l.target = o), e && (l.download = typeof e == "string" ? e : !0)), l;
    }
  }
}, Lo = { key: 1 };
function Po(t, s, e, o, l, n) {
  const r = T("UluIcon");
  return a(), k(M(n.element), Q({
    class: ["button", [
      {
        "button--transparent": e.transparent,
        "button--primary": e.primary,
        "button--secondary": e.secondary,
        "button--outline": e.outline,
        "button--small": e.small,
        "button--large": e.large,
        "button--icon": e.iconOnly,
        "no-margin": e.noMargin
      },
      n.classes,
      o.resolvedModifiers
    ]]
  }, n.attrs, { "aria-label": n.resolvedAriaLabel }), {
    default: C(() => [
      y(t.$slots, "before"),
      e.icon && (e.iconBefore || e.iconOnly) ? (a(), k(r, {
        key: 0,
        definition: e.icon,
        class: "button__icon"
      }, null, 8, ["definition"])) : w("", !0),
      (t.$slots.default || e.text) && !e.iconOnly ? (a(), h("span", Lo, [
        y(t.$slots, "default", {}, () => [
          A(S(e.text), 1)
        ])
      ])) : w("", !0),
      e.icon && !e.iconBefore && !e.iconOnly ? (a(), k(r, {
        key: 2,
        definition: e.icon,
        class: "button__icon"
      }, null, 8, ["definition"])) : w("", !0),
      y(t.$slots, "after")
    ]),
    _: 3
  }, 16, ["class", "aria-label"]);
}
const jo = /* @__PURE__ */ p(Ho, [["render", Po]]), Vo = {
  name: "UluAlert",
  components: {
    UluButton: jo,
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
  setup(t) {
    const { resolvedModifiers: s } = ce({
      props: t,
      baseClass: "callout",
      internal: $(() => ({
        [t.type]: t.type,
        compact: t.compact
      }))
    });
    return { resolvedModifiers: s };
  }
}, Do = { class: "layout-flex" }, Wo = { class: "type-small" }, No = {
  key: 0,
  class: "margin-left-auto align-self-center"
};
function Xo(t, s, e, o, l, n) {
  const r = T("UluIcon");
  return a(), h("div", {
    class: g(["callout", o.resolvedModifiers])
  }, [
    m("div", Do, [
      R(r, {
        class: g(["type-large margin-right-small", `color-${e.type}`]),
        type: e.type,
        definition: e.icon
      }, null, 8, ["class", "type", "definition"]),
      m("div", Wo, [
        m("div", null, [
          y(t.$slots, "title", {}, () => [
            m("strong", null, S(e.title), 1)
          ])
        ]),
        m("div", null, [
          y(t.$slots, "description", {}, () => [
            A(S(e.description), 1)
          ])
        ])
      ]),
      t.$slots.action ? (a(), h("div", No, [
        y(t.$slots, "action")
      ])) : w("", !0)
    ])
  ], 2);
}
const Tu = /* @__PURE__ */ p(Vo, [["render", Xo]]), Yo = {
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
      const { click: t, to: s, href: e } = this;
      return t ? "button" : s ? ft : e ? "a" : "span";
    }
  }
}, Ko = ["aria-hidden"], qo = {
  key: 2,
  class: "hidden-visually"
};
function Go(t, s, e, o, l, n) {
  return a(), k(M(n.element), {
    class: g(["badge", [
      e.size ? `badge--${e.size}` : null,
      e.type ? `badge--${e.type}` : null,
      { "badge--clickable": n.isInteractive }
    ]]),
    to: e.to,
    href: e.href,
    onClick: e.click
  }, {
    default: C(() => [
      m("span", {
        class: g(["badge__inner", { "skeleton__background-color": e.skeleton }])
      }, [
        e.text ? (a(), h("span", {
          key: 0,
          "aria-hidden": e.alt ? "true" : null
        }, S(e.text), 9, Ko)) : y(t.$slots, "default", { key: 1 }),
        e.alt ? (a(), h("span", qo, S(e.alt), 1)) : w("", !0)
      ], 2)
    ]),
    _: 3
  }, 8, ["class", "to", "href", "onClick"]);
}
const Zo = /* @__PURE__ */ p(Yo, [["render", Go]]), Jo = {
  name: "UluBadgeStack",
  components: {
    UluBadge: Zo
  },
  props: {
    /**
     * Array of props for each badge
     */
    items: Array
  }
}, Qo = { class: "badge-stack" };
function el(t, s, e, o, l, n) {
  const r = T("UluBadge");
  return a(), h("ul", Qo, [
    (a(!0), h(x, null, O(e.items, (c, f) => (a(), h("li", {
      class: "badge-stack__item",
      key: f
    }, [
      R(r, Q({ ref_for: !0 }, c), null, 16)
    ]))), 128))
  ]);
}
const Ru = /* @__PURE__ */ p(Jo, [["render", el]]), tl = {
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
  setup(t) {
    const { resolvedModifiers: s } = ce({ props: t, baseClass: "callout" });
    return { resolvedModifiers: s };
  }
};
function sl(t, s, e, o, l, n) {
  return a(), h("div", {
    class: g(["callout", [o.resolvedModifiers, { "full-height": e.fullHeight }]])
  }, [
    y(t.$slots, "default")
  ], 2);
}
const Ou = /* @__PURE__ */ p(tl, [["render", sl]]), ts = (t, s) => {
  const e = !(s.to || s.href);
  return e || console.warn("'titleHref' and 'titleTo' can't be used with to or href (nesting links)"), e;
}, nl = {
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
      validator: ts
    },
    /**
     * Will make title a link to href
     */
    titleHref: {
      type: String,
      validator: ts
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
    const { proxyClickOptions: t, proxyClick: s, titleHref: e, titleTo: o } = this;
    return {
      proxyClickEnabled: s && (e || o) || null,
      resolvedProxyOptions: {
        selectorPrevent: "input, select, textarea, button, a, [tabindex='-1']",
        mousedownDurationPrevent: 250,
        ...t
      },
      cursorStyle: null,
      proxyStart: null,
      shouldProxy: !1
    };
  },
  setup(t) {
    const { resolvedModifiers: s } = ce({ props: t, baseClass: "card" });
    return { resolvedModifiers: s };
  },
  computed: {
    resolvedElement() {
      const { cardElement: t, to: s, href: e } = this;
      return s ? ft : e ? "a" : t;
    }
  },
  methods: {
    onMousedown({ target: t, timeStamp: s }) {
      if (!this.proxyClickEnabled) return;
      const { resolvedProxyOptions: e } = this, { selectorPrevent: o } = e;
      this.shouldProxy = !1, t.matches(o) || (this.shouldProxy = !0, this.proxyStart = s);
    },
    onMouseup({ timeStamp: t }) {
      if (!this.proxyClickEnabled) return;
      const { link: s } = this.$refs, { resolvedProxyOptions: e } = this, { mousedownDurationPrevent: o } = e;
      this.shouldProxy && t - this.proxyStart < o && s.click();
    }
  }
}, il = { class: "card__body" }, ol = { class: "card__main" }, ll = ["href", "target"], rl = {
  key: 0,
  class: "card__aside"
}, al = ["src", "alt"], cl = {
  key: 1,
  class: "card__footer"
};
function ul(t, s, e, o, l, n) {
  const r = T("router-link");
  return a(), k(M(n.resolvedElement), {
    class: g(["card", [
      {
        "card--horizontal": e.horizontal || e.horizontalCenter,
        "card--horizontal-center": e.horizontalCenter,
        "card--overlay": e.overlay
      },
      o.resolvedModifiers
    ]]),
    onMousedown: n.onMousedown,
    onMouseup: n.onMouseup,
    style: F({ cursor: l.cursorStyle }),
    target: e.target,
    to: e.to,
    href: e.href,
    "data-ulu-proxy-click-init": l.proxyClickEnabled
  }, {
    default: C(() => [
      m("div", il, [
        m("div", ol, [
          (a(), k(M(e.titleElement), {
            class: g(["card__title", e.classes.title])
          }, {
            default: C(() => [
              e.titleTo ? (a(), k(r, {
                key: 0,
                class: "card__title-link",
                to: e.titleTo,
                ref: "link"
              }, {
                default: C(() => [
                  y(t.$slots, "title", {}, () => [
                    A(S(e.title), 1)
                  ])
                ]),
                _: 3
              }, 8, ["to"])) : e.titleHref ? (a(), h("a", {
                key: 1,
                class: "card__title-link",
                href: e.titleHref,
                target: e.titleTarget,
                ref: "link"
              }, [
                y(t.$slots, "title", {}, () => [
                  A(S(e.title), 1)
                ])
              ], 8, ll)) : y(t.$slots, "title", { key: 2 }, () => [
                A(S(e.title), 1)
              ])
            ]),
            _: 3
          }, 8, ["class"])),
          y(t.$slots, "body")
        ]),
        t.$slots.body ? (a(), h("div", rl, [
          y(t.$slots, "aside")
        ])) : w("", !0)
      ]),
      t.$slots.image || e.imageSrc ? (a(), h("div", {
        key: 0,
        class: g(["card__image", [
          { "card__image--icon": e.imageIcon },
          e.classes.image
        ]])
      }, [
        y(t.$slots, "image", {}, () => [
          m("img", {
            src: e.imageSrc,
            alt: e.imageAlt
          }, null, 8, al)
        ])
      ], 2)) : w("", !0),
      t.$slots.footer ? (a(), h("div", cl, [
        y(t.$slots, "footer")
      ])) : w("", !0)
    ]),
    _: 3
  }, 40, ["onMousedown", "onMouseup", "class", "style", "target", "to", "href", "data-ulu-proxy-click-init"]);
}
const Uu = /* @__PURE__ */ p(nl, [["render", ul]]), dl = {
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
function fl(t, s, e, o, l, n) {
  return a(), h("dl", {
    class: g(e.classes.list)
  }, [
    (a(!0), h(x, null, O(e.items, (r, c) => (a(), h("div", {
      key: c,
      class: g(e.classes.item)
    }, [
      m("dt", {
        class: g(e.classes.term)
      }, [
        y(t.$slots, "term", {
          item: r,
          index: c
        }, () => [
          A(S(r.term), 1)
        ])
      ], 2),
      m("dd", {
        class: g(e.classes.description)
      }, [
        y(t.$slots, "description", {
          item: r,
          index: c
        }, () => [
          A(S(r.description), 1)
        ])
      ], 2)
    ], 2))), 128))
  ], 2);
}
const xu = /* @__PURE__ */ p(dl, [["render", fl]]), hl = {
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
}, ml = ["href", "target"], _l = { class: "external-link__text" };
function gl(t, s, e, o, l, n) {
  const r = T("UluIcon");
  return a(), h("a", {
    class: "external-link",
    href: e.href,
    target: e.target
  }, [
    m("span", _l, [
      y(t.$slots, "default", {}, () => [
        A(S(e.text), 1)
      ])
    ]),
    R(r, {
      class: "external-link__icon margin-left-small-x display-inline",
      type: "externalLink",
      definition: e.icon
    }, null, 8, ["definition"])
  ], 8, ml);
}
const Iu = /* @__PURE__ */ p(hl, [["render", gl]]), yl = {
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
function vl(t, s, e, o, l, n) {
  return a(), k(M(n.listElement), {
    class: g([
      {
        "list-ordered": e.ordered,
        "list-unordered": e.unordered,
        "list-lines": e.lines,
        "list-compact": e.compact
      },
      e.classes.list
    ]),
    style: F({
      listStyleType: e.listStyleType
    }),
    reversed: e.reversed,
    start: e.start
  }, {
    default: C(() => [
      (a(!0), h(x, null, O(e.items, (r, c) => (a(), h("li", {
        key: c,
        class: g(e.classes.listItem)
      }, [
        y(t.$slots, "default", {
          item: r,
          index: c
        }, () => [
          A(S(r), 1)
        ])
      ], 2))), 128))
    ]),
    _: 3
  }, 8, ["class", "style", "reversed", "start"]);
}
const zu = /* @__PURE__ */ p(yl, [["render", vl]]), pl = {}, bl = { id: "main-content" };
function wl(t, s) {
  return a(), h("main", bl, [
    y(t.$slots, "default")
  ]);
}
const Eu = /* @__PURE__ */ p(pl, [["render", wl]]), Sl = {
  name: "UluSpokeSpinner",
  props: {
    /**
     * Type modifier for spinner (ie match scss style name)
     */
    type: String
  },
  computed: {
    modifierClass() {
      const { type: t } = this;
      return t ? `spoke-spinner--${t}` : null;
    }
  }
};
function kl(t, s, e, o, l, n) {
  return a(), h("div", {
    class: g(["spoke-spinner", n.modifierClass])
  }, s[0] || (s[0] = [
    m("div", { class: "spoke-spinner__spinner" }, [
      m("div"),
      m("div"),
      m("div"),
      m("div"),
      m("div"),
      m("div"),
      m("div"),
      m("div"),
      m("div"),
      m("div"),
      m("div"),
      m("div")
    ], -1)
  ]), 2);
}
const $u = /* @__PURE__ */ p(Sl, [["render", kl]]), Cl = {
  name: "UluCheckboxMenu",
  props: {
    options: Array
  },
  methods: {
    getId(t) {
      return `checkbox-menu-opt-${t}`;
    }
  }
}, Al = { class: "site-menu site-form" }, Tl = { class: "site-menu__checkbox" }, Rl = ["id", "onUpdate:modelValue"], Ol = ["for"];
function Ul(t, s, e, o, l, n) {
  return a(), h("ul", Al, [
    (a(!0), h(x, null, O(e.options, (r, c) => (a(), h("li", {
      class: "site-menu__item",
      key: c
    }, [
      m("div", Tl, [
        J(m("input", {
          type: "checkbox",
          id: n.getId(c),
          "onUpdate:modelValue": (f) => r.checked = f
        }, null, 8, Rl), [
          [ds, r.checked]
        ]),
        m("label", {
          for: n.getId(c)
        }, [
          y(t.$slots, "default", {}, () => [
            A(S(r?.title || r?.text), 1)
          ])
        ], 8, Ol)
      ])
    ]))), 128))
  ]);
}
const Fu = /* @__PURE__ */ p(Cl, [["render", Ul]]), xl = {
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
      const { size: t } = this.file, s = t / 1e6, e = t / 1e3, o = (l) => parseFloat(l.toFixed(2));
      return s > 1 ? `${o(s)}Mb` : e > 1 ? `${o(e)}Kb` : `${o(t)}B`;
    }
  }
}, Il = ["href", "download"], zl = { class: "margin-left-small-x" }, El = { class: "tag tag--small tag--outline type-small-x" };
function $l(t, s, e, o, l, n) {
  const r = T("FaIcon");
  return a(), h("a", {
    class: "layout-flex-baseline",
    href: n.fileUrl,
    download: e.file.name
  }, [
    R(r, {
      class: "ui-icon",
      icon: ["far", t.$site.getIcon("file")]
    }, null, 8, ["icon"]),
    m("span", zl, [
      A(S(e.file.name) + " ", 1),
      m("span", El, S(n.fileSize), 1)
    ])
  ], 8, Il);
}
const Mu = /* @__PURE__ */ p(xl, [["render", $l]]), Fl = {
  key: 0,
  class: "site-dropzone__errors site-form__description site-form__error"
}, Ml = { class: "list-unordered" }, Bl = {
  key: 1,
  class: "site-dropzone__display margin-top"
}, Bu = {
  __name: "UluFormDropzone",
  emits: ["filesChange"],
  setup(t, { emit: s }) {
    const e = B([]), o = B([]), l = s, { getRootProps: n, getInputProps: r, isDragActive: c } = yi({
      onDrop: (f, d) => {
        d ? o.value = d.map((v) => v) : o.value = [], f.length && (e.value = f.map((v) => v), l("filesChange", e.value));
      },
      accept: [".png", ".jpg", ".jpeg"]
    });
    return (f, d) => {
      const v = T("FilesDisplay");
      return a(), h("div", {
        class: g(["site-dropzone site-form__item site-form__item--file", { "is-danger": o.value.length }])
      }, [
        m("div", Q({
          class: ["site-dropzone__target", {
            "site-dropzone__target--dropping": z(c)
          }]
        }, z(n)()), [
          m("input", D(W(z(r)())), null, 16),
          d[0] || (d[0] = m("div", { class: "site-dropzone__instructions" }, [
            m("strong", { class: "type-normal" }, " Drag 'n' drop files here, or click to select ")
          ], -1))
        ], 16),
        d[3] || (d[3] = m("p", { class: "site-form__description" }, [
          m("em", null, "Only images allowed (.jpg, .png)")
        ], -1)),
        o.value.length ? (a(), h("div", Fl, [
          m("ul", Ml, [
            (a(!0), h(x, null, O(o.value, (U, E) => (a(), h("li", { key: E }, [
              m("strong", null, S(U.file.name), 1),
              d[1] || (d[1] = A(": ")),
              m("span", null, S(U.errors.map((P) => P.message).join()), 1)
            ]))), 128))
          ])
        ])) : w("", !0),
        e.value.length ? (a(), h("div", Bl, [
          d[2] || (d[2] = m("strong", null, "Files", -1)),
          R(v, {
            class: "site-dropzone__list",
            files: e.value
          }, null, 8, ["files"])
        ])) : w("", !0)
      ], 2);
    };
  }
};
let Hl = 0;
const Ll = {
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
      id: `file-input-id-${++Hl}`
    };
  },
  methods: {
    onChangeFile(t) {
      this.$emit("filesChange", t.target.files);
    }
  }
}, Pl = { class: "site-form__item site-form__item--file" }, jl = ["for"], Vl = ["multiple", "id"];
function Dl(t, s, e, o, l, n) {
  return a(), h("div", Pl, [
    m("label", {
      class: g({ "hidden-visually": e.labelHidden }),
      for: l.id
    }, [
      y(t.$slots, "label", {}, () => [
        A(S(e.label), 1)
      ])
    ], 10, jl),
    m("input", Q({
      type: "file",
      onChange: s[0] || (s[0] = (...r) => n.onChangeFile && n.onChangeFile(...r)),
      multiple: e.multiple,
      id: l.id
    }, e.inputAttrs), null, 16, Vl)
  ]);
}
const Hu = /* @__PURE__ */ p(Ll, [["render", Dl]]), Wl = {
  name: "FormMessage",
  props: {
    warning: Boolean,
    error: Boolean
  }
};
function Nl(t, s, e, o, l, n) {
  const r = T("FaIcon");
  return a(), h("p", {
    class: g(["site-form__description", {
      "site-form__error": e.error,
      "site-form__warning": e.warning
    }])
  }, [
    e.error ? (a(), k(r, {
      key: 0,
      icon: t.$site.getIcon("error")
    }, null, 8, ["icon"])) : w("", !0),
    e.warning ? (a(), k(r, {
      key: 1,
      icon: t.$site.getIcon("warning")
    }, null, 8, ["icon"])) : w("", !0),
    y(t.$slots, "default")
  ], 2);
}
const Lu = /* @__PURE__ */ p(Wl, [["render", Nl]]);
let Xl = 0;
const Yl = {
  name: "FormSelect",
  props: {
    label: String,
    modelValue: String,
    options: Array,
    labelHidden: Boolean
  },
  data() {
    return {
      id: `select-id-${++Xl}`
    };
  }
}, Kl = { class: "site-form__item site-form__item--select" }, ql = ["for"], Gl = ["id", "value"], Zl = ["value"];
function Jl(t, s, e, o, l, n) {
  return a(), h("div", Kl, [
    m("label", {
      class: g({ "hidden-visually": e.labelHidden }),
      for: l.id
    }, [
      y(t.$slots, "default", {}, () => [
        A(S(e.label), 1)
      ])
    ], 10, ql),
    m("select", {
      id: l.id,
      value: e.modelValue,
      onInput: s[0] || (s[0] = (r) => t.$emit("update:modelValue", r.target.value))
    }, [
      s[1] || (s[1] = m("option", {
        disabled: "",
        value: ""
      }, "Please select one", -1)),
      (a(!0), h(x, null, O(e.options, (r, c) => (a(), h("option", {
        key: c,
        value: r.value
      }, S(r.text), 9, Zl))), 128))
    ], 40, Gl)
  ]);
}
const Pu = /* @__PURE__ */ p(Yl, [["render", Jl]]);
let Ql = 0;
const er = {
  name: "FormText",
  props: {
    label: String,
    modelValue: String,
    labelHidden: Boolean
  },
  data() {
    return {
      id: `text-input-id-${++Ql}`
    };
  }
}, tr = { class: "site-form__item site-form__item--text" }, sr = ["for"], nr = ["value", "id"];
function ir(t, s, e, o, l, n) {
  return a(), h("div", tr, [
    m("label", {
      class: g({ "hidden-visually": e.labelHidden }),
      for: l.id
    }, [
      y(t.$slots, "default", {}, () => [
        A(S(e.label), 1)
      ])
    ], 10, sr),
    m("input", {
      type: "text",
      value: e.modelValue,
      onInput: s[0] || (s[0] = (r) => t.$emit("update:modelValue", r.target.value)),
      id: l.id
    }, null, 40, nr)
  ]);
}
const ju = /* @__PURE__ */ p(er, [["render", ir]]), or = {
  name: "SearchForm",
  props: {
    placeholder: {
      type: String,
      default: "Titles, keyword…"
    }
  }
}, lr = { class: "form-theme search-form type-small" }, rr = { class: "search-form__field" }, ar = ["placeholder"], cr = {
  class: "search-form__submit button button--primary",
  "aria-label": "Submit Search"
};
function ur(t, s, e, o, l, n) {
  const r = T("FaIcon");
  return a(), h("div", lr, [
    m("div", rr, [
      s[0] || (s[0] = m("label", { class: "hidden-visually" }, "Search", -1)),
      m("input", {
        class: "search-form__input",
        type: "text",
        id: "example-input",
        placeholder: e.placeholder
      }, null, 8, ar)
    ]),
    m("button", cr, [
      R(r, {
        icon: t.$site.getIcon("search")
      }, null, 8, ["icon"])
    ])
  ]);
}
const Vu = /* @__PURE__ */ p(or, [["render", ur]]), dr = {
  name: "AdaptiveLayout",
  inject: ["uluIsMobile"]
};
function fr(t, s, e, o, l, n) {
  return !n.uluIsMobile || !t.$slots.mobile ? y(t.$slots, "default", { key: 0 }) : y(t.$slots, "mobile", { key: 1 });
}
const Du = /* @__PURE__ */ p(dr, [["render", fr]]);
function hr(t) {
  var s;
  return t = t.replace(/^[^-_a-zA-Z]+/, "").replace(/^-(?:[-0-9]+)/, "-"), s = t && t.replace(/[^-_a-zA-Z0-9]+/g, "-"), s.toLowerCase();
}
function mr(t, s = {
  columnFirst: "position-column-first",
  columnLast: "position-column-last",
  rowFirst: "position-row-first",
  rowLast: "position-row-last"
}) {
  const e = [...t.children], o = [];
  let l;
  e.forEach((n) => {
    const r = n.getBoundingClientRect().y;
    l !== r && o.push([]), o[o.length - 1].push(n), l = r, n.classList.remove(...Object.values(s));
  }), o.forEach((n, r) => {
    r === 0 && n.forEach((c) => c.classList.add(s.rowFirst)), r == o.length - 1 && n.forEach((c) => c.classList.add(s.rowLast)), n.forEach((c, f) => {
      f === 0 && c.classList.add(s.columnFirst), f == n.length - 1 && c.classList.add(s.columnLast);
    });
  });
}
const _r = {
  name: "UluDataGrid",
  async mounted() {
    const t = () => mr(this.$el);
    t(), this.resizeHandler = Ve(t, 200, !1, this), window.addEventListener("resize", this.resizeHandler);
  },
  beforeUnmount() {
    this.resizeHandler && window.removeEventListener("resize", this.resizeHandler);
  }
};
function gr(t, s, e, o, l, n) {
  return a(), h("div", null, [
    y(t.$slots, "default")
  ]);
}
const Wu = /* @__PURE__ */ p(_r, [["render", gr]]), yr = {
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
}, vr = { class: "rail rail--title-rail" }, pr = {
  key: 0,
  class: "rail__item rail__item--pull"
};
function br(t, s, e, o, l, n) {
  const r = T("UluIcon");
  return a(), h("div", vr, [
    m("div", {
      class: g(["rail__item rail__item--title", e.classes.itemTitle])
    }, [
      (a(), k(M(e.titleElement), {
        class: g(["layout-flex type-max-width-small no-margin", e.classes.title]),
        style: F({ alignItems: e.iconAlign })
      }, {
        default: C(() => [
          e.icon || e.iconType ? (a(), k(r, {
            key: 0,
            class: g(e.classes.icon),
            type: e.iconType,
            definition: e.icon
          }, null, 8, ["class", "type", "definition"])) : w("", !0),
          y(t.$slots, "default", {}, () => [
            A(S(e.title), 1)
          ])
        ]),
        _: 3
      }, 8, ["class", "style"]))
    ], 2),
    t.$slots.end ? (a(), h("div", pr, [
      y(t.$slots, "end")
    ])) : w("", !0)
  ]);
}
const Nu = /* @__PURE__ */ p(yr, [["render", br]]), wr = {
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
function Sr(t, s, e, o, l, n) {
  const r = T("router-link"), c = T("UluIcon");
  return e.items.length ? (a(), h("nav", {
    key: 0,
    class: g(e.classes.nav),
    "aria-label": "Breadcrumb"
  }, [
    m("ul", {
      class: g(e.classes.list)
    }, [
      (a(!0), h(x, null, O(e.items, (f, d) => (a(), h("li", {
        key: d,
        class: g(e.classes.item)
      }, [
        R(r, {
          to: f.to,
          class: g(e.classes.link),
          "aria-current": f.current ? "page" : null
        }, {
          default: C(() => [
            y(t.$slots, "default", { item: f }, () => [
              A(S(f.title), 1)
            ])
          ]),
          _: 2
        }, 1032, ["to", "class", "aria-current"]),
        d < e.items.length - 1 ? y(t.$slots, "separator", { key: 0 }, () => [
          R(c, {
            class: g(e.classes.separator),
            type: "pathSeparator",
            definition: e.separatorIcon
          }, null, 8, ["class", "definition"])
        ]) : w("", !0)
      ], 2))), 128))
    ], 2)
  ], 2)) : w("", !0);
}
const Xu = /* @__PURE__ */ p(wr, [["render", Sr]]), kr = {
  name: "UluNavStrip",
  components: {
    UluMenu: Ss
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
function Cr(t, s, e, o, l, n) {
  const r = T("UluMenu");
  return a(), h("nav", {
    class: g(["nav-strip", {
      "nav-strip--rule": e.rule,
      "nav-strip--center": e.center,
      "nav-strip--right": e.right
    }])
  }, [
    R(r, {
      items: e.items,
      classes: {
        list: "nav-strip__list",
        item: "nav-strip__item",
        link: "nav-strip__link",
        linkExactActive: "is-active"
      }
    }, null, 8, ["items"])
  ], 2);
}
const Yu = /* @__PURE__ */ p(kr, [["render", Cr]]), Ar = {}, Tr = {
  class: "site-skip-link hidden-visually-focusable",
  href: "#main-content"
};
function Rr(t, s) {
  return a(), h("a", Tr, " Skip to main content ");
}
const Ku = /* @__PURE__ */ p(Ar, [["render", Rr]]), Or = {
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
function Ur(t, s, e, o, l, n) {
  return e.text != null ? (a(), k(M(e.element), { key: 0 }, {
    default: C(() => [
      A(S(e.text), 1)
    ]),
    _: 1
  })) : w("", !0);
}
const qu = /* @__PURE__ */ p(Or, [["render", Ur]]), xr = {}, Ir = { style: { display: "none" } };
function zr(t, s) {
  return a(), h("span", Ir);
}
const Gu = /* @__PURE__ */ p(xr, [["render", zr]]), Er = {};
function $r(t, s) {
  const e = T("router-view");
  return a(), k(e);
}
const Zu = /* @__PURE__ */ p(Er, [["render", $r]]);
function Re(t = 0, s = 100) {
  return t = Math.ceil(t), s = Math.floor(s), Math.floor(Math.random() * (s - t) + t);
}
const Fr = {
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
      const { imageId: t } = this, { width: s, height: e } = this.size;
      return `https://picsum.photos/${t ? `id/${t}/` : ""}${s}/${e}`;
    },
    size() {
      const { random: t, width: s, height: e } = this;
      return t ? {
        width: Re(500, 1e3),
        height: Re(500, 1e3)
      } : { width: s, height: e };
    }
  }
}, Mr = ["src", "alt"];
function Br(t, s, e, o, l, n) {
  return a(), h("img", {
    src: n.src,
    alt: e.alt
  }, null, 8, Mr);
}
const Ju = /* @__PURE__ */ p(Fr, [["render", Br]]), Hr = {
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
function Lr(t, s, e, o, l, n) {
  return a(!0), h(x, null, O(parseInt(e.amount), (r) => (a(), k(M(e.element), { key: r }, {
    default: C(() => s[0] || (s[0] = [
      A(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed semper erat tincidunt tellus vestibulum dictum. Fusce vel augue commodo, egestas diam sed, accumsan leo. Maecenas congue nec nisl et ullamcorper. Maecenas tincidunt, tortor et viverra eleifend, enim leo vestibulum ipsum, quis placerat mi nisi nec ex. Vivamus a justo volutpat, scelerisque elit eget, lacinia ex. Phasellus dapibus sollicitudin tortor, vitae suscipit nunc condimentum ut. Cras suscipit feugiat nibh nec consectetur. Phasellus vitae quam blandit, cursus metus ut, placerat mi. Sed tempor lacus non est interdum imperdiet nec quis metus. Praesent vel eleifend diam. Donec tincidunt eget purus sed posuere. ")
    ])),
    _: 2,
    __: [0]
  }, 1024))), 128);
}
const Qu = /* @__PURE__ */ p(Hr, [["render", Lr]]), Pr = {
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
      default: (t) => t.meta?.title
    }
  },
  watch: {
    "$route.path"(t, s) {
      if (this.$route.hash)
        return;
      const e = this.validator(t, s, this.$route), o = this.exclude.some((l) => l.endsWith("*") ? t.startsWith(l.slice(0, l.length - 1)) : t === l);
      e && !o && this.$refs.el.focus();
    }
  },
  computed: {
    title() {
      const t = this.getTitle(this.$route);
      return t || console.warn("RouteAnnouncer: No page title!"), t;
    }
  }
};
function jr(t, s, e, o, l, n) {
  return n.title ? (a(), h("p", {
    key: 0,
    tabindex: "-1",
    class: "hidden-visually",
    ref: "el"
  }, S(n.title), 513)) : w("", !0);
}
const ed = /* @__PURE__ */ p(Pr, [["render", jr]]), Vr = {
  name: "AnimateNumber",
  props: {
    /**
     * Number to animate as it changes
     */
    value: Number
  },
  watch: {
    value() {
      vi.to(this, {
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
function Dr(t, s, e, o, l, n) {
  return a(), h("span", null, [
    y(t.$slots, "default", { currentValue: l.currentValue }, () => [
      A(S(l.currentValue), 1)
    ])
  ]);
}
const td = /* @__PURE__ */ p(Vr, [["render", Dr]]), Wr = {
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
      const { amount: t, total: s } = this;
      return t / s * 100;
    },
    defPercentage() {
      const { deficit: t, total: s } = this;
      return t ? t / s * 100 : 0;
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
}, Nr = { class: "progress-bar__header" }, Xr = {
  key: 0,
  class: "progress-bar__icon"
}, Yr = { class: "hidden-visually" }, Kr = { class: "progress-bar__track" }, qr = { class: "progress-bar__values" }, Gr = { class: "progress-bar__value progress-bar__value--amount" }, Zr = {
  key: 0,
  class: "progress-bar__value progress-bar__value--deficit color-status is-danger"
}, Jr = { class: "progress-bar__value progress-bar__value--total" };
function Qr(t, s, e, o, l, n) {
  const r = T("StatusIcon");
  return a(), h("div", {
    class: g(["progress-bar", {
      "progress-bar--small": e.small,
      "progress-bar--icon-left": e.iconOnLeft,
      "type-small": e.small
    }])
  }, [
    m("div", Nr, [
      m("strong", {
        class: g(["progress-bar__label", {
          "type-normal": e.small,
          "hidden-visually": e.labelHidden
        }])
      }, S(e.label), 3),
      n.status ? (a(), h("div", Xr, [
        R(r, {
          type: n.status.type
        }, null, 8, ["type"]),
        m("span", Yr, S(n.status.message), 1)
      ])) : w("", !0)
    ]),
    m("div", Kr, [
      m("div", {
        class: "progress-bar__bar",
        style: F(`width: ${n.percentage}%`)
      }, null, 4),
      e.deficit ? (a(), h("div", {
        key: 0,
        class: "progress-bar__bar--deficit",
        style: F(`width: ${n.defPercentage}%`)
      }, null, 4)) : w("", !0)
    ]),
    m("div", qr, [
      m("div", Gr, [
        s[0] || (s[0] = m("strong", { class: "hidden-visually" }, "Amount:", -1)),
        A(" " + S(e.amount), 1)
      ]),
      e.deficit > 0 ? (a(), h("div", Zr, [
        s[1] || (s[1] = m("strong", { class: "hidden-visually" }, "Deficit: ", -1)),
        A(" -" + S(e.deficit), 1)
      ])) : w("", !0),
      m("div", Jr, [
        s[2] || (s[2] = m("strong", { class: "hidden-visually" }, "Total:", -1)),
        A(" " + S(e.total), 1)
      ])
    ])
  ], 2);
}
const sd = /* @__PURE__ */ p(Wr, [["render", Qr]]);
let ea = 0;
const ta = {
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
      uid: `progress-donut-${++ea}`
    };
  },
  watch: {
    // Need to reanimate if value changes
    percentage(t, s) {
      t !== s && this.animate(this.normalize(s));
    }
  },
  computed: {
    endDasharray() {
      return `${this.normalize(this.percentage)} 100`;
    }
  },
  methods: {
    normalize(t) {
      return t === 100 ? 101 : t;
    },
    animate(t = 0) {
      const { pie: s } = this.$refs;
      if (!s.animate) return;
      const { duration: e, easing: o, endDasharray: l } = this, n = { strokeDasharray: [`${t} 100`, l] };
      s.animate(n, { duration: e, easing: o, fill: "forwards" });
    }
  },
  mounted() {
    this.animate();
  }
}, sa = { class: "progress-donut__chart" }, na = {
  class: "progress-donut__chart-svg",
  viewBox: "0 0 32 32"
}, ia = ["r"], oa = {
  key: 0,
  class: "progress-donut__chart-value"
}, la = {
  key: 0,
  class: "progress-donut__value type-small-x"
};
function ra(t, s, e, o, l, n) {
  return a(), h("div", {
    class: g(["progress-donut", {
      "progress-donut--small": e.small,
      "progress-donut--small-below": e.smallBelow,
      "progress-donut--status-low": !e.neutral && e.percentage < 30,
      "progress-donut--status-incomplete": !e.neutral && e.percentage >= 30 && e.percentage < 100,
      "progress-donut--status-complete": !e.neutral && e.percentage >= 100
    }])
  }, [
    s[0] || (s[0] = m("strong", { class: "hidden-visually" }, "Course Progress", -1)),
    m("div", sa, [
      (a(), h("svg", na, [
        m("circle", {
          class: "progress-donut__chart-pie",
          ref: "pie",
          r: "16",
          cx: "16",
          cy: "16",
          style: F({ strokeDasharray: n.endDasharray })
        }, null, 4),
        m("circle", {
          class: "progress-donut__chart-mask",
          r: e.small ? 7 : 11,
          cx: "16",
          cy: "16"
        }, null, 8, ia)
      ])),
      e.small ? w("", !0) : (a(), h("strong", oa, S(e.percentage) + "% ", 1))
    ]),
    e.small ? (a(), h("strong", la, S(e.percentage) + "% ", 1)) : w("", !0)
  ], 2);
}
const nd = /* @__PURE__ */ p(ta, [["render", ra]]), aa = {
  name: "UluFacetsList",
  props: {
    groupUid: String,
    children: Array,
    classFacet: String
  },
  methods: {
    facetCheckboxId(t) {
      return `facet-${this.groupUid}-${t.uid}`;
    }
  }
}, ca = { class: "UluFacets__facet-list" }, ua = ["id", "onUpdate:modelValue"], da = ["for"];
function fa(t, s, e, o, l, n) {
  return a(), h("ul", ca, [
    (a(!0), h(x, null, O(e.children, (r) => (a(), h("li", {
      class: g(["UluFacets__facet", e.classFacet]),
      key: r.uid
    }, [
      J(m("input", {
        class: "UluFacets__facet-checkbox",
        id: n.facetCheckboxId(r),
        type: "checkbox",
        "onUpdate:modelValue": (c) => r.selected = c
      }, null, 8, ua), [
        [ds, r.selected]
      ]),
      m("label", {
        class: "UluFacets__facet-label",
        for: n.facetCheckboxId(r)
      }, S(r.label), 9, da)
    ], 2))), 128))
  ]);
}
const ha = /* @__PURE__ */ p(aa, [["render", fa]]);
let ma = 0;
const _a = {
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
      id: `facet-view-keyword-${++ma}`
    };
  },
  computed: {
    localValue: {
      get() {
        return this.modelValue;
      },
      set(t) {
        this.$emit("update:modelValue", t);
      }
    }
  },
  methods: {
    clear() {
    }
  }
}, ga = { class: "UluFacets__keyword-search" }, ya = ["for"], va = ["id", "placeholder"];
function pa(t, s, e, o, l, n) {
  return a(), h("div", ga, [
    m("label", {
      class: g(e.classes.searchLabel),
      for: l.id
    }, s[1] || (s[1] = [
      m("strong", null, "Search", -1)
    ]), 10, ya),
    J(m("input", {
      id: l.id,
      class: g(e.classes.searchInput),
      "onUpdate:modelValue": s[0] || (s[0] = (r) => n.localValue = r),
      type: "text",
      placeholder: e.placeholder
    }, null, 10, va), [
      [ri, n.localValue]
    ])
  ]);
}
const ba = /* @__PURE__ */ p(_a, [["render", pa]]);
let ss = 0;
const ns = (t) => {
  const s = (e) => e.title || e.label || "";
  return t.sort((e, o) => s(e).localeCompare(s(o)));
}, wa = {
  az: { text: "A-Z", sort: ns },
  za: { text: "Z-A", sort: (t) => ns(t).reverse() }
}, Sa = {
  name: "UluFacets",
  components: {
    UluCollapsibleRegion: ko,
    UluFacetsList: ha,
    UluFacetsSearch: ba
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
      default: (t, s) => t[s]
    },
    /**
     * Return the value for an item to use for sorting alphabetically
     */
    getItemSortAlpha: {
      type: Function,
      default: (t) => t.title || t.label || ""
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
      initialFiltersHidden: t,
      initialSearchValue: s,
      noDefaultSorts: e,
      initialSortType: o,
      extraSortTypes: l
    } = this;
    return {
      filterId: `ulu-facet-filters-${++ss}`,
      sortId: `ulu-facet-sort-${++ss}`,
      selectedSort: o,
      sortTypes: {
        ...e ? {} : wa,
        ...l
      },
      facets: this.createFacets(),
      // Copy of users facet configs
      filtersHidden: t || !1,
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
      const t = [];
      return this.facets.forEach((s) => {
        const { name: e, uid: o, children: l } = s;
        let n = 0, r = !1;
        l && l.forEach((c) => {
          c.selected && (++n, r || (t.push({ uid: o, name: e, children: [] }), r = !0), t[t.length - 1].children.push(c));
        }), s.selectedCount = n;
      }), t;
    },
    filteredItems() {
      this.resultsVisible = !1;
      const { getItemFacet: t, selectedFacets: s, sortTypes: e, selectedSort: o } = this, l = e[o].sort, n = this.items.filter((c) => s.length ? s.some((f) => {
        let d;
        const v = t(c, f.uid);
        return v && v.length && (d = f.children.some((U) => v.includes(U.uid))), d;
      }) : !0), r = l(this.search(n));
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
      return this.initialFacets.map((t) => {
        const s = t.children.map((e) => ({
          ...e,
          selected: e.selected || !1
        }));
        return {
          ...t,
          open: t.open || !1,
          children: s,
          selectedCount: 0
        };
      });
    },
    /**
     * Search applied to an already filtered batch of items
     */
    search(t) {
      const { searchValue: s, searchOptions: e } = this;
      return s?.length ? new pi(t, e).search(s).map((n) => n.item) : t;
    },
    toggleFilterVisibility() {
      this.filtersHidden = !this.filtersHidden;
    }
  }
}, ka = { class: "UluFacets" }, Ca = ["aria-controls", "aria-expanded"], Aa = ["for"], Ta = ["id"], Ra = ["value"], Oa = { class: "UluFacets__body" }, Ua = ["id"], xa = {
  key: 1,
  class: "UluFacets__empty"
};
function Ia(t, s, e, o, l, n) {
  const r = T("UluFacetsSearch"), c = T("UluFacetsList"), f = T("UluCollapsibleRegion");
  return a(), h("div", ka, [
    m("div", {
      class: g(["UluFacets__header", e.classes.header])
    }, [
      y(t.$slots, "header", {
        count: n.filteredItems.length
      }),
      m("div", {
        class: g(["UluFacets__header-actions", e.classes.headerActions])
      }, [
        m("button", {
          onClick: s[0] || (s[0] = (...d) => n.toggleFilterVisibility && n.toggleFilterVisibility(...d)),
          class: g(e.classes.buttonFilterToggle),
          "aria-controls": l.filterId,
          "aria-expanded": l.filtersHidden ? "false" : "true",
          type: "button"
        }, [
          y(t.$slots, "buttonFilterToggle", { hidden: l.filtersHidden }, () => [
            A(S(l.filtersHidden ? "Show" : "Hide") + " Filters ", 1)
          ])
        ], 10, Ca),
        n.selectedFacets.length ? (a(), h("button", {
          key: 0,
          onClick: s[1] || (s[1] = (...d) => n.clearFilters && n.clearFilters(...d)),
          class: g(e.classes.buttonClearFilters),
          type: "button"
        }, [
          y(t.$slots, "buttonClearFilters", {}, () => [
            s[4] || (s[4] = A(" Clear Filters "))
          ])
        ], 2)) : w("", !0),
        m("div", {
          class: g(e.classes.sortForm)
        }, [
          m("label", {
            for: l.sortId,
            class: g(e.classes.sortFormLabel)
          }, "Sort:", 10, Aa),
          J(m("select", {
            "onUpdate:modelValue": s[2] || (s[2] = (d) => l.selectedSort = d),
            id: l.sortId,
            class: g(e.classes.sortFormSelect)
          }, [
            (a(!0), h(x, null, O(l.sortTypes, (d, v) => (a(), h("option", {
              value: v,
              key: v
            }, S(d.text), 9, Ra))), 128))
          ], 10, Ta), [
            [ai, l.selectedSort]
          ])
        ], 2)
      ], 2)
    ], 2),
    m("div", Oa, [
      R(Kt, {
        name: "UluFacetsFade",
        mode: "out-in"
      }, {
        default: C(() => [
          J(m("div", {
            class: g(["UluFacets__filters", { "UluFacets__filters--hidden": l.filtersHidden }]),
            id: l.filterId
          }, [
            R(r, {
              classes: e.classes,
              initialValue: e.initialSearchValue,
              placeholder: e.searchPlaceholder,
              modelValue: l.searchValue,
              "onUpdate:modelValue": s[3] || (s[3] = (d) => l.searchValue = d)
            }, null, 8, ["classes", "initialValue", "placeholder", "modelValue"]),
            (a(!0), h(x, null, O(l.facets, (d) => (a(), k(f, {
              class: g(["UluFacets__group", e.classes.group]),
              classToggle: ["UluFacets__group-toggle", e.classes.groupToggle],
              classContent: ["UluFacets__group-content", e.classes.groupContent],
              key: d.uid,
              group: d,
              startOpen: d.open,
              clickOutsideCloses: !1,
              closeOnEscape: !1,
              transitionHeight: !0
            }, {
              toggle: C(({ isOpen: v }) => [
                y(t.$slots, "groupToggle", {
                  group: d,
                  isOpen: v
                }, () => [
                  A(S(d.name), 1)
                ])
              ]),
              default: C(() => [
                R(c, {
                  children: d.children.slice(0, e.maxVisible),
                  groupUid: d.uid,
                  classFacet: e.classes.facet
                }, null, 8, ["children", "groupUid", "classFacet"]),
                d.children.length > e.maxVisible ? (a(), k(f, {
                  key: 0,
                  class: g(["UluFacets__more-facets", e.classes.moreFacets]),
                  clickOutsideCloses: !1,
                  closeOnEscape: !1,
                  transitionHeight: !0
                }, {
                  toggle: C(({ isOpen: v }) => [
                    A(S(v ? "- Less" : "+ More"), 1)
                  ]),
                  default: C(() => [
                    R(c, {
                      children: d.children.slice(e.maxVisible),
                      groupUid: d.uid,
                      classFacet: e.classes.facet
                    }, null, 8, ["children", "groupUid", "classFacet"])
                  ]),
                  _: 2
                }, 1032, ["class"])) : w("", !0)
              ]),
              _: 2
            }, 1032, ["class", "classToggle", "classContent", "group", "startOpen"]))), 128))
          ], 10, Ua), [
            [dt, !l.filtersHidden]
          ])
        ]),
        _: 3
      }),
      R(Kt, {
        name: "UluFacetsFade",
        mode: "out-in"
      }, {
        default: C(() => [
          l.resultsVisible && n.filteredItems.length ? (a(), h("ul", {
            class: g(["UluFacets__results", e.classes.results]),
            key: l.filterIteration
          }, [
            (a(!0), h(x, null, O(n.filteredItems, (d, v) => (a(), h("li", {
              class: g(["UluFacets__results-item", e.classes.resultsItem]),
              key: v
            }, [
              y(t.$slots, "item", {
                item: d,
                index: v
              })
            ], 2))), 128))
          ], 2)) : (a(), h("div", xa, [
            y(t.$slots, "empty", {}, () => [
              s[5] || (s[5] = A(" No Results Found "))
            ])
          ]))
        ]),
        _: 3
      })
    ])
  ]);
}
const id = /* @__PURE__ */ p(Sa, [["render", Ia]]), ks = Symbol(), Cs = Symbol(), De = Symbol(), za = {
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
      [De]: $(() => this.sections),
      [ks]: (t) => {
        const { titleId: s, title: e } = t, { element: o } = t.$refs;
        this.sections.push({
          instance: t,
          titleId: s,
          title: e,
          element: o,
          active: !1
        }), this.update();
      },
      [Cs]: (t) => {
        const s = this.sections, e = s.findIndex((o) => o.instance === t);
        e > -1 && s.splice(e, 1), this.update();
      }
    };
  },
  methods: {
    update() {
      this.isMounted && this.observeItems();
    },
    getSectionIndex(t) {
      return this.sections.findIndex(({ element: s }) => t === s);
    },
    /**
     * Sets up a new observer to watch the section visibility
     */
    createObserver() {
      const { observerOptions: t, sections: s, removeActive: e, firstItemActive: o } = this;
      let l = 0;
      const n = (r) => {
        r.forEach(({ target: c, isIntersecting: f }) => {
          const d = this.getSectionIndex(c), v = c.offsetTop, U = s[d], E = d === 0 && l > v, P = d === s.length - 1 && l < v;
          U && this.$nextTick(() => {
            f ? (e(U), U.active = !0) : (E && !o || P && U.active) && e(), this.$emit("sectionChange", {
              section: U,
              sections: s,
              active: f
            });
          });
        });
      };
      this.observer = new IntersectionObserver(n, t);
    },
    /**
     * Add all slide elements as targets in observer
     */
    observeItems() {
      const { observer: t, sections: s } = this;
      t.disconnect(), s.forEach(({ element: e }) => {
        e && t.observe(e);
      });
    },
    removeActive(t = null) {
      this.sections.forEach((s) => {
        s !== t && (s.active = !1);
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
    const t = this.sections[0];
    this.firstItemActive && t && (t.active = !0), this.createObserver(), this.observeItems(), this.isMounted = !0;
  },
  unmounted() {
    this.destroyObserver();
  }
}, Ea = { class: "scroll-anchors" };
function $a(t, s, e, o, l, n) {
  return a(), h("div", Ea, [
    y(t.$slots, "default")
  ]);
}
const od = /* @__PURE__ */ p(za, [["render", $a]]), Fa = {
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
}, Ma = ["href"];
function Ba(t, s, e, o, l, n) {
  return n.sections.length ? (a(), k(M(e.element), {
    key: 0,
    class: "scroll-anchors__nav"
  }, {
    default: C(() => [
      m("ul", null, [
        (a(!0), h(x, null, O(n.sections, (r, c) => (a(), h("li", {
          key: c,
          class: g({ "is-active": r.active })
        }, [
          m("a", {
            class: g({ "is-active": r.active }),
            href: `#${r.titleId}`
          }, S(r.title), 11, Ma)
        ], 2))), 128))
      ])
    ]),
    _: 1
  })) : w("", !0);
}
const ld = /* @__PURE__ */ p(Fa, [["render", Ba]]);
function As(t) {
  requestAnimationFrame(() => {
    const s = new MessageChannel();
    s.port1.onmessage = t, s.port2.postMessage(void 0);
  });
}
const Ha = {
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
      const { sections: t, linkRefs: s } = this, e = Object.keys(s).length;
      if (!t || !e)
        return !1;
      const o = t.findIndex((c) => c.active);
      if (o === -1)
        return !1;
      const l = this.linkRefs[o], { offsetTop: n, offsetHeight: r } = l;
      return {
        y: n,
        height: r,
        initial: this.inidica
      };
    }
  },
  watch: {
    indicatorStyles(t) {
      t && !this.indicatorAnimReady && As(() => {
        this.indicatorAnimReady = !0;
      });
    }
  },
  methods: {
    addLinkRef(t, s) {
      this.linkRefs[t] = s;
    }
  }
}, La = { class: "scroll-anchors__rail" }, Pa = ["href"];
function ja(t, s, e, o, l, n) {
  return n.sections.length ? (a(), k(M(e.element), {
    key: 0,
    class: "scroll-anchors__nav scroll-anchors__nav--animated"
  }, {
    default: C(() => [
      m("ul", La, [
        (a(!0), h(x, null, O(n.sections, (r, c) => (a(), h("li", {
          key: c,
          class: g({ "is-active": r.active })
        }, [
          m("a", {
            class: g({ "is-active": r.active }),
            ref_for: !0,
            ref: (f) => n.addLinkRef(c, f),
            href: `#${r.titleId}`
          }, S(r.title), 11, Pa)
        ], 2))), 128))
      ]),
      m("div", {
        class: g(["scroll-anchors__indicator", {
          "scroll-anchors__indicator--can-transition": l.indicatorAnimReady
        }]),
        ref: "indicator",
        style: F({
          opacity: n.indicatorStyles ? "1" : "0",
          transform: `translateY(${n.indicatorStyles.y}px)`,
          height: `${n.indicatorStyles.height}px`
        })
      }, null, 6)
    ]),
    _: 1
  })) : w("", !0);
}
const rd = /* @__PURE__ */ p(Ha, [["render", ja]]), Va = {
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
    register: { from: ks },
    unregister: { from: Cs },
    sections: { from: De, default: () => $(() => []) }
  },
  data() {
    const { anchorId: t, title: s } = this;
    return {
      titleId: t || `sas-title-${hr(s)}`
    };
  },
  computed: {
    section() {
      return this.sections.find((t) => t.instance === this);
    }
  },
  mounted() {
    this.register && this.register(this);
  },
  unmounted() {
    this.unregister && this.unregister(this);
  }
};
function Da(t, s, e, o, l, n) {
  return a(), h("div", {
    class: g([e.wrapperClass, { [e.activeClass]: e.activeClass && n.section?.active }]),
    ref: "element"
  }, [
    (a(), k(M(e.titleElement), {
      class: g(e.titleClass),
      id: l.titleId
    }, {
      default: C(() => [
        A(S(e.title), 1)
      ]),
      _: 1
    }, 8, ["class", "id"])),
    y(t.$slots, "default", { section: n.section })
  ], 2);
}
const ad = /* @__PURE__ */ p(Va, [["render", Da]]), Wa = {
  name: "ShowSkeleton",
  props: {
    when: Boolean
  }
};
function Na(t, s, e, o, l, n) {
  const r = T("SkeletonTextInline");
  return e.when ? (a(), k(r, {
    key: 1,
    class: "skeleton"
  })) : y(t.$slots, "default", { key: 0 });
}
const cd = /* @__PURE__ */ p(Wa, [["render", Na]]);
function Xa(t, s) {
  return [...Array(t)].map((e, o) => s(o));
}
function ud(t, s) {
  var e = t.indexOf(s);
  e > -1 && t.splice(e, 1);
}
const Ya = {
  name: "SkeletonContent",
  props: {
    lines: {
      type: Number,
      default: 6
    }
  },
  methods: {
    randomInt: Re
  },
  computed: {
    /**
     * Creates the segments (like words) for the given line count
     * - Uses random number of segments and makes sure to fill the line between 70% - 100%
     */
    linesWithSegments() {
      return Xa(this.lines, () => {
        const s = Re(70, 100);
        let e = 0;
        const o = () => {
          const r = s - e, c = Re(15, r);
          return e += c, c;
        }, l = [];
        for (; e < s - 15; )
          l.push(o());
        const n = () => l.reduce((r, c) => r + c, 0);
        for (; n() >= s && l.pop(); )
          ;
        return l.map((r) => ({ width: r, alt: Math.random() < 0.5 }));
      });
    }
  }
}, Ka = { class: "skeleton" };
function qa(t, s, e, o, l, n) {
  return a(), h("div", Ka, [
    (a(!0), h(x, null, O(n.linesWithSegments, (r, c) => (a(), h("div", { key: c }, [
      (a(!0), h(x, null, O(r, (f) => (a(), h("span", {
        key: f,
        class: g(["skeleton__text skeleton__text--inline", { skeleton__alt: f.alt }]),
        style: F({ width: `${f.width}%` })
      }, null, 6))), 128))
    ]))), 128))
  ]);
}
const dd = /* @__PURE__ */ p(Ya, [["render", qa]]), Ga = {
  name: "SkeletonMedia"
}, Za = { class: "skeleton__block skeleton__block--media layout-flex-center-all" };
function Ja(t, s, e, o, l, n) {
  const r = T("FaIcon");
  return a(), h("div", Za, [
    R(r, {
      style: { "font-size": "2rem" },
      icon: "image"
    })
  ]);
}
const fd = /* @__PURE__ */ p(Ga, [["render", Ja]]), Qa = {
  name: "SkeletonTextInline"
}, ec = { class: "skeleton__text skeleton__text--inline" };
function tc(t, s, e, o, l, n) {
  return a(), h("span", ec);
}
const hd = /* @__PURE__ */ p(Qa, [["render", tc]]), sc = {
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
      const { slides: t } = this;
      return !t[t.length - 1].active;
    },
    canScrollLeft() {
      const { slides: t } = this;
      return !t[0].active;
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
      return this.items.map((t) => ({
        element: null,
        active: !1,
        item: t
      }));
    },
    /**
     * Find the corresponding slide data by slide element
     */
    getSlideByElement(t) {
      return this.slides.find(({ element: s }) => t === s);
    },
    /**
     * Provides scroll measurements
     */
    getScrollData() {
      const { scrollLeft: t, offsetWidth: s, scrollWidth: e } = this.$refs.track;
      return { scrollLeft: t, offsetWidth: s, scrollWidth: e };
    },
    /**
     * Determines the amount to scroll the track
     */
    resolveAmount(t) {
      const s = t === "next", { scrollAmount: e } = this, { scrollLeft: o, offsetWidth: l } = this.getScrollData();
      return typeof e == "function" ? e(t, this.$refs) : typeof e == "number" ? s ? o + e : o - e : s ? o + l : o - l;
    },
    /**
     * Scroll the track to a specified point 
     */
    scrollTo(t, s) {
      this.$refs.track.scrollTo({ left: t, top: 0, behavior: s });
    },
    /**
     * Scroll to specific index
     * @param {Number} index Slide index
     */
    to(t) {
      const s = this.slides[t], { track: e } = this.$refs;
      if (s) {
        let o = s.element.offsetLeft;
        const l = () => {
          s.element.focus(this.focusOptions), e.removeEventListener("scrollend", l);
        };
        e.addEventListener("scrollend", l), this.scrollTo(o, this.scrollBehaviorNav);
      }
    },
    /**
     * Goto to next slide
     */
    next() {
      const t = this.resolveAmount("next");
      this.scrollTo(t, this.scrollBehaviorControl);
    },
    /**
     * Goto to previous slide
     */
    previous() {
      const t = this.resolveAmount("previous");
      this.scrollTo(t, this.scrollBehaviorControl);
    },
    /**
     * Sets up a new observer to watch the slides visibility (within track)
     */
    createObserver() {
      const { observerOptions: t } = this, { track: s, nav: e } = this.$refs, o = (l) => {
        l.forEach((n) => {
          this.$nextTick(() => {
            const r = this.getSlideByElement(n.target);
            r.active = n.isIntersecting, this.$emit("slideChange", { slide: r, track: s, nav: e });
          });
        });
      };
      this.observer = new IntersectionObserver(o, {
        root: s,
        ...t
      });
    },
    /**
     * Add all slide elements as targets in observer
     */
    observeSlides() {
      const { observer: t, slides: s } = this;
      t.disconnect(), s.forEach(({ element: e }) => {
        e && t.observe(e);
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
}, nc = { class: "slideshow" }, ic = {
  class: "slideshow__control-context",
  ref: "context"
}, oc = {
  class: "slideshow__track-crop",
  ref: "crop"
}, lc = {
  class: "slideshow__track",
  ref: "track"
}, rc = ["tabindex"], ac = { class: "slideshow__controls" }, cc = { class: "slideshow__controls-item slideshow__controls-item--previous" }, uc = ["disabled"], dc = { class: "slideshow__controls-item slideshow__controls-item--next" }, fc = ["disabled"], hc = {
  key: 0,
  class: "slideshow__nav",
  ref: "nav"
}, mc = ["onClick"], _c = { class: "hidden-visually" };
function gc(t, s, e, o, l, n) {
  const r = T("FaIcon");
  return a(), h("div", nc, [
    m("div", ic, [
      m("div", oc, [
        m("ul", lc, [
          (a(!0), h(x, null, O(l.slides, (c, f) => (a(), h("li", {
            class: g(["slideshow__slide", { "is-active": c.active }]),
            key: f,
            tabindex: e.slideFocusable ? "0" : "-1",
            ref_for: !0,
            ref: (d) => {
              c.element = d;
            }
          }, [
            y(t.$slots, "slide", {
              item: c.item,
              index: f
            })
          ], 10, rc))), 128))
        ], 512)
      ], 512),
      m("ul", ac, [
        m("li", cc, [
          m("button", {
            class: "slideshow__control-button slideshow__control-button--previous",
            "aria-label": "Scroll Right",
            onClick: s[0] || (s[0] = (...c) => n.previous && n.previous(...c)),
            disabled: !n.canScrollLeft
          }, [
            R(r, {
              class: "slideshow__control-icon",
              icon: "fas fa-chevron-left"
            })
          ], 8, uc)
        ]),
        m("li", dc, [
          m("button", {
            class: "slideshow__control-button slideshow__control-button--next",
            "aria-label": "Scroll Left",
            onClick: s[1] || (s[1] = (...c) => n.next && n.next(...c)),
            disabled: !n.canScrollRight
          }, [
            R(r, {
              class: "slideshow__control-icon",
              icon: "fas fa-chevron-right"
            })
          ], 8, fc)
        ])
      ])
    ], 512),
    e.noNav ? w("", !0) : (a(), h("ul", hc, [
      (a(!0), h(x, null, O(l.slides, (c, f) => (a(), h("li", {
        class: g(["slideshow__nav-item", { "is-active": c.active }]),
        ref_for: !0,
        ref: (d) => {
          c.navElement = d;
        },
        key: f
      }, [
        m("button", {
          class: g(["slideshow__nav-button", { "is-active": c.active }]),
          onClick: (d) => n.to(f)
        }, [
          y(t.$slots, "nav", {
            item: c.item,
            index: f,
            active: c.active
          }, () => [
            m("span", _c, "Item " + S(f + 1), 1)
          ])
        ], 10, mc)
      ], 2))), 128))
    ], 512))
  ]);
}
const yc = /* @__PURE__ */ p(sc, [["render", gc]]), vc = {
  name: "ImageSlideShow",
  components: {
    UluSlideShow: yc
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
    slideChange({ slide: t, nav: s }) {
      const { active: e, navElement: o } = t;
      if (!o) return;
      const { offsetWidth: l, scrollLeft: n } = s, { offsetLeft: r, offsetWidth: c } = o, f = n + l, d = r + c;
      let v = null;
      console.log("left/right", n, f), e && o && (d > f ? v = n + (d - f) : r < n && (v = r), v !== null && s.scrollTo({ left: v, top: 0, behavior: "smooth" }));
    }
  }
}, pc = ["src", "alt"], bc = { class: "slideshow__image-actions" }, wc = ["src", "alt"];
function Sc(t, s, e, o, l, n) {
  const r = T("AppButton"), c = T("UluSlideShow");
  return a(), k(c, {
    class: "slideshow--images",
    items: e.images,
    onSlideChange: n.slideChange
  }, {
    slide: C(({ item: f }) => [
      m("img", {
        src: f.src,
        alt: f.alt
      }, null, 8, pc),
      m("div", bc, [
        e.selectButton ? (a(), k(r, {
          key: 0,
          class: "type-small",
          icon: "plus",
          small: "",
          iconBefore: ""
        }, {
          default: C(() => s[0] || (s[0] = [
            A(" Select ")
          ])),
          _: 1,
          __: [0]
        })) : w("", !0)
      ])
    ]),
    nav: C(({ index: f }) => [
      m("img", {
        src: e.images[f].src,
        alt: `View image ${f}`
      }, null, 8, wc)
    ]),
    _: 1
  }, 8, ["items", "onSlideChange"]);
}
const md = /* @__PURE__ */ p(vc, [["render", Sc]]), kc = {
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
function Cc(t, s, e, o, l, n) {
  return a(), h("li", {
    class: g(["slideshow__slide", { "is-active": e.active }])
  }, [
    y(t.$slots, "default")
  ], 2);
}
const _d = /* @__PURE__ */ p(kc, [["render", Cc]]), Ac = {
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
}, Tc = ["id"], Rc = ["innerHTML"];
function Oc(t, s, e, o, l, n) {
  return a(!0), h(x, null, O(e.rows, (r, c) => (a(), h("tr", {
    key: `br-${c}`,
    id: e.optionalAttr(e.isActual && r.id),
    class: g(e.resolveClasses(e.classes.row, { row: r.data, rowIndex: c, isActual: e.isActual, foot: e.foot })),
    style: F({
      height: r.height
    })
  }, [
    (a(!0), h(x, null, O(e.rowColumns, (f, d) => (a(), k(M(f.rowHeader ? "th" : "td"), {
      id: e.optionalAttr(e.isActual && f.rowHeader && f.getRowHeaderId(c)),
      scope: e.optionalAttr(e.isActual && f.rowHeader && "row"),
      key: `bc-${d}`,
      headers: e.optionalAttr(e.isActual && e.getCellHeaders(f, c)),
      class: g(e.resolveClasses(f.class, { column: f, index: d, isActual: e.isActual, row: r, rowIndex: c, foot: e.foot })),
      style: F({
        width: e.columnWidth
      })
    }, {
      default: C(() => [
        t.$slots[f.slot] ? y(t.$slots, f.slot, {
          key: 0,
          row: r.data,
          column: f,
          rowIndex: c,
          index: d,
          foot: e.foot,
          isActual: e.isActual
        }) : f.html ? (a(), h("div", {
          key: 1,
          innerHTML: e.value({ row: r, column: f, rowIndex: c, isActual: e.isActual, foot: e.foot })
        }, null, 8, Rc)) : (a(), h(x, { key: 2 }, [
          A(S(e.value({ row: r, column: f, rowIndex: c, isActual: e.isActual, foot: e.foot })), 1)
        ], 64))
      ]),
      _: 2
    }, 1032, ["id", "scope", "headers", "class", "style"]))), 128))
  ], 14, Tc))), 128);
}
const Uc = /* @__PURE__ */ p(Ac, [["render", Oc]]), xc = {
  name: "UluTableStickyTable",
  components: {
    UluTableStickyRows: Uc
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
      default: ({ row: t, column: s }) => t[s.key]
    },
    /**
     * Optional user overridden value getter (for rows)
     * @param {Object} row The current row
     * @param {Object} column The current column in the row
     */
    getColumnTitle: {
      type: Function,
      default: ({ column: t }) => t.title
    }
  },
  data() {
    return {
      headerRefs: {}
    };
  },
  methods: {
    handleSortFocus(t, s) {
      this.isActual && (t.sortFocused = s);
    },
    addHeaderRef(t, s) {
      const { headerRefs: e, isActual: o } = this;
      if (!o || !s) return;
      const { id: l } = t, n = e[l];
      n && this.$emit("actualHeaderRemoved", n), this.$emit("actualHeaderAdded", s), e[l] = s;
    },
    /**
     * False is no longer not printed
     */
    optionalAttr(t) {
      return t || null;
    },
    value({ row: t, column: s, rowIndex: e }) {
      const o = s.value;
      return o ? o({ row: t.data, column: s, rowIndex: e }) : this.getRowValue({ row: t.data, column: s, rowIndex: e });
    },
    getCellHeaders(t, s) {
      const e = t.headers.join(" "), o = t.getRowHeaders(s), l = o.length ? " " : "";
      return `${e}${l}${o}`;
    },
    getHeaderHeaders(t) {
      const s = t.headers.filter((e) => e !== t.id);
      if (s.length)
        return s.join(" ");
    }
  }
}, Ic = ["aria-hidden"], zc = {
  key: 0,
  class: "table-sticky__caption"
}, Ec = ["id"], $c = ["id", "rowspan", "colspan", "data-child-columns", "aria-sort", "scope", "headers"], Fc = ["innerHTML"], Mc = {
  class: "table-sticky__sort-icon",
  "aria-hidden": "true"
}, Bc = { class: "table-sticky__sort-icon-inner" }, Hc = ["innerHTML"], Lc = { key: 1 }, Pc = { key: 2 };
function jc(t, s, e, o, l, n) {
  const r = T("UluTableStickyRows");
  return a(), h("table", {
    class: g(e.resolveClasses(e.classes.table, { isActual: e.isActual })),
    "aria-hidden": e.isActual ? "false" : "true"
  }, [
    e.caption ? (a(), h("caption", zc, S(e.caption), 1)) : w("", !0),
    m("thead", null, [
      (a(!0), h(x, null, O(e.headerRows, (c, f) => (a(), h("tr", {
        key: `hr-${f}`,
        id: n.optionalAttr(e.isActual && c.id),
        class: g(e.resolveClasses(e.classes.rowHeader, { row: c, rowIndex: f, isActual: e.isActual })),
        style: F({
          height: c.height
        })
      }, [
        (a(!0), h(x, null, O(c.columns, (d, v) => (a(), h("th", {
          key: `hc-${v}`,
          id: n.optionalAttr(e.isActual && d.id),
          rowspan: d.rowspan,
          colspan: d.colspan,
          "data-child-columns": d.columns && d.columns.length,
          class: g([
            {
              "sort-active": d.sortApplied,
              "sort-ascending": d.sortApplied && d.sortAscending,
              "sort-descending": d.sortApplied && !d.sortAscending
            },
            e.resolveClasses(d.classHeader, { column: d, index: v, isActual: e.isActual })
          ]),
          style: F({
            width: d.width
          }),
          "aria-sort": d.sort ? d.sortAscending ? "ascending" : "descending" : null,
          scope: n.optionalAttr(e.isActual && (d.colspan > 1 ? "colgroup" : "col")),
          headers: n.optionalAttr(e.isActual && n.getHeaderHeaders(d, f)),
          ref_for: !0,
          ref: (U) => n.addHeaderRef(d, U)
        }, [
          d.sortable ? (a(), k(M(e.isActual ? "button" : "div"), {
            key: 0,
            class: g(["table-sticky__sort-button", {
              "table-sticky__sort-button--focused": d.sortFocused
            }]),
            onClick: (U) => t.$emit("columnSorted", d),
            onFocus: (U) => n.handleSortFocus(d, !0),
            onBlur: (U) => n.handleSortFocus(d, !1),
            "aria-pressed": d.sortApplied ? "true" : "false"
          }, {
            default: C(() => [
              t.$slots[d.slotHeader] ? y(t.$slots, d.slotHeader, {
                key: 0,
                isActual: e.isActual,
                column: d,
                index: v
              }) : d.htmlTitle ? (a(), h("div", {
                key: 1,
                innerHTML: e.getColumnTitle({ column: d, index: v, isActual: e.isActual })
              }, null, 8, Fc)) : (a(), h(x, { key: 2 }, [
                A(S(e.getColumnTitle({ column: d, index: v, isActual: e.isActual })), 1)
              ], 64)),
              m("span", Mc, [
                m("span", Bc, [
                  y(t.$slots, "sortIcon", {}, () => [
                    s[0] || (s[0] = A("▼"))
                  ])
                ])
              ])
            ]),
            _: 2
          }, 1064, ["class", "onClick", "onFocus", "onBlur", "aria-pressed"])) : (a(), h(x, { key: 1 }, [
            t.$slots[d.slotHeader] ? y(t.$slots, d.slotHeader, {
              key: 0,
              isActual: e.isActual,
              column: d,
              index: v
            }) : d.htmlTitle ? (a(), h("div", {
              key: 1,
              innerHTML: e.getColumnTitle({ column: d, index: v, isActual: e.isActual })
            }, null, 8, Hc)) : (a(), h(x, { key: 2 }, [
              A(S(e.getColumnTitle({ column: d, index: v, isActual: e.isActual })), 1)
            ], 64))
          ], 64))
        ], 14, $c))), 128))
      ], 14, Ec))), 128))
    ]),
    e.rows ? (a(), h("tbody", Lc, [
      R(r, {
        rows: e.rows,
        rowColumns: e.rowColumns,
        optionalAttr: n.optionalAttr,
        resolveClasses: e.resolveClasses,
        getCellHeaders: n.getCellHeaders,
        isActual: e.isActual,
        columnWidth: e.columnWidth,
        classes: e.classes,
        value: n.value
      }, ge({ _: 2 }, [
        O(t.$slots, (c, f) => ({
          name: f,
          fn: C((d) => [
            y(t.$slots, f, D(W(d)))
          ])
        }))
      ]), 1032, ["rows", "rowColumns", "optionalAttr", "resolveClasses", "getCellHeaders", "isActual", "columnWidth", "classes", "value"])
    ])) : w("", !0),
    e.footerRows ? (a(), h("tfoot", Pc, [
      R(r, {
        rows: e.footerRows,
        rowColumns: e.rowColumns,
        optionalAttr: n.optionalAttr,
        resolveClasses: e.resolveClasses,
        getCellHeaders: n.getCellHeaders,
        isActual: e.isActual,
        columnWidth: e.columnWidth,
        classes: e.classes,
        value: n.value,
        foot: ""
      }, ge({ _: 2 }, [
        O(t.$slots, (c, f) => ({
          name: f,
          fn: C((d) => [
            y(t.$slots, f, D(W(d)))
          ])
        }))
      ]), 1032, ["rows", "rowColumns", "optionalAttr", "resolveClasses", "getCellHeaders", "isActual", "columnWidth", "classes", "value"])
    ])) : w("", !0)
  ], 10, Ic);
}
const Vc = /* @__PURE__ */ p(xc, [["render", jc]]);
var Le = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Dc(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var Te = { exports: {} };
Te.exports;
var is;
function Wc() {
  return is || (is = 1, function(t, s) {
    var e = 200, o = "__lodash_hash_undefined__", l = 9007199254740991, n = "[object Arguments]", r = "[object Array]", c = "[object Boolean]", f = "[object Date]", d = "[object Error]", v = "[object Function]", U = "[object GeneratorFunction]", E = "[object Map]", P = "[object Number]", Y = "[object Object]", pe = "[object Promise]", Oe = "[object RegExp]", ue = "[object Set]", Ue = "[object String]", se = "[object Symbol]", X = "[object WeakMap]", xe = "[object ArrayBuffer]", ne = "[object DataView]", be = "[object Float32Array]", H = "[object Float64Array]", K = "[object Int8Array]", ie = "[object Int16Array]", We = "[object Int32Array]", pt = "[object Uint8Array]", bt = "[object Uint8ClampedArray]", wt = "[object Uint16Array]", St = "[object Uint32Array]", Rs = /[\\^$.*+?()[\]{}|]/g, Os = /\w*$/, Us = /^\[object .+?Constructor\]$/, xs = /^(?:0|[1-9]\d*)$/, I = {};
    I[n] = I[r] = I[xe] = I[ne] = I[c] = I[f] = I[be] = I[H] = I[K] = I[ie] = I[We] = I[E] = I[P] = I[Y] = I[Oe] = I[ue] = I[Ue] = I[se] = I[pt] = I[bt] = I[wt] = I[St] = !0, I[d] = I[v] = I[X] = !1;
    var Is = typeof Le == "object" && Le && Le.Object === Object && Le, zs = typeof self == "object" && self && self.Object === Object && self, q = Is || zs || Function("return this")(), kt = s && !s.nodeType && s, Ct = kt && !0 && t && !t.nodeType && t, Es = Ct && Ct.exports === kt;
    function $s(i, u) {
      return i.set(u[0], u[1]), i;
    }
    function Fs(i, u) {
      return i.add(u), i;
    }
    function Ms(i, u) {
      for (var _ = -1, b = i ? i.length : 0; ++_ < b && u(i[_], _, i) !== !1; )
        ;
      return i;
    }
    function Bs(i, u) {
      for (var _ = -1, b = u.length, L = i.length; ++_ < b; )
        i[L + _] = u[_];
      return i;
    }
    function At(i, u, _, b) {
      for (var L = -1, j = i ? i.length : 0; ++L < j; )
        _ = u(_, i[L], L, i);
      return _;
    }
    function Hs(i, u) {
      for (var _ = -1, b = Array(i); ++_ < i; )
        b[_] = u(_);
      return b;
    }
    function Ls(i, u) {
      return i?.[u];
    }
    function Tt(i) {
      var u = !1;
      if (i != null && typeof i.toString != "function")
        try {
          u = !!(i + "");
        } catch {
        }
      return u;
    }
    function Rt(i) {
      var u = -1, _ = Array(i.size);
      return i.forEach(function(b, L) {
        _[++u] = [L, b];
      }), _;
    }
    function Ne(i, u) {
      return function(_) {
        return i(u(_));
      };
    }
    function Ot(i) {
      var u = -1, _ = Array(i.size);
      return i.forEach(function(b) {
        _[++u] = b;
      }), _;
    }
    var Ps = Array.prototype, js = Function.prototype, Ie = Object.prototype, Xe = q["__core-js_shared__"], Ut = function() {
      var i = /[^.]+$/.exec(Xe && Xe.keys && Xe.keys.IE_PROTO || "");
      return i ? "Symbol(src)_1." + i : "";
    }(), xt = js.toString, ee = Ie.hasOwnProperty, ze = Ie.toString, Vs = RegExp(
      "^" + xt.call(ee).replace(Rs, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
    ), It = Es ? q.Buffer : void 0, zt = q.Symbol, Et = q.Uint8Array, Ds = Ne(Object.getPrototypeOf, Object), Ws = Object.create, Ns = Ie.propertyIsEnumerable, Xs = Ps.splice, $t = Object.getOwnPropertySymbols, Ys = It ? It.isBuffer : void 0, Ks = Ne(Object.keys, Object), Ye = he(q, "DataView"), we = he(q, "Map"), Ke = he(q, "Promise"), qe = he(q, "Set"), Ge = he(q, "WeakMap"), Se = he(Object, "create"), qs = re(Ye), Gs = re(we), Zs = re(Ke), Js = re(qe), Qs = re(Ge), Ft = zt ? zt.prototype : void 0, Mt = Ft ? Ft.valueOf : void 0;
    function oe(i) {
      var u = -1, _ = i ? i.length : 0;
      for (this.clear(); ++u < _; ) {
        var b = i[u];
        this.set(b[0], b[1]);
      }
    }
    function en() {
      this.__data__ = Se ? Se(null) : {};
    }
    function tn(i) {
      return this.has(i) && delete this.__data__[i];
    }
    function sn(i) {
      var u = this.__data__;
      if (Se) {
        var _ = u[i];
        return _ === o ? void 0 : _;
      }
      return ee.call(u, i) ? u[i] : void 0;
    }
    function nn(i) {
      var u = this.__data__;
      return Se ? u[i] !== void 0 : ee.call(u, i);
    }
    function on(i, u) {
      var _ = this.__data__;
      return _[i] = Se && u === void 0 ? o : u, this;
    }
    oe.prototype.clear = en, oe.prototype.delete = tn, oe.prototype.get = sn, oe.prototype.has = nn, oe.prototype.set = on;
    function G(i) {
      var u = -1, _ = i ? i.length : 0;
      for (this.clear(); ++u < _; ) {
        var b = i[u];
        this.set(b[0], b[1]);
      }
    }
    function ln() {
      this.__data__ = [];
    }
    function rn(i) {
      var u = this.__data__, _ = Ee(u, i);
      if (_ < 0)
        return !1;
      var b = u.length - 1;
      return _ == b ? u.pop() : Xs.call(u, _, 1), !0;
    }
    function an(i) {
      var u = this.__data__, _ = Ee(u, i);
      return _ < 0 ? void 0 : u[_][1];
    }
    function cn(i) {
      return Ee(this.__data__, i) > -1;
    }
    function un(i, u) {
      var _ = this.__data__, b = Ee(_, i);
      return b < 0 ? _.push([i, u]) : _[b][1] = u, this;
    }
    G.prototype.clear = ln, G.prototype.delete = rn, G.prototype.get = an, G.prototype.has = cn, G.prototype.set = un;
    function de(i) {
      var u = -1, _ = i ? i.length : 0;
      for (this.clear(); ++u < _; ) {
        var b = i[u];
        this.set(b[0], b[1]);
      }
    }
    function dn() {
      this.__data__ = {
        hash: new oe(),
        map: new (we || G)(),
        string: new oe()
      };
    }
    function fn(i) {
      return $e(this, i).delete(i);
    }
    function hn(i) {
      return $e(this, i).get(i);
    }
    function mn(i) {
      return $e(this, i).has(i);
    }
    function _n(i, u) {
      return $e(this, i).set(i, u), this;
    }
    de.prototype.clear = dn, de.prototype.delete = fn, de.prototype.get = hn, de.prototype.has = mn, de.prototype.set = _n;
    function fe(i) {
      this.__data__ = new G(i);
    }
    function gn() {
      this.__data__ = new G();
    }
    function yn(i) {
      return this.__data__.delete(i);
    }
    function vn(i) {
      return this.__data__.get(i);
    }
    function pn(i) {
      return this.__data__.has(i);
    }
    function bn(i, u) {
      var _ = this.__data__;
      if (_ instanceof G) {
        var b = _.__data__;
        if (!we || b.length < e - 1)
          return b.push([i, u]), this;
        _ = this.__data__ = new de(b);
      }
      return _.set(i, u), this;
    }
    fe.prototype.clear = gn, fe.prototype.delete = yn, fe.prototype.get = vn, fe.prototype.has = pn, fe.prototype.set = bn;
    function wn(i, u) {
      var _ = Qe(i) || Nn(i) ? Hs(i.length, String) : [], b = _.length, L = !!b;
      for (var j in i)
        ee.call(i, j) && !(L && (j == "length" || jn(j, b))) && _.push(j);
      return _;
    }
    function Bt(i, u, _) {
      var b = i[u];
      (!(ee.call(i, u) && jt(b, _)) || _ === void 0 && !(u in i)) && (i[u] = _);
    }
    function Ee(i, u) {
      for (var _ = i.length; _--; )
        if (jt(i[_][0], u))
          return _;
      return -1;
    }
    function Sn(i, u) {
      return i && Ht(u, et(u), i);
    }
    function Ze(i, u, _, b, L, j, Z) {
      var V;
      if (b && (V = j ? b(i, L, j, Z) : b(i)), V !== void 0)
        return V;
      if (!Fe(i))
        return i;
      var Wt = Qe(i);
      if (Wt) {
        if (V = Hn(i), !u)
          return Fn(i, V);
      } else {
        var me = le(i), Nt = me == v || me == U;
        if (Yn(i))
          return On(i, u);
        if (me == Y || me == n || Nt && !j) {
          if (Tt(i))
            return j ? i : {};
          if (V = Ln(Nt ? {} : i), !u)
            return Mn(i, Sn(V, i));
        } else {
          if (!I[me])
            return j ? i : {};
          V = Pn(i, me, Ze, u);
        }
      }
      Z || (Z = new fe());
      var Xt = Z.get(i);
      if (Xt)
        return Xt;
      if (Z.set(i, V), !Wt)
        var Yt = _ ? Bn(i) : et(i);
      return Ms(Yt || i, function(tt, Me) {
        Yt && (Me = tt, tt = i[Me]), Bt(V, Me, Ze(tt, u, _, b, Me, i, Z));
      }), V;
    }
    function kn(i) {
      return Fe(i) ? Ws(i) : {};
    }
    function Cn(i, u, _) {
      var b = u(i);
      return Qe(i) ? b : Bs(b, _(i));
    }
    function An(i) {
      return ze.call(i);
    }
    function Tn(i) {
      if (!Fe(i) || Dn(i))
        return !1;
      var u = Dt(i) || Tt(i) ? Vs : Us;
      return u.test(re(i));
    }
    function Rn(i) {
      if (!Pt(i))
        return Ks(i);
      var u = [];
      for (var _ in Object(i))
        ee.call(i, _) && _ != "constructor" && u.push(_);
      return u;
    }
    function On(i, u) {
      if (u)
        return i.slice();
      var _ = new i.constructor(i.length);
      return i.copy(_), _;
    }
    function Je(i) {
      var u = new i.constructor(i.byteLength);
      return new Et(u).set(new Et(i)), u;
    }
    function Un(i, u) {
      var _ = u ? Je(i.buffer) : i.buffer;
      return new i.constructor(_, i.byteOffset, i.byteLength);
    }
    function xn(i, u, _) {
      var b = u ? _(Rt(i), !0) : Rt(i);
      return At(b, $s, new i.constructor());
    }
    function In(i) {
      var u = new i.constructor(i.source, Os.exec(i));
      return u.lastIndex = i.lastIndex, u;
    }
    function zn(i, u, _) {
      var b = u ? _(Ot(i), !0) : Ot(i);
      return At(b, Fs, new i.constructor());
    }
    function En(i) {
      return Mt ? Object(Mt.call(i)) : {};
    }
    function $n(i, u) {
      var _ = u ? Je(i.buffer) : i.buffer;
      return new i.constructor(_, i.byteOffset, i.length);
    }
    function Fn(i, u) {
      var _ = -1, b = i.length;
      for (u || (u = Array(b)); ++_ < b; )
        u[_] = i[_];
      return u;
    }
    function Ht(i, u, _, b) {
      _ || (_ = {});
      for (var L = -1, j = u.length; ++L < j; ) {
        var Z = u[L], V = void 0;
        Bt(_, Z, V === void 0 ? i[Z] : V);
      }
      return _;
    }
    function Mn(i, u) {
      return Ht(i, Lt(i), u);
    }
    function Bn(i) {
      return Cn(i, et, Lt);
    }
    function $e(i, u) {
      var _ = i.__data__;
      return Vn(u) ? _[typeof u == "string" ? "string" : "hash"] : _.map;
    }
    function he(i, u) {
      var _ = Ls(i, u);
      return Tn(_) ? _ : void 0;
    }
    var Lt = $t ? Ne($t, Object) : Gn, le = An;
    (Ye && le(new Ye(new ArrayBuffer(1))) != ne || we && le(new we()) != E || Ke && le(Ke.resolve()) != pe || qe && le(new qe()) != ue || Ge && le(new Ge()) != X) && (le = function(i) {
      var u = ze.call(i), _ = u == Y ? i.constructor : void 0, b = _ ? re(_) : void 0;
      if (b)
        switch (b) {
          case qs:
            return ne;
          case Gs:
            return E;
          case Zs:
            return pe;
          case Js:
            return ue;
          case Qs:
            return X;
        }
      return u;
    });
    function Hn(i) {
      var u = i.length, _ = i.constructor(u);
      return u && typeof i[0] == "string" && ee.call(i, "index") && (_.index = i.index, _.input = i.input), _;
    }
    function Ln(i) {
      return typeof i.constructor == "function" && !Pt(i) ? kn(Ds(i)) : {};
    }
    function Pn(i, u, _, b) {
      var L = i.constructor;
      switch (u) {
        case xe:
          return Je(i);
        case c:
        case f:
          return new L(+i);
        case ne:
          return Un(i, b);
        case be:
        case H:
        case K:
        case ie:
        case We:
        case pt:
        case bt:
        case wt:
        case St:
          return $n(i, b);
        case E:
          return xn(i, b, _);
        case P:
        case Ue:
          return new L(i);
        case Oe:
          return In(i);
        case ue:
          return zn(i, b, _);
        case se:
          return En(i);
      }
    }
    function jn(i, u) {
      return u = u ?? l, !!u && (typeof i == "number" || xs.test(i)) && i > -1 && i % 1 == 0 && i < u;
    }
    function Vn(i) {
      var u = typeof i;
      return u == "string" || u == "number" || u == "symbol" || u == "boolean" ? i !== "__proto__" : i === null;
    }
    function Dn(i) {
      return !!Ut && Ut in i;
    }
    function Pt(i) {
      var u = i && i.constructor, _ = typeof u == "function" && u.prototype || Ie;
      return i === _;
    }
    function re(i) {
      if (i != null) {
        try {
          return xt.call(i);
        } catch {
        }
        try {
          return i + "";
        } catch {
        }
      }
      return "";
    }
    function Wn(i) {
      return Ze(i, !0, !0);
    }
    function jt(i, u) {
      return i === u || i !== i && u !== u;
    }
    function Nn(i) {
      return Xn(i) && ee.call(i, "callee") && (!Ns.call(i, "callee") || ze.call(i) == n);
    }
    var Qe = Array.isArray;
    function Vt(i) {
      return i != null && Kn(i.length) && !Dt(i);
    }
    function Xn(i) {
      return qn(i) && Vt(i);
    }
    var Yn = Ys || Zn;
    function Dt(i) {
      var u = Fe(i) ? ze.call(i) : "";
      return u == v || u == U;
    }
    function Kn(i) {
      return typeof i == "number" && i > -1 && i % 1 == 0 && i <= l;
    }
    function Fe(i) {
      var u = typeof i;
      return !!i && (u == "object" || u == "function");
    }
    function qn(i) {
      return !!i && typeof i == "object";
    }
    function et(i) {
      return Vt(i) ? wn(i) : Rn(i);
    }
    function Gn() {
      return [];
    }
    function Zn() {
      return !1;
    }
    t.exports = Wn;
  }(Te, Te.exports)), Te.exports;
}
var Nc = Wc();
const Xc = /* @__PURE__ */ Dc(Nc), lt = (t) => t.every((s) => typeof s == "object"), os = !0, Ts = () => window.innerWidth;
let ls = Ts();
const Yc = {
  name: "UluTableSticky",
  components: {
    UluTableStickyTable: Vc
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
      required: os
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
      validator: lt,
      required: os
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
      validator: lt
      // required
    },
    /**
     * Array of rows for footer (tfoot)
     */
    footerRows: {
      type: Array,
      validator: lt
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
    const t = this.createColumns();
    return {
      currentColumns: t,
      currentRows: this.createRows(),
      currentFooterRows: this.createRows(!0),
      headerRows: this.createHeaderRows(t),
      sizesCalculated: !1,
      tableWidth: "auto",
      resizeHandler: Ve(this.onResize.bind(this), 500, !0),
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
      const t = this.currentColumns, s = [], e = (l) => {
        l.columns ? l.columns.forEach(e) : s.push(l);
      };
      t.forEach(e);
      let o = [];
      return s.forEach((l, n) => {
        const r = o.slice();
        l.getRowHeaders = (c) => r.map((f) => f(c)).join(" "), l.rowHeader && (l.getRowHeaderId = (c) => `${this.idPrefix}-rh-${c}-${n}`, o.push(l.getRowHeaderId));
      }), s;
    },
    headerHeight() {
      return this.headerRows.reduce((t, s) => t + s.boxHeight, 0);
    },
    /**
     * Reduce the array of column header rows to the first row, first column
     */
    headerRowsFirst() {
      const t = this.headerRows[0], e = [Object.assign({}, t.columns[0], { rowspan: 1, colspan: 1 })];
      return [{
        ...t,
        columns: e,
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
      const t = this.headerRowsFirst[0].height;
      return { width: this.headerRows[0].columns[0].width, height: t };
    }
  },
  methods: {
    resetSorts(t) {
      const s = (e) => {
        e.forEach((o) => {
          t.key !== o.key && (o.sortApplied = !1, o.sortAscending = !1), o.columns && s(o.columns);
        });
      };
      s(this.currentColumns);
    },
    applySort(t) {
      this.resetSorts(t), t.sortApplied ? t.sortAscending = !t.sortAscending : t.sortApplied = !0, this.$emit("columnSort", t);
    },
    onColumnResize() {
      this.sizesPainted && this.refresh();
    },
    headerAdded(t) {
      this.columnResizeObserver.observe(t);
    },
    headerRemoved(t) {
      this.columnResizeObserver.unobserve(t);
    },
    /**
     * Allow classes options to be strings or functions
     */
    resolveClasses(t, s = null) {
      if (!(typeof t > "u"))
        return typeof t == "function" ? t(s) : t;
    },
    /**
     * Handles horizontal scroll
     * - Shifts the first column as the user scrolls
     */
    syncScrollLeft() {
      const t = this.$refs.display.scrollLeft;
      this.$refs.header.$el.style.transform = `translateX(-${t}px)`;
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
      const t = this.$refs.display;
      this.canScrollLeft = t.scrollLeft > 0, this.canScrollRight = t.clientWidth + t.scrollLeft < t.scrollWidth;
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
      const t = this.idCreator("c"), s = Xc(this.columns), e = (o, l) => {
        o.id = t(), o.parent = l, o.width = "auto", o.boxWidth = null, o.sortApplied = !1, o.sortAscending = !1, o.sortFocused = !1;
        let n = [];
        l && (l.headers && l.headers.length ? n = [...l.headers] : n.push(l.id)), n.push(o.id), o.headers = n, o.columns ? o.columns.forEach((r) => e(r, o)) : !o.key && !o.value && !o.slot && console.warn("UluTableSticky: Missing 'key', 'value' or 'slot' in column configuration for", o);
      };
      return s.forEach((o) => e(o, null)), s;
    },
    /**
     * Conversion of the columns (which are nested hierarchy) to a flat list of columns 
     * sorted by the way they need to be displayed in rows 
     * - Used for nested headers
     * - Transform nested data into row arrays
     */
    createHeaderRows(t) {
      const s = this.idCreator("hr"), e = t.reduce(this.maxColumnChildren, 1), o = "auto", l = new Array(e).fill(null).map(() => ({
        height: o,
        boxHeight: null,
        columns: [],
        id: s()
      }));
      function n(r, c) {
        const f = c.columns;
        f && f.forEach((d) => n(1 + r, d)), c.rowspan = f ? 1 : e - r, c.colspan = f ? f.reduce((d, v) => d + v.colspan, 0) : 1, l[r].columns.push(c);
      }
      return t.forEach((r) => n(0, r)), l;
    },
    /**
     * Creates row array for internal use
     * - Avoid mutating user's prop
     */
    createRows(t) {
      const s = this.idCreator(t ? "fr" : "br"), e = t ? this.footerRows : this.rows;
      return e ? e.map((o) => ({
        height: null,
        boxHeight: null,
        data: o,
        id: s()
      })) : [];
    },
    onResize() {
      const t = Ts();
      ls !== t && (ls = t, this.resizing ? (this.resizing = !1, this.setTableSizes(), this.checkOverflowX(), this.syncScrollLeft()) : (this.resizing = !0, this.removeTableSizes()));
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
    idCreator(t) {
      let s = 0;
      return () => `${this.idPrefix}-${t}-${++s}`;
    },
    /**
     * Recursive function used as a reducer to return the deepest nested columns
     */
    maxColumnChildren(t, s) {
      const e = s.columns ? s.columns.reduce(this.maxColumnChildren) + 1 : 1;
      return t > e ? t : e;
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
      const t = (s) => {
        s.boxHeight = null, s.height = "auto";
      };
      this.tableWidth = "auto", this.headerRows.forEach((s) => {
        t(s), s.columns.forEach((e) => {
          e.boxWidth = null, e.width = "auto";
        });
      }), this.firstColumnSticky && (this.currentRows.forEach((s) => t(s)), this.currentFooterRows.forEach((s) => t(s)));
    },
    scrollLeft() {
      const t = this.$refs.display, s = t.scrollLeft, e = this.scrollControlAmount, o = s - e;
      t.scroll({
        left: o < 0 ? 0 : o,
        behavior: "smooth"
      });
    },
    scrollRight() {
      const t = this.$refs.display, s = t.scrollWidth, e = t.scrollLeft, o = this.scrollControlAmount, l = e + o;
      t.scroll({
        left: l > s ? t.scrollWidth : l,
        behavior: "smooth"
      });
    },
    /**
     * Cleanup function for when component is not in use
     */
    setTableSizes() {
      const t = (o, l) => Math.ceil(o.getBoundingClientRect()[l]);
      this.tableWidth = `${t(this.$refs.table.$el, "width")}px`;
      const s = (o) => document.getElementById(o.id), e = (o) => {
        const l = s(o);
        l && (o.boxHeight = t(l, "height"), o.height = `${o.boxHeight}px`);
      };
      this.headerRows.forEach((o) => {
        e(o), o.columns.forEach((l) => {
          const n = s(l);
          n && (l.boxWidth = t(n, "width"), l.width = `${l.boxWidth}px`);
        });
      }), this.firstColumnSticky && (this.currentRows.forEach((o) => e(o)), this.currentFooterRows.forEach((o) => e(o))), this.$nextTick(() => {
        this.sizesCalculated = !0, As(() => {
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
}, Kc = { class: "table-sticky__sticky-wrap table-sticky__sticky-wrap--header" }, qc = { class: "table-sticky__header-wrap" }, Gc = { class: "table-sticky__sticky-wrap table-sticky__sticky-wrap--first-column-header" }, Zc = { class: "table-sticky__sticky-wrap table-sticky__sticky-wrap--controls" }, Jc = {
  key: 2,
  class: "table-sticky__controls-inner"
}, Qc = ["disabled"], eu = ["disabled"], tu = {
  ref: "display",
  class: "table-sticky__display"
};
function su(t, s, e, o, l, n) {
  const r = T("UluTableStickyTable");
  return a(), h("div", {
    class: g(["table-sticky", {
      "table-sticky--overflown-x": l.overflownX,
      "table-sticky--can-scroll-right": l.canScrollRight,
      "table-sticky--can-scroll-left": l.canScrollLeft
    }])
  }, [
    m("div", Kc, [
      m("div", qc, [
        R(r, {
          ref: "header",
          class: "table-sticky__table table-sticky__table--header",
          classes: e.classes,
          caption: e.caption,
          resolveClasses: n.resolveClasses,
          getColumnTitle: e.getColumnTitle,
          idPrefix: e.idPrefix,
          headerRows: l.headerRows,
          style: F({
            opacity: l.sizesCalculated ? "1" : "0",
            pointerEvents: l.sizesCalculated ? "auto" : "none",
            width: l.tableWidth
          }),
          onColumnSorted: n.applySort
        }, ge({ _: 2 }, [
          O(t.$slots, (c, f) => ({
            name: f,
            fn: C((d) => [
              y(t.$slots, f, D(W(d)))
            ])
          }))
        ]), 1032, ["classes", "caption", "resolveClasses", "getColumnTitle", "idPrefix", "headerRows", "style", "onColumnSorted"])
      ])
    ]),
    m("div", Gc, [
      e.firstColumnSticky ? (a(), k(r, {
        key: 0,
        ref: "firstColumnHeader",
        class: "table-sticky__table table-sticky__table--first-column-header",
        classes: e.classes,
        caption: e.caption,
        resolveClasses: n.resolveClasses,
        getColumnTitle: e.getColumnTitle,
        idPrefix: e.idPrefix,
        headerRows: n.headerRowsFirst,
        style: F({
          opacity: n.headerOpacityX,
          pointerEvents: n.headerVisibleX ? "auto" : "none"
        }),
        onColumnSorted: n.applySort
      }, ge({ _: 2 }, [
        O(t.$slots, (c, f) => ({
          name: f,
          fn: C((d) => [
            y(t.$slots, f, D(W(d)))
          ])
        }))
      ]), 1032, ["classes", "caption", "resolveClasses", "getColumnTitle", "idPrefix", "headerRows", "style", "onColumnSorted"])) : w("", !0)
    ]),
    m("div", Zc, [
      J(m("div", {
        class: g(["table-sticky__controls", n.resolveClasses(e.classes.controls)]),
        ref: "controls"
      }, [
        t.$slots.controls ? y(t.$slots, "controls", {
          key: 0,
          scrollLeft: n.scrollLeft,
          scrollRight: n.scrollRight,
          canScrollLeft: l.canScrollLeft,
          canScrollRight: l.canScrollRight
        }) : e.controlsComponent ? (a(), k(M(e.controlsComponent), {
          key: 1,
          scrollLeft: n.scrollLeft,
          scrollRight: n.scrollRight,
          canScrollLeft: l.canScrollLeft,
          canScrollRight: l.canScrollRight
        }, null, 8, ["scrollLeft", "scrollRight", "canScrollLeft", "canScrollRight"])) : (a(), h("div", Jc, [
          m("button", {
            class: g(["table-sticky__control table-sticky__control--left", n.resolveClasses(e.classes.controlButton)]),
            "aria-label": "Scroll Left",
            onClick: s[0] || (s[0] = (...c) => n.scrollLeft && n.scrollLeft(...c)),
            disabled: !l.canScrollLeft
          }, [
            y(t.$slots, "controlLeft", {}, () => [
              s[2] || (s[2] = A(" ← "))
            ])
          ], 10, Qc),
          m("button", {
            class: g(["table-sticky__control table-sticky__control--right", n.resolveClasses(e.classes.controlButton)]),
            "aria-label": "Scroll Right",
            onClick: s[1] || (s[1] = (...c) => n.scrollRight && n.scrollRight(...c)),
            disabled: !l.canScrollRight
          }, [
            y(t.$slots, "controlRight", {}, () => [
              s[3] || (s[3] = A(" → "))
            ])
          ], 10, eu)
        ]))
      ], 2), [
        [dt, n.controlsShown]
      ])
    ]),
    m("div", tu, [
      R(r, {
        ref: "table",
        class: "table-sticky__table table-sticky__table--actual",
        classes: e.classes,
        resolveClasses: n.resolveClasses,
        isActual: "",
        headerRows: l.headerRows,
        rows: l.currentRows,
        footerRows: l.currentFooterRows,
        rowColumns: n.rowColumns,
        caption: e.caption,
        idPrefix: e.idPrefix,
        getRowValue: e.getRowValue,
        getColumnTitle: e.getColumnTitle,
        onVnodeMounted: n.tableReady,
        onActualHeaderRemoved: n.headerRemoved,
        onActualHeaderAdded: n.headerAdded,
        onColumnSorted: n.applySort
      }, ge({ _: 2 }, [
        O(t.$slots, (c, f) => ({
          name: f,
          fn: C((d) => [
            y(t.$slots, f, D(W(d)))
          ])
        }))
      ]), 1032, ["classes", "resolveClasses", "headerRows", "rows", "footerRows", "rowColumns", "caption", "idPrefix", "getRowValue", "getColumnTitle", "onVnodeMounted", "onActualHeaderRemoved", "onActualHeaderAdded", "onColumnSorted"])
    ], 512),
    e.firstColumnSticky ? (a(), k(r, {
      key: 0,
      ref: "firstColumn",
      class: "table-sticky__table table-sticky__table--first-column",
      classes: e.classes,
      resolveClasses: n.resolveClasses,
      caption: e.caption,
      headerRows: n.headerRowsFirst,
      columnWidth: n.firstColumnSize.width,
      rows: l.currentRows,
      footerRows: l.currentFooterRows,
      rowColumns: n.rowColumnsFirst,
      idPrefix: e.idPrefix,
      getRowValue: e.getRowValue,
      getColumnTitle: e.getColumnTitle,
      style: F({
        opacity: n.headerOpacityX,
        pointerEvents: n.headerVisibleX ? "auto" : "none"
      }),
      onColumnSorted: n.applySort
    }, ge({ _: 2 }, [
      O(t.$slots, (c, f) => ({
        name: f,
        fn: C((d) => [
          y(t.$slots, f, D(W(d)))
        ])
      }))
    ]), 1032, ["classes", "resolveClasses", "caption", "headerRows", "columnWidth", "rows", "footerRows", "rowColumns", "idPrefix", "getRowValue", "getColumnTitle", "style", "onColumnSorted"])) : w("", !0)
  ], 2);
}
const gd = /* @__PURE__ */ p(Yc, [["render", su]]);
export {
  td as $,
  Eu as A,
  $u as B,
  To as C,
  Fu as D,
  Mu as E,
  Bu as F,
  Hu as G,
  Lu as H,
  Pu as I,
  ju as J,
  Vu as K,
  Du as L,
  Wu as M,
  Nu as N,
  Xu as O,
  Ss as P,
  Io as Q,
  Yu as R,
  Ku as S,
  qu as T,
  ko as U,
  Gu as V,
  Zu as W,
  Ju as X,
  Qu as Y,
  ed as Z,
  vu as _,
  He as a,
  sd as a0,
  nd as a1,
  id as a2,
  ba as a3,
  ha as a4,
  od as a5,
  ld as a6,
  rd as a7,
  ad as a8,
  cd as a9,
  dd as aa,
  fd as ab,
  hd as ac,
  md as ad,
  yc as ae,
  _d as af,
  gd as ag,
  Uc as ah,
  Vc as ai,
  Pi as aj,
  ce as ak,
  Fo as al,
  _o as am,
  du as an,
  fu as ao,
  hu as ap,
  nt as aq,
  mu as ar,
  ji as as,
  _u as b,
  gu as c,
  yu as d,
  pu as e,
  so as f,
  Ni as g,
  bu as h,
  uu as i,
  wu as j,
  Su as k,
  _e as l,
  ku as m,
  Cu as n,
  Au as o,
  Tu as p,
  Zo as q,
  ud as r,
  Ru as s,
  jo as t,
  Ou as u,
  Uu as v,
  xu as w,
  Iu as x,
  N as y,
  zu as z
};
