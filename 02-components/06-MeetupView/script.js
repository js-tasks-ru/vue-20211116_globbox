import { createApp } from './vendor/vue.esm-browser.js';
import MeetupView from './MeetupView.js';
import meetups from './api/meetups.js';
const meetup = meetups[2];

createApp({
  components: {
    MeetupView,
  },

  data() {
    return {
      meetup,
    };
  },

  template: `
    <meetup-view :meetup="meetup"></meetup-view>
  `,
}).mount('#app');
