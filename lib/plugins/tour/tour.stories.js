import { ref } from 'vue';
import { useTour } from './useTour.js';
import UluPopover from '../popovers/UluPopover.vue';

export default {
  tags: ['autodocs']
};

export const Default = {
  render: () => ({
    components: { UluPopover },
    setup() {
      const { api } = useTour();
      const popoverRef = ref(null);

      const demoTour = {
        name: 'demo-tour',
        steps: [
          {
            title: 'Welcome to the Demo!',
            content: 'This step is a modal because it has no target element. Click next to continue.',
            modalOptions: { size: 'small' }
          },
          {
            target: '#step-1-btn',
            title: 'First Feature',
            content: 'This points to a simple button.',
            placement: 'bottom'
          },
          {
            target: '#step-2-btn',
            title: 'With Highlight',
            content: 'This step has the backdrop highlight enabled!',
            placement: 'right',
            highlight: true
          },
          {
            target: '#popover-internal-btn',
            title: 'Inside a Popover',
            content: 'We programmatically opened this popover before displaying the tour step!',
            placement: 'left',
            onEnter: async () => {
              if (popoverRef.value && !popoverRef.value.isOpen) {
                popoverRef.value.toggle();
              }
              // Wait a bit for the popover to animate/render
              await new Promise(r => setTimeout(r, 100));
            }
          }
        ]
      };

      const startTour = () => {
        api.start(demoTour);
      };

      return { startTour, popoverRef };
    },
    template: `
      <div>
        <div class="margin-bottom-large">
          <button class="button" @click="startTour">Start Tour</button>
        </div>

        <div style="display: flex; gap: 2rem; margin-bottom: 3rem;">
          <button id="step-1-btn" class="button button--outline">Standard Button</button>
          <button id="step-2-btn" class="button button--outline">Highlighted Button</button>
        </div>

        <div>
          <UluPopover ref="popoverRef" :clickOutsideCloses="true" :config="{ placement: 'right' }">
            <template #trigger>
              <button class="button button--outline">User Menu (Popover)</button>
            </template>
            <template #default>
              <div style="padding: 1rem; width: 200px;">
                <p class="margin-bottom-small">This is a popover menu.</p>
                <button id="popover-internal-btn" class="button button--small">Profile Settings</button>
              </div>
            </template>
          </UluPopover>
        </div>
      </div>
    `
  })
};

