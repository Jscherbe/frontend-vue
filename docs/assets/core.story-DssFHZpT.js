import{I as n}from"./jsx-runtime-D69t-vrG.js";import{useMDXComponents as o}from"./index-DIzwWG-n.js";import{r}from"./index-vwjNkSeb.js";import"./iframe-CX9S7sQv.js";import"./preload-helper-BJwshlQW.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...i.components};return n(r.Fragment,{children:[n(e.h1,{id:"core-plugin",children:"Core Plugin"}),`
`,n(e.h2,{id:"purpose",children:"Purpose"}),`
`,n(e.p,{children:["The Core Plugin is the central, ",n(e.strong,{children:"required"})," plugin for the ",n(e.code,{children:"@ulu/frontend-vue"})," library. Its primary purpose is to establish a single, reactive source of truth for configuration settings that are shared across multiple components."]}),`
`,n(e.p,{children:["By using Vue's ",n(e.code,{children:"provide"}),"/",n(e.code,{children:"inject"})," system, this plugin ensures that all components within your application access the same configuration, preventing inconsistencies that can arise from separate module imports."]}),`
`,n(e.h2,{id:"installation",children:"Installation"}),`
`,n(e.p,{children:["To use this library, you must register the ",n(e.code,{children:"corePlugin"})," on your Vue app instance. You can also pass an options object to override the default settings."]}),`
`,n(e.pre,{children:n(e.code,{className:"language-javascript",children:`// src/main.js
import { createApp } from 'vue';
import App from './App.vue';
import { corePlugin } from '@ulu/frontend-vue';

const app = createApp(App);

// Register the core plugin
app.use(corePlugin, {
  // Optional: override general settings
  fontAwesomeStatic: true,

  // Optional: override specific icons safely
  iconsByType: {
    danger: 'my-custom-danger-icon',
    close: 'my-custom-close-icon'
  }
});

app.mount('#app');
`})}),`
`,n(e.h2,{id:"api-reference",children:"API Reference"}),`
`,n(e.p,{children:"The plugin provides its API to your application in two ways:"}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:[n(e.strong,{children:"Composition API:"})," ",n(e.code,{children:"inject('uluCore')"})]}),`
`,n(e.li,{children:[n(e.strong,{children:"Options API:"})," ",n(e.code,{children:"this.$uluCore"})]}),`
`]}),`
`,n(e.p,{children:"The API object contains the following methods:"}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:[n(e.code,{children:"getSettings()"}),": Returns the full reactive settings object."]}),`
`,n(e.li,{children:[n(e.code,{children:"getSetting(key)"}),": Retrieves a single setting by its key (e.g., ",n(e.code,{children:"'fontAwesomeStatic'"}),")."]}),`
`,n(e.li,{children:[n(e.code,{children:"updateSetting(key, value)"}),": Updates a single setting."]}),`
`,n(e.li,{children:[n(e.code,{children:"updateSettings(changes)"}),": Merges an object of changes into the settings."]}),`
`,n(e.li,{children:[n(e.code,{children:"getDefaultSettings()"}),": Returns a non-reactive copy of the original default settings."]}),`
`,n(e.li,{children:[n(e.code,{children:"getIcon(type)"}),": Retrieves a specific icon class string by its semantic type (e.g., ",n(e.code,{children:"'danger'"}),", ",n(e.code,{children:"'close'"}),")."]}),`
`,n(e.li,{children:[n(e.code,{children:"setIcon(type, definition)"}),": Safely sets or overrides a single icon definition."]}),`
`]}),`
`,n(e.h3,{id:"example-usage",children:"Example Usage"}),`
`,n(e.p,{children:n(e.strong,{children:["Composition API (",n(e.code,{children:"<script setup>"}),")"]})}),`
`,n(e.pre,{children:n(e.code,{className:"language-vue",children:`<script setup>
import { inject, onMounted } from 'vue';

const uluCore = inject('uluCore');

onMounted(() => {
  const icons = uluCore.getSetting('iconsByType');
  console.log('Danger Icon:', icons.danger);

  // Example of updating a single icon dynamically
  uluCore.setIcon('success', 'my-awesome-success-icon');
});
<\/script>
`})}),`
`,n(e.p,{children:n(e.strong,{children:"Options API"})}),`
`,n(e.pre,{children:n(e.code,{className:"language-vue",children:`<script>
export default {
  mounted() {
    const icons = this.$uluCore.getSetting('icons');
    console.log('Danger Icon:', icons.danger);
  }
}
<\/script>
`})})]})}function p(i={}){const{wrapper:e}={...o(),...i.components};return e?n(e,{...i,children:n(t,{...i})}):t(i)}const u=[];export{u as __namedExportsOrder,p as default};
