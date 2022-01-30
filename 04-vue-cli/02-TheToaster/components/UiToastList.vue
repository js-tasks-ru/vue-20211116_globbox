<template>
  <div class="toasts">
    <ui-toast v-for="toast in toasts" :type="toast.type" :message="toast.message" />
  </div>
</template>

<script>
import UiToast from './UiToast';
export default {
  name: 'UiToastList',
  components: { UiToast },
  props: {
    toasts: {
      type: Set,
      default: () => new Set(),
    },
  },
};
</script>

<style scoped>
.toasts {
  position: fixed;
  bottom: 8px;
  right: 8px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  white-space: pre-wrap;
  z-index: 999;
}
@media all and (min-width: 992px) {
  .toasts {
    bottom: 72px;
    right: 112px;
  }
}
.toast + .toast {
  margin-top: 20px;
}
</style>
