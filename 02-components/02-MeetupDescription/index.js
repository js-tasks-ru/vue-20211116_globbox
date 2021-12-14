import { createApp } from './vendor/vue.esm-browser.js';
import MeetupDescription from './MeetupDescription.js';
import meetups from './api/meetups.js';

createApp({
  components: { MeetupDescription },
  data() {
    return {
      meetups,
      selectedMeetup: 0,
    };
  },
  computed: {
    description() {
      return this.meetups[this.selectedMeetup].description;
    },
  },

  template: `
    <p>
    <select v-model="selectedMeetup">
      <option v-for="(meetup, index) in meetups" :key="meetup.id" :value="index">
        {{ index }}: {{ meetup.title }}
      </option>
    </select>
    </p>

    <h3>Описание</h3>

    <meetup-description :description="description"></meetup-description>
  `,
}).mount('#app');
