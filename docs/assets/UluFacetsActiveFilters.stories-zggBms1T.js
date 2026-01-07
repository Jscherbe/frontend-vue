import{l}from"./iframe-Dmbn_XAG.js";import{_ as i,u as o}from"./UluFacetsFilterAccordions-BAkKR_Uv.js";import{_ as d}from"./UluFacetsActiveFilters-BqIe77GM.js";import{m}from"./_mock-data-euri91_s.js";import"./preload-helper-BJwshlQW.js";import"./UluSelectableMenu--0FUBOJu.js";import"./UluAccordion-Do_AoHh9.js";import"./UluCollapsible-DXJT1cno.js";const C={},F=[{name:"Category",uid:"category",open:!0,multiple:!0},{name:"Author",uid:"author",open:!0}],e=a=>({components:{UluFacetsActiveFilters:d,UluFacetsFilterAccordions:i},setup(){const s=l(m),{facets:c,selectedFacets:n,handleFacetChange:t,clearFilters:r}=o(s,{facetFields:F});return t({groupUid:"category",facetUid:"cat1",selected:!0}),t({groupUid:"author",facetUid:"john-smith",selected:!0}),{args:a,facets:c,selectedFacets:n,handleFacetChange:t,clearFilters:r}},template:`
    <div>
      <p>This component displays active filters and allows removing them.</p>
      <UluFacetsActiveFilters 
        :selected-facets="selectedFacets" 
        @facet-change="handleFacetChange"
        @clear-filters="clearFilters"
      />
      <hr style="margin: 2rem 0;">
      <p>Interact with the filters below to see the active filters change.</p>
      <UluFacetsFilterAccordions :facets="facets" @facet-change="handleFacetChange" />
    </div>
  `});e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`args => ({
  components: {
    UluFacetsActiveFilters,
    UluFacetsFilterAccordions
  },
  setup() {
    const allItems = ref(mockItems);
    const {
      facets,
      selectedFacets,
      handleFacetChange,
      clearFilters
    } = useFacets(allItems, {
      facetFields: mockFacetFields
    });

    // Pre-select some facets for demonstration
    handleFacetChange({
      groupUid: 'category',
      facetUid: 'cat1',
      selected: true
    });
    handleFacetChange({
      groupUid: 'author',
      facetUid: 'john-smith',
      selected: true
    });
    return {
      args,
      facets,
      selectedFacets,
      handleFacetChange,
      clearFilters
    };
  },
  template: \`
    <div>
      <p>This component displays active filters and allows removing them.</p>
      <UluFacetsActiveFilters 
        :selected-facets="selectedFacets" 
        @facet-change="handleFacetChange"
        @clear-filters="clearFilters"
      />
      <hr style="margin: 2rem 0;">
      <p>Interact with the filters below to see the active filters change.</p>
      <UluFacetsFilterAccordions :facets="facets" @facet-change="handleFacetChange" />
    </div>
  \`
})`,...e.parameters?.docs?.source}}};const _=["Default"];export{e as Default,_ as __namedExportsOrder,C as default};
