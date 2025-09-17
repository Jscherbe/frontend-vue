<template>
  <div style="text-align: center;">
    <h4 style="margin: 0 0 0.5rem 0; font-size: 1rem;">{{ title }}</h4>
    <p style="margin: 0; font-size: 0.875rem;">This is a Vue component being rendered inside a tooltip.</p>
  </div>
</template>

<script setup>
  defineProps({ title: String });
</script>
