<template>
  <div 
    class="progress-bar"
    :class="{
      'progress-bar--small' : small,
      'type-small' : small
    }"
  >
    <div class="progress-bar__header">
      <strong 
        class="progress-bar__label" 
        :class="{ 
          'type-normal' : small,
          'hidden-visually' : labelHidden,
        }"
      >
        {{ label }}
      </strong>
      <div v-if="status" class="progress-bar__icon">
        <StatusIcon :type="status.type" />
        <span class="hidden-visually">{{ status.message }}</span>
      </div>
    </div>
    <div class="progress-bar__track">
      <div 
        class="progress-bar__bar"
        :style="`width: ${ percentage }%`"
      ></div>
      <div 
        v-if="deficit"
        class="progress-bar__bar--deficit"
        :style="`width: ${ defPercentage }%`"
      ></div>
    </div>
    <div class="progress-bar__values">
      <div class="progress-bar__value progress-bar__value--amount">
        <strong class="hidden-visually">Amount:</strong>
        {{ amount }}
      </div>
      <div 
        v-if="deficit > 0" 
        class="progress-bar__value progress-bar__value--deficit color-status is-danger"
      >
        <strong class="hidden-visually">Deficit: </strong>
        -{{ deficit }}
      </div>
      <div class="progress-bar__value progress-bar__value--total">
        <strong class="hidden-visually">Total:</strong>
        {{ total }}
      </div>
    </div>
  </div>
</template>

<script setup>
  import { computed } from "vue";

  const props = defineProps({
    small: Boolean,
    label: {
      type: String,
      default: "Progress"
    },
    labelHidden: Boolean,
    total: Number,
    deficit: Number,
    amount: Number
  });

  const percentage = computed(() => {
    return props.amount / props.total * 100;
  });
  const defPercentage = computed(() => {
    return props.deficit ? props.deficit / props.total * 100 : 0;
  });
  const isComplete = computed(() => {
    return props.amount >= props.total;
  });
  const status = computed(() => {
    if (isComplete.value) {
      return {
        type: "success",
        message: "Item Completed"
      };
    } else if (props.deficit) {
      return {
        type: "success",
        message: "Item Completed"
      };
    } else {
      return {
        type: "danger",
        message: "Item Has Deficit"
      };
    }
  });
</script>