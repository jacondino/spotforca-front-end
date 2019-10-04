import Vue from 'vue';
import CircularCountDownTimer from 'vue-circular-count-down-timer';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import App from './App.vue';
import router from './router';
import store from './store';
import VuejsDialog from 'vuejs-dialog';
import VuejsDialogMixin from 'vuejs-dialog/dist/vuejs-dialog-mixin.min.js';
import 'vuejs-dialog/dist/vuejs-dialog.min.css';
 
// Tell Vue to install the plugin.
Vue.use(VuejsDialog);

Vue.use(CircularCountDownTimer);
Vue.config.productionTip = false;
library.add(faHeart);

Vue.component('font-awesome-icon', FontAwesomeIcon);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
