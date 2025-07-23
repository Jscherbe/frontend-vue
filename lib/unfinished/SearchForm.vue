<template>
  <div class="site-form site-form-search type-small">
    <div class="site-form-search__field">
      <label class="hidden-visually">Search</label>
      <input 
        class="site-form-search__input"
        type="text" 
        id="example-input" 
        :placeholder="placeholder"
      >
    </div>
    <button 
      class="site-form-search__submit button button--primary"
      aria-label="Submit Search"
    >
      <FaIcon :icon="$site.getIcon('search')"/>
    </button>
  </div>
</template>

<script>
  export default {
    name: "SearchForm",
    props: {
      placeholder: {
        type: String,
        default: "Titles, keyword…"
      }
    }
  };
</script>