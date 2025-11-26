import { createBlock as d, createCommentVNode as u, openBlock as a, resolveDynamicComponent as l, mergeProps as m } from "vue";
import s from "../../_virtual/_plugin-vue_export-helper.js";
const c = {
  name: "UluModalsDisplay",
  emits: [
    "modal-unmount",
    "modal-mount"
  ],
  data() {
    return {
      open: !1
    };
  },
  computed: {
    currentModal() {
      return this.$uluModalsState.data?.active;
    },
    currentProps() {
      return this.$uluModalsState.data?.activeProps;
    }
  },
  watch: {
    // Watch for changes in the global state (e.g., when $uluModals.open() is called)
    currentModal(o) {
      o ? this.open = !0 : this.open = !1;
    },
    // Watch for changes in the local state (e.g., when the modal emits 'update:modelValue')
    open(o) {
      !o && this.currentModal && this.$uluModals.close();
    }
  },
  methods: {
    modalMounted() {
      this.$emit("modal-mount", { modal: this.currentModal });
    },
    modalUnmounted() {
      this.$nextTick(() => {
        this.$emit("modal-unmount");
      });
    }
  }
};
function i(o, t, p, M, n, e) {
  return e.currentModal ? (a(), d(l(e.currentModal.component), m({ key: 0 }, e.currentProps, {
    modelValue: n.open,
    "onUpdate:modelValue": t[0] || (t[0] = (r) => n.open = r),
    onVnodeMounted: e.modalMounted,
    onVnodeUnmounted: e.modalUnmounted
  }), null, 16, ["modelValue", "onVnodeMounted", "onVnodeUnmounted"])) : u("", !0);
}
const V = /* @__PURE__ */ s(c, [["render", i]]);
export {
  V as default
};
