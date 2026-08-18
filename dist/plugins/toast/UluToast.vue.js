import { computed as f, createElementBlock as a, openBlock as s, normalizeClass as e, createCommentVNode as n, createElementVNode as r, renderSlot as m, createBlock as B, toDisplayString as d, Fragment as g, renderList as S, createVNode as h, nextTick as E } from "vue";
import v from "../../components/elements/UluIcon.vue.js";
import { mergeClassLookups as L } from "../../utils/props.js";
const $ = ["onClick"], T = {
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
      type: [Object, Boolean, Function],
      default: () => ({})
    }
  },
  setup(t) {
    const k = {
      content: "type-small",
      date: "type-small-x",
      actions: "type-small-x",
      action: "button button--small button--outline",
      closeButton: "button button--icon button--transparent"
    }, i = t, o = f(() => L(
      k,
      i.classes,
      i.toast?.classes
    )), y = (l, c) => {
      i.toast.close(), E(() => {
        c(l, i.toast, c);
      });
    };
    return (l, c) => (s(), a("div", {
      class: e(["toast", [
        {
          "toast--persistent": !t.toast.duration
        },
        t.toast?.class
      ]])
    }, [
      t.toast.icon || l.$slots.icon ? (s(), a("div", {
        key: 0,
        class: e(["toast__icon", o.value.icon])
      }, [
        m(l.$slots, "icon", { toast: t.toast }, () => [
          t.toast.icon ? (s(), B(v, {
            key: 0,
            icon: t.toast.icon
          }, null, 8, ["icon"])) : n("", !0)
        ])
      ], 2)) : n("", !0),
      r("div", {
        class: e(["toast__content", o.value.content])
      }, [
        m(l.$slots, "content", { toast: t.toast }, () => [
          t.toast.title ? (s(), a("div", {
            key: 0,
            class: e(["toast__header", o.value.header])
          }, [
            r("strong", {
              class: e(["toast__title", o.value.title])
            }, d(t.toast.title), 3),
            t.toast.date ? (s(), a("span", {
              key: 0,
              class: e(["toast__date", o.value.date])
            }, d(t.toast.date), 3)) : n("", !0)
          ], 2)) : n("", !0),
          t.toast.description ? (s(), a("div", {
            key: 1,
            class: e(["toast__body", o.value.body])
          }, d(t.toast.description), 3)) : n("", !0)
        ])
      ], 2),
      t.toast.actions?.length ? (s(), a("div", {
        key: 1,
        class: e(["toast__actions", o.value.actions])
      }, [
        (s(!0), a(g, null, S(t.toast.actions, (u, b) => (s(), a("button", {
          key: b,
          class: e(["toast__action", o.value.action]),
          onClick: (C) => y(C, u)
        }, d(u.label), 11, $))), 128))
      ], 2)) : n("", !0),
      r("button", {
        class: e(["toast__close", o.value.closeButton]),
        onClick: c[0] || (c[0] = (...u) => t.toast.close && t.toast.close(...u))
      }, [
        h(v, { icon: "type:close" })
      ], 2)
    ], 2));
  }
};
export {
  T as default
};
