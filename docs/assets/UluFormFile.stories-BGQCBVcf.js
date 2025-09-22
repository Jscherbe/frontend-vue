import{z as o}from"./iframe---2PRveq.js";import{_ as t}from"./UluFormItem-C8lTwFi_.js";import"./preload-helper-BJwshlQW.js";const m={component:o,tags:["autodocs"],argTypes:{label:{control:"text"},labelHidden:{control:"boolean"},multiple:{control:"boolean"},inputAttrs:{control:"object"},required:{control:"boolean"}}},e={render:n=>({components:{UluFormItem:t,UluFormFile:o},setup(){return{args:n}},template:`
      <div class="form-theme">
        <UluFormItem file>
          <UluFormFile v-bind="args" />
        </UluFormItem>
      </div>
    `}),args:{label:"Upload a file"}},r={...e,args:{...e.args,required:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      UluFormItem,
      UluFormFile
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div class="form-theme">
        <UluFormItem file>
          <UluFormFile v-bind="args" />
        </UluFormItem>
      </div>
    \`
  }),
  args: {
    label: 'Upload a file'
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  ...Default,
  args: {
    ...Default.args,
    required: true
  }
}`,...r.parameters?.docs?.source}}};const u=["Default","Required"];export{e as Default,r as Required,u as __namedExportsOrder,m as default};
