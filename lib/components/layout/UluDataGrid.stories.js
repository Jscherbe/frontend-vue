import UluDataGrid from "./UluDataGrid.vue";

const TEMPLATE_CODE = `
<UluDataGrid data-grid="columns: 12">  
  <div data-grid-item="width: 6">Width of 6</div>
  <div data-grid-item="width: 4, offset: 2">Width of 4, offset 2</div>
</UluDataGrid>
`;

export default {
  component: UluDataGrid,
  tags: ['autodocs'],
};

const Template = (args) => ({ 
  components: { UluDataGrid },
  setup() {
    return { args };
  },
  template: TEMPLATE_CODE
});

export const DefaultExample = Template.bind({});
DefaultExample.parameters = {
  docs: {
    source: {
      code: TEMPLATE_CODE,
      language: 'html',
      type: 'code',
    },
  },
}