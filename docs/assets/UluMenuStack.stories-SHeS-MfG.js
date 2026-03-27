import{_ as e}from"./UluMenuStack-BG4dTtlA.js";import"./iframe-Dn9nvJ2t.js";import"./preload-helper-BJwshlQW.js";import"./UluMenu-DPSB8xzx.js";import"./UluAction-RtlJKDrv.js";import"./UluTag-BXyje-pm.js";const m={component:e,tags:["autodocs"]},a=o=>({components:{UluMenuStack:e},setup(){return{args:o}},template:'<UluMenuStack v-bind="args"/>'}),t=a.bind({});t.args={items:[{title:"Example Link (tag)",href:"http://www.google.com",tag:{text:"3"}},{title:"Router (icon)",to:"/",icon:"fas fa-plus"},{title:"Example Link (tooltip)",href:"http://www.google.com",tooltip:"Hello World!"}]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`args => ({
  components: {
    UluMenuStack
  },
  setup() {
    return {
      args
    };
  },
  template: \`<UluMenuStack v-bind="args"/>\`
})`,...t.parameters?.docs?.source}}};const i=["Default"];export{t as Default,i as __namedExportsOrder,m as default};
