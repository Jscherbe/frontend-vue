import { computed as a, createElementBlock as i, openBlock as n, normalizeClass as c, unref as p, renderSlot as r, createCommentVNode as l, createTextVNode as d, toDisplayString as u } from "vue";
import { useModifiers as f } from "../../composables/useModifiers.js";
const m = {
  key: 0,
  class: "captioned-figure__caption"
}, C = {
  __name: "UluCaptionedFigure",
  props: {
    /**
     * The text content for the caption.
     */
    caption: {
      type: String,
      default: ""
    },
    /**
     * Positioning (e.g., 'bottom', 'center', 'right') else defaults to traditional
     */
    position: String,
    /**
     * Modifiers for styling and positioning (e.g., 'bottom', 'center', 'right', 'traditional').
     */
    modifiers: [String, Array]
  },
  setup(t) {
    const e = t, { resolvedModifiers: s } = f({
      props: e,
      baseClass: "captioned-figure",
      internal: a(() => ({
        traditional: !e.position,
        [e.position]: e.position
      }))
    });
    return (o, g) => (n(), i("figure", {
      class: c(["captioned-figure", p(s)])
    }, [
      r(o.$slots, "default"),
      t.caption || o.$slots.caption ? (n(), i("figcaption", m, [
        r(o.$slots, "caption", {}, () => [
          d(u(t.caption), 1)
        ])
      ])) : l("", !0)
    ], 2));
  }
};
export {
  C as default
};
