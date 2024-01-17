<template>
  <div class="packing-info-container">
  <AppHeader />
  <button @click="goBack()" class="back-button">Go Back</button>
    <h2>Travel Packing Guide</h2>

    <div class="packing-section">
      <h3>Essentials</h3>
      <ul class="packing-list">
        <li v-for="item in essentials" :key="item.id" @click="toggleCheckbox(item)">
          <span>{{ item.name }}</span>
          <input type="checkbox" v-model="item.checked" />
        </li>
      </ul>
    </div>

    <div class="packing-section">
      <h3>Clothing</h3>
      <ul class="packing-list">
        <li v-for="item in clothing" :key="item.id" @click="toggleCheckbox(item)">
          <span>{{ item.name }}</span>
          <input type="checkbox" v-model="item.checked" />
        </li>
      </ul>
    </div>

    <div class="packing-section">
      <h3>Electronics</h3>
      <ul class="packing-list">
        <li v-for="item in electronics" :key="item.id" @click="toggleCheckbox(item)">
          <span>{{ item.name }}</span>
          <input type="checkbox" v-model="item.checked" />
        </li>
      </ul>
    </div>

    <div class="packing-section">
      <h3>Toiletries</h3>
      <ul class="packing-list">
        <li v-for="item in toiletries" :key="item.id" @click="toggleCheckbox(item)">
          <span>{{ item.name }}</span>
          <input type="checkbox" v-model="item.checked" />
        </li>
      </ul>
    </div>

    <div class="packing-section">
      <h3>Other Items</h3>
      <ul class="packing-list">
        <li v-for="item in otherItems" :key="item.id" @click="toggleCheckbox(item)">
          <span>{{ item.name }}</span>
          <input type="checkbox" v-model="item.checked" />
        </li>
      </ul>
    </div>

  </div>
</template>

<script setup>
import { ref } from "vue";
import AppHeader from "@/components/page-components/AppHeader.vue";
import router from "@/router";

const goBack = () => {
  router.back();
};

const toggleCheckbox = (item) => {
  item.checked = !item.checked;
};
const essentials = ref([
  { id: 1, name: "Passport and travel documents", checked: false },
  { id: 2, name: "Money and credit cards", checked: false },
  { id: 3, name: "Travel insurance", checked: false },
  { id: 4, name: "Health insurance card", checked: false },
  { id: 5, name: "Prescription medications", checked: false },
  { id: 6, name: "Basic first aid kit", checked: false },
]);

const clothing = ref([
  { id: 7, name: "T-shirts", checked: false },
  { id: 8, name: "Jeans", checked: false },
  { id: 9, name: "Sweater", checked: false },
  { id: 10, name: "Jacket", checked: false },
]);

const electronics = ref([
  { id: 11, name: "Phone", checked: false },
  { id: 12, name: "Laptop", checked: false },
  { id: 13, name: "Chargers", checked: false },
  { id: 14, name: "Headphones", checked: false },
]);

const toiletries = ref([
  { id: 15, name: "Toothbrush", checked: false },
  { id: 16, name: "Toothpaste", checked: false },
  { id: 17, name: "Shampoo", checked: false },
  { id: 18, name: "Soap", checked: false },
]);

const otherItems = ref([
  { id: 19, name: "Travel pillow", checked: false },
  { id: 20, name: "Water bottle", checked: false },
  { id: 21, name: "Snacks", checked: false },
  { id: 22, name: "Notebook and pen", checked: false },
]);
</script>

<style scoped>
.packing-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 10px;
}

button {
  margin-top: 20px;
  padding: 12px;
  background-color: #3498db;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.packing-list li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

h2 {
  color: #3498db;
  margin-bottom: 20px;
}

h3 {
  color: #555;
}
</style>
