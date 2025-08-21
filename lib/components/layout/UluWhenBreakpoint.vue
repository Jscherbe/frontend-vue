<template>
  <slot v-if="shouldShow" />
</template>

<script>
  export default {
    name: "UluWhenBreakpoint",
    inject: ["uluBreakpointManager"],
    props: {
      max: String,
      min: String,
      only: String,
    },
    data() {
      return {
        conditions: {},
        handlers: [],
        handlersSetup: false,
      };
    },
    computed: {
      shouldShow() {
        if (!this.handlersSetup) return false;
        const props = ['max', 'min', 'only'].filter(p => this[p]);
        if (props.length === 0) {
          return false;
        }
        return Object.values(this.conditions).every(c => c);
      },
      propsIdentifier() {
        return `${this.max || ''}-${this.min || ''}-${this.only || ''}`;
      }
    },
    watch: {
      uluBreakpointManager: {
        handler(manager) {
          if (manager && !this.handlersSetup) {
            this.setupHandlers(manager);
          }
        },
        immediate: true
      },
      propsIdentifier() {
        if (this.uluBreakpointManager && this.handlersSetup) {
            this.tearDownHandlers();
            this.setupHandlers(this.uluBreakpointManager);
        }
      }
    },
    methods: {
      setupHandlers(manager) {
        const setupCondition = (direction) => {
          const breakpointName = this[direction];
          if (breakpointName) {
            this.conditions[direction] = false;
            const handler = {
              on: () => { this.conditions[direction] = true; },
              off: () => { this.conditions[direction] = false; },
            };
            manager.at(breakpointName)[direction](handler);
            this.handlers.push({ name: breakpointName, direction, handler });
          }
        };

        setupCondition('max');
        setupCondition('min');
        setupCondition('only');

        this.handlersSetup = true;
      },
      tearDownHandlers() {
        if (this.uluBreakpointManager) {
          this.handlers.forEach(({ name, direction, handler }) => {
            this.uluBreakpointManager.at(name).remove(handler, direction);
          });
        }
        this.handlers = [];
        this.conditions = {};
        this.handlersSetup = false;
      }
    },
    beforeUnmount() {
      this.tearDownHandlers();
    },
  };
</script>
