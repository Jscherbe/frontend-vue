import{resolveComponent as b,createElementBlock as p,openBlock as d,normalizeClass as u,createElementVNode as r,createVNode as h,createCommentVNode as U,renderSlot as l,toDisplayString as m,createTextVNode as T,computed as v}from"vue";import{U as g}from"./UluButton-CVFX2koK.js";import{a as _,_ as S,u as x}from"./iframe-DYOmpgae.js";import"vue-router";import"./preload-helper-BJwshlQW.js";import"@floating-ui/vue";import"@ulu/utils/templating.js";import"@ulu/utils/browser/dom.js";import"@ulu/frontend";const y={name:"UluAlert",components:{UluButton:g,UluIcon:S},props:{title:String,description:String,icon:String,type:{type:String,default:"danger"},compact:Boolean,modifiers:[String,Array]},setup(e){const{resolvedModifiers:c}=x({props:e,baseClass:"callout",internal:v(()=>({[e.type]:e.type,compact:e.compact}))});return{resolvedModifiers:c}}},B={class:"layout-flex"},C={class:"type-small"},w={key:0,class:"margin-left-auto align-self-center"};function D(e,c,n,f,I,N){const A=b("UluIcon");return d(),p("div",{class:u(["callout",f.resolvedModifiers])},[r("div",B,[h(A,{class:u(["type-large margin-right-small",`color-${n.type}`]),icon:n.icon||`type:${n.type}`},null,8,["class","icon"]),r("div",C,[r("div",null,[l(e.$slots,"title",{},()=>[r("strong",null,m(n.title),1)])]),r("div",null,[l(e.$slots,"description",{},()=>[T(m(n.description),1)])])]),e.$slots.action?(d(),p("div",w,[l(e.$slots,"action")])):U("",!0)])],2)}const o=_(y,[["render",D]]);y.__docgenInfo={displayName:"UluAlert",description:"Callout with alert layout",tags:{},exportName:"default",props:[{name:"title",description:"Alert Title",type:{name:"string"}},{name:"description",description:"Alert description",type:{name:"string"}},{name:"icon",description:"Pass specific icon definition, else it will resolve based on common types",type:{name:"string"}},{name:"type",description:"Error, warning, info, success etc (must have these callout modifiers setup and this is used for type color [ie. color-error])",type:{name:"string"},defaultValue:{func:!1,value:'"danger"'}},{name:"compact",description:"Compact callout style",type:{name:"boolean"}},{name:"modifiers",description:"Modifiers (to add any modifier classes based on base class [ie. 'tertiary'])",type:{name:"string|array"}}],slots:[{name:"title"},{name:"description"},{name:"action"}],sourceFiles:["/Users/joescherben/Personal/Projects/ULU/frontend-vue/lib/components/elements/UluAlert.vue"]};const j={title:"Components/Elements/UluAlert",component:o,args:{title:"Alert Title",description:"This is the description of the alert. It provides more details about the message being conveyed."},argTypes:{title:{control:"text"},description:{control:"text"},icon:{control:"text"},type:{control:"select",options:["danger","warning","info","success"]},compact:{control:"boolean"}}},s={args:{type:"danger",title:"Danger Alert",description:"This is an example of a danger alert. The icon is automatically determined by the type."},render:e=>({components:{UluAlert:o},setup(){return{args:e}},template:'<UluAlert v-bind="args" />'})},t={render:()=>({components:{UluAlert:o},template:`
      <div style="display: flex; flex-direction: column; gap: 1rem;">
        <UluAlert type="danger" title="Danger" description="This is a danger alert." />
        <UluAlert type="warning" title="Warning" description="This is a warning alert." />
        <UluAlert type="info" title="Info" description="This is an info alert." />
        <UluAlert type="success" title="Success" description="This is a success alert." />
      </div>
    `}),argTypes:{title:{table:{disable:!0}},description:{table:{disable:!0}},icon:{table:{disable:!0}},type:{table:{disable:!0}},compact:{table:{disable:!0}}}},i={...t,args:{compact:!0},argTypes:{...t.argTypes}},a={render:e=>({components:{UluAlert:o,UluButton:g},setup(){return{args:e}},template:`
      <UluAlert v-bind="args">
        <template #action>
          <UluButton size="small">Action</UluButton>
        </template>
      </UluAlert>
    `}),args:{type:"info",title:"Action Required",description:"This alert has an action button provided via the action slot."}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  ...AllTypes,
  // Reuse the render function from AllTypes
  args: {
    compact: true
  },
  argTypes: {
    ...AllTypes.argTypes
  }
}`,...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};const q=["Default","AllTypes","Compact","WithAction"];export{t as AllTypes,i as Compact,s as Default,a as WithAction,q as __namedExportsOrder,j as default};
