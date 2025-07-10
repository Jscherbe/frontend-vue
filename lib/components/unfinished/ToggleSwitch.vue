<template>
  <button 
    class="toggle-switch" 
    :class="{ 'is-active' : active }"
    :aria-label="active ? 'disable' : 'enable'"
  >
  </button>
</template>

<script>
  export default {
    name: "ToggleSwitch",
    props: {
      active: Boolean
    },
  };
</script>