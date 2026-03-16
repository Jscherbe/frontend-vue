import { createElementBlock as t, openBlock as s, normalizeClass as n, createElementVNode as u, Fragment as i, renderList as m, mergeProps as r } from "vue";
const o = ["src", "alt"], g = ["src", "alt"], y = /* @__PURE__ */ Object.assign({
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
    return (l, d) => e.sources?.length ? (s(), t("picture", {
      key: 0,
      class: n(e.classes?.picture)
    }, [
      (s(!0), t(i, null, m(e.sources, (a, c) => (s(), t("source", r({ key: c }, { ref_for: !0 }, a), null, 16))), 128)),
      u("img", r({
        src: e.src,
        alt: e.alt,
        class: e.classes?.img
      }, l.$attrs), null, 16, o)
    ], 2)) : (s(), t("img", r({
      key: 1,
      src: e.src,
      alt: e.alt,
      class: e.classes?.img
    }, l.$attrs), null, 16, g));
  }
});
export {
  y as default
};
