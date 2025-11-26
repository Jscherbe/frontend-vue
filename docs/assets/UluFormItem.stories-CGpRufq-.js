import{_ as a}from"./UluFormItem-DW5hXPMH.js";import{_ as s}from"./UluFormText-B5V9YGyf.js";import"vue";import"./iframe-B-E22KK1.js";import"./preload-helper-BJwshlQW.js";import"vue-router";import"@floating-ui/vue";import"@ulu/utils/templating.js";import"@ulu/utils/browser/dom.js";import"@ulu/frontend";import"./UluFormRequiredChar-BTQ7f0nP.js";const F={component:a,tags:["autodocs"],argTypes:{error:{control:"boolean"},warning:{control:"boolean"},alignTop:{control:"boolean"},text:{control:"boolean"},file:{control:"boolean"},select:{control:"boolean"},textarea:{control:"boolean"}}},t=n=>({components:{UluFormItem:a,UluFormText:s},setup(){return{args:n}},template:`
    <div class="form-theme">
      <UluFormItem v-bind="args">
        <UluFormText label="First Name" modelValue="John" />
      </UluFormItem>
    </div>
  `}),r={render:t,args:{}},o={render:t,args:{error:!0}},e={render:t,args:{warning:!0}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render,
  args: {}
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render,
  args: {
    error: true
  }
}`,...o.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render,
  args: {
    warning: true
  }
}`,...e.parameters?.docs?.source}}};const x=["Default","Error","Warning"];export{r as Default,o as Error,e as Warning,x as __namedExportsOrder,F as default};
