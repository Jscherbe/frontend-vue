<template>
  <div :class="componentClasses">
    <div 
      v-if="label || $slots.label || $slots.icon || amountInHeader" 
      class="progress-bar__header"
    >
      <component
        v-if="label"
        :is="labelElement"
        class="progress-bar__label"
        :class="[classes.label, { 'hidden-visually': labelHidden }]"
      >
        <slot name="label">
          {{ label }}
        </slot>
      </component>
      <div 
        v-if="amountInHeader"  
        class="progress-bar__value progress-bar__value--amount"
      >
        <strong class="hidden-visually">Amount:</strong>
        <slot name="valueAmount" :value="amount">{{ formatValue(amount, 'amount') }}</slot>
      </div>
      <div v-if="$slots.icon" class="progress-bar__icon">
        <slot name="icon" />
      </div>
    </div>
    <div class="progress-bar__track">
      <div class="progress-bar__bar" :style="{ width: barWidth }"></div>
      <div
        v-if="deficit > 0"
        class="progress-bar__bar--deficit"
        :style="{ width: deficitBarWidth }"
      ></div>
    </div>
    <div 
      v-if="!noValues && !amountInHeader && (!loader && !indeterminate)" 
      class="progress-bar__values"
    >
      <div class="progress-bar__value progress-bar__value--amount">
        <strong class="hidden-visually">Amount:</strong>
        <slot name="valueAmount" :value="amount">{{ formatValue(amount, 'amount') }}</slot>
      </div>
      <div v-if="deficit > 0" class="progress-bar__value progress-bar__value--deficit">
        <strong class="hidden-visually">Deficit: </strong>
        <slot name="valueDeficit" :value="deficit">-{{ formatValue(deficit, 'deficit') }}</slot>
      </div>
      <div class="progress-bar__value progress-bar__value--total">
        <strong class="hidden-visually">Total:</strong>
        <slot name="valueTotal" :value="total">{{ formatValue(total, 'total') }}</slot>
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
   * The label to display above the progress bar. (or use label slot)
   */
  label: String,
  /**
   * Hides the label visually, but keeps it for screen readers.
   */
  labelHidden: Boolean,
  /**
   * Optional classes object (currently only allowing { label } class)
   */
  classes: {
    type: Object,
    default: () => ({})
  },
  /**
   * Element to use for label
   */
  labelElement: {
    type: String,
    default: "strong"
  },
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
  /**
   * Omit values from output (the numbers below the progress bar)
   */
  noValues: Boolean,
  /**
   * A function to format the numerical values (amount, deficit, total).
   * Takes the value and type ('amount', 'deficit', 'total') as input and should return a string.
   */
  formatValue: {
    type: Function,
    default: (value, type) => value,
  },
  /**
   * Will put the amount only in header (there is a headerValue slot it you want to format)
   */
  amountInHeader: Boolean
});

const getCssPercentage = (amount, total) => {
  const percent = total === 0 ? 0 : (amount / total) * 100;
  return `${ percent }%`;
};

const barWidth = computed(() => {
  if (props.indeterminate) return null; // No value for width
  return getCssPercentage(props.amount, props.total);
});

const deficitBarWidth = computed(() => getCssPercentage(props.deficit, props.total));

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
