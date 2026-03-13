<template>
  <span><slot :currentValue="currentValue">{{ currentValue }}</slot></span>
</template>

<script setup>
  import { ref, watch, reactive } from "vue";
  import gsap from "gsap";

  const props = defineProps({
    /**
     * The target number to animate to.
     */
    value: Number
  });

  const currentValue = ref(props.value);
  
  // Need an object for GSAP to animate its properties
  const animationState = reactive({
    tweenValue: props.value
  });

  watch(() => props.value, (newValue) => {
    gsap.to(animationState, {
      tweenValue: newValue,
      onUpdate: () => {
        currentValue.value = Math.ceil(animationState.tweenValue);
      },
    });
  });
</script>