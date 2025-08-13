import { api as $toast } from "../store.js";
import CustomToast from "./CustomToast.vue";
import { shallowRef } from "vue";

const actionsTest = [
  {
    label: "Retry",
    click: () => {}
  }
];

export const toastConfigs = [
  {
    title: "Title",
    date: "10m ago",
    description: "This is the description",
  },
  {
    description: "This is the description",
    actions: actionsTest
  },
  {
    description: "Database error",
    class: "is-danger background-context",
    icon: "triangle-exclamation",
    actions: actionsTest,
  },
  {
    title: "Brief Title",
    description: "This is a warning, lorem ipsum et depsi",
    class: "is-warning background-context",
    icon: "triangle-exclamation",
    actions: [...actionsTest, {
      label: "Cancel",
      click: () => {}
    }]
  },
  {
    class: "is-info background-context",
    description: "Lorem ipsum et depsi anu",
    icon: "circle-info",
  },
  {
    class: "is-success background-context",
    description: "File Saved!",
    icon: "check"
  },
];

/**
 * Function to trigger the showing of toasts
 */
export function delayToasts() {
  toastConfigs.forEach((config, i) => {
    setTimeout(() => $toast.add(config), 1500 * i);
  });
}
export function showToasts() {
  toastConfigs.forEach(config => $toast.add(config));
}
export function testCustomComponent() {
  $toast.add({
    component: shallowRef(CustomToast)
  });
}



