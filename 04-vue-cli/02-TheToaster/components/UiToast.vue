<template>
  <div class="toast" :class="toasterClass">
    <ui-icon class="toast__icon" :icon="icon" />
    <span>{{ message }}</span>
  </div>
</template>

<script>
import '@/assets/styles/_toaster.css';
import UiIcon from './UiIcon';

const TOASTER_TYPES = {
  success: 'check-circle',
  error: 'alert-circle',
};

export default {
  name: 'UiToast',
  components: { UiIcon },
  props: {
    message: {
      type: String,
      require: true,
    },
    type: {
      type: String,
      required: true,
    },
  },
  computed: {
    icon() {
      return TOASTER_TYPES[this.type];
    },
    toasterClass() {
      return 'toast_' + this.type;
    },
  },
};
</script>

<style scoped>
.toast {
  display: flex;
  flex: 0 0 auto;
  flex-direction: row;
  align-items: center;
  padding: 16px;
  background: #ffffff;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  font-size: 18px;
  line-height: 28px;
  width: auto;
}
.toast__icon {
  margin-right: 12px;
}
.toast.toast_success {
  color: var(--green);
}
.toast.toast_error {
  color: var(--red);
}
</style>
