<template>
  <div class="navbar">
    <div class="nav justify-content-start">
      <router-link to="/" class="navbar-brand">PETSITTER</router-link>
    </div>
    <div class="nav justify-content-end">
      <router-link to="/" class="nav-item nav-link">Pet List</router-link>
      <router-link to="/add-pet" class="nav-item nav-link">Add Pet</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
}
</script>
