import{N as t,D as a}from"./iframe-Cutbdn0G.js";import"./preload-helper-BJwshlQW.js";const m={component:t,tags:["autodocs"],argTypes:{label:{control:"text"},modelValue:{control:"text"},options:{control:"object"},labelHidden:{control:"boolean"},required:{control:"boolean"}}},s=[{value:"option1",text:"Option 1"},{value:"option2",text:"Option 2"},{value:"option3",text:"Option 3"}],e={render:n=>({components:{UluFormItem:a,UluFormSelect:t},setup(){return{args:n}},template:`
      <div class="form-theme">
        <UluFormItem select>
          <UluFormSelect v-bind="args" />
        </UluFormItem>
      </div>
    `}),args:{label:"Select an option",options:s,modelValue:""}},o={...e,args:{...e.args,modelValue:"option2"}},r={...e,args:{...e.args,required:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      UluFormItem,
      UluFormSelect
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div class="form-theme">
        <UluFormItem select>
          <UluFormSelect v-bind="args" />
        </UluFormItem>
      </div>
    \`
  }),
  args: {
    label: 'Select an option',
    options,
    modelValue: ''
  }
}`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  ...Default,
  args: {
    ...Default.args,
    modelValue: 'option2'
  }
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  ...Default,
  args: {
    ...Default.args,
    required: true
  }
}`,...r.parameters?.docs?.source}}};const u=["Default","PreSelected","Required"];export{e as Default,o as PreSelected,r as Required,u as __namedExportsOrder,m as default};
