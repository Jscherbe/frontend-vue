import { ref } from "vue";
import UluModal from "./UluModal.vue";
import UluButton from "../elements/UluButton.vue";
import placeholder from "../../utils/placeholder";

export default {
  component: UluModal,
  // title: 'Components/UluModal',
  tags: ['autodocs'],
};

const Template = (args) => ({
  components: { UluModal, UluButton },
  setup() {
    const isModalOpen = ref(false); 
    return { args, isModalOpen };
  },
  template: `
    <div>
      <UluButton @click="isModalOpen = true">
        Show Modal
      </UluButton>
      <UluModal v-model="isModalOpen" v-bind="args">
        <template #default="{ close }">
          <p>
            This is the main content of the modal. The visibility is controlled by <code>v-model</code>.
          </p>
          ${ placeholder.paragraph }
          <p>
            <UluButton @click="close" text="Close"/>
          </p>
        </template>
      </UluModal>
    </div>
  `
});

export const Default = Template.bind({});
Default.args = {
  title: "Default Modal"
};

// Show Source doesn't work for this component (since it has a slot and prop with same name)
Default.parameters = {
  docs: {
    source: {
      code: `
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
</script>
      `,
      language: 'html', // Ensure correct syntax highlighting
      type: 'code',    // Crucial: Tells Storybook to use this exact string
    },
  },
};

export const NoTeleport = Template.bind({});
NoTeleport.args = {
  title: "Non-Teleported Modal",
  teleport: false
};

export const PositionLeft = Template.bind({});
PositionLeft.args = {
  title: "Modal Title",
  position: "left"
};

export const PositionRight = Template.bind({});
PositionRight.args = {
  title: "Modal Title",
  position: "right"
};

export const PositionLeftResizer = Template.bind({});
PositionLeftResizer.args = {
  title: "Modal Title",
  position: "left",
  allowResize: true
};

export const PositionRightResizer = Template.bind({});
PositionRightResizer.args = {
  title: "Modal Title",
  position: "right",
  allowResize: true
};

export const PositionCenterResize = Template.bind({});
PositionCenterResize.args = {
  title: "Modal Title",
  position: "center",
  allowResize: true
};

export const NoPreventScroll = Template.bind({});
NoPreventScroll.args = {
  title: "Modal Title",
  position: "right",
  preventScroll: false
};

export const PreventScrollNoPreventScrollShift = Template.bind({});
PreventScrollNoPreventScrollShift.args = {
  title: "Modal Title",
  position: "right",
  preventScroll: true,
  preventScrollShift: false
};


