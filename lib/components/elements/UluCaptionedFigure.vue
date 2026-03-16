<template>
  <figure class="captioned-figure" :class="resolvedModifiers">
    <slot></slot>
    <figcaption v-if="caption || $slots.caption" class="captioned-figure__caption">
      <slot name="caption">{{ caption }}</slot>
    </figcaption>
  </figure>
</template>

<script setup>
  import { useModifiers } from '../../composables/useModifiers.js';

  const props = defineProps({
    /**
     * The text content for the caption.
     */
    caption: {
      type: String,
      default: ''
    },
    /**
     * Modifiers for styling and positioning (e.g., 'bottom', 'center', 'right', 'traditional').
     */
    modifiers: [String, Array]
  });

  const { resolvedModifiers } = useModifiers({ props, baseClass: 'captioned-figure' });
</script>
