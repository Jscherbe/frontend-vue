import UluAction from './UluAction.vue';

export default {
  component: UluAction,
  tags: ['autodocs'],
  argTypes: {
    to: { control: 'text' },
    href: { control: 'text' },
    element: { control: 'text' },
    target: { control: 'text' },
    download: { control: 'text' }
  }
};

const Template = (args) => ({
  components: { UluAction },
  setup() {
    return { args };
  },
  template: `
    <UluAction v-bind="args" class="button">
      Click Me
    </UluAction>
    <div style="margin-top: 1rem; color: #666; font-family: monospace;">
      <small>Inspect the DOM element to see the resolved tag.</small>
    </div>
  `
});

export const AsButton = Template.bind({});
AsButton.args = {
  // No to, path, or href provided, so it defaults to a button
};

export const AsAnchor = Template.bind({});
AsAnchor.args = {
  href: 'https://example.com',
  target: '_blank'
};

export const AsRouterLink = Template.bind({});
AsRouterLink.args = {
  to: '/about'
};

export const ExplicitElementOverride = Template.bind({});
ExplicitElementOverride.args = {
  element: 'span',
  // Even if this were inside a menu, providing 'element' forces the tag.
};


const fakeDownloadHref = "data:text/plain;charset=utf-8,Hello%20World!";

export const DownloadWithFilename = Template.bind({});
DownloadWithFilename.args = {
  href: fakeDownloadHref,
  download: "download-test.txt"
};


export const TestDownloadWithoutFilename = Template.bind({});
TestDownloadWithoutFilename.args = {
  href: fakeDownloadHref,
  download: true
};
