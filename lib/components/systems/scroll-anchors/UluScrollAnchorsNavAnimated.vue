<template>
  <component 
    v-if="sections && sections.length" 
    :is="element"
    class="scroll-anchors__nav scroll-anchors__nav--animated scroll-anchors-nav-animated"
    :style="{ '--ulu-sa-nav-rail-width': `${ railWidth }px` }"
  >
    <ul class="scroll-anchors-nav-animated__rail">
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
      ref="indicator"
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
  import { ref, computed, watch } from 'vue';
  import { runAfterFramePaint } from "@ulu/utils/browser/performance.js";
  import { useScrollAnchorSections } from './useScrollAnchorSections.js';

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
      default: 'center' // options: center, top
    },
    /**
     * Pixel offset for the indicator's vertical alignment
     */
    indicatorAlignmentOffset: {
      type: Number,
      default: 0
    }
  });

  const sections = useScrollAnchorSections();

  const linkRefs = ref({});
  const indicatorAnimReady = ref(false);
  const indicator = ref(null);

  const indicatorStyles = computed(() => {
    if (!sections || !sections.value || !sections.value.length) {
      return false;
    }
    const activeIndex = sections.value.findIndex(s => s.active);
    if (activeIndex === -1) {
      return false;
    }
    const link = linkRefs.value[activeIndex];
    if (!link) return false; // Link might not be rendered yet

    const { offsetTop, offsetHeight } = link;
    const isStatic = props.indicatorHeight != null;
    const width = props.indicatorWidth ?? props.railWidth;
    const height = isStatic ? props.indicatorHeight : offsetHeight;

    let y = offsetTop; // Default to 'top' alignment
    if (props.indicatorAlignment === 'center') {
      y = offsetTop + (offsetHeight / 2) - (height / 2);
    }

    y += props.indicatorAlignmentOffset;

    return { y, height, width };
  });

  watch(indicatorStyles, (val) => {
    if (val && !indicatorAnimReady.value) {
      runAfterFramePaint(() => {
        indicatorAnimReady.value = true;
      });
    }
  });

  function addLinkRef(index, el) {
    if (el) {
      linkRefs.value[index] = el;
    }
  }
</script>
