<template>
  <ui-toast-list :toasts="toasts" />
</template>

<script>


import UiToastList from './UiToastList';

const DEFAULT_TIMEOUT = 5000;

export default {
  name: 'TheToaster',
  components: { UiToastList },
  data() {
    return {
      toasts: new Set(),
    };
  },
  methods: {
    add(message, type) {
      let toast = {
        message: message,
        type: type,
      };
      this.toasts.add(toast);
      setTimeout(() => {
        this.delete(toast);
      }, DEFAULT_TIMEOUT);
    },
    delete(toast) {
      this.toasts.delete(toast);
    },
    success(message) {
      this.add(message, 'success');
    },
    error(message) {
      this.add(message, 'error');
    },
  },
};
</script>

<style scoped>

</style>
