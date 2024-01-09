<template>
  <div>
    <AppHeader />
    <div class="intro">
      <h1 class="title">JourneyGenius</h1>
      <p>Plan your trip with ease</p>
      <!-- <div class="action-buttons">
      <button class="plan-trip-button" @click="planTrip">Plan a Trip</button>
      <button class="flights-button" @click="goTo('/flights')">Flights</button>
      <button class="accomodations-button" @click="goTo('/accommodations')">Accommodation</button>
      <button class="venues-button" @click="goTo('/venues')">Venues</button>
    </div> -->
    </div>
  </div>
</template>

<script>
import AppHeader from './page-components/AppHeader.vue';

export default {
  components: {
    AppHeader,
  },

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
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  max-width: 1000px;
  margin: 0 auto;
  margin-bottom: 50px;
}

.title {
  left: 50%;
  transform: translateX(-50%);
  font-size: 2em;
}

.plan-trip-button {
  width: 100%;
}

.flights-button,
.accomodations-button,
.venues-button {
  width: 40%;
}

.action-buttons {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 700px;
  margin: 0 auto;
}

.options-list {
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #fff;
  border: 1px solid #ccc;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 10px;
  display: none;
}

.account-info:hover .options-list {
  display: block;
}

button {
  height: 40px;
  border-radius: 5px;
  background-color: #145da0;
  color: white;
  margin-bottom: 20px;
}

.account-info {
  margin-left: auto;
  width: 10%;
}
</style>
