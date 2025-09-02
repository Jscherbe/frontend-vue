import{_ as n}from"./iframe-DSsytvcb.js";import"./preload-helper-BJwshlQW.js";const a={component:n,tags:["autodocs"]},r=t=>({components:{UluAccordion:n},setup(){return{args:t}},template:'<UluAccordion v-bind="args">This is the content of the accordion</UluAccordion>'}),e=r.bind({});e.args={summaryText:"Toggle me!"};const o=r.bind({});o.args={summaryText:"I'm already open!",defaultOpen:!0};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`args => ({
  components: {
    UluAccordion
  },
  setup() {
    return {
      args
    };
  },
  template: \`<UluAccordion v-bind="args">This is the content of the accordion</UluAccordion>\`
})`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`args => ({
  components: {
    UluAccordion
  },
  setup() {
    return {
      args
    };
  },
  template: \`<UluAccordion v-bind="args">This is the content of the accordion</UluAccordion>\`
})`,...o.parameters?.docs?.source}}};const i=["Default","OpenByDefault"];export{e as Default,o as OpenByDefault,i as __namedExportsOrder,a as default};
