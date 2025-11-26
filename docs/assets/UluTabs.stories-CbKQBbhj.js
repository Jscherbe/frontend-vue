import{createBlock as u,openBlock as o,unref as r,withCtx as i,renderSlot as b,normalizeProps as p,guardReactiveProps as U,createElementVNode as _,normalizeClass as g}from"vue";import{Tab as v,TabGroup as L,TabList as y,TabPanel as N,TabPanels as x}from"@headlessui/vue";const T={__name:"UluTab",setup(e){return(a,c)=>(o(),u(r(v),null,{default:i(n=>[b(a.$slots,"default",p(U(n)))]),_:3}))}};T.__docgenInfo={exportName:"default",displayName:"UluTab",description:"",tags:{},slots:[{name:"default",scoped:!0,bindings:[]}],sourceFiles:["/Users/joescherben/Personal/Projects/ULU/frontend-vue/lib/components/collapsible/UluTab.vue"]};const d=Object.assign({inheritAttrs:!1},{__name:"UluTabGroup",props:{defaultIndex:Number,vertical:Boolean},setup(e){return(a,c)=>(o(),u(r(L),{defaultIndex:e.defaultIndex,vertical:e.vertical},{default:i(n=>[_("div",{class:g(["tabs",{"tabs--vertical":e.vertical}])},[b(a.$slots,"default",p(U(n)))],2)]),_:3},8,["defaultIndex","vertical"]))}});d.__docgenInfo={exportName:"default",displayName:"UluTabGroup",description:"",tags:{},props:[{name:"defaultIndex",description:"Active tab index by default",type:{name:"number"}},{name:"vertical",description:"Whether or not to use vertical layout",type:{name:"boolean"}}],slots:[{name:"default",scoped:!0,bindings:[]}],sourceFiles:["/Users/joescherben/Personal/Projects/ULU/frontend-vue/lib/components/collapsible/UluTabGroup.vue"]};const f={__name:"UluTabList",setup(e){return(a,c)=>(o(),u(r(y),{class:"tabs__tablist"},{default:i(()=>[b(a.$slots,"default")]),_:3}))}};f.__docgenInfo={exportName:"default",displayName:"UluTabList",description:"",tags:{},slots:[{name:"default"}],sourceFiles:["/Users/joescherben/Personal/Projects/ULU/frontend-vue/lib/components/collapsible/UluTabList.vue"]};const m={__name:"UluTabPanel",setup(e){return(a,c)=>(o(),u(r(N),null,{default:i(n=>[b(a.$slots,"default",p(U(n)))]),_:3}))}};m.__docgenInfo={exportName:"default",displayName:"UluTabPanel",description:"",tags:{},slots:[{name:"default",scoped:!0,bindings:[]}],sourceFiles:["/Users/joescherben/Personal/Projects/ULU/frontend-vue/lib/components/collapsible/UluTabPanel.vue"]};const P={__name:"UluTabPanels",setup(e){return(a,c)=>(o(),u(r(x),null,{default:i(n=>[b(a.$slots,"default",p(U(n)))]),_:3}))}};P.__docgenInfo={exportName:"default",displayName:"UluTabPanels",description:"",tags:{},slots:[{name:"default",scoped:!0,bindings:[]}],sourceFiles:["/Users/joescherben/Personal/Projects/ULU/frontend-vue/lib/components/collapsible/UluTabPanels.vue"]};const I={component:d,subcomponents:{UluTabList:f,UluTab:T,UluTabPanels:P,UluTabPanel:m},tags:["autodocs"]},h=e=>({components:{UluTabGroup:d,UluTabList:f,UluTab:T,UluTabPanels:P,UluTabPanel:m},setup(){return{args:e}},template:`
    <UluTabGroup v-bind="args">
      <UluTabList>
        <UluTab>Profile</UluTab>
        <UluTab>Settings</UluTab>
        <UluTab>Notifications</UluTab>
      </UluTabList>
      <UluTabPanels>
        <UluTabPanel>
          <h3>User Profile</h3>
          <p>This is where your profile information will be displayed.</p>
        </UluTabPanel>
        <UluTabPanel>
          <h3>Account Settings</h3>
          <p>Manage your account preferences here.</p>
        </UluTabPanel>
        <UluTabPanel>
          <h3>Your Notifications</h3>
          <p>You have 3 new notifications.</p>
        </UluTabPanel>
      </UluTabPanels>
    </UluTabGroup>
  `}),l=h.bind({});l.args={};const s=h.bind({});s.args={vertical:!0};const t=h.bind({});t.args={defaultIndex:2};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`args => ({
  components: {
    UluTabGroup,
    UluTabList,
    UluTab,
    UluTabPanels,
    UluTabPanel
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <UluTabGroup v-bind="args">
      <UluTabList>
        <UluTab>Profile</UluTab>
        <UluTab>Settings</UluTab>
        <UluTab>Notifications</UluTab>
      </UluTabList>
      <UluTabPanels>
        <UluTabPanel>
          <h3>User Profile</h3>
          <p>This is where your profile information will be displayed.</p>
        </UluTabPanel>
        <UluTabPanel>
          <h3>Account Settings</h3>
          <p>Manage your account preferences here.</p>
        </UluTabPanel>
        <UluTabPanel>
          <h3>Your Notifications</h3>
          <p>You have 3 new notifications.</p>
        </UluTabPanel>
      </UluTabPanels>
    </UluTabGroup>
  \`
})`,...l.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`args => ({
  components: {
    UluTabGroup,
    UluTabList,
    UluTab,
    UluTabPanels,
    UluTabPanel
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <UluTabGroup v-bind="args">
      <UluTabList>
        <UluTab>Profile</UluTab>
        <UluTab>Settings</UluTab>
        <UluTab>Notifications</UluTab>
      </UluTabList>
      <UluTabPanels>
        <UluTabPanel>
          <h3>User Profile</h3>
          <p>This is where your profile information will be displayed.</p>
        </UluTabPanel>
        <UluTabPanel>
          <h3>Account Settings</h3>
          <p>Manage your account preferences here.</p>
        </UluTabPanel>
        <UluTabPanel>
          <h3>Your Notifications</h3>
          <p>You have 3 new notifications.</p>
        </UluTabPanel>
      </UluTabPanels>
    </UluTabGroup>
  \`
})`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`args => ({
  components: {
    UluTabGroup,
    UluTabList,
    UluTab,
    UluTabPanels,
    UluTabPanel
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <UluTabGroup v-bind="args">
      <UluTabList>
        <UluTab>Profile</UluTab>
        <UluTab>Settings</UluTab>
        <UluTab>Notifications</UluTab>
      </UluTabList>
      <UluTabPanels>
        <UluTabPanel>
          <h3>User Profile</h3>
          <p>This is where your profile information will be displayed.</p>
        </UluTabPanel>
        <UluTabPanel>
          <h3>Account Settings</h3>
          <p>Manage your account preferences here.</p>
        </UluTabPanel>
        <UluTabPanel>
          <h3>Your Notifications</h3>
          <p>You have 3 new notifications.</p>
        </UluTabPanel>
      </UluTabPanels>
    </UluTabGroup>
  \`
})`,...t.parameters?.docs?.source}}};const S=["Default","Vertical","DefaultIndex"];export{l as Default,t as DefaultIndex,s as Vertical,S as __namedExportsOrder,I as default};
