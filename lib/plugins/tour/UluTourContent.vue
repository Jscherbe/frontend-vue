<template>
  <div class="tour-content crop-margins">
    <component 
      v-if="step?.title"
      class="tour-content__title"
      :is="isModal ? 'h2' : 'strong'" 
      :class="resolvedTitleClass"
    >
      <span 
        v-if="showProgress" 
        class="tour-content__title-progress"
        :class="resolvedProgressClass"
      >
        Part {{ currentProgress }} / {{ totalProgress }}
      </span>
      <span class="hidden-visually">:</span>
      <span class="tour-content__title-text">{{ step.title }}</span>
    </component>
    <UluRule />
    <p 
      class="tour-content__body"
      v-if="step?.content"
    >
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

  const resolvedProgressClass = computed(() => {
    return props.step.progressClass || tourState.active?.progressClass || 'headline-label';
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
