import{g as h,_ as A,d as p,b as s,v as U,f as T,n as d,h as v,e as l,u as _,c as S,o as u,t as m,j as x}from"./iframe-CSRVEcn3.js";import{U as g}from"./UluButton-BJviAQDm.js";import"./preload-helper-BJwshlQW.js";const y={name:"UluAlert",components:{UluButton:g,UluIcon:A},props:{title:String,description:String,icon:String,type:{type:String,default:"danger"},compact:Boolean,modifiers:[String,Array]},setup(e){const{resolvedModifiers:c}=_({props:e,baseClass:"callout",internal:S(()=>({[e.type]:e.type,compact:e.compact}))});return{resolvedModifiers:c}}},B={class:"layout-flex"},C={class:"type-small"},w={key:0,class:"margin-left-auto align-self-center"};function D(e,c,n,f,I,N){const b=v("UluIcon");return u(),p("div",{class:d(["callout",f.resolvedModifiers])},[s("div",B,[U(b,{class:d(["type-large margin-right-small",`color-${n.type}`]),icon:n.icon||`type:${n.type}`},null,8,["class","icon"]),s("div",C,[s("div",null,[l(e.$slots,"title",{},()=>[s("strong",null,m(n.title),1)])]),s("div",null,[l(e.$slots,"description",{},()=>[x(m(n.description),1)])])]),e.$slots.action?(u(),p("div",w,[l(e.$slots,"action")])):T("",!0)])],2)}const o=h(y,[["render",D]]);y.__docgenInfo={displayName:"UluAlert",description:"Callout with alert layout",tags:{},exportName:"default",props:[{name:"title",description:"Alert Title",type:{name:"string"}},{name:"description",description:"Alert description",type:{name:"string"}},{name:"icon",description:"Pass specific icon definition, else it will resolve based on common types",type:{name:"string"}},{name:"type",description:"Error, warning, info, success etc (must have these callout modifiers setup and this is used for type color [ie. color-error])",type:{name:"string"},defaultValue:{func:!1,value:'"danger"'}},{name:"compact",description:"Compact callout style",type:{name:"boolean"}},{name:"modifiers",description:"Modifiers (to add any modifier classes based on base class [ie. 'tertiary'])",type:{name:"string|array"}}],slots:[{name:"title"},{name:"description"},{name:"action"}],sourceFiles:["/Users/joescherben/Personal/Projects/ULU/frontend-vue/lib/components/elements/UluAlert.vue"]};const M={title:"Components/Elements/UluAlert",component:o,args:{title:"Alert Title",description:"This is the description of the alert. It provides more details about the message being conveyed."},argTypes:{title:{control:"text"},description:{control:"text"},icon:{control:"text"},type:{control:"select",options:["danger","warning","info","success"]},compact:{control:"boolean"}}},r={args:{type:"danger",title:"Danger Alert",description:"This is an example of a danger alert. The icon is automatically determined by the type."},render:e=>({components:{UluAlert:o},setup(){return{args:e}},template:'<UluAlert v-bind="args" />'})},t={render:()=>({components:{UluAlert:o},template:`
      <div style="display: flex; flex-direction: column; gap: 1rem;">
        <UluAlert type="danger" title="Danger" description="This is a danger alert." />
        <UluAlert type="warning" title="Warning" description="This is a warning alert." />
        <UluAlert type="info" title="Info" description="This is an info alert." />
        <UluAlert type="success" title="Success" description="This is a success alert." />
      </div>
    `}),argTypes:{title:{table:{disable:!0}},description:{table:{disable:!0}},icon:{table:{disable:!0}},type:{table:{disable:!0}},compact:{table:{disable:!0}}}},a={...t,args:{compact:!0},argTypes:{...t.argTypes}},i={render:e=>({components:{UluAlert:o,UluButton:g},setup(){return{args:e}},template:`
      <UluAlert v-bind="args">
        <template #action>
          <UluButton size="small">Action</UluButton>
        </template>
      </UluAlert>
    `}),args:{type:"info",title:"Action Required",description:"This alert has an action button provided via the action slot."}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  ...AllTypes,
  // Reuse the render function from AllTypes
  args: {
    compact: true
  },
  argTypes: {
    ...AllTypes.argTypes
  }
}`,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const W=["Default","AllTypes","Compact","WithAction"];export{t as AllTypes,a as Compact,r as Default,i as WithAction,W as __namedExportsOrder,M as default};
