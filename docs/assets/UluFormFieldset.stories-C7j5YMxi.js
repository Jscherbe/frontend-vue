import{_ as t}from"./UluFormFieldset-npnAxpTc.js";import{_ as o}from"./UluFormItem-CI5VOuc6.js";import{_ as m}from"./UluFormText-Dkzpi7L7.js";import"./iframe-B13WdpPx.js";import"./preload-helper-BJwshlQW.js";import"./UluFormRequiredChar-YlMQ3vFO.js";const d={component:t,tags:["autodocs"],argTypes:{legend:{control:"text"}}},e={render:r=>({components:{UluFormFieldset:t,UluFormItem:o,UluFormText:m},setup(){return{args:r}},template:`
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
