import{_ as n}from"./UluForm-Ba6ncawQ.js";import{_ as l}from"./UluFormItem-1cCINkkw.js";import{_ as c}from"./UluFormText-yzLR0VqQ.js";import{_ as u}from"./UluFormActions-Cp64TShC.js";import{_ as i}from"./UluButton-CkjLGlP3.js";import"./iframe-BSlosvhq.js";import"./preload-helper-BJwshlQW.js";import"./UluFormLabel-HKy40LiN.js";import"./UluFormRequiredChar-Bp7Hrv_x.js";import"./UluAction-CXGbhDrd.js";const A={component:n,tags:["autodocs"],argTypes:{element:{control:"text"},fullWidth:{control:"boolean"},fullWidthSelect:{control:"boolean"},hideLabels:{control:"boolean"},actionsRight:{control:"boolean"}}},e=m=>({components:{UluForm:n,UluFormItem:l,UluFormText:c,UluFormActions:u,UluButton:i},setup(){return{args:m}},template:`
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
  `}),r={render:e,args:{}},o={render:e,args:{element:"div"}},t={render:e,args:{fullWidth:!0}},s={render:e,args:{hideLabels:!0}},a={render:e,args:{actionsRight:!0}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render,
  args: {}
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};const S=["Default","AsDiv","FullWidth","HideLabels","ActionsRight"];export{a as ActionsRight,o as AsDiv,r as Default,t as FullWidth,s as HideLabels,S as __namedExportsOrder,A as default};
