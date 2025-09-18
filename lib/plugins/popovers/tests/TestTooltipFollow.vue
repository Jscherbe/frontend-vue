<template>
  <div 
    @pointerenter="showFollow"
    @pointermove="updateFollow"
    @pointerleave="hideFollow"
    style="
      background: lightblue; 
      width: 500px; 
      height: 500px; 
      display: flex; 
      align-items: center;
      justify-content: center
    "
  >
    Cursor Test
  </div>
</template>

<script setup>
  import { computed } from "vue";
  import useTooltipFollow from "../useTooltipFollow.js";

  const { 
    x, 
    y, 
    show, 
    hide, 
    update 
  } = useTooltipFollow({
    content: computed(() => `x: ${ Math.round(x.value) }, y: ${ Math.round(y.value) }`)
  });

  const showFollow = (event) => {
    updateFollow(event);
    show();
  };

  const updateFollow = ({ clientX, clientY }) => {
    update({
      x: clientX,
      y: clientY
    });
  };

  const hideFollow = () => {
    hide();
  };
</script>