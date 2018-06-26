<template>
  <div class="pet" v-on:click.prevent="$emit('pet-click', index)">
    <p>
      {{ name }}
    </p>

    <p>
      <img v-bind:src="imageUrl" width="100" height="100">
    </p>

    <p>
      {{ hungerStatus }}
    </p>
  </div>
</template>

<script>
import hungerStatus from "../util/hunger-status"

export default {
  name: "Pet",

  props: {
    index: Number,
    name: String,
    imageUrl: String,
    satiety: Number,
  },

  computed: {
    hungerStatus() {
      return hungerStatus(this.satiety)
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.pet {
  background-color: lightgrey;
  width: 200px;
  height: 200px;
}
</style>
