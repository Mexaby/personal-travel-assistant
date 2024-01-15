<template>
  <div>
    <AppHeader/>
    <div class="header">
      <button @click="goTo('/')">Back to Home</button>
      <div class="account-info" @mouseover="showOptions = true" @mouseleave="showOptions = false">
        My Account
        <div v-if="showOptions" class="options-list">
          <div>Option 1</div>
          <div>Option 2</div>
          <div>Option 3</div>
        </div>
      </div>
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
        <button class="custom-button" @click="goTo('/assistant')">Assistant</button>
      </div>
    </div>
  </div>
</template>

<script>
import AppHeader from '../page-components/AppHeader.vue';
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
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  max-width: 600px;
  margin: 0 auto;
}

.account-info {
  position: relative;
}

.options-list {
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #fff;
  border: 1px solid #bbb;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 10px;
  display: none;
}

.account-info:hover .options-list {
  display: block;
}

.button-container {
  display: flex;
  max-width: 550px;
  margin: 0 auto;
  margin-top: 100px;
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
  background-color: #145da0;
  color: white;
  margin-bottom: 20px;
}

</style>
