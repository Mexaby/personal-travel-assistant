<script setup>

import {createTravels} from "@/classes/travels";
import {computed} from "vue";
import AppHeader from './page-components/AppHeader.vue';
import {useRouter} from "vue-router";

const travel = JSON.parse(localStorage.getItem("travel"));

const initialList = createTravels(travel.from,travel.to);


const list = computed(() => {
  return initialList.filter(item => item.location === travel.from && item.destination === travel.to && item.person >= travel.travellers);
});

const router = useRouter();
const goTo = (route) => {
  router.push(route);
};
</script>

<template>
  <div class="travels-page">
    <AppHeader/>
    <p>soyListTravels</p>
    <div class="travels-list">
      <div v-for="item in list" :key="item.id" class="travels-item">
        <img :src="require(`@/classes/travelsphotos/${travel.transport}/${item.image}`)" alt="photo" class="travel-image">
        <div class="travel-details">
          <div class="travel-company">Travel company: {{ item.company }}</div>
          <div class="travel-location">Location: {{ item.location }}</div>
          <div class="travel-destination">Destination: {{ item.destination }}</div>
          <div class="travel-departure">Departure Time: {{ item.departureTime }}</div>
          <div class="travel-arrival">Arrival Time: {{ item.arrivalTime }}</div>
          <div class="travel-duration">Duration: {{ item.duration }}</div>
          <div class="travel-price">Price/per person: {{ item.price }}$</div>
        </div>
      </div>
    </div>
    <button @click="goTo('/')">Back to Home</button>
  </div>
</template>



<style scoped>
.details-link {
  display: inline-block;
  padding: 8px 16px;
  background-color: #3498db;
  color: #fff;
  text-decoration: none;
  border-radius: 5px;
  margin-top: 10px;
  transition: background-color 0.3s ease;
}

.details-link:hover {
  background-color: #2980b9;
}
.travels-page {
  padding: 20px;
}

.travels-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
}

.travel-item {
  display: flex;
  flex-direction: column;
  border: 1px solid #ccc;
  border-radius: 8px;
  overflow: hidden;
}

.travel-image {
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-bottom: 1px solid #ccc;
}

.travel-details {
  padding: 10px;
}

.travel-name {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 5px;
}

.travel-location {
  color: #555;
  margin-bottom: 5px;
}

.travel-price,
.travel-rating {
  margin-bottom: 5px;
}

.travel-description {
  font-style: italic;
  color: #777;
}

button {
  margin-top: 20px;
  padding: 10px;
  background-color: #3498db;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
</style>