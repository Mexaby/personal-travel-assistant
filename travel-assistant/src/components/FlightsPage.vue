<template>
  <div>
    <AppHeader />
    <div>Flights Page</div>
    <button @click="goTo('/')">Back to Home</button>
    <div class=InputsClass>
      <div class=InputGroup>
        <div class="DropdownTransport">
          <label for="dropdownInput">Select transport:</label>
          <select id="dropdownInput" v-model="travel.transport">
            <option value="opcion1">Plane</option>
            <option value="opcion2">Train</option>
            <option value="opcion3">Bus</option>
            <option value="opcion4">Boat</option>
          </select>
        </div>
        <div class="FromContainer">
          <span class="From"> From </span>
          <input v-model="input1" type="text" class="location1" placeholder="Select your location...">
        </div>
        <div class="ToContainer">
          <span class="To"> To </span>
          <input v-model="input2" type="text" class="location2" placeholder="Search destination...">
        </div>
        <div class="DepartContainer">
          <span class="Depart"> Depart </span>
          <input v-model="travel.date1" type="date" class="date1">
        </div>
        <div class="ReturnContainer">
          <span class="Return"> Return </span>
          <input v-model="travel.date2" type="date" class="date2">
        </div>
        <div class="TravellersContainer">
          <span class="Travellers"> Travellers </span>
          <input v-model="travel.travellers" type="number" class="travellersandclass" placeholder="1 Adult, Economy">
        </div>
      </div>
      <div class=InputButtons>
        <div class="DirectContainer">
          <span class="DirectFlight"> Direct Flight </span>
          <input type="checkbox" class="Directcheck">
        </div>
        <button  @click="search" class="Searchbutton">Search</button>
      </div>
      <div v-if="showDestinations1 && input1 !== ''" class="destinations-container1">
        <div class="item destinations" v-for="destination1 in filteredList1()" :key="destination1"
          @click="handleResultClick1(destination1)">
          <p>{{ destination1 }}</p>
        </div>
        <div class="items errors" v-if="input1 && !filteredList1().length">
          <p>No results found!</p>
        </div>
      </div>
      <div v-if="showDestinations2 && input2 !== ''" class="destinations-container2">
        <div class="item destinations" v-for="destination2 in filteredList2()" :key="destination2"
          @click="handleResultClick2(destination2)">
          <p>{{ destination2 }}</p>
        </div>
        <div class="items errors" v-if="input2 && !filteredList2().length">
          <p>No results found!</p>
        </div>
      </div>
    </div>
  </div>
</template>



<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import AppHeader from './page-components/AppHeader.vue';
const router = useRouter();
const goTo = (route) => {
  router.push(route);
};

let travel = {
  transport: "",
  from: "",
  to: "",
  date1: "",
  date2: "",
  travellers: 0,
}
let input1 = ref("");
let input2 = ref("");
let showDestinations1 = ref(true);
let showDestinations2 = ref(true);

const destinations = ["Cluj-Napoca", "Alicante", "Bucharest", "Budapest", "Istanbul", "London", "Madrid", "Paris", "Rome", "Vienna"];
function filteredList1() {
  return destinations.filter((destination1) =>
    destination1.toLowerCase().includes(input1.value.toLowerCase())
  );
}
function filteredList2() {
  return destinations.filter((destination2) =>
    destination2.toLowerCase().includes(input2.value.toLowerCase())
  );
}

function handleResultClick1(destination1) {
  input1.value = destination1;
  showDestinations1.value = false;
}

function handleResultClick2(destination2) {
  input2.value = destination2;
  showDestinations2.value = false;
}

function search() {
  if (input1.value === "") {
    alert("Please enter a location!");
  } else if (input2.value === "") {
    alert("Please enter a destination!");
  } else if (!destinations.includes(input1.value)) {
    alert("Please enter a valid location!");
  } else if (!destinations.includes(input2.value)) {
    alert("Please enter a valid destination!");
  } else if (input2.value === input1.value) {
    alert("Same location and destination are not valid!");
  } else if (travel.date1 === "" || travel.date2 === "") {
    alert("Please select both check-in and check-out dates!");
  } else if (isNaN(travel.travellers) || travel.travellers <= 0) {
    alert("Please enter a valid number of guests!");
  } else if (!isNaN(travel.transport)) {
    alert("Please select a transport option!");
  } else {
    const today = new Date();
    const departDate = new Date(travel.date1);
    const returnDate = new Date(travel.date2);

    if (departDate >= returnDate) {
      alert("Check-out date must be after the check-in date!");
    } else if (departDate < today || returnDate < today) {
      alert("Please select dates in the future!");
    } else {
      travel.from = input1.value;
      travel.to = input2.value;
      localStorage.setItem("travel", JSON.stringify(travel));
      goTo("/listingTravels")
    }
  }
}

</script>






<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat&display=swap");

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



#dropdownInput {
  position: relative;
  background: white url(http://192.168.1.95:8080/img/search-icon.f7bfd452.svg) no-repeat 0 center;
  background-size: 15px 15px;
  width: 200px;
  height: 30px;
  border-radius: 5px;
  border: 1px solid #ccc;
  padding: 5px 30px 5px 20px;
  margin: 20px;
  position: relative;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
}



.location2 {
  position: relative;
  background: white url(http://192.168.1.95:8080/img/search-icon.f7bfd452.svg) no-repeat 0 center;
  background-size: 15px 15px;
  width: 200px;
  height: 30px;
  border-radius: 5px;
  border: 1px solid #ccc;
  padding: 5px 30px 5px 20px;
}

.location1 {
  position: relative;
  background: white url(http://192.168.1.95:8080/img/search-icon.f7bfd452.svg) no-repeat 0 center;
  background-size: 15px 15px;
  width: 200px;
  height: 30px;
  border-radius: 5px;
  border: 1px solid #ccc;
  padding: 5px 30px 5px 20px;
}

.date1 {
  position: relative;
  background: white url(http://192.168.1.95:8080/img/search-icon.f7bfd452.svg) no-repeat 0 center;
  background-size: 15px 15px;
  width: 200px;
  height: 30px;
  border-radius: 5px;
  border: 1px solid #ccc;
  padding: 5px 30px 5px 20px;
}

.date2 {
  position: relative;
  background: white url(http://192.168.1.95:8080/img/search-icon.f7bfd452.svg) no-repeat 0 center;
  background-size: 15px 15px;
  width: 200px;
  height: 30px;
  border-radius: 5px;
  border: 1px solid #ccc;
  padding: 5px 30px 5px 20px;
}

.travellersandclass {
  position: relative;
  background: white url(http://192.168.1.95:8080/img/search-icon.f7bfd452.svg) no-repeat 0 center;
  background-size: 15px 15px;
  width: 200px;
  height: 30px;
  border-radius: 5px;
  border: 1px solid #ccc;
  padding: 5px 30px 5px 20px;
}

label {
  position: absolute;
  top: 0px;
  left: 20px;
}

.DropdownTransport {
  position: relative;
}

.To {
  position: absolute;
  top: 0px;
  left: 20px;
}

.ToContainer {
  position: relative;
}


.From {
  position: absolute;
  top: 0px;
  left: 20px;
}

.FromContainer {
  position: relative;
}

.Depart {
  position: absolute;
  top: 0px;
  left: 20px;
}

.DepartContainer {
  position: relative;
}

.Return {
  position: absolute;
  top: 0px;
  left: 20px;
}

.ReturnContainer {
  position: relative;
}

.Travellers {
  position: absolute;
  top: 0px;
  left: 20px;
}

.TravellersContainer {
  position: relative;
}

.InputGroup input {
  margin: 20px;
}

.InputGroup {
  display: flex;
  align-items: center;
}

.InputButtons {
  display: flex;
  align-items: center;
  margin-left: 25px;
}

.Searchbutton {
  width: 150px;
  height: 50px;
  border-radius: 5px;
  border: 1px solid #ccc;
  padding: 5px;
  margin: 5px;
  margin-left: 500px;
  margin-top: 20px;
}

.InputsClass {
  margin-top: 50px;
  position: relative;
  z-index: 1;
 }
  .destinations-container1 {
  width: 200px;
  margin-left:  260px;
  display: block;
  flex-direction: column;
  align-items: center;
  position:absolute;
  top: 40%;
  z-index: 2;
}
.destinations-container2 {
  width: 200px;
  margin-left: 500px;
  display: block;
  flex-direction: column;
  align-items: center;
  position:absolute;
  top: 40%;
  z-index: 2;
}

.destinations {
  background-color: rgb(97, 62, 252);
  cursor: pointer;
  margin: 0;
  margin-bottom: 10px;
  width: 200px;
}


.items {
  width: 200px;
  margin: 0 auto 10px auto;
  padding: 10px 20px;
  color: white;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
    rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
}
.errors {
  width: 200px;
  background-color: tomato;
  margin: 0 auto 10px auto;
  padding: 10px 20px;
  color: white;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
}




</style>
