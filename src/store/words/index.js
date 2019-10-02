const words = {
  state: {
    word: [],
    body: [],
    wordsSuccess: [],
    cat: []
  },
  mutations: {
    setwords(state, payload) {
      for (let x = 0; x < payload.length; x++) {
        state.wordsSuccess[x] = null;
      }
      state.word = payload;
    },
    setbody(state, payload) {
      state.body = payload;
    },
    setwordsSuccess(state, payload) {
      state.wordsSuccess = payload;
    },
    setcat(state, payload) {
      state.cat = payload;
    },
  },
  actions: {
    loadwordsSucces({ commit }, word) {
      commit('setwordsSuccess', word);
    },
  },
  getters: {
    word: state => state.word,
    body: state => state.body,
    wordsSuccess: state => state.wordsSuccess,
    cat: state => state.cat,
  },
};

export default words;
