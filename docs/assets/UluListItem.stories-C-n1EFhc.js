import{_ as r}from"./UluListItem-Cb0dztFx.js";import{p as a,c as o}from"./iframe-1mCEuU3h.js";import"./preload-helper-BJwshlQW.js";const i={tags:["autodocs"],component:r,decorators:[e=>({setup(){a("uluListContext",o(()=>({classes:{item:"ulu-injected-item-class"},itemElement:"li"})))},template:'<ul class="ulu-list-demo-container"><story /></ul>'})],argTypes:{classes:{control:"object"},element:{control:"text"}}},s={render:e=>({components:{UluListItem:r},setup(){return{args:e}},template:`
      <UluListItem v-bind="args">
        This is a standard list item
      </UluListItem>
    `})},t={args:{element:"div"},render:e=>({components:{UluListItem:r},setup(){return{args:e}},template:`
      <UluListItem v-bind="args">
        I am rendered as a <strong>div</strong>
      </UluListItem>
    `})},n={args:{classes:"custom-class-from-prop"},render:e=>({components:{UluListItem:r},setup(){return{args:e}},template:`
      <UluListItem v-bind="args">
        Item with custom classes (check DOM)
      </UluListItem>
    `})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      UluListItem
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <UluListItem v-bind="args">
        This is a standard list item
      </UluListItem>
    \`
  })
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    element: 'div'
  },
  render: args => ({
    components: {
      UluListItem
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <UluListItem v-bind="args">
        I am rendered as a <strong>div</strong>
      </UluListItem>
    \`
  })
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    classes: 'custom-class-from-prop'
  },
  render: args => ({
    components: {
      UluListItem
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <UluListItem v-bind="args">
        Item with custom classes (check DOM)
      </UluListItem>
    \`
  })
}`,...n.parameters?.docs?.source}}};const c=["Default","CustomElement","CustomClasses"];export{n as CustomClasses,t as CustomElement,s as Default,c as __namedExportsOrder,i as default};
