<template>
  <div>
    <div>Homepage</div>
    <button>Plan a Trip</button>
    <div>
      <button @click="goTo('/account')">My Account</button>
      <button @click="goTo('/flights')">Flights</button>
      <button @click="goTo('/accommodations')">Accommodation</button>
      <button @click="goTo('/venues')">Venues</button>
    </div>
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

<style>
    /* STYLING GOES HERE (e.g. the css) */
</style>
