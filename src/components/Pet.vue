<template>
  <div class="pet">
    <p>
      {{ name }}
    </p>

    <p>
      <img v-bind:src="imageUrl" width="100" height="100">
    </p>
  </div>
</template>

<script>
export default {
  name: "Pet",

  props: {
    name: String,
    imageUrl: String,
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
