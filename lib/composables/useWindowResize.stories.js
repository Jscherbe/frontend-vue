import { ref, onUnmounted, computed } from 'vue';
import { useWindowResize } from './useWindowResize.js';

// 1. Create a demo component that uses the composable
const DemoComponent = {
  template: `
    <div style="padding: 1rem; border: 1px solid #ccc; border-radius: 4px;">
      <h2>useWindowResize Demo</h2>
      <p>Resize your browser window to see the state and events change.</p>
      <hr style="margin: 1rem 0;">
      <p :style="{ color: resizing ? 'blue' : 'green', fontWeight: 'bold', transition: 'color 0.2s' }">
        <strong>Is Resizing:</strong> <code>{{ resizing }}</code>
      </p>
      <p><strong>Status:</strong> <span :style="{ color: statusColor, fontWeight: 'bold' }">{{ status }}</span></p>
      <p><strong>Resize Start Count:</strong> <code>{{ startCount }}</code></p>
      <p><strong>Resize End Count:</strong> <code>{{ endCount }}</code></p>
    </div>
  `,
  setup() {
    const { resizing, onResizeStart, onResizeEnd } = useWindowResize();

    const status = ref('Ready');
    const startCount = ref(0);
    const endCount = ref(0);

    const handleResizeStart = () => {
      status.value = 'Started resizing...';
      startCount.value++;
    };

    const handleResizeEnd = () => {
      status.value = 'Finished resizing (debounced 300ms)';
      endCount.value++;
    };

    // Register callbacks and store the cleanup functions
    const cleanupStart = onResizeStart(handleResizeStart);
    const cleanupEnd = onResizeEnd(handleResizeEnd);

    // Clean up the listeners when the component is unmounted
    onUnmounted(() => {
      cleanupStart();
      cleanupEnd();
      console.log('Resize listeners cleaned up.');
    });

    const statusColor = computed(() => {
      if (status.value.startsWith('Started')) return 'blue';
      if (status.value.startsWith('Finished')) return 'green';
      return 'black';
    });

    return {
      resizing,
      status,
      statusColor,
      startCount,
      endCount
    };
  }
};

// 2. Create the story
export default {
  title: 'Composables/useWindowResize',
  component: DemoComponent,
};

export const Default = {};
