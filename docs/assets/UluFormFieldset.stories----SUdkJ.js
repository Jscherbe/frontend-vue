import{_ as t}from"./UluFormFieldset-zMbfA8zv.js";import{_ as r}from"./UluFormItem-BNrkrdMK.js";import{_ as m}from"./UluFormText-AlVV5_8m.js";import"./iframe-Dbp2DzU4.js";import"./preload-helper-BJwshlQW.js";import"./UluFormLabel-CkEwfQnK.js";import"./UluFormRequiredChar-Cr_-PJRI.js";const d={component:t,tags:["autodocs"],argTypes:{legend:{control:"text"}}},e={render:o=>({components:{UluFormFieldset:t,UluFormItem:r,UluFormText:m},setup(){return{args:o}},template:`
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
