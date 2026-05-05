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
  import { checkDeprecatedProps } from "../../utils/props.js";

  const props = defineProps({
    /**
     * If true, allows multiple file selection.
     */
    multiple: Boolean,
    /**
     * Deprecated: Use `<UluFormItem label="...">` instead.
     * @deprecated Use <UluFormItem label="..."> instead.
     */
    label: {
      type: String,
      default: "Select File"
    },
    /**
     * Deprecated: Use `<UluFormItem labelHidden>` instead.
     * @deprecated Use <UluFormItem labelHidden> instead.
     */
    labelHidden: Boolean,
    /**
     * Deprecated: Use <UluFormItem required> instead.
     * @deprecated Use <UluFormItem required> instead.
     */
    required: Boolean
  });

  const emit = defineEmits(["file-change"]);

  checkDeprecatedProps(props, ["label", "labelHidden", "required"], (name) => {
    console.warn(`[@ulu/frontend-vue] UluFormFile: The "${ name }" prop is deprecated. Please move it to the parent <UluFormItem>.`);
  });

  const injectedAttrs = inject("uluFormFieldAttrs", null);
  const fieldAttrs = computed(() => {
    const attrs = injectedAttrs ? { ...injectedAttrs.value } : {};
    if (props.required) {
      attrs.required = true;
    }
    return attrs;
  });

  const onChangeFile = (event) => {
    emit("file-change", event.target.files);
  };
</script>