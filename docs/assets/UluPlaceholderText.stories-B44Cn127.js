import{U as a}from"./UluPlaceholderText-i13r_vR-.js";import"./iframe-BAOMv0fj.js";import"./preload-helper-BJwshlQW.js";const p={component:a,tags:["autodocs"],argTypes:{amount:{control:{type:"number",min:1,max:10},description:"The number of paragraphs of placeholder text to render."},element:{control:{type:"text"},description:"The HTML element to wrap the text in (e.g., `p`, `div`, `span`)."}},args:{amount:1,element:"p"}},r={render:e=>({components:{UluPlaceholderText:a},setup(){return{args:e}},template:'<UluPlaceholderText v-bind="args" />'}),args:{}},n={render:e=>({components:{UluPlaceholderText:a},setup(){return{args:e}},template:'<UluPlaceholderText v-bind="args" />'}),args:{amount:3}},t={render:e=>({components:{UluPlaceholderText:a},setup(){return{args:e}},template:`
      <div>
        <h3>Placeholder text in a div:</h3>
        <UluPlaceholderText v-bind="args" />
      </div>
    `}),args:{amount:1,element:"div"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      UluPlaceholderText
    },
    setup() {
      return {
        args
      };
    },
    template: '<UluPlaceholderText v-bind="args" />'
  }),
  args: {}
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      UluPlaceholderText
    },
    setup() {
      return {
        args
      };
    },
    template: '<UluPlaceholderText v-bind="args" />'
  }),
  args: {
    amount: 3
  }
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      UluPlaceholderText
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div>
        <h3>Placeholder text in a div:</h3>
        <UluPlaceholderText v-bind="args" />
      </div>
    \`
  }),
  args: {
    amount: 1,
    element: 'div'
  }
}`,...t.parameters?.docs?.source}}};const d=["Default","MultipleParagraphs","DifferentElement"];export{r as Default,t as DifferentElement,n as MultipleParagraphs,d as __namedExportsOrder,p as default};
