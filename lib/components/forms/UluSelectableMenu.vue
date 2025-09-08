<template>
  <div 
    class="menu-stack form-theme" 
    :class="{ 'menu-stack--hide-inputs' : hideInputs }"
    :role="groupRole" 
    :aria-labelledby="legendId"
  >
    <div v-if="legend" :id="legendId" class="hidden-visually">{{ legend }}</div>
    <ul class="menu-stack__list">
      <li class="menu-stack__item" v-for="option in options" :key="option.uid">
        <div class="menu-stack__selectable">
          <input
            :type="type"
            :id="getId(option)"
            :name="name"
            :value="option.uid"
            :checked="isChecked(option)"
            @change="handleChange(option, $event)"
          >
          <label :for="getId(option)">
            <slot :option="option">
              {{ option?.label || option?.title || option?.text }}
            </slot>
          </label>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  legend: String,
  options: Array,
  type: {
    type: String,
    default: 'checkbox',
  },
  modelValue: [String, Array],
  hideInputs: Boolean
});

const emit = defineEmits(['update:modelValue']);

const name = computed(() => props.legend ? props.legend.toLowerCase().replace(/\s+/g, '-') : `menu-${ Math.random().toString(36).substring(7) }`);
const legendId = computed(() => name.value ? `${name.value}-legend` : null);
const groupRole = computed(() => props.type === 'radio' ? 'radiogroup' : 'group');

const getId = (option) => `${name.value}-${option.uid}`;

const isChecked = (option) => {
  if (props.type === 'radio') {
    return props.modelValue === option.uid;
  }
  if (Array.isArray(props.modelValue)) {
    return props.modelValue.includes(option.uid);
  }
  if (props.type === 'checkbox') {
    return option.checked || false;
  }
  return false;
};

const handleChange = (option, event) => {
  if (props.type === 'radio') {
    emit('update:modelValue', option.uid);
  } else {
    if (Array.isArray(props.modelValue)) {
      const newValue = [...props.modelValue];
      const index = newValue.indexOf(option.uid);
      if (index > -1) {
        newValue.splice(index, 1);
      } else {
        newValue.push(option.uid);
      }
      emit('update:modelValue', newValue);
    } else {
      option.checked = event.target.checked;
    }
  }
};
</script>