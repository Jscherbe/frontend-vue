import{I as e}from"./jsx-runtime-DIjDyuc2.js";import{useMDXComponents as i}from"./index-DIzwWG-n.js";import{M as t}from"./blocks-Bw-NIlPO.js";import{r as s}from"./index-vwjNkSeb.js";import"./iframe-hUBpraf2.js";import"./preload-helper-BJwshlQW.js";function r(o){const n={a:"a",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...i(),...o.components};return e(s.Fragment,{children:[e(t,{title:"API/JS/useModifiers"}),`
`,e(n.h1,{id:"usemodifiers",children:"useModifiers"}),`
`,e("a",{name:"module_useModifiers"}),`
`,e(n.h2,{id:"usemodifiers-1",children:"useModifiers"}),`
`,e("a",{name:"module_useModifiers.useModifiers"}),`
`,e(n.h3,{id:"usemodifiersusemodifiersoptions--object",children:["useModifiers.useModifiers(options) ⇒ ",e(n.code,{children:"object"})]}),`
`,e(n.p,{children:`A composable to manage and resolve BEM style modifiers for a component,
combining user-passed modifiers with internally derived conditional modifiers.`}),`
`,e(n.p,{children:[e(n.strong,{children:"Kind"}),": static method of ",e(n.a,{href:"#module_useModifiers",children:e(n.code,{children:"useModifiers"})}),e(n.br,{}),`
`,e(n.strong,{children:"Returns"}),": ",e(n.code,{children:"object"})," - An object containing the computed property ",e(n.code,{children:"resolvedModifiers"})]}),`
`,e(n.table,{children:[e(n.thead,{children:e(n.tr,{children:[e(n.th,{children:"Param"}),e(n.th,{children:"Type"}),e(n.th,{children:"Default"}),e(n.th,{children:"Description"})]})}),e(n.tbody,{children:[e(n.tr,{children:[e(n.td,{children:"options"}),e(n.td,{children:e(n.code,{children:"object"})}),e(n.td,{}),e(n.td,{children:"The options for the composable."})]}),e(n.tr,{children:[e(n.td,{children:"options.props"}),e(n.td,{children:e(n.code,{children:"object"})}),e(n.td,{}),e(n.td,{children:"The component's props object. (Must contain a 'modifiers' prop if user-passed modifiers are expected)"})]}),e(n.tr,{children:[e(n.td,{children:"options.baseClass"}),e(n.td,{children:[e(n.code,{children:"string"})," | ",e(n.code,{children:"module:vue~Ref.<string>"})]}),e(n.td,{}),e(n.td,{children:"The base CSS class name for the component (e.g., 'modal'). Can be a string or a ref to a string."})]}),e(n.tr,{children:[e(n.td,{children:"[options.internal]"}),e(n.td,{children:[e(n.code,{children:"string"})," | ",e(n.code,{children:"Array.<string>"})," | ",e(n.code,{children:"Object.<string, any>"})," | ",e(n.code,{children:"module:vue~ComputedRef.<(string|Array.<string>|Object.<string, any>)>"})]}),e(n.td,{children:e(n.code,{children:"&quot;{}&quot;"})}),e(n.td,{children:"A flexible input for component's internal modifiers. Can be a string, array of strings/objects, or an object mapping modifier names to conditions."})]})]})]}),`
`,e(n.p,{children:e(n.strong,{children:"Example"})}),`
`,e(n.pre,{children:e(n.code,{className:"language-js",children:`// In MyComponent.vue:
<template>
<div :class="[resolvedModifiers, 'other-class']"></div>
</template>

<script setup>
import { computed, ref } from 'vue';
import { useModifiers } from './composables/useModifiers.js'; // Adjust path

const props = defineProps({
  variant: String, // e.g., 'primary', 'secondary'
  isActive: Boolean,
  modifiers: [String, Array, Object] // User-passed modifiers
});

const isHovered = ref(false);

// Define component-internal modifiers based on props or local state
const internalModifiers = computed(() => ({
  [props.variant]: !!props.variant, // Add 'primary' or 'secondary' if prop exists
  'active': props.isActive, // Add 'active' if isActive prop is true
  'hovered': isHovered.value, // Add 'hovered' if local state is true
  'default': !props.variant && !props.isActive // Add 'default' if no variant/active
}));

// Use the composable to get the combined modifier classes
const { resolvedModifiers } = useModifiers({
  props: props, // Pass component props for 'modifiers' prop
  baseClass: 'button', // The BEM block name
  internal: internalModifiers // The computed internal modifiers
});
<\/script>

// Resulting class examples for 'my-component':
// <MyComponent />                       => class="my-component my-component--default"
// <MyComponent variant="primary" />     => class="my-component my-component--primary"
// <MyComponent isActive />              => class="my-component my-component--active"
// <MyComponent modifiers="condensed" /> => class="my-component my-component--default my-component--condensed"
// <MyComponent variant="secondary" :isActive="true" modifiers="round" />
//   => class="my-component my-component--secondary my-component--active my-component--round"
`})})]})}function h(o={}){const{wrapper:n}={...i(),...o.components};return n?e(n,{...o,children:e(r,{...o})}):r(o)}const f=[];export{f as __namedExportsOrder,h as default};
