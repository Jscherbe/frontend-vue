import { computed as o, createBlock as m, openBlock as d } from "vue";
import { randomInt as n } from "@ulu/utils/random.js";
import h from "../elements/UluImage.vue.js";
const g = {
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
    const t = e, a = o(() => t.random ? {
      width: n(500, 1e3),
      height: n(500, 1e3)
    } : { width: t.width, height: t.height }), c = o(() => {
      const { width: r, height: i } = a.value;
      return `https://picsum.photos/${t.imageId ? `id/${t.imageId}/` : ""}${r}/${i}`;
    });
    return (r, i) => (d(), m(h, {
      src: c.value,
      alt: e.alt
    }, null, 8, ["src", "alt"]));
  }
};
export {
  g as default
};
