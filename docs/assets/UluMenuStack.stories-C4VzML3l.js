import{_ as e}from"./UluMenuStack-CO6qv3FW.js";import"./iframe-fc0isZdR.js";import"./preload-helper-BJwshlQW.js";import"./UluMenu-BQLXh5MU.js";import"./UluTag-Cz4Bxh16.js";const c={component:e,tags:["autodocs"]},a=o=>({components:{UluMenuStack:e},setup(){return{args:o}},template:'<UluMenuStack v-bind="args"/>'}),t=a.bind({});t.args={items:[{title:"Example Link (tag)",href:"http://www.google.com",tag:{text:"3"}},{title:"Router (icon)",to:"/",icon:"fas fa-plus"},{title:"Example Link (tooltip)",href:"http://www.google.com",tooltip:"Hello World!"}]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`args => ({
  components: {
    UluMenuStack
  },
  setup() {
    return {
      args
    };
  },
  template: \`<UluMenuStack v-bind="args"/>\`
})`,...t.parameters?.docs?.source}}};const m=["Default"];export{t as Default,m as __namedExportsOrder,c as default};
