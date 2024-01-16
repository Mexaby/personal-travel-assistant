<template>
  <div>
    <AppHeader />
    <div class="intro">
      <img src="./assets/background1.jpg" class="background-image" />
      <button class="hot-deals-button" @click="scrollToOffers">Click here to browse hot deals!</button>
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
    <div class="hot-deals-title">Hot Deals</div>
    <div class="offers" ref="offersSection">
      <travel-offer title="Paris" imageUrl="paris.jpg"
        description="Paris, France's capital, is a major European city and a global center for art, fashion, gastronomy and culture. Its 19th-century cityscape is crisscrossed by wide boulevards and the River Seine."
        price="4 nights - $1000" />
      <travel-offer title="Phuket" imageUrl="phuket.jpg"
        description="Phuket, a rainforested, mountainous island in the Andaman Sea, has some of Thailand’s most popular beaches, mostly situated along the clear waters of the western shore."
        price="5 nights - $3000" />
      <travel-offer title="Bora Bora" imageUrl="borabora.jpg"
        description="Bora Bora is a small South Pacific island northwest of Tahiti in French Polynesia. Surrounded by sand-fringed motus (islets) and a turquoise lagoon protected by a coral reef, it’s known for its scuba diving."
        price="7 nights - $5000" />
    </div>
    <div class="gallery-title">View some of our destinations</div>
    <div class="gallery">
      <!-- amsterdam, cancun, crete, cusco, hanoi, Hoi an, istambul, london, marrakech, paris, rome -->
      <image-card imageUrl="travelAmsterdam.jpg" imageTitle="Amsterdam" />
      <image-card imageUrl="travelBali.jpg" imageTitle="Bali" />
      <image-card imageUrl="travelCancun.jpg" imageTitle="Cancun" />
      <image-card imageUrl="travelCrete.jpg" imageTitle="Crete" />
      <image-card imageUrl="travelCusco.jpg" imageTitle="Cusco" />
      <image-card imageUrl="travelHanoi.jpg" imageTitle="Hanoi" />
      <image-card imageUrl="travelHoiAn.jpg" imageTitle="Hoi An" />
      <image-card imageUrl="travelIstambul.jpg" imageTitle="Istambul" />
      <image-card imageUrl="travelLondon.jpg" imageTitle="London" />
      <image-card imageUrl="travelMarrakech.jpg" imageTitle="Marrakech" />
      <image-card imageUrl="travelParis.jpg" imageTitle="Paris" />
      <image-card imageUrl="travelRome.jpg" imageTitle="Rome" />
    </div>
    <div class="footer">
      <div class="footer-content">
        <div class="footer-section about">
          <h1 class="logo-text"><span>Journey</span>Genius</h1>
          <hr />
        </div>
      </div>
      <div class="footer-bottom">
        &copy; 2024 TeamSix, All rights reserved.
        <div class="social-media">
          <a href="https://www.facebook.com/" target="_blank">
            <img src="./assets/facebook.png" alt="Facebook" />
          </a>
          <a href="https://twitter.com/" target="_blank">
            <img src="./assets/twitter.png" alt="Twitter" />
          </a>
          <a href="https://www.instagram.com/" target="_blank">
            <img src="./assets/instagram.png" alt="Instagram" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppHeader from './page-components/AppHeader.vue';
import TravelOffer from './page-components/TravelOffer.vue';
import ImageCard from './page-components/ImageCard.vue';

export default {
  data() {
    return {
      intervalId: null,
    };
  },

  mounted() {
    this.startInterval();
  },

  beforeUnmount() {
    this.clearInterval();
  },

  components: {
    AppHeader,
    TravelOffer,
    ImageCard,
  },

  methods: {
    startInterval() {
      let isRed = false;
      this.intervalId = setInterval(() => {
        const button = document.getElementsByClassName('hot-deals-button');
        if (isRed) {
          button[0].style.background = '#ff0000';
          isRed = false;
        } else {
          button[0].style.background = '#ff8c00';
          isRed = true;
        }
      }, 1000);
    },

    clearInterval() {
      clearInterval(this.intervalId);
    },

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
    },

    scrollToOffers() {
      this.$refs.offersSection.scrollIntoView({ behavior: 'smooth' });
    },
  },
};
</script>

<style scoped>
.intro {
  position: relative;
  width: 100%;
}
*
{
  font-family: "Montserrat", sans-serif;
}

.background-image {
  border-radius: 5px;
  width: 100%;
}

.hot-deals-button {
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: #ff0000;
  color: #ffffff;
  border: none;
  padding: 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 24px;
  margin: 4px;
  cursor: pointer;
  border-radius: 5px;
  font-weight: bold;
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
  padding: 1%;
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

.deco-image {
  width: 30%;
  border-radius: 100px;
  border: 5px solid #145da0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 3);
}

.hot-deals-title,
.gallery-title {
  text-align: center;
  font-size: 3em;
  margin-top: 50px;
  margin-bottom: 20px;
  ;
}

.offers {
  display: flex;
  margin-left: 5%;
  margin-right: 5%;
}

.gallery {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto;
  margin-left: 5%;
  margin-right: 5%;
  margin-bottom: 50px;
}

.footer {
  background-color: #3498db;
  color: #fff;
  padding: 20px;
  font-size: 0.8em;
  width: 100%;
  border-radius: 5px;
}

.logo-text {
  font-size: 2em;
  margin-bottom: 20px;
  text-align: center;
}

hr {
  color: #fff;
  opacity: 0.5;
  margin-bottom: 20px;
}

.footer-bottom {
  display: flex;
  align-items: center;
}

.footer-bottom img {
  width: 30px;
  margin-left: 10px;
  margin-right: 10px;
}

.social-media {
  margin-left: auto;
}
</style>