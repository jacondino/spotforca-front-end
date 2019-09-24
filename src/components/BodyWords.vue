<template>
  <div class="words">
    <div v-for="(item, i) in words.split('').length" :key="i">
      <span v-if="success.filter((it) => it === words[i]).length > 0">{{ words[i] }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "BodyWords",
  props: {
    success: Array,
    words: String
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
