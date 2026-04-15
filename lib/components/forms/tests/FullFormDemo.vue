<template>
  <UluForm class="type-max-width-small" fullWidth>
    <UluFormFieldset legend="Personal Information">
      <UluFormItem text label="First Name">
        <UluFormText modelValue="John" />
      </UluFormItem>
      <UluFormItem text error label="Last Name" errorMessage="This field is required.">
        <UluFormText modelValue="Doe" />
      </UluFormItem>
      <UluFormItem text warning label="Email" warningMessage="Please enter a valid email.">
        <UluFormText modelValue="john.doe@" />
      </UluFormItem>
    </UluFormFieldset>

    <UluFormItem textarea label="Your Message">
      <UluFormTextarea modelValue="This is a message." />
    </UluFormItem>

    <UluFormItem select label="Select an option">
      <UluFormSelect
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
        <UluFormItem label="Option 1" labelAfter>
          <UluFormCheckbox :modelValue="true" />
        </UluFormItem>
        <UluFormItem label="Option 2" labelAfter>
          <UluFormCheckbox :modelValue="false" />
        </UluFormItem>
      </UluFormItemsInline>
    </UluFormFieldset>

    <UluFormFieldset legend="Radio Options">
        <UluFormItem label="Radio 1" labelAfter>
          <UluFormRadio name="radio-group" value="radio1" v-model="radioValue" />
        </UluFormItem>
        <UluFormItem label="Radio 2" labelAfter>
          <UluFormRadio name="radio-group" value="radio2" v-model="radioValue" />
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
import UluFormActions from '../UluFormActions.vue';
import UluButton from '../../elements/UluButton.vue';

const radioValue = ref('radio1');
</script>
