import{an as d,s as b}from"./iframe--wWzAahP.js";import"./preload-helper-BJwshlQW.js";const P={component:d,tags:["autodocs"],argTypes:{amount:{control:{type:"range",min:0,max:100,step:1}},total:{control:{type:"number"}},deficit:{control:{type:"range",min:0,max:100,step:1}},labelElement:{control:"text"},noValues:{control:"boolean"},amountInHeader:{control:"boolean"},formatValue:{table:{disable:!0}},classes:{table:{disable:!0}}}},e={args:{label:"Default Progress",amount:50,total:100}},r={args:{...e.args,label:"Progress with Deficit",amount:60,deficit:20}},s={args:{...e.args,label:"Small Progress",amount:75,small:!0}},t={args:{...e.args,label:"Positive Style",amount:80,positive:!0}},n={args:{...e.args,label:"Negative Style",amount:25,negative:!0}},o={render:a=>({components:{UluProgressBar:d,UluIcon:b},setup(){return{args:a}},template:`
      <UluProgressBar v-bind="args">
        <template #icon>
          <UluIcon icon="type:success" />
        </template>
      </UluProgressBar>
    `}),args:{...t.args,label:"Completed with Icon",amount:100}},l={args:{label:"Loading...",amount:65,loader:!0}},u={args:{label:"Indeterminate Loading",loader:!0,indeterminate:!0}},m={args:{...e.args,label:"Amount in Header",amount:65,amountInHeader:!0}},c={args:{...e.args,label:"No Values Displayed",amount:40,noValues:!0}},i={args:{...r.args,label:"Formatted Values (w/ type)",amount:85,deficit:5,formatValue:(a,v)=>v==="total"?`out of ${a}`:`${a}%`}},p={args:{...e.args,label:"Custom Label Element (h3)",labelElement:"h3"}},g={render:a=>({components:{UluProgressBar:d,UluIcon:b},setup(){return{args:a}},template:`
      <UluProgressBar v-bind="args">
        <template #valueAmount="{ value }">
          <strong>{{ value }}</strong> <UluIcon icon="type:image" />
        </template>
        <template #valueDeficit="{ value }">
          <span style="color: red;">-{{ value }}</span>
        </template>
        <template #valueTotal="{ value }">
          <em>{{ value }} Total</em>
        </template>
      </UluProgressBar>
    `}),args:{...r.args,label:"With Custom Value Slots"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Default Progress',
    amount: 50,
    total: 100
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    label: 'Progress with Deficit',
    amount: 60,
    deficit: 20
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    label: 'Small Progress',
    amount: 75,
    small: true
  }
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    label: 'Positive Style',
    amount: 80,
    positive: true
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    label: 'Negative Style',
    amount: 25,
    negative: true
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
          <UluIcon icon="type:success" />
        </template>
      </UluProgressBar>
    \`
  }),
  args: {
    ...Positive.args,
    label: 'Completed with Icon',
    amount: 100
  }
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Loading...',
    amount: 65,
    loader: true
  }
}`,...l.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Indeterminate Loading',
    loader: true,
    indeterminate: true
  }
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    label: 'Amount in Header',
    amount: 65,
    amountInHeader: true
  }
}`,...m.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    label: 'No Values Displayed',
    amount: 40,
    noValues: true
  }
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    ...WithDeficit.args,
    label: 'Formatted Values (w/ type)',
    amount: 85,
    deficit: 5,
    formatValue: (value, type) => {
      if (type === 'total') return \`out of \${value}\`;
      return \`\${value}%\`;
    }
  }
}`,...i.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    label: 'Custom Label Element (h3)',
    labelElement: 'h3'
  }
}`,...p.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
        <template #valueAmount="{ value }">
          <strong>{{ value }}</strong> <UluIcon icon="type:image" />
        </template>
        <template #valueDeficit="{ value }">
          <span style="color: red;">-{{ value }}</span>
        </template>
        <template #valueTotal="{ value }">
          <em>{{ value }} Total</em>
        </template>
      </UluProgressBar>
    \`
  }),
  args: {
    ...WithDeficit.args,
    label: 'With Custom Value Slots'
  }
}`,...g.parameters?.docs?.source}}};const D=["Default","WithDeficit","Small","Positive","Negative","WithIcon","Loader","Indeterminate","AmountInHeader","NoValues","FormattedValues","CustomLabel","CustomValueSlots"];export{m as AmountInHeader,p as CustomLabel,g as CustomValueSlots,e as Default,i as FormattedValues,u as Indeterminate,l as Loader,n as Negative,c as NoValues,t as Positive,s as Small,r as WithDeficit,o as WithIcon,D as __namedExportsOrder,P as default};
