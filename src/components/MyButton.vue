<template>
  <input type="button" v-bind:value="label" />
</template>

<script>
export default {
  name: "my-button",
  props: ["label", "onClick"],
}
</script>
