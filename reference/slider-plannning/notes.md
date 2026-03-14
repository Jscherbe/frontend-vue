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

Currently, the Vue library has an unfinished `UluSlideShow.vue` in `lib/components/systems/slider/` which is essentially a Scroll Slider but named like a regular slider, and uses a custom API. 

## Project Goals
- Create two new, distinct Vue components: `UluSlider` and `UluScrollSlider`.
- Align their DOM structure and classes with the respective SCSS modules from the frontend library.
- Rethink the Vue API (props/slots) from scratch, discarding the old `UluSlideShow` implementation.
- Support modern Vue features, e.g., exposing state in scoped slots to allow users to implement lazy loading (like only loading heavy images if `active` or `index` is close).
- Determine the best location for these components in the library structure.
- Deprecate/remove the old `UluSlideShow.vue` and `UluImageSlideShow.vue`.

## Proposed Component APIs

### 1. UluSlider
- **Core Strategy**: The component will render the `<ul>` track and the `<li>` slide wrappers itself. This allows it to easily control `style.order`, `style.opacity`, `visibility`, and `inert` attributes directly on the DOM nodes it owns.
- **Props**: 
  - `items` (Array): Data array for slides.
  - `transition` (String): 'slide' | 'fade' | 'none'.
  - `duration` (Number): Transition duration in ms.
  - `loop` (Boolean): Enable infinite looping.
  - `nav` (Boolean): Show dot navigation.
  - `controls` (Boolean): Show prev/next arrows.
  - `reduceMotionFallback` (Boolean): Automatically switch to 'fade' if the OS prefers reduced motion.
- **Slots**:
  - `slide`: Scoped slot `{ item, index, active, past, upcoming }`. Exposing state like `upcoming` allows the user to easily implement lazy-loading (e.g. `<img v-if="active || upcoming" src="..." />`).
  - `nav`: Custom nav item content (defaults to visually hidden text for dots).
  - `previous` / `next`: Custom control icons/text.

### 2. UluScrollSlider
- **Core Strategy**: A lightweight wrapper around a native scroll container. Uses `IntersectionObserver` to determine which slides are visible, and `scrollTo` for the buttons.
- **Props**:
  - `items` (Array): Data array.
  - `controls` (Boolean): Show prev/next scroll buttons.
  - `scrollAmount` (Number | String): Custom scroll distance.
- **Slots**:
  - `slide`: Scoped slot `{ item, index, isIntersecting }`.
  - `previous` / `next`: Custom control icons.

## Component Location & Structure Decision
- **Single vs Multiple files**: Because both implementations will loop over an `items` array and render the `<ul>/<li>` structure internally (yielding individual items back to the user via scoped slots), they can be built as standalone, single-file components (`UluSlider.vue` and `UluScrollSlider.vue`). We likely won't need a separate `UluSlideShowSlide.vue` wrapper.
- **Location**: Since they are standalone, we could move them out of `systems/` and into `lib/components/elements/` or `lib/components/layout/`. However, if they become complex enough (e.g. they require sub-components or internal composables for swipe logic), keeping a `slider` or `carousels` folder in `systems/` or `components/` might still be the cleanest approach.
