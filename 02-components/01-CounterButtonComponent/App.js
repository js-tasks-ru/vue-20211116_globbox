import { defineComponent } from './vendor/vue.esm-browser.js';
import CounterButton from './CounterButton.js';

export default defineComponent({
  name: 'App',

  data() {
    return {
      count: 0,
    };
  },

  components: {
    CounterButton,
  },

  template: `
    <p>count = {{ count }}</p>
    <p v-for='n in 3'><counter-button v-model:count="count"></counter-button></p>
  `,
});
