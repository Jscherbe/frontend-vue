import{I as e}from"./jsx-runtime-D9lKcjd5.js";import{useMDXComponents as a}from"./index-DIzwWG-n.js";import{r as i}from"./index-vwjNkSeb.js";import"./iframe--wWzAahP.js";import"./preload-helper-BJwshlQW.js";function r(n){const t={a:"a",code:"code",h1:"h1",p:"p",pre:"pre",...a(),...n.components};return e(i.Fragment,{children:[e(t.h1,{id:"faceted-search",children:"Faceted Search"}),`
`,e(t.p,{children:["This story demonstrates the ",e(t.code,{children:"useFacets"})," composable and its associated components. It showcases how to set up a faceted search interface with automatic facet generation, searching, sorting, and filtering. For detailed configuration options, see the ",e(t.a,{href:"#facetfields-api",children:[e(t.code,{children:"facetFields"})," API reference"]})," below the example."]}),`
`,e(t.pre,{children:e(t.code,{className:"language-html",children:`<script setup>
  import { ref } from 'vue';
  import { useFacets } from './useFacets.js';
  import UluFacetsFilterLists from './UluFacetsFilterLists.vue';
  import UluFacetsResults from './UluFacetsResults.vue';
  import UluFacetsSearch from './UluFacetsSearch.vue';
  import UluFacetsSort from './UluFacetsSort.vue';
  import UluFacetsSidebarLayout from './UluFacetsSidebarLayout.vue';
  import { mockItems } from './_mock-data';

  const allItems = ref(mockItems);

  // 1. Define fields for automatic facet generation
  const facetFields = [
    { name: 'Category', uid: 'category', open: true, multiple: true },
    { name: 'Author', uid: 'author', open: true },
    { name: 'Year', uid: 'date', open: true, getValue: item => item.date.getFullYear() }
  ];

  // 2. Define any extra sort types
  const extraSortTypes = {
    newest: { text: 'Date (Newest)', sort: (items) => [...items].sort((a, b) => b.date - a.date) },
    oldest: { text: 'Date (Oldest)', sort: (items) => [...items].sort((a, b) => a.date - b.date) }
  };

  // 3. Initialize the composable
  const {
    facets,
    searchValue,
    selectedSort,
    sortTypes,
    displayItems,
    selectedFacets, // Use this to check if filters are active
    handleFacetChange,
    clearFilters
  } = useFacets(allItems, {
    facetFields,
    extraSortTypes,
    initialSortType: 'newest',
    countMode: 'intuitive', // Show counts next to facet values
    searchOptions: { keys: ['title', 'description', 'author'] }
  });
<\/script>

<template>
  <UluFacetsSidebarLayout>
    <template #header>
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem; padding-bottom: 1rem; border-bottom: 1px solid #eee;">
        <h2>Found {{ displayItems.length }} items</h2>
        <UluFacetsSort v-model="selectedSort" :sort-types="sortTypes" />
      </div>
    </template>
    <template #sidebar>
      <UluFacetsSearch v-model="searchValue" placeholder="Search articles..." />
      <hr/>
      <div style="display: flex; justify-content: space-between; align-items: center;">
        <h3>Filters</h3>
        <button v-if="selectedFacets.length > 0" @click="clearFilters" style="border: none; background: none; color: blue; cursor: pointer;">Clear</button>
      </div>
      <UluFacetsFilterLists :facets="facets" @facet-change="handleFacetChange" :max-visible="5" />
    </template>
    <template #main>
      <UluFacetsResults :items="displayItems">
        <template #item="{ item }">
          <div style="border: 1px solid #eee; padding: 1rem; margin-bottom: 1rem; border-radius: 4px;">
            <h3>{{ item.title }}</h3>
            <p>{{ item.description }}</p>
            <p><small><strong>Author:</strong> {{ Array.isArray(item.author) ? item.author.join(', ') : item.author }}</small></p>
            <p><small><strong>Published on:</strong> {{ item.date.toLocaleDateString() }}</small></p>
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
</template>
`})}),`
`,e("h3",{id:"facetfields-api",children:"facetFields API"}),`
`,e(t.p,{children:["The ",e(t.code,{children:"useFacets"})," composable can automatically generate filter groups from a ",e(t.code,{children:"facetFields"})," configuration array. Each object in the array defines a facet group and its behavior. Here are the available keys:"]}),`
`,e("table",{children:[e("thead",{children:e("tr",{children:[e("th",{children:"Key"}),e("th",{children:"Type"}),e("th",{children:"Default"}),e("th",{children:"Description"})]})}),e("tbody",{children:[e("tr",{children:[e("td",{children:e("code",{children:"uid"})}),e("td",{children:e("code",{children:"String"})}),e("td",{children:e("strong",{children:"Required"})}),e("td",{children:"The property key on each item in your data array that holds the facet's value."})]}),e("tr",{children:[e("td",{children:e("code",{children:"name"})}),e("td",{children:e("code",{children:"String"})}),e("td",{children:e("strong",{children:"Required"})}),e("td",{children:"The display name for the facet group, shown as a title in the UI."})]}),e("tr",{children:[e("td",{children:e("code",{children:"multiple"})}),e("td",{children:e("code",{children:"Boolean"})}),e("td",{children:e("code",{children:"false"})}),e("td",{children:["If ",e("code",{children:"true"}),", allows multiple values to be selected (renders as checkboxes). If ",e("code",{children:"false"}),`,
only one value can be selected (renders as radio buttons).`]})]}),e("tr",{children:[e("td",{children:e("code",{children:"open"})}),e("td",{children:e("code",{children:"Boolean"})}),e("td",{children:e("code",{children:"false"})}),e("td",{children:["If ",e("code",{children:"true"}),", the facet group will be expanded by default in the UI."]})]}),e("tr",{children:[e("td",{children:e("code",{children:"match"})}),e("td",{children:e("code",{children:"String"})}),e("td",{children:e("code",{children:"'some'"})}),e("td",{children:["Only applies when ",e("code",{children:"multiple: true"}),". If set to ",e("code",{children:"'all'"}),`, items must match
`,e("strong",{children:"all"})," selected values in the group (AND logic). The default is to match ",e("strong",{children:"any"}),`
value (OR logic).`]})]}),e("tr",{children:[e("td",{children:e("code",{children:"getValue"})}),e("td",{children:e("code",{children:"Function"})}),e("td",{children:e("code",{children:"item => item[uid]"})}),e("td",{children:[`A function that receives an item and returns the value for the facet. Useful for derived or nested values
(e.g., `,e("code",{children:"item => item.date.getFullYear()"}),")."]})]}),e("tr",{children:[e("td",{children:e("code",{children:"getLabel"})}),e("td",{children:e("code",{children:"Function"})}),e("td",{children:e("code",{children:"value => value"})}),e("td",{children:`A function that receives a facet value and returns a formatted string for display. Useful for transforming
values into more readable labels.`})]})]})]})]})}function h(n={}){const{wrapper:t}={...a(),...n.components};return t?e(t,{...n,children:e(r,{...n})}):r(n)}const m=[];export{m as __namedExportsOrder,h as default};
