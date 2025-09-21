import UluFormRequiredChar from './UluFormRequiredChar.vue';

export default {
  component: UluFormRequiredChar,
  tags: ['autodocs'],
};

export const Default = {
  render: (args) => ({
    components: { UluFormRequiredChar },
    setup() {
      return { args };
    },
    template: `
      <div class="form-theme">
        <label>
          My Label
          <UluFormRequiredChar />
        </label>
      </div>
    `,
  }),
};
