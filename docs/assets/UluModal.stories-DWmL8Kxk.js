import{H as a,q as y}from"./iframe-BDApY_ZR.js";import{_ as S}from"./UluButton-C34nqnOG.js";import{_ as w}from"./UluPlaceholderText-Dr4nqh0a.js";import"./preload-helper-BJwshlQW.js";import"./UluAction-jY_6z-AT.js";const A={component:a,tags:["autodocs"]},e=r=>({components:{UluModal:a,UluButton:S,UluPlaceholderText:w},setup(){const t=y(!1);return{args:r,isModalOpen:t}},template:`
    <div>
      <UluButton @click="isModalOpen = true">
        Show Modal
      </UluButton>
      <UluModal v-model="isModalOpen" v-bind="args">
        <template #default="{ close }">
          <p>
            This is the main content of the modal. The visibility is controlled by <code>v-model</code>.
          </p>
          <UluPlaceholderText/>
          <p>
            <UluButton @click="close" text="Close"/>
          </p>
        </template>
      </UluModal>
    </div>
  `}),n={render:e,args:{title:"Default Modal"},parameters:{docs:{source:{code:`
<template>
  <UluButton @click="isModalOpen = true">
    Show Modal
  </UluButton>
  <UluModal v-model="isModalOpen" title="Default Modal">
    <template #default="{ close }">
      <p>This is the main content of the modal.</p>
      <p><UluButton @click="close" text="Close"/></p>
    </template>
  </UluModal>
</template>

<script setup>
import { ref } from 'vue';
import { UluModal, UluButton } from '@ulu/frontend-vue';

const isModalOpen = ref(false); // Controls modal visibility
<\/script>
      `,language:"html",type:"code"}}}},s={render:e,args:{title:"Non-Teleported Modal",teleport:!1}},l={render:e,args:{title:"Modal Title",position:"left"}},i={render:e,args:{title:"Modal Title",position:"right"}},d={render:e,args:{title:"Modal Title",position:"left",allowResize:!0}},u={render:e,args:{title:"Modal Title",position:"right",allowResize:!0}},c={render:e,args:{title:"Modal Title",position:"center",allowResize:!0}},p={render:e,args:{title:"Modal Title",position:"right",preventScroll:!1}},m={render:e,args:{title:"Modal Title",position:"right",preventScroll:!0,preventScrollShift:!1}},f={render:r=>({components:{UluModal:a,UluButton:S,UluPlaceholderText:w},setup(){const t=y(!1);return{args:r,isModalOpen:t}},template:`
      <div>
        <UluPlaceholderText :amount="5" />
        <UluButton @click="isModalOpen = true">
          Show Modal
        </UluButton>
        <UluModal v-model="isModalOpen" v-bind="args">
          <template #default="{ close }">
            <p>
              This is the main content of the modal. The visibility is controlled by <code>v-model</code>.
            </p>
            <UluPlaceholderText/>
            <p>
              <UluButton @click="close" text="Close"/>
            </p>
          </template>
        </UluModal>
      </div>
    `}),args:{title:"Content Above"}},o=r=>({components:{UluModal:a,UluButton:S},setup(){const t=y(!1);return{args:r,isModalOpen:t}},template:`
    <div>
      <UluButton @click="isModalOpen = true">
        Show Modal
      </UluButton>
      <UluModal v-model="isModalOpen" v-bind="args">
        <template v-if="args.iframeType === 'wrapped'">
          <div class="cms-wrapper-class" style="padding: 2rem;">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/y0sF5xhGreA?si=aRdiK0Xzf3zvHP_E"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
        </template>
        <template v-else-if="args.iframeType === 'document'">
          <iframe
            src="https://en.wikipedia.org/wiki/IFrame"
            title="Wikipedia article on IFrames"
          ></iframe>
        </template>
        <template v-else>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/y0sF5xhGreA?si=aRdiK0Xzf3zvHP_E"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </template>
      </UluModal>
    </div>
  `}),g={render:o,args:{title:"YouTube (Auto Aspect Ratio)",autoIframe:!0,iframeType:"media"}},M={render:o,args:{title:"YouTube (Wrapped by CMS)",autoIframe:!0,iframeType:"wrapped"}},h={render:o,args:{autoIframe:!0,iframeType:"media"}},v={render:o,args:{title:"External Webpage",modifiers:"large",fullscreenMobile:!0,autoIframe:!0,iframeType:"document"}},U={render:o,args:{title:"External Webpage (Fullscreen)",fullscreen:!0,autoIframe:!0,iframeType:"document"}},T={render:o,args:{title:"YouTube (Pause Videos)",pauseVideos:!0,autoIframe:!0,iframeType:"media"}},b={render:r=>({components:{UluModal:a,UluButton:S},setup(){const t=y(!1);return{args:r,isModalOpen:t}},template:`
      <div>
        <UluButton @click="isModalOpen = true">
          Show Modal
        </UluButton>
        <UluModal v-model="isModalOpen" v-bind="args">
          <video controls width="100%">
            <source src="/assets/placeholder/4065947-uhd_4096_2160_25fps.mp4" type="video/mp4" />
            Sorry, your browser doesn't support embedded videos.
          </video>
        </UluModal>
      </div>
    `}),args:{title:"Native Video (Pause Videos)",pauseVideos:!0}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render,
  args: {
    title: "Default Modal"
  },
  // Show Source doesn't work for this component (since it has a slot and prop with same name)
  parameters: {
    docs: {
      source: {
        code: \`
<template>
  <UluButton @click="isModalOpen = true">
    Show Modal
  </UluButton>
  <UluModal v-model="isModalOpen" title="Default Modal">
    <template #default="{ close }">
      <p>This is the main content of the modal.</p>
      <p><UluButton @click="close" text="Close"/></p>
    </template>
  </UluModal>
</template>

<script setup>
import { ref } from 'vue';
import { UluModal, UluButton } from '@ulu/frontend-vue';

const isModalOpen = ref(false); // Controls modal visibility
<\/script>
      \`,
        language: 'html',
        // Ensure correct syntax highlighting
        type: 'code' // Crucial: Tells Storybook to use this exact string
      }
    }
  }
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render,
  args: {
    title: "Non-Teleported Modal",
    teleport: false
  }
}`,...s.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render,
  args: {
    title: "Modal Title",
    position: "left"
  }
}`,...l.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render,
  args: {
    title: "Modal Title",
    position: "right"
  }
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render,
  args: {
    title: "Modal Title",
    position: "left",
    allowResize: true
  }
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render,
  args: {
    title: "Modal Title",
    position: "right",
    allowResize: true
  }
}`,...u.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render,
  args: {
    title: "Modal Title",
    position: "center",
    allowResize: true
  }
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render,
  args: {
    title: "Modal Title",
    position: "right",
    preventScroll: false
  }
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render,
  args: {
    title: "Modal Title",
    position: "right",
    preventScroll: true,
    preventScrollShift: false
  }
}`,...m.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      UluModal,
      UluButton,
      UluPlaceholderText
    },
    setup() {
      const isModalOpen = ref(false);
      return {
        args,
        isModalOpen
      };
    },
    template: \`
      <div>
        <UluPlaceholderText :amount="5" />
        <UluButton @click="isModalOpen = true">
          Show Modal
        </UluButton>
        <UluModal v-model="isModalOpen" v-bind="args">
          <template #default="{ close }">
            <p>
              This is the main content of the modal. The visibility is controlled by <code>v-model</code>.
            </p>
            <UluPlaceholderText/>
            <p>
              <UluButton @click="close" text="Close"/>
            </p>
          </template>
        </UluModal>
      </div>
    \`
  }),
  args: {
    title: "Content Above"
  }
}`,...f.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: renderIframe,
  args: {
    title: "YouTube (Auto Aspect Ratio)",
    autoIframe: true,
    iframeType: 'media'
  }
}`,...g.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: renderIframe,
  args: {
    title: "YouTube (Wrapped by CMS)",
    autoIframe: true,
    iframeType: 'wrapped'
  }
}`,...M.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: renderIframe,
  args: {
    autoIframe: true,
    iframeType: 'media'
  }
}`,...h.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: renderIframe,
  args: {
    title: "External Webpage",
    modifiers: "large",
    fullscreenMobile: true,
    autoIframe: true,
    iframeType: 'document'
  }
}`,...v.parameters?.docs?.source}}};U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  render: renderIframe,
  args: {
    title: "External Webpage (Fullscreen)",
    fullscreen: true,
    autoIframe: true,
    iframeType: 'document'
  }
}`,...U.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: renderIframe,
  args: {
    title: "YouTube (Pause Videos)",
    pauseVideos: true,
    autoIframe: true,
    iframeType: 'media'
  }
}`,...T.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      UluModal,
      UluButton
    },
    setup() {
      const isModalOpen = ref(false);
      return {
        args,
        isModalOpen
      };
    },
    template: \`
      <div>
        <UluButton @click="isModalOpen = true">
          Show Modal
        </UluButton>
        <UluModal v-model="isModalOpen" v-bind="args">
          <video controls width="100%">
            <source src="/assets/placeholder/4065947-uhd_4096_2160_25fps.mp4" type="video/mp4" />
            Sorry, your browser doesn't support embedded videos.
          </video>
        </UluModal>
      </div>
    \`
  }),
  args: {
    title: "Native Video (Pause Videos)",
    pauseVideos: true
  }
}`,...b.parameters?.docs?.source}}};const R=["Default","NoTeleport","PositionLeft","PositionRight","PositionLeftResizer","PositionRightResizer","PositionCenterResize","NoPreventScroll","PreventScrollNoPreventScrollShift","ContentAbove","AutoIframeMedia","AutoIframeMediaWrapped","AutoIframeMediaNoHeader","AutoIframeDocument","AutoIframeDocumentFullscreen","PauseVideos","PauseNativeVideo"];export{v as AutoIframeDocument,U as AutoIframeDocumentFullscreen,g as AutoIframeMedia,h as AutoIframeMediaNoHeader,M as AutoIframeMediaWrapped,f as ContentAbove,n as Default,p as NoPreventScroll,s as NoTeleport,b as PauseNativeVideo,T as PauseVideos,c as PositionCenterResize,l as PositionLeft,d as PositionLeftResizer,i as PositionRight,u as PositionRightResizer,m as PreventScrollNoPreventScrollShift,R as __namedExportsOrder,A as default};
