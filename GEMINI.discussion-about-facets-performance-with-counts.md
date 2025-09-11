# Facets Performance Discussion Context

This document summarizes the discussion regarding performance issues with the `useFacets` composable, specifically concerning the `countMode` feature.

## The Core Problem

- **File:** `@/lib/components/systems/facets/useFacets.js`
- **Issue:** The `countMode: 'intuitive'` option is not performant, taking 5-15 seconds to update on a dataset of ~1600 items.
- **Cause:** The current implementation calculates the count for each facet option by performing a deep clone (`JSON.parse(JSON.stringify())`) and then re-filtering the entire list of items (`searchedItems`). This process is repeated for every single option, leading to thousands of expensive operations.

## Initial Proposed Solutions (Detailed)

Here are the detailed options we discussed for refactoring.

### Option 1: Optimize the "Simple" Count

This is a direct improvement to the existing `simple` count mode.

- **Current Logic:** It iterates through each `group`, filters items by *other* groups (`getFilteredItems`), then iterates through each `child` in the group and runs another `.filter()` on the `itemsToCount` to get the length. This inner loop is inefficient.
- **Proposed Optimization:** Instead of the inner `child.count = itemsToCount.filter(...).length`, we can iterate through `itemsToCount` just **once** per group to build a `Map` of counts (e.g., `{ "facet-value-A": 10, "facet-value-B": 25 }`). Then, we loop through the group's children and assign the counts from the map. This changes the complexity of the inner part from `(num_children * num_items)` to `(num_items + num_children)`.

### Option 2: A Performant "Intuitive" Count

This was the recommended approach to fix the `intuitive` mode directly.

- **Strategy:** The core idea is to **stop re-filtering the array of objects** and instead use an **inverted index** with fast set operations.
- **Step 1: Build an Index:**
    - When `searchedItems` changes, create an index (a `Map`).
    - The map keys would be a string like `'''{group.uid}:{child.uid}'''` (e.g., `'category:cat1'`).
    - The map values would be a `Set` of integer indices, representing the items that match that facet.
    - This requires iterating through `searchedItems` only **once** to build the entire index.
- **Step 2: Calculate Counts with the Index:**
    - To calculate the count for a potential filter change, we can use the index.
    - First, determine the hypothetical set of active filters (`tempSelected`).
    - For each group in `tempSelected`, get the corresponding sets of item indices from our index.
    - Combine these sets using `union` (for OR logic, `group.match !== 'all'`) or `intersection` (for AND logic, `group.match === 'all'`). This gives a single `Set` of matching items for the group.
    - Finally, `intersect` the resulting sets from all the active groups.
    - The final count is simply the `.size` of the final `Set`. This is dramatically faster than iterating and filtering objects.
- **Handling "Intuitive" Logic:** The original `intuitive` logic has some special (and potentially buggy) cases for already-selected items. We could handle this by:
    - Using the fast, original logic for *selected* items (which operates on the much smaller `filteredItems` array).
    - Using our new, performant index-based approach only for *unselected* items, as they are the source of the major performance bottleneck.

### Option 3: Integrate a Specialized Library

- **Strategy:** Instead of writing the indexing logic ourselves, use a library purpose-built for it.
- **How it Works:** A library like `crossfilter2` would be given the `searchedItems`. We would define "dimensions" (which map to our facet groups). When we apply a filter to one dimension, the library can provide near-instantaneous counts for all other dimensions because it maintains its own highly optimized internal indexes.
- **Pros:** Extremely fast, robust, and scalable.
- **Cons:** Adds a new dependency. `crossfilter2` specifically is old (last updated 5+ years ago), so we would need to research modern alternatives. It would also require a more significant refactor to integrate.

## Key Architectural Considerations & Future Direction

- **Flexibility:** The `useFacets` composable is for client-side operations. The facet UI components (`UluFacetsFilterLists`, etc.) must remain decoupled from the state logic so they can be used in other contexts, such as being powered by a back-end API.
- **Modularity:** Complex features like the counting mechanism should be optional and tree-shakable. The user suggests they could be implemented as separate utilities that are imported and passed into `useFacets` only when needed.
- **Modern Tooling:** We should research modern, lightweight libraries for in-memory indexing and querying as alternatives to `crossfilter2`.
- **Alternative Data Structures:** We should consider if the data can be pre-structured or stored differently in the browser to make it inherently faster to query.

## Next Steps

1.  Research modern, lightweight libraries for in-memory indexing and querying.
2.  Design a more modular API for `useFacets` where performance-intensive features can be optionally included.
3.  Decide on a path forward, likely starting with **Option 2** as a proof-of-concept, keeping the new modular API design in mind.

## Relevant Files for Context

- `@/lib/components/systems/facets/useFacets.js`
- `@/lib/components/systems/facets/Facets.stories.js`
- `@/lib/components/systems/facets/facets.story.mdx`
- `@/lib/components/systems/facets/ExampleFacetsWithPagination.vue`