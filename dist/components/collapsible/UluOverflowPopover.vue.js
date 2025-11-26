import { ref as n, onMounted as m, onUnmounted as p, createElementBlock as _, openBlock as s, createElementVNode as l, createBlock as g, createCommentVNode as v, renderSlot as i, unref as h, withCtx as c, createVNode as k, nextTick as w } from "vue";
import x from "../../plugins/popovers/UluPopover.vue.js";
import y from "../elements/UluIcon.vue.js";
import { useWindowResize as z } from "../../composables/useWindowResize.js";
const $ = { class: "layout-flex-baseline" }, B = { class: "type-word-break" }, W = {
  __name: "UluOverflowPopover",
  props: {
    /**
     * Default icon for overflow popover trigger
     */
    triggerIcon: String
  },
  setup(a) {
    const { resizing: u, onResizeEnd: d } = z(), t = n(null), o = n(!1), r = () => {
      w(() => {
        const e = t.value;
        o.value = e.offsetWidth < e.scrollWidth;
      });
    }, f = d(r);
    return m(r), p(f), (e, E) => (s(), _("div", $, [
      l("div", {
        class: "type-truncate",
        ref_key: "text",
        ref: t
      }, [
        i(e.$slots, "default")
      ], 512),
      o.value && !h(u) ? (s(), g(x, {
        key: 0,
        triggerAlt: "Show Full Text",
        size: "large"
      }, {
        trigger: c(() => [
          k(y, {
            icon: a.triggerIcon || "type:ellipsis"
          }, null, 8, ["icon"])
        ]),
        default: c(() => [
          l("div", B, [
            i(e.$slots, "default")
          ])
        ]),
        _: 3
      })) : v("", !0)
    ]));
  }
};
export {
  W as default
};
