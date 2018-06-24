<template>
  <div class="pet">
    <p>
      Name: {{ name }}
    </p>

    <p>
      Type: {{ type }}
    </p>
  </div>
</template>

<script>
export default {
  name: "Pet",

  props: {
    name: String,
    type: String,
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
