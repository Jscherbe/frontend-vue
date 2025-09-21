<template>
  <label :class="{ 'hidden-visually' : labelHidden }" :for="id">
    <slot name="label">
      {{ label }}<UluFormRequiredChar v-if="required" />
    </slot>
  </label>
  <select 
    :id="id" 
    :value="modelValue" 
    @input="$emit('update:modelValue', $event.target.value)"
    :required="required"
  >
    <option disabled value="">Please select one</option>
    <option v-for="(option, index) in options" :key="index" :value="option.value">
      {{ option.text }}
    </option>
  </select>
</template>

<script setup>
  import { newId } from "../../utils/dom.js";
  import UluFormRequiredChar from "./UluFormRequiredChar.vue";

  defineProps({
    /**
     * The label for the select input.
     */
    label: String,
    /**
     * The value of the select input (for v-model).
     */
    modelValue: String,
    /**
     * An array of options for the select input. Each option should be an object with `value` and `text` properties.
     */
    options: Array,
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