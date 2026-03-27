import{_ as t}from"./UluFormFieldset-CZee-fDR.js";import{_ as o}from"./UluFormItem-DnYG2oG6.js";import{_ as m}from"./UluFormText-XxA6Wo-D.js";import"./iframe-DG8EdXDm.js";import"./preload-helper-BJwshlQW.js";import"./UluFormRequiredChar-DV-VW08i.js";const d={component:t,tags:["autodocs"],argTypes:{legend:{control:"text"}}},e={render:r=>({components:{UluFormFieldset:t,UluFormItem:o,UluFormText:m},setup(){return{args:r}},template:`
      <div class="form-theme">
        <UluFormFieldset v-bind="args">
          <UluFormItem text>
            <UluFormText label="First Name" modelValue="John" />
          </UluFormItem>
          <UluFormItem text>
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
          <UluFormItem text>
            <UluFormText label="First Name" modelValue="John" />
          </UluFormItem>
          <UluFormItem text>
            <UluFormText label="Last Name" modelValue="Doe" />
          </UluFormItem>
        </UluFormFieldset>
      </div>
    \`
  }),
  args: {
    legend: 'Personal Information'
  }
}`,...e.parameters?.docs?.source}}};const i=["Default"];export{e as Default,i as __namedExportsOrder,d as default};
