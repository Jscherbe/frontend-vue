import { computed as C, createElementBlock as l, openBlock as o, normalizeClass as e, createCommentVNode as c, createElementVNode as d, renderSlot as m, createBlock as B, toDisplayString as r, Fragment as g, renderList as S, unref as h, createVNode as E, nextTick as L } from "vue";
import v from "../../components/elements/UluIcon.vue.js";
import { mergeClassLookups as $, resolveClassOverride as A } from "../../utils/props.js";
const F = ["onClick"], V = {
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
    }, u = t, s = C(() => $(
      k,
      u.classes,
      u.toast?.classes
    )), y = (i, n) => {
      u.toast.close();
      const a = typeof n == "function" ? n : n.click;
      a && L(() => {
        a(i, u.toast, n);
      });
    };
    return (i, n) => (o(), l("div", {
      class: e(["toast", [
        {
          "toast--persistent": !t.toast.duration
        },
        t.toast?.class
      ]])
    }, [
      t.toast.icon || i.$slots.icon ? (o(), l("div", {
        key: 0,
        class: e(["toast__icon", s.value.icon])
      }, [
        m(i.$slots, "icon", { toast: t.toast }, () => [
          t.toast.icon ? (o(), B(v, {
            key: 0,
            icon: t.toast.icon
          }, null, 8, ["icon"])) : c("", !0)
        ])
      ], 2)) : c("", !0),
      d("div", {
        class: e(["toast__content", s.value.content])
      }, [
        m(i.$slots, "content", { toast: t.toast }, () => [
          t.toast.title ? (o(), l("div", {
            key: 0,
            class: e(["toast__header", s.value.header])
          }, [
            d("strong", {
              class: e(["toast__title", s.value.title])
            }, r(t.toast.title), 3),
            t.toast.date ? (o(), l("span", {
              key: 0,
              class: e(["toast__date", s.value.date])
            }, r(t.toast.date), 3)) : c("", !0)
          ], 2)) : c("", !0),
          t.toast.description ? (o(), l("div", {
            key: 1,
            class: e(["toast__body", s.value.body])
          }, r(t.toast.description), 3)) : c("", !0)
        ])
      ], 2),
      t.toast.actions?.length ? (o(), l("div", {
        key: 1,
        class: e(["toast__actions", s.value.actions])
      }, [
        (o(!0), l(g, null, S(t.toast.actions, (a, b) => (o(), l("button", {
          key: b,
          class: e(["toast__action", h(A)(s.value.action, a.class)]),
          onClick: (f) => y(f, a)
        }, r(a.label), 11, F))), 128))
      ], 2)) : c("", !0),
      d("button", {
        class: e(["toast__close", s.value.closeButton]),
        onClick: n[0] || (n[0] = (...a) => t.toast.close && t.toast.close(...a))
      }, [
        E(v, { icon: "type:close" })
      ], 2)
    ], 2));
  }
};
export {
  V as default
};
