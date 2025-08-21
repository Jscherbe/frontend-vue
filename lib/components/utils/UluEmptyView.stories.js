import UluEmptyView from './UluEmptyView.vue';

export default {
  component: UluEmptyView,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'A utility component that renders a `&lt;router-view&gt;`. This component is designed to be used with Vue Router to display nested routes. It does not render any visible content on its own and requires a Vue Router instance to function correctly.',
      },
    },
  },
};

export const Default = {
  render: () => ({
    components: { UluEmptyView },
    template: `
      <div>
        <UluEmptyView />
      </div>
    `,
  }),
  args: {},
};
