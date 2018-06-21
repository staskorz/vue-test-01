<template>
  <input type="button" v-bind:value="label" v-on:click="$emit('button-click')" />
</template>

<script>
export default {
  name: "my-button",
  props: ["label"],
}
</script>
