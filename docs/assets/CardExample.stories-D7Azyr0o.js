import{_ as a}from"./UluCard-2Ah9BD2d.js";import{_ as o}from"./UluSkeletonMedia-GJGmJGWD.js";import{_ as r}from"./UluSkeletonText-CUcGxRzw.js";import{_ as s}from"./iframe-Cd2AvOWl.js";import"./UluImage-BhD6-YTx.js";import"./preload-helper-BJwshlQW.js";const U={parameters:{docs:{description:{component:"An example of how to create a skeleton loading state for a card component, using `UluCard` and skeleton elements. To demonstrate how this could be applied to different components/layouts"}}}},n=l=>({components:{UluCard:a,UluSkeletonMedia:o,UluSkeletonText:r,UluIcon:s},setup(){return{args:l}},template:`
    <UluCard v-bind="args" class="skeleton" imageIcon>
      <template #image>
        <UluIcon class="skeleton type-large-xx" icon="type:image"/>
      </template>
      <template #title>
        <UluSkeletonText inline style="min-width: 100px" />
      </template>
      <template #body>
        <p><UluSkeletonText inline /></p>
        <p><UluSkeletonText inline /></p>
      </template>
    </UluCard>
  `}),t=n.bind({});t.storyName="Skeleton Card";const e=n.bind({});e.args={horizontal:!0};e.storyName="Horizontal Skeleton Card";t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`args => ({
  components: {
    UluCard,
    UluSkeletonMedia,
    UluSkeletonText,
    UluIcon
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <UluCard v-bind="args" class="skeleton" imageIcon>
      <template #image>
        <UluIcon class="skeleton type-large-xx" icon="type:image"/>
      </template>
      <template #title>
        <UluSkeletonText inline style="min-width: 100px" />
      </template>
      <template #body>
        <p><UluSkeletonText inline /></p>
        <p><UluSkeletonText inline /></p>
      </template>
    </UluCard>
  \`
})`,...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`args => ({
  components: {
    UluCard,
    UluSkeletonMedia,
    UluSkeletonText,
    UluIcon
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <UluCard v-bind="args" class="skeleton" imageIcon>
      <template #image>
        <UluIcon class="skeleton type-large-xx" icon="type:image"/>
      </template>
      <template #title>
        <UluSkeletonText inline style="min-width: 100px" />
      </template>
      <template #body>
        <p><UluSkeletonText inline /></p>
        <p><UluSkeletonText inline /></p>
      </template>
    </UluCard>
  \`
})`,...e.parameters?.docs?.source}}};const k=["Default","Horizontal"];export{t as Default,e as Horizontal,k as __namedExportsOrder,U as default};
