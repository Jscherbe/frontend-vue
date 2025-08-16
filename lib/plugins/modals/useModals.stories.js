import UluButton from "../../components/elements/UluButton.vue";
import { useModals } from "./useModals";

export default {
  // title: 'Plugins/modals'
};

export const useModalsStory = {
  name: 'useModals',
  render: () => ({
    components: { UluButton },
    setup() {
      const modals = useModals();
      const openDemo = () => {
        console.log("This is opening via uluModals composable");
        modals.open("demo");
      };
      return { openDemo };
    },
    "template": `
      <UluButton @click="openDemo" text="Open Modal"/>
    `,
  }),
  args: {},
};