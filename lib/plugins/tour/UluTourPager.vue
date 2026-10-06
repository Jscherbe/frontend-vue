<template>
  <div class="tour-pager layout-flex-justified">
    <div class="margin-right-small">
      <UluButton 
        v-if="showClose" 
        class="no-margin"
        text="Close"
        icon="type:close"
        @click="api.stop()"
        outline 
        small 
        iconBefore
      />
    </div>
    <div>
      <div class="button-group no-margin-bottom">
        <UluButton 
          v-if="state.stepIndex > 0" 
          text="Previous"
          @click="api.prev()"
          transparent 
          iconBefore
          small 
        />
        <UluButton 
          :text="isLastStep ? 'Finish' : 'Next'"
          :icon="isLastStep ? null : 'type:next'"
          @click="api.next()"
          small 
          primary
          class="margin-left-auto"
        />
      </div>
    </div>
  </div>
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
