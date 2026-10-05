<template>
  <div class="margin-top-small" style="display: flex; gap: 0.5rem; justify-content: flex-end;">
    <button v-if="state.stepIndex > 0" class="button button--outline button--small" @click="api.prev()">Back</button>
    <button class="button button--small" @click="api.next()">
      {{ isLastStep ? 'Finish' : 'Next' }}
    </button>
    <button v-if="showClose" class="button button--transparent button--small" @click="api.stop()">Close</button>
  </div>
</template>

<script setup>
  import { computed } from 'vue';
  import { useTour } from './useTour.js';

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
