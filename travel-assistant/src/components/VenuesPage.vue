<script>
  import AppHeader from './page-components/AppHeader.vue';
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
    <AppHeader/>
    <div>Venues Page</div>
    <button @click="goTo('/')">Back to Home</button>
  </div>
</template>

<style>

</style>