<template>
  <UluForm class="type-max-width-small" fullWidth>
    <UluFormFieldset legend="Personal Information">
      <UluFormItem text>
        <UluFormText label="First Name" modelValue="John" />
      </UluFormItem>
      <UluFormItem text error>
        <UluFormText label="Last Name" modelValue="Doe" />
        <UluFormMessage error>This field is required.</UluFormMessage>
      </UluFormItem>
      <UluFormItem text warning>
        <UluFormText label="Email" modelValue="john.doe@" />
        <UluFormMessage warning>Please enter a valid email.</UluFormMessage>
      </UluFormItem>
    </UluFormFieldset>

    <UluFormItem textarea>
      <UluFormTextarea label="Your Message" modelValue="This is a message." />
    </UluFormItem>

    <UluFormItem select>
      <UluFormSelect
        label="Select an option"
        :options="[
          { value: 'option1', text: 'Option 1' },
          { value: 'option2', text: 'Option 2' },
          { value: 'option3', text: 'Option 3' },
        ]"
        modelValue="option2"
      />
    </UluFormItem>

    <UluFormFieldset legend="Options">
      <UluFormItemsInline>
        <UluFormItem>
          <UluFormCheckbox label="Option 1" :modelValue="true" />
        </UluFormItem>
        <UluFormItem>
          <UluFormCheckbox label="Option 2" :modelValue="false" />
        </UluFormItem>
      </UluFormItemsInline>
    </UluFormFieldset>

    <UluFormFieldset legend="Radio Options">
        <UluFormItem>
          <UluFormRadio name="radio-group" label="Radio 1" value="radio1" v-model="radioValue" />
        </UluFormItem>
        <UluFormItem>
          <UluFormRadio name="radio-group" label="Radio 2" value="radio2" v-model="radioValue" />
        </UluFormItem>
    </UluFormFieldset>

    <UluFormActions>
      <UluButton primary text="Submit" />
      <UluButton text="Cancel" />
    </UluFormActions>
  </UluForm>
</template>

<script setup>
import { ref } from 'vue';
import UluForm from '../UluForm.vue';
import UluFormFieldset from '../UluFormFieldset.vue';
import UluFormItem from '../UluFormItem.vue';
import UluFormText from '../UluFormText.vue';
import UluFormTextarea from '../UluFormTextarea.vue';
import UluFormSelect from '../UluFormSelect.vue';
import UluFormCheckbox from '../UluFormCheckbox.vue';
import UluFormRadio from '../UluFormRadio.vue';
import UluFormItemsInline from '../UluFormItemsInline.vue';
import UluFormMessage from '../UluFormMessage.vue';
import UluFormActions from '../UluFormActions.vue';
import UluButton from '../../elements/UluButton.vue';

const radioValue = ref('radio1');
</script>
