<template>
  <ul class="FacetView__facet-list">
    <li 
      class="FacetView__facet"
      :class="classFacet"
      v-for="facet in children"
      :key="facet.uid"
    >
      <input 
        class="FacetView__facet-checkbox"
        :id="facetCheckboxId(facet)"
        type="checkbox" 
        v-model="facet.selected"
      >
      <label 
        class="FacetView__facet-label" 
        :for="facetCheckboxId(facet)"
      >
        {{ facet.label }}
      </label>
    </li>
  </ul>
</template>

<script>
  export default {
    name: 'FacetedViewList',
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