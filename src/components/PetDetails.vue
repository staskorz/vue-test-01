<template>
  <div>
    <h1>Pet Details</h1>

    <div>
      <p>
        Name: {{ pet.name }}
      </p>

      <p>
        Type: {{ pet.type }}
      </p>

      <p>
        <img v-bind:src="pet.imageUrl" width="100" height="100">
      </p>

      <p>
        {{ hungerStatus }}
      </p>

      <p>
        <scale-bar
          v-bind:percentage="pet.satiety"
          v-bind:width="scaleBar.width"
          v-bind:height="scaleBar.height"
        />
      </p>

      <p>
        Eats: {{ pet.food }}
      </p>

      <p>
        <label for="pet-food">Food:</label>
        <select v-model="feedWith" id="pet-food" v-bind:disabled="isDead">
          <option disabled value="">your pet's food...</option>
          <option
            v-for="foodType in FOOD_TYPES"
            v-bind:key="foodType"
            v-bind:value="foodType"
          >
            {{ foodType }}
          </option>
        </select>

        <input type="button" value="Feed" v-on:click.prevent="onFeed" v-bind:disabled="isDead">
      </p>
    </div>

  </div>
</template>

<script>
import store from "../store"
import ScaleBar from "./ScaleBar"
import { FOOD_TYPES } from "../fixtures/food"
import hungerStatus from "../util/hunger-status"

export default {
  name: "PetDetails",

  data() {
    return {
      scaleBar: {
        width: 100,
        height: 3,
      },

      feedWith: "",

      FOOD_TYPES,
    }
  },

  methods: {
    onFeed() {
      store.commit("feed", {
        petId: this.petId,
        food: this.feedWith,
      })
    },
  },

  computed: {
    petId() {
      return this.$route.params.petId
    },

    pet() {
      return store.state.pets[this.petId]
    },

    hungerStatus() {
      return hungerStatus(this.pet.satiety)
    },

    isDead() {
      return this.pet.satiety === 0
    },
  },

  components: {
    "scale-bar": ScaleBar,
  },
}
</script>
