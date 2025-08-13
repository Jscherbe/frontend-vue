<template>
  <span>{{  displayValue }}</span>
</template>

<script>
  import gsap from "gsap";
  export default {
    name: 'AnimateNumber',
    props: {
      value: Number
    },
    watch: {
      value() {
        gsap.to(this, {
          tweenValue: this.value,
          onUpdate: () => {
            this.displayValue = Math.ceil(this.tweenValue);
          },
        });
      },
    },
    data() {
      return {
        displayValue: this.value,
        tweenValue: this.value,
      };
    },
  }
</script>