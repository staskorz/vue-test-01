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
    </div>

  </div>
</template>

<script>
import store from "../store"

export default {
  name: "PetDetails",

  computed: {
    pet() {
      const { petId } = this.$route.params

      return store.state.pets[petId]
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
