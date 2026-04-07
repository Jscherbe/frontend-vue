import{u as L,c as m,a as U,B as f,w as I,n as y,l as b,o as g,e as C,v as h,x as v}from"./iframe-DkTFKg5L.js";import{_ as M}from"./UluList-5xK2k1K6.js";import{_ as u}from"./UluListItem-BkzO3kzU.js";import"./preload-helper-BJwshlQW.js";const l={__name:"UluCounterList",props:{items:Array,element:{type:String,default:"ol"},itemElement:{type:String,default:"li"},classes:{type:Object,default:()=>({})},alphabetical:Boolean,noReset:Boolean,modifiers:[String,Array]},setup(e){const t=e,{resolvedModifiers:c}=L({props:t,baseClass:"counter-list",internal:m(()=>({alphabetical:t.alphabetical,"no-reset":t.noReset}))}),p=m(()=>({list:t.classes.list,item:["counter-list__item",t.classes.item]}));return(r,w)=>(g(),U(M,{class:y(["counter-list",b(c)]),items:e.items,element:e.element,itemElement:e.itemElement,classes:p.value},f({_:2},[r.$slots.default?{name:"default",fn:I(d=>[C(r.$slots,"default",h(v(d)))]),key:"0"}:void 0]),1032,["class","items","element","itemElement","classes"]))}};l.__docgenInfo={exportName:"default",displayName:"UluCounterList",description:"",tags:{},props:[{name:"items",description:`Array of list items, output as is or use slot to template the item
- Note item can add classes by defining { classes: { item } }`,type:{name:"array"}},{name:"element",description:"HTML element for the list",type:{name:"string"},defaultValue:{func:!1,value:'"ol"'}},{name:"itemElement",description:"HTML element for the list items (when using items array)",type:{name:"string"},defaultValue:{func:!1,value:'"li"'}},{name:"classes",description:"Classes object (keys are { list, item } to be applied to list and item elements)",type:{name:"object"},defaultValue:{func:!1,value:"{}"}},{name:"alphabetical",description:"Use alphabetical counter",type:{name:"boolean"}},{name:"noReset",description:"Remove counter reset",type:{name:"boolean"}},{name:"modifiers",description:"Modifiers (to add any modifier classes based on base class [ie. 'alphabetical'])",type:{name:"string|array"}}],slots:[{name:"default",scoped:!0,bindings:[]}],sourceFiles:["/Users/joescherben/Personal/Projects/ULU/frontend-vue/lib/components/elements/UluCounterList.vue"]};const x={tags:["autodocs"],component:l,args:{items:["List Item 1","List Item 2","List Item 3","List Item 4"]},argTypes:{items:{control:"object"},element:{control:"text"},itemElement:{control:"text"},classes:{control:"object"},alphabetical:{control:"boolean"},noReset:{control:"boolean"},modifiers:{control:"object"}}},s={},n={args:{alphabetical:!0}},a={render:()=>({components:{UluCounterList:l,UluListItem:u},template:`
      <p>This list will continue from previous lists if they exist in the same scope (or just won't reset its own internal counter if styled that way).</p>
      <UluCounterList>
        <UluListItem>Manually composed item 1</UluListItem>
        <UluListItem>Manually composed item 2</UluListItem>
        <UluListItem>Manually composed item 3</UluListItem>
      </UluCounterList>
      <p>A paragraph in between</p>
      <UluCounterList no-reset>
        <UluListItem>Manually composed item 4</UluListItem>
        <UluListItem>Manually composed item 5</UluListItem>
      </UluCounterList>
    `})},o={args:{element:"div",itemElement:"div",items:["Div Item 1","Div Item 2","Div Item 3"]}},i={render:e=>({components:{UluCounterList:l,UluListItem:u},setup(){return{args:e}},template:`
      <UluCounterList v-bind="args">
        <UluListItem>Manually composed item 1</UluListItem>
        <UluListItem>Manually composed item 2</UluListItem>
        <UluListItem>Manually composed item 3</UluListItem>
      </UluCounterList>
    `}),args:{items:void 0}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    alphabetical: true
  }
}`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      UluCounterList,
      UluListItem
    },
    template: \`
      <p>This list will continue from previous lists if they exist in the same scope (or just won't reset its own internal counter if styled that way).</p>
      <UluCounterList>
        <UluListItem>Manually composed item 1</UluListItem>
        <UluListItem>Manually composed item 2</UluListItem>
        <UluListItem>Manually composed item 3</UluListItem>
      </UluCounterList>
      <p>A paragraph in between</p>
      <UluCounterList no-reset>
        <UluListItem>Manually composed item 4</UluListItem>
        <UluListItem>Manually composed item 5</UluListItem>
      </UluCounterList>
    \`
  })
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    element: 'div',
    itemElement: 'div',
    items: ['Div Item 1', 'Div Item 2', 'Div Item 3']
  }
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      UluCounterList,
      UluListItem
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <UluCounterList v-bind="args">
        <UluListItem>Manually composed item 1</UluListItem>
        <UluListItem>Manually composed item 2</UluListItem>
        <UluListItem>Manually composed item 3</UluListItem>
      </UluCounterList>
    \`
  }),
  args: {
    items: undefined
  }
}`,...i.parameters?.docs?.source}}};const D=["Default","Alphabetical","NoReset","CustomElements","Compositional"];export{n as Alphabetical,i as Compositional,o as CustomElements,s as Default,a as NoReset,D as __namedExportsOrder,x as default};
