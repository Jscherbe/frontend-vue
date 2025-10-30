import { onMounted, onUnmounted, nextTick, watch } from "vue";

/**
 * The main composable that contains the core "engine" for the Scroll Anchors system.
 * It encapsulates the IntersectionObserver logic to track sections and manage their active state.
 * This is intended for advanced use cases where a developer needs to build a custom provider
 * component instead of using the default `UluScrollAnchors`.
 * @param {{sections: object, props: object, emit: Function}} options
 */
export function useScrollAnchors({ sections, props, emit }) {
  let observer = null;

  function getSectionIndex(el) {
    return sections.value.findIndex(({ element }) => el === element);
  }

  function removeActive(except = null) {
    sections.value.forEach(s => {
      if (s !== except) {
        s.active = false;
      }
    });
  }

  function createObserver() {
    let lastScrollY = 0;

    const onObserve = (entries) => {
      const root = observer.root;
      // Use the scrollable element's current scroll position. Fallback to window.
      const currentScrollY = root ? root.scrollTop : window.scrollY;
      const scrollDirection = currentScrollY > lastScrollY ? 'down' : 'up';

      entries.forEach(({ target, isIntersecting }) => {
        const index = getSectionIndex(target);
        const section = sections.value[index];
        if (!section) return;

        const isFirst = index === 0;
        const isLast = index === sections.value.length - 1;

        nextTick(() => {
          if (isIntersecting) {
            removeActive(section);
            section.active = true;
          } else {
            // Handle deactivating when scrolling past the edges
            if (isFirst && scrollDirection === 'up' && !props.firstItemActive) {
              removeActive();
            } else if (isLast && scrollDirection === 'down' && section.active) {
              removeActive();
            }
          }
          emit("section-change", {
            section,
            sections: sections.value,
            active: isIntersecting
          });
        });
      });

      lastScrollY = currentScrollY;
    };
    observer = new IntersectionObserver(onObserve, props.observerOptions);
  }

  function observeItems() {
    if (!observer) return;
    observer.disconnect();
    sections.value.forEach(({ element }) => {
      if (element) {
        observer.observe(element);
      }
    });
  }

  function destroyObserver() {
    if (observer) {
      observer.disconnect();
      observer = null;
    }
  }

  onMounted(() => {
    if (props.firstItemActive && sections.value.length > 0) {
      const first = sections.value[0];
      if (first) {
        first.active = true;
      }
    }
    createObserver();
    observeItems();
  });

  onUnmounted(() => {
    destroyObserver();
  });

  watch(() => sections.value.length, () => {
    nextTick(() => {
      observeItems();
    });
  });
}
