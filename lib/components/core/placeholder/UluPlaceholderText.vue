<template>
  <component 
    v-for="index in parseInt(amount)" 
    :key="index"
    :is="element"
  >
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed semper erat tincidunt tellus vestibulum dictum. Fusce vel augue commodo, egestas diam sed, accumsan leo. Maecenas congue nec nisl et ullamcorper. Maecenas tincidunt, tortor et viverra eleifend, enim leo vestibulum ipsum, quis placerat mi nisi nec ex. Vivamus a justo volutpat, scelerisque elit eget, lacinia ex. Phasellus dapibus sollicitudin tortor, vitae suscipit nunc condimentum ut. Cras suscipit feugiat nibh nec consectetur. Phasellus vitae quam blandit, cursus metus ut, placerat mi. Sed tempor lacus non est interdum imperdiet nec quis metus. Praesent vel eleifend diam. Donec tincidunt eget purus sed posuere.
  </component>
</template>

<script>
  export default {
    name: "PlaceholderText",
    props: {
      amount: {
        type: Number,
        default: 1
      },
      element: {
        type: String,
        default: "p"
      }
    },
  };
</script>