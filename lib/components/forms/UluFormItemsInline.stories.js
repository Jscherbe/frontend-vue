import UluFormItemsInline from './UluFormItemsInline.vue';
import UluFormItem from './UluFormItem.vue';
import UluFormCheckbox from './UluFormCheckbox.vue';

export default {
  component: UluFormItemsInline,
  tags: ['autodocs'],
};

export const Default = {
  render: (args) => ({
    components: { UluFormItemsInline, UluFormItem, UluFormCheckbox },
    setup() {
      return { args };
    },
    template: `
      <div class="form-theme">
        <UluFormItemsInline>
          <UluFormItem layout="checkbox" label="Option 1">
            <UluFormCheckbox :modelValue="true" />
          </UluFormItem>
          <UluFormItem layout="checkbox" label="Option 2">
            <UluFormCheckbox :modelValue="false" />
          </UluFormItem>
          <UluFormItem layout="checkbox" label="Option 3">
            <UluFormCheckbox :modelValue="true" />
          </UluFormItem>
        </UluFormItemsInline>
      </div>
    `,
  }),
};
