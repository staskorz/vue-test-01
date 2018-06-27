<template>
  <div v-bind:style="style" class="scale-bar"></div>
</template>

<script>
export default {
  name: "scale-bar",

  props: {
    percentage: Number,
    width: Number,
    height: Number,
  },

  computed: {
    style() {
      const { width, height, percentage } = this

      // eslint-disable-next-line prettier/prettier
      const filled = Math.round(width / 100 * percentage)

      return {
        height: height + "px",
        width: width + "px",
        borderLeftWidth: filled + "px",
      }
    },
  },
}
</script>

<style scoped>
.scale-bar {
  background-color: lightgrey;
  border-left-style: solid;
  border-left-color: black;
  display: inline-block;
  box-sizing: border-box;
}
</style>
