import{B as e}from"./iframe-BbuohH2w.js";import"./preload-helper-BJwshlQW.js";const o={component:e,tags:["autodocs"],parameters:{docs:{description:{component:`
The "UluMenu" component is a versatile navigation component that can be used for any traditional menu list (with the following structure, ul > li > a > span[icon/text]). 

This mockup is adding classes like nav-strip component but any classes in traditional menu structure will work. This is used in UluNavStrip, UluMenuStack and other components that render menu. They all use the same API for the items array.

Depending on the options passed per item the menu will render the links using either: 

- item.href = "a" (link)
- item.click = "button"
- item.to = "router-link"
`}}}},i=n=>({components:{UluMenu:e},setup(){return{args:n}},template:`
<div class="nav-strip nav-strip--rule">
  <UluMenu v-bind="args"/>
</div>
  `}),t=i.bind({});t.args={classes:{list:"nav-strip__list",item:"nav-strip__item",link:"nav-strip__link",linkIcon:"margin-right-small-x",linkExactActive:"is-active"},items:[{title:"Example Link (tag)",href:"http://www.google.com",tag:{text:"3"}},{title:"Router (icon)",to:"/",icon:"fas fa-plus"},{title:"Example Link (tooltip)",href:"http://www.google.com",tooltip:"Hello World!"}]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`args => ({
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
})`,...t.parameters?.docs?.source}}};const r=["Default"];export{t as Default,r as __namedExportsOrder,o as default};
