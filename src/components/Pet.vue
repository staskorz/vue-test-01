<template>
  <div class="pet" v-on:click.prevent="$emit('pet-click', index)">
    <p data-test="name">
      {{ name }}
    </p>

    <p>
      <img data-test="image" v-bind:src="imageUrl" width="100" height="100">
    </p>

    <p data-test="hunger-status">
      {{ hungerStatus }}
    </p>

    <p class="scale-bar-container">
      <scale-bar
        v-bind:percentage="satiety"
        v-bind:width="scaleBar.width"
        v-bind:height="scaleBar.height"
      />
    </p>
  </div>
</template>

<script>
import hungerStatus from "../util/hunger-status"
import ScaleBar from "./ScaleBar"

export default {
  name: "Pet",

  props: {
    index: Number,
    name: String,
    imageUrl: String,
    satiety: Number,
  },

  data() {
    return {
      scaleBar: {
        width: 100,
        height: 3,
      },
    }
  },

  computed: {
    hungerStatus() {
      return hungerStatus(this.satiety)
    },
  },

  components: {
    "scale-bar": ScaleBar,
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

.scale-bar-container {
  margin-top: -20px;
}
</style>
