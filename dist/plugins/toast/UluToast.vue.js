import { computed as C, createElementBlock as l, openBlock as o, normalizeClass as e, createCommentVNode as c, createElementVNode as r, renderSlot as m, createBlock as B, toDisplayString as d, Fragment as g, renderList as S, createVNode as h, nextTick as E } from "vue";
import k from "../../components/elements/UluIcon.vue.js";
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
    const v = {
      content: "type-small",
      date: "type-small-x",
      actions: "type-small-x",
      action: "button button--small button--outline",
      closeButton: "button button--icon button--transparent"
    }, u = t, s = C(() => L(
      v,
      u.classes,
      u.toast?.classes
    )), y = (i, n) => {
      u.toast.close();
      const a = typeof n == "function" ? n : n.click;
      a && E(() => {
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
          t.toast.icon ? (o(), B(k, {
            key: 0,
            icon: t.toast.icon
          }, null, 8, ["icon"])) : c("", !0)
        ])
      ], 2)) : c("", !0),
      r("div", {
        class: e(["toast__content", s.value.content])
      }, [
        m(i.$slots, "content", { toast: t.toast }, () => [
          t.toast.title ? (o(), l("div", {
            key: 0,
            class: e(["toast__header", s.value.header])
          }, [
            r("strong", {
              class: e(["toast__title", s.value.title])
            }, d(t.toast.title), 3),
            t.toast.date ? (o(), l("span", {
              key: 0,
              class: e(["toast__date", s.value.date])
            }, d(t.toast.date), 3)) : c("", !0)
          ], 2)) : c("", !0),
          t.toast.description ? (o(), l("div", {
            key: 1,
            class: e(["toast__body", s.value.body])
          }, d(t.toast.description), 3)) : c("", !0)
        ])
      ], 2),
      t.toast.actions?.length ? (o(), l("div", {
        key: 1,
        class: e(["toast__actions", s.value.actions])
      }, [
        (o(!0), l(g, null, S(t.toast.actions, (a, b) => (o(), l("button", {
          key: b,
          class: e(["toast__action", [s.value.action, a.class]]),
          onClick: (f) => y(f, a)
        }, d(a.label), 11, $))), 128))
      ], 2)) : c("", !0),
      r("button", {
        class: e(["toast__close", s.value.closeButton]),
        onClick: n[0] || (n[0] = (...a) => t.toast.close && t.toast.close(...a))
      }, [
        h(k, { icon: "type:close" })
      ], 2)
    ], 2));
  }
};
export {
  T as default
};
