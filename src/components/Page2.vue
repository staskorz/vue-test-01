<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <my-button label="Click Me!" />
  </div>
</template>

<script>
import MyButton from "@/components/MyButton"

export default {
  name: "Page2",
  data() {
    return {
      msg: "Welcome to Page2",
    }
  },
  components: {
    MyButton,
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
