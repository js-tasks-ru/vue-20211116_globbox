import { defineComponent } from './vendor/vue.esm-browser.js';

export default defineComponent({
  name: 'MeetupCover',

  props: {
    image: {
      type: String,
      required: false,
    },

    title: {
      type: String,
      required: false,
    },
  },

  template: `
    <div class="meetup-cover" :style="image && \`--bg-url: url('\${image}')\`">
        <h1 class="meetup-cover__title">{{ title }}</h1>
    </div>`,
});