import UluImageSource from './UluImageSource.vue';
import UluImage from './UluImage.vue';

export default {
  component: UluImageSource,
  tags: ['autodocs'],
  argTypes: {
    srcset: { control: 'text' },
    media: { control: 'text' },
  }
};

const Template = (args) => ({
  components: { UluImageSource, UluImage },
  setup() {
    return { args };
  },
  template: `
    <UluImage 
      src="https://picsum.photos/id/1015/400/300" 
      alt="A responsive river valley"
    >
      <UluImageSource v-bind="args" />
    </UluImage>
  `,
});

export const Default = Template.bind({});
Default.args = {
  media: '(min-width: 600px)',
  srcset: 'https://picsum.photos/id/1016/800/600'
};
