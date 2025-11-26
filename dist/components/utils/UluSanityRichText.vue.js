import { createBlock as n, createCommentVNode as o, openBlock as r, withCtx as c, createVNode as l, unref as m, h as p } from "vue";
import { PortableText as i } from "@portabletext/vue";
import s from "./UluConditionalWrapper.vue.js";
const g = {
  __name: "UluSanityRichText",
  props: {
    /**
     * The array of Portable Text blocks to render.
     */
    content: Array,
    /**
     * If true, the output will not be wrapped in a div with the 'wysiwyg' class.
     */
    noWrapper: {
      type: Boolean,
      default: !1
    }
  },
  setup(e) {
    const a = {
      types: {
        image: ({ value: t }) => p("img", {
          src: `${t.imageUrl}?max-w=1100&fit=crop`,
          alt: t.imageAlt
        })
      }
    };
    return (t, u) => e.content?.length ? (r(), n(s, {
      key: 0,
      class: "wysiwyg",
      unwrapped: e.noWrapper
    }, {
      default: c(() => [
        l(m(i), {
          value: e.content,
          components: a
        }, null, 8, ["value"])
      ]),
      _: 1
    }, 8, ["unwrapped"])) : o("", !0);
  }
};
export {
  g as default
};
