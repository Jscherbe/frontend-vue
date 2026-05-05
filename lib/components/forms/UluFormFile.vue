<template>
  <input 
    type="file" 
    v-bind="fieldAttrs"
    :multiple="multiple"
    @change="onChangeFile" 
  />
</template>

<script setup>
  import { inject, computed } from "vue";

  const props = defineProps({
    /**
     * If true, allows multiple file selection.
     */
    multiple: Boolean
  });

  const emit = defineEmits(["file-change"]);

  const injectedAttrs = inject("uluFormFieldAttrs", null);
  const fieldAttrs = computed(() => {
    const attrs = injectedAttrs ? { ...injectedAttrs.value } : {};
    return attrs;
  });

  const onChangeFile = (event) => {
    emit("file-change", event.target.files);
  };
</script>