<template>
  <picture v-if="sources?.length" :class="classes?.picture">
    <source 
      v-for="(source, index) in sources" 
      :key="index"
      v-bind="source" 
    />
    <img 
      :src="src" 
      :alt="alt"
      :class="classes?.img"
      v-bind="$attrs" 
    />
  </picture>

  <img 
    v-else
    :src="src" 
    :alt="alt"
    :class="classes?.img"
    v-bind="$attrs" 
  />
</template>

<script setup>
defineOptions({
  inheritAttrs: false
});

defineProps({
  src: {
    type: String,
    required: true
  },
  alt: {
    type: String,
    default: ''
  },
  /**
   * Array of source objects for <picture> tag.
   * Example: [{ srcset: '/small.jpg', media: '(max-width: 600px)' }]
   */
  sources: {
    type: Array,
    default: () => []
  },
  /**
   * Granular class targeting for internal elements.
   * Example: { picture: 'my-picture-class', img: 'my-img-class' }
   */
  classes: {
    type: Object,
    default: () => ({})
  }
});
</script>
