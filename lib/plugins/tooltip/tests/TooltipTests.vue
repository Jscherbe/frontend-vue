<template>
  <div class="tooltip-tests" style="
    margin-top: 50vh; 
    margin-bottom: 50vh; 
    background: #ccc; 
    padding: 3rem;
  ">
    <h1>Tooltip Tests</h1>
    <TestBasic/>
    <TestInline/>
    <TestFollow/>
  </div>
</template>

<script setup>
  import TestBasic from "./TestBasic.vue";
  import TestInline from "./TestInline.vue";
  import TestFollow from "./TestFollow.vue";
</script>