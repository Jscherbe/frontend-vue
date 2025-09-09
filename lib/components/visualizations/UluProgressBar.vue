<template>
  <div :class="componentClasses">
    <div v-if="label || $slots.icon" class="progress-bar__header">
      <strong
        v-if="label"
        class="progress-bar__label"
        :class="{ 'hidden-visually': labelHidden }"
      >
        {{ label }}
      </strong>
      <div v-if="$slots.icon" class="progress-bar__icon">
        <slot name="icon" />
      </div>
    </div>
    <div class="progress-bar__track">
      <div class="progress-bar__bar" :style="{ width: `${amountPercentage}%` }"></div>
      <div
        v-if="deficit > 0"
        class="progress-bar__bar--deficit"
        :style="{ width: `${deficitPercentage}%` }"
      ></div>
    </div>
    <div v-if="!loader && !indeterminate" class="progress-bar__values">
      <div class="progress-bar__value progress-bar__value--amount">
        <strong class="hidden-visually">Amount:</strong>
        {{ amount }}
      </div>
      <div
        v-if="deficit > 0"
        class="progress-bar__value progress-bar__value--deficit"
      >
        <strong class="hidden-visually">Deficit: </strong>
        -{{ deficit }}
      </div>
      <div class="progress-bar__value progress-bar__value--total">
        <strong class="hidden-visually">Total:</strong>
        {{ total }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";

/**
 * A linear progress bar to display progress, with support for various styles and a deficit indicator.
 * @slot icon - A slot for placing an icon in the header, typically to indicate status.
 */
const props = defineProps({
  /**
   * The label to display above the progress bar.
   */
  label: String,
  /**
   * Hides the label visually, but keeps it for screen readers.
   */
  labelHidden: Boolean,
  /**
   * The current amount of progress.
   */
  amount: {
    type: Number,
    default: 0,
  },
  /**
   * The total amount that represents 100% progress.
   */
  total: {
    type: Number,
    default: 100,
  },
  /**
   * The amount of deficit to display on the bar.
   */
  deficit: {
    type: Number,
    default: 0,
  },
  /**
   * Renders a smaller version of the progress bar.
   */
  small: Boolean,
  /**
   * Applies the 'positive' style (e.g., green).
   */
  positive: Boolean,
  /**
   * Applies the 'negative' style (e.g., red).
   */
  negative: Boolean,
  /**
   * Applies styles for use as a thin loader.
   */
  loader: Boolean,
  /**
   * Applies an indeterminate animation for unknown progress.
   */
  indeterminate: Boolean,
});

const amountPercentage = computed(() => {
  if (props.total === 0) return 0;
  return (props.amount / props.total) * 100;
});

const deficitPercentage = computed(() => {
  if (props.total === 0 || props.deficit === 0) return 0;
  return (props.deficit / props.total) * 100;
});

const componentClasses = computed(() => {
  return {
    'progress-bar': true,
    'progress-bar--small': props.small,
    'progress-bar--positive': props.positive,
    'progress-bar--negative': props.negative,
    'progress-bar--loader': props.loader,
    'progress-bar--indeterminate': props.indeterminate,
    'type-small': props.small, // From original component, seems to control font size
  };
});
</script>
