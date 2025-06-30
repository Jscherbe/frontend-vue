<template>
  <div>
    <h2>Basic Test (long text in tooltip)</h2>
    <p>
      <button 
        v-tooltip="longContent" 
        style="background-color: lightblue;"
      >
        Some Button
      </button>
    </p>
  </div>
</template>
<script setup>
  const longContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer accumsan lacus at eros posuere bibendum. Praesent pellentesque, eros et iaculis tincidunt, lorem nibh interdum leo, ac malesuada eros magna ut leo. Morbi ex nisi, faucibus sed quam vel, molestie convallis leo.";
</script>