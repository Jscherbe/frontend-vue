import{I as n}from"./jsx-runtime-DN_h-Dmj.js";import{useMDXComponents as o}from"./index-C1A23uFc.js";import{r as c}from"./index-Dx4nzGDE.js";import"./iframe-CZEnXdIU.js";import"./preload-helper-BJwshlQW.js";function i(t){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...o(),...t.components};return n(c.Fragment,{children:[n(e.h1,{id:"usescrollanchorsection",children:"useScrollAnchorSection"}),`
`,n(e.p,{children:["A composable that provides the core logic for a scroll anchor section, allowing components to register themselves with the ",n(e.code,{children:"UluScrollAnchors"})," parent and react to their active state."]}),`
`,n(e.p,{children:["This composable is intended to be used within a Vue component's ",n(e.code,{children:"<script setup>"})," block to manage the lifecycle and state of a scrollable section."]}),`
`,n(e.h2,{id:"usage",children:"Usage"}),`
`,n(e.pre,{children:n(e.code,{className:"language-html",children:`<script setup>
import { useScrollAnchorSection } from './useScrollAnchorSection';

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  customTitleId: String,
});

const { sectionRef, titleId, isActive, section } = useScrollAnchorSection(props);
<\/script>

<template>
  <section :class="['my-custom-section', { 'is-active': isActive }]" :ref="sectionRef">
    <h2 :id="titleId">{{ title }}</h2>
    <p>This section is {{ isActive ? 'active' : 'inactive' }}.</p>
    <!-- More content here -->
    <slot />
  </section>
</template>
`})}),`
`,n(e.h2,{id:"parameters",children:"Parameters"}),`
`,n(e.p,{children:["The ",n(e.code,{children:"useScrollAnchorSection"})," composable accepts a ",n(e.code,{children:"props"})," object with the following properties:"]}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:[n(e.code,{children:"title"})," (String, required): The title of the section. Used for generating a default ",n(e.code,{children:"titleId"})," and for display in navigation."]}),`
`,n(e.li,{children:[n(e.code,{children:"customTitleId"})," (String, optional): A custom ID for the section's anchor. If not provided, one will be generated from the ",n(e.code,{children:"title"}),"."]}),`
`]}),`
`,n(e.h2,{id:"returns",children:"Returns"}),`
`,n(e.p,{children:"The composable returns an object with the following reactive properties:"}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:[n(e.code,{children:"sectionRef"}),": A ref that should be bound to the root HTML element of your section component. This element is observed by ",n(e.code,{children:"UluScrollAnchors"})," to determine the section's visibility."]}),`
`,n(e.li,{children:[n(e.code,{children:"titleId"})," (ComputedRef): The unique ID for the section's title, used for anchor links."]}),`
`,n(e.li,{children:[n(e.code,{children:"isActive"})," (ComputedRef): A boolean indicating whether the section is currently active (in view)."]}),`
`,n(e.li,{children:[n(e.code,{children:"section"})," (Reactive): The full reactive section object registered with ",n(e.code,{children:"UluScrollAnchors"}),", containing ",n(e.code,{children:"id"}),", ",n(e.code,{children:"title"}),", ",n(e.code,{children:"titleId"}),", ",n(e.code,{children:"element"}),", and ",n(e.code,{children:"active"})," state."]}),`
`]}),`
`,n(e.h2,{id:"integration-with-uluscrollanchors",children:["Integration with ",n(e.code,{children:"UluScrollAnchors"})]}),`
`,n(e.p,{children:["This composable works in conjunction with the ",n(e.code,{children:"UluScrollAnchors"})," component. When a component using ",n(e.code,{children:"useScrollAnchorSection"})," is mounted within ",n(e.code,{children:"UluScrollAnchors"}),", it automatically registers itself. ",n(e.code,{children:"UluScrollAnchors"})," then tracks its visibility and updates the ",n(e.code,{children:"isActive"})," state.\n` state."]})]})}function a(t={}){const{wrapper:e}={...o(),...t.components};return e?n(e,{...t,children:n(i,{...t})}):i(t)}const p=[];export{p as __namedExportsOrder,a as default};
