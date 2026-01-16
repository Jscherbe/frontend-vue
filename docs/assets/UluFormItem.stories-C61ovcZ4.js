import{_ as n}from"./UluFormItem-CgqVugiD.js";import{_ as s}from"./UluFormText-By21OxiJ.js";import"./iframe-BAOMv0fj.js";import"./preload-helper-BJwshlQW.js";import"./UluFormRequiredChar-DUDwpDtP.js";const p={component:n,tags:["autodocs"],argTypes:{error:{control:"boolean"},warning:{control:"boolean"},alignTop:{control:"boolean"},text:{control:"boolean"},file:{control:"boolean"},select:{control:"boolean"},textarea:{control:"boolean"}}},a=t=>({components:{UluFormItem:n,UluFormText:s},setup(){return{args:t}},template:`
    <div class="form-theme">
      <UluFormItem v-bind="args">
        <UluFormText label="First Name" modelValue="John" />
      </UluFormItem>
    </div>
  `}),r={render:a,args:{}},e={render:a,args:{error:!0}},o={render:a,args:{warning:!0}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render,
  args: {}
}`,...r.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render,
  args: {
    error: true
  }
}`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render,
  args: {
    warning: true
  }
}`,...o.parameters?.docs?.source}}};const d=["Default","Error","Warning"];export{r as Default,e as Error,o as Warning,d as __namedExportsOrder,p as default};
