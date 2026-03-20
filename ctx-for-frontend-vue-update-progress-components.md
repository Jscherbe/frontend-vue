# Frontend Vue Update Instructions: Progress Components

## Overview of Upstream Changes

The `@ulu/frontend` CSS framework has standardized its component API for progress indicators in version `0.4.0`. Non-standard modifiers and status names have been replaced with the core semantic color names (`success`, `warning`, `danger`). The default base colors have also been shifted from `indicator` to `accent`.

### `progress-bar` Changes
*   **Default Color**: The default bar color changed from `indicator` to `accent`.
*   **Modifiers**: The non-standard `.progress-bar--positive` and `.progress-bar--negative` modifiers have been completely removed.
*   **New Modifiers**: The component now uses standard semantic modifiers: `.progress-bar--success`, `.progress-bar--warning`, and `.progress-bar--danger`.

### `progress-circle` Changes
*   **Default Color**: The default progress stroke color changed from `indicator` to `accent`.
*   **Status Classes**: The non-standard status modifiers (`.progress-circle--low`, `.progress-circle--incomplete`, `.progress-circle--complete`) have been completely removed.
*   **New Status Classes**: The component now uses standard semantic modifiers: `.progress-circle--danger`, `.progress-circle--warning`, and `.progress-circle--success`.

---

## Required Updates in `frontend-vue`

These CSS changes constitute breaking API changes for any Vue components wrapping them. You must update the corresponding Vue components and their Storybook stories.

### 1. `UluProgressBar`
*   **Component (`UluProgressBar.vue`)**:
    *   Review the `props` definition for any hardcoded validation or type hints referencing `positive` or `negative` styles.
    *   Update the logic that generates the modifier classes to output `--success`, `--warning`, and `--danger`.
*   **Stories (`UluProgressBar.stories.js/ts`)**:
    *   Update story arguments and examples that currently pass `positive` or `negative`. Replace them with `success`, `warning`, or `danger`.

### 2. `UluProgressCircle`
*   **Component (`UluProgressCircle.vue`)**:
    *   If the component automatically calculates its status color based on percentage (e.g., `< 30 = low`), update the internal logic to return the new semantic strings (`danger`, `warning`, `success`).
    *   If the component accepts a specific prop to override the status (e.g., `status="low"`), update the prop validation to accept the new semantic values.
*   **Stories (`UluProgressCircle.stories.js/ts`)**:
    *   Update story arguments, documentation, and examples that currently reference `low`, `incomplete`, or `complete`. Replace them with `danger`, `warning`, and `success`.