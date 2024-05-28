<template>
    <div class="movieBox">
        <img :src="movie.poster_image_url" />
        <h3>{{ movie.title }}</h3>
        <p>{{ movie.popularity_summary }}</p>
    </div>
</template>



<script setup>
const props = defineProps({
    movie: Object,
    required: true,
})

const { movie } = props;
</script>

<style>
    .movieBox {
        width: 300px;
        margin: auto;
        display: auto;
        max-height: 500px;
        box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.4);
        border-radius: 4px;
        padding: 10px;
        text-align: center;
    }

	img {
        height: 400px;
        width: 280px;
    }
</style>
