import{a2 as u,a3 as m,a4 as p,a5 as d,a6 as F,a7 as g,I}from"./iframe-Cr3nWxIL.js";import{u as _}from"./useFacets-BB7RX5aA.js";import{m as x}from"./_mock-data-euri91_s.js";import"./preload-helper-BJwshlQW.js";const D={},n=[{name:"Category",uid:"category",open:!0,multiple:!0},{name:"Author",uid:"author",open:!0}],l=e=>{const i=I(e.items),{facets:f,searchValue:y,selectedSort:U,sortTypes:S,displayItems:v,selectedFacets:A,clearFilters:C,handleFacetChange:b}=_(i,{facetFields:e.facetFields,extraSortTypes:e.extraSortTypes,initialSortType:e.initialSortType,countMode:e.countMode,searchOptions:e.searchOptions});return{args:e,facets:f,searchValue:y,selectedSort:U,sortTypes:S,displayItems:v,selectedFacets:A,clearFilters:C,handleFacetChange:b}},h=`
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
            <p v-if="item.animal"><small><strong>Animal:</strong> {{ item.animal }}</small></p>
            <p v-if="item.color"><small><strong>Color:</strong> {{ item.color }}</small></p>
            <p v-if="item.fruit"><small><strong>Fruit:</strong> {{ item.fruit.join(', ') }}</small></p>
            <p v-if="item.country"><small><strong>Country:</strong> {{ item.country }}</small></p>
            <p v-if="item.material"><small><strong>Material:</strong> {{ item.material }}</small></p>
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
`,c={items:x,searchPlaceholder:"Search articles...",maxVisible:5},t=e=>({components:{UluFacetsFilterAccordions:g,UluFacetsResults:F,UluFacetsSearch:d,UluFacetsSort:p,UluFacetsSidebarLayout:m,UluFacetsActiveFilters:u},setup:()=>l(e),template:h});t.args={...c,facetFields:n,countMode:"none"};const a=e=>({...t(e),setup:()=>l(e)});a.args={...c,facetFields:n,countMode:"simple"};a.storyName="Counts (Simple)";const s=e=>({...t(e),setup:()=>l(e)});s.args={...c,facetFields:n,countMode:"intuitive"};s.storyName="Counts (Intuitive)";const r=e=>({...t(e),setup:()=>l(e)});r.args={...c,facetFields:[{name:"Category",uid:"category",open:!0,multiple:!0,match:"all"},{name:"Author",uid:"author",open:!0}],countMode:"intuitive"};r.storyName="Counts (Intuitive) with AND logic";const o=e=>({components:{UluFacetsFilterAccordions:g,UluFacetsResults:F,UluFacetsSearch:d,UluFacetsSort:p,UluFacetsSidebarLayout:m,UluFacetsActiveFilters:u},setup:()=>{const i=l(e);return i.handleFacetChange({groupUid:"category",facetUid:"cat2",selected:!0}),i.handleFacetChange({groupUid:"author",facetUid:"jane-doe",selected:!0}),i},template:h});o.args={...c,facetFields:n,countMode:"intuitive"};o.storyName="With Initial Filters";t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`args => ({
  components: {
    UluFacetsFilterAccordions,
    UluFacetsResults,
    UluFacetsSearch,
    UluFacetsSort,
    UluFacetsSidebarLayout,
    UluFacetsActiveFilters
  },
  setup: () => defaultSetup(args),
  template: storyTemplate
})`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`args => ({
  ...Default(args),
  setup: () => defaultSetup(args)
})`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`args => ({
  ...Default(args),
  setup: () => defaultSetup(args)
})`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`args => ({
  ...Default(args),
  setup: () => defaultSetup(args)
})`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`args => ({
  components: {
    UluFacetsFilterAccordions,
    UluFacetsResults,
    UluFacetsSearch,
    UluFacetsSort,
    UluFacetsSidebarLayout,
    UluFacetsActiveFilters
  },
  setup: () => {
    const setup = defaultSetup(args);

    // Pre-select some filters
    setup.handleFacetChange({
      groupUid: 'category',
      facetUid: 'cat2',
      selected: true
    });
    setup.handleFacetChange({
      groupUid: 'author',
      facetUid: 'jane-doe',
      selected: true
    });
    return setup;
  },
  template: storyTemplate
})`,...o.parameters?.docs?.source}}};const N=["Default","CountsSimple","CountsIntuitive","CountsIntuitiveAndLogic","WithInitialFilters"];export{s as CountsIntuitive,r as CountsIntuitiveAndLogic,a as CountsSimple,t as Default,o as WithInitialFilters,N as __namedExportsOrder,D as default};
