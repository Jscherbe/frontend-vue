import { useSlots as I, computed as i, provide as q, createElementBlock as H, openBlock as o, normalizeClass as p, unref as A, createBlock as d, createCommentVNode as u, renderSlot as t, withCtx as g, createTextVNode as c, toDisplayString as f } from "vue";
import { newId as C } from "../../utils/dom.js";
import { useModifiers as F } from "../../composables/useModifiers.js";
import m from "./UluFormMessage.vue.js";
import h from "./UluFormLabel.vue.js";
const j = {
  __name: "UluFormItem",
  props: {
    /**
     * The layout variant for this form item (e.g., 'text', 'select', 'textarea', 'checkbox', 'radio', 'file').
     * This determines the layout and BEM styling of the item container.
     */
    layout: String,
    /**
     * The ID to use for the form field. If not provided, a unique ID is generated.
     */
    fieldId: String,
    /**
     * The label for the form field.
     */
    label: String,
    /**
     * If true, the label will be visually hidden.
     */
    labelHidden: Boolean,
    /**
     * The description text for the form field.
     */
    description: String,
    /**
     * The error message text.
     */
    errorMessage: String,
    /**
     * The warning message text.
     */
    warningMessage: String,
    /**
     * If true, the field will be marked as required.
     */
    required: Boolean,
    /**
     * If true, applies the error state styles.
     */
    error: Boolean,
    /**
     * If true, applies the warning state styles.
     */
    warning: Boolean,
    /**
     * If true, aligns the item to the top.
     */
    alignTop: Boolean,
    /**
     * Additional BEM modifiers for the form item.
     */
    modifiers: [String, Array]
  },
  setup(r) {
    const e = r, s = I(), { resolvedModifiers: S } = F({
      props: e,
      baseClass: "form-theme__item",
      internal: i(() => ({
        [e.layout]: e.layout,
        "align-top": e.alignTop
      }))
    }), l = i(() => e.fieldId || C()), v = i(() => `${l.value}-desc`), b = i(() => `${l.value}-error`), M = i(() => `${l.value}-warn`), w = i(() => !!e.label || !!s.label), $ = i(() => e.error || !!e.errorMessage || !!s.errorMessage), k = i(() => e.warning || !!e.warningMessage || !!s.warningMessage), y = i(() => ["checkbox", "radio"].includes(e.layout)), B = i(() => {
      const a = {
        id: l.value
      }, n = [];
      return (e.description || s.description) && n.push(v.value), (e.errorMessage || s.errorMessage) && n.push(b.value), (e.warningMessage || s.warningMessage) && n.push(M.value), n.length > 0 && (a["aria-describedby"] = n.join(" ")), $.value && (a["aria-invalid"] = "true"), a;
    });
    return q("uluFormFieldAttrs", B), (a, n) => (o(), H("div", {
      class: p(["form-theme__item", [
        A(S),
        {
          "is-danger": $.value,
          "is-warning": k.value
        }
      ]])
    }, [
      !y.value && w.value ? (o(), d(h, {
        key: 0,
        id: l.value,
        labelHidden: r.labelHidden,
        required: r.required
      }, {
        default: g(() => [
          t(a.$slots, "label", {}, () => [
            c(f(r.label), 1)
          ])
        ]),
        _: 3
      }, 8, ["id", "labelHidden", "required"])) : u("", !0),
      t(a.$slots, "default"),
      y.value && w.value ? (o(), d(h, {
        key: 1,
        id: l.value,
        labelHidden: r.labelHidden,
        required: r.required
      }, {
        default: g(() => [
          t(a.$slots, "label", {}, () => [
            c(f(r.label), 1)
          ])
        ]),
        _: 3
      }, 8, ["id", "labelHidden", "required"])) : u("", !0),
      r.description || a.$slots.description ? (o(), d(m, {
        key: 2,
        id: v.value
      }, {
        default: g(() => [
          t(a.$slots, "description", {}, () => [
            c(f(r.description), 1)
          ])
        ]),
        _: 3
      }, 8, ["id"])) : u("", !0),
      r.errorMessage || a.$slots.errorMessage ? (o(), d(m, {
        key: 3,
        id: b.value,
        error: ""
      }, {
        default: g(() => [
          t(a.$slots, "errorMessage", {}, () => [
            c(f(r.errorMessage), 1)
          ])
        ]),
        _: 3
      }, 8, ["id"])) : u("", !0),
      r.warningMessage || a.$slots.warningMessage ? (o(), d(m, {
        key: 4,
        id: M.value,
        warning: ""
      }, {
        default: g(() => [
          t(a.$slots, "warningMessage", {}, () => [
            c(f(r.warningMessage), 1)
          ])
        ]),
        _: 3
      }, 8, ["id"])) : u("", !0)
    ], 2));
  }
};
export {
  j as default
};
