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
        <scale-bar
          v-bind:percentage="pet.satiety"
          v-bind:width="scaleBar.width"
          v-bind:height="scaleBar.height"
        />
      </p>

      <p>
        Eats: {{ pet.food }}
      </p>
    </div>

  </div>
</template>

<script>
import store from "../store"
import ScaleBar from "./ScaleBar"

export default {
  name: "PetDetails",

  data() {
    return {
      scaleBar: {
        width: 100,
        height: 3,
      },
    }
  },

  computed: {
    pet() {
      const { petId } = this.$route.params

      return store.state.pets[petId]
    },
  },

  components: {
    "scale-bar": ScaleBar,
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  font-weight: normal;
}
</style>
