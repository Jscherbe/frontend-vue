import { useSlots as J, ref as n, computed as u, watch as M, nextTick as w, onMounted as K, onBeforeUnmount as Q, createBlock as H, openBlock as d, Teleport as Z, createElementVNode as f, withModifiers as x, normalizeStyle as L, normalizeClass as r, unref as T, createElementBlock as C, createCommentVNode as g, renderSlot as m, toDisplayString as ee, createVNode as P } from "vue";
import R from "../elements/UluIcon.vue.js";
import { useModifiers as le } from "../../composables/useModifiers.js";
import { preventScroll as oe, wasClickOutside as te } from "@ulu/utils/browser/dom.js";
import { getSoleIframeLayout as se, youtubePrepVideos as ie, youtubePauseVideos as ae, Resizer as ne, observeDialogToggle as re } from "@ulu/frontend";
import { newId as ce } from "../../utils/dom.js";
const ue = ["aria-labelledby", "aria-describedby"], de = ["id"], fe = { class: "modal__title-text" }, ze = {
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
    modifiers: [String, Array],
    /**
     * Opt-in convenience behavior. If the modal body's sole content is an iframe, it automatically applies layout fixes.
     */
    autoIframe: Boolean,
    /**
     * Opt-in behavior to pause playing videos (YouTube and native <video>) when the modal closes.
     */
    pauseVideos: Boolean
  },
  emits: ["update:modelValue", "close", "open"],
  setup(t, { emit: j }) {
    const c = j, e = t, D = J(), N = n(null), E = ce("ulu-modal-title"), B = n(!1), o = n(null), $ = n(null), k = n(null), i = n({
      isStaticSize: !1,
      isFill: !1,
      bodyStyle: {}
    }), O = u(() => e.title || D.title), v = u(() => {
      const { allowResize: l, position: s } = e;
      if (!l || !s) return !1;
      const h = ["left", "right", "center"];
      return h.includes(s) ? !0 : (console.warn(`Passed invalid position for resize (${s}), use ${h.join(", ")}`), !1);
    }), _ = u(() => e.position === "center" ? "type:resizeBoth" : "type:resizeHorizontal"), A = u(() => ({
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
    })), { resolvedModifiers: U } = le({
      props: e,
      baseClass: "modal",
      internal: A
    }), X = u(() => e.labelledby ? e.labelledby : E), a = () => {
      c("update:modelValue", !1), c("close");
    }, q = () => {
      e.modelValue && (c("update:modelValue", !1), c("close"));
    }, W = (l) => {
      if (e.clickOutsideCloses && !B.value) {
        const { target: s } = l;
        s === o.value && te(o.value, l) && a();
      }
    };
    let y = null, b = null, S = null, p = null, z = null;
    const Y = () => {
      !e.nonModal && e.preventScroll && (y = re(o.value, (l) => {
        l ? b = oe({ preventShift: e.preventScrollShift }) : F();
      }));
    }, G = () => {
      y && (y.destroy(), y = null);
    }, F = () => {
      b && (b(), b = null);
    }, I = () => {
      if (v.value) {
        const l = e.position === "center" ? { fromX: "right", fromY: "bottom", multiplier: 2 } : { fromX: e.position === "right" ? "left" : "right" };
        S = new ne(o.value, $.value, l), p = () => {
          B.value = !0;
        }, z = () => {
          setTimeout(() => {
            B.value = !1;
          }, 0);
        }, o.value.addEventListener("ulu:resizer:start", p), o.value.addEventListener("ulu:resizer:end", z);
      }
    }, V = () => {
      S && (S.destroy(), S = null), p && o.value && o.value.removeEventListener("ulu:resizer:start", p), z && o.value && o.value.removeEventListener("ulu:resizer:end", z);
    };
    return M(() => e.modelValue, (l) => {
      w(() => {
        if (o.value)
          if (l) {
            if (e.autoIframe && k.value) {
              const s = se(k.value);
              s && (s.iframe.classList.add("modal__frame-content"), s.isStaticSize ? (i.value.isStaticSize = !0, i.value.isFill = !1, i.value.bodyStyle = { aspectRatio: s.aspectRatio }) : (i.value.isFill = !0, i.value.isStaticSize = !1, i.value.bodyStyle = s.fillHeight ? { minHeight: s.fillHeight } : {}));
            }
            e.pauseVideos && ie(o.value), o.value[e.nonModal ? "show" : "showModal"](), c("open");
          } else
            e.pauseVideos && (ae(o.value), o.value.querySelectorAll("video").forEach((h) => h.pause())), o.value.close(), i.value = { isStaticSize: !1, isFill: !1, bodyStyle: {} };
      });
    }, { immediate: !0 }), M(v, (l) => {
      l ? w(() => {
        I();
      }) : V();
    }, { immediate: !1 }), M(() => e.position, (l, s) => {
      l !== s && (V(), w(() => {
        I();
      }));
    }), K(() => {
      Y(), I();
    }), Q(() => {
      o.value && o.value.open && o.value.close(), G(), F(), V();
    }), (l, s) => (d(), H(Z, {
      to: t.teleport === !1 ? null : t.teleport,
      disabled: t.teleport === !1
    }, [
      f("dialog", {
        class: r(["modal", [T(U), t.classes.container]]),
        "aria-labelledby": X.value,
        "aria-describedby": t.describedby,
        ref_key: "container",
        ref: o,
        style: L({ width: N.value }),
        onCancel: x(a, ["prevent"]),
        onClose: q,
        onClick: W
      }, [
        O.value ? (d(), C("header", {
          key: 0,
          class: r(["modal__header", t.classes.header])
        }, [
          f("h2", {
            class: r(["modal__title", t.classes.title]),
            id: T(E)
          }, [
            m(l.$slots, "title", { close: a }, () => [
              t.titleIcon ? (d(), H(R, {
                key: 0,
                class: "modal__title-icon",
                icon: t.titleIcon
              }, null, 8, ["icon"])) : g("", !0),
              f("span", fe, ee(t.title), 1)
            ])
          ], 10, de),
          f("button", {
            class: r(["modal__close", t.classes.close]),
            "aria-label": "Close modal",
            onClick: a,
            autofocus: ""
          }, [
            m(l.$slots, "closeIcon", {}, () => [
              P(R, {
                class: "modal__close-icon",
                icon: t.closeIcon || "type:close"
              }, null, 8, ["icon"])
            ])
          ], 2)
        ], 2)) : g("", !0),
        f("div", {
          class: r(["modal__body", t.classes.body]),
          style: L(i.value.bodyStyle),
          ref_key: "body",
          ref: k
        }, [
          m(l.$slots, "default", { close: a })
        ], 6),
        l.$slots.footer ? (d(), C("div", {
          key: 1,
          class: r(["site-modal__footer", t.classes.footer])
        }, [
          m(l.$slots, "footer", { close: a })
        ], 2)) : g("", !0),
        v.value ? (d(), C("button", {
          key: 2,
          class: "modal__resizer",
          ref_key: "resizer",
          ref: $,
          type: "button"
        }, [
          m(l.$slots, "resizerIcon", {}, () => [
            P(R, {
              class: "modal__resizer-icon",
              icon: t.resizerIcon || _.value
            }, null, 8, ["icon"])
          ])
        ], 512)) : g("", !0)
      ], 46, ue)
    ], 8, ["to", "disabled"]));
  }
};
export {
  ze as default
};
