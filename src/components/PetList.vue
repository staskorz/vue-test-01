<template>
  <div>
    <h1>Pet List</h1>

    <div class="pets-container">
      <pet
        v-for="(pet, index) in pets"
        v-bind:key="index"
        v-bind:index="index"
        v-bind:name="pet.name"
        v-bind:imageUrl="pet.imageUrl"
        v-bind:satiety="pet.satiety"
        v-on:pet-click="onPetClick"
      />
    </div>

  </div>
</template>

<script>
import store from "../store"
import Pet from "./pet"

export default {
  name: "PetList",

  data() {
    return {
      pet: {},
    }
  },

  computed: {
    pets() {
      return store.state.pets
    },
  },

  methods: {
    onPetClick(petId) {
      this.$router.push({ name: "PetDetails", params: { petId } })
    },
  },

  components: {
    pet: Pet,
  },
}
</script>
