import k from "../../components/elements/UluIcon.vue.js";
import { resolveComponent as b, createElementBlock as o, openBlock as e, normalizeClass as s, createCommentVNode as a, createElementVNode as d, renderSlot as _, createBlock as f, toDisplayString as i, Fragment as h, renderList as v, createVNode as C } from "vue";
import B from "../../_virtual/_plugin-vue_export-helper.js";
const U = {
  name: "UluToast",
  components: {
    UluIcon: k
  },
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
  methods: {
    handleAction(n, c) {
      const { toast: t } = this;
      this.toast.close(), this.$nextTick(() => {
        c(n, t, c);
      });
    }
  }
}, g = ["onClick"];
function x(n, c, t, I, N, m) {
  const u = b("UluIcon");
  return e(), o("div", {
    class: s(["toast", [
      {
        "toast--persistent": !t.toast.duration
      },
      t.toast?.class
    ]])
  }, [
    t.toast.icon || n.$slots.icon ? (e(), o("div", {
      key: 0,
      class: s(["toast__icon", t.classes.icon])
    }, [
      _(n.$slots, "icon", { toast: t.toast }, () => [
        t.toast.icon ? (e(), f(u, {
          key: 0,
          icon: t.toast.icon
        }, null, 8, ["icon"])) : a("", !0)
      ])
    ], 2)) : a("", !0),
    d("div", {
      class: s(["toast__content", t.classes.content])
    }, [
      _(n.$slots, "content", { toast: t.toast }, () => [
        t.toast.title ? (e(), o("div", {
          key: 0,
          class: s(["toast__header", t.classes.header])
        }, [
          d("strong", {
            class: s(["toast__title", t.classes.title])
          }, i(t.toast.title), 3),
          t.toast.date ? (e(), o("span", {
            key: 0,
            class: s(["toast__date", t.classes.date])
          }, i(t.toast.date), 3)) : a("", !0)
        ], 2)) : a("", !0),
        t.toast.description ? (e(), o("div", {
          key: 1,
          class: s(["toast__body", t.classes.body])
        }, i(t.toast.description), 3)) : a("", !0)
      ])
    ], 2),
    t.toast.actions?.length ? (e(), o("div", {
      key: 1,
      class: s(["toast__actions", t.classes.actions])
    }, [
      (e(!0), o(h, null, v(t.toast.actions, (l, r) => (e(), o("button", {
        key: r,
        class: s(["toast__action", t.classes.action]),
        onClick: (y) => m.handleAction(y, l)
      }, i(l.label), 11, g))), 128))
    ], 2)) : a("", !0),
    d("button", {
      class: s(["toast__close", t.classes.closeButton]),
      onClick: c[0] || (c[0] = (...l) => t.toast.close && t.toast.close(...l))
    }, [
      C(u, { icon: "type:close" })
    ], 2)
  ], 2);
}
const A = /* @__PURE__ */ B(U, [["render", x]]);
export {
  A as default
};
