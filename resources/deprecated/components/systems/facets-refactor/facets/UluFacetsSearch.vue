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
    <!-- <button 
      v-if="value"
      :class="classes.searchClear" 
      @click="clear"
      :aria-label="classes.searchClearIcon ? 'Clear Search' : false"
      type="button" 
    >
      <span 
        v-if="classes.searchClearIcon" 
        :class="classes.searchClearIcon"
        aria-hidden="true"
      ></span>
      <span v-else>
        Clear
      </span>
    </button> -->
  </div>
</template>

<script>
  let uid = 0;
  export default {
    name: 'UluFacetsSearch',
    props: {
      classes: Object,
      modelValue: String,
      placeholder: {
        type: String,
        default: "Keywords…"
      }
    },
    data() {
      return {
        id: `facet-view-keyword-${ ++uid }`
      }
    },
    computed: {
      localValue: {
        get() {
          return this.modelValue;
        },
        set(val) {
          this.$emit('update:modelValue', val);
        }
      }
    },
    methods: {
      clear() {
        // this.value = null;
        // this.applied = false;
        // this.$emit("search", null);
      }
    }
  }
</script>