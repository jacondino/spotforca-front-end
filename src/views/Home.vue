<template>
  <div class="home">
    <div class="box-spot">
      <h1>SpotForca</h1>
      <div class="form-group">
        <select v-model="categorie" class="form-control" id="exampleFormControlSelect1" required>
          <option v-for="item in cat" :key="item.id" :value="item">{{item.name}}</option>
        </select>
      </div>
      <span>
        <input class="input-nick" placeholder="nick" v-model="nickname" />
        <button @click="start()">Start</button>
      </span>
      <router-link to="/ranking">ranking | tops dos chalala das bandas</router-link>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "home",
  data: () => ({
    nickname: "",
    cat: [],
    categorie: null
  }),
  methods: {
    load() {
      axios
        .get("https://spotforca-server.herokuapp.com/categories")
        .then(response => (this.cat = response.data));
    },
    async start() {
      if (this.categorie && this.nickname) {
        await axios
          .get(
            `https://spotforca-server.herokuapp.com/categories/${this.categorie.id}/words/random`
          )
          .then(response => {
            this.$store.commit("setwords", response.data);
            this.$store.commit("setcat", this.categorie);
            
            this.$router.push('/game');
          });
        await axios
          .post(`https://spotforca-server.herokuapp.com/rounds`, {
            nickname: this.nickname
          })
          .then(response => {
            this.$store.commit("setbody", response.data);
          });
      } else {
        alert("Selecione uma categoria e um nickname!");
      }
    }
  },
  mounted() {
    this.load();
  }
};
</script>

<style scoped>
.home {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.home:before {
  content: "";
  background: #4f4f4f;
  z-index: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  background-size: 40px;
  background-repeat: repeat;
  opacity: 0.1;
  background-blend-mode: luminosity;
  background-image: url(https://image.flaticon.com/icons/svg/174/174872.svg);
}
.home button {
  border: 4px solid #1ed760;
  border-radius: 2px;
  box-shadow: 1px 4px 0px 1px #0e5b29;
  text-shadow: 2px 2px 0px #0e5b29;
  color: #ffffff;
  height: 30px;
  width: 103px;
  border-bottom-right-radius: 36px;
  border-top-right-radius: 36px;
  height: 60px;
  font-weight: 800;
  font-size: 19px;
  background: #1ed760;
  text-align: center;
  outline: none;
  text-transform: uppercase;
  margin-left: -6px;
}
.input-nick {
  border: 4px solid #1ed760;
  border-radius: 2px;
  box-shadow: 3px 3px 0px 2px #0e5b29;
  color: #222326;
  height: 30px;
  width: 230px;
  border-bottom-left-radius: 36px;
  border-top-left-radius: 36px;
  height: 60px;
  font-weight: 600;
  font-size: 24px;
  padding: 0 0 0 1em;
  outline: none;
}
.home h1 {
  font-family: "Montserrat", sans-serif;
  font-size: 40px;
  font-weight: bold;
  margin: 0 0 26px;
  text-shadow: 2px 2px 0px #888888;
  position: relative;
  padding: 0 0 12px;
}
.home h1:before {
  content: "";
  height: 3px;
  background: white;
  width: 31px;
  position: absolute;
  bottom: 0;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  box-shadow: 1px 2px 0px #888888;
}
.box-spot {
  z-index: 9;
}
.box-spot span {
  display: flex;
}
.box-spot a {
  display: block;
  margin: 9px 0 0;
  font-weight: 600;
  color: #1ed760;
  font-size: 13px;
  text-decoration: underline;
}
#exampleFormControlSelect1 {
  border: 4px solid #1ed760;
  border-radius: 2px;
  -webkit-box-shadow: 3px 3px 0px 2px #0e5b29;
  box-shadow: 3px 3px 0px 2px #0e5b29;
  color: #222326;
  height: 30px;
  width: 328px;
  border-radius: 36px;
  height: 60px;
  font-weight: 600;
  font-size: 24px;
  padding: 0 0 0 1em;
  outline: none;
}
</style>
