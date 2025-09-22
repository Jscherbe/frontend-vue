import { ref } from "vue";
import UluModal from "./UluModal.vue";
import UluButton from "../elements/UluButton.vue";
import UluPlaceholderText from "../utils/UluPlaceholderText.vue";

export default {
  component: UluModal,
  // title: 'Components/UluModal',
  tags: ['autodocs'],
};

const render = (args) => ({
  components: { UluModal, UluButton, UluPlaceholderText },
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
          <UluPlaceholderText/>
          <p>
            <UluButton @click="close" text="Close"/>
          </p>
        </template>
      </UluModal>
    </div>
  `
});

export const Default = {
  render,
  args: {
    title: "Default Modal"
  },
  // Show Source doesn't work for this component (since it has a slot and prop with same name)
  parameters: {
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
  }
};

export const NoTeleport = {
  render,
  args: {
    title: "Non-Teleported Modal",
    teleport: false
  }
};

export const PositionLeft = {
  render,
  args: {
    title: "Modal Title",
    position: "left"
  }
};

export const PositionRight = {
  render,
  args: {
    title: "Modal Title",
    position: "right"
  }
};

export const PositionLeftResizer = {
  render,
  args: {
    title: "Modal Title",
    position: "left",
    allowResize: true
  }
};

export const PositionRightResizer = {
  render,
  args: {
    title: "Modal Title",
    position: "right",
    allowResize: true
  }
};

export const PositionCenterResize = {
  render,
  args: {
    title: "Modal Title",
    position: "center",
    allowResize: true
  }
};

export const NoPreventScroll = {
  render,
  args: {
    title: "Modal Title",
    position: "right",
    preventScroll: false
  }
};

export const PreventScrollNoPreventScrollShift = {
  render,
  args: {
    title: "Modal Title",
    position: "right",
    preventScroll: true,
    preventScrollShift: false
  }
};

export const ContentAbove = {
  render: (args) => ({
    components: { UluModal, UluButton, UluPlaceholderText },
    setup() {
      const isModalOpen = ref(false);
      return { args, isModalOpen };
    },
    template: `
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
    `
  }),
  args: {
    title: "Content Above"
  }
};
