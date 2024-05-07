<template>
    <div class="movieBox">
        <p>Title: {{ movie.title }}</p>
        <p>ID: {{ movie.movie_id }}</p>
        <p>Summary: {{ movie.popularity_summary }}</p>
        <Img :src="movie.poster_image_url" />
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
        width: 400px;
        margin: auto;
        display: auto;
        min-heigh: 200px;
    }

	img {
		object-fit: contain;
		max-width: 500px;
		min-height: 400px;
		margin: auto;
		display: block;
	}
</style>
