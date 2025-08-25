import{I as n}from"./jsx-runtime-DIwFON-C.js";import{useMDXComponents as i}from"./index--lO0rPeI.js";import{r as a}from"./index-DqCXsI4Z.js";import"./iframe-C5bsz2kF.js";import"./preload-helper-BJwshlQW.js";function r(o){const e={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...o.components};return n(a.Fragment,{children:[n(e.h1,{id:"usemodifiers",children:"useModifiers"}),`
`,n(e.p,{children:["Composable for adding breakpoint manager and related breakpoint info (via breakpoint manager from ",n(e.code,{children:"@ulu/frontend/js/ui/breakpoints.js > BreakpointManager"}),")."]}),`
`,n(e.p,{children:[n(e.strong,{children:"Note:"})," Using the composable is only nessasary for unique situations. For basic breakpoint setup use the ",n(e.code,{children:"breakpointsPlugin"}),"."]}),`
`,n(e.h2,{id:"example-usage",children:"Example Usage"}),`
`,n(e.pre,{children:n(e.code,{className:"language-html",children:`<script setup>
  import { ref, computed, provide } from "vue";
  import { useBreakpointManager } from "./useBreakpointManager.js";

  const isMobile = ref(false);

  // Example using the onReady callback to set reactive value isMobile
  // - In this situation isMobile is being used as a primary change in  
  //   the applications layout 
  const options = { 
    onReady(manager) {
      manager.at("small").max(() => isMobile.value = true);
      manager.at("large").min(() => isMobile.value = false);
    }
  };

  // Composable returns the following
  const { 
    /**
     * Reference to underlying BreakpointManager class
    */
    breakpointManager, 
    /**
     * Active breakpoint name
    */
    breakpointActive, 
    /**
     * Current resizeDirection ("up"|"down"|null)
    */
    breakpointDirection 
  } = useBreakpointManager(options);


  // Allowing all components to access these values
  provide("uluBreakpointActive", computed(() => breakpointActive));
  provide("uluBreakpointDirection", computed(() => breakpointDirection));
  provide("uluBreakpointManager", computed(() => breakpointManager));
  provide("uluIsMobile", computed(() => isMobile));

<\/script>
`})})]})}function u(o={}){const{wrapper:e}={...i(),...o.components};return e?n(e,{...o,children:n(r,{...o})}):r(o)}const d=[];export{d as __namedExportsOrder,u as default};
