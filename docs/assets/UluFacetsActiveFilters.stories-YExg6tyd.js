import{ref as i}from"vue";import{_ as l,u as o}from"./UluFacetsFilterAccordions-5Wzph1XK.js";import{_ as m}from"./UluFacetsActiveFilters--k0TYoLi.js";import{m as d}from"./_mock-data-euri91_s.js";import"fuse.js";import"./UluSelectableMenu-I83UynnH.js";import"./UluAccordion-DA6rBkUI.js";import"./iframe-VeyoJg8x.js";import"./preload-helper-BJwshlQW.js";import"vue-router";import"@floating-ui/vue";import"@ulu/utils/templating.js";import"@ulu/utils/browser/dom.js";import"@ulu/frontend";import"./UluCollapsible-j-j9WI3M.js";import"@formkit/auto-animate/vue";const x={},p=[{name:"Category",uid:"category",open:!0,multiple:!0},{name:"Author",uid:"author",open:!0}],e=a=>({components:{UluFacetsActiveFilters:m,UluFacetsFilterAccordions:l},setup(){const c=i(d),{facets:s,selectedFacets:n,handleFacetChange:t,clearFilters:r}=o(c,{facetFields:p});return t({groupUid:"category",facetUid:"cat1",selected:!0}),t({groupUid:"author",facetUid:"john-smith",selected:!0}),{args:a,facets:s,selectedFacets:n,handleFacetChange:t,clearFilters:r}},template:`
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
})`,...e.parameters?.docs?.source}}};const D=["Default"];export{e as Default,D as __namedExportsOrder,x as default};
