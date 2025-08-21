import UluIcon from './UluIcon.vue';
import { getSettings } from '../../settings';

export default {
  title: 'Components/Elements/UluIcon',
  component: UluIcon,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: {
        type: 'select',
        options: Object.keys(getSettings().iconsByType),
      },
    },
    definition: {
      control: 'text',
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
  type: 'info',
};

export const ByType = (args) => ({
  components: { UluIcon },
  setup() {
    const types = Object.keys(getSettings().iconsByType);
    return { args, types };
  },
  template: `
    <div style="display: flex; flex-wrap: wrap; gap: 1rem;">
      <div v-for="type in types" :key="type" style="display: flex; flex-direction: column; align-items: center; gap: 0.5rem;">
        <UluIcon :type="type" style="font-size: 2rem;" />
        <code>{{ type }}</code>
      </div>
    </div>
  `,
});
ByType.storyName = 'Using "type" prop';

export const ByDefinition = Template.bind({});
ByDefinition.args = {
  definition: 'fas fa-star',
};
ByDefinition.storyName = 'Using "definition" prop';

export const ByDefinitionObject = Template.bind({});
ByDefinitionObject.args = {
  definition: ['fas', 'house'],
};
ByDefinitionObject.storyName = 'Using "definition" prop (object)';
