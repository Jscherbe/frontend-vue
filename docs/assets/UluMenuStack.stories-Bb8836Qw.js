import{_ as e}from"./UluMenuStack-Co7qqCqZ.js";import"./iframe-B_vWY6zZ.js";import"./preload-helper-BJwshlQW.js";import"./UluMenu-CX3fUd8Q.js";import"./UluAction-CYP7d1sx.js";import"./UluTag-Cpt6r8Iq.js";const m={component:e,tags:["autodocs"]},a=o=>({components:{UluMenuStack:e},setup(){return{args:o}},template:'<UluMenuStack v-bind="args"/>'}),t=a.bind({});t.args={items:[{title:"Example Link (tag)",href:"http://www.google.com",tag:{text:"3"}},{title:"Router (icon)",to:"/",icon:"fas fa-plus"},{title:"Example Link (tooltip)",href:"http://www.google.com",tooltip:"Hello World!"}]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`args => ({
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
