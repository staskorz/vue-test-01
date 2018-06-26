<template>
  <div id="app">
    <p>
      <router-link to="/">Home</router-link>
      <router-link to="/page2">Page2</router-link>
      <router-link to="/add-pet">Add Pet</router-link>
      <router-link to="/pet-list">Pet List</router-link>
    </p>

    <router-view/>
  </div>
</template>

<script>
import store from "./store"

setInterval(() => {
  store.commit("decreaseSatiety")
}, 1000)

export default {
  name: "App",
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

<style scoped>
a {
  color: #2c3e50;
  text-decoration: none;
  margin: 0 10px;
}

.router-link-exact-active {
  text-decoration: underline;
}
</style>
