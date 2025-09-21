<template>
  <component 
    :is="element"
    class="form-theme"
    :class="[{
      'form-theme--full-width': fullWidth,
      'form-theme--full-width-select': fullWidthSelect,
      'form-theme--hide-labels': hideLabels,
      'form-theme--actions-right': actionsRight
    }]"
  >
    <slot />
  </component>
</template>

<script setup>
defineProps({
  /**
   * The HTML element to use for the form.
   */
  element: {
    type: String,
    default: 'form'
  },
  /**
   * If true, applies the full-width styles to text inputs.
   */
  fullWidth: Boolean,
  /**
   * If true, applies the full-width styles to select inputs.
   */
  fullWidthSelect: Boolean,
  /**
   * If true, hides all labels in the form.
   */
  hideLabels: Boolean,
  /**
   * If true, right-aligns the form actions.
   */
  actionsRight: Boolean
});
</script>