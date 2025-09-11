import{an as c,s as m}from"./iframe-CLbE8-xi.js";import"./preload-helper-BJwshlQW.js";const p={component:c,tags:["autodocs"],argTypes:{amount:{control:{type:"range",min:0,max:100,step:1}},total:{control:{type:"number"}},deficit:{control:{type:"range",min:0,max:100,step:1}}}},e={args:{label:"Default Progress",amount:50,total:100}},a={args:{...e.args,label:"Progress with Deficit",amount:60,deficit:20}},s={args:{...e.args,label:"Small Progress",amount:75,small:!0}},r={args:{...e.args,label:"Positive Style",amount:80,positive:!0}},t={args:{...e.args,label:"Negative Style",amount:25,negative:!0}},n={render:i=>({components:{UluProgressBar:c,UluIcon:m},setup(){return{args:i}},template:`
      <UluProgressBar v-bind="args">
        <template #icon>
          <UluIcon icon="fas fa-check" />
        </template>
      </UluProgressBar>
    `}),args:{...r.args,label:"Completed with Icon",amount:100}},o={args:{label:"Loading...",amount:65,loader:!0}},l={args:{label:"Indeterminate Loading",loader:!0,indeterminate:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Default Progress',
    amount: 50,
    total: 100
  }
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    label: 'Progress with Deficit',
    amount: 60,
    deficit: 20
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    label: 'Small Progress',
    amount: 75,
    small: true
  }
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    label: 'Positive Style',
    amount: 80,
    positive: true
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    label: 'Negative Style',
    amount: 25,
    negative: true
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      UluProgressBar,
      UluIcon
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <UluProgressBar v-bind="args">
        <template #icon>
          <UluIcon icon="fas fa-check" />
        </template>
      </UluProgressBar>
    \`
  }),
  args: {
    ...Positive.args,
    label: 'Completed with Icon',
    amount: 100
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Loading...',
    amount: 65,
    loader: true
  }
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Indeterminate Loading',
    loader: true,
    indeterminate: true
  }
}`,...l.parameters?.docs?.source}}};const d=["Default","WithDeficit","Small","Positive","Negative","WithIcon","Loader","Indeterminate"];export{e as Default,l as Indeterminate,o as Loader,t as Negative,r as Positive,s as Small,a as WithDeficit,n as WithIcon,d as __namedExportsOrder,p as default};
