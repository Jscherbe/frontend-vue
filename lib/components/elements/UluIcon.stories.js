import UluIcon from './UluIcon.vue';
import { iconKeys } from "../../plugins/core/index.js";

export default {
  component: UluIcon,
  tags: ['autodocs'],
  argTypes: {
    icon: {
      control: 'select',
      options: iconKeys
    },
  },
};

const Template = (args) => ({
  components: { UluIcon },
  setup() {
    return { args };
  },
  template: '<UluIcon v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  icon: 'type:info',
};

export const ByDefinition = Template.bind({});
ByDefinition.args = {
  icon: 'fas fa-star',
};
ByDefinition.storyName = 'Using "definition" prop';

export const ByDefinitionObject = Template.bind({});
ByDefinitionObject.args = {
  icon: ['fas', 'house'],
};
ByDefinitionObject.storyName = 'Using "definition" prop (object)';
