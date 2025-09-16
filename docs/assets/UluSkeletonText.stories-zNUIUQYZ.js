import{af as n}from"./iframe-cmUWbRwO.js";import"./preload-helper-BJwshlQW.js";const s={component:n,tags:["autodocs"],parameters:{docs:{description:{component:"A simple component to render a block of skeleton text. It can be styled with standard CSS for width, etc."}}}},e={render:o=>({components:{UluSkeletonText:n},setup(){return{args:o}},template:`
      <p>Some text with <UluSkeletonText v-bind="args" inline /> in the middle of it.</p>`}),args:{}},t={render:()=>({components:{UluSkeletonText:n},template:`
      <div>
        <p><UluSkeletonText width="large-x" inline /></p>
        <p><UluSkeletonText width="large" inline /></p>
        <p><UluSkeletonText width="large-x" inline /></p>
      </div>
    `}),name:"As text blocks"};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      UluSkeletonText
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <p>Some text with <UluSkeletonText v-bind="args" inline /> in the middle of it.</p>\`
  }),
  args: {}
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      UluSkeletonText
    },
    template: \`
      <div>
        <p><UluSkeletonText width="large-x" inline /></p>
        <p><UluSkeletonText width="large" inline /></p>
        <p><UluSkeletonText width="large-x" inline /></p>
      </div>
    \`
  }),
  name: "As text blocks"
}`,...t.parameters?.docs?.source}}};const a=["Default","Blocks"];export{t as Blocks,e as Default,a as __namedExportsOrder,s as default};
