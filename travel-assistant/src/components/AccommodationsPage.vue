<script setup>
import {ref} from "vue";
import {useRouter} from "vue-router";
import AppHeader from './page-components/AppHeader.vue';

const router = useRouter();
const goTo = (route) => {
  router.push(route);
};

let accommodation = {
  location: "",
  checkIn: "",
  checkOut: "",
  guests: 0,
}

let input = ref("");
let showDestinations = ref(true);

const destinations = ["Cluj-Napoca", "Alicante", "Bucharest", "Budapest", "Istanbul", "London", "Madrid", "Paris", "Rome", "Vienna"];

function filteredList() {
  return destinations.filter((destination) =>
      destination.toLowerCase().includes(input.value.toLowerCase())
  );
}

function handleResultClick(destination) {
  input.value = destination;
  showDestinations.value = false;
}

function search() {
  if (input.value === "") {
    alert("Please enter a destination!");
  } else if (!destinations.includes(input.value)) {
    alert("Please enter a valid destination!");
  } else if (accommodation.checkIn === "" || accommodation.checkOut === "") {
    alert("Please select both check-in and check-out dates!");
  } else if (isNaN(accommodation.guests) || accommodation.guests <= 0) {
    alert("Please enter a valid number of guests!");
  } else {
    const today = new Date();
    const checkInDate = new Date(accommodation.checkIn);
    const checkOutDate = new Date(accommodation.checkOut);

    if (checkInDate >= checkOutDate) {
      alert("Check-out date must be after the check-in date!");
    } else if (checkInDate < today || checkOutDate < today) {
      alert("Please select dates in the future!");
    } else {
      accommodation.location = input.value;
      localStorage.setItem("accommodation", JSON.stringify(accommodation));
      goTo("/listingAccommodations")
    }
  }
}
</script>

<template>
  <div>
    <AppHeader/>
    <button @click="goTo('/')" class="homeButton">Back to Home</button>
    <div class="titleAccommodations">Find the accommodation best suited for you!</div>
    <br><br>
    <div class="search-container">
      <div class="inputs">
        <div class="input-group">
          <div class="input-container">
            <span>Select your destination</span>
            <input id="location" type="text" class="location" v-model="input" placeholder="Select your destination..." />
          </div>
          <div class="input-container">
            <span>Check-in</span>
            <input id="checkIn" v-model="accommodation.checkIn" type="date" class="check-in" />
          </div>
          <div class="input-container">
            <span>Check-out</span>
            <input id="checkOut" v-model="accommodation.checkOut" type="date" class="check-out" />
          </div>
          <div class="input-container">
            <span>Guests</span>
            <input id="guests" v-model="accommodation.guests" type="number" class="guests" />

          </div>
          <div class="input-container">
            <button @click="search" class="search-button">Search</button>
          </div>
        </div>
      </div>
      <div v-if="showDestinations && input !== ''" class="destinations-container">
        <div class="item destinations" v-for="destination in filteredList()" :key="destination"
             @click="handleResultClick(destination)">
          <p>{{ destination }}</p>
        </div>
        <div class="item error" v-if="input && !filteredList().length">
          <p>No results found!</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat&display=swap");

.input-container {
  width: 250px;
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
}

.homeButton {
  margin-top: 20px;
  padding: 10px;
  background-color: #3498db;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.titleAccommodations {
  text-align: center;
  font-size: 30px;
  color: darkblue;
  font-weight: bold;
  margin-top: 10px;

}
.destinations-container {
  width: 250px;
  margin-left: 19.5%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "Montserrat", sans-serif;
}

body {
  padding: 20px;
  min-height: 100vh;
  background-color: rgb(234, 242, 255);
}

.inputs {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.input-group {
  display: flex;
  align-items: center;
}

input {
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
  rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
}

.item {
  width: 250px;
  margin: 0 auto 10px auto;
  padding: 10px 20px;
  color: white;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
  rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
}

.destinations {
  background-color: rgb(97, 62, 252);
  cursor: pointer;
  margin: 0;
  margin-bottom: 10px;
}

.error {
  width: 250px;
  background-color: tomato;
  margin: 0 auto 10px auto;
  padding: 10px 20px;
  color: white;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
}

.location {
  background: white url("assets/search-icon.svg") no-repeat 0 center;
  background-size: 15px 15px;
  width: 220px;
  height: 30px;
  border-radius: 5px;
  border: 1px solid #ccc;
  padding: 5px 30px 5px 20px;
}

.check-in {
  width: 220px;
  height: 30px;
  border-radius: 5px;
  border: 1px solid #ccc;
  padding: 5px;
}

.check-out {
  width: 220px;
  height: 30px;
  border-radius: 5px;
  border: 1px solid #ccc;
  padding: 5px;
}

.guests {
  width: 220px;
  height: 30px;
  border-radius: 5px;
  border: 1px solid #ccc;
  padding: 5px;
}

.search-button {
  width: 150px;
  height: 30px;
  border-radius: 5px;
  border: 1px solid #ccc;
  padding: 5px;
  margin-top:19.2px;
}

.location:focus,
.check-in:focus,
.check-out:focus,
.guests:focus,
.search-button:focus {
  outline: none;
}

</style>