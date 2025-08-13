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

<script>
  import { store } from "./store.js";
  export default {
    name: 'UluTooltipDisplay',
    data() {
      const { toasts, pluginOptions } = store;
      return { toasts, pluginOptions };
    },
    computed: {
      classes() {
        const { position } = this.pluginOptions;
        const positionClasses = position.map(p => `toast-container--${ p }`);
        return positionClasses;
      }
    }
  }
</script>