import{c as C,u as B,d as i,f as I,F as x,g as L,n as o,h as j,o as r,b as M,e as U,j as T,t as w}from"./iframe-BP9f6g18.js";import"./preload-helper-BJwshlQW.js";const s={__name:"UluDefinitionList",props:{items:Array,classes:{type:Object,default:()=>({})},modifiers:[String,Array],inline:Boolean,inlineAll:Boolean,table:Boolean,separated:Boolean,separatedFirst:Boolean,separatedLast:Boolean,compact:Boolean},setup(e){const t=e,A=C(()=>({inline:t.inline,"inline-all":t.inlineAll,table:t.table,separated:t.separated,"separated-first":t.separatedFirst,"separated-last":t.separatedLast,compact:t.compact})),{resolvedModifiers:k}=B({props:t,internal:A,baseClass:"definition-list"}),F=n=>Array.isArray(n.description)?n.description:[n.description];return(n,V)=>e.items?.length?(r(),i("dl",{key:0,class:o(["definition-list",[j(k),e.classes.list]])},[(r(!0),i(x,null,L(e.items,(a,y)=>(r(),i("div",{key:y,class:o(e.classes.item)},[M("dt",{class:o(e.classes.term)},[U(n.$slots,"term",{item:a,index:y},()=>[T(w(a.term),1)])],2),(r(!0),i(x,null,L(F(a),(S,v)=>(r(),i("dd",{key:v,class:o(e.classes.description)},[U(n.$slots,"description",{item:a,description:S,index:y,descriptionIndex:v},()=>[T(w(S),1)])],2))),128))],2))),128))],2)):I("",!0)}};s.__docgenInfo={exportName:"default",displayName:"UluDefinitionList",description:"",tags:{},props:[{name:"items",description:`Array of objects with term, and description (string or array of strings)
- Can use slots also`,type:{name:"array"}},{name:"classes",description:"Classes object for different elements { list, item, term, description }",type:{name:"object"},defaultValue:{func:!1,value:"{}"}},{name:"modifiers",description:"Class modifiers (ie. 'transparent', 'secondary', etc)",type:{name:"string|array"}},{name:"inline",description:"Displays only the definition descriptions on the same line.",type:{name:"boolean"}},{name:"inlineAll",description:"Displays both the definition term and its descriptions on the same line.",type:{name:"boolean"}},{name:"table",description:"Displays the list in a two-column grid on larger screens.",type:{name:"boolean"}},{name:"separated",description:"Adds a rule between each item.",type:{name:"boolean"}},{name:"separatedFirst",description:"Adds a rule to the top of the first item.",type:{name:"boolean"}},{name:"separatedLast",description:"Adds a rule to the bottom of the last item.",type:{name:"boolean"}},{name:"compact",description:"Reduces the margin between items.",type:{name:"boolean"}}],slots:[{name:"term",scoped:!0,bindings:[{name:"item",title:"binding"},{name:"index",title:"binding"}]},{name:"description",scoped:!0,bindings:[{name:"item",title:"binding"},{name:"description",title:"binding"},{name:"index",title:"binding"},{name:"descriptionIndex",title:"binding"}]}],sourceFiles:["/Users/joescherben/Personal/Projects/ULU/frontend-vue/lib/components/elements/UluDefinitionList.vue"]};const P={component:s,tags:["autodocs"],args:{items:[{term:"Term 1",description:"This is the description for the first term."},{term:"Term 2",description:"This is the description for the second term, which can be a bit longer to show how it wraps."},{term:"Term 3",description:"A short description."}]},argTypes:{items:{control:"object"},classes:{control:"object"},modifiers:{control:"text"},inline:{control:"boolean"},inlineAll:{control:"boolean"},table:{control:"boolean"},separated:{control:"boolean"},separatedFirst:{control:"boolean"},separatedLast:{control:"boolean"},compact:{control:"boolean"}}},p={},d={args:{inline:!0}},l={args:{inlineAll:!0,items:[{term:"Term 1",description:"Desc 1"},{term:"Term 2",description:"Desc 2"},{term:"Term 3",description:"Desc 3"}]}},c={args:{table:!0}},m={args:{separated:!0}},u={args:{separated:!0},render:e=>({components:{UluDefinitionList:s},setup(){return{args:e}},template:`
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
    `})},g={args:{compact:!0}},f={args:{table:!0,separated:!0,compact:!0}},b={render:e=>({components:{UluDefinitionList:s},setup(){return{args:e}},template:`
      <UluDefinitionList v-bind="args">
        <template #term="{ item }">
          <strong style="text-transform: uppercase;">{{ item.term }} 🚀</strong>
        </template>
        <template #description="{ item }">
          <a :href="item.description.link">{{ item.description.text }}</a>
        </template>
      </UluDefinitionList>
    `}),args:{items:[{term:"Website",description:{text:"Visit our main website",link:"#"}},{term:"Email",description:{text:"Contact Support",link:"mailto:support@example.com"}}]}},h={args:{items:[{term:"Single Description",description:"This term has one description."},{term:"Multiple Descriptions",description:["First description for this term.","Second description for this term.","Third description for this term."]},{term:"Another Single",description:"Just to show mixing works."}]}},D={render:e=>({components:{UluDefinitionList:s},setup(){return{args:e}},template:`
      <UluDefinitionList v-bind="args">
        <template #term="{ item }">
          <strong>{{ item.term }}</strong>
        </template>
        <template #description="{ description, index, descriptionIndex }">
          <div style="display: flex; align-items: center; gap: 0.5em;">
            <span style="background: #eee; padding: 0.2em 0.4em; border-radius: 4px; font-size: 0.8em;">
              {{ index }}.{{ descriptionIndex }}
            </span>
            <span>{{ description }}</span>
          </div>
        </template>
      </UluDefinitionList>
    `}),args:{items:[{term:"Features",description:["Fast","Reliable","Secure"]},{term:"Pricing",description:"Free"}]}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:"{}",...p.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    inline: true
  }
}`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    table: true
  }
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    separated: true
  }
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    compact: true
  }
}`,...g.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    table: true,
    separated: true,
    compact: true
  }
}`,...f.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      term: 'Single Description',
      description: 'This term has one description.'
    }, {
      term: 'Multiple Descriptions',
      description: ['First description for this term.', 'Second description for this term.', 'Third description for this term.']
    }, {
      term: 'Another Single',
      description: 'Just to show mixing works.'
    }]
  }
}`,...h.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
          <strong>{{ item.term }}</strong>
        </template>
        <template #description="{ description, index, descriptionIndex }">
          <div style="display: flex; align-items: center; gap: 0.5em;">
            <span style="background: #eee; padding: 0.2em 0.4em; border-radius: 4px; font-size: 0.8em;">
              {{ index }}.{{ descriptionIndex }}
            </span>
            <span>{{ description }}</span>
          </div>
        </template>
      </UluDefinitionList>
    \`
  }),
  args: {
    items: [{
      term: 'Features',
      description: ['Fast', 'Reliable', 'Secure']
    }, {
      term: 'Pricing',
      description: 'Free'
    }]
  }
}`,...D.parameters?.docs?.source}}};const W=["Default","Inline","InlineAll","Table","Separated","SeparatedVariations","Compact","TableSeparatedCompact","CustomSlots","MultipleDescriptions","MultipleDescriptionsWithSlots"];export{g as Compact,b as CustomSlots,p as Default,d as Inline,l as InlineAll,h as MultipleDescriptions,D as MultipleDescriptionsWithSlots,m as Separated,u as SeparatedVariations,c as Table,f as TableSeparatedCompact,W as __namedExportsOrder,P as default};
