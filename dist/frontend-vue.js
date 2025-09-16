import { reactive as Nt, ref as j, computed as _, resolveDirective as Ns, createElementBlock as d, openBlock as u, Fragment as U, withDirectives as xe, createElementVNode as h, unref as C, normalizeClass as m, renderSlot as g, createTextVNode as k, toDisplayString as p, withKeys as Ws, normalizeStyle as N, createCommentVNode as v, nextTick as Ds, toRef as Fn, createBlock as w, Teleport as ut, resolveDynamicComponent as z, mergeProps as J, inject as dt, watchEffect as ft, defineAsyncComponent as Ln, markRaw as Ue, toRefs as Vn, toValue as st, resolveComponent as W, withModifiers as Hn, createVNode as T, useSlots as Xs, renderList as x, TransitionGroup as Gs, withCtx as S, onMounted as ht, onBeforeUnmount as qs, watch as We, isRef as Nn, hasInjectionContext as Wn, getCurrentInstance as Dn, onDeactivated as Xn, onActivated as Gn, onUnmounted as Ys, normalizeProps as le, guardReactiveProps as ie, h as qn, vModelText as Yn, vShow as Bt, createSlots as Oe } from "vue";
import { inline as Ks, offset as Zs, flip as Js, shift as Qs, arrow as en, useFloating as tn, autoUpdate as sn } from "@floating-ui/vue";
import { normalizeClasses as rs } from "@ulu/utils/templating.js";
import { preventScroll as Kn, wasClickOutside as Zn, isBrowser as Jn } from "@ulu/utils/browser/dom.js";
import { Resizer as Qn } from "@ulu/frontend/js/ui/resizer.js";
import { debounce as Wt } from "@ulu/utils/performance.js";
import { useRoute as nn, useRouter as eo, RouterLink as De } from "vue-router";
import { Tab as to, TabGroup as so, TabList as no, TabPanel as oo, TabPanels as lo } from "@headlessui/vue";
import { setPositionClasses as io } from "@ulu/frontend/js/utils/dom.js";
import { randomInt as it } from "@ulu/utils/random.js";
import { PortableText as ao } from "@portabletext/vue";
import ro from "gsap";
import co from "fuse.js";
import { runAfterFramePaint as on } from "@ulu/utils/browser/performance.js";
import { urlize as uo } from "@ulu/utils/string.js";
import { arrayCreate as fo } from "@ulu/utils/array.js";
const cs = {
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
    remove: "fas fa-xmark",
    expand: "fas fa-plus",
    collapse: "fas fa-minus",
    resizeHorizontal: "fas fa-grip-lines-vertical",
    resizeVertical: "fas fa-grip-lines",
    resizeBoth: "fas fa-grip",
    ellipsis: "fas fa-ellipsis",
    pathSeparator: "fas fa-chevron-right",
    image: "fas fa-image",
    file: "fas fa-file",
    previous: "fas fa-chevron-left",
    next: "fas fa-chevron-right",
    dropdownExpand: "fas fa-caret-down"
  }
};
function th(e, s = {}) {
  const t = Nt({ ...cs }), { iconsByType: n, ...o } = s || {};
  o && Object.assign(t, o);
  const l = {
    // Methods to interact with settings
    getSettings() {
      return t;
    },
    getDefaultSettings() {
      return { ...cs };
    },
    updateSettings(i) {
      return Object.assign(t, i);
    },
    getSetting(i) {
      if (!t.hasOwnProperty(i)) {
        console.warn(`Attempted to access non-existent setting: ${i}`);
        return;
      }
      return t[i];
    },
    updateSetting(i, a) {
      if (typeof i != "string")
        throw new Error("Expected key to be string");
      t[i] = a;
    },
    getIcon(i) {
      const a = t.iconsByType;
      if (!a[i])
        throw new Error(`Icon type "${i}" not found!`);
      return a[i];
    },
    setIcon(i, a) {
      t.iconsByType[i] = a;
    }
  };
  if (n)
    for (const [i, a] of Object.entries(n))
      l.setIcon(i, a);
  e.provide("uluCore", l), e.config.globalProperties.$uluCore = l;
}
const tt = {
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
}, ye = {
  plugin: { ...tt.plugin },
  popover: { ...tt.popover },
  tooltip: { ...tt.tooltip, ...tt.popover }
}, Dt = j(!1), Xt = j(null);
function ho(e = {}) {
  return Object.assign(ye.popover, e.popover), Object.assign(ye.tooltip, e.tooltip), Object.assign(ye.plugin, e.plugin), ye;
}
function mo(e) {
  return Object.assign({}, ye.tooltip, e);
}
function go(e) {
  Dt.value = !0, Xt.value = e;
}
function vo() {
  Dt.value = !1, Xt.value = null;
}
const nt = /* @__PURE__ */ new WeakMap(), yo = {
  mounted(e, s) {
    us(e, s);
  },
  beforeUpdate(e) {
    ds(e);
  },
  updated(e, s) {
    us(e, s);
  },
  unmounted(e) {
    ds(e);
  }
};
function us(e, s) {
  const t = po(e, s);
  if (!t) return;
  let n = null;
  const o = () => {
    n || (n = setTimeout(() => {
      go(t), clearTimeout(n);
    }, t.delay));
  }, l = () => {
    n && (clearTimeout(n), n = null), vo();
  };
  t.showEvents.forEach((i) => {
    e.addEventListener(i, o);
  }), t.hideEvents.forEach((i) => {
    e.addEventListener(i, l);
  }), nt.set(e, { onShow: o, onHide: l, config: t });
}
function ds(e) {
  if (!nt.has(e))
    return;
  const { config: s, onShow: t, onHide: n } = nt.get(e);
  s.showEvents.forEach((o) => {
    e.removeEventListener(o, t);
  }), s.hideEvents.forEach((o) => {
    e.removeEventListener(o, n);
  }), nt.delete(e);
}
function po(e, s) {
  const { value: t } = s;
  let n;
  if (!(t === !1 || t === null))
    return typeof t == "object" ? n = t : n = { content: t }, mo(Object.assign({}, { trigger: e }, n));
}
let bo = 0;
function fs() {
  return `ulu-popovers-uid-${++bo}`;
}
const _o = ["id", "disabled", "aria-expanded", "aria-controls", "aria-label"], wo = ["aria-labelledby", "id", "data-placement"], So = { class: "popover__inner" }, ko = {
  key: 0,
  class: "popover__footer"
}, mt = {
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
      default: ({ isOpen: e, content: s }) => {
        e && s.focus({ preventScroll: !0 });
      }
    }
  },
  emits: ["toggle"],
  setup(e, { emit: s }) {
    const t = s, n = e, o = fs(), l = fs(), i = Object.assign({}, ye.popover, n.config), a = j(n.startOpen || !1), c = j(null), r = j(null), f = j(null), b = [
      ...i.inline ? [Ks()] : [],
      ...i.offset ? [Zs(i.offset)] : [],
      Js(),
      Qs(),
      ...i.arrow ? [en({ element: f })] : []
    ], y = {
      placement: i.placement,
      whileElementsMounted: sn,
      middleware: b
    }, {
      floatingStyles: $,
      placement: A,
      middlewareData: M,
      update: R,
      isPositioned: ne
    } = tn(c, r, y), $e = _(() => {
      const X = M.value?.arrow;
      return X ? {
        position: "absolute",
        left: X?.x != null ? `${X.x}px` : "",
        top: X?.y != null ? `${X.y}px` : ""
      } : null;
    });
    i.onReady && i.onReady({ update: R, isPositioned: ne });
    const q = () => {
      te(!a.value);
    }, te = (X) => {
      a.value = X;
      const me = {
        trigger: C(c),
        content: C(r),
        isOpen: C(a)
      }, Ce = { isOpen: me.isOpen };
      Ds(() => {
        a.value ? (R(), window.setTimeout(() => {
          St(), n.directFocus(me), t("toggle", Ce);
        }, 0)) : (se(), n.directFocus(me), t("toggle", Ce));
      });
    };
    let K;
    const St = () => {
      n.clickOutsideCloses && (K && se(), K = (X) => {
        r.value.contains(X.target) || te(!1);
      }, document.addEventListener("click", K));
    }, se = () => {
      K && (document.removeEventListener("click", K), K = null);
    }, he = () => te(!1);
    return (X, me) => {
      const Ce = Ns("ulu-tooltip");
      return u(), d(U, null, [
        xe((u(), d("button", {
          type: "button",
          ref_key: "trigger",
          ref: c,
          onClick: q,
          id: C(l),
          disabled: e.disabled,
          class: m([
            { [e.activeClass]: a.value },
            e.classes.trigger
          ]),
          "aria-expanded": a.value ? "true" : "false",
          "aria-controls": C(o),
          "aria-label": e.triggerAlt
        }, [
          g(X.$slots, "trigger", {
            isOpen: a.value,
            close: he
          }, () => [
            k(p(e.triggerText), 1)
          ])
        ], 10, _o)), [
          [Ce, e.tooltip ? e.tooltip : null]
        ]),
        h("span", {
          class: m(["popover", [
            e.size ? `popover--${e.size}` : "",
            {
              "popover--no-padding": e.noPadding,
              "is-active": a.value
            },
            e.classes.content
          ]]),
          ref_key: "content",
          ref: r,
          "aria-labelledby": C(l),
          id: C(o),
          style: N(C($)),
          "data-placement": C(A),
          onKeydown: me[0] || (me[0] = Ws((as) => te(!1), ["esc"])),
          tabindex: "-1"
        }, [
          h("span", So, [
            g(X.$slots, "default", {
              isOpen: a.value,
              toggle: q,
              close: he
            })
          ]),
          X.$slots.footer ? (u(), d("span", ko, [
            g(X.$slots, "footer", { close: he })
          ])) : v("", !0),
          C(i).arrow ? (u(), d("span", {
            key: 1,
            class: "popover__arrow",
            ref_key: "contentArrow",
            ref: f,
            style: N($e.value),
            "data-ulu-popover-arrow": ""
          }, null, 4)) : v("", !0)
        ], 46, wo)
      ], 64);
    };
  }
}, $o = ["data-placement"], Co = ["innerHTML"], To = {
  key: 1,
  class: "popover__inner"
}, Ao = {
  __name: "UluTooltipPopover",
  props: {
    config: Object
  },
  setup(e) {
    const s = Fn(e.config.trigger), t = j(null), n = j(null), o = [
      ...e.config.inline ? [Ks()] : [],
      ...e.config.offset ? [Zs(e.config.offset)] : [],
      Js(),
      Qs(),
      ...e.config.arrow ? [en({ element: n })] : []
    ], l = {
      placement: e.config.placement,
      whileElementsMounted: sn,
      middleware: o
    }, {
      floatingStyles: i,
      placement: a,
      middlewareData: c,
      update: r,
      isPositioned: f
    } = tn(s, t, l), b = _(() => {
      const y = c.value?.arrow;
      return y ? {
        position: "absolute",
        left: y?.x != null ? `${y.x}px` : "",
        top: y?.y != null ? `${y.y}px` : ""
      } : null;
    });
    return e.config.onReady && e.config.onReady({ update: r, isPositioned: f }), (y, $) => (u(), d("span", {
      class: m(["popover popover--tooltip is-active", e.config.class]),
      ref_key: "content",
      ref: t,
      "aria-hidden": "true",
      "data-placement": C(a),
      style: N(C(i))
    }, [
      e.config.isHtml ? (u(), d("span", {
        key: 0,
        class: "popover__inner",
        innerHTML: e.config.content
      }, null, 8, Co)) : (u(), d("span", To, p(e.config.content), 1)),
      e.config.arrow ? (u(), d("span", {
        key: 2,
        class: "popover__arrow",
        ref_key: "contentArrow",
        ref: n,
        style: N(b.value)
      }, null, 4)) : v("", !0)
    ], 14, $o));
  }
}, Oo = {
  __name: "UluTooltipDisplay",
  setup(e) {
    return (s, t) => (u(), w(ut, {
      to: C(ye).plugin.tooltipTeleportTo
    }, [
      C(Dt) ? (u(), w(Ao, {
        key: 0,
        config: C(Xt)
      }, null, 8, ["config"])) : v("", !0)
    ], 8, ["to"]));
  }
};
function sh(e, s = {}) {
  const t = ho(s);
  t.plugin.global && (e.directive(t.plugin.directiveName, yo), e.component("UluTooltipDisplay", Oo), e.component("UluPopover", mt));
}
const B = (e, s) => {
  const t = e.__vccOpts || e;
  for (const [n, o] of s)
    t[n] = o;
  return t;
}, xo = {
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
function Uo(e, s, t, n, o, l) {
  return l.currentModal ? (u(), w(z(l.currentModal.component), J({ key: 0 }, l.currentProps, {
    modelValue: o.open,
    "onUpdate:modelValue": s[0] || (s[0] = (i) => o.open = i),
    onVnodeMounted: l.modalMounted,
    onVnodeUnmounted: l.modalUnmounted
  }), null, 16, ["modelValue", "onVnodeMounted", "onVnodeUnmounted"])) : v("", !0);
}
const jo = /* @__PURE__ */ B(xo, [["render", Uo]]);
function Bo() {
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
const H = {
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
    const s = dt("uluCore"), t = j(null), { getIconProps: n, getClassesFromDefinition: o } = Bo();
    let l;
    const i = e, a = _(() => s.getSetting("fontAwesomeStatic")), c = _(() => s.getSetting("iconComponent")), r = _(() => s.getSetting("iconPropResolver")), f = _(() => {
      const { icon: M } = i;
      if (typeof M == "string" && M.startsWith("type:"))
        try {
          const R = M.substring(5);
          return s.getIcon(R);
        } catch (R) {
          return console.warn(R), null;
        }
      return M;
    }), b = _(() => !c.value || !f.value ? null : r.value(f.value)), y = _(() => n(f.value)), $ = _(() => o(f.value)), A = _(() => ({
      "flow-inline": i.spaced
    }));
    return ft(async () => {
      if (!a.value && f.value) {
        if (t.value === null)
          if (l)
            t.value = Ue(l.FontAwesomeIcon);
          else {
            const M = Ln(async () => {
              const R = await import("@fortawesome/vue-fontawesome");
              return l = R, R.FontAwesomeIcon;
            });
            t.value = Ue(M);
          }
      } else
        t.value = null;
    }), (M, R) => c.value ? (u(), w(z(c.value), J({ key: 0 }, b.value, { class: A.value }), null, 16, ["class"])) : !a.value && t.value && f.value ? (u(), w(z(t.value), J({ key: 1 }, y.value, { class: A.value }), null, 16, ["class"])) : a.value && f.value ? (u(), d("span", {
      key: 2,
      class: m([$.value, A.value]),
      "aria-hidden": "true"
    }, null, 2)) : v("", !0);
  }
};
function ae({ props: e, baseClass: s, internal: t = {} }) {
  const { modifiers: n } = Vn(e);
  return { resolvedModifiers: _(() => {
    const l = st(s), i = rs(st(n)), a = rs(st(t));
    if (!l)
      return console.warn("useModifiers: Missing 'baseClass' argument, modifiers will not be applied."), "";
    const c = /* @__PURE__ */ new Set([...a, ...i]);
    return Array.from(c).map((r) => `${l}--${r}`);
  }) };
}
let kt = 0;
const Ro = {
  name: "UluModal",
  components: {
    UluIcon: H
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
    return ++kt, {
      containerWidth: null,
      titleId: `ulu-modal-${kt}-title`,
      bodyOverflowValue: null,
      bodyPaddingRightValue: null,
      isResizing: !1
    };
  },
  setup(e) {
    const s = Xs(), t = _(() => e.title || s.title), n = _(() => {
      const { allowResize: a, position: c } = e;
      if (!a || !c) return;
      const r = ["left", "right", "center"];
      return r.includes(c) ? !0 : (console.warn(`Passed invalid position for resize (${c}), use ${r.join(", ")}`), !1);
    }), o = _(() => e.position === "center" ? "type:resizeBoth" : "type:resizeHorizontal"), l = _(() => ({
      [e.position]: e.position,
      resize: e.allowResize,
      "no-resize": !e.allowResize,
      "no-header": !t.value,
      "body-fills": e.bodyFills,
      "no-backdrop": e.noBackdrop,
      "no-min-height": e.noMinHeight,
      "non-modal": e.nonModal,
      "resizer-active": n.value
    })), { resolvedModifiers: i } = ae({
      props: e,
      baseClass: "modal",
      internal: l
    });
    return {
      resolvedModifiers: i,
      hasHeader: t,
      resizerEnabled: n,
      resizerIconType: o
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
        s === t && Zn(t, e) && this.close();
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
        e.newState === "open" ? this.restoreScroll = Kn({ preventShift: s }) : this.destroyPreventScroll();
      }
    },
    setupResizer() {
      const { position: e, resizerEnabled: s } = this;
      if (s) {
        const { container: t, resizer: n } = this.$refs, o = e === "center" ? { fromX: "right", fromY: "bottom", multiplier: 2 } : { fromX: e === "right" ? "left" : "right" };
        this.resizerInstance = new Qn(t, n, o), this.handleResizerStart = () => {
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
    ++kt, this.preventScroll && this.setupPreventScroll(), this.setupResizer();
  },
  beforeUnmount() {
    const { container: e } = this.$refs;
    e && e.open && e.close(), this.destroyPreventScroll(), this.destroyResizer();
  }
}, Eo = ["aria-labelledby", "aria-describedby"], Io = ["id"], Mo = { class: "modal__title-text" }, zo = {
  key: 2,
  class: "modal__resizer",
  ref: "resizer",
  type: "button"
};
function Po(e, s, t, n, o, l) {
  const i = W("UluIcon");
  return u(), w(ut, {
    to: t.teleport === !1 ? null : t.teleport,
    disabled: t.teleport === !1
  }, [
    h("dialog", {
      class: m(["modal", [n.resolvedModifiers, t.classes.container]]),
      "aria-labelledby": l.resolvedLabelledby,
      "aria-describedby": t.describedby,
      ref: "container",
      style: N({ width: o.containerWidth }),
      onCancel: s[1] || (s[1] = Hn((...a) => l.close && l.close(...a), ["prevent"])),
      onClose: s[2] || (s[2] = (...a) => l.handleDialogCloseEvent && l.handleDialogCloseEvent(...a)),
      onClick: s[3] || (s[3] = (...a) => l.handleClick && l.handleClick(...a)),
      onToggle: s[4] || (s[4] = (...a) => l.handleToggle && l.handleToggle(...a))
    }, [
      n.hasHeader ? (u(), d("header", {
        key: 0,
        class: m(["modal__header", t.classes.header])
      }, [
        h("h2", {
          class: m(["modal__title", t.classes.title]),
          id: o.titleId
        }, [
          g(e.$slots, "title", { close: l.close }, () => [
            t.titleIcon ? (u(), w(i, {
              key: 0,
              class: "modal__title-icon",
              icon: t.titleIcon
            }, null, 8, ["icon"])) : v("", !0),
            h("span", Mo, p(t.title), 1)
          ])
        ], 10, Io),
        h("button", {
          class: "modal__close",
          "aria-label": "Close modal",
          onClick: s[0] || (s[0] = (...a) => l.close && l.close(...a)),
          autofocus: ""
        }, [
          g(e.$slots, "closeIcon", {}, () => [
            T(i, {
              class: "modal__close-icon",
              icon: t.closeIcon || "type:close"
            }, null, 8, ["icon"])
          ])
        ])
      ], 2)) : v("", !0),
      h("div", {
        class: m(["modal__body", t.classes.body])
      }, [
        g(e.$slots, "default", { close: l.close })
      ], 2),
      e.$slots.footer ? (u(), d("div", {
        key: 1,
        class: m(["site-modal__footer", t.classes.footer])
      }, [
        g(e.$slots, "footer", { close: l.close })
      ], 2)) : v("", !0),
      n.resizerEnabled ? (u(), d("button", zo, [
        g(e.$slots, "resizerIcon", {}, () => [
          T(i, {
            class: "modal__resizer-icon",
            icon: t.resizerIcon || n.resizerIconType
          }, null, 8, ["icon"])
        ])
      ], 512)) : v("", !0)
    ], 46, Eo)
  ], 8, ["to", "disabled"]);
}
const ln = /* @__PURE__ */ B(Ro, [["render", Po]]), Le = [], Fo = j({
  /**
   * Holds active component options (including component, and options)
   */
  active: null,
  /**
   * Populated with any props passed to open method, bound to modal component
   */
  activeProps: null
}), Ve = Fo.value, hs = {
  data: Ve,
  modals: Le
}, Lo = (e) => ({
  open(s, t = null) {
    const n = this.get(s);
    Ve.active = Ue(n), Ve.activeProps = Object.assign({}, n.props, t);
  },
  /**
   * Close the active modal
   * @param {String|Node} focusTo The element or selector for an element to programmatically focus after modal close
   * @see https://www.deque.com/blog/accessible-routing-in-javascript-frameworks/
   */
  close() {
    Ve.active = null, Ve.activeProps = null;
  },
  /**
   * Get a modal's config object by name
   * @return {Object} Modal config object
   */
  get(s) {
    const t = Le.find((n) => n.name === s);
    if (t)
      return t;
    throw new Error(`Unable to find modal named: ${s}`);
  },
  /**
   * Add a modal config
   */
  add(s) {
    const t = e(s);
    Le.push(t);
  },
  /**
   * Removes a modal config by name
   * @return {Object} Modal that was removed
   */
  remove(s) {
    const t = Le.findIndex((n) => n.name === s);
    if (t > -1)
      return Le.splice(t, 1);
    warn("unable to find modal to remove");
  }
}), Vo = {
  modals: [],
  modalOptions: {}
};
function nh(e, s) {
  const t = Object.assign({}, Vo, s), o = Lo((l) => Object.assign({}, t.modalOptions, l));
  e.component("UluModalsDisplay", jo), e.component("UluModal", ln), t.modals.forEach((l) => {
    o.add(l);
  }), hs.options = t, e.config.globalProperties.$uluModals = o, e.provide("uluModals", o), e.config.globalProperties.$uluModalsState = hs;
}
const Ho = {
  name: "UluToast",
  components: {
    UluIcon: H
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
}, No = ["onClick"];
function Wo(e, s, t, n, o, l) {
  const i = W("UluIcon");
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
        t.toast.icon ? (u(), w(i, {
          key: 0,
          icon: t.toast.icon
        }, null, 8, ["icon"])) : v("", !0)
      ])
    ], 2)) : v("", !0),
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
          }, p(t.toast.title), 3),
          t.toast.date ? (u(), d("span", {
            key: 0,
            class: m(["toast__date", t.classes.date])
          }, p(t.toast.date), 3)) : v("", !0)
        ], 2)) : v("", !0),
        t.toast.description ? (u(), d("div", {
          key: 1,
          class: m(["toast__body", t.classes.body])
        }, p(t.toast.description), 3)) : v("", !0)
      ])
    ], 2),
    t.toast.actions?.length ? (u(), d("div", {
      key: 1,
      class: m(["toast__actions", t.classes.actions])
    }, [
      (u(!0), d(U, null, x(t.toast.actions, (a, c) => (u(), d("button", {
        key: c,
        class: m(["toast__action", t.classes.action]),
        onClick: (r) => l.handleAction(r, a)
      }, p(a.label), 11, No))), 128))
    ], 2)) : v("", !0),
    h("button", {
      class: m(["toast__close", t.classes.closeButton]),
      onClick: s[0] || (s[0] = (...a) => t.toast.close && t.toast.close(...a))
    }, [
      T(i, { icon: "type:close" })
    ], 2)
  ], 2);
}
const an = /* @__PURE__ */ B(Ho, [["render", Wo]]), ms = {
  toastOptions: {
    /**
     * Component used to render the toast in the display
     */
    component: Ue(an),
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
    teleportTo: "body",
    /**
     * Position of the toast container (holds toasts)
     */
    position: ["top", "right"]
  }
}, { assign: $t } = Object;
let Do = 0;
const ge = Nt({
  toasts: [],
  /**
   * Saveable 
   */
  pluginOptions: ms.pluginOptions,
  toastOptions: ms.toastOptions,
  setToastOptions(e) {
    return this.toastOptions = $t({}, this.toastOptions, e), this.pluginOptions;
  },
  setPluginOptions(e) {
    return this.pluginOptions = $t({}, this.pluginOptions, e), this.pluginOptions;
  },
  createToast(e) {
    const s = `toast-${++Do}`;
    return $t({}, this.toastOptions, e, {
      uid: s,
      close() {
        Rt.remove(s);
      }
    });
  }
}), Rt = {
  /**
   * 
   * @param {Object} options Toast options
   * @returns Toast object (to be used to remove)
   */
  add(e) {
    const s = ge.createToast(e);
    return ge.toasts.unshift(s), s.duration && setTimeout(() => {
      this.remove(s.uid);
    }, s.duration), s;
  },
  /**
   * 
   * @param {Object} toast Toast uid
   */
  remove(e) {
    const s = ge.toasts.findIndex((t) => t.uid === e);
    s > -1 && ge.toasts.splice(s, 1);
  },
  /**
   * Remove all toasts
   */
  removeAll() {
    ge.toasts = [];
  }
}, Xo = {
  name: "UluTooltipDisplay",
  data() {
    const { toasts: e, pluginOptions: s } = ge;
    return { toasts: e, pluginOptions: s };
  },
  computed: {
    classes() {
      const { position: e } = this.pluginOptions;
      return e.map((t) => `toast-container--${t}`);
    }
  }
};
function Go(e, s, t, n, o, l) {
  return u(), w(ut, {
    to: o.pluginOptions.teleportTo
  }, [
    T(Gs, {
      class: m(["toast-container", l.classes]),
      name: "toast-animation",
      tag: "div"
    }, {
      default: S(() => [
        (u(!0), d(U, null, x(o.toasts, (i) => (u(), w(z(i.component), {
          key: i.uid,
          toast: i
        }, null, 8, ["toast"]))), 128))
      ]),
      _: 1
    }, 8, ["class"])
  ], 8, ["to"]);
}
const qo = /* @__PURE__ */ B(Xo, [["render", Go]]);
function oh(e, s = {}) {
  ge.setPluginOptions(s?.plugin), ge.setToastOptions(s?.toast), e.component("UluToast", an), e.component("UluToastDisplay", qo), e.config.globalProperties.$uluToast = Rt, e.provide("uluToast", Rt);
}
const Yo = {
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
function Ko(e) {
  const s = Object.assign({}, Yo, e), t = j(null), n = j(s.initialValue), o = j(null);
  return (async () => {
    if (!Jn()) return;
    await new Promise((f) => {
      document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", () => f()) : f();
    });
    const i = await import("@ulu/frontend/js/ui/breakpoints.js"), { BreakpointManager: a } = i, c = Ue(new a(s.plugin));
    t.value = Ue(c);
    const r = () => {
      n.value = c.active, o.value = c.resizeDirection;
    };
    r(), s.onReady && s.onReady(c), c.onChange(r);
  })(), { breakpointManager: t, breakpointActive: n, breakpointDirection: o };
}
const Zo = {
  /**
   * Breakpoint for mobile down/max
   */
  breakpointMobile: "small",
  /**
   * Options to pass to useBreakpointManager()
   */
  managerOptions: {}
};
function lh(e, s) {
  const t = j(!1), n = Object.assign({}, Zo, s), { breakpointMobile: o } = n, { onReady: l } = n.managerOptions, i = {
    onReady(b) {
      b.at(o).max({
        on() {
          t.value = !0;
        },
        off() {
          t.value = !1;
        }
      }), l && l(b);
    }
  }, a = Object.assign({}, n.managerOptions, i), {
    breakpointManager: c,
    breakpointActive: r,
    breakpointDirection: f
  } = Ko(a);
  e.provide("uluBreakpointActive", _(() => r.value)), e.provide("uluBreakpointDirection", _(() => f.value)), e.provide("uluBreakpointManager", _(() => c.value)), e.provide("uluIsMobile", _(() => t.value));
}
const Et = /* @__PURE__ */ new Set(), Y = /* @__PURE__ */ new WeakMap(), be = /* @__PURE__ */ new WeakMap(), ee = /* @__PURE__ */ new WeakMap(), Xe = /* @__PURE__ */ new WeakMap(), Ct = /* @__PURE__ */ new WeakMap(), He = /* @__PURE__ */ new WeakMap(), pe = /* @__PURE__ */ new WeakMap(), ve = /* @__PURE__ */ new WeakMap(), Ae = /* @__PURE__ */ new WeakSet();
let Z, Gt = 0, qt = 0;
const de = "__aa_tgt", Ge = "__aa_del", at = "__aa_new", rn = (e) => {
  const s = tl(e);
  s && s.forEach((t) => sl(t));
}, Jo = (e) => {
  e.forEach((s) => {
    s.target === Z && Qo(), Y.has(s.target) && we(s.target);
  });
};
function cn(e) {
  const s = e.getBoundingClientRect(), t = Z?.clientWidth || 0, n = Z?.clientHeight || 0;
  return s.bottom < 0 || s.top > n || s.right < 0 || s.left > t;
}
function Yt(e) {
  const s = Xe.get(e);
  s?.disconnect();
  let t = Y.get(e), n = 0;
  const o = 5;
  t || (t = je(e), Y.set(e, t));
  const { offsetWidth: l, offsetHeight: i } = Z, c = [
    t.top - o,
    l - (t.left + o + t.width),
    i - (t.top + o + t.height),
    t.left - o
  ].map((f) => `${-1 * Math.floor(f)}px`).join(" "), r = new IntersectionObserver(() => {
    ++n > 1 && we(e);
  }, {
    root: Z,
    threshold: 1,
    rootMargin: c
  });
  r.observe(e), Xe.set(e, r);
}
function we(e, s = !0) {
  clearTimeout(ve.get(e));
  const t = gt(e), n = s ? qe(t) ? 500 : t.duration : 0;
  ve.set(e, setTimeout(async () => {
    const o = ee.get(e);
    try {
      await o?.finished, Y.set(e, je(e)), Yt(e);
    } catch {
    }
  }, n));
}
function Qo() {
  clearTimeout(ve.get(Z)), ve.set(Z, setTimeout(() => {
    Et.forEach((e) => ot(e, (s) => un(() => we(s))));
  }, 100));
}
function el(e) {
  setTimeout(() => {
    He.set(e, setInterval(() => un(we.bind(null, e)), 2e3));
  }, Math.round(2e3 * Math.random()));
}
function un(e) {
  typeof requestIdleCallback == "function" ? requestIdleCallback(() => e()) : requestAnimationFrame(() => e());
}
let ce;
const dn = typeof window < "u" && "ResizeObserver" in window;
dn && (Z = document.documentElement, new MutationObserver(rn), ce = new ResizeObserver(Jo), window.addEventListener("scroll", () => {
  qt = window.scrollY, Gt = window.scrollX;
}), ce.observe(Z));
function tl(e) {
  return e.reduce((n, o) => [
    ...n,
    ...Array.from(o.addedNodes),
    ...Array.from(o.removedNodes)
  ], []).every((n) => n.nodeName === "#comment") ? !1 : e.reduce((n, o) => {
    if (n === !1)
      return !1;
    if (o.target instanceof Element) {
      if (Tt(o.target), !n.has(o.target)) {
        n.add(o.target);
        for (let l = 0; l < o.target.children.length; l++) {
          const i = o.target.children.item(l);
          if (i) {
            if (Ge in i)
              return !1;
            Tt(o.target, i), n.add(i);
          }
        }
      }
      if (o.removedNodes.length)
        for (let l = 0; l < o.removedNodes.length; l++) {
          const i = o.removedNodes[l];
          if (Ge in i)
            return !1;
          i instanceof Element && (n.add(i), Tt(o.target, i), be.set(i, [
            o.previousSibling,
            o.nextSibling
          ]));
        }
    }
    return n;
  }, /* @__PURE__ */ new Set());
}
function Tt(e, s) {
  !s && !(de in e) ? Object.defineProperty(e, de, { value: e }) : s && !(de in s) && Object.defineProperty(s, de, { value: e });
}
function sl(e) {
  var s, t;
  const n = e.isConnected, o = Y.has(e);
  n && be.has(e) && be.delete(e), ((s = ee.get(e)) === null || s === void 0 ? void 0 : s.playState) !== "finished" && ((t = ee.get(e)) === null || t === void 0 || t.cancel()), at in e ? gs(e) : o && n ? ol(e) : o && !n ? ll(e) : gs(e);
}
function oe(e) {
  return Number(e.replace(/[^0-9.\-]/g, ""));
}
function nl(e) {
  let s = e.parentElement;
  for (; s; ) {
    if (s.scrollLeft || s.scrollTop)
      return { x: s.scrollLeft, y: s.scrollTop };
    s = s.parentElement;
  }
  return { x: 0, y: 0 };
}
function je(e) {
  const s = e.getBoundingClientRect(), { x: t, y: n } = nl(e);
  return {
    top: s.top + n,
    left: s.left + t,
    width: s.width,
    height: s.height
  };
}
function fn(e, s, t) {
  let n = s.width, o = s.height, l = t.width, i = t.height;
  const a = getComputedStyle(e);
  if (a.getPropertyValue("box-sizing") === "content-box") {
    const r = oe(a.paddingTop) + oe(a.paddingBottom) + oe(a.borderTopWidth) + oe(a.borderBottomWidth), f = oe(a.paddingLeft) + oe(a.paddingRight) + oe(a.borderRightWidth) + oe(a.borderLeftWidth);
    n -= f, l -= f, o -= r, i -= r;
  }
  return [n, l, o, i].map(Math.round);
}
function gt(e) {
  return de in e && pe.has(e[de]) ? pe.get(e[de]) : { duration: 250, easing: "ease-in-out" };
}
function hn(e) {
  if (de in e)
    return e[de];
}
function Kt(e) {
  const s = hn(e);
  return s ? Ae.has(s) : !1;
}
function ot(e, ...s) {
  s.forEach((t) => t(e, pe.has(e)));
  for (let t = 0; t < e.children.length; t++) {
    const n = e.children.item(t);
    n && s.forEach((o) => o(n, pe.has(n)));
  }
}
function Zt(e) {
  return Array.isArray(e) ? e : [e];
}
function qe(e) {
  return typeof e == "function";
}
function ol(e) {
  const s = Y.get(e), t = je(e);
  if (!Kt(e))
    return Y.set(e, t);
  if (cn(e)) {
    Y.set(e, t), Yt(e);
    return;
  }
  let n;
  if (!s)
    return;
  const o = gt(e);
  if (typeof o != "function") {
    let l = s.left - t.left, i = s.top - t.top;
    const a = s.left + s.width - (t.left + t.width);
    s.top + s.height - (t.top + t.height) == 0 && (i = 0), a == 0 && (l = 0);
    const [r, f, b, y] = fn(e, s, t), $ = {
      transform: `translate(${l}px, ${i}px)`
    }, A = {
      transform: "translate(0, 0)"
    };
    r !== f && ($.width = `${r}px`, A.width = `${f}px`), b !== y && ($.height = `${b}px`, A.height = `${y}px`), n = e.animate([$, A], {
      duration: o.duration,
      easing: o.easing
    });
  } else {
    const [l] = Zt(o(e, "remain", s, t));
    n = new Animation(l), n.play();
  }
  ee.set(e, n), Y.set(e, t), n.addEventListener("finish", we.bind(null, e, !1), {
    once: !0
  });
}
function gs(e) {
  at in e && delete e[at];
  const s = je(e);
  Y.set(e, s);
  const t = gt(e);
  if (!Kt(e))
    return;
  if (cn(e)) {
    Yt(e);
    return;
  }
  let n;
  if (typeof t != "function")
    n = e.animate([
      { transform: "scale(.98)", opacity: 0 },
      { transform: "scale(0.98)", opacity: 0, offset: 0.5 },
      { transform: "scale(1)", opacity: 1 }
    ], {
      duration: t.duration * 1.5,
      easing: "ease-in"
    });
  else {
    const [o] = Zt(t(e, "add", s));
    n = new Animation(o), n.play();
  }
  ee.set(e, n), n.addEventListener("finish", we.bind(null, e, !1), {
    once: !0
  });
}
function vs(e, s) {
  var t;
  e.remove(), Y.delete(e), be.delete(e), ee.delete(e), (t = Xe.get(e)) === null || t === void 0 || t.disconnect(), setTimeout(() => {
    if (Ge in e && delete e[Ge], Object.defineProperty(e, at, { value: !0, configurable: !0 }), s && e instanceof HTMLElement)
      for (const n in s)
        e.style[n] = "";
  }, 0);
}
function ll(e) {
  var s;
  if (!be.has(e) || !Y.has(e))
    return;
  const [t, n] = be.get(e);
  Object.defineProperty(e, Ge, { value: !0, configurable: !0 });
  const o = window.scrollX, l = window.scrollY;
  if (n && n.parentNode && n.parentNode instanceof Element ? n.parentNode.insertBefore(e, n) : t && t.parentNode ? t.parentNode.appendChild(e) : (s = hn(e)) === null || s === void 0 || s.appendChild(e), !Kt(e))
    return vs(e);
  const [i, a, c, r] = al(e), f = gt(e), b = Y.get(e);
  (o !== Gt || l !== qt) && il(e, o, l, f);
  let y, $ = {
    position: "absolute",
    top: `${i}px`,
    left: `${a}px`,
    width: `${c}px`,
    height: `${r}px`,
    margin: "0",
    pointerEvents: "none",
    transformOrigin: "center",
    zIndex: "100"
  };
  if (!qe(f))
    Object.assign(e.style, $), y = e.animate([
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
    const [A, M] = Zt(f(e, "remove", b));
    M?.styleReset !== !1 && ($ = M?.styleReset || $, Object.assign(e.style, $)), y = new Animation(A), y.play();
  }
  ee.set(e, y), y.addEventListener("finish", () => vs(e, $), {
    once: !0
  });
}
function il(e, s, t, n) {
  const o = Gt - s, l = qt - t, i = document.documentElement.style.scrollBehavior;
  if (getComputedStyle(Z).scrollBehavior === "smooth" && (document.documentElement.style.scrollBehavior = "auto"), window.scrollTo(window.scrollX + o, window.scrollY + l), !e.parentElement)
    return;
  const c = e.parentElement;
  let r = c.clientHeight, f = c.clientWidth;
  const b = performance.now();
  function y() {
    requestAnimationFrame(() => {
      if (!qe(n)) {
        const $ = r - c.clientHeight, A = f - c.clientWidth;
        b + n.duration > performance.now() ? (window.scrollTo({
          left: window.scrollX - A,
          top: window.scrollY - $
        }), r = c.clientHeight, f = c.clientWidth, y()) : document.documentElement.style.scrollBehavior = i;
      }
    });
  }
  y();
}
function al(e) {
  var s;
  const t = Y.get(e), [n, , o] = fn(e, t, je(e));
  let l = e.parentElement;
  for (; l && (getComputedStyle(l).position === "static" || l instanceof HTMLBodyElement); )
    l = l.parentElement;
  l || (l = document.body);
  const i = getComputedStyle(l), a = !ee.has(e) || ((s = ee.get(e)) === null || s === void 0 ? void 0 : s.playState) === "finished" ? je(l) : Y.get(l), c = Math.round(t.top - a.top) - oe(i.borderTopWidth), r = Math.round(t.left - a.left) - oe(i.borderLeftWidth);
  return [c, r, n, o];
}
function rl(e, s = {}) {
  if (dn && ce && !(window.matchMedia("(prefers-reduced-motion: reduce)").matches && !qe(s) && !s.disrespectUserMotionPreference)) {
    Ae.add(e), getComputedStyle(e).position === "static" && Object.assign(e.style, { position: "relative" }), ot(e, we, el, (i) => ce?.observe(i)), qe(s) ? pe.set(e, s) : pe.set(e, {
      duration: 250,
      easing: "ease-in-out",
      ...s
    });
    const l = new MutationObserver(rn);
    l.observe(e, { childList: !0 }), Ct.set(e, l), Et.add(e);
  }
  return Object.freeze({
    parent: e,
    enable: () => {
      Ae.add(e);
    },
    disable: () => {
      Ae.delete(e), ot(e, (n) => {
        const o = ee.get(n);
        try {
          o?.cancel();
        } catch {
        }
        ee.delete(n);
        const l = ve.get(n);
        l && clearTimeout(l), ve.delete(n);
        const i = He.get(n);
        i && clearInterval(i), He.delete(n);
      });
    },
    isEnabled: () => Ae.has(e),
    destroy: () => {
      Ae.delete(e), Et.delete(e), pe.delete(e);
      const n = Ct.get(e);
      n?.disconnect(), Ct.delete(e), ot(e, (o) => {
        ce?.unobserve(o);
        const l = ee.get(o);
        try {
          l?.cancel();
        } catch {
        }
        ee.delete(o);
        const i = Xe.get(o);
        i?.disconnect(), Xe.delete(o);
        const a = He.get(o);
        a && clearInterval(a), He.delete(o);
        const c = ve.get(o);
        c && clearTimeout(c), ve.delete(o), Y.delete(o), be.delete(o);
      });
    }
  });
}
function cl(e) {
  const s = j();
  let t;
  function n(o) {
    t && (o ? t.enable() : t.disable());
  }
  return ht(() => {
    ft((o) => {
      let l;
      s.value instanceof HTMLElement ? l = s.value : s.value && "$el" in s.value && s.value.$el instanceof HTMLElement && (l = s.value.$el), l && (t = rl(l, e || {}), o(() => {
        var i;
        (i = t?.destroy) === null || i === void 0 || i.call(t), t = void 0;
      }));
    });
  }), qs(() => {
    var o;
    (o = t?.destroy) === null || o === void 0 || o.call(t), t = void 0;
  }), [s, n];
}
function ul(e) {
  if (e) {
    if (e instanceof HTMLElement)
      return e;
    if (typeof e == "object" && "$el" in e)
      return e.$el;
  }
}
let dl = 0;
function It(e = "ulu-id") {
  const s = `${e}-${++dl}`;
  return typeof document < "u" && document.getElementById(s) ? generateUid(e) : s;
}
const fl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  newId: It,
  refToElement: ul
}, Symbol.toStringTag, { value: "Module" })), hl = ["id", "aria-controls", "aria-expanded"], ml = ["id", "aria-hidden", "aria-labelledby"], Mt = {
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
     * Classes for elements ({ container, trigger, content })
     * - Any valid class binding value per element
     */
    classes: {
      type: Object,
      default: () => ({
        container: "ulu-collapsible",
        trigger: "ulu-collapsible__trigger",
        content: "ulu-collapsible__content",
        containerOpen: "ulu-collapsible--open",
        containerClosed: "ulu-collapsible--closed"
      })
    }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: s }) {
    const t = e, n = s, o = _(() => typeof t.animate == "object" ? t.animate : {}), [l, i] = cl(o);
    ht(() => {
      i(!!t.animate);
    }), We(() => t.animate, (A) => {
      i(!!A);
    });
    const a = _(() => t.modelValue !== void 0), c = j(t.startOpen), r = _({
      get() {
        return a.value ? t.modelValue : c.value;
      },
      set(A) {
        a.value ? n("update:modelValue", A) : c.value = A;
      }
    }), f = j(It("ulu-collapsible-trigger")), b = j(It("ulu-collapsible-content"));
    function y() {
      r.value = !r.value;
    }
    function $() {
      t.closeOnEscape && r.value && (r.value = !1);
    }
    return (A, M) => (u(), d("div", {
      ref_key: "container",
      ref: l,
      onKeydown: Ws($, ["esc"]),
      class: m([e.classes.container, r.value ? e.classes.containerOpen : e.classes.containerClosed])
    }, [
      h("button", {
        class: m(e.classes.trigger),
        id: f.value,
        "aria-controls": b.value,
        "aria-expanded": r.value,
        onClick: y
      }, [
        g(A.$slots, "trigger", { isOpen: r.value }, () => [
          k(p(e.triggerText), 1)
        ])
      ], 10, hl),
      r.value ? (u(), d("div", {
        key: 0,
        class: m(e.classes.content),
        tabindex: "-1",
        id: b.value,
        "aria-hidden": !r.value,
        "aria-labelledby": f.value
      }, [
        g(A.$slots, "default", {
          isOpen: r.value,
          toggle: y
        })
      ], 10, ml)) : v("", !0)
    ], 34));
  }
}, ys = {
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
      default: !0
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
     * Classes for elements. See UluCollapsible for all available class keys (trigger, content, etc).
     * The 'icon' key is also available for the icon span.
     * - Any valid class binding value per element
     */
    classes: {
      type: Object,
      default: () => ({
        container: "accordion",
        trigger: "accordion__summary",
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
  setup(e, { emit: s }) {
    const t = e, { resolvedModifiers: n } = ae({ props: t, baseClass: "accordion" }), o = _(() => {
      const l = { ...t.classes };
      return l.container = [l.container, n.value], l;
    });
    return (l, i) => (u(), w(Mt, {
      "model-value": e.modelValue,
      "start-open": e.startOpen,
      "trigger-text": e.triggerText,
      classes: o.value,
      animate: e.animate,
      "onUpdate:modelValue": i[0] || (i[0] = (a) => l.$emit("update:modelValue", a))
    }, {
      trigger: S(({ isOpen: a }) => [
        g(l.$slots, "trigger", { isOpen: a }, () => [
          (u(), w(z(e.triggerTextElement), null, {
            default: S(() => [
              k(p(e.triggerText), 1)
            ]),
            _: 1
          }))
        ]),
        g(l.$slots, "icon", { isOpen: a }, () => [
          h("span", {
            class: m(["accordion__icon", e.classes.icon])
          }, [
            T(H, {
              icon: a ? "type:collapse" : "type:expand",
              style: { display: "inline" }
            }, null, 8, ["icon"])
          ], 2)
        ])
      ]),
      default: S(({ isOpen: a, toggle: c }) => [
        g(l.$slots, "default", {
          isOpen: a,
          toggle: c
        })
      ]),
      _: 3
    }, 8, ["model-value", "start-open", "trigger-text", "classes", "animate"]));
  }
}, mn = {
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
    const s = e, { resolvedModifiers: t } = ae({ props: s, baseClass: "tag" });
    return (n, o) => (u(), d("span", {
      class: m(["tag", [
        {
          "tag--counter": e.counter,
          [`tag--${e.size}`]: e.size,
          [`tag--${e.type}`]: e.type
        },
        C(t)
      ]])
    }, [
      e.icon ? (u(), w(H, {
        key: 0,
        icon: e.icon,
        spaced: ""
      }, null, 8, ["icon"])) : v("", !0),
      g(n.$slots, "default", {}, () => [
        h("span", null, p(e.text), 1)
      ])
    ], 2));
  }
}, gl = {
  name: "UluMenu",
  components: {
    UluIcon: H,
    UluTag: mn
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
function vl(e, s, t, n, o, l) {
  const i = W("UluIcon"), a = W("UluTag"), c = W("UluMenu", !0), r = Ns("ulu-tooltip");
  return t.items?.length ? (u(), d("ul", {
    key: 0,
    class: m(t.classes.list)
  }, [
    (u(!0), d(U, null, x(t.items, (f, b) => (u(), d("li", {
      key: b,
      class: m([
        t.classes.item,
        f?.classes?.item,
        f.separatorBefore ? t.classes.itemSeparatorBefore : "",
        f.separatorAfter ? t.classes.itemSeparatorAfter : ""
      ])
    }, [
      xe((u(), w(z(f.to || f.path ? "router-link" : f.click ? "button" : "a"), J({ ref_for: !0 }, {
        ...f.to || f.path ? {
          to: f.to || f.path,
          activeClass: t.classes.linkActive || null,
          exactActiveClass: t.classes.linkExactActive || null
        } : {},
        ...f.href ? { href: f.href || "#" } : {}
      }, {
        onClick: (y) => {
          l.handleItemClick(y, f);
        },
        class: [t.classes.link, f?.classes?.link],
        "aria-label": t.iconOnly ? f.title : null,
        id: f.id
      }), {
        default: S(() => [
          g(e.$slots, "default", {
            item: f,
            index: b
          }, () => [
            f.icon ? (u(), w(i, {
              key: 0,
              icon: f.icon,
              class: m([t.classes.linkIcon, f?.classes?.linkIcon])
            }, null, 8, ["icon", "class"])) : v("", !0),
            h("span", {
              class: m([t.classes.linkText, f?.classes?.linkText])
            }, p(f.title), 3),
            f.tag ? (u(), w(a, J({
              key: 1,
              ref_for: !0
            }, f.tag), null, 16)) : v("", !0)
          ])
        ]),
        _: 2
      }, 1040, ["onClick", "class", "aria-label", "id"])), [
        [r, t.iconOnly ? f.title : f.tooltip || null]
      ]),
      !t.noChildren && f?.children?.length ? (u(), w(c, {
        key: 0,
        iconOnly: t.iconOnly,
        classes: t.classes,
        items: f.children
      }, null, 8, ["iconOnly", "classes", "items"])) : v("", !0)
    ], 2))), 128))
  ], 2)) : v("", !0);
}
const gn = /* @__PURE__ */ B(gl, [["render", vl]]), yl = {
  __name: "UluMenuStack",
  props: {
    /**
     * Menu item (see UluMenu)
     */
    items: Array,
    /**
    * The HTML element to use as the container (e.g., 'nav', 'div', 'aside').
     */
    containerElement: {
      type: String,
      default: "nav"
    },
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
    noChildren: Boolean,
    /**
     * Class modifiers (ie. 'transparent', 'secondary', etc)
     */
    modifiers: [String, Array]
  },
  setup(e) {
    const s = e, t = _(() => ({
      hanging: s.hanging,
      compact: s.compact
    })), { resolvedModifiers: n } = ae({
      props: s,
      internal: t,
      baseClass: "menu-stack"
    });
    return (o, l) => (u(), w(z(e.containerElement), {
      class: m(["menu-stack", C(n)])
    }, {
      default: S(() => [
        T(gn, {
          items: e.items,
          classes: {
            list: "menu-stack__list",
            item: "menu-stack__item",
            link: "menu-stack__link",
            linkText: "menu-stack__link-text",
            linkIcon: "menu-stack__link-icon",
            itemSeparatorBefore: "menu-stack__item--separator-before",
            itemSeparatorAfter: "menu-stack__item--separator-after"
          },
          noChildren: e.noChildren
        }, null, 8, ["items", "noChildren"])
      ]),
      _: 1
    }, 8, ["class"]));
  }
}, ih = {
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
    return (s, t) => (u(), w(mt, { classes: e.popoverClasses }, {
      trigger: S(({ isOpen: n }) => [
        g(s.$slots, "trigger", { isOpen: n }, () => [
          h("span", null, p(e.triggerText), 1),
          T(H, {
            class: "button__icon",
            icon: "type:dropdownExpand",
            style: N({ transform: n ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.2s" })
          }, null, 8, ["style"])
        ])
      ]),
      default: S(() => [
        T(yl, { items: e.items }, null, 8, ["items"])
      ]),
      _: 3
    }, 8, ["classes"]));
  }
}, Jt = j(!1), rt = {
  start: [],
  end: []
};
function Qt() {
  window.removeEventListener("resize", Qt), Jt.value = !0, rt.start.forEach((e) => e());
}
function pl() {
  Jt.value = !1, rt.end.forEach((e) => e()), window.addEventListener("resize", Qt);
}
window.addEventListener("resize", Qt), window.addEventListener("resize", Wt(pl, 300));
function ps(e, s) {
  return e.push(s), () => {
    const t = e.findIndex((n) => n === s);
    t > -1 && e.splice(t);
  };
}
function bl() {
  return {
    resizing: Jt,
    onResizeStart(e) {
      return ps(rt.start, e);
    },
    onResizeEnd(e) {
      return ps(rt.end, e);
    }
  };
}
const _l = {
  uluCore: "Core",
  uluIsMobile: "Breakpoints",
  uluBreakpointActive: "Breakpoints",
  uluBreakpointDirection: "Breakpoints",
  uluBreakpointManager: "Breakpoints",
  uluModals: "Modals",
  uluToast: "Toast"
}, bs = {};
function wl(e) {
  const s = dt(e, bs);
  if (s === bs) {
    const t = _l[e] || "", n = t ? ` from the '${t}' plugin` : "", o = t ? "Please install missing plugin." : "";
    throw new Error(`Required inject: '${e}'${n} was not provided. ${o}`);
  }
  return s;
}
function ah(e, s) {
  const t = nn(), n = eo(), o = _(() => {
    const r = parseInt(t.query.page || "1", 10);
    return isNaN(r) || r < 1 ? 1 : r;
  }), l = _(() => !e.value || e.value.length === 0 ? 1 : Math.ceil(e.value.length / s));
  We(l, (r) => {
    o.value > r && n.push({ query: { ...t.query, page: r } });
  });
  const i = _(() => {
    const r = (o.value - 1) * s, f = r + s;
    return e.value.slice(r, f);
  }), a = _(() => {
    if (l.value <= 1)
      return null;
    const r = {
      pages: {}
    }, f = o.value, b = l.value, y = 5, $ = (R) => ({ query: { ...t.query, page: R } });
    f > 1 && (r.first = { href: $(1) }, r.previous = { href: $(f - 1) }), f < b && (r.next = { href: $(f + 1) }, r.last = { href: $(b) });
    let A, M;
    if (b <= y)
      A = 1, M = b;
    else {
      const R = Math.floor(y / 2), ne = Math.ceil(y / 2) - 1;
      f <= R ? (A = 1, M = y) : f + ne >= b ? (A = b - y + 1, M = b) : (A = f - R, M = f + ne);
    }
    for (let R = A; R <= M; R++)
      r.pages[R] = { href: $(R) };
    return r;
  }), c = _(() => {
    const r = { previous: !1, next: !1 };
    if (!a.value || !a.value.pages) return r;
    const f = Object.keys(a.value.pages).map(Number);
    if (f.length === 0) return r;
    const b = Math.min(...f), y = Math.max(...f);
    return b > 1 && (r.previous = !0), y < l.value && (r.next = !0), r;
  });
  return {
    currentPage: o,
    totalPages: l,
    paginatedItems: i,
    pagerItems: a,
    pagerEllipses: c
  };
}
function zt(e, s, t) {
  typeof e === "function" && (!t || t !== "titleTemplate" && !(t[0] === "o" && t[1] === "n")) && (e = e());
  let o;
  if (s && (o = s(t, e)), Array.isArray(o))
    return o.map((l) => zt(l, s));
  if (o?.constructor === Object) {
    const l = {};
    for (const i of Object.keys(o))
      l[i] = zt(o[i], s, i);
    return l;
  }
  return o;
}
const Sl = (e, s) => Nn(s) ? st(s) : s, kl = "usehead";
function $l() {
  if (Wn()) {
    const e = dt(kl);
    if (!e)
      throw new Error("useHead() was called without provide context, ensure you call it through the setup() function.");
    return e;
  }
  throw new Error("useHead() was called without provide context, ensure you call it through the setup() function.");
}
function Cl(e, s = {}) {
  const t = s.head || $l();
  return t.ssr ? t.push(e || {}, s) : Tl(t, e, s);
}
function Tl(e, s, t = {}) {
  const n = j(!1);
  let o;
  return ft(() => {
    const i = n.value ? {} : zt(s, Sl);
    o ? o.patch(i) : o = e.push(i, t);
  }), Dn() && (qs(() => {
    o.dispose();
  }), Xn(() => {
    n.value = !0;
  }), Gn(() => {
    n.value = !1;
  })), o;
}
function vt(e, s) {
  let n = (e?.meta || {}).title;
  return typeof n == "function" && (n = n(s || e)), n;
}
function Al(e, s) {
  const n = Object.assign({}, {
    qualifier(i, a) {
      return a ? ts(i) : vn(i);
    },
    sort: ns,
    item: {},
    includeChildren: !1
  }, s), o = (i, a) => a ? `${a}/${i.path}` : i.path, l = (i, a = null) => i.filter((c) => n.qualifier(c, a)).map((c) => {
    const r = c.children ? es(c.children) : c, f = c.children ? c.children.filter((y) => y.path !== "") : !1, b = yt(r, o(c, a), n.item);
    return n.includeChildren && f.length && (b.children = l(f, b.path)), b;
  }).sort(n.sort);
  return l(e);
}
function Ol(e) {
  function s(t) {
    const n = [];
    for (const o of t) {
      const l = { ...o };
      delete l.children, n.push(l), o.children && n.push(...s(o.children));
    }
    return n;
  }
  return s(e);
}
function xl(e, s, t) {
  const o = Object.assign({}, {
    includeIndex: !1,
    item: {},
    sort: ns
  }, t), l = e.find((r) => r.path !== "/" && s.includes(r.path)), i = (r, f, b) => {
    if (r.children) {
      const y = r.children.find(($) => $.path.includes(s));
      if (y)
        return i(y, r, b + y.path);
    }
    return { route: f, path: b };
  }, { route: a, path: c } = i(l, l, l.path);
  return a.children ? a.children.filter(pn(o.includeIndex)).map((r) => yt(r, `${c}/${r.path}`, o.item)).sort(o.sort) : (console.warn("Unable to build menu for:", s), []);
}
function es(e) {
  return e.find((s) => s.path === "");
}
function yt(e, s = e.path, t) {
  const o = Object.assign({}, {
    indexMeta: !0,
    modify: null
  }, t);
  let l = Object.assign({}, e.meta);
  o.indexMeta && e.children && (l = Object.assign({}, l, es(e.children)?.meta));
  const i = { ...e, meta: l }, a = {
    path: s,
    title: vt(i, e) || "Missing Title",
    weight: l?.weight || 0,
    meta: l
  };
  return o.modify && o.modify(a, e), a;
}
function ts(e) {
  return !e.path.includes("/:");
}
function vn(e) {
  const s = e.path.match(/\//g) || [];
  return ts(e) && s.length === 1;
}
function Ul(e, s) {
  const { target: t } = s, n = t.closest("a");
  if (n) {
    let o = n.getAttribute("href");
    o.startsWith("/") && (e.push(o), s.preventDefault());
  }
}
function yn(e, s = ss(e)) {
  return s?.children;
}
function ss(e, s) {
  const t = e.matched.length, n = t - 2;
  return s ? t > 1 ? e.matched[0] : null : n < 0 ? null : e.matched[n];
}
function pn(e) {
  return (s) => e || s.path !== "";
}
function ns(e, s) {
  return e?.weight - s?.weight;
}
function jl(e, s) {
  const n = Object.assign({}, {
    parent: null,
    includeIndex: !1,
    item: {},
    sort: ns
  }, s), o = n.parent || ss(e);
  return (yn(e, o) || []).filter(pn(n.includeIndex)).map((i) => yt(i, `${o.path}/${i.path}`, n.item)).sort(n.sort);
}
function Bl(e) {
  const { matched: s, path: t } = e;
  let n;
  return s.reduce((l, i, a) => {
    if (i.meta?.breadcrumb === !1 || i.path === n)
      return l;
    const c = a === s.length - 1, r = vt(i, e) || "Missing Title";
    return l.push({
      title: r,
      to: { path: c ? t : i.path },
      current: c
    }), n = i.path, l;
  }, []);
}
const Rl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  $createBreadcrumb: Bl,
  $createSectionMenu: jl,
  $getParentRoute: ss,
  $getRouteChildren: yn,
  createBaseMenu: Al,
  createMenuItem: yt,
  createSectionMenu: xl,
  flattenMenu: Ol,
  getChildIndexRoute: es,
  getRouteTitle: vt,
  isStaticBaseRoute: vn,
  isStaticRoute: ts,
  nativeLinkRouter: Ul
}, Symbol.toStringTag, { value: "Module" })), At = Nt({});
function rh(e = {}) {
  const {
    title: s,
    titleTemplate: t = "%s",
    useRoute: n = nn,
    useHead: o = Cl
  } = e, l = n(), i = l.path;
  if (s !== void 0) {
    ft(() => {
      At[i] = C(s);
    }), Ys(() => {
      delete At[i];
    });
    return;
  }
  const a = _(() => {
    const c = At[l.path], r = vt(l, l), f = c || r;
    return f ? t.replace("%s", f) : "App";
  });
  o({
    title: a
  });
}
const El = { class: "layout-flex-baseline" }, Il = { class: "type-word-break" }, ch = {
  __name: "UluOverflowPopover",
  props: {
    /**
     * Default icon for overflow popover trigger
     */
    triggerIcon: String
  },
  setup(e) {
    const { resizing: s, onResizeEnd: t } = bl(), n = j(null), o = j(!1), l = () => {
      Ds(() => {
        const a = n.value;
        o.value = a.offsetWidth < a.scrollWidth;
      });
    }, i = t(l);
    return ht(l), Ys(i), (a, c) => (u(), d("div", El, [
      h("div", {
        class: "type-truncate",
        ref_key: "text",
        ref: n
      }, [
        g(a.$slots, "default")
      ], 512),
      o.value && !C(s) ? (u(), w(mt, {
        key: 0,
        triggerAlt: "Show Full Text",
        size: "large"
      }, {
        trigger: S(() => [
          T(H, {
            icon: e.triggerIcon || "type:ellipsis"
          }, null, 8, ["icon"])
        ]),
        default: S(() => [
          h("div", Il, [
            g(a.$slots, "default")
          ])
        ]),
        _: 3
      })) : v("", !0)
    ]));
  }
}, uh = {
  __name: "UluTab",
  setup(e) {
    return (s, t) => (u(), w(C(to), null, {
      default: S((n) => [
        g(s.$slots, "default", le(ie(n)))
      ]),
      _: 3
    }));
  }
}, dh = /* @__PURE__ */ Object.assign({
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
    return (s, t) => (u(), w(C(so), {
      defaultIndex: e.defaultIndex,
      vertical: e.vertical
    }, {
      default: S((n) => [
        h("div", {
          class: m(["tabs", {
            "tabs--vertical": e.vertical
          }])
        }, [
          g(s.$slots, "default", le(ie(n)))
        ], 2)
      ]),
      _: 3
    }, 8, ["defaultIndex", "vertical"]));
  }
}), fh = {
  __name: "UluTabList",
  setup(e) {
    return (s, t) => (u(), w(C(no), { class: "tabs__tablist" }, {
      default: S(() => [
        g(s.$slots, "default")
      ]),
      _: 3
    }));
  }
}, hh = {
  __name: "UluTabPanel",
  setup(e) {
    return (s, t) => (u(), w(C(oo), null, {
      default: S((n) => [
        g(s.$slots, "default", le(ie(n)))
      ]),
      _: 3
    }));
  }
}, mh = {
  __name: "UluTabPanels",
  setup(e) {
    return (s, t) => (u(), w(C(lo), null, {
      default: S((n) => [
        g(s.$slots, "default", le(ie(n)))
      ]),
      _: 3
    }));
  }
}, Ml = {
  name: "UluButton",
  components: {
    UluIcon: H
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
    const { resolvedModifiers: s } = ae({ props: e, baseClass: "button" });
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
      return this.to ? De : this.href ? "a" : "button";
    },
    attrs() {
      const { to: e, href: s, download: t, target: n } = this, o = e ? { to: e } : s ? { href: s } : {};
      return s && (n && (o.target = n), t && (o.download = typeof t == "string" ? t : !0)), o;
    }
  }
}, zl = { key: 1 };
function Pl(e, s, t, n, o, l) {
  const i = W("UluIcon");
  return u(), w(z(l.element), J({
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
      l.classes,
      n.resolvedModifiers
    ]]
  }, l.attrs, { "aria-label": l.resolvedAriaLabel }), {
    default: S(() => [
      g(e.$slots, "before"),
      t.icon && (t.iconBefore || t.iconOnly) ? (u(), w(i, {
        key: 0,
        icon: t.icon,
        class: "button__icon"
      }, null, 8, ["icon"])) : v("", !0),
      (e.$slots.default || t.text) && !t.iconOnly ? (u(), d("span", zl, [
        g(e.$slots, "default", {}, () => [
          k(p(t.text), 1)
        ])
      ])) : v("", !0),
      t.icon && !t.iconBefore && !t.iconOnly ? (u(), w(i, {
        key: 2,
        icon: t.icon,
        class: "button__icon"
      }, null, 8, ["icon"])) : v("", !0),
      g(e.$slots, "after")
    ]),
    _: 3
  }, 16, ["class", "aria-label"]);
}
const Fl = /* @__PURE__ */ B(Ml, [["render", Pl]]), Ll = {
  name: "UluAlert",
  components: {
    UluButton: Fl,
    UluIcon: H
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
    const { resolvedModifiers: s } = ae({
      props: e,
      baseClass: "callout",
      internal: _(() => ({
        [e.type]: e.type,
        compact: e.compact
      }))
    });
    return { resolvedModifiers: s };
  }
}, Vl = { class: "layout-flex" }, Hl = { class: "type-small" }, Nl = {
  key: 0,
  class: "margin-left-auto align-self-center"
};
function Wl(e, s, t, n, o, l) {
  const i = W("UluIcon");
  return u(), d("div", {
    class: m(["callout", n.resolvedModifiers])
  }, [
    h("div", Vl, [
      T(i, {
        class: m(["type-large margin-right-small", `color-${t.type}`]),
        icon: t.icon || `type:${t.type}`
      }, null, 8, ["class", "icon"]),
      h("div", Hl, [
        h("div", null, [
          g(e.$slots, "title", {}, () => [
            h("strong", null, p(t.title), 1)
          ])
        ]),
        h("div", null, [
          g(e.$slots, "description", {}, () => [
            k(p(t.description), 1)
          ])
        ])
      ]),
      e.$slots.action ? (u(), d("div", Nl, [
        g(e.$slots, "action")
      ])) : v("", !0)
    ])
  ], 2);
}
const gh = /* @__PURE__ */ B(Ll, [["render", Wl]]), Dl = ["aria-hidden"], Xl = {
  key: 2,
  class: "hidden-visually"
}, Gl = {
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
    const s = e, t = _(() => !!(s.to || s.click)), n = _(() => {
      const { click: o, to: l, href: i } = s;
      return o ? "button" : l ? De : i ? "a" : "span";
    });
    return (o, l) => (u(), w(z(n.value), {
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
          }, p(e.text), 9, Dl)) : g(o.$slots, "default", { key: 1 }),
          e.alt ? (u(), d("span", Xl, p(e.alt), 1)) : v("", !0)
        ], 2)
      ]),
      _: 3
    }, 8, ["class", "to", "href", "onClick"]));
  }
}, ql = { class: "badge-stack" }, vh = {
  __name: "UluBadgeStack",
  props: {
    /**
     * Array of props for each badge
     */
    items: Array
  },
  setup(e) {
    return (s, t) => (u(), d("ul", ql, [
      (u(!0), d(U, null, x(e.items, (n, o) => (u(), d("li", {
        class: "badge-stack__item",
        key: o
      }, [
        T(Gl, J({ ref_for: !0 }, n), null, 16)
      ]))), 128))
    ]));
  }
}, Yl = {
  name: "UluButtonVerbose",
  components: {
    UluIcon: H
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
    const { resolvedModifiers: s } = ae({ props: e, baseClass: "button-verbose" });
    return { resolvedModifiers: s };
  },
  computed: {
    element() {
      return this.to ? De : this.href ? "a" : "button";
    },
    attrs() {
      const { to: e, href: s, download: t, target: n } = this, o = e ? { to: e } : s ? { href: s } : {};
      return s && (n && (o.target = n), t && (o.download = typeof t == "string" ? t : !0)), o;
    }
  }
}, Kl = {
  key: 1,
  class: "button-verbose__body"
};
function Zl(e, s, t, n, o, l) {
  const i = W("UluIcon");
  return u(), w(z(l.element), J({
    class: ["button-verbose", [
      {
        "button-verbose--inline": t.inline,
        "button-verbose--full-width": t.fullWidth
      },
      n.resolvedModifiers
    ]]
  }, l.attrs), {
    default: S(() => [
      e.$slots.title || t.title ? (u(), w(z(t.titleElement), {
        key: 0,
        class: "button-verbose__title"
      }, {
        default: S(() => [
          g(e.$slots, "title", {}, () => [
            k(p(t.title), 1)
          ])
        ]),
        _: 3
      })) : v("", !0),
      e.$slots.default || t.body ? (u(), d("span", Kl, [
        g(e.$slots, "default", {}, () => [
          k(p(t.body), 1)
        ])
      ])) : v("", !0),
      t.icon ? (u(), w(i, {
        key: 2,
        icon: t.icon,
        class: "button-verbose__icon",
        "aria-hidden": "true"
      }, null, 8, ["icon"])) : v("", !0)
    ]),
    _: 3
  }, 16, ["class"]);
}
const yh = /* @__PURE__ */ B(Yl, [["render", Zl]]), Jl = {
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
    const { resolvedModifiers: s } = ae({ props: e, baseClass: "callout" });
    return { resolvedModifiers: s };
  }
};
function Ql(e, s, t, n, o, l) {
  return u(), d("div", {
    class: m(["callout", [n.resolvedModifiers, { "full-height": t.fullHeight }]])
  }, [
    g(e.$slots, "default")
  ], 2);
}
const ph = /* @__PURE__ */ B(Jl, [["render", Ql]]), ei = { class: "card__body" }, ti = { class: "card__main" }, si = ["href", "target"], ni = {
  key: 0,
  class: "card__aside"
}, oi = ["src", "alt"], li = {
  key: 1,
  class: "card__footer"
}, bh = {
  __name: "UluCard",
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
    titleTo: [String, Object],
    /**
     * Will make title a link to href
     */
    titleHref: String,
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
    href: String,
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
     * Whether to proxy clicks of non-interactive elements (making whole card clickable).
     * This is for accessibility, allowing a non-link card to have a primary action.
     * The proxy action is determined in the following order:
     * 1. If the title has a link (`titleTo` or `titleHref`), it will proxy the click to the title's link.
     * 2. If not, it will look for an element with the `data-ulu-card-proxy-target` attribute within the card's slots and click it.
     * 3. If no proxy target is found, it will emit a `proxy-click` event.
     * Note: This should not be used with the `to` or `href` props.
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
  emits: ["proxy-click"],
  setup(e, { emit: s }) {
    const t = e, n = s, o = Xs();
    t.proxyClick && (t.to || t.href) && console.warn("UluCard: 'proxyClick' is ignored when 'to' or 'href' are present."), (t.titleTo || t.titleHref) && (t.to || t.href) && console.warn("UluCard: 'titleTo'/'titleHref' should not be used with 'to'/'href'.");
    const l = j(null), i = j(null), { resolvedModifiers: a } = ae({ props: t, baseClass: "card" }), c = j(null), r = j(!1), f = _(() => t.proxyClick && !t.to && !t.href), b = _(() => f.value && (t.titleTo || t.titleHref)), y = _(() => f.value && !b.value), $ = _(() => f.value || null), A = _(() => ({
      selectorPrevent: "input, select, textarea, button, a, [tabindex='-1']",
      mousedownDurationPrevent: 250,
      ...t.proxyClickOptions
    })), M = _(() => f.value ? "pointer" : null), R = _(() => t.to ? De : t.href ? "a" : t.cardElement);
    function ne({ target: q, timeStamp: te }) {
      if (!$.value) return;
      const { selectorPrevent: K } = A.value;
      r.value = !1, q.closest(K) || (r.value = !0, c.value = te);
    }
    function $e({ timeStamp: q }) {
      if (!$.value || !r.value) return;
      const { mousedownDurationPrevent: te } = A.value;
      if (q - c.value < te) {
        if (b.value)
          i.value?.click();
        else if (y.value) {
          const K = l.value?.querySelector("[data-ulu-card-proxy-target]");
          K ? K.click() : n("proxy-click");
        }
      }
      r.value = !1;
    }
    return (q, te) => (u(), w(z(R.value), {
      ref_key: "cardRoot",
      ref: l,
      class: m(["card", [
        {
          "card--horizontal": e.horizontal || e.horizontalCenter,
          "card--horizontal-center": e.horizontalCenter,
          "card--overlay": e.overlay
        },
        C(a)
      ]]),
      onMousedown: ne,
      onMouseup: $e,
      style: N({ cursor: M.value }),
      target: e.target,
      to: e.to,
      href: e.href,
      "data-ulu-proxy-click-init": $.value
    }, {
      default: S(() => [
        h("div", ei, [
          h("div", ti, [
            e.title || C(o).title ? (u(), w(z(e.titleElement), {
              key: 0,
              class: m(["card__title", e.classes.title])
            }, {
              default: S(() => [
                e.titleTo ? (u(), w(C(De), {
                  key: 0,
                  class: "card__title-link",
                  to: e.titleTo,
                  ref_key: "link",
                  ref: i
                }, {
                  default: S(() => [
                    g(q.$slots, "title", {}, () => [
                      k(p(e.title), 1)
                    ])
                  ]),
                  _: 3
                }, 8, ["to"])) : e.titleHref ? (u(), d("a", {
                  key: 1,
                  class: "card__title-link",
                  href: e.titleHref,
                  target: e.titleTarget,
                  ref_key: "link",
                  ref: i
                }, [
                  g(q.$slots, "title", {}, () => [
                    k(p(e.title), 1)
                  ])
                ], 8, si)) : g(q.$slots, "title", { key: 2 }, () => [
                  k(p(e.title), 1)
                ])
              ]),
              _: 3
            }, 8, ["class"])) : v("", !0),
            g(q.$slots, "body")
          ]),
          C(o).aside ? (u(), d("div", ni, [
            g(q.$slots, "aside")
          ])) : v("", !0)
        ]),
        C(o).image || e.imageSrc ? (u(), d("div", {
          key: 0,
          class: m(["card__image", [
            { "card__image--icon": e.imageIcon },
            e.classes.image
          ]])
        }, [
          g(q.$slots, "image", {}, () => [
            h("img", {
              src: e.imageSrc,
              alt: e.imageAlt
            }, null, 8, oi)
          ])
        ], 2)) : v("", !0),
        C(o).footer ? (u(), d("div", li, [
          g(q.$slots, "footer")
        ])) : v("", !0)
      ]),
      _: 3
    }, 40, ["class", "style", "target", "to", "href", "data-ulu-proxy-click-init"]));
  }
}, _h = {
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
    },
    /**
     * Class modifiers (ie. 'transparent', 'secondary', etc)
     */
    modifiers: [String, Array],
    /**
     * Displays only the definition descriptions on the same line.
     */
    inline: Boolean,
    /**
     * Displays both the definition term and its descriptions on the same line.
     */
    inlineAll: Boolean,
    /**
     * Displays the list in a two-column grid on larger screens.
     */
    table: Boolean,
    /**
     * Adds a rule between each item.
     */
    separated: Boolean,
    /**
     * Adds a rule to the top of the first item.
     */
    separatedFirst: Boolean,
    /**
     * Adds a rule to the bottom of the last item.
     */
    separatedLast: Boolean,
    /**
     * Reduces the margin between items.
     */
    compact: Boolean
  },
  setup(e) {
    const s = e, t = _(() => ({
      inline: s.inline,
      "inline-all": s.inlineAll,
      table: s.table,
      separated: s.separated,
      "separated-first": s.separatedFirst,
      "separated-last": s.separatedLast,
      compact: s.compact
    })), { resolvedModifiers: n } = ae({
      props: s,
      internal: t,
      baseClass: "definition-list"
    });
    return (o, l) => (u(), d("dl", {
      class: m(["definition-list", [C(n), e.classes.list]])
    }, [
      (u(!0), d(U, null, x(e.items, (i, a) => (u(), d("div", {
        key: a,
        class: m(e.classes.item)
      }, [
        h("dt", {
          class: m(e.classes.term)
        }, [
          g(o.$slots, "term", {
            item: i,
            index: a
          }, () => [
            k(p(i.term), 1)
          ])
        ], 2),
        h("dd", {
          class: m(e.classes.description)
        }, [
          g(o.$slots, "description", {
            item: i,
            index: a
          }, () => [
            k(p(i.description), 1)
          ])
        ], 2)
      ], 2))), 128))
    ], 2));
  }
}, ii = ["href", "target"], ai = { class: "external-link__text" }, wh = {
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
    return (s, t) => (u(), d("a", {
      class: "external-link",
      href: e.href,
      target: e.target
    }, [
      h("span", ai, [
        g(s.$slots, "default", {}, () => [
          k(p(e.text), 1)
        ])
      ]),
      T(H, {
        class: "external-link__icon margin-left-small-x display-inline",
        icon: e.icon || "type:externalLink"
      }, null, 8, ["icon"])
    ], 8, ii));
  }
}, Sh = {
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
    const s = e, t = _(() => s.ordered || s.forceOrdered ? "ol" : "ul");
    return (n, o) => (u(), w(z(t.value), {
      class: m([
        {
          "list-ordered": e.ordered,
          "list-unordered": e.unordered,
          "list-lines": e.lines,
          "list-compact": e.compact
        },
        e.classes.list
      ]),
      style: N({
        listStyleType: e.listStyleType
      }),
      reversed: e.reversed,
      start: e.start
    }, {
      default: S(() => [
        (u(!0), d(U, null, x(e.items, (l, i) => (u(), d("li", {
          key: i,
          class: m(e.classes.listItem)
        }, [
          g(n.$slots, "default", {
            item: l,
            index: i
          }, () => [
            k(p(l), 1)
          ])
        ], 2))), 128))
      ]),
      _: 3
    }, 8, ["class", "style", "reversed", "start"]));
  }
}, ri = {}, ci = { id: "main-content" };
function ui(e, s) {
  return u(), d("main", ci, [
    g(e.$slots, "default")
  ]);
}
const kh = /* @__PURE__ */ B(ri, [["render", ui]]), di = { class: "spoke-spinner__spinner" }, $h = {
  __name: "UluSpokeSpinner",
  props: {
    /**
     * Type modifier for spinner (ie match scss style name)
     */
    type: String
  },
  setup(e) {
    return (s, t) => (u(), d("div", {
      class: m(["spoke-spinner", { [`spoke-spinner--${e.type}`]: e.type }])
    }, [
      h("div", di, [
        (u(), d(U, null, x(12, (n) => h("div", { key: n })), 64))
      ])
    ], 2));
  }
}, fi = ["role", "aria-labelledby"], hi = ["id"], mi = { class: "menu-stack__list" }, gi = { class: "menu-stack__selectable" }, vi = ["type", "id", "name", "value", "checked", "onChange"], yi = ["for"], bn = {
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
     * Use compact modifier on menu stack
     */
    compact: Boolean,
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
  setup(e, { emit: s }) {
    const t = e, n = s, o = _(() => t.legend ? t.legend.toLowerCase().replace(/\s+/g, "-") : `menu-${Math.random().toString(36).substring(7)}`), l = _(() => o.value ? `${o.value}-legend` : null), i = _(() => t.type === "radio" ? "radiogroup" : "group"), a = (f) => `${o.value}-${f.uid}`, c = (f) => t.type === "radio" ? t.modelValue === f.uid : Array.isArray(t.modelValue) ? t.modelValue.includes(f.uid) : t.type === "checkbox" && f.checked || !1, r = (f, b) => {
      if (t.type === "radio")
        n("update:modelValue", f.uid);
      else if (Array.isArray(t.modelValue)) {
        const y = [...t.modelValue], $ = y.indexOf(f.uid);
        $ > -1 ? y.splice($, 1) : y.push(f.uid), n("update:modelValue", y);
      } else
        f.checked = b.target.checked;
    };
    return (f, b) => (u(), d("div", {
      class: m(["menu-stack form-theme", {
        "menu-stack--hide-inputs": e.hideInputs,
        "menu-stack--compact": e.compact
      }]),
      role: i.value,
      "aria-labelledby": l.value
    }, [
      e.legend ? (u(), d("div", {
        key: 0,
        id: l.value,
        class: "hidden-visually"
      }, p(e.legend), 9, hi)) : v("", !0),
      h("ul", mi, [
        (u(!0), d(U, null, x(e.options, (y) => (u(), d("li", {
          class: "menu-stack__item",
          key: y.uid
        }, [
          h("div", gi, [
            h("input", {
              type: e.type,
              id: a(y),
              name: o.value,
              value: y.uid,
              checked: c(y),
              onChange: ($) => r(y, $)
            }, null, 40, vi),
            h("label", {
              for: a(y)
            }, [
              g(f.$slots, "default", { option: y }, () => [
                k(p(y?.label || y?.title || y?.text), 1)
              ])
            ], 8, yi)
          ])
        ]))), 128))
      ])
    ], 10, fi));
  }
}, pi = ["href", "download"], bi = { class: "margin-left-small-x" }, Ch = {
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
    const s = e, t = _(() => typeof window > "u" ? "" : window.URL.createObjectURL(s.file)), n = _(() => {
      const { size: o } = s.file, l = o / 1e6, i = o / 1e3, a = (c) => parseFloat(c.toFixed(2));
      return l > 1 ? `${a(l)}Mb` : i > 1 ? `${a(i)}Kb` : `${a(o)}B`;
    });
    return (o, l) => (u(), d("a", {
      class: "layout-flex-baseline",
      href: t.value,
      download: e.file.name
    }, [
      g(o.$slots, "default", {
        fileName: e.file.name,
        fileSize: n.value
      }, () => [
        T(H, {
          class: "ui-icon",
          icon: e.icon
        }, null, 8, ["icon"]),
        h("span", bi, [
          k(p(e.file.name) + " ", 1),
          e.noFileSize ? v("", !0) : (u(), w(mn, {
            key: 0,
            text: n.value,
            small: "",
            outline: ""
          }, null, 8, ["text"]))
        ])
      ])
    ], 8, pi));
  }
}, _i = { class: "site-form__item site-form__item--file" }, wi = ["for"], Si = ["multiple", "id"], Th = {
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
  setup(e, { emit: s }) {
    const t = /* @__PURE__ */ (() => {
      let i = 0;
      return () => `file-input-id-${++i}`;
    })(), n = s, o = t(), l = (i) => {
      n("file-change", i.target.files);
    };
    return (i, a) => (u(), d("div", _i, [
      h("label", {
        class: m({ "hidden-visually": e.labelHidden }),
        for: C(o)
      }, [
        g(i.$slots, "label", {}, () => [
          k(p(e.label), 1)
        ])
      ], 10, wi),
      h("input", J({
        type: "file",
        onChange: l,
        multiple: e.multiple,
        id: C(o)
      }, e.inputAttrs), null, 16, Si)
    ]));
  }
}, Ah = {
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
    return (s, t) => (u(), d("p", {
      class: m(["site-form__description", {
        "site-form__error": e.error,
        "site-form__warning": e.warning
      }])
    }, [
      e.error || e.warning ? (u(), w(H, {
        key: 0,
        icon: `type:${e.error ? "error" : "warning"}`
      }, null, 8, ["icon"])) : v("", !0),
      g(s.$slots, "default")
    ], 2));
  }
}, ki = { class: "site-form__item site-form__item--select" }, $i = ["for"], Ci = ["id", "value"], Ti = ["value"], Oh = {
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
      let n = 0;
      return () => `select-id-${++n}`;
    })())();
    return (n, o) => (u(), d("div", ki, [
      h("label", {
        class: m({ "hidden-visually": e.labelHidden }),
        for: C(t)
      }, [
        g(n.$slots, "default", {}, () => [
          k(p(e.label), 1)
        ])
      ], 10, $i),
      h("select", {
        id: C(t),
        value: e.modelValue,
        onInput: o[0] || (o[0] = (l) => n.$emit("update:modelValue", l.target.value))
      }, [
        o[1] || (o[1] = h("option", {
          disabled: "",
          value: ""
        }, "Please select one", -1)),
        (u(!0), d(U, null, x(e.options, (l, i) => (u(), d("option", {
          key: i,
          value: l.value
        }, p(l.text), 9, Ti))), 128))
      ], 40, Ci)
    ]));
  }
}, Ai = { class: "site-form__item site-form__item--text" }, Oi = ["for"], xi = ["value", "id"], xh = {
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
      let n = 0;
      return () => `text-input-id-${++n}`;
    })())();
    return (n, o) => (u(), d("div", Ai, [
      h("label", {
        class: m({ "hidden-visually": e.labelHidden }),
        for: C(t)
      }, [
        g(n.$slots, "default", {}, () => [
          k(p(e.label), 1)
        ])
      ], 10, Oi),
      h("input", {
        type: "text",
        value: e.modelValue,
        onInput: o[0] || (o[0] = (l) => n.$emit("update:modelValue", l.target.value)),
        id: C(t)
      }, null, 40, xi)
    ]));
  }
}, Ui = { class: "form-theme search-form type-small" }, ji = { class: "search-form__field" }, Bi = ["placeholder"], Ri = {
  class: "search-form__submit button button--primary",
  "aria-label": "Submit Search"
}, Uh = {
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
    return (s, t) => (u(), d("div", Ui, [
      h("div", ji, [
        t[0] || (t[0] = h("label", { class: "hidden-visually" }, "Search", -1)),
        h("input", {
          class: "search-form__input",
          type: "text",
          id: "example-input",
          placeholder: e.placeholder
        }, null, 8, Bi)
      ]),
      h("button", Ri, [
        T(H, { icon: "type:search" })
      ])
    ]));
  }
}, jh = {
  __name: "UluAdaptiveLayout",
  setup(e) {
    const s = wl("uluIsMobile");
    return (t, n) => !C(s) || !t.$slots.mobile ? g(t.$slots, "default", { key: 0 }) : g(t.$slots, "mobile", { key: 1 });
  }
}, Ei = {
  name: "UluDataGrid",
  async mounted() {
    const e = () => io(this.$el);
    e(), this.resizeHandler = Wt(e, 200, !1, this), window.addEventListener("resize", this.resizeHandler);
  },
  beforeUnmount() {
    this.resizeHandler && window.removeEventListener("resize", this.resizeHandler);
  }
};
function Ii(e, s, t, n, o, l) {
  return u(), d("div", null, [
    g(e.$slots, "default")
  ]);
}
const Bh = /* @__PURE__ */ B(Ei, [["render", Ii]]), Mi = {
  name: "UluTitleRail",
  components: {
    UluIcon: H
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
}, zi = {
  key: 0,
  class: "rail__item rail__item--pull"
};
function Pi(e, s, t, n, o, l) {
  const i = W("UluIcon");
  return u(), d("div", {
    class: m(["rail rail--title-rail", {
      "rail--rule": t.rule
    }])
  }, [
    h("div", {
      class: m(["rail__item rail__item--title", t.classes.itemTitle])
    }, [
      (u(), w(z(t.titleElement), {
        class: m(["layout-flex type-max-width-small no-margin", t.classes.title]),
        style: N({ alignItems: t.iconAlign })
      }, {
        default: S(() => [
          t.icon ? (u(), w(i, {
            key: 0,
            class: m(t.classes.icon),
            icon: t.icon
          }, null, 8, ["class", "icon"])) : v("", !0),
          g(e.$slots, "default", {}, () => [
            k(p(t.title), 1)
          ])
        ]),
        _: 3
      }, 8, ["class", "style"]))
    ], 2),
    e.$slots.end ? (u(), d("div", zi, [
      g(e.$slots, "end")
    ])) : v("", !0)
  ], 2);
}
const Rh = /* @__PURE__ */ B(Mi, [["render", Pi]]), Fi = {
  name: "UluBreadcrumb",
  components: {
    UluIcon: H
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
function Li(e, s, t, n, o, l) {
  const i = W("router-link"), a = W("UluIcon");
  return t.items.length ? (u(), d("nav", {
    key: 0,
    class: m(t.classes.nav),
    "aria-label": "Breadcrumb"
  }, [
    h("ol", {
      class: m(t.classes.list)
    }, [
      (u(!0), d(U, null, x(t.items, (c, r) => (u(), d("li", {
        key: r,
        class: m(t.classes.item)
      }, [
        c.current ? (u(), d("span", {
          key: 1,
          class: m(c.current)
        }, [
          g(e.$slots, "default", { item: c }, () => [
            k(p(c.title), 1)
          ])
        ], 2)) : (u(), w(i, {
          key: 0,
          to: c.to,
          class: m(t.classes.link),
          "aria-current": c.current ? "page" : null
        }, {
          default: S(() => [
            g(e.$slots, "default", { item: c }, () => [
              k(p(c.title), 1)
            ])
          ]),
          _: 2
        }, 1032, ["to", "class", "aria-current"])),
        r < t.items.length - 1 ? g(e.$slots, "separator", { key: 2 }, () => [
          T(a, {
            class: m(t.classes.separator),
            icon: t.separatorIcon || "type:pathSeparator"
          }, null, 8, ["class", "icon"])
        ]) : v("", !0)
      ], 2))), 128))
    ], 2)
  ], 2)) : v("", !0);
}
const Eh = /* @__PURE__ */ B(Fi, [["render", Li]]), Vi = {
  name: "UluNavStrip",
  components: {
    UluMenu: gn
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
function Hi(e, s, t, n, o, l) {
  const i = W("UluMenu");
  return u(), d("nav", {
    class: m(["nav-strip", {
      "nav-strip--rule": t.rule,
      "nav-strip--center": t.center,
      "nav-strip--right": t.right
    }])
  }, [
    T(i, {
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
const Ih = /* @__PURE__ */ B(Vi, [["render", Hi]]), Ni = { class: "pager__items js-pager__items" }, Wi = {
  key: 0,
  class: "pager__item pager__item--first"
}, Di = {
  key: 1,
  class: "pager__item pager__item--previous"
}, Xi = {
  key: 2,
  class: "pager__item pager__item--ellipsis",
  role: "presentation"
}, Gi = { class: "hidden-visually" }, qi = {
  key: 3,
  class: "pager__item pager__item--ellipsis",
  role: "presentation"
}, Yi = {
  key: 4,
  class: "pager__item pager__item--next"
}, Ki = {
  key: 5,
  class: "pager__item pager__item--last"
}, Mh = {
  __name: "UluPager",
  props: {
    /**
     * The HTML element to use for the visually hidden title.
     */
    titleElement: {
      type: String,
      default: "h4"
    },
    /**
     * List of pager items.
     */
    items: {
      type: Object,
      default: () => ({})
    },
    /**
     * The page number of the current page.
     */
    current: {
      type: Number,
      default: 1
    },
    /**
     * Ellipses configuration.
     */
    ellipses: {
      type: Object,
      default: () => ({})
    }
  },
  setup(e) {
    let s = 0;
    const t = e, n = `ulu-pager-${s++}`;
    function o(l) {
      return t.current == l ? "Current page" : `Go to page ${l}`;
    }
    return (l, i) => {
      const a = W("router-link");
      return e.items ? (u(), d("nav", {
        key: 0,
        class: "pager",
        role: "navigation",
        "aria-labelledby": n
      }, [
        (u(), w(z(e.titleElement), {
          id: n,
          class: "hidden-visually"
        }, {
          default: S(() => [...i[0] || (i[0] = [
            k("Pagination", -1)
          ])]),
          _: 1
        })),
        h("ul", Ni, [
          e.items.first ? (u(), d("li", Wi, [
            T(a, J({
              to: e.items.first.href,
              title: "Go to first page"
            }, e.items.first.attributes), {
              default: S(() => [
                i[1] || (i[1] = h("span", { class: "hidden-visually" }, "First page", -1)),
                T(H, {
                  icon: "fas fa-angle-double-left",
                  "aria-hidden": "true"
                })
              ]),
              _: 1
            }, 16, ["to"])
          ])) : v("", !0),
          e.items.previous ? (u(), d("li", Di, [
            T(a, J({
              to: e.items.previous.href,
              title: "Go to previous page",
              rel: "prev"
            }, e.items.previous.attributes), {
              default: S(() => [
                i[2] || (i[2] = h("span", { class: "hidden-visually" }, "Previous page", -1)),
                T(H, {
                  icon: "fas fa-angle-left",
                  "aria-hidden": "true"
                })
              ]),
              _: 1
            }, 16, ["to"])
          ])) : v("", !0),
          e.ellipses.previous ? (u(), d("li", Xi, "…")) : v("", !0),
          (u(!0), d(U, null, x(e.items.pages, (c, r) => (u(), d("li", {
            key: r,
            class: m(["pager__item", { "is-active": e.current == r }])
          }, [
            T(a, J({
              to: c.href,
              title: o(r)
            }, { ref_for: !0 }, c.attributes), {
              default: S(() => [
                h("span", Gi, p(e.current == r ? "Current page" : "Page"), 1),
                k(" " + p(r), 1)
              ]),
              _: 2
            }, 1040, ["to", "title"])
          ], 2))), 128)),
          e.ellipses.next ? (u(), d("li", qi, "…")) : v("", !0),
          e.items.next ? (u(), d("li", Yi, [
            T(a, J({
              to: e.items.next.href,
              title: "Go to next page",
              rel: "next"
            }, e.items.next.attributes), {
              default: S(() => [
                i[3] || (i[3] = h("span", { class: "hidden-visually" }, "Next page", -1)),
                T(H, {
                  icon: "fas fa-angle-right",
                  "aria-hidden": "true"
                })
              ]),
              _: 1
            }, 16, ["to"])
          ])) : v("", !0),
          e.items.last ? (u(), d("li", Ki, [
            T(a, J({
              to: e.items.last.href,
              title: "Go to last page"
            }, e.items.last.attributes), {
              default: S(() => [
                i[4] || (i[4] = h("span", { class: "hidden-visually" }, "Last page", -1)),
                T(H, {
                  icon: "fas fa-angle-double-right",
                  "aria-hidden": "true"
                })
              ]),
              _: 1
            }, 16, ["to"])
          ])) : v("", !0)
        ])
      ])) : v("", !0);
    };
  }
}, Zi = {}, Ji = {
  class: "site-skip-link hidden-visually-focusable",
  href: "#main-content"
};
function Qi(e, s) {
  return u(), d("a", Ji, " Skip to main content ");
}
const zh = /* @__PURE__ */ B(Zi, [["render", Qi]]), ea = {
  name: "UluConditionalText",
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
function ta(e, s, t, n, o, l) {
  return t.text != null ? (u(), w(z(t.element), { key: 0 }, {
    default: S(() => [
      k(p(t.text), 1)
    ]),
    _: 1
  })) : v("", !0);
}
const Ph = /* @__PURE__ */ B(ea, [["render", ta]]), sa = {
  __name: "UluConditionalWrapper",
  props: {
    /**
     * The underlying component or HTML tag to render.
     * Can be a string like 'div' or an imported component object.
     */
    is: {
      type: [String, Object, Function],
      // Can be a string or a component definition
      default: "div"
      // A sensible default for a wrapper
    },
    /**
     * If true, the wrapper will not be rendered and the content
     * will be output directly.
     */
    unwrapped: {
      type: Boolean,
      default: !1
    }
  },
  setup(e) {
    return (s, t) => e.unwrapped ? g(s.$slots, "default", { key: 1 }) : (u(), w(z(e.is), { key: 0 }, {
      default: S(() => [
        g(s.$slots, "default")
      ]),
      _: 3
    }));
  }
}, na = {}, oa = { style: { display: "none" } };
function la(e, s) {
  return u(), d("span", oa);
}
const Fh = /* @__PURE__ */ B(na, [["render", la]]), ia = {};
function aa(e, s) {
  const t = W("router-view");
  return u(), w(t);
}
const Lh = /* @__PURE__ */ B(ia, [["render", aa]]), ra = {
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
        width: it(500, 1e3),
        height: it(500, 1e3)
      } : { width: s, height: t };
    }
  }
}, ca = ["src", "alt"];
function ua(e, s, t, n, o, l) {
  return u(), d("img", {
    src: l.src,
    alt: t.alt
  }, null, 8, ca);
}
const Vh = /* @__PURE__ */ B(ra, [["render", ua]]), da = {
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
function fa(e, s, t, n, o, l) {
  return u(!0), d(U, null, x(parseInt(t.amount), (i) => (u(), w(z(t.element), { key: i }, {
    default: S(() => [...s[0] || (s[0] = [
      k(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed semper erat tincidunt tellus vestibulum dictum. Fusce vel augue commodo, egestas diam sed, accumsan leo. Maecenas congue nec nisl et ullamcorper. Maecenas tincidunt, tortor et viverra eleifend, enim leo vestibulum ipsum, quis placerat mi nisi nec ex. Vivamus a justo volutpat, scelerisque elit eget, lacinia ex. Phasellus dapibus sollicitudin tortor, vitae suscipit nunc condimentum ut. Cras suscipit feugiat nibh nec consectetur. Phasellus vitae quam blandit, cursus metus ut, placerat mi. Sed tempor lacus non est interdum imperdiet nec quis metus. Praesent vel eleifend diam. Donec tincidunt eget purus sed posuere. ", -1)
    ])]),
    _: 2
  }, 1024))), 128);
}
const Hh = /* @__PURE__ */ B(da, [["render", fa]]), ha = {
  name: "RouteAnnouncer",
  props: {
    /**
     * Allow user to bypass this functionality
     * - Function should return true if the page should be announced
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
      const t = this.validator(e, s, this.$route), n = this.exclude.some((o) => o.endsWith("*") ? e.startsWith(o.slice(0, o.length - 1)) : e === o);
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
function ma(e, s, t, n, o, l) {
  return l.title ? (u(), d("p", {
    key: 0,
    tabindex: "-1",
    class: "hidden-visually",
    ref: "el"
  }, p(l.title), 513)) : v("", !0);
}
const Nh = /* @__PURE__ */ B(ha, [["render", ma]]), Wh = {
  __name: "UluSanityRichText",
  props: {
    /**
     * The array of Portable Text blocks to render.
     */
    content: Array,
    /**
     * If true, the output will not be wrapped in a div with the 'wysiwyg' class.
     */
    noWrapper: {
      type: Boolean,
      default: !1
    }
  },
  setup(e) {
    const s = {
      types: {
        image: ({ value: t }) => qn("img", {
          src: `${t.imageUrl}?max-w=1100&fit=crop`,
          alt: t.imageAlt
        })
      }
    };
    return (t, n) => e.content?.length ? (u(), w(sa, {
      key: 0,
      class: "wysiwyg",
      unwrapped: e.noWrapper
    }, {
      default: S(() => [
        T(C(ao), {
          value: e.content,
          components: s
        }, null, 8, ["value"])
      ]),
      _: 1
    }, 8, ["unwrapped"])) : v("", !0);
  }
}, ga = {
  name: "AnimateNumber",
  props: {
    /**
     * The target number to animate to.
     */
    value: Number
  },
  watch: {
    value() {
      ro.to(this, {
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
function va(e, s, t, n, o, l) {
  return u(), d("span", null, [
    g(e.$slots, "default", { currentValue: o.currentValue }, () => [
      k(p(o.currentValue), 1)
    ])
  ]);
}
const Dh = /* @__PURE__ */ B(ga, [["render", va]]), ya = {
  key: 0,
  class: "progress-bar__header"
}, pa = {
  key: 1,
  class: "progress-bar__value progress-bar__value--amount"
}, ba = {
  key: 2,
  class: "progress-bar__icon"
}, _a = { class: "progress-bar__track" }, wa = {
  key: 1,
  class: "progress-bar__values"
}, Sa = { class: "progress-bar__value progress-bar__value--amount" }, ka = {
  key: 0,
  class: "progress-bar__value progress-bar__value--deficit"
}, $a = { class: "progress-bar__value progress-bar__value--total" }, Xh = {
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
      default: (e, s) => e
    },
    /**
     * Will put the amount only in header (there is a headerValue slot it you want to format)
     */
    amountInHeader: Boolean
  },
  setup(e) {
    const s = e, t = (i, a) => `${a === 0 ? 0 : i / a * 100}%`, n = _(() => s.indeterminate ? null : t(s.amount, s.total)), o = _(() => t(s.deficit, s.total)), l = _(() => ({
      "progress-bar": !0,
      "progress-bar--small": s.small,
      "progress-bar--positive": s.positive,
      "progress-bar--negative": s.negative,
      "progress-bar--loader": s.loader,
      "progress-bar--indeterminate": s.indeterminate,
      "type-small": s.small
      // From original component, seems to control font size
    }));
    return (i, a) => (u(), d("div", {
      class: m(l.value)
    }, [
      e.label || i.$slots.label || i.$slots.icon || e.amountInHeader ? (u(), d("div", ya, [
        e.label ? (u(), w(z(e.labelElement), {
          key: 0,
          class: m(["progress-bar__label", [e.classes.label, { "hidden-visually": e.labelHidden }]])
        }, {
          default: S(() => [
            g(i.$slots, "label", {}, () => [
              k(p(e.label), 1)
            ])
          ]),
          _: 3
        }, 8, ["class"])) : v("", !0),
        e.amountInHeader ? (u(), d("div", pa, [
          a[0] || (a[0] = h("strong", { class: "hidden-visually" }, "Amount:", -1)),
          g(i.$slots, "valueAmount", { value: e.amount }, () => [
            k(p(e.formatValue(e.amount, "amount")), 1)
          ])
        ])) : v("", !0),
        i.$slots.icon ? (u(), d("div", ba, [
          g(i.$slots, "icon")
        ])) : v("", !0)
      ])) : v("", !0),
      h("div", _a, [
        h("div", {
          class: "progress-bar__bar",
          style: N({ width: n.value })
        }, null, 4),
        e.deficit > 0 ? (u(), d("div", {
          key: 0,
          class: "progress-bar__bar--deficit",
          style: N({ width: o.value })
        }, null, 4)) : v("", !0)
      ]),
      !e.noValues && !e.amountInHeader && !e.loader && !e.indeterminate ? (u(), d("div", wa, [
        h("div", Sa, [
          a[1] || (a[1] = h("strong", { class: "hidden-visually" }, "Amount:", -1)),
          g(i.$slots, "valueAmount", { value: e.amount }, () => [
            k(p(e.formatValue(e.amount, "amount")), 1)
          ])
        ]),
        e.deficit > 0 ? (u(), d("div", ka, [
          a[2] || (a[2] = h("strong", { class: "hidden-visually" }, "Deficit: ", -1)),
          g(i.$slots, "valueDeficit", { value: e.deficit }, () => [
            k("-" + p(e.formatValue(e.deficit, "deficit")), 1)
          ])
        ])) : v("", !0),
        h("div", $a, [
          a[3] || (a[3] = h("strong", { class: "hidden-visually" }, "Total:", -1)),
          g(i.$slots, "valueTotal", { value: e.total }, () => [
            k(p(e.formatValue(e.total, "total")), 1)
          ])
        ])
      ])) : v("", !0)
    ], 2));
  }
}, Ca = { class: "hidden-visually" }, Ta = { class: "progress-circle__chart" }, Aa = {
  class: "progress-circle__chart-svg",
  viewBox: "0 0 32 32"
}, Oa = {
  key: 0,
  class: "progress-circle__chart-value"
}, xa = {
  key: 0,
  class: "progress-circle__value type-small-x"
}, Gh = {
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
    const s = e, t = j(null), n = (c) => c === 100 ? 101 : c, o = (c = 0) => {
      if (!t.value || !t.value.animate) return;
      const r = { strokeDasharray: [`${c} 100`, l.value] };
      t.value.animate(r, { duration: s.duration, easing: s.easing, fill: "forwards" });
    };
    We(() => s.percentage, (c, r) => {
      c !== r && o(n(r));
    });
    const l = _(() => `${n(s.percentage)} 100`), i = _(() => s.outside || s.outsideBelow || s.small), a = _(() => {
      const c = {
        "progress-circle": !0,
        "progress-circle--small": s.small,
        "progress-circle--pie": s.pieStyle,
        "progress-circle--outside": i.value,
        "progress-circle--outside-below": s.outsideBelow,
        "progress-circle--no-mask": s.noMask
      };
      return s.status && (c[`progress-circle--${s.status}`] = !0), c;
    });
    return ht(() => {
      o();
    }), (c, r) => (u(), d("div", {
      class: m(a.value)
    }, [
      h("strong", Ca, p(e.label), 1),
      h("div", Ta, [
        (u(), d("svg", Aa, [
          r[0] || (r[0] = h("circle", {
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
            style: N({ strokeDasharray: l.value })
          }, null, 4),
          r[1] || (r[1] = h("circle", {
            class: "progress-circle__chart-mask",
            cx: "16",
            cy: "16"
          }, null, -1))
        ])),
        !i.value && !e.noValue ? (u(), d("strong", Oa, [
          g(c.$slots, "value", { value: e.percentage }, () => [
            k(p(e.formatValue(e.percentage)), 1)
          ])
        ])) : v("", !0)
      ]),
      i.value && !e.noValue ? (u(), d("strong", xa, [
        g(c.$slots, "value", { value: e.percentage }, () => [
          k(p(e.formatValue(e.percentage)), 1)
        ])
      ])) : v("", !0)
    ], 2));
  }
};
function Ua(e) {
  const s = /* @__PURE__ */ new Set();
  for (const t of e)
    for (const n of t)
      s.add(n);
  return s;
}
function Pt(e) {
  if (!e || e.length === 0) return /* @__PURE__ */ new Set();
  const s = e.sort((n, o) => n.size - o.size), t = new Set(s[0]);
  for (let n = 1; n < s.length; n++) {
    for (const o of t)
      s[n].has(o) || t.delete(o);
    if (t.size === 0) break;
  }
  return t;
}
function Ot(e, s, t) {
  if (!e || e.length === 0)
    return t;
  const n = e.map((o) => {
    const l = o.children.map((i) => {
      const a = `${o.uid}:${i.uid}`;
      return s.get(a) || /* @__PURE__ */ new Set();
    });
    return o.match === "all" ? Pt(l) : Ua(l);
  });
  return Pt(n);
}
function ja(e, s) {
  return !s || !Array.isArray(s) ? [] : s.map((t) => {
    const n = /* @__PURE__ */ new Set(), o = t.getValue || ((a) => a[t.uid]);
    e.forEach((a) => {
      const c = o(a);
      Array.isArray(c) ? c.forEach((r) => r && n.add(r)) : c && n.add(c);
    });
    const l = t.getLabel || ((a) => a), i = [...n].map((a) => ({
      uid: a,
      label: l(a),
      selected: !1
    }));
    return i.sort((a, c) => String(a.label).localeCompare(String(c.label))), {
      ...t,
      children: i
    };
  });
}
function qh(e, s = {}) {
  const t = (O, E) => {
    const F = O[E];
    return F === null || typeof F > "u" ? [] : Array.isArray(F) ? F : [F];
  }, {
    initialFacets: n,
    facetFields: o,
    initialSearchValue: l = "",
    initialSortType: i = "az",
    noDefaultSorts: a = !1,
    extraSortTypes: c = {},
    searchOptions: r = {},
    getItemFacet: f = t,
    getSortValue: b = (O) => O.title || O.label || "",
    countMode: y = "none"
    // 'none', 'simple', 'intuitive'
  } = s, $ = (O) => O.sort((E, F) => {
    const I = b(E), V = b(F);
    return I && V ? String(I).localeCompare(String(V)) : I ? -1 : V ? 1 : 0;
  }), A = {
    az: { text: "A-Z", sort: $ },
    za: { text: "Z-A", sort: (O) => $(O).reverse() }
  };
  function M(O) {
    return (O || []).map((E) => ({
      ...E,
      open: E.open || !1,
      children: E.children.map((F) => ({
        ...F,
        selected: F.selected || !1
      })),
      selectedCount: 0
    }));
  }
  const R = j([]), ne = j(l), $e = j(i), q = _(() => !o || !e.value?.length ? null : ja(e.value, o)), te = _(() => ({
    ...a ? {} : A,
    ...c
  })), K = _(() => {
    const O = /* @__PURE__ */ new Map(), E = se.value;
    if (!E || !o) return O;
    const F = new Map(o.map((I) => {
      const V = I.getValue || ((D) => D[I.uid]);
      return [I.uid, V];
    }));
    for (let I = 0; I < E.length; I++) {
      const V = E[I];
      for (const D of o) {
        const G = F.get(D.uid)(V), Q = Array.isArray(G) ? G : G ? [G] : [];
        for (const Qe of Q) {
          const ze = `${D.uid}:${Qe}`;
          O.has(ze) || O.set(ze, /* @__PURE__ */ new Set()), O.get(ze).add(I);
        }
      }
    }
    return O;
  }), St = _(() => ({
    shouldSort: !0,
    keys: ["title", "label", "description", "author"],
    ...r
  })), se = _(() => ne.value?.length ? new co(e.value, St.value).search(ne.value).map((E) => E.item) : e.value), he = _(() => {
    const O = [];
    return R.value.forEach((E) => {
      const F = E.children.filter((I) => I.selected);
      F.length > 0 && O.push({ ...E, children: F });
    }), O;
  }), X = _(() => {
    if (!he.value.length)
      return se.value;
    const O = K.value;
    if (O.size === 0 && se.value.length > 0 && o?.length > 0)
      return [];
    const E = new Set(se.value.map((V, D) => D)), F = Ot(he.value, O, E), I = [];
    for (const V of F)
      I.push(se.value[V]);
    return I;
  }), me = _(() => {
    const O = te.value[$e.value]?.sort;
    return typeof O != "function" ? X.value : O([...X.value]);
  });
  function Ce() {
    R.value.forEach((O) => {
      O.children && O.children.forEach((E) => E.selected = !1), O.selectedCount = 0;
    });
  }
  function as({ groupUid: O, facetUid: E, selected: F }) {
    const I = R.value.find((V) => V.uid === O);
    if (I) {
      !I.multiple && F && I.children.forEach((D) => {
        D.uid !== E && (D.selected = !1);
      });
      const V = I.children.find((D) => D.uid === E);
      V && (V.selected = F), I.selectedCount = I.children.filter((D) => D.selected).length;
    }
  }
  return We(q, (O) => {
    const E = M(n || O);
    E.forEach((F) => {
      F.selectedCount = F.children.filter((I) => I.selected).length;
    }), R.value = E;
  }, { immediate: !0 }), We([he, se], ([O, E], [F, I]) => {
    if (!(y === "none" || !R.value.length) && !(O === F && E === I)) {
      if (y === "simple")
        R.value.forEach((V) => {
          const D = O.filter((G) => G.uid !== V.uid), Me = getFilteredItems(E, D);
          V.children.forEach((G) => {
            G.count = Me.filter((Q) => f(Q, V.uid).includes(G.uid)).length;
          });
        });
      else if (y === "intuitive") {
        const V = K.value;
        if (V.size === 0 && se.value.length > 0 && o?.length > 0)
          return;
        const D = new Set(se.value.map((G, Q) => Q)), Me = Ot(O, V, D);
        R.value.forEach((G) => {
          G.children.forEach((Q) => {
            const Qe = `${G.uid}:${Q.uid}`, ze = V.get(Qe) || /* @__PURE__ */ new Set();
            if (Q.selected)
              if (G.multiple) {
                const Te = Pt([Me, ze]);
                Q.count = Te.size;
              } else
                Q.count = Me.size;
            else {
              const Te = [];
              for (const et of O)
                Te.push({ ...et, children: [...et.children] });
              let Pe = Te.find((et) => et.uid === G.uid);
              Pe || (Pe = { ...G, children: [] }, Te.push(Pe)), G.multiple ? Pe.children.push(Q) : Pe.children = [Q];
              const Pn = Ot(Te, V, D);
              Q.count = Pn.size;
            }
          });
        });
      }
    }
  }, { deep: !0, immediate: !0 }), {
    facets: R,
    searchValue: ne,
    selectedSort: $e,
    sortTypes: te,
    displayItems: me,
    selectedFacets: he,
    clearFilters: Ce,
    handleFacetChange: as
  };
}
const Ba = ["onClick"], Yh = {
  __name: "UluFacetsActiveFilters",
  props: {
    /**
     * The selectedFacets array from the useFacets composable.
     */
    selectedFacets: {
      type: Array,
      default: () => []
    },
    /**
     * Element to use for label
     */
    labelElement: {
      type: String,
      default: "strong"
    },
    /**
     * Icon to use for remove (in button)
     */
    removeIcon: {
      type: String,
      default: "type:close"
    },
    /**
     * Classes for different element { label, list, item, filterButton, filterButtonText, filterButtonIcon, clearButton }
     */
    classes: {
      type: Object,
      default: () => ({
        container: "layout-flex flex-wrap",
        label: "hidden-visually",
        list: "layout-flex flex-wrap",
        item: "margin-right-small-x",
        filterButton: "button button--small button--outline no-min-width",
        filterButtonText: null,
        filterButtonIcon: "button__icon",
        clearButton: "button button--small"
      })
    }
  },
  emits: ["facet-change", "clear-filters"],
  setup(e, { emit: s }) {
    const t = e, n = s, o = _(() => {
      const a = [];
      return t.selectedFacets.forEach((c) => {
        c.children.forEach((r) => {
          a.push({
            ...r,
            groupUid: c.uid
          });
        });
      }), a;
    });
    function l(a) {
      n("facet-change", {
        groupUid: a.groupUid,
        facetUid: a.uid,
        selected: !1
      });
    }
    function i() {
      n("clear-filters");
    }
    return (a, c) => o.value.length ? (u(), d("div", {
      key: 0,
      class: m(["facets-active", e.classes.container])
    }, [
      (u(), w(z(e.labelElement), {
        class: m(["facets-active__label", e.classes.label])
      }, {
        default: S(() => [
          g(a.$slots, "label", {}, () => [
            c[0] || (c[0] = k(" Active Filters: ", -1))
          ])
        ]),
        _: 3
      }, 8, ["class"])),
      h("ul", {
        class: m(["facets-active__list", e.classes.list])
      }, [
        (u(!0), d(U, null, x(o.value, (r) => (u(), d("li", {
          class: m(["facets-active__item", e.classes.item]),
          key: `${r.groupUid}-${r.uid}`
        }, [
          h("button", {
            class: m(e.classes.filterButton),
            icon: "type:remove",
            onClick: (f) => l(r)
          }, [
            h("span", {
              class: m(e.classes.filterButtonText)
            }, [
              c[1] || (c[1] = h("span", { class: "hidden-visually" }, "Remove Active Filter:", -1)),
              k(" " + p(r.label), 1)
            ], 2),
            h("span", {
              class: m(e.classes.filterButtonIcon)
            }, [
              T(H, { icon: e.removeIcon }, null, 8, ["icon"])
            ], 2)
          ], 10, Ba)
        ], 2))), 128))
      ], 2),
      h("button", {
        onClick: i,
        class: m(e.classes.clearButton)
      }, "Clear All", 2)
    ], 2)) : v("", !0);
  }
}, Ra = { key: 0 }, ct = {
  __name: "UluFacetsList",
  props: {
    groupUid: String,
    groupName: String,
    children: Array,
    type: {
      type: String,
      default: "checkbox"
    },
    compact: Boolean,
    modelValue: [String, Array]
  },
  emits: ["facet-change"],
  setup(e, { emit: s }) {
    const t = e, n = s, o = _(() => t.type === "radio" ? [{ label: `All ${t.groupName}s`, uid: "" }, ...t.children] : t.children);
    function l(i) {
      if (t.type === "radio") {
        const a = i;
        t.children.forEach((c) => {
          const r = c.uid === a;
          c.selected !== r && n("facet-change", {
            groupUid: t.groupUid,
            facetUid: c.uid,
            selected: r
          });
        });
      } else {
        const a = new Set(i);
        t.children.forEach((c) => {
          const r = a.has(c.uid);
          c.selected !== r && n("facet-change", {
            groupUid: t.groupUid,
            facetUid: c.uid,
            selected: r
          });
        });
      }
    }
    return (i, a) => (u(), w(bn, {
      class: "facets-list",
      legend: e.groupUid,
      type: e.type,
      options: o.value,
      compact: e.compact,
      "model-value": e.modelValue,
      "onUpdate:modelValue": l
    }, {
      default: S(({ option: c }) => [
        k(p(c.label) + " ", 1),
        c.count !== void 0 ? (u(), d("span", Ra, "(" + p(c.count) + ")", 1)) : v("", !0)
      ]),
      _: 1
    }, 8, ["legend", "type", "options", "compact", "model-value"]));
  }
}, Ea = { class: "facets-filters" }, Kh = {
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
    },
    /**
     * Whether to use compact modifier on selectable menu
     */
    compact: Boolean
  },
  emits: ["facet-change"],
  setup(e, { emit: s }) {
    const t = s, n = (o) => o.multiple ? o.children.filter((l) => l.selected).map((l) => l.uid) : o.children.find((l) => l.selected)?.uid || "";
    return (o, l) => (u(), d("div", Ea, [
      (u(!0), d(U, null, x(e.facets, (i) => (u(), w(Mt, {
        key: i.uid,
        classes: {
          container: ["facets-filters__group", e.classes.group],
          containerOpen: ["facets-filters__group--open", e.classes.groupOpen],
          containerClosed: ["facets-filters__group--closed", e.classes.groupClosed],
          trigger: ["facets-filters__group-trigger", e.classes.groupTrigger],
          content: ["facets-filters__group-content", e.classes.groupContent]
        },
        startOpen: i.open
      }, {
        trigger: S(({ isOpen: a }) => [
          g(o.$slots, "groupTrigger", {
            group: i,
            isOpen: a
          }, () => [
            k(p(i.name), 1)
          ])
        ]),
        default: S(() => [
          T(ct, {
            children: i.children.slice(0, e.maxVisible),
            groupUid: i.uid,
            groupName: i.name,
            type: i.multiple ? "checkbox" : "radio",
            compact: e.compact,
            "model-value": n(i),
            onFacetChange: l[0] || (l[0] = (a) => t("facet-change", a))
          }, null, 8, ["children", "groupUid", "groupName", "type", "compact", "model-value"]),
          i.children.length > e.maxVisible ? (u(), w(Mt, {
            key: 0,
            class: m(["facets-filters__more-facets", e.classes.moreFacets])
          }, {
            trigger: S(({ isOpen: a }) => [
              k(p(a ? "View Less" : "Show More"), 1)
            ]),
            default: S(() => [
              T(ct, {
                children: i.children.slice(e.maxVisible),
                groupUid: i.uid,
                groupName: i.name,
                type: i.multiple ? "checkbox" : "radio",
                compact: e.compact,
                "model-value": n(i),
                onFacetChange: l[1] || (l[1] = (a) => t("facet-change", a))
              }, null, 8, ["children", "groupUid", "groupName", "type", "compact", "model-value"])
            ]),
            _: 2
          }, 1032, ["class"])) : v("", !0)
        ]),
        _: 2
      }, 1032, ["classes", "startOpen"]))), 128))
    ]));
  }
}, Ia = { class: "facets-filters" }, Zh = {
  __name: "UluFacetsFilterAccordions",
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
    },
    /**
     * Whether to use compact modifier on selectable menu
     */
    compact: Boolean,
    /**
     * Class modifiers for accordion (ie. 'transparent', 'secondary', etc)
     */
    accordionModifiers: [String, Array]
  },
  emits: ["facet-change"],
  setup(e, { emit: s }) {
    const t = s, n = (o) => o.multiple ? o.children.filter((l) => l.selected).map((l) => l.uid) : o.children.find((l) => l.selected)?.uid || "";
    return (o, l) => (u(), d("div", Ia, [
      (u(!0), d(U, null, x(e.facets, (i) => (u(), w(ys, {
        key: i.uid,
        modifiers: e.accordionModifiers,
        startOpen: i.open
      }, {
        trigger: S(({ isOpen: a }) => [
          g(o.$slots, "groupTrigger", {
            group: i,
            isOpen: a
          }, () => [
            k(p(i.name), 1)
          ])
        ]),
        default: S(() => [
          T(ct, {
            children: i.children.slice(0, e.maxVisible),
            groupUid: i.uid,
            groupName: i.name,
            type: i.multiple ? "checkbox" : "radio",
            compact: e.compact,
            "model-value": n(i),
            onFacetChange: l[0] || (l[0] = (a) => t("facet-change", a))
          }, null, 8, ["children", "groupUid", "groupName", "type", "compact", "model-value"]),
          i.children.length > e.maxVisible ? (u(), w(ys, {
            key: 0,
            class: m(["facets-filters__more-facets", e.classes.moreFacets]),
            modifiers: e.accordionModifiers
          }, {
            trigger: S(({ isOpen: a }) => [
              k(p(a ? "View Less" : "Show More"), 1)
            ]),
            default: S(() => [
              T(ct, {
                children: i.children.slice(e.maxVisible),
                groupUid: i.uid,
                groupName: i.name,
                type: i.multiple ? "checkbox" : "radio",
                compact: e.compact,
                "model-value": n(i),
                onFacetChange: l[1] || (l[1] = (a) => t("facet-change", a))
              }, null, 8, ["children", "groupUid", "groupName", "type", "compact", "model-value"])
            ]),
            _: 2
          }, 1032, ["class", "modifiers"])) : v("", !0)
        ]),
        _: 2
      }, 1032, ["modifiers", "startOpen"]))), 128))
    ]));
  }
}, Jh = {
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
  setup(e, { emit: s }) {
    const t = s, n = (a) => a.multiple ? a.children : [{ label: `All ${a.name}s`, uid: "" }, ...a.children], o = (a) => a.multiple ? a.children.filter((c) => c.selected).map((c) => c.uid) : a.children.find((c) => c.selected)?.uid || "", l = (a) => {
      const c = a.children.filter((f) => f.selected), r = c.length;
      return r === 0 ? "All" : a.multiple ? r === 1 ? c[0].label : `${r} selected` : c[0].label;
    };
    function i(a, c, r) {
      if (a.multiple) {
        const f = new Set(c);
        a.children.forEach((b) => {
          const y = f.has(b.uid);
          b.selected !== y && t("facet-change", {
            groupUid: a.uid,
            facetUid: b.uid,
            selected: y
          });
        });
      } else {
        const f = c;
        a.children.forEach((b) => {
          const y = b.uid === f;
          b.selected !== y && t("facet-change", {
            groupUid: a.uid,
            facetUid: b.uid,
            selected: y
          });
        }), r();
      }
    }
    return (a, c) => (u(), d("div", {
      class: m(e.classes.container)
    }, [
      (u(!0), d(U, null, x(e.facets, (r) => (u(), d("div", {
        key: r.uid,
        class: m(e.classes.group)
      }, [
        T(mt, {
          classes: {
            trigger: e.classes.trigger,
            content: e.classes.content
          }
        }, {
          trigger: S(() => [
            g(a.$slots, "trigger", {
              group: r,
              label: l(r)
            }, () => [
              h("span", null, [
                k(p(r.name) + ": ", 1),
                h("strong", null, p(l(r)), 1)
              ])
            ]),
            T(H, {
              class: m(e.classes.triggerIcon),
              icon: "fas fa-chevron-down"
            }, null, 8, ["class"])
          ]),
          default: S(({ close: f }) => [
            T(bn, {
              legend: r.name,
              type: r.multiple ? "checkbox" : "radio",
              options: n(r),
              "model-value": o(r),
              "onUpdate:modelValue": (b) => i(r, b, f),
              hideInputs: e.hideInputs
            }, null, 8, ["legend", "type", "options", "model-value", "onUpdate:modelValue", "hideInputs"])
          ]),
          _: 2
        }, 1032, ["classes"])
      ], 2))), 128))
    ], 2));
  }
}, Ma = { class: "facets-dropdown-filters" }, za = ["for"], Pa = ["id", "onChange"], Fa = { value: "" }, La = ["value", "selected"], Qh = {
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
    function n(o, l) {
      const i = l.target.value;
      o.children.find((c) => c.selected)?.uid !== i && o.children.forEach((c) => {
        const r = c.uid === i;
        c.selected !== r && t("facet-change", {
          groupUid: o.uid,
          facetUid: c.uid,
          selected: r
        });
      });
    }
    return (o, l) => (u(), d("div", Ma, [
      (u(!0), d(U, null, x(e.facets, (i) => (u(), d("div", {
        class: "facets-dropdown-filters__group",
        key: i.uid
      }, [
        h("label", {
          for: `facet-dropdown-${i.uid}`,
          class: "facets-dropdown-filters__label"
        }, p(i.name), 9, za),
        h("select", {
          id: `facet-dropdown-${i.uid}`,
          class: "facets-dropdown-filters__select",
          onChange: (a) => n(i, a)
        }, [
          h("option", Fa, "All " + p(i.name) + "s", 1),
          (u(!0), d(U, null, x(i.children, (a) => (u(), d("option", {
            key: a.uid,
            value: a.uid,
            selected: a.selected
          }, p(a.label), 9, La))), 128))
        ], 40, Pa)
      ]))), 128))
    ]));
  }
}, Va = { class: "facets-header-layout" }, Ha = { class: "facets-header-layout__header" }, Na = { class: "facets-header-layout__main" }, em = {
  __name: "UluFacetsHeaderLayout",
  setup(e) {
    return (s, t) => (u(), d("div", Va, [
      h("div", Ha, [
        g(s.$slots, "header")
      ]),
      h("div", Na, [
        g(s.$slots, "main")
      ])
    ]));
  }
}, Wa = { class: "facets-results" }, Da = {
  key: 1,
  class: "facets-results__empty"
}, tm = {
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
    return (s, t) => (u(), d("div", Wa, [
      e.items.length ? (u(), w(Gs, {
        key: 0,
        tag: e.tag,
        name: e.transitionName,
        class: m(["facets-results__list", e.classes.list])
      }, {
        default: S(() => [
          (u(!0), d(U, null, x(e.items, (n, o) => (u(), d("li", {
            class: m(["facets-results__item", e.classes.item]),
            key: n.id || o
          }, [
            g(s.$slots, "item", {
              item: n,
              index: o
            })
          ], 2))), 128))
        ]),
        _: 3
      }, 8, ["tag", "name", "class"])) : (u(), d("div", Da, [
        g(s.$slots, "empty", {}, () => [
          t[0] || (t[0] = h("p", null, "No matching items found.", -1))
        ])
      ]))
    ]));
  }
}, Xa = { class: "facets-search" }, Ga = ["placeholder"], sm = {
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
    let o = 0;
    const l = `facet-view-keyword-${++o}`, i = _({
      get() {
        return t.modelValue;
      },
      set(a) {
        n("update:modelValue", a);
      }
    });
    return (a, c) => (u(), d("div", Xa, [
      h("label", {
        class: m(e.classes.searchLabel),
        for: l
      }, [...c[1] || (c[1] = [
        h("strong", null, "Search", -1)
      ])], 2),
      xe(h("input", {
        id: l,
        class: m(e.classes.searchInput),
        "onUpdate:modelValue": c[0] || (c[0] = (r) => i.value = r),
        type: "text",
        placeholder: e.placeholder
      }, null, 10, Ga), [
        [Yn, i.value]
      ])
    ]));
  }
}, qa = { class: "facets-sidebar__header" }, Ya = { class: "facets-sidebar__mobile-controls" }, Ka = { class: "facets-sidebar__body" }, Za = { class: "facets-sidebar__main" }, nm = {
  __name: "UluFacetsSidebarLayout",
  props: {
    mobileButtonText: {
      type: String,
      default: "Filters & Sort"
    },
    /**
     * Classes for elements. See UluCollapsible for all available class keys (trigger, content, etc).
     * The 'icon' key is also available for the icon span.
     * - Any valid class binding value per element
     */
    classes: {
      type: Object,
      default: () => ({
        mobileButton: "button"
      })
    }
  },
  setup(e) {
    const s = j(!1), t = dt("uluIsMobile"), n = j(null), o = j(null), l = _(() => t.value ? o.value : n.value);
    return (i, a) => (u(), d("div", {
      class: m(["facets-sidebar", { "facets-sidebar--filters-hidden": C(t) }])
    }, [
      h("div", qa, [
        g(i.$slots, "header")
      ]),
      xe(h("div", Ya, [
        h("button", {
          class: m(e.classes.mobileButton),
          onClick: a[0] || (a[0] = (c) => s.value = !0)
        }, p(e.mobileButtonText), 3)
      ], 512), [
        [Bt, C(t)]
      ]),
      h("div", Ka, [
        xe(h("div", {
          class: "facets-sidebar__sidebar",
          ref_key: "desktopTarget",
          ref: n
        }, null, 512), [
          [Bt, !C(t)]
        ]),
        h("div", Za, [
          g(i.$slots, "main")
        ])
      ]),
      C(t) ? (u(), w(ln, {
        key: 0,
        modelValue: s.value,
        "onUpdate:modelValue": a[1] || (a[1] = (c) => s.value = c),
        position: "right",
        title: "Filters & Sort",
        allowResize: ""
      }, {
        default: S(() => [
          h("div", {
            class: "facets-sidebar__sidebar",
            ref_key: "mobileTarget",
            ref: o
          }, null, 512)
        ]),
        _: 1
      }, 8, ["modelValue"])) : v("", !0),
      l.value ? (u(), w(ut, {
        key: 1,
        to: l.value
      }, [
        g(i.$slots, "sidebar")
      ], 8, ["to"])) : v("", !0)
    ], 2));
  }
}, Ja = ["for"], Qa = ["value", "id"], er = ["value"], om = {
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
    const n = s, o = j(`ulu-facet-sort-${++t}`);
    return (l, i) => (u(), d("div", {
      class: m(["facets-sort", e.classes.sortForm])
    }, [
      h("label", {
        for: o.value,
        class: m(e.classes.sortFormLabel)
      }, [
        g(l.$slots, "default", {}, () => [
          i[1] || (i[1] = k("Sort:", -1))
        ])
      ], 10, Ja),
      h("select", {
        value: e.modelValue,
        onChange: i[0] || (i[0] = (a) => n("update:modelValue", a.target.value)),
        id: o.value,
        class: m(e.classes.sortFormSelect)
      }, [
        (u(!0), d(U, null, x(e.sortTypes, (a, c) => (u(), d("option", {
          value: c,
          key: c
        }, p(a.text), 9, er))), 128))
      ], 42, Qa)
    ], 2));
  }
}, _n = Symbol(), wn = Symbol(), pt = Symbol(), tr = {
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
      [pt]: _(() => this.sections),
      [_n]: (e) => {
        const { titleId: s, title: t } = e, { element: n } = e.$refs;
        this.sections.push({
          instance: e,
          titleId: s,
          title: t,
          element: n,
          active: !1
        }), this.update();
      },
      [wn]: (e) => {
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
      let o = 0;
      const l = (i) => {
        i.forEach(({ target: a, isIntersecting: c }) => {
          const r = this.getSectionIndex(a), f = a.offsetTop, b = s[r], y = r === 0 && o > f, $ = r === s.length - 1 && o < f;
          b && this.$nextTick(() => {
            c ? (t(b), b.active = !0) : (y && !n || $ && b.active) && t(), this.$emit("section-change", {
              section: b,
              sections: s,
              active: c
            });
          });
        });
      };
      this.observer = new IntersectionObserver(l, e);
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
}, sr = { class: "scroll-anchors" };
function nr(e, s, t, n, o, l) {
  return u(), d("div", sr, [
    g(e.$slots, "default")
  ]);
}
const lm = /* @__PURE__ */ B(tr, [["render", nr]]), or = {
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
}, lr = ["href"];
function ir(e, s, t, n, o, l) {
  return l.sections.length ? (u(), w(z(t.element), {
    key: 0,
    class: "scroll-anchors__nav"
  }, {
    default: S(() => [
      h("ul", null, [
        (u(!0), d(U, null, x(l.sections, (i, a) => (u(), d("li", {
          key: a,
          class: m({ "is-active": i.active })
        }, [
          h("a", {
            class: m({ "is-active": i.active }),
            href: `#${i.titleId}`
          }, p(i.title), 11, lr)
        ], 2))), 128))
      ])
    ]),
    _: 1
  })) : v("", !0);
}
const im = /* @__PURE__ */ B(or, [["render", ir]]), ar = {
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
      const { sections: e, linkRefs: s } = this, t = Object.keys(s).length;
      if (!e || !t)
        return !1;
      const n = e.findIndex((a) => a.active);
      if (n === -1)
        return !1;
      const o = this.linkRefs[n], { offsetTop: l, offsetHeight: i } = o;
      return {
        y: l,
        height: i,
        initial: this.inidica
      };
    }
  },
  watch: {
    indicatorStyles(e) {
      e && !this.indicatorAnimReady && on(() => {
        this.indicatorAnimReady = !0;
      });
    }
  },
  methods: {
    addLinkRef(e, s) {
      this.linkRefs[e] = s;
    }
  }
}, rr = { class: "scroll-anchors__rail" }, cr = ["href"];
function ur(e, s, t, n, o, l) {
  return l.sections.length ? (u(), w(z(t.element), {
    key: 0,
    class: "scroll-anchors__nav scroll-anchors__nav--animated"
  }, {
    default: S(() => [
      h("ul", rr, [
        (u(!0), d(U, null, x(l.sections, (i, a) => (u(), d("li", {
          key: a,
          class: m({ "is-active": i.active })
        }, [
          h("a", {
            class: m({ "is-active": i.active }),
            ref_for: !0,
            ref: (c) => l.addLinkRef(a, c),
            href: `#${i.titleId}`
          }, p(i.title), 11, cr)
        ], 2))), 128))
      ]),
      h("div", {
        class: m(["scroll-anchors__indicator", {
          "scroll-anchors__indicator--can-transition": o.indicatorAnimReady
        }]),
        ref: "indicator",
        style: N({
          opacity: l.indicatorStyles ? "1" : "0",
          transform: `translateY(${l.indicatorStyles.y}px)`,
          height: `${l.indicatorStyles.height}px`
        })
      }, null, 6)
    ]),
    _: 1
  })) : v("", !0);
}
const am = /* @__PURE__ */ B(ar, [["render", ur]]), dr = {
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
    register: { from: _n },
    unregister: { from: wn },
    sections: { from: pt, default: () => _(() => []) }
  },
  data() {
    const { anchorId: e, title: s } = this;
    return {
      titleId: e || `sas-title-${uo(s)}`
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
function fr(e, s, t, n, o, l) {
  return u(), d("div", {
    class: m([t.wrapperClass, { [t.activeClass]: t.activeClass && l.section?.active }]),
    ref: "element"
  }, [
    (u(), w(z(t.titleElement), {
      class: m(t.titleClass),
      id: o.titleId
    }, {
      default: S(() => [
        k(p(t.title), 1)
      ]),
      _: 1
    }, 8, ["class", "id"])),
    g(e.$slots, "default", { section: l.section })
  ], 2);
}
const rm = /* @__PURE__ */ B(dr, [["render", fr]]), hr = {
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
    return (s, t) => (u(), d("span", {
      class: m(["skeleton skeleton--text", {
        "skeleton--inline": e.inline,
        "skeleton--background-alt": e.alt,
        [`skeleton--width-${e.width}`]: e.width
      }])
    }, null, 2));
  }
}, cm = {
  __name: "UluShowSkeleton",
  props: {
    /**
     * If true will show whatever is passed to slot, else skeleton text
     */
    when: Boolean
  },
  setup(e) {
    return (s, t) => e.when ? (u(), w(hr, {
      key: 1,
      inline: ""
    })) : g(s.$slots, "default", { key: 0 });
  }
}, um = {
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
    const s = e, t = _(() => fo(s.lines, () => {
      const o = it(70, 100);
      let l = 0;
      const i = () => {
        const r = o - l, f = it(15, r);
        return l += f, f;
      }, a = [];
      for (; l < o - 15; )
        a.push(i());
      const c = () => a.reduce((r, f) => r + f, 0);
      for (; c() >= o && a.pop(); )
        ;
      return a.map((r) => ({ width: r, alt: Math.random() < 0.5 }));
    }));
    return (n, o) => (u(), d("div", null, [
      (u(!0), d(U, null, x(t.value, (l, i) => (u(), d("div", { key: i }, [
        (u(!0), d(U, null, x(l, (a) => (u(), d("span", {
          key: a,
          class: m(["skeleton skeleton--text skeleton--inline", { "skeleton--background-alt": a.alt }]),
          style: N({ width: `${a.width}%` })
        }, null, 6))), 128))
      ]))), 128))
    ]));
  }
}, mr = { class: "skeleton skeleton-block--media" }, dm = {
  __name: "UluSkeletonMedia",
  setup(e) {
    return (s, t) => (u(), d("div", mr, [
      T(H, { icon: "type:image" })
    ]));
  }
}, gr = {
  name: "SlideShow",
  emits: ["slide-change"],
  components: {
    UluIcon: H
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
      const s = e === "next", { scrollAmount: t } = this, { scrollLeft: n, offsetWidth: o } = this.getScrollData();
      return typeof t == "function" ? t(e, this.$refs) : typeof t == "number" ? s ? n + t : n - t : s ? n + o : n - o;
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
        const o = () => {
          s.element.focus(this.focusOptions), t.removeEventListener("scrollend", o);
        };
        t.addEventListener("scrollend", o), this.scrollTo(n, this.scrollBehaviorNav);
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
      const { observerOptions: e } = this, { track: s, nav: t } = this.$refs, n = (o) => {
        o.forEach((l) => {
          this.$nextTick(() => {
            const i = this.getSlideByElement(l.target);
            i.active = l.isIntersecting, this.$emit("slide-change", { slide: i, track: s, nav: t });
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
}, vr = { class: "slideshow" }, yr = {
  class: "slideshow__control-context",
  ref: "context"
}, pr = {
  class: "slideshow__track-crop",
  ref: "crop"
}, br = {
  class: "slideshow__track",
  ref: "track"
}, _r = ["tabindex"], wr = { class: "slideshow__controls" }, Sr = { class: "slideshow__controls-item slideshow__controls-item--previous" }, kr = ["disabled"], $r = { class: "slideshow__controls-item slideshow__controls-item--next" }, Cr = ["disabled"], Tr = {
  key: 0,
  class: "slideshow__nav",
  ref: "nav"
}, Ar = ["onClick"], Or = { class: "hidden-visually" };
function xr(e, s, t, n, o, l) {
  const i = W("UluIcon");
  return u(), d("div", vr, [
    h("div", yr, [
      h("div", pr, [
        h("ul", br, [
          (u(!0), d(U, null, x(o.slides, (a, c) => (u(), d("li", {
            class: m(["slideshow__slide", { "is-active": a.active }]),
            key: c,
            tabindex: t.slideFocusable ? "0" : "-1",
            ref_for: !0,
            ref: (r) => {
              a.element = r;
            }
          }, [
            g(e.$slots, "slide", {
              item: a.item,
              index: c
            })
          ], 10, _r))), 128))
        ], 512)
      ], 512),
      h("ul", wr, [
        h("li", Sr, [
          h("button", {
            class: "slideshow__control-button slideshow__control-button--previous",
            "aria-label": "Scroll Right",
            onClick: s[0] || (s[0] = (...a) => l.previous && l.previous(...a)),
            disabled: !l.canScrollLeft
          }, [
            T(i, {
              class: "slideshow__control-icon",
              icon: "type:previous"
            })
          ], 8, kr)
        ]),
        h("li", $r, [
          h("button", {
            class: "slideshow__control-button slideshow__control-button--next",
            "aria-label": "Scroll Left",
            onClick: s[1] || (s[1] = (...a) => l.next && l.next(...a)),
            disabled: !l.canScrollRight
          }, [
            T(i, {
              class: "slideshow__control-icon",
              icon: "type:next"
            })
          ], 8, Cr)
        ])
      ])
    ], 512),
    t.noNav ? v("", !0) : (u(), d("ul", Tr, [
      (u(!0), d(U, null, x(o.slides, (a, c) => (u(), d("li", {
        class: m(["slideshow__nav-item", { "is-active": a.active }]),
        ref_for: !0,
        ref: (r) => {
          a.navElement = r;
        },
        key: c
      }, [
        h("button", {
          class: m(["slideshow__nav-button", { "is-active": a.active }]),
          onClick: (r) => l.to(c)
        }, [
          g(e.$slots, "nav", {
            item: a.item,
            index: c,
            active: a.active
          }, () => [
            h("span", Or, "Item " + p(c + 1), 1)
          ])
        ], 10, Ar)
      ], 2))), 128))
    ], 512))
  ]);
}
const Ur = /* @__PURE__ */ B(gr, [["render", xr]]), jr = {
  name: "ImageSlideShow",
  components: {
    UluSlideShow: Ur
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
      const { offsetWidth: o, scrollLeft: l } = s, { offsetLeft: i, offsetWidth: a } = n, c = l + o, r = i + a;
      let f = null;
      console.log("left/right", l, c), t && n && (r > c ? f = l + (r - c) : i < l && (f = i), f !== null && s.scrollTo({ left: f, top: 0, behavior: "smooth" }));
    }
  }
}, Br = ["src", "alt"], Rr = { class: "slideshow__image-actions" }, Er = ["src", "alt"];
function Ir(e, s, t, n, o, l) {
  const i = W("AppButton"), a = W("UluSlideShow");
  return u(), w(a, {
    class: "slideshow--images",
    items: t.images,
    onSlideChange: l.slideChange
  }, {
    slide: S(({ item: c }) => [
      h("img", {
        src: c.src,
        alt: c.alt
      }, null, 8, Br),
      h("div", Rr, [
        t.selectButton ? (u(), w(i, {
          key: 0,
          class: "type-small",
          icon: "plus",
          small: "",
          iconBefore: ""
        }, {
          default: S(() => [...s[0] || (s[0] = [
            k(" Select ", -1)
          ])]),
          _: 1
        })) : v("", !0)
      ])
    ]),
    nav: S(({ index: c }) => [
      h("img", {
        src: t.images[c].src,
        alt: `View image ${c}`
      }, null, 8, Er)
    ]),
    _: 1
  }, 8, ["items", "onSlideChange"]);
}
const fm = /* @__PURE__ */ B(jr, [["render", Ir]]), Mr = {
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
function zr(e, s, t, n, o, l) {
  return u(), d("li", {
    class: m(["slideshow__slide", { "is-active": t.active }])
  }, [
    g(e.$slots, "default")
  ], 2);
}
const hm = /* @__PURE__ */ B(Mr, [["render", zr]]), Pr = {
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
}, Fr = ["id"], Lr = ["innerHTML"];
function Vr(e, s, t, n, o, l) {
  return u(!0), d(U, null, x(t.rows, (i, a) => (u(), d("tr", {
    key: `br-${a}`,
    id: t.optionalAttr(t.isActual && i.id),
    class: m(t.resolveClasses(t.classes.row, { row: i.data, rowIndex: a, isActual: t.isActual, foot: t.foot })),
    style: N({
      height: i.height
    })
  }, [
    (u(!0), d(U, null, x(t.rowColumns, (c, r) => (u(), w(z(c.rowHeader ? "th" : "td"), {
      id: t.optionalAttr(t.isActual && c.rowHeader && c.getRowHeaderId(a)),
      scope: t.optionalAttr(t.isActual && c.rowHeader && "row"),
      key: `bc-${r}`,
      headers: t.optionalAttr(t.isActual && t.getCellHeaders(c, a)),
      class: m(t.resolveClasses(c.class, { column: c, index: r, isActual: t.isActual, row: i, rowIndex: a, foot: t.foot })),
      style: N({
        width: t.columnWidth
      })
    }, {
      default: S(() => [
        e.$slots[c.slot] ? g(e.$slots, c.slot, {
          key: 0,
          row: i.data,
          column: c,
          rowIndex: a,
          index: r,
          foot: t.foot,
          isActual: t.isActual
        }) : c.html ? (u(), d("div", {
          key: 1,
          innerHTML: t.value({ row: i, column: c, rowIndex: a, isActual: t.isActual, foot: t.foot })
        }, null, 8, Lr)) : (u(), d(U, { key: 2 }, [
          k(p(t.value({ row: i, column: c, rowIndex: a, isActual: t.isActual, foot: t.foot })), 1)
        ], 64))
      ]),
      _: 2
    }, 1032, ["id", "scope", "headers", "class", "style"]))), 128))
  ], 14, Fr))), 128);
}
const Hr = /* @__PURE__ */ B(Pr, [["render", Vr]]), Nr = {
  name: "UluTableStickyTable",
  components: {
    UluTableStickyRows: Hr
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
      const { id: o } = e, l = t[o];
      l && this.$emit("actual-header-removed", l), this.$emit("actual-header-added", s), t[o] = s;
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
      const t = e.headers.join(" "), n = e.getRowHeaders(s), o = n.length ? " " : "";
      return `${t}${o}${n}`;
    },
    getHeaderHeaders(e) {
      const s = e.headers.filter((t) => t !== e.id);
      if (s.length)
        return s.join(" ");
    }
  }
}, Wr = ["aria-hidden"], Dr = {
  key: 0,
  class: "table-sticky__caption"
}, Xr = ["id"], Gr = ["id", "rowspan", "colspan", "data-child-columns", "aria-sort", "scope", "headers"], qr = ["innerHTML"], Yr = {
  class: "table-sticky__sort-icon",
  "aria-hidden": "true"
}, Kr = { class: "table-sticky__sort-icon-inner" }, Zr = ["innerHTML"], Jr = { key: 1 }, Qr = { key: 2 };
function ec(e, s, t, n, o, l) {
  const i = W("UluTableStickyRows");
  return u(), d("table", {
    class: m(t.resolveClasses(t.classes.table, { isActual: t.isActual })),
    "aria-hidden": t.isActual ? "false" : "true"
  }, [
    t.caption ? (u(), d("caption", Dr, p(t.caption), 1)) : v("", !0),
    h("thead", null, [
      (u(!0), d(U, null, x(t.headerRows, (a, c) => (u(), d("tr", {
        key: `hr-${c}`,
        id: l.optionalAttr(t.isActual && a.id),
        class: m(t.resolveClasses(t.classes.rowHeader, { row: a, rowIndex: c, isActual: t.isActual })),
        style: N({
          height: a.height
        })
      }, [
        (u(!0), d(U, null, x(a.columns, (r, f) => (u(), d("th", {
          key: `hc-${f}`,
          id: l.optionalAttr(t.isActual && r.id),
          rowspan: r.rowspan,
          colspan: r.colspan,
          "data-child-columns": r.columns && r.columns.length,
          class: m([
            {
              "sort-active": r.sortApplied,
              "sort-ascending": r.sortApplied && r.sortAscending,
              "sort-descending": r.sortApplied && !r.sortAscending
            },
            t.resolveClasses(r.classHeader, { column: r, index: f, isActual: t.isActual })
          ]),
          style: N({
            width: r.width
          }),
          "aria-sort": r.sort ? r.sortAscending ? "ascending" : "descending" : null,
          scope: l.optionalAttr(t.isActual && (r.colspan > 1 ? "colgroup" : "col")),
          headers: l.optionalAttr(t.isActual && l.getHeaderHeaders(r, c)),
          ref_for: !0,
          ref: (b) => l.addHeaderRef(r, b)
        }, [
          r.sortable ? (u(), w(z(t.isActual ? "button" : "div"), {
            key: 0,
            class: m(["table-sticky__sort-button", {
              "table-sticky__sort-button--focused": r.sortFocused
            }]),
            onClick: (b) => e.$emit("column-sorted", r),
            onFocus: (b) => l.handleSortFocus(r, !0),
            onBlur: (b) => l.handleSortFocus(r, !1),
            "aria-pressed": r.sortApplied ? "true" : "false"
          }, {
            default: S(() => [
              e.$slots[r.slotHeader] ? g(e.$slots, r.slotHeader, {
                key: 0,
                isActual: t.isActual,
                column: r,
                index: f
              }) : r.htmlTitle ? (u(), d("div", {
                key: 1,
                innerHTML: t.getColumnTitle({ column: r, index: f, isActual: t.isActual })
              }, null, 8, qr)) : (u(), d(U, { key: 2 }, [
                k(p(t.getColumnTitle({ column: r, index: f, isActual: t.isActual })), 1)
              ], 64)),
              h("span", Yr, [
                h("span", Kr, [
                  g(e.$slots, "sortIcon", {}, () => [
                    s[0] || (s[0] = k("▼", -1))
                  ])
                ])
              ])
            ]),
            _: 2
          }, 1064, ["class", "onClick", "onFocus", "onBlur", "aria-pressed"])) : (u(), d(U, { key: 1 }, [
            e.$slots[r.slotHeader] ? g(e.$slots, r.slotHeader, {
              key: 0,
              isActual: t.isActual,
              column: r,
              index: f
            }) : r.htmlTitle ? (u(), d("div", {
              key: 1,
              innerHTML: t.getColumnTitle({ column: r, index: f, isActual: t.isActual })
            }, null, 8, Zr)) : (u(), d(U, { key: 2 }, [
              k(p(t.getColumnTitle({ column: r, index: f, isActual: t.isActual })), 1)
            ], 64))
          ], 64))
        ], 14, Gr))), 128))
      ], 14, Xr))), 128))
    ]),
    t.rows ? (u(), d("tbody", Jr, [
      T(i, {
        rows: t.rows,
        rowColumns: t.rowColumns,
        optionalAttr: l.optionalAttr,
        resolveClasses: t.resolveClasses,
        getCellHeaders: l.getCellHeaders,
        isActual: t.isActual,
        columnWidth: t.columnWidth,
        classes: t.classes,
        value: l.value
      }, Oe({ _: 2 }, [
        x(e.$slots, (a, c) => ({
          name: c,
          fn: S((r) => [
            g(e.$slots, c, le(ie(r)))
          ])
        }))
      ]), 1032, ["rows", "rowColumns", "optionalAttr", "resolveClasses", "getCellHeaders", "isActual", "columnWidth", "classes", "value"])
    ])) : v("", !0),
    t.footerRows ? (u(), d("tfoot", Qr, [
      T(i, {
        rows: t.footerRows,
        rowColumns: t.rowColumns,
        optionalAttr: l.optionalAttr,
        resolveClasses: t.resolveClasses,
        getCellHeaders: l.getCellHeaders,
        isActual: t.isActual,
        columnWidth: t.columnWidth,
        classes: t.classes,
        value: l.value,
        foot: ""
      }, Oe({ _: 2 }, [
        x(e.$slots, (a, c) => ({
          name: c,
          fn: S((r) => [
            g(e.$slots, c, le(ie(r)))
          ])
        }))
      ]), 1032, ["rows", "rowColumns", "optionalAttr", "resolveClasses", "getCellHeaders", "isActual", "columnWidth", "classes", "value"])
    ])) : v("", !0)
  ], 10, Wr);
}
const tc = /* @__PURE__ */ B(Nr, [["render", ec]]);
function sc() {
  this.__data__ = [], this.size = 0;
}
function Sn(e, s) {
  return e === s || e !== e && s !== s;
}
function bt(e, s) {
  for (var t = e.length; t--; )
    if (Sn(e[t][0], s))
      return t;
  return -1;
}
var nc = Array.prototype, oc = nc.splice;
function lc(e) {
  var s = this.__data__, t = bt(s, e);
  if (t < 0)
    return !1;
  var n = s.length - 1;
  return t == n ? s.pop() : oc.call(s, t, 1), --this.size, !0;
}
function ic(e) {
  var s = this.__data__, t = bt(s, e);
  return t < 0 ? void 0 : s[t][1];
}
function ac(e) {
  return bt(this.__data__, e) > -1;
}
function rc(e, s) {
  var t = this.__data__, n = bt(t, e);
  return n < 0 ? (++this.size, t.push([e, s])) : t[n][1] = s, this;
}
function fe(e) {
  var s = -1, t = e == null ? 0 : e.length;
  for (this.clear(); ++s < t; ) {
    var n = e[s];
    this.set(n[0], n[1]);
  }
}
fe.prototype.clear = sc;
fe.prototype.delete = lc;
fe.prototype.get = ic;
fe.prototype.has = ac;
fe.prototype.set = rc;
function cc() {
  this.__data__ = new fe(), this.size = 0;
}
function uc(e) {
  var s = this.__data__, t = s.delete(e);
  return this.size = s.size, t;
}
function dc(e) {
  return this.__data__.get(e);
}
function fc(e) {
  return this.__data__.has(e);
}
var kn = typeof global == "object" && global && global.Object === Object && global, hc = typeof self == "object" && self && self.Object === Object && self, re = kn || hc || Function("return this")(), Be = re.Symbol, $n = Object.prototype, mc = $n.hasOwnProperty, gc = $n.toString, Fe = Be ? Be.toStringTag : void 0;
function vc(e) {
  var s = mc.call(e, Fe), t = e[Fe];
  try {
    e[Fe] = void 0;
    var n = !0;
  } catch {
  }
  var o = gc.call(e);
  return n && (s ? e[Fe] = t : delete e[Fe]), o;
}
var yc = Object.prototype, pc = yc.toString;
function bc(e) {
  return pc.call(e);
}
var _c = "[object Null]", wc = "[object Undefined]", _s = Be ? Be.toStringTag : void 0;
function Ze(e) {
  return e == null ? e === void 0 ? wc : _c : _s && _s in Object(e) ? vc(e) : bc(e);
}
function _t(e) {
  var s = typeof e;
  return e != null && (s == "object" || s == "function");
}
var Sc = "[object AsyncFunction]", kc = "[object Function]", $c = "[object GeneratorFunction]", Cc = "[object Proxy]";
function Cn(e) {
  if (!_t(e))
    return !1;
  var s = Ze(e);
  return s == kc || s == $c || s == Sc || s == Cc;
}
var xt = re["__core-js_shared__"], ws = function() {
  var e = /[^.]+$/.exec(xt && xt.keys && xt.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function Tc(e) {
  return !!ws && ws in e;
}
var Ac = Function.prototype, Oc = Ac.toString;
function Se(e) {
  if (e != null) {
    try {
      return Oc.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var xc = /[\\^$.*+?()[\]{}|]/g, Uc = /^\[object .+?Constructor\]$/, jc = Function.prototype, Bc = Object.prototype, Rc = jc.toString, Ec = Bc.hasOwnProperty, Ic = RegExp(
  "^" + Rc.call(Ec).replace(xc, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Mc(e) {
  if (!_t(e) || Tc(e))
    return !1;
  var s = Cn(e) ? Ic : Uc;
  return s.test(Se(e));
}
function zc(e, s) {
  return e?.[s];
}
function ke(e, s) {
  var t = zc(e, s);
  return Mc(t) ? t : void 0;
}
var Ye = ke(re, "Map"), Ke = ke(Object, "create");
function Pc() {
  this.__data__ = Ke ? Ke(null) : {}, this.size = 0;
}
function Fc(e) {
  var s = this.has(e) && delete this.__data__[e];
  return this.size -= s ? 1 : 0, s;
}
var Lc = "__lodash_hash_undefined__", Vc = Object.prototype, Hc = Vc.hasOwnProperty;
function Nc(e) {
  var s = this.__data__;
  if (Ke) {
    var t = s[e];
    return t === Lc ? void 0 : t;
  }
  return Hc.call(s, e) ? s[e] : void 0;
}
var Wc = Object.prototype, Dc = Wc.hasOwnProperty;
function Xc(e) {
  var s = this.__data__;
  return Ke ? s[e] !== void 0 : Dc.call(s, e);
}
var Gc = "__lodash_hash_undefined__";
function qc(e, s) {
  var t = this.__data__;
  return this.size += this.has(e) ? 0 : 1, t[e] = Ke && s === void 0 ? Gc : s, this;
}
function _e(e) {
  var s = -1, t = e == null ? 0 : e.length;
  for (this.clear(); ++s < t; ) {
    var n = e[s];
    this.set(n[0], n[1]);
  }
}
_e.prototype.clear = Pc;
_e.prototype.delete = Fc;
_e.prototype.get = Nc;
_e.prototype.has = Xc;
_e.prototype.set = qc;
function Yc() {
  this.size = 0, this.__data__ = {
    hash: new _e(),
    map: new (Ye || fe)(),
    string: new _e()
  };
}
function Kc(e) {
  var s = typeof e;
  return s == "string" || s == "number" || s == "symbol" || s == "boolean" ? e !== "__proto__" : e === null;
}
function wt(e, s) {
  var t = e.__data__;
  return Kc(s) ? t[typeof s == "string" ? "string" : "hash"] : t.map;
}
function Zc(e) {
  var s = wt(this, e).delete(e);
  return this.size -= s ? 1 : 0, s;
}
function Jc(e) {
  return wt(this, e).get(e);
}
function Qc(e) {
  return wt(this, e).has(e);
}
function eu(e, s) {
  var t = wt(this, e), n = t.size;
  return t.set(e, s), this.size += t.size == n ? 0 : 1, this;
}
function Ee(e) {
  var s = -1, t = e == null ? 0 : e.length;
  for (this.clear(); ++s < t; ) {
    var n = e[s];
    this.set(n[0], n[1]);
  }
}
Ee.prototype.clear = Yc;
Ee.prototype.delete = Zc;
Ee.prototype.get = Jc;
Ee.prototype.has = Qc;
Ee.prototype.set = eu;
var tu = 200;
function su(e, s) {
  var t = this.__data__;
  if (t instanceof fe) {
    var n = t.__data__;
    if (!Ye || n.length < tu - 1)
      return n.push([e, s]), this.size = ++t.size, this;
    t = this.__data__ = new Ee(n);
  }
  return t.set(e, s), this.size = t.size, this;
}
function Ie(e) {
  var s = this.__data__ = new fe(e);
  this.size = s.size;
}
Ie.prototype.clear = cc;
Ie.prototype.delete = uc;
Ie.prototype.get = dc;
Ie.prototype.has = fc;
Ie.prototype.set = su;
function nu(e, s) {
  for (var t = -1, n = e == null ? 0 : e.length; ++t < n && s(e[t], t, e) !== !1; )
    ;
  return e;
}
var Ss = function() {
  try {
    var e = ke(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}();
function ou(e, s, t) {
  s == "__proto__" && Ss ? Ss(e, s, {
    configurable: !0,
    enumerable: !0,
    value: t,
    writable: !0
  }) : e[s] = t;
}
var lu = Object.prototype, iu = lu.hasOwnProperty;
function au(e, s, t) {
  var n = e[s];
  (!(iu.call(e, s) && Sn(n, t)) || t === void 0 && !(s in e)) && ou(e, s, t);
}
function ru(e, s) {
  for (var t = -1, n = Array(e); ++t < e; )
    n[t] = s(t);
  return n;
}
function Je(e) {
  return e != null && typeof e == "object";
}
var cu = "[object Arguments]";
function ks(e) {
  return Je(e) && Ze(e) == cu;
}
var Tn = Object.prototype, uu = Tn.hasOwnProperty, du = Tn.propertyIsEnumerable, fu = ks(/* @__PURE__ */ function() {
  return arguments;
}()) ? ks : function(e) {
  return Je(e) && uu.call(e, "callee") && !du.call(e, "callee");
}, os = Array.isArray;
function hu() {
  return !1;
}
var An = typeof exports == "object" && exports && !exports.nodeType && exports, $s = An && typeof module == "object" && module && !module.nodeType && module, mu = $s && $s.exports === An, Cs = mu ? re.Buffer : void 0, gu = Cs ? Cs.isBuffer : void 0, On = gu || hu, vu = 9007199254740991, yu = /^(?:0|[1-9]\d*)$/;
function pu(e, s) {
  var t = typeof e;
  return s = s ?? vu, !!s && (t == "number" || t != "symbol" && yu.test(e)) && e > -1 && e % 1 == 0 && e < s;
}
var bu = 9007199254740991;
function xn(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= bu;
}
var _u = "[object Arguments]", wu = "[object Array]", Su = "[object Boolean]", ku = "[object Date]", $u = "[object Error]", Cu = "[object Function]", Tu = "[object Map]", Au = "[object Number]", Ou = "[object Object]", xu = "[object RegExp]", Uu = "[object Set]", ju = "[object String]", Bu = "[object WeakMap]", Ru = "[object ArrayBuffer]", Eu = "[object DataView]", Iu = "[object Float32Array]", Mu = "[object Float64Array]", zu = "[object Int8Array]", Pu = "[object Int16Array]", Fu = "[object Int32Array]", Lu = "[object Uint8Array]", Vu = "[object Uint8ClampedArray]", Hu = "[object Uint16Array]", Nu = "[object Uint32Array]", L = {};
L[Iu] = L[Mu] = L[zu] = L[Pu] = L[Fu] = L[Lu] = L[Vu] = L[Hu] = L[Nu] = !0;
L[_u] = L[wu] = L[Ru] = L[Su] = L[Eu] = L[ku] = L[$u] = L[Cu] = L[Tu] = L[Au] = L[Ou] = L[xu] = L[Uu] = L[ju] = L[Bu] = !1;
function Wu(e) {
  return Je(e) && xn(e.length) && !!L[Ze(e)];
}
function ls(e) {
  return function(s) {
    return e(s);
  };
}
var Un = typeof exports == "object" && exports && !exports.nodeType && exports, Ne = Un && typeof module == "object" && module && !module.nodeType && module, Du = Ne && Ne.exports === Un, Ut = Du && kn.process, Re = function() {
  try {
    var e = Ne && Ne.require && Ne.require("util").types;
    return e || Ut && Ut.binding && Ut.binding("util");
  } catch {
  }
}(), Ts = Re && Re.isTypedArray, Xu = Ts ? ls(Ts) : Wu, Gu = Object.prototype, qu = Gu.hasOwnProperty;
function Yu(e, s) {
  var t = os(e), n = !t && fu(e), o = !t && !n && On(e), l = !t && !n && !o && Xu(e), i = t || n || o || l, a = i ? ru(e.length, String) : [], c = a.length;
  for (var r in e)
    qu.call(e, r) && !(i && // Safari 9 has enumerable `arguments.length` in strict mode.
    (r == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    o && (r == "offset" || r == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    l && (r == "buffer" || r == "byteLength" || r == "byteOffset") || // Skip index properties.
    pu(r, c))) && a.push(r);
  return a;
}
var Ku = Object.prototype;
function jn(e) {
  var s = e && e.constructor, t = typeof s == "function" && s.prototype || Ku;
  return e === t;
}
function Bn(e, s) {
  return function(t) {
    return e(s(t));
  };
}
var Zu = Bn(Object.keys, Object), Ju = Object.prototype, Qu = Ju.hasOwnProperty;
function ed(e) {
  if (!jn(e))
    return Zu(e);
  var s = [];
  for (var t in Object(e))
    Qu.call(e, t) && t != "constructor" && s.push(t);
  return s;
}
function td(e) {
  return e != null && xn(e.length) && !Cn(e);
}
function sd(e) {
  return td(e) ? Yu(e) : ed(e);
}
var Rn = typeof exports == "object" && exports && !exports.nodeType && exports, As = Rn && typeof module == "object" && module && !module.nodeType && module, nd = As && As.exports === Rn, Os = nd ? re.Buffer : void 0;
Os && Os.allocUnsafe;
function od(e, s) {
  return e.slice();
}
function ld(e, s) {
  for (var t = -1, n = e == null ? 0 : e.length, o = 0, l = []; ++t < n; ) {
    var i = e[t];
    s(i, t, e) && (l[o++] = i);
  }
  return l;
}
function id() {
  return [];
}
var ad = Object.prototype, rd = ad.propertyIsEnumerable, xs = Object.getOwnPropertySymbols, cd = xs ? function(e) {
  return e == null ? [] : (e = Object(e), ld(xs(e), function(s) {
    return rd.call(e, s);
  }));
} : id;
function ud(e, s) {
  for (var t = -1, n = s.length, o = e.length; ++t < n; )
    e[o + t] = s[t];
  return e;
}
var dd = Bn(Object.getPrototypeOf, Object);
function fd(e, s, t) {
  var n = s(e);
  return os(e) ? n : ud(n, t(e));
}
function hd(e) {
  return fd(e, sd, cd);
}
var Ft = ke(re, "DataView"), Lt = ke(re, "Promise"), Vt = ke(re, "Set"), Ht = ke(re, "WeakMap"), Us = "[object Map]", md = "[object Object]", js = "[object Promise]", Bs = "[object Set]", Rs = "[object WeakMap]", Es = "[object DataView]", gd = Se(Ft), vd = Se(Ye), yd = Se(Lt), pd = Se(Vt), bd = Se(Ht), ue = Ze;
(Ft && ue(new Ft(new ArrayBuffer(1))) != Es || Ye && ue(new Ye()) != Us || Lt && ue(Lt.resolve()) != js || Vt && ue(new Vt()) != Bs || Ht && ue(new Ht()) != Rs) && (ue = function(e) {
  var s = Ze(e), t = s == md ? e.constructor : void 0, n = t ? Se(t) : "";
  if (n)
    switch (n) {
      case gd:
        return Es;
      case vd:
        return Us;
      case yd:
        return js;
      case pd:
        return Bs;
      case bd:
        return Rs;
    }
  return s;
});
var _d = Object.prototype, wd = _d.hasOwnProperty;
function Sd(e) {
  var s = e.length, t = new e.constructor(s);
  return s && typeof e[0] == "string" && wd.call(e, "index") && (t.index = e.index, t.input = e.input), t;
}
var Is = re.Uint8Array;
function is(e) {
  var s = new e.constructor(e.byteLength);
  return new Is(s).set(new Is(e)), s;
}
function kd(e, s) {
  var t = is(e.buffer);
  return new e.constructor(t, e.byteOffset, e.byteLength);
}
var $d = /\w*$/;
function Cd(e) {
  var s = new e.constructor(e.source, $d.exec(e));
  return s.lastIndex = e.lastIndex, s;
}
var Ms = Be ? Be.prototype : void 0, zs = Ms ? Ms.valueOf : void 0;
function Td(e) {
  return zs ? Object(zs.call(e)) : {};
}
function Ad(e, s) {
  var t = is(e.buffer);
  return new e.constructor(t, e.byteOffset, e.length);
}
var Od = "[object Boolean]", xd = "[object Date]", Ud = "[object Map]", jd = "[object Number]", Bd = "[object RegExp]", Rd = "[object Set]", Ed = "[object String]", Id = "[object Symbol]", Md = "[object ArrayBuffer]", zd = "[object DataView]", Pd = "[object Float32Array]", Fd = "[object Float64Array]", Ld = "[object Int8Array]", Vd = "[object Int16Array]", Hd = "[object Int32Array]", Nd = "[object Uint8Array]", Wd = "[object Uint8ClampedArray]", Dd = "[object Uint16Array]", Xd = "[object Uint32Array]";
function Gd(e, s, t) {
  var n = e.constructor;
  switch (s) {
    case Md:
      return is(e);
    case Od:
    case xd:
      return new n(+e);
    case zd:
      return kd(e);
    case Pd:
    case Fd:
    case Ld:
    case Vd:
    case Hd:
    case Nd:
    case Wd:
    case Dd:
    case Xd:
      return Ad(e);
    case Ud:
      return new n();
    case jd:
    case Ed:
      return new n(e);
    case Bd:
      return Cd(e);
    case Rd:
      return new n();
    case Id:
      return Td(e);
  }
}
var Ps = Object.create, qd = /* @__PURE__ */ function() {
  function e() {
  }
  return function(s) {
    if (!_t(s))
      return {};
    if (Ps)
      return Ps(s);
    e.prototype = s;
    var t = new e();
    return e.prototype = void 0, t;
  };
}();
function Yd(e) {
  return typeof e.constructor == "function" && !jn(e) ? qd(dd(e)) : {};
}
var Kd = "[object Map]";
function Zd(e) {
  return Je(e) && ue(e) == Kd;
}
var Fs = Re && Re.isMap, Jd = Fs ? ls(Fs) : Zd, Qd = "[object Set]";
function ef(e) {
  return Je(e) && ue(e) == Qd;
}
var Ls = Re && Re.isSet, tf = Ls ? ls(Ls) : ef, En = "[object Arguments]", sf = "[object Array]", nf = "[object Boolean]", of = "[object Date]", lf = "[object Error]", In = "[object Function]", af = "[object GeneratorFunction]", rf = "[object Map]", cf = "[object Number]", Mn = "[object Object]", uf = "[object RegExp]", df = "[object Set]", ff = "[object String]", hf = "[object Symbol]", mf = "[object WeakMap]", gf = "[object ArrayBuffer]", vf = "[object DataView]", yf = "[object Float32Array]", pf = "[object Float64Array]", bf = "[object Int8Array]", _f = "[object Int16Array]", wf = "[object Int32Array]", Sf = "[object Uint8Array]", kf = "[object Uint8ClampedArray]", $f = "[object Uint16Array]", Cf = "[object Uint32Array]", P = {};
P[En] = P[sf] = P[gf] = P[vf] = P[nf] = P[of] = P[yf] = P[pf] = P[bf] = P[_f] = P[wf] = P[rf] = P[cf] = P[Mn] = P[uf] = P[df] = P[ff] = P[hf] = P[Sf] = P[kf] = P[$f] = P[Cf] = !0;
P[lf] = P[In] = P[mf] = !1;
function lt(e, s, t, n, o, l) {
  var i;
  if (i !== void 0)
    return i;
  if (!_t(e))
    return e;
  var a = os(e);
  if (a)
    i = Sd(e);
  else {
    var c = ue(e), r = c == In || c == af;
    if (On(e))
      return od(e);
    if (c == Mn || c == En || r && !o)
      i = r ? {} : Yd(e);
    else {
      if (!P[c])
        return o ? e : {};
      i = Gd(e, c);
    }
  }
  l || (l = new Ie());
  var f = l.get(e);
  if (f)
    return f;
  l.set(e, i), tf(e) ? e.forEach(function($) {
    i.add(lt($, s, t, $, e, l));
  }) : Jd(e) && e.forEach(function($, A) {
    i.set(A, lt($, s, t, A, e, l));
  });
  var b = hd, y = a ? void 0 : b(e);
  return nu(y || e, function($, A) {
    y && (A = $, $ = e[A]), au(i, A, lt($, s, t, A, e, l));
  }), i;
}
var Tf = 1, Af = 4;
function Of(e) {
  return lt(e, Tf | Af);
}
const jt = (e) => e.every((s) => typeof s == "object"), Vs = !0, zn = () => window.innerWidth;
let Hs = zn();
const xf = {
  name: "UluTableSticky",
  components: {
    UluTableStickyTable: tc
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
      required: Vs
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
      validator: jt,
      required: Vs
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
      validator: jt
      // required
    },
    /**
     * Array of rows for footer (tfoot)
     */
    footerRows: {
      type: Array,
      validator: jt
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
      resizeHandler: Wt(this.onResize.bind(this), 500, !0),
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
      const e = this.currentColumns, s = [], t = (o) => {
        o.columns ? o.columns.forEach(t) : s.push(o);
      };
      e.forEach(t);
      let n = [];
      return s.forEach((o, l) => {
        const i = n.slice();
        o.getRowHeaders = (a) => i.map((c) => c(a)).join(" "), o.rowHeader && (o.getRowHeaderId = (a) => `${this.idPrefix}-rh-${a}-${l}`, n.push(o.getRowHeaderId));
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
      const e = this.idCreator("c"), s = Of(this.columns), t = (n, o) => {
        n.id = e(), n.parent = o, n.width = "auto", n.boxWidth = null, n.sortApplied = !1, n.sortAscending = !1, n.sortFocused = !1;
        let l = [];
        o && (o.headers && o.headers.length ? l = [...o.headers] : l.push(o.id)), l.push(n.id), n.headers = l, n.columns ? n.columns.forEach((i) => t(i, n)) : !n.key && !n.value && !n.slot && console.warn("UluTableSticky: Missing 'key', 'value' or 'slot' in column configuration for", n);
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
      const s = this.idCreator("hr"), t = e.reduce(this.maxColumnChildren, 1), n = "auto", o = new Array(t).fill(null).map(() => ({
        height: n,
        boxHeight: null,
        columns: [],
        id: s()
      }));
      function l(i, a) {
        const c = a.columns;
        c && c.forEach((r) => l(1 + i, r)), a.rowspan = c ? 1 : t - i, a.colspan = c ? c.reduce((r, f) => r + f.colspan, 0) : 1, o[i].columns.push(a);
      }
      return e.forEach((i) => l(0, i)), o;
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
      const e = zn();
      Hs !== e && (Hs = e, this.resizing ? (this.resizing = !1, this.setTableSizes(), this.checkOverflowX(), this.syncScrollLeft()) : (this.resizing = !0, this.removeTableSizes()));
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
      const e = this.$refs.display, s = e.scrollWidth, t = e.scrollLeft, n = this.scrollControlAmount, o = t + n;
      e.scroll({
        left: o > s ? e.scrollWidth : o,
        behavior: "smooth"
      });
    },
    /**
     * Cleanup function for when component is not in use
     */
    setTableSizes() {
      const e = (n, o) => Math.ceil(n.getBoundingClientRect()[o]);
      this.tableWidth = `${e(this.$refs.table.$el, "width")}px`;
      const s = (n) => document.getElementById(n.id), t = (n) => {
        const o = s(n);
        o && (n.boxHeight = e(o, "height"), n.height = `${n.boxHeight}px`);
      };
      this.headerRows.forEach((n) => {
        t(n), n.columns.forEach((o) => {
          const l = s(o);
          l && (o.boxWidth = e(l, "width"), o.width = `${o.boxWidth}px`);
        });
      }), this.firstColumnSticky && (this.currentRows.forEach((n) => t(n)), this.currentFooterRows.forEach((n) => t(n))), this.$nextTick(() => {
        this.sizesCalculated = !0, on(() => {
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
}, Uf = { class: "table-sticky__sticky-wrap table-sticky__sticky-wrap--header" }, jf = { class: "table-sticky__header-wrap" }, Bf = { class: "table-sticky__sticky-wrap table-sticky__sticky-wrap--first-column-header" }, Rf = { class: "table-sticky__sticky-wrap table-sticky__sticky-wrap--controls" }, Ef = {
  key: 2,
  class: "table-sticky__controls-inner"
}, If = ["disabled"], Mf = ["disabled"], zf = {
  ref: "display",
  class: "table-sticky__display"
};
function Pf(e, s, t, n, o, l) {
  const i = W("UluTableStickyTable");
  return u(), d("div", {
    class: m(["table-sticky", {
      "table-sticky--overflown-x": o.overflownX,
      "table-sticky--can-scroll-right": o.canScrollRight,
      "table-sticky--can-scroll-left": o.canScrollLeft
    }])
  }, [
    h("div", Uf, [
      h("div", jf, [
        T(i, {
          ref: "header",
          class: "table-sticky__table table-sticky__table--header",
          classes: t.classes,
          caption: t.caption,
          resolveClasses: l.resolveClasses,
          getColumnTitle: t.getColumnTitle,
          idPrefix: t.idPrefix,
          headerRows: o.headerRows,
          style: N({
            opacity: o.sizesCalculated ? "1" : "0",
            pointerEvents: o.sizesCalculated ? "auto" : "none",
            width: o.tableWidth
          }),
          onColumnSorted: l.applySort
        }, Oe({ _: 2 }, [
          x(e.$slots, (a, c) => ({
            name: c,
            fn: S((r) => [
              g(e.$slots, c, le(ie(r)))
            ])
          }))
        ]), 1032, ["classes", "caption", "resolveClasses", "getColumnTitle", "idPrefix", "headerRows", "style", "onColumnSorted"])
      ])
    ]),
    h("div", Bf, [
      t.firstColumnSticky ? (u(), w(i, {
        key: 0,
        ref: "firstColumnHeader",
        class: "table-sticky__table table-sticky__table--first-column-header",
        classes: t.classes,
        caption: t.caption,
        resolveClasses: l.resolveClasses,
        getColumnTitle: t.getColumnTitle,
        idPrefix: t.idPrefix,
        headerRows: l.headerRowsFirst,
        style: N({
          opacity: l.headerOpacityX,
          pointerEvents: l.headerVisibleX ? "auto" : "none"
        }),
        onColumnSorted: l.applySort
      }, Oe({ _: 2 }, [
        x(e.$slots, (a, c) => ({
          name: c,
          fn: S((r) => [
            g(e.$slots, c, le(ie(r)))
          ])
        }))
      ]), 1032, ["classes", "caption", "resolveClasses", "getColumnTitle", "idPrefix", "headerRows", "style", "onColumnSorted"])) : v("", !0)
    ]),
    h("div", Rf, [
      xe(h("div", {
        class: m(["table-sticky__controls", l.resolveClasses(t.classes.controls)]),
        ref: "controls"
      }, [
        e.$slots.controls ? g(e.$slots, "controls", {
          key: 0,
          scrollLeft: l.scrollLeft,
          scrollRight: l.scrollRight,
          canScrollLeft: o.canScrollLeft,
          canScrollRight: o.canScrollRight
        }) : t.controlsComponent ? (u(), w(z(t.controlsComponent), {
          key: 1,
          scrollLeft: l.scrollLeft,
          scrollRight: l.scrollRight,
          canScrollLeft: o.canScrollLeft,
          canScrollRight: o.canScrollRight
        }, null, 8, ["scrollLeft", "scrollRight", "canScrollLeft", "canScrollRight"])) : (u(), d("div", Ef, [
          h("button", {
            class: m(["table-sticky__control table-sticky__control--left", l.resolveClasses(t.classes.controlButton)]),
            "aria-label": "Scroll Left",
            onClick: s[0] || (s[0] = (...a) => l.scrollLeft && l.scrollLeft(...a)),
            disabled: !o.canScrollLeft
          }, [
            g(e.$slots, "controlLeft", {}, () => [
              s[2] || (s[2] = k(" ← ", -1))
            ])
          ], 10, If),
          h("button", {
            class: m(["table-sticky__control table-sticky__control--right", l.resolveClasses(t.classes.controlButton)]),
            "aria-label": "Scroll Right",
            onClick: s[1] || (s[1] = (...a) => l.scrollRight && l.scrollRight(...a)),
            disabled: !o.canScrollRight
          }, [
            g(e.$slots, "controlRight", {}, () => [
              s[3] || (s[3] = k(" → ", -1))
            ])
          ], 10, Mf)
        ]))
      ], 2), [
        [Bt, l.controlsShown]
      ])
    ]),
    h("div", zf, [
      T(i, {
        ref: "table",
        class: "table-sticky__table table-sticky__table--actual",
        classes: t.classes,
        resolveClasses: l.resolveClasses,
        isActual: "",
        headerRows: o.headerRows,
        rows: o.currentRows,
        footerRows: o.currentFooterRows,
        rowColumns: l.rowColumns,
        caption: t.caption,
        idPrefix: t.idPrefix,
        getRowValue: t.getRowValue,
        getColumnTitle: t.getColumnTitle,
        onVnodeMounted: l.tableReady,
        onActualHeaderRemoved: l.headerRemoved,
        onActualHeaderAdded: l.headerAdded,
        onColumnSorted: l.applySort
      }, Oe({ _: 2 }, [
        x(e.$slots, (a, c) => ({
          name: c,
          fn: S((r) => [
            g(e.$slots, c, le(ie(r)))
          ])
        }))
      ]), 1032, ["classes", "resolveClasses", "headerRows", "rows", "footerRows", "rowColumns", "caption", "idPrefix", "getRowValue", "getColumnTitle", "onVnodeMounted", "onActualHeaderRemoved", "onActualHeaderAdded", "onColumnSorted"])
    ], 512),
    t.firstColumnSticky ? (u(), w(i, {
      key: 0,
      ref: "firstColumn",
      class: "table-sticky__table table-sticky__table--first-column",
      classes: t.classes,
      resolveClasses: l.resolveClasses,
      caption: t.caption,
      headerRows: l.headerRowsFirst,
      columnWidth: l.firstColumnSize.width,
      rows: o.currentRows,
      footerRows: o.currentFooterRows,
      rowColumns: l.rowColumnsFirst,
      idPrefix: t.idPrefix,
      getRowValue: t.getRowValue,
      getColumnTitle: t.getColumnTitle,
      style: N({
        opacity: l.headerOpacityX,
        pointerEvents: l.headerVisibleX ? "auto" : "none"
      }),
      onColumnSorted: l.applySort
    }, Oe({ _: 2 }, [
      x(e.$slots, (a, c) => ({
        name: c,
        fn: S((r) => [
          g(e.$slots, c, le(ie(r)))
        ])
      }))
    ]), 1032, ["classes", "resolveClasses", "caption", "headerRows", "columnWidth", "rows", "footerRows", "rowColumns", "idPrefix", "getRowValue", "getColumnTitle", "style", "onColumnSorted"])) : v("", !0)
  ], 2);
}
const mm = /* @__PURE__ */ B(xf, [["render", Pf]]), gm = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  dom: fl,
  router: Rl
}, Symbol.toStringTag, { value: "Module" }));
export {
  ys as UluAccordion,
  jh as UluAdaptiveLayout,
  gh as UluAlert,
  Dh as UluAnimateNumber,
  Gl as UluBadge,
  vh as UluBadgeStack,
  Eh as UluBreadcrumb,
  Fl as UluButton,
  yh as UluButtonVerbose,
  ph as UluCallout,
  bh as UluCard,
  Mt as UluCollapsible,
  Ph as UluConditionalText,
  sa as UluConditionalWrapper,
  Bh as UluDataGrid,
  _h as UluDefinitionList,
  ih as UluDropdown,
  Fh as UluEmpty,
  Lh as UluEmptyView,
  wh as UluExternalLink,
  Yh as UluFacetsActiveFilters,
  Zh as UluFacetsFilterAccordions,
  Kh as UluFacetsFilterLists,
  Jh as UluFacetsFilterPopovers,
  Qh as UluFacetsFilterSelects,
  em as UluFacetsHeaderLayout,
  ct as UluFacetsList,
  tm as UluFacetsResults,
  sm as UluFacetsSearch,
  nm as UluFacetsSidebarLayout,
  om as UluFacetsSort,
  Ch as UluFileDisplay,
  Th as UluFormFile,
  Ah as UluFormMessage,
  Oh as UluFormSelect,
  xh as UluFormText,
  H as UluIcon,
  fm as UluImageSlideShow,
  Sh as UluList,
  kh as UluMain,
  gn as UluMenu,
  yl as UluMenuStack,
  ln as UluModal,
  Ih as UluNavStrip,
  ch as UluOverflowPopover,
  Mh as UluPager,
  Vh as UluPlaceholderImage,
  Hh as UluPlaceholderText,
  Xh as UluProgressBar,
  Gh as UluProgressCircle,
  Nh as UluRouteAnnouncer,
  Wh as UluSanityRichText,
  lm as UluScrollAnchors,
  im as UluScrollAnchorsNav,
  am as UluScrollAnchorsNavAnimated,
  rm as UluScrollAnchorsSection,
  Uh as UluSearchForm,
  bn as UluSelectableMenu,
  cm as UluShowSkeleton,
  um as UluSkeletonContent,
  dm as UluSkeletonMedia,
  hr as UluSkeletonText,
  zh as UluSkipLink,
  Ur as UluSlideShow,
  hm as UluSlideShowSlide,
  $h as UluSpokeSpinner,
  uh as UluTab,
  dh as UluTabGroup,
  fh as UluTabList,
  hh as UluTabPanel,
  mh as UluTabPanels,
  mm as UluTableSticky,
  Hr as UluTableStickyRows,
  tc as UluTableStickyTable,
  mn as UluTag,
  Rh as UluTitleRail,
  lh as breakpointsPlugin,
  th as corePlugin,
  nh as modalsPlugin,
  sh as popoversPlugin,
  oh as toastPlugin,
  Ko as useBreakpointManager,
  rh as useDocumentTitle,
  qh as useFacets,
  Bo as useIcon,
  ae as useModifiers,
  ah as usePagination,
  wl as useRequiredInject,
  bl as useWindowResize,
  gm as utils
};
