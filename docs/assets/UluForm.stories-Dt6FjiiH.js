import{_ as n}from"./UluForm-LytlbrgF.js";import{_ as l}from"./UluFormItem-DberPkcE.js";import{_ as c}from"./UluFormText-BHWc-ct1.js";import{_ as i}from"./UluFormActions-CkQZQv6v.js";import{_ as u}from"./UluButton-zu_C2qC9.js";import"./fontawesome-DyrJdE5N.js";import"./iframe-DFeB4tIX.js";import"./preload-helper-BJwshlQW.js";import"./UluFormLabel-8cDcaJJU.js";import"./UluFormRequiredChar-BIMmh2Y6.js";import"./UluAction-CSWkOuPE.js";import"./props-DEaRQ31f.js";const L={component:n,tags:["autodocs"],argTypes:{element:{control:"text"},fullWidth:{control:"boolean"},fullWidthSelect:{control:"boolean"},hideLabels:{control:"boolean"},actionsRight:{control:"boolean"}}},r=m=>({components:{UluForm:n,UluFormItem:l,UluFormText:c,UluFormActions:i,UluButton:u},setup(){return{args:m}},template:`
    <UluForm v-bind="args">
      <UluFormItem layout="text" label="First Name">
        <UluFormText modelValue="John" />
      </UluFormItem>
      <UluFormItem layout="text" label="Last Name">
        <UluFormText modelValue="Doe" />
      </UluFormItem>
      <UluFormActions>
        <UluButton primary text="Submit" />
        <UluButton text="Cancel" />
      </UluFormActions>
    </UluForm>
  `}),e={render:r,args:{}},o={render:r,args:{element:"div"}},t={render:r,args:{fullWidth:!0}},s={render:r,args:{hideLabels:!0}},a={render:r,args:{actionsRight:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render,
  args: {}
}`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render,
  args: {
    element: 'div'
  }
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render,
  args: {
    fullWidth: true
  }
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render,
  args: {
    hideLabels: true
  }
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render,
  args: {
    actionsRight: true
  }
}`,...a.parameters?.docs?.source}}};const W=["Default","AsDiv","FullWidth","HideLabels","ActionsRight"];export{a as ActionsRight,o as AsDiv,e as Default,t as FullWidth,s as HideLabels,W as __namedExportsOrder,L as default};
