<template>
  <div id="game" class="game container">
    <div class="header">
      <div class="row">
        <div class="col-sm-6 box-score m-3">
          <span class="score">Score {{score}}</span>
        </div>
        <div class="col-sm-6 box-timer"></div>
      </div>
    </div>
    <div class="body">
      <h1>{{cat.name}}</h1>
      <component-box-error v-if="wordsError.length > 0" :wordsError="wordsError" />
      <component-body :error="error" />
      <div v-if="!load" class="words">
        <div v-for="item in wordsSuccess" :key="item">
          <span>{{ item }}</span>
        </div>
      </div>
      <div v-else>
        <div class="spinner-border" role="status">
          <span class="sr-only">Loading...</span>
        </div>
      </div>
    </div>
    <div class="footer"></div>
  </div>
</template>

<script>
import axios from "axios";
import Body from "../components/Body";
import BoxError from "../components/BoxError";

export default {
  name: "Game",
  data: () => ({
    error: 1,
    wordsError: [],
    wordsClient: "",
    err: false,
    res: [],
    load: false,
    score: 1,
    challenges: 0
  }),
  components: {
    "component-body": Body,
    "component-box-error": BoxError
  },
  methods: {
    async onCheckLetters(w) {
      this.load = true;
      this.wordsClient = w;

      if (this.check()) {
        this.load = false;
        return;
      }

      let config = {
        headers: {
          accept: "application/json",
          hash: this.body.hash,
          "Content-Type": "application/json"
        }
      };

      await axios
        .put(
          `http://localhost:3000/words/${this.words.id}/check`,
          {
            letter: w
          },
          config
        )
        .then(async response => {
          this.res = response.data;

          if (this.res.length === 0) this.err = true;

          if (this.err) {
            this.error++;
            if (this.error === 7) {
              this.challenges++;
              if (this.challenges > 0) {
                axios
                  .get(
                    "http://localhost:3000/challenges/random"
                  )
                  .then(response => {
                    this.$dialog
                      .confirm(response.data.value, {
                        okText: "Não",
                        cancelText: "Sim"
                      })
                      .then(function(dialog) {
                        axios
                          .put(
                            `http://localhost:3000/challenges/${response.data.id}/check`,
                            {
                              answerId: response.data.answers[1].id
                            },
                            config
                          )
                          .then(response => {
                            if (response.data.right) {
                              this.error = 6;
                              this.challenges = -10;
                            } else {
                              alert("Você errou!");
                              window.location.reload();
                            }
                          });
                      })
                      .catch(function() {
                        axios
                          .put(
                            `http://localhost:3000/challenges/${response.data.id}/check`,
                            {
                              answerId: response.data.answers[0].id
                            }
                          )
                          .then(response => {
                            if (response.data.right) {
                              this.error = 6;
                              this.challenges = -10;
                            } else {
                              alert("Você errou!");
                              window.location.reload();
                            }
                          });
                      });
                  });
              } else {
                setTimeout(() => {
                  alert("Você errou!");
                  window.location.reload();
                }, 1000);
              }
            }
            this.wordsError.push(this.wordsClient);
            this.err = false;
            this.load = false;
            return;
          }

          let wd = this.wordsSuccess;

          for (let index = 0; index < this.res.length; index++) {
            const pos = this.res[index];

            wd[pos] = this.wordsClient;
            
          }
          
          this.$store.dispatch("loadwordsSucces", wd);

          let tes = false;
          this.wordsSuccess.map(it => {
            if (!it) {
              tes = true;
            }
          });

          if (!tes) {
            alert("Você passou!");
            this.score++;
            this.error = 1;
            await axios
              .get(
                `http://localhost:3000/categories/${this.cat.id}/words/random`
              )
              .then(response => {
                this.$store.commit("setwords", response.data);
                this.wordsError = [];
              });
          }

          this.clear();
        });
    },
    check() {
      if (!this.wordsClient) return true;

      if (
        "QWERTYUIOPLKJHGFDSAZXCVBNM".indexOf(this.wordsClient.toUpperCase()) < 0
      ) {
        return true;
      }

      if (this.wordsError) {
        const checkError = this.wordsError.filter(
          it => it.toUpperCase() == this.wordsClient.toUpperCase()
        );

        if (checkError.length > 0) {
          this.clear();
          return true;
        }
      }
      return false;
    },
    clear() {
      this.load = false;
      this.wordsClient = "";
      this.err = false;
      this.res = [];
    }
  },
  computed: {
    cat() {
      return this.$store.getters.cat;
    },
    words() {
      return this.$store.getters.word;
    },
    body() {
      return this.$store.getters.body;
    },
    wordsSuccess() {
      return this.$store.getters.wordsSuccess;
    }
  },
  created() {
    if (this.wordsSuccess.length === 0) this.$router.push("/");
    if (this.$route.name === "game") {
      document.onkeydown = evt => {
        this.onCheckLetters(evt.key);
      };
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
.words {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.words div {
  margin: 1em;
  border-bottom: 3px solid;
  width: 32px;
  padding-bottom: 6px;
  height: 56px;
}
.words div span {
  font-size: 2em;
  font-weight: 400;
}
</style>
