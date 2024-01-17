<template>
    <div>
        <AppHeader />
        <div class="summary-section">
            <div class="summary-card" v-for="summary in summaries" :key="summary.title">
                <h2 class="card-title">{{ summary.title }}</h2>
                <img class="card-image" :src="require('./assets/' + summary.image || 'paris.jpg' + '')">
                <p class="card-summary">{{ summary.text }}</p>
                <p class="card-price">{{ summary.price }}</p>
            </div>
            <hr>
            <p class="total">Total: {{ total }}</p>
            <div class="action-buttons">
                <button @click="goHome" class="btn">Return to Home</button>
                <button @click="confirmTrip" class="btn confirm-btn">Confirm Your Trip</button>
            </div>
        </div>
    </div>
</template>

<script scoped>
import AppHeader from './page-components/AppHeader.vue';

export default {
    components: {
        AppHeader,
    },
    data() {
        return {
            summaries: [
                { title: 'Transport', image: 'Plane.webp', text: 'Summary about the transport', price: 'Price: $100' },
                { title: 'Accomodation', image: 'hotel1.jpg', text: 'Summary about accomodation', price: 'Price: $2000' },
                { title: 'Venues', image: 'LocalCulturalEvent1.jpg', text: 'Summary about the venues', price: 'Price: $300' },
            ],
            total: '$2400',
        };
    },
    methods: {
        goHome() {
            this.$router.back();
        },
        confirmTrip() {
            alert('Payment pending. Thanks for choosing JourneyGenius. You will be returned to the homepage.');
            this.goHome();
        },
    },
};
</script>

<style scoped>
* {
    font-family: 'Montserrat', sans-serif;
}

.summary-section {
    width: 80%;
    margin: 0 auto;
}

.summary-card {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 20px;
    border-radius: 5px;
    background-color: white;
    padding: 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

.summary-card img {
    width: 200px;
    height: 200px;
    border-radius: 5px;
    margin: 0 20px;
}

 .card-image, .card-summary, .card-price {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
}

.card-title {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: start;
    text-align: center;
}

.card-price {
    font-size: 20px;
    font-weight: bold;
    justify-content: end;
}

.total {
    font-size: 20px;
    font-weight: bold;
}

.action-buttons {
    display: flex;
    justify-content: space-between;
}

.button {
    border-radius: 5px;
}

.btn {
    padding: 10px 20px;
    margin-top: 20px;
    background-color: #3498db;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

h2 {
    max-width: 1000px;
}

.confirm-btn {
    background-color: #4CAF50;
    color: white;
    border-radius: 5px;
}</style>