<template>
  <div class="about">
    <component-body :error='error'/>
    <div class="words">
      <div v-for="(item, i) in words.split('').length" :key="i">
        <span v-if="wordsSuccess.filter((it) => it === words[i]).length > 0">{{ words[i] }}</span>
      </div>
    </div>
    <input v-model="wordsClient" maxlength="1" />
    <button @click="onCheckLetters">teste</button>
  </div>
</template>

<script>
import Body from '../components/Body';

export default {
  name: "game",
  data: () => ({
    words: "Metallica",
    error: 1,
    wordsError: [],
    wordsSuccess: [],
    wordsClient: "",
    err: false,
  }),
  components: {
    'component-body': Body
  },
  methods: {
    onCheckLetters() {
      const p = this.words.split("");

      if (!this.wordsClient) return;

      const checkSuccess = this.wordsSuccess.filter(
        it => it.toUpperCase() == this.wordsClient.toUpperCase()
      );

      const checkError = this.wordsError.filter(
        it => it.toUpperCase() == this.wordsClient.toUpperCase()
      );

      if (checkSuccess.length > 0 || checkError.length > 0) {
        this.wordsClient = "";
        this.err = false;

        return;
      }

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

      console.log("LetrasCorretas: ", this.wordsSuccess);
      console.log("LetrasErradas: ", this.wordsError);

      this.wordsClient = "";
      this.err = false;
    }
  }
};
</script>

<style scoped>
.words {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.words div {
  margin: 1em;
  border-bottom: 2px solid;
  width: 32px;
  padding-bottom: 6px;
}
.words div span {
  font-size: 2em;
  font-weight: 400;
}
</style>
