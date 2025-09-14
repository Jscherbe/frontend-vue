import{U as l,o as n}from"./iframe-Df1G6izM.js";import"./preload-helper-BJwshlQW.js";const m={component:n,tags:["autodocs"],args:{title:"Card Title",imageSrc:"https://picsum.photos/id/1062/400/225",imageAlt:"Placeholder image of a landscape",bodyContent:"This is the body of the card. It contains the main content and description. You can put any text or other components here.",asideContent:"",footerContent:""},render:i=>({components:{UluCard:n,UluButton:l},setup(){return{args:i}},template:`
      <div style="max-width: 380px;">
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
      </div>
    `})},e={},t={args:{horizontal:!0,title:"Horizontal Card"}},r={args:{horizontalCenter:!0,title:"Horizontal Centered Card"}},a={args:{overlay:!0,title:"Overlay Card",modifiers:"invert"}},o={args:{title:"This Entire Card is a Link",href:'javascript:alert("Card clicked!");'}},s={args:{title:"Card With All Slots",asideContent:"Aside Content",footerContent:"Read More"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    horizontal: true,
    title: 'Horizontal Card'
  }
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    horizontalCenter: true,
    title: 'Horizontal Centered Card'
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    overlay: true,
    title: 'Overlay Card',
    modifiers: 'invert' // Assumes an 'invert' modifier exists for light text on dark image
  }
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'This Entire Card is a Link',
    href: 'javascript:alert("Card clicked!");'
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Card With All Slots',
    asideContent: 'Aside Content',
    footerContent: 'Read More'
  }
}`,...s.parameters?.docs?.source}}};const p=["Default","Horizontal","HorizontalCentered","Overlay","AsLink","Complex"];export{o as AsLink,s as Complex,e as Default,t as Horizontal,r as HorizontalCentered,a as Overlay,p as __namedExportsOrder,m as default};
