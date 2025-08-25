import { ref as $, computed as j, resolveDirective as zi, createElementBlock as d, openBlock as l, Fragment as I, withDirectives as ee, createElementVNode as f, unref as U, normalizeClass as _, renderSlot as m, withKeys as Fi, normalizeStyle as z, createCommentVNode as v, nextTick as Mi, toRef as $a, toDisplayString as y, createBlock as b, Teleport as Ys, resolveDynamicComponent as P, mergeProps as te, reactive as Pi, watchEffect as La, defineAsyncComponent as Ba, markRaw as ge, normalizeProps as K, toRefs as Ha, toValue as Ne, resolveComponent as C, withModifiers as Da, createVNode as A, useSlots as Va, renderList as R, TransitionGroup as Na, withCtx as S, createTextVNode as w, vShow as Js, onMounted as Ka, onUnmounted as Wa, guardReactiveProps as X, vModelCheckbox as $i, vModelText as Ga, vModelSelect as Xa, Transition as kn, createSlots as me } from "vue";
import { inline as Li, offset as Bi, flip as Hi, shift as Di, arrow as Vi, useFloating as Ni, autoUpdate as Ki } from "@floating-ui/vue";
import { Disclosure as Ya, DisclosureButton as Ja, DisclosurePanel as Za, Tab as Qa, TabGroup as eo, TabList as to, TabPanel as so, TabPanels as no } from "@headlessui/vue";
import { RouterLink as Zs } from "vue-router";
import { useDropzone as ro } from "vue3-dropzone";
import io from "gsap";
import ao from "fuse.js";
const qe = {
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
}, le = {
  plugin: { ...qe.plugin },
  popover: { ...qe.popover },
  tooltip: { ...qe.tooltip, ...qe.popover }
}, Qs = $(!1), en = $(null);
function oo(t = {}) {
  return Object.assign(le.popover, t.popover), Object.assign(le.tooltip, t.tooltip), Object.assign(le.plugin, t.plugin), le;
}
function lo(t) {
  return Object.assign({}, le.tooltip, t);
}
function co(t) {
  Qs.value = !0, en.value = t;
}
function uo() {
  Qs.value = !1, en.value = null;
}
const ze = /* @__PURE__ */ new WeakMap(), fo = {
  mounted(t, s) {
    Cn(t, s);
  },
  beforeUpdate(t) {
    An(t);
  },
  updated(t, s) {
    Cn(t, s);
  },
  umounted(t) {
    An(t);
  }
};
function Cn(t, s) {
  const e = ho(t, s);
  if (!e) return;
  let n = null;
  const r = () => {
    n || (n = setTimeout(() => {
      co(e), clearTimeout(n);
    }, e.delay));
  }, i = () => {
    n && (clearTimeout(n), n = null), uo();
  };
  e.showEvents.forEach((a) => {
    t.addEventListener(a, r);
  }), e.hideEvents.forEach((a) => {
    t.addEventListener(a, i);
  }), ze.set(t, { onShow: r, onHide: i, config: e });
}
function An(t) {
  if (!ze.has(t))
    return;
  const { config: s, onShow: e, onHide: n } = ze.get(t);
  s.showEvents.forEach((r) => {
    t.removeEventListener(r, e);
  }), s.hideEvents.forEach((r) => {
    t.removeEventListener(r, n);
  }), ze.delete(t);
}
function ho(t, s) {
  const { value: e } = s;
  let n;
  if (!(e === !1 || e === null))
    return typeof e == "object" ? n = e : n = { content: e }, lo(Object.assign({}, { trigger: t }, n));
}
let _o = 0;
function mo() {
  return `ulu-popovers-uid-${++_o}`;
}
const go = ["disabled", "aria-expanded", "aria-controls", "aria-label"], vo = ["aria-hidden", "id", "data-placement"], yo = { class: "popover__inner" }, po = {
  key: 0,
  class: "popover__footer"
}, tn = {
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
    const e = s, n = t, r = mo(), i = Object.assign({}, le.popover, n.config), a = $(n.startOpen || !1), o = $(null), u = $(null), c = $(null), h = [
      ...i.inline ? [Li()] : [],
      ...i.offset ? [Bi(i.offset)] : [],
      Hi(),
      Di(),
      ...i.arrow ? [Vi({ element: c })] : []
    ], p = {
      placement: i.placement,
      whileElementsMounted: Ki,
      middleware: h
    }, {
      floatingStyles: k,
      placement: q,
      middlewareData: L,
      update: D,
      isPositioned: V
    } = Ni(o, u, p), W = j(() => {
      const F = L.value?.arrow;
      return F ? {
        position: "absolute",
        left: F?.x != null ? `${F.x}px` : "",
        top: F?.y != null ? `${F.y}px` : ""
      } : null;
    });
    i.onReady && i.onReady({ update: D, isPositioned: V });
    const E = () => {
      N(!a.value);
    }, N = (F) => {
      a.value = F;
      const M = {
        trigger: U(o),
        content: U(u),
        isOpen: U(a)
      }, Z = { isOpen: M.isOpen };
      Mi(() => {
        a.value ? (D(), window.setTimeout(() => {
          J(), n.directFocus(M), e("toggle", Z);
        }, 0)) : (G(), n.directFocus(M), e("toggle", Z));
      });
    };
    let B;
    const J = () => {
      n.clickOutsideCloses && (B && G(), B = (F) => {
        u.value.contains(F.target) || N(!1);
      }, document.addEventListener("click", B));
    }, G = () => {
      B && (document.removeEventListener("click", B), B = null);
    }, se = () => N(!1);
    return (F, M) => {
      const Z = zi("ulu-tooltip");
      return l(), d(I, null, [
        ee((l(), d("button", {
          type: "button",
          ref_key: "trigger",
          ref: o,
          onClick: E,
          disabled: t.disabled,
          class: _([
            { [t.activeClass]: a.value },
            t.classes.trigger
          ]),
          "aria-expanded": a.value ? "true" : "false",
          "aria-controls": U(r),
          "aria-label": t.triggerAlt
        }, [
          m(F.$slots, "trigger", { isOpen: a.value })
        ], 10, go)), [
          [Z, t.tooltip ? t.tooltip : null]
        ]),
        f("span", {
          class: _(["popover", [
            t.size ? `popover--${t.size}` : "",
            {
              "popover--no-padding": t.noPadding,
              "is-active": a.value
            },
            t.classes.content
          ]]),
          ref_key: "content",
          ref: u,
          "aria-hidden": a.value ? "false" : "true",
          id: U(r),
          style: z(U(k)),
          "data-placement": U(q),
          onKeydown: M[0] || (M[0] = Fi((T) => N(!1), ["esc"])),
          tabindex: "-1"
        }, [
          f("span", yo, [
            m(F.$slots, "content", { close: se })
          ]),
          F.$slots.footer ? (l(), d("span", po, [
            m(F.$slots, "footer", { close: se })
          ])) : v("", !0),
          U(i).arrow ? (l(), d("span", {
            key: 1,
            class: "popover__arrow",
            ref_key: "contentArrow",
            ref: c,
            style: z(W.value),
            "data-ulu-popover-arrow": ""
          }, null, 4)) : v("", !0)
        ], 46, vo)
      ], 64);
    };
  }
}, bo = ["data-placement"], So = ["innerHTML"], wo = {
  key: 1,
  class: "popover__inner"
}, ko = {
  __name: "UluTooltipPopover",
  props: {
    config: Object
  },
  setup(t) {
    const s = $a(t.config.trigger), e = $(null), n = $(null), r = [
      ...t.config.inline ? [Li()] : [],
      ...t.config.offset ? [Bi(t.config.offset)] : [],
      Hi(),
      Di(),
      ...t.config.arrow ? [Vi({ element: n })] : []
    ], i = {
      placement: t.config.placement,
      whileElementsMounted: Ki,
      middleware: r
    }, {
      floatingStyles: a,
      placement: o,
      middlewareData: u,
      update: c,
      isPositioned: h
    } = Ni(s, e, i), p = j(() => {
      const k = u.value?.arrow;
      return k ? {
        position: "absolute",
        left: k?.x != null ? `${k.x}px` : "",
        top: k?.y != null ? `${k.y}px` : ""
      } : null;
    });
    return t.config.onReady && t.config.onReady({ update: c, isPositioned: h }), (k, q) => (l(), d("span", {
      class: _(["popover popover--tooltip is-active", t.config.class]),
      ref_key: "content",
      ref: e,
      "aria-hidden": "true",
      "data-placement": U(o),
      style: z(U(a))
    }, [
      t.config.isHtml ? (l(), d("span", {
        key: 0,
        class: "popover__inner",
        innerHTML: t.config.content
      }, null, 8, So)) : (l(), d("span", wo, y(t.config.content), 1)),
      t.config.arrow ? (l(), d("span", {
        key: 2,
        class: "popover__arrow",
        ref_key: "contentArrow",
        ref: n,
        style: z(p.value)
      }, null, 4)) : v("", !0)
    ], 14, bo));
  }
}, Co = {
  __name: "UluTooltipDisplay",
  setup(t) {
    return (s, e) => (l(), b(Ys, {
      to: U(le).plugin.tooltipTeleportTo
    }, [
      U(Qs) ? (l(), b(ko, {
        key: 0,
        config: U(en)
      }, null, 8, ["config"])) : v("", !0)
    ], 8, ["to"]));
  }
};
function __(t, s = {}) {
  const e = oo(s);
  e.plugin.global && (t.directive(e.plugin.directiveName, fo), t.component("UluTooltipDisplay", Co), t.component("UluPopover", tn));
}
const g = (t, s) => {
  const e = t.__vccOpts || t;
  for (const [n, r] of s)
    e[n] = r;
  return e;
}, Ao = {
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
function To(t, s, e, n, r, i) {
  return i.currentModal ? (l(), b(P(i.currentModal.component), te({ key: 0 }, i.currentProps, {
    modelValue: r.open,
    "onUpdate:modelValue": s[0] || (s[0] = (a) => r.open = a),
    onVnodeMounted: i.modalMounted,
    onVnodeUnmounted: i.modalUnmounted
  }), null, 16, ["modelValue", "onVnodeMounted", "onVnodeUnmounted"])) : v("", !0);
}
const Ro = /* @__PURE__ */ g(Ao, [["render", To]]);
function Io() {
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
const Wi = {
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
let ve = Pi({ ...Wi });
function m_() {
  return { ...Wi };
}
function g_(t) {
  Object.assign(ve, t);
}
function v_() {
  return ve;
}
function Ke(t) {
  if (!ve.hasOwnProperty(t)) {
    console.warn(`Attempted to access non-existent setting: ${t}`);
    return;
  }
  return ve[t];
}
function y_(t, s) {
  if (typeof t != "string")
    throw new Error("Expected key to be string");
  ve[t] = s;
}
function Oo(t) {
  const s = ve.iconsByType;
  if (!s[t])
    throw new Error(`Icon type "${t}" not found!`);
  return s[t];
}
const Y = {
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
    const s = $(null), { getIconProps: e, getClassesFromDefinition: n } = Io();
    let r;
    const i = t, a = j(() => Ke("fontAwesomeStatic")), o = j(() => Ke("iconComponent")), u = j(() => Ke("iconPropResolver")), c = j(() => {
      if (i.definition)
        return i.definition;
      if (i.type)
        try {
          return Oo(i.type);
        } catch (q) {
          return console.warn(q), null;
        }
      return null;
    }), h = j(() => !o.value || !c.value ? null : u.value(c.value)), p = j(() => e(c.value)), k = j(() => n(c.value));
    return La(async () => {
      if (!a.value && c.value) {
        if (s.value === null)
          if (r)
            s.value = ge(r.FontAwesomeIcon);
          else {
            const q = Ba(async () => {
              const L = await import("./index.es-HlG3u0J5.js");
              return r = L, L.FontAwesomeIcon;
            });
            s.value = ge(q);
          }
      } else
        s.value = null;
    }), (q, L) => o.value ? (l(), b(P(o.value), K(te({ key: 0 }, h.value)), null, 16)) : !a.value && s.value && c.value ? (l(), b(P(s.value), K(te({ key: 1 }, p.value)), null, 16)) : a.value && c.value ? (l(), d("span", {
      key: 2,
      class: _(k.value),
      "aria-hidden": "true"
    }, null, 2)) : v("", !0);
  }
};
function Ws(t) {
  const s = /* @__PURE__ */ new Set();
  if (!t)
    return s;
  if (typeof t == "string")
    t.split(" ").forEach((e) => {
      e && s.add(e);
    });
  else if (Array.isArray(t))
    t.forEach((e) => {
      Ws(e).forEach((n) => s.add(n));
    });
  else if (typeof t == "object")
    for (const e in t)
      Object.prototype.hasOwnProperty.call(t, e) && t[e] && e && s.add(e);
  return s;
}
function ce({ props: t, baseClass: s, internal: e = {} }) {
  const { modifiers: n } = Ha(t);
  return { resolvedModifiers: j(() => {
    const i = Ne(s), a = Ws(Ne(n)), o = Ws(Ne(e));
    if (!i)
      return console.warn("useModifiers: Missing 'baseClass' argument, modifiers will not be applied."), "";
    const u = /* @__PURE__ */ new Set([...o, ...a]);
    return Array.from(u).map((c) => `${i}--${c}`);
  }) };
}
function Gi() {
  return typeof window < "u" && typeof window.document < "u";
}
function xo(t, s) {
  const e = t.getBoundingClientRect();
  return s.clientY < e.top || // above
  s.clientY > e.top + e.height || // below
  s.clientX < e.left || // left side
  s.clientX > e.left + e.width;
}
function Uo(t = document.body, s = window) {
  return s.innerWidth - t.clientWidth;
}
function qo({ preventShift: t = !1, container: s = document.body }) {
  const e = s.style.overflow, n = s.style.paddingRight;
  if (s.style.overflow = "hidden", t) {
    const r = Uo();
    if (r > 0) {
      const i = parseInt(n || "0px", 10);
      s.style.paddingRight = `${i + r}px`;
    }
  }
  return () => {
    s.style.overflow = e, s.style.paddingRight = n;
  };
}
function Me(t, s, e, n) {
  var r;
  return function() {
    var a = n || this, o = arguments, u = function() {
      r = null, e || t.apply(a, o);
    }, c = e && !r;
    clearTimeout(r), r = setTimeout(u, s), c && t.apply(a, o);
  };
}
Gi() && (jo(), zo());
const Tn = {
  /**
   * Event is dispatched when DOM in the page has changed, triggers updates from
   * all modules listening for the change (init instances, etc)
   * - Is triggered by modules that were responsible for modifying the page
   */
  pageModified(t) {
    t.dispatchEvent(pe("pageModified"));
  },
  /**
   * Event called when page is resized
   */
  pageResized(t) {
    t.dispatchEvent(pe("pageResized"));
  },
  /**
   * Event dispatched before page print begins (teardown/restructure/hide things)
   */
  beforePrint(t) {
    t.dispatchEvent(pe("beforePrint"));
  },
  /**
   * Event dispatched after page print (cleanup)
   */
  afterPrint(t) {
    t.dispatchEvent(pe("afterPrint"));
  }
};
function Gs(t, s) {
  Tn[t] ? Tn[t](s) : console.warn(`Unable to dispatch site event: ${t} in context:`, s);
}
function Eo(t) {
  return "ulu:" + t;
}
function pe(t, s = null, e = { bubbles: !0 }) {
  return new CustomEvent(Eo(t), { detail: s, ...e });
}
function jo() {
  window.addEventListener("resize", Me(() => Gs("pageResized", document), 250));
}
function zo() {
  window.addEventListener("beforeprint", () => {
    Gs("beforePrint", document);
  }), window.addEventListener("afterprint", () => {
    Gs("afterPrint", document);
  });
}
function Fo(t) {
  return typeof t == "object" && t?.constructor?.name;
}
function Mo(t, s, e) {
  const n = Fo(s) || "Logger";
  console[t](n, ...e);
}
function _e(t, ...s) {
}
function Ee(t, ...s) {
  Mo("error", t, s);
}
class sn {
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
  #r;
  #t;
  #e;
  #i;
  #a;
  #s;
  #o;
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
  constructor(s, e, n) {
    if (!e || !s) {
      Ee(this, "Missing required elements: control, container");
      return;
    }
    const r = Object.assign({}, sn.defaults, n);
    this.options = r, this.container = s, this.control = e, this.debug = r.debug;
    const i = ["left", "right"], a = ["top", "bottom"], { fromX: o, fromY: u } = r;
    if (!i.includes(o) && o !== null) {
      Ee(this, `Invalid fromX: ${o} (left|right|null)`);
      return;
    }
    if (!a.includes(u) && u !== null) {
      Ee(this, `Invalid fromY: ${u} (top|bottom|null)`);
      return;
    }
    if (!o && !u) {
      Ee(this, "Invalid fromX/fromY, failed to setup resizer (at least one of fromX or fromY must be set)");
      return;
    }
    this.resizeHorizontal = r.fromX !== null, this.resizeVertical = r.fromY !== null, r.manageEvents && (this.#n = this.onPointerdown.bind(this), this.#r = this.onKeydown.bind(this), r.enablePointerResizing && e.addEventListener("pointerdown", this.#n), r.enableKeyboardResizing && e.addEventListener("keydown", this.#r)), this.#c(), r.manageAriaLabel && e.setAttribute("aria-label", this.getAriaLabel());
  }
  /**
   * Resets all internal state properties to their default/inactive values.
   * This centralizes state cleanup and initial setup.
   * @private
   */
  #c() {
    this.#t = null, this.#e = { width: 0, height: 0 }, this.#i = 0, this.#a = 0, this.#s = !1, this.#o = 0, this.#l = 0;
  }
  /**
   * Cleans up event listeners and internal state to prevent memory leaks.
   */
  destroy() {
    const { control: s, options: e } = this;
    e.manageEvents && (e.enablePointerResizing && s.removeEventListener("pointerdown", this.#n), e.enableKeyboardResizing && s.removeEventListener("keydown", this.#r)), this.#t && clearTimeout(this.#t), this.#c(), e.manageAriaLabel && s.removeAttribute("aria-label"), _e(this, "Resizer destroyed.");
  }
  /**
   * Initiates a resize operation.
   * This sets initial dimensions and dispatches the 'resizer:start' event.
   * @param {Object} eventDetails Additional details about the initiating event.
   * @private
   */
  #u(s) {
    const { container: e, options: n } = this;
    if (this.#s) {
      n.overrideMaxDimensions && (this.resizeHorizontal && (e.style.maxWidth = "none"), this.resizeVertical && (e.style.maxHeight = "none"));
      return;
    }
    const i = document.defaultView.getComputedStyle(e);
    this.#e.width = parseInt(i.width, 10), this.#e.height = parseInt(i.height, 10), n.overrideMaxDimensions && (this.resizeHorizontal && (e.style.maxWidth = "none"), this.resizeVertical && (e.style.maxHeight = "none")), this.#s = !0, this.dispatchEvent("resizer:start", s), _e(this, "Resize started.", {
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
  #f(s, e, n) {
    let r = this.#e.width, i = this.#e.height;
    const { fromX: a, fromY: o, multiplier: u } = this.options;
    this.resizeHorizontal && (a === "right" ? r = this.#e.width + s * u : a === "left" && (r = this.#e.width - s * u), this.container.style.width = `${Math.max(0, r)}px`), this.resizeVertical && (o === "bottom" ? i = this.#e.height + e * u : o === "top" && (i = this.#e.height - e * u), this.container.style.height = `${Math.max(0, i)}px`);
    const c = {
      newWidth: r,
      newHeight: i,
      totalDeltaX: s,
      totalDeltaY: e,
      event: n
    };
    this.dispatchEvent("resizer:update", c), _e(this, "Resizing update.", c);
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
    this.#o = s.clientX, this.#l = s.clientY, this.#u({
      inputType: "pointer",
      startX: s.clientX,
      startY: s.clientY,
      pointerId: s.pointerId
    }), this.control.setPointerCapture(s.pointerId);
    const n = (i) => {
      const a = i.clientX - this.#o, o = i.clientY - this.#l;
      this.#f(a, o, i);
    }, r = (i) => {
      e.removeEventListener("pointermove", n, !1), e.removeEventListener("pointerup", r, { capture: !0, once: !0 }), this.control.hasPointerCapture(i.pointerId) && this.control.releasePointerCapture(i.pointerId), this.#d();
    };
    e.addEventListener("pointermove", n, !1), e.addEventListener("pointerup", r, { capture: !0, once: !0 });
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
    const { key: e } = s, { keyboardStep: n, keyboardDebounceTime: r } = this.options;
    let i = 0, a = 0, o = !1;
    this.resizeHorizontal && (e === "ArrowLeft" ? (i = -n, o = !0) : e === "ArrowRight" && (i = n, o = !0)), this.resizeVertical && (e === "ArrowUp" ? (a = -n, o = !0) : e === "ArrowDown" && (a = n, o = !0)), o && (s.preventDefault(), s.stopPropagation(), (!this.#s || this.#t === null) && this.#u({ inputType: "keyboard", keyboardKey: e }), this.#i += i, this.#a += a, this.#f(this.#i, this.#a, s), this.#t && clearTimeout(this.#t), this.#t = setTimeout(() => {
      this.#d(), this.#t = null;
    }, r));
  }
  /**
   * Generates an accessible label for the resize control based on its configuration.
   * This is a convenience function that can be used by the consumer if `manageAriaLabel` is false.
   * @returns {string} The suggested aria-label for the control.
   */
  getAriaLabel() {
    const { fromY: s, fromX: e } = this.options, n = [s, e].filter((r) => r);
    return n.length === 0 ? "Resize control" : `Resize from ${n.join(" ")} edge`;
  }
  /**
   * Dispatches a custom event on the container element.
   * @param {string} type The event type (e.g., "resizer:start", "resizer:update", "resizer:end").
   * @param {Object} [data={}] Optional data to attach to the event's detail property.
   */
  dispatchEvent(s, e = {}) {
    this.container.dispatchEvent(pe(s, e));
  }
}
let We = 0;
const Po = {
  name: "UluModal",
  components: {
    UluIcon: Y
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
  setup(t) {
    const s = Va(), e = j(() => t.title || s.title), n = j(() => {
      const { allowResize: o, position: u } = t;
      if (!o || !u) return;
      const c = ["left", "right", "center"];
      return c.includes(u) ? !0 : (console.warn(`Passed invalid position for resize (${u}), use ${c.join(", ")}`), !1);
    }), r = j(() => t.position === "center" ? "resizeBoth" : "resizeHorizontal"), i = j(() => ({
      [t.position]: t.position,
      resize: t.allowResize,
      "no-resize": !t.allowResize,
      "no-header": !e.value,
      "body-fills": t.bodyFills,
      "no-backdrop": t.noBackdrop,
      "no-min-height": t.noMinHeight,
      "non-modal": t.nonModal,
      "resizer-active": n.value
    })), { resolvedModifiers: a } = ce({
      props: t,
      baseClass: "modal",
      internal: i
    });
    return {
      resolvedModifiers: a,
      hasHeader: e,
      resizerEnabled: n,
      resizerIconType: r
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
        s === e && xo(e, t) && this.close();
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
        t.newState === "open" ? this.restoreScroll = qo({ preventShift: s }) : this.destroyPreventScroll();
      }
    },
    setupResizer() {
      const { position: t, resizerEnabled: s } = this;
      if (s) {
        const { container: e, resizer: n } = this.$refs, r = t === "center" ? { fromX: "right", fromY: "bottom", multiplier: 2 } : { fromX: t === "right" ? "left" : "right" };
        this.resizerInstance = new sn(e, n, r), this.handleResizerStart = () => {
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
    ++We, this.preventScroll && this.setupPreventScroll(), this.setupResizer();
  },
  beforeUnmount() {
    const { container: t } = this.$refs;
    t && t.open && t.close(), this.destroyPreventScroll(), this.destroyResizer();
  }
}, $o = ["aria-labelledby", "aria-describedby"], Lo = ["id"], Bo = { class: "modal__title-text" }, Ho = {
  key: 2,
  class: "modal__resizer",
  ref: "resizer",
  type: "button"
};
function Do(t, s, e, n, r, i) {
  const a = C("UluIcon");
  return l(), b(Ys, {
    to: e.teleport === !1 ? null : e.teleport,
    disabled: e.teleport === !1
  }, [
    f("dialog", {
      class: _(["modal", [n.resolvedModifiers, e.classes.container]]),
      "aria-labelledby": i.resolvedLabelledby,
      "aria-describedby": e.describedby,
      ref: "container",
      style: z({ width: r.containerWidth }),
      onCancel: s[1] || (s[1] = Da((...o) => i.close && i.close(...o), ["prevent"])),
      onClose: s[2] || (s[2] = (...o) => i.handleDialogCloseEvent && i.handleDialogCloseEvent(...o)),
      onClick: s[3] || (s[3] = (...o) => i.handleClick && i.handleClick(...o)),
      onToggle: s[4] || (s[4] = (...o) => i.handleToggle && i.handleToggle(...o))
    }, [
      n.hasHeader ? (l(), d("header", {
        key: 0,
        class: _(["modal__header", e.classes.header])
      }, [
        f("h2", {
          class: _(["modal__title", e.classes.title]),
          id: r.titleId
        }, [
          m(t.$slots, "title", { close: i.close }, () => [
            e.titleIcon ? (l(), b(a, {
              key: 0,
              class: "modal__title-icon",
              definition: e.titleIcon
            }, null, 8, ["definition"])) : v("", !0),
            f("span", Bo, y(e.title), 1)
          ])
        ], 10, Lo),
        f("button", {
          class: "modal__close",
          "aria-label": "Close modal",
          onClick: s[0] || (s[0] = (...o) => i.close && i.close(...o)),
          autofocus: ""
        }, [
          m(t.$slots, "closeIcon", {}, () => [
            A(a, {
              class: "modal__close-icon",
              type: "close",
              definition: e.closeIcon
            }, null, 8, ["definition"])
          ])
        ])
      ], 2)) : v("", !0),
      f("div", {
        class: _(["modal__body", e.classes.body])
      }, [
        m(t.$slots, "default", { close: i.close })
      ], 2),
      t.$slots.footer ? (l(), d("div", {
        key: 1,
        class: _(["site-modal__footer", e.classes.footer])
      }, [
        m(t.$slots, "footer", { close: i.close })
      ], 2)) : v("", !0),
      n.resizerEnabled ? (l(), d("button", Ho, [
        m(t.$slots, "resizerIcon", {}, () => [
          A(a, {
            class: "modal__resizer-icon",
            type: n.resizerIconType,
            definition: e.resizerIcon
          }, null, 8, ["type", "definition"])
        ])
      ], 512)) : v("", !0)
    ], 46, $o)
  ], 8, ["to", "disabled"]);
}
const Vo = /* @__PURE__ */ g(Po, [["render", Do]]), be = [], No = $({
  /**
   * Holds active component options (including component, and options)
   */
  active: null,
  /**
   * Populated with any props passed to open method, bound to modal component
   */
  activeProps: null
}), Se = No.value, Rn = {
  data: Se,
  modals: be
}, Ko = (t) => ({
  open(s, e = null) {
    const n = this.get(s);
    Se.active = ge(n), Se.activeProps = Object.assign({}, n.props, e);
  },
  /**
   * Close the active modal
   * @param {String|Node} focusTo The element or selector for an element to programmatically focus after modal close
   * @see https://www.deque.com/blog/accessible-routing-in-javascript-frameworks/
   */
  close() {
    Se.active = null, Se.activeProps = null;
  },
  /**
   * Get a modal's config object by name
   * @return {Object} Modal config object
   */
  get(s) {
    const e = be.find((n) => n.name === s);
    if (e)
      return e;
    throw new Error(`Unable to find modal named: ${s}`);
  },
  /**
   * Add a modal config
   */
  add(s) {
    const e = t(s);
    be.push(e);
  },
  /**
   * Removes a modal config by name
   * @return {Object} Modal that was removed
   */
  remove(s) {
    const e = be.findIndex((n) => n.name === s);
    if (e > -1)
      return be.splice(e, 1);
    warn("unable to find modal to remove");
  }
}), Wo = {
  componentNameDisplay: "UluModalsDisplay",
  componentNameModal: "UluModal",
  modals: [],
  modalOptions: {}
};
function p_(t, s) {
  const e = Object.assign({}, Wo, s), r = Ko((i) => Object.assign({}, e.modalOptions, i));
  t.component(e.componentNameDisplay, Ro), t.component(e.componentNameModal, Vo), e.modals.forEach((i) => {
    r.add(i);
  }), Rn.options = e, t.config.globalProperties.$uluModals = r, t.provide("uluModals", r), t.config.globalProperties.$uluModalsState = Rn;
}
const Go = {
  name: "UluToast",
  components: {
    UluIcon: Y
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
}, Xo = ["onClick"];
function Yo(t, s, e, n, r, i) {
  const a = C("FaIcon"), o = C("UluIcon");
  return l(), d("div", {
    class: _(["toast", [
      {
        "toast--persistent": !e.toast.duration
      },
      e.toast?.class
    ]])
  }, [
    e.toast.icon || t.$slots.icon ? (l(), d("div", {
      key: 0,
      class: _(["toast__icon", e.classes.icon])
    }, [
      m(t.$slots, "icon", { toast: e.toast }, () => [
        e.toast.icon ? (l(), b(a, {
          key: 0,
          icon: e.toast.icon
        }, null, 8, ["icon"])) : v("", !0)
      ])
    ], 2)) : v("", !0),
    f("div", {
      class: _(["toast__content", e.classes.content])
    }, [
      m(t.$slots, "content", { toast: e.toast }, () => [
        e.toast.title ? (l(), d("div", {
          key: 0,
          class: _(["toast__header", e.classes.header])
        }, [
          f("strong", {
            class: _(["toast__title", e.classes.title])
          }, y(e.toast.title), 3),
          e.toast.date ? (l(), d("span", {
            key: 0,
            class: _(["toast__date", e.classes.date])
          }, y(e.toast.date), 3)) : v("", !0)
        ], 2)) : v("", !0),
        e.toast.description ? (l(), d("div", {
          key: 1,
          class: _(["toast__body", e.classes.body])
        }, y(e.toast.description), 3)) : v("", !0)
      ])
    ], 2),
    e.toast.actions?.length ? (l(), d("div", {
      key: 1,
      class: _(["toast__actions", e.classes.actions])
    }, [
      (l(!0), d(I, null, R(e.toast.actions, (u, c) => (l(), d("button", {
        key: c,
        class: _(["toast__action", e.classes.action]),
        onClick: (h) => i.handleAction(h, u)
      }, y(u.label), 11, Xo))), 128))
    ], 2)) : v("", !0),
    f("button", {
      class: _(["toast__close", e.classes.closeButton]),
      onClick: s[0] || (s[0] = (...u) => e.toast.close && e.toast.close(...u))
    }, [
      A(o, { type: "close" })
    ], 2)
  ], 2);
}
const Xi = /* @__PURE__ */ g(Go, [["render", Yo]]), In = {
  toastOptions: {
    /**
     * Component used to render the toast in the display
     */
    component: ge(Xi),
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
}, { assign: Ge } = Object;
let Jo = 0;
const ae = Pi({
  toasts: [],
  /**
   * Saveable 
   */
  pluginOptions: In.pluginOptions,
  toastOptions: In.toastOptions,
  setToastOptions(t) {
    return this.toastOptions = Ge({}, this.toastOptions, t), this.pluginOptions;
  },
  setPluginOptions(t) {
    return this.pluginOptions = Ge({}, this.pluginOptions, t), this.pluginOptions;
  },
  createToast(t) {
    const s = `toast-${++Jo}`;
    return Ge({}, this.toastOptions, t, {
      uid: s,
      close() {
        Xs.remove(s);
      }
    });
  }
}), Xs = {
  /**
   * 
   * @param {Object} options Toast options
   * @returns Toast object (to be used to remove)
   */
  add(t) {
    const s = ae.createToast(t);
    return ae.toasts.unshift(s), s.duration && setTimeout(() => {
      this.remove(s.uid);
    }, s.duration), s;
  },
  /**
   * 
   * @param {Object} toast Toast uid
   */
  remove(t) {
    const s = ae.toasts.findIndex((e) => e.uid === t);
    s > -1 && ae.toasts.splice(s, 1);
  },
  /**
   * Remove all toasts
   */
  removeAll() {
    ae.toasts = [];
  }
}, Zo = {
  name: "UluTooltipDisplay",
  data() {
    const { toasts: t, pluginOptions: s } = ae;
    return { toasts: t, pluginOptions: s };
  },
  computed: {
    classes() {
      const { position: t } = this.pluginOptions;
      return t.map((e) => `toast-container--${e}`);
    }
  }
};
function Qo(t, s, e, n, r, i) {
  return l(), b(Ys, {
    to: r.pluginOptions.teleportTo
  }, [
    A(Na, {
      class: _(["toast-container", i.classes]),
      name: "toast",
      tag: "div"
    }, {
      default: S(() => [
        (l(!0), d(I, null, R(r.toasts, (a) => (l(), b(P(a.component), {
          key: a.uid,
          toast: a
        }, null, 8, ["toast"]))), 128))
      ]),
      _: 1
    }, 8, ["class"])
  ], 8, ["to"]);
}
const el = /* @__PURE__ */ g(Zo, [["render", Qo]]);
function b_(t, s = {}) {
  const e = ae.setPluginOptions(s?.plugin);
  ae.setToastOptions(s?.toast), t.component(e.componentName, Xi), t.component(e.componentNameDisplay, el), t.config.globalProperties.$uluToast = Xs, t.provide("uluToast", Xs);
}
const tl = {
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
function sl(t) {
  const s = Object.assign({}, tl, t), e = $(null), n = $(s.initialValue), r = $(null);
  return (async () => {
    if (!Gi()) return;
    await new Promise((h) => {
      document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", () => h()) : h();
    });
    const a = await import("./breakpoints-ClT9bfZm.js"), { BreakpointManager: o } = a, u = ge(new o(s.plugin));
    e.value = ge(u);
    const c = () => {
      n.value = u.active, r.value = u.resizeDirection;
    };
    c(), s.onReady && s.onReady(u), u.onChange(c);
  })(), { breakpointManager: e, breakpointActive: n, breakpointDirection: r };
}
const nl = {
  /**
   * Breakpoint for mobile down/max
   */
  breakpointMobile: "small",
  /**
   * Options to pass to useBreakpointManager()
   */
  managerOptions: {}
};
function S_(t, s) {
  const e = $(!1), n = Object.assign({}, nl, s), { breakpointMobile: r } = n, { onReady: i } = n.managerOptions, a = {
    onReady(p) {
      p.at(r).max({
        on() {
          e.value = !0;
        },
        off() {
          e.value = !1;
        }
      }), i && i(p);
    }
  }, o = Object.assign({}, n.managerOptions, a), {
    breakpointManager: u,
    breakpointActive: c,
    breakpointDirection: h
  } = sl(o);
  t.provide("uluBreakpointActive", j(() => c.value)), t.provide("uluBreakpointDirection", j(() => h.value)), t.provide("uluBreakpointManager", j(() => u.value)), t.provide("uluIsMobile", j(() => e.value));
}
const w_ = {
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
    return (n, r) => (l(), b(U(Ya), { defaultOpen: t.defaultOpen }, {
      default: S(({ open: i }) => [
        f("div", {
          class: _(["accordion", [
            { [t.activeClass]: i },
            t.classes.container,
            U(e)
          ]])
        }, [
          A(U(Ja), {
            class: _(["accordion__summary", [
              { [t.activeClass]: i },
              t.classes.summary
            ]])
          }, {
            default: S(() => [
              m(n.$slots, "summary", { open: i }, () => [
                (l(), b(P(t.summaryTextElement), null, {
                  default: S(() => [
                    w(y(t.summaryText), 1)
                  ]),
                  _: 1
                }))
              ]),
              m(n.$slots, "icon", { open: i }, () => [
                f("span", {
                  class: _(["accordion__icon", t.classes.icon])
                }, [
                  A(Y, {
                    type: i ? "collapse" : "expand",
                    style: { display: "inline" }
                  }, null, 8, ["type"])
                ], 2)
              ])
            ]),
            _: 2
          }, 1032, ["class"]),
          A(U(Za), {
            class: _(["accordion__content", t.classes.content])
          }, {
            default: S(() => [
              m(n.$slots, "default", { open: i })
            ]),
            _: 2
          }, 1032, ["class"])
        ], 2)
      ]),
      _: 3
    }, 8, ["defaultOpen"]));
  }
};
let rl = 0;
const il = {
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
      const s = this.$refs.content, e = s.scrollHeight, n = () => {
        s.addEventListener("transitionend", a), this.contentHeight = e + "px", this.$nextTick(r);
      }, r = () => {
        this.transitionsDisabled = !1, this.$nextTick(() => {
          requestAnimationFrame(i);
        });
      }, i = () => {
        this.contentHeight = "0px", this.transitionFades && (this.contentOpacity = 0);
      }, a = () => {
        this.isOpen = !1, this.isHidden = !0, this.removeTransition(), this.$emit("collapsible-closed");
      }, o = () => {
        i(), a();
      };
      this.onCleanupTransition = () => {
        clearTimeout(t), s.removeEventListener("transitionend", a);
      }, this.transitionsDisabled = !0, this.isTransitioning = !0, this.$emit("collapsible-closing"), this.$nextTick(() => {
        requestAnimationFrame(n), t = setTimeout(o, this.transitionTimeout);
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
      const t = `Ulu-C-${++rl}`;
      return document.getElementById(t) ? this.getUid() : t;
    }
  }
}, al = ["id", "aria-controls", "aria-expanded"], ol = ["id", "aria-hidden", "aria-labelledby"], ll = { class: "CollapsibleRegion__content-inner" };
function cl(t, s, e, n, r, i) {
  return l(), d("div", {
    class: _(["CollapsibleRegion", {
      "CollapsibleRegion--open": r.isOpen,
      "CollapsibleRegion--closed": !r.isOpen,
      "CollapsibleRegion--transitioning": r.isTransitioning
    }]),
    onKeydown: s[1] || (s[1] = Fi((...a) => i.handleEscape && i.handleEscape(...a), ["esc"]))
  }, [
    f("button", {
      class: "CollapsibleRegion__toggle",
      id: r.toggleId,
      "aria-controls": r.contentId,
      "aria-expanded": r.isOpen,
      onClick: s[0] || (s[0] = (...a) => i.toggle && i.toggle(...a))
    }, [
      m(t.$slots, "toggle", { isOpen: r.isOpen }, () => [
        w(y(e.title), 1)
      ])
    ], 8, al),
    ee(f("div", {
      class: "CollapsibleRegion__content",
      tabindex: "-1",
      ref: "content",
      id: r.contentId,
      "aria-hidden": !r.isOpen,
      "aria-labelledby": r.toggleId,
      style: z(i.contentStyles)
    }, [
      f("div", ll, [
        m(t.$slots, "default")
      ])
    ], 12, ol), [
      [Js, !r.isHidden]
    ])
  ], 34);
}
const ul = /* @__PURE__ */ g(il, [["render", cl]]), dl = {
  name: "UluTag",
  components: {
    UluIcon: Y
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
function fl(t, s, e, n, r, i) {
  const a = C("UluIcon");
  return l(), d("span", {
    class: _(["tag", [
      {
        "tag--small": e.small,
        "type-small": e.small,
        [`tag--${e.type}`]: e.type
      },
      n.resolvedModifiers
    ]])
  }, [
    e.icon ? (l(), b(a, {
      key: 0,
      definition: e.icon
    }, null, 8, ["definition"])) : v("", !0),
    m(t.$slots, "default", {}, () => [
      w(y(e.text), 1)
    ])
  ], 2);
}
const hl = /* @__PURE__ */ g(dl, [["render", fl]]), _l = {
  name: "UluMenu",
  components: {
    UluIcon: Y,
    UluTag: hl
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
function ml(t, s, e, n, r, i) {
  const a = C("UluIcon"), o = C("UluTag"), u = C("UluMenu", !0), c = zi("ulu-tooltip");
  return e.items?.length ? (l(), d("ul", {
    key: 0,
    class: _(e.classes.list)
  }, [
    (l(!0), d(I, null, R(e.items, (h, p) => (l(), d("li", {
      key: p,
      class: _([e.classes.item, h?.classes?.item])
    }, [
      ee((l(), b(P(h.to || h.path ? "router-link" : h.click ? "button" : "a"), te({ ref_for: !0 }, {
        ...h.to || h.path ? { to: h.to || h.path } : {},
        ...h.href ? { href: h.href || "#" } : {}
      }, {
        onClick: (k) => {
          i.handleItemClick(k, h);
        },
        class: [e.classes.link, h?.classes?.link],
        activeClass: e.classes.linkActive,
        exactActiveClass: e.classes.linkExactActive,
        "aria-label": e.iconOnly ? h.title : null,
        id: h.id
      }), {
        default: S(() => [
          m(t.$slots, "default", {
            item: h,
            index: p
          }, () => [
            h.icon ? (l(), b(a, {
              key: 0,
              definition: h.icon,
              class: _([e.classes.linkIcon, h?.classes?.linkIcon])
            }, null, 8, ["definition", "class"])) : v("", !0),
            f("span", {
              class: _([e.classes.linkText, h?.classes?.linkText])
            }, y(h.title), 3),
            h.tag ? (l(), b(o, te({
              key: 1,
              ref_for: !0
            }, h.tag), null, 16)) : v("", !0)
          ])
        ]),
        _: 2
      }, 1040, ["onClick", "class", "activeClass", "exactActiveClass", "aria-label", "id"])), [
        [c, e.iconOnly ? h.title : h.tooltip || null]
      ]),
      !e.noChildren && h?.children?.length ? (l(), b(u, {
        key: 0,
        iconOnly: e.iconOnly,
        classes: e.classes,
        items: h.children
      }, null, 8, ["iconOnly", "classes", "items"])) : v("", !0)
    ], 2))), 128))
  ], 2)) : v("", !0);
}
const Yi = /* @__PURE__ */ g(_l, [["render", ml]]), gl = {
  name: "UluMenuStack",
  components: {
    UluMenu: Yi
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
function vl(t, s, e, n, r, i) {
  const a = C("UluMenu");
  return l(), d("nav", {
    class: _(["menu-stack", {
      "menu-stack--hanging": e.hanging,
      "menu-stack--compact": e.compact
    }])
  }, [
    A(a, {
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
const yl = /* @__PURE__ */ g(gl, [["render", vl]]), pl = {
  name: "UluDropdown",
  components: {
    UluPopover: tn,
    UluMenuStack: yl
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
function bl(t, s, e, n, r, i) {
  const a = C("UluMenuStack"), o = C("UluPopover");
  return l(), b(o, { classes: e.popoverClasses }, {
    trigger: S(({ isOpen: u }) => [
      m(t.$slots, "default", { isOpen: u })
    ]),
    content: S(() => [
      A(a, { items: e.items }, null, 8, ["items"])
    ]),
    _: 3
  }, 8, ["classes"]);
}
const k_ = /* @__PURE__ */ g(pl, [["render", bl]]), nn = $(!1), Fe = {
  start: [],
  end: []
};
function rn() {
  window.removeEventListener("resize", rn), nn.value = !0, Fe.start.forEach((t) => t());
}
function Sl() {
  nn.value = !1, Fe.end.forEach((t) => t()), window.addEventListener("resize", rn);
}
window.addEventListener("resize", rn), window.addEventListener("resize", Me(Sl, 300));
function On(t, s) {
  return t.push(s), () => {
    const e = t.findIndex((n) => n === s);
    e > -1 && t.splice(e);
  };
}
function wl() {
  return {
    resizing: nn,
    onResizeStart(t) {
      return On(Fe.start, t);
    },
    onResizeEnd(t) {
      return On(Fe.end, t);
    }
  };
}
const kl = { class: "layout-flex-baseline" }, Cl = { class: "type-word-break" }, C_ = {
  __name: "UluOverflowPopover",
  props: {
    /**
     * Default icon for overflow popover trigger
     */
    triggerIcon: String
  },
  setup(t) {
    const { resizing: s, onResizeEnd: e } = wl(), n = $(null), r = $(!1), i = () => {
      Mi(() => {
        const o = n.value;
        r.value = o.offsetWidth < o.scrollWidth;
      });
    }, a = e(i);
    return Ka(i), Wa(a), (o, u) => (l(), d("div", kl, [
      f("div", {
        class: "type-truncate",
        ref_key: "text",
        ref: n
      }, [
        m(o.$slots, "default")
      ], 512),
      r.value && !U(s) ? (l(), b(tn, {
        key: 0,
        triggerAlt: "Show Full Text",
        size: "large"
      }, {
        trigger: S(() => [
          A(Y, {
            type: "ellipsis",
            definition: t.triggerIcon
          }, null, 8, ["definition"])
        ]),
        content: S(() => [
          f("div", Cl, [
            m(o.$slots, "default")
          ])
        ]),
        _: 3
      })) : v("", !0)
    ]));
  }
}, A_ = {
  __name: "UluTab",
  setup(t) {
    return (s, e) => (l(), b(U(Qa), null, {
      default: S((n) => [
        m(s.$slots, "default", K(X(n)))
      ]),
      _: 3
    }));
  }
}, T_ = /* @__PURE__ */ Object.assign({
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
    return (s, e) => (l(), b(U(eo), {
      defaultIndex: t.defaultIndex,
      vertical: t.vertical
    }, {
      default: S((n) => [
        f("div", {
          class: _(["tabs", {
            "tabs--vertical": t.vertical
          }])
        }, [
          m(s.$slots, "default", K(X(n)))
        ], 2)
      ]),
      _: 3
    }, 8, ["defaultIndex", "vertical"]));
  }
}), R_ = {
  __name: "UluTabList",
  setup(t) {
    return (s, e) => (l(), b(U(to), { class: "tabs__tablist" }, {
      default: S(() => [
        m(s.$slots, "default")
      ]),
      _: 3
    }));
  }
}, I_ = {
  __name: "UluTabPanel",
  setup(t) {
    return (s, e) => (l(), b(U(so), null, {
      default: S((n) => [
        m(s.$slots, "default", K(X(n)))
      ]),
      _: 3
    }));
  }
}, O_ = {
  __name: "UluTabPanels",
  setup(t) {
    return (s, e) => (l(), b(U(no), null, {
      default: S((n) => [
        m(s.$slots, "default", K(X(n)))
      ]),
      _: 3
    }));
  }
}, Al = {
  name: "UluButton",
  components: {
    UluIcon: Y
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
      return this.to ? Zs : this.href ? "a" : "button";
    },
    attrs() {
      const { to: t, href: s, download: e, target: n } = this, r = t ? { to: t } : s ? { href: s } : {};
      return s && (n && (r.target = n), e && (r.download = typeof e == "string" ? e : !0)), r;
    }
  }
}, Tl = { key: 1 };
function Rl(t, s, e, n, r, i) {
  const a = C("UluIcon");
  return l(), b(P(i.element), te({
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
      i.classes,
      n.resolvedModifiers
    ]]
  }, i.attrs, { "aria-label": i.resolvedAriaLabel }), {
    default: S(() => [
      m(t.$slots, "before"),
      e.icon && (e.iconBefore || e.iconOnly) ? (l(), b(a, {
        key: 0,
        definition: e.icon,
        class: "button__icon"
      }, null, 8, ["definition"])) : v("", !0),
      (t.$slots.default || e.text) && !e.iconOnly ? (l(), d("span", Tl, [
        m(t.$slots, "default", {}, () => [
          w(y(e.text), 1)
        ])
      ])) : v("", !0),
      e.icon && !e.iconBefore && !e.iconOnly ? (l(), b(a, {
        key: 2,
        definition: e.icon,
        class: "button__icon"
      }, null, 8, ["definition"])) : v("", !0),
      m(t.$slots, "after")
    ]),
    _: 3
  }, 16, ["class", "aria-label"]);
}
const Il = /* @__PURE__ */ g(Al, [["render", Rl]]), Ol = {
  name: "UluAlert",
  components: {
    UluButton: Il,
    UluIcon: Y
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
      internal: j(() => ({
        [t.type]: t.type,
        compact: t.compact
      }))
    });
    return { resolvedModifiers: s };
  }
}, xl = { class: "layout-flex" }, Ul = { class: "type-small" }, ql = {
  key: 0,
  class: "margin-left-auto align-self-center"
};
function El(t, s, e, n, r, i) {
  const a = C("UluIcon");
  return l(), d("div", {
    class: _(["callout", n.resolvedModifiers])
  }, [
    f("div", xl, [
      A(a, {
        class: _(["type-large margin-right-small", `color-${e.type}`]),
        type: e.type,
        definition: e.icon
      }, null, 8, ["class", "type", "definition"]),
      f("div", Ul, [
        f("div", null, [
          m(t.$slots, "title", {}, () => [
            f("strong", null, y(e.title), 1)
          ])
        ]),
        f("div", null, [
          m(t.$slots, "description", {}, () => [
            w(y(e.description), 1)
          ])
        ])
      ]),
      t.$slots.action ? (l(), d("div", ql, [
        m(t.$slots, "action")
      ])) : v("", !0)
    ])
  ], 2);
}
const x_ = /* @__PURE__ */ g(Ol, [["render", El]]), jl = {
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
      return t ? "button" : s ? Zs : e ? "a" : "span";
    }
  }
}, zl = ["aria-hidden"], Fl = {
  key: 2,
  class: "hidden-visually"
};
function Ml(t, s, e, n, r, i) {
  return l(), b(P(i.element), {
    class: _(["badge", [
      e.size ? `badge--${e.size}` : null,
      e.type ? `badge--${e.type}` : null,
      { "badge--clickable": i.isInteractive }
    ]]),
    to: e.to,
    href: e.href,
    onClick: e.click
  }, {
    default: S(() => [
      f("span", {
        class: _(["badge__inner", { "skeleton__background-color": e.skeleton }])
      }, [
        e.text ? (l(), d("span", {
          key: 0,
          "aria-hidden": e.alt ? "true" : null
        }, y(e.text), 9, zl)) : m(t.$slots, "default", { key: 1 }),
        e.alt ? (l(), d("span", Fl, y(e.alt), 1)) : v("", !0)
      ], 2)
    ]),
    _: 3
  }, 8, ["class", "to", "href", "onClick"]);
}
const Pl = /* @__PURE__ */ g(jl, [["render", Ml]]), $l = {
  name: "UluBadgeStack",
  components: {
    UluBadge: Pl
  },
  props: {
    /**
     * Array of props for each badge
     */
    items: Array
  }
}, Ll = { class: "badge-stack" };
function Bl(t, s, e, n, r, i) {
  const a = C("UluBadge");
  return l(), d("ul", Ll, [
    (l(!0), d(I, null, R(e.items, (o, u) => (l(), d("li", {
      class: "badge-stack__item",
      key: u
    }, [
      A(a, te({ ref_for: !0 }, o), null, 16)
    ]))), 128))
  ]);
}
const U_ = /* @__PURE__ */ g($l, [["render", Bl]]), Hl = {
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
function Dl(t, s, e, n, r, i) {
  return l(), d("div", {
    class: _(["callout", [n.resolvedModifiers, { "full-height": e.fullHeight }]])
  }, [
    m(t.$slots, "default")
  ], 2);
}
const q_ = /* @__PURE__ */ g(Hl, [["render", Dl]]), xn = (t, s) => {
  const e = !(s.to || s.href);
  return e || console.warn("'titleHref' and 'titleTo' can't be used with to or href (nesting links)"), e;
}, Vl = {
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
      validator: xn
    },
    /**
     * Will make title a link to href
     */
    titleHref: {
      type: String,
      validator: xn
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
    const { proxyClickOptions: t, proxyClick: s, titleHref: e, titleTo: n } = this;
    return {
      proxyClickEnabled: s && (e || n) || null,
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
      return s ? Zs : e ? "a" : t;
    }
  },
  methods: {
    onMousedown({ target: t, timeStamp: s }) {
      if (!this.proxyClickEnabled) return;
      const { resolvedProxyOptions: e } = this, { selectorPrevent: n } = e;
      this.shouldProxy = !1, t.matches(n) || (this.shouldProxy = !0, this.proxyStart = s);
    },
    onMouseup({ timeStamp: t }) {
      if (!this.proxyClickEnabled) return;
      const { link: s } = this.$refs, { resolvedProxyOptions: e } = this, { mousedownDurationPrevent: n } = e;
      this.shouldProxy && t - this.proxyStart < n && s.click();
    }
  }
}, Nl = { class: "card__body" }, Kl = { class: "card__main" }, Wl = ["href", "target"], Gl = {
  key: 0,
  class: "card__aside"
}, Xl = ["src", "alt"], Yl = {
  key: 1,
  class: "card__footer"
};
function Jl(t, s, e, n, r, i) {
  const a = C("router-link");
  return l(), b(P(i.resolvedElement), {
    class: _(["card", [
      {
        "card--horizontal": e.horizontal || e.horizontalCenter,
        "card--horizontal-center": e.horizontalCenter,
        "card--overlay": e.overlay
      },
      n.resolvedModifiers
    ]]),
    onMousedown: i.onMousedown,
    onMouseup: i.onMouseup,
    style: z({ cursor: r.cursorStyle }),
    target: e.target,
    to: e.to,
    href: e.href,
    "data-ulu-proxy-click-init": r.proxyClickEnabled
  }, {
    default: S(() => [
      f("div", Nl, [
        f("div", Kl, [
          (l(), b(P(e.titleElement), {
            class: _(["card__title", e.classes.title])
          }, {
            default: S(() => [
              e.titleTo ? (l(), b(a, {
                key: 0,
                class: "card__title-link",
                to: e.titleTo,
                ref: "link"
              }, {
                default: S(() => [
                  m(t.$slots, "title", {}, () => [
                    w(y(e.title), 1)
                  ])
                ]),
                _: 3
              }, 8, ["to"])) : e.titleHref ? (l(), d("a", {
                key: 1,
                class: "card__title-link",
                href: e.titleHref,
                target: e.titleTarget,
                ref: "link"
              }, [
                m(t.$slots, "title", {}, () => [
                  w(y(e.title), 1)
                ])
              ], 8, Wl)) : m(t.$slots, "title", { key: 2 }, () => [
                w(y(e.title), 1)
              ])
            ]),
            _: 3
          }, 8, ["class"])),
          m(t.$slots, "body")
        ]),
        t.$slots.body ? (l(), d("div", Gl, [
          m(t.$slots, "aside")
        ])) : v("", !0)
      ]),
      t.$slots.image || e.imageSrc ? (l(), d("div", {
        key: 0,
        class: _(["card__image", [
          { "card__image--icon": e.imageIcon },
          e.classes.image
        ]])
      }, [
        m(t.$slots, "image", {}, () => [
          f("img", {
            src: e.imageSrc,
            alt: e.imageAlt
          }, null, 8, Xl)
        ])
      ], 2)) : v("", !0),
      t.$slots.footer ? (l(), d("div", Yl, [
        m(t.$slots, "footer")
      ])) : v("", !0)
    ]),
    _: 3
  }, 40, ["onMousedown", "onMouseup", "class", "style", "target", "to", "href", "data-ulu-proxy-click-init"]);
}
const E_ = /* @__PURE__ */ g(Vl, [["render", Jl]]), Zl = {
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
function Ql(t, s, e, n, r, i) {
  return l(), d("dl", {
    class: _(e.classes.list)
  }, [
    (l(!0), d(I, null, R(e.items, (a, o) => (l(), d("div", {
      key: o,
      class: _(e.classes.item)
    }, [
      f("dt", {
        class: _(e.classes.term)
      }, [
        m(t.$slots, "term", {
          item: a,
          index: o
        }, () => [
          w(y(a.term), 1)
        ])
      ], 2),
      f("dd", {
        class: _(e.classes.description)
      }, [
        m(t.$slots, "description", {
          item: a,
          index: o
        }, () => [
          w(y(a.description), 1)
        ])
      ], 2)
    ], 2))), 128))
  ], 2);
}
const j_ = /* @__PURE__ */ g(Zl, [["render", Ql]]), ec = {
  name: "UluExternalLink",
  components: {
    UluIcon: Y
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
}, tc = ["href", "target"], sc = { class: "external-link__text" };
function nc(t, s, e, n, r, i) {
  const a = C("UluIcon");
  return l(), d("a", {
    class: "external-link",
    href: e.href,
    target: e.target
  }, [
    f("span", sc, [
      m(t.$slots, "default", {}, () => [
        w(y(e.text), 1)
      ])
    ]),
    A(a, {
      class: "external-link__icon margin-left-small-x display-inline",
      type: "externalLink",
      definition: e.icon
    }, null, 8, ["definition"])
  ], 8, tc);
}
const z_ = /* @__PURE__ */ g(ec, [["render", nc]]), rc = {
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
function ic(t, s, e, n, r, i) {
  return l(), b(P(i.listElement), {
    class: _([
      {
        "list-ordered": e.ordered,
        "list-unordered": e.unordered,
        "list-lines": e.lines,
        "list-compact": e.compact
      },
      e.classes.list
    ]),
    style: z({
      listStyleType: e.listStyleType
    }),
    reversed: e.reversed,
    start: e.start
  }, {
    default: S(() => [
      (l(!0), d(I, null, R(e.items, (a, o) => (l(), d("li", {
        key: o,
        class: _(e.classes.listItem)
      }, [
        m(t.$slots, "default", {
          item: a,
          index: o
        }, () => [
          w(y(a), 1)
        ])
      ], 2))), 128))
    ]),
    _: 3
  }, 8, ["class", "style", "reversed", "start"]);
}
const F_ = /* @__PURE__ */ g(rc, [["render", ic]]), ac = {}, oc = { id: "main-content" };
function lc(t, s) {
  return l(), d("main", oc, [
    m(t.$slots, "default")
  ]);
}
const M_ = /* @__PURE__ */ g(ac, [["render", lc]]), cc = {
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
function uc(t, s, e, n, r, i) {
  return l(), d("div", {
    class: _(["spoke-spinner", i.modifierClass])
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
const P_ = /* @__PURE__ */ g(cc, [["render", uc]]), dc = {
  name: "UluCheckboxMenu",
  props: {
    options: Array
  },
  methods: {
    getId(t) {
      return `checkbox-menu-opt-${t}`;
    }
  }
}, fc = { class: "site-menu site-form" }, hc = { class: "site-menu__checkbox" }, _c = ["id", "onUpdate:modelValue"], mc = ["for"];
function gc(t, s, e, n, r, i) {
  return l(), d("ul", fc, [
    (l(!0), d(I, null, R(e.options, (a, o) => (l(), d("li", {
      class: "site-menu__item",
      key: o
    }, [
      f("div", hc, [
        ee(f("input", {
          type: "checkbox",
          id: i.getId(o),
          "onUpdate:modelValue": (u) => a.checked = u
        }, null, 8, _c), [
          [$i, a.checked]
        ]),
        f("label", {
          for: i.getId(o)
        }, [
          m(t.$slots, "default", {}, () => [
            w(y(a?.title || a?.text), 1)
          ])
        ], 8, mc)
      ])
    ]))), 128))
  ]);
}
const $_ = /* @__PURE__ */ g(dc, [["render", gc]]), vc = {
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
      const { size: t } = this.file, s = t / 1e6, e = t / 1e3, n = (r) => parseFloat(r.toFixed(2));
      return s > 1 ? `${n(s)}Mb` : e > 1 ? `${n(e)}Kb` : `${n(t)}B`;
    }
  }
}, yc = ["href", "download"], pc = { class: "margin-left-small-x" }, bc = { class: "tag tag--small tag--outline type-small-x" };
function Sc(t, s, e, n, r, i) {
  const a = C("FaIcon");
  return l(), d("a", {
    class: "layout-flex-baseline",
    href: i.fileUrl,
    download: e.file.name
  }, [
    A(a, {
      class: "ui-icon",
      icon: ["far", t.$site.getIcon("file")]
    }, null, 8, ["icon"]),
    f("span", pc, [
      w(y(e.file.name) + " ", 1),
      f("span", bc, y(i.fileSize), 1)
    ])
  ], 8, yc);
}
const L_ = /* @__PURE__ */ g(vc, [["render", Sc]]), wc = {
  key: 0,
  class: "site-dropzone__errors site-form__description site-form__error"
}, kc = { class: "list-unordered" }, Cc = {
  key: 1,
  class: "site-dropzone__display margin-top"
}, B_ = {
  __name: "UluFormDropzone",
  emits: ["filesChange"],
  setup(t, { emit: s }) {
    const e = $([]), n = $([]), r = s, { getRootProps: i, getInputProps: a, isDragActive: o } = ro({
      onDrop: (u, c) => {
        c ? n.value = c.map((h) => h) : n.value = [], u.length && (e.value = u.map((h) => h), r("filesChange", e.value));
      },
      accept: [".png", ".jpg", ".jpeg"]
    });
    return (u, c) => {
      const h = C("FilesDisplay");
      return l(), d("div", {
        class: _(["site-dropzone site-form__item site-form__item--file", { "is-danger": n.value.length }])
      }, [
        f("div", te({
          class: ["site-dropzone__target", {
            "site-dropzone__target--dropping": U(o)
          }]
        }, U(i)()), [
          f("input", K(X(U(a)())), null, 16),
          c[0] || (c[0] = f("div", { class: "site-dropzone__instructions" }, [
            f("strong", { class: "type-normal" }, " Drag 'n' drop files here, or click to select ")
          ], -1))
        ], 16),
        c[3] || (c[3] = f("p", { class: "site-form__description" }, [
          f("em", null, "Only images allowed (.jpg, .png)")
        ], -1)),
        n.value.length ? (l(), d("div", wc, [
          f("ul", kc, [
            (l(!0), d(I, null, R(n.value, (p, k) => (l(), d("li", { key: k }, [
              f("strong", null, y(p.file.name), 1),
              c[1] || (c[1] = w(": ")),
              f("span", null, y(p.errors.map((q) => q.message).join()), 1)
            ]))), 128))
          ])
        ])) : v("", !0),
        e.value.length ? (l(), d("div", Cc, [
          c[2] || (c[2] = f("strong", null, "Files", -1)),
          A(h, {
            class: "site-dropzone__list",
            files: e.value
          }, null, 8, ["files"])
        ])) : v("", !0)
      ], 2);
    };
  }
};
let Ac = 0;
const Tc = {
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
      id: `file-input-id-${++Ac}`
    };
  },
  methods: {
    onChangeFile(t) {
      this.$emit("filesChange", t.target.files);
    }
  }
}, Rc = { class: "site-form__item site-form__item--file" }, Ic = ["for"], Oc = ["multiple", "id"];
function xc(t, s, e, n, r, i) {
  return l(), d("div", Rc, [
    f("label", {
      class: _({ "hidden-visually": e.labelHidden }),
      for: r.id
    }, [
      m(t.$slots, "label", {}, () => [
        w(y(e.label), 1)
      ])
    ], 10, Ic),
    f("input", te({
      type: "file",
      onChange: s[0] || (s[0] = (...a) => i.onChangeFile && i.onChangeFile(...a)),
      multiple: e.multiple,
      id: r.id
    }, e.inputAttrs), null, 16, Oc)
  ]);
}
const H_ = /* @__PURE__ */ g(Tc, [["render", xc]]), Uc = {
  name: "FormMessage",
  props: {
    warning: Boolean,
    error: Boolean
  }
};
function qc(t, s, e, n, r, i) {
  const a = C("FaIcon");
  return l(), d("p", {
    class: _(["site-form__description", {
      "site-form__error": e.error,
      "site-form__warning": e.warning
    }])
  }, [
    e.error ? (l(), b(a, {
      key: 0,
      icon: t.$site.getIcon("error")
    }, null, 8, ["icon"])) : v("", !0),
    e.warning ? (l(), b(a, {
      key: 1,
      icon: t.$site.getIcon("warning")
    }, null, 8, ["icon"])) : v("", !0),
    m(t.$slots, "default")
  ], 2);
}
const D_ = /* @__PURE__ */ g(Uc, [["render", qc]]);
let Ec = 0;
const jc = {
  name: "FormSelect",
  props: {
    label: String,
    modelValue: String,
    options: Array,
    labelHidden: Boolean
  },
  data() {
    return {
      id: `select-id-${++Ec}`
    };
  }
}, zc = { class: "site-form__item site-form__item--select" }, Fc = ["for"], Mc = ["id", "value"], Pc = ["value"];
function $c(t, s, e, n, r, i) {
  return l(), d("div", zc, [
    f("label", {
      class: _({ "hidden-visually": e.labelHidden }),
      for: r.id
    }, [
      m(t.$slots, "default", {}, () => [
        w(y(e.label), 1)
      ])
    ], 10, Fc),
    f("select", {
      id: r.id,
      value: e.modelValue,
      onInput: s[0] || (s[0] = (a) => t.$emit("update:modelValue", a.target.value))
    }, [
      s[1] || (s[1] = f("option", {
        disabled: "",
        value: ""
      }, "Please select one", -1)),
      (l(!0), d(I, null, R(e.options, (a, o) => (l(), d("option", {
        key: o,
        value: a.value
      }, y(a.text), 9, Pc))), 128))
    ], 40, Mc)
  ]);
}
const V_ = /* @__PURE__ */ g(jc, [["render", $c]]);
let Lc = 0;
const Bc = {
  name: "FormText",
  props: {
    label: String,
    modelValue: String,
    labelHidden: Boolean
  },
  data() {
    return {
      id: `text-input-id-${++Lc}`
    };
  }
}, Hc = { class: "site-form__item site-form__item--text" }, Dc = ["for"], Vc = ["value", "id"];
function Nc(t, s, e, n, r, i) {
  return l(), d("div", Hc, [
    f("label", {
      class: _({ "hidden-visually": e.labelHidden }),
      for: r.id
    }, [
      m(t.$slots, "default", {}, () => [
        w(y(e.label), 1)
      ])
    ], 10, Dc),
    f("input", {
      type: "text",
      value: e.modelValue,
      onInput: s[0] || (s[0] = (a) => t.$emit("update:modelValue", a.target.value)),
      id: r.id
    }, null, 40, Vc)
  ]);
}
const N_ = /* @__PURE__ */ g(Bc, [["render", Nc]]), Kc = {
  name: "SearchForm",
  props: {
    placeholder: {
      type: String,
      default: "Titles, keyword…"
    }
  }
}, Wc = { class: "form-theme search-form type-small" }, Gc = { class: "search-form__field" }, Xc = ["placeholder"], Yc = {
  class: "search-form__submit button button--primary",
  "aria-label": "Submit Search"
};
function Jc(t, s, e, n, r, i) {
  const a = C("FaIcon");
  return l(), d("div", Wc, [
    f("div", Gc, [
      s[0] || (s[0] = f("label", { class: "hidden-visually" }, "Search", -1)),
      f("input", {
        class: "search-form__input",
        type: "text",
        id: "example-input",
        placeholder: e.placeholder
      }, null, 8, Xc)
    ]),
    f("button", Yc, [
      A(a, {
        icon: t.$site.getIcon("search")
      }, null, 8, ["icon"])
    ])
  ]);
}
const K_ = /* @__PURE__ */ g(Kc, [["render", Jc]]), Zc = {
  name: "AdaptiveLayout",
  inject: ["uluIsMobile"]
};
function Qc(t, s, e, n, r, i) {
  return !i.uluIsMobile || !t.$slots.mobile ? m(t.$slots, "default", { key: 0 }) : m(t.$slots, "mobile", { key: 1 });
}
const W_ = /* @__PURE__ */ g(Zc, [["render", Qc]]);
function eu(t) {
  var s;
  return t = t.replace(/^[^-_a-zA-Z]+/, "").replace(/^-(?:[-0-9]+)/, "-"), s = t && t.replace(/[^-_a-zA-Z0-9]+/g, "-"), s.toLowerCase();
}
function tu(t, s = {
  columnFirst: "position-column-first",
  columnLast: "position-column-last",
  rowFirst: "position-row-first",
  rowLast: "position-row-last"
}) {
  const e = [...t.children], n = [];
  let r;
  e.forEach((i) => {
    const a = i.getBoundingClientRect().y;
    r !== a && n.push([]), n[n.length - 1].push(i), r = a, i.classList.remove(...Object.values(s));
  }), n.forEach((i, a) => {
    a === 0 && i.forEach((o) => o.classList.add(s.rowFirst)), a == n.length - 1 && i.forEach((o) => o.classList.add(s.rowLast)), i.forEach((o, u) => {
      u === 0 && o.classList.add(s.columnFirst), u == i.length - 1 && o.classList.add(s.columnLast);
    });
  });
}
const su = {
  name: "UluDataGrid",
  async mounted() {
    const t = () => tu(this.$el);
    t(), this.resizeHandler = Me(t, 200, !1, this), window.addEventListener("resize", this.resizeHandler);
  },
  beforeUnmount() {
    this.resizeHandler && window.removeEventListener("resize", this.resizeHandler);
  }
};
function nu(t, s, e, n, r, i) {
  return l(), d("div", null, [
    m(t.$slots, "default")
  ]);
}
const G_ = /* @__PURE__ */ g(su, [["render", nu]]), ru = {
  name: "UluTitleRail",
  components: {
    UluIcon: Y
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
}, iu = { class: "rail rail--title-rail" }, au = {
  key: 0,
  class: "rail__item rail__item--pull"
};
function ou(t, s, e, n, r, i) {
  const a = C("UluIcon");
  return l(), d("div", iu, [
    f("div", {
      class: _(["rail__item rail__item--title", e.classes.itemTitle])
    }, [
      (l(), b(P(e.titleElement), {
        class: _(["layout-flex type-max-width-small no-margin", e.classes.title]),
        style: z({ alignItems: e.iconAlign })
      }, {
        default: S(() => [
          e.icon || e.iconType ? (l(), b(a, {
            key: 0,
            class: _(e.classes.icon),
            type: e.iconType,
            definition: e.icon
          }, null, 8, ["class", "type", "definition"])) : v("", !0),
          m(t.$slots, "default", {}, () => [
            w(y(e.title), 1)
          ])
        ]),
        _: 3
      }, 8, ["class", "style"]))
    ], 2),
    t.$slots.end ? (l(), d("div", au, [
      m(t.$slots, "end")
    ])) : v("", !0)
  ]);
}
const X_ = /* @__PURE__ */ g(ru, [["render", ou]]), lu = {
  name: "UluBreadcrumb",
  components: {
    UluIcon: Y
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
function cu(t, s, e, n, r, i) {
  const a = C("router-link"), o = C("UluIcon");
  return e.items.length ? (l(), d("nav", {
    key: 0,
    class: _(e.classes.nav),
    "aria-label": "Breadcrumb"
  }, [
    f("ul", {
      class: _(e.classes.list)
    }, [
      (l(!0), d(I, null, R(e.items, (u, c) => (l(), d("li", {
        key: c,
        class: _(e.classes.item)
      }, [
        A(a, {
          to: u.to,
          class: _(e.classes.link),
          "aria-current": u.current ? "page" : null
        }, {
          default: S(() => [
            m(t.$slots, "default", { item: u }, () => [
              w(y(u.title), 1)
            ])
          ]),
          _: 2
        }, 1032, ["to", "class", "aria-current"]),
        c < e.items.length - 1 ? m(t.$slots, "separator", { key: 0 }, () => [
          A(o, {
            class: _(e.classes.separator),
            type: "pathSeparator",
            definition: e.separatorIcon
          }, null, 8, ["class", "definition"])
        ]) : v("", !0)
      ], 2))), 128))
    ], 2)
  ], 2)) : v("", !0);
}
const Y_ = /* @__PURE__ */ g(lu, [["render", cu]]), uu = {
  name: "UluNavStrip",
  components: {
    UluMenu: Yi
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
function du(t, s, e, n, r, i) {
  const a = C("UluMenu");
  return l(), d("nav", {
    class: _(["nav-strip", {
      "nav-strip--rule": e.rule,
      "nav-strip--center": e.center,
      "nav-strip--right": e.right
    }])
  }, [
    A(a, {
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
const J_ = /* @__PURE__ */ g(uu, [["render", du]]), fu = {}, hu = {
  class: "site-skip-link hidden-visually-focusable",
  href: "#main-content"
};
function _u(t, s) {
  return l(), d("a", hu, " Skip to main content ");
}
const Z_ = /* @__PURE__ */ g(fu, [["render", _u]]), mu = {
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
function gu(t, s, e, n, r, i) {
  return e.text != null ? (l(), b(P(e.element), { key: 0 }, {
    default: S(() => [
      w(y(e.text), 1)
    ]),
    _: 1
  })) : v("", !0);
}
const Q_ = /* @__PURE__ */ g(mu, [["render", gu]]), vu = {}, yu = { style: { display: "none" } };
function pu(t, s) {
  return l(), d("span", yu);
}
const em = /* @__PURE__ */ g(vu, [["render", pu]]), bu = {};
function Su(t, s) {
  const e = C("router-view");
  return l(), b(e);
}
const tm = /* @__PURE__ */ g(bu, [["render", Su]]);
function Ae(t = 0, s = 100) {
  return t = Math.ceil(t), s = Math.floor(s), Math.floor(Math.random() * (s - t) + t);
}
const wu = {
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
        width: Ae(500, 1e3),
        height: Ae(500, 1e3)
      } : { width: s, height: e };
    }
  }
}, ku = ["src", "alt"];
function Cu(t, s, e, n, r, i) {
  return l(), d("img", {
    src: i.src,
    alt: e.alt
  }, null, 8, ku);
}
const sm = /* @__PURE__ */ g(wu, [["render", Cu]]), Au = {
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
function Tu(t, s, e, n, r, i) {
  return l(!0), d(I, null, R(parseInt(e.amount), (a) => (l(), b(P(e.element), { key: a }, {
    default: S(() => s[0] || (s[0] = [
      w(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed semper erat tincidunt tellus vestibulum dictum. Fusce vel augue commodo, egestas diam sed, accumsan leo. Maecenas congue nec nisl et ullamcorper. Maecenas tincidunt, tortor et viverra eleifend, enim leo vestibulum ipsum, quis placerat mi nisi nec ex. Vivamus a justo volutpat, scelerisque elit eget, lacinia ex. Phasellus dapibus sollicitudin tortor, vitae suscipit nunc condimentum ut. Cras suscipit feugiat nibh nec consectetur. Phasellus vitae quam blandit, cursus metus ut, placerat mi. Sed tempor lacus non est interdum imperdiet nec quis metus. Praesent vel eleifend diam. Donec tincidunt eget purus sed posuere. ")
    ])),
    _: 2,
    __: [0]
  }, 1024))), 128);
}
const nm = /* @__PURE__ */ g(Au, [["render", Tu]]), Ru = {
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
      const e = this.validator(t, s, this.$route), n = this.exclude.some((r) => r.endsWith("*") ? t.startsWith(r.slice(0, r.length - 1)) : t === r);
      e && !n && this.$refs.el.focus();
    }
  },
  computed: {
    title() {
      const t = this.getTitle(this.$route);
      return t || console.warn("RouteAnnouncer: No page title!"), t;
    }
  }
};
function Iu(t, s, e, n, r, i) {
  return i.title ? (l(), d("p", {
    key: 0,
    tabindex: "-1",
    class: "hidden-visually",
    ref: "el"
  }, y(i.title), 513)) : v("", !0);
}
const rm = /* @__PURE__ */ g(Ru, [["render", Iu]]), Ou = {
  name: "AnimateNumber",
  props: {
    /**
     * Number to animate as it changes
     */
    value: Number
  },
  watch: {
    value() {
      io.to(this, {
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
function xu(t, s, e, n, r, i) {
  return l(), d("span", null, [
    m(t.$slots, "default", { currentValue: r.currentValue }, () => [
      w(y(r.currentValue), 1)
    ])
  ]);
}
const im = /* @__PURE__ */ g(Ou, [["render", xu]]), Uu = {
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
}, qu = { class: "progress-bar__header" }, Eu = {
  key: 0,
  class: "progress-bar__icon"
}, ju = { class: "hidden-visually" }, zu = { class: "progress-bar__track" }, Fu = { class: "progress-bar__values" }, Mu = { class: "progress-bar__value progress-bar__value--amount" }, Pu = {
  key: 0,
  class: "progress-bar__value progress-bar__value--deficit color-status is-danger"
}, $u = { class: "progress-bar__value progress-bar__value--total" };
function Lu(t, s, e, n, r, i) {
  const a = C("StatusIcon");
  return l(), d("div", {
    class: _(["progress-bar", {
      "progress-bar--small": e.small,
      "progress-bar--icon-left": e.iconOnLeft,
      "type-small": e.small
    }])
  }, [
    f("div", qu, [
      f("strong", {
        class: _(["progress-bar__label", {
          "type-normal": e.small,
          "hidden-visually": e.labelHidden
        }])
      }, y(e.label), 3),
      i.status ? (l(), d("div", Eu, [
        A(a, {
          type: i.status.type
        }, null, 8, ["type"]),
        f("span", ju, y(i.status.message), 1)
      ])) : v("", !0)
    ]),
    f("div", zu, [
      f("div", {
        class: "progress-bar__bar",
        style: z(`width: ${i.percentage}%`)
      }, null, 4),
      e.deficit ? (l(), d("div", {
        key: 0,
        class: "progress-bar__bar--deficit",
        style: z(`width: ${i.defPercentage}%`)
      }, null, 4)) : v("", !0)
    ]),
    f("div", Fu, [
      f("div", Mu, [
        s[0] || (s[0] = f("strong", { class: "hidden-visually" }, "Amount:", -1)),
        w(" " + y(e.amount), 1)
      ]),
      e.deficit > 0 ? (l(), d("div", Pu, [
        s[1] || (s[1] = f("strong", { class: "hidden-visually" }, "Deficit: ", -1)),
        w(" -" + y(e.deficit), 1)
      ])) : v("", !0),
      f("div", $u, [
        s[2] || (s[2] = f("strong", { class: "hidden-visually" }, "Total:", -1)),
        w(" " + y(e.total), 1)
      ])
    ])
  ], 2);
}
const am = /* @__PURE__ */ g(Uu, [["render", Lu]]);
let Bu = 0;
const Hu = {
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
      uid: `progress-donut-${++Bu}`
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
      const { duration: e, easing: n, endDasharray: r } = this, i = { strokeDasharray: [`${t} 100`, r] };
      s.animate(i, { duration: e, easing: n, fill: "forwards" });
    }
  },
  mounted() {
    this.animate();
  }
}, Du = { class: "progress-donut__chart" }, Vu = {
  class: "progress-donut__chart-svg",
  viewBox: "0 0 32 32"
}, Nu = ["r"], Ku = {
  key: 0,
  class: "progress-donut__chart-value"
}, Wu = {
  key: 0,
  class: "progress-donut__value type-small-x"
};
function Gu(t, s, e, n, r, i) {
  return l(), d("div", {
    class: _(["progress-donut", {
      "progress-donut--small": e.small,
      "progress-donut--small-below": e.smallBelow,
      "progress-donut--status-low": !e.neutral && e.percentage < 30,
      "progress-donut--status-incomplete": !e.neutral && e.percentage >= 30 && e.percentage < 100,
      "progress-donut--status-complete": !e.neutral && e.percentage >= 100
    }])
  }, [
    s[0] || (s[0] = f("strong", { class: "hidden-visually" }, "Course Progress", -1)),
    f("div", Du, [
      (l(), d("svg", Vu, [
        f("circle", {
          class: "progress-donut__chart-pie",
          ref: "pie",
          r: "16",
          cx: "16",
          cy: "16",
          style: z({ strokeDasharray: i.endDasharray })
        }, null, 4),
        f("circle", {
          class: "progress-donut__chart-mask",
          r: e.small ? 7 : 11,
          cx: "16",
          cy: "16"
        }, null, 8, Nu)
      ])),
      e.small ? v("", !0) : (l(), d("strong", Ku, y(e.percentage) + "% ", 1))
    ]),
    e.small ? (l(), d("strong", Wu, y(e.percentage) + "% ", 1)) : v("", !0)
  ], 2);
}
const om = /* @__PURE__ */ g(Hu, [["render", Gu]]), Xu = {
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
}, Yu = { class: "UluFacets__facet-list" }, Ju = ["id", "onUpdate:modelValue"], Zu = ["for"];
function Qu(t, s, e, n, r, i) {
  return l(), d("ul", Yu, [
    (l(!0), d(I, null, R(e.children, (a) => (l(), d("li", {
      class: _(["UluFacets__facet", e.classFacet]),
      key: a.uid
    }, [
      ee(f("input", {
        class: "UluFacets__facet-checkbox",
        id: i.facetCheckboxId(a),
        type: "checkbox",
        "onUpdate:modelValue": (o) => a.selected = o
      }, null, 8, Ju), [
        [$i, a.selected]
      ]),
      f("label", {
        class: "UluFacets__facet-label",
        for: i.facetCheckboxId(a)
      }, y(a.label), 9, Zu)
    ], 2))), 128))
  ]);
}
const ed = /* @__PURE__ */ g(Xu, [["render", Qu]]);
let td = 0;
const sd = {
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
      id: `facet-view-keyword-${++td}`
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
}, nd = { class: "UluFacets__keyword-search" }, rd = ["for"], id = ["id", "placeholder"];
function ad(t, s, e, n, r, i) {
  return l(), d("div", nd, [
    f("label", {
      class: _(e.classes.searchLabel),
      for: r.id
    }, s[1] || (s[1] = [
      f("strong", null, "Search", -1)
    ]), 10, rd),
    ee(f("input", {
      id: r.id,
      class: _(e.classes.searchInput),
      "onUpdate:modelValue": s[0] || (s[0] = (a) => i.localValue = a),
      type: "text",
      placeholder: e.placeholder
    }, null, 10, id), [
      [Ga, i.localValue]
    ])
  ]);
}
const od = /* @__PURE__ */ g(sd, [["render", ad]]);
let Un = 0;
const qn = (t) => {
  const s = (e) => e.title || e.label || "";
  return t.sort((e, n) => s(e).localeCompare(s(n)));
}, ld = {
  az: { text: "A-Z", sort: qn },
  za: { text: "Z-A", sort: (t) => qn(t).reverse() }
}, cd = {
  name: "UluFacets",
  components: {
    UluCollapsibleRegion: ul,
    UluFacetsList: ed,
    UluFacetsSearch: od
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
      initialSortType: n,
      extraSortTypes: r
    } = this;
    return {
      filterId: `ulu-facet-filters-${++Un}`,
      sortId: `ulu-facet-sort-${++Un}`,
      selectedSort: n,
      sortTypes: {
        ...e ? {} : ld,
        ...r
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
        const { name: e, uid: n, children: r } = s;
        let i = 0, a = !1;
        r && r.forEach((o) => {
          o.selected && (++i, a || (t.push({ uid: n, name: e, children: [] }), a = !0), t[t.length - 1].children.push(o));
        }), s.selectedCount = i;
      }), t;
    },
    filteredItems() {
      this.resultsVisible = !1;
      const { getItemFacet: t, selectedFacets: s, sortTypes: e, selectedSort: n } = this, r = e[n].sort, i = this.items.filter((o) => s.length ? s.some((u) => {
        let c;
        const h = t(o, u.uid);
        return h && h.length && (c = u.children.some((p) => h.includes(p.uid))), c;
      }) : !0), a = r(this.search(i));
      return this.$nextTick(() => {
        this.resultsVisible = !0, this.filterIteration = this.filterIteration + 1;
      }), a;
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
      return s?.length ? new ao(t, e).search(s).map((i) => i.item) : t;
    },
    toggleFilterVisibility() {
      this.filtersHidden = !this.filtersHidden;
    }
  }
}, ud = { class: "UluFacets" }, dd = ["aria-controls", "aria-expanded"], fd = ["for"], hd = ["id"], _d = ["value"], md = { class: "UluFacets__body" }, gd = ["id"], vd = {
  key: 1,
  class: "UluFacets__empty"
};
function yd(t, s, e, n, r, i) {
  const a = C("UluFacetsSearch"), o = C("UluFacetsList"), u = C("UluCollapsibleRegion");
  return l(), d("div", ud, [
    f("div", {
      class: _(["UluFacets__header", e.classes.header])
    }, [
      m(t.$slots, "header", {
        count: i.filteredItems.length
      }),
      f("div", {
        class: _(["UluFacets__header-actions", e.classes.headerActions])
      }, [
        f("button", {
          onClick: s[0] || (s[0] = (...c) => i.toggleFilterVisibility && i.toggleFilterVisibility(...c)),
          class: _(e.classes.buttonFilterToggle),
          "aria-controls": r.filterId,
          "aria-expanded": r.filtersHidden ? "false" : "true",
          type: "button"
        }, [
          m(t.$slots, "buttonFilterToggle", { hidden: r.filtersHidden }, () => [
            w(y(r.filtersHidden ? "Show" : "Hide") + " Filters ", 1)
          ])
        ], 10, dd),
        i.selectedFacets.length ? (l(), d("button", {
          key: 0,
          onClick: s[1] || (s[1] = (...c) => i.clearFilters && i.clearFilters(...c)),
          class: _(e.classes.buttonClearFilters),
          type: "button"
        }, [
          m(t.$slots, "buttonClearFilters", {}, () => [
            s[4] || (s[4] = w(" Clear Filters "))
          ])
        ], 2)) : v("", !0),
        f("div", {
          class: _(e.classes.sortForm)
        }, [
          f("label", {
            for: r.sortId,
            class: _(e.classes.sortFormLabel)
          }, "Sort:", 10, fd),
          ee(f("select", {
            "onUpdate:modelValue": s[2] || (s[2] = (c) => r.selectedSort = c),
            id: r.sortId,
            class: _(e.classes.sortFormSelect)
          }, [
            (l(!0), d(I, null, R(r.sortTypes, (c, h) => (l(), d("option", {
              value: h,
              key: h
            }, y(c.text), 9, _d))), 128))
          ], 10, hd), [
            [Xa, r.selectedSort]
          ])
        ], 2)
      ], 2)
    ], 2),
    f("div", md, [
      A(kn, {
        name: "UluFacetsFade",
        mode: "out-in"
      }, {
        default: S(() => [
          ee(f("div", {
            class: _(["UluFacets__filters", { "UluFacets__filters--hidden": r.filtersHidden }]),
            id: r.filterId
          }, [
            A(a, {
              classes: e.classes,
              initialValue: e.initialSearchValue,
              placeholder: e.searchPlaceholder,
              modelValue: r.searchValue,
              "onUpdate:modelValue": s[3] || (s[3] = (c) => r.searchValue = c)
            }, null, 8, ["classes", "initialValue", "placeholder", "modelValue"]),
            (l(!0), d(I, null, R(r.facets, (c) => (l(), b(u, {
              class: _(["UluFacets__group", e.classes.group]),
              classToggle: ["UluFacets__group-toggle", e.classes.groupToggle],
              classContent: ["UluFacets__group-content", e.classes.groupContent],
              key: c.uid,
              group: c,
              startOpen: c.open,
              clickOutsideCloses: !1,
              closeOnEscape: !1,
              transitionHeight: !0
            }, {
              toggle: S(({ isOpen: h }) => [
                m(t.$slots, "groupToggle", {
                  group: c,
                  isOpen: h
                }, () => [
                  w(y(c.name), 1)
                ])
              ]),
              default: S(() => [
                A(o, {
                  children: c.children.slice(0, e.maxVisible),
                  groupUid: c.uid,
                  classFacet: e.classes.facet
                }, null, 8, ["children", "groupUid", "classFacet"]),
                c.children.length > e.maxVisible ? (l(), b(u, {
                  key: 0,
                  class: _(["UluFacets__more-facets", e.classes.moreFacets]),
                  clickOutsideCloses: !1,
                  closeOnEscape: !1,
                  transitionHeight: !0
                }, {
                  toggle: S(({ isOpen: h }) => [
                    w(y(h ? "- Less" : "+ More"), 1)
                  ]),
                  default: S(() => [
                    A(o, {
                      children: c.children.slice(e.maxVisible),
                      groupUid: c.uid,
                      classFacet: e.classes.facet
                    }, null, 8, ["children", "groupUid", "classFacet"])
                  ]),
                  _: 2
                }, 1032, ["class"])) : v("", !0)
              ]),
              _: 2
            }, 1032, ["class", "classToggle", "classContent", "group", "startOpen"]))), 128))
          ], 10, gd), [
            [Js, !r.filtersHidden]
          ])
        ]),
        _: 3
      }),
      A(kn, {
        name: "UluFacetsFade",
        mode: "out-in"
      }, {
        default: S(() => [
          r.resultsVisible && i.filteredItems.length ? (l(), d("ul", {
            class: _(["UluFacets__results", e.classes.results]),
            key: r.filterIteration
          }, [
            (l(!0), d(I, null, R(i.filteredItems, (c, h) => (l(), d("li", {
              class: _(["UluFacets__results-item", e.classes.resultsItem]),
              key: h
            }, [
              m(t.$slots, "item", {
                item: c,
                index: h
              })
            ], 2))), 128))
          ], 2)) : (l(), d("div", vd, [
            m(t.$slots, "empty", {}, () => [
              s[5] || (s[5] = w(" No Results Found "))
            ])
          ]))
        ]),
        _: 3
      })
    ])
  ]);
}
const lm = /* @__PURE__ */ g(cd, [["render", yd]]), Ji = Symbol(), Zi = Symbol(), Pe = Symbol(), pd = {
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
      [Pe]: j(() => this.sections),
      [Ji]: (t) => {
        const { titleId: s, title: e } = t, { element: n } = t.$refs;
        this.sections.push({
          instance: t,
          titleId: s,
          title: e,
          element: n,
          active: !1
        }), this.update();
      },
      [Zi]: (t) => {
        const s = this.sections, e = s.findIndex((n) => n.instance === t);
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
      const { observerOptions: t, sections: s, removeActive: e, firstItemActive: n } = this;
      let r = 0;
      const i = (a) => {
        a.forEach(({ target: o, isIntersecting: u }) => {
          const c = this.getSectionIndex(o), h = o.offsetTop, p = s[c], k = c === 0 && r > h, q = c === s.length - 1 && r < h;
          p && this.$nextTick(() => {
            u ? (e(p), p.active = !0) : (k && !n || q && p.active) && e(), this.$emit("sectionChange", {
              section: p,
              sections: s,
              active: u
            });
          });
        });
      };
      this.observer = new IntersectionObserver(i, t);
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
}, bd = { class: "scroll-anchors" };
function Sd(t, s, e, n, r, i) {
  return l(), d("div", bd, [
    m(t.$slots, "default")
  ]);
}
const cm = /* @__PURE__ */ g(pd, [["render", Sd]]), wd = {
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
}, kd = ["href"];
function Cd(t, s, e, n, r, i) {
  return i.sections.length ? (l(), b(P(e.element), {
    key: 0,
    class: "scroll-anchors__nav"
  }, {
    default: S(() => [
      f("ul", null, [
        (l(!0), d(I, null, R(i.sections, (a, o) => (l(), d("li", {
          key: o,
          class: _({ "is-active": a.active })
        }, [
          f("a", {
            class: _({ "is-active": a.active }),
            href: `#${a.titleId}`
          }, y(a.title), 11, kd)
        ], 2))), 128))
      ])
    ]),
    _: 1
  })) : v("", !0);
}
const um = /* @__PURE__ */ g(wd, [["render", Cd]]);
function Qi(t) {
  requestAnimationFrame(() => {
    const s = new MessageChannel();
    s.port1.onmessage = t, s.port2.postMessage(void 0);
  });
}
const Ad = {
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
      const { sections: t, linkRefs: s } = this, e = Object.keys(s).length;
      if (!t || !e)
        return !1;
      const n = t.findIndex((o) => o.active);
      if (n === -1)
        return !1;
      const r = this.linkRefs[n], { offsetTop: i, offsetHeight: a } = r;
      return {
        y: i,
        height: a,
        initial: this.inidica
      };
    }
  },
  watch: {
    indicatorStyles(t) {
      t && !this.indicatorAnimReady && Qi(() => {
        this.indicatorAnimReady = !0;
      });
    }
  },
  methods: {
    addLinkRef(t, s) {
      this.linkRefs[t] = s;
    }
  }
}, Td = { class: "scroll-anchors__rail" }, Rd = ["href"];
function Id(t, s, e, n, r, i) {
  return i.sections.length ? (l(), b(P(e.element), {
    key: 0,
    class: "scroll-anchors__nav scroll-anchors__nav--animated"
  }, {
    default: S(() => [
      f("ul", Td, [
        (l(!0), d(I, null, R(i.sections, (a, o) => (l(), d("li", {
          key: o,
          class: _({ "is-active": a.active })
        }, [
          f("a", {
            class: _({ "is-active": a.active }),
            ref_for: !0,
            ref: (u) => i.addLinkRef(o, u),
            href: `#${a.titleId}`
          }, y(a.title), 11, Rd)
        ], 2))), 128))
      ]),
      f("div", {
        class: _(["scroll-anchors__indicator", {
          "scroll-anchors__indicator--can-transition": r.indicatorAnimReady
        }]),
        ref: "indicator",
        style: z({
          opacity: i.indicatorStyles ? "1" : "0",
          transform: `translateY(${i.indicatorStyles.y}px)`,
          height: `${i.indicatorStyles.height}px`
        })
      }, null, 6)
    ]),
    _: 1
  })) : v("", !0);
}
const dm = /* @__PURE__ */ g(Ad, [["render", Id]]), Od = {
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
    register: { from: Ji },
    unregister: { from: Zi },
    sections: { from: Pe, default: () => j(() => []) }
  },
  data() {
    const { anchorId: t, title: s } = this;
    return {
      titleId: t || `sas-title-${eu(s)}`
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
function xd(t, s, e, n, r, i) {
  return l(), d("div", {
    class: _([e.wrapperClass, { [e.activeClass]: e.activeClass && i.section?.active }]),
    ref: "element"
  }, [
    (l(), b(P(e.titleElement), {
      class: _(e.titleClass),
      id: r.titleId
    }, {
      default: S(() => [
        w(y(e.title), 1)
      ]),
      _: 1
    }, 8, ["class", "id"])),
    m(t.$slots, "default", { section: i.section })
  ], 2);
}
const fm = /* @__PURE__ */ g(Od, [["render", xd]]), Ud = {
  name: "ShowSkeleton",
  props: {
    when: Boolean
  }
};
function qd(t, s, e, n, r, i) {
  const a = C("SkeletonTextInline");
  return e.when ? (l(), b(a, {
    key: 1,
    class: "skeleton"
  })) : m(t.$slots, "default", { key: 0 });
}
const hm = /* @__PURE__ */ g(Ud, [["render", qd]]);
function Ed(t, s) {
  return [...Array(t)].map((e, n) => s(n));
}
function _m(t, s) {
  var e = t.indexOf(s);
  e > -1 && t.splice(e, 1);
}
const jd = {
  name: "SkeletonContent",
  props: {
    lines: {
      type: Number,
      default: 6
    }
  },
  methods: {
    randomInt: Ae
  },
  computed: {
    /**
     * Creates the segments (like words) for the given line count
     * - Uses random number of segments and makes sure to fill the line between 70% - 100%
     */
    linesWithSegments() {
      return Ed(this.lines, () => {
        const s = Ae(70, 100);
        let e = 0;
        const n = () => {
          const a = s - e, o = Ae(15, a);
          return e += o, o;
        }, r = [];
        for (; e < s - 15; )
          r.push(n());
        const i = () => r.reduce((a, o) => a + o, 0);
        for (; i() >= s && r.pop(); )
          ;
        return r.map((a) => ({ width: a, alt: Math.random() < 0.5 }));
      });
    }
  }
}, zd = { class: "skeleton" };
function Fd(t, s, e, n, r, i) {
  return l(), d("div", zd, [
    (l(!0), d(I, null, R(i.linesWithSegments, (a, o) => (l(), d("div", { key: o }, [
      (l(!0), d(I, null, R(a, (u) => (l(), d("span", {
        key: u,
        class: _(["skeleton__text skeleton__text--inline", { skeleton__alt: u.alt }]),
        style: z({ width: `${u.width}%` })
      }, null, 6))), 128))
    ]))), 128))
  ]);
}
const mm = /* @__PURE__ */ g(jd, [["render", Fd]]), Md = {
  name: "SkeletonMedia"
}, Pd = { class: "skeleton__block skeleton__block--media layout-flex-center-all" };
function $d(t, s, e, n, r, i) {
  const a = C("FaIcon");
  return l(), d("div", Pd, [
    A(a, {
      style: { "font-size": "2rem" },
      icon: "image"
    })
  ]);
}
const gm = /* @__PURE__ */ g(Md, [["render", $d]]), Ld = {
  name: "SkeletonTextInline"
}, Bd = { class: "skeleton__text skeleton__text--inline" };
function Hd(t, s, e, n, r, i) {
  return l(), d("span", Bd);
}
const vm = /* @__PURE__ */ g(Ld, [["render", Hd]]), Dd = {
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
      const s = t === "next", { scrollAmount: e } = this, { scrollLeft: n, offsetWidth: r } = this.getScrollData();
      return typeof e == "function" ? e(t, this.$refs) : typeof e == "number" ? s ? n + e : n - e : s ? n + r : n - r;
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
        let n = s.element.offsetLeft;
        const r = () => {
          s.element.focus(this.focusOptions), e.removeEventListener("scrollend", r);
        };
        e.addEventListener("scrollend", r), this.scrollTo(n, this.scrollBehaviorNav);
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
      const { observerOptions: t } = this, { track: s, nav: e } = this.$refs, n = (r) => {
        r.forEach((i) => {
          this.$nextTick(() => {
            const a = this.getSlideByElement(i.target);
            a.active = i.isIntersecting, this.$emit("slideChange", { slide: a, track: s, nav: e });
          });
        });
      };
      this.observer = new IntersectionObserver(n, {
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
}, Vd = { class: "slideshow" }, Nd = {
  class: "slideshow__control-context",
  ref: "context"
}, Kd = {
  class: "slideshow__track-crop",
  ref: "crop"
}, Wd = {
  class: "slideshow__track",
  ref: "track"
}, Gd = ["tabindex"], Xd = { class: "slideshow__controls" }, Yd = { class: "slideshow__controls-item slideshow__controls-item--previous" }, Jd = ["disabled"], Zd = { class: "slideshow__controls-item slideshow__controls-item--next" }, Qd = ["disabled"], ef = {
  key: 0,
  class: "slideshow__nav",
  ref: "nav"
}, tf = ["onClick"], sf = { class: "hidden-visually" };
function nf(t, s, e, n, r, i) {
  const a = C("FaIcon");
  return l(), d("div", Vd, [
    f("div", Nd, [
      f("div", Kd, [
        f("ul", Wd, [
          (l(!0), d(I, null, R(r.slides, (o, u) => (l(), d("li", {
            class: _(["slideshow__slide", { "is-active": o.active }]),
            key: u,
            tabindex: e.slideFocusable ? "0" : "-1",
            ref_for: !0,
            ref: (c) => {
              o.element = c;
            }
          }, [
            m(t.$slots, "slide", {
              item: o.item,
              index: u
            })
          ], 10, Gd))), 128))
        ], 512)
      ], 512),
      f("ul", Xd, [
        f("li", Yd, [
          f("button", {
            class: "slideshow__control-button slideshow__control-button--previous",
            "aria-label": "Scroll Right",
            onClick: s[0] || (s[0] = (...o) => i.previous && i.previous(...o)),
            disabled: !i.canScrollLeft
          }, [
            A(a, {
              class: "slideshow__control-icon",
              icon: "fas fa-chevron-left"
            })
          ], 8, Jd)
        ]),
        f("li", Zd, [
          f("button", {
            class: "slideshow__control-button slideshow__control-button--next",
            "aria-label": "Scroll Left",
            onClick: s[1] || (s[1] = (...o) => i.next && i.next(...o)),
            disabled: !i.canScrollRight
          }, [
            A(a, {
              class: "slideshow__control-icon",
              icon: "fas fa-chevron-right"
            })
          ], 8, Qd)
        ])
      ])
    ], 512),
    e.noNav ? v("", !0) : (l(), d("ul", ef, [
      (l(!0), d(I, null, R(r.slides, (o, u) => (l(), d("li", {
        class: _(["slideshow__nav-item", { "is-active": o.active }]),
        ref_for: !0,
        ref: (c) => {
          o.navElement = c;
        },
        key: u
      }, [
        f("button", {
          class: _(["slideshow__nav-button", { "is-active": o.active }]),
          onClick: (c) => i.to(u)
        }, [
          m(t.$slots, "nav", {
            item: o.item,
            index: u,
            active: o.active
          }, () => [
            f("span", sf, "Item " + y(u + 1), 1)
          ])
        ], 10, tf)
      ], 2))), 128))
    ], 512))
  ]);
}
const rf = /* @__PURE__ */ g(Dd, [["render", nf]]), af = {
  name: "ImageSlideShow",
  components: {
    UluSlideShow: rf
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
      const { active: e, navElement: n } = t;
      if (!n) return;
      const { offsetWidth: r, scrollLeft: i } = s, { offsetLeft: a, offsetWidth: o } = n, u = i + r, c = a + o;
      let h = null;
      console.log("left/right", i, u), e && n && (c > u ? h = i + (c - u) : a < i && (h = a), h !== null && s.scrollTo({ left: h, top: 0, behavior: "smooth" }));
    }
  }
}, of = ["src", "alt"], lf = { class: "slideshow__image-actions" }, cf = ["src", "alt"];
function uf(t, s, e, n, r, i) {
  const a = C("AppButton"), o = C("UluSlideShow");
  return l(), b(o, {
    class: "slideshow--images",
    items: e.images,
    onSlideChange: i.slideChange
  }, {
    slide: S(({ item: u }) => [
      f("img", {
        src: u.src,
        alt: u.alt
      }, null, 8, of),
      f("div", lf, [
        e.selectButton ? (l(), b(a, {
          key: 0,
          class: "type-small",
          icon: "plus",
          small: "",
          iconBefore: ""
        }, {
          default: S(() => s[0] || (s[0] = [
            w(" Select ")
          ])),
          _: 1,
          __: [0]
        })) : v("", !0)
      ])
    ]),
    nav: S(({ index: u }) => [
      f("img", {
        src: e.images[u].src,
        alt: `View image ${u}`
      }, null, 8, cf)
    ]),
    _: 1
  }, 8, ["items", "onSlideChange"]);
}
const ym = /* @__PURE__ */ g(af, [["render", uf]]), df = {
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
function ff(t, s, e, n, r, i) {
  return l(), d("li", {
    class: _(["slideshow__slide", { "is-active": e.active }])
  }, [
    m(t.$slots, "default")
  ], 2);
}
const pm = /* @__PURE__ */ g(df, [["render", ff]]), hf = {
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
}, _f = ["id"], mf = ["innerHTML"];
function gf(t, s, e, n, r, i) {
  return l(!0), d(I, null, R(e.rows, (a, o) => (l(), d("tr", {
    key: `br-${o}`,
    id: e.optionalAttr(e.isActual && a.id),
    class: _(e.resolveClasses(e.classes.row, { row: a.data, rowIndex: o, isActual: e.isActual, foot: e.foot })),
    style: z({
      height: a.height
    })
  }, [
    (l(!0), d(I, null, R(e.rowColumns, (u, c) => (l(), b(P(u.rowHeader ? "th" : "td"), {
      id: e.optionalAttr(e.isActual && u.rowHeader && u.getRowHeaderId(o)),
      scope: e.optionalAttr(e.isActual && u.rowHeader && "row"),
      key: `bc-${c}`,
      headers: e.optionalAttr(e.isActual && e.getCellHeaders(u, o)),
      class: _(e.resolveClasses(u.class, { column: u, index: c, isActual: e.isActual, row: a, rowIndex: o, foot: e.foot })),
      style: z({
        width: e.columnWidth
      })
    }, {
      default: S(() => [
        t.$slots[u.slot] ? m(t.$slots, u.slot, {
          key: 0,
          row: a.data,
          column: u,
          rowIndex: o,
          index: c,
          foot: e.foot,
          isActual: e.isActual
        }) : u.html ? (l(), d("div", {
          key: 1,
          innerHTML: e.value({ row: a, column: u, rowIndex: o, isActual: e.isActual, foot: e.foot })
        }, null, 8, mf)) : (l(), d(I, { key: 2 }, [
          w(y(e.value({ row: a, column: u, rowIndex: o, isActual: e.isActual, foot: e.foot })), 1)
        ], 64))
      ]),
      _: 2
    }, 1032, ["id", "scope", "headers", "class", "style"]))), 128))
  ], 14, _f))), 128);
}
const vf = /* @__PURE__ */ g(hf, [["render", gf]]), yf = {
  name: "UluTableStickyTable",
  components: {
    UluTableStickyRows: vf
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
      const { headerRefs: e, isActual: n } = this;
      if (!n || !s) return;
      const { id: r } = t, i = e[r];
      i && this.$emit("actualHeaderRemoved", i), this.$emit("actualHeaderAdded", s), e[r] = s;
    },
    /**
     * False is no longer not printed
     */
    optionalAttr(t) {
      return t || null;
    },
    value({ row: t, column: s, rowIndex: e }) {
      const n = s.value;
      return n ? n({ row: t.data, column: s, rowIndex: e }) : this.getRowValue({ row: t.data, column: s, rowIndex: e });
    },
    getCellHeaders(t, s) {
      const e = t.headers.join(" "), n = t.getRowHeaders(s), r = n.length ? " " : "";
      return `${e}${r}${n}`;
    },
    getHeaderHeaders(t) {
      const s = t.headers.filter((e) => e !== t.id);
      if (s.length)
        return s.join(" ");
    }
  }
}, pf = ["aria-hidden"], bf = {
  key: 0,
  class: "table-sticky__caption"
}, Sf = ["id"], wf = ["id", "rowspan", "colspan", "data-child-columns", "aria-sort", "scope", "headers"], kf = ["innerHTML"], Cf = {
  class: "table-sticky__sort-icon",
  "aria-hidden": "true"
}, Af = { class: "table-sticky__sort-icon-inner" }, Tf = ["innerHTML"], Rf = { key: 1 }, If = { key: 2 };
function Of(t, s, e, n, r, i) {
  const a = C("UluTableStickyRows");
  return l(), d("table", {
    class: _(e.resolveClasses(e.classes.table, { isActual: e.isActual })),
    "aria-hidden": e.isActual ? "false" : "true"
  }, [
    e.caption ? (l(), d("caption", bf, y(e.caption), 1)) : v("", !0),
    f("thead", null, [
      (l(!0), d(I, null, R(e.headerRows, (o, u) => (l(), d("tr", {
        key: `hr-${u}`,
        id: i.optionalAttr(e.isActual && o.id),
        class: _(e.resolveClasses(e.classes.rowHeader, { row: o, rowIndex: u, isActual: e.isActual })),
        style: z({
          height: o.height
        })
      }, [
        (l(!0), d(I, null, R(o.columns, (c, h) => (l(), d("th", {
          key: `hc-${h}`,
          id: i.optionalAttr(e.isActual && c.id),
          rowspan: c.rowspan,
          colspan: c.colspan,
          "data-child-columns": c.columns && c.columns.length,
          class: _([
            {
              "sort-active": c.sortApplied,
              "sort-ascending": c.sortApplied && c.sortAscending,
              "sort-descending": c.sortApplied && !c.sortAscending
            },
            e.resolveClasses(c.classHeader, { column: c, index: h, isActual: e.isActual })
          ]),
          style: z({
            width: c.width
          }),
          "aria-sort": c.sort ? c.sortAscending ? "ascending" : "descending" : null,
          scope: i.optionalAttr(e.isActual && (c.colspan > 1 ? "colgroup" : "col")),
          headers: i.optionalAttr(e.isActual && i.getHeaderHeaders(c, u)),
          ref_for: !0,
          ref: (p) => i.addHeaderRef(c, p)
        }, [
          c.sortable ? (l(), b(P(e.isActual ? "button" : "div"), {
            key: 0,
            class: _(["table-sticky__sort-button", {
              "table-sticky__sort-button--focused": c.sortFocused
            }]),
            onClick: (p) => t.$emit("columnSorted", c),
            onFocus: (p) => i.handleSortFocus(c, !0),
            onBlur: (p) => i.handleSortFocus(c, !1),
            "aria-pressed": c.sortApplied ? "true" : "false"
          }, {
            default: S(() => [
              t.$slots[c.slotHeader] ? m(t.$slots, c.slotHeader, {
                key: 0,
                isActual: e.isActual,
                column: c,
                index: h
              }) : c.htmlTitle ? (l(), d("div", {
                key: 1,
                innerHTML: e.getColumnTitle({ column: c, index: h, isActual: e.isActual })
              }, null, 8, kf)) : (l(), d(I, { key: 2 }, [
                w(y(e.getColumnTitle({ column: c, index: h, isActual: e.isActual })), 1)
              ], 64)),
              f("span", Cf, [
                f("span", Af, [
                  m(t.$slots, "sortIcon", {}, () => [
                    s[0] || (s[0] = w("▼"))
                  ])
                ])
              ])
            ]),
            _: 2
          }, 1064, ["class", "onClick", "onFocus", "onBlur", "aria-pressed"])) : (l(), d(I, { key: 1 }, [
            t.$slots[c.slotHeader] ? m(t.$slots, c.slotHeader, {
              key: 0,
              isActual: e.isActual,
              column: c,
              index: h
            }) : c.htmlTitle ? (l(), d("div", {
              key: 1,
              innerHTML: e.getColumnTitle({ column: c, index: h, isActual: e.isActual })
            }, null, 8, Tf)) : (l(), d(I, { key: 2 }, [
              w(y(e.getColumnTitle({ column: c, index: h, isActual: e.isActual })), 1)
            ], 64))
          ], 64))
        ], 14, wf))), 128))
      ], 14, Sf))), 128))
    ]),
    e.rows ? (l(), d("tbody", Rf, [
      A(a, {
        rows: e.rows,
        rowColumns: e.rowColumns,
        optionalAttr: i.optionalAttr,
        resolveClasses: e.resolveClasses,
        getCellHeaders: i.getCellHeaders,
        isActual: e.isActual,
        columnWidth: e.columnWidth,
        classes: e.classes,
        value: i.value
      }, me({ _: 2 }, [
        R(t.$slots, (o, u) => ({
          name: u,
          fn: S((c) => [
            m(t.$slots, u, K(X(c)))
          ])
        }))
      ]), 1032, ["rows", "rowColumns", "optionalAttr", "resolveClasses", "getCellHeaders", "isActual", "columnWidth", "classes", "value"])
    ])) : v("", !0),
    e.footerRows ? (l(), d("tfoot", If, [
      A(a, {
        rows: e.footerRows,
        rowColumns: e.rowColumns,
        optionalAttr: i.optionalAttr,
        resolveClasses: e.resolveClasses,
        getCellHeaders: i.getCellHeaders,
        isActual: e.isActual,
        columnWidth: e.columnWidth,
        classes: e.classes,
        value: i.value,
        foot: ""
      }, me({ _: 2 }, [
        R(t.$slots, (o, u) => ({
          name: u,
          fn: S((c) => [
            m(t.$slots, u, K(X(c)))
          ])
        }))
      ]), 1032, ["rows", "rowColumns", "optionalAttr", "resolveClasses", "getCellHeaders", "isActual", "columnWidth", "classes", "value"])
    ])) : v("", !0)
  ], 10, pf);
}
const xf = /* @__PURE__ */ g(yf, [["render", Of]]);
var je = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Uf(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var Xe, En;
function qf() {
  if (En) return Xe;
  En = 1;
  function t() {
    this.__data__ = [], this.size = 0;
  }
  return Xe = t, Xe;
}
var Ye, jn;
function ea() {
  if (jn) return Ye;
  jn = 1;
  function t(s, e) {
    return s === e || s !== s && e !== e;
  }
  return Ye = t, Ye;
}
var Je, zn;
function $e() {
  if (zn) return Je;
  zn = 1;
  var t = ea();
  function s(e, n) {
    for (var r = e.length; r--; )
      if (t(e[r][0], n))
        return r;
    return -1;
  }
  return Je = s, Je;
}
var Ze, Fn;
function Ef() {
  if (Fn) return Ze;
  Fn = 1;
  var t = $e(), s = Array.prototype, e = s.splice;
  function n(r) {
    var i = this.__data__, a = t(i, r);
    if (a < 0)
      return !1;
    var o = i.length - 1;
    return a == o ? i.pop() : e.call(i, a, 1), --this.size, !0;
  }
  return Ze = n, Ze;
}
var Qe, Mn;
function jf() {
  if (Mn) return Qe;
  Mn = 1;
  var t = $e();
  function s(e) {
    var n = this.__data__, r = t(n, e);
    return r < 0 ? void 0 : n[r][1];
  }
  return Qe = s, Qe;
}
var et, Pn;
function zf() {
  if (Pn) return et;
  Pn = 1;
  var t = $e();
  function s(e) {
    return t(this.__data__, e) > -1;
  }
  return et = s, et;
}
var tt, $n;
function Ff() {
  if ($n) return tt;
  $n = 1;
  var t = $e();
  function s(e, n) {
    var r = this.__data__, i = t(r, e);
    return i < 0 ? (++this.size, r.push([e, n])) : r[i][1] = n, this;
  }
  return tt = s, tt;
}
var st, Ln;
function Le() {
  if (Ln) return st;
  Ln = 1;
  var t = qf(), s = Ef(), e = jf(), n = zf(), r = Ff();
  function i(a) {
    var o = -1, u = a == null ? 0 : a.length;
    for (this.clear(); ++o < u; ) {
      var c = a[o];
      this.set(c[0], c[1]);
    }
  }
  return i.prototype.clear = t, i.prototype.delete = s, i.prototype.get = e, i.prototype.has = n, i.prototype.set = r, st = i, st;
}
var nt, Bn;
function Mf() {
  if (Bn) return nt;
  Bn = 1;
  var t = Le();
  function s() {
    this.__data__ = new t(), this.size = 0;
  }
  return nt = s, nt;
}
var rt, Hn;
function Pf() {
  if (Hn) return rt;
  Hn = 1;
  function t(s) {
    var e = this.__data__, n = e.delete(s);
    return this.size = e.size, n;
  }
  return rt = t, rt;
}
var it, Dn;
function $f() {
  if (Dn) return it;
  Dn = 1;
  function t(s) {
    return this.__data__.get(s);
  }
  return it = t, it;
}
var at, Vn;
function Lf() {
  if (Vn) return at;
  Vn = 1;
  function t(s) {
    return this.__data__.has(s);
  }
  return at = t, at;
}
var ot, Nn;
function ta() {
  if (Nn) return ot;
  Nn = 1;
  var t = typeof je == "object" && je && je.Object === Object && je;
  return ot = t, ot;
}
var lt, Kn;
function Q() {
  if (Kn) return lt;
  Kn = 1;
  var t = ta(), s = typeof self == "object" && self && self.Object === Object && self, e = t || s || Function("return this")();
  return lt = e, lt;
}
var ct, Wn;
function an() {
  if (Wn) return ct;
  Wn = 1;
  var t = Q(), s = t.Symbol;
  return ct = s, ct;
}
var ut, Gn;
function Bf() {
  if (Gn) return ut;
  Gn = 1;
  var t = an(), s = Object.prototype, e = s.hasOwnProperty, n = s.toString, r = t ? t.toStringTag : void 0;
  function i(a) {
    var o = e.call(a, r), u = a[r];
    try {
      a[r] = void 0;
      var c = !0;
    } catch {
    }
    var h = n.call(a);
    return c && (o ? a[r] = u : delete a[r]), h;
  }
  return ut = i, ut;
}
var dt, Xn;
function Hf() {
  if (Xn) return dt;
  Xn = 1;
  var t = Object.prototype, s = t.toString;
  function e(n) {
    return s.call(n);
  }
  return dt = e, dt;
}
var ft, Yn;
function Be() {
  if (Yn) return ft;
  Yn = 1;
  var t = an(), s = Bf(), e = Hf(), n = "[object Null]", r = "[object Undefined]", i = t ? t.toStringTag : void 0;
  function a(o) {
    return o == null ? o === void 0 ? r : n : i && i in Object(o) ? s(o) : e(o);
  }
  return ft = a, ft;
}
var ht, Jn;
function Te() {
  if (Jn) return ht;
  Jn = 1;
  function t(s) {
    var e = typeof s;
    return s != null && (e == "object" || e == "function");
  }
  return ht = t, ht;
}
var _t, Zn;
function sa() {
  if (Zn) return _t;
  Zn = 1;
  var t = Be(), s = Te(), e = "[object AsyncFunction]", n = "[object Function]", r = "[object GeneratorFunction]", i = "[object Proxy]";
  function a(o) {
    if (!s(o))
      return !1;
    var u = t(o);
    return u == n || u == r || u == e || u == i;
  }
  return _t = a, _t;
}
var mt, Qn;
function Df() {
  if (Qn) return mt;
  Qn = 1;
  var t = Q(), s = t["__core-js_shared__"];
  return mt = s, mt;
}
var gt, er;
function Vf() {
  if (er) return gt;
  er = 1;
  var t = Df(), s = function() {
    var n = /[^.]+$/.exec(t && t.keys && t.keys.IE_PROTO || "");
    return n ? "Symbol(src)_1." + n : "";
  }();
  function e(n) {
    return !!s && s in n;
  }
  return gt = e, gt;
}
var vt, tr;
function na() {
  if (tr) return vt;
  tr = 1;
  var t = Function.prototype, s = t.toString;
  function e(n) {
    if (n != null) {
      try {
        return s.call(n);
      } catch {
      }
      try {
        return n + "";
      } catch {
      }
    }
    return "";
  }
  return vt = e, vt;
}
var yt, sr;
function Nf() {
  if (sr) return yt;
  sr = 1;
  var t = sa(), s = Vf(), e = Te(), n = na(), r = /[\\^$.*+?()[\]{}|]/g, i = /^\[object .+?Constructor\]$/, a = Function.prototype, o = Object.prototype, u = a.toString, c = o.hasOwnProperty, h = RegExp(
    "^" + u.call(c).replace(r, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  );
  function p(k) {
    if (!e(k) || s(k))
      return !1;
    var q = t(k) ? h : i;
    return q.test(n(k));
  }
  return yt = p, yt;
}
var pt, nr;
function Kf() {
  if (nr) return pt;
  nr = 1;
  function t(s, e) {
    return s?.[e];
  }
  return pt = t, pt;
}
var bt, rr;
function ue() {
  if (rr) return bt;
  rr = 1;
  var t = Nf(), s = Kf();
  function e(n, r) {
    var i = s(n, r);
    return t(i) ? i : void 0;
  }
  return bt = e, bt;
}
var St, ir;
function on() {
  if (ir) return St;
  ir = 1;
  var t = ue(), s = Q(), e = t(s, "Map");
  return St = e, St;
}
var wt, ar;
function He() {
  if (ar) return wt;
  ar = 1;
  var t = ue(), s = t(Object, "create");
  return wt = s, wt;
}
var kt, or;
function Wf() {
  if (or) return kt;
  or = 1;
  var t = He();
  function s() {
    this.__data__ = t ? t(null) : {}, this.size = 0;
  }
  return kt = s, kt;
}
var Ct, lr;
function Gf() {
  if (lr) return Ct;
  lr = 1;
  function t(s) {
    var e = this.has(s) && delete this.__data__[s];
    return this.size -= e ? 1 : 0, e;
  }
  return Ct = t, Ct;
}
var At, cr;
function Xf() {
  if (cr) return At;
  cr = 1;
  var t = He(), s = "__lodash_hash_undefined__", e = Object.prototype, n = e.hasOwnProperty;
  function r(i) {
    var a = this.__data__;
    if (t) {
      var o = a[i];
      return o === s ? void 0 : o;
    }
    return n.call(a, i) ? a[i] : void 0;
  }
  return At = r, At;
}
var Tt, ur;
function Yf() {
  if (ur) return Tt;
  ur = 1;
  var t = He(), s = Object.prototype, e = s.hasOwnProperty;
  function n(r) {
    var i = this.__data__;
    return t ? i[r] !== void 0 : e.call(i, r);
  }
  return Tt = n, Tt;
}
var Rt, dr;
function Jf() {
  if (dr) return Rt;
  dr = 1;
  var t = He(), s = "__lodash_hash_undefined__";
  function e(n, r) {
    var i = this.__data__;
    return this.size += this.has(n) ? 0 : 1, i[n] = t && r === void 0 ? s : r, this;
  }
  return Rt = e, Rt;
}
var It, fr;
function Zf() {
  if (fr) return It;
  fr = 1;
  var t = Wf(), s = Gf(), e = Xf(), n = Yf(), r = Jf();
  function i(a) {
    var o = -1, u = a == null ? 0 : a.length;
    for (this.clear(); ++o < u; ) {
      var c = a[o];
      this.set(c[0], c[1]);
    }
  }
  return i.prototype.clear = t, i.prototype.delete = s, i.prototype.get = e, i.prototype.has = n, i.prototype.set = r, It = i, It;
}
var Ot, hr;
function Qf() {
  if (hr) return Ot;
  hr = 1;
  var t = Zf(), s = Le(), e = on();
  function n() {
    this.size = 0, this.__data__ = {
      hash: new t(),
      map: new (e || s)(),
      string: new t()
    };
  }
  return Ot = n, Ot;
}
var xt, _r;
function eh() {
  if (_r) return xt;
  _r = 1;
  function t(s) {
    var e = typeof s;
    return e == "string" || e == "number" || e == "symbol" || e == "boolean" ? s !== "__proto__" : s === null;
  }
  return xt = t, xt;
}
var Ut, mr;
function De() {
  if (mr) return Ut;
  mr = 1;
  var t = eh();
  function s(e, n) {
    var r = e.__data__;
    return t(n) ? r[typeof n == "string" ? "string" : "hash"] : r.map;
  }
  return Ut = s, Ut;
}
var qt, gr;
function th() {
  if (gr) return qt;
  gr = 1;
  var t = De();
  function s(e) {
    var n = t(this, e).delete(e);
    return this.size -= n ? 1 : 0, n;
  }
  return qt = s, qt;
}
var Et, vr;
function sh() {
  if (vr) return Et;
  vr = 1;
  var t = De();
  function s(e) {
    return t(this, e).get(e);
  }
  return Et = s, Et;
}
var jt, yr;
function nh() {
  if (yr) return jt;
  yr = 1;
  var t = De();
  function s(e) {
    return t(this, e).has(e);
  }
  return jt = s, jt;
}
var zt, pr;
function rh() {
  if (pr) return zt;
  pr = 1;
  var t = De();
  function s(e, n) {
    var r = t(this, e), i = r.size;
    return r.set(e, n), this.size += r.size == i ? 0 : 1, this;
  }
  return zt = s, zt;
}
var Ft, br;
function ih() {
  if (br) return Ft;
  br = 1;
  var t = Qf(), s = th(), e = sh(), n = nh(), r = rh();
  function i(a) {
    var o = -1, u = a == null ? 0 : a.length;
    for (this.clear(); ++o < u; ) {
      var c = a[o];
      this.set(c[0], c[1]);
    }
  }
  return i.prototype.clear = t, i.prototype.delete = s, i.prototype.get = e, i.prototype.has = n, i.prototype.set = r, Ft = i, Ft;
}
var Mt, Sr;
function ah() {
  if (Sr) return Mt;
  Sr = 1;
  var t = Le(), s = on(), e = ih(), n = 200;
  function r(i, a) {
    var o = this.__data__;
    if (o instanceof t) {
      var u = o.__data__;
      if (!s || u.length < n - 1)
        return u.push([i, a]), this.size = ++o.size, this;
      o = this.__data__ = new e(u);
    }
    return o.set(i, a), this.size = o.size, this;
  }
  return Mt = r, Mt;
}
var Pt, wr;
function oh() {
  if (wr) return Pt;
  wr = 1;
  var t = Le(), s = Mf(), e = Pf(), n = $f(), r = Lf(), i = ah();
  function a(o) {
    var u = this.__data__ = new t(o);
    this.size = u.size;
  }
  return a.prototype.clear = s, a.prototype.delete = e, a.prototype.get = n, a.prototype.has = r, a.prototype.set = i, Pt = a, Pt;
}
var $t, kr;
function lh() {
  if (kr) return $t;
  kr = 1;
  function t(s, e) {
    for (var n = -1, r = s == null ? 0 : s.length; ++n < r && e(s[n], n, s) !== !1; )
      ;
    return s;
  }
  return $t = t, $t;
}
var Lt, Cr;
function ch() {
  if (Cr) return Lt;
  Cr = 1;
  var t = ue(), s = function() {
    try {
      var e = t(Object, "defineProperty");
      return e({}, "", {}), e;
    } catch {
    }
  }();
  return Lt = s, Lt;
}
var Bt, Ar;
function ra() {
  if (Ar) return Bt;
  Ar = 1;
  var t = ch();
  function s(e, n, r) {
    n == "__proto__" && t ? t(e, n, {
      configurable: !0,
      enumerable: !0,
      value: r,
      writable: !0
    }) : e[n] = r;
  }
  return Bt = s, Bt;
}
var Ht, Tr;
function ia() {
  if (Tr) return Ht;
  Tr = 1;
  var t = ra(), s = ea(), e = Object.prototype, n = e.hasOwnProperty;
  function r(i, a, o) {
    var u = i[a];
    (!(n.call(i, a) && s(u, o)) || o === void 0 && !(a in i)) && t(i, a, o);
  }
  return Ht = r, Ht;
}
var Dt, Rr;
function Ve() {
  if (Rr) return Dt;
  Rr = 1;
  var t = ia(), s = ra();
  function e(n, r, i, a) {
    var o = !i;
    i || (i = {});
    for (var u = -1, c = r.length; ++u < c; ) {
      var h = r[u], p = a ? a(i[h], n[h], h, i, n) : void 0;
      p === void 0 && (p = n[h]), o ? s(i, h, p) : t(i, h, p);
    }
    return i;
  }
  return Dt = e, Dt;
}
var Vt, Ir;
function uh() {
  if (Ir) return Vt;
  Ir = 1;
  function t(s, e) {
    for (var n = -1, r = Array(s); ++n < s; )
      r[n] = e(n);
    return r;
  }
  return Vt = t, Vt;
}
var Nt, Or;
function Re() {
  if (Or) return Nt;
  Or = 1;
  function t(s) {
    return s != null && typeof s == "object";
  }
  return Nt = t, Nt;
}
var Kt, xr;
function dh() {
  if (xr) return Kt;
  xr = 1;
  var t = Be(), s = Re(), e = "[object Arguments]";
  function n(r) {
    return s(r) && t(r) == e;
  }
  return Kt = n, Kt;
}
var Wt, Ur;
function fh() {
  if (Ur) return Wt;
  Ur = 1;
  var t = dh(), s = Re(), e = Object.prototype, n = e.hasOwnProperty, r = e.propertyIsEnumerable, i = t(/* @__PURE__ */ function() {
    return arguments;
  }()) ? t : function(a) {
    return s(a) && n.call(a, "callee") && !r.call(a, "callee");
  };
  return Wt = i, Wt;
}
var Gt, qr;
function ln() {
  if (qr) return Gt;
  qr = 1;
  var t = Array.isArray;
  return Gt = t, Gt;
}
var we = { exports: {} }, Xt, Er;
function hh() {
  if (Er) return Xt;
  Er = 1;
  function t() {
    return !1;
  }
  return Xt = t, Xt;
}
we.exports;
var jr;
function aa() {
  return jr || (jr = 1, function(t, s) {
    var e = Q(), n = hh(), r = s && !s.nodeType && s, i = r && !0 && t && !t.nodeType && t, a = i && i.exports === r, o = a ? e.Buffer : void 0, u = o ? o.isBuffer : void 0, c = u || n;
    t.exports = c;
  }(we, we.exports)), we.exports;
}
var Yt, zr;
function _h() {
  if (zr) return Yt;
  zr = 1;
  var t = 9007199254740991, s = /^(?:0|[1-9]\d*)$/;
  function e(n, r) {
    var i = typeof n;
    return r = r ?? t, !!r && (i == "number" || i != "symbol" && s.test(n)) && n > -1 && n % 1 == 0 && n < r;
  }
  return Yt = e, Yt;
}
var Jt, Fr;
function oa() {
  if (Fr) return Jt;
  Fr = 1;
  var t = 9007199254740991;
  function s(e) {
    return typeof e == "number" && e > -1 && e % 1 == 0 && e <= t;
  }
  return Jt = s, Jt;
}
var Zt, Mr;
function mh() {
  if (Mr) return Zt;
  Mr = 1;
  var t = Be(), s = oa(), e = Re(), n = "[object Arguments]", r = "[object Array]", i = "[object Boolean]", a = "[object Date]", o = "[object Error]", u = "[object Function]", c = "[object Map]", h = "[object Number]", p = "[object Object]", k = "[object RegExp]", q = "[object Set]", L = "[object String]", D = "[object WeakMap]", V = "[object ArrayBuffer]", W = "[object DataView]", E = "[object Float32Array]", N = "[object Float64Array]", B = "[object Int8Array]", J = "[object Int16Array]", G = "[object Int32Array]", se = "[object Uint8Array]", F = "[object Uint8ClampedArray]", M = "[object Uint16Array]", Z = "[object Uint32Array]", T = {};
  T[E] = T[N] = T[B] = T[J] = T[G] = T[se] = T[F] = T[M] = T[Z] = !0, T[n] = T[r] = T[V] = T[i] = T[W] = T[a] = T[o] = T[u] = T[c] = T[h] = T[p] = T[k] = T[q] = T[L] = T[D] = !1;
  function ne(ye) {
    return e(ye) && s(ye.length) && !!T[t(ye)];
  }
  return Zt = ne, Zt;
}
var Qt, Pr;
function cn() {
  if (Pr) return Qt;
  Pr = 1;
  function t(s) {
    return function(e) {
      return s(e);
    };
  }
  return Qt = t, Qt;
}
var ke = { exports: {} };
ke.exports;
var $r;
function un() {
  return $r || ($r = 1, function(t, s) {
    var e = ta(), n = s && !s.nodeType && s, r = n && !0 && t && !t.nodeType && t, i = r && r.exports === n, a = i && e.process, o = function() {
      try {
        var u = r && r.require && r.require("util").types;
        return u || a && a.binding && a.binding("util");
      } catch {
      }
    }();
    t.exports = o;
  }(ke, ke.exports)), ke.exports;
}
var es, Lr;
function gh() {
  if (Lr) return es;
  Lr = 1;
  var t = mh(), s = cn(), e = un(), n = e && e.isTypedArray, r = n ? s(n) : t;
  return es = r, es;
}
var ts, Br;
function la() {
  if (Br) return ts;
  Br = 1;
  var t = uh(), s = fh(), e = ln(), n = aa(), r = _h(), i = gh(), a = Object.prototype, o = a.hasOwnProperty;
  function u(c, h) {
    var p = e(c), k = !p && s(c), q = !p && !k && n(c), L = !p && !k && !q && i(c), D = p || k || q || L, V = D ? t(c.length, String) : [], W = V.length;
    for (var E in c)
      (h || o.call(c, E)) && !(D && // Safari 9 has enumerable `arguments.length` in strict mode.
      (E == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
      q && (E == "offset" || E == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
      L && (E == "buffer" || E == "byteLength" || E == "byteOffset") || // Skip index properties.
      r(E, W))) && V.push(E);
    return V;
  }
  return ts = u, ts;
}
var ss, Hr;
function dn() {
  if (Hr) return ss;
  Hr = 1;
  var t = Object.prototype;
  function s(e) {
    var n = e && e.constructor, r = typeof n == "function" && n.prototype || t;
    return e === r;
  }
  return ss = s, ss;
}
var ns, Dr;
function ca() {
  if (Dr) return ns;
  Dr = 1;
  function t(s, e) {
    return function(n) {
      return s(e(n));
    };
  }
  return ns = t, ns;
}
var rs, Vr;
function vh() {
  if (Vr) return rs;
  Vr = 1;
  var t = ca(), s = t(Object.keys, Object);
  return rs = s, rs;
}
var is, Nr;
function yh() {
  if (Nr) return is;
  Nr = 1;
  var t = dn(), s = vh(), e = Object.prototype, n = e.hasOwnProperty;
  function r(i) {
    if (!t(i))
      return s(i);
    var a = [];
    for (var o in Object(i))
      n.call(i, o) && o != "constructor" && a.push(o);
    return a;
  }
  return is = r, is;
}
var as, Kr;
function ua() {
  if (Kr) return as;
  Kr = 1;
  var t = sa(), s = oa();
  function e(n) {
    return n != null && s(n.length) && !t(n);
  }
  return as = e, as;
}
var os, Wr;
function fn() {
  if (Wr) return os;
  Wr = 1;
  var t = la(), s = yh(), e = ua();
  function n(r) {
    return e(r) ? t(r) : s(r);
  }
  return os = n, os;
}
var ls, Gr;
function ph() {
  if (Gr) return ls;
  Gr = 1;
  var t = Ve(), s = fn();
  function e(n, r) {
    return n && t(r, s(r), n);
  }
  return ls = e, ls;
}
var cs, Xr;
function bh() {
  if (Xr) return cs;
  Xr = 1;
  function t(s) {
    var e = [];
    if (s != null)
      for (var n in Object(s))
        e.push(n);
    return e;
  }
  return cs = t, cs;
}
var us, Yr;
function Sh() {
  if (Yr) return us;
  Yr = 1;
  var t = Te(), s = dn(), e = bh(), n = Object.prototype, r = n.hasOwnProperty;
  function i(a) {
    if (!t(a))
      return e(a);
    var o = s(a), u = [];
    for (var c in a)
      c == "constructor" && (o || !r.call(a, c)) || u.push(c);
    return u;
  }
  return us = i, us;
}
var ds, Jr;
function hn() {
  if (Jr) return ds;
  Jr = 1;
  var t = la(), s = Sh(), e = ua();
  function n(r) {
    return e(r) ? t(r, !0) : s(r);
  }
  return ds = n, ds;
}
var fs, Zr;
function wh() {
  if (Zr) return fs;
  Zr = 1;
  var t = Ve(), s = hn();
  function e(n, r) {
    return n && t(r, s(r), n);
  }
  return fs = e, fs;
}
var Ce = { exports: {} };
Ce.exports;
var Qr;
function kh() {
  return Qr || (Qr = 1, function(t, s) {
    var e = Q(), n = s && !s.nodeType && s, r = n && !0 && t && !t.nodeType && t, i = r && r.exports === n, a = i ? e.Buffer : void 0, o = a ? a.allocUnsafe : void 0;
    function u(c, h) {
      if (h)
        return c.slice();
      var p = c.length, k = o ? o(p) : new c.constructor(p);
      return c.copy(k), k;
    }
    t.exports = u;
  }(Ce, Ce.exports)), Ce.exports;
}
var hs, ei;
function Ch() {
  if (ei) return hs;
  ei = 1;
  function t(s, e) {
    var n = -1, r = s.length;
    for (e || (e = Array(r)); ++n < r; )
      e[n] = s[n];
    return e;
  }
  return hs = t, hs;
}
var _s, ti;
function Ah() {
  if (ti) return _s;
  ti = 1;
  function t(s, e) {
    for (var n = -1, r = s == null ? 0 : s.length, i = 0, a = []; ++n < r; ) {
      var o = s[n];
      e(o, n, s) && (a[i++] = o);
    }
    return a;
  }
  return _s = t, _s;
}
var ms, si;
function da() {
  if (si) return ms;
  si = 1;
  function t() {
    return [];
  }
  return ms = t, ms;
}
var gs, ni;
function _n() {
  if (ni) return gs;
  ni = 1;
  var t = Ah(), s = da(), e = Object.prototype, n = e.propertyIsEnumerable, r = Object.getOwnPropertySymbols, i = r ? function(a) {
    return a == null ? [] : (a = Object(a), t(r(a), function(o) {
      return n.call(a, o);
    }));
  } : s;
  return gs = i, gs;
}
var vs, ri;
function Th() {
  if (ri) return vs;
  ri = 1;
  var t = Ve(), s = _n();
  function e(n, r) {
    return t(n, s(n), r);
  }
  return vs = e, vs;
}
var ys, ii;
function fa() {
  if (ii) return ys;
  ii = 1;
  function t(s, e) {
    for (var n = -1, r = e.length, i = s.length; ++n < r; )
      s[i + n] = e[n];
    return s;
  }
  return ys = t, ys;
}
var ps, ai;
function ha() {
  if (ai) return ps;
  ai = 1;
  var t = ca(), s = t(Object.getPrototypeOf, Object);
  return ps = s, ps;
}
var bs, oi;
function _a() {
  if (oi) return bs;
  oi = 1;
  var t = fa(), s = ha(), e = _n(), n = da(), r = Object.getOwnPropertySymbols, i = r ? function(a) {
    for (var o = []; a; )
      t(o, e(a)), a = s(a);
    return o;
  } : n;
  return bs = i, bs;
}
var Ss, li;
function Rh() {
  if (li) return Ss;
  li = 1;
  var t = Ve(), s = _a();
  function e(n, r) {
    return t(n, s(n), r);
  }
  return Ss = e, Ss;
}
var ws, ci;
function ma() {
  if (ci) return ws;
  ci = 1;
  var t = fa(), s = ln();
  function e(n, r, i) {
    var a = r(n);
    return s(n) ? a : t(a, i(n));
  }
  return ws = e, ws;
}
var ks, ui;
function Ih() {
  if (ui) return ks;
  ui = 1;
  var t = ma(), s = _n(), e = fn();
  function n(r) {
    return t(r, e, s);
  }
  return ks = n, ks;
}
var Cs, di;
function Oh() {
  if (di) return Cs;
  di = 1;
  var t = ma(), s = _a(), e = hn();
  function n(r) {
    return t(r, e, s);
  }
  return Cs = n, Cs;
}
var As, fi;
function xh() {
  if (fi) return As;
  fi = 1;
  var t = ue(), s = Q(), e = t(s, "DataView");
  return As = e, As;
}
var Ts, hi;
function Uh() {
  if (hi) return Ts;
  hi = 1;
  var t = ue(), s = Q(), e = t(s, "Promise");
  return Ts = e, Ts;
}
var Rs, _i;
function qh() {
  if (_i) return Rs;
  _i = 1;
  var t = ue(), s = Q(), e = t(s, "Set");
  return Rs = e, Rs;
}
var Is, mi;
function Eh() {
  if (mi) return Is;
  mi = 1;
  var t = ue(), s = Q(), e = t(s, "WeakMap");
  return Is = e, Is;
}
var Os, gi;
function mn() {
  if (gi) return Os;
  gi = 1;
  var t = xh(), s = on(), e = Uh(), n = qh(), r = Eh(), i = Be(), a = na(), o = "[object Map]", u = "[object Object]", c = "[object Promise]", h = "[object Set]", p = "[object WeakMap]", k = "[object DataView]", q = a(t), L = a(s), D = a(e), V = a(n), W = a(r), E = i;
  return (t && E(new t(new ArrayBuffer(1))) != k || s && E(new s()) != o || e && E(e.resolve()) != c || n && E(new n()) != h || r && E(new r()) != p) && (E = function(N) {
    var B = i(N), J = B == u ? N.constructor : void 0, G = J ? a(J) : "";
    if (G)
      switch (G) {
        case q:
          return k;
        case L:
          return o;
        case D:
          return c;
        case V:
          return h;
        case W:
          return p;
      }
    return B;
  }), Os = E, Os;
}
var xs, vi;
function jh() {
  if (vi) return xs;
  vi = 1;
  var t = Object.prototype, s = t.hasOwnProperty;
  function e(n) {
    var r = n.length, i = new n.constructor(r);
    return r && typeof n[0] == "string" && s.call(n, "index") && (i.index = n.index, i.input = n.input), i;
  }
  return xs = e, xs;
}
var Us, yi;
function zh() {
  if (yi) return Us;
  yi = 1;
  var t = Q(), s = t.Uint8Array;
  return Us = s, Us;
}
var qs, pi;
function gn() {
  if (pi) return qs;
  pi = 1;
  var t = zh();
  function s(e) {
    var n = new e.constructor(e.byteLength);
    return new t(n).set(new t(e)), n;
  }
  return qs = s, qs;
}
var Es, bi;
function Fh() {
  if (bi) return Es;
  bi = 1;
  var t = gn();
  function s(e, n) {
    var r = n ? t(e.buffer) : e.buffer;
    return new e.constructor(r, e.byteOffset, e.byteLength);
  }
  return Es = s, Es;
}
var js, Si;
function Mh() {
  if (Si) return js;
  Si = 1;
  var t = /\w*$/;
  function s(e) {
    var n = new e.constructor(e.source, t.exec(e));
    return n.lastIndex = e.lastIndex, n;
  }
  return js = s, js;
}
var zs, wi;
function Ph() {
  if (wi) return zs;
  wi = 1;
  var t = an(), s = t ? t.prototype : void 0, e = s ? s.valueOf : void 0;
  function n(r) {
    return e ? Object(e.call(r)) : {};
  }
  return zs = n, zs;
}
var Fs, ki;
function $h() {
  if (ki) return Fs;
  ki = 1;
  var t = gn();
  function s(e, n) {
    var r = n ? t(e.buffer) : e.buffer;
    return new e.constructor(r, e.byteOffset, e.length);
  }
  return Fs = s, Fs;
}
var Ms, Ci;
function Lh() {
  if (Ci) return Ms;
  Ci = 1;
  var t = gn(), s = Fh(), e = Mh(), n = Ph(), r = $h(), i = "[object Boolean]", a = "[object Date]", o = "[object Map]", u = "[object Number]", c = "[object RegExp]", h = "[object Set]", p = "[object String]", k = "[object Symbol]", q = "[object ArrayBuffer]", L = "[object DataView]", D = "[object Float32Array]", V = "[object Float64Array]", W = "[object Int8Array]", E = "[object Int16Array]", N = "[object Int32Array]", B = "[object Uint8Array]", J = "[object Uint8ClampedArray]", G = "[object Uint16Array]", se = "[object Uint32Array]";
  function F(M, Z, T) {
    var ne = M.constructor;
    switch (Z) {
      case q:
        return t(M);
      case i:
      case a:
        return new ne(+M);
      case L:
        return s(M, T);
      case D:
      case V:
      case W:
      case E:
      case N:
      case B:
      case J:
      case G:
      case se:
        return r(M, T);
      case o:
        return new ne();
      case u:
      case p:
        return new ne(M);
      case c:
        return e(M);
      case h:
        return new ne();
      case k:
        return n(M);
    }
  }
  return Ms = F, Ms;
}
var Ps, Ai;
function Bh() {
  if (Ai) return Ps;
  Ai = 1;
  var t = Te(), s = Object.create, e = /* @__PURE__ */ function() {
    function n() {
    }
    return function(r) {
      if (!t(r))
        return {};
      if (s)
        return s(r);
      n.prototype = r;
      var i = new n();
      return n.prototype = void 0, i;
    };
  }();
  return Ps = e, Ps;
}
var $s, Ti;
function Hh() {
  if (Ti) return $s;
  Ti = 1;
  var t = Bh(), s = ha(), e = dn();
  function n(r) {
    return typeof r.constructor == "function" && !e(r) ? t(s(r)) : {};
  }
  return $s = n, $s;
}
var Ls, Ri;
function Dh() {
  if (Ri) return Ls;
  Ri = 1;
  var t = mn(), s = Re(), e = "[object Map]";
  function n(r) {
    return s(r) && t(r) == e;
  }
  return Ls = n, Ls;
}
var Bs, Ii;
function Vh() {
  if (Ii) return Bs;
  Ii = 1;
  var t = Dh(), s = cn(), e = un(), n = e && e.isMap, r = n ? s(n) : t;
  return Bs = r, Bs;
}
var Hs, Oi;
function Nh() {
  if (Oi) return Hs;
  Oi = 1;
  var t = mn(), s = Re(), e = "[object Set]";
  function n(r) {
    return s(r) && t(r) == e;
  }
  return Hs = n, Hs;
}
var Ds, xi;
function Kh() {
  if (xi) return Ds;
  xi = 1;
  var t = Nh(), s = cn(), e = un(), n = e && e.isSet, r = n ? s(n) : t;
  return Ds = r, Ds;
}
var Vs, Ui;
function Wh() {
  if (Ui) return Vs;
  Ui = 1;
  var t = oh(), s = lh(), e = ia(), n = ph(), r = wh(), i = kh(), a = Ch(), o = Th(), u = Rh(), c = Ih(), h = Oh(), p = mn(), k = jh(), q = Lh(), L = Hh(), D = ln(), V = aa(), W = Vh(), E = Te(), N = Kh(), B = fn(), J = hn(), G = 1, se = 2, F = 4, M = "[object Arguments]", Z = "[object Array]", T = "[object Boolean]", ne = "[object Date]", ye = "[object Error]", vn = "[object Function]", va = "[object GeneratorFunction]", ya = "[object Map]", pa = "[object Number]", yn = "[object Object]", ba = "[object RegExp]", Sa = "[object Set]", wa = "[object String]", ka = "[object Symbol]", Ca = "[object WeakMap]", Aa = "[object ArrayBuffer]", Ta = "[object DataView]", Ra = "[object Float32Array]", Ia = "[object Float64Array]", Oa = "[object Int8Array]", xa = "[object Int16Array]", Ua = "[object Int32Array]", qa = "[object Uint8Array]", Ea = "[object Uint8ClampedArray]", ja = "[object Uint16Array]", za = "[object Uint32Array]", x = {};
  x[M] = x[Z] = x[Aa] = x[Ta] = x[T] = x[ne] = x[Ra] = x[Ia] = x[Oa] = x[xa] = x[Ua] = x[ya] = x[pa] = x[yn] = x[ba] = x[Sa] = x[wa] = x[ka] = x[qa] = x[Ea] = x[ja] = x[za] = !0, x[ye] = x[vn] = x[Ca] = !1;
  function Ie(O, de, fe, Fa, Oe, re) {
    var H, xe = de & G, Ue = de & se, Ma = de & F;
    if (fe && (H = Oe ? fe(O, Fa, Oe, re) : fe(O)), H !== void 0)
      return H;
    if (!E(O))
      return O;
    var pn = D(O);
    if (pn) {
      if (H = k(O), !xe)
        return a(O, H);
    } else {
      var he = p(O), bn = he == vn || he == va;
      if (V(O))
        return i(O, xe);
      if (he == yn || he == M || bn && !Oe) {
        if (H = Ue || bn ? {} : L(O), !xe)
          return Ue ? u(O, r(H, O)) : o(O, n(H, O));
      } else {
        if (!x[he])
          return Oe ? O : {};
        H = q(O, he, xe);
      }
    }
    re || (re = new t());
    var Sn = re.get(O);
    if (Sn)
      return Sn;
    re.set(O, H), N(O) ? O.forEach(function(ie) {
      H.add(Ie(ie, de, fe, ie, O, re));
    }) : W(O) && O.forEach(function(ie, oe) {
      H.set(oe, Ie(ie, de, fe, oe, O, re));
    });
    var Pa = Ma ? Ue ? h : c : Ue ? J : B, wn = pn ? void 0 : Pa(O);
    return s(wn || O, function(ie, oe) {
      wn && (oe = ie, ie = O[oe]), e(H, oe, Ie(ie, de, fe, oe, O, re));
    }), H;
  }
  return Vs = Ie, Vs;
}
var Ns, qi;
function Gh() {
  if (qi) return Ns;
  qi = 1;
  var t = Wh(), s = 1, e = 4;
  function n(r) {
    return t(r, s | e);
  }
  return Ns = n, Ns;
}
var Xh = Gh();
const Yh = /* @__PURE__ */ Uf(Xh), Ks = (t) => t.every((s) => typeof s == "object"), Ei = !0, ga = () => window.innerWidth;
let ji = ga();
const Jh = {
  name: "UluTableSticky",
  components: {
    UluTableStickyTable: xf
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
      required: Ei
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
      validator: Ks,
      required: Ei
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
      validator: Ks
      // required
    },
    /**
     * Array of rows for footer (tfoot)
     */
    footerRows: {
      type: Array,
      validator: Ks
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
      resizeHandler: Me(this.onResize.bind(this), 500, !0),
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
      const t = this.currentColumns, s = [], e = (r) => {
        r.columns ? r.columns.forEach(e) : s.push(r);
      };
      t.forEach(e);
      let n = [];
      return s.forEach((r, i) => {
        const a = n.slice();
        r.getRowHeaders = (o) => a.map((u) => u(o)).join(" "), r.rowHeader && (r.getRowHeaderId = (o) => `${this.idPrefix}-rh-${o}-${i}`, n.push(r.getRowHeaderId));
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
        e.forEach((n) => {
          t.key !== n.key && (n.sortApplied = !1, n.sortAscending = !1), n.columns && s(n.columns);
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
      const t = this.idCreator("c"), s = Yh(this.columns), e = (n, r) => {
        n.id = t(), n.parent = r, n.width = "auto", n.boxWidth = null, n.sortApplied = !1, n.sortAscending = !1, n.sortFocused = !1;
        let i = [];
        r && (r.headers && r.headers.length ? i = [...r.headers] : i.push(r.id)), i.push(n.id), n.headers = i, n.columns ? n.columns.forEach((a) => e(a, n)) : !n.key && !n.value && !n.slot && console.warn("UluTableSticky: Missing 'key', 'value' or 'slot' in column configuration for", n);
      };
      return s.forEach((n) => e(n, null)), s;
    },
    /**
     * Conversion of the columns (which are nested hierarchy) to a flat list of columns 
     * sorted by the way they need to be displayed in rows 
     * - Used for nested headers
     * - Transform nested data into row arrays
     */
    createHeaderRows(t) {
      const s = this.idCreator("hr"), e = t.reduce(this.maxColumnChildren, 1), n = "auto", r = new Array(e).fill(null).map(() => ({
        height: n,
        boxHeight: null,
        columns: [],
        id: s()
      }));
      function i(a, o) {
        const u = o.columns;
        u && u.forEach((c) => i(1 + a, c)), o.rowspan = u ? 1 : e - a, o.colspan = u ? u.reduce((c, h) => c + h.colspan, 0) : 1, r[a].columns.push(o);
      }
      return t.forEach((a) => i(0, a)), r;
    },
    /**
     * Creates row array for internal use
     * - Avoid mutating user's prop
     */
    createRows(t) {
      const s = this.idCreator(t ? "fr" : "br"), e = t ? this.footerRows : this.rows;
      return e ? e.map((n) => ({
        height: null,
        boxHeight: null,
        data: n,
        id: s()
      })) : [];
    },
    onResize() {
      const t = ga();
      ji !== t && (ji = t, this.resizing ? (this.resizing = !1, this.setTableSizes(), this.checkOverflowX(), this.syncScrollLeft()) : (this.resizing = !0, this.removeTableSizes()));
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
      const t = this.$refs.display, s = t.scrollLeft, e = this.scrollControlAmount, n = s - e;
      t.scroll({
        left: n < 0 ? 0 : n,
        behavior: "smooth"
      });
    },
    scrollRight() {
      const t = this.$refs.display, s = t.scrollWidth, e = t.scrollLeft, n = this.scrollControlAmount, r = e + n;
      t.scroll({
        left: r > s ? t.scrollWidth : r,
        behavior: "smooth"
      });
    },
    /**
     * Cleanup function for when component is not in use
     */
    setTableSizes() {
      const t = (n, r) => Math.ceil(n.getBoundingClientRect()[r]);
      this.tableWidth = `${t(this.$refs.table.$el, "width")}px`;
      const s = (n) => document.getElementById(n.id), e = (n) => {
        const r = s(n);
        r && (n.boxHeight = t(r, "height"), n.height = `${n.boxHeight}px`);
      };
      this.headerRows.forEach((n) => {
        e(n), n.columns.forEach((r) => {
          const i = s(r);
          i && (r.boxWidth = t(i, "width"), r.width = `${r.boxWidth}px`);
        });
      }), this.firstColumnSticky && (this.currentRows.forEach((n) => e(n)), this.currentFooterRows.forEach((n) => e(n))), this.$nextTick(() => {
        this.sizesCalculated = !0, Qi(() => {
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
}, Zh = { class: "table-sticky__sticky-wrap table-sticky__sticky-wrap--header" }, Qh = { class: "table-sticky__header-wrap" }, e_ = { class: "table-sticky__sticky-wrap table-sticky__sticky-wrap--first-column-header" }, t_ = { class: "table-sticky__sticky-wrap table-sticky__sticky-wrap--controls" }, s_ = {
  key: 2,
  class: "table-sticky__controls-inner"
}, n_ = ["disabled"], r_ = ["disabled"], i_ = {
  ref: "display",
  class: "table-sticky__display"
};
function a_(t, s, e, n, r, i) {
  const a = C("UluTableStickyTable");
  return l(), d("div", {
    class: _(["table-sticky", {
      "table-sticky--overflown-x": r.overflownX,
      "table-sticky--can-scroll-right": r.canScrollRight,
      "table-sticky--can-scroll-left": r.canScrollLeft
    }])
  }, [
    f("div", Zh, [
      f("div", Qh, [
        A(a, {
          ref: "header",
          class: "table-sticky__table table-sticky__table--header",
          classes: e.classes,
          caption: e.caption,
          resolveClasses: i.resolveClasses,
          getColumnTitle: e.getColumnTitle,
          idPrefix: e.idPrefix,
          headerRows: r.headerRows,
          style: z({
            opacity: r.sizesCalculated ? "1" : "0",
            pointerEvents: r.sizesCalculated ? "auto" : "none",
            width: r.tableWidth
          }),
          onColumnSorted: i.applySort
        }, me({ _: 2 }, [
          R(t.$slots, (o, u) => ({
            name: u,
            fn: S((c) => [
              m(t.$slots, u, K(X(c)))
            ])
          }))
        ]), 1032, ["classes", "caption", "resolveClasses", "getColumnTitle", "idPrefix", "headerRows", "style", "onColumnSorted"])
      ])
    ]),
    f("div", e_, [
      e.firstColumnSticky ? (l(), b(a, {
        key: 0,
        ref: "firstColumnHeader",
        class: "table-sticky__table table-sticky__table--first-column-header",
        classes: e.classes,
        caption: e.caption,
        resolveClasses: i.resolveClasses,
        getColumnTitle: e.getColumnTitle,
        idPrefix: e.idPrefix,
        headerRows: i.headerRowsFirst,
        style: z({
          opacity: i.headerOpacityX,
          pointerEvents: i.headerVisibleX ? "auto" : "none"
        }),
        onColumnSorted: i.applySort
      }, me({ _: 2 }, [
        R(t.$slots, (o, u) => ({
          name: u,
          fn: S((c) => [
            m(t.$slots, u, K(X(c)))
          ])
        }))
      ]), 1032, ["classes", "caption", "resolveClasses", "getColumnTitle", "idPrefix", "headerRows", "style", "onColumnSorted"])) : v("", !0)
    ]),
    f("div", t_, [
      ee(f("div", {
        class: _(["table-sticky__controls", i.resolveClasses(e.classes.controls)]),
        ref: "controls"
      }, [
        t.$slots.controls ? m(t.$slots, "controls", {
          key: 0,
          scrollLeft: i.scrollLeft,
          scrollRight: i.scrollRight,
          canScrollLeft: r.canScrollLeft,
          canScrollRight: r.canScrollRight
        }) : e.controlsComponent ? (l(), b(P(e.controlsComponent), {
          key: 1,
          scrollLeft: i.scrollLeft,
          scrollRight: i.scrollRight,
          canScrollLeft: r.canScrollLeft,
          canScrollRight: r.canScrollRight
        }, null, 8, ["scrollLeft", "scrollRight", "canScrollLeft", "canScrollRight"])) : (l(), d("div", s_, [
          f("button", {
            class: _(["table-sticky__control table-sticky__control--left", i.resolveClasses(e.classes.controlButton)]),
            "aria-label": "Scroll Left",
            onClick: s[0] || (s[0] = (...o) => i.scrollLeft && i.scrollLeft(...o)),
            disabled: !r.canScrollLeft
          }, [
            m(t.$slots, "controlLeft", {}, () => [
              s[2] || (s[2] = w(" ← "))
            ])
          ], 10, n_),
          f("button", {
            class: _(["table-sticky__control table-sticky__control--right", i.resolveClasses(e.classes.controlButton)]),
            "aria-label": "Scroll Right",
            onClick: s[1] || (s[1] = (...o) => i.scrollRight && i.scrollRight(...o)),
            disabled: !r.canScrollRight
          }, [
            m(t.$slots, "controlRight", {}, () => [
              s[3] || (s[3] = w(" → "))
            ])
          ], 10, r_)
        ]))
      ], 2), [
        [Js, i.controlsShown]
      ])
    ]),
    f("div", i_, [
      A(a, {
        ref: "table",
        class: "table-sticky__table table-sticky__table--actual",
        classes: e.classes,
        resolveClasses: i.resolveClasses,
        isActual: "",
        headerRows: r.headerRows,
        rows: r.currentRows,
        footerRows: r.currentFooterRows,
        rowColumns: i.rowColumns,
        caption: e.caption,
        idPrefix: e.idPrefix,
        getRowValue: e.getRowValue,
        getColumnTitle: e.getColumnTitle,
        onVnodeMounted: i.tableReady,
        onActualHeaderRemoved: i.headerRemoved,
        onActualHeaderAdded: i.headerAdded,
        onColumnSorted: i.applySort
      }, me({ _: 2 }, [
        R(t.$slots, (o, u) => ({
          name: u,
          fn: S((c) => [
            m(t.$slots, u, K(X(c)))
          ])
        }))
      ]), 1032, ["classes", "resolveClasses", "headerRows", "rows", "footerRows", "rowColumns", "caption", "idPrefix", "getRowValue", "getColumnTitle", "onVnodeMounted", "onActualHeaderRemoved", "onActualHeaderAdded", "onColumnSorted"])
    ], 512),
    e.firstColumnSticky ? (l(), b(a, {
      key: 0,
      ref: "firstColumn",
      class: "table-sticky__table table-sticky__table--first-column",
      classes: e.classes,
      resolveClasses: i.resolveClasses,
      caption: e.caption,
      headerRows: i.headerRowsFirst,
      columnWidth: i.firstColumnSize.width,
      rows: r.currentRows,
      footerRows: r.currentFooterRows,
      rowColumns: i.rowColumnsFirst,
      idPrefix: e.idPrefix,
      getRowValue: e.getRowValue,
      getColumnTitle: e.getColumnTitle,
      style: z({
        opacity: i.headerOpacityX,
        pointerEvents: i.headerVisibleX ? "auto" : "none"
      }),
      onColumnSorted: i.applySort
    }, me({ _: 2 }, [
      R(t.$slots, (o, u) => ({
        name: u,
        fn: S((c) => [
          m(t.$slots, u, K(X(c)))
        ])
      }))
    ]), 1032, ["classes", "resolveClasses", "caption", "headerRows", "columnWidth", "rows", "footerRows", "rowColumns", "idPrefix", "getRowValue", "getColumnTitle", "style", "onColumnSorted"])) : v("", !0)
  ], 2);
}
const bm = /* @__PURE__ */ g(Jh, [["render", a_]]);
export {
  im as $,
  M_ as A,
  P_ as B,
  hl as C,
  $_ as D,
  L_ as E,
  B_ as F,
  H_ as G,
  D_ as H,
  V_ as I,
  N_ as J,
  K_ as K,
  W_ as L,
  G_ as M,
  X_ as N,
  Y_ as O,
  Yi as P,
  yl as Q,
  J_ as R,
  Z_ as S,
  Q_ as T,
  ul as U,
  em as V,
  tm as W,
  sm as X,
  nm as Y,
  rm as Z,
  w_ as _,
  Ee as a,
  am as a0,
  om as a1,
  lm as a2,
  od as a3,
  ed as a4,
  cm as a5,
  um as a6,
  dm as a7,
  fm as a8,
  hm as a9,
  mm as aa,
  gm as ab,
  vm as ac,
  ym as ad,
  rf as ae,
  pm as af,
  bm as ag,
  vf as ah,
  xf as ai,
  Io as aj,
  ce as ak,
  wl as al,
  sl as am,
  m_ as an,
  g_ as ao,
  v_ as ap,
  Ke as aq,
  y_ as ar,
  Oo as as,
  p_ as b,
  b_ as c,
  S_ as d,
  k_ as e,
  Vo as f,
  Eo as g,
  C_ as h,
  __ as i,
  A_ as j,
  T_ as k,
  _e as l,
  R_ as m,
  I_ as n,
  O_ as o,
  x_ as p,
  Pl as q,
  _m as r,
  U_ as s,
  Il as t,
  q_ as u,
  E_ as v,
  j_ as w,
  z_ as x,
  Y as y,
  F_ as z
};
