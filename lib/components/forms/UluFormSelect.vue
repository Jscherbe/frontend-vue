<template>
  <div class="site-form__item site-form__item--select">
    <label :class="{ 'hidden-visually' : labelHidden }" :for="id">
      <slot>
        {{ label }}
      </slot>
    </label>
    <select 
      :id="id" 
      :value="modelValue" 
      @input="$emit('update:modelValue', $event.target.value)" 
    >
      <option disabled value="">Please select one</option>
      <option v-for="(option, index) in options" :key="index" :value="option.value">
        {{ option.text }}
      </option>
    </select>
  </div>
</template>

<script setup>
  const getNextId = (() => {
    let count = 0;
    return () => `select-id-${++count}`;
  })();

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
    labelHidden: Boolean
  });

  defineEmits(['update:modelValue']);

  const id = getNextId();
</script>