import{I as n}from"./jsx-runtime-CmQ-Yt23.js";import{useMDXComponents as t}from"./index-DIzwWG-n.js";import{r as o}from"./index-vwjNkSeb.js";import"./iframe-DEu6WBfK.js";import"./preload-helper-BJwshlQW.js";function r(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...i.components};return n(o.Fragment,{children:[n(e.h1,{id:"breakpoints-plugin",children:"Breakpoints Plugin"}),`
`,n(e.h2,{id:"purpose",children:"Purpose"}),`
`,n(e.p,{children:["The Breakpoints Plugin provides app-wide, reactive breakpoint information to your Vue components. It is a lightweight wrapper around the ",n(e.code,{children:"useBreakpointManager"})," composable, ensuring that resize events and active breakpoint states are tracked centrally and distributed efficiently via Vue's ",n(e.code,{children:"provide"}),"/",n(e.code,{children:"inject"})," system."]}),`
`,n(e.p,{children:'By installing this plugin, any component in your application can instantly know the current breakpoint, whether the device is considered "mobile," and the direction the window was just resized.'}),`
`,n(e.h2,{id:"installation",children:"Installation"}),`
`,n(e.p,{children:["Register the ",n(e.code,{children:"breakpointsPlugin"})," on your Vue app instance."]}),`
`,n(e.pre,{children:n(e.code,{className:"language-javascript",children:`// src/main.js
import { createApp } from 'vue';
import App from './App.vue';
import { breakpointsPlugin } from '@ulu/frontend-vue';

const app = createApp(App);

// Register the breakpoints plugin
app.use(breakpointsPlugin, {
  // Optional: Change which breakpoint triggers the 'isMobile' flag (default is 'small')
  breakpointMobile: 'small',
  
  // Optional: Pass options directly to the underlying useBreakpointManager
  managerOptions: {
    // onReady(manager) { ... }
  }
});

app.mount('#app');
`})}),`
`,n(e.h2,{id:"provided-injections",children:"Provided Injections"}),`
`,n(e.p,{children:["The plugin does not attach methods to the Vue instance. Instead, it provides reactive ",n(e.code,{children:"computed"})," refs that you can inject into any component."]}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:[n(e.strong,{children:n(e.code,{children:"uluIsMobile"})}),": ",n(e.code,{children:"ComputedRef<Boolean>"})," - True if the current active breakpoint is less than or equal to the configured ",n(e.code,{children:"breakpointMobile"})," (defaults to ",n(e.code,{children:"'small'"}),")."]}),`
`,n(e.li,{children:[n(e.strong,{children:n(e.code,{children:"uluBreakpointActive"})}),": ",n(e.code,{children:"ComputedRef<String>"})," - The name of the currently active breakpoint (e.g., ",n(e.code,{children:"'small'"}),", ",n(e.code,{children:"'medium'"}),", ",n(e.code,{children:"'large'"}),")."]}),`
`,n(e.li,{children:[n(e.strong,{children:n(e.code,{children:"uluBreakpointDirection"})}),": ",n(e.code,{children:"ComputedRef<Number>"})," - Indicates the resize direction (",n(e.code,{children:"1"})," for growing larger, ",n(e.code,{children:"-1"})," for shrinking smaller, ",n(e.code,{children:"0"})," for initialization)."]}),`
`,n(e.li,{children:[n(e.strong,{children:n(e.code,{children:"uluBreakpointManager"})}),": ",n(e.code,{children:"ComputedRef<Object>"})," - The underlying vanilla JS BreakpointManager instance, allowing advanced programmatic subscriptions if needed."]}),`
`]}),`
`,n(e.h2,{id:"example-usage",children:"Example Usage"}),`
`,n(e.p,{children:n(e.strong,{children:["Composition API (",n(e.code,{children:"<script setup>"}),")"]})}),`
`,n(e.pre,{children:n(e.code,{className:"language-vue",children:`<script setup>
  import { inject } from 'vue';

  const isMobile = inject('uluIsMobile');
  const currentBreakpoint = inject('uluBreakpointActive');
<\/script>

<template>
  <div>
    <p v-if="isMobile">You are on a mobile device!</p>
    <p>Current Breakpoint: {{ currentBreakpoint }}</p>
  </div>
</template>
`})}),`
`,n(e.p,{children:n(e.strong,{children:"Options API"})}),`
`,n(e.pre,{children:n(e.code,{className:"language-vue",children:`<script>
export default {
  inject: ['uluIsMobile', 'uluBreakpointActive'],
  mounted() {
    console.log('Is mobile?', this.uluIsMobile);
  }
}
<\/script>
`})}),`
`,n(e.h2,{id:"why-use-the-plugin-vs-the-composable",children:"Why use the Plugin vs the Composable?"}),`
`,n(e.p,{children:["While you can import and use ",n(e.code,{children:"useBreakpointManager()"})," directly in individual components, registering the Breakpoints Plugin ensures that the vanilla JS ",n(e.code,{children:"BreakpointManager"})," is only instantiated once. This centralizes the resize event listeners, significantly improving performance across large applications with many responsive components."]})]})}function p(i={}){const{wrapper:e}={...t(),...i.components};return e?n(e,{...i,children:n(r,{...i})}):r(i)}const h=[];export{h as __namedExportsOrder,p as default};
