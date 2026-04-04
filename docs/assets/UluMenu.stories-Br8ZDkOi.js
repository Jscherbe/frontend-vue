import{_ as i}from"./UluMenu-EqhDSIuk.js";import"./iframe-CNzkW0XZ.js";import"./preload-helper-BJwshlQW.js";import"./UluAction-C6BiRPZ1.js";import"./UluTag-gagVYIsi.js";const p={component:i,tags:["autodocs"],parameters:{docs:{description:{component:`
The "UluMenu" component is a versatile navigation component that can be used for any traditional menu list (with the following structure, ul > li > a > span[icon/text]). 

This mockup is adding classes like nav-strip component but any classes in traditional menu structure will work. This is used in UluNavStrip, UluMenuStack and other components that render menu. They all use the same API for the items array.

Depending on the options passed per item the menu will render the links using either: 

- item.href = "a" (link)
- item.click = "button"
- item.to = "router-link"
`}}}},r=n=>({components:{UluMenu:i},setup(){return{args:n}},template:`
<div class="nav-strip nav-strip--rule">
  <UluMenu v-bind="args"/>
</div>
  `}),e=r.bind({});e.args={classes:{list:"nav-strip__list",item:"nav-strip__item",link:"nav-strip__link",linkIcon:"margin-right-small-x",linkExactActive:"is-active"},items:[{title:"Example Link (tag)",href:"http://www.google.com",tag:{text:"3"}},{title:"Router (icon)",to:"/",icon:"fas fa-plus"},{title:"Example Link (tooltip)",href:"http://www.google.com",tooltip:"Hello World!"}]};const t=n=>({components:{UluMenu:i},setup(){return{args:n}},template:`
    <UluMenu v-bind="args">
      <template #default="{ item }">
        <span style="color: blue;">[Link Slot]</span> {{ item.title }}
      </template>
      <template #item="{ item }">
        <div v-if="!item.children" style="margin-left: 1rem; border-left: 2px solid #ccc; padding-left: 0.5rem; font-size: 0.8em; opacity: 0.7;">
          Metadata or Actions for {{ item.title }}
        </div>
      </template>
    </UluMenu>
  `});t.args={items:[{title:"Parent with Children",href:"#",children:[{title:"Sub Child A",href:"#"},{title:"Sub Child B",href:"#"}]},{title:"Normal Item",href:"#"}]};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`args => ({
  components: {
    UluMenu
  },
  setup() {
    return {
      args
    };
  },
  template: \`
<div class="nav-strip nav-strip--rule">
  <UluMenu v-bind="args"/>
</div>
  \`
})`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`args => ({
  components: {
    UluMenu
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <UluMenu v-bind="args">
      <template #default="{ item }">
        <span style="color: blue;">[Link Slot]</span> {{ item.title }}
      </template>
      <template #item="{ item }">
        <div v-if="!item.children" style="margin-left: 1rem; border-left: 2px solid #ccc; padding-left: 0.5rem; font-size: 0.8em; opacity: 0.7;">
          Metadata or Actions for {{ item.title }}
        </div>
      </template>
    </UluMenu>
  \`
})`,...t.parameters?.docs?.source}}};const u=["Default","Slots"];export{e as Default,t as Slots,u as __namedExportsOrder,p as default};
