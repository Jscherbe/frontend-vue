import UluEmpty from './UluEmpty.vue';

export default {
  component: UluEmpty,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'A utility component that renders nothing visible. Useful as a placeholder or for conditional rendering where an empty element is needed.',
      },
    },
  },
};

export const Default = {
  render: () => ({
    components: { UluEmpty },
    template: `
      <div>
        <p>This is some content before the UluEmpty component.</p>
        <UluEmpty />
        <p>This is some content after the UluEmpty component. You should not see any visible output from UluEmpty itself.</p>
      </div>
    `,
  }),
  args: {},
};
