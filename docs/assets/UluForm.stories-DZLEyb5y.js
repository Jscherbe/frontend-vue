import{_ as n}from"./UluForm-mmHBGM8Y.js";import{_ as l}from"./UluFormItem-CI5VOuc6.js";import{_ as c}from"./UluFormText-Dkzpi7L7.js";import{_ as i}from"./UluFormActions-DoPbdH4N.js";import{_ as u}from"./UluButton-Dh9jaTWB.js";import"./iframe-B13WdpPx.js";import"./preload-helper-BJwshlQW.js";import"./UluFormRequiredChar-YlMQ3vFO.js";import"./UluAction-BC43p_WB.js";const x={component:n,tags:["autodocs"],argTypes:{element:{control:"text"},fullWidth:{control:"boolean"},fullWidthSelect:{control:"boolean"},hideLabels:{control:"boolean"},actionsRight:{control:"boolean"}}},e=m=>({components:{UluForm:n,UluFormItem:l,UluFormText:c,UluFormActions:i,UluButton:u},setup(){return{args:m}},template:`
    <UluForm v-bind="args">
      <UluFormItem text>
        <UluFormText label="First Name" modelValue="John" />
      </UluFormItem>
      <UluFormItem text>
        <UluFormText label="Last Name" modelValue="Doe" />
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
}`,...a.parameters?.docs?.source}}};const A=["Default","AsDiv","FullWidth","HideLabels","ActionsRight"];export{a as ActionsRight,o as AsDiv,r as Default,t as FullWidth,s as HideLabels,A as __namedExportsOrder,x as default};
