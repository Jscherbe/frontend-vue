import{_ as m}from"./UluFormText-Dlf6ELZb.js";import{_ as l}from"./UluFormItem-DW5hXPMH.js";import{ref as u}from"vue";import"./iframe-DYOmpgae.js";import"./preload-helper-BJwshlQW.js";import"vue-router";import"@floating-ui/vue";import"@ulu/utils/templating.js";import"@ulu/utils/browser/dom.js";import"@ulu/frontend";import"./UluFormRequiredChar-BTQ7f0nP.js";const v={component:m,tags:["autodocs"],argTypes:{label:{control:"text",description:"The label for the text input."},modelValue:{control:"text",description:"The value of the text input (for v-model)."},labelHidden:{control:"boolean",description:"If true, the label will be visually hidden."},required:{control:"boolean",description:"If true, the field will be required."}}},e={render:r=>({components:{UluFormItem:l,UluFormText:m},setup(){return{args:r}},template:`
      <div class="form-theme">
        <UluFormItem text>
          <UluFormText v-bind="args" />
        </UluFormItem>
      </div>
    `}),args:{label:"First Name",modelValue:"John"}},t={...e,args:{...e.args,required:!0}},n={render:r=>({components:{UluFormItem:l,UluFormText:m},setup(){return{args:r}},template:`
      <div class="form-theme">
        <UluFormItem text>
          <UluFormText v-bind="args">
            <template #label>
              My Custom Required Label
            </template>
          </UluFormText>
        </UluFormItem>
      </div>
    `}),args:{required:!0}},o={...e,args:{...e.args,label:"First Name",labelHidden:!0}},a={render:r=>({components:{UluFormItem:l,UluFormText:m},setup(){const s=u("Initial Text");return{args:r,textValue:s}},template:`
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
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  ...Default,
  args: {
    ...Default.args,
    label: 'First Name',
    labelHidden: true
  }
}`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};const T=["Default","Required","CustomRequiredLabel","LabelHidden","VModel"];export{n as CustomRequiredLabel,e as Default,o as LabelHidden,t as Required,a as VModel,T as __namedExportsOrder,v as default};
