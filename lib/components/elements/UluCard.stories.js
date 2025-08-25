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
    href: 'javascript:alert("Card clicked!");',
  }
};

export const Complex = {
  args: {
    title: 'Card With All Slots',
    asideContent: 'Aside Content',
    footerContent: 'Read More',
  }
};
