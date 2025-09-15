import{I as e}from"./jsx-runtime-a36jXyLE.js";import{useMDXComponents as l}from"./index-DIzwWG-n.js";import{M as t,C as o}from"./blocks-CAv62hXB.js";import{Primary as s}from"./UluButton.stories-V4BQSIWH.js";import{Default as c}from"./UluCard.stories-1CXdT98C.js";import{r as a}from"./index-vwjNkSeb.js";import"./iframe-DZKOIr3v.js";import"./preload-helper-BJwshlQW.js";function r(i){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...l(),...i.components};return e(a.Fragment,{children:[e(t,{title:"Overview/Introduction"}),`
`,e(n.h1,{id:"ulu-frontend-vue",children:"ULU Frontend Vue"}),`
`,e(n.p,{children:"Welcome to the living style guide for the ULU Vue component library. This library provides a comprehensive set of accessible, reusable, and composable Vue 3 components, composables, and plugins to build modern web applications."}),`
`,e(n.p,{children:"This documentation provides interactive examples and detailed API documentation for each part of the library."}),`
`,e(n.hr,{}),`
`,e(n.h2,{id:"core-concepts",children:"Core Concepts"}),`
`,e(n.p,{children:"The ULU ecosystem is built on two main packages:"}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[e(n.strong,{children:e(n.code,{children:"@ulu/frontend"})}),": The framework-agnostic core. It contains the foundational SCSS for styling, vanilla JavaScript utilities, and base components. It knows nothing about Vue."]}),`
`,e(n.li,{children:[e(n.strong,{children:e(n.code,{children:"@ulu/frontend-vue"})})," (This Library): The Vue 3 implementation. It provides wrapper components, composables, and plugins that build upon and integrate seamlessly with the ",e(n.code,{children:"@ulu/frontend"})," core."]}),`
`]}),`
`,e(n.p,{children:"This separation allows for a consistent design system that can be applied to any web technology, while providing a rich, idiomatic experience for Vue developers."}),`
`,e(n.hr,{}),`
`,e(n.h2,{id:"installation",children:"Installation"}),`
`,e(n.p,{children:"To get started, add the library to your project."}),`
`,e(n.pre,{children:e(n.code,{className:"language-bash",children:`npm install @ulu/frontend-vue
`})}),`
`,e(n.p,{children:["Next, you must register the required plugins in your main application entry point (",e(n.code,{children:"main.js"}),"). The ",e(n.code,{children:"corePlugin"})," is essential, and other plugins like ",e(n.code,{children:"breakpointsPlugin"}),", ",e(n.code,{children:"popoverPlugin"})," are optional. Some components require plugins. If a required plugin is missing, an error is thrown."]}),`
`,e(n.p,{children:e(n.strong,{children:e(n.code,{children:"src/main.js"})})}),`
`,e(n.pre,{children:e(n.code,{className:"language-javascript",children:`import { createApp } from 'vue';
import App from './App.vue';
import { 
  corePlugin, 
  breakpointsPlugin, 
  toastPlugin, 
  modalsPlugin, 
  popoversPlugin 
} from '@ulu/frontend-vue';
import router from './router'; // Your vue-router instance

// Import the main SCSS entry point
import '@ulu/frontend-vue/lib/_index.scss';

const app = createApp(App);

app.use(router);

// Register ULU plugins
app.use(corePlugin, {
  // Optional: override default icons
  iconsByType: {
    danger: 'fas fa-exclamation-triangle',
    close: 'fas fa-times'
  }
});
app.use(breakpointsPlugin);
app.use(toastPlugin);
app.use(modalsPlugin, { 
  modals: [
    /* your global modals */
  ] 
});
app.use(popoversPlugin);


app.mount('#app');
`})}),`
`,e(n.p,{children:["Finally, you need to add the display components for plugins like ",e(n.code,{children:"toast"})," and ",e(n.code,{children:"modals"})," to your root ",e(n.code,{children:"App.vue"})," file."]}),`
`,e(n.p,{children:e(n.strong,{children:e(n.code,{children:"src/App.vue"})})}),`
`,e(n.pre,{children:e(n.code,{className:"language-html",children:`<template>
  <!-- Your App Layout -->
  <router-view />

  <!-- ULU Plugin Display Components -->
  <UluToastDisplay />
  <UluModalsDisplay />
  <UluTooltipDisplay />
</template>
`})}),`
`,e(n.hr,{}),`
`,e(n.h2,{id:"whats-inside",children:"What's Inside?"}),`
`,e(n.p,{children:"The library is organized into several key areas:"}),`
`,e(n.h3,{id:"components",children:"Components"}),`
`,e(n.p,{children:["These are the reusable building blocks of your UI. They are organized by function into categories like ",e(n.code,{children:"elements"}),", ",e(n.code,{children:"collapsible"}),", ",e(n.code,{children:"forms"}),", ",e(n.code,{children:"layout"}),", ",e(n.code,{children:"navigation"}),", and ",e(n.code,{children:"systems"}),"."]}),`
`,e(n.p,{children:e(n.strong,{children:["Simple Component Example: ",e(n.code,{children:"UluButton"})]})}),`
`,e(o,{of:s}),`
`,e(n.p,{children:e(n.strong,{children:["Complex Component Example: ",e(n.code,{children:"UluCard"})]})}),`
`,e(o,{of:c}),`
`,e(n.h3,{id:"composables",children:"Composables"}),`
`,e(n.p,{children:"Reusable, stateful logic that can be shared across components."}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[e(n.code,{children:"useFacets"}),": A powerful composable for client-side filtering, searching, and sorting of data."]}),`
`,e(n.li,{children:[e(n.code,{children:"usePagination"}),": Handles all the logic for paginating a list of items, including integration with Vue Router."]}),`
`,e(n.li,{children:[e(n.code,{children:"useBreakpointManager"}),": A reactive interface to CSS breakpoints."]}),`
`,e(n.li,{children:[e(n.code,{children:"useModifiers"}),": A utility for creating BEM-style modifier classes."]}),`
`,e(n.li,{children:[e(n.code,{children:"useWindowResize"}),": A debounced window resize event listener."]}),`
`,e(n.li,{children:[e(n.code,{children:"useRequiredInject"}),": A utility to ensure required dependencies are injected from plugins."]}),`
`]}),`
`,e(n.h3,{id:"plugins",children:"Plugins"}),`
`,e(n.p,{children:"Plugins provide global functionality and APIs that can be accessed from anywhere in your application."}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[e(n.strong,{children:[e(n.code,{children:"corePlugin"})," (Required)"]}),": Manages global settings, primarily for the icon system."]}),`
`,e(n.li,{children:[e(n.strong,{children:e(n.code,{children:"breakpointsPlugin"})}),": Provides reactive information about the current CSS breakpoint (",e(n.code,{children:"uluIsMobile"}),", ",e(n.code,{children:"uluBreakpointActive"}),")."]}),`
`,e(n.li,{children:[e(n.strong,{children:e(n.code,{children:"modalsPlugin"})}),": A system for registering and triggering global modals (e.g., for settings or confirmation dialogs)."]}),`
`,e(n.li,{children:[e(n.strong,{children:e(n.code,{children:"toastPlugin"})}),": A global API (",e(n.code,{children:"$uluToast"}),") for showing toast notifications."]}),`
`,e(n.li,{children:[e(n.strong,{children:e(n.code,{children:"popoversPlugin"})}),": Enables a simple ",e(n.code,{children:"v-ulu-tooltip"})," directive for tooltips and provides the ",e(n.code,{children:"UluPopover"})," component."]}),`
`]}),`
`,e(n.p,{children:e(n.strong,{children:"Example: Triggering a Toast Notification"})}),`
`,e(n.pre,{children:e(n.code,{className:"language-javascript",children:`import { useToast } from '@ulu/frontend-vue';

const toast = useToast();

toast.add({
  title: 'Success!',
  description: 'Your profile has been updated.',
  class: 'is-success'
});
`})}),`
`,e(n.h3,{id:"component-systems",children:"Component Systems"}),`
`,e(n.p,{children:"Systems are complex, multi-component features that solve a specific problem."}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[e(n.strong,{children:"Facets"}),": A complete system for faceted search, built around the ",e(n.code,{children:"useFacets"})," composable. Includes components for search, sort, filters, and results display."]}),`
`,e(n.li,{children:[e(n.strong,{children:"Scroll Anchors"}),": A system for creating navigations that track the user's scroll position within a page."]}),`
`,e(n.li,{children:[e(n.strong,{children:"Skeleton"}),": A set of components for creating beautiful and effective loading states."]}),`
`,e(n.li,{children:[e(n.strong,{children:"Table Sticky"}),": A powerful table component with sticky headers and columns."]}),`
`,e(n.li,{children:[e(n.strong,{children:"Slider"}),": A flexible slideshow/carousel component."]}),`
`]})]})}function y(i={}){const{wrapper:n}={...l(),...i.components};return n?e(n,{...i,children:e(r,{...i})}):r(i)}const v=[];export{v as __namedExportsOrder,y as default};
