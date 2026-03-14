<template>
  <component :is="element">
    <slot :setTrackRef="setTrackRef" :onScroll="onScroll" :canScrollLeft="canScrollLeft" :canScrollRight="canScrollRight"></slot>
    
    <ul v-if="controls" :class="[`${namespace}__controls`, controlsClass]">
      <li :class="[`${namespace}__controls-item`, `${namespace}__controls-item--previous`, { [`${namespace}__controls-item--disabled`]: !canScrollLeft }]">
        <button 
          :class="[`${namespace}__control-button`, `${namespace}__control-button--previous`, ...buttonClasses]"
          aria-label="Scroll Left"
          @click="scrollLeft"
          :disabled="!canScrollLeft"
        >
          <slot name="previous">
            <span class="hidden-visually">Previous</span>
            <UluIcon :icon="iconClassPrevious" :class="`${namespace}__control-icon`" />
          </slot>
        </button>
      </li>
      <li :class="[`${namespace}__controls-item`, `${namespace}__controls-item--next`, { [`${namespace}__controls-item--disabled`]: !canScrollRight }]">
        <button 
          :class="[`${namespace}__control-button`, `${namespace}__control-button--next`, ...buttonClasses]"
          aria-label="Scroll Right"
          @click="scrollRight"
          :disabled="!canScrollRight"
        >
          <slot name="next">
            <span class="hidden-visually">Next</span>
            <UluIcon :icon="iconClassNext" :class="`${namespace}__control-icon`" />
          </slot>
        </button>
      </li>
    </ul>
  </component>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, nextTick } from 'vue';
import UluIcon from './UluIcon.vue';

const props = defineProps({
  /**
   * The HTML element to use as the root wrapper.
   */
  element: { type: String, default: 'div' },
  /**
   * Show previous/next controls.
   */
  controls: { type: Boolean, default: true },
  /**
   * Scroll amount (in pixels) for the next/prev buttons.
   * If 'auto', it scrolls by the visible width of the track.
   */
  scrollAmount: { type: [Number, String], default: 'auto' },
  /**
   * Scroll behavior ('smooth' or 'auto').
   */
  scrollBehavior: { type: String, default: 'smooth' },
  /**
   * CSS class namespace for controls.
   */
  namespace: { type: String, default: 'OverflowScroller' },
  /**
   * Additional class to apply to the controls container.
   */
  controlsClass: { type: String, default: '' },
  /**
   * Button classes to apply.
   */
  buttonClasses: { type: Array, default: () => ['button', 'button--icon'] },
  /**
   * Icon definition for previous button.
   */
  iconClassPrevious: { type: String, default: 'type:previous' },
  /**
   * Icon definition for next button.
   */
  iconClassNext: { type: String, default: 'type:next' },
  /**
   * Offset threshold to consider "at start" (disables previous button).
   */
  offsetStart: { type: Number, default: 10 },
  /**
   * Offset threshold to consider "at end" (disables next button).
   */
  offsetEnd: { type: Number, default: 10 }
});

const trackRef = ref(null);
const canScrollLeft = ref(false);
const canScrollRight = ref(false);

const setTrackRef = (el) => {
  trackRef.value = el;
};

const checkScrollability = () => {
  if (!trackRef.value) return;
  const { scrollLeft, scrollWidth, clientWidth } = trackRef.value;
  canScrollLeft.value = scrollLeft > props.offsetStart;
  canScrollRight.value = Math.ceil(scrollLeft + clientWidth) < (scrollWidth - props.offsetEnd);
};

const onScroll = () => {
  checkScrollability();
};

const scrollByAmount = (direction) => {
  if (!trackRef.value) return;
  const { clientWidth } = trackRef.value;
  let amount = props.scrollAmount;
  if (amount === 'auto') {
    amount = clientWidth;
  }
  
  trackRef.value.scrollBy({
    left: direction === 'right' ? amount : -amount,
    behavior: props.scrollBehavior
  });
};

const scrollLeft = () => scrollByAmount('left');
const scrollRight = () => scrollByAmount('right');

onMounted(() => {
  nextTick(() => {
    checkScrollability();
  });
  window.addEventListener('resize', checkScrollability);
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', checkScrollability);
});
</script>
