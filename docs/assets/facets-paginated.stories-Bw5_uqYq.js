import{Z as F,$ as b,a0 as y,a1 as f,a2 as S,z as U}from"./iframe-B3IBbmqM.js";import{u as v}from"./useFacets-CH-DOe07.js";import{u as x}from"./usePagination-9ZC2FogL.js";import{_ as P}from"./UluPager-D4sGjBzF.js";import{m as _}from"./_mock-data-euri91_s.js";import"./preload-helper-BJwshlQW.js";const j={parameters:{chromatic:{disableSnapshot:!0}}},L=[{name:"Category",uid:"category",open:!0,multiple:!0},{name:"Author",uid:"author",open:!0}],I=e=>{const s=U(e.items),{facets:r,searchValue:l,selectedSort:i,sortTypes:n,displayItems:a,selectedFacets:o,clearFilters:c,handleFacetChange:m}=v(s,{facetFields:e.facetFields,extraSortTypes:e.extraSortTypes,initialSortType:e.initialSortType}),{currentPage:p,totalPages:d,paginatedItems:u,pagerItems:g,pagerEllipses:h}=x(a,e.itemsPerPage);return{args:e,facets:r,searchValue:l,selectedSort:i,sortTypes:n,displayItems:a,selectedFacets:o,clearFilters:c,handleFacetChange:m,currentPage:p,totalPages:d,paginatedItems:u,pagerItems:g,pagerEllipses:h}},t=e=>({components:{UluFacetsFilterLists:S,UluFacetsResults:f,UluFacetsSearch:y,UluFacetsSort:b,UluFacetsSidebarLayout:F,UluPager:P},setup:()=>I(e),template:`
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
        <UluFacetsFilterLists :facets="facets" @facet-change="handleFacetChange" :max-visible="args.maxVisible" />
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
  `});t.args={facetFields:L,items:_,searchPlaceholder:"Search articles...",maxVisible:5,itemsPerPage:5};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`args => ({
  components: {
    UluFacetsFilterLists,
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
        <UluFacetsFilterLists :facets="facets" @facet-change="handleFacetChange" :max-visible="args.maxVisible" />
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
})`,...t.parameters?.docs?.source}}};const w=["SidebarLayout"];export{t as SidebarLayout,w as __namedExportsOrder,j as default};
