import{Z as u,a0 as o,r as m,a1 as s}from"./iframe-DOvHerPF.js";import"./preload-helper-BJwshlQW.js";const g={},e={render:()=>({components:{UluPopover:u},setup(){const{api:a}=o(),t=m(null),r={template:`
          <div style="text-align: center; padding: 1rem 0;">
            <div style="font-size: 3rem; margin-bottom: 1rem;">🚀</div>
            <strong class="type-small" style="display: block;">Custom Inner Content</strong>
            <p class="type-small margin-top-small">This step uses <code>contentComponent</code>. It completely replaces the title/body text, but leaves the default footer and popover shell intact!</p>
          </div>
        `},l={setup(){const{api:n,state:p}=o();return{api:n,state:p}},template:`
          <div style="position: fixed; bottom: 2rem; left: 50%; transform: translateX(-50%); background: var(--color-primary, #333); color: white; padding: 2rem; border-radius: 8px; z-index: 9999; box-shadow: 0 10px 30px rgba(0,0,0,0.5); width: 400px; text-align: center;">
            <h3 class="type-large" style="color: white;">Total Wrapper Takeover!</h3>
            <p class="type-small margin-bottom-large margin-top-small">This step uses <code>component</code>. It completely bypasses the modal/popover wrappers. You are rendering raw HTML at the root, so you control positioning and the buttons!</p>
            <div style="display: flex; gap: 0.5rem; justify-content: center;">
              <button class="button button--small button--outline" style="color: white; border-color: white;" @click="api.prev()">Go Back</button>
              <button class="button button--small" style="flex: 1; background: white; color: black;" @click="api.next()">Finish!</button>
            </div>
          </div>
        `},i={name:"demo-tour",steps:[{title:"Welcome to the Demo!",content:"This step is a modal because it has no target element. Click next to continue.",modalProps:{size:"small"}},{target:"#step-1-btn",title:"First Feature",content:"This points to a simple button using the standard title/content props.",placement:"bottom"},{target:"#step-2-btn",contentComponent:s(r),placement:"right",highlight:!0},{target:"#popover-internal-btn",title:"Inside a Popover",content:"We programmatically opened this popover before displaying the tour step!",placement:"left",onEnter:async()=>{t.value&&!t.value.isOpen&&t.value.toggle(),await new Promise(n=>setTimeout(n,100))}},{component:s(l)}]};return{startTour:()=>{a.start(i)},popoverRef:t}},template:`
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
                <button id="popover-internal-btn" class="button button--small">Profile Settings</button>
              </div>
            </template>
          </UluPopover>
        </div>
      </div>
    `})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      UluPopover
    },
    setup() {
      const {
        api
      } = useTour();
      const popoverRef = ref(null);

      // A component to replace ONLY the text body (keeps the footer)
      const CustomContentComponent = {
        template: \`
          <div style="text-align: center; padding: 1rem 0;">
            <div style="font-size: 3rem; margin-bottom: 1rem;">🚀</div>
            <strong class="type-small" style="display: block;">Custom Inner Content</strong>
            <p class="type-small margin-top-small">This step uses <code>contentComponent</code>. It completely replaces the title/body text, but leaves the default footer and popover shell intact!</p>
          </div>
        \`
      };

      // A component to replace the ENTIRE wrapper (bypasses modal/popover)
      const CustomFullTakeoverComponent = {
        setup() {
          const {
            api,
            state
          } = useTour();
          return {
            api,
            state
          };
        },
        template: \`
          <div style="position: fixed; bottom: 2rem; left: 50%; transform: translateX(-50%); background: var(--color-primary, #333); color: white; padding: 2rem; border-radius: 8px; z-index: 9999; box-shadow: 0 10px 30px rgba(0,0,0,0.5); width: 400px; text-align: center;">
            <h3 class="type-large" style="color: white;">Total Wrapper Takeover!</h3>
            <p class="type-small margin-bottom-large margin-top-small">This step uses <code>component</code>. It completely bypasses the modal/popover wrappers. You are rendering raw HTML at the root, so you control positioning and the buttons!</p>
            <div style="display: flex; gap: 0.5rem; justify-content: center;">
              <button class="button button--small button--outline" style="color: white; border-color: white;" @click="api.prev()">Go Back</button>
              <button class="button button--small" style="flex: 1; background: white; color: black;" @click="api.next()">Finish!</button>
            </div>
          </div>
        \`
      };
      const demoTour = {
        name: 'demo-tour',
        steps: [{
          title: 'Welcome to the Demo!',
          content: 'This step is a modal because it has no target element. Click next to continue.',
          modalProps: {
            size: 'small'
          }
        }, {
          target: '#step-1-btn',
          title: 'First Feature',
          content: 'This points to a simple button using the standard title/content props.',
          placement: 'bottom'
        }, {
          target: '#step-2-btn',
          contentComponent: markRaw(CustomContentComponent),
          placement: 'right',
          highlight: true
        }, {
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
        }, {
          // Note: no target needed, it takes over the whole screen!
          component: markRaw(CustomFullTakeoverComponent)
        }]
      };
      const startTour = () => {
        api.start(demoTour);
      };
      return {
        startTour,
        popoverRef
      };
    },
    template: \`
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
                <button id="popover-internal-btn" class="button button--small">Profile Settings</button>
              </div>
            </template>
          </UluPopover>
        </div>
      </div>
    \`
  })
}`,...e.parameters?.docs?.source}}};const v=["Default"];export{e as Default,v as __namedExportsOrder,g as default};
