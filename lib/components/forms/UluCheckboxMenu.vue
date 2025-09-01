<template>
  <div class="menu-stack form-theme">
    <ul class="menu-stack__list">
      <li
        class="menu-stack__item"
        v-for="(option, index) in options"
        :key="index"
      >
        <div class="menu-stack__selectable">
          <input 
            type="checkbox" 
            :id="getId(index)" 
            v-model="option.checked"
          >
          <label :for="getId(index)">
            <slot>
              {{ option?.title || option?.text }}
            </slot>
          </label>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
  defineProps({
    /**
     * Checkbox items in [{ title|text, checked }, ...]
     */
    options: Array
  });

  const getId = (index) => {
    return `checkbox-menu-opt-${ index }`;
  };
</script>