<template>
  <div class="pet card">
    <img class="card-img-top" data-test="image" v-bind:src="imageUrl" v-bind:width="IMAGE_WIDTH" v-bind:height="IMAGE_HEIGHT">

    <scale-bar
      v-bind:percentage="satiety"
      v-bind:width="scaleBar.width"
      v-bind:height="scaleBar.height"
    />

    <div class="card-body">
      <h5 class="card-title" data-test="name">{{ name }}</h5>
      <h6 class="card-subtitle text-muted" data-test="hunger-status">{{ hungerStatus }}</h6>
      <a href="#" class="card-link text-right" v-on:click.prevent="$emit('pet-click', index)">Details</a>
    </div>
  </div>
</template>

<script>
import hungerStatus from "../util/hunger-status"
import ScaleBar from "./ScaleBar"
import { IMAGE_WIDTH, IMAGE_HEIGHT } from "../constants"

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
        width: 198,
        height: 2,
      },

      IMAGE_WIDTH,
      IMAGE_HEIGHT,
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
