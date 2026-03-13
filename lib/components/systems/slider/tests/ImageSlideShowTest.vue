<template>
  <div>
    <ImageSlideShow :images="slideImages"/>
  </div>
</template>

<script setup>
  import { ref, onMounted } from 'vue';
  import ImageSlideShow from "../ImageSlideShow.vue";
  import { useSite } from "@ulu/frontend"; // Guessing the source of $site, adjust if needed. Or we can leave it as a prop/inject.
  
  // Since $site is a global property, we might need to access it differently in setup, 
  // but for a test file, we can just mock the placeholder functionality if we don't have the exact import.
  // Assuming there's a way to get the global properties or using a simple mock for the test.
  import { getCurrentInstance } from 'vue';

  const props = defineProps({
    count: {
      type: Number,
      default: 20
    },
    runTests: Boolean
  });

  const { proxy } = getCurrentInstance();
  const getPlaceholderImage = () => {
    return proxy?.$site?.placeholderImageRandom ? proxy.$site.placeholderImageRandom() : `https://picsum.photos/${Math.floor(Math.random() * 1000)}/400/300`;
  };

  const newImageSlides = (count) => {
    return [...Array(count)].map(() => ({ 
      src: getPlaceholderImage(), 
      alt: "some image alt text"
    }));
  };

  console.log(props.count);
  const slideImages = ref(newImageSlides(props.count));

  const test = () => {
    const label = "Slide Reactivity Test:";
    // Test reactivity (changing data)
    setTimeout(() => {
      console.log(label, 'Data has changed (alt, src)');
      slideImages.value.forEach(slide => {
        slide.alt = "This has changes";
        slide.src = getPlaceholderImage();
      });
    }, 5000);

    // Test reactivity (adding slides)
    setTimeout(() => {
      slideImages.value.push(...newImageSlides(5));
      console.log(label, 'Added 5 images');
    }, 10000);
    
    // Test reactivity (replacing slides)
    setTimeout(() => {
      slideImages.value = newImageSlides(1);
      console.log(label, 'Set to only 1 images');
    }, 15000);
  };

  onMounted(() => {
    if (props.runTests) {
      test();
    }
  });
</script>