<template>
  <header class="app-header">
    <div class="title">JourneyGenius</div>
    <div class="nav-links">
      <button class="plan-trip-button" @click="planTrip">Plan a Trip</button>
      <button class="flights-button" @click="goTo('/flights')">Flights</button>
      <button class="accomodations-button" @click="goTo('/accommodations')">Accommodation</button>
      <button class="venues-button" @click="goTo('/venues')">Venues</button>
    </div>
    <button class="account-button" @click="goTo('/account')">My Account</button>
  </header>
</template>
  
<script>
export default {
  name: "AppHeader",
  methods: {
    goTo(route) {
      this.$router.push(route);
    },
    planTrip() {
      localStorage.setItem('plan', 'true');
      this.$router.push('/flights');
    },
  },
};
</script>
  
<style scoped>
.app-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: #3498db;
  color: #fff;
}

.title {
  font-size: 1.5em;
  margin-left: 20px;
}

.nav-links {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 700px;
  margin: 0 auto;
}

.account-button {
  padding: 10px 15px;
  background-color: #2ecc71;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
</style>
  