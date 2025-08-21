<template>
  <slot v-if="shouldShow" />
</template>

<script>
  export default {
    name: "UluWhenBreakpoint",
    inject: ["breakpointManager"],
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
      breakpointManager: {
        handler(manager) {
          if (manager && !this.handlersSetup) {
            this.setupHandlers(manager);
          }
        },
        immediate: true
      },
      propsIdentifier() {
        if (this.breakpointManager && this.handlersSetup) {
            this.tearDownHandlers();
            this.setupHandlers(this.breakpointManager);
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
        if (this.breakpointManager) {
          this.handlers.forEach(({ name, direction, handler }) => {
            this.breakpointManager.at(name).remove(handler, direction);
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
