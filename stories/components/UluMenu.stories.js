// Generated automatically with ./generate-story.js

import UluMenu from '../../lib/components/UluMenu.vue';

export default {
  component: UluMenu,
  title: 'Components/UluMenu',
  tags: ['autodocs'],
};

const Template = (args) => ({
  components: { UluMenu },
  setup() {
    return { args };
  },
  template: `
<div class="nav-strip nav-strip--rule">
  <UluMenu v-bind="args"/>
</div>
  `
});

export const Default = Template.bind({});
Default.args = {
  classes: {
    list: "nav-strip__list",
    item: "nav-strip__item",
    link: "nav-strip__link",
    linkIcon: "margin-right-small-x",
    linkExactActive: "is-active"
  },
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
      tooltip: {
        text: "Hello World!"
      }
    },
  ]
};