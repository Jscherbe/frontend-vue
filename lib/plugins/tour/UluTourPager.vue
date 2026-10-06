<template>
  <div class="tour-pager layout-flex-justified">
    <UluButton 
      @click="api.prev()"
      text="Previous"
      :disabled="state.stepIndex === 0"
      icon="type:previous"
      iconBefore
      small
      secondary
      transparent
    />
    <UluButton 
      primary
      :icon="isLastStep ? null : 'type:next'"
      @click="api.next()"
      :text="isLastStep ? 'Finish' : 'Next'"
      small
    />
  </div>
</template>

<script setup>
  import { computed } from 'vue';
  import { useTour } from './useTour.js';
  import UluButton from '../../components/elements/UluButton.vue';

  const { api, state } = useTour();

  const isLastStep = computed(() => {
    return state.active && state.stepIndex === state.active.steps.length - 1;
  });
  const isFirstStep = computed(() => {
    return state.active && state.stepIndex === 0;
  });
</script>
