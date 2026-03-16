<template>
  <div 
    class="slider" 
    :class="[resolvedModifiers, { 'slider--transitioning': isTransitioning }]"
    @mouseenter="pauseAutoplay"
    @mouseleave="resumeAutoplay"
    @focusin="pauseAutoplay"
    @focusout="resumeAutoplay"
  >
    <div class="slider__control-context">
      <div class="slider__track-crop" style="overflow: hidden;">
        <ul 
          class="slider__track" 
          :id="trackId"
          ref="trackRef"
          style="display: flex; list-style: none; position: relative; margin: 0; padding: 0;"
          :inert="isTransitioning"
          :aria-live="autoplayTimer ? 'off' : 'polite'"
        >
          <li 
            v-for="(item, index) in items" 
            :key="index"
            :id="getSlideId(index)"
            class="slider__slide"
            :class="{ 'is-active': index === activeIndex }"
            style="flex: 0 0 100%; width: 100%; visibility: hidden;"
            tabindex="-1"
            role="group"
            aria-roledescription="slide"
            :aria-label="`Slide ${index + 1} of ${items.length}`"
            :inert="!isTransitioning && index !== activeIndex"
            :aria-hidden="index !== activeIndex"
            :ref="el => setSlideRef(el, index)"
          >
            <slot 
              name="slide" 
              :item="item" 
              :index="index" 
              :active="index === activeIndex" 
              :upcoming="isUpcoming(index)" 
            ></slot>
          </li>
        </ul>
      </div>
      
      <ul v-if="controls" class="Slider__controls">
        <li class="Slider__controls-item Slider__controls-item--previous">
          <button 
            class="Slider__control-button Slider__control-button--previous button button--icon"
            aria-label="Previous Slide"
            :aria-controls="trackId"
            @click="previous('previous')"
            :disabled="!loop && activeIndex === 0"
          >
            <slot name="previous">
              <UluIcon icon="type:previous" class="Slider__control-icon" />
            </slot>
          </button>
        </li>
        <li class="Slider__controls-item Slider__controls-item--next">
          <button 
            class="Slider__control-button Slider__control-button--next button button--icon"
            aria-label="Next Slide"
            :aria-controls="trackId"
            @click="next('next')"
            :disabled="!loop && activeIndex === props.items.length - 1"
          >
            <slot name="next">
              <UluIcon icon="type:next" class="Slider__control-icon" />
            </slot>
          </button>
        </li>
      </ul>
    </div>

    <ul v-if="nav" class="Slider__nav">
      <li 
        v-for="(item, index) in items" 
        :key="index"
        class="Slider__nav-item"
      >
        <button 
          class="Slider__nav-button"
          :class="{ 'Slider__nav-button--active': index === activeIndex }"
          @click="goto(index, 'nav')"
          :aria-controls="getSlideId(index)"
          :aria-label="`Go to slide ${index + 1}`"
          :aria-current="index === activeIndex ? 'true' : null"
        >
          <slot name="nav" :item="item" :index="index" :active="index === activeIndex">
            <span class="hidden-visually">Item {{ index + 1 }}</span>
          </slot>
        </button>
      </li>
    </ul>
  </div>
</template>

<script setup>
  import { ref, computed, onMounted, onBeforeUnmount, nextTick, watch } from 'vue';
  import { useModifiers } from '../../composables/useModifiers.js';
  import { newId } from '../../utils/dom.js';
  import UluIcon from '../elements/UluIcon.vue';

  const props = defineProps({
    /**
     * Array of slide items.
     */
    items: {
      type: Array,
      required: true,
    },
    /**
     * Transition type: 'slide', 'fade', or 'none'.
     */
    transition: {
      type: String,
      default: 'slide',
      validator: (val) => ['slide', 'fade', 'none'].includes(val)
    },
    /**
     * Transition duration in milliseconds.
     */
    duration: {
      type: Number,
      default: 700,
    },
    /**
     * Easing function for the transition.
     */
    timingFunction: {
      type: String,
      default: 'ease-in-out',
    },
    /**
     * Enable infinite looping.
     */
    loop: {
      type: Boolean,
      default: true,
    },
    /**
     * Show dot navigation.
     */
    nav: {
      type: Boolean,
      default: true,
    },
    /**
     * Show previous/next controls.
     */
    controls: {
      type: Boolean,
      default: true,
    },
    /**
     * Autoplay duration in ms. If > 0, autoplay is enabled.
     */
    autoplay: {
      type: Number,
      default: 0,
    },
    /**
     * Automatically switch to 'fade' transition if OS prefers reduced motion.
     */
    reduceMotionFallback: {
      type: Boolean,
      default: true,
    },
    /**
     * Setting for element.focus() when navigating to a specific slide.
     */
    focusOptions: {
      type: Object,
      default: () => ({
        preventScroll: true,
        focusVisible: false
      })
    },
    /**
     * Base class modifiers.
     */
    modifiers: [String, Array],
  });

  const emit = defineEmits(['change']);

  const trackId = newId('ulu-slider-track');
  const getSlideId = (index) => `${trackId}-slide-${index}`;

  const trackRef = ref(null);
  const slideRefs = ref([]);
  const activeIndex = ref(0);
  const isTransitioning = ref(false);
  const prefersReducedMotion = ref(false);

  const { resolvedModifiers } = useModifiers({ props, baseClass: 'slider' });

  const actualTransition = computed(() => {
    if (props.transition === 'none') return 'none';
    if (props.reduceMotionFallback && prefersReducedMotion.value) return 'fade';
    return props.transition;
  });

  const setSlideRef = (el, index) => {
    if (el) {
      slideRefs.value[index] = el;
    }
  };

  const isUpcoming = (index) => {
    if (!props.items || props.items.length === 0) return false;
    const nextIdx = activeIndex.value === props.items.length - 1 ? 0 : activeIndex.value + 1;
    const prevIdx = activeIndex.value === 0 ? props.items.length - 1 : activeIndex.value - 1;
    return index === nextIdx || index === prevIdx;
  };

  // --- Autoplay Logic ---
  const autoplayTimer = ref(null);
  const startAutoplay = () => {
    if (props.autoplay > 0) {
      stopAutoplay();
      autoplayTimer.value = setInterval(() => {
        next('autoplay');
      }, props.autoplay);
    }
  };
  const stopAutoplay = () => {
    if (autoplayTimer.value) {
      clearInterval(autoplayTimer.value);
      autoplayTimer.value = null;
    }
  };
  const pauseAutoplay = () => stopAutoplay();
  const resumeAutoplay = () => startAutoplay();

  watch(() => props.autoplay, () => {
    startAutoplay();
  });

  // --- Imperative DOM Helpers ---
  const trackTransformX = ref(0);
  const currentDuration = ref(0);
  const orderedIndex = ref(null);
  const fadedIndexes = ref([]);
  const showAllSlides = ref(false);

  const setVisibility = (activeIdx, showAll) => {
    slideRefs.value.forEach((el, index) => {
      if (!el) return;
      if (showAll) {
        el.style.visibility = 'visible';
      } else {
        el.style.visibility = index === activeIdx ? 'visible' : 'hidden';
      }
    });
  };

  const setTrackTransform = (x, duration) => {
    const track = trackRef.value;
    if (!track) return;
    track.style.transitionProperty = 'transform';
    track.style.transitionDuration = `${duration}ms`;
    track.style.transitionTimingFunction = props.timingFunction;
    track.style.transform = `translateX(-${x}px)`;
  };

  const setSlideOpacity = (index, opacity, duration) => {
    const el = slideRefs.value[index];
    if (!el) return;
    el.style.transitionProperty = 'opacity';
    el.style.transitionDuration = `${duration}ms`;
    el.style.transitionTimingFunction = props.timingFunction;
    el.style.opacity = opacity;
  };

  const setSlideOrder = (index, order) => {
    const el = slideRefs.value[index];
    if (!el) return;
    el.style.order = order;
  };

  const getSlideOffset = (index) => {
    return slideRefs.value[index]?.offsetLeft || 0;
  };

  const ensureTransitionEnds = (element, duration) => {
    return new Promise(resolve => {
      if (duration <= 0 || !element) {
        resolve();
        return;
      }
      
      let timeoutIdStart = null;
      let timeoutIdEnd = null;

      const onComplete = () => {
        clearTimeout(timeoutIdStart);
        clearTimeout(timeoutIdEnd);
        element.removeEventListener('transitionrun', onStart);
        element.removeEventListener('transitionend', onComplete);
        element.removeEventListener('transitioncancel', onComplete);
        resolve();
      };

      const onStart = () => {
        clearTimeout(timeoutIdStart);
        timeoutIdEnd = setTimeout(onComplete, duration + 500);
      };

      element.addEventListener('transitionrun', onStart, { once: true });
      element.addEventListener('transitionend', onComplete, { once: true });
      element.addEventListener('transitioncancel', onComplete, { once: true });
      
      // Fallback if event doesn't fire
      timeoutIdStart = setTimeout(onComplete, duration + 500);
    });
  };

  // --- Navigation Logic ---

  const goto = async (index, triggerType = 'nav') => {
    if (index === activeIndex.value || isTransitioning.value || !props.items || props.items.length === 0) return;

    isTransitioning.value = true;
    stopAutoplay();

    const oldIndex = activeIndex.value;
    const count = props.items.length;
    const reverse = triggerType === 'previous';
    const lastIndex = count - 1;
    const lastToFirst = index === 0 && oldIndex === lastIndex;
    const firstToLast = index === lastIndex && oldIndex === 0;

    const transitionType = actualTransition.value;

    if (transitionType === 'slide') {
      let switchIndex = null;
      let durationMultiplier = 1;

      if (oldIndex !== null && !lastToFirst && !firstToLast) {
        durationMultiplier = Math.abs(oldIndex - index);
      }

      if (count < 3) {
        if (lastToFirst && !reverse) {
          switchIndex = oldIndex;
        } else if (firstToLast) {
          switchIndex = reverse ? index : oldIndex;
        }
      } else {
        if (lastToFirst) {
          switchIndex = oldIndex;
        } else if (firstToLast) {
          switchIndex = index;
        }
      }

      setVisibility(null, true);

      if (switchIndex !== null) {
        setSlideOrder(switchIndex, '-1');
        setTrackTransform(lastToFirst ? 0 : getSlideOffset(oldIndex), 0);
      }

      const duration = props.duration * Math.min(durationMultiplier, count);
      
      trackRef.value?.getBoundingClientRect();

      setTrackTransform(getSlideOffset(index), duration);
      
      await ensureTransitionEnds(trackRef.value, duration);

      if (switchIndex !== null) {
        setSlideOrder(switchIndex, '0');
        setTrackTransform(getSlideOffset(index), 0);
        
        await nextTick();
        trackRef.value?.getBoundingClientRect();
      }

      setVisibility(index, false);

    } else if (transitionType === 'fade') {
      const duration = props.duration;
      
      setVisibility(null, true);

      if (oldIndex !== null) {
        setSlideOpacity(oldIndex, '0', duration);
        // Wait for the old slide to fade out completely
        await ensureTransitionEnds(slideRefs.value[oldIndex], duration);
        setSlideOrder(oldIndex, '0');
      }
      
      // Reset track if we previously came from a 'slide' transition
      setTrackTransform(0, 0);

      setSlideOrder(index, '-1');
      slideRefs.value[index]?.getBoundingClientRect(); // Force reflow so it knows it's at opacity 0

      setSlideOpacity(index, '1', duration);
      await ensureTransitionEnds(slideRefs.value[index], duration);
      
      setVisibility(index, false);

    } else {
      // None
      setVisibility(null, true);
      if (oldIndex !== null) {
        setSlideOrder(oldIndex, '0');
        setSlideOpacity(oldIndex, '1', 0);
      }
      setTrackTransform(0, 0);
      setSlideOrder(index, '-1');
      setSlideOpacity(index, '1', 0);
      setVisibility(index, false);
    }

    activeIndex.value = index;
    isTransitioning.value = false;
    
    if (triggerType !== 'init') {
      const targetSlide = slideRefs.value[index];
      if (targetSlide && targetSlide.focus) {
        targetSlide.focus(props.focusOptions);
      }
      emit('change', { index, item: props.items[index] });
    }

    startAutoplay();
  };

  const move = (direction) => {
    if (!props.items) return;
    const count = props.items.length;
    if (count === 0) return;
    
    const isNext = direction === 'next';
    const targetIndex = isNext ? activeIndex.value + 1 : activeIndex.value - 1;
    
    if (targetIndex > count - 1) {
      if (props.loop) goto(0, direction);
    } else if (targetIndex < 0) {
      if (props.loop) goto(count - 1, direction);
    } else {
      goto(targetIndex, direction);
    }
  };

  const next = () => move('next');
  const previous = () => move('previous');

  onMounted(() => {
    if (typeof window !== 'undefined') {
      prefersReducedMotion.value = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    }
    
    // Initialize styles based on transition type
    nextTick(() => {
      const isSlide = actualTransition.value === 'slide';
      
      slideRefs.value.forEach((el, index) => {
        if (!el) return;
        el.style.visibility = index === activeIndex.value ? 'visible' : 'hidden';
        if (!isSlide) {
          el.style.opacity = index === activeIndex.value ? '1' : '0';
          el.style.order = index === activeIndex.value ? '-1' : '0';
        } else {
          el.style.opacity = '1';
          el.style.order = '0';
        }
      });

      if (isSlide) {
        setTrackTransform(getSlideOffset(activeIndex.value), 0);
      } else {
        setTrackTransform(0, 0);
      }

      startAutoplay();
    });
  });

  onBeforeUnmount(() => {
    stopAutoplay();
  });
</script>