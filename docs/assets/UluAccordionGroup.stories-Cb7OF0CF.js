import{l as h,H as O,d as g,f as C,F as U,g as v,o as u,a as A,y as S,w as d,e as p,j as T,t as G,_ as k}from"./iframe-n9Uk3WRX.js";import{_ as x}from"./UluAccordion-BOsGOfur.js";import"./preload-helper-BJwshlQW.js";import"./UluCollapsible-CYcVYXrY.js";const I={key:0,class:"accordion-group"},c={__name:"UluAccordionGroup",props:{items:{type:Array,default:()=>[]},triggerTextElement:{type:String,default:"strong"},modifiers:[String,Array],animate:{type:[Boolean,Object],default:!0}},setup(t){const f=t,r=h([]);O(()=>f.items,e=>{r.value=e.map(o=>({...o,isOpen:o.isOpen||!1}))},{immediate:!0,deep:!0});function y(e,o){o?r.value.forEach((n,s)=>{n.isOpen=s===e}):r.value[e].isOpen=!1}return(e,o)=>t.items?.length?(u(),g("div",I,[(u(!0),g(U,null,v(r.value,(n,s)=>(u(),A(x,{key:s,"model-value":n.isOpen,"onUpdate:modelValue":i=>y(s,i),"trigger-text":n.title,classes:n.classes,"trigger-text-element":t.triggerTextElement,modifiers:t.modifiers,animate:t.animate},S({default:d(({isOpen:i,toggle:b})=>[p(e.$slots,"item",{item:n,index:s,isOpen:i,toggle:b},()=>[T(G(n.content),1)])]),_:2},[e.$slots.trigger?{name:"trigger",fn:d(({isOpen:i})=>[p(e.$slots,"trigger",{item:n,index:s,isOpen:i})]),key:"0"}:void 0,e.$slots.icon?{name:"icon",fn:d(({isOpen:i})=>[p(e.$slots,"icon",{item:n,index:s,isOpen:i})]),key:"1"}:void 0]),1032,["model-value","onUpdate:modelValue","trigger-text","classes","trigger-text-element","modifiers","animate"]))),128))])):C("",!0)}};c.__docgenInfo={exportName:"default",displayName:"UluAccordionGroup",description:"",tags:{},props:[{name:"items",description:`Array of items to render as accordions.
Each item can have: title, content, isOpen, classes`,type:{name:"array"},defaultValue:{func:!1,value:"[]"}},{name:"triggerTextElement",description:"If using summary text sets the inner element the text is wrapped in, usually a headline or strong",type:{name:"string"},defaultValue:{func:!1,value:'"strong"'}},{name:"modifiers",description:"Class modifiers (ie. 'transparent', 'secondary', etc)",type:{name:"string|array"}},{name:"animate",description:"Enable or configure animations.\n- `false` (default) to disable all animations.\n- `true` to enable animations with default settings.\n- An object to provide custom options to auto-animate (e.g., { duration: 100, easing: 'linear' }).",type:{name:"boolean|object"},defaultValue:{func:!1,value:"true"}}],slots:[{name:"trigger",scoped:!0,bindings:[{name:"item",title:"binding"},{name:"index",title:"binding"},{name:"isOpen",title:"binding"}]},{name:"icon",scoped:!0,bindings:[{name:"item",title:"binding"},{name:"index",title:"binding"},{name:"isOpen",title:"binding"}]},{name:"item",scoped:!0,bindings:[{name:"item",title:"binding"},{name:"index",title:"binding"},{name:"isOpen",title:"binding"},{name:"toggle",title:"binding"}]}],sourceFiles:["/Users/joescherben/Personal/Projects/ULU/frontend-vue/lib/components/collapsible/UluAccordionGroup.vue"]};const _={component:c,tags:["autodocs"]},w=[{title:"First Item",content:"This is the content for the first item.",isOpen:!0},{title:"Second Item",content:"This is the content for the second item."},{title:"Third Item",content:"This is the content for the third item."}],a={args:{items:w}},l={args:{items:[{title:"First Custom",content:{summary:"Summary one",details:"Details one"}},{title:"Second Custom",content:{summary:"Summary two",details:"Details two"}}]},render:t=>({components:{UluAccordionGroup:c},setup(){return{args:t}},template:`
      <UluAccordionGroup v-bind="args">
        <template #item="{ item, isOpen, toggle }">
          <h4 class="h3">{{ item.content.summary }}</h4>
          <p>{{ item.content.details }}</p>
          <p><small>Current state: {{ isOpen ? 'Open' : 'Closed' }}</small></p>
          <button @click="toggle()">Toggle from inside</button>
        </template>
      </UluAccordionGroup>
    `})},m={args:{items:[{title:"First Custom Trigger",content:"Content for first item"},{title:"Second Custom Trigger",content:"Content for second item"}]},render:t=>({components:{UluAccordionGroup:c,UluIcon:k},setup(){return{args:t}},template:`
      <UluAccordionGroup v-bind="args">
        <template #trigger="{ item, isOpen }">
          <strong style="color: rebeccapurple;">{{ item.title }} ({{ isOpen ? 'Open' : 'Closed' }})</strong>
        </template>
        <template #icon="{ isOpen }">
          <UluIcon :icon="isOpen ? 'type:danger' : 'type:success'" style="display: inline-block; vertical-align: middle;"/>
        </template>
      </UluAccordionGroup>
    `})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    items: defaultItems
  }
}`,...a.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
        <template #item="{ item, isOpen, toggle }">
          <h4 class="h3">{{ item.content.summary }}</h4>
          <p>{{ item.content.details }}</p>
          <p><small>Current state: {{ isOpen ? 'Open' : 'Closed' }}</small></p>
          <button @click="toggle()">Toggle from inside</button>
        </template>
      </UluAccordionGroup>
    \`
  })
}`,...l.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      title: 'First Custom Trigger',
      content: 'Content for first item'
    }, {
      title: 'Second Custom Trigger',
      content: 'Content for second item'
    }]
  },
  render: args => ({
    components: {
      UluAccordionGroup,
      UluIcon
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <UluAccordionGroup v-bind="args">
        <template #trigger="{ item, isOpen }">
          <strong style="color: rebeccapurple;">{{ item.title }} ({{ isOpen ? 'Open' : 'Closed' }})</strong>
        </template>
        <template #icon="{ isOpen }">
          <UluIcon :icon="isOpen ? 'type:danger' : 'type:success'" style="display: inline-block; vertical-align: middle;"/>
        </template>
      </UluAccordionGroup>
    \`
  })
}`,...m.parameters?.docs?.source}}};const $=["Default","CustomSlot","CustomTrigger"];export{l as CustomSlot,m as CustomTrigger,a as Default,$ as __namedExportsOrder,_ as default};
