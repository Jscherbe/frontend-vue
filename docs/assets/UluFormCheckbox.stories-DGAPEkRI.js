import{_ as t}from"./UluFormCheckbox-fS6ilzCS.js";import{_ as s}from"./UluFormItem-DW5hXPMH.js";import"vue";import"./iframe-B-E22KK1.js";import"./preload-helper-BJwshlQW.js";import"vue-router";import"@floating-ui/vue";import"@ulu/utils/templating.js";import"@ulu/utils/browser/dom.js";import"@ulu/frontend";import"./UluFormRequiredChar-BTQ7f0nP.js";const h={component:t,tags:["autodocs"],argTypes:{label:{control:"text"},modelValue:{control:"boolean"},required:{control:"boolean"}}},e={render:a=>({components:{UluFormItem:s,UluFormCheckbox:t},setup(){return{args:a}},template:`
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
}`,...o.parameters?.docs?.source}}};const F=["Default","Checked","Required"];export{r as Checked,e as Default,o as Required,F as __namedExportsOrder,h as default};
