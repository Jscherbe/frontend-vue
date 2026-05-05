import{_ as n}from"./UluFormLabel-8cDcaJJU.js";import"./fontawesome-DyrJdE5N.js";import"./UluFormRequiredChar-BIMmh2Y6.js";const d={component:n,tags:["autodocs"],argTypes:{id:{control:"text"},labelHidden:{control:"boolean"},required:{control:"boolean"}}},e={args:{id:"input-id",default:"Form Label"},render:s=>({components:{UluFormLabel:n},setup(){return{args:s}},template:`
      <div class="form-theme">
        <UluFormLabel v-bind="args">
          {{ args.default }}
        </UluFormLabel>
      </div>
    `})},r={...e,args:{...e.args,required:!0}},a={...e,args:{...e.args,labelHidden:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'input-id',
    default: 'Form Label'
  },
  render: args => ({
    components: {
      UluFormLabel
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div class="form-theme">
        <UluFormLabel v-bind="args">
          {{ args.default }}
        </UluFormLabel>
      </div>
    \`
  })
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  ...Default,
  args: {
    ...Default.args,
    required: true
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  ...Default,
  args: {
    ...Default.args,
    labelHidden: true
  }
}`,...a.parameters?.docs?.source}}};const u=["Default","Required","LabelHidden"];export{e as Default,a as LabelHidden,r as Required,u as __namedExportsOrder,d as default};
