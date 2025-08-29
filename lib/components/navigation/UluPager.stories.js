import UluPager from './UluPager.vue';

export default {
  title: 'Navigation/UluPager',
  component: UluPager,
  argTypes: {
    headingId: { control: 'text' },
    current: { control: 'number' },
    items: { control: 'object' },
    ellipses: { control: 'object' },
  },
};

const Template = (args) => ({
  components: { UluPager },
  setup() {
    return { args };
  },
  template: '<UluPager v-bind="args" />',
});

const defaultArgs = {
  headingId: 'pager-heading',
  items: {
    first: { href: '/?page=1' },
    previous: { href: '/?page=4' },
    next: { href: '/?page=6' },
    last: { href: '/?page=10' },
    pages: {
      1: { href: '/?page=1' },
      2: { href: '/?page=2' },
      3: { href: '/?page=3' },
      4: { href: '/?page=4' },
      5: { href: '/?page=5' },
      6: { href: '/?page=6' },
      7: { href: '/?page=7' },
    },
  },
};

export const Default = Template.bind({});
Default.args = {
  ...defaultArgs,
  current: 5,
  ellipses: { previous: true, next: true },
};

export const FirstPage = Template.bind({});
FirstPage.args = {
  ...defaultArgs,
  current: 1,
  items: {
    ...defaultArgs.items,
    first: null,
    previous: null,
  },
  ellipses: { previous: false, next: true },
};

export const LastPage = Template.bind({});
LastPage.args = {
  ...defaultArgs,
  current: 10,
  items: {
    ...defaultArgs.items,
    next: null,
    last: null,
    pages: {
      4: { href: '/?page=4' },
      5: { href: '/?page=5' },
      6: { href: '/?page=6' },
      7: { href: '/?page=7' },
      8: { href: '/?page=8' },
      9: { href: '/?page=9' },
      10: { href: '/?page=10' },
    }
  },
  ellipses: { previous: true, next: false },
};
