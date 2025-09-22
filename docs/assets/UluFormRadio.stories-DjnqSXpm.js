import{_ as t}from"./UluFormRadio-ChdXJ2yX.js";import{_ as a}from"./UluFormItem-C8lTwFi_.js";import{P as m}from"./iframe---2PRveq.js";import"./preload-helper-BJwshlQW.js";const i={component:t,tags:["autodocs"],argTypes:{label:{control:"text"},modelValue:{control:"text"},value:{control:"text"},name:{control:"text"},required:{control:"boolean"}}},e={render:l=>({components:{UluFormItem:a,UluFormRadio:t},setup(){const r=m("option2");return{args:l,selectedValue:r}},template:`
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
}`,...o.parameters?.docs?.source}}};const p=["Default","Required"];export{e as Default,o as Required,p as __namedExportsOrder,i as default};
