<template>
  <fieldset class="menu-stack form-theme">
    <legend v-if="legend" class="hidden-visually">{{ legend }}</legend>
    <ul class="menu-stack__list">
      <li class="menu-stack__item" v-for="(option, index) in options" :key="index">
        <div class="menu-stack__selectable">
          <input
            :type="type"
            :id="getId(index)"
            :name="name"
            :value="option.uid"
            :checked="isChecked(option)"
            @change="handleChange(option, $event)"
          >
          <label :for="getId(index)">
            <slot :option="option">
              {{ option?.label || option?.title || option?.text }}
            </slot>
          </label>
        </div>
      </li>
    </ul>
  </fieldset>
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
});

const emit = defineEmits(['update:modelValue']);

const name = computed(() => props.legend ? props.legend.toLowerCase().replace(/\s+/g, '-') : `menu-${Math.random().toString(36).substring(7)}`);

const getId = (index) => `${name.value}-${index}`;

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
