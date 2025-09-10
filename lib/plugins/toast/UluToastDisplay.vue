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

<style lang="css">
  .toast-animation-move, 
  .toast-animation-enter-active,
  .toast-animation-leave-active {
    transition: all 0.3s ease;
  }
  .toast-animation-enter-from,
  .toast-animation-leave-to {
    opacity: 0;
    transform: translateX(30px);
  }
  .toast-animation-leave-active {
    position: absolute;
    width: 100%;
  }
</style>