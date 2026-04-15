<template>
  <div 
    class="form-theme__item"
    :class="[{
      'is-danger': hasError,
      'is-warning': hasWarning,
      'form-theme__item--align-top': alignTop,
      'form-theme__item--text': text,
      'form-theme__item--file': file,
      'form-theme__item--select': select,
      'form-theme__item--textarea': textarea
    }]"
  >
    <UluFormItemLabel 
      v-if="!labelAfter && hasLabel" 
      :id="internalId" 
      :labelHidden="labelHidden" 
      :required="required"
    >
      <slot name="label">{{ label }}</slot>
    </UluFormItemLabel>

    <slot />

    <UluFormItemLabel 
      v-if="labelAfter && hasLabel" 
      :id="internalId" 
      :labelHidden="labelHidden" 
      :required="required"
    >
      <slot name="label">{{ label }}</slot>
    </UluFormItemLabel>

    <UluFormMessage 
      v-if="description || $slots.description" 
      :id="descriptionId"
    >
      <slot name="description">{{ description }}</slot>
    </UluFormMessage>

    <UluFormMessage 
      v-if="errorMessage || $slots.errorMessage" 
      :id="errorId" 
      error
    >
      <slot name="errorMessage">{{ errorMessage }}</slot>
    </UluFormMessage>

    <UluFormMessage 
      v-if="warningMessage || $slots.warningMessage" 
      :id="warningId" 
      warning
    >
      <slot name="warningMessage">{{ warningMessage }}</slot>
    </UluFormMessage>
  </div>
</template>

<script setup>
import { provide, computed, useSlots } from "vue";
import { newId } from "../../utils/dom.js";
import UluFormMessage from "./UluFormMessage.vue";
import UluFormItemLabel from "./UluFormItemLabel.vue";

const props = defineProps({
  /**
   * The ID to use for the form field. If not provided, a unique ID is generated.
   */
  fieldId: String,
  /**
   * The label for the form field.
   */
  label: String,
  /**
   * If true, the label will be visually hidden.
   */
  labelHidden: Boolean,
  /**
   * The description text for the form field.
   */
  description: String,
  /**
   * The error message text.
   */
  errorMessage: String,
  /**
   * The warning message text.
   */
  warningMessage: String,
  /**
   * If true, the field will be marked as required.
   */
  required: Boolean,
  /**
   * If true, applies the error state styles.
   */
  error: Boolean,
  /**
   * If true, applies the warning state styles.
   */
  warning: Boolean,
  /**
   * If true, aligns the item to the top.
   */
  alignTop: Boolean,
  /**
   * If true, applies the text item styles.
   */
  text: Boolean,
  /**
   * If true, applies the file item styles.
   */
  file: Boolean,
  /**
   * If true, applies the select item styles.
   */
  select: Boolean,
  /**
   * If true, applies the textarea item styles.
   */
  textarea: Boolean,
  /**
   * If true, renders the label after the slot. Useful for checkboxes and radios.
   */
  labelAfter: Boolean
});

const slots = useSlots();

const internalId = computed(() => props.fieldId || newId());
const descriptionId = computed(() => `${internalId.value}-desc`);
const errorId = computed(() => `${internalId.value}-error`);
const warningId = computed(() => `${internalId.value}-warn`);

const hasLabel = computed(() => !!props.label || !!slots.label);
const hasError = computed(() => props.error || !!props.errorMessage || !!slots.errorMessage);
const hasWarning = computed(() => props.warning || !!props.warningMessage || !!slots.warningMessage);

const fieldAttrs = computed(() => {
  const attrs = {
    id: internalId.value
  };

  const describedBy = [];
  if (props.description || slots.description) describedBy.push(descriptionId.value);
  if (props.errorMessage || slots.errorMessage) describedBy.push(errorId.value);
  if (props.warningMessage || slots.warningMessage) describedBy.push(warningId.value);

  if (describedBy.length > 0) {
    attrs["aria-describedby"] = describedBy.join(" ");
  }

  if (hasError.value) {
    attrs["aria-invalid"] = "true";
  }

  return attrs;
});

provide("uluFormFieldAttrs", fieldAttrs);
</script>