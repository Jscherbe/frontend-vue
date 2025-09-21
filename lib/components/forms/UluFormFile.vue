<template>
  <label 
    :class="{ 'hidden-visually' : labelHidden }" 
    :for="id"
  >
    <slot name="label">
      {{ label }}<UluFormRequiredChar v-if="required" />
    </slot>
  </label>
  <input 
    type="file" 
    @change="onChangeFile" 
    :multiple="multiple"
    :id="id"
    v-bind="inputAttrs"
    :required="required"
  />
</template>

<script setup>
  import { newId } from "../../utils/dom.js";
  import UluFormRequiredChar from "./UluFormRequiredChar.vue";

  defineProps({
    /**
     * The label for the file input.
     */
    label: {
      type: String,
      default: "Select File"
    },
    /**
     * If true, the label will be visually hidden.
     */
    labelHidden: Boolean,
    /**
     * If true, default classes will not be applied.
     */
    noClasses: Boolean,
    /**
     * If true, allows multiple file selection.
     */
    multiple: Boolean,
    /**
     * Additional attributes to bind to the input element.
     */
    inputAttrs: Object,
    /**
     * If true, the field will be required.
     */
    required: Boolean
  });

  const emit = defineEmits(["file-change"]);

  const id = newId();

  const onChangeFile = (event) => {
    emit("file-change", event.target.files);
  };
</script>