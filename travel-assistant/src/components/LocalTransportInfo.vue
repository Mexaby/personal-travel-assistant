<template>
  <div class="bus-page">
    <AppHeader />
    <h2 class="page-title">Local Buses Information</h2>
    <div class="bus-list">
      <div v-for="item in busInfo" :key="item.busNumber" class="bus-item">
        <div class="bus-details">
          <div class="bus-number">Transport Number: {{ item.busNumber }}</div>
          <div class="bus-from">From: {{ item.busFrom }}</div>
          <div class="bus-to">To: {{ item.busTo }}</div>
          <div class="bus-time-from">Time From: {{ item.busTimeFrom }}</div>
          <div class="bus-time-until">Time Until: {{ item.busTimeUntil }}</div>
          <div class="bus-frequency">Frequency: {{ item.frequency }} minutes</div>
          <div class="bus-price">Price: {{ item.busPrice }}$</div>
        </div>
      </div>
    </div>
    <button @click="goBack" class="back-button">Go Back</button>
  </div>
</template>

<style scoped>
.bus-page {
  padding: 20px;
}

.page-title {
  text-align: center;
  font-size: 24px;
  color: darkblue;
  font-weight: bold;
  margin-bottom: 20px;
}

.bus-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
}

.bus-item {
  display: flex;
  flex-direction: column;
  border: 1px solid #ccc;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.bus-details {
  padding: 15px;
}

.bus-number,
.bus-city,
.bus-from,
.bus-to,
.bus-time-from,
.bus-time-until,
.bus-frequency,
.bus-price {
  margin-bottom: 10px;
}

.back-button {
  margin-top: 20px;
  padding: 10px;
  background-color: #3498db;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.back-button:hover {
  background-color: #2980b9;
}
</style>

<script setup>

import AppHeader from "@/components/page-components/AppHeader.vue";
import router from "@/router";

const goBack = () => {
  router.back();
};
const createBusInfo = () => {
  let busInfo = [];
  for (let i = 0; i < 50; i++)
  {
    busInfo.push({
      busNumber: i+1,
      busFrom: "location1",
      busTo: "location2",
      busTimeFrom: "10:00",
      busTimeUntil: "24:00",
      frequency : 10,
      busPrice: 2.5
    })
  }
  return busInfo;
}
const busInfo = createBusInfo();
console.log(busInfo);
</script>

<style scoped>
</style>
