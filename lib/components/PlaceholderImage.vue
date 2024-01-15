<template>
  <img :src="`http://placekitten.com/${ size.width }/${ size.height }`" :alt="alt">
</template>
<script>
  import { randomInt } from "@ulu/utils/random.js";
  export default {
    name: "PlaceholderImage",
    props: {
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