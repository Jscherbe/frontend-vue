<template>
  <input
    type="checkbox"
    v-bind="fieldAttrs"
    :checked="modelValue"
    @change="$emit('update:modelValue', $event.target.checked)"
  >
</template>

<script setup>
  import { inject, computed } from "vue";

  const props = defineProps({
    /**
     * The value of the checkbox (for v-model).
     */
    modelValue: Boolean
  });

  defineEmits(["update:modelValue"]);

  const injectedAttrs = inject("uluFormFieldAttrs", null);
  const fieldAttrs = computed(() => injectedAttrs ? injectedAttrs.value : {});
</script>