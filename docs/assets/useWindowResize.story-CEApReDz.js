import{I as n}from"./jsx-runtime-CiHM00wa.js";import{useMDXComponents as r}from"./index-DIzwWG-n.js";import{r as s}from"./index-vwjNkSeb.js";import"./iframe-CDun8D-m.js";import"./preload-helper-BJwshlQW.js";function t(o){const e={code:"code",h1:"h1",p:"p",pre:"pre",...r(),...o.components};return n(s.Fragment,{children:[n(e.h1,{id:"usewindowresize",children:"useWindowResize"}),`
`,n(e.p,{children:"Composable for listening to the window resize event, the event is debounced and the callbacks are called when it's finished."}),`
`,n(e.pre,{children:n(e.code,{className:"language-js",children:`import { computed } from "vue";
import { useWindowResize } from "@ulu/frontend-vue/composables/useWindowResize.js;

const { 
  // Reactive Boolean
  isResizing, 
  // Method to register callback on start, returns a function to remove the listener
  onResizeStart, 
  // Method to register callback on end, returns a function to remove the listener
  onResizeEnd 
} = useWindowResize();

const removeStart = onResizeStart(() => {
  console.log("Resize started");
});
const removeEnd = onResizeEnd(() => {
  console.log("Resize is finished");
});
`})})]})}function m(o={}){const{wrapper:e}={...r(),...o.components};return e?n(e,{...o,children:n(t,{...o})}):t(o)}const u=[];export{u as __namedExportsOrder,m as default};
