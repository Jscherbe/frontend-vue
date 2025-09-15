import{Z as S,$ as U,a0 as P,a1 as _,a2 as A,z as C}from"./iframe-CaRL2IS-.js";import{u as x}from"./useFacets-BIXu9owY.js";import{u as T}from"./usePagination-DnjleWRl.js";import{_ as I}from"./UluPager-CAgvhQ9n.js";import"./preload-helper-BJwshlQW.js";const E={parameters:{chromatic:{disableSnapshot:!0}}},O=e=>{const o=C(e.items),{facets:t,searchValue:i,selectedSort:s,sortTypes:d,displayItems:l,selectedFacets:f,clearFilters:h,handleFacetChange:g}=x(o,{facetFields:e.facetFields,extraSortTypes:e.extraSortTypes,initialSortType:e.initialSortType,countMode:e.countMode,searchOptions:e.searchOptions}),{currentPage:y,totalPages:F,paginatedItems:b,pagerItems:v,pagerEllipses:M}=T(l,e.itemsPerPage);return{args:e,facets:t,searchValue:i,selectedSort:s,sortTypes:d,displayItems:l,selectedFacets:f,clearFilters:h,handleFacetChange:g,currentPage:y,totalPages:F,paginatedItems:b,pagerItems:v,pagerEllipses:M}},w=`
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
      <UluPager
        v-if="totalPages > 1"
        :items="pagerItems"
        :current="currentPage"
        :ellipses="pagerEllipses"
        class="mt-4"
      />
    </template>
  </UluFacetsSidebarLayout>
`,a=["lorem","ipsum","dolor","sit","amet","consectetur","adipiscing","elit","curabitur","vehicula","vitae","sapien","nec","ultricies","mauris","pellentesque","egestas","enim","a","scelerisque"],n=["Red","Blue","Green","Yellow","Purple","Orange","Black","White","Gray","Brown"],c=["Dog","Cat","Lion","Tiger","Bear","Elephant","Giraffe","Zebra","Monkey","Horse"],m=["Apple","Banana","Cherry","Date","Elderberry","Fig","Grape","Honeydew","Kiwi","Lemon"],u=["USA","Canada","Mexico","Brazil","Argentina","UK","France","Germany","Japan","Australia"],p=["Wood","Steel","Plastic","Cotton","Wool","Silk","Leather","Rubber","Glass","Ceramic"];function L(e){const o=[];for(let t=0;t<e;t++){const i=Math.floor(Math.random()*3)+1,s=new Set;for(;s.size<i;)s.add(m[Math.floor(Math.random()*m.length)]);o.push({id:t,title:`Item ${t+1}`,description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae sapien nec ultricies.",facet1:a[Math.floor(Math.random()*a.length)],facet2:a[Math.floor(Math.random()*a.length)],facet3:a[Math.floor(Math.random()*a.length)],color:n[Math.floor(Math.random()*n.length)],animal:c[Math.floor(Math.random()*c.length)],fruit:[...s],country:u[Math.floor(Math.random()*u.length)],material:p[Math.floor(Math.random()*p.length)]})}return o}const k=[{name:"Facet 1",uid:"facet1",open:!1},{name:"Facet 2",uid:"facet2",open:!1},{name:"Facet 3",uid:"facet3",open:!1},{name:"Color",uid:"color",open:!1},{name:"Animal",uid:"animal",open:!1},{name:"Fruit (AND)",uid:"fruit",open:!0,multiple:!0,match:"all"},{name:"Country",uid:"country",open:!1},{name:"Material",uid:"material",open:!1}],r=e=>({components:{UluFacetsFilterAccordions:A,UluFacetsResults:_,UluFacetsSearch:P,UluFacetsSort:U,UluFacetsSidebarLayout:S,UluPager:I},setup:()=>O(e),template:w});r.args={items:L(2e3),facetFields:k,countMode:"intuitive",searchPlaceholder:"Search 2000 items...",maxVisible:10,itemsPerPage:10,searchOptions:{keys:["title","description","facet1","facet2","facet3","color","animal","fruit","country","material"]}};r.storyName="Performance (Intuitive, 2k items)";r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`args => ({
  components: {
    UluFacetsFilterAccordions,
    UluFacetsResults,
    UluFacetsSearch,
    UluFacetsSort,
    UluFacetsSidebarLayout,
    UluPager
  },
  setup: () => defaultSetup(args),
  template: storyTemplate
})`,...r.parameters?.docs?.source}}};const V=["PerformanceTestIntuitive"];export{r as PerformanceTestIntuitive,V as __namedExportsOrder,E as default};
