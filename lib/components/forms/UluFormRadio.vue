<template>
  <input
    type="radio"
    :id="id"
    :name="name"
    :value="value"
    :checked="modelValue === value"
    @change="$emit('update:modelValue', value)"
    :required="required"
  >
  <label :for="id">
    <slot>
      {{ label }}<UluFormRequiredChar v-if="required" />
    </slot>
  </label>
</template>

<script setup>
import { newId } from "../../utils/dom.js";
import UluFormRequiredChar from "./UluFormRequiredChar.vue";

defineProps({
  /**
   * The label for the radio button.
   */
  label: String,
  /**
   * The value of the selected radio button in the group (for v-model).
   */
  modelValue: [String, Number],
  /**
   * The value of this radio button.
   */
  value: [String, Number],
  /**
   * The name of the radio button group.
   */
  name: String,
  /**
   * If true, the field will be required.
   */
  required: Boolean
});

defineEmits(['update:modelValue']);

const id = newId();
</script>