import UluFormFile from './UluFormFile.vue';
import UluFormItem from './UluFormItem.vue';

export default {
  component: UluFormFile,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    labelHidden: { control: 'boolean' },
    multiple: { control: 'boolean' },
    inputAttrs: { control: 'object' },
    required: { control: 'boolean' },
  },
};

export const Default = {
  render: (args) => ({
    components: { UluFormItem, UluFormFile },
    setup() {
      return { args };
    },
    template: `
      <div class="form-theme">
        <UluFormItem file>
          <UluFormFile v-bind="args" />
        </UluFormItem>
      </div>
    `,
  }),
  args: {
    label: 'Upload a file',
  },
};

export const Required = {
  ...Default,
  args: {
    ...Default.args,
    required: true,
  },
};