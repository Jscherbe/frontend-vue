import UluAlert from './UluAlert.vue';
import UluButton from './UluButton.vue';

export default {
  title: 'Components/Elements/UluAlert',
  component: UluAlert,
  args: {
    title: 'Alert Title',
    description: 'This is the description of the alert. It provides more details about the message being conveyed.',
  },
  argTypes: {
    title: { control: 'text' },
    description: { control: 'text' },
    icon: { control: 'text' },
    type: {
      control: 'select',
      options: ['danger', 'warning', 'info', 'success'],
    },
    compact: { control: 'boolean' },
  },
};

// --- Stories --- 

export const Default = {
  args: {
    type: 'danger',
    title: 'Danger Alert',
    description: 'This is an example of a danger alert. The icon is automatically determined by the type.'
  },
  render: (args) => ({
    components: {
      UluAlert
    },
    setup() {
      return { args };
    },
    template: `<UluAlert v-bind="args" />`
  })
};

export const AllTypes = {
  render: () => ({
    components: { UluAlert },
    template: `
      <div style="display: flex; flex-direction: column; gap: 1rem;">
        <UluAlert type="danger" title="Danger" description="This is a danger alert." />
        <UluAlert type="warning" title="Warning" description="This is a warning alert." />
        <UluAlert type="info" title="Info" description="This is an info alert." />
        <UluAlert type="success" title="Success" description="This is a success alert." />
      </div>
    `,
  }),
  // Disable controls for props that are manually set in this story
  argTypes: {
    title: { table: { disable: true } },
    description: { table: { disable: true } },
    icon: { table: { disable: true } },
    type: { table: { disable: true } },
    compact: { table: { disable: true } },
  },
};

export const Compact = {
  ...AllTypes, // Reuse the render function from AllTypes
  args: {
    compact: true,
  },
  argTypes: {
    ...AllTypes.argTypes,
  },
};

export const WithAction = {
  render: (args) => ({
    components: { UluAlert, UluButton },
    setup() {
      return { args };
    },
    template: `
      <UluAlert v-bind="args">
        <template #action>
          <UluButton size="small">Action</UluButton>
        </template>
      </UluAlert>
    `,
  }),
  args: {
    type: 'info',
    title: 'Action Required',
    description: 'This alert has an action button provided via the action slot.',
  },
};
