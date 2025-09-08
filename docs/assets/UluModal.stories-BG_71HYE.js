import{aU as u,a as m,z as M}from"./iframe-DpYtvPQB.js";import"./preload-helper-BJwshlQW.js";const h={paragraph:"<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam commodo felis nisi, nec pretium justo varius sit amet. Vestibulum vitae quam in velit scelerisque tincidunt et vitae mauris. Fusce aliquet, ipsum sit amet lacinia euismod, est risus rhoncus ligula, eget egestas urna ligula nec enim. Fusce vulputate ornare ligula ut tempus. Sed accumsan orci sed turpis iaculis, at aliquam nibh rhoncus. Maecenas porta lorem a sem tincidunt, sed tristique ex laoreet. Nullam accumsan metus at lobortis interdum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam sagittis sem erat, quis fermentum lectus ultrices quis.</p>"},g={component:u,tags:["autodocs"]},e=c=>({components:{UluModal:u,UluButton:m},setup(){const p=M(!1);return{args:c,isModalOpen:p}},template:`
    <div>
      <UluButton @click="isModalOpen = true">
        Show Modal
      </UluButton>
      <UluModal v-model="isModalOpen" v-bind="args">
        <template #default="{ close }">
          <p>
            This is the main content of the modal. The visibility is controlled by <code>v-model</code>.
          </p>
          ${h.paragraph}
          <p>
            <UluButton @click="close" text="Close"/>
          </p>
        </template>
      </UluModal>
    </div>
  `}),n=e.bind({});n.args={title:"Default Modal"};n.parameters={docs:{source:{code:`
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
      `,language:"html",type:"code"}}};const t=e.bind({});t.args={title:"Non-Teleported Modal",teleport:!1};const o=e.bind({});o.args={title:"Modal Title",position:"left"};const l=e.bind({});l.args={title:"Modal Title",position:"right"};const a=e.bind({});a.args={title:"Modal Title",position:"left",allowResize:!0};const s=e.bind({});s.args={title:"Modal Title",position:"right",allowResize:!0};const i=e.bind({});i.args={title:"Modal Title",position:"center",allowResize:!0};const r=e.bind({});r.args={title:"Modal Title",position:"right",preventScroll:!1};const d=e.bind({});d.args={title:"Modal Title",position:"right",preventScroll:!0,preventScrollShift:!1};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`args => ({
  components: {
    UluModal,
    UluButton
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
      <UluButton @click="isModalOpen = true">
        Show Modal
      </UluButton>
      <UluModal v-model="isModalOpen" v-bind="args">
        <template #default="{ close }">
          <p>
            This is the main content of the modal. The visibility is controlled by <code>v-model</code>.
          </p>
          \${placeholder.paragraph}
          <p>
            <UluButton @click="close" text="Close"/>
          </p>
        </template>
      </UluModal>
    </div>
  \`
})`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`args => ({
  components: {
    UluModal,
    UluButton
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
      <UluButton @click="isModalOpen = true">
        Show Modal
      </UluButton>
      <UluModal v-model="isModalOpen" v-bind="args">
        <template #default="{ close }">
          <p>
            This is the main content of the modal. The visibility is controlled by <code>v-model</code>.
          </p>
          \${placeholder.paragraph}
          <p>
            <UluButton @click="close" text="Close"/>
          </p>
        </template>
      </UluModal>
    </div>
  \`
})`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`args => ({
  components: {
    UluModal,
    UluButton
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
      <UluButton @click="isModalOpen = true">
        Show Modal
      </UluButton>
      <UluModal v-model="isModalOpen" v-bind="args">
        <template #default="{ close }">
          <p>
            This is the main content of the modal. The visibility is controlled by <code>v-model</code>.
          </p>
          \${placeholder.paragraph}
          <p>
            <UluButton @click="close" text="Close"/>
          </p>
        </template>
      </UluModal>
    </div>
  \`
})`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`args => ({
  components: {
    UluModal,
    UluButton
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
      <UluButton @click="isModalOpen = true">
        Show Modal
      </UluButton>
      <UluModal v-model="isModalOpen" v-bind="args">
        <template #default="{ close }">
          <p>
            This is the main content of the modal. The visibility is controlled by <code>v-model</code>.
          </p>
          \${placeholder.paragraph}
          <p>
            <UluButton @click="close" text="Close"/>
          </p>
        </template>
      </UluModal>
    </div>
  \`
})`,...l.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`args => ({
  components: {
    UluModal,
    UluButton
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
      <UluButton @click="isModalOpen = true">
        Show Modal
      </UluButton>
      <UluModal v-model="isModalOpen" v-bind="args">
        <template #default="{ close }">
          <p>
            This is the main content of the modal. The visibility is controlled by <code>v-model</code>.
          </p>
          \${placeholder.paragraph}
          <p>
            <UluButton @click="close" text="Close"/>
          </p>
        </template>
      </UluModal>
    </div>
  \`
})`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`args => ({
  components: {
    UluModal,
    UluButton
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
      <UluButton @click="isModalOpen = true">
        Show Modal
      </UluButton>
      <UluModal v-model="isModalOpen" v-bind="args">
        <template #default="{ close }">
          <p>
            This is the main content of the modal. The visibility is controlled by <code>v-model</code>.
          </p>
          \${placeholder.paragraph}
          <p>
            <UluButton @click="close" text="Close"/>
          </p>
        </template>
      </UluModal>
    </div>
  \`
})`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`args => ({
  components: {
    UluModal,
    UluButton
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
      <UluButton @click="isModalOpen = true">
        Show Modal
      </UluButton>
      <UluModal v-model="isModalOpen" v-bind="args">
        <template #default="{ close }">
          <p>
            This is the main content of the modal. The visibility is controlled by <code>v-model</code>.
          </p>
          \${placeholder.paragraph}
          <p>
            <UluButton @click="close" text="Close"/>
          </p>
        </template>
      </UluModal>
    </div>
  \`
})`,...i.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`args => ({
  components: {
    UluModal,
    UluButton
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
      <UluButton @click="isModalOpen = true">
        Show Modal
      </UluButton>
      <UluModal v-model="isModalOpen" v-bind="args">
        <template #default="{ close }">
          <p>
            This is the main content of the modal. The visibility is controlled by <code>v-model</code>.
          </p>
          \${placeholder.paragraph}
          <p>
            <UluButton @click="close" text="Close"/>
          </p>
        </template>
      </UluModal>
    </div>
  \`
})`,...r.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`args => ({
  components: {
    UluModal,
    UluButton
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
      <UluButton @click="isModalOpen = true">
        Show Modal
      </UluButton>
      <UluModal v-model="isModalOpen" v-bind="args">
        <template #default="{ close }">
          <p>
            This is the main content of the modal. The visibility is controlled by <code>v-model</code>.
          </p>
          \${placeholder.paragraph}
          <p>
            <UluButton @click="close" text="Close"/>
          </p>
        </template>
      </UluModal>
    </div>
  \`
})`,...d.parameters?.docs?.source}}};const f=["Default","NoTeleport","PositionLeft","PositionRight","PositionLeftResizer","PositionRightResizer","PositionCenterResize","NoPreventScroll","PreventScrollNoPreventScrollShift"];export{n as Default,r as NoPreventScroll,t as NoTeleport,i as PositionCenterResize,o as PositionLeft,a as PositionLeftResizer,l as PositionRight,s as PositionRightResizer,d as PreventScrollNoPreventScrollShift,f as __namedExportsOrder,g as default};
