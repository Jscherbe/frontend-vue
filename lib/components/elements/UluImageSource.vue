<template>
  <source 
    :srcset="srcset" 
    :media="media" 
    v-bind="$attrs" 
  />
</template>

<script setup>
  defineOptions({
    inheritAttrs: false
  });

  defineProps({
    /**
     * Source set (e.g. image paths)
     */
    srcset: {
      type: String,
      required: true
    },
    /**
     * Media query (e.g. (min-width: 600px))
     */
    media: {
      type: String,
      default: undefined
    }
  });
</script>
