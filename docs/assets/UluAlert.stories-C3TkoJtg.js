import{u as y,c as f,d as p,b as n,s as A,f as b,n as d,_ as h,e as c,l as U,o as u,t as m,j as T}from"./iframe-1mCEuU3h.js";import{_ as v}from"./UluButton-CruMHHlp.js";import"./preload-helper-BJwshlQW.js";import"./UluAction-DPjhTgxn.js";const S={class:"layout-flex"},x={class:"type-small"},B={key:0,class:"margin-left-auto align-self-center"},s={__name:"UluAlert",props:{title:String,description:String,icon:String,type:{type:String,default:"danger"},compact:Boolean,modifiers:[String,Array]},setup(e){const r=e,{resolvedModifiers:g}=y({props:r,baseClass:"callout",internal:f(()=>({[r.type]:r.type,compact:r.compact}))});return(a,_)=>(u(),p("div",{class:d(["callout",U(g)])},[n("div",S,[A(h,{class:d(["type-large margin-right-small",`color-${e.type}`]),icon:e.icon||`type:${e.type}`},null,8,["class","icon"]),n("div",x,[n("div",null,[c(a.$slots,"title",{},()=>[n("strong",null,m(e.title),1)])]),n("div",null,[c(a.$slots,"description",{},()=>[T(m(e.description),1)])])]),a.$slots.action?(u(),p("div",B,[c(a.$slots,"action")])):b("",!0)])],2))}};s.__docgenInfo={exportName:"default",displayName:"UluAlert",description:"",tags:{},props:[{name:"title",description:"Alert Title",type:{name:"string"}},{name:"description",description:"Alert description",type:{name:"string"}},{name:"icon",description:"Pass specific icon definition, else it will resolve based on common types",type:{name:"string"}},{name:"type",description:"Error, warning, info, success etc (must have these callout modifiers setup and this is used for type color [ie. color-error])",type:{name:"string"},defaultValue:{func:!1,value:'"danger"'}},{name:"compact",description:"Compact callout style",type:{name:"boolean"}},{name:"modifiers",description:"Modifiers (to add any modifier classes based on base class [ie. 'tertiary'])",type:{name:"string|array"}}],slots:[{name:"title"},{name:"description"},{name:"action"}],sourceFiles:["/Users/joescherben/Personal/Projects/ULU/frontend-vue/lib/components/elements/UluAlert.vue"]};const N={title:"Components/Elements/UluAlert",component:s,args:{title:"Alert Title",description:"This is the description of the alert. It provides more details about the message being conveyed."},argTypes:{title:{control:"text"},description:{control:"text"},icon:{control:"text"},type:{control:"select",options:["danger","warning","info","success"]},compact:{control:"boolean"}}},i={args:{type:"danger",title:"Danger Alert",description:"This is an example of a danger alert. The icon is automatically determined by the type."},render:e=>({components:{UluAlert:s},setup(){return{args:e}},template:'<UluAlert v-bind="args" />'})},t={render:()=>({components:{UluAlert:s},template:`
      <div style="display: flex; flex-direction: column; gap: 1rem;">
        <UluAlert type="danger" title="Danger" description="This is a danger alert." />
        <UluAlert type="warning" title="Warning" description="This is a warning alert." />
        <UluAlert type="info" title="Info" description="This is an info alert." />
        <UluAlert type="success" title="Success" description="This is a success alert." />
      </div>
    `}),argTypes:{title:{table:{disable:!0}},description:{table:{disable:!0}},icon:{table:{disable:!0}},type:{table:{disable:!0}},compact:{table:{disable:!0}}}},o={...t,args:{compact:!0},argTypes:{...t.argTypes}},l={render:e=>({components:{UluAlert:s,UluButton:v},setup(){return{args:e}},template:`
      <UluAlert v-bind="args">
        <template #action>
          <UluButton size="small">Action</UluButton>
        </template>
      </UluAlert>
    `}),args:{type:"info",title:"Action Required",description:"This alert has an action button provided via the action slot."}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'danger',
    title: 'Danger Alert',
    description: 'This is an example of a danger alert. The icon is automatically determined by the type.'
  },
  render: args => ({
    components: {
      UluAlert
    },
    setup() {
      return {
        args
      };
    },
    template: \`<UluAlert v-bind="args" />\`
  })
}`,...i.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      UluAlert
    },
    template: \`
      <div style="display: flex; flex-direction: column; gap: 1rem;">
        <UluAlert type="danger" title="Danger" description="This is a danger alert." />
        <UluAlert type="warning" title="Warning" description="This is a warning alert." />
        <UluAlert type="info" title="Info" description="This is an info alert." />
        <UluAlert type="success" title="Success" description="This is a success alert." />
      </div>
    \`
  }),
  // Disable controls for props that are manually set in this story
  argTypes: {
    title: {
      table: {
        disable: true
      }
    },
    description: {
      table: {
        disable: true
      }
    },
    icon: {
      table: {
        disable: true
      }
    },
    type: {
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
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  ...AllTypes,
  // Reuse the render function from AllTypes
  args: {
    compact: true
  },
  argTypes: {
    ...AllTypes.argTypes
  }
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      UluAlert,
      UluButton
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <UluAlert v-bind="args">
        <template #action>
          <UluButton size="small">Action</UluButton>
        </template>
      </UluAlert>
    \`
  }),
  args: {
    type: 'info',
    title: 'Action Required',
    description: 'This alert has an action button provided via the action slot.'
  }
}`,...l.parameters?.docs?.source}}};const V=["Default","AllTypes","Compact","WithAction"];export{t as AllTypes,o as Compact,i as Default,l as WithAction,V as __namedExportsOrder,N as default};
