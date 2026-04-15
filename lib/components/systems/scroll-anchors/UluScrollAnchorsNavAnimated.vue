<template>
  <component 
    v-if="sections && sections.length" 
    :is="element"
    class="scroll-anchors__nav scroll-anchors__nav--animated scroll-anchors-nav-animated"
    :style="{ '--ulu-sa-nav-rail-width': `${ railWidth }px` }"
  >
    <ul class="scroll-anchors-nav-animated__rail" ref="listRef" :style="railStyles">
      <li 
        v-for="(item, index) in sections" :key="index"
        :class="{ 'is-active' : item.active }"
      >
        <a 
          :class="{ 'is-active' : item.active }"
          :ref="(el) => addLinkRef(index, el)"
          :href="`#${ item.titleId }`" 
        >
          <slot :item="item" :index="index">
            {{ item.title }}
          </slot>
        </a>
      </li>
    </ul>
    <div 
      class="scroll-anchors-nav-animated__indicator"
      :class="{
        'scroll-anchors-nav-animated__indicator--can-transition' : indicatorAnimReady
      }"
      :style="{
        opacity: indicatorStyles ? '1' : '0',
        transform: `translateY(${ indicatorStyles ? indicatorStyles.y : 0 }px)`,
        height: `${ indicatorStyles ? indicatorStyles.height : 0 }px`,
        width: `${ indicatorStyles ? indicatorStyles.width : 0 }px`
      }"
    ></div>
  </component>
</template>

<script setup>
  import { ref, computed, watch, onMounted, onBeforeUnmount } from "vue";
  import { runAfterFramePaint } from "@ulu/utils/browser/performance.js";
  import { useScrollAnchorSections } from "./useScrollAnchorSections.js";

  const props = defineProps({
    /**
     * The HTML element to use for the navigation root
     */
    element: {
      type: String,
      default: "nav"
    },
    /**
     * The width of the navigation rail
     */
    railWidth: {
      type: Number,
      default: 3
    },
    /**
     * Dynamically trims the rail to span exactly from the center of the first indicator to the center of the last indicator. Disabled by default
     */
    trimRailToCenters: {
      type: Boolean
    },
    /**
     * Pixel offset for the start (top) of the dynamic rail.
     */
    railStartOffset: {
      type: Number,
      default: 0
    },
    /**
     * Pixel offset for the end (bottom) of the dynamic rail.
     */
    railEndOffset: {
      type: Number,
      default: 0
    },
    /**
     * The width of the indicator, defaults to railWidth
     */
    indicatorWidth: {
      type: Number,
      default: null
    },
    /**
     * If set, creates a static height, centered indicator
     */
    indicatorHeight: {
      type: Number,
      default: null
    },
    /**
     * Vertical alignment of the indicator relative to the link
     */
    indicatorAlignment: {
      type: String,
      default: "center" // options: center, top
    },
    /**
     * Pixel offset for the indicator's vertical alignment
     */
    indicatorAlignmentOffset: {
      type: Number,
      default: 0
    }
  });

  // State from the scroll anchor system
  const sections = useScrollAnchorSections();

  // Template refs for the list and individual links
  const listRef = ref(null);
  const linkRefs = ref({});

  // Flag to enable CSS transitions only after initial placement
  const indicatorAnimReady = ref(false);

  // Resize observer to recalculate metrics on layout shifts
  const resizeTrigger = ref(0);
  let resizeObserver = null;

  onMounted(() => {
    if (listRef.value) {
      resizeObserver = new ResizeObserver(() => {
        resizeTrigger.value++;
      });
      resizeObserver.observe(listRef.value);
    }
  });

  onBeforeUnmount(() => {
    if (resizeObserver) {
      resizeObserver.disconnect();
      resizeObserver = null;
    }
  });

  /**
   * Helper to calculate the target position/size of the indicator for a specific item
   */
  function getIndicatorMetrics(index) {
    const link = linkRefs.value[index];
    if (!link) return null;

    const { offsetTop, offsetHeight } = link;
    const isStatic = props.indicatorHeight != null;
    const width = props.indicatorWidth ?? props.railWidth;
    const height = isStatic ? props.indicatorHeight : offsetHeight;

    let y = offsetTop; // Default to 'top' alignment
    if (props.indicatorAlignment === "center") {
      y = offsetTop + (offsetHeight / 2) - (height / 2);
    }

    y += props.indicatorAlignmentOffset;

    return { y, height, width };
  }

  // Active indicator styles
  const indicatorStyles = computed(() => {
    resizeTrigger.value; // Re-evaluate on resize
    if (!sections || !sections.value || !sections.value.length) {
      return false;
    }
    const activeIndex = sections.value.findIndex(s => s.active);
    if (activeIndex === -1) {
      return false;
    }
    return getIndicatorMetrics(activeIndex) || false;
  });

  // Background rail styles (trimmed to start/end of indicators)
  const railStyles = computed(() => {
    resizeTrigger.value; // Re-evaluate on resize
    if (!props.trimRailToCenters) return {};
    if (!sections || !sections.value || sections.value.length < 1) return {};

    const firstMetrics = getIndicatorMetrics(0);
    const lastMetrics = getIndicatorMetrics(sections.value.length - 1);

    if (!firstMetrics || !lastMetrics) return {};

    let top = firstMetrics.y + (firstMetrics.height / 2);
    let bottom = lastMetrics.y + (lastMetrics.height / 2);

    top += props.railStartOffset;
    bottom += props.railEndOffset;

    const height = Math.max(0, bottom - top);

    return {
      "--ulu-sa-nav-rail-top": `${top}px`,
      "--ulu-sa-nav-rail-height": `${height}px`
    };
  });

  // Allow transition after initial styles are applied
  watch(indicatorStyles, (val) => {
    if (val && !indicatorAnimReady.value) {
      runAfterFramePaint(() => {
        indicatorAnimReady.value = true;
      });
    }
  });

  // Helper to store link template refs
  function addLinkRef(index, el) {
    if (el) {
      linkRefs.value[index] = el;
    }
  }
</script>