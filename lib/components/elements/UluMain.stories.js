import UluMain from './UluMain.vue';

export default {
  title: 'Components/Elements/UluMain',
  component: UluMain,
};

export const Default = {
  render: () => ({
    components: { UluMain },
    template: `
      <UluMain>
        <p>Main is used around the main content and has the id that skip link uses</p>
      </UluMain>
    `,
  }),
};
