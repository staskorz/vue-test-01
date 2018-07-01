<template>
  <div id="app">
    <navbar />

    <router-view class="main"/>
  </div>
</template>

<script>
import "bootstrap/dist/css/bootstrap.min.css"
import "./style.css"

import Navbar from "./components/Navbar"

import store from "./store"
import initStoreEventTimers from "./event-timers/init-store-event-timers"

initStoreEventTimers(store)

export default {
  name: "App",

  components: {
    navbar: Navbar,
  },
}
</script>
