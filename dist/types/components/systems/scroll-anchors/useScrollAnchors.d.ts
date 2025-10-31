/**
 * The main composable that contains the core "engine" for the Scroll Anchors system.
 * It encapsulates the IntersectionObserver logic to track sections and manage their active state.
 * This is intended for advanced use cases where a developer needs to build a custom provider
 * component instead of using the default `UluScrollAnchors`.
 * @param {{sections: object, props: object, emit: Function, componentElRef: object}} options
 */
export function useScrollAnchors({ sections, props, emit, componentElRef }: {
    sections: object;
    props: object;
    emit: Function;
    componentElRef: object;
}): void;
//# sourceMappingURL=useScrollAnchors.d.ts.map