import { defineComponent } from '../vendor/vue.esm-browser.js';
import UiContainer from './UiContainer.js';
import UiAlert from './UiAlert.js';
import { fetchMeetupById } from '../meetupService.js';
import { FETCH_STATE } from '../fetchState.js';
import MeetupView from './MeetupView.js';



export default defineComponent({
  name: 'PageMeetup',

  // dataOption: {
  //   FETCH_STATE,
  // },

  data() {
    return {
      meetup: null,
      fetchState: null,
      errorMessage: null,
    };
  },

  components: {
    UiAlert,
    UiContainer,
    MeetupView,
  },

  props: {
    meetupId: {
      type: Number,
      require: true,
    },
  },
  computed: {
    isBusy() {
      return this.fetchState === FETCH_STATE.BUSY;
    },
    isSuccess() {
      return this.fetchState === FETCH_STATE.SUCCESS;
    },
    isError() {
      return this.fetchState === FETCH_STATE.ERROR;
    },
  },

  watch: {
    meetupId() {
      this.updateMeetup();
    },
  },

  methods: {
    updateMeetup() {
      if (!this.meetupId) {
        return;
      }
      this.errorMessage = null;
      this.meetup = null;
      this.fetchState = FETCH_STATE.BUSY;
      fetchMeetupById(this.meetupId).then(
        (meetup) => {
          this.meetup = meetup;
          this.fetchState = FETCH_STATE.SUCCESS;
        }).catch((error) => {
          this.errorMessage = error.message;
          this.fetchState = FETCH_STATE.ERROR;
        });
    },
  },

  mounted() {
    this.updateMeetup();
  },

  template: `
    <div class='page-meetup'>
    <ui-container v-if='isBusy'>
      <ui-alert>Загрузка...</ui-alert>
    </ui-container>
    <template v-else>
      <meetup-view v-if='isSuccess' :meetup='meetup'></meetup-view>
      <ui-container v-else>
        <ui-alert>{{ errorMessage }}</ui-alert>
      </ui-container>
    </template>
    </div>`,
});
