<template>
  <div>
    <div>My Account</div>
    <button @click="goTo('/')">Back to Home</button>
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