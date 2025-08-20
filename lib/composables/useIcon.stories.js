import { useIcon } from './useIcon.js';
import { reactive } from 'vue';

// A simple component to demonstrate the composable's functionality
const DemoComponent = {
  template: `
    <div style="padding: 1rem; font-family: monospace; line-height: 1.6;">
      <h2>useIcon Demo</h2>
      <p>This composable provides helper functions for handling FontAwesome icon definitions.</p>
      
      <hr style="margin: 1.5rem 0;">

      <h3>1. getIconDefinition(key)</h3>
      <p>Looks up a definition from a predefined 'defaultIcons' object.</p>
      <p><strong>Default Icons:</strong> <br/><code>{{ JSON.stringify(defaultIcons, null, 2) }}</code></p>
      <p><strong>Result for 'success':</strong> <br/><code>{{ JSON.stringify(successIconDef) }}</code></p>
      <p><strong>Result for 'failure':</strong> <br/><code>{{ JSON.stringify(failureIconDef) }}</code></p>

      <hr style="margin: 1.5rem 0;">

      <h3>2. getIconProps(definition)</h3>
      <p>Converts a definition into a props object for an icon component.</p>
      <p><strong>Input (String):</strong> <code>'fas fa-home'</code></p>
      <p><strong>Result:</strong> <code>{{ JSON.stringify(propsFromString) }}</code></p>
      <p><strong>Input (Array):</strong> <code>['fas', 'user']</code></p>
      <p><strong>Result:</strong> <code>{{ JSON.stringify(propsFromArray) }}</code></p>

      <hr style="margin: 1.5rem 0;">

      <h3>3. getClassesFromDefinition(definition)</h3>
      <p>Converts a definition into a CSS class string.</p>
      <p><strong>Input (String):</strong> <code>'fas fa-cog'</code></p>
      <p><strong>Result:</strong> <code>'{{ classesFromString }}'</code></p>
      <p><strong>Input (Array):</strong> <code>['fas', 'heart']</code></p>
      <p><strong>Result:</strong> <code>'{{ classesFromArray }}'</code></p>
      <p><strong>Input (Object):</strong> <code>{ icon: ['fas', 'star'] }</code></p>
      <p><strong>Result:</strong> <code>'{{ classesFromObject }}'</code></p>
    </div>
  `,
  setup() {
    // --- Demo Data ---
    const defaultIcons = reactive({
      success: 'fas fa-check-circle',
      failure: ['fas', 'times-circle']
    });

    // --- Composable Usage ---
    const { getIconDefinition, getIconProps, getClassesFromDefinition } = useIcon(defaultIcons);

    // --- Demonstrate getIconDefinition ---
    const successIconDef = getIconDefinition('success');
    const failureIconDef = getIconDefinition('failure');

    // --- Demonstrate getIconProps ---
    const propsFromString = getIconProps('fas fa-home');
    const propsFromArray = getIconProps(['fas', 'user']);

    // --- Demonstrate getClassesFromDefinition ---
    const classesFromString = getClassesFromDefinition('fas fa-cog');
    const classesFromArray = getClassesFromDefinition(['fas', 'heart']);
    const classesFromObject = getClassesFromDefinition({ icon: ['fas', 'star'] });

    return {
      defaultIcons,
      successIconDef,
      failureIconDef,
      propsFromString,
      propsFromArray,
      classesFromString,
      classesFromArray,
      classesFromObject
    };
  }
};

export default {
  title: 'Composables/useIcon',
  component: DemoComponent,
};

export const Default = {};
