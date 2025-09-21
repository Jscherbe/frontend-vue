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
          <UluFormItem>
            <UluFormCheckbox label="Option 1" :modelValue="true" />
          </UluFormItem>
          <UluFormItem>
            <UluFormCheckbox label="Option 2" :modelValue="false" />
          </UluFormItem>
          <UluFormItem>
            <UluFormCheckbox label="Option 3" :modelValue="true" />
          </UluFormItem>
        </UluFormItemsInline>
      </div>
    `,
  }),
};
