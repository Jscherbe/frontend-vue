import{I as n}from"./jsx-runtime-DAQ9OPq1.js";import{useMDXComponents as c}from"./index-DIzwWG-n.js";import{r}from"./index-vwjNkSeb.js";import"./iframe-CSRVEcn3.js";import"./preload-helper-BJwshlQW.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...c(),...o.components};return n(r.Fragment,{children:[n(e.h1,{id:"usescrollanchors",children:"useScrollAnchors"}),`
`,n(e.p,{children:[`The main composable that contains the core "engine" for the Scroll Anchors system.
It encapsulates the `,n(e.code,{children:"IntersectionObserver"}),` logic to track sections and manage their active state.
This is intended for advanced use cases where a developer needs to build a custom provider
component instead of using the default `,n(e.code,{children:"UluScrollAnchors"}),"."]}),`
`,n(e.h2,{id:"usage",children:"Usage"}),`
`,n(e.p,{children:["This composable is used to power a custom provider component. You would use it to provide the context to child components via Vue's ",n(e.code,{children:"provide"})," function, using string-based keys."]}),`
`,n(e.pre,{children:n(e.code,{className:"language-html",children:`<script setup>
  import { ref, computed, provide } from "vue";
  import { useScrollAnchors } from './useScrollAnchors.js';

  const props = defineProps({
    firstItemActive: Boolean,
    observerOptions: Object
  });
  const emit = defineEmits(['section-change']);
  const componentEl = ref(null);
  const sections = ref([]);

  // Use the composable to handle the core logic
  useScrollAnchors({ sections, props, emit, componentElRef: componentEl });

  // Provide the state and registration functions to children
  provide('uluScrollAnchorsSections', computed(() => sections.value));
  provide('uluScrollAnchorsRegister', (section) => sections.value.push(section));
  provide('uluScrollAnchorsUnregister', (sectionId) => {
    const index = sections.value.findIndex(r => r.id === sectionId);
    if (index > -1) sections.value.splice(index, 1);
  });
<\/script>

<template>
  <!-- Your custom wrapper, or no wrapper at all -->
  <div ref="componentEl">
    <slot/>
  </div>
</template>
`})}),`
`,n(e.h2,{id:"parameters",children:"Parameters"}),`
`,n(e.p,{children:["The ",n(e.code,{children:"useScrollAnchors"})," composable accepts a single object with the following properties:"]}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:[n(e.code,{children:"sections"})," (Ref): A ",n(e.code,{children:"ref"})," to the array of section objects that will be tracked."]}),`
`,n(e.li,{children:[n(e.code,{children:"props"})," (Object): A props object containing ",n(e.code,{children:"observerOptions"})," and ",n(e.code,{children:"firstItemActive"}),"."]}),`
`,n(e.li,{children:[n(e.code,{children:"emit"})," (Function): The ",n(e.code,{children:"emit"})," function from the host component, used to emit the ",n(e.code,{children:"section-change"})," event."]}),`
`,n(e.li,{children:[n(e.code,{children:"componentElRef"})," (Ref): A ",n(e.code,{children:"ref"})," to an element within the component, used to find the nearest scrollable ancestor. This is not needed if ",n(e.code,{children:"observerOptions.root"})," is set."]}),`
`]}),`
`,n(e.h2,{id:"returns",children:"Returns"}),`
`,n(e.p,{children:["This composable does not return any values. It manages the observer and mutates the ",n(e.code,{children:"active"})," state on the items within the ",n(e.code,{children:"sections"})," array directly."]})]})}function a(o={}){const{wrapper:e}={...c(),...o.components};return e?n(e,{...o,children:n(t,{...o})}):t(o)}const p=[];export{p as __namedExportsOrder,a as default};
