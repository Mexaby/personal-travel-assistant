<template>
    <div>
      <AppHeader />
      <div>Flights Page</div>
      <button @click="goTo('/')">Back to Home</button>
      </div>
</template>

<script>
import AppHeader from './page-components/AppHeader.vue';
console.log(localStorage.getItem("plan"));
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