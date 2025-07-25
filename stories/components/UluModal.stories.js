import { ref } from "vue";
import UluModal from '../../lib/components/UluModal.vue';
import UluButton from '../../lib/components/UluButton.vue';

export default {
  component: UluModal,
  title: 'Components/UluModal',
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
        <p>This is the main content of the modal. You can close it via the 'X' button, Escape key, or by clicking outside (if enabled).</p>
        <p>The visibility is controlled by <code>v-model</code> in this Storybook example.</p>
      </UluModal>
    </div>
  `
});

export const Default = Template.bind({});
Default.args = {
  title: "Default Modal"
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


