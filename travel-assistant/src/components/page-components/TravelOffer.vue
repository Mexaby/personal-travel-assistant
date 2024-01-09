<template>
    <div class="offer-card">
      <h2 class="offer-title">{{ title }}</h2>
      <img :src="image" alt="Destination image" class="offer-image">
      <p class="offer-description">{{ description }}</p>
      <p class="offer-price">{{ price }}</p>
      <button class="reserve-button">Reserve Now</button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'TravelOffer',
    props: {
      title: {
        type: String,
        required: true
      },
      image: {
        type: String,
        required: true
      },
      description: {
        type: String,
        required: true
      },
      price: {
        type: Number,
        required: true
      }
    }
  }
  </script>
  
  <style scoped>
  .offer-card {
    width: 33.33%;
    box-sizing: border-box;
    padding: 20px;
  }
  .offer-title, .offer-description, .offer-price {
    margin: 10px 0;
  }
  .offer-image {
    width: 100%;
    height: auto;
  }
  .reserve-button {
    background-color: #007BFF;
    color: white;
    padding: 10px 20px;
    border: none;
    cursor: pointer;
  }
  </style>