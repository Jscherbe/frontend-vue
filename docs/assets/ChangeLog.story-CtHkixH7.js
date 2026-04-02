import{I as e}from"./jsx-runtime-EzbJICPQ.js";import{useMDXComponents as s}from"./index-DIzwWG-n.js";import{M as i,c as a}from"./blocks-60dJJLM1.js";import{r}from"./index-vwjNkSeb.js";import"./iframe-Db2mi-K0.js";import"./preload-helper-BJwshlQW.js";const l=`# Change Log

## 0.5.9

- Update "uluTransformAssetUrls" in vite module to include "imageSrc" for UluCard
  - So that vite automatically resolves paths in this prop. You need to include "uluTransformAssetUrls" in your vite config for this to work

## 0.5.8

- \`UluCard\` | Going to keep props \`imageSrc\` and \`imageAlt\` as they are useful for simple composition over defining slots or \`image\` property (object passed to UluImage)
  - Remove the ability for \`image\` prop from previous update (0.5.7) to be string (explicitly object that aligns with \`UluImage\` props)

## 0.5.7

- \`UluCard\` (**Deprecated Props**)
  - Replaced \`imageSrc\` and \`imageAlt\` with a unified \`image\` prop. The \`image\` prop accepts a simple string (for src) or an object (to pass complex \`UluImage\` props like \`src\`, \`alt\`, \`sources\`, and \`classes\`). \`imageSrc\` and \`imageAlt\` still work but will trigger deprecation warnings in the console during development.
- \`UluPlaceholderImage\`
  - Now uses \`UluImage\` internally to ensure consistent image rendering across the library.

## 0.5.6

- \`UluImageSource\` (new component for composing sources within UluImage for DEX)
  - The new component is designed to be passed through slot on \`<UluImage>\` so you don't need to import the image (in \`<script>\`) just to pass it. This works alongside the new \`uluTransformAssetUrls\` utility to allow writing image paths directly on UluImage "src" and UluImageSource "srcset" props.
- \`vite.js\` (new module)
  - A new module (\`@ulu/frontend-vue/vite.js\`) specifically for Vite integrations. Currently it provides the \`uluTransformAssetUrls\` export to be used in the Vue Vite plugin (\`vite.config.js\`) to automatically resolve relative asset URLs for UluImage and UluImageSource components. See documentation for details.

## 0.5.5

- \`UluAction\` (used by UluButton, etc)
  - Fix download prop when passed as boolean (should just have boolean prop instead was outputting download="true") and not string (filename)
  - Setup stories to test/confirm changes

## 0.5.4

- Update peer dep @ulu/frontend to latest version
- Add \`useTableData()\` composable that unifies how tabular column structures are handled for data-driven table components props (eg. columns, rows)
- Add \`UluTable, UluDataTable\` components
  - UluTable is just a simple table component (no classes/etc) can be used to create any type of valid table structure (including nested columns) identical to the API for UluTableSticky which now both use new useTableData composable
- \`UluList\` 
  - Internally change injection key from "uluListClasses" to "uluListContext" to support other props that need to be passed down 
  - Update \`UluListItem\` to reflect this and add new "element" prop for when list item is used not as semantic list
- Add \`UluCounterList\` component
  - Match @ulu/frontend counter-list component 
  - Which can accept \`UluListItem\` component as children or be data-driven

## 0.5.3

- Component "Dual-Pattern" Updates: Several components have been updated to support a "compositional" API (using a default slot for manual HTML construction) alongside their standard "data-driven" API (passing an array to an \`items\` prop).
  - \`UluList\`
    - Now supports manual composition using a default slot if the \`items\` prop is omitted.
    - Added new \`UluListItem\` component to ensure the \`classes.item\` from the list is correctly applied when manually composing.
  - \`UluDefinitionList\`
    - Added support for manual composition.
    - Added new \`UluDefinitionListItem\` component to assist with correct semantic markup (\`<dt>\` and \`<dd>\`) and class injection when manually composing.
  - \`UluBreadcrumb\`
    - Added support for adding classes to specific items via the items prop configuration (e.g. \`classes: { current: '...' }\` or item-specific \`item.classes = { item: '...', link: '...' }\`).

## 0.5.2

- \`UluAccordionGroup\`
  - Updated to allow composing UluAccordion within UluAccordionGroup instead of passing array of items to UluAccordionGroup. So it now supports both data driven accordion creation and the ability to compose yourself (in-case you have complex markup where using slots on data driven isn't ideal)
  - \`UluAccordion\` | Minor updates to make it work with UluAccordionGroup (note above)

## 0.5.1

- \`UluTabsGroup\`
  - Remove unneeded div around tabpanels to match @ulu/frontend tabs component structure 
    - This is breaking the ">" direct child selection needed

## 0.5.0

- Update peer dep @ulu/frontend to 0.4.0 and update components below to match changes
- \`UluProgressBar\`
  - Added new semantic style props: \`danger\`, \`warning\`, \`success\` to replace legacy status options.
- \`UluProgressCircle\`
  - **Breaking:** Remove \`status\` prop in favor of unified modifier system (using \`useModifiers\`).
  - Added new \`modifiers\` prop to pass arbitrary modifiers.
  - Added new semantic style props: \`danger\`, \`warning\`, \`success\` to replace legacy status options.

## 0.4.1

- \`UluMenu\` | Fix incorrect v-bind on UluAction which causes incorrect fallthrough attributes on element (now passing the specific props UluAction needs like other components using it)

## 0.4.0

- \`UluList\`
  - **Breaking: (if using classes prop)** Correct non-standard classes object key "listItem" to "item" to match other components
- **Versioning Change:** This package will no longer try to sync versions with @ulu/frontend but will keep the ideal version updated in 'peerDependencies'

## 0.3.2

- \`UluProgressBar\`
  - Add modifiers system (prop), 
  - Add rounded prop and modifier

## 0.3.1

- \`UluModal\` | Add fullscreen prop

## 0.3.0

- Matching current ulu frontend minor version
- Updating remaining options API components to composition API (eg. script setup)
  - Note this shouldn't break anything unless you were manually grabbing properties from a component (to grab element refs, methods, etc) which options API would expose and composition API does not. This is not how components were meant to be used, if a component does need that it would expose (ie. defineExpose) those intentionally. So that shouldn't be needed as components that do need that sort of behavior have dedicated methods for advanced usage like that (ie. provide/inject, composition API middleman, v-model [modal, etc]). 
  - Note major components that were refactored but not completely tested (UluModal, UluTableSticky)
- \`UluModal\` 
  - Add the new fullscreenMobile modifier as a prop/option
  - Implement the new fallback for lack of toggle event in Safari (observeDialogToggle from frontend)
- \`UluDefinitionList\`
  - Allow item.description to be an array to cover multiple \`<dd>\` elements
  - Note this will work for pre-existing setups (instead of array.join default array to string you would get <dd>, <dd>, ...) but 
    - **Important Breaking:** If you were using a slot and altering your output based on an array value you will incorrectly get multiple <dd>
- Add \`UluImage\` so that image API across components is unified (through this components props)
  - So components displaying images will use this as they're API (the props)
  - Also simply works for simple images and all attributes are inherited to the inner img element if sources are given (to support picture elements in same API)
- **Remove UluSlideShow**
  - Wasn't ever setup fully, added sliders below instead
- Add \`UluScrollSlider\` to match frontend components
- Add \`UluOverflowScroller\` to match frontend components
- Add \`UluSlider\` to match frontend components (accessible, carousel pattern)
- Start \`UluImageSlider\`
  - This components uses UluSlider and replace functionality UluImageSlideShow had
  - Not finished yet needs to have a stylesheet in main library and traditional CSS stuff setup then we can finish the theme parts (vue stuff is all strated)
- Add \`UluCaptionedFigure\` to match frontend component
- Add \`UluAction\` to be the unified API for how router-link/button/a are resolved (eg. to/href/click)
  - This replaces repetitive duplicated code that resolves this throughout (UluButton, UluMenu, ...)

## 0.2.0-beta.16

- \`UluMenu\` | Add new slot for "item" for adding things to the \`<li>\` (custom submenus, etc), while default slot (pre-existing) will be the inner \`<a>\` or \`<button>\` or \`<router-link>\`
- \`UluMenuStack\`, \`UluDropdown\`, \`UluNavStrip\` | All use \`UluMenu\` under the hood, in order to keep the API consistent these all correctly forward the user slots to UserMenu incase you need to modify the link or item

## 0.2.0-beta.15

- \`UluButton\` | Allow 'target' prop to add attribute to router-link when using to (was only href (link) before)

## 0.2.0-beta.14

- \`UluTabs\` | Make this component inherit attributes correctly (since it has inner wrapper from headless ui). Also add modifiers system for modifier prop like other components

## 0.2.0-beta.13

- \`useFacets\` | For convenience, we've added the concept of pinned item(s) 
  - There is a new config property (isPinned(), passed item, return of boolean) to identify items you want pinned and the underlying logic for creating the displayed item list will now prepend these items (after sort so they retain user sort order for multiple pinned items)
  - **Future Note:** when using with \`usePagination\` it will result in pinned items only on first page. If pinned items are needed on every page, and if we wanted to support that we would need to send list of pinned items (not currently included in useFacets output) so it can be passed to \`usePagination\` then usePagination would need to handle the pinned items (accounting for the max item count per page vs the number of pinned items). Since this isn't something that is currently needed, and seems like a niche use case, \`usePagination\` stays with it's simple implementation for now with no knowledge of pinned
    - We do include new computed property from \`useFacets\` in the event that you need to do something programmatic with the list of pinned items (advanced pagination like above for example), the new computed is \`pinnedItems\`

## 0.2.0-beta.12

Add check for items.length (so it doesn't need to be conditional on user side for empty lists/menus/etc) on list like components (\`UluDefinitionList\`, \`UluList\`, \`UluMenu\`, \`UluBadgeStack\`, \`UluMenuStack\`, \`UluNavStrip\`, \`UluAccordionGroup\`)

## 0.2.0-beta.11

\`UluRouteAnnouncer\` | Prop \`getTitle\` now uses router.util.getRouteTitle() so that titles can be either string or a function (that gets passed current route)

## 0.2.0-beta.10

\`UluRouteAnnouncer\` | Convert to composition API. Create story for this component so it's documented.

## 0.2.0-beta.9

\`UluConditionalWrapper\` | Fix warning related to unused properties when using "unwrapped". Added story to documentation for this component.

## 0.2.0-beta.8

\`utils/router.js > $createBreadcrumb()\` | Fix issue with correctly resolving "current" crumb when using nested routes (where path is "") for child.

## 0.2.0-beta.7

- \`UluModal\` | Add button classes to classes prop defaults so it matches the udpated @ulu/frontend (modal/modal builder), which was adjusted to use the button classes instead of supplying it's own styles for the button.

## 0.2.0-beta.6

- Update \`@ulu/utils\` and \`@ulu/frontend\` peerDependencies

## 0.2.0-beta.5

- \`useBreakpointManager\` | Fix the async import for @ulu/frontend (BreakpointManager) so that it only imports that specific module (through deep import) not the entire library. To fix issues with tree-shaking.

## 0.2.0-beta.4

- Updated vite config to bundle library with preserveModules 
  - Improve tree-shaking
  - Allow user to be able to see inner library deps when using things like rollup bundle analyzer
  - Same API for importing modules just different bundle structure under the hood

## 0.2.0-beta.3

- Updated how dependencies are configured in package json 

## 0.2.0-beta.2

- \`UluCard\` | Fix issue resolving ref element when using \`titleTo\` and \`proxyClick\` props

## 0.2.0-beta.1

- Update all @ulu/frontend dependencies (as that library has adjusted exports and other things). Incrementing version to match current minor version of @ulu/frontend
- Internal fixes related to frontend BreakpointManager 

## 0.1.3-beta.20

- \`UluSkipLink\` - Fix incorrect frontend component class

## 0.1.3-beta.19

- \`UluWhenBreakpoint\` - Fix bug in underlying breakpointManager classes remove method, workaround in place until @ulu/frontend fix for underlying broken method is in place
- \`UluDataGrid\` - Fix error on unmount setPositionClasses when root element is already removed
- Update \`@ulu/utils\` dependency (for new debounce.cancel())

## 0.1.3-beta.18

- \`UluWhenBreakpoint\` - Fix errors/mistakes in accessing manager from reactive wrapper

## 0.1.3-beta.17

- **ScrollAnchors System** - Change vocabulary of inactiveFrom and activeFrom (from above/below to agnostic forward/reverse to match scrollpoints library)

## 0.1.3-beta.16

- **ScrollAnchors System** 
  - Add state for (\`inactive\`, and \`activeFrom\`/\`inactiveFrom\` which are scroll direction states for animating with CSS)
  - Add data-attribute to sections to express active/inactive and direction/from [above/below] to match how static js (Scrollpoint) library works. This is used for animating.
    - The attribute matches the static version of this library [data-scrollpoint-state] to expose its state for CSS

## 0.1.3-beta.15

- \`UluAccordionGroup\` - Make sure \`UluAccordion\` props are able to be populated from the group (triggerTextElement, modifiers, animate)

## 0.1.3-beta.14

- \`UluAccordionGroup\` - Add trigger slot for theming trigger in each accordion

## 0.1.3-beta.13

- \`_scroll-anchors-nav-animated.scss\` 
  - Make sure all colors pass through color.get incase they are palette entries in main library. 
  - Adjust specific custom property set by component to ulu prefixed \`--ulu-sa-nav-rail-width\` which is just used internally and not set by user

## 0.1.3-beta.12

- \`UluDataGrid\` - Add correct [data-grid-init] flag after column positions are resolved, for CSS to show row/column rules correctly

## 0.1.3-beta.11

- \`UluDataGrid\` - Update to allow 'element' and 'hidden' props (documented in story)
- **UluScrollAnchors System**
  - When multiple sections are intersecting, it will now pick only one to be active based on the scroll direction (the last
      one when scrolling down, the first one when scrolling up)
  - \`UluScrollAnchorsNavAnimated\` 
    - Add props (width, height, ...) which are added to documentation
    - \`_scroll-anchors-nav-animated.scss\` - Add stylesheet for animated nav, the other components are not pre-styled as they are used in a variety of layouts in sites/apps (exported from main library as \`component-scroll-anchors-nav-animated\` use like \`ulu-vue.component-scroll-anchors-nav-animated-set(( "rail-padding" : 30px ))\`,  \`ulu-vue.component-scroll-anchors-nav-animated-styles()\`)
  - Get rid of symbols for provide/inject and use ulu and system name safe namespace
    - Easier to use/debug and work with, unify with the rest of the library
  -  \`UluScrollAnchorsSection\`- Added title slot
  - \`useScrollAnchorsProvider\` - New internal composable that extracts the core \`IntersectionObserver\` logic from \`UluScrollAnchors.vue\` to improve maintainability. Fixed bug in scroll direction detection that prevented the active state from being cleared when scrolling past the first or last sections.
  - \`useScrollAnchorSections\` - New public composable that provides a clean API for accessing section data, intended for building custom navigation.
  - \`useScrollAnchorSection\` - New public composable that can be used to register sections manually for building custom sections
  - \`UluScrollAnchorsHeadlessSection\` - New headless component for creating a section with a custom structure. Replaces the former \`UluScrollAnchorsFlexibleSection\`.
  - \`UluScrollAnchorsNav\` & \`UluScrollAnchorsNavAnimated\` - Refactored to use the new \`useScrollAnchorSections\` composable.

## 0.1.3-beta.10

- \`UluScrollAnchorsNavAnimated\`- Add position relative to nav container (for default styles) these styles are meant to be overridden if needed (position sticky/etc). This way it works correctly be default.
- UluScrollAnchors system - Updated component stories/demos so they show the functionality they offer

## 0.1.3-beta.9

- \`UluAccordionGroup\`, \`UluWhenBreakpoint\` - Add missing export for this component to library exports

## 0.1.3-beta.8

- \`UluList\` - Minor issue, Fix "reversed" boolean attribute being stringified when using \`<ul>\`
- Update API documentation for \`useBreakpointManager\`

## 0.1.3-beta.7

- \`UluFormRadio\` - Add Number as allowed value for v-model

## 0.1.3-beta.6

- \`UluRule\` Add new component that matches frontend rule component
- \`UluFacetsFilterSelects\` Add \`classes\` prop so you can optionally add form-theme classes, etc

## 0.1.3-beta.5

- \`plugins/popover\` 
  - Remove unused pluginOption \`tooltipTeleportTo\` 
  - Add default to tooltip for \`teleportTo\` (body by default)
  - Setup a behavior in the showTooltip to check if \`teleportTo\` is defined, if so respect it, else check if tooltip would be displayed within a html \`<dialog>\` element, if it is change teleportTo the dialog
    - Since dialogs are in top layer tooltip in body would be underneath it. So this is a workaround for this so you don't have to keep a ref of the dialog

## 0.1.3-beta.4

- Fix missing exports for new form components, update api exports documentation

## 0.1.3-beta.3

- \`UluFacetSort\` and \`UluFacetSearch\` simplify classes prop keys

## 0.1.3-beta.2

- \`UluModal\` Fix not declared value for modalCount (previously replaced by newId)

## 0.1.3-beta.1

- **\`components/forms/\` Add form element components to match \`.form-theme\` (frontend component)
  - Changes how some of the pre-existing form components are templated and they now include the classes for the frontend component
- Internal: Update components that need unique id's to use newId util for simplicity

## 0.1.2-beta.9

- **\`useFacets\` Fix timing issue with internal init watcher (use watchPostEffect instead)

## 0.1.2-beta.8

- **\`useFacets\` now includes integrated URL synchronization.**
  - A new \`urlSync\` option has been added. When provided with a Vue Router instance and the current route, it will keep the facet state (filters, search, sorting) synchronized with the URL query parameters
  - Remove option for \`getItemFacet\` as it is unneeded (was incorrectly being used in 'simple' count mechanism)

## 0.1.2-beta.7

- \`useUluFloating\` Add computed property for \`isFixedStrategy\`
- \`popovers\` plugin
  - Account for fixed strategy with popover styles (has correct \`popover--fixed\` modifier)

## 0.1.2-beta.6

- Add \`useUluFloating\` composable (used in popovers/tooltips)
- \`popovers\` Plugin
  - Internal: Major changes overall, remove internal manager.js that was used to share state, instead use provide/inject from plugin
  - Remove \`options.plugins.global\` for whether or not to install the components globally and directive, it will just always install these
  - Update tooltip directive to use new internal api for sharing state and configuration
  - Update tooltip to allow for reactive values and component as a value if needed
    - Keep the pre-existing API for the directive but allow for reactivity API (ie. ref/etc)
  - Add composable \`useTooltip\` for any manual tooltip needs
  - Tooltip (show/hide) set \`aria-describedby\` attribute to link tooltip to element for accessibility
  - Tooltip composable for following type tooltip (for mouse cursor) is now exported as \`useTooltipFollow\` (wasn't exported publicly before but was originally called useFollow)
  - Move floating ui to new \`useUluFloating\` composable to share duplicated code between tooltips and popovers

## 0.1.2-beta.5

- \`UluFacetsSidebarLayout\`
  - Replaced static styles that were included in component SFC with scss module
  - Added scss module for the basic layout for facets sidebar component
    - Use like 
    - \`@use "@ulu/frontend-vue/scss" as ulu-vue;
    - \`@include ulu-vue.component-facets-sidebar-set(( // options ));
    - \`@include ulu-vue.component-facets-sidebar-styles();\`

## 0.1.2-beta.4

- Fix missing export for \`UluPager\`

## 0.1.2-beta.3

- Internal: move resolver to \`dist\`  so it has typescript declarations, import is the same  

## 0.1.2-beta.2

- Add [\`unplugin-vue-components\`](https://github.com/unplugin/unplugin-vue-components/tree/main]) resolver to exports via \`import { UluUnpluginResolver } from @ulu/frontend-vue/resolver\` 
- Remove \`toast\` and \`modals\` plugins options for \`componentName\` and \`componentDisplayName\`. As they are not likely to conflict since the library is namespaced with "Ulu" (reduce unneeded code). **Breaking** if used which is unlikely

## 0.1.2-beta.1

- **Breaking** Refactor so that importing this package is the bundled version only like:
  - \`import { anExport } from "@ulu/frontend-vue";
  - "@ulu/frontend-vue/scss" for scss modules.\\
  - This is to fix issues with using deep imports in projects (importing modules directly)
  - The new bundle excludes all vendor modules and you should install them in your project
  - The new combined module is \`dist/frontend-vue.js\` 
    - The module should be tree shakeable this way
    - Current size of entire library 222.30 kB │ gzip: 56.96 kB (everything)
  - \`types/\` have been moved to \`dist/\` and remapped in package exports / types
  - Removed \`typesVersions\` config from package.json. This was added to make vscode typescript intellisense work correctly, but now that everything is unified into one export this hopefully works correctly
  - Raw \`lib/\` directory is still available but is not part of the exports (just files if needed)
- Fix unmounted hook name \`plugins/popover/directive\` 

## 0.1.1-beta.21

- Add \`UluSanityRichText\` which is conditional output in portable text for wysiwyg like content (includes setup for images)
- Add \`UluConditionalWrapper\` (used internally) which outputs optional wrapper based on prop or outputs it's content without wrapper. Has (is and unwrapped props, is defines what the wrapper will be if not unwrapped)
- Change \`UluCondText\` to \`UluConditionalText\` since the library uses full words for everything for clarity over abbreviated names

## 0.1.1-beta.20

- \`UluCard\` Make sure title element is not printed if no title or title slot (cards without titles)

## 0.1.1-beta.19

- \`UluCard\` Updated proxy click behavior to add two new modes 
  - If you add \`data-ulu-card-proxy-target\` it will look for an element within the card to proxy the click to (if not using titleHref, titleTo)
  - If you don't have titleHref, titleTo, or data-ulu-card-proxy-target it will just emit 'proxy-click' event for user to do stuff on there side
  - Also refactor to composition API

## 0.1.1-beta.18

- \`UluDefinitionList\` Added new props to match frontend scss module modifiers and add base class to component

## 0.1.1-beta.17

- Create \`lib/components/systems/facets/UluFacetsFilterAccordions.vue\` for accordion implementation of filter lists, \`UluFacetsFilterLists\` is the unstyled collapsible version
- \`UluFacetsFilterLists\` Remove old props for \`UluCollapsible\`

## 0.1.1-beta.16

- \`lib/components/systems/facets/UluFacetsActiveFilters\` 
  - Add classes option and provide basic layout with defaults
  - Add classes, and labelElement props
  - Make list for accessibility

## 0.1.1-beta.15

- \`lib/components/systems/facets/\` Make all classes consistent 
  - Remove ulu- prefix
  - For individual components create base classes vs base and parent facets BEM class
  - Change FacetsFilterLists classname to facets-filters

## 0.1.1-beta.14

- Add class \`ulu-facets__filter-lists\` to \`UluFacetsFilterLists\`

## 0.1.1-beta.13

- Fix \`UluCollapsible\` open/closed class bindings

## 0.1.1-beta.12

- Remove \`UluCollapsible\` remove the inner container as it's no longer needed for animation
- Remove \`lib/components/systems/facets/UluFacetsFilterLists.vue\` Add classes for collapsible class options containerOpen (groupOpen), containerClosed (groupClosed)

## 0.1.1-beta.11

- Fix few naming inconsistencies with \`trigger\` vs \`toggle\` (we're using trigger as global naming), updated in classes objects prop names where needed (there were a few missed in previous update) 
  - Facets, Acco
- Remove \`UluCollapsible\` trigger slot prop \`toggle\` as that doesn't make sense and should have never been included in slots props, including \`UluAccordion\` which forwarded the same prop
- \`UluAccordion\` 
  - Change slot props for open state from 'open' to 'isOpen'
  - Animate is enabled by default
- \`UluPopover\` - Remove unnessaray \`toggle\` slot prop

## 0.1.1-beta.10

- **\`useFacets\` Bug Fix:** Fixed a critical bug where mutating state within a computed property (\`selectedFacets\`) caused a "Maximum recursive updates exceeded" error. The \`selectedCount\` logic has been refactored into the appropriate methods (\`handleFacetChange\`, \`clearFilters\`) and initialization watcher, resolving the reactivity loop without changing external behavior.
- **New \`UluFacetsActiveFilters\` Component:** Added a new component to the facets system that displays a list of currently active filters. Each filter can be removed individually by clicking it, and a "Clear All" button is provided to remove all active filters at once.
- **Facets Storybook:** Added a new story, "With Initial Filters," to demonstrate and test the behavior of the facets system when filters are pre-selected on load.
- \`UluSelectableMenu\`, \`UluFacetsFilterLists\`, \`UluFacetsFilterList\` - Add \`compact\` prop for menu modifier


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

- Add lodash dependency
`;function o(n){return e(r.Fragment,{children:[e(i,{title:"Overview/Change Log"}),`
`,e(a,{children:l})]})}function f(n={}){const{wrapper:t}={...s(),...n.components};return t?e(t,{...n,children:e(o,{...n})}):o()}const g=[];export{g as __namedExportsOrder,f as default};
