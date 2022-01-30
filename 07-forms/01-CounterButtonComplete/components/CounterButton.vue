<template>
  <button @click="click">{{ currentCount }}</button>
</template>

<script>
export default {
  name: 'CounterButton',
  props: {
    count: {
      type: Number,
      default: 0,
    },
  },
  emits: ['update:count'],
  data() {
    return {
      currentCount: 0,
    };
  },
  watch: {
    count: {
      deep: true,
      immediate: true,
      handler() {
        this.currentCount = this.count;
      },
    },
  },
  methods: {
    click() {
      this.$emit('update:count', ++this.currentCount);
    },
  },
};
</script>
