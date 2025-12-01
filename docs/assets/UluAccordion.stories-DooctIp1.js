import{_ as n}from"./UluAccordion-D6ATLysB.js";import"vue";import"./iframe-DYOmpgae.js";import"./preload-helper-BJwshlQW.js";import"vue-router";import"@floating-ui/vue";import"@ulu/utils/templating.js";import"@ulu/utils/browser/dom.js";import"@ulu/frontend";import"./UluCollapsible-Diw0T5NA.js";import"@formkit/auto-animate/vue";const U={component:n,tags:["autodocs"]},r={args:{triggerText:"Toggle me!"},render:e=>({components:{UluAccordion:n},setup(){return{args:e}},template:'<UluAccordion v-bind="args">This is the content of the accordion</UluAccordion>'})},o={args:{triggerText:"I'm already open!",startOpen:!0},render:e=>({components:{UluAccordion:n},setup(){return{args:e}},template:'<UluAccordion v-bind="args">This is the content of the accordion</UluAccordion>'})},t={args:{},render:e=>({components:{UluAccordion:n},setup(){return{args:e}},template:`
      <UluAccordion v-bind="args">
        <template #trigger="{ open }">
          <em style="color: blue; font-weight: bold;">{{ open ? 'Close' : 'Open' }} Me!</em>
        </template>
        <p>This is the content inside the accordion.</p>
        <p>It can be any markup.</p>
      </UluAccordion>
    `})},s={args:{triggerText:"Custom Classes",classes:{container:"border p-2",trigger:"btn btn-primary",content:"p-4 bg-light",icon:"ms-auto"}},render:e=>({components:{UluAccordion:n},setup(){return{args:e}},template:'<UluAccordion v-bind="args">This is the content of the accordion with custom classes.</UluAccordion>'})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    triggerText: 'Toggle me!'
  },
  render: args => ({
    components: {
      UluAccordion
    },
    setup() {
      return {
        args
      };
    },
    template: \`<UluAccordion v-bind="args">This is the content of the accordion</UluAccordion>\`
  })
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    triggerText: "I'm already open!",
    startOpen: true
  },
  render: args => ({
    components: {
      UluAccordion
    },
    setup() {
      return {
        args
      };
    },
    template: \`<UluAccordion v-bind="args">This is the content of the accordion</UluAccordion>\`
  })
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {},
  render: args => ({
    components: {
      UluAccordion
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <UluAccordion v-bind="args">
        <template #trigger="{ open }">
          <em style="color: blue; font-weight: bold;">{{ open ? 'Close' : 'Open' }} Me!</em>
        </template>
        <p>This is the content inside the accordion.</p>
        <p>It can be any markup.</p>
      </UluAccordion>
    \`
  })
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    triggerText: 'Custom Classes',
    classes: {
      container: 'border p-2',
      trigger: 'btn btn-primary',
      content: 'p-4 bg-light',
      icon: 'ms-auto'
    }
  },
  render: args => ({
    components: {
      UluAccordion
    },
    setup() {
      return {
        args
      };
    },
    template: \`<UluAccordion v-bind="args">This is the content of the accordion with custom classes.</UluAccordion>\`
  })
}`,...s.parameters?.docs?.source}}};const b=["Default","OpenByDefault","CustomToggleSlot","CustomClasses"];export{s as CustomClasses,t as CustomToggleSlot,r as Default,o as OpenByDefault,b as __namedExportsOrder,U as default};
