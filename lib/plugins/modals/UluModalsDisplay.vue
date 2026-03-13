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

<script setup>
  import { ref, computed, watch, nextTick, inject } from "vue";
  import { modalsState } from "./api.js";

  const emit = defineEmits([
    "modal-unmount",
    "modal-mount"
  ]);

  const uluModals = inject("uluModals");

  const open = ref(false);

  const currentModal = computed(() => {
    return modalsState.data?.active;
  });

  const currentProps = computed(() => {
    return modalsState.data?.activeProps;
  });

  // Watch for changes in the global state (e.g., when $uluModals.open() is called)
  watch(currentModal, (newValue) => {
    if (newValue) {
      open.value = true;
    } else {
      open.value = false;
    }
  });

  // Watch for changes in the local state (e.g., when the modal emits 'update:modelValue')
  watch(open, (newValue) => {
    if (!newValue && currentModal.value) {
      uluModals?.close();
    }
  });

  const modalMounted = () => {
    emit("modal-mount", { modal: currentModal.value });
  };

  const modalUnmounted = () => {
    nextTick(() => {
      emit("modal-unmount");
    });
  };
</script>