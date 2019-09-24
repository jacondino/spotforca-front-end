<template>
  <div class="about">
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
    "component-body-words": BodyWords
  },
  methods: {
    onCheckLetters() {
      const p = this.words.split("");
      this.check();
      p.map(it => {
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
      if (!this.wordsClient) return;

      const checkSuccess = this.filterWords(this.wordsSuccess);
      const checkError = this.filterWords(this.wordsError);

      if (checkSuccess.length > 0 || checkError.length > 0) {
        this.clear();
        return;
      }
    },
    clear() {
      this.wordsClient = "";
      this.err = false;
    },
    filterWords(words) {
      return words.filter(it => it.toUpperCase() == this.wordsClient.toUpperCase());
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
