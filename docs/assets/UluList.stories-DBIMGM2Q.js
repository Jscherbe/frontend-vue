import{U as v,c as p,a as S,f as C,w as k,p as O,n as L,r as T,o as g,d as U,e as y,F as j,g as w,j as x,t as B,z as D}from"./iframe-BJ-U5yDE.js";import"./preload-helper-BJwshlQW.js";const t={__name:"UluList",props:{items:Array,classes:{type:Object,default:()=>({})},ordered:Boolean,unordered:Boolean,lines:Boolean,compact:Boolean,forceOrdered:Boolean,start:String,reversed:Boolean,listStyleType:String},setup(e){const s=e;v("uluListClasses",p(()=>s.classes));const r=p(()=>s.ordered||s.forceOrdered),b=p(()=>r.value?"ol":"ul");return(n,N)=>(e.items!==void 0?e.items.length:n.$slots.default)?(g(),S(T(b.value),{key:0,class:L([{"list-ordered":e.ordered,"list-unordered":e.unordered,"list-lines":e.lines,"list-compact":e.compact},e.classes.list]),style:O({listStyleType:e.listStyleType}),reversed:r.value?e.reversed:null,start:e.start},{default:k(()=>[e.items!==void 0?(g(!0),U(j,{key:0},w(e.items,(f,h)=>(g(),U("li",{key:h,class:L([e.classes.item,f?.classes?.item])},[y(n.$slots,"default",{item:f,index:h},()=>[x(B(f),1)])],2))),128)):y(n.$slots,"default",{key:1})]),_:3},8,["class","style","reversed","start"])):C("",!0)}};t.__docgenInfo={exportName:"default",displayName:"UluList",description:"",tags:{},props:[{name:"items",description:`Array of list items, output as is or use slot to template the item
- Note item can add classes by defining { classes: { item } }`,type:{name:"array"}},{name:"classes",description:`Classes object (keys are { list, item } to be applied to <ul> and <li>)
- Any valid class binding for each`,type:{name:"object"},defaultValue:{func:!1,value:"{}"}},{name:"ordered",description:"Use list-ordered class, and sets element to <ol>",type:{name:"boolean"}},{name:"unordered",description:"Use list-unordered class",type:{name:"boolean"}},{name:"lines",description:"Use list-lines class",type:{name:"boolean"}},{name:"compact",description:"Use list-compact class",type:{name:"boolean"}},{name:"forceOrdered",description:`If setting up custom ordered list this will ensure the correct element type
- Note: 'ordered' prop sets the ordered list class, this does not`,type:{name:"boolean"}},{name:"start",description:"Define the start value for <ol>",type:{name:"string"}},{name:"reversed",description:"Reverse ordered list",type:{name:"boolean"}},{name:"listStyleType",description:"Define list style type (ie. disc, decimal, etc)",type:{name:"string"}}],slots:[{name:"default",scoped:!0,bindings:[{name:"item",title:"binding"},{name:"index",title:"binding"}]}],sourceFiles:["/Users/joescherben/Personal/Projects/ULU/frontend-vue/lib/components/elements/UluList.vue"]};const I={__name:"UluListItem",props:{classes:[String,Array,Object]},setup(e){const s=D("uluListClasses",{value:{}}),r=p(()=>s.value||{});return(b,n)=>(g(),U("li",{class:L([r.value.item,e.classes])},[y(b.$slots,"default")],2))}};I.__docgenInfo={exportName:"default",displayName:"UluListItem",description:"",tags:{},props:[{name:"classes",description:"Optional class binding to append to the injected parent classes",type:{name:"string|array|object"}}],slots:[{name:"default"}],sourceFiles:["/Users/joescherben/Personal/Projects/ULU/frontend-vue/lib/components/elements/UluListItem.vue"]};const F={tags:["autodocs"],component:t,args:{items:["List Item 1","List Item 2","List Item 3","List Item 4"]},argTypes:{items:{control:"object"},classes:{control:"object"},ordered:{control:"boolean"},unordered:{control:"boolean"},lines:{control:"boolean"},compact:{control:"boolean"},forceOrdered:{control:"boolean"},start:{control:"text"},reversed:{control:"boolean"},listStyleType:{control:"text"}}},a={args:{unordered:!0}},o={args:{ordered:!0}},l={args:{ordered:!0,reversed:!0,items:["Three","Two","One"]}},i={args:{ordered:!0,start:"5",items:["Starts at 5","Item 6","Item 7"]}},d={render:e=>({components:{UluList:t},setup(){return{args:e}},template:`
      <UluList v-bind="args" lines />
    `}),argTypes:{lines:{table:{disable:!0}},compact:{table:{disable:!0}}}},m={render:e=>({components:{UluList:t},setup(){return{args:e}},template:`
      <UluList v-bind="args">
        <template #default="{ item }">
          <a :href="item.href" style="text-decoration: none; color: #1a0dab;">
            <strong>{{ item.label }}</strong> - <small>{{ item.href }}</small>
          </a>
        </template>
      </UluList>
    `}),args:{items:[{label:"Google",href:"https://google.com"},{label:"Facebook",href:"https://facebook.com"},{label:"Amazon",href:"https://amazon.com"}]}},c={render:e=>({components:{UluList:t},setup(){return{args:e}},template:`
      <UluList v-bind="args">
        <template #default="{ item }">
          <span>{{ item.label }}</span>
        </template>
      </UluList>
    `}),args:{classes:{list:"ulu-demo-padding-1 ulu-demo-border-1",item:"ulu-demo-background-1 ulu-demo-padding-1 ulu-demo-border-1"},items:[{label:"Default Item 1"},{label:"Default Item 2"},{label:"Item with Specific Class",classes:{item:"ulu-demo-background-2 ulu-demo-color-1"}}]}},u={render:e=>({components:{UluList:t,UluListItem:I},setup(){return{args:e}},template:`
      <UluList v-bind="args">
        <UluListItem>This is a manually composed list item using UluListItem</UluListItem>
        <UluListItem>This is another composed list item</UluListItem>
        <UluListItem>Works seamlessly without the <code>items</code> prop!</UluListItem>
      </UluList>
    `}),args:{ordered:!0,items:void 0}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    unordered: true
  }
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    ordered: true
  }
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    ordered: true,
    reversed: true,
    items: ['Three', 'Two', 'One']
  }
}`,...l.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    ordered: true,
    start: '5',
    items: ['Starts at 5', 'Item 6', 'Item 7']
  }
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};const V=["Unordered","Ordered","OrderedReversed","OrderedStartValue","LinesList","CustomItemSlot","CustomClasses","Compositional"];export{u as Compositional,c as CustomClasses,m as CustomItemSlot,d as LinesList,o as Ordered,l as OrderedReversed,i as OrderedStartValue,a as Unordered,V as __namedExportsOrder,F as default};
