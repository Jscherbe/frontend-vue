<template>
  <div class="form-theme search-form type-small">
    <div class="search-form__field">
      <label class="hidden-visually">Search</label>
      <input 
        class="search-form__input"
        type="text" 
        id="example-input" 
        :placeholder="placeholder"
      >
    </div>
    <button 
      class="search-form__submit button button--primary"
      aria-label="Submit Search"
    >
      <FaIcon :icon="$site.getIcon('search')"/>
    </button>
  </div>
</template>

<script setup>
  defineProps({
    placeholder: {
      type: String,
      default: "Titles, keyword…"
    }
  });
</script>