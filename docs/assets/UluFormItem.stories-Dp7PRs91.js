import{_ as s}from"./UluFormItem-fdOIZjG_.js";import{_ as i}from"./UluFormText-dULQHinf.js";import"./iframe-dqyhXnFM.js";import"./preload-helper-BJwshlQW.js";import"./UluFormLabel-1_5y90tg.js";import"./UluFormRequiredChar-CvX5aISe.js";const g={component:s,tags:["autodocs"],argTypes:{type:{control:"select",options:["text","textarea","select","checkbox","radio","file","color","date","range","tel","password","email","number","search","url","time","month","week","datetime-local"]},label:{control:"text"},description:{control:"text"},errorMessage:{control:"text"},warningMessage:{control:"text"},required:{control:"boolean"},error:{control:"boolean"},warning:{control:"boolean"},alignTop:{control:"boolean"}}},o=n=>({components:{UluFormItem:s,UluFormText:i},setup(){return{args:n}},template:`
    <div class="form-theme">
      <UluFormItem v-bind="args">
        <UluFormText modelValue="John" />
      </UluFormItem>
    </div>
  `}),e={render:o,args:{type:"text",label:"First Name"}},r={render:o,args:{type:"text",label:"First Name",description:"Please enter your given name."}},t={render:o,args:{type:"text",label:"First Name",error:!0,errorMessage:"This field is required."}},a={render:o,args:{type:"text",label:"First Name",warning:!0,warningMessage:"This name seems unusual."}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render,
  args: {
    type: 'text',
    label: 'First Name'
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render,
  args: {
    type: 'text',
    label: 'First Name',
    description: 'Please enter your given name.'
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render,
  args: {
    type: 'text',
    label: 'First Name',
    error: true,
    errorMessage: 'This field is required.'
  }
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render,
  args: {
    type: 'text',
    label: 'First Name',
    warning: true,
    warningMessage: 'This name seems unusual.'
  }
}`,...a.parameters?.docs?.source}}};const x=["Default","WithDescription","ErrorState","WarningState"];export{e as Default,t as ErrorState,a as WarningState,r as WithDescription,x as __namedExportsOrder,g as default};
