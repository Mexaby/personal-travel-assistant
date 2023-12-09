<script>
  export default {
    methods: {
      goTo(route) {
        this.$router.push(route);
      },
    },
  };
</script>

<template>
  <div>
    <div>Accommodations Page</div>
    <button @click="goTo('/')">Back to Home</button>
    <br><br>
    <input type="text" class="location" placeholder="Select your destination">
    <input type="date" class="check-in" placeholder="Check-in">
    <input type="date" class="check-out" placeholder="Check-out">
    <input type="number" class="guests" placeholder="Guests">
    <button class="search-button">Search</button>
  </div>

</template>

<style>
  .location
  {
    width: 200px;
    height: 30px;
    border-radius: 5px;
    border: 1px solid #ccc;
    padding: 5px;
    margin: 5px;
  }

  .check-in
  {
    width: 100px;
    height: 30px;
    border-radius: 5px;
    border: 1px solid #ccc;
    padding: 5px;
    margin: 5px;
  }

  .check-out
  {
    width: 100px;
    height: 30px;
    border-radius: 5px;
    border: 1px solid #ccc;
    padding: 5px;
    margin: 5px;
  }

  .guests
  {
    width: 100px;
    height: 30px;
    border-radius: 5px;
    border: 1px solid #ccc;
    padding: 5px;
    margin: 5px;
  }
  .search-button
  {
    width: 100px;
    height: 30px;
    border-radius: 5px;
    border: 1px solid #ccc;
    padding: 5px;
    margin: 5px;
  }

  .location:focus, .check-in:focus, .check-out:focus, .guests:focus, .search-button:focus
  {
    outline: none;
  }

  .check-out
  {
    margin-left: 5px;
  }
</style>