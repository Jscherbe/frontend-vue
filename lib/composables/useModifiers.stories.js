import { computed } from 'vue';
import { useModifiers } from './useModifiers.js';

// 1. Create a demo component that uses the composable
const DemoComponent = {
  props: {
    variant: { type: String, default: '' },
    isActive: { type: Boolean, default: false },
    // This prop is what `useModifiers` listens for
    modifiers: { type: [String, Array], default: '' },
  },
  template: `
    <div style="padding: 1rem; font-family: monospace; line-height: 1.6; max-width: 600px;">
      <h2>useModifiers Demo</h2>
      <p>This composable combines internal and user-provided modifiers into a BEM class list.</p>
      
      <hr style="margin: 1rem 0;">
      
      <h4>Inputs:</h4>
      <div><strong>Base Class:</strong> <code>{{ baseClass }}</code></div>
      <div><strong>Props:</strong> <code>{{ JSON.stringify({ variant, isActive, modifiers }) }}</code></div>
      <div><strong>Internal Modifiers (Computed):</strong> <code>{{ JSON.stringify(internal) }}</code></div>
      
      <hr style="margin: 1rem 0;">

      <h4>Output:</h4>
      <div><strong>Result (resolvedModifiers):</strong></div>
      <pre><code>{{ JSON.stringify(resolvedModifiers, null, 2) }}</code></pre>
      
      <hr style="margin: 1rem 0;">

      <h4>Example:</h4>
      <div :class="[baseClass, resolvedModifiers]" style="padding: 1rem; border: 2px dashed #ccc; transition: all 0.2s;">
        This div has the classes applied.
      </div>
    </div>
  `,
  setup(props) {
    const baseClass = 'demo-component';

    // Define internal modifiers based on other props
    const internal = computed(() => ({
      [props.variant]: !!props.variant,
      'active': props.isActive,
    }));

    // Use the composable
    const { resolvedModifiers } = useModifiers({
      props: props,
      baseClass: baseClass,
      internal: internal,
    });

    return {
      baseClass,
      internal,
      resolvedModifiers,
      // Return props to display them in the template
      variant: computed(() => props.variant),
      isActive: computed(() => props.isActive),
      modifiers: computed(() => props.modifiers),
    };
  }
};

// 2. Create the story
export default {
  title: 'Composables/useModifiers',
  component: DemoComponent,
  args: {
    variant: 'primary',
    isActive: false,
    modifiers: 'rounded',
  },
  argTypes: {
    variant: { control: 'select', options: ['', 'primary', 'secondary'] },
    isActive: { control: 'boolean' },
    modifiers: { control: 'text', description: 'User-defined modifiers (string or comma-separated)' },
  },
};

export const Default = {};
