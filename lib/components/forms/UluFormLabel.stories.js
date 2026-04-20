import UluFormLabel from './UluFormLabel.vue';

export default {
  component: UluFormLabel,
  tags: ['autodocs'],
  argTypes: {
    id: { control: 'text' },
    labelHidden: { control: 'boolean' },
    required: { control: 'boolean' },
  },
};

export const Default = {
  args: {
    id: 'input-id',
    default: 'Form Label',
  },
  render: (args) => ({
    components: { UluFormLabel },
    setup() {
      return { args };
    },
    template: `
      <div class="form-theme">
        <UluFormLabel v-bind="args">
          {{ args.default }}
        </UluFormLabel>
      </div>
    `,
  }),
};

export const Required = {
  ...Default,
  args: {
    ...Default.args,
    required: true,
  },
};

export const LabelHidden = {
  ...Default,
  args: {
    ...Default.args,
    labelHidden: true,
  },
};
