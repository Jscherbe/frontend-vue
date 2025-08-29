import{a as o,b as r}from"./iframe-Dw5YOoOk.js";import"./preload-helper-BJwshlQW.js";const l={title:"Components/Collapsible/UluDropdown",component:r,args:{items:[{title:"View Profile",to:"/"},{title:"Account Settings",to:"/example",classes:{item:"menu-stack__item--separator-before"}},{title:"Sign Out",to:"/sign-out"}],triggerClass:"button--primary"},render:s=>({components:{UluDropdown:r,UluButton:o},setup(){return{args:s}},template:`
      <div style="display: flex; justify-content: center; padding: 4rem;">
        <UluDropdown v-bind="args">
          <template #default="{ isOpen }">
            <UluButton :class="args.triggerClass">
              <span>My Account</span>
              <span :style="{ display: 'inline-block', transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }">▾</span>
            </UluButton>
          </template>
        </UluDropdown>
      </div>
    `}),argTypes:{items:{control:"object"},triggerClass:{control:"text"}}},t={},e={args:{triggerClass:"button--secondary"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    triggerClass: 'button--secondary'
  }
}`,...e.parameters?.docs?.source}}};const i=["Default","SecondaryButton"];export{t as Default,e as SecondaryButton,i as __namedExportsOrder,l as default};
