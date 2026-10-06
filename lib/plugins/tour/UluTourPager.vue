<template>
  <UluButton 
    v-if="state.stepIndex > 0" 
    transparent 
    small 
    @click="api.prev()"
  >
    Back
  </UluButton>
  
  <UluButton 
    small 
    @click="api.next()"
  >
    {{ isLastStep ? 'Finish' : 'Next' }}
  </UluButton>
  
  <UluButton 
    v-if="showClose" 
    transparent 
    small 
    @click="api.stop()"
  >
    Close
  </UluButton>
</template>

<script setup>
  import { computed } from 'vue';
  import { useTour } from './useTour.js';
  import UluButton from '../../components/elements/UluButton.vue';

  defineProps({
    /**
     * Display a close button alongside the pager buttons
     */
    showClose: {
      type: Boolean,
      default: false
    }
  });

  const { api, state } = useTour();

  const isLastStep = computed(() => {
    return state.active && state.stepIndex === state.active.steps.length - 1;
  });
</script>
