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

const renderIframe = (args) => ({
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
        <template v-if="args.iframeType === 'wrapped'">
          <div class="cms-wrapper-class" style="padding: 2rem;">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/y0sF5xhGreA?si=aRdiK0Xzf3zvHP_E"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
        </template>
        <template v-else-if="args.iframeType === 'document'">
          <iframe
            src="https://en.wikipedia.org/wiki/IFrame"
            title="Wikipedia article on IFrames"
          ></iframe>
        </template>
        <template v-else>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/y0sF5xhGreA?si=aRdiK0Xzf3zvHP_E"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </template>
      </UluModal>
    </div>
  `
});

export const AutoIframeMedia = {
  render: renderIframe,
  args: {
    title: "YouTube (Auto Aspect Ratio)",
    autoIframe: true,
    iframeType: 'media'
  }
};

export const AutoIframeMediaWrapped = {
  render: renderIframe,
  args: {
    title: "YouTube (Wrapped by CMS)",
    autoIframe: true,
    iframeType: 'wrapped'
  }
};

export const AutoIframeMediaNoHeader = {
  render: renderIframe,
  args: {
    autoIframe: true,
    iframeType: 'media'
  }
};

export const AutoIframeDocument = {
  render: renderIframe,
  args: {
    title: "External Webpage",
    modifiers: "large",
    fullscreenMobile: true,
    autoIframe: true,
    iframeType: 'document'
  }
};

export const AutoIframeDocumentFullscreen = {
  render: renderIframe,
  args: {
    title: "External Webpage (Fullscreen)",
    fullscreen: true,
    autoIframe: true,
    iframeType: 'document'
  }
};

