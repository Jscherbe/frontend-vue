<template>
  <div class="facets-search">
    <label :class="classes.searchLabel" :for="id">
      <strong>Search</strong>
    </label>
    <input 
      :id="id" 
      :class="classes.searchInput" 
      v-model="localValue"
      type="text" 
      :placeholder="placeholder"
    >
  </div>
</template>

<script setup>
  import { computed } from 'vue';
  import { newId } from '../../../utils/dom.js';

  const props = defineProps({
    classes: {
      type: Object,
      default: () => ({})
    },
    modelValue: String,
    placeholder: {
      type: String,
      default: "Keywords…"
    }
  });

  const emit = defineEmits(['update:modelValue']);

  const id = newId('facet-view-keyword');

  const localValue = computed({
    get() {
      return props.modelValue;
    },
    set(val) {
      emit('update:modelValue', val);
    }
  });
</script>
