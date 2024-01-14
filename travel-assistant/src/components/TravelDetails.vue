<template>
    <div>
      <AppHeader />
      <div v-if="travelGo && travelReturn" class="travel-details">
        <div v-for="travel in [travelGo, travelReturn]" :key="travel.id" class="details-container">
          <h2>{{ travel.name }}</h2>
          <div class="image-container">
         
          </div>
          <div class="details">
            <div class="info">
              <div><strong>Location:</strong> {{ travel.location }}</div>
              <div><strong>Destination:</strong> {{ travel.destination }}</div>
              <div><strong>Departure Time:</strong> {{ travel.departureTime }}</div>
              <div><strong>Arrival Time:</strong> {{ travel.arrivalTime }}</div>
              <div><strong>Date:</strong> {{ travel.date}}</div>
              <div><strong>Company:</strong> {{ travel.company }}</div>
              <div><strong>Price:</strong> {{ travel.price }}</div>
            </div>
          </div>
        </div>
        <div class="button-container">
          <button @click="reserve" class="reserve-button">Reserve</button>
          <button @click="goBack" class="go-back-button">Go Back</button>
        </div>
      </div>
      <div v-else class="loading-message">
        Loading or not found message...
      </div>
    </div>
  </template>
  
  <script setup>
//   import { ref } from "vue";
//   import { useRouter } from "vue-router";
  import AppHeader from './page-components/AppHeader.vue';
  
  const travelGo = JSON.parse(localStorage.getItem("travelGo"));
  const travelReturn = JSON.parse(localStorage.getItem("travelReturn"));

 
  
  </script>
  
  <style scoped>
  .travel-details {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    background-color: white;
  }
  
  .image-container {
    margin-bottom: 20px;
  }
  
  .image-container img {
    max-width: 100%;
    height: auto;
    border-radius: 8px;
  }
  
  .details {
    font-family: 'Arial', sans-serif;
  }
  
  .description {
    margin-bottom: 10px;
  }
  
  .info {
    margin-bottom: 20px;
  }
  
  .info div {
    margin-bottom: 8px;
  }
  
  .reserve-button,
  .go-back-button {
    background-color: #4CAF50;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    margin-right: 10px;
  }
  
  .go-back-button {
    background-color: #f44336;
  }
  
  .reserve-button:hover,
  .go-back-button:hover {
    background-color: #45a049;
  }
  
  .loading-message {
    font-size: 18px;
    text-align: center;
    margin-top: 20px;
  }
  </style>
  