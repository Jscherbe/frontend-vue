import UluImageSlider from './UluImageSlider.vue';

export default {
  title: 'Elements/UluImageSlider',
  component: UluImageSlider,
  tags: ['autodocs'],
  argTypes: {
    images: { control: 'object' },
    modifiers: { control: 'text' },
  }
};

const Template = (args) => ({
  components: { UluImageSlider },
  setup() {
    return { args };
  },
  template: '<UluImageSlider v-bind="args" />',
});

// A robust set of test images
const sampleImages = [
  {
    src: 'https://picsum.photos/id/1018/800/600',
    thumb: 'https://picsum.photos/id/1018/150/100',
    alt: 'Nature scene with mountains',
    caption: 'Majestic Mountains',
    captionModifiers: 'bottom center'
  },
  {
    src: 'https://picsum.photos/id/1015/800/600',
    thumb: 'https://picsum.photos/id/1015/150/100',
    alt: 'River valley',
    caption: 'Serene River Valley'
  },
  {
    src: 'https://picsum.photos/id/1019/800/600',
    thumb: 'https://picsum.photos/id/1019/150/100',
    alt: 'Ocean coast',
  },
  {
    src: 'https://picsum.photos/id/1016/800/600',
    thumb: 'https://picsum.photos/id/1016/150/100',
    alt: 'Canyon',
    caption: 'Deep Canyon View'
  }
];

export const Default = Template.bind({});
Default.args = {
  images: sampleImages,
  sliderProps: {
    transition: 'fade'
  }
};

export const CustomImageSlot = (args) => ({
  components: { UluImageSlider },
  setup() {
    return { args };
  },
  template: `
    <UluImageSlider v-bind="args">
      <template #image="{ image, active, upcoming }">
        <div style="position: relative; width: 100%; height: 400px; background: #eee;">
          <p v-if="!active && !upcoming" style="position: absolute; top: 50%; width: 100%; text-align: center;">
            Loading deferred...
          </p>
          <img 
            v-if="active || upcoming"
            :src="image.src" 
            :alt="image.alt"
            style="width: 100%; height: 100%; object-fit: cover;"
          />
        </div>
      </template>
    </UluImageSlider>
  `,
});
CustomImageSlot.args = {
  images: sampleImages
};
