import{G as e}from"./iframe-BphDkRnT.js";import"./preload-helper-BJwshlQW.js";const n={component:e,tags:["autodocs"]},r=o=>({components:{UluNavStrip:e},setup(){return{args:o}},template:'<UluNavStrip v-bind="args"/>'}),t=r.bind({});t.args={items:[{title:"Example Link (tag)",href:"http://www.google.com",tag:{text:"3"}},{title:"Router (icon)",to:"/",icon:"fas fa-plus"},{title:"Example Link (tooltip)",href:"http://www.google.com",tooltip:"Hello World!"}]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`args => ({
  components: {
    UluNavStrip
  },
  setup() {
    return {
      args
    };
  },
  template: \`<UluNavStrip v-bind="args"/>\`
})`,...t.parameters?.docs?.source}}};const p=["Default"];export{t as Default,p as __namedExportsOrder,n as default};
