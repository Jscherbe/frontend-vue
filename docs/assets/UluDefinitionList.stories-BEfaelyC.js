import{p as o}from"./iframe-DJ9yAl8J.js";import"./preload-helper-BJwshlQW.js";const m={component:o,tags:["autodocs"],args:{items:[{term:"Term 1",description:"This is the description for the first term."},{term:"Term 2",description:"This is the description for the second term, which can be a bit longer to show how it wraps."},{term:"Term 3",description:"A short description."}]},argTypes:{items:{control:"object"},classes:{control:"object"}}},t={},e={args:{classes:{list:"custom-dl",item:"custom-dl__item",term:"custom-dl__term",description:"custom-dl__description"}},decorators:[()=>({template:`
        <div>
          <p>This story demonstrates custom classes. Inspect the elements to see them applied.</p>
          <style>
            .custom-dl__term { font-weight: bold; color: #005ea2; }
            .custom-dl__description { color: #555; padding-left: 1rem; border-left: 2px solid #eee; }
            .custom-dl__item:not(:last-child) { margin-bottom: 1rem; }
          </style>
          <story/>
        </div>
      `})]},s={render:r=>({components:{UluDefinitionList:o},setup(){return{args:r}},template:`
      <UluDefinitionList v-bind="args">
        <template #term="{ item }">
          <strong style="text-transform: uppercase;">{{ item.term }} 🚀</strong>
        </template>
        <template #description="{ item }">
          <a :href="item.description.link">{{ item.description.text }}</a>
        </template>
      </UluDefinitionList>
    `}),args:{items:[{term:"Website",description:{text:"Visit our main website",link:"#"}},{term:"Email",description:{text:"Contact Support",link:"mailto:support@example.com"}}]}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    classes: {
      list: 'custom-dl',
      item: 'custom-dl__item',
      term: 'custom-dl__term',
      description: 'custom-dl__description'
    }
  },
  decorators: [() => ({
    template: \`
        <div>
          <p>This story demonstrates custom classes. Inspect the elements to see them applied.</p>
          <style>
            .custom-dl__term { font-weight: bold; color: #005ea2; }
            .custom-dl__description { color: #555; padding-left: 1rem; border-left: 2px solid #eee; }
            .custom-dl__item:not(:last-child) { margin-bottom: 1rem; }
          </style>
          <story/>
        </div>
      \`
  })]
}`,...e.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      UluDefinitionList
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <UluDefinitionList v-bind="args">
        <template #term="{ item }">
          <strong style="text-transform: uppercase;">{{ item.term }} 🚀</strong>
        </template>
        <template #description="{ item }">
          <a :href="item.description.link">{{ item.description.text }}</a>
        </template>
      </UluDefinitionList>
    \`
  }),
  args: {
    items: [{
      term: 'Website',
      description: {
        text: 'Visit our main website',
        link: '#'
      }
    }, {
      term: 'Email',
      description: {
        text: 'Contact Support',
        link: 'mailto:support@example.com'
      }
    }]
  }
}`,...s.parameters?.docs?.source}}};const a=["Default","CustomClasses","CustomSlots"];export{e as CustomClasses,s as CustomSlots,t as Default,a as __namedExportsOrder,m as default};
