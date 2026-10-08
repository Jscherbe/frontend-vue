<template>
  <div class="tour-content crop-margins">
    <div v-if="showProgress" class="type-small margin-bottom-small">
      Part {{ currentProgress }} / {{ totalProgress }}
    </div>
    <component 
      v-if="step?.title"
      :is="isModal ? 'h2' : 'strong'" 
      :class="resolvedTitleClass"
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
  import { computed } from "vue";
  import UluRule from "../../components/elements/UluRule.vue";
  import { useTour } from "./useTour.js";

  const { state: tourState } = useTour();

  const props = defineProps({
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

  const resolvedTitleClass = computed(() => {
    if (props.step.titleClass) return props.step.titleClass;
    
    if (props.isModal) {
      return tourState.active?.modalTitleClass || ['h3', 'no-margin'];
    } else {
      return tourState.active?.popoverTitleClass || ['h4', 'display-block', 'no-margin'];
    }
  });

  const currentProgress = computed(() => tourState.stepIndex + 1);
  
  const totalProgress = computed(() => tourState.active?.steps?.length || 0);
  
  const showProgress = computed(() => {
    if (props.step.hideProgress !== undefined) {
      return !props.step.hideProgress;
    }
    if (tourState.active?.hideProgress !== undefined) {
      return !tourState.active.hideProgress;
    }
    return true;
  });
</script>
