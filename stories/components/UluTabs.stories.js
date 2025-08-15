import UluTabGroup from "../../lib/components/collapsible/UluTabGroup.vue";
import UluTabList from "../../lib/components/collapsible/UluTabList.vue";
import UluTab from "../../lib/components/collapsible/UluTab.vue";
import UluTabPanels from "../../lib/components/collapsible/UluTabPanels.vue";
import UluTabPanel from "../../lib/components/collapsible/UluTabPanel.vue";
 
export default {
  component: UluTabGroup,
  subcomponents: { UluTabList, UluTab, UluTabPanels, UluTabPanel }, 
  tags: ['autodocs']
};

const Template = (args) => ({
  components: { UluTabGroup, UluTabList, UluTab, UluTabPanels, UluTabPanel },
  setup() {
    return { args };
  },
  template: `
    <UluTabGroup v-bind="args">
      <UluTabList>
        <UluTab>Profile</UluTab>
        <UluTab>Settings</UluTab>
        <UluTab>Notifications</UluTab>
      </UluTabList>
      <UluTabPanels>
        <UluTabPanel>
          <h3>User Profile</h3>
          <p>This is where your profile information will be displayed.</p>
        </UluTabPanel>
        <UluTabPanel>
          <h3>Account Settings</h3>
          <p>Manage your account preferences here.</p>
        </UluTabPanel>
        <UluTabPanel>
          <h3>Your Notifications</h3>
          <p>You have 3 new notifications.</p>
        </UluTabPanel>
      </UluTabPanels>
    </UluTabGroup>
  `
});

export const Default = Template.bind({});
Default.args = {};

export const Vertical = Template.bind({});
Vertical.args = {
  vertical: true
};

export const DefaultIndex = Template.bind({});
DefaultIndex.args = {
  defaultIndex: 2
};