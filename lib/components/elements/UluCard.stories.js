import UluCard from './UluCard.vue';
import UluButton from './UluButton.vue';

export default {
  component: UluCard,
  tags: ["autodocs"],
  // Default args for all stories
  args: {
    title: 'Card Title',
    imageSrc: 'https://picsum.photos/id/1062/400/225',
    imageAlt: 'Placeholder image of a landscape',
    bodyContent: 'This is the body of the card. It contains the main content and description. You can put any text or other components here.',
    asideContent: '',
    footerContent: '',
  },
  // A single render function to handle all slots based on args
  render: (args) => ({
    components: { UluCard, UluButton },
    setup() {
      return { args };
    },
    template: `
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
    `,
  }),
};

// --- Stories --- 

export const Default = {};

export const Horizontal = {
  args: {
    horizontal: true,
    title: 'Horizontal Card',
  }
};

export const HorizontalCentered = {
  args: {
    horizontalCenter: true,
    title: 'Horizontal Centered Card',
  }
};

export const Overlay = {
  args: {
    overlay: true,
    title: 'Overlay Card',
    modifiers: 'invert', // Assumes an 'invert' modifier exists for light text on dark image
  }
};

export const AsLink = {
  args: {
    title: 'This Entire Card is a Link',
    href: 'https://www.google.com',
    target: '_blank',
  }
};

export const Complex = {
  args: {
    title: 'Card With All Slots',
    asideContent: 'Aside Content',
    footerContent: 'Read More',
  }
};

export const ProxyClickTitleLink = {
  args: {
    title: 'This title is a link',
    titleHref: "https://www.google.com",
    titleTarget: '_blank',
    proxyClick: true,
    bodyContent: 'Click anywhere on the card (except the footer button) to trigger the title link.',
    footerContent: 'A Button',
  }
};

export const ProxyClickSlottedTarget = {
  args: {
    title: 'Card with a proxy target',
    proxyClick: true,
    bodyContent: 'Click anywhere on the card to trigger the "Proxy Target" button in the footer.',
    footerContent: 'Not The Target',
  },
  render: (args) => ({
    components: { UluCard, UluButton },
    setup() {
      return { args };
    },
    template: `
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
    `,
  }),
};

export const ProxyClickEmitEvent = {
  args: {
    title: 'Card that emits an event',
    proxyClick: true,
    bodyContent: 'Click anywhere on the card to trigger a proxy-click event.',
    footerContent: 'A Button',
  },
  argTypes: {
    onProxyClick: { action: 'proxy-click' },
  },
};