<template>
  <div :class="componentClasses">
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
      <strong v-if="!showValueOutside" class="progress-circle__chart-value">
        {{ percentage }}%
      </strong>
    </div>
    <strong v-if="showValueOutside" class="progress-circle__value type-small-x">
      {{ percentage }}%
    </strong>
  </div>
</template>

<script>
  /**
   * A circular progress indicator component.
   */
  export default {
    name: 'UluProgressCircle',
    props: {
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
       * Sets the status color of the progress circle (e.g., 'low', 'incomplete', 'complete').
       */
      status: {
        type: String,
        default: ''
      },
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
      }
    },
    watch: {
      // Need to reanimate if value changes
      percentage(newVal, oldVal) {
        if (newVal !== oldVal) {
          this.animate(this.normalize(oldVal));
        }
      }
    },
    computed: {
      endDasharray() {
        return `${ this.normalize(this.percentage) } 100`;
      },
      showValueOutside() {
        return this.outside || this.outsideBelow || this.small;
      },
      componentClasses() {
        const classes = {
          'progress-circle': true,
          'progress-circle--small': this.small,
          'progress-circle--pie': this.pieStyle,
          'progress-circle--outside': this.showValueOutside,
          'progress-circle--outside-below': this.outsideBelow,
          'progress-circle--no-mask': this.noMask,
        };
        if (this.status) {
          classes[`progress-circle--${this.status}`] = true;
        }
        return classes;
      }
    },
    methods: {
      normalize(percentage) {
        // Added the 1% extra to 100% because sometimes it renders with a tiny gap
        return percentage === 100 ? 101 : percentage;
      },
      animate(from = 0) {
        const { pie } = this.$refs;
        if (!pie || !pie.animate) return; // No Animation API or element not ready
        const { duration, easing, endDasharray } = this;
        const keyframes = { strokeDasharray: [`${ from } 100`, endDasharray] };
        pie.animate(keyframes, { duration, easing, fill: "forwards" });
      }
    },
    mounted() {
      this.animate();
    }
  }
</script>
