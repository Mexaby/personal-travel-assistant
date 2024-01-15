<template>
    <div class="image-card">
        <img :src="require('../assets/' + imageUrl || 'paris.jpg' + '')" alt="Image Card" />
        <div class="image-card-title">{{ imageTitle }}</div>
    </div>
</template>
  
<script>
export default {
    name: 'ImageCard',
    props: {
        imageUrl: {
            type: String,
            required: true,
        },

        imageTitle: {
            type: String,
            required: true,
        },
    },
};
</script>
  
<style scoped>

.image-card {
    padding: 10px;
}

img {
    width: 100%;
    height: auto;
    border-radius: 10px;
    border: 3px solid #145da0;
    box-shadow: 0 0 5px #145da0;
    margin: 1%;
}

.image-card-title {
    width: 100%;
    top: 50%;
    left: 50%;
    font-family: 'Montserrat', sans-serif;
    font-size: 30px;
    color: #145da0;
}

</style>