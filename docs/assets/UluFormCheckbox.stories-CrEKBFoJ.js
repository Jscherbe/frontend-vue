import{E as o,D as t}from"./iframe-BcloTimr.js";import"./preload-helper-BJwshlQW.js";const l={component:o,tags:["autodocs"],argTypes:{label:{control:"text"},modelValue:{control:"boolean"},required:{control:"boolean"}}},e={render:s=>({components:{UluFormItem:t,UluFormCheckbox:o},setup(){return{args:s}},template:`
      <div class="form-theme">
        <UluFormItem>
          <UluFormCheckbox v-bind="args" />
        </UluFormItem>
      </div>
    `}),args:{label:"Accept terms and conditions",modelValue:!1}},r={...e,args:{...e.args,modelValue:!0}},a={...e,args:{...e.args,label:"I agree to the terms",required:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  ...Default,
  args: {
    ...Default.args,
    label: 'I agree to the terms',
    required: true
  }
}`,...a.parameters?.docs?.source}}};const c=["Default","Checked","Required"];export{r as Checked,e as Default,a as Required,c as __namedExportsOrder,l as default};
