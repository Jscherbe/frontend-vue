import{X as g,Y as a,Z as l,$ as r,a0 as i,a1 as v}from"./iframe-Nq88G_pO.js";import{u as b,m as f}from"./_mock-data-B5a5o28Q.js";import"./preload-helper-BJwshlQW.js";const _={},U=[{name:"Category",uid:"category",open:!0},{name:"Author",uid:"author",open:!0}],n=e=>{const c=v(e.items),{facets:o,searchValue:d,selectedSort:m,sortTypes:p,displayItems:u,selectedFacets:h,clearFilters:F,handleFacetChange:y}=b(c,{facetFields:e.facetFields,extraSortTypes:e.extraSortTypes,initialSortType:e.initialSortType});return{args:e,facets:o,searchValue:d,selectedSort:m,sortTypes:p,displayItems:u,selectedFacets:h,clearFilters:F,handleFacetChange:y}},t=e=>({components:{UluFacetsFilters:i,UluFacetsResults:r,UluFacetsSearch:l,UluFacetsSort:a,UluFacetsSidebarLayout:g},setup:()=>n(e),template:`
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
        <UluFacetsFilters :facets="facets" @facet-change="handleFacetChange" :max-visible="args.maxVisible" />
      </template>
      <template #main>
        <UluFacetsResults :items="displayItems">
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
      </template>
    </UluFacetsSidebarLayout>
  `});t.args={facetFields:U,items:f,searchPlaceholder:"Search articles...",maxVisible:5};const s=e=>({components:{UluFacetsFilters:i,UluFacetsResults:r,UluFacetsSearch:l,UluFacetsSort:a},setup:()=>n(e),template:`
    <div>
        <h1>My Custom Layout</h1>
        <div style="display: grid; grid-template-columns: 1fr 3fr; gap: 2rem;">
            <div>
                <h3>Filters</h3>
                <UluFacetsSearch v-model="searchValue" :placeholder="args.searchPlaceholder" />
                <hr/>
                <UluFacetsFilters :facets="facets" @facet-change="handleFacetChange" />
            </div>
            <div>
                <div style="display: flex; justify-content: space-between; align-items: center;">
                    <h3>Results ({{displayItems.length}})</h3>
                    <UluFacetsSort v-model="selectedSort" :sort-types="sortTypes" />
                </div>
                <hr/>
                <UluFacetsResults :items="displayItems">
                    <template #item="{ item }">
                        <div style="border: 1px solid #eee; padding: 1rem; margin-bottom: 1rem; border-radius: 4px;">
                            <h4>{{ item.title }}</h4>
                            <p>{{ item.description }}</p>
                        </div>
                    </template>
                </UluFacetsResults>
            </div>
        </div>
    </div>
    `});s.args={...t.args};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`args => ({
  components: {
    UluFacetsFilters,
    UluFacetsResults,
    UluFacetsSearch,
    UluFacetsSort,
    UluFacetsSidebarLayout
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
        <UluFacetsFilters :facets="facets" @facet-change="handleFacetChange" :max-visible="args.maxVisible" />
      </template>
      <template #main>
        <UluFacetsResults :items="displayItems">
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
      </template>
    </UluFacetsSidebarLayout>
  \`
})`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`args => ({
  components: {
    UluFacetsFilters,
    UluFacetsResults,
    UluFacetsSearch,
    UluFacetsSort
  },
  setup: () => defaultSetup(args),
  template: \`
    <div>
        <h1>My Custom Layout</h1>
        <div style="display: grid; grid-template-columns: 1fr 3fr; gap: 2rem;">
            <div>
                <h3>Filters</h3>
                <UluFacetsSearch v-model="searchValue" :placeholder="args.searchPlaceholder" />
                <hr/>
                <UluFacetsFilters :facets="facets" @facet-change="handleFacetChange" />
            </div>
            <div>
                <div style="display: flex; justify-content: space-between; align-items: center;">
                    <h3>Results ({{displayItems.length}})</h3>
                    <UluFacetsSort v-model="selectedSort" :sort-types="sortTypes" />
                </div>
                <hr/>
                <UluFacetsResults :items="displayItems">
                    <template #item="{ item }">
                        <div style="border: 1px solid #eee; padding: 1rem; margin-bottom: 1rem; border-radius: 4px;">
                            <h4>{{ item.title }}</h4>
                            <p>{{ item.description }}</p>
                        </div>
                    </template>
                </UluFacetsResults>
            </div>
        </div>
    </div>
    \`
})`,...s.parameters?.docs?.source}}};const C=["SidebarLayout","CustomLayout"];export{s as CustomLayout,t as SidebarLayout,C as __namedExportsOrder,_ as default};
