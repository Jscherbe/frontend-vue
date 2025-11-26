import { computed as r, createElementBlock as s, openBlock as u, normalizeClass as V, createCommentVNode as p, createElementVNode as c, toDisplayString as g, Fragment as b, renderList as _, renderSlot as x, createTextVNode as C } from "vue";
const S = ["role", "aria-labelledby"], A = ["id"], $ = { class: "menu-stack__list" }, B = { class: "menu-stack__selectable" }, I = ["type", "id", "name", "value", "checked", "onChange"], N = ["for"], E = {
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
  setup(a, { emit: y }) {
    const t = a, i = y, d = r(() => t.legend ? t.legend.toLowerCase().replace(/\s+/g, "-") : `menu-${Math.random().toString(36).substring(7)}`), o = r(() => d.value ? `${d.value}-legend` : null), k = r(() => t.type === "radio" ? "radiogroup" : "group"), m = (l) => `${d.value}-${l.uid}`, f = (l) => t.type === "radio" ? t.modelValue === l.uid : Array.isArray(t.modelValue) ? t.modelValue.includes(l.uid) : t.type === "checkbox" && l.checked || !1, v = (l, h) => {
      if (t.type === "radio")
        i("update:modelValue", l.uid);
      else if (Array.isArray(t.modelValue)) {
        const e = [...t.modelValue], n = e.indexOf(l.uid);
        n > -1 ? e.splice(n, 1) : e.push(l.uid), i("update:modelValue", e);
      } else
        l.checked = h.target.checked;
    };
    return (l, h) => (u(), s("div", {
      class: V(["menu-stack form-theme", {
        "menu-stack--hide-inputs": a.hideInputs,
        "menu-stack--compact": a.compact
      }]),
      role: k.value,
      "aria-labelledby": o.value
    }, [
      a.legend ? (u(), s("div", {
        key: 0,
        id: o.value,
        class: "hidden-visually"
      }, g(a.legend), 9, A)) : p("", !0),
      c("ul", $, [
        (u(!0), s(b, null, _(a.options, (e) => (u(), s("li", {
          class: "menu-stack__item",
          key: e.uid
        }, [
          c("div", B, [
            c("input", {
              type: a.type,
              id: m(e),
              name: d.value,
              value: e.uid,
              checked: f(e),
              onChange: (n) => v(e, n)
            }, null, 40, I),
            c("label", {
              for: m(e)
            }, [
              x(l.$slots, "default", { option: e }, () => [
                C(g(e?.label || e?.title || e?.text), 1)
              ])
            ], 8, N)
          ])
        ]))), 128))
      ])
    ], 10, S));
  }
};
export {
  E as default
};
