<template>
  <div>
    <AppHeader/>
    <div v-if="selectedAccommodation" class="accommodation-details">
      <h2>{{ selectedAccommodation.name }}</h2>
      <div class="image-container">
        <img :src="require(`@/classes/photos/${selectedAccommodation.image}`)" alt="Large photo">
      </div>
      <div class="details">
        <div class="description">{{ selectedAccommodation.description }}</div>
        <div class="info">
          <div><strong>Location:</strong> {{ selectedAccommodation.location }}</div>
          <div><strong>Price:</strong> {{ selectedAccommodation.price }}</div>
          <div><strong>Rating:</strong> {{selectedAccommodation.rating}}</div>
        </div>
        <button @click="reserve" class="reserve-button">Reserve</button>
        <button @click="goBack" class="go-back-button">Go Back</button>
      </div>
    </div>
    <div v-else class="loading-message">
      Loading or not found message...
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { createAccommodations } from "@/classes/accommodations";
import AppHeader from './page-components/AppHeader.vue';



const selectedAccommodation = ref(null);
const router = useRouter();

// Fetch the selected accommodation based on the route parameter
const accommodationId = parseInt(router.currentRoute.value.params.id);
const accommodations = createAccommodations();
// Use additional checks to handle potential errors
if (accommodations && Array.isArray(accommodations)) {
  selectedAccommodation.value = accommodations.find((acc) => acc.id === accommodationId);
}

function goTo(route) {
  router.push(route);
}

function reserve() {
  goTo('/venues')
}

function goBack() {
  router.back();
}
</script>

<style scoped>
.accommodation-details {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.image-container {
  margin-bottom: 20px;
}

.image-container img {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
}

.details {
  font-family: 'Arial', sans-serif;
}

.description {
  margin-bottom: 10px;
}

.info {
  margin-bottom: 20px;
}

.info div {
  margin-bottom: 8px;
}

.reserve-button,
.go-back-button {
  background-color: #4CAF50;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  margin-right: 10px;
}

.go-back-button {
  background-color: #f44336;
}

.reserve-button:hover,
.go-back-button:hover {
  background-color: #45a049;
}

.loading-message {
  font-size: 18px;
  text-align: center;
  margin-top: 20px;
}
</style>
