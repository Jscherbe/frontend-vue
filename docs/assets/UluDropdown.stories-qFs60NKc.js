import{U as r,d as e}from"./iframe-CZEnXdIU.js";import"./preload-helper-BJwshlQW.js";const n={component:e,tags:["autodocs"],args:{items:[{title:"View Profile",to:"/"},{title:"Account Settings",to:"/example",separatorBefore:!0},{title:"Sign Out",to:"/sign-out"}],triggerText:"Show Dropdown"},render:o=>({components:{UluDropdown:e,UluButton:r},setup(){return{args:o}},template:`
      <div style="display: flex; justify-content: center; padding: 4rem;">
        <UluDropdown v-bind="args"/>
      </div>
    `}),argTypes:{items:{control:"object"},triggerText:{control:"text"}}},t={};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};const i=["Default"];export{t as Default,i as __namedExportsOrder,n as default};
