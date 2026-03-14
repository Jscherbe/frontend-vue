import UluImageSlideShow from './UluImageSlideShow.vue';

export default {
  component: UluImageSlideShow,
  tags: ['autodocs'],
  argTypes: {
    images: { control: 'object' },
    selectButton: { control: 'boolean' }
  }
};

const generateImages = (count) => {
  return Array.from({ length: count }).map((_, i) => ({
    src: `https://picsum.photos/seed/${i + 123}/800/400`,
    alt: `Placeholder image ${i + 1}`
  }));
};

export const Default = {
  args: {
    images: generateImages(6),
  },
  render: (args) => ({
    components: { UluImageSlideShow },
    setup() {
      return { args };
    },
    template: `
      <div style="max-width: 800px; margin: 0 auto;">
        <UluImageSlideShow v-bind="args" />
      </div>
    `
  })
};

export const WithSelectButton = {
  args: {
    images: generateImages(4),
    selectButton: true
  },
  render: Default.render
};
