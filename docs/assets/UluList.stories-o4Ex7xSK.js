import{_ as t}from"./UluList-BfTxmJzR.js";import{_ as u}from"./UluListItem-C5NGOB_o.js";import"./iframe-CYbrjJdn.js";import"./preload-helper-BJwshlQW.js";const b={tags:["autodocs"],component:t,args:{items:["List Item 1","List Item 2","List Item 3","List Item 4"]},argTypes:{items:{control:"object"},classes:{control:"object"},ordered:{control:"boolean"},unordered:{control:"boolean"},lines:{control:"boolean"},compact:{control:"boolean"},forceOrdered:{control:"boolean"},start:{control:"text"},reversed:{control:"boolean"},listStyleType:{control:"text"}}},s={args:{unordered:!0}},r={args:{ordered:!0}},n={args:{ordered:!0,reversed:!0,items:["Three","Two","One"]}},o={args:{ordered:!0,start:"5",items:["Starts at 5","Item 6","Item 7"]}},a={render:e=>({components:{UluList:t},setup(){return{args:e}},template:`
      <UluList v-bind="args" lines />
    `}),argTypes:{lines:{table:{disable:!0}},compact:{table:{disable:!0}}}},l={render:e=>({components:{UluList:t},setup(){return{args:e}},template:`
      <UluList v-bind="args">
        <template #default="{ item }">
          <a :href="item.href" style="text-decoration: none; color: #1a0dab;">
            <strong>{{ item.label }}</strong> - <small>{{ item.href }}</small>
          </a>
        </template>
      </UluList>
    `}),args:{items:[{label:"Google",href:"https://google.com"},{label:"Facebook",href:"https://facebook.com"},{label:"Amazon",href:"https://amazon.com"}]}},m={render:e=>({components:{UluList:t},setup(){return{args:e}},template:`
      <UluList v-bind="args">
        <template #default="{ item }">
          <span>{{ item.label }}</span>
        </template>
      </UluList>
    `}),args:{classes:{list:"ulu-demo-padding-1 ulu-demo-border-1",item:"ulu-demo-background-1 ulu-demo-padding-1 ulu-demo-border-1"},items:[{label:"Default Item 1"},{label:"Default Item 2"},{label:"Item with Specific Class",classes:{item:"ulu-demo-background-2 ulu-demo-color-1"}}]}},i={render:e=>({components:{UluList:t,UluListItem:u},setup(){return{args:e}},template:`
      <UluList v-bind="args">
        <UluListItem>This is a manually composed list item using UluListItem</UluListItem>
        <UluListItem>This is another composed list item</UluListItem>
        <UluListItem>Works seamlessly without the <code>items</code> prop!</UluListItem>
      </UluList>
    `}),args:{ordered:!0,items:void 0}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    unordered: true
  }
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    ordered: true
  }
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    ordered: true,
    reversed: true,
    items: ['Three', 'Two', 'One']
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    ordered: true,
    start: '5',
    items: ['Starts at 5', 'Item 6', 'Item 7']
  }
}`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
          <span>{{ item.label }}</span>
        </template>
      </UluList>
    \`
  }),
  args: {
    classes: {
      list: 'ulu-demo-padding-1 ulu-demo-border-1',
      item: 'ulu-demo-background-1 ulu-demo-padding-1 ulu-demo-border-1'
    },
    items: [{
      label: 'Default Item 1'
    }, {
      label: 'Default Item 2'
    }, {
      label: 'Item with Specific Class',
      classes: {
        item: 'ulu-demo-background-2 ulu-demo-color-1'
      }
    }]
  }
}`,...m.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      UluList,
      UluListItem
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <UluList v-bind="args">
        <UluListItem>This is a manually composed list item using UluListItem</UluListItem>
        <UluListItem>This is another composed list item</UluListItem>
        <UluListItem>Works seamlessly without the <code>items</code> prop!</UluListItem>
      </UluList>
    \`
  }),
  args: {
    ordered: true,
    items: undefined
  }
}`,...i.parameters?.docs?.source}}};const L=["Unordered","Ordered","OrderedReversed","OrderedStartValue","LinesList","CustomItemSlot","CustomClasses","Compositional"];export{i as Compositional,m as CustomClasses,l as CustomItemSlot,a as LinesList,r as Ordered,n as OrderedReversed,o as OrderedStartValue,s as Unordered,L as __namedExportsOrder,b as default};
