<template>
  <Teleport :to="pluginOptions.teleportTo">
    <TransitionGroup 
      class="toast-container"
      :class="classes"
      name="toast-animation" 
      tag="div"
    >
      <component
        v-for="toast in toasts"
        :key="toast.uid"
        :is="toast.component"
        :toast="toast"
      />
    </TransitionGroup>
  </Teleport>
</template>

<script setup>
  import { computed } from "vue";
  import { store } from "./store.js";
  
  const { toasts, pluginOptions } = store;

  const classes = computed(() => {
    const { position } = pluginOptions;
    return position.map(p => `toast-container--${ p }`);
  });
</script>