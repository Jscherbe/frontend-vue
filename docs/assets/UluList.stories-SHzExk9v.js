import{t as l}from"./iframe-Nq88G_pO.js";import"./preload-helper-BJwshlQW.js";const d={tags:["autodocs"],component:l,args:{items:["List Item 1","List Item 2","List Item 3","List Item 4"]},argTypes:{items:{control:"object"},classes:{control:"object"},ordered:{control:"boolean"},unordered:{control:"boolean"},lines:{control:"boolean"},compact:{control:"boolean"},forceOrdered:{control:"boolean"},start:{control:"text"},reversed:{control:"boolean"},listStyleType:{control:"text"}}},e={args:{unordered:!0}},r={args:{ordered:!0}},t={args:{ordered:!0,reversed:!0,items:["Three","Two","One"]}},s={args:{ordered:!0,start:"5",items:["Starts at 5","Item 6","Item 7"]}},o={render:a=>({components:{UluList:l},setup(){return{args:a}},template:`
      <UluList v-bind="args" lines />
    `}),argTypes:{lines:{table:{disable:!0}},compact:{table:{disable:!0}}}},n={render:a=>({components:{UluList:l},setup(){return{args:a}},template:`
      <UluList v-bind="args">
        <template #default="{ item }">
          <a :href="item.href" style="text-decoration: none; color: #1a0dab;">
            <strong>{{ item.label }}</strong> - <small>{{ item.href }}</small>
          </a>
        </template>
      </UluList>
    `}),args:{items:[{label:"Google",href:"https://google.com"},{label:"Facebook",href:"https://facebook.com"},{label:"Amazon",href:"https://amazon.com"}]}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    unordered: true
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    ordered: true
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    ordered: true,
    reversed: true,
    items: ['Three', 'Two', 'One']
  }
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    ordered: true,
    start: '5',
    items: ['Starts at 5', 'Item 6', 'Item 7']
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      UluList
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <UluList v-bind="args" lines />
    \`
  }),
  argTypes: {
    lines: {
      table: {
        disable: true
      }
    },
    compact: {
      table: {
        disable: true
      }
    }
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      UluList
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <UluList v-bind="args">
        <template #default="{ item }">
          <a :href="item.href" style="text-decoration: none; color: #1a0dab;">
            <strong>{{ item.label }}</strong> - <small>{{ item.href }}</small>
          </a>
        </template>
      </UluList>
    \`
  }),
  args: {
    items: [{
      label: 'Google',
      href: 'https://google.com'
    }, {
      label: 'Facebook',
      href: 'https://facebook.com'
    }, {
      label: 'Amazon',
      href: 'https://amazon.com'
    }]
  }
}`,...n.parameters?.docs?.source}}};const i=["Unordered","Ordered","OrderedReversed","OrderedStartValue","LinesList","CustomItemSlot"];export{n as CustomItemSlot,o as LinesList,r as Ordered,t as OrderedReversed,s as OrderedStartValue,e as Unordered,i as __namedExportsOrder,d as default};
