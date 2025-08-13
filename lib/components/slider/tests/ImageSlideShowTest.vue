<template>
  <div>
    <ImageSlideShow :images="slideImages"/>
  </div>
</template>

<script>
  import ImageSlideShow from "../ImageSlideShow.vue";
  export default {
    name: 'ImageSlideShowTest',
    components: {
      ImageSlideShow,
    },
    props: {
      count: {
        type: Number,
        default: 20
      },
      runTests: Boolean
    },
    data() {
      console.log(this.count);
      return {
        slideImages: this.newImageSlides(this.count)
      }
    },
    methods: {
      newImageSlides(count) {
        return [...Array(count)].map(_ => ({ 
          src: this.$site.placeholderImageRandom(), 
          alt: "some image alt text"
        }))
      },
      test() {
        const label = "Slide Reactivity Test:";
        // Test reactivity (changing data)
        setTimeout(() => {
          console.log(label, 'Data has changed (alt, src)');
          this.slideImages.forEach(slide => {
            slide.alt = "This has changes";
            slide.src = this.$site.placeholderImageRandom();
          });
        }, 5000);

        // Test reactivity (adding slides)
        setTimeout(() => {
          this.slideImages.push(...this.newImageSlides(5));
          console.log(label, 'Added 5 images');
        }, 10000);
        
        // Test reactivity (replacing slides)
        setTimeout(() => {
          this.slideImages = this.newImageSlides(1);
          console.log(label, 'Set to only 1 images');
        }, 15000);
      }
    },
    mounted() {
      if (this.runTests) {
        this.test();
      }
    }
  }
</script>