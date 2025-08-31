<template>
  <div>
    <div v-for="(line, index) in linesWithSegments" :key="index">
      <span 
        v-for="segment in line"
        :key="segment"
        class="skeleton skeleton--text skeleton--inline"
        :class="{ 'skeleton--background-alt' : segment.alt }"
        :style="{ width: `${ segment.width }%` }"
      > 
      </span>
    </div>
  </div>
</template>

<script setup>
  import { computed } from "vue";
  import { randomInt } from "@ulu/utils/random.js";
  import { arrayCreate } from "@ulu/utils/array.js";

  const props = defineProps({
    /**
     * Amount of lines to generate
     */
    lines: {
      type: Number,
      default: 6
    },
  });

  /**
   * Creates the segments (like words) for the given line count
   * - Uses random number of segments and makes sure to fill the line between 70% - 100%
   */
  const linesWithSegments = computed(() => arrayCreate(props.lines, () => {
    const minWidth = 15;
    const total = randomInt(70, 100);
    let widthCurrent = 0;
    const newWidth = () => {
      const remaining = total - widthCurrent;
      const width = randomInt(minWidth, remaining);
      widthCurrent += width;
      return width;
    };
    const segments = [];
    while (widthCurrent < total - minWidth) {
      segments.push(newWidth());
    }
    const getActualTotal = () => segments.reduce((acc, a) => acc + a, 0);
    while (getActualTotal() >= total) {
      let removed = segments.pop();
      if (!removed) break;
    }
    return segments.map(width => ({ width, alt: Math.random() < 0.5 }));
  }));
</script>