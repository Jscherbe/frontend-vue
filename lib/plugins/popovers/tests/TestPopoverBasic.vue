<template>
  <div>
    <UluPopover :classes="{ trigger: 'button' }">
      <template #trigger>
        Open Me
      </template>
      <template #default="{ close }">
        This is the content of the tooltip, <button class="link" @click="close">close this tooltip</button>.
      </template>
    </UluPopover>
  </div>
</template>

<script setup>
  import UluPopover from "../UluPopover.vue";
</script>