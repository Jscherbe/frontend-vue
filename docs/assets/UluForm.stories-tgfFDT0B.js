import{A as n,U as c,B as m,C as u,D as i}from"./iframe-CBR87ZgS.js";import"./preload-helper-BJwshlQW.js";const g={component:n,tags:["autodocs"],argTypes:{element:{control:"text"},fullWidth:{control:"boolean"},fullWidthSelect:{control:"boolean"},hideLabels:{control:"boolean"},actionsRight:{control:"boolean"}}},e=l=>({components:{UluForm:n,UluFormItem:i,UluFormText:u,UluFormActions:m,UluButton:c},setup(){return{args:l}},template:`
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
  `}),r={render:e,args:{}},t={render:e,args:{element:"div"}},o={render:e,args:{fullWidth:!0}},s={render:e,args:{hideLabels:!0}},a={render:e,args:{actionsRight:!0}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render,
  args: {}
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render,
  args: {
    element: 'div'
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render,
  args: {
    fullWidth: true
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render,
  args: {
    hideLabels: true
  }
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render,
  args: {
    actionsRight: true
  }
}`,...a.parameters?.docs?.source}}};const U=["Default","AsDiv","FullWidth","HideLabels","ActionsRight"];export{a as ActionsRight,t as AsDiv,r as Default,o as FullWidth,s as HideLabels,U as __namedExportsOrder,g as default};
