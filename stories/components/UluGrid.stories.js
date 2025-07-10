import UluGrid from "../../lib/components/UluGrid.vue";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
  title: 'Components/UluGrid',
  component: UluGrid,
  tags: ['autodocs'],
  render: () => ({
    components: { UluGrid }, 
    "template": `
      <UluGrid data-grid="columns: 12">
        <div data-grid-item="width: 6">Width of 6</div>
        <div data-grid-item="width: 4, offset: 2">Width of 4, offset 2</div>
      </UluGrid>
    `
  }),
};

export const DefaultExample = {
  args: {
    // href: "#"
  }
};

