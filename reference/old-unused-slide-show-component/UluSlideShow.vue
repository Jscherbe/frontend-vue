<!-- 
  Notes: 
    - Could use anchor links instead of buttons for the nav?
    - How to solve the scrollability with scroll snap
      - Edge detection isn't reliable (scroll snap may  prevent the element from reaching the edge of it's scroll)
      - A better technique would be to check if there are any other items that could be scrolled to
        - Could use active state to determine scrollability?
    - This component is passed slide components in the #default slot
      - It uses the default slot property as the reactive var for slides
      - It renders the slides from the slot using <component> instead <slot>
        - Since we know they are all component instances we can use <component> to render the vnode
          - That way no hacks for getting slide DOM references, count, etc
          - Allows us to collest a ref array of all slides
          - Keeps the UX of the component simple, no need for hacks like passing props and asking user of component to set things like active
          - TODO not sure if this is ok to do, what happens with props? User can pass props, we can pass props
    - Should we debounce the scroll or throttle it
      - Throttling would allow active items to happen during scroll
        - Going to try this first
      - Debounce would wait until scrolling ends
  Todo:
  [ ] - Setup active state in nav (need to think this through)

-->
<template>
  <div class="slideshow">
    <div class="slideshow__control-context" ref="context">
      <div class="slideshow__track-crop" ref="crop">
        <ul class="slideshow__track" ref="track">
          <li 
            v-for="(slide, index) in slides"
            class="slideshow__slide" 
            :class="{ 'is-active' : slide.active }"
            :key="index"
            :tabindex="slideFocusable ? '0' : '-1'"
            :ref="el => { slide.element = el }"
          >
            <slot 
              name="slide"
              :item="slide.item" 
              :index="index"
            />
          </li>
        </ul>
      </div>
      <ul class="slideshow__controls">
        <li class="slideshow__controls-item slideshow__controls-item--previous">
          <button 
            class="slideshow__control-button slideshow__control-button--previous" 
            aria-label="Scroll Right"
            @click="previous"
            :disabled="!canScrollLeft"
          >
            <UluIcon class="slideshow__control-icon" icon="type:previous"/>
          </button>
        </li>
        <li class="slideshow__controls-item slideshow__controls-item--next">
          <button 
            class="slideshow__control-button slideshow__control-button--next" 
            aria-label="Scroll Left"
            @click="next"
            :disabled="!canScrollRight"
          >
            <UluIcon class="slideshow__control-icon" icon="type:next" />
          </button>
        </li>
      </ul>
    </div>
    <ul 
      v-if="!noNav" 
      class="slideshow__nav"
      ref="nav"
    >
      <li 
        class="slideshow__nav-item" 
        v-for="(slide, index) in slides" 
        :class="{ 'is-active' : slide.active }"
        :ref="el => { slide.navElement = el }"
        :key="index"
      >
        <button 
          class="slideshow__nav-button" 
          :class="{ 'is-active' : slide.active }"
          @click="to(index)"
        >
          <slot 
            name="nav" 
            :item="slide.item" 
            :index="index" 
            :active="slide.active"
          >
            <span class="hidden-visually">Item {{ index + 1 }}</span>
          </slot>
        </button>
      </li>
    </ul>
  </div>
</template>

<script setup>
  import { ref, computed, watch, onMounted, onBeforeUnmount, nextTick } from "vue";
  import UluIcon from "../../elements/UluIcon.vue";

  const emit = defineEmits(['slide-change']);

  const props = defineProps({
    /**
     * Should slides be focusable by tab key
     */
    slideFocusable: Boolean,
    /**
     * Setting for element.focus() when navigating to() a specific slide
     */
    focusOptions: {
      type: Object,
      default: () => ({
        preventScroll: true,
        focusVisible: false
      })
    },
    /**
     * Array of slide items (data)
     * - Use slot (#slide) to template
     */
    items: Array,
    /**
     * Slideshow without a nav
     */
    noNav: Boolean,
    /**
     * Allow user to change the scroll behavior when a slide is navigated to()
     */
    scrollBehaviorNav: {
      type: String,
      default: "instant"
    },
    /**
     * Allow user to change the scroll behavior when a slide is navigated via next/prev
     */
    scrollBehaviorControl: {
      type: String,
      default: "smooth"
    },
    /**
     * Observe 
     */
    observerOptions: {
      type: Object,
      default: () => ({
        threshhold: 0,
        rootMargin: "-50% 0px"
      })
    },
    /**
     * The intial slide index to use for active slide (zero based)
     */
    initialActive: {
      type: Number,
      default: 0
    },
    /**
     * Allow user to control scroll amount (element.scrollTo) for prev/next controls
     * - For future scroll implementations (like ulu scroll-slider for cards, etc)
     * - Function is passed (direction, DomRefs)
     * - Number is passed directly
     */
    scrollAmount: [Number, Function],
  });

  const context = ref(null);
  const crop = ref(null);
  const track = ref(null);
  const nav = ref(null);

  /**
   * Creates the internal array of slides based on user's passed items
   */
  const createSlides = () => {
    return props.items.map(item => ({
      element: null,
      active: false,
      item
    }));
  };

  const slides = ref(createSlides());
  let observer = null;

  const canScrollRight = computed(() => {
    return !slides.value[slides.value.length - 1].active;
  });

  const canScrollLeft = computed(() => {
    return !slides.value[0].active;
  });

  watch(() => props.items?.length, () => {
    slides.value = createSlides();
    nextTick(() => {
      observeSlides();
    });
  });

  /**
   * Find the corresponding slide data by slide element
   */
  const getSlideByElement = (el) => {
    return slides.value.find(({ element }) => el === element);
  };

  /**
   * Provides scroll measurements
   */
  const getScrollData = () => {
    if (!track.value) return { scrollLeft: 0, offsetWidth: 0, scrollWidth: 0 };
    const { scrollLeft, offsetWidth, scrollWidth } = track.value;
    return { scrollLeft, offsetWidth, scrollWidth };
  };

  /**
   * Determines the amount to scroll the track
   */
  const resolveAmount = (dir) => {
    const isNext = dir === "next";
    const amount = props.scrollAmount;
    const { scrollLeft, offsetWidth } = getScrollData();

    if (typeof amount === "function") {
      // Function can be setup by user (ie. scrolling by visible items for example)
      return amount(dir, { context, crop, track, nav });
    } else if (typeof amount === "number") {
      return isNext ? scrollLeft + amount : scrollLeft - amount;
    } else {
      // No amount set (default 100% scrollable area shift)
      return isNext ? scrollLeft + offsetWidth : scrollLeft - offsetWidth;
    }
  };

  /**
   * Scroll the track to a specified point 
   */
  const scrollTo = (left, behavior) => {
    if (track.value) {
      track.value.scrollTo({ left, top: 0, behavior });
    }
  };

  /**
   * Scroll to specific index
   * @param {Number} index Slide index
   */
  const to = (index) => {
    const slide = slides.value[index];
    if (slide && track.value) {
      let amount = slide.element.offsetLeft;
      const end = () => {
        slide.element.focus(props.focusOptions);
        track.value.removeEventListener('scrollend', end);
      }
      track.value.addEventListener('scrollend', end);
      scrollTo(amount, props.scrollBehaviorNav);
    }
  };

  /**
   * Goto to next slide
   */
  const next = () => {
    const amount = resolveAmount("next");
    scrollTo(amount, props.scrollBehaviorControl);
  };

  /**
   * Goto to previous slide
   */
  const previous = () => {
    const amount = resolveAmount("previous");
    scrollTo(amount, props.scrollBehaviorControl);
  };

  /**
   * Sets up a new observer to watch the slides visibility (within track)
   */
  const createObserver = () => {
    // Observer callback, basically just sets active state for a given slide
    // - isIntersecting will change when the element enters and leaves
    const onObserve = (entries) => {
      entries.forEach((entry) => {
        nextTick(() => {
          const slide = getSlideByElement(entry.target);
          if (slide) {
            slide.active = entry.isIntersecting;
            emit('slide-change', { slide, track: track.value, nav: nav.value });
          }
        });
      });
    };
    // Add non-reactive prop for removal and changes to targets
    if (track.value) {
      observer = new IntersectionObserver(onObserve, {
        root: track.value,
        ...props.observerOptions
      });
    }
  };

  /**
   * Add all slide elements as targets in observer
   */
  const observeSlides = () => {
    if (observer) {
      observer.disconnect();
      slides.value.forEach(({ element }) => {
        if (element) {
          observer.observe(element);
        }
      });
    }
  };

  /**
   * Remove observer and it's internal DOM references (GC)
   */
  const destroyObserver = () => {
    if (observer) {
      observer.disconnect();
      observer = null;
    }
  };

  onMounted(() => {
    createObserver();
    observeSlides();
  });

  onBeforeUnmount(() => {
    destroyObserver();
  });
</script>