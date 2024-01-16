<script setup>
import { createVenues } from "@/classes/venues";
import { ref } from "vue";
import { computed } from "vue";
import AppHeader from "./page-components/AppHeader.vue";
import { useRouter } from "vue-router";

const venue = JSON.parse(localStorage.getItem("venue"));

const initialList = createVenues(venue.location, venue.activity);

const sortType = ref("default"); 
const sortOrder = ref("asc"); 
const defaultSort = ref("asc");

const sortList = () => {
  const orderMultiplier = sortOrder.value === "asc" ? 1 : -1;
  return initialList
    .filter(
      (item) =>
        item.location === venue.location && item.person >= venue.attendees
    )
    .sort((a, b) => {
      if (sortType.value === "default") {
        return 0;
      } else if (sortType.value === "rating") {
        return (a.rating - b.rating) * orderMultiplier;
      } else {
        return (a.price - b.price) * orderMultiplier;
      }
    });
};

const sortedList = computed(() => sortList());

const updateSort = (type) => {
  sortType.value = type;
  defaultSort.value = sortOrder.value;
};

const toggleSortOrder = () => {
  sortOrder.value = sortOrder.value === "asc" ? "desc" : "asc";
  defaultSort.value = sortOrder.value;
};

const router = useRouter();
const goTo = (route) => {
  router.push(route);
};

const showModal = ref(false);
const selectedVenue = ref(null);

function details(item) {
  selectedVenue.value = item;
  showModal.value = true;
  setTimeout(() => {
    document
      .querySelector(".modal-overlay")
      .classList.add("modal-overlay-enter-active");
  }, 200);
}

function closeDetails() {
  selectedVenue.value = null;
  showModal.value = false;
}

function confirmationButton() {
  //waiting for trip summary
}
</script>


<template>
  <div class="venues-page">
    <AppHeader />
    <button class="bus-button" @click="goTo('/busPage')">
      <img src="@/classes/photos/bus-stop-symbol-icon-28.png" width="20px" alt="Bus Icon" class="bus-icon">
    </button>
    <div v-if="sortedList.length === 0">
      <p>
        Sorry, no venues avaliable for the matching filters. Please try again!
      </p>
            <div class="allbuttons">
        <div class="homeorderbuttons">
          <button @click="goTo('/venues')">Back to Filters</button>
          <div class="order-buttons">
            <button @click="updateSort('price')">Order by Price</button>
            <button @click="updateSort('rating')">Order by Rating</button>
            <button @click="toggleSortOrder">Toggle Order</button>
          </div>
        </div>
        <button class="filtersbutton" @click="goTo('/')">Back to Home</button>
      </div>
    </div>
    <div v-else>
            <div class="allbuttons">
        <div class="homeorderbuttons">
          <button @click="goTo('/venues')">Back to Filters</button>
          <div class="order-buttons">
            <button @click="updateSort('price')">Order by Price</button>
            <button @click="updateSort('rating')">Order by Rating</button>
            <button @click="toggleSortOrder">Toggle Order</button>
          </div>
        </div>
        <button class="filtersbutton" @click="goTo('/')">Back to Home</button>
      </div>
      <div class="venues-list">
        <div v-for="item in sortedList" :key="item.id" class="venue-item">
          <img
            :src="require(`@/classes/venues/${venue.activity}/${item.image}`)"
            alt="photo"
            class="venue-image"
          />
          <div class="venue-details">
            <div class="venue-name">{{ item.name }}</div>
            <div class="venue-location">{{ item.location }}</div>
            <div class="venue-price">Price: {{ item.price }}$ per person</div>
            <div class="venue-rating">Rating: {{ item.rating }}/5</div>
            <button @click="details(item)" class="confirm-button">Reserve Now</button>
          </div>
        </div>
      </div>
    </div>
    <teleport to="body" fade-enter-active>
      <transition name="fade" mode="out-in">
        <div v-if="showModal" class="modal-overlay">
          <div class="modal">
            <div v-if="selectedVenue">
              <img
                :src="
                  require(`@/classes/venues/${venue.activity}/${selectedVenue.image}`)
                "
                alt="Large photo"
                class="venue-image2"
              />
              <div class="venue-description">
                {{ selectedVenue.description }}
              </div>
              <div class="venue-price">Price: {{ selectedVenue.price }}$</div>
              <div class="venue-rating">
                Rating: {{ selectedVenue.rating }}/5
              </div>
            </div>
            <div class="details-buttons">
              <button @click="confirmationButton" class="confirm-button">
                Confirm your reservation!
              </button>
              <button @click="closeDetails" class="close-button">Close</button>
            </div>
          </div>
        </div>
      </transition>
    </teleport>
  </div>
</template>

<style scoped>

p {
  padding: 10px;
  margin: 0;
  box-sizing: border-box;
  font-size: larger;
  font-family: "Montserrat", sans-serif;
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
  background-color: white;
}

.venue-item:hover{
     transform: scale(1.05); 
    transition: transform 0.3s ease; 
}

.venue-image {
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-bottom: 1px solid #ccc;
}

.venue-image2 {
  width: 100%;
  height: 300px;
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
  width: 500px;
  margin-block: 10px;
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

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: opacity 1s;
  opacity: 0;
}

.modal-overlay-enter-active {
  opacity: 1;
}

.modal {
  background: #fff;
  padding: 20px;
  border-radius: 8px;
}

.details-button {
  display: inline-block;
}

.confirm-button {
  padding: 8px 16px;
  background-color: #2ecc71;
  color: #fff;
  text-decoration: none;
  border-radius: 5px;
  margin-top: 10px;
  transition: background-color 0.3s ease;
}

.confirm-button:hover {
  background-color: #2980b9;
}

.close-button {
  background-color: #e74c3c;
  color: #fff;
  border: none;
  border-radius: 5px;
  margin-left: 10px;
  padding: 8px 25px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.close-button:hover {
  background-color: #f02e11;
}

.allbuttons {
  display: flex;
  justify-content: space-between; 
  align-items: center; 
  margin-bottom: 20px;
}
.homeorderbuttons {
  display: flex;
  align-items: center;
  gap: 10px;
}

.order-buttons {
  display: flex;
  gap: 10px;
}

.filtersbutton {
  margin-left: auto;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>