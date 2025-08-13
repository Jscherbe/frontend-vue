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

<script>
  let count = 0;
  export default {
    name: "FormText",
    props: {
      label: String,
      modelValue: String,
      labelHidden: Boolean
    },
    data() {
      return {
        id: `text-input-id-${ ++count }`
      };
    }
  };
</script>