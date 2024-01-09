<template>
  <div>
    <div>Flights Page</div>
    <button @click="goTo('/')">Back to Home</button>
    <div class= "FromContainer">
      <span class="From"> From </span>
      <input type="text" class="location1" placeholder="Country, city or airport">
    </div>
    <div class= "ToContainer">
      <span class="To"> To </span>
      <input type="text" class="location2" placeholder="Country, city or airport">
    </div>
   <div class= "DepartContainer">
      <span class="Depart"> Depart </span>
      <input type="date" class="date1" placeholder="Add date">
    </div>
    <div class= "ReturnContainer">
      <span class="Return"> Return </span>
      <input type="date" class="date2" placeholder="Add date">
    </div>
     <div class= "TravellersContainer">
      <span class="Travellers"> Travellers and cabin class </span>
      <input type="text" class="travellersandclass" placeholder="1 Adult, Economy">
    </div>
    <div class= "DirectContainer">
      <span class="DirectFlight"> Direct Flight </span>
      <input type="checkbox" class="Directcheck">
    </div>
     <button class="search-button">Search</button>

  </div>
</template>

<script>
export default {
  methods: {
    goTo(route) {
      this.$router.push(route);
    },
  },
};
</script>


