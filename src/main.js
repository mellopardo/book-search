import Vue from 'vue';
import App from './App.vue';
import router from './router';
import "normalize.css";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBook, faChevronRight} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faChevronRight);
library.add(faBook);

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
