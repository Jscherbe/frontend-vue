import UluImage from './UluImage.vue';

export default {
  component: UluImage,
  tags: ['autodocs'],
  argTypes: {
    src: { control: 'text' },
    alt: { control: 'text' },
    sources: { control: 'object' },
    classes: { control: 'object' },
  }
};

const Template = (args) => ({
  components: { UluImage },
  setup() {
    return { args };
  },
  template: '<UluImage v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  src: 'https://picsum.photos/id/1018/800/600',
  alt: 'A beautiful landscape',
  loading: 'lazy',
  width: 800,
  height: 600,
  classes: {
    img: 'my-custom-img-class'
  }
};

export const WithPictureSources = Template.bind({});
WithPictureSources.args = {
  src: 'https://picsum.photos/id/1015/800/600',
  alt: 'A responsive river valley',
  sources: [
    {
      media: '(max-width: 600px)',
      srcset: 'https://picsum.photos/id/1015/400/300'
    },
    {
      media: '(max-width: 1000px)',
      srcset: 'https://picsum.photos/id/1015/600/450'
    }
  ],
  classes: {
    picture: 'my-responsive-picture-class',
    img: 'my-responsive-img-class'
  }
};
