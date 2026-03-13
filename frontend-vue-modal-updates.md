# Vue Modal Updates (frontend-vue)

## Objective
Update the companion Vue component library (`UluModal`) to incorporate recent fixes and features from the core ULU frontend dialog system.

## Tasks

### 1. Implement Safari Toggle Event Fallback
The native `<dialog>` toggle event is currently missing or unreliable in Safari. The core library has solved this using a fallback method (`observeDialogToggle`).
- **Action:** Update the `UluModal` component to use this fallback method instead of (or alongside) relying solely on the native `toggle` event.
- **Implementation:** 
  - Import the `observeDialogToggle` utility from the core frontend library (e.g., `import { observeDialogToggle } from "@ulu/frontend/lib/js/utils/dialog.js";`).
  - Set it up in the `onMounted` hook (or equivalent setup logic) to watch the `<dialog>` element's `open` state.
  - Make sure to clean up the observer in the `onUnmounted` hook (or when the component is destroyed) to prevent memory leaks.
  - The fallback handles tracking when the dialog opens/closes, which is essential for managing body scroll prevention (`preventScroll`).

### 2. Add `fullscreenMobile` Prop and Modifier
The core stylesheet now supports a `.modal--fullscreen-mobile` modifier that forces the modal to become fullscreen only when the viewport is below the mobile breakpoint, regardless of its desktop position or size.
- **Action:** Add support for this responsive modifier in the Vue component.
- **Implementation:**
  - Add a new boolean prop: `fullscreenMobile` (default: `false`).
  - Update the dynamic class binding on the root `<dialog>` element to include the `modal--fullscreen-mobile` class when the prop is `true`.
