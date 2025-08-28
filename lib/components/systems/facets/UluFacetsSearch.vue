<template>
  <div class="UluFacets__keyword-search">
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

  let uid = 0;
  const id = `facet-view-keyword-${++uid}`;

  const localValue = computed({
    get() {
      return props.modelValue;
    },
    set(val) {
      emit('update:modelValue', val);
    }
  });
</script>
