import{_ as n}from"./UluForm-BALOk79m.js";import{_ as l}from"./UluFormItem-CBAjM6TC.js";import{_ as c}from"./UluFormText-DnrXS3dJ.js";import{_ as i}from"./UluFormActions-gHgyiaSs.js";import{_ as u}from"./UluButton-BzL-0LzB.js";import"./iframe-DRLAWc5E.js";import"./preload-helper-BJwshlQW.js";import"./UluFormLabel-DS7uaVEb.js";import"./UluFormRequiredChar-Coy2_bRa.js";import"./UluAction-DfegqUgY.js";import"./props-DEaRQ31f.js";const S={component:n,tags:["autodocs"],argTypes:{element:{control:"text"},fullWidth:{control:"boolean"},fullWidthSelect:{control:"boolean"},hideLabels:{control:"boolean"},actionsRight:{control:"boolean"}}},r=m=>({components:{UluForm:n,UluFormItem:l,UluFormText:c,UluFormActions:i,UluButton:u},setup(){return{args:m}},template:`
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
}`,...a.parameters?.docs?.source}}};const L=["Default","AsDiv","FullWidth","HideLabels","ActionsRight"];export{a as ActionsRight,o as AsDiv,e as Default,t as FullWidth,s as HideLabels,L as __namedExportsOrder,S as default};
