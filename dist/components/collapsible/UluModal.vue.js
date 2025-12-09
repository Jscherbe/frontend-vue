import { resolveComponent as v, createBlock as b, openBlock as d, Teleport as S, createElementVNode as c, withModifiers as R, normalizeStyle as _, normalizeClass as r, createElementBlock as z, createCommentVNode as u, renderSlot as h, toDisplayString as I, createVNode as g, useSlots as k, computed as f } from "vue";
import C from "../elements/UluIcon.vue.js";
import { useModifiers as w } from "../../composables/useModifiers.js";
import { preventScroll as E, wasClickOutside as B } from "@ulu/utils/browser/dom.js";
import { Resizer as M } from "@ulu/frontend";
import { newId as V } from "../../utils/dom.js";
import T from "../../_virtual/_plugin-vue_export-helper.js";
const p = {
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
      default: () => ({
        close: "button button--icon"
      })
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
    const l = k(), t = f(() => e.title || l.title), o = f(() => {
      const { allowResize: i, position: m } = e;
      if (!i || !m) return;
      const y = ["left", "right", "center"];
      return y.includes(m) ? !0 : (console.warn(`Passed invalid position for resize (${m}), use ${y.join(", ")}`), !1);
    }), n = f(() => e.position === "center" ? "type:resizeBoth" : "type:resizeHorizontal"), s = f(() => ({
      [e.position]: e.position,
      resize: e.allowResize,
      "no-resize": !e.allowResize,
      "no-header": !t.value,
      "body-fills": e.bodyFills,
      "no-backdrop": e.noBackdrop,
      "no-min-height": e.noMinHeight,
      "non-modal": e.nonModal,
      "resizer-active": o.value
    })), { resolvedModifiers: a } = w({
      props: e,
      baseClass: "modal",
      internal: s
    });
    return {
      resolvedModifiers: a,
      hasHeader: t,
      resizerEnabled: o,
      resizerIconType: n
    };
  },
  computed: {
    resolvedLabelledby() {
      const { labelledby: e, titleId: l } = this;
      return e || l;
    }
  },
  watch: {
    modelValue: {
      // So that it runs on mount (if modelValue is initially true)
      immediate: !0,
      handler(e) {
        this.$nextTick(() => {
          const { container: l } = this.$refs;
          e ? (l[this.nonModal ? "show" : "showModal"](), this.$emit("open")) : l.close();
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
    position(e, l) {
      e !== l && (this.destroyResizer(), this.$nextTick(() => {
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
        const { target: l } = e, { container: t } = this.$refs;
        l === t && B(t, e) && this.close();
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
        const { preventScrollShift: l } = this;
        e.newState === "open" ? this.restoreScroll = E({ preventShift: l }) : this.destroyPreventScroll();
      }
    },
    setupResizer() {
      const { position: e, resizerEnabled: l } = this;
      if (l) {
        const { container: t, resizer: o } = this.$refs, n = e === "center" ? { fromX: "right", fromY: "bottom", multiplier: 2 } : { fromX: e === "right" ? "left" : "right" };
        this.resizerInstance = new M(t, o, n), this.handleResizerStart = () => {
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
function H(e, l, t, o, n, s) {
  const a = v("UluIcon");
  return d(), b(S, {
    to: t.teleport === !1 ? null : t.teleport,
    disabled: t.teleport === !1
  }, [
    c("dialog", {
      class: r(["modal", [o.resolvedModifiers, t.classes.container]]),
      "aria-labelledby": s.resolvedLabelledby,
      "aria-describedby": t.describedby,
      ref: "container",
      style: _({ width: n.containerWidth }),
      onCancel: l[1] || (l[1] = R((...i) => s.close && s.close(...i), ["prevent"])),
      onClose: l[2] || (l[2] = (...i) => s.handleDialogCloseEvent && s.handleDialogCloseEvent(...i)),
      onClick: l[3] || (l[3] = (...i) => s.handleClick && s.handleClick(...i)),
      onToggle: l[4] || (l[4] = (...i) => s.handleToggle && s.handleToggle(...i))
    }, [
      o.hasHeader ? (d(), z("header", {
        key: 0,
        class: r(["modal__header", t.classes.header])
      }, [
        c("h2", {
          class: r(["modal__title", t.classes.title]),
          id: n.titleId
        }, [
          h(e.$slots, "title", { close: s.close }, () => [
            t.titleIcon ? (d(), b(a, {
              key: 0,
              class: "modal__title-icon",
              icon: t.titleIcon
            }, null, 8, ["icon"])) : u("", !0),
            c("span", L, I(t.title), 1)
          ])
        ], 10, P),
        c("button", {
          class: r(["modal__close", t.classes.close]),
          "aria-label": "Close modal",
          onClick: l[0] || (l[0] = (...i) => s.close && s.close(...i)),
          autofocus: ""
        }, [
          h(e.$slots, "closeIcon", {}, () => [
            g(a, {
              class: "modal__close-icon",
              icon: t.closeIcon || "type:close"
            }, null, 8, ["icon"])
          ])
        ], 2)
      ], 2)) : u("", !0),
      c("div", {
        class: r(["modal__body", t.classes.body])
      }, [
        h(e.$slots, "default", { close: s.close })
      ], 2),
      e.$slots.footer ? (d(), z("div", {
        key: 1,
        class: r(["site-modal__footer", t.classes.footer])
      }, [
        h(e.$slots, "footer", { close: s.close })
      ], 2)) : u("", !0),
      o.resizerEnabled ? (d(), z("button", U, [
        h(e.$slots, "resizerIcon", {}, () => [
          g(a, {
            class: "modal__resizer-icon",
            icon: t.resizerIcon || o.resizerIconType
          }, null, 8, ["icon"])
        ])
      ], 512)) : u("", !0)
    ], 46, O)
  ], 8, ["to", "disabled"]);
}
const A = /* @__PURE__ */ T(p, [["render", H]]);
export {
  A as default
};
