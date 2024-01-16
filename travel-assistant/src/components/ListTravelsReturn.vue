<script setup>
import { createTravelsReturn } from "@/classes/travels";
import { computed } from "vue";
import AppHeader from './page-components/AppHeader.vue';
import { useRouter } from "vue-router";

const travel = JSON.parse(localStorage.getItem("travel"));

const initialList = createTravelsReturn(travel.from, travel.to, travel.date2, travel.transport);

const list = computed(() => {
  return initialList.filter(
    (item) =>
      item.location === travel.to &&
      item.destination === travel.from &&
      item.person >= travel.travellers
  );
});

const router = useRouter();
const goTo = (route) => {
  router.push(route);
};

function detailsAndBuy(item){
  let travelReturn = item;
  localStorage.setItem("travelReturn", JSON.stringify(travelReturn));   
  goTo("/travelsDetails")
}

</script>

<template>
  <div class="travels-page">
    <AppHeader />
    <button class="bus-button" @click="goTo('/busPage')">
      <img src="@/classes/photos/bus-stop-symbol-icon-28.png" width="20px" alt="Bus Icon" class="bus-icon">
    </button>
    <div class="travels-list">
      <div v-for="item in list" :key="item.id" class="travels-item">
        <img
          :src="require(`@/classes/travelsphotos/${travel.transport}/${item.image}`)"
          alt="photo"
          class="travel-image"
        />
        <div class="travel-details">
          <div class="additional-details">
            <div class="travel-company">Travel company: {{ item.company }}</div>
            <div class="travel-duration">Duration: {{ item.duration }} hours</div>
            <div class="travel-price">Price/per person: {{ item.price }}$</div>
          </div>
          <div class="important-details">
            <div class="departure-details">
              <div class="departure">
                <div class="time">{{ item.departureTime }}</div>
                <div class="localizacion">{{ item.location }}</div>
              </div>
            </div>
            <div class="line"></div>
            <div class="arrival-details">
              <div class="arrival">
                <div class="time">{{ item.arrivalTime }}</div>
                <div class="destination">{{ item.destination }}</div>
              </div>
            </div>
          </div>
          <div class="button-container">
             <button class="select-button" @click="detailsAndBuy(item)">See details and Buy tickets</button>
          </div>
        </div>
      </div>
    </div>
    <button @click="goTo('/')">Back to Home</button>
    <button @click="goTo('/listingTravels')"> Back to departure</button>
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
  grid-template-columns: 1fr;
  gap: 20px;
  justify-content: center;
}

.travels-item {
  display: flex;
  max-width: 1000px;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  background-color: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  margin-left: 200px;
}

.travels-item:hover {
  transform: scale(1.03);
}

.travel-image {
  width: 200px;
  height: 100%;
  object-fit: cover;
  border-right: 1px solid #ddd;
}

.travel-details {
  padding: 15px;
  display: flex;
  align-items: center;
}

.travel-company,
.travel-location,
.travel-destination,
.travel-departure,
.travel-arrival,
.travel-duration,
.travel-price {
  margin-bottom: 8px;
}

.travel-company {
  font-weight: bold;
  font-size: 16px;
}

.travel-location,
.travel-destination {
  font-size: 14px;
  color: #555;
}

.travel-departure,
.travel-arrival,
.travel-duration,
.travel-price {
  font-size: 12px;
}

button {
  margin-top: 20px;
  padding: 10px;
  background-color: #3498db;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-right: 10px;
}

.departure-details,
.arrival-details {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 50px;
  margin-right: auto;
  margin-left: auto;
}

.line {
  width: 60%;
  height: 0.125rem;
  margin: 0.25rem auto;
  background-color: #545860;
  border-radius: 0.5rem;
  position: relative;
}

.line::before {
  content: "";
  position: absolute;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 8px 0 8px 12px;
  border-color: transparent transparent transparent #545860;
  right: -4px;
  top: 50%;
  transform: translateY(-50%);
}
.additional-details {
  margin-top: 12px;
  margin-left: auto;
  width: 170px;
}

.important-details {
  width: 400px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.departure-details {
  width: 50%;
}

.arrival-details {
  width: 50%;
}

.button-container {
  display: flex;
  align-items: center;
}

.select-button {
  background-color: #4CAF50;
  color: #fff;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-block: 20px;
  margin-left: 10px;
}


</style>
