<template>
  <div>
    <AppHeader/>
    <div class="header">
      <button @click="goTo('/')">Back to Home</button>
      <div class="account-info" @mouseover="showOptions = true" @mouseleave="showOptions = false">
        My Account
        <div v-if="showOptions" class="options-list">
          <div>Option I</div>
          <div>Option II</div>
          <div>Option III</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppHeader from './page-components/AppHeader.vue';
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
/* Base styling for larger screens */
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
  border: 1px solid #ccc;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 10px;
  display: none;
}

.account-info:hover .options-list {
  display: block;
}
</style>
