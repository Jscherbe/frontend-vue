import{v as o}from"./iframe-CpwZzjQD.js";import"./preload-helper-BJwshlQW.js";const i={component:o,tags:["autodocs"]},r={args:{}},e={args:{short:!0}},s={args:{large:!0}},a={args:{light:!0}},t={args:{margin:"large"},render:c=>({components:{UluRule:o},setup(){return{args:c}},template:`
      <div>
        <p>This is content above the rule</p>
        <UluRule v-bind="args" />
        <p>This is content below the rule</p>
      </div>
    `})},n={args:{semantic:!0}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...r.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    short: true
  }
}`,...e.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    large: true
  }
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    light: true
  }
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    margin: 'large'
  },
  render: args => ({
    components: {
      UluRule
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div>
        <p>This is content above the rule</p>
        <UluRule v-bind="args" />
        <p>This is content below the rule</p>
      </div>
    \`
  })
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    semantic: true
  }
}`,...n.parameters?.docs?.source}}};const m=["Default","Short","Large","Light","Margin","Semantic"];export{r as Default,s as Large,a as Light,t as Margin,n as Semantic,e as Short,m as __namedExportsOrder,i as default};
