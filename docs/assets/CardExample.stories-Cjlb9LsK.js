import{_ as a}from"./UluCard-D2uBFeJt.js";import{_ as o}from"./UluSkeletonMedia-ByuTzTyp.js";import{_ as s}from"./UluSkeletonText-DuBhztY2.js";import{_ as r}from"./iframe-ULHYlDKO.js";import"./preload-helper-BJwshlQW.js";const d={parameters:{docs:{description:{component:"An example of how to create a skeleton loading state for a card component, using `UluCard` and skeleton elements. To demonstrate how this could be applied to different components/layouts"}}}},t=l=>({components:{UluCard:a,UluSkeletonMedia:o,UluSkeletonText:s,UluIcon:r},setup(){return{args:l}},template:`
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
  `}),n=t.bind({});n.storyName="Skeleton Card";const e=t.bind({});e.args={horizontal:!0};e.storyName="Horizontal Skeleton Card";n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`args => ({
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
})`,...n.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`args => ({
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
})`,...e.parameters?.docs?.source}}};const U=["Default","Horizontal"];export{n as Default,e as Horizontal,U as __namedExportsOrder,d as default};
