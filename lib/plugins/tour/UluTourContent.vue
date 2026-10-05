<template>
  <div class="tour-step">
    <component 
      v-if="step?.title"
      :is="isModal ? 'h2' : 'strong'" 
      :class="[isModal ? 'type-large' : 'type-small', 'margin-bottom-small']" 
      :style="!isModal ? 'display: block;' : ''"
    >
      {{ step.title }}
    </component>
    <p 
      v-if="step?.content"
      class="type-small" 
      :class="{ 'margin-bottom-small': !isModal }"
    >
      {{ step.content }}
    </p>
  </div>
</template>

<script setup>
defineProps({
  /**
   * The tour step configuration object
   */
  step: {
    type: Object,
    required: true
  },
  /**
   * Adjusts the typography to match a modal context rather than a popover context
   */
  isModal: {
    type: Boolean,
    default: false
  }
});
</script>
