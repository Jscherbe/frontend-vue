import { reactive as Nt, ref as U, computed as _, resolveDirective as Wn, createElementBlock as d, openBlock as u, Fragment as x, withDirectives as xe, createElementVNode as h, unref as C, normalizeClass as m, renderSlot as g, createTextVNode as $, toDisplayString as b, withKeys as Dn, normalizeStyle as H, createCommentVNode as p, nextTick as Xn, toRef as Ps, createBlock as w, Teleport as ut, resolveDynamicComponent as F, mergeProps as de, inject as dt, watchEffect as ft, defineAsyncComponent as Ls, markRaw as Ue, toRefs as Vs, toValue as nt, resolveComponent as D, withModifiers as Hs, createVNode as B, useSlots as qn, renderList as O, TransitionGroup as Gn, withCtx as S, onMounted as ht, onBeforeUnmount as Yn, watch as We, isRef as Ns, hasInjectionContext as Ws, getCurrentInstance as Ds, onDeactivated as Xs, onActivated as qs, onUnmounted as Kn, normalizeProps as oe, guardReactiveProps as le, h as Gs, vModelText as Ys, vShow as Rt, createSlots as Oe } from "vue";
import { inline as Zn, offset as Jn, flip as Qn, shift as es, arrow as ts, useFloating as ns, autoUpdate as ss } from "@floating-ui/vue";
import { normalizeClasses as cn } from "@ulu/utils/templating.js";
import { preventScroll as Ks, wasClickOutside as Zs, isBrowser as Js } from "@ulu/utils/browser/dom.js";
import { Resizer as Qs } from "@ulu/frontend/js/ui/resizer.js";
import { debounce as Wt } from "@ulu/utils/performance.js";
import { useRoute as os, useRouter as eo, RouterLink as De } from "vue-router";
import { Tab as to, TabGroup as no, TabList as so, TabPanel as oo, TabPanels as lo } from "@headlessui/vue";
import { setPositionClasses as ro } from "@ulu/frontend/js/utils/dom.js";
import { randomInt as rt } from "@ulu/utils/random.js";
import { PortableText as ao } from "@portabletext/vue";
import io from "gsap";
import co from "fuse.js";
import { runAfterFramePaint as ls } from "@ulu/utils/browser/performance.js";
import { urlize as uo } from "@ulu/utils/string.js";
import { arrayCreate as fo } from "@ulu/utils/array.js";
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
function qf(e, n = {}) {
  const t = Nt({ ...un }), { iconsByType: s, ...o } = n || {};
  o && Object.assign(t, o);
  const l = {
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
  if (s)
    for (const [r, a] of Object.entries(s))
      l.setIcon(r, a);
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
}, Dt = U(!1), Xt = U(null);
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
const st = /* @__PURE__ */ new WeakMap(), yo = {
  mounted(e, n) {
    dn(e, n);
  },
  beforeUpdate(e) {
    fn(e);
  },
  updated(e, n) {
    dn(e, n);
  },
  unmounted(e) {
    fn(e);
  }
};
function dn(e, n) {
  const t = po(e, n);
  if (!t) return;
  let s = null;
  const o = () => {
    s || (s = setTimeout(() => {
      go(t), clearTimeout(s);
    }, t.delay));
  }, l = () => {
    s && (clearTimeout(s), s = null), vo();
  };
  t.showEvents.forEach((r) => {
    e.addEventListener(r, o);
  }), t.hideEvents.forEach((r) => {
    e.addEventListener(r, l);
  }), st.set(e, { onShow: o, onHide: l, config: t });
}
function fn(e) {
  if (!st.has(e))
    return;
  const { config: n, onShow: t, onHide: s } = st.get(e);
  n.showEvents.forEach((o) => {
    e.removeEventListener(o, t);
  }), n.hideEvents.forEach((o) => {
    e.removeEventListener(o, s);
  }), st.delete(e);
}
function po(e, n) {
  const { value: t } = n;
  let s;
  if (!(t === !1 || t === null))
    return typeof t == "object" ? s = t : s = { content: t }, mo(Object.assign({}, { trigger: e }, s));
}
let bo = 0;
function hn() {
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
      default: ({ isOpen: e, content: n }) => {
        e && n.focus({ preventScroll: !0 });
      }
    }
  },
  emits: ["toggle"],
  setup(e, { emit: n }) {
    const t = n, s = e, o = hn(), l = hn(), r = Object.assign({}, ye.popover, s.config), a = U(s.startOpen || !1), i = U(null), c = U(null), f = U(null), y = [
      ...r.inline ? [Zn()] : [],
      ...r.offset ? [Jn(r.offset)] : [],
      Qn(),
      es(),
      ...r.arrow ? [ts({ element: f })] : []
    ], v = {
      placement: r.placement,
      whileElementsMounted: ss,
      middleware: y
    }, {
      floatingStyles: k,
      placement: T,
      middlewareData: M,
      update: j,
      isPositioned: ne
    } = ns(i, c, v), $e = _(() => {
      const X = M.value?.arrow;
      return X ? {
        position: "absolute",
        left: X?.x != null ? `${X.x}px` : "",
        top: X?.y != null ? `${X.y}px` : ""
      } : null;
    });
    r.onReady && r.onReady({ update: j, isPositioned: ne });
    const G = () => {
      ee(!a.value);
    }, ee = (X) => {
      a.value = X;
      const me = {
        trigger: C(i),
        content: C(c),
        isOpen: C(a)
      }, Ce = { isOpen: me.isOpen };
      Xn(() => {
        a.value ? (j(), window.setTimeout(() => {
          St(), s.directFocus(me), t("toggle", Ce);
        }, 0)) : (te(), s.directFocus(me), t("toggle", Ce));
      });
    };
    let K;
    const St = () => {
      s.clickOutsideCloses && (K && te(), K = (X) => {
        c.value.contains(X.target) || ee(!1);
      }, document.addEventListener("click", K));
    }, te = () => {
      K && (document.removeEventListener("click", K), K = null);
    }, he = () => ee(!1);
    return (X, me) => {
      const Ce = Wn("ulu-tooltip");
      return u(), d(x, null, [
        xe((u(), d("button", {
          type: "button",
          ref_key: "trigger",
          ref: i,
          onClick: G,
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
            $(b(e.triggerText), 1)
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
          ref: c,
          "aria-labelledby": C(l),
          id: C(o),
          style: H(C(k)),
          "data-placement": C(T),
          onKeydown: me[0] || (me[0] = Dn((an) => ee(!1), ["esc"])),
          tabindex: "-1"
        }, [
          h("span", So, [
            g(X.$slots, "default", {
              isOpen: a.value,
              toggle: G,
              close: he
            })
          ]),
          X.$slots.footer ? (u(), d("span", ko, [
            g(X.$slots, "footer", { close: he })
          ])) : p("", !0),
          C(r).arrow ? (u(), d("span", {
            key: 1,
            class: "popover__arrow",
            ref_key: "contentArrow",
            ref: f,
            style: H($e.value),
            "data-ulu-popover-arrow": ""
          }, null, 4)) : p("", !0)
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
    const n = Ps(e.config.trigger), t = U(null), s = U(null), o = [
      ...e.config.inline ? [Zn()] : [],
      ...e.config.offset ? [Jn(e.config.offset)] : [],
      Qn(),
      es(),
      ...e.config.arrow ? [ts({ element: s })] : []
    ], l = {
      placement: e.config.placement,
      whileElementsMounted: ss,
      middleware: o
    }, {
      floatingStyles: r,
      placement: a,
      middlewareData: i,
      update: c,
      isPositioned: f
    } = ns(n, t, l), y = _(() => {
      const v = i.value?.arrow;
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
      "data-placement": C(a),
      style: H(C(r))
    }, [
      e.config.isHtml ? (u(), d("span", {
        key: 0,
        class: "popover__inner",
        innerHTML: e.config.content
      }, null, 8, Co)) : (u(), d("span", To, b(e.config.content), 1)),
      e.config.arrow ? (u(), d("span", {
        key: 2,
        class: "popover__arrow",
        ref_key: "contentArrow",
        ref: s,
        style: H(y.value)
      }, null, 4)) : p("", !0)
    ], 14, $o));
  }
}, Oo = {
  __name: "UluTooltipDisplay",
  setup(e) {
    return (n, t) => (u(), w(ut, {
      to: C(ye).plugin.tooltipTeleportTo
    }, [
      C(Dt) ? (u(), w(Ao, {
        key: 0,
        config: C(Xt)
      }, null, 8, ["config"])) : p("", !0)
    ], 8, ["to"]));
  }
};
function Gf(e, n = {}) {
  const t = ho(n);
  t.plugin.global && (e.directive(t.plugin.directiveName, yo), e.component("UluTooltipDisplay", Oo), e.component("UluPopover", mt));
}
const R = (e, n) => {
  const t = e.__vccOpts || e;
  for (const [s, o] of n)
    t[s] = o;
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
function Uo(e, n, t, s, o, l) {
  return l.currentModal ? (u(), w(F(l.currentModal.component), de({ key: 0 }, l.currentProps, {
    modelValue: o.open,
    "onUpdate:modelValue": n[0] || (n[0] = (r) => o.open = r),
    onVnodeMounted: l.modalMounted,
    onVnodeUnmounted: l.modalUnmounted
  }), null, 16, ["modelValue", "onVnodeMounted", "onVnodeUnmounted"])) : p("", !0);
}
const Bo = /* @__PURE__ */ R(xo, [["render", Uo]]);
function Ro() {
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
    const n = dt("uluCore"), t = U(null), { getIconProps: s, getClassesFromDefinition: o } = Ro();
    let l;
    const r = e, a = _(() => n.getSetting("fontAwesomeStatic")), i = _(() => n.getSetting("iconComponent")), c = _(() => n.getSetting("iconPropResolver")), f = _(() => {
      const { icon: M } = r;
      if (typeof M == "string" && M.startsWith("type:"))
        try {
          const j = M.substring(5);
          return n.getIcon(j);
        } catch (j) {
          return console.warn(j), null;
        }
      return M;
    }), y = _(() => !i.value || !f.value ? null : c.value(f.value)), v = _(() => s(f.value)), k = _(() => o(f.value)), T = _(() => ({
      "flow-inline": r.spaced
    }));
    return ft(async () => {
      if (!a.value && f.value) {
        if (t.value === null)
          if (l)
            t.value = Ue(l.FontAwesomeIcon);
          else {
            const M = Ls(async () => {
              const j = await import("@fortawesome/vue-fontawesome");
              return l = j, j.FontAwesomeIcon;
            });
            t.value = Ue(M);
          }
      } else
        t.value = null;
    }), (M, j) => i.value ? (u(), w(F(i.value), de({ key: 0 }, y.value, { class: T.value }), null, 16, ["class"])) : !a.value && t.value && f.value ? (u(), w(F(t.value), de({ key: 1 }, v.value, { class: T.value }), null, 16, ["class"])) : a.value && f.value ? (u(), d("span", {
      key: 2,
      class: m([k.value, T.value]),
      "aria-hidden": "true"
    }, null, 2)) : p("", !0);
  }
};
function re({ props: e, baseClass: n, internal: t = {} }) {
  const { modifiers: s } = Vs(e);
  return { resolvedModifiers: _(() => {
    const l = nt(n), r = cn(nt(s)), a = cn(nt(t));
    if (!l)
      return console.warn("useModifiers: Missing 'baseClass' argument, modifiers will not be applied."), "";
    const i = /* @__PURE__ */ new Set([...a, ...r]);
    return Array.from(i).map((c) => `${l}--${c}`);
  }) };
}
let kt = 0;
const jo = {
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
    return ++kt, {
      containerWidth: null,
      titleId: `ulu-modal-${kt}-title`,
      bodyOverflowValue: null,
      bodyPaddingRightValue: null,
      isResizing: !1
    };
  },
  setup(e) {
    const n = qn(), t = _(() => e.title || n.title), s = _(() => {
      const { allowResize: a, position: i } = e;
      if (!a || !i) return;
      const c = ["left", "right", "center"];
      return c.includes(i) ? !0 : (console.warn(`Passed invalid position for resize (${i}), use ${c.join(", ")}`), !1);
    }), o = _(() => e.position === "center" ? "type:resizeBoth" : "type:resizeHorizontal"), l = _(() => ({
      [e.position]: e.position,
      resize: e.allowResize,
      "no-resize": !e.allowResize,
      "no-header": !t.value,
      "body-fills": e.bodyFills,
      "no-backdrop": e.noBackdrop,
      "no-min-height": e.noMinHeight,
      "non-modal": e.nonModal,
      "resizer-active": s.value
    })), { resolvedModifiers: r } = re({
      props: e,
      baseClass: "modal",
      internal: l
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
        n === t && Zs(t, e) && this.close();
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
        e.newState === "open" ? this.restoreScroll = Ks({ preventShift: n }) : this.destroyPreventScroll();
      }
    },
    setupResizer() {
      const { position: e, resizerEnabled: n } = this;
      if (n) {
        const { container: t, resizer: s } = this.$refs, o = e === "center" ? { fromX: "right", fromY: "bottom", multiplier: 2 } : { fromX: e === "right" ? "left" : "right" };
        this.resizerInstance = new Qs(t, s, o), this.handleResizerStart = () => {
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
function Fo(e, n, t, s, o, l) {
  const r = D("UluIcon");
  return u(), w(ut, {
    to: t.teleport === !1 ? null : t.teleport,
    disabled: t.teleport === !1
  }, [
    h("dialog", {
      class: m(["modal", [s.resolvedModifiers, t.classes.container]]),
      "aria-labelledby": l.resolvedLabelledby,
      "aria-describedby": t.describedby,
      ref: "container",
      style: H({ width: o.containerWidth }),
      onCancel: n[1] || (n[1] = Hs((...a) => l.close && l.close(...a), ["prevent"])),
      onClose: n[2] || (n[2] = (...a) => l.handleDialogCloseEvent && l.handleDialogCloseEvent(...a)),
      onClick: n[3] || (n[3] = (...a) => l.handleClick && l.handleClick(...a)),
      onToggle: n[4] || (n[4] = (...a) => l.handleToggle && l.handleToggle(...a))
    }, [
      s.hasHeader ? (u(), d("header", {
        key: 0,
        class: m(["modal__header", t.classes.header])
      }, [
        h("h2", {
          class: m(["modal__title", t.classes.title]),
          id: o.titleId
        }, [
          g(e.$slots, "title", { close: l.close }, () => [
            t.titleIcon ? (u(), w(r, {
              key: 0,
              class: "modal__title-icon",
              icon: t.titleIcon
            }, null, 8, ["icon"])) : p("", !0),
            h("span", Mo, b(t.title), 1)
          ])
        ], 10, Io),
        h("button", {
          class: "modal__close",
          "aria-label": "Close modal",
          onClick: n[0] || (n[0] = (...a) => l.close && l.close(...a)),
          autofocus: ""
        }, [
          g(e.$slots, "closeIcon", {}, () => [
            B(r, {
              class: "modal__close-icon",
              icon: t.closeIcon || "type:close"
            }, null, 8, ["icon"])
          ])
        ])
      ], 2)) : p("", !0),
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
      ], 2)) : p("", !0),
      s.resizerEnabled ? (u(), d("button", zo, [
        g(e.$slots, "resizerIcon", {}, () => [
          B(r, {
            class: "modal__resizer-icon",
            icon: t.resizerIcon || s.resizerIconType
          }, null, 8, ["icon"])
        ])
      ], 512)) : p("", !0)
    ], 46, Eo)
  ], 8, ["to", "disabled"]);
}
const rs = /* @__PURE__ */ R(jo, [["render", Fo]]), Le = [], Po = U({
  /**
   * Holds active component options (including component, and options)
   */
  active: null,
  /**
   * Populated with any props passed to open method, bound to modal component
   */
  activeProps: null
}), Ve = Po.value, mn = {
  data: Ve,
  modals: Le
}, Lo = (e) => ({
  open(n, t = null) {
    const s = this.get(n);
    Ve.active = Ue(s), Ve.activeProps = Object.assign({}, s.props, t);
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
  get(n) {
    const t = Le.find((s) => s.name === n);
    if (t)
      return t;
    throw new Error(`Unable to find modal named: ${n}`);
  },
  /**
   * Add a modal config
   */
  add(n) {
    const t = e(n);
    Le.push(t);
  },
  /**
   * Removes a modal config by name
   * @return {Object} Modal that was removed
   */
  remove(n) {
    const t = Le.findIndex((s) => s.name === n);
    if (t > -1)
      return Le.splice(t, 1);
    warn("unable to find modal to remove");
  }
}), Vo = {
  modals: [],
  modalOptions: {}
};
function Yf(e, n) {
  const t = Object.assign({}, Vo, n), o = Lo((l) => Object.assign({}, t.modalOptions, l));
  e.component("UluModalsDisplay", Bo), e.component("UluModal", rs), t.modals.forEach((l) => {
    o.add(l);
  }), mn.options = t, e.config.globalProperties.$uluModals = o, e.provide("uluModals", o), e.config.globalProperties.$uluModalsState = mn;
}
const Ho = {
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
}, No = ["onClick"];
function Wo(e, n, t, s, o, l) {
  const r = D("UluIcon");
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
        t.toast.icon ? (u(), w(r, {
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
      (u(!0), d(x, null, O(t.toast.actions, (a, i) => (u(), d("button", {
        key: i,
        class: m(["toast__action", t.classes.action]),
        onClick: (c) => l.handleAction(c, a)
      }, b(a.label), 11, No))), 128))
    ], 2)) : p("", !0),
    h("button", {
      class: m(["toast__close", t.classes.closeButton]),
      onClick: n[0] || (n[0] = (...a) => t.toast.close && t.toast.close(...a))
    }, [
      B(r, { icon: "type:close" })
    ], 2)
  ], 2);
}
const as = /* @__PURE__ */ R(Ho, [["render", Wo]]), gn = {
  toastOptions: {
    /**
     * Component used to render the toast in the display
     */
    component: Ue(as),
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
  pluginOptions: gn.pluginOptions,
  toastOptions: gn.toastOptions,
  setToastOptions(e) {
    return this.toastOptions = $t({}, this.toastOptions, e), this.pluginOptions;
  },
  setPluginOptions(e) {
    return this.pluginOptions = $t({}, this.pluginOptions, e), this.pluginOptions;
  },
  createToast(e) {
    const n = `toast-${++Do}`;
    return $t({}, this.toastOptions, e, {
      uid: n,
      close() {
        jt.remove(n);
      }
    });
  }
}), jt = {
  /**
   * 
   * @param {Object} options Toast options
   * @returns Toast object (to be used to remove)
   */
  add(e) {
    const n = ge.createToast(e);
    return ge.toasts.unshift(n), n.duration && setTimeout(() => {
      this.remove(n.uid);
    }, n.duration), n;
  },
  /**
   * 
   * @param {Object} toast Toast uid
   */
  remove(e) {
    const n = ge.toasts.findIndex((t) => t.uid === e);
    n > -1 && ge.toasts.splice(n, 1);
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
    const { toasts: e, pluginOptions: n } = ge;
    return { toasts: e, pluginOptions: n };
  },
  computed: {
    classes() {
      const { position: e } = this.pluginOptions;
      return e.map((t) => `toast-container--${t}`);
    }
  }
};
function qo(e, n, t, s, o, l) {
  return u(), w(ut, {
    to: o.pluginOptions.teleportTo
  }, [
    B(Gn, {
      class: m(["toast-container", l.classes]),
      name: "toast-animation",
      tag: "div"
    }, {
      default: S(() => [
        (u(!0), d(x, null, O(o.toasts, (r) => (u(), w(F(r.component), {
          key: r.uid,
          toast: r
        }, null, 8, ["toast"]))), 128))
      ]),
      _: 1
    }, 8, ["class"])
  ], 8, ["to"]);
}
const Go = /* @__PURE__ */ R(Xo, [["render", qo]]);
function Kf(e, n = {}) {
  ge.setPluginOptions(n?.plugin), ge.setToastOptions(n?.toast), e.component("UluToast", as), e.component("UluToastDisplay", Go), e.config.globalProperties.$uluToast = jt, e.provide("uluToast", jt);
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
  const n = Object.assign({}, Yo, e), t = U(null), s = U(n.initialValue), o = U(null);
  return (async () => {
    if (!Js()) return;
    await new Promise((f) => {
      document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", () => f()) : f();
    });
    const r = await import("@ulu/frontend/js/ui/breakpoints.js"), { BreakpointManager: a } = r, i = Ue(new a(n.plugin));
    t.value = Ue(i);
    const c = () => {
      s.value = i.active, o.value = i.resizeDirection;
    };
    c(), n.onReady && n.onReady(i), i.onChange(c);
  })(), { breakpointManager: t, breakpointActive: s, breakpointDirection: o };
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
function Zf(e, n) {
  const t = U(!1), s = Object.assign({}, Zo, n), { breakpointMobile: o } = s, { onReady: l } = s.managerOptions, r = {
    onReady(y) {
      y.at(o).max({
        on() {
          t.value = !0;
        },
        off() {
          t.value = !1;
        }
      }), l && l(y);
    }
  }, a = Object.assign({}, s.managerOptions, r), {
    breakpointManager: i,
    breakpointActive: c,
    breakpointDirection: f
  } = Ko(a);
  e.provide("uluBreakpointActive", _(() => c.value)), e.provide("uluBreakpointDirection", _(() => f.value)), e.provide("uluBreakpointManager", _(() => i.value)), e.provide("uluIsMobile", _(() => t.value));
}
const Et = /* @__PURE__ */ new Set(), Y = /* @__PURE__ */ new WeakMap(), be = /* @__PURE__ */ new WeakMap(), Q = /* @__PURE__ */ new WeakMap(), Xe = /* @__PURE__ */ new WeakMap(), Ct = /* @__PURE__ */ new WeakMap(), He = /* @__PURE__ */ new WeakMap(), pe = /* @__PURE__ */ new WeakMap(), ve = /* @__PURE__ */ new WeakMap(), Ae = /* @__PURE__ */ new WeakSet();
let Z, qt = 0, Gt = 0;
const ue = "__aa_tgt", qe = "__aa_del", at = "__aa_new", is = (e) => {
  const n = tl(e);
  n && n.forEach((t) => nl(t));
}, Jo = (e) => {
  e.forEach((n) => {
    n.target === Z && Qo(), Y.has(n.target) && we(n.target);
  });
};
function cs(e) {
  const n = e.getBoundingClientRect(), t = Z?.clientWidth || 0, s = Z?.clientHeight || 0;
  return n.bottom < 0 || n.top > s || n.right < 0 || n.left > t;
}
function Yt(e) {
  const n = Xe.get(e);
  n?.disconnect();
  let t = Y.get(e), s = 0;
  const o = 5;
  t || (t = Be(e), Y.set(e, t));
  const { offsetWidth: l, offsetHeight: r } = Z, i = [
    t.top - o,
    l - (t.left + o + t.width),
    r - (t.top + o + t.height),
    t.left - o
  ].map((f) => `${-1 * Math.floor(f)}px`).join(" "), c = new IntersectionObserver(() => {
    ++s > 1 && we(e);
  }, {
    root: Z,
    threshold: 1,
    rootMargin: i
  });
  c.observe(e), Xe.set(e, c);
}
function we(e, n = !0) {
  clearTimeout(ve.get(e));
  const t = gt(e), s = n ? Ge(t) ? 500 : t.duration : 0;
  ve.set(e, setTimeout(async () => {
    const o = Q.get(e);
    try {
      await o?.finished, Y.set(e, Be(e)), Yt(e);
    } catch {
    }
  }, s));
}
function Qo() {
  clearTimeout(ve.get(Z)), ve.set(Z, setTimeout(() => {
    Et.forEach((e) => ot(e, (n) => us(() => we(n))));
  }, 100));
}
function el(e) {
  setTimeout(() => {
    He.set(e, setInterval(() => us(we.bind(null, e)), 2e3));
  }, Math.round(2e3 * Math.random()));
}
function us(e) {
  typeof requestIdleCallback == "function" ? requestIdleCallback(() => e()) : requestAnimationFrame(() => e());
}
let ie;
const ds = typeof window < "u" && "ResizeObserver" in window;
ds && (Z = document.documentElement, new MutationObserver(is), ie = new ResizeObserver(Jo), window.addEventListener("scroll", () => {
  Gt = window.scrollY, qt = window.scrollX;
}), ie.observe(Z));
function tl(e) {
  return e.reduce((s, o) => [
    ...s,
    ...Array.from(o.addedNodes),
    ...Array.from(o.removedNodes)
  ], []).every((s) => s.nodeName === "#comment") ? !1 : e.reduce((s, o) => {
    if (s === !1)
      return !1;
    if (o.target instanceof Element) {
      if (Tt(o.target), !s.has(o.target)) {
        s.add(o.target);
        for (let l = 0; l < o.target.children.length; l++) {
          const r = o.target.children.item(l);
          if (r) {
            if (qe in r)
              return !1;
            Tt(o.target, r), s.add(r);
          }
        }
      }
      if (o.removedNodes.length)
        for (let l = 0; l < o.removedNodes.length; l++) {
          const r = o.removedNodes[l];
          if (qe in r)
            return !1;
          r instanceof Element && (s.add(r), Tt(o.target, r), be.set(r, [
            o.previousSibling,
            o.nextSibling
          ]));
        }
    }
    return s;
  }, /* @__PURE__ */ new Set());
}
function Tt(e, n) {
  !n && !(ue in e) ? Object.defineProperty(e, ue, { value: e }) : n && !(ue in n) && Object.defineProperty(n, ue, { value: e });
}
function nl(e) {
  var n, t;
  const s = e.isConnected, o = Y.has(e);
  s && be.has(e) && be.delete(e), ((n = Q.get(e)) === null || n === void 0 ? void 0 : n.playState) !== "finished" && ((t = Q.get(e)) === null || t === void 0 || t.cancel()), at in e ? vn(e) : o && s ? ol(e) : o && !s ? ll(e) : vn(e);
}
function se(e) {
  return Number(e.replace(/[^0-9.\-]/g, ""));
}
function sl(e) {
  let n = e.parentElement;
  for (; n; ) {
    if (n.scrollLeft || n.scrollTop)
      return { x: n.scrollLeft, y: n.scrollTop };
    n = n.parentElement;
  }
  return { x: 0, y: 0 };
}
function Be(e) {
  const n = e.getBoundingClientRect(), { x: t, y: s } = sl(e);
  return {
    top: n.top + s,
    left: n.left + t,
    width: n.width,
    height: n.height
  };
}
function fs(e, n, t) {
  let s = n.width, o = n.height, l = t.width, r = t.height;
  const a = getComputedStyle(e);
  if (a.getPropertyValue("box-sizing") === "content-box") {
    const c = se(a.paddingTop) + se(a.paddingBottom) + se(a.borderTopWidth) + se(a.borderBottomWidth), f = se(a.paddingLeft) + se(a.paddingRight) + se(a.borderRightWidth) + se(a.borderLeftWidth);
    s -= f, l -= f, o -= c, r -= c;
  }
  return [s, l, o, r].map(Math.round);
}
function gt(e) {
  return ue in e && pe.has(e[ue]) ? pe.get(e[ue]) : { duration: 250, easing: "ease-in-out" };
}
function hs(e) {
  if (ue in e)
    return e[ue];
}
function Kt(e) {
  const n = hs(e);
  return n ? Ae.has(n) : !1;
}
function ot(e, ...n) {
  n.forEach((t) => t(e, pe.has(e)));
  for (let t = 0; t < e.children.length; t++) {
    const s = e.children.item(t);
    s && n.forEach((o) => o(s, pe.has(s)));
  }
}
function Zt(e) {
  return Array.isArray(e) ? e : [e];
}
function Ge(e) {
  return typeof e == "function";
}
function ol(e) {
  const n = Y.get(e), t = Be(e);
  if (!Kt(e))
    return Y.set(e, t);
  if (cs(e)) {
    Y.set(e, t), Yt(e);
    return;
  }
  let s;
  if (!n)
    return;
  const o = gt(e);
  if (typeof o != "function") {
    let l = n.left - t.left, r = n.top - t.top;
    const a = n.left + n.width - (t.left + t.width);
    n.top + n.height - (t.top + t.height) == 0 && (r = 0), a == 0 && (l = 0);
    const [c, f, y, v] = fs(e, n, t), k = {
      transform: `translate(${l}px, ${r}px)`
    }, T = {
      transform: "translate(0, 0)"
    };
    c !== f && (k.width = `${c}px`, T.width = `${f}px`), y !== v && (k.height = `${y}px`, T.height = `${v}px`), s = e.animate([k, T], {
      duration: o.duration,
      easing: o.easing
    });
  } else {
    const [l] = Zt(o(e, "remain", n, t));
    s = new Animation(l), s.play();
  }
  Q.set(e, s), Y.set(e, t), s.addEventListener("finish", we.bind(null, e, !1), {
    once: !0
  });
}
function vn(e) {
  at in e && delete e[at];
  const n = Be(e);
  Y.set(e, n);
  const t = gt(e);
  if (!Kt(e))
    return;
  if (cs(e)) {
    Yt(e);
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
    const [o] = Zt(t(e, "add", n));
    s = new Animation(o), s.play();
  }
  Q.set(e, s), s.addEventListener("finish", we.bind(null, e, !1), {
    once: !0
  });
}
function yn(e, n) {
  var t;
  e.remove(), Y.delete(e), be.delete(e), Q.delete(e), (t = Xe.get(e)) === null || t === void 0 || t.disconnect(), setTimeout(() => {
    if (qe in e && delete e[qe], Object.defineProperty(e, at, { value: !0, configurable: !0 }), n && e instanceof HTMLElement)
      for (const s in n)
        e.style[s] = "";
  }, 0);
}
function ll(e) {
  var n;
  if (!be.has(e) || !Y.has(e))
    return;
  const [t, s] = be.get(e);
  Object.defineProperty(e, qe, { value: !0, configurable: !0 });
  const o = window.scrollX, l = window.scrollY;
  if (s && s.parentNode && s.parentNode instanceof Element ? s.parentNode.insertBefore(e, s) : t && t.parentNode ? t.parentNode.appendChild(e) : (n = hs(e)) === null || n === void 0 || n.appendChild(e), !Kt(e))
    return yn(e);
  const [r, a, i, c] = al(e), f = gt(e), y = Y.get(e);
  (o !== qt || l !== Gt) && rl(e, o, l, f);
  let v, k = {
    position: "absolute",
    top: `${r}px`,
    left: `${a}px`,
    width: `${i}px`,
    height: `${c}px`,
    margin: "0",
    pointerEvents: "none",
    transformOrigin: "center",
    zIndex: "100"
  };
  if (!Ge(f))
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
    const [T, M] = Zt(f(e, "remove", y));
    M?.styleReset !== !1 && (k = M?.styleReset || k, Object.assign(e.style, k)), v = new Animation(T), v.play();
  }
  Q.set(e, v), v.addEventListener("finish", () => yn(e, k), {
    once: !0
  });
}
function rl(e, n, t, s) {
  const o = qt - n, l = Gt - t, r = document.documentElement.style.scrollBehavior;
  if (getComputedStyle(Z).scrollBehavior === "smooth" && (document.documentElement.style.scrollBehavior = "auto"), window.scrollTo(window.scrollX + o, window.scrollY + l), !e.parentElement)
    return;
  const i = e.parentElement;
  let c = i.clientHeight, f = i.clientWidth;
  const y = performance.now();
  function v() {
    requestAnimationFrame(() => {
      if (!Ge(s)) {
        const k = c - i.clientHeight, T = f - i.clientWidth;
        y + s.duration > performance.now() ? (window.scrollTo({
          left: window.scrollX - T,
          top: window.scrollY - k
        }), c = i.clientHeight, f = i.clientWidth, v()) : document.documentElement.style.scrollBehavior = r;
      }
    });
  }
  v();
}
function al(e) {
  var n;
  const t = Y.get(e), [s, , o] = fs(e, t, Be(e));
  let l = e.parentElement;
  for (; l && (getComputedStyle(l).position === "static" || l instanceof HTMLBodyElement); )
    l = l.parentElement;
  l || (l = document.body);
  const r = getComputedStyle(l), a = !Q.has(e) || ((n = Q.get(e)) === null || n === void 0 ? void 0 : n.playState) === "finished" ? Be(l) : Y.get(l), i = Math.round(t.top - a.top) - se(r.borderTopWidth), c = Math.round(t.left - a.left) - se(r.borderLeftWidth);
  return [i, c, s, o];
}
function il(e, n = {}) {
  if (ds && ie && !(window.matchMedia("(prefers-reduced-motion: reduce)").matches && !Ge(n) && !n.disrespectUserMotionPreference)) {
    Ae.add(e), getComputedStyle(e).position === "static" && Object.assign(e.style, { position: "relative" }), ot(e, we, el, (r) => ie?.observe(r)), Ge(n) ? pe.set(e, n) : pe.set(e, {
      duration: 250,
      easing: "ease-in-out",
      ...n
    });
    const l = new MutationObserver(is);
    l.observe(e, { childList: !0 }), Ct.set(e, l), Et.add(e);
  }
  return Object.freeze({
    parent: e,
    enable: () => {
      Ae.add(e);
    },
    disable: () => {
      Ae.delete(e), ot(e, (s) => {
        const o = Q.get(s);
        try {
          o?.cancel();
        } catch {
        }
        Q.delete(s);
        const l = ve.get(s);
        l && clearTimeout(l), ve.delete(s);
        const r = He.get(s);
        r && clearInterval(r), He.delete(s);
      });
    },
    isEnabled: () => Ae.has(e),
    destroy: () => {
      Ae.delete(e), Et.delete(e), pe.delete(e);
      const s = Ct.get(e);
      s?.disconnect(), Ct.delete(e), ot(e, (o) => {
        ie?.unobserve(o);
        const l = Q.get(o);
        try {
          l?.cancel();
        } catch {
        }
        Q.delete(o);
        const r = Xe.get(o);
        r?.disconnect(), Xe.delete(o);
        const a = He.get(o);
        a && clearInterval(a), He.delete(o);
        const i = ve.get(o);
        i && clearTimeout(i), ve.delete(o), Y.delete(o), be.delete(o);
      });
    }
  });
}
function cl(e) {
  const n = U();
  let t;
  function s(o) {
    t && (o ? t.enable() : t.disable());
  }
  return ht(() => {
    ft((o) => {
      let l;
      n.value instanceof HTMLElement ? l = n.value : n.value && "$el" in n.value && n.value.$el instanceof HTMLElement && (l = n.value.$el), l && (t = il(l, e || {}), o(() => {
        var r;
        (r = t?.destroy) === null || r === void 0 || r.call(t), t = void 0;
      }));
    });
  }), Yn(() => {
    var o;
    (o = t?.destroy) === null || o === void 0 || o.call(t), t = void 0;
  }), [n, s];
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
  const n = `${e}-${++dl}`;
  return typeof document < "u" && document.getElementById(n) ? generateUid(e) : n;
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
  setup(e, { emit: n }) {
    const t = e, s = n, o = _(() => typeof t.animate == "object" ? t.animate : {}), [l, r] = cl(o);
    ht(() => {
      r(!!t.animate);
    }), We(() => t.animate, (T) => {
      r(!!T);
    });
    const a = _(() => t.modelValue !== void 0), i = U(t.startOpen), c = _({
      get() {
        return a.value ? t.modelValue : i.value;
      },
      set(T) {
        a.value ? s("update:modelValue", T) : i.value = T;
      }
    }), f = U(It("ulu-collapsible-trigger")), y = U(It("ulu-collapsible-content"));
    function v() {
      c.value = !c.value;
    }
    function k() {
      t.closeOnEscape && c.value && (c.value = !1);
    }
    return (T, M) => (u(), d("div", {
      ref_key: "container",
      ref: l,
      onKeydown: Dn(k, ["esc"]),
      class: m([e.classes.container, c.value ? e.classes.containerOpen : e.classes.containerClosed])
    }, [
      h("button", {
        class: m(e.classes.trigger),
        id: f.value,
        "aria-controls": y.value,
        "aria-expanded": c.value,
        onClick: v
      }, [
        g(T.$slots, "trigger", { isOpen: c.value }, () => [
          $(b(e.triggerText), 1)
        ])
      ], 10, hl),
      c.value ? (u(), d("div", {
        key: 0,
        class: m(e.classes.content),
        tabindex: "-1",
        id: y.value,
        "aria-hidden": !c.value,
        "aria-labelledby": f.value
      }, [
        g(T.$slots, "default", {
          isOpen: c.value,
          toggle: v
        })
      ], 10, ml)) : p("", !0)
    ], 34));
  }
}, pn = {
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
  setup(e, { emit: n }) {
    const t = e, { resolvedModifiers: s } = re({ props: t, baseClass: "accordion" }), o = _(() => {
      const l = { ...t.classes };
      return l.container = [l.container, s.value], l;
    });
    return (l, r) => (u(), w(Mt, {
      "model-value": e.modelValue,
      "start-open": e.startOpen,
      "trigger-text": e.triggerText,
      classes: o.value,
      animate: e.animate,
      "onUpdate:modelValue": r[0] || (r[0] = (a) => l.$emit("update:modelValue", a))
    }, {
      trigger: S(({ isOpen: a }) => [
        g(l.$slots, "trigger", { isOpen: a }, () => [
          (u(), w(F(e.triggerTextElement), null, {
            default: S(() => [
              $(b(e.triggerText), 1)
            ]),
            _: 1
          }))
        ]),
        g(l.$slots, "icon", { isOpen: a }, () => [
          h("span", {
            class: m(["accordion__icon", e.classes.icon])
          }, [
            B(N, {
              icon: a ? "type:collapse" : "type:expand",
              style: { display: "inline" }
            }, null, 8, ["icon"])
          ], 2)
        ])
      ]),
      default: S(({ isOpen: a, toggle: i }) => [
        g(l.$slots, "default", {
          isOpen: a,
          toggle: i
        })
      ]),
      _: 3
    }, 8, ["model-value", "start-open", "trigger-text", "classes", "animate"]));
  }
}, ms = {
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
    const n = e, { resolvedModifiers: t } = re({ props: n, baseClass: "tag" });
    return (s, o) => (u(), d("span", {
      class: m(["tag", [
        {
          "tag--counter": e.counter,
          [`tag--${e.size}`]: e.size,
          [`tag--${e.type}`]: e.type
        },
        C(t)
      ]])
    }, [
      e.icon ? (u(), w(N, {
        key: 0,
        icon: e.icon,
        spaced: ""
      }, null, 8, ["icon"])) : p("", !0),
      g(s.$slots, "default", {}, () => [
        h("span", null, b(e.text), 1)
      ])
    ], 2));
  }
}, gl = {
  name: "UluMenu",
  components: {
    UluIcon: N,
    UluTag: ms
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
function vl(e, n, t, s, o, l) {
  const r = D("UluIcon"), a = D("UluTag"), i = D("UluMenu", !0), c = Wn("ulu-tooltip");
  return t.items?.length ? (u(), d("ul", {
    key: 0,
    class: m(t.classes.list)
  }, [
    (u(!0), d(x, null, O(t.items, (f, y) => (u(), d("li", {
      key: y,
      class: m([
        t.classes.item,
        f?.classes?.item,
        f.separatorBefore ? t.classes.itemSeparatorBefore : "",
        f.separatorAfter ? t.classes.itemSeparatorAfter : ""
      ])
    }, [
      xe((u(), w(F(f.to || f.path ? "router-link" : f.click ? "button" : "a"), de({ ref_for: !0 }, {
        ...f.to || f.path ? {
          to: f.to || f.path,
          activeClass: t.classes.linkActive || null,
          exactActiveClass: t.classes.linkExactActive || null
        } : {},
        ...f.href ? { href: f.href || "#" } : {}
      }, {
        onClick: (v) => {
          l.handleItemClick(v, f);
        },
        class: [t.classes.link, f?.classes?.link],
        "aria-label": t.iconOnly ? f.title : null,
        id: f.id
      }), {
        default: S(() => [
          g(e.$slots, "default", {
            item: f,
            index: y
          }, () => [
            f.icon ? (u(), w(r, {
              key: 0,
              icon: f.icon,
              class: m([t.classes.linkIcon, f?.classes?.linkIcon])
            }, null, 8, ["icon", "class"])) : p("", !0),
            h("span", {
              class: m([t.classes.linkText, f?.classes?.linkText])
            }, b(f.title), 3),
            f.tag ? (u(), w(a, de({
              key: 1,
              ref_for: !0
            }, f.tag), null, 16)) : p("", !0)
          ])
        ]),
        _: 2
      }, 1040, ["onClick", "class", "aria-label", "id"])), [
        [c, t.iconOnly ? f.title : f.tooltip || null]
      ]),
      !t.noChildren && f?.children?.length ? (u(), w(i, {
        key: 0,
        iconOnly: t.iconOnly,
        classes: t.classes,
        items: f.children
      }, null, 8, ["iconOnly", "classes", "items"])) : p("", !0)
    ], 2))), 128))
  ], 2)) : p("", !0);
}
const gs = /* @__PURE__ */ R(gl, [["render", vl]]), yl = {
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
    const n = e, t = _(() => ({
      hanging: n.hanging,
      compact: n.compact
    })), { resolvedModifiers: s } = re({
      props: n,
      internal: t,
      baseClass: "menu-stack"
    });
    return (o, l) => (u(), w(F(e.containerElement), {
      class: m(["menu-stack", C(s)])
    }, {
      default: S(() => [
        B(gs, {
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
}, Jf = {
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
    return (n, t) => (u(), w(mt, { classes: e.popoverClasses }, {
      trigger: S(({ isOpen: s }) => [
        g(n.$slots, "trigger", { isOpen: s }, () => [
          h("span", null, b(e.triggerText), 1),
          B(N, {
            class: "button__icon",
            icon: "type:dropdownExpand",
            style: H({ transform: s ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.2s" })
          }, null, 8, ["style"])
        ])
      ]),
      default: S(() => [
        B(yl, { items: e.items }, null, 8, ["items"])
      ]),
      _: 3
    }, 8, ["classes"]));
  }
}, Jt = U(!1), it = {
  start: [],
  end: []
};
function Qt() {
  window.removeEventListener("resize", Qt), Jt.value = !0, it.start.forEach((e) => e());
}
function pl() {
  Jt.value = !1, it.end.forEach((e) => e()), window.addEventListener("resize", Qt);
}
window.addEventListener("resize", Qt), window.addEventListener("resize", Wt(pl, 300));
function bn(e, n) {
  return e.push(n), () => {
    const t = e.findIndex((s) => s === n);
    t > -1 && e.splice(t);
  };
}
function bl() {
  return {
    resizing: Jt,
    onResizeStart(e) {
      return bn(it.start, e);
    },
    onResizeEnd(e) {
      return bn(it.end, e);
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
}, _n = {};
function wl(e) {
  const n = dt(e, _n);
  if (n === _n) {
    const t = _l[e] || "", s = t ? ` from the '${t}' plugin` : "", o = t ? "Please install missing plugin." : "";
    throw new Error(`Required inject: '${e}'${s} was not provided. ${o}`);
  }
  return n;
}
function Qf(e, n) {
  const t = os(), s = eo(), o = _(() => {
    const c = parseInt(t.query.page || "1", 10);
    return isNaN(c) || c < 1 ? 1 : c;
  }), l = _(() => !e.value || e.value.length === 0 ? 1 : Math.ceil(e.value.length / n));
  We(l, (c) => {
    o.value > c && s.push({ query: { ...t.query, page: c } });
  });
  const r = _(() => {
    const c = (o.value - 1) * n, f = c + n;
    return e.value.slice(c, f);
  }), a = _(() => {
    if (l.value <= 1)
      return null;
    const c = {
      pages: {}
    }, f = o.value, y = l.value, v = 5, k = (j) => ({ query: { ...t.query, page: j } });
    f > 1 && (c.first = { href: k(1) }, c.previous = { href: k(f - 1) }), f < y && (c.next = { href: k(f + 1) }, c.last = { href: k(y) });
    let T, M;
    if (y <= v)
      T = 1, M = y;
    else {
      const j = Math.floor(v / 2), ne = Math.ceil(v / 2) - 1;
      f <= j ? (T = 1, M = v) : f + ne >= y ? (T = y - v + 1, M = y) : (T = f - j, M = f + ne);
    }
    for (let j = T; j <= M; j++)
      c.pages[j] = { href: k(j) };
    return c;
  }), i = _(() => {
    const c = { previous: !1, next: !1 };
    if (!a.value || !a.value.pages) return c;
    const f = Object.keys(a.value.pages).map(Number);
    if (f.length === 0) return c;
    const y = Math.min(...f), v = Math.max(...f);
    return y > 1 && (c.previous = !0), v < l.value && (c.next = !0), c;
  });
  return {
    currentPage: o,
    totalPages: l,
    paginatedItems: r,
    pagerItems: a,
    pagerEllipses: i
  };
}
function zt(e, n, t) {
  typeof e === "function" && (!t || t !== "titleTemplate" && !(t[0] === "o" && t[1] === "n")) && (e = e());
  let o;
  if (n && (o = n(t, e)), Array.isArray(o))
    return o.map((l) => zt(l, n));
  if (o?.constructor === Object) {
    const l = {};
    for (const r of Object.keys(o))
      l[r] = zt(o[r], n, r);
    return l;
  }
  return o;
}
const Sl = (e, n) => Ns(n) ? nt(n) : n, kl = "usehead";
function $l() {
  if (Ws()) {
    const e = dt(kl);
    if (!e)
      throw new Error("useHead() was called without provide context, ensure you call it through the setup() function.");
    return e;
  }
  throw new Error("useHead() was called without provide context, ensure you call it through the setup() function.");
}
function Cl(e, n = {}) {
  const t = n.head || $l();
  return t.ssr ? t.push(e || {}, n) : Tl(t, e, n);
}
function Tl(e, n, t = {}) {
  const s = U(!1);
  let o;
  return ft(() => {
    const r = s.value ? {} : zt(n, Sl);
    o ? o.patch(r) : o = e.push(r, t);
  }), Ds() && (Yn(() => {
    o.dispose();
  }), Xs(() => {
    s.value = !0;
  }), qs(() => {
    s.value = !1;
  })), o;
}
function vt(e, n) {
  let s = (e?.meta || {}).title;
  return typeof s == "function" && (s = s(n || e)), s;
}
function Al(e, n) {
  const s = Object.assign({}, {
    qualifier(r, a) {
      return a ? tn(r) : vs(r);
    },
    sort: sn,
    item: {},
    includeChildren: !1
  }, n), o = (r, a) => a ? `${a}/${r.path}` : r.path, l = (r, a = null) => r.filter((i) => s.qualifier(i, a)).map((i) => {
    const c = i.children ? en(i.children) : i, f = i.children ? i.children.filter((v) => v.path !== "") : !1, y = yt(c, o(i, a), s.item);
    return s.includeChildren && f.length && (y.children = l(f, y.path)), y;
  }).sort(s.sort);
  return l(e);
}
function Ol(e) {
  function n(t) {
    const s = [];
    for (const o of t) {
      const l = { ...o };
      delete l.children, s.push(l), o.children && s.push(...n(o.children));
    }
    return s;
  }
  return n(e);
}
function xl(e, n, t) {
  const o = Object.assign({}, {
    includeIndex: !1,
    item: {},
    sort: sn
  }, t), l = e.find((c) => c.path !== "/" && n.includes(c.path)), r = (c, f, y) => {
    if (c.children) {
      const v = c.children.find((k) => k.path.includes(n));
      if (v)
        return r(v, c, y + v.path);
    }
    return { route: f, path: y };
  }, { route: a, path: i } = r(l, l, l.path);
  return a.children ? a.children.filter(ps(o.includeIndex)).map((c) => yt(c, `${i}/${c.path}`, o.item)).sort(o.sort) : (console.warn("Unable to build menu for:", n), []);
}
function en(e) {
  return e.find((n) => n.path === "");
}
function yt(e, n = e.path, t) {
  const o = Object.assign({}, {
    indexMeta: !0,
    modify: null
  }, t);
  let l = Object.assign({}, e.meta);
  o.indexMeta && e.children && (l = Object.assign({}, l, en(e.children)?.meta));
  const r = { ...e, meta: l }, a = {
    path: n,
    title: vt(r, e) || "Missing Title",
    weight: l?.weight || 0,
    meta: l
  };
  return o.modify && o.modify(a, e), a;
}
function tn(e) {
  return !e.path.includes("/:");
}
function vs(e) {
  const n = e.path.match(/\//g) || [];
  return tn(e) && n.length === 1;
}
function Ul(e, n) {
  const { target: t } = n, s = t.closest("a");
  if (s) {
    let o = s.getAttribute("href");
    o.startsWith("/") && (e.push(o), n.preventDefault());
  }
}
function ys(e, n = nn(e)) {
  return n?.children;
}
function nn(e, n) {
  const t = e.matched.length, s = t - 2;
  return n ? t > 1 ? e.matched[0] : null : s < 0 ? null : e.matched[s];
}
function ps(e) {
  return (n) => e || n.path !== "";
}
function sn(e, n) {
  return e?.weight - n?.weight;
}
function Bl(e, n) {
  const s = Object.assign({}, {
    parent: null,
    includeIndex: !1,
    item: {},
    sort: sn
  }, n), o = s.parent || nn(e);
  return (ys(e, o) || []).filter(ps(s.includeIndex)).map((r) => yt(r, `${o.path}/${r.path}`, s.item)).sort(s.sort);
}
function Rl(e) {
  const { matched: n, path: t } = e;
  let s;
  return n.reduce((l, r, a) => {
    if (r.meta?.breadcrumb === !1 || r.path === s)
      return l;
    const i = a === n.length - 1, c = vt(r, e) || "Missing Title";
    return l.push({
      title: c,
      to: { path: i ? t : r.path },
      current: i
    }), s = r.path, l;
  }, []);
}
const jl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  $createBreadcrumb: Rl,
  $createSectionMenu: Bl,
  $getParentRoute: nn,
  $getRouteChildren: ys,
  createBaseMenu: Al,
  createMenuItem: yt,
  createSectionMenu: xl,
  flattenMenu: Ol,
  getChildIndexRoute: en,
  getRouteTitle: vt,
  isStaticBaseRoute: vs,
  isStaticRoute: tn,
  nativeLinkRouter: Ul
}, Symbol.toStringTag, { value: "Module" })), At = Nt({});
function eh(e = {}) {
  const {
    title: n,
    titleTemplate: t = "%s",
    useRoute: s = os,
    useHead: o = Cl
  } = e, l = s(), r = l.path;
  if (n !== void 0) {
    ft(() => {
      At[r] = C(n);
    }), Kn(() => {
      delete At[r];
    });
    return;
  }
  const a = _(() => {
    const i = At[l.path], c = vt(l, l), f = i || c;
    return f ? t.replace("%s", f) : "App";
  });
  o({
    title: a
  });
}
const El = { class: "layout-flex-baseline" }, Il = { class: "type-word-break" }, th = {
  __name: "UluOverflowPopover",
  props: {
    /**
     * Default icon for overflow popover trigger
     */
    triggerIcon: String
  },
  setup(e) {
    const { resizing: n, onResizeEnd: t } = bl(), s = U(null), o = U(!1), l = () => {
      Xn(() => {
        const a = s.value;
        o.value = a.offsetWidth < a.scrollWidth;
      });
    }, r = t(l);
    return ht(l), Kn(r), (a, i) => (u(), d("div", El, [
      h("div", {
        class: "type-truncate",
        ref_key: "text",
        ref: s
      }, [
        g(a.$slots, "default")
      ], 512),
      o.value && !C(n) ? (u(), w(mt, {
        key: 0,
        triggerAlt: "Show Full Text",
        size: "large"
      }, {
        trigger: S(() => [
          B(N, {
            icon: e.triggerIcon || "type:ellipsis"
          }, null, 8, ["icon"])
        ]),
        default: S(() => [
          h("div", Il, [
            g(a.$slots, "default")
          ])
        ]),
        _: 3
      })) : p("", !0)
    ]));
  }
}, nh = {
  __name: "UluTab",
  setup(e) {
    return (n, t) => (u(), w(C(to), null, {
      default: S((s) => [
        g(n.$slots, "default", oe(le(s)))
      ]),
      _: 3
    }));
  }
}, sh = /* @__PURE__ */ Object.assign({
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
    return (n, t) => (u(), w(C(no), {
      defaultIndex: e.defaultIndex,
      vertical: e.vertical
    }, {
      default: S((s) => [
        h("div", {
          class: m(["tabs", {
            "tabs--vertical": e.vertical
          }])
        }, [
          g(n.$slots, "default", oe(le(s)))
        ], 2)
      ]),
      _: 3
    }, 8, ["defaultIndex", "vertical"]));
  }
}), oh = {
  __name: "UluTabList",
  setup(e) {
    return (n, t) => (u(), w(C(so), { class: "tabs__tablist" }, {
      default: S(() => [
        g(n.$slots, "default")
      ]),
      _: 3
    }));
  }
}, lh = {
  __name: "UluTabPanel",
  setup(e) {
    return (n, t) => (u(), w(C(oo), null, {
      default: S((s) => [
        g(n.$slots, "default", oe(le(s)))
      ]),
      _: 3
    }));
  }
}, rh = {
  __name: "UluTabPanels",
  setup(e) {
    return (n, t) => (u(), w(C(lo), null, {
      default: S((s) => [
        g(n.$slots, "default", oe(le(s)))
      ]),
      _: 3
    }));
  }
}, Ml = {
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
    const { resolvedModifiers: n } = re({ props: e, baseClass: "button" });
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
      return this.to ? De : this.href ? "a" : "button";
    },
    attrs() {
      const { to: e, href: n, download: t, target: s } = this, o = e ? { to: e } : n ? { href: n } : {};
      return n && (s && (o.target = s), t && (o.download = typeof t == "string" ? t : !0)), o;
    }
  }
}, zl = { key: 1 };
function Fl(e, n, t, s, o, l) {
  const r = D("UluIcon");
  return u(), w(F(l.element), de({
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
      s.resolvedModifiers
    ]]
  }, l.attrs, { "aria-label": l.resolvedAriaLabel }), {
    default: S(() => [
      g(e.$slots, "before"),
      t.icon && (t.iconBefore || t.iconOnly) ? (u(), w(r, {
        key: 0,
        icon: t.icon,
        class: "button__icon"
      }, null, 8, ["icon"])) : p("", !0),
      (e.$slots.default || t.text) && !t.iconOnly ? (u(), d("span", zl, [
        g(e.$slots, "default", {}, () => [
          $(b(t.text), 1)
        ])
      ])) : p("", !0),
      t.icon && !t.iconBefore && !t.iconOnly ? (u(), w(r, {
        key: 2,
        icon: t.icon,
        class: "button__icon"
      }, null, 8, ["icon"])) : p("", !0),
      g(e.$slots, "after")
    ]),
    _: 3
  }, 16, ["class", "aria-label"]);
}
const Pl = /* @__PURE__ */ R(Ml, [["render", Fl]]), Ll = {
  name: "UluAlert",
  components: {
    UluButton: Pl,
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
    const { resolvedModifiers: n } = re({
      props: e,
      baseClass: "callout",
      internal: _(() => ({
        [e.type]: e.type,
        compact: e.compact
      }))
    });
    return { resolvedModifiers: n };
  }
}, Vl = { class: "layout-flex" }, Hl = { class: "type-small" }, Nl = {
  key: 0,
  class: "margin-left-auto align-self-center"
};
function Wl(e, n, t, s, o, l) {
  const r = D("UluIcon");
  return u(), d("div", {
    class: m(["callout", s.resolvedModifiers])
  }, [
    h("div", Vl, [
      B(r, {
        class: m(["type-large margin-right-small", `color-${t.type}`]),
        icon: t.icon || `type:${t.type}`
      }, null, 8, ["class", "icon"]),
      h("div", Hl, [
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
      e.$slots.action ? (u(), d("div", Nl, [
        g(e.$slots, "action")
      ])) : p("", !0)
    ])
  ], 2);
}
const ah = /* @__PURE__ */ R(Ll, [["render", Wl]]), Dl = ["aria-hidden"], Xl = {
  key: 2,
  class: "hidden-visually"
}, ql = {
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
    const n = e, t = _(() => !!(n.to || n.click)), s = _(() => {
      const { click: o, to: l, href: r } = n;
      return o ? "button" : l ? De : r ? "a" : "span";
    });
    return (o, l) => (u(), w(F(s.value), {
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
          }, b(e.text), 9, Dl)) : g(o.$slots, "default", { key: 1 }),
          e.alt ? (u(), d("span", Xl, b(e.alt), 1)) : p("", !0)
        ], 2)
      ]),
      _: 3
    }, 8, ["class", "to", "href", "onClick"]));
  }
}, Gl = { class: "badge-stack" }, ih = {
  __name: "UluBadgeStack",
  props: {
    /**
     * Array of props for each badge
     */
    items: Array
  },
  setup(e) {
    return (n, t) => (u(), d("ul", Gl, [
      (u(!0), d(x, null, O(e.items, (s, o) => (u(), d("li", {
        class: "badge-stack__item",
        key: o
      }, [
        B(ql, de({ ref_for: !0 }, s), null, 16)
      ]))), 128))
    ]));
  }
}, Yl = {
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
    const { resolvedModifiers: n } = re({ props: e, baseClass: "button-verbose" });
    return { resolvedModifiers: n };
  },
  computed: {
    element() {
      return this.to ? De : this.href ? "a" : "button";
    },
    attrs() {
      const { to: e, href: n, download: t, target: s } = this, o = e ? { to: e } : n ? { href: n } : {};
      return n && (s && (o.target = s), t && (o.download = typeof t == "string" ? t : !0)), o;
    }
  }
}, Kl = {
  key: 1,
  class: "button-verbose__body"
};
function Zl(e, n, t, s, o, l) {
  const r = D("UluIcon");
  return u(), w(F(l.element), de({
    class: ["button-verbose", [
      {
        "button-verbose--inline": t.inline,
        "button-verbose--full-width": t.fullWidth
      },
      s.resolvedModifiers
    ]]
  }, l.attrs), {
    default: S(() => [
      e.$slots.title || t.title ? (u(), w(F(t.titleElement), {
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
      e.$slots.default || t.body ? (u(), d("span", Kl, [
        g(e.$slots, "default", {}, () => [
          $(b(t.body), 1)
        ])
      ])) : p("", !0),
      t.icon ? (u(), w(r, {
        key: 2,
        icon: t.icon,
        class: "button-verbose__icon",
        "aria-hidden": "true"
      }, null, 8, ["icon"])) : p("", !0)
    ]),
    _: 3
  }, 16, ["class"]);
}
const ch = /* @__PURE__ */ R(Yl, [["render", Zl]]), Jl = {
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
    const { resolvedModifiers: n } = re({ props: e, baseClass: "callout" });
    return { resolvedModifiers: n };
  }
};
function Ql(e, n, t, s, o, l) {
  return u(), d("div", {
    class: m(["callout", [s.resolvedModifiers, { "full-height": t.fullHeight }]])
  }, [
    g(e.$slots, "default")
  ], 2);
}
const uh = /* @__PURE__ */ R(Jl, [["render", Ql]]), er = { class: "card__body" }, tr = { class: "card__main" }, nr = ["href", "target"], sr = {
  key: 0,
  class: "card__aside"
}, or = ["src", "alt"], lr = {
  key: 1,
  class: "card__footer"
}, dh = {
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
  setup(e, { emit: n }) {
    const t = e, s = n, o = qn();
    t.proxyClick && (t.to || t.href) && console.warn("UluCard: 'proxyClick' is ignored when 'to' or 'href' are present."), (t.titleTo || t.titleHref) && (t.to || t.href) && console.warn("UluCard: 'titleTo'/'titleHref' should not be used with 'to'/'href'.");
    const l = U(null), r = U(null), { resolvedModifiers: a } = re({ props: t, baseClass: "card" }), i = U(null), c = U(!1), f = _(() => t.proxyClick && !t.to && !t.href), y = _(() => f.value && (t.titleTo || t.titleHref)), v = _(() => f.value && !y.value), k = _(() => f.value || null), T = _(() => ({
      selectorPrevent: "input, select, textarea, button, a, [tabindex='-1']",
      mousedownDurationPrevent: 250,
      ...t.proxyClickOptions
    })), M = _(() => f.value ? "pointer" : null), j = _(() => t.to ? De : t.href ? "a" : t.cardElement);
    function ne({ target: G, timeStamp: ee }) {
      if (!k.value) return;
      const { selectorPrevent: K } = T.value;
      c.value = !1, G.closest(K) || (c.value = !0, i.value = ee);
    }
    function $e({ timeStamp: G }) {
      if (!k.value || !c.value) return;
      const { mousedownDurationPrevent: ee } = T.value;
      if (G - i.value < ee) {
        if (y.value)
          r.value?.click();
        else if (v.value) {
          const K = l.value?.querySelector("[data-ulu-card-proxy-target]");
          K ? K.click() : s("proxy-click");
        }
      }
      c.value = !1;
    }
    return (G, ee) => (u(), w(F(j.value), {
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
      style: H({ cursor: M.value }),
      target: e.target,
      to: e.to,
      href: e.href,
      "data-ulu-proxy-click-init": k.value
    }, {
      default: S(() => [
        h("div", er, [
          h("div", tr, [
            e.title || C(o).title ? (u(), w(F(e.titleElement), {
              key: 0,
              class: m(["card__title", e.classes.title])
            }, {
              default: S(() => [
                e.titleTo ? (u(), w(C(De), {
                  key: 0,
                  class: "card__title-link",
                  to: e.titleTo,
                  ref_key: "link",
                  ref: r
                }, {
                  default: S(() => [
                    g(G.$slots, "title", {}, () => [
                      $(b(e.title), 1)
                    ])
                  ]),
                  _: 3
                }, 8, ["to"])) : e.titleHref ? (u(), d("a", {
                  key: 1,
                  class: "card__title-link",
                  href: e.titleHref,
                  target: e.titleTarget,
                  ref_key: "link",
                  ref: r
                }, [
                  g(G.$slots, "title", {}, () => [
                    $(b(e.title), 1)
                  ])
                ], 8, nr)) : g(G.$slots, "title", { key: 2 }, () => [
                  $(b(e.title), 1)
                ])
              ]),
              _: 3
            }, 8, ["class"])) : p("", !0),
            g(G.$slots, "body")
          ]),
          C(o).aside ? (u(), d("div", sr, [
            g(G.$slots, "aside")
          ])) : p("", !0)
        ]),
        C(o).image || e.imageSrc ? (u(), d("div", {
          key: 0,
          class: m(["card__image", [
            { "card__image--icon": e.imageIcon },
            e.classes.image
          ]])
        }, [
          g(G.$slots, "image", {}, () => [
            h("img", {
              src: e.imageSrc,
              alt: e.imageAlt
            }, null, 8, or)
          ])
        ], 2)) : p("", !0),
        C(o).footer ? (u(), d("div", lr, [
          g(G.$slots, "footer")
        ])) : p("", !0)
      ]),
      _: 3
    }, 40, ["class", "style", "target", "to", "href", "data-ulu-proxy-click-init"]));
  }
}, fh = {
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
    const n = e, t = _(() => ({
      inline: n.inline,
      "inline-all": n.inlineAll,
      table: n.table,
      separated: n.separated,
      "separated-first": n.separatedFirst,
      "separated-last": n.separatedLast,
      compact: n.compact
    })), { resolvedModifiers: s } = re({
      props: n,
      internal: t,
      baseClass: "definition-list"
    });
    return (o, l) => (u(), d("dl", {
      class: m(["definition-list", [C(s), e.classes.list]])
    }, [
      (u(!0), d(x, null, O(e.items, (r, a) => (u(), d("div", {
        key: a,
        class: m(e.classes.item)
      }, [
        h("dt", {
          class: m(e.classes.term)
        }, [
          g(o.$slots, "term", {
            item: r,
            index: a
          }, () => [
            $(b(r.term), 1)
          ])
        ], 2),
        h("dd", {
          class: m(e.classes.description)
        }, [
          g(o.$slots, "description", {
            item: r,
            index: a
          }, () => [
            $(b(r.description), 1)
          ])
        ], 2)
      ], 2))), 128))
    ], 2));
  }
}, rr = ["href", "target"], ar = { class: "external-link__text" }, hh = {
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
      h("span", ar, [
        g(n.$slots, "default", {}, () => [
          $(b(e.text), 1)
        ])
      ]),
      B(N, {
        class: "external-link__icon margin-left-small-x display-inline",
        icon: e.icon || "type:externalLink"
      }, null, 8, ["icon"])
    ], 8, rr));
  }
}, mh = {
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
    const n = e, t = _(() => n.ordered || n.forceOrdered ? "ol" : "ul");
    return (s, o) => (u(), w(F(t.value), {
      class: m([
        {
          "list-ordered": e.ordered,
          "list-unordered": e.unordered,
          "list-lines": e.lines,
          "list-compact": e.compact
        },
        e.classes.list
      ]),
      style: H({
        listStyleType: e.listStyleType
      }),
      reversed: e.reversed,
      start: e.start
    }, {
      default: S(() => [
        (u(!0), d(x, null, O(e.items, (l, r) => (u(), d("li", {
          key: r,
          class: m(e.classes.listItem)
        }, [
          g(s.$slots, "default", {
            item: l,
            index: r
          }, () => [
            $(b(l), 1)
          ])
        ], 2))), 128))
      ]),
      _: 3
    }, 8, ["class", "style", "reversed", "start"]));
  }
}, ir = {}, cr = { id: "main-content" };
function ur(e, n) {
  return u(), d("main", cr, [
    g(e.$slots, "default")
  ]);
}
const gh = /* @__PURE__ */ R(ir, [["render", ur]]), dr = { class: "spoke-spinner__spinner" }, vh = {
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
      h("div", dr, [
        (u(), d(x, null, O(12, (s) => h("div", { key: s })), 64))
      ])
    ], 2));
  }
}, fr = ["role", "aria-labelledby"], hr = ["id"], mr = { class: "menu-stack__list" }, gr = { class: "menu-stack__selectable" }, vr = ["type", "id", "name", "value", "checked", "onChange"], yr = ["for"], bs = {
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
  setup(e, { emit: n }) {
    const t = e, s = n, o = _(() => t.legend ? t.legend.toLowerCase().replace(/\s+/g, "-") : `menu-${Math.random().toString(36).substring(7)}`), l = _(() => o.value ? `${o.value}-legend` : null), r = _(() => t.type === "radio" ? "radiogroup" : "group"), a = (f) => `${o.value}-${f.uid}`, i = (f) => t.type === "radio" ? t.modelValue === f.uid : Array.isArray(t.modelValue) ? t.modelValue.includes(f.uid) : t.type === "checkbox" && f.checked || !1, c = (f, y) => {
      if (t.type === "radio")
        s("update:modelValue", f.uid);
      else if (Array.isArray(t.modelValue)) {
        const v = [...t.modelValue], k = v.indexOf(f.uid);
        k > -1 ? v.splice(k, 1) : v.push(f.uid), s("update:modelValue", v);
      } else
        f.checked = y.target.checked;
    };
    return (f, y) => (u(), d("div", {
      class: m(["menu-stack form-theme", {
        "menu-stack--hide-inputs": e.hideInputs,
        "menu-stack--compact": e.compact
      }]),
      role: r.value,
      "aria-labelledby": l.value
    }, [
      e.legend ? (u(), d("div", {
        key: 0,
        id: l.value,
        class: "hidden-visually"
      }, b(e.legend), 9, hr)) : p("", !0),
      h("ul", mr, [
        (u(!0), d(x, null, O(e.options, (v) => (u(), d("li", {
          class: "menu-stack__item",
          key: v.uid
        }, [
          h("div", gr, [
            h("input", {
              type: e.type,
              id: a(v),
              name: o.value,
              value: v.uid,
              checked: i(v),
              onChange: (k) => c(v, k)
            }, null, 40, vr),
            h("label", {
              for: a(v)
            }, [
              g(f.$slots, "default", { option: v }, () => [
                $(b(v?.label || v?.title || v?.text), 1)
              ])
            ], 8, yr)
          ])
        ]))), 128))
      ])
    ], 10, fr));
  }
}, pr = ["href", "download"], br = { class: "margin-left-small-x" }, yh = {
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
    const n = e, t = _(() => typeof window > "u" ? "" : window.URL.createObjectURL(n.file)), s = _(() => {
      const { size: o } = n.file, l = o / 1e6, r = o / 1e3, a = (i) => parseFloat(i.toFixed(2));
      return l > 1 ? `${a(l)}Mb` : r > 1 ? `${a(r)}Kb` : `${a(o)}B`;
    });
    return (o, l) => (u(), d("a", {
      class: "layout-flex-baseline",
      href: t.value,
      download: e.file.name
    }, [
      g(o.$slots, "default", {
        fileName: e.file.name,
        fileSize: s.value
      }, () => [
        B(N, {
          class: "ui-icon",
          icon: e.icon
        }, null, 8, ["icon"]),
        h("span", br, [
          $(b(e.file.name) + " ", 1),
          e.noFileSize ? p("", !0) : (u(), w(ms, {
            key: 0,
            text: s.value,
            small: "",
            outline: ""
          }, null, 8, ["text"]))
        ])
      ])
    ], 8, pr));
  }
}, _r = { class: "site-form__item site-form__item--file" }, wr = ["for"], Sr = ["multiple", "id"], ph = {
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
    })(), s = n, o = t(), l = (r) => {
      s("file-change", r.target.files);
    };
    return (r, a) => (u(), d("div", _r, [
      h("label", {
        class: m({ "hidden-visually": e.labelHidden }),
        for: C(o)
      }, [
        g(r.$slots, "label", {}, () => [
          $(b(e.label), 1)
        ])
      ], 10, wr),
      h("input", de({
        type: "file",
        onChange: l,
        multiple: e.multiple,
        id: C(o)
      }, e.inputAttrs), null, 16, Sr)
    ]));
  }
}, bh = {
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
      e.error || e.warning ? (u(), w(N, {
        key: 0,
        icon: `type:${e.error ? "error" : "warning"}`
      }, null, 8, ["icon"])) : p("", !0),
      g(n.$slots, "default")
    ], 2));
  }
}, kr = { class: "site-form__item site-form__item--select" }, $r = ["for"], Cr = ["id", "value"], Tr = ["value"], _h = {
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
    return (s, o) => (u(), d("div", kr, [
      h("label", {
        class: m({ "hidden-visually": e.labelHidden }),
        for: C(t)
      }, [
        g(s.$slots, "default", {}, () => [
          $(b(e.label), 1)
        ])
      ], 10, $r),
      h("select", {
        id: C(t),
        value: e.modelValue,
        onInput: o[0] || (o[0] = (l) => s.$emit("update:modelValue", l.target.value))
      }, [
        o[1] || (o[1] = h("option", {
          disabled: "",
          value: ""
        }, "Please select one", -1)),
        (u(!0), d(x, null, O(e.options, (l, r) => (u(), d("option", {
          key: r,
          value: l.value
        }, b(l.text), 9, Tr))), 128))
      ], 40, Cr)
    ]));
  }
}, Ar = { class: "site-form__item site-form__item--text" }, Or = ["for"], xr = ["value", "id"], wh = {
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
    return (s, o) => (u(), d("div", Ar, [
      h("label", {
        class: m({ "hidden-visually": e.labelHidden }),
        for: C(t)
      }, [
        g(s.$slots, "default", {}, () => [
          $(b(e.label), 1)
        ])
      ], 10, Or),
      h("input", {
        type: "text",
        value: e.modelValue,
        onInput: o[0] || (o[0] = (l) => s.$emit("update:modelValue", l.target.value)),
        id: C(t)
      }, null, 40, xr)
    ]));
  }
}, Ur = { class: "form-theme search-form type-small" }, Br = { class: "search-form__field" }, Rr = ["placeholder"], jr = {
  class: "search-form__submit button button--primary",
  "aria-label": "Submit Search"
}, Sh = {
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
        }, null, 8, Rr)
      ]),
      h("button", jr, [
        B(N, { icon: "type:search" })
      ])
    ]));
  }
}, kh = {
  __name: "UluAdaptiveLayout",
  setup(e) {
    const n = wl("uluIsMobile");
    return (t, s) => !C(n) || !t.$slots.mobile ? g(t.$slots, "default", { key: 0 }) : g(t.$slots, "mobile", { key: 1 });
  }
}, Er = {
  name: "UluDataGrid",
  async mounted() {
    const e = () => ro(this.$el);
    e(), this.resizeHandler = Wt(e, 200, !1, this), window.addEventListener("resize", this.resizeHandler);
  },
  beforeUnmount() {
    this.resizeHandler && window.removeEventListener("resize", this.resizeHandler);
  }
};
function Ir(e, n, t, s, o, l) {
  return u(), d("div", null, [
    g(e.$slots, "default")
  ]);
}
const $h = /* @__PURE__ */ R(Er, [["render", Ir]]), Mr = {
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
}, zr = {
  key: 0,
  class: "rail__item rail__item--pull"
};
function Fr(e, n, t, s, o, l) {
  const r = D("UluIcon");
  return u(), d("div", {
    class: m(["rail rail--title-rail", {
      "rail--rule": t.rule
    }])
  }, [
    h("div", {
      class: m(["rail__item rail__item--title", t.classes.itemTitle])
    }, [
      (u(), w(F(t.titleElement), {
        class: m(["layout-flex type-max-width-small no-margin", t.classes.title]),
        style: H({ alignItems: t.iconAlign })
      }, {
        default: S(() => [
          t.icon ? (u(), w(r, {
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
    e.$slots.end ? (u(), d("div", zr, [
      g(e.$slots, "end")
    ])) : p("", !0)
  ], 2);
}
const Ch = /* @__PURE__ */ R(Mr, [["render", Fr]]), Pr = {
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
function Lr(e, n, t, s, o, l) {
  const r = D("router-link"), a = D("UluIcon");
  return t.items.length ? (u(), d("nav", {
    key: 0,
    class: m(t.classes.nav),
    "aria-label": "Breadcrumb"
  }, [
    h("ol", {
      class: m(t.classes.list)
    }, [
      (u(!0), d(x, null, O(t.items, (i, c) => (u(), d("li", {
        key: c,
        class: m(t.classes.item)
      }, [
        i.current ? (u(), d("span", {
          key: 1,
          class: m(i.current)
        }, [
          g(e.$slots, "default", { item: i }, () => [
            $(b(i.title), 1)
          ])
        ], 2)) : (u(), w(r, {
          key: 0,
          to: i.to,
          class: m(t.classes.link),
          "aria-current": i.current ? "page" : null
        }, {
          default: S(() => [
            g(e.$slots, "default", { item: i }, () => [
              $(b(i.title), 1)
            ])
          ]),
          _: 2
        }, 1032, ["to", "class", "aria-current"])),
        c < t.items.length - 1 ? g(e.$slots, "separator", { key: 2 }, () => [
          B(a, {
            class: m(t.classes.separator),
            icon: t.separatorIcon || "type:pathSeparator"
          }, null, 8, ["class", "icon"])
        ]) : p("", !0)
      ], 2))), 128))
    ], 2)
  ], 2)) : p("", !0);
}
const Th = /* @__PURE__ */ R(Pr, [["render", Lr]]), Vr = {
  name: "UluNavStrip",
  components: {
    UluMenu: gs
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
function Hr(e, n, t, s, o, l) {
  const r = D("UluMenu");
  return u(), d("nav", {
    class: m(["nav-strip", {
      "nav-strip--rule": t.rule,
      "nav-strip--center": t.center,
      "nav-strip--right": t.right
    }])
  }, [
    B(r, {
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
const Ah = /* @__PURE__ */ R(Vr, [["render", Hr]]), Nr = {}, Wr = {
  class: "site-skip-link hidden-visually-focusable",
  href: "#main-content"
};
function Dr(e, n) {
  return u(), d("a", Wr, " Skip to main content ");
}
const Oh = /* @__PURE__ */ R(Nr, [["render", Dr]]), Xr = {
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
function qr(e, n, t, s, o, l) {
  return t.text != null ? (u(), w(F(t.element), { key: 0 }, {
    default: S(() => [
      $(b(t.text), 1)
    ]),
    _: 1
  })) : p("", !0);
}
const xh = /* @__PURE__ */ R(Xr, [["render", qr]]), Gr = {
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
    return (n, t) => e.unwrapped ? g(n.$slots, "default", { key: 1 }) : (u(), w(F(e.is), { key: 0 }, {
      default: S(() => [
        g(n.$slots, "default")
      ]),
      _: 3
    }));
  }
}, Yr = {}, Kr = { style: { display: "none" } };
function Zr(e, n) {
  return u(), d("span", Kr);
}
const Uh = /* @__PURE__ */ R(Yr, [["render", Zr]]), Jr = {};
function Qr(e, n) {
  const t = D("router-view");
  return u(), w(t);
}
const Bh = /* @__PURE__ */ R(Jr, [["render", Qr]]), ea = {
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
        width: rt(500, 1e3),
        height: rt(500, 1e3)
      } : { width: n, height: t };
    }
  }
}, ta = ["src", "alt"];
function na(e, n, t, s, o, l) {
  return u(), d("img", {
    src: l.src,
    alt: t.alt
  }, null, 8, ta);
}
const Rh = /* @__PURE__ */ R(ea, [["render", na]]), sa = {
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
function oa(e, n, t, s, o, l) {
  return u(!0), d(x, null, O(parseInt(t.amount), (r) => (u(), w(F(t.element), { key: r }, {
    default: S(() => [...n[0] || (n[0] = [
      $(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed semper erat tincidunt tellus vestibulum dictum. Fusce vel augue commodo, egestas diam sed, accumsan leo. Maecenas congue nec nisl et ullamcorper. Maecenas tincidunt, tortor et viverra eleifend, enim leo vestibulum ipsum, quis placerat mi nisi nec ex. Vivamus a justo volutpat, scelerisque elit eget, lacinia ex. Phasellus dapibus sollicitudin tortor, vitae suscipit nunc condimentum ut. Cras suscipit feugiat nibh nec consectetur. Phasellus vitae quam blandit, cursus metus ut, placerat mi. Sed tempor lacus non est interdum imperdiet nec quis metus. Praesent vel eleifend diam. Donec tincidunt eget purus sed posuere. ", -1)
    ])]),
    _: 2
  }, 1024))), 128);
}
const jh = /* @__PURE__ */ R(sa, [["render", oa]]), la = {
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
function ra(e, n, t, s, o, l) {
  return l.title ? (u(), d("p", {
    key: 0,
    tabindex: "-1",
    class: "hidden-visually",
    ref: "el"
  }, b(l.title), 513)) : p("", !0);
}
const Eh = /* @__PURE__ */ R(la, [["render", ra]]), Ih = {
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
    const n = {
      types: {
        image: ({ value: t }) => Gs("img", {
          src: `${t.imageUrl}?max-w=1100&fit=crop`,
          alt: t.imageAlt
        })
      }
    };
    return (t, s) => e.content?.length ? (u(), w(Gr, {
      key: 0,
      class: "wysiwyg",
      unwrapped: e.noWrapper
    }, {
      default: S(() => [
        B(C(ao), {
          value: e.content,
          components: n
        }, null, 8, ["value"])
      ]),
      _: 1
    }, 8, ["unwrapped"])) : p("", !0);
  }
}, aa = {
  name: "AnimateNumber",
  props: {
    /**
     * The target number to animate to.
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
function ia(e, n, t, s, o, l) {
  return u(), d("span", null, [
    g(e.$slots, "default", { currentValue: o.currentValue }, () => [
      $(b(o.currentValue), 1)
    ])
  ]);
}
const Mh = /* @__PURE__ */ R(aa, [["render", ia]]), ca = {
  key: 0,
  class: "progress-bar__header"
}, ua = {
  key: 1,
  class: "progress-bar__value progress-bar__value--amount"
}, da = {
  key: 2,
  class: "progress-bar__icon"
}, fa = { class: "progress-bar__track" }, ha = {
  key: 1,
  class: "progress-bar__values"
}, ma = { class: "progress-bar__value progress-bar__value--amount" }, ga = {
  key: 0,
  class: "progress-bar__value progress-bar__value--deficit"
}, va = { class: "progress-bar__value progress-bar__value--total" }, zh = {
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
    const n = e, t = (r, a) => `${a === 0 ? 0 : r / a * 100}%`, s = _(() => n.indeterminate ? null : t(n.amount, n.total)), o = _(() => t(n.deficit, n.total)), l = _(() => ({
      "progress-bar": !0,
      "progress-bar--small": n.small,
      "progress-bar--positive": n.positive,
      "progress-bar--negative": n.negative,
      "progress-bar--loader": n.loader,
      "progress-bar--indeterminate": n.indeterminate,
      "type-small": n.small
      // From original component, seems to control font size
    }));
    return (r, a) => (u(), d("div", {
      class: m(l.value)
    }, [
      e.label || r.$slots.label || r.$slots.icon || e.amountInHeader ? (u(), d("div", ca, [
        e.label ? (u(), w(F(e.labelElement), {
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
        e.amountInHeader ? (u(), d("div", ua, [
          a[0] || (a[0] = h("strong", { class: "hidden-visually" }, "Amount:", -1)),
          g(r.$slots, "valueAmount", { value: e.amount }, () => [
            $(b(e.formatValue(e.amount, "amount")), 1)
          ])
        ])) : p("", !0),
        r.$slots.icon ? (u(), d("div", da, [
          g(r.$slots, "icon")
        ])) : p("", !0)
      ])) : p("", !0),
      h("div", fa, [
        h("div", {
          class: "progress-bar__bar",
          style: H({ width: s.value })
        }, null, 4),
        e.deficit > 0 ? (u(), d("div", {
          key: 0,
          class: "progress-bar__bar--deficit",
          style: H({ width: o.value })
        }, null, 4)) : p("", !0)
      ]),
      !e.noValues && !e.amountInHeader && !e.loader && !e.indeterminate ? (u(), d("div", ha, [
        h("div", ma, [
          a[1] || (a[1] = h("strong", { class: "hidden-visually" }, "Amount:", -1)),
          g(r.$slots, "valueAmount", { value: e.amount }, () => [
            $(b(e.formatValue(e.amount, "amount")), 1)
          ])
        ]),
        e.deficit > 0 ? (u(), d("div", ga, [
          a[2] || (a[2] = h("strong", { class: "hidden-visually" }, "Deficit: ", -1)),
          g(r.$slots, "valueDeficit", { value: e.deficit }, () => [
            $("-" + b(e.formatValue(e.deficit, "deficit")), 1)
          ])
        ])) : p("", !0),
        h("div", va, [
          a[3] || (a[3] = h("strong", { class: "hidden-visually" }, "Total:", -1)),
          g(r.$slots, "valueTotal", { value: e.total }, () => [
            $(b(e.formatValue(e.total, "total")), 1)
          ])
        ])
      ])) : p("", !0)
    ], 2));
  }
}, ya = { class: "hidden-visually" }, pa = { class: "progress-circle__chart" }, ba = {
  class: "progress-circle__chart-svg",
  viewBox: "0 0 32 32"
}, _a = {
  key: 0,
  class: "progress-circle__chart-value"
}, wa = {
  key: 0,
  class: "progress-circle__value type-small-x"
}, Fh = {
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
    const n = e, t = U(null), s = (i) => i === 100 ? 101 : i, o = (i = 0) => {
      if (!t.value || !t.value.animate) return;
      const c = { strokeDasharray: [`${i} 100`, l.value] };
      t.value.animate(c, { duration: n.duration, easing: n.easing, fill: "forwards" });
    };
    We(() => n.percentage, (i, c) => {
      i !== c && o(s(c));
    });
    const l = _(() => `${s(n.percentage)} 100`), r = _(() => n.outside || n.outsideBelow || n.small), a = _(() => {
      const i = {
        "progress-circle": !0,
        "progress-circle--small": n.small,
        "progress-circle--pie": n.pieStyle,
        "progress-circle--outside": r.value,
        "progress-circle--outside-below": n.outsideBelow,
        "progress-circle--no-mask": n.noMask
      };
      return n.status && (i[`progress-circle--${n.status}`] = !0), i;
    });
    return ht(() => {
      o();
    }), (i, c) => (u(), d("div", {
      class: m(a.value)
    }, [
      h("strong", ya, b(e.label), 1),
      h("div", pa, [
        (u(), d("svg", ba, [
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
            style: H({ strokeDasharray: l.value })
          }, null, 4),
          c[1] || (c[1] = h("circle", {
            class: "progress-circle__chart-mask",
            cx: "16",
            cy: "16"
          }, null, -1))
        ])),
        !r.value && !e.noValue ? (u(), d("strong", _a, [
          g(i.$slots, "value", { value: e.percentage }, () => [
            $(b(e.formatValue(e.percentage)), 1)
          ])
        ])) : p("", !0)
      ]),
      r.value && !e.noValue ? (u(), d("strong", wa, [
        g(i.$slots, "value", { value: e.percentage }, () => [
          $(b(e.formatValue(e.percentage)), 1)
        ])
      ])) : p("", !0)
    ], 2));
  }
};
function Sa(e) {
  const n = /* @__PURE__ */ new Set();
  for (const t of e)
    for (const s of t)
      n.add(s);
  return n;
}
function Ft(e) {
  if (!e || e.length === 0) return /* @__PURE__ */ new Set();
  const n = e.sort((s, o) => s.size - o.size), t = new Set(n[0]);
  for (let s = 1; s < n.length; s++) {
    for (const o of t)
      n[s].has(o) || t.delete(o);
    if (t.size === 0) break;
  }
  return t;
}
function Ot(e, n, t) {
  if (!e || e.length === 0)
    return t;
  const s = e.map((o) => {
    const l = o.children.map((r) => {
      const a = `${o.uid}:${r.uid}`;
      return n.get(a) || /* @__PURE__ */ new Set();
    });
    return o.match === "all" ? Ft(l) : Sa(l);
  });
  return Ft(s);
}
function ka(e, n) {
  return !n || !Array.isArray(n) ? [] : n.map((t) => {
    const s = /* @__PURE__ */ new Set(), o = t.getValue || ((a) => a[t.uid]);
    e.forEach((a) => {
      const i = o(a);
      Array.isArray(i) ? i.forEach((c) => c && s.add(c)) : i && s.add(i);
    });
    const l = t.getLabel || ((a) => a), r = [...s].map((a) => ({
      uid: a,
      label: l(a),
      selected: !1
    }));
    return r.sort((a, i) => String(a.label).localeCompare(String(i.label))), {
      ...t,
      children: r
    };
  });
}
function Ph(e, n = {}) {
  const t = (A, E) => {
    const P = A[E];
    return P === null || typeof P > "u" ? [] : Array.isArray(P) ? P : [P];
  }, {
    initialFacets: s,
    facetFields: o,
    initialSearchValue: l = "",
    initialSortType: r = "az",
    noDefaultSorts: a = !1,
    extraSortTypes: i = {},
    searchOptions: c = {},
    getItemFacet: f = t,
    getSortValue: y = (A) => A.title || A.label || "",
    countMode: v = "none"
    // 'none', 'simple', 'intuitive'
  } = n, k = (A) => A.sort((E, P) => {
    const I = y(E), V = y(P);
    return I && V ? String(I).localeCompare(String(V)) : I ? -1 : V ? 1 : 0;
  }), T = {
    az: { text: "A-Z", sort: k },
    za: { text: "Z-A", sort: (A) => k(A).reverse() }
  };
  function M(A) {
    return (A || []).map((E) => ({
      ...E,
      open: E.open || !1,
      children: E.children.map((P) => ({
        ...P,
        selected: P.selected || !1
      })),
      selectedCount: 0
    }));
  }
  const j = U([]), ne = U(l), $e = U(r), G = _(() => !o || !e.value?.length ? null : ka(e.value, o)), ee = _(() => ({
    ...a ? {} : T,
    ...i
  })), K = _(() => {
    const A = /* @__PURE__ */ new Map(), E = te.value;
    if (!E || !o) return A;
    const P = new Map(o.map((I) => {
      const V = I.getValue || ((W) => W[I.uid]);
      return [I.uid, V];
    }));
    for (let I = 0; I < E.length; I++) {
      const V = E[I];
      for (const W of o) {
        const q = P.get(W.uid)(V), J = Array.isArray(q) ? q : q ? [q] : [];
        for (const Qe of J) {
          const ze = `${W.uid}:${Qe}`;
          A.has(ze) || A.set(ze, /* @__PURE__ */ new Set()), A.get(ze).add(I);
        }
      }
    }
    return A;
  }), St = _(() => ({
    shouldSort: !0,
    keys: ["title", "label", "description", "author"],
    ...c
  })), te = _(() => ne.value?.length ? new co(e.value, St.value).search(ne.value).map((E) => E.item) : e.value), he = _(() => {
    const A = [];
    return j.value.forEach((E) => {
      const P = E.children.filter((I) => I.selected);
      P.length > 0 && A.push({ ...E, children: P });
    }), A;
  }), X = _(() => {
    if (!he.value.length)
      return te.value;
    const A = K.value;
    if (A.size === 0 && te.value.length > 0 && o?.length > 0)
      return [];
    const E = new Set(te.value.map((V, W) => W)), P = Ot(he.value, A, E), I = [];
    for (const V of P)
      I.push(te.value[V]);
    return I;
  }), me = _(() => {
    const A = ee.value[$e.value]?.sort;
    return typeof A != "function" ? X.value : A([...X.value]);
  });
  function Ce() {
    j.value.forEach((A) => {
      A.children && A.children.forEach((E) => E.selected = !1), A.selectedCount = 0;
    });
  }
  function an({ groupUid: A, facetUid: E, selected: P }) {
    const I = j.value.find((V) => V.uid === A);
    if (I) {
      !I.multiple && P && I.children.forEach((W) => {
        W.uid !== E && (W.selected = !1);
      });
      const V = I.children.find((W) => W.uid === E);
      V && (V.selected = P), I.selectedCount = I.children.filter((W) => W.selected).length;
    }
  }
  return We(G, (A) => {
    const E = M(s || A);
    E.forEach((P) => {
      P.selectedCount = P.children.filter((I) => I.selected).length;
    }), j.value = E;
  }, { immediate: !0 }), We([he, te], ([A, E], [P, I]) => {
    if (!(v === "none" || !j.value.length) && !(A === P && E === I)) {
      if (v === "simple")
        j.value.forEach((V) => {
          const W = A.filter((q) => q.uid !== V.uid), Me = getFilteredItems(E, W);
          V.children.forEach((q) => {
            q.count = Me.filter((J) => f(J, V.uid).includes(q.uid)).length;
          });
        });
      else if (v === "intuitive") {
        const V = K.value;
        if (V.size === 0 && te.value.length > 0 && o?.length > 0)
          return;
        const W = new Set(te.value.map((q, J) => J)), Me = Ot(A, V, W);
        j.value.forEach((q) => {
          q.children.forEach((J) => {
            const Qe = `${q.uid}:${J.uid}`, ze = V.get(Qe) || /* @__PURE__ */ new Set();
            if (J.selected)
              if (q.multiple) {
                const Te = Ft([Me, ze]);
                J.count = Te.size;
              } else
                J.count = Me.size;
            else {
              const Te = [];
              for (const et of A)
                Te.push({ ...et, children: [...et.children] });
              let Fe = Te.find((et) => et.uid === q.uid);
              Fe || (Fe = { ...q, children: [] }, Te.push(Fe)), q.multiple ? Fe.children.push(J) : Fe.children = [J];
              const Fs = Ot(Te, V, W);
              J.count = Fs.size;
            }
          });
        });
      }
    }
  }, { deep: !0, immediate: !0 }), {
    facets: j,
    searchValue: ne,
    selectedSort: $e,
    sortTypes: ee,
    displayItems: me,
    selectedFacets: he,
    clearFilters: Ce,
    handleFacetChange: an
  };
}
const $a = ["onClick"], Lh = {
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
  setup(e, { emit: n }) {
    const t = e, s = n, o = _(() => {
      const a = [];
      return t.selectedFacets.forEach((i) => {
        i.children.forEach((c) => {
          a.push({
            ...c,
            groupUid: i.uid
          });
        });
      }), a;
    });
    function l(a) {
      s("facet-change", {
        groupUid: a.groupUid,
        facetUid: a.uid,
        selected: !1
      });
    }
    function r() {
      s("clear-filters");
    }
    return (a, i) => o.value.length ? (u(), d("div", {
      key: 0,
      class: m(["facets-active", e.classes.container])
    }, [
      (u(), w(F(e.labelElement), {
        class: m(["facets-active__label", e.classes.label])
      }, {
        default: S(() => [
          g(a.$slots, "label", {}, () => [
            i[0] || (i[0] = $(" Active Filters: ", -1))
          ])
        ]),
        _: 3
      }, 8, ["class"])),
      h("ul", {
        class: m(["facets-active__list", e.classes.list])
      }, [
        (u(!0), d(x, null, O(o.value, (c) => (u(), d("li", {
          class: m(["facets-active__item", e.classes.item]),
          key: `${c.groupUid}-${c.uid}`
        }, [
          h("button", {
            class: m(e.classes.filterButton),
            icon: "type:remove",
            onClick: (f) => l(c)
          }, [
            h("span", {
              class: m(e.classes.filterButtonText)
            }, [
              i[1] || (i[1] = h("span", { class: "hidden-visually" }, "Remove Active Filter:", -1)),
              $(" " + b(c.label), 1)
            ], 2),
            h("span", {
              class: m(e.classes.filterButtonIcon)
            }, [
              B(N, { icon: e.removeIcon }, null, 8, ["icon"])
            ], 2)
          ], 10, $a)
        ], 2))), 128))
      ], 2),
      h("button", {
        onClick: r,
        class: m(e.classes.clearButton)
      }, "Clear All", 2)
    ], 2)) : p("", !0);
  }
}, Ca = { key: 0 }, ct = {
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
  setup(e, { emit: n }) {
    const t = e, s = n, o = _(() => t.type === "radio" ? [{ label: `All ${t.groupName}s`, uid: "" }, ...t.children] : t.children);
    function l(r) {
      if (t.type === "radio") {
        const a = r;
        t.children.forEach((i) => {
          const c = i.uid === a;
          i.selected !== c && s("facet-change", {
            groupUid: t.groupUid,
            facetUid: i.uid,
            selected: c
          });
        });
      } else {
        const a = new Set(r);
        t.children.forEach((i) => {
          const c = a.has(i.uid);
          i.selected !== c && s("facet-change", {
            groupUid: t.groupUid,
            facetUid: i.uid,
            selected: c
          });
        });
      }
    }
    return (r, a) => (u(), w(bs, {
      class: "facets-list",
      legend: e.groupUid,
      type: e.type,
      options: o.value,
      compact: e.compact,
      "model-value": e.modelValue,
      "onUpdate:modelValue": l
    }, {
      default: S(({ option: i }) => [
        $(b(i.label) + " ", 1),
        i.count !== void 0 ? (u(), d("span", Ca, "(" + b(i.count) + ")", 1)) : p("", !0)
      ]),
      _: 1
    }, 8, ["legend", "type", "options", "compact", "model-value"]));
  }
}, Ta = { class: "facets-filters" }, Vh = {
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
  setup(e, { emit: n }) {
    const t = n, s = (o) => o.multiple ? o.children.filter((l) => l.selected).map((l) => l.uid) : o.children.find((l) => l.selected)?.uid || "";
    return (o, l) => (u(), d("div", Ta, [
      (u(!0), d(x, null, O(e.facets, (r) => (u(), w(Mt, {
        key: r.uid,
        classes: {
          container: ["facets-filters__group", e.classes.group],
          containerOpen: ["facets-filters__group--open", e.classes.groupOpen],
          containerClosed: ["facets-filters__group--closed", e.classes.groupClosed],
          trigger: ["facets-filters__group-trigger", e.classes.groupTrigger],
          content: ["facets-filters__group-content", e.classes.groupContent]
        },
        startOpen: r.open
      }, {
        trigger: S(({ isOpen: a }) => [
          g(o.$slots, "groupTrigger", {
            group: r,
            isOpen: a
          }, () => [
            $(b(r.name), 1)
          ])
        ]),
        default: S(() => [
          B(ct, {
            children: r.children.slice(0, e.maxVisible),
            groupUid: r.uid,
            groupName: r.name,
            type: r.multiple ? "checkbox" : "radio",
            compact: e.compact,
            "model-value": s(r),
            onFacetChange: l[0] || (l[0] = (a) => t("facet-change", a))
          }, null, 8, ["children", "groupUid", "groupName", "type", "compact", "model-value"]),
          r.children.length > e.maxVisible ? (u(), w(Mt, {
            key: 0,
            class: m(["facets-filters__more-facets", e.classes.moreFacets])
          }, {
            trigger: S(({ isOpen: a }) => [
              $(b(a ? "View Less" : "Show More"), 1)
            ]),
            default: S(() => [
              B(ct, {
                children: r.children.slice(e.maxVisible),
                groupUid: r.uid,
                groupName: r.name,
                type: r.multiple ? "checkbox" : "radio",
                compact: e.compact,
                "model-value": s(r),
                onFacetChange: l[1] || (l[1] = (a) => t("facet-change", a))
              }, null, 8, ["children", "groupUid", "groupName", "type", "compact", "model-value"])
            ]),
            _: 2
          }, 1032, ["class"])) : p("", !0)
        ]),
        _: 2
      }, 1032, ["classes", "startOpen"]))), 128))
    ]));
  }
}, Aa = { class: "facets-filters" }, Hh = {
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
  setup(e, { emit: n }) {
    const t = n, s = (o) => o.multiple ? o.children.filter((l) => l.selected).map((l) => l.uid) : o.children.find((l) => l.selected)?.uid || "";
    return (o, l) => (u(), d("div", Aa, [
      (u(!0), d(x, null, O(e.facets, (r) => (u(), w(pn, {
        key: r.uid,
        modifiers: e.accordionModifiers,
        startOpen: r.open
      }, {
        trigger: S(({ isOpen: a }) => [
          g(o.$slots, "groupTrigger", {
            group: r,
            isOpen: a
          }, () => [
            $(b(r.name), 1)
          ])
        ]),
        default: S(() => [
          B(ct, {
            children: r.children.slice(0, e.maxVisible),
            groupUid: r.uid,
            groupName: r.name,
            type: r.multiple ? "checkbox" : "radio",
            compact: e.compact,
            "model-value": s(r),
            onFacetChange: l[0] || (l[0] = (a) => t("facet-change", a))
          }, null, 8, ["children", "groupUid", "groupName", "type", "compact", "model-value"]),
          r.children.length > e.maxVisible ? (u(), w(pn, {
            key: 0,
            class: m(["facets-filters__more-facets", e.classes.moreFacets]),
            modifiers: e.accordionModifiers
          }, {
            trigger: S(({ isOpen: a }) => [
              $(b(a ? "View Less" : "Show More"), 1)
            ]),
            default: S(() => [
              B(ct, {
                children: r.children.slice(e.maxVisible),
                groupUid: r.uid,
                groupName: r.name,
                type: r.multiple ? "checkbox" : "radio",
                compact: e.compact,
                "model-value": s(r),
                onFacetChange: l[1] || (l[1] = (a) => t("facet-change", a))
              }, null, 8, ["children", "groupUid", "groupName", "type", "compact", "model-value"])
            ]),
            _: 2
          }, 1032, ["class", "modifiers"])) : p("", !0)
        ]),
        _: 2
      }, 1032, ["modifiers", "startOpen"]))), 128))
    ]));
  }
}, Nh = {
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
    const t = n, s = (a) => a.multiple ? a.children : [{ label: `All ${a.name}s`, uid: "" }, ...a.children], o = (a) => a.multiple ? a.children.filter((i) => i.selected).map((i) => i.uid) : a.children.find((i) => i.selected)?.uid || "", l = (a) => {
      const i = a.children.filter((f) => f.selected), c = i.length;
      return c === 0 ? "All" : a.multiple ? c === 1 ? i[0].label : `${c} selected` : i[0].label;
    };
    function r(a, i, c) {
      if (a.multiple) {
        const f = new Set(i);
        a.children.forEach((y) => {
          const v = f.has(y.uid);
          y.selected !== v && t("facet-change", {
            groupUid: a.uid,
            facetUid: y.uid,
            selected: v
          });
        });
      } else {
        const f = i;
        a.children.forEach((y) => {
          const v = y.uid === f;
          y.selected !== v && t("facet-change", {
            groupUid: a.uid,
            facetUid: y.uid,
            selected: v
          });
        }), c();
      }
    }
    return (a, i) => (u(), d("div", {
      class: m(e.classes.container)
    }, [
      (u(!0), d(x, null, O(e.facets, (c) => (u(), d("div", {
        key: c.uid,
        class: m(e.classes.group)
      }, [
        B(mt, {
          classes: {
            trigger: e.classes.trigger,
            content: e.classes.content
          }
        }, {
          trigger: S(() => [
            g(a.$slots, "trigger", {
              group: c,
              label: l(c)
            }, () => [
              h("span", null, [
                $(b(c.name) + ": ", 1),
                h("strong", null, b(l(c)), 1)
              ])
            ]),
            B(N, {
              class: m(e.classes.triggerIcon),
              icon: "fas fa-chevron-down"
            }, null, 8, ["class"])
          ]),
          default: S(({ close: f }) => [
            B(bs, {
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
}, Oa = { class: "facets-dropdown-filters" }, xa = ["for"], Ua = ["id", "onChange"], Ba = { value: "" }, Ra = ["value", "selected"], Wh = {
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
    function s(o, l) {
      const r = l.target.value;
      o.children.find((i) => i.selected)?.uid !== r && o.children.forEach((i) => {
        const c = i.uid === r;
        i.selected !== c && t("facet-change", {
          groupUid: o.uid,
          facetUid: i.uid,
          selected: c
        });
      });
    }
    return (o, l) => (u(), d("div", Oa, [
      (u(!0), d(x, null, O(e.facets, (r) => (u(), d("div", {
        class: "facets-dropdown-filters__group",
        key: r.uid
      }, [
        h("label", {
          for: `facet-dropdown-${r.uid}`,
          class: "facets-dropdown-filters__label"
        }, b(r.name), 9, xa),
        h("select", {
          id: `facet-dropdown-${r.uid}`,
          class: "facets-dropdown-filters__select",
          onChange: (a) => s(r, a)
        }, [
          h("option", Ba, "All " + b(r.name) + "s", 1),
          (u(!0), d(x, null, O(r.children, (a) => (u(), d("option", {
            key: a.uid,
            value: a.uid,
            selected: a.selected
          }, b(a.label), 9, Ra))), 128))
        ], 40, Ua)
      ]))), 128))
    ]));
  }
}, ja = { class: "facets-header-layout" }, Ea = { class: "facets-header-layout__header" }, Ia = { class: "facets-header-layout__main" }, Dh = {
  __name: "UluFacetsHeaderLayout",
  setup(e) {
    return (n, t) => (u(), d("div", ja, [
      h("div", Ea, [
        g(n.$slots, "header")
      ]),
      h("div", Ia, [
        g(n.$slots, "main")
      ])
    ]));
  }
}, Ma = { class: "facets-results" }, za = {
  key: 1,
  class: "facets-results__empty"
}, Xh = {
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
    return (n, t) => (u(), d("div", Ma, [
      e.items.length ? (u(), w(Gn, {
        key: 0,
        tag: e.tag,
        name: e.transitionName,
        class: m(["facets-results__list", e.classes.list])
      }, {
        default: S(() => [
          (u(!0), d(x, null, O(e.items, (s, o) => (u(), d("li", {
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
      }, 8, ["tag", "name", "class"])) : (u(), d("div", za, [
        g(n.$slots, "empty", {}, () => [
          t[0] || (t[0] = h("p", null, "No matching items found.", -1))
        ])
      ]))
    ]));
  }
}, Fa = { class: "facets-search" }, Pa = ["placeholder"], qh = {
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
    const l = `facet-view-keyword-${++o}`, r = _({
      get() {
        return t.modelValue;
      },
      set(a) {
        s("update:modelValue", a);
      }
    });
    return (a, i) => (u(), d("div", Fa, [
      h("label", {
        class: m(e.classes.searchLabel),
        for: l
      }, [...i[1] || (i[1] = [
        h("strong", null, "Search", -1)
      ])], 2),
      xe(h("input", {
        id: l,
        class: m(e.classes.searchInput),
        "onUpdate:modelValue": i[0] || (i[0] = (c) => r.value = c),
        type: "text",
        placeholder: e.placeholder
      }, null, 10, Pa), [
        [Ys, r.value]
      ])
    ]));
  }
}, La = { class: "facets-sidebar__header" }, Va = { class: "facets-sidebar__mobile-controls" }, Ha = { class: "facets-sidebar__body" }, Na = { class: "facets-sidebar__main" }, Gh = {
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
    const n = U(!1), t = dt("uluIsMobile"), s = U(null), o = U(null), l = _(() => t.value ? o.value : s.value);
    return (r, a) => (u(), d("div", {
      class: m(["facets-sidebar", { "facets-sidebar--filters-hidden": C(t) }])
    }, [
      h("div", La, [
        g(r.$slots, "header")
      ]),
      xe(h("div", Va, [
        h("button", {
          class: m(e.classes.mobileButton),
          onClick: a[0] || (a[0] = (i) => n.value = !0)
        }, b(e.mobileButtonText), 3)
      ], 512), [
        [Rt, C(t)]
      ]),
      h("div", Ha, [
        xe(h("div", {
          class: "facets-sidebar__sidebar",
          ref_key: "desktopTarget",
          ref: s
        }, null, 512), [
          [Rt, !C(t)]
        ]),
        h("div", Na, [
          g(r.$slots, "main")
        ])
      ]),
      C(t) ? (u(), w(rs, {
        key: 0,
        modelValue: n.value,
        "onUpdate:modelValue": a[1] || (a[1] = (i) => n.value = i),
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
      }, 8, ["modelValue"])) : p("", !0),
      l.value ? (u(), w(ut, {
        key: 1,
        to: l.value
      }, [
        g(r.$slots, "sidebar")
      ], 8, ["to"])) : p("", !0)
    ], 2));
  }
}, Wa = ["for"], Da = ["value", "id"], Xa = ["value"], Yh = {
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
    const s = n, o = U(`ulu-facet-sort-${++t}`);
    return (l, r) => (u(), d("div", {
      class: m(["facets-sort", e.classes.sortForm])
    }, [
      h("label", {
        for: o.value,
        class: m(e.classes.sortFormLabel)
      }, [
        g(l.$slots, "default", {}, () => [
          r[1] || (r[1] = $("Sort:", -1))
        ])
      ], 10, Wa),
      h("select", {
        value: e.modelValue,
        onChange: r[0] || (r[0] = (a) => s("update:modelValue", a.target.value)),
        id: o.value,
        class: m(e.classes.sortFormSelect)
      }, [
        (u(!0), d(x, null, O(e.sortTypes, (a, i) => (u(), d("option", {
          value: i,
          key: i
        }, b(a.text), 9, Xa))), 128))
      ], 42, Da)
    ], 2));
  }
}, _s = Symbol(), ws = Symbol(), pt = Symbol(), qa = {
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
      [_s]: (e) => {
        const { titleId: n, title: t } = e, { element: s } = e.$refs;
        this.sections.push({
          instance: e,
          titleId: n,
          title: t,
          element: s,
          active: !1
        }), this.update();
      },
      [ws]: (e) => {
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
      const l = (r) => {
        r.forEach(({ target: a, isIntersecting: i }) => {
          const c = this.getSectionIndex(a), f = a.offsetTop, y = n[c], v = c === 0 && o > f, k = c === n.length - 1 && o < f;
          y && this.$nextTick(() => {
            i ? (t(y), y.active = !0) : (v && !s || k && y.active) && t(), this.$emit("section-change", {
              section: y,
              sections: n,
              active: i
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
}, Ga = { class: "scroll-anchors" };
function Ya(e, n, t, s, o, l) {
  return u(), d("div", Ga, [
    g(e.$slots, "default")
  ]);
}
const Kh = /* @__PURE__ */ R(qa, [["render", Ya]]), Ka = {
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
}, Za = ["href"];
function Ja(e, n, t, s, o, l) {
  return l.sections.length ? (u(), w(F(t.element), {
    key: 0,
    class: "scroll-anchors__nav"
  }, {
    default: S(() => [
      h("ul", null, [
        (u(!0), d(x, null, O(l.sections, (r, a) => (u(), d("li", {
          key: a,
          class: m({ "is-active": r.active })
        }, [
          h("a", {
            class: m({ "is-active": r.active }),
            href: `#${r.titleId}`
          }, b(r.title), 11, Za)
        ], 2))), 128))
      ])
    ]),
    _: 1
  })) : p("", !0);
}
const Zh = /* @__PURE__ */ R(Ka, [["render", Ja]]), Qa = {
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
      const s = e.findIndex((a) => a.active);
      if (s === -1)
        return !1;
      const o = this.linkRefs[s], { offsetTop: l, offsetHeight: r } = o;
      return {
        y: l,
        height: r,
        initial: this.inidica
      };
    }
  },
  watch: {
    indicatorStyles(e) {
      e && !this.indicatorAnimReady && ls(() => {
        this.indicatorAnimReady = !0;
      });
    }
  },
  methods: {
    addLinkRef(e, n) {
      this.linkRefs[e] = n;
    }
  }
}, ei = { class: "scroll-anchors__rail" }, ti = ["href"];
function ni(e, n, t, s, o, l) {
  return l.sections.length ? (u(), w(F(t.element), {
    key: 0,
    class: "scroll-anchors__nav scroll-anchors__nav--animated"
  }, {
    default: S(() => [
      h("ul", ei, [
        (u(!0), d(x, null, O(l.sections, (r, a) => (u(), d("li", {
          key: a,
          class: m({ "is-active": r.active })
        }, [
          h("a", {
            class: m({ "is-active": r.active }),
            ref_for: !0,
            ref: (i) => l.addLinkRef(a, i),
            href: `#${r.titleId}`
          }, b(r.title), 11, ti)
        ], 2))), 128))
      ]),
      h("div", {
        class: m(["scroll-anchors__indicator", {
          "scroll-anchors__indicator--can-transition": o.indicatorAnimReady
        }]),
        ref: "indicator",
        style: H({
          opacity: l.indicatorStyles ? "1" : "0",
          transform: `translateY(${l.indicatorStyles.y}px)`,
          height: `${l.indicatorStyles.height}px`
        })
      }, null, 6)
    ]),
    _: 1
  })) : p("", !0);
}
const Jh = /* @__PURE__ */ R(Qa, [["render", ni]]), si = {
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
    register: { from: _s },
    unregister: { from: ws },
    sections: { from: pt, default: () => _(() => []) }
  },
  data() {
    const { anchorId: e, title: n } = this;
    return {
      titleId: e || `sas-title-${uo(n)}`
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
function oi(e, n, t, s, o, l) {
  return u(), d("div", {
    class: m([t.wrapperClass, { [t.activeClass]: t.activeClass && l.section?.active }]),
    ref: "element"
  }, [
    (u(), w(F(t.titleElement), {
      class: m(t.titleClass),
      id: o.titleId
    }, {
      default: S(() => [
        $(b(t.title), 1)
      ]),
      _: 1
    }, 8, ["class", "id"])),
    g(e.$slots, "default", { section: l.section })
  ], 2);
}
const Qh = /* @__PURE__ */ R(si, [["render", oi]]), li = {
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
}, em = {
  __name: "UluShowSkeleton",
  props: {
    /**
     * If true will show whatever is passed to slot, else skeleton text
     */
    when: Boolean
  },
  setup(e) {
    return (n, t) => e.when ? (u(), w(li, {
      key: 1,
      inline: ""
    })) : g(n.$slots, "default", { key: 0 });
  }
}, tm = {
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
    const n = e, t = _(() => fo(n.lines, () => {
      const o = rt(70, 100);
      let l = 0;
      const r = () => {
        const c = o - l, f = rt(15, c);
        return l += f, f;
      }, a = [];
      for (; l < o - 15; )
        a.push(r());
      const i = () => a.reduce((c, f) => c + f, 0);
      for (; i() >= o && a.pop(); )
        ;
      return a.map((c) => ({ width: c, alt: Math.random() < 0.5 }));
    }));
    return (s, o) => (u(), d("div", null, [
      (u(!0), d(x, null, O(t.value, (l, r) => (u(), d("div", { key: r }, [
        (u(!0), d(x, null, O(l, (a) => (u(), d("span", {
          key: a,
          class: m(["skeleton skeleton--text skeleton--inline", { "skeleton--background-alt": a.alt }]),
          style: H({ width: `${a.width}%` })
        }, null, 6))), 128))
      ]))), 128))
    ]));
  }
}, ri = { class: "skeleton skeleton-block--media" }, nm = {
  __name: "UluSkeletonMedia",
  setup(e) {
    return (n, t) => (u(), d("div", ri, [
      B(N, { icon: "type:image" })
    ]));
  }
}, ai = {
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
        o.forEach((l) => {
          this.$nextTick(() => {
            const r = this.getSlideByElement(l.target);
            r.active = l.isIntersecting, this.$emit("slide-change", { slide: r, track: n, nav: t });
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
}, ii = { class: "slideshow" }, ci = {
  class: "slideshow__control-context",
  ref: "context"
}, ui = {
  class: "slideshow__track-crop",
  ref: "crop"
}, di = {
  class: "slideshow__track",
  ref: "track"
}, fi = ["tabindex"], hi = { class: "slideshow__controls" }, mi = { class: "slideshow__controls-item slideshow__controls-item--previous" }, gi = ["disabled"], vi = { class: "slideshow__controls-item slideshow__controls-item--next" }, yi = ["disabled"], pi = {
  key: 0,
  class: "slideshow__nav",
  ref: "nav"
}, bi = ["onClick"], _i = { class: "hidden-visually" };
function wi(e, n, t, s, o, l) {
  const r = D("UluIcon");
  return u(), d("div", ii, [
    h("div", ci, [
      h("div", ui, [
        h("ul", di, [
          (u(!0), d(x, null, O(o.slides, (a, i) => (u(), d("li", {
            class: m(["slideshow__slide", { "is-active": a.active }]),
            key: i,
            tabindex: t.slideFocusable ? "0" : "-1",
            ref_for: !0,
            ref: (c) => {
              a.element = c;
            }
          }, [
            g(e.$slots, "slide", {
              item: a.item,
              index: i
            })
          ], 10, fi))), 128))
        ], 512)
      ], 512),
      h("ul", hi, [
        h("li", mi, [
          h("button", {
            class: "slideshow__control-button slideshow__control-button--previous",
            "aria-label": "Scroll Right",
            onClick: n[0] || (n[0] = (...a) => l.previous && l.previous(...a)),
            disabled: !l.canScrollLeft
          }, [
            B(r, {
              class: "slideshow__control-icon",
              icon: "type:previous"
            })
          ], 8, gi)
        ]),
        h("li", vi, [
          h("button", {
            class: "slideshow__control-button slideshow__control-button--next",
            "aria-label": "Scroll Left",
            onClick: n[1] || (n[1] = (...a) => l.next && l.next(...a)),
            disabled: !l.canScrollRight
          }, [
            B(r, {
              class: "slideshow__control-icon",
              icon: "type:next"
            })
          ], 8, yi)
        ])
      ])
    ], 512),
    t.noNav ? p("", !0) : (u(), d("ul", pi, [
      (u(!0), d(x, null, O(o.slides, (a, i) => (u(), d("li", {
        class: m(["slideshow__nav-item", { "is-active": a.active }]),
        ref_for: !0,
        ref: (c) => {
          a.navElement = c;
        },
        key: i
      }, [
        h("button", {
          class: m(["slideshow__nav-button", { "is-active": a.active }]),
          onClick: (c) => l.to(i)
        }, [
          g(e.$slots, "nav", {
            item: a.item,
            index: i,
            active: a.active
          }, () => [
            h("span", _i, "Item " + b(i + 1), 1)
          ])
        ], 10, bi)
      ], 2))), 128))
    ], 512))
  ]);
}
const Si = /* @__PURE__ */ R(ai, [["render", wi]]), ki = {
  name: "ImageSlideShow",
  components: {
    UluSlideShow: Si
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
      const { offsetWidth: o, scrollLeft: l } = n, { offsetLeft: r, offsetWidth: a } = s, i = l + o, c = r + a;
      let f = null;
      console.log("left/right", l, i), t && s && (c > i ? f = l + (c - i) : r < l && (f = r), f !== null && n.scrollTo({ left: f, top: 0, behavior: "smooth" }));
    }
  }
}, $i = ["src", "alt"], Ci = { class: "slideshow__image-actions" }, Ti = ["src", "alt"];
function Ai(e, n, t, s, o, l) {
  const r = D("AppButton"), a = D("UluSlideShow");
  return u(), w(a, {
    class: "slideshow--images",
    items: t.images,
    onSlideChange: l.slideChange
  }, {
    slide: S(({ item: i }) => [
      h("img", {
        src: i.src,
        alt: i.alt
      }, null, 8, $i),
      h("div", Ci, [
        t.selectButton ? (u(), w(r, {
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
    nav: S(({ index: i }) => [
      h("img", {
        src: t.images[i].src,
        alt: `View image ${i}`
      }, null, 8, Ti)
    ]),
    _: 1
  }, 8, ["items", "onSlideChange"]);
}
const sm = /* @__PURE__ */ R(ki, [["render", Ai]]), Oi = {
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
function xi(e, n, t, s, o, l) {
  return u(), d("li", {
    class: m(["slideshow__slide", { "is-active": t.active }])
  }, [
    g(e.$slots, "default")
  ], 2);
}
const om = /* @__PURE__ */ R(Oi, [["render", xi]]), Ui = {
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
}, Bi = ["id"], Ri = ["innerHTML"];
function ji(e, n, t, s, o, l) {
  return u(!0), d(x, null, O(t.rows, (r, a) => (u(), d("tr", {
    key: `br-${a}`,
    id: t.optionalAttr(t.isActual && r.id),
    class: m(t.resolveClasses(t.classes.row, { row: r.data, rowIndex: a, isActual: t.isActual, foot: t.foot })),
    style: H({
      height: r.height
    })
  }, [
    (u(!0), d(x, null, O(t.rowColumns, (i, c) => (u(), w(F(i.rowHeader ? "th" : "td"), {
      id: t.optionalAttr(t.isActual && i.rowHeader && i.getRowHeaderId(a)),
      scope: t.optionalAttr(t.isActual && i.rowHeader && "row"),
      key: `bc-${c}`,
      headers: t.optionalAttr(t.isActual && t.getCellHeaders(i, a)),
      class: m(t.resolveClasses(i.class, { column: i, index: c, isActual: t.isActual, row: r, rowIndex: a, foot: t.foot })),
      style: H({
        width: t.columnWidth
      })
    }, {
      default: S(() => [
        e.$slots[i.slot] ? g(e.$slots, i.slot, {
          key: 0,
          row: r.data,
          column: i,
          rowIndex: a,
          index: c,
          foot: t.foot,
          isActual: t.isActual
        }) : i.html ? (u(), d("div", {
          key: 1,
          innerHTML: t.value({ row: r, column: i, rowIndex: a, isActual: t.isActual, foot: t.foot })
        }, null, 8, Ri)) : (u(), d(x, { key: 2 }, [
          $(b(t.value({ row: r, column: i, rowIndex: a, isActual: t.isActual, foot: t.foot })), 1)
        ], 64))
      ]),
      _: 2
    }, 1032, ["id", "scope", "headers", "class", "style"]))), 128))
  ], 14, Bi))), 128);
}
const Ei = /* @__PURE__ */ R(Ui, [["render", ji]]), Ii = {
  name: "UluTableStickyTable",
  components: {
    UluTableStickyRows: Ei
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
      const { id: o } = e, l = t[o];
      l && this.$emit("actual-header-removed", l), this.$emit("actual-header-added", n), t[o] = n;
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
}, Mi = ["aria-hidden"], zi = {
  key: 0,
  class: "table-sticky__caption"
}, Fi = ["id"], Pi = ["id", "rowspan", "colspan", "data-child-columns", "aria-sort", "scope", "headers"], Li = ["innerHTML"], Vi = {
  class: "table-sticky__sort-icon",
  "aria-hidden": "true"
}, Hi = { class: "table-sticky__sort-icon-inner" }, Ni = ["innerHTML"], Wi = { key: 1 }, Di = { key: 2 };
function Xi(e, n, t, s, o, l) {
  const r = D("UluTableStickyRows");
  return u(), d("table", {
    class: m(t.resolveClasses(t.classes.table, { isActual: t.isActual })),
    "aria-hidden": t.isActual ? "false" : "true"
  }, [
    t.caption ? (u(), d("caption", zi, b(t.caption), 1)) : p("", !0),
    h("thead", null, [
      (u(!0), d(x, null, O(t.headerRows, (a, i) => (u(), d("tr", {
        key: `hr-${i}`,
        id: l.optionalAttr(t.isActual && a.id),
        class: m(t.resolveClasses(t.classes.rowHeader, { row: a, rowIndex: i, isActual: t.isActual })),
        style: H({
          height: a.height
        })
      }, [
        (u(!0), d(x, null, O(a.columns, (c, f) => (u(), d("th", {
          key: `hc-${f}`,
          id: l.optionalAttr(t.isActual && c.id),
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
          style: H({
            width: c.width
          }),
          "aria-sort": c.sort ? c.sortAscending ? "ascending" : "descending" : null,
          scope: l.optionalAttr(t.isActual && (c.colspan > 1 ? "colgroup" : "col")),
          headers: l.optionalAttr(t.isActual && l.getHeaderHeaders(c, i)),
          ref_for: !0,
          ref: (y) => l.addHeaderRef(c, y)
        }, [
          c.sortable ? (u(), w(F(t.isActual ? "button" : "div"), {
            key: 0,
            class: m(["table-sticky__sort-button", {
              "table-sticky__sort-button--focused": c.sortFocused
            }]),
            onClick: (y) => e.$emit("column-sorted", c),
            onFocus: (y) => l.handleSortFocus(c, !0),
            onBlur: (y) => l.handleSortFocus(c, !1),
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
              }, null, 8, Li)) : (u(), d(x, { key: 2 }, [
                $(b(t.getColumnTitle({ column: c, index: f, isActual: t.isActual })), 1)
              ], 64)),
              h("span", Vi, [
                h("span", Hi, [
                  g(e.$slots, "sortIcon", {}, () => [
                    n[0] || (n[0] = $("▼", -1))
                  ])
                ])
              ])
            ]),
            _: 2
          }, 1064, ["class", "onClick", "onFocus", "onBlur", "aria-pressed"])) : (u(), d(x, { key: 1 }, [
            e.$slots[c.slotHeader] ? g(e.$slots, c.slotHeader, {
              key: 0,
              isActual: t.isActual,
              column: c,
              index: f
            }) : c.htmlTitle ? (u(), d("div", {
              key: 1,
              innerHTML: t.getColumnTitle({ column: c, index: f, isActual: t.isActual })
            }, null, 8, Ni)) : (u(), d(x, { key: 2 }, [
              $(b(t.getColumnTitle({ column: c, index: f, isActual: t.isActual })), 1)
            ], 64))
          ], 64))
        ], 14, Pi))), 128))
      ], 14, Fi))), 128))
    ]),
    t.rows ? (u(), d("tbody", Wi, [
      B(r, {
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
        O(e.$slots, (a, i) => ({
          name: i,
          fn: S((c) => [
            g(e.$slots, i, oe(le(c)))
          ])
        }))
      ]), 1032, ["rows", "rowColumns", "optionalAttr", "resolveClasses", "getCellHeaders", "isActual", "columnWidth", "classes", "value"])
    ])) : p("", !0),
    t.footerRows ? (u(), d("tfoot", Di, [
      B(r, {
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
        O(e.$slots, (a, i) => ({
          name: i,
          fn: S((c) => [
            g(e.$slots, i, oe(le(c)))
          ])
        }))
      ]), 1032, ["rows", "rowColumns", "optionalAttr", "resolveClasses", "getCellHeaders", "isActual", "columnWidth", "classes", "value"])
    ])) : p("", !0)
  ], 10, Mi);
}
const qi = /* @__PURE__ */ R(Ii, [["render", Xi]]);
function Gi() {
  this.__data__ = [], this.size = 0;
}
function Ss(e, n) {
  return e === n || e !== e && n !== n;
}
function bt(e, n) {
  for (var t = e.length; t--; )
    if (Ss(e[t][0], n))
      return t;
  return -1;
}
var Yi = Array.prototype, Ki = Yi.splice;
function Zi(e) {
  var n = this.__data__, t = bt(n, e);
  if (t < 0)
    return !1;
  var s = n.length - 1;
  return t == s ? n.pop() : Ki.call(n, t, 1), --this.size, !0;
}
function Ji(e) {
  var n = this.__data__, t = bt(n, e);
  return t < 0 ? void 0 : n[t][1];
}
function Qi(e) {
  return bt(this.__data__, e) > -1;
}
function ec(e, n) {
  var t = this.__data__, s = bt(t, e);
  return s < 0 ? (++this.size, t.push([e, n])) : t[s][1] = n, this;
}
function fe(e) {
  var n = -1, t = e == null ? 0 : e.length;
  for (this.clear(); ++n < t; ) {
    var s = e[n];
    this.set(s[0], s[1]);
  }
}
fe.prototype.clear = Gi;
fe.prototype.delete = Zi;
fe.prototype.get = Ji;
fe.prototype.has = Qi;
fe.prototype.set = ec;
function tc() {
  this.__data__ = new fe(), this.size = 0;
}
function nc(e) {
  var n = this.__data__, t = n.delete(e);
  return this.size = n.size, t;
}
function sc(e) {
  return this.__data__.get(e);
}
function oc(e) {
  return this.__data__.has(e);
}
var ks = typeof global == "object" && global && global.Object === Object && global, lc = typeof self == "object" && self && self.Object === Object && self, ae = ks || lc || Function("return this")(), Re = ae.Symbol, $s = Object.prototype, rc = $s.hasOwnProperty, ac = $s.toString, Pe = Re ? Re.toStringTag : void 0;
function ic(e) {
  var n = rc.call(e, Pe), t = e[Pe];
  try {
    e[Pe] = void 0;
    var s = !0;
  } catch {
  }
  var o = ac.call(e);
  return s && (n ? e[Pe] = t : delete e[Pe]), o;
}
var cc = Object.prototype, uc = cc.toString;
function dc(e) {
  return uc.call(e);
}
var fc = "[object Null]", hc = "[object Undefined]", wn = Re ? Re.toStringTag : void 0;
function Ze(e) {
  return e == null ? e === void 0 ? hc : fc : wn && wn in Object(e) ? ic(e) : dc(e);
}
function _t(e) {
  var n = typeof e;
  return e != null && (n == "object" || n == "function");
}
var mc = "[object AsyncFunction]", gc = "[object Function]", vc = "[object GeneratorFunction]", yc = "[object Proxy]";
function Cs(e) {
  if (!_t(e))
    return !1;
  var n = Ze(e);
  return n == gc || n == vc || n == mc || n == yc;
}
var xt = ae["__core-js_shared__"], Sn = function() {
  var e = /[^.]+$/.exec(xt && xt.keys && xt.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function pc(e) {
  return !!Sn && Sn in e;
}
var bc = Function.prototype, _c = bc.toString;
function Se(e) {
  if (e != null) {
    try {
      return _c.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var wc = /[\\^$.*+?()[\]{}|]/g, Sc = /^\[object .+?Constructor\]$/, kc = Function.prototype, $c = Object.prototype, Cc = kc.toString, Tc = $c.hasOwnProperty, Ac = RegExp(
  "^" + Cc.call(Tc).replace(wc, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Oc(e) {
  if (!_t(e) || pc(e))
    return !1;
  var n = Cs(e) ? Ac : Sc;
  return n.test(Se(e));
}
function xc(e, n) {
  return e?.[n];
}
function ke(e, n) {
  var t = xc(e, n);
  return Oc(t) ? t : void 0;
}
var Ye = ke(ae, "Map"), Ke = ke(Object, "create");
function Uc() {
  this.__data__ = Ke ? Ke(null) : {}, this.size = 0;
}
function Bc(e) {
  var n = this.has(e) && delete this.__data__[e];
  return this.size -= n ? 1 : 0, n;
}
var Rc = "__lodash_hash_undefined__", jc = Object.prototype, Ec = jc.hasOwnProperty;
function Ic(e) {
  var n = this.__data__;
  if (Ke) {
    var t = n[e];
    return t === Rc ? void 0 : t;
  }
  return Ec.call(n, e) ? n[e] : void 0;
}
var Mc = Object.prototype, zc = Mc.hasOwnProperty;
function Fc(e) {
  var n = this.__data__;
  return Ke ? n[e] !== void 0 : zc.call(n, e);
}
var Pc = "__lodash_hash_undefined__";
function Lc(e, n) {
  var t = this.__data__;
  return this.size += this.has(e) ? 0 : 1, t[e] = Ke && n === void 0 ? Pc : n, this;
}
function _e(e) {
  var n = -1, t = e == null ? 0 : e.length;
  for (this.clear(); ++n < t; ) {
    var s = e[n];
    this.set(s[0], s[1]);
  }
}
_e.prototype.clear = Uc;
_e.prototype.delete = Bc;
_e.prototype.get = Ic;
_e.prototype.has = Fc;
_e.prototype.set = Lc;
function Vc() {
  this.size = 0, this.__data__ = {
    hash: new _e(),
    map: new (Ye || fe)(),
    string: new _e()
  };
}
function Hc(e) {
  var n = typeof e;
  return n == "string" || n == "number" || n == "symbol" || n == "boolean" ? e !== "__proto__" : e === null;
}
function wt(e, n) {
  var t = e.__data__;
  return Hc(n) ? t[typeof n == "string" ? "string" : "hash"] : t.map;
}
function Nc(e) {
  var n = wt(this, e).delete(e);
  return this.size -= n ? 1 : 0, n;
}
function Wc(e) {
  return wt(this, e).get(e);
}
function Dc(e) {
  return wt(this, e).has(e);
}
function Xc(e, n) {
  var t = wt(this, e), s = t.size;
  return t.set(e, n), this.size += t.size == s ? 0 : 1, this;
}
function Ee(e) {
  var n = -1, t = e == null ? 0 : e.length;
  for (this.clear(); ++n < t; ) {
    var s = e[n];
    this.set(s[0], s[1]);
  }
}
Ee.prototype.clear = Vc;
Ee.prototype.delete = Nc;
Ee.prototype.get = Wc;
Ee.prototype.has = Dc;
Ee.prototype.set = Xc;
var qc = 200;
function Gc(e, n) {
  var t = this.__data__;
  if (t instanceof fe) {
    var s = t.__data__;
    if (!Ye || s.length < qc - 1)
      return s.push([e, n]), this.size = ++t.size, this;
    t = this.__data__ = new Ee(s);
  }
  return t.set(e, n), this.size = t.size, this;
}
function Ie(e) {
  var n = this.__data__ = new fe(e);
  this.size = n.size;
}
Ie.prototype.clear = tc;
Ie.prototype.delete = nc;
Ie.prototype.get = sc;
Ie.prototype.has = oc;
Ie.prototype.set = Gc;
function Yc(e, n) {
  for (var t = -1, s = e == null ? 0 : e.length; ++t < s && n(e[t], t, e) !== !1; )
    ;
  return e;
}
var kn = function() {
  try {
    var e = ke(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}();
function Kc(e, n, t) {
  n == "__proto__" && kn ? kn(e, n, {
    configurable: !0,
    enumerable: !0,
    value: t,
    writable: !0
  }) : e[n] = t;
}
var Zc = Object.prototype, Jc = Zc.hasOwnProperty;
function Qc(e, n, t) {
  var s = e[n];
  (!(Jc.call(e, n) && Ss(s, t)) || t === void 0 && !(n in e)) && Kc(e, n, t);
}
function eu(e, n) {
  for (var t = -1, s = Array(e); ++t < e; )
    s[t] = n(t);
  return s;
}
function Je(e) {
  return e != null && typeof e == "object";
}
var tu = "[object Arguments]";
function $n(e) {
  return Je(e) && Ze(e) == tu;
}
var Ts = Object.prototype, nu = Ts.hasOwnProperty, su = Ts.propertyIsEnumerable, ou = $n(/* @__PURE__ */ function() {
  return arguments;
}()) ? $n : function(e) {
  return Je(e) && nu.call(e, "callee") && !su.call(e, "callee");
}, on = Array.isArray;
function lu() {
  return !1;
}
var As = typeof exports == "object" && exports && !exports.nodeType && exports, Cn = As && typeof module == "object" && module && !module.nodeType && module, ru = Cn && Cn.exports === As, Tn = ru ? ae.Buffer : void 0, au = Tn ? Tn.isBuffer : void 0, Os = au || lu, iu = 9007199254740991, cu = /^(?:0|[1-9]\d*)$/;
function uu(e, n) {
  var t = typeof e;
  return n = n ?? iu, !!n && (t == "number" || t != "symbol" && cu.test(e)) && e > -1 && e % 1 == 0 && e < n;
}
var du = 9007199254740991;
function xs(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= du;
}
var fu = "[object Arguments]", hu = "[object Array]", mu = "[object Boolean]", gu = "[object Date]", vu = "[object Error]", yu = "[object Function]", pu = "[object Map]", bu = "[object Number]", _u = "[object Object]", wu = "[object RegExp]", Su = "[object Set]", ku = "[object String]", $u = "[object WeakMap]", Cu = "[object ArrayBuffer]", Tu = "[object DataView]", Au = "[object Float32Array]", Ou = "[object Float64Array]", xu = "[object Int8Array]", Uu = "[object Int16Array]", Bu = "[object Int32Array]", Ru = "[object Uint8Array]", ju = "[object Uint8ClampedArray]", Eu = "[object Uint16Array]", Iu = "[object Uint32Array]", L = {};
L[Au] = L[Ou] = L[xu] = L[Uu] = L[Bu] = L[Ru] = L[ju] = L[Eu] = L[Iu] = !0;
L[fu] = L[hu] = L[Cu] = L[mu] = L[Tu] = L[gu] = L[vu] = L[yu] = L[pu] = L[bu] = L[_u] = L[wu] = L[Su] = L[ku] = L[$u] = !1;
function Mu(e) {
  return Je(e) && xs(e.length) && !!L[Ze(e)];
}
function ln(e) {
  return function(n) {
    return e(n);
  };
}
var Us = typeof exports == "object" && exports && !exports.nodeType && exports, Ne = Us && typeof module == "object" && module && !module.nodeType && module, zu = Ne && Ne.exports === Us, Ut = zu && ks.process, je = function() {
  try {
    var e = Ne && Ne.require && Ne.require("util").types;
    return e || Ut && Ut.binding && Ut.binding("util");
  } catch {
  }
}(), An = je && je.isTypedArray, Fu = An ? ln(An) : Mu, Pu = Object.prototype, Lu = Pu.hasOwnProperty;
function Vu(e, n) {
  var t = on(e), s = !t && ou(e), o = !t && !s && Os(e), l = !t && !s && !o && Fu(e), r = t || s || o || l, a = r ? eu(e.length, String) : [], i = a.length;
  for (var c in e)
    Lu.call(e, c) && !(r && // Safari 9 has enumerable `arguments.length` in strict mode.
    (c == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    o && (c == "offset" || c == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    l && (c == "buffer" || c == "byteLength" || c == "byteOffset") || // Skip index properties.
    uu(c, i))) && a.push(c);
  return a;
}
var Hu = Object.prototype;
function Bs(e) {
  var n = e && e.constructor, t = typeof n == "function" && n.prototype || Hu;
  return e === t;
}
function Rs(e, n) {
  return function(t) {
    return e(n(t));
  };
}
var Nu = Rs(Object.keys, Object), Wu = Object.prototype, Du = Wu.hasOwnProperty;
function Xu(e) {
  if (!Bs(e))
    return Nu(e);
  var n = [];
  for (var t in Object(e))
    Du.call(e, t) && t != "constructor" && n.push(t);
  return n;
}
function qu(e) {
  return e != null && xs(e.length) && !Cs(e);
}
function Gu(e) {
  return qu(e) ? Vu(e) : Xu(e);
}
var js = typeof exports == "object" && exports && !exports.nodeType && exports, On = js && typeof module == "object" && module && !module.nodeType && module, Yu = On && On.exports === js, xn = Yu ? ae.Buffer : void 0;
xn && xn.allocUnsafe;
function Ku(e, n) {
  return e.slice();
}
function Zu(e, n) {
  for (var t = -1, s = e == null ? 0 : e.length, o = 0, l = []; ++t < s; ) {
    var r = e[t];
    n(r, t, e) && (l[o++] = r);
  }
  return l;
}
function Ju() {
  return [];
}
var Qu = Object.prototype, ed = Qu.propertyIsEnumerable, Un = Object.getOwnPropertySymbols, td = Un ? function(e) {
  return e == null ? [] : (e = Object(e), Zu(Un(e), function(n) {
    return ed.call(e, n);
  }));
} : Ju;
function nd(e, n) {
  for (var t = -1, s = n.length, o = e.length; ++t < s; )
    e[o + t] = n[t];
  return e;
}
var sd = Rs(Object.getPrototypeOf, Object);
function od(e, n, t) {
  var s = n(e);
  return on(e) ? s : nd(s, t(e));
}
function ld(e) {
  return od(e, Gu, td);
}
var Pt = ke(ae, "DataView"), Lt = ke(ae, "Promise"), Vt = ke(ae, "Set"), Ht = ke(ae, "WeakMap"), Bn = "[object Map]", rd = "[object Object]", Rn = "[object Promise]", jn = "[object Set]", En = "[object WeakMap]", In = "[object DataView]", ad = Se(Pt), id = Se(Ye), cd = Se(Lt), ud = Se(Vt), dd = Se(Ht), ce = Ze;
(Pt && ce(new Pt(new ArrayBuffer(1))) != In || Ye && ce(new Ye()) != Bn || Lt && ce(Lt.resolve()) != Rn || Vt && ce(new Vt()) != jn || Ht && ce(new Ht()) != En) && (ce = function(e) {
  var n = Ze(e), t = n == rd ? e.constructor : void 0, s = t ? Se(t) : "";
  if (s)
    switch (s) {
      case ad:
        return In;
      case id:
        return Bn;
      case cd:
        return Rn;
      case ud:
        return jn;
      case dd:
        return En;
    }
  return n;
});
var fd = Object.prototype, hd = fd.hasOwnProperty;
function md(e) {
  var n = e.length, t = new e.constructor(n);
  return n && typeof e[0] == "string" && hd.call(e, "index") && (t.index = e.index, t.input = e.input), t;
}
var Mn = ae.Uint8Array;
function rn(e) {
  var n = new e.constructor(e.byteLength);
  return new Mn(n).set(new Mn(e)), n;
}
function gd(e, n) {
  var t = rn(e.buffer);
  return new e.constructor(t, e.byteOffset, e.byteLength);
}
var vd = /\w*$/;
function yd(e) {
  var n = new e.constructor(e.source, vd.exec(e));
  return n.lastIndex = e.lastIndex, n;
}
var zn = Re ? Re.prototype : void 0, Fn = zn ? zn.valueOf : void 0;
function pd(e) {
  return Fn ? Object(Fn.call(e)) : {};
}
function bd(e, n) {
  var t = rn(e.buffer);
  return new e.constructor(t, e.byteOffset, e.length);
}
var _d = "[object Boolean]", wd = "[object Date]", Sd = "[object Map]", kd = "[object Number]", $d = "[object RegExp]", Cd = "[object Set]", Td = "[object String]", Ad = "[object Symbol]", Od = "[object ArrayBuffer]", xd = "[object DataView]", Ud = "[object Float32Array]", Bd = "[object Float64Array]", Rd = "[object Int8Array]", jd = "[object Int16Array]", Ed = "[object Int32Array]", Id = "[object Uint8Array]", Md = "[object Uint8ClampedArray]", zd = "[object Uint16Array]", Fd = "[object Uint32Array]";
function Pd(e, n, t) {
  var s = e.constructor;
  switch (n) {
    case Od:
      return rn(e);
    case _d:
    case wd:
      return new s(+e);
    case xd:
      return gd(e);
    case Ud:
    case Bd:
    case Rd:
    case jd:
    case Ed:
    case Id:
    case Md:
    case zd:
    case Fd:
      return bd(e);
    case Sd:
      return new s();
    case kd:
    case Td:
      return new s(e);
    case $d:
      return yd(e);
    case Cd:
      return new s();
    case Ad:
      return pd(e);
  }
}
var Pn = Object.create, Ld = /* @__PURE__ */ function() {
  function e() {
  }
  return function(n) {
    if (!_t(n))
      return {};
    if (Pn)
      return Pn(n);
    e.prototype = n;
    var t = new e();
    return e.prototype = void 0, t;
  };
}();
function Vd(e) {
  return typeof e.constructor == "function" && !Bs(e) ? Ld(sd(e)) : {};
}
var Hd = "[object Map]";
function Nd(e) {
  return Je(e) && ce(e) == Hd;
}
var Ln = je && je.isMap, Wd = Ln ? ln(Ln) : Nd, Dd = "[object Set]";
function Xd(e) {
  return Je(e) && ce(e) == Dd;
}
var Vn = je && je.isSet, qd = Vn ? ln(Vn) : Xd, Es = "[object Arguments]", Gd = "[object Array]", Yd = "[object Boolean]", Kd = "[object Date]", Zd = "[object Error]", Is = "[object Function]", Jd = "[object GeneratorFunction]", Qd = "[object Map]", ef = "[object Number]", Ms = "[object Object]", tf = "[object RegExp]", nf = "[object Set]", sf = "[object String]", of = "[object Symbol]", lf = "[object WeakMap]", rf = "[object ArrayBuffer]", af = "[object DataView]", cf = "[object Float32Array]", uf = "[object Float64Array]", df = "[object Int8Array]", ff = "[object Int16Array]", hf = "[object Int32Array]", mf = "[object Uint8Array]", gf = "[object Uint8ClampedArray]", vf = "[object Uint16Array]", yf = "[object Uint32Array]", z = {};
z[Es] = z[Gd] = z[rf] = z[af] = z[Yd] = z[Kd] = z[cf] = z[uf] = z[df] = z[ff] = z[hf] = z[Qd] = z[ef] = z[Ms] = z[tf] = z[nf] = z[sf] = z[of] = z[mf] = z[gf] = z[vf] = z[yf] = !0;
z[Zd] = z[Is] = z[lf] = !1;
function lt(e, n, t, s, o, l) {
  var r;
  if (r !== void 0)
    return r;
  if (!_t(e))
    return e;
  var a = on(e);
  if (a)
    r = md(e);
  else {
    var i = ce(e), c = i == Is || i == Jd;
    if (Os(e))
      return Ku(e);
    if (i == Ms || i == Es || c && !o)
      r = c ? {} : Vd(e);
    else {
      if (!z[i])
        return o ? e : {};
      r = Pd(e, i);
    }
  }
  l || (l = new Ie());
  var f = l.get(e);
  if (f)
    return f;
  l.set(e, r), qd(e) ? e.forEach(function(k) {
    r.add(lt(k, n, t, k, e, l));
  }) : Wd(e) && e.forEach(function(k, T) {
    r.set(T, lt(k, n, t, T, e, l));
  });
  var y = ld, v = a ? void 0 : y(e);
  return Yc(v || e, function(k, T) {
    v && (T = k, k = e[T]), Qc(r, T, lt(k, n, t, T, e, l));
  }), r;
}
var pf = 1, bf = 4;
function _f(e) {
  return lt(e, pf | bf);
}
const Bt = (e) => e.every((n) => typeof n == "object"), Hn = !0, zs = () => window.innerWidth;
let Nn = zs();
const wf = {
  name: "UluTableSticky",
  components: {
    UluTableStickyTable: qi
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
      required: Hn
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
      validator: Bt,
      required: Hn
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
      validator: Bt
      // required
    },
    /**
     * Array of rows for footer (tfoot)
     */
    footerRows: {
      type: Array,
      validator: Bt
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
      const e = this.currentColumns, n = [], t = (o) => {
        o.columns ? o.columns.forEach(t) : n.push(o);
      };
      e.forEach(t);
      let s = [];
      return n.forEach((o, l) => {
        const r = s.slice();
        o.getRowHeaders = (a) => r.map((i) => i(a)).join(" "), o.rowHeader && (o.getRowHeaderId = (a) => `${this.idPrefix}-rh-${a}-${l}`, s.push(o.getRowHeaderId));
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
      const e = this.idCreator("c"), n = _f(this.columns), t = (s, o) => {
        s.id = e(), s.parent = o, s.width = "auto", s.boxWidth = null, s.sortApplied = !1, s.sortAscending = !1, s.sortFocused = !1;
        let l = [];
        o && (o.headers && o.headers.length ? l = [...o.headers] : l.push(o.id)), l.push(s.id), s.headers = l, s.columns ? s.columns.forEach((r) => t(r, s)) : !s.key && !s.value && !s.slot && console.warn("UluTableSticky: Missing 'key', 'value' or 'slot' in column configuration for", s);
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
      function l(r, a) {
        const i = a.columns;
        i && i.forEach((c) => l(1 + r, c)), a.rowspan = i ? 1 : t - r, a.colspan = i ? i.reduce((c, f) => c + f.colspan, 0) : 1, o[r].columns.push(a);
      }
      return e.forEach((r) => l(0, r)), o;
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
      const e = zs();
      Nn !== e && (Nn = e, this.resizing ? (this.resizing = !1, this.setTableSizes(), this.checkOverflowX(), this.syncScrollLeft()) : (this.resizing = !0, this.removeTableSizes()));
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
          const l = n(o);
          l && (o.boxWidth = e(l, "width"), o.width = `${o.boxWidth}px`);
        });
      }), this.firstColumnSticky && (this.currentRows.forEach((s) => t(s)), this.currentFooterRows.forEach((s) => t(s))), this.$nextTick(() => {
        this.sizesCalculated = !0, ls(() => {
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
}, Sf = { class: "table-sticky__sticky-wrap table-sticky__sticky-wrap--header" }, kf = { class: "table-sticky__header-wrap" }, $f = { class: "table-sticky__sticky-wrap table-sticky__sticky-wrap--first-column-header" }, Cf = { class: "table-sticky__sticky-wrap table-sticky__sticky-wrap--controls" }, Tf = {
  key: 2,
  class: "table-sticky__controls-inner"
}, Af = ["disabled"], Of = ["disabled"], xf = {
  ref: "display",
  class: "table-sticky__display"
};
function Uf(e, n, t, s, o, l) {
  const r = D("UluTableStickyTable");
  return u(), d("div", {
    class: m(["table-sticky", {
      "table-sticky--overflown-x": o.overflownX,
      "table-sticky--can-scroll-right": o.canScrollRight,
      "table-sticky--can-scroll-left": o.canScrollLeft
    }])
  }, [
    h("div", Sf, [
      h("div", kf, [
        B(r, {
          ref: "header",
          class: "table-sticky__table table-sticky__table--header",
          classes: t.classes,
          caption: t.caption,
          resolveClasses: l.resolveClasses,
          getColumnTitle: t.getColumnTitle,
          idPrefix: t.idPrefix,
          headerRows: o.headerRows,
          style: H({
            opacity: o.sizesCalculated ? "1" : "0",
            pointerEvents: o.sizesCalculated ? "auto" : "none",
            width: o.tableWidth
          }),
          onColumnSorted: l.applySort
        }, Oe({ _: 2 }, [
          O(e.$slots, (a, i) => ({
            name: i,
            fn: S((c) => [
              g(e.$slots, i, oe(le(c)))
            ])
          }))
        ]), 1032, ["classes", "caption", "resolveClasses", "getColumnTitle", "idPrefix", "headerRows", "style", "onColumnSorted"])
      ])
    ]),
    h("div", $f, [
      t.firstColumnSticky ? (u(), w(r, {
        key: 0,
        ref: "firstColumnHeader",
        class: "table-sticky__table table-sticky__table--first-column-header",
        classes: t.classes,
        caption: t.caption,
        resolveClasses: l.resolveClasses,
        getColumnTitle: t.getColumnTitle,
        idPrefix: t.idPrefix,
        headerRows: l.headerRowsFirst,
        style: H({
          opacity: l.headerOpacityX,
          pointerEvents: l.headerVisibleX ? "auto" : "none"
        }),
        onColumnSorted: l.applySort
      }, Oe({ _: 2 }, [
        O(e.$slots, (a, i) => ({
          name: i,
          fn: S((c) => [
            g(e.$slots, i, oe(le(c)))
          ])
        }))
      ]), 1032, ["classes", "caption", "resolveClasses", "getColumnTitle", "idPrefix", "headerRows", "style", "onColumnSorted"])) : p("", !0)
    ]),
    h("div", Cf, [
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
        }) : t.controlsComponent ? (u(), w(F(t.controlsComponent), {
          key: 1,
          scrollLeft: l.scrollLeft,
          scrollRight: l.scrollRight,
          canScrollLeft: o.canScrollLeft,
          canScrollRight: o.canScrollRight
        }, null, 8, ["scrollLeft", "scrollRight", "canScrollLeft", "canScrollRight"])) : (u(), d("div", Tf, [
          h("button", {
            class: m(["table-sticky__control table-sticky__control--left", l.resolveClasses(t.classes.controlButton)]),
            "aria-label": "Scroll Left",
            onClick: n[0] || (n[0] = (...a) => l.scrollLeft && l.scrollLeft(...a)),
            disabled: !o.canScrollLeft
          }, [
            g(e.$slots, "controlLeft", {}, () => [
              n[2] || (n[2] = $(" ← ", -1))
            ])
          ], 10, Af),
          h("button", {
            class: m(["table-sticky__control table-sticky__control--right", l.resolveClasses(t.classes.controlButton)]),
            "aria-label": "Scroll Right",
            onClick: n[1] || (n[1] = (...a) => l.scrollRight && l.scrollRight(...a)),
            disabled: !o.canScrollRight
          }, [
            g(e.$slots, "controlRight", {}, () => [
              n[3] || (n[3] = $(" → ", -1))
            ])
          ], 10, Of)
        ]))
      ], 2), [
        [Rt, l.controlsShown]
      ])
    ]),
    h("div", xf, [
      B(r, {
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
        O(e.$slots, (a, i) => ({
          name: i,
          fn: S((c) => [
            g(e.$slots, i, oe(le(c)))
          ])
        }))
      ]), 1032, ["classes", "resolveClasses", "headerRows", "rows", "footerRows", "rowColumns", "caption", "idPrefix", "getRowValue", "getColumnTitle", "onVnodeMounted", "onActualHeaderRemoved", "onActualHeaderAdded", "onColumnSorted"])
    ], 512),
    t.firstColumnSticky ? (u(), w(r, {
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
      style: H({
        opacity: l.headerOpacityX,
        pointerEvents: l.headerVisibleX ? "auto" : "none"
      }),
      onColumnSorted: l.applySort
    }, Oe({ _: 2 }, [
      O(e.$slots, (a, i) => ({
        name: i,
        fn: S((c) => [
          g(e.$slots, i, oe(le(c)))
        ])
      }))
    ]), 1032, ["classes", "resolveClasses", "caption", "headerRows", "columnWidth", "rows", "footerRows", "rowColumns", "idPrefix", "getRowValue", "getColumnTitle", "style", "onColumnSorted"])) : p("", !0)
  ], 2);
}
const lm = /* @__PURE__ */ R(wf, [["render", Uf]]), rm = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  dom: fl,
  router: jl
}, Symbol.toStringTag, { value: "Module" }));
export {
  pn as UluAccordion,
  kh as UluAdaptiveLayout,
  ah as UluAlert,
  Mh as UluAnimateNumber,
  ql as UluBadge,
  ih as UluBadgeStack,
  Th as UluBreadcrumb,
  Pl as UluButton,
  ch as UluButtonVerbose,
  uh as UluCallout,
  dh as UluCard,
  Mt as UluCollapsible,
  xh as UluConditionalText,
  Gr as UluConditionalWrapper,
  $h as UluDataGrid,
  fh as UluDefinitionList,
  Jf as UluDropdown,
  Uh as UluEmpty,
  Bh as UluEmptyView,
  hh as UluExternalLink,
  Lh as UluFacetsActiveFilters,
  Hh as UluFacetsFilterAccordions,
  Vh as UluFacetsFilterLists,
  Nh as UluFacetsFilterPopovers,
  Wh as UluFacetsFilterSelects,
  Dh as UluFacetsHeaderLayout,
  ct as UluFacetsList,
  Xh as UluFacetsResults,
  qh as UluFacetsSearch,
  Gh as UluFacetsSidebarLayout,
  Yh as UluFacetsSort,
  yh as UluFileDisplay,
  ph as UluFormFile,
  bh as UluFormMessage,
  _h as UluFormSelect,
  wh as UluFormText,
  N as UluIcon,
  sm as UluImageSlideShow,
  mh as UluList,
  gh as UluMain,
  gs as UluMenu,
  yl as UluMenuStack,
  rs as UluModal,
  Ah as UluNavStrip,
  th as UluOverflowPopover,
  Rh as UluPlaceholderImage,
  jh as UluPlaceholderText,
  zh as UluProgressBar,
  Fh as UluProgressCircle,
  Eh as UluRouteAnnouncer,
  Ih as UluSanityRichText,
  Kh as UluScrollAnchors,
  Zh as UluScrollAnchorsNav,
  Jh as UluScrollAnchorsNavAnimated,
  Qh as UluScrollAnchorsSection,
  Sh as UluSearchForm,
  bs as UluSelectableMenu,
  em as UluShowSkeleton,
  tm as UluSkeletonContent,
  nm as UluSkeletonMedia,
  li as UluSkeletonText,
  Oh as UluSkipLink,
  Si as UluSlideShow,
  om as UluSlideShowSlide,
  vh as UluSpokeSpinner,
  nh as UluTab,
  sh as UluTabGroup,
  oh as UluTabList,
  lh as UluTabPanel,
  rh as UluTabPanels,
  lm as UluTableSticky,
  Ei as UluTableStickyRows,
  qi as UluTableStickyTable,
  ms as UluTag,
  Ch as UluTitleRail,
  Zf as breakpointsPlugin,
  qf as corePlugin,
  Yf as modalsPlugin,
  Gf as popoversPlugin,
  Kf as toastPlugin,
  Ko as useBreakpointManager,
  eh as useDocumentTitle,
  Ph as useFacets,
  Ro as useIcon,
  re as useModifiers,
  Qf as usePagination,
  wl as useRequiredInject,
  bl as useWindowResize,
  rm as utils
};
