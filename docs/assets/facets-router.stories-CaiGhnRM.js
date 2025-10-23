import{Z as i,$ as c,a0 as l,a1 as n,a2 as m,a3 as d,H as u,a8 as p,a7 as h}from"./iframe-Bgp5iAQV.js";import{u as F}from"./useFacets-j-aRVSOH.js";import{m as y}from"./_mock-data-euri91_s.js";import"./preload-helper-BJwshlQW.js";const A={parameters:{chromatic:{disableSnapshot:!0}}},f=[{name:"Category",uid:"category",open:!0,multiple:!0},{name:"Author",uid:"author",open:!0}],g=e=>{const s=u(e.items),r=p(),a=h(),o=F(s,{facetFields:e.facetFields,extraSortTypes:e.extraSortTypes,initialSortType:e.initialSortType,countMode:e.countMode,searchOptions:e.searchOptions,urlSync:{router:r,route:a}});return{args:e,route:a,...o}},b=`
  <div>
    <div style="padding: 1rem; background: #f3f3f3; border-radius: 4px; margin-bottom: 2rem;">
      <p>This story demonstrates how <code>useFacets</code> can sync its state with the URL query parameters.</p>
      <p>Interact with the filters, search, and sort below, and watch the simulated URL update.</p>
      <div style="background: #e0e0e0; padding: 1rem; border-radius: 4px; margin-top: 1rem; font-family: monospace; word-break: break-all;">
        <strong>Simulated URL:</strong> {{ route.fullPath }}
      </div>
    </div>
    <UluFacetsSidebarLayout>
      <template #header>
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem; padding-bottom: 1rem; border-bottom: 1px solid #eee;">
          <h2>Found {{ displayItems.length }} items</h2>
          <UluFacetsSort v-model="selectedSort" :sort-types="sortTypes" />
        </div>
      </template>
      <template #sidebar>
        <UluFacetsSearch v-model="searchValue" :placeholder="args.searchPlaceholder" />
        <hr/>
        <h3>Filters</h3>
        <UluFacetsFilterAccordions :facets="facets" @facet-change="handleFacetChange" :max-visible="args.maxVisible" />
      </template>
      <template #main>
        <UluFacetsActiveFilters 
          :selected-facets="selectedFacets" 
          @facet-change="handleFacetChange"
          @clear-filters="clearFilters"
        />
        <UluFacetsResults :items="displayItems">
          <template #item="{ item }">
            <div style="border: 1px solid #eee; padding: 1rem; margin-bottom: 1rem; border-radius: 4px;">
              <h3>{{ item.title }}</h3>
              <p>{{ item.description }}</p>
              <p><small><strong>Author:</strong> {{ Array.isArray(item.author) ? item.author.join(', ') : item.author }}</small></p>
              <p><small><strong>Categories:</strong> {{ Array.isArray(item.category) ? item.category.join(', ') : item.category }}</small></p>
            </div>
          </template>
          <template #empty>
            <div style="padding: 2rem; text-align: center;">
              <p>No matching items found. Try clearing some filters.</p>
            </div>
          </template>
        </UluFacetsResults>
      </template>
    </UluFacetsSidebarLayout>
  </div>
`,S={items:y,searchPlaceholder:"Search articles...",maxVisible:5,initialSortType:"az"},t=e=>({components:{UluFacetsFilterAccordions:d,UluFacetsResults:m,UluFacetsSearch:n,UluFacetsSort:l,UluFacetsSidebarLayout:c,UluFacetsActiveFilters:i},setup:()=>g(e),template:b});t.args={...S,facetFields:f,countMode:"intuitive"};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`args => ({
  components: {
    UluFacetsFilterAccordions,
    UluFacetsResults,
    UluFacetsSearch,
    UluFacetsSort,
    UluFacetsSidebarLayout,
    UluFacetsActiveFilters
  },
  setup: () => routerSetup(args),
  template: storyTemplate
})`,...t.parameters?.docs?.source}}};const R=["Default"];export{t as Default,R as __namedExportsOrder,A as default};
