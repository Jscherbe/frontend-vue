# Change Log

## 0.1.0-beta.13

- Make useFacets default alpha sorter account for missing values

## 0.1.0-beta.12

- Working on making facets system helper (useFacets) more flexible for sorts
  - Add helpers to useFacets to reduce boilerplate code needed with the conversion from monolithic design to modular user controls state and output/etc design:
    - Added `facetFields` option to automatically generate facet groups and values from the items list.
    - Exposed a `handleFacetChange` method to simplify managing facet selection state.
    - Corrected filtering logic to use AND (`every`) when combining different facet groups instead of OR (`some`).
    - Made `clearFilters` more robust by resetting selections instead of recreating facets.
    - Improved automatic facet generation to react to changes in the source items list.

## 0.1.0-beta.11

- Refactor facets from monolithic architecture to modular separate components, provide composable to reuse filtering/sorting/etc logic that used to be built into the main component. This way we can: (a) have the same easy setup for simple data (in browser filtering), (b) Have the flexibility to layout however, (c) Provide preset layout that is the usual scenario (ie. sidebar with list/card view)

## 0.1.0-beta.10

- Add `UluButtonVerbose` component

## 0.1.0-beta.9

- Add snippets (not in package, available in repo `/resources/vscode`)
- `UluTitleRail` - Add prop for rule modifier

## 0.1.0-beta.8

- Make new composable for required injects (so user will be able to understand the failure and install plugin)
  - Add new meta module with injectRegistry for lookup
  - Can be used with external or site specific inject
  - If plugin will tell user the missing plugin
- Refactor layout components UluAdaptiveLayout.vue, UluWhenBreakpoint.vue to use this and to composition API

## 0.1.0-beta.7

- Expose generated typescript types (from jsdoc comments in lib) for IDE support/annotations

## 0.1.0-beta.6

- Redesign icon system API (so that Ulu icon only has one defining prop) to make it easier for components to support icon customization while also supporting both by type or specific icons
  - Now UluIcon has one prop "icon" which if passed a string with "type:" prefix will be resolved as type from configuration in core plugin (ie. "type:settings", "type:resizerBoth")
  - This is to make internal templating and props passed between templates and UluIcon more ergonomic

## 0.1.0-beta.5

- Refactor settings.js to core plugin (issues with different versions of module in build/bundle when testing, prefer centralized plugin that provide/injects)

## 0.1.0-beta.4

- Change lodash dependency to module lodash-es 

## 0.1.0-beta.3

- Change lodash dependency to module lodash.cloneDeep module

## 0.1.0-beta.2

- Add lodash dependency