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
     * @deprecated Use <UluFormItem label="..."> instead.
     */
    label: {
      type: String,
      default: "Select File"
    },
    /**
     * @deprecated Use <UluFormItem labelHidden> instead.
     */
    labelHidden: Boolean,
    /**
     * If true, default classes will not be applied.
     */
    noClasses: Boolean,
    /**
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