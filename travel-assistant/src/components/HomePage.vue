<template>
  <div>
    <AppHeader />
    <div class="intro">
      <img src="./assets/background1.jpg" class="background-image" />
      <div class="overlay-text">
        <h1>Discover a world of possibilities</h1>
        <p>Embark with confidence, for JourneyGenius guides your every step</p>
        <div class="intro-action-buttons">
          <button class="plan-trip-button" @click="planTrip">Plan a trip</button>
          <button class="learn-more-link" v-on:click="scrollToAboutUs">Learn More</button>
        </div>
      </div>
    </div>
    <div class="about-us" ref="aboutUs">
      <div class="about-us-text">
        <h1>What is JourneyGenius?</h1>
        <p>
          JourneyGenius is a travel assistant that helps you plan your trip from start to finish. We provide you with the
          best flight, accommodation, and venue options based on your preferences. We also provide you with a detailed
          itinerary of your trip, so you can focus on enjoying your trip.
        </p>
        <p>
          At JourneyGenius, we envision a world where every journey is a seamless blend of discovery and ease. Our vision
          is to empower travelers with a smart companion that anticipates needs, unlocks hidden gems, and transforms each
          moment into an unforgettable adventure. With JourneyGenius, embark on a future of hassle-free exploration, where
          your travel aspirations become reality.
        </p>
      </div>
      <img src="./assets/about1.jpg" class="deco-image" />
    </div>
    <div class="offers">
      <travel-offer title="Paris" imageUrl="phuket.jpg"
        description="Paris, France's capital, is a major European city and a global center for art, fashion, gastronomy and culture. Its 19th-century cityscape is crisscrossed by wide boulevards and the River Seine."
        price="4 nights - $1000"/>
    </div>
  </div>
</template>

<script>
import AppHeader from './page-components/AppHeader.vue';
import TravelOffer from './page-components/TravelOffer.vue';

export default {
  components: {
    AppHeader,
    TravelOffer,
  },

  methods: {
    goTo(route) {
      this.$router.push(route);
    },
    planTrip() {
      localStorage.setItem('plan', 'true');
      this.$router.push('/flights');
    },
    scrollToAboutUs() {
      this.$nextTick(() => {
        const element = this.$refs.aboutUs;
        const top = element.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({ top: top, behavior: 'smooth' });
      });
    }
  },
};
</script>

<style scoped>
.intro {
  position: relative;
  width: 100%;
}

.background-image {
  border-radius: 5px;
  width: 100%;
}

.overlay-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  background-color: rgba(0, 0, 0, 0.45);
  padding: 1%;
  border-radius: 5px;
}


.overlay-text h1 {
  font-size: 5em;
  color: #fff;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 3);
  margin-bottom: 20px;
}

.overlay-text p {
  font-size: 1.2em;
  color: #fff;
  margin-bottom: 30px;
}

.plan-trip-button {
  font-size: 1.5em;
  margin-right: 20px;
  padding-left: 2%;
  padding-right: 2%;
  cursor: pointer;
}

.learn-more-link {
  font-size: 1.2em;
  margin-left: 20px;
  color: #fff;
  background: none;
  border: none;
  cursor: pointer;
  text-decoration: underline;
}

.intro-action-buttons {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  cursor: pointer;
}

button {
  height: 40px;
  border-radius: 5px;
  background-color: #145da0;
  color: white;
  margin-bottom: 20px;
}

.account-info {
  margin-left: auto;
  width: 10%;
}

.about-us {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  margin-bottom: 50px;
}

.about-us-text {
  margin-left: 30px;
  width: 50%;
  margin-right: 50px;
  margin-left: 50px;
  text-align: justify;
}

.about-us-text h1 {
  font-size: 3em;
  margin-bottom: 30px;
}

.about-us-text p {
  font-size: 1.2em;
  margin-bottom: 20px;
  width: 80%;
}

/* make the image round */
.deco-image {
  width: 30%;
  border-radius: 100px;
  border: 5px solid #145da0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 3);
}
</style>
