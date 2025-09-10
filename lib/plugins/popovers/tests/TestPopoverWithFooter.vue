<template>
  <div>
    <UluPopover :classes="{ trigger: 'button' }">
      <template #trigger>
        I have footer
      </template>
      <template #default>
        This is the content of the tooltip
      </template>
      <template #footer="{ close }">
        <button class="button" @click="close">Close</button>
      </template>
    </UluPopover>
  </div>
</template>


<script setup>
  import UluPopover from "../UluPopover.vue";
</script>
