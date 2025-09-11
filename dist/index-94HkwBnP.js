import { reactive as Ht, ref as I, computed as w, resolveDirective as Xn, createElementBlock as d, openBlock as u, Fragment as R, withDirectives as Oe, createElementVNode as h, unref as A, normalizeClass as m, renderSlot as g, createTextVNode as $, toDisplayString as b, withKeys as Yn, normalizeStyle as F, createCommentVNode as p, nextTick as qn, toRef as Fs, createBlock as _, Teleport as at, resolveDynamicComponent as P, mergeProps as ie, inject as ct, watchEffect as ut, defineAsyncComponent as Hs, markRaw as xe, toRefs as Ns, toValue as tt, resolveComponent as H, withModifiers as Ds, createVNode as z, useSlots as Ws, renderList as x, TransitionGroup as Gn, withCtx as S, onMounted as dt, onBeforeUnmount as Kn, watch as He, isRef as Xs, hasInjectionContext as Ys, getCurrentInstance as qs, onDeactivated as Gs, onActivated as Ks, onUnmounted as Zn, normalizeProps as Q, guardReactiveProps as ee, vModelText as Zs, vShow as Rt, createSlots as Ae } from "vue";
import { inline as Jn, offset as Qn, flip as es, shift as ts, arrow as ns, useFloating as ss, autoUpdate as os } from "@floating-ui/vue";
import { useRoute as is, useRouter as Js, RouterLink as ft } from "vue-router";
import { Tab as Qs, TabGroup as eo, TabList as to, TabPanel as no, TabPanels as so } from "@headlessui/vue";
import oo from "gsap";
import io from "fuse.js";
const un = {
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
    previous: "fas fa-chevron-right",
    dropdownExpand: "fas fa-caret-down"
  }
};
function Hf(e, n = {}) {
  const t = Ht({ ...un }), { iconsByType: s, ...o } = n || {};
  o && Object.assign(t, o);
  const i = {
    // Methods to interact with settings
    getSettings() {
      return t;
    },
    getDefaultSettings() {
      return { ...un };
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
  if (s)
    for (const [r, l] of Object.entries(s))
      i.setIcon(r, l);
  e.provide("uluCore", i), e.config.globalProperties.$uluCore = i;
}
const Qe = {
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
}, ge = {
  plugin: { ...Qe.plugin },
  popover: { ...Qe.popover },
  tooltip: { ...Qe.tooltip, ...Qe.popover }
}, Nt = I(!1), Dt = I(null);
function ro(e = {}) {
  return Object.assign(ge.popover, e.popover), Object.assign(ge.tooltip, e.tooltip), Object.assign(ge.plugin, e.plugin), ge;
}
function lo(e) {
  return Object.assign({}, ge.tooltip, e);
}
function ao(e) {
  Nt.value = !0, Dt.value = e;
}
function co() {
  Nt.value = !1, Dt.value = null;
}
const nt = /* @__PURE__ */ new WeakMap(), uo = {
  mounted(e, n) {
    dn(e, n);
  },
  beforeUpdate(e) {
    fn(e);
  },
  updated(e, n) {
    dn(e, n);
  },
  umounted(e) {
    fn(e);
  }
};
function dn(e, n) {
  const t = fo(e, n);
  if (!t) return;
  let s = null;
  const o = () => {
    s || (s = setTimeout(() => {
      ao(t), clearTimeout(s);
    }, t.delay));
  }, i = () => {
    s && (clearTimeout(s), s = null), co();
  };
  t.showEvents.forEach((r) => {
    e.addEventListener(r, o);
  }), t.hideEvents.forEach((r) => {
    e.addEventListener(r, i);
  }), nt.set(e, { onShow: o, onHide: i, config: t });
}
function fn(e) {
  if (!nt.has(e))
    return;
  const { config: n, onShow: t, onHide: s } = nt.get(e);
  n.showEvents.forEach((o) => {
    e.removeEventListener(o, t);
  }), n.hideEvents.forEach((o) => {
    e.removeEventListener(o, s);
  }), nt.delete(e);
}
function fo(e, n) {
  const { value: t } = n;
  let s;
  if (!(t === !1 || t === null))
    return typeof t == "object" ? s = t : s = { content: t }, lo(Object.assign({}, { trigger: e }, s));
}
let ho = 0;
function hn() {
  return `ulu-popovers-uid-${++ho}`;
}
const mo = ["id", "disabled", "aria-expanded", "aria-controls", "aria-label"], go = ["aria-labelledby", "id", "data-placement"], vo = { class: "popover__inner" }, yo = {
  key: 0,
  class: "popover__footer"
}, ht = {
  __name: "UluPopover",
  props: {
    triggerText: String,
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
      default: ({ isOpen: e, content: n }) => {
        e && n.focus({ preventScroll: !0 });
      }
    }
  },
  emits: ["toggle"],
  setup(e, { emit: n }) {
    const t = n, s = e, o = hn(), i = hn(), r = Object.assign({}, ge.popover, s.config), l = I(s.startOpen || !1), a = I(null), c = I(null), f = I(null), y = [
      ...r.inline ? [Jn()] : [],
      ...r.offset ? [Qn(r.offset)] : [],
      es(),
      ts(),
      ...r.arrow ? [ns({ element: f })] : []
    ], v = {
      placement: r.placement,
      whileElementsMounted: os,
      middleware: y
    }, {
      floatingStyles: k,
      placement: E,
      middlewareData: C,
      update: T,
      isPositioned: le
    } = ss(a, c, v), Ke = w(() => {
      const W = C.value?.arrow;
      return W ? {
        position: "absolute",
        left: W?.x != null ? `${W.x}px` : "",
        top: W?.y != null ? `${W.y}px` : ""
      } : null;
    });
    r.onReady && r.onReady({ update: T, isPositioned: le });
    const Me = () => {
      me(!l.value);
    }, me = (W) => {
      l.value = W;
      const Z = {
        trigger: A(a),
        content: A(c),
        isOpen: A(l)
      }, ke = { isOpen: Z.isOpen };
      qn(() => {
        l.value ? (T(), window.setTimeout(() => {
          Ze(), s.directFocus(Z), t("toggle", ke);
        }, 0)) : (Se(), s.directFocus(Z), t("toggle", ke));
      });
    };
    let ae;
    const Ze = () => {
      s.clickOutsideCloses && (ae && Se(), ae = (W) => {
        c.value.contains(W.target) || me(!1);
      }, document.addEventListener("click", ae));
    }, Se = () => {
      ae && (document.removeEventListener("click", ae), ae = null);
    }, ce = () => me(!1);
    return (W, Z) => {
      const ke = Xn("ulu-tooltip");
      return u(), d(R, null, [
        Oe((u(), d("button", {
          type: "button",
          ref_key: "trigger",
          ref: a,
          onClick: Me,
          id: A(i),
          disabled: e.disabled,
          class: m([
            { [e.activeClass]: l.value },
            e.classes.trigger
          ]),
          "aria-expanded": l.value ? "true" : "false",
          "aria-controls": A(o),
          "aria-label": e.triggerAlt
        }, [
          g(W.$slots, "trigger", {
            isOpen: l.value,
            toggle: Me,
            close: ce
          }, () => [
            $(b(e.triggerText), 1)
          ])
        ], 10, mo)), [
          [ke, e.tooltip ? e.tooltip : null]
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
          ref: c,
          "aria-labelledby": A(i),
          id: A(o),
          style: F(A(k)),
          "data-placement": A(E),
          onKeydown: Z[0] || (Z[0] = Yn((ln) => me(!1), ["esc"])),
          tabindex: "-1"
        }, [
          h("span", vo, [
            g(W.$slots, "default", {
              isOpen: l.value,
              toggle: Me,
              close: ce
            })
          ]),
          W.$slots.footer ? (u(), d("span", yo, [
            g(W.$slots, "footer", { close: ce })
          ])) : p("", !0),
          A(r).arrow ? (u(), d("span", {
            key: 1,
            class: "popover__arrow",
            ref_key: "contentArrow",
            ref: f,
            style: F(Ke.value),
            "data-ulu-popover-arrow": ""
          }, null, 4)) : p("", !0)
        ], 46, go)
      ], 64);
    };
  }
}, po = ["data-placement"], bo = ["innerHTML"], _o = {
  key: 1,
  class: "popover__inner"
}, wo = {
  __name: "UluTooltipPopover",
  props: {
    config: Object
  },
  setup(e) {
    const n = Fs(e.config.trigger), t = I(null), s = I(null), o = [
      ...e.config.inline ? [Jn()] : [],
      ...e.config.offset ? [Qn(e.config.offset)] : [],
      es(),
      ts(),
      ...e.config.arrow ? [ns({ element: s })] : []
    ], i = {
      placement: e.config.placement,
      whileElementsMounted: os,
      middleware: o
    }, {
      floatingStyles: r,
      placement: l,
      middlewareData: a,
      update: c,
      isPositioned: f
    } = ss(n, t, i), y = w(() => {
      const v = a.value?.arrow;
      return v ? {
        position: "absolute",
        left: v?.x != null ? `${v.x}px` : "",
        top: v?.y != null ? `${v.y}px` : ""
      } : null;
    });
    return e.config.onReady && e.config.onReady({ update: c, isPositioned: f }), (v, k) => (u(), d("span", {
      class: m(["popover popover--tooltip is-active", e.config.class]),
      ref_key: "content",
      ref: t,
      "aria-hidden": "true",
      "data-placement": A(l),
      style: F(A(r))
    }, [
      e.config.isHtml ? (u(), d("span", {
        key: 0,
        class: "popover__inner",
        innerHTML: e.config.content
      }, null, 8, bo)) : (u(), d("span", _o, b(e.config.content), 1)),
      e.config.arrow ? (u(), d("span", {
        key: 2,
        class: "popover__arrow",
        ref_key: "contentArrow",
        ref: s,
        style: F(y.value)
      }, null, 4)) : p("", !0)
    ], 14, po));
  }
}, So = {
  __name: "UluTooltipDisplay",
  setup(e) {
    return (n, t) => (u(), _(at, {
      to: A(ge).plugin.tooltipTeleportTo
    }, [
      A(Nt) ? (u(), _(wo, {
        key: 0,
        config: A(Dt)
      }, null, 8, ["config"])) : p("", !0)
    ], 8, ["to"]));
  }
};
function Nf(e, n = {}) {
  const t = ro(n);
  t.plugin.global && (e.directive(t.plugin.directiveName, uo), e.component("UluTooltipDisplay", So), e.component("UluPopover", ht));
}
const O = (e, n) => {
  const t = e.__vccOpts || e;
  for (const [s, o] of n)
    t[s] = o;
  return t;
}, ko = {
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
function $o(e, n, t, s, o, i) {
  return i.currentModal ? (u(), _(P(i.currentModal.component), ie({ key: 0 }, i.currentProps, {
    modelValue: o.open,
    "onUpdate:modelValue": n[0] || (n[0] = (r) => o.open = r),
    onVnodeMounted: i.modalMounted,
    onVnodeUnmounted: i.modalUnmounted
  }), null, 16, ["modelValue", "onVnodeMounted", "onVnodeUnmounted"])) : p("", !0);
}
const Co = /* @__PURE__ */ O(ko, [["render", $o]]);
function To() {
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
    icon: [String, Array, Object, Boolean],
    /**
     * Whether the icon should use flow inline
     */
    spaced: Boolean
  },
  setup(e) {
    const n = ct("uluCore"), t = I(null), { getIconProps: s, getClassesFromDefinition: o } = To();
    let i;
    const r = e, l = w(() => n.getSetting("fontAwesomeStatic")), a = w(() => n.getSetting("iconComponent")), c = w(() => n.getSetting("iconPropResolver")), f = w(() => {
      const { icon: C } = r;
      if (typeof C == "string" && C.startsWith("type:"))
        try {
          const T = C.substring(5);
          return n.getIcon(T);
        } catch (T) {
          return console.warn(T), null;
        }
      return C;
    }), y = w(() => !a.value || !f.value ? null : c.value(f.value)), v = w(() => s(f.value)), k = w(() => o(f.value)), E = w(() => ({
      "flow-inline": r.spaced
    }));
    return ut(async () => {
      if (!l.value && f.value) {
        if (t.value === null)
          if (i)
            t.value = xe(i.FontAwesomeIcon);
          else {
            const C = Hs(async () => {
              const T = await import("./index.es-HlG3u0J5.js");
              return i = T, T.FontAwesomeIcon;
            });
            t.value = xe(C);
          }
      } else
        t.value = null;
    }), (C, T) => a.value ? (u(), _(P(a.value), ie({ key: 0 }, y.value, { class: E.value }), null, 16, ["class"])) : !l.value && t.value && f.value ? (u(), _(P(t.value), ie({ key: 1 }, v.value, { class: E.value }), null, 16, ["class"])) : l.value && f.value ? (u(), d("span", {
      key: 2,
      class: m([k.value, E.value]),
      "aria-hidden": "true"
    }, null, 2)) : p("", !0);
  }
};
function Et(e) {
  const n = /* @__PURE__ */ new Set();
  if (!e)
    return n;
  if (typeof e == "string")
    e.split(" ").forEach((t) => {
      t && n.add(t);
    });
  else if (Array.isArray(e))
    e.forEach((t) => {
      Et(t).forEach((s) => n.add(s));
    });
  else if (typeof e == "object")
    for (const t in e)
      Object.prototype.hasOwnProperty.call(e, t) && e[t] && t && n.add(t);
  return n;
}
function he({ props: e, baseClass: n, internal: t = {} }) {
  const { modifiers: s } = Ns(e);
  return { resolvedModifiers: w(() => {
    const i = tt(n), r = Et(tt(s)), l = Et(tt(t));
    if (!i)
      return console.warn("useModifiers: Missing 'baseClass' argument, modifiers will not be applied."), "";
    const a = /* @__PURE__ */ new Set([...l, ...r]);
    return Array.from(a).map((c) => `${i}--${c}`);
  }) };
}
function rs() {
  return typeof window < "u" && typeof window.document < "u";
}
function Ao(e, n) {
  const t = e.getBoundingClientRect();
  return n.clientY < t.top || // above
  n.clientY > t.top + t.height || // below
  n.clientX < t.left || // left side
  n.clientX > t.left + t.width;
}
function Oo(e = document.body, n = window) {
  return n.innerWidth - e.clientWidth;
}
function xo({ preventShift: e = !1, container: n = document.body }) {
  const t = n.style.overflow, s = n.style.paddingRight;
  if (n.style.overflow = "hidden", e) {
    const o = Oo();
    if (o > 0) {
      const i = parseInt(s || "0px", 10);
      n.style.paddingRight = `${i + o}px`;
    }
  }
  return () => {
    n.style.overflow = t, n.style.paddingRight = s;
  };
}
function mt(e, n, t, s) {
  var o;
  return function() {
    var r = s || this, l = arguments, a = function() {
      o = null, t || e.apply(r, l);
    }, c = t && !o;
    clearTimeout(o), o = setTimeout(a, n), c && e.apply(r, l);
  };
}
rs() && (Eo(), jo());
const mn = {
  /**
   * Event is dispatched when DOM in the page has changed, triggers updates from
   * all modules listening for the change (init instances, etc)
   * - Is triggered by modules that were responsible for modifying the page
   */
  pageModified(e) {
    e.dispatchEvent(Be("pageModified"));
  },
  /**
   * Event called when page is resized
   */
  pageResized(e) {
    e.dispatchEvent(Be("pageResized"));
  },
  /**
   * Event dispatched before page print begins (teardown/restructure/hide things)
   */
  beforePrint(e) {
    e.dispatchEvent(Be("beforePrint"));
  },
  /**
   * Event dispatched after page print (cleanup)
   */
  afterPrint(e) {
    e.dispatchEvent(Be("afterPrint"));
  }
};
function jt(e, n) {
  mn[e] ? mn[e](n) : console.warn(`Unable to dispatch site event: ${e} in context:`, n);
}
function Ro(e) {
  return "ulu:" + e;
}
function Be(e, n = null, t = { bubbles: !0 }) {
  return new CustomEvent(Ro(e), { detail: n, ...t });
}
function Eo() {
  window.addEventListener("resize", mt(() => jt("pageResized", document), 250));
}
function jo() {
  window.addEventListener("beforeprint", () => {
    jt("beforePrint", document);
  }), window.addEventListener("afterprint", () => {
    jt("afterPrint", document);
  });
}
function Io(e) {
  return typeof e == "object" && e?.constructor?.name;
}
function zo(e, n, t) {
  const s = Io(n) || "Logger";
  console[e](s, ...t);
}
function Ce(e, ...n) {
}
function et(e, ...n) {
  zo("error", e, n);
}
class Wt {
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
  #s;
  #o;
  #t;
  #e;
  #i;
  #r;
  #n;
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
  constructor(n, t, s) {
    if (!t || !n) {
      et(this, "Missing required elements: control, container");
      return;
    }
    const o = Object.assign({}, Wt.defaults, s);
    this.options = o, this.container = n, this.control = t, this.debug = o.debug;
    const i = ["left", "right"], r = ["top", "bottom"], { fromX: l, fromY: a } = o;
    if (!i.includes(l) && l !== null) {
      et(this, `Invalid fromX: ${l} (left|right|null)`);
      return;
    }
    if (!r.includes(a) && a !== null) {
      et(this, `Invalid fromY: ${a} (top|bottom|null)`);
      return;
    }
    if (!l && !a) {
      et(this, "Invalid fromX/fromY, failed to setup resizer (at least one of fromX or fromY must be set)");
      return;
    }
    this.resizeHorizontal = o.fromX !== null, this.resizeVertical = o.fromY !== null, o.manageEvents && (this.#s = this.onPointerdown.bind(this), this.#o = this.onKeydown.bind(this), o.enablePointerResizing && t.addEventListener("pointerdown", this.#s), o.enableKeyboardResizing && t.addEventListener("keydown", this.#o)), this.#c(), o.manageAriaLabel && t.setAttribute("aria-label", this.getAriaLabel());
  }
  /**
   * Resets all internal state properties to their default/inactive values.
   * This centralizes state cleanup and initial setup.
   * @private
   */
  #c() {
    this.#t = null, this.#e = { width: 0, height: 0 }, this.#i = 0, this.#r = 0, this.#n = !1, this.#l = 0, this.#a = 0;
  }
  /**
   * Cleans up event listeners and internal state to prevent memory leaks.
   */
  destroy() {
    const { control: n, options: t } = this;
    t.manageEvents && (t.enablePointerResizing && n.removeEventListener("pointerdown", this.#s), t.enableKeyboardResizing && n.removeEventListener("keydown", this.#o)), this.#t && clearTimeout(this.#t), this.#c(), t.manageAriaLabel && n.removeAttribute("aria-label"), Ce(this, "Resizer destroyed.");
  }
  /**
   * Initiates a resize operation.
   * This sets initial dimensions and dispatches the 'resizer:start' event.
   * @param {Object} eventDetails Additional details about the initiating event.
   * @private
   */
  #u(n) {
    const { container: t, options: s } = this;
    if (this.#n) {
      s.overrideMaxDimensions && (this.resizeHorizontal && (t.style.maxWidth = "none"), this.resizeVertical && (t.style.maxHeight = "none"));
      return;
    }
    const i = document.defaultView.getComputedStyle(t);
    this.#e.width = parseInt(i.width, 10), this.#e.height = parseInt(i.height, 10), s.overrideMaxDimensions && (this.resizeHorizontal && (t.style.maxWidth = "none"), this.resizeVertical && (t.style.maxHeight = "none")), this.#n = !0, this.dispatchEvent("resizer:start", n), Ce(this, "Resize started.", {
      initialWidth: this.#e.width,
      initialHeight: this.#e.height,
      ...n
    });
  }
  /**
   * Ends a resize operation.
   * Dispatches 'resizer:end' event and resets internal state.
   * @private
   */
  #d() {
    this.#n && (this.dispatchEvent("resizer:end"), this.#c(), Ce(this, "Resize ended."));
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
  #f(n, t, s) {
    let o = this.#e.width, i = this.#e.height;
    const { fromX: r, fromY: l, multiplier: a } = this.options;
    this.resizeHorizontal && (r === "right" ? o = this.#e.width + n * a : r === "left" && (o = this.#e.width - n * a), this.container.style.width = `${Math.max(0, o)}px`), this.resizeVertical && (l === "bottom" ? i = this.#e.height + t * a : l === "top" && (i = this.#e.height - t * a), this.container.style.height = `${Math.max(0, i)}px`);
    const c = {
      newWidth: o,
      newHeight: i,
      totalDeltaX: n,
      totalDeltaY: t,
      event: s
    };
    this.dispatchEvent("resizer:update", c), Ce(this, "Resizing update.", c);
  }
  /**
   * Public handler for pointerdown events. Call this method from your own event listeners
   * if `manageEvents` is false. Its logic will only execute if `enablePointerResizing` is true.
   * @param {PointerEvent} e The pointerdown event.
   */
  onPointerdown(n) {
    if (!this.options.enablePointerResizing) {
      Ce(this, "Pointer resizing disabled. Ignoring pointerdown event.");
      return;
    }
    n.preventDefault();
    const t = document.documentElement;
    this.#l = n.clientX, this.#a = n.clientY, this.#u({
      inputType: "pointer",
      startX: n.clientX,
      startY: n.clientY,
      pointerId: n.pointerId
    }), this.control.setPointerCapture(n.pointerId);
    const s = (i) => {
      const r = i.clientX - this.#l, l = i.clientY - this.#a;
      this.#f(r, l, i);
    }, o = (i) => {
      t.removeEventListener("pointermove", s, !1), t.removeEventListener("pointerup", o, { capture: !0, once: !0 }), this.control.hasPointerCapture(i.pointerId) && this.control.releasePointerCapture(i.pointerId), this.#d();
    };
    t.addEventListener("pointermove", s, !1), t.addEventListener("pointerup", o, { capture: !0, once: !0 });
  }
  /**
   * Public handler for keydown events. Call this method from your own event listeners
   * if `manageEvents` is false. Its logic will only execute if `enableKeyboardResizing` is true.
   * @param {KeyboardEvent} e The keydown event.
   */
  onKeydown(n) {
    if (!this.options.enableKeyboardResizing) {
      Ce(this, "Keyboard resizing disabled. Ignoring keydown event.");
      return;
    }
    const { key: t } = n, { keyboardStep: s, keyboardDebounceTime: o } = this.options;
    let i = 0, r = 0, l = !1;
    this.resizeHorizontal && (t === "ArrowLeft" ? (i = -s, l = !0) : t === "ArrowRight" && (i = s, l = !0)), this.resizeVertical && (t === "ArrowUp" ? (r = -s, l = !0) : t === "ArrowDown" && (r = s, l = !0)), l && (n.preventDefault(), n.stopPropagation(), (!this.#n || this.#t === null) && this.#u({ inputType: "keyboard", keyboardKey: t }), this.#i += i, this.#r += r, this.#f(this.#i, this.#r, n), this.#t && clearTimeout(this.#t), this.#t = setTimeout(() => {
      this.#d(), this.#t = null;
    }, o));
  }
  /**
   * Generates an accessible label for the resize control based on its configuration.
   * This is a convenience function that can be used by the consumer if `manageAriaLabel` is false.
   * @returns {string} The suggested aria-label for the control.
   */
  getAriaLabel() {
    const { fromY: n, fromX: t } = this.options, s = [n, t].filter((o) => o);
    return s.length === 0 ? "Resize control" : `Resize from ${s.join(" ")} edge`;
  }
  /**
   * Dispatches a custom event on the container element.
   * @param {string} type The event type (e.g., "resizer:start", "resizer:update", "resizer:end").
   * @param {Object} [data={}] Optional data to attach to the event's detail property.
   */
  dispatchEvent(n, t = {}) {
    this.container.dispatchEvent(Be(n, t));
  }
}
let St = 0;
const Mo = {
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
    return ++St, {
      containerWidth: null,
      titleId: `ulu-modal-${St}-title`,
      bodyOverflowValue: null,
      bodyPaddingRightValue: null,
      isResizing: !1
    };
  },
  setup(e) {
    const n = Ws(), t = w(() => e.title || n.title), s = w(() => {
      const { allowResize: l, position: a } = e;
      if (!l || !a) return;
      const c = ["left", "right", "center"];
      return c.includes(a) ? !0 : (console.warn(`Passed invalid position for resize (${a}), use ${c.join(", ")}`), !1);
    }), o = w(() => e.position === "center" ? "type:resizeBoth" : "type:resizeHorizontal"), i = w(() => ({
      [e.position]: e.position,
      resize: e.allowResize,
      "no-resize": !e.allowResize,
      "no-header": !t.value,
      "body-fills": e.bodyFills,
      "no-backdrop": e.noBackdrop,
      "no-min-height": e.noMinHeight,
      "non-modal": e.nonModal,
      "resizer-active": s.value
    })), { resolvedModifiers: r } = he({
      props: e,
      baseClass: "modal",
      internal: i
    });
    return {
      resolvedModifiers: r,
      hasHeader: t,
      resizerEnabled: s,
      resizerIconType: o
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
        n === t && Ao(t, e) && this.close();
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
        e.newState === "open" ? this.restoreScroll = xo({ preventShift: n }) : this.destroyPreventScroll();
      }
    },
    setupResizer() {
      const { position: e, resizerEnabled: n } = this;
      if (n) {
        const { container: t, resizer: s } = this.$refs, o = e === "center" ? { fromX: "right", fromY: "bottom", multiplier: 2 } : { fromX: e === "right" ? "left" : "right" };
        this.resizerInstance = new Wt(t, s, o), this.handleResizerStart = () => {
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
    ++St, this.preventScroll && this.setupPreventScroll(), this.setupResizer();
  },
  beforeUnmount() {
    const { container: e } = this.$refs;
    e && e.open && e.close(), this.destroyPreventScroll(), this.destroyResizer();
  }
}, Uo = ["aria-labelledby", "aria-describedby"], Bo = ["id"], Po = { class: "modal__title-text" }, Lo = {
  key: 2,
  class: "modal__resizer",
  ref: "resizer",
  type: "button"
};
function Vo(e, n, t, s, o, i) {
  const r = H("UluIcon");
  return u(), _(at, {
    to: t.teleport === !1 ? null : t.teleport,
    disabled: t.teleport === !1
  }, [
    h("dialog", {
      class: m(["modal", [s.resolvedModifiers, t.classes.container]]),
      "aria-labelledby": i.resolvedLabelledby,
      "aria-describedby": t.describedby,
      ref: "container",
      style: F({ width: o.containerWidth }),
      onCancel: n[1] || (n[1] = Ds((...l) => i.close && i.close(...l), ["prevent"])),
      onClose: n[2] || (n[2] = (...l) => i.handleDialogCloseEvent && i.handleDialogCloseEvent(...l)),
      onClick: n[3] || (n[3] = (...l) => i.handleClick && i.handleClick(...l)),
      onToggle: n[4] || (n[4] = (...l) => i.handleToggle && i.handleToggle(...l))
    }, [
      s.hasHeader ? (u(), d("header", {
        key: 0,
        class: m(["modal__header", t.classes.header])
      }, [
        h("h2", {
          class: m(["modal__title", t.classes.title]),
          id: o.titleId
        }, [
          g(e.$slots, "title", { close: i.close }, () => [
            t.titleIcon ? (u(), _(r, {
              key: 0,
              class: "modal__title-icon",
              icon: t.titleIcon
            }, null, 8, ["icon"])) : p("", !0),
            h("span", Po, b(t.title), 1)
          ])
        ], 10, Bo),
        h("button", {
          class: "modal__close",
          "aria-label": "Close modal",
          onClick: n[0] || (n[0] = (...l) => i.close && i.close(...l)),
          autofocus: ""
        }, [
          g(e.$slots, "closeIcon", {}, () => [
            z(r, {
              class: "modal__close-icon",
              icon: t.closeIcon || "type:close"
            }, null, 8, ["icon"])
          ])
        ])
      ], 2)) : p("", !0),
      h("div", {
        class: m(["modal__body", t.classes.body])
      }, [
        g(e.$slots, "default", { close: i.close })
      ], 2),
      e.$slots.footer ? (u(), d("div", {
        key: 1,
        class: m(["site-modal__footer", t.classes.footer])
      }, [
        g(e.$slots, "footer", { close: i.close })
      ], 2)) : p("", !0),
      s.resizerEnabled ? (u(), d("button", Lo, [
        g(e.$slots, "resizerIcon", {}, () => [
          z(r, {
            class: "modal__resizer-icon",
            icon: t.resizerIcon || s.resizerIconType
          }, null, 8, ["icon"])
        ])
      ], 512)) : p("", !0)
    ], 46, Uo)
  ], 8, ["to", "disabled"]);
}
const ls = /* @__PURE__ */ O(Mo, [["render", Vo]]), Pe = [], Fo = I({
  /**
   * Holds active component options (including component, and options)
   */
  active: null,
  /**
   * Populated with any props passed to open method, bound to modal component
   */
  activeProps: null
}), Le = Fo.value, gn = {
  data: Le,
  modals: Pe
}, Ho = (e) => ({
  open(n, t = null) {
    const s = this.get(n);
    Le.active = xe(s), Le.activeProps = Object.assign({}, s.props, t);
  },
  /**
   * Close the active modal
   * @param {String|Node} focusTo The element or selector for an element to programmatically focus after modal close
   * @see https://www.deque.com/blog/accessible-routing-in-javascript-frameworks/
   */
  close() {
    Le.active = null, Le.activeProps = null;
  },
  /**
   * Get a modal's config object by name
   * @return {Object} Modal config object
   */
  get(n) {
    const t = Pe.find((s) => s.name === n);
    if (t)
      return t;
    throw new Error(`Unable to find modal named: ${n}`);
  },
  /**
   * Add a modal config
   */
  add(n) {
    const t = e(n);
    Pe.push(t);
  },
  /**
   * Removes a modal config by name
   * @return {Object} Modal that was removed
   */
  remove(n) {
    const t = Pe.findIndex((s) => s.name === n);
    if (t > -1)
      return Pe.splice(t, 1);
    warn("unable to find modal to remove");
  }
}), No = {
  componentNameDisplay: "UluModalsDisplay",
  componentNameModal: "UluModal",
  modals: [],
  modalOptions: {}
};
function Df(e, n) {
  const t = Object.assign({}, No, n), o = Ho((i) => Object.assign({}, t.modalOptions, i));
  e.component(t.componentNameDisplay, Co), e.component(t.componentNameModal, ls), t.modals.forEach((i) => {
    o.add(i);
  }), gn.options = t, e.config.globalProperties.$uluModals = o, e.provide("uluModals", o), e.config.globalProperties.$uluModalsState = gn;
}
const Do = {
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
    handleAction(e, n) {
      const { toast: t } = this;
      this.toast.close(), this.$nextTick(() => {
        n(e, t, n);
      });
    }
  }
}, Wo = ["onClick"];
function Xo(e, n, t, s, o, i) {
  const r = H("UluIcon");
  return u(), d("div", {
    class: m(["toast", [
      {
        "toast--persistent": !t.toast.duration
      },
      t.toast?.class
    ]])
  }, [
    t.toast.icon || e.$slots.icon ? (u(), d("div", {
      key: 0,
      class: m(["toast__icon", t.classes.icon])
    }, [
      g(e.$slots, "icon", { toast: t.toast }, () => [
        t.toast.icon ? (u(), _(r, {
          key: 0,
          icon: t.toast.icon
        }, null, 8, ["icon"])) : p("", !0)
      ])
    ], 2)) : p("", !0),
    h("div", {
      class: m(["toast__content", t.classes.content])
    }, [
      g(e.$slots, "content", { toast: t.toast }, () => [
        t.toast.title ? (u(), d("div", {
          key: 0,
          class: m(["toast__header", t.classes.header])
        }, [
          h("strong", {
            class: m(["toast__title", t.classes.title])
          }, b(t.toast.title), 3),
          t.toast.date ? (u(), d("span", {
            key: 0,
            class: m(["toast__date", t.classes.date])
          }, b(t.toast.date), 3)) : p("", !0)
        ], 2)) : p("", !0),
        t.toast.description ? (u(), d("div", {
          key: 1,
          class: m(["toast__body", t.classes.body])
        }, b(t.toast.description), 3)) : p("", !0)
      ])
    ], 2),
    t.toast.actions?.length ? (u(), d("div", {
      key: 1,
      class: m(["toast__actions", t.classes.actions])
    }, [
      (u(!0), d(R, null, x(t.toast.actions, (l, a) => (u(), d("button", {
        key: a,
        class: m(["toast__action", t.classes.action]),
        onClick: (c) => i.handleAction(c, l)
      }, b(l.label), 11, Wo))), 128))
    ], 2)) : p("", !0),
    h("button", {
      class: m(["toast__close", t.classes.closeButton]),
      onClick: n[0] || (n[0] = (...l) => t.toast.close && t.toast.close(...l))
    }, [
      z(r, { icon: "type:close" })
    ], 2)
  ], 2);
}
const as = /* @__PURE__ */ O(Do, [["render", Xo]]), vn = {
  toastOptions: {
    /**
     * Component used to render the toast in the display
     */
    component: xe(as),
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
}, { assign: kt } = Object;
let Yo = 0;
const de = Ht({
  toasts: [],
  /**
   * Saveable 
   */
  pluginOptions: vn.pluginOptions,
  toastOptions: vn.toastOptions,
  setToastOptions(e) {
    return this.toastOptions = kt({}, this.toastOptions, e), this.pluginOptions;
  },
  setPluginOptions(e) {
    return this.pluginOptions = kt({}, this.pluginOptions, e), this.pluginOptions;
  },
  createToast(e) {
    const n = `toast-${++Yo}`;
    return kt({}, this.toastOptions, e, {
      uid: n,
      close() {
        It.remove(n);
      }
    });
  }
}), It = {
  /**
   * 
   * @param {Object} options Toast options
   * @returns Toast object (to be used to remove)
   */
  add(e) {
    const n = de.createToast(e);
    return de.toasts.unshift(n), n.duration && setTimeout(() => {
      this.remove(n.uid);
    }, n.duration), n;
  },
  /**
   * 
   * @param {Object} toast Toast uid
   */
  remove(e) {
    const n = de.toasts.findIndex((t) => t.uid === e);
    n > -1 && de.toasts.splice(n, 1);
  },
  /**
   * Remove all toasts
   */
  removeAll() {
    de.toasts = [];
  }
}, qo = {
  name: "UluTooltipDisplay",
  data() {
    const { toasts: e, pluginOptions: n } = de;
    return { toasts: e, pluginOptions: n };
  },
  computed: {
    classes() {
      const { position: e } = this.pluginOptions;
      return e.map((t) => `toast-container--${t}`);
    }
  }
};
function Go(e, n, t, s, o, i) {
  return u(), _(at, {
    to: o.pluginOptions.teleportTo
  }, [
    z(Gn, {
      class: m(["toast-container", i.classes]),
      name: "toast-animation",
      tag: "div"
    }, {
      default: S(() => [
        (u(!0), d(R, null, x(o.toasts, (r) => (u(), _(P(r.component), {
          key: r.uid,
          toast: r
        }, null, 8, ["toast"]))), 128))
      ]),
      _: 1
    }, 8, ["class"])
  ], 8, ["to"]);
}
const Ko = /* @__PURE__ */ O(qo, [["render", Go]]);
function Wf(e, n = {}) {
  const t = de.setPluginOptions(n?.plugin);
  de.setToastOptions(n?.toast), e.component(t.componentName, as), e.component(t.componentNameDisplay, Ko), e.config.globalProperties.$uluToast = It, e.provide("uluToast", It);
}
const Zo = {
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
function Jo(e) {
  const n = Object.assign({}, Zo, e), t = I(null), s = I(n.initialValue), o = I(null);
  return (async () => {
    if (!rs()) return;
    await new Promise((f) => {
      document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", () => f()) : f();
    });
    const r = await import("./breakpoints-DfGETUy5.js"), { BreakpointManager: l } = r, a = xe(new l(n.plugin));
    t.value = xe(a);
    const c = () => {
      s.value = a.active, o.value = a.resizeDirection;
    };
    c(), n.onReady && n.onReady(a), a.onChange(c);
  })(), { breakpointManager: t, breakpointActive: s, breakpointDirection: o };
}
const Qo = {
  /**
   * Breakpoint for mobile down/max
   */
  breakpointMobile: "small",
  /**
   * Options to pass to useBreakpointManager()
   */
  managerOptions: {}
};
function Xf(e, n) {
  const t = I(!1), s = Object.assign({}, Qo, n), { breakpointMobile: o } = s, { onReady: i } = s.managerOptions, r = {
    onReady(y) {
      y.at(o).max({
        on() {
          t.value = !0;
        },
        off() {
          t.value = !1;
        }
      }), i && i(y);
    }
  }, l = Object.assign({}, s.managerOptions, r), {
    breakpointManager: a,
    breakpointActive: c,
    breakpointDirection: f
  } = Jo(l);
  e.provide("uluBreakpointActive", w(() => c.value)), e.provide("uluBreakpointDirection", w(() => f.value)), e.provide("uluBreakpointManager", w(() => a.value)), e.provide("uluIsMobile", w(() => t.value));
}
const zt = /* @__PURE__ */ new Set(), Y = /* @__PURE__ */ new WeakMap(), ye = /* @__PURE__ */ new WeakMap(), G = /* @__PURE__ */ new WeakMap(), Ne = /* @__PURE__ */ new WeakMap(), $t = /* @__PURE__ */ new WeakMap(), Ve = /* @__PURE__ */ new WeakMap(), ve = /* @__PURE__ */ new WeakMap(), fe = /* @__PURE__ */ new WeakMap(), Te = /* @__PURE__ */ new WeakSet();
let q, Xt = 0, Yt = 0;
const oe = "__aa_tgt", De = "__aa_del", it = "__aa_new", cs = (e) => {
  const n = si(e);
  n && n.forEach((t) => oi(t));
}, ei = (e) => {
  e.forEach((n) => {
    n.target === q && ti(), Y.has(n.target) && be(n.target);
  });
};
function us(e) {
  const n = e.getBoundingClientRect(), t = q?.clientWidth || 0, s = q?.clientHeight || 0;
  return n.bottom < 0 || n.top > s || n.right < 0 || n.left > t;
}
function qt(e) {
  const n = Ne.get(e);
  n?.disconnect();
  let t = Y.get(e), s = 0;
  const o = 5;
  t || (t = Re(e), Y.set(e, t));
  const { offsetWidth: i, offsetHeight: r } = q, a = [
    t.top - o,
    i - (t.left + o + t.width),
    r - (t.top + o + t.height),
    t.left - o
  ].map((f) => `${-1 * Math.floor(f)}px`).join(" "), c = new IntersectionObserver(() => {
    ++s > 1 && be(e);
  }, {
    root: q,
    threshold: 1,
    rootMargin: a
  });
  c.observe(e), Ne.set(e, c);
}
function be(e, n = !0) {
  clearTimeout(fe.get(e));
  const t = gt(e), s = n ? We(t) ? 500 : t.duration : 0;
  fe.set(e, setTimeout(async () => {
    const o = G.get(e);
    try {
      await o?.finished, Y.set(e, Re(e)), qt(e);
    } catch {
    }
  }, s));
}
function ti() {
  clearTimeout(fe.get(q)), fe.set(q, setTimeout(() => {
    zt.forEach((e) => st(e, (n) => ds(() => be(n))));
  }, 100));
}
function ni(e) {
  setTimeout(() => {
    Ve.set(e, setInterval(() => ds(be.bind(null, e)), 2e3));
  }, Math.round(2e3 * Math.random()));
}
function ds(e) {
  typeof requestIdleCallback == "function" ? requestIdleCallback(() => e()) : requestAnimationFrame(() => e());
}
let ne;
const fs = typeof window < "u" && "ResizeObserver" in window;
fs && (q = document.documentElement, new MutationObserver(cs), ne = new ResizeObserver(ei), window.addEventListener("scroll", () => {
  Yt = window.scrollY, Xt = window.scrollX;
}), ne.observe(q));
function si(e) {
  return e.reduce((s, o) => [
    ...s,
    ...Array.from(o.addedNodes),
    ...Array.from(o.removedNodes)
  ], []).every((s) => s.nodeName === "#comment") ? !1 : e.reduce((s, o) => {
    if (s === !1)
      return !1;
    if (o.target instanceof Element) {
      if (Ct(o.target), !s.has(o.target)) {
        s.add(o.target);
        for (let i = 0; i < o.target.children.length; i++) {
          const r = o.target.children.item(i);
          if (r) {
            if (De in r)
              return !1;
            Ct(o.target, r), s.add(r);
          }
        }
      }
      if (o.removedNodes.length)
        for (let i = 0; i < o.removedNodes.length; i++) {
          const r = o.removedNodes[i];
          if (De in r)
            return !1;
          r instanceof Element && (s.add(r), Ct(o.target, r), ye.set(r, [
            o.previousSibling,
            o.nextSibling
          ]));
        }
    }
    return s;
  }, /* @__PURE__ */ new Set());
}
function Ct(e, n) {
  !n && !(oe in e) ? Object.defineProperty(e, oe, { value: e }) : n && !(oe in n) && Object.defineProperty(n, oe, { value: e });
}
function oi(e) {
  var n, t;
  const s = e.isConnected, o = Y.has(e);
  s && ye.has(e) && ye.delete(e), ((n = G.get(e)) === null || n === void 0 ? void 0 : n.playState) !== "finished" && ((t = G.get(e)) === null || t === void 0 || t.cancel()), it in e ? yn(e) : o && s ? ri(e) : o && !s ? li(e) : yn(e);
}
function J(e) {
  return Number(e.replace(/[^0-9.\-]/g, ""));
}
function ii(e) {
  let n = e.parentElement;
  for (; n; ) {
    if (n.scrollLeft || n.scrollTop)
      return { x: n.scrollLeft, y: n.scrollTop };
    n = n.parentElement;
  }
  return { x: 0, y: 0 };
}
function Re(e) {
  const n = e.getBoundingClientRect(), { x: t, y: s } = ii(e);
  return {
    top: n.top + s,
    left: n.left + t,
    width: n.width,
    height: n.height
  };
}
function hs(e, n, t) {
  let s = n.width, o = n.height, i = t.width, r = t.height;
  const l = getComputedStyle(e);
  if (l.getPropertyValue("box-sizing") === "content-box") {
    const c = J(l.paddingTop) + J(l.paddingBottom) + J(l.borderTopWidth) + J(l.borderBottomWidth), f = J(l.paddingLeft) + J(l.paddingRight) + J(l.borderRightWidth) + J(l.borderLeftWidth);
    s -= f, i -= f, o -= c, r -= c;
  }
  return [s, i, o, r].map(Math.round);
}
function gt(e) {
  return oe in e && ve.has(e[oe]) ? ve.get(e[oe]) : { duration: 250, easing: "ease-in-out" };
}
function ms(e) {
  if (oe in e)
    return e[oe];
}
function Gt(e) {
  const n = ms(e);
  return n ? Te.has(n) : !1;
}
function st(e, ...n) {
  n.forEach((t) => t(e, ve.has(e)));
  for (let t = 0; t < e.children.length; t++) {
    const s = e.children.item(t);
    s && n.forEach((o) => o(s, ve.has(s)));
  }
}
function Kt(e) {
  return Array.isArray(e) ? e : [e];
}
function We(e) {
  return typeof e == "function";
}
function ri(e) {
  const n = Y.get(e), t = Re(e);
  if (!Gt(e))
    return Y.set(e, t);
  if (us(e)) {
    Y.set(e, t), qt(e);
    return;
  }
  let s;
  if (!n)
    return;
  const o = gt(e);
  if (typeof o != "function") {
    let i = n.left - t.left, r = n.top - t.top;
    const l = n.left + n.width - (t.left + t.width);
    n.top + n.height - (t.top + t.height) == 0 && (r = 0), l == 0 && (i = 0);
    const [c, f, y, v] = hs(e, n, t), k = {
      transform: `translate(${i}px, ${r}px)`
    }, E = {
      transform: "translate(0, 0)"
    };
    c !== f && (k.width = `${c}px`, E.width = `${f}px`), y !== v && (k.height = `${y}px`, E.height = `${v}px`), s = e.animate([k, E], {
      duration: o.duration,
      easing: o.easing
    });
  } else {
    const [i] = Kt(o(e, "remain", n, t));
    s = new Animation(i), s.play();
  }
  G.set(e, s), Y.set(e, t), s.addEventListener("finish", be.bind(null, e, !1), {
    once: !0
  });
}
function yn(e) {
  it in e && delete e[it];
  const n = Re(e);
  Y.set(e, n);
  const t = gt(e);
  if (!Gt(e))
    return;
  if (us(e)) {
    qt(e);
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
    const [o] = Kt(t(e, "add", n));
    s = new Animation(o), s.play();
  }
  G.set(e, s), s.addEventListener("finish", be.bind(null, e, !1), {
    once: !0
  });
}
function pn(e, n) {
  var t;
  e.remove(), Y.delete(e), ye.delete(e), G.delete(e), (t = Ne.get(e)) === null || t === void 0 || t.disconnect(), setTimeout(() => {
    if (De in e && delete e[De], Object.defineProperty(e, it, { value: !0, configurable: !0 }), n && e instanceof HTMLElement)
      for (const s in n)
        e.style[s] = "";
  }, 0);
}
function li(e) {
  var n;
  if (!ye.has(e) || !Y.has(e))
    return;
  const [t, s] = ye.get(e);
  Object.defineProperty(e, De, { value: !0, configurable: !0 });
  const o = window.scrollX, i = window.scrollY;
  if (s && s.parentNode && s.parentNode instanceof Element ? s.parentNode.insertBefore(e, s) : t && t.parentNode ? t.parentNode.appendChild(e) : (n = ms(e)) === null || n === void 0 || n.appendChild(e), !Gt(e))
    return pn(e);
  const [r, l, a, c] = ci(e), f = gt(e), y = Y.get(e);
  (o !== Xt || i !== Yt) && ai(e, o, i, f);
  let v, k = {
    position: "absolute",
    top: `${r}px`,
    left: `${l}px`,
    width: `${a}px`,
    height: `${c}px`,
    margin: "0",
    pointerEvents: "none",
    transformOrigin: "center",
    zIndex: "100"
  };
  if (!We(f))
    Object.assign(e.style, k), v = e.animate([
      {
        transform: "scale(1)",
        opacity: 1
      },
      {
        transform: "scale(.98)",
        opacity: 0
      }
    ], {
      duration: f.duration,
      easing: "ease-out"
    });
  else {
    const [E, C] = Kt(f(e, "remove", y));
    C?.styleReset !== !1 && (k = C?.styleReset || k, Object.assign(e.style, k)), v = new Animation(E), v.play();
  }
  G.set(e, v), v.addEventListener("finish", () => pn(e, k), {
    once: !0
  });
}
function ai(e, n, t, s) {
  const o = Xt - n, i = Yt - t, r = document.documentElement.style.scrollBehavior;
  if (getComputedStyle(q).scrollBehavior === "smooth" && (document.documentElement.style.scrollBehavior = "auto"), window.scrollTo(window.scrollX + o, window.scrollY + i), !e.parentElement)
    return;
  const a = e.parentElement;
  let c = a.clientHeight, f = a.clientWidth;
  const y = performance.now();
  function v() {
    requestAnimationFrame(() => {
      if (!We(s)) {
        const k = c - a.clientHeight, E = f - a.clientWidth;
        y + s.duration > performance.now() ? (window.scrollTo({
          left: window.scrollX - E,
          top: window.scrollY - k
        }), c = a.clientHeight, f = a.clientWidth, v()) : document.documentElement.style.scrollBehavior = r;
      }
    });
  }
  v();
}
function ci(e) {
  var n;
  const t = Y.get(e), [s, , o] = hs(e, t, Re(e));
  let i = e.parentElement;
  for (; i && (getComputedStyle(i).position === "static" || i instanceof HTMLBodyElement); )
    i = i.parentElement;
  i || (i = document.body);
  const r = getComputedStyle(i), l = !G.has(e) || ((n = G.get(e)) === null || n === void 0 ? void 0 : n.playState) === "finished" ? Re(i) : Y.get(i), a = Math.round(t.top - l.top) - J(r.borderTopWidth), c = Math.round(t.left - l.left) - J(r.borderLeftWidth);
  return [a, c, s, o];
}
function ui(e, n = {}) {
  if (fs && ne && !(window.matchMedia("(prefers-reduced-motion: reduce)").matches && !We(n) && !n.disrespectUserMotionPreference)) {
    Te.add(e), getComputedStyle(e).position === "static" && Object.assign(e.style, { position: "relative" }), st(e, be, ni, (r) => ne?.observe(r)), We(n) ? ve.set(e, n) : ve.set(e, {
      duration: 250,
      easing: "ease-in-out",
      ...n
    });
    const i = new MutationObserver(cs);
    i.observe(e, { childList: !0 }), $t.set(e, i), zt.add(e);
  }
  return Object.freeze({
    parent: e,
    enable: () => {
      Te.add(e);
    },
    disable: () => {
      Te.delete(e), st(e, (s) => {
        const o = G.get(s);
        try {
          o?.cancel();
        } catch {
        }
        G.delete(s);
        const i = fe.get(s);
        i && clearTimeout(i), fe.delete(s);
        const r = Ve.get(s);
        r && clearInterval(r), Ve.delete(s);
      });
    },
    isEnabled: () => Te.has(e),
    destroy: () => {
      Te.delete(e), zt.delete(e), ve.delete(e);
      const s = $t.get(e);
      s?.disconnect(), $t.delete(e), st(e, (o) => {
        ne?.unobserve(o);
        const i = G.get(o);
        try {
          i?.cancel();
        } catch {
        }
        G.delete(o);
        const r = Ne.get(o);
        r?.disconnect(), Ne.delete(o);
        const l = Ve.get(o);
        l && clearInterval(l), Ve.delete(o);
        const a = fe.get(o);
        a && clearTimeout(a), fe.delete(o), Y.delete(o), ye.delete(o);
      });
    }
  });
}
function di(e) {
  const n = I();
  let t;
  function s(o) {
    t && (o ? t.enable() : t.disable());
  }
  return dt(() => {
    ut((o) => {
      let i;
      n.value instanceof HTMLElement ? i = n.value : n.value && "$el" in n.value && n.value.$el instanceof HTMLElement && (i = n.value.$el), i && (t = ui(i, e || {}), o(() => {
        var r;
        (r = t?.destroy) === null || r === void 0 || r.call(t), t = void 0;
      }));
    });
  }), Kn(() => {
    var o;
    (o = t?.destroy) === null || o === void 0 || o.call(t), t = void 0;
  }), [n, s];
}
function fi(e) {
  if (e) {
    if (e instanceof HTMLElement)
      return e;
    if (typeof e == "object" && "$el" in e)
      return e.$el;
  }
}
let hi = 0;
function Mt(e = "ulu-id") {
  const n = `${e}-${++hi}`;
  return typeof document < "u" && document.getElementById(n) ? generateUid(e) : n;
}
const mi = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  newId: Mt,
  refToElement: fi
}, Symbol.toStringTag, { value: "Module" })), gi = ["id", "aria-controls", "aria-expanded"], vi = ["id", "aria-hidden", "aria-labelledby"], Ut = {
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
     * Classes for elements ({ container, toggle, content, contentInner })
     * - Any valid class binding value per element
     */
    classes: {
      type: Object,
      default: () => ({
        container: "ulu-collapsible",
        toggle: "ulu-collapsible__toggle",
        content: "ulu-collapsible__content",
        contentInner: "ulu-collapsible__content-inner",
        containerOpen: "ulu-collapsible--open",
        containerClosed: "ulu-collapsible--closed"
      })
    }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: n }) {
    const t = e, s = n, o = w(() => typeof t.animate == "object" ? t.animate : {}), [i, r] = di(o);
    dt(() => {
      r(!!t.animate);
    }), He(() => t.animate, (C) => {
      r(!!C);
    });
    const l = w(() => t.modelValue !== void 0), a = I(t.startOpen), c = w({
      get() {
        return l.value ? t.modelValue : a.value;
      },
      set(C) {
        l.value ? s("update:modelValue", C) : a.value = C;
      }
    }), f = I(Mt("ulu-collapsible-toggle")), y = I(Mt("ulu-collapsible-content")), v = w(() => {
      const C = t.classes, T = {};
      return C.containerOpen && c.value && (T[C.containerOpen] = !0), C.containerClosed && !c.value && (T[C.containerClosed] = !0), T;
    });
    function k() {
      c.value = !c.value;
    }
    function E() {
      t.closeOnEscape && c.value && (c.value = !1);
    }
    return (C, T) => (u(), d("div", {
      ref_key: "container",
      ref: i,
      onKeydown: Yn(E, ["esc"]),
      class: m([e.classes.container, v.value])
    }, [
      h("button", {
        class: m(e.classes.toggle),
        id: f.value,
        "aria-controls": y.value,
        "aria-expanded": c.value,
        onClick: k
      }, [
        g(C.$slots, "trigger", {
          isOpen: c.value,
          toggle: k
        }, () => [
          $(b(e.triggerText), 1)
        ])
      ], 10, gi),
      c.value ? (u(), d("div", {
        key: 0,
        class: m(e.classes.content),
        tabindex: "-1",
        id: y.value,
        "aria-hidden": !c.value,
        "aria-labelledby": f.value
      }, [
        h("div", {
          class: m(e.classes.contentInner)
        }, [
          g(C.$slots, "default", {
            isOpen: c.value,
            toggle: k
          })
        ], 2)
      ], 10, vi)) : p("", !0)
    ], 34));
  }
}, Yf = {
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
      default: !1
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
     * Classes for elements. See UluCollapsible for all available class keys (toggle, content, etc).
     * The 'icon' key is also available for the icon span.
     * - Any valid class binding value per element
     */
    classes: {
      type: Object,
      default: () => ({
        container: "accordion",
        toggle: "accordion__summary",
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
    const t = e, { resolvedModifiers: s } = he({ props: t, baseClass: "accordion" }), o = w(() => {
      const i = { ...t.classes };
      return i.container = [i.container, s.value], i;
    });
    return (i, r) => (u(), _(Ut, {
      "model-value": e.modelValue,
      "start-open": e.startOpen,
      "trigger-text": e.triggerText,
      classes: o.value,
      animate: e.animate,
      "onUpdate:modelValue": r[0] || (r[0] = (l) => i.$emit("update:modelValue", l))
    }, {
      trigger: S(({ isOpen: l, toggle: a }) => [
        g(i.$slots, "trigger", {
          open: l,
          toggle: a
        }, () => [
          (u(), _(P(e.triggerTextElement), null, {
            default: S(() => [
              $(b(e.triggerText), 1)
            ]),
            _: 1
          }))
        ]),
        g(i.$slots, "icon", { open: l }, () => [
          h("span", {
            class: m(["accordion__icon", e.classes.icon])
          }, [
            z(N, {
              icon: l ? "type:collapse" : "type:expand",
              style: { display: "inline" }
            }, null, 8, ["icon"])
          ], 2)
        ])
      ]),
      default: S(({ isOpen: l, toggle: a }) => [
        g(i.$slots, "default", {
          open: l,
          toggle: a
        })
      ]),
      _: 3
    }, 8, ["model-value", "start-open", "trigger-text", "classes", "animate"]));
  }
}, gs = {
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
    const n = e, { resolvedModifiers: t } = he({ props: n, baseClass: "tag" });
    return (s, o) => (u(), d("span", {
      class: m(["tag", [
        {
          "tag--counter": e.counter,
          [`tag--${e.size}`]: e.size,
          [`tag--${e.type}`]: e.type
        },
        A(t)
      ]])
    }, [
      e.icon ? (u(), _(N, {
        key: 0,
        icon: e.icon,
        spaced: ""
      }, null, 8, ["icon"])) : p("", !0),
      g(s.$slots, "default", {}, () => [
        h("span", null, b(e.text), 1)
      ])
    ], 2));
  }
}, yi = {
  name: "UluMenu",
  components: {
    UluIcon: N,
    UluTag: gs
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
function pi(e, n, t, s, o, i) {
  const r = H("UluIcon"), l = H("UluTag"), a = H("UluMenu", !0), c = Xn("ulu-tooltip");
  return t.items?.length ? (u(), d("ul", {
    key: 0,
    class: m(t.classes.list)
  }, [
    (u(!0), d(R, null, x(t.items, (f, y) => (u(), d("li", {
      key: y,
      class: m([
        t.classes.item,
        f?.classes?.item,
        f.separatorBefore ? t.classes.itemSeparatorBefore : "",
        f.separatorAfter ? t.classes.itemSeparatorAfter : ""
      ])
    }, [
      Oe((u(), _(P(f.to || f.path ? "router-link" : f.click ? "button" : "a"), ie({ ref_for: !0 }, {
        ...f.to || f.path ? { to: f.to || f.path } : {},
        ...f.href ? { href: f.href || "#" } : {}
      }, {
        onClick: (v) => {
          i.handleItemClick(v, f);
        },
        class: [t.classes.link, f?.classes?.link],
        activeClass: t.classes.linkActive,
        exactActiveClass: t.classes.linkExactActive,
        "aria-label": t.iconOnly ? f.title : null,
        id: f.id
      }), {
        default: S(() => [
          g(e.$slots, "default", {
            item: f,
            index: y
          }, () => [
            f.icon ? (u(), _(r, {
              key: 0,
              icon: f.icon,
              class: m([t.classes.linkIcon, f?.classes?.linkIcon])
            }, null, 8, ["icon", "class"])) : p("", !0),
            h("span", {
              class: m([t.classes.linkText, f?.classes?.linkText])
            }, b(f.title), 3),
            f.tag ? (u(), _(l, ie({
              key: 1,
              ref_for: !0
            }, f.tag), null, 16)) : p("", !0)
          ])
        ]),
        _: 2
      }, 1040, ["onClick", "class", "activeClass", "exactActiveClass", "aria-label", "id"])), [
        [c, t.iconOnly ? f.title : f.tooltip || null]
      ]),
      !t.noChildren && f?.children?.length ? (u(), _(a, {
        key: 0,
        iconOnly: t.iconOnly,
        classes: t.classes,
        items: f.children
      }, null, 8, ["iconOnly", "classes", "items"])) : p("", !0)
    ], 2))), 128))
  ], 2)) : p("", !0);
}
const vs = /* @__PURE__ */ O(yi, [["render", pi]]), bi = {
  name: "UluMenuStack",
  components: {
    UluMenu: vs
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
function _i(e, n, t, s, o, i) {
  const r = H("UluMenu");
  return u(), d("nav", {
    class: m(["menu-stack", {
      "menu-stack--hanging": t.hanging,
      "menu-stack--compact": t.compact
    }])
  }, [
    z(r, {
      items: t.items,
      classes: {
        list: "menu-stack__list",
        item: "menu-stack__item",
        link: "menu-stack__link",
        linkText: "menu-stack__link-text",
        linkIcon: "menu-stack__link-icon",
        itemSeparatorBefore: "menu-stack__item--separator-before",
        itemSeparatorAfter: "menu-stack__item--separator-after"
      },
      noChildren: t.noChildren
    }, null, 8, ["items", "noChildren"])
  ], 2);
}
const wi = /* @__PURE__ */ O(bi, [["render", _i]]), qf = {
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
    return (n, t) => (u(), _(ht, { classes: e.popoverClasses }, {
      trigger: S(({ isOpen: s }) => [
        g(n.$slots, "trigger", { isOpen: s }, () => [
          h("span", null, b(e.triggerText), 1),
          z(N, {
            class: "button__icon",
            icon: "type:dropdownExpand",
            style: F({ transform: s ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.2s" })
          }, null, 8, ["style"])
        ])
      ]),
      default: S(() => [
        z(wi, { items: e.items }, null, 8, ["items"])
      ]),
      _: 3
    }, 8, ["classes"]));
  }
}, Zt = I(!1), rt = {
  start: [],
  end: []
};
function Jt() {
  window.removeEventListener("resize", Jt), Zt.value = !0, rt.start.forEach((e) => e());
}
function Si() {
  Zt.value = !1, rt.end.forEach((e) => e()), window.addEventListener("resize", Jt);
}
window.addEventListener("resize", Jt), window.addEventListener("resize", mt(Si, 300));
function bn(e, n) {
  return e.push(n), () => {
    const t = e.findIndex((s) => s === n);
    t > -1 && e.splice(t);
  };
}
function ki() {
  return {
    resizing: Zt,
    onResizeStart(e) {
      return bn(rt.start, e);
    },
    onResizeEnd(e) {
      return bn(rt.end, e);
    }
  };
}
const $i = {
  uluCore: "Core",
  uluIsMobile: "Breakpoints",
  uluBreakpointActive: "Breakpoints",
  uluBreakpointDirection: "Breakpoints",
  uluBreakpointManager: "Breakpoints",
  uluModals: "Modals",
  uluToast: "Toast"
}, _n = {};
function Ci(e) {
  const n = ct(e, _n);
  if (n === _n) {
    const t = $i[e] || "", s = t ? ` from the '${t}' plugin` : "", o = t ? "Please install missing plugin." : "";
    throw new Error(`Required inject: '${e}'${s} was not provided. ${o}`);
  }
  return n;
}
function Gf(e, n) {
  const t = is(), s = Js(), o = w(() => {
    const c = parseInt(t.query.page || "1", 10);
    return isNaN(c) || c < 1 ? 1 : c;
  }), i = w(() => !e.value || e.value.length === 0 ? 1 : Math.ceil(e.value.length / n));
  He(i, (c) => {
    o.value > c && s.push({ query: { ...t.query, page: c } });
  });
  const r = w(() => {
    const c = (o.value - 1) * n, f = c + n;
    return e.value.slice(c, f);
  }), l = w(() => {
    if (i.value <= 1)
      return null;
    const c = {
      pages: {}
    }, f = o.value, y = i.value, v = 5, k = (T) => ({ query: { ...t.query, page: T } });
    f > 1 && (c.first = { href: k(1) }, c.previous = { href: k(f - 1) }), f < y && (c.next = { href: k(f + 1) }, c.last = { href: k(y) });
    let E, C;
    if (y <= v)
      E = 1, C = y;
    else {
      const T = Math.floor(v / 2), le = Math.ceil(v / 2) - 1;
      f <= T ? (E = 1, C = v) : f + le >= y ? (E = y - v + 1, C = y) : (E = f - T, C = f + le);
    }
    for (let T = E; T <= C; T++)
      c.pages[T] = { href: k(T) };
    return c;
  }), a = w(() => {
    const c = { previous: !1, next: !1 };
    if (!l.value || !l.value.pages) return c;
    const f = Object.keys(l.value.pages).map(Number);
    if (f.length === 0) return c;
    const y = Math.min(...f), v = Math.max(...f);
    return y > 1 && (c.previous = !0), v < i.value && (c.next = !0), c;
  });
  return {
    currentPage: o,
    totalPages: i,
    paginatedItems: r,
    pagerItems: l,
    pagerEllipses: a
  };
}
function Bt(e, n, t) {
  typeof e === "function" && (!t || t !== "titleTemplate" && !(t[0] === "o" && t[1] === "n")) && (e = e());
  let o;
  if (n && (o = n(t, e)), Array.isArray(o))
    return o.map((i) => Bt(i, n));
  if (o?.constructor === Object) {
    const i = {};
    for (const r of Object.keys(o))
      i[r] = Bt(o[r], n, r);
    return i;
  }
  return o;
}
const Ti = (e, n) => Xs(n) ? tt(n) : n, Ai = "usehead";
function Oi() {
  if (Ys()) {
    const e = ct(Ai);
    if (!e)
      throw new Error("useHead() was called without provide context, ensure you call it through the setup() function.");
    return e;
  }
  throw new Error("useHead() was called without provide context, ensure you call it through the setup() function.");
}
function xi(e, n = {}) {
  const t = n.head || Oi();
  return t.ssr ? t.push(e || {}, n) : Ri(t, e, n);
}
function Ri(e, n, t = {}) {
  const s = I(!1);
  let o;
  return ut(() => {
    const r = s.value ? {} : Bt(n, Ti);
    o ? o.patch(r) : o = e.push(r, t);
  }), qs() && (Kn(() => {
    o.dispose();
  }), Gs(() => {
    s.value = !0;
  }), Ks(() => {
    s.value = !1;
  })), o;
}
function vt(e, n) {
  let s = (e?.meta || {}).title;
  return typeof s == "function" && (s = s(n || e)), s;
}
function Ei(e, n) {
  const s = Object.assign({}, {
    qualifier(r, l) {
      return l ? en(r) : ys(r);
    },
    sort: nn,
    item: {},
    includeChildren: !1
  }, n), o = (r, l) => l ? `${l}/${r.path}` : r.path, i = (r, l = null) => r.filter((a) => s.qualifier(a, l)).map((a) => {
    const c = a.children ? Qt(a.children) : a, f = a.children ? a.children.filter((v) => v.path !== "") : !1, y = yt(c, o(a, l), s.item);
    return s.includeChildren && f.length && (y.children = i(f, y.path)), y;
  }).sort(s.sort);
  return i(e);
}
function ji(e) {
  function n(t) {
    const s = [];
    for (const o of t) {
      const i = { ...o };
      delete i.children, s.push(i), o.children && s.push(...n(o.children));
    }
    return s;
  }
  return n(e);
}
function Ii(e, n, t) {
  const o = Object.assign({}, {
    includeIndex: !1,
    item: {},
    sort: nn
  }, t), i = e.find((c) => c.path !== "/" && n.includes(c.path)), r = (c, f, y) => {
    if (c.children) {
      const v = c.children.find((k) => k.path.includes(n));
      if (v)
        return r(v, c, y + v.path);
    }
    return { route: f, path: y };
  }, { route: l, path: a } = r(i, i, i.path);
  return l.children ? l.children.filter(bs(o.includeIndex)).map((c) => yt(c, `${a}/${c.path}`, o.item)).sort(o.sort) : (console.warn("Unable to build menu for:", n), []);
}
function Qt(e) {
  return e.find((n) => n.path === "");
}
function yt(e, n = e.path, t) {
  const o = Object.assign({}, {
    indexMeta: !0,
    modify: null
  }, t);
  let i = Object.assign({}, e.meta);
  o.indexMeta && e.children && (i = Object.assign({}, i, Qt(e.children)?.meta));
  const r = { ...e, meta: i }, l = {
    path: n,
    title: vt(r, e) || "Missing Title",
    weight: i?.weight || 0,
    meta: i
  };
  return o.modify && o.modify(l, e), l;
}
function en(e) {
  return !e.path.includes("/:");
}
function ys(e) {
  const n = e.path.match(/\//g) || [];
  return en(e) && n.length === 1;
}
function zi(e, n) {
  const { target: t } = n, s = t.closest("a");
  if (s) {
    let o = s.getAttribute("href");
    o.startsWith("/") && (e.push(o), n.preventDefault());
  }
}
function ps(e, n = tn(e)) {
  return n?.children;
}
function tn(e, n) {
  const t = e.matched.length, s = t - 2;
  return n ? t > 1 ? e.matched[0] : null : s < 0 ? null : e.matched[s];
}
function bs(e) {
  return (n) => e || n.path !== "";
}
function nn(e, n) {
  return e?.weight - n?.weight;
}
function Mi(e, n) {
  const s = Object.assign({}, {
    parent: null,
    includeIndex: !1,
    item: {},
    sort: nn
  }, n), o = s.parent || tn(e);
  return (ps(e, o) || []).filter(bs(s.includeIndex)).map((r) => yt(r, `${o.path}/${r.path}`, s.item)).sort(s.sort);
}
function Ui(e) {
  const { matched: n, path: t } = e;
  let s;
  return n.reduce((i, r, l) => {
    if (r.meta?.breadcrumb === !1 || r.path === s)
      return i;
    const a = l === n.length - 1, c = vt(r, e) || "Missing Title";
    return i.push({
      title: c,
      to: { path: a ? t : r.path },
      current: a
    }), s = r.path, i;
  }, []);
}
const Bi = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  $createBreadcrumb: Ui,
  $createSectionMenu: Mi,
  $getParentRoute: tn,
  $getRouteChildren: ps,
  createBaseMenu: Ei,
  createMenuItem: yt,
  createSectionMenu: Ii,
  flattenMenu: ji,
  getChildIndexRoute: Qt,
  getRouteTitle: vt,
  isStaticBaseRoute: ys,
  isStaticRoute: en,
  nativeLinkRouter: zi
}, Symbol.toStringTag, { value: "Module" })), Tt = Ht({});
function Kf(e = {}) {
  const {
    title: n,
    titleTemplate: t = "%s",
    useRoute: s = is,
    useHead: o = xi
  } = e, i = s(), r = i.path;
  if (n !== void 0) {
    ut(() => {
      Tt[r] = A(n);
    }), Zn(() => {
      delete Tt[r];
    });
    return;
  }
  const l = w(() => {
    const a = Tt[i.path], c = vt(i, i), f = a || c;
    return f ? t.replace("%s", f) : "App";
  });
  o({
    title: l
  });
}
const Pi = { class: "layout-flex-baseline" }, Li = { class: "type-word-break" }, Zf = {
  __name: "UluOverflowPopover",
  props: {
    /**
     * Default icon for overflow popover trigger
     */
    triggerIcon: String
  },
  setup(e) {
    const { resizing: n, onResizeEnd: t } = ki(), s = I(null), o = I(!1), i = () => {
      qn(() => {
        const l = s.value;
        o.value = l.offsetWidth < l.scrollWidth;
      });
    }, r = t(i);
    return dt(i), Zn(r), (l, a) => (u(), d("div", Pi, [
      h("div", {
        class: "type-truncate",
        ref_key: "text",
        ref: s
      }, [
        g(l.$slots, "default")
      ], 512),
      o.value && !A(n) ? (u(), _(ht, {
        key: 0,
        triggerAlt: "Show Full Text",
        size: "large"
      }, {
        trigger: S(() => [
          z(N, {
            icon: e.triggerIcon || "type:ellipsis"
          }, null, 8, ["icon"])
        ]),
        default: S(() => [
          h("div", Li, [
            g(l.$slots, "default")
          ])
        ]),
        _: 3
      })) : p("", !0)
    ]));
  }
}, Jf = {
  __name: "UluTab",
  setup(e) {
    return (n, t) => (u(), _(A(Qs), null, {
      default: S((s) => [
        g(n.$slots, "default", Q(ee(s)))
      ]),
      _: 3
    }));
  }
}, Qf = /* @__PURE__ */ Object.assign({
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
    return (n, t) => (u(), _(A(eo), {
      defaultIndex: e.defaultIndex,
      vertical: e.vertical
    }, {
      default: S((s) => [
        h("div", {
          class: m(["tabs", {
            "tabs--vertical": e.vertical
          }])
        }, [
          g(n.$slots, "default", Q(ee(s)))
        ], 2)
      ]),
      _: 3
    }, 8, ["defaultIndex", "vertical"]));
  }
}), eh = {
  __name: "UluTabList",
  setup(e) {
    return (n, t) => (u(), _(A(to), { class: "tabs__tablist" }, {
      default: S(() => [
        g(n.$slots, "default")
      ]),
      _: 3
    }));
  }
}, th = {
  __name: "UluTabPanel",
  setup(e) {
    return (n, t) => (u(), _(A(no), null, {
      default: S((s) => [
        g(n.$slots, "default", Q(ee(s)))
      ]),
      _: 3
    }));
  }
}, nh = {
  __name: "UluTabPanels",
  setup(e) {
    return (n, t) => (u(), _(A(so), null, {
      default: S((s) => [
        g(n.$slots, "default", Q(ee(s)))
      ]),
      _: 3
    }));
  }
}, Vi = {
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
    const { resolvedModifiers: n } = he({ props: e, baseClass: "button" });
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
      return this.to ? ft : this.href ? "a" : "button";
    },
    attrs() {
      const { to: e, href: n, download: t, target: s } = this, o = e ? { to: e } : n ? { href: n } : {};
      return n && (s && (o.target = s), t && (o.download = typeof t == "string" ? t : !0)), o;
    }
  }
}, Fi = { key: 1 };
function Hi(e, n, t, s, o, i) {
  const r = H("UluIcon");
  return u(), _(P(i.element), ie({
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
      i.classes,
      s.resolvedModifiers
    ]]
  }, i.attrs, { "aria-label": i.resolvedAriaLabel }), {
    default: S(() => [
      g(e.$slots, "before"),
      t.icon && (t.iconBefore || t.iconOnly) ? (u(), _(r, {
        key: 0,
        icon: t.icon,
        class: "button__icon"
      }, null, 8, ["icon"])) : p("", !0),
      (e.$slots.default || t.text) && !t.iconOnly ? (u(), d("span", Fi, [
        g(e.$slots, "default", {}, () => [
          $(b(t.text), 1)
        ])
      ])) : p("", !0),
      t.icon && !t.iconBefore && !t.iconOnly ? (u(), _(r, {
        key: 2,
        icon: t.icon,
        class: "button__icon"
      }, null, 8, ["icon"])) : p("", !0),
      g(e.$slots, "after")
    ]),
    _: 3
  }, 16, ["class", "aria-label"]);
}
const Ni = /* @__PURE__ */ O(Vi, [["render", Hi]]), Di = {
  name: "UluAlert",
  components: {
    UluButton: Ni,
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
    const { resolvedModifiers: n } = he({
      props: e,
      baseClass: "callout",
      internal: w(() => ({
        [e.type]: e.type,
        compact: e.compact
      }))
    });
    return { resolvedModifiers: n };
  }
}, Wi = { class: "layout-flex" }, Xi = { class: "type-small" }, Yi = {
  key: 0,
  class: "margin-left-auto align-self-center"
};
function qi(e, n, t, s, o, i) {
  const r = H("UluIcon");
  return u(), d("div", {
    class: m(["callout", s.resolvedModifiers])
  }, [
    h("div", Wi, [
      z(r, {
        class: m(["type-large margin-right-small", `color-${t.type}`]),
        icon: t.icon || `type:${t.type}`
      }, null, 8, ["class", "icon"]),
      h("div", Xi, [
        h("div", null, [
          g(e.$slots, "title", {}, () => [
            h("strong", null, b(t.title), 1)
          ])
        ]),
        h("div", null, [
          g(e.$slots, "description", {}, () => [
            $(b(t.description), 1)
          ])
        ])
      ]),
      e.$slots.action ? (u(), d("div", Yi, [
        g(e.$slots, "action")
      ])) : p("", !0)
    ])
  ], 2);
}
const sh = /* @__PURE__ */ O(Di, [["render", qi]]), Gi = ["aria-hidden"], Ki = {
  key: 2,
  class: "hidden-visually"
}, Zi = {
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
      const { click: o, to: i, href: r } = n;
      return o ? "button" : i ? ft : r ? "a" : "span";
    });
    return (o, i) => (u(), _(P(s.value), {
      class: m(["badge", [
        e.size ? `badge--${e.size}` : null,
        e.type ? `badge--${e.type}` : null,
        { "badge--clickable": t.value }
      ]]),
      to: e.to,
      href: e.href,
      onClick: e.click
    }, {
      default: S(() => [
        h("span", {
          class: m(["badge__inner", { "skeleton__background-color": e.skeleton }])
        }, [
          e.text ? (u(), d("span", {
            key: 0,
            "aria-hidden": e.alt ? "true" : null
          }, b(e.text), 9, Gi)) : g(o.$slots, "default", { key: 1 }),
          e.alt ? (u(), d("span", Ki, b(e.alt), 1)) : p("", !0)
        ], 2)
      ]),
      _: 3
    }, 8, ["class", "to", "href", "onClick"]));
  }
}, Ji = { class: "badge-stack" }, oh = {
  __name: "UluBadgeStack",
  props: {
    /**
     * Array of props for each badge
     */
    items: Array
  },
  setup(e) {
    return (n, t) => (u(), d("ul", Ji, [
      (u(!0), d(R, null, x(e.items, (s, o) => (u(), d("li", {
        class: "badge-stack__item",
        key: o
      }, [
        z(Zi, ie({ ref_for: !0 }, s), null, 16)
      ]))), 128))
    ]));
  }
}, Qi = {
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
    const { resolvedModifiers: n } = he({ props: e, baseClass: "button-verbose" });
    return { resolvedModifiers: n };
  },
  computed: {
    element() {
      return this.to ? ft : this.href ? "a" : "button";
    },
    attrs() {
      const { to: e, href: n, download: t, target: s } = this, o = e ? { to: e } : n ? { href: n } : {};
      return n && (s && (o.target = s), t && (o.download = typeof t == "string" ? t : !0)), o;
    }
  }
}, er = {
  key: 1,
  class: "button-verbose__body"
};
function tr(e, n, t, s, o, i) {
  const r = H("UluIcon");
  return u(), _(P(i.element), ie({
    class: ["button-verbose", [
      {
        "button-verbose--inline": t.inline,
        "button-verbose--full-width": t.fullWidth
      },
      s.resolvedModifiers
    ]]
  }, i.attrs), {
    default: S(() => [
      e.$slots.title || t.title ? (u(), _(P(t.titleElement), {
        key: 0,
        class: "button-verbose__title"
      }, {
        default: S(() => [
          g(e.$slots, "title", {}, () => [
            $(b(t.title), 1)
          ])
        ]),
        _: 3
      })) : p("", !0),
      e.$slots.default || t.body ? (u(), d("span", er, [
        g(e.$slots, "default", {}, () => [
          $(b(t.body), 1)
        ])
      ])) : p("", !0),
      t.icon ? (u(), _(r, {
        key: 2,
        icon: t.icon,
        class: "button-verbose__icon",
        "aria-hidden": "true"
      }, null, 8, ["icon"])) : p("", !0)
    ]),
    _: 3
  }, 16, ["class"]);
}
const ih = /* @__PURE__ */ O(Qi, [["render", tr]]), nr = {
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
    const { resolvedModifiers: n } = he({ props: e, baseClass: "callout" });
    return { resolvedModifiers: n };
  }
};
function sr(e, n, t, s, o, i) {
  return u(), d("div", {
    class: m(["callout", [s.resolvedModifiers, { "full-height": t.fullHeight }]])
  }, [
    g(e.$slots, "default")
  ], 2);
}
const rh = /* @__PURE__ */ O(nr, [["render", sr]]), wn = (e, n) => {
  const t = !(n.to || n.href);
  return t || console.warn("'titleHref' and 'titleTo' can't be used with to or href (nesting links)"), t;
}, or = {
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
      validator: wn
    },
    /**
     * Will make title a link to href
     */
    titleHref: {
      type: String,
      validator: wn
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
    const { proxyClickOptions: e, proxyClick: n, titleHref: t, titleTo: s } = this;
    return {
      proxyClickEnabled: n && (t || s) || null,
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
    const { resolvedModifiers: n } = he({ props: e, baseClass: "card" });
    return { resolvedModifiers: n };
  },
  computed: {
    resolvedElement() {
      const { cardElement: e, to: n, href: t } = this;
      return n ? ft : t ? "a" : e;
    }
  },
  methods: {
    onMousedown({ target: e, timeStamp: n }) {
      if (!this.proxyClickEnabled) return;
      const { resolvedProxyOptions: t } = this, { selectorPrevent: s } = t;
      this.shouldProxy = !1, e.matches(s) || (this.shouldProxy = !0, this.proxyStart = n);
    },
    onMouseup({ timeStamp: e }) {
      if (!this.proxyClickEnabled) return;
      const { link: n } = this.$refs, { resolvedProxyOptions: t } = this, { mousedownDurationPrevent: s } = t;
      this.shouldProxy && e - this.proxyStart < s && n.click();
    }
  }
}, ir = { class: "card__body" }, rr = { class: "card__main" }, lr = ["href", "target"], ar = {
  key: 0,
  class: "card__aside"
}, cr = ["src", "alt"], ur = {
  key: 1,
  class: "card__footer"
};
function dr(e, n, t, s, o, i) {
  const r = H("router-link");
  return u(), _(P(i.resolvedElement), {
    class: m(["card", [
      {
        "card--horizontal": t.horizontal || t.horizontalCenter,
        "card--horizontal-center": t.horizontalCenter,
        "card--overlay": t.overlay
      },
      s.resolvedModifiers
    ]]),
    onMousedown: i.onMousedown,
    onMouseup: i.onMouseup,
    style: F({ cursor: o.cursorStyle }),
    target: t.target,
    to: t.to,
    href: t.href,
    "data-ulu-proxy-click-init": o.proxyClickEnabled
  }, {
    default: S(() => [
      h("div", ir, [
        h("div", rr, [
          (u(), _(P(t.titleElement), {
            class: m(["card__title", t.classes.title])
          }, {
            default: S(() => [
              t.titleTo ? (u(), _(r, {
                key: 0,
                class: "card__title-link",
                to: t.titleTo,
                ref: "link"
              }, {
                default: S(() => [
                  g(e.$slots, "title", {}, () => [
                    $(b(t.title), 1)
                  ])
                ]),
                _: 3
              }, 8, ["to"])) : t.titleHref ? (u(), d("a", {
                key: 1,
                class: "card__title-link",
                href: t.titleHref,
                target: t.titleTarget,
                ref: "link"
              }, [
                g(e.$slots, "title", {}, () => [
                  $(b(t.title), 1)
                ])
              ], 8, lr)) : g(e.$slots, "title", { key: 2 }, () => [
                $(b(t.title), 1)
              ])
            ]),
            _: 3
          }, 8, ["class"])),
          g(e.$slots, "body")
        ]),
        e.$slots.aside ? (u(), d("div", ar, [
          g(e.$slots, "aside")
        ])) : p("", !0)
      ]),
      e.$slots.image || t.imageSrc ? (u(), d("div", {
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
          }, null, 8, cr)
        ])
      ], 2)) : p("", !0),
      e.$slots.footer ? (u(), d("div", ur, [
        g(e.$slots, "footer")
      ])) : p("", !0)
    ]),
    _: 3
  }, 40, ["onMousedown", "onMouseup", "class", "style", "target", "to", "href", "data-ulu-proxy-click-init"]);
}
const lh = /* @__PURE__ */ O(or, [["render", dr]]), ah = {
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
    return (n, t) => (u(), d("dl", {
      class: m(e.classes.list)
    }, [
      (u(!0), d(R, null, x(e.items, (s, o) => (u(), d("div", {
        key: o,
        class: m(e.classes.item)
      }, [
        h("dt", {
          class: m(e.classes.term)
        }, [
          g(n.$slots, "term", {
            item: s,
            index: o
          }, () => [
            $(b(s.term), 1)
          ])
        ], 2),
        h("dd", {
          class: m(e.classes.description)
        }, [
          g(n.$slots, "description", {
            item: s,
            index: o
          }, () => [
            $(b(s.description), 1)
          ])
        ], 2)
      ], 2))), 128))
    ], 2));
  }
}, fr = ["href", "target"], hr = { class: "external-link__text" }, ch = {
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
    return (n, t) => (u(), d("a", {
      class: "external-link",
      href: e.href,
      target: e.target
    }, [
      h("span", hr, [
        g(n.$slots, "default", {}, () => [
          $(b(e.text), 1)
        ])
      ]),
      z(N, {
        class: "external-link__icon margin-left-small-x display-inline",
        icon: e.icon || "type:externalLink"
      }, null, 8, ["icon"])
    ], 8, fr));
  }
}, uh = {
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
    const n = e, t = w(() => n.ordered || n.forceOrdered ? "ol" : "ul");
    return (s, o) => (u(), _(P(t.value), {
      class: m([
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
      default: S(() => [
        (u(!0), d(R, null, x(e.items, (i, r) => (u(), d("li", {
          key: r,
          class: m(e.classes.listItem)
        }, [
          g(s.$slots, "default", {
            item: i,
            index: r
          }, () => [
            $(b(i), 1)
          ])
        ], 2))), 128))
      ]),
      _: 3
    }, 8, ["class", "style", "reversed", "start"]));
  }
}, mr = {}, gr = { id: "main-content" };
function vr(e, n) {
  return u(), d("main", gr, [
    g(e.$slots, "default")
  ]);
}
const dh = /* @__PURE__ */ O(mr, [["render", vr]]), yr = { class: "spoke-spinner__spinner" }, fh = {
  __name: "UluSpokeSpinner",
  props: {
    /**
     * Type modifier for spinner (ie match scss style name)
     */
    type: String
  },
  setup(e) {
    return (n, t) => (u(), d("div", {
      class: m(["spoke-spinner", { [`spoke-spinner--${e.type}`]: e.type }])
    }, [
      h("div", yr, [
        (u(), d(R, null, x(12, (s) => h("div", { key: s })), 64))
      ])
    ], 2));
  }
}, pr = ["role", "aria-labelledby"], br = ["id"], _r = { class: "menu-stack__list" }, wr = { class: "menu-stack__selectable" }, Sr = ["type", "id", "name", "value", "checked", "onChange"], kr = ["for"], _s = {
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
    const t = e, s = n, o = w(() => t.legend ? t.legend.toLowerCase().replace(/\s+/g, "-") : `menu-${Math.random().toString(36).substring(7)}`), i = w(() => o.value ? `${o.value}-legend` : null), r = w(() => t.type === "radio" ? "radiogroup" : "group"), l = (f) => `${o.value}-${f.uid}`, a = (f) => t.type === "radio" ? t.modelValue === f.uid : Array.isArray(t.modelValue) ? t.modelValue.includes(f.uid) : t.type === "checkbox" && f.checked || !1, c = (f, y) => {
      if (t.type === "radio")
        s("update:modelValue", f.uid);
      else if (Array.isArray(t.modelValue)) {
        const v = [...t.modelValue], k = v.indexOf(f.uid);
        k > -1 ? v.splice(k, 1) : v.push(f.uid), s("update:modelValue", v);
      } else
        f.checked = y.target.checked;
    };
    return (f, y) => (u(), d("div", {
      class: m(["menu-stack form-theme", { "menu-stack--hide-inputs": e.hideInputs }]),
      role: r.value,
      "aria-labelledby": i.value
    }, [
      e.legend ? (u(), d("div", {
        key: 0,
        id: i.value,
        class: "hidden-visually"
      }, b(e.legend), 9, br)) : p("", !0),
      h("ul", _r, [
        (u(!0), d(R, null, x(e.options, (v) => (u(), d("li", {
          class: "menu-stack__item",
          key: v.uid
        }, [
          h("div", wr, [
            h("input", {
              type: e.type,
              id: l(v),
              name: o.value,
              value: v.uid,
              checked: a(v),
              onChange: (k) => c(v, k)
            }, null, 40, Sr),
            h("label", {
              for: l(v)
            }, [
              g(f.$slots, "default", { option: v }, () => [
                $(b(v?.label || v?.title || v?.text), 1)
              ])
            ], 8, kr)
          ])
        ]))), 128))
      ])
    ], 10, pr));
  }
}, $r = ["href", "download"], Cr = { class: "margin-left-small-x" }, hh = {
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
      const { size: o } = n.file, i = o / 1e6, r = o / 1e3, l = (a) => parseFloat(a.toFixed(2));
      return i > 1 ? `${l(i)}Mb` : r > 1 ? `${l(r)}Kb` : `${l(o)}B`;
    });
    return (o, i) => (u(), d("a", {
      class: "layout-flex-baseline",
      href: t.value,
      download: e.file.name
    }, [
      g(o.$slots, "default", {
        fileName: e.file.name,
        fileSize: s.value
      }, () => [
        z(N, {
          class: "ui-icon",
          icon: e.icon
        }, null, 8, ["icon"]),
        h("span", Cr, [
          $(b(e.file.name) + " ", 1),
          e.noFileSize ? p("", !0) : (u(), _(gs, {
            key: 0,
            text: s.value,
            small: "",
            outline: ""
          }, null, 8, ["text"]))
        ])
      ])
    ], 8, $r));
  }
}, Tr = { class: "site-form__item site-form__item--file" }, Ar = ["for"], Or = ["multiple", "id"], mh = {
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
    inputAttrs: Object
  },
  emits: ["file-change"],
  setup(e, { emit: n }) {
    const t = /* @__PURE__ */ (() => {
      let r = 0;
      return () => `file-input-id-${++r}`;
    })(), s = n, o = t(), i = (r) => {
      s("file-change", r.target.files);
    };
    return (r, l) => (u(), d("div", Tr, [
      h("label", {
        class: m({ "hidden-visually": e.labelHidden }),
        for: A(o)
      }, [
        g(r.$slots, "label", {}, () => [
          $(b(e.label), 1)
        ])
      ], 10, Ar),
      h("input", ie({
        type: "file",
        onChange: i,
        multiple: e.multiple,
        id: A(o)
      }, e.inputAttrs), null, 16, Or)
    ]));
  }
}, gh = {
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
    return (n, t) => (u(), d("p", {
      class: m(["site-form__description", {
        "site-form__error": e.error,
        "site-form__warning": e.warning
      }])
    }, [
      e.error || e.warning ? (u(), _(N, {
        key: 0,
        icon: `type:${e.error ? "error" : "warning"}`
      }, null, 8, ["icon"])) : p("", !0),
      g(n.$slots, "default")
    ], 2));
  }
}, xr = { class: "site-form__item site-form__item--select" }, Rr = ["for"], Er = ["id", "value"], jr = ["value"], vh = {
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
    labelHidden: Boolean
  },
  emits: ["update:modelValue"],
  setup(e) {
    const t = (/* @__PURE__ */ (() => {
      let s = 0;
      return () => `select-id-${++s}`;
    })())();
    return (s, o) => (u(), d("div", xr, [
      h("label", {
        class: m({ "hidden-visually": e.labelHidden }),
        for: A(t)
      }, [
        g(s.$slots, "default", {}, () => [
          $(b(e.label), 1)
        ])
      ], 10, Rr),
      h("select", {
        id: A(t),
        value: e.modelValue,
        onInput: o[0] || (o[0] = (i) => s.$emit("update:modelValue", i.target.value))
      }, [
        o[1] || (o[1] = h("option", {
          disabled: "",
          value: ""
        }, "Please select one", -1)),
        (u(!0), d(R, null, x(e.options, (i, r) => (u(), d("option", {
          key: r,
          value: i.value
        }, b(i.text), 9, jr))), 128))
      ], 40, Er)
    ]));
  }
}, Ir = { class: "site-form__item site-form__item--text" }, zr = ["for"], Mr = ["value", "id"], yh = {
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
    labelHidden: Boolean
  },
  emits: ["update:modelValue"],
  setup(e) {
    const t = (/* @__PURE__ */ (() => {
      let s = 0;
      return () => `text-input-id-${++s}`;
    })())();
    return (s, o) => (u(), d("div", Ir, [
      h("label", {
        class: m({ "hidden-visually": e.labelHidden }),
        for: A(t)
      }, [
        g(s.$slots, "default", {}, () => [
          $(b(e.label), 1)
        ])
      ], 10, zr),
      h("input", {
        type: "text",
        value: e.modelValue,
        onInput: o[0] || (o[0] = (i) => s.$emit("update:modelValue", i.target.value)),
        id: A(t)
      }, null, 40, Mr)
    ]));
  }
}, Ur = { class: "form-theme search-form type-small" }, Br = { class: "search-form__field" }, Pr = ["placeholder"], Lr = {
  class: "search-form__submit button button--primary",
  "aria-label": "Submit Search"
}, ph = {
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
    return (n, t) => (u(), d("div", Ur, [
      h("div", Br, [
        t[0] || (t[0] = h("label", { class: "hidden-visually" }, "Search", -1)),
        h("input", {
          class: "search-form__input",
          type: "text",
          id: "example-input",
          placeholder: e.placeholder
        }, null, 8, Pr)
      ]),
      h("button", Lr, [
        z(N, { icon: "type:search" })
      ])
    ]));
  }
}, bh = {
  __name: "UluAdaptiveLayout",
  setup(e) {
    const n = Ci("uluIsMobile");
    return (t, s) => !A(n) || !t.$slots.mobile ? g(t.$slots, "default", { key: 0 }) : g(t.$slots, "mobile", { key: 1 });
  }
};
function Vr(e) {
  var n;
  return e = e.replace(/^[^-_a-zA-Z]+/, "").replace(/^-(?:[-0-9]+)/, "-"), n = e && e.replace(/[^-_a-zA-Z0-9]+/g, "-"), n.toLowerCase();
}
function Fr(e, n = {
  columnFirst: "position-column-first",
  columnLast: "position-column-last",
  rowFirst: "position-row-first",
  rowLast: "position-row-last"
}) {
  const t = [...e.children], s = [];
  let o;
  t.forEach((i) => {
    const r = i.getBoundingClientRect().y;
    o !== r && s.push([]), s[s.length - 1].push(i), o = r, i.classList.remove(...Object.values(n));
  }), s.forEach((i, r) => {
    r === 0 && i.forEach((l) => l.classList.add(n.rowFirst)), r == s.length - 1 && i.forEach((l) => l.classList.add(n.rowLast)), i.forEach((l, a) => {
      a === 0 && l.classList.add(n.columnFirst), a == i.length - 1 && l.classList.add(n.columnLast);
    });
  });
}
const Hr = {
  name: "UluDataGrid",
  async mounted() {
    const e = () => Fr(this.$el);
    e(), this.resizeHandler = mt(e, 200, !1, this), window.addEventListener("resize", this.resizeHandler);
  },
  beforeUnmount() {
    this.resizeHandler && window.removeEventListener("resize", this.resizeHandler);
  }
};
function Nr(e, n, t, s, o, i) {
  return u(), d("div", null, [
    g(e.$slots, "default")
  ]);
}
const _h = /* @__PURE__ */ O(Hr, [["render", Nr]]), Dr = {
  name: "UluTitleRail",
  components: {
    UluIcon: N
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
}, Wr = {
  key: 0,
  class: "rail__item rail__item--pull"
};
function Xr(e, n, t, s, o, i) {
  const r = H("UluIcon");
  return u(), d("div", {
    class: m(["rail rail--title-rail", {
      "rail--rule": t.rule
    }])
  }, [
    h("div", {
      class: m(["rail__item rail__item--title", t.classes.itemTitle])
    }, [
      (u(), _(P(t.titleElement), {
        class: m(["layout-flex type-max-width-small no-margin", t.classes.title]),
        style: F({ alignItems: t.iconAlign })
      }, {
        default: S(() => [
          t.icon ? (u(), _(r, {
            key: 0,
            class: m(t.classes.icon),
            icon: t.icon
          }, null, 8, ["class", "icon"])) : p("", !0),
          g(e.$slots, "default", {}, () => [
            $(b(t.title), 1)
          ])
        ]),
        _: 3
      }, 8, ["class", "style"]))
    ], 2),
    e.$slots.end ? (u(), d("div", Wr, [
      g(e.$slots, "end")
    ])) : p("", !0)
  ], 2);
}
const wh = /* @__PURE__ */ O(Dr, [["render", Xr]]), Yr = {
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
        current: "breadcrumb__current",
        separator: "breadcrumb__separator"
      })
    }
  }
};
function qr(e, n, t, s, o, i) {
  const r = H("router-link"), l = H("UluIcon");
  return t.items.length ? (u(), d("nav", {
    key: 0,
    class: m(t.classes.nav),
    "aria-label": "Breadcrumb"
  }, [
    h("ol", {
      class: m(t.classes.list)
    }, [
      (u(!0), d(R, null, x(t.items, (a, c) => (u(), d("li", {
        key: c,
        class: m(t.classes.item)
      }, [
        a.current ? (u(), d("span", {
          key: 1,
          class: m(a.current)
        }, [
          g(e.$slots, "default", { item: a }, () => [
            $(b(a.title), 1)
          ])
        ], 2)) : (u(), _(r, {
          key: 0,
          to: a.to,
          class: m(t.classes.link),
          "aria-current": a.current ? "page" : null
        }, {
          default: S(() => [
            g(e.$slots, "default", { item: a }, () => [
              $(b(a.title), 1)
            ])
          ]),
          _: 2
        }, 1032, ["to", "class", "aria-current"])),
        c < t.items.length - 1 ? g(e.$slots, "separator", { key: 2 }, () => [
          z(l, {
            class: m(t.classes.separator),
            icon: t.separatorIcon || "type:pathSeparator"
          }, null, 8, ["class", "icon"])
        ]) : p("", !0)
      ], 2))), 128))
    ], 2)
  ], 2)) : p("", !0);
}
const Sh = /* @__PURE__ */ O(Yr, [["render", qr]]), Gr = {
  name: "UluNavStrip",
  components: {
    UluMenu: vs
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
function Kr(e, n, t, s, o, i) {
  const r = H("UluMenu");
  return u(), d("nav", {
    class: m(["nav-strip", {
      "nav-strip--rule": t.rule,
      "nav-strip--center": t.center,
      "nav-strip--right": t.right
    }])
  }, [
    z(r, {
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
const kh = /* @__PURE__ */ O(Gr, [["render", Kr]]), Zr = {}, Jr = {
  class: "site-skip-link hidden-visually-focusable",
  href: "#main-content"
};
function Qr(e, n) {
  return u(), d("a", Jr, " Skip to main content ");
}
const $h = /* @__PURE__ */ O(Zr, [["render", Qr]]), el = {
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
function tl(e, n, t, s, o, i) {
  return t.text != null ? (u(), _(P(t.element), { key: 0 }, {
    default: S(() => [
      $(b(t.text), 1)
    ]),
    _: 1
  })) : p("", !0);
}
const Ch = /* @__PURE__ */ O(el, [["render", tl]]), nl = {}, sl = { style: { display: "none" } };
function ol(e, n) {
  return u(), d("span", sl);
}
const Th = /* @__PURE__ */ O(nl, [["render", ol]]), il = {};
function rl(e, n) {
  const t = H("router-view");
  return u(), _(t);
}
const Ah = /* @__PURE__ */ O(il, [["render", rl]]);
function lt(e = 0, n = 100) {
  return e = Math.ceil(e), n = Math.floor(n), Math.floor(Math.random() * (n - e) + e);
}
const ll = {
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
        width: lt(500, 1e3),
        height: lt(500, 1e3)
      } : { width: n, height: t };
    }
  }
}, al = ["src", "alt"];
function cl(e, n, t, s, o, i) {
  return u(), d("img", {
    src: i.src,
    alt: t.alt
  }, null, 8, al);
}
const Oh = /* @__PURE__ */ O(ll, [["render", cl]]), ul = {
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
function dl(e, n, t, s, o, i) {
  return u(!0), d(R, null, x(parseInt(t.amount), (r) => (u(), _(P(t.element), { key: r }, {
    default: S(() => [...n[0] || (n[0] = [
      $(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed semper erat tincidunt tellus vestibulum dictum. Fusce vel augue commodo, egestas diam sed, accumsan leo. Maecenas congue nec nisl et ullamcorper. Maecenas tincidunt, tortor et viverra eleifend, enim leo vestibulum ipsum, quis placerat mi nisi nec ex. Vivamus a justo volutpat, scelerisque elit eget, lacinia ex. Phasellus dapibus sollicitudin tortor, vitae suscipit nunc condimentum ut. Cras suscipit feugiat nibh nec consectetur. Phasellus vitae quam blandit, cursus metus ut, placerat mi. Sed tempor lacus non est interdum imperdiet nec quis metus. Praesent vel eleifend diam. Donec tincidunt eget purus sed posuere. ", -1)
    ])]),
    _: 2
  }, 1024))), 128);
}
const xh = /* @__PURE__ */ O(ul, [["render", dl]]), fl = {
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
    "$route.path"(e, n) {
      if (this.$route.hash)
        return;
      const t = this.validator(e, n, this.$route), s = this.exclude.some((o) => o.endsWith("*") ? e.startsWith(o.slice(0, o.length - 1)) : e === o);
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
function hl(e, n, t, s, o, i) {
  return i.title ? (u(), d("p", {
    key: 0,
    tabindex: "-1",
    class: "hidden-visually",
    ref: "el"
  }, b(i.title), 513)) : p("", !0);
}
const Rh = /* @__PURE__ */ O(fl, [["render", hl]]), ml = {
  name: "AnimateNumber",
  props: {
    /**
     * The target number to animate to.
     */
    value: Number
  },
  watch: {
    value() {
      oo.to(this, {
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
function gl(e, n, t, s, o, i) {
  return u(), d("span", null, [
    g(e.$slots, "default", { currentValue: o.currentValue }, () => [
      $(b(o.currentValue), 1)
    ])
  ]);
}
const Eh = /* @__PURE__ */ O(ml, [["render", gl]]), vl = {
  key: 0,
  class: "progress-bar__header"
}, yl = {
  key: 1,
  class: "progress-bar__value progress-bar__value--amount"
}, pl = {
  key: 2,
  class: "progress-bar__icon"
}, bl = { class: "progress-bar__track" }, _l = {
  key: 1,
  class: "progress-bar__values"
}, wl = { class: "progress-bar__value progress-bar__value--amount" }, Sl = {
  key: 0,
  class: "progress-bar__value progress-bar__value--deficit"
}, kl = { class: "progress-bar__value progress-bar__value--total" }, jh = {
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
    const n = e, t = (r, l) => `${l === 0 ? 0 : r / l * 100}%`, s = w(() => n.indeterminate ? null : t(n.amount, n.total)), o = w(() => t(n.deficit, n.total)), i = w(() => ({
      "progress-bar": !0,
      "progress-bar--small": n.small,
      "progress-bar--positive": n.positive,
      "progress-bar--negative": n.negative,
      "progress-bar--loader": n.loader,
      "progress-bar--indeterminate": n.indeterminate,
      "type-small": n.small
      // From original component, seems to control font size
    }));
    return (r, l) => (u(), d("div", {
      class: m(i.value)
    }, [
      e.label || r.$slots.label || r.$slots.icon || e.amountInHeader ? (u(), d("div", vl, [
        e.label ? (u(), _(P(e.labelElement), {
          key: 0,
          class: m(["progress-bar__label", [e.classes.label, { "hidden-visually": e.labelHidden }]])
        }, {
          default: S(() => [
            g(r.$slots, "label", {}, () => [
              $(b(e.label), 1)
            ])
          ]),
          _: 3
        }, 8, ["class"])) : p("", !0),
        e.amountInHeader ? (u(), d("div", yl, [
          l[0] || (l[0] = h("strong", { class: "hidden-visually" }, "Amount:", -1)),
          g(r.$slots, "valueAmount", { value: e.amount }, () => [
            $(b(e.formatValue(e.amount, "amount")), 1)
          ])
        ])) : p("", !0),
        r.$slots.icon ? (u(), d("div", pl, [
          g(r.$slots, "icon")
        ])) : p("", !0)
      ])) : p("", !0),
      h("div", bl, [
        h("div", {
          class: "progress-bar__bar",
          style: F({ width: s.value })
        }, null, 4),
        e.deficit > 0 ? (u(), d("div", {
          key: 0,
          class: "progress-bar__bar--deficit",
          style: F({ width: o.value })
        }, null, 4)) : p("", !0)
      ]),
      !e.noValues && !e.amountInHeader && !e.loader && !e.indeterminate ? (u(), d("div", _l, [
        h("div", wl, [
          l[1] || (l[1] = h("strong", { class: "hidden-visually" }, "Amount:", -1)),
          g(r.$slots, "valueAmount", { value: e.amount }, () => [
            $(b(e.formatValue(e.amount, "amount")), 1)
          ])
        ]),
        e.deficit > 0 ? (u(), d("div", Sl, [
          l[2] || (l[2] = h("strong", { class: "hidden-visually" }, "Deficit: ", -1)),
          g(r.$slots, "valueDeficit", { value: e.deficit }, () => [
            $("-" + b(e.formatValue(e.deficit, "deficit")), 1)
          ])
        ])) : p("", !0),
        h("div", kl, [
          l[3] || (l[3] = h("strong", { class: "hidden-visually" }, "Total:", -1)),
          g(r.$slots, "valueTotal", { value: e.total }, () => [
            $(b(e.formatValue(e.total, "total")), 1)
          ])
        ])
      ])) : p("", !0)
    ], 2));
  }
}, $l = { class: "hidden-visually" }, Cl = { class: "progress-circle__chart" }, Tl = {
  class: "progress-circle__chart-svg",
  viewBox: "0 0 32 32"
}, Al = {
  key: 0,
  class: "progress-circle__chart-value"
}, Ol = {
  key: 0,
  class: "progress-circle__value type-small-x"
}, Ih = {
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
    const n = e, t = I(null), s = (a) => a === 100 ? 101 : a, o = (a = 0) => {
      if (!t.value || !t.value.animate) return;
      const c = { strokeDasharray: [`${a} 100`, i.value] };
      t.value.animate(c, { duration: n.duration, easing: n.easing, fill: "forwards" });
    };
    He(() => n.percentage, (a, c) => {
      a !== c && o(s(c));
    });
    const i = w(() => `${s(n.percentage)} 100`), r = w(() => n.outside || n.outsideBelow || n.small), l = w(() => {
      const a = {
        "progress-circle": !0,
        "progress-circle--small": n.small,
        "progress-circle--pie": n.pieStyle,
        "progress-circle--outside": r.value,
        "progress-circle--outside-below": n.outsideBelow,
        "progress-circle--no-mask": n.noMask
      };
      return n.status && (a[`progress-circle--${n.status}`] = !0), a;
    });
    return dt(() => {
      o();
    }), (a, c) => (u(), d("div", {
      class: m(l.value)
    }, [
      h("strong", $l, b(e.label), 1),
      h("div", Cl, [
        (u(), d("svg", Tl, [
          c[0] || (c[0] = h("circle", {
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
            style: F({ strokeDasharray: i.value })
          }, null, 4),
          c[1] || (c[1] = h("circle", {
            class: "progress-circle__chart-mask",
            cx: "16",
            cy: "16"
          }, null, -1))
        ])),
        !r.value && !e.noValue ? (u(), d("strong", Al, [
          g(a.$slots, "value", { value: e.percentage }, () => [
            $(b(e.formatValue(e.percentage)), 1)
          ])
        ])) : p("", !0)
      ]),
      r.value && !e.noValue ? (u(), d("strong", Ol, [
        g(a.$slots, "value", { value: e.percentage }, () => [
          $(b(e.formatValue(e.percentage)), 1)
        ])
      ])) : p("", !0)
    ], 2));
  }
};
function xl(e, n) {
  return !n || !Array.isArray(n) ? [] : n.map((t) => {
    const s = /* @__PURE__ */ new Set(), o = t.getValue || ((l) => l[t.uid]);
    e.forEach((l) => {
      const a = o(l);
      Array.isArray(a) ? a.forEach((c) => c && s.add(c)) : a && s.add(a);
    });
    const i = t.getLabel || ((l) => l), r = [...s].map((l) => ({
      uid: l,
      label: i(l),
      selected: !1
    }));
    return r.sort((l, a) => String(l.label).localeCompare(String(a.label))), {
      ...t,
      children: r
    };
  });
}
function zh(e, n = {}) {
  const t = (j, U) => {
    const L = j[U];
    return L === null || typeof L > "u" ? [] : Array.isArray(L) ? L : [L];
  }, {
    initialFacets: s,
    facetFields: o,
    initialSearchValue: i = "",
    initialSortType: r = "az",
    noDefaultSorts: l = !1,
    extraSortTypes: a = {},
    searchOptions: c = {},
    getItemFacet: f = t,
    getSortValue: y = (j) => j.title || j.label || "",
    countMode: v = "none"
    // 'none', 'simple', 'intuitive'
  } = n, k = (j) => j.sort((U, L) => {
    const D = y(U), V = y(L);
    return D && V ? String(D).localeCompare(String(V)) : D ? -1 : V ? 1 : 0;
  }), E = {
    az: { text: "A-Z", sort: k },
    za: { text: "Z-A", sort: (j) => k(j).reverse() }
  };
  function C(j) {
    return (j || []).map((U) => ({
      ...U,
      open: U.open || !1,
      children: U.children.map((L) => ({
        ...L,
        selected: L.selected || !1
      })),
      selectedCount: 0
    }));
  }
  const T = I([]), le = I(i), Ke = I(r), Me = w(() => !o || !e.value?.length ? null : xl(e.value, o)), me = w(() => ({
    ...l ? {} : E,
    ...a
  })), ae = w(() => ({
    shouldSort: !0,
    keys: ["title", "label", "description", "author"],
    ...c
  })), Ze = w(() => le.value?.length ? new io(e.value, ae.value).search(le.value).map((U) => U.item) : e.value), Se = w(() => {
    const j = [];
    return T.value.forEach((U) => {
      const L = U.children.filter((D) => D.selected);
      U.selectedCount = L.length, L.length > 0 && j.push({ ...U, children: L });
    }), j;
  }), ce = w(() => Z(Ze.value, Se.value)), W = w(() => {
    const j = me.value[Ke.value]?.sort;
    return typeof j != "function" ? ce.value : j([...ce.value]);
  });
  function Z(j, U) {
    return U.length ? j.filter((L) => U.every((D) => {
      const V = f(L, D.uid);
      return V && V.length ? D.match === "all" ? D.children.every((X) => V.includes(X.uid)) : D.children.some((X) => V.includes(X.uid)) : !1;
    })) : j;
  }
  function ke() {
    T.value.forEach((j) => {
      j.children && j.children.forEach((U) => U.selected = !1);
    });
  }
  function ln({ groupUid: j, facetUid: U, selected: L }) {
    const D = T.value.find((V) => V.uid === j);
    if (D) {
      !D.multiple && L && D.children.forEach((X) => {
        X.uid !== U && (X.selected = !1);
      });
      const V = D.children.find((X) => X.uid === U);
      V && (V.selected = L);
    }
  }
  return He(Me, (j) => {
    T.value = C(s || j);
  }, { immediate: !0 }), He([Se, Ze], ([j, U], [L, D]) => {
    v === "none" || !T.value.length || j === L && U === D || (v === "simple" ? T.value.forEach((V) => {
      const X = j.filter((ue) => ue.uid !== V.uid), Je = Z(U, X);
      V.children.forEach((ue) => {
        ue.count = Je.filter(($e) => f($e, V.uid).includes(ue.uid)).length;
      });
    }) : v === "intuitive" && T.value.forEach((V) => {
      V.children.forEach((X) => {
        const Je = JSON.parse(JSON.stringify(T.value)), ue = Je.find((K) => K.uid === V.uid), $e = ue.children.find((K) => K.uid === X.uid);
        if (ue.multiple) {
          if ($e.selected) {
            X.count = ce.value.filter((K) => f(K, V.uid).includes(X.uid)).length;
            return;
          }
          $e.selected = !0;
        } else {
          if ($e.selected) {
            X.count = ce.value.length;
            return;
          }
          ue.children.forEach((K) => {
            K.selected = !1;
          }), $e.selected = !0;
        }
        const an = Je.map((K) => ({ ...K, children: K.children.filter((cn) => cn.selected) })).filter((K) => K.children.length > 0), Vs = Z(U, an);
        X.count = Vs.length;
      });
    }));
  }, { deep: !0, immediate: !0 }), {
    facets: T,
    searchValue: le,
    selectedSort: Ke,
    sortTypes: me,
    displayItems: W,
    selectedFacets: Se,
    clearFilters: ke,
    handleFacetChange: ln
  };
}
const Rl = { key: 0 }, Sn = {
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
  setup(e, { emit: n }) {
    const t = e, s = n, o = w(() => t.type === "radio" ? [{ label: `All ${t.groupName}s`, uid: "" }, ...t.children] : t.children);
    function i(r) {
      if (t.type === "radio") {
        const l = r;
        t.children.forEach((a) => {
          const c = a.uid === l;
          a.selected !== c && s("facet-change", {
            groupUid: t.groupUid,
            facetUid: a.uid,
            selected: c
          });
        });
      } else {
        const l = new Set(r);
        t.children.forEach((a) => {
          const c = l.has(a.uid);
          a.selected !== c && s("facet-change", {
            groupUid: t.groupUid,
            facetUid: a.uid,
            selected: c
          });
        });
      }
    }
    return (r, l) => (u(), _(_s, {
      class: "ulu-facets__facet-list",
      legend: e.groupUid,
      type: e.type,
      options: o.value,
      "model-value": e.modelValue,
      "onUpdate:modelValue": i
    }, {
      default: S(({ option: a }) => [
        $(b(a.label) + " ", 1),
        a.count !== void 0 ? (u(), d("span", Rl, "(" + b(a.count) + ")", 1)) : p("", !0)
      ]),
      _: 1
    }, 8, ["legend", "type", "options", "model-value"]));
  }
}, El = { class: "UluFacetsFilters" }, Mh = {
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
    }
  },
  emits: ["facet-change"],
  setup(e, { emit: n }) {
    const t = n, s = (o) => o.multiple ? o.children.filter((i) => i.selected).map((i) => i.uid) : o.children.find((i) => i.selected)?.uid || "";
    return (o, i) => (u(), d("div", El, [
      (u(!0), d(R, null, x(e.facets, (r) => (u(), _(Ut, {
        class: "ulu-facets__group",
        key: r.uid,
        classes: {
          container: ["ulu-facets__group", e.classes.group],
          trigger: ["ulu-facets__group-toggle", e.classes.groupToggle],
          content: ["ulu-facets__group-content", e.classes.groupContent]
        },
        startOpen: r.open
      }, {
        trigger: S(({ isOpen: l }) => [
          g(o.$slots, "groupToggle", {
            group: r,
            isOpen: l
          }, () => [
            $(b(r.name), 1)
          ])
        ]),
        default: S(() => [
          z(Sn, {
            children: r.children.slice(0, e.maxVisible),
            groupUid: r.uid,
            groupName: r.name,
            type: r.multiple ? "checkbox" : "radio",
            "model-value": s(r),
            onFacetChange: i[0] || (i[0] = (l) => t("facet-change", l))
          }, null, 8, ["children", "groupUid", "groupName", "type", "model-value"]),
          r.children.length > e.maxVisible ? (u(), _(Ut, {
            key: 0,
            class: m(["ulu-facets__more-facets", e.classes.moreFacets]),
            clickOutsideCloses: !1,
            closeOnEscape: !1,
            transitionHeight: !0
          }, {
            trigger: S(({ isOpen: l }) => [
              $(b(l ? "View Less" : "Show More"), 1)
            ]),
            default: S(() => [
              z(Sn, {
                children: r.children.slice(e.maxVisible),
                groupUid: r.uid,
                groupName: r.name,
                type: r.multiple ? "checkbox" : "radio",
                "model-value": s(r),
                onFacetChange: i[1] || (i[1] = (l) => t("facet-change", l))
              }, null, 8, ["children", "groupUid", "groupName", "type", "model-value"])
            ]),
            _: 2
          }, 1032, ["class"])) : p("", !0)
        ]),
        _: 2
      }, 1032, ["classes", "startOpen"]))), 128))
    ]));
  }
}, Uh = {
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
    const t = n, s = (l) => l.multiple ? l.children : [{ label: `All ${l.name}s`, uid: "" }, ...l.children], o = (l) => l.multiple ? l.children.filter((a) => a.selected).map((a) => a.uid) : l.children.find((a) => a.selected)?.uid || "", i = (l) => {
      const a = l.children.filter((f) => f.selected), c = a.length;
      return c === 0 ? "All" : l.multiple ? c === 1 ? a[0].label : `${c} selected` : a[0].label;
    };
    function r(l, a, c) {
      if (l.multiple) {
        const f = new Set(a);
        l.children.forEach((y) => {
          const v = f.has(y.uid);
          y.selected !== v && t("facet-change", {
            groupUid: l.uid,
            facetUid: y.uid,
            selected: v
          });
        });
      } else {
        const f = a;
        l.children.forEach((y) => {
          const v = y.uid === f;
          y.selected !== v && t("facet-change", {
            groupUid: l.uid,
            facetUid: y.uid,
            selected: v
          });
        }), c();
      }
    }
    return (l, a) => (u(), d("div", {
      class: m(e.classes.container)
    }, [
      (u(!0), d(R, null, x(e.facets, (c) => (u(), d("div", {
        key: c.uid,
        class: m(e.classes.group)
      }, [
        z(ht, {
          classes: {
            trigger: e.classes.trigger,
            content: e.classes.content
          }
        }, {
          trigger: S(() => [
            g(l.$slots, "trigger", {
              group: c,
              label: i(c)
            }, () => [
              h("span", null, [
                $(b(c.name) + ": ", 1),
                h("strong", null, b(i(c)), 1)
              ])
            ]),
            z(N, {
              class: m(e.classes.triggerIcon),
              icon: "fas fa-chevron-down"
            }, null, 8, ["class"])
          ]),
          default: S(({ close: f }) => [
            z(_s, {
              legend: c.name,
              type: c.multiple ? "checkbox" : "radio",
              options: s(c),
              "model-value": o(c),
              "onUpdate:modelValue": (y) => r(c, y, f),
              hideInputs: e.hideInputs
            }, null, 8, ["legend", "type", "options", "model-value", "onUpdate:modelValue", "hideInputs"])
          ]),
          _: 2
        }, 1032, ["classes"])
      ], 2))), 128))
    ], 2));
  }
}, jl = { class: "facets-dropdown-filters" }, Il = ["for"], zl = ["id", "onChange"], Ml = { value: "" }, Ul = ["value", "selected"], Bh = {
  __name: "UluFacetsFilterSelects",
  props: {
    facets: {
      type: Array,
      default: () => []
    }
  },
  emits: ["facet-change"],
  setup(e, { emit: n }) {
    const t = n;
    function s(o, i) {
      const r = i.target.value;
      o.children.find((a) => a.selected)?.uid !== r && o.children.forEach((a) => {
        const c = a.uid === r;
        a.selected !== c && t("facet-change", {
          groupUid: o.uid,
          facetUid: a.uid,
          selected: c
        });
      });
    }
    return (o, i) => (u(), d("div", jl, [
      (u(!0), d(R, null, x(e.facets, (r) => (u(), d("div", {
        class: "facets-dropdown-filters__group",
        key: r.uid
      }, [
        h("label", {
          for: `facet-dropdown-${r.uid}`,
          class: "facets-dropdown-filters__label"
        }, b(r.name), 9, Il),
        h("select", {
          id: `facet-dropdown-${r.uid}`,
          class: "facets-dropdown-filters__select",
          onChange: (l) => s(r, l)
        }, [
          h("option", Ml, "All " + b(r.name) + "s", 1),
          (u(!0), d(R, null, x(r.children, (l) => (u(), d("option", {
            key: l.uid,
            value: l.uid,
            selected: l.selected
          }, b(l.label), 9, Ul))), 128))
        ], 40, zl)
      ]))), 128))
    ]));
  }
}, Bl = { class: "facets-header-layout" }, Pl = { class: "facets-header-layout__header" }, Ll = { class: "facets-header-layout__main" }, Ph = {
  __name: "UluFacetsHeaderLayout",
  setup(e) {
    return (n, t) => (u(), d("div", Bl, [
      h("div", Pl, [
        g(n.$slots, "header")
      ]),
      h("div", Ll, [
        g(n.$slots, "main")
      ])
    ]));
  }
}, Vl = { class: "facets-results" }, Fl = {
  key: 1,
  class: "facets-results__empty"
}, Lh = {
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
    return (n, t) => (u(), d("div", Vl, [
      e.items.length ? (u(), _(Gn, {
        key: 0,
        tag: e.tag,
        name: e.transitionName,
        class: m(["facets-results__list", e.classes.list])
      }, {
        default: S(() => [
          (u(!0), d(R, null, x(e.items, (s, o) => (u(), d("li", {
            class: m(["facets-results__item", e.classes.item]),
            key: s.id || o
          }, [
            g(n.$slots, "item", {
              item: s,
              index: o
            })
          ], 2))), 128))
        ]),
        _: 3
      }, 8, ["tag", "name", "class"])) : (u(), d("div", Fl, [
        g(n.$slots, "empty", {}, () => [
          t[0] || (t[0] = h("p", null, "No matching items found.", -1))
        ])
      ]))
    ]));
  }
}, Hl = { class: "ulu-facets__keyword-search" }, Nl = ["placeholder"], Vh = {
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
    const t = e, s = n;
    let o = 0;
    const i = `facet-view-keyword-${++o}`, r = w({
      get() {
        return t.modelValue;
      },
      set(l) {
        s("update:modelValue", l);
      }
    });
    return (l, a) => (u(), d("div", Hl, [
      h("label", {
        class: m(e.classes.searchLabel),
        for: i
      }, [...a[1] || (a[1] = [
        h("strong", null, "Search", -1)
      ])], 2),
      Oe(h("input", {
        id: i,
        class: m(e.classes.searchInput),
        "onUpdate:modelValue": a[0] || (a[0] = (c) => r.value = c),
        type: "text",
        placeholder: e.placeholder
      }, null, 10, Nl), [
        [Zs, r.value]
      ])
    ]));
  }
}, Dl = { class: "facets-sidebar-layout__header" }, Wl = { class: "facets-sidebar-layout__mobile-controls" }, Xl = { class: "facets-sidebar-layout__body" }, Yl = { class: "facets-sidebar-layout__main" }, Fh = {
  __name: "UluFacetsSidebarLayout",
  setup(e) {
    const n = I(!1), t = ct("uluIsMobile"), s = I(null), o = I(null), i = w(() => t.value ? o.value : s.value);
    return (r, l) => (u(), d("div", {
      class: m(["facets-sidebar-layout", { "facets-sidebar-layout--filters-hidden": A(t) }])
    }, [
      h("div", Dl, [
        g(r.$slots, "header")
      ]),
      Oe(h("div", Wl, [
        h("button", {
          class: "button",
          onClick: l[0] || (l[0] = (a) => n.value = !0)
        }, "Filters & Sort")
      ], 512), [
        [Rt, A(t)]
      ]),
      h("div", Xl, [
        Oe(h("div", {
          class: "facets-sidebar-layout__sidebar",
          ref_key: "desktopTarget",
          ref: s
        }, null, 512), [
          [Rt, !A(t)]
        ]),
        h("div", Yl, [
          g(r.$slots, "main")
        ])
      ]),
      A(t) ? (u(), _(ls, {
        key: 0,
        modelValue: n.value,
        "onUpdate:modelValue": l[1] || (l[1] = (a) => n.value = a),
        position: "right",
        title: "Filters & Sort",
        allowResize: ""
      }, {
        default: S(() => [
          h("div", {
            class: "facets-sidebar-layout__sidebar",
            ref_key: "mobileTarget",
            ref: o
          }, null, 512)
        ]),
        _: 1
      }, 8, ["modelValue"])) : p("", !0),
      i.value ? (u(), _(at, {
        key: 1,
        to: i.value
      }, [
        g(r.$slots, "sidebar")
      ], 8, ["to"])) : p("", !0)
    ], 2));
  }
}, ql = ["for"], Gl = ["value", "id"], Kl = ["value"], Hh = {
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
    let t = 0;
    const s = n, o = I(`ulu-facet-sort-${++t}`);
    return (i, r) => (u(), d("div", {
      class: m(["facets-sort", e.classes.sortForm])
    }, [
      h("label", {
        for: o.value,
        class: m(e.classes.sortFormLabel)
      }, [
        g(i.$slots, "default", {}, () => [
          r[1] || (r[1] = $("Sort:", -1))
        ])
      ], 10, ql),
      h("select", {
        value: e.modelValue,
        onChange: r[0] || (r[0] = (l) => s("update:modelValue", l.target.value)),
        id: o.value,
        class: m(e.classes.sortFormSelect)
      }, [
        (u(!0), d(R, null, x(e.sortTypes, (l, a) => (u(), d("option", {
          value: a,
          key: a
        }, b(l.text), 9, Kl))), 128))
      ], 42, Gl)
    ], 2));
  }
}, ws = Symbol(), Ss = Symbol(), pt = Symbol(), Zl = {
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
      [pt]: w(() => this.sections),
      [ws]: (e) => {
        const { titleId: n, title: t } = e, { element: s } = e.$refs;
        this.sections.push({
          instance: e,
          titleId: n,
          title: t,
          element: s,
          active: !1
        }), this.update();
      },
      [Ss]: (e) => {
        const n = this.sections, t = n.findIndex((s) => s.instance === e);
        t > -1 && n.splice(t, 1), this.update();
      }
    };
  },
  methods: {
    update() {
      this.isMounted && this.observeItems();
    },
    getSectionIndex(e) {
      return this.sections.findIndex(({ element: n }) => e === n);
    },
    /**
     * Sets up a new observer to watch the section visibility
     */
    createObserver() {
      const { observerOptions: e, sections: n, removeActive: t, firstItemActive: s } = this;
      let o = 0;
      const i = (r) => {
        r.forEach(({ target: l, isIntersecting: a }) => {
          const c = this.getSectionIndex(l), f = l.offsetTop, y = n[c], v = c === 0 && o > f, k = c === n.length - 1 && o < f;
          y && this.$nextTick(() => {
            a ? (t(y), y.active = !0) : (v && !s || k && y.active) && t(), this.$emit("section-change", {
              section: y,
              sections: n,
              active: a
            });
          });
        });
      };
      this.observer = new IntersectionObserver(i, e);
    },
    /**
     * Add all slide elements as targets in observer
     */
    observeItems() {
      const { observer: e, sections: n } = this;
      e.disconnect(), n.forEach(({ element: t }) => {
        t && e.observe(t);
      });
    },
    removeActive(e = null) {
      this.sections.forEach((n) => {
        n !== e && (n.active = !1);
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
}, Jl = { class: "scroll-anchors" };
function Ql(e, n, t, s, o, i) {
  return u(), d("div", Jl, [
    g(e.$slots, "default")
  ]);
}
const Nh = /* @__PURE__ */ O(Zl, [["render", Ql]]), ea = {
  name: "ScrollAnchorsNav",
  inject: {
    sections: { from: pt }
  },
  props: {
    element: {
      type: String,
      default: "nav"
    }
  }
}, ta = ["href"];
function na(e, n, t, s, o, i) {
  return i.sections.length ? (u(), _(P(t.element), {
    key: 0,
    class: "scroll-anchors__nav"
  }, {
    default: S(() => [
      h("ul", null, [
        (u(!0), d(R, null, x(i.sections, (r, l) => (u(), d("li", {
          key: l,
          class: m({ "is-active": r.active })
        }, [
          h("a", {
            class: m({ "is-active": r.active }),
            href: `#${r.titleId}`
          }, b(r.title), 11, ta)
        ], 2))), 128))
      ])
    ]),
    _: 1
  })) : p("", !0);
}
const Dh = /* @__PURE__ */ O(ea, [["render", na]]);
function ks(e) {
  requestAnimationFrame(() => {
    const n = new MessageChannel();
    n.port1.onmessage = e, n.port2.postMessage(void 0);
  });
}
const sa = {
  name: "ScrollAnchorsNavAnimated",
  inject: {
    sections: { from: pt }
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
      const { sections: e, linkRefs: n } = this, t = Object.keys(n).length;
      if (!e || !t)
        return !1;
      const s = e.findIndex((l) => l.active);
      if (s === -1)
        return !1;
      const o = this.linkRefs[s], { offsetTop: i, offsetHeight: r } = o;
      return {
        y: i,
        height: r,
        initial: this.inidica
      };
    }
  },
  watch: {
    indicatorStyles(e) {
      e && !this.indicatorAnimReady && ks(() => {
        this.indicatorAnimReady = !0;
      });
    }
  },
  methods: {
    addLinkRef(e, n) {
      this.linkRefs[e] = n;
    }
  }
}, oa = { class: "scroll-anchors__rail" }, ia = ["href"];
function ra(e, n, t, s, o, i) {
  return i.sections.length ? (u(), _(P(t.element), {
    key: 0,
    class: "scroll-anchors__nav scroll-anchors__nav--animated"
  }, {
    default: S(() => [
      h("ul", oa, [
        (u(!0), d(R, null, x(i.sections, (r, l) => (u(), d("li", {
          key: l,
          class: m({ "is-active": r.active })
        }, [
          h("a", {
            class: m({ "is-active": r.active }),
            ref_for: !0,
            ref: (a) => i.addLinkRef(l, a),
            href: `#${r.titleId}`
          }, b(r.title), 11, ia)
        ], 2))), 128))
      ]),
      h("div", {
        class: m(["scroll-anchors__indicator", {
          "scroll-anchors__indicator--can-transition": o.indicatorAnimReady
        }]),
        ref: "indicator",
        style: F({
          opacity: i.indicatorStyles ? "1" : "0",
          transform: `translateY(${i.indicatorStyles.y}px)`,
          height: `${i.indicatorStyles.height}px`
        })
      }, null, 6)
    ]),
    _: 1
  })) : p("", !0);
}
const Wh = /* @__PURE__ */ O(sa, [["render", ra]]), la = {
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
    register: { from: ws },
    unregister: { from: Ss },
    sections: { from: pt, default: () => w(() => []) }
  },
  data() {
    const { anchorId: e, title: n } = this;
    return {
      titleId: e || `sas-title-${Vr(n)}`
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
function aa(e, n, t, s, o, i) {
  return u(), d("div", {
    class: m([t.wrapperClass, { [t.activeClass]: t.activeClass && i.section?.active }]),
    ref: "element"
  }, [
    (u(), _(P(t.titleElement), {
      class: m(t.titleClass),
      id: o.titleId
    }, {
      default: S(() => [
        $(b(t.title), 1)
      ]),
      _: 1
    }, 8, ["class", "id"])),
    g(e.$slots, "default", { section: i.section })
  ], 2);
}
const Xh = /* @__PURE__ */ O(la, [["render", aa]]), ca = {
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
    return (n, t) => (u(), d("span", {
      class: m(["skeleton skeleton--text", {
        "skeleton--inline": e.inline,
        "skeleton--background-alt": e.alt,
        [`skeleton--width-${e.width}`]: e.width
      }])
    }, null, 2));
  }
}, Yh = {
  __name: "UluShowSkeleton",
  props: {
    /**
     * If true will show whatever is passed to slot, else skeleton text
     */
    when: Boolean
  },
  setup(e) {
    return (n, t) => e.when ? (u(), _(ca, {
      key: 1,
      inline: ""
    })) : g(n.$slots, "default", { key: 0 });
  }
};
function ua(e, n) {
  return [...Array(e)].map((t, s) => n(s));
}
function qh(e, n) {
  var t = e.indexOf(n);
  t > -1 && e.splice(t, 1);
}
const Gh = {
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
    const n = e, t = w(() => ua(n.lines, () => {
      const o = lt(70, 100);
      let i = 0;
      const r = () => {
        const c = o - i, f = lt(15, c);
        return i += f, f;
      }, l = [];
      for (; i < o - 15; )
        l.push(r());
      const a = () => l.reduce((c, f) => c + f, 0);
      for (; a() >= o && l.pop(); )
        ;
      return l.map((c) => ({ width: c, alt: Math.random() < 0.5 }));
    }));
    return (s, o) => (u(), d("div", null, [
      (u(!0), d(R, null, x(t.value, (i, r) => (u(), d("div", { key: r }, [
        (u(!0), d(R, null, x(i, (l) => (u(), d("span", {
          key: l,
          class: m(["skeleton skeleton--text skeleton--inline", { "skeleton--background-alt": l.alt }]),
          style: F({ width: `${l.width}%` })
        }, null, 6))), 128))
      ]))), 128))
    ]));
  }
}, da = { class: "skeleton skeleton-block--media" }, Kh = {
  __name: "UluSkeletonMedia",
  setup(e) {
    return (n, t) => (u(), d("div", da, [
      z(N, { icon: "type:image" })
    ]));
  }
}, fa = {
  name: "SlideShow",
  emits: ["slide-change"],
  components: {
    UluIcon: N
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
      const n = e === "next", { scrollAmount: t } = this, { scrollLeft: s, offsetWidth: o } = this.getScrollData();
      return typeof t == "function" ? t(e, this.$refs) : typeof t == "number" ? n ? s + t : s - t : n ? s + o : s - o;
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
        const o = () => {
          n.element.focus(this.focusOptions), t.removeEventListener("scrollend", o);
        };
        t.addEventListener("scrollend", o), this.scrollTo(s, this.scrollBehaviorNav);
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
      const { observerOptions: e } = this, { track: n, nav: t } = this.$refs, s = (o) => {
        o.forEach((i) => {
          this.$nextTick(() => {
            const r = this.getSlideByElement(i.target);
            r.active = i.isIntersecting, this.$emit("slide-change", { slide: r, track: n, nav: t });
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
}, ha = { class: "slideshow" }, ma = {
  class: "slideshow__control-context",
  ref: "context"
}, ga = {
  class: "slideshow__track-crop",
  ref: "crop"
}, va = {
  class: "slideshow__track",
  ref: "track"
}, ya = ["tabindex"], pa = { class: "slideshow__controls" }, ba = { class: "slideshow__controls-item slideshow__controls-item--previous" }, _a = ["disabled"], wa = { class: "slideshow__controls-item slideshow__controls-item--next" }, Sa = ["disabled"], ka = {
  key: 0,
  class: "slideshow__nav",
  ref: "nav"
}, $a = ["onClick"], Ca = { class: "hidden-visually" };
function Ta(e, n, t, s, o, i) {
  const r = H("UluIcon");
  return u(), d("div", ha, [
    h("div", ma, [
      h("div", ga, [
        h("ul", va, [
          (u(!0), d(R, null, x(o.slides, (l, a) => (u(), d("li", {
            class: m(["slideshow__slide", { "is-active": l.active }]),
            key: a,
            tabindex: t.slideFocusable ? "0" : "-1",
            ref_for: !0,
            ref: (c) => {
              l.element = c;
            }
          }, [
            g(e.$slots, "slide", {
              item: l.item,
              index: a
            })
          ], 10, ya))), 128))
        ], 512)
      ], 512),
      h("ul", pa, [
        h("li", ba, [
          h("button", {
            class: "slideshow__control-button slideshow__control-button--previous",
            "aria-label": "Scroll Right",
            onClick: n[0] || (n[0] = (...l) => i.previous && i.previous(...l)),
            disabled: !i.canScrollLeft
          }, [
            z(r, {
              class: "slideshow__control-icon",
              icon: "type:next"
            })
          ], 8, _a)
        ]),
        h("li", wa, [
          h("button", {
            class: "slideshow__control-button slideshow__control-button--next",
            "aria-label": "Scroll Left",
            onClick: n[1] || (n[1] = (...l) => i.next && i.next(...l)),
            disabled: !i.canScrollRight
          }, [
            z(r, {
              class: "slideshow__control-icon",
              icon: "type:previous"
            })
          ], 8, Sa)
        ])
      ])
    ], 512),
    t.noNav ? p("", !0) : (u(), d("ul", ka, [
      (u(!0), d(R, null, x(o.slides, (l, a) => (u(), d("li", {
        class: m(["slideshow__nav-item", { "is-active": l.active }]),
        ref_for: !0,
        ref: (c) => {
          l.navElement = c;
        },
        key: a
      }, [
        h("button", {
          class: m(["slideshow__nav-button", { "is-active": l.active }]),
          onClick: (c) => i.to(a)
        }, [
          g(e.$slots, "nav", {
            item: l.item,
            index: a,
            active: l.active
          }, () => [
            h("span", Ca, "Item " + b(a + 1), 1)
          ])
        ], 10, $a)
      ], 2))), 128))
    ], 512))
  ]);
}
const Aa = /* @__PURE__ */ O(fa, [["render", Ta]]), Oa = {
  name: "ImageSlideShow",
  components: {
    UluSlideShow: Aa
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
      const { offsetWidth: o, scrollLeft: i } = n, { offsetLeft: r, offsetWidth: l } = s, a = i + o, c = r + l;
      let f = null;
      console.log("left/right", i, a), t && s && (c > a ? f = i + (c - a) : r < i && (f = r), f !== null && n.scrollTo({ left: f, top: 0, behavior: "smooth" }));
    }
  }
}, xa = ["src", "alt"], Ra = { class: "slideshow__image-actions" }, Ea = ["src", "alt"];
function ja(e, n, t, s, o, i) {
  const r = H("AppButton"), l = H("UluSlideShow");
  return u(), _(l, {
    class: "slideshow--images",
    items: t.images,
    onSlideChange: i.slideChange
  }, {
    slide: S(({ item: a }) => [
      h("img", {
        src: a.src,
        alt: a.alt
      }, null, 8, xa),
      h("div", Ra, [
        t.selectButton ? (u(), _(r, {
          key: 0,
          class: "type-small",
          icon: "plus",
          small: "",
          iconBefore: ""
        }, {
          default: S(() => [...n[0] || (n[0] = [
            $(" Select ", -1)
          ])]),
          _: 1
        })) : p("", !0)
      ])
    ]),
    nav: S(({ index: a }) => [
      h("img", {
        src: t.images[a].src,
        alt: `View image ${a}`
      }, null, 8, Ea)
    ]),
    _: 1
  }, 8, ["items", "onSlideChange"]);
}
const Zh = /* @__PURE__ */ O(Oa, [["render", ja]]), Ia = {
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
function za(e, n, t, s, o, i) {
  return u(), d("li", {
    class: m(["slideshow__slide", { "is-active": t.active }])
  }, [
    g(e.$slots, "default")
  ], 2);
}
const Jh = /* @__PURE__ */ O(Ia, [["render", za]]), Ma = {
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
}, Ua = ["id"], Ba = ["innerHTML"];
function Pa(e, n, t, s, o, i) {
  return u(!0), d(R, null, x(t.rows, (r, l) => (u(), d("tr", {
    key: `br-${l}`,
    id: t.optionalAttr(t.isActual && r.id),
    class: m(t.resolveClasses(t.classes.row, { row: r.data, rowIndex: l, isActual: t.isActual, foot: t.foot })),
    style: F({
      height: r.height
    })
  }, [
    (u(!0), d(R, null, x(t.rowColumns, (a, c) => (u(), _(P(a.rowHeader ? "th" : "td"), {
      id: t.optionalAttr(t.isActual && a.rowHeader && a.getRowHeaderId(l)),
      scope: t.optionalAttr(t.isActual && a.rowHeader && "row"),
      key: `bc-${c}`,
      headers: t.optionalAttr(t.isActual && t.getCellHeaders(a, l)),
      class: m(t.resolveClasses(a.class, { column: a, index: c, isActual: t.isActual, row: r, rowIndex: l, foot: t.foot })),
      style: F({
        width: t.columnWidth
      })
    }, {
      default: S(() => [
        e.$slots[a.slot] ? g(e.$slots, a.slot, {
          key: 0,
          row: r.data,
          column: a,
          rowIndex: l,
          index: c,
          foot: t.foot,
          isActual: t.isActual
        }) : a.html ? (u(), d("div", {
          key: 1,
          innerHTML: t.value({ row: r, column: a, rowIndex: l, isActual: t.isActual, foot: t.foot })
        }, null, 8, Ba)) : (u(), d(R, { key: 2 }, [
          $(b(t.value({ row: r, column: a, rowIndex: l, isActual: t.isActual, foot: t.foot })), 1)
        ], 64))
      ]),
      _: 2
    }, 1032, ["id", "scope", "headers", "class", "style"]))), 128))
  ], 14, Ua))), 128);
}
const La = /* @__PURE__ */ O(Ma, [["render", Pa]]), Va = {
  name: "UluTableStickyTable",
  components: {
    UluTableStickyRows: La
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
      const { id: o } = e, i = t[o];
      i && this.$emit("actual-header-removed", i), this.$emit("actual-header-added", n), t[o] = n;
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
      const t = e.headers.join(" "), s = e.getRowHeaders(n), o = s.length ? " " : "";
      return `${t}${o}${s}`;
    },
    getHeaderHeaders(e) {
      const n = e.headers.filter((t) => t !== e.id);
      if (n.length)
        return n.join(" ");
    }
  }
}, Fa = ["aria-hidden"], Ha = {
  key: 0,
  class: "table-sticky__caption"
}, Na = ["id"], Da = ["id", "rowspan", "colspan", "data-child-columns", "aria-sort", "scope", "headers"], Wa = ["innerHTML"], Xa = {
  class: "table-sticky__sort-icon",
  "aria-hidden": "true"
}, Ya = { class: "table-sticky__sort-icon-inner" }, qa = ["innerHTML"], Ga = { key: 1 }, Ka = { key: 2 };
function Za(e, n, t, s, o, i) {
  const r = H("UluTableStickyRows");
  return u(), d("table", {
    class: m(t.resolveClasses(t.classes.table, { isActual: t.isActual })),
    "aria-hidden": t.isActual ? "false" : "true"
  }, [
    t.caption ? (u(), d("caption", Ha, b(t.caption), 1)) : p("", !0),
    h("thead", null, [
      (u(!0), d(R, null, x(t.headerRows, (l, a) => (u(), d("tr", {
        key: `hr-${a}`,
        id: i.optionalAttr(t.isActual && l.id),
        class: m(t.resolveClasses(t.classes.rowHeader, { row: l, rowIndex: a, isActual: t.isActual })),
        style: F({
          height: l.height
        })
      }, [
        (u(!0), d(R, null, x(l.columns, (c, f) => (u(), d("th", {
          key: `hc-${f}`,
          id: i.optionalAttr(t.isActual && c.id),
          rowspan: c.rowspan,
          colspan: c.colspan,
          "data-child-columns": c.columns && c.columns.length,
          class: m([
            {
              "sort-active": c.sortApplied,
              "sort-ascending": c.sortApplied && c.sortAscending,
              "sort-descending": c.sortApplied && !c.sortAscending
            },
            t.resolveClasses(c.classHeader, { column: c, index: f, isActual: t.isActual })
          ]),
          style: F({
            width: c.width
          }),
          "aria-sort": c.sort ? c.sortAscending ? "ascending" : "descending" : null,
          scope: i.optionalAttr(t.isActual && (c.colspan > 1 ? "colgroup" : "col")),
          headers: i.optionalAttr(t.isActual && i.getHeaderHeaders(c, a)),
          ref_for: !0,
          ref: (y) => i.addHeaderRef(c, y)
        }, [
          c.sortable ? (u(), _(P(t.isActual ? "button" : "div"), {
            key: 0,
            class: m(["table-sticky__sort-button", {
              "table-sticky__sort-button--focused": c.sortFocused
            }]),
            onClick: (y) => e.$emit("column-sorted", c),
            onFocus: (y) => i.handleSortFocus(c, !0),
            onBlur: (y) => i.handleSortFocus(c, !1),
            "aria-pressed": c.sortApplied ? "true" : "false"
          }, {
            default: S(() => [
              e.$slots[c.slotHeader] ? g(e.$slots, c.slotHeader, {
                key: 0,
                isActual: t.isActual,
                column: c,
                index: f
              }) : c.htmlTitle ? (u(), d("div", {
                key: 1,
                innerHTML: t.getColumnTitle({ column: c, index: f, isActual: t.isActual })
              }, null, 8, Wa)) : (u(), d(R, { key: 2 }, [
                $(b(t.getColumnTitle({ column: c, index: f, isActual: t.isActual })), 1)
              ], 64)),
              h("span", Xa, [
                h("span", Ya, [
                  g(e.$slots, "sortIcon", {}, () => [
                    n[0] || (n[0] = $("▼", -1))
                  ])
                ])
              ])
            ]),
            _: 2
          }, 1064, ["class", "onClick", "onFocus", "onBlur", "aria-pressed"])) : (u(), d(R, { key: 1 }, [
            e.$slots[c.slotHeader] ? g(e.$slots, c.slotHeader, {
              key: 0,
              isActual: t.isActual,
              column: c,
              index: f
            }) : c.htmlTitle ? (u(), d("div", {
              key: 1,
              innerHTML: t.getColumnTitle({ column: c, index: f, isActual: t.isActual })
            }, null, 8, qa)) : (u(), d(R, { key: 2 }, [
              $(b(t.getColumnTitle({ column: c, index: f, isActual: t.isActual })), 1)
            ], 64))
          ], 64))
        ], 14, Da))), 128))
      ], 14, Na))), 128))
    ]),
    t.rows ? (u(), d("tbody", Ga, [
      z(r, {
        rows: t.rows,
        rowColumns: t.rowColumns,
        optionalAttr: i.optionalAttr,
        resolveClasses: t.resolveClasses,
        getCellHeaders: i.getCellHeaders,
        isActual: t.isActual,
        columnWidth: t.columnWidth,
        classes: t.classes,
        value: i.value
      }, Ae({ _: 2 }, [
        x(e.$slots, (l, a) => ({
          name: a,
          fn: S((c) => [
            g(e.$slots, a, Q(ee(c)))
          ])
        }))
      ]), 1032, ["rows", "rowColumns", "optionalAttr", "resolveClasses", "getCellHeaders", "isActual", "columnWidth", "classes", "value"])
    ])) : p("", !0),
    t.footerRows ? (u(), d("tfoot", Ka, [
      z(r, {
        rows: t.footerRows,
        rowColumns: t.rowColumns,
        optionalAttr: i.optionalAttr,
        resolveClasses: t.resolveClasses,
        getCellHeaders: i.getCellHeaders,
        isActual: t.isActual,
        columnWidth: t.columnWidth,
        classes: t.classes,
        value: i.value,
        foot: ""
      }, Ae({ _: 2 }, [
        x(e.$slots, (l, a) => ({
          name: a,
          fn: S((c) => [
            g(e.$slots, a, Q(ee(c)))
          ])
        }))
      ]), 1032, ["rows", "rowColumns", "optionalAttr", "resolveClasses", "getCellHeaders", "isActual", "columnWidth", "classes", "value"])
    ])) : p("", !0)
  ], 10, Fa);
}
const Ja = /* @__PURE__ */ O(Va, [["render", Za]]);
function Qa() {
  this.__data__ = [], this.size = 0;
}
function $s(e, n) {
  return e === n || e !== e && n !== n;
}
function bt(e, n) {
  for (var t = e.length; t--; )
    if ($s(e[t][0], n))
      return t;
  return -1;
}
var ec = Array.prototype, tc = ec.splice;
function nc(e) {
  var n = this.__data__, t = bt(n, e);
  if (t < 0)
    return !1;
  var s = n.length - 1;
  return t == s ? n.pop() : tc.call(n, t, 1), --this.size, !0;
}
function sc(e) {
  var n = this.__data__, t = bt(n, e);
  return t < 0 ? void 0 : n[t][1];
}
function oc(e) {
  return bt(this.__data__, e) > -1;
}
function ic(e, n) {
  var t = this.__data__, s = bt(t, e);
  return s < 0 ? (++this.size, t.push([e, n])) : t[s][1] = n, this;
}
function re(e) {
  var n = -1, t = e == null ? 0 : e.length;
  for (this.clear(); ++n < t; ) {
    var s = e[n];
    this.set(s[0], s[1]);
  }
}
re.prototype.clear = Qa;
re.prototype.delete = nc;
re.prototype.get = sc;
re.prototype.has = oc;
re.prototype.set = ic;
function rc() {
  this.__data__ = new re(), this.size = 0;
}
function lc(e) {
  var n = this.__data__, t = n.delete(e);
  return this.size = n.size, t;
}
function ac(e) {
  return this.__data__.get(e);
}
function cc(e) {
  return this.__data__.has(e);
}
var Cs = typeof global == "object" && global && global.Object === Object && global, uc = typeof self == "object" && self && self.Object === Object && self, te = Cs || uc || Function("return this")(), Ee = te.Symbol, Ts = Object.prototype, dc = Ts.hasOwnProperty, fc = Ts.toString, Ue = Ee ? Ee.toStringTag : void 0;
function hc(e) {
  var n = dc.call(e, Ue), t = e[Ue];
  try {
    e[Ue] = void 0;
    var s = !0;
  } catch {
  }
  var o = fc.call(e);
  return s && (n ? e[Ue] = t : delete e[Ue]), o;
}
var mc = Object.prototype, gc = mc.toString;
function vc(e) {
  return gc.call(e);
}
var yc = "[object Null]", pc = "[object Undefined]", kn = Ee ? Ee.toStringTag : void 0;
function qe(e) {
  return e == null ? e === void 0 ? pc : yc : kn && kn in Object(e) ? hc(e) : vc(e);
}
function _t(e) {
  var n = typeof e;
  return e != null && (n == "object" || n == "function");
}
var bc = "[object AsyncFunction]", _c = "[object Function]", wc = "[object GeneratorFunction]", Sc = "[object Proxy]";
function As(e) {
  if (!_t(e))
    return !1;
  var n = qe(e);
  return n == _c || n == wc || n == bc || n == Sc;
}
var At = te["__core-js_shared__"], $n = function() {
  var e = /[^.]+$/.exec(At && At.keys && At.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function kc(e) {
  return !!$n && $n in e;
}
var $c = Function.prototype, Cc = $c.toString;
function _e(e) {
  if (e != null) {
    try {
      return Cc.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var Tc = /[\\^$.*+?()[\]{}|]/g, Ac = /^\[object .+?Constructor\]$/, Oc = Function.prototype, xc = Object.prototype, Rc = Oc.toString, Ec = xc.hasOwnProperty, jc = RegExp(
  "^" + Rc.call(Ec).replace(Tc, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Ic(e) {
  if (!_t(e) || kc(e))
    return !1;
  var n = As(e) ? jc : Ac;
  return n.test(_e(e));
}
function zc(e, n) {
  return e?.[n];
}
function we(e, n) {
  var t = zc(e, n);
  return Ic(t) ? t : void 0;
}
var Xe = we(te, "Map"), Ye = we(Object, "create");
function Mc() {
  this.__data__ = Ye ? Ye(null) : {}, this.size = 0;
}
function Uc(e) {
  var n = this.has(e) && delete this.__data__[e];
  return this.size -= n ? 1 : 0, n;
}
var Bc = "__lodash_hash_undefined__", Pc = Object.prototype, Lc = Pc.hasOwnProperty;
function Vc(e) {
  var n = this.__data__;
  if (Ye) {
    var t = n[e];
    return t === Bc ? void 0 : t;
  }
  return Lc.call(n, e) ? n[e] : void 0;
}
var Fc = Object.prototype, Hc = Fc.hasOwnProperty;
function Nc(e) {
  var n = this.__data__;
  return Ye ? n[e] !== void 0 : Hc.call(n, e);
}
var Dc = "__lodash_hash_undefined__";
function Wc(e, n) {
  var t = this.__data__;
  return this.size += this.has(e) ? 0 : 1, t[e] = Ye && n === void 0 ? Dc : n, this;
}
function pe(e) {
  var n = -1, t = e == null ? 0 : e.length;
  for (this.clear(); ++n < t; ) {
    var s = e[n];
    this.set(s[0], s[1]);
  }
}
pe.prototype.clear = Mc;
pe.prototype.delete = Uc;
pe.prototype.get = Vc;
pe.prototype.has = Nc;
pe.prototype.set = Wc;
function Xc() {
  this.size = 0, this.__data__ = {
    hash: new pe(),
    map: new (Xe || re)(),
    string: new pe()
  };
}
function Yc(e) {
  var n = typeof e;
  return n == "string" || n == "number" || n == "symbol" || n == "boolean" ? e !== "__proto__" : e === null;
}
function wt(e, n) {
  var t = e.__data__;
  return Yc(n) ? t[typeof n == "string" ? "string" : "hash"] : t.map;
}
function qc(e) {
  var n = wt(this, e).delete(e);
  return this.size -= n ? 1 : 0, n;
}
function Gc(e) {
  return wt(this, e).get(e);
}
function Kc(e) {
  return wt(this, e).has(e);
}
function Zc(e, n) {
  var t = wt(this, e), s = t.size;
  return t.set(e, n), this.size += t.size == s ? 0 : 1, this;
}
function Ie(e) {
  var n = -1, t = e == null ? 0 : e.length;
  for (this.clear(); ++n < t; ) {
    var s = e[n];
    this.set(s[0], s[1]);
  }
}
Ie.prototype.clear = Xc;
Ie.prototype.delete = qc;
Ie.prototype.get = Gc;
Ie.prototype.has = Kc;
Ie.prototype.set = Zc;
var Jc = 200;
function Qc(e, n) {
  var t = this.__data__;
  if (t instanceof re) {
    var s = t.__data__;
    if (!Xe || s.length < Jc - 1)
      return s.push([e, n]), this.size = ++t.size, this;
    t = this.__data__ = new Ie(s);
  }
  return t.set(e, n), this.size = t.size, this;
}
function ze(e) {
  var n = this.__data__ = new re(e);
  this.size = n.size;
}
ze.prototype.clear = rc;
ze.prototype.delete = lc;
ze.prototype.get = ac;
ze.prototype.has = cc;
ze.prototype.set = Qc;
function eu(e, n) {
  for (var t = -1, s = e == null ? 0 : e.length; ++t < s && n(e[t], t, e) !== !1; )
    ;
  return e;
}
var Cn = function() {
  try {
    var e = we(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}();
function tu(e, n, t) {
  n == "__proto__" && Cn ? Cn(e, n, {
    configurable: !0,
    enumerable: !0,
    value: t,
    writable: !0
  }) : e[n] = t;
}
var nu = Object.prototype, su = nu.hasOwnProperty;
function ou(e, n, t) {
  var s = e[n];
  (!(su.call(e, n) && $s(s, t)) || t === void 0 && !(n in e)) && tu(e, n, t);
}
function iu(e, n) {
  for (var t = -1, s = Array(e); ++t < e; )
    s[t] = n(t);
  return s;
}
function Ge(e) {
  return e != null && typeof e == "object";
}
var ru = "[object Arguments]";
function Tn(e) {
  return Ge(e) && qe(e) == ru;
}
var Os = Object.prototype, lu = Os.hasOwnProperty, au = Os.propertyIsEnumerable, cu = Tn(/* @__PURE__ */ function() {
  return arguments;
}()) ? Tn : function(e) {
  return Ge(e) && lu.call(e, "callee") && !au.call(e, "callee");
}, sn = Array.isArray;
function uu() {
  return !1;
}
var xs = typeof exports == "object" && exports && !exports.nodeType && exports, An = xs && typeof module == "object" && module && !module.nodeType && module, du = An && An.exports === xs, On = du ? te.Buffer : void 0, fu = On ? On.isBuffer : void 0, Rs = fu || uu, hu = 9007199254740991, mu = /^(?:0|[1-9]\d*)$/;
function gu(e, n) {
  var t = typeof e;
  return n = n ?? hu, !!n && (t == "number" || t != "symbol" && mu.test(e)) && e > -1 && e % 1 == 0 && e < n;
}
var vu = 9007199254740991;
function Es(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= vu;
}
var yu = "[object Arguments]", pu = "[object Array]", bu = "[object Boolean]", _u = "[object Date]", wu = "[object Error]", Su = "[object Function]", ku = "[object Map]", $u = "[object Number]", Cu = "[object Object]", Tu = "[object RegExp]", Au = "[object Set]", Ou = "[object String]", xu = "[object WeakMap]", Ru = "[object ArrayBuffer]", Eu = "[object DataView]", ju = "[object Float32Array]", Iu = "[object Float64Array]", zu = "[object Int8Array]", Mu = "[object Int16Array]", Uu = "[object Int32Array]", Bu = "[object Uint8Array]", Pu = "[object Uint8ClampedArray]", Lu = "[object Uint16Array]", Vu = "[object Uint32Array]", B = {};
B[ju] = B[Iu] = B[zu] = B[Mu] = B[Uu] = B[Bu] = B[Pu] = B[Lu] = B[Vu] = !0;
B[yu] = B[pu] = B[Ru] = B[bu] = B[Eu] = B[_u] = B[wu] = B[Su] = B[ku] = B[$u] = B[Cu] = B[Tu] = B[Au] = B[Ou] = B[xu] = !1;
function Fu(e) {
  return Ge(e) && Es(e.length) && !!B[qe(e)];
}
function on(e) {
  return function(n) {
    return e(n);
  };
}
var js = typeof exports == "object" && exports && !exports.nodeType && exports, Fe = js && typeof module == "object" && module && !module.nodeType && module, Hu = Fe && Fe.exports === js, Ot = Hu && Cs.process, je = function() {
  try {
    var e = Fe && Fe.require && Fe.require("util").types;
    return e || Ot && Ot.binding && Ot.binding("util");
  } catch {
  }
}(), xn = je && je.isTypedArray, Nu = xn ? on(xn) : Fu, Du = Object.prototype, Wu = Du.hasOwnProperty;
function Xu(e, n) {
  var t = sn(e), s = !t && cu(e), o = !t && !s && Rs(e), i = !t && !s && !o && Nu(e), r = t || s || o || i, l = r ? iu(e.length, String) : [], a = l.length;
  for (var c in e)
    Wu.call(e, c) && !(r && // Safari 9 has enumerable `arguments.length` in strict mode.
    (c == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    o && (c == "offset" || c == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    i && (c == "buffer" || c == "byteLength" || c == "byteOffset") || // Skip index properties.
    gu(c, a))) && l.push(c);
  return l;
}
var Yu = Object.prototype;
function Is(e) {
  var n = e && e.constructor, t = typeof n == "function" && n.prototype || Yu;
  return e === t;
}
function zs(e, n) {
  return function(t) {
    return e(n(t));
  };
}
var qu = zs(Object.keys, Object), Gu = Object.prototype, Ku = Gu.hasOwnProperty;
function Zu(e) {
  if (!Is(e))
    return qu(e);
  var n = [];
  for (var t in Object(e))
    Ku.call(e, t) && t != "constructor" && n.push(t);
  return n;
}
function Ju(e) {
  return e != null && Es(e.length) && !As(e);
}
function Qu(e) {
  return Ju(e) ? Xu(e) : Zu(e);
}
var Ms = typeof exports == "object" && exports && !exports.nodeType && exports, Rn = Ms && typeof module == "object" && module && !module.nodeType && module, ed = Rn && Rn.exports === Ms, En = ed ? te.Buffer : void 0;
En && En.allocUnsafe;
function td(e, n) {
  return e.slice();
}
function nd(e, n) {
  for (var t = -1, s = e == null ? 0 : e.length, o = 0, i = []; ++t < s; ) {
    var r = e[t];
    n(r, t, e) && (i[o++] = r);
  }
  return i;
}
function sd() {
  return [];
}
var od = Object.prototype, id = od.propertyIsEnumerable, jn = Object.getOwnPropertySymbols, rd = jn ? function(e) {
  return e == null ? [] : (e = Object(e), nd(jn(e), function(n) {
    return id.call(e, n);
  }));
} : sd;
function ld(e, n) {
  for (var t = -1, s = n.length, o = e.length; ++t < s; )
    e[o + t] = n[t];
  return e;
}
var ad = zs(Object.getPrototypeOf, Object);
function cd(e, n, t) {
  var s = n(e);
  return sn(e) ? s : ld(s, t(e));
}
function ud(e) {
  return cd(e, Qu, rd);
}
var Pt = we(te, "DataView"), Lt = we(te, "Promise"), Vt = we(te, "Set"), Ft = we(te, "WeakMap"), In = "[object Map]", dd = "[object Object]", zn = "[object Promise]", Mn = "[object Set]", Un = "[object WeakMap]", Bn = "[object DataView]", fd = _e(Pt), hd = _e(Xe), md = _e(Lt), gd = _e(Vt), vd = _e(Ft), se = qe;
(Pt && se(new Pt(new ArrayBuffer(1))) != Bn || Xe && se(new Xe()) != In || Lt && se(Lt.resolve()) != zn || Vt && se(new Vt()) != Mn || Ft && se(new Ft()) != Un) && (se = function(e) {
  var n = qe(e), t = n == dd ? e.constructor : void 0, s = t ? _e(t) : "";
  if (s)
    switch (s) {
      case fd:
        return Bn;
      case hd:
        return In;
      case md:
        return zn;
      case gd:
        return Mn;
      case vd:
        return Un;
    }
  return n;
});
var yd = Object.prototype, pd = yd.hasOwnProperty;
function bd(e) {
  var n = e.length, t = new e.constructor(n);
  return n && typeof e[0] == "string" && pd.call(e, "index") && (t.index = e.index, t.input = e.input), t;
}
var Pn = te.Uint8Array;
function rn(e) {
  var n = new e.constructor(e.byteLength);
  return new Pn(n).set(new Pn(e)), n;
}
function _d(e, n) {
  var t = rn(e.buffer);
  return new e.constructor(t, e.byteOffset, e.byteLength);
}
var wd = /\w*$/;
function Sd(e) {
  var n = new e.constructor(e.source, wd.exec(e));
  return n.lastIndex = e.lastIndex, n;
}
var Ln = Ee ? Ee.prototype : void 0, Vn = Ln ? Ln.valueOf : void 0;
function kd(e) {
  return Vn ? Object(Vn.call(e)) : {};
}
function $d(e, n) {
  var t = rn(e.buffer);
  return new e.constructor(t, e.byteOffset, e.length);
}
var Cd = "[object Boolean]", Td = "[object Date]", Ad = "[object Map]", Od = "[object Number]", xd = "[object RegExp]", Rd = "[object Set]", Ed = "[object String]", jd = "[object Symbol]", Id = "[object ArrayBuffer]", zd = "[object DataView]", Md = "[object Float32Array]", Ud = "[object Float64Array]", Bd = "[object Int8Array]", Pd = "[object Int16Array]", Ld = "[object Int32Array]", Vd = "[object Uint8Array]", Fd = "[object Uint8ClampedArray]", Hd = "[object Uint16Array]", Nd = "[object Uint32Array]";
function Dd(e, n, t) {
  var s = e.constructor;
  switch (n) {
    case Id:
      return rn(e);
    case Cd:
    case Td:
      return new s(+e);
    case zd:
      return _d(e);
    case Md:
    case Ud:
    case Bd:
    case Pd:
    case Ld:
    case Vd:
    case Fd:
    case Hd:
    case Nd:
      return $d(e);
    case Ad:
      return new s();
    case Od:
    case Ed:
      return new s(e);
    case xd:
      return Sd(e);
    case Rd:
      return new s();
    case jd:
      return kd(e);
  }
}
var Fn = Object.create, Wd = /* @__PURE__ */ function() {
  function e() {
  }
  return function(n) {
    if (!_t(n))
      return {};
    if (Fn)
      return Fn(n);
    e.prototype = n;
    var t = new e();
    return e.prototype = void 0, t;
  };
}();
function Xd(e) {
  return typeof e.constructor == "function" && !Is(e) ? Wd(ad(e)) : {};
}
var Yd = "[object Map]";
function qd(e) {
  return Ge(e) && se(e) == Yd;
}
var Hn = je && je.isMap, Gd = Hn ? on(Hn) : qd, Kd = "[object Set]";
function Zd(e) {
  return Ge(e) && se(e) == Kd;
}
var Nn = je && je.isSet, Jd = Nn ? on(Nn) : Zd, Us = "[object Arguments]", Qd = "[object Array]", ef = "[object Boolean]", tf = "[object Date]", nf = "[object Error]", Bs = "[object Function]", sf = "[object GeneratorFunction]", of = "[object Map]", rf = "[object Number]", Ps = "[object Object]", lf = "[object RegExp]", af = "[object Set]", cf = "[object String]", uf = "[object Symbol]", df = "[object WeakMap]", ff = "[object ArrayBuffer]", hf = "[object DataView]", mf = "[object Float32Array]", gf = "[object Float64Array]", vf = "[object Int8Array]", yf = "[object Int16Array]", pf = "[object Int32Array]", bf = "[object Uint8Array]", _f = "[object Uint8ClampedArray]", wf = "[object Uint16Array]", Sf = "[object Uint32Array]", M = {};
M[Us] = M[Qd] = M[ff] = M[hf] = M[ef] = M[tf] = M[mf] = M[gf] = M[vf] = M[yf] = M[pf] = M[of] = M[rf] = M[Ps] = M[lf] = M[af] = M[cf] = M[uf] = M[bf] = M[_f] = M[wf] = M[Sf] = !0;
M[nf] = M[Bs] = M[df] = !1;
function ot(e, n, t, s, o, i) {
  var r;
  if (r !== void 0)
    return r;
  if (!_t(e))
    return e;
  var l = sn(e);
  if (l)
    r = bd(e);
  else {
    var a = se(e), c = a == Bs || a == sf;
    if (Rs(e))
      return td(e);
    if (a == Ps || a == Us || c && !o)
      r = c ? {} : Xd(e);
    else {
      if (!M[a])
        return o ? e : {};
      r = Dd(e, a);
    }
  }
  i || (i = new ze());
  var f = i.get(e);
  if (f)
    return f;
  i.set(e, r), Jd(e) ? e.forEach(function(k) {
    r.add(ot(k, n, t, k, e, i));
  }) : Gd(e) && e.forEach(function(k, E) {
    r.set(E, ot(k, n, t, E, e, i));
  });
  var y = ud, v = l ? void 0 : y(e);
  return eu(v || e, function(k, E) {
    v && (E = k, k = e[E]), ou(r, E, ot(k, n, t, E, e, i));
  }), r;
}
var kf = 1, $f = 4;
function Cf(e) {
  return ot(e, kf | $f);
}
const xt = (e) => e.every((n) => typeof n == "object"), Dn = !0, Ls = () => window.innerWidth;
let Wn = Ls();
const Tf = {
  name: "UluTableSticky",
  components: {
    UluTableStickyTable: Ja
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
      required: Dn
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
      validator: xt,
      required: Dn
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
      validator: xt
      // required
    },
    /**
     * Array of rows for footer (tfoot)
     */
    footerRows: {
      type: Array,
      validator: xt
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
      resizeHandler: mt(this.onResize.bind(this), 500, !0),
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
      const e = this.currentColumns, n = [], t = (o) => {
        o.columns ? o.columns.forEach(t) : n.push(o);
      };
      e.forEach(t);
      let s = [];
      return n.forEach((o, i) => {
        const r = s.slice();
        o.getRowHeaders = (l) => r.map((a) => a(l)).join(" "), o.rowHeader && (o.getRowHeaderId = (l) => `${this.idPrefix}-rh-${l}-${i}`, s.push(o.getRowHeaderId));
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
      const e = this.idCreator("c"), n = Cf(this.columns), t = (s, o) => {
        s.id = e(), s.parent = o, s.width = "auto", s.boxWidth = null, s.sortApplied = !1, s.sortAscending = !1, s.sortFocused = !1;
        let i = [];
        o && (o.headers && o.headers.length ? i = [...o.headers] : i.push(o.id)), i.push(s.id), s.headers = i, s.columns ? s.columns.forEach((r) => t(r, s)) : !s.key && !s.value && !s.slot && console.warn("UluTableSticky: Missing 'key', 'value' or 'slot' in column configuration for", s);
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
      const n = this.idCreator("hr"), t = e.reduce(this.maxColumnChildren, 1), s = "auto", o = new Array(t).fill(null).map(() => ({
        height: s,
        boxHeight: null,
        columns: [],
        id: n()
      }));
      function i(r, l) {
        const a = l.columns;
        a && a.forEach((c) => i(1 + r, c)), l.rowspan = a ? 1 : t - r, l.colspan = a ? a.reduce((c, f) => c + f.colspan, 0) : 1, o[r].columns.push(l);
      }
      return e.forEach((r) => i(0, r)), o;
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
      const e = Ls();
      Wn !== e && (Wn = e, this.resizing ? (this.resizing = !1, this.setTableSizes(), this.checkOverflowX(), this.syncScrollLeft()) : (this.resizing = !0, this.removeTableSizes()));
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
      const e = this.$refs.display, n = e.scrollWidth, t = e.scrollLeft, s = this.scrollControlAmount, o = t + s;
      e.scroll({
        left: o > n ? e.scrollWidth : o,
        behavior: "smooth"
      });
    },
    /**
     * Cleanup function for when component is not in use
     */
    setTableSizes() {
      const e = (s, o) => Math.ceil(s.getBoundingClientRect()[o]);
      this.tableWidth = `${e(this.$refs.table.$el, "width")}px`;
      const n = (s) => document.getElementById(s.id), t = (s) => {
        const o = n(s);
        o && (s.boxHeight = e(o, "height"), s.height = `${s.boxHeight}px`);
      };
      this.headerRows.forEach((s) => {
        t(s), s.columns.forEach((o) => {
          const i = n(o);
          i && (o.boxWidth = e(i, "width"), o.width = `${o.boxWidth}px`);
        });
      }), this.firstColumnSticky && (this.currentRows.forEach((s) => t(s)), this.currentFooterRows.forEach((s) => t(s))), this.$nextTick(() => {
        this.sizesCalculated = !0, ks(() => {
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
}, Af = { class: "table-sticky__sticky-wrap table-sticky__sticky-wrap--header" }, Of = { class: "table-sticky__header-wrap" }, xf = { class: "table-sticky__sticky-wrap table-sticky__sticky-wrap--first-column-header" }, Rf = { class: "table-sticky__sticky-wrap table-sticky__sticky-wrap--controls" }, Ef = {
  key: 2,
  class: "table-sticky__controls-inner"
}, jf = ["disabled"], If = ["disabled"], zf = {
  ref: "display",
  class: "table-sticky__display"
};
function Mf(e, n, t, s, o, i) {
  const r = H("UluTableStickyTable");
  return u(), d("div", {
    class: m(["table-sticky", {
      "table-sticky--overflown-x": o.overflownX,
      "table-sticky--can-scroll-right": o.canScrollRight,
      "table-sticky--can-scroll-left": o.canScrollLeft
    }])
  }, [
    h("div", Af, [
      h("div", Of, [
        z(r, {
          ref: "header",
          class: "table-sticky__table table-sticky__table--header",
          classes: t.classes,
          caption: t.caption,
          resolveClasses: i.resolveClasses,
          getColumnTitle: t.getColumnTitle,
          idPrefix: t.idPrefix,
          headerRows: o.headerRows,
          style: F({
            opacity: o.sizesCalculated ? "1" : "0",
            pointerEvents: o.sizesCalculated ? "auto" : "none",
            width: o.tableWidth
          }),
          onColumnSorted: i.applySort
        }, Ae({ _: 2 }, [
          x(e.$slots, (l, a) => ({
            name: a,
            fn: S((c) => [
              g(e.$slots, a, Q(ee(c)))
            ])
          }))
        ]), 1032, ["classes", "caption", "resolveClasses", "getColumnTitle", "idPrefix", "headerRows", "style", "onColumnSorted"])
      ])
    ]),
    h("div", xf, [
      t.firstColumnSticky ? (u(), _(r, {
        key: 0,
        ref: "firstColumnHeader",
        class: "table-sticky__table table-sticky__table--first-column-header",
        classes: t.classes,
        caption: t.caption,
        resolveClasses: i.resolveClasses,
        getColumnTitle: t.getColumnTitle,
        idPrefix: t.idPrefix,
        headerRows: i.headerRowsFirst,
        style: F({
          opacity: i.headerOpacityX,
          pointerEvents: i.headerVisibleX ? "auto" : "none"
        }),
        onColumnSorted: i.applySort
      }, Ae({ _: 2 }, [
        x(e.$slots, (l, a) => ({
          name: a,
          fn: S((c) => [
            g(e.$slots, a, Q(ee(c)))
          ])
        }))
      ]), 1032, ["classes", "caption", "resolveClasses", "getColumnTitle", "idPrefix", "headerRows", "style", "onColumnSorted"])) : p("", !0)
    ]),
    h("div", Rf, [
      Oe(h("div", {
        class: m(["table-sticky__controls", i.resolveClasses(t.classes.controls)]),
        ref: "controls"
      }, [
        e.$slots.controls ? g(e.$slots, "controls", {
          key: 0,
          scrollLeft: i.scrollLeft,
          scrollRight: i.scrollRight,
          canScrollLeft: o.canScrollLeft,
          canScrollRight: o.canScrollRight
        }) : t.controlsComponent ? (u(), _(P(t.controlsComponent), {
          key: 1,
          scrollLeft: i.scrollLeft,
          scrollRight: i.scrollRight,
          canScrollLeft: o.canScrollLeft,
          canScrollRight: o.canScrollRight
        }, null, 8, ["scrollLeft", "scrollRight", "canScrollLeft", "canScrollRight"])) : (u(), d("div", Ef, [
          h("button", {
            class: m(["table-sticky__control table-sticky__control--left", i.resolveClasses(t.classes.controlButton)]),
            "aria-label": "Scroll Left",
            onClick: n[0] || (n[0] = (...l) => i.scrollLeft && i.scrollLeft(...l)),
            disabled: !o.canScrollLeft
          }, [
            g(e.$slots, "controlLeft", {}, () => [
              n[2] || (n[2] = $(" ← ", -1))
            ])
          ], 10, jf),
          h("button", {
            class: m(["table-sticky__control table-sticky__control--right", i.resolveClasses(t.classes.controlButton)]),
            "aria-label": "Scroll Right",
            onClick: n[1] || (n[1] = (...l) => i.scrollRight && i.scrollRight(...l)),
            disabled: !o.canScrollRight
          }, [
            g(e.$slots, "controlRight", {}, () => [
              n[3] || (n[3] = $(" → ", -1))
            ])
          ], 10, If)
        ]))
      ], 2), [
        [Rt, i.controlsShown]
      ])
    ]),
    h("div", zf, [
      z(r, {
        ref: "table",
        class: "table-sticky__table table-sticky__table--actual",
        classes: t.classes,
        resolveClasses: i.resolveClasses,
        isActual: "",
        headerRows: o.headerRows,
        rows: o.currentRows,
        footerRows: o.currentFooterRows,
        rowColumns: i.rowColumns,
        caption: t.caption,
        idPrefix: t.idPrefix,
        getRowValue: t.getRowValue,
        getColumnTitle: t.getColumnTitle,
        onVnodeMounted: i.tableReady,
        onActualHeaderRemoved: i.headerRemoved,
        onActualHeaderAdded: i.headerAdded,
        onColumnSorted: i.applySort
      }, Ae({ _: 2 }, [
        x(e.$slots, (l, a) => ({
          name: a,
          fn: S((c) => [
            g(e.$slots, a, Q(ee(c)))
          ])
        }))
      ]), 1032, ["classes", "resolveClasses", "headerRows", "rows", "footerRows", "rowColumns", "caption", "idPrefix", "getRowValue", "getColumnTitle", "onVnodeMounted", "onActualHeaderRemoved", "onActualHeaderAdded", "onColumnSorted"])
    ], 512),
    t.firstColumnSticky ? (u(), _(r, {
      key: 0,
      ref: "firstColumn",
      class: "table-sticky__table table-sticky__table--first-column",
      classes: t.classes,
      resolveClasses: i.resolveClasses,
      caption: t.caption,
      headerRows: i.headerRowsFirst,
      columnWidth: i.firstColumnSize.width,
      rows: o.currentRows,
      footerRows: o.currentFooterRows,
      rowColumns: i.rowColumnsFirst,
      idPrefix: t.idPrefix,
      getRowValue: t.getRowValue,
      getColumnTitle: t.getColumnTitle,
      style: F({
        opacity: i.headerOpacityX,
        pointerEvents: i.headerVisibleX ? "auto" : "none"
      }),
      onColumnSorted: i.applySort
    }, Ae({ _: 2 }, [
      x(e.$slots, (l, a) => ({
        name: a,
        fn: S((c) => [
          g(e.$slots, a, Q(ee(c)))
        ])
      }))
    ]), 1032, ["classes", "resolveClasses", "caption", "headerRows", "columnWidth", "rows", "footerRows", "rowColumns", "idPrefix", "getRowValue", "getColumnTitle", "style", "onColumnSorted"])) : p("", !0)
  ], 2);
}
const Qh = /* @__PURE__ */ O(Tf, [["render", Mf]]), em = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  dom: mi,
  router: Bi
}, Symbol.toStringTag, { value: "Module" }));
export {
  xh as $,
  ch as A,
  N as B,
  uh as C,
  dh as D,
  fh as E,
  gs as F,
  _s as G,
  hh as H,
  mh as I,
  gh as J,
  vh as K,
  yh as L,
  ph as M,
  bh as N,
  _h as O,
  wh as P,
  Sh as Q,
  vs as R,
  wi as S,
  kh as T,
  ls as U,
  $h as V,
  Ch as W,
  Th as X,
  Ah as Y,
  Oh as Z,
  Yf as _,
  et as a,
  Rh as a0,
  Eh as a1,
  jh as a2,
  Ih as a3,
  zh as a4,
  Mh as a5,
  Uh as a6,
  Bh as a7,
  Ph as a8,
  Lh as a9,
  Vh as aa,
  Fh as ab,
  Hh as ac,
  Sn as ad,
  Nh as ae,
  Dh as af,
  Wh as ag,
  Xh as ah,
  Yh as ai,
  Gh as aj,
  Kh as ak,
  ca as al,
  Zh as am,
  Aa as an,
  Jh as ao,
  Qh as ap,
  La as aq,
  Ja as ar,
  To as as,
  he as at,
  ki as au,
  Ci as av,
  Jo as aw,
  Gf as ax,
  Kf as ay,
  Hf as b,
  Nf as c,
  Df as d,
  Wf as e,
  Xf as f,
  Ro as g,
  Ut as h,
  em as i,
  qf as j,
  Zf as k,
  Ce as l,
  Jf as m,
  Qf as n,
  eh as o,
  th as p,
  nh as q,
  qh as r,
  sh as s,
  Zi as t,
  oh as u,
  Ni as v,
  ih as w,
  rh as x,
  lh as y,
  ah as z
};
