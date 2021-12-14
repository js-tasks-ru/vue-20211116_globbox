import { createApp } from './vendor/vue.esm-browser.js';
import MeetupInfo from './MeetupInfo.js';
import meetups from './api/meetups.js';

createApp({
  components: {
    MeetupInfo,
  },

  data() {
    return {
      meetups,
      selectedMeetup: 0,
    };
  },

  template: `
    <p>
    <select v-model="selectedMeetup">
      <option v-for="(meetup, index) in meetups" :key="meetup.id" :value="index">
        {{ index }}: {{ meetup.title }}
      </option>
    </select>
    </p>

    <meetup-info
      :organizer="meetups[selectedMeetup].organizer"
      :place="meetups[selectedMeetup].place"
      :date="meetups[selectedMeetup].date"
    ></meetup-info>
  `,
}).mount('#app');
