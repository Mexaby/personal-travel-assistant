<template>
  <div class="header">
    <div class="title">JourneyGenius</div>
    <div class="nav-buttons">
      <button class="nav-button">Plan a trip</button>
      <button class="nav-button">Flights</button>
      <button class="nav-button">Accommodation</button>
      <button class="nav-button">Venues</button>
    </div>
    <div class="account-button">
      <button class="nav-button">My Account</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppHeader'
}
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  width: 1200px;
  border-radius: 10px;
  padding: 10px;
  background-color: lightblue;
}

.title {
  margin-right: auto;
  font-size: 2em;
}

.nav-buttons {
  display: flex;
  gap: 10px;
  background-color: lightblue;
}

.nav-button:hover {
  background-color: blue;
}

.account-button {
  margin-left: auto;
}
</style>