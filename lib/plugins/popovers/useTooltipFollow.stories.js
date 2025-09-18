import TestTooltipFollow from "./tests/TestTooltipFollow.vue";

export default {
  component: { TestTooltipFollow },
  tags: ['autodocs'],
  parameters: {
    docs: {
      source: {
        language: "html",
        code: `
<template>
  <div 
    @pointerenter="showFollow"
    @pointermove="updateFollow"
    @pointerleave="hideFollow"
    style="
      background: lightblue; 
      width: 500px; 
      height: 500px; 
      display: flex; 
      align-items: center;
      justify-content: center
    "
  >
    Cursor Test
  </div>
</template>

<script setup>
  import { computed } from "vue";
  import useTooltipFollow from "../useTooltipFollow.js";

  const { 
    x, 
    y, 
    show, 
    hide, 
    update 
  } = useTooltipFollow({
    content: computed(() => \`x: \${ Math.round(x) }, y: \${ Math.round(y) }\`)
  });

  const showFollow = (event) => {
    updateFollow(event);
    show();
  };

  const updateFollow = ({ clientX, clientY }) => {
    update({
      x: clientX,
      y: clientY
    });
  };

  const hideFollow = () => {
    hide();
  };
</script>
        `
      }
    }
  }
};

// Template for basic usage
const Template = (args) => ({
  components: { TestTooltipFollow },
  setup() {
    return { args };
  },
  "template": `
    <TestTooltipFollow/>
  `,

});

export const Default = Template.bind({});
Default.args = {};