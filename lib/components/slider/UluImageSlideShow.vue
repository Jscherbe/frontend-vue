<!-- 
  Note: This is the image implementation of SlideShow 
  Notes:
    - Should the images resize to fit the nav?
    - Should the nav slide based on the active index?

-->
<template>
  <SlideShow 
    class="slideshow--images" 
    :items="images"
    @slideChange="slideChange"
  >
    <template #slide="{ item }">
      <img :src="item.src" :alt="item.alt">
      <!-- Adding this in here for now, not generic meant for selection in compare ui -->
      <div class="slideshow__image-actions">
        <AppButton v-if="selectButton" class="type-small" icon="plus" small iconBefore>
          Select
        </AppButton>
      </div>
    </template>
    <template #nav="{ index }">
      <img :src="images[index].src" :alt="`View image ${ index }`">
    </template>
  </SlideShow>
</template>

<script>
  import SlideShow from './SlideShow.vue';
  export default {
    name: 'ImageSlideShow',
    props: {
      images: Array,
      selectButton: Boolean
    },
    watch: {
      images() {
        console.log('watch image from outer');
      }
    },
    components: {
      SlideShow,
    },
    methods: {
      /**
       * Test to see if the active slide's nav button (thumbnail) is in view
       * if not, scroll the nav to ensure it is visible. This function will take 
       * into account which side of the overflow nav the item is hidden in and will 
       * scroll either to fit it to the flush end (if overflow to the right) or flush start
       */
      slideChange({ slide, nav }) {
        const { active, navElement } = slide;
        if (!navElement) return;
        const { offsetWidth, scrollLeft: left } = nav;
        const { offsetLeft, offsetWidth: navWidth } = navElement;
        const right = left + offsetWidth;
        const navRight = offsetLeft + navWidth;
        let amount = null;
        console.log('left/right', left, right);
        if (active && navElement) {
          
          if (navRight > right) {
            amount = left + (navRight - right);
          } else if (offsetLeft < left) {
            amount = offsetLeft;
          }
          if (amount !== null) {
            nav.scrollTo({ left: amount, top: 0, behavior: "smooth" });
          }
        }
      }
    }
  }
</script>