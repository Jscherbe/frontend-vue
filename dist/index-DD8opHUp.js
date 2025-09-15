import { reactive as Kt, ref as R, computed as b, resolveDirective as Gn, createElementBlock as d, openBlock as u, Fragment as x, withDirectives as Re, createElementVNode as h, unref as C, normalizeClass as m, renderSlot as g, createTextVNode as $, toDisplayString as p, withKeys as Zn, normalizeStyle as H, createCommentVNode as _, nextTick as Jn, toRef as Xs, createBlock as w, Teleport as ht, resolveDynamicComponent as F, mergeProps as de, inject as mt, watchEffect as gt, defineAsyncComponent as Ys, markRaw as Ee, toRefs as qs, toValue as it, resolveComponent as W, withModifiers as Ks, createVNode as I, useSlots as Qn, renderList as O, TransitionGroup as es, withCtx as S, onMounted as vt, onBeforeUnmount as ts, watch as Xe, isRef as Gs, hasInjectionContext as Zs, getCurrentInstance as Js, onDeactivated as Qs, onActivated as eo, onUnmounted as ns, normalizeProps as oe, guardReactiveProps as ie, vModelText as to, vShow as Ut, createSlots as xe } from "vue";
import { inline as ss, offset as os, flip as is, shift as ls, arrow as rs, useFloating as as, autoUpdate as cs } from "@floating-ui/vue";
import { useRoute as us, useRouter as no, RouterLink as Ye } from "vue-router";
import { Tab as so, TabGroup as oo, TabList as io, TabPanel as lo, TabPanels as ro } from "@headlessui/vue";
import ao from "gsap";
import co from "fuse.js";
const gn = {
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
function Wf(e, n = {}) {
  const t = Kt({ ...gn }), { iconsByType: s, ...o } = n || {};
  o && Object.assign(t, o);
  const i = {
    // Methods to interact with settings
    getSettings() {
      return t;
    },
    getDefaultSettings() {
      return { ...gn };
    },
    updateSettings(l) {
      return Object.assign(t, l);
    },
    getSetting(l) {
      if (!t.hasOwnProperty(l)) {
        console.warn(`Attempted to access non-existent setting: ${l}`);
        return;
      }
      return t[l];
    },
    updateSetting(l, r) {
      if (typeof l != "string")
        throw new Error("Expected key to be string");
      t[l] = r;
    },
    getIcon(l) {
      const r = t.iconsByType;
      if (!r[l])
        throw new Error(`Icon type "${l}" not found!`);
      return r[l];
    },
    setIcon(l, r) {
      t.iconsByType[l] = r;
    }
  };
  if (s)
    for (const [l, r] of Object.entries(s))
      i.setIcon(l, r);
  e.provide("uluCore", i), e.config.globalProperties.$uluCore = i;
}
const st = {
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
  plugin: { ...st.plugin },
  popover: { ...st.popover },
  tooltip: { ...st.tooltip, ...st.popover }
}, Gt = R(!1), Zt = R(null);
function uo(e = {}) {
  return Object.assign(ye.popover, e.popover), Object.assign(ye.tooltip, e.tooltip), Object.assign(ye.plugin, e.plugin), ye;
}
function fo(e) {
  return Object.assign({}, ye.tooltip, e);
}
function ho(e) {
  Gt.value = !0, Zt.value = e;
}
function mo() {
  Gt.value = !1, Zt.value = null;
}
const lt = /* @__PURE__ */ new WeakMap(), go = {
  mounted(e, n) {
    vn(e, n);
  },
  beforeUpdate(e) {
    yn(e);
  },
  updated(e, n) {
    vn(e, n);
  },
  umounted(e) {
    yn(e);
  }
};
function vn(e, n) {
  const t = vo(e, n);
  if (!t) return;
  let s = null;
  const o = () => {
    s || (s = setTimeout(() => {
      ho(t), clearTimeout(s);
    }, t.delay));
  }, i = () => {
    s && (clearTimeout(s), s = null), mo();
  };
  t.showEvents.forEach((l) => {
    e.addEventListener(l, o);
  }), t.hideEvents.forEach((l) => {
    e.addEventListener(l, i);
  }), lt.set(e, { onShow: o, onHide: i, config: t });
}
function yn(e) {
  if (!lt.has(e))
    return;
  const { config: n, onShow: t, onHide: s } = lt.get(e);
  n.showEvents.forEach((o) => {
    e.removeEventListener(o, t);
  }), n.hideEvents.forEach((o) => {
    e.removeEventListener(o, s);
  }), lt.delete(e);
}
function vo(e, n) {
  const { value: t } = n;
  let s;
  if (!(t === !1 || t === null))
    return typeof t == "object" ? s = t : s = { content: t }, fo(Object.assign({}, { trigger: e }, s));
}
let yo = 0;
function pn() {
  return `ulu-popovers-uid-${++yo}`;
}
const po = ["id", "disabled", "aria-expanded", "aria-controls", "aria-label"], bo = ["aria-labelledby", "id", "data-placement"], _o = { class: "popover__inner" }, wo = {
  key: 0,
  class: "popover__footer"
}, yt = {
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
    const t = n, s = e, o = pn(), i = pn(), l = Object.assign({}, ye.popover, s.config), r = R(s.startOpen || !1), a = R(null), c = R(null), f = R(null), y = [
      ...l.inline ? [ss()] : [],
      ...l.offset ? [os(l.offset)] : [],
      is(),
      ls(),
      ...l.arrow ? [rs({ element: f })] : []
    ], v = {
      placement: l.placement,
      whileElementsMounted: cs,
      middleware: y
    }, {
      floatingStyles: k,
      placement: A,
      middlewareData: U,
      update: j,
      isPositioned: ne
    } = as(a, c, v), $e = b(() => {
      const X = U.value?.arrow;
      return X ? {
        position: "absolute",
        left: X?.x != null ? `${X.x}px` : "",
        top: X?.y != null ? `${X.y}px` : ""
      } : null;
    });
    l.onReady && l.onReady({ update: j, isPositioned: ne });
    const q = () => {
      ee(!r.value);
    }, ee = (X) => {
      r.value = X;
      const me = {
        trigger: C(a),
        content: C(c),
        isOpen: C(r)
      }, Ce = { isOpen: me.isOpen };
      Jn(() => {
        r.value ? (j(), window.setTimeout(() => {
          At(), s.directFocus(me), t("toggle", Ce);
        }, 0)) : (te(), s.directFocus(me), t("toggle", Ce));
      });
    };
    let G;
    const At = () => {
      s.clickOutsideCloses && (G && te(), G = (X) => {
        c.value.contains(X.target) || ee(!1);
      }, document.addEventListener("click", G));
    }, te = () => {
      G && (document.removeEventListener("click", G), G = null);
    }, he = () => ee(!1);
    return (X, me) => {
      const Ce = Gn("ulu-tooltip");
      return u(), d(x, null, [
        Re((u(), d("button", {
          type: "button",
          ref_key: "trigger",
          ref: a,
          onClick: q,
          id: C(i),
          disabled: e.disabled,
          class: m([
            { [e.activeClass]: r.value },
            e.classes.trigger
          ]),
          "aria-expanded": r.value ? "true" : "false",
          "aria-controls": C(o),
          "aria-label": e.triggerAlt
        }, [
          g(X.$slots, "trigger", {
            isOpen: r.value,
            close: he
          }, () => [
            $(p(e.triggerText), 1)
          ])
        ], 10, po)), [
          [Ce, e.tooltip ? e.tooltip : null]
        ]),
        h("span", {
          class: m(["popover", [
            e.size ? `popover--${e.size}` : "",
            {
              "popover--no-padding": e.noPadding,
              "is-active": r.value
            },
            e.classes.content
          ]]),
          ref_key: "content",
          ref: c,
          "aria-labelledby": C(i),
          id: C(o),
          style: H(C(k)),
          "data-placement": C(A),
          onKeydown: me[0] || (me[0] = Zn((mn) => ee(!1), ["esc"])),
          tabindex: "-1"
        }, [
          h("span", _o, [
            g(X.$slots, "default", {
              isOpen: r.value,
              toggle: q,
              close: he
            })
          ]),
          X.$slots.footer ? (u(), d("span", wo, [
            g(X.$slots, "footer", { close: he })
          ])) : _("", !0),
          C(l).arrow ? (u(), d("span", {
            key: 1,
            class: "popover__arrow",
            ref_key: "contentArrow",
            ref: f,
            style: H($e.value),
            "data-ulu-popover-arrow": ""
          }, null, 4)) : _("", !0)
        ], 46, bo)
      ], 64);
    };
  }
}, So = ["data-placement"], ko = ["innerHTML"], $o = {
  key: 1,
  class: "popover__inner"
}, Co = {
  __name: "UluTooltipPopover",
  props: {
    config: Object
  },
  setup(e) {
    const n = Xs(e.config.trigger), t = R(null), s = R(null), o = [
      ...e.config.inline ? [ss()] : [],
      ...e.config.offset ? [os(e.config.offset)] : [],
      is(),
      ls(),
      ...e.config.arrow ? [rs({ element: s })] : []
    ], i = {
      placement: e.config.placement,
      whileElementsMounted: cs,
      middleware: o
    }, {
      floatingStyles: l,
      placement: r,
      middlewareData: a,
      update: c,
      isPositioned: f
    } = as(n, t, i), y = b(() => {
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
      "data-placement": C(r),
      style: H(C(l))
    }, [
      e.config.isHtml ? (u(), d("span", {
        key: 0,
        class: "popover__inner",
        innerHTML: e.config.content
      }, null, 8, ko)) : (u(), d("span", $o, p(e.config.content), 1)),
      e.config.arrow ? (u(), d("span", {
        key: 2,
        class: "popover__arrow",
        ref_key: "contentArrow",
        ref: s,
        style: H(y.value)
      }, null, 4)) : _("", !0)
    ], 14, So));
  }
}, Ao = {
  __name: "UluTooltipDisplay",
  setup(e) {
    return (n, t) => (u(), w(ht, {
      to: C(ye).plugin.tooltipTeleportTo
    }, [
      C(Gt) ? (u(), w(Co, {
        key: 0,
        config: C(Zt)
      }, null, 8, ["config"])) : _("", !0)
    ], 8, ["to"]));
  }
};
function Xf(e, n = {}) {
  const t = uo(n);
  t.plugin.global && (e.directive(t.plugin.directiveName, go), e.component("UluTooltipDisplay", Ao), e.component("UluPopover", yt));
}
const E = (e, n) => {
  const t = e.__vccOpts || e;
  for (const [s, o] of n)
    t[s] = o;
  return t;
}, To = {
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
function Oo(e, n, t, s, o, i) {
  return i.currentModal ? (u(), w(F(i.currentModal.component), de({ key: 0 }, i.currentProps, {
    modelValue: o.open,
    "onUpdate:modelValue": n[0] || (n[0] = (l) => o.open = l),
    onVnodeMounted: i.modalMounted,
    onVnodeUnmounted: i.modalUnmounted
  }), null, 16, ["modelValue", "onVnodeMounted", "onVnodeUnmounted"])) : _("", !0);
}
const xo = /* @__PURE__ */ E(To, [["render", Oo]]);
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
    const n = mt("uluCore"), t = R(null), { getIconProps: s, getClassesFromDefinition: o } = Ro();
    let i;
    const l = e, r = b(() => n.getSetting("fontAwesomeStatic")), a = b(() => n.getSetting("iconComponent")), c = b(() => n.getSetting("iconPropResolver")), f = b(() => {
      const { icon: U } = l;
      if (typeof U == "string" && U.startsWith("type:"))
        try {
          const j = U.substring(5);
          return n.getIcon(j);
        } catch (j) {
          return console.warn(j), null;
        }
      return U;
    }), y = b(() => !a.value || !f.value ? null : c.value(f.value)), v = b(() => s(f.value)), k = b(() => o(f.value)), A = b(() => ({
      "flow-inline": l.spaced
    }));
    return gt(async () => {
      if (!r.value && f.value) {
        if (t.value === null)
          if (i)
            t.value = Ee(i.FontAwesomeIcon);
          else {
            const U = Ys(async () => {
              const j = await import("./index.es-HlG3u0J5.js");
              return i = j, j.FontAwesomeIcon;
            });
            t.value = Ee(U);
          }
      } else
        t.value = null;
    }), (U, j) => a.value ? (u(), w(F(a.value), de({ key: 0 }, y.value, { class: A.value }), null, 16, ["class"])) : !r.value && t.value && f.value ? (u(), w(F(t.value), de({ key: 1 }, v.value, { class: A.value }), null, 16, ["class"])) : r.value && f.value ? (u(), d("span", {
      key: 2,
      class: m([k.value, A.value]),
      "aria-hidden": "true"
    }, null, 2)) : _("", !0);
  }
};
function Mt(e) {
  const n = /* @__PURE__ */ new Set();
  if (!e)
    return n;
  if (typeof e == "string")
    e.split(" ").forEach((t) => {
      t && n.add(t);
    });
  else if (Array.isArray(e))
    e.forEach((t) => {
      Mt(t).forEach((s) => n.add(s));
    });
  else if (typeof e == "object")
    for (const t in e)
      Object.prototype.hasOwnProperty.call(e, t) && e[t] && t && n.add(t);
  return n;
}
function le({ props: e, baseClass: n, internal: t = {} }) {
  const { modifiers: s } = qs(e);
  return { resolvedModifiers: b(() => {
    const i = it(n), l = Mt(it(s)), r = Mt(it(t));
    if (!i)
      return console.warn("useModifiers: Missing 'baseClass' argument, modifiers will not be applied."), "";
    const a = /* @__PURE__ */ new Set([...r, ...l]);
    return Array.from(a).map((c) => `${i}--${c}`);
  }) };
}
function ds() {
  return typeof window < "u" && typeof window.document < "u";
}
function Eo(e, n) {
  const t = e.getBoundingClientRect();
  return n.clientY < t.top || // above
  n.clientY > t.top + t.height || // below
  n.clientX < t.left || // left side
  n.clientX > t.left + t.width;
}
function jo(e = document.body, n = window) {
  return n.innerWidth - e.clientWidth;
}
function Io({ preventShift: e = !1, container: n = document.body }) {
  const t = n.style.overflow, s = n.style.paddingRight;
  if (n.style.overflow = "hidden", e) {
    const o = jo();
    if (o > 0) {
      const i = parseInt(s || "0px", 10);
      n.style.paddingRight = `${i + o}px`;
    }
  }
  return () => {
    n.style.overflow = t, n.style.paddingRight = s;
  };
}
function pt(e, n, t, s) {
  var o;
  return function() {
    var l = s || this, r = arguments, a = function() {
      o = null, t || e.apply(l, r);
    }, c = t && !o;
    clearTimeout(o), o = setTimeout(a, n), c && e.apply(l, r);
  };
}
ds() && (zo(), Uo());
const bn = {
  /**
   * Event is dispatched when DOM in the page has changed, triggers updates from
   * all modules listening for the change (init instances, etc)
   * - Is triggered by modules that were responsible for modifying the page
   */
  pageModified(e) {
    e.dispatchEvent(Ve("pageModified"));
  },
  /**
   * Event called when page is resized
   */
  pageResized(e) {
    e.dispatchEvent(Ve("pageResized"));
  },
  /**
   * Event dispatched before page print begins (teardown/restructure/hide things)
   */
  beforePrint(e) {
    e.dispatchEvent(Ve("beforePrint"));
  },
  /**
   * Event dispatched after page print (cleanup)
   */
  afterPrint(e) {
    e.dispatchEvent(Ve("afterPrint"));
  }
};
function Pt(e, n) {
  bn[e] ? bn[e](n) : console.warn(`Unable to dispatch site event: ${e} in context:`, n);
}
function Bo(e) {
  return "ulu:" + e;
}
function Ve(e, n = null, t = { bubbles: !0 }) {
  return new CustomEvent(Bo(e), { detail: n, ...t });
}
function zo() {
  window.addEventListener("resize", pt(() => Pt("pageResized", document), 250));
}
function Uo() {
  window.addEventListener("beforeprint", () => {
    Pt("beforePrint", document);
  }), window.addEventListener("afterprint", () => {
    Pt("afterPrint", document);
  });
}
function Mo(e) {
  return typeof e == "object" && e?.constructor?.name;
}
function Po(e, n, t) {
  const s = Mo(n) || "Logger";
  console[e](s, ...t);
}
function Te(e, ...n) {
}
function ot(e, ...n) {
  Po("error", e, n);
}
class Jt {
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
  #l;
  #n;
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
  constructor(n, t, s) {
    if (!t || !n) {
      ot(this, "Missing required elements: control, container");
      return;
    }
    const o = Object.assign({}, Jt.defaults, s);
    this.options = o, this.container = n, this.control = t, this.debug = o.debug;
    const i = ["left", "right"], l = ["top", "bottom"], { fromX: r, fromY: a } = o;
    if (!i.includes(r) && r !== null) {
      ot(this, `Invalid fromX: ${r} (left|right|null)`);
      return;
    }
    if (!l.includes(a) && a !== null) {
      ot(this, `Invalid fromY: ${a} (top|bottom|null)`);
      return;
    }
    if (!r && !a) {
      ot(this, "Invalid fromX/fromY, failed to setup resizer (at least one of fromX or fromY must be set)");
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
    this.#t = null, this.#e = { width: 0, height: 0 }, this.#i = 0, this.#l = 0, this.#n = !1, this.#r = 0, this.#a = 0;
  }
  /**
   * Cleans up event listeners and internal state to prevent memory leaks.
   */
  destroy() {
    const { control: n, options: t } = this;
    t.manageEvents && (t.enablePointerResizing && n.removeEventListener("pointerdown", this.#s), t.enableKeyboardResizing && n.removeEventListener("keydown", this.#o)), this.#t && clearTimeout(this.#t), this.#c(), t.manageAriaLabel && n.removeAttribute("aria-label"), Te(this, "Resizer destroyed.");
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
    this.#e.width = parseInt(i.width, 10), this.#e.height = parseInt(i.height, 10), s.overrideMaxDimensions && (this.resizeHorizontal && (t.style.maxWidth = "none"), this.resizeVertical && (t.style.maxHeight = "none")), this.#n = !0, this.dispatchEvent("resizer:start", n), Te(this, "Resize started.", {
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
    this.#n && (this.dispatchEvent("resizer:end"), this.#c(), Te(this, "Resize ended."));
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
    const { fromX: l, fromY: r, multiplier: a } = this.options;
    this.resizeHorizontal && (l === "right" ? o = this.#e.width + n * a : l === "left" && (o = this.#e.width - n * a), this.container.style.width = `${Math.max(0, o)}px`), this.resizeVertical && (r === "bottom" ? i = this.#e.height + t * a : r === "top" && (i = this.#e.height - t * a), this.container.style.height = `${Math.max(0, i)}px`);
    const c = {
      newWidth: o,
      newHeight: i,
      totalDeltaX: n,
      totalDeltaY: t,
      event: s
    };
    this.dispatchEvent("resizer:update", c), Te(this, "Resizing update.", c);
  }
  /**
   * Public handler for pointerdown events. Call this method from your own event listeners
   * if `manageEvents` is false. Its logic will only execute if `enablePointerResizing` is true.
   * @param {PointerEvent} e The pointerdown event.
   */
  onPointerdown(n) {
    if (!this.options.enablePointerResizing) {
      Te(this, "Pointer resizing disabled. Ignoring pointerdown event.");
      return;
    }
    n.preventDefault();
    const t = document.documentElement;
    this.#r = n.clientX, this.#a = n.clientY, this.#u({
      inputType: "pointer",
      startX: n.clientX,
      startY: n.clientY,
      pointerId: n.pointerId
    }), this.control.setPointerCapture(n.pointerId);
    const s = (i) => {
      const l = i.clientX - this.#r, r = i.clientY - this.#a;
      this.#f(l, r, i);
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
      Te(this, "Keyboard resizing disabled. Ignoring keydown event.");
      return;
    }
    const { key: t } = n, { keyboardStep: s, keyboardDebounceTime: o } = this.options;
    let i = 0, l = 0, r = !1;
    this.resizeHorizontal && (t === "ArrowLeft" ? (i = -s, r = !0) : t === "ArrowRight" && (i = s, r = !0)), this.resizeVertical && (t === "ArrowUp" ? (l = -s, r = !0) : t === "ArrowDown" && (l = s, r = !0)), r && (n.preventDefault(), n.stopPropagation(), (!this.#n || this.#t === null) && this.#u({ inputType: "keyboard", keyboardKey: t }), this.#i += i, this.#l += l, this.#f(this.#i, this.#l, n), this.#t && clearTimeout(this.#t), this.#t = setTimeout(() => {
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
    this.container.dispatchEvent(Ve(n, t));
  }
}
let Tt = 0;
const Lo = {
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
    return ++Tt, {
      containerWidth: null,
      titleId: `ulu-modal-${Tt}-title`,
      bodyOverflowValue: null,
      bodyPaddingRightValue: null,
      isResizing: !1
    };
  },
  setup(e) {
    const n = Qn(), t = b(() => e.title || n.title), s = b(() => {
      const { allowResize: r, position: a } = e;
      if (!r || !a) return;
      const c = ["left", "right", "center"];
      return c.includes(a) ? !0 : (console.warn(`Passed invalid position for resize (${a}), use ${c.join(", ")}`), !1);
    }), o = b(() => e.position === "center" ? "type:resizeBoth" : "type:resizeHorizontal"), i = b(() => ({
      [e.position]: e.position,
      resize: e.allowResize,
      "no-resize": !e.allowResize,
      "no-header": !t.value,
      "body-fills": e.bodyFills,
      "no-backdrop": e.noBackdrop,
      "no-min-height": e.noMinHeight,
      "non-modal": e.nonModal,
      "resizer-active": s.value
    })), { resolvedModifiers: l } = le({
      props: e,
      baseClass: "modal",
      internal: i
    });
    return {
      resolvedModifiers: l,
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
        n === t && Eo(t, e) && this.close();
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
        e.newState === "open" ? this.restoreScroll = Io({ preventShift: n }) : this.destroyPreventScroll();
      }
    },
    setupResizer() {
      const { position: e, resizerEnabled: n } = this;
      if (n) {
        const { container: t, resizer: s } = this.$refs, o = e === "center" ? { fromX: "right", fromY: "bottom", multiplier: 2 } : { fromX: e === "right" ? "left" : "right" };
        this.resizerInstance = new Jt(t, s, o), this.handleResizerStart = () => {
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
    ++Tt, this.preventScroll && this.setupPreventScroll(), this.setupResizer();
  },
  beforeUnmount() {
    const { container: e } = this.$refs;
    e && e.open && e.close(), this.destroyPreventScroll(), this.destroyResizer();
  }
}, Fo = ["aria-labelledby", "aria-describedby"], Vo = ["id"], Ho = { class: "modal__title-text" }, No = {
  key: 2,
  class: "modal__resizer",
  ref: "resizer",
  type: "button"
};
function Do(e, n, t, s, o, i) {
  const l = W("UluIcon");
  return u(), w(ht, {
    to: t.teleport === !1 ? null : t.teleport,
    disabled: t.teleport === !1
  }, [
    h("dialog", {
      class: m(["modal", [s.resolvedModifiers, t.classes.container]]),
      "aria-labelledby": i.resolvedLabelledby,
      "aria-describedby": t.describedby,
      ref: "container",
      style: H({ width: o.containerWidth }),
      onCancel: n[1] || (n[1] = Ks((...r) => i.close && i.close(...r), ["prevent"])),
      onClose: n[2] || (n[2] = (...r) => i.handleDialogCloseEvent && i.handleDialogCloseEvent(...r)),
      onClick: n[3] || (n[3] = (...r) => i.handleClick && i.handleClick(...r)),
      onToggle: n[4] || (n[4] = (...r) => i.handleToggle && i.handleToggle(...r))
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
            t.titleIcon ? (u(), w(l, {
              key: 0,
              class: "modal__title-icon",
              icon: t.titleIcon
            }, null, 8, ["icon"])) : _("", !0),
            h("span", Ho, p(t.title), 1)
          ])
        ], 10, Vo),
        h("button", {
          class: "modal__close",
          "aria-label": "Close modal",
          onClick: n[0] || (n[0] = (...r) => i.close && i.close(...r)),
          autofocus: ""
        }, [
          g(e.$slots, "closeIcon", {}, () => [
            I(l, {
              class: "modal__close-icon",
              icon: t.closeIcon || "type:close"
            }, null, 8, ["icon"])
          ])
        ])
      ], 2)) : _("", !0),
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
      ], 2)) : _("", !0),
      s.resizerEnabled ? (u(), d("button", No, [
        g(e.$slots, "resizerIcon", {}, () => [
          I(l, {
            class: "modal__resizer-icon",
            icon: t.resizerIcon || s.resizerIconType
          }, null, 8, ["icon"])
        ])
      ], 512)) : _("", !0)
    ], 46, Fo)
  ], 8, ["to", "disabled"]);
}
const fs = /* @__PURE__ */ E(Lo, [["render", Do]]), He = [], Wo = R({
  /**
   * Holds active component options (including component, and options)
   */
  active: null,
  /**
   * Populated with any props passed to open method, bound to modal component
   */
  activeProps: null
}), Ne = Wo.value, _n = {
  data: Ne,
  modals: He
}, Xo = (e) => ({
  open(n, t = null) {
    const s = this.get(n);
    Ne.active = Ee(s), Ne.activeProps = Object.assign({}, s.props, t);
  },
  /**
   * Close the active modal
   * @param {String|Node} focusTo The element or selector for an element to programmatically focus after modal close
   * @see https://www.deque.com/blog/accessible-routing-in-javascript-frameworks/
   */
  close() {
    Ne.active = null, Ne.activeProps = null;
  },
  /**
   * Get a modal's config object by name
   * @return {Object} Modal config object
   */
  get(n) {
    const t = He.find((s) => s.name === n);
    if (t)
      return t;
    throw new Error(`Unable to find modal named: ${n}`);
  },
  /**
   * Add a modal config
   */
  add(n) {
    const t = e(n);
    He.push(t);
  },
  /**
   * Removes a modal config by name
   * @return {Object} Modal that was removed
   */
  remove(n) {
    const t = He.findIndex((s) => s.name === n);
    if (t > -1)
      return He.splice(t, 1);
    warn("unable to find modal to remove");
  }
}), Yo = {
  componentNameDisplay: "UluModalsDisplay",
  componentNameModal: "UluModal",
  modals: [],
  modalOptions: {}
};
function Yf(e, n) {
  const t = Object.assign({}, Yo, n), o = Xo((i) => Object.assign({}, t.modalOptions, i));
  e.component(t.componentNameDisplay, xo), e.component(t.componentNameModal, fs), t.modals.forEach((i) => {
    o.add(i);
  }), _n.options = t, e.config.globalProperties.$uluModals = o, e.provide("uluModals", o), e.config.globalProperties.$uluModalsState = _n;
}
const qo = {
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
}, Ko = ["onClick"];
function Go(e, n, t, s, o, i) {
  const l = W("UluIcon");
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
        t.toast.icon ? (u(), w(l, {
          key: 0,
          icon: t.toast.icon
        }, null, 8, ["icon"])) : _("", !0)
      ])
    ], 2)) : _("", !0),
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
          }, p(t.toast.date), 3)) : _("", !0)
        ], 2)) : _("", !0),
        t.toast.description ? (u(), d("div", {
          key: 1,
          class: m(["toast__body", t.classes.body])
        }, p(t.toast.description), 3)) : _("", !0)
      ])
    ], 2),
    t.toast.actions?.length ? (u(), d("div", {
      key: 1,
      class: m(["toast__actions", t.classes.actions])
    }, [
      (u(!0), d(x, null, O(t.toast.actions, (r, a) => (u(), d("button", {
        key: a,
        class: m(["toast__action", t.classes.action]),
        onClick: (c) => i.handleAction(c, r)
      }, p(r.label), 11, Ko))), 128))
    ], 2)) : _("", !0),
    h("button", {
      class: m(["toast__close", t.classes.closeButton]),
      onClick: n[0] || (n[0] = (...r) => t.toast.close && t.toast.close(...r))
    }, [
      I(l, { icon: "type:close" })
    ], 2)
  ], 2);
}
const hs = /* @__PURE__ */ E(qo, [["render", Go]]), wn = {
  toastOptions: {
    /**
     * Component used to render the toast in the display
     */
    component: Ee(hs),
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
}, { assign: Ot } = Object;
let Zo = 0;
const ge = Kt({
  toasts: [],
  /**
   * Saveable 
   */
  pluginOptions: wn.pluginOptions,
  toastOptions: wn.toastOptions,
  setToastOptions(e) {
    return this.toastOptions = Ot({}, this.toastOptions, e), this.pluginOptions;
  },
  setPluginOptions(e) {
    return this.pluginOptions = Ot({}, this.pluginOptions, e), this.pluginOptions;
  },
  createToast(e) {
    const n = `toast-${++Zo}`;
    return Ot({}, this.toastOptions, e, {
      uid: n,
      close() {
        Lt.remove(n);
      }
    });
  }
}), Lt = {
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
}, Jo = {
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
function Qo(e, n, t, s, o, i) {
  return u(), w(ht, {
    to: o.pluginOptions.teleportTo
  }, [
    I(es, {
      class: m(["toast-container", i.classes]),
      name: "toast-animation",
      tag: "div"
    }, {
      default: S(() => [
        (u(!0), d(x, null, O(o.toasts, (l) => (u(), w(F(l.component), {
          key: l.uid,
          toast: l
        }, null, 8, ["toast"]))), 128))
      ]),
      _: 1
    }, 8, ["class"])
  ], 8, ["to"]);
}
const ei = /* @__PURE__ */ E(Jo, [["render", Qo]]);
function qf(e, n = {}) {
  const t = ge.setPluginOptions(n?.plugin);
  ge.setToastOptions(n?.toast), e.component(t.componentName, hs), e.component(t.componentNameDisplay, ei), e.config.globalProperties.$uluToast = Lt, e.provide("uluToast", Lt);
}
const ti = {
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
function ni(e) {
  const n = Object.assign({}, ti, e), t = R(null), s = R(n.initialValue), o = R(null);
  return (async () => {
    if (!ds()) return;
    await new Promise((f) => {
      document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", () => f()) : f();
    });
    const l = await import("./breakpoints-3ShTarRs.js"), { BreakpointManager: r } = l, a = Ee(new r(n.plugin));
    t.value = Ee(a);
    const c = () => {
      s.value = a.active, o.value = a.resizeDirection;
    };
    c(), n.onReady && n.onReady(a), a.onChange(c);
  })(), { breakpointManager: t, breakpointActive: s, breakpointDirection: o };
}
const si = {
  /**
   * Breakpoint for mobile down/max
   */
  breakpointMobile: "small",
  /**
   * Options to pass to useBreakpointManager()
   */
  managerOptions: {}
};
function Kf(e, n) {
  const t = R(!1), s = Object.assign({}, si, n), { breakpointMobile: o } = s, { onReady: i } = s.managerOptions, l = {
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
  }, r = Object.assign({}, s.managerOptions, l), {
    breakpointManager: a,
    breakpointActive: c,
    breakpointDirection: f
  } = ni(r);
  e.provide("uluBreakpointActive", b(() => c.value)), e.provide("uluBreakpointDirection", b(() => f.value)), e.provide("uluBreakpointManager", b(() => a.value)), e.provide("uluIsMobile", b(() => t.value));
}
const Ft = /* @__PURE__ */ new Set(), K = /* @__PURE__ */ new WeakMap(), be = /* @__PURE__ */ new WeakMap(), Q = /* @__PURE__ */ new WeakMap(), qe = /* @__PURE__ */ new WeakMap(), xt = /* @__PURE__ */ new WeakMap(), De = /* @__PURE__ */ new WeakMap(), pe = /* @__PURE__ */ new WeakMap(), ve = /* @__PURE__ */ new WeakMap(), Oe = /* @__PURE__ */ new WeakSet();
let Z, Qt = 0, en = 0;
const ue = "__aa_tgt", Ke = "__aa_del", ct = "__aa_new", ms = (e) => {
  const n = ri(e);
  n && n.forEach((t) => ai(t));
}, oi = (e) => {
  e.forEach((n) => {
    n.target === Z && ii(), K.has(n.target) && we(n.target);
  });
};
function gs(e) {
  const n = e.getBoundingClientRect(), t = Z?.clientWidth || 0, s = Z?.clientHeight || 0;
  return n.bottom < 0 || n.top > s || n.right < 0 || n.left > t;
}
function tn(e) {
  const n = qe.get(e);
  n?.disconnect();
  let t = K.get(e), s = 0;
  const o = 5;
  t || (t = je(e), K.set(e, t));
  const { offsetWidth: i, offsetHeight: l } = Z, a = [
    t.top - o,
    i - (t.left + o + t.width),
    l - (t.top + o + t.height),
    t.left - o
  ].map((f) => `${-1 * Math.floor(f)}px`).join(" "), c = new IntersectionObserver(() => {
    ++s > 1 && we(e);
  }, {
    root: Z,
    threshold: 1,
    rootMargin: a
  });
  c.observe(e), qe.set(e, c);
}
function we(e, n = !0) {
  clearTimeout(ve.get(e));
  const t = bt(e), s = n ? Ge(t) ? 500 : t.duration : 0;
  ve.set(e, setTimeout(async () => {
    const o = Q.get(e);
    try {
      await o?.finished, K.set(e, je(e)), tn(e);
    } catch {
    }
  }, s));
}
function ii() {
  clearTimeout(ve.get(Z)), ve.set(Z, setTimeout(() => {
    Ft.forEach((e) => rt(e, (n) => vs(() => we(n))));
  }, 100));
}
function li(e) {
  setTimeout(() => {
    De.set(e, setInterval(() => vs(we.bind(null, e)), 2e3));
  }, Math.round(2e3 * Math.random()));
}
function vs(e) {
  typeof requestIdleCallback == "function" ? requestIdleCallback(() => e()) : requestAnimationFrame(() => e());
}
let ae;
const ys = typeof window < "u" && "ResizeObserver" in window;
ys && (Z = document.documentElement, new MutationObserver(ms), ae = new ResizeObserver(oi), window.addEventListener("scroll", () => {
  en = window.scrollY, Qt = window.scrollX;
}), ae.observe(Z));
function ri(e) {
  return e.reduce((s, o) => [
    ...s,
    ...Array.from(o.addedNodes),
    ...Array.from(o.removedNodes)
  ], []).every((s) => s.nodeName === "#comment") ? !1 : e.reduce((s, o) => {
    if (s === !1)
      return !1;
    if (o.target instanceof Element) {
      if (Rt(o.target), !s.has(o.target)) {
        s.add(o.target);
        for (let i = 0; i < o.target.children.length; i++) {
          const l = o.target.children.item(i);
          if (l) {
            if (Ke in l)
              return !1;
            Rt(o.target, l), s.add(l);
          }
        }
      }
      if (o.removedNodes.length)
        for (let i = 0; i < o.removedNodes.length; i++) {
          const l = o.removedNodes[i];
          if (Ke in l)
            return !1;
          l instanceof Element && (s.add(l), Rt(o.target, l), be.set(l, [
            o.previousSibling,
            o.nextSibling
          ]));
        }
    }
    return s;
  }, /* @__PURE__ */ new Set());
}
function Rt(e, n) {
  !n && !(ue in e) ? Object.defineProperty(e, ue, { value: e }) : n && !(ue in n) && Object.defineProperty(n, ue, { value: e });
}
function ai(e) {
  var n, t;
  const s = e.isConnected, o = K.has(e);
  s && be.has(e) && be.delete(e), ((n = Q.get(e)) === null || n === void 0 ? void 0 : n.playState) !== "finished" && ((t = Q.get(e)) === null || t === void 0 || t.cancel()), ct in e ? Sn(e) : o && s ? ui(e) : o && !s ? di(e) : Sn(e);
}
function se(e) {
  return Number(e.replace(/[^0-9.\-]/g, ""));
}
function ci(e) {
  let n = e.parentElement;
  for (; n; ) {
    if (n.scrollLeft || n.scrollTop)
      return { x: n.scrollLeft, y: n.scrollTop };
    n = n.parentElement;
  }
  return { x: 0, y: 0 };
}
function je(e) {
  const n = e.getBoundingClientRect(), { x: t, y: s } = ci(e);
  return {
    top: n.top + s,
    left: n.left + t,
    width: n.width,
    height: n.height
  };
}
function ps(e, n, t) {
  let s = n.width, o = n.height, i = t.width, l = t.height;
  const r = getComputedStyle(e);
  if (r.getPropertyValue("box-sizing") === "content-box") {
    const c = se(r.paddingTop) + se(r.paddingBottom) + se(r.borderTopWidth) + se(r.borderBottomWidth), f = se(r.paddingLeft) + se(r.paddingRight) + se(r.borderRightWidth) + se(r.borderLeftWidth);
    s -= f, i -= f, o -= c, l -= c;
  }
  return [s, i, o, l].map(Math.round);
}
function bt(e) {
  return ue in e && pe.has(e[ue]) ? pe.get(e[ue]) : { duration: 250, easing: "ease-in-out" };
}
function bs(e) {
  if (ue in e)
    return e[ue];
}
function nn(e) {
  const n = bs(e);
  return n ? Oe.has(n) : !1;
}
function rt(e, ...n) {
  n.forEach((t) => t(e, pe.has(e)));
  for (let t = 0; t < e.children.length; t++) {
    const s = e.children.item(t);
    s && n.forEach((o) => o(s, pe.has(s)));
  }
}
function sn(e) {
  return Array.isArray(e) ? e : [e];
}
function Ge(e) {
  return typeof e == "function";
}
function ui(e) {
  const n = K.get(e), t = je(e);
  if (!nn(e))
    return K.set(e, t);
  if (gs(e)) {
    K.set(e, t), tn(e);
    return;
  }
  let s;
  if (!n)
    return;
  const o = bt(e);
  if (typeof o != "function") {
    let i = n.left - t.left, l = n.top - t.top;
    const r = n.left + n.width - (t.left + t.width);
    n.top + n.height - (t.top + t.height) == 0 && (l = 0), r == 0 && (i = 0);
    const [c, f, y, v] = ps(e, n, t), k = {
      transform: `translate(${i}px, ${l}px)`
    }, A = {
      transform: "translate(0, 0)"
    };
    c !== f && (k.width = `${c}px`, A.width = `${f}px`), y !== v && (k.height = `${y}px`, A.height = `${v}px`), s = e.animate([k, A], {
      duration: o.duration,
      easing: o.easing
    });
  } else {
    const [i] = sn(o(e, "remain", n, t));
    s = new Animation(i), s.play();
  }
  Q.set(e, s), K.set(e, t), s.addEventListener("finish", we.bind(null, e, !1), {
    once: !0
  });
}
function Sn(e) {
  ct in e && delete e[ct];
  const n = je(e);
  K.set(e, n);
  const t = bt(e);
  if (!nn(e))
    return;
  if (gs(e)) {
    tn(e);
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
    const [o] = sn(t(e, "add", n));
    s = new Animation(o), s.play();
  }
  Q.set(e, s), s.addEventListener("finish", we.bind(null, e, !1), {
    once: !0
  });
}
function kn(e, n) {
  var t;
  e.remove(), K.delete(e), be.delete(e), Q.delete(e), (t = qe.get(e)) === null || t === void 0 || t.disconnect(), setTimeout(() => {
    if (Ke in e && delete e[Ke], Object.defineProperty(e, ct, { value: !0, configurable: !0 }), n && e instanceof HTMLElement)
      for (const s in n)
        e.style[s] = "";
  }, 0);
}
function di(e) {
  var n;
  if (!be.has(e) || !K.has(e))
    return;
  const [t, s] = be.get(e);
  Object.defineProperty(e, Ke, { value: !0, configurable: !0 });
  const o = window.scrollX, i = window.scrollY;
  if (s && s.parentNode && s.parentNode instanceof Element ? s.parentNode.insertBefore(e, s) : t && t.parentNode ? t.parentNode.appendChild(e) : (n = bs(e)) === null || n === void 0 || n.appendChild(e), !nn(e))
    return kn(e);
  const [l, r, a, c] = hi(e), f = bt(e), y = K.get(e);
  (o !== Qt || i !== en) && fi(e, o, i, f);
  let v, k = {
    position: "absolute",
    top: `${l}px`,
    left: `${r}px`,
    width: `${a}px`,
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
    const [A, U] = sn(f(e, "remove", y));
    U?.styleReset !== !1 && (k = U?.styleReset || k, Object.assign(e.style, k)), v = new Animation(A), v.play();
  }
  Q.set(e, v), v.addEventListener("finish", () => kn(e, k), {
    once: !0
  });
}
function fi(e, n, t, s) {
  const o = Qt - n, i = en - t, l = document.documentElement.style.scrollBehavior;
  if (getComputedStyle(Z).scrollBehavior === "smooth" && (document.documentElement.style.scrollBehavior = "auto"), window.scrollTo(window.scrollX + o, window.scrollY + i), !e.parentElement)
    return;
  const a = e.parentElement;
  let c = a.clientHeight, f = a.clientWidth;
  const y = performance.now();
  function v() {
    requestAnimationFrame(() => {
      if (!Ge(s)) {
        const k = c - a.clientHeight, A = f - a.clientWidth;
        y + s.duration > performance.now() ? (window.scrollTo({
          left: window.scrollX - A,
          top: window.scrollY - k
        }), c = a.clientHeight, f = a.clientWidth, v()) : document.documentElement.style.scrollBehavior = l;
      }
    });
  }
  v();
}
function hi(e) {
  var n;
  const t = K.get(e), [s, , o] = ps(e, t, je(e));
  let i = e.parentElement;
  for (; i && (getComputedStyle(i).position === "static" || i instanceof HTMLBodyElement); )
    i = i.parentElement;
  i || (i = document.body);
  const l = getComputedStyle(i), r = !Q.has(e) || ((n = Q.get(e)) === null || n === void 0 ? void 0 : n.playState) === "finished" ? je(i) : K.get(i), a = Math.round(t.top - r.top) - se(l.borderTopWidth), c = Math.round(t.left - r.left) - se(l.borderLeftWidth);
  return [a, c, s, o];
}
function mi(e, n = {}) {
  if (ys && ae && !(window.matchMedia("(prefers-reduced-motion: reduce)").matches && !Ge(n) && !n.disrespectUserMotionPreference)) {
    Oe.add(e), getComputedStyle(e).position === "static" && Object.assign(e.style, { position: "relative" }), rt(e, we, li, (l) => ae?.observe(l)), Ge(n) ? pe.set(e, n) : pe.set(e, {
      duration: 250,
      easing: "ease-in-out",
      ...n
    });
    const i = new MutationObserver(ms);
    i.observe(e, { childList: !0 }), xt.set(e, i), Ft.add(e);
  }
  return Object.freeze({
    parent: e,
    enable: () => {
      Oe.add(e);
    },
    disable: () => {
      Oe.delete(e), rt(e, (s) => {
        const o = Q.get(s);
        try {
          o?.cancel();
        } catch {
        }
        Q.delete(s);
        const i = ve.get(s);
        i && clearTimeout(i), ve.delete(s);
        const l = De.get(s);
        l && clearInterval(l), De.delete(s);
      });
    },
    isEnabled: () => Oe.has(e),
    destroy: () => {
      Oe.delete(e), Ft.delete(e), pe.delete(e);
      const s = xt.get(e);
      s?.disconnect(), xt.delete(e), rt(e, (o) => {
        ae?.unobserve(o);
        const i = Q.get(o);
        try {
          i?.cancel();
        } catch {
        }
        Q.delete(o);
        const l = qe.get(o);
        l?.disconnect(), qe.delete(o);
        const r = De.get(o);
        r && clearInterval(r), De.delete(o);
        const a = ve.get(o);
        a && clearTimeout(a), ve.delete(o), K.delete(o), be.delete(o);
      });
    }
  });
}
function gi(e) {
  const n = R();
  let t;
  function s(o) {
    t && (o ? t.enable() : t.disable());
  }
  return vt(() => {
    gt((o) => {
      let i;
      n.value instanceof HTMLElement ? i = n.value : n.value && "$el" in n.value && n.value.$el instanceof HTMLElement && (i = n.value.$el), i && (t = mi(i, e || {}), o(() => {
        var l;
        (l = t?.destroy) === null || l === void 0 || l.call(t), t = void 0;
      }));
    });
  }), ts(() => {
    var o;
    (o = t?.destroy) === null || o === void 0 || o.call(t), t = void 0;
  }), [n, s];
}
function vi(e) {
  if (e) {
    if (e instanceof HTMLElement)
      return e;
    if (typeof e == "object" && "$el" in e)
      return e.$el;
  }
}
let yi = 0;
function Vt(e = "ulu-id") {
  const n = `${e}-${++yi}`;
  return typeof document < "u" && document.getElementById(n) ? generateUid(e) : n;
}
const pi = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  newId: Vt,
  refToElement: vi
}, Symbol.toStringTag, { value: "Module" })), bi = ["id", "aria-controls", "aria-expanded"], _i = ["id", "aria-hidden", "aria-labelledby"], Ht = {
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
    const t = e, s = n, o = b(() => typeof t.animate == "object" ? t.animate : {}), [i, l] = gi(o);
    vt(() => {
      l(!!t.animate);
    }), Xe(() => t.animate, (A) => {
      l(!!A);
    });
    const r = b(() => t.modelValue !== void 0), a = R(t.startOpen), c = b({
      get() {
        return r.value ? t.modelValue : a.value;
      },
      set(A) {
        r.value ? s("update:modelValue", A) : a.value = A;
      }
    }), f = R(Vt("ulu-collapsible-trigger")), y = R(Vt("ulu-collapsible-content"));
    function v() {
      c.value = !c.value;
    }
    function k() {
      t.closeOnEscape && c.value && (c.value = !1);
    }
    return (A, U) => (u(), d("div", {
      ref_key: "container",
      ref: i,
      onKeydown: Zn(k, ["esc"]),
      class: m([e.classes.container, c.value ? e.classes.containerOpen : e.classes.containerClosed])
    }, [
      h("button", {
        class: m(e.classes.trigger),
        id: f.value,
        "aria-controls": y.value,
        "aria-expanded": c.value,
        onClick: v
      }, [
        g(A.$slots, "trigger", { isOpen: c.value }, () => [
          $(p(e.triggerText), 1)
        ])
      ], 10, bi),
      c.value ? (u(), d("div", {
        key: 0,
        class: m(e.classes.content),
        tabindex: "-1",
        id: y.value,
        "aria-hidden": !c.value,
        "aria-labelledby": f.value
      }, [
        g(A.$slots, "default", {
          isOpen: c.value,
          toggle: v
        })
      ], 10, _i)) : _("", !0)
    ], 34));
  }
}, $n = {
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
    const t = e, { resolvedModifiers: s } = le({ props: t, baseClass: "accordion" }), o = b(() => {
      const i = { ...t.classes };
      return i.container = [i.container, s.value], i;
    });
    return (i, l) => (u(), w(Ht, {
      "model-value": e.modelValue,
      "start-open": e.startOpen,
      "trigger-text": e.triggerText,
      classes: o.value,
      animate: e.animate,
      "onUpdate:modelValue": l[0] || (l[0] = (r) => i.$emit("update:modelValue", r))
    }, {
      trigger: S(({ isOpen: r }) => [
        g(i.$slots, "trigger", { isOpen: r }, () => [
          (u(), w(F(e.triggerTextElement), null, {
            default: S(() => [
              $(p(e.triggerText), 1)
            ]),
            _: 1
          }))
        ]),
        g(i.$slots, "icon", { isOpen: r }, () => [
          h("span", {
            class: m(["accordion__icon", e.classes.icon])
          }, [
            I(N, {
              icon: r ? "type:collapse" : "type:expand",
              style: { display: "inline" }
            }, null, 8, ["icon"])
          ], 2)
        ])
      ]),
      default: S(({ isOpen: r, toggle: a }) => [
        g(i.$slots, "default", {
          isOpen: r,
          toggle: a
        })
      ]),
      _: 3
    }, 8, ["model-value", "start-open", "trigger-text", "classes", "animate"]));
  }
}, _s = {
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
    const n = e, { resolvedModifiers: t } = le({ props: n, baseClass: "tag" });
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
      }, null, 8, ["icon"])) : _("", !0),
      g(s.$slots, "default", {}, () => [
        h("span", null, p(e.text), 1)
      ])
    ], 2));
  }
}, wi = {
  name: "UluMenu",
  components: {
    UluIcon: N,
    UluTag: _s
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
function Si(e, n, t, s, o, i) {
  const l = W("UluIcon"), r = W("UluTag"), a = W("UluMenu", !0), c = Gn("ulu-tooltip");
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
      Re((u(), w(F(f.to || f.path ? "router-link" : f.click ? "button" : "a"), de({ ref_for: !0 }, {
        ...f.to || f.path ? {
          to: f.to || f.path,
          activeClass: t.classes.linkActive || null,
          exactActiveClass: t.classes.linkExactActive || null
        } : {},
        ...f.href ? { href: f.href || "#" } : {}
      }, {
        onClick: (v) => {
          i.handleItemClick(v, f);
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
            f.icon ? (u(), w(l, {
              key: 0,
              icon: f.icon,
              class: m([t.classes.linkIcon, f?.classes?.linkIcon])
            }, null, 8, ["icon", "class"])) : _("", !0),
            h("span", {
              class: m([t.classes.linkText, f?.classes?.linkText])
            }, p(f.title), 3),
            f.tag ? (u(), w(r, de({
              key: 1,
              ref_for: !0
            }, f.tag), null, 16)) : _("", !0)
          ])
        ]),
        _: 2
      }, 1040, ["onClick", "class", "aria-label", "id"])), [
        [c, t.iconOnly ? f.title : f.tooltip || null]
      ]),
      !t.noChildren && f?.children?.length ? (u(), w(a, {
        key: 0,
        iconOnly: t.iconOnly,
        classes: t.classes,
        items: f.children
      }, null, 8, ["iconOnly", "classes", "items"])) : _("", !0)
    ], 2))), 128))
  ], 2)) : _("", !0);
}
const ws = /* @__PURE__ */ E(wi, [["render", Si]]), ki = {
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
    const n = e, t = b(() => ({
      hanging: n.hanging,
      compact: n.compact
    })), { resolvedModifiers: s } = le({
      props: n,
      internal: t,
      baseClass: "menu-stack"
    });
    return (o, i) => (u(), w(F(e.containerElement), {
      class: m(["menu-stack", C(s)])
    }, {
      default: S(() => [
        I(ws, {
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
}, Gf = {
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
    return (n, t) => (u(), w(yt, { classes: e.popoverClasses }, {
      trigger: S(({ isOpen: s }) => [
        g(n.$slots, "trigger", { isOpen: s }, () => [
          h("span", null, p(e.triggerText), 1),
          I(N, {
            class: "button__icon",
            icon: "type:dropdownExpand",
            style: H({ transform: s ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.2s" })
          }, null, 8, ["style"])
        ])
      ]),
      default: S(() => [
        I(ki, { items: e.items }, null, 8, ["items"])
      ]),
      _: 3
    }, 8, ["classes"]));
  }
}, on = R(!1), ut = {
  start: [],
  end: []
};
function ln() {
  window.removeEventListener("resize", ln), on.value = !0, ut.start.forEach((e) => e());
}
function $i() {
  on.value = !1, ut.end.forEach((e) => e()), window.addEventListener("resize", ln);
}
window.addEventListener("resize", ln), window.addEventListener("resize", pt($i, 300));
function Cn(e, n) {
  return e.push(n), () => {
    const t = e.findIndex((s) => s === n);
    t > -1 && e.splice(t);
  };
}
function Ci() {
  return {
    resizing: on,
    onResizeStart(e) {
      return Cn(ut.start, e);
    },
    onResizeEnd(e) {
      return Cn(ut.end, e);
    }
  };
}
const Ai = {
  uluCore: "Core",
  uluIsMobile: "Breakpoints",
  uluBreakpointActive: "Breakpoints",
  uluBreakpointDirection: "Breakpoints",
  uluBreakpointManager: "Breakpoints",
  uluModals: "Modals",
  uluToast: "Toast"
}, An = {};
function Ti(e) {
  const n = mt(e, An);
  if (n === An) {
    const t = Ai[e] || "", s = t ? ` from the '${t}' plugin` : "", o = t ? "Please install missing plugin." : "";
    throw new Error(`Required inject: '${e}'${s} was not provided. ${o}`);
  }
  return n;
}
function Zf(e, n) {
  const t = us(), s = no(), o = b(() => {
    const c = parseInt(t.query.page || "1", 10);
    return isNaN(c) || c < 1 ? 1 : c;
  }), i = b(() => !e.value || e.value.length === 0 ? 1 : Math.ceil(e.value.length / n));
  Xe(i, (c) => {
    o.value > c && s.push({ query: { ...t.query, page: c } });
  });
  const l = b(() => {
    const c = (o.value - 1) * n, f = c + n;
    return e.value.slice(c, f);
  }), r = b(() => {
    if (i.value <= 1)
      return null;
    const c = {
      pages: {}
    }, f = o.value, y = i.value, v = 5, k = (j) => ({ query: { ...t.query, page: j } });
    f > 1 && (c.first = { href: k(1) }, c.previous = { href: k(f - 1) }), f < y && (c.next = { href: k(f + 1) }, c.last = { href: k(y) });
    let A, U;
    if (y <= v)
      A = 1, U = y;
    else {
      const j = Math.floor(v / 2), ne = Math.ceil(v / 2) - 1;
      f <= j ? (A = 1, U = v) : f + ne >= y ? (A = y - v + 1, U = y) : (A = f - j, U = f + ne);
    }
    for (let j = A; j <= U; j++)
      c.pages[j] = { href: k(j) };
    return c;
  }), a = b(() => {
    const c = { previous: !1, next: !1 };
    if (!r.value || !r.value.pages) return c;
    const f = Object.keys(r.value.pages).map(Number);
    if (f.length === 0) return c;
    const y = Math.min(...f), v = Math.max(...f);
    return y > 1 && (c.previous = !0), v < i.value && (c.next = !0), c;
  });
  return {
    currentPage: o,
    totalPages: i,
    paginatedItems: l,
    pagerItems: r,
    pagerEllipses: a
  };
}
function Nt(e, n, t) {
  typeof e === "function" && (!t || t !== "titleTemplate" && !(t[0] === "o" && t[1] === "n")) && (e = e());
  let o;
  if (n && (o = n(t, e)), Array.isArray(o))
    return o.map((i) => Nt(i, n));
  if (o?.constructor === Object) {
    const i = {};
    for (const l of Object.keys(o))
      i[l] = Nt(o[l], n, l);
    return i;
  }
  return o;
}
const Oi = (e, n) => Gs(n) ? it(n) : n, xi = "usehead";
function Ri() {
  if (Zs()) {
    const e = mt(xi);
    if (!e)
      throw new Error("useHead() was called without provide context, ensure you call it through the setup() function.");
    return e;
  }
  throw new Error("useHead() was called without provide context, ensure you call it through the setup() function.");
}
function Ei(e, n = {}) {
  const t = n.head || Ri();
  return t.ssr ? t.push(e || {}, n) : ji(t, e, n);
}
function ji(e, n, t = {}) {
  const s = R(!1);
  let o;
  return gt(() => {
    const l = s.value ? {} : Nt(n, Oi);
    o ? o.patch(l) : o = e.push(l, t);
  }), Js() && (ts(() => {
    o.dispose();
  }), Qs(() => {
    s.value = !0;
  }), eo(() => {
    s.value = !1;
  })), o;
}
function _t(e, n) {
  let s = (e?.meta || {}).title;
  return typeof s == "function" && (s = s(n || e)), s;
}
function Ii(e, n) {
  const s = Object.assign({}, {
    qualifier(l, r) {
      return r ? an(l) : Ss(l);
    },
    sort: un,
    item: {},
    includeChildren: !1
  }, n), o = (l, r) => r ? `${r}/${l.path}` : l.path, i = (l, r = null) => l.filter((a) => s.qualifier(a, r)).map((a) => {
    const c = a.children ? rn(a.children) : a, f = a.children ? a.children.filter((v) => v.path !== "") : !1, y = wt(c, o(a, r), s.item);
    return s.includeChildren && f.length && (y.children = i(f, y.path)), y;
  }).sort(s.sort);
  return i(e);
}
function Bi(e) {
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
function zi(e, n, t) {
  const o = Object.assign({}, {
    includeIndex: !1,
    item: {},
    sort: un
  }, t), i = e.find((c) => c.path !== "/" && n.includes(c.path)), l = (c, f, y) => {
    if (c.children) {
      const v = c.children.find((k) => k.path.includes(n));
      if (v)
        return l(v, c, y + v.path);
    }
    return { route: f, path: y };
  }, { route: r, path: a } = l(i, i, i.path);
  return r.children ? r.children.filter($s(o.includeIndex)).map((c) => wt(c, `${a}/${c.path}`, o.item)).sort(o.sort) : (console.warn("Unable to build menu for:", n), []);
}
function rn(e) {
  return e.find((n) => n.path === "");
}
function wt(e, n = e.path, t) {
  const o = Object.assign({}, {
    indexMeta: !0,
    modify: null
  }, t);
  let i = Object.assign({}, e.meta);
  o.indexMeta && e.children && (i = Object.assign({}, i, rn(e.children)?.meta));
  const l = { ...e, meta: i }, r = {
    path: n,
    title: _t(l, e) || "Missing Title",
    weight: i?.weight || 0,
    meta: i
  };
  return o.modify && o.modify(r, e), r;
}
function an(e) {
  return !e.path.includes("/:");
}
function Ss(e) {
  const n = e.path.match(/\//g) || [];
  return an(e) && n.length === 1;
}
function Ui(e, n) {
  const { target: t } = n, s = t.closest("a");
  if (s) {
    let o = s.getAttribute("href");
    o.startsWith("/") && (e.push(o), n.preventDefault());
  }
}
function ks(e, n = cn(e)) {
  return n?.children;
}
function cn(e, n) {
  const t = e.matched.length, s = t - 2;
  return n ? t > 1 ? e.matched[0] : null : s < 0 ? null : e.matched[s];
}
function $s(e) {
  return (n) => e || n.path !== "";
}
function un(e, n) {
  return e?.weight - n?.weight;
}
function Mi(e, n) {
  const s = Object.assign({}, {
    parent: null,
    includeIndex: !1,
    item: {},
    sort: un
  }, n), o = s.parent || cn(e);
  return (ks(e, o) || []).filter($s(s.includeIndex)).map((l) => wt(l, `${o.path}/${l.path}`, s.item)).sort(s.sort);
}
function Pi(e) {
  const { matched: n, path: t } = e;
  let s;
  return n.reduce((i, l, r) => {
    if (l.meta?.breadcrumb === !1 || l.path === s)
      return i;
    const a = r === n.length - 1, c = _t(l, e) || "Missing Title";
    return i.push({
      title: c,
      to: { path: a ? t : l.path },
      current: a
    }), s = l.path, i;
  }, []);
}
const Li = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  $createBreadcrumb: Pi,
  $createSectionMenu: Mi,
  $getParentRoute: cn,
  $getRouteChildren: ks,
  createBaseMenu: Ii,
  createMenuItem: wt,
  createSectionMenu: zi,
  flattenMenu: Bi,
  getChildIndexRoute: rn,
  getRouteTitle: _t,
  isStaticBaseRoute: Ss,
  isStaticRoute: an,
  nativeLinkRouter: Ui
}, Symbol.toStringTag, { value: "Module" })), Et = Kt({});
function Jf(e = {}) {
  const {
    title: n,
    titleTemplate: t = "%s",
    useRoute: s = us,
    useHead: o = Ei
  } = e, i = s(), l = i.path;
  if (n !== void 0) {
    gt(() => {
      Et[l] = C(n);
    }), ns(() => {
      delete Et[l];
    });
    return;
  }
  const r = b(() => {
    const a = Et[i.path], c = _t(i, i), f = a || c;
    return f ? t.replace("%s", f) : "App";
  });
  o({
    title: r
  });
}
const Fi = { class: "layout-flex-baseline" }, Vi = { class: "type-word-break" }, Qf = {
  __name: "UluOverflowPopover",
  props: {
    /**
     * Default icon for overflow popover trigger
     */
    triggerIcon: String
  },
  setup(e) {
    const { resizing: n, onResizeEnd: t } = Ci(), s = R(null), o = R(!1), i = () => {
      Jn(() => {
        const r = s.value;
        o.value = r.offsetWidth < r.scrollWidth;
      });
    }, l = t(i);
    return vt(i), ns(l), (r, a) => (u(), d("div", Fi, [
      h("div", {
        class: "type-truncate",
        ref_key: "text",
        ref: s
      }, [
        g(r.$slots, "default")
      ], 512),
      o.value && !C(n) ? (u(), w(yt, {
        key: 0,
        triggerAlt: "Show Full Text",
        size: "large"
      }, {
        trigger: S(() => [
          I(N, {
            icon: e.triggerIcon || "type:ellipsis"
          }, null, 8, ["icon"])
        ]),
        default: S(() => [
          h("div", Vi, [
            g(r.$slots, "default")
          ])
        ]),
        _: 3
      })) : _("", !0)
    ]));
  }
}, eh = {
  __name: "UluTab",
  setup(e) {
    return (n, t) => (u(), w(C(so), null, {
      default: S((s) => [
        g(n.$slots, "default", oe(ie(s)))
      ]),
      _: 3
    }));
  }
}, th = /* @__PURE__ */ Object.assign({
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
    return (n, t) => (u(), w(C(oo), {
      defaultIndex: e.defaultIndex,
      vertical: e.vertical
    }, {
      default: S((s) => [
        h("div", {
          class: m(["tabs", {
            "tabs--vertical": e.vertical
          }])
        }, [
          g(n.$slots, "default", oe(ie(s)))
        ], 2)
      ]),
      _: 3
    }, 8, ["defaultIndex", "vertical"]));
  }
}), nh = {
  __name: "UluTabList",
  setup(e) {
    return (n, t) => (u(), w(C(io), { class: "tabs__tablist" }, {
      default: S(() => [
        g(n.$slots, "default")
      ]),
      _: 3
    }));
  }
}, sh = {
  __name: "UluTabPanel",
  setup(e) {
    return (n, t) => (u(), w(C(lo), null, {
      default: S((s) => [
        g(n.$slots, "default", oe(ie(s)))
      ]),
      _: 3
    }));
  }
}, oh = {
  __name: "UluTabPanels",
  setup(e) {
    return (n, t) => (u(), w(C(ro), null, {
      default: S((s) => [
        g(n.$slots, "default", oe(ie(s)))
      ]),
      _: 3
    }));
  }
}, Hi = {
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
    const { resolvedModifiers: n } = le({ props: e, baseClass: "button" });
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
      return this.to ? Ye : this.href ? "a" : "button";
    },
    attrs() {
      const { to: e, href: n, download: t, target: s } = this, o = e ? { to: e } : n ? { href: n } : {};
      return n && (s && (o.target = s), t && (o.download = typeof t == "string" ? t : !0)), o;
    }
  }
}, Ni = { key: 1 };
function Di(e, n, t, s, o, i) {
  const l = W("UluIcon");
  return u(), w(F(i.element), de({
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
      t.icon && (t.iconBefore || t.iconOnly) ? (u(), w(l, {
        key: 0,
        icon: t.icon,
        class: "button__icon"
      }, null, 8, ["icon"])) : _("", !0),
      (e.$slots.default || t.text) && !t.iconOnly ? (u(), d("span", Ni, [
        g(e.$slots, "default", {}, () => [
          $(p(t.text), 1)
        ])
      ])) : _("", !0),
      t.icon && !t.iconBefore && !t.iconOnly ? (u(), w(l, {
        key: 2,
        icon: t.icon,
        class: "button__icon"
      }, null, 8, ["icon"])) : _("", !0),
      g(e.$slots, "after")
    ]),
    _: 3
  }, 16, ["class", "aria-label"]);
}
const Wi = /* @__PURE__ */ E(Hi, [["render", Di]]), Xi = {
  name: "UluAlert",
  components: {
    UluButton: Wi,
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
    const { resolvedModifiers: n } = le({
      props: e,
      baseClass: "callout",
      internal: b(() => ({
        [e.type]: e.type,
        compact: e.compact
      }))
    });
    return { resolvedModifiers: n };
  }
}, Yi = { class: "layout-flex" }, qi = { class: "type-small" }, Ki = {
  key: 0,
  class: "margin-left-auto align-self-center"
};
function Gi(e, n, t, s, o, i) {
  const l = W("UluIcon");
  return u(), d("div", {
    class: m(["callout", s.resolvedModifiers])
  }, [
    h("div", Yi, [
      I(l, {
        class: m(["type-large margin-right-small", `color-${t.type}`]),
        icon: t.icon || `type:${t.type}`
      }, null, 8, ["class", "icon"]),
      h("div", qi, [
        h("div", null, [
          g(e.$slots, "title", {}, () => [
            h("strong", null, p(t.title), 1)
          ])
        ]),
        h("div", null, [
          g(e.$slots, "description", {}, () => [
            $(p(t.description), 1)
          ])
        ])
      ]),
      e.$slots.action ? (u(), d("div", Ki, [
        g(e.$slots, "action")
      ])) : _("", !0)
    ])
  ], 2);
}
const ih = /* @__PURE__ */ E(Xi, [["render", Gi]]), Zi = ["aria-hidden"], Ji = {
  key: 2,
  class: "hidden-visually"
}, Qi = {
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
    const n = e, t = b(() => !!(n.to || n.click)), s = b(() => {
      const { click: o, to: i, href: l } = n;
      return o ? "button" : i ? Ye : l ? "a" : "span";
    });
    return (o, i) => (u(), w(F(s.value), {
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
          }, p(e.text), 9, Zi)) : g(o.$slots, "default", { key: 1 }),
          e.alt ? (u(), d("span", Ji, p(e.alt), 1)) : _("", !0)
        ], 2)
      ]),
      _: 3
    }, 8, ["class", "to", "href", "onClick"]));
  }
}, el = { class: "badge-stack" }, lh = {
  __name: "UluBadgeStack",
  props: {
    /**
     * Array of props for each badge
     */
    items: Array
  },
  setup(e) {
    return (n, t) => (u(), d("ul", el, [
      (u(!0), d(x, null, O(e.items, (s, o) => (u(), d("li", {
        class: "badge-stack__item",
        key: o
      }, [
        I(Qi, de({ ref_for: !0 }, s), null, 16)
      ]))), 128))
    ]));
  }
}, tl = {
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
    const { resolvedModifiers: n } = le({ props: e, baseClass: "button-verbose" });
    return { resolvedModifiers: n };
  },
  computed: {
    element() {
      return this.to ? Ye : this.href ? "a" : "button";
    },
    attrs() {
      const { to: e, href: n, download: t, target: s } = this, o = e ? { to: e } : n ? { href: n } : {};
      return n && (s && (o.target = s), t && (o.download = typeof t == "string" ? t : !0)), o;
    }
  }
}, nl = {
  key: 1,
  class: "button-verbose__body"
};
function sl(e, n, t, s, o, i) {
  const l = W("UluIcon");
  return u(), w(F(i.element), de({
    class: ["button-verbose", [
      {
        "button-verbose--inline": t.inline,
        "button-verbose--full-width": t.fullWidth
      },
      s.resolvedModifiers
    ]]
  }, i.attrs), {
    default: S(() => [
      e.$slots.title || t.title ? (u(), w(F(t.titleElement), {
        key: 0,
        class: "button-verbose__title"
      }, {
        default: S(() => [
          g(e.$slots, "title", {}, () => [
            $(p(t.title), 1)
          ])
        ]),
        _: 3
      })) : _("", !0),
      e.$slots.default || t.body ? (u(), d("span", nl, [
        g(e.$slots, "default", {}, () => [
          $(p(t.body), 1)
        ])
      ])) : _("", !0),
      t.icon ? (u(), w(l, {
        key: 2,
        icon: t.icon,
        class: "button-verbose__icon",
        "aria-hidden": "true"
      }, null, 8, ["icon"])) : _("", !0)
    ]),
    _: 3
  }, 16, ["class"]);
}
const rh = /* @__PURE__ */ E(tl, [["render", sl]]), ol = {
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
    const { resolvedModifiers: n } = le({ props: e, baseClass: "callout" });
    return { resolvedModifiers: n };
  }
};
function il(e, n, t, s, o, i) {
  return u(), d("div", {
    class: m(["callout", [s.resolvedModifiers, { "full-height": t.fullHeight }]])
  }, [
    g(e.$slots, "default")
  ], 2);
}
const ah = /* @__PURE__ */ E(ol, [["render", il]]), ll = { class: "card__body" }, rl = { class: "card__main" }, al = ["href", "target"], cl = {
  key: 0,
  class: "card__aside"
}, ul = ["src", "alt"], dl = {
  key: 1,
  class: "card__footer"
}, ch = {
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
    const t = e, s = n, o = Qn();
    t.proxyClick && (t.to || t.href) && console.warn("UluCard: 'proxyClick' is ignored when 'to' or 'href' are present."), (t.titleTo || t.titleHref) && (t.to || t.href) && console.warn("UluCard: 'titleTo'/'titleHref' should not be used with 'to'/'href'.");
    const i = R(null), l = R(null), { resolvedModifiers: r } = le({ props: t, baseClass: "card" }), a = R(null), c = R(!1), f = b(() => t.proxyClick && !t.to && !t.href), y = b(() => f.value && (t.titleTo || t.titleHref)), v = b(() => f.value && !y.value), k = b(() => f.value || null), A = b(() => ({
      selectorPrevent: "input, select, textarea, button, a, [tabindex='-1']",
      mousedownDurationPrevent: 250,
      ...t.proxyClickOptions
    })), U = b(() => f.value ? "pointer" : null), j = b(() => t.to ? Ye : t.href ? "a" : t.cardElement);
    function ne({ target: q, timeStamp: ee }) {
      if (!k.value) return;
      const { selectorPrevent: G } = A.value;
      c.value = !1, q.closest(G) || (c.value = !0, a.value = ee);
    }
    function $e({ timeStamp: q }) {
      if (!k.value || !c.value) return;
      const { mousedownDurationPrevent: ee } = A.value;
      if (q - a.value < ee) {
        if (y.value)
          l.value?.click();
        else if (v.value) {
          const G = i.value?.querySelector("[data-ulu-card-proxy-target]");
          G ? G.click() : s("proxy-click");
        }
      }
      c.value = !1;
    }
    return (q, ee) => (u(), w(F(j.value), {
      ref_key: "cardRoot",
      ref: i,
      class: m(["card", [
        {
          "card--horizontal": e.horizontal || e.horizontalCenter,
          "card--horizontal-center": e.horizontalCenter,
          "card--overlay": e.overlay
        },
        C(r)
      ]]),
      onMousedown: ne,
      onMouseup: $e,
      style: H({ cursor: U.value }),
      target: e.target,
      to: e.to,
      href: e.href,
      "data-ulu-proxy-click-init": k.value
    }, {
      default: S(() => [
        h("div", ll, [
          h("div", rl, [
            (u(), w(F(e.titleElement), {
              class: m(["card__title", e.classes.title])
            }, {
              default: S(() => [
                e.titleTo ? (u(), w(C(Ye), {
                  key: 0,
                  class: "card__title-link",
                  to: e.titleTo,
                  ref_key: "link",
                  ref: l
                }, {
                  default: S(() => [
                    g(q.$slots, "title", {}, () => [
                      $(p(e.title), 1)
                    ])
                  ]),
                  _: 3
                }, 8, ["to"])) : e.titleHref ? (u(), d("a", {
                  key: 1,
                  class: "card__title-link",
                  href: e.titleHref,
                  target: e.titleTarget,
                  ref_key: "link",
                  ref: l
                }, [
                  g(q.$slots, "title", {}, () => [
                    $(p(e.title), 1)
                  ])
                ], 8, al)) : g(q.$slots, "title", { key: 2 }, () => [
                  $(p(e.title), 1)
                ])
              ]),
              _: 3
            }, 8, ["class"])),
            g(q.$slots, "body")
          ]),
          C(o).aside ? (u(), d("div", cl, [
            g(q.$slots, "aside")
          ])) : _("", !0)
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
            }, null, 8, ul)
          ])
        ], 2)) : _("", !0),
        C(o).footer ? (u(), d("div", dl, [
          g(q.$slots, "footer")
        ])) : _("", !0)
      ]),
      _: 3
    }, 40, ["class", "style", "target", "to", "href", "data-ulu-proxy-click-init"]));
  }
}, uh = {
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
    const n = e, t = b(() => ({
      inline: n.inline,
      "inline-all": n.inlineAll,
      table: n.table,
      separated: n.separated,
      "separated-first": n.separatedFirst,
      "separated-last": n.separatedLast,
      compact: n.compact
    })), { resolvedModifiers: s } = le({
      props: n,
      internal: t,
      baseClass: "definition-list"
    });
    return (o, i) => (u(), d("dl", {
      class: m(["definition-list", [C(s), e.classes.list]])
    }, [
      (u(!0), d(x, null, O(e.items, (l, r) => (u(), d("div", {
        key: r,
        class: m(e.classes.item)
      }, [
        h("dt", {
          class: m(e.classes.term)
        }, [
          g(o.$slots, "term", {
            item: l,
            index: r
          }, () => [
            $(p(l.term), 1)
          ])
        ], 2),
        h("dd", {
          class: m(e.classes.description)
        }, [
          g(o.$slots, "description", {
            item: l,
            index: r
          }, () => [
            $(p(l.description), 1)
          ])
        ], 2)
      ], 2))), 128))
    ], 2));
  }
}, fl = ["href", "target"], hl = { class: "external-link__text" }, dh = {
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
      h("span", hl, [
        g(n.$slots, "default", {}, () => [
          $(p(e.text), 1)
        ])
      ]),
      I(N, {
        class: "external-link__icon margin-left-small-x display-inline",
        icon: e.icon || "type:externalLink"
      }, null, 8, ["icon"])
    ], 8, fl));
  }
}, fh = {
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
    const n = e, t = b(() => n.ordered || n.forceOrdered ? "ol" : "ul");
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
        (u(!0), d(x, null, O(e.items, (i, l) => (u(), d("li", {
          key: l,
          class: m(e.classes.listItem)
        }, [
          g(s.$slots, "default", {
            item: i,
            index: l
          }, () => [
            $(p(i), 1)
          ])
        ], 2))), 128))
      ]),
      _: 3
    }, 8, ["class", "style", "reversed", "start"]));
  }
}, ml = {}, gl = { id: "main-content" };
function vl(e, n) {
  return u(), d("main", gl, [
    g(e.$slots, "default")
  ]);
}
const hh = /* @__PURE__ */ E(ml, [["render", vl]]), yl = { class: "spoke-spinner__spinner" }, mh = {
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
      h("div", yl, [
        (u(), d(x, null, O(12, (s) => h("div", { key: s })), 64))
      ])
    ], 2));
  }
}, pl = ["role", "aria-labelledby"], bl = ["id"], _l = { class: "menu-stack__list" }, wl = { class: "menu-stack__selectable" }, Sl = ["type", "id", "name", "value", "checked", "onChange"], kl = ["for"], Cs = {
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
    const t = e, s = n, o = b(() => t.legend ? t.legend.toLowerCase().replace(/\s+/g, "-") : `menu-${Math.random().toString(36).substring(7)}`), i = b(() => o.value ? `${o.value}-legend` : null), l = b(() => t.type === "radio" ? "radiogroup" : "group"), r = (f) => `${o.value}-${f.uid}`, a = (f) => t.type === "radio" ? t.modelValue === f.uid : Array.isArray(t.modelValue) ? t.modelValue.includes(f.uid) : t.type === "checkbox" && f.checked || !1, c = (f, y) => {
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
      role: l.value,
      "aria-labelledby": i.value
    }, [
      e.legend ? (u(), d("div", {
        key: 0,
        id: i.value,
        class: "hidden-visually"
      }, p(e.legend), 9, bl)) : _("", !0),
      h("ul", _l, [
        (u(!0), d(x, null, O(e.options, (v) => (u(), d("li", {
          class: "menu-stack__item",
          key: v.uid
        }, [
          h("div", wl, [
            h("input", {
              type: e.type,
              id: r(v),
              name: o.value,
              value: v.uid,
              checked: a(v),
              onChange: (k) => c(v, k)
            }, null, 40, Sl),
            h("label", {
              for: r(v)
            }, [
              g(f.$slots, "default", { option: v }, () => [
                $(p(v?.label || v?.title || v?.text), 1)
              ])
            ], 8, kl)
          ])
        ]))), 128))
      ])
    ], 10, pl));
  }
}, $l = ["href", "download"], Cl = { class: "margin-left-small-x" }, gh = {
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
    const n = e, t = b(() => typeof window > "u" ? "" : window.URL.createObjectURL(n.file)), s = b(() => {
      const { size: o } = n.file, i = o / 1e6, l = o / 1e3, r = (a) => parseFloat(a.toFixed(2));
      return i > 1 ? `${r(i)}Mb` : l > 1 ? `${r(l)}Kb` : `${r(o)}B`;
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
        I(N, {
          class: "ui-icon",
          icon: e.icon
        }, null, 8, ["icon"]),
        h("span", Cl, [
          $(p(e.file.name) + " ", 1),
          e.noFileSize ? _("", !0) : (u(), w(_s, {
            key: 0,
            text: s.value,
            small: "",
            outline: ""
          }, null, 8, ["text"]))
        ])
      ])
    ], 8, $l));
  }
}, Al = { class: "site-form__item site-form__item--file" }, Tl = ["for"], Ol = ["multiple", "id"], vh = {
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
      let l = 0;
      return () => `file-input-id-${++l}`;
    })(), s = n, o = t(), i = (l) => {
      s("file-change", l.target.files);
    };
    return (l, r) => (u(), d("div", Al, [
      h("label", {
        class: m({ "hidden-visually": e.labelHidden }),
        for: C(o)
      }, [
        g(l.$slots, "label", {}, () => [
          $(p(e.label), 1)
        ])
      ], 10, Tl),
      h("input", de({
        type: "file",
        onChange: i,
        multiple: e.multiple,
        id: C(o)
      }, e.inputAttrs), null, 16, Ol)
    ]));
  }
}, yh = {
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
      }, null, 8, ["icon"])) : _("", !0),
      g(n.$slots, "default")
    ], 2));
  }
}, xl = { class: "site-form__item site-form__item--select" }, Rl = ["for"], El = ["id", "value"], jl = ["value"], ph = {
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
    return (s, o) => (u(), d("div", xl, [
      h("label", {
        class: m({ "hidden-visually": e.labelHidden }),
        for: C(t)
      }, [
        g(s.$slots, "default", {}, () => [
          $(p(e.label), 1)
        ])
      ], 10, Rl),
      h("select", {
        id: C(t),
        value: e.modelValue,
        onInput: o[0] || (o[0] = (i) => s.$emit("update:modelValue", i.target.value))
      }, [
        o[1] || (o[1] = h("option", {
          disabled: "",
          value: ""
        }, "Please select one", -1)),
        (u(!0), d(x, null, O(e.options, (i, l) => (u(), d("option", {
          key: l,
          value: i.value
        }, p(i.text), 9, jl))), 128))
      ], 40, El)
    ]));
  }
}, Il = { class: "site-form__item site-form__item--text" }, Bl = ["for"], zl = ["value", "id"], bh = {
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
    return (s, o) => (u(), d("div", Il, [
      h("label", {
        class: m({ "hidden-visually": e.labelHidden }),
        for: C(t)
      }, [
        g(s.$slots, "default", {}, () => [
          $(p(e.label), 1)
        ])
      ], 10, Bl),
      h("input", {
        type: "text",
        value: e.modelValue,
        onInput: o[0] || (o[0] = (i) => s.$emit("update:modelValue", i.target.value)),
        id: C(t)
      }, null, 40, zl)
    ]));
  }
}, Ul = { class: "form-theme search-form type-small" }, Ml = { class: "search-form__field" }, Pl = ["placeholder"], Ll = {
  class: "search-form__submit button button--primary",
  "aria-label": "Submit Search"
}, _h = {
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
    return (n, t) => (u(), d("div", Ul, [
      h("div", Ml, [
        t[0] || (t[0] = h("label", { class: "hidden-visually" }, "Search", -1)),
        h("input", {
          class: "search-form__input",
          type: "text",
          id: "example-input",
          placeholder: e.placeholder
        }, null, 8, Pl)
      ]),
      h("button", Ll, [
        I(N, { icon: "type:search" })
      ])
    ]));
  }
}, wh = {
  __name: "UluAdaptiveLayout",
  setup(e) {
    const n = Ti("uluIsMobile");
    return (t, s) => !C(n) || !t.$slots.mobile ? g(t.$slots, "default", { key: 0 }) : g(t.$slots, "mobile", { key: 1 });
  }
};
function Fl(e) {
  var n;
  return e = e.replace(/^[^-_a-zA-Z]+/, "").replace(/^-(?:[-0-9]+)/, "-"), n = e && e.replace(/[^-_a-zA-Z0-9]+/g, "-"), n.toLowerCase();
}
function Vl(e, n = {
  columnFirst: "position-column-first",
  columnLast: "position-column-last",
  rowFirst: "position-row-first",
  rowLast: "position-row-last"
}) {
  const t = [...e.children], s = [];
  let o;
  t.forEach((i) => {
    const l = i.getBoundingClientRect().y;
    o !== l && s.push([]), s[s.length - 1].push(i), o = l, i.classList.remove(...Object.values(n));
  }), s.forEach((i, l) => {
    l === 0 && i.forEach((r) => r.classList.add(n.rowFirst)), l == s.length - 1 && i.forEach((r) => r.classList.add(n.rowLast)), i.forEach((r, a) => {
      a === 0 && r.classList.add(n.columnFirst), a == i.length - 1 && r.classList.add(n.columnLast);
    });
  });
}
const Hl = {
  name: "UluDataGrid",
  async mounted() {
    const e = () => Vl(this.$el);
    e(), this.resizeHandler = pt(e, 200, !1, this), window.addEventListener("resize", this.resizeHandler);
  },
  beforeUnmount() {
    this.resizeHandler && window.removeEventListener("resize", this.resizeHandler);
  }
};
function Nl(e, n, t, s, o, i) {
  return u(), d("div", null, [
    g(e.$slots, "default")
  ]);
}
const Sh = /* @__PURE__ */ E(Hl, [["render", Nl]]), Dl = {
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
}, Wl = {
  key: 0,
  class: "rail__item rail__item--pull"
};
function Xl(e, n, t, s, o, i) {
  const l = W("UluIcon");
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
          t.icon ? (u(), w(l, {
            key: 0,
            class: m(t.classes.icon),
            icon: t.icon
          }, null, 8, ["class", "icon"])) : _("", !0),
          g(e.$slots, "default", {}, () => [
            $(p(t.title), 1)
          ])
        ]),
        _: 3
      }, 8, ["class", "style"]))
    ], 2),
    e.$slots.end ? (u(), d("div", Wl, [
      g(e.$slots, "end")
    ])) : _("", !0)
  ], 2);
}
const kh = /* @__PURE__ */ E(Dl, [["render", Xl]]), Yl = {
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
function ql(e, n, t, s, o, i) {
  const l = W("router-link"), r = W("UluIcon");
  return t.items.length ? (u(), d("nav", {
    key: 0,
    class: m(t.classes.nav),
    "aria-label": "Breadcrumb"
  }, [
    h("ol", {
      class: m(t.classes.list)
    }, [
      (u(!0), d(x, null, O(t.items, (a, c) => (u(), d("li", {
        key: c,
        class: m(t.classes.item)
      }, [
        a.current ? (u(), d("span", {
          key: 1,
          class: m(a.current)
        }, [
          g(e.$slots, "default", { item: a }, () => [
            $(p(a.title), 1)
          ])
        ], 2)) : (u(), w(l, {
          key: 0,
          to: a.to,
          class: m(t.classes.link),
          "aria-current": a.current ? "page" : null
        }, {
          default: S(() => [
            g(e.$slots, "default", { item: a }, () => [
              $(p(a.title), 1)
            ])
          ]),
          _: 2
        }, 1032, ["to", "class", "aria-current"])),
        c < t.items.length - 1 ? g(e.$slots, "separator", { key: 2 }, () => [
          I(r, {
            class: m(t.classes.separator),
            icon: t.separatorIcon || "type:pathSeparator"
          }, null, 8, ["class", "icon"])
        ]) : _("", !0)
      ], 2))), 128))
    ], 2)
  ], 2)) : _("", !0);
}
const $h = /* @__PURE__ */ E(Yl, [["render", ql]]), Kl = {
  name: "UluNavStrip",
  components: {
    UluMenu: ws
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
function Gl(e, n, t, s, o, i) {
  const l = W("UluMenu");
  return u(), d("nav", {
    class: m(["nav-strip", {
      "nav-strip--rule": t.rule,
      "nav-strip--center": t.center,
      "nav-strip--right": t.right
    }])
  }, [
    I(l, {
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
const Ch = /* @__PURE__ */ E(Kl, [["render", Gl]]), Zl = {}, Jl = {
  class: "site-skip-link hidden-visually-focusable",
  href: "#main-content"
};
function Ql(e, n) {
  return u(), d("a", Jl, " Skip to main content ");
}
const Ah = /* @__PURE__ */ E(Zl, [["render", Ql]]), er = {
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
function tr(e, n, t, s, o, i) {
  return t.text != null ? (u(), w(F(t.element), { key: 0 }, {
    default: S(() => [
      $(p(t.text), 1)
    ]),
    _: 1
  })) : _("", !0);
}
const Th = /* @__PURE__ */ E(er, [["render", tr]]), nr = {}, sr = { style: { display: "none" } };
function or(e, n) {
  return u(), d("span", sr);
}
const Oh = /* @__PURE__ */ E(nr, [["render", or]]), ir = {};
function lr(e, n) {
  const t = W("router-view");
  return u(), w(t);
}
const xh = /* @__PURE__ */ E(ir, [["render", lr]]);
function dt(e = 0, n = 100) {
  return e = Math.ceil(e), n = Math.floor(n), Math.floor(Math.random() * (n - e) + e);
}
const rr = {
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
        width: dt(500, 1e3),
        height: dt(500, 1e3)
      } : { width: n, height: t };
    }
  }
}, ar = ["src", "alt"];
function cr(e, n, t, s, o, i) {
  return u(), d("img", {
    src: i.src,
    alt: t.alt
  }, null, 8, ar);
}
const Rh = /* @__PURE__ */ E(rr, [["render", cr]]), ur = {
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
function dr(e, n, t, s, o, i) {
  return u(!0), d(x, null, O(parseInt(t.amount), (l) => (u(), w(F(t.element), { key: l }, {
    default: S(() => [...n[0] || (n[0] = [
      $(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed semper erat tincidunt tellus vestibulum dictum. Fusce vel augue commodo, egestas diam sed, accumsan leo. Maecenas congue nec nisl et ullamcorper. Maecenas tincidunt, tortor et viverra eleifend, enim leo vestibulum ipsum, quis placerat mi nisi nec ex. Vivamus a justo volutpat, scelerisque elit eget, lacinia ex. Phasellus dapibus sollicitudin tortor, vitae suscipit nunc condimentum ut. Cras suscipit feugiat nibh nec consectetur. Phasellus vitae quam blandit, cursus metus ut, placerat mi. Sed tempor lacus non est interdum imperdiet nec quis metus. Praesent vel eleifend diam. Donec tincidunt eget purus sed posuere. ", -1)
    ])]),
    _: 2
  }, 1024))), 128);
}
const Eh = /* @__PURE__ */ E(ur, [["render", dr]]), fr = {
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
function hr(e, n, t, s, o, i) {
  return i.title ? (u(), d("p", {
    key: 0,
    tabindex: "-1",
    class: "hidden-visually",
    ref: "el"
  }, p(i.title), 513)) : _("", !0);
}
const jh = /* @__PURE__ */ E(fr, [["render", hr]]), mr = {
  name: "AnimateNumber",
  props: {
    /**
     * The target number to animate to.
     */
    value: Number
  },
  watch: {
    value() {
      ao.to(this, {
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
function gr(e, n, t, s, o, i) {
  return u(), d("span", null, [
    g(e.$slots, "default", { currentValue: o.currentValue }, () => [
      $(p(o.currentValue), 1)
    ])
  ]);
}
const Ih = /* @__PURE__ */ E(mr, [["render", gr]]), vr = {
  key: 0,
  class: "progress-bar__header"
}, yr = {
  key: 1,
  class: "progress-bar__value progress-bar__value--amount"
}, pr = {
  key: 2,
  class: "progress-bar__icon"
}, br = { class: "progress-bar__track" }, _r = {
  key: 1,
  class: "progress-bar__values"
}, wr = { class: "progress-bar__value progress-bar__value--amount" }, Sr = {
  key: 0,
  class: "progress-bar__value progress-bar__value--deficit"
}, kr = { class: "progress-bar__value progress-bar__value--total" }, Bh = {
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
    const n = e, t = (l, r) => `${r === 0 ? 0 : l / r * 100}%`, s = b(() => n.indeterminate ? null : t(n.amount, n.total)), o = b(() => t(n.deficit, n.total)), i = b(() => ({
      "progress-bar": !0,
      "progress-bar--small": n.small,
      "progress-bar--positive": n.positive,
      "progress-bar--negative": n.negative,
      "progress-bar--loader": n.loader,
      "progress-bar--indeterminate": n.indeterminate,
      "type-small": n.small
      // From original component, seems to control font size
    }));
    return (l, r) => (u(), d("div", {
      class: m(i.value)
    }, [
      e.label || l.$slots.label || l.$slots.icon || e.amountInHeader ? (u(), d("div", vr, [
        e.label ? (u(), w(F(e.labelElement), {
          key: 0,
          class: m(["progress-bar__label", [e.classes.label, { "hidden-visually": e.labelHidden }]])
        }, {
          default: S(() => [
            g(l.$slots, "label", {}, () => [
              $(p(e.label), 1)
            ])
          ]),
          _: 3
        }, 8, ["class"])) : _("", !0),
        e.amountInHeader ? (u(), d("div", yr, [
          r[0] || (r[0] = h("strong", { class: "hidden-visually" }, "Amount:", -1)),
          g(l.$slots, "valueAmount", { value: e.amount }, () => [
            $(p(e.formatValue(e.amount, "amount")), 1)
          ])
        ])) : _("", !0),
        l.$slots.icon ? (u(), d("div", pr, [
          g(l.$slots, "icon")
        ])) : _("", !0)
      ])) : _("", !0),
      h("div", br, [
        h("div", {
          class: "progress-bar__bar",
          style: H({ width: s.value })
        }, null, 4),
        e.deficit > 0 ? (u(), d("div", {
          key: 0,
          class: "progress-bar__bar--deficit",
          style: H({ width: o.value })
        }, null, 4)) : _("", !0)
      ]),
      !e.noValues && !e.amountInHeader && !e.loader && !e.indeterminate ? (u(), d("div", _r, [
        h("div", wr, [
          r[1] || (r[1] = h("strong", { class: "hidden-visually" }, "Amount:", -1)),
          g(l.$slots, "valueAmount", { value: e.amount }, () => [
            $(p(e.formatValue(e.amount, "amount")), 1)
          ])
        ]),
        e.deficit > 0 ? (u(), d("div", Sr, [
          r[2] || (r[2] = h("strong", { class: "hidden-visually" }, "Deficit: ", -1)),
          g(l.$slots, "valueDeficit", { value: e.deficit }, () => [
            $("-" + p(e.formatValue(e.deficit, "deficit")), 1)
          ])
        ])) : _("", !0),
        h("div", kr, [
          r[3] || (r[3] = h("strong", { class: "hidden-visually" }, "Total:", -1)),
          g(l.$slots, "valueTotal", { value: e.total }, () => [
            $(p(e.formatValue(e.total, "total")), 1)
          ])
        ])
      ])) : _("", !0)
    ], 2));
  }
}, $r = { class: "hidden-visually" }, Cr = { class: "progress-circle__chart" }, Ar = {
  class: "progress-circle__chart-svg",
  viewBox: "0 0 32 32"
}, Tr = {
  key: 0,
  class: "progress-circle__chart-value"
}, Or = {
  key: 0,
  class: "progress-circle__value type-small-x"
}, zh = {
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
    const n = e, t = R(null), s = (a) => a === 100 ? 101 : a, o = (a = 0) => {
      if (!t.value || !t.value.animate) return;
      const c = { strokeDasharray: [`${a} 100`, i.value] };
      t.value.animate(c, { duration: n.duration, easing: n.easing, fill: "forwards" });
    };
    Xe(() => n.percentage, (a, c) => {
      a !== c && o(s(c));
    });
    const i = b(() => `${s(n.percentage)} 100`), l = b(() => n.outside || n.outsideBelow || n.small), r = b(() => {
      const a = {
        "progress-circle": !0,
        "progress-circle--small": n.small,
        "progress-circle--pie": n.pieStyle,
        "progress-circle--outside": l.value,
        "progress-circle--outside-below": n.outsideBelow,
        "progress-circle--no-mask": n.noMask
      };
      return n.status && (a[`progress-circle--${n.status}`] = !0), a;
    });
    return vt(() => {
      o();
    }), (a, c) => (u(), d("div", {
      class: m(r.value)
    }, [
      h("strong", $r, p(e.label), 1),
      h("div", Cr, [
        (u(), d("svg", Ar, [
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
            style: H({ strokeDasharray: i.value })
          }, null, 4),
          c[1] || (c[1] = h("circle", {
            class: "progress-circle__chart-mask",
            cx: "16",
            cy: "16"
          }, null, -1))
        ])),
        !l.value && !e.noValue ? (u(), d("strong", Tr, [
          g(a.$slots, "value", { value: e.percentage }, () => [
            $(p(e.formatValue(e.percentage)), 1)
          ])
        ])) : _("", !0)
      ]),
      l.value && !e.noValue ? (u(), d("strong", Or, [
        g(a.$slots, "value", { value: e.percentage }, () => [
          $(p(e.formatValue(e.percentage)), 1)
        ])
      ])) : _("", !0)
    ], 2));
  }
};
function xr(e) {
  const n = /* @__PURE__ */ new Set();
  for (const t of e)
    for (const s of t)
      n.add(s);
  return n;
}
function Dt(e) {
  if (!e || e.length === 0) return /* @__PURE__ */ new Set();
  const n = e.sort((s, o) => s.size - o.size), t = new Set(n[0]);
  for (let s = 1; s < n.length; s++) {
    for (const o of t)
      n[s].has(o) || t.delete(o);
    if (t.size === 0) break;
  }
  return t;
}
function jt(e, n, t) {
  if (!e || e.length === 0)
    return t;
  const s = e.map((o) => {
    const i = o.children.map((l) => {
      const r = `${o.uid}:${l.uid}`;
      return n.get(r) || /* @__PURE__ */ new Set();
    });
    return o.match === "all" ? Dt(i) : xr(i);
  });
  return Dt(s);
}
function Rr(e, n) {
  return !n || !Array.isArray(n) ? [] : n.map((t) => {
    const s = /* @__PURE__ */ new Set(), o = t.getValue || ((r) => r[t.uid]);
    e.forEach((r) => {
      const a = o(r);
      Array.isArray(a) ? a.forEach((c) => c && s.add(c)) : a && s.add(a);
    });
    const i = t.getLabel || ((r) => r), l = [...s].map((r) => ({
      uid: r,
      label: i(r),
      selected: !1
    }));
    return l.sort((r, a) => String(r.label).localeCompare(String(a.label))), {
      ...t,
      children: l
    };
  });
}
function Uh(e, n = {}) {
  const t = (T, B) => {
    const P = T[B];
    return P === null || typeof P > "u" ? [] : Array.isArray(P) ? P : [P];
  }, {
    initialFacets: s,
    facetFields: o,
    initialSearchValue: i = "",
    initialSortType: l = "az",
    noDefaultSorts: r = !1,
    extraSortTypes: a = {},
    searchOptions: c = {},
    getItemFacet: f = t,
    getSortValue: y = (T) => T.title || T.label || "",
    countMode: v = "none"
    // 'none', 'simple', 'intuitive'
  } = n, k = (T) => T.sort((B, P) => {
    const z = y(B), V = y(P);
    return z && V ? String(z).localeCompare(String(V)) : z ? -1 : V ? 1 : 0;
  }), A = {
    az: { text: "A-Z", sort: k },
    za: { text: "Z-A", sort: (T) => k(T).reverse() }
  };
  function U(T) {
    return (T || []).map((B) => ({
      ...B,
      open: B.open || !1,
      children: B.children.map((P) => ({
        ...P,
        selected: P.selected || !1
      })),
      selectedCount: 0
    }));
  }
  const j = R([]), ne = R(i), $e = R(l), q = b(() => !o || !e.value?.length ? null : Rr(e.value, o)), ee = b(() => ({
    ...r ? {} : A,
    ...a
  })), G = b(() => {
    const T = /* @__PURE__ */ new Map(), B = te.value;
    if (!B || !o) return T;
    const P = new Map(o.map((z) => {
      const V = z.getValue || ((D) => D[z.uid]);
      return [z.uid, V];
    }));
    for (let z = 0; z < B.length; z++) {
      const V = B[z];
      for (const D of o) {
        const Y = P.get(D.uid)(V), J = Array.isArray(Y) ? Y : Y ? [Y] : [];
        for (const tt of J) {
          const Pe = `${D.uid}:${tt}`;
          T.has(Pe) || T.set(Pe, /* @__PURE__ */ new Set()), T.get(Pe).add(z);
        }
      }
    }
    return T;
  }), At = b(() => ({
    shouldSort: !0,
    keys: ["title", "label", "description", "author"],
    ...c
  })), te = b(() => ne.value?.length ? new co(e.value, At.value).search(ne.value).map((B) => B.item) : e.value), he = b(() => {
    const T = [];
    return j.value.forEach((B) => {
      const P = B.children.filter((z) => z.selected);
      P.length > 0 && T.push({ ...B, children: P });
    }), T;
  }), X = b(() => {
    if (!he.value.length)
      return te.value;
    const T = G.value;
    if (T.size === 0 && te.value.length > 0 && o?.length > 0)
      return [];
    const B = new Set(te.value.map((V, D) => D)), P = jt(he.value, T, B), z = [];
    for (const V of P)
      z.push(te.value[V]);
    return z;
  }), me = b(() => {
    const T = ee.value[$e.value]?.sort;
    return typeof T != "function" ? X.value : T([...X.value]);
  });
  function Ce() {
    j.value.forEach((T) => {
      T.children && T.children.forEach((B) => B.selected = !1), T.selectedCount = 0;
    });
  }
  function mn({ groupUid: T, facetUid: B, selected: P }) {
    const z = j.value.find((V) => V.uid === T);
    if (z) {
      !z.multiple && P && z.children.forEach((D) => {
        D.uid !== B && (D.selected = !1);
      });
      const V = z.children.find((D) => D.uid === B);
      V && (V.selected = P), z.selectedCount = z.children.filter((D) => D.selected).length;
    }
  }
  return Xe(q, (T) => {
    const B = U(s || T);
    B.forEach((P) => {
      P.selectedCount = P.children.filter((z) => z.selected).length;
    }), j.value = B;
  }, { immediate: !0 }), Xe([he, te], ([T, B], [P, z]) => {
    if (!(v === "none" || !j.value.length) && !(T === P && B === z)) {
      if (v === "simple")
        j.value.forEach((V) => {
          const D = T.filter((Y) => Y.uid !== V.uid), Me = getFilteredItems(B, D);
          V.children.forEach((Y) => {
            Y.count = Me.filter((J) => f(J, V.uid).includes(Y.uid)).length;
          });
        });
      else if (v === "intuitive") {
        const V = G.value;
        if (V.size === 0 && te.value.length > 0 && o?.length > 0)
          return;
        const D = new Set(te.value.map((Y, J) => J)), Me = jt(T, V, D);
        j.value.forEach((Y) => {
          Y.children.forEach((J) => {
            const tt = `${Y.uid}:${J.uid}`, Pe = V.get(tt) || /* @__PURE__ */ new Set();
            if (J.selected)
              if (Y.multiple) {
                const Ae = Dt([Me, Pe]);
                J.count = Ae.size;
              } else
                J.count = Me.size;
            else {
              const Ae = [];
              for (const nt of T)
                Ae.push({ ...nt, children: [...nt.children] });
              let Le = Ae.find((nt) => nt.uid === Y.uid);
              Le || (Le = { ...Y, children: [] }, Ae.push(Le)), Y.multiple ? Le.children.push(J) : Le.children = [J];
              const Ws = jt(Ae, V, D);
              J.count = Ws.size;
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
    handleFacetChange: mn
  };
}
const Er = ["onClick"], Mh = {
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
    const t = e, s = n, o = b(() => {
      const r = [];
      return t.selectedFacets.forEach((a) => {
        a.children.forEach((c) => {
          r.push({
            ...c,
            groupUid: a.uid
          });
        });
      }), r;
    });
    function i(r) {
      s("facet-change", {
        groupUid: r.groupUid,
        facetUid: r.uid,
        selected: !1
      });
    }
    function l() {
      s("clear-filters");
    }
    return (r, a) => o.value.length ? (u(), d("div", {
      key: 0,
      class: m(["facets-active", e.classes.container])
    }, [
      (u(), w(F(e.labelElement), {
        class: m(["facets-active__label", e.classes.label])
      }, {
        default: S(() => [
          g(r.$slots, "label", {}, () => [
            a[0] || (a[0] = $(" Active Filters: ", -1))
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
            onClick: (f) => i(c)
          }, [
            h("span", {
              class: m(e.classes.filterButtonText)
            }, [
              a[1] || (a[1] = h("span", { class: "hidden-visually" }, "Remove Active Filter:", -1)),
              $(" " + p(c.label), 1)
            ], 2),
            h("span", {
              class: m(e.classes.filterButtonIcon)
            }, [
              I(N, { icon: e.removeIcon }, null, 8, ["icon"])
            ], 2)
          ], 10, Er)
        ], 2))), 128))
      ], 2),
      h("button", {
        onClick: l,
        class: m(e.classes.clearButton)
      }, "Clear All", 2)
    ], 2)) : _("", !0);
  }
}, jr = { key: 0 }, ft = {
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
    const t = e, s = n, o = b(() => t.type === "radio" ? [{ label: `All ${t.groupName}s`, uid: "" }, ...t.children] : t.children);
    function i(l) {
      if (t.type === "radio") {
        const r = l;
        t.children.forEach((a) => {
          const c = a.uid === r;
          a.selected !== c && s("facet-change", {
            groupUid: t.groupUid,
            facetUid: a.uid,
            selected: c
          });
        });
      } else {
        const r = new Set(l);
        t.children.forEach((a) => {
          const c = r.has(a.uid);
          a.selected !== c && s("facet-change", {
            groupUid: t.groupUid,
            facetUid: a.uid,
            selected: c
          });
        });
      }
    }
    return (l, r) => (u(), w(Cs, {
      class: "facets-list",
      legend: e.groupUid,
      type: e.type,
      options: o.value,
      compact: e.compact,
      "model-value": e.modelValue,
      "onUpdate:modelValue": i
    }, {
      default: S(({ option: a }) => [
        $(p(a.label) + " ", 1),
        a.count !== void 0 ? (u(), d("span", jr, "(" + p(a.count) + ")", 1)) : _("", !0)
      ]),
      _: 1
    }, 8, ["legend", "type", "options", "compact", "model-value"]));
  }
}, Ir = { class: "facets-filters" }, Ph = {
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
    const t = n, s = (o) => o.multiple ? o.children.filter((i) => i.selected).map((i) => i.uid) : o.children.find((i) => i.selected)?.uid || "";
    return (o, i) => (u(), d("div", Ir, [
      (u(!0), d(x, null, O(e.facets, (l) => (u(), w(Ht, {
        key: l.uid,
        classes: {
          container: ["facets-filters__group", e.classes.group],
          containerOpen: ["facets-filters__group--open", e.classes.groupOpen],
          containerClosed: ["facets-filters__group--closed", e.classes.groupClosed],
          trigger: ["facets-filters__group-trigger", e.classes.groupTrigger],
          content: ["facets-filters__group-content", e.classes.groupContent]
        },
        startOpen: l.open
      }, {
        trigger: S(({ isOpen: r }) => [
          g(o.$slots, "groupTrigger", {
            group: l,
            isOpen: r
          }, () => [
            $(p(l.name), 1)
          ])
        ]),
        default: S(() => [
          I(ft, {
            children: l.children.slice(0, e.maxVisible),
            groupUid: l.uid,
            groupName: l.name,
            type: l.multiple ? "checkbox" : "radio",
            compact: e.compact,
            "model-value": s(l),
            onFacetChange: i[0] || (i[0] = (r) => t("facet-change", r))
          }, null, 8, ["children", "groupUid", "groupName", "type", "compact", "model-value"]),
          l.children.length > e.maxVisible ? (u(), w(Ht, {
            key: 0,
            class: m(["facets-filters__more-facets", e.classes.moreFacets])
          }, {
            trigger: S(({ isOpen: r }) => [
              $(p(r ? "View Less" : "Show More"), 1)
            ]),
            default: S(() => [
              I(ft, {
                children: l.children.slice(e.maxVisible),
                groupUid: l.uid,
                groupName: l.name,
                type: l.multiple ? "checkbox" : "radio",
                compact: e.compact,
                "model-value": s(l),
                onFacetChange: i[1] || (i[1] = (r) => t("facet-change", r))
              }, null, 8, ["children", "groupUid", "groupName", "type", "compact", "model-value"])
            ]),
            _: 2
          }, 1032, ["class"])) : _("", !0)
        ]),
        _: 2
      }, 1032, ["classes", "startOpen"]))), 128))
    ]));
  }
}, Br = { class: "facets-filters" }, Lh = {
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
    const t = n, s = (o) => o.multiple ? o.children.filter((i) => i.selected).map((i) => i.uid) : o.children.find((i) => i.selected)?.uid || "";
    return (o, i) => (u(), d("div", Br, [
      (u(!0), d(x, null, O(e.facets, (l) => (u(), w($n, {
        key: l.uid,
        modifiers: e.accordionModifiers,
        startOpen: l.open
      }, {
        trigger: S(({ isOpen: r }) => [
          g(o.$slots, "groupTrigger", {
            group: l,
            isOpen: r
          }, () => [
            $(p(l.name), 1)
          ])
        ]),
        default: S(() => [
          I(ft, {
            children: l.children.slice(0, e.maxVisible),
            groupUid: l.uid,
            groupName: l.name,
            type: l.multiple ? "checkbox" : "radio",
            compact: e.compact,
            "model-value": s(l),
            onFacetChange: i[0] || (i[0] = (r) => t("facet-change", r))
          }, null, 8, ["children", "groupUid", "groupName", "type", "compact", "model-value"]),
          l.children.length > e.maxVisible ? (u(), w($n, {
            key: 0,
            class: m(["facets-filters__more-facets", e.classes.moreFacets]),
            modifiers: e.accordionModifiers
          }, {
            trigger: S(({ isOpen: r }) => [
              $(p(r ? "View Less" : "Show More"), 1)
            ]),
            default: S(() => [
              I(ft, {
                children: l.children.slice(e.maxVisible),
                groupUid: l.uid,
                groupName: l.name,
                type: l.multiple ? "checkbox" : "radio",
                compact: e.compact,
                "model-value": s(l),
                onFacetChange: i[1] || (i[1] = (r) => t("facet-change", r))
              }, null, 8, ["children", "groupUid", "groupName", "type", "compact", "model-value"])
            ]),
            _: 2
          }, 1032, ["class", "modifiers"])) : _("", !0)
        ]),
        _: 2
      }, 1032, ["modifiers", "startOpen"]))), 128))
    ]));
  }
}, Fh = {
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
    const t = n, s = (r) => r.multiple ? r.children : [{ label: `All ${r.name}s`, uid: "" }, ...r.children], o = (r) => r.multiple ? r.children.filter((a) => a.selected).map((a) => a.uid) : r.children.find((a) => a.selected)?.uid || "", i = (r) => {
      const a = r.children.filter((f) => f.selected), c = a.length;
      return c === 0 ? "All" : r.multiple ? c === 1 ? a[0].label : `${c} selected` : a[0].label;
    };
    function l(r, a, c) {
      if (r.multiple) {
        const f = new Set(a);
        r.children.forEach((y) => {
          const v = f.has(y.uid);
          y.selected !== v && t("facet-change", {
            groupUid: r.uid,
            facetUid: y.uid,
            selected: v
          });
        });
      } else {
        const f = a;
        r.children.forEach((y) => {
          const v = y.uid === f;
          y.selected !== v && t("facet-change", {
            groupUid: r.uid,
            facetUid: y.uid,
            selected: v
          });
        }), c();
      }
    }
    return (r, a) => (u(), d("div", {
      class: m(e.classes.container)
    }, [
      (u(!0), d(x, null, O(e.facets, (c) => (u(), d("div", {
        key: c.uid,
        class: m(e.classes.group)
      }, [
        I(yt, {
          classes: {
            trigger: e.classes.trigger,
            content: e.classes.content
          }
        }, {
          trigger: S(() => [
            g(r.$slots, "trigger", {
              group: c,
              label: i(c)
            }, () => [
              h("span", null, [
                $(p(c.name) + ": ", 1),
                h("strong", null, p(i(c)), 1)
              ])
            ]),
            I(N, {
              class: m(e.classes.triggerIcon),
              icon: "fas fa-chevron-down"
            }, null, 8, ["class"])
          ]),
          default: S(({ close: f }) => [
            I(Cs, {
              legend: c.name,
              type: c.multiple ? "checkbox" : "radio",
              options: s(c),
              "model-value": o(c),
              "onUpdate:modelValue": (y) => l(c, y, f),
              hideInputs: e.hideInputs
            }, null, 8, ["legend", "type", "options", "model-value", "onUpdate:modelValue", "hideInputs"])
          ]),
          _: 2
        }, 1032, ["classes"])
      ], 2))), 128))
    ], 2));
  }
}, zr = { class: "facets-dropdown-filters" }, Ur = ["for"], Mr = ["id", "onChange"], Pr = { value: "" }, Lr = ["value", "selected"], Vh = {
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
      const l = i.target.value;
      o.children.find((a) => a.selected)?.uid !== l && o.children.forEach((a) => {
        const c = a.uid === l;
        a.selected !== c && t("facet-change", {
          groupUid: o.uid,
          facetUid: a.uid,
          selected: c
        });
      });
    }
    return (o, i) => (u(), d("div", zr, [
      (u(!0), d(x, null, O(e.facets, (l) => (u(), d("div", {
        class: "facets-dropdown-filters__group",
        key: l.uid
      }, [
        h("label", {
          for: `facet-dropdown-${l.uid}`,
          class: "facets-dropdown-filters__label"
        }, p(l.name), 9, Ur),
        h("select", {
          id: `facet-dropdown-${l.uid}`,
          class: "facets-dropdown-filters__select",
          onChange: (r) => s(l, r)
        }, [
          h("option", Pr, "All " + p(l.name) + "s", 1),
          (u(!0), d(x, null, O(l.children, (r) => (u(), d("option", {
            key: r.uid,
            value: r.uid,
            selected: r.selected
          }, p(r.label), 9, Lr))), 128))
        ], 40, Mr)
      ]))), 128))
    ]));
  }
}, Fr = { class: "facets-header-layout" }, Vr = { class: "facets-header-layout__header" }, Hr = { class: "facets-header-layout__main" }, Hh = {
  __name: "UluFacetsHeaderLayout",
  setup(e) {
    return (n, t) => (u(), d("div", Fr, [
      h("div", Vr, [
        g(n.$slots, "header")
      ]),
      h("div", Hr, [
        g(n.$slots, "main")
      ])
    ]));
  }
}, Nr = { class: "facets-results" }, Dr = {
  key: 1,
  class: "facets-results__empty"
}, Nh = {
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
    return (n, t) => (u(), d("div", Nr, [
      e.items.length ? (u(), w(es, {
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
      }, 8, ["tag", "name", "class"])) : (u(), d("div", Dr, [
        g(n.$slots, "empty", {}, () => [
          t[0] || (t[0] = h("p", null, "No matching items found.", -1))
        ])
      ]))
    ]));
  }
}, Wr = { class: "facets-search" }, Xr = ["placeholder"], Dh = {
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
    const i = `facet-view-keyword-${++o}`, l = b({
      get() {
        return t.modelValue;
      },
      set(r) {
        s("update:modelValue", r);
      }
    });
    return (r, a) => (u(), d("div", Wr, [
      h("label", {
        class: m(e.classes.searchLabel),
        for: i
      }, [...a[1] || (a[1] = [
        h("strong", null, "Search", -1)
      ])], 2),
      Re(h("input", {
        id: i,
        class: m(e.classes.searchInput),
        "onUpdate:modelValue": a[0] || (a[0] = (c) => l.value = c),
        type: "text",
        placeholder: e.placeholder
      }, null, 10, Xr), [
        [to, l.value]
      ])
    ]));
  }
}, Yr = { class: "facets-sidebar__header" }, qr = { class: "facets-sidebar__mobile-controls" }, Kr = { class: "facets-sidebar__body" }, Gr = { class: "facets-sidebar__main" }, Wh = {
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
    const n = R(!1), t = mt("uluIsMobile"), s = R(null), o = R(null), i = b(() => t.value ? o.value : s.value);
    return (l, r) => (u(), d("div", {
      class: m(["facets-sidebar", { "facets-sidebar--filters-hidden": C(t) }])
    }, [
      h("div", Yr, [
        g(l.$slots, "header")
      ]),
      Re(h("div", qr, [
        h("button", {
          class: m(e.classes.mobileButton),
          onClick: r[0] || (r[0] = (a) => n.value = !0)
        }, p(e.mobileButtonText), 3)
      ], 512), [
        [Ut, C(t)]
      ]),
      h("div", Kr, [
        Re(h("div", {
          class: "facets-sidebar__sidebar",
          ref_key: "desktopTarget",
          ref: s
        }, null, 512), [
          [Ut, !C(t)]
        ]),
        h("div", Gr, [
          g(l.$slots, "main")
        ])
      ]),
      C(t) ? (u(), w(fs, {
        key: 0,
        modelValue: n.value,
        "onUpdate:modelValue": r[1] || (r[1] = (a) => n.value = a),
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
      }, 8, ["modelValue"])) : _("", !0),
      i.value ? (u(), w(ht, {
        key: 1,
        to: i.value
      }, [
        g(l.$slots, "sidebar")
      ], 8, ["to"])) : _("", !0)
    ], 2));
  }
}, Zr = ["for"], Jr = ["value", "id"], Qr = ["value"], Xh = {
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
    const s = n, o = R(`ulu-facet-sort-${++t}`);
    return (i, l) => (u(), d("div", {
      class: m(["facets-sort", e.classes.sortForm])
    }, [
      h("label", {
        for: o.value,
        class: m(e.classes.sortFormLabel)
      }, [
        g(i.$slots, "default", {}, () => [
          l[1] || (l[1] = $("Sort:", -1))
        ])
      ], 10, Zr),
      h("select", {
        value: e.modelValue,
        onChange: l[0] || (l[0] = (r) => s("update:modelValue", r.target.value)),
        id: o.value,
        class: m(e.classes.sortFormSelect)
      }, [
        (u(!0), d(x, null, O(e.sortTypes, (r, a) => (u(), d("option", {
          value: a,
          key: a
        }, p(r.text), 9, Qr))), 128))
      ], 42, Jr)
    ], 2));
  }
}, As = Symbol(), Ts = Symbol(), St = Symbol(), ea = {
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
      [St]: b(() => this.sections),
      [As]: (e) => {
        const { titleId: n, title: t } = e, { element: s } = e.$refs;
        this.sections.push({
          instance: e,
          titleId: n,
          title: t,
          element: s,
          active: !1
        }), this.update();
      },
      [Ts]: (e) => {
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
      const i = (l) => {
        l.forEach(({ target: r, isIntersecting: a }) => {
          const c = this.getSectionIndex(r), f = r.offsetTop, y = n[c], v = c === 0 && o > f, k = c === n.length - 1 && o < f;
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
}, ta = { class: "scroll-anchors" };
function na(e, n, t, s, o, i) {
  return u(), d("div", ta, [
    g(e.$slots, "default")
  ]);
}
const Yh = /* @__PURE__ */ E(ea, [["render", na]]), sa = {
  name: "ScrollAnchorsNav",
  inject: {
    sections: { from: St }
  },
  props: {
    element: {
      type: String,
      default: "nav"
    }
  }
}, oa = ["href"];
function ia(e, n, t, s, o, i) {
  return i.sections.length ? (u(), w(F(t.element), {
    key: 0,
    class: "scroll-anchors__nav"
  }, {
    default: S(() => [
      h("ul", null, [
        (u(!0), d(x, null, O(i.sections, (l, r) => (u(), d("li", {
          key: r,
          class: m({ "is-active": l.active })
        }, [
          h("a", {
            class: m({ "is-active": l.active }),
            href: `#${l.titleId}`
          }, p(l.title), 11, oa)
        ], 2))), 128))
      ])
    ]),
    _: 1
  })) : _("", !0);
}
const qh = /* @__PURE__ */ E(sa, [["render", ia]]);
function Os(e) {
  requestAnimationFrame(() => {
    const n = new MessageChannel();
    n.port1.onmessage = e, n.port2.postMessage(void 0);
  });
}
const la = {
  name: "ScrollAnchorsNavAnimated",
  inject: {
    sections: { from: St }
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
      const s = e.findIndex((r) => r.active);
      if (s === -1)
        return !1;
      const o = this.linkRefs[s], { offsetTop: i, offsetHeight: l } = o;
      return {
        y: i,
        height: l,
        initial: this.inidica
      };
    }
  },
  watch: {
    indicatorStyles(e) {
      e && !this.indicatorAnimReady && Os(() => {
        this.indicatorAnimReady = !0;
      });
    }
  },
  methods: {
    addLinkRef(e, n) {
      this.linkRefs[e] = n;
    }
  }
}, ra = { class: "scroll-anchors__rail" }, aa = ["href"];
function ca(e, n, t, s, o, i) {
  return i.sections.length ? (u(), w(F(t.element), {
    key: 0,
    class: "scroll-anchors__nav scroll-anchors__nav--animated"
  }, {
    default: S(() => [
      h("ul", ra, [
        (u(!0), d(x, null, O(i.sections, (l, r) => (u(), d("li", {
          key: r,
          class: m({ "is-active": l.active })
        }, [
          h("a", {
            class: m({ "is-active": l.active }),
            ref_for: !0,
            ref: (a) => i.addLinkRef(r, a),
            href: `#${l.titleId}`
          }, p(l.title), 11, aa)
        ], 2))), 128))
      ]),
      h("div", {
        class: m(["scroll-anchors__indicator", {
          "scroll-anchors__indicator--can-transition": o.indicatorAnimReady
        }]),
        ref: "indicator",
        style: H({
          opacity: i.indicatorStyles ? "1" : "0",
          transform: `translateY(${i.indicatorStyles.y}px)`,
          height: `${i.indicatorStyles.height}px`
        })
      }, null, 6)
    ]),
    _: 1
  })) : _("", !0);
}
const Kh = /* @__PURE__ */ E(la, [["render", ca]]), ua = {
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
    unregister: { from: Ts },
    sections: { from: St, default: () => b(() => []) }
  },
  data() {
    const { anchorId: e, title: n } = this;
    return {
      titleId: e || `sas-title-${Fl(n)}`
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
function da(e, n, t, s, o, i) {
  return u(), d("div", {
    class: m([t.wrapperClass, { [t.activeClass]: t.activeClass && i.section?.active }]),
    ref: "element"
  }, [
    (u(), w(F(t.titleElement), {
      class: m(t.titleClass),
      id: o.titleId
    }, {
      default: S(() => [
        $(p(t.title), 1)
      ]),
      _: 1
    }, 8, ["class", "id"])),
    g(e.$slots, "default", { section: i.section })
  ], 2);
}
const Gh = /* @__PURE__ */ E(ua, [["render", da]]), fa = {
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
}, Zh = {
  __name: "UluShowSkeleton",
  props: {
    /**
     * If true will show whatever is passed to slot, else skeleton text
     */
    when: Boolean
  },
  setup(e) {
    return (n, t) => e.when ? (u(), w(fa, {
      key: 1,
      inline: ""
    })) : g(n.$slots, "default", { key: 0 });
  }
};
function ha(e, n) {
  return [...Array(e)].map((t, s) => n(s));
}
function Jh(e, n) {
  var t = e.indexOf(n);
  t > -1 && e.splice(t, 1);
}
const Qh = {
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
    const n = e, t = b(() => ha(n.lines, () => {
      const o = dt(70, 100);
      let i = 0;
      const l = () => {
        const c = o - i, f = dt(15, c);
        return i += f, f;
      }, r = [];
      for (; i < o - 15; )
        r.push(l());
      const a = () => r.reduce((c, f) => c + f, 0);
      for (; a() >= o && r.pop(); )
        ;
      return r.map((c) => ({ width: c, alt: Math.random() < 0.5 }));
    }));
    return (s, o) => (u(), d("div", null, [
      (u(!0), d(x, null, O(t.value, (i, l) => (u(), d("div", { key: l }, [
        (u(!0), d(x, null, O(i, (r) => (u(), d("span", {
          key: r,
          class: m(["skeleton skeleton--text skeleton--inline", { "skeleton--background-alt": r.alt }]),
          style: H({ width: `${r.width}%` })
        }, null, 6))), 128))
      ]))), 128))
    ]));
  }
}, ma = { class: "skeleton skeleton-block--media" }, em = {
  __name: "UluSkeletonMedia",
  setup(e) {
    return (n, t) => (u(), d("div", ma, [
      I(N, { icon: "type:image" })
    ]));
  }
}, ga = {
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
            const l = this.getSlideByElement(i.target);
            l.active = i.isIntersecting, this.$emit("slide-change", { slide: l, track: n, nav: t });
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
}, va = { class: "slideshow" }, ya = {
  class: "slideshow__control-context",
  ref: "context"
}, pa = {
  class: "slideshow__track-crop",
  ref: "crop"
}, ba = {
  class: "slideshow__track",
  ref: "track"
}, _a = ["tabindex"], wa = { class: "slideshow__controls" }, Sa = { class: "slideshow__controls-item slideshow__controls-item--previous" }, ka = ["disabled"], $a = { class: "slideshow__controls-item slideshow__controls-item--next" }, Ca = ["disabled"], Aa = {
  key: 0,
  class: "slideshow__nav",
  ref: "nav"
}, Ta = ["onClick"], Oa = { class: "hidden-visually" };
function xa(e, n, t, s, o, i) {
  const l = W("UluIcon");
  return u(), d("div", va, [
    h("div", ya, [
      h("div", pa, [
        h("ul", ba, [
          (u(!0), d(x, null, O(o.slides, (r, a) => (u(), d("li", {
            class: m(["slideshow__slide", { "is-active": r.active }]),
            key: a,
            tabindex: t.slideFocusable ? "0" : "-1",
            ref_for: !0,
            ref: (c) => {
              r.element = c;
            }
          }, [
            g(e.$slots, "slide", {
              item: r.item,
              index: a
            })
          ], 10, _a))), 128))
        ], 512)
      ], 512),
      h("ul", wa, [
        h("li", Sa, [
          h("button", {
            class: "slideshow__control-button slideshow__control-button--previous",
            "aria-label": "Scroll Right",
            onClick: n[0] || (n[0] = (...r) => i.previous && i.previous(...r)),
            disabled: !i.canScrollLeft
          }, [
            I(l, {
              class: "slideshow__control-icon",
              icon: "type:previous"
            })
          ], 8, ka)
        ]),
        h("li", $a, [
          h("button", {
            class: "slideshow__control-button slideshow__control-button--next",
            "aria-label": "Scroll Left",
            onClick: n[1] || (n[1] = (...r) => i.next && i.next(...r)),
            disabled: !i.canScrollRight
          }, [
            I(l, {
              class: "slideshow__control-icon",
              icon: "type:next"
            })
          ], 8, Ca)
        ])
      ])
    ], 512),
    t.noNav ? _("", !0) : (u(), d("ul", Aa, [
      (u(!0), d(x, null, O(o.slides, (r, a) => (u(), d("li", {
        class: m(["slideshow__nav-item", { "is-active": r.active }]),
        ref_for: !0,
        ref: (c) => {
          r.navElement = c;
        },
        key: a
      }, [
        h("button", {
          class: m(["slideshow__nav-button", { "is-active": r.active }]),
          onClick: (c) => i.to(a)
        }, [
          g(e.$slots, "nav", {
            item: r.item,
            index: a,
            active: r.active
          }, () => [
            h("span", Oa, "Item " + p(a + 1), 1)
          ])
        ], 10, Ta)
      ], 2))), 128))
    ], 512))
  ]);
}
const Ra = /* @__PURE__ */ E(ga, [["render", xa]]), Ea = {
  name: "ImageSlideShow",
  components: {
    UluSlideShow: Ra
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
      const { offsetWidth: o, scrollLeft: i } = n, { offsetLeft: l, offsetWidth: r } = s, a = i + o, c = l + r;
      let f = null;
      console.log("left/right", i, a), t && s && (c > a ? f = i + (c - a) : l < i && (f = l), f !== null && n.scrollTo({ left: f, top: 0, behavior: "smooth" }));
    }
  }
}, ja = ["src", "alt"], Ia = { class: "slideshow__image-actions" }, Ba = ["src", "alt"];
function za(e, n, t, s, o, i) {
  const l = W("AppButton"), r = W("UluSlideShow");
  return u(), w(r, {
    class: "slideshow--images",
    items: t.images,
    onSlideChange: i.slideChange
  }, {
    slide: S(({ item: a }) => [
      h("img", {
        src: a.src,
        alt: a.alt
      }, null, 8, ja),
      h("div", Ia, [
        t.selectButton ? (u(), w(l, {
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
        })) : _("", !0)
      ])
    ]),
    nav: S(({ index: a }) => [
      h("img", {
        src: t.images[a].src,
        alt: `View image ${a}`
      }, null, 8, Ba)
    ]),
    _: 1
  }, 8, ["items", "onSlideChange"]);
}
const tm = /* @__PURE__ */ E(Ea, [["render", za]]), Ua = {
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
function Ma(e, n, t, s, o, i) {
  return u(), d("li", {
    class: m(["slideshow__slide", { "is-active": t.active }])
  }, [
    g(e.$slots, "default")
  ], 2);
}
const nm = /* @__PURE__ */ E(Ua, [["render", Ma]]), Pa = {
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
}, La = ["id"], Fa = ["innerHTML"];
function Va(e, n, t, s, o, i) {
  return u(!0), d(x, null, O(t.rows, (l, r) => (u(), d("tr", {
    key: `br-${r}`,
    id: t.optionalAttr(t.isActual && l.id),
    class: m(t.resolveClasses(t.classes.row, { row: l.data, rowIndex: r, isActual: t.isActual, foot: t.foot })),
    style: H({
      height: l.height
    })
  }, [
    (u(!0), d(x, null, O(t.rowColumns, (a, c) => (u(), w(F(a.rowHeader ? "th" : "td"), {
      id: t.optionalAttr(t.isActual && a.rowHeader && a.getRowHeaderId(r)),
      scope: t.optionalAttr(t.isActual && a.rowHeader && "row"),
      key: `bc-${c}`,
      headers: t.optionalAttr(t.isActual && t.getCellHeaders(a, r)),
      class: m(t.resolveClasses(a.class, { column: a, index: c, isActual: t.isActual, row: l, rowIndex: r, foot: t.foot })),
      style: H({
        width: t.columnWidth
      })
    }, {
      default: S(() => [
        e.$slots[a.slot] ? g(e.$slots, a.slot, {
          key: 0,
          row: l.data,
          column: a,
          rowIndex: r,
          index: c,
          foot: t.foot,
          isActual: t.isActual
        }) : a.html ? (u(), d("div", {
          key: 1,
          innerHTML: t.value({ row: l, column: a, rowIndex: r, isActual: t.isActual, foot: t.foot })
        }, null, 8, Fa)) : (u(), d(x, { key: 2 }, [
          $(p(t.value({ row: l, column: a, rowIndex: r, isActual: t.isActual, foot: t.foot })), 1)
        ], 64))
      ]),
      _: 2
    }, 1032, ["id", "scope", "headers", "class", "style"]))), 128))
  ], 14, La))), 128);
}
const Ha = /* @__PURE__ */ E(Pa, [["render", Va]]), Na = {
  name: "UluTableStickyTable",
  components: {
    UluTableStickyRows: Ha
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
}, Da = ["aria-hidden"], Wa = {
  key: 0,
  class: "table-sticky__caption"
}, Xa = ["id"], Ya = ["id", "rowspan", "colspan", "data-child-columns", "aria-sort", "scope", "headers"], qa = ["innerHTML"], Ka = {
  class: "table-sticky__sort-icon",
  "aria-hidden": "true"
}, Ga = { class: "table-sticky__sort-icon-inner" }, Za = ["innerHTML"], Ja = { key: 1 }, Qa = { key: 2 };
function ec(e, n, t, s, o, i) {
  const l = W("UluTableStickyRows");
  return u(), d("table", {
    class: m(t.resolveClasses(t.classes.table, { isActual: t.isActual })),
    "aria-hidden": t.isActual ? "false" : "true"
  }, [
    t.caption ? (u(), d("caption", Wa, p(t.caption), 1)) : _("", !0),
    h("thead", null, [
      (u(!0), d(x, null, O(t.headerRows, (r, a) => (u(), d("tr", {
        key: `hr-${a}`,
        id: i.optionalAttr(t.isActual && r.id),
        class: m(t.resolveClasses(t.classes.rowHeader, { row: r, rowIndex: a, isActual: t.isActual })),
        style: H({
          height: r.height
        })
      }, [
        (u(!0), d(x, null, O(r.columns, (c, f) => (u(), d("th", {
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
          style: H({
            width: c.width
          }),
          "aria-sort": c.sort ? c.sortAscending ? "ascending" : "descending" : null,
          scope: i.optionalAttr(t.isActual && (c.colspan > 1 ? "colgroup" : "col")),
          headers: i.optionalAttr(t.isActual && i.getHeaderHeaders(c, a)),
          ref_for: !0,
          ref: (y) => i.addHeaderRef(c, y)
        }, [
          c.sortable ? (u(), w(F(t.isActual ? "button" : "div"), {
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
              }, null, 8, qa)) : (u(), d(x, { key: 2 }, [
                $(p(t.getColumnTitle({ column: c, index: f, isActual: t.isActual })), 1)
              ], 64)),
              h("span", Ka, [
                h("span", Ga, [
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
            }, null, 8, Za)) : (u(), d(x, { key: 2 }, [
              $(p(t.getColumnTitle({ column: c, index: f, isActual: t.isActual })), 1)
            ], 64))
          ], 64))
        ], 14, Ya))), 128))
      ], 14, Xa))), 128))
    ]),
    t.rows ? (u(), d("tbody", Ja, [
      I(l, {
        rows: t.rows,
        rowColumns: t.rowColumns,
        optionalAttr: i.optionalAttr,
        resolveClasses: t.resolveClasses,
        getCellHeaders: i.getCellHeaders,
        isActual: t.isActual,
        columnWidth: t.columnWidth,
        classes: t.classes,
        value: i.value
      }, xe({ _: 2 }, [
        O(e.$slots, (r, a) => ({
          name: a,
          fn: S((c) => [
            g(e.$slots, a, oe(ie(c)))
          ])
        }))
      ]), 1032, ["rows", "rowColumns", "optionalAttr", "resolveClasses", "getCellHeaders", "isActual", "columnWidth", "classes", "value"])
    ])) : _("", !0),
    t.footerRows ? (u(), d("tfoot", Qa, [
      I(l, {
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
      }, xe({ _: 2 }, [
        O(e.$slots, (r, a) => ({
          name: a,
          fn: S((c) => [
            g(e.$slots, a, oe(ie(c)))
          ])
        }))
      ]), 1032, ["rows", "rowColumns", "optionalAttr", "resolveClasses", "getCellHeaders", "isActual", "columnWidth", "classes", "value"])
    ])) : _("", !0)
  ], 10, Da);
}
const tc = /* @__PURE__ */ E(Na, [["render", ec]]);
function nc() {
  this.__data__ = [], this.size = 0;
}
function xs(e, n) {
  return e === n || e !== e && n !== n;
}
function kt(e, n) {
  for (var t = e.length; t--; )
    if (xs(e[t][0], n))
      return t;
  return -1;
}
var sc = Array.prototype, oc = sc.splice;
function ic(e) {
  var n = this.__data__, t = kt(n, e);
  if (t < 0)
    return !1;
  var s = n.length - 1;
  return t == s ? n.pop() : oc.call(n, t, 1), --this.size, !0;
}
function lc(e) {
  var n = this.__data__, t = kt(n, e);
  return t < 0 ? void 0 : n[t][1];
}
function rc(e) {
  return kt(this.__data__, e) > -1;
}
function ac(e, n) {
  var t = this.__data__, s = kt(t, e);
  return s < 0 ? (++this.size, t.push([e, n])) : t[s][1] = n, this;
}
function fe(e) {
  var n = -1, t = e == null ? 0 : e.length;
  for (this.clear(); ++n < t; ) {
    var s = e[n];
    this.set(s[0], s[1]);
  }
}
fe.prototype.clear = nc;
fe.prototype.delete = ic;
fe.prototype.get = lc;
fe.prototype.has = rc;
fe.prototype.set = ac;
function cc() {
  this.__data__ = new fe(), this.size = 0;
}
function uc(e) {
  var n = this.__data__, t = n.delete(e);
  return this.size = n.size, t;
}
function dc(e) {
  return this.__data__.get(e);
}
function fc(e) {
  return this.__data__.has(e);
}
var Rs = typeof global == "object" && global && global.Object === Object && global, hc = typeof self == "object" && self && self.Object === Object && self, re = Rs || hc || Function("return this")(), Ie = re.Symbol, Es = Object.prototype, mc = Es.hasOwnProperty, gc = Es.toString, Fe = Ie ? Ie.toStringTag : void 0;
function vc(e) {
  var n = mc.call(e, Fe), t = e[Fe];
  try {
    e[Fe] = void 0;
    var s = !0;
  } catch {
  }
  var o = gc.call(e);
  return s && (n ? e[Fe] = t : delete e[Fe]), o;
}
var yc = Object.prototype, pc = yc.toString;
function bc(e) {
  return pc.call(e);
}
var _c = "[object Null]", wc = "[object Undefined]", Tn = Ie ? Ie.toStringTag : void 0;
function Qe(e) {
  return e == null ? e === void 0 ? wc : _c : Tn && Tn in Object(e) ? vc(e) : bc(e);
}
function $t(e) {
  var n = typeof e;
  return e != null && (n == "object" || n == "function");
}
var Sc = "[object AsyncFunction]", kc = "[object Function]", $c = "[object GeneratorFunction]", Cc = "[object Proxy]";
function js(e) {
  if (!$t(e))
    return !1;
  var n = Qe(e);
  return n == kc || n == $c || n == Sc || n == Cc;
}
var It = re["__core-js_shared__"], On = function() {
  var e = /[^.]+$/.exec(It && It.keys && It.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function Ac(e) {
  return !!On && On in e;
}
var Tc = Function.prototype, Oc = Tc.toString;
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
var xc = /[\\^$.*+?()[\]{}|]/g, Rc = /^\[object .+?Constructor\]$/, Ec = Function.prototype, jc = Object.prototype, Ic = Ec.toString, Bc = jc.hasOwnProperty, zc = RegExp(
  "^" + Ic.call(Bc).replace(xc, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Uc(e) {
  if (!$t(e) || Ac(e))
    return !1;
  var n = js(e) ? zc : Rc;
  return n.test(Se(e));
}
function Mc(e, n) {
  return e?.[n];
}
function ke(e, n) {
  var t = Mc(e, n);
  return Uc(t) ? t : void 0;
}
var Ze = ke(re, "Map"), Je = ke(Object, "create");
function Pc() {
  this.__data__ = Je ? Je(null) : {}, this.size = 0;
}
function Lc(e) {
  var n = this.has(e) && delete this.__data__[e];
  return this.size -= n ? 1 : 0, n;
}
var Fc = "__lodash_hash_undefined__", Vc = Object.prototype, Hc = Vc.hasOwnProperty;
function Nc(e) {
  var n = this.__data__;
  if (Je) {
    var t = n[e];
    return t === Fc ? void 0 : t;
  }
  return Hc.call(n, e) ? n[e] : void 0;
}
var Dc = Object.prototype, Wc = Dc.hasOwnProperty;
function Xc(e) {
  var n = this.__data__;
  return Je ? n[e] !== void 0 : Wc.call(n, e);
}
var Yc = "__lodash_hash_undefined__";
function qc(e, n) {
  var t = this.__data__;
  return this.size += this.has(e) ? 0 : 1, t[e] = Je && n === void 0 ? Yc : n, this;
}
function _e(e) {
  var n = -1, t = e == null ? 0 : e.length;
  for (this.clear(); ++n < t; ) {
    var s = e[n];
    this.set(s[0], s[1]);
  }
}
_e.prototype.clear = Pc;
_e.prototype.delete = Lc;
_e.prototype.get = Nc;
_e.prototype.has = Xc;
_e.prototype.set = qc;
function Kc() {
  this.size = 0, this.__data__ = {
    hash: new _e(),
    map: new (Ze || fe)(),
    string: new _e()
  };
}
function Gc(e) {
  var n = typeof e;
  return n == "string" || n == "number" || n == "symbol" || n == "boolean" ? e !== "__proto__" : e === null;
}
function Ct(e, n) {
  var t = e.__data__;
  return Gc(n) ? t[typeof n == "string" ? "string" : "hash"] : t.map;
}
function Zc(e) {
  var n = Ct(this, e).delete(e);
  return this.size -= n ? 1 : 0, n;
}
function Jc(e) {
  return Ct(this, e).get(e);
}
function Qc(e) {
  return Ct(this, e).has(e);
}
function eu(e, n) {
  var t = Ct(this, e), s = t.size;
  return t.set(e, n), this.size += t.size == s ? 0 : 1, this;
}
function ze(e) {
  var n = -1, t = e == null ? 0 : e.length;
  for (this.clear(); ++n < t; ) {
    var s = e[n];
    this.set(s[0], s[1]);
  }
}
ze.prototype.clear = Kc;
ze.prototype.delete = Zc;
ze.prototype.get = Jc;
ze.prototype.has = Qc;
ze.prototype.set = eu;
var tu = 200;
function nu(e, n) {
  var t = this.__data__;
  if (t instanceof fe) {
    var s = t.__data__;
    if (!Ze || s.length < tu - 1)
      return s.push([e, n]), this.size = ++t.size, this;
    t = this.__data__ = new ze(s);
  }
  return t.set(e, n), this.size = t.size, this;
}
function Ue(e) {
  var n = this.__data__ = new fe(e);
  this.size = n.size;
}
Ue.prototype.clear = cc;
Ue.prototype.delete = uc;
Ue.prototype.get = dc;
Ue.prototype.has = fc;
Ue.prototype.set = nu;
function su(e, n) {
  for (var t = -1, s = e == null ? 0 : e.length; ++t < s && n(e[t], t, e) !== !1; )
    ;
  return e;
}
var xn = function() {
  try {
    var e = ke(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}();
function ou(e, n, t) {
  n == "__proto__" && xn ? xn(e, n, {
    configurable: !0,
    enumerable: !0,
    value: t,
    writable: !0
  }) : e[n] = t;
}
var iu = Object.prototype, lu = iu.hasOwnProperty;
function ru(e, n, t) {
  var s = e[n];
  (!(lu.call(e, n) && xs(s, t)) || t === void 0 && !(n in e)) && ou(e, n, t);
}
function au(e, n) {
  for (var t = -1, s = Array(e); ++t < e; )
    s[t] = n(t);
  return s;
}
function et(e) {
  return e != null && typeof e == "object";
}
var cu = "[object Arguments]";
function Rn(e) {
  return et(e) && Qe(e) == cu;
}
var Is = Object.prototype, uu = Is.hasOwnProperty, du = Is.propertyIsEnumerable, fu = Rn(/* @__PURE__ */ function() {
  return arguments;
}()) ? Rn : function(e) {
  return et(e) && uu.call(e, "callee") && !du.call(e, "callee");
}, dn = Array.isArray;
function hu() {
  return !1;
}
var Bs = typeof exports == "object" && exports && !exports.nodeType && exports, En = Bs && typeof module == "object" && module && !module.nodeType && module, mu = En && En.exports === Bs, jn = mu ? re.Buffer : void 0, gu = jn ? jn.isBuffer : void 0, zs = gu || hu, vu = 9007199254740991, yu = /^(?:0|[1-9]\d*)$/;
function pu(e, n) {
  var t = typeof e;
  return n = n ?? vu, !!n && (t == "number" || t != "symbol" && yu.test(e)) && e > -1 && e % 1 == 0 && e < n;
}
var bu = 9007199254740991;
function Us(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= bu;
}
var _u = "[object Arguments]", wu = "[object Array]", Su = "[object Boolean]", ku = "[object Date]", $u = "[object Error]", Cu = "[object Function]", Au = "[object Map]", Tu = "[object Number]", Ou = "[object Object]", xu = "[object RegExp]", Ru = "[object Set]", Eu = "[object String]", ju = "[object WeakMap]", Iu = "[object ArrayBuffer]", Bu = "[object DataView]", zu = "[object Float32Array]", Uu = "[object Float64Array]", Mu = "[object Int8Array]", Pu = "[object Int16Array]", Lu = "[object Int32Array]", Fu = "[object Uint8Array]", Vu = "[object Uint8ClampedArray]", Hu = "[object Uint16Array]", Nu = "[object Uint32Array]", L = {};
L[zu] = L[Uu] = L[Mu] = L[Pu] = L[Lu] = L[Fu] = L[Vu] = L[Hu] = L[Nu] = !0;
L[_u] = L[wu] = L[Iu] = L[Su] = L[Bu] = L[ku] = L[$u] = L[Cu] = L[Au] = L[Tu] = L[Ou] = L[xu] = L[Ru] = L[Eu] = L[ju] = !1;
function Du(e) {
  return et(e) && Us(e.length) && !!L[Qe(e)];
}
function fn(e) {
  return function(n) {
    return e(n);
  };
}
var Ms = typeof exports == "object" && exports && !exports.nodeType && exports, We = Ms && typeof module == "object" && module && !module.nodeType && module, Wu = We && We.exports === Ms, Bt = Wu && Rs.process, Be = function() {
  try {
    var e = We && We.require && We.require("util").types;
    return e || Bt && Bt.binding && Bt.binding("util");
  } catch {
  }
}(), In = Be && Be.isTypedArray, Xu = In ? fn(In) : Du, Yu = Object.prototype, qu = Yu.hasOwnProperty;
function Ku(e, n) {
  var t = dn(e), s = !t && fu(e), o = !t && !s && zs(e), i = !t && !s && !o && Xu(e), l = t || s || o || i, r = l ? au(e.length, String) : [], a = r.length;
  for (var c in e)
    qu.call(e, c) && !(l && // Safari 9 has enumerable `arguments.length` in strict mode.
    (c == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    o && (c == "offset" || c == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    i && (c == "buffer" || c == "byteLength" || c == "byteOffset") || // Skip index properties.
    pu(c, a))) && r.push(c);
  return r;
}
var Gu = Object.prototype;
function Ps(e) {
  var n = e && e.constructor, t = typeof n == "function" && n.prototype || Gu;
  return e === t;
}
function Ls(e, n) {
  return function(t) {
    return e(n(t));
  };
}
var Zu = Ls(Object.keys, Object), Ju = Object.prototype, Qu = Ju.hasOwnProperty;
function ed(e) {
  if (!Ps(e))
    return Zu(e);
  var n = [];
  for (var t in Object(e))
    Qu.call(e, t) && t != "constructor" && n.push(t);
  return n;
}
function td(e) {
  return e != null && Us(e.length) && !js(e);
}
function nd(e) {
  return td(e) ? Ku(e) : ed(e);
}
var Fs = typeof exports == "object" && exports && !exports.nodeType && exports, Bn = Fs && typeof module == "object" && module && !module.nodeType && module, sd = Bn && Bn.exports === Fs, zn = sd ? re.Buffer : void 0;
zn && zn.allocUnsafe;
function od(e, n) {
  return e.slice();
}
function id(e, n) {
  for (var t = -1, s = e == null ? 0 : e.length, o = 0, i = []; ++t < s; ) {
    var l = e[t];
    n(l, t, e) && (i[o++] = l);
  }
  return i;
}
function ld() {
  return [];
}
var rd = Object.prototype, ad = rd.propertyIsEnumerable, Un = Object.getOwnPropertySymbols, cd = Un ? function(e) {
  return e == null ? [] : (e = Object(e), id(Un(e), function(n) {
    return ad.call(e, n);
  }));
} : ld;
function ud(e, n) {
  for (var t = -1, s = n.length, o = e.length; ++t < s; )
    e[o + t] = n[t];
  return e;
}
var dd = Ls(Object.getPrototypeOf, Object);
function fd(e, n, t) {
  var s = n(e);
  return dn(e) ? s : ud(s, t(e));
}
function hd(e) {
  return fd(e, nd, cd);
}
var Wt = ke(re, "DataView"), Xt = ke(re, "Promise"), Yt = ke(re, "Set"), qt = ke(re, "WeakMap"), Mn = "[object Map]", md = "[object Object]", Pn = "[object Promise]", Ln = "[object Set]", Fn = "[object WeakMap]", Vn = "[object DataView]", gd = Se(Wt), vd = Se(Ze), yd = Se(Xt), pd = Se(Yt), bd = Se(qt), ce = Qe;
(Wt && ce(new Wt(new ArrayBuffer(1))) != Vn || Ze && ce(new Ze()) != Mn || Xt && ce(Xt.resolve()) != Pn || Yt && ce(new Yt()) != Ln || qt && ce(new qt()) != Fn) && (ce = function(e) {
  var n = Qe(e), t = n == md ? e.constructor : void 0, s = t ? Se(t) : "";
  if (s)
    switch (s) {
      case gd:
        return Vn;
      case vd:
        return Mn;
      case yd:
        return Pn;
      case pd:
        return Ln;
      case bd:
        return Fn;
    }
  return n;
});
var _d = Object.prototype, wd = _d.hasOwnProperty;
function Sd(e) {
  var n = e.length, t = new e.constructor(n);
  return n && typeof e[0] == "string" && wd.call(e, "index") && (t.index = e.index, t.input = e.input), t;
}
var Hn = re.Uint8Array;
function hn(e) {
  var n = new e.constructor(e.byteLength);
  return new Hn(n).set(new Hn(e)), n;
}
function kd(e, n) {
  var t = hn(e.buffer);
  return new e.constructor(t, e.byteOffset, e.byteLength);
}
var $d = /\w*$/;
function Cd(e) {
  var n = new e.constructor(e.source, $d.exec(e));
  return n.lastIndex = e.lastIndex, n;
}
var Nn = Ie ? Ie.prototype : void 0, Dn = Nn ? Nn.valueOf : void 0;
function Ad(e) {
  return Dn ? Object(Dn.call(e)) : {};
}
function Td(e, n) {
  var t = hn(e.buffer);
  return new e.constructor(t, e.byteOffset, e.length);
}
var Od = "[object Boolean]", xd = "[object Date]", Rd = "[object Map]", Ed = "[object Number]", jd = "[object RegExp]", Id = "[object Set]", Bd = "[object String]", zd = "[object Symbol]", Ud = "[object ArrayBuffer]", Md = "[object DataView]", Pd = "[object Float32Array]", Ld = "[object Float64Array]", Fd = "[object Int8Array]", Vd = "[object Int16Array]", Hd = "[object Int32Array]", Nd = "[object Uint8Array]", Dd = "[object Uint8ClampedArray]", Wd = "[object Uint16Array]", Xd = "[object Uint32Array]";
function Yd(e, n, t) {
  var s = e.constructor;
  switch (n) {
    case Ud:
      return hn(e);
    case Od:
    case xd:
      return new s(+e);
    case Md:
      return kd(e);
    case Pd:
    case Ld:
    case Fd:
    case Vd:
    case Hd:
    case Nd:
    case Dd:
    case Wd:
    case Xd:
      return Td(e);
    case Rd:
      return new s();
    case Ed:
    case Bd:
      return new s(e);
    case jd:
      return Cd(e);
    case Id:
      return new s();
    case zd:
      return Ad(e);
  }
}
var Wn = Object.create, qd = /* @__PURE__ */ function() {
  function e() {
  }
  return function(n) {
    if (!$t(n))
      return {};
    if (Wn)
      return Wn(n);
    e.prototype = n;
    var t = new e();
    return e.prototype = void 0, t;
  };
}();
function Kd(e) {
  return typeof e.constructor == "function" && !Ps(e) ? qd(dd(e)) : {};
}
var Gd = "[object Map]";
function Zd(e) {
  return et(e) && ce(e) == Gd;
}
var Xn = Be && Be.isMap, Jd = Xn ? fn(Xn) : Zd, Qd = "[object Set]";
function ef(e) {
  return et(e) && ce(e) == Qd;
}
var Yn = Be && Be.isSet, tf = Yn ? fn(Yn) : ef, Vs = "[object Arguments]", nf = "[object Array]", sf = "[object Boolean]", of = "[object Date]", lf = "[object Error]", Hs = "[object Function]", rf = "[object GeneratorFunction]", af = "[object Map]", cf = "[object Number]", Ns = "[object Object]", uf = "[object RegExp]", df = "[object Set]", ff = "[object String]", hf = "[object Symbol]", mf = "[object WeakMap]", gf = "[object ArrayBuffer]", vf = "[object DataView]", yf = "[object Float32Array]", pf = "[object Float64Array]", bf = "[object Int8Array]", _f = "[object Int16Array]", wf = "[object Int32Array]", Sf = "[object Uint8Array]", kf = "[object Uint8ClampedArray]", $f = "[object Uint16Array]", Cf = "[object Uint32Array]", M = {};
M[Vs] = M[nf] = M[gf] = M[vf] = M[sf] = M[of] = M[yf] = M[pf] = M[bf] = M[_f] = M[wf] = M[af] = M[cf] = M[Ns] = M[uf] = M[df] = M[ff] = M[hf] = M[Sf] = M[kf] = M[$f] = M[Cf] = !0;
M[lf] = M[Hs] = M[mf] = !1;
function at(e, n, t, s, o, i) {
  var l;
  if (l !== void 0)
    return l;
  if (!$t(e))
    return e;
  var r = dn(e);
  if (r)
    l = Sd(e);
  else {
    var a = ce(e), c = a == Hs || a == rf;
    if (zs(e))
      return od(e);
    if (a == Ns || a == Vs || c && !o)
      l = c ? {} : Kd(e);
    else {
      if (!M[a])
        return o ? e : {};
      l = Yd(e, a);
    }
  }
  i || (i = new Ue());
  var f = i.get(e);
  if (f)
    return f;
  i.set(e, l), tf(e) ? e.forEach(function(k) {
    l.add(at(k, n, t, k, e, i));
  }) : Jd(e) && e.forEach(function(k, A) {
    l.set(A, at(k, n, t, A, e, i));
  });
  var y = hd, v = r ? void 0 : y(e);
  return su(v || e, function(k, A) {
    v && (A = k, k = e[A]), ru(l, A, at(k, n, t, A, e, i));
  }), l;
}
var Af = 1, Tf = 4;
function Of(e) {
  return at(e, Af | Tf);
}
const zt = (e) => e.every((n) => typeof n == "object"), qn = !0, Ds = () => window.innerWidth;
let Kn = Ds();
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
      required: qn
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
      validator: zt,
      required: qn
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
      validator: zt
      // required
    },
    /**
     * Array of rows for footer (tfoot)
     */
    footerRows: {
      type: Array,
      validator: zt
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
      resizeHandler: pt(this.onResize.bind(this), 500, !0),
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
        const l = s.slice();
        o.getRowHeaders = (r) => l.map((a) => a(r)).join(" "), o.rowHeader && (o.getRowHeaderId = (r) => `${this.idPrefix}-rh-${r}-${i}`, s.push(o.getRowHeaderId));
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
      const e = this.idCreator("c"), n = Of(this.columns), t = (s, o) => {
        s.id = e(), s.parent = o, s.width = "auto", s.boxWidth = null, s.sortApplied = !1, s.sortAscending = !1, s.sortFocused = !1;
        let i = [];
        o && (o.headers && o.headers.length ? i = [...o.headers] : i.push(o.id)), i.push(s.id), s.headers = i, s.columns ? s.columns.forEach((l) => t(l, s)) : !s.key && !s.value && !s.slot && console.warn("UluTableSticky: Missing 'key', 'value' or 'slot' in column configuration for", s);
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
      function i(l, r) {
        const a = r.columns;
        a && a.forEach((c) => i(1 + l, c)), r.rowspan = a ? 1 : t - l, r.colspan = a ? a.reduce((c, f) => c + f.colspan, 0) : 1, o[l].columns.push(r);
      }
      return e.forEach((l) => i(0, l)), o;
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
      const e = Ds();
      Kn !== e && (Kn = e, this.resizing ? (this.resizing = !1, this.setTableSizes(), this.checkOverflowX(), this.syncScrollLeft()) : (this.resizing = !0, this.removeTableSizes()));
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
        this.sizesCalculated = !0, Os(() => {
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
}, Rf = { class: "table-sticky__sticky-wrap table-sticky__sticky-wrap--header" }, Ef = { class: "table-sticky__header-wrap" }, jf = { class: "table-sticky__sticky-wrap table-sticky__sticky-wrap--first-column-header" }, If = { class: "table-sticky__sticky-wrap table-sticky__sticky-wrap--controls" }, Bf = {
  key: 2,
  class: "table-sticky__controls-inner"
}, zf = ["disabled"], Uf = ["disabled"], Mf = {
  ref: "display",
  class: "table-sticky__display"
};
function Pf(e, n, t, s, o, i) {
  const l = W("UluTableStickyTable");
  return u(), d("div", {
    class: m(["table-sticky", {
      "table-sticky--overflown-x": o.overflownX,
      "table-sticky--can-scroll-right": o.canScrollRight,
      "table-sticky--can-scroll-left": o.canScrollLeft
    }])
  }, [
    h("div", Rf, [
      h("div", Ef, [
        I(l, {
          ref: "header",
          class: "table-sticky__table table-sticky__table--header",
          classes: t.classes,
          caption: t.caption,
          resolveClasses: i.resolveClasses,
          getColumnTitle: t.getColumnTitle,
          idPrefix: t.idPrefix,
          headerRows: o.headerRows,
          style: H({
            opacity: o.sizesCalculated ? "1" : "0",
            pointerEvents: o.sizesCalculated ? "auto" : "none",
            width: o.tableWidth
          }),
          onColumnSorted: i.applySort
        }, xe({ _: 2 }, [
          O(e.$slots, (r, a) => ({
            name: a,
            fn: S((c) => [
              g(e.$slots, a, oe(ie(c)))
            ])
          }))
        ]), 1032, ["classes", "caption", "resolveClasses", "getColumnTitle", "idPrefix", "headerRows", "style", "onColumnSorted"])
      ])
    ]),
    h("div", jf, [
      t.firstColumnSticky ? (u(), w(l, {
        key: 0,
        ref: "firstColumnHeader",
        class: "table-sticky__table table-sticky__table--first-column-header",
        classes: t.classes,
        caption: t.caption,
        resolveClasses: i.resolveClasses,
        getColumnTitle: t.getColumnTitle,
        idPrefix: t.idPrefix,
        headerRows: i.headerRowsFirst,
        style: H({
          opacity: i.headerOpacityX,
          pointerEvents: i.headerVisibleX ? "auto" : "none"
        }),
        onColumnSorted: i.applySort
      }, xe({ _: 2 }, [
        O(e.$slots, (r, a) => ({
          name: a,
          fn: S((c) => [
            g(e.$slots, a, oe(ie(c)))
          ])
        }))
      ]), 1032, ["classes", "caption", "resolveClasses", "getColumnTitle", "idPrefix", "headerRows", "style", "onColumnSorted"])) : _("", !0)
    ]),
    h("div", If, [
      Re(h("div", {
        class: m(["table-sticky__controls", i.resolveClasses(t.classes.controls)]),
        ref: "controls"
      }, [
        e.$slots.controls ? g(e.$slots, "controls", {
          key: 0,
          scrollLeft: i.scrollLeft,
          scrollRight: i.scrollRight,
          canScrollLeft: o.canScrollLeft,
          canScrollRight: o.canScrollRight
        }) : t.controlsComponent ? (u(), w(F(t.controlsComponent), {
          key: 1,
          scrollLeft: i.scrollLeft,
          scrollRight: i.scrollRight,
          canScrollLeft: o.canScrollLeft,
          canScrollRight: o.canScrollRight
        }, null, 8, ["scrollLeft", "scrollRight", "canScrollLeft", "canScrollRight"])) : (u(), d("div", Bf, [
          h("button", {
            class: m(["table-sticky__control table-sticky__control--left", i.resolveClasses(t.classes.controlButton)]),
            "aria-label": "Scroll Left",
            onClick: n[0] || (n[0] = (...r) => i.scrollLeft && i.scrollLeft(...r)),
            disabled: !o.canScrollLeft
          }, [
            g(e.$slots, "controlLeft", {}, () => [
              n[2] || (n[2] = $(" ← ", -1))
            ])
          ], 10, zf),
          h("button", {
            class: m(["table-sticky__control table-sticky__control--right", i.resolveClasses(t.classes.controlButton)]),
            "aria-label": "Scroll Right",
            onClick: n[1] || (n[1] = (...r) => i.scrollRight && i.scrollRight(...r)),
            disabled: !o.canScrollRight
          }, [
            g(e.$slots, "controlRight", {}, () => [
              n[3] || (n[3] = $(" → ", -1))
            ])
          ], 10, Uf)
        ]))
      ], 2), [
        [Ut, i.controlsShown]
      ])
    ]),
    h("div", Mf, [
      I(l, {
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
      }, xe({ _: 2 }, [
        O(e.$slots, (r, a) => ({
          name: a,
          fn: S((c) => [
            g(e.$slots, a, oe(ie(c)))
          ])
        }))
      ]), 1032, ["classes", "resolveClasses", "headerRows", "rows", "footerRows", "rowColumns", "caption", "idPrefix", "getRowValue", "getColumnTitle", "onVnodeMounted", "onActualHeaderRemoved", "onActualHeaderAdded", "onColumnSorted"])
    ], 512),
    t.firstColumnSticky ? (u(), w(l, {
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
      style: H({
        opacity: i.headerOpacityX,
        pointerEvents: i.headerVisibleX ? "auto" : "none"
      }),
      onColumnSorted: i.applySort
    }, xe({ _: 2 }, [
      O(e.$slots, (r, a) => ({
        name: a,
        fn: S((c) => [
          g(e.$slots, a, oe(ie(c)))
        ])
      }))
    ]), 1032, ["classes", "resolveClasses", "caption", "headerRows", "columnWidth", "rows", "footerRows", "rowColumns", "idPrefix", "getRowValue", "getColumnTitle", "style", "onColumnSorted"])) : _("", !0)
  ], 2);
}
const sm = /* @__PURE__ */ E(xf, [["render", Pf]]), om = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  dom: pi,
  router: Li
}, Symbol.toStringTag, { value: "Module" }));
export {
  Eh as $,
  dh as A,
  N as B,
  fh as C,
  hh as D,
  mh as E,
  _s as F,
  Cs as G,
  gh as H,
  vh as I,
  yh as J,
  ph as K,
  bh as L,
  _h as M,
  wh as N,
  Sh as O,
  kh as P,
  $h as Q,
  ws as R,
  ki as S,
  Ch as T,
  fs as U,
  Ah as V,
  Th as W,
  Oh as X,
  xh as Y,
  Rh as Z,
  $n as _,
  ot as a,
  jh as a0,
  Ih as a1,
  Bh as a2,
  zh as a3,
  Uh as a4,
  Mh as a5,
  Ph as a6,
  Lh as a7,
  Fh as a8,
  Vh as a9,
  Jf as aA,
  Hh as aa,
  Nh as ab,
  Dh as ac,
  Wh as ad,
  Xh as ae,
  ft as af,
  Yh as ag,
  qh as ah,
  Kh as ai,
  Gh as aj,
  Zh as ak,
  Qh as al,
  em as am,
  fa as an,
  tm as ao,
  Ra as ap,
  nm as aq,
  sm as ar,
  Ha as as,
  tc as at,
  Ro as au,
  le as av,
  Ci as aw,
  Ti as ax,
  ni as ay,
  Zf as az,
  Wf as b,
  Xf as c,
  Yf as d,
  qf as e,
  Kf as f,
  Bo as g,
  Ht as h,
  om as i,
  Gf as j,
  Qf as k,
  Te as l,
  eh as m,
  th as n,
  nh as o,
  sh as p,
  oh as q,
  Jh as r,
  ih as s,
  Qi as t,
  lh as u,
  Wi as v,
  rh as w,
  ah as x,
  ch as y,
  uh as z
};
