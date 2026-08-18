import { computed as f, createElementBlock as a, openBlock as o, normalizeClass as e, createCommentVNode as n, createElementVNode as r, renderSlot as m, createBlock as B, toDisplayString as d, Fragment as g, renderList as S, createVNode as h, nextTick as E } from "vue";
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
    }, u = t, s = f(() => L(
      k,
      u.classes,
      u.toast?.classes
    )), y = (l, c) => {
      u.toast.close(), E(() => {
        c(l, u.toast, c);
      });
    };
    return (l, c) => (o(), a("div", {
      class: e(["toast", [
        {
          "toast--persistent": !t.toast.duration
        },
        t.toast?.class
      ]])
    }, [
      t.toast.icon || l.$slots.icon ? (o(), a("div", {
        key: 0,
        class: e(["toast__icon", s.value.icon])
      }, [
        m(l.$slots, "icon", { toast: t.toast }, () => [
          t.toast.icon ? (o(), B(v, {
            key: 0,
            icon: t.toast.icon
          }, null, 8, ["icon"])) : n("", !0)
        ])
      ], 2)) : n("", !0),
      r("div", {
        class: e(["toast__content", s.value.content])
      }, [
        m(l.$slots, "content", { toast: t.toast }, () => [
          t.toast.title ? (o(), a("div", {
            key: 0,
            class: e(["toast__header", s.value.header])
          }, [
            r("strong", {
              class: e(["toast__title", s.value.title])
            }, d(t.toast.title), 3),
            t.toast.date ? (o(), a("span", {
              key: 0,
              class: e(["toast__date", s.value.date])
            }, d(t.toast.date), 3)) : n("", !0)
          ], 2)) : n("", !0),
          t.toast.description ? (o(), a("div", {
            key: 1,
            class: e(["toast__body", s.value.body])
          }, d(t.toast.description), 3)) : n("", !0)
        ])
      ], 2),
      t.toast.actions?.length ? (o(), a("div", {
        key: 1,
        class: e(["toast__actions", s.value.actions])
      }, [
        (o(!0), a(g, null, S(t.toast.actions, (i, b) => (o(), a("button", {
          key: b,
          class: e(["toast__action", [s.value.action, i.class]]),
          onClick: (C) => y(C, i)
        }, d(i.label), 11, $))), 128))
      ], 2)) : n("", !0),
      r("button", {
        class: e(["toast__close", s.value.closeButton]),
        onClick: c[0] || (c[0] = (...i) => t.toast.close && t.toast.close(...i))
      }, [
        h(v, { icon: "type:close" })
      ], 2)
    ], 2));
  }
};
export {
  T as default
};
