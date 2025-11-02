import{I as e}from"./jsx-runtime-BrJT0F1N.js";import{useMDXComponents as i}from"./index-DIzwWG-n.js";import{r as t}from"./index-vwjNkSeb.js";import"./iframe-SIp86ZPy.js";import"./preload-helper-BJwshlQW.js";function a(o){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...o.components};return e(t.Fragment,{children:[e(n.h1,{id:"usebreakpointmanager",children:"useBreakpointManager"}),`
`,e(n.p,{children:["Composable for adding breakpoint manager and related breakpoint info (via breakpoint manager from ",e(n.code,{children:"@ulu/frontend/js/ui/breakpoints.js > BreakpointManager"}),")."]}),`
`,e(n.p,{children:[e(n.strong,{children:"Note:"})," Using the composable is only necessary for unique situations. For basic breakpoint setup use the ",e(n.code,{children:"breakpointsPlugin"}),". Which uses this composable."]}),`
`,e(n.h2,{id:"options-for-this-composable",children:"Options for this composable"}),`
`,e(n.pre,{children:e(n.code,{className:"language-js",children:`const defaults = {
  /**
   * Set an initial value (value in mounted, SSR)
   */
  initialValue: null,
  /**
   * Function called after init (passed manager)
   */
  onReady: null,
  /**
   * Options sent to CssBreakpoints library (ulu/frontend/js/breakpoints <BreakpointManager>)
   */
  plugin: {
    customProperty: "--breakpoint"
  }
}
`})}),`
`,e(n.h2,{id:"example-usage",children:"Example Usage"}),`
`,e(n.pre,{children:e(n.code,{className:"language-html",children:`<script setup>
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
`})})]})}function u(o={}){const{wrapper:n}={...i(),...o.components};return n?e(n,{...o,children:e(a,{...o})}):a(o)}const d=[];export{d as __namedExportsOrder,u as default};
