<template>
  <div>
    <div class="header">
      <button @click="goTo('/')">Back to Home</button>
      <div class="account-info">My Account</div>
    </div>

    <!-- Three columns with two rows of buttons -->
    <div class="button-container">
      <div class="button-column">
        <button class="custom-button">Button 1</button>
        <button class="custom-button">Button 2</button>
      </div>
      <div class="button-column">
        <button class="custom-button">Button 3</button>
        <button class="custom-button">Button 4</button>
      </div>
      <div class="button-column">
        <button class="custom-button">Button 5</button>
        <button class="custom-button">Button 6</button>
      </div>
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

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
}

.account-info {
  margin-right: 10px; /* Adjust the margin as needed */
}

.button-container {
  display: flex;
  max-width: 550px;
  margin: 0 auto;
}

.button-column {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
}

.custom-button {
  width: 100%;
  height: 40px;
  border-radius: 5px;
  background-color: blue;
  color: white;
  margin-bottom: 20px;
}
</style>
