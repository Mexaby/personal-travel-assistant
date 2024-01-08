<template>
    <header class="app-header">
      <div class="title">{{ title }}</div>
      <nav class="nav-links">
        <router-link to="/plan">Plan a trip</router-link>
        <router-link to="/flights">Flights</router-link>
        <router-link to="/accommodation">Accommodation</router-link>
        <router-link to="/venues">Venues</router-link>
      </nav>
      <button class="my-account-btn">My Account</button>
    </header>
  </template>
  
  <script>
  export default {
    name: "AppHeader",
    props: {
      title: String,
    },
  };
  </script>
  
  <style scoped>
  .app-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    background-color: #3498db;
    color: #fff;
  }
  
  .title {
    font-size: 1.5em;
  }
  
  .nav-links {
    display: flex;
  }
  
  .nav-links router-link {
    margin-right: 15px;
    color: #fff;
    text-decoration: none;
  }
  
  .my-account-btn {
    padding: 10px 15px;
    background-color: #2ecc71;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  </style>
  