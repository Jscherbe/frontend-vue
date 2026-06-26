import{_ as r}from"./UluFormSelect-Cs1Ghju0.js";import{_ as l}from"./UluFormItem-25VfGqBL.js";import"./iframe-BrHxbdoU.js";import"./preload-helper-BJwshlQW.js";import"./UluFormLabel-ANjGsHgC.js";import"./UluFormRequiredChar-DbTDDwWh.js";const d={component:r,tags:["autodocs"],argTypes:{modelValue:{control:"text"},options:{control:"object"}}},m=[{value:"option1",text:"Option 1"},{value:"option2",text:"Option 2"},{value:"option3",text:"Option 3"}],t={render:e=>({components:{UluFormItem:l,UluFormSelect:r},setup(){return{args:e}},template:`
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
}`,...n.parameters?.docs?.source}}};const F=["Default","PreSelected","Required"];export{t as Default,o as PreSelected,n as Required,F as __namedExportsOrder,d as default};
