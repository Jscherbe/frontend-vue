import{_ as t}from"./UluFormRadio-D1k_FAoO.js";import{_ as m}from"./UluFormItem-DW5hXPMH.js";import{ref as a}from"vue";import"./iframe-B-E22KK1.js";import"./preload-helper-BJwshlQW.js";import"vue-router";import"@floating-ui/vue";import"@ulu/utils/templating.js";import"@ulu/utils/browser/dom.js";import"@ulu/frontend";import"./UluFormRequiredChar-BTQ7f0nP.js";const I={component:t,tags:["autodocs"],argTypes:{label:{control:"text"},modelValue:{control:"text"},value:{control:"text"},name:{control:"text"},required:{control:"boolean"}}},e={render:r=>({components:{UluFormItem:m,UluFormRadio:t},setup(){const l=a("option2");return{args:r,selectedValue:l}},template:`
      <div class="form-theme">
        <UluFormItem>
          <UluFormRadio name="radio-group" label="Option 1" value="option1" v-model="selectedValue" />
        </UluFormItem>
        <UluFormItem>
          <UluFormRadio name="radio-group" label="Option 2" value="option2" v-model="selectedValue" />
        </UluFormItem>
        <UluFormItem>
          <UluFormRadio name="radio-group" label="Option 3" value="option3" v-model="selectedValue" />
        </UluFormItem>
        <p style="margin-top: 1rem;">Selected value: {{ selectedValue }}</p>
      </div>
    `}),args:{}},o={render:r=>({components:{UluFormItem:m,UluFormRadio:t},setup(){const l=a(null);return{args:r,selectedValue:l}},template:`
      <div class="form-theme">
        <UluFormItem>
          <UluFormRadio name="radio-group-req" label="Option 1" value="option1" v-model="selectedValue" required />
        </UluFormItem>
        <UluFormItem>
          <UluFormRadio name="radio-group-req" label="Option 2" value="option2" v-model="selectedValue" required />
        </UluFormItem>
        <UluFormItem>
          <UluFormRadio name="radio-group-req" label="Option 3" value="option3" v-model="selectedValue" required />
        </UluFormItem>
        <p style="margin-top: 1rem;">Selected value: {{ selectedValue }}</p>
      </div>
    `}),args:{}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      UluFormItem,
      UluFormRadio
    },
    setup() {
      const selectedValue = ref('option2');
      return {
        args,
        selectedValue
      };
    },
    template: \`
      <div class="form-theme">
        <UluFormItem>
          <UluFormRadio name="radio-group" label="Option 1" value="option1" v-model="selectedValue" />
        </UluFormItem>
        <UluFormItem>
          <UluFormRadio name="radio-group" label="Option 2" value="option2" v-model="selectedValue" />
        </UluFormItem>
        <UluFormItem>
          <UluFormRadio name="radio-group" label="Option 3" value="option3" v-model="selectedValue" />
        </UluFormItem>
        <p style="margin-top: 1rem;">Selected value: {{ selectedValue }}</p>
      </div>
    \`
  }),
  args: {}
}`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      UluFormItem,
      UluFormRadio
    },
    setup() {
      const selectedValue = ref(null);
      return {
        args,
        selectedValue
      };
    },
    template: \`
      <div class="form-theme">
        <UluFormItem>
          <UluFormRadio name="radio-group-req" label="Option 1" value="option1" v-model="selectedValue" required />
        </UluFormItem>
        <UluFormItem>
          <UluFormRadio name="radio-group-req" label="Option 2" value="option2" v-model="selectedValue" required />
        </UluFormItem>
        <UluFormItem>
          <UluFormRadio name="radio-group-req" label="Option 3" value="option3" v-model="selectedValue" required />
        </UluFormItem>
        <p style="margin-top: 1rem;">Selected value: {{ selectedValue }}</p>
      </div>
    \`
  }),
  args: {}
}`,...o.parameters?.docs?.source}}};const V=["Default","Required"];export{e as Default,o as Required,V as __namedExportsOrder,I as default};
