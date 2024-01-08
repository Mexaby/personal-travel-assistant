<script setup>

import {createAccommodations} from "@/classes/accommodations";
import {computed} from "vue";
import {useRouter} from "vue-router";

const accommodation = JSON.parse(localStorage.getItem("accommodation"));

const initialList = createAccommodations();


const list = computed(() => {
  return initialList.filter(item => item.location === accommodation.location && item.person >= accommodation.guests);
});

const router = useRouter();
const goTo = (route) => {
  router.push(route);
};

</script>

<template>
  <div class="accommodations-page">
    <div class="accommodations-list">
      <div v-for="item in list" :key="item.id" class="accommodation-item">
        <img :src="require(`@/classes/photos/${item.image}`)" alt="photo" class="accommodation-image">
        <div class="accommodation-details">
          <div class="accommodation-name">{{ item.name }}</div>
          <div class="accommodation-location">{{ item.location }}</div>
          <div class="accommodation-price">Price: {{ item.price }}$</div>
          <div class="accommodation-rating">Rating: {{ item.rating}}/5</div>
          <router-link :to="{ name: 'AccommodationDetails', params: { id: item.id } }" class="details-link">Details</router-link>
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
.accommodations-page {
  padding: 20px;
}

.accommodations-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
}

.accommodation-item {
  display: flex;
  flex-direction: column;
  border: 1px solid #ccc;
  border-radius: 8px;
  overflow: hidden;
}

.accommodation-image {
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-bottom: 1px solid #ccc;
}

.accommodation-details {
  padding: 10px;
}

.accommodation-name {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 5px;
}

.accommodation-location {
  color: #555;
  margin-bottom: 5px;
}

.accommodation-price,
.accommodation-rating {
  margin-bottom: 5px;
}

.accommodation-description {
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