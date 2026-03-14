import UluSlideShow from './UluSlideShow.vue';
import UluSlideShowSlide from './UluSlideShowSlide.vue';

export default {
  component: UluSlideShow,
  subcomponents: { UluSlideShowSlide },
  tags: ['autodocs'],
  argTypes: {
    items: { control: 'object' },
    noNav: { control: 'boolean' },
    slideFocusable: { control: 'boolean' },
    scrollBehaviorNav: { control: 'text' },
    scrollBehaviorControl: { control: 'text' },
    initialActive: { control: 'number' }
  }
};

const mockItems = [
  { id: 1, title: 'Slide 1', content: 'Content for slide 1', color: '#ffcccc' },
  { id: 2, title: 'Slide 2', content: 'Content for slide 2', color: '#ccffcc' },
  { id: 3, title: 'Slide 3', content: 'Content for slide 3', color: '#ccccff' },
  { id: 4, title: 'Slide 4', content: 'Content for slide 4', color: '#ffffcc' },
  { id: 5, title: 'Slide 5', content: 'Content for slide 5', color: '#ffccff' }
];

export const Default = {
  args: {
    items: mockItems,
  },
  render: (args) => ({
    components: { UluSlideShow },
    setup() {
      return { args };
    },
    template: `
      <UluSlideShow v-bind="args" style="max-width: 600px; margin: 0 auto; overflow: hidden;">
        <template #slide="{ item }">
          <div :style="{ backgroundColor: item.color, height: '300px', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }">
            <h3 style="margin: 0;">{{ item.title }}</h3>
            <p>{{ item.content }}</p>
          </div>
        </template>
        <template #nav="{ item, active }">
          <span :style="{ fontWeight: active ? 'bold' : 'normal', padding: '0.5rem', borderBottom: active ? '2px solid black' : '2px solid transparent' }">
            {{ item.title }}
          </span>
        </template>
      </UluSlideShow>
    `
  })
};

export const NoNavigation = {
  args: {
    items: mockItems,
    noNav: true
  },
  render: Default.render
};
