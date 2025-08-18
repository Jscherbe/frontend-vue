import { delayToasts } from "./tests/test.js";
import { useToast } from "./useToast.js";
import UluButton from "../../components/elements/UluButton.vue";  

export default {
  // title: 'Plugins/Toast',
};

const Template = (args) => ({
  components: { UluButton },
  setup() {
    const toastController = useToast();
    const showPersistentToast = () => {
      console.log("fired");
      console.log(toastController);
      
      
      toastController.add({
        description: "Database error",
        class: "is-danger background-context",
        icon: "triangle-exclamation",
        duration: false,
        actions: [
          {
            label: "Retry",
            click: (_, toast) => {
              toastController.remove(toast.uid);
            }
          }
        ],
      });
    }
    return { delayToasts, showPersistentToast, ...args };
  },
  template: `
    <div>
      <UluButton @click="delayToasts" text="Show Toasts"/>
      <UluButton @click="showPersistentToast" text="Show Persistent Toast"/>
    </div>
  `,
});

export const Default = Template.bind({});
Default.args = {};