<template>
  <span 
    class="skeleton skeleton--text"
    :class="{
      'skeleton--inline' : inline,
      'skeleton--background-alt' : alt,
      [`skeleton--width-${ width }`] : width
    }"
  ></span>
</template>

<script setup>
  defineProps({
    /**
     * Inline modifier
     */
    inline: Boolean,
    /**
     * Use alternate background color
     */
    alt: Boolean,
    /**
     * Optional size (width) - should correspond with width setup in scss component
     */
    width: String
  });
</script>