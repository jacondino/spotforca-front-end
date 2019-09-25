import Vue from 'vue';
import CircularCountDownTimer from 'vue-circular-count-down-timer';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.use(CircularCountDownTimer);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
