import{a0 as o,a1 as l,a2 as r,a3 as i,Y as n,z as f}from"./iframe-CN1oRFkw.js";import{u as v,m as U}from"./_mock-data-BdJionk7.js";import"./preload-helper-BJwshlQW.js";const R={},S=[{name:"Category",uid:"category",open:!0,multiple:!0},{name:"Author",uid:"author",open:!0}],c=e=>{const m=f(e.items),{facets:d,searchValue:p,selectedSort:u,sortTypes:h,displayItems:y,selectedFacets:F,clearFilters:g,handleFacetChange:b}=v(m,{facetFields:e.facetFields,extraSortTypes:e.extraSortTypes,initialSortType:e.initialSortType});return{args:e,facets:d,searchValue:p,selectedSort:u,sortTypes:h,displayItems:y,selectedFacets:F,clearFilters:g,handleFacetChange:b}},t=e=>({components:{UluFacetsFilterLists:n,UluFacetsResults:i,UluFacetsSearch:r,UluFacetsSort:l,UluFacetsSidebarLayout:o},setup:()=>c(e),template:`
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
  `});t.args={facetFields:S,items:U,searchPlaceholder:"Search articles...",maxVisible:5};const s=e=>({components:{UluFacetsFilterLists:n,UluFacetsResults:i,UluFacetsSearch:r,UluFacetsSort:l},setup:()=>c(e),template:`
    <div>
        <h1>My Custom Layout</h1>
        <div style="display: grid; grid-template-columns: 1fr 3fr; gap: 2rem;">
            <div>
                <h3>Filters</h3>
                <UluFacetsSearch v-model="searchValue" :placeholder="args.searchPlaceholder" />
                <hr/>
                <UluFacetsFilterLists :facets="facets" @facet-change="handleFacetChange" />
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
    `});s.args={...t.args};const a=e=>({components:{UluFacetsFilterLists:n,UluFacetsResults:i,UluFacetsSearch:r,UluFacetsSort:l,UluFacetsSidebarLayout:o},setup:()=>c(e),template:`
    <style>
      .custom-list-class {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1rem;
      }
      .custom-item-class {
        border: 2px solid red;
        padding: 1rem;
      }
    </style>
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
        <UluFacetsResults :items="displayItems" :classes="args.classes">
          <template #item="{ item }">
            <h3>{{ item.title }}</h3>
            <p>{{ item.description }}</p>
          </template>
          <template #empty>
            <div style="padding: 2rem; text-align: center;">
              <p>No matching items found. Try clearing some filters.</p>
            </div>
          </template>
        </UluFacetsResults>
      </template>
    </UluFacetsSidebarLayout>
  `});a.args={...t.args,classes:{list:"custom-list-class",item:"custom-item-class"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`args => ({
  components: {
    UluFacetsFilterLists,
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
        <UluFacetsFilterLists :facets="facets" @facet-change="handleFacetChange" :max-visible="args.maxVisible" />
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
    UluFacetsFilterLists,
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
                <UluFacetsFilterLists :facets="facets" @facet-change="handleFacetChange" />
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
})`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`args => ({
  components: {
    UluFacetsFilterLists,
    UluFacetsResults,
    UluFacetsSearch,
    UluFacetsSort,
    UluFacetsSidebarLayout
  },
  setup: () => defaultSetup(args),
  template: \`
    <style>
      .custom-list-class {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1rem;
      }
      .custom-item-class {
        border: 2px solid red;
        padding: 1rem;
      }
    </style>
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
        <UluFacetsResults :items="displayItems" :classes="args.classes">
          <template #item="{ item }">
            <h3>{{ item.title }}</h3>
            <p>{{ item.description }}</p>
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
})`,...a.parameters?.docs?.source}}};const I=["SidebarLayout","CustomLayout","CustomClasses"];export{a as CustomClasses,s as CustomLayout,t as SidebarLayout,I as __namedExportsOrder,R as default};
