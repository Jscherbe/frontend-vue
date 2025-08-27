// Generated automatically with ./generate-story.js
import UluNavStrip from "./UluNavStrip.vue";

export default {
  component: UluNavStrip,
  tags: ['autodocs'],
};

const Template = (args) => ({
  components: { UluNavStrip },
  setup() {
    return { args };
  },
  template: `<UluNavStrip v-bind="args"/>`
});

export const Default = Template.bind({});
Default.args = {
  items: [
    {
      title: "Example Link (tag)",
      href: "http://www.google.com",
      tag: {
        text: "3"
      }
    },
    {
      title: "Router (icon)",
      to: "/",
      icon: "fas fa-plus"
    },
    {
      title: "Example Link (tooltip)",
      href: "http://www.google.com",
      tooltip: "Hello World!"
    },
  ]
};