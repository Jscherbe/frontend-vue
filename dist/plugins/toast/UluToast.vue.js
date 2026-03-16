import { createElementBlock as a, openBlock as e, normalizeClass as s, createCommentVNode as o, createElementVNode as u, renderSlot as m, createBlock as f, toDisplayString as i, Fragment as v, renderList as B, createVNode as C, nextTick as g } from "vue";
import r from "../../components/elements/UluIcon.vue.js";
const h = ["onClick"], V = {
  __name: "UluToast",
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
  setup(t) {
    const d = t, y = (n, c) => {
      d.toast.close(), g(() => {
        c(n, d.toast, c);
      });
    };
    return (n, c) => (e(), a("div", {
      class: s(["toast", [
        {
          "toast--persistent": !t.toast.duration
        },
        t.toast?.class
      ]])
    }, [
      t.toast.icon || n.$slots.icon ? (e(), a("div", {
        key: 0,
        class: s(["toast__icon", t.classes.icon])
      }, [
        m(n.$slots, "icon", { toast: t.toast }, () => [
          t.toast.icon ? (e(), f(r, {
            key: 0,
            icon: t.toast.icon
          }, null, 8, ["icon"])) : o("", !0)
        ])
      ], 2)) : o("", !0),
      u("div", {
        class: s(["toast__content", t.classes.content])
      }, [
        m(n.$slots, "content", { toast: t.toast }, () => [
          t.toast.title ? (e(), a("div", {
            key: 0,
            class: s(["toast__header", t.classes.header])
          }, [
            u("strong", {
              class: s(["toast__title", t.classes.title])
            }, i(t.toast.title), 3),
            t.toast.date ? (e(), a("span", {
              key: 0,
              class: s(["toast__date", t.classes.date])
            }, i(t.toast.date), 3)) : o("", !0)
          ], 2)) : o("", !0),
          t.toast.description ? (e(), a("div", {
            key: 1,
            class: s(["toast__body", t.classes.body])
          }, i(t.toast.description), 3)) : o("", !0)
        ])
      ], 2),
      t.toast.actions?.length ? (e(), a("div", {
        key: 1,
        class: s(["toast__actions", t.classes.actions])
      }, [
        (e(!0), a(v, null, B(t.toast.actions, (l, k) => (e(), a("button", {
          key: k,
          class: s(["toast__action", t.classes.action]),
          onClick: (b) => y(b, l)
        }, i(l.label), 11, h))), 128))
      ], 2)) : o("", !0),
      u("button", {
        class: s(["toast__close", t.classes.closeButton]),
        onClick: c[0] || (c[0] = (...l) => t.toast.close && t.toast.close(...l))
      }, [
        C(r, { icon: "type:close" })
      ], 2)
    ], 2));
  }
};
export {
  V as default
};
