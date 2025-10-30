<template>
  <component 
    v-if="sections && sections.length" 
    :is="element"
    class="scroll-anchors__nav scroll-anchors__nav--animated"
  >
    <ul class="scroll-anchors__rail">
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
      class="scroll-anchors__indicator"
      :class="{
        'scroll-anchors__indicator--can-transition' : indicatorAnimReady
      }"
      ref="indicator"
      :style="{
        opacity: indicatorStyles ? '1' : '0',
        transform: `translateY(${ indicatorStyles ? indicatorStyles.y : 0 }px)`,
        height: `${ indicatorStyles ? indicatorStyles.height : 0 }px`,
      }"
    ></div>
  </component>
</template>

<script setup>
  import { ref, computed, watch } from 'vue';
  import { runAfterFramePaint } from "@ulu/utils/browser/performance.js";
  import { useScrollAnchorSections } from './useScrollAnchorSections.js';

  defineProps({
    /**
     * The HTML element to use for the navigation root
     */
    element: {
      type: String,
      default: "nav"
    },
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
    return {
      y: offsetTop,
      height: offsetHeight,
    };
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

<style lang="scss">
  // User can override these styles
  // - Think this is better than props/etc 
  //   - Refactored from props to just plain css to be overridden
  .scroll-anchors__nav {
    position: relative;
  }
  .scroll-anchors__rail {
    border-left: 3px solid rgb(220, 220, 220);
    padding-left: 1rem;
  }
  .scroll-anchors__indicator {
    position: absolute;
    top: 0;
    left: 0;
    width: 3px;
    background-color: black;
  }
  .scroll-anchors__indicator--can-transition {
    transition-property: height, transform;
    transition-timing-function: ease-in-out;
    transition-duration: 250ms;
  }
</style>
