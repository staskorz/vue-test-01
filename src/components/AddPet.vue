<template>
  <div>
    <h1>Add a Pet</h1>

    <img v-bind:src="previewImageUrl" v-bind:height="IMAGE_HEIGHT" v-bind:width="IMAGE_WIDTH">

    <form v-on:submit.prevent="onSubmit">
      <p>
        <label for="pet-name">Pet Name:</label>
        <input v-model="pet.name" type="text" id="pet-name" placeholder="your pet's name...">
      </p>

      <p>
        <label for="pet-type">Pet Type:</label>
        <input v-model="pet.type" type="text" id="pet-type" placeholder="your pet's type...">
      </p>

      <p>
        <label for="image-url">Image URL:</label>
        <input v-model="pet.imageUrl" type="text" id="image-url" placeholder="your pet's type...">
        <input type="button" value="Autofill" v-on:click.prevent="onAutofill">
      </p>

      <p>
        <label for="pet-food">Food:</label>
        <select v-model="pet.food" id="pet-food">
          <option disabled value="">your pet's food...</option>
          <option
            v-for="foodType in FOOD_TYPES"
            v-bind:key="foodType"
            v-bind:value="foodType"
          >
            {{ foodType }}
          </option>
        </select>
      </p>

      <p>
        <label for="starvation-rate">Starvation Rate:</label>
        <input
          v-model.number="pet.starvationRate"
          type="number"
          step="0.1"
          min="0"
          id="starvation-rate"
          placeholder="your pet's starvation rate..."
        >
      </p>

      <p>
        <input type="submit" value="Add Pet">
        <input type="button" value="Cancel" v-on:click.prevent="onCancel">
      </p>
    </form>
  </div>
</template>

<script>
import store from "../store"
import petImageUrl from "../fixtures/pet-image-url"
import { FOOD_TYPES } from "../fixtures/food"
import { IMAGE_WIDTH, IMAGE_HEIGHT } from "../constants"

const TRANSPARRENT_EMPTY_GIF =
  "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="

export default {
  name: "AddPet",

  data() {
    return {
      pet: {
        name: "",
        type: "",
        imageUrl: "",
        starvationRate: "",
        food: "",
      },

      IMAGE_WIDTH,
      IMAGE_HEIGHT,

      FOOD_TYPES,
    }
  },

  methods: {
    goToPetList() {
      this.$router.push({ name: "PetList" })
    },

    onAutofill() {
      const newPetIndex = store.state.pets.length

      this.pet.imageUrl = petImageUrl({
        id: newPetIndex,
        width: IMAGE_WIDTH,
        height: IMAGE_HEIGHT,
      })
    },

    onSubmit() {
      store.commit("addPet", this.pet)

      this.goToPetList()
    },

    onCancel() {
      this.goToPetList()
    },
  },

  computed: {
    previewImageUrl() {
      const { imageUrl } = this.pet

      return imageUrl || TRANSPARRENT_EMPTY_GIF
    },
  },
}
</script>
