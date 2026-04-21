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
  import { checkDeprecatedProps } from "../../utils/props.js";

  const props = defineProps({
    /**
     * The value of the checkbox (for v-model).
     */
    modelValue: Boolean,
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
    console.warn(`[@ulu/frontend-vue] UluFormCheckbox: The "${ name }" prop is deprecated. Please move it to the parent <UluFormItem>.`);
  });

  const injectedAttrs = inject("uluFormFieldAttrs", null);
  const fieldAttrs = computed(() => injectedAttrs ? injectedAttrs.value : {});
</script>