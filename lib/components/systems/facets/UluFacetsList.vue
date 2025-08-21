<template>
  <ul class="UluFacets__facet-list">
    <li 
      class="UluFacets__facet"
      :class="classFacet"
      v-for="facet in children"
      :key="facet.uid"
    >
      <input 
        class="UluFacets__facet-checkbox"
        :id="facetCheckboxId(facet)"
        type="checkbox" 
        v-model="facet.selected"
      >
      <label 
        class="UluFacets__facet-label" 
        :for="facetCheckboxId(facet)"
      >
        {{ facet.label }}
      </label>
    </li>
  </ul>
</template>

<script>
  export default {
    name: 'UluFacetsList',
    props: {
      groupUid: String,
      children: Array,
      classFacet: String
    },
    methods: {
      facetCheckboxId(facet) {
        return `facet-${ this.groupUid }-${ facet.uid }`;
      }
    }
  }
</script>