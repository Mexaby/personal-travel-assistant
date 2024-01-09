<template>
  <div>
    <AppHeader />
    <div class="intro">
      <img src="./assets/background1.jpg" alt="background" class="background" />
      <div class="overlay-text">
        <h1>Discover a world of possibilities</h1>
        <p>Embark with confidence, for JourneyGenius guides your every step</p>
        <div class="intro-action-buttons">
          <button class="plan-trip-button" @click="planTrip">Plan a trip</button>
          <button class="learn-more-link">Learn More</button>
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
  background-color: rgba(0, 0, 0, 0.45);
  padding: 1%;
  border-radius: 5px;
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
  margin-bottom: 30px;
}

.plan-trip-button {
  font-size: 1.5em;
  margin-right: 20px;
  padding-left: 2%;
  padding-right: 2%;
  cursor: pointer;
}

.learn-more-link {
  font-size: 1.2em;
  margin-left: 20px;
  color: #fff;
  background: none;
  border: none;
  cursor: pointer;
  text-decoration: underline;
}

.intro-action-buttons {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  cursor: pointer;
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
