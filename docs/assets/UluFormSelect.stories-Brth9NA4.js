import{_ as r}from"./UluFormSelect-BSCbWrG0.js";import{_ as l}from"./UluFormItem-DdCBjxD0.js";import"./iframe-kPZklDD1.js";import"./preload-helper-BJwshlQW.js";import"./props-DEaRQ31f.js";import"./UluFormLabel-LIulJAsg.js";import"./UluFormRequiredChar--PWDqaZ9.js";const F={component:r,tags:["autodocs"],argTypes:{modelValue:{control:"text"},options:{control:"object"}}},m=[{value:"option1",text:"Option 1"},{value:"option2",text:"Option 2"},{value:"option3",text:"Option 3"}],t={render:e=>({components:{UluFormItem:l,UluFormSelect:r},setup(){return{args:e}},template:`
      <div class="form-theme">
        <UluFormItem layout="select" label="Select an option">
          <UluFormSelect v-bind="args" />
        </UluFormItem>
      </div>
    `}),args:{options:m,modelValue:""}},o={render:e=>({components:{UluFormItem:l,UluFormSelect:r},setup(){return{args:e}},template:`
      <div class="form-theme">
        <UluFormItem layout="select" label="Select an option">
          <UluFormSelect v-bind="args" />
        </UluFormItem>
      </div>
    `}),args:{options:m,modelValue:"option2"}},n={render:e=>({components:{UluFormItem:l,UluFormSelect:r},setup(){return{args:e}},template:`
      <div class="form-theme">
        <UluFormItem layout="select" label="Select an option" required>
          <UluFormSelect v-bind="args" />
        </UluFormItem>
      </div>
    `}),args:{options:m,modelValue:""}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      UluFormItem,
      UluFormSelect
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div class="form-theme">
        <UluFormItem layout="select" label="Select an option">
          <UluFormSelect v-bind="args" />
        </UluFormItem>
      </div>
    \`
  }),
  args: {
    options,
    modelValue: ''
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      UluFormItem,
      UluFormSelect
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div class="form-theme">
        <UluFormItem layout="select" label="Select an option">
          <UluFormSelect v-bind="args" />
        </UluFormItem>
      </div>
    \`
  }),
  args: {
    options,
    modelValue: 'option2'
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      UluFormItem,
      UluFormSelect
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div class="form-theme">
        <UluFormItem layout="select" label="Select an option" required>
          <UluFormSelect v-bind="args" />
        </UluFormItem>
      </div>
    \`
  }),
  args: {
    options,
    modelValue: ''
  }
}`,...n.parameters?.docs?.source}}};const U=["Default","PreSelected","Required"];export{t as Default,o as PreSelected,n as Required,U as __namedExportsOrder,F as default};
