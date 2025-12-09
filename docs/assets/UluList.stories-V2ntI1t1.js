import{c as p,a as h,w as v,p as L,n as g,r as U,o as d,d as b,F as S,x as O,e as I,j as T,t as x}from"./iframe-ClpBgbxC.js";import"./preload-helper-BJwshlQW.js";const l={__name:"UluList",props:{items:Array,classes:{type:Object,default:()=>({})},ordered:Boolean,unordered:Boolean,lines:Boolean,compact:Boolean,forceOrdered:Boolean,start:String,reversed:Boolean,listStyleType:String},setup(e){const i=e,c=p(()=>i.ordered||i.forceOrdered),y=p(()=>c.value?"ol":"ul");return(f,k)=>(d(),h(U(y.value),{class:g([{"list-ordered":e.ordered,"list-unordered":e.unordered,"list-lines":e.lines,"list-compact":e.compact},e.classes.list]),style:L({listStyleType:e.listStyleType}),reversed:c.value?e.reversed:null,start:e.start},{default:v(()=>[(d(!0),b(S,null,O(e.items,(m,u)=>(d(),b("li",{key:u,class:g(e.classes.listItem)},[I(f.$slots,"default",{item:m,index:u},()=>[T(x(m),1)])],2))),128))]),_:3},8,["class","style","reversed","start"]))}};l.__docgenInfo={exportName:"default",displayName:"UluList",description:"",tags:{},props:[{name:"items",description:"Array of list items, output as is or use slot to template the item",type:{name:"array"}},{name:"classes",description:`Classes object (keys are list and listItem to be applied to <ul> and <li>)
- Any valid class binding for each`,type:{name:"object"},defaultValue:{func:!1,value:"{}"}},{name:"ordered",description:"Use list-ordered class, and sets element to <ol>",type:{name:"boolean"}},{name:"unordered",description:"Use list-unordered class",type:{name:"boolean"}},{name:"lines",description:"Use list-lines class",type:{name:"boolean"}},{name:"compact",description:"Use list-compact class",type:{name:"boolean"}},{name:"forceOrdered",description:`If setting up custom ordered list this will ensure the correct element type
- Note: 'ordered' prop sets the ordered list class, this does not`,type:{name:"boolean"}},{name:"start",description:"Define the start value for <ol>",type:{name:"string"}},{name:"reversed",description:"Reverse ordered list",type:{name:"boolean"}},{name:"listStyleType",description:"Define list style type (ie. disc, decimal, etc)",type:{name:"string"}}],slots:[{name:"default",scoped:!0,bindings:[{name:"item",title:"binding"},{name:"index",title:"binding"}]}],sourceFiles:["/Users/joescherben/Personal/Projects/ULU/frontend-vue/lib/components/elements/UluList.vue"]};const z={tags:["autodocs"],component:l,args:{items:["List Item 1","List Item 2","List Item 3","List Item 4"]},argTypes:{items:{control:"object"},classes:{control:"object"},ordered:{control:"boolean"},unordered:{control:"boolean"},lines:{control:"boolean"},compact:{control:"boolean"},forceOrdered:{control:"boolean"},start:{control:"text"},reversed:{control:"boolean"},listStyleType:{control:"text"}}},t={args:{unordered:!0}},r={args:{ordered:!0}},s={args:{ordered:!0,reversed:!0,items:["Three","Two","One"]}},n={args:{ordered:!0,start:"5",items:["Starts at 5","Item 6","Item 7"]}},a={render:e=>({components:{UluList:l},setup(){return{args:e}},template:`
      <UluList v-bind="args" lines />
    `}),argTypes:{lines:{table:{disable:!0}},compact:{table:{disable:!0}}}},o={render:e=>({components:{UluList:l},setup(){return{args:e}},template:`
      <UluList v-bind="args">
        <template #default="{ item }">
          <a :href="item.href" style="text-decoration: none; color: #1a0dab;">
            <strong>{{ item.label }}</strong> - <small>{{ item.href }}</small>
          </a>
        </template>
      </UluList>
    `}),args:{items:[{label:"Google",href:"https://google.com"},{label:"Facebook",href:"https://facebook.com"},{label:"Amazon",href:"https://amazon.com"}]}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    unordered: true
  }
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    ordered: true
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    ordered: true,
    reversed: true,
    items: ['Three', 'Two', 'One']
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    ordered: true,
    start: '5',
    items: ['Starts at 5', 'Item 6', 'Item 7']
  }
}`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};const C=["Unordered","Ordered","OrderedReversed","OrderedStartValue","LinesList","CustomItemSlot"];export{o as CustomItemSlot,a as LinesList,r as Ordered,s as OrderedReversed,n as OrderedStartValue,t as Unordered,C as __namedExportsOrder,z as default};
