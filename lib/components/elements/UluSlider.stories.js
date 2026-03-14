import UluSlider from './UluSlider.vue';

export default {
  component: UluSlider,
  tags: ['autodocs'],
  argTypes: {
    items: { control: 'object' },
    transition: { control: 'select', options: ['slide', 'fade', 'none'] },
    duration: { control: 'number' },
    loop: { control: 'boolean' },
    nav: { control: 'boolean' },
    controls: { control: 'boolean' },
    autoplay: { control: 'number' },
  }
};

const mockItems = [
  { id: 1, title: 'Slide 1', content: 'First slide content', color: '#ffcccc' },
  { id: 2, title: 'Slide 2', content: 'Second slide content', color: '#ccffcc' },
  { id: 3, title: 'Slide 3', content: 'Third slide content', color: '#ccccff' },
  { id: 4, title: 'Slide 4', content: 'Fourth slide content', color: '#ffffcc' },
];

export const Default = {
  args: {
    items: mockItems,
    transition: 'slide'
  },
  render: (args) => ({
    components: { UluSlider },
    setup() {
      return { args };
    },
    template: `
      <UluSlider v-bind="args" style="max-width: 800px; margin: 0 auto; height: 300px; outline: 1px solid #ccc;">
        <template #slide="{ item, active, upcoming, index }">
          <div :style="{ backgroundColor: item.color, width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }">
            <h2 style="margin: 0 0 1rem 0;">{{ item.title }}</h2>
            <p>{{ item.content }}</p>
            <div style="margin-top: 2rem; font-size: 0.8rem; background: rgba(255,255,255,0.5); padding: 0.5rem; border-radius: 4px;">
              State: {{ active ? 'Active' : 'Inactive' }} | Upcoming: {{ upcoming }} | Index: {{ index }}
            </div>
          </div>
        </template>
      </UluSlider>
    `
  })
};

export const FadeTransition = {
  args: {
    ...Default.args,
    transition: 'fade'
  },
  render: Default.render
};

export const NoLoop = {
  args: {
    ...Default.args,
    loop: false
  },
  render: Default.render
};

export const Autoplay = {
  args: {
    ...Default.args,
    autoplay: 3000
  },
  render: Default.render
};

export const CustomNavigation = {
  args: {
    ...Default.args,
  },
  render: (args) => ({
    components: { UluSlider },
    setup() {
      return { args };
    },
    template: `
      <UluSlider v-bind="args" style="max-width: 800px; margin: 0 auto; height: 300px; outline: 1px solid #ccc;">
        <template #slide="{ item }">
          <div :style="{ backgroundColor: item.color, width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }">
            <h2>{{ item.title }}</h2>
          </div>
        </template>
        <template #nav="{ item, active }">
          <span :style="{ fontWeight: active ? 'bold' : 'normal', padding: '0.2rem', textDecoration: active ? 'underline' : 'none' }">
            {{ item.title }}
          </span>
        </template>
        <template #previous>
          <span style="background: white; padding: 0.5rem; border: 1px solid black; cursor: pointer;">PREV</span>
        </template>
        <template #next>
          <span style="background: white; padding: 0.5rem; border: 1px solid black; cursor: pointer;">NEXT</span>
        </template>
      </UluSlider>
    `
  })
};
