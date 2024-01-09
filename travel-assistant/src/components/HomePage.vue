<template>
  <div>
    <AppHeader />
    <div class="intro">
      <img src="./assets/background1.jpg" alt="background" class="background" />
      <div class="overlay-text">
        <h1>Discover a world of possibilities</h1>
        <p>Embark with confidence, for JourneyGenius guides your every step</p>
        <div class="action-buttons">
          <button class="plan-trip-button" @click="planTrip">Plan a Trip</button>
          <a href="/learn-more" class="learn-more-link">Learn More</a>
        </div>
      </div>
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

.background {
  position: relative;
  border-radius: 5px;
  width: 100%;
}

.overlay-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 1%;
}

.overlay-text h1 {
  font-size: 5em;
  color: #fff;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 3);
  margin-bottom: 20px;
}

.overlay-text p {
  font-size: 1.2em;
  color: #fff;
  margin-bottom: 20px;
}

.plan-trip-button {
  font-size: 1.5em;
  padding: 10px 20px;
}

.learn-more-link {
  font-size: 1.2em;
  margin-left: 20px;
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
