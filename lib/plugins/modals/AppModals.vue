<template>
  <Teleport :to="$modals.options.teleportTo" v-if="$modals.data.active">
    <component 
      v-if="currentModal" 
      :is="currentModal.component"
      v-bind="$modals.data.activeProps"
      :resizer="resizer"
      :position="currentModal.position"
      id="site-modal-dialog"
      role="dialog" 
      ref="trap"
      :aria-labelledby="labeledBy"
      @vue:mounted="modalMounted"
      @vue:unmounted="modalDestroy"
    />
  </Teleport>
</template>

<script>
  export default {
    name: "UluModals",
  };
</script>