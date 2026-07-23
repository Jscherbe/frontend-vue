import{_ as t}from"./UluFormFieldset-CRggmi1n.js";import{_ as r}from"./UluFormItem-CYbCI5BG.js";import{_ as m}from"./UluFormText-DTyQm-pp.js";import"./iframe-B_vWY6zZ.js";import"./preload-helper-BJwshlQW.js";import"./UluFormLabel-DoQIsP2I.js";import"./UluFormRequiredChar-DOCu3CVt.js";const d={component:t,tags:["autodocs"],argTypes:{legend:{control:"text"}}},e={render:o=>({components:{UluFormFieldset:t,UluFormItem:r,UluFormText:m},setup(){return{args:o}},template:`
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
