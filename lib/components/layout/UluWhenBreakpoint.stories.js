import UluWhenBreakpoint from './UluWhenBreakpoint.vue';
import { inject, ref, computed } from 'vue';

export default {
  component: UluWhenBreakpoint,
  tags: ['autodocs'],
  argTypes: {
    min: {
      control: 'select',
      options: ['none', 'small', 'medium', 'large'],
      description: 'Show at this breakpoint and above.'
    },
    max: {
      control: 'select',
      options: ['none', 'small', 'medium', 'large'],
      description: 'Show at this breakpoint and below.'
    },
    only: {
      control: 'select',
      options: ['none', 'small', 'medium', 'large'],
      description: 'Show only at this breakpoint.'
    },
  },
  render: (args) => ({
    components: { UluWhenBreakpoint },
    setup() {
      const breakpointActive = inject('uluBreakpointActive');
      return { args, breakpointActive };
    },
    template: `
    <div>
      <p>Resize your browser or use the Storybook viewport addon to see the content below change.</p>
      <p>
        <strong>Active Breakpoint:</strong>
        <span style="display: inline-block; padding: 0.25rem 0.5rem; background-color: #f0f0f0; border-radius: 4px;">
          {{ breakpointActive || 'loading...' }}
        </span>
      </p>
      <hr />
      <p>The component below will render its content when the conditions are met.</p>
      <UluWhenBreakpoint v-bind="args">
        <div style="background-color: #e6f7ff; border: 1px solid #91d5ff; color: #0050b3; padding: 1rem; margin-top: 1rem; border-radius: 4px;">
          ✅ Content is visible because the conditions are met.
          <br />
          <br />
          <code>{{ args }}</code>
        </div>
      </UluWhenBreakpoint>
    </div>
  `,
  }),
};

export const Only = {
  args: {
    only: 'medium',
  },
  parameters: {
    docs: {
      description: {
        story: 'This story demonstrates the `only` prop. The content will only be visible when the active breakpoint is exactly "medium".'
      }
    }
  }
};

export const Min = {
  args: {
    min: 'medium',
  },
  parameters: {
    docs: {
      description: {
        story: 'This story demonstrates the `min` prop. The content will be visible at the "medium" breakpoint and any breakpoint larger than it (e.g., large, xlarge).'
      }
    }
  }
};

export const Max = {
  args: {
    max: 'medium',
  },
  parameters: {
    docs: {
      description: {
        story: 'This story demonstrates the `max` prop. The content will be visible at the "medium" breakpoint and any breakpoint smaller than it (e.g., small, none).'
      }
    }
  }
};

export const Between = {
  args: {
    min: 'small',
    max: 'medium',
  },
  parameters: {
    docs: {
      description: {
        story: 'This story demonstrates combining `min` and `max` props to show content within a specific range. The content will be visible from "small" to "large" breakpoints, inclusive.'
      }
    }
  }
};

export const DynamicProps = {
  render: () => ({
    components: { UluWhenBreakpoint },
    setup() {
      const breakpointActive = inject('uluBreakpointActive');
      
      const min = ref('small');
      const max = ref('medium');
      const only = ref(null);

      const dynamicArgs = computed(() => ({
        min: min.value,
        max: max.value,
        only: only.value
      }));

      return { 
        breakpointActive,
        min,
        max,
        only,
        dynamicArgs
      };
    },
    template: `
    <div>
      <p>This story tests the component's reactivity. Changing the props below will trigger the <code>tearDownHandlers</code> and <code>setupHandlers</code> logic.</p>
      
      <div style="display: flex; gap: 1rem; align-items: center; margin-bottom: 1rem; background: #f0f0f0; padding: 1rem; border-radius: 4px;">
        <div>
          <label for="min-prop">Min:</label>
          <select id="min-prop" v-model="min">
            <option :value="null">--</option>
            <option>none</option>
            <option>small</option>
            <option>medium</option>
            <option>large</option>
          </select>
        </div>
        <div>
          <label for="max-prop">Max:</label>
          <select id="max-prop" v-model="max">
            <option :value="null">--</option>
            <option>none</option>
            <option>small</option>
            <option>medium</option>
            <option>large</option>
          </select>
        </div>
        <div>
          <label for="only-prop">Only:</label>
          <select id="only-prop" v-model="only">
            <option :value="null">--</option>
            <option>none</option>
            <option>small</option>
            <option>medium</option>
            <option>large</option>
          </select>
        </div>
      </div>

      <p>
        <strong>Active Breakpoint:</strong>
        <span style="display: inline-block; padding: 0.25rem 0.5rem; background-color: #f0f0f0; border-radius: 4px;">
          {{ breakpointActive || 'loading...' }}
        </span>
      </p>
      <hr />
      <p>The component below will render its content when the conditions are met.</p>
      <UluWhenBreakpoint v-bind="dynamicArgs">
        <div style="background-color: #e6f7ff; border: 1px solid #91d5ff; color: #0050b3; padding: 1rem; margin-top: 1rem; border-radius: 4px;">
          ✅ Content is visible because the conditions are met.
          <br />
          <br />
          <code>{{ dynamicArgs }}</code>
        </div>
      </UluWhenBreakpoint>
    </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: 'This story demonstrates that the component correctly tears down old listeners and sets up new ones when its props change dynamically.'
      }
    }
  },
  argTypes: {
    min: { table: { disable: true } },
    max: { table: { disable: true } },
    only: { table: { disable: true } },
  }
};
