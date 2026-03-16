<template>
  <UluSlider 
    class="image-slider" 
    :class="resolvedModifiers"
    :items="images"
    v-bind="sliderProps"
    @change="onSlideChange"
  >
    <!-- Main Slide Implementation -->
    <template #slide="{ item, active, upcoming, index }">
      <div class="image-slider__image-wrapper">
        <slot 
          name="image" 
          :image="item" 
          :active="active" 
          :upcoming="upcoming" 
          :index="index"
        >
          <!-- Wrap in CaptionedFigure if a caption exists, otherwise just a div -->
          <component 
            :is="item.caption ? UluCaptionedFigure : 'div'"
            :caption="item.caption"
            :modifiers="item.captionModifiers"
            class="image-slider__figure"
          >
            <!-- Default standard image with conditional lazy loading -->
            <UluImage 
              v-if="active || upcoming || hasLoaded(index)"
              v-bind="item"
              class="image-slider__image"
              @load="markLoaded(index)"
            />
          </component>
        </slot>
      </div>
    </template>

    <!-- Custom Thumbnail Navigation -->
    <template #nav="{ item, active, index }">
      <div 
        class="image-slider__thumbnail-wrapper"
        :ref="el => setNavRef(el, index)"
      >
        <slot name="thumbnail" :image="item" :active="active" :index="index">
          <UluImage 
            :src="item.thumb || item.src" 
            :alt="`Thumbnail for ${item.alt || 'slide ' + (index + 1)}`"
            class="image-slider__thumbnail"
          />
        </slot>
      </div>
    </template>
  </UluSlider>
</template>

<script setup>
  import { ref } from 'vue';
  import { useModifiers } from '../../composables/useModifiers.js';
  import UluSlider from './UluSlider.vue';
  import UluImage from './UluImage.vue';
  import UluCaptionedFigure from './UluCaptionedFigure.vue';

  const props = defineProps({
    /**
     * Array of image objects. 
     * Expected format: { src: String, alt?: String, thumb?: String, caption?: String, captionModifiers?: String|Array, sources?: Array, ... }
     */
    images: {
      type: Array,
      required: true,
    },
    /**
     * Base class modifiers.
     */
    modifiers: [String, Array],
    /**
     * Allow passing any other standard UluSlider props (like autoplay, transition, etc).
     */
    sliderProps: {
      type: Object,
      default: () => ({})
    }
  });

  const { resolvedModifiers } = useModifiers({ props, baseClass: 'image-slider' });

  // Track which images have already been loaded so we don't re-mount the DOM node 
  // and cause a flicker if the user navigates away and comes back.
  const loadedIndexes = ref(new Set());

  const hasLoaded = (index) => loadedIndexes.value.has(index);

  const markLoaded = (index) => {
    loadedIndexes.value.add(index);
  };

  // Thumbnail navigation scrolling logic
  const navRefs = ref([]);

  const setNavRef = (el, index) => {
    if (el) {
      navRefs.value[index] = el;
    }
  };

  const onSlideChange = ({ index }) => {
    const navItem = navRefs.value[index];
    if (!navItem) return;

    // Find the closest scrollable container for the navigation items
    const navContainer = navItem.closest('.Slider__nav');
    if (!navContainer) return;

    const { offsetWidth, scrollLeft: left } = navContainer;
    const { offsetLeft, offsetWidth: navWidth } = navItem;
    
    const right = left + offsetWidth;
    const navRight = offsetLeft + navWidth;
    let scrollAmount = null;

    // Calculate if the thumbnail is out of bounds on either the left or right side
    if (navRight > right) {
      scrollAmount = left + (navRight - right);
    } else if (offsetLeft < left) {
      scrollAmount = offsetLeft;
    }

    if (scrollAmount !== null) {
      navContainer.scrollTo({ left: scrollAmount, top: 0, behavior: "smooth" });
    }
  };
</script>
