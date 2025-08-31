import UluCard from '../../elements/UluCard.vue';
import UluSkeletonMedia from './UluSkeletonMedia.vue';
import UluSkeletonText from './UluSkeletonText.vue';
import UluIcon from '../../elements/UluIcon.vue';

export default {
  parameters: {
    docs: {
      description: {
        component: 'An example of how to create a skeleton loading state for a card component, using `UluCard` and skeleton elements. To demonstrate how this could be applied to different components/layouts'
      }
    }
  }
};

const Template = (args) => ({
  components: {
    UluCard,
    UluSkeletonMedia,
    UluSkeletonText,
    UluIcon
  },
  setup() {
    return { args };
  },
  template: `
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
  `,
});

export const Default = Template.bind({});
Default.storyName = "Skeleton Card";

export const Horizontal = Template.bind({});
Horizontal.args = {
  horizontal: true,
};
Horizontal.storyName = "Horizontal Skeleton Card";
