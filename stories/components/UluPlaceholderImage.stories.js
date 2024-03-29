import UluPlaceholderImage from "../../lib/components/UluPlaceholderImage.vue";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
  title: 'Components/UluPlaceholderImage',
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

// export const Secondary = {
//   args: {
//     label: 'Button',
//   },
// };

// export const Large = {
//   args: {
//     size: 'large',
//     label: 'Button',
//   },
// };

// export const Small = {
//   args: {
//     size: 'small',
//     label: 'Button',
//   },
// };
