import{q as m}from"./iframe-h65IHHsm.js";import"./preload-helper-BJwshlQW.js";const u={component:m,tags:["autodocs"],args:{items:[{term:"Term 1",description:"This is the description for the first term."},{term:"Term 2",description:"This is the description for the second term, which can be a bit longer to show how it wraps."},{term:"Term 3",description:"A short description."}]},argTypes:{items:{control:"object"},classes:{control:"object"},modifiers:{control:"text"},inline:{control:"boolean"},inlineAll:{control:"boolean"},table:{control:"boolean"},separated:{control:"boolean"},separatedFirst:{control:"boolean"},separatedLast:{control:"boolean"},compact:{control:"boolean"}}},e={},t={args:{inline:!0}},r={args:{inlineAll:!0,items:[{term:"Term 1",description:"Desc 1"},{term:"Term 2",description:"Desc 2"},{term:"Term 3",description:"Desc 3"}]}},n={args:{table:!0}},s={args:{separated:!0}},a={args:{separated:!0},render:c=>({components:{UluDefinitionList:m},setup(){return{args:c}},template:`
      <div style="display: flex; flex-direction: column; gap: 2rem;">
        <div>
          <p>Separated</p>
          <UluDefinitionList v-bind="args" />
        </div>
        <div>
          <p>Separated (with first)</p>
          <UluDefinitionList v-bind="args" :separated-first="true" />
        </div>
        <div>
          <p>Separated (with last)</p>
          <UluDefinitionList v-bind="args" :separated-last="true" />
        </div>
        <div>
          <p>Separated (with first and last)</p>
          <UluDefinitionList v-bind="args" :separated-first="true" :separated-last="true" />
        </div>
      </div>
    `})},i={args:{compact:!0}},o={args:{table:!0,separated:!0,compact:!0}},p={render:c=>({components:{UluDefinitionList:m},setup(){return{args:c}},template:`
      <UluDefinitionList v-bind="args">
        <template #term="{ item }">
          <strong style="text-transform: uppercase;">{{ item.term }} 🚀</strong>
        </template>
        <template #description="{ item }">
          <a :href="item.description.link">{{ item.description.text }}</a>
        </template>
      </UluDefinitionList>
    `}),args:{items:[{term:"Website",description:{text:"Visit our main website",link:"#"}},{term:"Email",description:{text:"Contact Support",link:"mailto:support@example.com"}}]}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    inline: true
  }
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    inlineAll: true,
    items: [{
      term: 'Term 1',
      description: 'Desc 1'
    }, {
      term: 'Term 2',
      description: 'Desc 2'
    }, {
      term: 'Term 3',
      description: 'Desc 3'
    }]
  }
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    table: true
  }
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    separated: true
  }
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    separated: true
  },
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
      <div style="display: flex; flex-direction: column; gap: 2rem;">
        <div>
          <p>Separated</p>
          <UluDefinitionList v-bind="args" />
        </div>
        <div>
          <p>Separated (with first)</p>
          <UluDefinitionList v-bind="args" :separated-first="true" />
        </div>
        <div>
          <p>Separated (with last)</p>
          <UluDefinitionList v-bind="args" :separated-last="true" />
        </div>
        <div>
          <p>Separated (with first and last)</p>
          <UluDefinitionList v-bind="args" :separated-first="true" :separated-last="true" />
        </div>
      </div>
    \`
  })
}`,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    compact: true
  }
}`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    table: true,
    separated: true,
    compact: true
  }
}`,...o.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};const g=["Default","Inline","InlineAll","Table","Separated","SeparatedVariations","Compact","TableSeparatedCompact","CustomSlots"];export{i as Compact,p as CustomSlots,e as Default,t as Inline,r as InlineAll,s as Separated,a as SeparatedVariations,n as Table,o as TableSeparatedCompact,g as __namedExportsOrder,u as default};
