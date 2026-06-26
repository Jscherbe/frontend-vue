import{_ as r}from"./UluFormTextarea-_744Xapl.js";import{_ as a}from"./UluFormItem-D9ZfZxlx.js";import{h as u}from"./iframe-COOYQK8d.js";import"./UluFormLabel-DjLi4RTB.js";import"./UluFormRequiredChar-uaoU9WCC.js";import"./preload-helper-BJwshlQW.js";const U={component:r,tags:["autodocs"],argTypes:{modelValue:{control:"text",description:"The value of the textarea (for v-model)."}}},t={render:e=>({components:{UluFormItem:a,UluFormTextarea:r},setup(){return{args:e}},template:`
      <div class="form-theme">
        <UluFormItem layout="textarea" label="Your Message">
          <UluFormTextarea v-bind="args" />
        </UluFormItem>
      </div>
    `}),args:{modelValue:"This is a message in a textarea."}},n={render:e=>({components:{UluFormItem:a,UluFormTextarea:r},setup(){return{args:e}},template:`
      <div class="form-theme">
        <UluFormItem layout="textarea" label="Your Message" required>
          <UluFormTextarea v-bind="args" />
        </UluFormItem>
      </div>
    `}),args:{modelValue:"This is a message in a textarea."}},m={render:e=>({components:{UluFormItem:a,UluFormTextarea:r},setup(){return{args:e}},template:`
      <div class="form-theme">
        <UluFormItem layout="textarea" required>
          <template #label>
            My Custom Required Label
          </template>
          <UluFormTextarea v-bind="args" />
        </UluFormItem>
      </div>
    `}),args:{}},o={render:e=>({components:{UluFormItem:a,UluFormTextarea:r},setup(){return{args:e}},template:`
      <div class="form-theme">
        <UluFormItem layout="textarea" label="Your Message" labelHidden>
          <UluFormTextarea v-bind="args" />
        </UluFormItem>
      </div>
    `}),args:{modelValue:"This is a message in a textarea."}},s={render:e=>({components:{UluFormItem:a,UluFormTextarea:r},setup(){const l=u("Initial Text");return{args:e,textValue:l}},template:`
      <div class="form-theme">
        <UluFormItem layout="textarea" label="My Textarea">
          <UluFormTextarea v-model="textValue" />
        </UluFormItem>
        <p style="margin-top: 1rem;">Current value: {{ textValue }}</p>
      </div>
    `}),args:{}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
        <UluFormItem layout="textarea" label="Your Message">
          <UluFormTextarea v-bind="args" />
        </UluFormItem>
      </div>
    \`
  }),
  args: {
    modelValue: 'This is a message in a textarea.'
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
        <UluFormItem layout="textarea" label="Your Message" required>
          <UluFormTextarea v-bind="args" />
        </UluFormItem>
      </div>
    \`
  }),
  args: {
    modelValue: 'This is a message in a textarea.'
  }
}`,...n.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
        <UluFormItem layout="textarea" required>
          <template #label>
            My Custom Required Label
          </template>
          <UluFormTextarea v-bind="args" />
        </UluFormItem>
      </div>
    \`
  }),
  args: {}
}`,...m.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
        <UluFormItem layout="textarea" label="Your Message" labelHidden>
          <UluFormTextarea v-bind="args" />
        </UluFormItem>
      </div>
    \`
  }),
  args: {
    modelValue: 'This is a message in a textarea.'
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
        <UluFormItem layout="textarea" label="My Textarea">
          <UluFormTextarea v-model="textValue" />
        </UluFormItem>
        <p style="margin-top: 1rem;">Current value: {{ textValue }}</p>
      </div>
    \`
  }),
  args: {}
}`,...s.parameters?.docs?.source}}};const g=["Default","Required","CustomRequiredLabel","LabelHidden","VModel"];export{m as CustomRequiredLabel,t as Default,o as LabelHidden,n as Required,s as VModel,g as __namedExportsOrder,U as default};
