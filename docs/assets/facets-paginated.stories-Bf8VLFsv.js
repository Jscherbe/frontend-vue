import{l as x}from"./iframe-fa8d26kD.js";import{_ as r,u as I}from"./UluFacetsFilterAccordions-C3rXIZ3p.js";import{u as _}from"./usePagination-Criu18tc.js";import{_ as n,a as i,b as l,c as o}from"./UluFacetsSort-Dpx1Ummd.js";import{_ as c}from"./UluPager-9kKvVU5l.js";import{m as k}from"./_mock-data-euri91_s.js";import"./preload-helper-BJwshlQW.js";import"./UluSelectableMenu-B4D7EXay.js";import"./UluAccordion-CimdZPZq.js";import"./UluCollapsible-CYKnMJTU.js";const z={parameters:{chromatic:{disableSnapshot:!0}}},w=[{name:"Category",uid:"category",open:!0,multiple:!0},{name:"Author",uid:"author",open:!0}],m=e=>{const d=x(e.items),{facets:p,searchValue:u,selectedSort:g,sortTypes:b,displayItems:s,selectedFacets:h,clearFilters:f,handleFacetChange:y}=I(d,{facetFields:e.facetFields,extraSortTypes:e.extraSortTypes,initialSortType:e.initialSortType,isPinned:e.isPinned}),{currentPage:F,totalPages:v,paginatedItems:U,pagerItems:S,pagerEllipses:P}=_(s,e.itemsPerPage);return{args:e,facets:p,searchValue:u,selectedSort:g,sortTypes:b,displayItems:s,selectedFacets:h,clearFilters:f,handleFacetChange:y,currentPage:F,totalPages:v,paginatedItems:U,pagerItems:S,pagerEllipses:P}},t=e=>({components:{UluFacetsFilterAccordions:r,UluFacetsResults:o,UluFacetsSearch:l,UluFacetsSort:i,UluFacetsSidebarLayout:n,UluPager:c},setup:()=>m(e),template:`
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
  `});t.args={facetFields:w,items:k,searchPlaceholder:"Search articles...",maxVisible:5,itemsPerPage:5};const a=e=>({components:{UluFacetsFilterAccordions:r,UluFacetsResults:o,UluFacetsSearch:l,UluFacetsSort:i,UluFacetsSidebarLayout:n,UluPager:c},setup:()=>m(e),template:`
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
            <div style="border: 1px solid #eee; padding: 1rem; margin-bottom: 1rem; border-radius: 4px;" :style="args.isPinned && args.isPinned(item) ? 'border-color: #007bff; background-color: #f8faff;' : ''">
              <div style="display: flex; justify-content: space-between; align-items: flex-start;">
                <h3 style="margin-top: 0;">{{ item.title }}</h3>
                <span v-if="args.isPinned && args.isPinned(item)" style="background: #007bff; color: white; padding: 0.25rem 0.5rem; border-radius: 4px; font-size: 0.8rem; font-weight: bold;">Pinned</span>
              </div>
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
  `});a.args={...t.args,isPinned:e=>e.id===3||e.id===8};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`args => ({
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
})`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`args => ({
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
            <div style="border: 1px solid #eee; padding: 1rem; margin-bottom: 1rem; border-radius: 4px;" :style="args.isPinned && args.isPinned(item) ? 'border-color: #007bff; background-color: #f8faff;' : ''">
              <div style="display: flex; justify-content: space-between; align-items: flex-start;">
                <h3 style="margin-top: 0;">{{ item.title }}</h3>
                <span v-if="args.isPinned && args.isPinned(item)" style="background: #007bff; color: white; padding: 0.25rem 0.5rem; border-radius: 4px; font-size: 0.8rem; font-weight: bold;">Pinned</span>
              </div>
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
})`,...a.parameters?.docs?.source}}};const W=["SidebarLayout","WithPinnedItems"];export{t as SidebarLayout,a as WithPinnedItems,W as __namedExportsOrder,z as default};
