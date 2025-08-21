<template>
  <span><slot :currentValue="currentValue">{{ currentValue }}</slot></span>
</template>

<script>
  import gsap from "gsap";
  export default {
    name: 'AnimateNumber',
    props: {
      /**
       * Number to animate as it changes
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