import { arrayCreate } from "@ulu/utils/array.js";
import UluTableSticky from "../../lib/components/systems/table-sticky/UluTableSticky.vue";

const columns = [
  {
    key: "name",
    title: "Name"
  },
  {
    title: "Favorites",
    columns: [
      {
        key: "favoriteFruit",
        title: "Fruit"
      },
      {
        key: "favoriteColor",
        title: "Favorite Color"
      },
      {
        key: "favoriteFood",
        title: "Favorite Food"
      },
      {
        key: "favoriteActivity",
        title: "Favorite Activity"
      },
      {
        key: "favoriteSport",
        title: "Favorite Sport"
      },
      {
        key: "favoriteSeason",
        title: "Favorite Season"
      }
    ]
  },
  {
    key: "size",
    title: "Size"
  },
];

const rows = arrayCreate(10, (index) => ({
  name: `Example Name ${ index }`,
  favoriteFruit: "Apple",
  favoriteColor: "red",
  favoriteFood: "Chocolate",
  favoriteActivity: "I have many favorite activities, it can't be reduced to just one.",
  favoriteSport: "Rocket League",
  favoriteSeason: "Fall",
  size: 6
}));

export default {
  component: UluTableSticky,
  title: 'Components/UluTableSticky',
  tags: ['autodocs'],
};

const Template = (args) => ({
  components: { UluTableSticky },
  setup() {
    return { args };
  },
  template: `<UluTableSticky class="data-table" v-bind="args"></UluTableSticky>`
});

export const Default = Template.bind({});
Default.args = {
  columns,
  rows,
  caption: "Example Sticky Table",
  scrollControls: true
};





function createExampleData() {

  
  return { columns, rows };
}