<template>
  <div 
    class="form-theme__item"
    :class="[
      typeClass,
      {
        'is-danger': hasError,
        'is-warning': hasWarning,
        'form-theme__item--align-top': alignTop
      }
    ]"
  >
    <UluFormItemLabel 
      v-if="!isLabelAfter && hasLabel" 
      :id="internalId" 
      :labelHidden="labelHidden" 
      :required="required"
    >
      <slot name="label">{{ label }}</slot>
    </UluFormItemLabel>

    <slot />

    <UluFormItemLabel 
      v-if="isLabelAfter && hasLabel" 
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
   * The type of form field this item contains (e.g., 'text', 'select', 'textarea', 'checkbox', 'radio', 'file').
   * This determines the layout and BEM styling of the item.
   */
  type: {
    type: String,
    required: true,
    validator: (value) => [
      'text', 'textarea', 'select', 'checkbox', 'radio', 'file', 'color', 'date', 'range', 'tel', 'password', 'email', 'number', 'search', 'url', 'time', 'month', 'week', 'datetime-local'
    ].includes(value)
  },
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
  alignTop: Boolean
});

const slots = useSlots();

const internalId = computed(() => props.fieldId || newId());
const descriptionId = computed(() => `${internalId.value}-desc`);
const errorId = computed(() => `${internalId.value}-error`);
const warningId = computed(() => `${internalId.value}-warn`);

const hasLabel = computed(() => !!props.label || !!slots.label);
const hasError = computed(() => props.error || !!props.errorMessage || !!slots.errorMessage);
const hasWarning = computed(() => props.warning || !!props.warningMessage || !!slots.warningMessage);

const isLabelAfter = computed(() => ['checkbox', 'radio'].includes(props.type));

const typeClass = computed(() => {
  // Map specific types to their corresponding BEM classes
  const bemTypeMap = {
    text: 'text',
    password: 'text',
    email: 'text',
    tel: 'text',
    number: 'text',
    search: 'text',
    url: 'text',
    textarea: 'textarea',
    select: 'select',
    file: 'file',
    color: 'select', // Based on reference SCSS
    date: 'select', // Based on reference SCSS
    time: 'select',
    month: 'select',
    week: 'select',
    'datetime-local': 'select',
    range: 'select', // Based on reference SCSS
    // Checkbox and radio don't get a specific modifier class in the SCSS, 
    // they just use the base .form-theme__item
    checkbox: '',
    radio: ''
  };
  
  const mappedType = bemTypeMap[props.type];
  return mappedType ? `form-theme__item--${mappedType}` : '';
});

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