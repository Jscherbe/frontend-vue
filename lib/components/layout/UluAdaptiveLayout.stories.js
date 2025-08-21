import UluAdaptiveLayout from './UluAdaptiveLayout.vue';

export default {
  title: 'Components/Layout/UluAdaptiveLayout',
  component: UluAdaptiveLayout,
  
  tags: ['autodocs'],
};

export const Default = {
  layout: "fullscreen",
  render: () => ({
    components: { UluAdaptiveLayout },
    template: `
      <div style="border: 1px dashed #ccc; padding: 1rem;">
        <p>Try resizing your browser window!</p>
        <UluAdaptiveLayout>
          <template #default>Default Slot</template>
          <template #mobile>Mobile Slot</template>
        </UluAdaptiveLayout>
      </div>
    `,
  }),
  args: {},
};