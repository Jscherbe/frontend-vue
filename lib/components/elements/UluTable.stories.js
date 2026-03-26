import UluTable from './UluTable.vue';
import { arrayCreate } from "@ulu/utils/array.js";

const columns = [
  { key: "name", title: "Name" },
  {
    title: "Favorites",
    columns: [
      { key: "favoriteFruit", title: "Fruit" },
      { key: "favoriteColor", title: "Favorite Color" },
    ]
  },
  { key: "size", title: "Size" },
];

const rows = arrayCreate(5, (index) => ({
  name: `Example Name ${ index }`,
  favoriteFruit: "Apple",
  favoriteColor: "red",
  size: 6
}));

export default {
  component: UluTable,
  tags: ['autodocs'],
  argTypes: {
    columns: { control: 'object' },
    rows: { control: 'object' },
    caption: { control: 'text' }
  }
};

const Template = (args) => ({
  components: { UluTable },
  setup() {
    return { args };
  },
  template: `<UluTable v-bind="args"></UluTable>`
});

export const Default = Template.bind({});
Default.args = {
  columns,
  rows,
  caption: "Basic Unstyled Table"
};

export const Compositional = {
  render: (args) => ({
    components: { UluTable },
    setup() {
      return { args };
    },
    template: `
      <UluTable v-bind="args">
        <caption>Manually Composed Table</caption>
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Age</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>John</td>
            <td>30</td>
          </tr>
          <tr>
            <td>Jane</td>
            <td>28</td>
          </tr>
        </tbody>
      </UluTable>
    `,
  }),
  args: {
    columns: undefined,
    rows: undefined
  }
};
