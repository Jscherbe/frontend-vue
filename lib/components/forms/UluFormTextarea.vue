<template>
  <label :class="{ 'hidden-visually' : labelHidden }" :for="id">
    <slot name="label">
      {{ label }}
      <UluFormRequiredChar v-if="required" />
    </slot>
  </label>
  <textarea
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)" 
    :id="id"
    :required="required"
  ></textarea>
</template>

<script setup>
  import { newId } from "../../utils/dom.js";
  import UluFormRequiredChar from "./UluFormRequiredChar.vue";

  defineProps({
    /**
     * The label for the textarea.
     */
    label: String,
    /**
     * The value of the textarea (for v-model).
     */
    modelValue: String,
    /**
     * If true, the label will be visually hidden.
     */
    labelHidden: Boolean,
    /**
     * If true, the field will be required.
     */
    required: Boolean
  });

  defineEmits(['update:modelValue']);

  const id = newId();
</script>