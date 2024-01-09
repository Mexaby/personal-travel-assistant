<template>
  <header class="app-header">
    <img :src="require('@/components/assets/logo2.png')" alt="Logo" class="logo" />
    <div class="title" @click="goTo('/')">JourneyGenius</div>
    <div class="nav-buttons">
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
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: #3498db;
  color: #fff;
  border-radius: 5px;
  margin-bottom: 20px;
}

.logo {
  position: absolute;
  height: 100%;
  max-width: 60px;
  object-fit: contain;
}

.title {
  font-size: 2em;
  cursor: pointer;
  transform: translate(70px);
}

.nav-buttons {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 600px;
}

button {
  font-size: 1em;
  height: 40px;
  padding: 10px 15px;
  border-radius: 5px;
  background-color: #3498db;
  color: white;
  border: none;
}

button:hover {
  cursor: pointer;
  background-color: #2980b9;
}

.account-button {  
  background-color: #2ecc71;
}

</style>
  