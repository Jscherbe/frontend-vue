import UluButtonVerbose from './UluButtonVerbose.vue';

export default {
  component: UluButtonVerbose,
  argTypes: {
    title: {
      control: 'text',
      description: 'The title of the button.',
    },
    titleElement: {
      control: 'select',
      options: ['strong', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'span', 'div'],
      description: 'Optional element to use for title',
    },
    body: {
      control: 'text',
      description: 'The body text of the button.',
    },
    icon: {
      control: 'text',
      description: 'Font Awesome icon class (e.g., "fas fa-arrow-right").',
    },
    href: {
      control: 'text',
      description: 'Sets the button to a link with this href.',
    },
    to: {
      control: 'object',
      description: 'If set will use router-link for button component and pass to prop.',
    },
    target: {
      control: 'text',
      description: 'Set a value for target attribute when button is a link.',
    },
    download: {
      control: 'boolean',
      description: 'Sets the download attribute on the link.',
    },
    inline: {
      control: 'boolean',
      description: 'Preset to set inline style.',
    },
    fullWidth: {
      control: 'boolean',
      description: 'Preset to set full-width style.',
    },
    modifiers: {
      control: 'array',
      description: 'Modifiers (to add any modifier classes based on base class).',
    },
  },
};

const Template = (args) => ({
  components: { UluButtonVerbose },
  setup() {
    return { args };
  },
  template: '<UluButtonVerbose v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  title: 'Example Link',
  body: 'This is the body',
  icon: 'fas fa-arrow-right',
  href: '#',
};

export const Inline = Template.bind({});
Inline.args = {
  ...Default.args,
  inline: true,
};

export const FullWidth = Template.bind({});
FullWidth.args = {
  ...Default.args,
  fullWidth: true,
};

export const RouterLinkExample = Template.bind({});
RouterLinkExample.args = {
  title: 'Router Link',
  body: 'Navigates using Vue Router',
  icon: 'fas fa-link',
  to: '/some-path',
};

export const WithCustomTitleElement = Template.bind({});
WithCustomTitleElement.args = {
  ...Default.args,
  titleElement: 'h2',
  title: 'Custom Title Element (H2)',
};

export const WithSlots = (args) => ({
  components: { UluButtonVerbose },
  setup() {
    return { args };
  },
  template: `
    <UluButtonVerbose v-bind="args">
      <template #title>
        <em>Custom Title Slot</em>
      </template>
      <p>Custom <strong>Body</strong> Slot</p>
    </UluButtonVerbose>
  `,
});
WithSlots.args = {
  icon: 'fas fa-star',
  href: '#',
};
