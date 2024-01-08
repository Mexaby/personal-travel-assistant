<template>
  <div>
    <div>Flights Page</div>
    <button @click="goTo('/')">Back to Home</button>
  </div>
</template>

<script>
console.log(localStorage.getItem("plan"));
export default {
  methods: {
    goTo(route) {
      this.$router.push(route);
    },
  },
};
</script>


