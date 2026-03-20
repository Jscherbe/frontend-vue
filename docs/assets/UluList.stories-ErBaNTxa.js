import{c as g,a as L,f as U,w as v,p as S,n as b,r as I,o as m,d as f,F as O,g as k,e as C,j as T,t as x}from"./iframe-n9Uk3WRX.js";import"./preload-helper-BJwshlQW.js";const t={__name:"UluList",props:{items:Array,classes:{type:Object,default:()=>({})},ordered:Boolean,unordered:Boolean,lines:Boolean,compact:Boolean,forceOrdered:Boolean,start:String,reversed:Boolean,listStyleType:String},setup(e){const c=e,u=g(()=>c.ordered||c.forceOrdered),y=g(()=>u.value?"ol":"ul");return(h,B)=>e.items?.length?(m(),L(I(y.value),{key:0,class:b([{"list-ordered":e.ordered,"list-unordered":e.unordered,"list-lines":e.lines,"list-compact":e.compact},e.classes.list]),style:S({listStyleType:e.listStyleType}),reversed:u.value?e.reversed:null,start:e.start},{default:v(()=>[(m(!0),f(O,null,k(e.items,(i,p)=>(m(),f("li",{key:p,class:b([e.classes.item,i?.classes?.item])},[C(h.$slots,"default",{item:i,index:p},()=>[T(x(i),1)])],2))),128))]),_:3},8,["class","style","reversed","start"])):U("",!0)}};t.__docgenInfo={exportName:"default",displayName:"UluList",description:"",tags:{},props:[{name:"items",description:`Array of list items, output as is or use slot to template the item
- Note item can add classes by defining { classes: { item } }`,type:{name:"array"}},{name:"classes",description:`Classes object (keys are { list, item } to be applied to <ul> and <li>)
- Any valid class binding for each`,type:{name:"object"},defaultValue:{func:!1,value:"{}"}},{name:"ordered",description:"Use list-ordered class, and sets element to <ol>",type:{name:"boolean"}},{name:"unordered",description:"Use list-unordered class",type:{name:"boolean"}},{name:"lines",description:"Use list-lines class",type:{name:"boolean"}},{name:"compact",description:"Use list-compact class",type:{name:"boolean"}},{name:"forceOrdered",description:`If setting up custom ordered list this will ensure the correct element type
- Note: 'ordered' prop sets the ordered list class, this does not`,type:{name:"boolean"}},{name:"start",description:"Define the start value for <ol>",type:{name:"string"}},{name:"reversed",description:"Reverse ordered list",type:{name:"boolean"}},{name:"listStyleType",description:"Define list style type (ie. disc, decimal, etc)",type:{name:"string"}}],slots:[{name:"default",scoped:!0,bindings:[{name:"item",title:"binding"},{name:"index",title:"binding"}]}],sourceFiles:["/Users/joescherben/Personal/Projects/ULU/frontend-vue/lib/components/elements/UluList.vue"]};const w={tags:["autodocs"],component:t,args:{items:["List Item 1","List Item 2","List Item 3","List Item 4"]},argTypes:{items:{control:"object"},classes:{control:"object"},ordered:{control:"boolean"},unordered:{control:"boolean"},lines:{control:"boolean"},compact:{control:"boolean"},forceOrdered:{control:"boolean"},start:{control:"text"},reversed:{control:"boolean"},listStyleType:{control:"text"}}},s={args:{unordered:!0}},r={args:{ordered:!0}},n={args:{ordered:!0,reversed:!0,items:["Three","Two","One"]}},a={args:{ordered:!0,start:"5",items:["Starts at 5","Item 6","Item 7"]}},o={render:e=>({components:{UluList:t},setup(){return{args:e}},template:`
      <UluList v-bind="args" lines />
    `}),argTypes:{lines:{table:{disable:!0}},compact:{table:{disable:!0}}}},l={render:e=>({components:{UluList:t},setup(){return{args:e}},template:`
      <UluList v-bind="args">
        <template #default="{ item }">
          <a :href="item.href" style="text-decoration: none; color: #1a0dab;">
            <strong>{{ item.label }}</strong> - <small>{{ item.href }}</small>
          </a>
        </template>
      </UluList>
    `}),args:{items:[{label:"Google",href:"https://google.com"},{label:"Facebook",href:"https://facebook.com"},{label:"Amazon",href:"https://amazon.com"}]}},d={render:e=>({components:{UluList:t},setup(){return{args:e}},template:`
      <UluList v-bind="args">
        <template #default="{ item }">
          <span>{{ item.label }}</span>
        </template>
      </UluList>
    `}),args:{classes:{list:"ulu-demo-padding-1 ulu-demo-border-1",item:"ulu-demo-background-1 ulu-demo-padding-1 ulu-demo-border-1"},items:[{label:"Default Item 1"},{label:"Default Item 2"},{label:"Item with Specific Class",classes:{item:"ulu-demo-background-2 ulu-demo-color-1"}}]}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    ordered: true,
    start: '5',
    items: ['Starts at 5', 'Item 6', 'Item 7']
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
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};const z=["Unordered","Ordered","OrderedReversed","OrderedStartValue","LinesList","CustomItemSlot","CustomClasses"];export{d as CustomClasses,l as CustomItemSlot,o as LinesList,r as Ordered,n as OrderedReversed,a as OrderedStartValue,s as Unordered,z as __namedExportsOrder,w as default};
