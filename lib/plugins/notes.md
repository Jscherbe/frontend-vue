# Modals Redesign

## Goals

- Keep old API
- Allow inline modals for advanced uses where state can be easily added to modal
- Rely on native dialog, remove focus trap, etc

## Approach

So the plugin would:

- Register the components globally (global modal registry)
- Provide a way to add modals to a global lookup to be triggered by $modals.open 

The AppModals.vue component would:

- Be used to display modals from the plugins global modal registry
- User would add this to the App.vue template

The AppModal.vue component would:

- The main template for a modal
- Would be used by modals shown via global modal registry and used independently 
- When used independently the user would need to teleport themselves


