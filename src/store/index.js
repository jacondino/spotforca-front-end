import Vue from 'vue';
import Vuex from 'vuex';
import words from './words';
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    words
  },
});
