import { ref } from "vue";
import UluCheckboxMenu from "./UluCheckboxMenu.vue";

export default {
  component: UluCheckboxMenu,
  argTypes: {
    legend: {
      control: "text",
    },
    type: {
      control: "radio",
      options: ["checkbox", "radio"],
    },
  },
};

export const Checkboxes = {
  render: (args) => ({
    components: { UluCheckboxMenu },
    setup() {
      const selections = ref(["option-2"]);
      const options = [
        { label: "Option 1", value: "option-1" },
        { label: "Option 2", value: "option-2" },
        { label: "Option 3", value: "option-3" },
      ];
      return { args, options, selections };
    },
    template: `
      <UluCheckboxMenu
        v-model="selections"
        :options="options"
        :legend="args.legend || 'Checkbox Legend'"
        :type="args.type || 'checkbox'"
      />
    `,
  }),
};

export const Radios = {
  render: (args) => ({
    components: { UluCheckboxMenu },
    setup() {
      const selections = ref("option-2");
      const options = [
        { label: "Option 1", value: "option-1" },
        { label: "Option 2", value: "option-2" },
        { label: "Option 3", value: "option-3" },
      ];
      return { args, options, selections };
    },
    template: `
      <UluCheckboxMenu
        v-model="selections"
        :options="options"
        :legend="args.legend || 'Radio Legend'"
        type="radio"
      />
    `,
  }),
};
