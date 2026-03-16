import UluCaptionedFigure from './UluCaptionedFigure.vue';
import UluImage from './UluImage.vue';

export default {
  component: UluCaptionedFigure,
  tags: ['autodocs'],
  argTypes: {
    caption: { control: 'text' },
    modifiers: { control: 'text' }
  }
};

const Template = (args) => ({
  components: { UluCaptionedFigure, UluImage },
  setup() {
    return { args };
  },
  template: `
    <div style="max-width: 600px; margin: 0 auto; padding: 2rem; background: #f0f0f0;">
      <UluCaptionedFigure v-bind="args">
        <UluImage 
          src="https://picsum.photos/id/1018/800/600" 
          alt="A beautiful landscape" 
        />
      </UluCaptionedFigure>
    </div>
  `,
});

export const Default = Template.bind({});
Default.args = {
  caption: 'This is a standard caption placed at the bottom.',
  modifiers: 'bottom'
};

export const CenteredOverlay = Template.bind({});
CenteredOverlay.args = {
  caption: 'This is a centered overlay caption.',
  modifiers: 'bottom center'
};

export const Traditional = Template.bind({});
Traditional.args = {
  caption: 'A traditional, statically positioned caption outside the image area.',
  modifiers: 'traditional'
};

export const WithSlot = (args) => ({
  components: { UluCaptionedFigure, UluImage },
  setup() {
    return { args };
  },
  template: `
    <div style="max-width: 600px; margin: 0 auto; padding: 2rem; background: #f0f0f0;">
      <UluCaptionedFigure v-bind="args">
        <UluImage 
          src="https://picsum.photos/id/1015/800/600" 
          alt="River valley" 
          style="display: block; width: 100%; height: auto;"
        />
        <template #caption>
          <strong>River Valley:</strong> <em>Photo taken in 2023</em>
        </template>
      </UluCaptionedFigure>
    </div>
  `,
});
WithSlot.args = {
  modifiers: 'bottom right'
};
