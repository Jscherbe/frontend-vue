import{_ as t}from"./UluFormText-Ca48Vcju.js";import{_ as r}from"./UluFormItem-25VfGqBL.js";import{h as u}from"./iframe-BrHxbdoU.js";import"./UluFormLabel-ANjGsHgC.js";import"./UluFormRequiredChar-DbTDDwWh.js";import"./preload-helper-BJwshlQW.js";const x={component:t,tags:["autodocs"],argTypes:{modelValue:{control:"text",description:"The value of the text input (for v-model)."}}},n={render:e=>({components:{UluFormItem:r,UluFormText:t},setup(){return{args:e}},template:`
      <div class="form-theme">
        <UluFormItem layout="text" label="First Name">
          <UluFormText v-bind="args" />
        </UluFormItem>
      </div>
    `}),args:{modelValue:"John"}},m={render:e=>({components:{UluFormItem:r,UluFormText:t},setup(){return{args:e}},template:`
      <div class="form-theme">
        <UluFormItem layout="text" label="First Name" required>
          <UluFormText v-bind="args" />
        </UluFormItem>
      </div>
    `}),args:{modelValue:"John"}},o={render:e=>({components:{UluFormItem:r,UluFormText:t},setup(){return{args:e}},template:`
      <div class="form-theme">
        <UluFormItem layout="text" required>
          <template #label>
            My Custom Required Label
          </template>
          <UluFormText v-bind="args" />
        </UluFormItem>
      </div>
    `}),args:{}},a={render:e=>({components:{UluFormItem:r,UluFormText:t},setup(){return{args:e}},template:`
      <div class="form-theme">
        <UluFormItem layout="text" label="First Name" labelHidden>
          <UluFormText v-bind="args" />
        </UluFormItem>
      </div>
    `}),args:{modelValue:"John"}},l={render:e=>({components:{UluFormItem:r,UluFormText:t},setup(){const s=u("Initial Text");return{args:e,textValue:s}},template:`
      <div class="form-theme">
        <UluFormItem layout="text" label="My Text Input">
          <UluFormText v-model="textValue" />
        </UluFormItem>
        <p style="margin-top: 1rem;">Current value: {{ textValue }}</p>
      </div>
    `}),args:{}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
        <UluFormItem layout="text" label="First Name">
          <UluFormText v-bind="args" />
        </UluFormItem>
      </div>
    \`
  }),
  args: {
    modelValue: 'John'
  }
}`,...n.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
        <UluFormItem layout="text" label="First Name" required>
          <UluFormText v-bind="args" />
        </UluFormItem>
      </div>
    \`
  }),
  args: {
    modelValue: 'John'
  }
}`,...m.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
        <UluFormItem layout="text" required>
          <template #label>
            My Custom Required Label
          </template>
          <UluFormText v-bind="args" />
        </UluFormItem>
      </div>
    \`
  }),
  args: {}
}`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
        <UluFormItem layout="text" label="First Name" labelHidden>
          <UluFormText v-bind="args" />
        </UluFormItem>
      </div>
    \`
  }),
  args: {
    modelValue: 'John'
  }
}`,...a.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
        <UluFormItem layout="text" label="My Text Input">
          <UluFormText v-model="textValue" />
        </UluFormItem>
        <p style="margin-top: 1rem;">Current value: {{ textValue }}</p>
      </div>
    \`
  }),
  args: {}
}`,...l.parameters?.docs?.source}}};const g=["Default","Required","CustomRequiredLabel","LabelHidden","VModel"];export{o as CustomRequiredLabel,n as Default,a as LabelHidden,m as Required,l as VModel,g as __namedExportsOrder,x as default};
