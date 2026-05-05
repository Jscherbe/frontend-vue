import{_ as a}from"./UluFormRadio-B7qKgCjF.js";import{_ as t}from"./UluFormItem-BULwJFkN.js";import{q as m}from"./iframe-ssSLPBZB.js";import"./props-DEaRQ31f.js";import"./UluFormLabel-Bg4A2W7O.js";import"./UluFormRequiredChar-W2tR-32s.js";import"./preload-helper-BJwshlQW.js";const F={component:a,tags:["autodocs"],argTypes:{modelValue:{control:"text"},value:{control:"text"},name:{control:"text"}}},e={render:l=>({components:{UluFormItem:t,UluFormRadio:a},setup(){const r=m("option2");return{args:l,selectedValue:r}},template:`
      <div class="form-theme">
        <UluFormItem layout="radio" label="Option 1">
          <UluFormRadio name="radio-group" value="option1" v-model="selectedValue" />
        </UluFormItem>
        <UluFormItem layout="radio" label="Option 2">
          <UluFormRadio name="radio-group" value="option2" v-model="selectedValue" />
        </UluFormItem>
        <UluFormItem layout="radio" label="Option 3">
          <UluFormRadio name="radio-group" value="option3" v-model="selectedValue" />
        </UluFormItem>
        <p style="margin-top: 1rem;">Selected value: {{ selectedValue }}</p>
      </div>
    `}),args:{}},o={render:l=>({components:{UluFormItem:t,UluFormRadio:a},setup(){const r=m(null);return{args:l,selectedValue:r}},template:`
      <div class="form-theme">
        <UluFormItem layout="radio" label="Option 1" required>
          <UluFormRadio name="radio-group-req" value="option1" v-model="selectedValue" />
        </UluFormItem>
        <UluFormItem layout="radio" label="Option 2" required>
          <UluFormRadio name="radio-group-req" value="option2" v-model="selectedValue" />
        </UluFormItem>
        <UluFormItem layout="radio" label="Option 3" required>
          <UluFormRadio name="radio-group-req" value="option3" v-model="selectedValue" />
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
        <UluFormItem layout="radio" label="Option 1">
          <UluFormRadio name="radio-group" value="option1" v-model="selectedValue" />
        </UluFormItem>
        <UluFormItem layout="radio" label="Option 2">
          <UluFormRadio name="radio-group" value="option2" v-model="selectedValue" />
        </UluFormItem>
        <UluFormItem layout="radio" label="Option 3">
          <UluFormRadio name="radio-group" value="option3" v-model="selectedValue" />
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
        <UluFormItem layout="radio" label="Option 1" required>
          <UluFormRadio name="radio-group-req" value="option1" v-model="selectedValue" />
        </UluFormItem>
        <UluFormItem layout="radio" label="Option 2" required>
          <UluFormRadio name="radio-group-req" value="option2" v-model="selectedValue" />
        </UluFormItem>
        <UluFormItem layout="radio" label="Option 3" required>
          <UluFormRadio name="radio-group-req" value="option3" v-model="selectedValue" />
        </UluFormItem>
        <p style="margin-top: 1rem;">Selected value: {{ selectedValue }}</p>
      </div>
    \`
  }),
  args: {}
}`,...o.parameters?.docs?.source}}};const U=["Default","Required"];export{e as Default,o as Required,U as __namedExportsOrder,F as default};
