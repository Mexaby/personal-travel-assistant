<template>
  <div>

    <AppHeader />
    
    <div v-for="(trip, index) in trips" :key="index">
      <div class="group-header" @click="toggleDetails(index)">
        <h2>{{ trip.date }}</h2>
      </div>

      <div v-show="trip.showDetails" class="subheaders-container">
        <div class="subheader" @click="toggleSubheader(index, 'travel')">
          Travelled by
        </div>
        <div v-show="trip.activeSubheader === 'travel'" class="card">
          <img src=".././assets/Plane.webp" alt="Travel Image" />
          <p>You have travelled by plane, from X to Y</p>
        </div>

        <div class="subheader" @click="toggleSubheader(index, 'venues')">
          Venues Visited
        </div>
        <div v-show="trip.activeSubheader === 'venues'" class="card">
          <img src=".././assets/Venues-Visited.webp" alt="Venue Image" />
          <p>The visited venues have been X, Y and Z.</p>
        </div>

        <div class="subheader" @click="toggleSubheader(index, 'accommodation')">
          Accommodation
        </div>
        <div v-show="trip.activeSubheader === 'accommodation'" class="card">
          <img src=".././assets/Hotel-Room.webp" alt="Accommodation Image" />
          <p>You have decided to book a hotel room.</p>
        </div>

      </div>
    </div>
  </div>
</template>

<script>

import AppHeader from '.././page-components/AppHeader.vue';
export default {
  components: {
    AppHeader,
  },
  data() {
    return {
      trips: [
        { date: '10.12.2021', showDetails: false, activeSubheader: '' },
        { date: '10.12.2020', showDetails: false, activeSubheader: '' },
        // Add more trips as needed
      ],
    };
  },
  methods: {
    toggleDetails(index) {
      this.trips[index].showDetails = !this.trips[index].showDetails;
    },
    toggleSubheader(index, subheader) {
      this.trips[index].activeSubheader = this.trips[index].activeSubheader === subheader ? '' : subheader;
    },
    goTo(route) {
      this.$router.push(route);
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
  max-width: 80%; /* Set the max-width to 80% for the header */
  margin: 0 auto;
  border: 1px solid #3498db;
}

.group-header {
  cursor: pointer;
  margin: 10px;
  text-align: center;
  background-color: #2980b9;
  padding: 5px;
  border: 1px solid #3498db;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

.subheaders-container {
  text-align: center;
  max-width: 65%; /* Set the max-width to 65% for the subheaders container */
  margin: 0 auto;
}

.subheader {
  cursor: pointer;
  margin: 10px;
  background-color: #61b5ed;
  padding: 5px;
  border: 1px solid #3498db;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

.card {
  margin: 10px;
  padding: 10px;
  border: 1px solid #3498db;
  border-radius: 5px;
  background-color: #ecf0f1;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 50%; /* Set the max-width to 50% for the card */
  margin: 0 auto;
  margin-bottom: 40px;
}

.card img {
  width: 100%; /* Make the image fill the container */
  height: auto;
}
</style>
