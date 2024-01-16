<template>
  <div>
    <AppHeader />
    <div class="chat-window">

      <div class="chat-bubble my-message">
        When should I go to the airport to get on time?
      </div>

      <div class="chat-bubble your-message">
        <div class="profile-photo">
          <img src=".././assets/Butler.png" alt="Butler" />
        </div>
        You should start going to the airport with 2 hours to spare, to account for traffic and check-in.
      </div>

      <div class="chat-bubble my-message">
        What is the location of the airport to which we should go?
      </div>

      <div class="chat-bubble your-message">
        <div class="profile-photo">
          <img src=".././assets/Butler.png" alt="Butler" />
        </div>
        <div class="map-image">
          <!-- Add the image representing the Google Maps location -->
          <a href="https://maps.app.goo.gl/bJP4uGM4Vs2AscCg6">
            <img src=".././assets/Maps-Pin.webp" alt="Airport Location" />
          </a>
        </div>
        For best results, you should use this pinned location to open Google Maps and use the directions provided by that application.
      </div>

      <div class="message-input">
        <input type="text" placeholder="Type your message..." />
        <button @click="sendMessage">Send</button>
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

.chat-window {
  max-width: 700px;
  margin: 20px auto;
  border: 2px solid #3498db; /* Border color */
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  background-color: #ecf0f1; /* Background color */
}

.profile-photo {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
}

.profile-photo img {
  width: 70px;
  height: 70px;
  border-radius: 50%;
}

.chat-bubble {
  max-width: 60%;
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
  position: relative;
}

.my-message {
  background-color: #2ecc71; /* My message background color */
  color: #fff; /* My message text color */
  align-self: flex-end;
}

.your-message {
  background-color: #3498db; /* Your message background color */
  color: #fff; /* Your message text color */
  align-self: flex-start;
}

.message-input {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-top: 1px solid #3498db; /* Border color */
  border-radius: 0 0 10px 10px;
  background-color: #fff; /* Input area background color */
}

.message-input input {
  flex-grow: 1;
  padding: 8px;
  margin-right: 10px;
  border: none;
  border-radius: 5px;
}

.message-input button {
  padding: 8px 15px;
  border: none;
  border-radius: 5px;
  background-color: #3498db; /* Button color */
  color: #fff;
  cursor: pointer;
}

.message-input button:hover {
  background-color: #2980b9; /* Button color on hover */
}

.map-image img {
  max-width: 100%; /* Ensure the image doesn't exceed its container */
  height: auto; /* Maintain the aspect ratio */
}

</style>
