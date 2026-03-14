import UluScrollSlider from './UluScrollSlider.vue';
import UluCard from './UluCard.vue';

export default {
  component: UluScrollSlider,
  tags: ['autodocs'],
  argTypes: {
    items: { control: 'object' },
    controls: { control: 'boolean' },
    scrollAmount: { control: 'number' },
    scrollBehavior: { control: 'select', options: ['smooth', 'auto'] },
    modifiers: { control: 'text' }
  }
};

const mockItems = Array.from({ length: 10 }).map((_, i) => ({
  id: i + 1,
  title: `Card Title ${i + 1}`,
  imageSrc: `https://picsum.photos/seed/${i + 50}/400/225`,
  imageAlt: `Placeholder image for card ${i + 1}`,
  bodyContent: `This is a short description for card number ${i + 1}. It provides some context about the image above.`,
}));

export const Default = {
  args: {
    items: mockItems,
    modifiers: 'cards', // Use the 'cards' modifier from _scroll-slider.scss
  },
  render: (args) => ({
    components: { UluScrollSlider, UluCard },
    setup() {
      return { args };
    },
    template: `
      <UluScrollSlider 
        v-bind="args" 
        style="max-width: 1200px; margin: 0 auto; outline: 1px dashed #ccc; padding: 0;"
      >
        <template #slide="{ item, isIntersecting, index }">
          <UluCard 
            :title="item.title"
            :imageSrc="item.imageSrc"
            :imageAlt="item.imageAlt"
          >
            <template #body>
              <p>{{ item.bodyContent }}</p>
            </template>
          </UluCard>
        </template>
      </UluScrollSlider>
    `
  })
};

export const CustomScrollAmount = {
  args: {
    ...Default.args,
    scrollAmount: 450 // Approximate width of a card + margin to scroll one at a time
  },
  render: Default.render
};

export const WithoutControls = {
  args: {
    ...Default.args,
    controls: false
  },
  render: Default.render
};
