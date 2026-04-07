import{p as V,c as S,u as N,d as i,f as $,e as d,F as k,h as w,n as a,l as P,o as s,b as F,j as x,t as I,k as z}from"./iframe-BDApY_ZR.js";import"./preload-helper-BJwshlQW.js";const l={__name:"UluDefinitionList",props:{items:Array,classes:{type:Object,default:()=>({})},modifiers:[String,Array],inline:Boolean,inlineAll:Boolean,table:Boolean,separated:Boolean,separatedFirst:Boolean,separatedLast:Boolean,compact:Boolean},setup(e){const t=e;V("uluDefinitionListClasses",S(()=>t.classes));const C=S(()=>({inline:t.inline,"inline-all":t.inlineAll,table:t.table,separated:t.separated,"separated-first":t.separatedFirst,"separated-last":t.separatedLast,compact:t.compact})),{resolvedModifiers:p}=N({props:t,internal:C,baseClass:"definition-list"}),T=n=>Array.isArray(n.description)?n.description:[n.description];return(n,M)=>(e.items!==void 0?e.items.length:n.$slots.default)?(s(),i("dl",{key:0,class:a(["definition-list",[P(p),e.classes.list]])},[e.items!==void 0?(s(!0),i(k,{key:0},w(e.items,(r,o)=>(s(),i("div",{key:o,class:a(e.classes.item)},[F("dt",{class:a(e.classes.term)},[d(n.$slots,"term",{item:r,index:o},()=>[x(I(r.term),1)])],2),(s(!0),i(k,null,w(T(r),(A,j)=>(s(),i("dd",{key:j,class:a(e.classes.description)},[d(n.$slots,"description",{item:r,description:A,index:o,descriptionIndex:j},()=>[x(I(A),1)])],2))),128))],2))),128)):d(n.$slots,"default",{key:1})],2)):$("",!0)}};l.__docgenInfo={exportName:"default",displayName:"UluDefinitionList",description:"",tags:{},props:[{name:"items",description:`Array of objects with term, and description (string or array of strings)
- Can use slots also`,type:{name:"array"}},{name:"classes",description:"Classes object for different elements { list, item, term, description }",type:{name:"object"},defaultValue:{func:!1,value:"{}"}},{name:"modifiers",description:"Class modifiers (ie. 'transparent', 'secondary', etc)",type:{name:"string|array"}},{name:"inline",description:"Displays only the definition descriptions on the same line.",type:{name:"boolean"}},{name:"inlineAll",description:"Displays both the definition term and its descriptions on the same line.",type:{name:"boolean"}},{name:"table",description:"Displays the list in a two-column grid on larger screens.",type:{name:"boolean"}},{name:"separated",description:"Adds a rule between each item.",type:{name:"boolean"}},{name:"separatedFirst",description:"Adds a rule to the top of the first item.",type:{name:"boolean"}},{name:"separatedLast",description:"Adds a rule to the bottom of the last item.",type:{name:"boolean"}},{name:"compact",description:"Reduces the margin between items.",type:{name:"boolean"}}],slots:[{name:"term",scoped:!0,bindings:[{name:"item",title:"binding"},{name:"index",title:"binding"}]},{name:"description",scoped:!0,bindings:[{name:"item",title:"binding"},{name:"description",title:"binding"},{name:"index",title:"binding"},{name:"descriptionIndex",title:"binding"}]},{name:"default"}],sourceFiles:["/Users/joescherben/Personal/Projects/ULU/frontend-vue/lib/components/elements/UluDefinitionList.vue"]};const B={__name:"UluDefinitionListItem",props:{term:String,description:[String,Array],classes:Object},setup(e){const t=e,C=z("uluDefinitionListClasses",{value:{}}),p=S(()=>C.value||{}),T=S(()=>t.description?Array.isArray(t.description)?t.description:[t.description]:[]);return(n,M)=>(s(),i("div",{class:a([p.value.item,e.classes?.item])},[F("dt",{class:a([p.value.term,e.classes?.term])},[d(n.$slots,"term",{},()=>[x(I(e.term),1)])],2),(s(!0),i(k,null,w(T.value,(r,o)=>(s(),i("dd",{key:o,class:a([p.value.description,e.classes?.description])},[d(n.$slots,"description",{description:r,index:o},()=>[x(I(r),1)])],2))),128))],2))}};B.__docgenInfo={exportName:"default",displayName:"UluDefinitionListItem",description:"",tags:{},props:[{name:"term",description:"The term text (renders inside dt)",type:{name:"string"}},{name:"description",description:"The description text or array of strings (renders inside dd)",type:{name:"string|array"}},{name:"classes",description:"Optional classes object to override/append to injected parent classes { item, term, description }",type:{name:"object"}}],slots:[{name:"term"},{name:"description",scoped:!0,bindings:[{name:"description",title:"binding"},{name:"index",title:"binding"}]}],sourceFiles:["/Users/joescherben/Personal/Projects/ULU/frontend-vue/lib/components/elements/UluDefinitionListItem.vue"]};const W={component:l,tags:["autodocs"],args:{items:[{term:"Term 1",description:"This is the description for the first term."},{term:"Term 2",description:"This is the description for the second term, which can be a bit longer to show how it wraps."},{term:"Term 3",description:"A short description."}]},argTypes:{items:{control:"object"},classes:{control:"object"},modifiers:{control:"text"},inline:{control:"boolean"},inlineAll:{control:"boolean"},table:{control:"boolean"},separated:{control:"boolean"},separatedFirst:{control:"boolean"},separatedLast:{control:"boolean"},compact:{control:"boolean"}}},m={},c={args:{inline:!0}},u={args:{inlineAll:!0,items:[{term:"Term 1",description:"Desc 1"},{term:"Term 2",description:"Desc 2"},{term:"Term 3",description:"Desc 3"}]}},f={args:{table:!0}},g={args:{separated:!0}},b={args:{separated:!0},render:e=>({components:{UluDefinitionList:l},setup(){return{args:e}},template:`
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
    `})},D={args:{compact:!0}},h={args:{table:!0,separated:!0,compact:!0}},y={render:e=>({components:{UluDefinitionList:l},setup(){return{args:e}},template:`
      <UluDefinitionList v-bind="args">
        <template #term="{ item }">
          <strong style="text-transform: uppercase;">{{ item.term }} 🚀</strong>
        </template>
        <template #description="{ item }">
          <a :href="item.description.link">{{ item.description.text }}</a>
        </template>
      </UluDefinitionList>
    `}),args:{items:[{term:"Website",description:{text:"Visit our main website",link:"#"}},{term:"Email",description:{text:"Contact Support",link:"mailto:support@example.com"}}]}},v={args:{items:[{term:"Single Description",description:"This term has one description."},{term:"Multiple Descriptions",description:["First description for this term.","Second description for this term.","Third description for this term."]},{term:"Another Single",description:"Just to show mixing works."}]}},L={render:e=>({components:{UluDefinitionList:l},setup(){return{args:e}},template:`
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
    `}),args:{items:[{term:"Features",description:["Fast","Reliable","Secure"]},{term:"Pricing",description:"Free"}]}},U={render:e=>({components:{UluDefinitionList:l,UluDefinitionListItem:B},setup(){return{args:e}},template:`
      <UluDefinitionList v-bind="args">
        <UluDefinitionListItem term="Composed Item 1" description="This item is composed manually using UluDefinitionListItem." />
        <UluDefinitionListItem term="Composed Item 2">
          <template #description>
            <em>Custom description via slot.</em>
          </template>
        </UluDefinitionListItem>
        <UluDefinitionListItem>
          <template #term>
            <span style="color: purple;">Custom Term</span>
          </template>
          <template #description>
            <div>You can fully customize the content while keeping layout properties like <strong>table</strong> or <strong>inline</strong>.</div>
          </template>
        </UluDefinitionListItem>
      </UluDefinitionList>
    `}),args:{items:void 0,table:!0,separated:!0}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"{}",...m.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    inline: true
  }
}`,...c.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    table: true
  }
}`,...f.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    separated: true
  }
}`,...g.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    compact: true
  }
}`,...D.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    table: true,
    separated: true,
    compact: true
  }
}`,...h.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
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
}`,...L.parameters?.docs?.source}}};U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      UluDefinitionList,
      UluDefinitionListItem
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <UluDefinitionList v-bind="args">
        <UluDefinitionListItem term="Composed Item 1" description="This item is composed manually using UluDefinitionListItem." />
        <UluDefinitionListItem term="Composed Item 2">
          <template #description>
            <em>Custom description via slot.</em>
          </template>
        </UluDefinitionListItem>
        <UluDefinitionListItem>
          <template #term>
            <span style="color: purple;">Custom Term</span>
          </template>
          <template #description>
            <div>You can fully customize the content while keeping layout properties like <strong>table</strong> or <strong>inline</strong>.</div>
          </template>
        </UluDefinitionListItem>
      </UluDefinitionList>
    \`
  }),
  args: {
    items: undefined,
    // ensure items is undefined so default slot triggers
    table: true,
    separated: true
  }
}`,...U.parameters?.docs?.source}}};const R=["Default","Inline","InlineAll","Table","Separated","SeparatedVariations","Compact","TableSeparatedCompact","CustomSlots","MultipleDescriptions","MultipleDescriptionsWithSlots","Compositional"];export{D as Compact,U as Compositional,y as CustomSlots,m as Default,c as Inline,u as InlineAll,v as MultipleDescriptions,L as MultipleDescriptionsWithSlots,g as Separated,b as SeparatedVariations,f as Table,h as TableSeparatedCompact,R as __namedExportsOrder,W as default};
