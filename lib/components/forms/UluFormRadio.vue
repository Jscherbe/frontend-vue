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
import { newId } from "../../utils/dom.js";
import { checkDeprecatedProps } from "../../utils/props.js";

const props = defineProps({
  /**
   * The value of the selected radio button in the group (for v-model).
   */
  modelValue: [String, Number, Boolean],
  /**
   * The value of this radio button.
   */
  value: [String, Number, Boolean],
  /**
   * @deprecated Use <UluFormItem label="..."> instead.
   */
  label: String,
  /**
   * @deprecated Use <UluFormItem required> instead.
   */
  required: Boolean
});

defineEmits(["update:modelValue"]);

checkDeprecatedProps(props, ["label", "required"], (name) => {
  console.warn(`[@ulu/frontend-vue] UluFormRadio: The "${ name }" prop is deprecated. Please move it to the parent <UluFormItem>.`);
});

const injectedAttrs = inject("uluFormFieldAttrs", null);
const fallbackId = newId();
const fieldAttrs = computed(() => injectedAttrs ? injectedAttrs.value : { id: fallbackId });
</script>