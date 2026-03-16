import { computed as n, createElementBlock as d, openBlock as h } from "vue";
import { randomInt as o } from "@ulu/utils/random.js";
const s = ["src", "alt"], g = {
  __name: "UluPlaceholderImage",
  props: {
    imageId: String,
    /**
     * Width of the image
     */
    width: {
      type: [String, Number],
      default: "300"
    },
    /**
     * Height of the image
     */
    height: {
      type: [String, Number],
      default: "400"
    },
    /**
     * Alt text for placeholder image
     */
    alt: String,
    /**
     * Random size
     */
    random: Boolean
  },
  setup(e) {
    const t = e, a = n(() => t.random ? {
      width: o(500, 1e3),
      height: o(500, 1e3)
    } : { width: t.width, height: t.height }), c = n(() => {
      const { width: r, height: i } = a.value;
      return `https://picsum.photos/${t.imageId ? `id/${t.imageId}/` : ""}${r}/${i}`;
    });
    return (r, i) => (h(), d("img", {
      src: c.value,
      alt: e.alt
    }, null, 8, s));
  }
};
export {
  g as default
};
