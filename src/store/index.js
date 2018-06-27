import Vue from "vue"
import Vuex, { Store } from "vuex"
import SAMPLE_PETS from "../fixtures/sample-pets"
import { FOOD_WEIGHTS } from "../fixtures/food"

Vue.use(Vuex)

/* global process:false */
const isProduciton = process.env.NODE_ENV === "production"

export default new Store({
  strict: !isProduciton,

  state: {
    pets: SAMPLE_PETS,
  },

  mutations: {
    addPet: (state, { name, type, imageUrl, food, starvationRate }) => {
      state.pets.push({
        name,
        type,
        imageUrl,
        food,
        starvationRate,
        satiety: 100,
      })
    },

    decreaseSatiety: state => {
      state.pets.forEach(pet => {
        if (pet.satiety === 0) {
          return
        }

        const newSatiety = (pet.satiety -= pet.starvationRate)

        pet.satiety = newSatiety > 0 ? newSatiety : 0
      })
    },

    feed: (state, { petId, food }) => {
      const pet = state.pets[petId]

      if (pet.food !== food) {
        pet.satiety = 0 // wrong food kills the pet
      } else {
        const foodWeight = FOOD_WEIGHTS[food]

        if (pet.satiety + foodWeight > 100) {
          pet.satiety = 100
        } else {
          pet.satiety += foodWeight
        }
      }
    },
  },
})
