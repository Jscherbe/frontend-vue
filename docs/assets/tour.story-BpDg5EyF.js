import{I as e}from"./jsx-runtime-mSrSA_9J.js";import{useMDXComponents as r}from"./index-DIzwWG-n.js";import{C as a}from"./blocks-DlnNVQwr.js";import{Default as s}from"./tour.stories-C6mr96DC.js";import{r as l}from"./index-vwjNkSeb.js";import"./iframe-C3gU_YVy.js";import"./preload-helper-BJwshlQW.js";function t(o){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...r(),...o.components};return e(l.Fragment,{children:[e(n.h1,{id:"tour-plugin",children:"Tour Plugin"}),`
`,e(n.p,{children:["The Tour plugin allows configuring an app-wide guided tour that leverages ",e(n.code,{children:"UluModal"})," and ",e(n.code,{children:"@floating-ui/vue"}),". Register the plugin, and use the global API (or composable) to start step-by-step onboarding flows."]}),`
`,e(n.h2,{id:"installing-the-plugin",children:"Installing the plugin"}),`
`,e(n.p,{children:["Example ",e(n.code,{children:"./src/main.js"})]}),`
`,e(n.pre,{children:e(n.code,{className:"language-js",children:`import UluTour from "@ulu/frontend-vue/plugins/tour/index.js";

//...

app.use(UluTour);
`})}),`
`,e(n.p,{children:["To display the tour, you must include the ",e(n.code,{children:"UluTourDisplay"})," component somewhere in your application root (e.g. ",e(n.code,{children:"App.vue"}),"):"]}),`
`,e(n.pre,{children:e(n.code,{className:"language-html",children:`<template>
  <div id="app">
    <router-view />
    <UluTourDisplay />
  </div>
</template>
`})}),`
`,e(n.h2,{id:"creating-a-tour",children:"Creating a Tour"}),`
`,e(n.p,{children:["A tour is defined as an object containing a ",e(n.code,{children:"name"})," and an array of ",e(n.code,{children:"steps"}),". You can also define global ",e(n.code,{children:"modalProps"})," or ",e(n.code,{children:"popoverProps"})," on the root tour object to apply them to all steps by default."]}),`
`,e(n.pre,{children:e(n.code,{className:"language-js",children:`const demoTour = {
  name: 'demo-tour',
  popoverProps: { modifiers: 'large' }, // Global popover styling for all steps
  steps: [
    {
      title: 'Welcome!',
      content: 'This step is a modal because it has no target element. Click next to continue.',
      modalProps: { size: 'small' } // Step-specific override
    },
    {
      target: '#step-1-btn',
      title: 'First Feature',
      content: 'This points to a simple button.',
      placement: 'bottom'
    }
  ]
};
`})}),`
`,e(n.h2,{id:"configuration-api-reference",children:"Configuration API Reference"}),`
`,e(n.p,{children:"Here is a complete representation of a tour object demonstrating all available configuration properties, global overrides, lifecycle hooks, and step options."}),`
`,e(n.pre,{children:e(n.code,{className:"language-js",children:`const comprehensiveTour = {
  // Optional identifier for the tour
  name: 'my-feature-tour',
  
  // --- GLOBAL LIFECYCLE HOOKS ---
  // Async hook called right before the tour initializes
  onStart: async () => {
    console.log('Tour is starting! Preparing UI...');
  },
  // Async hook called when the tour stops/closes (via api.stop() or the last step)
  onStop: async () => {
    console.log('Tour finished! Cleaning up...');
  },

  // --- GLOBAL COMPONENT OVERRIDES ---
  // Replace the structural layout for ALL steps by default
  component: MyFullTakeoverComponent,         // Bypasses Modal/Popover completely
  modalComponent: MyCustomModalWrapper,       // Replaces UluModal wrapper
  popoverComponent: MyCustomPopoverWrapper,   // Replaces UluPopoverBase wrapper
  contentComponent: MyCustomContentLayout,    // Replaces the inner text layout
  pagerComponent: MyCustomPaginationFooter,   // Replaces the UluTourPager (Next/Back footer)
  
  // --- GLOBAL PROP OVERRIDES ---
  modalProps: { size: 'large' },             // Props passed to every Modal step
  popoverProps: { modifiers: 'large' },      // Props passed to every Popover step
  modalTitleClass: ['h3', 'text-primary'],   // Typography classes for Modal titles
  popoverTitleClass: ['h4', 'text-primary'], // Typography classes for Popover titles
  pagerClass: ['margin-top-large'],          // Classes applied to the pager footer wrapper

  // --- STEP DEFINITIONS ---
  steps: [
    {
      // --- CORE ---
      // Target: String (CSS Selector), DOM HTMLElement, or a Function returning either.
      // If the target is omitted or the function returns falsy, it renders as a Modal.
      target: () => window.innerWidth > 768 ? '#desktop-sidebar' : null,
      title: 'Step Title',
      content: 'Step body content.',

      // --- STYLING & POSITIONING ---
      placement: 'right', // Floating UI placement (e.g. 'bottom', 'left-start')
      highlight: true,    // Dims the background around the target element
      titleClass: 'custom-title', // Override global title classes for this step
      pagerClass: 'custom-pager', // Override global pager classes for this step
      modalProps: {},     // Step-specific props for UluModal
      popoverProps: {},   // Step-specific props for UluPopoverBase
      
      // --- COMPONENT OVERRIDES (Step Level) ---
      // These override the global tour configurations above for this specific step.
      component: null, 
      contentComponent: null, 
      pagerComponent: null,
      modalComponent: null,
      popoverComponent: null,
      componentProps: { }, // Props passed down to custom component overrides

      // --- BEHAVIOR ---
      hideFooter: false,  // If true, the pager (Next/Prev) is not rendered
      // Boolean or Sync/Async function. If true, the step is bypassed dynamically!
      skip: async () => await checkUserSettings('sawFeature1'),

      // --- STEP LIFECYCLE HOOKS ---
      // Awaited right before the step transitions in
      onEnter: async () => {
        await openSidebarMenu();
      },
      // Awaited right before the step transitions out (either forward or backward)
      onLeave: async () => {
        await closeSidebarMenu();
      }
    }
  ]
};
`})}),`
`,e(n.h2,{id:"starting-the-tour",children:"Starting the Tour"}),`
`,e(n.p,{children:["You can control the tour programmatically using the ",e(n.code,{children:"useTour"})," composable:"]}),`
`,e(n.pre,{children:e(n.code,{className:"language-html",children:`<template>
  <button @click="startTour">Start Tour</button>
</template>

<script setup>
  import { useTour } from "@ulu/frontend-vue";

  const { api } = useTour();

  const startTour = () => {
    api.start(demoTour);
  };
<\/script>
`})}),`
`,e(n.p,{children:"Alternatively, you can use the global API:"}),`
`,e(n.pre,{children:e(n.code,{className:"language-js",children:`this.$uluTour.start(demoTour);
this.$uluTour.next();
this.$uluTour.prev();
this.$uluTour.stop();
`})}),`
`,e(n.h2,{id:"custom-components--layouts",children:"Custom Components & Layouts"}),`
`,e(n.p,{children:"If you need custom designs, the plugin supports two levels of control:"}),`
`,e(n.h3,{id:"1-custom-inner-content-contentcomponent",children:["1. Custom Inner Content (",e(n.code,{children:"contentComponent"}),")"]}),`
`,e(n.p,{children:["Use ",e(n.code,{children:"contentComponent"})," if you want to render an image, form, or custom layout inside the step, but want to ",e(n.strong,{children:"keep"})," the default popover/modal wrappers and the Next/Back footer buttons."]}),`
`,e(n.pre,{children:e(n.code,{className:"language-html",children:`<template>
  <div style="text-align: center;">
    <img src="/logo.png" />
    <p>This is my custom graphic step.</p>
  </div>
</template>
`})}),`
`,e(n.h3,{id:"2-full-wrapper-takeover-component",children:["2. Full Wrapper Takeover (",e(n.code,{children:"component"}),")"]}),`
`,e(n.p,{children:["Use ",e(n.code,{children:"component"})," if you want to bypass the ",e(n.code,{children:"<UluModal>"})," and ",e(n.code,{children:"<UluPopoverBase>"})," wrappers entirely. This allows you to build custom off-canvas drawers, alert banners, or custom absolute-positioned panels."]}),`
`,e(n.p,{children:["You are responsible for your own positioning, styling, and wiring up the Next/Back buttons via ",e(n.code,{children:"useTour()"}),"."]}),`
`,e(n.pre,{children:e(n.code,{className:"language-html",children:`<template>
  <div class="my-custom-floating-drawer">
    <h3>Custom Design</h3>
    <!-- Wire up your own buttons -->
    <button @click="api.next()">Got it!</button>
  </div>
</template>

<script setup>
  import { useTour } from "@ulu/frontend-vue";
  const { api } = useTour();
<\/script>
`})}),`
`,e(n.h2,{id:"demonstration",children:"Demonstration"}),`
`,e(a,{of:s})]})}function g(o={}){const{wrapper:n}={...r(),...o.components};return n?e(n,{...o,children:e(t,{...o})}):t(o)}const f=[];export{f as __namedExportsOrder,g as default};
