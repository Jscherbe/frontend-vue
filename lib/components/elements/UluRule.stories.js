import UluRule from './UluRule.vue';

export default {
  component: UluRule,
  tags: ['autodocs'],
};

/*
 * Variants
 */
export const Default = {
  args: {}
};

export const Short = {
  args: {
    short: true
  }
};

export const Large = {
  args: {
    large: true
  }
};

export const Light = {
  args: {
    light: true
  }
};

export const Margin = {
  args: {
    margin: 'large'
  },
  render: (args) => ({
    components: { UluRule },
    setup() {
      return { args };
    },
    template: `
      <div>
        <p>This is content above the rule</p>
        <UluRule v-bind="args" />
        <p>This is content below the rule</p>
      </div>
    `,
  }),
};

export const Semantic = {
  args: {
    semantic: true
  }
};
