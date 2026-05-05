<template>
  <input
    type="radio"
    v-bind="fieldAttrs"
    :value="value"
    :checked="modelValue === value"
    @change="$emit('update:modelValue', value)"
  >
</template>

<script setup>
  import { inject, computed } from "vue";

  const props = defineProps({
    /**
     * The value of the selected radio button in the group (for v-model).
     */
    modelValue: [String, Number, Boolean],
    /**
     * The value of this radio button.
     */
    value: [String, Number, Boolean]
  });

  defineEmits(["update:modelValue"]);

  const injectedAttrs = inject("uluFormFieldAttrs", null);
  const fieldAttrs = computed(() => injectedAttrs ? injectedAttrs.value : {});
</script>