<template>
  <div class="BibliographyList">
    <LayoutListPage title="Bibliography" icon="type:bibliography">
      <template #intro>
        <AppContent uid="bibliographyIntroduction" />
      </template>
      <template #default>
        <UluFacetsSidebarLayout>
          <template #sidebar>
            <UluFacetsSearch v-model="searchValue" />
            <UluFacetsSort v-model="selectedSort" :sort-types="sortTypes" />
            <UluFacetsFilterLists :facets="facets" @facet-change="handleFacetChange" />
          </template>
          <template #main>
            <UluFacetsResults :items="paginatedItems">
              <template #item="{ item }">
                <div class="source-item">
                  <h3>{{ item.title || "NO TITLE" }}</h3>
                  <div>
                    <PortableText v-if="item.citation" :value="item.citation" />
                  </div>
                  <small v-if="item.publicationDate">Published on: {{ item.publicationDate }}</small>
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
      </template>
    </LayoutListPage>
  </div>
</template>

<script setup>
  import { ref } from "vue";
  import { PortableText } from "@portabletext/vue";
  import sources from "@/api/virtual/sources.js?virtual-module";
  import {
    useFacets,
    usePagination,
    UluFacetsSidebarLayout,
    UluFacetsFilterLists,
    UluFacetsSort,
    UluFacetsSearch,
    UluFacetsResults
  } from "@ulu/frontend-vue";

  const sorterDateLatest = (a, b) => new Date(b.publicationDate) - new Date(a.publicationDate);

  const config = {
    facetFields: [
      { name: "Chapters", uid: "chapters", open: false, getValue: item => item.chapters?.map(c => c.uuid) },
      { name: "Types", uid: "types", open: true },
      { name: "Topics", uid: "topics", open: true },
      { name: "Citation Type", uid: "citationType", open: true },
      { name: "Source Type", uid: "sourceType", open: true },
      { name: "Authors", uid: "authors", open: false },
      { name: "Source Name", uid: "sourceName", open: false }
    ],
    extraSortTypes: {
      newest: {
        text: "Date (Newest)",
        sort: items => [...items].sort(sorterDateLatest)
      },
      oldest: {
        text: "Date (Oldest)",
        sort: items => [...items].sort(sorterDateLatest).reverse()
      }
    },
    initialSortType: "az",
    // Remove quotes and stuff from beginning when sorting
    getSortValue: item => item.title ? item.title.replace(/^[^A-Za-z0-9]+/, "") : "",
    searchOptions: {
      keys: ["title", "authors", "sourceName", "topics", "types", "citation"]
    }
  };

  const itemsPerPage = 20;

  const {
    facets,
    searchValue,
    selectedSort,
    sortTypes,
    displayItems,
    handleFacetChange,
  } = useFacets(ref(sources), config);

  const {
    currentPage,
    totalPages,
    paginatedItems,
    pagerItems,
    pagerEllipses
  } = usePagination(displayItems, itemsPerPage);
</script>

<style lang="scss">
// Add some basic styling for the item display
.source-item {
  padding: 1rem;
  border-bottom: 1px solid #eee;

  h3 {
    margin: 0 0 0.5rem;
  }

  p {
    margin: 0 0 0.5rem;
    font-style: italic;
  }
}
</style>