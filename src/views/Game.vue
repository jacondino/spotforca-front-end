<template>
  <div id="game" class="game">
    <div class="header">
      <div class="row">
        <div class="col-sm-6 box-score">
          <span class="score">Score {{1}}</span>
        </div>
        <div class="col-sm-6 box-timer">
          <component-timer />
        </div>
      </div>
    </div>
    <div class="body">
      <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit?</h1>
      <component-box-error v-if="wordsError.length > 0" :wordsError="wordsError" />
      <component-body :error="error" />
      <component-body-words :success="wordsSuccess" :words="words" />
    </div>
    <div class="footer"></div>
  </div>
</template>

<script>
import Body from "../components/Body";
import BoxError from "../components/BoxError";
import BodyWords from "../components/BodyWords";
import Time from "../components/Timer";

export default {
  name: "Game",
  data: () => ({
    words: "Metallica",
    error: 1,
    wordsError: [],
    wordsSuccess: [],
    wordsClient: "",
    err: false
  }),
  components: {
    "component-body": Body,
    "component-box-error": BoxError,
    "component-body-words": BodyWords,
    "component-timer": Time
  },
  methods: {
    onCheckLetters(w) {
      this.wordsClient = w;
      const word = this.words.split("");

      if (this.check()) return;

      word.map(it => {
        if (it.toUpperCase() === this.wordsClient.toUpperCase()) {
          this.wordsSuccess.push(it);
          this.err = true;
        }
      });

      if (!this.err) {
        this.error++;
        this.wordsError.push(this.wordsClient);
      }

      this.clear();
    },
    check() {
      if (!this.wordsClient) return true;

      const checkSuccess = this.wordsSuccess.filter(
        it => it.toUpperCase() == this.wordsClient.toUpperCase()
      );

      const checkError = this.wordsError.filter(
        it => it.toUpperCase() == this.wordsClient.toUpperCase()
      );

      if (checkSuccess.length > 0 || checkError.length > 0) {
        this.clear();
        return true;
      }

      return false;
    },
    clear() {
      this.wordsClient = "";
      this.err = false;
    }
  },
  created() {
    document.onkeydown = evt => {
      this.onCheckLetters(evt.key);
    };
  }
};
</script>

<style scoped>
.input-words {
  height: 36px;
  border-radius: 11px;
  border: 2px solid #2c3e50;
  color: #2c3e50;
  font-size: 25px;
  width: 53px;
  text-align: center;
  outline: none;
  margin-top: 2em;
}
.score {
  background: #222326;
  border: 3px solid #1ed760;
  border-radius: 20px;
  color: white;
  padding: 3px 20px;
  font-weight: 600;
}
.box-score {
  display: flex;
  align-items: center;
}
.body h1 {
  font-size: 24px;
  margin: 12px 0 0;
}
</style>
