<template>
  <div class="facets-sort" :class="classes.sortForm">
    <label 
      :for="sortId" 
      :class="classes.sortFormLabel"
    >
      <slot>Sort:</slot>
    </label>
    <select 
      :value="modelValue"
      @change="emit('update:modelValue', $event.target.value)"
      :id="sortId" 
      :class="classes.sortFormSelect"
    >
      <option v-for="(item, key) in sortTypes" :value="key" :key="key">
        {{ item.text }}
      </option>
    </select>
  </div>
</template>

<script setup>
  import { newId } from '../../../utils/dom.js';

  defineProps({
    classes: {
      type: Object,
      default: () => ({})
    },
    sortTypes: {
      type: Object,
      default: () => ({})
    },
    modelValue: {
      type: String,
      default: ''
    }
  });

  const emit = defineEmits(['update:modelValue']);

  const sortId = newId('ulu-facet-sort');
</script>
