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
      const empty = width - filled

      return {
        height: height + "px",
        width: filled + "px",
        borderRightWidth: empty + "px",
      }
    },
  },
}
</script>

<style scoped>
.scale-bar {
  box-sizing: border-box;
  background-color: black;
  border-right-style: solid;
  border-right-color: lightgrey;
  display: inline-block;
}
</style>
