<template>
  <ul class="site-menu site-form">
    <li
    class="site-menu__item"
      v-for="(option, index) in options"
      :key="index"
    >
      <div class="site-menu__checkbox">
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
</template>

<script setup>
  defineProps({
    options: Array
  });

  const getId = (index) => {
    return `checkbox-menu-opt-${ index }`;
  };
</script>