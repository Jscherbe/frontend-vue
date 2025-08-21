import { inject } from 'vue';

// The plugin itself is not a component, so we create a demo component
// to showcase the values it provides.
const DemoComponent = {
  template: `
    <div style="padding: 1rem; border: 1px solid #ccc; border-radius: 4px;">
      <p>This story demonstrates the Breakpoints plugin.</p>
      <p>The plugin provides reactive values that you can inject into any component.</p>
      <p><small>Resize your browser window to see the values change.</small></p>
      <hr>
      <p>
        <strong>Is Mobile:</strong>
        <code>{{ isMobile }}</code> (True when breakpoint is 'small' or less)
      </p>
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
    // Inject the values provided by the plugin
    const isMobile = inject('isMobile');
    const breakpointActive = inject('breakpointActive');
    const breakpointDirection = inject('breakpointDirection');

    return { isMobile, breakpointActive, breakpointDirection };
  }
};

export default {
  component: DemoComponent,
};

export const Default = {};
