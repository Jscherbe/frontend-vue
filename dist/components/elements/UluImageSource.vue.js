import { createElementBlock as r, openBlock as s, mergeProps as a } from "vue";
const c = ["srcset", "media"], o = /* @__PURE__ */ Object.assign({
  inheritAttrs: !1
}, {
  __name: "UluImageSource",
  props: {
    /**
     * Source set (e.g. image paths)
     */
    srcset: {
      type: String,
      required: !0
    },
    /**
     * Media query (e.g. (min-width: 600px))
     */
    media: {
      type: String,
      default: void 0
    }
  },
  setup(e) {
    return (t, n) => (s(), r("source", a({
      srcset: e.srcset,
      media: e.media
    }, t.$attrs), null, 16, c));
  }
});
export {
  o as default
};
