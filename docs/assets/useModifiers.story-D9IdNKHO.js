import{I as o}from"./jsx-runtime-DfHDbGG1.js";import{useMDXComponents as s}from"./index-DIzwWG-n.js";import{r as i}from"./index-vwjNkSeb.js";import"./iframe-3_VkHyxI.js";import"./preload-helper-BJwshlQW.js";function n(r){const e={code:"code",h1:"h1",p:"p",pre:"pre",...s(),...r.components};return o(i.Fragment,{children:[o(e.h1,{id:"usemodifiers",children:"useModifiers"}),`
`,o(e.p,{children:"Composable for creating modifier classes for base class based on modifiers prop for a given component"}),`
`,o(e.pre,{children:o(e.code,{className:"language-html",children:`<script setup>
  import { useModifiers } from "../composables/useModifiers.js";
  const props = defineProps({
    /**
     * Modifiers for classes
     */
    modifiers: [String, Array],
  });
  const { resolvedModifiers } = useModifiers({ props, baseClass: "button" });
<\/script>
`})})]})}function m(r={}){const{wrapper:e}={...s(),...r.components};return e?o(e,{...r,children:o(n,{...r})}):n(r)}const f=[];export{f as __namedExportsOrder,m as default};
