import{_ as t}from"./UluFormCheckbox-B177Rn6J.js";import{_ as m}from"./UluFormItem-mAUbAgaX.js";import"./iframe-D8gYxoFq.js";import"./preload-helper-BJwshlQW.js";import"./UluFormLabel-DRl3qh97.js";import"./UluFormRequiredChar-kcb5XAHB.js";const i={component:t,tags:["autodocs"],argTypes:{modelValue:{control:"boolean"}}},r={render:e=>({components:{UluFormItem:m,UluFormCheckbox:t},setup(){return{args:e}},template:`
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
}`,...n.parameters?.docs?.source}}};const p=["Default","Checked","Required"];export{o as Checked,r as Default,n as Required,p as __namedExportsOrder,i as default};
