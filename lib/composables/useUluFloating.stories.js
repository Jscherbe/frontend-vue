import { ref, computed } from 'vue';
import { useUluFloating } from './useUluFloating';

export default {
  title: 'Composables/useUluFloating',
};

const Template = (args) => ({
  template: `
    <div>
      <button ref="trigger" @click="toggle">Toggle</button>
      <div v-if="isOpen" ref="content" :style="floatingStyles">
        <p>Floating content</p>
        <div ref="contentArrow" :style="arrowStyles"></div>
      </div>
    </div>
  `,
  setup() {
    const isOpen = ref(false);
    const trigger = ref(null);
    const content = ref(null);
    const config = computed(() => args);

    const { floatingStyles, arrowStyles, contentArrow, update } = useUluFloating(trigger, content, config);

    const toggle = () => {
      isOpen.value = !isOpen.value;
      if (isOpen.value) {
        update();
      }
    };

    return { isOpen, trigger, content, floatingStyles, arrowStyles, contentArrow, toggle };
  },
});

export const Default = Template.bind({});
Default.args = {
  placement: 'bottom',
  arrow: true,
  offset: 10
};