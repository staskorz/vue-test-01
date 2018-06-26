<template>
  <div>
    <h1>Add a Pet</h1>

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
        <input type="submit" value="Add Pet">
        <input type="button" value="Cancel" v-on:click.prevent="onCancel">
      </p>
    </form>
  </div>
</template>

<script>
import store from "../store"

export default {
  name: "AddPet",

  data() {
    return {
      pet: {},
    }
  },

  methods: {
    goToPetList() {
      this.$router.push({ name: "PetList" })
    },

    onSubmit() {
      store.commit("addPet", this.pet)

      this.goToPetList()
    },

    onCancel() {
      this.goToPetList()
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  font-weight: normal;
}
</style>
