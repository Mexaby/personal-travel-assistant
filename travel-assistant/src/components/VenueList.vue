<script setup>
import {createVenues} from "@/classes/venues";
import {computed} from "vue";
import AppHeader from './page-components/AppHeader.vue';
import {useRouter} from "vue-router";

const venue = JSON.parse(localStorage.getItem("venue"));

const initialList = createVenues(venue.activity);


const list = computed(() => {
  return initialList.filter(item => item.location === venue.location && item.person >= venue.attendees);
});

const router = useRouter();
const goTo = (route) => {
  router.push(route);
};
</script>

<template>
  <div class="venues-page">
    <AppHeader/>
    <div class="venues-list">
      <div v-for="item in list" :key="item.id" class="venue-item">
        <img :src="require(`@/classes/venues/${venue.activity}/${item.image}`)" alt="photo" class="venue-image">
        <div class="venue-details">
          <div class="venue-name">{{ item.name }}</div>
          <div class="venue-location">{{ item.location }}</div>
          <div class="venue-price">Price: {{ item.price }}$</div>
          <div class="venue-rating">Rating: {{ item.rating}}/5</div>
          <!-- <router-link :to="{ name: 'VenueDetails', params: { id: item.id } }" class="details-link">Details</router-link> -->
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
.venues-page {
  padding: 20px;
}

.venues-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
}

.venue-item {
  display: flex;
  flex-direction: column;
  border: 1px solid #ccc;
  border-radius: 8px;
  overflow: hidden;
}

.venue-image {
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-bottom: 1px solid #ccc;
}

.venue-details {
  padding: 10px;
}

.venue-name {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 5px;
}

.venue-location {
  color: #555;
  margin-bottom: 5px;
}

.venue-price,
.venue-rating {
  margin-bottom: 5px;
}

.venue-description {
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