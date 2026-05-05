<template>
  <form class="form-theme" @submit.prevent="onSubmit">
    <div class="input-group input-group--joined">
      <div class="input-group__item input-group__item--field">
        <label :for="inputId" class="hidden-visually">{{ label }}</label>
        <input 
          type="search" 
          :id="inputId" 
          class="input-group__input"
          :placeholder="placeholder"
          :value="modelValue"
          @input="$emit('update:modelValue', $event.target.value)"
        >
      </div>
      <div class="input-group__item">
        <slot name="submit">
          <UluButton 
            class="input-group__button"
            v-bind="submitButtonProps"
          />
        </slot>
      </div>
    </div>
  </form>
</template>

<script setup>
  import { computed } from "vue";
  import { newId } from "../../utils/dom.js";
  import UluButton from "../elements/UluButton.vue";

  const props = defineProps({    
    /**
     * The search input value (for v-model).
     */
    modelValue: {
      type: String,
      default: ""
    },
    /**
     * The placeholder text for the search input.
     */
    placeholder: {
      type: String,
      default: "Titles, keyword…"
    },
    /**
     * The visually hidden label for the search input.
     */
    label: {
      type: String,
      default: "Search"
    },
    /**
     * Props to pass to the default UluButton component (used for submit button)
     * - Alternately use 'submit' slot
     */
    submitButtonProps: {
      type: Object,
      default: () => ({
        type: "submit",
        primary: true,
        icon: "type:search",
        ariaLabel: "Submit Search"
      })
    },
    /**
     * Optional ID for the input element. If not provided, a unique ID is generated.
     */
    id: String
  });

  const emit = defineEmits(["update:modelValue", "submit"]);

  const inputId = computed(() => props.id || newId());

  const onSubmit = () => {
    emit("submit", props.modelValue);
  };
</script>