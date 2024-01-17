<template>
  <div>

    <AppHeader />
    <button @click="goBack()" class="homeButton">Go Back</button>
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
        <button class="redoButton">Redo the previous trip</button>

      </div>
    </div>
  </div>
</template>

<script setup>
import AppHeader from '.././page-components/AppHeader.vue';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const trips = ref([
  { date: '10.12.2021', showDetails: false, activeSubheader: '' },
  { date: '10.12.2020', showDetails: false, activeSubheader: '' },
  // Add more trips as needed
]);


const toggleDetails = (index) => {
  trips.value[index].showDetails = !trips.value[index].showDetails;
};

const toggleSubheader = (index, subheader) => {
  trips.value[index].activeSubheader = trips.value[index].activeSubheader === subheader ? '' : subheader;
};

const router = useRouter();
const goBack = () => {
  router.back();
};
</script>

<style scoped>
.homeButton {
  margin-top: 20px;
  padding: 10px;
  background-color: #3498db;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
.redoButton {
  margin-top: 20px;
  padding: 10px;
  background-color: green;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
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
