<script>
import AppHeader from "./page-components/AppHeader.vue";
export default {
  components: {
    AppHeader,
  },
  methods: {
    goTo(route) {
      this.$router.push(route);
    },
  },
};
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
          <input type="text" class="location" placeholder="Select your location... "/>
          <input type="date" class="date" placeholder="Date" />
          <label for="activities">Choose a venue:</label> 
          <select name="activities" id="activities">
            <option value="Restaurants">Restaurants</option>
            <option value="Local Cultural Events">Local Cultural Events</option>
            <option value="Meetings">Meetings</option>
          </select>
          <input type="number" class="attendees" placeholder="Attendees" />
          <button class="search-button">Search</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.location {
  width: 220px;
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

label{
padding-inline: 5px;
}
</style>