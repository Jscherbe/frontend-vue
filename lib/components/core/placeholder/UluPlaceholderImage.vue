<template>
  <img :src="src" :alt="alt">
</template>
<script>
  import { randomInt } from "@ulu/utils/random.js";
  export default {
    name: "UluPlaceholderImage",
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
    computed: {
      src() {
        const { imageId } = this;
        const { width, height } = this.size;
        const id = imageId ? `id/${ imageId }/` : "";
        return `https://picsum.photos/${ id }${ width }/${ height }`;
      },
      size() {
        const { random, width, height } = this;
        if (random) {
          return {
            width: randomInt(500, 1000),
            height: randomInt(500, 1000),
          };
        } else {
          return { width, height };
        }
      }
    }
  };
</script>