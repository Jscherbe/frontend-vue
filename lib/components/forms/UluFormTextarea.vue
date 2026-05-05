<template>
  <textarea
    v-bind="fieldAttrs"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)" 
  ></textarea>
</template>

<script setup>
  import { inject, computed } from "vue";

  const props = defineProps({
    /**
     * The value of the textarea (for v-model).
     */
    modelValue: [String, Number]
  });

  defineEmits(["update:modelValue"]);

  const injectedAttrs = inject("uluFormFieldAttrs", null);
  const fieldAttrs = computed(() => injectedAttrs ? injectedAttrs.value : {});
</script>