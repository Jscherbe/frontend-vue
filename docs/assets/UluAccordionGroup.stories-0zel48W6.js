import{P as f,ad as h,G as m,B as c,O as g,aY as y,A as _,C as U,D as v,K as A,M as S,_ as G}from"./iframe---2PRveq.js";import"./preload-helper-BJwshlQW.js";const O={class:"accordion-group"},l={__name:"UluAccordionGroup",props:{items:{type:Array,default:()=>[]}},setup(i){const u=i,o=f([]);h(()=>u.items,t=>{o.value=t.map(n=>({...n,isOpen:n.isOpen||!1}))},{immediate:!0,deep:!0});function d(t,n){n?o.value.forEach((e,s)=>{e.isOpen=s===t}):o.value[t].isOpen=!1}return(t,n)=>(c(),m("div",O,[(c(!0),m(g,null,y(o.value,(e,s)=>(c(),_(G,{key:s,"model-value":e.isOpen,"onUpdate:modelValue":p=>d(s,p),"trigger-text":e.title,classes:e.classes},{default:U(()=>[v(t.$slots,"item",{item:e,index:s},()=>[A(S(e.content),1)])]),_:2},1032,["model-value","onUpdate:modelValue","trigger-text","classes"]))),128))]))}};l.__docgenInfo={exportName:"default",displayName:"UluAccordionGroup",description:"",tags:{},props:[{name:"items",description:`Array of items to render as accordions.
Each item can have: title, content, isOpen, classes`,type:{name:"array"},defaultValue:{func:!1,value:"[]"}}],slots:[{name:"item",scoped:!0,bindings:[{name:"item",title:"binding"},{name:"index",title:"binding"}]}],sourceFiles:["/Users/joescherben/Personal/Projects/ULU/frontend-vue/lib/components/collapsible/UluAccordionGroup.vue"]};const w={component:l,tags:["autodocs"]},b=[{title:"First Item",content:"This is the content for the first item.",isOpen:!0},{title:"Second Item",content:"This is the content for the second item."},{title:"Third Item",content:"This is the content for the third item."}],a={args:{items:b}},r={args:{items:[{title:"First Custom",content:{summary:"Summary one",details:"Details one"}},{title:"Second Custom",content:{summary:"Summary two",details:"Details two"}}]},render:i=>({components:{UluAccordionGroup:l},setup(){return{args:i}},template:`
      <UluAccordionGroup v-bind="args">
        <template #item="{ item }">
          <h4 class="h3">{{ item.content.summary }}</h4>
          <p>{{ item.content.details }}</p>
        </template>
      </UluAccordionGroup>
    `})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    items: defaultItems
  }
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
        <template #item="{ item }">
          <h4 class="h3">{{ item.content.summary }}</h4>
          <p>{{ item.content.details }}</p>
        </template>
      </UluAccordionGroup>
    \`
  })
}`,...r.parameters?.docs?.source}}};const x=["Default","CustomSlot"];export{r as CustomSlot,a as Default,x as __namedExportsOrder,w as default};
