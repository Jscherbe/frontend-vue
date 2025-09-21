import{y as l,P as u}from"./iframe-BAda3xFs.js";import{_ as s}from"./UluFormItem-D9Ob-OK3.js";import"./preload-helper-BJwshlQW.js";const p={component:l,tags:["autodocs"],argTypes:{label:{control:"text",description:"The label for the text input."},modelValue:{control:"text",description:"The value of the text input (for v-model)."},labelHidden:{control:"boolean",description:"If true, the label will be visually hidden."},required:{control:"boolean",description:"If true, the field will be required."}}},e={render:r=>({components:{UluFormItem:s,UluFormText:l},setup(){return{args:r}},template:`
      <div class="form-theme">
        <UluFormItem text>
          <UluFormText v-bind="args" />
        </UluFormItem>
      </div>
    `}),args:{label:"First Name",modelValue:"John"}},t={...e,args:{...e.args,required:!0}},n={render:r=>({components:{UluFormItem:s,UluFormText:l},setup(){return{args:r}},template:`
      <div class="form-theme">
        <UluFormItem text>
          <UluFormText v-bind="args">
            <template #label>
              My Custom Required Label
            </template>
          </UluFormText>
        </UluFormItem>
      </div>
    `}),args:{required:!0}},a={...e,args:{...e.args,label:"First Name",labelHidden:!0}},o={render:r=>({components:{UluFormItem:s,UluFormText:l},setup(){const m=u("Initial Text");return{args:r,textValue:m}},template:`
      <div class="form-theme">
        <UluFormItem text>
          <UluFormText label="My Text Input" v-model="textValue" />
        </UluFormItem>
        <p style="margin-top: 1rem;">Current value: {{ textValue }}</p>
      </div>
    `}),args:{}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
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
        <UluFormItem text>
          <UluFormText v-bind="args" />
        </UluFormItem>
      </div>
    \`
  }),
  args: {
    label: 'First Name',
    modelValue: 'John'
  }
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  ...Default,
  args: {
    ...Default.args,
    required: true
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
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
        <UluFormItem text>
          <UluFormText v-bind="args">
            <template #label>
              My Custom Required Label
            </template>
          </UluFormText>
        </UluFormItem>
      </div>
    \`
  }),
  args: {
    required: true
  }
}`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  ...Default,
  args: {
    ...Default.args,
    label: 'First Name',
    labelHidden: true
  }
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      UluFormItem,
      UluFormText
    },
    setup() {
      const textValue = ref('Initial Text');
      return {
        args,
        textValue
      };
    },
    template: \`
      <div class="form-theme">
        <UluFormItem text>
          <UluFormText label="My Text Input" v-model="textValue" />
        </UluFormItem>
        <p style="margin-top: 1rem;">Current value: {{ textValue }}</p>
      </div>
    \`
  }),
  args: {}
}`,...o.parameters?.docs?.source}}};const x=["Default","Required","CustomRequiredLabel","LabelHidden","VModel"];export{n as CustomRequiredLabel,e as Default,a as LabelHidden,t as Required,o as VModel,x as __namedExportsOrder,p as default};
