<template>
  <span><slot :currentValue="currentValue">{{ currentValue }}</slot></span>
</template>

<script>
  import gsap from "gsap";

  /**
   * Animates a number from a previous value to a new value.
   * @slot default - The default slot for customizing the display of the number.
   * @binding {number} currentValue - The current animated value.
   */
  export default {
    name: 'AnimateNumber',
    props: {
      /**
       * The target number to animate to.
       */
      value: Number
    },
    watch: {
      value() {
        gsap.to(this, {
          tweenValue: this.value,
          onUpdate: () => {
            this.currentValue = Math.ceil(this.tweenValue);
          },
        });
      },
    },
    data() {
      return {
        currentValue: this.value,
        tweenValue: this.value,
      };
    },
  }
</script>