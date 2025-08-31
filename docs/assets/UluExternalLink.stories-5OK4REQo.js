import{q as s}from"./iframe-DuX-PKOB.js";import"./preload-helper-BJwshlQW.js";const c={component:s,tags:["autodocs"],args:{href:"https://example.com",text:"Default link text (from prop)"},render:r=>({components:{UluExternalLink:s},setup(){return{args:r}},template:'<UluExternalLink v-bind="args"/>'}),argTypes:{text:{control:"text"},href:{control:"text"},target:{control:"text"},icon:{control:"text"}}},t={name:"Using Text Prop",args:{text:"This is an external link."}},n={args:{},render:r=>({components:{UluExternalLink:s},setup(){return{args:r}},template:'<UluExternalLink v-bind="args">This is <strong>slot</strong> content.</UluExternalLink>'})},e={args:{text:"External link with a custom icon",icon:"fas fa-circle-info"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: 'Using Text Prop',
  args: {
    text: 'This is an external link.'
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {},
  render: args => ({
    components: {
      UluExternalLink
    },
    setup() {
      return {
        args
      };
    },
    template: \`<UluExternalLink v-bind="args">This is <strong>slot</strong> content.</UluExternalLink>\`
  })
}`,...n.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    text: 'External link with a custom icon',
    icon: 'fas fa-circle-info'
  }
}`,...e.parameters?.docs?.source}}};const i=["Default","UsingSlot","CustomIcon"];export{e as CustomIcon,t as Default,n as UsingSlot,i as __namedExportsOrder,c as default};
