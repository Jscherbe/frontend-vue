import{_ as m}from"./UluFormItemsInline-CSADx060.js";import{_ as r}from"./UluFormItem-DW5hXPMH.js";import{_ as t}from"./UluFormCheckbox-C8djU9iq.js";import"vue";import"./iframe-DYOmpgae.js";import"./preload-helper-BJwshlQW.js";import"vue-router";import"@floating-ui/vue";import"@ulu/utils/templating.js";import"@ulu/utils/browser/dom.js";import"@ulu/frontend";import"./UluFormRequiredChar-BTQ7f0nP.js";const b={component:m,tags:["autodocs"]},e={render:o=>({components:{UluFormItemsInline:m,UluFormItem:r,UluFormCheckbox:t},setup(){return{args:o}},template:`
      <div class="form-theme">
        <UluFormItemsInline>
          <UluFormItem>
            <UluFormCheckbox label="Option 1" :modelValue="true" />
          </UluFormItem>
          <UluFormItem>
            <UluFormCheckbox label="Option 2" :modelValue="false" />
          </UluFormItem>
          <UluFormItem>
            <UluFormCheckbox label="Option 3" :modelValue="true" />
          </UluFormItem>
        </UluFormItemsInline>
      </div>
    `})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      UluFormItemsInline,
      UluFormItem,
      UluFormCheckbox
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div class="form-theme">
        <UluFormItemsInline>
          <UluFormItem>
            <UluFormCheckbox label="Option 1" :modelValue="true" />
          </UluFormItem>
          <UluFormItem>
            <UluFormCheckbox label="Option 2" :modelValue="false" />
          </UluFormItem>
          <UluFormItem>
            <UluFormCheckbox label="Option 3" :modelValue="true" />
          </UluFormItem>
        </UluFormItemsInline>
      </div>
    \`
  })
}`,...e.parameters?.docs?.source}}};const f=["Default"];export{e as Default,f as __namedExportsOrder,b as default};
