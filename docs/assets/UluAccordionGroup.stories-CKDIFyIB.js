import{a as r,b as s}from"./iframe-BFkjcG5o.js";import"./preload-helper-BJwshlQW.js";const m={component:r,tags:["autodocs"]},i=[{title:"First Item",content:"This is the content for the first item.",isOpen:!0},{title:"Second Item",content:"This is the content for the second item."},{title:"Third Item",content:"This is the content for the third item."}],e={args:{items:i}},t={args:{items:[{title:"First Custom",content:{summary:"Summary one",details:"Details one"}},{title:"Second Custom",content:{summary:"Summary two",details:"Details two"}}]},render:o=>({components:{UluAccordionGroup:r},setup(){return{args:o}},template:`
      <UluAccordionGroup v-bind="args">
        <template #item="{ item, isOpen, toggle }">
          <h4 class="h3">{{ item.content.summary }}</h4>
          <p>{{ item.content.details }}</p>
          <p><small>Current state: {{ isOpen ? 'Open' : 'Closed' }}</small></p>
          <button @click="toggle()">Toggle from inside</button>
        </template>
      </UluAccordionGroup>
    `})},n={args:{items:[{title:"First Custom Trigger",content:"Content for first item"},{title:"Second Custom Trigger",content:"Content for second item"}]},render:o=>({components:{UluAccordionGroup:r,UluIcon:s},setup(){return{args:o}},template:`
      <UluAccordionGroup v-bind="args">
        <template #trigger="{ item, isOpen }">
          <strong style="color: rebeccapurple;">{{ item.title }} ({{ isOpen ? 'Open' : 'Closed' }})</strong>
        </template>
        <template #icon="{ isOpen }">
          <UluIcon :icon="isOpen ? 'type:danger' : 'type:success'" style="display: inline-block; vertical-align: middle;"/>
        </template>
      </UluAccordionGroup>
    `})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    items: defaultItems
  }
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      title: 'First Custom',
      content: {
        summary: 'Summary one',
        details: 'Details one'
      }
    }, {
      title: 'Second Custom',
      content: {
        summary: 'Summary two',
        details: 'Details two'
      }
    }]
  },
  render: args => ({
    components: {
      UluAccordionGroup
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <UluAccordionGroup v-bind="args">
        <template #item="{ item, isOpen, toggle }">
          <h4 class="h3">{{ item.content.summary }}</h4>
          <p>{{ item.content.details }}</p>
          <p><small>Current state: {{ isOpen ? 'Open' : 'Closed' }}</small></p>
          <button @click="toggle()">Toggle from inside</button>
        </template>
      </UluAccordionGroup>
    \`
  })
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      title: 'First Custom Trigger',
      content: 'Content for first item'
    }, {
      title: 'Second Custom Trigger',
      content: 'Content for second item'
    }]
  },
  render: args => ({
    components: {
      UluAccordionGroup,
      UluIcon
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <UluAccordionGroup v-bind="args">
        <template #trigger="{ item, isOpen }">
          <strong style="color: rebeccapurple;">{{ item.title }} ({{ isOpen ? 'Open' : 'Closed' }})</strong>
        </template>
        <template #icon="{ isOpen }">
          <UluIcon :icon="isOpen ? 'type:danger' : 'type:success'" style="display: inline-block; vertical-align: middle;"/>
        </template>
      </UluAccordionGroup>
    \`
  })
}`,...n.parameters?.docs?.source}}};const l=["Default","CustomSlot","CustomTrigger"];export{t as CustomSlot,n as CustomTrigger,e as Default,l as __namedExportsOrder,m as default};
