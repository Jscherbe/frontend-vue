import{_ as t}from"./UluFormRadio-CChQDEbc.js";import{_ as a}from"./UluFormItem-CJSLxMsG.js";import{l as m}from"./iframe-fc0isZdR.js";import"./UluFormRequiredChar-Cj88cE9g.js";import"./preload-helper-BJwshlQW.js";const p={component:t,tags:["autodocs"],argTypes:{label:{control:"text"},modelValue:{control:"text"},value:{control:"text"},name:{control:"text"},required:{control:"boolean"}}},e={render:l=>({components:{UluFormItem:a,UluFormRadio:t},setup(){const r=m("option2");return{args:l,selectedValue:r}},template:`
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
    `}),args:{}},o={render:l=>({components:{UluFormItem:a,UluFormRadio:t},setup(){const r=m(null);return{args:l,selectedValue:r}},template:`
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
}`,...o.parameters?.docs?.source}}};const c=["Default","Required"];export{e as Default,o as Required,c as __namedExportsOrder,p as default};
