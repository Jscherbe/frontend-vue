import{c as x,u as T,d as g,F as w,x as A,n as s,q as C,o as b,b as D,e as h,j as y,t as S}from"./iframe-ULHYlDKO.js";import"./preload-helper-BJwshlQW.js";const u={__name:"UluDefinitionList",props:{items:Array,classes:{type:Object,default:()=>({})},modifiers:[String,Array],inline:Boolean,inlineAll:Boolean,table:Boolean,separated:Boolean,separatedFirst:Boolean,separatedLast:Boolean,compact:Boolean},setup(e){const t=e,L=x(()=>({inline:t.inline,"inline-all":t.inlineAll,table:t.table,separated:t.separated,"separated-first":t.separatedFirst,"separated-last":t.separatedLast,compact:t.compact})),{resolvedModifiers:U}=T({props:t,internal:L,baseClass:"definition-list"});return(v,B)=>(b(),g("dl",{class:s(["definition-list",[C(U),e.classes.list]])},[(b(!0),g(w,null,A(e.items,(n,f)=>(b(),g("div",{key:f,class:s(e.classes.item)},[D("dt",{class:s(e.classes.term)},[h(v.$slots,"term",{item:n,index:f},()=>[y(S(n.term),1)])],2),D("dd",{class:s(e.classes.description)},[h(v.$slots,"description",{item:n,index:f},()=>[y(S(n.description),1)])],2)],2))),128))],2))}};u.__docgenInfo={exportName:"default",displayName:"UluDefinitionList",description:"",tags:{},props:[{name:"items",description:`Array of term, and description (props in object)
- Can use slots also`,type:{name:"array"}},{name:"classes",description:"Classes object for different elements { list, item, term, description }",type:{name:"object"},defaultValue:{func:!1,value:"{}"}},{name:"modifiers",description:"Class modifiers (ie. 'transparent', 'secondary', etc)",type:{name:"string|array"}},{name:"inline",description:"Displays only the definition descriptions on the same line.",type:{name:"boolean"}},{name:"inlineAll",description:"Displays both the definition term and its descriptions on the same line.",type:{name:"boolean"}},{name:"table",description:"Displays the list in a two-column grid on larger screens.",type:{name:"boolean"}},{name:"separated",description:"Adds a rule between each item.",type:{name:"boolean"}},{name:"separatedFirst",description:"Adds a rule to the top of the first item.",type:{name:"boolean"}},{name:"separatedLast",description:"Adds a rule to the bottom of the last item.",type:{name:"boolean"}},{name:"compact",description:"Reduces the margin between items.",type:{name:"boolean"}}],slots:[{name:"term",scoped:!0,bindings:[{name:"item",title:"binding"},{name:"index",title:"binding"}]},{name:"description",scoped:!0,bindings:[{name:"item",title:"binding"},{name:"index",title:"binding"}]}],sourceFiles:["/Users/joescherben/Personal/Projects/ULU/frontend-vue/lib/components/elements/UluDefinitionList.vue"]};const F={component:u,tags:["autodocs"],args:{items:[{term:"Term 1",description:"This is the description for the first term."},{term:"Term 2",description:"This is the description for the second term, which can be a bit longer to show how it wraps."},{term:"Term 3",description:"A short description."}]},argTypes:{items:{control:"object"},classes:{control:"object"},modifiers:{control:"text"},inline:{control:"boolean"},inlineAll:{control:"boolean"},table:{control:"boolean"},separated:{control:"boolean"},separatedFirst:{control:"boolean"},separatedLast:{control:"boolean"},compact:{control:"boolean"}}},r={},a={args:{inline:!0}},i={args:{inlineAll:!0,items:[{term:"Term 1",description:"Desc 1"},{term:"Term 2",description:"Desc 2"},{term:"Term 3",description:"Desc 3"}]}},o={args:{table:!0}},l={args:{separated:!0}},p={args:{separated:!0},render:e=>({components:{UluDefinitionList:u},setup(){return{args:e}},template:`
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
    `})},c={args:{compact:!0}},d={args:{table:!0,separated:!0,compact:!0}},m={render:e=>({components:{UluDefinitionList:u},setup(){return{args:e}},template:`
      <UluDefinitionList v-bind="args">
        <template #term="{ item }">
          <strong style="text-transform: uppercase;">{{ item.term }} 🚀</strong>
        </template>
        <template #description="{ item }">
          <a :href="item.description.link">{{ item.description.text }}</a>
        </template>
      </UluDefinitionList>
    `}),args:{items:[{term:"Website",description:{text:"Visit our main website",link:"#"}},{term:"Email",description:{text:"Contact Support",link:"mailto:support@example.com"}}]}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    inline: true
  }
}`,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    table: true
  }
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    separated: true
  }
}`,...l.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    compact: true
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    table: true,
    separated: true,
    compact: true
  }
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const V=["Default","Inline","InlineAll","Table","Separated","SeparatedVariations","Compact","TableSeparatedCompact","CustomSlots"];export{c as Compact,m as CustomSlots,r as Default,a as Inline,i as InlineAll,l as Separated,p as SeparatedVariations,o as Table,d as TableSeparatedCompact,V as __namedExportsOrder,F as default};
