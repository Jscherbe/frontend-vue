import { useBreakpointManager } from './useBreakpointManager.js';

// A simple component to demonstrate the composable's functionality
const DemoComponent = {
  template: `
    <div style="padding: 1rem; border: 1px solid #ccc; border-radius: 4px;">
      <p>This component uses the composable to get reactive breakpoint data.</p>
      <p><small>Resize your browser window to see the values change.</small></p>
      <hr>
      <p>
        <strong>Active Breakpoint:</strong>
        <code>{{ breakpointActive || 'null (initializing...)' }}</code>
      </p>
      <p>
        <strong>Resize Direction:</strong>
        <code>{{ breakpointDirection || 'null (initializing...)' }}</code>
      </p>
    </div>
  `,
  setup() {
    // The composable is used here, just as it would be in a real component.
    // It will initialize itself automatically.
    const { breakpointActive, breakpointDirection } = useBreakpointManager();

    // The reactive refs are returned to be used in the template.
    return { breakpointActive, breakpointDirection };
  }
};

export default {
  // title: 'Composables/useBreakpointManager',
  // We render the DemoComponent to showcase the composable
  component: DemoComponent,
};

/*
 * Using modern Storybook syntax.
 * No args are needed for this component, so the story is just an empty object.
 */
export const Default = {};