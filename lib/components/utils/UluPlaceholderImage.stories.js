import UluPlaceholderImage from "./UluPlaceholderImage.vue";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
  // title: 'Components/UluPlaceholderImage',
  component: UluPlaceholderImage,
  tags: ['autodocs'],
  argTypes: {
    width: { control: 'number' },
    height: { control: 'number' },
    alt: { control: 'text' },
    random:{ control: 'boolean' },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default = {};

export const UsingImageId = {
  args: {
    imageId: '67',
  },
};

export const SettingSizes = {
  args: {
    width: '100',
    height: '100',
  },
};

export const RandomSize = {
  args: {
    random: true
  },
};