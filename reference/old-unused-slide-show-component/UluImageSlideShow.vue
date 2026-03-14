<!-- 
  Note: This is the image implementation of SlideShow 
  Notes:
    - Should the images resize to fit the nav?
    - Should the nav slide based on the active index?

-->
<template>
  <UluSlideShow 
    class="slideshow--images" 
    :items="images"
    @slide-change="slideChange"
  >
    <template #slide="{ item }">
      <img :src="item.src" :alt="item.alt">
      <!-- Adding this in here for now, not generic meant for selection in compare ui -->
      <div class="slideshow__image-actions">
        <UluButton v-if="selectButton" class="type-small" icon="fas fa-plus" small iconBefore>
          Select
        </UluButton>
      </div>
    </template>
    <template #nav="{ index }">
      <img :src="images[index].src" :alt="`View image ${ index }`">
    </template>
  </UluSlideShow>
</template>

<script setup>
  import UluSlideShow from "./UluSlideShow.vue";
  import UluButton from "../../elements/UluButton.vue";

  const props = defineProps({
    images: Array,
    selectButton: Boolean
  });

  /**
   * Test to see if the active slide's nav button (thumbnail) is in view
   * if not, scroll the nav to ensure it is visible. This function will take 
   * into account which side of the overflow nav the item is hidden in and will 
   * scroll either to fit it to the flush end (if overflow to the right) or flush start
   */
  const slideChange = ({ slide, nav }) => {
    const { active, navElement } = slide;
    if (!navElement) return;
    const { offsetWidth, scrollLeft: left } = nav;
    const { offsetLeft, offsetWidth: navWidth } = navElement;
    const right = left + offsetWidth;
    const navRight = offsetLeft + navWidth;
    let amount = null;

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
  };
</script>