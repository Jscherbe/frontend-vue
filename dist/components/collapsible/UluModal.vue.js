import { useSlots as q, ref as p, computed as a, watch as B, nextTick as M, onMounted as G, onBeforeUnmount as J, createBlock as O, openBlock as c, Teleport as K, createElementVNode as d, withModifiers as Q, normalizeStyle as Z, normalizeClass as i, unref as T, createElementBlock as w, createCommentVNode as h, renderSlot as u, toDisplayString as _, createVNode as L } from "vue";
import C from "../elements/UluIcon.vue.js";
import { useModifiers as x } from "../../composables/useModifiers.js";
import { preventScroll as ee, wasClickOutside as le } from "@ulu/utils/browser/dom.js";
import { Resizer as oe, observeDialogToggle as te } from "@ulu/frontend";
import { newId as se } from "../../utils/dom.js";
const ne = ["aria-labelledby", "aria-describedby"], ie = ["id"], re = { class: "modal__title-text" }, ve = {
  __name: "UluModal",
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
      default: () => ({
        close: "button button--icon"
      })
    },
    /**
     * Modifiers (to add any modifier classes based on base class [ie. 'tertiary'])
     */
    modifiers: [String, Array],
    /**
     * If true, modal is forced to fullscreen on mobile viewports
     */
    fullscreenMobile: Boolean
  },
  emits: ["update:modelValue", "close", "open"],
  setup(t, { emit: H }) {
    const r = H, e = t, j = q(), D = p(null), I = se("ulu-modal-title"), g = p(!1), o = p(null), R = p(null), E = a(() => e.title || j.title), f = a(() => {
      const { allowResize: l, position: s } = e;
      if (!l || !s) return !1;
      const $ = ["left", "right", "center"];
      return $.includes(s) ? !0 : (console.warn(`Passed invalid position for resize (${s}), use ${$.join(", ")}`), !1);
    }), N = a(() => e.position === "center" ? "type:resizeBoth" : "type:resizeHorizontal"), P = a(() => ({
      [e.position]: e.position,
      resize: e.allowResize,
      "no-resize": !e.allowResize,
      "no-header": !E.value,
      "body-fills": e.bodyFills,
      "no-backdrop": e.noBackdrop,
      "no-min-height": e.noMinHeight,
      "non-modal": e.nonModal,
      "resizer-active": f.value,
      "fullscreen-mobile": e.fullscreenMobile
    })), { resolvedModifiers: F } = x({
      props: e,
      baseClass: "modal",
      internal: P
    }), U = a(() => e.labelledby ? e.labelledby : I), n = () => {
      r("update:modelValue", !1), r("close");
    }, X = () => {
      e.modelValue && (r("update:modelValue", !1), r("close"));
    }, A = (l) => {
      if (e.clickOutsideCloses && !g.value) {
        const { target: s } = l;
        s === o.value && le(o.value, l) && n();
      }
    };
    let m = null, v = null, b = null, y = null, z = null;
    const W = () => {
      !e.nonModal && e.preventScroll && (m = te(o.value, (l) => {
        l ? v = ee({ preventShift: e.preventScrollShift }) : V();
      }));
    }, Y = () => {
      m && (m.destroy(), m = null);
    }, V = () => {
      v && (v(), v = null);
    }, S = () => {
      if (f.value) {
        const l = e.position === "center" ? { fromX: "right", fromY: "bottom", multiplier: 2 } : { fromX: e.position === "right" ? "left" : "right" };
        b = new oe(o.value, R.value, l), y = () => {
          g.value = !0;
        }, z = () => {
          setTimeout(() => {
            g.value = !1;
          }, 0);
        }, o.value.addEventListener("ulu:resizer:start", y), o.value.addEventListener("ulu:resizer:end", z);
      }
    }, k = () => {
      b && (b.destroy(), b = null), y && o.value && o.value.removeEventListener("ulu:resizer:start", y), z && o.value && o.value.removeEventListener("ulu:resizer:end", z);
    };
    return B(() => e.modelValue, (l) => {
      M(() => {
        o.value && (l ? (o.value[e.nonModal ? "show" : "showModal"](), r("open")) : o.value.close());
      });
    }, { immediate: !0 }), B(f, (l) => {
      l ? M(() => {
        S();
      }) : k();
    }, { immediate: !1 }), B(() => e.position, (l, s) => {
      l !== s && (k(), M(() => {
        S();
      }));
    }), G(() => {
      W(), S();
    }), J(() => {
      o.value && o.value.open && o.value.close(), Y(), V(), k();
    }), (l, s) => (c(), O(K, {
      to: t.teleport === !1 ? null : t.teleport,
      disabled: t.teleport === !1
    }, [
      d("dialog", {
        class: i(["modal", [T(F), t.classes.container]]),
        "aria-labelledby": U.value,
        "aria-describedby": t.describedby,
        ref_key: "container",
        ref: o,
        style: Z({ width: D.value }),
        onCancel: Q(n, ["prevent"]),
        onClose: X,
        onClick: A
      }, [
        E.value ? (c(), w("header", {
          key: 0,
          class: i(["modal__header", t.classes.header])
        }, [
          d("h2", {
            class: i(["modal__title", t.classes.title]),
            id: T(I)
          }, [
            u(l.$slots, "title", { close: n }, () => [
              t.titleIcon ? (c(), O(C, {
                key: 0,
                class: "modal__title-icon",
                icon: t.titleIcon
              }, null, 8, ["icon"])) : h("", !0),
              d("span", re, _(t.title), 1)
            ])
          ], 10, ie),
          d("button", {
            class: i(["modal__close", t.classes.close]),
            "aria-label": "Close modal",
            onClick: n,
            autofocus: ""
          }, [
            u(l.$slots, "closeIcon", {}, () => [
              L(C, {
                class: "modal__close-icon",
                icon: t.closeIcon || "type:close"
              }, null, 8, ["icon"])
            ])
          ], 2)
        ], 2)) : h("", !0),
        d("div", {
          class: i(["modal__body", t.classes.body])
        }, [
          u(l.$slots, "default", { close: n })
        ], 2),
        l.$slots.footer ? (c(), w("div", {
          key: 1,
          class: i(["site-modal__footer", t.classes.footer])
        }, [
          u(l.$slots, "footer", { close: n })
        ], 2)) : h("", !0),
        f.value ? (c(), w("button", {
          key: 2,
          class: "modal__resizer",
          ref_key: "resizer",
          ref: R,
          type: "button"
        }, [
          u(l.$slots, "resizerIcon", {}, () => [
            L(C, {
              class: "modal__resizer-icon",
              icon: t.resizerIcon || N.value
            }, null, 8, ["icon"])
          ])
        ], 512)) : h("", !0)
      ], 46, ne)
    ], 8, ["to", "disabled"]));
  }
};
export {
  ve as default
};
