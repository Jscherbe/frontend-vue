import { useSlots as G, ref as n, computed as c, watch as M, nextTick as w, onMounted as J, onBeforeUnmount as K, createBlock as F, openBlock as u, Teleport as Q, createElementVNode as d, mergeProps as Z, unref as H, withModifiers as x, createElementBlock as C, createCommentVNode as g, normalizeClass as f, renderSlot as m, toDisplayString as ee, createVNode as L, normalizeStyle as le } from "vue";
import R from "../elements/UluIcon.vue.js";
import { useModifiers as oe } from "../../composables/useModifiers.js";
import { preventScroll as te, wasClickOutside as se } from "@ulu/utils/browser/dom.js";
import { getSoleIframeLayout as ie, youtubePrepVideos as ae, youtubePauseVideos as ne, Resizer as re, observeDialogToggle as ce } from "@ulu/frontend";
import { newId as ue } from "../../utils/dom.js";
const de = ["aria-labelledby", "aria-describedby"], fe = ["id"], me = { class: "modal__title-text" }, he = {
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
     * Use fullscreen layout
     */
    fullscreen: Boolean,
    /**
     * If true, modal is forced to fullscreen on mobile viewports
     */
    fullscreenMobile: Boolean,
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
    modifiers: [String, Array, Object],
    /**
     * Opt-in convenience behavior. If the modal body's sole content is an iframe, it automatically applies layout fixes.
     */
    autoIframe: Boolean,
    /**
     * Opt-out behavior to prevent pausing videos (YouTube and native <video>) when the modal closes.
     */
    noPauseVideos: Boolean
  },
  emits: ["update:modelValue", "close", "open"],
  setup(t, { emit: T }) {
    const r = T, e = t, j = G(), D = n(null), E = ue("ulu-modal-title"), B = n(!1), o = n(null), $ = n(null), k = n(null), i = n({
      isStaticSize: !1,
      isFill: !1,
      bodyStyle: {}
    }), O = c(() => e.title || j.title), v = c(() => {
      const { allowResize: l, position: s } = e;
      if (!l || !s) return !1;
      const h = ["left", "right", "center"];
      return h.includes(s) ? !0 : (console.warn(`Passed invalid position for resize (${s}), use ${h.join(", ")}`), !1);
    }), N = c(() => e.position === "center" ? "type:resizeBoth" : "type:resizeHorizontal"), A = c(() => ({
      [e.position]: e.position,
      resize: e.allowResize,
      "no-resize": !e.allowResize,
      "no-header": !O.value,
      "body-fills": e.bodyFills,
      "no-backdrop": e.noBackdrop,
      "no-min-height": e.noMinHeight,
      "non-modal": e.nonModal,
      "resizer-active": v.value,
      fullscreen: e.fullscreen,
      "fullscreen-mobile": e.fullscreenMobile,
      "frame-ratio": i.value.isStaticSize,
      "frame-fill": i.value.isFill
    })), { resolvedModifiers: U } = oe({
      props: e,
      baseClass: "modal",
      internal: A
    }), X = c(() => e.labelledby ? e.labelledby : E), a = () => {
      r("update:modelValue", !1), r("close");
    }, _ = () => {
      e.modelValue && (r("update:modelValue", !1), r("close"));
    }, q = (l) => {
      if (e.clickOutsideCloses && !B.value) {
        const { target: s } = l;
        s === o.value && se(o.value, l) && a();
      }
    };
    let y = null, b = null, S = null, z = null, p = null;
    const W = () => {
      !e.nonModal && e.preventScroll && (y = ce(o.value, (l) => {
        l ? b = te({ preventShift: e.preventScrollShift }) : P();
      }));
    }, Y = () => {
      y && (y.destroy(), y = null);
    }, P = () => {
      b && (b(), b = null);
    }, I = () => {
      if (v.value) {
        const l = e.position === "center" ? { fromX: "right", fromY: "bottom", multiplier: 2 } : { fromX: e.position === "right" ? "left" : "right" };
        S = new re(o.value, $.value, l), z = () => {
          B.value = !0;
        }, p = () => {
          setTimeout(() => {
            B.value = !1;
          }, 0);
        }, o.value.addEventListener("ulu:resizer:start", z), o.value.addEventListener("ulu:resizer:end", p);
      }
    }, V = () => {
      S && (S.destroy(), S = null), z && o.value && o.value.removeEventListener("ulu:resizer:start", z), p && o.value && o.value.removeEventListener("ulu:resizer:end", p);
    };
    return M(() => e.modelValue, (l) => {
      w(() => {
        if (o.value)
          if (l) {
            if (e.autoIframe && k.value) {
              const s = ie(k.value);
              s && (s.iframe.classList.add("modal__frame-content"), s.isStaticSize ? (i.value.isStaticSize = !0, i.value.isFill = !1, i.value.bodyStyle = { aspectRatio: s.aspectRatio }) : (i.value.isFill = !0, i.value.isStaticSize = !1, i.value.bodyStyle = s.fillHeight ? { minHeight: s.fillHeight } : {}));
            }
            e.noPauseVideos || ae(o.value), o.value[e.nonModal ? "show" : "showModal"](), r("open");
          } else
            e.noPauseVideos || (ne(o.value), o.value.querySelectorAll("video").forEach((h) => h.pause())), o.value.close(), i.value = { isStaticSize: !1, isFill: !1, bodyStyle: {} };
      });
    }, { immediate: !0 }), M(v, (l) => {
      l ? w(() => {
        I();
      }) : V();
    }, { immediate: !1 }), M(() => e.position, (l, s) => {
      l !== s && (V(), w(() => {
        I();
      }));
    }), J(() => {
      W(), I();
    }), K(() => {
      o.value && o.value.open && o.value.close(), Y(), P(), V();
    }), (l, s) => (u(), F(Q, {
      to: t.teleport === !1 ? null : t.teleport,
      disabled: t.teleport === !1
    }, [
      d("dialog", Z({
        class: ["modal", [H(U), t.classes.container]],
        "aria-labelledby": X.value,
        "aria-describedby": t.describedby,
        ref_key: "container",
        ref: o,
        style: { width: D.value }
      }, l.$attrs, {
        onCancel: x(a, ["prevent"]),
        onClose: _,
        onClick: q
      }), [
        O.value ? (u(), C("header", {
          key: 0,
          class: f(["modal__header", t.classes.header])
        }, [
          d("h2", {
            class: f(["modal__title", t.classes.title]),
            id: H(E)
          }, [
            m(l.$slots, "title", { close: a }, () => [
              t.titleIcon ? (u(), F(R, {
                key: 0,
                class: "modal__title-icon",
                icon: t.titleIcon
              }, null, 8, ["icon"])) : g("", !0),
              d("span", me, ee(t.title), 1)
            ])
          ], 10, fe),
          d("button", {
            class: f(["modal__close", t.classes.close]),
            "aria-label": "Close modal",
            onClick: a,
            autofocus: ""
          }, [
            m(l.$slots, "closeIcon", {}, () => [
              L(R, {
                class: "modal__close-icon",
                icon: t.closeIcon || "type:close"
              }, null, 8, ["icon"])
            ])
          ], 2)
        ], 2)) : g("", !0),
        d("div", {
          class: f(["modal__body", t.classes.body]),
          style: le(i.value.bodyStyle),
          ref_key: "body",
          ref: k
        }, [
          m(l.$slots, "default", { close: a })
        ], 6),
        l.$slots.footer ? (u(), C("div", {
          key: 1,
          class: f(["modal__footer", t.classes.footer])
        }, [
          m(l.$slots, "footer", { close: a })
        ], 2)) : g("", !0),
        v.value ? (u(), C("button", {
          key: 2,
          class: "modal__resizer",
          ref_key: "resizer",
          ref: $,
          type: "button"
        }, [
          m(l.$slots, "resizerIcon", {}, () => [
            L(R, {
              class: "modal__resizer-icon",
              icon: t.resizerIcon || N.value
            }, null, 8, ["icon"])
          ])
        ], 512)) : g("", !0)
      ], 16, de)
    ], 8, ["to", "disabled"]));
  }
};
export {
  he as default
};
