<template>
  <component 
    v-if="currentModal" 
    :is="currentModal.component"
    v-bind="currentProps"
    v-model="open"
    @vue:mounted="modalMounted"
    @vue:unmounted="modalUnmounted"
  />
</template>

<script>
  export default {
    name: "UluModalsDisplay",
    emits: [
      "modal-unmount",
      "modal-mount"
    ],
    data() {
      return {
        open: false
      };
    },
    computed: {
      currentModal() {
        return this.$uluModalsState.data?.active;
      },
      currentProps() {
        return this.$uluModalsState.data?.activeProps;
      }
    },
    watch: {
      // Watch for changes in the global state (e.g., when $uluModals.open() is called)
      currentModal(newValue) {
        if (newValue) {
          this.open = true;
        } else {
          this.open = false;
        }
      },
      // Watch for changes in the local state (e.g., when the modal emits 'update:modelValue')
      open(newValue) {
        if (!newValue && this.currentModal) {
          this.$uluModals.close();
        }
      }
    },
    methods: {
      modalMounted() {
        this.$emit("modal-mount", { modal: this.currentModal });
      },
      modalUnmounted() {
        this.$nextTick(() => {
          this.$emit("modal-unmount");
        });
      }
    }
  };
</script>