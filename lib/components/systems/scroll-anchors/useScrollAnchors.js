import { onMounted, onUnmounted, nextTick, watch } from "vue";
import { getScrollParent } from "@ulu/utils/browser/dom.js";
import { debounce } from "@ulu/utils/performance.js";

/**
 * The main composable that contains the core "engine" for the Scroll Anchors system.
 * It encapsulates the IntersectionObserver logic to track sections and manage their active state.
 * This is intended for advanced use cases where a developer needs to build a custom provider
 * component instead of using the default `UluScrollAnchors`.
 * @param {{sections: object, props: object, emit: Function, componentElRef: object}} options
 */
export function useScrollAnchors({ sections, props, emit, componentElRef }) {
  let observer = null;
  let lastScrollY = 0;
  let lastScrollDirection = 'down';
  let scrollRoot = null;
  let isObserverRefresh = true;

  /**
   * Helper to quickly get the index of a section by its DOM element
   */
  function getSectionIndex(el) {
    return sections.value.findIndex(({ element }) => el === element);
  }

  /**
   * Standardizes state assignments (active, forward/reverse animations) for a specific section
   */
  function setSectionState(section, isActive, scrollDirection = 'down') {
    if (!section) return;
    const direction = scrollDirection === 'down' ? 'forward' : 'reverse';
    if (isActive) {
      section.active = true;
      section.inactiveFrom = null;
      section.activeFrom = direction;
    } else {
      if (section.active) {
        section.inactiveFrom = direction;
        section.activeFrom = null;
      }
      section.active = false;
    }
  }

  /**
   * Loops through all sections and forces them to inactive, optionally skipping one target
   */
  function removeActive(except = null, scrollDirection = 'down') {
    sections.value.forEach(s => {
      if (s !== except) {
        setSectionState(s, false, scrollDirection);
      }
    });
  }

  /**
   * Safe wrapper to clear other sections, make a new target active, and emit the change event
   */
  function setSectionActive(section, scrollDirection) {
    if (section && !section.active) {
      if (props.debug) console.log("Activate:", section.title);
      nextTick(() => {
        removeActive(section, scrollDirection);
        setSectionState(section, true, scrollDirection);
        emit("section-change", { section, sections: sections.value, active: true });
      });
    }
  }

  /**
   * Clears the currently active item and emits a deactivation event (used at top/bottom scroll edges)
   */
  function deactivateAll(scrollDirection, debugMsg) {
    const activeSection = sections.value.find(s => s.active);
    if (activeSection) {
      if (props.debug && debugMsg) console.log(debugMsg, activeSection.title);
      nextTick(() => {
        removeActive(null, scrollDirection);
        emit("section-change", { section: activeSection, sections: sections.value, active: false });
      });
    }
  }

  /**
   * Resolves the scrolling container element based on options, DOM hierarchy, or defaults to window
   */
  function getScrollRoot() {
    let root = null;
    if (props.observerOptions && props.observerOptions.root !== undefined) {
      root = props.observerOptions.root;
    } else if (componentElRef.value) {
      root = getScrollParent(componentElRef.value);
      if (root === document.scrollingElement) {
        root = null;
      }
    }
    return root || window;
  }

  /**
   * Debounced callback attached to the scroll listener.
   * Rebuilding the observer ensures a fresh set of entries representing the true layout when scrolling stops.
   */
  const refreshObserver = debounce(() => {
    if (props.debug) console.log("New Observer (debounced/check)");
    if (observer) {
      observer.disconnect();
      observer = null;
    }
    createObserver();
    observeItems();
  }, 100);

  function setupScrollListener() {
    removeScrollListener();
    scrollRoot = getScrollRoot();
    if (scrollRoot) {
      scrollRoot.addEventListener('scroll', refreshObserver, { passive: true });
    }
  }

  function removeScrollListener() {
    if (scrollRoot) {
      scrollRoot.removeEventListener('scroll', refreshObserver);
      scrollRoot = null;
    }
  }

  /**
   * Primary logic core. Creates the IntersectionObserver and handles state changes.
   */
  function createObserver() {
    isObserverRefresh = true;

    const onObserve = (entries) => {
      const { root } = observer;
      const currentScrollY = root ? root.scrollTop : document.documentElement.scrollTop || window.scrollY;

      // Determine the direction of the scroll
      let scrollDirection = lastScrollDirection;
      if (currentScrollY > lastScrollY) {
        scrollDirection = 'down';
      } else if (currentScrollY < lastScrollY) {
        scrollDirection = 'up';
      }
      
      if (props.debug) {
        console.groupCollapsed(`Scroll: ${lastScrollY} -> ${currentScrollY} (${scrollDirection})`);
        console.table(entries.map(e => ({ 
          el: e.target.id || e.target.tagName, 
          int: e.isIntersecting,
          ratio: e.intersectionRatio.toFixed(2)
        })));
      }

      lastScrollY = currentScrollY;
      lastScrollDirection = scrollDirection;

      const intersectingEntries = entries.filter(entry => entry.isIntersecting);

      // Strategy 1: Standard intersection detection
      if (intersectingEntries.length > 0) {
        intersectingEntries.sort((a, b) => getSectionIndex(a.target) - getSectionIndex(b.target));
        
        // Choose the most appropriate intersecting entry based on scroll direction
        const targetEntry = scrollDirection === 'down'
          ? intersectingEntries[intersectingEntries.length - 1]
          : intersectingEntries[0];
          
        if (props.debug) console.log("Target:", targetEntry.target.id || targetEntry.target.tagName);

        const sectionToActivate = sections.value[getSectionIndex(targetEntry.target)];
        setSectionActive(sectionToActivate, scrollDirection);
      } else {
        // Strategy 2: Absolute positioning fallback (fired automatically on fresh observer load)
        // Used to instantly catch sections we skipped entirely during warp-speed scrolling.
        if (isObserverRefresh) {
          if (props.debug) console.log("Fallback: bounds");
          
          let highestAboveIndex = -1;
          entries.forEach(entry => {
            const rootTop = entry.rootBounds ? entry.rootBounds.top : 0;
            // +1 buffer for fractional pixels, check if element is above the reading zone
            if (entry.boundingClientRect.top <= rootTop + 1) {
              const idx = getSectionIndex(entry.target);
              if (idx > highestAboveIndex) {
                highestAboveIndex = idx;
              }
            }
          });

          // Activate the last section that is above the reading zone viewport
          if (highestAboveIndex > -1) {
            const isLast = highestAboveIndex === sections.value.length - 1;
            const targetSection = sections.value[highestAboveIndex];

            // Edge case: User scrolled past the bottom of the very last section into a footer
            if (isLast && props.deactivateLastItem) {
              const lastEntry = entries.find(e => e.target === targetSection.element);
              const rootBottom = lastEntry.rootBounds ? lastEntry.rootBounds.bottom : window.innerHeight;
              if (lastEntry && lastEntry.boundingClientRect.bottom < rootBottom) {
                deactivateAll(scrollDirection, "Deactivate (last):");
              } else {
                setSectionActive(targetSection, scrollDirection);
              }
            } else {
               setSectionActive(targetSection, scrollDirection);
            }
          } else {
            // No elements are above the reading zone viewport, we are above the first item
            if (props.debug) console.log("Fallback: top");
            if (!props.firstItemActive) {
              deactivateAll(scrollDirection, "Deactivate (top):");
            } else {
              const firstSection = sections.value[0];
              setSectionActive(firstSection, scrollDirection);
            }
          }
        } else {
          // Strategy 3: Real-time edge deactivation
          // Fires as user slowly scrolls out of the bounds of the first or last items
          if (props.debug) console.log("Check edges");
          const activeSection = sections.value.find(s => s.active);
          if (activeSection) {
            const entryForActive = entries.find(e => e.target === activeSection.element);
            if (entryForActive && !entryForActive.isIntersecting) {
              const index = getSectionIndex(entryForActive.target);
              const isFirst = index === 0;
              const isLast = index === sections.value.length - 1;
              if ((isFirst && scrollDirection === 'up' && !props.firstItemActive) || (isLast && scrollDirection === 'down' && props.deactivateLastItem)) {
                deactivateAll(scrollDirection, "Deactivate (edge):");
              }
            }
          }
        }
      }
      
      // Observer refresh cycle completed
      isObserverRefresh = false;
      if (props.debug) console.groupEnd();
    };

    // Calculate options and margins for the reading zone
    let root = null;
    if (props.observerOptions && props.observerOptions.root !== undefined) {
      root = props.observerOptions.root;
    } else if (componentElRef.value) {
      root = getScrollParent(componentElRef.value);
      if (root === document.scrollingElement) {
        root = null;
      }
    }

    let defaultOptions = {
      rootMargin: "-25% 0px -55% 0px",
      threshold: 0
    };

    if (props.snapOffset !== false && props.snapOffset !== undefined) {
      const offset = props.snapOffset === true ? 20 : Number(props.snapOffset);
      defaultOptions.rootMargin = `-${offset}% 0px -${99 - offset}% 0px`;
    }

    const finalObserverOptions = {
      ...defaultOptions,
      ...(props.observerOptions || {}),
      root
    };
    
    observer = new IntersectionObserver(onObserve, finalObserverOptions);
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
    createObserver();
    observeItems();
    setupScrollListener();
  });

  onUnmounted(() => {
    destroyObserver();
    removeScrollListener();
    refreshObserver.cancel();
  });

  // Re-observe items dynamically if the section list grows/shrinks
  watch(() => sections.value.length, () => {
    nextTick(() => {
      observeItems();
    });
  });

  // Hot swap the observer if the developer changes options or snap settings
  watch(
    () => [props.snapOffset, props.observerOptions],
    () => {
      destroyObserver();
      createObserver();
      observeItems();
      setupScrollListener();
    },
    { deep: true }
  );
}