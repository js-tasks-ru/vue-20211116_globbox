import { createApp } from '../vendor/vue.esm-browser.js';
import PageMeetup from './PageMeetup.js';

createApp({
  components: { PageMeetup },
  data() {
    return {
      meetupId: 1,
    };
  },

  template: `
    <div class="container">
    <p>
      <select v-model="meetupId">
        <option v-for="i in 10" :key="i" :value="i">{{ i }}</option>
      </select>
    </p>
    </div>

    <page-meetup :meetup-id="meetupId"></page-meetup>
  `,
}).mount('#app');
