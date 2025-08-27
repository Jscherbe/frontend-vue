// Generated automatically with ./generate-story.js
import UluMenuStack from "./UluMenuStack.vue";

export default {
  component: UluMenuStack,
  tags: ['autodocs'],
};

const Template = (args) => ({
  components: { UluMenuStack },
  setup() {
    return { args };
  },
  template: `<UluMenuStack v-bind="args"/>`
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