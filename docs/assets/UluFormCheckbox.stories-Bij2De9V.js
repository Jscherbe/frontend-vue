import{_ as t}from"./UluFormCheckbox-BBbV5o6u.js";import{_ as m}from"./UluFormItem-DberPkcE.js";import"./fontawesome-DyrJdE5N.js";import"./iframe-DFeB4tIX.js";import"./preload-helper-BJwshlQW.js";import"./UluFormLabel-8cDcaJJU.js";import"./UluFormRequiredChar-BIMmh2Y6.js";const p={component:t,tags:["autodocs"],argTypes:{modelValue:{control:"boolean"}}},r={render:e=>({components:{UluFormItem:m,UluFormCheckbox:t},setup(){return{args:e}},template:`
      <div class="form-theme">
        <UluFormItem layout="checkbox" label="Accept terms and conditions">
          <UluFormCheckbox v-bind="args" />
        </UluFormItem>
      </div>
    `}),args:{modelValue:!1}},o={render:e=>({components:{UluFormItem:m,UluFormCheckbox:t},setup(){return{args:e}},template:`
      <div class="form-theme">
        <UluFormItem layout="checkbox" label="Accept terms and conditions">
          <UluFormCheckbox v-bind="args" />
        </UluFormItem>
      </div>
    `}),args:{modelValue:!0}},n={render:e=>({components:{UluFormItem:m,UluFormCheckbox:t},setup(){return{args:e}},template:`
      <div class="form-theme">
        <UluFormItem layout="checkbox" label="I agree to the terms" required>
          <UluFormCheckbox v-bind="args" />
        </UluFormItem>
      </div>
    `}),args:{modelValue:!1}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
        <UluFormItem layout="checkbox" label="Accept terms and conditions">
          <UluFormCheckbox v-bind="args" />
        </UluFormItem>
      </div>
    \`
  }),
  args: {
    modelValue: false
  }
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
        <UluFormItem layout="checkbox" label="Accept terms and conditions">
          <UluFormCheckbox v-bind="args" />
        </UluFormItem>
      </div>
    \`
  }),
  args: {
    modelValue: true
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
        <UluFormItem layout="checkbox" label="I agree to the terms" required>
          <UluFormCheckbox v-bind="args" />
        </UluFormItem>
      </div>
    \`
  }),
  args: {
    modelValue: false
  }
}`,...n.parameters?.docs?.source}}};const b=["Default","Checked","Required"];export{o as Checked,r as Default,n as Required,b as __namedExportsOrder,p as default};
