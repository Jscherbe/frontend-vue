<template>
  <div class="tour-step crop-margins">
    <component 
      v-if="step?.title"
      :is="isModal ? 'h2' : 'strong'" 
      :class="isModal ? 'h3' : 'h4'" 
      class="display-block no-margin-top"
    >
      {{ step.title }}
    </component>
    <UluRule />
    <p v-if="step?.content">
      {{ step.content }}
    </p>
  </div>
</template>

<script setup>
  import UluRule from "../../components/elements/UluRule.vue";

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
