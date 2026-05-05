import { computed as d, createElementBlock as p, openBlock as m, withModifiers as c, createElementVNode as t, toDisplayString as f, renderSlot as h, createVNode as _, mergeProps as b } from "vue";
import { newId as g } from "../../utils/dom.js";
import S from "../elements/UluButton.vue.js";
const y = { class: "input-group input-group--joined" }, v = { class: "input-group__item input-group__item--field" }, V = ["for"], B = ["id", "placeholder", "value"], k = { class: "input-group__item" }, $ = {
  __name: "UluSearchForm",
  props: {
    /**
     * The search input value (for v-model).
     */
    modelValue: {
      type: String,
      default: ""
    },
    /**
     * The placeholder text for the search input.
     */
    placeholder: {
      type: String,
      default: "Titles, keyword…"
    },
    /**
     * The visually hidden label for the search input.
     */
    label: {
      type: String,
      default: "Search"
    },
    /**
     * Props to pass to the default UluButton component (used for submit button)
     * - Alternately use 'submit' slot
     */
    submitButtonProps: {
      type: Object,
      default: () => ({
        type: "submit",
        primary: !0,
        icon: "type:search",
        ariaLabel: "Submit Search"
      })
    },
    /**
     * Optional ID for the input element. If not provided, a unique ID is generated.
     */
    id: String
  },
  emits: ["update:modelValue", "submit"],
  setup(e, { emit: r }) {
    const o = e, a = r, i = d(() => o.id || g()), s = () => {
      a("submit", o.modelValue);
    };
    return (l, u) => (m(), p("form", {
      class: "form-theme",
      onSubmit: c(s, ["prevent"])
    }, [
      t("div", y, [
        t("div", v, [
          t("label", {
            for: i.value,
            class: "hidden-visually"
          }, f(e.label), 9, V),
          t("input", {
            type: "search",
            id: i.value,
            class: "input-group__input",
            placeholder: e.placeholder,
            value: e.modelValue,
            onInput: u[0] || (u[0] = (n) => l.$emit("update:modelValue", n.target.value))
          }, null, 40, B)
        ]),
        t("div", k, [
          h(l.$slots, "submit", {}, () => [
            _(S, b({ class: "input-group__button" }, e.submitButtonProps), null, 16)
          ])
        ])
      ])
    ], 32));
  }
};
export {
  $ as default
};
