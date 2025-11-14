import{am as r}from"./iframe-D0GvsFI4.js";import"./preload-helper-BJwshlQW.js";const a={component:r,tags:["autodocs"],argTypes:{lines:{control:"number"}},parameters:{docs:{description:{component:"A component to render a block of skeleton content with a random number of lines and widths."}}}},e={render:t=>({components:{UluSkeletonContent:r},setup(){return{args:t}},template:'<UluSkeletonContent v-bind="args" />'}),args:{lines:6}},n={...e,args:{lines:3},name:"3 Lines"};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      UluSkeletonContent
    },
    setup() {
      return {
        args
      };
    },
    template: '<UluSkeletonContent v-bind="args" />'
  }),
  args: {
    lines: 6
  }
}`,...e.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  ...Default,
  args: {
    lines: 3
  },
  name: "3 Lines"
}`,...n.parameters?.docs?.source}}};const c=["Default","ThreeLines"];export{e as Default,n as ThreeLines,c as __namedExportsOrder,a as default};
