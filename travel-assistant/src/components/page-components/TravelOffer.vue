<template>
    <div class="offer-card">
        <h2 class="offer-title">{{ title }}</h2>
        <img :src="require('../assets/' + imageUrl || 'paris.jpg' + '')" class="offer-image" />
        <p class="offer-description">{{ description }}</p>
        <p class="offer-price">{{ price }}</p>
        <button class="reserve-button" @click="goSummary">Reserve Now!</button>
    </div>
</template>
  
<script>
export default {
    name: 'TravelOffer',
    props: {
        title: {
            type: String,
            required: true
        },
        imageUrl: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        }
    },
    methods: {
        goSummary() {
            this.$router.push('/summary');
        }
    }
}
</script>
  
<style scoped>
.offer-card {
    display: grid;
    width: 33.33%;
    box-sizing: border-box;
    padding: 20px;
    border-radius: 5px;
    background-color: lightblue;
    align-items: center;
    justify-content: center;
    margin: 10px;
}

.offer-title,
.offer-description,
.offer-price {
    margin: 10px 0;
    text-align: justify;
    margin-bottom: 5%;
}

.offer-price{
    font-weight: bold;
    text-align: center;
}

.offer-image {
    width: 100%;
    height: auto;
    border-radius: 5px;
}

.reserve-button {
    height: 40px;
    border-radius: 5px;
    background-color: orange;
    margin-bottom: 20px;
    padding-left: 20px;
    padding-right: 20px;
    font-size: larger;
    font-weight: bold;
    margin-left: auto;
    margin-right: auto;
}

.reserve-button:hover {
    background-color: #ff8c00;
    cursor: pointer;
}
</style>