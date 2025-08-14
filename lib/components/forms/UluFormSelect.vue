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

<script>
  let count = 0;
  export default {
    name: "FormSelect",
    props: {
      label: String,
      modelValue: String,
      options: Array,
      labelHidden: Boolean
    },
    data() {
      return {
        id: `select-id-${ ++count }`
      };
    }
  };
</script>