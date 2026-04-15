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
  import { newId } from "../../utils/dom.js";
  import { checkDeprecatedProps } from "../../utils/props.js";

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
    },
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
    console.warn(`[@ulu/frontend-vue] UluFormSelect: The "${ name }" prop is deprecated. Please move it to the parent <UluFormItem>.`);
  });

  const injectedAttrs = inject("uluFormFieldAttrs", null);
  const fallbackId = newId();
  const fieldAttrs = computed(() => injectedAttrs ? injectedAttrs.value : { id: fallbackId });
</script>