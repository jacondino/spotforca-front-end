<template>
  <div class="about">
    <h1 v-if="error>1">cabeça</h1>
    <h1 v-if="error>2">corpo</h1>
    <h1 v-if="error>3">braço esquerdo</h1>
    <h1 v-if="error>4">braço direiro</h1>
    <h1 v-if="error>5">perna esquerda</h1>
    <h1 v-if="error>6">perna direita</h1>
    <div class="words">
      <div v-for="(item, i) in words.split('').length" :key="i">
        <span>{{ i }}</span>
      </div>
    </div>
    <input v-model="wordsClient" maxlength="1" />
    <button @click="onCheckLetters">teste</button>
  </div>
</template>

<script>
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
  methods: {
    onCheckLetters() {
      const p = this.words.split("");
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
// .palavras div {
//     margin: 1em;
//     border-bottom: 5px solid;
//     width: 32px;
//     padding-bottom: 6px;
// }
// .palavra {
//   display: flex;
//     flex-wrap: wrap;
//     justify-content: center;
// }
// uma palavra
// usuario digita letra
// se estiver errado error recebe +1 e
// LetrasErradas
// se estiver certo LetrasCorretas
</script>
