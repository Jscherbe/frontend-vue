<template>
  <div class="facets-sort" :class="classes.container">
    <label 
      :for="sortId" 
      :class="classes.label"
    >
      <slot>Sort:</slot>
    </label>
    <select 
      :value="modelValue"
      @change="emit('update:modelValue', $event.target.value)"
      :id="sortId" 
      :class="classes.select"
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
