import{I as n}from"./jsx-runtime-CpiOTgwl.js";import{useMDXComponents as c}from"./index-DIzwWG-n.js";import{r as i}from"./index-vwjNkSeb.js";import"./iframe-BAOMv0fj.js";import"./preload-helper-BJwshlQW.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...c(),...o.components};return n(i.Fragment,{children:[n(e.h1,{id:"usescrollanchorsections",children:"useScrollAnchorSections"}),`
`,n(e.p,{children:"A composable that provides a reactive list of all registered scroll anchor sections. This is the recommended way to access section data for building custom navigation or other components that need to be aware of the scroll anchor system's state."}),`
`,n(e.p,{children:["This composable must be used within a component that is a descendant of ",n(e.code,{children:"UluScrollAnchors"}),"."]}),`
`,n(e.h2,{id:"usage",children:"Usage"}),`
`,n(e.p,{children:"Here is an example of a simple custom navigation component."}),`
`,n(e.pre,{children:n(e.code,{className:"language-html",children:`<script setup>
import { useScrollAnchorSections } from './useScrollAnchorSections';

const sections = useScrollAnchorSections();
<\/script>

<template>
  <nav v-if="sections && sections.length" class="my-custom-nav">
    <ul>
      <li v-for="section in sections" :key="section.id">
        <a :href="\`#\${section.titleId}\`" :class="{ 'is-active': section.active }">
          {{ section.title }}
        </a>
      </li>
    </ul>
  </nav>
</template>
`})}),`
`,n(e.h2,{id:"parameters",children:"Parameters"}),`
`,n(e.p,{children:["The ",n(e.code,{children:"useScrollAnchorSections"})," composable takes no parameters."]}),`
`,n(e.h2,{id:"returns",children:"Returns"}),`
`,n(e.p,{children:["The composable returns a reactive ",n(e.code,{children:"ref"})," which contains an array of section objects. If used outside of an ",n(e.code,{children:"UluScrollAnchors"})," context, it will return ",n(e.code,{children:"undefined"})," and log a warning."]}),`
`,n(e.p,{children:"Each section object in the array has the following properties:"}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:[n(e.code,{children:"id"})," (Symbol): The unique ID of the section."]}),`
`,n(e.li,{children:[n(e.code,{children:"title"})," (String): The title of the section."]}),`
`,n(e.li,{children:[n(e.code,{children:"titleId"})," (String): The ID used for the anchor link."]}),`
`,n(e.li,{children:[n(e.code,{children:"element"})," (HTMLElement): The root HTML element of the section component."]}),`
`,n(e.li,{children:[n(e.code,{children:"active"})," (Boolean): A boolean indicating whether the section is currently active."]}),`
`]})]})}function d(o={}){const{wrapper:e}={...c(),...o.components};return e?n(e,{...o,children:n(t,{...o})}):t(o)}const m=[];export{m as __namedExportsOrder,d as default};
