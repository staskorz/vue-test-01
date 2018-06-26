import Vue from "vue"
import Vuex, { Store } from "vuex"

Vue.use(Vuex)

/* global process:false */
const isProduciton = process.env.NODE_ENV === "production"

export default new Store({
  strict: !isProduciton,

  state: {
    pets: new Array(7)
      .fill(null)
      .map((_, index) => ({ name: "Name" + index, type: "Type" + index })),
  },

  mutations: {
    addPet: (state, { name, type, imageUrl, food, starvationRate }) => {
      state.pets.push({
        name,
        type,
        imageUrl,
        food,
        starvationRate,
      })
    },
  },
})
