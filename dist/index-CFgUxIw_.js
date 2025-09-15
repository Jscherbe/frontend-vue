import { reactive as Kt, ref as j, computed as w, resolveDirective as Zn, createElementBlock as d, openBlock as u, Fragment as x, withDirectives as Oe, createElementVNode as h, unref as T, normalizeClass as m, renderSlot as g, createTextVNode as k, toDisplayString as y, withKeys as Jn, normalizeStyle as H, createCommentVNode as b, nextTick as Qn, toRef as Xs, createBlock as _, Teleport as ft, resolveDynamicComponent as F, mergeProps as ae, inject as ht, watchEffect as mt, defineAsyncComponent as Ys, markRaw as xe, toRefs as qs, toValue as ot, resolveComponent as D, withModifiers as Ks, createVNode as R, useSlots as Gs, renderList as O, TransitionGroup as es, withCtx as S, onMounted as gt, onBeforeUnmount as ts, watch as De, isRef as Zs, hasInjectionContext as Js, getCurrentInstance as Qs, onDeactivated as eo, onActivated as to, onUnmounted as ns, normalizeProps as ee, guardReactiveProps as te, vModelText as no, vShow as Mt, createSlots as Te } from "vue";
import { inline as ss, offset as os, flip as is, shift as rs, arrow as ls, useFloating as as, autoUpdate as cs } from "@floating-ui/vue";
import { useRoute as us, useRouter as so, RouterLink as vt } from "vue-router";
import { Tab as oo, TabGroup as io, TabList as ro, TabPanel as lo, TabPanels as ao } from "@headlessui/vue";
import co from "gsap";
import uo from "fuse.js";
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
function qf(e, n = {}) {
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
const nt = {
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
}, ve = {
  plugin: { ...nt.plugin },
  popover: { ...nt.popover },
  tooltip: { ...nt.tooltip, ...nt.popover }
}, Gt = j(!1), Zt = j(null);
function fo(e = {}) {
  return Object.assign(ve.popover, e.popover), Object.assign(ve.tooltip, e.tooltip), Object.assign(ve.plugin, e.plugin), ve;
}
function ho(e) {
  return Object.assign({}, ve.tooltip, e);
}
function mo(e) {
  Gt.value = !0, Zt.value = e;
}
function go() {
  Gt.value = !1, Zt.value = null;
}
const it = /* @__PURE__ */ new WeakMap(), vo = {
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
  const t = yo(e, n);
  if (!t) return;
  let s = null;
  const o = () => {
    s || (s = setTimeout(() => {
      mo(t), clearTimeout(s);
    }, t.delay));
  }, i = () => {
    s && (clearTimeout(s), s = null), go();
  };
  t.showEvents.forEach((r) => {
    e.addEventListener(r, o);
  }), t.hideEvents.forEach((r) => {
    e.addEventListener(r, i);
  }), it.set(e, { onShow: o, onHide: i, config: t });
}
function yn(e) {
  if (!it.has(e))
    return;
  const { config: n, onShow: t, onHide: s } = it.get(e);
  n.showEvents.forEach((o) => {
    e.removeEventListener(o, t);
  }), n.hideEvents.forEach((o) => {
    e.removeEventListener(o, s);
  }), it.delete(e);
}
function yo(e, n) {
  const { value: t } = n;
  let s;
  if (!(t === !1 || t === null))
    return typeof t == "object" ? s = t : s = { content: t }, ho(Object.assign({}, { trigger: e }, s));
}
let po = 0;
function pn() {
  return `ulu-popovers-uid-${++po}`;
}
const bo = ["id", "disabled", "aria-expanded", "aria-controls", "aria-label"], _o = ["aria-labelledby", "id", "data-placement"], wo = { class: "popover__inner" }, So = {
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
    const t = n, s = e, o = pn(), i = pn(), r = Object.assign({}, ve.popover, s.config), l = j(s.startOpen || !1), a = j(null), c = j(null), f = j(null), p = [
      ...r.inline ? [ss()] : [],
      ...r.offset ? [os(r.offset)] : [],
      is(),
      rs(),
      ...r.arrow ? [ls({ element: f })] : []
    ], v = {
      placement: r.placement,
      whileElementsMounted: cs,
      middleware: p
    }, {
      floatingStyles: $,
      placement: A,
      middlewareData: U,
      update: I,
      isPositioned: ue
    } = as(a, c, v), Je = w(() => {
      const X = U.value?.arrow;
      return X ? {
        position: "absolute",
        left: X?.x != null ? `${X.x}px` : "",
        top: X?.y != null ? `${X.y}px` : ""
      } : null;
    });
    r.onReady && r.onReady({ update: I, isPositioned: ue });
    const Qe = () => {
      ge(!l.value);
    }, ge = (X) => {
      l.value = X;
      const fe = {
        trigger: T(a),
        content: T(c),
        isOpen: T(l)
      }, ke = { isOpen: fe.isOpen };
      Qn(() => {
        l.value ? (I(), window.setTimeout(() => {
          At(), s.directFocus(fe), t("toggle", ke);
        }, 0)) : (J(), s.directFocus(fe), t("toggle", ke));
      });
    };
    let oe;
    const At = () => {
      s.clickOutsideCloses && (oe && J(), oe = (X) => {
        c.value.contains(X.target) || ge(!1);
      }, document.addEventListener("click", oe));
    }, J = () => {
      oe && (document.removeEventListener("click", oe), oe = null);
    }, de = () => ge(!1);
    return (X, fe) => {
      const ke = Zn("ulu-tooltip");
      return u(), d(x, null, [
        Oe((u(), d("button", {
          type: "button",
          ref_key: "trigger",
          ref: a,
          onClick: Qe,
          id: T(i),
          disabled: e.disabled,
          class: m([
            { [e.activeClass]: l.value },
            e.classes.trigger
          ]),
          "aria-expanded": l.value ? "true" : "false",
          "aria-controls": T(o),
          "aria-label": e.triggerAlt
        }, [
          g(X.$slots, "trigger", {
            isOpen: l.value,
            close: de
          }, () => [
            k(y(e.triggerText), 1)
          ])
        ], 10, bo)), [
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
          "aria-labelledby": T(i),
          id: T(o),
          style: H(T($)),
          "data-placement": T(A),
          onKeydown: fe[0] || (fe[0] = Jn((mn) => ge(!1), ["esc"])),
          tabindex: "-1"
        }, [
          h("span", wo, [
            g(X.$slots, "default", {
              isOpen: l.value,
              toggle: Qe,
              close: de
            })
          ]),
          X.$slots.footer ? (u(), d("span", So, [
            g(X.$slots, "footer", { close: de })
          ])) : b("", !0),
          T(r).arrow ? (u(), d("span", {
            key: 1,
            class: "popover__arrow",
            ref_key: "contentArrow",
            ref: f,
            style: H(Je.value),
            "data-ulu-popover-arrow": ""
          }, null, 4)) : b("", !0)
        ], 46, _o)
      ], 64);
    };
  }
}, ko = ["data-placement"], $o = ["innerHTML"], Co = {
  key: 1,
  class: "popover__inner"
}, Ao = {
  __name: "UluTooltipPopover",
  props: {
    config: Object
  },
  setup(e) {
    const n = Xs(e.config.trigger), t = j(null), s = j(null), o = [
      ...e.config.inline ? [ss()] : [],
      ...e.config.offset ? [os(e.config.offset)] : [],
      is(),
      rs(),
      ...e.config.arrow ? [ls({ element: s })] : []
    ], i = {
      placement: e.config.placement,
      whileElementsMounted: cs,
      middleware: o
    }, {
      floatingStyles: r,
      placement: l,
      middlewareData: a,
      update: c,
      isPositioned: f
    } = as(n, t, i), p = w(() => {
      const v = a.value?.arrow;
      return v ? {
        position: "absolute",
        left: v?.x != null ? `${v.x}px` : "",
        top: v?.y != null ? `${v.y}px` : ""
      } : null;
    });
    return e.config.onReady && e.config.onReady({ update: c, isPositioned: f }), (v, $) => (u(), d("span", {
      class: m(["popover popover--tooltip is-active", e.config.class]),
      ref_key: "content",
      ref: t,
      "aria-hidden": "true",
      "data-placement": T(l),
      style: H(T(r))
    }, [
      e.config.isHtml ? (u(), d("span", {
        key: 0,
        class: "popover__inner",
        innerHTML: e.config.content
      }, null, 8, $o)) : (u(), d("span", Co, y(e.config.content), 1)),
      e.config.arrow ? (u(), d("span", {
        key: 2,
        class: "popover__arrow",
        ref_key: "contentArrow",
        ref: s,
        style: H(p.value)
      }, null, 4)) : b("", !0)
    ], 14, ko));
  }
}, To = {
  __name: "UluTooltipDisplay",
  setup(e) {
    return (n, t) => (u(), _(ft, {
      to: T(ve).plugin.tooltipTeleportTo
    }, [
      T(Gt) ? (u(), _(Ao, {
        key: 0,
        config: T(Zt)
      }, null, 8, ["config"])) : b("", !0)
    ], 8, ["to"]));
  }
};
function Kf(e, n = {}) {
  const t = fo(n);
  t.plugin.global && (e.directive(t.plugin.directiveName, vo), e.component("UluTooltipDisplay", To), e.component("UluPopover", yt));
}
const E = (e, n) => {
  const t = e.__vccOpts || e;
  for (const [s, o] of n)
    t[s] = o;
  return t;
}, Oo = {
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
function xo(e, n, t, s, o, i) {
  return i.currentModal ? (u(), _(F(i.currentModal.component), ae({ key: 0 }, i.currentProps, {
    modelValue: o.open,
    "onUpdate:modelValue": n[0] || (n[0] = (r) => o.open = r),
    onVnodeMounted: i.modalMounted,
    onVnodeUnmounted: i.modalUnmounted
  }), null, 16, ["modelValue", "onVnodeMounted", "onVnodeUnmounted"])) : b("", !0);
}
const Eo = /* @__PURE__ */ E(Oo, [["render", xo]]);
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
    const n = ht("uluCore"), t = j(null), { getIconProps: s, getClassesFromDefinition: o } = Ro();
    let i;
    const r = e, l = w(() => n.getSetting("fontAwesomeStatic")), a = w(() => n.getSetting("iconComponent")), c = w(() => n.getSetting("iconPropResolver")), f = w(() => {
      const { icon: U } = r;
      if (typeof U == "string" && U.startsWith("type:"))
        try {
          const I = U.substring(5);
          return n.getIcon(I);
        } catch (I) {
          return console.warn(I), null;
        }
      return U;
    }), p = w(() => !a.value || !f.value ? null : c.value(f.value)), v = w(() => s(f.value)), $ = w(() => o(f.value)), A = w(() => ({
      "flow-inline": r.spaced
    }));
    return mt(async () => {
      if (!l.value && f.value) {
        if (t.value === null)
          if (i)
            t.value = xe(i.FontAwesomeIcon);
          else {
            const U = Ys(async () => {
              const I = await import("./index.es-HlG3u0J5.js");
              return i = I, I.FontAwesomeIcon;
            });
            t.value = xe(U);
          }
      } else
        t.value = null;
    }), (U, I) => a.value ? (u(), _(F(a.value), ae({ key: 0 }, p.value, { class: A.value }), null, 16, ["class"])) : !l.value && t.value && f.value ? (u(), _(F(t.value), ae({ key: 1 }, v.value, { class: A.value }), null, 16, ["class"])) : l.value && f.value ? (u(), d("span", {
      key: 2,
      class: m([$.value, A.value]),
      "aria-hidden": "true"
    }, null, 2)) : b("", !0);
  }
};
function Ut(e) {
  const n = /* @__PURE__ */ new Set();
  if (!e)
    return n;
  if (typeof e == "string")
    e.split(" ").forEach((t) => {
      t && n.add(t);
    });
  else if (Array.isArray(e))
    e.forEach((t) => {
      Ut(t).forEach((s) => n.add(s));
    });
  else if (typeof e == "object")
    for (const t in e)
      Object.prototype.hasOwnProperty.call(e, t) && e[t] && t && n.add(t);
  return n;
}
function ne({ props: e, baseClass: n, internal: t = {} }) {
  const { modifiers: s } = qs(e);
  return { resolvedModifiers: w(() => {
    const i = ot(n), r = Ut(ot(s)), l = Ut(ot(t));
    if (!i)
      return console.warn("useModifiers: Missing 'baseClass' argument, modifiers will not be applied."), "";
    const a = /* @__PURE__ */ new Set([...l, ...r]);
    return Array.from(a).map((c) => `${i}--${c}`);
  }) };
}
function ds() {
  return typeof window < "u" && typeof window.document < "u";
}
function jo(e, n) {
  const t = e.getBoundingClientRect();
  return n.clientY < t.top || // above
  n.clientY > t.top + t.height || // below
  n.clientX < t.left || // left side
  n.clientX > t.left + t.width;
}
function Io(e = document.body, n = window) {
  return n.innerWidth - e.clientWidth;
}
function Bo({ preventShift: e = !1, container: n = document.body }) {
  const t = n.style.overflow, s = n.style.paddingRight;
  if (n.style.overflow = "hidden", e) {
    const o = Io();
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
    var r = s || this, l = arguments, a = function() {
      o = null, t || e.apply(r, l);
    }, c = t && !o;
    clearTimeout(o), o = setTimeout(a, n), c && e.apply(r, l);
  };
}
ds() && (Mo(), Uo());
const bn = {
  /**
   * Event is dispatched when DOM in the page has changed, triggers updates from
   * all modules listening for the change (init instances, etc)
   * - Is triggered by modules that were responsible for modifying the page
   */
  pageModified(e) {
    e.dispatchEvent(Le("pageModified"));
  },
  /**
   * Event called when page is resized
   */
  pageResized(e) {
    e.dispatchEvent(Le("pageResized"));
  },
  /**
   * Event dispatched before page print begins (teardown/restructure/hide things)
   */
  beforePrint(e) {
    e.dispatchEvent(Le("beforePrint"));
  },
  /**
   * Event dispatched after page print (cleanup)
   */
  afterPrint(e) {
    e.dispatchEvent(Le("afterPrint"));
  }
};
function Pt(e, n) {
  bn[e] ? bn[e](n) : console.warn(`Unable to dispatch site event: ${e} in context:`, n);
}
function zo(e) {
  return "ulu:" + e;
}
function Le(e, n = null, t = { bubbles: !0 }) {
  return new CustomEvent(zo(e), { detail: n, ...t });
}
function Mo() {
  window.addEventListener("resize", pt(() => Pt("pageResized", document), 250));
}
function Uo() {
  window.addEventListener("beforeprint", () => {
    Pt("beforePrint", document);
  }), window.addEventListener("afterprint", () => {
    Pt("afterPrint", document);
  });
}
function Po(e) {
  return typeof e == "object" && e?.constructor?.name;
}
function Lo(e, n, t) {
  const s = Po(n) || "Logger";
  console[e](s, ...t);
}
function Ce(e, ...n) {
}
function st(e, ...n) {
  Lo("error", e, n);
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
      st(this, "Missing required elements: control, container");
      return;
    }
    const o = Object.assign({}, Jt.defaults, s);
    this.options = o, this.container = n, this.control = t, this.debug = o.debug;
    const i = ["left", "right"], r = ["top", "bottom"], { fromX: l, fromY: a } = o;
    if (!i.includes(l) && l !== null) {
      st(this, `Invalid fromX: ${l} (left|right|null)`);
      return;
    }
    if (!r.includes(a) && a !== null) {
      st(this, `Invalid fromY: ${a} (top|bottom|null)`);
      return;
    }
    if (!l && !a) {
      st(this, "Invalid fromX/fromY, failed to setup resizer (at least one of fromX or fromY must be set)");
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
    this.container.dispatchEvent(Le(n, t));
  }
}
let Tt = 0;
const Fo = {
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
    const n = Gs(), t = w(() => e.title || n.title), s = w(() => {
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
    })), { resolvedModifiers: r } = ne({
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
        n === t && jo(t, e) && this.close();
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
        e.newState === "open" ? this.restoreScroll = Bo({ preventShift: n }) : this.destroyPreventScroll();
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
}, Vo = ["aria-labelledby", "aria-describedby"], Ho = ["id"], No = { class: "modal__title-text" }, Do = {
  key: 2,
  class: "modal__resizer",
  ref: "resizer",
  type: "button"
};
function Wo(e, n, t, s, o, i) {
  const r = D("UluIcon");
  return u(), _(ft, {
    to: t.teleport === !1 ? null : t.teleport,
    disabled: t.teleport === !1
  }, [
    h("dialog", {
      class: m(["modal", [s.resolvedModifiers, t.classes.container]]),
      "aria-labelledby": i.resolvedLabelledby,
      "aria-describedby": t.describedby,
      ref: "container",
      style: H({ width: o.containerWidth }),
      onCancel: n[1] || (n[1] = Ks((...l) => i.close && i.close(...l), ["prevent"])),
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
            }, null, 8, ["icon"])) : b("", !0),
            h("span", No, y(t.title), 1)
          ])
        ], 10, Ho),
        h("button", {
          class: "modal__close",
          "aria-label": "Close modal",
          onClick: n[0] || (n[0] = (...l) => i.close && i.close(...l)),
          autofocus: ""
        }, [
          g(e.$slots, "closeIcon", {}, () => [
            R(r, {
              class: "modal__close-icon",
              icon: t.closeIcon || "type:close"
            }, null, 8, ["icon"])
          ])
        ])
      ], 2)) : b("", !0),
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
      ], 2)) : b("", !0),
      s.resizerEnabled ? (u(), d("button", Do, [
        g(e.$slots, "resizerIcon", {}, () => [
          R(r, {
            class: "modal__resizer-icon",
            icon: t.resizerIcon || s.resizerIconType
          }, null, 8, ["icon"])
        ])
      ], 512)) : b("", !0)
    ], 46, Vo)
  ], 8, ["to", "disabled"]);
}
const fs = /* @__PURE__ */ E(Fo, [["render", Wo]]), Fe = [], Xo = j({
  /**
   * Holds active component options (including component, and options)
   */
  active: null,
  /**
   * Populated with any props passed to open method, bound to modal component
   */
  activeProps: null
}), Ve = Xo.value, _n = {
  data: Ve,
  modals: Fe
}, Yo = (e) => ({
  open(n, t = null) {
    const s = this.get(n);
    Ve.active = xe(s), Ve.activeProps = Object.assign({}, s.props, t);
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
    const t = Fe.find((s) => s.name === n);
    if (t)
      return t;
    throw new Error(`Unable to find modal named: ${n}`);
  },
  /**
   * Add a modal config
   */
  add(n) {
    const t = e(n);
    Fe.push(t);
  },
  /**
   * Removes a modal config by name
   * @return {Object} Modal that was removed
   */
  remove(n) {
    const t = Fe.findIndex((s) => s.name === n);
    if (t > -1)
      return Fe.splice(t, 1);
    warn("unable to find modal to remove");
  }
}), qo = {
  componentNameDisplay: "UluModalsDisplay",
  componentNameModal: "UluModal",
  modals: [],
  modalOptions: {}
};
function Gf(e, n) {
  const t = Object.assign({}, qo, n), o = Yo((i) => Object.assign({}, t.modalOptions, i));
  e.component(t.componentNameDisplay, Eo), e.component(t.componentNameModal, fs), t.modals.forEach((i) => {
    o.add(i);
  }), _n.options = t, e.config.globalProperties.$uluModals = o, e.provide("uluModals", o), e.config.globalProperties.$uluModalsState = _n;
}
const Ko = {
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
}, Go = ["onClick"];
function Zo(e, n, t, s, o, i) {
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
        t.toast.icon ? (u(), _(r, {
          key: 0,
          icon: t.toast.icon
        }, null, 8, ["icon"])) : b("", !0)
      ])
    ], 2)) : b("", !0),
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
          }, y(t.toast.title), 3),
          t.toast.date ? (u(), d("span", {
            key: 0,
            class: m(["toast__date", t.classes.date])
          }, y(t.toast.date), 3)) : b("", !0)
        ], 2)) : b("", !0),
        t.toast.description ? (u(), d("div", {
          key: 1,
          class: m(["toast__body", t.classes.body])
        }, y(t.toast.description), 3)) : b("", !0)
      ])
    ], 2),
    t.toast.actions?.length ? (u(), d("div", {
      key: 1,
      class: m(["toast__actions", t.classes.actions])
    }, [
      (u(!0), d(x, null, O(t.toast.actions, (l, a) => (u(), d("button", {
        key: a,
        class: m(["toast__action", t.classes.action]),
        onClick: (c) => i.handleAction(c, l)
      }, y(l.label), 11, Go))), 128))
    ], 2)) : b("", !0),
    h("button", {
      class: m(["toast__close", t.classes.closeButton]),
      onClick: n[0] || (n[0] = (...l) => t.toast.close && t.toast.close(...l))
    }, [
      R(r, { icon: "type:close" })
    ], 2)
  ], 2);
}
const hs = /* @__PURE__ */ E(Ko, [["render", Zo]]), wn = {
  toastOptions: {
    /**
     * Component used to render the toast in the display
     */
    component: xe(hs),
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
let Jo = 0;
const he = Kt({
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
    const n = `toast-${++Jo}`;
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
    const n = he.createToast(e);
    return he.toasts.unshift(n), n.duration && setTimeout(() => {
      this.remove(n.uid);
    }, n.duration), n;
  },
  /**
   * 
   * @param {Object} toast Toast uid
   */
  remove(e) {
    const n = he.toasts.findIndex((t) => t.uid === e);
    n > -1 && he.toasts.splice(n, 1);
  },
  /**
   * Remove all toasts
   */
  removeAll() {
    he.toasts = [];
  }
}, Qo = {
  name: "UluTooltipDisplay",
  data() {
    const { toasts: e, pluginOptions: n } = he;
    return { toasts: e, pluginOptions: n };
  },
  computed: {
    classes() {
      const { position: e } = this.pluginOptions;
      return e.map((t) => `toast-container--${t}`);
    }
  }
};
function ei(e, n, t, s, o, i) {
  return u(), _(ft, {
    to: o.pluginOptions.teleportTo
  }, [
    R(es, {
      class: m(["toast-container", i.classes]),
      name: "toast-animation",
      tag: "div"
    }, {
      default: S(() => [
        (u(!0), d(x, null, O(o.toasts, (r) => (u(), _(F(r.component), {
          key: r.uid,
          toast: r
        }, null, 8, ["toast"]))), 128))
      ]),
      _: 1
    }, 8, ["class"])
  ], 8, ["to"]);
}
const ti = /* @__PURE__ */ E(Qo, [["render", ei]]);
function Zf(e, n = {}) {
  const t = he.setPluginOptions(n?.plugin);
  he.setToastOptions(n?.toast), e.component(t.componentName, hs), e.component(t.componentNameDisplay, ti), e.config.globalProperties.$uluToast = Lt, e.provide("uluToast", Lt);
}
const ni = {
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
function si(e) {
  const n = Object.assign({}, ni, e), t = j(null), s = j(n.initialValue), o = j(null);
  return (async () => {
    if (!ds()) return;
    await new Promise((f) => {
      document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", () => f()) : f();
    });
    const r = await import("./breakpoints-DMo5a-Xm.js"), { BreakpointManager: l } = r, a = xe(new l(n.plugin));
    t.value = xe(a);
    const c = () => {
      s.value = a.active, o.value = a.resizeDirection;
    };
    c(), n.onReady && n.onReady(a), a.onChange(c);
  })(), { breakpointManager: t, breakpointActive: s, breakpointDirection: o };
}
const oi = {
  /**
   * Breakpoint for mobile down/max
   */
  breakpointMobile: "small",
  /**
   * Options to pass to useBreakpointManager()
   */
  managerOptions: {}
};
function Jf(e, n) {
  const t = j(!1), s = Object.assign({}, oi, n), { breakpointMobile: o } = s, { onReady: i } = s.managerOptions, r = {
    onReady(p) {
      p.at(o).max({
        on() {
          t.value = !0;
        },
        off() {
          t.value = !1;
        }
      }), i && i(p);
    }
  }, l = Object.assign({}, s.managerOptions, r), {
    breakpointManager: a,
    breakpointActive: c,
    breakpointDirection: f
  } = si(l);
  e.provide("uluBreakpointActive", w(() => c.value)), e.provide("uluBreakpointDirection", w(() => f.value)), e.provide("uluBreakpointManager", w(() => a.value)), e.provide("uluIsMobile", w(() => t.value));
}
const Ft = /* @__PURE__ */ new Set(), q = /* @__PURE__ */ new WeakMap(), pe = /* @__PURE__ */ new WeakMap(), Z = /* @__PURE__ */ new WeakMap(), We = /* @__PURE__ */ new WeakMap(), xt = /* @__PURE__ */ new WeakMap(), He = /* @__PURE__ */ new WeakMap(), ye = /* @__PURE__ */ new WeakMap(), me = /* @__PURE__ */ new WeakMap(), Ae = /* @__PURE__ */ new WeakSet();
let K, Qt = 0, en = 0;
const le = "__aa_tgt", Xe = "__aa_del", at = "__aa_new", ms = (e) => {
  const n = ai(e);
  n && n.forEach((t) => ci(t));
}, ii = (e) => {
  e.forEach((n) => {
    n.target === K && ri(), q.has(n.target) && _e(n.target);
  });
};
function gs(e) {
  const n = e.getBoundingClientRect(), t = K?.clientWidth || 0, s = K?.clientHeight || 0;
  return n.bottom < 0 || n.top > s || n.right < 0 || n.left > t;
}
function tn(e) {
  const n = We.get(e);
  n?.disconnect();
  let t = q.get(e), s = 0;
  const o = 5;
  t || (t = Ee(e), q.set(e, t));
  const { offsetWidth: i, offsetHeight: r } = K, a = [
    t.top - o,
    i - (t.left + o + t.width),
    r - (t.top + o + t.height),
    t.left - o
  ].map((f) => `${-1 * Math.floor(f)}px`).join(" "), c = new IntersectionObserver(() => {
    ++s > 1 && _e(e);
  }, {
    root: K,
    threshold: 1,
    rootMargin: a
  });
  c.observe(e), We.set(e, c);
}
function _e(e, n = !0) {
  clearTimeout(me.get(e));
  const t = bt(e), s = n ? Ye(t) ? 500 : t.duration : 0;
  me.set(e, setTimeout(async () => {
    const o = Z.get(e);
    try {
      await o?.finished, q.set(e, Ee(e)), tn(e);
    } catch {
    }
  }, s));
}
function ri() {
  clearTimeout(me.get(K)), me.set(K, setTimeout(() => {
    Ft.forEach((e) => rt(e, (n) => vs(() => _e(n))));
  }, 100));
}
function li(e) {
  setTimeout(() => {
    He.set(e, setInterval(() => vs(_e.bind(null, e)), 2e3));
  }, Math.round(2e3 * Math.random()));
}
function vs(e) {
  typeof requestIdleCallback == "function" ? requestIdleCallback(() => e()) : requestAnimationFrame(() => e());
}
let ie;
const ys = typeof window < "u" && "ResizeObserver" in window;
ys && (K = document.documentElement, new MutationObserver(ms), ie = new ResizeObserver(ii), window.addEventListener("scroll", () => {
  en = window.scrollY, Qt = window.scrollX;
}), ie.observe(K));
function ai(e) {
  return e.reduce((s, o) => [
    ...s,
    ...Array.from(o.addedNodes),
    ...Array.from(o.removedNodes)
  ], []).every((s) => s.nodeName === "#comment") ? !1 : e.reduce((s, o) => {
    if (s === !1)
      return !1;
    if (o.target instanceof Element) {
      if (Et(o.target), !s.has(o.target)) {
        s.add(o.target);
        for (let i = 0; i < o.target.children.length; i++) {
          const r = o.target.children.item(i);
          if (r) {
            if (Xe in r)
              return !1;
            Et(o.target, r), s.add(r);
          }
        }
      }
      if (o.removedNodes.length)
        for (let i = 0; i < o.removedNodes.length; i++) {
          const r = o.removedNodes[i];
          if (Xe in r)
            return !1;
          r instanceof Element && (s.add(r), Et(o.target, r), pe.set(r, [
            o.previousSibling,
            o.nextSibling
          ]));
        }
    }
    return s;
  }, /* @__PURE__ */ new Set());
}
function Et(e, n) {
  !n && !(le in e) ? Object.defineProperty(e, le, { value: e }) : n && !(le in n) && Object.defineProperty(n, le, { value: e });
}
function ci(e) {
  var n, t;
  const s = e.isConnected, o = q.has(e);
  s && pe.has(e) && pe.delete(e), ((n = Z.get(e)) === null || n === void 0 ? void 0 : n.playState) !== "finished" && ((t = Z.get(e)) === null || t === void 0 || t.cancel()), at in e ? Sn(e) : o && s ? di(e) : o && !s ? fi(e) : Sn(e);
}
function Q(e) {
  return Number(e.replace(/[^0-9.\-]/g, ""));
}
function ui(e) {
  let n = e.parentElement;
  for (; n; ) {
    if (n.scrollLeft || n.scrollTop)
      return { x: n.scrollLeft, y: n.scrollTop };
    n = n.parentElement;
  }
  return { x: 0, y: 0 };
}
function Ee(e) {
  const n = e.getBoundingClientRect(), { x: t, y: s } = ui(e);
  return {
    top: n.top + s,
    left: n.left + t,
    width: n.width,
    height: n.height
  };
}
function ps(e, n, t) {
  let s = n.width, o = n.height, i = t.width, r = t.height;
  const l = getComputedStyle(e);
  if (l.getPropertyValue("box-sizing") === "content-box") {
    const c = Q(l.paddingTop) + Q(l.paddingBottom) + Q(l.borderTopWidth) + Q(l.borderBottomWidth), f = Q(l.paddingLeft) + Q(l.paddingRight) + Q(l.borderRightWidth) + Q(l.borderLeftWidth);
    s -= f, i -= f, o -= c, r -= c;
  }
  return [s, i, o, r].map(Math.round);
}
function bt(e) {
  return le in e && ye.has(e[le]) ? ye.get(e[le]) : { duration: 250, easing: "ease-in-out" };
}
function bs(e) {
  if (le in e)
    return e[le];
}
function nn(e) {
  const n = bs(e);
  return n ? Ae.has(n) : !1;
}
function rt(e, ...n) {
  n.forEach((t) => t(e, ye.has(e)));
  for (let t = 0; t < e.children.length; t++) {
    const s = e.children.item(t);
    s && n.forEach((o) => o(s, ye.has(s)));
  }
}
function sn(e) {
  return Array.isArray(e) ? e : [e];
}
function Ye(e) {
  return typeof e == "function";
}
function di(e) {
  const n = q.get(e), t = Ee(e);
  if (!nn(e))
    return q.set(e, t);
  if (gs(e)) {
    q.set(e, t), tn(e);
    return;
  }
  let s;
  if (!n)
    return;
  const o = bt(e);
  if (typeof o != "function") {
    let i = n.left - t.left, r = n.top - t.top;
    const l = n.left + n.width - (t.left + t.width);
    n.top + n.height - (t.top + t.height) == 0 && (r = 0), l == 0 && (i = 0);
    const [c, f, p, v] = ps(e, n, t), $ = {
      transform: `translate(${i}px, ${r}px)`
    }, A = {
      transform: "translate(0, 0)"
    };
    c !== f && ($.width = `${c}px`, A.width = `${f}px`), p !== v && ($.height = `${p}px`, A.height = `${v}px`), s = e.animate([$, A], {
      duration: o.duration,
      easing: o.easing
    });
  } else {
    const [i] = sn(o(e, "remain", n, t));
    s = new Animation(i), s.play();
  }
  Z.set(e, s), q.set(e, t), s.addEventListener("finish", _e.bind(null, e, !1), {
    once: !0
  });
}
function Sn(e) {
  at in e && delete e[at];
  const n = Ee(e);
  q.set(e, n);
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
  Z.set(e, s), s.addEventListener("finish", _e.bind(null, e, !1), {
    once: !0
  });
}
function kn(e, n) {
  var t;
  e.remove(), q.delete(e), pe.delete(e), Z.delete(e), (t = We.get(e)) === null || t === void 0 || t.disconnect(), setTimeout(() => {
    if (Xe in e && delete e[Xe], Object.defineProperty(e, at, { value: !0, configurable: !0 }), n && e instanceof HTMLElement)
      for (const s in n)
        e.style[s] = "";
  }, 0);
}
function fi(e) {
  var n;
  if (!pe.has(e) || !q.has(e))
    return;
  const [t, s] = pe.get(e);
  Object.defineProperty(e, Xe, { value: !0, configurable: !0 });
  const o = window.scrollX, i = window.scrollY;
  if (s && s.parentNode && s.parentNode instanceof Element ? s.parentNode.insertBefore(e, s) : t && t.parentNode ? t.parentNode.appendChild(e) : (n = bs(e)) === null || n === void 0 || n.appendChild(e), !nn(e))
    return kn(e);
  const [r, l, a, c] = mi(e), f = bt(e), p = q.get(e);
  (o !== Qt || i !== en) && hi(e, o, i, f);
  let v, $ = {
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
  if (!Ye(f))
    Object.assign(e.style, $), v = e.animate([
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
    const [A, U] = sn(f(e, "remove", p));
    U?.styleReset !== !1 && ($ = U?.styleReset || $, Object.assign(e.style, $)), v = new Animation(A), v.play();
  }
  Z.set(e, v), v.addEventListener("finish", () => kn(e, $), {
    once: !0
  });
}
function hi(e, n, t, s) {
  const o = Qt - n, i = en - t, r = document.documentElement.style.scrollBehavior;
  if (getComputedStyle(K).scrollBehavior === "smooth" && (document.documentElement.style.scrollBehavior = "auto"), window.scrollTo(window.scrollX + o, window.scrollY + i), !e.parentElement)
    return;
  const a = e.parentElement;
  let c = a.clientHeight, f = a.clientWidth;
  const p = performance.now();
  function v() {
    requestAnimationFrame(() => {
      if (!Ye(s)) {
        const $ = c - a.clientHeight, A = f - a.clientWidth;
        p + s.duration > performance.now() ? (window.scrollTo({
          left: window.scrollX - A,
          top: window.scrollY - $
        }), c = a.clientHeight, f = a.clientWidth, v()) : document.documentElement.style.scrollBehavior = r;
      }
    });
  }
  v();
}
function mi(e) {
  var n;
  const t = q.get(e), [s, , o] = ps(e, t, Ee(e));
  let i = e.parentElement;
  for (; i && (getComputedStyle(i).position === "static" || i instanceof HTMLBodyElement); )
    i = i.parentElement;
  i || (i = document.body);
  const r = getComputedStyle(i), l = !Z.has(e) || ((n = Z.get(e)) === null || n === void 0 ? void 0 : n.playState) === "finished" ? Ee(i) : q.get(i), a = Math.round(t.top - l.top) - Q(r.borderTopWidth), c = Math.round(t.left - l.left) - Q(r.borderLeftWidth);
  return [a, c, s, o];
}
function gi(e, n = {}) {
  if (ys && ie && !(window.matchMedia("(prefers-reduced-motion: reduce)").matches && !Ye(n) && !n.disrespectUserMotionPreference)) {
    Ae.add(e), getComputedStyle(e).position === "static" && Object.assign(e.style, { position: "relative" }), rt(e, _e, li, (r) => ie?.observe(r)), Ye(n) ? ye.set(e, n) : ye.set(e, {
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
      Ae.add(e);
    },
    disable: () => {
      Ae.delete(e), rt(e, (s) => {
        const o = Z.get(s);
        try {
          o?.cancel();
        } catch {
        }
        Z.delete(s);
        const i = me.get(s);
        i && clearTimeout(i), me.delete(s);
        const r = He.get(s);
        r && clearInterval(r), He.delete(s);
      });
    },
    isEnabled: () => Ae.has(e),
    destroy: () => {
      Ae.delete(e), Ft.delete(e), ye.delete(e);
      const s = xt.get(e);
      s?.disconnect(), xt.delete(e), rt(e, (o) => {
        ie?.unobserve(o);
        const i = Z.get(o);
        try {
          i?.cancel();
        } catch {
        }
        Z.delete(o);
        const r = We.get(o);
        r?.disconnect(), We.delete(o);
        const l = He.get(o);
        l && clearInterval(l), He.delete(o);
        const a = me.get(o);
        a && clearTimeout(a), me.delete(o), q.delete(o), pe.delete(o);
      });
    }
  });
}
function vi(e) {
  const n = j();
  let t;
  function s(o) {
    t && (o ? t.enable() : t.disable());
  }
  return gt(() => {
    mt((o) => {
      let i;
      n.value instanceof HTMLElement ? i = n.value : n.value && "$el" in n.value && n.value.$el instanceof HTMLElement && (i = n.value.$el), i && (t = gi(i, e || {}), o(() => {
        var r;
        (r = t?.destroy) === null || r === void 0 || r.call(t), t = void 0;
      }));
    });
  }), ts(() => {
    var o;
    (o = t?.destroy) === null || o === void 0 || o.call(t), t = void 0;
  }), [n, s];
}
function yi(e) {
  if (e) {
    if (e instanceof HTMLElement)
      return e;
    if (typeof e == "object" && "$el" in e)
      return e.$el;
  }
}
let pi = 0;
function Vt(e = "ulu-id") {
  const n = `${e}-${++pi}`;
  return typeof document < "u" && document.getElementById(n) ? generateUid(e) : n;
}
const bi = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  newId: Vt,
  refToElement: yi
}, Symbol.toStringTag, { value: "Module" })), _i = ["id", "aria-controls", "aria-expanded"], wi = ["id", "aria-hidden", "aria-labelledby"], Ht = {
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
    const t = e, s = n, o = w(() => typeof t.animate == "object" ? t.animate : {}), [i, r] = vi(o);
    gt(() => {
      r(!!t.animate);
    }), De(() => t.animate, (A) => {
      r(!!A);
    });
    const l = w(() => t.modelValue !== void 0), a = j(t.startOpen), c = w({
      get() {
        return l.value ? t.modelValue : a.value;
      },
      set(A) {
        l.value ? s("update:modelValue", A) : a.value = A;
      }
    }), f = j(Vt("ulu-collapsible-trigger")), p = j(Vt("ulu-collapsible-content"));
    function v() {
      c.value = !c.value;
    }
    function $() {
      t.closeOnEscape && c.value && (c.value = !1);
    }
    return (A, U) => (u(), d("div", {
      ref_key: "container",
      ref: i,
      onKeydown: Jn($, ["esc"]),
      class: m([e.classes.container, c.value ? e.classes.containerOpen : e.classes.containerClosed])
    }, [
      h("button", {
        class: m(e.classes.trigger),
        id: f.value,
        "aria-controls": p.value,
        "aria-expanded": c.value,
        onClick: v
      }, [
        g(A.$slots, "trigger", { isOpen: c.value }, () => [
          k(y(e.triggerText), 1)
        ])
      ], 10, _i),
      c.value ? (u(), d("div", {
        key: 0,
        class: m(e.classes.content),
        tabindex: "-1",
        id: p.value,
        "aria-hidden": !c.value,
        "aria-labelledby": f.value
      }, [
        g(A.$slots, "default", {
          isOpen: c.value,
          toggle: v
        })
      ], 10, wi)) : b("", !0)
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
    const t = e, { resolvedModifiers: s } = ne({ props: t, baseClass: "accordion" }), o = w(() => {
      const i = { ...t.classes };
      return i.container = [i.container, s.value], i;
    });
    return (i, r) => (u(), _(Ht, {
      "model-value": e.modelValue,
      "start-open": e.startOpen,
      "trigger-text": e.triggerText,
      classes: o.value,
      animate: e.animate,
      "onUpdate:modelValue": r[0] || (r[0] = (l) => i.$emit("update:modelValue", l))
    }, {
      trigger: S(({ isOpen: l }) => [
        g(i.$slots, "trigger", { isOpen: l }, () => [
          (u(), _(F(e.triggerTextElement), null, {
            default: S(() => [
              k(y(e.triggerText), 1)
            ]),
            _: 1
          }))
        ]),
        g(i.$slots, "icon", { isOpen: l }, () => [
          h("span", {
            class: m(["accordion__icon", e.classes.icon])
          }, [
            R(N, {
              icon: l ? "type:collapse" : "type:expand",
              style: { display: "inline" }
            }, null, 8, ["icon"])
          ], 2)
        ])
      ]),
      default: S(({ isOpen: l, toggle: a }) => [
        g(i.$slots, "default", {
          isOpen: l,
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
    const n = e, { resolvedModifiers: t } = ne({ props: n, baseClass: "tag" });
    return (s, o) => (u(), d("span", {
      class: m(["tag", [
        {
          "tag--counter": e.counter,
          [`tag--${e.size}`]: e.size,
          [`tag--${e.type}`]: e.type
        },
        T(t)
      ]])
    }, [
      e.icon ? (u(), _(N, {
        key: 0,
        icon: e.icon,
        spaced: ""
      }, null, 8, ["icon"])) : b("", !0),
      g(s.$slots, "default", {}, () => [
        h("span", null, y(e.text), 1)
      ])
    ], 2));
  }
}, Si = {
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
function ki(e, n, t, s, o, i) {
  const r = D("UluIcon"), l = D("UluTag"), a = D("UluMenu", !0), c = Zn("ulu-tooltip");
  return t.items?.length ? (u(), d("ul", {
    key: 0,
    class: m(t.classes.list)
  }, [
    (u(!0), d(x, null, O(t.items, (f, p) => (u(), d("li", {
      key: p,
      class: m([
        t.classes.item,
        f?.classes?.item,
        f.separatorBefore ? t.classes.itemSeparatorBefore : "",
        f.separatorAfter ? t.classes.itemSeparatorAfter : ""
      ])
    }, [
      Oe((u(), _(F(f.to || f.path ? "router-link" : f.click ? "button" : "a"), ae({ ref_for: !0 }, {
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
            index: p
          }, () => [
            f.icon ? (u(), _(r, {
              key: 0,
              icon: f.icon,
              class: m([t.classes.linkIcon, f?.classes?.linkIcon])
            }, null, 8, ["icon", "class"])) : b("", !0),
            h("span", {
              class: m([t.classes.linkText, f?.classes?.linkText])
            }, y(f.title), 3),
            f.tag ? (u(), _(l, ae({
              key: 1,
              ref_for: !0
            }, f.tag), null, 16)) : b("", !0)
          ])
        ]),
        _: 2
      }, 1040, ["onClick", "class", "aria-label", "id"])), [
        [c, t.iconOnly ? f.title : f.tooltip || null]
      ]),
      !t.noChildren && f?.children?.length ? (u(), _(a, {
        key: 0,
        iconOnly: t.iconOnly,
        classes: t.classes,
        items: f.children
      }, null, 8, ["iconOnly", "classes", "items"])) : b("", !0)
    ], 2))), 128))
  ], 2)) : b("", !0);
}
const ws = /* @__PURE__ */ E(Si, [["render", ki]]), $i = {
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
    const n = e, t = w(() => ({
      hanging: n.hanging,
      compact: n.compact
    })), { resolvedModifiers: s } = ne({
      props: n,
      internal: t,
      baseClass: "menu-stack"
    });
    return (o, i) => (u(), _(F(e.containerElement), {
      class: m(["menu-stack", T(s)])
    }, {
      default: S(() => [
        R(ws, {
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
}, Qf = {
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
    return (n, t) => (u(), _(yt, { classes: e.popoverClasses }, {
      trigger: S(({ isOpen: s }) => [
        g(n.$slots, "trigger", { isOpen: s }, () => [
          h("span", null, y(e.triggerText), 1),
          R(N, {
            class: "button__icon",
            icon: "type:dropdownExpand",
            style: H({ transform: s ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.2s" })
          }, null, 8, ["style"])
        ])
      ]),
      default: S(() => [
        R($i, { items: e.items }, null, 8, ["items"])
      ]),
      _: 3
    }, 8, ["classes"]));
  }
}, on = j(!1), ct = {
  start: [],
  end: []
};
function rn() {
  window.removeEventListener("resize", rn), on.value = !0, ct.start.forEach((e) => e());
}
function Ci() {
  on.value = !1, ct.end.forEach((e) => e()), window.addEventListener("resize", rn);
}
window.addEventListener("resize", rn), window.addEventListener("resize", pt(Ci, 300));
function Cn(e, n) {
  return e.push(n), () => {
    const t = e.findIndex((s) => s === n);
    t > -1 && e.splice(t);
  };
}
function Ai() {
  return {
    resizing: on,
    onResizeStart(e) {
      return Cn(ct.start, e);
    },
    onResizeEnd(e) {
      return Cn(ct.end, e);
    }
  };
}
const Ti = {
  uluCore: "Core",
  uluIsMobile: "Breakpoints",
  uluBreakpointActive: "Breakpoints",
  uluBreakpointDirection: "Breakpoints",
  uluBreakpointManager: "Breakpoints",
  uluModals: "Modals",
  uluToast: "Toast"
}, An = {};
function Oi(e) {
  const n = ht(e, An);
  if (n === An) {
    const t = Ti[e] || "", s = t ? ` from the '${t}' plugin` : "", o = t ? "Please install missing plugin." : "";
    throw new Error(`Required inject: '${e}'${s} was not provided. ${o}`);
  }
  return n;
}
function eh(e, n) {
  const t = us(), s = so(), o = w(() => {
    const c = parseInt(t.query.page || "1", 10);
    return isNaN(c) || c < 1 ? 1 : c;
  }), i = w(() => !e.value || e.value.length === 0 ? 1 : Math.ceil(e.value.length / n));
  De(i, (c) => {
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
    }, f = o.value, p = i.value, v = 5, $ = (I) => ({ query: { ...t.query, page: I } });
    f > 1 && (c.first = { href: $(1) }, c.previous = { href: $(f - 1) }), f < p && (c.next = { href: $(f + 1) }, c.last = { href: $(p) });
    let A, U;
    if (p <= v)
      A = 1, U = p;
    else {
      const I = Math.floor(v / 2), ue = Math.ceil(v / 2) - 1;
      f <= I ? (A = 1, U = v) : f + ue >= p ? (A = p - v + 1, U = p) : (A = f - I, U = f + ue);
    }
    for (let I = A; I <= U; I++)
      c.pages[I] = { href: $(I) };
    return c;
  }), a = w(() => {
    const c = { previous: !1, next: !1 };
    if (!l.value || !l.value.pages) return c;
    const f = Object.keys(l.value.pages).map(Number);
    if (f.length === 0) return c;
    const p = Math.min(...f), v = Math.max(...f);
    return p > 1 && (c.previous = !0), v < i.value && (c.next = !0), c;
  });
  return {
    currentPage: o,
    totalPages: i,
    paginatedItems: r,
    pagerItems: l,
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
    for (const r of Object.keys(o))
      i[r] = Nt(o[r], n, r);
    return i;
  }
  return o;
}
const xi = (e, n) => Zs(n) ? ot(n) : n, Ei = "usehead";
function Ri() {
  if (Js()) {
    const e = ht(Ei);
    if (!e)
      throw new Error("useHead() was called without provide context, ensure you call it through the setup() function.");
    return e;
  }
  throw new Error("useHead() was called without provide context, ensure you call it through the setup() function.");
}
function ji(e, n = {}) {
  const t = n.head || Ri();
  return t.ssr ? t.push(e || {}, n) : Ii(t, e, n);
}
function Ii(e, n, t = {}) {
  const s = j(!1);
  let o;
  return mt(() => {
    const r = s.value ? {} : Nt(n, xi);
    o ? o.patch(r) : o = e.push(r, t);
  }), Qs() && (ts(() => {
    o.dispose();
  }), eo(() => {
    s.value = !0;
  }), to(() => {
    s.value = !1;
  })), o;
}
function _t(e, n) {
  let s = (e?.meta || {}).title;
  return typeof s == "function" && (s = s(n || e)), s;
}
function Bi(e, n) {
  const s = Object.assign({}, {
    qualifier(r, l) {
      return l ? an(r) : Ss(r);
    },
    sort: un,
    item: {},
    includeChildren: !1
  }, n), o = (r, l) => l ? `${l}/${r.path}` : r.path, i = (r, l = null) => r.filter((a) => s.qualifier(a, l)).map((a) => {
    const c = a.children ? ln(a.children) : a, f = a.children ? a.children.filter((v) => v.path !== "") : !1, p = wt(c, o(a, l), s.item);
    return s.includeChildren && f.length && (p.children = i(f, p.path)), p;
  }).sort(s.sort);
  return i(e);
}
function zi(e) {
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
function Mi(e, n, t) {
  const o = Object.assign({}, {
    includeIndex: !1,
    item: {},
    sort: un
  }, t), i = e.find((c) => c.path !== "/" && n.includes(c.path)), r = (c, f, p) => {
    if (c.children) {
      const v = c.children.find(($) => $.path.includes(n));
      if (v)
        return r(v, c, p + v.path);
    }
    return { route: f, path: p };
  }, { route: l, path: a } = r(i, i, i.path);
  return l.children ? l.children.filter($s(o.includeIndex)).map((c) => wt(c, `${a}/${c.path}`, o.item)).sort(o.sort) : (console.warn("Unable to build menu for:", n), []);
}
function ln(e) {
  return e.find((n) => n.path === "");
}
function wt(e, n = e.path, t) {
  const o = Object.assign({}, {
    indexMeta: !0,
    modify: null
  }, t);
  let i = Object.assign({}, e.meta);
  o.indexMeta && e.children && (i = Object.assign({}, i, ln(e.children)?.meta));
  const r = { ...e, meta: i }, l = {
    path: n,
    title: _t(r, e) || "Missing Title",
    weight: i?.weight || 0,
    meta: i
  };
  return o.modify && o.modify(l, e), l;
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
function Pi(e, n) {
  const s = Object.assign({}, {
    parent: null,
    includeIndex: !1,
    item: {},
    sort: un
  }, n), o = s.parent || cn(e);
  return (ks(e, o) || []).filter($s(s.includeIndex)).map((r) => wt(r, `${o.path}/${r.path}`, s.item)).sort(s.sort);
}
function Li(e) {
  const { matched: n, path: t } = e;
  let s;
  return n.reduce((i, r, l) => {
    if (r.meta?.breadcrumb === !1 || r.path === s)
      return i;
    const a = l === n.length - 1, c = _t(r, e) || "Missing Title";
    return i.push({
      title: c,
      to: { path: a ? t : r.path },
      current: a
    }), s = r.path, i;
  }, []);
}
const Fi = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  $createBreadcrumb: Li,
  $createSectionMenu: Pi,
  $getParentRoute: cn,
  $getRouteChildren: ks,
  createBaseMenu: Bi,
  createMenuItem: wt,
  createSectionMenu: Mi,
  flattenMenu: zi,
  getChildIndexRoute: ln,
  getRouteTitle: _t,
  isStaticBaseRoute: Ss,
  isStaticRoute: an,
  nativeLinkRouter: Ui
}, Symbol.toStringTag, { value: "Module" })), Rt = Kt({});
function th(e = {}) {
  const {
    title: n,
    titleTemplate: t = "%s",
    useRoute: s = us,
    useHead: o = ji
  } = e, i = s(), r = i.path;
  if (n !== void 0) {
    mt(() => {
      Rt[r] = T(n);
    }), ns(() => {
      delete Rt[r];
    });
    return;
  }
  const l = w(() => {
    const a = Rt[i.path], c = _t(i, i), f = a || c;
    return f ? t.replace("%s", f) : "App";
  });
  o({
    title: l
  });
}
const Vi = { class: "layout-flex-baseline" }, Hi = { class: "type-word-break" }, nh = {
  __name: "UluOverflowPopover",
  props: {
    /**
     * Default icon for overflow popover trigger
     */
    triggerIcon: String
  },
  setup(e) {
    const { resizing: n, onResizeEnd: t } = Ai(), s = j(null), o = j(!1), i = () => {
      Qn(() => {
        const l = s.value;
        o.value = l.offsetWidth < l.scrollWidth;
      });
    }, r = t(i);
    return gt(i), ns(r), (l, a) => (u(), d("div", Vi, [
      h("div", {
        class: "type-truncate",
        ref_key: "text",
        ref: s
      }, [
        g(l.$slots, "default")
      ], 512),
      o.value && !T(n) ? (u(), _(yt, {
        key: 0,
        triggerAlt: "Show Full Text",
        size: "large"
      }, {
        trigger: S(() => [
          R(N, {
            icon: e.triggerIcon || "type:ellipsis"
          }, null, 8, ["icon"])
        ]),
        default: S(() => [
          h("div", Hi, [
            g(l.$slots, "default")
          ])
        ]),
        _: 3
      })) : b("", !0)
    ]));
  }
}, sh = {
  __name: "UluTab",
  setup(e) {
    return (n, t) => (u(), _(T(oo), null, {
      default: S((s) => [
        g(n.$slots, "default", ee(te(s)))
      ]),
      _: 3
    }));
  }
}, oh = /* @__PURE__ */ Object.assign({
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
    return (n, t) => (u(), _(T(io), {
      defaultIndex: e.defaultIndex,
      vertical: e.vertical
    }, {
      default: S((s) => [
        h("div", {
          class: m(["tabs", {
            "tabs--vertical": e.vertical
          }])
        }, [
          g(n.$slots, "default", ee(te(s)))
        ], 2)
      ]),
      _: 3
    }, 8, ["defaultIndex", "vertical"]));
  }
}), ih = {
  __name: "UluTabList",
  setup(e) {
    return (n, t) => (u(), _(T(ro), { class: "tabs__tablist" }, {
      default: S(() => [
        g(n.$slots, "default")
      ]),
      _: 3
    }));
  }
}, rh = {
  __name: "UluTabPanel",
  setup(e) {
    return (n, t) => (u(), _(T(lo), null, {
      default: S((s) => [
        g(n.$slots, "default", ee(te(s)))
      ]),
      _: 3
    }));
  }
}, lh = {
  __name: "UluTabPanels",
  setup(e) {
    return (n, t) => (u(), _(T(ao), null, {
      default: S((s) => [
        g(n.$slots, "default", ee(te(s)))
      ]),
      _: 3
    }));
  }
}, Ni = {
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
    const { resolvedModifiers: n } = ne({ props: e, baseClass: "button" });
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
      return this.to ? vt : this.href ? "a" : "button";
    },
    attrs() {
      const { to: e, href: n, download: t, target: s } = this, o = e ? { to: e } : n ? { href: n } : {};
      return n && (s && (o.target = s), t && (o.download = typeof t == "string" ? t : !0)), o;
    }
  }
}, Di = { key: 1 };
function Wi(e, n, t, s, o, i) {
  const r = D("UluIcon");
  return u(), _(F(i.element), ae({
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
      }, null, 8, ["icon"])) : b("", !0),
      (e.$slots.default || t.text) && !t.iconOnly ? (u(), d("span", Di, [
        g(e.$slots, "default", {}, () => [
          k(y(t.text), 1)
        ])
      ])) : b("", !0),
      t.icon && !t.iconBefore && !t.iconOnly ? (u(), _(r, {
        key: 2,
        icon: t.icon,
        class: "button__icon"
      }, null, 8, ["icon"])) : b("", !0),
      g(e.$slots, "after")
    ]),
    _: 3
  }, 16, ["class", "aria-label"]);
}
const Xi = /* @__PURE__ */ E(Ni, [["render", Wi]]), Yi = {
  name: "UluAlert",
  components: {
    UluButton: Xi,
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
    const { resolvedModifiers: n } = ne({
      props: e,
      baseClass: "callout",
      internal: w(() => ({
        [e.type]: e.type,
        compact: e.compact
      }))
    });
    return { resolvedModifiers: n };
  }
}, qi = { class: "layout-flex" }, Ki = { class: "type-small" }, Gi = {
  key: 0,
  class: "margin-left-auto align-self-center"
};
function Zi(e, n, t, s, o, i) {
  const r = D("UluIcon");
  return u(), d("div", {
    class: m(["callout", s.resolvedModifiers])
  }, [
    h("div", qi, [
      R(r, {
        class: m(["type-large margin-right-small", `color-${t.type}`]),
        icon: t.icon || `type:${t.type}`
      }, null, 8, ["class", "icon"]),
      h("div", Ki, [
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
      e.$slots.action ? (u(), d("div", Gi, [
        g(e.$slots, "action")
      ])) : b("", !0)
    ])
  ], 2);
}
const ah = /* @__PURE__ */ E(Yi, [["render", Zi]]), Ji = ["aria-hidden"], Qi = {
  key: 2,
  class: "hidden-visually"
}, er = {
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
      return o ? "button" : i ? vt : r ? "a" : "span";
    });
    return (o, i) => (u(), _(F(s.value), {
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
          }, y(e.text), 9, Ji)) : g(o.$slots, "default", { key: 1 }),
          e.alt ? (u(), d("span", Qi, y(e.alt), 1)) : b("", !0)
        ], 2)
      ]),
      _: 3
    }, 8, ["class", "to", "href", "onClick"]));
  }
}, tr = { class: "badge-stack" }, ch = {
  __name: "UluBadgeStack",
  props: {
    /**
     * Array of props for each badge
     */
    items: Array
  },
  setup(e) {
    return (n, t) => (u(), d("ul", tr, [
      (u(!0), d(x, null, O(e.items, (s, o) => (u(), d("li", {
        class: "badge-stack__item",
        key: o
      }, [
        R(er, ae({ ref_for: !0 }, s), null, 16)
      ]))), 128))
    ]));
  }
}, nr = {
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
    const { resolvedModifiers: n } = ne({ props: e, baseClass: "button-verbose" });
    return { resolvedModifiers: n };
  },
  computed: {
    element() {
      return this.to ? vt : this.href ? "a" : "button";
    },
    attrs() {
      const { to: e, href: n, download: t, target: s } = this, o = e ? { to: e } : n ? { href: n } : {};
      return n && (s && (o.target = s), t && (o.download = typeof t == "string" ? t : !0)), o;
    }
  }
}, sr = {
  key: 1,
  class: "button-verbose__body"
};
function or(e, n, t, s, o, i) {
  const r = D("UluIcon");
  return u(), _(F(i.element), ae({
    class: ["button-verbose", [
      {
        "button-verbose--inline": t.inline,
        "button-verbose--full-width": t.fullWidth
      },
      s.resolvedModifiers
    ]]
  }, i.attrs), {
    default: S(() => [
      e.$slots.title || t.title ? (u(), _(F(t.titleElement), {
        key: 0,
        class: "button-verbose__title"
      }, {
        default: S(() => [
          g(e.$slots, "title", {}, () => [
            k(y(t.title), 1)
          ])
        ]),
        _: 3
      })) : b("", !0),
      e.$slots.default || t.body ? (u(), d("span", sr, [
        g(e.$slots, "default", {}, () => [
          k(y(t.body), 1)
        ])
      ])) : b("", !0),
      t.icon ? (u(), _(r, {
        key: 2,
        icon: t.icon,
        class: "button-verbose__icon",
        "aria-hidden": "true"
      }, null, 8, ["icon"])) : b("", !0)
    ]),
    _: 3
  }, 16, ["class"]);
}
const uh = /* @__PURE__ */ E(nr, [["render", or]]), ir = {
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
    const { resolvedModifiers: n } = ne({ props: e, baseClass: "callout" });
    return { resolvedModifiers: n };
  }
};
function rr(e, n, t, s, o, i) {
  return u(), d("div", {
    class: m(["callout", [s.resolvedModifiers, { "full-height": t.fullHeight }]])
  }, [
    g(e.$slots, "default")
  ], 2);
}
const dh = /* @__PURE__ */ E(ir, [["render", rr]]), Tn = (e, n) => {
  const t = !(n.to || n.href);
  return t || console.warn("'titleHref' and 'titleTo' can't be used with to or href (nesting links)"), t;
}, lr = {
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
      validator: Tn
    },
    /**
     * Will make title a link to href
     */
    titleHref: {
      type: String,
      validator: Tn
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
    const { resolvedModifiers: n } = ne({ props: e, baseClass: "card" });
    return { resolvedModifiers: n };
  },
  computed: {
    resolvedElement() {
      const { cardElement: e, to: n, href: t } = this;
      return n ? vt : t ? "a" : e;
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
}, ar = { class: "card__body" }, cr = { class: "card__main" }, ur = ["href", "target"], dr = {
  key: 0,
  class: "card__aside"
}, fr = ["src", "alt"], hr = {
  key: 1,
  class: "card__footer"
};
function mr(e, n, t, s, o, i) {
  const r = D("router-link");
  return u(), _(F(i.resolvedElement), {
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
    style: H({ cursor: o.cursorStyle }),
    target: t.target,
    to: t.to,
    href: t.href,
    "data-ulu-proxy-click-init": o.proxyClickEnabled
  }, {
    default: S(() => [
      h("div", ar, [
        h("div", cr, [
          (u(), _(F(t.titleElement), {
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
                    k(y(t.title), 1)
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
                  k(y(t.title), 1)
                ])
              ], 8, ur)) : g(e.$slots, "title", { key: 2 }, () => [
                k(y(t.title), 1)
              ])
            ]),
            _: 3
          }, 8, ["class"])),
          g(e.$slots, "body")
        ]),
        e.$slots.aside ? (u(), d("div", dr, [
          g(e.$slots, "aside")
        ])) : b("", !0)
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
          }, null, 8, fr)
        ])
      ], 2)) : b("", !0),
      e.$slots.footer ? (u(), d("div", hr, [
        g(e.$slots, "footer")
      ])) : b("", !0)
    ]),
    _: 3
  }, 40, ["onMousedown", "onMouseup", "class", "style", "target", "to", "href", "data-ulu-proxy-click-init"]);
}
const fh = /* @__PURE__ */ E(lr, [["render", mr]]), hh = {
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
    const n = e, t = w(() => ({
      inline: n.inline,
      "inline-all": n.inlineAll,
      table: n.table,
      separated: n.separated,
      "separated-first": n.separatedFirst,
      "separated-last": n.separatedLast,
      compact: n.compact
    })), { resolvedModifiers: s } = ne({
      props: n,
      internal: t,
      baseClass: "definition-list"
    });
    return (o, i) => (u(), d("dl", {
      class: m(["definition-list", [T(s), e.classes.list]])
    }, [
      (u(!0), d(x, null, O(e.items, (r, l) => (u(), d("div", {
        key: l,
        class: m(e.classes.item)
      }, [
        h("dt", {
          class: m(e.classes.term)
        }, [
          g(o.$slots, "term", {
            item: r,
            index: l
          }, () => [
            k(y(r.term), 1)
          ])
        ], 2),
        h("dd", {
          class: m(e.classes.description)
        }, [
          g(o.$slots, "description", {
            item: r,
            index: l
          }, () => [
            k(y(r.description), 1)
          ])
        ], 2)
      ], 2))), 128))
    ], 2));
  }
}, gr = ["href", "target"], vr = { class: "external-link__text" }, mh = {
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
      h("span", vr, [
        g(n.$slots, "default", {}, () => [
          k(y(e.text), 1)
        ])
      ]),
      R(N, {
        class: "external-link__icon margin-left-small-x display-inline",
        icon: e.icon || "type:externalLink"
      }, null, 8, ["icon"])
    ], 8, gr));
  }
}, gh = {
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
    return (s, o) => (u(), _(F(t.value), {
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
        (u(!0), d(x, null, O(e.items, (i, r) => (u(), d("li", {
          key: r,
          class: m(e.classes.listItem)
        }, [
          g(s.$slots, "default", {
            item: i,
            index: r
          }, () => [
            k(y(i), 1)
          ])
        ], 2))), 128))
      ]),
      _: 3
    }, 8, ["class", "style", "reversed", "start"]));
  }
}, yr = {}, pr = { id: "main-content" };
function br(e, n) {
  return u(), d("main", pr, [
    g(e.$slots, "default")
  ]);
}
const vh = /* @__PURE__ */ E(yr, [["render", br]]), _r = { class: "spoke-spinner__spinner" }, yh = {
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
      h("div", _r, [
        (u(), d(x, null, O(12, (s) => h("div", { key: s })), 64))
      ])
    ], 2));
  }
}, wr = ["role", "aria-labelledby"], Sr = ["id"], kr = { class: "menu-stack__list" }, $r = { class: "menu-stack__selectable" }, Cr = ["type", "id", "name", "value", "checked", "onChange"], Ar = ["for"], Cs = {
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
    const t = e, s = n, o = w(() => t.legend ? t.legend.toLowerCase().replace(/\s+/g, "-") : `menu-${Math.random().toString(36).substring(7)}`), i = w(() => o.value ? `${o.value}-legend` : null), r = w(() => t.type === "radio" ? "radiogroup" : "group"), l = (f) => `${o.value}-${f.uid}`, a = (f) => t.type === "radio" ? t.modelValue === f.uid : Array.isArray(t.modelValue) ? t.modelValue.includes(f.uid) : t.type === "checkbox" && f.checked || !1, c = (f, p) => {
      if (t.type === "radio")
        s("update:modelValue", f.uid);
      else if (Array.isArray(t.modelValue)) {
        const v = [...t.modelValue], $ = v.indexOf(f.uid);
        $ > -1 ? v.splice($, 1) : v.push(f.uid), s("update:modelValue", v);
      } else
        f.checked = p.target.checked;
    };
    return (f, p) => (u(), d("div", {
      class: m(["menu-stack form-theme", {
        "menu-stack--hide-inputs": e.hideInputs,
        "menu-stack--compact": e.compact
      }]),
      role: r.value,
      "aria-labelledby": i.value
    }, [
      e.legend ? (u(), d("div", {
        key: 0,
        id: i.value,
        class: "hidden-visually"
      }, y(e.legend), 9, Sr)) : b("", !0),
      h("ul", kr, [
        (u(!0), d(x, null, O(e.options, (v) => (u(), d("li", {
          class: "menu-stack__item",
          key: v.uid
        }, [
          h("div", $r, [
            h("input", {
              type: e.type,
              id: l(v),
              name: o.value,
              value: v.uid,
              checked: a(v),
              onChange: ($) => c(v, $)
            }, null, 40, Cr),
            h("label", {
              for: l(v)
            }, [
              g(f.$slots, "default", { option: v }, () => [
                k(y(v?.label || v?.title || v?.text), 1)
              ])
            ], 8, Ar)
          ])
        ]))), 128))
      ])
    ], 10, wr));
  }
}, Tr = ["href", "download"], Or = { class: "margin-left-small-x" }, ph = {
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
        R(N, {
          class: "ui-icon",
          icon: e.icon
        }, null, 8, ["icon"]),
        h("span", Or, [
          k(y(e.file.name) + " ", 1),
          e.noFileSize ? b("", !0) : (u(), _(_s, {
            key: 0,
            text: s.value,
            small: "",
            outline: ""
          }, null, 8, ["text"]))
        ])
      ])
    ], 8, Tr));
  }
}, xr = { class: "site-form__item site-form__item--file" }, Er = ["for"], Rr = ["multiple", "id"], bh = {
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
    return (r, l) => (u(), d("div", xr, [
      h("label", {
        class: m({ "hidden-visually": e.labelHidden }),
        for: T(o)
      }, [
        g(r.$slots, "label", {}, () => [
          k(y(e.label), 1)
        ])
      ], 10, Er),
      h("input", ae({
        type: "file",
        onChange: i,
        multiple: e.multiple,
        id: T(o)
      }, e.inputAttrs), null, 16, Rr)
    ]));
  }
}, _h = {
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
      }, null, 8, ["icon"])) : b("", !0),
      g(n.$slots, "default")
    ], 2));
  }
}, jr = { class: "site-form__item site-form__item--select" }, Ir = ["for"], Br = ["id", "value"], zr = ["value"], wh = {
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
    return (s, o) => (u(), d("div", jr, [
      h("label", {
        class: m({ "hidden-visually": e.labelHidden }),
        for: T(t)
      }, [
        g(s.$slots, "default", {}, () => [
          k(y(e.label), 1)
        ])
      ], 10, Ir),
      h("select", {
        id: T(t),
        value: e.modelValue,
        onInput: o[0] || (o[0] = (i) => s.$emit("update:modelValue", i.target.value))
      }, [
        o[1] || (o[1] = h("option", {
          disabled: "",
          value: ""
        }, "Please select one", -1)),
        (u(!0), d(x, null, O(e.options, (i, r) => (u(), d("option", {
          key: r,
          value: i.value
        }, y(i.text), 9, zr))), 128))
      ], 40, Br)
    ]));
  }
}, Mr = { class: "site-form__item site-form__item--text" }, Ur = ["for"], Pr = ["value", "id"], Sh = {
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
    return (s, o) => (u(), d("div", Mr, [
      h("label", {
        class: m({ "hidden-visually": e.labelHidden }),
        for: T(t)
      }, [
        g(s.$slots, "default", {}, () => [
          k(y(e.label), 1)
        ])
      ], 10, Ur),
      h("input", {
        type: "text",
        value: e.modelValue,
        onInput: o[0] || (o[0] = (i) => s.$emit("update:modelValue", i.target.value)),
        id: T(t)
      }, null, 40, Pr)
    ]));
  }
}, Lr = { class: "form-theme search-form type-small" }, Fr = { class: "search-form__field" }, Vr = ["placeholder"], Hr = {
  class: "search-form__submit button button--primary",
  "aria-label": "Submit Search"
}, kh = {
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
    return (n, t) => (u(), d("div", Lr, [
      h("div", Fr, [
        t[0] || (t[0] = h("label", { class: "hidden-visually" }, "Search", -1)),
        h("input", {
          class: "search-form__input",
          type: "text",
          id: "example-input",
          placeholder: e.placeholder
        }, null, 8, Vr)
      ]),
      h("button", Hr, [
        R(N, { icon: "type:search" })
      ])
    ]));
  }
}, $h = {
  __name: "UluAdaptiveLayout",
  setup(e) {
    const n = Oi("uluIsMobile");
    return (t, s) => !T(n) || !t.$slots.mobile ? g(t.$slots, "default", { key: 0 }) : g(t.$slots, "mobile", { key: 1 });
  }
};
function Nr(e) {
  var n;
  return e = e.replace(/^[^-_a-zA-Z]+/, "").replace(/^-(?:[-0-9]+)/, "-"), n = e && e.replace(/[^-_a-zA-Z0-9]+/g, "-"), n.toLowerCase();
}
function Dr(e, n = {
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
const Wr = {
  name: "UluDataGrid",
  async mounted() {
    const e = () => Dr(this.$el);
    e(), this.resizeHandler = pt(e, 200, !1, this), window.addEventListener("resize", this.resizeHandler);
  },
  beforeUnmount() {
    this.resizeHandler && window.removeEventListener("resize", this.resizeHandler);
  }
};
function Xr(e, n, t, s, o, i) {
  return u(), d("div", null, [
    g(e.$slots, "default")
  ]);
}
const Ch = /* @__PURE__ */ E(Wr, [["render", Xr]]), Yr = {
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
}, qr = {
  key: 0,
  class: "rail__item rail__item--pull"
};
function Kr(e, n, t, s, o, i) {
  const r = D("UluIcon");
  return u(), d("div", {
    class: m(["rail rail--title-rail", {
      "rail--rule": t.rule
    }])
  }, [
    h("div", {
      class: m(["rail__item rail__item--title", t.classes.itemTitle])
    }, [
      (u(), _(F(t.titleElement), {
        class: m(["layout-flex type-max-width-small no-margin", t.classes.title]),
        style: H({ alignItems: t.iconAlign })
      }, {
        default: S(() => [
          t.icon ? (u(), _(r, {
            key: 0,
            class: m(t.classes.icon),
            icon: t.icon
          }, null, 8, ["class", "icon"])) : b("", !0),
          g(e.$slots, "default", {}, () => [
            k(y(t.title), 1)
          ])
        ]),
        _: 3
      }, 8, ["class", "style"]))
    ], 2),
    e.$slots.end ? (u(), d("div", qr, [
      g(e.$slots, "end")
    ])) : b("", !0)
  ], 2);
}
const Ah = /* @__PURE__ */ E(Yr, [["render", Kr]]), Gr = {
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
function Zr(e, n, t, s, o, i) {
  const r = D("router-link"), l = D("UluIcon");
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
            k(y(a.title), 1)
          ])
        ], 2)) : (u(), _(r, {
          key: 0,
          to: a.to,
          class: m(t.classes.link),
          "aria-current": a.current ? "page" : null
        }, {
          default: S(() => [
            g(e.$slots, "default", { item: a }, () => [
              k(y(a.title), 1)
            ])
          ]),
          _: 2
        }, 1032, ["to", "class", "aria-current"])),
        c < t.items.length - 1 ? g(e.$slots, "separator", { key: 2 }, () => [
          R(l, {
            class: m(t.classes.separator),
            icon: t.separatorIcon || "type:pathSeparator"
          }, null, 8, ["class", "icon"])
        ]) : b("", !0)
      ], 2))), 128))
    ], 2)
  ], 2)) : b("", !0);
}
const Th = /* @__PURE__ */ E(Gr, [["render", Zr]]), Jr = {
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
function Qr(e, n, t, s, o, i) {
  const r = D("UluMenu");
  return u(), d("nav", {
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
const Oh = /* @__PURE__ */ E(Jr, [["render", Qr]]), el = {}, tl = {
  class: "site-skip-link hidden-visually-focusable",
  href: "#main-content"
};
function nl(e, n) {
  return u(), d("a", tl, " Skip to main content ");
}
const xh = /* @__PURE__ */ E(el, [["render", nl]]), sl = {
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
function ol(e, n, t, s, o, i) {
  return t.text != null ? (u(), _(F(t.element), { key: 0 }, {
    default: S(() => [
      k(y(t.text), 1)
    ]),
    _: 1
  })) : b("", !0);
}
const Eh = /* @__PURE__ */ E(sl, [["render", ol]]), il = {}, rl = { style: { display: "none" } };
function ll(e, n) {
  return u(), d("span", rl);
}
const Rh = /* @__PURE__ */ E(il, [["render", ll]]), al = {};
function cl(e, n) {
  const t = D("router-view");
  return u(), _(t);
}
const jh = /* @__PURE__ */ E(al, [["render", cl]]);
function ut(e = 0, n = 100) {
  return e = Math.ceil(e), n = Math.floor(n), Math.floor(Math.random() * (n - e) + e);
}
const ul = {
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
        width: ut(500, 1e3),
        height: ut(500, 1e3)
      } : { width: n, height: t };
    }
  }
}, dl = ["src", "alt"];
function fl(e, n, t, s, o, i) {
  return u(), d("img", {
    src: i.src,
    alt: t.alt
  }, null, 8, dl);
}
const Ih = /* @__PURE__ */ E(ul, [["render", fl]]), hl = {
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
function ml(e, n, t, s, o, i) {
  return u(!0), d(x, null, O(parseInt(t.amount), (r) => (u(), _(F(t.element), { key: r }, {
    default: S(() => [...n[0] || (n[0] = [
      k(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed semper erat tincidunt tellus vestibulum dictum. Fusce vel augue commodo, egestas diam sed, accumsan leo. Maecenas congue nec nisl et ullamcorper. Maecenas tincidunt, tortor et viverra eleifend, enim leo vestibulum ipsum, quis placerat mi nisi nec ex. Vivamus a justo volutpat, scelerisque elit eget, lacinia ex. Phasellus dapibus sollicitudin tortor, vitae suscipit nunc condimentum ut. Cras suscipit feugiat nibh nec consectetur. Phasellus vitae quam blandit, cursus metus ut, placerat mi. Sed tempor lacus non est interdum imperdiet nec quis metus. Praesent vel eleifend diam. Donec tincidunt eget purus sed posuere. ", -1)
    ])]),
    _: 2
  }, 1024))), 128);
}
const Bh = /* @__PURE__ */ E(hl, [["render", ml]]), gl = {
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
function vl(e, n, t, s, o, i) {
  return i.title ? (u(), d("p", {
    key: 0,
    tabindex: "-1",
    class: "hidden-visually",
    ref: "el"
  }, y(i.title), 513)) : b("", !0);
}
const zh = /* @__PURE__ */ E(gl, [["render", vl]]), yl = {
  name: "AnimateNumber",
  props: {
    /**
     * The target number to animate to.
     */
    value: Number
  },
  watch: {
    value() {
      co.to(this, {
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
function pl(e, n, t, s, o, i) {
  return u(), d("span", null, [
    g(e.$slots, "default", { currentValue: o.currentValue }, () => [
      k(y(o.currentValue), 1)
    ])
  ]);
}
const Mh = /* @__PURE__ */ E(yl, [["render", pl]]), bl = {
  key: 0,
  class: "progress-bar__header"
}, _l = {
  key: 1,
  class: "progress-bar__value progress-bar__value--amount"
}, wl = {
  key: 2,
  class: "progress-bar__icon"
}, Sl = { class: "progress-bar__track" }, kl = {
  key: 1,
  class: "progress-bar__values"
}, $l = { class: "progress-bar__value progress-bar__value--amount" }, Cl = {
  key: 0,
  class: "progress-bar__value progress-bar__value--deficit"
}, Al = { class: "progress-bar__value progress-bar__value--total" }, Uh = {
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
      e.label || r.$slots.label || r.$slots.icon || e.amountInHeader ? (u(), d("div", bl, [
        e.label ? (u(), _(F(e.labelElement), {
          key: 0,
          class: m(["progress-bar__label", [e.classes.label, { "hidden-visually": e.labelHidden }]])
        }, {
          default: S(() => [
            g(r.$slots, "label", {}, () => [
              k(y(e.label), 1)
            ])
          ]),
          _: 3
        }, 8, ["class"])) : b("", !0),
        e.amountInHeader ? (u(), d("div", _l, [
          l[0] || (l[0] = h("strong", { class: "hidden-visually" }, "Amount:", -1)),
          g(r.$slots, "valueAmount", { value: e.amount }, () => [
            k(y(e.formatValue(e.amount, "amount")), 1)
          ])
        ])) : b("", !0),
        r.$slots.icon ? (u(), d("div", wl, [
          g(r.$slots, "icon")
        ])) : b("", !0)
      ])) : b("", !0),
      h("div", Sl, [
        h("div", {
          class: "progress-bar__bar",
          style: H({ width: s.value })
        }, null, 4),
        e.deficit > 0 ? (u(), d("div", {
          key: 0,
          class: "progress-bar__bar--deficit",
          style: H({ width: o.value })
        }, null, 4)) : b("", !0)
      ]),
      !e.noValues && !e.amountInHeader && !e.loader && !e.indeterminate ? (u(), d("div", kl, [
        h("div", $l, [
          l[1] || (l[1] = h("strong", { class: "hidden-visually" }, "Amount:", -1)),
          g(r.$slots, "valueAmount", { value: e.amount }, () => [
            k(y(e.formatValue(e.amount, "amount")), 1)
          ])
        ]),
        e.deficit > 0 ? (u(), d("div", Cl, [
          l[2] || (l[2] = h("strong", { class: "hidden-visually" }, "Deficit: ", -1)),
          g(r.$slots, "valueDeficit", { value: e.deficit }, () => [
            k("-" + y(e.formatValue(e.deficit, "deficit")), 1)
          ])
        ])) : b("", !0),
        h("div", Al, [
          l[3] || (l[3] = h("strong", { class: "hidden-visually" }, "Total:", -1)),
          g(r.$slots, "valueTotal", { value: e.total }, () => [
            k(y(e.formatValue(e.total, "total")), 1)
          ])
        ])
      ])) : b("", !0)
    ], 2));
  }
}, Tl = { class: "hidden-visually" }, Ol = { class: "progress-circle__chart" }, xl = {
  class: "progress-circle__chart-svg",
  viewBox: "0 0 32 32"
}, El = {
  key: 0,
  class: "progress-circle__chart-value"
}, Rl = {
  key: 0,
  class: "progress-circle__value type-small-x"
}, Ph = {
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
    const n = e, t = j(null), s = (a) => a === 100 ? 101 : a, o = (a = 0) => {
      if (!t.value || !t.value.animate) return;
      const c = { strokeDasharray: [`${a} 100`, i.value] };
      t.value.animate(c, { duration: n.duration, easing: n.easing, fill: "forwards" });
    };
    De(() => n.percentage, (a, c) => {
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
    return gt(() => {
      o();
    }), (a, c) => (u(), d("div", {
      class: m(l.value)
    }, [
      h("strong", Tl, y(e.label), 1),
      h("div", Ol, [
        (u(), d("svg", xl, [
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
        !r.value && !e.noValue ? (u(), d("strong", El, [
          g(a.$slots, "value", { value: e.percentage }, () => [
            k(y(e.formatValue(e.percentage)), 1)
          ])
        ])) : b("", !0)
      ]),
      r.value && !e.noValue ? (u(), d("strong", Rl, [
        g(a.$slots, "value", { value: e.percentage }, () => [
          k(y(e.formatValue(e.percentage)), 1)
        ])
      ])) : b("", !0)
    ], 2));
  }
};
function jl(e) {
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
    const i = o.children.map((r) => {
      const l = `${o.uid}:${r.uid}`;
      return n.get(l) || /* @__PURE__ */ new Set();
    });
    return o.match === "all" ? Dt(i) : jl(i);
  });
  return Dt(s);
}
function Il(e, n) {
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
function Lh(e, n = {}) {
  const t = (C, B) => {
    const P = C[B];
    return P === null || typeof P > "u" ? [] : Array.isArray(P) ? P : [P];
  }, {
    initialFacets: s,
    facetFields: o,
    initialSearchValue: i = "",
    initialSortType: r = "az",
    noDefaultSorts: l = !1,
    extraSortTypes: a = {},
    searchOptions: c = {},
    getItemFacet: f = t,
    getSortValue: p = (C) => C.title || C.label || "",
    countMode: v = "none"
    // 'none', 'simple', 'intuitive'
  } = n, $ = (C) => C.sort((B, P) => {
    const z = p(B), V = p(P);
    return z && V ? String(z).localeCompare(String(V)) : z ? -1 : V ? 1 : 0;
  }), A = {
    az: { text: "A-Z", sort: $ },
    za: { text: "Z-A", sort: (C) => $(C).reverse() }
  };
  function U(C) {
    return (C || []).map((B) => ({
      ...B,
      open: B.open || !1,
      children: B.children.map((P) => ({
        ...P,
        selected: P.selected || !1
      })),
      selectedCount: 0
    }));
  }
  const I = j([]), ue = j(i), Je = j(r), Qe = w(() => !o || !e.value?.length ? null : Il(e.value, o)), ge = w(() => ({
    ...l ? {} : A,
    ...a
  })), oe = w(() => {
    const C = /* @__PURE__ */ new Map(), B = J.value;
    if (!B || !o) return C;
    const P = new Map(o.map((z) => {
      const V = z.getValue || ((W) => W[z.uid]);
      return [z.uid, V];
    }));
    for (let z = 0; z < B.length; z++) {
      const V = B[z];
      for (const W of o) {
        const Y = P.get(W.uid)(V), G = Array.isArray(Y) ? Y : Y ? [Y] : [];
        for (const et of G) {
          const Me = `${W.uid}:${et}`;
          C.has(Me) || C.set(Me, /* @__PURE__ */ new Set()), C.get(Me).add(z);
        }
      }
    }
    return C;
  }), At = w(() => ({
    shouldSort: !0,
    keys: ["title", "label", "description", "author"],
    ...c
  })), J = w(() => ue.value?.length ? new uo(e.value, At.value).search(ue.value).map((B) => B.item) : e.value), de = w(() => {
    const C = [];
    return I.value.forEach((B) => {
      const P = B.children.filter((z) => z.selected);
      P.length > 0 && C.push({ ...B, children: P });
    }), C;
  }), X = w(() => {
    if (!de.value.length)
      return J.value;
    const C = oe.value;
    if (C.size === 0 && J.value.length > 0 && o?.length > 0)
      return [];
    const B = new Set(J.value.map((V, W) => W)), P = jt(de.value, C, B), z = [];
    for (const V of P)
      z.push(J.value[V]);
    return z;
  }), fe = w(() => {
    const C = ge.value[Je.value]?.sort;
    return typeof C != "function" ? X.value : C([...X.value]);
  });
  function ke() {
    I.value.forEach((C) => {
      C.children && C.children.forEach((B) => B.selected = !1), C.selectedCount = 0;
    });
  }
  function mn({ groupUid: C, facetUid: B, selected: P }) {
    const z = I.value.find((V) => V.uid === C);
    if (z) {
      !z.multiple && P && z.children.forEach((W) => {
        W.uid !== B && (W.selected = !1);
      });
      const V = z.children.find((W) => W.uid === B);
      V && (V.selected = P), z.selectedCount = z.children.filter((W) => W.selected).length;
    }
  }
  return De(Qe, (C) => {
    const B = U(s || C);
    B.forEach((P) => {
      P.selectedCount = P.children.filter((z) => z.selected).length;
    }), I.value = B;
  }, { immediate: !0 }), De([de, J], ([C, B], [P, z]) => {
    if (!(v === "none" || !I.value.length) && !(C === P && B === z)) {
      if (v === "simple")
        I.value.forEach((V) => {
          const W = C.filter((Y) => Y.uid !== V.uid), ze = getFilteredItems(B, W);
          V.children.forEach((Y) => {
            Y.count = ze.filter((G) => f(G, V.uid).includes(Y.uid)).length;
          });
        });
      else if (v === "intuitive") {
        const V = oe.value;
        if (V.size === 0 && J.value.length > 0 && o?.length > 0)
          return;
        const W = new Set(J.value.map((Y, G) => G)), ze = jt(C, V, W);
        I.value.forEach((Y) => {
          Y.children.forEach((G) => {
            const et = `${Y.uid}:${G.uid}`, Me = V.get(et) || /* @__PURE__ */ new Set();
            if (G.selected)
              if (Y.multiple) {
                const $e = Dt([ze, Me]);
                G.count = $e.size;
              } else
                G.count = ze.size;
            else {
              const $e = [];
              for (const tt of C)
                $e.push({ ...tt, children: [...tt.children] });
              let Ue = $e.find((tt) => tt.uid === Y.uid);
              Ue || (Ue = { ...Y, children: [] }, $e.push(Ue)), Y.multiple ? Ue.children.push(G) : Ue.children = [G];
              const Ws = jt($e, V, W);
              G.count = Ws.size;
            }
          });
        });
      }
    }
  }, { deep: !0, immediate: !0 }), {
    facets: I,
    searchValue: ue,
    selectedSort: Je,
    sortTypes: ge,
    displayItems: fe,
    selectedFacets: de,
    clearFilters: ke,
    handleFacetChange: mn
  };
}
const Bl = ["onClick"], Fh = {
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
    const t = e, s = n, o = w(() => {
      const l = [];
      return t.selectedFacets.forEach((a) => {
        a.children.forEach((c) => {
          l.push({
            ...c,
            groupUid: a.uid
          });
        });
      }), l;
    });
    function i(l) {
      s("facet-change", {
        groupUid: l.groupUid,
        facetUid: l.uid,
        selected: !1
      });
    }
    function r() {
      s("clear-filters");
    }
    return (l, a) => o.value.length ? (u(), d("div", {
      key: 0,
      class: m(["facets-active", e.classes.container])
    }, [
      (u(), _(F(e.labelElement), {
        class: m(["facets-active__label", e.classes.label])
      }, {
        default: S(() => [
          g(l.$slots, "label", {}, () => [
            a[0] || (a[0] = k(" Active Filters: ", -1))
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
              k(" " + y(c.label), 1)
            ], 2),
            h("span", {
              class: m(e.classes.filterButtonIcon)
            }, [
              R(N, { icon: e.removeIcon }, null, 8, ["icon"])
            ], 2)
          ], 10, Bl)
        ], 2))), 128))
      ], 2),
      h("button", {
        onClick: r,
        class: m(e.classes.clearButton)
      }, "Clear All", 2)
    ], 2)) : b("", !0);
  }
}, zl = { key: 0 }, dt = {
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
    return (r, l) => (u(), _(Cs, {
      class: "facets-list",
      legend: e.groupUid,
      type: e.type,
      options: o.value,
      compact: e.compact,
      "model-value": e.modelValue,
      "onUpdate:modelValue": i
    }, {
      default: S(({ option: a }) => [
        k(y(a.label) + " ", 1),
        a.count !== void 0 ? (u(), d("span", zl, "(" + y(a.count) + ")", 1)) : b("", !0)
      ]),
      _: 1
    }, 8, ["legend", "type", "options", "compact", "model-value"]));
  }
}, Ml = { class: "facets-filters" }, Vh = {
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
    return (o, i) => (u(), d("div", Ml, [
      (u(!0), d(x, null, O(e.facets, (r) => (u(), _(Ht, {
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
        trigger: S(({ isOpen: l }) => [
          g(o.$slots, "groupTrigger", {
            group: r,
            isOpen: l
          }, () => [
            k(y(r.name), 1)
          ])
        ]),
        default: S(() => [
          R(dt, {
            children: r.children.slice(0, e.maxVisible),
            groupUid: r.uid,
            groupName: r.name,
            type: r.multiple ? "checkbox" : "radio",
            compact: e.compact,
            "model-value": s(r),
            onFacetChange: i[0] || (i[0] = (l) => t("facet-change", l))
          }, null, 8, ["children", "groupUid", "groupName", "type", "compact", "model-value"]),
          r.children.length > e.maxVisible ? (u(), _(Ht, {
            key: 0,
            class: m(["facets-filters__more-facets", e.classes.moreFacets])
          }, {
            trigger: S(({ isOpen: l }) => [
              k(y(l ? "View Less" : "Show More"), 1)
            ]),
            default: S(() => [
              R(dt, {
                children: r.children.slice(e.maxVisible),
                groupUid: r.uid,
                groupName: r.name,
                type: r.multiple ? "checkbox" : "radio",
                compact: e.compact,
                "model-value": s(r),
                onFacetChange: i[1] || (i[1] = (l) => t("facet-change", l))
              }, null, 8, ["children", "groupUid", "groupName", "type", "compact", "model-value"])
            ]),
            _: 2
          }, 1032, ["class"])) : b("", !0)
        ]),
        _: 2
      }, 1032, ["classes", "startOpen"]))), 128))
    ]));
  }
}, Ul = { class: "facets-filters" }, Hh = {
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
    return (o, i) => (u(), d("div", Ul, [
      (u(!0), d(x, null, O(e.facets, (r) => (u(), _($n, {
        key: r.uid,
        modifiers: e.accordionModifiers,
        startOpen: r.open
      }, {
        trigger: S(({ isOpen: l }) => [
          g(o.$slots, "groupTrigger", {
            group: r,
            isOpen: l
          }, () => [
            k(y(r.name), 1)
          ])
        ]),
        default: S(() => [
          R(dt, {
            children: r.children.slice(0, e.maxVisible),
            groupUid: r.uid,
            groupName: r.name,
            type: r.multiple ? "checkbox" : "radio",
            compact: e.compact,
            "model-value": s(r),
            onFacetChange: i[0] || (i[0] = (l) => t("facet-change", l))
          }, null, 8, ["children", "groupUid", "groupName", "type", "compact", "model-value"]),
          r.children.length > e.maxVisible ? (u(), _($n, {
            key: 0,
            class: m(["facets-filters__more-facets", e.classes.moreFacets]),
            modifiers: e.accordionModifiers
          }, {
            trigger: S(({ isOpen: l }) => [
              k(y(l ? "View Less" : "Show More"), 1)
            ]),
            default: S(() => [
              R(dt, {
                children: r.children.slice(e.maxVisible),
                groupUid: r.uid,
                groupName: r.name,
                type: r.multiple ? "checkbox" : "radio",
                compact: e.compact,
                "model-value": s(r),
                onFacetChange: i[1] || (i[1] = (l) => t("facet-change", l))
              }, null, 8, ["children", "groupUid", "groupName", "type", "compact", "model-value"])
            ]),
            _: 2
          }, 1032, ["class", "modifiers"])) : b("", !0)
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
    const t = n, s = (l) => l.multiple ? l.children : [{ label: `All ${l.name}s`, uid: "" }, ...l.children], o = (l) => l.multiple ? l.children.filter((a) => a.selected).map((a) => a.uid) : l.children.find((a) => a.selected)?.uid || "", i = (l) => {
      const a = l.children.filter((f) => f.selected), c = a.length;
      return c === 0 ? "All" : l.multiple ? c === 1 ? a[0].label : `${c} selected` : a[0].label;
    };
    function r(l, a, c) {
      if (l.multiple) {
        const f = new Set(a);
        l.children.forEach((p) => {
          const v = f.has(p.uid);
          p.selected !== v && t("facet-change", {
            groupUid: l.uid,
            facetUid: p.uid,
            selected: v
          });
        });
      } else {
        const f = a;
        l.children.forEach((p) => {
          const v = p.uid === f;
          p.selected !== v && t("facet-change", {
            groupUid: l.uid,
            facetUid: p.uid,
            selected: v
          });
        }), c();
      }
    }
    return (l, a) => (u(), d("div", {
      class: m(e.classes.container)
    }, [
      (u(!0), d(x, null, O(e.facets, (c) => (u(), d("div", {
        key: c.uid,
        class: m(e.classes.group)
      }, [
        R(yt, {
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
                k(y(c.name) + ": ", 1),
                h("strong", null, y(i(c)), 1)
              ])
            ]),
            R(N, {
              class: m(e.classes.triggerIcon),
              icon: "fas fa-chevron-down"
            }, null, 8, ["class"])
          ]),
          default: S(({ close: f }) => [
            R(Cs, {
              legend: c.name,
              type: c.multiple ? "checkbox" : "radio",
              options: s(c),
              "model-value": o(c),
              "onUpdate:modelValue": (p) => r(c, p, f),
              hideInputs: e.hideInputs
            }, null, 8, ["legend", "type", "options", "model-value", "onUpdate:modelValue", "hideInputs"])
          ]),
          _: 2
        }, 1032, ["classes"])
      ], 2))), 128))
    ], 2));
  }
}, Pl = { class: "facets-dropdown-filters" }, Ll = ["for"], Fl = ["id", "onChange"], Vl = { value: "" }, Hl = ["value", "selected"], Dh = {
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
    return (o, i) => (u(), d("div", Pl, [
      (u(!0), d(x, null, O(e.facets, (r) => (u(), d("div", {
        class: "facets-dropdown-filters__group",
        key: r.uid
      }, [
        h("label", {
          for: `facet-dropdown-${r.uid}`,
          class: "facets-dropdown-filters__label"
        }, y(r.name), 9, Ll),
        h("select", {
          id: `facet-dropdown-${r.uid}`,
          class: "facets-dropdown-filters__select",
          onChange: (l) => s(r, l)
        }, [
          h("option", Vl, "All " + y(r.name) + "s", 1),
          (u(!0), d(x, null, O(r.children, (l) => (u(), d("option", {
            key: l.uid,
            value: l.uid,
            selected: l.selected
          }, y(l.label), 9, Hl))), 128))
        ], 40, Fl)
      ]))), 128))
    ]));
  }
}, Nl = { class: "facets-header-layout" }, Dl = { class: "facets-header-layout__header" }, Wl = { class: "facets-header-layout__main" }, Wh = {
  __name: "UluFacetsHeaderLayout",
  setup(e) {
    return (n, t) => (u(), d("div", Nl, [
      h("div", Dl, [
        g(n.$slots, "header")
      ]),
      h("div", Wl, [
        g(n.$slots, "main")
      ])
    ]));
  }
}, Xl = { class: "facets-results" }, Yl = {
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
    return (n, t) => (u(), d("div", Xl, [
      e.items.length ? (u(), _(es, {
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
      }, 8, ["tag", "name", "class"])) : (u(), d("div", Yl, [
        g(n.$slots, "empty", {}, () => [
          t[0] || (t[0] = h("p", null, "No matching items found.", -1))
        ])
      ]))
    ]));
  }
}, ql = { class: "facets-search" }, Kl = ["placeholder"], Yh = {
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
    return (l, a) => (u(), d("div", ql, [
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
      }, null, 10, Kl), [
        [no, r.value]
      ])
    ]));
  }
}, Gl = { class: "facets-sidebar__header" }, Zl = { class: "facets-sidebar__mobile-controls" }, Jl = { class: "facets-sidebar__body" }, Ql = { class: "facets-sidebar__main" }, qh = {
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
    const n = j(!1), t = ht("uluIsMobile"), s = j(null), o = j(null), i = w(() => t.value ? o.value : s.value);
    return (r, l) => (u(), d("div", {
      class: m(["facets-sidebar", { "facets-sidebar--filters-hidden": T(t) }])
    }, [
      h("div", Gl, [
        g(r.$slots, "header")
      ]),
      Oe(h("div", Zl, [
        h("button", {
          class: m(e.classes.mobileButton),
          onClick: l[0] || (l[0] = (a) => n.value = !0)
        }, y(e.mobileButtonText), 3)
      ], 512), [
        [Mt, T(t)]
      ]),
      h("div", Jl, [
        Oe(h("div", {
          class: "facets-sidebar__sidebar",
          ref_key: "desktopTarget",
          ref: s
        }, null, 512), [
          [Mt, !T(t)]
        ]),
        h("div", Ql, [
          g(r.$slots, "main")
        ])
      ]),
      T(t) ? (u(), _(fs, {
        key: 0,
        modelValue: n.value,
        "onUpdate:modelValue": l[1] || (l[1] = (a) => n.value = a),
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
      }, 8, ["modelValue"])) : b("", !0),
      i.value ? (u(), _(ft, {
        key: 1,
        to: i.value
      }, [
        g(r.$slots, "sidebar")
      ], 8, ["to"])) : b("", !0)
    ], 2));
  }
}, ea = ["for"], ta = ["value", "id"], na = ["value"], Kh = {
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
    const s = n, o = j(`ulu-facet-sort-${++t}`);
    return (i, r) => (u(), d("div", {
      class: m(["facets-sort", e.classes.sortForm])
    }, [
      h("label", {
        for: o.value,
        class: m(e.classes.sortFormLabel)
      }, [
        g(i.$slots, "default", {}, () => [
          r[1] || (r[1] = k("Sort:", -1))
        ])
      ], 10, ea),
      h("select", {
        value: e.modelValue,
        onChange: r[0] || (r[0] = (l) => s("update:modelValue", l.target.value)),
        id: o.value,
        class: m(e.classes.sortFormSelect)
      }, [
        (u(!0), d(x, null, O(e.sortTypes, (l, a) => (u(), d("option", {
          value: a,
          key: a
        }, y(l.text), 9, na))), 128))
      ], 42, ta)
    ], 2));
  }
}, As = Symbol(), Ts = Symbol(), St = Symbol(), sa = {
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
      [St]: w(() => this.sections),
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
      const i = (r) => {
        r.forEach(({ target: l, isIntersecting: a }) => {
          const c = this.getSectionIndex(l), f = l.offsetTop, p = n[c], v = c === 0 && o > f, $ = c === n.length - 1 && o < f;
          p && this.$nextTick(() => {
            a ? (t(p), p.active = !0) : (v && !s || $ && p.active) && t(), this.$emit("section-change", {
              section: p,
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
}, oa = { class: "scroll-anchors" };
function ia(e, n, t, s, o, i) {
  return u(), d("div", oa, [
    g(e.$slots, "default")
  ]);
}
const Gh = /* @__PURE__ */ E(sa, [["render", ia]]), ra = {
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
}, la = ["href"];
function aa(e, n, t, s, o, i) {
  return i.sections.length ? (u(), _(F(t.element), {
    key: 0,
    class: "scroll-anchors__nav"
  }, {
    default: S(() => [
      h("ul", null, [
        (u(!0), d(x, null, O(i.sections, (r, l) => (u(), d("li", {
          key: l,
          class: m({ "is-active": r.active })
        }, [
          h("a", {
            class: m({ "is-active": r.active }),
            href: `#${r.titleId}`
          }, y(r.title), 11, la)
        ], 2))), 128))
      ])
    ]),
    _: 1
  })) : b("", !0);
}
const Zh = /* @__PURE__ */ E(ra, [["render", aa]]);
function Os(e) {
  requestAnimationFrame(() => {
    const n = new MessageChannel();
    n.port1.onmessage = e, n.port2.postMessage(void 0);
  });
}
const ca = {
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
}, ua = { class: "scroll-anchors__rail" }, da = ["href"];
function fa(e, n, t, s, o, i) {
  return i.sections.length ? (u(), _(F(t.element), {
    key: 0,
    class: "scroll-anchors__nav scroll-anchors__nav--animated"
  }, {
    default: S(() => [
      h("ul", ua, [
        (u(!0), d(x, null, O(i.sections, (r, l) => (u(), d("li", {
          key: l,
          class: m({ "is-active": r.active })
        }, [
          h("a", {
            class: m({ "is-active": r.active }),
            ref_for: !0,
            ref: (a) => i.addLinkRef(l, a),
            href: `#${r.titleId}`
          }, y(r.title), 11, da)
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
  })) : b("", !0);
}
const Jh = /* @__PURE__ */ E(ca, [["render", fa]]), ha = {
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
    sections: { from: St, default: () => w(() => []) }
  },
  data() {
    const { anchorId: e, title: n } = this;
    return {
      titleId: e || `sas-title-${Nr(n)}`
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
function ma(e, n, t, s, o, i) {
  return u(), d("div", {
    class: m([t.wrapperClass, { [t.activeClass]: t.activeClass && i.section?.active }]),
    ref: "element"
  }, [
    (u(), _(F(t.titleElement), {
      class: m(t.titleClass),
      id: o.titleId
    }, {
      default: S(() => [
        k(y(t.title), 1)
      ]),
      _: 1
    }, 8, ["class", "id"])),
    g(e.$slots, "default", { section: i.section })
  ], 2);
}
const Qh = /* @__PURE__ */ E(ha, [["render", ma]]), ga = {
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
    return (n, t) => e.when ? (u(), _(ga, {
      key: 1,
      inline: ""
    })) : g(n.$slots, "default", { key: 0 });
  }
};
function va(e, n) {
  return [...Array(e)].map((t, s) => n(s));
}
function tm(e, n) {
  var t = e.indexOf(n);
  t > -1 && e.splice(t, 1);
}
const nm = {
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
    const n = e, t = w(() => va(n.lines, () => {
      const o = ut(70, 100);
      let i = 0;
      const r = () => {
        const c = o - i, f = ut(15, c);
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
      (u(!0), d(x, null, O(t.value, (i, r) => (u(), d("div", { key: r }, [
        (u(!0), d(x, null, O(i, (l) => (u(), d("span", {
          key: l,
          class: m(["skeleton skeleton--text skeleton--inline", { "skeleton--background-alt": l.alt }]),
          style: H({ width: `${l.width}%` })
        }, null, 6))), 128))
      ]))), 128))
    ]));
  }
}, ya = { class: "skeleton skeleton-block--media" }, sm = {
  __name: "UluSkeletonMedia",
  setup(e) {
    return (n, t) => (u(), d("div", ya, [
      R(N, { icon: "type:image" })
    ]));
  }
}, pa = {
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
}, ba = { class: "slideshow" }, _a = {
  class: "slideshow__control-context",
  ref: "context"
}, wa = {
  class: "slideshow__track-crop",
  ref: "crop"
}, Sa = {
  class: "slideshow__track",
  ref: "track"
}, ka = ["tabindex"], $a = { class: "slideshow__controls" }, Ca = { class: "slideshow__controls-item slideshow__controls-item--previous" }, Aa = ["disabled"], Ta = { class: "slideshow__controls-item slideshow__controls-item--next" }, Oa = ["disabled"], xa = {
  key: 0,
  class: "slideshow__nav",
  ref: "nav"
}, Ea = ["onClick"], Ra = { class: "hidden-visually" };
function ja(e, n, t, s, o, i) {
  const r = D("UluIcon");
  return u(), d("div", ba, [
    h("div", _a, [
      h("div", wa, [
        h("ul", Sa, [
          (u(!0), d(x, null, O(o.slides, (l, a) => (u(), d("li", {
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
          ], 10, ka))), 128))
        ], 512)
      ], 512),
      h("ul", $a, [
        h("li", Ca, [
          h("button", {
            class: "slideshow__control-button slideshow__control-button--previous",
            "aria-label": "Scroll Right",
            onClick: n[0] || (n[0] = (...l) => i.previous && i.previous(...l)),
            disabled: !i.canScrollLeft
          }, [
            R(r, {
              class: "slideshow__control-icon",
              icon: "type:previous"
            })
          ], 8, Aa)
        ]),
        h("li", Ta, [
          h("button", {
            class: "slideshow__control-button slideshow__control-button--next",
            "aria-label": "Scroll Left",
            onClick: n[1] || (n[1] = (...l) => i.next && i.next(...l)),
            disabled: !i.canScrollRight
          }, [
            R(r, {
              class: "slideshow__control-icon",
              icon: "type:next"
            })
          ], 8, Oa)
        ])
      ])
    ], 512),
    t.noNav ? b("", !0) : (u(), d("ul", xa, [
      (u(!0), d(x, null, O(o.slides, (l, a) => (u(), d("li", {
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
            h("span", Ra, "Item " + y(a + 1), 1)
          ])
        ], 10, Ea)
      ], 2))), 128))
    ], 512))
  ]);
}
const Ia = /* @__PURE__ */ E(pa, [["render", ja]]), Ba = {
  name: "ImageSlideShow",
  components: {
    UluSlideShow: Ia
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
}, za = ["src", "alt"], Ma = { class: "slideshow__image-actions" }, Ua = ["src", "alt"];
function Pa(e, n, t, s, o, i) {
  const r = D("AppButton"), l = D("UluSlideShow");
  return u(), _(l, {
    class: "slideshow--images",
    items: t.images,
    onSlideChange: i.slideChange
  }, {
    slide: S(({ item: a }) => [
      h("img", {
        src: a.src,
        alt: a.alt
      }, null, 8, za),
      h("div", Ma, [
        t.selectButton ? (u(), _(r, {
          key: 0,
          class: "type-small",
          icon: "plus",
          small: "",
          iconBefore: ""
        }, {
          default: S(() => [...n[0] || (n[0] = [
            k(" Select ", -1)
          ])]),
          _: 1
        })) : b("", !0)
      ])
    ]),
    nav: S(({ index: a }) => [
      h("img", {
        src: t.images[a].src,
        alt: `View image ${a}`
      }, null, 8, Ua)
    ]),
    _: 1
  }, 8, ["items", "onSlideChange"]);
}
const om = /* @__PURE__ */ E(Ba, [["render", Pa]]), La = {
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
function Fa(e, n, t, s, o, i) {
  return u(), d("li", {
    class: m(["slideshow__slide", { "is-active": t.active }])
  }, [
    g(e.$slots, "default")
  ], 2);
}
const im = /* @__PURE__ */ E(La, [["render", Fa]]), Va = {
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
}, Ha = ["id"], Na = ["innerHTML"];
function Da(e, n, t, s, o, i) {
  return u(!0), d(x, null, O(t.rows, (r, l) => (u(), d("tr", {
    key: `br-${l}`,
    id: t.optionalAttr(t.isActual && r.id),
    class: m(t.resolveClasses(t.classes.row, { row: r.data, rowIndex: l, isActual: t.isActual, foot: t.foot })),
    style: H({
      height: r.height
    })
  }, [
    (u(!0), d(x, null, O(t.rowColumns, (a, c) => (u(), _(F(a.rowHeader ? "th" : "td"), {
      id: t.optionalAttr(t.isActual && a.rowHeader && a.getRowHeaderId(l)),
      scope: t.optionalAttr(t.isActual && a.rowHeader && "row"),
      key: `bc-${c}`,
      headers: t.optionalAttr(t.isActual && t.getCellHeaders(a, l)),
      class: m(t.resolveClasses(a.class, { column: a, index: c, isActual: t.isActual, row: r, rowIndex: l, foot: t.foot })),
      style: H({
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
        }, null, 8, Na)) : (u(), d(x, { key: 2 }, [
          k(y(t.value({ row: r, column: a, rowIndex: l, isActual: t.isActual, foot: t.foot })), 1)
        ], 64))
      ]),
      _: 2
    }, 1032, ["id", "scope", "headers", "class", "style"]))), 128))
  ], 14, Ha))), 128);
}
const Wa = /* @__PURE__ */ E(Va, [["render", Da]]), Xa = {
  name: "UluTableStickyTable",
  components: {
    UluTableStickyRows: Wa
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
}, Ya = ["aria-hidden"], qa = {
  key: 0,
  class: "table-sticky__caption"
}, Ka = ["id"], Ga = ["id", "rowspan", "colspan", "data-child-columns", "aria-sort", "scope", "headers"], Za = ["innerHTML"], Ja = {
  class: "table-sticky__sort-icon",
  "aria-hidden": "true"
}, Qa = { class: "table-sticky__sort-icon-inner" }, ec = ["innerHTML"], tc = { key: 1 }, nc = { key: 2 };
function sc(e, n, t, s, o, i) {
  const r = D("UluTableStickyRows");
  return u(), d("table", {
    class: m(t.resolveClasses(t.classes.table, { isActual: t.isActual })),
    "aria-hidden": t.isActual ? "false" : "true"
  }, [
    t.caption ? (u(), d("caption", qa, y(t.caption), 1)) : b("", !0),
    h("thead", null, [
      (u(!0), d(x, null, O(t.headerRows, (l, a) => (u(), d("tr", {
        key: `hr-${a}`,
        id: i.optionalAttr(t.isActual && l.id),
        class: m(t.resolveClasses(t.classes.rowHeader, { row: l, rowIndex: a, isActual: t.isActual })),
        style: H({
          height: l.height
        })
      }, [
        (u(!0), d(x, null, O(l.columns, (c, f) => (u(), d("th", {
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
          ref: (p) => i.addHeaderRef(c, p)
        }, [
          c.sortable ? (u(), _(F(t.isActual ? "button" : "div"), {
            key: 0,
            class: m(["table-sticky__sort-button", {
              "table-sticky__sort-button--focused": c.sortFocused
            }]),
            onClick: (p) => e.$emit("column-sorted", c),
            onFocus: (p) => i.handleSortFocus(c, !0),
            onBlur: (p) => i.handleSortFocus(c, !1),
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
              }, null, 8, Za)) : (u(), d(x, { key: 2 }, [
                k(y(t.getColumnTitle({ column: c, index: f, isActual: t.isActual })), 1)
              ], 64)),
              h("span", Ja, [
                h("span", Qa, [
                  g(e.$slots, "sortIcon", {}, () => [
                    n[0] || (n[0] = k("▼", -1))
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
            }, null, 8, ec)) : (u(), d(x, { key: 2 }, [
              k(y(t.getColumnTitle({ column: c, index: f, isActual: t.isActual })), 1)
            ], 64))
          ], 64))
        ], 14, Ga))), 128))
      ], 14, Ka))), 128))
    ]),
    t.rows ? (u(), d("tbody", tc, [
      R(r, {
        rows: t.rows,
        rowColumns: t.rowColumns,
        optionalAttr: i.optionalAttr,
        resolveClasses: t.resolveClasses,
        getCellHeaders: i.getCellHeaders,
        isActual: t.isActual,
        columnWidth: t.columnWidth,
        classes: t.classes,
        value: i.value
      }, Te({ _: 2 }, [
        O(e.$slots, (l, a) => ({
          name: a,
          fn: S((c) => [
            g(e.$slots, a, ee(te(c)))
          ])
        }))
      ]), 1032, ["rows", "rowColumns", "optionalAttr", "resolveClasses", "getCellHeaders", "isActual", "columnWidth", "classes", "value"])
    ])) : b("", !0),
    t.footerRows ? (u(), d("tfoot", nc, [
      R(r, {
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
      }, Te({ _: 2 }, [
        O(e.$slots, (l, a) => ({
          name: a,
          fn: S((c) => [
            g(e.$slots, a, ee(te(c)))
          ])
        }))
      ]), 1032, ["rows", "rowColumns", "optionalAttr", "resolveClasses", "getCellHeaders", "isActual", "columnWidth", "classes", "value"])
    ])) : b("", !0)
  ], 10, Ya);
}
const oc = /* @__PURE__ */ E(Xa, [["render", sc]]);
function ic() {
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
var rc = Array.prototype, lc = rc.splice;
function ac(e) {
  var n = this.__data__, t = kt(n, e);
  if (t < 0)
    return !1;
  var s = n.length - 1;
  return t == s ? n.pop() : lc.call(n, t, 1), --this.size, !0;
}
function cc(e) {
  var n = this.__data__, t = kt(n, e);
  return t < 0 ? void 0 : n[t][1];
}
function uc(e) {
  return kt(this.__data__, e) > -1;
}
function dc(e, n) {
  var t = this.__data__, s = kt(t, e);
  return s < 0 ? (++this.size, t.push([e, n])) : t[s][1] = n, this;
}
function ce(e) {
  var n = -1, t = e == null ? 0 : e.length;
  for (this.clear(); ++n < t; ) {
    var s = e[n];
    this.set(s[0], s[1]);
  }
}
ce.prototype.clear = ic;
ce.prototype.delete = ac;
ce.prototype.get = cc;
ce.prototype.has = uc;
ce.prototype.set = dc;
function fc() {
  this.__data__ = new ce(), this.size = 0;
}
function hc(e) {
  var n = this.__data__, t = n.delete(e);
  return this.size = n.size, t;
}
function mc(e) {
  return this.__data__.get(e);
}
function gc(e) {
  return this.__data__.has(e);
}
var Es = typeof global == "object" && global && global.Object === Object && global, vc = typeof self == "object" && self && self.Object === Object && self, se = Es || vc || Function("return this")(), Re = se.Symbol, Rs = Object.prototype, yc = Rs.hasOwnProperty, pc = Rs.toString, Pe = Re ? Re.toStringTag : void 0;
function bc(e) {
  var n = yc.call(e, Pe), t = e[Pe];
  try {
    e[Pe] = void 0;
    var s = !0;
  } catch {
  }
  var o = pc.call(e);
  return s && (n ? e[Pe] = t : delete e[Pe]), o;
}
var _c = Object.prototype, wc = _c.toString;
function Sc(e) {
  return wc.call(e);
}
var kc = "[object Null]", $c = "[object Undefined]", On = Re ? Re.toStringTag : void 0;
function Ge(e) {
  return e == null ? e === void 0 ? $c : kc : On && On in Object(e) ? bc(e) : Sc(e);
}
function $t(e) {
  var n = typeof e;
  return e != null && (n == "object" || n == "function");
}
var Cc = "[object AsyncFunction]", Ac = "[object Function]", Tc = "[object GeneratorFunction]", Oc = "[object Proxy]";
function js(e) {
  if (!$t(e))
    return !1;
  var n = Ge(e);
  return n == Ac || n == Tc || n == Cc || n == Oc;
}
var It = se["__core-js_shared__"], xn = function() {
  var e = /[^.]+$/.exec(It && It.keys && It.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function xc(e) {
  return !!xn && xn in e;
}
var Ec = Function.prototype, Rc = Ec.toString;
function we(e) {
  if (e != null) {
    try {
      return Rc.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var jc = /[\\^$.*+?()[\]{}|]/g, Ic = /^\[object .+?Constructor\]$/, Bc = Function.prototype, zc = Object.prototype, Mc = Bc.toString, Uc = zc.hasOwnProperty, Pc = RegExp(
  "^" + Mc.call(Uc).replace(jc, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Lc(e) {
  if (!$t(e) || xc(e))
    return !1;
  var n = js(e) ? Pc : Ic;
  return n.test(we(e));
}
function Fc(e, n) {
  return e?.[n];
}
function Se(e, n) {
  var t = Fc(e, n);
  return Lc(t) ? t : void 0;
}
var qe = Se(se, "Map"), Ke = Se(Object, "create");
function Vc() {
  this.__data__ = Ke ? Ke(null) : {}, this.size = 0;
}
function Hc(e) {
  var n = this.has(e) && delete this.__data__[e];
  return this.size -= n ? 1 : 0, n;
}
var Nc = "__lodash_hash_undefined__", Dc = Object.prototype, Wc = Dc.hasOwnProperty;
function Xc(e) {
  var n = this.__data__;
  if (Ke) {
    var t = n[e];
    return t === Nc ? void 0 : t;
  }
  return Wc.call(n, e) ? n[e] : void 0;
}
var Yc = Object.prototype, qc = Yc.hasOwnProperty;
function Kc(e) {
  var n = this.__data__;
  return Ke ? n[e] !== void 0 : qc.call(n, e);
}
var Gc = "__lodash_hash_undefined__";
function Zc(e, n) {
  var t = this.__data__;
  return this.size += this.has(e) ? 0 : 1, t[e] = Ke && n === void 0 ? Gc : n, this;
}
function be(e) {
  var n = -1, t = e == null ? 0 : e.length;
  for (this.clear(); ++n < t; ) {
    var s = e[n];
    this.set(s[0], s[1]);
  }
}
be.prototype.clear = Vc;
be.prototype.delete = Hc;
be.prototype.get = Xc;
be.prototype.has = Kc;
be.prototype.set = Zc;
function Jc() {
  this.size = 0, this.__data__ = {
    hash: new be(),
    map: new (qe || ce)(),
    string: new be()
  };
}
function Qc(e) {
  var n = typeof e;
  return n == "string" || n == "number" || n == "symbol" || n == "boolean" ? e !== "__proto__" : e === null;
}
function Ct(e, n) {
  var t = e.__data__;
  return Qc(n) ? t[typeof n == "string" ? "string" : "hash"] : t.map;
}
function eu(e) {
  var n = Ct(this, e).delete(e);
  return this.size -= n ? 1 : 0, n;
}
function tu(e) {
  return Ct(this, e).get(e);
}
function nu(e) {
  return Ct(this, e).has(e);
}
function su(e, n) {
  var t = Ct(this, e), s = t.size;
  return t.set(e, n), this.size += t.size == s ? 0 : 1, this;
}
function Ie(e) {
  var n = -1, t = e == null ? 0 : e.length;
  for (this.clear(); ++n < t; ) {
    var s = e[n];
    this.set(s[0], s[1]);
  }
}
Ie.prototype.clear = Jc;
Ie.prototype.delete = eu;
Ie.prototype.get = tu;
Ie.prototype.has = nu;
Ie.prototype.set = su;
var ou = 200;
function iu(e, n) {
  var t = this.__data__;
  if (t instanceof ce) {
    var s = t.__data__;
    if (!qe || s.length < ou - 1)
      return s.push([e, n]), this.size = ++t.size, this;
    t = this.__data__ = new Ie(s);
  }
  return t.set(e, n), this.size = t.size, this;
}
function Be(e) {
  var n = this.__data__ = new ce(e);
  this.size = n.size;
}
Be.prototype.clear = fc;
Be.prototype.delete = hc;
Be.prototype.get = mc;
Be.prototype.has = gc;
Be.prototype.set = iu;
function ru(e, n) {
  for (var t = -1, s = e == null ? 0 : e.length; ++t < s && n(e[t], t, e) !== !1; )
    ;
  return e;
}
var En = function() {
  try {
    var e = Se(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}();
function lu(e, n, t) {
  n == "__proto__" && En ? En(e, n, {
    configurable: !0,
    enumerable: !0,
    value: t,
    writable: !0
  }) : e[n] = t;
}
var au = Object.prototype, cu = au.hasOwnProperty;
function uu(e, n, t) {
  var s = e[n];
  (!(cu.call(e, n) && xs(s, t)) || t === void 0 && !(n in e)) && lu(e, n, t);
}
function du(e, n) {
  for (var t = -1, s = Array(e); ++t < e; )
    s[t] = n(t);
  return s;
}
function Ze(e) {
  return e != null && typeof e == "object";
}
var fu = "[object Arguments]";
function Rn(e) {
  return Ze(e) && Ge(e) == fu;
}
var Is = Object.prototype, hu = Is.hasOwnProperty, mu = Is.propertyIsEnumerable, gu = Rn(/* @__PURE__ */ function() {
  return arguments;
}()) ? Rn : function(e) {
  return Ze(e) && hu.call(e, "callee") && !mu.call(e, "callee");
}, dn = Array.isArray;
function vu() {
  return !1;
}
var Bs = typeof exports == "object" && exports && !exports.nodeType && exports, jn = Bs && typeof module == "object" && module && !module.nodeType && module, yu = jn && jn.exports === Bs, In = yu ? se.Buffer : void 0, pu = In ? In.isBuffer : void 0, zs = pu || vu, bu = 9007199254740991, _u = /^(?:0|[1-9]\d*)$/;
function wu(e, n) {
  var t = typeof e;
  return n = n ?? bu, !!n && (t == "number" || t != "symbol" && _u.test(e)) && e > -1 && e % 1 == 0 && e < n;
}
var Su = 9007199254740991;
function Ms(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Su;
}
var ku = "[object Arguments]", $u = "[object Array]", Cu = "[object Boolean]", Au = "[object Date]", Tu = "[object Error]", Ou = "[object Function]", xu = "[object Map]", Eu = "[object Number]", Ru = "[object Object]", ju = "[object RegExp]", Iu = "[object Set]", Bu = "[object String]", zu = "[object WeakMap]", Mu = "[object ArrayBuffer]", Uu = "[object DataView]", Pu = "[object Float32Array]", Lu = "[object Float64Array]", Fu = "[object Int8Array]", Vu = "[object Int16Array]", Hu = "[object Int32Array]", Nu = "[object Uint8Array]", Du = "[object Uint8ClampedArray]", Wu = "[object Uint16Array]", Xu = "[object Uint32Array]", L = {};
L[Pu] = L[Lu] = L[Fu] = L[Vu] = L[Hu] = L[Nu] = L[Du] = L[Wu] = L[Xu] = !0;
L[ku] = L[$u] = L[Mu] = L[Cu] = L[Uu] = L[Au] = L[Tu] = L[Ou] = L[xu] = L[Eu] = L[Ru] = L[ju] = L[Iu] = L[Bu] = L[zu] = !1;
function Yu(e) {
  return Ze(e) && Ms(e.length) && !!L[Ge(e)];
}
function fn(e) {
  return function(n) {
    return e(n);
  };
}
var Us = typeof exports == "object" && exports && !exports.nodeType && exports, Ne = Us && typeof module == "object" && module && !module.nodeType && module, qu = Ne && Ne.exports === Us, Bt = qu && Es.process, je = function() {
  try {
    var e = Ne && Ne.require && Ne.require("util").types;
    return e || Bt && Bt.binding && Bt.binding("util");
  } catch {
  }
}(), Bn = je && je.isTypedArray, Ku = Bn ? fn(Bn) : Yu, Gu = Object.prototype, Zu = Gu.hasOwnProperty;
function Ju(e, n) {
  var t = dn(e), s = !t && gu(e), o = !t && !s && zs(e), i = !t && !s && !o && Ku(e), r = t || s || o || i, l = r ? du(e.length, String) : [], a = l.length;
  for (var c in e)
    Zu.call(e, c) && !(r && // Safari 9 has enumerable `arguments.length` in strict mode.
    (c == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    o && (c == "offset" || c == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    i && (c == "buffer" || c == "byteLength" || c == "byteOffset") || // Skip index properties.
    wu(c, a))) && l.push(c);
  return l;
}
var Qu = Object.prototype;
function Ps(e) {
  var n = e && e.constructor, t = typeof n == "function" && n.prototype || Qu;
  return e === t;
}
function Ls(e, n) {
  return function(t) {
    return e(n(t));
  };
}
var ed = Ls(Object.keys, Object), td = Object.prototype, nd = td.hasOwnProperty;
function sd(e) {
  if (!Ps(e))
    return ed(e);
  var n = [];
  for (var t in Object(e))
    nd.call(e, t) && t != "constructor" && n.push(t);
  return n;
}
function od(e) {
  return e != null && Ms(e.length) && !js(e);
}
function id(e) {
  return od(e) ? Ju(e) : sd(e);
}
var Fs = typeof exports == "object" && exports && !exports.nodeType && exports, zn = Fs && typeof module == "object" && module && !module.nodeType && module, rd = zn && zn.exports === Fs, Mn = rd ? se.Buffer : void 0;
Mn && Mn.allocUnsafe;
function ld(e, n) {
  return e.slice();
}
function ad(e, n) {
  for (var t = -1, s = e == null ? 0 : e.length, o = 0, i = []; ++t < s; ) {
    var r = e[t];
    n(r, t, e) && (i[o++] = r);
  }
  return i;
}
function cd() {
  return [];
}
var ud = Object.prototype, dd = ud.propertyIsEnumerable, Un = Object.getOwnPropertySymbols, fd = Un ? function(e) {
  return e == null ? [] : (e = Object(e), ad(Un(e), function(n) {
    return dd.call(e, n);
  }));
} : cd;
function hd(e, n) {
  for (var t = -1, s = n.length, o = e.length; ++t < s; )
    e[o + t] = n[t];
  return e;
}
var md = Ls(Object.getPrototypeOf, Object);
function gd(e, n, t) {
  var s = n(e);
  return dn(e) ? s : hd(s, t(e));
}
function vd(e) {
  return gd(e, id, fd);
}
var Wt = Se(se, "DataView"), Xt = Se(se, "Promise"), Yt = Se(se, "Set"), qt = Se(se, "WeakMap"), Pn = "[object Map]", yd = "[object Object]", Ln = "[object Promise]", Fn = "[object Set]", Vn = "[object WeakMap]", Hn = "[object DataView]", pd = we(Wt), bd = we(qe), _d = we(Xt), wd = we(Yt), Sd = we(qt), re = Ge;
(Wt && re(new Wt(new ArrayBuffer(1))) != Hn || qe && re(new qe()) != Pn || Xt && re(Xt.resolve()) != Ln || Yt && re(new Yt()) != Fn || qt && re(new qt()) != Vn) && (re = function(e) {
  var n = Ge(e), t = n == yd ? e.constructor : void 0, s = t ? we(t) : "";
  if (s)
    switch (s) {
      case pd:
        return Hn;
      case bd:
        return Pn;
      case _d:
        return Ln;
      case wd:
        return Fn;
      case Sd:
        return Vn;
    }
  return n;
});
var kd = Object.prototype, $d = kd.hasOwnProperty;
function Cd(e) {
  var n = e.length, t = new e.constructor(n);
  return n && typeof e[0] == "string" && $d.call(e, "index") && (t.index = e.index, t.input = e.input), t;
}
var Nn = se.Uint8Array;
function hn(e) {
  var n = new e.constructor(e.byteLength);
  return new Nn(n).set(new Nn(e)), n;
}
function Ad(e, n) {
  var t = hn(e.buffer);
  return new e.constructor(t, e.byteOffset, e.byteLength);
}
var Td = /\w*$/;
function Od(e) {
  var n = new e.constructor(e.source, Td.exec(e));
  return n.lastIndex = e.lastIndex, n;
}
var Dn = Re ? Re.prototype : void 0, Wn = Dn ? Dn.valueOf : void 0;
function xd(e) {
  return Wn ? Object(Wn.call(e)) : {};
}
function Ed(e, n) {
  var t = hn(e.buffer);
  return new e.constructor(t, e.byteOffset, e.length);
}
var Rd = "[object Boolean]", jd = "[object Date]", Id = "[object Map]", Bd = "[object Number]", zd = "[object RegExp]", Md = "[object Set]", Ud = "[object String]", Pd = "[object Symbol]", Ld = "[object ArrayBuffer]", Fd = "[object DataView]", Vd = "[object Float32Array]", Hd = "[object Float64Array]", Nd = "[object Int8Array]", Dd = "[object Int16Array]", Wd = "[object Int32Array]", Xd = "[object Uint8Array]", Yd = "[object Uint8ClampedArray]", qd = "[object Uint16Array]", Kd = "[object Uint32Array]";
function Gd(e, n, t) {
  var s = e.constructor;
  switch (n) {
    case Ld:
      return hn(e);
    case Rd:
    case jd:
      return new s(+e);
    case Fd:
      return Ad(e);
    case Vd:
    case Hd:
    case Nd:
    case Dd:
    case Wd:
    case Xd:
    case Yd:
    case qd:
    case Kd:
      return Ed(e);
    case Id:
      return new s();
    case Bd:
    case Ud:
      return new s(e);
    case zd:
      return Od(e);
    case Md:
      return new s();
    case Pd:
      return xd(e);
  }
}
var Xn = Object.create, Zd = /* @__PURE__ */ function() {
  function e() {
  }
  return function(n) {
    if (!$t(n))
      return {};
    if (Xn)
      return Xn(n);
    e.prototype = n;
    var t = new e();
    return e.prototype = void 0, t;
  };
}();
function Jd(e) {
  return typeof e.constructor == "function" && !Ps(e) ? Zd(md(e)) : {};
}
var Qd = "[object Map]";
function ef(e) {
  return Ze(e) && re(e) == Qd;
}
var Yn = je && je.isMap, tf = Yn ? fn(Yn) : ef, nf = "[object Set]";
function sf(e) {
  return Ze(e) && re(e) == nf;
}
var qn = je && je.isSet, of = qn ? fn(qn) : sf, Vs = "[object Arguments]", rf = "[object Array]", lf = "[object Boolean]", af = "[object Date]", cf = "[object Error]", Hs = "[object Function]", uf = "[object GeneratorFunction]", df = "[object Map]", ff = "[object Number]", Ns = "[object Object]", hf = "[object RegExp]", mf = "[object Set]", gf = "[object String]", vf = "[object Symbol]", yf = "[object WeakMap]", pf = "[object ArrayBuffer]", bf = "[object DataView]", _f = "[object Float32Array]", wf = "[object Float64Array]", Sf = "[object Int8Array]", kf = "[object Int16Array]", $f = "[object Int32Array]", Cf = "[object Uint8Array]", Af = "[object Uint8ClampedArray]", Tf = "[object Uint16Array]", Of = "[object Uint32Array]", M = {};
M[Vs] = M[rf] = M[pf] = M[bf] = M[lf] = M[af] = M[_f] = M[wf] = M[Sf] = M[kf] = M[$f] = M[df] = M[ff] = M[Ns] = M[hf] = M[mf] = M[gf] = M[vf] = M[Cf] = M[Af] = M[Tf] = M[Of] = !0;
M[cf] = M[Hs] = M[yf] = !1;
function lt(e, n, t, s, o, i) {
  var r;
  if (r !== void 0)
    return r;
  if (!$t(e))
    return e;
  var l = dn(e);
  if (l)
    r = Cd(e);
  else {
    var a = re(e), c = a == Hs || a == uf;
    if (zs(e))
      return ld(e);
    if (a == Ns || a == Vs || c && !o)
      r = c ? {} : Jd(e);
    else {
      if (!M[a])
        return o ? e : {};
      r = Gd(e, a);
    }
  }
  i || (i = new Be());
  var f = i.get(e);
  if (f)
    return f;
  i.set(e, r), of(e) ? e.forEach(function($) {
    r.add(lt($, n, t, $, e, i));
  }) : tf(e) && e.forEach(function($, A) {
    r.set(A, lt($, n, t, A, e, i));
  });
  var p = vd, v = l ? void 0 : p(e);
  return ru(v || e, function($, A) {
    v && (A = $, $ = e[A]), uu(r, A, lt($, n, t, A, e, i));
  }), r;
}
var xf = 1, Ef = 4;
function Rf(e) {
  return lt(e, xf | Ef);
}
const zt = (e) => e.every((n) => typeof n == "object"), Kn = !0, Ds = () => window.innerWidth;
let Gn = Ds();
const jf = {
  name: "UluTableSticky",
  components: {
    UluTableStickyTable: oc
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
      required: Kn
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
      required: Kn
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
      const e = this.idCreator("c"), n = Rf(this.columns), t = (s, o) => {
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
      const e = Ds();
      Gn !== e && (Gn = e, this.resizing ? (this.resizing = !1, this.setTableSizes(), this.checkOverflowX(), this.syncScrollLeft()) : (this.resizing = !0, this.removeTableSizes()));
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
}, If = { class: "table-sticky__sticky-wrap table-sticky__sticky-wrap--header" }, Bf = { class: "table-sticky__header-wrap" }, zf = { class: "table-sticky__sticky-wrap table-sticky__sticky-wrap--first-column-header" }, Mf = { class: "table-sticky__sticky-wrap table-sticky__sticky-wrap--controls" }, Uf = {
  key: 2,
  class: "table-sticky__controls-inner"
}, Pf = ["disabled"], Lf = ["disabled"], Ff = {
  ref: "display",
  class: "table-sticky__display"
};
function Vf(e, n, t, s, o, i) {
  const r = D("UluTableStickyTable");
  return u(), d("div", {
    class: m(["table-sticky", {
      "table-sticky--overflown-x": o.overflownX,
      "table-sticky--can-scroll-right": o.canScrollRight,
      "table-sticky--can-scroll-left": o.canScrollLeft
    }])
  }, [
    h("div", If, [
      h("div", Bf, [
        R(r, {
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
        }, Te({ _: 2 }, [
          O(e.$slots, (l, a) => ({
            name: a,
            fn: S((c) => [
              g(e.$slots, a, ee(te(c)))
            ])
          }))
        ]), 1032, ["classes", "caption", "resolveClasses", "getColumnTitle", "idPrefix", "headerRows", "style", "onColumnSorted"])
      ])
    ]),
    h("div", zf, [
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
        style: H({
          opacity: i.headerOpacityX,
          pointerEvents: i.headerVisibleX ? "auto" : "none"
        }),
        onColumnSorted: i.applySort
      }, Te({ _: 2 }, [
        O(e.$slots, (l, a) => ({
          name: a,
          fn: S((c) => [
            g(e.$slots, a, ee(te(c)))
          ])
        }))
      ]), 1032, ["classes", "caption", "resolveClasses", "getColumnTitle", "idPrefix", "headerRows", "style", "onColumnSorted"])) : b("", !0)
    ]),
    h("div", Mf, [
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
        }) : t.controlsComponent ? (u(), _(F(t.controlsComponent), {
          key: 1,
          scrollLeft: i.scrollLeft,
          scrollRight: i.scrollRight,
          canScrollLeft: o.canScrollLeft,
          canScrollRight: o.canScrollRight
        }, null, 8, ["scrollLeft", "scrollRight", "canScrollLeft", "canScrollRight"])) : (u(), d("div", Uf, [
          h("button", {
            class: m(["table-sticky__control table-sticky__control--left", i.resolveClasses(t.classes.controlButton)]),
            "aria-label": "Scroll Left",
            onClick: n[0] || (n[0] = (...l) => i.scrollLeft && i.scrollLeft(...l)),
            disabled: !o.canScrollLeft
          }, [
            g(e.$slots, "controlLeft", {}, () => [
              n[2] || (n[2] = k(" ← ", -1))
            ])
          ], 10, Pf),
          h("button", {
            class: m(["table-sticky__control table-sticky__control--right", i.resolveClasses(t.classes.controlButton)]),
            "aria-label": "Scroll Right",
            onClick: n[1] || (n[1] = (...l) => i.scrollRight && i.scrollRight(...l)),
            disabled: !o.canScrollRight
          }, [
            g(e.$slots, "controlRight", {}, () => [
              n[3] || (n[3] = k(" → ", -1))
            ])
          ], 10, Lf)
        ]))
      ], 2), [
        [Mt, i.controlsShown]
      ])
    ]),
    h("div", Ff, [
      R(r, {
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
      }, Te({ _: 2 }, [
        O(e.$slots, (l, a) => ({
          name: a,
          fn: S((c) => [
            g(e.$slots, a, ee(te(c)))
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
      style: H({
        opacity: i.headerOpacityX,
        pointerEvents: i.headerVisibleX ? "auto" : "none"
      }),
      onColumnSorted: i.applySort
    }, Te({ _: 2 }, [
      O(e.$slots, (l, a) => ({
        name: a,
        fn: S((c) => [
          g(e.$slots, a, ee(te(c)))
        ])
      }))
    ]), 1032, ["classes", "resolveClasses", "caption", "headerRows", "columnWidth", "rows", "footerRows", "rowColumns", "idPrefix", "getRowValue", "getColumnTitle", "style", "onColumnSorted"])) : b("", !0)
  ], 2);
}
const rm = /* @__PURE__ */ E(jf, [["render", Vf]]), lm = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  dom: bi,
  router: Fi
}, Symbol.toStringTag, { value: "Module" }));
export {
  Bh as $,
  mh as A,
  N as B,
  gh as C,
  vh as D,
  yh as E,
  _s as F,
  Cs as G,
  ph as H,
  bh as I,
  _h as J,
  wh as K,
  Sh as L,
  kh as M,
  $h as N,
  Ch as O,
  Ah as P,
  Th as Q,
  ws as R,
  $i as S,
  Oh as T,
  fs as U,
  xh as V,
  Eh as W,
  Rh as X,
  jh as Y,
  Ih as Z,
  $n as _,
  st as a,
  zh as a0,
  Mh as a1,
  Uh as a2,
  Ph as a3,
  Lh as a4,
  Fh as a5,
  Vh as a6,
  Hh as a7,
  Nh as a8,
  Dh as a9,
  th as aA,
  Wh as aa,
  Xh as ab,
  Yh as ac,
  qh as ad,
  Kh as ae,
  dt as af,
  Gh as ag,
  Zh as ah,
  Jh as ai,
  Qh as aj,
  em as ak,
  nm as al,
  sm as am,
  ga as an,
  om as ao,
  Ia as ap,
  im as aq,
  rm as ar,
  Wa as as,
  oc as at,
  Ro as au,
  ne as av,
  Ai as aw,
  Oi as ax,
  si as ay,
  eh as az,
  qf as b,
  Kf as c,
  Gf as d,
  Zf as e,
  Jf as f,
  zo as g,
  Ht as h,
  lm as i,
  Qf as j,
  nh as k,
  Ce as l,
  sh as m,
  oh as n,
  ih as o,
  rh as p,
  lh as q,
  tm as r,
  ah as s,
  er as t,
  ch as u,
  Xi as v,
  uh as w,
  dh as x,
  fh as y,
  hh as z
};
