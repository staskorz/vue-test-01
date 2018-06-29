<template>
  <div class="add-pet">
    <h1>Add a Pet</h1>

    <form v-on:submit.prevent="onSubmit">
      <div class="form-group">
        <label for="pet-name">Pet Name</label>

        <input
          v-model.trim="pet.name"
          type="text"
          id="pet-name"
          name="Pet Name"
          v-validate="{ required: true, max: 20 }"
          v-bind:class="{ 'form-control': true, 'is-invalid': errors.has('Pet Name') }"
          placeholder="your pet's name..."
        >

        <div class="invalid-feedback">
          {{ errors.first('Pet Name') }}
        </div>
      </div>

      <div class="form-group">
        <label for="pet-type">Pet Type</label>
        
        <input
          v-model.trim="pet.type"
          type="text"
          id="pet-type"
          name="Pet Type"
          v-validate="{ required: true, max: 20 }"
          v-bind:class="{ 'form-control': true, 'is-invalid': errors.has('Pet Type') }"
          placeholder="your pet's type..."
        >

        <div class="invalid-feedback">
          {{ errors.first('Pet Type') }}
        </div>
      </div>

      <div class="form-group">
        <label for="image-url">Pet Image URL</label>

        <div class="input-group">
          <input
            v-model.trim="pet.imageUrl"
            type="text"
            id="image-url"
            name="Pet Image URL"
            v-validate="{ required: true, 'url_allow_relative': true }"
            v-bind:class="{ 'form-control': true, 'is-invalid': errors.has('Pet Image URL') }"
            placeholder="URL of a picture of your pet..."
          >

          <div class="input-group-append">
            <button class="btn btn-outline-secondary" type="button" v-on:click.prevent="onAutofill">Autofill</button>
          </div>

          <div class="invalid-feedback">
            {{ errors.first('Pet Image URL') }}
          </div>
        </div>

        
      </div>

      <div v-bind:style="previewImageStyle" class="preview-image">
        <div>Pet Image Preview</div>
        <img v-bind:src="previewImageUrl" v-bind:height="IMAGE_HEIGHT" v-bind:width="IMAGE_WIDTH">
      </div>

      <div class="form-group">
        <label for="pet-food">Pet Food</label>

        <select
          v-model="pet.food"
          id="pet-food"
          name="Pet Food"
          v-validate="{ required: true }"
          v-bind:class="{ 'form-control': true, 'is-invalid': errors.has('Pet Food') }"
        >
          <option disabled value="">your pet's food...</option>
          <option
            v-for="foodType in FOOD_TYPES"
            v-bind:key="foodType"
            v-bind:value="foodType"
          >
            {{ foodType }}
          </option>
        </select>

        <div class="invalid-feedback">
          {{ errors.first('Pet Food') }}
        </div>
      </div>

      <div class="form-group">
        <label for="starvation-rate">Pet Starvation Rate</label>

        <input
          v-model.number="pet.starvationRate"
          type="number"
          step="0.1"
          min="0.1"
          id="starvation-rate"
          name="Pet Starvation Rate"
          v-validate="{ required: true, decimal: true, min_value: 0.1, max_value: 5 }"
          v-bind:class="{ 'form-control': true, 'is-invalid': errors.has('Pet Starvation Rate') }"
          placeholder="your pet's starvation rate..."
        >

        <div class="invalid-feedback">
          {{ errors.first('Pet Starvation Rate') }}
        </div>
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
      return !this.pet.imageUrl || this.errors.has("Pet Image URL")
        ? { display: "none" }
        : null
    },
  },
}
</script>
