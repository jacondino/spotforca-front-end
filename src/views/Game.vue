<template>
  <div class="about">
    <Time />
    <component-box-error v-if="wordsError.length > 0" :wordsError="wordsError" />
    <component-body :error="error" />
    <component-body-words :success="wordsSuccess" :words="words" />
    <input class="input-words" @keyup.enter="onCheckLetters" v-model="wordsClient" maxlength="1" />
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
    err: false,
  }),
  components: {
    "component-body": Body,
    "component-box-error": BoxError,
    "component-body-words": BodyWords,
    Time
  },
  methods: {
    onCheckLetters() {
      const word = this.words.split("");

      if(this.check()) return;

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
</style>
