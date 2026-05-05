import{_ as e}from"./UluMenuStack-D8C8mDmB.js";import"./fontawesome-DyrJdE5N.js";import"./UluMenu-C7kjUCNU.js";import"./UluAction-CSWkOuPE.js";import"./iframe-DFeB4tIX.js";import"./preload-helper-BJwshlQW.js";import"./UluTag-DuGuEi6f.js";const i={component:e,tags:["autodocs"]},r=o=>({components:{UluMenuStack:e},setup(){return{args:o}},template:'<UluMenuStack v-bind="args"/>'}),t=r.bind({});t.args={items:[{title:"Example Link (tag)",href:"http://www.google.com",tag:{text:"3"}},{title:"Router (icon)",to:"/",icon:"fas fa-plus"},{title:"Example Link (tooltip)",href:"http://www.google.com",tooltip:"Hello World!"}]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`args => ({
  components: {
    UluMenuStack
  },
  setup() {
    return {
      args
    };
  },
  template: \`<UluMenuStack v-bind="args"/>\`
})`,...t.parameters?.docs?.source}}};const u=["Default"];export{t as Default,u as __namedExportsOrder,i as default};
