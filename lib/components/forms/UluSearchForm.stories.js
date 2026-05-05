import UluSearchForm from "./UluSearchForm.vue";
import { ref } from "vue";

export default {
  component: UluSearchForm,
  tags: ["autodocs"],
  argTypes: {
    modelValue: {
      control: "text",
      description: "The search value (for v-model)."
    },
    placeholder: {
      control: "text"
    },
    label: {
      control: "text"
    },
    submitButtonProps: {
      control: "object"
    },
    id: {
      control: "text"
    }
  }
};

export const Default = {
  render: (args) => ({
    components: { UluSearchForm },
    setup() {
      const searchValue = ref("");
      const onSubmit = (value) => {
        alert(`Submitted search: ${ value }`);
      };
      return { args, searchValue, onSubmit };
    },
    template: `
      <div style="max-width: 400px;">
        <UluSearchForm v-bind="args" v-model="searchValue" @submit="onSubmit" />
        <p style="margin-top: 1rem;">Current value: {{ searchValue }}</p>
      </div>
    `
  }),
  args: {
    placeholder: "Search the site..."
  }
};

export const Prepopulated = {
  render: (args) => ({
    components: { UluSearchForm },
    setup() {
      const searchValue = ref(args.modelValue);
      const onSubmit = (value) => {
        alert(`Submitted search: ${ value }`);
      };
      return { args, searchValue, onSubmit };
    },
    template: `
      <div style="max-width: 400px;">
        <UluSearchForm v-bind="args" v-model="searchValue" @submit="onSubmit" />
        <p style="margin-top: 1rem;">Current value: {{ searchValue }}</p>
      </div>
    `
  }),
  args: {
    placeholder: "Search the site...",
    modelValue: "Initial search query"
  }
};

