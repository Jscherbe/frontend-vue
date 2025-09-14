import{I as e}from"./jsx-runtime-D2iQUYIC.js";import{useMDXComponents as s}from"./index-DIzwWG-n.js";import{M as a,c as i}from"./blocks-yEtLKnLt.js";import{r}from"./index-vwjNkSeb.js";import"./iframe-CSkK6diQ.js";import"./preload-helper-BJwshlQW.js";const l=`# Change Log

## 0.1.1-beta.9

- \`plugins/core\` and \`UluSlideShow\` fix incorrect prev/next icons (swapped)

## 0.1.1-beta.8

- \`UluFacetsSidebarLayout\` change default classname to \`facets-sidebar\` from \`facets-sidebar-layout\`, also add classes (just button for now) and mobileButtonText props

## 0.1.1-beta.7

- \`UluMenu\` Fix router link props (activeClass, exactActiveClass) if the user doesn't define the value in classes prop. Now if undefined the defaults classes from vue-router will work correctly. Also fixed binding router props when menu item isn't a route link.

## 0.1.1-beta.6

- \`UluMenuStack\` Added \`modifiers\` prop and \`containerElement\` prop (convert to composition API)

## 0.1.1-beta.5

- Adding back (types, typesVersions) to test published version (without it vscode intellisense isn't working)

## 0.1.1-beta.4

- Updated typescript declaration generetions to generate decalrations for .vue files and .js files in library. Remove old typescript \`package.json\` (types, typesVersions) so that only the exports hold paths to types
- Update vscode snippets in \`resources/vscode/ulu-frontend-vue-components.code-snippets\`

## 0.1.1-beta.3

- **Optimized \`useFacets\` Counting:**
  - The counting mechanism for \`countMode: 'intuitive'\` has been rewritten to use an inverted index.
  - This new approach avoids expensive re-filtering of the entire item set, resolving performance issues and UI freezes on large datasets.

## 0.1.1-beta.2

- **\`UluProgressBar\` Enhanced Customization**: The progress bar has been significantly updated for greater flexibility.
  - New props have been added: \`classes\` (for custom styling), \`labelElement\`, \`noValues\`, \`amountInHeader\`.
  - A \`formatValue\` function prop allows for easy formatting of display values (e.g., adding units like '%').
  - New named slots (\`valueAmount\`, \`valueDeficit\`, \`valueTotal\`) provide full control over the HTML structure of the value display.
- **\`UluProgressCircle\` API Alignment**: Refactored the component to align its API with \`UluProgressBar\`.
  - Converted to Composition API.
  - Added a \`noValue\` prop to hide the percentage display.
  - Added a \`formatValue\` function prop for easy value formatting.
  - Added a \`value\` slot for full control over the value's HTML.

## 0.1.1-beta.1

- **BREAKING CHANGE:** Unified the API for components with trigger/content behavior (\`UluCollapsible\`, \`UluAccordion\`, \`UluPopover\`, \`UluDropdown\`, etc.) to improve consistency and developer experience.
  - The slot for the clickable element has been standardized to \`trigger\`. (Previously \`toggle\` or \`default\` in some components).
  - The prop for the trigger's text content has been standardized to \`triggerText\`. (Previously \`title\` or \`toggleText\`).
  - The slot for the main content that is shown/hidden has been standardized to \`default\`. (Previously \`content\` in some components).
  - State and control functions (\`{ isOpen, toggle, close }\`) are now more consistently passed to slots.
- \`UluProgressCircle\` component for circular progress indicators. Replaces and enhances the old \`UluProgressDonut\`.
- \`UluProgressBar\` component, refactored for a more flexible API with modifier props and an \`icon\` slot.
- Make sure all component props are documented (displayed in documentation/storybook)
- \`UluAccordion\` (**possible breaking changes**)
  - update to use \`UluCollapsible\` 
  - Slot summary renamed toggle to match collapsible and to keep naming unified 
  - Classes prop changed to match new UluCollapsible's classes keys
  - (classes prop keys change and slots name changes to match UluCollapsible, **breaking change if using classes**, they now match classes keys for UluCollapsible for consistency)
  - Allow using v-model to control
- \`UluCollapsibleRegion\` renamed \`UluCollapsible\` (**possible breaking changes**)
  - Allow using v-model to control
  - Add classes prop
  - Classes changed to kebab case
  - Remove internal height auto animation (and props)
  - Remove fade animation (and props)
  - Now uses auto animate library to fade/transition height
  - Add new animate prop which can be true or optional config for @formkit/auto-animate 
- Add - \`UluAccordionGroup\` for sets of accordions (one open at time)
- \`UluMenu\`: Allow menu users to define classes for itemSeparatorBefore/itemSeparatorAfter
- \`UluMenuStack\`: Allow items to have separators above or below them using \`separatorBefore\` and \`separatorAfter\` properties on each item.
- Add missing toast-animation for toast plugin
- **Enhanced \`useFacets\` with Item Counts:**
  - A \`countMode\` option (\`'intuitive'\`, \`'simple'\`, \`'none'\`) now controls how item counts are calculated and displayed for each facet.
  - **\`intuitive\` mode:** Provides highly contextual counts.
    - For *unselected* items, the count reflects the results if that filter were **added**.
    - For *selected* items, the count reflects how many of the **current results** match that filter.
  - **\`simple\` mode:** Counts are calculated against items that match filters from *other* groups, offering a less expensive performance footprint.
  - **Fixed:** The counting logic for selected items in \`intuitive\` mode is now more accurate and predictable.

## 0.1.0-beta.35

- \`UluFacetsSidebarLayout.vue\` make filters responsive (in modal on mobile)
- Update component class names from PascalCase to kebab-case for \`UluCollapsibleRegion\` and all \`UluFacets\` components for consistency.
- Update facets components from component names to simplified kebab case names

## 0.1.0-beta.34

- Update \`UluSelectableMenu\` and \`UluFacetsFilterPopovers\` to have hideInputs prop

## 0.1.0-beta.33

- Update \`UluSelectableMenu\` to have correct child classes to match frontend component

## 0.1.0-beta.32

- Fixed facet sorting in \`useFacets\` to sort by the display label alphabetically instead of the underlying \`uid\`.

## 0.1.0-beta.31

- \`UluFacetsFilterPopovers.vue\` Add "trigger" slot

## 0.1.0-beta.30

- Improved \`useFacets\` composable by centralizing single-selection logic in \`handleFacetChange\`. This makes the system more robust and ensures correct behavior for facet groups that do not allow multiple selections.

## 0.1.0-beta.29

- Update popover plugin's \`UluPopover\` compenent markup to match frontend
  - Remove incorrect aria-hidden
  - Add aria-labelledby to link the trigger to the content

## 0.1.0-beta.28

- New \`UluFacetsFilterSelects\` and \`UluFacetsFilterPopovers\` components to provide flexible UI options for displaying facet filters. Popovers offer both single and multiple while selects is native select single selection
- New \`UluFacetsHeaderLayout\` component for layouts where filter controls appear above the results list.
- Renamed \`UluFacetsFilters\` to \`UluFacetsFilterLists\` to more accurately describe its function and to align with new filter components. Also make this allow for both multiple and single selections
- Changed \`UluCheckboxMenu\` to \`UluSelectableMenu\` to support \`type="radio"\`, a \`legend\` prop for accessibility, and proper \`v-model\` handling for both radio and checkbox types.
- Enhanced \`UluFacetsResults\` to accept a \`classes\` object prop (\`{ list, item }\`) for custom styling of internal elements, conforming to library conventions.

## 0.1.0-beta.27

- Update \`UluBreadcrumb\` to match current @ulu/frontend scss "breadcrumb" component structure/classes

## 0.1.0-beta.26

- Unify \`utils.router\` page title resolution so all functions pull title from route's meta the same way. Note this will be the pattern for labeling pages moving forward because it works better as source of truth and in component set titles don't work well for menus
- Remove \`usePageTitle\` composable, this in component title setting pattern doesn't work well for breadcrumbs and menus (since we need this information before components are used/mounted)
- Move page title setting functionality to \`useDocumentTitle\` if a page truly needs dynamic title (ie. browser tab title) \`useDocumentTitle\` can be passed a title in a specific component (ie. for title that would be different than the pages title [like shopping cart with count])



## 0.1.0-beta.22-25

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
`,e(i,{children:l})]})}function h(t={}){const{wrapper:n}={...s(),...t.components};return n?e(n,{...t,children:e(o,{...t})}):o()}const g=[];export{g as __namedExportsOrder,h as default};
