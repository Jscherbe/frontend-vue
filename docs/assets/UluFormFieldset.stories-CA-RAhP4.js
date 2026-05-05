import{_ as t}from"./UluFormFieldset-Dng-jL1D.js";import{_ as r}from"./UluFormItem-BULwJFkN.js";import{_ as m}from"./UluFormText-Cr5jMBn4.js";import"./iframe-ssSLPBZB.js";import"./preload-helper-BJwshlQW.js";import"./UluFormLabel-Bg4A2W7O.js";import"./UluFormRequiredChar-W2tR-32s.js";import"./props-DEaRQ31f.js";const U={component:t,tags:["autodocs"],argTypes:{legend:{control:"text"}}},e={render:o=>({components:{UluFormFieldset:t,UluFormItem:r,UluFormText:m},setup(){return{args:o}},template:`
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
}`,...e.parameters?.docs?.source}}};const p=["Default"];export{e as Default,p as __namedExportsOrder,U as default};
