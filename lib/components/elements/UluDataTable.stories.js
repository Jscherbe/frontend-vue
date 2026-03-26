import UluDataTable from './UluDataTable.vue';
import { arrayCreate } from "@ulu/utils/array.js";

const columns = [
  { key: "name", title: "Name" },
  {
    title: "Favorites",
    columns: [
      { key: "favoriteFruit", title: "Fruit" },
      { key: "favoriteColor", title: "Color" },
    ]
  },
  { key: "size", title: "Size" },
];

const rows = arrayCreate(8, (index) => ({
  name: `User ${ index + 1 }`,
  favoriteFruit: ["Apple", "Banana", "Orange"][index % 3],
  favoriteColor: ["Red", "Blue", "Green"][index % 3],
  size: (index * 2) + 10
}));

export default {
  component: UluDataTable,
  tags: ['autodocs'],
  argTypes: {
    columns: { control: 'object' },
    rows: { control: 'object' },
    caption: { control: 'text' },
    striped: { control: 'boolean' },
    largeFirst: { control: 'boolean' }
  }
};

export const Default = {
  args: {
    columns,
    rows,
    caption: "Data Table Example",
  }
};

export const Striped = {
  args: {
    ...Default.args,
    striped: true,
    caption: "Striped Data Table",
  }
};

export const LargeFirstColumn = {
  args: {
    ...Default.args,
    largeFirst: true,
    caption: "Large First Column",
  }
};

export const StripedAndLargeFirst = {
  args: {
    ...Default.args,
    striped: true,
    largeFirst: true,
    caption: "Striped & Large First",
  }
};
