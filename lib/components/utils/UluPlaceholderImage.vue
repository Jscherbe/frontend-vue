<template>
  <img :src="src" :alt="alt">
</template>

<script setup>
  import { computed } from 'vue';
  import { randomInt } from "@ulu/utils/random.js";

  const props = defineProps({
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
  });

  const size = computed(() => {
    if (props.random) {
      return {
        width: randomInt(500, 1000),
        height: randomInt(500, 1000),
      };
    } else {
      return { width: props.width, height: props.height };
    }
  });

  const src = computed(() => {
    const { width, height } = size.value;
    const id = props.imageId ? `id/${ props.imageId }/` : "";
    return `https://picsum.photos/${ id }${ width }/${ height }`;
  });
</script>