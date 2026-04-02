import{q as A,d as f,e as a,F as b,h as C,o as d,a as O,B as v,w as p,j as G,t as x,p as S,_ as T}from"./iframe-Cct7deJN.js";import{_ as y}from"./UluAccordion-DS9CJtJp.js";import"./preload-helper-BJwshlQW.js";import"./UluCollapsible-CvuUcUPR.js";const I={class:"accordion-group"},r={__name:"UluAccordionGroup",props:{items:{type:Array,default:()=>[]},triggerTextElement:{type:String,default:"strong"},modifiers:[String,Array],animate:{type:[Boolean,Object],default:!0}},setup(e){const i=A(null);function h(t,g){g?i.value=t:i.value===t&&(i.value=null)}return S("uluAccordionGroup",{activeAccordionId:i,toggle:h}),(t,g)=>(d(),f("div",I,[e.items?.length?(d(!0),f(b,{key:0},C(e.items,(n,s)=>(d(),O(y,{key:s,"start-open":n.isOpen,"trigger-text":n.title,classes:n.classes,"trigger-text-element":e.triggerTextElement,modifiers:e.modifiers,animate:e.animate},v({default:p(({isOpen:o,toggle:U})=>[a(t.$slots,"item",{item:n,index:s,isOpen:o,toggle:U},()=>[G(x(n.content),1)])]),_:2},[t.$slots.trigger?{name:"trigger",fn:p(({isOpen:o})=>[a(t.$slots,"trigger",{item:n,index:s,isOpen:o})]),key:"0"}:void 0,t.$slots.icon?{name:"icon",fn:p(({isOpen:o})=>[a(t.$slots,"icon",{item:n,index:s,isOpen:o})]),key:"1"}:void 0]),1032,["start-open","trigger-text","classes","trigger-text-element","modifiers","animate"]))),128)):a(t.$slots,"default",{key:1})]))}};r.__docgenInfo={exportName:"default",displayName:"UluAccordionGroup",description:"",tags:{},props:[{name:"items",description:`Array of items to render as accordions.
Each item can have: title, content, isOpen, classes`,type:{name:"array"},defaultValue:{func:!1,value:"[]"}},{name:"triggerTextElement",description:"If using summary text sets the inner element the text is wrapped in, usually a headline or strong",type:{name:"string"},defaultValue:{func:!1,value:'"strong"'}},{name:"modifiers",description:"Class modifiers (ie. 'transparent', 'secondary', etc)",type:{name:"string|array"}},{name:"animate",description:"Enable or configure animations.\n- `false` (default) to disable all animations.\n- `true` to enable animations with default settings.\n- An object to provide custom options to auto-animate (e.g., { duration: 100, easing: 'linear' }).",type:{name:"boolean|object"},defaultValue:{func:!1,value:"true"}}],slots:[{name:"trigger",scoped:!0,bindings:[{name:"item",title:"binding"},{name:"index",title:"binding"},{name:"isOpen",title:"binding"}]},{name:"icon",scoped:!0,bindings:[{name:"item",title:"binding"},{name:"index",title:"binding"},{name:"isOpen",title:"binding"}]},{name:"item",scoped:!0,bindings:[{name:"item",title:"binding"},{name:"index",title:"binding"},{name:"isOpen",title:"binding"},{name:"toggle",title:"binding"}]},{name:"default"}],sourceFiles:["/Users/joescherben/Personal/Projects/ULU/frontend-vue/lib/components/collapsible/UluAccordionGroup.vue"]};const D={component:r,tags:["autodocs"]},k=[{title:"First Item",content:"This is the content for the first item.",isOpen:!0},{title:"Second Item",content:"This is the content for the second item."},{title:"Third Item",content:"This is the content for the third item."}],c={args:{items:k}},l={args:{items:[{title:"First Custom",content:{summary:"Summary one",details:"Details one"}},{title:"Second Custom",content:{summary:"Summary two",details:"Details two"}}]},render:e=>({components:{UluAccordionGroup:r},setup(){return{args:e}},template:`
      <UluAccordionGroup v-bind="args">
        <template #item="{ item, isOpen, toggle }">
          <h4 class="h3">{{ item.content.summary }}</h4>
          <p>{{ item.content.details }}</p>
          <p><small>Current state: {{ isOpen ? 'Open' : 'Closed' }}</small></p>
          <button @click="toggle()">Toggle from inside</button>
        </template>
      </UluAccordionGroup>
    `})},m={args:{items:[{title:"First Custom Trigger",content:"Content for first item"},{title:"Second Custom Trigger",content:"Content for second item"}]},render:e=>({components:{UluAccordionGroup:r,UluIcon:T},setup(){return{args:e}},template:`
      <UluAccordionGroup v-bind="args">
        <template #trigger="{ item, isOpen }">
          <strong style="color: rebeccapurple;">{{ item.title }} ({{ isOpen ? 'Open' : 'Closed' }})</strong>
        </template>
        <template #icon="{ isOpen }">
          <UluIcon :icon="isOpen ? 'type:danger' : 'type:success'" style="display: inline-block; vertical-align: middle;"/>
        </template>
      </UluAccordionGroup>
    `})},u={render:e=>({components:{UluAccordionGroup:r,UluAccordion:y},setup(){return{args:e}},template:`
      <UluAccordionGroup>
        <UluAccordion trigger-text="First Composed" start-open>
          <p>This accordion was composed via slots rather than driven by an items array.</p>
        </UluAccordion>
        <UluAccordion trigger-text="Second Composed">
          <p>It acts exactly the same, maintaining group state naturally through Provide/Inject.</p>
        </UluAccordion>
        <UluAccordion trigger-text="Third Composed">
          <p>You can mix any arbitrary markup around them too.</p>
        </UluAccordion>
      </UluAccordionGroup>
    `})};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    items: defaultItems
  }
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      UluAccordionGroup,
      UluAccordion
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <UluAccordionGroup>
        <UluAccordion trigger-text="First Composed" start-open>
          <p>This accordion was composed via slots rather than driven by an items array.</p>
        </UluAccordion>
        <UluAccordion trigger-text="Second Composed">
          <p>It acts exactly the same, maintaining group state naturally through Provide/Inject.</p>
        </UluAccordion>
        <UluAccordion trigger-text="Third Composed">
          <p>You can mix any arbitrary markup around them too.</p>
        </UluAccordion>
      </UluAccordionGroup>
    \`
  })
}`,...u.parameters?.docs?.source}}};const E=["Default","CustomSlot","CustomTrigger","Composed"];export{u as Composed,l as CustomSlot,m as CustomTrigger,c as Default,E as __namedExportsOrder,D as default};
