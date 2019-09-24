<template>
  <div class="error-words">
    <h4>Letras erradas</h4>
    <div class="errors">
      <span v-for="(item, i) in wordsError" :key="i">{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "BoxError",
  props: {
    wordsError: Array
  }
};
</script>


<style scoped>
.error-words {
  width: 240px;
  position: absolute;
  padding: 11px;
  left: 3em;
  background: #fff0f0;
  border-radius: 10px;
  display: block;
  font-size: 14px;
}
.error-words h4 {
  margin: 0;
}
.errors span {
  font-size: 21px;
  margin: 11px 5px;
  display: inline-block;
  font-weight: bolder;
  text-transform: uppercase;
}
</style>
