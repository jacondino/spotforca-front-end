<template>
  <div class="home">
    <input class="input-nick" v-model="nickname"/>
    <button>Play</button>
  </div>
</template>

<script>
export default {
  name: "home",
  data: () => ({
    nickname: ''
  }),
};
</script>

<style scoped>
.input-nick {
    border: 4px solid #DE8F2C;
    border-radius: 2px;
    box-shadow: 3px 3px #795548;
    height: 30px;
    width: 230px;
}
</style>
