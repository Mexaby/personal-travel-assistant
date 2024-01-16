<template>
  <div>
    <AppHeader/>
    
    <!-- Four card buttons with images and updated labels -->
    <div class="button-container">
      <div class="custom-card-container">
        <button class="custom-card reserved-trips" @click="goTo('/reserved-trips')">
          <div class="card-content">
            <img src=".././assets/Planned-Trip.png" alt="Reserved Trips">
            <span>Reserved Trips</span>
          </div>
        </button>
      </div>
      <div class="custom-card-container">
        <button class="custom-card previous-trips" @click="goTo('/prevreservations')">
          <div class="card-content">
            <img src=".././assets/Previous-Trip.png" alt="Previous Trips">
            <span>Previous Trips</span>
          </div>
        </button>
      </div>
      <div class="custom-card-container">
        <button class="custom-card invoices" @click="goTo('/invoices')">
          <div class="card-content">
            <img src=".././assets/Invoices.png" alt="Invoices">
            <span>Invoices</span>
          </div>
        </button>
      </div>
      <div class="custom-card-container">
        <button class="custom-card assistant" @click="goTo('/assistant')">
          <div class="card-content">
            <img src=".././assets/Butler.png" alt="Assistant">
            <span>Assistant</span>
          </div>
        </button>
      </div>
      <div class="custom-card-container">
        <button class="custom-card assistant" @click="goTo('/currency')">
          <div class="card-content">
            <img src="../../classes/photos/money.png" alt="Money">
            <span>Convert</span>
          </div>
        </button>
      </div>
    </div>
  </div>
</template>


<script>
import AppHeader from '.././page-components/AppHeader.vue';
export default {
  components: {
    AppHeader,
  },
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

<style scoped>

.button-container {
  display: flex;
  max-width: 850px;
  margin: 0 auto;
  margin-top: 100px;
}

.custom-card-container {
  flex: 1;
  display: flex;
  align-items: stretch;
  padding: 10px;
}

.custom-card {
  width: 100%;
  border: none;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;
  display: flex;
  flex-direction: column;
}

.custom-card:hover {
  transform: scale(1.05);
}

.card-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden; /* Add overflow property to hide any content that goes beyond the border */
  justify-content: center;
  text-align: center;
}

.custom-card img {
  width: 100%;
  height: 100%;
  border-radius: 10px 10px 0 0; /* Keep rounded corners only at the bottom */
  object-fit: cover;
}

.custom-card span {
  display: block;
  width: 100%;
  padding-bottom: 10px;
  padding-top: 10px;
  background-color: #145da0;
  color: white;
  text-align: center;
  font-weight: bold;
  margin-top: auto;
}
</style>