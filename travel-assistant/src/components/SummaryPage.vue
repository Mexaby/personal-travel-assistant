<template>
    <div>
        <AppHeader/>
        <div class="summary-section">
            <div class="summary-card" v-for="summary in summaries" :key="summary.title">
                <h2>{{ summary.title }}</h2>
                <img :src="summary.image">
                <p>{{ summary.text }}</p>
                <p>{{ summary.price }}</p>
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
                    { title: 'Transport Summary', image: './assets/white-image.png', text: 'summary about the transport', price: 'Price: $100' },
                    { title: 'Accomodation Summary', image: './assets/white-image.png', text: 'summary about the accomodations', price: 'Price: $2000' },
                    { title: 'Venue Summary', image: './assets/white-image.png', text: 'summary about the venues', price: 'Price: $300' },
                ],
                total: '$2400',
            };
        },
        methods: {
            goHome() {
                this.$router.push('/');
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
        justify-content: space-between;
        margin-bottom: 20px;
        border-radius: 5px;
        background-color: white;
        padding: 20px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    }
    .summary-card img {
        width: 100px;
        height: 100px;
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
    }
    .confirm-btn {
        background-color: #4CAF50;
        color: white;
        border-radius: 5px;
    }
</style>