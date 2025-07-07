import{j as e}from"./index-KesOFGYK.js";import{useMDXComponents as s}from"./index-pP9QgeMm.js";function t(o){const n={code:"code",h1:"h1",p:"p",pre:"pre",...s(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"usewindowresize",children:"useWindowResize"}),`
`,e.jsx(n.p,{children:"Composable for listening to the window resize event, the event is debounced and the callbacks are called when it's finished."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`import { computed } from "vue";
import useWindowResize from "@ulu/frontend-vue/composables/useWindowResize.js;

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
`})})]})}function c(o={}){const{wrapper:n}={...s(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(t,{...o})}):t(o)}export{c as default};
