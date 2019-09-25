<template>
  <div id="app" class="container">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/game">game</router-link>
    </div>-->
    <router-view />
  </div>
</template>

<style>
body,
html {
  background: #222326;
  height: 100%;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
  height: 100%;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
div#container {
  margin: 0 0 0 auto !important;
  display: flex;
  justify-content: center;
  align-items: center;
}
.item {
  font-weight: 600;
}
.item svg circle {
  stroke-width: 3 !important;
}
</style>
