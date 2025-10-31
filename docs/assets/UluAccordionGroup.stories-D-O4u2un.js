import{a as n}from"./iframe-h65IHHsm.js";import"./preload-helper-BJwshlQW.js";const a={component:n,tags:["autodocs"]},s=[{title:"First Item",content:"This is the content for the first item.",isOpen:!0},{title:"Second Item",content:"This is the content for the second item."},{title:"Third Item",content:"This is the content for the third item."}],t={args:{items:s}},e={args:{items:[{title:"First Custom",content:{summary:"Summary one",details:"Details one"}},{title:"Second Custom",content:{summary:"Summary two",details:"Details two"}}]},render:o=>({components:{UluAccordionGroup:n},setup(){return{args:o}},template:`
      <UluAccordionGroup v-bind="args">
        <template #item="{ item }">
          <h4 class="h3">{{ item.content.summary }}</h4>
          <p>{{ item.content.details }}</p>
        </template>
      </UluAccordionGroup>
    `})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    items: defaultItems
  }
}`,...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
        <template #item="{ item }">
          <h4 class="h3">{{ item.content.summary }}</h4>
          <p>{{ item.content.details }}</p>
        </template>
      </UluAccordionGroup>
    \`
  })
}`,...e.parameters?.docs?.source}}};const i=["Default","CustomSlot"];export{e as CustomSlot,t as Default,i as __namedExportsOrder,a as default};
