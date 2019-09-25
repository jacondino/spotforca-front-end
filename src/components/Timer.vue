<template>
  <div class="timer">
    <circular-count-down-timer
      :initial-value="60"
      :stroke-width="5"
      :seconds-stroke-color="'#1ED760'"
      :underneath-stroke-color="'lightgrey'"
      :seconds-fill-color="'#222326'"
      :size="100"
      :padding="4"
      :second-label="''"
      :show-second="true"
      :show-minute="false"
      :show-hour="false"
      :show-negatives="false"
      @finish="finished"
    ></circular-count-down-timer>
  </div>
</template>

<script>
export default {
  name: "Timer",
  methods: {
    finished: () => {
      console.log("finished");
    },
  }
};
</script>

<style scoped>
.timer {
  color: white;
}
</style>
