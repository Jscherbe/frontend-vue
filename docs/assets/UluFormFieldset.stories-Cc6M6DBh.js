import{_ as t}from"./UluFormFieldset-DsDu6R30.js";import{_ as r}from"./UluFormItem-mAUbAgaX.js";import{_ as m}from"./UluFormText-06B7PYYB.js";import"./iframe-D8gYxoFq.js";import"./preload-helper-BJwshlQW.js";import"./UluFormLabel-DRl3qh97.js";import"./UluFormRequiredChar-kcb5XAHB.js";const d={component:t,tags:["autodocs"],argTypes:{legend:{control:"text"}}},e={render:o=>({components:{UluFormFieldset:t,UluFormItem:r,UluFormText:m},setup(){return{args:o}},template:`
      <div class="form-theme">
        <UluFormFieldset v-bind="args">
          <UluFormItem layout="text">
            <UluFormText label="First Name" modelValue="John" />
          </UluFormItem>
          <UluFormItem layout="text">
            <UluFormText label="Last Name" modelValue="Doe" />
          </UluFormItem>
        </UluFormFieldset>
      </div>
    `}),args:{legend:"Personal Information"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      UluFormFieldset,
      UluFormItem,
      UluFormText
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div class="form-theme">
        <UluFormFieldset v-bind="args">
          <UluFormItem layout="text">
            <UluFormText label="First Name" modelValue="John" />
          </UluFormItem>
          <UluFormItem layout="text">
            <UluFormText label="Last Name" modelValue="Doe" />
          </UluFormItem>
        </UluFormFieldset>
      </div>
    \`
  }),
  args: {
    legend: 'Personal Information'
  }
}`,...e.parameters?.docs?.source}}};const U=["Default"];export{e as Default,U as __namedExportsOrder,d as default};
