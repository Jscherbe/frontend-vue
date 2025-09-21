import{_ as a}from"./UluFormCheckbox-ciuxWToY.js";import{_ as t}from"./UluFormItem-D9Ob-OK3.js";import"./iframe-BAda3xFs.js";import"./preload-helper-BJwshlQW.js";const u={component:a,tags:["autodocs"],argTypes:{label:{control:"text"},modelValue:{control:"boolean"},required:{control:"boolean"}}},e={render:s=>({components:{UluFormItem:t,UluFormCheckbox:a},setup(){return{args:s}},template:`
      <div class="form-theme">
        <UluFormItem>
          <UluFormCheckbox v-bind="args" />
        </UluFormItem>
      </div>
    `}),args:{label:"Accept terms and conditions",modelValue:!1}},r={...e,args:{...e.args,modelValue:!0}},o={...e,args:{...e.args,label:"I agree to the terms",required:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      UluFormItem,
      UluFormCheckbox
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div class="form-theme">
        <UluFormItem>
          <UluFormCheckbox v-bind="args" />
        </UluFormItem>
      </div>
    \`
  }),
  args: {
    label: 'Accept terms and conditions',
    modelValue: false
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  ...Default,
  args: {
    ...Default.args,
    modelValue: true
  }
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  ...Default,
  args: {
    ...Default.args,
    label: 'I agree to the terms',
    required: true
  }
}`,...o.parameters?.docs?.source}}};const d=["Default","Checked","Required"];export{r as Checked,e as Default,o as Required,d as __namedExportsOrder,u as default};
