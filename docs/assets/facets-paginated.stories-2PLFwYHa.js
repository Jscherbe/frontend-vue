import{$ as F,a2 as b,a3 as y,a4 as f,a5 as S,a6 as U,I as v}from"./iframe-2PTns7KC.js";import{u as x}from"./useFacets-D_zQTSZZ.js";import{u as P}from"./usePagination-DAvngODp.js";import{m as _}from"./_mock-data-euri91_s.js";import"./preload-helper-BJwshlQW.js";const $={parameters:{chromatic:{disableSnapshot:!0}}},I=[{name:"Category",uid:"category",open:!0,multiple:!0},{name:"Author",uid:"author",open:!0}],T=e=>{const s=v(e.items),{facets:r,searchValue:l,selectedSort:i,sortTypes:n,displayItems:a,selectedFacets:o,clearFilters:c,handleFacetChange:m}=x(s,{facetFields:e.facetFields,extraSortTypes:e.extraSortTypes,initialSortType:e.initialSortType}),{currentPage:d,totalPages:p,paginatedItems:u,pagerItems:g,pagerEllipses:h}=P(a,e.itemsPerPage);return{args:e,facets:r,searchValue:l,selectedSort:i,sortTypes:n,displayItems:a,selectedFacets:o,clearFilters:c,handleFacetChange:m,currentPage:d,totalPages:p,paginatedItems:u,pagerItems:g,pagerEllipses:h}},t=e=>({components:{UluFacetsFilterAccordions:U,UluFacetsResults:S,UluFacetsSearch:f,UluFacetsSort:y,UluFacetsSidebarLayout:b,UluPager:F},setup:()=>T(e),template:`
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
        <div style="display: flex; justify-content: space-between; align-items: center;">
          <h3>Filters</h3>
          <button v-if="selectedFacets.length" @click="clearFilters" style="border: none; background: none; color: blue; cursor: pointer;">Clear</button>
        </div>
        <UluFacetsFilterAccordions :facets="facets" @facet-change="handleFacetChange" :max-visible="args.maxVisible" />
      </template>
      <template #main>
        <UluFacetsResults :items="paginatedItems">
          <template #item="{ item }">
            <div style="border: 1px solid #eee; padding: 1rem; margin-bottom: 1rem; border-radius: 4px;">
              <h3>{{ item.title }}</h3>
              <p>{{ item.description }}</p>
            </div>
          </template>
          <template #empty>
            <div style="padding: 2rem; text-align: center;">
              <p>No matching items found. Try clearing some filters.</p>
            </div>
          </template>
        </UluFacetsResults>
        <UluPager
          v-if="totalPages > 1"
          :items="pagerItems"
          :current="currentPage"
          :ellipses="pagerEllipses"
          class="mt-4"
        />
      </template>
    </UluFacetsSidebarLayout>
  `});t.args={facetFields:I,items:_,searchPlaceholder:"Search articles...",maxVisible:5,itemsPerPage:5};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`args => ({
  components: {
    UluFacetsFilterAccordions,
    UluFacetsResults,
    UluFacetsSearch,
    UluFacetsSort,
    UluFacetsSidebarLayout,
    UluPager
  },
  setup: () => defaultSetup(args),
  template: \`
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
        <div style="display: flex; justify-content: space-between; align-items: center;">
          <h3>Filters</h3>
          <button v-if="selectedFacets.length" @click="clearFilters" style="border: none; background: none; color: blue; cursor: pointer;">Clear</button>
        </div>
        <UluFacetsFilterAccordions :facets="facets" @facet-change="handleFacetChange" :max-visible="args.maxVisible" />
      </template>
      <template #main>
        <UluFacetsResults :items="paginatedItems">
          <template #item="{ item }">
            <div style="border: 1px solid #eee; padding: 1rem; margin-bottom: 1rem; border-radius: 4px;">
              <h3>{{ item.title }}</h3>
              <p>{{ item.description }}</p>
            </div>
          </template>
          <template #empty>
            <div style="padding: 2rem; text-align: center;">
              <p>No matching items found. Try clearing some filters.</p>
            </div>
          </template>
        </UluFacetsResults>
        <UluPager
          v-if="totalPages > 1"
          :items="pagerItems"
          :current="currentPage"
          :ellipses="pagerEllipses"
          class="mt-4"
        />
      </template>
    </UluFacetsSidebarLayout>
  \`
})`,...t.parameters?.docs?.source}}};const A=["SidebarLayout"];export{t as SidebarLayout,A as __namedExportsOrder,$ as default};
