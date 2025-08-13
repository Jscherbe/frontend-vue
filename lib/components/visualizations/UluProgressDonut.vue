<template>
  <div 
    class="progress-donut" 
    :class="{ 
      'progress-donut--small' : small,
      'progress-donut--small-below' : smallBelow,
      'progress-donut--status-low' : !neutral && percentage < 30,
      'progress-donut--status-incomplete' : !neutral && percentage >= 30 && percentage < 100,
      'progress-donut--status-complete' : !neutral && percentage >= 100,
    }"
  >
    <strong class="hidden-visually">Course Progress</strong>
    <div class="progress-donut__chart">
      <!-- Added the 1% extra to 100% becasuse sometimes it renders with a tiny gap -->
      <svg class="progress-donut__chart-svg" viewBox="0 0 32 32">
        <circle 
          class="progress-donut__chart-pie" 
          ref="pie"
          r="16" 
          cx="16" 
          cy="16"
          :style="{ strokeDasharray: endDasharray }"
        />
        <circle 
          class="progress-donut__chart-mask" 
          :r="small ? 7 : 11" 
          cx="16" 
          cy="16" 
        />
      </svg>
      <strong v-if="!small" class="progress-donut__chart-value">
        {{ percentage }}%
      </strong>
    </div>
    <!-- The valus is shown to the side or below when small mode -->
    <strong v-if="small" class="progress-donut__value type-small-x">
      {{ percentage }}%
    </strong>
  </div>
</template>

<script>
  let counter = 0;
  export default {
    name: 'ProgressDonut',
    props: {
      percentage: {
        type: Number,
        default: 0
      },
      small: Boolean,
      smallBelow: Boolean,
      neutral: Boolean,
      duration: {
        type: Number,
        default: 500
      },
      easing: {
        type: String,
        default: "ease-in"
      }
    },
    data() {
      return {
        uid: `progress-donut-${ ++counter }`
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
      }
    },
    methods: {
      normalize(percentage) {
        return percentage === 100 ? 101 : percentage;
      },
      animate(from = 0) {
        const { pie } = this.$refs;
        if (!pie.animate) return; // No Animation API
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