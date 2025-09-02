import{I as e}from"./jsx-runtime-D2TpY6sK.js";import{useMDXComponents as i}from"./index-DIzwWG-n.js";import{M as a,c as s}from"./blocks-BvO0jhhB.js";import{r}from"./index-vwjNkSeb.js";import"./iframe-D6k7poV4.js";import"./preload-helper-BJwshlQW.js";const l=`# Change Log

## 0.1.0-beta.22-24

- Add generated Typescript declarations (types) to published package for IDE support

## 0.1.0-beta.21

- Remove placeholder for \`useDocumentTitle\` argument titleTemplate

## 0.1.0-beta.20

- Setup new utility function \`$createBreadcrumb\` for simple route based breadcrumb trail
- Setup new composable \`usePageTitle\` for setting page titles (including computed page titles)
- Setup new composable \`useDocumentTitle\` for automatically injecting page title from \`usePageTitle\` in unhead useHead

## 0.1.0-beta.19

- Convert some components to composition API
- Update \`UluTag\` component to have size, template adjustments/fixes
- Add \`spaced\` prop to \`UluIcon\` which will apply \`.flow-inline\` utility class
- Working on setting up stories (documentation) for form components
- Update all custom emitted events to kebab case
  - Change UluFormFile event to singular from 'files-changed' to 'file-changed'
- Remove all legacy FaIcon icons left in components, replace with UluIcon

## 0.1.0-beta.18

- Finish setting up utils, which can be imported as { utils } and used like \`utils.dom.refToElement()\` or \`utils.router.nativeLinkRouter()\`. Setup basic story/docs for these.

## 0.1.0-beta.17

- Add \`components/systems/skeleton\` component

## 0.1.0-beta.16

- Add \`usePagination\` composable to make handling pagination easy to setup with various components
  - Can be used with UluPager, Custom logic or something like the facets system

## 0.1.0-beta.15

- Setup \`UluPager\` component (matches ulu frontend pager structure for styling)

## 0.1.0-beta.13 - 0.1.0-beta.14

- Make \`useFacets\` default alpha sorter account for missing values

## 0.1.0-beta.12

- Working on making facets system helper (\`useFacets\`) more flexible for sorts
  - Add helpers to \`useFacets\` to reduce boilerplate code needed with the conversion from monolithic design to modular user controls state and output/etc design:
    - Added \`facetFields\` option to automatically generate facet groups and values from the items list.
    - Exposed a \`handleFacetChange\` method to simplify managing facet selection state.
    - Corrected filtering logic to use AND (\`every\`) when combining different facet groups instead of OR (\`some\`).
    - Made \`clearFilters\` more robust by resetting selections instead of recreating facets.
    - Improved automatic facet generation to react to changes in the source items list.

## 0.1.0-beta.11

- Refactor facets from monolithic architecture to modular separate components, provide composable to reuse filtering/sorting/etc logic that used to be built into the main component. This way we can: (a) have the same easy setup for simple data (in browser filtering), (b) Have the flexibility to layout however, (c) Provide preset layout that is the usual scenario (ie. sidebar with list/card view)

## 0.1.0-beta.10

- Add \`UluButtonVerbose\` component

## 0.1.0-beta.9

- Add snippets (not in package, available in repo \`/resources/vscode\`)
- \`UluTitleRail\` - Add prop for rule modifier

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

- Add lodash dependency`;function o(t){return e(r.Fragment,{children:[e(a,{title:"Overview/Change Log"}),`
`,e(s,{children:l})]})}function h(t={}){const{wrapper:n}={...i(),...t.components};return n?e(n,{...t,children:e(o,{...t})}):o()}const f=[];export{f as __namedExportsOrder,h as default};
