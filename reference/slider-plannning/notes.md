# Slider & Scroll Slider Planning Notes

## Context & Background
The `@ulu/frontend` (traditional JS/SCSS) library provides two distinct slider patterns:

1. **Slider** (`reference/slider-plannning/ulu-frontend/js/ui/slider.js`, `reference/slider-plannning/ulu-frontend/scss/components/_slider.scss`):
   - Traditional carousel, usually one slide visible at a time.
   - Uses `transform: translateX` or `opacity` for transitions.
   - Accessibly hides inactive slides (`visibility: hidden` or `inert`).
   - Supports infinite looping via DOM `order` manipulation.
   - Best for presentations, hero banners, etc.

2. **Scroll Slider** (`reference/slider-plannning/ulu-frontend/js/ui/scroll-slider.js`, `reference/slider-plannning/ulu-frontend/scss/components/_scroll-slider.scss`):
   - Horizontal scrolling list (like a row of cards).
   - Uses native `overflow-x: auto` and `scroll-snap-type`.
   - All items remain accessible to screen readers (it's just a scrolling container).
   - Controlled via native scroll, JS just adds Next/Prev buttons to scroll the container.

## Project Goals & Execution Summary
- **[Completed]** Create distinct Vue components: `UluSlider` and `UluScrollSlider`.
- **[Completed]** Align DOM structure to match frontend SCSS perfectly.
- **[Completed]** Discard old `UluSlideShow` implementations and their legacy APIs.
- **[Completed]** Ensure complete W3C WAI-ARIA Authoring Practices Guide (APG) compliance:
  - Added programmatic linking via `aria-controls` for all buttons.
  - Implemented `aria-live="polite"` (and `off` during autoplay) on the slider track.
  - Paused autoplay on keyboard focus (`@focusin` / `@focusout`).
  - Implemented specific role overriding (`role="group"`, `aria-roledescription="slide"`) for the true `UluSlider`, while leaving `UluScrollSlider` native.
- **[Completed]** Unified Image handling:
  - Created `UluImage.vue` primitive to handle standard `<img v-bind="$attrs">` and complex responsive `<picture>` tags cleanly.
  - Created `UluCaptionedFigure.vue` to adapt the native `captioned-figure` SCSS layout.
  - Composed an `UluImageSlider.vue` wrapper that accepts a structured image array, implements lazy loading via slot scope (`active || upcoming`), handles thumbnail navigation, and dynamically wraps images in `UluCaptionedFigure` when captions exist.

## Architectural Decisions Made

### 1. `UluSlider` & Imperative Transitions
We chose to implement the core slider transition logic using imperative DOM manipulation (accessing `element.style.transform`, `style.order`, etc. via refs) rather than relying purely on Vue reactivity (`:style="{ ... }"`). 
*Why?* The infinite looping visual trick relies on switching a slide's DOM `order: -1` and instantaneously shifting the track `transform`, then waiting for a paint, then triggering a CSS transition, then resetting it all. Vue's reactive rendering cycle (batching DOM updates) caused visual jumping and timing glitches. Imperative DOM control ensured pixel-perfect, glitch-free transitions identical to the vanilla JS implementation.

### 2. Native Semantic `<picture>` Rendering
For `UluImage`, we utilized Vue's `defineOptions({ inheritAttrs: false })` combined with `v-bind="$attrs"` applied exclusively to the nested `<img>` tag.
*Why?* Because HTML attributes like `loading`, `decoding`, and utility classes meant for image styling (like `object-fit: cover`) need to land on the `<img>` tag to function correctly. We also established that the framework's CSS (`_normalize.scss`) should handle setting `display: contents` on the `<picture>` wrapper so it naturally disappears from the layout flow and doesn't interfere with the image's box model.

### 3. Component Location
These components were created as standalone files in `lib/components/elements/` since they do not require deep internal nested folder structures. The legacy `systems/slider/` folder was deleted.

## Component APIs

### `UluSlider`
- **Props**: `items`, `transition`, `duration`, `loop`, `nav`, `controls`, `reduceMotionFallback`, `autoplay`
- **Slots**: `#slide` (scoped with `{ item, active, upcoming, index }`), `#nav`, `#previous`, `#next`.

### `UluScrollSlider`
- **Strategy**: Wraps an internally created renderless `UluOverflowScroller.vue` component that handles the math for intersection observation and programmatic scrolling.
- **Props**: `items`, `controls`, `scrollAmount`, `scrollBehavior`, `emptySlides`.
- **Slots**: `#slide` (scoped with `{ item, index, isIntersecting }`).

### `UluImage`
- **Props**: `image` (object containing `src`, optional `sources` array, etc.), `classes` (granular `{ picture: '', img: '' }`).
- **Attrs**: Fully transparent fallthrough to the `<img>` tag.

### `UluCaptionedFigure`
- **Props**: `caption`, `modifiers`.
- **Slots**: `#default`, `#caption`.

### `UluImageSlider`
- **Strategy**: Composes `UluSlider`, `UluImage`, and `UluCaptionedFigure` to recreate legacy image gallery functionality with modern lazy-loading and responsive image support.
- **Props**: `images` (array of data objects), `sliderProps` (object to pass through to `UluSlider`).
- **Slots**: `#image`, `#caption`, `#thumbnail`.