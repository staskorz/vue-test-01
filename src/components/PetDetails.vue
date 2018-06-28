<template>
  <div class="pet-details">
    <h1>Pet Details</h1>

    <div class="container details-container">
      <div class="row details-header">
        <div class="col">
          <img v-bind:src="pet.imageUrl" v-bind:width="IMAGE_WIDTH" v-bind:height="IMAGE_HEIGHT" class="pet-image">
        </div>
        
        <div class="col details-column container">
          <div class="row">
            <span class="text-muted col-sm-4">Name</span><h5 class="col-sm-8">{{ pet.name }}</h5>
          </div>
          <div class="row">
            <span class="text-muted col-sm-4">Type</span><h5 class="col-sm-8">{{ pet.type }}</h5>
          </div>
          <div class="row">
            <span class="text-muted col-sm-4">Status</span><h5 class="col-sm-8">{{ hungerStatus }}</h5>
          </div>
          <div class="row">
            <span class="text-muted col-sm-4">Eats</span><h5 class="col-sm-8">{{ pet.food }}</h5>
          </div>
        </div>
      </div>

      <scale-bar
        v-bind:percentage="pet.satiety"
        v-bind:width="scaleBar.width"
        v-bind:height="scaleBar.height"
      />
      
      <div class="input-group-container">
        <div class="input-group feed-input-group">
          <div class="input-group-prepend">
            <span class="input-group-text">Food</span>
          </div>

          <select v-model="feedWith" v-bind:disabled="isDead" class="feed-select">
            <option disabled value="">your pet's food...</option>
            <option
              v-for="foodType in FOOD_TYPES"
              v-bind:key="foodType"
              v-bind:value="foodType"
            >
              {{ foodType }}
            </option>
          </select>

          <div class="input-group-append">
            <button class="btn btn-outline-secondary" type="button" v-on:click.prevent="onFeed" v-bind:disabled="isDead">Feed</button>
          </div>
        </div>
        </div>
    </div>
  </div>
</template>

<script>
import store from "../store"
import ScaleBar from "./ScaleBar"
import { FOOD_TYPES } from "../fixtures/food"
import { IMAGE_WIDTH, IMAGE_HEIGHT } from "../constants"
import hungerStatus from "../util/hunger-status"

export default {
  name: "PetDetails",

  data() {
    return {
      scaleBar: {
        width: 470,
        height: 3,
      },

      feedWith: "",

      FOOD_TYPES,

      IMAGE_WIDTH,
      IMAGE_HEIGHT,
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
