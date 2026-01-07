import{_ as s}from"./UluFormTextarea-Bg7MJ2dZ.js";import{_ as l}from"./UluFormItem--dTSgxla.js";import{l as u}from"./iframe-Dmbn_XAG.js";import"./UluFormRequiredChar-EC8L9s2V.js";import"./preload-helper-BJwshlQW.js";const g={component:s,tags:["autodocs"],argTypes:{label:{control:"text",description:"The label for the textarea."},modelValue:{control:"text",description:"The value of the textarea (for v-model)."},labelHidden:{control:"boolean",description:"If true, the label will be visually hidden."},required:{control:"boolean",description:"If true, the field will be required."}}},e={render:r=>({components:{UluFormItem:l,UluFormTextarea:s},setup(){return{args:r}},template:`
      <div class="form-theme">
        <UluFormItem textarea>
          <UluFormTextarea v-bind="args" />
        </UluFormItem>
      </div>
    `}),args:{label:"Your Message",modelValue:"This is a message in a textarea."}},a={...e,args:{...e.args,required:!0}},t={render:r=>({components:{UluFormItem:l,UluFormTextarea:s},setup(){return{args:r}},template:`
      <div class="form-theme">
        <UluFormItem textarea>
          <UluFormTextarea v-bind="args">
            <template #label>
              My Custom Required Label
            </template>
          </UluFormTextarea>
        </UluFormItem>
      </div>
    `}),args:{required:!0}},n={...e,args:{...e.args,label:"Your Message",labelHidden:!0}},o={render:r=>({components:{UluFormItem:l,UluFormTextarea:s},setup(){const m=u("Initial Text");return{args:r,textValue:m}},template:`
      <div class="form-theme">
        <UluFormItem textarea>
          <UluFormTextarea label="My Textarea" v-model="textValue" />
        </UluFormItem>
        <p style="margin-top: 1rem;">Current value: {{ textValue }}</p>
      </div>
    `}),args:{}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      UluFormItem,
      UluFormTextarea
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div class="form-theme">
        <UluFormItem textarea>
          <UluFormTextarea v-bind="args" />
        </UluFormItem>
      </div>
    \`
  }),
  args: {
    label: 'Your Message',
    modelValue: 'This is a message in a textarea.'
  }
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  ...Default,
  args: {
    ...Default.args,
    required: true
  }
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      UluFormItem,
      UluFormTextarea
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div class="form-theme">
        <UluFormItem textarea>
          <UluFormTextarea v-bind="args">
            <template #label>
              My Custom Required Label
            </template>
          </UluFormTextarea>
        </UluFormItem>
      </div>
    \`
  }),
  args: {
    required: true
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  ...Default,
  args: {
    ...Default.args,
    label: 'Your Message',
    labelHidden: true
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      UluFormItem,
      UluFormTextarea
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
        <UluFormItem textarea>
          <UluFormTextarea label="My Textarea" v-model="textValue" />
        </UluFormItem>
        <p style="margin-top: 1rem;">Current value: {{ textValue }}</p>
      </div>
    \`
  }),
  args: {}
}`,...o.parameters?.docs?.source}}};const F=["Default","Required","CustomRequiredLabel","LabelHidden","VModel"];export{t as CustomRequiredLabel,e as Default,n as LabelHidden,a as Required,o as VModel,F as __namedExportsOrder,g as default};
