<template>
  <component v-if="!unwrapped" :is="is" v-bind="$attrs">
    <slot></slot>
  </component>
  <template v-else>
    <slot></slot>
  </template>
</template>

<script setup>
  defineOptions({
    inheritAttrs: false
  });

  defineProps({
    /**
     * The underlying component or HTML tag to render.
     * Can be a string like 'div' or an imported component object.
     */
    is: {
      type: [String, Object, Function], // Can be a string or a component definition
      default: 'div' // A sensible default for a wrapper
    },
    /**
     * If true, the wrapper will not be rendered and the content
     * will be output directly.
     */
    unwrapped: {
      type: Boolean,
      default: false
    }
  });
</script>