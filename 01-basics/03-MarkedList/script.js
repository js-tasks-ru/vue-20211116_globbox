// import { createApp } from './vendor/vue.esm-browser.js';

import { createApp, defineComponent } from './vendor/vue.esm-browser.js';

const emails = [
  'Eliseo@gardner.biz',
  'Jayne_Kuhic@sydney.com',
  'Nikita@garfield.biz',
  'Lew@alysha.tv',
  'Hayden@althea.biz',
  'Presley.Mueller@myrl.com',
  'Dallas@ole.me',
  'Mallory_Kunze@marie.org',
  'Meghan_Littel@rene.us',
  'Carmen_Keeling@caroline.name',
  'Veronica_Goodwin@timmothy.net',
  'Oswald.Vandervort@leanne.org',
  'Kariane@jadyn.tv',
  'Nathan@solon.io',
  'Maynard.Hodkiewicz@roberta.com',
  'Christine@ayana.info',
  'Preston_Hudson@blaise.tv',
  'Vincenza_Klocko@albertha.name',
  'Madelynn.Gorczany@darion.biz',
  'Mariana_Orn@preston.org',
  'Noemie@marques.me',
  'Khalil@emile.co.uk',
  'Sophia@arianna.co.uk',
  'Jeffery@juwan.us',
  'Isaias_Kuhic@jarrett.net',
];

const RootComponent = defineComponent({
  name: 'Root',
  data() {
    return {
      emails,
      searchQuery: '',
    };
  },
  computed: {
    filteredEmails: function () {
      let me = this;
      return this.emails.map(function(email) {
        let cssClass = '';
        if (me.searchQuery !== '' && me.containsString(email, me.searchQuery)) {
          cssClass = 'marked';
        }
        return {
          emailText: email,
          cssClass,
        };
      });
    },
  },
  methods: {
    /**
     * Содержит ли исходная строка, переданную.
     * @param target {string} Исходная строка
     * @param searchString {string} Строка для поиска
     * @return {boolean}
     */
    containsString: function (target, searchString) {
      target = target.toLowerCase();
      searchString = searchString.toLowerCase();
      return target.includes(searchString);
    },
  },
});

const app = createApp(RootComponent);

app.mount('#app');
