import UluFormActions from './UluFormActions.vue';
import UluButton from '../elements/UluButton.vue';

export default {
  component: UluFormActions,
  tags: ['autodocs'],
};

export const Default = {
  render: (args) => ({
    components: { UluFormActions, UluButton },
    setup() {
      return { args };
    },
    template: `
      <div class="form-theme">
        <UluFormActions>
          <UluButton primary text="Submit" />
          <UluButton text="Cancel" />
        </UluFormActions>
      </div>
    `,
  }),
};

export const RightAligned = {
  render: (args) => ({
    components: { UluFormActions, UluButton },
    setup() {
      return { args };
    },
    template: `
      <div class="form-theme form-theme--actions-right">
        <UluFormActions>
          <UluButton primary text="Submit" />
          <UluButton text="Cancel" />
        </UluFormActions>
      </div>
    `,
  }),
};
