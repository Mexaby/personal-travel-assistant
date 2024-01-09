<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import AppHeader from "./page-components/AppHeader.vue";
const router = useRouter();
const goTo = (route) => {
  router.push(route);
};

let venue = {
  location: "",
  date: "",
  activity: "",
  attendees: 0,
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
  } else if (venue.date === "") {
    alert("Please select a date!");
  } else if (isNaN(venue.attendees) || venue.attendees <= 0) {
    alert("Please enter a valid number of guests!");
  } else {
    const today = new Date();
    const date = new Date(venue.date);
  
    if (date < today ) {
      alert("Please select dates in the future!");
    } else {
      venue.location = input.value;
      localStorage.setItem("venue", JSON.stringify(venue));
      goTo("/listingAccommodations")
    }
  }
}

</script>

<template>
  <div>
    <AppHeader />
    <div>Venues Page</div>
    <button @click="goTo('/')">Back to Home</button>
    <br /><br />
    <div class="search-container">
      <div class="inputs">
        <div class="input-group">
          <input v-model="input" type="text" class="location" placeholder="Select your location... "/>
          <input v-model="venue.date" type="date" class="date" placeholder="Date" />
          <label for="activities">Choose a venue:</label> 
          <select v-model="venue.activity" name="activities" id="activities">
            <option value="Restaurants">Restaurants</option>
            <option value="Local Cultural Events">Local Cultural Events</option>
            <option value="Meetings">Meetings</option>
          </select>
          <input v-model="venue.attendees" type="number" class="attendees" placeholder="Attendees" />
          <button @click="search" class="search-button">Search</button>
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

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat&display=swap");

.destinations-container {
  width: 250px;
  margin-left: 16.5%;
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

.input-group input {
  margin: 5px;
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
  width: 200px;
  height: 30px;
  border-radius: 5px;
  border: 1px solid #ccc;
  padding: 5px;
  margin: 5px;
}

.date {
  width: 200px;
  height: 30px;
  border-radius: 5px;
  border: 1px solid #ccc;
  padding: 5px;
  margin: 5px;
}

.attendees {
  width: 100px;
  height: 30px;
  border-radius: 5px;
  border: 1px solid #ccc;
  padding: 5px;
  margin: 5px;
}
.search-button {
  width: 100px;
  height: 30px;
  border-radius: 5px;
  border: 1px solid #ccc;
  padding: 5px;
  margin: 5px;
}

label {
  padding-inline: 5px;
}

.location:focus,
.date:focus,
.attendees:focus,
.search-button:focus {
  outline: none;
}

</style>