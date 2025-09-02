import{I as t}from"./jsx-runtime-CE0yPlVe.js";import{useMDXComponents as s}from"./index-DIzwWG-n.js";import{r}from"./index-vwjNkSeb.js";import"./iframe-dhuyN9hJ.js";import"./preload-helper-BJwshlQW.js";function a(n){const e={code:"code",h1:"h1",p:"p",pre:"pre",...s(),...n.components};return t(r.Fragment,{children:[t(e.h1,{id:"faceted-search",children:"Faceted Search"}),`
`,t(e.p,{children:["This story demonstrates the ",t(e.code,{children:"useFacets"})," composable and its associated components. It showcases how to set up a faceted search interface with automatic facet generation, searching, sorting, and filtering."]}),`
`,t(e.pre,{children:t(e.code,{className:"language-html",children:`<script setup>
  import { ref } from 'vue';
  import { useFacets, UluFacetsSidebarLayout, UluFacetsSearch, UluFacetsSort, UluFacetsFilters, UluFacetsResults } from '@ulu/frontend-vue'; // Adjust import path
  import { mockItems } from './_mock-data';

  const allItems = ref(mockItems);

  // 1. Define fields for automatic facet generation
  // Use 'getValue' for custom logic, like extracting the year from a Date object.
  const facetFields = [
    { name: 'Category', uid: 'category', open: true },
    { name: 'Author', uid: 'author', open: true },
    { name: 'Year', uid: 'date', open: true, getValue: item => item.date.getFullYear() }
  ];

  // 2. Define any extra sort types
  const extraSortTypes = {
    newest: { text: 'Date (Newest)', sort: (items) => [...items].sort((a, b) => b.date - a.date) },
    oldest: { text: 'Date (Oldest)', sort: (items) => [...items].sort((a, b) => a.date - b.date) }
  };

  // 3. Initialize the composable with new options
  const {
    facets,
    searchValue,
    selectedSort,
    sortTypes,
    displayItems,
    handleFacetChange, // Use the built-in handler
    clearFilters
  } = useFacets(allItems, {
    facetFields,
    extraSortTypes,
    initialSortType: 'newest',
    searchOptions: { keys: ['title', 'description'] }
  });
<\/script>

<template>
  <UluFacetsSidebarLayout>
    <template #header>
      <div>
        <h2>Found {{ displayItems.length }} items</h2>
        <UluFacetsSort v-model="selectedSort" :sort-types="sortTypes" />
      </div>
    </template>
    <template #sidebar>
      <UluFacetsSearch v-model="searchValue" placeholder="Search articles..." />
      <div>
        <h3>Filters</h3>
        <button v-if="facets.some(f => f.selectedCount > 0)" @click="clearFilters">Clear</button>
      </div>
      <UluFacetsFilters :facets="facets" @facet-change="handleFacetChange" :max-visible="5" />
    </template>
    <template #main>
      <UluFacetsResults :items="displayItems">
        <template #item="{ item }">
          <div>
            <h3>{{ item.title }}</h3>
            <p>{{ item.description }}</p>
            <small>By {{ item.author.join(', ') }}</small><br/>
            <small>Published on: {{ item.date.toLocaleDateString() }}</small>
          </div>
        </template>
        <template #empty>
          <div>
            <p>No matching items found. Try clearing some filters.</p>
          </div>
        </template>
      </UluFacetsResults>
    </template>
  </UluFacetsSidebarLayout>
</template>
`})})]})}function d(n={}){const{wrapper:e}={...s(),...n.components};return e?t(e,{...n,children:t(a,{...n})}):a(n)}const p=[];export{p as __namedExportsOrder,d as default};
