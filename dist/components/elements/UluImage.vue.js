import { createElementBlock as r, openBlock as s, normalizeClass as n, renderSlot as u, createElementVNode as i, Fragment as m, renderList as o, createBlock as f, mergeProps as l } from "vue";
import d from "./UluImageSource.vue.js";
const g = ["src", "alt"], y = ["src", "alt"], B = /* @__PURE__ */ Object.assign({
  inheritAttrs: !1
}, {
  __name: "UluImage",
  props: {
    src: {
      type: String,
      required: !0
    },
    alt: {
      type: String,
      default: ""
    },
    /**
     * Array of source objects for <picture> tag.
     * Example: [{ srcset: '/small.jpg', media: '(max-width: 600px)' }]
     */
    sources: {
      type: Array,
      default: () => []
    },
    /**
     * Granular class targeting for internal elements.
     * Example: { picture: 'my-picture-class', img: 'my-img-class' }
     */
    classes: {
      type: Object,
      default: () => ({})
    }
  },
  setup(e) {
    return (t, k) => e.sources?.length || t.$slots.default ? (s(), r("picture", {
      key: 0,
      class: n(e.classes?.picture)
    }, [
      u(t.$slots, "default"),
      (s(!0), r(m, null, o(e.sources, (a, c) => (s(), f(d, l({ key: c }, { ref_for: !0 }, a), null, 16))), 128)),
      i("img", l({
        src: e.src,
        alt: e.alt,
        class: e.classes?.img
      }, t.$attrs), null, 16, g)
    ], 2)) : (s(), r("img", l({
      key: 1,
      src: e.src,
      alt: e.alt,
      class: e.classes?.img
    }, t.$attrs), null, 16, y));
  }
});
export {
  B as default
};
