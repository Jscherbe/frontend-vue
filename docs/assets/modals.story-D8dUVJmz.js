import{I as n}from"./jsx-runtime-3HGQFvbw.js";import{useMDXComponents as l}from"./index-DIzwWG-n.js";import{C as a}from"./blocks-DO3muGx0.js";import{Default as s}from"./UluModal.stories-u96U-CBQ.js";import{r as i}from"./index-vwjNkSeb.js";import"./iframe-C23Au2cl.js";import"./preload-helper-BJwshlQW.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...l(),...o.components};return n(i.Fragment,{children:[n(e.h1,{id:"modals",children:"Modals"}),`
`,n(e.p,{children:"Modals plugin allows configuring app-wide modals that are triggered by the global API. Register your modals when you install the plugin then interact with them using the global API."}),`
`,n(e.h2,{id:"registering-your-app-wide-modals",children:"Registering your app-wide modals"}),`
`,n(e.p,{children:"Create the modal component file like:"}),`
`,n(e.pre,{children:n(e.code,{className:"language-html",children:`<template>
  <UluModal>
    User setting modal…
  </UluModal>
</template>
`})}),`
`,n(e.p,{children:"Example ./scr/modals.js"}),`
`,n(e.pre,{children:n(e.code,{className:"language-js",children:`import { defineAsyncComponent } from "vue";

export default [
  {
    name: "settings",
    component: defineAsyncComponent(() => import('./components/modals/UserSettingsModal.vue')),
  }
]
`})}),`
`,n(e.h2,{id:"installing-the-plugin",children:"Installing the plugin"}),`
`,n(e.p,{children:"Example ./src/main.js"}),`
`,n(e.pre,{children:n(e.code,{className:"language-js",children:`import UluModals from "@ulu/frontend-vue/plugins/modals/index.js";
import modals from "./src/modals.js";

//...

app.use(UluModals, { modals });

`})}),`
`,n(e.h2,{id:"using-global-api",children:"Using Global API"}),`
`,n(e.pre,{children:n(e.code,{className:"language-js",children:`
// Open a app-wide modal
this.$uluModals.open({ exampleProp: value });

// Close app-wide modal 
this.$uluModals.close();

// Add modals after post-install
this.$uluModals.add({
  name: "settings",
  component: defineAsyncComponent(() => import('./components/modals/UserSettingsModal.vue')),
});

// Remove a modal from the registry
this.$uluModals.remove("settings");

// Get Modal from registry (not usually needed)
const settingsModal = this.$uluModals.get("settings");
// console.log(settingsModal.name) ==> "settings"
`})}),`
`,n(e.h2,{id:"using-composition-api-via-composable",children:"Using Composition API (via composable)"}),`
`,n(e.p,{children:"Composable is used get access to modals API (through inject)"}),`
`,n(e.pre,{children:n(e.code,{className:"language-html",children:`
<template>
  <button @click="showSettingsModal">My Settings</button>
</template>

<script setup>
  import { useModals } from "./useModals";

  const modals = useModals();
  const showSettingsModal = () => {
    console.log("This is opening via uluModals composable");
    modals.open("settings");
  };
<\/script>

`})}),`
`,n(e.h2,{id:"standalone-modal-component",children:"Standalone Modal Component"}),`
`,n(e.p,{children:["The ",n(e.code,{children:"UluModal"})," ",n(e.strong,{children:"component is independent of this plugin."})," The plugin is simply a convenient way to manage global modals (for things like a settings dialog) that need to be opened from anywhere in your application."]}),`
`,n(e.p,{children:["You can use ",n(e.code,{children:"UluModal"})," as the component that the plugin displays, or you can use it on its own for any case where you are managing the state locally within a component and don't need a global API."]}),`
`,n(e.p,{children:["Here is a demonstration of the standalone ",n(e.code,{children:"UluModal"})," component:"]}),`
`,n(a,{of:s})]})}function g(o={}){const{wrapper:e}={...l(),...o.components};return e?n(e,{...o,children:n(t,{...o})}):t(o)}const M=[];export{M as __namedExportsOrder,g as default};
