import { ref, markRaw } from 'vue';
import { useTour } from './useTour.js';
import UluPopover from '../popovers/UluPopover.vue';

export default {};

export const Default = {
  render: () => ({
    components: { UluPopover },
    setup() {
      const { api } = useTour();
      const popoverRef = ref(null);

      const CustomStepComponent = {
        setup() {
          const { api, state } = useTour();
          return { api, state };
        },
        template: `
          <div style="padding: 1rem; border-radius: 8px; text-align: center;">
            <h3 class="type-large">Total Custom Layout!</h3>
            <p class="type-small margin-bottom-large margin-top-small">This step hides the default footer and renders completely custom DOM structure using the <strong>useTour</strong> composable.</p>
            <div style="display: flex; gap: 0.5rem; justify-content: center;">
              <button class="button button--small button--outline" @click="api.prev()">Go Back</button>
              <button class="button button--small" style="flex: 1" @click="api.next()">Got it!</button>
            </div>
          </div>
        `
      };

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
            target: '#step-3-btn',
            hideFooter: true,
            component: markRaw(CustomStepComponent),
            placement: 'bottom'
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
          <button id="step-3-btn" class="button button--outline">Custom Layout Target</button>
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

