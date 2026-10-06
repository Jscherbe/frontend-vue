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

      // A component to replace ONLY the text body (keeps the footer)
      const CustomContentComponent = {
        template: `
          <div style="text-align: center; padding: 1rem 0;">
            <div style="font-size: 3rem; margin-bottom: 1rem;">🚀</div>
            <strong class="type-small" style="display: block;">Custom Inner Content</strong>
            <p class="type-small margin-top-small">This step uses <code>contentComponent</code>. It completely replaces the title/body text, but leaves the default footer and popover shell intact!</p>
          </div>
        `
      };

      // A component to replace the ENTIRE wrapper (bypasses modal/popover)
      const CustomFullTakeoverComponent = {
        setup() {
          const { api, state } = useTour();
          return { api, state };
        },
        template: `
          <div style="position: fixed; bottom: 2rem; left: 50%; transform: translateX(-50%); background: var(--color-primary, #333); color: white; padding: 2rem; border-radius: 8px; z-index: 9999; box-shadow: 0 10px 30px rgba(0,0,0,0.5); width: 400px; text-align: center;">
            <h3 class="type-large" style="color: white;">Total Wrapper Takeover!</h3>
            <p class="type-small margin-bottom-large margin-top-small">This step uses <code>component</code>. It completely bypasses the modal/popover wrappers. You are rendering raw HTML at the root, so you control positioning and the buttons!</p>
            <div style="display: flex; gap: 0.5rem; justify-content: center;">
              <button class="button button--small button--outline" style="color: white; border-color: white;" @click="api.prev()">Go Back</button>
              <button class="button button--small" style="flex: 1; background: white; color: black;" @click="api.next()">Finish!</button>
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
            modalProps: { size: 'small' }
          },
          {
            target: '#step-1-btn',
            title: 'First Feature',
            content: 'This points to a simple button using the standard title/content props.',
            placement: 'bottom'
          },
          {
            target: '#step-2-btn',
            contentComponent: markRaw(CustomContentComponent),
            placement: 'right',
            highlight: true
          },
          {
            target: '#popover-internal-btn-1',
            title: 'Profile Step 1',
            content: 'We programmatically opened this popover before displaying the tour step! Click next to verify the popover stays open.',
            placement: 'left',
            onEnter: async () => {
              if (popoverRef.value && !popoverRef.value.isOpen) {
                popoverRef.value.toggle();
              }
              // Wait a bit for the popover to animate/render
              await new Promise(r => setTimeout(r, 100));
            }
          },
          {
            target: '#popover-internal-btn-2',
            title: 'Billing Step 2',
            content: 'Great! The user popover ignored the click event from the Tour pager because of our data-ulu-tour-ui attribute.',
            placement: 'left'
          },
          {
            target: '#popover-internal-btn-3',
            title: 'Danger Step 3',
            content: 'You can interact with the tour all you want inside another popover without breaking it.',
            placement: 'left'
          },
          {
            // Note: no target needed, it takes over the whole screen!
            component: markRaw(CustomFullTakeoverComponent)
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
          <button id="step-2-btn" class="button button--outline">Inner Content Target</button>
        </div>

        <div>
          <UluPopover ref="popoverRef" :clickOutsideCloses="true" :config="{ placement: 'right' }">
            <template #trigger>
              <button class="button button--outline">User Menu (Popover)</button>
            </template>
            <template #default>
              <div style="padding: 1rem; width: 200px;">
                <p class="margin-bottom-small">This is a popover menu.</p>
                <div style="display: flex; flex-direction: column; gap: 0.5rem;">
                  <button id="popover-internal-btn-1" class="button button--small">Profile Settings</button>
                  <button id="popover-internal-btn-2" class="button button--small">Billing Details</button>
                  <button id="popover-internal-btn-3" class="button button--small">Danger Zone</button>
                </div>
              </div>
            </template>
          </UluPopover>
        </div>
      </div>
    `
  })
};

export const LifecycleHooks = {
  render: () => ({
    setup() {
      const { api } = useTour();
      const logs = ref([]);

      const logMessage = (msg) => {
        logs.value.push(`[${ new Date().toLocaleTimeString() }] ${ msg }`);
      };

      const hooksTour = {
        name: 'hooks-tour',
        onStop: async () => {
          logMessage('onStop triggered for the tour. Waiting 1 second for cleanup...');
          await new Promise(r => setTimeout(r, 1000));
          logMessage('onStop finished.');
        },
        steps: [
          {
            title: 'Step 1: Enter/Leave Hooks',
            content: 'This step has an onEnter and an onLeave hook.',
            modalProps: { size: 'small' },
            onEnter: async () => {
              logMessage('onEnter triggered for Step 1.');
            },
            onLeave: async () => {
              logMessage('onLeave triggered for Step 1. Waiting 1 second...');
              await new Promise(r => setTimeout(r, 1000));
              logMessage('onLeave finished for Step 1.');
            }
          },
          {
            title: 'Step 2: Just another step',
            content: 'Click "End Tour" or the close button to see the onStop hook fire.',
            modalProps: { size: 'small' }
          }
        ]
      };

      const startTour = () => {
        logs.value = [];
        api.start(hooksTour);
      };

      return { startTour, logs };
    },
    template: `
      <div>
        <div class="margin-bottom-large">
          <button class="button" @click="startTour">Start Hooks Tour</button>
        </div>
        <div class="margin-top-large" style="padding: 1rem; background-color: var(--color-background-light, #f5f5f5); border-radius: 4px;">
          <h3 class="type-large margin-bottom-small">Hook Logs</h3>
          <ul class="type-small" style="font-family: monospace;">
            <li v-for="(log, idx) in logs" :key="idx">{{ log }}</li>
            <li v-if="logs.length === 0" style="opacity: 0.6;">No logs yet. Start the tour.</li>
          </ul>
        </div>
      </div>
    `
  })
};

