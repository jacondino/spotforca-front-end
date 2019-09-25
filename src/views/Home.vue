<template>
  <div class="home">
    <input class="input-nick" placeholder="nick" v-model="nickname" />
    <button>Start</button>
  </div>
</template>

<script>
export default {
  name: "home",
  data: () => ({
    nickname: ""
  })
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
  z-index: 9;
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
  z-index: 9;
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
</style>
