import { defineComponent, createApp } from './vendor/vue.esm-browser.js';

const API_URL = 'https://course-vue.javascript.ru/api';

function fetchMeetupById(meetupId) {
  return fetch(`${API_URL}/meetups/${meetupId}`).then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      return response.json().then((error) => {
        throw error;
      });
    }
  });
}

const RootComponent = defineComponent({
  name: 'Root',
  data() {
    return {
      valueId: null,
      currentTitle: '',
    };
  },
  watch: {
    valueId: {
      handler(value) {
        fetchMeetupById(value).then((data) => {
          this.currentTitle = data.title;
        });
      },
    },
  },
});

const app = createApp(RootComponent);
app.mount('#app');
