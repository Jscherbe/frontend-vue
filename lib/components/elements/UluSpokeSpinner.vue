<template>
  <div 
    class="spoke-spinner" 
    :class="{ [`spoke-spinner--${ type }`] : type }"
  >
    <div class="spoke-spinner__spinner">
      <div v-for="n in 12" :key="n"></div>
    </div>
  </div>
</template>

<script setup>
  const props = defineProps({
    /**
     * Type modifier for spinner (ie match scss style name)
     */
    type: String
  });
</script>