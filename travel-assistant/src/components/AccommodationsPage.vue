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
  </div>

</template>

<style>

</style>