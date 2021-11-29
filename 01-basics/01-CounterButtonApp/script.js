import { createApp, defineComponent } from './vendor/vue.esm-browser.js';

const RootComponent = defineComponent({
  name: 'Root',
  data() {
    return {
      /**
       * Количество кликов на кнопке.
       */
      buttonCounter: 0,
    };
  },

  methods: {
    /**
     * Функция для инкментации значения переменной buttonCounter.
     */
    buttonCounterInc() {
      this.buttonCounter++;
    },
  },
});

const app = createApp(RootComponent);

const vm = app.mount('#app');
