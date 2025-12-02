import{ref as i}from"vue";import{useRouter as c,useRoute as l}from"vue-router";import{_ as m,u as n}from"./UluFacetsFilterAccordions-5Wzph1XK.js";import{_ as p,a as d,b as u,c as h}from"./UluFacetsSort-BXsqHtnm.js";import{_ as F}from"./UluFacetsActiveFilters--k0TYoLi.js";import{m as f}from"./_mock-data-euri91_s.js";import"fuse.js";import"./UluSelectableMenu-I83UynnH.js";import"./UluAccordion-DA6rBkUI.js";import"./iframe-VeyoJg8x.js";import"./preload-helper-BJwshlQW.js";import"@floating-ui/vue";import"@ulu/utils/templating.js";import"@ulu/utils/browser/dom.js";import"@ulu/frontend";import"./UluCollapsible-j-j9WI3M.js";import"@formkit/auto-animate/vue";const V={parameters:{chromatic:{disableSnapshot:!0}}},y=[{name:"Category",uid:"category",open:!0,multiple:!0},{name:"Author",uid:"author",open:!0}],g=e=>{const r=i(e.items),s=c(),a=l(),o=n(r,{facetFields:e.facetFields,extraSortTypes:e.extraSortTypes,initialSortType:e.initialSortType,countMode:e.countMode,searchOptions:e.searchOptions,urlSync:{router:s,route:a}});return{args:e,route:a,...o}},b=`
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
`,S={items:f,searchPlaceholder:"Search articles...",maxVisible:5,initialSortType:"az"},t=e=>({components:{UluFacetsFilterAccordions:m,UluFacetsResults:h,UluFacetsSearch:u,UluFacetsSort:d,UluFacetsSidebarLayout:p,UluFacetsActiveFilters:F},setup:()=>g(e),template:b});t.args={...S,facetFields:y,countMode:"intuitive"};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`args => ({
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
})`,...t.parameters?.docs?.source}}};const D=["Default"];export{t as Default,D as __namedExportsOrder,V as default};
