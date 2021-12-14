import { defineComponent } from '../vendor/vue.esm-browser.js';
 import { agendaItemIcons, agendaItemDefaultTitles  } from '../meetupService.js';

export default defineComponent({
  name: 'MeetupAgendaItem',
  props: {
    agendaItem: {
      type: Object,
      require: true,
    },
  },
  computed: {
    currentIcon() {
      return agendaItemIcons[this.agendaItem.type];
    },
    currentTitle() {
      return this.agendaItem.title === null ? agendaItemDefaultTitles[this.agendaItem.type] : this.agendaItem.title;
    },
    currentTime() {
      return `${this.agendaItem.startsAt} - ${this.agendaItem.endsAt}`;
    },
    isTalkAgenda() {
      return this.agendaItem.type === 'talk';
    },
    hasDescription() {
      return this.agendaItem.description !== null;
    },
  },

  template: `
    <div class="agenda-item">
      <div class="agenda-item__col">
        <img :src="\`/assets/icons/icon-\${currentIcon}.svg\`" class="icon" :alt="currentIcon" />
      </div>
      <div class="agenda-item__col">{{ currentTime }}</div>
      <div class="agenda-item__col">
        <h3 class="agenda-item__title">{{ currentTitle }}</h3>
        <p v-if='isTalkAgenda' class="agenda-item__talk">
          <span>{{ agendaItem.speaker }}</span>
          <span class="agenda-item__dot"></span>
          <span class="agenda-item__lang">{{ agendaItem.language }}</span>
        </p>
        <p v-if='hasDescription'>{{ agendaItem.description }}</p>
      </div>
    </div>`,
});
