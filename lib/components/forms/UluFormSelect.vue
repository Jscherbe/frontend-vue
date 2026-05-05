<template>
  <select 
    v-bind="fieldAttrs" 
    :value="modelValue" 
    @input="$emit('update:modelValue', $event.target.value)"
  >
    <option 
      v-if="placeholder !== false" 
      disabled 
      value=""
    >
      {{ placeholder || "Please select one" }}
    </option>
    <option v-for="(option, index) in options" :key="index" :value="option.value">
      {{ option.text }}
    </option>
  </select>
</template>

<script setup>
  import { inject, computed } from "vue";

  const props = defineProps({
    /**
     * The value of the select input (for v-model).
     */
    modelValue: [String, Number, Array],
    /**
     * An array of options for the select input. Each option should be an object with `value` and `text` properties.
     */
    options: Array,
    /**
     * The text for the default disabled option. Pass false to hide it.
     */
    placeholder: {
      type: [String, Boolean],
      default: "Please select one"
    }
  });

  defineEmits(["update:modelValue"]);

  const injectedAttrs = inject("uluFormFieldAttrs", null);
  const fieldAttrs = computed(() => injectedAttrs ? injectedAttrs.value : {});
</script>