import{I as e}from"./jsx-runtime-BDWXtBBO.js";import{useMDXComponents as r}from"./index-DIzwWG-n.js";import{C as l}from"./blocks-CH0Fcrqm.js";import{Default as i}from"./tour.stories-C86JF71V.js";import{r as c}from"./index-vwjNkSeb.js";import"./iframe-DmVn5gjR.js";import"./preload-helper-BJwshlQW.js";function o(t){const n={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...t.components};return e(c.Fragment,{children:[e(n.h1,{id:"tour-plugin",children:"Tour Plugin"}),`
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
`,e(n.h3,{id:"step-api-structure",children:"Step API Structure"}),`
`,e(n.p,{children:"Each step object can accept the following properties:"}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[e(n.strong,{children:e(n.code,{children:"target"})}),": ",e(n.em,{children:"(String)"})," The CSS selector for the target element. If omitted, the step renders as a centered modal."]}),`
`,e(n.li,{children:[e(n.strong,{children:e(n.code,{children:"title"})}),": ",e(n.em,{children:"(String)"})," The title text for the step."]}),`
`,e(n.li,{children:[e(n.strong,{children:e(n.code,{children:"content"})}),": ",e(n.em,{children:"(String)"})," The body content text for the step."]}),`
`,e(n.li,{children:[e(n.strong,{children:e(n.code,{children:"contentComponent"})}),": ",e(n.em,{children:"(Object)"})," A Vue component to replace only the text content (keeps the modal/popover shell and default footer intact)."]}),`
`,e(n.li,{children:[e(n.strong,{children:e(n.code,{children:"component"})}),": ",e(n.em,{children:"(Object)"})," A Vue component to completely replace the outer wrapper (bypasses modal/popover entirely)."]}),`
`,e(n.li,{children:[e(n.strong,{children:e(n.code,{children:"componentProps"})}),": ",e(n.em,{children:"(Object)"})," Props to bind to ",e(n.code,{children:"contentComponent"})," or ",e(n.code,{children:"component"}),"."]}),`
`,e(n.li,{children:[e(n.strong,{children:e(n.code,{children:"hideFooter"})}),": ",e(n.em,{children:"(Boolean)"})," If true, hides the default tour footer (Next/Back buttons). Useful if you want the standard text but no buttons."]}),`
`,e(n.li,{children:[e(n.strong,{children:e(n.code,{children:"placement"})}),": ",e(n.em,{children:"(String)"})," Floating UI placement string (e.g. ",e(n.code,{children:"'bottom'"}),", ",e(n.code,{children:"'right'"}),")."]}),`
`,e(n.li,{children:[e(n.strong,{children:e(n.code,{children:"highlight"})}),": ",e(n.em,{children:"(Boolean)"})," If true, darkens the backdrop around the target element."]}),`
`,e(n.li,{children:[e(n.strong,{children:e(n.code,{children:"modalProps"})}),": ",e(n.em,{children:"(Object)"})," Props to pass to the modal (only applies if ",e(n.code,{children:"target"})," is omitted)."]}),`
`,e(n.li,{children:[e(n.strong,{children:e(n.code,{children:"popoverProps"})}),": ",e(n.em,{children:"(Object)"})," Props to pass to the popover (only applies if ",e(n.code,{children:"target"})," is present)."]}),`
`,e(n.li,{children:[e(n.strong,{children:e(n.code,{children:"onEnter"})}),": ",e(n.em,{children:"(Function)"})," An async hook called before the step is rendered."]}),`
`]}),`
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
`,e(l,{of:i})]})}function g(t={}){const{wrapper:n}={...r(),...t.components};return n?e(n,{...t,children:e(o,{...t})}):o(t)}const f=[];export{f as __namedExportsOrder,g as default};
