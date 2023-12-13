<template>
  <div>
    <div class="header">
      <button @click="goTo('/')">Back to Home</button>
      <button class="account-info" @click="goTo('/account')">
        My Account
        <div v-if="showOptions" class="options-list">
          <div>Option 1</div>
          <div>Option 2</div>
          <div>Option 3</div>
        </div>
      </button>
    </div>
    
    <div class="actions">
      <button class="plan-trip" @click="goTo('/plan')">Plan a Trip</button>
      <div class="action-buttons">
        <button class="secondary-action" @click="goTo('/flights')">Flights</button>
        <button class="secondary-action" @click="goTo('/accommodations')">Accommodation</button>
        <button class="secondary-action" @click="goTo('/venues')">Venues</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showOptions: false,
    };
  },
  methods: {
    goTo(route) {
      this.$router.push(route);
    },
  },
};
</script>

<style>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  max-width: 600px;
  margin: 0 auto;
}

.actions {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  max-width: 550px; /* Adjust the max-width as needed */
  margin: 0 auto;
  margin-top: 100px;
}

.plan-trip {
  width: 100%; /* Make the button span the full width */
  margin-bottom: 10px; /* Adjust the margin as needed */
}

.secondary-action{
  width: 30%;
}

.action-buttons {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.options-list {
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #fff;
  border: 1px solid #ccc;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 10px;
  display: none;
}

.account-info:hover .options-list {
  display: block;
}



button {
  height: 40px;
  border-radius: 5px;
  background-color: #145da0;
  color: white;
  margin-bottom: 20px;
}

</style>
