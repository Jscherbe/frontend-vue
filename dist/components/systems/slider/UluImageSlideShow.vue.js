import _ from "./UluSlideShow.vue.js";
import { resolveComponent as h, createBlock as u, openBlock as g, withCtx as a, createElementVNode as r, createCommentVNode as p, createTextVNode as S } from "vue";
import w from "../../../_virtual/_plugin-vue_export-helper.js";
const B = {
  name: "ImageSlideShow",
  components: {
    UluSlideShow: _
  },
  props: {
    images: Array,
    selectButton: Boolean
  },
  watch: {
    images() {
      console.log("watch image from outer");
    }
  },
  methods: {
    /**
     * Test to see if the active slide's nav button (thumbnail) is in view
     * if not, scroll the nav to ensure it is visible. This function will take 
     * into account which side of the overflow nav the item is hidden in and will 
     * scroll either to fit it to the flush end (if overflow to the right) or flush start
     */
    slideChange({ slide: m, nav: o }) {
      const { active: s, navElement: n } = m;
      if (!n) return;
      const { offsetWidth: d, scrollLeft: t } = o, { offsetLeft: l, offsetWidth: c } = n, e = t + d, f = l + c;
      let i = null;
      console.log("left/right", t, e), s && n && (f > e ? i = t + (f - e) : l < t && (i = l), i !== null && o.scrollTo({ left: i, top: 0, behavior: "smooth" }));
    }
  }
}, v = ["src", "alt"], C = { class: "slideshow__image-actions" }, x = ["src", "alt"];
function U(m, o, s, n, d, t) {
  const l = h("AppButton"), c = h("UluSlideShow");
  return g(), u(c, {
    class: "slideshow--images",
    items: s.images,
    onSlideChange: t.slideChange
  }, {
    slide: a(({ item: e }) => [
      r("img", {
        src: e.src,
        alt: e.alt
      }, null, 8, v),
      r("div", C, [
        s.selectButton ? (g(), u(l, {
          key: 0,
          class: "type-small",
          icon: "plus",
          small: "",
          iconBefore: ""
        }, {
          default: a(() => [...o[0] || (o[0] = [
            S(" Select ", -1)
          ])]),
          _: 1
        })) : p("", !0)
      ])
    ]),
    nav: a(({ index: e }) => [
      r("img", {
        src: s.images[e].src,
        alt: `View image ${e}`
      }, null, 8, x)
    ]),
    _: 1
  }, 8, ["items", "onSlideChange"]);
}
const A = /* @__PURE__ */ w(B, [["render", U]]);
export {
  A as default
};
