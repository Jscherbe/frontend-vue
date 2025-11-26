import { ref as a, onMounted as d, onBeforeUnmount as u, watch as c, createBlock as f, openBlock as m, resolveDynamicComponent as p, withCtx as v, renderSlot as h } from "vue";
import { debounce as w } from "@ulu/utils/performance.js";
import { setPositionClasses as _ } from "@ulu/frontend";
const C = {
  __name: "UluDataGrid",
  props: {
    /**
     * The element to use on data-grid container
     */
    element: {
      type: String,
      default: "div"
    },
    /**
     * Tell the component when this grid is actually in a hidden container 
     * - When value changes the component will properly update position classes
     */
    hidden: Boolean
    // New prop from SSR version
  },
  setup(o) {
    const s = o, n = a(null), i = a(null);
    let e = null, t = null;
    return d(async () => {
      e = () => {
        n.value && _(n.value);
      }, e(), i.value = !0, t = w(e, 200, !1), window.addEventListener("resize", t);
    }), u(() => {
      t && (t.cancel(), window.removeEventListener("resize", t), t = null, e = null);
    }), c(() => s.hidden, (l, r) => {
      r && !l && e && e();
    }), (l, r) => (m(), f(p(o.element), {
      "data-grid-init": i.value,
      ref_key: "rootElement",
      ref: n
    }, {
      default: v(() => [
        h(l.$slots, "default")
      ]),
      _: 3
    }, 8, ["data-grid-init"]));
  }
};
export {
  C as default
};
