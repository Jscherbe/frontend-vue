<template>
  <input
    type="checkbox"
    :id="id"
    :checked="modelValue"
    @change="$emit('update:modelValue', $event.target.checked)"
    :required="required"
  >
  <label :for="id">
    <slot>
      {{ label }}
      <UluFormRequiredChar v-if="required" />
    </slot>
  </label>
</template>

<script setup>
import { newId } from "../../utils/dom.js";
import UluFormRequiredChar from "./UluFormRequiredChar.vue";

defineProps({
  /**
   * The label for the checkbox.
   */
  label: String,
  /**
   * The value of the checkbox (for v-model).
   */
  modelValue: Boolean,
  /**
   * If true, the field will be required.
   */
  required: Boolean
});

defineEmits(['update:modelValue']);

const id = newId();
</script>