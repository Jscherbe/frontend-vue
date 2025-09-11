import{Y as h,Z as f,$ as S,a0 as b,a1 as v,z as U}from"./iframe-DnXSiSwu.js";import{u as C,m as x}from"./_mock-data--q0qPw85.js";import"./preload-helper-BJwshlQW.js";const T={},l=[{name:"Category",uid:"category",open:!0,multiple:!0},{name:"Author",uid:"author",open:!0}],o=e=>{const c=U(e.items),{facets:n,searchValue:u,selectedSort:m,sortTypes:p,displayItems:d,selectedFacets:g,clearFilters:y,handleFacetChange:F}=C(c,{facetFields:e.facetFields,extraSortTypes:e.extraSortTypes,initialSortType:e.initialSortType,countMode:e.countMode});return{args:e,facets:n,searchValue:u,selectedSort:m,sortTypes:p,displayItems:d,selectedFacets:g,clearFilters:y,handleFacetChange:F}},_=`
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
`,i={items:x,searchPlaceholder:"Search articles...",maxVisible:5},t=e=>({components:{UluFacetsFilterLists:v,UluFacetsResults:b,UluFacetsSearch:S,UluFacetsSort:f,UluFacetsSidebarLayout:h},setup:()=>o(e),template:_});t.args={...i,facetFields:l,countMode:"none"};const s=e=>({...t(e),setup:()=>o(e)});s.args={...i,facetFields:l,countMode:"simple"};s.storyName="Counts (Simple)";const a=e=>({...t(e),setup:()=>o(e)});a.args={...i,facetFields:l,countMode:"intuitive"};a.storyName="Counts (Intuitive)";const r=e=>({...t(e),setup:()=>o(e)});r.args={...i,facetFields:[{name:"Category",uid:"category",open:!0,multiple:!0,match:"all"},{name:"Author",uid:"author",open:!0}],countMode:"intuitive"};r.storyName="Counts (Intuitive) with AND logic";t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`args => ({
  components: {
    UluFacetsFilterLists,
    UluFacetsResults,
    UluFacetsSearch,
    UluFacetsSort,
    UluFacetsSidebarLayout
  },
  setup: () => defaultSetup(args),
  template: storyTemplate
})`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`args => ({
  ...Default(args),
  setup: () => defaultSetup(args)
})`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`args => ({
  ...Default(args),
  setup: () => defaultSetup(args)
})`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`args => ({
  ...Default(args),
  setup: () => defaultSetup(args)
})`,...r.parameters?.docs?.source}}};const D=["Default","CountsSimple","CountsIntuitive","CountsIntuitiveAndLogic"];export{a as CountsIntuitive,r as CountsIntuitiveAndLogic,s as CountsSimple,t as Default,D as __namedExportsOrder,T as default};
