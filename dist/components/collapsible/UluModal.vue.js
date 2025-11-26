import { resolveComponent as v, createBlock as b, openBlock as a, Teleport as S, createElementVNode as d, withModifiers as R, normalizeStyle as _, normalizeClass as c, createElementBlock as z, createCommentVNode as u, renderSlot as h, toDisplayString as I, createVNode as g, useSlots as k, computed as f } from "vue";
import C from "../elements/UluIcon.vue.js";
import { useModifiers as w } from "../../composables/useModifiers.js";
import { preventScroll as E, wasClickOutside as B } from "@ulu/utils/browser/dom.js";
import { Resizer as M } from "@ulu/frontend";
import { newId as V } from "../../utils/dom.js";
import p from "../../_virtual/_plugin-vue_export-helper.js";
const T = {
  name: "UluModal",
  components: {
    UluIcon: C
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
    return {
      containerWidth: null,
      titleId: V("ulu-modal-title"),
      bodyOverflowValue: null,
      bodyPaddingRightValue: null,
      isResizing: !1
    };
  },
  setup(e) {
    const t = k(), l = f(() => e.title || t.title), o = f(() => {
      const { allowResize: i, position: m } = e;
      if (!i || !m) return;
      const y = ["left", "right", "center"];
      return y.includes(m) ? !0 : (console.warn(`Passed invalid position for resize (${m}), use ${y.join(", ")}`), !1);
    }), n = f(() => e.position === "center" ? "type:resizeBoth" : "type:resizeHorizontal"), s = f(() => ({
      [e.position]: e.position,
      resize: e.allowResize,
      "no-resize": !e.allowResize,
      "no-header": !l.value,
      "body-fills": e.bodyFills,
      "no-backdrop": e.noBackdrop,
      "no-min-height": e.noMinHeight,
      "non-modal": e.nonModal,
      "resizer-active": o.value
    })), { resolvedModifiers: r } = w({
      props: e,
      baseClass: "modal",
      internal: s
    });
    return {
      resolvedModifiers: r,
      hasHeader: l,
      resizerEnabled: o,
      resizerIconType: n
    };
  },
  computed: {
    resolvedLabelledby() {
      const { labelledby: e, titleId: t } = this;
      return e || t;
    }
  },
  watch: {
    modelValue: {
      // So that it runs on mount (if modelValue is initially true)
      immediate: !0,
      handler(e) {
        this.$nextTick(() => {
          const { container: t } = this.$refs;
          e ? (t[this.nonModal ? "show" : "showModal"](), this.$emit("open")) : t.close();
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
    position(e, t) {
      e !== t && (this.destroyResizer(), this.$nextTick(() => {
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
        const { target: t } = e, { container: l } = this.$refs;
        t === l && B(l, e) && this.close();
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
        const { preventScrollShift: t } = this;
        e.newState === "open" ? this.restoreScroll = E({ preventShift: t }) : this.destroyPreventScroll();
      }
    },
    setupResizer() {
      const { position: e, resizerEnabled: t } = this;
      if (t) {
        const { container: l, resizer: o } = this.$refs, n = e === "center" ? { fromX: "right", fromY: "bottom", multiplier: 2 } : { fromX: e === "right" ? "left" : "right" };
        this.resizerInstance = new M(l, o, n), this.handleResizerStart = () => {
          this.isResizing = !0;
        }, this.handleResizerEnd = () => {
          setTimeout(() => {
            this.isResizing = !1;
          }, 0);
        }, l.addEventListener("ulu:resizer:start", this.handleResizerStart), l.addEventListener("ulu:resizer:end", this.handleResizerEnd);
      }
    },
    destroyResizer() {
      const { container: e } = this.$refs;
      this.resizerInstance && (this.resizerInstance.destroy(), this.resizerInstance = null), this.handleResizerStart && e.removeEventListener("ulu:resizer:start", this.handleResizerStart), this.handleResizerEnd && e.removeEventListener("ulu:resizer:end", this.handleResizerEnd);
    }
  },
  mounted() {
    this.preventScroll && this.setupPreventScroll(), this.setupResizer();
  },
  beforeUnmount() {
    const { container: e } = this.$refs;
    e && e.open && e.close(), this.destroyPreventScroll(), this.destroyResizer();
  }
}, O = ["aria-labelledby", "aria-describedby"], P = ["id"], L = { class: "modal__title-text" }, U = {
  key: 2,
  class: "modal__resizer",
  ref: "resizer",
  type: "button"
};
function H(e, t, l, o, n, s) {
  const r = v("UluIcon");
  return a(), b(S, {
    to: l.teleport === !1 ? null : l.teleport,
    disabled: l.teleport === !1
  }, [
    d("dialog", {
      class: c(["modal", [o.resolvedModifiers, l.classes.container]]),
      "aria-labelledby": s.resolvedLabelledby,
      "aria-describedby": l.describedby,
      ref: "container",
      style: _({ width: n.containerWidth }),
      onCancel: t[1] || (t[1] = R((...i) => s.close && s.close(...i), ["prevent"])),
      onClose: t[2] || (t[2] = (...i) => s.handleDialogCloseEvent && s.handleDialogCloseEvent(...i)),
      onClick: t[3] || (t[3] = (...i) => s.handleClick && s.handleClick(...i)),
      onToggle: t[4] || (t[4] = (...i) => s.handleToggle && s.handleToggle(...i))
    }, [
      o.hasHeader ? (a(), z("header", {
        key: 0,
        class: c(["modal__header", l.classes.header])
      }, [
        d("h2", {
          class: c(["modal__title", l.classes.title]),
          id: n.titleId
        }, [
          h(e.$slots, "title", { close: s.close }, () => [
            l.titleIcon ? (a(), b(r, {
              key: 0,
              class: "modal__title-icon",
              icon: l.titleIcon
            }, null, 8, ["icon"])) : u("", !0),
            d("span", L, I(l.title), 1)
          ])
        ], 10, P),
        d("button", {
          class: "modal__close",
          "aria-label": "Close modal",
          onClick: t[0] || (t[0] = (...i) => s.close && s.close(...i)),
          autofocus: ""
        }, [
          h(e.$slots, "closeIcon", {}, () => [
            g(r, {
              class: "modal__close-icon",
              icon: l.closeIcon || "type:close"
            }, null, 8, ["icon"])
          ])
        ])
      ], 2)) : u("", !0),
      d("div", {
        class: c(["modal__body", l.classes.body])
      }, [
        h(e.$slots, "default", { close: s.close })
      ], 2),
      e.$slots.footer ? (a(), z("div", {
        key: 1,
        class: c(["site-modal__footer", l.classes.footer])
      }, [
        h(e.$slots, "footer", { close: s.close })
      ], 2)) : u("", !0),
      o.resizerEnabled ? (a(), z("button", U, [
        h(e.$slots, "resizerIcon", {}, () => [
          g(r, {
            class: "modal__resizer-icon",
            icon: l.resizerIcon || o.resizerIconType
          }, null, 8, ["icon"])
        ])
      ], 512)) : u("", !0)
    ], 46, O)
  ], 8, ["to", "disabled"]);
}
const A = /* @__PURE__ */ p(T, [["render", H]]);
export {
  A as default
};
