import Vue from "vue"
import Vuex, { Store } from "vuex"

Vue.use(Vuex)

/* global process:false */
const isProduciton = process.env.NODE_ENV === "production"

export default new Store({
  strict: !isProduciton,

  state: {
    pets: [],
  },

  mutations: {
    addPet: (state, { name, type }) => {
      state.pets.push({
        name,
        type,
      })
    },
  },
})
