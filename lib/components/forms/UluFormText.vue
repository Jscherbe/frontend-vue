<template>
  <div class="site-form__item site-form__item--text">
    <label :class="{ 'hidden-visually' : labelHidden }" :for="id">
      <slot>
        {{ label }}
      </slot>
    </label>
    <input 
      type="text" 
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)" 
      :id="id"
    >
  </div>
</template>

<script setup>
  const getNextId = (() => {
    let count = 0;
    return () => `text-input-id-${++count}`;
  })();

  defineProps({
    /**
     * The label for the text input.
     */
    label: String,
    /**
     * The value of the text input (for v-model).
     */
    modelValue: String,
    /**
     * If true, the label will be visually hidden.
     */
    labelHidden: Boolean
  });

  defineEmits(['update:modelValue']);

  const id = getNextId();
</script>