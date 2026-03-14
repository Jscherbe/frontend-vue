<template>
  <div class="scroll-slider" :class="resolvedModifiers">
    <UluOverflowScroller 
      class="scroll-slider__control-context" 
      controlsClass="scroll-slider__controls"
      :controls="controls"
      :scrollAmount="scrollAmount"
      :scrollBehavior="scrollBehavior"
    >
      <template #default="{ setTrackRef, onScroll }">
        <div class="scroll-slider__track-crop">
          <ul 
            class="scroll-slider__track" 
            :ref="el => { trackRef = el; setTrackRef(el); }"
            @scroll="onScroll"
          >
            <li v-if="emptySlides" class="scroll-slider__slide scroll-slider__slide--empty" role="presentation">&nbsp;</li>
            <li 
              v-for="(item, index) in items" 
              :key="index"
              class="scroll-slider__slide"
              :ref="el => setSlideRef(el, index)"
            >
              <slot 
                name="slide" 
                :item="item" 
                :index="index"
                :isIntersecting="intersectingIndexes.includes(index)"
              ></slot>
            </li>
            <li v-if="emptySlides" class="scroll-slider__slide scroll-slider__slide--empty" role="presentation">&nbsp;</li>
          </ul>
        </div>
      </template>

      <template v-if="$slots.previous" #previous>
        <slot name="previous"></slot>
      </template>
      <template v-if="$slots.next" #next>
        <slot name="next"></slot>
      </template>
    </UluOverflowScroller>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, nextTick } from 'vue';
import { useModifiers } from '../../composables/useModifiers.js';
import UluOverflowScroller from './UluOverflowScroller.vue';

const props = defineProps({
  /**
   * Array of items to render.
   */
  items: {
    type: Array,
    required: true,
  },
  /**
   * Show previous/next controls.
   */
  controls: {
    type: Boolean,
    default: true,
  },
  /**
   * Scroll amount (in pixels) for the next/prev buttons.
   * If not provided, it defaults to the visible width of the track.
   */
  scrollAmount: {
    type: [Number, String],
    default: 'auto',
  },
  /**
   * Scroll behavior ('smooth' or 'auto').
   */
  scrollBehavior: {
    type: String,
    default: 'smooth',
  },
  /**
   * Include empty start and end slides (needed for correct margin collapsing with some styles).
   */
  emptySlides: {
    type: Boolean,
    default: true,
  },
  /**
   * Base class modifiers.
   */
  modifiers: [String, Array],
});

const { resolvedModifiers } = useModifiers({ props, baseClass: 'scroll-slider' });

const trackRef = ref(null);
const slideRefs = ref([]);
const intersectingIndexes = ref([]);

let observer = null;

const setSlideRef = (el, index) => {
  if (el) {
    slideRefs.value[index] = el;
  }
};

onMounted(() => {
  nextTick(() => {
    // Setup IntersectionObserver to track visible slides
    observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const index = slideRefs.value.findIndex(el => el === entry.target);
        if (index > -1) {
          if (entry.isIntersecting) {
            if (!intersectingIndexes.value.includes(index)) {
              intersectingIndexes.value.push(index);
            }
          } else {
            intersectingIndexes.value = intersectingIndexes.value.filter(i => i !== index);
          }
        }
      });
    }, {
      root: trackRef.value,
      threshold: 0.1 // 10% visible is considered intersecting
    });

    slideRefs.value.forEach(el => {
      if (el) observer.observe(el);
    });
  });
});

onBeforeUnmount(() => {
  if (observer) {
    observer.disconnect();
  }
});
</script>
