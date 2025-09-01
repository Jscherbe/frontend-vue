import UluCheckboxMenu from "./UluCheckboxMenu.vue";

export default {
  component: UluCheckboxMenu,
};

export const Default = {
  args: {
    options: [
      { title: "Option 1", checked: false },
      { title: "Option 2", checked: true },
      { title: "Option 3", checked: false },
    ],
  },
};
