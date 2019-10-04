<template>
  <div class="home">
    <div class="box-spot container" v-if="admin">
      <h1>SpotForca</h1>
      <span>-----</span>
      <div class="admin">
        <h3>Cadastrar Categoria</h3>
        <div class="form-group">
          <input type="text" class="form-control" v-model="categorie" />
        </div>
        <button class="btn btn-primary" @click="setCategorie()">enviar</button>
      </div>
      <div class="admin">
        <h3>Cadastrar Palavra</h3>
        <div class="form-group">
          <select v-model="words.categorie" class="form-control">
            <option v-for="item in cat" :key="item.id" :value="item.id">{{item.name}}</option>
          </select>
        </div>
        <div class="form-group">
          <input type="text" class="form-control" v-model="words.name" />
        </div>
        <button class="btn btn-primary" @click="setWords()">enviar</button>
      </div>
      <div class="admin">
        <h3>Cadastrar Desafio</h3>
        <div class="form-group">
          <input type="text" class="form-control" v-model="challenges.name" />
        </div>
        <div class="form-group">
          <div class="form-check form-check-inline">
            <input
              class="form-check-input checked"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio2"
              v-model="challenges.answers"
              :value="0"
              checked
            />
            <label class="form-check-label" for="inlineRadio2">Sim</label>
          </div>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio3"
              v-model="challenges.answers"
              :value="1"
            />
            <label class="form-check-label" for="inlineRadio3">Não</label>
          </div>
        </div>
        <button class="btn btn-primary" @click="setChallenge()">enviar</button>
      </div>
    </div>
    <div v-else>loading...</div>
  </div>
</template>

<script>
import axios from "axios";
import { async } from "q";

export default {
  name: "admin",
  data: () => ({
    categorie: "",
    body: "",
    words: {},
    cat: [],
    challenges: {},
    admin: false
  }),
  methods: {
    setCategorie() {
      axios
        .post(
          `https://spotforca-server.herokuapp.com/categories`,
          {
            name: this.categorie
          },
          this.config
        )
        .then(response => {
          alert("ok");
        });
    },
    setWords() {
      axios
        .post(
          `https://spotforca-server.herokuapp.com/words`,
          {
            name: this.words.name,
            catagoryId: this.words.categorie
          },
          this.config
        )
        .then(response => {
          alert("ok");
        });
    },
    setChallenge() {
      axios
        .post(
          `https://spotforca-server.herokuapp.com/challenges`,
          {
            value: this.challenges.name,
            answers: [
              {
                right: this.challenges.answers === 0 ? true : false,
                value: this.challenges.answers === 0 ? "Sim" : "Não"
              }
            ]
          },
          this.config
        )
        .then(response => {
          alert("ok");
        });
    }
  },
  mounted() {
    axios
      .get("https://spotforca-server.herokuapp.com/categories")
      .then(response => (this.cat = response.data));
    setTimeout(async () => {
      await axios
        .post("https://spotforca-server.herokuapp.com/credencials", {
          user: "string",
          pass: "string"
        })
        .then(response => {
          this.config = {
            headers: {
              accept: "application/json",
              hash: response.data.token,
              "Content-Type": "application/json"
            }
          };
          this.admin = true;
        }, 1000);
    });
  }
};
</script>

<style>
.admin {
  margin: 3em 0;
}
</style>