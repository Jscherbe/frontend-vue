import{I as n}from"./jsx-runtime-BQCFrEnz.js";import{useMDXComponents as l}from"./index-DIzwWG-n.js";import{r}from"./index-vwjNkSeb.js";import"./iframe-CBR87ZgS.js";import"./preload-helper-BJwshlQW.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...l(),...o.components};return n(r.Fragment,{children:[n(e.h1,{id:"dom",children:"Dom"}),`
`,n(e.h2,{id:"reftoelement",children:"refToElement"}),`
`,n(e.p,{children:["The ",n(e.code,{children:"refToElement"})," utility resolves a Vue template ref's unwrapped value to its underlying DOM element. This works whether the ",n(e.code,{children:"ref"})," is on a standard HTML element or on a Vue component instance."]}),`
`,n(e.h2,{id:"example-usage",children:"Example Usage"}),`
`,n(e.p,{children:["This example shows how to use ",n(e.code,{children:"refToElement"})," within a Vue component's ",n(e.code,{children:"setup"})," function to get the underlying ",n(e.code,{children:"HTMLElement"})," from a ",n(e.code,{children:"ref"}),"."]}),`
`,n(e.pre,{children:n(e.code,{className:"language-js",children:`import { ref, onMounted } from 'vue';
import { utils } from '@ulu/frontend-vue/utils';
const { dom } = utils;

// Template:
// <div ref="htmlEl"></div>
// <child-component ref="componentEl"></child-component>

// Logic:
// 1. Define refs for your template elements
const htmlEl = ref(null);
const componentEl = ref(null);

// 2. Use the utility after the component has mounted
onMounted(() => {
  const resolvedHtmlEl = dom.refToElement(htmlEl.value);
  console.log(resolvedHtmlEl); // -> HTMLElement <div>

  const resolvedComponentEl = dom.refToElement(componentEl.value);
  console.log(resolvedComponentEl); // -> The root HTMLElement of ChildComponent
});
`})})]})}function h(o={}){const{wrapper:e}={...l(),...o.components};return e?n(e,{...o,children:n(t,{...o})}):t(o)}const p=[];export{p as __namedExportsOrder,h as default};
