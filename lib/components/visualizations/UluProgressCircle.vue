<template>
  <div class="progress-circle" :class="resolvedModifiers">
    <strong class="hidden-visually">{{ label }}</strong>
    <div class="progress-circle__chart">
      <svg class="progress-circle__chart-svg" viewBox="0 0 32 32">
        <circle
          class="progress-circle__chart-track"
          r="16"
          cx="16"
          cy="16"
        />
        <circle 
          class="progress-circle__chart-pie" 
          ref="pie"
          r="16" 
          cx="16" 
          cy="16"
          :style="{ strokeDasharray: endDasharray }"
        />
        <circle 
          class="progress-circle__chart-mask" 
          cx="16" 
          cy="16" 
        />
      </svg>
      <strong v-if="!showValueOutside && !noValue" class="progress-circle__chart-value">
        <slot name="value" :value="percentage">{{ formatValue(percentage) }}</slot>
      </strong>
    </div>
    <strong v-if="showValueOutside && !noValue" class="progress-circle__value type-small-x">
      <slot name="value" :value="percentage">{{ formatValue(percentage) }}</slot>
    </strong>
  </div>
</template>

<script setup>
  import { ref, computed, watch, onMounted } from 'vue';
  import { useModifiers } from "../../composables/useModifiers.js";

  /**
   * A circular progress indicator component.
   * @slot value - The value display. Overrides the `formatValue` prop.
   */
  const props = defineProps({
    /**
     * The label for accessibility (visually hidden).
     */
    label: {
      type: String,
      default: "Progress"
    },
    /**
     * The progress percentage (0-100).
     */
    percentage: {
      type: Number,
      default: 0
    },
    /**
     * A function to format the percentage value.
     * Takes the number as input and should return a string.
     */
    formatValue: {
      type: Function,
      default: (value) => `${ value }%`,
    },
    /**
     * Hides the percentage value display.
     */
    noValue: Boolean,
    /**
     * Renders a smaller version of the component.
     */
    small: Boolean,
    /**
     * Displays the percentage value outside (to the side) of the circle.
     */
    outside: Boolean,
    /**
     * Displays the percentage value below the circle.
     */
    outsideBelow: Boolean,
    /**
     * Applies the 'danger' style.
     */
    danger: Boolean,
    /**
     * Applies the 'warning' style.
     */
    warning: Boolean,
    /**
     * Applies the 'success' style.
     */
    success: Boolean,
    /**
     * Renders the component as a solid pie chart instead of a donut.
     */
    pieStyle: Boolean,
    /**
     * Removes the center mask, filling the entire circle.
     */
    noMask: Boolean,
    /**
     * The duration of the animation in milliseconds.
     */
    duration: {
      type: Number,
      default: 1000 // Matches SCSS animation-duration
    },
    /**
     * The easing function for the animation.
     */
    easing: {
      type: String,
      default: "ease-in" // Matches SCSS animation-timing
    },
    /**
     * Modifiers (to add any modifier classes based on base class)
     */
    modifiers: [String, Array]
  });

  const pie = ref(null);

  const normalize = (percentage) => {
    // Added the 1% extra to 100% because sometimes it renders with a tiny gap
    return percentage === 100 ? 101 : percentage;
  };

  const animate = (from = 0) => {
    if (!pie.value || !pie.value.animate) return; // No Animation API or element not ready
    
    const keyframes = { strokeDasharray: [`${from} 100`, endDasharray.value] };
    pie.value.animate(keyframes, { duration: props.duration, easing: props.easing, fill: "forwards" });
  };

  watch(() => props.percentage, (newVal, oldVal) => {
    if (newVal !== oldVal) {
      animate(normalize(oldVal));
    }
  });

  const endDasharray = computed(() => {
    return `${normalize(props.percentage)} 100`;
  });

  const showValueOutside = computed(() => {
    return props.outside || props.outsideBelow || props.small;
  });

  const { resolvedModifiers } = useModifiers({ 
    props, 
    baseClass: "progress-circle",
    internal: computed(() => ({
      'small': props.small,
      'pie': props.pieStyle,
      'outside': showValueOutside.value,
      'outside-below': props.outsideBelow,
      'no-mask': props.noMask,
      'danger': props.danger,
      'warning': props.warning,
      'success': props.success,
    }))
  });

  onMounted(() => {
    animate();
  });
</script>
