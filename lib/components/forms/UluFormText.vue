<template>
  <input 
    type="text" 
    v-bind="fieldAttrs"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)" 
  >
</template>

<script setup>
  import { inject, computed } from "vue";
  import { checkDeprecatedProps } from "../../utils/props.js";

  const props = defineProps({
    /**
     * The value of the text input (for v-model).
     */
    modelValue: [String, Number],
    /**
     * @deprecated Use <UluFormItem label="..."> instead.
     */
    label: String,
    /**
     * @deprecated Use <UluFormItem labelHidden> instead.
     */
    labelHidden: Boolean,
    /**
     * @deprecated Use <UluFormItem required> instead.
     */
    required: Boolean
  });

  defineEmits(["update:modelValue"]);

  checkDeprecatedProps(props, ["label", "labelHidden", "required"], (name) => {
    console.warn(`[@ulu/frontend-vue] UluFormText: The "${ name }" prop is deprecated. Please move it to the parent <UluFormItem>.`);
  });

  const injectedAttrs = inject("uluFormFieldAttrs", null);
  const fieldAttrs = computed(() => injectedAttrs ? injectedAttrs.value : {});
</script>