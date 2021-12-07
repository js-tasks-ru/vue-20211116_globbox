import { createApp, defineComponent } from './vendor/vue.esm-browser.js';
import { Operations } from './enum/operations.js';

const RootComponent = defineComponent({
  name: 'Root',
  data() {
    return {
      firstNumber: 0,
      secondNumber: 0,
      operation: Operations.SUM,
      Operations,
    };
  },
  computed: {
    operationResult: function () {
      switch (this.operation) {
        case Operations.SUM:
          return this.firstNumber + this.secondNumber;
        case Operations.SUBTRACT:
          return this.firstNumber - this.secondNumber;
        case Operations.MULTIPLY:
          return this.firstNumber * this.secondNumber;
        case Operations.DIVIDE:
          return this.firstNumber / this.secondNumber;
        default:
          return null;
      }
    },
  },
});

const app = createApp(RootComponent);

app.mount('#app');
