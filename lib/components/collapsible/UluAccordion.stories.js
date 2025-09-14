import UluAccordion from "./UluAccordion.vue";

export default {
  component: UluAccordion,
  tags: ['autodocs'],
};

export const Default = {
  args: {
    triggerText: 'Toggle me!',
  },
  render: (args) => ({
    components: { UluAccordion },
    setup() {
      return { args };
    },
    template: `<UluAccordion v-bind="args">This is the content of the accordion</UluAccordion>`
  }),
};

export const OpenByDefault = {
  args: {
    triggerText: "I'm already open!",
    startOpen: true,
  },
  render: (args) => ({
    components: { UluAccordion },
    setup() {
      return { args };
    },
    template: `<UluAccordion v-bind="args">This is the content of the accordion</UluAccordion>`
  }),
};

export const CustomToggleSlot = {
  args: {},
  render: (args) => ({
    components: { UluAccordion },
    setup() {
      return { args };
    },
    template: `
      <UluAccordion v-bind="args">
        <template #trigger="{ open }">
          <em style="color: blue; font-weight: bold;">{{ open ? 'Close' : 'Open' }} Me!</em>
        </template>
        <p>This is the content inside the accordion.</p>
        <p>It can be any markup.</p>
      </UluAccordion>
    `
  }),
};

export const CustomClasses = {
  args: {
    triggerText: 'Custom Classes',
    classes: {
      container: 'border p-2',
      trigger: 'btn btn-primary',
      content: 'p-4 bg-light',
      icon: 'ms-auto'
    }
  },
  render: (args) => ({
    components: { UluAccordion },
    setup() {
      return { args };
    },
    template: `<UluAccordion v-bind="args">This is the content of the accordion with custom classes.</UluAccordion>`
  }),
};