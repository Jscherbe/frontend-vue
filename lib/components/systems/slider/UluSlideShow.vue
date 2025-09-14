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

<script>
  import UluIcon from "../../elements/UluIcon.vue";
  export default {
    name: 'SlideShow',
    emits: ['slide-change'],
    components: {
      UluIcon
    },
    props: {
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
    },
    data() {
      return {
        slides: this.createSlides()
      };
    },
    computed: {
      canScrollRight() {
        const { slides } = this;
        return !slides[slides.length - 1].active;
      },
      canScrollLeft() {
        const { slides } = this;
        return !slides[0].active;
      }
    },
    watch: {
      'items.length'() {
        this.slides = this.createSlides();
        this.$nextTick(() => {
          this.observeSlides();
        });
      }
    },
    methods: {
      /**
       * Creates the internal array of slides based on user's passed items
       */
      createSlides() {
        return this.items.map(item => ({
          element: null,
          active: false,
          item
        }));
      },
      /**
       * Find the corresponding slide data by slide element
       */
      getSlideByElement(el) {
        return this.slides.find(({ element }) => el === element);
      },
      /**
       * Provides scroll measurements
       */
      getScrollData() {
        const { scrollLeft, offsetWidth, scrollWidth } = this.$refs.track;
        return { scrollLeft, offsetWidth, scrollWidth };
      },
      /**
       * Determines the amount to scroll the track
       */
      resolveAmount(dir) {
        const isNext = dir === "next";
        const { scrollAmount: amount } = this;
        const { scrollLeft, offsetWidth } = this.getScrollData();

        if (typeof amount === "function") {
          // Function can be setup by user (ie. scrolling by visible items for example)
          return amount(dir, this.$refs);
        } else if (typeof amount === "number") {
          return isNext ? scrollLeft + amount : scrollLeft - amount;
        } else {
          // No amount set (default 100% scrollable area shift)
          return isNext ? scrollLeft + offsetWidth : scrollLeft - offsetWidth;
        }
      },
      /**
       * Scroll the track to a specified point 
       */
      scrollTo(left, behavior) {
        this.$refs.track.scrollTo({ left, top: 0, behavior });
      },
      /**
       * Scroll to specific index
       * @param {Number} index Slide index
       */
      to(index) {
        const slide = this.slides[index];
        const { track } = this.$refs;
        if (slide) {
          let amount = slide.element.offsetLeft;
          const end = () => {
            slide.element.focus(this.focusOptions);
            track.removeEventListener('scrollend', end);
          }
          track.addEventListener('scrollend', end);
          this.scrollTo(amount, this.scrollBehaviorNav);
        }
      },
      /**
       * Goto to next slide
       */
      next() {
        const amount = this.resolveAmount("next");
        this.scrollTo(amount, this.scrollBehaviorControl);
      },
      /**
       * Goto to previous slide
       */
      previous() {
        const amount = this.resolveAmount("previous");
        this.scrollTo(amount, this.scrollBehaviorControl);
      },
      /**
       * Sets up a new observer to watch the slides visibility (within track)
       */
      createObserver() {
        const { observerOptions } = this;
        const { track, nav } = this.$refs;
        // Observer callback, basically just sets active state for a given slide
        // - isIntersecting will change when the element enters and leaves
        const onObserve = (entries) => {
          entries.forEach((entry) => {
            
            this.$nextTick(() => {
              const slide = this.getSlideByElement(entry.target);
              slide.active = entry.isIntersecting;
              this.$emit('slide-change', { slide, track, nav });
            });
          });
        };
        // Add non-reactive prop for removal and changes to targets
        this.observer = new IntersectionObserver(onObserve, {
          root: track,
          ...observerOptions
        });
      },
      /**
       * Add all slide elements as targets in observer
       */
      observeSlides() {
        const { observer, slides } = this;
        observer.disconnect();
        slides.forEach(({ element }) => {
          if (element) {
            observer.observe(element);
          }
        });
      },
      /**
       * Remove observer and it's internal DOM references (GC)
       */
      destroyObserver() {
        this.observer.disconnect();
        this.observer = null;
      },
    },
    mounted() {
      this.createObserver();
      this.observeSlides();
    },
    beforeUnmount() {
      this.destroyObserver();
    },
  }
</script>

<!-- 
  Old Notes: 
  - How to get around access the elements of the children in slots
    - Component element is not available
    - Hacks
      - Add hidden element and use nextSibling (stack overflow suggestion)
        - Don't like this. We could always traverse dom from the parent track ref anyways
          but I'm trying to avoid that
    - Ideas
    - Watch the slot components and use 
-->