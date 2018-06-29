<template>
  <div class="add-pet">
    <h1>Add a Pet</h1>

    <form v-on:submit.prevent="onSubmit">
      <div class="form-group">
        <label for="pet-name">Pet Name</label>
        <input v-model="pet.name" type="text" id="pet-name" class="form-control" placeholder="your pet's name...">
      </div>

      <div class="form-group">
        <label for="pet-type">Pet Type</label>
        <input v-model="pet.type" type="text" id="pet-type" class="form-control" placeholder="your pet's type...">
      </div>

      <div class="form-group">
        <label for="image-url">Image URL</label>

        <div class="input-group">
          <input v-model="pet.imageUrl" type="text" id="image-url" class="form-control" placeholder="your pet's type...">

          <div class="input-group-append">
            <button class="btn btn-outline-secondary" type="button" v-on:click.prevent="onAutofill">Autofill</button>
          </div>
        </div>
      </div>

      <div v-bind:style="previewImageStyle" class="preview-image">
        <div>Image Preview</div>
        <img v-bind:src="previewImageUrl" v-bind:height="IMAGE_HEIGHT" v-bind:width="IMAGE_WIDTH">
      </div>

      <div class="form-group">
        <label for="pet-food">Food</label>

        <select v-model="pet.food" id="pet-food" class="form-control">
          <option disabled value="">your pet's food...</option>
          <option
            v-for="foodType in FOOD_TYPES"
            v-bind:key="foodType"
            v-bind:value="foodType"
          >
            {{ foodType }}
          </option>
        </select>
      </div>

      <div class="form-group">
        <label for="starvation-rate">Starvation Rate</label>

        <input
          v-model.number="pet.starvationRate"
          type="number"
          step="0.1"
          min="0"
          id="starvation-rate"
          class="form-control"
          placeholder="your pet's starvation rate..."
        >
      </div>

      <div class="text-right">
        <button type="submit" class="btn btn-primary">Add Pet</button>
        <button type="button" v-on:click.prevent="onCancel" class="btn btn-secondary">Cancel</button>
      </div>
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

    previewImageStyle() {
      return this.pet.imageUrl ? null : { display: "none" }
    },
  },
}
</script>
