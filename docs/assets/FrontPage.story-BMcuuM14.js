import{I as e}from"./jsx-runtime-CAP-veX4.js";import{useMDXComponents as l}from"./index-DIzwWG-n.js";import{M as r,C as i}from"./blocks-feBzSaih.js";import{Primary as s}from"./UluButton.stories-D9fEX7l8.js";import{Default as c}from"./UluCard.stories-BiWJzRbO.js";import{r as a}from"./index-vwjNkSeb.js";import"./iframe-ClpBgbxC.js";import"./preload-helper-BJwshlQW.js";import"./UluButton-jGpN6m1h.js";import"./UluCard-CHTY85QV.js";function t(o){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...l(),...o.components};return e(a.Fragment,{children:[e(r,{title:"Overview/Introduction"}),`
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
`,e(n.p,{children:[e(n.strong,{children:"Note:"})," For ",e(n.code,{children:"@ulu/frontend"})," (components) that you are using from this Vue library. You need to output the component stylesheets like you would normally (create global stylesheet). The components in this library do not at the frontend scss modules. While they could be included in each component this would make it so that you can't build your own implementations (local app component / etc) with the class structures since the styles would only be available if that component is used."]}),`
`,e(n.p,{children:'Example global stylesheet outputting all "included" components and base styles. Note you can configure whats output with ulu.component-set-includes for example. Note there are many ways to assemble the stylesheet (manual per component mixins, etc), this example shows the convenience modules which output each modules stylesheet based on includes/excludes.'}),`
`,e(n.pre,{children:e(n.code,{className:"language-sass",children:`@use "config"; // Your config changes for example
@use "@ulu/frontend/scss/stylesheets/base-styles.scss"; // Outputs base styles that are included
@use "@ulu/frontend/scss/stylesheets/component-styles.scss"; // Outputs component styles that are included
@use "@ulu/frontend/scss/stylesheets/helper-styles.scss"; // Outputs helper styles that are included
`})}),`
`,e(n.p,{children:e(n.em,{children:["Please see ",e(n.code,{children:"@ulu/frontend"})," library for full documentation of configuring and outputting stylesheet"]})}),`
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
`,e(i,{of:s}),`
`,e(n.p,{children:e(n.strong,{children:["Complex Component Example: ",e(n.code,{children:"UluCard"})]})}),`
`,e(i,{of:c}),`
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
`]}),`
`,e(n.h3,{id:"resolver",children:"Resolver"}),`
`,e(n.p,{children:["Resolver for ",e(n.a,{href:"https://github.com/unplugin/unplugin-vue-components/tree/main%5D",rel:"nofollow",children:e(n.code,{children:"unplugin-vue-components"})})," is available to use like:"]}),`
`,e(n.pre,{children:e(n.code,{className:"language-js",children:`// vite.config.js

import { defineConfig } from "vite";
import Components from "unplugin-vue-components/vite";
import { UluUnpluginResolver } from "@ulu/frontend-vue/resolver";

export default defineConfig({
  plugins: [
    // ...
    Components({ 
      resolvers: [
        UluUnpluginResolver()
      ]
    }),
    // ...
  ],
  // ...
});
`})})]})}function w(o={}){const{wrapper:n}={...l(),...o.components};return n?e(n,{...o,children:e(t,{...o})}):t(o)}const P=[];export{P as __namedExportsOrder,w as default};
