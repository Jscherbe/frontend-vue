import{U as m,l as f}from"./iframe-ClpBgbxC.js";import{U as g}from"./UluButton-jGpN6m1h.js";import{U as h}from"./UluPlaceholderText-DLmjU0H6.js";import"./preload-helper-BJwshlQW.js";const T={component:m,tags:["autodocs"]},e=p=>({components:{UluModal:m,UluButton:g,UluPlaceholderText:h},setup(){const u=f(!1);return{args:p,isModalOpen:u}},template:`
    <div>
      <UluButton @click="isModalOpen = true">
        Show Modal
      </UluButton>
      <UluModal v-model="isModalOpen" v-bind="args">
        <template #default="{ close }">
          <p>
            This is the main content of the modal. The visibility is controlled by <code>v-model</code>.
          </p>
          <UluPlaceholderText/>
          <p>
            <UluButton @click="close" text="Close"/>
          </p>
        </template>
      </UluModal>
    </div>
  `}),t={render:e,args:{title:"Default Modal"},parameters:{docs:{source:{code:`
<template>
  <UluButton @click="isModalOpen = true">
    Show Modal
  </UluButton>
  <UluModal v-model="isModalOpen" title="Default Modal">
    <template #default="{ close }">
      <p>This is the main content of the modal.</p>
      <p><UluButton @click="close" text="Close"/></p>
    </template>
  </UluModal>
</template>

<script setup>
import { ref } from 'vue';
import { UluModal, UluButton } from '@ulu/frontend-vue';

const isModalOpen = ref(false); // Controls modal visibility
<\/script>
      `,language:"html",type:"code"}}}},o={render:e,args:{title:"Non-Teleported Modal",teleport:!1}},l={render:e,args:{title:"Modal Title",position:"left"}},n={render:e,args:{title:"Modal Title",position:"right"}},r={render:e,args:{title:"Modal Title",position:"left",allowResize:!0}},s={render:e,args:{title:"Modal Title",position:"right",allowResize:!0}},a={render:e,args:{title:"Modal Title",position:"center",allowResize:!0}},i={render:e,args:{title:"Modal Title",position:"right",preventScroll:!1}},c={render:e,args:{title:"Modal Title",position:"right",preventScroll:!0,preventScrollShift:!1}},d={render:p=>({components:{UluModal:m,UluButton:g,UluPlaceholderText:h},setup(){const u=f(!1);return{args:p,isModalOpen:u}},template:`
      <div>
        <UluPlaceholderText :amount="5" />
        <UluButton @click="isModalOpen = true">
          Show Modal
        </UluButton>
        <UluModal v-model="isModalOpen" v-bind="args">
          <template #default="{ close }">
            <p>
              This is the main content of the modal. The visibility is controlled by <code>v-model</code>.
            </p>
            <UluPlaceholderText/>
            <p>
              <UluButton @click="close" text="Close"/>
            </p>
          </template>
        </UluModal>
      </div>
    `}),args:{title:"Content Above"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render,
  args: {
    title: "Default Modal"
  },
  // Show Source doesn't work for this component (since it has a slot and prop with same name)
  parameters: {
    docs: {
      source: {
        code: \`
<template>
  <UluButton @click="isModalOpen = true">
    Show Modal
  </UluButton>
  <UluModal v-model="isModalOpen" title="Default Modal">
    <template #default="{ close }">
      <p>This is the main content of the modal.</p>
      <p><UluButton @click="close" text="Close"/></p>
    </template>
  </UluModal>
</template>

<script setup>
import { ref } from 'vue';
import { UluModal, UluButton } from '@ulu/frontend-vue';

const isModalOpen = ref(false); // Controls modal visibility
<\/script>
      \`,
        language: 'html',
        // Ensure correct syntax highlighting
        type: 'code' // Crucial: Tells Storybook to use this exact string
      }
    }
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render,
  args: {
    title: "Non-Teleported Modal",
    teleport: false
  }
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render,
  args: {
    title: "Modal Title",
    position: "left"
  }
}`,...l.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render,
  args: {
    title: "Modal Title",
    position: "right"
  }
}`,...n.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render,
  args: {
    title: "Modal Title",
    position: "left",
    allowResize: true
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render,
  args: {
    title: "Modal Title",
    position: "right",
    allowResize: true
  }
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render,
  args: {
    title: "Modal Title",
    position: "center",
    allowResize: true
  }
}`,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render,
  args: {
    title: "Modal Title",
    position: "right",
    preventScroll: false
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render,
  args: {
    title: "Modal Title",
    position: "right",
    preventScroll: true,
    preventScrollShift: false
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      UluModal,
      UluButton,
      UluPlaceholderText
    },
    setup() {
      const isModalOpen = ref(false);
      return {
        args,
        isModalOpen
      };
    },
    template: \`
      <div>
        <UluPlaceholderText :amount="5" />
        <UluButton @click="isModalOpen = true">
          Show Modal
        </UluButton>
        <UluModal v-model="isModalOpen" v-bind="args">
          <template #default="{ close }">
            <p>
              This is the main content of the modal. The visibility is controlled by <code>v-model</code>.
            </p>
            <UluPlaceholderText/>
            <p>
              <UluButton @click="close" text="Close"/>
            </p>
          </template>
        </UluModal>
      </div>
    \`
  }),
  args: {
    title: "Content Above"
  }
}`,...d.parameters?.docs?.source}}};const P=["Default","NoTeleport","PositionLeft","PositionRight","PositionLeftResizer","PositionRightResizer","PositionCenterResize","NoPreventScroll","PreventScrollNoPreventScrollShift","ContentAbove"];export{d as ContentAbove,t as Default,i as NoPreventScroll,o as NoTeleport,a as PositionCenterResize,l as PositionLeft,r as PositionLeftResizer,n as PositionRight,s as PositionRightResizer,c as PreventScrollNoPreventScrollShift,P as __namedExportsOrder,T as default};
