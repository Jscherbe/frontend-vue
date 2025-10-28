import{U as p,p as d}from"./iframe-oI00zjvw.js";import"./preload-helper-BJwshlQW.js";const m={component:d,tags:["autodocs"],args:{title:"Card Title",imageSrc:"https://picsum.photos/id/1062/400/225",imageAlt:"Placeholder image of a landscape",bodyContent:"This is the body of the card. It contains the main content and description. You can put any text or other components here.",asideContent:"",footerContent:""},render:c=>({components:{UluCard:d,UluButton:p},setup(){return{args:c}},template:`
      <UluCard v-bind="args">
        <template v-if="args.bodyContent" #body>
          <p style="margin: 0;">{{ args.bodyContent }}</p>
        </template>
        <template v-if="args.asideContent" #aside>
          <p style="font-size: 0.9em; color: #666; margin: 0;">{{ args.asideContent }}</p>
        </template>
        <template v-if="args.footerContent" #footer>
          <UluButton size="small">{{ args.footerContent }}</UluButton>
        </template>
      </UluCard>
    `})},t={},e={args:{horizontal:!0,title:"Horizontal Card"}},r={args:{horizontalCenter:!0,title:"Horizontal Centered Card"}},o={args:{overlay:!0,title:"Overlay Card",modifiers:"invert"}},n={args:{title:"This Entire Card is a Link",href:"https://www.google.com",target:"_blank"}},a={args:{title:"Card With All Slots",asideContent:"Aside Content",footerContent:"Read More"}},s={args:{title:"This title is a link",titleHref:"https://www.google.com",titleTarget:"_blank",proxyClick:!0,bodyContent:"Click anywhere on the card (except the footer button) to trigger the title link.",footerContent:"A Button"}},i={args:{title:"Card with a proxy target",proxyClick:!0,bodyContent:'Click anywhere on the card to trigger the "Proxy Target" button in the footer.',footerContent:"Not The Target"},render:c=>({components:{UluCard:d,UluButton:p},setup(){return{args:c}},template:`
      <UluCard v-bind="args">
        <template v-if="args.bodyContent" #body>
          <p style="margin: 0;">{{ args.bodyContent }}</p>
        </template>
        <template #footer>
          <UluButton size="small" style="margin-right: 8px;">{{ args.footerContent }}</UluButton>
          <UluButton 
            href="https://www.google.com"
            target="_blank"
            size="small" 
            data-ulu-card-proxy-target
          >
            Proxy Target
          </UluButton>
        </template>
      </UluCard>
    `})},l={args:{title:"Card that emits an event",proxyClick:!0,bodyContent:"Click anywhere on the card to trigger a proxy-click event.",footerContent:"A Button"},argTypes:{onProxyClick:{action:"proxy-click"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    horizontal: true,
    title: 'Horizontal Card'
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    horizontalCenter: true,
    title: 'Horizontal Centered Card'
  }
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    overlay: true,
    title: 'Overlay Card',
    modifiers: 'invert' // Assumes an 'invert' modifier exists for light text on dark image
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'This Entire Card is a Link',
    href: 'https://www.google.com',
    target: '_blank'
  }
}`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Card With All Slots',
    asideContent: 'Aside Content',
    footerContent: 'Read More'
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'This title is a link',
    titleHref: "https://www.google.com",
    titleTarget: '_blank',
    proxyClick: true,
    bodyContent: 'Click anywhere on the card (except the footer button) to trigger the title link.',
    footerContent: 'A Button'
  }
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Card with a proxy target',
    proxyClick: true,
    bodyContent: 'Click anywhere on the card to trigger the "Proxy Target" button in the footer.',
    footerContent: 'Not The Target'
  },
  render: args => ({
    components: {
      UluCard,
      UluButton
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <UluCard v-bind="args">
        <template v-if="args.bodyContent" #body>
          <p style="margin: 0;">{{ args.bodyContent }}</p>
        </template>
        <template #footer>
          <UluButton size="small" style="margin-right: 8px;">{{ args.footerContent }}</UluButton>
          <UluButton 
            href="https://www.google.com"
            target="_blank"
            size="small" 
            data-ulu-card-proxy-target
          >
            Proxy Target
          </UluButton>
        </template>
      </UluCard>
    \`
  })
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Card that emits an event',
    proxyClick: true,
    bodyContent: 'Click anywhere on the card to trigger a proxy-click event.',
    footerContent: 'A Button'
  },
  argTypes: {
    onProxyClick: {
      action: 'proxy-click'
    }
  }
}`,...l.parameters?.docs?.source}}};const C=["Default","Horizontal","HorizontalCentered","Overlay","AsLink","Complex","ProxyClickTitleLink","ProxyClickSlottedTarget","ProxyClickEmitEvent"];export{n as AsLink,a as Complex,t as Default,e as Horizontal,r as HorizontalCentered,o as Overlay,l as ProxyClickEmitEvent,i as ProxyClickSlottedTarget,s as ProxyClickTitleLink,C as __namedExportsOrder,m as default};
